# 구조 특이값

# 개요

**구조 특이값(structured singular value)** 은 되먹임 계에 모르는 부품이 여러 자리에 따로 들어 있을 때, 계를 불안정하게 만드는 데 필요한 부품 오차의 최소 크기를 재는 값이다. 회로에 오차가 각각 $\delta\_1$, $\delta\_2$ 인 부품 둘이 있고, 두 부품을 지나는 고리의 배율이 $4\delta\_1\delta\_2/(s+1)^2$ 이라 하자. 두 부품을 한 덩어리로 보는 [작은 이득 정리](small-gain-theorem.md)는 오차가 $1/4$ 미만일 때만 안정성을 보장하지만, 실제로는 각 오차가 $1/2$ 미만이면 계가 안정하다.

구조 특이값은 오차가 들어가는 자리의 모양을 지킨 채 고리를 깨는 가장 작은 오차를 계산해, 이 차이 없이 안정 여유를 준다.

# 직관

부품 1 은 신호 $z\_1$ 을 받아 $w\_1=\delta\_1z\_1$ 을 내고, 부품 2 는 $z\_2$ 를 받아 $w\_2=\delta\_2z\_2$ 를 낸다. 나머지 회로는 정확히 알고, 다음 식으로 적힌다.

$$
z\_1=\frac{4}{s+1}\thinspace w\_2,\qquad z\_2=\frac{1}{s+1}\thinspace w\_1
$$

두 신호를 벡터로 모으면 $z=M(s)w$, $w=\Delta z$ 이고, 행렬은 다음과 같다.

$$
M(s)=\frac{1}{s+1}\begin{pmatrix}0&4\cr 1&0\end{pmatrix},\qquad \Delta=\begin{pmatrix}\delta\_1&0\cr 0&\delta\_2\end{pmatrix}
$$

작은 이득 정리는 $\Delta$ 를 아무 $2\times 2$ 행렬로 보고 $M$ 의 이득과 $\Delta$ 의 이득의 곱이 $1$ 미만인지 본다. $M(i\omega)$ 의 가장 큰 특이값은 $4/\sqrt{1+\omega^2}$ 이고 $\omega=0$ 에서 $4$ 다. 대각행렬 $\Delta$ 의 이득은 $\max(\vert\delta\_1\vert,\vert\delta\_2\vert)$ 이므로, 이 정리로 보장되는 것은 두 오차가 모두 $1/4$ 미만인 경우뿐이다.

신호를 직접 따라가면 $w\_1$ 은 $z\_2$, $w\_2$, $z\_1$ 을 거쳐 $4\delta\_1\delta\_2/(s+1)^2$ 배가 되어 $w\_1$ 로 돌아온다. 오차가 실수 상수이면 닫힌 계의 극은 $(s+1)^2=4\delta\_1\delta\_2$ 의 근 $s=-1\pm 2\sqrt{\delta\_1\delta\_2}$ 이고, 계가 불안정한 것은 $\delta\_1\delta\_2\gt 1/4$ 일 때뿐이다. 두 오차가 $1/2$ 미만이면 계는 안정하고, $\delta\_1=\delta\_2=1/2$ 이면 극이 $s=0$ 에 온다.

작은 이득 정리가 여유를 절반으로 잡은 것은 다음 $\Delta$ 때문이다.

$$
\Delta\_0=\begin{pmatrix}0&0\cr 1/4&0\end{pmatrix},\qquad \det\bigl(I-M(0)\Delta\_0\bigr)=0
$$

$\Delta\_0$ 은 이득이 $1/4$ 이고 고리를 깨지만, $z\_1$ 을 $w\_2$ 로 보내는 연결이다. 회로에는 그런 연결이 없다. 그러므로 대각 꼴의 $\Delta$ 만 놓고 고리를 깨는 가장 작은 것을 찾아야 하고, 그 크기의 역수가 구조 특이값이다.

# 정의

## 불확실성의 구조

양의 정수 $r\_1,\dots,r\_S$ 와 $m\_1,\dots,m\_F$ 를 정하고, 다음 꼴의 블록 대각행렬 전체를 **구조(structure)** $\boldsymbol\Delta$ 라 한다.

$$
\boldsymbol\Delta=\bigl\lbrace \mathrm{diag}(\delta\_1I\_{r\_1},\dots,\delta\_SI\_{r\_S},\Delta\_1,\dots,\Delta\_F)\thinspace:\thinspace\delta\_i\in\mathbb C,\ \Delta\_j\in\mathbb C^{m\_j\times m\_j}\bigr\rbrace
$$

