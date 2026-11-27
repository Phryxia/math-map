# Bernstein 부등식

# 개요

**Bernstein 부등식(Bernstein's inequality)** 은 독립이고 크기가 제한된 확률변수들의 합이 평균에서 크게 벗어날 확률을, 합의 분산과 각 변수의 크기 한계로 위에서 누르는 부등식이다. 확률 $0.01$ 로 일어나는 사건을 $1000$ 번 지켜보면 평균 $10$ 번 일어난다. $30$ 번 이상 일어날 확률을 Hoeffding 부등식으로 누르면 $0.45$ 가 나오지만 실제 확률은 약 $2\times 10^{-7}$ 이다. Bernstein 부등식은 변수의 분산이 작다는 것을 지수에 넣어 이 확률을 $6\times 10^{-6}$ 이하로 누른다.

# 직관

사건이 일어나면 $1$, 아니면 $0$ 인 변수 $Y\_1,\dots,Y\_{1000}$ 이 독립이고 각각 확률 $0.01$ 로 $1$ 이다. $X\_i=Y\_i-0.01$ 로 두면 $X\_i$ 의 평균은 $0$ 이고 $\vert X\_i\vert\le 1$ 이다. $30$ 번 이상 일어나는 것은 $\sum X\_i\ge 20$ 인 것이다.

[집중부등식](concentration-inequalities.md) 문서의 Hoeffding 부등식은 $\vert X\_i\vert\le 1$ 만 쓰고 $\exp(-2\cdot 20^2/1000)=e^{-0.8}\approx 0.45$ 를 준다. 이 한계는 $X\_i$ 가 $\pm 1$ 근처에서 고르게 흔들리는 경우에도 맞아야 하므로, 대부분 $-0.01$ 에 머무는 $X\_i$ 에는 느슨하다.

$X\_i$ 의 분산은 $0.01\cdot 0.99$ 이므로 합의 분산은 $\sigma^2=9.9$ 다. 분산이 $9.9$ 인 합에서 $20$ 은 표준편차의 약 $6.4$ 배이고, 정규분포라면 그런 값이 나올 확률은 아주 작다. Bernstein 부등식은 Hoeffding 부등식의 지수 $2t^2/n$ 에서 $n$ 대신 분산을 쓴다. $t$ 가 클 때는 변수 하나의 크기 $b$ 가 지수를 제한한다는 것을 보정항 $bt/3$ 으로 함께 넣는다.

# 정의

$X\_1,\dots,X\_n$ 은 독립이고, $E\lbrack X\_i\rbrack=0$ 이고 $\vert X\_i\vert\le b$ 다. 합을 $S=X\_1+\cdots+X\_n$ 이라 하고, 합의 분산을 다음과 같이 둔다.

$$
\sigma^2=\sum\_{i=1}^{n}E\lbrack X\_i^2\rbrack
$$

직관 절의 예는 $n=1000$, $b=1$, $\sigma^2=9.9$ 다. $E\lbrack X\_i^2\rbrack\le b^2$ 이므로 $\sigma^2\le nb^2$ 이고, 분산이 작다는 것은 $\sigma^2$ 가 $nb^2$ 보다 훨씬 작다는 뜻이다.

# 성질

## Bernstein 부등식

모든 $t\ge 0$ 에 대해 다음이 성립한다[^1].

$$
P(S\ge t)\le\exp\left(-\frac{t^2/2}{\sigma^2+bt/3}\right)
$$

$-X\_i$ 에도 적용하면 $P(\vert S\vert\ge t)$ 는 우변의 두 배 이하다. 직관 절의 예에서 우변은 $\exp(-200/16.57)\approx 5.7\times 10^{-6}$ 이다.

증명의 요지. $0\le u\lt 3$ 이면 $k!\ge 2\cdot 3^{k-2}$ 이므로 $e^u-1-u=\sum\_{k\ge 2}u^k/k!$ 는 $u^2/(2(1-u/3))$ 이하다. $\vert X\_i\vert\le b$ 에서 $X\_i^k\le X\_i^2b^{k-2}$ 이므로, $0\le\lambda\lt 3/b$ 이면 다음이 나온다.

$$
E\lbrack e^{\lambda X\_i}\rbrack\le 1+\frac{\lambda^2E\lbrack X\_i^2\rbrack}{2(1-\lambda b/3)}\le\exp\left(\frac{\lambda^2E\lbrack X\_i^2\rbrack}{2(1-\lambda b/3)}\right)
$$

독립성으로 이것을 곱하고 Chernoff 기법 $P(S\ge t)\le e^{-\lambda t}E\lbrack e^{\lambda S}\rbrack$ 을 쓴다. $\lambda=t/(\sigma^2+bt/3)$ 로 잡으면 $1-\lambda b/3=\sigma^2/(\sigma^2+bt/3)$ 이고, 지수가 $-t^2/(2(\sigma^2+bt/3))$ 로 정리된다.

## 두 영역

분모의 두 항 가운데 큰 쪽이 꼬리의 꼴을 정한다.

- $t\le 3\sigma^2/b$ 이면 분모가 $2\sigma^2$ 이하이므로 우변은 $\exp(-t^2/(4\sigma^2))$ 이하다. 분산 $\sigma^2$ 인 정규분포의 꼬리와 같은 꼴이다.
- $t\ge 3\sigma^2/b$ 이면 분모가 $2bt/3$ 이하이므로 우변은 $\exp(-3t/(4b))$ 이하다. $t$ 에 대해 지수적으로만 줄고, 드문 사건의 수를 세는 [Poisson 분포](poisson-distribution.md)의 꼬리와 같은 꼴이다.

직관 절의 예는 $3\sigma^2/b=29.7\gt 20$ 이므로 첫 영역에 든다.

## Bennett 부등식

같은 가정에서 다음이 성립한다. 이것을 Bennett 부등식(Bennett's inequality)이라 한다[^1].

$$
P(S\ge t)\le\exp\left(-\frac{\sigma^2}{b^2}\thinspace h\left(\frac{bt}{\sigma^2}\right)\right),\qquad h(u)=(1+u)\log(1+u)-u
$$

$u\ge 0$ 에서 $h(u)\ge u^2/(2(1+u/3))$ 이므로 Bennett 부등식에서 Bernstein 부등식이 나온다. 직관 절의 예에서 Bennett 부등식의 우변은 약 $2.2\times 10^{-6}$ 이다.

## 적률 조건

$\vert X\_i\vert\le b$ 대신 모든 $k\ge 2$ 에서 $E\lbrack\vert X\_i\vert^k\rbrack\le k!\thinspace v\_ib^{k-2}/2$ 이고 $\sigma^2=\sum v\_i$ 라 해도 다음이 성립한다[^1]. 유계가 아닌 지수분포 같은 변수에도 쓸 수 있다.

$$
P(S\ge t)\le\exp\left(-\frac{t^2/2}{\sigma^2+bt}\right)
$$

# 활용

- 표본 수 계산. 분산이 $v$ 이하이고 평균에서의 거리가 $b$ 이하인 변수의 표본평균이 참값에서 $\varepsilon$ 이내일 확률을 $1-\delta$ 이상으로 만들려면, 표본이 $(2v+2b\varepsilon/3)\log(2/\delta)/\varepsilon^2$ 개면 된다. 분산이 작으면 값의 범위의 폭 $2b$ 로 Hoeffding 부등식에서 정한 $2b^2\log(2/\delta)/\varepsilon^2$ 개보다 훨씬 적다.
- 무작위 그래프의 차수. [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md) $G(n,p)$ 에서 각 정점의 차수는 독립인 지시변수 $n-1$ 개의 합이고 분산이 $np$ 정도다. Bernstein 부등식과 합집합 한계로 $np$ 가 $\log n$ 보다 충분히 크면 모든 차수가 $np\pm O(\sqrt{np\log n})$ 안에 든다.
- [행렬 Bernstein 부등식](matrix-bernstein-inequality.md). 수를 대칭행렬로, 분산을 행렬 분산의 노름으로 바꾼 판본이고 앞에 행렬의 크기 $d$ 가 붙는다.
- 학습이론의 빠른 수렴. 손실의 분산이 기댓값으로 눌리는 경우 Bernstein 부등식이 일반화 오차를 $1/\sqrt n$ 대신 $1/n$ 에 가까운 속도로 누른다.

[^1]: S. Boucheron, G. Lugosi, P. Massart, *Concentration Inequalities: A Nonasymptotic Theory of Independence*, Oxford University Press, 2013, §2.7–2.8.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)

## 더 알아보기

- [행렬 Bernstein 부등식](matrix-bernstein-inequality.md)
- [경험적 Bernstein 부등식](empirical-bernstein-inequality.md)

#probability #statistics #algorithms
