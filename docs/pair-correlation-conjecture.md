# 쌍 상관 추측

# 개요

쌍 상관 추측은 [Riemann zeta 함수](riemann-zeta.md)의 임계선 위 영점 쌍의 간격 분포가 큰 에르미트 무작위 행렬의 고윳값 쌍의 간격 분포와 같다는 추측이다.[^1] 평균 간격이 $1$ 이 되게 영점 높이를 정규화하면, 간격이 $\lbrack a,b\rbrack$ 에 드는 쌍의 비율이 밀도 $1-(\sin\pi u/\pi u)^2$ 의 적분으로 간다고 말한다. Montgomery 는 이 밀도의 Fourier 변환을 변수의 한 범위에서 [Riemann 가설](riemann-hypothesis.md) 아래 증명했다.

# 직관

높이 $T$ 까지 비자명한 영점의 개수는 Riemann–von Mangoldt 공식이 준다.

$$
N(T)=\frac{T}{2\pi}\ln\frac{T}{2\pi e}+O(\ln T)
$$

$T$ 로 미분하면 높이 $T$ 근처에서 단위 길이당 영점이 $\ln(T/2\pi)/2\pi$ 개이므로, 이웃한 두 영점의 간격은 평균 $2\pi/\ln(T/2\pi)$ 이다. $T=10^{12}$ 에서 이 값은 $0.23$ 남짓이다.

평균의 $1/10$ 보다 가까운 쌍이 얼마나 자주 나오는지는 이 공식으로 나오지 않는다. 개수 공식은 구간 안의 총 개수만 주고 쌍이 어디에 모여 있는지는 말하지 않는다. 그래서 간격을 평균 간격으로 나눠 평균이 $1$ 인 점열로 바꾼 뒤, 간격이 $\lbrack a,b\rbrack$ 에 드는 쌍의 개수를 영점 개수로 나눠 센다.

영점이 서로 무관하게 흩어져 있다면 그 비율은 구간의 길이 $b-a$ 다. Odlyzko 가 $10^{20}$ 번째 영점 근처에서 영점 $10^8$ 개를 계산해 이 비율을 재니 $a$ 가 작을 때 $b-a$ 보다 훨씬 작았다.[^2] 가까운 쌍이 드물다.

같은 현상이 큰 에르미트 무작위 행렬의 고윳값에서 나온다. 고윳값 쌍의 정규화한 간격 밀도는 $1-(\sin\pi u/\pi u)^2$ 이고 $u\to 0$ 에서 $0$ 으로 간다. Odlyzko 의 히스토그램이 이 곡선과 맞는다. 쌍 상관 추측은 영점의 간격 밀도가 이 함수라는 주장이다.

# 정의

## 정규화한 영점

Riemann 가설 아래 비자명한 영점을 $\rho=\tfrac12+i\gamma$ 로 쓰면 $\gamma$ 가 실수다. 정규화한 영점은 다음이다.

$$
\tilde\gamma=\frac{\gamma}{2\pi}\ln\frac{\gamma}{2\pi}
$$

$\tilde\gamma$ 의 평균 간격은 $1$ 이다. $N(T)$ 개의 영점이 높이 $T$ 까지 있고 $\tilde\gamma$ 의 최댓값이 $N(T)$ 규모이기 때문이다.

## 쌍 상관 추측

$0\lt a\lt b$ 인 모든 $a,b$ 에 대해 다음이 성립한다는 추측이다.[^1]

