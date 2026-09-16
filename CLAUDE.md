# 수학 지도 탐사 지침

이 저장소는 Claude가 관리하는 한국어 수학 지식 그래프다. `docs/` 아래 마크다운 문서 하나가 정점 하나이고, 문서 말미 `# 연관 문서` 절의 링크가 간선이다. 이 파일을 읽고 아래 절차대로 한 회차의 탐사를 수행한다. 절차는 위에서 아래로 그대로 따른다.

## 0. 원칙

- 사고 과정과 아이겐에게 보이는 응답을 모두 한국어로 쓴다. 저장소가 한국어 지식 그래프이므로 생각도 한국어로 한다.
- 문서는 git으로 관리한다. `docs/` 아래 문서를 삽입, 수정, 삭제할 수 있다. git commit과 push를 해야 반영된다.
- 작업 브랜치는 항상 `claude/math` 다. 다른 브랜치로 push 하지 않는다.
- 이 저장소는 여러 손이 동시에 만진다. 아이겐(저장소 주인)도, 다른 Claude 세션도 언제든 같은 브랜치에 커밋할 수 있다. 내 작업 트리가 원격의 최신 상태라고 가정하지 않는다.
- 그래서 무슨 작업이든 시작하기 전에 `git pull` 로 원격을 먼저 받는다. 세션을 열 때 한 번, 2절 루프에서 문서를 하나 집을 때마다 한 번, push 직전에 한 번 받는다. 남이 방금 쓴 문서를 다시 쓰거나 남이 정리한 간선을 되살리는 사고를 이 pull 이 막는다.
- 남과 겹치지 않게 작업을 고른다. 큐에서 꺼낸 주제의 문서가 pull 이후 이미 생겨 있으면 그 작업은 버리고 다음 것을 꺼낸다.
- 서브 에이전트를 쓰지 않는다. 모든 읽기, 쓰기, 검증을 이 세션이 직접 한다.
- 문서 링크로 만들어지는 그래프는 DAG 여야 한다. 순환이 있으면 안 되고, 간선을 더하기 전에 스크립트로 확인한다.
- `dev/` 스크립트는 고치지 않는다. 버그나 필요한 기능은 큐에 push 해 두고 그 회차에서는 우회한다.
- 위키피디아나 교과서의 목차를 그대로 옮기지 않는다. 스스로 이해한 선수관계와 연결을 그래프에 반영한다.

## 1. 세션 시작

```bash
git fetch origin claude/math && git checkout claude/math && git pull origin claude/math   # 남의 작업이 먼저 들어와 있을 수 있다
node dev/timer.mjs start --minutes 40   # 40분 타이머. 회차가 겹치지 않게 짧게 잡는다
node dev/queue.mjs list             # 큐 서버 자동 기동 + 지난 회차 큐 복원
node dev/graph.mjs validate         # 깨진 링크, 비대칭 간선, 파싱 문제
node dev/graph.mjs tags             # 태그 분포
node dev/graph.mjs leaves           # 더 알아보기가 빈 문서
```

`validate` 가 문제를 보고하면 그 수정을 이번 회차의 첫 작업으로 삼는다. 큐에 없다면 `node dev/queue.mjs push "..." --priority 100` 으로 넣는다.

## 2. 탐사 루프

한 작업은 "문서 하나를 새로 쓰거나 보강하고, 그 문서와 연결된 문서의 연관 문서 절을 맞춘 뒤 커밋" 이다. 이 단위를 타이머가 끝날 때까지 반복한다.

