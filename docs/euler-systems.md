# Euler 계

# 개요

**Euler 계(Euler system)** 는 수체의 탑 위에서 서로 맞물리는 대역 코호몰로지 류의 족이고, [Selmer 군](selmer-tate-shafarevich.md)의 크기를 위에서 누르는 데 쓴다. 타원곡선의 유리점이 이루는 군의 순위를 확정하려면 Selmer 군이 작다는 것을 보여야 하는데, 국소 조건으로 잘라낸 부분군이라는 정의는 어떤 원소가 없다는 정보를 주지 않는다. Euler 계의 류 하나는 Selmer 군의 원소가 만족해야 할 선형 방정식 하나를 주고, 방정식을 충분히 모으면 Selmer 군의 상계가 나온다.

# 직관

방정식의 출처는 대역 상호법칙이다. [유체론](class-field-theory.md)의 진술 "국소 불변량의 합은 0" 이 코호몰로지로 올라가면 두 대역류의 국소 짝의 합이 0 이라는 항등식이 된다. 대역류 $c$ 에 대해 미지의 Selmer 원소 $s$ 는

$$
\sum_v \big\langle \mathrm{loc}\_v(c),\ \mathrm{loc}\_v(s)\big\rangle_v=0
$$

를 만족한다. 항 대부분이 0 이 되도록 $c$ 를 고르면 남은 한 항이 $s$ 의 국소 성분을 0 으로 만든다.

대역 상호법칙의 항등식에 넣을 류 $c$ 가 Selmer 군에 있으면 Selmer 조건이 국소 짝에 대해 자기쌍대이므로 모든 항이 $0$ 이고 아무 정보도 나오지 않는다. 한 자리 $\ell$ 에서만 조건을 어기는 류여야 항등식이 한 항으로 줄고 $\mathrm{loc}\_\ell(s)=0$ 이 강제된다. 그런데 대수적으로 만들 수 있는 원소는 순환체의 단수 $1-\zeta_n$ , 타원곡선의 [Heegner 점](heegner-points.md) $y_n$ , 모듈러 곡선의 Beilinson 원소처럼 어느 자리에서도 조건을 어기지 않는 류를 준다.

이 원소들은 수체의 탑 위에서 자취로 이어져 있다. Heegner 점의 자취는 $\mathrm{Tr}\_{K_{n\ell}/K_n}\bigl(y_{n\ell}\bigr)=a_\ell\thinspace y_n$ 이므로 $p\mid a_\ell$ 인 $\ell$ 을 고르면 자취가 $p$ 를 법으로 $0$ 이다. 위수 $m$ 인 순환군 $\langle\sigma\rangle$ 의 군환에서 $D=\sum_{i=1}^{m-1}i\thinspace\sigma^i$ 를 점 $y$ 에 씌우면 $(\sigma-1)Dy=m\thinspace y-\mathrm{Tr}(y)$ 이므로, $p\mid m$ 이고 자취가 $p$ 로 나뉘면 $Dy$ 가 $p$ 를 법으로 Galois 불변이다.

그 불변원소가 $\ell$ 자리에서만 분기하는 코호몰로지 류를 주고, 상호법칙에 넣을 $c$ 가 된다. 이런 자취 관계를 만족하는 류의 족이 Euler 계이고, $D$ 로 류를 만드는 연산이 Kolyvagin 유도 연산자(Kolyvagin derivative operator)다.

# 정의

## Euler 계

$K$ 를 수체, $T$ 를 $G_K$ 가 작용하는 유한생성 $\mathbb Z_p$ 가군이라 하자. $\mathcal N$ 을 적당한 조건을 만족하는 제곱없는 정수들의 집합, $K(n)/K$ 를 도체 $n$ 에 붙는 아벨 확대의 족이라 하자.

류의 족 $c=\lbrace c_n\rbrace_{n\in\mathcal N}$ 으로 $c_n\in H^1(K(n),T)$ 인 것이 **Euler 계** 라는 것은 모든 $n$ 과 $\ell\nmid n$ 에 대해

$$
\mathrm{cor}\_{K(n\ell)/K(n)}\big(c_{n\ell}\big)=P_\ell\negthinspace\left(\mathrm{Fr}\_\ell^{-1}\right)c_n
$$

를 만족한다는 뜻이다. $\mathrm{cor}$ 는 코제한(corestriction)이고 $P_\ell(x)=\det(1-\mathrm{Fr}\_\ell x\mid T^{\ast})$ 다.

