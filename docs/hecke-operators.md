# Hecke 작용소

# 개요

[모듈러 형식](modular-forms.md) 문서에서 $q$ 전개로 적은 $(T_pf)\_n=a_{np}+p^{k-1}a_{n/p}$ 가 Hecke 작용소다. 원래 정의는 [격자](lattices.md)에 있다. 모듈러 형식을 격자의 함수로 보면 $T_p$ 는 지표 $p$ 의 부분격자 전체에 걸친 합이고, 계수의 곱셈성은 부분격자를 세는 일이 소수마다 독립이라는 데서 따라온다.

$T_n$ 들은 서로 교환하고 Petersson 내적에 대해 자기수반이므로 [스펙트럼 정리](spectral-theorem.md)가 동시 고유기저를 준다. 고유형식 하나가 Euler 곱을 갖는 $L$ 함수 하나를 낳는다.

$$
S_k(\Gamma_0(N))=\bigoplus_{f}\mathbb C f\ \ (\text{고유형식}),\qquad
L(s,f)=\prod_p\big(1-a_pp^{-s}+\chi(p)p^{k-1-2s}\big)^{-1}
$$

레벨 $N\gt 1$ 에서는 낮은 레벨의 형식이 여러 방식으로 올라와 만드는 **옛형식**들이 $T_n$ 의 같은 고유값을 공유해, 고유값만으로 형식을 구별할 수 없다. Atkin 과 Lehner 의 새형식 이론이 이 겹침을 걷어낸다[^1]. 남은 **새형식**에서 고유값이 형식을 유일하게 결정하고, 모듈러성 정리와 Langlands 대응의 일대일 대응이 성립한다.

# 직관

## 부분격자의 합

무게 $k$ 의 모듈러 형식은 격자의 함수 $F(L)$ 로 쓸 수 있다. 동차성 $F(\lambda L)=\lambda^{-k}F(L)$ 을 요구하고 $L=\mathbb Z+\mathbb Z\tau$ 에서 $f(\tau)=F(L)$ 로 두면 변환 규칙이 복원된다. 이 서술에서 $T_p$ 는 한 걸음 내려간 격자들의 합이다.

