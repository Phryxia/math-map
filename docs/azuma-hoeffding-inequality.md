# Azuma–Hoeffding 부등식

# 개요

**Azuma–Hoeffding 부등식(Azuma–Hoeffding inequality)** 은 한 번에 조금씩만 바뀌는 무작위 과정이 처음 예측에서 크게 벗어날 확률이 지수적으로 작다는 부등식이다. 공 $100$ 개를 상자 $100$ 개에 하나씩 무작위로 던지면 빈 상자는 평균 $36.6$ 개다. 상자들은 서로 영향을 주므로 빈 상자 수는 독립인 수의 합이 아니고, 독립인 수의 합에 쓰는 [집중부등식](concentration-inequalities.md)을 그대로 쓸 수 없다.

공 하나의 자리만 바꾸면 빈 상자 수가 많아야 $1$ 바뀐다는 사실만 쓰면, 빈 상자 수가 평균에서 $20$ 이상 벗어날 확률이 $0.0007$ 이하라는 것이 나온다.

# 직관

공 $4$ 개를 상자 $4$ 개에 무작위로 던지고 빈 상자 수를 $Z$ 라 한다. 상자 하나가 빌 확률은 네 공이 모두 그 상자를 피할 확률 $(3/4)^4 = 81/256$ 이므로 $E\lbrack Z\rbrack = 4\cdot 81/256 = 81/64$ 다.

상자 $j$ 가 비면 $1$, 아니면 $0$ 인 수를 $Y_j$ 라 하면 다음이 성립한다.

$$
Z = Y_1 + Y_2 + Y_3 + Y_4
$$

Hoeffding 부등식의 증명은 $e^{\lambda Z}$ 의 기댓값을 $e^{\lambda Y_j}$ 의 기댓값 네 개의 곱으로 쪼갠다. 그런데 상자 $1, 2, 3$ 이 모두 비면 상자 $4$ 는 반드시 차 있으므로 $Y_j$ 들은 독립이 아니고, 곱으로 쪼갤 수 없다.

상자가 서로 얽혀서 막혔으니, 서로 독립인 공을 단위로 삼는다. 공을 하나씩 던지면서 그때까지 본 결과로 $Z$ 의 기댓값을 다시 계산한다. 처음 값은 $81/64$ 다. 첫 공은 어느 상자에 들어가도 상황이 같으므로 값이 그대로 $81/64$ 다.

둘째 공이 첫 공과 같은 상자에 들어가면(확률 $1/4$) 빈 상자 세 개가 각각 남은 두 공을 피할 확률이 $9/16$ 이므로 값은 $27/16$ 이 된다. 다른 상자에 들어가면(확률 $3/4$) 빈 상자가 두 개라 값은 $18/16$ 이다. 바뀐 양은 $+27/64$ 와 $-9/64$ 이고, 확률을 곱해 더하면 $27/256 - 27/256 = 0$ 이다.

이렇게 갱신할 때마다 바뀌는 양은 평균이 $0$ 이고 크기가 $1$ 이하다. Hoeffding 증명이 각 항에 대해 쓰던 것도 평균과 범위 두 가지뿐이므로, 곱으로 쪼개는 대신 한 단계씩 조건부로 지수 기댓값을 누르면 같은 꼬리 상한이 나온다. 갱신값의 열은 [Martingale](martingales.md)이고, 이 상한이 Azuma–Hoeffding 부등식이다.

# 정의

## 유계 증분 martingale

filtration $(\mathcal F_k)\_{k=0}^n$ 에 대한 martingale $(M_k)\_{k=0}^n$ 과 상수 $c_1, \dots, c_n$ 이 모든 $k$ 에서

$$
\lvert M_k - M_{k-1}\rvert \le c_k
$$

를 만족하면 $(M_k)$ 를 **유계 증분 martingale(martingale with bounded differences)** 이라 한다. 증분 $D_k = M_k - M_{k-1}$ 은 $E\lbrack D_k \mid \mathcal F_{k-1}\rbrack = 0$ 을 만족한다. 직관 절의 갱신값 열은 $c_k = 1$ 인 유계 증분 martingale 이다.

## 유계 차분 조건

곱집합 $\mathcal X_1\times\dots\times\mathcal X_n$ 위의 실함수 $f$ 가 $i$ 번째 좌표만 다른 두 점 $x, x'$ 에서

