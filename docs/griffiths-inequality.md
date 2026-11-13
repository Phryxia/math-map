# Griffiths 부등식

# 개요

**Griffiths 부등식(Griffiths inequality)** 은 이웃한 자석이 같은 쪽을 가리키기 쉽게 만든 모형에서, 자석 몇 개의 부호를 곱한 값의 기댓값이 음수가 되지 않고 이웃을 묶는 힘을 키우면 그 기댓값이 줄지 않는다는 부등식이다. 자석 세 개를 한 줄로 놓고 가운데와 오른쪽을 묶는 힘만 키우면 양 끝 자석이 같은 쪽을 가리킬 확률이 커지는지가 이런 물음이다. 줄 위에서는 직접 계산할 수 있지만 순환이 있는 격자에서는 계산이 되지 않는다. Griffiths 부등식은 힘에 대한 기댓값의 도함수가 두 부호 곱의 공분산이고 그 공분산이 음이 아니라는 것으로 이 물음에 답한다.

# 직관

자석 세 개 $\sigma_1, \sigma_2, \sigma_3$ 이 각각 $+1$ 이나 $-1$ 을 가리킨다. 1 과 2 를 묶는 힘을 $a \ge 0$, 2 와 3 을 묶는 힘을 $b \ge 0$ 으로 두고, 배정 $\sigma$ 의 확률을 $\exp(a\sigma_1\sigma_2 + b\sigma_2\sigma_3)$ 에 비례하게 정한다. 이것은 경로 위의 [Ising 모형](ising-model.md)이다.

$\tau_1 = \sigma_1\sigma_2$ 와 $\tau_2 = \sigma_2\sigma_3$ 으로 바꾸어 쓰면 $\sigma_1$, $\tau_1$, $\tau_2$ 가 서로 독립이고, $\tau_1$ 의 기댓값은 $\tanh a$, $\tau_2$ 의 기댓값은 $\tanh b$ 다. $\sigma_1\sigma_3 = \tau_1\tau_2$ 이므로 양 끝의 부호 곱의 기댓값은 다음과 같다.

$$
\langle\sigma_1\sigma_3\rangle = \tanh a\thinspace\tanh b
$$

이 값은 $0$ 이상이고 $a$ 와 $b$ 에 대해 각각 증가한다. $b$ 로 미분한 값은 다음과 같이 두 부호 곱 $\sigma_1\sigma_3$ 과 $\sigma_2\sigma_3$ 의 공분산이다.

$$
\tanh a\thinspace(1 - \tanh^2 b) = \langle\sigma_1\sigma_3\cdot\sigma_2\sigma_3\rangle - \langle\sigma_1\sigma_3\rangle\langle\sigma_2\sigma_3\rangle
$$

순환이 있는 그래프에서는 이런 독립 변수로 바꿀 수 없지만, 도함수가 부호 곱 둘의 공분산이라는 것은 그대로 남는다. Griffiths 부등식은 그 공분산이 음이 아니라는 정리다.

# 정의

## 강자성 Ising 측도

유한 집합 $V$ 의 정점마다 스핀 $\sigma_i \in \lbrace -1, +1\rbrace$ 을 두고, 부분집합 $A \subseteq V$ 에 대해 $\sigma_A = \prod_{i \in A}\sigma_i$ 로 적는다. 부분집합마다 $J_A \ge 0$ 을 주고 다음 확률을 주는 측도를 **강자성 Ising 측도(ferromagnetic Ising measure)** 라 한다.

$$
\mu(\sigma) = \frac{1}{Z}\exp\Big(\sum_{A \subseteq V}J_A\sigma_A\Big)
$$

$Z$ 는 확률의 합을 $1$ 로 만드는 상수이고 $\langle f\rangle$ 은 $\mu$ 에 대한 $f$ 의 기댓값이다. 직관 절의 모형은 $V = \lbrace 1, 2, 3\rbrace$ 에서 $J_{\lbrace 1,2\rbrace} = a$, $J_{\lbrace 2,3\rbrace} = b$ 이고 나머지가 $0$ 이다. 두 원소 집합의 $J$ 가 변의 결합 세기이고, 한 원소 집합의 $J$ 는 외부 자기장이다.

# 성질

## 첫째 Griffiths 부등식

강자성 Ising 측도에서 모든 $A$ 에 대해 $\langle\sigma_A\rangle \ge 0$ 이다[^1].

증명의 요지. $Z\langle\sigma_A\rangle = \sum_\sigma\sigma_A\exp(\sum_B J_B\sigma_B)$ 에서 지수함수를 거듭제곱 급수로 펼치면 $\sigma$ 의 단항식들을 계수 $0$ 이상으로 더한 것이 된다. $\sigma_i^2 = 1$ 이므로 단항식 하나를 모든 $\sigma$ 에 대해 더하면, 모든 $\sigma_i$ 의 지수가 짝수일 때 $2^{\lvert V\rvert}$ 이고 아니면 $0$ 이다. 그래서 합이 $0$ 이상이다.

## 둘째 Griffiths 부등식

강자성 Ising 측도에서 모든 $A, B$ 에 대해 다음이 성립한다[^2][^3].

$$
\langle\sigma_A\sigma_B\rangle \ge \langle\sigma_A\rangle\thinspace\langle\sigma_B\rangle
$$

증명의 요지. 서로 독립인 두 복사본 $\sigma, \tau$ 를 두면 좌변에서 우변을 뺀 값에 $Z^2$ 을 곱한 것은 다음과 같다.

$$
\frac{1}{2}\sum_{\sigma, \tau}(\sigma_A - \tau_A)(\sigma_B - \tau_B)\exp\Big(\sum_C J_C(\sigma_C + \tau_C)\Big)
$$

$t_i = \sigma_i\tau_i$ 로 두면 $\tau_C = \sigma_C t_C$ 이므로 $\sigma_C + \tau_C = \sigma_C(1 + t_C)$, $\sigma_A - \tau_A = \sigma_A(1 - t_A)$ 이다. $t$ 를 고정하면 $1 \pm t_C$ 가 $0$ 이상이므로 피가수는 $\sigma$ 의 단항식들을 계수 $0$ 이상으로 더한 것이고, 첫째 부등식의 증명처럼 $\sigma$ 에 대한 합이 $0$ 이상이다.

## 결합 세기에 대한 단조성

$\langle\sigma_A\rangle$ 을 $J_B$ 로 미분하면 $\langle\sigma_A\sigma_B\rangle - \langle\sigma_A\rangle\langle\sigma_B\rangle$ 이고, 둘째 부등식으로 $0$ 이상이다. 그래서 강자성 Ising 측도에서 부호 곱의 기댓값은 모든 결합 세기와 외부 자기장에 대해 증가한다. 직관 절의 $\tanh a\tanh b$ 가 $a$ 와 $b$ 에 대해 증가하는 것이 이 경우다.

## FKG 부등식과의 관계

$A, B$ 가 한 원소 집합이면 $\sigma_A$ 와 $\sigma_B$ 는 증가 함수이므로 둘째 부등식은 [FKG 부등식](fkg-inequality.md)(Fortuin–Kasteleyn–Ginibre inequality)의 특수한 경우다. $\sigma_{\lbrace 1,2\rbrace} = \sigma_1\sigma_2$ 는 $\sigma_1$ 이 $-1$ 에서 $+1$ 로 바뀔 때 $\sigma_2 = -1$ 이면 줄어드므로 증가 함수가 아니고, 이런 부호 곱에는 FKG 부등식을 쓸 수 없다. 반대로 셋 이상의 원소를 묶는 $J_A$ 가 있는 측도는 격자 조건을 만족하지 않을 수 있어 FKG 부등식을 쓸 수 없지만, Griffiths 부등식은 성립한다.

# 활용

- [Ising 모형](ising-model.md)의 자발 자화. 바깥 스핀을 $+1$ 로 고정한 상자는 경계 스핀과의 결합을 외부 자기장으로 본 강자성 Ising 측도이므로, 원점 스핀의 기댓값이 $\beta$ 에 대해 증가한다. 극한 $m^\ast(\beta)$ 도 증가하므로 $\beta_c$ 보다 큰 모든 $\beta$ 에서 $m^\ast(\beta) \gt 0$ 이다.
- 무한 부피 극한. 자유 경계의 상자를 키우는 것은 새 변의 결합 세기를 $0$ 에서 $\beta$ 로 올리는 것이므로, 부호 곱의 기댓값이 상자에 대해 증가하고 극한이 존재한다.

[^1]: R. B. Griffiths, "Correlations in Ising ferromagnets. I", Journal of Mathematical Physics 8 (1967), 478–483.
[^2]: D. G. Kelly, S. Sherman, "General Griffiths' inequalities on correlations in Ising ferromagnets", Journal of Mathematical Physics 9 (1968), 466–484.
[^3]: J. Ginibre, "General formulation of Griffiths' inequalities", Communications in Mathematical Physics 16 (1970), 310–328.

# 연관 문서

## 선수지식

- [Ising 모형](ising-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics
