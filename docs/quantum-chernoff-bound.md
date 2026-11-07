# 양자 Chernoff 한계

# 개요

**양자 Chernoff 한계(quantum Chernoff bound)** 는 두 양자 상태 가운데 어느 것인지를 같은 상태의 사본 여러 개로 판정할 때, 틀릴 확률이 사본 수에 따라 지수적으로 줄어드는 속도를 주는 식이다. 상자 안에 $\vert 0\rangle$ 또는 $\vert +\rangle$ 의 사본이 $n$ 개 들어 있고 어느 쪽인지 맞혀야 하면, 사본이 늘수록 오류가 줄지만 얼마나 빨리 주는지는 [양자 상태 구별](quantum-state-discrimination.md)의 Helstrom 한계를 $n$ 마다 계산해서는 알기 어렵다. 양자 Chernoff 한계는 두 밀도 행렬의 거듭제곱 곱의 대각합 하나를 최소화해 이 속도를 정한다.

# 직관

$\vert 0\rangle$ 과 $\vert +\rangle$ 이 반반의 확률로 주어지고 사본이 $n$ 개다. 두 상태의 $n$ 개 사본 $\vert 0\rangle^{\otimes n}$, $\vert +\rangle^{\otimes n}$ 은 다시 순수 상태이고 겹침은 $\langle 0\vert +\rangle^n=2^{-n/2}$ 이다. 같은 확률로 주어진 순수 상태 둘의 Helstrom 오류 확률은 $\frac12\bigl(1-\sqrt{1-\vert\langle\psi\vert\phi\rangle\vert^2}\bigr)$ 이므로

$$
P_{e,n}=\tfrac12\bigl(1-\sqrt{1-2^{-n}}\bigr)\approx\tfrac14\cdot 2^{-n}
$$

이다. 사본 하나가 늘 때마다 오류가 절반이 되고, 지수의 기울기 $1$ 은 $-\log_2\vert\langle 0\vert +\rangle\vert^2$ 이다. 섞인 상태에서는 사본들의 겹침을 이렇게 하나의 수로 적을 수 없다. 양자 Chernoff 한계는 겹침의 제곱을 $\mathrm{tr}(\rho^s\sigma^{1-s})$ 로 바꾸고 $s$ 를 고르는 것으로 같은 기울기를 준다.

# 정의

## 대칭 가설검정의 오류 확률

밀도 행렬 $\rho,\sigma$ 와 사전확률 $\pi_0,\pi_1\gt 0$ $(\pi_0+\pi_1=1)$ 에 대해 $\rho^{\otimes n}$ 과 $\sigma^{\otimes n}$ 을 가르는 모든 측정 가운데 가장 작은 오류 확률을

$$
P_{e,n}=\tfrac12\bigl(1-\Vert\pi_0\rho^{\otimes n}-\pi_1\sigma^{\otimes n}\Vert_1\bigr)
$$

로 적는다. Helstrom 한계에서 성공 확률을 $1$ 에서 뺀 것이다. 직관 절은 $\rho=\vert 0\rangle\langle 0\vert$, $\sigma=\vert +\rangle\langle +\vert$, $\pi_0=\pi_1=\frac12$ 다.

## 양자 Chernoff 거리

$$
\xi_{\mathrm{QCB}}(\rho,\sigma)=-\log_2\min_{0\le s\le 1}\mathrm{tr}\bigl(\rho^s\sigma^{1-s}\bigr)
$$

를 **양자 Chernoff 거리(quantum Chernoff distance)** 라 한다. 순수 상태 $\rho=\vert\psi\rangle\langle\psi\vert$, $\sigma=\vert\phi\rangle\langle\phi\vert$ 에서는 $0\lt s\lt 1$ 이면 $\rho^s=\rho$, $\sigma^{1-s}=\sigma$ 이므로 $\mathrm{tr}(\rho^s\sigma^{1-s})=\vert\langle\psi\vert\phi\rangle\vert^2$ 이고, 직관 절의 두 상태는 $\xi\_{\mathrm{QCB}}=1$ 이다.

# 성질

## 양자 Chernoff 한계

$$
\lim_{n\to\infty}-\frac1n\log_2P_{e,n}=\xi_{\mathrm{QCB}}(\rho,\sigma)
$$

