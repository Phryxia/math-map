# 과수렴 모듈러 기호와 p 진 L 함수

# 개요

[모듈러 기호](modular-symbols.md)는 계수 가군을 고를 수 있는 구성이다. 무게 $k$ 의 고전 이론은 차수 $k-2$ 이하의 다항식 공간 $V_{k-2}$ 를 쓰고, 유한 차원이라 선형대수로 다룬다.

Pollack 과 Stevens 는 계수를 $\mathbb Z_p$ 위 국소해석함수의 연속 쌍대인 **$p$ 진 분포 공간** $\mathcal D_k$ 로 바꿨다. 무한 차원이지만 다음 **특수화 사상**이 $U_p$ 의 기울기가 작은 부분에서 동형이다.

$$
\mathrm{Symb}\_\Gamma(\mathcal D_k)\ \xrightarrow{\ \rho\ }\ \mathrm{Symb}\_\Gamma(V_{k-2})
$$

이것이 **Stevens 의 조절 정리**다. 고전 고유기호 하나를 유일하게 위로 올릴 수 있고, 올린 기호가 담은 분포를 $\mathbb Z_p^\times$ 로 제한하면 $p$ 진 $L$ 함수가 된다.

$p$ 진 $L$ 함수는 원래 고전 $L$ 값들을 보간해 존재를 증명하던 대상이다. 과수렴 기호는 같은 것을 유한 번의 선형대수로 만든다. [$p$ 진수](p-adic-numbers.md) 위의 수렴이 기하급수적이라 자릿수를 원하는 만큼 얻고, Iwasawa 이론의 $\lambda,\mu$ 불변량을 표로 만드는 일이 가능해졌다.

# 직관

## 유한 차원 조각

$\mathcal D_k$ 는 무한 차원이지만 $U_p$ 작용소가 콤팩트하다. 콤팩트 작용소의 고유값은 0 으로 몰려가고, $p$ 진에서 이는 고유값의 부치가 무한대로 간다는 뜻이다. 기울기(고유값의 $p$ 진 부치)를 하나 고정하면 다음이 유한 차원이다.

$$
\mathrm{Symb}\_\Gamma(\mathcal D_k)^{\le h}
$$

무한 차원 공간을 통째로 다루는 대신 기울기 $h$ 이하 조각만 떼어 유한 차원 문제로 만든다. [Newton 다각형](newton-polygon.md)이 [Fredholm 행렬식](fredholm-determinant.md)의 기울기를 읽어 그 조각의 차원을 준다.

## 기울기 조건의 출처

분포를 다항식 위의 값만 기억하도록 자를 때 버려지는 부분, 곧 차수 $k-1$ 이상의 모멘트들에는 $U_p$ 가 $p^{k-1}$ 이상의 인자를 달고 작용한다. 특수화의 핵과 여핵 위에서 $U_p$ 의 기울기가 항상 $\ge k-1$ 이다.

$$
h\lt k-1\ \Longrightarrow\ \rho:\ \mathrm{Symb}\_\Gamma(\mathcal D_k)^{\le h}\ \xrightarrow{\ \sim\ }\ \mathrm{Symb}\_\Gamma(V_{k-2})^{\le h}
$$

기울기가 작은 쪽에서는 잘려 나간 부분이 $U_p$ 에 짓눌려 보이지 않는다. $h=0$ 인 순종(ordinary) 경우가 Hida 이론의 조절 정리이고 Stevens 의 판본이 그것을 유한 기울기로 넓힌 것이다.

## 올림의 계산

조절 정리는 올림의 존재와 유일성만 말한다. 찾는 방법은 아무 올림이나 잡고 $U_p$ 를 반복 적용하는 것이다.

$\rho(\Phi_0)=\phi$ 인 임의의 $\Phi_0$ 는 원하는 고유기호에 기울기가 큰 성분이 섞인 것이고, 그 성분은 $U_p$ 를 한 번 적용할 때마다 $p$ 배씩 작아진다. 기울기 차이가 수렴 속도를 준다.

