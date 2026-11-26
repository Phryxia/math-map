# Hodge 지표 정리

# 개요

**Hodge 지표 정리(Hodge index theorem)** 는 사영곡면 위 곡선들의 교차수가 양의 방향을 하나만 갖는다는 정리다. $\mathbb P^1\times\mathbb P^1$ 에서 가로 직선에서 세로 직선을 뺀 류 $D$ 는 가로 직선과 세로 직선을 더한 류 $H$ 와의 교차수가 $0$ 이고 자기교차수가 $-2$ 다.

$H$ 와 교차수가 $0$ 인 류 가운데 자기교차수가 양인 것이 있는지 물으면, 답은 없다는 것이다. 그 결과 교차수는 $(D\cdot H)^2\ge D^2H^2$ 를 만족하고, 이 식으로 곡선의 점 개수와 다면체의 부피를 제한한다.

# 직관

$\mathbb P^1\times\mathbb P^1$ 위의 곡선의 류는 가로 직선의 류 $f\_1$ 과 세로 직선의 류 $f\_2$ 로 $af\_1+bf\_2$ 라 적힌다. 가로 직선끼리는 만나지 않고 가로 직선과 세로 직선은 한 점에서 만나므로 $f\_1^2=f\_2^2=0$, $f\_1\cdot f\_2=1$ 이고, 다음이 나온다.

$$
(af_1+bf_2)^2=2ab
$$

$H=f\_1+f\_2$ 는 $H^2=2\gt 0$ 이다. $D=af\_1+bf\_2$ 가 $D\cdot H=a+b=0$ 을 만족하면 $b=-a$ 이므로 $D^2=-2a^2\le 0$ 이다. $H$ 와 교차수가 $0$ 인 류는 자기교차수가 양일 수 없다.

같은 계산을 다르게 적으면 $(D\cdot H)^2=(a+b)^2$ 와 $D^2H^2=4ab$ 의 비교이고, $(a+b)^2\ge 4ab$ 는 산술–기하 평균 부등식이다. [교차 이론](intersection-theory.md)의 교차수가 이루는 이차형식은 양의 방향이 $H$ 하나이고 나머지 방향은 음이다.

# 정의

$S$ 를 매끄러운 사영곡면이라 한다. 인자 $D$ 가 모든 인자 $C$ 에 대해 $D\cdot C=0$ 이면 **수치적으로 $0$(numerically trivial)** 이라 하고, 인자들의 군을 이것으로 나눈 몫을 $\mathrm{Num}(S)$ 라 쓴다. $\mathrm{Num}(S)$ 는 유한 계수의 자유 아벨군이고 그 계수 $\rho$ 를 **Picard 수(Picard number)** 라 한다[^1].

교차수는 $\mathrm{Num}(S)\otimes\mathbb R$ 위의 비퇴화 대칭 이중선형형식이다. 직관 절에서 $\mathrm{Num}=\mathbb Zf\_1\oplus\mathbb Zf\_2$ 이고 $\rho=2$ 다.

정리. $H$ 를 풍부한(ample) 인자라 하자. $D\cdot H=0$ 이고 $D$ 가 수치적으로 $0$ 이 아니면 $D^2\lt 0$ 이다[^1]. 동치로, 교차형식의 부호수는 $(1,\rho-1)$ 이다.

풍부한 인자는 그 배수가 곡면을 사영공간에 넣는 인자이고, 모든 곡선과 양의 교차수를 갖는다. 직관 절의 $H$ 는 $\mathbb P^1\times\mathbb P^1$ 을 $\mathbb P^3$ 의 이차곡면으로 넣는 인자다.

# 성질

## 증명의 요지

$D\cdot H=0$, $D^2\gt 0$ 이라 하자. 곡면의 [Riemann–Roch 정리](riemann-roch.md)에서 $\chi(\mathcal O(nD))$ 는 $n^2D^2/2$ 처럼 자라므로, $nD$ 나 $K-nD$ 가 큰 $n$ 에서 단면을 갖는다. $H$ 를 $D+mH$ 로 바꿔 같은 논법을 쓰면 $nD$ 가 유효 인자가 되고, 유효 인자는 풍부한 $H$ 와 양의 교차수를 가지므로 $D\cdot H=0$ 과 모순이다[^1].

## 부등식 꼴

$D\_1^2\gt 0$ 이면 모든 $D\_2$ 에 대해 다음이 성립한다.

$$
(D_1\cdot D_2)^2\ge D_1^2\thinspace D_2^2
$$

등호는 $D\_1$ 과 $D\_2$ 가 수치적으로 비례할 때만이다. $D\_2-tD\_1$ 이 $D\_1$ 과 교차수 $0$ 이 되도록 $t$ 를 잡고 정리를 쓰면 나온다. 직관 절의 $(a+b)^2\ge 4ab$ 가 $D\_1=H$ 인 경우다.

## 곱 곡면의 부등식

