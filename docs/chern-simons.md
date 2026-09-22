# Chern–Simons 이론

# 개요

Chern–Simons 작용[^1]은 3 차원 [다양체](manifolds.md) 위에서 계량 없이 정의되는 접속의 범함수다.

$$
\mathrm{CS}(A)=\frac1{8\pi^2}\int_M\mathrm{tr}\Big(A\wedge dA+\tfrac23A\wedge A\wedge A\Big)
$$

$A$ 는 $G$ 주다발 위의 접속, 곧 [Lie 대수](lie-algebras.md) 값을 갖는 1 형식이다. [미분형식](differential-forms.md)의 3 형식을 3 차원 다양체 위에서 적분하는 것뿐이라 계량이 들어갈 자리가 없고, 그래서 3 차원 위상적 장론이 존재한다.

이 문서는 세 가지를 다룬다. 이 식은 4 차원 특성류 $\mathrm{tr}(F\wedge F)$ 를 한 차원 내려 적은 것이다. $\mathrm{CS}(A)$ 는 게이지 변환에서 정수만큼 변하므로 $e^{2\pi ik\thinspace\mathrm{CS}(A)}$ 가 $k\in\mathbb Z$ 일 때만 잘 정의된다. 임계점은 평탄 접속이고 거기서 $\mathrm{CS}$ 는 $\mathbb R/\mathbb Z$ 값의 위상 불변량이 되며, 이 수들이 [Witten 점근 추측](witten-asymptotics.md)에서 양자 불변량의 점근 위상으로 나타난다.

# 직관

## 특성류의 원시함수

곡률 $F=dA+A\wedge A$ 에 대해 $\mathrm{tr}(F\wedge F)$ 는 닫힌 4 형식이고 그 코호몰로지류가 2 차 Chern 류다. 닫혀 있으면 국소적으로 완전하고, 계산하면 다음이 된다.

$$
\mathrm{tr}(F\wedge F)=d\thinspace\mathrm{tr}\Big(A\wedge dA+\tfrac23A\wedge A\wedge A\Big)
$$

Chern–Simons 3 형식은 4 차원 특성류의 원시함수다. 다발이 자명한 영역에서 $A$ 가 전역적으로 정의되므로 이 원시함수를 적을 수 있다.

경계가 있는 4 차원 다양체 $W$ 로 $\partial W=M$ 이라 두면 Stokes 정리가

$$
\mathrm{CS}(A)=\frac1{8\pi^2}\int_W\mathrm{tr}(F\wedge F)
$$

를 준다. $W$ 를 고르는 방법이 여럿이고 두 선택의 차이가 닫힌 4 차원 다양체 위의 $\mathrm{tr}(F\wedge F)$ 적분, 곧 2 차 Chern 수이므로 정수다. 애매함이 정수뿐이다.

## 게이지 변환과 권선수

게이지 변환 $A\mapsto g^{-1}Ag+g^{-1}dg$ 에서 작용은 다음과 같이 변한다[^2].

$$
\mathrm{CS}(A^g)=\mathrm{CS}(A)-\frac1{24\pi^2}\int_M\mathrm{tr}\big((g^{-1}dg)^{\wedge3}\big)
$$

마지막 항은 $A$ 를 포함하지 않고 사상 $g:M\to G$ 만 본다. $G=\mathrm{SU}(2)\cong S^3$ 이면 이것은 $g$ 의 권선수 $[g]\in\pi_3(\mathrm{SU}(2))=\mathbb Z$ 다.

$$
\mathrm{CS}(A^g)=\mathrm{CS}(A)-\deg(g)
$$

$\mathrm{CS}(A)$ 는 실수로서는 게이지 불변이 아니고 $\mathbb R/\mathbb Z$ 값으로만 잘 정의된다. 물리에서 쓰는 것은 $e^{2\pi ik\thinspace\mathrm{CS}(A)}$ 이므로

$$
e^{2\pi ik\thinspace\mathrm{CS}(A^g)}=e^{2\pi ik\thinspace\mathrm{CS}(A)}e^{-2\pi ik\deg(g)}
$$

이고 $k$ 가 정수이면 완전히 게이지 불변이다. 레벨이 정수여야 하는 이유가 $\pi_3(G)=\mathbb Z$ 이며, 양자화가 Lie 군의 위상에서 강제된다.


## 위상적 불변성

작용에 계량이 없으므로 분배함수도 계량에 의존하지 않는다. Wilson 고리

$$
W_R(K)=\mathrm{tr}\_R\thinspace\mathcal P\exp\oint_KA
$$

