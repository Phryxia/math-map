# Paraproduct

# 개요

**Paraproduct(Bony paraproduct)** 는 두 함수의 곱을 어느 쪽 인수가 더 높은 주파수를 갖는지에 따라 세 부분으로 가른 것이다. $\cos(10x)$ 에 $\cos x$ 를 곱하면 $\tfrac12\cos(11x)+\tfrac12\cos(9x)$ 가 되어 곱의 진동은 빠른 인수 $\cos(10x)$ 를 따른다. $\cos(10x)$ 에 자기 자신을 곱하면 $\tfrac12+\tfrac12\cos(20x)$ 가 되어, 빠른 두 진동에서 진동하지 않는 상수 $\tfrac12$ 가 생긴다.

곱의 매끄러움을 재려면 이 두 경우를 따로 다루어야 한다. Paraproduct 분해는 앞의 경우를 두 paraproduct 로, 뒤의 경우를 나머지 항으로 모아 각각의 노름을 [Besov 공간](besov-spaces.md)에서 잰다.

# 직관

$s\gt 0$ 이고 $f$ 가 $H^s(\mathbb R^n)$ 에 들고 $g$ 가 유계일 때 곱 $fg$ 가 $H^s$ 에 드는지 묻는다. $s$ 가 정수이면 곱의 미분 법칙으로 $fg$ 의 도함수를 $f$ 와 $g$ 의 도함수로 적을 수 있지만, $s$ 가 정수가 아니면 그 법칙이 없다. $s=1/2$ 이고 $g$ 가 계단 함수처럼 끊긴 함수이면 $g$ 의 도함수는 함수조차 아니다.

[Littlewood–Paley 이론](littlewood-paley.md)대로 두 함수를 띠 조각으로 가르면 곱은 조각의 곱 $\Delta_if\thinspace\Delta_jg$ 를 모든 $i,j$ 에 대해 더한 것이다. 개요의 계산처럼 $i$ 가 $j$ 보다 훨씬 작으면 조각의 곱의 주파수는 $2^j$ 근처에 머문다. 그 조각의 크기는 $\Vert g\Vert\_{L^\infty}$ 에 $\Delta_jf$ 의 크기를 곱한 것 이하이므로, $f$ 의 매끄러움이 그대로 곱으로 옮겨 간다.

$i$ 와 $j$ 가 거의 같으면 두 높은 주파수가 서로 지워 $0$ 근처의 낮은 주파수가 생길 수 있다. 높은 띠의 조각에서 나온 크기가 낮은 띠에 쌓이므로, 높은 띠의 조각이 빨리 줄어야, 곧 $s\gt 0$ 이어야 이 합이 다시 잡힌다. 세 부분을 따로 재는 것이 paraproduct 분해다.

# 정의

## 저주파 부분

[Besov 공간](besov-spaces.md) 문서의 비동차 이진 분해에서 $\chi$ 의 받침을 $\vert\xi\vert\le 4/3$ 로, $\chi=1$ 인 범위를 $\vert\xi\vert\le 3/4$ 로 고른다. 그러면 $j\ge 1$ 인 조각 $\Delta_j$ 의 받침은 $\tfrac38 2^j\le\vert\xi\vert\le\tfrac43 2^j$ 다.

$j\ge 1$ 에서 $j-1$ 번째 띠까지의 조각을 모두 더한 것을 $f$ 의 **저주파 부분(low-frequency part)** 이라 한다.

$$
S_jf=\sum_{i\le j-1}\Delta_if
$$

$S_jf$ 는 [Fourier 변환](fourier-transform.md)에 $\chi(2^{-(j-1)}\xi)$ 를 곱한 것이므로 주파수가 $\vert\xi\vert\le\tfrac23 2^j$ 안에 있다. $S_j$ 는 $L^1$ 노름이 $j$ 에 무관한 핵과의 합성곱이어서 $\Vert S_jf\Vert\_{L^\infty}\le C\Vert f\Vert\_{L^\infty}$ 다.

## Paraproduct 와 나머지 항

$g$ 를 인수로 한 $f$ 의 **paraproduct** 는 다음이다.

$$
T_gf=\sum_{j\ge 2}S_{j-1}g\thinspace\Delta_jf
$$

각 항은 $i\le j-2$ 인 조각 $\Delta_ig$ 와 $\Delta_jf$ 의 곱을 모은 것이다. 띠 번호가 둘 이상 차이 나는 쌍만 들어 있으므로, $T_gf$ 는 곱에서 $f$ 가 높은 주파수를 맡은 부분이다.

