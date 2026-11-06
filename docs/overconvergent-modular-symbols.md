# 과수렴 모듈러 기호

# 개요

**과수렴 모듈러 기호(overconvergent modular symbol)** 는 계수 가군을 과수렴 $p$ 진 분포의 공간으로 둔 [모듈러 기호](modular-symbols.md)다. 타원곡선의 $p$ 진 $L$ 함수는 무한히 많은 고전 $L$ 값을 하나의 $p$ 진 함수로 보간한 것이어서, 그 값을 몇 자리까지 구하려 해도 무한히 많은 $L$ 값이 필요해 보인다. 과수렴 모듈러 기호는 고전 모듈러 기호 하나를 분포 계수의 기호로 유일하게 올리고, 그 분포에서 $p$ 진 $L$ 함수를 유한 번의 선형대수로 원하는 정밀도까지 계산한다.

# 직관

타원곡선 $E$ 의 [p 진 L 함수](p-adic-l-function.md) $L_p(E,s)$ 는 $\mathbb Z_p^\times$ 위의 측도 $\mu$ 로 함수 $\langle x\rangle^{s-1}$ 을 적분한 값이다. 측도는 잉여류 $a+p^n\mathbb Z_p$ 마다 수 하나를 주고, 그 수는 [모듈러 기호](modular-symbols.md)의 값 $\lbrack a/p^n\rbrack^{+}$ 몇 개를 조합해 나온다. 적분은 잉여류마다 대표점 $a$ 에서 함숫값 $\langle a\rangle^{s-1}$ 을 잡아 측도의 값과 곱해 더하는 Riemann 합으로 근사한다.

법 $p^n$ 의 잉여류는 $(p-1)p^{n-1}$ 개이고, 대표점을 바꾸면 합이 $p^{-n}$ 정도 달라진다. $p$ 진 자릿수 $n$ 개를 얻으려면 모듈러 기호의 값을 $(p-1)p^{n-1}$ 개 구해야 한다. $p=5$ 에서 $10$ 자리면 $4\cdot 5^9$, 곧 약 $780$ 만 개다.

막힌 이유는 측도가 잉여류마다 상수함수 $1$ 의 적분값 하나만 주는 데 있다. 잉여류 위에서 $x, x^2, x^3,\dots$ 의 적분값까지 알면 $\langle x\rangle^{s-1}$ 을 잉여류 안에서 멱급수로 펼쳐 항마다 적분하므로, 잘게 자르지 않고도 적분값이 나온다. 그래서 모듈러 기호의 값을 수 하나 대신 모든 거듭제곱의 적분값을 담은 대상으로 바꾼다. 그 대상이 분포이고, 값이 분포인 모듈러 기호가 과수렴 모듈러 기호다.

# 정의

## 분포 공간

$\mathcal A_k$ 는 $\mathbb Z_p$ 위의 국소해석함수(locally analytic function)의 공간이다. **$p$ 진 분포(p-adic distribution)** 는 $\mathcal A_k$ 위의 연속 선형범함수이고, 그 전체 $\mathcal D_k=\mathcal A_k^\vee$ 를 $\mathcal A_k$ 의 연속 쌍대(continuous dual)라 한다. 분포 $\mu$ 는 모멘트(moment) 열 $\bigl(\mu(1),\mu(z),\mu(z^2),\dots\bigr)$ 로 결정되고 계산에서는 이 열을 앞의 $M$ 개로 자른다. $a\in\mathbb Z_p$ 에서 값을 읽는 $\delta_a(f)=f(a)$ 는 분포이고, 모멘트 열은 $(1,a,a^2,\dots)$ 다.

반군(semigroup)

$$
\Sigma_0(p)=\left\lbrace\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in M_2(\mathbb Z_p):\ p\mid c,\ p\nmid a,\ ad-bc\ne0\right\rbrace
$$

가 무게 $k$ 작용

$$
(\gamma\cdot f)(z)=(a+cz)^{k-2}\thinspace f\negthinspace\left(\frac{b+dz}{a+cz}\right)
$$

