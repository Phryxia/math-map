# Galois 표현

# 개요

**Galois 표현(Galois representation)** 은 Galois 군에서 [행렬](matrices.md)군으로 가는 연속 준동형 $\rho\colon G_K\to\mathrm{GL}\_n(E)$ 다. 방정식 $y^2=x^3-x$ 의 해를 법 $p$ 로 세면 소수 $p$ 마다 다른 개수가 나오고, 이 개수들 사이의 관계는 소수를 하나씩 보아서는 드러나지 않는다. 다양체의 [에탈 코호몰로지](etale-cohomology.md)에는 Galois 군이 작용하고 Frobenius 원소의 대각합이 그 개수를 주므로, 모든 $p$ 의 개수가 표현 하나로 묶인다.

# 직관

$E\colon y^2=x^3-x$ 의 점을 법 $p$ 로 센다. 무한원점을 넣으면 $p=3$ 에서 $4$ 개, $p=5$ 에서 $8$ 개, $p=7$ 에서 $8$ 개다. $a_p=p+1-(\text{점의 개수})$ 로 두면 $a_3=0$, $a_5=-2$, $a_7=0$ 이다. 소수마다 따로 센 이 수들이 서로 어떤 관계인지는 표만 보아서는 알 수 없다.

$E$ 의 점은 덧셈으로 군을 이루고, $2P=O$ 인 점은 $O,(0,0),(1,0),(-1,0)$ 의 넷이다. 이 넷은 좌표가 정수이고 $p\ge 3$ 이면 법 $p$ 에서도 서로 다른 점이므로, 법 $p$ 의 점들이 이루는 군의 부분군이 된다. 그래서 모든 $p\ge 3$ 에서 점의 개수가 $4$ 의 배수이고, $4,8,8$ 이 그 예다. 점 넷에 대한 사실 하나가 모든 $p$ 의 점 개수를 제약한다.

$2P=O$ 대신 $\ell^nP=O$ 인 점을 보면 그 좌표는 일반적으로 대수적 수이고, 이런 점은 $(\mathbb Z/\ell^n)^2$ 과 같은 군을 이룬다. 대수적 수를 켤레로 보내는 Galois 군의 원소는 이 점들을 이 점들로 보내므로 $2\times 2$ 행렬 하나로 적힌다. $p$ 의 Frobenius 원소가 주는 행렬은 대각합이 $a_p$, 행렬식이 $p$ 다. $\ell=2$, $n=1$ 에서는 네 점이 모두 유리점이어서 행렬이 단위행렬이고, 대각합 $2$ 가 $a_p$ 와 법 $2$ 로 같으므로 $a_p$ 가 짝수다.

$n$ 을 모두 모으면 Galois 군 전체에서 $\ell$ 진 정수 성분의 $2\times 2$ 행렬로 가는 준동형 하나가 나오고, 모든 $p$ 의 $a_p$ 가 이 준동형의 대각합으로 들어 있다. 이 준동형이 Galois 표현이다.

# 정의

## ℓ 진 표현

수체나 국소체 $K$ 의 절대 Galois 군 $G_K=\mathrm{Gal}(\bar K/K)$ 는 사유한군(profinite group)이다. 연속 준동형

$$
\rho\colon G_K\to\mathrm{GL}\_n(\mathbb Q_\ell)
$$

을 **ℓ 진 표현(ℓ-adic representation)** 이라 한다. 계수가 $\mathbb C$ 이면 연속 준동형의 상이 유한군이지만, $\mathbb Q_\ell$ 계수에서는 상이 무한할 수 있다.

가장 간단한 예는 순환지표(cyclotomic character) $\chi_\ell\colon G_{\mathbb Q}\to\mathbb Z_\ell^\times$ 다. $\sigma\in G_{\mathbb Q}$ 가 $1$ 의 $\ell^n$ 제곱근 $\zeta$ 를 $\zeta^{a_n}$ 으로 보내면 $\chi_\ell(\sigma)=\lim a_n$ 이다. $p\ne\ell$ 의 Frobenius 원소는 $\zeta$ 를 $\zeta^p$ 로 보내므로 $\chi_\ell(\mathrm{Frob}\_p)=p$ 다.

## 불분기와 도체

소수 $\mathfrak p$ 의 [관성군](ramification-groups.md)이 자명하게 작용하면 $\rho$ 가 $\mathfrak p$ 에서 **불분기(unramified)** 라 한다. 그때 $\rho(\mathrm{Frob}\_{\mathfrak p})$ 가 켤레를 빼고 정해진다. $\chi_\ell$ 은 $\ell$ 이 아닌 모든 소수에서 불분기다.

분기하는 소수와 그 분기의 정도를 지수로 모은 [아이디얼](ideals-quotient-rings.md)을 **도체(conductor)** 라 한다. 다양체에서 온 표현은 유한 개의 소수에서만 분기한다. 직관 절의 $E$ 에서 온 표현의 도체는 $32$ 이고, $2$ 에서만 분기한다.

