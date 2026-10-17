# Nekhoroshev 추정

# 개요

**Nekhoroshev 추정(Nekhoroshev estimate)** 은 교란된 적분가능계에서 작용 변수의 변화에 대한 상한이다. [Kolmogorov-Arnold-Moser 정리](kam-theorem.md)는 측도의 뜻에서 대부분인 초기조건에 대해 모든 시간의 운동을 정하지만, 살아남지 못한 진동수에서 출발한 궤도는 다루지 않는다.

Nekhoroshev 추정은 모든 초기조건에 대해 성립한다. 교란의 크기를 $\varepsilon$ 이라 하면, 작용 변수의 변화가 $\varepsilon$ 의 거듭제곱 이하로 머무는 시간이 $\exp(\varepsilon^{-a})$ 꼴로 길다. 측도 하나를 시간으로 바꾼 것이며, 바꾸는 대가로 교란 전 Hamilton 함수에 준볼록 조건이 붙는다.

# 직관

자유도가 $2$ 이면 살아남은 원환면이 에너지면을 조각으로 가르므로 모든 궤도의 작용 변수가 유계다. 자유도가 $3$ 이상이면 에너지면이 $2n-1$ 차원이고 원환면이 $n$ 차원이어서 가르지 못하고, 원환면 사이의 틈을 지나는 궤도가 작용 변수를 얼마까지 바꾸는지 모른다.

바로 재 본다. 작용 변수의 운동방정식은 $\dot I=-\varepsilon\partial\_\theta H\_1$ 이므로 변화율의 크기가 $\varepsilon$ 이고, 시간 $T$ 동안의 변화가 $\varepsilon T$ 이하다. $I$ 가 $1$ 만큼 변하는 데 적어도 $T\sim1/\varepsilon$ 이 걸린다는 것까지는 이 식에서 바로 나온다.

이 상한을 늘리려면 $\partial\_\theta H\_1$ 이 평균 $0$ 인 것을 쓴다. $\theta$ 가 빠르게 돌 때 그 항은 상쇄되므로, 교란에서 $\theta$ 에 의존하는 부분을 좌표 바꾸기로 없애면 남는 교란이 $\varepsilon^2$ 의 크기다. 새 작용 변수의 변화율이 $\varepsilon^2$ 이고 시간이 $1/\varepsilon^2$ 으로 늘어난다. $r$ 번 되풀이하면 $1/\varepsilon^r$ 이다.

되풀이가 막히는 자리는 Kolmogorov-Arnold-Moser 정리와 같은 작은 분모다. $k$ 번째 Fourier 항을 없애는 계수에 $k\cdot\nu$ 가 분모로 들어가는데, 여기서는 진동수를 Diophantine 인 것으로 고정할 수 없다. 모든 초기조건을 다루므로 $k\cdot\nu$ 가 $0$ 에 가까운 $I$ 도 함께 봐야 한다. 그런 $k$ 가 나오면 그 항을 남기고 전개를 멈춘다. 멈추는 단계 $r$ 을 $\varepsilon$ 에 맞춰 크게 고르면 $\varepsilon^{-r}$ 이 $\exp(\varepsilon^{-a})$ 꼴로 자란다.

멈춘 뒤 남은 항은 유한 개의 $k$ 가 만드는 방향으로만 $I$ 를 밀 수 있다. 그 방향으로 $H\_0$ 이 증가하거나 감소하면 에너지 보존이 이동을 막는다. 준볼록 조건이 요구하는 것이 이것이다.

# 정의

## 준볼록 조건

$H\_0$ 이 **준볼록**이라는 것은 모든 $I$ 에서, $\nabla H\_0(I)\cdot v=0$ 인 모든 $v\ne0$ 에 대해

$$
v^{\top}\nabla^2H\_0(I)\thinspace v\gt 0
$$

이 성립한다는 뜻이다. 에너지면에 붙은 방향으로 Hessian 이 양정부호라는 조건이고, $H\_0$ 가 볼록이면 따라온다.

