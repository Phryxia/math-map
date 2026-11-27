# Hilbert 모듈러 형식

# 개요

**Hilbert 모듈러 형식(Hilbert modular form)** 은 총실수체 위에서 변수를 실매장의 수만큼 두고 정의한 모듈러 형식이다. $K=\mathbb Q(\sqrt5)$ 의 [Dedekind zeta 함수](dedekind-zeta.md) 값 $\zeta_K(-1)$ 을 구하려 하면, 급수 $\sum N(\mathfrak a)^{-s}$ 은 $s=-1$ 에서 수렴하지 않아 직접 더할 수 없다. 두 변수의 Eisenstein 급수를 만들고 두 변수를 같게 놓으면 한 변수의 모듈러 형식이 되고, 그 계수를 비교하면 $\zeta_K(-1)=1/30$ 이 나온다.

# 직관

$K=\mathbb Q(\sqrt5)$ 의 정수환은 $\mathcal O_K=\mathbb Z\lbrack\varphi\rbrack$, $\varphi=(1+\sqrt5)/2$ 다. 성분이 $\mathcal O_K$ 에 속하는 행렬로 상반평면 $\mathbb H$ 에 작용하려고 하면 평행이동 $z\mapsto z+1$ 과 $z\mapsto z+\varphi$ 가 함께 들어온다. $\varphi$ 가 무리수이므로 $m+n\varphi$ 꼴의 수는 실직선 위에서 조밀하고, 이 평행이동들을 모두 견디는 연속함수는 $\mathrm{Re}\thinspace z$ 에 의존하지 못한다.

$K$ 에서 실수로 가는 매장은 $\sqrt5\mapsto\sqrt5$ 와 $\sqrt5\mapsto-\sqrt5$ 둘이다. $x\in K$ 의 두 상을 $x_1,x_2$ 로 쓰고 변수를 둘 두어 $(z_1,z_2)\mapsto(z_1+b_1,z_2+b_2)$ 로 옮긴다. $1$ 과 $\varphi$ 는 $(1,1)$ 과 $(1.618\ldots,-0.618\ldots)$ 로 가고, 두 벡터의 행렬식이 $-\sqrt5\ne 0$ 이므로 $\mathcal O_K$ 의 상은 $\mathbb R^2$ 의 격자다. 격자 평행이동에서 불변인 함수는 [Fourier 급수](fourier-series.md)로 전개되므로, 변수를 매장의 수만큼 두면 [모듈러 형식](modular-forms.md)의 $q$ 전개가 그대로 성립한다.

이 공간 $\mathbb H\times\mathbb H$ 위에서 [Eisenstein 급수](eisenstein-series.md)를 만들면, 그 상수항이 $\zeta_K(-1)/4$ 이고 다른 계수는 아이디얼 약수의 노름을 더한 정수다. 두 변수를 같게 놓으면 $\mathrm{SL}\_2(\mathbb Z)$ 에 대한 무게 $4$ 의 모듈러 형식이 되는데, 그런 형식은 다음 $E_4$ 의 상수배뿐이다.

$$
E_4=1+240q+2160q^2+\cdots
$$

계산은 다음과 같다.

$$
\frac{\zeta_K(-1)}{4}+2q+18q^2+\cdots=\frac{1}{120}E_4
$$

$q$ 의 계수 $2$ 에서 상수배가 $1/120$ 로 정해지고, $q^2$ 의 계수 $18=2160/120$ 이 이를 확인한다. 상수항을 비교하면 $\zeta_K(-1)=4/120=1/30$ 이다. 계수 $2$ 와 $18$ 의 계산은 성질 절에 있다.

# 정의

## 총실수체와 Hilbert 모듈러 군

차수 $n$ 의 수체 $K$ 의 매장 $n$ 개가 모두 실수로 가면 $K$ 를 **총실수체(totally real field)** 라 한다. 매장을 $\sigma_1,\ldots,\sigma_n$ 으로 쓰고 $x_j=\sigma_j(x)$ 로 둔다. 모든 $j$ 에서 $x_j\gt 0$ 이면 $x$ 를 **총양수(totally positive)** 라 하고 $x\gg 0$ 으로 쓴다. 직관 절의 $\mathbb Q(\sqrt5)$ 는 $n=2$ 인 총실수체이고, $\varphi$ 는 $\varphi_2=-0.618\ldots$ 이므로 총양수가 아니다.

$\mathrm{SL}\_2(\mathcal O_K)$ 를 **Hilbert 모듈러 군(Hilbert modular group)** 이라 한다. 이 군은 $\mathbb H^n$ 에 다음과 같이 작용한다.

$$
\gamma z=\left(\frac{a_1z_1+b_1}{c_1z_1+d_1},\ \ldots,\ \frac{a_nz_n+b_n}{c_nz_n+d_n}\right),\qquad\gamma=\begin{pmatrix}a&b\cr c&d\end{pmatrix}
$$

$n=1$ 이면 $\mathrm{SL}\_2(\mathbb Z)$ 의 작용이다.

