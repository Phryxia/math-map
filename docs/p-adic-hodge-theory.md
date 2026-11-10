# p 진 Hodge 이론

# 개요

**p 진 Hodge 이론(p-adic Hodge theory)** 은 $p$ 진 국소체의 절대 Galois 군의 $p$ 진 표현을, 주기환이라는 큰 환을 계수로 써서 분류하는 이론이다. 복소다양체에서는 [de Rham 코호몰로지](de-rham-cohomology.md)와 특이 코호몰로지가 계수를 $\mathbb C$ 로 올리면 같아지고, 그 동형의 [행렬](matrices.md) 성분이 $2\pi i$ 같은 주기다. $\mathbb Q_p$ 위에서는 $p$ 진 표현이 연속성만으로 거의 제약을 받지 않아, 어느 표현이 다양체에서 오는지 가를 방법이 따로 있어야 한다. p 진 Hodge 이론은 $\mathbb C$ 자리에 $B_{\mathrm{dR}}$ 같은 주기환을 놓고 표현과 텐서해 불변량을 취해, 표현을 선형대수 자료로 바꾸어 분류한다.

# 직관

[Galois 표현](galois-representations.md)에서 [대수다양체](algebraic-varieties.md)의 코호몰로지는 국소체 $K/\mathbb Q_p$ 의 절대 Galois 군 $G_K=\mathrm{Gal}(\bar K/K)$ 의 $\ell$ 진 표현을 준다. 이 가운데 어느 것이 다양체에서 오는지 가르려면 표현을 유한한 자료로 적을 수 있어야 한다.

$\ell\ne p$ 이면 그렇게 된다. [관성군](ramification-groups.md)의 야생 부분 $P_K$ 는 프로-$p$ 군이므로 프로-$\ell$ 군 안으로 가는 상 $\rho(P_K)$ 가 유한하고, 나머지 관성의 작용은 행렬 하나로 적힌다. $\ell=p$ 이면 1 차원 표현만 세어도 막힌다. 연속 지표 $G_K\to\mathbb Z_p^\times$ 는 [국소 유체론](local-class-field-theory.md)으로 $K^\times$ 의 지표이고, $K^\times$ 안의 $\mathcal O_K^\times$ 가 $\mathbb Z_p^{[K:\mathbb Q_p]}$ 를 포함하므로 지표가 연속적인 족을 이룬다.

가장 단순한 예 $\mathbb Q_p(1)$ 에서 원소 $g\in G_K$ 는 기저 $e$ 를 순환지표의 값 $\chi(g)e$ 로 보낸다. $\chi$ 는 $\zeta_{p^n}\mapsto\zeta_{p^n}^{\chi(g)}$ 로 정해진다. 계수를 $\mathbb Q_p$ 로 두면 $G_K$ 가 고정하는 벡터는 $0$ 뿐이라 이 표현에서 읽을 자료가 없다. $g(t)=\chi(g)\thinspace t$ 를 만족하는 가역원 $t$ 가 있는 큰 환 $B$ 를 계수로 쓰면 $t^{-1}\otimes e$ 가 $G_K$ 에 고정되어 1 차원 공간이 남는다.

복소다양체에서 $\mathbb C^\times$ 의 원을 따라 $dz/z$ 를 적분하면 $2\pi i$ 가 나오고, de Rham 코호몰로지와 특이 코호몰로지의 비교에서 이 수가 행렬 성분으로 나타난다. $t$ 는 이 $2\pi i$ 의 $p$ 진 대응물이다. Fontaine 은 이런 환 $B$ 를 주기환(period ring)이라 부르고, 표현 $V$ 에서 $D_B(V)=(B\otimes_{\mathbb Q_p}V)^{G_K}$ 를 만들어 선형대수 자료로 바꾸었다.

# 정의

## 허용 환과 Fontaine 함자

