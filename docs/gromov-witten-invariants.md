# Gromov–Witten 불변량

# 개요

**Gromov–Witten 불변량(Gromov–Witten invariant)** 은 주어진 종수와 호몰로지류의 곡선이 정해진 사이클들과 만나는 수를 세는 유리수다. 안정 사상의 모듈라이 공간 위에서 평가 사상으로 당긴 류들의 교차수로 정의하고, 조건을 움직이거나 복소구조를 변형해도 값이 변하지 않는다.

# 직관

평면에서 점 두 개를 지나는 직선은 하나이고, 일반 위치의 점 다섯 개를 지나는 원뿔곡선도 하나다. 점을 조금씩 움직여도 이 수는 하나로 유지된다.

점을 특별한 자리에 두면 수가 깨진다. 다섯 점 가운데 셋이 한 직선 위에 있으면 그 다섯 점을 지나는 매끄러운 원뿔곡선이 없다. 대신 그 직선과 나머지 두 점을 잇는 직선의 합집합이 다섯 점을 모두 지난다. 쪼개진 이차곡선을 세면 수가 다시 하나다.

곡선을 평면의 부분집합으로 보는 대신 곡선에서 평면으로 가는 사상으로 보면 퇴화를 정의역 쪽으로 옮길 수 있다. 정의역이 쪼개지고 노드가 생기는 것을 허용해 사상 전체를 콤팩트한 모듈라이 공간으로 만들고, 점을 지난다는 조건을 그 공간 위의 사이클로 적어 교차수를 센다. 교차수는 사이클을 일반 위치로 움직여도 변하지 않으므로 처음 두 문단의 수가 특별한 자리에서도 유지된다.

# 정의

$X$ 를 매끄러운 사영다양체라 하고 $\beta\in H_2(X,\mathbb Z)$ 를 호몰로지류라 한다.

**안정 사상**은 $n$ 개의 점이 표시된 종수 $g$ 의 안정곡선 $C$ 에서 $X$ 로 가는 사상 $f$ 로, $f\_\ast\lbrack C\rbrack=\beta$ 이고 $f$ 가 상수인 성분마다 그 성분이 안정곡선의 조건을 만족하는 것이다. 마지막 조건이 자기동형군을 유한하게 만든다.

$\overline{\mathcal M}\_{g,n}(X,\beta)$ 는 안정 사상의 동형류의 모듈라이 공간이다. 표시점 $i$ 의 상을 취하면 **평가 사상**

$$\mathrm{ev}\_i\colon \overline{\mathcal M}\_{g,n}(X,\beta)\to X$$

이 나온다.

**Gromov–Witten 불변량**은 코호몰로지류 $\gamma_1,\dots,\gamma_n\in H^\ast(X)$ 에 대해

$$\langle\gamma_1,\dots,\gamma_n\rangle\_{g,\beta}=\int\_{\lbrack\overline{\mathcal M}\_{g,n}(X,\beta)\rbrack^{\mathrm{vir}}}\mathrm{ev}\_1^\ast\gamma_1\cup\dots\cup\mathrm{ev}\_n^\ast\gamma_n$$

로 정의되는 유리수다. $\lbrack\cdot\rbrack^{\mathrm{vir}}$ 은 가상 기본류다. 모듈라이 공간이 기대 차원보다 큰 성분을 가져도 이 류의 차원은 기대 차원이므로 적분이 정해진다.

기대 차원은

$$\dim\_{\mathbb C}=\int\_\beta c_1(T_X)+(\dim X-3)(1-g)+n$$

이고, 적분이 $0$ 이 아니려면 $\gamma_i$ 의 차수의 합이 이 차원의 두 배여야 한다.

# 성질

## 변형 불변성

$X$ 의 복소구조를 변형하거나 사이클의 대표를 바꾸어도 $\langle\gamma_1,\dots,\gamma_n\rangle\_{g,\beta}$ 는 변하지 않는다. 심플렉틱 구조만 고정하면 값이 정해지므로 이 불변량은 [심플렉틱 다양체](symplectic-manifolds.md)의 불변량이다.

$\gamma_i$ 를 쌍대 사이클로 바꿔 읽으면 교차수가 사이클의 위치에 변하지 않는 것이고, 그래서 특별한 자리에서 셈이 깨지는 것을 일반 위치의 값으로 메운다.

## 종수 0 세 점 불변량

$\beta=0$ 에서 모듈라이 공간이 $X$ 자신으로 줄고 불변량이 보통의 교차수가 된다.

$$\langle\gamma_1,\gamma_2,\gamma_3\rangle\_{0,0}=\int_X\gamma_1\cup\gamma_2\cup\gamma_3$$

$\beta\neq 0$ 의 세 점 불변량은 $\beta$ 를 대표하는 유리곡선이 세 사이클을 모두 만나는 수를 센다. 이 수들을 $\beta$ 에 대해 모두 모아 컵곱을 변형하면 결합적인 곱이 나오고, 결합성이 불변량 사이의 점화식으로 적힌다.

## 유리곡선의 셈

$X=\mathbb P^2$ 와 차수 $d$ 의 유리곡선에서 불변량 $N_d$ 는 일반 위치의 점 $3d-1$ 개를 지나는 차수 $d$ 유리곡선의 수다. 결합성에서 나오는 점화식이 이 수들을 결정한다.[^1]

$$N_d=\sum\_{d_1+d_2=d}N\_{d_1}N\_{d_2}\left(d_1^2d_2\binom{3d-4}{3d_1-2}-d_1^3\binom{3d-4}{3d_1-1}\right)$$

$N_1=1$ 에서 출발하면 $N_2=1$, $N_3=12$, $N_4=620$ 이 나온다. 차수 $3$ 의 수 $12$ 는 점 여덟 개를 지나는 특이 삼차곡선의 고전적 셈과 같다.

# 활용

- **양자 코호몰로지.** 종수 $0$ 세 점 불변량으로 $H^\ast(X)$ 의 컵곱을 변형하면 결합적인 곱이 나온다. 결합성이 주는 관계식이 Gromov–Witten 불변량 사이의 점화식이고, 그 관계식을 풀어 불변량을 계산한다.
- **거울대칭의 검증.** Calabi–Yau 삼차원 다양체의 Gromov–Witten 불변량을 모은 생성함수가 거울짝의 주기 적분이 만족하는 미분방정식에서 나오는 급수와 일치한다. 이 일치가 거울대칭의 수치적 내용이다.
- **곡선 셈 문제의 통일.** 고전적 열거기하의 셈(점을 지나는 원뿔곡선, 접하는 곡선의 수)을 안정 사상의 모듈라이 공간 위의 교차수 하나로 적는다. 셈이 퇴화에서 깨지는 자리를 가상 기본류가 메운다.

[^1]: M. Kontsevich and Yu. Manin, "Gromov-Witten Classes, Quantum Cohomology, and Enumerative Geometry", Communications in Mathematical Physics **164** (1994), 525–562.

# 연관 문서

## 선수지식

- [곡선의 모듈라이 공간](moduli-of-curves.md)
- [심플렉틱 다양체](symplectic-manifolds.md)

## 더 알아보기

- [양자 코호몰로지](quantum-cohomology.md)

#algebra #differential_geometry #topology
