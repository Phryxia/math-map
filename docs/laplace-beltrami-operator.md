# Laplace–Beltrami 연산자

# 개요

**Laplace–Beltrami 연산자(Laplace–Beltrami operator)** 는 구면 같은 휜 공간 위에서 정의한 [Laplace 연산자](laplace-operator.md)다. 구면 위의 온도가 시간에 따라 어떻게 퍼지는지 계산하려면 이차 도함수의 합 $\sum_i\partial_i^2$ 가 있어야 하는데, 구면에는 전체를 덮는 직교좌표가 없어 이 식을 그대로 쓸 수 없다. 이 연산자는 좌표 대신 [Riemann 계량](riemannian-metrics.md)으로 기울기와 발산을 정의하고, 그 합성 $\mathrm{div}\_g\nabla\_g$ 로 어느 좌표에서나 같은 값을 준다.

# 직관

구면 위의 온도 분포를 다루려면 구면 위의 Laplace 연산자가 있어야 한다. 구면에는 전체를 덮는 직교좌표가 없으므로 $\sum\_i\partial\_i^2$ 를 그대로 쓸 수 없다. $\mathbb R^3$ 의 극좌표에서 Laplace 연산자는

$$
\Delta=\partial\_r^2+\frac2r\partial\_r+\frac1{r^2}\Delta\_{S^2}
$$

로 갈라지고, 반지름 방향을 뺀 나머지 $\Delta\_{S^2}$ 가 구면 위의 함수에만 작용한다.

함수 $z$ 는 일차함수이므로 $\Delta z=0$ 이다. 구면좌표에서 $z=r\cos\phi$ 이므로 $\partial\_r^2z=0$, $\frac2r\partial\_rz=\frac2r\cos\phi$ 이고, 합이 $0$ 이 되려면 $\Delta\_{S^2}\cos\phi=-2\cos\phi$ 다. 단위구면 위의 함수 $\cos\phi$ 는 $-\Delta\_{S^2}$ 의 고윳값 $2$ 에 대한 고유함수다. 이 $\Delta\_{S^2}$ 를 구면의 계량만으로 적은 것이 Laplace–Beltrami 연산자다.

# 정의

## 좌표 표현

Riemann 다양체 $(M,g)$ 위의 매끄러운 함수 $f$ 에 대해 **Laplace–Beltrami 연산자** 는 기울기의 발산 $\Delta\_gf=\mathrm{div}\_g\nabla\_gf$ 를 대응시키는 연산자다. $n$ 차원 다양체의 국소좌표에서 계량을 $g=(g\_{ij})$, 역행렬을 $(g^{ij})$, $\vert g\vert=\det(g\_{ij})$ 라 하면

$$
\Delta\_gf=\frac1{\sqrt{\vert g\vert}}\sum\_{i,j}\partial\_i\Bigl(\sqrt{\vert g\vert}\thinspace g^{ij}\partial\_jf\Bigr)
$$

다. 기울기 $\nabla\_gf$ 는 $g(\nabla\_gf,X)=df(X)$ 로 정의된 벡터장이고 성분은 $g^{ij}\partial\_jf$ 다. 발산 $\mathrm{div}\_g$ 는 부피형식 $\sqrt{\vert g\vert}\thinspace dx\_1\cdots dx\_n$ 에 맞춘 발산이다.

단위구면을 극각 $\phi$ 와 방위각 $\theta$ 로 적으면 $g=d\phi^2+\sin^2\phi\thinspace d\theta^2$ 이고 $\sqrt{\vert g\vert}=\sin\phi$ 이므로

$$
\Delta\_{S^2}f=\frac1{\sin\phi}\partial\_\phi\bigl(\sin\phi\thinspace\partial\_\phi f\bigr)+\frac1{\sin^2\phi}\partial\_\theta^2f
$$

다. $f=\cos\phi$ 이면 $\sin\phi\thinspace\partial\_\phi f=-\sin^2\phi$ 이고, 이것을 $\phi$ 로 미분해 $\sin\phi$ 로 나누면 $-2\cos\phi$ 다. 직관 절에서 극좌표로 얻은 값과 같다.

## 스펙트럼

경계 없는 콤팩트 Riemann 다양체 $M$ 의 **스펙트럼(spectrum)** 은 $-\Delta\_g$ 의 고윳값을 중복도만큼 되풀이해 작은 것부터 늘어놓은 열 $\lambda\_0\le\lambda\_1\le\lambda\_2\le\cdots$ 이다. 단위구면에서 상수함수는 고윳값 $0$ 을, $\cos\phi$ 와 좌표함수 $x,y$ 를 구면에 제한한 것은 고윳값 $2$ 를 가지므로 스펙트럼은 $0,2,2,2,\dots$ 로 시작한다.

# 성질

## 좌표 불변성

기울기와 발산이 계량과 부피형식만으로 정의되므로, 좌표 표현의 우변은 국소좌표를 바꿔도 같은 함수가 된다. $\mathbb R^n$ 의 표준 계량에서는 $g^{ij}=\delta^{ij}$, $\vert g\vert=1$ 이므로 $\Delta\_g=\sum\_i\partial\_i^2$ 이다.

## 스펙트럼의 이산성

$M$ 이 경계 없는 콤팩트 다양체이면 $-\Delta\_g$ 의 고윳값은

