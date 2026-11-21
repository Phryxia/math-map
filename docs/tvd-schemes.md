# 전체 변동 감소 방법

# 개요

**전체 변동 감소 방법(total variation diminishing scheme, TVD scheme)** 은 이웃한 격자값의 차이의 절댓값 합이 걸음마다 늘지 않도록 만든 차분 방법이다. 강물에 실린 오염 물질의 경계를 계산할 때 2 차 정확도의 방법은 경계 앞에 원래 농도보다 높은 봉우리를 만들고, 봉우리를 만들지 않는 선형 방법은 1 차 정확도에 머문다. 전체 변동 감소 방법은 값이 매끄러운 곳에서는 2 차 방법을, 경계 근처에서는 1 차 방법을 쓰도록 걸음마다 계수를 바꾸어 두 문제를 함께 피한다.

# 직관

물살의 속도가 $1$ 인 강의 [수송 방정식](transport-equation.md) $u\_t+u\_x=0$ 을 $\nu=k/h=0.5$ 로 푼다. 처음 값은 지점 $j\le 0$ 에서 $1$, $j\ge 1$ 에서 $0$ 인 계단이다.

바람 위쪽 차분은 한 걸음 뒤 지점 $-1,0,1,2$ 에서 $1,1,0.5,0$ 을 내고, [Lax–Wendroff 방법](lax-wendroff-method.md)은 $1,1.125,0.375,0$ 을 낸다. Lax–Wendroff 방법은 바람 위쪽 차분에 보정 항 하나를 더한 것으로 쓸 수 있다.

$$
u^{n+1}\_j=u^n\_j-\nu\bigl(u^n\_j-u^n\_{j-1}\bigr)-\frac{\nu(1-\nu)}{2}\Bigl(\bigl(u^n\_{j+1}-u^n\_j\bigr)-\bigl(u^n\_j-u^n\_{j-1}\bigr)\Bigr)
$$

앞의 두 항이 바람 위쪽 차분이다. 봉우리 $1.125$ 는 지점 $0$ 에서 보정 항이 $+0.125$ 를 더해 생긴다. 지점 $0$ 의 왼쪽 차이는 $0$, 오른쪽 차이는 $-1$ 이라 이 자리는 매끄럽지 않다.

그래서 보정 항의 각 차이에 "왼쪽 차이와 오른쪽 차이가 얼마나 비슷한가" 에 따라 $0$ 과 $1$ 사이의 무게를 곱한다. 지점 $0$ 에서는 왼쪽 차이가 $0$ 이라 무게가 $0$ 이고, 한 걸음 뒤 값은 바람 위쪽 차분과 같은 $1,1,0.5,0$ 이다. 매끄러운 물결에서는 두 차이가 거의 같아 무게가 $1$ 에 가깝고 Lax–Wendroff 방법이 된다.

# 정의

## 전체 변동

격자값 $u=(u\_j)$ 의 **전체 변동(total variation)** 은 다음이다.

$$
\mathrm{TV}(u)=\sum\_j\vert u\_{j+1}-u\_j\vert
$$

모든 처음 값에서 $\mathrm{TV}(u^{n+1})\le\mathrm{TV}(u^n)$ 인 방법을 **전체 변동 감소 방법** 이라 한다.[^1] 직관 절의 계단은 $\mathrm{TV}=1$ 이다. Lax–Wendroff 방법의 한 걸음 뒤 값 $1,1.125,0.375,0$ 은 $0.125+0.75+0.375=1.25$ 라 전체 변동이 늘었다.

## 플럭스 제한자

$u^n\_{j+1}\ne u^n\_j$ 일 때 이웃 차이의 비를 다음과 같이 둔다.

$$
r\_j=\frac{u^n\_j-u^n\_{j-1}}{u^n\_{j+1}-u^n\_j}
$$

함수 $\phi$ 에 대해 다음 갱신을 **플럭스 제한자(flux limiter)** $\phi$ 를 쓴 방법이라 한다.[^2]

$$
u^{n+1}\_j=u^n\_j-\nu\bigl(u^n\_j-u^n\_{j-1}\bigr)-\frac{\nu(1-\nu)}{2}\Bigl(\phi(r\_j)\bigl(u^n\_{j+1}-u^n\_j\bigr)-\phi(r\_{j-1})\bigl(u^n\_j-u^n\_{j-1}\bigr)\Bigr)
$$

