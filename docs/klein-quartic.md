# Klein 사차곡선

# 개요

**Klein 사차곡선(Klein quartic)** 은 구멍이 셋인 곡면 가운데 대칭이 가장 많은 곡면이다. 정칠각형 조각 $24$ 개를 꼭짓점마다 셋씩 모이게 붙이면 이 곡면이 되고, 조각을 조각으로 옮기는 회전이 $24\times 7=168$ 개 있다. 구멍이 $g$ 개인 곡면의 대칭은 $84(g-1)$ 개를 넘지 못하고, Klein 사차곡선은 $g=3$ 에서 이 상한 $168$ 을 실제로 달성해 상한을 줄일 수 없음을 보인다.

# 직관

구는 정이십면체의 꼭짓점과 면을 따라 나누면 면을 면으로 옮기는 회전이 $60$ 개 있다. 구멍이 셋인 곡면에는 회전이 몇 개까지 있을 수 있는가. 곡면을 똑같은 정다각형 조각으로 덮고 조각을 조각으로 옮기는 회전을 세면 하한이 나온다.

정칠각형 $24$ 개를 꼭짓점마다 셋씩 모이게 붙인다. 칠각형마다 꼭짓점이 $7$ 개이고 한 꼭짓점을 셋이 나눠 가지므로 꼭짓점은 $24\cdot 7/3=56$ 개다. 변은 둘이 나눠 가지므로 $24\cdot 7/2=84$ 개다. [Euler 지표](euler-characteristic.md)는 $56-84+24=-4=2-2\cdot 3$ 이므로 구멍이 셋인 곡면이 나온다.

어느 조각이든 다른 어느 조각으로 보낼 수 있고, 한 조각을 제자리에서 $7$ 가지로 돌릴 수 있으면 회전은 $24\cdot 7=168$ 개다. 각 꼭짓점에 칠각형 셋이 모이려면 내각이 $2\pi/3$ 이어야 한다. 평면의 정칠각형은 내각이 $5\pi/7$ 로 이보다 크므로, 칠각형을 내각이 더 작아지는 쌍곡평면에 그려 붙인다.

회전 하나가 고정하는 점은 세 종류다. 칠각형의 중심은 $7$ 가지 회전이, 꼭짓점은 $3$ 가지가, 변의 중점은 $2$ 가지가 고정한다. 구멍이 $g\ge 2$ 개인 곡면의 회전은 $84(g-1)$ 개를 넘지 못하고, 이 상한에 닿으려면 고정되는 점의 종류가 꼭 이 $7,3,2$ 여야 한다. $g=3$ 이면 상한이 $168$ 이므로 이 칠각형 곡면이 상한에 닿는다.

# 정의

## 평면 4 차 곡선

**Klein 사차곡선** 은 사영평면 $\mathbb P^2(\mathbb C)$ 에서

$$
F(x,y,z)=x^3y+y^3z+z^3x=0
$$

이 정하는 곡선 $X$ 다. $\partial F/\partial x,\partial F/\partial y,\partial F/\partial z$ 가 동시에 $0$ 인 점이 사영평면에 없으므로 $X$ 는 매끄럽고, 차수 $4$ 인 매끄러운 평면곡선이므로 종수(genus)가 $(4-1)(4-2)/2=3$ 인 콤팩트 [Riemann 곡면](riemann-surfaces.md)이다.

점 $(1:0:0)$ 에서 $F=0$ 이므로 이 점은 $X$ 위에 있다. 이 점에서 기울기는 $(\partial F/\partial x,\partial F/\partial y,\partial F/\partial z)=(3x^2y+z^3,\thinspace x^3+3y^2z,\thinspace y^3+3z^2x)=(0,1,0)$ 이므로 접선은 $y=0$ 이다. 같은 계산으로 $(0:1:0)$, $(0:0:1)$ 도 $X$ 의 매끄러운 점이다.

## 자기동형

$X$ 의 **자기동형(automorphism)** 은 $X$ 에서 $X$ 로 가는 정칙 전단사다. $\zeta=e^{2\pi i/7}$ 로 두면 다음 두 사영변환이 $F$ 를 보존하므로 $X$ 의 자기동형이다.

$$
\sigma:(x:y:z)\mapsto(\zeta x:\zeta^4y:\zeta^2z),\qquad \tau:(x:y:z)\mapsto(y:z:x)
$$

$\sigma$ 를 넣으면 $x^3y$ 는 $\zeta^{3+4}=1$ 배, $y^3z$ 는 $\zeta^{12+2}=1$ 배, $z^3x$ 는 $\zeta^{6+1}=1$ 배가 된다. $\tau$ 는 세 항을 차례로 바꾼다. $\sigma$ 는 위수 $7$, $\tau$ 는 위수 $3$ 이다. $\sigma$ 는 점 $(1:0:0)$, $(0:1:0)$, $(0:0:1)$ 을 고정하고, $\tau$ 는 이 세 점을 차례로 옮긴다. 직관 절의 칠각형 중심이 이런 점이다.

## Hurwitz 곡면

