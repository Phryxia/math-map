# Todd–Coxeter 알고리즘

# 개요

**Todd–Coxeter 알고리즘(Todd–Coxeter algorithm)** 은 생성원과 관계로만 주어진 군에서, 부분군의 잉여류를 하나씩 찾아 번호를 붙여 세는 절차다. 생성원 $a,b$ 와 관계 $a^2=b^3=(ab)^2=1$ 만 주어지면 이 군의 원소가 몇 개인지는 표시만 보아서는 알 수 없다. 이 알고리즘은 잉여류에 생성원을 곱했을 때 어느 번호로 가는지를 표로 채우고 관계를 따라 한 바퀴 돈 결과가 어긋나는 번호를 합쳐 나가며, 표가 닫히면 지표와 잉여류 위의 순열표현을 얻는다.

# 직관

[군의 표시](group-presentations.md) $\langle a\mid a^3\rangle$ 가 주는 군의 원소를 센다. 원소에 번호를 붙여 나간다. 단위원을 $1$ 이라 하고, $1$ 에 $a$ 를 곱한 것이 무엇인지 아직 모르므로 새 번호 $2$ 를 준다. $2$ 에 $a$ 를 곱한 것에도 새 번호 $3$ 을 준다.

관계 $a^3=1$ 에 따라 $1$ 에서 $a$ 를 세 번 곱하면 $1$ 로 와야 한다. $1\to 2\to 3$ 까지 왔으므로 $3$ 에 $a$ 를 곱한 것은 $1$ 이다. 이제 $1,2,3$ 의 어느 번호에 $a$ 를 곱해도 이미 있는 번호가 나오므로 새 번호가 필요 없고, 원소는 세 개다.

관계를 따라 돌다가 두 번호가 같은 곳에 도착해야 한다는 결론이 나오면, 그 두 번호를 하나로 합친다. 단위원 대신 부분군 $H$ 에서 시작하면 같은 절차가 원소 대신 잉여류를 센다.

# 정의

## 잉여류 표

번호 $1$ 을 $H$ 자신에 대응시키고, 군 $G=\langle S\mid R\rangle$ 와 부분군 $H=\langle h_1,\dots,h_m\rangle$ 이 주어진다. 각 번호 $\alpha$ 와 각 생성원 $s\in S\cup S^{-1}$ 에 대해 $\alpha\cdot s$ 의 번호를 적는 표를 **잉여류 표(coset table)** 라 한다. 표가 완성되면 이 대응이 $G$ 의 $H\backslash G$ 위 작용이다.

직관 절의 $\langle a\mid a^3\rangle$, $H=1$ 에서 완성된 표는 $1\cdot a=2$, $2\cdot a=3$, $3\cdot a=1$ 이다. 개요의 $\langle a,b\mid a^2,b^3,(ab)^2\rangle$ 에서 $H=\langle a\rangle$ 이면 완성된 표에서 $a$ 는 $1$ 을 고정하고 $2,3$ 을 맞바꾸며, $b$ 는 $1\to 2\to 3\to 1$ 로 보낸다. 번호 $3$ 개가 지표 $\lbrack G:H\rbrack=3$ 이다.

세 종류의 줄을 채운다.

- **부분군 표(subgroup table)**: 각 생성원 $h_j$ 를 번호 $1$ 에 적용하면 다시 $1$ 로 돌아와야 한다.
- **관계자 표(relator table)**: 각 번호 $\alpha$ 와 각 관계자 $r\in R$ 에 대해 $\alpha\cdot r=\alpha$ 여야 한다. 위의 $\langle a\rangle$ 예에서 $(ab)^2$ 를 번호 $2$ 에서 따라가면 $2\to 3\to 1\to 1\to 2$ 로 출발점에 온다.
- **정의 줄(definition)**: 아직 값이 없는 칸에 새 번호를 만들어 넣는다.

## 연역과 합침

표를 채우다 한 칸의 값이 두 경로로 결정되면 **연역(deduction)** 이 일어난다. 직관 절의 $3\cdot a=1$ 이 연역이다. 이미 있는 값과 새 값이 다르면 두 번호가 같은 잉여류이므로 **합침(coincidence)** 을 수행하고, 합친 결과가 다른 칸에서 또 다른 합침을 낳는 연쇄가 이어진다.

합침은 합집합 자료구조로 관리한다. 번호마다 대표를 두고, 합칠 때 두 대표를 잇고 두 줄의 정보를 병합한다.