산술 Frobenius 의 역원을 기하적 Frobenius(geometric Frobenius)라 한다. 어느 쪽을 쓰는지는 문헌마다 다르다.

## Tate 가군

$E$ 가 $K$ 위의 [타원곡선](elliptic-curves.md)이고 $\ell\ne\mathrm{char}\thinspace K$ 일 때 **Tate 가군(Tate module)** 은 다음과 같다.

$$
T_\ell E=\varprojlim_nE\lbrack\ell^n\rbrack(\bar K)\cong\mathbb Z_\ell^2,
\qquad V_\ell E=T_\ell E\otimes\mathbb Q_\ell
$$

$G_K$ 가 꼬임점에 작용하므로 2 차원 표현 $\rho_{E,\ell}\colon G_K\to\mathrm{GL}\_2(\mathbb Q_\ell)$ 이 나온다. 좋은 환원을 갖는 $\mathfrak p$ 에서 다음이 성립한다.

$$
\mathrm{tr}\thinspace\rho_{E,\ell}(\mathrm{Frob}\_{\mathfrak p})=a_{\mathfrak p}=N\mathfrak p+1-\char35{}E(\mathbb F_{\mathfrak p}),\qquad \det\rho_{E,\ell}=\chi_\ell
$$

직관 절의 $E$ 에서 $\rho_{E,\ell}(\mathrm{Frob}\_5)$ 는 대각합이 $-2$, 행렬식이 $5$ 다.

## 에탈 코호몰로지

곡선이 아닌 다양체에서는 꼬임점 대신 [에탈 코호몰로지](etale-cohomology.md)가 표현을 준다. Zariski 위상에서는 기약 다양체 위의 상수 [층](sheaves.md)의 $i\gt 0$ 차 [코호몰로지](cohomology.md)가 모두 $0$ 이다. 열린 포함사상 대신 에탈 사상을 덮개로 놓고 그 [범주](category.md) 위에서 층과 코호몰로지를 정의한 것이 에탈 코호몰로지다. 표수 $p$ 인 체 위에서는 $\ell\ne p$ 로 잡고, $\mathbb Z/\ell^n$ 계수의 극한에서 $\mathbb Q_\ell$ 계수를 얻는다.

$$
H^i_{\mathrm{et}}(X_{\bar K},\mathbb Q_\ell)
$$

이 공간은 유한차원이고, $G_K$ 가 $X_{\bar K}$ 에 작용하므로 이 공간에도 연속적으로 작용한다. 타원곡선에서는 $H^1_{\mathrm{et}}(E_{\bar K},\mathbb Q_\ell)$ 가 $V_\ell E$ 의 쌍대다.

## Weil 추측

$\mathbb F_{q^n}$ 유리점은 $q^n$ 제곱 Frobenius 사상의 고정점이다. 에탈 코호몰로지에서 [Lefschetz 고정점 공식](lefschetz-fixed-point.md)이 성립하므로 점 개수는 Frobenius 작용의 대각합의 교대합이다.

$$
\char35{}X(\mathbb F_{q^n})=\sum_i(-1)^i\mathrm{tr}\bigl(\mathrm{Frob}^n\mid H^i_{\mathrm{et}}\bigr)
$$

[유한체](finite-fields.md) $\mathbb F_q$ 위의 매끄러운 [사영다양체](projective-varieties.md) $X$ 의 zeta 함수는 다음과 같다.

$$
Z(X,t)=\exp\Bigl(\sum_{n\ge1}\char35{}X(\mathbb F_{q^n})\frac{t^n}n\Bigr)
$$

Weil 추측(Weil conjectures)은 차원 $d$ 인 $X$ 에 대한 다음 네 진술이다.

1. $Z(X,t)$ 는 유리함수이고 $\prod_iP_i(t)^{(-1)^{i+1}}$ 로 쓰인다. 여기서 $P_i(t)=\det(1-\mathrm{Frob}\thinspace t\mid H^i_{\mathrm{et}})$ 다.
2. $t\mapsto1/(q^dt)$ 에 대한 함수방정식이 성립한다([Poincaré 쌍대성](poincare-duality.md)).
3. $P_i$ 의 역근 $\alpha$ 는 모두 $\lvert\alpha\rvert=q^{i/2}$ 를 만족한다([Riemann 가설](riemann-hypothesis.md)).
4. $X$ 가 표수 0 의 다양체의 환원이면 $\deg P_i$ 가 그 다양체의 Betti 수와 같다.

1, 2, 4 는 Grothendieck 이 에탈 코호몰로지를 세우며 얻었고, 3 은 Deligne 이 1974 년에 증명했다. 직관 절의 $E$ 를 $\mathbb F_5$ 위에서 보면 $P_1(t)=1+2t+5t^2$ 이고 다음이 성립한다.

$$
Z(E,t)=\frac{1+2t+5t^2}{(1-t)(1-5t)}
$$