$G_K$ 가 작용하는 $\mathbb Q_p$ 대수 $B$ 가 정역이고 $E=B^{G_K}$ 가 체라고 하자. $B$ 가 **정칙(regular)** 이라 함은 $\bigl(\mathrm{Frac}(B)\bigr)^{G_K}=E$ 이고, $\mathbb Q_pb$ 가 $G_K$ 안정인 $0$ 아닌 $b\in B$ 가 모두 $B$ 의 가역원인 것이다. 이때 임의의 $p$ 진 표현 $V$ 에 대해 다음이 성립한다.

$$
D_B(V)=(B\otimes_{\mathbb Q_p}V)^{G_K},\qquad \dim_E D_B(V)\le\dim_{\mathbb Q_p}V
$$

등호가 성립하면 $V$ 가 **B 허용(B-admissible)** 이다. 등호는 표준 사상

$$
\alpha_V\colon B\otimes_E D_B(V)\longrightarrow B\otimes_{\mathbb Q_p}V
$$

가 동형인 것과 같고 이것이 비교동형의 추상적 형태다. $B$ 허용 표현들은 부분표현, 몫, [텐서곱](tensor-products.md), 쌍대에 닫혀 있어 [Tannaka 쌍대성](tannaka-duality.md)이 적용되는 부분[범주](category.md)를 이룬다. $B$ 가 아래 $B_{\mathrm{dR}}$ 이면 $V=\mathbb Q_p(1)$ 에서 $D_B(V)=K\cdot t^{-1}\otimes e$ 가 1 차원이므로 $\mathbb Q_p(1)$ 은 $B_{\mathrm{dR}}$ 허용이다.

## Cp 와 Hodge–Tate 환

$\mathbb C_p=\widehat{\bar K}$ 를 $\bar K$ 의 $p$ 진 완비화라 하자. Tate 의 계산은 다음이다.

$$
\mathbb C_p^{G_K}=K,\qquad
H^0(G_K,\mathbb C_p(i))=H^1(G_K,\mathbb C_p(i))=0\quad(i\ne0)
$$

서로 다른 꼬임 사이에는 불변원소도 비자명한 확대도 없으므로, $\mathbb C_p$ 계수로 올린 뒤의 꼬임별 분해가 있으면 유일하다. 이 분해를 재는 환이 **Hodge–Tate 환(Hodge–Tate ring)** 이다.

$$
B_{\mathrm{HT}}=\bigoplus_{i\in\mathbb Z}\mathbb C_p(i)=\mathbb C_p[t,t^{-1}]
$$

$V$ 가 $B_{\mathrm{HT}}$ 허용이면 **Hodge–Tate 표현**이고, 이는 다음과 같다.

$$
\mathbb C_p\otimes_{\mathbb Q_p}V\thickspace\cong\thickspace\bigoplus_{i}\mathbb C_p(-h_i)
$$

중복도를 세어 나온 정수 $h_1\le\dots\le h_n$ 이 **Hodge–Tate 무게(Hodge–Tate weight)** 다. 이 관례에서 $\mathbb Q_p(1)$ 의 무게는 $-1$ 이고 de Rham 여과 점프와 부호가 일치한다[^1].

## BdR

구성은 표수 $p$ 로 내려갔다가 [Witt 벡터](witt-vectors.md)로 되올라온다.

$$
R=\varprojlim_{x\mapsto x^p}\mathcal O_{\mathbb C_p}/p
$$

는 표수 $p$ 의 완전 부치환이고 그 분수체는 대수적으로 닫혀 있다. $\zeta_{p^n}$ 을 정합적으로 고른 계 $\varepsilon=(1,\zeta_p,\zeta_{p^2},\dots)$ 가 $R$ 의 원소다. $A_{\mathrm{inf}}=W(R)$ 을 Witt 벡터환으로 두면 표준적 전사

$$
\theta\colon A_{\mathrm{inf}}\longrightarrow\mathcal O_{\mathbb C_p},\qquad
\theta\Big(\sum p^n[x_n]\Big)=\sum p^nx_n^\sharp
$$

가 있고 그 핵은 주 [아이디얼](ideals-quotient-rings.md) $(\xi)$ 다. $[\thinspace\cdot\thinspace]$ 이 Teichmüller 올림이다. 핵으로 완비화하고 $p$ 를 뒤집으면 다음을 얻는다.

