# Schmidt 부분공간 정리

# 개요

**Schmidt 부분공간 정리(Schmidt subspace theorem)** 는 대수적 수를 계수로 하는 일차식 여러 개가 정수점에서 동시에 너무 작아지는 일이 유한 개의 평면 위에서만 일어난다는 정리다. $\sqrt2$ 와 $\sqrt3$ 을 분모가 같은 두 분수로 근사한다고 하자. 분모 $41$ 에서 $58/41$ 과 $71/41$ 의 오차는 각각 약 $0.00042$, $0.00034$ 로, 둘 다 $41^{-3/2}\approx 0.0038$ 보다 작다. 이런 분모는 무한히 많은데, 지수 $3/2$ 를 조금이라도 키우면 어떻게 되는지가 물음이다.

이 정리는 지수를 키운 근사의 정수점 $(q,p_1,p_2)$ 가 원점을 지나는 유한 개의 평면 위에 놓인다고 답한다. 각 평면 위에서는 $1,\sqrt2,\sqrt3$ 이 유리수 계수로 일차독립이라는 사실 때문에 분모가 유한 개만 남아서, 그런 근사는 유한 개다.

# 직관

분모 $q$ 와 분자 $p_1,p_2$ 를 정수점 $x=(q,p_1,p_2)$ 로 묶고 일차식 셋을 둔다.

$$
L_0(x)=q,\qquad L_1(x)=q\sqrt2-p_1,\qquad L_2(x)=q\sqrt3-p_2
$$

$x=(41,58,71)$ 에서 값은 $41$, 약 $-0.0172$, 약 $0.0141$ 이다. 오차 $\lvert\sqrt2-p_1/q\rvert$ 는 $\lvert L_1(x)\rvert/q$ 이므로, 두 오차가 $q^{-3/2}$ 보다 작다는 것은 $\lvert L_1(x)\rvert$ 와 $\lvert L_2(x)\rvert$ 가 $q^{-1/2}$ 보다 작다는 것이다. 그러면 세 값의 곱의 절댓값이 $1$ 보다 작다. $x=(41,58,71)$ 에서는 곱의 절댓값이 약 $0.0100$ 이다.

지수를 $3/2$ 에서 $3/2+\delta$ 로 키우면 같은 계산으로 곱의 절댓값이 $q^{-2\delta}$ 보다 작아진다. 물음은 세 일차식의 곱이 점의 크기의 음수 거듭제곱보다 작은 정수점이 얼마나 많은지로 바뀐다.

그런 점이 무한히 많아도 되는 자리가 있다. $q=0$ 인 점 $(0,k,0)$ 에서는 $L_0$ 이 $0$ 이라 곱이 $0$ 이므로, 평면 $q=0$ 위에 이런 점이 무한히 있다. 그래서 정리의 결론은 "유한 개의 점" 이 아니라 "유한 개의 평면" 이다.

근사 문제에서는 $q\ge 1$ 이라 평면 $q=0$ 은 빠진다. 다른 평면 $c_0q+c_1p_1+c_2p_2=0$ 위의 점은 양변을 $q$ 로 나누어 $c_0+c_1(p_1/q)+c_2(p_2/q)=0$ 을 만족한다. $p_1/q$ 와 $p_2/q$ 가 $\sqrt2$ 와 $\sqrt3$ 에 다가가면 $c_0+c_1\sqrt2+c_2\sqrt3$ 이 $0$ 에 다가가야 하지만, 이 값은 $0$ 이 아닌 고정된 수다. 그래서 한 평면 위의 근사는 유한 개다.

# 정의

## 선형형식

복소수 $a_1,\dots,a_n$ 에 대해 $L(x)=a_1x_1+\cdots+a_nx_n$ 을 $n$ 변수 **선형형식(linear form)** 이라 한다. 계수가 모두 대수적 수이면 **대수적 선형형식** 이라 한다. 직관 절의 $L_0,L_1,L_2$ 는 계수가 $1$, $\sqrt2$, $\sqrt3$, $-1$, $0$ 인 대수적 선형형식이다.

선형형식 $L_1,\dots,L_n$ 의 계수 벡터가 일차독립이면 이 형식들을 **일차독립** 이라 한다. 직관 절의 셋은 계수 벡터 $(1,0,0)$, $(\sqrt2,-1,0)$, $(\sqrt3,0,-1)$ 이 일차독립이다. 정수점 $x$ 의 크기는 $\lVert x\rVert=\max_i\lvert x_i\rvert$ 로 잰다.

## 정리의 진술

$L_1,\dots,L_n$ 이 일차독립인 $n$ 변수 대수적 선형형식이고 $\varepsilon\gt 0$ 이라 하자. 다음 부등식을 만족하는 정수점 $x\in\mathbb Z^n$ 전체는 $\mathbb Q^n$ 의 유한 개의 진부분공간의 합집합에 들어간다[^1].

$$
\lvert L_1(x)\rvert\thinspace\lvert L_2(x)\rvert\cdots\lvert L_n(x)\rvert\lt\lVert x\rVert^{-\varepsilon}
$$

이것을 **Schmidt 부분공간 정리** 라 하고, 그 진부분공간들을 **예외 부분공간(exceptional subspace)** 이라 한다. 직관 절에서 평면 $q=0$ 이 예외 부분공간 가운데 하나다.

# 성질

## Roth 정리의 유도

$n=2$ 이고 $\alpha$ 가 대수적 무리수일 때 $L_1(x,y)=x-\alpha y$, $L_2(x,y)=y$ 로 둔다. 기약분수 $p/q$ 가 $\lvert\alpha-p/q\rvert\lt q^{-2-\varepsilon}$ 을 만족하면 $\lvert L_1(p,q)\rvert\lt q^{-1-\varepsilon}$ 이고 $L_2(p,q)=q$ 이므로 곱은 $q^{-\varepsilon}$ 보다 작다.

