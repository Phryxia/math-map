# 최적 정지

# 개요

최적 정지는 값을 하나씩 관측하면서 언제 멈출지 정하는 문제다. 멈추면 그 순간의 값을 받고 관측은 끝나며, 지나간 값으로 되돌아갈 수 없다. 멈추는 규칙은 지금까지 본 것만으로 결정되어야 하고, 그런 규칙 가운데 기대 보상이 가장 큰 것을 찾는다.

# 직관

지원자 $n$ 명을 한 명씩 면접한다. 한 사람을 보면 지금까지 본 사람들 사이의 순위는 알 수 있지만 남은 사람과는 견줄 수 없다. 채용하면 면접이 끝나고, 거절한 사람은 다시 부를 수 없다. 가장 뛰어난 한 명을 뽑을 확률을 크게 하려고 한다.

전부 본 뒤에 고르는 것은 규칙이 아니다. 마지막 사람을 본 시점에는 앞의 $n-1$ 명이 모두 거절된 뒤이기 때문이다. 반대로 첫 사람을 뽑으면 그가 전체 최고일 확률이 $1/n$ 이다.

$k$ 번째 사람이 지금까지 본 $k$ 명 가운데 최고라 하자. 이 사람이 전체 $n$ 명 가운데 최고일 확률은 $k/n$ 이다. 순위의 배열이 모두 같은 확률로 나오므로, 앞 $k$ 명 중 1위가 전체 1위인 경우는 전체 1위가 앞 $k$ 명 안에 있는 경우와 같기 때문이다. $k$ 가 작으면 이 확률이 작으므로 뽑지 않고, $k$ 가 크면 남은 사람이 적으므로 뽑는다.

그러면 규칙은 문턱 $r$ 하나로 적힌다. 처음 $r-1$ 명은 무조건 거절하고, 그 뒤로 지금까지 최고인 사람이 나오면 그 자리에서 뽑는다. 전체 1위가 $k$ 번째에 있고 앞 $k-1$ 명 중 1위가 처음 $r-1$ 명 안에 있으면 이 규칙이 성공하므로, 성공 확률은 다음과 같다.

$$p(r)=\sum_{k=r}^{n}\frac{1}{n}\cdot\frac{r-1}{k-1}$$

$r-1=xn$ 으로 두고 $n$ 을 키우면 $p\to -x\ln x$ 이고, 이 값은 $x=1/e$ 에서 최대 $1/e$ 다. 전체의 37% 를 그냥 보낸 뒤 처음 나오는 최고를 뽑으면 확률 $0.368$ 로 1위를 잡는다.

# 정의

보상열 $(Y_n)\_{n\ge 0}$ 과 [filtration](martingales.md) $(\mathcal F_n)$ 이 주어지고 $Y_n$ 은 $\mathcal F_n$ 가측이라 하자. 확률변수 $\tau$ 가 모든 $n$ 에 대해 $\lbrace\tau=n\rbrace\in\mathcal F_n$ 을 만족하면 **정지시간**이다. **최적 정지 문제**는 다음 값을 주는 정지시간을 찾는 문제다.

$$V=\sup_{\tau\le N}\mathbb E\lbrack Y_\tau\rbrack$$

## Snell 포락

시계 $N$ 이 유한할 때 다음 역방향 귀납으로 정의한 과정 $(V_n)$ 을 $(Y_n)$ 의 **Snell 포락**이라 한다[^2].

$$V_N=Y_N,\qquad V_n=\max\lbrace Y_n,\thinspace\mathbb E\lbrack V_{n+1}\mid\mathcal F_n\rbrack\rbrace$$

$V_n$ 은 시각 $n$ 까지 멈추지 않았을 때 앞으로 얻을 수 있는 최대 기대 보상이다. 두 항 가운데 앞의 것은 지금 멈추는 가치, 뒤의 것은 한 단계 더 기다리는 가치다.

## 최적 규칙

$$\tau^\ast=\min\lbrace n\ge 0:\thinspace Y_n=V_n\rbrace$$

지금 멈추는 가치가 기다리는 가치보다 작지 않은 첫 시각에 멈춘다.

# 성질

## Snell 포락의 특징