이고, 극한은 사전확률 $\pi_0,\pi_1$ 에 의존하지 않는다. 오류가 이 속도보다 느리게 줄지 않는다는 쪽은 Audenaert 등이[^1], 더 빨리 줄 수 없다는 쪽은 Nussbaum 과 Szkoła 가 증명했다[^2].

증명의 요지. 오류가 충분히 작아진다는 쪽은 다음 부등식에서 나온다. 양의 준정부호 행렬 $A,B$ 와 $0\le s\le 1$ 에서

$$
\tfrac12\mathrm{tr}\bigl(A+B-\lvert A-B\rvert\bigr)\le\mathrm{tr}\bigl(A^sB^{1-s}\bigr)
$$

이다. $A=\pi_0\rho^{\otimes n}$, $B=\pi_1\sigma^{\otimes n}$ 이면 좌변이 $P_{e,n}$ 이고, 우변은 $\pi_0^s\pi_1^{1-s}\bigl(\mathrm{tr}\rho^s\sigma^{1-s}\bigr)^n$ 이다. 반대쪽은 $\rho$ 와 $\sigma$ 의 고유기저로 만든 두 고전 분포의 Chernoff 정보량으로 오류 확률을 아래에서 묶는다.

## 고전적인 경우

$\rho$ 와 $\sigma$ 가 가환이면 같은 기저에서 대각이고, 대각 성분을 확률분포 $p,q$ 로 보면 $\xi\_{\mathrm{QCB}}=-\log_2\min_s\sum_ip_i^sq_i^{1-s}$ 다. 이것은 두 분포에서 독립 표본 $n$ 개로 판정할 때의 오류 지수, 곧 Chernoff 정보량(Chernoff information)이다. 비가환이면 측정 기저의 선택이 문제에 들어가고, 최적 측정은 사본 $n$ 개에 함께 거는 측정이다.

## 다른 거리와의 관계

$s\mapsto\log_2\mathrm{tr}(\rho^s\sigma^{1-s})$ 는 볼록하고 $s=0,1$ 에서 $0$ 이며, $s=1$ 에서의 미분은 [양자 상대 엔트로피](quantum-relative-entropy.md) $D(\rho\Vert\sigma)$ 다. 따라서

$$
\xi_{\mathrm{QCB}}(\rho,\sigma)\le\min\bigl(D(\rho\Vert\sigma),D(\sigma\Vert\rho)\bigr)
$$

이다. 한쪽 오류만 지수로 줄이는 양자 Stein 보조정리의 지수는 $D(\rho\Vert\sigma)$ 이고, 두 오류를 함께 줄이는 대칭 판정의 지수는 그보다 작다. 충실도 $F$ 와는 $-\log_2F\le\xi\_{\mathrm{QCB}}\le-2\log_2F$ 의 관계가 있고, 순수 상태에서 오른쪽 등호가 성립한다[^1].

# 활용

- 양자 조명. 잡음이 많은 배경에서 물체가 있는지 없는지를 빛으로 판정할 때, 얽힌 빛과 얽히지 않은 빛의 성능을 두 경우의 양자 Chernoff 거리로 비교한다.
- 양자 상태의 거리. 가환인 경우의 Chernoff 정보량을 넓힌 것이므로, 사본이 많을 때 두 상태가 얼마나 잘 구별되는지를 재는 거리로 쓴다.
- 대칭이 깨진 판정과의 경계. 사전확률이 고정된 판정에서는 이 지수가, 한쪽 오류를 고정한 판정에서는 상대 엔트로피가 지수다. 두 오류의 지수를 함께 바꾸는 판정의 지수들은 Hoeffding 한계(Hoeffding bound)가 잇는다.

[^1]: K. M. R. Audenaert, J. Calsamiglia, R. Muñoz-Tapia, E. Bagan, Ll. Masanes, A. Acín, F. Verstraete, "Discriminating states: the quantum Chernoff bound", *Physical Review Letters* 98 (2007), 160501.
[^2]: M. Nussbaum, A. Szkoła, "The Chernoff lower bound for symmetric quantum hypothesis testing", *Annals of Statistics* 37 (2009), 1040–1057.

# 연관 문서

## 선수지식

- [양자 상태 구별](quantum-state-discrimination.md)
- [양자 상대 엔트로피](quantum-relative-entropy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #computation #linear_algebra #statistics
