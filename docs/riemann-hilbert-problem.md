# Riemann–Hilbert 문제

# 개요

**Riemann–Hilbert 문제(Riemann–Hilbert problem)** 는 곡선 하나를 뺀 평면에서 정칙인 함수를, 곡선을 건널 때 값이 정해진 비율로 바뀐다는 조건으로 찾는 문제다. 차수 $n$ 의 [직교다항식](orthogonal-polynomials.md)은 $n$ 이 클 때 그래프가 어떻게 생기는지 직접 계산하기 어렵다. 직교다항식을 이런 문제의 해로 적으면, 문제를 바꾸어 가며 큰 $n$ 에서의 점근을 계산할 수 있다.

# 직관

구간 $\lbrack -1,1\rbrack$ 을 뺀 평면에서 [정칙함수](holomorphic-functions.md) $m$ 을 찾는다. 조건은 둘이다. 구간을 위에서 다가간 값이 아래에서 다가간 값의 $c$ 배이고, $z$ 가 멀어지면 $m(z)$ 가 $1$ 로 간다. $c$ 는 $0$ 이 아닌 복소수다.

로그를 취하면 곱의 조건이 합의 조건이 된다. $\log m$ 의 위쪽 값과 아래쪽 값의 차가 $\log c$ 여야 한다. 함수 $\log\frac{z-1}{z+1}$ 은 구간 위에서 편각이 $\pi$, 아래에서 $-\pi$ 이므로 위아래 값의 차가 $2\pi i$ 다. 따라서 다음 함수가 두 조건을 만족한다.

$$
m(z)=\Bigl(\frac{z-1}{z+1}\Bigr)^{\gamma},\qquad\gamma=\frac{\log c}{2\pi i}
$$

값이 $2\times2$ 행렬이면 곱의 순서를 바꿀 때 값이 달라지므로 로그로 합을 만들 수 없다. 직교다항식이 나오는 문제가 이 행렬 꼴이다. 행렬 꼴은 해를 식으로 적는 대신 점근 계산의 대상으로 다룬다.

# 정의

## 문제

$\Sigma$ 를 방향이 붙은 곡선들의 합집합이라 하고, 진행 방향의 왼쪽을 $+$ 쪽, 오른쪽을 $-$ 쪽이라 하자. **점프 행렬(jump matrix)** $v:\Sigma\to\mathrm{GL}\_2(\mathbb C)$ 가 주어질 때, 다음을 만족하는 $m:\mathbb C\setminus\Sigma\to\mathrm{GL}\_2(\mathbb C)$ 를 찾는 문제가 Riemann–Hilbert 문제다.

1. $m$ 은 $\mathbb C\setminus\Sigma$ 에서 정칙이다.
2. $\Sigma$ 위에서 $m_+(s)=m_-(s)\thinspace v(s)$ 다. $m_\pm(s)$ 는 $\pm$ 쪽에서 $s$ 로 다가간 극한이다.
3. $z\to\infty$ 에서 $m(z)\to I$ 다.

직관 절의 예는 $1\times1$ 판이다. $\Sigma$ 는 왼쪽에서 오른쪽으로 향한 $\lbrack -1,1\rbrack$ 이어서 $+$ 쪽이 위이고, $v=c$ 다.

## Cauchy 변환

$\Sigma$ 위의 함수 $f$ 의 **Cauchy 변환(Cauchy transform)** 은 다음이다.

$$
Cf(z)=\frac{1}{2\pi i}\int_\Sigma\frac{f(s)}{s-z}\thinspace ds\qquad(z\notin\Sigma)
$$

Sokhotski–Plemelj 공식(Sokhotski–Plemelj formula)에 따라 $f$ 가 Hölder 연속이면 $(Cf)\_+-(Cf)\_-=f$ 다. 직관 절에서는 $f=\log c$ 로 두면 $C f(z)=\gamma\log\frac{z-1}{z+1}$ 이고 $m=e^{Cf}$ 다.

# 성질

## 유일성

$\det v=1$ 이면 해는 많아야 하나다. $\det m$ 은 $\Sigma$ 에서 값이 바뀌지 않으므로 곡선 위까지 정칙으로 이어지고, 무한대에서 $1$ 로 가므로 [Liouville 정리](liouville-theorem.md)로 $1$ 이다. 해가 둘이면 $\tilde m\thinspace m^{-1}$ 이 같은 논법으로 $I$ 다.

곡선에 끝점 $a$ 가 있으면 그 근처에서 $m$ 이 $\lvert z-a\rvert^{-1}$ 보다 느리게 커진다는 조건을 더한다. 그러면 끝점은 없앨 수 있는 특이점이다.

## 직교다항식의 표현

