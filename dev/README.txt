수학 지도 운영 정책 (dev/README.txt)

이 문서는 오케스트레이터가 매 회차 처음 읽는 운영 규범이다. 본문 규격과 탐사 규칙은 회차 프롬프트가 정하고, 이 문서는 저장소·전송·검증 절차만 정한다.

1. 저장소
- Drive gpt6/math-map 만 사용한다. docs/: 문서(정점) 마크다운. dev/: 스크립트와 상태 JSON. plan/: 회차별 계획 파일.
- 상태 JSON: topology.json(DAG 메타: id·title·field·createdAt·updatedAt·edges·revision), queue.json(우선순위 큐), drive-files.json(파일명→Drive ID), drafts.json(미반영 초안), pending-sync.json(복구 저널), sync-receipt.json(마지막 ack).
- 본문은 docs/<id>.md 가 유일한 저장소다. topology.json 에는 본문이 없다.

2. 메타 우선 원칙 (2026-09-13 회차 사고의 재발 방지)
- 오케스트레이터가 로컬로 내려받는 것은 dev/ 의 스크립트와 상태 JSON 뿐이다. 합쳐서 100KB 미만이다.
- DAG 형상 판단(주제 선정, 부모 결정, 순환 검사, 위상정렬)은 topology.json 의 nodes·edges 만으로 한다. 본문은 필요 없다.
- docs/ 전체 미러링은 금지한다. 서브 에이전트에게 미러링을 위임하는 것도 금지한다. 문서 수십 개를 base64 로 옮겨 적는 작업은 느리고, 실제로 내용 손상이 발생했다.
- 본문을 내려받는 경우는 "이번 회차에 내용을 고칠 문서" 뿐이다. 수정 직전에, 한 파일씩, 수정할 에이전트가 직접 받는다. 부모 문서의 더 알아보기 갱신이 대표 사례다.
- 기존 문서의 수준 확인이 목적이면 get_file_metadata 의 contentSnippet(MAX_ALLOWED)으로 읽는다. 이것은 이스케이프된 표시본이므로, 재업로드 원본으로 쓰려면 3절의 규칙대로 이스케이프를 되돌리고 바이트 수를 검증해야 한다.
- 스크립트가 모든 본문을 요구하면(workflow.mjs stage, verify.mjs, core.mjs loadGraph) 원격 컨테이너에서는 그 경로를 쓰지 않는다. 메타 검증은 core.mjs 의 validate(graph) 를 topology.json 에 직접 적용한다.
  node -e "import('./core.mjs').then(m=>console.log(JSON.stringify(m.validate(JSON.parse(require('fs').readFileSync('topology.json','utf8'))).valid)))"
- 초안 본문 검사는 core.mjs 의 checkBody(body) 를 초안 파일 하나에 적용한다. 다른 문서를 읽을 필요가 없다.
- 본문 링크 [제목](id.md) 의 대상 존재 여부는 topology.json 의 id 목록으로 검사한다.
- base64 전사 오류 주의: 커넥터 다운로드 결과(base64)를 로컬로 옮겨 적는 과정에서 글자가 바뀌어 디코딩 결과가 손상될 수 있다. 디코딩 결과는 로컬 바이트 수가 Drive fileSize 와 같을 때만 신뢰한다. 다르면 손상은 로컬 전사본에 있는 것이지 Drive 원본에 있는 것이 아니다.
- 원문 확인은 get_file_metadata 의 contentSnippet(MAX_ALLOWED)으로 한다. 전사본에서 손상이 보여도 Drive 원본을 "복구"한다며 topology.json, queue.json, drive-files.json 을 재업로드하지 않는다. 다른 세션이 갱신 중일 수 있어 리비전 충돌을 일으킨다. 상태 JSON 재업로드는 자기 회차에서 실제로 변경한 내용을 반영할 때만 한다.

3. Drive 전송 규칙
- 커넥터에는 파일 내용 갱신 API가 없다. 기존 파일 <name> 을 고칠 때는 반드시 다음 순서를 지킨다. (1) 새 내용을 임시 이름 <name>.new 로 같은 폴더에 생성한다. (2) get_file_metadata 로 fileSize 가 로컬 바이트 수와 같은지 확인한다. (3) 옛 파일을 휴지통으로 보낸다. (4) update_file 로 새 파일의 제목을 <name> 으로 바꾼다. (5) 새 ID를 drive-files.json 에 기록한다. 같은 이름으로 바로 생성하면 옛 파일이 휴지통에 가기 전까지 같은 이름이 둘 공존하고, 로컬 동기화 클라이언트가 그 순간 새 파일을 "<name> (1)" 사본으로 받아 링크가 깨진다(2026-09-13 3차 사고). 휴지통은 복구 가능하다.
- 새 문서는 create_file(textContent, contentMimeType text/markdown, disableConversionToGoogleType true)로 docs 폴더에 올리고 반환된 ID를 즉시 drive-files.json 에 기록한다.
- 업로드 직후 get_file_metadata 로 fileSize 가 로컬 바이트 수와 같은지 확인한다. 다르면 새 파일을 휴지통에 보내고 다시 올린다.
- 다운로드(download_file_content)는 base64 다. 디코드 후 로컬 바이트 수가 Drive fileSize 와 같은지 반드시 확인한다. 다르면 손상이므로 다시 받는다. 바이트 수가 같아도 글자가 바뀌는 손상이 있으므로(2026-09-13 3차 확인) get_file_metadata 의 contentSnippet(MAX_ALLOWED)과 대조한 뒤에만 재업로드 원본으로 쓴다. 텍스트 파일은 snippet 을 1차 원문으로 삼아 이스케이프(백슬래시, 줄 끝 공백, 들여쓰기)를 되돌리고 바이트 수를 검증하는 편이 base64 전사보다 안정적이다.
- 같은 이름의 파일을 중복 생성하지 않는다. 생성 전에 drive-files.json 을 확인하고, 응답이 불명확하면 폴더에서 이름·부모·휴지통 여부를 조회한다.
- 동시 수정 충돌을 막기 위해 같은 파일은 한 에이전트만 고친다. 부모 문서 갱신은 모든 신규 문서 업로드가 끝난 뒤 부모별로 한 번만 한다.

