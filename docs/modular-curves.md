# 모듈러 곡선

# 개요

**모듈러 곡선(modular curve)** 은 상반평면 $\mathbb H$ 를 합동부분군 $\Gamma$ 로 나눈 몫에 첨점을 채운 곡선이다. 유리수 위의 [타원곡선](elliptic-curves.md) 가운데 위수 $11$ 인 유리점을 갖는 것이 있는지 묻는 문제는, 그런 곡선과 점의 쌍을 모두 모은 공간에 유리점이 있는지 묻는 문제가 된다. 모듈러 곡선이 그 공간이고, 곡선 하나하나의 문제를 이 곡선 위 유리점의 문제로 바꾼다.

# 직관

$\tau\in\mathbb H$ 마다 격자 $\mathbb Z+\mathbb Z\tau$ 를 잡고 복소평면을 그 격자로 나누면 [타원곡선](elliptic-curves.md) $E_\tau=\mathbb C/(\mathbb Z+\mathbb Z\tau)$ 가 나온다. $\tau+1$ 은 같은 격자를 주고, $-1/\tau$ 는 격자에 복소수 $1/\tau$ 를 곱한 격자를 주므로, 셋 다 같은 타원곡선을 준다. 그러므로 복소수 위의 타원곡선 전체는 $\mathbb H$ 를 $\mathrm{SL}\_2(\mathbb Z)$ 로 나눈 몫과 일대일로 대응한다.

위수 $11$ 인 점을 함께 기억하려면 곡선마다 위수 $11$ 인 부분군 $C$ 를 하나 고른 쌍 $(E,C)$ 를 센다. $E_\tau$ 에서 $1/11$ 이 생성하는 부분군을 보존하는 기저 변환만 남기면, 쌍 전체가 $\mathbb H$ 를 더 작은 군으로 나눈 몫과 대응한다. 이 몫에 점 몇 개를 채운 것이 곡선 $X_0(11)$ 이다.

쌍 $(E,C)$ 가 유리수 위에서 정의되면 이 곡선의 유리점이 하나 생긴다. 질문이 곡선 $X_0(11)$ 위의 유리점을 찾는 문제로 바뀌고, 그 답은 곡선의 종수가 정한다. $X_0(11)$ 은 종수가 $1$ 인 타원곡선이고 유리점이 유한 개다.

# 정의

## 합동부분군

양의 정수 $N$ 에 대해

$$
\Gamma_0(N)=\Bigl\lbrace\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in\mathrm{SL}\_2(\mathbb Z):N\mid c\Bigr\rbrace
$$

를 준위 $N$ 의 **합동부분군(congruence subgroup)** $\Gamma_0(N)$ 이라 한다. $\Gamma_0(1)=\mathrm{SL}\_2(\mathbb Z)$ 이고, $\begin{pmatrix}1&0\cr 2&1\end{pmatrix}$ 은 $\Gamma_0(2)$ 에 속하지만 $\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 은 속하지 않는다. 그 지수를

$$
\mu=\lbrack\mathrm{SL}\_2(\mathbb Z):\Gamma_0(N)\rbrack
$$

로 쓴다. $N=11$ 이면 $\mu=12$ 다.

## 모듈러 곡선

$\Gamma_0(N)$ 은 $\mathbb H$ 에 $\tau\mapsto(a\tau+b)/(c\tau+d)$ 로 작용한다. 몫 $Y_0(N)=\Gamma_0(N)\backslash\mathbb H$ 은 콤팩트하지 않다. $\mathbb Q\cup\lbrace\infty\rbrace$ 의 $\Gamma_0(N)$ 궤도를 **첨점(cusp)** 이라 하고, 첨점을 더한 콤팩트 [Riemann 곡면](riemann-surfaces.md)

$$
X_0(N)=\Gamma_0(N)\backslash(\mathbb H\cup\mathbb Q\cup\lbrace\infty\rbrace)
$$

를 준위 $N$ 의 모듈러 곡선이라 한다. $N$ 이 소수이면 첨점은 $0$ 과 $\infty$ 의 궤도 둘이다.

