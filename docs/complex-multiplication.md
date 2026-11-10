# 복소 곱셈

# 개요

**복소 곱셈(complex multiplication)** 은 [타원곡선](elliptic-curves.md)이 정수배 말고도 복소수 곱하기에서 오는 자기준동형을 갖는 성질이다. 격자 $\mathbb Z+\mathbb Z i$ 는 $i$ 를 곱해도 자기 자신이므로, 이 격자로 만든 곡선 $y^2=x^3-x$ 에는 $(x,y)\mapsto(-x,iy)$ 라는 사상이 하나 더 있다. 이런 곡선의 $j$ 값과 비틀림점의 $x$ 좌표를 허수이차체에 붙이면 그 체의 아벨확대가 전부 나온다.

# 직관

$\mathbb Q$ 의 아벨확대는 $\zeta_n=e^{2\pi i/n}$ 을 붙여 전부 얻는다. [유체론](class-field-theory.md)은 다른 수체 $K$ 에도 아벨확대가 어떻게 생겼는지 알려 주지만, 그 확대를 만드는 수를 주지는 않는다. $K=\mathbb Q(\sqrt{-5})$ 에서는 $6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5})$ 처럼 소인수분해가 두 가지로 갈리고, 유체론은 이 어긋남을 없애는 이차확대가 하나 있다고 말한다. 그 확대를 만드는 수를 찾는다.

$\tau=\sqrt{-5}$ 로 격자 $\Lambda=\mathbb Z+\mathbb Z\tau$ 를 잡는다. $\sqrt{-5}$ 를 곱하면 $1\mapsto\tau$, $\tau\mapsto-5$ 이므로 $\sqrt{-5}\thinspace\Lambda\subseteq\Lambda$ 다. 격자를 자기 안으로 보내는 곱하기는 곡선 $\mathbb C/\Lambda$ 에서 자기 자신으로 가는 사상이므로, 이 곡선에는 정수배 말고 $\sqrt{-5}$ 곱하기라는 사상이 있다. $\tau$ 를 $\sqrt 2$ 나 $\pi$ 처럼 이차 무리수가 아닌 수로 바꾸면 이런 곱하기는 정수뿐이다.

$\mathbb Z\lbrack\sqrt{-5}\rbrack$ 에는 주 아이디얼이 아닌 아이디얼 $(2,1+\sqrt{-5})$ 가 있고, 이 아이디얼을 격자로 보면 $\mathbb Z+\mathbb Z\frac{1+\sqrt{-5}}{2}$ 와 닮은꼴이다. 이 격자도 $\sqrt{-5}$ 곱하기로 닫혀 있다. 두 곡선의 $j$ 값은

$$
j(\sqrt{-5})=632000+282880\sqrt5,\qquad j\Bigl(\tfrac{1+\sqrt{-5}}{2}\Bigr)=632000-282880\sqrt5
$$

이고, 둘은 $X^2-1264000X-681472000$ 의 두 근이다. $j(\sqrt{-5})$ 를 $K$ 에 붙이면 $K(\sqrt5)$ 가 되는데, 이것이 유체론이 말한 이차확대다.

# 정의

## 순서환

허수이차체 $K$ 의 정수환을 $\mathcal O_K$ 라 하자. 정수 $f\ge1$ 에 대해 $\mathcal O=\mathbb Z+f\mathcal O_K$ 를 지휘자(conductor) $f$ 의 **순서환(order)** 이라 하고, $D=f^2d_K$ 를 그 판별식이라 한다. $d_K$ 는 $K$ 의 판별식이다. $K=\mathbb Q(i)$ 이면 $d_K=-4$ 이고, $f=1$ 이면 $\mathcal O=\mathbb Z\lbrack i\rbrack$, $f=2$ 이면 $\mathcal O=\mathbb Z\lbrack 2i\rbrack$ 와 $D=-16$ 이다. 직관 절의 $\mathbb Z\lbrack\sqrt{-5}\rbrack$ 는 $f=1$, $D=-20$ 이다.

순서환 $\mathcal O$ 의 가역 아이디얼을 주 아이디얼만큼의 차이로 묶은 군을 $\mathrm{Cl}(\mathcal O)$ 라 하고 그 위수를 $h(D)$ 라 쓴다. 직관 절에서 $h(-20)=2$ 이고, 두 원소는 $\mathcal O$ 와 $(2,1+\sqrt{-5})$ 의 류다.