$$
(T_pF)(L)=p^{k-1}\sum_{[L:L']=p}F(L')
$$

지표 $p$ 의 부분격자는 $p+1$ 개다. $L/pL\cong(\mathbb Z/p)^2$ 의 지표 $p$ 부분군, 곧 $\mathbb F_p^2$ 의 직선 개수이기 때문이다. 좌표로 적으면 $\langle e_1,pe_2\rangle$ 과 $\langle e_1+je_2,pe_2\rangle$ 꼴이고, $q$ 전개로 옮기면 $a_{np}+p^{k-1}a_{n/p}$ 가 된다. 두 항은 서로 다른 두 종류의 부분격자에서 온 기여다.

$\gcd(m,n)=1$ 일 때 지표 $mn$ 의 부분격자는 [중국인의 나머지 정리](chinese-remainder-theorem.md)에 의해 지표 $m$ 인 것과 지표 $n$ 인 것으로 유일하게 쪼개지므로 $T_mT_n=T_{mn}$ 이다. $\gcd$ 이 1 이 아니면 겹침이 생겨 관계식이 하나 더 붙는다.

$$
T_pT_{p^r}=T_{p^{r+1}}+p^{k-1}T_{p^{r-1}}
$$

## Petersson 내적과 동시 대각화

$T_n$ 들이 유한차원 공간 $S_k$ 위의 가환 연산자족이라는 것만으로는 대각화가 보장되지 않는다. Petersson 내적

$$
\langle f,g\rangle=\int_{\Gamma\backslash\mathbb H}f(\tau)\overline{g(\tau)}\thinspace y^k\thinspace\frac{dx\thinspace dy}{y^2}
$$

이 필요한 자기수반성을 준다. [측도](measure.md) $dx\thinspace dy/y^2$ 가 $\mathrm{SL}\_2(\mathbb R)$ 불변이고 $f\bar gy^k$ 가 $\Gamma$ 불변이라 적분이 잘 정의되며, 첨점형식의 급감으로 수렴한다. 이 내적에 대해 $p\nmid N$ 인 $T_p$ 는 자기수반이고, 가환하는 자기수반 연산자족은 동시에 대각화된다.

## 옛형식의 겹침

$M\mid N$ 이고 $d\mid(N/M)$ 이면 레벨 $M$ 의 형식 $f(\tau)$ 로부터 레벨 $N$ 의 형식 $f(d\tau)$ 를 얻는다. 새로운 정보 없이 공간의 차원만 늘어난다.

$\gcd(n,N)=1$ 인 $T_n$ 은 $f(\tau)$ 와 $f(d\tau)$ 를 구별하지 못하고 둘 다 고유값 $a_n$ 을 준다. 고유공간이 1 차원이 아니게 되어 고유값이 형식을 결정하지 못하며, $p\mid N$ 인 자리의 작용소 $U_p$ 는 이 부분공간에서 자기수반이 아니라 상황을 구제하지 못한다.

Atkin–Lehner 는 옛형식들이 만드는 부분공간의 Petersson 직교여공간을 새형식 공간으로 정의한다. 그 안에서는 $\gcd(n,N)=1$ 인 $T_n$ 의 고유값만으로 형식이 유일하게 결정되고, $p\mid N$ 인 $U_p$ 까지 포함한 모든 작용소의 고유형식이 된다.

# 정의

## 이중 잉여류로서의 Hecke 작용소

$\Gamma=\Gamma_0(N)$ 과 $\alpha\in\mathrm{GL}\_2^+(\mathbb Q)$ 에 대해 이중 잉여류 $\Gamma\alpha\Gamma$ 를 우잉여류로 쪼갠다.

$$
\Gamma\alpha\Gamma=\coprod_{i}\Gamma\alpha_i,\qquad
[\Gamma\alpha\Gamma]f=\det(\alpha)^{k-1}\sum_if\big|\_k\alpha_i
$$

여기서 $(f|\_k\gamma)(\tau)=\det(\gamma)^{k/2}(c\tau+d)^{-k}f(\gamma\tau)$ 로 정규화한다. $\alpha=\begin{pmatrix}1&0\cr 0&p\end{pmatrix}$ 가 $T_p$ 를 준다. 잉여류 대표는 $p\nmid N$ 일 때 $p+1$ 개다.

$$
T_pf=p^{k-1}\sum_{j=0}^{p-1}f\Big|\_k\begin{pmatrix}1&j\cr 0&p\end{pmatrix}+f\Big|\_k\begin{pmatrix}p&0\cr 0&1\end{pmatrix}
$$

$p\mid N$ 이면 마지막 항이 빠져 대표가 $p$ 개다. 이 작용소를 $U_p$ 로 쓰고, $q$ 전개에서는 $(U_pf)\_n=a_{np}$ 다.

이 정의는 아델판으로 번역된다. 레벨 $\Gamma_0(N)$ 이 유한 자리의 콤팩트 열린 부분군 $K_0(N)$ 이 되고, $T_p$ 가 이중 잉여류 $K_0(N)\thinspace\mathrm{diag}(1,p)\thinspace K_0(N)$ 이 되어 $p+1$ 개의 행렬이 군론적으로 해명된다.

## 관계식과 Hecke 대수

$q$ 전개로 쓴 $T_n$ 의 정의는 다음과 같다.

$$
(T_nf)\_m=\sum_{d\mid\gcd(n,m)}\chi(d)\thinspace d^{k-1}a_{mn/d^2}
$$

$T_n$ 들이 생성하는 $\mathbb Z$ 대수가 **Hecke 대수** $\mathbb T$ 다. 관계식은 형식 Dirichlet 급수 한 줄로 쓰인다.

$$
\sum_{n\ge1}T_nn^{-s}=\prod_p\Big(1-T_pp^{-s}+\chi(p)p^{k-1-2s}\Big)^{-1}
$$

$\mathbb T$ 는 가환이고 $S_k(\Gamma_0(N))$ 위에 충실히 작용하므로 유한 계수의 $\mathbb Z$ 가군이다. 고유형식은 환 준동형 $\mathbb T\to\mathbb C$ 와 같고 그 상이 유한 차수의 대수적 정수환에 들어가므로, 고유값은 대수적 정수다.

## 옛형식과 새형식

$M\mid N$ , $M\lt N$ 인 각 $M$ 과 $d\mid(N/M)$ 에 대한 사상 $f(\tau)\mapsto f(d\tau)$ 의 상이 생성하는 부분공간이 **옛부분공간** $S_k^{\mathrm{old}}(N)$ 이다.

$$
S_k^{\mathrm{new}}(\Gamma_0(N))=\big(S_k^{\mathrm{old}}(\Gamma_0(N))\big)^{\perp}\quad(\text{Petersson 내적})
$$

새부분공간의 정규화된 고유형식, 곧 $a_1=1$ 인 고유형식이 **새형식**이다.

# 성질

## Atkin–Lehner 정리

> 1. $S_k^{\mathrm{old}}$ 과 $S_k^{\mathrm{new}}$ 은 모든 $T_n$ $(\gcd(n,N)=1)$ 에 대해 불변이다.
> 2. **다중도 1.** 새형식 $f,g$ 가 거의 모든 $p$ 에서 $a_p(f)=a_p(g)$ 를 만족하면 $f=g$ 다. 레벨까지 같아진다.
> 3. 새형식은 모든 $n$ 에 대한 $T_n$ 과 $U_p$ 의 고유형식이고, $p\Vert N$ 이면 $a_p=\pm p^{k/2-1}$ 이고 $p^2\mid N$ 이면 $a_p=0$ 이다.
> 4. $S_k(\Gamma_0(N))=\bigoplus_{M\mid N}\bigoplus_{d\mid N/M}\lbrace f(d\tau):f\in S_k^{\mathrm{new}}(\Gamma_0(M))\rbrace$ 로 완전히 분해된다.

다중도 1 은 유한 개의 소수에서 고유값을 몰라도 형식이 결정된다는 주장이며, [Langlands 강령](langlands-program.md)의 강한 다중도 1 정리가 그 일반화다. $L$ 함수 하나가 자기동형 표현 하나에 대응한다는 전제가 여기에 기댄다.

## 고유값의 크기

$$
|a_p|\le 2p^{(k-1)/2}\qquad(\text{Deligne, }p\nmid N)
$$

Ramanujan–Petersson 추측이라 불리던 이 부등식을 Deligne 이 Weil 추측에서 끌어냈다. $a_p$ 는 어떤 $\ell$ 진 Galois 표현의 Frobenius 자취이고, 그 표현의 고윳값이 절댓값 $p^{(k-1)/2}$ 를 갖는다는 것이 Weil 추측의 [Riemann 가설](riemann-hypothesis.md) 부분이다.

무게 $k=2$ 에서 $|a_p|\le2\sqrt p$ 는 [타원곡선](elliptic-curves.md)의 Hasse 경계와 같은 정리다.

## Eichler–Shimura 관계

Hecke 작용소는 [모듈러 곡선](modular-curves.md) $X_0(N)$ 위의 **대응**으로 실현된다. $X_0(Np)$ 에서 두 사영 $\alpha,\beta\colon X_0(Np)\to X_0(N)$ 을 잡고 $T_p=\beta_\ast\alpha^\ast$ 로 둔다. 이 대응이 Jacobian $J_0(N)$ 의 자기준동형을 유도하고, 표수 $p$ 로 환원하면 Frobenius 와 연결된다.

$$
T_p\equiv\mathrm{Frob}\_p+p\langle p\rangle\mathrm{Frob}\_p^{\vee}\pmod p
$$

고유형식 $f$ 마다 $\ell$ 진 Galois 표현 $\rho_{f,\ell}\colon\mathrm{Gal}(\bar{\mathbb Q}/\mathbb Q)\to\mathrm{GL}\_2(\bar{\mathbb Q}\_\ell)$ 이 있어

$$
\mathrm{tr}\thinspace\rho_{f,\ell}(\mathrm{Frob}\_p)=a_p,\qquad \det\rho_{f,\ell}(\mathrm{Frob}\_p)=\chi(p)p^{k-1}
$$

를 만족한다. 해석적으로 정의된 $a_p$ 가 산술적 의미를 얻는 지점이고, [Galois 표현](galois-representations.md)과 모듈러 형식을 잇는다. 모듈러성 정리는 이 대응을 거꾸로 읽은 진술이다.

# 활용

- **모듈러성 정리와 Fermat.** 타원곡선의 $a_p$ 수열이 어느 새형식에서 오는지를 묻는 것이 모듈러성이다. 다중도 1 정리로 그 새형식은 있다면 하나뿐이고 레벨은 도체로 결정된다. Ribet 의 레벨 낮추기 정리가 가상의 Frey 곡선을 레벨 2 의 새형식으로 보내는데 $S_2(\Gamma_0(2))=0$ 이므로 Fermat 마지막 정리가 따라온다.
- **Galois 표현의 변형.** Hecke 대수 $\mathbb T$ 가 변형환 $R$ 과 동형이라는 $R=\mathbb T$ 정리가 Wiles 의 증명 구조다. $\mathbb T$ 가 유한 $\mathbb Z$ 가군이라는 성질이 그 논증의 전제다.
- **계산 정수론.** 모듈러 기호로 $\mathbb T$ 의 행렬 표현을 얻어 새형식을 유한 계산으로 열거한다. **LMFDB**(L-functions and Modular Forms Database)의 새형식 표가 이 방법으로 만들어진다.
- **자기동형 표현.** 이중 잉여류 정의를 아델화하면 $T_p$ 는 국소 Hecke 대수의 원소이고 고유값은 [Satake 매개변수](satake-isomorphism.md)다. [아델](adeles.md) 위의 서술에서 $\mathrm{GL}\_n$ 으로 올라가는 길이 열린다.

[^1]: A. O. L. Atkin, J. Lehner, *Hecke Operators on* $\Gamma_0(m)$ (Mathematische Annalen 185, 1970), 134–160. 옛부분공간의 정의와 직교여공간의 다중도 1 은 Theorem 5, $p\mid N$ 에서의 $a_p$ 값은 Theorem 3 이다.

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

- [Maass 형식과 Laplace 스펙트럼](maass-forms.md)
- [Satake 동형과 비분기 Hecke 대수](satake-isomorphism.md)
- [Serre 추측과 Khare–Wintenberger 정리](serre-conjecture.md)
- [모듈러 기호](modular-symbols.md)
- [Shimura 대응과 반정수 무게 형식](shimura-correspondence.md)

#number_theory #complex_analysis #linear_algebra
