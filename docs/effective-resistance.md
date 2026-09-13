# 유효저항

유효저항은 그래프의 두 정점 사이로 단위 전류를 흘리는 데 필요한 전위차다.

## 정의

연결된 유한 무향 그래프의 각 간선 가중치를 양의 전도도로 해석한다. 간선 하나의 저항은 전도도의 역수다. 그래프 Laplacian을 L, 서로 다른 두 정점을 u, v라 하자.

b는 u 좌표가 1, v 좌표가 -1, 나머지는 0인 벡터다. 전위 벡터 φ는 다음 방정식을 만족한다.

$$
L\varphi=b
$$

u에서 전류 1을 넣고 v에서 1을 빼며, 다른 정점에서는 순유입이 0인 조건이다. 기준 정점의 전위를 0으로 고정하면 해가 유일하다. 유효저항 R(u,v)는 다음 전위차다.

$$
R(u,v)=\varphi_u-\varphi_v
$$

## 성질

L의 핵은 상수 벡터들이므로 기준 전위를 바꾸어도 모든 전위가 같은 만큼 이동할 뿐이다. 따라서 두 점의 전위차와 유효저항은 변하지 않는다.

각 간선의 저항이 1인 세 정점 경로에서는 양 끝 사이 유효저항이 2다. 같은 두 점 사이에 내부 정점을 공유하지 않는 길이 2의 경로를 두 개 놓으면 두 저항 2가 병렬로 연결되어 유효저항은 1이 된다.

이때 최단 경로 길이는 여전히 2다. 유효저항은 최단 경로 하나뿐 아니라 다른 경로를 통한 전류 분산까지 반영한다.

전위 방정식과 에너지 항등식에서 단위 전류를 흘릴 때의 에너지는 유효저항과 같다.

$$
\varphi^{\mathsf T}L\varphi=\varphi^{\mathsf T}b=\varphi_u-\varphi_v=R(u,v)
$$

간선을 추가하거나 전도도를 높이면 유효저항은 증가하지 않는다. 기존 전류 경로를 그대로 사용할 수 있으면서 추가 경로까지 허용되므로 최소 에너지가 커질 수 없다는 원리로 이해할 수 있다.

## 활용

네트워크에서 우회 경로의 풍부함을 측정하고, spectral sparsification에서 간선의 샘플링 중요도를 정한다.

간선의 큰 가중치만으로 중요도를 정하지 않는다. 양 끝 사이에 다른 경로가 얼마나 있는지가 함께 작용한다. 예를 들어 다리 간선은 우회할 수 없어 반드시 모든 단위 전류가 그 간선을 지나간다.

## 기타 참고 문헌

- [Spielman·Srivastava, Graph Sparsification by Effective Resistances](https://arxiv.org/abs/0803.0929): 전기적 해석과 유효저항 기반 샘플링의 연결.
- [Daniel A. Spielman, Effective resistance and Schur complements](https://www.cs.yale.edu/homes/spielman/561/lect08-15.pdf): 전위 방정식과 유효저항.
- 경로와 병렬 경로 예시는 단위 전류의 전위차 또는 직렬·병렬 저항 계산으로 직접 확인할 수 있다.

# 연관 문서

## 선수지식

- [그래프 Laplacian](graph-laplacian.md)

## 더 알아보기

- [논문: Graph Sparsification by Effective Resistances](spectral-sparsification.md)
- [Random walk와 전기 네트워크](random-walks.md)

#graph_theory
