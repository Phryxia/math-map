# 접속

# 개요

접속은 [벡터다발](vector-bundles.md)의 단면을 방향마다 미분하는 규칙이다. 다발의 서로 다른 섬유는 각자 다른 벡터 공간이므로 단면의 값을 빼는 일이 정의되지 않고, 좌표 미분만으로는 미분이 좌표에 의존한다. 접속은 그 비교를 자료로 지정한다.

같은 자료가 두 모습으로 나타난다. 방향 미분으로 적은 공변미분과, 곡선을 따라 섬유를 옮기는 평행이동이다. 둘은 서로를 결정한다.

# 직관

평면에서 $\partial_x$ 는 모든 점에서 같은 벡터를 주는 벡터장이므로 어느 방향으로 미분해도 $0$ 이어야 한다. 극좌표로 적으면 $\partial_x=\cos\theta\thinspace\partial_r-(\sin\theta/r)\thinspace\partial_\theta$ 이고, 성분은 $V^r=\cos\theta$ 와 $V^\theta=-\sin\theta/r$ 다. 이 성분을 $r$ 로 미분하면 $\partial_r V^r=0$ 이지만 $\partial_r V^\theta=\sin\theta/r^2$ 이다. 성분을 미분하는 것은 답이 아니다.

성분을 미분하면 기저가 변한 몫이 빠진다. 극좌표의 기저 $\partial_\theta$ 는 점마다 방향과 길이가 다르고, $r$ 방향으로 움직이면 $\nabla_{\partial_r}\partial_\theta=(1/r)\thinspace\partial_\theta$ 만큼 바뀐다. 이 값을 성분의 미분에 더하면 $\sin\theta/r^2-(\sin\theta/r)(1/r)=0$ 으로 처음 기대한 값이 나온다. 기저벡터를 각 방향으로 미분한 결과를 다시 기저로 적은 계수를 자료로 주는 것이 접속이다.

# 정의

## 공변미분

벡터다발 $\pi\colon E\to M$ 위의 **접속**은 벡터장 $X$ 와 단면 $s$ 에 단면 $\nabla_X s$ 를 대응시키는 사상으로, 다음 셋을 만족한다.[^1]

- $X$ 에 대해 함수 계수로 선형이다. $\nabla_{fX+gY}s=f\thinspace\nabla_X s+g\thinspace\nabla_Y s$ 다.
- $s$ 에 대해 덧셈을 보존한다.
- 함수 $f$ 에 대해 $\nabla_X(fs)=(Xf)\thinspace s+f\thinspace\nabla_X s$ 다.

$\nabla_X s$ 를 $X$ 방향의 **공변미분**이라 한다. 첫 조건으로 $\nabla_X s\vert_p$ 는 $X_p$ 에만 의존하고, 셋째 조건으로 $s$ 에는 $p$ 근방의 값이 모두 관여한다.

## 접속계수

국소 자명화 위의 틀 $\lbrace e_1,\dots,e_r\rbrace$ 과 좌표 $(x^1,\dots,x^n)$ 을 고정한다. **접속계수** $\Gamma^b\_{ia}$ 는 기저의 공변미분을 다시 기저로 적은 성분이다.

$$
\nabla_{\partial_i}e_a=\sum_b \Gamma^b\_{ia}\thinspace e_b
$$

단면 $s=\sum_a s^a e_a$ 의 공변미분은 성분의 미분에 이 계수가 붙은 항을 더한 것이다.

$$
\nabla_{\partial_i}s=\sum_b\Bigl(\partial_i s^b+\sum_a \Gamma^b\_{ia}\thinspace s^a\Bigr)e_b
$$

접속계수를 행렬값 1형식 $A=(A^b\_a)$, $A^b\_a=\sum_i \Gamma^b\_{ia}\thinspace dx^i$ 로 묶으면 접속은 $\nabla=d+A$ 꼴이고, 이 $A$ 를 **접속형식**이라 한다.

## 접속형식의 변환

틀을 $e'\_a=\sum_b h^b\_a e_b$ 로 바꾸면 접속형식은 다음으로 바뀐다. 여기서 $h$ 는 가역행렬값 함수다.

$$
A'=h^{-1}Ah+h^{-1}\thinspace dh
$$

