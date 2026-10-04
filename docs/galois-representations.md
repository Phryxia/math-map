# Galois 표현

# 개요

[Langlands 강령](langlands-program.md)의 대상인 Galois 표현 $\rho\colon G_K\to\mathrm{GL}\_n(E)$ 는 기하에서 온다.

계수를 $\mathbb C$ 로 잡으면 상이 유한군이라 유한 Galois 확대의 표현만 나온다. 공급원은 $\ell$ 진 계수다. 대수다양체 $X$ 에 위상적 [코호몰로지](cohomology.md) 대신 $\mathbb Q_\ell$ 계수의 [에탈 코호몰로지](etale-cohomology.md)를 붙이면

$$
H^i_{\mathrm{et}}(X_{\bar K},\mathbb Q_\ell)
$$

가 유한차원 $\mathbb Q_\ell$ 벡터공간이면서 $G_K$ 의 연속 작용을 받는다.

대수다양체의 Zariski 위상은 코호몰로지를 만들기에 너무 성기다. Grothendieck 은 열린 부분집합을 에탈 사상으로 바꿔 위상 없이 코호몰로지를 세웠다. 그 결과가 Weil 추측의 증명이고, [유한체](finite-fields.md) 위에서 점을 세는 일이 [Lefschetz 고정점 공식](lefschetz-fixed-point.md)으로 환원된다.

$$
\char35{}X(\mathbb F_{q^n})=\sum_i(-1)^i\mathrm{tr}\big(\mathrm{Frob}^n\mid H^i_{\mathrm{et}}\big)
$$

산술의 양이 Frobenius 의 대각합이 되고, 표현의 구조가 그 대각합을 통제한다.

# 직관

복소다양체에서는 고전적 위상으로 특이 코호몰로지를 만들고 Lefschetz 공식으로 사상의 고정점을 센다. 유한체 위의 다양체에는 그런 위상이 없다. Zariski 위상에서는 기약 다양체 위의 상수[층](sheaves.md)이 뭉툭해 $i\gt 0$ 마다 $H^i=0$ 이고 셀 것이 남지 않는다. 막힌 것은 덮개의 개념이어서, 열린 포함사상 대신 국소적으로 동형에 가까운 에탈 사상을 덮개로 놓고 그 [범주](category.md) 위에서 층과 코호몰로지를 정의한다.

표수 $p$ 인 체 위에서 $\mathbb Z/p$ 계수는 Artin–Schreier 열 때문에 기대한 차원을 주지 않으므로 $\ell\ne p$ 로 잡고, $\mathbb Z/\ell^n$ 계수의 극한에서 $\mathbb Q_\ell$ 계수를 얻는다. 코호몰로지는 $\bar K$ 로 올린 뒤에 취한다. $G_K=\mathrm{Gal}(\bar K/K)$ 가 $X_{\bar K}$ 에 작용하므로 코호몰로지에도 작용하고, 그 작용이 Galois 표현이다.

# 정의

## $\ell$ 진 표현

$G_K$ 는 profinite 군이다. 연속 준동형

$$
\rho\colon G_K\to\mathrm{GL}\_n(\mathbb Q_\ell)
$$

을 $\ell$ 진 표현이라 한다. $\mathbb Q_\ell$ 의 위상이 profinite 위상과 어울려 상이 무한할 수 있고, 이 점이 $\mathbb C$ 계수와 다르다.

다음 용어가 표준이다.

- **불분기.** $\mathfrak p$ 에서의 관성군이 자명하게 작용하면 $\rho$ 가 $\mathfrak p$ 에서 불분기다. 그때 $\rho(\mathrm{Frob}\_{\mathfrak p})$ 가 켤레를 빼고 정해진다.
- **도체.** 분기가 얼마나 나쁜지를 재는 [아이디얼](ideals-quotient-rings.md). 유한 개의 소수에서만 분기한다.
- **기하적 Frobenius.** 산술 Frobenius 의 역원. 부호 관례는 문헌마다 다르다.

## Tate 가군

$E$ 가 $K$ 위의 [타원곡선](elliptic-curves.md)이고 $\ell\ne\mathrm{char}\thinspace K$ 일 때

$$
T_\ell E=\varprojlim_nE\lbrack\ell^n\rbrack(\bar K)\cong\mathbb Z_\ell^2,
\qquad V_\ell E=T_\ell E\otimes\mathbb Q_\ell
$$

이다. $G_K$ 가 꼬임점에 작용하므로 2 차원 표현 $\rho_{E,\ell}\colon G_K\to\mathrm{GL}\_2(\mathbb Q_\ell)$ 이 나오고, 이것이 $H^1_{\mathrm{et}}(E_{\bar K},\mathbb Q_\ell)$ 의 쌍대다. 좋은 환원을 갖는 $\mathfrak p$ 에서

$$
\mathrm{tr}\thinspace\rho_{E,\ell}(\mathrm{Frob}\_{\mathfrak p})=a_{\mathfrak p}=N\mathfrak p+1-\char35{}E(\mathbb F_{\mathfrak p})
$$

가 성립한다.

## 에탈 코호몰로지와 Weil 추측

