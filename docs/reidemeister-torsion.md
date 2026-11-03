# Reidemeister 비틀림

# 개요

**Reidemeister 비틀림(Reidemeister torsion)** 은 공간을 세포로 나눈 자료에서 경계사상들이 맞물리는 방식을 [행렬식](determinants.md)으로 재어 얻는 수다. $\zeta=e^{2\pi i/7}$ 로 두고 구면 $S^3\subset\mathbb C^2$ 를 회전 $(z_1,z_2)\mapsto(\zeta z_1,\zeta z_2)$ 로 접은 공간 $L(7,1)$ 과 회전 $(z_1,z_2)\mapsto(\zeta z_1,\zeta^2z_2)$ 로 접은 공간 $L(7,2)$, 두 [렌즈 공간](lens-spaces.md)은 서로 호모토피 동치(homotopy equivalent)여서 호모토피 동치로 바뀌지 않는 불변량의 값이 전부 같다. 두 공간이 위상동형이 아님을 보이려면 그보다 섬세한 불변량이 있어야 한다. Reidemeister 는 1935 년에 두 공간의 세포 분할에서 이 수를 계산해 서로 다른 값이 나옴을 보였다[^1].

# 직관

$L(7,1)$ 과 $L(7,2)$ 는 둘 다 차원 $0,1,2,3$ 에 세포가 하나씩인 [CW 복합체](cw-complexes.md)(closure-finite weak topology)이고, [기본군](fundamental-group.md)이 둘 다 $\mathbb Z/7$ 이다. 세포마다 생성원 하나를 두고 경계를 적으면 두 공간 모두 경계사상이 $0$, $7$ 을 곱하는 사상, $0$ 이 된다. [호몰로지](homology.md)는 이 사상들의 핵과 상만 보므로 두 공간에서 같은 값이 나온다.

구별하려면 [덮개공간](covering-spaces.md)을 펼쳐 본다. 가장 작은 예는 원이다. 원은 점 하나와 고리 하나로 되어 있고, 고리를 실직선으로 펼치면 정수점마다 점 하나, 구간 $\lbrack n,n+1\rbrack$ 마다 고리 하나가 놓인다. 구간 $\lbrack 0,1\rbrack$ 의 경계는 끝점 $1$ 에서 시작점 $0$ 을 뺀 것이고, 끝점은 시작점을 한 칸 민 것이다. 한 칸 밀기를 $0$ 도 $1$ 도 아닌 [복소수](complex-numbers.md) $t$ 를 곱하는 것으로 바꾸면 경계사상은 $t-1$ 을 곱하는 사상 $\mathbb C\to\mathbb C$ 가 된다.

$t\ne 1$ 이므로 이 사상은 가역이고 호몰로지가 전부 $0$ 이다. 그래도 수 $t-1$ 은 남는다. 이 수가 원에 $t$ 를 붙였을 때의 비틀림이다.

렌즈 공간에서 같은 계산을 하면 경계사상이 $t-1$ 을 곱하는 것과 $t^{r}-1$ 을 곱하는 것 둘로 갈린다. 지수 $r$ 이 회전의 두 번째 지수에서 정해지므로 $L(7,1)$ 과 $L(7,2)$ 에서 나오는 수가 다르다. 경계사상이 여럿이면 각 사상의 행렬식을 교대로 곱한다. [Euler 지표](euler-characteristic.md)가 세포 수의 교대합인 것과 같은 꼴이다.

# 정의

## 비순환 복합체의 비틀림

[사슬 복합체](chain-complexes.md) $C_\ast$ 가 **비순환(acyclic)** 이라는 것은 $H_\ast(C)=0$ 이라는 것이다. $C_\ast$ 를 각 $C_i$ 의 기저 $c_i$ 가 주어진 유한 비순환 복합체라 하자. 각 $i$ 에서 $B_i=\mathrm{im}\thinspace\partial_{i+1}=\ker\partial_i$ 의 기저 $b_i$ 를 고르고, $b_{i-1}$ 의 원소마다 $\partial_i$ 로 그 원소에 가는 $C_i$ 의 원소를 하나씩 골라 $\widetilde b_{i-1}$ 이라 한다. $b_i$ 와 $\widetilde b_{i-1}$ 을 합치면 $C_i$ 의 기저가 되고, 이 기저를 $c_i$ 로 적은 변환행렬의 행렬식을 $\lbrack b_i\widetilde b_{i-1}/c_i\rbrack$ 로 쓴다.