$$
0=\lambda\_0\le\lambda\_1\le\lambda\_2\le\cdots\to\infty
$$

로 셀 수 있게 늘어서고, 고유함수들이 $L^2(M)$ 의 정규직교기저를 이룬다. $M$ 이 연결이면 $\lambda\_0=0$ 의 고유함수는 상수뿐이므로 $\lambda\_1\gt 0$ 이다.

## Green 항등식

$M$ 이 경계 없는 콤팩트 다양체이면 매끄러운 함수 $f,h$ 에 대해

$$
\int\_Mf\thinspace\Delta\_gh\thinspace dV=-\int\_Mg(\nabla\_gf,\nabla\_gh)\thinspace dV
$$

다. $\mathrm{div}\_g(f\nabla\_gh)=f\Delta\_gh+g(\nabla\_gf,\nabla\_gh)$ 를 적분하고 발산 정리(divergence theorem)를 쓰면 나온다. $f=h$ 로 두면 $-\Delta\_g$ 가 양의 준정부호이고, $\Delta\_gh=0$ 이면 $\nabla\_gh=0$ 이어서 연결 다양체 위의 조화함수는 상수다.

## 구면과 원환면

단위구면 $S^2$ 의 고윳값은 $\ell(\ell+1)$ $(\ell=0,1,2,\dots)$ 이고 그 고유공간이 차수 $\ell$ 의 [구면조화함수](spherical-harmonics.md) 공간이며 차원은 $2\ell+1$ 이다. 평평한 원환면 $\mathbb R^n/\Lambda$ 에서는 쌍대격자의 원소 $\xi\in\Lambda^\ast$ 마다 $e^{2\pi i\xi\cdot x}$ 가 고유함수이고 고윳값은 $4\pi^2\Vert\xi\Vert^2$ 다.

## 고윳값의 하한

- Lichnerowicz 정리(Lichnerowicz's theorem). $n$ 차원 콤팩트 다양체의 Ricci 곡률이 $(n-1)k$ 이상이고 $k\gt 0$ 이면 $\lambda\_1\ge nk$ 다. 단위구면에서 등호가 성립한다[^1].
- [Cheeger 부등식](cheeger-inequality.md). 다양체를 두 부분으로 자르는 초곡면의 넓이를 작은 쪽 부피로 나눈 값의 하한을 $h$ 라 하면 $\lambda\_1\ge h^2/4$ 다[^2]. 잘록한 목이 있으면 $h$ 가 작다.

## 스펙트럼과 모양

[Weyl 법칙](weyl-law.md)은 다양체에서도 성립하여, 고윳값이 $\lambda$ 이하인 것의 개수가 $\lambda\to\infty$ 에서 $\omega\_n\thinspace\mathrm{vol}(M)\lambda^{n/2}/(2\pi)^n$ 에 가깝다. 그래서 스펙트럼은 차원과 부피를 정한다. 스펙트럼이 계량을 정하지는 않는다. Milnor 는 스펙트럼이 같고 등거리가 아닌 16 차원 평평한 원환면 두 개를 만들었다[^3].

# 활용

- [Hodge 이론](hodge-theory.md)은 같은 연산자를 미분형식으로 확장한 Laplace–de Rham 작용소(Laplace–de Rham operator)의 핵으로 [de Rham 코호몰로지](de-rham-cohomology.md)를 나타낸다. 함수 위에서는 그 작용소가 $-\Delta\_g$ 다.
- [Maass 형식](maass-forms.md)은 쌍곡 평면의 Laplace–Beltrami 연산자 $y^2(\partial\_x^2+\partial\_y^2)$ 의 고유함수 가운데 모듈러 군에 불변인 것이다. [Selberg 대각합 공식](selberg-trace-formula.md)은 쌍곡 곡면의 스펙트럼을 닫힌 측지선의 길이와 잇는다.
- [Yamabe 문제](yamabe-problem.md)는 Laplace–Beltrami 연산자와 스칼라 곡률로 쓴 비선형 타원 방정식이다.
- [평균곡률 흐름](mean-curvature-flow.md)은 곡면 위의 위치 벡터에 Laplace–Beltrami 연산자를 적용한 것으로 곡면을 움직인다.
- [그래프 Laplacian](graph-laplacian.md)은 표본에서 만든 그래프 위에서 Laplace–Beltrami 연산자를 근사하고, 그 고유벡터로 저차원 좌표를 잡는다.

[^1]: A. Lichnerowicz, *Géométrie des groupes de transformations*, Dunod (1958).
[^2]: J. Cheeger, A lower bound for the smallest eigenvalue of the Laplacian, in *Problems in Analysis* (Papers dedicated to Salomon Bochner), Princeton Univ. Press (1970), 195–199.
[^3]: J. Milnor, Eigenvalues of the Laplace operator on certain manifolds, *Proc. Nat. Acad. Sci. USA* 51 (1964), 542.

# 연관 문서

## 선수지식

- [Laplace 연산자](laplace-operator.md)
- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

- [Weyl 법칙](weyl-law.md)
- [열핵 전개](heat-kernel-asymptotics.md)
- [Cheeger 부등식](cheeger-inequality.md)
- [양자 혼돈](quantum-chaos.md)

#differential_geometry #analysis #functional_analysis