Nekhoroshev 가 쓴 조건은 이보다 약한 급경사 조건이다. $H\_0$ 의 기울기를 어느 부분공간에 정사영해도 그 정사영이 원점 근방에서 거듭제곱 이상의 속도로 커진다는 조건이며, 준볼록 함수는 급경사다.[^1]

## 추정

$H=H\_0(I)+\varepsilon H\_1(I,\theta)$ 에서 $H\_0$ 과 $H\_1$ 이 해석적이고 $H\_0$ 이 준볼록이라 한다. **Nekhoroshev 추정**은 상수 $a,b,C,T\_0,\varepsilon\_0\gt 0$ 이 있어 $0\lt \varepsilon\lt \varepsilon\_0$ 인 모든 $\varepsilon$ 과 모든 초기조건에서

$$
\vert I(t)-I(0)\vert\le C\varepsilon^b\qquad(\vert t\vert\le T\_0\exp(\varepsilon^{-a}))
$$

이 성립한다는 진술이다.

# 성질

## Nekhoroshev 정리

**정리.** 위 가정에서 추정이 성립하고, 준볼록인 경우 $a=b=\frac{1}{2n}$ 으로 잡을 수 있다.[^2]

증명은 두 부분이다. 해석적 부분은 공명 구역마다 [Birkhoff 정규형](birkhoff-normal-form.md) 전개를 적절한 단계에서 끊어 남는 교란을 $\exp(-\varepsilon^{-a})$ 의 크기로 만드는 것이고, 기하적 부분은 끊고 남은 항이 밀 수 있는 방향을 준볼록성으로 막는 것이다. ∎

지수 $\frac{1}{2n}$ 은 전개를 끊는 단계와 공명 구역의 두께를 함께 최적화해 나온다. 급경사 조건만 가정하면 지수가 급경사의 차수에 따라 작아진다.

## 공명 구역 분해

작용 변수의 공간을 격자 $\Lambda\subset\mathbb Z^n$ 마다 하나씩 대응하는 구역으로 가른다. $\Lambda$ 의 공명 구역은 $k\in\Lambda$ 에서 $\vert k\cdot\nu(I)\vert$ 가 작고 $\Lambda$ 밖의 $k$ 에서는 크지 않은 $I$ 들의 모임이다.

구역마다 정규형 전개를 다르게 끊는다. $\Lambda=\lbrace0\rbrace$ 인 비공명 구역에서는 $\theta$ 의존 항을 전부 없앨 수 있어 $\dot I$ 가 지수적으로 작다. $\Lambda$ 의 계수가 $m\ge1$ 이면 $\Lambda$ 에 든 $k$ 의 항만 남고, 남은 항이 만드는 $\dot I$ 는

$$
\dot I\in\mathrm{span}(\Lambda)+O(\exp(-\varepsilon^{-a}))
$$

를 만족한다. $\mathrm{span}(\Lambda)$ 는 $m$ 차원이므로 빠른 이동이 가능한 방향이 $n$ 차원에서 $m$ 차원으로 줄어든다.

## 기하적 부분

**정리.** $H\_0$ 이 준볼록이고 $\Lambda$ 의 계수가 $m$ 이면, $I(0)$ 을 지나며 $\mathrm{span}(\Lambda)$ 에 평행한 $m$ 차원 평면과 에너지면 $\lbrace H\_0=H\_0(I(0))\rbrace$ 의 교차는 지름이 $\varepsilon^b$ 의 상수배인 집합에 들어간다.[^2]

