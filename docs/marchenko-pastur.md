# Marchenko–Pastur 법칙

# 개요

표본 $n$ 개로 $p$ 차원 공변량의 공분산을 추정할 때, 고전 통계는 $p$ 를 고정하고 $n \to \infty$ 를 보내며 표본공분산행렬 $S$ 가 참값 $\Sigma$ 로 수렴한다고 본다. 유전자 $2$ 만 개를 표본 $200$ 개로 재거나 자산 $500$ 개의 상관을 두 해치 일간 수익률로 재는 자료에서는 $p$ 도 함께 커지므로 비 $p/n$ 을 무시할 수 없다.

**Marchenko–Pastur 법칙**은 $p/n \to \gamma$ 인 체제에서 $S$ 의 고윳값 분포를 준다. $\Sigma = I$ 이어도 고윳값은 $1$ 에 모이지 않고 $\bigl[(1-\sqrt\gamma)^2,\thinspace(1+\sqrt\gamma)^2\bigr]$ 에 퍼지며, 극한 분포가 $\gamma$ 하나로 정해진다. $\gamma = 0.5$ 에서 잡음만 있는 고윳값이 $0.086$ 부터 $2.91$ 까지 벌어진다.

[Wigner 반원법칙](wigner-semicircle.md)과 같은 자리의 정리다. 항목이 독립인 큰 무작위 행렬의 고윳값 분포가 항목의 세부 분포와 무관하게 정해진다는 점이 같고, 대칭행렬 대신 $XX^{\mathsf T}$ 라는 곱 구조를 보므로 극한이 반원 대신 한쪽으로 치우친 모양이 된다. [주성분 분석](principal-component-analysis.md)에서 어느 고윳값이 신호인지 판정하는 영점 기준선이 이 분포의 받침이다.

# 직관

$\Sigma = I$ 이면 $\mathbb E[S] = I$ 이므로 고윳값의 평균은 $1$ 이고, 퍼짐은 $S$ 의 요동에서 온다. $S_{ij}$ 각각의 표준편차가 $n^{-1/2}$ 규모이고 그런 항목이 $p \times p$ 개 있다. 행렬의 고윳값은 항목의 요동을 $\sqrt p$ 배로 증폭해 받으므로 퍼짐이 $\sqrt{p}\cdot n^{-1/2} = \sqrt\gamma$ 규모가 되고, 받침의 끝이 $1 \pm \sqrt\gamma$ 의 제곱으로 나온다. $\gamma \to 0$ 이면 받침이 한 점 $1$ 로 수축해 고전 극한이 돌아온다. $\gamma = 1$ 이면 왼쪽 끝이 $0$ 에 닿아 밀도가 원점에서 발산하고, $\gamma \gt 1$ 이면 $S$ 의 계수가 $n$ 이므로 고윳값 $p - n$ 개가 정확히 $0$ 이다.

Wigner 행렬은 대칭이라 고윳값이 양쪽으로 대칭하게 퍼지지만 $S = \frac1n XX^{\mathsf T}$ 는 양의 준정부호라 고윳값이 음수가 될 수 없다. $X$ 의 특이값 $\sigma$ 가 반원에 가까운 법칙을 따르고 $S$ 의 고윳값이 $\sigma^2$ 이므로, 제곱이 오른쪽 꼬리를 늘이고 왼쪽을 원점에 밀어붙여 비대칭이 생긴다.

# 정의

## 극한 분포

$X$ 를 $p \times n$ 행렬, 항목은 평균 $0$ 분산 $1$ 로 독립동일분포라 하고 $S = \frac1n XX^{\mathsf T}$ 라 두자. $p, n \to \infty$ 이면서 $p/n \to \gamma \in (0,\infty)$ 일 때 $S$ 의 고윳값의 경험분포는 거의 확실히