$T=\mathbb Z_p(1)$ 이면 $P_\ell(x)=1-x$ 이고 $H^1(K(n),\mathbb Z_p(1))$ 은 단수군의 완비화이므로, 순환체의 단수 $1-\zeta_n$ 이 이 정의를 만족한다. $T=T_pE$ 면 $P_\ell(x)=1-a_\ell x+\ell x^{2}$ 다. $P_\ell$ 은 $T^{\ast}$ 의 $L$ 함수의 $\ell$ 번째 Euler 인자이고, 계의 이름이 여기서 온다.

## 반순환 변형: Heegner 점의 경우

탑이 순환체가 아니라 허수이차체 $K$ 위의 환 유체(ring class field), 곧 반순환(anticyclotomic) 방향의 탑이므로 Heegner 점의 자취 관계에는 $a_\ell$ 만 나타나고 $\ell x^{2}$ 항이 없다. 이 방향에서는 $\ell$ 이 $K$ 에서 관성일 때 $\mathrm{Gal}(K_{n\ell}/K_n)$ 이 위수 $\ell+1$ 인 순환군이고, 자취 관계가 한 항으로 줄어든다.

Howard 는 이 변형의 한 형식화를 이분 Euler 계(bipartite Euler system)라 불렀다. 아래는 Kolyvagin 의 원래 경우다.

## Kolyvagin 소수

$E/\mathbb Q$ 가 도체 $N$ 인 [타원곡선](elliptic-curves.md), $K$ 가 Heegner 가정을 만족하는 허수이차체, $p$ 가 $E[p]$ 의 [Galois 표현](galois-representations.md)이 전사인 소수라 하자. 소수 $\ell$ 이 **Kolyvagin 소수(Kolyvagin prime)** 라는 것은

$$
\ell\nmid N\thinspace p\thinspace\mathrm{disc}(K),\qquad
\ell\ \text{은 }K\text{ 에서 관성},\qquad
p\mid \ell+1,\qquad p\mid a_\ell
$$

를 만족한다는 뜻이다. 마지막 두 조건은 $\mathrm{Fr}\_\ell$ 이 $\mathbb Q(E[p],\mu_p)$ 위에서 복소켤레와 공액이라는 한 조건으로 묶인다. [Chebotarev 밀도 정리](chebotarev.md)로 이런 $\ell$ 은 양의 밀도로 무한히 많고, 국소 성분에 대한 추가 조건을 붙여 고를 수 있다.

$n$ 을 Kolyvagin 소수들의 곱이라 하고 $K_n$ 을 도체 $n$ 의 링 유체, $G_n=\mathrm{Gal}(K_n/K_1)\cong\prod_{\ell\mid n}G_\ell$ 라 쓴다. $G_\ell$ 은 위수 $\ell+1$ 인 순환군이다.

## 유도류 κₙ

$G_\ell$ 의 생성원 $\sigma_\ell$ 에 대해 $D_\ell=\sum_{i=1}^{\ell}i\thinspace\sigma_\ell^{\thinspace i}$ 로 두고 $D_n=\prod_{\ell\mid n}D_\ell$ 라 하자[^1]. 위수 $m$ 인 순환군의 군환에서 $D=\sum_{i=1}^{m-1}i\thinspace\sigma^i$ 와 자취 $N=\sum_{i=0}^{m-1}\sigma^i$ 는 지수를 한 칸 밀어 상쇄시키면 $(\sigma-1)D=m-N$ 을 만족한다.

Heegner 점 $y_n\in E(K_n)$ 에 대해 다음이 성립한다.

- 이 항등식과 자취 관계에서 $D_n y_n$ 의 상은 $E(K_n)/pE(K_n)$ 안에서 $G_n$ 불변이다.
- $E[p]$ 가 기약이므로 $H^1(G_n,E(K_n)[p])=0$ 이고, 따라서 $D_n y_n$ 은 $E(K_1)/p$ 의 원소로 유일하게 내려온다. 다시 $K_1/K$ 로 내려 $\mathcal P_n\in E(K)/pE(K)$ 를 얻는다.
- Kummer 사상으로 $\mathcal P_n$ 을 보낸 것을 $\kappa_n\in H^1(K,E[p])$ 라 쓴다.

