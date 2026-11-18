# Kepler 방정식

# 개요

**Kepler 방정식(Kepler's equation)** 은 타원 궤도를 도는 행성이 주어진 시각에 궤도의 어디에 있는지를 정하는 방정식 $M=E-e\sin E$ 다. 화성이 태양에 가장 가까운 점을 지난 뒤 공전 주기의 4 분의 1 이 지나면, 화성은 태양에서 보아 $90^\circ$ 돈 자리가 아니라 그보다 더 간 자리에 있다. 태양에 가까울 때 더 빨리 돌기 때문이다.

Kepler 방정식은 지난 시간을 각 $M$ 으로, 궤도 위의 위치를 각 $E$ 로 적어 두 각의 관계를 준다. 이 방정식은 닫힌 식으로 풀리지 않으므로 [Newton 법](newton-method.md) 같은 반복으로 푼다.

# 직관

[Kepler 법칙](kepler-laws.md)의 면적 속도 일정에 따라, 태양과 행성을 잇는 선분이 쓸고 지나간 넓이는 지난 시간에 비례한다. 그래서 주기의 4 분의 1 이 지나면 선분은 타원 넓이의 4 분의 1 을 쓸었다. 문제는 넓이에서 위치를 거꾸로 찾는 것이다.

타원을 가로로 늘린 원으로 본다. 긴반지름 $a$, 짧은반지름 $b$ 인 타원의 중심을 원점에 두면 타원 위의 점은 $(a\cos E,b\sin E)$ 로 적힌다. 반지름 $a$ 인 원의 점 $(a\cos E,a\sin E)$ 를 세로로 $b/a$ 배 줄인 것이고, $E$ 는 그 원 위의 각이다.

태양은 초점 $(ae,0)$ 에 있고 $e$ 는 이심률이다. 태양에 가장 가까운 점 $(a,0)$ 에서 $(a\cos E,b\sin E)$ 까지 선분이 쓴 넓이는 원의 부채꼴 넓이 $a^2E/2$ 를 $b/a$ 배 한 $abE/2$ 에서, 중심과 태양과 행성이 이루는 삼각형의 넓이 $\frac12\cdot ae\cdot b\sin E$ 를 뺀 것이다. 이 넓이가 전체 $\pi ab$ 에서 차지하는 비가 지난 시간 $t$ 가 주기 $T$ 에서 차지하는 비와 같으므로 다음이 나온다.

$$
E-e\sin E=\frac{2\pi t}{T}
$$

화성은 $e=0.0934$ 이고 $t=T/4$ 이면 우변이 $\pi/2$ 다. $E=\pi/2$ 를 넣으면 좌변이 $\pi/2-0.0934$ 로 모자라므로 $E$ 는 $\pi/2$ 보다 크다. 방정식을 풀면 $E=1.6638$, 곧 $95.3^\circ$ 이고, 이때 태양에서 본 각은 $100.6^\circ$ 다.

# 정의

이심률 $0\le e\lt 1$ 인 타원 궤도에서 다음 세 각을 쓴다. 각은 모두 태양에 가장 가까운 점, 곧 **근일점(perihelion)** 에서 잰다.

- **평균 근점이각(mean anomaly)** $M=2\pi t/T$ 는 근일점을 지난 뒤 시간 $t$ 에 비례해 고르게 늘어나는 각이다.
- **이심 근점이각(eccentric anomaly)** $E$ 는 행성의 위치를 $(a\cos E,b\sin E)$ 로 적을 때의 각이다.
- **진 근점이각(true anomaly)** $\theta$ 는 태양에서 보아 근일점과 행성 사이의 각이다.

Kepler 방정식은 $M$ 과 $E$ 사이의 다음 관계다.

$$
M=E-e\sin E
$$

직관 절의 화성은 $M=\pi/2$ 이고 $E=1.6638$, $\theta=1.7565$ 다.

# 성질

## 해의 존재와 유일성

$f(E)=E-e\sin E$ 는 $f'(E)=1-e\cos E\ge 1-e\gt 0$ 이므로 순증가하고, $f(E+2\pi)=f(E)+2\pi$ 다. 따라서 모든 실수 $M$ 에 대해 $M=f(E)$ 인 $E$ 가 하나뿐이다. $f(0)=0$, $f(\pi)=\pi$ 이므로 $0\le M\le\pi$ 이면 $0\le E\le\pi$ 다.

## 거리와 진 근점이각

$E$ 가 정해지면 태양에서 행성까지의 거리 $r$ 과 진 근점이각 $\theta$ 는 다음 식으로 나온다.

$$
r=a(1-e\cos E),\qquad \tan\frac\theta2=\sqrt{\frac{1+e}{1-e}}\thinspace\tan\frac E2
$$

첫째 식은 $(a\cos E-ae)^2+(b\sin E)^2$ 에 $b^2=a^2(1-e^2)$ 을 넣어 정리한 것이다. 둘째 식은 $r\cos\theta=a(\cos E-e)$ 와 첫째 식에서 반각 공식으로 얻는다. 화성은 $a=1.524$ 이고 직관 절의 시각에 $r=1.537$ 이다.

## 고정점 반복

방정식을 $E=M+e\sin E$ 로 쓰면 우변의 사상 $g(E)=M+e\sin E$ 는 $\vert g'(E)\vert\le e\lt 1$ 이다. [Banach 고정점 정리](banach-fixed-point.md)에 의해 $E\_0=M$ 에서 시작한 반복 $E\_{k+1}=M+e\sin E\_k$ 가 해로 수렴하고, 오차는 단계마다 $e$ 배 이하로 준다. 화성에서는 $1.664196$, $1.663789$, $1.663793$ 이다.

## Newton 반복

$f(E)-M=0$ 에 Newton 법을 쓰면 다음 반복이 나온다.

$$
E_{k+1}=E_k-\frac{E_k-e\sin E_k-M}{1-e\cos E_k}
$$

분모가 $1-e$ 이상이므로 반복이 정의되고, 해 근처에서 오차가 단계마다 제곱으로 준다. 화성에서 $E\_0=M$ 으로 시작하면 오차가 $4.0\times 10^{-4}$, $7.5\times 10^{-9}$ 으로 줄고 셋째 값은 열 자리까지 맞는다.

## 급수 해

$e$ 에 대한 거듭제곱급수로 쓰면 다음이다.

$$
E=M+e\sin M+\frac{e^2}{2}\sin 2M+O(e^3)
$$

[Lagrange 반전 공식](lagrange-inversion.md)으로 모든 차수의 계수가 나온다. 이 급수는 $e\lt 0.6627\ldots$ 일 때만 모든 $M$ 에서 수렴한다. $\sin nM$ 으로 전개한 계수는 [Bessel 함수](bessel-functions.md)로 적힌다[^1].

$$
E=M+\sum_{n=1}^{\infty}\frac2n J_n(ne)\sin nM
$$

# 활용

- 천체력 계산. 행성, 위성, 혜성의 위치를 시각마다 구할 때 Kepler 방정식을 풀어 $E$ 를 얻고, 거리와 진 근점이각의 식으로 좌표를 낸다.
- [Bessel 함수](bessel-functions.md)의 기원. 위의 계수 $J\_n(ne)$ 를 계산하려고 Bessel 이 이 함수를 체계적으로 연구했다.
- [Newton 법](newton-method.md)의 시험 문제. 도함수가 $1-e$ 이상으로 아래에서 막혀 있어 수렴 범위와 초깃값 선택을 분석하기 쉽다.

[^1]: G. N. Watson, *A Treatise on the Theory of Bessel Functions*, 2nd ed., Cambridge University Press, 1944, Chapter 17.

# 연관 문서

## 선수지식

- [Kepler 법칙](kepler-laws.md)
- [Newton 법](newton-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algorithms #differential_geometry