## 복소 곱셈

$\mathbb C$ 위의 타원곡선 $E$ 가 $\mathcal O$ 에 의한 **복소 곱셈(complex multiplication, CM)** 을 가진다는 것은

$$
\mathrm{End}(E)\cong\mathcal O
$$

라는 뜻이다. 곡선 $y^2=x^3-x$ 는 격자 $\mathbb Z+\mathbb Z i$ 의 곡선이고 $\lbrack i\rbrack(x,y)=(-x,iy)$ 를 가지므로 $\mathbb Z\lbrack i\rbrack$ 에 의한 CM 을 가진다. 직관 절의 $\mathbb C/(\mathbb Z+\mathbb Z\sqrt{-5})$ 는 $\mathbb Z\lbrack\sqrt{-5}\rbrack$ 에 의한 CM 을 가진다.

## Hilbert 유체 다항식

$\mathcal O$ 에 의한 CM 곡선의 동형류 전부의 $j$ 값을 근으로 갖는 다항식

$$
H_D(X)=\prod_{\lbrack\mathfrak a\rbrack\in\mathrm{Cl}(\mathcal O)}\bigl(X-j(\mathfrak a)\bigr)
$$

를 **Hilbert 유체 다항식(Hilbert class polynomial)** 이라 한다. $j(\mathfrak a)$ 는 격자 $\mathfrak a$ 로 만든 곡선 $\mathbb C/\mathfrak a$ 의 $j$ 값이다. $D=-4$ 이면 $H_{-4}(X)=X-1728$ 이고, $D=-20$ 이면 직관 절의 $H_{-20}(X)=X^2-1264000X-681472000$ 이다.

# 성질

## CM 곡선의 분류

$\mathcal O$ 에 의한 CM 곡선은 $\mathcal O$ 의 가역 아이디얼 $\mathfrak a$ 에 대해 $\mathbb C/\mathfrak a$ 와 동형이고, $\mathbb C/\mathfrak a\cong\mathbb C/\mathfrak b$ 는 $\lbrack\mathfrak a\rbrack=\lbrack\mathfrak b\rbrack$ 와 동치다. 그래서 동형류는 $\mathrm{Cl}(\mathcal O)$ 의 원소와 일대일로 대응하고 $h(D)$ 개다. 증명의 요지는 $E\cong\mathbb C/\Lambda$ 에서 $\mathcal O\Lambda\subseteq\Lambda$ 이므로 $\Lambda$ 가 $\mathcal O$ 가군이라는 것이다.

$H_D(X)$ 의 계수는 정수다. 복소해석으로 정의한 $j$ 값들의 대칭식이 정수가 되고, $H_D$ 는 $\mathbb Q$ 위에서 기약이다.

## 제1 주정리

$\mathcal O=\mathcal O_K$ 일 때 다음이 성립한다.

1. $j(\mathfrak a)$ 는 대수적 정수다.
2. $H=K(j(\mathcal O_K))$ 는 $K$ 의 Hilbert 유체(Hilbert class field), 곧 최대 비분기 아벨확대이고 $\lbrack H:K\rbrack=h(K)$ 다.
3. Artin 동형 $\mathrm{Cl}(\mathcal O_K)\cong\mathrm{Gal}(H/K)$ 아래 $\sigma_{\mathfrak a}(j(\mathfrak b))=j(\mathfrak a^{-1}\mathfrak b)$ 다.

$K=\mathbb Q(\sqrt{-5})$ 에서는 $H=K(\sqrt5)$ 이고, $(2,1+\sqrt{-5})$ 에 대응하는 Galois 원소가 $632000+282880\sqrt5$ 와 $632000-282880\sqrt5$ 를 맞바꾼다. 3 번은 $\mathbb Q$ 위의 $\sigma_a(\zeta_n)=\zeta_n^{a}$ 에 대응하는 등식이고, [Heegner 점](heegner-points.md)의 구성이 이 등식을 사용한다.

## 제2 주정리와 Shimura 상호법칙

$E$ 를 $\mathcal O_K$ 에 의한 CM 곡선, $\mathfrak h\colon E\to E/\mathrm{Aut}(E)\cong\mathbb P^1$ 을 Weber 함수(Weber function)라 하자. $\mathrm{Aut}(E)=\lbrace\pm1\rbrace$ 이면 $\mathfrak h$ 는 상수배를 빼고 $x$ 좌표다. $\mathcal O_K$ 의 [아이디얼](ideals-quotient-rings.md) $\mathfrak m$ 에 대해

