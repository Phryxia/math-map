# Brascamp–Lieb 부등식

# 개요

**Brascamp–Lieb 부등식(Brascamp–Lieb inequality)** 은 여러 함수를 각자 다른 선형 사영 뒤에 놓고 곱한 것의 적분을, 함수마다의 적분의 거듭제곱의 곱으로 누르는 부등식이다. 공간의 입체 하나를 세 좌표평면에 비춘 그림자의 넓이를 알 때 입체의 부피가 얼마까지 될 수 있는지 묻는다. 이 부등식은 그 상한을 그림자 넓이의 곱의 제곱근으로 주고, 어떤 사영과 지수에서 이런 상한이 존재하는지도 판정한다.

# 직관

입체 $K\subset\mathbb R^3$ 를 $x$, $y$, $z$ 좌표를 하나씩 지우는 사영 $\pi_1,\pi_2,\pi_3$ 으로 좌표평면에 비춘다. 변이 $a,b,c$ 인 상자의 그림자는 넓이가 $bc$, $ca$, $ab$ 이고, 그 곱의 제곱근은 $abc$ 로 부피와 같다.

$$
\mathrm{vol}(K)\le\big(\mathrm{area}(\pi_1K)\thinspace\mathrm{area}(\pi_2K)\thinspace\mathrm{area}(\pi_3K)\big)^{1/2}
$$

이것이 Loomis–Whitney 부등식(Loomis–Whitney inequality)이고, [Shearer 보조정리](shearer-lemma.md)에서 격자점의 판본으로 나온다. $f_j$ 를 그림자 $\pi_jK$ 의 지시함수로 두면 $K$ 의 지시함수는 $\prod_jf_j(\pi_jx)$ 이하이므로, 다음 부등식에서 Loomis–Whitney 부등식이 나온다.

$$
\int_{\mathbb R^3}\prod_{j=1}^3f_j(\pi_jx)^{1/2}\thinspace dx\le\prod_{j=1}^3\Big(\int_{\mathbb R^2}f_j\Big)^{1/2}
$$

사영을 모두 항등사상으로 바꾸고 지수의 합을 $1$ 로 두면 [Hölder 부등식](holder-inequality.md)이다. 사영과 지수를 일반적으로 두고 같은 꼴의 부등식이 언제 성립하는지 묻는 것이 Brascamp–Lieb 부등식이다.

# 정의

## Brascamp–Lieb 자료와 상수

선형 전사 $B_j:\mathbb R^n\to\mathbb R^{n_j}$ 와 지수 $p_j\ge 0$ ($j=1,\dots,m$)의 모임 $(\mathbf B,\mathbf p)$ 를 **Brascamp–Lieb 자료(Brascamp–Lieb datum)** 라 한다. 음이 아닌 적분가능 함수 $f_j:\mathbb R^{n_j}\to\mathbb R$ 에 대해 다음을 만족하는 가장 작은 $C$ 를 **Brascamp–Lieb 상수(Brascamp–Lieb constant)** $\mathrm{BL}(\mathbf B,\mathbf p)$ 라 하고, 그런 $C$ 가 없으면 $\infty$ 로 둔다.

$$
\int_{\mathbb R^n}\prod_{j=1}^mf_j(B_jx)^{p_j}\thinspace dx\le C\prod_{j=1}^m\Big(\int_{\mathbb R^{n_j}}f_j\Big)^{p_j}
$$

직관 절의 Loomis–Whitney 자료는 $n=3$, $B_j=\pi_j$, $n_j=2$, $p_j=1/2$ 이고 상수는 $1$ 이다. Hölder 자료는 $B_j=I$, $\sum_jp_j=1$ 이고 상수는 $1$ 이다.

# 성질

## 유한성의 판정

$\mathrm{BL}(\mathbf B,\mathbf p)\lt\infty$ 인 것은 다음 두 조건이 함께 성립하는 것과 동치다[^1].

$$
n=\sum_{j=1}^mp_jn_j,\qquad\dim V\le\sum_{j=1}^mp_j\dim(B_jV)\quad(V\subseteq\mathbb R^n\text{ 의 모든 부분공간})
$$

