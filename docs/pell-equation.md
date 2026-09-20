# Pell 방정식

# 개요

Pell 방정식은 제곱수가 아닌 양의 정수 $d$ 에 대한 $x^2 - dy^2 = 1$ 이다. 정수해가 항상 무한히 많고, 모든 해가 가장 작은 해 하나의 거듭제곱으로 나온다.

해를 찾는 방법이 $\sqrt d$ 의 [연분수](continued-fractions.md) 전개이고, 해의 구조는 실이차체의 단수군이 계수 $1$ 인 것과 같은 사실이다.

# 직관

$x^2 - 2y^2 = 1$ 의 정수해를 찾는다. 식을 $x^2 = 2y^2 + 1$ 로 두고 $y$ 를 키워 가며 $2y^2+1$ 이 제곱수가 되는지 보면 $y=2$ 에서 $x=3$, $y=12$ 에서 $x=17$ 이 나온다.

두 해 사이의 관계를 보려면 식을 인수분해한다. $x^2 - 2y^2 = (x + y\sqrt 2)(x - y\sqrt 2)$ 이므로 해는 $x + y\sqrt 2$ 의 노름이 $1$ 인 것이다. 노름은 곱셈을 보존하므로 노름이 $1$ 인 두 수를 곱하면 다시 노름이 $1$ 이다.

$3 + 2\sqrt 2$ 를 제곱하면 $17 + 12\sqrt 2$ 다. 두 번째 해가 첫 번째 해의 제곱이다. 계속 제곱하거나 곱하면 해가 무한히 나온다.

해를 처음부터 찾으려면 $x/y$ 가 $\sqrt 2$ 에 아주 가까워야 한다. $x^2 - 2y^2 = 1$ 에서 양변을 $y^2$ 으로 나누면 $(x/y)^2 - 2 = 1/y^2$ 이므로 $y$ 가 클수록 $x/y$ 가 $\sqrt 2$ 에 가깝다. 분모에 비해 유난히 좋은 유리수 근사는 연분수의 수렴분뿐이므로 $\sqrt 2 = \lbrack 1; \overline{2}\rbrack$ 의 수렴분 $1, 3/2, 7/5, 17/12$ 에서 해를 읽으면 된다.

# 정의

## 방정식과 노름

$d$ 가 제곱수가 아닌 양의 정수일 때 $x^2 - dy^2 = 1$ 을 **Pell 방정식**, $x^2 - dy^2 = -1$ 을 **음의 Pell 방정식**이라 한다.

$\mathbb Z\lbrack\sqrt d\rbrack$ 의 원소 $\alpha = x + y\sqrt d$ 에 대해 $N(\alpha) = x^2 - dy^2$ 를 **노름**이라 하고, 노름은 곱셈을 보존한다.

$$
N(\alpha\beta) = N(\alpha)N(\beta)
$$

Pell 방정식의 해는 노름이 $1$ 인 원소이고, 이는 $\mathbb Z\lbrack\sqrt d\rbrack$ 의 가역원 가운데 노름이 $1$ 인 것과 같다.

## 기본해

$x, y$ 가 모두 양수인 해 가운데 $x + y\sqrt d$ 가 가장 작은 것을 **기본해**라 한다.

# 성질

## 해의 존재

**정리.** 제곱수가 아닌 모든 $d$ 에 대해 Pell 방정식은 자명하지 않은 정수해를 갖는다.[^1]

Dirichlet 의 비둘기집 논법이 $\vert x - y\sqrt d\vert \lt 1/y$ 인 쌍을 무한히 준다. 그런 쌍에서 $\vert x^2 - dy^2\vert$ 가 $1 + 2\sqrt d$ 로 묶이므로 어떤 정수 $m$ 에 대해 $x^2 - dy^2 = m$ 인 쌍이 무한히 많다. 그 가운데 $x$ 와 $y$ 가 법 $\vert m\vert$ 에서 같은 두 쌍을 고르고 서로 나누면 노름이 $1$ 인 원소가 나온다. ∎