$$
d\mu_\gamma(x) = \frac{\sqrt{(\lambda_+ - x)(x - \lambda_-)}}{2\pi\gamma x}\thinspace\mathbb 1_{[\lambda_-,\lambda_+]}(x)\thinspace dx
\thickspace+\thickspace\Bigl(1 - \tfrac1\gamma\Bigr)^{+}\delta_0,
\qquad \lambda_\pm = (1 \pm \sqrt\gamma)^2
$$

로 수렴한다. $\delta_0$ 항은 $\gamma \gt 1$ 일 때 계수 부족으로 생기는 영 고윳값의 덩어리다. 항목의 분포는 극한에 나타나지 않으며 네 번째 적률이 유한하면 된다. 이 보편성이 [중심극한정리](central-limit-theorem.md)의 무작위 행렬판에 해당한다.

## 적률

$\mu_\gamma$ 의 적률은 조합적으로 닫힌 꼴이다.

$$
m_k = \int x^k\thinspace d\mu_\gamma(x) = \sum_{r=0}^{k-1}\frac{1}{r+1}\binom{k}{r}\binom{k-1}{r}\gamma^{\thinspace r}
$$

계수 $\frac{1}{r+1}\binom{k}{r}\binom{k-1}{r}$ 이 Narayana 수이고 $\gamma = 1$ 에서 합이 Catalan 수 $C_k$ 가 된다. 처음 몇 개는 $m_1 = 1$, $m_2 = 1+\gamma$, $m_3 = 1 + 3\gamma + \gamma^2$ 다. 적률은 $\frac1p\mathrm{tr}(S^k)$ 의 극한이므로 고윳값을 구하지 않고 행렬 곱만으로 얻는다.

## Stieltjes 변환

증명과 일반화는 Stieltjes 변환 $m(z) = \int (x-z)^{-1}d\mu(x)$ 로 한다. MP 분포의 변환은 이차방정식

$$
\gamma z\thinspace m(z)^2 + \bigl(z + \gamma - 1\bigr)m(z) + 1 = 0
$$

을 만족하고, 근을 고른 뒤 허수부를 취하면 위의 밀도가 나온다. 자유확률에서 $S$ 가 자유 곱셈 합성곱으로 기술되므로 방정식이 이차가 된다. $\Sigma$ 가 항등행렬이 아닌 경우에는 이 방정식이 $\Sigma$ 의 스펙트럼을 담은 적분방정식으로 바뀐다.

# 성질

## 가장자리와 요동

받침의 끝 $\lambda_+$ 근처에서 밀도가 $\sqrt{\lambda_+ - x}$ 로 사라진다. 이 제곱근 소멸이 [Tracy–Widom 분포](tracy-widom.md)가 나타나는 가장자리이고, 최대 고윳값은

$$
\frac{\lambda_{\max} - \lambda_+}{\sigma_{p,n}} \thickspace\Longrightarrow\thickspace \text{TW}\_\beta,
\qquad
\sigma_{p,n} = \frac{(1+\sqrt\gamma)^{4/3}}{\gamma^{1/6}}\thinspace n^{-2/3}
$$

를 따른다. Tracy–Widom 의 평균이 음수이므로 유한 크기에서 $\lambda_{\max}$ 는 $\lambda_+$ 보다 안쪽에 있고, 그 편향의 크기는 $n^{-2/3}$ 규모다.

## BBP 전이

참 공분산에 방향 하나가 강조된 스파이크 모형 $\Sigma = I + \ell vv^{\mathsf T}$ 에서 최대 고윳값의 극한은

$$
\lambda_{\max} \longrightarrow
\begin{cases}
(1+\ell)\Bigl(1 + \dfrac{\gamma}{\ell}\Bigr), & \ell \gt\sqrt\gamma\cr
(1+\sqrt\gamma)^2, & \ell \le \sqrt\gamma
\end{cases}
$$