1. `node dev/timer.mjs check` 를 실행한다. 종료코드가 1이면(EXPIRED) 새 작업을 시작하지 않고 3절로 간다.
2. `git pull origin claude/math` 로 원격을 받는다. 앞선 작업을 커밋한 직후라도 다시 받는다. 다른 세션이나 아이겐이 그 사이에 문서를 고쳤을 수 있다. 받은 내용이 지금 하려던 작업과 겹치면 작업을 바꾼다.
3. `node dev/queue.mjs pop` 으로 작업을 꺼낸다. 큐가 비어 있으면 아래 우선순위로 작업을 직접 고른다.
   - `validate` 가 보고한 문제
   - 리프 문서(더 알아보기 없음) 가운데 후속 개념이 분명한 것
   - 태그가 없는 문서, 태그 분포에서 소외된 분야
   - 구형 문서(`## 정의` / `## 성질` / `## 활용` 구조)의 신형 전환
   - 새 주제. 기존 문서 본문에서 언급만 되고 문서가 없는 개념이 좋은 후보다.
4. `node dev/graph.mjs node <id>` 로 대상 문서와 이웃의 현재 상태를 본다. 새 문서라면 부모가 될 문서들을 `node dev/graph.mjs node` 로 읽고 어디에 붙일지 정한다.
5. 문서를 쓴다. 규격은 4절.
6. 간선을 더하기 전에 반드시 검사한다. `parent` 는 선수지식, `child` 는 후속이다.
   ```bash
   node dev/graph.mjs check-cycle <parent> <child>              # 둘 다 기존 문서
   node dev/graph.mjs check-cycle <parent> <child> --allow-new  # 한쪽이 새 문서
   ```
   `CYCLE` 이 나오면 그 간선은 넣지 않는다. 방향이 틀렸는지 먼저 의심한다.
7. 간선은 양쪽에 적는다. 자식 문서의 `## 선수지식` 에 부모를, 부모 문서의 `## 더 알아보기` 에 자식을 적는다. 한쪽만 적으면 `validate` 가 ASYMMETRIC 으로 잡는다.
8. minimal 요소가 바뀌었으면 루트 `README.md` 의 목록을 맞춘다. minimal 은 선수지식이 없는 문서이고 5절에 따라 새로 만들지 않으니, 목록이 바뀌었다면 간선을 잘못 지웠을 가능성부터 의심한다. 아래 diff 가 아무것도 내놓지 않아야 한다. 규칙은 7절.
   ```bash
   diff <(node dev/graph.mjs roots | cut -f1 | sort) \
        <(sed -n '/^## 지도의 뿌리/,$p' README.md | grep -o '(docs/[a-z0-9-]*\.md)' | tr -d '()' | sed 's|docs/||; s|\.md||' | sort)
   ```
9. 검증한다. 셋 다 종료코드 0 이어야 한다.
   ```bash
   node dev/graph.mjs validate && node dev/graph.mjs cycles && node --test dev/*.test.mjs
   ```
10. 커밋한다. 메시지는 무엇을 왜 했는지 한 줄로 쓴다. 예: `add spectral-sequences under homology`, `migrate groups to new format`. README 를 고쳤으면 같은 커밋에 담는다.
11. 작업 중 떠오른 후속 주제, 보강할 점, 발견한 오류는 그 자리에서 큐에 넣는다.
    ```bash
    node dev/queue.mjs push "<제목>" --priority <정수> --note "<왜, 어디에 붙일지>"
    ```
    priority 는 큰 수가 먼저 나온다. 오류 수정 100, 기존 문서 보강 50, 신규 주제 10 정도를 기준으로 삼는다.
12. 1로 돌아간다.

## 3. 세션 종료

타이머가 끝나면 새 작업을 시작하지 않는다. 진행 중인 작업은 검증과 커밋까지 마친다.

```bash
node dev/graph.mjs validate && node dev/graph.mjs cycles && node --test dev/*.test.mjs
diff <(node dev/graph.mjs roots | cut -f1 | sort) \
     <(sed -n '/^## 지도의 뿌리/,$p' README.md | grep -o '(docs/[a-z0-9-]*\.md)' | tr -d '()' | sed 's|docs/||; s|\.md||' | sort)
git pull --rebase origin claude/math       # 아이겐과 다른 세션의 변경을 먼저 받는다
git push -u origin claude/math
node dev/queue.mjs stop                    # 큐를 dev/queue.json 에 저장하고 별도 커밋
git push -u origin claude/math
```

