# Schwartz–Zippel 보조정리

# 개요

**Schwartz–Zippel 보조정리(Schwartz–Zippel lemma)** 는 $0$ 이 아닌 다항식에 무작위 점을 넣으면 값이 $0$ 이 될 확률이 작다는 정리다. $(x+y)^2$ 와 $x^2+2xy+y^2$ 가 같은지 전개하지 않고 보려면 $x,y$ 를 $1$ 부터 $100$ 까지에서 무작위로 골라 두 식의 값을 비교하면 되고, 두 식이 다르다면 그 차는 차수 $2$ 이하의 $0$ 아닌 다항식이므로 값이 우연히 같을 확률은 $2/100$ 이하다. 이 보조정리는 차수 $d$ 의 일반적인 경우에 이 확률이 $d/\lvert S\rvert$ 이하임을 보여, 다항식이 같은지를 무작위로 판정하는 알고리즘을 정당화한다.

# 직관

Schwartz–Zippel 보조정리는 체 위의 $0$ 이 아닌 $n$ 변수 다항식의 전체 차수가 $d$ 일 때, 유한집합 $S$ 에서 변수마다 독립으로 고른 무작위 점에서 그 다항식이 $0$ 이 될 확률이 $d/\lvert S\rvert$ 이하라는 정리다. J. T. Schwartz 와 R. Zippel 이 각각 발표했고[^1][^2], R. A. DeMillo 와 R. J. Lipton 이 그보다 앞서 같은 꼴의 상한을 증명했다[^3].

두 다항식이 같은지를 전개하지 않고 무작위 점 하나에서의 값으로 판정하는 무작위 알고리즘이 이 정리로 정당화된다. 일변수 경우는 [다항식환](polynomial-rings.md)의 근의 개수 제한이고, 이 정리는 그 제한을 여러 변수로 옮긴 것이다.

변수 $x_1,\dots,x_n$ 이 든 $n\times n$ [행렬](matrices.md) $V$ 의 $(i,j)$ 성분을 $x_i^{j-1}$ 로 두고, [행렬식](determinants.md) $\det V$ 가 $\prod_{i\lt j}(x_j-x_i)$ 와 같은지 확인하려 한다. 행렬식을 전개하면 항이 $n!$ 개이고, 오른쪽 곱을 전개하면 정리하기 전의 항이 $2^{n(n-1)/2}$ 개다. $n=30$ 이면 어느 쪽도 손으로나 컴퓨터로나 다 적을 수 없다.

변수에 수를 넣으면 계산이 짧아진다. $x_1,\dots,x_n$ 에 정수를 넣으면 왼쪽은 수로 된 행렬의 행렬식이라 소거법으로 $O(n^3)$ 번의 연산에 나오고, 오른쪽은 곱셈 $n(n-1)/2$ 번이다. 두 값이 다르면 두 식은 다르다. 두 값이 같으면 두 식의 차 $f=\det V-\prod_{i\lt j}(x_j-x_i)$ 가 넣은 점에서 $0$ 이라는 것만 알 수 있다.

$f$ 가 $0$ 이 아닌데 운 나쁘게 넣은 점에서 $0$ 이 될 수 있다. 변수가 하나이면 $0$ 이 아닌 차수 $d$ 의 다항식은 근이 많아야 $d$ 개이므로, $1$ 부터 $100d$ 까지에서 수를 고르면 근을 고를 확률이 $1/100$ 이하다. 변수가 둘 이상이면 $x_1-x_2$ 처럼 근이 무한히 많은 다항식도 있어 근을 셀 수 없다. 그래도 $1$ 부터 $100d$ 까지에서 변수마다 수를 따로 고르면 $f$ 의 값이 $0$ 이 될 확률은 여전히 $1/100$ 이하이고, 이것이 이 보조정리다. 위 예에서 $f$ 의 차수는 $n(n-1)/2$ 이하다.

# 정의

## 진술

$\mathbb F$ 를 체, $f\in\mathbb F\lbrack x_1,\dots,x_n\rbrack$ 를 전체 차수 $d$ 인 $0$ 이 아닌 다항식, $S\subseteq\mathbb F$ 를 유한집합이라 한다. $r_1,\dots,r_n$ 을 $S$ 에서 독립으로 균등하게 고르면

$$
\Pr\big\lbrack f(r_1,\dots,r_n)=0\big\rbrack\le\frac{d}{\lvert S\rvert}
$$

이다. 확률은 [유한 확률 공간](probability.md) $S^n$ 위의 균등분포로 잰다. 세는 꼴로 쓰면 $S^n$ 안의 $f$ 의 근은 많아야 $d\lvert S\rvert^{n-1}$ 개다.

## 다항식 항등 판정

**다항식 항등 판정(polynomial identity testing, PIT)** 은 산술회로나 행렬식 같은 식으로 주어진 다항식이 영다항식인지를 판정하는 문제다. 두 다항식 $g,h$ 가 같은지는 $g-h$ 가 영다항식인지로 바꾼다. 무작위 알고리즘은 다음과 같다.

```typescript
// f 는 점에서의 값만 계산할 수 있는 다항식, d 는 전체 차수의 상한, S 는 크기가 2d 이상인 체의 유한 부분집합
function isZeroPolynomial(f: (x: Field[]) => Field, n: number, d: number, S: Field[], trials: number): boolean {
  for (let t = 0; t < trials; t++) {
    const r = Array.from({ length: n }, () => S[randomInt(S.length)]);
    if (f(r) !== 0) return false; // 0 이 아닌 값이 나오면 영다항식이 아니다. 이 답은 틀리지 않는다
  }
  return true; // 틀릴 확률은 (d / |S|)^trials 이하
}
```

# 성질

## 증명의 요지

