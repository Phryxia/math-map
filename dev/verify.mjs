import fs from 'node:fs'
import path from 'node:path'
import {read,documentRoot,render,validate,checkBody,checkLinks,write,isLegacyBody,stripFences,MAX_LINES,loadGraph} from './core.mjs'
const stored=read('topology.json',{})
if(stored.nodes?.some(n=>typeof n.body==='string'))throw Error('topology.json must not contain bodies; bodies live in docs/')
const graph=loadGraph()
const result=validate(graph)
checkLinks(graph)
let formulaCount=0, legacyCount=0, mermaidCount=0, codeCount=0
for (const node of graph.nodes) {
 checkBody(node.body,{legacy:true})
 if(isLegacyBody(node.body))legacyCount++
 const file=fs.readFileSync(path.join(documentRoot,node.id+'.md'),'utf8')
 if(file!==render(node,graph))throw Error('document mismatch: '+node.id)
 if(file.split('\n').length>MAX_LINES)throw Error('document exceeds '+MAX_LINES+' lines: '+node.id)
 if(!node.createdAt||!node.updatedAt||Date.parse(node.createdAt)>Date.parse(node.updatedAt))throw Error('invalid timestamps')
 mermaidCount+=(file.match(/```mermaid/g)||[]).length
 codeCount+=(file.match(/```(?!mermaid)[a-z]*\n/g)||[]).length
 for(const [,math] of stripFences(file).matchAll(/\$\$([\s\S]*?)\$\$/g)) {
  formulaCount++
  let level=0
  for(let i=0;i<math.length;i++) {
   if(math[i]==='\\'){i++;continue}
   if(math[i]==='{')level++
   if(math[i]==='}')level--
   if(level<0)throw Error('unbalanced brace: '+node.id)
  }
  if(level)throw Error('unbalanced brace: '+node.id)
  const environments=[]
  for(const [,command,name]of math.matchAll(/\\(begin|end)\{([^}]+)\}/g)) {
   if(command==='begin')environments.push(name)
   else if(environments.pop()!==name)throw Error('unbalanced environment: '+node.id)
  }
  if(environments.length)throw Error('unclosed environment: '+node.id)
 }
 const [,relations]=file.split('\n# 연관 문서\n')
 if(!relations)throw Error('missing relations')
 const sections=relations.split('\n## 더 알아보기\n')
 if(sections.length!==2)throw Error('missing children section')
 const parents=[...sections[0].matchAll(/\]\(([a-z0-9-]+)\.md\)/g)].map(m=>[m[1],node.id])
 const children=[...sections[1].matchAll(/\]\(([a-z0-9-]+)\.md\)/g)].map(m=>[node.id,m[1]])
 for(const edge of [...parents,...children])if(!graph.edges.some(e=>JSON.stringify(e)===JSON.stringify(edge)))throw Error('unexpected edge')
 if(parents.length!==graph.edges.filter(e=>e[1]===node.id).length||children.length!==graph.edges.filter(e=>e[0]===node.id).length)throw Error('missing edge')
}
const report={...result,revision:graph.revision,formulaCount,mermaidCount,codeCount,legacyCount,checks:['DAG','document JSON agreement','reciprocal relation links','body links resolve','timestamps','display math delimiters','TeX braces and environments','line limit'],checkedAt:new Date().toISOString()}
write('validation.json',report)
console.log(JSON.stringify(report))
