# Shimura 대응

# 개요

**Shimura 대응(Shimura correspondence)** 은 반정수 무게 $k+1/2$ 의 [모듈러 형식](modular-forms.md)을 정수 무게 $2k$ 의 모듈러 형식으로 보내고 Hecke 고윳값을 보존하는 사상이다. 정수 $n$ 을 제곱수 세 개의 합으로 쓰는 방법의 수는 $\theta(\tau)^3$ 의 $q^n$ 계수이고, $\theta^3$ 은 무게 $3/2$ 의 형식이다. 반정수 무게에서는 Hecke 작용소가 소수 $p$ 가 아니라 $p^2$ 마다 정의되어, 정수 무게의 이론을 그대로 쓸 수 없다. Shimura 대응은 이런 형식을 Hecke 고윳값이 같은 정수 무게 형식으로 옮겨, 정수 무게의 이론으로 그 계수를 다룬다.

# 직관

$n$ 을 정수 세 개의 제곱의 합으로 쓰는 방법의 수를 $r_3(n)$ 이라 하면 $r_3(1)=6$, $r_3(2)=12$, $r_3(3)=8$, $r_3(5)=24$, $r_3(9)=30$, $r_3(18)=36$ 이다. [theta 급수](theta-series.md) $\theta(\tau)=\sum_{n\in\mathbb Z}q^{n^2}$ 의 세제곱이 $\sum r_3(n)q^n$ 이다. $\theta$ 는 다음 변환식을 만족하고, 제곱근이 붙으므로 무게가 $1/2$ 이며 $\theta^3$ 의 무게는 $3/2$ 다.

$$
\theta\negthinspace\left(\frac{-1}{4\tau}\right)=\sqrt{-2i\tau}\thinspace\theta(\tau)
$$

정수 무게 형식의 Hecke 고유형식에서는 $a_{mn}=a_ma_n$ $(\gcd(m,n)=1)$ 처럼 $n$ 과 $np$ 의 계수가 이어진다. $r_3$ 에는 그런 관계가 없다. $r_3(2)\cdot r_3(3)=96$ 이지만 $r_3(6)=24$ 다. 그 대신 $n$ 에 $p^2$ 을 곱하는 방향에서는 규칙이 있다. 제곱인수가 없는 $n$ 과 $n$ 을 나누지 않는 홀수 소수 $p$ 에 대해 다음이 성립한다.

$$
r_3(p^2n)=\Bigl(p+1-\Bigl(\frac{-n}{p}\Bigr)\Bigr)r_3(n)
$$

$p=3$, $n=1$ 이면 $r_3(9)=(4+1)\cdot 6=30$ 이고, $n=2$ 이면 $r_3(18)=(4-1)\cdot 12=36$ 이다. $n$ 에 따라 달라지는 것은 Legendre 기호뿐이고, 공통으로 남는 수 $p+1$ 은 무게 $2$ 인 [Eisenstein 급수](eisenstein-series.md)의 $q^p$ 계수 $\sigma_1(p)$ 다. 그래서 무게 $3/2$ 의 $\theta^3$ 에 무게 $2$ 의 Eisenstein 급수가 짝지어진다. Shimura 는 1973 년에 무게 $k+1/2$ 의 고유형식마다 이렇게 무게 $2k$ 의 고유형식이 짝지어진다는 것을 증명했다.

# 정의

## 반정수 무게 형식

$\Gamma_0(4)$ 위에서 $\theta$ 를 자기동형 인자로 삼아 정의한다. $k\ge1$ 에 대해

$$
g\negthinspace\left(\frac{a\tau+b}{c\tau+d}\right)
=\left(\frac{\theta(\gamma\tau)}{\theta(\tau)}\right)^{2k+1}g(\tau),
\qquad
\gamma=\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in\Gamma_0(4)
$$

를 만족하고 첨점에서 사라지는 정칙함수를 무게 $k+1/2$ 의 **첨점형식(cusp form of half-integral weight)** 이라 하고, 그 공간을 $S_{k+1/2}(\Gamma_0(4))$ 라 쓴다. 자기동형 인자를 $\theta$ 의 비로 잡아서 제곱근의 부호를 따로 고를 필요가 없다. 첨점에서 사라지는 조건을 빼면 모듈러 형식의 공간 $M_{k+1/2}(\Gamma_0(4))$ 이 되고, 직관 절의 $\theta^3$ 은 $M_{3/2}(\Gamma_0(4))$ 의 원소다. 반정수 무게 형식은 [Weil 표현](weil-representation.md)이 사는 메타플렉틱 군(metaplectic group) $\mathrm{Mp}\_2$ 위의 형식으로도 볼 수 있다.

