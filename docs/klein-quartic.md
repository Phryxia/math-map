# Klein 사차곡선

# 개요

**Klein 사차곡선(Klein quartic)** 은 구멍이 셋인 곡면 가운데 대칭이 가장 많은 곡면이다. 정칠각형 조각 $24$ 개를 꼭짓점마다 셋씩 모이게 붙이면 이 곡면이 되고, 조각을 조각으로 옮기는 회전이 $24\times 7=168$ 개 있다. 구멍이 $g$ 개인 곡면의 대칭은 $84(g-1)$ 개를 넘지 못하고, Klein 사차곡선은 $g=3$ 에서 이 상한 $168$ 을 실제로 달성해 상한을 줄일 수 없음을 보인다.

# 직관

Klein 사차곡선은 사영평면에서 방정식

$$
x^3y+y^3z+z^3x=0
$$

이 정하는 종수 $3$ 의 콤팩트 [Riemann 곡면](riemann-surfaces.md)이다. 자기동형군이 위수 $168$ 인 단순군 $\mathrm{PSL}\_2(\mathbb F_7)$ 이고, $168=84(3-1)$ 이므로 [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)에서 나오는 Hurwitz 상계 $84(g-1)$ 의 등호가 성립한다. 등호가 성립하는 곡선 가운데 종수가 가장 작다.

종수 $g$ 인 곡선의 자기동형군 $G$ 가 $84(g-1)$ 개의 원소를 가지려면, Riemann–Hurwitz 공식의 계산에서 몫 $X/G$ 가 구이고 분기값이 셋이며 분기지수가 $2,3,7$ 이어야 한다. 실제로 $g=3$ 에서

$$
2\cdot 3-2=168\Bigl(-2+\Bigl(1-\frac12\Bigr)+\Bigl(1-\frac13\Bigr)+\Bigl(1-\frac17\Bigr)\Bigr)=168\cdot\frac1{42}=4
$$

로 맞는다. 그러면 곡선 위에서 분기지수 $7$ 인 점이 $168/7=24$ 개, $3$ 인 점이 $56$ 개, $2$ 인 점이 $84$ 개다.

이 세 종류의 점으로 곡면을 나눌 수 있다. 분기지수 $7$ 인 점을 중심으로 하는 칠각형 $24$ 개를 꼭짓점 $56$ 개와 변 $84$ 개에서 붙이고, 변의 중점이 분기지수 $2$ 인 점이다. [Euler 지표](euler-characteristic.md)가 $56-84+24=-4=2-2\cdot 3$ 이므로 종수 $3$ 곡면이 나온다. 각 꼭짓점에 칠각형 셋이 모이려면 내각이 $2\pi/3$ 이어야 하고, 평면에서는 정칠각형의 내각이 $5\pi/7$ 이므로 칠각형을 쌍곡평면에 그려야 한다.

# 정의

## 평면 4 차 곡선

$\mathbb P^2(\mathbb C)$ 에서 $F(x,y,z)=x^3y+y^3z+z^3x$ 의 영점집합을 $X$ 라 한다. $\partial F/\partial x,\partial F/\partial y,\partial F/\partial z$ 가 동시에 $0$ 인 점이 사영평면에 없으므로 $X$ 는 매끄럽고, 차수 $4$ 인 매끄러운 평면곡선이므로 종수가 $(4-1)(4-2)/2=3$ 이다.

## 자기동형

$\zeta=e^{2\pi i/7}$ 로 두면 다음 두 변환이 $F$ 를 보존한다.

$$
\sigma:(x,y,z)\mapsto(\zeta x,\zeta^4y,\zeta^2z),\qquad \tau:(x,y,z)\mapsto(y,z,x)
$$

$\sigma$ 는 위수 $7$, $\tau$ 는 위수 $3$ 이다. 여기에 위수 $2$ 인 변환 하나를 더하면 $\mathrm{PGL}\_3(\mathbb C)$ 안에서 위수 $168$ 인 군이 생성되고, 이 군이 $X$ 의 자기동형군 전체다[^1].

# 성질

## 자기동형군

$X$ 의 자기동형군은 $\mathrm{PSL}\_2(\mathbb F_7)\cong\mathrm{GL}\_3(\mathbb F_2)$ 이다. 이 군은 위수가 $168=2^3\cdot 3\cdot 7$ 인 단순군이고, [유한 단순군 분류](finite-simple-groups.md)에서 $\mathrm{PSL}\_2(\mathbb F_q)$ 계열의 $q=7$ 경우이며 동시에 Fano 평면의 자기동형군이다.

## Hurwitz 상계의 등호

종수 $g$ 에서 위수 $84(g-1)$ 인 자기동형군을 갖는 곡선을 **Hurwitz 곡면(Hurwitz surface)** 이라 한다. Hurwitz 곡면은 쌍곡평면 $\mathbb H$ 를 $(2,3,7)$ 삼각군의 유한 지수 꼬임 없는(torsion-free) 정규부분군으로 나눈 몫과 같다. $g=2$ 곡선의 자기동형군은 위수가 $48$ 이하이므로 $g=3$ 이 Hurwitz 상계가 처음 등호로 성립하는 종수이고, 그 종수의 Hurwitz 곡면은 $X$ 하나뿐이다.

## 모듈러 곡선으로서의 실현

$X$ 는 수준 $7$ 의 주합동부분군(principal congruence subgroup) $\Gamma(7)$ 에 대한 [모듈러 곡선](modular-curves.md) $X(7)=\Gamma(7)\backslash\mathbb H^\ast$ 와 동형이다[^1]. $\mathrm{SL}\_2(\mathbb Z)/\lbrace\pm 1\rbrace$ 를 $\Gamma(7)$ 의 상으로 나눈 몫이 $\mathrm{PSL}\_2(\mathbb F_7)$ 이고 이것이 $X(7)$ 에 작용한다. $X(7)\to X(1)$ 은 $j=1728$ 위에서 분기지수 $2$, $j=0$ 위에서 $3$, 첨점 위에서 $7$ 로 분기하며, 이것이 직관 절의 $(2,3,7)$ 분기다.

## 특수한 점

자기동형군의 궤도로 점을 나누면 안정자 위수가 $7,3,2$ 인 궤도의 크기가 $24,56,84$ 이고 나머지 점의 궤도는 크기 $168$ 이다. 안정자 위수 $7$ 인 $24$ 개의 점은 $X$ 의 변곡점이고, 종수 $3$ 의 초타원이 아닌 곡선에서 Weierstrass 점이 된다.

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