$\mathbb F_{q^n}$ 유리점은 $q^n$ 제곱 Frobenius 사상의 고정점이다. 위상수학에서 고정점을 세는 도구가 Lefschetz 공식이고, 에탈 코호몰로지에서 같은 공식을 세우면 점 개수가 Frobenius 작용의 대각합의 교대합이 된다.

$X$ 가 $\mathbb F_q$ 위의 매끄러운 사영다양체일 때 zeta 함수를 정의한다.

$$
Z(X,t)=\exp\Big(\sum_{n\ge1}\char35{}X(\mathbb F_{q^n})\frac{t^n}n\Big)
$$

> **Weil 추측(정리).**
> 1. $Z(X,t)$ 는 유리함수이고 $\prod_iP_i(t)^{(-1)^{i+1}}$ 로 쓰인다. 여기서 $P_i(t)=\det(1-\mathrm{Frob}\thinspace t\mid H^i_{\mathrm{et}})$ 다.
> 2. $t\mapsto1/(q^dt)$ 에 대한 함수방정식이 성립한다(Poincaré 쌍대성).
> 3. $P_i$ 의 역근 $\alpha$ 는 모두 $|\alpha|=q^{i/2}$ 를 만족한다([Riemann 가설](riemann-hypothesis.md)).
> 4. $X$ 가 표수 0 의 다양체의 환원이면 $\deg P_i$ 가 그 다양체의 Betti 수와 같다.

1, 2, 4 는 Grothendieck 이 에탈 코호몰로지를 세우며 얻었고, 3 은 Deligne 이 1974 년에 증명했다.

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

가 된다. Riemann 가설 $|\alpha_j|=\sqrt q$ 를 넣으면 Hasse–Weil 한계 $|\char35{}X(\mathbb F_q)-q-1|\le2g\sqrt q$ 가 나온다. $g=1$ 인 타원곡선에서는 $|a_q|\le2\sqrt q$ 라는 Hasse 정리다.

## 모듈러성과의 연결

Deligne 은 무게 $k\ge2$ 의 Hecke 고유형식마다 2 차원 $\ell$ 진 표현 $\rho_f$ 를 [모듈러 곡선](modular-curves.md)의 에탈 코호몰로지에서 잘라냈다. $\mathrm{tr}\thinspace\rho_f(\mathrm{Frob}\_p)=a_p$ 이고, 계수의 크기 상계인 Ramanujan 추측이 Weil 추측의 Riemann 가설에서 따라온다.

주어진 Galois 표현이 어떤 고유형식에서 오는지를 보이는 것이 모듈러성이고, 그 도구가 변형 이론이다. mod $\ell$ 표현 $\bar\rho$ 를 고정하고 그것으로 환원되는 $\ell$ 진 표현들의 보편 변형환 $R$ 을 만든 뒤 모듈러 표현만 모은 Hecke 대수 $T$ 와 비교한다. $R=T$ 를 증명하면 모든 변형이 모듈러이고, 이것이 Wiles 의 전략이다.

Serre 추측은 $\bar\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\bar{\mathbb F}\_\ell)$ 이 기약이고 홀수면 어떤 [모듈러 형식](modular-forms.md)의 mod $\ell$ 표현이며 그 무게와 레벨이 $\bar\rho$ 의 분기 자료로 정해진다는 진술이다. Khare 와 Wintenberger 가 2009 년에 증명했다.

## 세 방향의 난이도

에탈 코호몰로지는 기하에서 표현을 만들지만 그 표현이 자기동형 쪽과 대응하는지는 말하지 않는다.

- **기하 → Galois 표현**: 구성적이고 잘 확립되어 있다.
- **자기동형 → Galois 표현**: 모듈러 곡선이나 시무라 다양체의 코호몰로지에서 잘라내며, 많은 경우 알려져 있다.
- **Galois 표현 → 자기동형**: 가장 어렵다.

마지막 방향이 Langlands 상호성의 본체이고, 모듈러성 올림 정리들이 그 영역을 넓혀 왔다.

# 활용

- **부호와 암호.** Hasse–Weil 한계가 대수기하 부호의 성능을 결정하고, 타원곡선 암호에서 군의 위수를 추정하는 근거가 된다. Schoof 알고리즘은 $\ell$ 진 표현을 작은 $\ell$ 마다 계산해 $a_p$ 를 다항시간에 구한다.
- **지수합 추정.** Kloosterman 합 같은 지수합이 어떤 다양체의 점 개수로 해석되고 Riemann 가설이 그 크기의 상계를 준다. 해석적 정수론의 여러 추정이 이 상계를 쓴다.
- **모듈러성 증명.** 변형 이론과 $R=T$ 논법의 모든 단계가 $\ell$ 진 표현의 언어로 진행된다.
- **동기 이론.** 서로 다른 $\ell$ 에서 만든 표현들이 같은 정보를 담는다는 관찰에서 동기라는 대상이 나온다. 이 관점의 정리화는 진행 중이다.

# 연관 문서

## 선수지식

- [Langlands 강령](langlands-program.md)
- [단체 호몰로지](homology.md)

## 더 알아보기

- [Dwork 의 유리성 정리와 지수합](dwork-rationality.md)
- [p 진 Hodge 이론](p-adic-hodge-theory.md)
- [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)
- [대수적 K 이론](algebraic-k-theory.md)
- [Vogan L 꾸러미](vogan-packets.md)

#number_theory #algebraic_topology #group_theory