종수 $g\ge 2$ 인 콤팩트 Riemann 곡면의 자기동형군은 위수가 $84(g-1)$ 이하다. 이것이 **Hurwitz 자기동형 정리(Hurwitz's automorphisms theorem)** 이고, [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)으로 증명된다. 위수가 정확히 $84(g-1)$ 인 자기동형군을 갖는 곡면을 **Hurwitz 곡면(Hurwitz surface)** 이라 한다. $X$ 는 $g=3$ 에서 위수 $168=84\cdot 2$ 의 자기동형군을 가지므로 Hurwitz 곡면이다.

# 성질

## 자기동형군

$\sigma,\tau$ 에 위수 $2$ 인 사영변환 하나를 더하면 $\mathrm{PGL}\_3(\mathbb C)$ 안에서 위수 $168$ 인 군이 생성되고, 이 군이 $X$ 의 자기동형군 전체다.[^1] 이 군은 $\mathrm{PSL}\_2(\mathbb F_7)\cong\mathrm{GL}\_3(\mathbb F_2)$ 이고, 위수가 $168=2^3\cdot 3\cdot 7$ 인 단순군이다. [유한 단순군 분류](finite-simple-groups.md)에서 $\mathrm{PSL}\_2(\mathbb F_q)$ 계열의 $q=7$ 경우이며, 동시에 Fano 평면(Fano plane)의 자기동형군이다.

## 분기의 계산

자기동형군 $G$ 가 위수 $84(g-1)$ 이면, Riemann–Hurwitz 공식의 계산에서 몫 $X/G$ 가 구이고 분기값이 셋이며 분기지수(ramification index)가 $2,3,7$ 이어야 한다. $g=3$, $\lvert G\rvert=168$ 에서

$$
2\cdot 3-2=168\Bigl(-2+\Bigl(1-\frac12\Bigr)+\Bigl(1-\frac13\Bigr)+\Bigl(1-\frac17\Bigr)\Bigr)=168\cdot\frac1{42}=4
$$

로 맞는다. 그러므로 안정자 위수가 $7,3,2$ 인 궤도의 크기는 $168/7=24$, $168/3=56$, $168/2=84$ 이고 나머지 점의 궤도는 크기 $168$ 이다. 이 셋이 직관 절의 칠각형 중심, 꼭짓점, 변의 중점이다.

## Hurwitz 곡면의 분류

Hurwitz 곡면은 쌍곡평면 $\mathbb H$ 를 $(2,3,7)$ 삼각군(triangle group)의 유한 지수 꼬임 없는(torsion-free) 정규부분군으로 나눈 몫과 같다. $g=2$ 곡선의 자기동형군은 위수가 $48$ 이하이므로 $g=3$ 이 Hurwitz 상계가 처음 등호로 성립하는 종수이고, 그 종수의 Hurwitz 곡면은 $X$ 하나뿐이다.

## 모듈러 곡선으로서의 실현

$X$ 는 수준 $7$ 의 주합동부분군(principal congruence subgroup) $\Gamma(7)$ 에 대한 [모듈러 곡선](modular-curves.md) $X(7)=\Gamma(7)\backslash\mathbb H^\ast$ 와 동형이다.[^1] $\mathrm{SL}\_2(\mathbb Z)/\lbrace\pm 1\rbrace$ 를 $\Gamma(7)$ 의 상으로 나눈 몫이 $\mathrm{PSL}\_2(\mathbb F_7)$ 이고 이것이 $X(7)$ 에 작용한다. $X(7)\to X(1)$ 은 $j=1728$ 위에서 분기지수 $2$, $j=0$ 위에서 $3$, 첨점 위에서 $7$ 로 분기하며, 이것이 분기의 계산 절의 $(2,3,7)$ 분기다.

## 변곡점

안정자 위수 $7$ 인 $24$ 개의 점은 $X$ 의 변곡점(inflection point)이다. $(1:0:0)$ 에서 접선 $y=0$ 을 넣으면 $F(x,0,z)=z^3x$ 이므로 접선이 이 점에서 곡선과 $3$ 중으로 만난다. 초타원이 아닌 종수 $3$ 곡선에서는 변곡점이 Weierstrass 점(Weierstrass point)과 같으므로, 이 $24$ 개가 $X$ 의 Weierstrass 점 전부다.

# 활용

- Hurwitz 상계가 날카롭다는 것의 최소 예. [초타원곡선](hyperelliptic-curves.md)을 포함한 종수 $2$ 곡선에서는 상계에 닿지 않고 $g=3$ 에서 처음 닿는다.
- 모듈러 곡선과 [Galois 표현](galois-representations.md). $X(7)$ 이 평면 4 차 곡선이라는 사실을 써서 법 $7$ 표현이 같은 타원곡선들을 $X$ 의 뒤틀린 형태(twist) 위 유리점으로 매개한다.
- 쌍곡 타일링. $(2,3,7)$ 삼각형 $336$ 개로 나눈 쌍곡 곡면의 예로, 정칠각형 $24$ 개가 꼭짓점마다 셋씩 모이는 정규 타일링 $\lbrace 7,3\rbrace$ 의 유한 몫이다.

[^1]: S. Levy (ed.), *The Eightfold Way: The Beauty of Klein's Quartic Curve*, Cambridge University Press, 1999. 특히 N. Elkies, The Klein quartic in number theory — 자기동형군의 생성원, $X(7)$ 과의 동형, 변곡점.

# 연관 문서

## 선수지식

- [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #group_theory #number_theory
