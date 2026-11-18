# Kahan 합산

# 개요

**Kahan 합산(Kahan summation)** 은 수를 차례로 더할 때 덧셈마다 반올림으로 잃은 양을 따로 적어 두었다가 다음 덧셈에 보태는 합산 방법이다. 유효숫자 세 자리로 $1.00$ 에 $0.004$ 를 열 번 더하면 덧셈마다 $1.004$ 가 $1.00$ 으로 반올림되어 답이 $1.00$ 이고, 참값 $1.04$ 와 다르다. Kahan 합산은 잃은 $0.004$ 를 모아 두었다가 다음 덧셈에 함께 더해 $1.04$ 를 얻는다.

# 직관

[후방 오차 분석](backward-error-analysis.md)의 유효숫자 세 자리 십진 계산으로 $1.00$ 다음에 $0.004$ 를 열 번 더한다. 앞에서부터 더하면 첫 덧셈의 $1.004$ 가 $1.00$ 이 되고, 그 뒤의 덧셈도 모두 같다. 답은 $1.00$ 이고 참값 $1.04$ 와 $0.04$ 차이가 난다.

덧셈 하나에서 잃은 양은 계산할 수 있다. 합이 $1.00$ 에서 $1.00$ 으로 바뀌었으므로 실제로 더해진 양은 $1.00-1.00=0$ 이다. 더하려던 $0.004$ 에서 이것을 빼면 잃은 양 $0.004$ 가 나온다. 두 뺄셈은 반올림 없이 정확하다.

잃은 양을 버리지 않고 다음 덧셈에서 더할 수에 보탠다. 둘째 덧셈은 $0.004+0.004=0.008$ 을 더해 $1.008$ 이 $1.01$ 로 반올림된다. 합이 $0.01$ 늘었으니 더하려던 $0.008$ 보다 $0.002$ 를 더 더했고, 셋째 덧셈은 $0.004$ 에서 이 $0.002$ 를 뺀 $0.002$ 를 더한다. 이렇게 이어 가면 열 번째 덧셈 뒤의 합이 $1.04$ 이다.

아래 표의 $y$ 는 그 단계에 실제로 더하려는 양, $s$ 는 반올림한 합, $c$ 는 그 덧셈에서 더 더한 양이다. $c$ 가 음수이면 그만큼 덜 더했다는 뜻이다. 모든 단계에서 $s-c$ 가 참값과 같다.

| 단계 | y     | s    | c      |
| ---- | ----- | ---- | ------ |
| 1    | 0.004 | 1.00 | −0.004 |
| 2    | 0.008 | 1.01 | 0.002  |
| 3    | 0.002 | 1.01 | −0.002 |
| 4    | 0.006 | 1.02 | 0.004  |
| 5    | 0     | 1.02 | 0      |
| 6    | 0.004 | 1.02 | −0.004 |
| 7    | 0.008 | 1.03 | 0.002  |
| 8    | 0.002 | 1.03 | −0.002 |
| 9    | 0.006 | 1.04 | 0.004  |
| 10   | 0     | 1.04 | 0      |

# 정의

**Kahan 합산** 은 수 $x_1,\dots,x_n$ 의 합을 다음 절차로 구하는 알고리즘이다[^1]. 모든 연산은 부동소수점 수(floating-point number)의 연산이고 결과를 반올림한다.

```typescript
function kahanSum(xs: number[]): number {
  let s = 0; // 지금까지의 합
  let c = 0; // 직전 덧셈에서 더 더한 양
  for (const x of xs) {
    const y = x - c; // 더 더한 양을 빼서 더할 양을 고친다
    const t = s + y; // 반올림한 합
    c = (t - s) - y; // 실제로 더해진 양에서 더하려던 양을 뺀다
    s = t;
  }
  return s;
}
```

$c$ 를 **보정항(compensation)** 이라 한다. 직관 절의 표가 이 절차를 $1.00$ 다음의 열 단계에 적용한 것이다. 첫 입력 $1.00$ 에서는 $y=t=1.00$ 이고 $c=0$ 이다.

# 성질

## 덧셈 한 번의 정확한 오차

진법이 $2$ 이고 가장 가까운 수로 반올림하는 부동소수점 연산에서 $\vert a\vert\ge\vert b\vert$ 이고 $t=\mathrm{fl}(a+b)$ 이면, $(t-a)-b$ 의 계산에 반올림이 일어나지 않고 그 값은 정확히 $t-(a+b)$ 다(Dekker 의 Fast2Sum)[^2]. 따라서 Kahan 합산에서 $\vert s\vert\ge\vert y\vert$ 인 동안 $c$ 는 그 덧셈의 반올림 오차와 정확히 같다.