둘째 항 때문에 $A$ 는 텐서가 아니다. 한 점에서 $h$ 를 골라 $A$ 를 $0$ 으로 만들 수 있으므로 접속형식 자체는 점마다의 불변량을 주지 않는다.

## 평행이동

곡선 $\gamma\colon\lbrack 0,1\rbrack\to M$ 을 따르는 단면 $s$ 가 $\nabla_{\dot\gamma}s=0$ 을 만족하면 $\gamma$ 를 따라 **평행**하다고 한다. 좌표에서 이 조건은 성분에 대한 1계 선형 상미분방정식이다.

$$
\dot s^b(t)+\sum_{i,a}\Gamma^b\_{ia}(\gamma(t))\thinspace\dot\gamma^i(t)\thinspace s^a(t)=0
$$

초깃값 $s(0)\in E_{\gamma(0)}$ 마다 해가 유일하게 있고 해가 초깃값에 선형으로 의존하므로, 선형동형 $P_\gamma\colon E_{\gamma(0)}\to E_{\gamma(1)}$ 이 정해진다. 이것이 $\gamma$ 를 따르는 **평행이동**이다.

## 비틀림

접다발 위의 접속에 대해 **비틀림**은 벡터장 둘에 벡터장을 주는 다음 사상이다.

$$
T(X,Y)=\nabla_X Y-\nabla_Y X-\lbrack X,Y\rbrack
$$

$T$ 는 $X$ 와 $Y$ 에 대해 함수 계수로 선형이므로 텐서다. 좌표에서 $T$ 의 성분은 $\Gamma^k\_{ij}-\Gamma^k\_{ji}$ 이고, $T=0$ 인 것은 접속계수가 아래 두 첨자에 대해 대칭인 것과 같다.

# 성질

## 접속의 존재와 아핀 구조

**정리.** 모든 벡터다발은 접속을 갖고, 접속 전체는 $\mathrm{End}(E)$ 값 1형식의 벡터 공간 위의 아핀 공간이다.

증명의 요지. 국소 자명화 $U_\alpha$ 마다 성분별 미분 $d$ 가 접속이고, [단위분할](partitions-of-unity.md) $\lbrace\rho_\alpha\rbrace$ 로 $\nabla=\sum_\alpha\rho_\alpha\nabla^\alpha$ 를 만들면 $\sum_\alpha\rho_\alpha=1$ 이므로 Leibniz 규칙이 보존된다. 두 접속의 차이 $\nabla-\nabla'$ 는 $(Xf)s$ 항이 상쇄되어 $s$ 에 대해 함수 계수로 선형이고, 따라서 $\mathrm{End}(E)$ 값 1형식이다. ∎

## 공변미분과 평행이동의 동등성

**정리.** 접속은 평행이동 족으로 결정되고, 평행이동 족은 접속으로 결정된다.

증명의 요지. 접속에서 평행이동은 위 상미분방정식의 해로 나온다. 거꾸로 평행이동이 주어지면, $X_p=\dot\gamma(0)$ 인 곡선 $\gamma$ 와 $\gamma$ 를 따르는 평행이동 $P_t\colon E_p\to E_{\gamma(t)}$ 에 대해 다음이 공변미분이다.

$$
\nabla_X s\vert_p=\lim_{t\to 0}\frac{P_t^{-1}s(\gamma(t))-s(p)}{t}
$$

평행이동이 선형동형이므로 우변은 $E_p$ 의 원소이고, $P_t$ 가 $t$ 에 매끄럽게 의존하므로 극한이 존재한다. Leibniz 규칙은 $P_t^{-1}(f(\gamma(t))s(\gamma(t)))$ 를 $f$ 와 $s$ 의 몫으로 쪼개면 나온다. ∎

## Levi-Civita 접속의 유일성

**정리.** Riemann 다양체 $(M,g)$ 에서 계량과 양립하고 비틀림이 없는 접속은 유일하다.

여기서 계량과 양립한다는 것은 $Xg(Y,Z)=g(\nabla_X Y,Z)+g(Y,\nabla_X Z)$ 라는 뜻이다. 유일한 접속이 [Riemann 계량](riemannian-metrics.md) 문서의 Levi-Civita 접속이고, 좌표 성분이 Christoffel 기호다.

