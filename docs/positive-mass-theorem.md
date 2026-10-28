# 양의 질량 정리

# 개요

**양의 질량 정리(positive mass theorem)** 는 점마다 에너지 밀도가 음이 아닌 공간이면 그 공간 전체의 질량도 음이 아니라는 정리다. 물질이 있는 곳마다 에너지 밀도가 음이 아니어도 중력이 묶어 두는 에너지는 음수이므로, 둘을 더한 전체 질량의 부호는 바로 정해지지 않는다. 이 정리는 공간을 무한원에서 Euclid 공간에 가까워지는 $3$ 차원 Riemann 다양체로 놓고 에너지 밀도를 스칼라 곡률로 바꿔, 스칼라 곡률이 어디서나 $0$ 이상이면 무한원에서 읽은 질량이 $0$ 이상임을 증명한다.

# 직관

양의 질량 정리는 무한원에서 Euclid 공간에 가까워지는 $3$ 차원 Riemann 다양체의 스칼라 곡률이 어디서나 $0$ 이상이면, 무한원에서 읽은 질량이 $0$ 이상이고 $0$ 인 것은 그 다양체가 Euclid 공간일 때뿐이라는 정리다.

일반상대성이론에서 시간 대칭인 공간 단면의 스칼라 곡률은 물질의 에너지 밀도의 $16\pi$ 배이다. 그래서 정리는 각 점의 에너지 밀도가 음이 아니면 계 전체의 질량도 음이 아니라는 진술이 된다. Schoen 과 Yau 가 [극소곡면](minimal-surfaces.md)으로 처음 증명했다.

$\mathbb R^3$ 에서 원점을 뺀 곳에 [Riemann 계량](riemannian-metrics.md)

$$
g=\Bigl(1+\frac{m}{2\vert x\vert}\Bigr)^4\bigl(dx\_1^2+dx\_2^2+dx\_3^2\bigr)
$$

을 준다. 이것은 질량 $m$ 인 Schwarzschild 블랙홀의 시간 대칭 단면이고, 스칼라 곡률이 어디서나 $0$ 이다. $\vert x\vert$ 가 크면 $g\_{ij}=(1+2m/\vert x\vert)\delta\_{ij}+O(\vert x\vert^{-2})$ 이므로 계량은 Euclid 계량에 가까워지고, 그 차이의 $1/\vert x\vert$ 항의 계수가 $m$ 이다.

좌표 구면 $\vert x\vert=r$ 의 넓이는 $4\pi r^2(1+m/2r)^4$ 이므로 $m\gt 0$ 이면 Euclid 공간에서보다 넓고 $m\lt 0$ 이면 좁다. 무한원에서 계량이 Euclid 계량에서 벗어나는 정도로 질량을 읽을 수 있다. 질문은 스칼라 곡률이 $0$ 이상인 계량에서 이렇게 읽은 질량이 음수일 수 있는가이고, 양의 질량 정리는 그럴 수 없다고 답한다.

# 정의

## 스칼라 곡률

$n$ 차원 Riemann 다양체의 점 $p$ 에서 정규직교기저 $e\_1,\dots,e\_n$ 을 잡을 때, 단면곡률의 합

$$
R(p)=\sum\_{i\ne j}\mathrm{sec}(e\_i,e\_j)
$$

을 **스칼라 곡률(scalar curvature)** 이라 한다. 기저의 선택과 무관하다. 단위구면 $S^2$ 에서는 $R=2$ 이고, $2$ 차원에서 $R$ 은 [곡률](curvature.md)의 Gauss 곡률의 $2$ 배다.

## 점근적으로 평탄한 다양체와 질량

$3$ 차원 완비 Riemann 다양체 $(M,g)$ 에서 콤팩트 집합 $C$ 를 빼면 $\mathbb R^3$ 의 공 바깥과 미분동형이고, 그 좌표에서

$$
g\_{ij}=\delta\_{ij}+O(\vert x\vert^{-1}),\qquad \partial\_kg\_{ij}=O(\vert x\vert^{-2}),\qquad R\in L^1(M)
$$

이면 $(M,g)$ 를 **점근적으로 평탄(asymptotically flat)** 하다고 한다. 이때

$$
m=\lim\_{r\to\infty}\frac{1}{16\pi}\int\_{\vert x\vert=r}\sum\_{i,j}\bigl(\partial\_ig\_{ij}-\partial\_jg\_{ii}\bigr)\nu^j\thinspace dA
$$

를 **ADM 질량(Arnowitt–Deser–Misner mass)** 이라 한다. $\nu$ 는 좌표 구면의 바깥 단위법벡터다. 극한이 존재하고 좌표 선택과 무관하다는 것은 Bartnik 이 증명했다[^1]. 직관 절의 Schwarzschild 계량에 이 식을 쓰면 $m$ 이 나온다.

# 성질

## 정리

