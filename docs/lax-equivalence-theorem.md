# Lax 동치 정리

# 개요

**Lax 동치 정리(Lax equivalence theorem)** 는 선형 초기값 문제를 차분 방법으로 풀 때, 방정식을 바르게 근사하는 방법이면 해가 수렴하는 것과 오차가 불어나지 않는 것이 같다는 정리다. [열방정식](heat-equation.md)을 격자 간격 $h=0.1$ 에서 시간 간격 $k=0.004$ 로 풀면 답이 맞지만 $k=0.006$ 으로 풀면 숫자가 $10^{8}$ 크기로 튄다. 두 방법 모두 방정식을 같은 정도로 근사하므로, 차이는 한 단계의 작용소를 거듭 곱했을 때 노름이 유계로 남는지에서 나오고 이 정리는 그 유계성만 확인하게 한다.

# 직관

$u_t=u_{xx}$ 를 격자점 $x_j=jh$, 시각 $t_n=nk$ 에서 근사한다. 시간 미분을 앞 차분으로, 공간 이계 미분을 가운데 차분으로 바꾸고 $r=k/h^2$ 로 두면 다음 갱신식이 나온다.

$$
u^{n+1}\_j=ru^n_{j-1}+(1-2r)u^n_j+ru^n_{j+1}
$$

$u^n_j=g^ne^{ij\theta}$ 꼴의 진동을 넣으면 한 단계마다 곱해지는 값이 나온다.

$$
g(\theta)=1-2r+2r\cos\theta=1-4r\sin^2\frac\theta2
$$

$r=0.4$ 이면 $g$ 가 $\lbrack -0.6,1\rbrack$ 에 있어 어떤 진동도 커지지 않는다. $r=0.6$ 이면 $\theta=\pi$ 에서 $g=-1.4$ 다. 격자 간격으로 부호가 바뀌는 진동이 한 단계마다 $1.4$ 배가 되고, $t=1$ 까지 약 $167$ 단계를 가면 $1.4^{167}\approx 10^{24}$ 배다. 처음 값에 섞인 $10^{-16}$ 크기의 반올림 오차가 $10^{8}$ 크기로 자란다.

두 경우 모두 $h\to 0$ 이면 갱신식이 방정식으로 간다. 수렴을 가르는 것은 거듭 곱한 갱신의 크기가 유계인지다.

# 정의

[Banach 공간](banach-spaces.md) $X$ 에서 $u'=Au$, $u(0)=x$ 를 푼다. $A$ 는 [강연속 반군](c0-semigroups.md) $T(t)$ 의 생성원이고, 해는 $u(t)=T(t)x$ 다. 차분 방법은 시간 간격 $k\gt 0$ 마다 한 단계의 유계 작용소 $C(k)$ 를 주는 것이고, $n$ 단계 뒤의 근사해는 $C(k)^nx$ 다. 공간 간격 $h$ 는 $r=k/h^2$ 처럼 $k$ 에 묶어 둔다.

- **일관성(consistency).** 해의 조밀한 집합의 $x$ 에서, 한 단계의 오차가 $k$ 보다 빨리 $0$ 으로 간다. 곧 $t\in\lbrack 0,t_0\rbrack$ 에서 균등하게 다음이 성립한다.

$$
\frac{C(k)T(t)x-T(t+k)x}{k}\to 0\qquad(k\to 0)
$$

- **안정성(stability).** $nk\le t_0$ 인 모든 $n$, $k$ 에서 $\Vert C(k)^n\Vert\le M$ 인 상수 $M$ 이 있다.
- **수렴(convergence).** 모든 $x$ 와 $t\in\lbrack 0,t_0\rbrack$ 에서, $k_j\to 0$ 이고 $n_jk_j\to t$ 이면 $C(k_j)^{n_j}x\to T(t)x$ 다.

직관 절의 갱신식은 Taylor 전개로 일관성을 만족한다. 최대 노름에서 $r\le 1/2$ 이면 세 계수가 음이 아니고 합이 $1$ 이라 $\Vert C(k)\Vert=1$ 이므로 안정하다. $r=0.6$ 이면 $\Vert C(k)^n\Vert\ge 1.4^n$ 이라 안정하지 않다.

# 성질

## 동치 정리

일관된 차분 방법은 안정한 것과 수렴하는 것이 동치다.[^1]

안정성에서 수렴으로 가는 증명의 요지. $t=nk$ 에서 오차를 한 단계씩 쪼개면 다음과 같다.