$$
B_{\mathrm{dR}}^+=\varprojlim_n A_{\mathrm{inf}}[1/p]/(\ker\theta)^n,\qquad
B_{\mathrm{dR}}=B_{\mathrm{dR}}^+[1/t]
$$

$B_{\mathrm{dR}}^+$ 는 완비 이산부치환이고 잔여체가 $\mathbb C_p$ 이며 $t=\log[\varepsilon]$ 이 극대 아이디얼의 생성원이다. $\log$ 는 $1$ 근방의 [멱급수](power-series.md)이고, $g\in G_K$ 가 $\zeta_{p^n}\mapsto\zeta_{p^n}^{\chi(g)}$ 로 작용하므로 $g(t)=\chi(g)\thinspace t$ 다. $B_{\mathrm{dR}}$ 은 체이고 다음 여과를 갖는다.

$$
\mathrm{Fil}^iB_{\mathrm{dR}}=t^iB_{\mathrm{dR}}^+,\qquad
\mathrm{gr}^\bullet B_{\mathrm{dR}}=B_{\mathrm{HT}}
$$

$\theta\colon B_{\mathrm{dR}}^+\to\mathbb C_p$ 에는 $G_K$ 동변 단면이 없다. 여과가 $G_K$ 동변으로 갈라지지 않으므로 de Rham 조건이 Hodge–Tate 조건보다 강하다.

$D_{\mathrm{dR}}(V)=(B_{\mathrm{dR}}\otimes V)^{G_K}$ 는 $K$ 위 벡터공간이며 여과를 물려받는다. 차원이 꽉 차면 $V$ 가 **de Rham 표현(de Rham representation)** 이다. $\mathbb Q_p(1)$ 은 de Rham 이고 $D_{\mathrm{dR}}$ 의 여과 점프가 $-1$ 이다.

## Bcris 와 Bst

$A_{\mathrm{inf}}$ 의 Frobenius 는 $\ker\theta$ 를 보존하지 않으므로 $B_{\mathrm{dR}}$ 로 연장되지 않는다. Frobenius 가 연장되는 부분환은 $A_{\mathrm{inf}}$ 에서 나눗셈 거듭제곱 포락(divided power envelope)을 취해 만든다.

$$
B_{\mathrm{cris}}=\Big(A_{\mathrm{inf}}\big[\tfrac{\xi^n}{n!}\big]^\wedge_p[1/p]\Big)[1/t]\ \subset\ B_{\mathrm{dR}}
$$

$W(R)$ 의 Frobenius 가 내려와 $\varphi$ 를 주고 $\varphi(t)=pt$ 다. 불변부분체는 $K_0=W(k)[1/p]$ , 곧 $K$ 의 최대 비분기 부분체다. $p$ 의 $p^n$ 제곱근들의 정합적인 계 $\tilde p\in R$ 를 골라 $u=\log([\tilde p]/p)$ 를 붙이면 다음이 된다. $u$ 는 $B_{\mathrm{cris}}$ 위에서 초월적이다.

$$
B_{\mathrm{st}}=B_{\mathrm{cris}}[u],\qquad
\varphi(u)=pu,\qquad N=-\frac{d}{du}
$$

$N$ 은 모노드로미 작용소이고 $N\varphi=p\varphi N$ 을 만족한다. $u$ 를 $\log p$ 의 어떤 값으로 보내는 선택마다 $B_{\mathrm{st}}\hookrightarrow B_{\mathrm{dR}}$ 이 달라지지만 허용성 판정은 그 선택에 의존하지 않는다.

$$
D_{\mathrm{cris}}(V)=(B_{\mathrm{cris}}\otimes V)^{G_K},\qquad
D_{\mathrm{st}}(V)=(B_{\mathrm{st}}\otimes V)^{G_K}
$$

