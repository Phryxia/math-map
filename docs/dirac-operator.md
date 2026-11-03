# Dirac 작용소

# 개요

**Dirac 작용소(Dirac operator)** 는 제곱하면 [Laplace 연산자](laplace-operator.md)가 되는 1계 미분작용소다. 직선에서는 $-i\thinspace d/dx$ 를 제곱하면 $-d^2/dx^2$ 이지만, 평면에서 $-\partial_x^2-\partial_y^2$ 의 제곱근을 $a\partial_x+b\partial_y$ 꼴로 찾으면 $a^2=b^2=-1$ 이고 $ab=-ba$ 여야 하므로 $a,b$ 를 수가 아닌 $2\times 2$ [행렬](matrices.md)로 잡아야 한다. Dirac 작용소는 이런 행렬 곱을 다양체 위로 옮겨 정의하고, 그 해 공간의 차원으로 다양체의 위상 불변량을 계산한다.

# 직관

2 차원 콤팩트 곡면에서 Gauss 곡률의 적분은 계량을 바꾸어도 값이 같고 [Euler 지표](euler-characteristic.md)로 정해진다. 고차원에서 스칼라 곡률 $\kappa$ 의 적분으로 같은 것을 얻으려 해 본다. 계량 $g$ 를 $c^2g$ 로 바꾸면 $\kappa$ 는 $c^{-2}$ 배가 되고 부피 형식은 $c^n$ 배가 되므로 $\int_M\kappa\thinspace dV$ 는 $c^{n-2}$ 배가 된다. $n\ge 3$ 에서는 계량을 늘리기만 해도 값이 달라지므로 이 적분은 위상으로 정해지지 않는다.

곡률을 적분하는 대신 곡률이 계수로 들어가는 미분작용소를 세우고 그 핵을 센다. 1 계 작용소 $D$ 의 제곱이 $\nabla^\ast\nabla+\kappa/4$ 이면 $\kappa\gt 0$ 인 다양체에서 $Ds=0$ 인 단면은 $0$ 뿐이다. 타원형 작용소의 핵과 쌍대핵의 차원 차이는 계량을 연속으로 바꾸어도 변하지 않으므로, 이 차이가 $0$ 이 아닌 다양체에는 스칼라 곡률이 양인 계량이 없다. 그런 $D$ 는 접벡터가 다발의 단면에 제곱이 $-\vert v\vert^2$ 인 곱으로 작용할 때 세워진다. 그 곱을 주는 것이 [Clifford 대수](clifford-algebras.md)다.

# 정의

## Dirac 다발

Riemann 다양체 $M$ 위의 Hermite [벡터다발](vector-bundles.md)(Hermitian vector bundle) $S$ 가 다음 셋을 갖추면 **Dirac 다발(Dirac bundle)** 이다.[^1]

- 각 점에서 $S\_x$ 가 $\mathrm{Cl}(T\_xM)$ 의 왼쪽 모듈이다. 이 작용을 **Clifford 곱(Clifford multiplication)** 이라 하고 $v\cdot s$ 로 적는다.
- 단위 접벡터 $v$ 의 작용이 등거리다. 곧 $\langle v\cdot s,v\cdot t\rangle=\langle s,t\rangle$ 다.
- 계량과 양립하는 [접속](connection.md) $\nabla$ 가 Clifford 곱에 Leibniz 규칙을 준다. 곧 $\nabla\_X(Y\cdot s)=(\nabla\_XY)\cdot s+Y\cdot\nabla\_Xs$ 다.

Clifford 관계 $v\cdot v=-\vert v\vert^2$ 에서 단위벡터의 작용은 제곱이 $-1$ 이다.

평면 $\mathbb R^2$ 위의 자명한 다발 $S=\mathbb R^2\times\mathbb C^2$ 에서 $e_1=\partial_x$, $e_2=\partial_y$ 의 작용을 다음 행렬로 두고 접속을 성분별 미분으로 두면 Dirac 다발이다.

$$
e_1=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix},\qquad e_2=\begin{pmatrix}0&i\cr i&0\end{pmatrix}
$$

두 행렬은 $e_1^2=e_2^2=-I$, $e_1e_2=-e_2e_1=\mathrm{diag}(-i,i)$ 를 만족하고 둘 다 유니터리다.

## Dirac 작용소

Dirac 다발 $S$ 의 **Dirac 작용소**는 국소 정규직교 틀 $e_1,\dots,e_n$ 에 대해 다음으로 정의되는 1 계 작용소다.

$$
Ds=\sum\_{i=1}^n e_i\cdot\nabla\_{e_i}s
$$

