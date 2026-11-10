# Hecke 작용소

# 개요

**Hecke 작용소(Hecke operator)** 는 [모듈러 형식](modular-forms.md)의 $q$ 전개 계수를 섞어 다시 모듈러 형식을 만드는 선형작용소다. 모듈러 형식 $\Delta=\sum_{n\ge 1}\tau(n)q^n$ 의 계수는 $\tau(2)=-24$, $\tau(3)=252$, $\tau(6)=-6048$ 처럼 서로소인 번호끼리 곱해지는데, 계수를 하나씩 계산해서는 이 규칙이 왜 성립하는지 보이지 않는다. Hecke 작용소는 $\Delta$ 를 고유벡터로 갖고, 이 곱셈 규칙을 고윳값 사이의 관계로 설명한다.

# 직관

$\Delta=q\prod_{n\ge 1}(1-q^n)^{24}$ 를 전개하면 계수가 $\tau(1)=1$, $\tau(2)=-24$, $\tau(3)=252$, $\tau(4)=-1472$, $\tau(6)=-6048$ 이다. $\tau(6)=\tau(2)\tau(3)$ 이지만 $\tau(4)$ 는 $\tau(2)^2=576$ 과 다르다. 곱을 전개하는 계산에서는 두 사실이 어디서 오는지 드러나지 않는다.

무게 $12$ 의 첨점형식은 $\Delta$ 의 상수배뿐이다. 그래서 무게 $12$ 의 첨점형식을 무게 $12$ 의 첨점형식으로 보내는 [선형사상](linear-maps.md)은 $\Delta$ 를 $\Delta$ 의 상수배로 보낸다. 계수열 $(a_n)$ 을 다음 계수열 $(b_n)$ 으로 바꾸는 사상 $T_2$ 가 그런 사상이다. $n$ 이 홀수이면 $a_{n/2}=0$ 으로 둔다.

$$
b_n=a_{2n}+2^{11}a_{n/2}
$$

$T_2\Delta$ 의 $q$ 계수는 $b_1=\tau(2)=-24$ 이므로 $T_2\Delta=-24\Delta$ 다. 양변의 $q^3$ 계수를 비교하면 $\tau(6)=-24\cdot\tau(3)$ 이 나온다. $q^2$ 계수를 비교하면 $\tau(4)+2^{11}\tau(1)=-24\cdot\tau(2)$ 이고, $\tau(4)=576-2048=-1472$ 가 나온다. 소수 $p$ 마다 같은 꼴의 사상 $T_p$ 가 있고, 계수의 곱셈 규칙은 전부 $T_p\Delta=\tau(p)\Delta$ 에서 유도된다.

# 정의

## 계수로 쓴 정의

$f=\sum_{m\ge 0}a_mq^m$ 이 레벨 $\Gamma_0(N)$, 무게 $k$, 지표 $\chi$ 의 모듈러 형식일 때, $n\ge 1$ 에 대한 **Hecke 작용소** $T_n$ 은 계수를 다음처럼 바꾸는 선형사상이다. $\gcd(d,N)\gt 1$ 이면 $\chi(d)=0$ 이다.

$$
(T_nf)\_m=\sum_{d\mid\gcd(n,m)}\chi(d)\thinspace d^{k-1}a_{mn/d^2}
$$

소수 $p$ 에서는 $(T_pf)\_m=a_{mp}+\chi(p)p^{k-1}a_{m/p}$ 다. 직관 절의 $T_2$ 는 $N=1$, $k=12$, $p=2$ 인 경우다. $p\mid N$ 이면 둘째 항이 사라져 $(T_pf)\_m=a_{mp}$ 이고, 이 작용소를 $U_p$ 로 쓴다.

## 이중 잉여류

$\Gamma=\Gamma_0(N)$ 과 $\alpha\in\mathrm{GL}\_2^+(\mathbb Q)$ 에 대해 **이중 잉여류(double coset)** $\Gamma\alpha\Gamma$ 는 우잉여류 유한 개의 서로소 합집합이다. 이중 잉여류 작용소는 그 대표 $\alpha_i$ 들로 정의된다.