로 $\mathcal A_k$ 에 작용하고, $(\mu\vert\gamma)(f)=\mu(\gamma\cdot f)$ 로 $\mathcal D_k$ 에 작용한다. $\gamma=\begin{pmatrix}1&0\cr 0&p\end{pmatrix}$ 는 $\Sigma_0(p)$ 에 속하고 $(\gamma\cdot f)(z)=f(pz)$ 이므로 $\delta_a\vert\gamma=\delta_{pa}$ 다. 일반 분포에서는 $j$ 번째 모멘트가 $p^j$ 배가 된다.

## 모듈러 기호

$\Delta_0=\mathrm{Div}^0(\mathbb P^1(\mathbb Q))$ 는 $\mathbb P^1(\mathbb Q)$ 의 점들의 정수 결합 가운데 계수의 합이 $0$ 인 것의 군이다. $\Gamma=\Gamma_0(Np)$ 가 일차분수변환으로 $\Delta_0$ 에 작용한다. $\Sigma_0(p)$ 의 작용을 받는 가군 $D$ 에 대해

$$
\mathrm{Symb}\_\Gamma(D)=\mathrm{Hom}\_\Gamma(\Delta_0,\ D)
$$

라 한다. $D=V_{k-2}$ 면 고전 모듈러 기호, $D=\mathcal D_k$ 면 **과수렴 모듈러 기호(overconvergent modular symbol)** 다. $k=2$ 이면 $V_0$ 는 상수의 공간이어서 고전 기호는 인자마다 수 하나를 주고, 과수렴 기호는 인자마다 분포 하나를 준다.

$\gamma_a=\begin{pmatrix}1&a\cr 0&p\end{pmatrix}$ 라 하면 [Hecke 작용소](hecke-operators.md) $U_p$ 는

$$
(\Phi\vert U_p)(\Delta)=\sum_{a=0}^{p-1}\Phi(\gamma_a\Delta)\vert\gamma_a
$$

다. $U_p$ 의 고윳값 $\lambda$ 에 대해 $v_p(\lambda)$ 를 **기울기(slope)** 라 한다. 기울기가 $h$ 이하인 고윳값들의 일반화 고유공간을 모두 더한 것을 $\mathrm{Symb}\_\Gamma(D)^{\le h}$ 로 쓴다. 무게 $2$ 의 보통(ordinary) 고유기호는 고윳값이 $p$ 진 단위인 $\alpha$ 이므로 기울기가 $0$ 이다.

## 특수화

$V_{k-2}\subset\mathcal A_k$ 이므로 분포를 $V_{k-2}$ 위로 제한하는 사상 $\mathcal D_k\to V_{k-2}^\vee\cong V_{k-2}$ 가 있다. 이것을 기호의 값마다 적용한 것이 **특수화 사상(specialization map)** 이다.

$$
\mathrm{Symb}\_\Gamma(\mathcal D_k)\ \xrightarrow{\ \rho\ }\ \mathrm{Symb}\_\Gamma(V_{k-2})
$$

$k=2$ 이면 $\rho$ 는 분포 $\mu$ 를 $\mu(1)$ 로 보낸다. $\delta_a$ 는 $1$ 로, $\delta_a-\delta_b$ 는 $0$ 으로 간다. 고전 고유기호(eigensymbol) $\phi$ 에 대해 $\rho(\Phi)=\phi$ 이고 $U_p$ 의 고윳값이 $\phi$ 와 같은 과수렴 기호 $\Phi$ 를 $\phi$ 의 **과수렴 올림(overconvergent lift)** 이라 한다.

## p 진 L 함수

$\phi$ 를 무게 $k$ 와 준위 $\Gamma_0(Np)$ 의 고유기호, $\Phi$ 를 그 과수렴 올림이라 한다. 분포

$$
\mu_\Phi=\Phi\bigl(\lbrace\infty\rbrace-\lbrace 0\rbrace\bigr)\ \in\ \mathcal D_k
$$

를 $\mathbb Z_p^\times$ 로 제한하면 측도가 되고, Teichmüller 지표 $\omega$ 로 $\langle x\rangle=x/\omega(x)$ 라 할 때 다음이 $p$ 진 $L$ 함수다.

$$
L_p(\phi,s)=\int_{\mathbb Z_p^\times}\langle x\rangle^{\thinspace s-1}\thinspace d\mu_\Phi(x)
$$

고전 $L$ 값과의 보간 관계는 정리로 증명되고, 구성 자체에는 보간이 들어가지 않는다.

