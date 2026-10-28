# Smolyak 희소격자 구적

# 개요

**Smolyak 희소격자 구적(Smolyak sparse grid quadrature)** 은 고차원 적분을 점을 듬성듬성 고른 격자로 근사하는 공식이다. $\lbrack -1,1\rbrack^{10}$ 에서 좌표마다 점 $9$ 개를 쓰는 격자로 적분하면 점이 $9^{10}\approx 3.5\times 10^9$ 개 든다. Smolyak 공식은 1 차원 공식의 차분을 텐서곱하고 차원마다의 단계를 더한 값이 정해진 수 이하인 것만 더해, 점의 개수가 차원에 대해 지수적으로 늘지 않게 한다.

# 직관

Smolyak 희소격자 구적은 1 차원 구적 공식의 차분을 텐서곱하고, 차원마다의 단계를 더한 값이 정해진 수 이하인 것만 더해 고차원 적분의 근삿값을 얻는 공식이다. S. A. Smolyak 이 1963 년에 제안했다[^1]. 이 공식이 쓰는 점의 집합을 **희소격자(sparse grid)** 라 한다.

1 차원 공식으로는 노드가 서로 포함관계를 이루는 [Clenshaw–Curtis 구적](clenshaw-curtis-quadrature.md)을 주로 쓴다. 점의 개수가 차원에 대해 지수적으로 늘지 않고 로그의 거듭제곱 배로만 늘어난다.

$\lbrack-1,1\rbrack^{10}$ 에서 매끄러운 함수를 적분한다. 1 차원에서 점 $9$ 개의 Clenshaw–Curtis 구적이 충분히 정확하다면, 좌표마다 같은 공식을 쓰는 텐서곱 공식은 점 $9^{10}\approx 3.5\times 10^9$ 개가 든다.

1 차원 공식을 점 $1$ 개, $3$ 개, $5$ 개, $9$ 개로 늘려 가는 열을 $U^1,U^2,U^3,U^4$ 라 하고, 단계를 올릴 때 바뀌는 양 $\Delta^i=U^i-U^{i-1}$ 을 본다. $U^4=\Delta^1+\Delta^2+\Delta^3+\Delta^4$ 이므로 텐서곱 공식은 차분의 텐서곱 $\Delta^{i_1}\otimes\cdots\otimes\Delta^{i_{10}}$ 을 $1\le i_j\le 4$ 인 모든 조합에 대해 더한 것이다. 매끄러운 함수에서 $\Delta^i$ 는 $i$ 가 커질수록 작아지므로, 여러 좌표에서 동시에 단계가 높은 조합은 곱이 매우 작다.

그래서 $i_1+\cdots+i_{10}\le 13$ 인 조합만 더한다. 이 조합들이 쓰는 점은 $1581$ 개다. 버린 조합은 모두 두 개 이상의 좌표에서 단계가 $2$ 이상이다.

# 정의

## 1 차원 공식의 열

$U^i$ $(i\ge 1)$ 를 $\lbrack-1,1\rbrack$ 위의 구적 공식의 열이라 하고 $U^0=0$ 으로 둔다. Clenshaw–Curtis 구적으로 만들면 $U^1$ 은 점 $0$ 하나에서 $2f(0)$ 이고, $i\ge 2$ 에서 $U^i$ 는 점 $2^{i-1}+1$ 개의 Clenshaw–Curtis 구적이다. 이 열의 노드는 $i$ 가 커질 때 앞 단계의 노드를 모두 포함한다.

## Smolyak 공식

다중지표 $\mathbf i=(i_1,\dots,i_d)$ 에 대해 $\vert\mathbf i\vert=i_1+\cdots+i_d$ 로 쓴다. $q\ge d$ 에 대해

$$
A(q,d)=\sum_{\vert\mathbf i\vert\le q}\Delta^{i_1}\otimes\cdots\otimes\Delta^{i_d},\qquad \Delta^i=U^i-U^{i-1}
$$

를 **Smolyak 공식** 이라 한다. $\ell=q-d$ 를 단계(level)라 한다. 차분을 풀어 쓰면 1 차원 공식의 텐서곱의 선형결합이 된다[^2].

$$
A(q,d)=\sum_{q-d+1\le\vert\mathbf i\vert\le q}(-1)^{q-\vert\mathbf i\vert}\binom{d-1}{q-\vert\mathbf i\vert}U^{i_1}\otimes\cdots\otimes U^{i_d}
$$

$U^{i_1}\otimes\cdots\otimes U^{i_d}$ 는 좌표마다 $U^{i_j}$ 의 노드를 고른 격자에서 가중치의 곱으로 함숫값을 더하는 텐서곱 공식이다.

