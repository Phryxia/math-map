# 곡률

# 개요

**곡률(curvature)** 은 곡선이나 곡면이 직선이나 평면에서 얼마나 휘었는지를 재는 수다. 반지름이 다른 두 원을 같은 속력으로 돌면 작은 원에서 방향이 더 빨리 바뀌고, 지구 표면은 길이를 보존한 채 평면 지도로 펼 수 없다. 곡률은 곡선에서는 방향이 바뀌는 빠르기로, 곡면에서는 가장 많이 휘는 방향과 가장 적게 휘는 방향의 곡률을 곱한 값으로 이 차이를 나타낸다.

# 직관

곡선을 자동차의 경로로, 매개변수를 시간으로 놓는다. 속력을 $1$ 로 고정하면 가속도는 방향 변화만을 나타내고 그 크기가 곡률이다. 반지름 $r$ 인 원을 속력 $1$ 로 돌면 시간 $2\pi r$ 동안 방향이 한 바퀴 $2\pi$ 돌므로 곡률이 $1/r$ 이고, 직선은 방향이 변하지 않으므로 $0$ 이다.

곡면에서는 한 점에서 방향을 하나 고르고 그 방향과 법선이 만드는 평면으로 곡면을 자른 뒤, 잘린 곡선의 곡률을 잰다. 반지름 $r$ 인 원기둥을 둘레 방향으로 자르면 반지름 $r$ 인 원이 나와 곡률이 $1/r$ 이고, 축 방향으로 자르면 직선이 나와 곡률이 $0$ 이다. 그 사이 방향은 타원이 나오고 곡률이 $0$ 과 $1/r$ 사이다. 반지름 $r$ 인 구면은 어느 방향으로 잘라도 반지름 $r$ 인 원이 나와 곡률이 $1/r$ 이다.

원기둥은 종이를 말아 만들 수 있고 구면은 그럴 수 없다. 두 방향의 곡률을 곱하면 원기둥은 $(1/r)\cdot 0=0$, 구면은 $1/r^2$ 이다. 이 곱이 곡면을 찢거나 늘이지 않고 평면으로 펼 수 있는지를 가른다.

# 정의

## 곡선의 곡률과 비틀림

$\mathbb R^3$ 의 곡선 $\gamma$ 가 [호길이로 매개화](arc-length.md)되어 속도의 크기가 항상 $1$ 이라 한다. **단위접벡터(unit tangent vector)** $T$, **곡률** $\kappa$, **주법선(principal normal)** $N$, **종법선(binormal)** $B$ 는 다음이다.