$P_1$ 의 역근의 절댓값은 $\sqrt5$ 다.

# 성질

## 곡선의 경우

$X$ 가 종수 $g$ 인 곡선이면 $H^0$ 과 $H^2$ 이 1 차원이고 $H^1$ 이 $2g$ 차원이다. 따라서

$$
Z(X,t)=\frac{P_1(t)}{(1-t)(1-qt)},\qquad \deg P_1=2g
$$

이고 점 개수 공식이

$$
\char35{}X(\mathbb F_{q^n})=q^n+1-\sum_{j=1}^{2g}\alpha_j^n
$$

가 된다. Riemann 가설 $\lvert\alpha_j\rvert=\sqrt q$ 를 넣으면 Hasse–Weil 한계(Hasse–Weil bound) $\lvert\char35{}X(\mathbb F_q)-q-1\rvert\le2g\sqrt q$ 가 나온다. $g=1$ 인 타원곡선에서는 $\lvert a_q\rvert\le2\sqrt q$ 이고, 이것이 Hasse 정리(Hasse's theorem)다.

## 모듈러성과의 연결

Deligne 은 무게 $k\ge2$ 의 Hecke 고유형식마다 2 차원 $\ell$ 진 표현 $\rho_f$ 를 [모듈러 곡선](modular-curves.md)의 에탈 코호몰로지에서 잘라냈다. $\mathrm{tr}\thinspace\rho_f(\mathrm{Frob}\_p)=a_p$ 이고, 계수의 크기 상계인 Ramanujan 추측(Ramanujan conjecture)이 Weil 추측의 Riemann 가설에서 따라온다.

주어진 Galois 표현이 어떤 고유형식에서 오는지를 보이는 것이 모듈러성이고, 그 도구가 변형 이론이다. mod $\ell$ 표현 $\bar\rho$ 를 고정하고 그것으로 환원되는 $\ell$ 진 표현들의 보편 변형환 $R$ 을 만든 뒤 모듈러 표현만 모은 Hecke 대수 $T$ 와 비교한다. $R=T$ 를 증명하면 모든 변형이 모듈러이고, 이것이 Wiles 의 전략이다.

[Serre 추측](serre-conjecture.md)은 $\bar\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\bar{\mathbb F}\_\ell)$ 이 기약이고 홀수면 어떤 [모듈러 형식](modular-forms.md)의 mod $\ell$ 표현이며 그 무게와 레벨이 $\bar\rho$ 의 분기 자료로 정해진다는 진술이다. Khare 와 Wintenberger 가 2009 년에 증명했다.

## 기하, 자기동형 형식, Galois 표현

[Langlands 강령](langlands-program.md)은 Galois 표현과 자기동형 형식 사이의 대응을 다룬다. 대응의 세 방향은 다음과 같다.

- 기하에서 Galois 표현으로. 에탈 코호몰로지가 다양체마다 표현을 준다.
- 자기동형 형식에서 Galois 표현으로. 모듈러 곡선이나 [Shimura 다양체](shimura-varieties.md)의 코호몰로지에서 고유형식에 대응하는 부분을 잘라낸다. 위의 $\rho_f$ 가 그 예다.
- Galois 표현에서 자기동형 형식으로. 모듈러성 정리와 Serre 추측처럼, 주어진 표현이 자기동형 형식에서 온다는 것을 경우마다 정리로 증명한다. 모듈러성 올림 정리(modularity lifting theorem)가 그 도구다.

# 활용

- 부호와 암호. Hasse–Weil 한계가 대수기하 부호의 매개변수를 정하고, 타원곡선 암호에서 군의 위수를 추정하는 데 쓰인다. Schoof 알고리즘(Schoof's algorithm)은 작은 소수 $\ell$ 마다 $\mathrm{Frob}\_p$ 의 mod $\ell$ 표현을 계산해 $a_p$ 를 다항시간에 구한다.
- 지수합 추정. [Kloosterman 합](kloosterman-sums.md) 같은 지수합이 어떤 다양체의 점 개수로 해석되고 Riemann 가설이 그 크기의 상계를 준다. 해석적 정수론의 여러 추정이 이 상계를 쓴다.
- 모듈러성 증명. 변형 이론과 $R=T$ 논법의 모든 단계가 $\ell$ 진 표현으로 진행된다.
- 동기 이론. 서로 다른 $\ell$ 에서 만든 표현들의 Frobenius 대각합이 같은 정수라는 관찰에서 동기(motive)라는 대상이 나온다.

# 연관 문서

## 선수지식

- [Langlands 강령](langlands-program.md)
- [단체 호몰로지](homology.md)

## 더 알아보기

- [Dwork 의 유리성 정리](dwork-rationality.md)
- [p 진 Hodge 이론](p-adic-hodge-theory.md)
- [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)
- [대수적 K 이론](algebraic-k-theory.md)
- [Vogan L 꾸러미](vogan-packets.md)

#number_theory #algebraic_topology #group_theory
