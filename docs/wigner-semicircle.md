# Wigner 반원법칙

# 개요

**Wigner 반원법칙(Wigner semicircle law)** 은 성분을 무작위로 뽑은 큰 대칭행렬의 [고윳값](eigenvalues.md)이 어떤 분포로 퍼지는지를 정하는 정리다. 예로 $1000\times 1000$ 대칭행렬의 성분을 동전 던지기로 $\pm 1$ 로 정하고 고윳값 1000 개의 히스토그램을 그리면, 성분을 다른 분포로 뽑아도 같은 반원 모양이 나온다. 이 정리는 그 반원의 식을 주고, [행렬](matrices.md) 크기가 커질 때 크기를 맞춘 히스토그램이 그 식으로 수렴함을 보인다.

# 직관

$N\times N$ 대칭행렬 $H$ 의 성분을 $i\le j$ 마다 동전 던지기로 $\pm1$ 로 정하고 $h_{ji}=h_{ij}$ 로 채운다. $N=1000$ 이면 고윳값이 1000 개이고, 그 히스토그램의 모양이 물음이다. 고윳값을 성분으로 적는 식은 없다. 대신 고윳값의 $k$ 제곱을 모두 더한 값은 $\mathrm{tr}H^k$ 이고, 이것은 성분의 곱의 합으로 적힌다. 히스토그램의 적률을 $\mathrm{tr}H^k$ 로 계산한다.

고윳값은 $\sqrt N$ 규모로 퍼지므로 $A=H/\sqrt N$ 으로 나눈다. $\frac1N\mathbb E\lbrack\mathrm{tr}A^{k}\rbrack$ 를 성분으로 펼치면 $\lbrace 1,\dots,N\rbrace$ 위의 길이 $k$ 짜리 닫힌 경로 전부를 훑는 합이 된다.

$$
\frac{1}{N}\mathbb E\bigl\lbrack\mathrm{tr}A^{k}\bigr\rbrack
= \frac{1}{N^{1+k/2}}\sum_{i_1,\dots,i_k}\mathbb E\bigl\lbrack h_{i_1i_2}h_{i_2i_3}\cdots h_{i_ki_1}\bigr\rbrack
$$

성분의 평균이 0 이므로 어떤 변을 한 번만 지나는 경로는 기댓값이 0 이다. 남는 경로는 모든 변을 두 번 이상 지나므로 $k$ 가 홀수면 극한에서 기여가 없다. $k=2m$ 일 때 주항은 $m$ 개의 변으로 된 나무를 한 바퀴 도는 경로이고, 그 모양의 개수가 [Catalan 수](catalan-numbers.md) $C_m=\frac{1}{m+1}\binom{2m}{m}$ 이다. 정점을 고르는 방법이 $N^{m+1}$ 가지이고 규격화 인자가 $N^{-(1+m)}$ 이므로 극한에서 $C_m$ 이 남는다.

$$
\lim_{N\to\infty}\frac1N\mathbb E\bigl\lbrack\mathrm{tr}A^{2m}\bigr\rbrack = C_m
$$

$m=1$ 이면 $\frac1N\mathbb E\mathrm{tr}A^2=\frac{1}{N^2}\sum_{i,j}\mathbb Eh_{ij}^2=1=C_1$ 이다. 남는 항은 각 변을 두 번 쓰므로 성분의 분산만 들어가고, 변을 네 번 이상 쓰는 항은 $N$ 의 거듭제곱이 모자라 사라진다. 그래서 동전 대신 다른 분포로 성분을 뽑아도 같은 적률 $1,2,5,14,\dots$ 이 나온다. 이 적률을 갖는 분포의 밀도가 $\frac{1}{2\pi}\sqrt{4-x^2}$ 이고, 그래프가 반원 모양이다.

# 정의

## Wigner 행렬

실 대칭 $N\times N$ 행렬 $H$ 의 성분 $\lbrace h_{ij}\rbrace\_{i\le j}$ 가 독립이고 $i\lt j$ 마다 $\mathbb E h_{ij}=0$ , $\mathbb E h_{ij}^2=1$ 이며 대각 성분의 분산과 모든 적률이 유한할 때 $H$ 를 **Wigner 행렬(Wigner matrix)** 이라 한다. 규격화는 $A=H/\sqrt N$ 이다. 직관 절의 동전 행렬은 $h_{ij}=\pm1$ 이 평균 $0$, 분산 $1$ 이므로 Wigner 행렬이다.

