# Mahler 측도

# 개요

**Mahler 측도(Mahler measure)** 는 정수 계수 다항식의 근이 단위원 밖으로 얼마나 나가 있는지를 수 하나로 잰 값이다. $x^2-x-1$ 의 근은 $1.618\ldots$ 과 $-0.618\ldots$ 이고 하나가 단위원 밖에 있다. 다음 다항식은 계수가 전부 $0$ 이나 $\pm 1$ 인데, 근 열 개 가운데 단위원 밖에 있는 것이 $1.17628\ldots$ 하나뿐이다.

$$
x^{10}+x^9-x^7-x^6-x^5-x^4-x^3+x+1
$$

Mahler 측도는 최고차 계수와 단위원 밖 근의 절댓값을 모두 곱한 값이다. 이 값이 $1$ 이면 다항식의 근은 $0$ 이거나 $1$ 의 거듭제곱근이고, $1$ 보다 크면 얼마나 큰지가 다항식이 단위근에서 떨어진 정도다.

# 직관

정수 계수 다항식의 근을 단위원과 견주어 본다. $x^2+1$ 의 근 $\pm i$ 는 단위원 위에 있고 $x^5-1$ 을 $x-1$ 로 나눈 다항식의 근은 $1$ 이 아닌 $1$ 의 다섯제곱근이다. $x^2-x-1$ 은 근 하나가 $1.618\ldots$ 로 밖에 있고, $x^2-2$ 는 두 근 $\pm 1.414\ldots$ 가 모두 밖에 있다.

근이 단위원에서 얼마나 나가 있는지를 단위원 밖 근의 절댓값을 곱해 잰다. $x^2-x-1$ 은 $1.618\ldots$, $x^2-2$ 는 $1.414\ldots\times 1.414\ldots=2$ 다. 최고차 계수도 곱한다. $2x-1$ 의 근 $1/2$ 은 안에 있지만 최고차 계수 $2$ 를 곱해 $2$ 를 얻는다.

이 곱은 근을 구하지 않고도 계산된다. [Jensen 공식](jensen-formula.md)에서 단위원 위 $\log\vert p\vert$ 의 평균은 $\log\vert p(0)\vert$ 에 단위원 안 근마다 $\log(1/\vert\alpha\vert)$ 를 더한 값이다. $\vert p(0)\vert$ 는 최고차 계수와 모든 근의 절댓값의 곱이므로, 더한 결과는 최고차 계수와 단위원 밖 근의 절댓값만 곱한 값의 로그다.

# 정의

복소 계수 다항식 $p(x)=c\prod\_{k=1}^{d}(x-\alpha\_k)$, $c\neq 0$ 의 **Mahler 측도(Mahler measure)** 는 다음 값이다.

$$
M(p)=\vert c\vert\prod_{k=1}^{d}\max(1,\vert\alpha\_k\vert)
$$

$M(x^2-x-1)=1.618\ldots$, $M(x^2-2)=2$, $M(2x-1)=2$, $M(x^2+1)=1$ 이다.

**로그 Mahler 측도(logarithmic Mahler measure)** 는 $m(p)=\log M(p)$ 이다. Jensen 공식에서 다음이 성립한다.

$$
m(p)=\frac{1}{2\pi}\int_0^{2\pi}\log\vert p(e^{i\theta})\vert\thinspace d\theta
$$

$p(x)=x-2$ 이면 단위원 위에서 $\vert e^{i\theta}-2\vert=2\vert 1-e^{i\theta}/2\vert$ 이고, $\log\vert 1-z/2\vert$ 의 평균은 $0$ 이므로 $m(p)=\log 2$ 다.

대수적 수 $\alpha$ 의 Mahler 측도 $M(\alpha)$ 는 $\alpha$ 를 근으로 갖는 기약 정수 계수 다항식, 곧 계수의 최대공약수가 $1$ 인 최소다항식의 Mahler 측도다. $M(\sqrt 2)=2$, $M(1/2)=2$, $M(i)=1$ 이다.

# 성질

## 곱셈성

$M(pq)=M(p)M(q)$ 다. $pq$ 의 최고차 계수는 두 최고차 계수의 곱이고 근은 두 근 목록을 합친 것이기 때문이다. $(x^2-x-1)(x^2+1)=x^4-x^3-x-1$ 의 Mahler 측도는 $1.618\ldots\times 1$ 이다.

## 정수 계수에서의 하한

$p$ 가 정수 계수이고 $0$ 이 아니면 $M(p)\ge 1$ 이다. 최고차 계수 $c$ 가 $0$ 이 아닌 정수이므로 $\vert c\vert\ge 1$ 이고 나머지 인수도 $1$ 이상이다.

## 계수의 상계

$p(x)=\sum\_{j=0}^{d}a\_jx^j$ 이면 각 계수는 다음을 만족한다.

$$
\vert a\_j\vert\le\binom{d}{j}M(p)
$$

