# p 진 Hodge 이론과 Fontaine 주기환

# 개요

[Galois 표현](galois-representations.md)에서 에탈 코호몰로지가 $\ell$ 진 표현을 공급한다. 그 표현들을 [국소체](local-class-field-theory.md) $K/\mathbb Q_p$ 의 절대 Galois 군 $G_K=\mathrm{Gal}(\bar K/K)$ 위에서 분류할 때 $\ell\ne p$ 와 $\ell=p$ 가 갈린다.

$\ell\ne p$ 쪽에서는 Grothendieck 의 준안정 정리가 $\ell$ 진 표현의 관성 작용을 유한 자료로 압축한다. $\ell=p$ 쪽에서는 $G_K$ 의 $p$ 진 표현이 연속성만으로 거의 제약을 받지 않아 무한히 많은 모양으로 존재하고, 그중 기하에서 오는 것을 가려낼 방법이 없다.

Fontaine 은 표현을 바꾸는 대신 계수를 키운다. $G_K$ 가 작용하는 거대한 위상환 $B$ 를 잡고 다음을 본다.

$$
D_B(V)=(B\otimes_{\mathbb Q_p}V)^{G_K}
$$

$B$ 를 잘 고르면 불변식을 취하는 과정에서 $G_K$ 작용이 상쇄되고 $D_B(V)$ 에는 Frobenius 나 여과 같은 선형대수 자료만 남는다. 이런 $B$ 가 주기환(period ring)이고, $\mathbb Q_p\subset B_{\mathrm{HT}},B_{\mathrm{dR}},B_{\mathrm{st}},B_{\mathrm{cris}}$ 의 사슬이 표현의 네 등급을 정의한다.

복소다양체에서 de Rham 코호몰로지와 특이 코호몰로지를 잇는 비교동형은 $\mathbb C$ 로 계수를 올려야 성립하고 그 동형의 행렬 성분이 주기다. $p$ 진 세계에서 $\mathbb C$ 자리에 $B_{\mathrm{dR}}$ 이, $2\pi i$ 자리에 아래에서 만들 원소 $t$ 가 놓인다.

# 직관

## $\ell\ne p$ 의 경우

$G_K$ 의 $\ell$ 진 표현 $\rho\colon G_K\to\mathrm{GL}\_n(\mathbb Q_\ell)$ 에서 관성군 $I_K$ 의 야생 부분 $P_K$ 는 프로-$p$ 군이고 상 $\rho(P_K)$ 는 프로-$\ell$ 군 안의 콤팩트 부분군이다. $p\ne\ell$ 이므로 프로-$p$ 군에서 프로-$\ell$ 군으로 가는 연속 준동형의 상은 유한하고, 야생 관성은 유한한 정보만 남긴다.

남은 순한 관성 $I_K/P_K\cong\prod_{\ell'\ne p}\mathbb Z_{\ell'}$ 의 $\ell$ 부분만 작용하며, Grothendieck 은 열린 부분군 위에서 그 작용이 유니포턴트임을 보였다.

$$
\rho(\sigma)=\exp\big(t_\ell(\sigma)N\big),\qquad N\ \text{멱영}
$$

$\ell$ 진 표현 하나가 Weil–Deligne 표현 $(r,N)$ 이라는 유한 자료로 환원되고, 그 자료에 $\ell$ 이 등장하지 않아 여러 소수의 표현을 한 자리에서 비교할 수 있다.

## $\ell=p$ 에서 달라지는 점

$p$ 진 표현에서는 $\rho(P_K)$ 가 프로-$p$ 군 안의 프로-$p$ 군이므로 무한히 클 수 있다. 1차원 표현은 연속 지표

$$
\chi\colon G_K^{\mathrm{ab}}\cong\widehat{K^\times}\longrightarrow\mathbb Z_p^\times
$$

인데 국소 [유체론](class-field-theory.md)이 $K^\times\cong\pi^{\mathbb Z}\times\mathcal O_K^\times$ 를 주고 $\mathcal O_K^\times$ 가 $\mathbb Z_p^{[K:\mathbb Q_p]}$ 를 포함하므로 연속 지표가 양의 차원의 족을 이룬다.

