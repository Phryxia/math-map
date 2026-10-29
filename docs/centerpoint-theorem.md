# 중심점 정리

# 개요

**중심점 정리(centerpoint theorem)** 는 점이 아무리 흩어져 있어도 어느 쪽으로 반을 잘라도 일정 비율 이상의 점이 남는 깊은 점이 있다는 정리다. 수직선 위의 점 $n$ 개에서는 중앙값이 그런 점이어서, 중앙값을 포함하는 반직선은 어느 방향이든 점을 절반 이상 포함한다. 평면에서는 이런 점이 없을 수 있어 비율을 낮춰야 한다. 중심점 정리는 $d$ 차원에서 비율 $1/(d+1)$ 을 보장하는 점이 있음을 [Helly 정리](helly-theorem.md)로 보인다.

# 직관

중심점 정리는 $\mathbb R^d$ 의 점 $n$ 개에 대해, 어느 닫힌 반공간이 그 점을 포함하든 주어진 점을 $n/(d+1)$ 개 이상 포함하게 되는 점이 존재한다는 정리다. Rado 가 1946 년에 측도의 꼴로 증명했다.[^1]

증명에는 Helly 정리를 쓴다. $d=1$ 에서는 중앙값이 그런 점이다.

수직선 위의 점 $n$ 개에서 중앙값 $m$ 을 잡는다. $m$ 을 포함하는 닫힌 반직선은 $(-\infty,b\rbrack$ 꼴이든 $\lbrack a,\infty)$ 꼴이든 점을 $n/2$ 개 이상 포함한다. 어느 쪽으로 잘라도 $m$ 쪽에 점이 절반 이상 남는다.

평면에서 같은 것을 바라면 $n/2$ 는 너무 크다. 삼각형의 세 꼭짓점 근처에 점을 $n/3$ 개씩 모아 둔다. 삼각형 안의 점 $c$ 를 지나고 한 변에 평행한 직선을 그으면, 그 변의 맞은편 꼭짓점 쪽 반평면은 $c$ 를 포함하면서 점 무리 하나만 담는다. 삼각형 밖의 점 $c$ 는 삼각형과 직선으로 떼어 놓을 수 있어서, $c$ 쪽 반평면에는 점이 하나도 없다. 어느 $c$ 를 잡아도 $n/3$ 개보다 많이 보장할 수 없다.

평면에서는 $n/3$ 이 언제나 보장되고, 이것이 $d=2$ 의 중심점 정리다. 세 무리 예에서는 삼각형의 무게중심이 그런 점이다.

# 정의

## 닫힌 반공간

$\mathbb R^d$ 의 **닫힌 반공간(closed halfspace)** 은 $a\ne 0$ 인 벡터 $a\in\mathbb R^d$ 와 [실수](real-numbers.md) $b$ 로 정하는 집합

$$
H=\lbrace y\in\mathbb R^d : \langle a,y\rangle\ge b\rbrace
$$

이다. 부등호를 $\gt$ 로 바꾼 것은 열린 반공간이다. 닫힌 반공간의 여집합은 열린 반공간이다.

## Tukey 깊이

$P$ 를 $\mathbb R^d$ 의 점 $n$ 개의 모임이라 한다. 점 $x\in\mathbb R^d$ 의 **Tukey 깊이(Tukey depth, halfspace depth)** 는

$$
D_P(x)=\min\lbrace\thinspace\vert P\cap H\vert : H \text{ 는 } x \text{ 를 포함하는 닫힌 반공간}\rbrace
$$

이다. Tukey 가 다변량 자료의 순위를 정하려고 도입했다.[^2]

## 중심점

$D_P(c)\ge n/(d+1)$ 인 점 $c$ 를 $P$ 의 **중심점(centerpoint)** 이라 한다. $c$ 가 $P$ 에 속할 필요는 없다. 깊이가 가장 큰 점들의 무게중심을 **Tukey 중앙값(Tukey median)** 이라 한다.

# 성질

## 중심점 정리

**정리.** $\mathbb R^d$ 의 점 $n$ 개의 모임 $P$ 에는 중심점이 존재한다.

증명. 점을 $dn/(d+1)$ 개보다 많이 포함하는 닫힌 반공간 $H$ 마다 $C_H=\mathrm{conv}(P\cap H)$ 를 둔다. $P\cap H$ 가 가질 수 있는 값은 $P$ 의 부분집합이므로 서로 다른 $C_H$ 는 유한개다.

$C_{H_1},\dots,C_{H_{d+1}}$ 을 고른다. 각 $H_i$ 밖에 있는 점은 $n/(d+1)$ 개보다 적으므로, $H_1,\dots,H_{d+1}$ 중 하나라도 밖에 있는 점은 모두 합쳐 $n$ 개보다 적다. 그래서 $P$ 의 어느 점은 $d+1$ 개의 $H_i$ 에 모두 들고, 그 점이 $C_{H_1}\cap\cdots\cap C_{H_{d+1}}$ 에 속한다. Helly 정리로 모든 $C_H$ 에 공통인 점 $c$ 가 존재한다.

