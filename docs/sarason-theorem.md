# Sarason 정리

# 개요

**Sarason 정리(Sarason's theorem)** 는 원판의 유계 정칙함수에 몇 가지 값을 정해 두었을 때 함수의 크기를 얼마나 작게 할 수 있는지를 작은 행렬 하나의 노름으로 계산하는 정리다. $\varphi(0)=1/2$, $\varphi'(0)=1$ 인 정칙함수 가운데 단위원판에서 $\vert\varphi\vert$ 의 상한이 가장 작은 것을 찾는다고 하자. $1/2+z$ 는 상한이 $3/2$ 인데, 이보다 작게 할 수 있는지 함수를 하나씩 시험해서는 알 수 없다.

Sarason 정리는 이 최솟값이 $2\times 2$ 행렬의 노름 $(1+\sqrt2)/2$ 와 같다는 것을 보이고, 그 값을 이루는 함수가 있음을 보장한다.

# 직관

행렬 $N$ 을 다음과 같이 둔다.

$$
N=\begin{pmatrix}0&0\cr 1&0\end{pmatrix},\qquad N^2=0,\qquad\Vert N\Vert=1
$$

$N^2=0$ 이므로 다항식 $\varphi$ 에 $N$ 을 넣으면 $\varphi(N)=\varphi(0)I+\varphi'(0)N$ 이다. 그러므로 $\varphi(0)=1/2$, $\varphi'(0)=1$ 인 다항식은 모두 같은 행렬 $\varphi(N)=M$ 을 준다.

$$
M=\begin{pmatrix}1/2&0\cr 1&1/2\end{pmatrix}
$$

$\Vert N\Vert\le 1$ 이므로 [von Neumann 부등식](von-neumann-inequality.md)에 따라 $\Vert\varphi(N)\Vert$ 는 단위원판에서 $\vert\varphi\vert$ 의 상한 이하다. 다항식이 아닌 정칙함수도 $\varphi(rz)$ 의 Taylor 다항식으로 근사하면 같은 부등식이 성립한다. 따라서 조건을 만족하는 $\varphi$ 의 상한은 모두 $\Vert M\Vert$ 이상이다.

$M^{\mathsf T}M$ 의 고윳값 가운데 큰 것은 $(3+2\sqrt2)/4$ 이므로 $\Vert M\Vert=(1+\sqrt2)/2\approx 1.207$ 이다. 이 하계를 실제로 이루는 함수가 있다. $\alpha=\sqrt2-1$ 로 두면 다음 함수가 그렇다.

$$
\varphi\_\ast(z)=\frac{1+\sqrt2}{2}\cdot\frac{z+\alpha}{1+\alpha z}
$$

둘째 인수는 단위원 위에서 절댓값이 $1$ 이므로 $\varphi\_\ast$ 의 상한은 $(1+\sqrt2)/2$ 다. $1-\alpha^2=2\alpha$ 이므로 두 조건도 만족한다.

$$
\varphi\_\ast(0)=\frac{(1+\sqrt2)\alpha}{2}=\frac12,\qquad\varphi\_\ast'(0)=\frac{(1+\sqrt2)(1-\alpha^2)}{2}=(1+\sqrt2)\alpha=1
$$

하계가 언제나 이루어진다는 것이 Sarason 정리다. $N$ 은 정칙함수에 $z$ 를 곱한 뒤 $1$ 과 $z$ 의 계수만 남기는 작용이다. 상수 $1$ 은 $z$ 로 가고 $z$ 는 $z^2$ 로 가서 버려진다.

# 정의

## 모형 공간

[Hardy 공간](hardy-spaces.md) $H^2$ 의 함수 $\theta\in H^\infty$ 가 원 위 거의 모든 점에서 $\vert\theta\vert=1$ 이면 $\theta$ 를 내부 함수(inner function)라 한다. $\theta H^2$ 의 직교 여공간 $K\_\theta=H^2\ominus\theta H^2$ 를 $\theta$ 의 **모형 공간(model space)** 이라 한다. $\theta(z)=z^2$ 이면 $\theta H^2$ 는 $z^2$ 의 배수 전체이므로 $K\_\theta$ 는 $1$ 과 $z$ 로 생성된다.

## 압축 이동

$S$ 를 $H^2$ 위에서 $z$ 를 곱하는 이동 작용소라 하고, $P\_\theta$ 를 $K\_\theta$ 로의 직교 사영이라 한다. $S\_\theta=P\_\theta S$ 를 $K\_\theta$ 로 제한한 작용소를 **압축 이동(compressed shift)** 이라 한다. $\varphi\in H^\infty$ 에 대해 $\varphi(S\_\theta)$ 는 $\varphi$ 를 곱한 뒤 $K\_\theta$ 로 사영하는 작용소다.

$\theta=z^2$ 이면 $S\_\theta1=z$, $S\_\theta z=P\_\theta z^2=0$ 이고, 기저 $1$, $z$ 에서 $S\_\theta$ 의 행렬은 직관 절의 $N$ 이다. 그때 $\varphi(S\_\theta)=\varphi(0)I+\varphi'(0)N$ 이다.

## 등거리 팽창

[Hilbert 공간](hilbert-spaces.md) $H$ 위의 축약(contraction) $T$, 곧 $\Vert T\Vert\le 1$ 인 작용소에 대해, $H$ 를 닫힌 부분공간으로 포함하는 공간 $K$ 위의 등거리 작용소 $V$ 가 모든 $n\ge 0$ 에서 $T^n=P\_HV^n|\_H$ 를 만족하면 $V$ 를 $T$ 의 **등거리 팽창(isometric dilation)** 이라 한다. 그런 $V$ 의 불변 부분공간 가운데 $H$ 를 포함하는 가장 작은 것이 $K$ 전체이면 최소 등거리 팽창이라 한다. $\theta$ 가 상수가 아니면 $S$ 가 $S\_\theta$ 의 최소 등거리 팽창이다.

# 성질

## Sarason 정리

**정리(Sarason, 1967).** $\theta$ 가 내부 함수이고 $K\_\theta$ 위의 유계 작용소 $T$ 가 $TS\_\theta=S\_\theta T$ 를 만족하면, $T=\varphi(S\_\theta)$ 이고 $\Vert\varphi\Vert\_\infty=\Vert T\Vert$ 인 $\varphi\in H^\infty$ 가 있다[^1].

$\Vert\varphi(S\_\theta)\Vert\le\Vert\varphi\Vert\_\infty$ 는 곱셈 뒤 사영의 노름이 곱셈의 노름 이하라는 것에서 나온다. 정리의 내용은 등호를 이루는 $\varphi$ 가 있다는 것이다. 직관 절에서 $T=M$ 이고 $\varphi=\varphi\_\ast$ 다.

증명의 요지. 다음 절의 교환자 들어올리기 정리로 $T$ 를 $S$ 와 교환하고 노름이 같은 $H^2$ 위의 작용소 $Y$ 로 들어올린다. $S$ 와 교환하는 $H^2$ 의 유계 작용소는 $H^\infty$ 함수의 곱셈 $M\_\varphi$ 뿐이고 $\Vert M\_\varphi\Vert=\Vert\varphi\Vert\_\infty$ 이므로, $Y=M\_\varphi$ 가 구하는 함수를 준다.

## 교환자 들어올리기 정리

**교환자 들어올리기 정리(commutant lifting theorem).** $T$ 가 $H$ 위의 축약이고 $V$ 가 $K$ 위의 최소 등거리 팽창이라 하자. $H$ 위의 작용소 $X$ 가 $XT=TX$ 를 만족하면, $K$ 위의 작용소 $Y$ 가 있어 $YV=VY$, $\Vert Y\Vert=\Vert X\Vert$, $P\_HY=XP\_H$ 를 만족한다[^2].

Sz.-Nagy 와 Foias 가 Sarason 정리를 일반 축약으로 넓혀 증명했다. 증명은 $Y$ 를 $H$ 에서 시작해 $V$ 가 만드는 부분공간을 한 겹씩 늘려 가며 정하고, 각 단계에서 노름을 지키는 확장이 있다는 $2\times 2$ 블록 행렬의 보조정리를 쓴다.

## Nevanlinna–Pick 보간의 증명

원판의 서로 다른 점 $z\_1,\dots,z\_n$ 과 값 $w\_1,\dots,w\_n$ 이 있다. $\theta$ 를 이 점들을 영점으로 하는 [Blaschke 곱](blaschke-products.md)으로 두면, $K\_\theta$ 는 재생핵 $k\_i(z)=1/(1-\bar z\_iz)$ 들로 생성되고 $S\_\theta^\ast k\_i=\bar z\_ik\_i$ 다.

$T^\ast k\_i=\bar w\_ik\_i$ 로 정한 $T$ 는 $S\_\theta$ 와 교환한다. $\Vert T\Vert\le 1$ 은 Pick 행렬 $\bigl((1-w\_i\bar w\_j)/(1-z\_i\bar z\_j)\bigr)$ 이 양의 준정부호라는 것과 동치다. 이 조건 아래 Sarason 정리가 $\Vert\varphi\Vert\_\infty\le 1$ 이고 $\varphi(S\_\theta)=T$ 인 $\varphi$ 를 주고, $\varphi(S\_\theta)^\ast k\_i=\overline{\varphi(z\_i)}k\_i$ 이므로 $\varphi(z\_i)=w\_i$ 다. 이로써 [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)의 충분조건이 증명된다.

## Carathéodory–Fejér 문제

$\theta=z^n$ 이면 $K\_\theta$ 는 차수 $n-1$ 이하의 다항식 전체이고, $S\_\theta$ 와 교환하는 작용소는 아래 삼각 [Toeplitz 행렬](toeplitz-matrices.md)이다. 그러므로 처음 $n$ 개의 Taylor 계수가 $c\_0,\dots,c\_{n-1}$ 로 정해진 $\varphi\in H^\infty$ 의 상한의 최솟값은 다음 행렬의 노름이다.

$$
\begin{pmatrix}c\_0&0&\cdots&0\cr c\_1&c\_0&\cdots&0\cr\vdots&\vdots&\ddots&\vdots\cr c\_{n-1}&c\_{n-2}&\cdots&c\_0\end{pmatrix}
$$

이 문제를 Carathéodory–Fejér 문제(Carathéodory–Fejér problem)라 한다. 직관 절은 $n=2$, $c\_0=1/2$, $c\_1=1$ 인 경우다.

# 활용

- [Nehari 정리](nehari-theorem.md). 원 위의 유계함수에서 $H^\infty$ 까지의 거리가 Hankel 작용소의 노름이라는 정리도 교환자 들어올리기 정리에서 같은 방법으로 나온다.
- H∞ 제어의 모형 맞춤. 가중 감도를 최소화하는 [H∞ 제어](h-infinity-control.md) 문제는 장치의 불안정한 영점에서 값이 정해진 유계 정칙함수의 상한을 줄이는 보간 문제가 되고, 그 최솟값을 이 정리의 작용소 노름으로 계산한다[^3].
- 다변수 보간. 두 변수 원판의 보간인 [쌍원판의 Pick 보간](bidisk-pick-interpolation.md)은 von Neumann 부등식의 Andô 정리를 써서 교환하는 두 축약에 대한 들어올리기로 다룬다.

[^1]: D. Sarason, "Generalized interpolation in H∞", *Transactions of the American Mathematical Society* 127 (1967), 179–203.
[^2]: B. Sz.-Nagy, C. Foias, "Dilatation des commutants d'opérateurs", *Comptes Rendus de l'Académie des Sciences Paris, Série A* 266 (1968), 493–495.
[^3]: C. Foias, A. E. Frazho, *The Commutant Lifting Approach to Interpolation Problems*, Birkhäuser, 1990.

# 연관 문서

## 선수지식

- [Hardy 공간](hardy-spaces.md)
- [von Neumann 부등식](von-neumann-inequality.md)
- [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #complex_analysis #linear_algebra
