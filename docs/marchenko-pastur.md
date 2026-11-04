# Marchenko–Pastur 법칙

# 개요

**Marchenko–Pastur 법칙(Marchenko–Pastur law)** 은 차원과 표본수의 비를 고정하고 둘을 함께 키울 때 표본공분산행렬의 고윳값 분포가 가는 극한을 준다. 서로 독립인 잡음 변수 $1000$ 개를 표본 $2000$ 개로 재어 표본공분산행렬을 만들면, 참 공분산이 단위행렬인데도 고윳값이 $1$ 에 모이지 않고 $0.086$ 부터 $2.91$ 까지 퍼진다. 이 퍼짐을 모르면 잡음에서 나온 큰 고윳값을 신호로 읽는다. 법칙은 퍼짐의 모양을 비 $p/n$ 하나로 정해, 잡음만으로 나오는 고윳값의 범위를 준다.

# 직관

표본 $n$ 개로 $p$ 차원 공변량의 [공분산](covariance.md)을 추정할 때, 고전 통계는 $p$ 를 고정하고 $n \to \infty$ 를 보내며 표본공분산행렬 $S$ 가 참값 $\Sigma$ 로 수렴한다고 본다. 유전자 $2$ 만 개를 표본 $200$ 개로 재거나 자산 $500$ 개의 상관을 두 해치 일간 수익률로 재는 자료에서는 $p$ 도 함께 커지므로 비 $p/n$ 을 무시할 수 없다.

$\Sigma = I$ 이면 $\mathbb E\lbrack S\rbrack = I$ 이므로 [고윳값](eigenvalues.md)의 평균은 $1$ 이고, 퍼짐은 $S$ 의 요동에서 온다. $S_{ij}$ 각각의 표준편차가 $n^{-1/2}$ 규모이고 그런 항목이 $p \times p$ 개 있다. 행렬의 고윳값은 항목의 요동을 $\sqrt p$ 배로 증폭해 받으므로 퍼짐이 $\sqrt{p}\cdot n^{-1/2} = \sqrt\gamma$ 규모가 되고, 받침의 끝이 $1 \pm \sqrt\gamma$ 의 제곱으로 나온다. $p=1000$, $n=2000$ 이면 $\gamma=0.5$ 이고 끝이 $(1-\sqrt{0.5})^2\approx 0.086$ 과 $(1+\sqrt{0.5})^2\approx 2.91$ 이다.

[Wigner 반원법칙](wigner-semicircle.md)의 대칭 무작위 [행렬](matrices.md)은 고윳값이 양쪽으로 대칭하게 퍼지지만 $S = \frac1n XX^{\mathsf T}$ 는 양의 준정부호라 고윳값이 음수가 될 수 없다. $X$ 의 특이값 $\sigma$ 가 반원에 가까운 법칙을 따르고 $S$ 의 고윳값이 $\sigma^2$ 이므로, 제곱이 오른쪽 꼬리를 늘이고 왼쪽을 원점에 밀어붙여 비대칭이 생긴다.

# 정의

## 표본공분산행렬과 경험 스펙트럼 분포

$X$ 를 $p \times n$ 행렬, 항목은 평균 $0$ 분산 $1$ 로 독립동일분포라 하고 $S = \frac1n XX^{\mathsf T}$ 를 **표본공분산행렬(sample covariance matrix)** 이라 한다. $S$ 의 고윳값 $\lambda_1,\dots,\lambda_p$ 에 대해 $\frac1p\sum_i\delta_{\lambda_i}$ 를 $S$ 의 **경험 스펙트럼 분포(empirical spectral distribution)** 라 한다.

$p=n=2$ 이고 $X=\begin{pmatrix}1&1\cr 1&1\end{pmatrix}$ 이면 $S=\begin{pmatrix}1&1\cr 1&1\end{pmatrix}$ 이고 고윳값이 $2$ 와 $0$ 이므로 경험 스펙트럼 분포는 $\frac12\delta_0+\frac12\delta_2$ 다. $X=\begin{pmatrix}1&1\cr 1&-1\end{pmatrix}$ 이면 $S=I$ 이고 분포는 $\delta_1$ 이다.

## Marchenko–Pastur 분포

$\gamma\in(0,\infty)$ 에 대해 다음 측도 $\mu_\gamma$ 를 비 $\gamma$ 의 **Marchenko–Pastur 분포** 라 한다.

