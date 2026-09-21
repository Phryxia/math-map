# 중심극한정리

# 개요

중심극한정리는 독립 확률변수들의 합을 표준화하면 그 분포가 원래 분포와 거의 무관하게 정규분포로 수렴한다는 정리다.

[큰 수의 법칙](law-of-large-numbers.md)이 표본평균이 어디로 가는지를 말한다면 중심극한정리는 그 오차의 크기와 모양을 말한다. 오차 규모가 $n$ 의 제곱근의 역수이고 모양이 정규분포라는 두 사실이 신뢰구간, 표준오차, 대표본 가설검정의 근거다. 합으로 만들어진 양은 개별 성분의 분포를 잊는다.

# 직관

동전 던지기 $n$ 번의 앞면 개수에서 $n=1$ 이면 분포는 두 점뿐이다. $n$ 이 커지면 이항계수가 만드는 종 모양이 나타나고, 평균으로 중심을 옮기고 표준편차로 척도를 맞추면 하나의 고정된 곡선에 붙는다. 출발 분포를 주사위나 지수분포로 바꿔도 같은 곡선이 나온다.

독립인 두 변수의 합의 분포는 각 분포의 합성곱이고 합성곱은 특성함수의 곱으로 바뀐다. 표준화한 합의 특성함수를 보면 정규분포의 특성함수가 이 곱셈 연산의 고정점이다.

척도의 선택이 결정적이다. $n$ 으로 나누면 요동이 죽어 상수만 남고, 나누지 않으면 요동이 무한히 커진다. $n$ 의 제곱근으로 나누는 것이 요동을 살려 두면서 수렴시키는 유일한 척도다.

# 정의

## 정규분포

평균 $m$ , 분산 $v$ 를 가진 정규분포의 밀도와 표준정규분포의 누적분포함수는 다음과 같다.

$$
f(t)=\frac{1}{\sqrt{2\pi v}}\exp\negthinspace\left(-\frac{(t-m)^2}{2v}\right),
\qquad
\Phi(x)=\int_{-\infty}^{x}\frac{1}{\sqrt{2\pi}}e^{-u^2/2}\thinspace du
$$

## 분포수렴

확률변수열 $Y_n$ 이 $Y$ 로 **분포수렴**한다는 것은 누적분포함수가 극한의 연속점마다 수렴한다는 뜻이다.

$$
F_{Y_n}(x)\to F_Y(x)\qquad(F_Y\text{가 }x\text{에서 연속인 모든 }x)
$$

확률수렴은 분포수렴을 함의하지만 역은 성립하지 않는다.

## 특성함수

확률변수 $X$ 의 [특성함수](characteristic-functions.md)는 다음으로 정의한다. 항상 존재하고 분포를 유일하게 결정한다.

$$
\varphi_X(t)=\mathbb E\negthinspace\left[e^{itX}\right]
$$

## Lindeberg–Lévy 중심극한정리

$X_1,X_2,\dots$ 를 i.i.d. 확률변수열이라 하고 기댓값 $\mu$ 와 분산 $v$ 가 존재하며 $v$ 가 0 보다 크고 유한하다고 하자. 표준편차를 $\sigma$ 라 쓰면 다음이 성립한다[^1].

$$
\frac{1}{\sigma\sqrt n}\sum_{i=1}^{n}(X_i-\mu)
=\frac{\sqrt n\thinspace(\overline X_n-\mu)}{\sigma}
\ \xrightarrow{\ d\ }\ N(0,1)
$$

곧 모든 실수 $x$ 에 대해 좌변이 $x$ 이하일 확률이 $\Phi(x)$ 로 수렴한다. 요구되는 조건은 독립, 동일분포, 유한하고 0 이 아닌 분산뿐이고 분포의 모양이나 고차 모멘트의 존재는 필요하지 않다.

# 성질

## 특성함수에 의한 증명

$Z_i$ 를 $X_i$ 에서 평균을 빼고 표준편차로 나눈 변수라 하자. 평균 0, 분산 1 이다. 2 차 모멘트가 존재하므로 특성함수가 0 근방에서 2 차까지 Taylor 전개된다.

$$
\varphi_Z(t)=1-\frac{t^2}{2}+o(t^2)\qquad(t\to0)
$$

독립성에서 합의 특성함수는 곱이므로 표준화한 합의 특성함수는 다음과 같다.

$$
\varphi_{S_n/\sqrt n}(t)=\left[\varphi_Z\negthinspace\left(\frac{t}{\sqrt n}\right)\right]^{n}
=\left[1-\frac{t^2}{2n}+o\negthinspace\left(\frac1n\right)\right]^{n}
\ \xrightarrow[n\to\infty]{}\ e^{-t^2/2}
$$

극한이 표준정규분포의 특성함수이므로 Lévy 연속성 정리를 적용하면 결론이 나온다. 논증의 무게는 나머지항 추정이 $t/\sqrt n$ 에서 균등하게 통제된다는 점과 Lévy 연속성 정리에 있다.

## Lindeberg 조건

동일분포를 가정하지 않는 독립열에서도 어느 한 항이 합을 지배하지 않으면 결론이 유지된다. 개별 분산의 합을 $s_n$ 의 제곱이라 할 때 Lindeberg 조건은 다음이다[^2].

$$
\forall \varepsilon\gt 0:\quad
\lim_{n\to\infty}\frac{1}{s_n^2}\sum_{i=1}^{n}
\mathbb E\negthinspace\left[(X_i-\mu_i)^2\thinspace\mathbf 1\lbrace|X_i-\mu_i|\gt\varepsilon s_n\rbrace\right]=0
$$

이 조건 아래 표준화한 합은 표준정규분포로 분포수렴한다(Lindeberg–Feller). $X_1$ 이 거대한 분산을 갖고 나머지가 작으면 조건이 깨지고 합의 분포가 $X_1$ 의 분포를 닮은 채 남는다.

## Berry–Esseen 부등식

3 차 절대적률이 유한하면 수렴 속도를 정량화할 수 있다. $F_n$ 을 표준화한 합의 누적분포함수, $\rho$ 를 중심화한 $X$ 의 3 차 절대적률이라 하면 절대상수 $C$ 가 존재해 다음이 성립한다.

$$
\sup_{x\in\mathbb R}\left|F_n(x)-\Phi(x)\right|\ \le\ \frac{C\thinspace\rho}{\sigma^3\sqrt n}
$$

i.i.d. 인 경우 알려진 최선의 상한은 $C\le0.4690$ 이고(Shevtsova, 2011) Esseen 이 준 하한은 약 0.4097 이다[^3]. 최적 상수는 2026 년 9 월 현재 결정되지 않았다. 오차는 $n$ 의 제곱근의 역수에 비례하고 비대칭이 심한 분포일수록 더 큰 $n$ 이 필요하다.

## 성립하지 않는 경우

분산이 무한하면 정규분포 극한이 사라진다. 꼬리가 무겁게 감소하는 분포(안정지수 $\alpha\lt 2$ )에서는 $n^{1/\alpha}$ 으로 나누어야 수렴하고 극한은 $\alpha$ 안정분포다. Cauchy 분포가 $\alpha=1$ 의 예로, 표본평균이 다시 Cauchy 분포라 집중조차 하지 않는다. 독립성이 심하게 깨진 경우도 결론이 달라지며, 약한 의존 아래에서는 극한 분산에 자기상관 항이 더해진다.

중심극한정리는 중심 근방의 근사만 보장한다. 표준편차의 몇 배를 넘어가는 꼬리 확률은 정규근사가 상대오차 기준으로 크게 틀릴 수 있고 그 영역은 대편차 이론이 다룬다.

# 활용

## 정규근사와 신뢰구간

모평균 $\mu$ 의 95% 신뢰구간은 중심극한정리에 표본표준편차 $s$ 를 대입해 얻는다. 1.96 은 $\Phi$ 의 0.975 분위수다.

$$
\left[\ \overline X_n-1.96\frac{s}{\sqrt n},\ \ \overline X_n+1.96\frac{s}{\sqrt n}\ \right]
$$

$\sigma$ 를 $s$ 로 바꿔도 되는 근거는 $s$ 가 $\sigma$ 로 확률수렴하고 Slutsky 정리가 이를 허용한다는 것이다. 같은 구조가 [가설검정](hypothesis-testing.md)의 z-검정과 [최대가능도 추정](maximum-likelihood.md)의 점근정규성에 재사용된다.

## 이항분포의 정규근사

$n$ 번 시행에서 성공 확률 $p$ 인 이항분포는 평균 $np$ , 분산 $np(1-p)$ 이므로 다음 근사를 쓴다(de Moivre–Laplace).

$$
P(S_n\le k)\approx\Phi\negthinspace\left(\frac{k+\tfrac12-np}{\sqrt{np(1-p)}}\right)
$$

0.5 를 더하는 연속성 보정은 이산 분포를 연속 분포로 바꾸는 데서 오는 체계적 편향을 줄인다. $p$ 가 0 이나 1 에 가까우면 $\rho$ 가 커져 정규근사가 나빠지고, 그때는 Poisson 근사가 낫다.

## Monte Carlo 오차 막대

Monte Carlo 추정의 표준오차는 표본표준편차를 $n$ 의 제곱근으로 나눈 값이다. 오차를 10 분의 1 로 줄이려면 표본을 100 배로 늘려야 한다.

## 다른 모형으로의 확장

측정오차가 여러 작은 독립 요인의 합이라는 모형은 오차의 정규성을 설명한다. 요인들이 곱으로 쌓이면 로그를 취해 중심극한정리를 적용하고 극한은 로그정규분포가 된다. 그래프나 조합 구조에서 세는 양의 극한분포에도 같은 정리가 쓰인다.

[^1]: F. W. Scholz, "Central Limit Theorems and Proofs", Math/Stat 394 lecture notes, University of Washington (Lindeberg–Lévy 진술과 특성함수 증명). https://faculty.washington.edu/fscholz/DATAFILES394_2019/CLT.pdf
[^2]: "Lindeberg-Feller Central Limit Theorem", Wolfram MathWorld. https://mathworld.wolfram.com/Lindeberg-FellerCentralLimitTheorem.html
[^3]: I. G. Shevtsova, "On the absolute constants in the Berry–Esseen type inequalities for identically distributed summands" (2011); 동일분포 경우 상한 0.4690. 2026년 9월 13일 확인. https://www.semanticscholar.org/paper/c215cdc4ebd6a814d98254c18dbc58a7cd9befe9

# 연관 문서

## 선수지식

- [큰 수의 법칙](law-of-large-numbers.md)
- [분포 수렴과 Prokhorov 정리](weak-convergence.md)

## 더 알아보기

- [가설검정](hypothesis-testing.md)
- [신뢰구간](confidence-intervals.md)
- [Brown 운동](brownian-motion.md)
- [Wigner 반원법칙](wigner-semicircle.md)

#probability #statistics #measure_theory #theorem
