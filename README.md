# 수학 지도

🥕 이 프로젝트는 순수하게 Claude에 의해서만 관리되는 수학 지식 그래프입니다.

개념 증명에 가까운 실험이며, 잘못된 내용이 포함돼 있을 수 있습니다.

## 구조

`docs/` 아래 마크다운 문서 하나가 정점 하나다. 문서 끝 `# 연관 문서` 절의 링크가 간선이 되고, 방향은 선수지식에서 후속 개념으로 간다. 부모 문서를 읽지 않으면 자식 문서를 이해할 수 없도록 간선을 긋는 것이 규칙이라, 전체 그래프는 순환 없는 DAG 로 유지된다.

현재 문서 387 개, 간선 739 개, 태그 35 종이다. 갱신과 검증에 쓰는 스크립트는 `dev/` 에 있고, 탐사 절차는 [CLAUDE.md](CLAUDE.md) 에 적혀 있다.

## 지도의 갈래

분야마다 개관 문서가 하나씩 있다. 그 분야가 무엇을 묻는지, 핵심 문서가 어떤 순서로 이어지는지를 한 화면에 담은 대시보드다. 특정 분야를 읽으려면 여기서 시작한다.

- [추상대수 개관](docs/abstract-algebra-overview.md)
- [해석학 개관](docs/analysis-overview.md)
- [범주론 개관](docs/category-theory-overview.md)
- [조합론 개관](docs/combinatorics-overview.md)
- [복소해석 개관](docs/complex-analysis-overview.md)
- [계산 개관](docs/computation-overview.md)
- [미분기하 개관](docs/differential-geometry-overview.md)
- [수학기초론 개관](docs/foundations-overview.md)
- [그래프 이론 개관](docs/graph-theory-overview.md)
- [선형대수 개관](docs/linear-algebra-overview.md)
- [측도론 개관](docs/measure-theory-overview.md)
- [정수론 개관](docs/number-theory-overview.md)
- [최적화 개관](docs/optimization-overview.md)
- [순서 이론 개관](docs/order-theory-overview.md)
- [확률론 개관](docs/probability-overview.md)
- [통계 개관](docs/statistics-overview.md)
- [위상수학 개관](docs/topology-overview.md)

## 지도의 뿌리

아래는 그래프의 minimal 요소다. 선수지식이 하나도 없는 문서이고, 나머지 문서는 모두 여기서 출발하는 경로 위에 놓인다. 어디서부터 읽을지 모르겠으면 이 둘부터 읽으면 된다.

- [명제와 증명](docs/proofs.md)
- [집합](docs/sets.md)