이 무한함은 정보량이기도 하다. 좋은 환원을 가진 다양체의 $\ell$ 진 코호몰로지는 관성이 자명하다는 사실만 말하지만, $p$ 진 코호몰로지는 특수 올의 결정 코호몰로지 전체를 Frobenius 와 Hodge 여과까지 포함해 기억한다. $p$ 진 Hodge 이론은 그 자료를 읽는 언어다.

## 주기와 비교동형

$X$ 가 $\mathbb Q$ 위의 매끄러운 사영 다양체일 때 [de Rham 코호몰로지](de-rham-cohomology.md) $H^n_{\mathrm{dR}}(X/\mathbb Q)$ 와 특이 코호몰로지 $H^n(X(\mathbb C),\mathbb Q)$ 는 차원이 같지만 표준적 동형이 없다. 적분

$$
\langle\omega,\gamma\rangle=\int_\gamma\omega
$$

이 주는 쌍대성은 $\mathbb C$ 로 계수를 올린 뒤에야 동형이 되고, 두 $\mathbb Q$ 구조 사이의 전이행렬 성분이 주기다. 가장 단순한 예가 $\mathbb G_m$ 의 $\oint dz/z=2\pi i$ 다.

$p$ 진에서는 왼쪽에 $G_K$ 가 작용하는 $H^n_{\mathrm{et}}(X_{\bar K},\mathbb Q_p)$ 를, 오른쪽에 여과와 Frobenius 를 가진 $H^n_{\mathrm{dR}}(X/K)$ 를 놓는다. 둘을 잇는 동형은 $K$ 위에 없고 두 구조를 모두 담을 만큼 큰 환 $B_{\mathrm{dR}}$ 로 올려야 한다.

$$
B_{\mathrm{dR}}\otimes_K H^n_{\mathrm{dR}}(X/K)\thickspace\cong\thickspace B_{\mathrm{dR}}\otimes_{\mathbb Q_p}H^n_{\mathrm{et}}(X_{\bar K},\mathbb Q_p)
$$

양변에 $G_K$ 가 작용한다. 왼쪽은 $B_{\mathrm{dR}}$ 성분으로만, 오른쪽은 두 성분 모두에 작용하므로 불변식을 취하면 오른쪽에서 Galois 작용이 사라지고 왼쪽의 $H_{\mathrm{dR}}$ 만 남는다. 이것이 $D_{\mathrm{dR}}$ 의 내용이다.

## $2\pi i$ 에 해당하는 원소

$\zeta_{p^n}$ 을 정합적으로 고른 계 $\varepsilon=(1,\zeta_p,\zeta_{p^2},\dots)$ 에서 출발해 형식적으로

$$
t=\log[\varepsilon]
$$

로 둔다. $[\varepsilon]$ 은 아래에서 정의할 Teichmüller 올림이고 $\log$ 는 $1$ 근방의 [멱급수](power-series.md)다. $g\in G_K$ 가 $\zeta_{p^n}\mapsto\zeta_{p^n}^{\chi(g)}$ 로 작용하므로 다음이 성립한다.

$$
g(t)=\chi(g)\thinspace t
$$

$t$ 는 순환지표 $\chi$ 에 대한 고유벡터이고, 복소 쪽에서 복소켤레가 $2\pi i\mapsto-2\pi i$ 로 작용하는 것과 같은 자리에 있다. $t$ 가 가역인 환에서는 $t^{-1}\otimes e$ 가 불변원소이므로 Tate 꼬임 $\mathbb Q_p(1)$ 이 자명해진다. 주기환은 미리 정해 둔 꼬임들을 자명하게 만드는 계수환이다.

## 네 층의 주기환

기하의 환원 상태에 따라 남는 자료가 다르므로 주기환도 여럿이다.

| 조건 | 대응하는 환원 | 남는 선형대수 자료 |
| --- | --- | --- |
| 결정적 | 좋은 환원 | Frobenius $\varphi$ 와 여과 |
| 반안정 | 반안정 환원 | $\varphi$ , 모노드로미(monodromy) 작용소 $N$ , 여과 |
| de Rham | 임의 환원 | 여과 |
| Hodge–Tate | 임의 환원 | Hodge–Tate 무게 |

