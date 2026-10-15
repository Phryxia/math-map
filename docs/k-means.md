# k 평균 군집화

# 개요

$k$ 평균 군집화(k-means clustering)는 점 집합을 $k$ 개의 묶음으로 나누어 묶음 안 제곱거리의 합을 가장 작게 하는 문제다.

$$
\min_{C_1,\dots,C_k}\sum_{j=1}^{k}\sum_{x\in C_j}\Vert x-\mu_j\Vert^2,\qquad\mu_j=\frac{1}{\lvert C_j\rvert}\sum_{x\in C_j}x
$$

$C_j$ 가 묶음이고 $\mu_j$ 가 그 중심이다. [양자화](quantization.md)에서 입력이 유한 표본이고 왜곡이 제곱거리인 경우이며, Lloyd 반복이 그대로 알고리즘이 된다.

# 직관

수직선 위의 점 $1, 2, 3, 8, 9$ 를 두 묶음으로 나눈다. 묶음마다 중심을 하나 두고, 각 점에서 자기 묶음 중심까지의 제곱거리를 모두 더한 값을 비용으로 삼는다.

점이 수직선에 있으므로 묶음은 경계 하나로 갈라지고 경우가 넷이다.

| 묶음 | 중심 | 비용 |
| --- | --- | --- |
| $\lbrace 1\rbrace,\lbrace 2,3,8,9\rbrace$ | $1,\thinspace 5.5$ | $45$ |
| $\lbrace 1,2\rbrace,\lbrace 3,8,9\rbrace$ | $1.5,\thinspace 6.67$ | $21.2$ |
| $\lbrace 1,2,3\rbrace,\lbrace 8,9\rbrace$ | $2,\thinspace 8.5$ | $2.5$ |
| $\lbrace 1,2,3,8\rbrace,\lbrace 9\rbrace$ | $3.5,\thinspace 9$ | $29$ |

세 번째가 최소다. 점이 $n$ 개이고 묶음이 $k$ 개면 나누는 방법이 $k^n$ 쯤이라 표를 다 채울 수 없다.

표를 채울 때 쓴 규칙이 둘이다. 묶음이 정해지면 비용을 가장 작게 하는 중심은 그 묶음의 평균이고, 중심이 정해지면 각 점은 가까운 중심에 붙는 것이 비용을 가장 작게 한다. 두 규칙은 서로의 답을 입력으로 받는다.

그래서 번갈아 적용한다. 중심을 $2.5$ 와 $8$ 로 두면 점이 $\lbrace 1,2\rbrace$ 와 $\lbrace 3,8,9\rbrace$ 로 갈리고, 중심이 $1.5$ 와 $6.67$ 로 바뀐다. 다시 붙이면 $\lbrace 1,2,3\rbrace$ 과 $\lbrace 8,9\rbrace$ 가 되고 중심이 $2$ 와 $8.5$ 로 바뀌며, 한 번 더 붙여도 묶음이 그대로라 멈춘다. 표의 최소에 닿았다.

# 정의

## 목적함수

점 $x_1,\dots,x_n\in\mathbb R^d$ 와 정수 $k$ 가 주어진다. 배정 함수 $c:\lbrace 1,\dots,n\rbrace\to\lbrace 1,\dots,k\rbrace$ 와 중심 $\mu_1,\dots,\mu_k$ 에 대한 비용은 다음과 같다.

$$
\Phi(c,\mu)=\sum_{i=1}^{n}\Vert x_i-\mu_{c(i)}\Vert^2
$$

$k$ 평균 문제는 $\Phi$ 를 최소화하는 $(c,\mu)$ 를 찾는 것이다. $\mu$ 를 지우고 묶음에 대한 최소화로 적으면 개요의 식이 된다.

## Voronoi 분할

중심 $\mu_1,\dots,\mu_k$ 를 고정하면 최적 배정은 각 점을 가까운 중심에 보내는 것이고, 묶음의 영역이 중심들의 Voronoi 분할이 된다. 두 중심을 가르는 경계가 두 점의 수직이등분 초평면이므로 묶음은 볼록 다면체 안의 점들이다.