$\mathbb H$ 의 점 가운데 $\pm1$ 이 아닌 원소가 고정하는 점을 **타원점(elliptic point)** 이라 한다. $N=1$ 이면 $i$ 는 $\tau\mapsto -1/\tau$ 가 고정하는 위수 $2$ 의 타원점이고, $\omega=e^{2\pi i/3}$ 은 $\tau\mapsto -1/(\tau+1)$ 이 고정하는 위수 $3$ 의 타원점이다. 위수 $2$ 와 $3$ 인 타원점의 궤도 수를 $\nu_2$, $\nu_3$ 으로, 첨점의 수를 $\nu_\infty$ 로 쓴다.

## Jacobian

$X_0(N)$ 의 Jacobian $J_0(N)=\mathrm{Jac}(X_0(N))$ 은 차원이 $X_0(N)$ 의 종수 $g$ 인 [아벨 다양체](abelian-varieties.md)이고 $\mathbb Q$ 위에서 정의된다. $N=11$ 이면 $J_0(11)=X_0(11)$ 이다.

# 성질

## 개수 공식

$$
\mu=N\prod_{p\mid N}\Big(1+\frac1p\Big),\qquad
\nu_\infty=\sum_{d\mid N}\varphi\big(\gcd(d,N/d)\big)
$$

$$
\nu_2=\begin{cases}0&4\mid N\cr \prod_{p\mid N}\big(1+\left(\frac{-1}p\right)\big)&\text{그 외}\end{cases}
\qquad
\nu_3=\begin{cases}0&9\mid N\cr \prod_{p\mid N}\big(1+\left(\frac{-3}p\right)\big)&\text{그 외}\end{cases}
$$

$\left(\frac{-1}\cdot\right)$ 와 $\left(\frac{-3}\cdot\right)$ 는 각각 법 $4$, 법 $3$ 의 이차 지표다. 위수 $2$ 의 타원점은 허수곱이 $\mathbb Z\lbrack i\rbrack$ 인 $j=1728$ 위에, 위수 $3$ 의 타원점은 허수곱이 $\mathbb Z\lbrack\omega\rbrack$ 인 $j=0$ 위에 놓이고, 그 개수는 $\mathbb Z\lbrack i\rbrack$ 와 $\mathbb Z\lbrack\omega\rbrack$ 에서 $N$ 이 쪼개지는 방식으로 정해진다. 타원점에서는 몫이 국소적으로 $z\mapsto z^2$ 또는 $z\mapsto z^3$ 처럼 접히므로, 좌표를 그만큼 바꿔야 매끄러운 곡면이 된다.

## 종수 공식

$N\ge 1$ 에 대해

$$
g\big(X_0(N)\big)=1+\frac\mu{12}-\frac{\nu_2}4-\frac{\nu_3}3-\frac{\nu_\infty}2
$$

이다. $X_0(1)$ 의 종수가 $0$ 이라는 사실과 덮개 $X_0(N)\to X_0(1)$ 에 [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)을 쓰면 나온다.[^1] $\mu/12$ 는 덮개의 차수에서 오고 나머지 세 항은 분기 보정이다. $N=11$ 이면 $\nu_2=\nu_3=0$, $\nu_\infty=2$ 이므로 $g=1+1-1=1$ 이다.

## 모듈라이 해석

$\mathrm{SL}\_2(\mathbb Z)$ 의 작용은 격자 $\mathbb Z+\mathbb Z\tau$ 의 기저를 바꾸므로 $E_\tau$ 를 바꾸지 않고, $\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H$ 는 타원곡선의 동형류 전체, 곧 $j$ 불변량의 값들이다. $\Gamma_0(N)$ 은 부분군 $\langle1/N\rangle\subset E_\tau$ 를 보존하는 변환이므로

$$
Y_0(N)\ \longleftrightarrow\ \lbrace(E,C):C\subset E\ \text{순환},\ \vert C\vert=N\rbrace/\negthinspace\cong
$$

이다. 이 조건은 대수적으로 쓸 수 있으므로 $X_0(N)$ 이 $\mathbb Q$ 위의 곡선으로 실현된다.

## 무게 2 첨점형식과 미분형식

$f\in S_2(\Gamma_0(N))$ 은 $f(\gamma\tau)=(c\tau+d)^2f(\tau)$ 를 만족하므로 몫 위의 함수가 아니다. 대신 $\omega=f(\tau)\thinspace d\tau$ 는 $d(\gamma\tau)=(c\tau+d)^{-2}d\tau$ 이므로

$$
f(\gamma\tau)\thinspace d(\gamma\tau)=(c\tau+d)^2f(\tau)\cdot(c\tau+d)^{-2}d\tau=f(\tau)\thinspace d\tau
$$

를 만족해 $X_0(N)$ 위의 [미분형식](differential-forms.md)이 되고, 첨점형식 조건은 첨점에서 극이 없다는 조건이 된다.

$$
S_2(\Gamma_0(N))\ \cong\ \Omega^1\big(X_0(N)\big),\qquad \dim S_2(\Gamma_0(N))=g\big(X_0(N)\big)
$$

[모듈러 형식](modular-forms.md) 가운데 무게 $2$ 에서만 이 대응이 성립하고, 다른 무게의 형식은 미분형식의 거듭제곱의 단면이 된다.

## Hecke 대응

$p\nmid N$ 에 대해 [Hecke 작용소](hecke-operators.md) $T_p$ 는 $X_0(N)$ 위의 대응(correspondence)으로 실현되어 $J_0(N)$ 의 자기준동형을 준다.

$$
X_0(Np)\ \xrightarrow{\ \alpha\ }\ X_0(N),\qquad
X_0(Np)\ \xrightarrow{\ \beta\ }\ X_0(N),\qquad
T_p=\beta_\ast\alpha^\ast
$$

모듈라이 해석으로는 $(E,C)\mapsto\sum_{D}(E/D,\thinspace(C+D)/D)$ 이고, 합은 위수 $p$ 인 부분군 $D$ 전부에 걸친다.

## 종수가 작은 레벨

$g=0$ 인 $N$ 은 유한하다.

$$
g\big(X_0(N)\big)=0\iff N\in\lbrace 1,\dots,10,12,13,16,18,25\rbrace
$$

이때 $X_0(N)\cong\mathbb P^1$ 이라 유리점이 무한히 많고, 위수 $N$ 의 순환 부분군을 갖는 $\mathbb Q$ 위의 타원곡선도 무한히 많다.

$g=1$ 인 $N$ 은 $11,14,15,17,19,20,21,24,27,32,36,49$ 의 12 개다. 이때 $X_0(N)$ 자체가 타원곡선이고 $N=11$ 이 가장 작다. $X_0(11)$ 은 도체 $11$ 의 타원곡선 $y^2+y=x^3-x^2-10x-20$ 이고 대응하는 무게 2 새형식이 $\eta(\tau)^2\eta(11\tau)^2$ 다.

[Mazur 의 비틀림점 정리](eisenstein-ideal.md)(Mazur's torsion theorem)는 $\mathbb Q$ 위 타원곡선의 비틀림 부분군이 15 가지뿐이라는 정리다. 증명은 $X_1(N)$ 의 유리점을 다루고, $J_0(N)$ 의 Eisenstein 아이디얼(Eisenstein ideal)로 만든 몫의 유리점이 유한함을 쓴다. Mazur 는 이 결과를 [Faltings 정리](faltings-theorem.md)보다 먼저 얻었다.

## 유리점과 모듈러성

$X_0(N)(\mathbb Q)$ 의 점은 첨점이거나, 위수 $N$ 의 순환 부분군을 유리수 위에서 갖는 타원곡선에서 온다. Mazur 와 Kenku 는 첨점이 아닌 유리점이 있는 $N$ 이 $N\le 19$ 와 $N\in\lbrace 21,25,27,37,43,67,163\rbrace$ 뿐임을 보였다.

도체 $N$ 의 타원곡선 $E$ 가 모듈러라는 것은 $\mathbb Q$ 위에서 정의된 전사 사상

$$
\varphi\colon X_0(N)\longrightarrow E
$$

가 있다는 뜻이다. 이런 사상 가운데 가장 작은 차수를 모듈러 차수(modular degree)라 한다. $N=11$ 이면 $X_0(11)$ 이 타원곡선이고 모듈러 차수는 $1$ 이다.

## 계산 도구

$X_0(N)$ 의 $\mathbb Q$ 위 방정식은 $j$ 와 $j_N=j(N\tau)$ 사이의 모듈러 다항식(modular polynomial) $\Phi_N(x,y)$ 로 얻는다. 계수가 $N$ 에 따라 매우 빨리 커지므로 실제 계산에서는 다른 모형을 쓴다.

$J_0(N)$ 의 Hecke 작용을 유한 계산으로 다루는 표준 도구는 [모듈러 기호](modular-symbols.md)다. 첨점 두 개를 잇는 경로의 [호몰로지](homology.md)류를 형식적으로 다루어 $H_1(X_0(N),\mathbb Z)$ 의 기저와 그 위의 Hecke [행렬](matrices.md)을 정수 선형대수로 계산하며, 새형식 표가 이 방법으로 만들어진다.

# 활용

## 종수 공식의 계산

$\mu$, $\nu_2$, $\nu_3$, $\nu_\infty$ 는 따로 계산되지만 $1+\mu/12-\nu_2/4-\nu_3/3-\nu_\infty/2$ 는 언제나 정수다. $N=11$ 에서 $g=1$ 이므로 $\dim S_2(\Gamma_0(11))=1$ 이고, 그 공간의 생성원이 $\eta(\tau)^2\eta(11\tau)^2$ 다. $N=23$ 은 $g=2$ 인 가장 작은 소수 준위다. $N=37$ 도 $g=2$ 이고, 도체 $37$ 의 타원곡선은 Mordell–Weil 계수가 $1$ 인 타원곡선 가운데 도체가 가장 작다.

## 도구로서의 쓰임

- 비틀림점의 분류. Mazur 의 정리와 그 일반화가 $X_0(N)$ 이나 $X_1(N)$ 의 유리점 계산이다.
- 모듈러성과 Fermat. [Fermat 마지막 정리](fermats-last-theorem.md)의 증명에서 Frey 곡선은 준위 $2$ 의 새형식에서 와야 하는데, $g(X_0(2))=0$ 이라 그런 형식이 없어 모순이 나온다.
- 새형식 계산. 모듈러 기호로 $H_1(X_0(N))$ 과 Hecke 행렬을 구해 새형식을 열거하며, 행렬의 크기를 종수 공식이 미리 준다.
- Galois 표현. $J_0(N)$ 의 $\ell$ 진 Tate 가군(Tate module)이 2 차원 [Galois 표현](galois-representations.md)들로 분해되고, [Eichler–Shimura 관계](eichler-shimura.md)가 $T_p$ 와 Frobenius 를 잇는다.

[^1]: 종수 공식과 첨점·타원점의 개수는 F. Diamond, J. Shurman, *A First Course in Modular Forms* (2005) 3.7절. 모듈라이 해석은 같은 책 1.5절과 8장. 종수 0 과 1 인 레벨 목록은 같은 책의 표와 B. Birch, W. Kuyk 편, *Modular Functions of One Variable IV* (1975) 에 있다. Mazur 의 정리는 B. Mazur, *Modular curves and the Eisenstein ideal*, Publ. IHÉS 47 (1977).

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [타원곡선](elliptic-curves.md)
- [Riemann 곡면](riemann-surfaces.md)

## 더 알아보기

### 계산

- [Schoof–Elkies–Atkin 알고리즘](sea-algorithm.md)
- [모듈러 기호](modular-symbols.md)

### 유리점과 Galois 표현

- [Eichler–Shimura 관계](eichler-shimura.md)
- [Eisenstein 아이디얼과 Mazur 의 비틀림점 정리](eisenstein-ideal.md)
- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)
- [Fontaine–Mazur 추측](fontaine-mazur.md)

### 높은 차원

- [Siegel 모듈라이 다양체](siegel-modular-variety.md)

#number_theory #complex_analysis #algebraic_topology
