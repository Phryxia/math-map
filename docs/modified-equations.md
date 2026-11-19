# 수정 방정식

# 개요

**수정 방정식(modified equation)** 은 수치 방법이 실제로 계산하는 값을 정확한 해로 갖는, 원래 미분방정식을 조금 바꾼 미분방정식이다. 용수철에 매단 추의 진동을 [Euler 방법](euler-method.md)으로 계산하면 진폭이 걸음마다 커져 궤적이 바깥으로 도는 나선이 된다. 이 나선을 "진폭을 조금씩 키우는 항이 더해진 진동" 의 정확한 해로 적으면, 수치해가 틀리는 방식이 미분방정식에 더해진 항 하나로 드러난다.

# 직관

[조화 진동자](harmonic-oscillator.md) $q'=p$, $p'=-q$ 의 해는 원 $q^2+p^2=1$ 위를 돈다. Euler 방법으로 걸음 $h$ 를 가면 다음과 같다.

$$
q\_{n+1}=q\_n+hp\_n,\qquad p\_{n+1}=p\_n-hq\_n
$$

한 걸음마다 $q^2+p^2$ 이 $1+h^2$ 배가 된다. $h=0.1$ 로 $100$ 걸음, 곧 시각 $10$ 까지 가면 원점에서의 거리가 $(1.01)^{50}=1.6446$ 배다.

이 수열은 다음 미분방정식의 해를 시각 $nh$ 에서 잰 값과 정확히 같다.

$$
q'=a\thinspace q+b\thinspace p,\qquad p'=-b\thinspace q+a\thinspace p,\qquad a=\frac{\log(1+h^2)}{2h},\quad b=\frac{\arctan h}{h}
$$

$h=0.1$ 이면 $a=0.0498$, $b=0.9967$ 이다. 원래 방정식에 진폭을 키우는 항 $a\thinspace(q,p)$ 가 더해지고 회전이 조금 느려졌다. 시각 $10$ 에서 거리는 $e^{10a}=1.6446$ 배로, 위의 계산과 같다. $a$ 를 $h$ 로 펼치면 $a=h/2-h^3/4+\cdots$ 라 처음 항만 써도 $e^{0.5}=1.649$ 로 가깝다.

# 정의

## 수정 방정식

미분방정식 $y'=f(y)$ 를 한 걸음 사상 $y\_{n+1}=\Phi\_h(y\_n)$ 으로 푸는 수치 방법을 생각한다. 다음 꼴의 미분방정식을 그 방법의 **수정 방정식** 이라 한다.[^1]

$$
\tilde y'=f(\tilde y)+hf\_2(\tilde y)+h^2f\_3(\tilde y)+\cdots
$$

여기서 $f\_j$ 는 $\tilde y(0)=y\_0$ 인 해의 시각 $h$ 의 값을 $h$ 의 형식적 거듭제곱급수로 펼쳤을 때, 그것이 $\Phi\_h(y\_0)$ 의 전개와 모든 차수에서 같아지도록 정한다. 이 과정을 **역방향 오차 해석(backward error analysis)** 이라 한다. 수치해의 오차를 해가 틀린 정도로 보지 않고, 방정식이 바뀐 정도로 본다.

## 계수의 계산

Euler 방법 $\Phi\_h(y)=y+hf(y)$ 의 경우 Taylor 전개를 차수별로 맞추면 처음 두 계수가 나온다.[^1]

$$
f\_2=-\frac12f'f,\qquad f\_3=\frac16f''(f,f)+\frac13f'f'f
$$

$f(y)=\lambda y$ 이면 $f'f=\lambda^2y$, $f''=0$ 이라 수정 방정식은 다음과 같다.

$$
\tilde y'=\Bigl(\lambda-\frac{h\lambda^2}{2}+\frac{h^2\lambda^3}{3}-\cdots\Bigr)\tilde y=\frac{\log(1+h\lambda)}{h}\thinspace\tilde y
$$