증명의 요지. 계량 양립 조건을 $Xg(Y,Z)$, $Yg(Z,X)$, $Zg(X,Y)$ 세 자리에 적고 앞의 둘을 더해 셋째를 빼면, 비틀림이 없다는 조건으로 $\nabla_Y Z-\nabla_Z Y$ 를 $\lbrack Y,Z\rbrack$ 로 바꿀 수 있어 좌변에 $g(\nabla_X Y,Z)$ 만 두 번 남는다.

$$
2g(\nabla_X Y,Z)=Xg(Y,Z)+Yg(X,Z)-Zg(X,Y)+g(\lbrack X,Y\rbrack,Z)-g(\lbrack X,Z\rbrack,Y)-g(\lbrack Y,Z\rbrack,X)
$$

우변은 접속을 쓰지 않으므로 좌변이 계량만으로 정해진다. 우변이 $Z$ 에 대해 함수 계수로 선형이고 $g$ 가 비퇴화이므로 $\nabla_X Y$ 가 하나 결정된다. 이 식으로 정의한 $\nabla$ 는 접속의 세 조건과 두 가정을 만족한다. ∎

## 홀로노미

$p$ 에서 출발해 $p$ 로 돌아오는 고리 $\gamma$ 의 평행이동 $P_\gamma$ 는 $E_p$ 의 가역선형변환이다. 고리를 이어 붙이는 연산이 합성이 되므로 이들은 $\mathrm{GL}(E_p)$ 의 부분군을 이루고, 이것을 **홀로노미 군**이라 한다.

**정리.** [곡률](curvature.md)이 $0$ 인 접속의 홀로노미는 고리의 호모토피류에만 의존하고, 표현 $\pi_1(M)\to\mathrm{GL}(E_p)$ 를 준다.

증명의 요지. 곡률이 $0$ 이면 국소적으로 평행한 틀이 있어 작은 사각형을 따르는 평행이동이 항등이다. 호모토피를 작은 사각형으로 쪼개면 호모토피로 이어진 두 고리의 평행이동이 같다. ∎

곡률은 이 경로 의존성의 미분형 측도다. 작은 평행사변형을 따르는 평행이동과 항등사상의 차이의 2차 항이 곡률 2형식이다.

# 활용

- [측지선](geodesics.md)은 속도장이 자기 자신을 따라 평행인 곡선, 곧 $\nabla_{\dot\gamma}\dot\gamma=0$ 인 곡선으로 정의된다. 좌표에서 접속계수가 들어간 2계 상미분방정식이 되고, 그 해의 유일성이 지수사상을 준다.
- [곡률](curvature.md)의 Riemann 곡률 텐서는 접다발 위 Levi-Civita 접속의 곡률이다. 계량이 접속을 하나 정하고 그 접속이 곡률을 정한다.
- [특성류](characteristic-classes.md)를 Chern–Weil 이론이 곡률 2형식의 불변 다항식으로 적는다. 접속을 바꾸면 그 형식이 완전형식만큼 달라지므로 [de Rham 코호몰로지](de-rham-cohomology.md)류는 접속의 선택에 의존하지 않는다.
- [Chern–Simons 이론](chern-simons.md)의 작용은 접속형식 $A$ 의 다항식 $\mathrm{tr}(A\wedge dA+\tfrac{2}{3}A\wedge A\wedge A)$ 를 적분한 것이다. 틀을 바꾸면 적분값이 정수만큼 변하므로 계수를 정수로 잡는다.
- [Hodge 이론](hodge-theory.md)과 [지표 정리](index-theorem.md)가 다발 위 타원 작용소를 접속으로 만든다. 공변미분을 외미분 자리에 넣어 꼬인 de Rham 복합체와 Dirac 작용소를 세운다.

[^1]: Shoshichi Kobayashi and Katsumi Nomizu, *Foundations of Differential Geometry*, Vol. 1, Wiley (1963), Ch. II–III. 접속의 공리, 평행이동과의 대응, 비틀림과 홀로노미가 이 두 장에 있다.

# 연관 문서

## 선수지식

- [벡터다발](vector-bundles.md)

## 더 알아보기

- [측지선](geodesics.md)
- [Yang–Mills 이론](yang-mills-theory.md)

#differential_geometry #topology #algebraic_topology