$$
\Gamma\alpha\Gamma=\coprod_{i}\Gamma\alpha_i,\qquad
[\Gamma\alpha\Gamma]f=\sum_if\big|\_k\alpha_i
$$

여기서 $\gamma=\begin{pmatrix}a&b\cr c&d\end{pmatrix}$ 에 대해 다음과 같이 둔다.

$$
(f\vert\_k\gamma)(\tau)=\det(\gamma)^{k-1}(c\tau+d)^{-k}f(\gamma\tau)
$$

$\alpha=\mathrm{diag}(1,p)$ 이면 $[\Gamma\alpha\Gamma]$ 가 $T_p$ 이고, 대표는 $p\nmid N$ 일 때 $p+1$ 개, $p\mid N$ 일 때 $p$ 개다.

$N=1$, $p=2$ 이면 대표로 세 [행렬](matrices.md) $\begin{pmatrix}1&0\cr 0&2\end{pmatrix}$, $\begin{pmatrix}1&1\cr 0&2\end{pmatrix}$, $\begin{pmatrix}2&0\cr 0&1\end{pmatrix}$ 을 잡을 수 있다. 앞의 둘은 $f$ 를 $\frac12f(\tau/2)$, $\frac12f((\tau+1)/2)$ 로 보내고, 셋째는 $2^{k-1}f(2\tau)$ 로 보낸다. $f(\tau/2)+f((\tau+1)/2)=2\sum_m a_{2m}q^m$ 이므로 셋을 더하면 $\sum_m(a_{2m}+2^{k-1}a_{m/2})q^m$ 이고, 계수로 쓴 정의와 같다.

## Hecke 대수

$T_n$ 들이 첨점형식 공간 $S_k(\Gamma_0(N),\chi)$ 위에서 생성하는 $\mathbb Z$ 대수가 **Hecke 대수(Hecke algebra)** $\mathbb T$ 다. $S_{12}(\mathrm{SL}\_2(\mathbb Z))=\mathbb C\Delta$ 에서 $T_n$ 은 $\tau(n)$ 배이므로 $\mathbb T=\mathbb Z$ 다.

## 고유형식

**고유형식(eigenform)** 은 모든 $T_n$ 의 고유벡터인 0 아닌 첨점형식이다. $a_1=1$ 로 맞춘 것을 정규화된 고유형식이라 하고, 이때 $T_nf=a_nf$ 다. $\Delta$ 는 $T_n\Delta=\tau(n)\Delta$ 인 정규화된 고유형식이다.

## Petersson 내적

무게 $k$ 의 첨점형식 $f,g$ 의 **Petersson 내적(Petersson inner product)** 은 다음 적분이다. $\tau=x+iy$ 이고, 적분 영역은 $\Gamma$ 의 기본 영역이다.

$$
\langle f,g\rangle=\int_{\Gamma\backslash\mathbb H}f(\tau)\overline{g(\tau)}\thinspace y^k\thinspace\frac{dx\thinspace dy}{y^2}
$$

[측도](measure.md) $dx\thinspace dy/y^2$ 가 $\mathrm{SL}\_2(\mathbb R)$ 불변이고 $f\bar gy^k$ 가 $\Gamma$ 불변이어서 적분이 기본 영역의 선택에 의존하지 않는다. 첨점형식은 첨점에서 지수적으로 줄어들므로 적분이 수렴한다.

## 옛형식과 새형식

$M\mid N$, $M\lt N$ 인 $M$ 과 $d\mid N/M$ 에 대해 $f\in S_k(\Gamma_0(M))$ 를 $f(d\tau)$ 로 보내면 $S_k(\Gamma_0(N))$ 의 원소가 된다. 이런 상들이 생성하는 부분공간이 **옛부분공간(oldspace)** $S_k^{\mathrm{old}}(\Gamma_0(N))$ 이고, Petersson 내적에 대한 그 직교여공간이 **새부분공간(newspace)** $S_k^{\mathrm{new}}(\Gamma_0(N))$ 이다. 새부분공간에 속하는 정규화된 고유형식이 **새형식(newform)** 이다.

