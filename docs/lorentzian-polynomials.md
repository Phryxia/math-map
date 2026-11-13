# Lorentzian 다항식

# 개요

**Lorentzian 다항식(Lorentzian polynomial)** 은 계수가 음이 아니고, 변수로 거듭 미분해 얻은 2차식이 모두 양의 고윳값을 많아야 하나 갖는 동차다항식이다. 완전그래프 $K_4$ 의 간선 여섯 개에서 순환이 없는 간선 $k$ 개를 고르는 방법의 수는 $k=0,1,2,3$ 에 대해 $1,6,15,16$ 이고, 이런 수열은 가운데 항의 제곱이 양 옆 항의 곱 이상이라는 부등식을 만족하는지가 물음이 된다. 수열을 계수로 갖는 다항식이 Lorentzian 이면 이 부등식이 2차식의 행렬식 계산으로 증명된다.

# 직관

$K_4$ 의 수열 $1,6,15,16$ 에서 $6^2=36\ge 1\cdot 15$, $15^2=225\ge 6\cdot 16$ 이다. 모든 그래프, 나아가 모든 [matroid](matroids.md)에서 독립집합의 개수가 이런 부등식을 만족하는지를 세어서 확인할 수는 없다.

수열 $c_0,\dots,c_d$ 를 두 변수 다항식 $g(x,y)=\sum_k c_kx^ky^{d-k}$ 의 계수로 둔다. $g$ 를 $x$ 로 $k-1$ 번, $y$ 로 $d-k-1$ 번 미분하면 $c\_{k-1},c_k,c\_{k+1}$ 이 든 항만 남아 2차식 $Ax^2+Bxy+Cy^2$ 이 된다. 이 2차식의 대칭행렬이 양의 고윳값을 많아야 하나 가지면 행렬식이 $0$ 이하이므로 $B^2\ge 4AC$ 이고, 계수를 풀어 쓰면 $c_k^2\ge c\_{k-1}c\_{k+1}$ 보다 강한 부등식이 나온다.

그러므로 물음은 미분해서 얻은 2차식들의 고윳값 부호로 옮겨 간다. [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)이 혼합부피의 2차형식에 대해 증명한 것도 같은 부호 조건이다.

# 정의

$f\in\mathbb R\lbrack x_1,\dots,x_n\rbrack$ 를 차수 $d$ 인 동차다항식이라 하고, $f=\sum_\alpha c_\alpha x^\alpha$ 로 쓴다. $c_\alpha\ne 0$ 인 $\alpha\in\mathbb Z\_{\ge 0}^n$ 의 집합을 지지집합(support)이라 한다.

$J\subseteq\mathbb Z\_{\ge 0}^n$ 가 다음 교환 조건을 만족하면 **M-볼록(M-convex)** 이라 한다. $\alpha,\beta\in J$ 와 $\alpha_i\gt\beta_i$ 인 $i$ 마다 $\alpha_j\lt\beta_j$ 이고 $\alpha-e_i+e_j\in J$ 인 $j$ 가 있다. 0 과 1 로만 된 벡터의 집합이 M-볼록인 것은 matroid 의 기저 전체의 지시벡터인 것과 같다.

$f$ 가 다음 셋을 만족하면 Lorentzian 다항식이라 한다.[^1]

1. 모든 계수가 음이 아니다.
2. 지지집합이 M-볼록이다.
3. $\alpha_1+\dots+\alpha_n=d-2$ 인 모든 $\alpha$ 에 대해 2차식 $\partial^\alpha f=\partial_1^{\alpha_1}\cdots\partial_n^{\alpha_n}f$ 의 Hesse 행렬이 양의 고윳값을 많아야 하나 갖는다.

$d\le 1$ 이면 셋째 조건이 비어 있다. 직관 절의 2차식 $Ax^2+Bxy+Cy^2$ 은 Hesse 행렬이 $\begin{pmatrix}2A&B\cr B&2C\end{pmatrix}$ 이고, $A,C\ge 0$, $B\gt 0$ 이면 $B^2\ge 4AC$ 일 때 Lorentzian 이다.

# 성질

## 두 변수의 경우

정리. 계수가 음이 아닌 $g(x,y)=\sum\_{k=0}^d c_kx^ky^{d-k}$ 가 Lorentzian 인 것은 $a_k=c_k/\binom dk$ 가 사이에 $0$ 이 끼지 않고 다음을 만족하는 것과 동치다.[^1]

$$
a_k^2\ge a\_{k-1}a\_{k+1}\qquad(1\le k\le d-1)
$$

이 성질을 초 로그 오목(ultra log-concave)이라 한다.

증명의 요지. $\partial_x^{k-1}\partial_y^{d-k-1}g$ 의 계수는 다음과 같다.