4. 회차 절차
1) dev/ 의 topology.json, queue.json, drive-files.json, 스크립트를 로컬 dev/ 로 복원하고 JSON 파싱과 validate 를 확인한다.
2) 큐의 대기 항목을 우선 반영하고, 분야 분산을 보며 신규 주제와 부모를 정한다. 후보 간선을 topology 에 더해 validate 로 순환을 검사한다. plan/ 에 회차 배치 파일을 남긴다.
3) 서브 에이전트는 배정된 주제의 문서를 로컬 docs/<id>.md 로 작성하고 checkBody 와 링크 검사를 통과시킨 뒤 Drive docs 폴더에 올리고, 파일명·Drive ID·바이트 수를 보고한다.
4) 오케스트레이터는 보고를 모아 topology.json(정점·간선·revision), queue.json(completed), drive-files.json 을 갱신한다.
5) 부모 문서 갱신: 새 자식이 생긴 부모만 대상으로, 한 파일씩 내려받아 크기·snippet 검증 → 더 알아보기 절에 자식 링크 추가 → 임시 이름 <id>.md.new 로 생성 → 크기 검증 → 옛 파일 휴지통 → 제목을 <id>.md 로 변경 → ID 기록.
6) 갱신된 topology.json, queue.json, drive-files.json, sync-receipt.json 을 dev 폴더에 재생성한다. 순서는 문서 → topology → queue·receipt 다.
7) 정지 조건 도달 시 요약을 보고한다. 미완료 항목은 queue.json 의 active 나 pending-sync.json 에 남긴다.

5. 문서 규격 (검사 기준)
- 제목 H1 하나, 본문 H1 다섯 개(# 개요, # 직관, # 정의, # 성질, # 활용) 순서 고정, 마지막 H1 # 연관 문서 아래 ## 선수지식, ## 더 알아보기.
- 선수지식 = DAG 부모, 더 알아보기 = DAG 자식. 본문 링크는 간선이 아니다.
- 수식은 $$ 블록만 사용한다. 인라인 $ 는 금지다. 코드블록은 언어를 명시한다. Mermaid 허용. 각주 [^n]: 은 참조된 것만 정의한다.
- 문서 한 개는 1000줄을 넘기지 않는다. 넘으면 DAG를 유지하며 분할한다.
- 구형 문서(## 정의/성질/활용/기타 참고 문헌 구조)는 legacy 로 허용하되 보강할 때 신형으로 옮긴다. validation.json 의 legacyCount 가 남은 수다.

6. 스크립트
- core.mjs: PriorityQueue, validate(graph), checkBody(body), bodyLinks(body), parseDocument(text), render(node, graph).
- queue-server.mjs / topology-server.mjs / start.mjs / client.mjs / run-api.mjs: 로컬 상주 환경용 서버와 클라이언트.
- check-draft.mjs, merge-drafts.mjs, workflow.mjs(stage, stage-batch, ack, ack-batch), sync-plan.mjs, apply-sync.mjs, merge-upload-results.mjs: 초안 일괄 반영 경로. stage 계열은 모든 본문을 요구하므로 원격 컨테이너에서는 쓰지 않는다.
- verify.mjs, checkpoint.mjs, session.mjs, core.test.mjs: 전체 검증·체크포인트·시각·테스트.
- seed.mjs 는 최초 초기화 전용이다. 재실행하면 큐가 중복된다.

7. 큐
- 큰 수가 높은 우선순위, 같으면 입력 순이다. pop 은 items 에서 active 로 옮기고 done 은 completed 로 옮긴다. completed 는 삭제하지 않는다.
- 분야 분산, 깊이, 보강 필요도는 큐가 아니라 오케스트레이터가 priority 와 reason 에 반영한다.

8. 복구
- Drive dev/ 의 상태 JSON 을 로컬에 복원한다. pending-sync.json 의 리비전이 Drive topology 보다 크면 그 candidateGraph 를 기준으로 변경 문서만 재전송한다.
- 본문이 필요한 정점의 문서가 Drive 에 없으면 drafts.json 의 초안으로 재생성한다.
- 검증은 구조·관계·수식 구분자의 정적 검사다. 실제 렌더링은 하지 않는다.

변경 이력
- 2026-09-12: 초기 서버·큐 구조.
- 2026-09-13 (1차): 문서 규격 개정(H1 다섯 섹션), 본문을 docs/ 로 분리(schemaVersion 2), 초안 일괄 워크플로우.
- 2026-09-13 (2차): 이 문서를 정책 형식으로 재작성. docs/ 전체 미러링 금지와 메타 우선 원칙, 전송 크기 검증 규칙 추가.
- 2026-09-13 (3차): base64 전사 오류 경고와 상태 JSON 재업로드 금지(다른 세션과의 리비전 충돌 방지) 규칙 추가. 원문 확인은 contentSnippet 으로 한다. 기존 파일 갱신을 임시 이름 생성 → 검증 → 옛 파일 휴지통 → 제목 변경 순서로 고정(같은 이름 공존 금지). 다운로드는 snippet 대조를 필수로 추가.
