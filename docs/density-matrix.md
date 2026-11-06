# 밀도 행렬

# 개요

**밀도 행렬(density matrix)** 은 여러 양자 상태를 정해진 확률로 섞어 놓은 것을 행렬 하나로 적은 것이다. 동전을 던져 앞면이면 $\vert 0\rangle$, 뒷면이면 $\vert 1\rangle$ 을 만든 큐비트와, 같은 방법으로 $\vert +\rangle$ 이나 $\vert -\rangle$ 을 만든 큐비트는 만드는 방법이 다르지만, 어느 기저로 측정해도 결과가 반반이어서 측정으로는 둘을 가를 수 없다. 밀도 행렬은 둘 모두를 같은 행렬 $\tfrac12 I$ 로 적어, 측정으로 알 수 있는 것만 남긴다.

# 직관

[양자 회로](quantum-circuits.md)의 큐비트를 확률 $p\_j$ 로 상태 $\vert\psi\_j\rangle$ 에 준비한다. 단위벡터 $\vert u\rangle$ 쪽 결과가 나올 확률은 상태마다의 확률을 평균한

$$
\sum_jp\_j\vert\langle u\vert\psi\_j\rangle\vert^2=\sum_jp\_j\langle u\vert\psi\_j\rangle\langle\psi\_j\vert u\rangle=\langle u\vert\Big(\sum_jp\_j\vert\psi\_j\rangle\langle\psi\_j\vert\Big)\vert u\rangle
$$

이다. 측정 결과의 확률은 가운데 괄호의 행렬로만 정해진다.

개요의 첫 준비에서 이 행렬은 $\tfrac12\vert 0\rangle\langle 0\vert+\tfrac12\vert 1\rangle\langle 1\vert=\tfrac12 I$ 이다. 둘째 준비에서는 $\vert +\rangle\langle +\vert=\tfrac12\begin{pmatrix}1&1\cr 1&1\end{pmatrix}$, $\vert -\rangle\langle -\vert=\tfrac12\begin{pmatrix}1&-1\cr -1&1\end{pmatrix}$ 의 평균이므로 역시 $\tfrac12 I$ 이다. 그래서 $\langle u\vert\tfrac12 I\vert u\rangle=\tfrac12$ 이 모든 $\vert u\rangle$ 에서 성립하고, 두 준비는 어느 측정으로도 구별되지 않는다. 반면 확률 $1$ 로 $\vert +\rangle$ 을 만든 큐비트의 행렬은 $\tfrac12\begin{pmatrix}1&1\cr 1&1\end{pmatrix}$ 이고, $\vert u\rangle=\vert +\rangle$ 에서 확률이 $1$ 이라 $\tfrac12 I$ 와 구별된다.

# 정의

## 밀도 행렬

$\mathbb C^d$ 위의 행렬 $\rho$ 가 에르미트이고 고윳값이 모두 $0$ 이상이며 대각합이 $1$ 일 때 $\rho$ 를 **밀도 행렬** 이라 한다. 확률 $p\_j$ 와 단위벡터 $\vert\psi\_j\rangle$ 에 대해 $\rho=\sum_jp\_j\vert\psi\_j\rangle\langle\psi\_j\vert$ 는 밀도 행렬이고, 거꾸로 모든 밀도 행렬은 [스펙트럼 정리](spectral-theorem.md)로 고유벡터에 대해 이 꼴로 쓰인다. 직관 절의 $\tfrac12 I$ 는 $d=2$ 의 밀도 행렬이다.

$\rho=\vert\psi\rangle\langle\psi\vert$ 꼴이면 **순수 상태(pure state)**, 아니면 **혼합 상태(mixed state)** 라 한다. $\rho$ 가 순수 상태인 것은 $\mathrm{tr}\thinspace\rho^2=1$ 인 것과 동치다. $\tfrac12 I$ 는 $\mathrm{tr}(\tfrac12 I)^2=\tfrac12$ 이므로 혼합 상태다.

## 측정과 시간 변화

정규직교기저 $\lbrace\vert u\_c\rangle\rbrace$ 로 측정하면 결과 $c$ 가 확률 $\langle u\_c\vert\rho\vert u\_c\rangle=\mathrm{tr}(\vert u\_c\rangle\langle u\_c\vert\rho)$ 로 나온다. 유니터리 $U$ 를 걸면 $\rho$ 는 $U\rho U^\dagger$ 가 된다. $\tfrac12 I$ 에 어떤 $U$ 를 걸어도 $\tfrac12 I$ 이다.

## 부분 대각합

두 계의 합성 $\mathbb C^{d\_A}\otimes\mathbb C^{d\_B}$ 위의 $\rho\_{AB}$ 에서 $B$ 쪽 기저 $\lbrace\vert k\rangle\rbrace$ 에 대해

$$
\rho_A=\mathrm{tr}\_B\thinspace\rho_{AB}=\sum_k(I\otimes\langle k\vert)\thinspace\rho_{AB}\thinspace(I\otimes\vert k\rangle)
$$