$n=1$ 이면 $\kappa_1$ 이 Heegner 점 $y_K$ 의 Kummer 상이고 Selmer 군에 들어 있다.

## Selmer 구조와 국소 조건

각 자리 $v$ 에서 부분군 $H^1_{\mathcal F}(K_v,E[p])\subset H^1(K_v,E[p])$ 를 고르는 것을 **Selmer 구조(Selmer structure)** 라 하고

$$
\mathrm{Sel}\_{\mathcal F}(K,E[p])=\left\lbrace\thinspace s\in H^1(K,E[p])\ :\ \mathrm{loc}\_v(s)\in H^1_{\mathcal F}(K_v,E[p])\ \ \forall v\thinspace\right\rbrace
$$

를 그 Selmer 군이라 한다. 표준 선택은 $H^1_f(K_v,E[p])=\mathrm{im}\big(E(K_v)/p\big)$ 이고 이때 Selmer 군이 보통의 $\mathrm{Sel}^p(E/K)$ 다.

Kolyvagin 소수 $\ell$ 위의 $K$ 의 소 $\lambda$ 에서 $\mathrm{Fr}\_\lambda=\mathrm{Fr}\_\ell^2$ 는 $E\lbrack p\rbrack$ 위에 자명하게 작용하고 $\mu_p\subset K_\lambda$ 이므로, $H^1(K_\lambda,E\lbrack p\rbrack)$ 는 $\mathbb F_p$ 위 4 차원이고 다음 두 2 차원 부분으로 쪼개진다.

| 이름 | 기호 | 정체 |
|---|---|---|
| 유한부(비분기) | $H^1_f(K_\lambda,E[p])$ | $H^1(\mathrm{Fr}\_\lambda\text{ 불변})$ 이고 $E(K_\lambda)/p$ 의 상 |
| 특이부(가로지름) | $H^1_s(K_\lambda,E[p])$ | 몫 $H^1/H^1_f$ 이고 분기류의 잔여 |

$\mathrm{Gal}(K_\lambda/\mathbb Q_\ell)$ 의 생성원이 복소켤레처럼 작용해 두 조각이 각각 $\pm$ 고유공간으로 1 차원씩 갈린다. 국소 Tate 짝은 $H^1_f\times H^1_s\to\mathbb F_p$ 의 완전 짝을 준다.

# 성질

## 유도류의 국소 성분

$\kappa_n$ 의 국소 성분은 다음과 같다.

$$
\mathrm{loc}\_v(\kappa_n)\in H^1_f(K_v,E[p])\quad(v\nmid n),\qquad
\mathrm{loc}\_\ell(\kappa_n)\ \text{는 }\ell\mid n\text{ 에서 분기할 수 있다}
$$

$\kappa_n$ 은 $n$ 을 나누는 자리에서만 Selmer 조건을 어긴다. $D_\ell$ 은 $\ell$ 위의 자리에서만 [관성군](ramification-groups.md)의 작용을 바꾼다.

$\ell\mid n\ell$ 에서 다음 상호법칙(Kolyvagin 의 명시적 상호법칙)이 성립한다. $\phi_\ell\colon H^1_f(K_\lambda,E\lbrack p\rbrack)\to H^1_s(K_\lambda,E\lbrack p\rbrack)$ 은 Kolyvagin 소수에서 정해지는 동형이다.

$
\mathrm{loc}\_\ell^{\thinspace s}(\kappa_{n\ell})=\phi_\ell\bigl(\mathrm{loc}\_\ell^{\thinspace f}(\kappa_n)\bigr)
$

한 층 위의 류의 특이부가 한 층 아래 류의 유한부로 계산되므로, $\mathrm{loc}\_\ell^{\thinspace f}(\kappa_n)\ne0$ 이면 $\kappa_{n\ell}$ 의 특이부도 0 이 아니다.

## 대역 상호법칙

[Brauer 군](brauer-groups.md)과 [국소 유체론](local-class-field-theory.md)에서 본 "국소 불변량의 합은 0" 이 [Poitou–Tate 완전열](poitou-tate.md)의 형태로 코호몰로지에 올라간다. $c,s\in H^1(K,E[p])$ 가 모두 대역류면

$$
\sum_v \big\langle \mathrm{loc}\_v(c),\ \mathrm{loc}\_v(s)\big\rangle_v=0
$$

