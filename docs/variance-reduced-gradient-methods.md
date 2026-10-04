# 분산 축소 경사법

# 개요

분산 축소 경사법은 유한합 손실에서 기울기 추정량의 분산을 $0$ 으로 보내 [확률적 경사하강법](stochastic-gradient-descent.md)의 잡음 구간을 없애는 방법이다. 과거에 계산한 항별 기울기를 기억해 현재 표본의 기울기에서 빼 주고, 그만큼을 전체 평균으로 되돌려 추정량의 불편성을 지킨다.

고정 보폭에서 강볼록 손실의 기하급수적 수렴이 회복된다. 항이 $N$ 개이고 조건수가 $\kappa$ 일 때 정확도 $\varepsilon$ 까지 드는 항별 기울기 계산 횟수가 $O\bigl((N+\kappa)\log(1/\varepsilon)\bigr)$ 이고, 이는 경사하강법의 $O(N\kappa\log(1/\varepsilon))$ 보다 적다. SVRG(stochastic variance reduced gradient)와 SAGA 가 대표적인 두 형태다.

# 직관

확률적 경사하강법은 보폭 $\eta$ 를 고정하면 최소점 $x^\ast$ 에서 $\eta\sigma^2/\mu$ 규모의 거리를 두고 떠돈다. 그 $\sigma^2$ 이 어디서 오는지 유한합

$$
F(x)=\frac{1}{N}\sum_{i=1}^N f_i(x)
$$

에서 확인한다. $x^\ast$ 에서 전체 기울기 $\nabla F(x^\ast)$ 는 $0$ 이지만, 이것은 $N$ 개의 값 $\nabla f_i(x^\ast)$ 의 평균이 $0$ 이라는 뜻일 뿐이다. 항 하나를 무작위로 골라 그 기울기를 쓰면 제곱의 평균이 $\sigma^2$ 으로 남아 있어서, $x^\ast$ 에 도착한 뒤에도 걸음이 멈추지 않는다.

개별 기울기가 $x^\ast$ 에서 $0$ 이 아니라서 막혔으니 그 값을 미리 재 둔다. 기준점 $\tilde x$ 에서 모든 항의 기울기를 한 번 계산해 전체 평균 $\nabla F(\tilde x)$ 를 들고 있으면, 표본 $i$ 에 대해 $\nabla f_i(x)-\nabla f_i(\tilde x)+\nabla F(\tilde x)$ 를 쓸 수 있다. $i$ 에 대한 기댓값은 뒤의 두 항이 상쇄되어 $\nabla F(x)$ 그대로다. 그런데 $x$ 와 $\tilde x$ 가 둘 다 $x^\ast$ 에 가까워지면 앞의 두 항이 서로 가까워져 차이가 $0$ 으로 줄고, 남는 $\nabla F(\tilde x)$ 도 $0$ 으로 간다. 그래서 $\sigma^2$ 자리의 양이 거리와 함께 줄고 고정 보폭으로도 멈출 수 있다.

# 정의

## 유한합 문제

$$
\min_x\ F(x)=\frac{1}{N}\sum_{i=1}^N f_i(x)
$$

각 $f_i$ 는 자료 한 점에서의 손실이고, $F$ 가 $\mu$ 강볼록이며 각 $\nabla f_i$ 가 $L$ -Lipschitz 라고 가정한다. 조건수는 $\kappa=L/\mu$ 다.

## SVRG

기준점 $\tilde x$ 를 바깥 반복마다 한 번 갱신하고, 그 안에서는 다음 추정량으로 $m$ 번 걷는다. 바깥 반복 하나가 전체 기울기를 한 번 계산하므로 이를 **에폭**이라 한다.

$$
v_k=\nabla f_{i_k}(x_k)-\nabla f_{i_k}(\tilde x)+\nabla F(\tilde x),\qquad x_{k+1}=x_k-\eta\thinspace v_k
$$

$i_k$ 는 $1,\dots,N$ 에서 균등하게 뽑는다. 전체 기울기 $\nabla F(\tilde x)$ 는 에폭 시작에서 $N$ 번의 계산으로 한 번 구하고 에폭 내내 다시 쓴다.

```javascript
// SVRG. 에폭마다 기준점에서 전체 기울기를 한 번 계산한다
let anchor = x0
for (let s = 0; s < epochs; s++) {
  const fullGrad = mean(indices(N).map((i) => grad(i, anchor)))
  let x = anchor
  for (let k = 0; k < m; k++) {
    const i = uniform(N)
    const v = sub(add(grad(i, x), fullGrad), grad(i, anchor))
    x = sub(x, scale(eta, v))
  }
  anchor = x
}
```

## SAGA

항마다 기울기 하나를 표에 들고 있다. 표본 $i_k$ 를 뽑아 다음으로 걷고, 그 자리의 표만 새 값으로 바꾼다.

$$
v_k=\nabla f_{i_k}(x_k)-g_{i_k}+\frac{1}{N}\sum_{j=1}^N g_j,\qquad g_{i_k}\leftarrow\nabla f_{i_k}(x_k)
$$

표의 평균은 갱신된 항의 차이만 더해 유지하므로 한 걸음의 비용이 $N$ 과 무관하다. 기준점을 따로 두지 않는 대신 표 $\lbrace g_j\rbrace$ 를 유지하는 쪽이 SVRG 와 다르다.

# 성질

## 불편성과 분산

$i_k$ 에 대한 조건부 기댓값에서 SVRG 의 보정항은 상쇄된다.