# 성질

## 계산 복잡도

> **정리.** $k$ 평균 문제는 평면에서 $k=2$ 일 때도 NP(nondeterministic polynomial time) 난해다.[^1]

차원이 $1$ 이면 동적 계획법으로 $O(kn^2)$ 에 최적해를 구한다. 묶음이 수직선의 연속 구간이므로 경계의 위치만 고르면 되고, 구간마다의 비용을 미리 계산해 둔다.

## Lloyd 반복

배정과 중심을 번갈아 갱신한다. 두 단계가 각각 $\Phi$ 를 늘리지 않고, 배정의 가짓수가 유한하므로 유한 번에 멈춘다.

```javascript
function kMeans(points, mu, iters) {
  let assign = points.map(() => 0)
  for (let t = 0; t < iters; t++) {
    const next = points.map((x) => nearestIndex(x, mu))
    if (next.every((j, i) => j === assign[i])) break
    assign = next
    mu = mu.map((mj, j) => {
      const members = points.filter((x, i) => assign[i] === j)
      return members.length > 0 ? centroid(members) : mj
    })
  }
  return { assign, mu }
}
```

멈춘 곳은 두 규칙을 함께 만족하는 배치이고 전역 최소가 아닐 수 있다. 최악의 경우 반복 횟수가 $n$ 에 대해 지수로 늘어나는 입력이 있다.

Gauss 혼합모형의 [기댓값 최대화 알고리즘](em-algorithm.md)에서 성분의 공분산을 $\sigma^2 I$ 로 묶고 $\sigma\to 0$ 으로 보내면 소속확률이 $0$ 과 $1$ 로 갈라져 이 반복이 된다. 그래서 Lloyd 반복을 소속을 확률로 두지 않는 극한으로 읽는다.

## 초기화의 보장

중심을 무작위로 고르면 비용이 최적의 몇 배가 되는 입력이 있다. 첫 중심을 고르고 다음 중심을 기존 중심까지의 제곱거리에 비례한 확률로 뽑는 방법은 Lloyd 반복을 돌리기 전에도 기대 비용이 최적의 $8(\ln k+2)$ 배 이하다.[^2]

## 묶음 수와 비용

$\Phi$ 의 최솟값은 $k$ 가 커질 때 감소하고 $k=n$ 에서 $0$ 이다. 그래서 $\Phi$ 만으로는 $k$ 를 고를 수 없고, 묶음 수에 벌점을 붙이거나 $k$ 를 늘릴 때의 감소폭이 꺾이는 지점을 본다. 양자화 쪽에서는 $k$ 가 부호율을, $\Phi$ 가 왜곡을 주므로 두 값의 교환이 율왜곡 곡선의 역할을 한다.

# 활용

- 벡터 양자화의 코드북을 표본에서 학습한다. 코드워드가 중심이고 부호화가 가까운 중심 찾기다.
- 이미지의 색을 줄일 때 화소의 색 벡터를 묶고 묶음 중심을 팔레트로 쓴다.
- 특징 전처리에서 중심까지의 거리를 새 특징으로 쓰거나, 묶음 번호를 범주형 특징으로 쓴다.
- [주성분 분석](principal-component-analysis.md)으로 차원을 줄인 뒤 적용하면 거리 계산이 싸진다. 둘을 함께 쓰면 비용 함수가 묶음 지시 행렬의 완화와 연결된다.

[^1]: D. Aloise, A. Deshpande, P. Hansen, P. Popat, "NP-hardness of Euclidean sum-of-squares clustering", *Machine Learning* 75 (2009), 245–248 쪽.
[^2]: D. Arthur, S. Vassilvitskii, "k-means++: the advantages of careful seeding", *Proc. 18th ACM–SIAM Symposium on Discrete Algorithms*, 2007, 1027–1035 쪽.

# 연관 문서

## 선수지식

- [양자화](quantization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #computation #information_theory
