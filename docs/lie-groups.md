# Lie 군

# 개요

**Lie 군(Lie group)** 은 매끄러운 [다양체](manifolds.md)이면서 곱셈과 역원이 매끄러운 군이다. 평면의 회전 전체는 각도 하나로 매개되어 원을 이루고, 공간의 회전 전체는 3 차원 다양체를 이룬다. 이런 군의 곱셈은 [행렬](matrices.md) 곱이라 직접 다루기 어렵지만, 항등원 근처의 아주 작은 회전만 보면 덧셈과 교환자로 계산되는 [Lie 대수](lie-algebras.md)가 나온다. Lie 군의 이론은 군을 그 Lie 대수와 지수사상으로 연구한다.

# 직관

평면을 각 $\theta$ 만큼 돌리는 회전은 행렬

$$
R(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\cr \sin\theta&\cos\theta\end{pmatrix}
$$

이고 $R(\theta)R(\varphi)=R(\theta+\varphi)$ 다. $\theta=0$ 에서 미분하면 $J=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 하나가 나온다. 거꾸로 행렬 지수함수 $\exp(\theta J)=\sum\_{k\ge0}(\theta J)^k/k!$ 를 계산하면 $J^2=-I$ 이므로 짝수 차 항이 $\cos\theta\thinspace I$ 를, 홀수 차 항이 $\sin\theta\thinspace J$ 를 이루어 $\exp(\theta J)=R(\theta)$ 다. 회전 전체가 행렬 $J$ 하나와 수 $\theta$ 로 적힌다.

공간의 회전에서 같은 일을 하면 항등원에서 미분해 얻는 행렬은 $3\times3$ 반대칭 행렬 전체이고, 이것은 3 차원 벡터공간이다. 회전끼리의 곱은 교환하지 않으므로, 미분해 얻은 행렬 쪽에서는 교환자 $XY-YX$ 가 그 정보를 맡는다.

항등원에서 미분해 얻은 것이 군을 전부 결정하는지 물을 수 있다. $\mathrm{SU}(2)$ 와 $\mathrm{SO}(3)$ 은 둘 다 3 차원이고 미분해 얻은 행렬 공간이 교환자까지 같지만($\mathfrak{su}(2)\cong\mathfrak{so}(3)$), $\mathrm{SU}(2)$ 는 $S^3$ 이고 $\mathrm{SO}(3)$ 은 $\mathbb{RP}^3$ 이라 군으로는 다르다.

두 군의 차이는 $S^3\to\mathbb{RP}^3$ 이 이중덮개라는 것뿐이다. $\mathrm{SU}(2)$ 의 $U$ 와 $-U$ 가 $\mathrm{SO}(3)$ 의 같은 회전으로 가고, $\theta=2\pi$ 의 회전은 $\mathrm{SO}(3)$ 에서 항등이지만 $\mathrm{SU}(2)$ 에서는 $-I$ 다. 같은 Lie 대수를 갖는 연결 군들은 하나의 덮개를 공유하므로, Lie 대수로 정해지지 않는 것은 그 덮개의 어느 몫을 고르는가이고 이것은 [덮개공간](covering-spaces.md)의 문제다.

# 정의

## Lie 군

**Lie 군** 은 매끄러운 다양체 $G$ 이면서 군이고, 곱셈 $G\times G\to G$ 와 역원 $G\to G$ 가 매끄러운 것이다. 직관 절의 회전 $R(\theta)$ 전체 $\mathrm{SO}(2)$ 는 원이고 곱셈이 각의 덧셈이므로 Lie 군이다. 가역 $n\times n$ 실행렬 전체 $\mathrm{GL}\_n(\mathbb R)$ 은 $\mathbb R^{n^2}$ 의 열린 집합이고 곱셈과 역원이 성분의 유리함수이므로 Lie 군이다.

$\mathfrak g=T_eG$ 의 괄호는 왼쪽불변 벡터장으로 정의한다. $X\in T_eG$ 에 대해 $X^L_g=(dL_g)\_eX$ 로 벡터장을 만들면 벡터장의 Lie 괄호가 다시 왼쪽불변이므로 $T_eG$ 위의 괄호가 유도된다. 이 괄호를 준 $T\_eG$ 를 $G$ 의 **Lie 대수(Lie algebra)** 라 하고 $\mathrm{Lie}(G)=\mathfrak g$ 로 적는다. $\mathrm{SO}(2)$ 의 Lie 대수는 $J$ 의 실수배 전체이고, 괄호는 $\lbrack aJ,bJ\rbrack=0$ 이다.

## 지수사상과 딸림표현

$X\in\mathfrak g$ 에 대해 $\gamma_X(0)=e$, $\gamma_X'(t)=(dL_{\gamma_X(t)})\_eX$ 인 유일한 곡선을 잡는다. **지수사상(exponential map)** 은 $X$ 를 이 곡선의 시간 $1$ 의 점으로 보내는 사상이다.

$$
\exp(X)=\gamma_X(1)
$$

곡선 $t\mapsto\exp(tX)$ 를 $X$ 의 **1-매개변수 부분군(one-parameter subgroup)** 이라 한다. $X$ 를 왼쪽불변 벡터장으로 볼 때 항등원에서 출발해 그 흐름을 시간 $t$ 만큼 따라간 점이 $\exp(tX)$ 다. $\mathrm{SO}(2)$ 에서 $X=J$ 이면 $\gamma\_J'(t)=R(t)J$ 이고 $R(t)$ 가 이 방정식을 풀므로 $\exp(\theta J)=R(\theta)$ 이며, 1-매개변수 부분군은 $\mathrm{SO}(2)$ 전체다.

**딸림표현(adjoint representation)** 은 켤레 작용의 미분이다.

$$
\mathrm{Ad}:G\to\mathrm{GL}(\mathfrak g),\quad \mathrm{Ad}(g)X=\left.\frac{d}{dt}\right|\_{t=0}g\exp(tX)g^{-1}
$$

$\mathrm{SO}(2)$ 는 가환이므로 $\mathrm{Ad}(g)$ 는 항등사상이다. $\mathrm{SO}(3)$ 에서 반대칭 행렬 $X$ 를 $Xv=x\times v$ 인 벡터 $x\in\mathbb R^3$ 와 동일시하면 $gXg^{-1}$ 은 $gx$ 에 대응하므로 $\mathrm{Ad}(g)$ 는 $x$ 를 $gx$ 로 보낸다.

# 성질

## 지수사상의 기본 성질

$\gamma_X$ 는 $\gamma_X(s+t)=\gamma_X(s)\gamma_X(t)$ 를 만족하는 유일한 준동형 $\mathbb R\to G$ 다. $G\subset\mathrm{GL}\_n(\mathbb R)$ 인 닫힌 부분군이면 $\exp$ 는 행렬 지수함수 $\sum\_{k\ge0}X^k/k!$ 와 같고, Lie 괄호는 교환자 $XY-YX$ 와 같다.

$\mathrm{Ad}$ 를 항등원에서 다시 미분하면 Lie 대수의 $\mathrm{ad}\_X=\lbrack X,\cdot\rbrack$ 가 나오고, 둘은 지수사상으로 이어진다.

$$
\mathrm{Ad}(\exp X)=e^{\mathrm{ad}\_X}
$$

## 대응 정리

- 함자성. Lie 군 준동형 $\varphi:G\to H$ 는 Lie 대수 준동형 $d\varphi:\mathfrak g\to\mathfrak h$ 를 유도하고 $\varphi(\exp X)=\exp(d\varphi\thinspace X)$ 가 성립한다.
- 단순연결에서의 역방향. $G$ 가 단순연결이면 임의의 Lie 대수 준동형 $\psi:\mathfrak g\to\mathfrak h$ 에 대해 $d\varphi=\psi$ 인 군 준동형 $\varphi:G\to H$ 가 유일하게 존재한다.
- 부분대수 대응. 부분대수 $\mathfrak h\subset\mathfrak g$ 마다 $\mathrm{Lie}(H)=\mathfrak h$ 인 연결 부분군 $H\subset G$ 가 유일하게 대응한다. $H$ 가 닫힌 부분군일 필요는 없고, 비합리 기울기의 원환면 감기가 반례다.
- Lie 세 번째 정리(Lie's third theorem). 모든 유한차원 실 Lie 대수는 어떤 Lie 군의 Lie 대수다. [Ado 정리](ado-theorem.md)로 행렬대수에 넣은 뒤 부분대수 대응을 쓴다.
- Cartan 닫힌 부분군 정리(closed subgroup theorem). 위상적으로 닫힌 부분군은 자동으로 매끄러운 부분다양체, 곧 Lie 부분군이다.

둘째 항목에서 단순연결 Lie 군의 [범주](category.md)와 유한차원 실 Lie 대수의 범주가 $\mathrm{Lie}$ 함자로 동치임이 따른다.

연결 Lie 군 $G$ 의 보편덮개 $\tilde G$ 도 Lie 군이고 같은 Lie 대수를 가지며, 덮개공간 이론이 $G\cong\tilde G/\Gamma$ 와 $\pi_1(G)\cong\Gamma$ 를 준다. 여기서 $\Gamma$ 는 $Z(\tilde G)$ 의 이산 부분군이다. Lie 대수가 결정하는 것은 $\tilde G$ 이고, 남는 자유도는 중심의 이산 부분군을 고르는 것뿐이다.

## BCH 공식

$\exp$ 의 $0$ 에서의 미분이 항등사상이므로 [역함수 정리](inverse-function-theorem.md)로 $0$ 의 어떤 근방에서 $\exp$ 가 미분동형이다. 그 근방에서 군의 곱셈은 BCH 공식(Baker–Campbell–Hausdorff formula)으로 괄호만으로 적힌다.

$$
\exp X\thinspace\exp Y=\exp\Big(X+Y+\tfrac12\lbrack X,Y\rbrack+\tfrac1{12}\lbrack X,\lbrack X,Y\rbrack\rbrack-\tfrac1{12}\lbrack Y,\lbrack X,Y\rbrack\rbrack+\cdots\Big)
$$

우변의 모든 항이 반복 괄호이므로 항등원 근방의 곱셈은 Lie 대수만으로 결정된다. 대응 정리의 단순연결 역방향에서 국소적으로 정의된 준동형을 전역으로 확장하는 데 이 사실을 쓴다.

## 지수사상의 상

$\mathrm{SL}\_2(\mathbb R)$ 에서 $\exp$ 는 전사가 아니다. 콤팩트 연결 Lie 군에서는 전사다.

$X\in\mathfrak{sl}\_2(\mathbb R)$ 는 대각합이 0 이므로 고윳값이 $\pm\lambda$ 다. $\lambda$ 가 [실수](real-numbers.md)면 $\exp X$ 의 대각합이 $2\cosh\lambda\ge2$ 이고, $\lambda=i\mu$ 가 순허수면 $2\cos\mu\in\lbrack-2,2\rbrack$ 이며, $X$ 가 멱영이면 $2$ 다. 어느 경우든 $\mathrm{tr}(\exp X)\ge-2$ 이므로 대각합이 $-\tfrac52$ 인 $\mathrm{diag}(-2,-\tfrac12)$ 는 상 밖에 있다.

콤팩트 연결 Lie 군에는 양불변 [Riemann 계량](riemannian-metrics.md)이 존재하고 지수사상이 측지선의 지수사상과 일치하므로, Hopf–Rinow 정리(Hopf–Rinow theorem)로 $\exp$ 가 전사다. 전사가 아닌 군에서도 $\exp$ 의 상이 항등원의 근방을 포함하므로 연결군이면 유한 번 곱해 모든 원소에 닿는다.

## 이중덮개 SU(2)→SO(3) 의 계산

$\mathrm{SU}(2)$ 는 $S^3$ 이라 단순연결이고 $\mathrm{SO}(3)$ 은 $\mathbb{RP}^3$ 이라 $\pi_1=\mathbb Z/2$ 다. 둘을 잇는 것이 다음 완전열이다.

$$
1\to\lbrace\pm I\rbrace\to\mathrm{SU}(2)\to\mathrm{SO}(3)\to1
$$

Pauli 행렬(Pauli matrices)로 $\mathfrak{su}(2)$ 의 원소를 지수화하고 딸림표현을 회전행렬로 읽으면 이 사상이 명시적으로 나온다. $\theta=2\pi$ 에서 $U=-I$ 이지만 대응하는 회전은 항등이고, $U$ 와 $-U$ 는 언제나 같은 회전을 준다. $\mathrm{SU}(2)$ 에서는 $\theta$ 가 $4\pi$ 까지 가야 닫힌 고리가 되고 $\mathrm{SO}(3)$ 에서는 $2\pi$ 면 닫힌다. 그 차이가 $\pi_1(\mathrm{SO}(3))=\mathbb Z/2$ 다.

## 콤팩트 군

콤팩트 Lie 군에서는 [군의 표현](group-representations.md)의 유한군 이론이 거의 그대로 성립한다.

- [Haar 측도](haar-measure.md)로 평균을 낼 수 있어 모든 유한차원 표현이 완전가약이다(Weyl 의 유니터리 트릭(Weyl's unitary trick)).
- 기약표현이 전부 유한차원이고, 동형류는 셀 수 있는 개수다.
- [Peter–Weyl 정리](peter-weyl.md)로 $L^2(G)$ 가 기약표현들의 행렬계수로 분해된다.
- 극대 원환면(maximal torus) $T\subset G$ 가 있고 모든 원소가 어떤 극대 원환면의 켤레에 속한다. 기약표현은 $T$ 의 최고 무게(highest weight)로 분류된다.

$G=\mathrm{SO}(3)$ 에서 이 분해가 [구면조화함수](spherical-harmonics.md)이고 $G=S^1$ 에서는 [Fourier 급수](fourier-series.md)다.

# 활용

## 스핀과 게이지장

$\mathrm{SU}(2)$ 의 표현이 스핀이다. 반정수 스핀은 $\mathrm{SO}(3)$ 이 아니라 그 이중덮개의 표현이고, 그래서 페르미온(fermion)의 상태가 $2\pi$ 회전에서 부호를 바꾼다. 상대론에서는 $\mathrm{SL}\_2(\mathbb C)\to\mathrm{SO}^+(3,1)$ 가 같은 꼴의 이중덮개이고, $\mathrm{SL}\_2(\mathbb C)$ 의 두 기본 표현이 Weyl 스피너(Weyl spinor)다.

게이지 이론(gauge theory)에서 [주다발](principal-bundles.md)의 구조군이 Lie 군이고 게이지장은 Lie 대수값 접속이다. 닫힌 고리를 따라 접속을 적분해 얻는 홀로노미의 대각합이 Wilson 고리(Wilson loop)다.

## 수치 계산과 공학

강체의 자세는 $\mathrm{SO}(3)$ 의 원소, 위치까지 포함하면 $\mathrm{SE}(3)$ 의 원소다. 이 공간은 벡터공간이 아니므로 덧셈으로 상태를 갱신하지 못하고, 대신 Lie 대수에서 갱신량을 만들어 지수사상으로 올린다.

$$
g_{k+1}=g_k\exp(\xi_k)
$$

로봇 자세추정과 SLAM(simultaneous localization and mapping)이 이 형태를 쓴다. 해가 군 위에 머물도록 보장하는 Lie 군 적분기(Lie group integrator)인 Magnus 전개(Magnus expansion)와 Runge–Kutta–Munthe-Kaas 방법도 같은 원리이고, 사원수(quaternion) 회전 표현은 $\mathrm{SU}(2)\cong S^3$ 을 쓰는 것이다.

## 표현론과 정수론

콤팩트 군의 Peter–Weyl 분해를 비콤팩트 군과 산술 몫으로 확장하면 자기동형 형식(automorphic form)이 된다. [Langlands 강령](langlands-program.md)이 그 위에서 서술되고, 실 Lie 군의 무한차원 표현론(Harish-Chandra 이론)이 아르키메데스 자리(archimedean place)의 국소 성분을 다룬다.[^1]

[^1]: B. Hall, *Lie Groups, Lie Algebras, and Representations* (2판, 2015) 가 행렬군 중심이다. 다양체 관점은 J. Lee, *Introduction to Smooth Manifolds* (2판, 2012) 7, 8, 20 장. 콤팩트 군과 Peter–Weyl 은 T. Bröcker, T. tom Dieck, *Representations of Compact Lie Groups* (1985).

# 연관 문서

## 선수지식

- [Lie 대수](lie-algebras.md)
- [덮개공간](covering-spaces.md)
- [미분기하 개관](differential-geometry-overview.md)

## 더 알아보기

### 표현과 근사

- [Peter–Weyl 정리](peter-weyl.md)
- [Solovay–Kitaev 정리](solovay-kitaev.md)

### 기하 구조

- [모멘트 사상](moment-map.md)
- [주다발](principal-bundles.md)
- [등질공간](homogeneous-spaces.md)
- [등거리변환군](isometry-groups.md)
- [Bott 주기성](bott-periodicity.md)
- [Chern–Simons 이론](chern-simons.md)

#differential_geometry #group_theory #linear_algebra