$$
d\mu_\gamma(x) = \frac{\sqrt{(\lambda_+ - x)(x - \lambda_-)}}{2\pi\gamma x}\thinspace\mathbb 1_{\lbrack\lambda_-,\lambda_+\rbrack}(x)\thinspace dx
\thickspace+\thickspace\Bigl(1 - \tfrac1\gamma\Bigr)^{+}\delta_0,
\qquad \lambda_\pm = (1 \pm \sqrt\gamma)^2
$$

$\gamma=0.5$ 이면 받침이 $\lbrack 0.086,\thinspace 2.91\rbrack$ 이고 원점의 덩어리가 없다. $\gamma=2$ 이면 $\lambda_-=(1-\sqrt2)^2\approx 0.17$, $\lambda_+\approx 5.83$ 이고, 원점에 질량 $1-1/2=1/2$ 이 있다.

## Stieltjes 변환

실수선 위의 확률측도 $\mu$ 의 **Stieltjes 변환(Stieltjes transform)** 은 상반평면의 $z$ 에서 $m(z) = \int (x-z)^{-1}d\mu(x)$ 다. $\mu=\frac12\delta_0+\frac12\delta_2$ 이면 $m(z)=\frac12\bigl(-\frac1z+\frac1{2-z}\bigr)$ 이다.

# 성질

## Marchenko–Pastur 정리

$p, n \to \infty$ 이면서 $p/n \to \gamma \in (0,\infty)$ 일 때 $S$ 의 경험 스펙트럼 분포는 거의 확실히 $\mu_\gamma$ 로 수렴한다. $\delta_0$ 항은 $\gamma \gt 1$ 일 때 $S$ 의 계수가 $n$ 이하여서 생기는 영 고윳값 $p-n$ 개의 몫이다. 항목의 분포는 극한에 나타나지 않으며 네 번째 적률이 유한하면 된다.

## 적률

$\mu_\gamma$ 의 적률은 다음 닫힌 꼴이다.

$$
m_k = \int x^k\thinspace d\mu_\gamma(x) = \sum_{r=0}^{k-1}\frac{1}{r+1}\binom{k}{r}\binom{k-1}{r}\gamma^{\thinspace r}
$$

계수 $\frac{1}{r+1}\binom{k}{r}\binom{k-1}{r}$ 이 Narayana 수(Narayana numbers)이고 $\gamma = 1$ 에서 합이 [Catalan 수](catalan-numbers.md) $C_k$ 가 된다. 처음 몇 개는 $m_1 = 1$ , $m_2 = 1+\gamma$ , $m_3 = 1 + 3\gamma + \gamma^2$ 다. 적률은 $\frac1p\mathrm{tr}(S^k)$ 의 극한이므로 고윳값을 구하지 않고 행렬 곱만으로 얻는다.

## Stieltjes 변환의 방정식

$\mu_\gamma$ 의 Stieltjes 변환은 이차방정식

$$
\gamma z\thinspace m(z)^2 + \bigl(z + \gamma - 1\bigr)m(z) + 1 = 0
$$

을 만족하고, 근을 고른 뒤 허수부를 취하면 위의 밀도가 나온다. 자유확률에서 $S$ 가 자유 곱셈 합성곱(free multiplicative convolution)으로 기술되므로 방정식이 이차가 된다. $\Sigma$ 가 항등행렬이 아닌 경우에는 이 방정식이 $\Sigma$ 의 스펙트럼을 담은 적분방정식으로 바뀐다.

## 가장자리와 요동

받침의 끝 $\lambda_+$ 근처에서 밀도가 $\sqrt{\lambda_+ - x}$ 로 사라진다. 이 제곱근 소멸이 [Tracy–Widom 분포](tracy-widom.md)가 나타나는 가장자리이고, 최대 고윳값은

$$
\frac{\lambda_{\max} - \lambda_+}{\sigma_{p,n}} \thickspace\Longrightarrow\thickspace \text{TW}\_\beta,
\qquad
\sigma_{p,n} = \frac{(1+\sqrt\gamma)^{4/3}}{\gamma^{1/6}}\thinspace n^{-2/3}
$$

를 따른다. Tracy–Widom 의 평균이 음수이므로 유한 크기에서 $\lambda_{\max}$ 는 $\lambda_+$ 보다 안쪽에 있고, 그 편향의 크기는 $n^{-2/3}$ 규모다.

## BBP 전이

참 공분산에 방향 하나가 강조된 스파이크 모형(spiked model) $\Sigma = I + \ell vv^{\mathsf T}$ 에서 최대 고윳값의 극한은

$$
\lambda_{\max} \longrightarrow
\begin{cases}
(1+\ell)\Bigl(1 + \dfrac{\gamma}{\ell}\Bigr), & \ell \gt\sqrt\gamma\cr
(1+\sqrt\gamma)^2, & \ell \le \sqrt\gamma
\end{cases}
$$

