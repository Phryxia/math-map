# Floquet 이론

# 개요

**Floquet 이론(Floquet theory)** 은 계수가 주기적으로 바뀌는 선형 미분방정식의 해가 시간이 지나며 커지는지, 머무는지, 줄어드는지를 한 주기의 계산으로 판정하는 이론이다. 그네를 타는 아이는 한 번 오가는 동안 무릎을 두 번 굽혔다 펴서 진폭을 키운다. 용수철 상수가 $1.2$ 와 $0.8$ 로 번갈아 바뀌는 진동자 $y''+k(t)y=0$ 에서도, 바뀌는 주기가 고유 주기의 절반이면 진동이 열 주기 만에 $7$ 배로 커진다. Floquet 이론은 한 주기 동안의 해를 행렬 하나로 모으고, 그 행렬의 고윳값으로 이런 증폭이 일어나는지 가린다.

# 직관

$k(t)$ 는 시각 $0$ 부터 $\pi/2$ 까지 $1.2$, $\pi/2$ 부터 $\pi$ 까지 $0.8$ 이고, 이것을 주기 $\pi$ 로 되풀이한다. $k$ 가 상수 $1$ 이면 해가 $\cos t$ 라 고유 주기는 $2\pi$ 이고, $k$ 가 바뀌는 주기 $\pi$ 는 그 절반이다.