```javascript
// 잉여류 표: table[coset][gen] = coset 또는 undefined
function scan(table, coset, word, union) {
  let f = coset, i = 0                 // 앞에서부터 따라간다
  while (i < word.length && table[f]?.[word[i]] !== undefined) f = table[f][word[i++]]
  if (i === word.length) {             // 끝까지 갔다
    if (f !== coset) union(f, coset)   // 도착이 출발과 다르면 합친다
    return
  }
  let b = coset, j = word.length - 1   // 뒤에서부터 거꾸로 따라간다
  while (j >= i && table[b]?.[inverse(word[j])] !== undefined) b = table[b][inverse(word[j--])]
  if (j === i) {                       // 칸 하나만 남았다: 연역
    table[f][word[i]] = b
    table[b][inverse(word[i])] = f
  } else if (j < i) {
    union(f, b)                        // 겹쳤다: 합침
  }
  // j > i 이면 빈칸이 둘 이상이라 지금은 아무것도 얻지 못한다
}
```

# 성질

## 종료

$\lbrack G:H\rbrack$ 이 유한하면 Todd–Coxeter 알고리즘은 유한 단계에 끝나고 정확한 지표를 준다.

증명의 요지는 두 가지다. 표가 닫히면 그 표가 주는 작용은 $G$ 의 작용이고 번호 $1$ 의 안정자가 $H$ 를 포함하므로 번호의 개수가 지표의 약수다. 거꾸로 지표가 유한하면 실제 잉여류마다 어느 시점에 번호가 배정되고 그 이상은 합쳐지므로, 번호의 개수가 지표 아래로 내려가지 않는다.

지표가 무한하면 절차는 끝나지 않는다. 끝나지 않는 실행과 아직 끝나지 않은 실행을 구별하는 방법이 없으므로, 이 알고리즘은 반결정 절차(semi-decision procedure)다. 낱말 문제(word problem)가 결정불가능하다는 사실과 어긋나지 않는다.

## 중간 폭발

번호의 최대 개수는 최종 지표보다 훨씬 클 수 있다. 정의 줄을 어떤 순서로 채우는지가 중간에 만들어지는 번호의 개수를 좌우하고, 지표 $1$ 인 문제에서 수천 개의 번호를 거쳐야 하는 표시가 있다. 최종 번호 수와 중간 최대 번호 수 사이에 계산 가능한 상한 관계는 없다[^1].

실무에서 쓰는 전략은 두 가지다. HLT(Haselgrove–Leech–Trotter) 전략은 관계자를 우선 훑어 연역을 많이 끌어내고, Felsch 전략은 정의를 하나 할 때마다 영향을 받는 관계자만 다시 훑는다.

## 표시의 검증

지표 계산은 표시가 어떤 군을 주는지 확인하는 수단이 된다. 표시 $P$ 가 주는 군 $G$ 와 이미 아는 군 $K$ 가 있을 때, von Dyck 정리(von Dyck's theorem)로 전사 $G\to K$ 를 만들고 $\vert G\vert\le\vert K\vert$ 를 Todd–Coxeter 로 보이면 $G\cong K$ 다.

$\langle a,b\mid a^2,b^3,(ab)^5\rangle$ 이 위수 60 임을 이 방식으로 확인하면 교대군 $A_5$ 와의 동형이 나온다.

# 활용

- 계산 군론 체계 GAP(Groups, Algorithms, Programming)과 Magma 의 유한 표시군 기능이 이 알고리즘을 쓴다. 부분군의 지표, 잉여류 위 순열표현, 부분군의 표시(Reidemeister–Schreier 재작성)가 모두 잉여류 표에서 나온다.
- 군의 표시로 정의한 군이 유한인지 판정할 때 쓴다. 성공하면 위수를 주고, 끝나지 않는 동안에는 아무 결론도 주지 않는다.
- Coxeter 표시로 주어진 유한 반사군의 위수 확인에 쓴다. [Coxeter 군](coxeter-groups.md)의 분류표에 적힌 위수를 표시에서 직접 재현하는 방법이다.

[^1]: Todd–Coxeter 열거의 중간 번호 수는 계산 가능한 함수로 위에서 눌리지 않는다. C. C. Sims, *Computation with Finitely Presented Groups*, Cambridge University Press, 1994, 5 장.

# 연관 문서

## 선수지식

- [군의 표시](group-presentations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #group_theory #algorithms #algebra