## 해의 구조

**정리.** 기본해를 $\varepsilon = x_1 + y_1\sqrt d$ 라 하면 양의 해 전체가 $\varepsilon^n$ $(n \ge 1)$ 이다.

노름이 $1$ 인 $\alpha \gt 1$ 이 있고 $\varepsilon^n \le \alpha \lt \varepsilon^{n+1}$ 이면 $\alpha\varepsilon^{-n}$ 도 노름이 $1$ 이고 $1 \le \alpha\varepsilon^{-n} \lt \varepsilon$ 이다. 기본해의 최소성에서 이 값이 $1$ 이므로 $\alpha = \varepsilon^n$ 이다. ∎

이 구조가 Dirichlet 단수 정리의 가장 작은 경우다. 실이차체의 단수군은 $\lbrace \pm 1\rbrace$ 과 무한순환군의 곱이고, 무한순환군을 낳는 원소가 기본단수다.

## 연분수의 수렴분

**정리.** $x^2 - dy^2 = 1$ 의 양의 해는 모두 $\sqrt d$ 의 수렴분 $p_k/q_k$ 에서 나온다.

$x^2 - dy^2 = 1$ 이면 $\vert x/y - \sqrt d\vert \lt 1/(2y^2)$ 이 되고, Legendre 판정에 의해 $x/y$ 가 수렴분이다. 거꾸로 $\sqrt d$ 의 연분수는 순환하고, 순환 마디 길이를 $\ell$ 이라 하면 $p_k^2 - dq_k^2 = (-1)^{k+1}$ 이 $k \equiv \ell - 1 \pmod \ell$ 에서 성립한다. ∎

**따름정리.** 순환 마디 길이 $\ell$ 이 짝수이면 기본해가 $p_{\ell-1}/q_{\ell-1}$ 에서 나오고 음의 Pell 방정식은 풀리지 않는다. $\ell$ 이 홀수이면 $p_{\ell-1}$ 이 음의 Pell 방정식을 풀고 그 제곱이 Pell 방정식의 기본해다.

$d = 2$ 는 $\ell = 1$ 이고 $1^2 - 2\cdot 1^2 = -1$ 이 음의 방정식을 푼다. $d = 3$ 은 $\ell = 2$ 이고 $2^2 - 3\cdot 1^2 = 1$ 이 기본해다.

## 기본해의 크기

기본해는 $d$ 에 비해 매우 클 수 있다. $d = 61$ 의 기본해는 $x = 1766319049$, $y = 226153980$ 이다. 일반적으로 $\log \varepsilon$ 은 $\sqrt d$ 규모까지 커지고, 류수 공식이 $\log \varepsilon$ 과 실이차체의 류수의 곱을 [Dirichlet L 함수](dirichlet-l-functions.md)의 값으로 준다.

# 활용

- 실이차체의 단수군 계산이 Pell 방정식 풀이다. 류수 계산과 아이디얼 류군의 구조 결정에서 기본단수가 필요하다.
- $\sqrt d$ 의 유리수 근사를 준다. 해 $(x,y)$ 마다 $x/y$ 가 오차 $1/(2y^2)$ 이내의 근사이고, 고대의 근삿값들이 작은 해에서 나온다.
- 삼각수이면서 제곱수인 수를 찾는 문제가 $x^2 - 2y^2 = 1$ 로 바뀐다. 이런 꼴의 Diophantine 문제 다수가 Pell 방정식으로 환원된다.
- Hilbert 의 열 번째 문제의 부정적 해결에서 Pell 방정식의 해가 지수적으로 자란다는 사실이 쓰인다. Matiyasevich 가 이 성질로 지수함수를 Diophantine 조건으로 표현했다.

[^1]: Kenneth Ireland and Michael Rosen, *A Classical Introduction to Modern Number Theory*, 2nd ed., Springer (1990), Ch. 17. Pell 방정식의 해의 존재와 단수군 구조가 이 장에 있다.

# 연관 문서

## 선수지식

- [연분수](continued-fractions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #algorithms