곡선 $C\_1$, $C\_2$ 의 곱 $C\_1\times C\_2$ 에서 $f\_1$, $f\_2$ 를 두 방향의 올의 류라 하면, 모든 인자 $D$ 는 다음을 만족한다.

$$
D^2\le 2\thinspace(D\cdot f_1)(D\cdot f_2)
$$

$a=D\cdot f\_2$, $b=D\cdot f\_1$ 로 두면 $E=D-af\_1-bf\_2$ 는 $f\_1$ 과 $f\_2$ 모두와 교차수가 $0$ 이므로 풍부한 $f\_1+f\_2$ 와 교차수가 $0$ 이다. 정리에서 $E^2=D^2-2ab\le 0$ 이다. 이것을 Castelnuovo–Severi 부등식(Castelnuovo–Severi inequality)이라 한다.

## 수축되는 곡선의 음정부호성

사상 $\pi:S\to S'$ 가 곡선 $C\_1,\dots,C\_k$ 를 점으로 보내면, 이 곡선들의 교차행렬 $(C\_i\cdot C\_j)$ 은 음정부호다. $S'$ 의 풍부한 인자를 당긴 $\pi^\ast H'$ 은 자기교차수가 양이고 각 $C\_i$ 와 교차수가 $0$ 이므로, $C\_i$ 들의 결합은 정리에 따라 자기교차수가 음이다.

[부풀림](blow-ups.md)의 예외 곡선 $E^2=-1$ 이 이 경우이고, [타원 곡면](elliptic-surfaces.md)의 특이 올의 성분들이 이루는 확장 Dynkin 도형에서 올 전체를 빼면 남는 성분들의 행렬도 음정부호다.

## Hodge 이론의 판본

$S$ 가 복소 사영곡면이면 [Hodge 이론](hodge-theory.md)의 분해 $H^2(S,\mathbb C)=H^{2,0}\oplus H^{1,1}\oplus H^{0,2}$ 에서 [교차형식](intersection-form.md)의 부호수는 다음과 같다[^2].

$$
b^+=2p_g+1,\qquad b^-=h^{1,1}-1
$$

$H^{2,0}\oplus H^{0,2}$ 의 실수 부분이 양의 방향 $2p_g$ 개를 주고, $H^{1,1}$ 에서는 Kähler 류 하나만 양이다. $\mathrm{Num}(S)\otimes\mathbb R$ 은 $H^{1,1}$ 안에 있으므로 부호수 $(1,\rho-1)$ 이 여기서도 나온다. [K3 곡면](k3-surfaces.md)은 $p_g=1$, $h^{1,1}=20$ 이므로 $(3,19)$ 다.

# 활용

- 유한체 위 곡선의 점 개수. 유한체 $\mathbb F\_q$ 위의 종수 $g$ 인 곡선 $C$ 에서 Frobenius 사상의 그래프 $\Gamma$ 와 대각선 $\Delta$ 를 $C\times C$ 에 놓으면 $\Gamma\cdot\Delta$ 가 유리점의 개수 $N$ 이다. Castelnuovo–Severi 부등식을 $D=r\Gamma+s\Delta$ 에 쓰면 모든 정수 $r$, $s$ 에 대해 다음이 성립하고, 판별식에서 $\lvert N-q-1\rvert\le 2g\sqrt q$ 가 나온다[^1]. [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)이 이것을 고차원으로 넓힌다.

$$
gq\thinspace r^2-(N-q-1)\thinspace rs+g\thinspace s^2\ge 0
$$

- 혼합부피. [토릭 다양체](toric-varieties.md)인 곡면에서 다각형 $P$, $Q$ 가 주는 인자의 교차수는 [혼합부피](mixed-volumes.md)이고, 부등식 꼴은 Minkowski 부등식 $V(P,Q)^2\ge V(P)V(Q)$ 가 된다. [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)과 [Bernstein–Kushnirenko 정리](bernstein-kushnirenko.md)의 대수기하적 증명이 이 길을 따른다.
- 격자의 부호수. [del Pezzo 곡면](del-pezzo-surfaces.md)의 Picard 격자 $\langle H,E\_1,\dots,E\_r\rangle$ 은 $H^2=1$, $E\_i^2=-1$ 로 부호수 $(1,r)$ 이고, K3 곡면의 Picard 격자는 $\rho\le 20$ 인 부호수 $(1,\rho-1)$ 의 격자다.

[^1]: R. Hartshorne, *Algebraic Geometry*, Graduate Texts in Mathematics 52, Springer, 1977, Chapter V, Theorem 1.9 와 Exercises 1.9, 1.10.

[^2]: W. Barth, K. Hulek, C. Peters and A. Van de Ven, *Compact Complex Surfaces*, 2nd ed., Springer, 2004, Chapter IV, Section 2.

# 연관 문서

## 선수지식

- [교차 이론](intersection-theory.md)
- [Riemann–Roch 정리](riemann-roch.md)

## 더 알아보기

- [풍부한 선다발의 수치 판정법](ampleness-criteria.md)

#algebra #complex_analysis #number_theory #theorem