이다. 합은 유한 개 항만 0 이 아니다. Euler 계 논법에서 대역 입력은 이 항등식이고, 나머지는 국소 계산과 Chebotarev 밀도 정리다.

## Kolyvagin 의 정리

$E/\mathbb Q$ 가 모듈러이고 $K$ 가 Heegner 가정을 만족한다고 하자. Heegner 점 $y_K\in E(K)$ 가 무한위수이면

$$
\mathrm{rank}\thinspace E(K)=1,\qquad \char35{}\text{Ш}(E/K)\lt\infty
$$

이다.

증명의 요지. $s\in \mathrm{Sel}^p(E/K)$ 가 $\kappa_1$ 이 생성하는 부분군 밖에 있다고 하자. Chebotarev 로 Kolyvagin 소수 $\ell$ 을 골라 $\mathrm{loc}\_\ell(s)\ne0$ 이면서 $\mathrm{loc}\_\ell^{\thinspace f}(\kappa_1)\ne0$ 이 되게 한다. 상호법칙을 $c=\kappa_\ell$ 과 $s$ 에 적용하면 $\ell$ 을 뺀 모든 자리에서 두 류가 서로 소멸자에 놓이므로 항이 사라지고

$$
\big\langle \mathrm{loc}\_\ell^{\thinspace s}(\kappa_\ell),\ \mathrm{loc}\_\ell^{\thinspace f}(s)\big\rangle_\ell=0
$$