$$
C(k)^nx-T(nk)x=\sum_{i=0}^{n-1}C(k)^{n-1-i}\bigl(C(k)T(ik)x-T((i+1)k)x\bigr)
$$

괄호 안은 일관성으로 $k\cdot o(1)$ 이고, 앞의 거듭제곱은 안정성으로 $M$ 이하다. $n$ 개를 더하면 $nk\cdot M\cdot o(1)\to 0$ 이다. 조밀한 집합에서의 수렴은 균등한 상한 $M$ 으로 모든 $x$ 로 넓혀진다.

수렴에서 안정성으로 가는 증명의 요지. 수렴하면 $x$ 마다 $\lbrace C(k)^nx\rbrace$ 가 유계이다. [균등유계성 원리](uniform-boundedness.md)로 작용소 노름 $\Vert C(k)^n\Vert$ 이 균등하게 유계다.

## von Neumann 조건

계수가 상수인 차분 방법을 $\ell^2$ 에서 보면 $C(k)$ 는 진동 $e^{ij\theta}$ 에 증폭 인자 $g(\theta)$ 를 곱하는 작용소다. 이때 안정성은 상수 $c$ 가 있어 모든 $\theta$ 에서 다음이 성립하는 것과 동치다. 이것을 **von Neumann 조건(von Neumann condition)** 이라 한다.

$$
\vert g(\theta)\vert\le 1+ck
$$

직관 절의 갱신식은 $\vert 1-4r\sin^2(\theta/2)\vert\le 1$ 이 모든 $\theta$ 에서 성립하는 것이 $r\le 1/2$ 인 것과 같으므로, $\ell^2$ 에서도 $r\le 1/2$ 일 때만 안정하다.

## CFL 조건

수송 방정식 $u_t+au_x=0$ ($a\gt 0$) 을 바람 위쪽 차분 $u^{n+1}\_j=u^n_j-\nu(u^n_j-u^n_{j-1})$, $\nu=ak/h$ 로 풀면 증폭 인자는 $1-\nu+\nu e^{-i\theta}$ 이고, 크기가 $1$ 이하인 것은 $0\le\nu\le 1$ 일 때다. 한 단계에 정보가 격자 한 칸보다 멀리 가지 않아야 한다는 이 조건을 **Courant–Friedrichs–Lewy 조건(Courant–Friedrichs–Lewy condition)** 이라 하고 줄여서 CFL 조건이라 한다.[^2]

## 반군 근사와의 관계

$C(k)$ 를 [Trotter–Kato 근사 정리](trotter-kato-theorem.md)의 Chernoff 곱 공식의 $V(k)$ 로 보면, 일관성은 핵에서 $(V(k)y-y)/k\to Ay$ 인 것이고 안정성은 $\Vert V(k)^n\Vert$ 의 균등한 상한이다. Chernoff 곱 공식은 이 두 조건에서 $V(t/n)^nx\to T(t)x$ 를 주므로 안정성에서 수렴으로 가는 방향과 같은 진술이다.

# 활용

- 시간 간격의 선택. 열방정식의 앞 Euler 차분은 $k\le h^2/2$ 일 때만 쓸 수 있다. 공간 격자를 절반으로 줄이면 시간 간격은 네 배로 줄여야 한다. 뒤쪽 Euler 차분 $(I-kA_h)^{-1}$ 은 모든 $r$ 에서 증폭 인자가 $1/(1+4r\sin^2(\theta/2))\le 1$ 이라 이 제약이 없다.
- 파동과 수송의 계산. 쌍곡형 방정식의 명시적 방법은 CFL 조건으로 시간 간격이 공간 간격에 비례하도록 묶인다.
- 새 방법의 검증. 일관성은 Taylor 전개로, 안정성은 von Neumann 조건으로 따로 확인하고, 정리로 수렴을 결론짓는다.

[^1]: P. D. Lax, R. D. Richtmyer, "Survey of the Stability of Linear Finite Difference Equations", *Communications on Pure and Applied Mathematics* 9 (1956), 267–293.
[^2]: R. Courant, K. Friedrichs, H. Lewy, "Über die partiellen Differenzengleichungen der mathematischen Physik", *Mathematische Annalen* 100 (1928), 32–74.

# 연관 문서

## 선수지식

- [열방정식](heat-equation.md)
- [Trotter–Kato 근사 정리](trotter-kato-theorem.md)

## 더 알아보기

- [Crank–Nicolson 방법](crank-nicolson-method.md)

#functional_analysis #analysis #algorithms
