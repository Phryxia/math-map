# Witten 점근 추측과 Ohtsuki 급수

# 개요

**Witten 점근 추측(Witten's asymptotic expansion conjecture)** 은 3 차원 다양체의 [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)이 매개변수 $k$ 를 키울 때 어떤 꼴로 변하는지를 정한 추측이다. Witten 의 규격화에서 구면 $S^3$ 의 불변량은 $\sqrt{2/(k+2)}\thinspace\sin\big(\pi/(k+2)\big)$ 이고, $k$ 가 크면 $\sqrt2\thinspace\pi\thinspace(k+2)^{-3/2}$ 에 가깝다. 지수 $-3/2$ 와 계수 $\sqrt2\thinspace\pi$ 가 구면의 무엇에서 오는지는 불변량을 정의하는 유한합에 나타나지 않는다. Witten 은 $k\to\infty$ 에서 불변량이 다양체 위의 평탄 $\mathrm{SU}(2)$ 접속마다 하나씩 붙는 항들의 합이 되고, 각 항의 진동과 크기가 그 접속의 Chern–Simons 작용값과 [Reidemeister 비틀림](reidemeister-torsion.md)으로 정해진다고 추측했다.

# 직관

[Reshetikhin–Turaev 불변량](reshetikhin-turaev.md) $\tau_k(M)$ 은 [모듈러 텐서범주](modular-tensor-categories.md)의 $S$ [행렬](matrices.md)과 비틀림을 수술 링크 위에서 묶은 유한합이다. 구면이면 $\tau_k(S^3)=\sqrt{2/(k+2)}\thinspace\sin\big(\pi/(k+2)\big)$ 이고, $k$ 가 크면 $\sqrt2\thinspace\pi\thinspace(k+2)^{-3/2}$ 에 가깝다. 이 유한합만 보아서는 지수 $-3/2$ 가 구면의 어떤 양에서 오는지 알 수 없다.

Witten 은 $\tau_k(M)$ 을 [Chern–Simons 이론](chern-simons.md)의 경로적분 $\int\mathcal DA\thickspace e^{2\pi ik\thinspace\mathrm{CS}(A)}$ 로 보았다. 이 적분은 [측도](measure.md)가 정의되지 않아 증명에 쓸 수 없지만, 진동적분으로 보면 [정상위상법](stationary-phase.md)이 큰 $k$ 의 꼴을 예측한다. $k$ 가 크면 적분값은 위상 $\mathrm{CS}$ 의 임계점 근처에서 정해진다. $\mathrm{CS}$ 의 변분이 곡률 $F_A$ 에 비례하므로 임계점은 $F_A=0$ 인 평탄 접속이다.

평탄 $\mathrm{SU}(2)$ 접속의 게이지류는 준동형 $\pi_1(M)\to\mathrm{SU}(2)$ 의 켤레류와 같다. 구면은 $\pi_1(S^3)$ 이 자명하므로 평탄 접속이 자명한 접속 하나뿐이다. 정상위상법에서 평탄 접속 하나의 기여는 $k$ 의 거듭제곱에 비례하고, 그 지수는 접속이 평탄한 채로 움직일 수 있는 방향의 수에서 접속을 바꾸지 않는 게이지 대칭의 차원을 빼고 $2$ 로 나눈 값이다. 자명한 접속은 움직일 방향이 없고 $\mathrm{SU}(2)$ 전체가 그 접속을 바꾸지 않으므로, 지수가 $(0-3)/2=-3/2$ 다.

# 정의

## 평탄 접속의 자료

$M$ 을 닫힌 유향 3 차원 [다양체](manifolds.md), $\tau_k(M)$ 을 $\mathrm{SU}(2)$ 준위 $k$ 의 RT(Reshetikhin–Turaev) 불변량이라 한다. 평탄 $\mathrm{SU}(2)$ 접속 $\alpha$ 마다 다음 양을 둔다.

- $\mathrm{CS}(\alpha)\in\mathbb R/\mathbb Z$ 는 $\alpha$ 의 Chern–Simons 불변량이다.
- $h^i_\alpha=\dim H^i(M;\mathrm{ad}\thinspace\alpha)$ 는 $\alpha$ 로 비꼰 코호몰로지의 차원이다. $h^0_\alpha$ 는 $\alpha$ 의 안정자의 차원이다.
- $T_\alpha$ 는 $\alpha$ 로 비꼰 Reidemeister 비틀림이다.
- $I_\alpha$ 는 스펙트럼 흐름(spectral flow)에서 오는 정수다.

$S^3$ 의 자명한 접속 $\theta$ 에서는 $\mathrm{CS}(\theta)=0$, $h^0_\theta=3$, $h^1_\theta=0$ 이다. 렌즈 공간 $L(p,1)$ 에서는 $\pi_1=\mathbb Z/p$ 의 생성원을 $\mathrm{diag}(e^{2\pi ib/p},e^{-2\pi ib/p})$ 로 보내는 표현 $\rho_b$ 가 평탄 접속이고, $\mathrm{CS}(\rho_b)=-b^2/p$ 다.

## 점근 추측

**Witten 점근 추측(Witten's asymptotic expansion conjecture)** 은 평탄 접속의 모듈라이 공간 $\mathcal M(M)$ 의 점들이 고립되고 비퇴화일 때, $k\to\infty$ 에서

$$
\tau_k(M)\thickspace\sim\thickspace\sum_{\alpha\in\mathcal M(M)}e^{2\pi ik\thinspace\mathrm{CS}(\alpha)}\thickspace k^{(h^1_\alpha-h^0_\alpha)/2}\thickspace\sqrt{T_\alpha}\thickspace e^{i\pi I_\alpha/4}\cdot\big(c_\alpha+O(k^{-1})\big)
$$

가 성립한다는 추측이다. Witten 이 1989 년에 경로적분으로 예측했다.

- $S^3$ 에서는 합이 $\theta$ 한 항이고 $k$ 의 지수가 $(0-3)/2=-3/2$ 다. 직관 절의 $\sqrt2\thinspace\pi\thinspace(k+2)^{-3/2}$ 와 맞는다.

모듈라이가 고립되지 않으면 $\alpha$ 에 대한 합이 [연결성분](connectedness.md) 위의 적분으로 바뀐다.

## Ohtsuki 급수

$M$ 이 유리 [호몰로지](homology.md) 3 구면일 때, 자명한 접속 주위의 섭동전개를 $q=e^{2\pi i/(k+2)}$ 에 대한 형식적 [멱급수](power-series.md)

$$
\tau^{\mathrm{O}}(M)=\sum_{n\ge0}\lambda_n(M)\thinspace(q-1)^n,\qquad \lambda_n(M)\in\mathbb Q
$$

로 적은 것을 **Ohtsuki 급수(Ohtsuki series)** 라 한다. Ohtsuki 가 1996 년 $\tau_k(M)$ 의 정수론적 성질에서 계수 $\lambda_n$ 을 정의했다.

- $S^3$ 에서는 $\lambda_0=1$ 이고 $n\ge1$ 에서 $\lambda_n=0$ 이다.

# 성질

## Ohtsuki 급수의 계수

각 $\lambda_n$ 은 차수 $3n$ 의 유한형 불변량(finite type invariant)이다. 유한형이라는 것은 매듭을 따른 수술의 유한 차수 차분에서 소멸한다는 뜻이고, 매듭의 Vassiliev 불변량이 교차점 바꾸기의 차분으로 정의되는 것과 같은 꼴이다. 정규화를 맞추면 $\lambda_1=6\lambda_{\mathrm{C}}$ 이고, $\lambda_{\mathrm{C}}$ 는 [Casson 불변량](casson-invariant.md)이다.

Ohtsuki 급수는 Le–Murakami–Ohtsuki 의 LMO 불변량(Le–Murakami–Ohtsuki invariant)에서 유도된다. LMO 불변량은 정수 호몰로지 구면의 유한형 불변량을 모두 결정한다.

## Gauss 합 상호법칙

$q=e^{2\pi i/(k+2)}$ 가 1 의 거듭제곱근이므로 렌즈 공간의 $\tau_k$ 를 정의하는 $k+1$ 개 라벨의 합은 [이차 Gauss 합](gauss-sums.md)이다. 정수 $A,B,C$ 가 $AC\neq0$ 이고 $AC+B$ 가 짝수이면 다음 상호법칙이 성립한다.

$$
\sum_{a=0}^{\vert C\vert-1}e^{\pi i(Aa^2+Ba)/C}
=\Big\vert\frac CA\Big\vert^{1/2}e^{\pi i\left(\mathrm{sgn}(AC)-B^2/(AC)\right)/4}\sum_{b=0}^{\vert A\vert-1}e^{-\pi i(Cb^2+Bb)/A}
$$

$L(p,1)$ 에서는 $C$ 가 $2(k+2)$ 이고 $A=p$ 이다. 왼쪽의 $k$ 에 비례하는 개수의 항이 오른쪽의 $p$ 개 항으로 바뀌고, 오른쪽 항 $b$ 의 위상 $e^{-2\pi i(k+2)b^2/p}$ 에서 $k$ 의 계수 $-b^2/p$ 가 평탄 접속 $\rho_b$ 의 $\mathrm{CS}$ 값이다. 앞의 인수 $\vert C/A\vert^{1/2}$ 가 $\sqrt k$ 를 준다. 상호법칙이 등식이므로 렌즈 공간에서는 점근식이 오차 없이 성립한다.

## 증명된 범위

| 다양체족 | 증명 | 방법 |
|---|---|---|
| 렌즈 공간 $L(p,q)$ | Jeffrey | Gauss 합 상호법칙, 오차 없는 등식 |
| 원환면 다발 | Jeffrey | $\mathrm{SL}\_2(\mathbb Z)$ 표현의 명시적 대각화 |
| Seifert 올다양체 | Rozansky, Lawrence–Rozansky, Hikami | 상호법칙과 Poisson 합 |

세 경우 모두 $\pi_1(M)$ 의 $\mathrm{SU}(2)$ 표현을 명시적으로 셀 수 있고 $\tau_k$ 가 Gauss 합의 닫힌 꼴로 적힌다.[^1]

## 정상위상법의 정확성

렌즈 공간에서는 점근전개가 유한 항에서 끝나고 오차가 $0$ 이다. Seifert 다양체 위의 Chern–Simons 이론에서는 $S^1$ 작용에 대한 국소화(localization)가 성립하고(Beasley–Witten), 이것은 Duistermaat–Heckman 정리(Duistermaat–Heckman theorem)의 무한차원 판본이다.

## 볼륨 추측과의 비교

- Witten 점근 추측의 대상은 닫힌 3 다양체이고, 준위 $k\to\infty$ 에서 $q=e^{2\pi i/(k+2)}\to 1$ 이다. 지수에 나오는 것은 실수 $\mathrm{CS}$ 값이고, $\vert\tau_k\vert$ 는 $k$ 의 거듭제곱으로 거동한다.
- [볼륨 추측](volume-conjecture.md)의 대상은 $S^3$ 안의 매듭이고, 색 $N$ 과 $q=e^{2\pi i/N}$ 을 함께 움직인다. 복소 $\mathrm{SL}\_2(\mathbb C)$ 평탄 접속이 기여해 $\vert J_N\vert$ 가 $N$ 에 대해 지수적으로 자라고, 증가율이 여집합의 쌍곡 부피다.

복소 임계점의 기여를 다루는 틀이 [Resurgence 이론](resurgence.md)이다.

# 활용

- 렌즈 공간과 Seifert 올다양체에서 $\tau_k$ 의 닫힌 꼴로부터 평탄 접속의 $\mathrm{CS}$ 값과 Reidemeister 비틀림을 읽는다. $L(p,1)$ 의 $\mathrm{CS}(\rho_b)=-b^2/p$ 가 그 예다.
- 유리 호몰로지 구면에서 Ohtsuki 급수의 첫 계수로 Casson 불변량을 얻는다.
- 점근식의 각 항은 Chern–Simons 이론의 고전해 하나에 대응하므로, RT 불변량의 대수적 정의와 경로적분의 예측이 같은 값을 주는지 확인하는 기준이 된다.

[^1]: L. Jeffrey, *Chern–Simons–Witten invariants of lens spaces and torus bundles, and the semiclassical approximation*, Comm. Math. Phys. **147** (1992), 563–604. T. Ohtsuki, *A polynomial invariant of rational homology 3-spheres*, Invent. Math. **123** (1996), 241–257.

# 연관 문서

## 선수지식

- [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)
- [Chern–Simons 이론](chern-simons.md)
- [정상위상법](stationary-phase.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology #analysis #number_theory