는 $K_0$ 위의 벡터공간이고 각각 $\varphi$ 와 $(\varphi,N)$ 을 가지며 $D_K=K\otimes_{K_0}D$ 위에 여과가 온다. 차원이 꽉 차면 각각 **결정적(crystalline)**, **반안정(semistable)** 표현이다. $t\in B_{\mathrm{cris}}$ 이므로 $\mathbb Q_p(1)$ 은 결정적이고, $D_{\mathrm{cris}}(\mathbb Q_p(1))=K_0\cdot t^{-1}\otimes e$ 에서 $\varphi=p^{-1}$ 이다.

## 여과 φ 가군과 약허용성

**여과 φ 가군(filtered φ-module)** 은 유한차원 $K_0$ 벡터공간 $D$ 에 $\sigma$ 반선형 전단사 $\varphi$ 와 $D_K$ 위의 감소 여과가 주어진 것이다. 두 정수를 붙인다.

$$
t_N(D)=v_p(\det\varphi),\qquad
t_H(D)=\sum_{i\in\mathbb Z}i\cdot\dim_K\mathrm{gr}^iD_K
$$

$t_N$ 은 Newton 다각형의 총 기울기, $t_H$ 는 Hodge 다각형의 총 기울기다. $D$ 가 **약허용(weakly admissible)** 이라 함은 다음을 뜻한다.

$$
t_H(D)=t_N(D)\quad\text{이고}\quad
t_H(D')\le t_N(D')\ \ \text{for all }\varphi\text{ 안정 } D'\subset D
$$

부등식은 모든 부분대상에서 [Newton 다각형](newton-polygon.md)이 Hodge 다각형 위에 있다는 진술이다. $D_{\mathrm{cris}}(\mathbb Q_p(1))$ 은 $t_N=v_p(p^{-1})=-1$ 이고 여과 점프가 $-1$ 이라 $t_H=-1$ 이며, 진부분대상이 없으므로 약허용이다.

# 성질

## 사슬과 엄밀한 포함

주기환의 포함 $B_{\mathrm{cris}}\subset B_{\mathrm{st}}\subset B_{\mathrm{dR}}$ 과 $\mathrm{gr}B_{\mathrm{dR}}=B_{\mathrm{HT}}$ 에서 다음이 나온다.

$$
\text{결정적}\ \Longrightarrow\ \text{반안정}\ \Longrightarrow\ \text{de Rham}\ \Longrightarrow\ \text{Hodge–Tate}
$$

세 화살표 모두 역이 성립하지 않는다.

- 반안정이지만 결정적이 아닌 예: [Tate 곡선](tate-curve.md) $E_q$ 의 $V_p(E_q)$ 가 $N\ne0$ 이다.
- de Rham 이지만 반안정이 아닌 예: 잠재적으로만 좋은 환원을 갖는 곡선. $K$ 의 유한확대로 올라가면 반안정이 된다.
- Hodge–Tate 이지만 de Rham 이 아닌 예: $\mathbb Q_p$ 를 부분표현으로, $\mathbb Q_p(1)$ 을 몫으로 갖는 비자명한 확대 $0\to\mathbb Q_p\to V\to\mathbb Q_p(1)\to0$. 이런 확대는 $H^1(G_K,\mathbb Q_p(-1))$ 의 원소이고 이 군은 $[K:\mathbb Q_p]$ 차원이다. $H^1(G_K,\mathbb C_p(-1))=0$ 이라 $\mathbb C_p$ 로 올리면 갈라지지만, de Rham 인 확대는 분할된 것뿐이다. 반대 방향의 확대 $0\to\mathbb Q_p(1)\to V\to\mathbb Q_p\to0$ 은 Kummer 확대에서 오며 모두 반안정이다.

## Colmez–Fontaine 정리

약허용성은 필요조건이면서 충분조건이다[^2].

$$
D_{\mathrm{st}}\colon\ \mathrm{Rep}^{\mathrm{st}}\_{\mathbb Q_p}(G_K)\ \xrightarrow{\ \sim\ }\ \mathrm{MF}^{\varphi,N}\_K(\text{약허용})
$$