띠 번호의 차이가 $1$ 이하인 쌍을 모은 것을 **나머지 항(remainder)** 이라 한다.

$$
R(f,g)=\sum_{\vert i-j\vert\le 1}\Delta_if\thinspace\Delta_jg
$$

모든 쌍 $(i,j)$ 는 $i\le j-2$, $j\le i-2$, $\vert i-j\vert\le 1$ 가운데 꼭 하나에 들므로 다음 **Bony 분해(Bony decomposition)** 가 성립한다[^1].

$$
fg=T_gf+T_fg+R(f,g)
$$

개요의 $\cos(10x)\cos x$ 에서 $\cos(10x)$ 의 주파수는 $\cos x$ 의 열 배다. 조각 하나의 받침은 양 끝의 비가 $32/9$ 이므로 두 주파수가 드는 띠의 번호는 둘 이상 차이 나고, 곱은 $T_{\cos x}\cos(10x)$ 에 든다. $\cos(10x)^2$ 은 같은 띠의 쌍이라 $R$ 에 들고, 그 상수항 $\tfrac12$ 가 나머지 항에서 생긴다.

# 성질

## 주파수 받침

$S_{j-1}g\thinspace\Delta_jf$ 의 주파수는 $\vert\xi\vert\le\tfrac13 2^j$ 인 점과 $\tfrac38 2^j\le\vert\eta\vert\le\tfrac43 2^j$ 인 점의 합이므로 고리 $\tfrac1{24}2^j\le\vert\zeta\vert\le\tfrac53 2^j$ 안에 있다. 이 고리와 겹치는 띠는 $j-5$ 번째부터 $j+2$ 번째까지뿐이다.

$\Delta_if\thinspace\Delta_jg$ 에서 $\vert i-j\vert\le 1$ 이면 주파수는 반지름 $4\cdot 2^j$ 인 공 안에 있다. 공은 $0$ 을 포함하므로 높은 $j$ 의 항이 낮은 띠에도 들어간다.

## Paraproduct 의 유계성

정리. 모든 $s\in\mathbb R$ 과 $1\le p,q\le\infty$ 에서 다음이 성립한다[^2].

$$
\Vert T_gf\Vert\_{B^s_{p,q}}\le C\Vert g\Vert\_{L^\infty}\Vert f\Vert\_{B^s_{p,q}}
$$

증명의 요지. 각 항은 $\Vert S_{j-1}g\thinspace\Delta_jf\Vert\_{L^p}\le C\Vert g\Vert\_{L^\infty}\Vert\Delta_jf\Vert\_{L^p}$ 를 만족한다. 각 항의 주파수가 고리 안에 있으므로 $\Delta_k T_gf$ 에는 $\vert j-k\vert\le 5$ 인 항만 들어가고, $2^{ks}$ 와 $2^{js}$ 는 상수배 안에서 같다. 그러므로 $s$ 의 부호와 무관하게 Besov 노름의 정의로 부등식이 나온다.

## 나머지 항의 유계성

정리. $s\gt 0$ 이고 $1\le p,q\le\infty$ 이면 다음이 성립한다[^2].

$$
\Vert R(f,g)\Vert\_{B^s_{p,q}}\le C\Vert g\Vert\_{L^\infty}\Vert f\Vert\_{B^s_{p,q}}
$$

증명의 요지. 주파수 받침에서 $\Delta_kR(f,g)$ 에는 $j\ge k-3$ 인 항만 들어간다. 그 항의 $L^p$ 노름은 $C\Vert g\Vert\_{L^\infty}\Vert\Delta_jf\Vert\_{L^p}$ 이하이므로 다음을 얻는다.

$$
2^{ks}\Vert\Delta_kR(f,g)\Vert\_{L^p}\le C\Vert g\Vert\_{L^\infty}\sum_{j\ge k-3}2^{-(j-k)s}\thinspace 2^{js}\Vert\Delta_jf\Vert\_{L^p}
$$

$s\gt 0$ 이면 무게 $2^{-(j-k)s}$ 의 합이 유한하므로, 수열의 합성곱에 대한 [Young 의 합성곱 부등식](young-convolution-inequality.md)으로 $\ell^q$ 노름이 잡힌다.

## 곱의 추정

따름정리. $s\gt 0$ 이고 $1\le p,q\le\infty$ 이면 다음이 성립한다. 그러므로 $B^s_{p,q}\cap L^\infty$ 는 곱에 대해 닫혀 있다.

$$
\Vert fg\Vert\_{B^s_{p,q}}\le C\bigl(\Vert f\Vert\_{L^\infty}\Vert g\Vert\_{B^s_{p,q}}+\Vert g\Vert\_{L^\infty}\Vert f\Vert\_{B^s_{p,q}}\bigr)
$$