## 경험스펙트럼측도

$A$ 의 고윳값 $\lambda_1\le\cdots\le\lambda_N$ 에 대해 다음을 **경험스펙트럼측도(empirical spectral measure)** 라 한다.

$$
\mu_N = \frac1N\sum_{i=1}^{N}\delta_{\lambda_i}
$$

고윳값마다 질량 $1/N$ 을 둔 확률측도이고, 고윳값 히스토그램을 측도로 쓴 것이다. $N=2$ 에서 동전이 $h_{11}=h_{12}=h_{22}=1$ 을 주면 $H$ 의 고윳값이 $0,2$ 이고 $A=H/\sqrt2$ 의 고윳값이 $0,\sqrt2$ 이므로 $\mu_2=\tfrac12(\delta_0+\delta_{\sqrt2})$ 다. $\int x^k\thinspace d\mu_N=\frac1N\mathrm{tr}A^k$ 이다.

## 반원분포

다음 밀도를 갖는 $\mathbb R$ 위의 확률분포를 **반원분포(semicircle distribution)** 라 한다.

$$
\rho_{\mathrm{sc}}(x) = \frac{1}{2\pi}\sqrt{4 - x^2}, \qquad x \in \lbrack -2, 2\rbrack
$$

$x=0$ 에서 밀도가 $1/\pi\approx 0.32$ 로 가장 크고, $\pm2$ 에서 $0$ 이다.

## Stieltjes 변환

[측도](measure.md) $\mu$ 의 **Stieltjes 변환(Stieltjes transform)** 을 $z\in\mathbb C^+$ 에 대해 다음으로 정의한다.

$$
m_\mu(z) = \int \frac{d\mu(x)}{x - z}
$$

한 점 $0$ 에 실린 측도 $\delta_0$ 이면 $m(z)=-1/z$ 다. 경험스펙트럼측도이면 $m_{\mu_N}(z)=\frac1N\mathrm{tr}\bigl(A - zI\bigr)^{-1}$ 이다.

# 성질

## 반원법칙

Wigner 행렬의 $\mu_N$ 은 $N\to\infty$ 에서 반원분포로 [약수렴](weak-convergence.md)하고, 거의 확실한 수렴까지 성립한다[^1]. 이것이 Wigner 반원법칙이다. 극한이 성분의 분포에 의존하지 않으므로 [중심극한정리](central-limit-theorem.md)와 같은 꼴의 보편성 정리다.

증명의 요지는 직관 절의 적률 계산이다. $\mathbb E\int x^{k}\thinspace d\mu_N$ 이 반원분포의 적률로 수렴하고, 반원분포는 받침이 유계여서 적률로 유일하게 정해진다. 수의 중심극한정리에서는 모든 짝짓기가 기여해 $2m$ 번째 적률이 $(2m-1)!!$ 이 되고 [정규분포](normal-distribution.md)가 나온다. 행렬에서는 교차하는 짝짓기가 $N$ 의 차수에서 모자라 사라지고 비교차 짝짓기만 남아 개수가 $C_m$ 이 된다.

## 적률과 Catalan 수

$$
\int_{-2}^{2}x^{2m}\rho_{\mathrm{sc}}(x)\thinspace dx = C_m = \frac{1}{m+1}\binom{2m}{m}, \qquad \int x^{2m+1}\rho_{\mathrm{sc}} = 0
$$

곧 짝수 적률이 $1,2,5,14,42,132,\dots$ 이다.

## Stieltjes 변환에 의한 증명

$\lim_{\eta\to0}\frac1\pi\mathrm{Im}\thinspace m(x+i\eta)=\rho(x)$ 로 측도가 Stieltjes 변환에서 유일하게 정해지고, 약수렴이 각 $z$ 에서의 수렴과 동치다. 그래서 반원법칙을 $m_{\mu_N}(z)$ 의 수렴으로 증명할 수 있다.