를 $A$ 의 **축소 밀도 행렬(reduced density matrix)** 이라 하고, $\mathrm{tr}\_B$ 를 **부분 대각합(partial trace)** 이라 한다. $A$ 쪽만 측정한 결과의 확률은 $\rho\_A$ 로 정해진다. $\vert\Phi^+\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 이면 $\rho\_A=\tfrac12\vert 0\rangle\langle 0\vert+\tfrac12\vert 1\rangle\langle 1\vert=\tfrac12 I$ 로, 개요의 동전 던지기와 같은 행렬이다.

# 성질

## Bloch 공

큐비트의 밀도 행렬은 Pauli 행렬 $X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$, $Y=\begin{pmatrix}0&-i\cr i&0\end{pmatrix}$, $Z=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}$ 로

$$
\rho=\tfrac12\big(I+xX+yY+zZ\big),\qquad x^2+y^2+z^2\le 1
$$

로 하나씩 쓰인다. 고윳값이 $\tfrac12(1\pm\sqrt{x^2+y^2+z^2})$ 이므로 고윳값이 $0$ 이상인 조건이 공 안에 드는 것이고, 순수 상태는 구면 위의 점이다. 이 공을 **Bloch 공(Bloch ball)** 이라 한다. $\vert 0\rangle$ 은 $(0,0,1)$, $\vert +\rangle$ 은 $(1,0,0)$, $\tfrac12 I$ 는 중심이다.

## 같은 행렬을 주는 섞음

직관 절처럼 서로 다른 섞음이 같은 밀도 행렬을 줄 수 있다. $\sum_ip\_i\vert\psi\_i\rangle\langle\psi\_i\vert=\sum_jq\_j\vert\phi\_j\rangle\langle\phi\_j\vert$ 인 것은 $\sqrt{p\_i}\vert\psi\_i\rangle=\sum_ju\_{ij}\sqrt{q\_j}\vert\phi\_j\rangle$ 인 유니터리 행렬 $(u\_{ij})$ 가 있는 것과 동치다(짧은 쪽에 $0$ 을 채워 길이를 맞춘다)[^1]. 개요의 두 섞음은 $\vert\pm\rangle=\tfrac1{\sqrt 2}(\vert 0\rangle\pm\vert 1\rangle)$ 이 $H$ 로 이어지는 경우다.

## 정화

밀도 행렬 $\rho\_A=\sum_k\lambda\_k\vert e\_k\rangle\langle e\_k\vert$ 마다 순수 상태

$$
\vert\psi\rangle_{AB}=\sum_k\sqrt{\lambda_k}\thinspace\vert e_k\rangle\otimes\vert k\rangle
$$

가 있어 $\mathrm{tr}\_B\vert\psi\rangle\langle\psi\vert=\rho\_A$ 다. 이 $\vert\psi\rangle\_{AB}$ 를 $\rho\_A$ 의 **정화(purification)** 라 한다. $\tfrac12 I$ 의 정화 하나가 $\vert\Phi^+\rangle$ 이다.

## von Neumann 엔트로피

$S(\rho)=-\mathrm{tr}\thinspace\rho\log_2\rho$ 를 **von Neumann 엔트로피(von Neumann entropy)** 라 한다[^2]. $\rho$ 의 고윳값 $\lambda\_k$ 로 쓰면 $S(\rho)=-\sum_k\lambda\_k\log_2\lambda\_k$ 이고, 고윳값 분포의 [Shannon 엔트로피](entropy.md)다. 순수 상태에서 $0$, $\mathbb C^d$ 의 $\tfrac1dI$ 에서 최댓값 $\log_2d$ 다. $\vert\Phi^+\rangle$ 의 축소 밀도 행렬은 $S=1$ 이고, 이 값이 두 큐비트 사이의 얽힘을 잰다.

# 활용

- 양자 순간이동. [양자 순간이동](quantum-teleportation.md)에서 고전 비트를 받기 전 밥의 큐비트는 밀도 행렬 $\tfrac12 I$ 이고, 이 행렬이 보내려는 상태와 무관하므로 고전 통신 없이는 정보가 전해지지 않는다.
- 양자 키 분배. [양자 키 분배](quantum-key-distribution.md)에서 도청자가 얻는 정보는 도청자 쪽 축소 밀도 행렬로 적히고, 비밀성 증폭의 안전성도 그 행렬로 진술된다.
- 잡음과 오류정정. 잡음은 $\rho\mapsto\sum_kE\_k\rho E\_k^\dagger$, $\sum_kE\_k^\dagger E\_k=I$ 꼴의 사상으로 적힌다. 확률 $p$ 로 $X$ 가 걸리는 잡음은 $E\_0=\sqrt{1-p}\thinspace I$, $E\_1=\sqrt p\thinspace X$ 이고, [양자 오류정정부호](quantum-error-correction.md)는 이런 사상이 적힌 상태에 미친 영향을 증후 측정과 보정으로 없애는 부호다.

[^1]: L. P. Hughston, R. Jozsa, W. K. Wootters, A complete classification of quantum ensembles having a given density matrix, *Physics Letters A* 183 (1993), 14–18.
[^2]: J. von Neumann, Wahrscheinlichkeitstheoretischer Aufbau der Quantenmechanik, *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen* (1927), 245–272.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)

## 더 알아보기

- [Holevo 한계](holevo-bound.md)

#computation #linear_algebra #information_theory
