# Potts 모형

# 개요

$q$ 상태 Potts 모형은 그래프의 정점에 $q$ 가지 상태를 배정한 것 위의 확률분포다. 인접한 두 정점이 같은 상태인 변마다 가중치를 곱해 확률을 정한다.

정규화 상수인 분배함수가 [Tutte 다항식](tutte-polynomial.md)의 값매김이다. 변의 부분집합으로 전개하면 상태 수 $q$ 가 연결성분의 개수에 붙은 지수로 바뀌고, 그 식이 Tutte 다항식의 랭크 생성함수 꼴과 같다.

# 직관

그래프 $G=(V,E)$ 의 정점에 $q$ 가지 색을 배정한다. 인접한 두 정점이 같은 색인 것을 금지하면 적절한 색칠이고, 그 개수가 색다항식 $P(q)$ 다.

금지하는 대신 벌점을 주면 색칠의 개수를 세는 문제가 달라진다. 배정 자체는 $q^{\vert V\vert}$ 개 전부 허용하고, 같은 색인 변 하나마다 가중치 $1+v$ 를 곱한다. $v\gt 0$ 이면 같은 색이 많은 배정에 큰 가중치가 가고, $v=-1$ 이면 같은 색인 변이 하나라도 있는 배정의 가중치가 $0$ 이 되어 적절한 색칠만 남는다.

가중치의 총합을 계산한다. 변마다 곱해지는 인자가 "같은 색이면 $1+v$, 다르면 $1$", 곧 $1+v\delta$ 꼴이므로 곱을 전개하면 각 항이 "$v$ 를 고른 변들의 집합 $A$" 로 색인된다.

$$
\sum_\sigma\prod_{uv\in E}\big(1+v\thinspace\delta_{\sigma(u),\sigma(v)}\big)=\sum_{A\subseteq E}v^{\vert A\vert}\sum_\sigma\prod_{uv\in A}\delta_{\sigma(u),\sigma(v)}
$$

안쪽 합에서 $A$ 의 변으로 이어진 정점들은 색이 같아야 하므로, 배정은 $A$ 의 연결성분마다 색 하나를 고르는 것이다. 성분이 $k(A)$ 개면 그런 배정이 $q^{k(A)}$ 개다. 따라서 총합은 $\sum_Av^{\vert A\vert}q^{k(A)}$ 이고, 색칠 하나하나를 세던 문제가 변의 부분집합을 세는 문제로 바뀐다.

# 정의

## Potts 측도

상태 배정 $\sigma:V\to\lbrace 1,\dots,q\rbrace$ 에 다음 확률을 준다.

$$
\pi(\sigma)=\frac{1}{Z}\prod_{uv\in E}\big(1+v\thinspace\delta_{\sigma(u),\sigma(v)}\big),\qquad v=e^{\beta}-1
$$

$\delta$ 는 Kronecker 기호이고 $\beta$ 는 역온도다. $v\gt 0$ 인 경우를 강자성, $-1\le v\lt 0$ 인 경우를 반강자성이라 한다.

## 분배함수

$$
Z\_G(q,v)=\sum\_{\sigma}\prod_{uv\in E}\big(1+v\thinspace\delta_{\sigma(u),\sigma(v)}\big)
$$

## 무작위 클러스터 모형

같은 매개변수로 변의 부분집합 $A\subseteq E$ 에 다음 확률을 주는 모형을 무작위 클러스터 모형이라 한다.

$$
\phi(A)=\frac{v^{\vert A\vert}q^{k(A)}}{Z\_G(q,v)}
$$

$k(A)$ 는 $A$ 를 변 집합으로 하는 부분그래프의 연결성분 수이고 고립된 정점도 센다. $q$ 가 양의 정수가 아니어도 정의된다.

# 성질

## Fortuin–Kasteleyn 등식

$$
Z\_G(q,v)=\sum_{A\subseteq E}v^{\vert A\vert}q^{k(A)}
$$

증명은 직관 절의 전개다. 변마다 두 항 가운데 하나를 고르는 것이 $A$ 를 고르는 것이고, 안쪽 합이 $A$ 의 성분마다 색 하나를 고르는 수 $q^{k(A)}$ 다. 좌변은 $q$ 가 정수일 때만 뜻이 있고 우변은 모든 $q$ 에서 다항식이므로, 이 등식이 Potts 모형을 실수 $q$ 로 연장한다.

## Tutte 다항식과의 대응

$k(A)=\vert V\vert-\vert A\vert+c(A)$ 에서 $c(A)$ 가 순환 차원이므로 랭크 생성함수 꼴로 바꾸면 다음이 성립한다[^1].

$$
Z\_G(q,v)=q^{k(E)}v^{\vert V\vert-k(E)}\thinspace T\Big(\frac{q+v}{v},\thinspace 1+v\Big)
$$

$T$ 는 $G$ 의 Tutte 다항식이다. 쌍곡선 $(x-1)(y-1)=q$ 가 $q$ 를 고정한 Potts 모형의 궤적이고, $v$ 가 그 곡선 위를 움직인다. 강자성 $v\gt 0$ 이 $y\gt 1$ 에 대응한다.

## 특수한 값

- $v=-1$ 에서 $Z\_G(q,-1)=(-1)^{\vert E\vert}P(q)$ 이고 $P$ 는 색다항식이다. 반강자성 영도 극한이 [그래프 색칠](graph-coloring.md)의 수 세기다.
- $q=2$ 는 Ising 모형이다. 상태 둘을 $\pm 1$ 로 적으면 $\delta_{\sigma(u),\sigma(v)}=(1+\sigma(u)\sigma(v))/2$ 이므로 가중치가 $\exp(\beta\sigma(u)\sigma(v))$ 의 상수배가 된다.
- $q=1$ 에서 $Z\_G(1,v)=(1+v)^{\vert E\vert}$ 이고 무작위 클러스터 모형은 변을 독립으로 고르는 [무작위 그래프](erdos-renyi-graphs.md)다.

## 계산 복잡도

고정된 $q\ge 3$ 과 일반 그래프에서 $Z_G$ 를 계산하는 문제는 #P-난해다. Tutte 다항식의 값매김이 쌍곡선 $(x-1)(y-1)=q$ 위의 점에서 어렵다는 결과와 같은 진술이다. 평면 그래프의 $q=2$ 는 Pfaffian 으로 다항시간에 계산된다.

# 활용

## Tutte 다항식의 값매김

Tutte 다항식의 활용 절이 드는 통계물리 항목이 이 모형이다. $(x,y)$ 평면에서 신뢰도 다항식과 흐름 다항식이 각자의 직선과 축을 차지하는 자리에, Potts 분배함수는 쌍곡선 하나를 차지한다.

## 상전이

무작위 클러스터 표현에서 무한 성분이 생기는지가 상전이의 기준이다. 이 표현은 $q$ 가 정수가 아닐 때도 정의되고, 변의 집합에 대한 단조성이 성립해 결합 논법을 쓸 수 있다.

## 표본추출

무작위 클러스터 표현의 변 집합과 색 배정을 번갈아 갱신하는 Swendsen–Wang 절차는 임계점 근처에서 한 정점씩 갱신하는 방법보다 [혼합시간](mixing-time.md)이 짧다. 성분 하나의 색을 통째로 바꾸므로 큰 덩어리가 한 단계에서 움직인다.

[^1]: Sokal, A. D. "The multivariate Tutte polynomial", in *Surveys in Combinatorics 2005*, Cambridge University Press, 2005, 173–226.

# 연관 문서

## 선수지식

- [Tutte 다항식](tutte-polynomial.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #probability