$$
\lvert f(x) - f(x')\rvert \le c_i
$$

를 만족하면 $f$ 가 **유계 차분 조건(bounded differences condition)** 을 만족한다고 한다. 빈 상자 수는 공의 자리를 좌표로 하는 함수이고, 공 하나를 상자 $A$ 에서 $B$ 로 옮기면 $A$ 가 새로 비거나 $B$ 가 새로 차는 일이 많아야 한 번씩 일어나므로 $c_i = 1$ 이다.

## 노출 martingale

독립인 확률변수 $X_1, \dots, X_n$ 과 함수 $f$ 에 대해

$$
Z_k = E\lbrack f(X_1, \dots, X_n) \mid X_1, \dots, X_k\rbrack, \qquad k = 0, 1, \dots, n
$$

을 **노출 martingale(exposure martingale)** 이라 한다. Doob martingale 의 한 경우이고, $Z_0 = E\lbrack f\rbrack$, $Z_n = f(X_1, \dots, X_n)$ 이다. 직관 절의 갱신값 열이 공의 자리를 하나씩 드러낸 노출 martingale 이다.

# 성질

## Azuma–Hoeffding 부등식

유계 증분 martingale 에 대해 모든 $t \gt 0$ 에서 다음이 성립한다[^1].

$$
P(M_n - M_0 \ge t) \le \exp\negthinspace\left(-\frac{t^2}{2\sum_{k=1}^n c_k^2}\right)
$$

$-M_k$ 에도 같은 부등식을 쓰면 $\lvert M_n - M_0\rvert \ge t$ 일 확률은 우변의 두 배 이하다.

증명의 요지. Hoeffding 보조정리(Hoeffding's lemma)를 조건부로 쓰면, $\mathcal F_{k-1}$ 이 주어졌을 때 $D_k$ 는 평균이 $0$ 이고 길이 $2c_k$ 인 구간 $\lbrack -c_k, c_k\rbrack$ 에 놓이므로 다음이 나온다.

$$
E\lbrack e^{\lambda D_k} \mid \mathcal F_{k-1}\rbrack \le e^{\lambda^2 c_k^2/2}
$$

$k = n, n-1, \dots, 1$ 순서로 조건부 기댓값을 벗기면 $E\lbrack e^{\lambda(M_n - M_0)}\rbrack$ 가 $\exp(\lambda^2 \sum c_k^2/2)$ 이하다. Markov 부등식(Markov's inequality)으로 $P(M_n - M_0 \ge t)$ 를 $e^{-\lambda t}$ 와 이 값의 곱 이하로 누르고 $\lambda = t/\sum c_k^2$ 를 넣는다.

## McDiarmid 부등식

$X_1, \dots, X_n$ 이 독립이고 $f$ 가 상수 $c_i$ 로 유계 차분 조건을 만족하면 다음이 성립한다[^2].

$$
P\big(f(X_1, \dots, X_n) - E\lbrack f\rbrack \ge t\big) \le \exp\negthinspace\left(-\frac{2t^2}{\sum_{i=1}^n c_i^2}\right)
$$

이것이 **McDiarmid 부등식(McDiarmid's inequality)** 이다. 공 $100$ 개와 상자 $100$ 개에서 $c_i = 1$, $t = 20$ 을 넣으면 양쪽 꼬리를 합한 확률이 $2e^{-8} \approx 0.00067$ 이하다.

증명의 요지. 노출 martingale 의 증분 $D_k$ 를 쓴다. $X_1, \dots, X_{k-1}$ 을 고정하면 독립성 때문에 나머지 좌표의 분포가 $X_k$ 에 의존하지 않으므로, $D_k$ 는 $X_k$ 의 함수에서 그 평균을 뺀 것이다. 그 함수의 최댓값과 최솟값의 차는 유계 차분 조건에 따라 $c_k$ 이하다.

그래서 $D_k$ 는 길이 $c_k$ 인 구간에 놓이고, Hoeffding 보조정리가 $e^{\lambda^2 c_k^2/8}$ 을 준다. 나머지는 Azuma–Hoeffding 부등식의 증명과 같다.

Azuma–Hoeffding 부등식을 $\lvert D_k\rvert \le c_k$ 로 바로 쓰면 지수가 $t^2/(2\sum c_k^2)$ 이 되어 McDiarmid 부등식보다 네 배 약하다. 공 $100$ 개의 예에서는 $2e^{-2} \approx 0.27$ 이 나온다. 차이는 증분이 놓이는 구간의 길이가 $2c_k$ 인지 $c_k$ 인지에서 생긴다.

## 최댓값 판

같은 가정에서 과정 전체의 최댓값에 대해서도 다음이 성립한다.

$$
P\Big(\max_{0\le k\le n}(M_k - M_0) \ge t\Big) \le \exp\negthinspace\left(-\frac{t^2}{2\sum_{k=1}^n c_k^2}\right)
$$

증명의 요지. $e^{\lambda(M_k - M_0)}$ 는 [Jensen 부등식](jensen-inequality.md)에 따라 submartingale 이다. Doob 최대 부등식(Doob's maximal inequality)으로 최댓값의 꼬리를 $e^{-\lambda t}E\lbrack e^{\lambda(M_n - M_0)}\rbrack$ 이하로 누른 뒤 위와 같이 $\lambda$ 를 고른다.

## 상수

독립인 $\pm 1$ 부호 $n$ 개의 합 $S_n$ 은 $c_k = 1$ 인 유계 증분 martingale 이고, 부등식은 $P(S_n \ge x\sqrt n) \le e^{-x^2/2}$ 를 준다. [중심극한정리](central-limit-theorem.md)에 따라 이 확률은 $n \to \infty$ 에서 표준정규분포의 꼬리로 가고, 그 꼬리는 $x \to \infty$ 에서 $e^{-x^2/2}$ 에 $x$ 의 다항식 인수가 곱해진 꼴이다. 그래서 지수의 상수 $1/2$ 는 더 키울 수 없다.

## 분산을 쓰는 판

증분이 $\lvert D_k\rvert \le c$ 를 만족하고 조건부 분산의 누적합을 다음과 같이 둔다.

$$
W_k = \sum_{j=1}^k E\lbrack D_j^2 \mid \mathcal F_{j-1}\rbrack
$$

그러면 다음이 성립한다. 이것이 Freedman 부등식(Freedman's inequality)이다[^3].

$$
P\big(M_k - M_0 \ge t \text{ and } W_k \le \sigma^2 \text{ for some } k \le n\big) \le \exp\negthinspace\left(-\frac{t^2}{2(\sigma^2 + ct/3)}\right)
$$

증분이 대개 $0$ 이고 가끔만 $c$ 만큼 움직이면 $\sigma^2$ 이 $nc^2$ 보다 훨씬 작고, 이 판이 Azuma–Hoeffding 부등식보다 좁은 꼬리 상한을 준다.

# 활용

- 무작위 그래프의 채색수. [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md) $G(n, 1/2)$ 에서 정점 $i$ 와 그보다 앞선 정점 사이의 간선 묶음을 좌표 $X_i$ 로 둔다. 정점 하나에 붙은 간선을 어떻게 바꾸어도 그 정점에 새 색 하나를 주면 되므로 [그래프 색칠](graph-coloring.md)의 채색수는 $c_i = 1$ 로 유계 차분 조건을 만족한다. McDiarmid 부등식으로 채색수가 평균에서 $\lambda\sqrt n$ 이상 벗어날 확률이 $2e^{-2\lambda^2}$ 이하다[^4]. 채색수 자체는 $n/(2\log_2 n)$ 규모다.
- 일반화 오차. [Rademacher 복잡도](rademacher-complexity.md)의 일반화 상한은 경험 오차와 실제 오차의 차이의 최댓값이 표본 한 점을 바꿀 때 $1/n$ 이하로 변한다는 것에 McDiarmid 부등식을 쓴다.
- [확률적 방법](probabilistic-method.md). 무작위 구성에서 기댓값만으로 부족할 때, 구성을 한 조각씩 드러내는 노출 martingale 을 세워 원하는 양이 기댓값 근처에 있을 확률을 Azuma–Hoeffding 부등식으로 누른다.
- [Talagrand 볼록 거리 부등식](talagrand-convex-distance.md). 최장 증가 부분수열의 길이처럼 값을 확인하는 데 좌표 몇 개만 필요한 함수에서는 McDiarmid 부등식의 폭 $\sqrt n$ 이 실제 폭보다 크고, Talagrand 부등식이 더 좁은 폭을 준다.

[^1]: K. Azuma, "Weighted sums of certain dependent random variables", Tôhoku Mathematical Journal 19 (1967), 357–367. 독립 합의 경우는 W. Hoeffding, "Probability inequalities for sums of bounded random variables", Journal of the American Statistical Association 58 (1963), 13–30.
[^2]: C. McDiarmid, "On the method of bounded differences", Surveys in Combinatorics 1989, London Mathematical Society Lecture Note Series 141 (1989), 148–188.
[^3]: D. A. Freedman, "On tail probabilities for martingales", Annals of Probability 3 (1975), 100–118.
[^4]: E. Shamir, J. Spencer, "Sharp concentration of the chromatic number on random graphs", Combinatorica 7 (1987), 121–129.

# 연관 문서

## 선수지식

- [Martingale](martingales.md)
- [집중부등식](concentration-inequalities.md)

## 더 알아보기

- [Efron–Stein 부등식](efron-stein-inequality.md)

#probability #graph_theory #machine_learning