$$
T=\gamma',\qquad \kappa=\lVert T'\rVert,\qquad N=\frac{T'}{\kappa},\qquad B=T\times N
$$

곡률이 어디서도 $0$ 이 아니면 이 세 벡터는 각 점에서 [내적 공간](inner-product-spaces.md) $\mathbb R^3$ 의 정규직교기저를 이룬다. $B'$ 는 $N$ 의 배수이고, $B'=-\tau N$ 으로 정한 $\tau$ 가 **비틀림(torsion)** 이다. 비틀림은 곡선이 한 평면에서 벗어나는 정도를 잰다.

반지름 $r$ 인 원 $\gamma(s)=(r\cos(s/r),r\sin(s/r),0)$ 은 $T'=-(1/r)(\cos(s/r),\sin(s/r),0)$ 이므로 $\kappa=1/r$ 이고, $B=(0,0,1)$ 이 상수이므로 $\tau=0$ 이다.

호길이가 아닌 일반 매개변수에서는 다음 공식을 쓴다.

$$
\kappa=\frac{\lVert \gamma'\times\gamma''\rVert}{\lVert\gamma'\rVert^{3}},\qquad
\tau=\frac{(\gamma'\times\gamma'')\cdot\gamma'''}{\lVert\gamma'\times\gamma''\rVert^{2}}
$$

나선 $\gamma(t)=(a\cos t,a\sin t,bt)$ 에서 $\lVert\gamma'\rVert^2=a^2+b^2$, $\gamma'\times\gamma''=(ab\sin t,-ab\cos t,a^2)$, $(\gamma'\times\gamma'')\cdot\gamma'''=a^2b$ 이므로 $\kappa=a/(a^2+b^2)$, $\tau=b/(a^2+b^2)$ 다. $b=0$ 이면 원의 $\kappa=1/a$, $\tau=0$ 이 나온다.

## 곡면의 두 기본형식

곡면의 국소 매개화 $r(u,v)$ 와 단위법벡터 $n$ 을 고정한다. **제1 기본형식(first fundamental form)** $\mathrm{I}$ 는 접벡터의 길이를 재고, **제2 기본형식(second fundamental form)** $\mathrm{II}$ 는 법선 방향으로 휘는 정도를 잰다.

$$
\mathrm{I}=\begin{pmatrix}E&F\cr F&G\end{pmatrix},\quad E=r_u\cdot r_u,\quad F=r_u\cdot r_v,\quad G=r_v\cdot r_v
$$

$$
\mathrm{II}=\begin{pmatrix}e&f\cr f&g\end{pmatrix},\quad e=r_{uu}\cdot n,\quad f=r_{uv}\cdot n,\quad g=r_{vv}\cdot n
$$

**모양 연산자(shape operator)** 는 행렬 $\mathrm{I}^{-1}\mathrm{II}$ 이고, 그 [고윳값](eigenvalues.md) $k_1,k_2$ 가 **주곡률(principal curvatures)** 이다. 모양 연산자는 [Gauss 사상](gauss-map.md) $n$ 의 미분에 음수를 붙인 것이다. **Gauss 곡률(Gaussian curvature)** $K$ 와 **평균곡률(mean curvature)** $H$ 는 모양 연산자의 [행렬식](determinants.md)과 대각합의 절반이다.

$$
K=k_1k_2=\frac{eg-f^{2}}{EG-F^{2}},\qquad H=\frac{k_1+k_2}{2}
$$

반지름 $r$ 인 원기둥 $r(u,v)=(r\cos u,r\sin u,v)$ 에 안쪽 법선 $n=(-\cos u,-\sin u,0)$ 을 잡으면 $E=r^2$, $F=0$, $G=1$, $e=r$, $f=g=0$ 이다. 모양 연산자는 $\mathrm{diag}(1/r,0)$ 이고 $K=0$, $H=1/(2r)$ 이다. 반지름 $r$ 인 구면 $r(u,v)=(r\sin u\cos v,r\sin u\sin v,r\cos u)$ 에 안쪽 법선을 잡으면 $E=r^2$, $F=0$, $G=r^2\sin^2u$, $e=r$, $f=0$, $g=r\sin^2u$ 이므로 모양 연산자가 $\mathrm{diag}(1/r,1/r)$ 이고 $K=1/r^2$, $H=1/r$ 이다. 직관 절의 두 방향 곡률이 이 주곡률이다.

$K$ 의 부호에 따라 곡면은 점 근처에서 다음 모양이다.

| K의 부호 | 모양 | 예 |
| --- | --- | --- |
| 양 | 구면형 | 구면, 타원면 |
| 0 | 전개 가능 | 평면, 원기둥, 원뿔 |
| 음 | 안장형 | 쌍곡면, 현수면 |

# 성질

## Frenet–Serret 공식

호길이로 매개화되고 곡률이 $0$ 이 아닌 곡선의 $T,N,B$ 는 다음을 만족한다. 이것을 Frenet–Serret 공식(Frenet–Serret formulas)이라 한다[^1].

$$
\begin{pmatrix}T'\cr N'\cr B'\end{pmatrix}
=\begin{pmatrix}0&\kappa&0\cr -\kappa&0&\tau\cr 0&-\tau&0\end{pmatrix}
\begin{pmatrix}T\cr N\cr B\end{pmatrix}
$$

$T,N,B$ 가 정규직교이므로 $T\cdot T=1$ 같은 관계를 미분하면 계수행렬이 반대칭이 된다. 첫 줄은 $N$ 의 정의이고 셋째 줄은 $\tau$ 의 정의다.

## Theorema Egregium

Gauss 곡률은 제1 기본형식과 그 편도함수만으로 표현된다. $K$ 는 곡면의 내재적(intrinsic) 양이고, 곡면이 공간에 어떻게 놓였는지에 의존하지 않는다. 이것이 Gauss 의 Theorema Egregium 이다[^2]. 직교 매개화($F=0$)에서는 다음 꼴이다.

$$
K=-\frac{1}{2\sqrt{EG}}\left\lbrack\frac{\partial}{\partial u}\negthinspace\left(\frac{G_u}{\sqrt{EG}}\right)+\frac{\partial}{\partial v}\negthinspace\left(\frac{E_v}{\sqrt{EG}}\right)\right\rbrack
$$

구면의 $E=r^2$, $G=r^2\sin^2u$ 를 넣으면 $G_u/\sqrt{EG}=2\cos u$ 이고 $K=-(1/(2r^2\sin u))(-2\sin u)=1/r^2$ 으로 정의 절의 값이 나온다.

길이를 보존하는 사상, 곧 국소 등거리사상(local isometry)은 $K$ 를 보존한다. 평면의 $K$ 는 $0$ 이므로 구면의 어느 조각도 길이를 보존한 채 평면 지도로 옮길 수 없다. 평균곡률 $H$ 는 내재적이 아니다. 평면과 원기둥은 국소적으로 등거리동형이지만 $H$ 는 각각 $0$ 과 $1/(2r)$ 이다.

## Gauss–Bonnet 공식

$R$ 이 곡면 위의 조각이고 경계가 조각마다 매끄러운 닫힌 곡선이면 다음이 성립한다[^3].

$$
\iint_{R}K\thinspace dA+\oint_{\partial R}\kappa_g\thinspace ds+\sum_i \alpha_i=2\pi\chi(R)
$$

여기서 $\kappa_g$ 는 경계의 측지곡률(geodesic curvature), $\alpha_i$ 는 꼭짓점에서의 외각, $\chi$ 는 [Euler 지표](euler-characteristic.md)다. 경계가 없는 콤팩트 방향 곡면에서는 경계항이 사라지고 다음이 된다. 이것이 [Gauss–Bonnet 정리](gauss-bonnet.md)다.

$$
\iint_{M}K\thinspace dA=2\pi\chi(M)=2\pi(2-2g)
$$

구면은 오른쪽이 $4\pi$ 이고, 반지름 $r$ 의 구면은 $K=1/r^2$ 이고 넓이가 $4\pi r^2$ 이므로 좌변도 $4\pi$ 다. 원환면은 $\chi=0$ 이므로 총 곡률이 $0$ 이다.

## Gauss–Bonnet 공식의 따름정리

- 세 변이 측지선인 구면 삼각형은 $\kappa_g=0$ 이므로 내각의 합에서 $\pi$ 를 뺀 값이 $\iint K\thinspace dA$ 다. 반지름 $r$ 인 구면에서는 넓이를 $r^2$ 으로 나눈 값이다.
- 원환면의 총 곡률이 $0$ 이므로 원환면에는 곡률이 어디서나 양수인 계량이 없다.
- $K$ 가 항상 $0$ 인 곡면은 국소적으로 평면과 등거리동형이다(전개 가능 곡면, developable surface).

# 활용

- [Riemann 계량](riemannian-metrics.md)이 주어진 [다양체](manifolds.md)에서 Gauss 곡률은 Riemann 곡률 텐서(Riemann curvature tensor)로 일반화된다. 2차원에서는 이 텐서가 Gauss 곡률 하나로 정해진다. 일반상대성이론(general relativity)의 Einstein 방정식(Einstein field equations)은 이 텐서의 축약을 좌변에 쓴다.
- 평균곡률이 $0$ 인 곡면이 [극소곡면](minimal-surfaces.md)이다. 경계를 고정했을 때 넓이의 임계점이고 비눗막의 모양이다.
- 삼각망의 꼭짓점에서 $2\pi$ 에서 둘레 각의 합을 뺀 각 결손을 이산 Gauss 곡률로 쓴다. 닫힌 삼각망에서 각 결손의 총합은 $2\pi\chi$ 이고, 이것이 Gauss–Bonnet 정리의 이산판이다.
- 곡선의 곡률은 경로 평활화와 모서리 검출에, 곡면의 주곡률은 형상 분류에 쓰인다.

[^1]: Frenet–Serret 공식과 일반 매개변수 공식. Wolfram MathWorld, "Frenet Formulas". https://mathworld.wolfram.com/FrenetFormulas.html
[^2]: Theorema Egregium: Gauss 곡률이 Riemann metric의 불변량이라는 Gauss(1827)의 결과. 개요와 Brioschi 공식은 O. Jaïbi, "Gaussian Curvature and The Gauss–Bonnet Theorem", Leiden bachelor thesis, §2. https://math.leidenuniv.nl/scripties/JaibiBach.pdf
[^3]: Gauss–Bonnet 공식의 경계·꼭짓점 항을 포함한 진술. Wolfram MathWorld, "Gauss–Bonnet Formula". https://mathworld.wolfram.com/Gauss–BonnetFormula.html

# 연관 문서

## 선수지식

- [곡선의 길이](arc-length.md)
- [내적 공간](inner-product-spaces.md)
- [미분기하 개관](differential-geometry-overview.md)

## 더 알아보기

- [Riemann 계량](riemannian-metrics.md)
- [극소곡면](minimal-surfaces.md)

#differential_geometry #topology #computation