$$
\tau(C_\ast)=\prod_i\lbrack b_i\widetilde b_{i-1}/c_i\rbrack^{(-1)^i}
$$

이 값이 $C_\ast$ 의 **Reidemeister 비틀림** 이다.

직관 절의 원에서 $C_1=\mathbb C c_1$, $C_0=\mathbb C c_0$, $\partial c_1=(t-1)c_0$ 이다. $B_0=C_0$ 이므로 $b_0=c_0$ 이고 $B_1=0$ 이다. $c_0$ 으로 가는 원소는 $\widetilde b_0=c_1/(t-1)$ 이므로 $i=1$ 의 행렬식은 $1/(t-1)$ 이고 $i=0$ 의 행렬식은 $1$ 이다. 따라서 $\tau=(1/(t-1))^{-1}=t-1$ 이다.

## 비꼰 계수

닫힌 [다양체](manifolds.md)의 보통 사슬 복합체는 $H_0\ne 0$ 이어서 비순환이 아니다. 기본군의 표현을 계수로 넣으면 비순환이 될 수 있다.

$M$ 을 유한 CW 복합체, $\rho:\pi_1(M)\to\mathrm{GL}\_n(\mathbb C)$ 를 [군의 표현](group-representations.md)이라 하자. 보편덮개(universal cover) $\widetilde M$ 의 세포 사슬 복합체 $C_\ast(\widetilde M)$ 에는 $\pi_1(M)$ 이 덮개변환(deck transformation)으로 작용한다. **비꼰 계수(twisted coefficients)** 의 사슬 복합체는

$$
C_\ast^\rho(M)=\mathbb C^n\otimes_{\mathbb Z\pi_1}C_\ast(\widetilde M)
$$

이다. 이것이 비순환이면 $\rho$ 를 **비순환 표현(acyclic representation)** 이라 하고, 세포마다 덮개의 들림 하나를 골라 정한 기저로 $\tau_\rho(M)=\tau(C_\ast^\rho(M))$ 이라 쓴다.

원 $S^1$ 의 보편덮개는 실직선이고 $\pi_1=\mathbb Z$ 의 생성원은 한 칸 밀기다. 생성원을 $t\in\mathbb C^\times$ 로 보내는 1 차원 표현 $\rho$ 에서 $C_\ast^\rho(S^1)$ 은 직관 절의 복합체 $\mathbb C\xrightarrow{t-1}\mathbb C$ 이다. $t\ne 1$ 이면 $\rho$ 는 비순환이고 $\tau_\rho(S^1)=t-1$ 이다.

## 애매성

세포의 순서와 방향, 각 세포에 고르는 들림을 바꾸면 비틀림은 $\pm\det\rho(g)$ 꼴의 수만큼 곱해진다. 따라서 $\tau_\rho(M)$ 은

$$
\mathbb C^\times/\lbrace\pm\det\rho(g):g\in\pi_1(M)\rbrace
$$

의 원소다. 원에서 고리의 들림을 $\lbrack 0,1\rbrack$ 대신 $\lbrack 1,2\rbrack$ 로 고르면 값이 $t(t-1)$ 이 된다. $\rho$ 가 유니터리(unitary)이면 $\vert\det\rho(g)\vert=1$ 이므로 절댓값 $\vert\tau_\rho\vert$ 는 하나로 정해진다.

# 성질

## 세분 불변성

$\tau_\rho(M)$ 은 세포 분할을 세분해도 바뀌지 않는다(Reidemeister, Franz, de Rham). 같은 공간의 서로 다른 CW 구조에서 같은 값이 나온다는 것은 Chapman 의 Whitehead 비틀림 위상 불변성 정리(topological invariance of Whitehead torsion)에서 따라 나온다[^3].

## 렌즈 공간의 비틀림

$\pi_1(L(p,q))=\mathbb Z/p$ 의 생성원 $g$ 를 $\zeta^j$ ($\zeta=e^{2\pi i/p}$, $0\lt j\lt p$)로 보내는 1 차원 표현을 $\rho_j$ 라 하고, $q^\ast$ 를 $qq^\ast\equiv 1\pmod p$ 인 수라 하자.

$$
\tau_{\rho_j}(L(p,q))=(\zeta^j-1)(\zeta^{jq^\ast}-1)
$$