$c$ 가 중심점임을 보인다. $c$ 를 포함하는 닫힌 반공간 $H$ 가 점을 $n/(d+1)$ 개보다 적게 포함한다고 하자. 여집합인 열린 반공간에는 점이 $dn/(d+1)$ 개보다 많다. $P$ 가 유한이므로 경계를 조금 옮겨, 그 열린 반공간 안에 들고 같은 점들을 포함하는 닫힌 반공간 $H'$ 를 잡을 수 있다. 그러면 $c\in C_{H'}\subseteq H'$ 인데 $H'$ 는 $H$ 와 겹치지 않으므로 $c\in H$ 에 모순이다.

## Tverberg 정리로 보는 증명

$r=\lceil n/(d+1)\rceil$ 이면 $(r-1)(d+1)+1\le n$ 이므로, [Tverberg 정리](tverberg-theorem.md)로 $P$ 를 $r$ 개의 부분 $P_1,\dots,P_r$ 로 나누어 볼록 껍질들에 공통점 $c$ 가 있게 할 수 있다. $c$ 를 포함하는 닫힌 반공간 $H$ 가 어느 $P_j$ 의 점도 포함하지 않으면 $\mathrm{conv}(P_j)$ 가 열린 여집합 안에 들어 $c\in\mathrm{conv}(P_j)$ 에 모순이다. 따라서 $H$ 는 부분마다 점을 하나 이상 포함하고 $D_P(c)\ge r$ 이다.

## 상수의 최선성

상수 $1/(d+1)$ 은 더 키울 수 없다. 단체의 꼭짓점 $d+1$ 개 근처에 점을 $n/(d+1)$ 개씩 모으면, 직관 절의 삼각형 논법과 같이 어느 점 $c$ 에 대해서도 $c$ 를 포함하고 점 무리 하나 이하만 담는 닫힌 반공간이 존재한다.

## 깊이 영역

$k$ 를 정수로 두면 $\lbrace x : D_P(x)\ge k\rbrace$ 는 점을 $n-k$ 개보다 많이 포함하는 열린 반공간 전체의 교집합이다. $D_P(x)\lt k$ 는 $x$ 를 포함하고 점을 $k$ 개보다 적게 포함하는 닫힌 반공간이 있다는 뜻이고, 그 반공간의 여집합이 위의 열린 반공간이다. 볼록집합의 교집합이므로 깊이 영역은 볼록이고, 중심점 정리는 $k=\lceil n/(d+1)\rceil$ 에서 이 영역이 비어 있지 않다는 진술이다.

## 측도의 꼴

Rado 의 원래 진술은 측도에 대한 것이다. $\mathbb R^d$ 위의 확률측도 $\mu$ 에 대해 점 $c$ 가 존재해, $c$ 를 포함하는 모든 닫힌 반공간 $H$ 에서 $\mu(H)\ge 1/(d+1)$ 이다.[^1] 점 $n$ 개에 질량 $1/n$ 씩 준 측도에 적용하면 위의 정리가 나온다. 증명은 같은 방식으로 하되, 반공간이 무한히 많으므로 유한 교집합 성질(finite intersection property)과 [콤팩트성](compactness.md)을 함께 쓴다.

## 계산

평면에서는 Jadhav 와 Mukhopadhyay 가 중심점 하나를 $O(n)$ 시간에 찾는 알고리즘을 주었다.[^3] 일반 차원에서는 근사 중심점을 쓴다. Clarkson, Eppstein, Miller, Sturtivant, Teng 의 반복 Radon 점(iterated Radon point) 방법은 점을 $d+2$ 개씩 묶어 묶음마다 Radon 정리(Radon's theorem)의 공통점으로 바꾸는 일을 되풀이해, 깊이가 $n/(d+1)^2$ 정도인 점을 얻는다.[^4]

# 활용

- 다변량 중앙값. Tukey 중앙값은 통계에서 자료의 중심을 정하는 데 쓰이고, 중심점 정리에 따라 그 깊이가 $n/(d+1)$ 이상이다.[^2]
- 기하 분리자. Miller, Teng, Thurston, Vavasis 는 $\mathbb R^d$ 의 공 배치의 교차 그래프를 균형 있게 나누는 분리자를 만들 때, 중심들을 입체사영으로 구면에 올린 뒤 중심점을 원점으로 옮기는 변환을 쓴다.[^5] 원판 배치 정리(circle packing theorem)와 함께 쓰면 [평면 그래프](planar-graphs.md)의 Lipton–Tarjan 분리자 정리가 이 방법으로 다시 증명된다.

[^1]: R. Rado, *A theorem on general measure*, J. London Math. Soc. **21** (1946), 291–300.
[^2]: J. W. Tukey, *Mathematics and the picturing of data*, Proceedings of the International Congress of Mathematicians (Vancouver, 1974), Vol. 2, 1975, 523–531.
[^3]: S. Jadhav, A. Mukhopadhyay, *Computing a centerpoint of a finite planar set of points in linear time*, Discrete Comput. Geom. **12** (1994), 291–312.
[^4]: K. L. Clarkson, D. Eppstein, G. L. Miller, C. Sturtivant, S.-H. Teng, *Approximating center points with iterated Radon points*, Internat. J. Comput. Geom. Appl. **6** (1996), 357–377.
[^5]: G. L. Miller, S.-H. Teng, W. Thurston, S. A. Vavasis, *Separators for sphere-packings and nearest neighbor graphs*, J. ACM **44** (1997), 1–29.

# 연관 문서

## 선수지식

- [Helly 정리](helly-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #combinatorics #statistics