# 성질

## 조절 정리

정리(Stevens 의 조절 정리, control theorem). $h\lt k-1$ 이면 $\rho$ 는 $\mathrm{Symb}\_\Gamma(\mathcal D_k)^{\le h}$ 에서 $\mathrm{Symb}\_\Gamma(V_{k-2})^{\le h}$ 로 가는 동형이다.[^1]

증명의 요지. $\rho$ 의 핵에 속하는 분포는 $k-2$ 차 이하의 모멘트가 $0$ 이다. $(\gamma_a\cdot z^j)=(a+pz)^j$ 를 펼치면 $z^i$ 의 계수에 $p^i$ 가 붙으므로, 핵 위에서 $U_p$ 의 값은 $p^{k-1}$ 의 배수이고 핵의 기울기는 $k-1$ 이상이다. 여핵의 기울기도 $k-1$ 이상임이 같은 계산으로 증명된다. 그래서 기울기 $h\lt k-1$ 부분에서 $\rho$ 는 단사이고 전사다.

$h=0$ 인 보통 경우가 [Hida 이론](hida-theory.md)의 조절 정리이고, Stevens 의 정리는 이것을 기울기 $h\lt k-1$ 로 넓힌다. 고전 고유기호마다 과수렴 올림이 유일하게 존재한다는 것이 이 정리의 따름정리다.

## 기울기 분해

$\mathcal D_k$ 는 무한 차원이지만 $U_p$ 는 [콤팩트 작용소](compact-operators.md)다. 콤팩트 작용소의 고윳값은 $0$ 으로 모이고, $p$ 진에서는 고윳값의 부치가 무한대로 간다는 뜻이다. 그래서 $h$ 를 고정하면 $\mathrm{Symb}\_\Gamma(\mathcal D_k)^{\le h}$ 는 유한 차원이다. 그 차원은 $U_p$ 의 [Fredholm 행렬식](fredholm-determinant.md)의 [Newton 다각형](newton-polygon.md)에서 기울기 $h$ 이하인 선분들의 가로 길이의 합이다.

## 올림의 반복 계산

조절 정리는 올림의 존재와 유일성을 주고, 올림은 아무 올림이나 잡고 $U_p$ 를 반복 적용해 찾는다. $\rho(\Phi_0)=\phi$ 인 임의의 $\Phi_0$ 는 원하는 고유기호에 기울기가 큰 성분이 섞인 것이고, 그 성분은 $U_p$ 를 한 번 적용할 때마다 $p^{k-1-h}$ 배 이상 작아진다.

$$
\Phi_n=\alpha^{-n}U_p^{\thinspace n}\Phi_0\ \longrightarrow\ \Phi,
\qquad
\bigl\vert\Phi_n-\Phi\bigr\vert\ \le\ \vert p\vert^{\thinspace n(k-1-h)}
$$

[p 진수](p-adic-numbers.md)의 절댓값으로 오차가 기하급수적으로 줄므로, 필요한 자릿수만큼 반복하면 끝난다. 실제 계산에서는 분포의 모멘트를 $M$ 개로 잘라 같은 반복을 돌린다. 직관 절의 Riemann 합이 자릿수 $n$ 에 $p^n$ 정도의 기호 값을 쓰는 것과 달리, 이 반복은 $n$ 에 비례하는 횟수로 끝난다.

## 임계 기울기

$h\lt k-1$ 은 버릴 수 없는 조건이다. $h=k-1$ 인 임계 기울기에서는 $\rho$ 가 동형이 아니고 올림이 유일하지 않다. 이 기울기의 고유기호를 임계 $p$ 안정화(critical p-stabilization)라 하며, Pollack–Stevens 와 Bellaïche 가 이 경우에도 올림을 고르는 방법을 주었다. 무게 $2$ 의 보통 곡선은 $h=0\lt 1=k-1$ 이므로 조건을 만족한다.

## Iwasawa 불변량

