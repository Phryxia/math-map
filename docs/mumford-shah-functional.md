# Mumford–Shah 범함수

# 개요

**Mumford–Shah 범함수(Mumford–Shah functional)** 는 잡음이 섞인 영상을 매끄러운 조각들과 그 조각을 가르는 경계선으로 나누는 문제를 에너지의 최소화로 적은 범함수다. 사진에서 물체의 윤곽을 찾을 때, 밝기가 급하게 바뀌는 곳을 모두 경계로 보면 잡음까지 경계가 되고 경계를 하나도 두지 않으면 윤곽이 흐려진다.

Mumford–Shah 범함수는 경계의 길이에 비용을 매겨, 밝기의 차가 그 비용을 넘는 곳에만 경계를 둔다.

# 직관

구간 $\lbrack -1,1\rbrack$ 위의 영상 $g$ 가 $x\lt 0$ 에서 $0$, $x\ge 0$ 에서 높이 $h$ 라 하자. 근사 $u$ 를 찾는 비용은 기울기의 크기 $\int u'^2$ 과 영상과의 차 $\alpha\int(u-g)^2$ 의 합이다. 첫째 항은 $u$ 가 매끄럽기를, 둘째 항은 $u$ 가 $g$ 에 가깝기를 요구한다.

경계를 두지 않으면 $u$ 는 $0$ 근처의 폭 $1/\sqrt\alpha$ 정도의 구간에서 $0$ 에서 $h$ 로 오른다. 방정식 $u''=\alpha(u-g)$ 를 풀면 그 비용은 $\alpha$ 가 크고 구간이 길 때 $h^2\sqrt\alpha/2$ 에 가깝다. 점 $0$ 을 경계로 두고 그 양쪽에서 $u=g$ 로 두면 기울기와 차의 비용은 $0$ 이다. 경계 하나에 비용 $\beta$ 를 매기면, $h^2\sqrt\alpha/2\gt\beta$ 일 때 경계를 두는 쪽이 싸다.

그러므로 높이 $h$ 가 문턱 $\sqrt{2\beta}\thinspace\alpha^{-1/4}$ 를 넘는 곳에서만 경계가 생긴다. 잡음처럼 작은 차이는 매끄럽게 펴지고, 물체의 윤곽처럼 큰 차이는 경계가 된다.

# 정의

$\Omega\subset\mathbb R^2$ 는 유계 열린집합이고 $g\in L^\infty(\Omega)$ 는 영상이며 $\alpha,\beta\gt 0$ 이다. 닫힌집합 $K\subset\overline\Omega$ 와 $\Omega\setminus K$ 에서 매끄러운 함수 $u$ 의 쌍에 다음 값을 주는 범함수를 **Mumford–Shah 범함수** 라 한다[^1].

$$
\mathrm{MS}(u,K)=\int_{\Omega\setminus K}\vert\nabla u\vert^2dx+\alpha\int_\Omega(u-g)^2dx+\beta\thinspace\mathcal H^1(K)
$$

$\mathcal H^1(K)$ 는 $K$ 의 길이이고, [Hausdorff 차원](hausdorff-dimension.md) 문서의 1차원 Hausdorff 측도다. 직관 절은 $\Omega$ 를 구간으로, $\mathcal H^1$ 을 점의 개수 $\mathcal H^0$ 으로 바꾼 경우다. $n$ 차원 영역에서는 $\mathcal H^{n-1}(K)$ 를 쓴다.

# 성질

## 약한 꼴과 존재

$K$ 와 $u$ 를 함께 움직이는 문제에는 직접법을 바로 쓸 수 없다. 닫힌집합의 열에서 길이가 하반연속이 아니기 때문이다. De Giorgi, Carriero, Leaci 는 $K$ 를 $u$ 의 도약 집합 $S_u$ 로 바꾼 약한 꼴을 [유계변동 함수](bounded-variation.md)의 부분공간 $\mathrm{SBV}(\Omega)$ 에서 풀었다[^2]. $\mathrm{SBV}$ 는 도함수가 절대연속 부분과 도약 부분만 갖고 Cantor 부분이 없는 유계변동 함수, 곧 특수 유계변동 함수(special function of bounded variation)의 공간이다.

$$
\int_\Omega\vert\nabla u\vert^2dx+\alpha\int_\Omega(u-g)^2dx+\beta\thinspace\mathcal H^{n-1}(S_u)
$$