$$
\begin{aligned}
A&=\frac{(k+1)!\thinspace(d-k-1)!}{2}\thinspace c\_{k+1}\cr
B&=k!\thinspace(d-k)!\thinspace c_k\cr
C&=\frac{(k-1)!\thinspace(d-k+1)!}{2}\thinspace c\_{k-1}
\end{aligned}
$$

$B^2\ge 4AC$ 를 정리하면 다음이 나온다.

$$
c_k^2\ge\frac{(k+1)(d-k+1)}{k(d-k)}\thinspace c\_{k-1}c\_{k+1}
$$

이항계수의 비 $\binom dk^2/\bigl(\binom d{k-1}\binom d{k+1}\bigr)$ 가 이 분수와 같으므로 $a_k$ 의 로그 오목성과 같다.

## 닫힘 성질

Lorentzian 다항식은 다음 연산에 닫혀 있다.[^1]

- 한 변수로 미분하기.
- 성분이 음이 아닌 행렬 $M$ 으로 변수를 바꾸어 $f(Mx)$ 로 만들기. 변수 몇 개에 같은 변수를 넣는 것이 특수한 경우다.
- 두 Lorentzian 다항식을 곱하기.

## Lorentzian 다항식의 예

- 계수가 음이 아닌 동차 [실안정 다항식](real-stable-polynomials.md)은 Lorentzian 이다.[^1]
- 볼록체 $K_1,\dots,K_n$ 의 부피 다항식 $\mathrm{vol}(t_1K_1+\dots+t_nK_n)$ 은 Lorentzian 이다. 셋째 조건의 2차식은 혼합부피 $V(K_i,K_j,\dots)$ 를 계수로 갖고, Alexandrov–Fenchel 부등식이 그 부호 조건을 준다.[^1]
- matroid 의 기저마다 그 원소 변수들의 곱을 더한 기저 생성다항식은 Lorentzian 이다.[^1][^2]
- 원소가 $m$ 개인 matroid 에 대해 독립집합 $I$ 마다 $x_0^{m-\lvert I\rvert}\prod\_{i\in I}x_i$ 를 더한 다항식은 Lorentzian 이다.[^1]

## 양의 사분면에서의 로그 오목성

계수가 음이 아닌 동차다항식 $f$ 에 대해 다음 둘은 동치다. $f$ 가 Lorentzian 이다. 모든 $\alpha$ 에 대해 $\partial^\alpha f$ 가 $0$ 이거나, 좌표가 모두 양수인 영역에서 $\log\partial^\alpha f$ 가 오목함수다.[^1][^2] 뒤의 성질을 완전 로그 오목(completely log-concave)이라 한다.

# 활용

- Mason 추측(Mason's conjecture). 원소가 $m$ 개인 matroid 의 크기 $k$ 인 독립집합의 개수 $I_k$ 는 $I_k/\binom mk$ 가 로그 오목이다. 독립집합마다 $x_0^{m-\lvert I\rvert}\prod\_{i\in I}x_i$ 를 더한 다항식에서 $x_1=\dots=x_m=y$ 로 놓으면 두 변수 다항식 $\sum_kI_kx_0^{m-k}y^k$ 가 되고, 닫힘 성질로 Lorentzian 이므로 두 변수의 경우에서 결론이 나온다. Brändén 과 Huh, 그리고 Anari, Liu, Oveis Gharan, Vinzant 가 따로 증명했다.[^1][^3] 직관 절의 $K_4$ 에서 $m=6$ 이고 $k=1$ 에서 $36\ge 2\cdot\frac65\cdot 15=36$ 으로 등호가 성립한다.
- 기저의 근사 계수. Anari, Liu, Oveis Gharan, Vinzant 는 기저 생성다항식의 완전 로그 오목성으로 기저 교환 [Markov 연쇄](markov-chains.md)가 빨리 섞임을 보이고, matroid 의 기저 개수를 근사하는 무작위 다항시간 알고리즘을 얻었다.[^2]
- Alexandrov–Fenchel 부등식. 부피 다항식이 Lorentzian 이라는 진술이 부등식을 다시 적은 것이고, 두 변수의 경우를 적용하면 혼합부피 수열의 로그 오목성이 나온다.

[^1]: Petter Brändén and June Huh, "Lorentzian polynomials", Annals of Mathematics 192 (2020), 821–891.
[^2]: Nima Anari, Kuikui Liu, Shayan Oveis Gharan and Cynthia Vinzant, "Log-concave polynomials II: high-dimensional walks and an FPRAS for counting bases of a matroid", Proceedings of the 51st Annual Symposium on Theory of Computing (2019), 1–12.
[^3]: Nima Anari, Kuikui Liu, Shayan Oveis Gharan and Cynthia Vinzant, "Log-concave polynomials III: Mason's ultra-log-concavity conjecture for independent sets of matroids", arXiv preprint, 2018.

# 연관 문서

## 선수지식

- [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)
- [실안정 다항식](real-stable-polynomials.md)
- [Matroid](matroids.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algebra #analysis
