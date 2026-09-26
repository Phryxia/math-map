# Siegel 모듈라이 다양체

# 개요

Siegel 모듈라이 다양체는 $g$ 차원 주편극 [아벨 다양체](abelian-varieties.md)의 동형류를 점으로 갖는 공간이다. 주기행렬을 정규형으로 줄이면 대칭이고 허수부가 양정부호인 $g\times g$ 행렬 하나가 남고, 남은 기저의 자유도가 정수 심플렉틱 군의 작용이다. 그 몫이 차원 $g(g+1)/2$ 의 준사영 대수다양체다.

# 직관

차원 $1$ 의 복소 토러스 $\mathbb C/\Lambda$ 를 전부 적는다. 격자 $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ 에 $1/\omega_1$ 을 곱해도 토러스가 바뀌지 않으므로 $\Lambda=\mathbb Z+\mathbb Z\tau$ 로 둘 수 있고, 기저의 순서를 골라 $\mathrm{Im}\thinspace\tau\gt 0$ 으로 맞춘다. 남은 자유도는 격자의 다른 기저를 고르는 것뿐이고, 그 변환이 $\mathrm{SL}\_2(\mathbb Z)$ 다. 그래서 토러스의 목록은 $\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H$ 의 점이다.

차원 $g$ 에서 같은 계산을 한다. $\Lambda\subset\mathbb C^g$ 는 계수 $2g$ 의 격자이고 기저를 열로 늘어놓으면 $g\times 2g$ 행렬 $\Omega$ 다. 뒤쪽 $g$ 개 열이 $\mathbb C$ 위에서 일차독립이 되게 기저를 고르고 그 역행렬을 곱하면 $\Omega=(\tau\ \ I_g)$ 가 된다. 남은 것은 $g\times g$ 복소행렬 $\tau$ 하나, 곧 $g^2$ 개의 수다.

$g=1$ 과 달라지는 것이 여기서 나온다. $g\ge 2$ 에서는 $\tau$ 를 아무렇게나 잡은 토러스가 사영공간에 들어가지 않는다. 사영성을 주는 선다발, 곧 주편극이 있으면 $\tau$ 가 대칭이고 $\mathrm{Im}\thinspace\tau$ 가 양정부호라야 한다. 자유도는 $g^2$ 에서 $g(g+1)/2$ 로 줄고 $g=1$ 이면 $1$ 그대로다.

격자의 기저를 바꾸는 자유도도 $g=1$ 의 $\mathrm{SL}\_2(\mathbb Z)$ 에서 바뀐다. 편극이 격자 위에 교대형식을 놓으므로 그 형식을 보존하는 기저 변환만 같은 편극 아벨 다양체를 준다. 그 변환이 $\mathrm{Sp}\_{2g}(\mathbb Z)$ 이고, $\tau$ 의 공간을 이 군으로 나눈 것이 목록이다.

# 정의

**Siegel 상반공간**은 대칭이고 허수부가 양정부호인 복소행렬의 집합이다.

$$\mathbb H_g=\lbrace\tau\in M_g(\mathbb C):\tau^{\mathsf T}=\tau,\ \mathrm{Im}\thinspace\tau\gt 0\rbrace$$

$\mathrm{Im}\thinspace\tau\gt 0$ 은 실대칭행렬 $\mathrm{Im}\thinspace\tau$ 가 양정부호라는 뜻이다. $\mathbb H_g$ 는 $\mathbb C^{g(g+1)/2}$ 의 열린 부분집합이고 $\mathbb H_1=\mathbb H$ 다.

## 심플렉틱 군의 작용

$J=\begin{pmatrix}0&I_g\cr -I_g&0\end{pmatrix}$ 에 대해 $\mathrm{Sp}\_{2g}(\mathbb Z)=\lbrace\gamma\in \mathrm{GL}\_{2g}(\mathbb Z):\gamma^{\mathsf T}J\gamma=J\rbrace$ 라 하자. $\gamma$ 를 $g\times g$ 블록으로 나누면 작용은 다음과 같다.

$$\gamma=\begin{pmatrix}A&B\cr C&D\end{pmatrix},\qquad \gamma\cdot\tau=(A\tau+B)(C\tau+D)^{-1}$$

$C\tau+D$ 는 $\tau\in\mathbb H_g$ 에서 가역이고 결과가 다시 $\mathbb H_g$ 에 있다. $g=1$ 이면 $\mathrm{Sp}\_2(\mathbb Z)=\mathrm{SL}\_2(\mathbb Z)$ 이고 이 작용이 일차분수변환이다.

## Siegel 모듈라이 다양체

**Siegel 모듈라이 다양체**는 이 작용의 몫이다.

$$\mathcal A_g=\mathrm{Sp}\_{2g}(\mathbb Z)\backslash\mathbb H_g$$

$\mathcal A_g$ 의 점과 $g$ 차원 주편극 복소 아벨 다양체의 동형류가 일대일로 대응한다. $\tau$ 에 대응하는 것은 $\mathbb C^g/(\tau\mathbb Z^g+\mathbb Z^g)$ 이고 편극은 $J$ 가 주는 교대형식이다.

## 레벨 구조

$N\ge 1$ 에 대해 주합동 부분군 $\Gamma_g(N)=\lbrace\gamma\in \mathrm{Sp}\_{2g}(\mathbb Z):\gamma\equiv I_{2g}\ (\mathrm{mod}\ N)\rbrace$ 를 쓰면 $\mathcal A_g(N)=\Gamma_g(N)\backslash\mathbb H_g$ 다. 이 공간의 점은 주편극 아벨 다양체와 그 $N$ 등분점 위의 심플렉틱 기저의 쌍이다.