$\phi\equiv 0$ 이면 바람 위쪽 차분, $\phi\equiv 1$ 이면 Lax–Wendroff 방법이다. 직관 절의 무게는 minmod 제한자(minmod limiter) $\phi(r)=\max(0,\min(1,r))$ 이고, 지점 $0$ 에서 $r\_0=0/(-1)=0$ 이라 $\phi=0$ 이다.

# 성질

## Harten 의 판정

한 걸음이 다음 꼴로 쓰이고 모든 $j$ 에서 $C\_j\ge 0$, $D\_j\ge 0$, $C\_j+D\_j\le 1$ 이면 그 방법은 전체 변동 감소 방법이다.[^1]

$$
u^{n+1}\_j=u^n\_j-C\_{j-1}\bigl(u^n\_j-u^n\_{j-1}\bigr)+D\_j\bigl(u^n\_{j+1}-u^n\_j\bigr)
$$

이 판정은 계수 $C\_j$, $D\_j$ 가 값에 따라 달라도 쓸 수 있다. 증명의 요지는 한 걸음 뒤의 이웃 차이를 지금의 이웃 세 차이의 일차결합으로 쓰면 계수가 모두 $0$ 이상이고 합이 $1$ 이하라는 것이다.

## Sweby 영역

$0\le\nu\le 1$ 일 때 플럭스 제한자 방법은 $r\le 0$ 에서 $\phi(r)=0$ 이고 $r\gt 0$ 에서 다음을 만족하면 전체 변동 감소 방법이다.[^2]

$$
0\le\phi(r)\le\min(2r,2)
$$

minmod 제한자, superbee 제한자 $\max(0,\min(2r,1),\min(r,2))$, van Leer 제한자 $(r+\vert r\vert)/(1+\vert r\vert)$ 가 이 영역에 들어간다. $\phi(1)=1$ 이고 $\phi$ 가 $r=1$ 근처에서 매끄러우면 해가 매끄러운 곳에서 2 차 정확도를 갖는다.

## 단조성의 보존과 극값

전체 변동 감소 방법은 단조인 처음 값을 단조로 유지한다.[^1] 계단 앞에 봉우리가 생기면 단조가 깨지므로, 직관 절의 봉우리는 생기지 않는다. 대신 매끄러운 해의 극값에서는 $r\le 0$ 이 되어 $\phi=0$ 이므로 그 자리에서 1 차로 떨어진다. 극값 근처까지 높은 차수를 유지하려면 전체 변동이 조금 느는 것을 허락하는 [ENO 방법](eno-schemes.md)(essentially non-oscillatory scheme)을 쓴다.

## Godunov 정리와의 관계

플럭스 제한자 방법은 계수가 값에 따라 바뀌므로 선형이 아니고, [Godunov 정리](godunov-theorem.md)의 가정을 벗어난다. 그래서 봉우리를 만들지 않으면서 매끄러운 곳에서 2 차 정확도를 가질 수 있다.

# 활용

- 충격파와 접촉 불연속의 계산. 기체 역학, 천체 유체, 얕은 물 방정식에서 불연속 근처의 거짓 진동 없이 계산한다.
- [MUSCL 방법](muscl-method.md)(monotone upstream-centered schemes for conservation laws). 셀 안의 기울기를 minmod 같은 제한자로 줄여 셀 경계값을 만들고, 그 값으로 플럭스를 계산하는 같은 생각의 유한 부피 판이다.

[^1]: A. Harten, "High resolution schemes for hyperbolic conservation laws", *Journal of Computational Physics* 49 (1983), 357–393.

[^2]: P. K. Sweby, "High resolution schemes using flux limiters for hyperbolic conservation laws", *SIAM Journal on Numerical Analysis* 21 (1984), 995–1011.

# 연관 문서

## 선수지식

- [Godunov 정리](godunov-theorem.md)

## 더 알아보기

- [MUSCL 방법](muscl-method.md)
- [강한 안정성 보존 Runge–Kutta 방법](ssp-runge-kutta-methods.md)

#functional_analysis #analysis #computation