레졸벤트(resolvent) $(A-zI)^{-1}$ 의 대각 성분을 [Schur 보완](schur-complement.md)으로 전개하면 $N\to\infty$ 에서 자기무모순 방정식(self-consistent equation)이 나온다.

$$
m(z) = \frac{1}{-z - m(z)}, \qquad\text{즉}\qquad m^2 + zm + 1 = 0
$$

행 하나를 지운 나머지 행렬이 같은 종류의 Wigner 행렬이고 같은 극한을 가지므로, 방정식이 $m$ 하나로 닫힌다. 무한대에서 $m\sim-1/z$ 인 가지를 고르면

$$
m(z) = \frac{-z + \sqrt{z^2-4}}{2}
$$

이고, 허수부를 취하면 반원밀도가 나온다.

## 가장자리

반원의 받침은 $\lbrack -2,2\rbrack$ 이고 밀도가 양 끝에서 $\sqrt{2-\lvert x\rvert}$ 에 비례해 사라진다. 최대 고윳값은 $2$ 로 수렴하고 그 요동은 $N^{-2/3}$ 규모에서 보이며 극한이 [Tracy–Widom 분포](tracy-widom.md)다. 반원법칙이 [큰 수의 법칙](law-of-large-numbers.md)에 해당하고 Tracy–Widom 분포가 가장자리의 요동 정리에 해당한다.

받침 밖에 고윳값이 나타나기도 한다. 계수가 낮은 결정론적 행렬을 더하면 그 크기가 임계값을 넘을 때 고윳값 하나가 반원에서 떨어져 나온다. 이것을 BBP 전이(Baik–Ben Arous–Péché transition)라 한다. 자료분석에서 신호를 검출할 때 이 떨어져 나온 고윳값을 본다.

## 자유 중심극한정리

[자유확률](free-probability.md)의 비가환 확률공간에서는 자유독립(free independence)이 고전적 독립을 대신한다. 자유독립인 성분들의 규격화된 합은 반원분포로 수렴하고, 이것을 자유 중심극한정리(free central limit theorem)라 한다. 자유 누율(free cumulant)에서 2 차만 0 이 아닌 분포가 반원분포이고, 고전 누율에서 2 차만 0 이 아닌 것이 정규분포다. 큰 무작위 행렬들이 점근적으로 자유독립이라는 Voiculescu 정리(Voiculescu's theorem)로 무작위 행렬의 합과 곱의 극한 스펙트럼을 자유확률로 계산한다.

# 활용

- Wigner 가 1955 년 무거운 원자핵의 에너지 준위를 설명하려고 도입했다. Hamilton 연산자(Hamiltonian)의 행렬 성분을 무작위로 놓고 준위의 통계만 예측하는 방식이었고, 준위 간격의 분포가 실측과 맞았다.
- 무작위 [그래프](graphs.md)의 인접행렬 스펙트럼이 반원법칙을 따르고, 그 가장자리 성질이 [Expander 그래프](expander-graphs.md)의 스펙트럼 간극과 연결된다.
- 자료분석에서는 표본공분산행렬(sample covariance matrix)의 고윳값 분포([Marchenko–Pastur 법칙](marchenko-pastur.md))를 잡음의 기준선으로 삼아 주성분의 유의성을 판정한다.
- 무선통신의 채널 용량, 무질서계의 국소화, [Riemann zeta 함수](riemann-zeta.md) 영점의 간격 통계에서도 같은 종류의 예측이 쓰인다.

[^1]: Greg W. Anderson, Alice Guionnet, Ofer Zeitouni, *An Introduction to Random Matrices*, Cambridge (2010), §2.1 (적률법에 의한 반원법칙), §2.4 (Stieltjes 변환과 자기무모순 방정식).

# 연관 문서

## 선수지식

- [고윳값](eigenvalues.md)
- [중심극한정리](central-limit-theorem.md)

## 더 알아보기

- [Marchenko–Pastur 법칙](marchenko-pastur.md)
- [Tracy–Widom 분포](tracy-widom.md)
- [자유확률](free-probability.md)
- [양자 혼돈](quantum-chaos.md)

#probability #linear_algebra #theorem