직관 절은 $\lambda=\pm i$ 인 두 성분을 실수로 묶은 것이다. $\log(1+ih)/h$ 의 실수부가 $a$, 허수부가 $b$ 다.

# 성질

## 차수와 첫 항

방법의 차수가 $r$ 이면 $f\_2=\cdots=f\_r=0$ 이고 $f\_{r+1}\ne 0$ 이다. 첫 항 $h^rf\_{r+1}$ 이 국소 오차의 주항이다. Euler 방법은 $r=1$ 이라 $f\_2=-\frac12f'f$ 가 첫 항이다.

## 급수의 발산과 지수적으로 작은 오차

수정 방정식의 급수는 일반적으로 수렴하지 않는다. $f$ 가 해석적이면 $N$ 을 $h$ 에 맞추어 $N\approx c/h$ 에서 잘라낸 수정 방정식의 흐름 $\tilde\varphi\_h$ 가 다음을 만족하는 상수 $C,c\gt 0$ 이 있다.[^2]

$$
\Vert\Phi\_h(y)-\tilde\varphi\_h(y)\Vert\le Che^{-c/h}
$$

한 걸음의 차이가 지수적으로 작으므로, 수치해는 $e^{c/h}$ 에 비례하는 긴 시간 동안 잘라낸 수정 방정식의 해를 따라간다.

## 구조의 보존

방법이 보존하는 구조를 수정 방정식도 갖는다.[^1]

- 방법이 심플렉틱이면 수정 방정식은 Hamilton 방정식이고, 그 Hamiltonian $\tilde H$ 가 수치해에서 거의 보존된다. [심플렉틱 적분기](symplectic-integrators.md)의 에너지가 한없이 떠돌지 않는 것이 이 성질에서 나온다.
- 방법이 대칭이면, 곧 $\Phi\_{-h}=\Phi\_h^{-1}$ 이면 $h$ 의 짝수 거듭제곱 항만 남는다.
- 방법이 부피를 보존하면 수정 방정식의 벡터장은 발산이 $0$ 이다.

직관 절의 Euler 방법은 심플렉틱이 아니고, 수정 방정식에 $a\thinspace(q,p)$ 라는 발산이 $2a$ 인 항이 생겼다. 같은 진동자를 $q\_{n+1}=q\_n+hp\_n$, $p\_{n+1}=p\_n-hq\_{n+1}$ 로 푸는 심플렉틱 Euler 방법은 $q^2+p^2+hpq$ 를 정확히 보존한다.

# 활용

- 장시간 거동의 설명. 행성 궤도, 분자 동역학처럼 긴 시간을 계산할 때, 수치해의 에너지 떠돎이나 궤도의 나선을 수정 방정식의 추가 항으로 설명한다.
- 편미분방정식 차분의 분석. [CFL 조건](cfl-condition.md)(Courant–Friedrichs–Lewy condition) 문서의 바람 위쪽 차분이 수송 방정식에 확산 항을 더한 방정식을 푸는 것이 같은 생각이다.
- 방법의 설계. 원하는 수정 방정식이 원래 방정식에 더 가깝도록 벡터장을 미리 고쳐 넣어 차수를 올리는 수정 적분기(modifying integrators)를 만든다.
- [B 급수](b-series.md). [Runge–Kutta 방법](runge-kutta-methods.md)의 수정 방정식 계수는 뿌리 있는 나무에 대한 B 급수로 적히고, 나무 위의 대수 연산으로 계산된다.

[^1]: E. Hairer, C. Lubich, G. Wanner, *Geometric Numerical Integration*, 2nd ed., Springer (2006), IX 장.

[^2]: G. Benettin, A. Giorgilli, "On the Hamiltonian interpolation of near-to-the-identity symplectic mappings with application to symplectic integration algorithms", *Journal of Statistical Physics* 74 (1994), 1117–1143. 일반 벡터장은 E. Hairer, C. Lubich, "The life-span of backward error analysis for numerical integrators", *Numerische Mathematik* 76 (1997), 441–462.

# 연관 문서

## 선수지식

- [Euler 방법](euler-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #differential_geometry