rebase 충돌이 나면 문서 내용은 원격 쪽을 우선하고 내 변경을 그 위에 다시 얹는다. README 가 충돌하면 원격 목록에 내가 더하거나 뺀 항목만 반영한다. 충돌을 풀고 나서 2절 9단계 검증과 위 diff 를 다시 통과시킨 뒤 push 한다. `queue stop` 을 빠뜨리면 큐가 커밋되지 않으므로 종료 절차의 마지막에 반드시 실행한다.

## 4. 문서 규격

파일명은 `^[a-z0-9][a-z0-9-]*\.md$` 다. 파일명이 정점 id 이고 링크는 `[표시 제목](id.md)` 다. 문서 구조는 다음과 같다.

```markdown
# 제목

# 개요

# 직관

# 정의

# 성질

# 활용

[^1]: 각주

# 연관 문서

## 선수지식

- [부모 제목](parent-id.md)

## 더 알아보기

- [자식 제목](child-id.md)

#tag_one #tag_two
```

- 본문 H1 은 `# 개요`, `# 직관`, `# 정의`, `# 성질`, `# 활용` 다섯 개를 이 순서로 둔다. 하위 절은 H2 로 자유롭게 나눈다.
- 선수지식이 없으면 `없음.`, 더 알아보기가 없으면 `아직 연결한 문서가 없다.` 라고 쓴다.
- 구형 문서(`## 정의` / `## 성질` / `## 활용` / `## 기타 참고 문헌`)는 그 문서를 보강할 때 신형으로 옮긴다. 손대지 않는 구형 문서는 그대로 둔다.
- 마크다운, mermaid diagram, 언어를 명시한 코드블록, LaTeX 를 적극적으로 쓴다. 다이어그램은 개념 사이의 관계를 그릴 때, 코드는 정의를 계산으로 확인할 때 넣는다.
- 수식은 전부 LaTeX 로 쓴다. 따로 떼어 보여야 하는 식은 `$$` 블록에, 문장 안에 섞이는 식은 인라인 `$...$` 에 넣는다. **인라인 코드블록에 수식을 넣지 않는다.** 백틱 안의 `B_{n,\chi}` 는 그대로 노출되어 읽기 어렵고, 인라인 수식 $B_{n,\chi}$ 는 제대로 렌더링된다. 깨짐 방지를 위해 닫는 `$` 뒤에 공백 1개가 반드시 따라와야 한다.
- 각주 `[^n]` 은 본문에서 참조한 것만 정의한다.
- 간결하고 가독성이 좋아야 한다. 한 문서는 1000줄을 넘기지 않는다. 넘으면 개념을 나눠 새 문서로 분할하고 간선으로 잇는다.
- 본문 안의 링크는 간선이 아니다. 간선은 `# 연관 문서` 절에만 있다.

## 위에 속하지 않는 연결

- 선수 지식과 더 알아보기와 독립으로, 문서 본문에서 다른 문서에 있을 법한 내용들, 혹은 우선순위 큐에 넣어둔 내용들은, 문서 내에서 최초 1회에 한해 링크한다.
- 이 링크들은 DAG 간선으로 간주하지 않는다.
- 예시) 콤팩트 위의 연속함수가 자동으로 균등연속이 되는 것(Heine–Cantor)이 특히 유용하다. 에서 균드연속, Heine-Cantor 등은 별도 문서를 두고 연결할 가치가 있음.

## 5. 간선 규칙

- 간선 방향은 선수지식에서 후속으로 간다. 부모 문서를 읽지 않으면 자식 문서를 이해할 수 없어야 한다.
- 간선은 선수관계, 연관성, 포함관계를 반영한다. 일반 개념이 특수 사례의 부모가 되고, 도구가 그 도구를 쓰는 정리의 부모가 된다.
- 루트(선수지식 없음)는 지금 `sets` 와 `proofs` 뿐이다. 새 루트를 만들지 않는다.
- 부모는 보통 1개에서 3개다. 4개 이상이면 그 중 다른 부모의 조상인 것을 뺀다.
- 왜 그 부모인지가 자식 문서의 `# 개요` 나 `# 직관` 에서 드러나야 한다.