$k$ 가 상수인 구간에서는 해를 바로 쓸 수 있다. $\omega=\sqrt k$ 로 두면 길이 $\tau$ 인 구간이 $(y,y')$ 을 다음 행렬로 옮긴다.

$$
R(k,\tau)=\begin{pmatrix}\cos\omega\tau&\tfrac1\omega\sin\omega\tau\cr -\omega\sin\omega\tau&\cos\omega\tau\end{pmatrix}
$$

한 주기는 두 구간을 차례로 지나므로 $(y,y')$ 을 $M=R(0.8,\pi/2)R(1.2,\pi/2)$ 로 옮긴다. 계산하면 다음이 나온다.

$$
M\approx\begin{pmatrix}-1.2190&-0.0157\cr -0.0470&-0.8209\end{pmatrix}
$$

$k$ 가 같은 꼴로 되풀이되므로 $n$ 주기 뒤의 $(y,y')$ 은 처음 값에 $M^n$ 을 곱한 것이다. 그러면 오래 가서 해가 커지는지는 $M$ 의 [고윳값](eigenvalues.md)으로 정해진다. 고윳값은 $-1.2209$ 와 $-0.8191$ 이고, 첫째 고윳값 방향의 성분이 주기마다 $1.2209$ 배로 커진다. $y(0)=1$, $y'(0)=0$ 에서 시작하면 열 주기 뒤 $y=7.33$ 이다.

같은 $k$ 값을 주기 $2$ 로 바꾸면 $M$ 의 대각합이 $-0.8424$ 이고 고윳값은 절댓값이 $1$ 인 복소수 둘이다. 이때 $M^n$ 은 유계라 진동이 커지지 않는다.

# 정의

## 주기 계수 방정식과 기본 행렬

$A(t)$ 가 $n\times n$ 행렬값 연속함수이고 모든 $t$ 에서 $A(t+T)=A(t)$ 일 때 다음 방정식을 **주기 계수 선형 방정식(linear equation with periodic coefficients)** 이라 한다.

$$
x'=A(t)x
$$

$\Phi(0)=I$ 이고 $\Phi'=A(t)\Phi$ 인 행렬값 해 $\Phi$ 를 **기본 행렬(principal fundamental matrix)** 이라 한다. 해는 $x(t)=\Phi(t)x(0)$ 이다. 직관 절은 $x=(y,y')$, $T=\pi$ 이고 $A(t)$ 의 둘째 행이 $(-k(t),0)$ 인 경우다.

## 모노드로미 행렬과 Floquet 승수

$M=\Phi(T)$ 를 **모노드로미 행렬(monodromy matrix)** 이라 하고, 그 고윳값을 **Floquet 승수(Floquet multiplier)** 라 한다. $e^{\rho T}=\mu$ 인 수 $\rho$ 를 승수 $\mu$ 의 **Floquet 지수(Floquet exponent)** 라 한다. $\rho$ 는 $2\pi i/T$ 의 정수배만큼의 모호함이 있다. 직관 절의 $M$ 이 모노드로미 행렬이고, 승수 $-1.2209$ 의 지수는 실수부가 $\ln 1.2209/\pi\approx 0.0635$ 다.

# 성질

## Floquet 정리

$\Phi(t)=P(t)e^{tB}$ 인 상수 행렬 $B$ 와 주기 $T$ 인 가역 행렬값 함수 $P(t)$ 가 존재한다.[^1]

증명의 요지. $\Phi(t+T)$ 도 같은 방정식의 행렬값 해이고 $t=0$ 에서 $M$ 이므로 $\Phi(t+T)=\Phi(t)M$ 이다. $M$ 은 가역이라 [행렬 로그](matrix-logarithm.md)가 존재하여 $e^{TB}=M$ 인 복소 행렬 $B$ 를 고를 수 있다. $P(t)=\Phi(t)e^{-tB}$ 로 두면 다음이 나온다.

$$
P(t+T)=\Phi(t)Me^{-TB}e^{-tB}=P(t)
$$

$A$ 가 실수 행렬이면 $M^2$ 이 실수 로그를 가지므로, 실수 $B$ 와 주기 $2T$ 인 실수 $P$ 로도 쓸 수 있다.[^1]

## 상수 계수 방정식으로의 변환

$x=P(t)z$ 로 변수를 바꾸면 $z'=Bz$ 가 된다. 주기 계수 방정식은 주기적인 좌표 변환으로 상수 계수 방정식과 같아지고, 해의 장기 거동은 $B$ 의 고윳값, 곧 Floquet 지수로 정해진다. 이것을 Lyapunov 축약 정리(Lyapunov reducibility theorem)라 부른다.

## 안정성 판정

모든 승수가 $\vert\mu\vert\lt 1$ 이면 모든 해가 $0$ 으로 수렴한다. $\vert\mu\vert\gt 1$ 인 승수가 하나라도 있으면 무한히 커지는 해가 존재한다. 모든 승수가 $\vert\mu\vert\le 1$ 이고 $\vert\mu\vert=1$ 인 승수의 [Jordan 블록](jordan-canonical-form.md)이 모두 크기 $1$ 이면 모든 해가 유계다.[^1] 직관 절의 주기 $\pi$ 인 경우는 둘째 경우이고, 주기 $2$ 인 경우는 셋째 경우다.

## Liouville 공식과 Hill 방정식

$\det\Phi(t)$ 는 다음 공식을 만족한다. 이것을 [Liouville 공식](wronskian.md)(Liouville's formula)이라 한다.

$$
\det\Phi(t)=\exp\int_0^t\mathrm{tr}\thinspace A(s)\thinspace ds
$$

$y''+k(t)y=0$ 꼴의 **Hill 방정식(Hill's equation)** 은 $\mathrm{tr}\thinspace A=0$ 이라 $\det M=1$ 이고, 두 승수의 곱이 $1$ 이다. 그래서 승수는 $\mu^2-(\mathrm{tr}\thinspace M)\mu+1=0$ 의 두 근이고, 안정성이 대각합 하나로 정해진다.

- $\vert\mathrm{tr}\thinspace M\vert\lt 2$ 이면 두 승수가 단위원 위의 켤레 복소수라 모든 해가 유계다.
- $\vert\mathrm{tr}\thinspace M\vert\gt 2$ 이면 절댓값이 $1$ 보다 큰 실수 승수가 있어 해가 지수적으로 커진다.

직관 절의 두 경우는 대각합이 $-2.0400$ 과 $-0.8424$ 이다. $k$ 가 상수 $1$ 이고 주기를 $\pi$ 로 보면 $M=-I$ 라 대각합이 정확히 $-2$ 이고, $k$ 를 조금만 흔들어도 $\vert\mathrm{tr}\thinspace M\vert\gt 2$ 쪽으로 넘어갈 수 있다. 고유 주기의 절반이 $k$ 의 주기와 맞는 이 자리에서 생기는 증폭을 **매개변수 공명(parametric resonance)** 이라 한다.

## Mathieu 방정식의 불안정 영역

$y''+(a+2q\cos 2t)y=0$ 을 **Mathieu 방정식(Mathieu equation)** 이라 한다. $(a,q)$ 평면에서 $\vert\mathrm{tr}\thinspace M\vert\gt 2$ 인 점들은 $q=0$ 축의 $a=m^2$ $(m=1,2,3,\dots)$ 에서 뻗어 나오는 띠들을 이룬다.[^2] $q$ 가 작을 때 $a=1$ 에서 나오는 띠가 가장 넓다. 직관 절의 공명이 이 첫 띠에 해당한다.

# 활용

- 매개변수 공명. 그네, 진동하는 지지점 위의 진자, 주기적으로 당기는 줄에서 진폭이 커지는 조건을 Floquet 승수로 계산한다. 지지점을 빠르게 위아래로 흔들면 뒤집힌 진자가 서 있는 Kapitza 진자도 Mathieu 방정식의 안정 영역으로 설명된다.[^2]
- 주기해의 안정성. 비선형 방정식의 주기해 근처에서 선형화하면 주기 계수 방정식이 나오고, 그 승수로 주기해의 안정성을 정한다. 자율계에서는 주기해 방향의 승수 하나가 항상 $1$ 이다.[^1]
- 고체물리. 주기 퍼텐셜 속 전자의 Schrödinger 방정식은 위치에 대한 Hill 방정식이고, $\vert\mathrm{tr}\thinspace M\vert\le 2$ 인 에너지 구간이 허용 띠, 나머지가 띠 틈이 된다. 파동함수가 주기함수에 $e^{i\kappa x}$ 를 곱한 꼴이라는 Bloch 정리(Bloch's theorem)는 Floquet 정리를 이 방정식에 쓴 것이다.
- 수치 계산. 모노드로미 행렬은 한 주기 동안 기본 행렬을 수치적분해 구하고, 주기 안에서 $A(t)$ 가 교환하지 않으면 [Magnus 전개](magnus-expansion.md)로 $\Phi(T)$ 를 행렬 지수 하나로 근사한다.

[^1]: C. Chicone, *Ordinary Differential Equations with Applications*, 2nd ed., Springer (2006), 2.4 절. Floquet 정리, 실수 형태와 주기 2T, 승수에 의한 안정성 판정, 주기해의 선형화.
[^2]: W. Magnus, S. Winkler, *Hill's Equation*, Interscience (1966), 1 장과 2 장. Hill 방정식의 판별식, Mathieu 방정식의 불안정 영역.

# 연관 문서

## 선수지식

- [행렬 로그](matrix-logarithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra
