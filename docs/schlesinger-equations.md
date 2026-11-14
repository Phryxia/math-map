# Schlesinger 방정식

# 개요

**Schlesinger 방정식(Schlesinger equations)** 은 선형 미분방정식계의 특이점을 움직일 때 해가 특이점 둘레에서 바뀌는 방식이 그대로 남도록 계수 [행렬](matrices.md)을 움직이는 규칙이다. 특이점이 $0,1,2$ 인 행렬 계수의 계에서 $2$ 를 $2.1$ 로 옮기면, 계수를 그대로 두었을 때 해를 한 바퀴 돌린 결과가 달라질 수 있다. 이 방정식은 계수 행렬이 특이점 위치에 따라 어떻게 바뀌어야 그 결과가 달라지지 않는지를 미분방정식으로 적는다.

# 직관

특이점이 $a_1,a_2$ 인 방정식 $y'=\bigl(\tfrac{\alpha_1}{x-a_1}+\tfrac{\alpha_2}{x-a_2}\bigr)y$ 의 해는 $y=(x-a_1)^{\alpha_1}(x-a_2)^{\alpha_2}$ 다. $a_1$ 만 한 바퀴 도는 고리를 따라 해를 이어 가면 첫 인수만 바뀌어 해가 $e^{2\pi i\alpha_1}$ 배가 된다. 이 배수는 $a_1,a_2$ 의 위치와 상관없으므로, $\alpha_1,\alpha_2$ 를 고정한 채 특이점을 움직여도 해가 바뀌는 방식은 그대로다.

미지함수가 벡터이고 $\alpha_i$ 가 행렬 $A_i$ 이면 이 계산이 막힌다. $(x-a_1)^{A_1}(x-a_2)^{A_2}$ 는 $A_1A_2\ne A_2A_1$ 이면 해가 아니다. 곱을 미분하면 $(x-a_1)^{A_1}A_2(x-a_2)^{A_2-1}$ 항이 나오는데, $A_2$ 가 $(x-a_1)^{A_1}$ 과 교환하지 않아 이 항을 $A_2(x-a_2)^{-1}Y$ 로 쓸 수 없다.

해를 식으로 쓰지 못하니, 해 $Y(x,a)$ 가 특이점 위치 $a$ 에 대해서도 미분방정식을 만족한다고 놓고 그 방정식을 찾는다. $x$ 에 대한 방정식과 $a$ 에 대한 방정식이 동시에 풀리려면 두 방향의 미분을 바꾸어도 결과가 같아야 한다. 이 조건을 계산하면 $A_iA_j-A_jA_i$ 꼴의 항이 남고, 그 항이 $A_i$ 가 움직여야 하는 속도가 된다. 1차원에서는 이 항이 $0$ 이어서 $\alpha_i$ 가 움직이지 않았다.

# 정의

## 등모노드로미 변형

서로 다른 점 $a=(a_1,\dots,a_m)$ 에 대해 [Riemann–Hilbert 대응](riemann-hilbert-correspondence.md)의 Fuchs 형 계를 생각한다.

$$
\frac{\partial Y}{\partial x}=\sum_{i=1}^m\frac{A_i(a)}{x-a_i}Y
$$

$A_i(a)$ 는 $a$ 에 정칙으로 의존하는 $n\times n$ 행렬이고, 무한원점이 특이점이 아니도록 $\sum_i A_i=0$ 이라 한다. $a$ 를 움직일 때 기본해 행렬 $Y(x,a)$ 를 적당히 골라 모노드로미 행렬들이 $a$ 에 의존하지 않게 할 수 있으면, 이 족을 **등모노드로미 변형(isomonodromic deformation)** 이라 한다. 직관 절의 1차원 방정식은 $\alpha_1,\alpha_2$ 를 고정하면 등모노드로미 변형이다.

## Schlesinger 방정식

$A_i(a)$ 들에 대한 다음 연립 편미분방정식을 **Schlesinger 방정식** 이라 한다.

$$
\begin{aligned}
\frac{\partial A_i}{\partial a_j}&=\frac{\lbrack A_i,A_j\rbrack}{a_i-a_j}\qquad(i\ne j)\cr
\frac{\partial A_i}{\partial a_i}&=-\sum_{j\ne i}\frac{\lbrack A_i,A_j\rbrack}{a_i-a_j}
\end{aligned}
$$

$\lbrack A_i,A_j\rbrack=A_iA_j-A_jA_i$ 는 교환자다. 1차원에서는 모든 교환자가 $0$ 이므로 $A_i$ 가 상수이고, 직관 절의 결론과 같다.

# 성질

## Schlesinger 정리

$A_i(a)$ 가 Schlesinger 방정식을 만족하면 족은 등모노드로미 변형이다. 거꾸로 각 $A_i$ 의 두 [고윳값](eigenvalues.md)의 차가 정수가 아닌 등모노드로미 변형은 Schlesinger 방정식을 만족한다[^1].

증명의 요지. 기본해 행렬이 $a_j$ 에 대해 다음을 만족한다고 놓는다.

$$
\frac{\partial Y}{\partial a_j}=-\frac{A_j}{x-a_j}Y
$$

$A=\sum_iA_i/(x-a_i)$, $B_j=-A_j/(x-a_j)$ 라 하면 두 방정식이 동시에 풀릴 조건은 다음이다.

$$
\frac{\partial A}{\partial a_j}-\frac{\partial B_j}{\partial x}+\lbrack A,B_j\rbrack=0
$$