$$
\Phi_n=\alpha^{-n}U_p^{\thinspace n}\Phi_0\ \longrightarrow\ \Phi,
\qquad
\bigl|\Phi_n-\Phi\bigr|\ \le\ |p|^{\thinspace n(k-1-h)}
$$

기울기 0 과 기울기 1 의 고유값을 가진 2 차원 행렬에서 같은 수렴이 보인다.

부치가 $n$ 씩 올라가므로 필요한 자릿수만큼만 반복하면 되고, 이것이 알고리즘의 종료 조건이다. 실제 과수렴 기호에서는 분포의 모멘트를 유한 개로 잘라 같은 반복을 돌린다.

# 정의

## 분포 공간

$\mathcal A_k$ 를 $\mathbb Z_p$ 위의 국소해석함수 공간, $\mathcal D_k=\mathcal A_k^\vee$ 를 그 연속 쌍대라 한다. 반군

$$
\Sigma_0(p)=\left\lbrace\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in M_2(\mathbb Z_p):\ p\mid c,\ p\nmid a,\ ad-bc\ne0\right\rbrace
$$

가 무게 $k$ 작용

$$
(\gamma\cdot f)(z)=(a+cz)^{k-2}\thinspace f\negthinspace\left(\frac{b+dz}{a+cz}\right)
$$

로 $\mathcal A_k$ 에 작용하고 쌍대로 $\mathcal D_k$ 에 작용한다. 분포 $\mu$ 는 모멘트 열 $\bigl(\mu(1),\mu(z),\mu(z^2),\dots\bigr)$ 로 결정되고 계산에서는 이 열을 앞의 $M$ 개로 자른다.

## 모듈러 기호

$\Delta_0=\mathrm{Div}^0(\mathbb P^1(\mathbb Q))$ 라 하면 다음이다.

$$
\mathrm{Symb}\_\Gamma(D)=\mathrm{Hom}\_\Gamma(\Delta_0,\ D)
$$

$D=V_{k-2}$ 면 고전 모듈러 기호, $D=\mathcal D_k$ 면 **과수렴 모듈러 기호**다.

## 특수화와 조절 정리

$V_{k-2}\subset\mathcal A_k$ 이므로 쌍대로 $\mathcal D_k\twoheadrightarrow V_{k-2}^\vee\cong V_{k-2}$ 가 있고 이를 계수에 적용한 것이 $\rho$ 다.

> **조절 정리 (Stevens).** $h\lt k-1$ 이면 $\rho$ 는 기울기 $\le h$ 부분공간 사이의 동형이다.

## $p$ 진 $L$ 함수

$\phi$ 를 무게 $k$ 와 준위 $\Gamma_0(Np)$ 의 고유기호, $\Phi$ 를 그 유일한 과수렴 올림이라 한다. 분포

$$
\mu_\Phi=\Phi\bigl(\lbrace\infty\rbrace-\lbrace 0\rbrace\bigr)\ \in\ \mathcal D_k
$$

를 $\mathbb Z_p^\times$ 로 제한하면 측도가 되고 다음이 $p$ 진 $L$ 함수다.

$$
L_p(\phi,s)=\int_{\mathbb Z_p^\times}\langle x\rangle^{\thinspace s-1}\thinspace d\mu_\Phi(x)
$$

고전 $L$ 값과의 보간 관계는 정리로 따라 나오고 구성 자체에는 보간이 들어가지 않는다.

# 성질

## 임계 기울기

$h\lt k-1$ 은 버릴 수 없는 조건이다. $h=k-1$ 인 임계 기울기에서는 $\rho$ 가 동형이 아니고 올림이 유일하지 않다. 이 자리에 사는 것이 **임계 $p$ 안정화**이며 Pollack–Stevens 와 Bellaïche 가 그 경우에도 올림을 고르는 방법을 마련했다. 무게 2 의 순종 곡선은 $h=0\lt 1=k-1$ 이라 조건을 여유 있게 만족한다.

## Iwasawa 불변량

