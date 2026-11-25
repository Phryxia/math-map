# Kodaira 차원

# 개요

**Kodaira 차원(Kodaira dimension)** 은 콤팩트 복소다양체 위에서 최고차 정칙 미분형식을 거듭제곱한 대상이 얼마나 많은지를 재는 수다. 곡선은 종수가 $0$ 인 구, $1$ 인 원환면, $2$ 이상인 곡면으로 갈리고, 곡면과 고차원 다양체에도 같은 구실을 하는 가름이 있어야 분류를 시작할 수 있다.

Kodaira 차원은 $m$ 차 거듭제곱의 공간의 차원이 $m$ 의 몇 제곱으로 자라는지를 보아, $n$ 차원 다양체를 $-\infty,0,1,\dots,n$ 의 $n+2$ 부류로 나눈다.

# 직관

종수 $g$ 의 곡선 $C$ 에서 정칙 미분 $m$ 개를 곱한 꼴 $f(z)\thinspace dz^m$ 의 공간의 차원 $P_m$ 을 센다. 이 공간은 [Riemann–Roch 정리](riemann-roch.md) 문서의 표준인자 $K$ 로 $\ell(mK)$ 이고, $\deg mK=m(2g-2)$ 다.

- $g=0$ 이면 $\deg mK=-2m\lt 0$ 이므로 $P_m=0$ 이다.
- $g=1$ 이면 $K=0$ 이므로 $P_m=1$ 이다.
- $g\ge 2$, $m\ge 2$ 이면 $\deg mK\gt 2g-2$ 이므로 Riemann–Roch 정리에서 다음이 나온다.

$$
P_m=m(2g-2)+1-g=(2m-1)(g-1)
$$

$g=2$ 이면 $P_2,P_3,P_4$ 가 $3,5,7$ 이고 $m$ 에 비례해 자란다. 세 경우의 $P_m$ 은 차례로 늘 $0$, 일정, $m$ 의 일차로 자라고, 이 자라는 차수를 $-\infty$, $0$, $1$ 로 적는다.

두 곡선의 곱 $C\_1\times C\_2$ 에서는 $dz^m\thinspace dw^m$ 꼴의 대상이 두 곡선의 것의 곱으로 적혀 $P_m(C\_1\times C\_2)=P_m(C\_1)P_m(C\_2)$ 다. 종수 $2$ 곡선 둘의 곱은 $P_m=(2m-1)^2$ 으로 $m$ 의 이차로 자라고, 원환면과 종수 $2$ 곡선의 곱은 $P_m=2m-1$ 로 일차로 자란다.

# 정의

$X$ 를 $n$ 차원 연결 콤팩트 복소다양체, $K_X$ 를 정칙 $n$ 형식의 선다발이라 한다. $m\ge 1$ 에 대해 다음을 $X$ 의 **다중종수(plurigenus)** 라 한다.

$$
P_m(X)=\dim H^0(X,K_X^{\otimes m})
$$

모든 $m$ 에서 $P_m=0$ 이면 $\kappa(X)=-\infty$ 로 둔다. 그렇지 않으면 $P_m(X)/m^k$ 가 $m$ 에 대해 유계인 가장 작은 정수 $k\ge 0$ 을 $X$ 의 **Kodaira 차원** $\kappa(X)$ 라 한다. 직관 절의 곡선은 종수 $0,1,2$ 이상에 따라 $\kappa=-\infty,0,1$ 이고, 종수 $2$ 곡선 둘의 곱은 $\kappa=2$ 다.

$P_m\gt 0$ 인 $m$ 에서 $K_X^{\otimes m}$ 의 단면의 기저 $s\_0,\dots,s\_N$ 은 사상 $x\mapsto(s\_0(x):\dots:s\_N(x))$ 를 정한다. 이것을 **다중표준사상(pluricanonical map)** 이라 하고, $\kappa(X)$ 는 이 사상들의 상의 차원 가운데 가장 큰 것과 같다[^1].

$\kappa(X)=n$ 인 다양체를 **일반형(general type)** 이라 한다.

# 성질

## 값의 범위

$\kappa(X)\in\lbrace -\infty,0,1,\dots,n\rbrace$ 이다. 다중표준사상의 상은 $X$ 의 상이므로 차원이 $n$ 을 넘지 않는다.

$\kappa=0$ 이어도 $P_1=0$ 일 수 있다. [Enriques 곡면](enriques-surfaces.md)은 $P_m$ 이 $m$ 이 홀수이면 $0$, 짝수이면 $1$ 이므로 $\kappa=0$ 이다. 그래서 정의는 $P_1$ 하나가 아니라 모든 $m$ 을 본다.

## 쌍유리 불변성

두 매끄러운 사영 다양체가 쌍유리 동치이면 다중종수가 모두 같고, 따라서 Kodaira 차원이 같다.

증명의 요지. 쌍유리 사상 $f:X\dashrightarrow Y$ 는 여차원 $2$ 이상의 닫힌 집합 밖에서 정의된다. $K_Y^{\otimes m}$ 의 단면을 $f$ 로 당기면 그 집합 밖에서 $K_X^{\otimes m}$ 의 단면이 되고, [Hartogs 확장 정리](hartogs-extension-theorem.md)로 $X$ 전체로 이어진다. 역사상에도 같은 논법을 쓰면 두 공간이 같은 차원이다.

## 곱과 덮개

곱에서는 $\kappa(X\times Y)=\kappa(X)+\kappa(Y)$ 다. 직관 절의 곱이 그 예다.

$X'\to X$ 가 분기점 없는 유한 덮개이면 $\kappa(X')=\kappa(X)$ 다[^1]. Enriques 곡면과 그 [K3 곡면](k3-surfaces.md) 덮개가 둘 다 $\kappa=0$ 인 것이 그 예다.

## 초곡면

$\mathbb{CP}^{n+1}$ 안의 매끄러운 $d$ 차 초곡면 $X$ 는 [딸림 공식](adjunction-formula.md)으로 $K_X=\mathcal O(d-n-2)\vert\_X$ 다. 따라서 다음이 성립한다.

$$
\kappa(X)=\begin{cases}-\infty & d\lt n+2\cr 0 & d=n+2\cr n & d\gt n+2\end{cases}
$$

$n=1$ 이면 평면 이차곡선, 삼차곡선, 사차 이상의 곡선이 종수 $0$, $1$, $2$ 이상과 맞고, $n=2$, $d=4$ 이면 사차곡면이 K3 곡면으로 $\kappa=0$ 이다.

## 곡면의 분류

Enriques–Kodaira 분류(Enriques–Kodaira classification). 극소 대수곡면은 Kodaira 차원에 따라 다음과 같이 나뉜다[^2].

| Kodaira 차원 | 곡면 |
| --- | --- |
| −∞ | 사영평면, 곡선 위의 사영직선 다발 |
| 0 | K3 곡면, Enriques 곡면, 아벨 곡면, 쌍타원 곡면 |
| 1 | 일반 올이 원환면인 [타원 곡면](elliptic-surfaces.md) |
| 2 | 일반형 곡면 |

$\kappa=0$ 인 넷은 모두 $K^{\otimes 12}$ 가 자명하다. $\kappa=-\infty$ 인 곡면은 유리곡면이거나 곡선 위의 [선직곡면](ruled-surfaces.md)이다.

## Iitaka 추측

Iitaka 추측(Iitaka conjecture). 매끄러운 사영 다양체 사이의 올이 연결된 전사 $f:X\to Y$ 와 일반 올 $F$ 에 대해 다음이 성립한다.

$$
\kappa(X)\ge\kappa(F)+\kappa(Y)
$$

곱 $X=F\times Y$ 이면 곱의 공식에서 등호가 성립한다.

# 활용

- 쌍유리 분류. 같은 Kodaira 차원의 다양체끼리 묶고, 각 부류 안에서 극소 모형을 찾는 것이 고차원 쌍유리 기하의 분류 방식이다. 곡면에서는 위 표가 그 결과다.
- 곡선의 균일화. 곡선의 $\kappa=-\infty,0,1$ 은 보편 덮개가 구, 평면, 원판인 경우와 맞고, 곡률이 양, $0$, 음인 계량의 존재와 맞는다. [Riemann 곡면](riemann-surfaces.md) 문서의 세 경우다.
- 유리점의 개수. [Faltings 정리](faltings-theorem.md)에 따르면 수체 위의 곡선이 $\kappa=1$ 이면 유리점이 유한하다. 일반형 다양체로 이를 넓힌 것이 Bombieri–Lang 추측(Bombieri–Lang conjecture)이다.

[^1]: S. Iitaka, "On D-Dimensions of Algebraic Varieties", Journal of the Mathematical Society of Japan **23** (1971), 356–373.

[^2]: W. Barth, K. Hulek, C. Peters and A. Van de Ven, *Compact Complex Surfaces*, 2nd ed., Springer, 2004, Chapter VI.

# 연관 문서

## 선수지식

- [Riemann–Roch 정리](riemann-roch.md)

## 더 알아보기

- [Castelnuovo 유리성 판정법](castelnuovo-rationality-criterion.md)
- [타원 곡면](elliptic-surfaces.md)

#complex_analysis #algebra #differential_geometry