$$
\mathbb E\lbrack v_k\mid x_k\rbrack=\nabla F(x_k)-\nabla F(\tilde x)+\nabla F(\tilde x)=\nabla F(x_k)
$$

분산은 $\nabla f_i$ 의 Lipschitz 성질로 거리에 묶인다.

$$
\mathbb E\Vert v_k-\nabla F(x_k)\Vert^2\le 2L^2\bigl(\Vert x_k-x^\ast\Vert^2+\Vert\tilde x-x^\ast\Vert^2\bigr)
$$

확률적 경사하강법에서 $\sigma^2$ 이 상수로 남는 자리가 여기서는 거리의 제곱으로 바뀐다. 두 거리가 $0$ 으로 가면 분산도 함께 간다.

## 강볼록 손실의 수렴률

**정리.** $\eta=\Theta(1/L)$ 과 $m=\Theta(\kappa)$ 로 두면 SVRG 의 에폭마다 $\mathbb E\lbrack F(\tilde x)-F^\ast\rbrack$ 가 상수 배로 줄어든다[^1].

증명의 요지. 한 걸음의 거리 점화식에 위의 분산 한계를 넣으면, 에폭 안의 걸음을 더한 결과가 $\eta m\mu$ 꼴의 수축 인자와 $\eta L^2 m$ 꼴의 증가 항으로 갈린다. $\eta$ 를 $1/L$ 규모로, $m$ 을 $\kappa$ 규모로 잡으면 수축이 증가를 이긴다.

에폭 하나의 비용은 전체 기울기 $N$ 번과 내부 반복 $m=\Theta(\kappa)$ 번이고, 에폭 수가 $O(\log(1/\varepsilon))$ 이므로 전체가 $O\bigl((N+\kappa)\log(1/\varepsilon)\bigr)$ 이다. SAGA 도 같은 복잡도를 갖는다[^2].

## 기억 용량

SAGA 는 항별 기울기 $N$ 개를 저장하므로 차원 $d$ 에서 $O(Nd)$ 가 든다. 손실이 $f_i(x)=\ell(\langle a_i,x\rangle)$ 꼴이면 기울기가 $\ell'(\langle a_i,x\rangle)\thinspace a_i$ 이므로 스칼라 $N$ 개만 저장해 $O(N)$ 으로 줄어든다. 선형모형과 로지스틱 손실이 이 꼴이다.

SVRG 는 기준점과 그 전체 기울기만 들고 있어 $O(d)$ 로 끝나지만, 에폭마다 $N$ 번의 계산을 다시 치른다.

## 유한합이라는 제약

두 방법 모두 항의 개수 $N$ 이 유한하고 같은 항을 다시 방문할 수 있다는 것에 기댄다. 표본이 끝없이 새로 들어오는 경우에는 기억해 둘 $\nabla f_i$ 가 없어 분산 축소가 작동하지 않고, 확률적 경사하강법의 보폭 일정으로 돌아간다.

# 활용

- **경험위험 최소화.** 자료 $N$ 개의 평균 손실을 정확도 높게 최소화하는 문제에서 쓰인다. 정규화된 선형모형과 로지스틱 회귀가 강볼록 가정을 만족하는 표준 예다([선형회귀](linear-regression.md)).
- **조건수가 큰 문제.** $\kappa$ 가 $N$ 보다 작으면 비용이 $O(N\log(1/\varepsilon))$ 에 가까워져 경사하강법 한 걸음 값으로 한 자리 정확도를 얻는다. $\kappa$ 가 $N$ 보다 훨씬 크면 이득이 줄고 [Nesterov 가속법](nesterov-acceleration.md)과 결합한 형태를 쓴다.
- **비볼록 손실.** 강볼록성을 빼면 기하급수 수렴은 사라지지만, 기울기 노름을 $\varepsilon$ 아래로 내리는 비용이 확률적 경사하강법보다 작다는 결과가 있다[^3]. 심층 신경망에서는 미니배치가 이미 분산을 줄이고 기준점이 금방 낡아 이득이 작다.
- **적응적 보폭과의 조합.** 좌표별 보폭을 쓰는 [적응적 경사 방법](adaptive-gradient-methods.md)과 분산 축소는 서로 다른 항을 손보므로 함께 쓸 수 있다.

[^1]: Rie Johnson, Tong Zhang, "Accelerating Stochastic Gradient Descent using Predictive Variance Reduction", *Advances in Neural Information Processing Systems* 26 (2013). SVRG 의 정의와 강볼록 손실의 기하급수 수렴. https://papers.nips.cc/paper_files/paper/2013/hash/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Abstract.html
[^2]: Aaron Defazio, Francis Bach, Simon Lacoste-Julien, "SAGA: A Fast Incremental Gradient Method With Support for Non-Strongly Convex Composite Objectives", *Advances in Neural Information Processing Systems* 27 (2014). SAGA 의 정의, 불편성, 같은 복잡도. https://papers.nips.cc/paper_files/paper/2014/hash/ede7e2b6d13a41ddf9f4bdef84fdc737-Abstract.html
[^3]: Sashank J. Reddi, Ahmed Hefny, Suvrit Sra, Barnabás Póczós, Alexander J. Smola, "Stochastic Variance Reduction for Nonconvex Optimization", *Proceedings of the 33rd International Conference on Machine Learning* (2016). 비볼록 유한합에서 SVRG 의 기울기 노름 수렴률. https://proceedings.mlr.press/v48/reddi16.html

# 연관 문서

## 선수지식

- [확률적 경사하강법](stochastic-gradient-descent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #probability