위의 조건이 아래의 조건을 함의하고, 위로 갈수록 남는 자료가 풍부하다. Hodge–Tate 는 무게 정수만 기억하고 결정적은 Frobenius 와 여과를 모두 기억해 표현을 결정한다.

# 정의

## 허용 환과 Fontaine 함자

$G_K$ 가 작용하는 $\mathbb Q_p$ 대수 $B$ 가 정역이고 $\mathrm{Frac}(B)$ 로의 작용이 그 확장과 정합적이며 $E=B^{G_K}$ 가 체라고 하자. $B$ 가 정칙(regular)이라 함은 다음을 만족하는 상황이다.

$$
\big(\mathrm{Frac}(B)\big)^{G_K}=B^{G_K}=E
$$

이때 임의의 $p$ 진 표현 $V$ 에 대해 다음이 성립한다.

$$
D_B(V)=(B\otimes_{\mathbb Q_p}V)^{G_K},\qquad \dim_E D_B(V)\le\dim_{\mathbb Q_p}V
$$

등호가 성립하면 $V$ 가 **$B$ 허용**이다. 등호는 자연사상

$$
\alpha_V\colon B\otimes_E D_B(V)\longrightarrow B\otimes_{\mathbb Q_p}V
$$

가 동형인 것과 같고 이것이 비교동형의 추상적 형태다. $B$ 허용 표현들은 부분표현, 몫, [텐서곱](tensor-products.md), 쌍대에 닫혀 탄나키안 부분[범주](category.md)를 이룬다.

## $\mathbb C_p$ 와 Hodge–Tate 환

$\mathbb C_p=\widehat{\bar K}$ 를 $\bar K$ 의 $p$ 진 완비화라 하자. Tate 의 계산은 다음이다.

$$
\mathbb C_p^{G_K}=K,\qquad
H^0(G_K,\mathbb C_p(i))=H^1(G_K,\mathbb C_p(i))=0\quad(i\ne0)
$$

서로 다른 꼬임이 불변식도 확대도 만들지 않으므로 $\mathbb C_p$ 계수로 올린 뒤의 꼬임별 분해가 유일하다. 이 성질을 담은 환이 다음이다.

$$
B_{\mathrm{HT}}=\bigoplus_{i\in\mathbb Z}\mathbb C_p(i)=\mathbb C_p[t,t^{-1}]
$$

$V$ 가 $B_{\mathrm{HT}}$ 허용이면 **Hodge–Tate 표현**이고, 이는 다음과 같다.

$$
\mathbb C_p\otimes_{\mathbb Q_p}V\thickspace\cong\thickspace\bigoplus_{i}\mathbb C_p(-h_i)
$$

중복도를 세어 나온 정수 $h_1\le\dots\le h_n$ 이 **Hodge–Tate 무게**다. 이 관례에서 $\mathbb Q_p(1)$ 의 무게는 $-1$ 이고 de Rham 여과 점프와 부호가 일치한다[^1].

## $B_{\mathrm{dR}}$

구성은 표수 $p$ 로 내려갔다가 Witt 벡터로 되올라온다.

$$
R=\varprojlim_{x\mapsto x^p}\mathcal O_{\mathbb C_p}/p
$$

는 표수 $p$ 의 완전 부치환이고 그 분수체는 대수적으로 닫혀 있다. 앞의 $\varepsilon=(1,\zeta_p,\dots)$ 가 $R$ 의 원소다. $A_{\mathrm{inf}}=W(R)$ 을 Witt 벡터환으로 두면 표준적 전사

$$
\theta\colon A_{\mathrm{inf}}\longrightarrow\mathcal O_{\mathbb C_p},\qquad
\theta\Big(\sum p^n[x_n]\Big)=\sum p^nx_n^\sharp
$$

가 있고 그 핵은 주 [아이디얼](ideals-quotient-rings.md) $(\xi)$ 다. $[\thinspace\cdot\thinspace]$ 이 Teichmüller 올림이다. 핵으로 완비화하고 $p$ 를 뒤집으면 다음을 얻는다.

$$
B_{\mathrm{dR}}^+=\varprojlim_n A_{\mathrm{inf}}[1/p]/(\ker\theta)^n,\qquad
B_{\mathrm{dR}}=B_{\mathrm{dR}}^+[1/t]
$$

