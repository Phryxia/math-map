# Weyl 고윳값 부등식

# 개요

**Weyl 고윳값 부등식(Weyl's eigenvalue inequality)** 은 대칭행렬에 작은 대칭행렬을 더했을 때 각 고윳값이 얼마나 움직이는지의 한계를 주는 부등식이다. $\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 의 왼쪽 위 성분이 측정 오차로 $0.1$ 만큼 커지면 고윳값 $3$ 과 $1$ 이 어디로 가는지 알려면 보통 고윳값을 다시 계산해야 한다. 이 부등식은 더한 행렬의 고윳값만으로 두 고윳값이 각각 $0$ 이상 $0.1$ 이하만큼 움직인다는 것을 다시 계산하지 않고 보장한다.

# 직관

$A=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 의 고윳값은 $3$ 과 $1$ 이다. 왼쪽 위 성분에 $0.1$ 을 더한 $A+E$, $E=\begin{pmatrix}0.1&0\cr 0&0\end{pmatrix}$ 의 고윳값을 직접 구하면 대각합 $4.1$, 행렬식 $3.2$ 에서 $2.05\pm\sqrt{1.0025}$, 곧 약 $3.0512$ 와 $1.0488$ 이다. 두 고윳값이 모두 올랐고 오른 양은 $0.1$ 을 넘지 않는다. 행렬이 크면 이 계산을 성분이 바뀔 때마다 할 수 없다.

[Rayleigh 몫](rayleigh-quotient.md)으로 보면 다시 계산하지 않아도 된다. 모든 $x\ne 0$ 에서 $R_{A+E}(x)=R_A(x)+R_E(x)$ 이고, $R_E(x)=0.1x_1^2/(x_1^2+x_2^2)$ 는 $0$ 과 $0.1$ 사이에 있다. 그래서 $R_{A+E}$ 의 최댓값은 $R_A$ 의 최댓값 $3$ 이상 $3.1$ 이하이고, 최솟값은 $1$ 이상 $1.1$ 이하다. 최댓값과 최솟값이 각각 가장 큰 고윳값과 가장 작은 고윳값이므로 두 고윳값의 범위가 나온다.

# 정의

## 고윳값의 번호

$n\times n$ 실대칭행렬 $A$ 의 고윳값을 중복도만큼 되풀이해 큰 것부터 늘어놓은 것을

$$
\lambda_1(A)\ge\lambda_2(A)\ge\cdots\ge\lambda_n(A)
$$

로 쓴다. [스펙트럼 정리](spectral-theorem.md)에 따라 이 목록은 실수 $n$ 개다. 직관 절에서 $\lambda_1(A)=3$, $\lambda_2(A)=1$, $\lambda_1(E)=0.1$, $\lambda_2(E)=0$ 이다.

## 섭동과 스펙트럼 노름

대칭행렬 $E$ 를 더한 $A+E$ 를 $A$ 의 **섭동(perturbation)** 이라 한다. 대칭행렬의 **스펙트럼 노름(spectral norm)** 은

$$
\Vert E\Vert\_2=\max\_k\vert\lambda_k(E)\vert=\max\lbrace\lambda_1(E),\thinspace-\lambda_n(E)\rbrace
$$

이다. 직관 절에서 $\Vert E\Vert\_2=0.1$ 이다.

# 성질

## Weyl 고윳값 부등식

$A$, $E$ 가 $n\times n$ 실대칭행렬이면 모든 $k$ 에서

$$
\lambda_k(A)+\lambda_n(E)\le\lambda_k(A+E)\le\lambda_k(A)+\lambda_1(E)
$$

이다[^1]. 직관 절에서 $k=1,2$ 모두 $\lambda_k(A)\le\lambda_k(A+E)\le\lambda_k(A)+0.1$ 이고, $3\le 3.0512\le 3.1$, $1\le 1.0488\le 1.1$ 이다.

증명의 요지. $R_{A+E}=R_A+R_E$ 이고 $\lambda_n(E)\le R_E\le\lambda_1(E)$ 이다. 이 부등식을 Rayleigh 몫의 Courant–Fischer 정리(Courant–Fischer theorem) $\lambda_k=\max\_{\dim V=k}\min\_{x\in V}R(x)$ 의 안쪽 최솟값과 바깥 최댓값에 차례로 통과시킨다.

## 노름으로 쓴 꼴

위 부등식에서 곧바로

$$
\vert\lambda_k(A+E)-\lambda_k(A)\vert\le\Vert E\Vert\_2
$$

이다. $E=\varepsilon I$ 이면 모든 고윳값이 정확히 $\varepsilon$ 만큼 움직이므로 등호가 성립하고, 상수 $1$ 은 더 줄일 수 없다.

## 단조성

$E$ 가 양의 준정부호(positive semidefinite), 곧 $\lambda_n(E)\ge 0$ 이면 모든 $k$ 에서 $\lambda_k(A+E)\ge\lambda_k(A)$ 다. 직관 절의 $E$ 가 이 경우이고 두 고윳값이 모두 올랐다.

## 일반형

$i+j-1\le n$ 이면

$$
\lambda_{i+j-1}(A+E)\le\lambda_i(A)+\lambda_j(E)
$$

이다[^1]. $j=1$ 이 위 부등식의 오른쪽이다.

증명의 요지. $A$ 의 고유벡터 $u_i,\dots,u_n$ 의 생성공간은 차원이 $n-i+1$ 이고 그 위에서 $R_A\le\lambda_i(A)$ 다. $E$ 의 고유벡터 $w_j,\dots,w_n$ 의 생성공간도 같은 방식으로 $R_E\le\lambda_j(E)$ 를 준다. 두 공간의 교집합은 차원이 $n-(i+j-1)+1$ 이상이고, 그 위에서 $R_{A+E}\le\lambda_i(A)+\lambda_j(E)$ 이므로 Courant–Fischer 정리의 최소최대 꼴이 결론을 준다.

## 계수 1 섭동

$E=vv^{\mathsf T}$ 이면 $E$ 의 고윳값은 $\Vert v\Vert^2$ 하나와 $0$ 이 $n-1$ 개다. 일반형에 $j=2$ 를 넣으면 $\lambda_{k}(A+E)\le\lambda_{k-1}(A)$ 이고, 단조성과 합치면

$$
\lambda_1(A+E)\ge\lambda_1(A)\ge\lambda_2(A+E)\ge\lambda_2(A)\ge\cdots\ge\lambda_n(A+E)\ge\lambda_n(A)
$$

이다. 두 목록이 하나씩 엇갈려 놓인다. 행과 열을 지울 때의 [Cauchy 끼움 정리](cauchy-interlacing.md)와 같은 꼴이다. 직관 절의 $E$ 는 $v=(\sqrt{0.1},0)$ 인 계수 1 섭동이고 $3.0512\ge 3\ge 1.0488\ge 1$ 이다.

## Hoffman–Wielandt 부등식

고윳값 이동의 제곱합은 Frobenius 노름(Frobenius norm) $\Vert E\Vert\_F^2=\sum_{i,j}e_{ij}^2$ 로 잡힌다. 이것이 **Hoffman–Wielandt 부등식(Hoffman–Wielandt inequality)** 이다[^2].

$$
\sum_{k=1}^{n}\bigl(\lambda_k(A+E)-\lambda_k(A)\bigr)^2\le\Vert E\Vert\_F^2
$$

직관 절에서 왼쪽은 $0.0512^2+0.0488^2\approx 0.0050$ 이고 오른쪽은 $0.01$ 이다. Weyl 고윳값 부등식은 이동 하나하나를, 이 부등식은 이동 전체를 잰다.

## 특이값의 Weyl 부등식

임의의 $m\times n$ 실행렬 $A$, $E$ 에 대해 [특이값](singular-value-decomposition.md)은

$$
\vert\sigma_k(A+E)-\sigma_k(A)\vert\le\Vert E\Vert\_2
$$

를 만족한다. 대칭행렬 $\begin{pmatrix}0&A\cr A^{\mathsf T}&0\end{pmatrix}$ 의 고윳값이 $\pm\sigma_k(A)$ 와 $0$ 들이므로 고윳값의 부등식에서 나온다.

## 대칭이 아닌 행렬

대칭이 아니면 이 부등식이 성립하지 않는다. $N=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 의 고윳값은 $0,0$ 이고, $E=\begin{pmatrix}0&0\cr\varepsilon&0\end{pmatrix}$ 을 더한 $N+E$ 의 고윳값은 $\pm\sqrt\varepsilon$ 이다. $\Vert E\Vert\_2=\varepsilon$ 인데 고윳값은 $\sqrt\varepsilon$ 만큼 움직이고, $\varepsilon=0.01$ 이면 $0.1$ 이다.

## Horn 문제

$A$, $E$, $A+E$ 의 고윳값 목록으로 나올 수 있는 세 목록 전체를 정하는 문제를 Horn 문제(Horn's problem)라 한다. 답은 Weyl 고윳값 부등식의 일반형을 포함하는 선형 부등식들의 목록이고, Horn 이 1962 년에 추측한 그 목록이 정확히 답이라는 것이 Klyachko(1998)와 Knutson–Tao(1999)의 결과로 증명되었다[^3].

# 활용

- 대칭행렬 고윳값 계산의 정확도. [QR 알고리즘](qr-algorithm.md)이 계산한 고윳값은 $\Vert\delta A\Vert\_2\le C u\Vert A\Vert\_2$ 인 $A+\delta A$ 의 정확한 고윳값이다. 노름으로 쓴 꼴에 따라 각 고윳값의 오차는 $Cu\Vert A\Vert\_2$ 이하이고, $u$ 는 기계 정밀도(machine precision)다.
- [주성분 분석](principal-component-analysis.md). 표본 공분산행렬 $S$ 의 고윳값과 모공분산행렬 $\Sigma$ 의 고윳값의 차가 $\Vert S-\Sigma\Vert\_2$ 이하이므로, $S$ 가 $\Sigma$ 에 노름으로 수렴하면 주성분의 분산도 수렴한다.
- [Laplacian 행렬](graph-laplacian.md). 간선 $ij$ 하나를 더하면 $L$ 에 계수 1 행렬 $(e_i-e_j)(e_i-e_j)^{\mathsf T}$ 가 더해지고, 그 고윳값은 $2$ 와 $0$ 이다. 그래서 Laplacian 고윳값은 줄지 않고 각각 $2$ 이하만큼 늘며, 계수 1 섭동의 엇갈림을 만족한다.
- 인접행렬. 간선 하나를 더하면 고윳값이 $1$, $-1$, $0$ 들인 행렬이 더해지므로 인접행렬의 각 고윳값은 $1$ 이하만큼 움직인다.

[^1]: H. Weyl, "Das asymptotische Verteilungsgesetz der Eigenwerte linearer partieller Differentialgleichungen", *Mathematische Annalen* 71 (1912), 441–479. 교과서 서술은 Roger A. Horn and Charles R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press (2013), 4.3 절.

[^2]: A. J. Hoffman and H. W. Wielandt, "The variation of the spectrum of a normal matrix", *Duke Mathematical Journal* 20 (1953), 37–39.

[^3]: A. Knutson and T. Tao, "The honeycomb model of GLₙ(ℂ) tensor products I: Proof of the saturation conjecture", *Journal of the American Mathematical Society* 12 (1999), 1055–1090. A. A. Klyachko, "Stable bundles, representation theory and Hermitian operators", *Selecta Mathematica* 4 (1998), 419–445.

# 연관 문서

## 선수지식

- [Rayleigh 몫](rayleigh-quotient.md)

## 더 알아보기

- [Davis–Kahan sin θ 정리](davis-kahan-theorem.md)

#linear_algebra #analysis #graph_theory #statistics