Ambrosio 의 $\mathrm{SBV}$ 콤팩트성 정리로 이 약한 꼴은 최소점을 가진다. 최소점의 도약 집합의 닫힘 $K=\overline{S_u}$ 는 $\mathcal H^{n-1}(K\setminus S_u)=0$ 을 만족하고, $(u,K)$ 가 원래 범함수의 최소점이다[^2].

## Mumford–Shah 추측

Mumford–Shah 추측(Mumford–Shah conjecture)은 평면에서 최소점의 경계 $K$ 가 유한 개의 $C^1$ 곡선으로 되어 있고, 곡선은 세 개가 $120°$ 로 만나거나 한 끝이 경계 없이 끝나는 것뿐이라는 진술이다[^1]. 경계가 길이로 잰 거의 모든 점 근처에서 $C^{1,\alpha}$ 곡선이라는 것은 증명되었다[^3].

## Ambrosio–Tortorelli 근사

경계 집합을 $0$ 근처의 값으로 경계를 표시하는 함수 $v:\Omega\to\lbrack 0,1\rbrack$ 로 바꾼다. 작은 $\eta\_\varepsilon$ 을 두고 다음 범함수를 정의한다.

$$
\mathrm{AT}\_\varepsilon(u,v)=\int_\Omega(v^2+\eta\_\varepsilon)\vert\nabla u\vert^2+\alpha\int_\Omega(u-g)^2+\beta\int_\Omega\Bigl(\varepsilon\vert\nabla v\vert^2+\frac{(1-v)^2}{4\varepsilon}\Bigr)
$$

$\eta\_\varepsilon=o(\varepsilon)$ 이면 $\mathrm{AT}\_\varepsilon$ 은 $L^2$ 에서 약한 꼴의 Mumford–Shah 범함수로 [Γ 수렴](gamma-convergence.md)한다[^4]. 마지막 항에서 $v$ 가 $1$ 에서 $0$ 으로 내려갔다 다시 $1$ 로 오르는 폭 $\varepsilon$ 의 층 하나의 비용이 $1$ 이어서, 층이 놓인 곡선의 길이의 $\beta$ 배가 된다.

# 활용

- 영상 분할. 영상을 같은 물체에 속하는 영역들로 나누고 그 윤곽 $K$ 를 얻는다. 수치로는 Ambrosio–Tortorelli 범함수를 $u$ 와 $v$ 에 대해 번갈아 최소화한다. 각 단계가 선형 타원형 방정식이다.
- 취성 파괴. Francfort 와 Marigo 는 Griffith 의 파괴 이론을 탄성 에너지와 균열 길이의 합의 최소화로 적었다[^5]. 그 범함수는 $\alpha$ 항을 경계 하중으로 바꾼 Mumford–Shah 꼴이고, 균열의 진행을 Ambrosio–Tortorelli 근사로 계산한다.
- 자유 불연속 문제. 미지의 불연속 집합과 그 밖의 함수를 함께 정하는 문제를 $\mathrm{SBV}$ 에서의 최소화로 다루는 방법이 이 범함수에서 나왔다.

[^1]: D. Mumford, J. Shah, "Optimal approximations by piecewise smooth functions and associated variational problems", *Communications on Pure and Applied Mathematics* **42** (1989), 577–685.

[^2]: E. De Giorgi, M. Carriero, A. Leaci, "Existence theorem for a minimum problem with free discontinuity set", *Archive for Rational Mechanics and Analysis* **108** (1989), 195–218.

[^3]: L. Ambrosio, N. Fusco, D. Pallara, *Functions of Bounded Variation and Free Discontinuity Problems*, Oxford University Press (2000), Chapter 8.

[^4]: L. Ambrosio, V. M. Tortorelli, "Approximation of functionals depending on jumps by elliptic functionals via Γ-convergence", *Communications on Pure and Applied Mathematics* **43** (1990), 999–1036.

[^5]: G. A. Francfort, J.-J. Marigo, "Revisiting brittle fracture as an energy minimization problem", *Journal of the Mechanics and Physics of Solids* **46** (1998), 1319–1342.

# 연관 문서

## 선수지식

- [Γ 수렴](gamma-convergence.md)
- [유계변동 함수](bounded-variation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #optimization
