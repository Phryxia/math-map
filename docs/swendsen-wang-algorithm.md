# Swendsen–Wang 알고리즘

# 개요

**Swendsen–Wang 알고리즘(Swendsen–Wang algorithm)** 은 [Potts 모형](potts-model.md)에서 표본을 얻으려고, 같은 색인 이웃끼리 무작위로 묶은 덩어리마다 색을 통째로 다시 뽑는 [Markov 연쇄](markov-chains.md)다. 낮은 온도의 자석은 거의 모든 원자가 같은 방향을 향하고, 정점 하나씩 바꾸는 [Glauber 동역학](glauber-dynamics.md)은 모두 위를 향한 상태에서 모두 아래를 향한 상태로 건너가는 데 매우 오래 걸린다.

이 알고리즘은 같은 색 이웃 사이의 간선을 확률적으로 열어 덩어리를 만들고, 덩어리 하나를 한 걸음에 다른 색으로 바꾼다. 그래서 큰 덩어리가 한 걸음에 움직이고, 정점 하나씩 바꿀 때 거쳐야 하는 확률이 작은 중간 상태를 건너뛴다.

# 직관

정점 $a,b$ 와 간선 $ab$ 하나로 된 그래프에서 색이 둘인 Potts 모형을 본다. 같은 색인 배정의 무게는 $e^\beta$, 다른 색인 배정의 무게는 $1$ 이다. Glauber 동역학에서는 두 정점이 같은 색일 때 한 걸음에 색이 갈라질 확률이 $1/(1+e^\beta)$ 이므로, $\beta$ 가 크면 같은 색 상태에서 오래 머문다.

Swendsen–Wang 의 한 걸음은 두 단계다. 두 정점이 같은 색이면 간선을 확률 $p=1-e^{-\beta}$ 로 연다. 열린 간선으로 이어진 정점들을 한 덩어리로 보고, 덩어리마다 색을 같은 확률로 새로 뽑는다.

두 정점이 모두 색 $1$ 일 때 간선이 열리면 덩어리 하나가 되어 확률 $1/2$ 로 둘 다 색 $2$ 로 바뀐다. 간선이 닫히면 두 정점이 각자 색을 뽑아 확률 $1/4$ 로 둘 다 색 $2$ 가 된다. 둘 다 색 $2$ 로 바뀔 확률은 $p/2+(1-p)/4$ 이고, $\beta$ 가 아무리 커도 $1/4$ 이상이다.

# 정의

## Edwards–Sokal 결합

그래프 $G=(V,E)$, 색의 수 $q$, $\beta\gt0$, $p=1-e^{-\beta}$ 를 잡는다. 색 배정 $\sigma$ 와 간선 부분집합 $\omega\subseteq E$ 의 쌍에 무게

$$
w(\sigma,\omega)=\prod_{uv\in E}\Bigl((1-p)\mathbf 1\lbrack uv\notin\omega\rbrack+p\thinspace\mathbf 1\lbrack uv\in\omega\rbrack\thinspace\mathbf 1\lbrack\sigma_u=\sigma_v\rbrack\Bigr)
$$

를 준 결합분포를 **Edwards–Sokal 결합(Edwards–Sokal coupling)** 이라 한다[^1]. 열린 간선의 두 끝은 같은 색이어야 한다.

## 한 걸음

**Swendsen–Wang 알고리즘** 은 현재 배정 $\sigma$ 에서 다음 두 단계로 새 배정을 만든다[^2].

- 양 끝이 같은 색인 간선마다 독립으로 확률 $p$ 로 연다. 열린 간선의 집합을 $\omega$ 라 한다.
- $(V,\omega)$ 의 연결성분마다 독립으로 $q$ 색 가운데 하나를 같은 확률로 뽑아 성분 전체를 그 색으로 칠한다.

첫 단계는 결합분포에서 $\sigma$ 가 주어졌을 때 $\omega$ 의 조건부 분포에서 뽑는 것이고, 둘째 단계는 $\omega$ 가 주어졌을 때 $\sigma$ 의 조건부 분포에서 뽑는 것이다.

# 성질

## 두 주변분포

Edwards–Sokal 결합에서 $\omega$ 를 합하면 $\sigma$ 의 주변분포는 무게 $e^{\beta\vert\lbrace uv\in E:\sigma_u=\sigma_v\rbrace\vert}$ 에 비례하는 Potts 모형이다. 간선 하나에서 $\sigma_u=\sigma_v$ 이면 $(1-p)+p=1$, 아니면 $1-p=e^{-\beta}$ 이므로 무게의 비가 $e^\beta$ 다. $\sigma$ 를 합하면 $\omega$ 의 주변분포는 $p^{\vert\omega\vert}(1-p)^{\vert E\setminus\omega\vert}q^{k(\omega)}$ 에 비례하는 무작위 클러스터 모형이다. $k(\omega)$ 는 연결성분 수이고, 성분마다 색을 $q$ 가지로 고를 수 있다.

## 불변성

한 걸음이 결합분포의 두 조건부 분포에서 번갈아 뽑는 Gibbs 표본추출이므로 Potts 모형이 불변분포다. 직관 절에서 같은 색일 확률을 $s$ 라 하면, 같은 색에서 같은 색으로 갈 확률은 $(1+p)/2$, 다른 색에서 같은 색으로 갈 확률은 $1/2$ 이다. $s=s(1+p)/2+(1-s)/2$ 를 풀면 $s=1/(2-p)=e^\beta/(e^\beta+1)$ 이고, Potts 모형에서 같은 색일 확률과 같다.

## 혼합시간

- 정수 격자 $\mathbb Z^2$ 의 [Ising 모형](ising-model.md)($q=2$)에서는 임계 온도를 포함한 모든 온도에서 혼합시간이 다항식이다[^3].
- 완전그래프 위의 $q\ge3$ Potts 모형에서는 임계 온도에서 혼합시간이 정점 수의 지수함수다[^4]. 덩어리를 통째로 바꾸어도 두 상이 공존하는 온도에서는 빠르지 않다.

# 활용

- 격자 모형의 임계 현상 시뮬레이션. 임계점 근처에서 Glauber 동역학의 혼합시간은 계의 크기의 거듭제곱으로 크게 늘지만, Swendsen–Wang 은 그 지수가 작아 임계 지수의 수치 추정에 쓴다.
- 무작위 클러스터 모형의 표본. 같은 연쇄의 $\omega$ 를 기록하면 무작위 클러스터 모형의 표본이 나온다.
- 영상 분할. 화소를 정점으로 두고 비슷한 화소 사이의 간선을 열어 덩어리를 통째로 다시 칠하는 방식이 영상 분할의 표본추출에 쓰인다.

[^1]: R. G. Edwards, A. D. Sokal, "Generalization of the Fortuin–Kasteleyn–Swendsen–Wang representation and Monte Carlo algorithm", *Physical Review D* 38 (1988), 2009–2012.
[^2]: R. H. Swendsen, J.-S. Wang, "Nonuniversal critical dynamics in Monte Carlo simulations", *Physical Review Letters* 58 (1987), 86–88.
[^3]: M. Ullrich, "Rapid mixing of Swendsen–Wang dynamics in two dimensions", *Dissertationes Mathematicae* 502 (2014).
[^4]: V. K. Gore, M. R. Jerrum, "The Swendsen–Wang process does not always mix rapidly", *Journal of Statistical Physics* 97 (1999), 67–86.

# 연관 문서

## 선수지식

- [Potts 모형](potts-model.md)
- [Glauber 동역학](glauber-dynamics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #computation #algorithms #combinatorics