$a\_j/c$ 는 근들의 기본대칭식에 부호를 붙인 것이다([대칭함수](symmetric-functions.md)). 기본대칭식은 근 $d-j$ 개를 고른 곱 $\binom{d}{j}$ 개의 합이고, 각 곱의 절댓값은 $\prod\_k\max(1,\vert\alpha\_k\vert)$ 이하다. 이 상계 덕분에 Mahler 측도가 $B$ 이하이고 차수가 $d$ 이하인 정수 계수 다항식은 유한 개다.

## Kronecker 정리

*정리.* 정수 계수 다항식 $p$ 의 최고차 계수가 $1$ 이고 $M(p)=1$ 이면 $p$ 의 근은 모두 $0$ 이거나 $1$ 의 거듭제곱근이다[^1].

*증명의 요지.* $M(p)=1$ 이면 근이 모두 $\vert\alpha\_k\vert\le 1$ 이다. 정수 $n\ge 1$ 마다 $p\_n(x)=\prod\_k(x-\alpha\_k^n)$ 은 계수가 근의 대칭식이므로 정수 계수이고, 근의 절댓값이 $1$ 이하이므로 $M(p\_n)=1$ 이다. 계수의 상계에서 이런 $p\_n$ 은 유한 개뿐이므로 $p\_n$ 들의 근을 모은 집합도 유한하다. 근 $\alpha\neq 0$ 의 거듭제곱 $\alpha^n$ 이 이 유한집합에 들어가므로 $\alpha^j=\alpha^l$ 인 $j\lt l$ 이 있고, $\alpha^{l-j}=1$ 이다. ∎

최고차 계수 조건을 빼면 $M(p)=1$ 인 정수 계수 다항식은 $\pm x^r$ 과 원분다항식(cyclotomic polynomial)들의 곱이다. 최고차 계수가 $\pm 1$ 이어야 $M(p)=1$ 이 되기 때문이다.

## Lehmer 문제

Lehmer 문제(Lehmer's problem)는 $M(p)\gt 1$ 인 정수 계수 다항식들의 Mahler 측도가 $1$ 보다 큰 어떤 상수 이상인지를 묻는다. 개요의 차수 10 다항식이 지금까지 알려진 가장 작은 값 $1.17628\ldots$ 을 주고, 이 질문은 열려 있다[^2].

$p$ 가 상반 다항식(reciprocal polynomial), 곧 $x^dp(1/x)=\pm p(x)$ 가 아니면 다음이 성립한다(Smyth 정리, Smyth's theorem)[^3].

$$
M(p)\ge M(x^3-x-1)=1.3247\ldots
$$

개요의 차수 10 다항식은 계수를 거꾸로 읽어도 같은 상반 다항식이어서 이 하한에 걸리지 않는다.

# 활용

- 정수 행렬 $A$ 로 정한 원환면 $\mathbb R^n/\mathbb Z^n$ 의 자기동형사상 $x\mapsto Ax$ 의 [Kolmogorov–Sinai 엔트로피](kolmogorov-sinai-entropy.md)는 $A$ 의 특성다항식의 로그 Mahler 측도, 곧 절댓값이 $1$ 보다 큰 고윳값마다 $\log\vert\lambda\vert$ 를 더한 값이다. $A=\begin{pmatrix}2&1\cr 1&1\end{pmatrix}$ 이면 특성다항식이 $x^2-3x+1$ 이고 엔트로피는 $\log\frac{3+\sqrt 5}{2}$ 다.
- 정수 계수 다항식을 인수분해하는 알고리즘은 인수의 계수 크기를 미리 묶어 두어야 한다. $q$ 가 $p$ 를 나누면 $M(q)\le M(p)$ 이므로 계수의 상계에서 $q$ 의 계수가 $\binom{\deg q}{j}M(p)$ 이하다.
- 대수적 수 $\alpha$ 의 Weil 높이(Weil height)는 $\log M(\alpha)/\deg\alpha$ 이고, [Diophantine 근사](diophantine-approximation.md)와 [Baker 정리](baker-theorem.md)의 하한은 이 높이로 적힌다.
- 변수가 여럿인 다항식에도 원환면 위 평균으로 Mahler 측도를 정의한다. $m(1+x+y)$ 는 [Dirichlet L 함수](dirichlet-l-functions.md)의 값 $L(\chi\_{-3},2)$ 의 상수배다.

[^1]: L. Kronecker, "Zwei Sätze über Gleichungen mit ganzzahligen Coefficienten", *J. Reine Angew. Math.* 53 (1857), 173–175.
[^2]: C. Smyth, "The Mahler measure of algebraic numbers: a survey", in *Number Theory and Polynomials*, London Math. Soc. Lecture Note Ser. 352, Cambridge Univ. Press, 2008, 322–349. Lehmer 다항식과 Lehmer 문제의 현황.
[^3]: C. J. Smyth, "On the product of the conjugates outside the unit circle of an algebraic integer", *Bull. London Math. Soc.* 3 (1971), 169–175.

# 연관 문서

## 선수지식

- [Jensen 공식](jensen-formula.md)

## 더 알아보기

- [Pisot 수](pisot-numbers.md)

#number_theory #complex_analysis #algebra
