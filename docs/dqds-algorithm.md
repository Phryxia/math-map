# dqds 알고리즘

# 개요

**dqds 알고리즘(differential quotient-difference algorithm with shifts)** 은 이중대각행렬의 특이값을, 성분의 제곱만으로 된 두 수열을 덧셈·곱셈·나눗셈으로 고쳐 가며 구하는 반복법이다. 성분이 $1,1$ 인 대각과 $1$ 인 위 대각으로 된 $2\times 2$ 이중대각행렬의 특이값은 황금비 $1.618$ 과 그 역수 $0.618$ 이다. 특이값이 $10^{-10}$ 처럼 작은 행렬에서 $B^{\mathsf T}B$ 를 만들어 고윳값을 구하면 그 작은 특이값의 자릿수가 사라진다.

dqds 는 $B^{\mathsf T}B$ 를 만들지 않고 뺄셈이 없는 점화식으로 성분을 고치므로, 작은 특이값도 상대 오차가 기계 정밀도 규모로 나온다.

# 직관

[Golub–Kahan 이중대각화](golub-kahan-bidiagonalization.md)로 얻은 이중대각행렬 $B$ 를 다음과 같이 둔다.

$$
B=\begin{pmatrix}1&1\cr 0&1\end{pmatrix},\qquad BB^{\mathsf T}=\begin{pmatrix}2&1\cr 1&1\end{pmatrix}
$$

$BB^{\mathsf T}$ 와 $B^{\mathsf T}B$ 는 고윳값이 같다. $BB^{\mathsf T}$ 를 다시 상삼각 이중대각행렬 $\hat B$ 로 $\hat B^{\mathsf T}\hat B$ 꼴로 분해하면 $\hat B$ 의 대각은 $\sqrt2,\sqrt{1/2}$ 이고 위 대각은 $\sqrt{1/2}$ 이다. $\hat B$ 도 특이값이 $B$ 와 같다.

같은 일을 되풀이하며 대각 성분의 제곱 $q\_1,q\_2$ 와 위 대각 성분의 제곱 $e\_1$ 을 적으면 다음과 같다.

| 반복 | q₁ | e₁ | q₂ |
| --- | --- | --- | --- |
| 0 | 1 | 1 | 1 |
| 1 | 2 | 0.5 | 0.5 |
| 2 | 2.5 | 0.1 | 0.4 |
| 3 | 2.6 | 0.0154 | 0.3846 |
| 4 | 2.6154 | 0.0023 | 0.3824 |

$e\_1$ 은 반복마다 약 $0.146$ 배로 줄고, $q\_1$ 과 $q\_2$ 는 $B^{\mathsf T}B$ 의 고윳값 $(3\pm\sqrt5)/2\approx 2.618,\thinspace 0.382$ 로 간다. 이 값의 제곱근이 특이값 $1.618$ 과 $0.618$ 이다. 매 줄에서 $q\_1+e\_1+q\_2=3$ 은 대각합이고 $q\_1q\_2=1$ 은 행렬식의 제곱이다.

# 정의

위 대각 이중대각행렬 $B$ 의 대각 성분을 $d\_1,\dots,d\_n$, 위 대각 성분을 $f\_1,\dots,f\_{n-1}$ 로 두고 $q\_i=d\_i^2$, $e\_i=f\_i^2$ 라 한다. 이동량 $s$ 에 대해 다음 점화식으로 $\hat q$, $\hat e$ 를 만드는 것이 **dqds 단계(dqds step)** 다.

```javascript
// q: 길이 n, e: 길이 n-1, s: 이동량
function dqdsStep(q, e, s) {
  const n = q.length;
  const qh = new Array(n);
  const eh = new Array(n - 1);
  let d = q[0] - s;
  for (let i = 0; i < n - 1; i++) {
    qh[i] = d + e[i];
    const t = q[i + 1] / qh[i];
    eh[i] = e[i] * t;
    d = d * t - s;
  }
  qh[n - 1] = d;
  return { qh, eh };
}
```

$s=0$ 인 단계를 dqd 단계라 한다. 직관 절의 표는 dqd 단계를 되풀이한 것이다. 첫 단계에서 $d=1$, $\hat q\_1=1+1=2$, $t=1/2$, $\hat e\_1=1/2$, $\hat q\_2=1/2$ 이다.

# 성질

## 한 단계가 하는 일

$\hat q$, $\hat e$ 를 제곱으로 갖는 이중대각행렬 $\hat B$ 는 다음을 만족한다[^1].