만 남는다. 명시적 상호법칙으로 왼쪽 성분이 $\mathrm{loc}\_\ell^{\thinspace f}(\kappa_1)\ne0$ 과 같고 국소 짝이 완전하므로 $\mathrm{loc}\_\ell(s)=0$ 이며, $\ell$ 을 고른 방식과 모순이다. 같은 논법을 복소켤레의 두 고유공간에 대해 $\kappa_\ell$ 과 $\kappa_{\ell\ell'}$ 로 돌리면 유한 개를 뺀 $p$ 에서 $\mathrm{Sel}^p(E/K)$ 가 $\kappa_1$ 로 생성되는 1 차원 공간이고, 남은 $p$ 에서도 크기가 유계이므로 순위 1 과 $\text{Ш}$ 의 유한성이 나온다(Kolyvagin 1990). $\square$

$K$ 의 복소켤레에 대해 $E(K)$ 와 $\mathrm{Sel}$ 이 $\pm$ 고유공간으로 쪼개지고 $y_K$ 는 한쪽에만 놓인다. Kolyvagin 소수에서 $\mathrm{Fr}\_\ell$ 이 복소켤레와 켤레이므로 국소 성분도 $\pm$ 로 갈리고, $\kappa_n$ 의 부호는 $n$ 의 소인수 개수에 따라 바뀐다.

## 명시적 상계: Kolyvagin 지표

Kolyvagin 의 논법은 크기의 상계도 준다. $\kappa_n$ 이 $p$ 의 몇 제곱으로 나누어지는지의 최솟값을 $n$ 의 소인수 개수 $r$ 마다 $M_r$ 이라 하자. $M_0$ 은 $y_K$ 가 $E(K)$ 안에서 $p$ 로 나누어지는 횟수이고, Kolyvagin 은 $\char35{}\text{Ш}(E/K)\lbrack p^\infty\rbrack\le p^{2M_0}$ 을 증명했다. 수열 $M_r$ 은 감소하고, 그 극한 $M_\infty$ 가 유한하면(Kolyvagin 추측) 다음 등식이 성립한다(Kolyvagin 1991).

$$
\mathrm{ord}\_p\thinspace\char35{}\text{Ш}(E/K)\lbrack p^\infty\rbrack=2\thinspace(M_0-M_\infty)
$$

## 알려진 Euler 계의 목록

| Euler 계 | 계수 T | 얻는 결과 |
|---|---|---|
| 순환체 단수 $1-\zeta_n$ | $\mathbb Z_p(1)$ | Mazur–Wiles 의 재증명, 순환체 [Iwasawa 주추측](iwasawa-main-conjecture.md)(Rubin) |
| 타원 단수 | 허수이차체의 $\mathbb Z_p(1)$ | 허수이차체 위의 주추측 |
| Heegner 점 | $T_pE$ (반순환) | 해석적 순위 $\le1$ 에서 순위 공식과 $\text{Ш}$ 유한 |
| Beilinson–Kato 원소 | 모듈러 형식의 $T$ | $L(E,1)\ne0\Rightarrow$ 순위 0, 주추측의 한쪽 나눔 |
| Rubin–Stark 원소 | 일반 $\mathbb Z_p(1)$ 꼬임 | 추측 단계 |

Kato 의 Euler 계는 [모듈러 곡선](modular-curves.md)의 $K_2$ 안의 Beilinson 원소에서 오고, 허수이차체나 CM(complex multiplication)을 쓰지 않아 [모듈러 형식](modular-forms.md) 일반으로 확장된다. 얻는 방향은 반대다. Heegner 쪽이 $L'\ne0\Rightarrow$ 순위 1 을, Kato 쪽이 $L\ne0\Rightarrow$ 순위 0 과 주추측의 한쪽 나눔을 준다. 반대쪽 나눔은 Skinner–Urban 이 Eisenstein 합동([Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)의 방법)으로 증명했다.

## Kolyvagin 계 추상화

Mazur 와 Rubin 은 유도류가 만족하는 성질, 곧 $n$ 의 소인수에서 바뀐 국소 조건과 위의 명시적 상호법칙만을 정의로 삼은 족을 [Kolyvagin 계](kolyvagin-systems.md)라 불렀다. 국소 자료로 계산되는 핵심계수(core rank)가 $1$ 이면 Kolyvagin 계 전체가 순위 1 인 자유가군이고, 그 생성원이 Selmer 군의 크기를 정확히 준다.

# 활용

## 순환체 Iwasawa 주추측

Rubin 은 순환체 단수의 Euler 계로 Mazur–Wiles 의 주추측을 다시 증명했다. 주추측은 $\mathbb Q(\mu_{p^\infty})$ 의 이데알류군의 $\chi$ 성분이 이루는 Iwasawa 가군의 특성 아이디얼이 $p$ 진 [Dirichlet L 함수](dirichlet-l-functions.md)가 생성하는 아이디얼과 같다는 진술이다. Euler 계 쪽 증명은 단수와 순환체 단수의 지표가 류수라는 사실(Kummer, Sinnott)에서 한쪽 나눔을 얻고 해석적 류수 공식으로 반대쪽을 채운다.

## 해석적 순위 1 이하의 BSD

Gross–Zagier 가 $L'(E/K,1)\ne0\iff y_K$ 무한위수를, Kolyvagin 이 $y_K$ 무한위수 $\Rightarrow$ 순위 1 과 $\text{Ш}$ 유한을 준다. 둘을 합치면 해석적 순위가 0 이거나 1 인 타원곡선에서 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)(Birch and Swinnerton-Dyer conjecture, BSD)의 순위 부분이 나온다. 순위 0 인 경우는 비소실 꼬임을 골라 순위 1 인 상황으로 옮겨 처리하거나, Kato 의 Euler 계로 직접 처리한다.

## Ш 의 위수 계산

Kolyvagin 지표는 계산 가능한 양이다. Heegner 점을 수치적으로 구하고 $\mathcal P_n$ 이 $p$ 로 나뉘는 횟수를 보면 $\text{Ш}[p^\infty]$ 의 위수 상계가 나온다. BSD 공식의 다른 항(실주기, Tamagawa 수, 조절자)으로 얻은 예측값이 이 상계와 같고, 예측값이 $p$ 를 포함하지 않으면 $\text{Ш}\lbrack p^\infty\rbrack=0$ 이 확정된다.

[^1]: V. Kolyvagin, *Euler systems*, in **The Grothendieck Festschrift II**, Birkhäuser (1990), 435–483. 체계적 서술은 K. Rubin, *Euler Systems* (Annals of Math. Studies 147, 2000) 과 B. Mazur, K. Rubin, *Kolyvagin Systems* (Memoirs AMS 168, 2004). Kato 의 구성은 K. Kato, *p-adic Hodge theory and values of zeta functions of modular forms*, Astérisque **295** (2004). 이분 Euler 계는 B. Howard, *Bipartite Euler systems*, J. reine angew. Math. **597** (2006).

# 연관 문서

## 선수지식

- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)
- [Poitou–Tate 완전열](poitou-tate.md)

## 더 알아보기

- [Iwasawa 주추측](iwasawa-main-conjecture.md)
- [Kolyvagin 계](kolyvagin-systems.md)
- [Kolyvagin–Logachev 정리](kolyvagin-logachev.md)

#number_theory #theorem #algebra
