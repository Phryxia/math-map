# 음 아닌 행렬 분해

# 개요

**음 아닌 행렬 분해(nonnegative matrix factorization, NMF)** 는 성분이 $0$ 이상인 행렬을 성분이 $0$ 이상인 두 행렬의 곱으로 쓰거나 근사하는 문제다. 문서마다 단어가 몇 번 나왔는지 센 표가 있으면, 각 문서가 "운동 경기 이야기" 와 "선거 이야기" 를 얼마씩 섞었는지 알고 싶다. [특이값 분해](singular-value-decomposition.md)로 표를 쪼개면 음수가 섞인 성분이 나와 "어느 이야기를 얼마나" 로 읽을 수 없다.

음 아닌 행렬 분해는 두 인수 모두 음수를 금지한다. 그러면 표가 음 아닌 부분들을 더한 것으로만 쓰이고, 각 부분이 단어 묶음 하나가 된다.

# 직관

문서 셋과 단어 넷(공, 골, 표, 선거)의 횟수를 행렬 $X$ 로 적는다. 행이 문서, 열이 단어다.

$$
X=\begin{pmatrix}2&2&0&0\cr 0&0&2&2\cr 1&1&1&1\end{pmatrix}
$$

첫 문서는 경기 기사, 둘째는 선거 기사, 셋째는 둘을 반씩 섞은 기사다. 셋째 행이 앞 두 행의 평균이므로 $X$ 의 계수는 $2$ 다.

특이값 분해로 계수 $2$ 를 꺼낸다. $X^{\mathsf T}X$ 의 고윳값은 $12$ 와 $8$ 이고, 고유벡터는 다음 두 행이다.

$$
\tfrac12(1,1,1,1),\qquad \tfrac12(1,1,-1,-1)
$$

첫째는 "모든 단어가 고루 많음", 둘째는 "경기 단어에서 선거 단어를 뺀 것" 이다. 둘째 벡터에 음수가 있어서 이것을 단어 묶음으로 읽을 수 없다.

음수를 금지하고 $X=WH$ 로 쓴다.

$$
W=\begin{pmatrix}2&0\cr 0&2\cr 1&1\end{pmatrix},\qquad H=\begin{pmatrix}1&1&0&0\cr 0&0&1&1\end{pmatrix}
$$

$H$ 의 첫 행은 {공, 골}, 둘째 행은 {표, 선거} 다. $W$ 의 행은 문서마다 두 묶음을 얼마씩 더했는지다. 셋째 문서는 두 묶음을 $1$ 씩 더한 것으로 읽힌다.

# 정의

## 음 아닌 분해

$m\times n$ 행렬 $X$ 의 성분이 모두 $0$ 이상일 때, 계수 $r$ 의 음 아닌 행렬 분해는 다음을 최소로 하는 $W\in\mathbb R\_{\ge 0}^{m\times r}$, $H\in\mathbb R\_{\ge 0}^{r\times n}$ 를 찾는 문제다.

$$
\Vert X-WH\Vert\_F^2=\sum_{i,j}\bigl(X_{ij}-(WH)\_{ij}\bigr)^2
$$

$\Vert\cdot\Vert\_F$ 는 성분 제곱합의 제곱근인 Frobenius 노름(Frobenius norm)이다. 직관 절의 $W,H$ 는 $r=2$ 에서 오차가 $0$ 인 해다.

## 음 아닌 계수

$X=WH$ 가 정확히 성립하는 음 아닌 $W,H$ 가 존재하는 최소의 $r$ 을 $X$ 의 **음 아닌 계수(nonnegative rank)** $\mathrm{rank}\_+(X)$ 라 한다. 직관 절의 $X$ 는 $\mathrm{rank}\_+(X)=2$ 다.

# 성질

## 계수와 음 아닌 계수

$\mathrm{rank}(X)\le\mathrm{rank}\_+(X)\le\min(m,n)$ 이다. 왼쪽은 음 아닌 분해가 보통의 분해이기 때문이고, 오른쪽은 $X=XI$ 또는 $X=IX$ 이기 때문이다.

왼쪽 부등호는 등호가 아닐 수 있다. [확장 복잡도](extension-complexity.md)에서 다룬 마름모의 슬랙 행렬은 계수가 $3$, 음 아닌 계수가 $4$ 다.

계수 $2$ 이하에서는 두 값이 같다. 음 아닌 열들이 $\mathbb R^m$ 의 $2$ 차원 부분공간에 있으면, 그 열들이 만드는 원뿔은 두 반직선 사이의 각이므로 양 끝의 두 열이 나머지를 음 아닌 계수로 만든다.

## 유일하지 않음

양의 대각행렬 $D$ 와 순열행렬 $P$ 에 대해 $WH=(WDP)(P^{\mathsf T}D^{-1}H)$ 이고 두 인수가 여전히 음이 아니다. 묶음의 크기와 순서는 정해지지 않는다.

이 밖의 변환으로도 음 아닌 해가 바뀔 수 있다. 직관 절의 예는 각 묶음에만 나오는 단어(공은 첫 묶음에만, 표는 둘째 묶음에만)가 있어서 크기와 순서를 빼면 해가 하나다.

## 곱셈 갱신

D. D. Lee 와 H. S. Seung 은 다음 갱신을 되풀이하면 $\Vert X-WH\Vert\_F^2$ 가 늘지 않음을 보였다[^1]. 곱셈과 나눗셈은 성분마다 한다.

$$
H\leftarrow H\circ\frac{W^{\mathsf T}X}{W^{\mathsf T}WH},\qquad W\leftarrow W\circ\frac{XH^{\mathsf T}}{WHH^{\mathsf T}}
$$

음 아닌 수에 음 아닌 수의 비를 곱하므로 음수가 생기지 않는다. 증명은 현재 $H$ 에서 목적함수와 접하고 그 위에 있는 이차함수를 세워 그 최솟값으로 옮기는 것이다. 이 이차함수의 최소점이 위의 곱셈 갱신이다.

```javascript
// X: m×n, 성분 0 이상. r: 묶음 수. EPS: 0 으로 나누지 않게 더하는 작은 양수
function nmf(X, r, steps) {
  let W = randomNonnegative(X.rows, r);
  let H = randomNonnegative(r, X.cols);
  for (let t = 0; t < steps; t++) {
    const WtX = mul(transpose(W), X);
    const WtWH = mul(mul(transpose(W), W), H);
    H = H.map((h, i, j) => h * WtX[i][j] / (WtWH[i][j] + EPS));
    const XHt = mul(X, transpose(H));
    const WHHt = mul(W, mul(H, transpose(H)));
    W = W.map((w, i, j) => w * XHt[i][j] / (WHHt[i][j] + EPS));
  }
  return { W, H };
}
```

갱신이 수렴하는 점은 국소 최솟값이거나 정류점이고, 전역 최솟값이라는 보장은 없다.

## 계산 복잡도

S. A. Vavasis 는 $\mathrm{rank}\_+(X)=\mathrm{rank}(X)$ 인지 판정하는 문제가 [NP-완전성](np-completeness.md)(NP: nondeterministic polynomial time)의 뜻에서 NP-어려움(NP-hard)임을 보였다[^2]. 정확한 음 아닌 분해를 늘 빨리 찾는 알고리즘은 P 와 NP 가 같지 않으면 없다.

S. Arora, R. Ge, R. Kannan, A. Moitra 는 두 경우에 다항시간 알고리즘을 주었다[^3]. 하나는 $r$ 이 상수인 경우다. 다른 하나는 **분리 가능(separable)** 한 경우로, $H$ 의 각 행에 그 행에서만 $0$ 이 아닌 열이 있는 것이다. 직관 절의 공과 표가 그런 열이고, 이런 단어를 기준 단어(anchor word)라 한다.

분리 가능하면 $W$ 의 각 열이 $X$ 의 어떤 열의 양수배다. 그러므로 $X$ 의 열들이 만드는 원뿔의 모서리에 놓인 열을 찾으면 $W$ 가 나오고, 이것은 [선형계획법](linear-programming.md)으로 열마다 판정된다.

# 활용

- 주제 모형(topic model). 문서와 단어의 횟수 표를 분해해 $H$ 의 행을 주제, $W$ 의 행을 문서별 주제 비율로 쓴다. 기준 단어 가정 아래의 [기준 단어 알고리즘](anchor-word-algorithm.md)이 위의 분리 가능한 경우다.
- 영상의 부분. Lee 와 Seung 은 얼굴 사진들을 분해하면 $H$ 의 행이 눈, 코, 입 같은 국소 부분이 됨을 보였다[^4]. [주성분 분석](principal-component-analysis.md)의 성분은 얼굴 전체에 걸친 음양의 무늬다.
- 소리의 분리. 시간마다 주파수별 세기를 적은 표를 분해해 $H$ 의 행을 악기나 음 하나의 주파수 모양, $W$ 의 열을 그 소리가 켜지는 시각으로 쓴다.
- 확장 복잡도. 다면체의 슬랙 행렬의 음 아닌 계수가 그 다면체를 적는 선형계획의 최소 부등식 수다(Yannakakis 정리).

[^1]: D. D. Lee, H. S. Seung, "Algorithms for non-negative matrix factorization", Advances in Neural Information Processing Systems 13 (2001), 556–562.
[^2]: S. A. Vavasis, "On the complexity of nonnegative matrix factorization", SIAM Journal on Optimization 20 (2009), 1364–1377.
[^3]: S. Arora, R. Ge, R. Kannan, A. Moitra, "Computing a nonnegative matrix factorization — provably", SIAM Journal on Computing 45 (2016), 1582–1611.
[^4]: D. D. Lee, H. S. Seung, "Learning the parts of objects by non-negative matrix factorization", Nature 401 (1999), 788–791.

# 연관 문서

## 선수지식

- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

- [기준 단어 알고리즘](anchor-word-algorithm.md)

#linear_algebra #machine_learning #optimization