$\delta\_iI\_{r\_i}$ 는 같은 오차가 $r\_i$ 자리에 되풀이 들어가는 블록이고, $\Delta\_j$ 는 그 블록 안에서는 아무 행렬이나 될 수 있는 꽉 찬 블록이다. 직관 절의 $\Delta=\mathrm{diag}(\delta\_1,\delta\_2)$ 는 $S=0$, $F=2$, $m\_1=m\_2=1$ 인 구조다.

## 구조 특이값

정사각행렬 $M$ 의 $\boldsymbol\Delta$ 에 대한 **구조 특이값** $\mu\_{\boldsymbol\Delta}(M)$ 은 다음 값이다.

$$
\mu\_{\boldsymbol\Delta}(M)=\frac{1}{\min\bigl\lbrace\sigma\_{\max}(\Delta)\thinspace:\thinspace\Delta\in\boldsymbol\Delta,\ \det(I-M\Delta)=0\bigr\rbrace}
$$

$\sigma\_{\max}$ 는 [특이값 분해](singular-value-decomposition.md)의 가장 큰 특이값이다. $\det(I-M\Delta)=0$ 인 $\Delta\in\boldsymbol\Delta$ 가 없으면 $\mu\_{\boldsymbol\Delta}(M)=0$ 으로 둔다. 이 값은 Doyle 이 정의했고[^1], Safonov 의 다변수 안정 여유(multivariable stability margin)는 그 역수다[^2].

직관 절의 $M(0)$ 을 $N$ 이라 하면 다음이 성립한다.

$$
N=\begin{pmatrix}0&4\cr 1&0\end{pmatrix},\qquad \det\bigl(I-N\thinspace\mathrm{diag}(\delta\_1,\delta\_2)\bigr)=1-4\delta\_1\delta\_2
$$

이 값이 $0$ 이려면 $\vert\delta\_1\delta\_2\vert=1/4$ 이어야 하고, 그 가운데 $\max(\vert\delta\_1\vert,\vert\delta\_2\vert)$ 가 가장 작은 것은 $\vert\delta\_1\vert=\vert\delta\_2\vert=1/2$ 이다. 그러므로 $\mu\_{\boldsymbol\Delta}(N)=2$ 다.

## 척도 행렬

$\boldsymbol\Delta$ 의 모든 원소와 교환하는 양의 정부호 블록 대각행렬 전체를 $\mathbf D$ 라 한다.

$$
\mathbf D=\bigl\lbrace\mathrm{diag}(D\_1,\dots,D\_S,d\_1I\_{m\_1},\dots,d\_FI\_{m\_F})\thinspace:\thinspace D\_i\succ 0,\ d\_j\gt 0\bigr\rbrace
$$

$D\_i$ 는 $r\_i\times r\_i$ Hermite 행렬이다. 직관 절의 구조에서는 $\mathbf D=\lbrace\mathrm{diag}(d\_1,d\_2)\rbrace$ 이고, 전체 배율은 $\mu$ 에 영향이 없으므로 $\mathrm{diag}(d,1)$ 만 보면 된다.

# 성질

## 두 극단

구조가 되풀이 스칼라 하나 $\boldsymbol\Delta=\lbrace\delta I\rbrace$ 이면 $\mu\_{\boldsymbol\Delta}(M)=\rho(M)$ 이다. $\det(I-\delta M)=0$ 은 $1/\delta$ 가 $M$ 의 고윳값이라는 뜻이므로, 가장 작은 $\vert\delta\vert$ 는 $1/\rho(M)$ 이다. $\rho$ 는 [고윳값](eigenvalues.md)의 절댓값의 최댓값인 스펙트럼 반지름이다.

구조가 꽉 찬 블록 하나 $\boldsymbol\Delta=\mathbb C^{n\times n}$ 이면 $\mu\_{\boldsymbol\Delta}(M)=\sigma\_{\max}(M)$ 이다. $\sigma\_{\max}(\Delta)\lt 1/\sigma\_{\max}(M)$ 이면 $\sigma\_{\max}(M\Delta)\lt 1$ 이라 $I-M\Delta$ 가 가역이다. 반대로 $Mv=\sigma\_{\max}(M)u$ 인 단위벡터 $u$, $v$ 로 $\Delta=vu^\ast/\sigma\_{\max}(M)$ 을 두면 $M\Delta u=u$ 다. 직관 절의 $\Delta\_0$ 이 이 꼴이다.