## Hecke 작용소

소수 $p$ 가 홀수일 때 [Hecke 작용소](hecke-operators.md) $T(p^2)$ 는 계수에 다음과 같이 작용한다.

$$
\bigl(T(p^2)g\bigr)(n)
=c(p^2n)+\left(\frac{(-1)^kn}{p}\right)p^{k-1}c(n)+p^{2k-1}c(n/p^2)
$$

가운데 항의 Legendre 기호가 정수 무게와의 차이다. $k=1$, $g=\theta^3$ 이고 $n$ 이 제곱인수가 없으며 $p\nmid n$ 이면 셋째 항이 $0$ 이어서, 직관 절의 관계식은 $T(p^2)\theta^3=(p+1)\theta^3$ 이다.

## Shimura 대응

$k\ge 2$ 이고 $g\in S_{k+1/2}(\Gamma_0(4N))$ 이 모든 $T(p^2)$ 의 고유형식이며 고윳값이 $\lambda_p$ 라 하자. $S_{2k}(\Gamma_0(2N))$ 안에 고유형식 $f$ 가 존재해 모든 $p\nmid 2N$ 에서 $a_p(f)=\lambda_p$ 이며, 이 $f$ 를 $\mathrm{Sh}(g)$ 라 쓴다. 이 사상 $g\mapsto f$ 가 **Shimura 대응(Shimura correspondence)** 이다.

## Kohnen 플러스 공간

$$
S^+\_{k+1/2}(\Gamma_0(4))
=\Bigl\lbrace g=\sum c(n)q^n:\ c(n)=0\ \text{ unless }\ (-1)^kn\equiv0,1\ (\mathrm{mod}\ 4)\Bigr\rbrace
$$

이 부분공간을 **Kohnen 플러스 공간(Kohnen plus space)** 이라 한다. $(-1)^kn$ 이 판별식이 될 수 있는 $n$ 의 계수만 남기는 조건이다. Kohnen 은 이 부분공간 위에서 Shimura 대응이 Hecke 작용과 교환하는 동형임을 증명했다.

$$
S^+\_{k+1/2}(\Gamma_0(4))\ \cong\ S_{2k}(\mathrm{SL}\_2(\mathbb Z))
$$

# 성질

## 계수의 Dirichlet 급수

$g\leftrightarrow f$ 이고 $t$ 가 제곱인수가 없으면, $m$ 방향의 [Dirichlet 급수](dirichlet-series.md)가 $f$ 의 L 함수로 적힌다.

$$
\sum_{m\ge1}\frac{c(tm^2)}{m^s}=c(t)\thinspace\frac{L(f,s)}{L(s-k+1,\chi_t)}
$$