의 기댓값이 [매듭 불변량](knot-invariants.md)을 주고, 계량이 없으므로 $K$ 를 연속적으로 움직여도 값이 변하지 않아 동위류의 불변량이 된다. Witten 이 Jones 다항식을 이렇게 설명했다.

# 정의

## 접속과 곡률

$G$ 를 콤팩트 단순 Lie 군, $P\to M$ 을 주 $G$ 다발이라 하자. 3 차원 다양체 위에서 $G=\mathrm{SU}(n)$ 이면 모든 주다발이 자명하므로 접속을 전역적으로 $\mathfrak g$ 값 1 형식 $A\in\Omega^1(M,\mathfrak g)$ 로 쓸 수 있다. 곡률은

$$
F=dA+A\wedge A\in\Omega^2(M,\mathfrak g)
$$

이고 게이지군 $\mathcal G=\mathrm{Map}(M,G)$ 가 위에 적은 식으로 작용한다.

## 작용과 변분

> **정의.** $\mathrm{CS}(A)=\dfrac1{8\pi^2}\displaystyle\int_M\mathrm{tr}\big(A\wedge dA+\tfrac23A\wedge A\wedge A\big)$

경계가 없을 때 변분은 다음과 같다.

$$
\delta\thinspace\mathrm{CS}(A)=\frac1{4\pi^2}\int_M\mathrm{tr}(\delta A\wedge F)
$$

임계점은 $F=0$ 인 평탄 접속이다. 평탄 접속은 홀로노미로 결정되므로 게이지류의 모듈라이가

$$
\mathcal M(M,G)=\mathrm{Hom}(\pi_1(M),G)/\text{켤레}
$$

와 같다. 무한차원 공간 위 범함수의 임계점 집합이 유한차원 대수적 대상으로 내려온다.

## 평탄 접속의 CS 불변량

평탄 접속 $\alpha$ 에서 $\mathrm{CS}(\alpha)\in\mathbb R/\mathbb Z$ 는 게이지류만으로 정해지는 수다. 이것이 **Chern–Simons 불변량**이며 $M$ 과 $\pi_1(M)$ 의 표현이 함께 결정한다.

렌즈 공간에서는 명시적이다. $\pi_1(L(p,1))=\mathbb Z/p$ 의 $\mathrm{SU}(2)$ 표현은 생성원을 $\mathrm{diag}(e^{2\pi ib/p},e^{-2\pi ib/p})$ 로 보내는 것들이고 $b$ 와 $p-b$ 가 켤레라 같은 접속을 준다. 그 CS(Chern–Simons) 값은 다음과 같다.

$$
\mathrm{CS}(\rho_b)=-\frac{b^2}{p}\ \ \mathrm{mod}1
$$

분모가 $p$ 인 유리수만 나온다. $M$ 이 유리 [호몰로지](homology.md) 구면이면 CS 값은 언제나 유리수이고 쌍곡 다양체에서는 그렇지 않을 수 있다.

# 성질

## Abel 판과 이음수

$G=\mathrm U(1)$ 이면 $A\wedge A=0$ 이라 작용이 이차식이다.

$$
\mathrm{CS}(A)=\frac1{8\pi^2}\int_MA\wedge dA
$$

Wilson 고리 두 개의 상관함수가 이음수를 준다.

$$
\big\langle W_{n_1}(K_1)W_{n_2}(K_2)\big\rangle=\exp\Big(\frac{2\pi i\thinspace n_1n_2}{k}\mathrm{lk}(K_1,K_2)\Big)
$$

이차형식의 적분이라 Gauss 적분으로 정확히 계산되고 결과가 Gauss 의 이음수 적분이다. 비가환 $G$ 에서는 $A\wedge A\wedge A$ 항 때문에 섭동전개의 각 차수가 Vassiliev 불변량을 주고, 이음수가 그 전개의 1 차 항이다.

## 임계값의 이산성과 점근

$M$ 이 유리 호몰로지 구면이면 평탄 접속이 유한개이므로 임계값 $\mathrm{CS}(\alpha)$ 도 유한개의 유리수다. [정상위상법](stationary-phase.md)을 경로적분

$$
Z_k(M)=\int\mathcal DA\thinspace e^{2\pi ik\thinspace\mathrm{CS}(A)}
$$

에 적용하면 $k\to\infty$ 의 점근이 임계점마다 한 항이고 각 항의 위상이 $e^{2\pi ik\thinspace\mathrm{CS}(\alpha)}$ 다. $\mathrm{CS}(\alpha)$ 가 분모 $p$ 의 유리수이므로 위상이 $k$ 에 대해 주기 $p$ 로 순환하며, 렌즈 공간의 RT(Reshetikhin–Turaev) 불변량이 $k$ 에 따라 진동한다.

## 경계와 등각장론

$M$ 에 경계가 있으면 $\delta\thinspace\mathrm{CS}$ 의 부분적분에서 경계항이 남아 작용이 게이지 불변이 아니다. 이 결함을 고치려면 경계에 자유도를 두어야 하고 그것이 Wess–Zumino–Witten 모형이다. 3 차원 벌크와 2 차원 경계가 짝을 이루는 구조가 벌크-경계 대응의 가장 오래된 예이며, Reshetikhin–Turaev 구성에서 $\Delta_+/\mathcal D=e^{2\pi ic/8}$ 의 $c$ 가 경계 등각장론의 중심 전하다.

## 엄밀함의 범위

[측도](measure.md) $\mathcal DA$ 가 없으므로 경로적분 자체는 수학적으로 정의되지 않았다.

- 작용, 게이지 변환 공식, 레벨 양자화, 평탄 접속의 CS 불변량은 완전히 엄밀하다.
- 분배함수와 Wilson 고리 기댓값은 정의되지 않았다.

후자를 대신하는 것이 Reshetikhin–Turaev 의 대수적 구성이며, 물리가 예언한 답을 다른 방법으로 정의한 뒤 둘이 맞는지를 묻는 것이 Witten 점근 추측이다.

# 활용

## Gauss 이음수 적분

$\mathrm U(1)$ 이론의 핵심인 이음수 적분은 다음과 같다.

$$
\mathrm{lk}(K_1,K_2)=\frac1{4\pi}\oint_{K_1}\oint_{K_2}\frac{(\mathbf r_1-\mathbf r_2)\cdot(d\mathbf r_1\times d\mathbf r_2)}{|\mathbf r_1-\mathbf r_2|^3}
$$

좌변은 정수이고 우변은 매끄러운 함수의 이중적분이다.

Hopf 링크에서 값이 $\pm1$ , 풀린 두 원에서 $0$ , 원환면 위를 두 번 감는 쌍에서 $\pm2$ 이고 부호는 곡선의 방향 규약이 정한다.

이 적분은 차수 사상의 적분 표현이다. 사상 $T^2\to S^2$ 인 $(s,t)\mapsto(\mathbf r_1-\mathbf r_2)/|\mathbf r_1-\mathbf r_2|$ 가 구면의 부피형식을 당겨 온 것이 피적분함수이고, 그 적분이 사상의 차수다. 차수가 연속 변형에 불변이므로 곡선을 어떻게 매개화해도 같은 정수가 나온다.

## 양자 불변량과 2 차 특성류

- 임계점의 CS 값이 양자 불변량의 점근 위상으로 나타나는 것이 Witten 점근 추측이다.
- $\pi_3(G)=\mathbb Z$ 가 레벨을 양자화하듯 경계 이론의 레벨이 아핀 Lie 대수의 표현론을 유한하게 만들고, [모듈러 텐서범주](modular-tensor-categories.md)의 단순대상이 유한개가 된다.
- 4 차원에서 한 차원 내려 3 차원 작용을 얻는 조작은 임의의 특성류에 대해 가능하며 그렇게 얻는 부류가 2 차 특성류다.

[^1]: 원전은 S.-S. Chern–J. Simons, *Characteristic forms and geometric invariants*, Ann. of Math. 99 (1974). 물리적 해석과 매듭 이론과의 연결은 E. Witten, *Quantum field theory and the Jones polynomial*, Comm. Math. Phys. 121 (1989).
[^2]: 레벨 양자화와 게이지 변환 공식의 표준적 서술은 M. Nakahara, *Geometry, Topology and Physics* (2003), 11 장. Abel 판과 이음수의 관계는 A. Polyakov, *Fermi-Bose transmutations induced by gauge fields*, Mod. Phys. Lett. A3 (1988).

# 연관 문서

## 선수지식

- [de Rham 코호몰로지](de-rham-cohomology.md)
- [Lie 군](lie-groups.md)

## 더 알아보기

- [Witten 점근 추측과 Ohtsuki 급수](witten-asymptotics.md)
- [Wess–Zumino–Witten 모형과 벌크–경계 대응](wess-zumino-witten.md)
- [Casson 불변량](casson-invariant.md)

#differential_geometry #algebraic_topology #topology