$\mu_\Phi$ 를 [Iwasawa 대수](iwasawa-algebra.md) $\mathbb Z_p[[T]]$ 의 [멱급수](power-series.md)로 옮기면 $\lambda$ 와 $\mu$ 불변량이 정의된다. $\mu$ 는 계수의 $p$ 진 부치의 최솟값이고, $\lambda$ 는 부치가 그 최솟값인 첫 계수의 차수다. [Iwasawa 주추측](iwasawa-main-conjecture.md)은 이 두 수가 Selmer 군 쪽의 같은 불변량과 같다는 것을 함의한다. 과수렴 기호 알고리즘으로 낮은 준위 밖의 곡선에서도 이 값들을 표로 만들어 추측을 수치로 검증한다.

## 예외적 0 과 L 불변량

$a_p=1$ 인 분열 곱셈적 환원(split multiplicative reduction)에서는 보간 공식의 Euler 인자 $1-a_p^{-1}$ 이 $0$ 이 되어 $L_p$ 가 $s=1$ 에서 $0$ 이 된다. 고전 $L$ 값이 $0$ 이 아닌데 $p$ 진 쪽이 $0$ 인 이 현상을 예외적 0(exceptional zero)이라 한다. Mazur–Tate–Teitelbaum 은 그 자리의 미분이

$$
L_p'(E,1)=\mathcal L_p(E)\cdot\frac{L(E,1)}{\Omega_E}
$$

꼴이라고 추측했고, $\mathcal L_p$ 를 $L$ 불변량(L-invariant)이라 한다. Greenberg 와 Stevens 는 무게를 변수로 움직이는 과수렴 기호의 족을 만들어 무게 방향 미분을 계산해 이것을 증명했다.

# 활용

## 타원곡선의 p 진 BSD 실험

$E/\mathbb Q$ 와 소수 $p$ 를 주면 무게 $2$ 기호에서 $L_p(E,s)$ 의 계수를 뽑는다. $s=1$ 에서의 소멸 차수를 $p$ 진 BSD(Birch–Swinnerton-Dyer) 추측이 예측하는 $\mathrm{rank}\thinspace E(\mathbb Q)$ 와 비교하고, 주항에서 $p$ 진 조절자(p-adic regulator)와 [Tate–Shafarevich 군](selmer-tate-shafarevich.md)의 $p$ 부분을 읽는다. 고전 BSD 와 달리 양변이 모두 유한 계산으로 구해지므로 수치 실험의 범위가 넓다.

## Sage 의 구현

Pollack–Stevens 알고리즘은 SageMath 에 있다. 입력은 [타원곡선](elliptic-curves.md)과 소수, 출력은 정해진 정확도의 $p$ 진 $L$ 급수다. 내부는 모멘트를 $M$ 개로 자른 분포 위에서 위의 반복을 $O(M)$ 번 돌리는 것이고, 각 단계가 $\mathbb Z/p^M$ 위의 [행렬](matrices.md) 연산이라 비용이 미리 계산된다.

## 다른 군의 과수렴 기호

같은 틀이 Bianchi 모듈러 기호(허수이차체), Hilbert 모듈러 기호(전실체), $\mathrm{GL}\_n$ 의 모듈러 기호로 옮겨 간다. 필요한 것은 계수를 분포로 바꿀 수 있다는 것과 $U_p$ 가 콤팩트하다는 것이고, 그러면 조절 정리의 증명이 같은 단계로 진행된다. [고유다양체](eigenvariety.md) 위에서 $p$ 진 $L$ 함수의 족을 만드는 구성도 이 방법을 사용한다.[^1]

[^1]: R. Pollack, G. Stevens, *Overconvergent modular symbols and p-adic L-functions*, Ann. Sci. ÉNS **44** (2011), 1–42. 임계 기울기 쪽은 같은 저자의 *Critical slope p-adic L-functions*, J. London Math. Soc. **87** (2013). 조절 정리의 원형은 G. Stevens 의 미출판 원고 *Rigid analytic modular symbols* (2000). 예외적 0 은 B. Mazur, J. Tate, J. Teitelbaum, *On p-adic analogues of the conjectures of Birch and Swinnerton-Dyer*, Invent. Math. **84** (1986), 증명은 R. Greenberg, G. Stevens, *p-adic L-functions and p-adic periods of modular forms*, Invent. Math. **111** (1993).

# 연관 문서

## 선수지식

- [모듈러 기호](modular-symbols.md)
- [p 진수](p-adic-numbers.md)
- [Hida 이론](hida-theory.md)

## 더 알아보기

- [고유다양체](eigenvariety.md)

#number_theory #computation #field_theory