$\chi_t$ 는 $(-1)^kt$ 에 붙은 이차 지표다. 직관 절의 관계식은 $k=1$, $t=n$ 에서 이 등식의 $p$ 인자를 비교한 것이다. Shimura 의 증명은 이런 급수의 해석적 성질을 [Rankin–Selberg 적분](rankin-selberg.md)으로 얻고 Weil 의 역정리(Weil's converse theorem)를 적용한다.

Shintani 와 Niwa 는 theta 올림(theta lift)으로 다른 증명을 주었다. 쌍대쌍(dual pair) $(\mathrm{Mp}\_2,\mathrm{PGL}\_2)$ 에 Weil 표현을 제한하면 두 [군의 표현](group-representations.md) 사이의 대응이 나오고, 그 대응이 Shimura 대응이다.

## 차원 일치

Kohnen 의 동형으로 양쪽 차원이 같다. 짝수 $w\ge 4$ 에서 오른쪽은 다음 공식으로 계산된다.

$$
\dim S_w(\mathrm{SL}\_2(\mathbb Z))=
\begin{cases}
\lfloor w/12\rfloor-1, & w\equiv2\pmod{12}\cr
\lfloor w/12\rfloor, & \text{그 밖에}
\end{cases}
$$

| k | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\dim S_{2k}$ | $0$ | $1$ | $0$ | $1$ | $1$ | $1$ | $1$ | $2$ | $1$ | $2$ |

가장 작은 비자명 경우는 $k=6$ 이다. 무게 $13/2$ 의 플러스 공간이 1 차원이고 그 유일한 형식이 무게 12 의 $\Delta$ 에 대응한다. $k=7$ 에서는 양쪽 차원이 동시에 0 이 되어, 무게 14 에 첨점형식이 없다는 사실이 반정수 무게 쪽의 소멸로 옮겨간다.

## 플러스 조건

플러스 조건은 $2$ 에서의 국소 조건이다. 이 조건을 붙인 공간에서 레벨 $1$ 의 정수 무게 공간과의 동형이 성립한다.

Kohnen–Zagier 는 $S_{k+1/2}$ 에서 플러스 공간으로 떨어뜨리는 Hecke 형 사영자를 명시적으로 구성했다.

## Waldspurger 정리와의 접속

계수 $c(\vert D\vert)$ 의 뜻은 [Waldspurger 정리](waldspurger-formula.md)(Waldspurger theorem)가 준다.

플러스 공간의 레벨 $1$ 경우, $(-1)^kD\gt 0$ 인 기본판별식 $D$ 에 대해 Kohnen–Zagier 공식(Kohnen–Zagier formula)은 다음과 같다.

$$
\frac{c(\vert D\vert)^2}{\langle g,g\rangle}=\frac{(k-1)!}{\pi^k}\vert D\vert^{k-1/2}\thinspace\frac{L(f,\chi_D,k)}{\langle f,f\rangle}
$$

$L(f,\chi_D,s)$ 의 중심은 $s=k$ 다. $m$ 방향의 계수는 $f$ 의 Hecke 고윳값으로 정해지고, $D$ 방향의 계수는 $f$ 의 이차 뒤틀림의 중심값을 준다.

## Cohen–Eisenstein 급수

Cohen 이 만든 무게 $k+1/2$ 의 Eisenstein 급수는 계수가 일반화된 류수 $H(k,N)$ 이고, Shimura 대응으로 무게 $2k$ 의 Eisenstein 급수에 대응한다. $k=1$ 에서는 Hurwitz 류수가 계수인 무게 $3/2$ 의 형식이 되고, Gauss 의 세 제곱수 정리에서 $r_3(n)$ 이 류수로 적히는 것과 [Siegel–Weil 공식](siegel-weil.md)에서 $\theta^3$ 이 Eisenstein 급수인 것이 같은 사실이다.

# 활용

## 중심값의 대량 계산

$f$ 를 고정하고 $D$ 를 움직이며 $L(1/2,f\otimes\chi_D)$ 를 구할 때, $L$ 함수 쪽에서는 $D$ 마다 급수를 따로 잘라야 한다. Shimura 대응과 Waldspurger 를 쓰면 대응하는 $g$ 의 $q$ 전개를 한 번 계산해 모든 $D$ 의 답을 얻는다. $g$ 는 theta 급수의 조합으로 만들어져 정수 연산만 필요하다. 이 방식이 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)(Birch–Swinnerton-Dyer conjecture, BSD)의 수치 검증과 이차 뒤틀림 족의 계산에 쓰인다.

## 합동수 문제

$n$ 이 직각삼각형의 넓이가 될 수 있는지는 [타원곡선](elliptic-curves.md) $y^2=x^3-n^2x$ 의 계수 문제이고 중심값의 비소멸 문제다. Tunnell 은 이를 삼항 이차형식의 표현수 비교로 바꾸었고, 그 변환이 Shimura 대응이다. 무게 $3/2$ 의 명시적 theta 급수의 계수를 세면 판정이 끝나며, BSD 추측을 가정하면 완전한 판정 알고리즘이 된다.

## 계수의 산술

반정수 무게 계수의 크기 추정(Iwaniec, Duke)은 이차형식의 표현 문제와 등분포 문제에 쓰인다. Kohnen–Zagier 공식으로, 기본판별식 $D$ 에서 $c(\vert D\vert)\ll\vert D\vert^{k/2-1/4+\varepsilon}$ 은 이차 뒤틀림 L 함수의 중심값에 대한 Lindelöf 가설(Lindelöf hypothesis)과 동치다.

# 연관 문서

## 선수지식

- [Weil 표현](weil-representation.md)
- [Hecke 작용소](hecke-operators.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #computation