$B_{\mathrm{dR}}^+$ 는 완비 이산부치환이고 잔여체가 $\mathbb C_p$ 이며 $t=\log[\varepsilon]$ 이 극대 아이디얼의 생성원이다. $B_{\mathrm{dR}}$ 은 체이고 다음 여과를 갖는다.

$$
\mathrm{Fil}^iB_{\mathrm{dR}}=t^iB_{\mathrm{dR}}^+,\qquad
\mathrm{gr}^\bullet B_{\mathrm{dR}}=B_{\mathrm{HT}}
$$

$B_{\mathrm{dR}}$ 에는 $\mathbb C_p$ 로 가는 $G_K$ 동변 단면이 없다. 여과가 갈라지지 않으므로 de Rham 조건이 Hodge–Tate 조건보다 강하다.

$D_{\mathrm{dR}}(V)=(B_{\mathrm{dR}}\otimes V)^{G_K}$ 는 $K$ 위 벡터공간이며 여과를 물려받는다. 차원이 꽉 차면 $V$ 가 **de Rham 표현**이다.

## $B_{\mathrm{cris}}$ 와 $B_{\mathrm{st}}$

$B_{\mathrm{dR}}$ 은 $K$ 를 통째로 품고 있어 Frobenius 를 가질 수 없다. Frobenius 를 살리려면 $A_{\mathrm{inf}}$ 에서 나누어진 거듭제곱 포락을 취해 작은 부분환을 만든다.

$$
B_{\mathrm{cris}}=\Big(A_{\mathrm{inf}}\big[\tfrac{\xi^n}{n!}\big]^\wedge_p[1/p]\Big)[1/t]\ \subset\ B_{\mathrm{dR}}
$$

$W(R)$ 의 Frobenius 가 내려와 $\varphi$ 를 주고 $\varphi(t)=pt$ 다. 불변부분체는 $K_0=W(k)[1/p]$ , 곧 $K$ 의 최대 비분기 부분체다. $p$ 의 $p^n$ 제곱근 계 $\tilde p\in R$ 를 골라 초월원소 $u=\log[\tilde p]$ 를 형식적으로 붙이면 다음이 된다.

$$
B_{\mathrm{st}}=B_{\mathrm{cris}}[u],\qquad
\varphi(u)=pu,\qquad N=-\frac{d}{du}
$$

$N$ 은 모노드로미 작용소이고 $N\varphi=p\varphi N$ 을 만족한다. $u$ 를 $\log p$ 의 어떤 값으로 보내는 선택마다 $B_{\mathrm{st}}\hookrightarrow B_{\mathrm{dR}}$ 이 달라지지만 허용성 판정은 그 선택에 의존하지 않는다.

$$
D_{\mathrm{cris}}(V)=(B_{\mathrm{cris}}\otimes V)^{G_K},\qquad
D_{\mathrm{st}}(V)=(B_{\mathrm{st}}\otimes V)^{G_K}
$$

는 $K_0$ 위의 벡터공간이고 각각 $\varphi$ 와 $(\varphi,N)$ 을 가지며 $D_K=K\otimes_{K_0}D$ 위에 여과가 온다. 차원이 꽉 차면 **결정적(crystalline)**, **반안정(semistable)** 표현이다.

## 여과 $\varphi$ 가군과 약허용성

여과 $\varphi$ 가군은 유한차원 $K_0$ 벡터공간 $D$ 에 $\sigma$ 반선형 전단사 $\varphi$ 와 $D_K$ 위의 감소 여과가 주어진 것이다. 두 정수를 붙인다.

$$
t_N(D)=v_p(\det\varphi),\qquad
t_H(D)=\sum_{i\in\mathbb Z}i\cdot\dim_K\mathrm{gr}^iD_K
$$

$t_N$ 은 Newton 다각형의 총 기울기, $t_H$ 는 Hodge 다각형의 총 기울기다. $D$ 가 **약허용(weakly admissible)** 이라 함은 다음을 뜻한다.

$$
t_H(D)=t_N(D)\quad\text{이고}\quad
t_H(D')\le t_N(D')\ \ \text{for all }\varphi\text{ 안정 } D'\subset D
$$

