# Nehari 정리

# 개요

**Nehari 정리(Nehari's theorem)** 는 단위원 위의 유계함수를 원판에서 유계인 정칙함수로 균등하게 근사할 때 가장 작은 오차가 그 함수의 음의 Fourier 계수로 만든 Hankel 행렬의 노름과 같다는 정리다. $1/(z-1/2)$ 는 원판 안 $1/2$ 에 극이 있어 원판에서 정칙이 아니고, 원 위에서 상수 $2/3$ 을 빼면 크기가 어디서나 $4/3$ 이 된다. 이 정리는 어떤 정칙함수를 빼도 $4/3$ 보다 작아지지 않는다는 것을 행렬 하나의 노름으로 보인다.

# 직관

단위원 위에서 $\varphi(z)=1/(z-1/2)$ 에 가장 가까운 유계 정칙함수 $h$ 를 찾는다. 거리는 원 위에서 $\vert\varphi-h\vert$ 의 최댓값이다. $h=0$ 이면 $z=1$ 에서 $\vert\varphi\vert=2$ 가 최댓값이다.

$h=c$ 가 실수 상수이면 $z=1$ 에서 $2-c$, $z=-1$ 에서 $\vert -2/3-c\vert$ 이고, 둘을 같게 두는 $c=2/3$ 에서 둘 다 $4/3$ 이다. 실제로 원 위에서 다음이 성립하고, $\vert z\vert=1$ 이면 $\vert 1-z/2\vert=\vert z-1/2\vert$ 라 오른쪽의 크기는 어디서나 $4/3$ 이다.

$$
\frac{1}{z-1/2}-\frac23=\frac43\cdot\frac{1-z/2}{z-1/2}
$$

상수가 아닌 $h$ 로 더 줄일 수 있는지는 이 계산만으로 알 수 없다. 원 위에서 $\vert z\vert\gt 1/2$ 이므로 $\varphi$ 는 음의 거듭제곱만으로 전개된다.

$$
\varphi(z)=\frac{1}{z}\cdot\frac{1}{1-1/(2z)}=\sum_{k\ge 1}\Bigl(\frac12\Bigr)^{k-1}z^{-k}
$$

$h$ 는 [Hardy 공간](hardy-spaces.md) $H^\infty$ 의 원소라 음의 계수가 없으므로, $h$ 를 빼도 음의 계수 $1,1/2,1/4,\dots$ 는 그대로 남는다. 그 계수로 $(i,j)$ 성분이 $(1/2)^{i+j-2}$ 인 행렬을 만들면 노름이 계수의 제곱의 합 $4/3$ 이고, 이 정리가 그 노름을 거리의 하한으로 준다. 그래서 $2/3$ 이 가장 가까운 근사이고 거리는 $4/3$ 이다.

# 정의

## Hankel 행렬

원 위의 유계 가측함수 $\varphi\in L^\infty$ 의 Fourier 계수를 $\hat\varphi(n)$ 이라 하자. $(i,j)$ 성분이 $\hat\varphi(-(i+j-1))$ 인 무한 행렬

$$
H_\varphi=\begin{pmatrix}\hat\varphi(-1)&\hat\varphi(-2)&\hat\varphi(-3)&\cdots\cr \hat\varphi(-2)&\hat\varphi(-3)&\hat\varphi(-4)&\cdots\cr \hat\varphi(-3)&\hat\varphi(-4)&\hat\varphi(-5)&\cdots\cr \vdots&\vdots&\vdots&\ddots\end{pmatrix}
$$

를 $\varphi$ 의 **Hankel 행렬(Hankel matrix)** 이라 하고, $\varphi$ 를 그 **기호(symbol)** 라 한다. 직관 절의 $\varphi$ 는 $\hat\varphi(-k)=(1/2)^{k-1}$ 이므로 $H_\varphi=vv^{\mathsf T}$, $v=(1,1/2,1/4,\dots)$ 다.

## Hankel 작용소

수열 $a=(a_1,a_2,\dots)\in\ell^2$ 를 $f(z)=\sum_{j\ge 1}a_jz^{j-1}\in H^2$ 와 같이 보면, $H_\varphi a$ 는 $\varphi f$ 의 계수 가운데 $z^{-1},z^{-2},\dots$ 의 계수를 차례로 늘어놓은 수열이다. 이렇게 본 $H_\varphi$ 를 **Hankel 작용소(Hankel operator)** 라 한다. $\ell^2$ 위의 [유계 작용소](bounded-operators.md)로서의 노름을 $\Vert H_\varphi\Vert$ 로 쓴다. 직관 절에서 $\Vert H_\varphi\Vert=\vert v\vert^2=4/3$ 이다.

## H∞ 까지의 거리

$\varphi$ 에서 $H^\infty$ 까지의 거리는 다음 값이다.

$$
\mathrm{dist}(\varphi,H^\infty)=\inf_{h\in H^\infty}\Vert\varphi-h\Vert\_{L^\infty}
$$

이 값을 이루는 $h$ 를 **최량 근사(best approximation)** 라 한다. 직관 절에서 거리는 $4/3$, 최량 근사는 $h=2/3$ 이다.

# 성질

## Nehari 정리

$\varphi\in L^\infty$ 이면 다음이 성립하고, 최량 근사가 존재한다[^1].

$$
\mathrm{dist}(\varphi,H^\infty)=\Vert H_\varphi\Vert
$$

그래서 $H_\varphi$ 가 유계 작용소인 것과 $\varphi$ 의 음의 계수 부분이 어떤 $L^\infty$ 함수의 음의 계수 부분인 것이 동치다.

증명의 요지. $h\in H^\infty$ 는 음의 계수가 없어 $H\_{\varphi-h}=H_\varphi$ 다. $\Vert H_\psi a\Vert\_2$ 는 $\psi f$ 의 음의 진동수 부분의 $L^2$ 노름이라 $\Vert\psi f\Vert\_2\le\Vert\psi\Vert\_\infty\Vert f\Vert\_2$ 이하다. 그래서 $\Vert H_\varphi\Vert\le\Vert\varphi-h\Vert\_\infty$ 이다.

반대쪽은 $H^1$ 의 함수가 $H^2$ 함수 둘의 곱 $fg$ 로 $\Vert f\Vert\_2\Vert g\Vert\_2=\Vert fg\Vert\_1$ 이 되게 쓰인다는 인수분해를 쓴다. 이 인수분해로 범함수 $F\mapsto\int\varphi\thinspace zF$ 의 $H^1$ 위 노름이 $\Vert H_\varphi\Vert$ 이고, [Hahn–Banach 정리](hahn-banach-theorem.md)로 노름을 지키며 $L^1$ 전체로 늘리면 $L^1$ 의 쌍대인 $L^\infty$ 의 원소 $\psi$ 가 나온다. $\psi$ 와 $\varphi$ 의 차가 $H^\infty$ 에 속하고 $\Vert\psi\Vert\_\infty=\Vert H_\varphi\Vert$ 다.

## 최량 근사의 오차

$H_\varphi$ 가 노름을 이루는 벡터 $v\in\ell^2$ 를 가지면, 곧 $\Vert H_\varphi v\Vert=\Vert H_\varphi\Vert\thinspace\vert v\vert$ 이면, 최량 근사 $h$ 는 하나뿐이고 오차의 크기가 원 위 거의 모든 점에서 $\Vert H_\varphi\Vert$ 와 같다. $\sigma=\Vert H_\varphi\Vert$, $w=H_\varphi v/\sigma$ 로 두면 오차는 다음과 같다[^2].

$$
\varphi-h=\sigma\thinspace\frac{\sum_{k\ge 1}w_kz^{-k}}{\sum_{k\ge 1}v_kz^{k-1}}
$$

직관 절에서 $v=w=(1,1/2,1/4,\dots)$ 이고, 분자는 $1/(z-1/2)$, 분모는 $1/(1-z/2)$ 라 오차가 직관 절의 $\frac43\cdot(1-z/2)/(z-1/2)$ 다.

## Kronecker 정리

$H_\varphi$ 의 계수가 유한한 $n$ 인 것은 $\varphi$ 의 음의 계수 부분 $\sum_{k\ge 1}\hat\varphi(-k)z^{-k}$ 가 원판 안에 극을 중복도까지 세어 $n$ 개 가진 유리함수인 것과 동치다(Kronecker's theorem)[^2]. 직관 절의 $\varphi$ 는 극이 $1/2$ 하나라 $H_\varphi=vv^{\mathsf T}$ 의 계수가 $1$ 이다.

증명의 요지. 음의 계수 부분이 분모가 $n$ 차 다항식 $q$ 인 유리함수이면 계수 $c_k=\hat\varphi(-k)$ 가 $q$ 의 계수로 된 $n$ 항 점화식을 따르고, 그 점화식이 $H_\varphi$ 의 열 $n+1$ 개 사이의 일차종속이다. 역으로 계수가 $n$ 이면 첫 $n+1$ 개 열의 일차종속이 같은 점화식을 주고, 점화식을 따르는 수열의 생성함수는 유리함수다.

## Adamyan–Arov–Krein 정리

$H_\varphi$ 가 [콤팩트 연산자](compact-operators.md)이고 특이값이 $s_0\ge s_1\ge\cdots$ 이면, 원판 안에 극이 많아야 $k$ 개인 유리함수 $r$ 과 $h\in H^\infty$ 의 합으로 $\varphi$ 를 근사할 때 가장 작은 오차가 $s_k$ 다(Adamyan–Arov–Krein theorem)[^3].

$$
s_k(H_\varphi)=\inf_{h,\thinspace r}\Vert\varphi-h-r\Vert\_\infty
$$

하한은 $h\in H^\infty$ 와 원판 안 극이 $k$ 개 이하인 유리함수 $r$ 전체에서 잡는다. $k=0$ 이 Nehari 정리다. 계수 $k$ 이하인 Hankel 행렬과 $H_\varphi$ 의 거리가 $s_k$ 이상이라는 것이 하한이고, Kronecker 정리로 극이 $k$ 개인 $r$ 의 Hankel 행렬은 계수가 $k$ 이하다.

# 활용

- 최적 Hankel 노름 모형 축소. 안정한 이산시간계의 Hankel 행렬의 특이값이 [균형 절단](balanced-truncation.md)의 Hankel 특이값이다. Adamyan–Arov–Krein 정리는 균형 절단 문서의 하한 $\sigma_{r+1}$ 을 이루는 차수 $r$ 근사가 Hankel 노름에서 존재함을 주고, Glover 는 이것을 상태공간 공식으로 계산했다.
- H∞ 제어의 모형 맞춤. [H∞ 제어](h-infinity-control.md)에서 오차 전달함수를 $T_1-T_2QT_3$ 꼴로 쓰고 안정한 $Q$ 를 고르는 문제는 내부·외부 인수분해로 $\Vert\varphi-h\Vert\_\infty$ 를 최소화하는 Nehari 문제로 바뀐다.
- [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md). 점 $\zeta_1,\dots,\zeta_n$ 에서 값을 정한 함수 하나를 그 점들에서 $0$ 인 [Blaschke 곱](blaschke-products.md)으로 나눈 기호의 Nehari 문제가 보간 문제의 최소 노름이고, Pick 행렬의 양의 준정부호성이 $\Vert H_\varphi\Vert\le 1$ 과 같다.
- 유계 평균 진동 함수. $H_\varphi$ 가 유계인 것은 $\varphi$ 의 음의 계수 부분이 BMO(bounded mean oscillation) 공간에 속하는 것과 동치이고, 이것은 Nehari 정리와 Fefferman 의 $H^1$–BMO 쌍대성으로 증명된다.

[^1]: Z. Nehari, "On bounded bilinear forms", *Annals of Mathematics* 65 (1957), 153–162.
[^2]: N. K. Nikolski, *Operators, Functions, and Systems: An Easy Reading*, Vol. 1, AMS, 2002. Part B, 1 장.
[^3]: V. M. Adamyan, D. Z. Arov, M. G. Krein, "Analytic properties of Schmidt pairs for a Hankel operator and the generalized Schur–Takagi problem", *Math. USSR Sbornik* 15 (1971), 31–73.

# 연관 문서

## 선수지식

- [Hardy 공간](hardy-spaces.md)
- [균형 절단](balanced-truncation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #functional_analysis #linear_algebra #optimization