가 범주 동치이고, $N=0$ 으로 제한하면 결정적 표현과 약허용 여과 $\varphi$ 가군의 동치가 된다. $p$ 진 표현이 유한한 선형대수 자료로 번역되며, 역함자는 $V_{\mathrm{st}}(D)=\mathrm{Fil}^0(B_{\mathrm{st}}\otimes_{K_0}D)^{\varphi=1,N=0}$ 이다.

## 비교정리

대수다양체의 $p$ 진 [에탈 코호몰로지](etale-cohomology.md)가 이 조건들을 만족한다는 Fontaine 의 $C_{\mathrm{st}}$ 추측은 Tsuji 가 1999 년에 증명했고, 좋은 환원의 경우($C_{\mathrm{cris}}$)는 Faltings 가 먼저 증명했다. $X/K$ 가 고유하고 매끄러우며 $\mathcal O_K$ 위에 반안정 모형을 가지면 다음이 $\varphi$ , $N$ , $G_K$ , 여과를 모두 보존하며 성립한다.

$$
B_{\mathrm{st}}\otimes_{K_0}H^n_{\mathrm{log-cris}}(X_k)\thickspace\cong\thickspace B_{\mathrm{st}}\otimes_{\mathbb Q_p}H^n_{\mathrm{et}}(X_{\bar K},\mathbb Q_p)
$$

좋은 환원이면 $N=0$ 이고 결정적이 되며 $D_{\mathrm{cris}}(H^n_{\mathrm{et}})=H^n_{\mathrm{cris}}(X_k/W)[1/p]$ 다. $\ell\ne p$ 이면 좋은 환원에서 $\ell$ 진 코호몰로지는 비분기라는 것만 알려 주지만, $p$ 진 코호몰로지에서는 특수 올의 결정 코호몰로지와 그 Frobenius 가 복원된다.

Hodge–Tate 분해도 따라 나온다.

$$
\mathbb C_p\otimes_{\mathbb Q_p}H^n_{\mathrm{et}}(X_{\bar K},\mathbb Q_p)\thickspace\cong\thickspace\bigoplus_{i+j=n}\mathbb C_p(-i)\otimes_KH^j(X,\Omega^i_{X/K})
$$

[Hodge 이론](hodge-theory.md)의 $H^n(X,\mathbb C)=\bigoplus H^{p,q}$ 에서 $\mathbb C$ 를 $\mathbb C_p$ 로 바꾸고 각 성분에 Tate 꼬임을 붙인 꼴이다.

## p 진 모노드로미 정리

$\ell\ne p$ 에서 Grothendieck 의 $\ell$ 진 모노드로미 정리($\ell$-adic monodromy theorem)는 순한 관성의 작용이 열린 부분군 위에서 $\rho(\sigma)=\exp\bigl(t_\ell(\sigma)N\bigr)$ 꼴이고 $N$ 이 멱영이라는 진술이다. $p$ 진에서 이에 해당하는 것은 다음이다.

$$
V\ \text{de Rham}\ \Longleftrightarrow\ V\ \text{잠재적으로 반안정}
$$

곧 어떤 유한확대 $L/K$ 위에서 $V|\_{G_L}$ 가 반안정이다. 이것이 $p$ 진 모노드로미 정리(p-adic monodromy theorem)이고, Berger 가 $p$ 진 미분방정식의 Crew 추측(André, Kedlaya, Mebkhout 이 독립적으로 증명)으로 환원해 증명했다. 이 정리로 de Rham 표현에서도 Weil–Deligne 표현이 정의되고, $p$ 에서의 국소 Langlands 대응을 $\ell\ne p$ 와 같은 Weil–Deligne 표현으로 서술한다.

## (φ,Γ) 가군

허용성 이론은 허용 표현만 다룬다. 모든 $p$ 진 표현을 선형대수 자료로 옮기는 것은 (φ,Γ) 가군((φ,Γ)-module)이다. $K_\infty=K(\mu_{p^\infty})$ 와 $\Gamma=\mathrm{Gal}(K_\infty/K)$ 로 두면 Fontaine–Wintenberger 의 노름체 정리가 다음을 준다.