모든 구조는 $\delta I$ 꼴을 원소로 갖고 $\mathbb C^{n\times n}$ 에 포함되므로 다음이 성립한다.

$$
\rho(M)\le\mu\_{\boldsymbol\Delta}(M)\le\sigma\_{\max}(M)
$$

직관 절의 $N$ 은 고윳값이 $\pm 2$, 가장 큰 특이값이 $4$ 이므로 $2\le\mu\le 4$ 이고, 실제 값 $2$ 는 하계와 같다.

## 척도 불변성과 상계

$D\in\mathbf D$ 이면 $D$ 가 $\Delta$ 와 교환하므로 다음이 성립한다.

$$
\det(I-DMD^{-1}\Delta)=\det(I-MD^{-1}\Delta D)=\det(I-M\Delta)
$$

그러므로 $\mu\_{\boldsymbol\Delta}(DMD^{-1})=\mu\_{\boldsymbol\Delta}(M)$ 이고, 이것을 두 극단의 상계에 넣으면 다음 부등식이 나온다.

$$
\mu\_{\boldsymbol\Delta}(M)\le\inf\_{D\in\mathbf D}\sigma\_{\max}(DMD^{-1})
$$

직관 절의 $N$ 에 $D=\mathrm{diag}(d,1)$ 을 쓰면 다음과 같다.

$$
DND^{-1}=\begin{pmatrix}0&4d\cr 1/d&0\end{pmatrix},\qquad\sigma\_{\max}(DND^{-1})=\max(4d,\thinspace 1/d)
$$

이 값은 $d=1/2$ 에서 가장 작고 그 값은 $2$ 로 $\mu$ 와 같다. 척도 $d$ 는 $z\_1$ 을 $w\_2$ 로 보내는 가짜 연결이 이득을 키우지 못하도록 두 신호의 단위를 바꾼 것이다.

**정리(Doyle, 1982).** $2S+F\le 3$ 이면 위 상계는 등식이다[^1]. 블록이 더 많으면 등식이 깨지는 예가 있다[^3].

상계는 볼록 최적화로 계산된다. $X=D^\ast D$ 로 두고 $D$ 로 합동변환하면 다음 동치가 나온다.

$$
\sigma\_{\max}(DMD^{-1})\lt\beta\iff M^\ast XM-\beta^2X\prec 0
$$

$\beta$ 를 고정하면 오른쪽은 $X$ 에 대한 선형 행렬 부등식(linear matrix inequality)이므로 [반정부호 계획법](semidefinite-programming.md)으로 풀리고, $\beta$ 는 이분 탐색한다.

## 하계

$\boldsymbol\Delta$ 의 유니타리 원소 전체를 $\mathbf Q$ 라 하면 다음이 성립한다[^1].

$$
\mu\_{\boldsymbol\Delta}(M)=\max\_{Q\in\mathbf Q}\rho(MQ)
$$

$\ge$ 쪽은 직접 보인다. $MQ$ 의 고윳값 $\lambda\ne 0$ 에 대해 $\Delta=Q/\lambda$ 는 $\boldsymbol\Delta$ 의 원소이고 $\sigma\_{\max}(\Delta)=1/\vert\lambda\vert$ 이며 $\det(I-M\Delta)=0$ 이다. 직관 절의 $N$ 은 $Q=I$ 에서 $\rho(N)=2$ 로 최댓값에 닿는다. 이 최대화 문제는 볼록이 아니어서 국소 최댓값이 있고, 실제 계산에서는 거듭제곱 반복으로 하계를, 척도 행렬로 상계를 구해 둘 사이에 $\mu$ 를 가둔다[^3].

## 강건 안정성 정리

$M(s)$ 가 안정한 전달 함수 행렬이고 $\beta\gt 0$ 이라 하자. 각 블록이 안정한 전달 함수이고 $\Delta(i\omega)\in\boldsymbol\Delta$ 이며 $\Vert\Delta\Vert\_\infty\lt 1/\beta$ 인 모든 $\Delta$ 에 대해 되먹임 연결 $z=Mw$, $w=\Delta z$ 가 잘 정의되고 내부 안정일 필요충분조건은 다음이다[^4].

$$
\sup\_{\omega\in\mathbb R}\mu\_{\boldsymbol\Delta}\bigl(M(i\omega)\bigr)\le\beta
$$

직관 절의 계에서 $\mu\_{\boldsymbol\Delta}(M(i\omega))=2/\sqrt{1+\omega^2}$ 이고 상한은 $\omega=0$ 의 $2$ 다. 그러므로 두 부품이 이득 $1/2$ 미만의 안정한 동적 오차를 가져도 계는 안정하고, 이 여유는 $\delta\_1=\delta\_2=1/2$ 에서 극이 $s=0$ 에 오므로 더 늘릴 수 없다.