부등식은 모든 부분대상에서 Newton 다각형이 Hodge 다각형 위에 있다는 진술이며 [Newton 다각형](newton-polygon.md)의 기울기 비교가 여기서 다시 나온다.

# 성질

## 사슬과 엄밀한 포함

주기환의 포함 $B_{\mathrm{cris}}\subset B_{\mathrm{st}}\subset B_{\mathrm{dR}}$ 과 $\mathrm{gr}B_{\mathrm{dR}}=B_{\mathrm{HT}}$ 에서 다음이 나온다.

$$
\text{결정적}\ \Longrightarrow\ \text{반안정}\ \Longrightarrow\ \text{de Rham}\ \Longrightarrow\ \text{Hodge–Tate}
$$

세 화살표 모두 역이 성립하지 않는다.

- 반안정이지만 결정적이 아닌 예: Tate 곡선 $E_q$ 의 $V_p(E_q)$ 가 $N\ne0$ 이다.
- de Rham 이지만 반안정이 아닌 예: 잠재적으로만 좋은 환원을 갖는 곡선. $K$ 의 유한확대로 올라가면 반안정이 된다.
- Hodge–Tate 이지만 de Rham 이 아닌 예: $\mathbb Q_p\oplus\mathbb Q_p(1)$ 의 비자명한 확대 가운데 $H^1_g$ 밖에 놓인 것. $\mathbb C_p$ 로 올리면 분해되지만 $B_{\mathrm{dR}}$ 로 올려도 분해되지 않는다. $H^1(G_K,\mathbb Q_p(1))$ 이 $K^\times$ 의 완비화이므로 이런 확대가 많다.

## Colmez–Fontaine 정리

약허용성은 필요조건이면서 충분조건이다[^2].

$$
D_{\mathrm{st}}\colon\ \mathrm{Rep}^{\mathrm{st}}\_{\mathbb Q_p}(G_K)\ \xrightarrow{\ \sim\ }\ \mathrm{MF}^{\varphi,N}\_K(\text{약허용})
$$

가 범주 동치이고, $N=0$ 으로 제한하면 결정적 표현과 약허용 여과 $\varphi$ 가군의 동치가 된다. $p$ 진 표현이 유한한 선형대수 자료로 번역되며, 역함자는 $V_{\mathrm{st}}(D)=\mathrm{Fil}^0(B_{\mathrm{st}}\otimes_{K_0}D)^{\varphi=1,N=0}$ 이다.

## 비교정리

기하가 이 조건들을 만족한다는 Fontaine 의 $C_{\mathrm{st}}$ 추측을 Faltings, Tsuji, Nizioł 등이 증명했다. $X/K$ 가 고유하고 매끄러우며 $\mathcal O_K$ 위에 반안정 모형을 가지면 다음이 $\varphi$ , $N$ , $G_K$ , 여과를 모두 보존하며 성립한다.

$$
B_{\mathrm{st}}\otimes_{K_0}H^n_{\mathrm{log-cris}}(X_k)\thickspace\cong\thickspace B_{\mathrm{st}}\otimes_{\mathbb Q_p}H^n_{\mathrm{et}}(X_{\bar K},\mathbb Q_p)
$$

좋은 환원이면 $N=0$ 이고 결정적이 되며 $D_{\mathrm{cris}}(H^n_{\mathrm{et}})=H^n_{\mathrm{cris}}(X_k/W)[1/p]$ 다. $\ell$ 진 코호몰로지가 관성 자명 여부만 말하는 자리에서 $p$ 진 코호몰로지는 특수 올의 결정 코호몰로지 전체를 복원한다.

Hodge–Tate 분해도 따라 나온다.

$$
\mathbb C_p\otimes_{\mathbb Q_p}H^n_{\mathrm{et}}(X_{\bar K},\mathbb Q_p)\thickspace\cong\thickspace\bigoplus_{i+j=n}\mathbb C_p(-i)\otimes_KH^j(X,\Omega^i_{X/K})
$$

[Hodge 이론](hodge-theory.md)의 $H^n(X,\mathbb C)=\bigoplus H^{p,q}$ 와 형태가 같고 $\mathbb C$ 자리에 $\mathbb C_p$ 가, 켤레 대칭 자리에 Tate 꼬임이 들어간다.

