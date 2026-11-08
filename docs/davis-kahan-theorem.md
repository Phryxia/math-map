# Davis–Kahan sin θ 정리

# 개요

**Davis–Kahan sin θ 정리(Davis–Kahan sin θ theorem)** 는 대칭행렬에 작은 대칭행렬을 더했을 때 고유벡터가 기우는 각의 사인이 섭동의 크기를 고윳값 간격으로 나눈 값 이하라는 정리다. $\begin{pmatrix}3&0\cr 0&1\end{pmatrix}$ 의 가장 큰 고윳값의 고유벡터는 $x$ 축 방향인데, 대각 밖에 $0.1$ 을 더하면 그 방향이 조금 기운다. 이 정리는 고유벡터를 다시 계산하지 않고 더한 행렬의 크기 $0.1$ 과 간격 약 $2$ 만으로 기운 각의 사인이 약 $0.05$ 이하라는 것을 준다.

# 직관

$A=\begin{pmatrix}3&0\cr 0&1\end{pmatrix}$ 의 고윳값 $3$ 의 고유벡터는 $v=(1,0)$ 이다. $E=\begin{pmatrix}0&0.1\cr 0.1&0\end{pmatrix}$ 을 더한 $\hat A=A+E$ 의 고윳값은 $2\pm\sqrt{1.01}$, 곧 약 $3.0050$ 과 $0.9950$ 이다. 가장 큰 고윳값의 고유벡터를 $(\cos\theta,\sin\theta)$ 로 쓰면 $\tan 2\theta=2\cdot 0.1/(3-1)=0.1$ 이므로 $\theta\approx 0.0498$ 이다. [Weyl 고윳값 부등식](weyl-eigenvalue-inequality.md)은 고윳값이 $0.1$ 이하만큼 움직인다는 것만 주고 고유벡터의 방향은 말하지 않는다.

$\hat A$ 의 둘째 고유벡터 $\hat w$ 와 $v$ 의 내적이 $\sin\theta$ 다. $\hat A v-Av=Ev$ 의 양변에 $\hat w$ 를 내적하면, 왼쪽은 $\hat w^{\mathsf T}\hat Av-\hat w^{\mathsf T}Av=(0.9950-3)\thinspace\hat w^{\mathsf T}v$ 이고 오른쪽은 $\hat w^{\mathsf T}Ev$ 다. 그래서 $\sin\theta\le\vert Ev\vert/(3-0.9950)=0.1/2.0050\approx 0.0499$ 이다. 실제 값 $\sin\theta\approx 0.0498$ 과 거의 같다.

분모는 $v$ 의 고윳값 $3$ 과 $\hat A$ 의 나머지 고윳값의 간격이다. $A=I$ 이면 간격이 $0$ 이고, 같은 $E$ 를 더한 $I+E$ 의 고유벡터는 $(1,\pm 1)/\sqrt2$ 이다. $E$ 가 아무리 작아도 고유벡터가 $45°$ 기운다.

# 정의

## 두 부분공간 사이의 각

$U$, $\hat U$ 가 열이 정규직교인 $n\times k$ 행렬이면 $U^{\mathsf T}\hat U$ 의 [특이값](singular-value-decomposition.md) $\cos\theta_1,\dots,\cos\theta_k$ 로 정한 $0\le\theta_i\le\pi/2$ 를 두 열공간 사이의 **주각(principal angles)** 이라 한다. 그 사인을 대각에 놓은 행렬을 $\sin\Theta(U,\hat U)$ 로 쓴다. $\hat U\_\perp$ 를 $\hat U$ 의 열공간의 직교여공간의 정규직교기저로 두면

$$
\Vert\sin\Theta(U,\hat U)\Vert\_2=\Vert\hat U\_\perp^{\mathsf T}U\Vert\_2
$$

이다. $k=1$ 이면 두 단위벡터 사이의 각 $\theta$ 하나이고, 직관 절에서 $\vert\hat w^{\mathsf T}v\vert=\sin\theta$ 가 이 식이다.

## 고윳값 간격

대칭행렬 $A$ 의 고윳값을 $\lambda_1\ge\cdots\ge\lambda_n$ 으로 쓸 때 $\lambda_k-\lambda_{k+1}$ 을 $k$ 번째 **고윳값 간격(eigengap)** 이라 한다. 직관 절의 $A$ 에서 첫 간격은 $2$, $I$ 에서는 $0$ 이다.

# 성질

## 벡터 하나의 sin θ 정리

$A$, $\hat A=A+E$ 가 실대칭행렬이고 $Av=\lambda_1v$, $\vert v\vert=1$ 이라 하자. $\hat A$ 의 가장 큰 고윳값의 단위 고유벡터를 $\hat v$, $\theta$ 를 $v$ 와 $\hat v$ 사이의 각이라 하고, $\delta=\lambda_1(A)-\lambda_2(\hat A)\gt 0$ 이면

$$
\sin\theta\le\frac{\vert Ev\vert}{\delta}\le\frac{\Vert E\Vert\_2}{\delta}
$$

이다[^1]. 직관 절에서 $\delta=2.0050$, $\vert Ev\vert=0.1$ 이다.

증명의 요지. $\hat A$ 의 나머지 고유벡터를 열로 갖는 $\hat V\_\perp$ 와 그 고윳값의 대각행렬 $\hat\Lambda\_\perp$ 에서 $\hat V\_\perp^{\mathsf T}(\hat A-A)v=(\hat\Lambda\_\perp-\lambda_1I)\hat V\_\perp^{\mathsf T}v$ 이다. 오른쪽 대각행렬의 성분은 절댓값이 $\delta$ 이상이므로 $\delta\thinspace\vert\hat V\_\perp^{\mathsf T}v\vert\le\vert\hat V\_\perp^{\mathsf T}Ev\vert\le\vert Ev\vert$ 이고, $\vert\hat V\_\perp^{\mathsf T}v\vert=\sin\theta$ 다.