# 성질

## 차원과 $g=1$ 의 경우

$\dim\mathcal A_g=g(g+1)/2$ 다. $g=1$ 이면 차원이 $1$ 이고 $\mathcal A_1=\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H$ 로 [모듈러 곡선](modular-curves.md) $Y(1)$ 과 같다. $j$ 불변량이 이 몫과 $\mathbb C$ 사이의 동형이다.

## 준사영성

$\mathcal A_g$ 는 $\mathbb Q$ 위에서 정의된 준사영 대수다양체의 복소점 집합이다[^1]. 증명의 요지. 가중치가 충분히 큰 [Siegel 모듈러 형식](siegel-modular-forms.md)들이 몫 위의 함수를 주고, 그 형식들이 만드는 등급환의 $\mathrm{Proj}$ 가 $\mathcal A_g$ 를 열린 부분집합으로 포함하는 사영다양체다.

## 궤도체 구조

$-I_{2g}$ 는 모든 $\tau$ 를 고정하므로 작용이 자유롭지 않고 $\mathcal A_g$ 는 매끄러운 다양체가 아니다. $N\ge 3$ 이면 $\Gamma_g(N)$ 이 자유롭게 작용하고 $\mathcal A_g(N)$ 이 매끄러우며, $\mathcal A_g$ 는 유한군 $\mathrm{Sp}\_{2g}(\mathbb Z/N)$ 에 의한 그 몫이다.

## 콤팩트화

$\mathcal A_g$ 는 콤팩트하지 않다. Baily–Borel 콤팩트화는 낮은 차원의 모듈라이 다양체를 경계로 붙인다.

$$\mathcal A_g^\ast=\mathcal A_g\sqcup\mathcal A_{g-1}\sqcup\cdots\sqcup\mathcal A_0$$

경계의 여차원이 $g$ 이므로 $g\ge 2$ 에서는 경계가 매우 특이하고, 특이점을 고르게 펴려면 원환면 매장을 쓰는 콤팩트화를 택한다. $g=1$ 이면 경계가 한 점이고 이 콤팩트화가 첨점을 채우는 것과 같다.

## Torelli 사상

종수 $g$ 의 콤팩트 [Riemann 곡면](riemann-surfaces.md)에 그 Jacobian 을 대응시키면 곡선의 모듈라이 공간에서 $\mathcal A_g$ 로 가는 사상 $t:\mathcal M_g\to\mathcal A_g$ 가 나온다. Torelli 정리는 $t$ 가 단사임을 말한다. 곧 주편극 Jacobian 이 곡선의 동형류를 결정한다.

두 공간의 차원은 $g\ge 2$ 에서 $\dim\mathcal M_g=3g-3$ 과 $\dim\mathcal A_g=g(g+1)/2$ 다. $g=2,3$ 에서 두 수가 같고 $g\ge 4$ 에서 앞이 작으므로 $t$ 의 상이 진부분다양체다. 어떤 $\tau$ 가 Jacobian 에서 오는지를 방정식으로 가리는 것이 **Schottky 문제**이고, $g=4$ 에서는 theta 상수들의 다항식 하나가 그 상의 닫힘을 정의한다[^2].

# 활용

- **Siegel 모듈러 형식.** $\mathbb H_g$ 위의 정칙함수로 $f(\gamma\cdot\tau)=\det(C\tau+D)^k f(\tau)$ 를 만족하는 것이 가중치 $k$ 의 Siegel 모듈러 형식이고, $\mathcal A_g$ 위 선다발의 절단이다. $g=1$ 이면 [모듈러 형식](modular-forms.md)의 정의와 같다.
- **theta 함수.** [theta 급수](theta-series.md)의 변수 $\tau$ 가 $\mathbb H_g$ 를 달리고, 등분점에서 잰 theta 상수들이 $\mathcal A_g(N)$ 을 사영공간에 넣는다. Schottky 문제의 방정식도 이 상수들로 쓴다.
- **Shimura 다양체.** $\mathcal A_g$ 는 심플렉틱 군에 딸린 Shimura 다양체이고, 그 코호몰로지 위의 Hecke 작용과 [Galois 표현](galois-representations.md)의 대응이 Langlands 대응의 한 경우다.
- **아벨 곡면의 산술.** $g=2$ 에서 $\mathcal A_2$ 의 유리점 계산이 종수 $2$ 곡선의 Jacobian 분류로 옮겨진다.

[^1]: W. L. Baily and A. Borel, "Compactification of Arithmetic Quotients of Bounded Symmetric Domains", Annals of Mathematics **84** (1966), 442–528.

[^2]: F. Schottky, "Zur Theorie der Abelschen Functionen von vier Variabeln", Journal für die reine und angewandte Mathematik **102** (1888), 304–352. $g=4$ 에서 이 다항식의 영점이 Jacobian 궤적의 닫힘과 같다는 증명은 J. Igusa, "On the Irreducibility of Schottky's Divisor", Journal of the Faculty of Science, University of Tokyo **28** (1981), 531–545.

# 연관 문서

## 선수지식

- [모듈러 곡선](modular-curves.md)
- [아벨 다양체](abelian-varieties.md)

## 더 알아보기

- [Siegel 모듈러 형식](siegel-modular-forms.md)

#number_theory #algebra #complex_analysis