증명의 요지. 보편덮개 $S^3$ 의 표준 세포 구조에서 경계사상은 차례로 $g-1$, $1+g+\cdots+g^{p-1}$, $g^{q^\ast}-1$ 이다. $\rho_j$ 를 적용하면 가운데 사상은 $1$ 의 $p$ 제곱근의 합이라 $0$ 이 되고, 복합체는 $\mathbb C\xrightarrow{\zeta^j-1}\mathbb C$ 두 개와 $\mathbb C\xrightarrow{\zeta^{jq^\ast}-1}\mathbb C$ 두 개로 갈린다. 원의 계산을 두 번 하면 위 식이 나온다.

$q$ 가 $q^\ast$ 를 거쳐 이 식에 들어오므로 비틀림은 $p$ 와 $q$ 를 함께 본다. 호몰로지는 $p$ 만 본다.

## 렌즈 공간의 분류

$L(p,q)$ 와 $L(p,q')$ 이 호모토피 동치일 필요충분조건은 $qq'\equiv\pm n^2\pmod p$ 인 정수 $n$ 이 존재하는 것이다. 두 공간이 위상동형일 필요충분조건은 $q'\equiv\pm q^{\pm 1}\pmod p$ 인 것이다.

앞의 조건은 호몰로지와 기본군, [코호몰로지](cohomology.md)의 곱으로 판정되고, 뒤의 조건은 비틀림으로 판정된다. $p=7$, $q=1$, $q'=2$ 에서 $1\cdot 2=2\equiv 3^2\pmod 7$ 이므로 두 공간은 호모토피 동치다. $\pm 1^{\pm 1}$ 은 법 $7$ 로 $1$ 과 $6$ 이고 $2$ 가 그 가운데 없으므로 위상동형이 아니다.

## 단순 호모토피와 Whitehead 비틀림

비틀림은 호모토피 동치에서 불변이 아니다. 세포를 붙였다 떼는 기본 조작만으로 이어지는 **단순 호모토피 동치(simple homotopy equivalence)** 에서 불변이다.

호모토피 동치 $f:X\to Y$ 마다 Whitehead 군(Whitehead group) $\mathrm{Wh}(\pi_1)$ 의 원소 $\tau(f)$ 가 정해지고, $\tau(f)=0$ 인 것이 단순 호모토피 동치다. 이 $\tau(f)$ 를 **Whitehead 비틀림(Whitehead torsion)** 이라 한다. $\tau(f)$ 를 표현 $\rho$ 로 보내면 $\tau_\rho(X)$ 와 $\tau_\rho(Y)$ 의 비가 나온다.

$p\ge 5$ 인 소수에서 $\mathrm{Wh}(\mathbb Z/p)$ 는 계수가 $(p-3)/2$ 인 자유 아벨 군이므로, $L(7,1)$ 과 $L(7,2)$ 에서처럼 호모토피 동치와 단순 호모토피 동치가 갈릴 수 있다. 자유군의 Whitehead 군은 자명하고(Stallings), 이런 기본군에서는 두 개념이 일치한다.

[s-코보디즘 정리](s-cobordism.md)는 차원이 $5$ 이상인 다양체 사이의 h-[코보디즘](cobordism.md)(h-cobordism)이 곱과 미분동형일 필요충분조건으로 Whitehead 비틀림의 소멸을 든다. 단일 연결이면 Whitehead 군이 자명하므로 차원 $5$ 이상의 Poincaré 추측이 여기서 증명된다.

## 다른 정의와의 일치

- 매듭 $K$ 의 여집합에 기본군의 아벨화 $\pi_1\to\mathbb Z=\langle t\rangle$ 로 계수를 주면 비틀림은 $\Delta_K(t)/(t-1)$ 이다. $\Delta_K$ 는 [Alexander 다항식](alexander-polynomial.md)이다(Milnor).
- 해석적 비틀림(analytic torsion).[^2] Ray–Singer 가 Laplace 작용소의 [제타 정규화 행렬식](zeta-regularized-determinant.md)으로 같은 양을 정의했고, Cheeger 와 Müller 가 두 양의 일치를 증명했다.
- [Witten 점근 추측](witten-asymptotics.md)에서 각 평탄 [접속](connection.md)(flat connection)의 기여 크기 $\sqrt{T_\alpha}$ 의 $T_\alpha$ 가 이 비틀림이다. 경로적분의 2 차 변분 행렬식을 정규화하면 비틀림이 된다.

# 활용

## 렌즈 공간의 구별

$\vert\tau_{\rho_j}\vert$ 를 $j=1,\dots,p-1$ 에서 모은 다중집합은 기저 선택의 애매성과 생성원 선택에 의존하지 않는 불변량이다. $j$ 와 $p-j$ 는 같은 값을 주므로 $p=7$ 에서는 $j=1,2,3$ 의 값만 보면 된다.

| 쌍 | 호모토피 동치 | 위상동형 | 비틀림 일치 |
| --- | --- | --- | --- |
| $L(7,1)$ , $L(7,2)$ | 예 | 아니오 | 아니오 |
| $L(7,1)$ , $L(7,6)$ | 예 | 예 | 예 |
| $L(15,1)$ , $L(15,4)$ | 예 | 아니오 | 아니오 |
| $L(5,1)$ , $L(5,2)$ | 아니오 | 아니오 | 아니오 |
| $L(13,1)$ , $L(13,5)$ | 아니오 | 아니오 | 아니오 |

$L(7,1)$ 에서는 $q^\ast=1$ 이므로 $\vert\tau_{\rho_j}\vert=\vert\zeta^j-1\vert^2=4\sin^2(\pi j/7)$ 이고, $j=1,2,3$ 에서 $0.753$, $2.445$, $3.802$ 다. $L(7,2)$ 에서는 $q^\ast=4$ 이므로 $\vert\tau_{\rho_j}\vert=4\vert\sin(\pi j/7)\sin(4\pi j/7)\vert$ 이고, $j=1,2,3$ 에서 $1.692$, $1.357$, $3.049$ 다. 겹치는 값이 없으므로 두 공간은 위상동형이 아니다. 두 공간은 호모토피 동치이므로 호몰로지, 코호몰로지 환, 기본군, 고차 [호모토피군](homotopy-groups.md)이 전부 같다.

$L(7,6)$ 은 $q'=6\equiv -1$ 이라 $L(7,1)$ 과 방향만 다른 같은 공간이고 비틀림도 일치한다.

$L(7,1)$ 의 값은 렌즈 공간의 [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)을 [Gauss 합](gauss-sums.md) 상호법칙으로 분해했을 때 각 평탄 접속의 진폭으로 나오는 수와 같다.

## 다양체 분류, 매듭 이론, 양자 불변량

- 분류 문제. 호모토피형이 같은 다양체를 구별한다. 렌즈 공간이 표준 예이고, 고차원에서는 s-코보디즘 정리를 거쳐 분류 이론에 쓰인다.
- 매듭 이론. Alexander 다항식이 비틀림으로 적히므로, 비틀림의 쌍대성에서 Alexander 다항식의 대칭성 $\Delta_K(t)\doteq\Delta_K(t^{-1})$ 이 나온다(Milnor).
- 양자 불변량. [Chern–Simons 이론](chern-simons.md)에서 평탄 접속은 $\pi_1$ 의 표현이고, 평탄 접속마다 붙는 비틀림이 안장점 근사의 진폭으로 나타난다.

[^1]: 원전은 K. Reidemeister, *Homotopieringe und Linsenräume*, Abh. Math. Sem. Univ. Hamburg 11 (1935) 와 W. Franz, *Über die Torsion einer Überdeckung*, J. Reine Angew. Math. 173 (1935). 표준적인 현대적 서술은 J. Milnor, *Whitehead torsion*, Bull. AMS 72 (1966).
[^2]: 해석적 비틀림과의 일치는 J. Cheeger, Ann. of Math. 109 (1979) 와 W. Müller, Adv. Math. 28 (1978). 매듭 여집합의 비틀림이 Alexander 다항식으로 적힌다는 것은 J. Milnor, *A duality theorem for Reidemeister torsion*, Ann. of Math. 76 (1962).
[^3]: T. A. Chapman, *Topological invariance of Whitehead torsion*, Amer. J. Math. 96 (1974).

# 연관 문서

## 선수지식

- [CW 복합체](cw-complexes.md)
- [단체 호몰로지](homology.md)
- [행렬식](determinants.md)

## 더 알아보기

- [s-코보디즘 정리와 고차원 Poincaré 추측](s-cobordism.md)

#algebraic_topology #topology #linear_algebra