$$
K_{\mathfrak m}=H\bigl(\mathfrak h(P)\thinspace:\thinspace P\in E\lbrack\mathfrak m\rbrack\bigr)
$$

는 도체 $\mathfrak m$ 의 광선 유체(ray class field)이고, 이들의 합집합이 $K$ 의 최대 아벨확대 $K^{\mathrm{ab}}$ 다. $\mathbb Q$ 에서 곱셈군의 $n$ 등분점 $\zeta_n$ 이 하던 일을 타원곡선의 $\mathfrak m$ 등분점이 한다. 이데일(idele) $s\in\mathbb A_K^\times$ 의 작용을 격자에 곱하는 조작으로 적은 것이 Shimura 상호법칙(Shimura reciprocity law)이고, [모듈러 곡선](modular-curves.md) 위 CM 점의 Galois 작용을 계산하는 데 사용한다.

## 유리수체 위의 CM 곡선과 Deuring 정리

$h(D)=1$ 이면 $j\in\mathbb Z$ 이므로 CM 곡선을 $\mathbb Q$ 위에서 정의할 수 있다. $D=-4$ 의 $y^2=x^3-x$ ($j=1728$) 와 $D=-3$ 의 $y^2=x^3+1$ ($j=0$) 이 그 예다. 이 곡선의 자기준동형 가운데 $\mathbb Q$ 위에서 정의된 것은 정수배뿐이고, $\lbrack i\rbrack$ 는 $K$ 로 확대해야 정의된다.

그래서 $\mathbb Q$ 위 CM 곡선의 [Galois 표현](galois-representations.md)은 $K$ 의 Hecke 지표(Hecke character) $\psi$ 에서 유도된다.

$$
\rho_{E,\ell}\cong\mathrm{Ind}\_{G_K}^{G_{\mathbb Q}}\psi
$$

이로부터 CM 곡선의 $L$ 함수가 $\psi$ 의 Hecke $L$ 함수와 같다는 Deuring 정리(Deuring's theorem)가 유도된다[^1]. 타원곡선의 모듈러성이 CM 곡선에 대해 먼저 증명된 것도 이 등식에서다.

## Deuring 의 환원 이분법

$E$ 가 $\mathcal O_K$ 에 의한 CM 을 갖고 $p\ge5$ 에서 좋은 환원을 가지면, 환원 $\tilde E$ 의 유형은 $K$ 에서 $p$ 가 분해되는 방식으로 정해진다.

| K 에서 p 의 분해 | 환원 Ẽ | Frobenius |
| --- | --- | --- |
| 분열 $p=\pi\bar\pi$ | 보통(ordinary) | $a_p=\pi+\bar\pi$ |
| 비활성 | 초특이(supersingular) | $a_p=0$ |
| 분기 | 초특이 | $a_p=0$ |

초특이일 때 $\tilde E$ 의 자기준동형환은 [사원수 대수](quaternion-algebras.md)의 극대 순서환이다. 분열하는 경우 $\char35{}\tilde E(\mathbb F_p)=p+1-(\pi+\bar\pi)$ 이므로, 점의 개수를 세는 것과 $p$ 를 $K$ 의 노름 $\pi\bar\pi$ 로 쓰는 것이 같은 계산이다.

$p=x^2+ny^2$ 꼴의 표현 문제가 이 대응으로 풀린다. 판별식 $-108$ 의 순서환 $\mathbb Z\lbrack\sqrt{-27}\rbrack$ 의 류수는 $3$ 이고, 이 순서환에 대응하는 확대는 $K(\sqrt[3]{2})$ 다. 그 결과 $p=x^2+27y^2$ 은 $p\equiv1\pmod3$ 이고 $2$ 가 $\bmod\thinspace p$ 세제곱잉여인 것과 동치다[^1].

초특이 환원은 [초특이 동종사상 그래프](supersingular-isogeny-graphs.md)의 정점을 만드는 데 사용한다.

## 류수 1 과 거의 정수

$h(D)=1$ 이면 $H_D(X)=X-j$ 이므로 $j$ 가 정수다. $h(D)=1$ 인 기본판별식은 [류수 1 문제](class-number-one.md)의 답인 $D=-3,-4,-7,-8,-11,-19,-43,-67,-163$ 아홉 개다. $j$ 의 $q$ 전개

$$
j(\tau)=\frac1q+744+196884\thinspace q+\cdots,\qquad q=e^{2\pi i\tau}
$$

에 $\tau=\frac{1+\sqrt{-163}}{2}$ 를 넣으면 $q=-e^{-\pi\sqrt{163}}$ 이고 $j=-640320^3$ 이다. 셋째 항부터는 $e^{-\pi\sqrt{163}}$ 정도로 작으므로 $e^{\pi\sqrt{163}}$ 은 정수 $640320^3+744$ 와 $10^{-12}$ 보다 덜 차이 난다.

$$
e^{\pi\sqrt{163}}=262537412640768743.99999999999925\ldots
$$

## 허수이차체 밖의 아벨확대

Hilbert 의 12 번 문제는 임의의 수체 $K$ 의 $K^{\mathrm{ab}}$ 를 해석함수의 특수값으로 생성하라는 요구다. $\mathbb Q$ 에서는 [지수함수](exponential-function.md)의 값 $\zeta_n$, 허수이차체에서는 $j$ 와 Weber 함수의 값이 답이다. 그 밖의 수체에서는 이 문제가 풀리지 않았다[^2]. CM 체에서는 CM 아벨다양체를 쓰는 Shimura–Taniyama 이론(Shimura–Taniyama theory)이 아벨확대의 일부를 만들지만 $K^{\mathrm{ab}}$ 전체를 만들지는 못한다.

# 활용

- CM 방법(CM method)은 위수를 지정해 유한체 위의 타원곡선을 만든다. 원하는 위수 $N=p+1-a$ 에 대해 $4p-a^2=\vert D\vert y^2$ 인 작은 $\vert D\vert$ 를 찾고, $H_D(X)$ 의 $\bmod\thinspace p$ 근 $j_0$ 를 구해 $j$ 값이 $j_0$ 인 곡선을 쓴다. 위수를 [Schoof–Elkies–Atkin 알고리즘](sea-algorithm.md)으로 세는 대신 지정하는 방법이다. $\vert D\vert$ 가 커지면 $H_D$ 의 계수가 커지므로 $\vert D\vert$ 를 작게 잡거나 Weber 함수처럼 값이 작은 불변량을 쓴다.
- [타원곡선 소수 증명](elliptic-curve-primality-proving.md)은 CM 방법으로 위수를 아는 곡선을 만들어 소수 증명서를 쓴다.
- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)에서 Heegner 점은 $X_0(N)$ 위의 CM 점을 모듈러 매개화로 옮긴 것이다. 제1 주정리에 의해 이 점은 $H$ 위에서 정의되고 Galois 궤도가 $\mathrm{Cl}(\mathcal O_K)$ 로 적히므로, 자취 $\mathrm{Tr}\_{H/K}$ 로 $K$ 유리점을 얻는다.
- Deuring 정리는 $\mathrm{GL}\_2$ 의 Galois 표현이 $\mathrm{GL}\_1$ 의 Hecke 지표에서 유도된 자기동형 대상과 짝지어진다는 진술이고, [Langlands 강령](langlands-program.md)의 함자성(functoriality)이 확인된 첫 비자명한 사례다.

[^1]: M. Deuring, *Die Typen der Multiplikatorenringe elliptischer Funktionenkörper*, Abh. Math. Sem. Hamburg **14** (1941). 표준 교재는 J. Silverman, *Advanced Topics in the Arithmetic of Elliptic Curves* (1994) 2 장과 D. Cox, *Primes of the Form* $x^2+ny^2$ (1989). 후자는 류수 1 목록과 $p=x^2+27y^2$ 예제를 CM 이론으로 다룬다.
[^2]: R. P. Langlands, *Some contemporary problems with origins in the Jugendtraum*, Mathematical Developments Arising from Hilbert Problems, Proc. Sympos. Pure Math. **28** (1976), 401–418. 유리수체와 허수 이차체 밖에서 Hilbert 의 12 번 문제가 풀리지 않은 채임을 전제로 그 너머의 접근을 논한다.

# 연관 문서

## 선수지식

- [타원곡선](elliptic-curves.md)
- [유체론](class-field-theory.md)

## 더 알아보기

- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)

#number_theory #field_theory #construction