Bony 분해의 세 항에 위의 두 정리를 쓴다. $p=q=2$ 이면 $H^s\cap L^\infty$ 가 곱에 대해 닫혀 있다는 것이고, $s\gt n/2$ 이면 Besov 공간 문서의 Bernstein 매장으로 $H^s\subset L^\infty$ 이므로 $H^s$ 자체가 곱에 대해 닫혀 있다.

## 음의 차수에서 나머지 항

정리. $a\gt 0$ 이면 $B^{-a}\_{\infty,\infty}(\mathbb R)$ 에서 유계인 함수열 $f_N$ 으로서 $f_N^2$ 의 저주파 조각 $\Delta_0(f_N^2)$ 의 상한 노름이 $2^{2Na}$ 의 상수배로 커지는 것이 있다.

증명의 요지. $\hat\eta$ 의 받침이 $\vert\xi\vert\le 1$ 인 Schwartz 함수 $\eta$ 로 $f_N(x)=2^{Na}\eta(x)\cos(2^Nx)$ 라 둔다. $f_N$ 의 주파수는 $2^N$ 에서 $1$ 이내이므로 조각 몇 개에만 있고, 그 조각의 상한 노름은 $2^{Na}$ 의 상수배라 $\Vert f_N\Vert\_{B^{-a}\_{\infty,\infty}}$ 가 유계다. $f_N^2$ 에는 저주파 항 $\tfrac12 2^{2Na}\eta^2$ 이 있다.

이 예는 개요의 $\cos(10x)^2$ 의 상수항을 크게 키운 것이다. 매끄러움의 합이 음수인 두 분포의 곱은 나머지 항 때문에 정의되지 않는다.

# 활용

- 비선형 편미분방정식의 에너지 추정. 곱의 추정과 같은 꼴의 교환자 추정(commutator estimate)이 Kato–Ponce 부등식(Kato–Ponce inequality)이다[^3]. $s\gt n/2+1$ 인 $H^s$ 에서 [유체의 Euler 방정식](euler-equations-fluid.md)과 [Navier–Stokes 방정식](navier-stokes-equations.md)의 국소 해를 만드는 에너지 방법에 쓴다.
- 준미분 계산(paradifferential calculus). 매끄러운 $F$ 와 $u\in B^s_{p,q}$ 에서 $F(u)-T_{F'(u)}u$ 가 $u$ 보다 매끄럽다는 Bony 의 준선형화(paralinearization)가 비선형 방정식을 계수가 $u$ 에 의존하는 선형 방정식으로 바꾸고, 특이점의 전파를 선형 방정식처럼 다룬다[^1].
- 특이적분의 판정. 함수 $b$ 로 만든 paraproduct 는 $T(1)=b$ 인 [Calderón–Zygmund 이론](calderon-zygmund-theory.md)의 작용소다. David–Journé 의 $T(1)$ 정리($T(1)$ theorem)는 일반 작용소에서 이 paraproduct 를 빼서 $T(1)=0$ 인 경우로 줄인다[^4].
- 특이 확률 편미분방정식. 백색잡음을 받는 방정식에서는 해와 잡음의 매끄러움 합이 음수여서 나머지 항이 정의되지 않는다. Gubinelli–Imkeller–Perkowski 의 paracontrolled 분포(paracontrolled distribution)는 해를 잡음의 paraproduct 와 더 매끄러운 부분으로 적어 나머지 항을 따로 정의한다[^5].

[^1]: J.-M. Bony, "Calcul symbolique et propagation des singularités pour les équations aux dérivées partielles non linéaires", Annales scientifiques de l'École Normale Supérieure **14** (1981), 209–246.

[^2]: H. Bahouri, J.-Y. Chemin, R. Danchin, *Fourier Analysis and Nonlinear Partial Differential Equations*, Springer (2011), Chapter 2.

[^3]: T. Kato, G. Ponce, "Commutator estimates and the Euler and Navier–Stokes equations", Communications on Pure and Applied Mathematics **41** (1988), 891–907.

[^4]: G. David, J.-L. Journé, "A boundedness criterion for generalized Calderón–Zygmund operators", Annals of Mathematics **120** (1984), 371–397.

[^5]: M. Gubinelli, P. Imkeller, N. Perkowski, "Paracontrolled distributions and singular PDEs", Forum of Mathematics, Pi **3** (2015), e6.

# 연관 문서

## 선수지식

- [Besov 공간](besov-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #probability