첫 조건은 $f_j$ 를 $f_j(\lambda\cdot)$ 로 바꾸는 척도 변환에서 양변의 $\lambda$ 의 거듭제곱이 같다는 것이다. Loomis–Whitney 자료에서 $3=3\cdot 2\cdot\frac12$ 이다. 직선 $V$ 에서는 $\dim(\pi_jV)$ 가 셋 가운데 적어도 둘에서 $1$ 이므로 우변이 $1$ 이상이고, 평면 $V$ 는 좌표축을 많아야 둘 포함하므로 $\dim(\pi_jV)$ 가 모두 $1$ 이상이고 적어도 하나에서 $2$ 여서 우변이 $2$ 이상이다.

## Lieb 정리

Brascamp–Lieb 상수는 $f_j$ 를 중심이 원점인 Gauss 함수로 제한한 상한과 같다[^2]. 이것을 Lieb 정리(Lieb's theorem)라 하고, 상수는 다음 식이다.

$$
\mathrm{BL}(\mathbf B,\mathbf p)=\sup_{A_j\succ 0}\bigg(\frac{\prod_j(\det A_j)^{p_j}}{\det\big(\sum_jp_jB_j^TA_jB_j\big)}\bigg)^{1/2}
$$

$A_j$ 는 $n_j\times n_j$ 양의 정부호 행렬이고, $f_j(y)=e^{-\pi y^TA_jy}$ 를 넣으면 양변이 Gauss 적분으로 계산되어 괄호 안의 값이 나온다. 무한 차원의 최적화가 유한 개 행렬의 최적화로 바뀐다.

## 계산

$p_j$ 가 유리수이면 Lieb 정리의 상한은 [연산자 척도화](operator-scaling.md)의 용량으로 쓰인다. A. Garg, L. Gurvits, R. Oliveira, A. Wigderson 은 이것으로 유한성을 다항시간에 판정하고 상수를 근사하는 알고리즘을 주었다[^3].

# 활용

- [Young 의 합성곱 부등식](young-convolution-inequality.md). $\int\int f(x)g(x-y)h(y)\thinspace dx\thinspace dy$ 는 $B_1(x,y)=x$, $B_2(x,y)=x-y$, $B_3(x,y)=y$ 인 자료이고, H. J. Brascamp 와 E. H. Lieb 는 이 경우의 최적 상수를 Gauss 함수로 구했다[^4].
- [Prékopa–Leindler 부등식](prekopa-leindler-inequality.md). Brascamp–Lieb 부등식의 역꼴의 특수한 경우다.
- 조화해석과 해석적 수론. 다중선형 Kakeya 부등식과 분리(decoupling) 부등식의 증명이 Brascamp–Lieb 부등식을 국소화한 판본을 쓰고, [Vinogradov 평균값 정리](vinogradov-mean-value.md)의 증명이 분리 부등식을 쓴다[^5].

[^1]: J. Bennett, A. Carbery, M. Christ, T. Tao, "The Brascamp–Lieb inequalities: finiteness, structure and extremals", Geometric and Functional Analysis 17 (2008), 1343–1415.
[^2]: E. H. Lieb, "Gaussian kernels have only Gaussian maximizers", Inventiones Mathematicae 102 (1990), 179–208.
[^3]: A. Garg, L. Gurvits, R. Oliveira, A. Wigderson, "Algorithmic and optimization aspects of Brascamp–Lieb inequalities, via operator scaling", Geometric and Functional Analysis 28 (2018), 100–145.
[^4]: H. J. Brascamp, E. H. Lieb, "Best constants in Young's inequality, its converse, and its generalization to more than three functions", Advances in Mathematics 20 (1976), 151–173.
[^5]: J. Bourgain, C. Demeter, L. Guth, "Proof of the main conjecture in Vinogradov's mean value theorem for degrees higher than three", Annals of Mathematics 184 (2016), 633–682.

# 연관 문서

## 선수지식

- [Hölder 부등식](holder-inequality.md)
- [Shearer 보조정리](shearer-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #combinatorics
