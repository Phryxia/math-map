# LP 형 문제

# 개요

**LP 형 문제(LP-type problem, LP 는 linear programming)** 는 제약을 하나 더하면 최적값이 나빠지거나 그대로이고, 최적값이 제약 몇 개만으로 정해지는 최적화 문제의 틀이다. [최소 외접원](smallest-enclosing-circle.md)은 점을 하나 더하면 반지름이 커지거나 그대로이고, 원은 점 셋 이하로 정해진다. 변수가 둘인 [선형계획법](linear-programming.md)도 부등식을 하나 더하면 최적값이 나빠지거나 그대로이고, 최적점은 부등식 둘로 정해진다.

두 문제는 이 두 성질만 써서 같은 무작위 알고리즘으로 기대 선형 시간에 풀린다. LP 형 문제는 그 두 성질을 공리로 적어, 공리를 만족하는 문제마다 같은 알고리즘과 같은 시간 분석을 쓴다.

# 직관

세 직선 $\ell\_1:y=-x$, $\ell\_2:y=x-2$, $\ell\_3:y=-x/2$ 를 둔다. 각 $x$ 에서 직선들의 높이 가운데 가장 큰 값을 취한 함수가 가장 낮아지는 점을 찾는다. 직선은 제약이고, 가장 낮은 점의 높이가 최적값이다.

$\ell\_1$ 과 $\ell\_2$ 만 있으면 두 직선의 교점 $(1,-1)$ 에서 가장 낮고 최적값은 $-1$ 이다. 이제 $\ell\_3$ 을 더한다. $x=1$ 에서 $\ell\_3$ 의 높이는 $-0.5$ 로 지금의 최적값 $-1$ 보다 높다. 지금의 최적점이 새 제약을 어기므로 최적값이 올라간다.

새 최적점은 $\ell\_3$ 위에 있다. 새 최적점이 $\ell\_3$ 보다 위에 있으면 그 점은 $\ell\_3$ 없이도 최적점이어서 최적값이 $-1$ 이어야 한다. 그래서 $\ell\_3$ 위에서만 찾으면 되고, 변수가 하나인 문제가 된다.

$\ell\_3$ 위의 점이 다른 두 직선보다 위에 있으려면 $0\le x\le 4/3$ 이고, 그 범위에서 $-x/2$ 는 $x=4/3$ 에서 가장 작다. 새 최적점은 $(4/3,-2/3)$ 이고 $\ell\_2$ 와 $\ell\_3$ 이 정한다.

제약을 무작위 순서로 하나씩 더하면, $i$ 번째 제약이 지금의 최적점을 어기는 것은 그 제약이 처음 $i$ 개의 최적점을 정하는 둘 가운데 하나일 때뿐이다. 그 확률은 $2/i$ 이하이므로 비싼 재계산이 드물다.

# 정의

## LP 형 문제

유한 집합 $H$ 와 전순서 집합 $W$ 로 가는 함수 $w:2^H\to W$ 의 짝 $(H,w)$ 가 다음 두 조건을 만족하면 **LP 형 문제(LP-type problem)** 라 한다. $H$ 의 원소를 **제약(constraint)**, $w(G)$ 를 $G$ 의 **값(value)** 이라 한다.

- **단조성(monotonicity)**. $F\subseteq G\subseteq H$ 이면 $w(F)\le w(G)$ 다.
- **국소성(locality)**. $F\subseteq G\subseteq H$, $w(F)=w(G)$ 이고 $h\in H$ 에 대해 $w(G\cup\lbrace h\rbrace)\gt w(G)$ 이면 $w(F\cup\lbrace h\rbrace)\gt w(F)$ 다.

직관 절에서 $H$ 는 직선들의 집합이고, $w(G)$ 는 $G$ 의 직선들 가운데 가장 위의 것이 가장 낮아지는 높이다. 국소성은 "큰 집합의 최적점을 어기는 직선은, 같은 최적값을 갖는 작은 집합의 최적점도 어긴다" 는 것이다.

## 기저와 조합 차원