$$
\mathrm{Gal}(\bar K/K_\infty)\thickspace\cong\thickspace\mathrm{Gal}\big(\overline{\mathbb F_q((\pi))}/\mathbb F_q((\pi))\big)
$$

표수 $0$ 의 체의 탑 위의 Galois 군이 표수 $p$ 의 체의 Galois 군과 같다. 그 결과 다음 범주 동치가 나온다(Fontaine).

$$
\mathrm{Rep}\_{\mathbb Z_p}(G_K)\thickspace\cong\thickspace\lbrace\text{에탈 }\varphi\text{–}\Gamma\text{ 가군 over }\mathbf A_K\rbrace
$$

[Galois 코호몰로지](galois-cohomology.md)는 Herr 복체 $D\xrightarrow{(\varphi-1,\gamma-1)}D\oplus D\to D$ 로 계산되어, 프로유한군의 코호몰로지가 두 작용소의 유한 복체가 된다.

## 예: 타원곡선의 Tate 가군

$E/K$ 가 [타원곡선](elliptic-curves.md)이고 $V=V_p(E)^\ast\cong H^1_{\mathrm{et}}$ 라 하자. Hodge–Tate 무게는 $\lbrace 0,1\rbrace$ 이고 $t_H=1$ 이다.

| 환원 | V | Dcris 의 Frobenius 부치 |
|---|---|---|
| 좋은 환원, 초특이 | 결정적 | $\lbrace 1/2,1/2\rbrace$ 이고 $K_0$ 위 고윳값 없음 |
| 좋은 환원, 보통 | 결정적 | $\lbrace 0,1\rbrace$ 이고 단위근 방향이 $\mathrm{Fil}^1$ 밖 |
| 곱셈 환원 | 반안정, $N\ne0$ | $\lbrace 0,1\rbrace$ |
| 잠재적 좋은 환원 | 잠재적 결정적 | 유한확대 후 위와 같음 |

$E$ 가 좋은 환원을 갖는 것과 $V$ 가 결정적인 것은 동치다(Coleman–Iovita, Breuil). $\ell\ne p$ 의 Néron–Ogg–Shafarevich 판정에 대응하는 진술이다.

# 활용

## 약허용성 판정

$K=\mathbb Q_p$ 이고 $D$ 가 2 차원, $\mathrm{Fil}^0D=D\supset\mathrm{Fil}^1D=L\supset\mathrm{Fil}^2D=0$ 인 경우를 본다. $L$ 은 직선이므로 $t_H(D)=1$ 이고, 약허용이려면 $t_N(D)=1$ 이어야 한다. $\varphi$ 의 특성다항식을 $x^2-a_px+p$ 라 하면 $\varphi$ 안정 직선마다 $t_H\le t_N$ 을 검사한다.

- $a_p$ 가 단원이면 고윳값의 부치가 $0$ 과 $1$ 이고 고유벡터 $e_1,e_2$ 가 있다. $L$ 이 두 고유직선과 다르면 두 직선 모두 $t_H=0$ 이라 약허용이다.
- $L=\langle e_2\rangle$ 이면 $\langle e_2\rangle$ 에서 $t_H=1\le t_N=1$, $\langle e_1\rangle$ 에서 $0\le0$ 이라 약허용이고, 대응하는 표현은 두 1 차원 표현의 직합이다.
- $L=\langle e_1\rangle$ 이면 단위근 직선에서 $t_H=1\gt t_N=0$ 이라 약허용이 아니고, 대응하는 결정적 표현이 없다.
- $v_p(a_p)\gt 0$ 이면 두 고윳값의 부치가 $1/2$ 이라 $\mathbb Q_p$ 에 들어 있지 않고, $\varphi$ 안정 진부분공간이 없어 조건이 자동으로 성립한다.

첫째와 넷째가 각각 보통 환원과 초특이 환원 타원곡선의 $D_{\mathrm{cris}}$ 이다.

## 모듈러성 올림

