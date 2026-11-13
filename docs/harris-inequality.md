# Harris 부등식

# 개요

**Harris 부등식(Harris inequality)** 은 독립인 동전들로 정해지는 두 사건이 모두 동전의 앞면이 늘수록 일어나기 쉬워지는 꼴이면, 두 사건이 서로 일어날 확률을 낮추지 않는다는 부등식이다. 간선마다 동전을 던져 연결 여부를 정한 그물에서 "왼쪽 끝과 오른쪽 끝이 이어진다" 와 "위쪽 끝과 아래쪽 끝이 이어진다" 는 공유하는 간선 때문에 독립이 아니다. 두 사건이 모두 열린 간선이 늘수록 일어나기 쉬워진다는 것만 확인하면, 이 부등식으로 둘이 함께 일어날 확률이 각 확률의 곱 이상이다.

# 직관

공정한 동전 세 개 $X_1, X_2, X_3$ 을 던져 앞면을 $1$ 로 적는다. $A$ 는 "$X_1 = 1$ 또는 $X_2 = 1$", $B$ 는 "$X_2 = 1$ 또는 $X_3 = 1$" 인 사건이다. 각각의 확률은 $3/4$ 이므로 독립이라면 둘이 함께 일어날 확률은 $9/16 = 36/64$ 다.

둘이 함께 일어나는 것은 $X_2 = 1$ 이거나, $X_2 = 0$ 이고 $X_1 = X_3 = 1$ 인 경우다. 확률은 $1/2 + 1/8 = 5/8 = 40/64$ 로 $36/64$ 보다 크다. $A$ 가 일어났다는 것을 알면 $X_2 = 1$ 일 가능성이 커지고, $X_2 = 1$ 이면 $B$ 도 일어난다.

$A$ 와 $B$ 는 모두 앞면을 하나 더해도 일어난 것이 취소되지 않는 사건이다. 이런 사건 둘은 공유하는 동전을 통해 서로를 돕기만 하고 방해하지 않는다. Harris 부등식이 이것을 모든 경우에 증명한다.

# 정의

## 증가 함수와 증가 사건

$\lbrace 0,1\rbrace^n$ 의 두 점 $x, y$ 가 모든 좌표에서 $x_i \le y_i$ 이면 $x \le y$ 로 적는다. 함수 $f$ 가 $x \le y$ 일 때마다 $f(x) \le f(y)$ 를 만족하면 **증가 함수(increasing function)** 라 한다. 지시함수가 증가 함수인 사건을 **증가 사건(increasing event)** 이라 하고, 여사건이 증가 사건인 사건을 **감소 사건(decreasing event)** 이라 한다. 직관 절의 $A$ 와 $B$ 는 증가 사건이고, $A$ 의 여사건 "$X_1 = X_2 = 0$" 은 감소 사건이다.

## 곱 측도

좌표 $X_1, \dots, X_n$ 이 독립이고 $P(X_i = 1) = p_i$ 인 $\lbrace 0,1\rbrace^n$ 위의 확률측도를 **곱 측도(product measure)** 라 한다. 직관 절은 $n = 3$, $p_i = 1/2$ 인 곱 측도다.

# 성질

## Harris 부등식

곱 측도에서 증가 함수 $f, g$ 는 다음을 만족한다[^1][^2].

$$
E\lbrack fg\rbrack \ge E\lbrack f\rbrack\thinspace E\lbrack g\rbrack
$$

$f, g$ 를 증가 사건 $A, B$ 의 지시함수로 두면 $P(A \cap B) \ge P(A)P(B)$ 이다.

증명의 요지. $n = 1$ 이면 좌변에서 우변을 뺀 값이 다음과 같아 $0$ 이상이다.

$$
p(1-p)\big(f(1) - f(0)\big)\big(g(1) - g(0)\big)
$$

$n$ 에 대한 귀납법을 쓴다. $X_n$ 을 고정하면 나머지 좌표에 대해 귀납 가정으로 $E\lbrack fg \mid X_n\rbrack \ge E\lbrack f \mid X_n\rbrack E\lbrack g \mid X_n\rbrack$ 이다. $E\lbrack f \mid X_n\rbrack$ 와 $E\lbrack g \mid X_n\rbrack$ 은 $X_n$ 의 증가 함수이므로 $n = 1$ 의 경우를 다시 쓴다.

## 증가 사건과 감소 사건

$A$ 가 증가 사건이고 $D$ 가 감소 사건이면 $P(A \cap D) \le P(A)P(D)$ 다. $D$ 의 여사건이 증가 사건이므로 $P(A \cap D^c) \ge P(A)P(D^c)$ 이고, $P(A)$ 에서 빼면 나온다. 감소 사건 둘은 여사건 둘이 증가 사건이므로 $P(D_1 \cap D_2) \ge P(D_1)P(D_2)$ 다.

## 여러 사건

증가 사건 $A_1, \dots, A_m$ 에 대해 다음이 성립한다.

$$
P(A_1 \cap \dots \cap A_m) \ge \prod_{i=1}^m P(A_i)
$$

$A_1 \cap \dots \cap A_{m-1}$ 도 증가 사건이므로 부등식을 되풀이해 쓴다. 감소 사건에도 같다.

## 집합족 판본

$p_i = 1/2$ 이면 사건은 $\lbrace 1, \dots, n\rbrace$ 의 부분집합들의 족이고, 증가 사건은 원소를 더해도 족에 남는 위로 닫힌 족이다. 위로 닫힌 족 $\mathcal A, \mathcal B$ 에 대해 $2^n\lvert\mathcal A \cap \mathcal B\rvert \ge \lvert\mathcal A\rvert\lvert\mathcal B\rvert$ 가 성립하고, 이것을 Kleitman 보조정리(Kleitman's lemma)라 한다[^2].

# 활용

- [침투](percolation.md). Harris 는 평면 격자 침투에서 열린 경로가 생기는 사건들이 양의 상관을 갖는다는 것으로, 결합 침투의 임계확률이 $1/2$ 이상임을 보였다[^1]. 상자의 가로 횡단과 세로 횡단을 이어 붙여 긴 경로를 만드는 논법도 이 부등식을 쓴다.
- [Janson 부등식](janson-inequality.md). 겹치는 사건들이 하나도 일어나지 않을 확률의 하한은 감소 사건들의 곱 하한이고, 상한의 증명에서도 조건부 확률을 이 부등식으로 누른다.
- FKG 부등식(Fortuin–Kasteleyn–Ginibre inequality). 좌표가 독립이 아닌 측도로 넓힌 판본이고, [Ising 모형](ising-model.md)의 상관 부등식으로 쓰인다.

[^1]: T. E. Harris, "A lower bound for the critical probability in a certain percolation process", Proceedings of the Cambridge Philosophical Society 56 (1960), 13–20.
[^2]: D. J. Kleitman, "Families of non-disjoint subsets", Journal of Combinatorial Theory 1 (1966), 153–155.

# 연관 문서

## 선수지식

- [확률적 방법](probabilistic-method.md)

## 더 알아보기

- [Janson 부등식](janson-inequality.md)

#combinatorics #probability #graph_theory
