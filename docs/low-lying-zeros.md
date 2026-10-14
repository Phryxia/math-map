# 저수준 영점

# 개요

저수준 영점은 $L$ 함수족의 각 원소에서 임계점 $s=\tfrac12$ 에 가장 가까운 영점들이다. [쌍 상관 추측](pair-correlation-conjecture.md)은 한 $L$ 함수의 높은 영점 사이의 간격을 다루고, 저수준 영점은 족을 모아 임계점 근처만 본다.

쌍 상관함수는 유니터리, 직교, 심플렉틱 세 고전군의 무작위 행렬에서 같은 함수다. 저수준 영점의 분포는 세 군에서 다른 함수를 주므로 족이 어느 군의 통계를 따르는지 가른다. 유한체 위 곡선족에서는 그 군이 족의 모노드로미 군으로 정해진다.

# 직관

쌍 상관은 영점의 간격을 재는 통계다. 높이 $T$ 근처의 영점 $\tfrac12+i\gamma$ 를 $\tilde\gamma=\frac{\gamma}{2\pi}\log T$ 로 바꿔 평균 간격을 $1$ 로 맞추고, $\gamma$ 가 $T$ 와 $2T$ 사이인 영점 쌍의 간격이 어떻게 흩어지는지 본다. 그러면 임계점에 가장 가까운 영점은 어디에 있는가.

이 질문을 쌍 상관의 계산으로 풀어 본다. 임계점 근처 영점은 $\gamma$ 가 $1$ 정도인 것이고, 같은 자로 재면 $\tilde\gamma$ 가 $\log T$ 정도다. 높이 $T$ 까지의 영점은 $\frac{T}{2\pi}\log T$ 개이므로 $\gamma$ 가 $1$ 정도인 영점은 그 가운데 $\log T$ 개 안팎이다. 비율이 $1/T$ 이라 $T$ 를 키우면 평균에서 사라진다. 한 $L$ 함수의 영점을 아무리 많이 모아도 임계점 근처는 보이지 않는다.

한 함수에서 영점을 많이 모아서 막혔으니, 많은 함수에서 하나씩 모은다. 판별식이 $\lvert d\rvert\le D$ 인 기본 판별식 $d$ 마다 이차 지표 $\chi_d$ 의 $L$ 함수를 두고, 각 함수에서 임계점에 가장 가까운 영점 하나를 뽑는다. 함수가 $D$ 개 정도이므로 영점 $D$ 개가 모이고 모두 임계점 근처의 것이다.

영점 높이를 재는 자는 함수마다 다르다. 도체가 $\lvert d\rvert$ 인 $L$ 함수는 임계점 근처에서 영점 간격이 $2\pi/\log\lvert d\rvert$ 정도이므로, 함수들을 겹쳐 놓으려면 $\tilde\gamma=\frac{\gamma}{2\pi}\log\lvert d\rvert$ 로 재야 한다. 이 자로 모은 $D$ 개의 분포는 임계점에서 밀도가 $0$ 이고, 타원곡선의 $L$ 함수족에서 같은 것을 재면 임계점에 영점이 몰린다. 족이 분포로 갈린다.

# 정의

## 영점의 정규화

$L(s,f)$ 의 비자명 영점을 $\tfrac12+i\gamma_f$ 라 쓰고 도체를 $c_f$ 라 한다. **정규화된 영점 높이**는

$$
\tilde\gamma_f=\frac{\gamma_f}{2\pi}\log c_f
$$

다. 임계점 근처 영점의 간격이 $2\pi/\log c_f$ 정도이므로 이 자로 재면 간격이 $1$ 이고, 도체가 다른 함수의 영점을 한 자 위에 놓을 수 있다.

## 일차 영점 밀도

$\phi$ 를 짝인 Schwartz 함수이고 Fourier 변환 $\hat\phi$ 의 지지가 콤팩트라 한다. $L(s,f)$ 의 **일차 영점 밀도**는

$$
D(f;\phi)=\sum\_{\gamma_f}\phi(\tilde\gamma_f)
$$

이고 합은 비자명 영점 전체에 걸친다. 족 $\mathcal F$ 에서 도체가 $Q$ 이하인 원소를 모은 것을 $\mathcal F(Q)$ 라 할 때, 족의 일차 영점 밀도는 평균

$$
\frac{1}{\lvert\mathcal F(Q)\rvert}\sum\_{f\in\mathcal F(Q)}D(f;\phi)
$$

다. $\phi$ 가 원점 근처에 집중하면 이 평균이 임계점 근처 영점만 센다.

## 대칭형 커널

고전군 $G$ 의 무작위 행렬에서 고윳값 하나의 분포를 행렬 크기가 커지는 극한에서 재면 다음 커널이 나온다.

| 대칭형 | 커널 $W_G(x)$ |
| --- | --- |
| 유니터리 $\mathrm{U}$ | $1$ |
| 심플렉틱 $\mathrm{Sp}$ | $1-\dfrac{\sin 2\pi x}{2\pi x}$ |
| 짝 직교 $\mathrm{O}^{+}$ | $1+\dfrac{\sin 2\pi x}{2\pi x}$ |
| 홀 직교 $\mathrm{O}^{-}$ | $1-\dfrac{\sin 2\pi x}{2\pi x}+\delta(x)$ |

심플렉틱 커널은 $x=0$ 에서 $0$ 이고 홀 직교 커널은 $x=0$ 에 질량 $1$ 의 델타 항을 갖는다. 유니터리 커널은 상수이므로 원점을 다른 자리와 구별하지 않는다.

## Katz–Sarnak 추측

**Katz–Sarnak 추측.** $L$ 함수족마다 고전군 $G$ 가 하나 정해져, $Q\to\infty$ 에서 족의 일차 영점 밀도가

$$
\int\_{-\infty}^{\infty}\phi(x)\thinspace W_G(x)\thinspace dx
$$

로 수렴한다.

# 성질

## 시험함수의 지지 범위

$L(s,f)$ 의 Dirichlet 계수를 $\lambda_f$ 라 하면 명시 공식이 영점 쪽 합을 소수 쪽 합으로 옮긴다.

$$
D(f;\phi)=\hat\phi(0)-\frac{2}{\log c_f}\sum\_p\sum\_{k\ge1}\frac{\lambda_f(p^k)\log p}{p^{k/2}}\hat\phi\Bigl(\frac{k\log p}{\log c_f}\Bigr)+O\Bigl(\frac{1}{\log c_f}\Bigr)
$$

$\hat\phi$ 의 지지가 $(-\alpha,\alpha)$ 이면 소수 합에 실제로 들어가는 소수는 $p\le c_f^{\alpha}$ 뿐이다. 족 평균을 취하면 그 합이 $\sum\_{f\in\mathcal F(Q)}\lambda_f(p^k)$ 꼴의 지표 합이나 Hecke 고윳값 합이 되고, $\alpha$ 를 키우면 $p$ 가 $Q^{\alpha}$ 까지 올라가 그 합의 평가가 어려워진다. 그래서 결과가 $\alpha$ 의 범위에 조건을 단다.

**정리.** 이차 지표족에서 $\hat\phi$ 의 지지가 $(-2,2)$ 안이면, 일반 Riemann 가설 아래 일차 영점 밀도가 심플렉틱 커널과 일치한다.[^1]

증명의 요지. $\lambda\_{\chi_d}(p)=\chi_d(p)$ 이고 $d$ 에 걸친 $\sum_d\chi_d(p)$ 는 [이차 상호법칙](quadratic-reciprocity.md)으로 $p$ 를 법으로 하는 지표 합이 된다. $p$ 가 $D^2$ 까지인 범위에서 그 합을 평가하면 $\hat\phi$ 의 지지 $(-2,2)$ 가 나온다.

**정리.** 레벨 $N$ 의 Hecke 고유형식 족에서 $\hat\phi$ 의 지지가 $(-2,2)$ 안이면, 일반 Riemann 가설 아래 일차 영점 밀도가 함수방정식의 부호에 따라 $\mathrm{O}^{+}$ 또는 $\mathrm{O}^{-}$ 커널과 일치한다. 지지를 좁히면 가설 없이 같은 결론이 나온다.[^2]

증명의 요지. $\lambda_f(p)$ 의 족 평균을 Petersson 공식이 Kloosterman 합으로 바꾸고, 그 합을 Weil 의 추정으로 누른다.

## 곡선족의 모노드로미

유한체 $\mathbb F_q$ 위의 종수 $g$ 곡선 $C$ 의 zeta 함수는

$$
Z(C,T)=\frac{P(T)}{(1-T)(1-qT)}
$$

