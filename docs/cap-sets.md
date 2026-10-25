# 캡 집합

# 개요

**캡 집합(cap set)** 은 $\mathbb F\_3^n$ 의 부분집합 가운데 한 직선 위에 있는 서로 다른 세 점을 포함하지 않는 것이다. J. S. Ellenberg 와 D. Gijswijt 는 캡 집합의 크기가 $2.756^n$ 이하임을 2017 년에 증명했다[^1].

$\mathbb F\_3^n$ 에서 서로 다른 세 점 $x,y,z$ 가 한 직선 위에 있는 것은 $x+y+z=0$ 인 것, 곧 $x,y,z$ 가 등차수열을 이루는 것과 동치다. 그래서 캡 집합 문제는 [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)를 [유한체](finite-fields.md) 위의 벡터 공간으로 옮긴 것이다.

# 직관

카드 게임 SET 의 카드는 색, 모양, 개수, 무늬 네 속성이 각각 세 값 가운데 하나를 갖는 $81$ 장이다. 카드를 $\mathbb F\_3^4$ 의 점으로 쓰면, 세 카드가 속성마다 모두 같거나 모두 다른 것은 좌표마다 $x_i+y_i+z_i=0$ 인 것과 같다. 모두 같으면 $3x_i=0$ 이고, 모두 다르면 $0+1+2=3=0$ 이기 때문이다. 이런 세 카드가 한 직선이고, SET 를 하나도 포함하지 않는 카드 모음이 캡 집합이다. $n=4$ 에서 캡 집합의 최대 크기는 $20$ 이다.

차원 $n$ 이 커질 때 최대 크기가 $3^n$ 에 비해 얼마나 작은지 묻는다. Fourier 해석으로 R. Meshulam 이 $O(3^n/n)$ 을 얻었고, 이것은 $3^n$ 의 지수적으로 작은 몫이 아니었다[^2]. Ellenberg 와 Gijswijt 는 $x+y+z=0$ 을 다항식으로 쓰고 그 다항식의 차수를 세어 밑이 $3$ 보다 작은 지수 상한을 얻었다.

# 정의

$A\subseteq\mathbb F\_3^n$ 이 **캡 집합** 이라는 것은 $x,y,z\in A$ 이고 $x+y+z=0$ 이면 $x=y=z$ 라는 것이다. 두 점이 같으면 $x=y$ 에서 $z=-2x=x$ 이므로, 이 조건은 서로 다른 세 점이 한 직선에 있지 않다는 것과 동치다. 최대 크기를 $r_3(\mathbb F\_3^n)$ 으로 쓴다.

유한집합 $A$ 위의 함수 $T:A\times A\times A\to\mathbb F$ 가 $f(x)g(y,z)$, $f(y)g(x,z)$, $f(z)g(x,y)$ 가운데 한 꼴이면 **조각 계수(slice rank)** 가 $1$ 이라 한다. 조각 계수가 $1$ 인 함수 $r$ 개의 합으로 쓸 수 있는 최소의 $r$ 이 $T$ 의 조각 계수다. 이 꼴의 증명은 T. Tao 가 정리했다[^3].

# 성질

## 대각 함수의 조각 계수

보조정리. $c_a\ne 0$ 이고 $T(x,y,z)=\sum_{a\in A}c_a\delta_a(x)\delta_a(y)\delta_a(z)$ 이면 $T$ 의 조각 계수는 $\lvert A\rvert$ 다. $\delta_a$ 는 $a$ 에서 $1$, 나머지에서 $0$ 인 함수다.

증명의 요지. $T$ 가 조각 계수 $1$ 인 함수 $r\lt\lvert A\rvert$ 개의 합이고, 그 가운데 $f_i(x)g_i(y,z)$ 꼴이 $m$ 개라 하자. $\sum_x h(x)f_i(x)=0$ ($i\le m$) 을 만족하는 함수 $h$ 가운데 받침이 $\lvert A\rvert-m$ 개 이상인 것이 존재한다. 양변에 $h(x)$ 를 곱해 $x$ 에 대해 더하면, 왼쪽은 $(y,z)$ 의 대각행렬 $c_yh(y)\delta_y(z)$ 여서 계수가 $\lvert A\rvert-m$ 이상이다. 오른쪽에서 $x$ 꼴 조각은 사라지고, 나머지 $r-m$ 개는 계수가 $1$ 이하인 행렬이 되어 계수가 $r-m$ 이하다. $\lvert A\rvert-m\gt r-m$ 이므로 모순이다.

