# Baker–Campbell–Hausdorff 공식

# 개요

**Baker–Campbell–Hausdorff 공식(Baker–Campbell–Hausdorff formula, BCH 공식)** 은 두 행렬 지수의 곱 $e^Xe^Y$ 를 행렬 지수 하나 $e^Z$ 로 쓸 때 $Z$ 를 $X$, $Y$ 와 그 교환자로 적는 공식이다. 공을 $y$ 축으로 $0.1$ 라디안 돌린 다음 $x$ 축으로 $0.1$ 라디안 돌리면, 결과는 어떤 한 축에 대한 회전이다. 그 축과 각을 회전축 방향에 각을 곱한 벡터로 적으면 두 회전 벡터의 합 $(0.1,0.1,0)$ 이 아니라 $(0.0999,0.0999,0.0050)$ 이다. BCH 공식은 이 차이를 두 회전의 교환자로 계산한다.

# 직관

[행렬 지수](matrix-exponential.md)의 급수를 이차항까지 적어 곱하면 다음이 나온다.

$$
e^Xe^Y=I+X+Y+\tfrac12X^2+XY+\tfrac12Y^2+\cdots
$$

$e^{X+Y}$ 의 이차항은 다음과 같다.

$$
\tfrac12(X+Y)^2=\tfrac12(X^2+XY+YX+Y^2)
$$

두 식의 이차항은 $\tfrac12(XY-YX)$ 만큼 다르다. $XY=YX$ 이면 차가 없고 $e^Xe^Y=e^{X+Y}$ 이다.

차가 $XY-YX$ 에서 생겼으니 지수에 그만큼을 더한다. $Z=X+Y+\tfrac12(XY-YX)$ 로 두면 $e^Z$ 의 이차항까지가 $e^Xe^Y$ 와 맞는다.

회전으로 확인한다. $x$, $y$, $z$ 축으로 도는 회전을 낳는 행렬을 $L_1$, $L_2$, $L_3$ 이라 하면 $L_1L_2-L_2L_1=L_3$ 이다. [Lie 대수](lie-algebras.md) 문서의 벡터곱 $e_1\times e_2=e_3$ 이 이것이다. $X=0.1L_1$, $Y=0.1L_2$ 이면 다음이 나온다.

$$
X+Y+\tfrac12(XY-YX)=0.1L_1+0.1L_2+0.005L_3
$$

개요의 $z$ 성분 $0.0050$ 이 이 $0.005$ 다. $x$, $y$ 성분의 $0.0999$ 는 다음 차수의 항에서 나온다.

# 정의

## 교환자와 BCH 급수

정사각행렬 $X$, $Y$ 의 **교환자(commutator)** 는 $\lbrack X,Y\rbrack=XY-YX$ 다. $X$, $Y$ 가 충분히 작을 때 $e^Xe^Y=e^Z$ 를 만족하는 작은 $Z$ 가 하나 존재하고, 이 $Z$ 를 $X$, $Y$ 의 차수별로 전개한 것을 **BCH 급수(BCH series)** 라 한다. 사차항까지는 다음과 같다.[^1]

$$
\begin{aligned}
Z={}&X+Y+\tfrac12\lbrack X,Y\rbrack+\tfrac1{12}\lbrack X,\lbrack X,Y\rbrack\rbrack-\tfrac1{12}\lbrack Y,\lbrack X,Y\rbrack\rbrack\cr
&-\tfrac1{24}\lbrack Y,\lbrack X,\lbrack X,Y\rbrack\rbrack\rbrack+\cdots
\end{aligned}
$$

모든 항이 $X$, $Y$ 에 교환자를 거듭 취한 것이다. 직관 절의 회전에서 삼차항을 계산하면 다음이 나온다.

$$
\tfrac1{12}\lbrack X,\lbrack X,Y\rbrack\rbrack-\tfrac1{12}\lbrack Y,\lbrack X,Y\rbrack\rbrack=-\tfrac{0.001}{12}L_2-\tfrac{0.001}{12}L_1
$$

$0.1-0.001/12=0.09992$ 라 개요의 $x$, $y$ 성분 $0.0999$ 가 맞는다.

## Dynkin 공식

