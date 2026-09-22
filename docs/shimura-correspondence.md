# Shimura 대응과 반정수 무게 형식

# 개요

[모듈러 형식](modular-forms.md)의 무게는 보통 정수이지만, [theta 급수](theta-series.md) $\theta(\tau)=\sum_{n\in\mathbb Z}q^{n^2}$ 의 무게는 변환식에 붙는 제곱근 때문에 $1/2$ 이다.

$$
\theta\negthinspace\left(\frac{-1}{4\tau}\right)=\sqrt{-2i\tau}\thinspace\theta(\tau)
$$

[Weil 표현](weil-representation.md)에서 이 제곱근은 메타플렉틱 2 겹 덮개의 흔적이고, 반정수 무게 형식은 $\mathrm{Mp}\_2$ 위의 형식이다.

Shimura 는 1973 년에 반정수 무게 형식과 정수 무게 형식의 대응을 세웠다. 무게 $k+1/2$ 의 Hecke 고유형식 $g$ 마다 무게 $2k$ 의 고유형식 $f$ 가 대응하고 Hecke 고윳값이 일치한다.

$$
T(p^2)\thinspace g=\lambda_p\thinspace g
\quad\Longrightarrow\quad
T(p)\thinspace f=\lambda_p\thinspace f
$$

Kohnen 은 **플러스 공간**이라는 부분공간 위에서 이 대응을 동형으로 다듬었고, 그 위에서 [Waldspurger 정리](waldspurger-formula.md)가 $g$ 의 Fourier 계수와 $f$ 의 중심 $L$ 값을 잇는다. 세 정리를 합치면 반정수 무게 형식의 계수 계산으로 정수 무게 형식의 $L$ 값을 얻는다.

# 직관

## $T(p^2)$ 의 자리

정수 무게에서 $T(p)$ 는 계수 $a_n$ 을 $a_{np}$ 와 $a_{n/p}$ 로 옮긴다. 반정수 무게 형식의 계수 $c(n)$ 은 $n$ 의 판별식 부분에 민감하므로 같은 조작이 통하지 않는다.

$n=D\thinspace m^2$ 으로 쪼개면($D$ 는 제곱인수가 없는 부분) $n\mapsto np$ 는 $D$ 를 바꾸어 서로 다른 판별식 세계를 뒤섞고, $n\mapsto np^2$ 는 $D$ 를 고정한 채 $m$ 만 움직인다.

$D$ 방향은 뒤틀림을 고르고 $m$ 방향은 Hecke 구조를 담는다. Shimura 대응은 $D$ 를 고정하고 $m$ 방향의 Dirichlet 급수를 보는 것이다.

$$
\sum_{m\ge1}\frac{c(|D|m^2)}{m^s}
\ =\ c(|D|)\cdot\frac{L(s-k+1,\chi_D)}{\zeta(2s-2k+2)}\cdot\text{(}f\text{ 의 } L\text{ 함수 인자)}
$$

오른쪽에 나타나는 Euler 인자가 무게 $2k$ 형식의 것이다.

## 대응의 근거

Shimura 의 증명은 [Rankin–Selberg 적분](rankin-selberg.md)으로 위 Dirichlet 급수의 해석적 성질을 확보하고 Weil 의 역정리를 적용한다.

Shintani 와 Niwa 는 theta 올림으로 다른 증명을 주었다. 쌍대쌍 $(\mathrm{Mp}\_2,\mathrm{PGL}\_2)$ 에 Weil 표현을 제한하면 두 군의 표현 사이에 사전이 생기고, 그 사전이 Shimura 대응이다.

# 정의

## 반정수 무게 형식

$\Gamma_0(4)$ 위에서 $\theta$ 를 자기동형 인자로 삼아 정의한다. $k\ge1$ 에 대해

$$
g\negthinspace\left(\frac{a\tau+b}{c\tau+d}\right)
=\left(\frac{\theta(\gamma\tau)}{\theta(\tau)}\right)^{2k+1}g(\tau),
\qquad
\gamma=\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in\Gamma_0(4)
$$

를 만족하고 첨점에서 사라지는 정칙함수가 무게 $k+1/2$ 의 첨점형식이며, 그 공간을 $S_{k+1/2}(\Gamma_0(4))$ 라 쓴다. 제곱근 모호성은 자기동형 인자의 $\theta$ 가 흡수한다.

## Hecke 작용소

소수 $p$ 가 홀수일 때 $T(p^2)$ 는 계수에 다음과 같이 작용한다.

$$
\bigl(T(p^2)g\bigr)(n)
=c(p^2n)+\left(\frac{(-1)^kn}{p}\right)p^{k-1}c(n)+p^{2k-1}c(n/p^2)
$$

가운데 항의 Legendre 기호가 정수 무게와의 차이이며, $n$ 의 판별식 부분이 작용소에 들어와 있다.

## Shimura 대응

$g\in S_{k+1/2}(\Gamma_0(4N))$ 이 모든 $T(p^2)$ 의 고유형식이고 고윳값이 $\lambda_p$ 라 하자. $S_{2k}(\Gamma_0(2N))$ 안에 고유형식 $f$ 가 존재해 모든 $p\nmid 2N$ 에서 $a_p(f)=\lambda_p$ 이며, 이 $f$ 를 $\mathrm{Sh}(g)$ 라 쓴다.

## Kohnen 플러스 공간