평면의 예에서는 다음이다.

$$
D=e_1\partial_x+e_2\partial_y=\begin{pmatrix}0&-\partial_x+i\partial_y\cr \partial_x+i\partial_y&0\end{pmatrix}
$$

$(-\partial_x+i\partial_y)(\partial_x+i\partial_y)=-\partial_x^2-\partial_y^2$ 이므로 $D^2=-(\partial_x^2+\partial_y^2)I$ 이고, 개요의 제곱근 문제의 답이 이 $D$ 다.

## 스핀 다양체의 Dirac 작용소

$M$ 이 스핀 다양체(spin manifold)이면 [스핀 구조](spin-structures.md)의 스피너 다발(spinor bundle) $S$ 가 Clifford 모듈이고, Levi-Civita 접속(Levi-Civita connection)이 이중덮개를 통해 스피너 다발의 접속으로 올라간다. 이 Dirac 다발의 작용소를 $M$ 의 Dirac 작용소라 하고 ${\not}D$ 로 적는다.

외대수 다발도 Dirac 다발이다. $\Lambda^\ast T^\ast M$ 에서 Clifford 곱을 $v\cdot\omega=v^\flat\wedge\omega-\iota_v\omega$ 로 두면 그 Dirac 작용소가 $d+d^\ast$ 다.

## 등급 분해

$n=2m$ 이면 Clifford 대수의 복소 표현이 두 반스피너(half-spinor) 표현으로 갈라지고 $S=S^+\oplus S^-$ 다. 접벡터의 Clifford 곱이 두 성분을 바꾸므로 $D$ 는 다음 두 작용소로 갈라진다.

$$
D^+\colon\Gamma(S^+)\to\Gamma(S^-),\qquad D^-\colon\Gamma(S^-)\to\Gamma(S^+)
$$

평면의 예에서 $S^+$ 는 첫 성분, $S^-$ 는 둘째 성분이고 $D^+=\partial_x+i\partial_y=2\thinspace\partial/\partial\bar z$ 다. $D^+f=0$ 은 Cauchy–Riemann 방정식(Cauchy–Riemann equations)이고, 그 해는 [정칙함수](holomorphic-functions.md)다.

# 성질

## 틀 무관성

$Ds=\sum_i e_i\cdot\nabla_{e_i}s$ 는 틀의 선택에 의존하지 않는다. 틀을 $f_j=\sum_i a\_{ij}e_i$ 로 바꾸면 Clifford 곱과 공변미분이 같은 직교행렬로 변환되어 합이 보존된다.

## 타원성

주기호(principal symbol)는 $\sigma\_D(\xi)=i\thinspace c(\xi)$ 이고, 여기서 $c(\xi)$ 는 $\xi$ 의 Clifford 곱이다. $c(\xi)^2=-\vert\xi\vert^2$ 이므로 $\xi\ne 0$ 에서 $\sigma\_D(\xi)$ 가 가역이고 $D$ 는 타원형이다. 따라서 [타원형 정칙성](elliptic-regularity.md)이 적용되어 $Ds=0$ 인 분포 단면은 매끄럽다.

## 자기수반성

$M$ 이 경계 없는 콤팩트 다양체이면 $\int_M\langle Ds,t\rangle=\int_M\langle s,Dt\rangle$ 다.

벡터장 $X$ 를 $\langle X,v\rangle=-\langle v\cdot s,t\rangle$ 로 정하면, 측지 정규 틀(geodesic normal frame)에서 $\mathrm{div}\thinspace X=\langle Ds,t\rangle-\langle s,Dt\rangle$ 이 성립한다. 발산 정리로 좌변의 적분은 $0$ 이다.

## Weitzenböck 공식

스핀 다양체의 Dirac 작용소는 다음을 만족한다. 이것을 Lichnerowicz 공식(Lichnerowicz formula)이라 하고, 일반 Dirac 다발에서 $D^2$ 를 $\nabla^\ast\nabla$ 와 곡률항의 합으로 적은 식을 Weitzenböck 공식(Weitzenböck formula)이라 한다.

$$
D^2=\nabla^\ast\nabla+\frac{\kappa}{4}
$$

여기서 $\kappa$ 는 스칼라 [곡률](curvature.md)이고 $\nabla^\ast\nabla$ 는 접속 Laplace 작용소(connection Laplacian)다. 평면의 예에서는 곡률이 $0$ 이고 $D^2=\nabla^\ast\nabla=-(\partial_x^2+\partial_y^2)$ 다.

