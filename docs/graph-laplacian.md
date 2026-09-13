# 그래프 Laplacian

그래프 Laplacian은 정점 값과 이웃 값의 차이를 선형 연산으로 계산한다.

## 정의

G를 n개 정점을 갖는 유한 단순 무향 그래프라 하고 정점을 1부터 n까지 번호 붙이자. 간선의 양의 가중치를 wᵢⱼ라 쓰며, 간선이 없거나 두 번호가 같으면 가중치를 0으로 둔다. 무향이므로 wᵢⱼ와 wⱼᵢ는 같다.

W는 이 가중치들을 원소로 갖는 행렬, D는 각 정점의 가중 차수를 대각에 적은 행렬이다. 비정규화 Laplacian L은 다음과 같다.

$$
D_{ii}=\sum_{j=1}^{n}w_{ij},\qquad D_{ij}=0\ (i\ne j),\qquad L=D-W
$$

x를 각 정점에 실수값을 주는 열벡터라 하자. i번째 출력은 이웃과의 차이를 가중합한 값이다.

$$
(Lx)_i=\sum_{j=1}^{n}w_{ij}(x_i-x_j)
$$

## 성질

E를 간선 집합이라 하자. x의 전치를 xᵀ로 쓰면 다음 에너지 항등식이 성립한다. 오른쪽에서는 각 무향 간선을 한 번만 센다.

$$
x^{\mathsf T}Lx=\sum_{\{i,j\}\in E}w_{ij}(x_i-x_j)^2
$$

각 항이 음이 아니므로 L은 positive semidefinite다. 이것은 모든 x에 대해 이 이차형식이 음이 아니라는 뜻이다.

에너지가 0이려면 모든 간선의 두 끝점 값이 같아야 한다. 따라서 핵은 각 연결 성분에서 상수인 벡터들로 이루어지고, 핵의 차원은 연결 성분 수다.

간선 가중치가 모두 1인 세 정점 경로 1-2-3의 Laplacian은 다음과 같다.

$$
L=\begin{pmatrix}1&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix}
$$

x를 차례로 0, 1, 0인 열벡터로 정하면 에너지는 2다. 두 간선에서 각각 값 차의 제곱 1을 더한 결과다. 모든 정점 값에 같은 상수를 더해도 에너지는 변하지 않는다.

## 활용

그래프 신호의 매끄러움, 전기 회로의 전위, 확산, 그래프를 간선 수가 적은 그래프로 근사하는 문제를 표현한다.

normalized Laplacian은 차수에 따른 정규화를 추가한 다른 행렬이다. 고유값에 관한 정리를 적용할 때 어떤 Laplacian을 쓰는지 구분해야 한다.

## 기타 참고 문헌

- [Daniel A. Spielman, The Laplacian Matrix and Spectral Graph Drawing](https://www.cs.yale.edu/homes/spielman/561/lect02-15.pdf): Laplacian과 이차형식.
- 에너지 항등식은 xᵀDx에서 xᵀWx를 빼고 각 무향 간선의 두 방향 항을 모으면 증명된다. 핵에 관한 결과는 그 항등식에서 바로 따른다.

# 연관 문서

## 선수지식

- [그래프](graphs.md)
- [선형사상](linear-maps.md)

## 더 알아보기

- [유효저항](effective-resistance.md)

#graph_theory #linear_algebra