$\lVert(p,q)\rVert\le(\lvert\alpha\rvert+1)q$ 이므로 $q$ 가 $\lvert\alpha\rvert+1$ 이상이면 곱이 $\lVert(p,q)\rVert^{-\varepsilon/2}$ 보다 작다. 부분공간 정리로 이런 $(p,q)$ 는 원점을 지나는 유한 개의 직선 위에 있고, 한 직선 위의 기약분수는 하나뿐이다. 이것이 [Roth 정리](roth-theorem.md)다.

예외 직선 $y=0$ 위의 점 $(k,0)$ 은 $L_2=0$ 이라 모두 부등식을 만족한다. 결론을 유한 개의 점으로 강화할 수 없다는 것이 $n=2$ 에서도 보인다.

## 동시 근사

실수인 대수적 수 $\alpha_1,\dots,\alpha_n$ 에 대해 $1,\alpha_1,\dots,\alpha_n$ 이 유리수 계수로 일차독립이고 $\varepsilon\gt 0$ 이면, 다음을 모든 $i$ 에서 만족하는 분모 $q\ge 1$ 은 유한 개다.

$$
\left\lvert\alpha_i-\frac{p_i}{q}\right\rvert\lt q^{-1-1/n-\varepsilon}
$$

[Diophantine 근사](diophantine-approximation.md)의 Dirichlet 근사 정리(Dirichlet's approximation theorem)는 지수 $1+1/n$ 에서 이런 $q$ 가 무한히 많음을 보이므로, 대수적 수에서 지수 $1+1/n$ 은 더 올라가지 않는다.

증명의 요지는 직관 절의 계산이다. $x=(q,p_1,\dots,p_n)$ 과 형식 $L_0=q$, $L_i=q\alpha_i-p_i$ 에 대해 곱이 $q^{-n\varepsilon}$ 보다 작으므로 해는 유한 개의 예외 부분공간에 들어간다. 각 부분공간 $c_0q+\sum_ic_ip_i=0$ 위에서는 $c_0+\sum_ic_i\alpha_i\ne 0$ 이 $q$ 의 크기를 묶는다.

## p 진 판본

Schlickewei 는 실수나 복소수의 절댓값 대신 유한 개의 소수 $p$ 에 대한 [p 진수](p-adic-numbers.md)의 절댓값을 함께 쓰는 판본을 증명했다[^2]. 정수점 $x$ 에 대해 각 자리의 선형형식 값의 곱을 모든 자리에 걸쳐 곱한 양이 $\lVert x\rVert^{-\varepsilon}$ 보다 작으면, 결론은 위와 같이 유한 개의 진부분공간이다. 소수 $p$ 의 거듭제곱으로 나누어떨어지는 것이 $p$ 진 절댓값이 작다는 것이므로, 이 판본은 정수의 소인수에 관한 문제에 쓰인다.

## 비유효성과 개수의 상한

Schmidt 의 증명은 Roth 정리의 보조 다항식 논법을 기하수(geometry of numbers)의 연속 최소(successive minima)와 결합한다. Roth 정리와 같이 예외 부분공간이 무엇인지 계산하는 방법을 주지 않는다.

예외 부분공간의 개수는 따로 묶인다. Schmidt 는 큰 정수점에서 예외 부분공간의 개수가 $n$, $\varepsilon$, 계수의 차수에만 의존하는 수 이하임을 증명했다[^3]. 이것을 정량적 부분공간 정리(quantitative subspace theorem)라 한다.

# 활용

- [S-단위 방정식](s-unit-equation.md). 수체 $K$ 의 $S$ 단위 $u_1,\dots,u_n$ 에 대한 방정식 $u_1+\cdots+u_n=1$ 에서 부분합이 $0$ 이 되지 않는 해는 유한 개다. 증명은 p 진 판본을 해의 좌표에 적용하고 예외 부분공간마다 변수 개수를 줄여 귀납한다[^4].
- 곡선의 정수점. 종수 $1$ 이상인 곡선의 정수점이 유한 개라는 [Siegel 의 정수점 정리](siegel-integral-points.md)를 Corvaja 와 Zannier 는 부분공간 정리로 다시 증명했다[^5].
- 대수적 수의 전개. 대수적 무리수의 $b$ 진 전개는 유한 오토마톤(finite automaton)으로 생성되지 않는다. Adamczewski 와 Bugeaud 는 반복되는 블록이 많은 전개가 동시에 좋은 근사를 여럿 준다는 것을 보이고, 그 근사에 부분공간 정리를 써서 이를 증명했다[^6].

[^1]: W. M. Schmidt, "Norm form equations", *Annals of Mathematics* **96** (1972), 526–551.

[^2]: H. P. Schlickewei, "The p-adic Thue–Siegel–Roth–Schmidt theorem", *Archiv der Mathematik* **29** (1977), 267–270.

[^3]: W. M. Schmidt, "The subspace theorem in diophantine approximations", *Compositio Mathematica* **69** (1989), 121–173.

[^4]: J.-H. Evertse, "On sums of S-units and linear recurrences", *Compositio Mathematica* **53** (1984), 225–244.

[^5]: P. Corvaja and U. Zannier, "A subspace theorem approach to integral points on curves", *Comptes Rendus Mathématique* **334** (2002), 267–271.

[^6]: B. Adamczewski and Y. Bugeaud, "On the complexity of algebraic numbers I. Expansions in integer bases", *Annals of Mathematics* **165** (2007), 547–565.

# 연관 문서

## 선수지식

- [Roth 정리](roth-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis
