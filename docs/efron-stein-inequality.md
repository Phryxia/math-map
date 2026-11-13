# Efron–Stein 부등식

# 개요

**Efron–Stein 부등식(Efron–Stein inequality)** 은 독립인 입력 여러 개로 정해지는 값의 분산을, 입력을 하나씩 다시 뽑았을 때 값이 바뀌는 정도의 합으로 위에서 누르는 부등식이다. 길이 $n$ 인 무작위 $0$-$1$ 열 두 개의 최장 공통 부분수열 길이는 분포를 계산할 수 없다. 글자 하나를 바꾸면 이 길이가 많아야 $1$ 바뀐다는 것만 쓰면, 이 부등식으로 분산이 $n$ 이하라는 것이 나온다.

# 직관

공정한 동전 세 개 $X_1, X_2, X_3$ 을 던져 앞면을 $1$, 뒷면을 $0$ 으로 적고, 하나라도 앞면이면 $1$ 인 값 $f = \max(X_1, X_2, X_3)$ 을 본다. $f = 1$ 일 확률이 $7/8$ 이므로 분산은 $7/8 \cdot 1/8 = 7/64$ 다.

동전을 하나씩 확인하면서 그때까지 본 것으로 $f$ 의 기댓값을 다시 계산한다. 처음 값은 $7/8$ 이다.

$X_1 = 1$ 이면 값이 $1$, $X_1 = 0$ 이면 $3/4$ 가 되어 바뀐 양의 제곱의 평균은 $1/64$ 다. $X_1 = 0$ 인 경우에 $X_2$ 를 보면 값이 $3/4$ 에서 $1$ 이나 $1/2$ 로 가므로 바뀐 양의 제곱의 평균은 $\frac12\cdot\frac1{16} = 2/64$ 다. $X_1 = X_2 = 0$ 인 경우에 $X_3$ 을 보면 값이 $1/2$ 에서 $1$ 이나 $0$ 으로 가므로 $\frac14\cdot\frac14 = 4/64$ 다.

세 값을 더하면 $1/64 + 2/64 + 4/64 = 7/64$ 로 분산과 같다. 단계마다 바뀐 양은 평균이 $0$ 이고 서로 상관이 없어서, 분산이 단계별 제곱의 평균의 합으로 쪼개진다.

단계별 양은 동전을 확인하는 순서에 따라 달라진다. 순서와 상관없는 양으로 바꾸려고 동전 $X_i$ 하나만 새로 던져 $f$ 가 바뀌는지를 본다. $f$ 가 바뀌려면 다른 두 동전이 모두 뒷면이고(확률 $1/4$) 새로 던진 결과가 원래와 달라야 하므로(확률 $1/2$), 바뀐 양의 제곱의 평균은 $1/8$ 이다. 그 절반 $1/16 = 4/64$ 가 단계별 양 $1/64, 2/64, 4/64$ 각각 이상이고, 세 동전에 대해 더한 $12/64$ 가 분산 $7/64$ 의 상한이 된다.

# 정의

## 한 좌표를 다시 뽑은 값

$X_1, \dots, X_n$ 이 독립이고 $X_1', \dots, X_n'$ 이 각각 $X_i$ 와 같은 분포를 갖는 독립 사본이라 하자. $i$ 번째 좌표만 사본으로 바꾼 입력을 다음과 같이 적는다.