$$
\hat B^{\mathsf T}\hat B=BB^{\mathsf T}-sI
$$

$\hat B$ 는 $BB^{\mathsf T}-sI$ 의 [Cholesky 분해](matrix-factorizations.md)에서 나오는 이중대각 인수이고, 그래서 $\hat B$ 의 특이값의 제곱은 $B$ 의 특이값의 제곱에서 $s$ 를 뺀 값이다. $B^{\mathsf T}B$ 에서 보면 한 단계는 삼각 분해의 두 인수를 바꿔 곱하는 [LR 알고리즘](lr-algorithm.md)의 한 걸음이고, [QR 알고리즘](qr-algorithm.md)과 같은 꼴의 반복이다.

$s$ 가 가장 작은 특이값의 제곱보다 작으면 $BB^{\mathsf T}-sI$ 가 양의 정부호이므로 모든 $d$ 와 $\hat q$ 가 양수로 남는다.

## 뺄셈이 없는 계산

$s=0$ 이면 점화식에 양수끼리의 덧셈, 곱셈, 나눗셈만 있다. 각 연산의 상대 오차가 기계 정밀도 $\varepsilon$ 이하이므로 $\hat q$, $\hat e$ 의 각 값은 정확한 값의 $1+O(n\varepsilon)$ 배 안에 있다. 이중대각행렬의 특이값은 성분의 상대 섭동에 대해 상대적으로 조금만 움직이므로, 작은 특이값도 높은 상대 정확도로 계산된다[^1]. 뺄셈은 이동량 $s$ 에서만 들어오고, Fernando 와 Parlett 는 그 경우에도 같은 정확도를 보였다.

## 수렴

이동이 없으면 $e\_{n-1}$ 은 반복마다 $\sigma\_n^2/\sigma\_{n-1}^2$ 배로 준다. 직관 절의 $0.146$ 은 $0.382/2.618$ 이다. $s$ 를 $\sigma\_n^2$ 에 가깝게 고르면 비율이 $(\sigma\_n^2-s)/(\sigma\_{n-1}^2-s)$ 가 되어 $e\_{n-1}$ 이 빠르게 $0$ 으로 간다. $e\_{n-1}$ 이 충분히 작아지면 $q\_n$ 에 그때까지 뺀 이동량의 합을 더한 것이 $\sigma\_n^2$ 이고, 크기가 하나 줄어든 문제로 넘어간다[^2].

## qd 알고리즘

Rutishauser 의 [qd 알고리즘](qd-algorithm.md)은 같은 $q$, $e$ 를 $\hat q\_i=q\_i+e\_i-\hat e\_{i-1}$ 처럼 뺄셈이 든 점화식으로 고친다[^3]. dqds 의 "differential" 은 이 뺄셈을 보조 변수 $d$ 로 옮겨 없앤 판본이라는 뜻이다. qd 알고리즘은 [연분수](continued-fractions.md) 전개의 계수 사이의 관계에서 나왔다.

# 활용

- 특이값만 필요한 특이값 분해. Householder 이중대각화 뒤 특이값만 구할 때 수치 선형대수 라이브러리는 dqds 를 쓴다. 특이벡터까지 구할 때는 이중대각 판본의 이동 QR 반복을 쓴다[^2].
- 대칭 삼중대각 고윳값. 양의 정부호 삼중대각행렬은 Cholesky 분해로 $B^{\mathsf T}B$ 꼴이 되므로 같은 반복으로 고윳값을 높은 상대 정확도로 구한다.
- [MRRR 알고리즘](mrrr-algorithm.md)(multiple relatively robust representations)의 고유벡터 계산. 삼중대각행렬을 $LDL^{\mathsf T}$ 로 나타내고 이동할 때 dqds 와 같은 꼴의 뺄셈 없는 변환을 쓴다.

[^1]: K. V. Fernando, B. N. Parlett, "Accurate singular values and differential qd algorithms", *Numerische Mathematik* 67 (1994), 191–229.
[^2]: B. N. Parlett, O. A. Marques, "An implementation of the dqds algorithm (positive case)", *Linear Algebra and its Applications* 309 (2000), 217–259.
[^3]: H. Rutishauser, "Der Quotienten-Differenzen-Algorithmus", *Zeitschrift für angewandte Mathematik und Physik* 5 (1954), 233–251.

# 연관 문서

## 선수지식

- [Golub–Kahan 이중대각화](golub-kahan-bidiagonalization.md)

## 더 알아보기

- [MRRR 알고리즘](mrrr-algorithm.md)

#linear_algebra #algorithms #computation