$\Lambda$ 의 공명 구역에서는 $\nabla H\_0(I)$ 가 $\mathrm{span}(\Lambda)$ 와 거의 수직이다. 공명 조건 $k\cdot\nu(I)=k\cdot\nabla H\_0(I)=0$ 이 $k\in\Lambda$ 에서 거의 성립하기 때문이다. 그러면 평면 위에서 $H\_0$ 의 일차 변화가 작고 이차 항이 지배하는데, 준볼록성에서 그 이차 항이 양정부호이므로 $H\_0$ 가 평면 위에서 한 방향으로만 자란다. 에너지가 보존되므로 궤도가 그 평면을 따라 멀리 갈 수 없다. ∎

평면을 따라 빠르게 이동하는 것이 막히고 평면을 벗어나는 이동은 지수적으로 느리므로, 두 추정을 합치면 정리의 시간 상한이 나온다.

## 준볼록 조건의 역할

$H\_0$ 이 $I$ 에 선형이면 진동수가 상수이고 Hessian 이 $0$ 이므로 준볼록이 아니다. 이 경우 작용 변수가 $1/\varepsilon$ 쯤의 시간에 $O(1)$ 만큼 이동하는 계가 있다. Arnold 가 든 예가 두 자유도의 공명 띠를 따라 궤도를 잇는 방식으로 그 이동을 만든다.[^3]

그러므로 지수적 시간 상한은 $H\_0$ 의 조건에서 오는 것이고 교란의 작음만으로는 얻을 수 없다.

## Kolmogorov-Arnold-Moser 정리와의 차이

| | Kolmogorov-Arnold-Moser 정리 | Nekhoroshev 추정 |
| --- | --- | --- |
| 초기조건 | Diophantine 진동수의 원환면 위 | 전부 |
| 시간 | 무한 | $\exp(\varepsilon^{-a})$ 까지 |
| 결론 | 불변 원환면 위의 등속 운동 | $\vert I(t)-I(0)\vert\le C\varepsilon^b$ |
| $H\_0$ 의 조건 | Kolmogorov 비퇴화 | 준볼록 또는 급경사 |

두 결과가 겹치는 자리에서 살아남은 원환면은 Nekhoroshev 추정의 상한을 훨씬 밑도는 궤도를 준다. 추정이 쓰이는 자리는 원환면 사이의 틈이다.

# 활용

- [Kolmogorov-Arnold-Moser 정리](kam-theorem.md)의 자유도 $3$ 이상에서 끊긴 논법을 메운다. 원환면이 에너지면을 분리하지 못하는 경우에 작용 변수의 유계성 대신 지수적으로 긴 시간의 상한이 들어간다.
- [적분가능계](integrable-systems.md)의 작용 변수를 교란 아래에서 근사 보존량으로 쓰는 근거다. 지수적 시간 안에서는 $I$ 를 상수로 보고 계산해도 오차가 $\varepsilon^b$ 를 넘지 않는다.
- [Diophantine 근사](diophantine-approximation.md)의 쓰임이 두 결과에서 다르다. Kolmogorov-Arnold-Moser 정리는 진동수를 Diophantine 인 것으로 고정하고, Nekhoroshev 추정은 고정하지 않는 대신 공명의 계수로 작용 변수의 공간을 가른다.

[^1]: Nikolai N. Nekhoroshev, "An exponential estimate of the time of stability of nearly integrable Hamiltonian systems", *Russian Mathematical Surveys* 32 (1977), 1-65. 급경사 조건의 정의와 지수적 시간 상한이 여기 있다.
[^2]: Jürgen Pöschel, "Nekhoroshev estimates for quasi-convex Hamiltonian systems", *Mathematische Zeitschrift* 213 (1993), 187-216. 준볼록 가정에서 지수 $1/(2n)$, 공명 구역 분해, 기하적 부분의 논법을 다룬다.
[^3]: V. I. Arnold, "Instability of dynamical systems with several degrees of freedom", *Soviet Mathematics Doklady* 5 (1964), 581-585. 진동수가 상수인 경우 작용 변수가 $O(1)$ 만큼 이동하는 예가 여기 있다.

# 연관 문서

## 선수지식

- [Kolmogorov-Arnold-Moser 정리](kam-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis
