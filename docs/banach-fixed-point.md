# 축약사상 고정점 정리

# 개요

**축약사상 고정점 정리(contraction mapping theorem)** 는 점 사이의 거리를 일정 비율로 줄이는 사상을 되풀이해 적용하면 한 점으로 모인다는 정리다. 계산기에 아무 수나 넣고 $\cos$ 키를 계속 누르면 값이 $0.739\ldots$ 로 모이고, 이 수는 방정식 $\cos x=x$ 의 해다. 이 정리는 방정식 $f(x)=0$ 을 $x=T(x)$ 꼴로 고쳐 $T$ 가 거리를 줄임을 보이는 것으로, 해의 존재와 유일성과 해를 찾는 반복 절차를 함께 얻는다.

# 직관

$x=\cos x$ 는 식을 변형해 답을 쓸 수 없으니 $x_0=0$ 에서 $x_{n+1}=\cos x_n$ 을 반복한다. 값은 $1,\thinspace 0.5403,\thinspace 0.8576,\thinspace 0.6543,\thinspace 0.7935$ 로 한 점을 사이에 두고 좁혀진다. 평균값 정리(mean value theorem)로 $\vert\cos x-\cos y\vert=\vert\sin\xi\vert\thinspace\vert x-y\vert$ 이고 $\lbrack 0,1\rbrack$ 에서 $\vert\sin\xi\vert\le\sin 1\lt 0.85$ 이므로, 한 번 적용할 때마다 두 점의 거리가 $0.85$ 배 이하로 줄어든다.

이웃 항의 간격이 매번 $0.85$ 배 이하로 줄어들면 간격의 합이 등비급수라서 유한하고 반복열이 한 점으로 수렴한다. $\cos$ 이 연속이므로 극한 $p$ 는 $p=\cos p$ 를 만족한다. 고정점이 둘이면 그 거리가 자기 자신의 $0.85$ 배 이하여야 하므로 거리가 $0$ 이다. 거리를 일정 비율 이하로 줄이는 사상과 빠진 극한이 없는 공간만 있으면 이 논증이 그대로 돈다.

# 정의

## 축약사상

$X$ 를 비어 있지 않은 [완비](completeness.md) [거리 공간](metric-spaces.md), $d$ 를 그 거리, $T : X \to X$ 를 함수라 하자. 어떤 $0 \lt q \lt 1$ 이 있어 모든 $x, y \in X$ 에 대해

$$
d(Tx,Ty)\le q\thinspace d(x,y)
$$

이면 $T$ 를 **축약사상(contraction mapping)** 이라 하고 $q$ 를 축약 계수(contraction constant)라 한다. $T(p)=p$ 인 점 $p$ 를 $T$ 의 **고정점(fixed point)** 이라 한다.

직관 절의 $\cos$ 는 $\lbrack 0,1\rbrack$ 을 $\lbrack\cos 1,1\rbrack\subseteq\lbrack 0,1\rbrack$ 로 보내고 축약 계수 $\sin 1\approx 0.84$ 인 축약사상이며, 고정점은 $0.739\ldots$ 다. $\mathbb R$ 위의 $T(x)=(x+2)/3$ 은 축약 계수 $1/3$ 인 축약사상이고 고정점은 $1$ 이다.

# 성질

## 연속성

축약사상은 [Lipschitz 사상](lipschitz-maps.md)의 상수가 $q\lt 1$ 인 경우이므로 [연속](continuity.md)이다. 정리에서 연속성을 따로 가정하지 않는다.

## 고정점의 존재와 유일성

위 조건에서 고정점은 정확히 하나 존재하며, 임의의 시작점 $x_0$ 에서 $x_{n+1} = T(x_n)$ 으로 반복하면 그 고정점으로 수렴한다.

증명의 요지. 이웃 항의 거리는 $d(x_{k+1}, x_k) \le q^k d(x_1, x_0)$ 이므로 $m \gt n \ge 0$ 에 대해 삼각부등식과 등비급수로

$$
d(x_m,x_n)\le\sum_{k=n}^{m-1}q^k d(x_1,x_0)\le\frac{q^n}{1-q}\thinspace d(x_1,x_0)
$$

를 얻는다. 우변이 $0$ 으로 가므로 반복열은 Cauchy 이고 완비성으로 극한 $p$ 가 존재한다. $T$ 가 연속이므로 $x_{n+1} = T(x_n)$ 의 양변에 극한을 취하면 $p = T(p)$ 다. 서로 다른 고정점 $p, r$ 이 있다면 $d(p,r) = d(Tp,Tr) \le q \cdot d(p,r)$ 이라 $d(p,r) = 0$ 이다.

## 오차 한계

위 부등식에서 $m \to \infty$ 를 보내면 선험적 한계(a priori bound)를 얻는다.

$$
d(x_n,p)\le\frac{q^n}{1-q}\thinspace d(x_1,x_0)
$$

같은 논법을 $n$ 번째 항에서 다시 시작하면 후험적 한계(a posteriori bound)가 나온다.

$$
d(x_n,p)\le\frac{q}{1-q}\thinspace d(x_n,x_{n-1})
$$

전자는 시작 전에 필요한 반복 횟수를 계산할 때, 후자는 반복 중에 종료 조건을 판정할 때 쓴다. 이웃 항의 차이가 충분히 작으면 멈춘다는 관례의 근거가 후자이며, $q$ 가 $1$ 에 가까우면 $q/(1-q)$ 가 커져 그 관례가 위험하다.

## 가정의 필요성

세 가정 가운데 하나를 빼면 결론이 성립하지 않는다.

| 빠진 가정 | 반례 |
|---|---|
| 완비성 | $(0,1)$ 에서 $T(x)=x/2$ . 고정점 $0$ 이 공간 밖 |
| $q \lt 1$ (엄밀한 축약) | $\mathbb{R}$ 에서 $T(x) = x + 1/(1+e^x)$ . $\lvert T(x)-T(y) \rvert \lt\lvert x-y \rvert$ 이지만 고정점 없음 |
| $T(X) \subseteq X$ | 정의역을 벗어나면 반복 자체가 정의되지 않음 |

거리가 줄어든다는 조건으로는 부족하고 일정 비율 이하로 줄어들어야 한다. 비율이 $1$ 에 한없이 가까워지면 등비급수가 발산해 수렴 논증이 깨진다.

## 수렴 속도

$d(x_n, p) \le q^n d(x_0, p)$ 이므로 오차가 매 단계 상수 배로 줄어드는 선형 수렴(linear convergence)이고, 유효 자릿수가 일정하게 늘어난다.

[Newton 법](newton-method.md)은 해 근처에서 축약 계수가 $0$ 으로 가므로 이차 수렴을 보이며, 그 대가로 시작점이 충분히 가까워야 한다.

$(x+2)/3$ 은 $0$ 에서 시작해 $2/3, 8/9, 26/27$ 을 거쳐 $1$ 로 간다. 축약 계수가 $1/3$ 이라 자릿수가 빠르게 늘고, 계수가 $0.85$ 인 $\cos$ 은 같은 정확도에 훨씬 많은 반복이 든다.

## 변형

- 반복 축약. $T$ 자체는 축약이 아니어도 어떤 $T^m$ 이 축약이면 같은 결론이 성립한다. 적분방정식에서 쓰이는 형태다.
- 국소 판정. 닫힌 공 $\bar{B}(x_0, r)$ 을 자기 안으로 보내는 축약이면 그 공 안에 고정점이 있다. $d(x_0, Tx_0) \le (1-q)r$ 을 확인하면 된다.
- 매개변수 의존. $T$ 가 매개변수에 연속적으로 의존하면 고정점도 그렇다. 음함수 정리(implicit function theorem)의 증명이 이 사실을 쓴다.

# 활용

## 미분방정식의 해

초깃값 문제 $y' = f(t,y)$ , $y(t_0) = y_0$ 를 적분해

$$
y(t)=y_0+\int_{t_0}^t f(s,y(s))\thinspace ds
$$

로 바꾸면 우변이 연속함수 공간 위의 사상이 된다. $f$ 가 $y$ 에 대해 Lipschitz 이면 구간을 충분히 짧게 잡아 이 사상을 축약으로 만들 수 있고, $C\lbrack a,b\rbrack$ 가 상한 거리에서 완비이므로 정리가 적용된다.

이것이 Picard–Lindelöf 정리(Picard–Lindelöf theorem)이며 [상미분방정식](ordinary-differential-equations.md)의 해의 존재와 유일성을 준다. 같은 기법이 적분방정식과 편미분방정식의 약해(weak solution) 이론으로 확장된다.

## 수치 알고리즘

비선형 방정식의 반복해법, 선형계의 Jacobi 반복(Jacobi iteration)과 Gauss–Seidel 반복(Gauss–Seidel iteration), [Markov 결정 과정](markov-decision-process.md)의 가치 반복(value iteration)이 모두 축약사상의 반복이다. 가치 반복에서 Bellman 작용소(Bellman operator)가 할인율 $\gamma \lt 1$ 을 계수로 하는 축약이며, 그 사실이 최적 가치함수의 존재와 유일성과 수렴 속도를 준다.

## 정의의 정당화

프랙탈을 축약사상들의 모임에 대한 불변집합으로 정의하는 반복함수계(iterated function system), 재귀적으로 정의된 함수나 자료형의 존재 논증, 게임이론의 균형 존재 증명이 모두 완비 공간에서 고정점을 찾는 형태다.[^1]

[^1]: Jiří Lebl, *Basic Analysis*, Fixed point theorem and Picard's theorem again. 축약사상 고정점 정리의 증명과 미분방정식 응용. https://www.jirka.org/ra/html/sec_metpicard.html

# 연관 문서

## 선수지식

- [완비성](completeness.md)
- [Lipschitz 사상](lipschitz-maps.md)

## 더 알아보기

- [상미분방정식](ordinary-differential-equations.md)
- [Newton 법](newton-method.md)
- [Markov 결정 과정](markov-decision-process.md)

#analysis #functional_analysis #computation #theorem