$$
S^+\_{k+1/2}(\Gamma_0(4))
=\Bigl\lbrace g=\sum c(n)q^n:\ c(n)=0\ \text{ unless }\ (-1)^kn\equiv0,1\ (\mathrm{mod}\ 4)\Bigr\rbrace
$$

계수를 기본판별식이 될 수 있는 $n$ 에만 남기는 조건이다. Kohnen 의 정리는 이 부분공간 위에서 Shimura 대응이 Hecke 작용과 교환하는 동형이라는 것이다.

$$
S^+\_{k+1/2}(\Gamma_0(4))\ \cong\ S_{2k}(\mathrm{SL}\_2(\mathbb Z))
$$

# 성질

## 차원 일치

동형의 첫 귀결은 양쪽 차원이 같다는 것이다. 오른쪽은 고전적인 공식으로 계산된다.

$$
\dim S_w(\mathrm{SL}\_2(\mathbb Z))=
\begin{cases}
\lfloor w/12\rfloor-1, & w\equiv2\pmod{12}\cr
\lfloor w/12\rfloor, & \text{그 밖에}
\end{cases}
$$

| $k$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ | $13$ | $14$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\dim S_{2k}$ | $0$ | $1$ | $0$ | $1$ | $1$ | $1$ | $1$ | $2$ | $1$ | $2$ |

가장 작은 비자명 경우는 $k=6$ 이다. 무게 $13/2$ 의 플러스 공간이 1 차원이고 그 유일한 형식이 무게 12 의 $\Delta$ 에 대응한다. $k=7$ 에서는 양쪽 차원이 동시에 0 이 되어, 무게 14 에 첨점형식이 없다는 사실이 반정수 무게 쪽의 소멸로 옮겨간다.

## 플러스 조건

플러스 조건은 $\mathrm{Mp}\_2$ 의 국소 표현이 2 에서 비분기적으로 행동하는 조건에 해당하고, theta 올림이 내놓는 형식들이 이 조건을 만족한다. 조건이 없으면 대응이 다대일이 되어 Hecke 고유공간이 여러 형식을 담고, 조건을 붙이면 하나만 남는다.

Kohnen–Zagier 는 $S_{k+1/2}$ 에서 플러스 공간으로 떨어뜨리는 Hecke 형 사영자를 명시적으로 구성했다.

## Waldspurger 정리와의 접속

계수 $c(|D|)$ 의 뜻은 [Waldspurger 정리](waldspurger-formula.md)가 준다.

$$
|c(|D|)|^2\ \sim\ |D|^{k-1/2}\thinspace\frac{L\negthinspace\left(\tfrac12,\ \mathrm{Sh}(g)\otimes\chi_D\right)}{\langle f,f\rangle}
$$

$m$ 방향이 Hecke 구조, 곧 $f$ 자신을 주고 $D$ 방향이 $f$ 의 이차 뒤틀림 중심값을 준다. 반정수 무게 형식 하나가 $f$ 의 뒤틀림 족 전체의 중심값을 계수에 담는다.

## Cohen–Eisenstein 급수

Cohen 이 만든 무게 $k+1/2$ 의 [Eisenstein 급수](eisenstein-series.md)는 계수가 Hurwitz 류수 $H(k-1,|D|)$ 이고, Shimura 대응으로 무게 $2k$ 의 Eisenstein 급수에 대응한다. 류수가 반정수 무게 형식의 계수로 나타나는 자리이며, Gauss 의 세 제곱수 정리와 [Siegel–Weil 공식](siegel-weil.md)이 만난다.

# 활용

## 중심값의 대량 계산

$f$ 를 고정하고 $D$ 를 움직이며 $L(1/2,f\otimes\chi_D)$ 를 구할 때, $L$ 함수 쪽에서는 $D$ 마다 급수를 따로 잘라야 한다. Shimura 대응과 Waldspurger 를 쓰면 대응하는 $g$ 의 $q$ 전개를 한 번 계산해 모든 $D$ 의 답을 얻는다. $g$ 는 theta 급수의 조합으로 만들어져 정수 연산만 필요하며, 이 방식이 BSD(Birch–Swinnerton-Dyer) 수치 검증과 이차 뒤틀림 족 연구의 표준 도구다.

## 합동수 문제

$n$ 이 직각삼각형의 넓이가 될 수 있는지는 타원곡선 $y^2=x^3-n^2x$ 의 계수 문제이고 중심값의 비소멸 문제다. Tunnell 은 이를 삼항 이차형식의 표현수 비교로 바꾸었고, 그 변환이 Shimura 대응이다. 무게 $3/2$ 의 명시적 theta 급수의 계수를 세면 판정이 끝나며, BSD 추측을 가정하면 완전한 판정 알고리즘이 된다.

## 계수의 산술

반정수 무게 계수의 크기 추정(Iwaniec, Duke)은 이차형식의 표현 문제와 등분포 문제에 쓰이고, 부호 변화와 비소멸 통계는 뒤틀림 족의 계수 분포로 번역된다. 정수 무게에서 Deligne 경계가 최선인 것과 달리 반정수 무게의 최적 경계는 열린 문제이며, 세 제곱수 문제 같은 물음의 유효 판정을 막는 장애다.

# 연관 문서

## 선수지식

- [Weil 표현과 theta 대응](weil-representation.md)
- [Hecke 작용소](hecke-operators.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #computation