이고 $P$ 는 차수 $2g$ 의 정수계수 다항식이다. [Weil 추측](deligne-weil-conjectures.md)이 $P$ 의 역근의 절댓값을 $q^{1/2}$ 로 주므로 역근을 $q^{1/2}e^{i\theta_j}$ 로 적을 수 있고, $\theta_j$ 가 크기 $2g$ 의 유니터리 심플렉틱 행렬의 고윳값 각이 된다.

**정리.** 곡선족의 기하적 모노드로미 군이 고전군 $G$ 와 같으면 $q\to\infty$ 에서 족의 Frobenius 각이 $G$ 의 [Haar 측도](haar-measure.md)로 등분포한다.[^3]

증명의 요지. 족을 밑공간 위의 층으로 보고 Frobenius 대각합의 적률을 층의 코호몰로지로 계산한다. 기하적 모노드로미가 $G$ 로 꽉 차면 불변량의 차원이 $G$ 의 표현론이 주는 값과 같고, Deligne 의 가중 정리가 나머지 항을 $q^{-1/2}$ 로 누른다.

초타원곡선족 $y^2=f(x)$ 에서 $f$ 의 차수가 $2g+1$ 이면 기하적 모노드로미가 $\mathrm{Sp}(2g)$ 다. 군 크기를 키우면 Haar 측도에서 고윳값 하나의 분포가 심플렉틱 커널로 수렴한다. 이차 지표의 $L$ 함수족이 같은 대칭형을 가질 것이라는 예측이 이 계산과 짝지어 나왔다.

## 임계점 비소멸 비율

$L(\tfrac12,f)=0$ 이면 $\tilde\gamma_f=0$ 인 영점이 있어 $D(f;\phi)$ 에 $\phi(0)$ 이 들어간다. $\phi\ge0$ 이고 $\phi(0)\gt 0$ 인 시험함수를 잡고 족에서 $L(\tfrac12,f)=0$ 인 원소의 비율을 $\varrho$ 라 하면

$$
\varrho\thinspace\phi(0)\le\frac{1}{\lvert\mathcal F(Q)\rvert}\sum\_{f\in\mathcal F(Q)}D(f;\phi)
$$

가 성립한다. 오른쪽이 $\int\phi\thinspace W_G$ 로 계산되므로 $\varrho$ 의 상한이 나오고, 그 비를 최소화하는 $\phi$ 를 고르면 비소멸 비율의 하한이 된다. 지지 범위 $\alpha$ 가 넓어질수록 고를 수 있는 $\phi$ 가 많아져 하한이 올라간다.

# 활용

- **타원곡선족의 랭크.** 타원곡선의 $L$ 함수족은 함수방정식의 부호에 따라 $\mathrm{O}^{+}$ 와 $\mathrm{O}^{-}$ 로 갈린다. $\mathrm{O}^{-}$ 커널의 델타 항이 임계점의 강제 영점이고, [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)의 랭크 등식을 통해 Mordell–Weil 랭크의 하한으로 읽는다.
- **Dirichlet L 함수의 비소멸.** [Dirichlet $L$ 함수](dirichlet-l-functions.md)족에서 $L(\tfrac12,\chi)\ne0$ 인 지표의 비율 하한을 위 논법으로 얻는다.
- **족의 대칭형 판정.** 수체의 $L$ 함수족에서 대칭형은 추측이지만, 같은 족을 유한체 위 곡선족으로 바꾸면 모노드로미 계산으로 정해진다. 곡선족 쪽의 군이 수체 쪽 족의 대칭형 예측을 준다.

[^1]: A. E. Özlük, C. Snyder, *Small zeros of quadratic $L$-functions*, Bull. Austral. Math. Soc. **47** (1993), 307–319.

[^2]: H. Iwaniec, W. Luo, P. Sarnak, *Low lying zeros of families of $L$-functions*, Publ. Math. IHÉS **91** (2000), 55–131.

[^3]: N. M. Katz, P. Sarnak, *Random Matrices, Frobenius Eigenvalues, and Monodromy*, AMS Colloquium Publications **45**, 1999. 대칭형 커널과 곡선족의 모노드로미 계산이 모두 이 책의 서술을 따른다.

# 연관 문서

## 선수지식

- [쌍 상관 추측](pair-correlation-conjecture.md)
- [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #probability #complex_analysis