$$
\lim_{T\to\infty}\frac{1}{N(T)}\char35{}\lbrace (\gamma,\gamma'):\thinspace 0\lt\gamma,\gamma'\le T,\thinspace a\le\tilde\gamma'-\tilde\gamma\le b\rbrace=\int_a^b\left(1-\left(\frac{\sin\pi u}{\pi u}\right)^2\right)du
$$

피적분 함수는 sine 핵 $K(x,y)=\sin\pi(x-y)/\pi(x-y)$ 를 가진 [결정점과정](determinantal-point-process.md)의 두 점 상관함수다. 무작위 에르미트 행렬의 고윳값을 스펙트럼 안쪽에서 확대하면 같은 과정이 나온다.

## Montgomery 함수

$w(u)=4/(4+u^2)$ 를 가중으로 하여 다음을 쓴다.

$$
F(\alpha,T)=\left(\frac{T}{2\pi}\ln T\right)^{-1}\sum_{0\lt\gamma,\gamma'\le T}T^{i\alpha(\gamma-\gamma')}w(\gamma-\gamma')
$$

$F$ 는 $\alpha$ 에 대해 짝함수이고 음이 아니다. 쌍 상관 추측은 고정된 모든 $\alpha$ 에서 $F(\alpha,T)\to\min(\vert\alpha\vert,1)$ 인 것과 동치다. $\min(\vert\alpha\vert,1)$ 의 Fourier 역변환이 $\delta(u)+1-(\sin\pi u/\pi u)^2$ 이고, 델타 항은 $\gamma=\gamma'$ 인 쌍에서 온다.

# 성질

## Montgomery 정리

Riemann 가설 아래 $0\lt\varepsilon\le\vert\alpha\vert\le 1-\varepsilon$ 에서 균등하게 다음이 성립한다.[^1]

$$
F(\alpha,T)=\vert\alpha\vert+o(1)
$$

증명의 요지는 명시 공식으로 영점 쪽 합을 소수 쪽 합으로 옮기는 것이다. $x=T^\alpha$ 로 두면 $F(\alpha,T)$ 가 von Mangoldt 함수의 합으로 쓰이고, $m=n$ 인 항이 $\sum_{n\le x}\Lambda(n)^2/n$ 를 주어 Mertens 정리로 $\vert\alpha\vert$ 가 나온다. $\vert\alpha\vert\lt 1$ 이면 $m\ne n$ 인 항은 Montgomery–Vaughan 의 평균값 정리로 $o(1)$ 이다. $\vert\alpha\vert\ge 1$ 에서는 그 항이 $\sum_{n\le x}\Lambda(n)\Lambda(n+h)$ 의 크기에 걸리고, 이 합의 주항은 쌍둥이 소수에 대한 Hardy–Littlewood 추측이 준다.

## 단순 영점의 비율

Montgomery 정리만으로 단순 영점의 비율이 $2/3$ 이상이라는 하한이 나온다.[^1] 영점 $\rho$ 의 중복도를 $m_\rho$ 라 하면 그 자리의 쌍이 $m_\rho^2$ 개이므로 $\sum_\rho m_\rho^2$ 가 $F$ 의 가중 적분으로 위에서 잡히고, $\sum_\rho m_\rho=N(T)$ 와 Cauchy–Schwarz 부등식을 함께 쓰면 $m_\rho=1$ 인 영점의 개수가 아래에서 잡힌다.

## 평균보다 작은 간격

$F$ 의 같은 범위에서 이웃 영점의 정규화한 간격의 하극한이 $0.68$ 이하다.[^1] 간격이 모두 $\lambda$ 이상이면 $F(\alpha,T)$ 의 적분이 아래로 제한되므로, $\vert\alpha\vert\lt 1$ 에서 얻은 값 $\vert\alpha\vert$ 와 견주어 $\lambda$ 의 상한이 나온다.

## 대칭형에 둔감한 통계

쌍 상관함수는 유니터리, 직교, 심플렉틱 세 고전군의 무작위 행렬에서 모두 같은 함수다. 영점 통계가 갈리는 것은 임계점 $s=1/2$ 근처 영점을 보는 저수준 통계이고, 그 쪽에서 세 대칭형이 서로 다른 함수를 준다.

# 활용

- **모멘트 추측.** Keating 과 Snaith 는 **CUE**(circular unitary ensemble)의 특성다항식 $\vert\Lambda(\theta)\vert^{2k}$ 의 평균을 [Haar 측도](haar-measure.md)로 계산해 $\frac{1}{T}\int_0^T\vert\zeta(\tfrac12+it)\vert^{2k}dt$ 의 $(\ln T)^{k^2}$ 계수를 예측했다.[^3] $k=1,2$ 에서 이 예측은 고전적으로 증명된 값과 맞는다.
- **유한체 위 곡선족.** Katz 와 Sarnak 는 유한체 위 곡선족의 Frobenius 고윳값 통계가 그 족의 monodromy 군으로 정해짐을 증명했다.[^4] 곡선에 대한 Riemann 가설이 증명되어 있어 이 족에서는 영점 통계가 정리이고, 같은 대칭형 분류를 수체의 $L$ 함수족으로 옮긴 것이 저수준 통계 추측이다.
- **임계점에서의 비소멸.** [Dirichlet $L$ 함수](dirichlet-l-functions.md)의 족에서 $L(\tfrac12,\chi)\ne 0$ 인 지표의 비율 하한은 저수준 영점 밀도를 계산해 얻는다. 쌍 상관과 같은 가중 합을 족 전체에 대해 평균하는 방식이다.
- **고윳값 통계의 출처.** 임계선 위 영점을 에르미트 행렬의 고윳값으로 보는 이 대응이 [Wigner 반원법칙](wigner-semicircle.md)을 비롯한 무작위 행렬 결과를 $L$ 함수 예측에 쓰는 근거다.

[^1]: H. L. Montgomery, "The pair correlation of zeros of the zeta function", Analytic Number Theory, Proc. Sympos. Pure Math. 24, AMS, 1973, 181-193.
[^2]: A. M. Odlyzko, "On the distribution of spacings between zeros of the zeta function", Mathematics of Computation 48 (1987), 273-308.
[^3]: J. P. Keating, N. C. Snaith, "Random matrix theory and $\zeta(1/2+it)$", Communications in Mathematical Physics 214 (2000), 57-89.
[^4]: N. M. Katz, P. Sarnak, Random Matrices, Frobenius Eigenvalues, and Monodromy, AMS Colloquium Publications 45, 1999.

# 연관 문서

## 선수지식

- [Riemann 가설](riemann-hypothesis.md)
- [결정점과정](determinantal-point-process.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #probability #complex_analysis
