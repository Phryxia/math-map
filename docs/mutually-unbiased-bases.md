# 상호 편향 없는 기저

# 개요

**상호 편향 없는 기저(mutually unbiased bases)** 는 한 기저의 어느 상태를 다른 기저로 측정해도 모든 결과가 같은 확률로 나오는 정규직교 기저들의 모임이다. 큐비트 $\vert 0\rangle$ 을 기저 $\lbrace\vert +\rangle,\vert -\rangle\rbrace$ 로 측정하면 두 결과가 확률 $\tfrac12$ 씩 나와, 측정 결과에서 원래 상태에 대해 알 수 있는 것이 없다. [양자 키 분배](quantum-key-distribution.md)는 이런 두 기저를 써서 엿듣는 사람이 기저를 잘못 고르면 아무것도 얻지 못하게 한다.

이 개념은 차원 $d$ 에서 서로 이런 관계인 기저를 몇 개까지 고를 수 있는지 묻고, 상한 $d+1$ 과 $d$ 가 소수일 때의 구성을 준다.

# 직관

큐비트의 세 기저를 놓는다.

$$
\begin{aligned}
Z&:\ \vert 0\rangle,\ \vert 1\rangle\cr
X&:\ \vert\pm\rangle=\tfrac1{\sqrt2}(\vert 0\rangle\pm\vert 1\rangle)\cr
Y&:\ \vert\pm i\rangle=\tfrac1{\sqrt2}(\vert 0\rangle\pm i\vert 1\rangle)
\end{aligned}
$$

$\vert\langle +\vert 0\rangle\vert^2=\tfrac12$ 이고, $\langle +i\vert +\rangle=\tfrac{1+i}2$ 이라 그 절댓값의 제곱도 $\tfrac12$ 이다. 세 기저 가운데 어느 둘을 골라도, 한 기저의 상태를 다른 기저로 측정한 확률이 모두 $\tfrac12$ 이다.

네 번째 기저는 더할 수 없다. [밀도 행렬](density-matrix.md)의 Bloch 공에서 순수 상태는 구면 위의 점이고, 두 순수 상태의 겹침은 두 점의 위치 벡터 $r,s$ 로 $\tfrac12(1+r\cdot s)$ 다. 겹침이 $\tfrac12$ 인 것은 $r\perp s$ 와 같다. 기저 하나는 구면의 마주 보는 두 점, 곧 축 하나이므로, 서로 편향 없는 기저는 서로 수직인 축이고 3 차원에는 수직인 축이 셋뿐이다.

# 정의

$\mathbb C^d$ 의 정규직교 기저 $\lbrace e\_1,\dots,e\_d\rbrace$ 와 $\lbrace f\_1,\dots,f\_d\rbrace$ 가 모든 $i,j$ 에서 다음을 만족하면 두 기저가 **서로 편향 없다(mutually unbiased)** 고 한다.

$$
\vert\langle e_i,f_j\rangle\vert^2=\frac1d
$$

기저들의 모임에서 어느 두 기저도 서로 편향 없으면 그 모임을 상호 편향 없는 기저라 한다. 직관 절의 $Z,X,Y$ 는 $d=2$ 에서 기저 셋의 모임이다. 기저 $d+1$ 개로 된 모임을 **완전한 모임(complete set)** 이라 한다.

# 성질

## 상한

정리. $\mathbb C^d$ 에서 서로 편향 없는 기저는 $d+1$ 개를 넘지 못한다[^1].

증명의 요지. 기저 벡터 $e$ 마다 대각합이 $0$ 인 Hermite 행렬(Hermitian matrix) $P\_e=ee^\ast-\tfrac1dI$ 를 둔다. 행렬의 내적 $\langle A,B\rangle=\mathrm{tr}(AB)$ 로 계산하면 다음이 나온다.

$$
\mathrm{tr}(P_eP_f)=\vert\langle e,f\rangle\vert^2-\frac1d
$$

한 기저의 $P\_e$ 들은 합이 $0$ 이라 $d-1$ 차원 공간을 펼치고, 서로 편향 없는 두 기저의 공간은 위 식에서 서로 직교한다. 대각합이 $0$ 인 Hermite 행렬의 공간은 실수 차원이 $d^2-1$ 이므로 기저는 $(d^2-1)/(d-1)=d+1$ 개 이하다. $d=2$ 이면 이 공간이 Bloch 공의 3 차원 공간이고, 직관 절의 수직인 세 축이 이 셈이다.

## 소수 차원의 구성

$d=p$ 가 홀수 소수이고 $\omega=e^{2\pi i/p}$ 일 때, $a,b\in\mathbb F\_p$ 에 대해 $\mathbb C^p$ 의 벡터를 다음과 같이 둔다.

$$
v_{a,b}(x)=\frac1{\sqrt p}\omega^{ax^2+bx}\qquad(x\in\mathbb F_p)
$$

표준 기저와, $a$ 마다 $\lbrace v\_{a,b}:b\in\mathbb F\_p\rbrace$ 로 된 기저 $p$ 개를 합친 $p+1$ 개가 완전한 모임이다[^2].

같은 $a$ 의 두 벡터는 내적이 $\tfrac1p\sum_x\omega^{(b'-b)x}$ 라 $b\ne b'$ 이면 $0$ 이다. 표준 기저의 벡터와의 내적은 절댓값이 $\tfrac1{\sqrt p}$ 다. $a\ne a'$ 이면 내적이 $\tfrac1p\sum_x\omega^{cx^2+ex}$ ($c=a'-a\ne0$) 꼴이고, 제곱을 완성하면 [Gauss 합](gauss-sums.md)이 되어 절댓값이 $\sqrt p$ 다. 그래서 내적의 절댓값의 제곱은 $\tfrac1p$ 다.

$d$ 가 소수의 거듭제곱이면 유한체 $\mathbb F\_d$ 로 같은 구성이 되어 완전한 모임이 있다[^1]. $d=6$ 에서는 서로 편향 없는 기저 셋이 알려져 있고, 넷이 있는지는 알려져 있지 않다[^3].

# 활용

- [양자 키 분배](quantum-key-distribution.md). BB84 규약(BB84 protocol)은 큐비트의 $Z$ 와 $X$ 두 기저를 쓰고, 여섯 상태 규약(six-state protocol)은 $Z,X,Y$ 세 기저를 써서 엿듣기가 남기는 오류율을 높인다.
- 상태 단층 촬영(quantum state tomography). 기저 하나로 측정하면 확률 $d$ 개 가운데 독립인 것이 $d-1$ 개 나온다. 완전한 모임의 $d+1$ 개 기저로 측정하면 $(d+1)(d-1)=d^2-1$ 개가 나오고, 이것이 밀도 행렬의 실수 매개변수 개수와 같아 상태가 정해진다.
- 엔트로피 불확정성 관계(entropic uncertainty relation). 서로 편향 없는 두 기저로 측정한 결과의 [Shannon 엔트로피](entropy.md)의 합은 $\log d$ 이상이다.

[^1]: W. K. Wootters, B. D. Fields, "Optimal state-determination by mutually unbiased measurements", *Annals of Physics* 191 (1989), 363–381.
[^2]: I. D. Ivanović, "Geometrical description of quantal state determination", *Journal of Physics A* 14 (1981), 3241–3245.
[^3]: T. Durt, B.-G. Englert, I. Bengtsson, K. Życzkowski, "On mutually unbiased bases", *International Journal of Quantum Information* 8 (2010), 535–640.

# 연관 문서

## 선수지식

- [밀도 행렬](density-matrix.md)
- [양자 키 분배](quantum-key-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #information_theory