## Ellenberg–Gijswijt 상한

정리(Ellenberg–Gijswijt). 캡 집합 $A\subseteq\mathbb F\_3^n$ 에 대해 $\lvert A\rvert\le 3M_n$ 이다. $M_n$ 은 $a_i\in\lbrace 0,1,2\rbrace$ 이고 $a_1+\dots+a_n\le 2n/3$ 인 $(a_1,\dots,a_n)$ 의 개수다[^1].

증명의 요지. $\mathbb F\_3$ 에서 $1-t^2$ 은 $t=0$ 에서 $1$, $t=\pm 1$ 에서 $0$ 이므로

$$
\delta_0(x+y+z)=\prod_{i=1}^n\bigl(1-(x_i+y_i+z_i)^2\bigr)
$$

이다. $A$ 가 캡 집합이면 $A^3$ 위에서 이 함수는 $x=y=z$ 에서만 $1$ 이므로 보조정리에서 조각 계수가 $\lvert A\rvert$ 다. 오른쪽을 전개하면 단항식 $x^\alpha y^\beta z^\gamma$ 의 합이고, 각 변수의 지수는 $2$ 이하이며 전체 차수는 $2n$ 이하다. 그래서 $x^\alpha$, $y^\beta$, $z^\gamma$ 가운데 하나는 차수가 $2n/3$ 이하다. $x^\alpha$ 의 차수가 $2n/3$ 이하인 항을 $\alpha$ 마다 모으면 $x^\alpha g_\alpha(y,z)$ 꼴의 조각 $M_n$ 개가 되고, $y$, $z$ 도 같으므로 조각 계수는 $3M_n$ 이하다.

$0\lt t\lt 1$ 이면

$$
M_n\le\sum_{a\in\lbrace 0,1,2\rbrace^n}t^{\thinspace a_1+\dots+a_n-2n/3}=\left(\frac{1+t+t^2}{t^{2/3}}\right)^n
$$

이다. 괄호 안의 값은 $t=(\sqrt{33}-1)/8$ 에서 가장 작고 그 값은 약 $2.7552$ 다. 따라서 $\lvert A\rvert=O(2.756^n)$ 이다.

같은 방법이 $\mathbb Z/4^n$ 의 등차수열 없는 집합에 대한 E. Croot, V. F. Lev, P. P. Pach 의 결과에서 먼저 나왔다[^4].

# 활용

- 등차수열의 Roth 정리. 정수에서는 등차수열이 없는 집합이 지수적으로 작지 않다(Behrend 구성, Behrend's construction). 유한체 위에서는 이 절의 다항식 논법으로 지수적으로 작아진다.
- 행렬 곱셈의 지수. H. Cohn 과 C. Umans 의 군론적 행렬 곱셈 방법에서, 지수가 유계인 Abel 군만으로는 행렬 곱셈의 지수 $2$ 에 닿을 수 없음이 조각 계수 논법으로 증명되었다[^6].
- [해바라기 보조정리](sunflower-lemma.md). E. Naslund 와 W. Sawin 이 조각 계수 논법으로 Erdős–Szemerédi 해바라기 추측(Erdős–Szemerédi sunflower conjecture)을 증명했다[^5].

[^1]: J. S. Ellenberg, D. Gijswijt, "On large subsets of F_q^n with no three-term arithmetic progression", Annals of Mathematics 185 (2017), 339–343.
[^2]: R. Meshulam, "On subsets of finite abelian groups with no 3-term arithmetic progressions", Journal of Combinatorial Theory, Series A 71 (1995), 168–172.
[^3]: T. Tao, "A symmetric formulation of the Croot–Lev–Pach–Ellenberg–Gijswijt capset bound", What's new (블로그), 2016 년 5 월 18 일.
[^4]: E. Croot, V. F. Lev, P. P. Pach, "Progression-free sets in Z_4^n are exponentially small", Annals of Mathematics 185 (2017), 331–337.
[^5]: E. Naslund, W. Sawin, "Upper bounds for sunflower-free sets", Forum of Mathematics, Sigma 5 (2017), e15.
[^6]: J. Blasiak, T. Church, H. Cohn, J. A. Grochow, E. Naslund, W. F. Sawin, C. Umans, "On cap sets and the group-theoretic approach to matrix multiplication", Discrete Analysis (2017), 3.

# 연관 문서

## 선수지식

- [유한체](finite-fields.md)
- [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #field_theory #linear_algebra
