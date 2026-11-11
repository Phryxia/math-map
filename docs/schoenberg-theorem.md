# Schoenberg 정리

# 개요

**Schoenberg 정리(Schoenberg's theorem)** 는 두 점 사이의 거리만으로 정한 함수가 모든 차원에서 양의 준정부호 핵인 것을, 거리에 걸린 함수 하나의 도함수 부호로 판정하는 정리다. 핵 방법이나 [Gauss 과정](gaussian-processes.md)에서 $e^{-\Vert x-y\Vert^2}$ 같은 함수를 핵으로 쓰려면, 점을 몇 개 어디에 놓든 Gram 행렬의 고윳값이 음수가 되지 않아야 한다. 이것을 점의 배치마다 확인할 수는 없다.

이 정리는 핵 $f(\Vert x-y\Vert^2)$ 의 조건을 $f$ 가 [완전 단조 함수](completely-monotone-functions.md)라는 조건으로 바꾸어, 한 변수 함수의 미분으로 확인하게 한다.

# 직관

$f(t)=1-t$ 로 두고 핵 $k(x,y)=1-\Vert x-y\Vert^2$ 를 본다. 거리가 $d$ 인 두 점의 Gram 행렬은 다음과 같다.

$$
\begin{pmatrix}1&1-d^2\cr 1-d^2&1\end{pmatrix}
$$

행렬식은 $1-(1-d^2)^2$ 이고 $d^2=3$ 이면 $1-4=-3$ 이다. 고윳값 하나가 음수이므로 이 핵은 양의 준정부호가 아니다. 두 점이 가까울 때는 문제가 없다가 멀리 놓으면 깨진다.

$f(t)=e^{-t}$ 이면 Gram 행렬의 비대각 성분은 $e^{-d^2}$ 이고, 두 점에서는 행렬식 $1-e^{-2d^2}$ 이 언제나 양수다. 점이 셋, 넷으로 늘어도 깨지지 않는다는 것이 Schoenberg 정리의 내용이다. $1-t$ 는 $t\gt 1$ 에서 음수가 되어 완전 단조 함수의 부호 조건을 어기고, $e^{-t}$ 는 모든 차수에서 부호 조건을 만족한다.

# 정의

함수 $k:\mathbb R^d\times\mathbb R^d\to\mathbb R$ 이 대칭이고 모든 점 $x_1,\dots,x_m$ 과 실수 $c_1,\dots,c_m$ 에서 다음을 만족하면 $k$ 를 [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)의 **양의 준정부호 핵(positive semidefinite kernel)** 이라 한다.

$$
\sum_{i,j}c_ic_jk(x_i,x_j)\ge 0
$$

$\lbrack 0,\infty)$ 위의 함수 $f$ 로 $k(x,y)=f(\Vert x-y\Vert^2)$ 꼴로 적히는 핵을 **방사 핵(radial kernel)** 이라 한다. 직관 절의 $1-\Vert x-y\Vert^2$ 과 $e^{-\Vert x-y\Vert^2}$ 은 방사 핵이고, 앞의 것은 $\mathbb R^1$ 에서 이미 양의 준정부호가 아니다.

# 성질

## Schoenberg 정리

*정리.* $f$ 가 $\lbrack 0,\infty)$ 에서 연속일 때 다음 셋은 동치다[^1].

1. 모든 $d$ 에서 $f(\Vert x-y\Vert^2)$ 이 $\mathbb R^d$ 위의 양의 준정부호 핵이다.
2. $f$ 는 $(0,\infty)$ 에서 완전 단조다.
3. $\lbrack 0,\infty)$ 위의 유한한 음이 아닌 측도 $\mu$ 가 있어 $f(t)=\int e^{-st}\thinspace d\mu(s)$ 다.

*증명의 요지.* 2 와 3 의 동치는 [완전 단조 함수](completely-monotone-functions.md)의 Bernstein 정리다. 3 에서 1 은 Gauss 핵 $e^{-s\Vert x-y\Vert^2}$ 이 양의 준정부호이고 양의 준정부호 핵의 음이 아닌 혼합도 양의 준정부호라는 데서 나온다. 1 에서 3 은 [특성함수](characteristic-functions.md)의 Bochner 정리로 $f(\Vert x\Vert^2)$ 을 $\mathbb R^d$ 위의 회전 불변 측도의 [Fourier 변환](fourier-transform.md)으로 쓰고, $d\to\infty$ 에서 구면 위 균등분포의 한 좌표가 정규분포에 가까워지는 것을 써서 Gauss 함수의 혼합을 얻는다. ∎

## 차원을 고정한 판

$\mathbb R^d$ 하나에서만 양의 준정부호이기를 요구하면 조건이 약해진다. $\mathbb R^1$ 에서 $f(t)=\max(1-\sqrt t,0)$ 로 정한 핵 $\max(1-\vert x-y\vert,0)$ 은 양의 준정부호이지만, 이 $f$ 는 $t=1$ 에서 미분가능하지 않으므로 완전 단조가 아니다. 그 핵은 구간 $\lbrack -1/2,1/2\rbrack$ 의 지시함수와 자기 자신의 합성곱이므로 Fourier 변환이 $\sin^2$ 꼴로 음이 아니다.

## 거리 공간의 매장

Schoenberg 는 거리 공간 $(X,\rho)$ 가 [Hilbert 공간](hilbert-spaces.md)에 거리를 보존하며 매장되는 것과, 모든 $\lambda\gt 0$ 에서 $e^{-\lambda\rho(x,y)^2}$ 이 양의 준정부호 핵인 것이 동치라는 것도 증명했다[^2].

# 활용

- [핵 능형회귀](kernel-ridge-regression.md)와 Gauss 과정에서 방사 핵 $e^{-\Vert x-y\Vert^2}$ 과 $e^{-\Vert x-y\Vert}$ 가 쓰인다. 뒤의 것은 $e^{-\sqrt t}$ 가 완전 단조이므로 이 정리로 모든 차원에서 양의 준정부호다.
- [구 채우기](sphere-packing.md)의 보편 최적성에서 위치 에너지를 Gauss 함수의 혼합으로 쓰는 것이 이 정리의 3 번 꼴이다.

[^1]: I. J. Schoenberg, "Metric spaces and completely monotone functions", *Annals of Mathematics* 39 (1938) 811–841.
[^2]: I. J. Schoenberg, "Metric spaces and positive definite functions", *Transactions of the American Mathematical Society* 44 (1938) 522–536.

# 연관 문서

## 선수지식

- [완전 단조 함수](completely-monotone-functions.md)
- [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #machine_learning #probability
