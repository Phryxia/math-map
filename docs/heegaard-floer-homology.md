# Heegaard Floer 호몰로지

# 개요

**Heegaard Floer 호몰로지(Heegaard Floer homology)** 는 닫힌 방향 가능 3 다양체에 붙는 아벨군이다. 3 구면에서 매듭 하나의 근방을 잘라 내고 비틀어 다시 붙인 공간이 또 3 구면인지 묻는 문제처럼, 3 다양체를 구별하려면 손으로 계산할 수 있는 불변량이 있어야 한다. Heegaard Floer 호몰로지는 3 다양체를 곡면 위의 곡선 두 묶음으로 그린 그림에서 정칙 원판을 세어 이 불변량을 만들고, 그 값으로 이런 수술의 결과를 판정한다.

# 직관

3 다양체 $Y$ 의 불변량을 [Morse 이론](morse-theory.md)으로 만들려 한다. [순간자 Floer 호몰로지](instanton-floer-homology.md)는 접속 공간 위의 Chern–Simons 범함수를 Morse 함수로 보고 임계점과 그 사이의 흐름을 센다. 이 해 공간은 무한차원이라 횡단성과 콤팩트화(compactification)를 손으로 다뤄야 하고, 3 구면이 아닌 예에서 값을 계산하기 어렵다.

유한차원에서 같은 일을 하려면 $Y$ 를 유한한 자료로 적어야 한다. $Y$ 를 두 손잡이체(handlebody)로 자르는 Heegaard 분해(Heegaard splitting)에서 자른 면은 종수 $g$ 의 곡면 $\Sigma$ 이고, 각 손잡이체는 $\Sigma$ 위의 곡선 $g$ 개가 원판의 경계가 되는지로 정해진다. 그 두 벌의 곡선을 $\boldsymbol\alpha=\lbrace\alpha_1,\dots,\alpha_g\rbrace$ 와 $\boldsymbol\beta=\lbrace\beta_1,\dots,\beta_g\rbrace$ 로 쓴다. $S^3$ 은 두 고체 원환면을 붙인 것이고, 원환면 $\Sigma$ 위에서 $\alpha$ 는 자오선, $\beta$ 는 경도선이며 두 곡선은 한 점에서 만난다. 렌즈 공간 $L(p,1)$ 에서는 $\beta$ 가 $\alpha$ 와 $p$ 번 만나는 곡선이다.

교차점을 생성원으로 쓰려면 $g$ 개의 점을 한 묶음으로 다뤄야 한다. $\alpha_i$ 마다 $\beta$ 와의 교차점을 하나씩 골라 각 $\beta_j$ 가 한 번씩 쓰이게 한 것이 한 묶음이고, 묶음은 순서 없는 $g$ 개의 점이다. $\Sigma$ 의 점 $g$ 개를 순서 없이 모은 공간을 대칭곱(symmetric product) $\mathrm{Sym}^g(\Sigma)=\Sigma^g/S_g$ 라 하고, $\alpha_1\times\cdots\times\alpha_g$ 의 상을 $\mathbb T_\alpha$ 라 하면, 묶음 하나는 $\mathbb T_\alpha\cap\mathbb T_\beta$ 의 점 하나다. 미분은 두 교차점을 잇는 정칙 원판을 센다. $S^3$ 의 원환면 도식에서는 교차점이 하나라 미분이 $0$ 이고 군이 $\mathbb Z$ 이며, $L(p,1)$ 에서는 교차점이 $p$ 개이고 미분이 $0$ 이라 $\mathbb Z^p$ 다.

# 정의

## 가리킨 Heegaard 도식

$Y$ 의 **Heegaard 도식(Heegaard diagram)** 은 종수 $g$ 곡면 $\Sigma$ 와, 각 벌 안에서 서로 만나지 않고 호몰로지에서 독립인 곡선 두 벌 $\boldsymbol\alpha,\boldsymbol\beta$ 의 쌍이다. $\boldsymbol\alpha$ 와 $\boldsymbol\beta$ 가 정하는 두 손잡이체를 $\Sigma$ 에서 붙인 것이 $Y$ 다. 직관 절의 원환면, 자오선, 경도선은 $S^3$ 의 종수 $1$ 도식이다.

$\boldsymbol\alpha\cup\boldsymbol\beta$ 를 피한 기준점 $z\in\Sigma$ 를 하나 더 고정한 것을 **가리킨 Heegaard 도식(pointed Heegaard diagram)** $(\Sigma,\boldsymbol\alpha,\boldsymbol\beta,z)$ 라 한다.

## 사슬 복합체

$\mathbb T\_\alpha=\alpha_1\times\cdots\times\alpha_g$ 와 $\mathbb T\_\beta$ 는 $\mathrm{Sym}^g(\Sigma)$ 안의 $g$ 차원 원환면이고, $\mathrm{Sym}^g(\Sigma)$ 의 심플렉틱 구조에 대해 [Lagrangian 부분다양체](lagrangian-submanifolds.md)다. 교차점 $\mathbf x\in\mathbb T\_\alpha\cap\mathbb T\_\beta$ 마다 생성원을 하나 두고 다음 네 복합체를 만든다.

