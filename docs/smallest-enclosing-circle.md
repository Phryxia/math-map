# 최소 외접원

# 개요

**최소 외접원(smallest enclosing circle)** 은 평면의 유한한 점들을 모두 포함하는 원 가운데 반지름이 가장 작은 것이다. 마을 몇 곳에 소방서를 하나 세울 때, 가장 먼 마을까지의 거리를 가장 작게 하는 자리를 묻는다. 그 자리가 최소 외접원의 중심이고, 가장 먼 거리가 반지름이다.

이 문제는 [k-중심 문제](k-center.md)에서 중심이 하나인 경우다. 점이 $n$ 개일 때 무작위 순서로 점을 하나씩 넣는 Welzl 알고리즘이 기대 시간 $O(n)$ 에 답을 준다.

# 직관

세 마을 $A=(0,0)$, $B=(4,0)$, $C=(1,3)$ 을 본다. 가장 멀리 떨어진 두 점은 $A$ 와 $B$ 이고, $AB$ 를 지름으로 하는 원은 중심 $(2,0)$, 반지름 $2$ 다. $C$ 는 중심에서 $\sqrt{10}\approx 3.16$ 떨어져 이 원 밖에 있다.

그래서 원이 세 점을 모두 지나야 한다. $AB$ 의 수직이등분선 $x=2$ 위에서 $A$ 와 $C$ 까지의 거리가 같은 점을 찾으면 $x^2+y^2=(x-1)^2+(y-3)^2$ 에서 $y=1$ 이다. 중심 $(2,1)$, 반지름 $\sqrt5\approx 2.24$ 인 원이 세 점을 지난다.

$C$ 를 $C'=(2,1)$ 로 옮기면 사정이 다르다. $C'$ 은 $AB$ 를 지름으로 하는 원 안에 있으므로 그 원이 답이고, 원 위에는 $A$ 와 $B$ 두 점만 있다. 답의 원 위에 놓이는 점은 둘이거나 셋이다.

# 정의

## 최소 외접원

평면의 유한 점 집합 $P$ 에 대해, $P$ 의 모든 점을 내부나 경계에 포함하는 닫힌 원판 가운데 반지름이 가장 작은 것을 $P$ 의 최소 외접원이라 하고 $\mathrm{mec}(P)$ 로 쓴다. 직관 절에서 $\mathrm{mec}(\lbrace A,B,C\rbrace)$ 는 중심 $(2,1)$, 반지름 $\sqrt5$ 이다.

## 받치는 점

$\mathrm{mec}(P)$ 의 경계 위에 있는 $P$ 의 점 가운데, 그 점들만으로 같은 원이 정해지는 최소의 모임을 **받치는 점(support set)** 이라 한다. 직관 절의 $A,B,C$ 에서는 셋 모두, $A,B,C'$ 에서는 $A,B$ 둘이다.

# 성질

## 유일성

정리. $P$ 가 비어 있지 않으면 $\mathrm{mec}(P)$ 는 하나뿐이다.

증명의 요지. 반지름이 같은 두 원판이 모두 $P$ 를 포함하면 $P$ 는 두 원판의 교집합에 든다. 두 중심의 중점을 중심으로 하는 원판이 그 교집합을 포함하고 반지름이 더 작으므로 최소성과 모순이다.

## 받치는 점은 셋 이하

$\mathrm{mec}(P)$ 는 $P$ 의 점 두 개를 지름의 양 끝으로 하는 원이거나, $P$ 의 점 세 개를 지나는 원이다. 세 점을 지나는 경우에는 중심이 세 점의 삼각형 안에 있다. 직관 절의 $ABC$ 는 세 각이 모두 예각이어서 외심 $(2,1)$ 이 삼각형 안에 있다. 받치는 점은 모두 [볼록 껍질](convex-hull-algorithms.md)의 꼭짓점이다.

## Welzl 알고리즘

E. Welzl 은 다음 재귀로 $\mathrm{mec}(P)$ 를 계산했다[^1]. $R$ 은 답의 경계 위에 있다고 이미 정한 점의 모임이다.

```javascript
// P: 아직 넣지 않은 점들(무작위 순서), R: 경계 위에 있어야 하는 점들(셋 이하)
function mec(P, R) {
  if (P.length === 0 || R.length === 3) return circleThrough(R); // R 이 정하는 가장 작은 원
  const p = P[P.length - 1];
  const D = mec(P.slice(0, -1), R);
  if (contains(D, p)) return D;
  return mec(P.slice(0, -1), [...R, p]);               // p 는 경계 위에 있다
}
```

$p$ 가 $P\setminus\lbrace p\rbrace$ 의 최소 외접원 밖에 있으면, $P$ 의 최소 외접원의 경계 위에 $p$ 가 있다. 그래서 둘째 재귀는 $p$ 를 $R$ 에 넣는다.

받치는 점은 셋 이하이고 점의 순서가 무작위이므로, 마지막에 넣은 점 $p$ 가 $\mathrm{mec}(P)$ 의 받치는 점일 확률은 $3/n$ 이하다. 그래서 둘째 재귀가 일어날 확률이 작고, 기대 시간이 $O(n)$ 이다.

## 결정적 선형 시간

N. Megiddo 는 점의 일정 비율을 답에 영향이 없다고 판정해 버리는 단계를 되풀이해 결정적 $O(n)$ 시간 알고리즘을 주었다[^2]. 같은 방법이 변수가 셋 이하인 [선형계획법](linear-programming.md)을 선형 시간에 푼다.

# 활용

- 시설 하나의 배치. 가장 먼 고객까지의 거리를 최소로 하는 자리를 찾는 1-중심 문제가 이 문제다.
- 충돌 판정. 물체를 감싸는 원이나 구를 먼저 비교해 서로 먼 물체 쌍을 걸러 낸다.
- 일반화. Welzl 의 논법은 $d$ 차원의 최소 외접구에서 받치는 점이 $d+1$ 개 이하라는 것만 쓰므로 그대로 확장된다. M. Sharir 와 Welzl 은 이 구조를 LP(linear programming) 형 문제(LP-type problem)로 묶어 같은 기대 선형 시간을 얻었다.

[^1]: E. Welzl, "Smallest enclosing disks (balls and ellipsoids)", in New Results and New Trends in Computer Science, Lecture Notes in Computer Science 555 (1991), 359–370.
[^2]: N. Megiddo, "Linear-time algorithms for linear programming in R³ and related problems", SIAM Journal on Computing 12 (1983), 759–776.

# 연관 문서

## 선수지식

- [k-중심 문제](k-center.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #computation #optimization