$\lbrack A,B_j\rbrack$ 의 항 $1/((x-a_i)(x-a_j))$ 를 부분분수로 나누고 $1/(x-a_i)$ 와 $1/(x-a_j)$ 의 계수를 비교하면 Schlesinger 방정식이 나온다. 이 조건 아래 $Y$ 는 $x$ 와 $a$ 에 대해 함께 정의된다. 고리 $\gamma$ 를 따라 연속한 해 $YM_\gamma$ 도 같은 $a_j$ 방정식을 만족하므로 $\partial M_\gamma/\partial a_j=0$ 이다.

## 보존량

Schlesinger 방정식에서 다음이 따라 나온다.

- $\sum_iA_i$ 는 $a$ 에 의존하지 않는다. 각 $a_j$ 에 대한 미분을 $i$ 에 대해 더하면 교환자 항이 서로 지워진다.
- 각 $A_i$ 의 고윳값은 $a$ 에 의존하지 않는다. $\partial A_i/\partial a_j$ 가 $\lbrack A_i,X\rbrack$ 꼴이므로 $\mathrm{tr}\thinspace A_i^k$ 의 미분이 $\mathrm{tr}\thinspace\lbrack A_i^k,X\rbrack=0$ 이다.

## Hamilton 구조와 tau 함수

다음 함수를 정의한다.

$$
H_j=\sum_{i\ne j}\frac{\mathrm{tr}(A_iA_j)}{a_j-a_i}
$$

Schlesinger 방정식은 행렬 $A_i$ 들 위의 Lie–Poisson 괄호(Lie–Poisson bracket)에 대해 $H_j$ 를 Hamilton 함수로 하는 [Hamilton 역학](hamiltonian-mechanics.md)의 방정식으로 쓰인다. [미분형식](differential-forms.md) $\sum_jH_j\thinspace da_j$ 는 닫혀 있어서 $d\log\tau=\sum_jH_j\thinspace da_j$ 인 함수 $\tau(a)$ 가 정해지고, 이것을 tau 함수(tau function)라 한다[^2].

Malgrange 와 Miwa 는 Schlesinger 방정식의 해가 $a_i=a_j$ 인 초평면들 밖에서 $a$ 에 대해 유리형이고, tau 함수가 그 밖에서 정칙임을 보였다[^3]. 해의 극점은 초기값에 따라 움직이지만 가지점은 대각에만 있다.

## Painlevé VI

$n=2$ 이고 특이점이 $0,t,1$ 과 무한원점 넷이면 Möbius 변환으로 세 점을 고정해 남는 변수는 $t$ 하나다. 고윳값을 고정하고 켤레를 빼면 자유도가 두 개 남는다. 그 가운데 하나를 $y(t)$ 로 두면 다른 하나는 $y'$ 으로 정해지고, Schlesinger 방정식은 [Painlevé 방정식](painleve-equations.md)의 여섯째 꼴 $\mathrm P\_{\mathrm{VI}}$ 하나로 줄어든다. R. Fuchs 가 1905 년에 이 방법으로 $\mathrm P\_{\mathrm{VI}}$ 를 얻었다[^4].

# 활용

- Painlevé 방정식. 여섯 Painlevé 방정식은 모두 등모노드로미 변형으로 얻어진다. $\mathrm P\_{\mathrm{VI}}$ 는 위의 Fuchs 형 계에서, 나머지 다섯은 비정칙 특이점을 가진 계의 변형에서 나온다.
- 무작위 행렬의 간격 분포. 사인 핵의 [Fredholm 행렬식](fredholm-determinant.md)은 구간 끝점을 특이점으로 하는 등모노드로미 변형의 tau 함수다. Jimbo, Miwa, Môri, Sato 는 이것으로 고윳값 간격 분포를 $\mathrm P\_{\mathrm V}$ 로 적었다[^2].
- 해의 매개변수. Schlesinger 방정식의 해 하나는 Riemann–Hilbert 대응으로 국소 모노드로미의 [켤레류](conjugacy-classes.md)를 고정한 표현의 켤레류 하나에 대응한다. 해를 고르는 것은 그런 표현을 고르는 것과 같다.

[^1]: L. Schlesinger, "Über eine Klasse von Differentialsystemen beliebiger Ordnung mit festen kritischen Punkten", Journal für die reine und angewandte Mathematik **141** (1912), 96–145.
[^2]: M. Jimbo, T. Miwa, K. Ueno, "Monodromy preserving deformation of linear ordinary differential equations with rational coefficients. I", Physica D **2** (1981), 306–352. 간격 분포는 M. Jimbo, T. Miwa, Y. Môri, M. Sato, "Density matrix of an impenetrable Bose gas and the fifth Painlevé transcendent", Physica D **1** (1980), 80–158.
[^3]: B. Malgrange, "Sur les déformations isomonodromiques. I. Singularités régulières", Mathématique et Physique, Progress in Mathematics **37**, Birkhäuser (1983), 401–426. T. Miwa, "Painlevé property of monodromy preserving deformation equations and the analyticity of τ functions", Publications of the Research Institute for Mathematical Sciences **17** (1981), 703–721.
[^4]: R. Fuchs, "Sur quelques équations différentielles linéaires du second ordre", Comptes Rendus de l'Académie des Sciences **141** (1905), 555–558.

# 연관 문서

## 선수지식

- [Riemann–Hilbert 대응](riemann-hilbert-correspondence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #differential_geometry #analysis