| 복합체 | 계수 | 생성원 |
| --- | --- | --- |
| $\widehat{\mathrm{CF}}$ | $\mathbb Z$ | $\mathbf x$ |
| $\mathrm{CF}^-$ | $\mathbb Z\lbrack U\rbrack$ | $U^n\mathbf x$ , $n\ge 0$ |
| $\mathrm{CF}^\infty$ | $\mathbb Z\lbrack U,U^{-1}\rbrack$ | $U^n\mathbf x$ , $n\in\mathbb Z$ |
| $\mathrm{CF}^+$ | $\mathrm{CF}^\infty/\mathrm{CF}^-$ | |

미분은 다음이다.

$$
\partial\mathbf x=\sum\_{\mathbf y}\sum\_{\phi}\char35{}\widehat{\mathcal M}(\phi)\cdot U^{n_z(\phi)}\thinspace\mathbf y
$$

$\phi$ 는 $\mathbf x$ 와 $\mathbf y$ 를 잇는 Maslov 지표(Maslov index) $1$ 인 Whitney 원판의 호모토피류이고, $\widehat{\mathcal M}(\phi)$ 는 그 정칙 대표원의 모듈라이 공간을 $\mathbb R$ 의 이동으로 나눈 유한집합이며, $n_z(\phi)$ 는 원판이 $z$ 를 덮는 중복도다. $\widehat{\mathrm{CF}}$ 에서는 $n_z(\phi)=0$ 인 원판만 센다. 이 복합체들의 호몰로지가 **Heegaard Floer 호몰로지** $\widehat{\mathrm{HF}}$, $\mathrm{HF}^-$, $\mathrm{HF}^\infty$, $\mathrm{HF}^+$ 다. $S^3$ 의 종수 $1$ 도식에서는 생성원이 $\mathbf x$ 하나이므로 $\widehat{\mathrm{HF}}(S^3)=\mathbb Z$, $\mathrm{HF}^+(S^3)=\mathbb Z\lbrack U,U^{-1}\rbrack/U\mathbb Z\lbrack U\rbrack$ 이다.

## spin^c 분해

교차점 $\mathbf x$ 마다 $Y$ 의 $\mathrm{spin}^c$ 구조($\mathrm{spin}^c$ structure) $\mathfrak s(\mathbf x)$ 가 정해진다. $\mathbf x$ 의 $g$ 개 점과 $z$ 를 지나는 Morse 함수의 흐름선을 따라 기울기 벡터장을 고쳐 얻는 벡터장의 호모토피류가 $\mathfrak s(\mathbf x)$ 다. $L(p,1)$ 의 도식에서 $p$ 개의 교차점은 $p$ 개의 서로 다른 $\mathrm{spin}^c$ 구조에 대응한다.

## d 불변량

$Y$ 가 유리 호몰로지 구면이면 각 $\mathfrak s$ 에서 $\mathrm{HF}^\infty(Y,\mathfrak s)\cong\mathbb Z\lbrack U,U^{-1}\rbrack$ 이고, 사상 $\mathrm{HF}^\infty\to\mathrm{HF}^+$ 의 상은 $\mathbb Z\lbrack U,U^{-1}\rbrack/U\mathbb Z\lbrack U\rbrack$ 과 동형이다. 이 상의 원소가 갖는 최소 등급을 **$d$ 불변량($d$-invariant)** $d(Y,\mathfrak s)\in\mathbb Q$ 라 한다. $S^3$ 에서는 생성원 $\mathbf x$ 의 등급이 $0$ 이므로 $d(S^3)=0$ 이다.

# 성질

## 도식의 선택과 무관함

같은 $Y$ 의 두 가리킨 Heegaard 도식은 곡선의 동위(isotopy), 손잡이 미끄러짐(handle slide), 안정화(stabilization)로 이어지고, 각 이동에서 호몰로지가 동형으로 보존된다. 그래서 $\mathrm{HF}^\circ(Y)$ 는 $Y$ 의 불변량이다.[^1]

## spin^c 분해와 대칭

미분은 $\mathrm{spin}^c$ 구조를 보존하므로 복합체가 분해된다.

$$
\mathrm{HF}^\circ(Y)=\bigoplus\_{\mathfrak s\in\mathrm{Spin}^c(Y)}\mathrm{HF}^\circ(Y,\mathfrak s)
$$

$\widehat{\mathrm{HF}}(Y,\mathfrak s)$ 가 $0$ 이 아닌 $\mathfrak s$ 는 유한 개다. 방향을 뒤집으면 $d$ 불변량의 부호가 바뀐다.

$$
d(-Y,\mathfrak s)=-d(Y,\mathfrak s)
$$

## 수술 완전 삼각형

매듭 $K\subset Y$ 의 기울기 $\mu,\lambda$ 가 $\mu\cdot\lambda=1$ 이면, 세 채움 $Y_\mu$, $Y_\lambda$, $Y_{\mu+\lambda}$ 의 $\widehat{\mathrm{HF}}$ 가 다음 완전 삼각형을 이룬다.[^1]