$$
X^{(i)} = (X_1, \dots, X_{i-1}, X_i', X_{i+1}, \dots, X_n)
$$

직관 절에서 $f(X^{(1)})$ 는 첫 동전만 새로 던진 결과로 계산한 값이다.

## Efron–Stein 상한

제곱적분 가능한 함수 $f$ 에 대해 다음 값을 $f$ 의 **Efron–Stein 상한(Efron–Stein upper bound)** 이라 한다.

$$
\mathcal E(f) = \frac12 \sum_{i=1}^n E\big\lbrack (f(X) - f(X^{(i)}))^2 \big\rbrack
$$

직관 절의 $f = \max(X_1, X_2, X_3)$ 에서는 각 항이 $1/8$ 이므로 $\mathcal E(f) = \frac12\cdot 3\cdot\frac18 = 12/64$ 다.

# 성질

## Efron–Stein 부등식

$X_1, \dots, X_n$ 이 독립이고 $f(X)$ 가 제곱적분 가능하면 다음이 성립한다[^1][^2].

$$
\mathrm{Var}\thinspace f(X) \le \mathcal E(f)
$$

증명의 요지. [Azuma–Hoeffding 부등식](azuma-hoeffding-inequality.md)의 노출 martingale $Z_k = E\lbrack f \mid X_1, \dots, X_k\rbrack$ 의 증분 $D_k = Z_k - Z_{k-1}$ 은 서로 직교하므로 $\mathrm{Var}\thinspace f = \sum_k E\lbrack D_k^2\rbrack$ 다. $X_k$ 를 뺀 나머지 좌표만으로 조건을 준 $f$ 의 기댓값을 $E^{(k)} f$ 라 하면, 독립성 때문에 $D_k$ 는 $f - E^{(k)} f$ 를 $X_1, \dots, X_k$ 로 조건부 기댓값을 낸 것이다. 조건부 [Jensen 부등식](jensen-inequality.md)으로 $E\lbrack D_k^2\rbrack$ 는 $E\lbrack (f - E^{(k)} f)^2\rbrack$ 이하이고, 이 값이 $\frac12 E\lbrack (f(X) - f(X^{(k)}))^2\rbrack$ 와 같다.

## 독립인 합에서의 등호

$f = X_1 + \dots + X_n$ 이면 $f(X) - f(X^{(i)}) = X_i - X_i'$ 이고 그 제곱의 평균은 $2\thinspace\mathrm{Var}\thinspace X_i$ 다. 그래서 $\mathcal E(f) = \sum \mathrm{Var}\thinspace X_i = \mathrm{Var}\thinspace f$ 이고, 합에서는 부등식이 등호다.

## 유계 차분 조건에서의 분산

$f$ 가 상수 $c_i$ 로 유계 차분 조건을 만족하면 $\lvert f(X) - f(X^{(i)})\rvert \le c_i$ 이므로 다음이 나온다.

$$
\mathrm{Var}\thinspace f(X) \le \frac12 \sum_{i=1}^n c_i^2
$$

McDiarmid 부등식(McDiarmid's inequality)이 꼬리 확률을 $\sum c_i^2$ 로 누르는 것과 같은 크기로 분산을 누른다. Efron–Stein 상한은 값이 실제로 바뀌는 확률을 함께 세므로, 대부분의 좌표가 드물게만 값을 바꾸는 함수에서는 이 상한보다 훨씬 작다. 직관 절의 예에서 이 상한은 $3/2$ 이고 Efron–Stein 상한은 $12/64$ 다.

## 다른 꼴

$i$ 번째 좌표에 의존하지 않는 아무 제곱적분 가능한 함수 $f_i$ 에 대해서도 다음이 성립한다.

$$
\mathrm{Var}\thinspace f(X) \le \sum_{i=1}^n E\big\lbrack (f(X) - f_i(X))^2\big\rbrack
$$

$f_i = E^{(i)} f$ 일 때 우변이 가장 작고 $\mathcal E(f)$ 와 같다. $f_i$ 로 $i$ 번째 좌표를 지운 입력에서 계산한 값을 쓰면, 표본 하나를 빼고 다시 계산한 통계량과 원래 통계량의 차이로 분산을 누르는 꼴이 된다. $f(X) - f(X^{(i)})$ 와 $f(X^{(i)}) - f(X)$ 는 분포가 같으므로, $\mathcal E(f)$ 는 양의 부분의 제곱 $\sum_i E\lbrack (f(X) - f(X^{(i)}))\_+^2\rbrack$ 와도 같다.

Efron 과 Stein 은 대칭 통계량에 대해 이 꼴로 jackknife 분산 추정량이 평균적으로 분산을 과대 추정한다는 것을 보였다[^1].

## Poincaré 부등식과의 관계

$E^{(i)}$ 로 $i$ 번째 좌표에 대한 분산을 $\mathrm{Var}^{(i)} f = E^{(i)}\lbrack (f - E^{(i)} f)^2\rbrack$ 라 하면 부등식은 $\mathrm{Var}\thinspace f \le \sum_i E\lbrack \mathrm{Var}^{(i)} f\rbrack$ 다. 우변은 좌표마다의 변동을 더한 것이므로, 곱 공간에서 상수 $1$ 을 갖는 [Poincaré 부등식](poincare-inequality.md)으로 볼 수 있다. 좌표가 Gauss 분포이면 $\mathrm{Var}^{(i)} f$ 를 그 좌표의 Poincaré 부등식으로 누를 수 있고, $\mathrm{Var}\thinspace f \le E\lbrack \lvert\nabla f\rvert^2\rbrack$ 가 나온다.

# 활용

- 최장 공통 부분수열. 길이 $n$ 인 독립 무작위 문자열 두 개의 최장 공통 부분수열 길이는 $2n$ 개 글자의 함수이고, 글자 하나를 바꾸면 많아야 $1$ 바뀐다. 유계 차분 조건에서의 분산 상한으로 분산이 $n$ 이하다[^2]. [편집 거리](edit-distance.md)도 같은 논법으로 분산이 $O(n)$ 이다.
- [최장 증가 부분수열](longest-increasing-subsequence.md). 최장 증가 부분수열 하나를 고정하면 좌표 하나를 다시 뽑아 길이 $L$ 이 줄어드는 것은 그 수열에 든 $L$ 개 좌표에서뿐이고, 줄어드는 양은 $1$ 이하다. 양의 부분으로 쓴 Efron–Stein 상한에 넣으면 $\mathrm{Var}\thinspace L \le E\lbrack L\rbrack$ 이고, $E\lbrack L\rbrack$ 이 $2\sqrt n$ 규모이므로 분산은 $O(\sqrt n)$ 이다[^2].
- 부트스트랩과 jackknife. [부트스트랩](bootstrap.md)과 함께 쓰는 jackknife 분산 추정량이 과대 추정한다는 것이 다른 꼴의 부등식에서 나온다[^1].

[^1]: B. Efron, C. Stein, "The jackknife estimate of variance", Annals of Statistics 9 (1981), 586–596.
[^2]: J. M. Steele, "An Efron–Stein inequality for nonsymmetric statistics", Annals of Statistics 14 (1986), 753–758.

# 연관 문서

## 선수지식

- [Azuma–Hoeffding 부등식](azuma-hoeffding-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #combinatorics