## $p$ 진 단일화 정리

Grothendieck 준안정 정리에 해당하는 진술은 다음이다.

$$
V\ \text{de Rham}\ \Longleftrightarrow\ V\ \text{잠재적으로 반안정}
$$

곧 어떤 유한확대 $L/K$ 위에서 $V|\_{G_L}$ 가 반안정이다. Berger 가 이를 $p$ 진 미분방정식의 Crew 추측(André, Kedlaya, Mebkhout 이 독립적으로 증명)으로 환원해 해결했다. 이 정리로 de Rham 표현에서도 Weil–Deligne 표현을 뽑을 수 있고 $p$ 에서의 국소 Langlands 대응을 $\ell\ne p$ 와 같은 언어로 쓴다.

## $(\varphi,\Gamma)$ 가군

허용성 이론이 좋은 표현만 다루는 반면 모든 $p$ 진 표현을 선형대수로 옮기는 길도 있다. $K_\infty=K(\mu_{p^\infty})$ 와 $\Gamma=\mathrm{Gal}(K_\infty/K)$ 로 두면 Fontaine–Wintenberger 의 노름체 정리가 다음을 준다.

$$
\mathrm{Gal}(\bar K/K_\infty)\thickspace\cong\thickspace\mathrm{Gal}\big(\overline{\mathbb F_q((\pi))}/\mathbb F_q((\pi))\big)
$$

표수 $0$ 의 탑을 올라가면 표수 $p$ 의 체가 나타난다. 그 결과 다음이 동치가 된다.

$$
\mathrm{Rep}\_{\mathbb Z_p}(G_K)\thickspace\cong\thickspace\lbrace\text{에탈 }\varphi\text{–}\Gamma\text{ 가군 over }\mathbf A_K\rbrace
$$

Galois 코호몰로지는 Herr 복체 $D\xrightarrow{(\varphi-1,\gamma-1)}D\oplus D\to D$ 로 계산되어, 프로유한군의 코호몰로지가 두 작용소의 유한 복체가 된다.

## 예: 타원곡선의 Tate 가군

$E/K$ 가 [타원곡선](elliptic-curves.md)이고 $V=V_p(E)^\ast\cong H^1_{\mathrm{et}}$ 라 하자. Hodge–Tate 무게는 $\lbrace 0,1\rbrace$ 이고 $t_H=1$ 이다.

| 환원 | $V$ | $D_{\mathrm{cris}}$ 의 Frobenius 부치 |
|---|---|---|
| 좋은 환원, 초특이 | 결정적 | $\lbrace 1/2,1/2\rbrace$ 이고 $K_0$ 위 고유값 없음 |
| 좋은 환원, 보통 | 결정적 | $\lbrace 0,1\rbrace$ 이고 단위근 방향이 $\mathrm{Fil}^1$ 밖 |
| 곱셈 환원 | 반안정, $N\ne0$ | $\lbrace 0,1\rbrace$ |
| 잠재적 좋은 환원 | 잠재적 결정적 | 유한확대 후 위와 같음 |

좋은 환원과 결정적 성질이 동치라는 것이 Fontaine 의 기준이고, $p$ 진 판정이 기하의 환원 상태를 읽는다.

# 활용

## 약허용성 판정

2차원, Hodge 무게 $\lbrace 0,1\rbrace$ 인 경우에 $\varphi$ 안정 직선마다 $t_H\le t_N$ 을 검사한다.

세 번째만 실패한다. 단위근 방향의 직선은 $t_N=0$ 인데 여과가 그 직선에 실려 $t_H=1$ 이 되기 때문이다. 이 배치는 보통 환원 타원곡선의 $p$ 진 표현이 $\mathbb Q_p\oplus\mathbb Q_p(1)$ 꼴로 분할된 상황에 해당하고 실제로 그런 분할은 일어나지 않는다. 약허용성이 그것을 선형대수로 배제한다.

첫 번째 경우는 고유값 $\alpha,\beta$ 가 $x^2-a_px+p$ 의 근이고 $v_p(a_p)\gt 0$ 이라 $K_0$ 위에 고유벡터가 없다. $\varphi$ 안정 진부분공간이 없으므로 조건이 자동으로 성립한다.