$w(B')\lt w(B)$ 가 모든 진부분집합 $B'\subsetneq B$ 에서 성립하는 $B$ 를 **기저(basis)** 라 한다. $G$ 의 기저는 $w(B)=w(G)$ 인 기저 $B\subseteq G$ 다. 기저의 크기의 최댓값 $\delta$ 를 **조합 차원(combinatorial dimension)** 이라 한다.

$h$ 가 $w(B\cup\lbrace h\rbrace)\gt w(B)$ 를 만족하면 $h$ 가 기저 $B$ 를 **어긴다(violate)** 고 한다. 직관 절에서 $\lbrace\ell\_1,\ell\_2\rbrace$ 는 기저이고 $\ell\_3$ 이 그것을 어긴다. 직선 문제의 조합 차원은 $2$ 다.

# 성질

## 예

| 문제                                 | 값                       | 조합 차원 |
| ------------------------------------ | ------------------------ | --------- |
| 변수가 $d$ 개인 선형계획법           | 최적값                   | $d$       |
| 평면의 최소 외접원                   | 반지름                   | $3$       |
| $d$ 차원의 최소 외접구               | 반지름                   | $d+1$     |
| 평면의 점들을 포함하는 최소 넓이 타원 | 넓이                     | $5$       |
| 두 볼록 껍질 사이의 거리             | 거리에 음의 부호를 붙인 값 | $d+2$     |

선형계획법은 최적점이 여럿일 때 사전식 순서로 하나를 고르고, 유계가 아닌 경우를 큰 상자로 막아 값을 정한다.[^1]

## Sharir–Welzl 알고리즘

M. Sharir 와 E. Welzl 은 기저 계산과 위반 검사만으로 LP 형 문제를 푸는 다음 알고리즘을 주었다.[^1] $C$ 는 지금 고정된 기저 후보다.

```javascript
// G: 제약 집합, C: G 의 부분집합인 기저. G 의 기저를 돌려준다
function solve(G, C) {
  if (sameSet(G, C)) return C;
  const h = randomElement(difference(G, C));
  const B = solve(remove(G, h), C);
  if (!violates(h, B)) return B;
  return solve(G, basisOf(union(B, [h]))); // 새 기저는 h 를 포함한다
}
```

$h$ 가 $G\setminus\lbrace h\rbrace$ 의 기저를 어기면 $G$ 의 모든 기저가 $h$ 를 포함한다. 직관 절에서 새 최적점이 $\ell\_3$ 위에 있던 것이 이 사실이다. 그래서 둘째 재귀에서는 $h$ 를 기저에 넣은 채로 문제가 한 단계 줄어든다.

## 기대 시간

$\delta$ 가 고정되면 이 알고리즘은 기대 $O(n)$ 번의 위반 검사와 기저 계산으로 끝난다. $n=\lvert H\rvert$ 다.[^1]

증명의 요지. $h$ 는 $G\setminus C$ 에서 고르게 뽑히고, $h$ 가 $G\setminus\lbrace h\rbrace$ 의 기저를 어기려면 $h$ 가 $G$ 의 한 기저에 들어 있어야 한다. 기저의 원소는 $\delta$ 개 이하이므로 그 확률은 $\delta/\lvert G\setminus C\rvert$ 이하다. 기저에 고정된 원소가 늘 때마다 남은 차원이 줄어드는 점화식을 풀면 $\delta$ 에만 의존하는 상수 곱의 $n$ 이 나온다.

R. Seidel 은 같은 무작위 점진 방법으로 변수가 $d$ 개인 선형계획법을 기대 $O(d!\thinspace n)$ 시간에 풀었다.[^2] J. Matoušek, M. Sharir, E. Welzl 은 이 알고리즘의 기대 기저 계산 횟수가 $\delta$ 에 대해 지수보다 작음을 보였고, K. L. Clarkson 의 표본 추출 방법과 합쳐 선형계획법을 기대 $O(d^2n)+e^{O(\sqrt{d\log d})}$ 시간에 푼다.[^3][^4]

# 활용

- 최소 외접원과 최소 외접구. 최소 외접원 문서의 Welzl 알고리즘은 조합 차원이 $3$ 인 경우의 이 알고리즘이다.
- 저차원 선형계획법. 변수 수가 작고 제약이 많은 선형계획법을 기대 선형 시간에 푼다. 평면의 점들을 가르는 직선 찾기, 다각형 안의 가장 큰 원 찾기가 변수 둘이나 셋의 선형계획법이다.
- 충돌 검사. 두 볼록 다면체 사이의 거리를 꼭짓점 목록에서 바로 계산한다.

[^1]: M. Sharir, E. Welzl, "A combinatorial bound for linear programming and related problems", *STACS 92*, Lecture Notes in Computer Science 577 (1992), 569–579.
[^2]: R. Seidel, "Small-dimensional linear programming and convex hulls made easy", *Discrete & Computational Geometry* **6** (1991), 423–434.
[^3]: J. Matoušek, M. Sharir, E. Welzl, "A subexponential bound for linear programming", *Algorithmica* **16** (1996), 498–516.
[^4]: K. L. Clarkson, "Las Vegas algorithms for linear and integer programming when the dimension is small", *Journal of the ACM* **42** (1995), 488–499.

# 연관 문서

## 선수지식

- [최소 외접원](smallest-enclosing-circle.md)
- [선형계획법](linear-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #optimization #computation