$a+b=t-c$ 이므로 두 부동소수점 수의 합은 부동소수점 수 둘의 합으로 정확히 표현된다. 직관 절의 표에서 $s-c$ 가 참값과 같은 것이 이 성질이다.

## 후방 오차의 상수

단위 반올림을 $u$ 라 하면 Kahan 합산의 계산값 $\hat s$ 는 다음 꼴이다[^1].

$$
\hat s=\sum_{i=1}^n x_i(1+\mu_i),\qquad \vert\mu_i\vert\le 2u+O(nu^2)
$$

앞에서부터 차례로 더하는 합은 $\vert\theta_i\vert\le\gamma_{n-1}\approx(n-1)u$ 였다. Kahan 합산은 후방 오차의 일차 항이 $n$ 에 의존하지 않는다. 합의 조건수를 $\kappa$ 라 하면 상대오차는 다음으로 묶인다.

$$
\frac{\vert\hat s-s\vert}{\vert s\vert}\le\bigl(2u+O(nu^2)\bigr)\thinspace\kappa
$$

$nu$ 가 $1$ 보다 훨씬 작으면 상대오차는 입력의 개수와 거의 무관하다. 조건수가 큰 합, 곧 큰 수가 서로 지워지는 합에서는 이 상한도 커진다.

## 큰 수가 나중에 오는 경우와 Neumaier 변형

$\vert y\vert\gt\vert s\vert$ 이면 Fast2Sum 의 조건이 깨져 $c$ 가 오차를 잃을 수 있다. 유효숫자 세 자리에서 $1.00,\ 10^5,\ 1.00,\ -10^5$ 을 Kahan 합산으로 더하면 둘째 덧셈의 $t-s=\mathrm{fl}(10^5-1)=10^5$ 이 반올림되어 $c=0$ 이 되고, 최종 합은 $0$ 이다. 참값은 $2$ 다.

Neumaier 변형(Neumaier's improved Kahan–Babuška summation)은 덧셈마다 $s$ 와 $x$ 가운데 절댓값이 큰 쪽을 Fast2Sum 의 $a$ 로 써서 오차를 구하고, 오차들을 따로 더해 마지막에 합에 더한다[^3]. 위 네 수에서 오차의 합이 $2$ 가 되어 답 $2$ 가 나온다.

```typescript
function neumaierSum(xs: number[]): number {
  let s = 0;
  let e = 0; // 잃은 양의 합
  for (const x of xs) {
    const t = s + x;
    e += Math.abs(s) >= Math.abs(x) ? (s - t) + x : (x - t) + s;
    s = t;
  }
  return s + e;
}
```

# 활용

- 긴 누적합. 시간 간격 $h$ 를 수만 번 더해 시각을 구하는 [상미분방정식](ordinary-differential-equations.md)의 시간 진행, 표본 평균을 내는 Monte Carlo 적분처럼 같은 크기의 작은 수를 큰 합에 거듭 더하는 계산에서 오차가 덧셈 횟수에 비례해 쌓이지 않는다.
- 내적과 잔차. 내적의 곱 $x_iy_i$ 를 Kahan 합산으로 더하면 선형계의 잔차 $b-A\hat x$ 처럼 큰 항이 지워지는 계산의 정확도가 오른다. 곱의 반올림 오차까지 따로 구해 더하는 보정 내적(compensated dot product)도 같은 방법이다[^4].
- 쌍별 합산(pairwise summation)과의 선택. 입력을 반으로 나눠 따로 더한 뒤 합치는 쌍별 합산은 후방 오차가 $\gamma_{\lceil\log_2 n\rceil}$ 규모이고 덧셈 횟수가 그대로다. Kahan 합산은 덧셈 하나에 연산 넷을 쓰는 대신 상수가 $n$ 에 무관하다.

[^1]: N. J. Higham, *Accuracy and Stability of Numerical Algorithms*, 2nd ed., SIAM, 2002, Section 4.3. 알고리즘의 원래 출처는 W. Kahan, "Further remarks on reducing truncation errors", *Comm. ACM* 8 (1965), 40.
[^2]: T. J. Dekker, "A floating-point technique for extending the available precision", *Numer. Math.* 18 (1971), 224–242.
[^3]: A. Neumaier, "Rundungsfehleranalyse einiger Verfahren zur Summation endlicher Summen", *Z. Angew. Math. Mech.* 54 (1974), 39–51.
[^4]: T. Ogita, S. M. Rump, S. Oishi, "Accurate sum and dot product", *SIAM J. Sci. Comput.* 26 (2005), 1955–1988.

# 연관 문서

## 선수지식

- [후방 오차 분석](backward-error-analysis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #computation #algorithms