## 6. 태그 규칙

- 태그는 `#` 뒤에 영소문자, 숫자, 언더스코어가 이어진 단어다. 예: `#category_theory`, `#probability`, `#computation`.
- 문서 마지막 줄에 공백으로 구분해 한 줄로 쓴다.
- 새 태그를 만들기 전에 `node dev/graph.mjs tags` 로 기존 태그를 보고 재사용한다. 분야 태그 하나는 반드시 붙이고, 성격 태그(`#theorem`, `#construction`, `#example`)는 필요할 때만 붙인다.
- 문서를 보강하거나 새로 쓸 때 태그가 없으면 붙인다.

## 7. README 유지

루트 `README.md` 는 저장소의 첫 화면이다. "지도의 뿌리" 절은 그래프의 minimal 요소 전부를 담는다. minimal 요소는 선수지식이 비어 있는 문서, 곧 `node dev/graph.mjs roots` 가 내놓는 문서다. 지금은 `sets` 와 `proofs` 둘뿐이다.

5절에 따라 새 루트는 만들지 않으므로 이 목록은 평소에 움직이지 않는다. 그래도 매 회차 확인한다. 문서를 지우거나 간선을 고치다가 어떤 문서의 선수지식이 통째로 사라지면 그 문서가 조용히 minimal 로 올라오고, 이는 대개 실수다. 2절 8단계의 diff 에 새 id 가 뜨면 README 에 추가하기 전에 그 문서의 선수지식부터 복구할지 판단한다.

- 링크 형식은 `- [문서 제목](docs/<id>.md)` 다. `docs/` 접두사가 붙는 점이 문서끼리의 링크와 다르다. README 가 저장소 루트에 있기 때문이다.
- 목록은 id 순으로 정렬한다. 항목이 적어 분야로 묶지 않는다.
- "구조" 절의 문서 수, 간선 수, 태그 수는 문서를 더하거나 지운 회차마다 맞춘다. `node dev/graph.mjs nodes`, `edges`, `tags` 의 마지막 줄이 각각의 개수를 알려준다.

README 의 링크는 DAG 간선이 아니다. 여기서 무엇을 더하거나 빼도 그래프 구조는 달라지지 않고 `validate` 도 잡아주지 않는다. 그래서 2절 8단계의 diff 로 직접 확인한다. 출력이 비어야 맞는 상태다.

## 8. 스크립트 요약

| 명령                                                            | 용도                              |
| --------------------------------------------------------------- | --------------------------------- |
| `node dev/graph.mjs node <id>`                                  | 문서의 제목, 태그, 부모, 자식     |
| `node dev/graph.mjs check-cycle <parent> <child> [--allow-new]` | 간선 추가 시 순환 검사            |
| `node dev/graph.mjs validate`                                   | 깨진 링크, 비대칭 간선, 파싱 문제 |
| `node dev/graph.mjs cycles` / `topo`                            | 순환 목록 / 위상순                |
| `node dev/graph.mjs roots` / `leaves` / `isolated`              | 구조 파악                         |
| `node dev/graph.mjs ancestors <id>` / `descendants <id>`        | 조상 / 후손                       |
| `node dev/graph.mjs tags [untagged \| <tag>]`                   | 태그 통계                         |
| `node dev/queue.mjs push "<title>" -p N -n "<note>"`            | 탐사 대기열에 추가                |
| `node dev/queue.mjs pop` / `peek` / `list` / `remove <id>`      | 대기열 조작                       |
| `node dev/queue.mjs stop`                                       | 큐 저장, 커밋, 서버 종료          |
| `node dev/timer.mjs start` / `check`                            | 회차 타이머                       |
| `node --test dev/*.test.mjs`                                    | 스크립트 자체 테스트              |

모든 명령은 `--json` 을 받는다. `node dev/graph.mjs help`, `node dev/queue.mjs help` 로 전체 목록을 볼 수 있다.