측지 정규 틀에서 $D^2s=\sum\_{i,j}e_ie_j\cdot\nabla_i\nabla_js$ 로 적는다. $i=j$ 인 항이 $e_i^2=-1$ 에서 $\nabla^\ast\nabla s$ 를 주고, 나머지는 $\sum\_{i\lt j}e_ie_j\cdot R(e_i,e_j)s$ 다. 스피너에 작용하는 곡률이 $R(e_i,e_j)=\frac14\sum\_{k,l}\langle R(e_i,e_j)e_k,e_l\rangle e_ke_l$ 이므로, Clifford 관계로 정리하면 Bianchi 항등식(Bianchi identity)으로 반대칭 성분이 사라지고 Ricci 축약만 남아 $\kappa/4$ 가 된다.

## 스펙트럼

경계 없는 콤팩트 다양체에서 $D$ 는 자기수반 타원형 작용소이므로 $L^2$ 고윳값이 [실수](real-numbers.md)의 이산집합이고 각 고유공간이 유한차원이며 고유단면들이 $L^2(S)$ 의 완전직교계를 이룬다. 고윳값은 양과 음 양쪽으로 무한히 뻗는다.

길이 $2\pi$ 인 원에서 두 스핀 구조가 두 경계조건을 준다. 주기 조건에서 고윳값이 $\mathbb Z$ 이고 반주기 조건에서 $\mathbb Z+\frac12$ 다.

## 소멸 정리

스칼라 곡률이 양인 경계 없는 콤팩트 스핀 다양체에서 $\ker D=0$ 이다.

$Ds=0$ 이면 Weitzenböck 공식과 자기수반성에서 $0=\int_M\langle D^2s,s\rangle=\Vert\nabla s\Vert^2+\frac14\int_M\kappa\vert s\vert^2$ 다. $\kappa\gt 0$ 이면 우변의 두 항이 모두 음이 아니고 둘째 항은 $s\ne 0$ 에서 양이므로 $s=0$ 이다.

## 지표

$M$ 이 $4k$ 차원 콤팩트 스핀 다양체이면 다음이 성립한다. 이것은 [Atiyah–Singer 지표 정리](index-theorem.md)(Atiyah–Singer index theorem)의 한 경우이고, $\hat A(M)$ 은 $\hat A$ 종수($\hat A$-genus)를 주는 특성류다.

$$
\dim\ker D^+-\dim\ker D^-=\int_M\hat A(M)
$$

우변은 [Pontryagin 류](pontryagin-classes.md)의 다항식이므로 계량에 의존하지 않는다. 소멸 정리와 합치면 $\int_M\hat A(M)\ne 0$ 인 스핀 다양체에는 스칼라 곡률이 양인 계량이 없다. $K3$ 곡면(K3 surface)이 그런 예로, 스핀이고 $\hat A$ 종수가 $2$ 다.

# 활용

- 지표 정리를 Dirac 작용소에 적용하면 $\hat A$ 종수 공식이 나온다. de Rham 복합체와 Dolbeault 복합체의 지표도 계수다발을 꼬은 Dirac 작용소의 지표로 적힌다.
- [Hodge 이론](hodge-theory.md)의 $d+d^\ast$ 가 외대수 다발 위의 Dirac 작용소다. 그 제곱이 Hodge Laplace 작용소이고, Weitzenböck 공식의 곡률항이 1 형식에서 Ricci 곡률이 되어 Ricci 곡률이 양인 다양체의 첫 Betti 수가 $0$ 임을 준다.
- 4 차원 콤팩트 스핀 다양체에서 $\hat A$ 종수가 $-\sigma/8$ 이고 사원수 구조 때문에 지표가 짝수이므로, 부호수(signature) $\sigma$ 가 $16$ 으로 나뉜다. 이것이 Rokhlin 정리(Rokhlin's theorem)다.
- 물리에서 스피너 다발의 단면이 페르미온의 장이고 $Ds=ms$ 가 Dirac 방정식(Dirac equation)이다.

[^1]: H. Blaine Lawson and Marie-Louise Michelsohn, *Spin Geometry*, Princeton University Press (1989), Ch. II. Dirac 다발의 정의, 자기수반성, Weitzenböck 공식과 Lichnerowicz 소멸 정리가 이 장에 있다.

# 연관 문서

## 선수지식

- [Clifford 대수](clifford-algebras.md)
- [스핀 구조](spin-structures.md)

## 더 알아보기

- [Seiberg–Witten 이론](seiberg-witten-theory.md)

#differential_geometry #analysis #algebraic_topology #functional_analysis