```typescript
// 결합 공식으로 A(q, d) 를 계산한다. tensorRule(f, idx) 는 U^{idx[0]} ⊗ ... ⊗ U^{idx[d-1]} 로 f 를 적분한 값이다.
function smolyak(f: (x: number[]) => number, q: number, d: number): number {
  let total = 0;
  for (const idx of multiIndices(d, q - d + 1, q)) { // 성분이 1 이상이고 합이 q-d+1 에서 q 사이인 다중지표
    const s = idx.reduce((a, b) => a + b, 0);
    const coef = (q - s) % 2 === 0 ? 1 : -1;
    total += coef * binomial(d - 1, q - s) * tensorRule(f, idx);
  }
  return total;
}
```

# 성질

## 점의 개수

노드가 포함관계를 이루면 $A(q,d)$ 의 점의 집합은 $\vert\mathbf i\vert=q$ 인 텐서곱 격자들의 합집합이다. Clenshaw–Curtis 열에서 단계 $\ell$ 의 점의 개수는 $O(2^\ell\ell^{d-1})$ 이다[^3]. 같은 단계의 가장 세밀한 1 차원 공식의 텐서곱은 점이 $(2^\ell+1)^d$ 개다.

| 차원 d | 단계 ℓ | 희소격자의 점 | 텐서곱의 점 |
| ------ | ------ | ------------- | ----------- |
| 2   | 3      | 29            | 81          |
| 10  | 2      | 221           | 9765625     |
| 10  | 3      | 1581          | 3486784401  |

## 다항식 정확도

정리. Clenshaw–Curtis 열로 만든 $A(d+k,d)$ 는 총차수 $2k+1$ 이하의 $d$ 변수 다항식을 정확히 적분한다[^4].

증명의 요지. 단항식 $x_1^{a_1}\cdots x_d^{a_d}$ 의 적분은 좌표마다의 적분의 곱이다. $U^i$ 는 차수 $2^{i-1}+1$ 이하에서 정확하므로 $\Delta^i$ 는 차수 $2^{i-2}+1$ 이하의 다항식에서 $0$ 이다. 총차수가 $2k+1$ 이하인 단항식에서는 $\vert\mathbf i\vert\gt d+k$ 인 항마다 차분 가운데 하나가 $0$ 이 되므로, $A(d+k,d)$ 가 충분히 세밀한 텐서곱 공식과 같은 값을 준다. 홀수 차수의 좌표가 있는 단항식은 노드와 가중치의 대칭으로 적분과 근삿값이 함께 $0$ 이다.

## 오차

정리. $f$ 의 혼합 편도함수 $\partial^{\mathbf a}f$ 가 $\max_j a_j\le r$ 인 모든 $\mathbf a$ 에서 유계이면, 점 $N$ 개의 Smolyak 공식의 오차는 $O\big(N^{-r}(\log N)^{(d-1)(r+1)}\big)$ 다[^2][^4].

같은 함수족에서 텐서곱 공식의 오차는 $O(N^{-r/d})$ 다. 차원 $d$ 는 로그 인자에만 들어간다.

## 가중치의 부호

결합 공식의 계수 $(-1)^{q-\vert\mathbf i\vert}$ 때문에 1 차원 가중치가 모두 양수여도 희소격자의 가중치에는 음수가 섞인다. 함숫값마다 $\delta$ 의 오차가 있을 때 근삿값의 오차는 가중치의 절댓값의 합에 $\delta$ 를 곱한 것까지 커질 수 있다.

# 활용

- 불확실성 정량화. 무작위 계수를 가진 미분방정식의 해의 기댓값은 계수 공간 위의 적분이고, 계수가 수십 개이면 희소격자 구적으로 계산한다[^3].
- 금융수학의 고차원 기댓값. 경로를 이산화한 옵션 가격은 시점 수만큼의 차원을 갖는 적분이고, 피적분함수가 매끄러운 경우 Monte Carlo 방법과 함께 비교 대상이 된다[^5].
- 같은 결합 공식을 구적 대신 보간에 적용하면 고차원 함수의 희소격자 보간이 된다. 노드와 계수는 그대로 쓰고 1 차원 공식 자리에 1 차원 [다항식 보간](polynomial-interpolation.md)을 놓는다.

[^1]: S. A. Smolyak, "Quadrature and interpolation formulas for tensor products of certain classes of functions", *Soviet Mathematics Doklady* **4** (1963), 240–243.
[^2]: G. W. Wasilkowski, H. Woźniakowski, "Explicit cost bounds of algorithms for multivariate tensor product problems", *Journal of Complexity* **11** (1995), 1–56.
[^3]: H.-J. Bungartz, M. Griebel, "Sparse grids", *Acta Numerica* **13** (2004), 147–269.
[^4]: E. Novak, K. Ritter, "High dimensional integration of smooth functions over cubes", *Numerische Mathematik* **75** (1996), 79–97.
[^5]: T. Gerstner, M. Griebel, "Numerical integration using sparse grids", *Numerical Algorithms* **18** (1998), 209–232.

# 연관 문서

## 선수지식

- [Clenshaw–Curtis 구적](clenshaw-curtis-quadrature.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algorithms #probability