$n$ 에 대한 귀납법으로 증명한다. $n=1$ 이면 근이 많아야 $d$ 개이므로 성립한다. $n\ge 2$ 이면 $f$ 를 $x_1$ 의 거듭제곱으로 묶어

$$
f=\sum_{i=0}^{k}x_1^{\thinspace i}f_i(x_2,\dots,x_n),\qquad f_k\ne 0
$$

로 쓴다. $f_k$ 의 전체 차수는 $d-k$ 이하이므로 귀납 가정으로 $\Pr\lbrack f_k(r_2,\dots,r_n)=0\rbrack\le(d-k)/\lvert S\rvert$ 다. $f_k(r_2,\dots,r_n)\ne 0$ 이면 $f(x_1,r_2,\dots,r_n)$ 은 차수 $k$ 인 $0$ 이 아닌 일변수 다항식이므로 $r_1$ 이 그 근일 확률이 $k/\lvert S\rvert$ 이하다. 두 경우를 더하면 $d/\lvert S\rvert$ 이하다.

## 상한의 정확성

$S$ 의 서로 다른 원소 $s_1,\dots,s_d$ 에 대해 $f=(x_1-s_1)\cdots(x_1-s_d)$ 는 $r_1\in\lbrace s_1,\dots,s_d\rbrace$ 일 때만 $0$ 이므로 확률이 정확히 $d/\lvert S\rvert$ 다. 그래서 상한은 일반적으로 개선되지 않는다.

## 단측 오류와 반복

위 알고리즘이 "영다항식이 아니다" 라고 답하면 그 답은 항상 맞다. 틀릴 수 있는 것은 영다항식이 아닌 $f$ 를 영다항식이라 답하는 경우뿐이고, 시행을 $t$ 번 독립으로 되풀이하면 그 확률은 $(d/\lvert S\rvert)^t$ 이하다. 산술회로로 주어진 다항식의 항등 판정은 그래서 단측 오류 무작위 다항시간(randomized polynomial time, RP)의 여집합 부류 coRP 에 든다. 두 부류는 [무작위 복잡도 부류](randomized-complexity-classes.md) 문서에서 정의한다.

## 변수별 차수 판본

$f$ 가 각 변수에 대해 차수 $d$ 이하이면 전체 차수는 $nd$ 이하이므로 확률은 $nd/\lvert S\rvert$ 이하다. 다중선형 다항식($d=1$)에서는 $n/\lvert S\rvert$ 다.

## 탈무작위화와 회로 하한

V. Kabanets 와 R. Impagliazzo 는 산술회로로 주어진 다항식의 항등 판정에 결정적 다항시간 알고리즘이 있으면, 비결정적 지수 시간(nondeterministic exponential time) 부류 $\mathrm{NEXP}$ 가 다항 크기 불 회로로 계산되지 않거나 영구식(permanent)이 다항 크기 산술회로로 계산되지 않는다는 것을 증명했다[^5]. 이 정리에 따라 이 보조정리의 무작위성을 없애는 문제는 회로 하한을 증명하는 문제와 이어진다.

# 활용

- 행렬식 항등식의 검사. 직관 절의 Vandermonde 행렬식처럼 전개하면 항이 지수적으로 많은 항등식을 무작위 점에서의 값 몇 개로 확인한다.
- 완전 매칭 판정. 꼭짓점이 $1,\dots,m$ 인 그래프에서 변 $\lbrace i,j\rbrace$ ($i\lt j$)마다 변수 $x_{ij}$ 를 두고 $A_{ij}=x_{ij}$, $A_{ji}=-x_{ij}$, 나머지 성분을 $0$ 으로 둔 행렬을 Tutte 행렬(Tutte matrix)이라 한다. $\det A$ 가 영다항식이 아닌 것과 그래프에 완전 [매칭](matchings.md)이 있는 것이 동치이고, $\det A$ 의 차수가 $m$ 이므로 무작위 값을 넣은 행렬식 한 번으로 판정한다. L. Lovász 가 1979 년에 제시했다[^4].
- [대화형 증명](interactive-proofs.md)의 합 검사 프로토콜. 증명자가 틀린 일변수 다항식을 보냈을 때 무작위 점에서 들키지 않을 확률의 상한이 이 보조정리의 $n=1$ 경우다.
- [Goldwasser–Kalai–Rothblum 프로토콜](gkr-protocol.md). 서로 다른 두 게이트 값 목록의 다중선형 확장이 무작위 점에서 같을 확률이 변수별 차수 판본으로 $s/\lvert\mathbb F\rvert$ 이하다.
- [Rabin–Karp 알고리즘](rabin-karp.md). 두 문자열의 다항식 해시가 무작위 밑에서 충돌할 확률이 일변수 경우로 $(m-1)/p$ 이하다.

[^1]: J. T. Schwartz, "Fast probabilistic algorithms for verification of polynomial identities", Journal of the ACM 27(4) (1980), 701–717.
[^2]: R. Zippel, "Probabilistic algorithms for sparse polynomials", EUROSAM 1979, Lecture Notes in Computer Science 72 (1979), 216–226.
[^3]: R. A. DeMillo, R. J. Lipton, "A probabilistic remark on algebraic program testing", Information Processing Letters 7(4) (1978), 193–195.
[^4]: L. Lovász, "On determinants, matchings, and random algorithms", Fundamentals of Computation Theory (FCT 1979), 565–574.
[^5]: V. Kabanets, R. Impagliazzo, "Derandomizing polynomial identity tests means proving circuit lower bounds", Computational Complexity 13 (2004), 1–46.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [유한 확률 공간](probability.md)

## 더 알아보기

- [고립 보조정리](isolation-lemma.md)

#algorithms #complexity #algebra #probability