실수축 위의 가중치 $w\ge 0$ 의 모든 적률이 유한하다고 하자. 실수축을 왼쪽에서 오른쪽으로 향하게 두고 점프 행렬과 무한대 조건을 다음으로 바꾼다.

$$
v(s)=\begin{pmatrix}1&w(s)\cr 0&1\end{pmatrix},\qquad Y(z)\begin{pmatrix}z^{-n}&0\cr 0&z^{n}\end{pmatrix}\to I\quad(z\to\infty)
$$

Fokas–Its–Kitaev 정리(Fokas–Its–Kitaev theorem)에 따르면 해 $Y$ 의 첫 행은 $(\pi_n,\thinspace C(\pi_nw))$ 다.[^1] $\pi_n$ 은 $w$ 에 대한 최고차항 계수 $1$ 인 차수 $n$ 의 직교다항식이고, 둘째 행은 $\pi_{n-1}$ 의 상수배와 그 Cauchy 변환이다.

첫 행을 확인한다. $\pi_n$ 은 다항식이라 점프가 없고, 둘째 성분의 점프는 Sokhotski–Plemelj 공식으로 $\pi_nw$ 여서 $v$ 의 $(1,2)$ 성분과 맞는다. $1/(s-z)$ 를 $z^{-1}$ 의 급수로 펼치면 $\int s^k\pi_n w\thinspace ds=0$ $(k\lt n)$ 이므로 $C(\pi_nw)(z)=O(z^{-n-1})$ 이고, 무한대 조건과 맞는다.

## Deift–Zhou 최급강하법

**Deift–Zhou 최급강하법(Deift–Zhou steepest descent method)** 은 점프 행렬에 큰 매개변수 $n$ 이 들어 있는 문제의 해를 $n\to\infty$ 에서 계산하는 방법이다.[^2] 단계는 넷이다.

1. 평형측도(equilibrium measure)로 만든 함수 $g$ 로 $Y$ 를 나누어 무한대의 $z^{\pm n}$ 을 없앤다. 점프 행렬의 성분이 크기가 $1$ 인 진동 인수로 바뀐다.
2. 점프 행렬을 세 행렬의 곱으로 나누고 곡선을 위아래로 벌린다. 벌린 곡선 위에서는 진동 인수가 지수적으로 작아진다.
3. 남은 점프만 가진 문제를 식으로 풀고, 곡선의 끝점 근처에서는 [Airy 함수](airy-functions.md)로 만든 국소 해를 붙인다.
4. 원래 해를 이 근사로 나눈 것은 점프 행렬이 $I+O(n^{-1})$ 인 문제의 해다. 이것은 Cauchy 변환의 Neumann 급수로 풀리고 $I$ 에 가깝다.

이 근사가 직교다항식의 점근을 주고, 끝점의 Airy 국소 해에서 큰 무작위 행렬의 가장 큰 고윳값 근처의 분포가 나온다.

# 활용

- [Baik–Deift–Johansson 정리](baik-deift-johansson.md). 단위원 위의 직교다항식에 대한 같은 꼴의 문제를 세우고 최급강하법으로 [Toeplitz 행렬](toeplitz-matrices.md)의 행렬식의 점근을 계산해 [Tracy–Widom 분포](tracy-widom.md)를 얻는다.
- 무작위 행렬의 보편성. 가중치 $e^{-nV(x)}$ 의 직교다항식 점근을 이 방법으로 구하면, 고윳값 간격의 국소 분포가 $V$ 에 의존하지 않는다는 것이 증명된다.[^3]
- [Painlevé 방정식](painleve-equations.md)의 연결 공식. 등모노드로미 변형의 모노드로미 자료를 점프 행렬로 두고 최급강하법을 적용해, 해의 $x\to+\infty$ 와 $x\to-\infty$ 의 점근을 잇는다.
- [적분가능계](integrable-systems.md). 산란 역변환으로 푸는 비선형 방정식의 해가 이런 문제의 해로 적히고, Deift–Zhou 가 처음 다룬 것이 [수정 Korteweg–de Vries 방정식](modified-korteweg-de-vries-equation.md)(modified Korteweg–de Vries equation, MKdV)의 긴 시간 점근이다.

[^1]: A. S. Fokas, A. R. Its, A. V. Kitaev, The isomonodromy approach to matrix models in 2D quantum gravity, *Comm. Math. Phys.* **147** (1992), 395–430.
[^2]: P. Deift, X. Zhou, A steepest descent method for oscillatory Riemann–Hilbert problems. Asymptotics for the MKdV equation, *Ann. of Math.* **137** (1993), 295–368.
[^3]: P. Deift, *Orthogonal Polynomials and Random Matrices: A Riemann–Hilbert Approach*, Courant Lecture Notes in Mathematics **3**, AMS (1999).

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [직교다항식](orthogonal-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #probability