$$
\cdots\to\widehat{\mathrm{HF}}(Y_\mu)\to\widehat{\mathrm{HF}}(Y_\lambda)\to\widehat{\mathrm{HF}}(Y_{\mu+\lambda})\to\cdots
$$

증명의 요지는 세 도식을 한 곡면 위에 겹쳐 놓는 것이다. 사슬사상은 세 곡선 벌을 경계로 하는 정칙 삼각형을 세어 정의되고, 정칙 사각형을 세는 사상이 연속한 두 사슬사상의 합성이 $0$ 과 호모토픽함을 보여 완전성이 나온다. 이 완전열로 [Dehn 수술](dehn-surgery.md) 도형에서 불변량을 귀납으로 계산한다.

## d 불변량의 수술 부등식

$K\subset S^3$ 의 $p/q\gt 0$ 수술에서 $d$ 불변량은 풀린 매듭 $O$ 의 같은 수술 값보다 크지 않다.[^2]

$$
d\bigl(S^3_{p/q}(K),i\bigr)\le d\bigl(S^3_{p/q}(O),i\bigr)
$$

증명의 요지는 매듭 Floer 호몰로지(knot Floer homology)의 복합체로 수술한 다양체의 $\mathrm{HF}^+$ 를 적고, 그 공식의 보정항이 음이 아님을 쓰는 것이다. $S^3_p(K)$ 가 [렌즈 공간](lens-spaces.md)이면 모든 $i$ 에서 등호가 성립해야 하고, 이 조건이 가능한 $(K,p)$ 를 줄인다.

## 4 다양체의 교차형식 제약

$X$ 가 경계 $\partial X=Y$ 가 유리 호몰로지 구면인 매끄러운 4 다양체이고 교차형식이 음정부호이면, 모든 $\mathrm{spin}^c$ 구조 $\mathfrak s$ 에 대해 다음이 성립한다.[^2]

$$
c_1(\mathfrak s)^2+b_2(X)\le 4d(Y,\mathfrak s\vert_Y)
$$

$Y=S^3$ 이면 $d=0$ 이므로 모든 특성 벡터 $c$ 에서 $c^2+b_2\le 0$ 이다. Elkies 정리(Elkies theorem)로 이 조건을 만족하는 음정부호 격자는 대각 격자뿐이므로, [Donaldson 불변량](donaldson-invariants.md)의 대각화 정리(diagonalization theorem)가 다시 증명된다.

## Seiberg–Witten Floer 호몰로지와의 관계

Heegaard Floer 호몰로지는 [Seiberg–Witten 이론](seiberg-witten-theory.md)으로 정의되는 단조 Floer 호몰로지와 동형이다.[^3] 한쪽은 3 다양체 위의 Seiberg–Witten 방정식의 해를 세고 다른 쪽은 대칭곱 안의 원판을 세며, 동형은 양쪽을 매장 접촉 호몰로지(embedded contact homology, ECH)에 연결해 증명된다. 이 동형으로 $\mathrm{spin}^c$ 분해, $d$ 불변량, 수술 완전 삼각형이 양쪽에서 대응한다.

# 활용

- 렌즈 공간 수술. Greene 은 위 $d$ 불변량 조건과 격자 이론으로 $S^3$ 의 정수 수술로 얻는 렌즈 공간이 Berge 매듭(Berge knot)의 수술로 얻는 렌즈 공간뿐임을 증명했다.[^4]
- 매듭의 종수. $\widehat{\mathrm{HFK}}(K)$ 가 $0$ 이 아닌 최대 Alexander 등급은 매듭의 Seifert 종수(Seifert genus)와 같다. [Alexander 다항식](alexander-polynomial.md)의 차수는 종수의 하한만 주고, [매듭 불변량](knot-invariants.md) 가운데 $\tau$ 불변량은 slice 종수(slice genus)의 하한 $\vert\tau(K)\vert\le g_4(K)$ 를 준다.
- 접촉 구조. 접촉 3 다양체 $(Y,\xi)$ 마다 $\widehat{\mathrm{HF}}(-Y)$ 의 원소 $c(\xi)$ 가 정해진다. $\xi$ 가 강하게 채울 수 있으면(strongly fillable) $c(\xi)\ne 0$ 이고, $c(\xi)\ne 0$ 이면 $\xi$ 는 꼬이지 않았다(tight).

[^1]: P. Ozsváth, Z. Szabó, *Holomorphic disks and topological invariants for closed three-manifolds*, Ann. of Math. 159 (2004), 1027–1158.
[^2]: P. Ozsváth, Z. Szabó, *Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary*, Adv. Math. 173 (2003), 179–261.
[^3]: Ç. Kutluhan, Y.-J. Lee, C. H. Taubes, *HF=HM I–V*, Geom. Topol. 24 (2020), 2829–3062.
[^4]: J. E. Greene, *The lens space realization problem*, Ann. of Math. 177 (2013), 449–511.

# 연관 문서

## 선수지식

- [순간자 Floer 호몰로지](instanton-floer-homology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