이다. 이 문턱에서 일어나는 변화를 **BBP 전이(Baik–Ben Arous–Péché transition)** 라 한다. 신호가 잡음 덩어리 밖으로 나오는 경계는 $\ell \to 0$ 이 아니라 유한한 문턱 $\ell = \sqrt\gamma$ 이며, 그 값은 표본의 정확도가 아니라 $p$ 와 $n$ 의 비로 정해진다. 이 전이에서 요동의 종류도 바뀐다. 문턱 아래에서는 Tracy–Widom, 위에서는 [정규분포](normal-distribution.md)다. 덩어리 안에서는 여러 고윳값이 함께 밀어내는 집단 현상이고, 빠져나온 뒤에는 방향 하나의 문제가 되어 [중심극한정리](central-limit-theorem.md)가 적용된다.

고유벡터도 같은 문턱을 공유한다. $\ell \le \sqrt\gamma$ 이면 추정된 주성분과 참 방향의 내적이 $0$ 으로 가고, 위에서는 양의 극한

$$
\lvert\langle \hat v, v\rangle\rvert^2 \longrightarrow \frac{1 - \gamma/\ell^2}{1 + \gamma/\ell}
$$

을 갖는다. 신호를 감지할 수 있는 영역에서도 방향 추정은 완전하지 않고, 문턱 바로 위에서 추정 방향은 참 방향과 거의 직교한다.

## 고윳값의 축소 보정

Marchenko–Pastur(MP) 법칙은 표본공분산의 고윳값이 큰 쪽은 과대, 작은 쪽은 과소 추정됨을 정량화한다. 이 왜곡을 보정하는 축소 추정(shrinkage estimation)은 관측된 스펙트럼에서 Stieltjes 변환을 통해 참 스펙트럼을 역산한다. 작은 고윳값의 과소 추정은 역행렬에서 증폭되므로, 공분산의 역행렬을 쓰는 포트폴리오 최적화와 판별분석에서 보정의 효과가 크다. 고윳값을 모두 평균 쪽으로 같은 비율만큼 옮기는 판본이 [Ledoit–Wolf 축소 추정](ledoit-wolf-shrinkage.md)이다.

# 활용

## 주성분의 유의성 판정

[주성분 분석](principal-component-analysis.md)에서 성분을 몇 개 남길지 정하는 고전적 기준은 고윳값이 $1$ 보다 큰 것이었다. $\Sigma = I$ 라도 고윳값이 $(1+\sqrt\gamma)^2$ 까지 올라가므로 $p/n$ 이 작지 않으면 이 기준이 잡음을 통과시킨다. $\gamma = 0.5$ 에서 잡음 고윳값의 절반가량이 $1$ 을 넘는다.

MP 법칙이 주는 기준은 $\lambda_+ = (1+\sqrt\gamma)^2$ 이고, 가장자리 요동까지 고려하려면 Tracy–Widom 분위수를 더한다. 유전체 자료의 집단 구조 추정에 쓰이는 Tracy–Widom 검정이 이 절차다.

## 잡음을 지우는 상관행렬

자산 수백 개의 상관행렬을 추정하면 고윳값 대부분이 MP 받침 안에 들어온다. 받침 안쪽을 잡음으로 보고 밖으로 나온 몇 개(시장 전체 요인, 업종 요인)만 남긴 뒤 나머지를 평평하게 눌러 재구성하는 것이 표준적인 잡음 제거다. 같은 절차가 신호처리의 잡음 부분공간 판정, 뇌영상 자료의 성분 선택, 신경망 [Hessian](hessian.md) 의 스펙트럼 분석에서도 쓰인다. 어느 경우든 정보가 없을 때의 스펙트럼을 알기 때문에 거기서 벗어난 부분을 신호로 센다.[^1]

[^1]: Zhidong Bai, Jack W. Silverstein, *Spectral Analysis of Large Dimensional Random Matrices*, 2nd ed., Chapters 3 and 6. MP 법칙의 Stieltjes 변환 증명, 적률의 조합적 표현, 받침 밖 고윳값의 부재. 스파이크 모형은 Jinho Baik, Gérard Ben Arous, Sandrine Péché, *Phase transition of the largest eigenvalue for nonnull complex sample covariance matrices*, Annals of Probability 33 (2005), §1.

# 연관 문서

## 선수지식

- [Wigner 반원법칙](wigner-semicircle.md)
- [주성분 분석](principal-component-analysis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #linear_algebra #statistics #theorem