Wiles 이후의 $R=\mathbb T$ 정리들은 Galois 변형환을 다루고, 변형에 국소 조건을 걸지 않으면 환이 너무 커진다. $p$ 에서 거는 조건이 $p$ 진 Hodge 이론으로 쓰인다. 무게 $k$ 의 새형식 $f$ 에 붙는 $\rho_f\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\bar{\mathbb Q}\_p)$ 는 $p\nmid N_f$ 일 때 $G_{\mathbb Q_p}$ 로 제한하면 결정적이고 Hodge–Tate 무게가 $\lbrace 0,1-k\rbrace$ 다[^1]. $p\Vert N_f$ 이고 $f$ 의 지표가 $p$ 에서 자명하면 반안정이다.

Kisin 은 이 조건을 변형 공간의 닫힌 부분스킴(결정적 변형환, 반안정 변형환)으로 정의하고 그 기하를 계산해 모듈러성 올림 정리를 더 넓은 무게와 준위로 확장했다. [Langlands 강령](langlands-program.md)의 국소–대역 정합성에서 $p$ 자리의 조건이 이 이론으로 서술된다.

## Fontaine–Mazur 추측

$\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_n(\bar{\mathbb Q}\_p)$ 가 기약이고

1. 유한 개의 소수를 제외하고 비분기이며
2. $G_{\mathbb Q_p}$ 로 제한하면 de Rham

이면 $\rho$ 는 어떤 대수다양체의 에탈 코호몰로지에서 Tate 꼬임을 허용해 온다는 것이 [Fontaine–Mazur 추측](fontaine-mazur.md)이다. 조건 2 가 기하에서 오는 표현을 국소적 조건으로 특징짓는다. $G_{\mathbb Q}$ 의 2 차원 홀수 표현에서 잔여 표현이 기약이고 $p$ 에서 적당한 조건을 만족하는 경우는 Kisin 과 Emerton 이 증명했다.

## perfectoid 공간과 프리즘 코호몰로지

Fontaine–Wintenberger 의 노름체 대응은 $p$ 진 탑을 충분히 올라가면 표수 $p$ 가 보인다는 현상이다. Scholze 는 이를 공간 차원으로 올려 perfectoid 공간을 정의하고 틸팅 $X\mapsto X^\flat$ 이 에탈 위치를 보존한다는 정리로 이 이론을 기하화했다. $A_{\mathrm{inf}}$ 와 $\theta$ 가 프리즘 $(A_{\mathrm{inf}},(\xi))$ 의 원형 예가 되고, Bhatt–Scholze 의 프리즘 코호몰로지는 결정 코호몰로지, de Rham 코호몰로지, 에탈 코호몰로지를 하나의 대상에서 특수화로 얻는다. 위의 비교동형들이 그 이론에서는 한 코호몰로지의 여러 올이다.

[^1]: 무게의 부호 관례는 문헌마다 다르다. 여기서는 $\mathbb C_p\otimes V\cong\bigoplus\mathbb C_p(-h_i)$ 로 $h_i$ 를 정해 $\mathbb Q_p(1)$ 의 무게가 $-1$ 이고 $D_{\mathrm{dR}}$ 의 여과 점프와 부호가 맞도록 했다. 모듈러성 쪽 문헌은 반대 부호를 써서 순환지표의 무게를 $1$ 로 하고 무게 $k$ 형식의 무게를 $\lbrace 0,k-1\rbrace$ 로 적는 경우가 많다.

[^2]: Colmez, Fontaine, *Construction des représentations p-adiques semi-stables*, Invent. Math. 140 (2000). 약허용 여과 $\varphi$ 가군이 모두 허용임을 보인 논문이다. Fontaine 의 주기환 구성 자체는 *Le corps des périodes p-adiques*, Astérisque 223 (1994) 에 정리되어 있다.

# 연관 문서

## 선수지식

- [국소 유체론](local-class-field-theory.md)
- [Galois 표현](galois-representations.md)

## 더 알아보기

- [Sen 이론](sen-theory.md)
- [Fontaine–Mazur 추측](fontaine-mazur.md)
- [Fargues–Scholze 기하화](fargues-scholze.md)

#number_theory #field_theory #algebraic_topology