BCH 급수의 모든 항을 한 식으로 적은 것이 **Dynkin 공식(Dynkin's formula)** 이다. $\log(1+W)=\sum\_{k\ge 1}(-1)^{k-1}W^k/k$ 에 $W=e^Xe^Y-I$ 를 넣어 전개하면 $X$ 와 $Y$ 를 늘어놓은 단어들의 일차결합이 나온다. 그 단어 $x_1x_2\cdots x_n$ 마다 교환자를 겹친 $\lbrack x_1,\lbrack x_2,\dots\lbrack x\_{n-1},x_n\rbrack\dots\rbrack\rbrack$ 로 바꾸고 길이 $n$ 으로 나누면 $Z$ 가 된다.[^2] 차수별 항이 교환자만으로 적힌다는 것은 Campbell, Baker, Hausdorff 가 1897 년부터 1906 년 사이에 다루었고, Dynkin 이 1947 년에 계수를 명시했다.

# 성질

## 교환자가 중심에 있는 경우

$\lbrack X,Y\rbrack$ 가 $X$ 와 $Y$ 둘 다와 교환하면 삼차 이상의 항이 모두 $0$ 이라 다음이 정확히 성립한다.

$$
e^Xe^Y=e^{X+Y+\frac12\lbrack X,Y\rbrack}
$$

$3\times 3$ 행렬에서 $(1,2)$ 성분만 $a$ 인 $X$ 와 $(2,3)$ 성분만 $b$ 인 $Y$ 가 그 예다. $\lbrack X,Y\rbrack$ 는 $(1,3)$ 성분만 $ab$ 이다. $X^2=Y^2=0$ 이라 다음이 나오고, $XY$ 는 $(1,3)$ 성분이 $ab$ 다.

$$
e^Xe^Y=(I+X)(I+Y)=I+X+Y+XY
$$

$W=X+Y+\tfrac12\lbrack X,Y\rbrack$ 는 $W^2=XY$, $W^3=0$ 이라 $e^W=I+W+\tfrac12W^2$ 의 $(1,3)$ 성분이 $\tfrac12ab+\tfrac12ab=ab$ 이므로 양변이 같다. 이런 행렬이 이루는 군이 Heisenberg 군(Heisenberg group)이다.

같은 조건에서 $e^Xe^Y=e^{\lbrack X,Y\rbrack}e^Ye^X$ 가 따라 나온다. 양자역학에서 위치와 운동량 연산자의 지수가 만족하는 Weyl 관계(Weyl relation)가 이 꼴이다.

## 수렴 반지름

BCH 급수는 $X$, $Y$ 가 작을 때만 수렴한다. 행렬 노름에서 $\Vert X\Vert+\Vert Y\Vert\lt 1.08686$ 이면 급수가 절대수렴한다는 것이 알려져 있다.[^3] 큰 $X$, $Y$ 에서는 $e^Xe^Y$ 의 로그가 여러 개이거나 실수 행렬로 존재하지 않을 수 있어서, 급수는 한 값을 정하지 못한다. [행렬 로그](matrix-logarithm.md) 문서의 회전각 $2\pi k$ 모호성이 그런 예다.

## Lie 대수로 정해지는 곱셈

BCH 급수의 모든 항이 교환자이므로, 항등원 근처에서 $e^Xe^Y$ 는 Lie 괄호만으로 계산된다. 그래서 같은 Lie 대수를 갖는 두 [Lie 군](lie-groups.md)은 항등원 근처에서 곱셈이 같다. 멱영 Lie 대수에서는 급수가 유한 개의 항에서 끝나 곱셈이 다항식으로 적힌다. Heisenberg 군의 곱셈이 그 예다.

## 분할 근사의 오차

$X=A/n$, $Y=B/n$ 을 넣으면 다음이 나온다.

$$
e^{A/n}e^{B/n}=\exp\Bigl(\frac{A+B}n+\frac{\lbrack A,B\rbrack}{2n^2}+O(n^{-3})\Bigr)
$$

이것을 $n$ 번 곱하면 지수가 다음과 같다.

$$
A+B+\frac{\lbrack A,B\rbrack}{2n}+O(n^{-2})
$$

그래서 [Lie–Trotter 곱 공식](lie-trotter-formula.md)의 오차가 $1/n$ 에 비례한다. $e^{A/2n}e^{B/n}e^{A/2n}$ 처럼 대칭으로 곱하면 $Z$ 의 짝수 차 항이 상쇄되어 오차가 $1/n^2$ 에 비례하고, 이것이 Strang 분할의 차수다.[^4]

# 활용

- 분할 적분법. 두 부분으로 나뉜 미분방정식을 각 부분의 흐름을 번갈아 곱해 풀 때, BCH 급수로 오차의 교환자 항을 세어 차수를 정한다. Strang 분할 셋을 이어 사차 방법을 만드는 Yoshida 구성이 그 예다.[^4]
- Lie 이론. Lie 대수의 준동형을 국소적인 군 준동형으로 올리는 데 BCH 급수로 곱셈을 정의한다. [Lie 군](lie-groups.md) 문서의 대응 정리가 이것을 쓴다.
- 양자역학. 위치와 운동량의 교환자가 상수이므로 성질 절의 중심 경우에 들고, 변위 연산자의 곱셈 규칙이 이 공식으로 나온다.
- Magnus 전개(Magnus expansion). 계수가 시간에 따라 바뀌는 선형 미분방정식 $x'=A(t)x$ 의 해를 $e^{\Omega(t)}$ 로 쓰고 $\Omega$ 를 교환자의 급수로 적는다. 짧은 시간 구간마다 $e^{\Omega}$ 를 곱하는 수치해법의 오차를 BCH 급수로 센다.

[^1]: B. C. Hall, *Lie Groups, Lie Algebras, and Representations*, 2nd ed., Springer (2015), 5 장. BCH 공식의 적분형과 삼차항까지의 전개, Heisenberg 군.
[^2]: E. B. Dynkin, "Calculation of the coefficients in the Campbell–Hausdorff formula", *Doklady Akademii Nauk SSSR* 57 (1947), 323–326.
[^3]: S. Blanes, F. Casas, "On the convergence and optimization of the Baker–Campbell–Hausdorff formula", *Linear Algebra and its Applications* 378 (2004), 135–158.
[^4]: E. Hairer, C. Lubich, G. Wanner, *Geometric Numerical Integration*, 2nd ed., Springer (2006), II.4 절과 III.4 절. 대칭 BCH 공식, 분할 방법의 차수, 합성 방법.

# 연관 문서

## 선수지식

- [행렬 지수](matrix-exponential.md)
- [Lie 대수](lie-algebras.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #linear_algebra #analysis