**정리(Schoen–Yau, 1979).** $(M,g)$ 가 점근적으로 평탄한 $3$ 차원 다양체이고 스칼라 곡률이 $R\ge 0$ 이면 ADM 질량은 $m\ge 0$ 이다. $m=0$ 이면 $(M,g)$ 는 $\mathbb R^3$ 과 등거리다[^2].

## 극소곡면을 쓴 증명

$m\lt 0$ 이라고 가정한다. 직관 절의 넓이 계산에서 보듯 $m\lt 0$ 이면 무한원 근처의 좌표 평면이 넓이를 줄이는 쪽으로 휘어 있다. 이것을 장벽으로 써서, 큰 원을 경계로 하는 넓이 최소 곡면을 잡고 원의 반지름을 무한으로 보내면 평면에 점근하는 완비 넓이 최소 곡면 $\Sigma$ 가 존재한다.

$\Sigma$ 는 넓이를 최소로 하므로 넓이의 이차 변분이 $0$ 이상이다. 이 안정성 부등식에 Gauss 방정식을 넣고 시험함수를 $1$ 에 가까워지게 고르면, second fundamental form 을 $A$ 라 할 때 $\int\_\Sigma K\thinspace dA\ge\tfrac12\int\_\Sigma(R+\vert A\vert^2)dA$ 가 나온다. 평면에 점근하는 곡면에서는 [Gauss–Bonnet 정리](gauss-bonnet.md)로 $\int\_\Sigma K\thinspace dA=0$ 이므로 $\Sigma$ 위에서 $R$ 과 $A$ 가 $0$ 이어야 하고, 이것이 음의 질량에서 오는 휘어짐과 모순된다.

## 스피너를 쓴 증명

Witten 은 $M$ 위의 스피너 $\psi$ 로 무한원에서 상수 스피너에 가까워지는 [Dirac 작용소](dirac-operator.md)의 해 $D\psi=0$ 을 잡고, Lichnerowicz 공식 $D^2=\nabla^\ast\nabla+R/4$ 를 부분적분해

$$
m=\frac{1}{4\pi}\int\_M\Bigl(\vert\nabla\psi\vert^2+\frac R4\vert\psi\vert^2\Bigr)dV
$$

꼴의 식을 얻었다(상수는 $\psi$ 의 정규화에 따른다)[^3]. 우변은 $R\ge 0$ 에서 $0$ 이상이다. $3$ 차원 방향가능 다양체는 모두 스핀 구조를 가지므로 이 증명은 $3$ 차원에서 가정 없이 성립하고, 고차원에서는 스핀 다양체에 대해 성립한다.

## Riemann Penrose 부등식

$M$ 이 넓이 $A$ 인 바깥쪽 극소곡면을 경계로 가지면 $m\ge\sqrt{A/16\pi}$ 다. Schwarzschild 계량에서 등호가 성립한다. Huisken 과 Ilmanen 은 경계가 연결일 때 [평균곡률 흐름](mean-curvature-flow.md)의 역방향 흐름으로, Bray 는 경계가 여러 성분일 때 등각 흐름으로 증명했다[^4].

# 활용

- **일반상대성이론.** 지배 에너지 조건을 만족하는 물질로 이루어진 고립계의 총질량이 음수가 아니라는 것이 이 정리의 물리적 진술이고, 시간 대칭이 아닌 초기값에 대한 판본도 Schoen–Yau 와 Witten 이 증명했다.
- **[Yamabe 문제](yamabe-problem.md).** 콤팩트 다양체의 등각류에서 스칼라 곡률이 상수인 계량을 찾는 문제의 남은 경우를 Schoen 이 이 정리로 풀었다. 한 점에서의 [Green 함수](greens-function.md)로 만든 점근적으로 평탄한 계량의 질량이 양수라는 것이 쓰인다.
- **스칼라 곡률의 장애.** 원환면 $T^3$ 에는 스칼라 곡률이 양인 계량이 없다. 이 결론은 양의 질량 정리와 같은 두 방법, 곧 Schoen–Yau 의 극소곡면 방법과 Gromov–Lawson 의 스피너 방법으로 증명된다.

[^1]: R. Bartnik, "The mass of an asymptotically flat manifold", *Communications on Pure and Applied Mathematics* 39 (1986), 661–693.
[^2]: R. Schoen, S.-T. Yau, "On the proof of the positive mass conjecture in general relativity", *Communications in Mathematical Physics* 65 (1979), 45–76.
[^3]: E. Witten, "A new proof of the positive energy theorem", *Communications in Mathematical Physics* 80 (1981), 381–402.
[^4]: G. Huisken, T. Ilmanen, "The inverse mean curvature flow and the Riemannian Penrose inequality", *Journal of Differential Geometry* 59 (2001), 353–437. H. L. Bray, "Proof of the Riemannian Penrose inequality using the positive mass theorem", *Journal of Differential Geometry* 59 (2001), 177–267.

# 연관 문서

## 선수지식

- [극소곡면](minimal-surfaces.md)
- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

- [Yamabe 문제](yamabe-problem.md)

#differential_geometry #analysis
