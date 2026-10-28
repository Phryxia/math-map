# Sternberg 정리

# 개요

**Sternberg 정리(Sternberg's theorem)** 는 평형점 근처의 미분방정식을 매끄러운 좌표 변환으로 일차 근사와 같은 꼴로 바꿀 수 있는 조건을 주는 정리다. $x'=-x$, $y'=-2y+x^2$ 에서 $x^2$ 항을 다항식 좌표 변환으로 지우려 하면, 고윳값 $-2$ 가 $-1$ 의 두 배라서 계수를 맞출 수 없다. 이 정리는 고윳값 사이에 이런 정수 관계, 곧 공명(resonance)이 없으면 무한 번 미분가능한 좌표 변환이 존재함을 보인다.

# 직관

[Hartman–Grobman 정리](hartman-grobman.md)가 주는 좌표 변환은 연속일 뿐이고, Sternberg 정리는 고윳값 조건 하나를 더해 그 변환을 무한 번 미분가능하게 만든다.

Hartman–Grobman 정리의 직관 절은 $x'=x$, $y'=-y+x^2$ 에서 $Y=y-x^2/3$ 으로 두어 방정식을 일차 근사로 바꿨다. 이 변환은 다항식이라 매끄럽다. 같은 방법을

$$
x'=-x,\qquad y'=-2y+x^2
$$

에 쓴다. $Y=y-cx^2$ 으로 두면

$$
Y'=y'-2cxx'=-2y+x^2+2cx^2=-2Y-2cx^2+x^2+2cx^2=-2Y+x^2
$$

이다. $c$ 가 들어간 항이 서로 지워져 어떤 $c$ 를 골라도 $x^2$ 이 남는다.

지워지는 이유는 감소 속도에 있다. 일차 근사에서 $x$ 는 $e^{-t}$ 로 줄어 $x^2$ 은 $e^{-2t}$ 로 줄고, $y$ 도 $e^{-2t}$ 로 줄어 둘의 속도가 같다. $x'=-x$, $y'=-3y+x^2$ 이었다면 $Y'=-3Y+(1-c)x^2$ 이 되어 $c=1$ 로 항이 없어진다. 일반적으로 고윳값이 $\lambda_1,\lambda_2$ 일 때 $y'$ 의 $x^2$ 항을 지우는 계수는 $2\lambda_1-\lambda_2$ 로 나눠 얻고, 앞의 예에서 막힌 것은 $2\lambda_1=\lambda_2$ 이기 때문이다. 고윳값 사이의 이런 정수 관계를 공명이라 부른다.

막힌 예에서도 $Y=y+x^2\ln\lvert x\rvert$ 로 두면 $Y'=-2y-2x^2\ln\lvert x\rvert=-2Y$ 가 되어 방정식이 일차 근사로 바뀐다. 이 $Y$ 는 한 번 미분가능하지만 $x^2\ln\lvert x\rvert$ 의 이계도함수 $2\ln\lvert x\rvert+3$ 이 $x=0$ 에서 유계가 아니므로 두 번 미분가능하지 않다. 공명은 좌표 변환이 얼마나 매끄러울 수 있는지를 막는다.

# 정의

$A$ 는 $n\times n$ 실행렬이고 $\lambda_1,\dots,\lambda_n$ 은 중복도를 세어 나열한 $A$ 의 복소 [고윳값](eigenvalues.md)이다. 음이 아닌 정수의 순서쌍 $m=(m_1,\dots,m_n)$ 에 대해 $\lvert m\rvert=m_1+\dots+m_n$, $m\cdot\lambda=m_1\lambda_1+\dots+m_n\lambda_n$ 으로 쓴다.

$$
\lambda_i=m\cdot\lambda,\qquad \lvert m\rvert\ge 2
$$

를 만족하는 $i$ 와 $m$ 을 $\lvert m\rvert$ 차 **공명(resonance)** 이라 한다. 공명이 하나도 없으면 $A$ 를 **비공명(non-resonant)** 이라 한다. 직관 절의 예에서 $\lambda=(-1,-2)$ 이고 $\lambda_2=2\lambda_1$ 은 $m=(2,0)$ 인 2 차 공명이다.

**Sternberg 정리.** $f$ 가 $\mathbb R^n$ 의 원점 근방에서 무한 번 미분가능하고 $f(0)=0$ 이며 $A=Df(0)$ 이 비공명이라 하자. 그러면 원점의 두 근방 $U$, $V$ 와 무한 번 미분가능한 미분동형사상 $h:U\to V$ 가 존재해 $h(0)=0$, $Dh(0)=I$ 이고, $x'=f(x)$ 의 해 $\varphi\_t(x)$ 가 $U$ 에 머무는 동안 $h(\varphi\_t(x))=e^{tA}h(x)$ 이다.[^1]

사상의 판본도 같은 꼴이다. $F(0)=0$ 인 매끄러운 사상에서 $DF(0)$ 의 고윳값 $\mu_1,\dots,\mu_n$ 이 $\lvert\mu_i\rvert\ne 1$ 이고 $\mu_i=\mu_1^{m_1}\cdots\mu_n^{m_n}$ ($\lvert m\rvert\ge 2$) 꼴의 관계가 없으면 $F$ 는 원점 근처에서 $DF(0)$ 과 매끄럽게 공액이다.[^1]

# 성질

## 비공명과 쌍곡성

실행렬 $A$ 가 비공명이면 실수부가 $0$ 인 고윳값이 없다. $\lambda_i=0$ 이면 $\lambda_i=2\lambda_i$ 가 2 차 공명이다. $\lambda_i=i\omega$ ($\omega\ne 0$) 이면 실행렬이므로 $\lambda_j=-i\omega$ 인 $j$ 가 있고, $\lambda_i=2\lambda_i+\lambda_j$ 가 3 차 공명이다. 그래서 Sternberg 정리의 가정은 Hartman–Grobman 정리의 쌍곡 조건을 함의한다.

## 호몰로지 방정식

$f(x)=Ax+f_k(x)+(\text{더 높은 차수})$ 이고 $f_k$ 가 $k$ 차 동차다항식이라 하자. 새 좌표 $y=x+p(x)$ 를 $k$ 차 동차다항식 $p$ 로 잡으면

$$
y'=Ay+f_k(x)+\bigl(Dp(x)Ax-Ap(x)\bigr)+(\text{더 높은 차수})
$$

이다. 그러므로 $k$ 차 항을 없애려면

$$
L_A p=-f_k,\qquad L_A p(x)=Dp(x)Ax-Ap(x)
$$

를 풀어야 한다. 이것을 **호몰로지 방정식(homological equation)** 이라 한다. $A$ 가 대각행렬 $\mathrm{diag}(\lambda_1,\dots,\lambda_n)$ 이면 단항식 $x^m e_i=x_1^{m_1}\cdots x_n^{m_n}e_i$ 에서

$$
L_A(x^m e_i)=(m\cdot\lambda-\lambda_i)\thinspace x^m e_i
$$

이므로 $L_A$ 는 $k$ 차 동차다항식 벡터장의 공간에서 고윳값이 $m\cdot\lambda-\lambda_i$ 인 대각 작용소다. 비공명이면 모든 $k\ge 2$ 에서 $L_A$ 가 가역이고, $k=2,3,\dots$ 차 항을 차례로 없애는 형식적 멱급수 좌표 변환이 존재한다. 대각화되지 않는 $A$ 는 [Jordan 표준형](jordan-canonical-form.md)으로 바꾸면 $L_A$ 가 같은 고윳값을 갖는 삼각 작용소가 되어 결론이 같다.[^2]

## 증명의 요지

호몰로지 방정식으로 얻은 형식적 멱급수는 수렴하지 않을 수 있다. Borel 보조정리(Borel's lemma)로 그 멱급수를 Taylor 급수로 갖는 매끄러운 사상을 잡아 좌표를 바꾸면, 방정식은 $y'=Ay+r(y)$ 이고 $r$ 은 원점에서 모든 도함수가 $0$ 인 평탄(flat)한 함수가 된다. 남은 $r$ 은 쌍곡성으로 없앤다. $Ay+r(y)$ 와 $Ay$ 의 공액 $h=I+u$ 가 만족할 방정식을 안정 방향과 불안정 방향으로 나눠 해를 따라 적분하면, $r$ 이 평탄하므로 해가 원점에 다가갈 때 $r$ 이 지수보다 빠르게 줄어 적분이 모든 도함수와 함께 수렴하고 $u$ 가 평탄한 매끄러운 함수로 나온다.[^1]

## 유한 번 미분가능한 경우

$f$ 가 유한 번만 미분가능해도 비슷한 결론이 있다. 주어진 $k$ 마다 $N$ 이 존재해, $f$ 가 $N$ 번 연속미분가능하고 $N$ 차 이하의 공명이 없으면 $k$ 번 연속미분가능한 선형화 $h$ 가 존재한다.[^3] 공명이 있어도 한 번 미분가능한 선형화는 얻을 수 있는 경우가 있다. 모든 고윳값의 실수부가 음수이거나 $n=2$ 이고 평형점이 쌍곡이면, $f$ 가 두 번 연속미분가능할 때 한 번 연속미분가능한 $h$ 가 존재한다.[^4] 직관 절의 $Y=y+x^2\ln\lvert x\rvert$ 가 그 예이고, 그 예는 공명 때문에 두 번 미분가능한 선형화가 없다.

## Poincaré–Dulac 정규형

공명이 있으면 호몰로지 방정식에서 $m\cdot\lambda-\lambda_i=0$ 인 단항식 $x^m e_i$ 만 지울 수 없다. 나머지를 모두 지우면 방정식의 비선형 항이 공명 단항식만으로 이루어진다. 이것을 [Poincaré–Dulac 정규형](poincare-dulac-normal-form.md)이라 한다. 직관 절의 $y'=-2y+x^2$ 은 이미 이 꼴이고, $x^2e_2$ 가 유일한 공명 단항식이다.[^2]

## 해석적인 경우

$f$ 가 해석적이면 형식적 멱급수가 수렴하는지가 따로 문제다. 고윳값들의 볼록 껍질이 복소평면에서 $0$ 을 포함하지 않고 비공명이면 멱급수가 수렴해 해석적 선형화가 존재한다. 이것이 Poincaré 정리(Poincaré's theorem)다. 볼록 껍질이 $0$ 을 포함하면 $\lvert m\cdot\lambda-\lambda_i\rvert$ 가 $0$ 에 한없이 가까워질 수 있어 비공명만으로는 부족하고, Siegel 정리(Siegel's theorem)는 상수 $C,\nu\gt 0$ 이 존재해 모든 공명 후보에서 $\lvert m\cdot\lambda-\lambda_i\rvert\ge C\lvert m\rvert^{-\nu}$ 라는 Diophantus 조건(Diophantine condition) 아래에서 해석적 선형화를 준다.[^2]

# 활용

- **매끄러운 국소 분류.** 두 흐름이 원점 근처에서 미분동형사상 $h$ 로 공액이면 $h\circ\varphi\_t=\psi\_t\circ h$ 를 원점에서 미분해 $Dh(0)e^{tA}=e^{tB}Dh(0)$ 을 얻으므로 두 일차 근사 $A$, $B$ 가 닮음이다. Sternberg 정리와 합치면, 비공명인 평형점 둘은 일차 근사가 닮음일 때 그리고 그때만 매끄럽게 공액이다. Hartman–Grobman 정리의 위상 공액이 가르지 못하는 마디점과 나선점이 이 분류에서 갈린다.
- **안정 다양체의 매끄러움.** 비공명인 평형점에서는 선형화 좌표에서 Hartman–Grobman 정리 성질 절의 안정 다양체와 불안정 다양체가 각각 부분공간 $E^s$, $E^u$ 이므로, 원래 좌표에서 두 다양체가 무한 번 미분가능하다.
- **정규형 계산.** 분기 매개변수가 있는 방정식을 다룰 때 호몰로지 방정식으로 비공명 항을 먼저 지우고 공명 항만 남긴다. 고윳값이 $\pm i\omega$ 인 평형점에서는 복소좌표 $z$ 의 3 차 항 가운데 $z\lvert z
vert^2$ 이 공명 단항식이고, [Hopf 분기](hopf-bifurcation.md)의 증명이 쓰는 정규형 변환이 이 단계이며 첫 Lyapunov 계수는 남은 항의 계수의 실수부에서 나온다.

[^1]: S. Sternberg, *Local contractions and a theorem of Poincaré*, American Journal of Mathematics **79** (1957), 809–824. S. Sternberg, *On the structure of local homeomorphisms of euclidean n-space, II*, American Journal of Mathematics **80** (1958), 623–631.
[^2]: V. I. Arnold, *Geometrical Methods in the Theory of Ordinary Differential Equations*, 2nd ed., Springer, 1988, 5 장.
[^3]: S. Sternberg, *On the structure of local homeomorphisms of euclidean n-space, II*, American Journal of Mathematics **80** (1958), 623–631.
[^4]: P. Hartman, *On local homeomorphisms of Euclidean spaces*, Boletín de la Sociedad Matemática Mexicana **5** (1960), 220–241.

# 연관 문서

## 선수지식

- [Hartman–Grobman 정리](hartman-grobman.md)

## 더 알아보기

- [Poincaré–Dulac 정규형](poincare-dulac-normal-form.md)

#analysis #differential_geometry
