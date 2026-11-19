# Lax–Wendroff 방법

# 개요

**Lax–Wendroff 방법(Lax–Wendroff method)** 은 파동이 실려 가는 방정식을 격자 위에서 한 걸음씩 풀 때, 시간 방향 Taylor 전개의 2 차 항까지 맞춘 차분 방법이다. 강물에 실린 오염 물질의 완만한 농도 물결을 가장 단순한 바람 위쪽 차분으로 계산하면, 물결이 한 파장을 가는 동안 높이가 처음의 37% 로 깎인다. Lax–Wendroff 방법은 이웃 세 점의 값에 2 차 항을 더해, 같은 격자에서 높이를 93% 까지 지킨다.

# 직관

물살의 속도가 $1$ 인 강에서 농도는 수송 방정식 $u\_t+u\_x=0$ 을 따른다. 격자 간격 $h$, 시간 간격 $k=h/2$ 로 두어 $\nu=k/h=0.5$ 이고, 처음 농도는 파장이 $10h$ 인 물결 $u(x,0)=\cos(\pi x/(5h))$ 라 한다.

[CFL 조건](cfl-condition.md)(Courant–Friedrichs–Lewy condition) 문서의 바람 위쪽 차분은 한 걸음마다 이 물결의 높이를 $0.951$ 배 한다. 물결이 한 파장을 가는 데 $20$ 걸음이 걸리므로 그동안 높이는 $0.951^{20}=0.367$ 배가 된다. 참해는 높이가 그대로다.

바람 위쪽 차분은 시간 방향 Taylor 전개의 1 차 항까지만 맞춘다. 참해에서 $u\_t=-u\_x$ 이고, 이것을 한 번 더 미분하면 $u\_{tt}=u\_{xx}$ 다. 그래서 한 걸음 뒤의 값을 2 차 항까지 쓰면 공간 미분만 남는다.

$$
u(x,t+k)\approx u-k\thinspace u\_x+\frac{k^2}{2}u\_{xx}
$$

$u\_x$ 와 $u\_{xx}$ 를 이웃 세 점의 가운데 차분으로 바꾼 것이 Lax–Wendroff 방법이다. 같은 물결에서 한 걸음의 배율이 $0.9966$ 이고, 한 파장 뒤 높이는 $0.934$ 배다.

# 정의

수송 방정식 $u\_t+au\_x=0$ 과 $\nu=ak/h$ 에 대해 다음 갱신을 **Lax–Wendroff 방법** 이라 한다.[^1]

$$
u^{n+1}\_j=u^n\_j-\frac{\nu}{2}\bigl(u^n\_{j+1}-u^n\_{j-1}\bigr)+\frac{\nu^2}{2}\bigl(u^n\_{j+1}-2u^n\_j+u^n\_{j-1}\bigr)
$$

둘째 항은 $-ku\_x$ 를, 셋째 항은 $\frac{k^2}{2}a^2u\_{xx}$ 를 가운데 차분으로 바꾼 것이다. 이웃 값의 계수로 정리하면 다음과 같다.

$$
u^{n+1}\_j=\frac{\nu(1+\nu)}{2}u^n\_{j-1}+(1-\nu^2)u^n\_j-\frac{\nu(1-\nu)}{2}u^n\_{j+1}
$$

$\nu=0.5$ 이면 계수는 $0.375$, $0.75$, $-0.125$ 다.

# 성질

## 2 차 정확도

참해를 넣었을 때 한 걸음의 오차가 $O(h^3)$ 이라, 고정된 시각까지의 오차가 $O(h^2)$ 이다. 계수가 $\sum c\_m=1$, $\sum mc\_m=-\nu$, $\sum m^2c\_m=\nu^2$ 을 만족하는 것으로 확인된다.

## 안정성

진동 $e^{ij\theta}$ 를 넣으면 증폭 인자와 그 크기는 다음과 같다.

$$
g(\theta)=1-i\nu\sin\theta-\nu^2(1-\cos\theta),\qquad \vert g(\theta)\vert^2=1-\nu^2(1-\nu^2)(1-\cos\theta)^2
$$

$\vert g\vert\le 1$ 이 모든 $\theta$ 에서 성립하는 것은 $\vert\nu\vert\le 1$ 일 때다. von Neumann 조건(von Neumann condition)으로 안정성과 CFL 조건이 같은 부등식이 되고, [Lax 동치 정리](lax-equivalence-theorem.md)로 $\vert\nu\vert\le 1$ 에서 수렴한다. 직관 절의 배율은 $\theta=\pi/5$, $\nu=0.5$ 를 넣은 값이다.

## 분산과 진동

Lax–Wendroff 방법의 계산값은 다음 방정식의 해에 더 가깝다.[^2]

$$
u\_t+au\_x=\frac{ah^2}{6}(\nu^2-1)\thinspace u\_{xxx}
$$

오른쪽은 3 차 미분 항이라 물결의 높이가 아니라 속도를 파장에 따라 바꾼다. 짧은 물결이 늦게 가서, 계단처럼 갑자기 바뀌는 값의 뒤쪽에 진동이 남는다. 계단 $1,1,0,0$ 에 한 걸음 적용하면 지점 $0$ 의 값이 $1.125$ 로 처음 최댓값을 넘는다. [Godunov 정리](godunov-theorem.md)에 따르면 이런 봉우리를 만들지 않는 선형 방법은 1 차 정확도를 넘지 못한다.

## 보존 법칙

비선형 보존 법칙 $u\_t+f(u)\_x=0$ 에서는 셀 경계의 값을 먼저 반 걸음 계산하고 그 플럭스로 갱신하는 두 단계 Lax–Wendroff 방법(Richtmyer 방법)을 쓴다. 보존형 차분 방법이 수렴하면 그 극한이 보존 법칙의 약해라는 것이 같은 논문의 [Lax–Wendroff 정리](lax-wendroff-theorem.md)다.[^1]

# 활용

- 매끄러운 파동의 계산. 음파, 수면파, 기상의 이류처럼 해가 매끄러운 문제에서 바람 위쪽 차분보다 적은 격자로 같은 정확도를 얻는다.
- 고해상도 방법의 재료. 플럭스 제한자(flux limiter)를 쓰는 [전체 변동 감소 방법](tvd-schemes.md)(total variation diminishing, TVD)은 매끄러운 곳에서 Lax–Wendroff 방법을, 계단 근처에서 바람 위쪽 차분을 쓴다.
- MacCormack 방법. 앞 차분과 뒤 차분을 번갈아 쓰는 예측·수정의 두 단계로, 선형 방정식에서는 Lax–Wendroff 방법과 같아진다. 압축성 유체 계산에 쓰인다.

[^1]: P. D. Lax, B. Wendroff, "Systems of conservation laws", *Communications on Pure and Applied Mathematics* 13 (1960), 217–237.

[^2]: R. J. LeVeque, *Finite Volume Methods for Hyperbolic Problems*, Cambridge University Press (2002), 8 장.

# 연관 문서

## 선수지식

- [CFL 조건](cfl-condition.md)

## 더 알아보기

- [Godunov 정리](godunov-theorem.md)

#functional_analysis #analysis #computation