$(V_n)$ 은 $(Y_n)$ 을 지배하는 supermartingale 가운데 가장 작다. 정의에서 $V_n\ge Y_n$ 이고 $V_n\ge\mathbb E\lbrack V_{n+1}\mid\mathcal F_n\rbrack$ 이므로 supermartingale 이다. $(W_n)$ 이 $(Y_n)$ 을 지배하는 supermartingale 이면 $W_N\ge Y_N=V_N$ 에서 시작해 역방향 귀납으로 $W_n\ge V_n$ 이 따라온다.

## 최적성

$\mathbb E\lbrack V_0\rbrack=V$ 이고 $\tau^\ast$ 가 최댓값을 준다.

증명의 요지. $n\lt\tau^\ast$ 에서는 $V_n\gt Y_n$ 이므로 $V_n=\mathbb E\lbrack V_{n+1}\mid\mathcal F_n\rbrack$ 이고, 따라서 멈춘 과정 $(V_{n\wedge\tau^\ast})$ 은 martingale 이다. 선택적 정지 정리에서 $\mathbb E\lbrack V_0\rbrack=\mathbb E\lbrack V_{\tau^\ast}\rbrack=\mathbb E\lbrack Y_{\tau^\ast}\rbrack$ 이다. 반대로 임의의 정지시간 $\tau\le N$ 에 대해 $(V_{n\wedge\tau})$ 는 supermartingale 이므로 $\mathbb E\lbrack Y_\tau\rbrack\le\mathbb E\lbrack V_\tau\rbrack\le\mathbb E\lbrack V_0\rbrack$ 이다.

## 단조 문제와 한 단계 예측

$A_n=\lbrace Y_n\ge\mathbb E\lbrack Y_{n+1}\mid\mathcal F_n\rbrack\rbrace$ 이 $n$ 에 대해 증가하면 문제가 **단조**라 한다. 이때 $A_n$ 에 처음 들어가는 시각이 최적이다. 한 단계만 내다본 비교가 전체를 내다본 비교와 같아지므로, 역방향 귀납을 풀지 않고 부등식 하나로 규칙이 결정된다. 비서 문제가 이 경우이고 거기서 나오는 부등식이 위의 문턱 $r$ 이다.

## 무한 시계

$N=\infty$ 이면 역방향 귀납의 출발점이 없다. $\sup_n\lvert Y_n\rvert$ 이 적분 가능하면 유한 시계의 값 $V^{(N)}$ 이 $N$ 에 대해 증가하며 수렴하고 그 극한이 무한 시계의 값이다. 보상이 $Y_n=\gamma^n g(X_n)$ 꼴이고 $(X_n)$ 이 [Markov 연쇄](markov-chains.md)이면 $V_n=v(X_n)$ 으로 상태의 함수가 되어, 값 반복이 $v$ 를 계산한다.

# 활용

- **비서 문제.** 보상이 뽑은 사람이 1위라는 사건의 지시함수이고, 단조 문제라서 문턱 규칙이 최적이다[^1]. 순위만 관측하는 대신 값을 관측하면 문턱이 시각마다 달라진다.
- **미국형 옵션.** 보유자가 만기 전 아무 때나 행사할 수 있는 옵션의 가격이 위험중립 측도 아래의 최적 정지 값이다. Snell 포락이 가격 과정이고 $\tau^\ast$ 가 최적 행사 시각이다.
- **순차적 검정.** 표본을 하나씩 보며 판정을 내릴지 더 뽑을지 정하는 문제가 정지 규칙의 선택이다. 관측 비용을 보상에서 빼면 최적 정지 문제가 된다.
- **탐색과 제어.** [Markov 결정 과정](markov-decision-process.md)에서 행동이 "멈춘다" 와 "계속한다" 둘뿐인 경우다. Bellman 방정식이 Snell 포락의 귀납식과 같은 식이다.

[^1]: T. S. Ferguson, *Who solved the secretary problem?*, Statistical Science **4** (1989), 282–289.

[^2]: A. N. Shiryaev, *Optimal Stopping Rules*, Springer, 1978. 2장이 Snell 포락과 단조 문제를 다룬다.

# 연관 문서

## 선수지식

- [Martingale](martingales.md)
- [Markov 결정 과정](markov-decision-process.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #optimization #statistics