## Hilbert 모듈러 형식

$k$ 를 양의 정수라 한다. 정칙함수 $f\colon\mathbb H^n\to\mathbb C$ 가 모든 $\gamma\in\mathrm{SL}\_2(\mathcal O_K)$ 에서 다음을 만족하면 $f$ 를 **평행 무게(parallel weight)** $k$ 의 Hilbert 모듈러 형식이라 한다.

$$
f(\gamma z)=\prod_{j=1}^{n}(c_jz_j+d_j)^k\thinspace f(z)
$$

$n=1$ 이면 첨점에서의 정칙성을 따로 요구하지만, $n\ge 2$ 이면 그 조건은 위 변환식에서 따라 나온다(성질 절의 Koecher 원리). 이런 $f$ 들의 공간을 $M_k(\mathrm{SL}\_2(\mathcal O_K))$ 로 쓴다. 지수마다 무게를 다르게 둔 $(k_1,\ldots,k_n)$ 도 정의되지만 이 문서는 평행 무게만 다룬다.

$\Gamma\backslash\mathbb H^n$ 을 **Hilbert 모듈러 다양체(Hilbert modular variety)** 라 하고, $n=2$ 이면 Hilbert 모듈러 곡면이라 한다. 복소차원이 $n$ 이다.

## Fourier 전개

$\mathcal O_K$ 의 쌍대 격자 $\mathfrak d^{-1}=\lbrace x\in K:\mathrm{Tr}(x\mathcal O_K)\subseteq\mathbb Z\rbrace$ 를 역차분 아이디얼(inverse different)이라 한다. $\mathrm{Tr}(\nu z)=\nu_1z_1+\cdots+\nu_nz_n$ 으로 두면 $f\in M_k$ 는 다음 꼴로 전개된다.

$$
f(z)=a(0)+\sum_{\nu\in\mathfrak d^{-1},\ \nu\gg 0}a(\nu)\thinspace e^{2\pi i\thinspace\mathrm{Tr}(\nu z)}
$$

$a(0)=0$ 이고 모든 첨점에서 상수항이 $0$ 이면 $f$ 를 **첨점형식(cusp form)** 이라 하고, 그 공간을 $S_k$ 로 쓴다. $\mathbb Q(\sqrt5)$ 에서는 $\mathfrak d^{-1}=(1/\sqrt5)$ 다.

# 성질

## Koecher 원리

$n\ge 2$ 이면 변환식을 만족하는 정칙함수의 Fourier 전개에는 총양수가 아닌 $\nu\ne 0$ 이 나타나지 않는다. 이것이 **Koecher 원리(Koecher principle)** 다.

증명의 요지. $\varepsilon$ 이 단원이면 $\mathrm{diag}(\varepsilon,\varepsilon^{-1})$ 이 $z\mapsto\varepsilon^2z$ 로 작용하므로 $a(\varepsilon^2\nu)=N(\varepsilon)^ka(\nu)$ 다. [Dirichlet 단수 정리](dirichlet-unit-theorem.md)로 $n\ge 2$ 이면 단원이 무한히 많고, $\nu_1\lt 0$ 인 $\nu$ 의 궤도 $\varepsilon^2\nu$ 는 $\nu_1$ 이 음수인 채로 크기가 한없이 커지는 원소를 포함한다. 그 계수가 모두 같은 크기이면 전개가 수렴하지 않으므로 $a(\nu)=0$ 이다.

## Eisenstein 급수

$K$ 의 좁은 류수(narrow class number)가 $1$ 이고 $k\ge 2$ 가 짝수라 하자. 아이디얼 $\mathfrak a$ 에 대해 $\sigma_{k-1}(\mathfrak a)=\sum_{\mathfrak b\mid\mathfrak a}N\mathfrak b^{k-1}$ 로 두면 다음이 $M_k$ 에 속한다.

$$
G_k(z)=\frac{\zeta_K(1-k)}{2^n}+\sum_{\nu\in\mathfrak d^{-1},\ \nu\gg 0}\sigma_{k-1}(\nu\mathfrak d)\thinspace e^{2\pi i\thinspace\mathrm{Tr}(\nu z)}
$$

$n=1$ 이고 $k=2$ 이면 이 급수는 모듈러 형식이 아니지만, $n\ge 2$ 이면 $k=2$ 에서도 모듈러 형식이다.

## 대각선 제한

$n=2$ 이고 $z_1=z_2=z$ 로 놓는다. $\gamma\in\mathrm{SL}\_2(\mathbb Z)$ 이면 $c_1=c_2$, $d_1=d_2$ 이므로 변환식의 인수가 $(cz+d)^{2k}$ 가 된다. 따라서 $f(z,z)$ 는 $\mathrm{SL}\_2(\mathbb Z)$ 에 대한 무게 $2k$ 의 모듈러 형식이고, $q^m$ 의 계수는 $\mathrm{Tr}\thinspace\nu=m$ 인 $\nu$ 에 대한 $a(\nu)$ 의 합이다.

$\mathbb Q(\sqrt5)$ 에서 $\nu\in\mathfrak d^{-1}$ 을 $\nu=b/2+a/(2\sqrt5)$, $a\equiv b\pmod 2$ 로 쓰면 $\mathrm{Tr}\thinspace\nu=b$ 이고, 총양수 조건은 $\vert a\vert\lt b\sqrt5$ 다. $\nu\mathfrak d$ 는 $x=(a+b\sqrt5)/2$ 가 생성하는 아이디얼이다.

- $b=1$ 이면 $a=\pm1$ 이고 $x=(\pm1+\sqrt5)/2$ 는 단원이다. $\sigma_1(\mathcal O_K)=1$ 이 두 번 나와 계수가 $2$ 다.
- $b=2$ 이면 $a\in\lbrace 0,\pm2,\pm4\rbrace$ 다. $x=\sqrt5$ 는 노름 $5$ 인 소아이디얼로 $\sigma_1=6$, $x=\pm1+\sqrt5$ 는 아이디얼 $(2)$ 로 $\sigma_1=1+4=5$, $x=\pm2+\sqrt5$ 는 단원으로 $\sigma_1=1$ 이다. 합은 $6+2\cdot5+2\cdot1=18$ 이다.

이 두 계수가 직관 절의 $2q+18q^2$ 다.

## Siegel 의 유리성 정리

총실수체 $K$ 와 짝수 $k\ge 2$ 에 대해 $\zeta_K(1-k)$ 는 유리수다. 이것이 Klingen 과 Siegel 의 정리다[^1].

증명의 요지. $G_k$ 를 대각선 $z_1=\cdots=z_n$ 에 제한하면 무게 $nk$ 의 $\mathrm{SL}\_2(\mathbb Z)$ 모듈러 형식이 되고, 상수항이 아닌 계수는 모두 정수다. 무게 $nk$ 의 공간은 계수가 유리수인 기저를 가지므로, 복소수체의 자기동형 $\tau$ 를 계수에 적용해도 모듈러 형식이 남는다. 제한한 형식에서 그 상을 빼면 상수 $\tau(c)-c$ 가 남는데, 무게가 양수인 0 아닌 상수함수는 모듈러 형식이 아니므로 상수항 $c=2^{-n}\zeta_K(1-k)$ 는 모든 $\tau$ 에서 고정되어 유리수다. 직관 절의 계산이 $n=2$, $k=2$ 의 경우다.

## Hecke 작용소와 Galois 표현

소아이디얼 $\mathfrak p$ 마다 [Hecke 작용소](hecke-operators.md) $T_{\mathfrak p}$ 가 $S_k$ 에 작용하고, 동시 고유형식 $f$ 의 고윳값 $c(\mathfrak p)$ 로 $L(f,s)=\sum_{\mathfrak m}c(\mathfrak m)N\mathfrak m^{-s}$ 이 정의된다. $k\ge 2$ 인 고유형식마다 $K$ 의 절대 Galois 군의 2 차원 $\ell$ 진 [Galois 표현](galois-representations.md)이 있고, 분기하지 않는 $\mathfrak p$ 에서 Frobenius 의 대각합이 $c(\mathfrak p)$ 다. Carayol, Wiles, Taylor 가 구성했다[^2].

# 활용

- 실이차체 위 타원곡선의 모듈러성. Freitas–Le Hung–Siksek 은 실이차체 위의 모든 [타원곡선](elliptic-curves.md)이 평행 무게 $2$ 의 Hilbert 고유형식에 대응한다는 것을 증명했다[^3].
- [Jacquet–Langlands 대응](jacquet-langlands.md). $q$ 전개를 직접 구하기 어려운 Hilbert 형식의 Hecke 고윳값을, 정부호 사원수 대수 쪽의 유한 집합 위 함수로 옮겨 정수 행렬의 대각화로 구한다.
- [모듈러 기호](modular-symbols.md). 같은 관계식이 $\mathrm{SL}\_2(\mathcal O_K)$ 의 모듈러 기호로 옮겨 가 Hilbert 형식의 계산에 쓰인다.
- [Bianchi 모듈러 형식](bianchi-modular-forms.md)과의 비교. 허수이차체에서는 공간이 실차원 $3$ 인 쌍곡 3 공간이라 정칙성 대신 조화 미분형식을 쓰지만, 총실수체에서는 $\mathbb H^n$ 이 복소다양체여서 정칙함수로 정의된다.

[^1]: C. L. Siegel, "Berechnung von Zetafunktionen an ganzzahligen Stellen", Nachrichten der Akademie der Wissenschaften in Göttingen (1969).
[^2]: R. Taylor, "On Galois representations associated to Hilbert modular forms", Inventiones Mathematicae 98 (1989).
[^3]: N. Freitas, B. V. Le Hung, S. Siksek, "Elliptic curves over real quadratic fields are modular", Inventiones Mathematicae 201 (2015).

# 연관 문서

## 선수지식

- [Eisenstein 급수](eisenstein-series.md)
- [Dedekind zeta 함수](dedekind-zeta.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #group_theory
