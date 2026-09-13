const seeds = [
 ['sets','집합','기초',100],
 ['functions','함수','기초',99],
 ['proofs','명제와 증명','논리',98],
 ['relations','관계와 동치류','기초',96],
 ['graphs','그래프','이산수학',94],
 ['vector-spaces','벡터 공간','대수',93],
 ['limits','수열의 극한','해석',92],
 ['probability','유한 확률 공간','확률',91],
 ['groups','군','대수',89],
 ['metric-spaces','거리 공간','기하',88],
 ['computability','계산 가능성과 정지 문제','계산 이론',87],
 ['mathematical-structuralism','수학적 구조주의','수리 철학',86]
]
for (const [id,title,field,priority] of seeds) {
 const response = await fetch('http://127.0.0.1:43171/push', {method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({data:{id,title,field,depth:0,reason:'첫 탐색: 분야를 분산하고 후속 개념의 기반 확보'},priority})})
 if (!response.ok) throw Error(await response.text())
}
console.log(await (await fetch('http://127.0.0.1:43171/state')).text())
