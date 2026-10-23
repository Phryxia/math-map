# 경로 결합

# 개요

**경로 결합(path coupling)** 은 상태공간에 그래프의 경로 거리를 주고, 이웃한 두 상태에서 출발한 [Markov 연쇄](markov-chains.md) 한 걸음의 결합만 만들어 모든 상태 쌍의 결합을 얻는 방법이다. 이웃한 쌍에서 한 걸음 뒤 거리의 기댓값이 $1-\alpha$ 배 이하로 줄면, 모든 쌍에서 같은 비율로 줄고 [혼합시간](mixing-time.md)이 $\alpha^{-1}\log(\mathrm{diam}/\varepsilon)$ 이하다. Bubley 와 Dyer 가 1997 년에 도입했다.[^1]

# 직관

그래프 $G$ 의 꼭짓점 $n$ 개를 색 $q$ 개로 칠하되 이웃한 꼭짓점의 색이 다르게 하는 [그래프 색칠](graph-coloring.md)을 균등하게 뽑으려고 한다. 한 걸음은 꼭짓점 $w$ 와 색 $c$ 를 무작위로 고르고, $w$ 의 이웃 가운데 색 $c$ 인 것이 없으면 $w$ 를 $c$ 로 다시 칠한다. 혼합시간을 결합으로 재려면 두 색칠 $x,y$ 에서 출발한 사본을 함께 움직여 다른 꼭짓점의 수가 줄게 해야 한다. $x$ 와 $y$ 가 여러 꼭짓점에서 다르면, 한 꼭짓점을 맞추는 선택이 그 이웃에서 다른 꼭짓점을 새로 만들 수 있고 그 경우가 다른 꼭짓점의 배치마다 달라진다.

$x$ 와 $y$ 가 꼭짓점 $v$ 하나에서만 다르면 경우가 둘뿐이다. $w=v$ 이고 $c$ 가 $v$ 의 이웃 색이 아니면 두 사본이 같은 색을 칠해 일치한다. 최대 차수가 $\Delta$ 이면 이 확률은 $(q-\Delta)/(qn)$ 이상이다. $w$ 가 $v$ 의 이웃 $u$ 이고 $c$ 가 $x(v)$ 나 $y(v)$ 이면, $x$ 쪽의 $c$ 와 $y$ 쪽의 색을 $x(v)\leftrightarrow y(v)$ 로 바꿔 짝짓는다. 그러면 $u$ 에서 새로 달라지는 경우는 $c=y(v)$ 하나이고 확률이 이웃마다 $1/(qn)$ 이하다. 다른 꼭짓점의 수의 기댓값은 한 걸음 뒤에 $1-(q-2\Delta)/(qn)$ 이하이고, $q\gt 2\Delta$ 이면 $1$ 보다 작다.

여러 꼭짓점에서 다른 $x,y$ 는 꼭짓점을 하나씩 바꾼 색칠의 열 $x=z_0,z_1,\dots,z_r=y$ 로 잇는다. 이웃한 쌍 $(z\_{i-1},z_i)$ 마다 위의 결합을 쓰고 이어 붙이면, 두 끝의 거리는 삼각부등식으로 각 쌍의 거리의 합 이하다. 각 쌍이 $1-\alpha$ 배로 줄었으므로 합도 $1-\alpha$ 배로 준다.

# 정의

유한 상태공간 $\Omega$ 위의 그래프 $H$ 와 변의 길이 $\ell\ge 1$ 을 정한다. **경로 거리** $\rho(x,y)$ 는 $H$ 에서 $x$ 와 $y$ 를 잇는 경로의 길이 합 가운데 최솟값이다. $\rho(x,y)\ge 1$ $(x\ne y)$ 이고 $\rho$ 는 거리다.

전이행렬 $P$ 에 대해, $H$ 의 변 $\lbrace x,y\rbrace$ 마다 $P(x,\cdot)$ 와 $P(y,\cdot)$ 의 [결합](coupling.md) $(X_1,Y_1)$ 이 주어지고

$$
\mathbb E\lbrack\rho(X_1,Y_1)\rbrack\le(1-\alpha)\thinspace\rho(x,y)
$$

를 만족하면, $P$ 가 $H$ 위에서 **비율 $\alpha$ 로 수축한다**고 한다.

색칠의 예에서 $\Omega$ 는 모든 색 배정 $\lbrack q\rbrack^V$ 이고, $H$ 의 변은 꼭짓점 하나에서만 다른 쌍, $\ell=1$ 이다. 그러면 $\rho$ 는 Hamming 거리이고 $\alpha=(q-2\Delta)/(qn)$ 이다. 직관 절의 계산은 $x,y$ 가 이웃 색칠 규칙을 지키는지를 쓰지 않으므로 규칙을 어긴 배정을 경로의 중간에 두어도 된다.

# 성질

## 경로 결합 정리