## 모듈러성 올림

Wiles 이후의 $R=\mathbb T$ 정리들은 Galois 변형환을 다루고, 변형에 국소 조건을 걸지 않으면 환이 너무 커진다. $p$ 에서 거는 조건이 $p$ 진 Hodge 이론의 언어로 쓰인다. 무게 $k$ 의 새형식 $f$ 에 붙는 $\rho_f\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\bar{\mathbb Q}\_p)$ 는 $p\nmid N_f$ 일 때 $G_{\mathbb Q_p}$ 로 제한하면 결정적이고 Hodge–Tate 무게가 $\lbrace 0,1-k\rbrace$ 다[^1]. $p\Vert N_f$ 면 반안정이다.

Kisin 은 이 조건을 변형 공간 위의 닫힌 부분스킴(결정적 변형환, 준안정 변형환)으로 실현하고 그 기하를 통제해 모듈러성 올림 정리를 무게와 준위의 넓은 범위로 확장했다. [Langlands 강령](langlands-program.md)의 국소–대역 정합성에서 $p$ 자리를 담당하는 이론이다.

## Fontaine–Mazur 추측

$\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_n(\bar{\mathbb Q}\_p)$ 가 기약이고

1. 유한 개의 소수를 제외하고 비분기이며
2. $G_{\mathbb Q_p}$ 로 제한하면 de Rham

이면 $\rho$ 는 어떤 대수다양체의 에탈 코호몰로지에서 Tate 꼬임을 허용해 온다는 추측이다. 조건 2 가 기하에서 오는 표현을 국소적 조건으로 특징짓는다. 2차원 홀수 경우는 Kisin, Emerton 등이 대체로 해결했다.

## perfectoid 공간과 프리즘 코호몰로지

Fontaine–Wintenberger 의 노름체 대응은 $p$ 진 탑을 충분히 올라가면 표수 $p$ 가 보인다는 현상이다. Scholze 는 이를 공간 차원으로 올려 perfectoid 공간을 정의하고 틸팅 $X\mapsto X^\flat$ 이 에탈 위치를 보존한다는 정리로 이 이론을 기하화했다. $A_{\mathrm{inf}}$ 와 $\theta$ 가 프리즘 $(A_{\mathrm{inf}},(\xi))$ 의 원형 예가 되고, Bhatt–Scholze 의 프리즘 코호몰로지는 결정 코호몰로지, de Rham 코호몰로지, 에탈 코호몰로지를 하나의 대상에서 특수화로 얻는다. 위의 비교동형들이 그 이론에서는 한 코호몰로지의 여러 올이다.

[^1]: 무게의 부호 관례는 문헌마다 다르다. 여기서는 $\mathbb C_p\otimes V\cong\bigoplus\mathbb C_p(-h_i)$ 로 $h_i$ 를 정해 $\mathbb Q_p(1)$ 의 무게가 $-1$ 이고 $D_{\mathrm{dR}}$ 의 여과 점프와 부호가 맞도록 했다. 모듈러성 쪽 문헌은 반대 부호를 써서 순환지표의 무게를 $1$ 로 하고 무게 $k$ 형식의 무게를 $\lbrace 0,k-1\rbrace$ 로 적는 경우가 많다.

[^2]: Colmez, Fontaine, *Construction des représentations p-adiques semi-stables*, Invent. Math. 140 (2000). 약허용 여과 $\varphi$ 가군이 모두 허용임을 보인 논문이다. Fontaine 의 주기환 구성 자체는 *Le corps des périodes p-adiques*, Astérisque 223 (1994) 에 정리되어 있다.

# 연관 문서

## 선수지식

- [국소 유체론과 Lubin–Tate 형식군](local-class-field-theory.md)
- [Galois 표현](galois-representations.md)

## 더 알아보기

- [Sen 이론과 Hodge–Tate 무게](sen-theory.md)
- [Fontaine–Mazur 추측](fontaine-mazur.md)
- [Fargues–Scholze 기하화와 국소 Langlands](fargues-scholze.md)

#number_theory #field_theory #algebraic_topology