## 간격을 원래 행렬로 쓴 꼴

Weyl 고윳값 부등식에 따라 $\lambda_2(\hat A)\le\lambda_2(A)+\Vert E\Vert\_2$ 이다. 그래서 $\Vert E\Vert\_2\le(\lambda_1-\lambda_2)/2$ 이면 $\delta\ge(\lambda_1-\lambda_2)/2$ 이고, 그렇지 않으면 오른쪽이 $1$ 보다 커지므로 언제나

$$
\sin\theta\le\frac{2\Vert E\Vert\_2}{\lambda_1(A)-\lambda_2(A)}
$$

이다[^2]. 이 꼴은 $\hat A$ 의 고윳값을 몰라도 쓸 수 있다. 직관 절에서 오른쪽은 $0.2/2=0.1$ 이다.

## 부분공간의 sin Θ 정리

$U$ 가 $A$ 의 고윳값 $\lambda_1,\dots,\lambda_k$ 의 고유벡터를 열로 갖고 $\hat U$ 가 $\hat A$ 의 처음 $k$ 개 고유벡터를 열로 가지며, $\delta=\lambda_k(A)-\lambda_{k+1}(\hat A)\gt 0$ 이면

$$
\Vert\sin\Theta(U,\hat U)\Vert\le\frac{\Vert EU\Vert}{\delta}
$$

이다[^1]. 노름은 스펙트럼 노름이어도 Frobenius 노름이어도 된다. 고윳값 하나하나가 아니라 $k$ 개 묶음의 고유공간이 얼마나 기우는지를 주므로, 묶음 안의 고윳값이 서로 가까워도 쓸 수 있다.

## 간격의 필요성

직관 절의 $I+E$ 가 보이듯 간격이 $0$ 이면 아무리 작은 섭동도 고유벡터를 $45°$ 돌린다. 간격 $g$ 인 $\mathrm{diag}(g,0)$ 에 대각 밖 $\varepsilon$ 을 더하면 $\tan 2\theta=2\varepsilon/g$ 이므로 $\varepsilon\ll g$ 에서 $\sin\theta\approx\varepsilon/g$ 다. 분모의 간격은 크기의 차수에서 더 줄일 수 없다.

## 고윳값과의 차수 비교

고윳값은 섭동에 대해 1 차로 움직이지만 고유벡터 방향의 오차 $\theta$ 는 [Rayleigh 몫](rayleigh-quotient.md)의 오차를 $\theta^2$ 규모로만 바꾼다. 직관 절에서 $\hat v$ 로 잰 $R_A(\hat v)=3\cos^2\theta+\sin^2\theta$ 는 $3$ 과 약 $0.005$ 차이 난다.

## 특이벡터

직사각행렬 $A$, $\hat A=A+E$ 의 왼쪽과 오른쪽 특이벡터에도 같은 꼴의 Wedin 정리(Wedin's theorem)가 성립한다. $\delta$ 를 $A$ 의 처음 $k$ 개 특이값과 $\hat A$ 의 나머지 특이값의 간격으로 두면 두 특이부분공간의 $\sin\Theta$ 가 $\max(\Vert EV\Vert,\Vert E^{\mathsf T}U\Vert)/\delta$ 이하다[^3].

# 활용

- [주성분 분석](principal-component-analysis.md). 표본 공분산행렬 $S$ 의 첫 주성분과 모공분산행렬 $\Sigma$ 의 첫 주성분 사이의 각은 $\sin\theta\le 2\Vert S-\Sigma\Vert\_2/(\lambda_1-\lambda_2)$ 이다. $\Vert S-\Sigma\Vert\_2$ 가 표본 수 $N$ 에 대해 $\sqrt{p/N}$ 규모로 줄면 주성분의 방향도 그 속도로 수렴한다.
- 스펙트럼 군집. [Laplacian 행렬](graph-laplacian.md)이나 인접행렬의 처음 $k$ 개 고유벡터로 정점을 묶을 때, 관측한 그래프와 기댓값 그래프의 행렬 차이로 고유공간의 기울기를 잡아 잘못 묶인 정점의 수를 센다. 확률적 블록 모형(stochastic block model)의 군집 복원이 이 계산을 쓴다.
- 고유벡터 계산의 정확도. 후방 안정인 알고리즘이 계산한 고유벡터는 $\Vert\delta A\Vert\_2\le Cu\Vert A\Vert\_2$ 인 $A+\delta A$ 의 정확한 고유벡터이므로, 각 오차가 $Cu\Vert A\Vert\_2/\delta$ 규모다. 간격이 작은 고윳값의 고유벡터는 덜 정확하게 계산된다.
- [행렬 완성](matrix-completion.md). 관측한 성분으로 만든 행렬의 처음 $r$ 개 특이벡터가 참 행렬의 특이부분공간에 가깝다는 것을 Wedin 정리로 보이고, 이것을 반복 알고리즘의 초기값으로 쓴다.

[^1]: Chandler Davis and W. M. Kahan, "The rotation of eigenvectors by a perturbation. III", *SIAM Journal on Numerical Analysis* 7 (1970), 1–46.

[^2]: Y. Yu, T. Wang and R. J. Samworth, "A useful variant of the Davis–Kahan theorem for statisticians", *Biometrika* 102 (2015), 315–323.

[^3]: Per-Åke Wedin, "Perturbation bounds in connection with singular value decomposition", *BIT Numerical Mathematics* 12 (1972), 99–111.

# 연관 문서

## 선수지식

- [Weyl 고윳값 부등식](weyl-eigenvalue-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #statistics #analysis #graph_theory