이다. 이 문턱에서 일어나는 변화가 **BBP**(Baik–Ben Arous–Péché) 전이다. 신호가 잡음 덩어리 밖으로 나오는 경계는 $\ell \to 0$ 이 아니라 유한한 문턱 $\ell = \sqrt\gamma$ 이며, 그 값은 표본의 정확도가 아니라 $p$ 와 $n$ 의 비로 정해진다. Baik–Ben Arous–Péché 의 이름이 붙은 이 전이는 요동의 종류도 바꾼다. 문턱 아래에서는 Tracy–Widom, 위에서는 정규분포다. 덩어리 안에서는 여러 고윳값이 함께 밀어내는 집단 현상이고, 빠져나온 뒤에는 방향 하나의 문제가 되어 중심극한정리가 적용된다.

고유벡터도 같은 문턱을 공유한다. $\ell \le \sqrt\gamma$ 이면 추정된 주성분과 참 방향의 내적이 $0$ 으로 가고, 위에서는 양의 극한

$$
\lvert\langle \hat v, v\rangle\rvert^2 \longrightarrow \frac{1 - \gamma/\ell^2}{1 + \gamma/\ell}
$$

을 갖는다. 신호를 감지할 수 있는 영역에서도 방향 추정은 완전하지 않고, 문턱 바로 위에서 추정 방향은 참 방향과 거의 직교한다.

## 고윳값의 축소 보정

MP 법칙은 표본공분산의 고윳값이 큰 쪽은 과대, 작은 쪽은 과소 추정됨을 정량화한다. 이 왜곡을 되돌리는 **축소 추정**은 관측된 스펙트럼에서 Stieltjes 변환을 통해 참 스펙트럼을 역산한다. 작은 고윳값의 과소 추정은 역행렬에서 증폭되므로, 공분산의 역행렬을 쓰는 포트폴리오 최적화와 판별분석에서 보정의 효과가 크다.

# 활용

## 주성분의 유의성 판정

[주성분 분석](principal-component-analysis.md)에서 성분을 몇 개 남길지 정하는 고전적 기준은 고윳값이 $1$ 보다 큰 것이었다. $\Sigma = I$ 라도 고윳값이 $(1+\sqrt\gamma)^2$ 까지 올라가므로 $p/n$ 이 작지 않으면 이 기준이 잡음을 통과시킨다. $\gamma = 0.5$ 에서 잡음 고윳값의 절반가량이 $1$ 을 넘는다.

MP 법칙이 주는 기준은 $\lambda_+ = (1+\sqrt\gamma)^2$ 이고, 가장자리 요동까지 감안하려면 Tracy–Widom 분위수를 더한다. 유전체 자료의 집단 구조 추정에 쓰이는 Tracy–Widom 검정이 이 절차다.

## 잡음을 지우는 상관행렬

자산 수백 개의 상관행렬을 추정하면 고윳값 대부분이 MP 받침 안에 들어온다. 받침 안쪽을 잡음으로 보고 밖으로 나온 몇 개(시장 전체 요인, 업종 요인)만 남긴 뒤 나머지를 평평하게 눌러 재구성하는 것이 표준적인 잡음 제거다. 같은 절차가 신호처리의 잡음 부분공간 판정, 뇌영상 자료의 성분 선택, 신경망 Hessian 의 스펙트럼 분석에서도 쓰인다. 어느 경우든 정보가 없을 때의 스펙트럼을 알기 때문에 거기서 벗어난 부분을 신호로 센다.[^1]

[^1]: Zhidong Bai, Jack W. Silverstein, *Spectral Analysis of Large Dimensional Random Matrices*, 2nd ed., Chapters 3 and 6. MP 법칙의 Stieltjes 변환 증명, 적률의 조합적 표현, 받침 밖 고윳값의 부재. 스파이크 모형은 Jinho Baik, Gérard Ben Arous, Sandrine Péché, *Phase transition of the largest eigenvalue for nonnull complex sample covariance matrices*, Annals of Probability 33 (2005), §1.

# 연관 문서

## 선수지식

- [Wigner 반원법칙](wigner-semicircle.md)
- [주성분 분석](principal-component-analysis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #linear_algebra #statistics #theorem