$\mu_\Phi$ 를 Iwasawa 대수 $\mathbb Z_p[[T]]$ 의 멱급수로 옮기면 $\lambda$ 와 $\mu$ 불변량이 정의된다. Newton 다각형에서 읽는 이 두 수가 [Iwasawa 주추측](iwasawa-main-conjecture.md)의 양변을 비교하는 자리에 놓인다. 과수렴 기호 알고리즘 이전에는 낮은 준위에서만 알 수 있던 값들을 이제 표로 만들어 추측을 수치적으로 검증한다.

## 예외적 0 과 $L$ 불변량

$a_p=1$ 인 분열 곱셈적 환원에서는 보간 공식의 Euler 인자 $1-a_p^{-1}$ 이 0 이 되어 $L_p$ 가 $s=1$ 에서 소멸한다. 고전 $L$ 값이 0 이 아닌데 $p$ 진 쪽이 0 인 이 현상이 **예외적 0** 이다. Mazur–Tate–Teitelbaum 은 그 자리의 미분이

$$
L_p'(E,1)=\mathcal L_p(E)\cdot\frac{L(E,1)}{\Omega_E}
$$

꼴이라고 추측했고 $\mathcal L_p$ 를 **$L$ 불변량**이라 한다. Greenberg 와 Stevens 의 증명은 무게를 변수로 움직이는 과수렴 기호의 족을 만들어 무게 방향 미분을 계산하는 것이었다. 고정된 무게에서는 보이지 않는 양이 족 안에서 드러난다.

# 활용

## 타원곡선의 p 진 BSD 실험

$E/\mathbb Q$ 와 소수 $p$ 를 주면 무게 2 기호에서 $L_p(E,s)$ 의 계수를 뽑는다. $s=1$ 에서의 소멸 차수를 $p$ 진 BSD(Birch–Swinnerton-Dyer) 추측이 예측하는 $\mathrm{rank}\thinspace E(\mathbb Q)$ 와 비교하고, 주항에서 $p$ 진 조절자와 Tate–Shafarevich 군의 $p$ 부분을 읽는다. 고전 BSD 와 달리 양변이 모두 유한 계산으로 접근되므로 수치 실험의 범위가 넓다.

## Sage 의 구현

Pollack–Stevens 알고리즘은 Sage 에 있다. 입력은 [타원곡선](elliptic-curves.md)과 소수, 출력은 정해진 정확도의 $p$ 진 $L$ 급수다. 내부는 모멘트를 $M$ 개로 자른 분포 위에서 위의 반복을 $O(M)$ 번 돌리는 것이고 각 단계가 $\mathbb Z/p^M$ 위의 행렬 연산이라 비용이 예측된다.

## 다른 군으로의 이식

같은 틀이 Bianchi 모듈러 기호(허수이차체), Hilbert 모듈러 기호(전실체), 고차 $\mathrm{GL}\_n$ 의 중복 기호로 옮겨 간다. 필요한 것은 계수를 분포로 바꿀 수 있다는 것과 $U_p$ 가 콤팩트하다는 것이고, 그러면 조절 정리의 증명 구조가 따라온다. 고유다양체 위에서 $p$ 진 $L$ 함수의 족을 만드는 구성도 여기에 뿌리를 둔다.[^1]

[^1]: R. Pollack, G. Stevens, *Overconvergent modular symbols and p-adic L-functions*, Ann. Sci. ÉNS **44** (2011), 1–42. 임계 기울기 쪽은 같은 저자의 *Critical slope p-adic L-functions*, J. London Math. Soc. **87** (2013). 조절 정리의 원형은 G. Stevens 의 미출판 원고 *Rigid analytic modular symbols* (2000). 예외적 0 은 B. Mazur, J. Tate, J. Teitelbaum, *On p-adic analogues of the conjectures of Birch and Swinnerton-Dyer*, Invent. Math. **84** (1986), 증명은 R. Greenberg, G. Stevens, *p-adic L-functions and p-adic periods of modular forms*, Invent. Math. **111** (1993).

# 연관 문서

## 선수지식

- [모듈러 기호](modular-symbols.md)
- [p 진수](p-adic-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #computation #field_theory