> **정리 (Bubley–Dyer).** $P$ 가 $H$ 위에서 비율 $\alpha$ 로 수축하면, 모든 $x,y\in\Omega$ 에 대해 $P(x,\cdot)$ 와 $P(y,\cdot)$ 의 결합 $(X_1,Y_1)$ 이 존재해 $\mathbb E\lbrack\rho(X_1,Y_1)\rbrack\le(1-\alpha)\rho(x,y)$ 이다.[^1]

증명의 요지. $x$ 와 $y$ 를 잇는 최단 경로 $x=z_0,\dots,z_r=y$ 를 잡는다. 이웃한 쌍의 결합들을 공통 주변분포 $P(z_i,\cdot)$ 를 따라 차례로 붙이면 $Z_0,\dots,Z_r$ 이 한 확률공간에 놓이고 이웃한 쌍마다 주어진 결합을 따른다. 삼각부등식으로

$$
\mathbb E\lbrack\rho(Z_0,Z_r)\rbrack\le\sum\_{i=1}^r\mathbb E\lbrack\rho(Z\_{i-1},Z_i)\rbrack\le(1-\alpha)\sum\_{i=1}^r\rho(z\_{i-1},z_i)=(1-\alpha)\rho(x,y)
$$

이고, $(X_1,Y_1)=(Z_0,Z_r)$ 로 둔다. $\square$

## 혼합시간의 상한

> **따름정리.** $P$ 가 비율 $\alpha$ 로 수축하고 $\mathrm{diam}=\max\_{x,y}\rho(x,y)$ 이면
> $$
> d(t)\le\mathrm{diam}\thinspace(1-\alpha)^t,\qquad t\_{\mathrm{mix}}(\varepsilon)\le\Bigl\lceil\frac{\log(\mathrm{diam}/\varepsilon)}{\alpha}\Bigr\rceil
> $$
> 이다.

정리의 결합을 매 걸음 다시 쓰면 $\mathbb E\lbrack\rho(X_t,Y_t)\rbrack\le(1-\alpha)^t\rho(x,y)$ 이다. $x\ne y$ 이면 $\rho\ge 1$ 이므로 Markov 부등식(Markov's inequality)으로 $\Pr\lbrack X_t\ne Y_t\rbrack\le\mathbb E\lbrack\rho(X_t,Y_t)\rbrack$ 이고, 혼합시간 문서의 결합 상한에 넣는다. $(1-\alpha)^t\le e^{-\alpha t}$ 에서 둘째 식이 나온다.

색칠의 예에서 $\mathrm{diam}=n$, $\alpha=(q-2\Delta)/(qn)$ 이므로 $q\gt 2\Delta$ 이면

$$
t\_{\mathrm{mix}}(\varepsilon)\le\Bigl\lceil\frac{qn}{q-2\Delta}\log\frac{n}{\varepsilon}\Bigr\rceil
$$

이다. $q\ge 2\Delta+1$ 에서 혼합시간이 $O(n\log n)$ 이다.

## 수축과 Wasserstein 거리

$\rho$ 를 비용으로 하는 [최적 수송](optimal-transport.md)의 Wasserstein 거리를 $W_\rho$ 라 하면 정리의 결론은 $W_\rho(P(x,\cdot),P(y,\cdot))\le(1-\alpha)\rho(x,y)$ 다. Ollivier 는 $1-W_\rho(P(x,\cdot),P(y,\cdot))/\rho(x,y)$ 를 거친 Ricci 곡률(coarse Ricci curvature)이라 불렀다.[^2] 이 이름으로 쓰면, 곡률이 이웃 쌍에서 $\alpha$ 이상인 연쇄는 모든 쌍에서 곡률이 $\alpha$ 이상이다.

# 활용

- **그래프 색칠의 근사 계수.** $q\gt 2\Delta$ 에서 색칠 연쇄의 혼합시간이 $O(n\log n)$ 이므로 색칠을 거의 균등하게 뽑을 수 있고, 표본 추출과 근사 계수의 동치로 색칠의 개수를 다항 시간에 근사한다. [근사 알고리즘](approximation-algorithms.md)에서 쓴다.
- **[MCMC](markov-chain-monte-carlo.md)(Markov chain Monte Carlo)의 수렴 증명.** 고온의 [Ising 모형](ising-model.md), 독립집합의 hard-core 모형에서 한 꼭짓점만 다른 두 배치의 결합을 만드는 것으로 혼합시간을 묶는다.

[^1]: Russ Bubley, Martin Dyer, "Path coupling: A technique for proving rapid mixing in Markov chains", *Proceedings of the 38th Annual Symposium on Foundations of Computer Science* (1997), 223–231. 색칠 연쇄의 계산은 David A. Levin, Yuval Peres, Elizabeth L. Wilmer, *Markov Chains and Mixing Times*, 2판, American Mathematical Society, 2017, 14 장을 따랐다.
[^2]: Yann Ollivier, "Ricci curvature of Markov chains on metric spaces", *Journal of Functional Analysis* **256** (2009), 810–864.

# 연관 문서

## 선수지식

- [Markov 연쇄의 혼합시간](mixing-time.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #algorithms #combinatorics