증명의 요지. 충분성은 $\Delta$ 를 $t\Delta$ ($0\le t\le 1$) 로 줄여 가며 닫힌 계의 극이 허수축을 지나는 순간을 본다. 그 순간의 진동수 $\omega$ 에서 $\det(I-M(i\omega)t\Delta(i\omega))=0$ 이고 $\sigma\_{\max}(t\Delta(i\omega))\lt 1/\beta$ 이므로 $\mu$ 의 정의에 어긋난다. 필요성은 $\mu$ 가 $\beta$ 를 넘는 진동수 $\omega\_0$ 에서 고리를 깨는 상수 행렬을 구하고, 그 행렬과 $\omega\_0$ 에서 같은 값을 갖는 안정한 전달 함수를 블록마다 만들어 보인다.

## 강건 성능

외란 $w\_p$ 에서 출력 $z\_p$ 까지의 H∞ 노름을 $\beta$ 이하로 지키는 조건은, $z\_p$ 에서 $w\_p$ 로 가는 가상의 꽉 찬 블록 $\Delta\_p$ 를 붙인 계의 안정성 조건과 같다. 그러므로 구조 $\boldsymbol\Delta$ 의 모든 오차에 대해 성능을 지키는지는 구조 $\mathrm{diag}(\boldsymbol\Delta,\Delta\_p)$ 에 대한 구조 특이값으로 판정된다[^4]. 안정성과 성능을 따로 판정해 둘 다 만족해도 이 조건은 깨질 수 있다.

## 계산 복잡도

실수 블록이 섞인 구조에서 $\mu$ 를 계산하는 문제는 NP-난해(NP-hard, NP 는 nondeterministic polynomial time)다[^5]. NP-난해의 뜻은 [NP-완전성과 Cook–Levin 정리](np-completeness.md)에 있다. 복소 블록만 있는 구조에서도 NP-난해이다[^6]. 그래서 계산은 앞의 상계와 하계로 범위를 정하는 데 그친다.

# 활용

- 다변수 장치의 채널별 오차. 구동기마다 따로 생기는 이득 오차는 대각 구조이고, 가장 큰 특이값으로 잰 여유는 직관 절처럼 실제보다 작게 나온다.
- μ 합성과 D–K 반복(D–K iteration). 척도 $D(s)$ 를 고정하고 $\Vert DMD^{-1}\Vert\_\infty$ 를 줄이는 제어기를 [H∞ 제어](h-infinity-control.md)로 구한 뒤, 제어기를 고정하고 진동수마다 척도를 볼록 최적화로 다시 맞추기를 번갈아 한다. 두 변수에 대해 함께 볼록이 아니므로 전역 최적을 보장하지 않는다.
- [적분 이차 제약](integral-quadratic-constraints.md). 척도 행렬 $X$ 는 대각 오차가 만족하는 이차 제약의 승수이고, 구조 특이값의 상계는 그 승수로 쓴 판정의 특수한 경우다.
- 실수 매개변수 오차. 오차가 실수로 정해진 계수이면 실수 블록을 둔 구조로 적고, 구간 다항식의 안정성을 꼭짓점 넷으로 판정하는 [Kharitonov 정리](kharitonov-theorem.md)와 같은 문제를 다룬다.

[^1]: J. C. Doyle, "Analysis of feedback systems with structured uncertainties", *IEE Proceedings D* 129 (1982), 242–250.
[^2]: M. G. Safonov, "Stability margins of diagonally perturbed multivariable feedback systems", *IEE Proceedings D* 129 (1982), 251–256.
[^3]: A. Packard, J. C. Doyle, "The complex structured singular value", *Automatica* 29 (1993), 71–109.
[^4]: K. Zhou, J. C. Doyle, K. Glover, *Robust and Optimal Control*, Prentice Hall, 1996, 11장.
[^5]: R. P. Braatz, P. M. Young, J. C. Doyle, M. Morari, "Computational complexity of μ calculation", *IEEE Transactions on Automatic Control* 39 (1994), 1000–1002.
[^6]: O. Toker, H. Özbay, "On the complexity of purely complex μ computation and related problems in multidimensional systems", *IEEE Transactions on Automatic Control* 43 (1998), 409–414.

# 연관 문서

## 선수지식

- [H∞ 제어](h-infinity-control.md)
- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra #analysis