$S_{12}(\Gamma_0(2))$ 는 2 차원이고 $\Delta(\tau)$, $\Delta(2\tau)$ 가 기저다. 이 공간은 전부 옛부분공간이어서 새형식이 없고, 두 기저 원소는 $T_3$ 의 같은 고윳값 $252$ 를 갖는다. $S_2(\Gamma_0(11))$ 은 1 차원이고 $S_2(\mathrm{SL}\_2(\mathbb Z))=0$ 이어서 옛부분공간이 $0$ 이다. 다음 생성원 $f$ 가 새형식이다.

$$
f=q\prod_{n\ge 1}(1-q^n)^2(1-q^{11n})^2=q-2q^2-q^3+2q^4+\cdots
$$

# 성질

## 격자 위의 서술

무게 $k$ 의 모듈러 형식은 [격자](lattices.md)의 함수 $F(L)$ 로 쓸 수 있다. 동차성 $F(\lambda L)=\lambda^{-k}F(L)$ 을 요구하고 $L=\mathbb Z+\mathbb Z\tau$ 에서 $f(\tau)=F(L)$ 로 두면 모듈러 형식의 변환 규칙이 나온다. 이 서술에서 $T_p$ 는 지표 $p$ 의 부분격자들에 대한 합이다.

$$
(T_pF)(L)=p^{k-1}\sum_{[L:L']=p}F(L')
$$

지표 $p$ 의 부분격자는 $L/pL\cong(\mathbb Z/p)^2$ 의 지표 $p$ 부분군, 곧 $\mathbb F_p^2$ 의 직선에 대응하므로 $p+1$ 개다. 좌표로 적으면 $\langle e_1+je_2,pe_2\rangle$ $(0\le j\lt p)$ 와 $\langle pe_1,e_2\rangle$ 이다. 앞의 $p$ 개가 $a_{mp}$ 항을, 마지막 하나가 $p^{k-1}a_{m/p}$ 항을 준다.

## 곱셈 관계식

$\gcd(m,n)=1$ 이면 $T_mT_n=T_{mn}$ 이다. 지표 $mn$ 의 부분격자가 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 지표 $m$ 인 단계와 지표 $n$ 인 단계로 유일하게 쪼개지기 때문이다. 소수의 거듭제곱에서는 다음 점화식이 성립한다.

$$
T_pT_{p^r}=T_{p^{r+1}}+\chi(p)p^{k-1}T_{p^{r-1}}
$$

$r=1$, $p=2$, $k=12$ 이면 $T_4=T_2^2-2^{11}$ 이고, $\Delta$ 에 적용하면 직관 절의 $\tau(4)=576-2048$ 이다. 두 관계식을 형식 [Dirichlet 급수](dirichlet-series.md)로 모으면 다음과 같다.

$$
\sum_{n\ge1}T_nn^{-s}=\prod_p\Big(1-T_pp^{-s}+\chi(p)p^{k-1-2s}\Big)^{-1}
$$

정규화된 고유형식 $f$ 에서 $T_n$ 을 $a_n$ 으로 바꾸면 $L(s,f)=\sum a_nn^{-s}$ 가 같은 꼴의 Euler 곱(Euler product)을 갖는다.

## Hecke 대수의 구조

$\mathbb T$ 는 가환이다. $\chi$ 가 자명하면 $S_k(\Gamma_0(N))$ 은 정수 계수 첨점형식들로 된 기저를 갖고 $T_n$ 은 정수 계수를 보존하므로, $\mathbb T$ 는 유한 생성 $\mathbb Z$ 가군이다. 고유형식은 환 준동형 $\mathbb T\to\mathbb C$ 를 정하고 그 상이 유한 생성 $\mathbb Z$ 가군이므로, 고윳값 $a_n$ 은 대수적 정수다.

## 동시 대각화

$p\nmid N$ 인 $T_p$ 는 Petersson 내적에 대해 자기수반이다. $T_n$ 들은 서로 교환하므로 [스펙트럼 정리](spectral-theorem.md)로 $\gcd(n,N)=1$ 인 $T_n$ 전부의 동시 고유기저가 존재한다. $N=1$ 이면 이 기저가 정규화된 고유형식들로 이루어진다.

옛부분공간에서는 고유공간이 1 차원이 아니다. $\gcd(n,N)=1$ 인 $T_n$ 은 $f(\tau)$ 와 $f(d\tau)$ 에 같은 고윳값을 주고, $p\mid N$ 인 $U_p$ 는 이 부분공간에서 자기수반이 아니다. $S_{12}(\Gamma_0(2))$ 의 $\Delta(\tau)$, $\Delta(2\tau)$ 가 그 예다.

## Atkin–Lehner 정리

Atkin 과 Lehner 가 증명한 다음 정리를 **Atkin–Lehner 정리(Atkin–Lehner theorem)** 라 한다[^1].

> 1. $S_k^{\mathrm{old}}$ 과 $S_k^{\mathrm{new}}$ 은 $\gcd(n,N)=1$ 인 모든 $T_n$ 에 대해 불변이다.
> 2. 새형식 $f,g$ 가 유한 개를 뺀 모든 소수 $p$ 에서 $a_p(f)=a_p(g)$ 를 만족하면 $f=g$ 이고 두 레벨도 같다.
> 3. 새형식은 모든 $T_n$ 과 $U_p$ 의 고유형식이다. $p\Vert N$ 이면 $a_p=\pm p^{k/2-1}$ 이고, $p^2\mid N$ 이면 $a_p=0$ 이다.
> 4. 첨점형식 공간은 새형식에서 다음과 같이 분해된다.
>
>    $$
>    S_k(\Gamma_0(N))=\bigoplus_{M\mid N}\bigoplus_{d\mid N/M}\lbrace f(d\tau):f\in S_k^{\mathrm{new}}(\Gamma_0(M))\rbrace
>    $$

둘째 항목을 다중도 1 정리(multiplicity one theorem)라 한다. [Langlands 강령](langlands-program.md)의 강한 다중도 1 정리가 이것을 $\mathrm{GL}\_n$ 의 자기동형 표현으로 확장한다. $S_2(\Gamma_0(11))$ 의 새형식에서는 $11\Vert 11$ 이므로 $a_{11}=\pm1$ 이다.

## 고윳값의 크기

$$
|a_p|\le 2p^{(k-1)/2}\qquad(p\nmid N)
$$

이 부등식은 Ramanujan–Petersson 추측(Ramanujan–Petersson conjecture)이라 불렸고, Deligne 이 [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)에서 유도했다. $a_p$ 는 어떤 $\ell$ 진 Galois 표현의 Frobenius 대각합이고, 그 표현의 고윳값이 절댓값 $p^{(k-1)/2}$ 를 갖는다는 것이 Weil 추측의 [Riemann 가설](riemann-hypothesis.md) 부분이다. $\Delta$ 에서는 $\vert\tau(2)\vert=24\le 2\cdot 2^{11/2}\approx 90.5$ 다.

무게 $k=2$ 에서 $|a_p|\le2\sqrt p$ 는 [타원곡선](elliptic-curves.md)의 Hasse 경계(Hasse bound)와 같은 정리다.

## Eichler–Shimura 관계

Hecke 작용소는 [모듈러 곡선](modular-curves.md) $X_0(N)$ 위의 대응(correspondence)으로 실현된다. $X_0(Np)$ 에서 두 사영 $\alpha,\beta\colon X_0(Np)\to X_0(N)$ 을 잡고 $T_p=\beta_\ast\alpha^\ast$ 로 둔다. 이 대응이 [Jacobi 다양체](jacobian-variety.md) $J_0(N)$ 의 자기준동형을 유도하고, 표수 $p$ 로 환원하면 다음 등식이 성립한다. 이 등식이 [Eichler–Shimura 관계](eichler-shimura.md)다.

$$
T_p\equiv\mathrm{Frob}\_p+p\langle p\rangle\mathrm{Frob}\_p^{\vee}\pmod p
$$

이로부터 고유형식 $f$ 마다 $\ell$ 진 [Galois 표현](galois-representations.md) $\rho_{f,\ell}\colon\mathrm{Gal}(\bar{\mathbb Q}/\mathbb Q)\to\mathrm{GL}\_2(\bar{\mathbb Q}\_\ell)$ 이 존재해 다음을 만족한다.

$$
\mathrm{tr}\thinspace\rho_{f,\ell}(\mathrm{Frob}\_p)=a_p,\qquad \det\rho_{f,\ell}(\mathrm{Frob}\_p)=\chi(p)p^{k-1}\qquad(p\nmid N\ell)
$$

$q$ 전개 계수로 정의된 $a_p$ 가 Galois 군의 Frobenius 원소의 대각합으로 나타난다. 모듈러성 정리(modularity theorem)는 이 대응의 역방향, 곧 주어진 Galois 표현이 어느 고유형식에서 오는지에 대한 진술이다.

# 활용

- 모듈러성 정리와 Fermat. 타원곡선의 $a_p$ 수열이 어느 새형식에서 오는지를 묻는 것이 모듈러성이다. 다중도 1 정리로 그 새형식은 있다면 하나뿐이고 레벨은 도체로 정해진다. Ribet 의 레벨 낮추기 정리(level-lowering theorem)가 가상의 Frey 곡선(Frey curve)을 레벨 2 의 새형식으로 보내는데 $S_2(\Gamma_0(2))=0$ 이므로 [Fermat 마지막 정리](fermats-last-theorem.md)가 증명된다.
- Galois 표현의 변형. Hecke 대수 $\mathbb T$ 가 [Galois 표현의 변형환](deformation-rings.md) $R$ 과 동형이라는 $R=\mathbb T$ 정리가 Wiles 의 증명에 쓰인다. $\mathbb T$ 가 유한 생성 $\mathbb Z$ 가군이라는 성질을 그 논증에서 사용한다.
- 계산 정수론. [모듈러 기호](modular-symbols.md)로 $\mathbb T$ 의 행렬 표현을 얻어 새형식을 유한 계산으로 열거한다. LMFDB(L-functions and Modular Forms Database)의 새형식 표가 이 방법으로 만들어진다.
- 자기동형 표현(automorphic representation). 이중 잉여류 정의를 [아델](adeles.md) 위로 옮기면 레벨 $\Gamma_0(N)$ 은 유한 자리의 콤팩트 열린 부분군 $K_0(N)$ 이 되고, $T_p$ 는 국소 Hecke 대수의 원소 $K_0(N)\thinspace\mathrm{diag}(1,p)\thinspace K_0(N)$ 이 된다. 그 고윳값은 [Satake 동형](satake-isomorphism.md)의 매개변수로 기술되고, 같은 정의가 $\mathrm{GL}\_n$ 에 적용된다.

[^1]: A. O. L. Atkin, J. Lehner, *Hecke Operators on* $\Gamma_0(m)$ (Mathematische Annalen 185, 1970), 134–160. 옛부분공간의 정의와 직교여공간의 다중도 1 은 Theorem 5, $p\mid N$ 에서의 $a_p$ 값은 Theorem 3 이다.

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

### 작용소와 그 대수

- [Satake 동형](satake-isomorphism.md)
- [모듈러 기호](modular-symbols.md)
- [Hida 이론](hida-theory.md)

### 다른 형식으로의 확장

- [Maass 형식](maass-forms.md)
- [Shimura 대응](shimura-correspondence.md)

### Galois 표현

- [Eichler–Shimura 관계](eichler-shimura.md)
- [Serre 추측과 Khare–Wintenberger 정리](serre-conjecture.md)

#number_theory #complex_analysis #linear_algebra
