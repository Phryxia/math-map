# Grassmann 다양체

# 개요

Grassmann 다양체 $\mathrm{Gr}(k,n)$ 은 $n$ 차원 벡터공간의 $k$ 차원 부분공간 하나하나를 점으로 삼은 공간이다. $k=1$ 이면 사영공간이다. 차원이 $k(n-k)$ 인 콤팩트 [다양체](manifolds.md)이고, [외대수](exterior-algebra.md)의 $k$ 차 성분으로 보내는 Plücker 매장이 이것을 사영공간의 닫힌 부분다양체로 놓는다. 부분공간이 고정된 깃발과 만나는 방식으로 공간을 가르면 아핀 공간 조각들이 나오고, 그 조각이 [CW 복합체](cw-complexes.md)(CW complex) 구조와 코호몰로지의 기저를 준다.

# 직관

$\mathbb R^3$ 에서 원점을 지나는 직선 하나를 점 하나로 보면 사영평면이 된다. 원점을 지나는 평면은 법선 직선이 하나씩 딸리므로 평면 전체도 같은 사영평면이다. $\mathbb R^4$ 로 올라가 2 차원 부분공간 전체를 보면 법선도 2 차원이라 같은 종류로 돌아오고, 이 모임에 좌표를 주는 방법이 필요하다.

$\mathbb R^4$ 의 2 차원 부분공간 $W$ 에 기저를 잡아 행벡터로 쌓으면 $2\times 4$ 행렬이 된다. 기저를 바꾸는 것은 왼쪽에 가역인 $2\times 2$ 행렬을 곱하는 것이므로, 행 기약 사다리꼴로 줄이면 $W$ 마다 행렬이 하나로 정해진다.

사다리꼴에서 선행 $1$ 이 놓인 두 열을 정하면 나머지 성분이 자유롭다. 선행 $1$ 이 1 열과 2 열에 있으면 오른쪽 $2\times 2$ 블록의 네 성분이 자유롭고, 그런 $W$ 들이 $\mathbb R^4$ 하나를 이룬다. 선행 $1$ 이 1 열과 3 열이면 자유로운 성분이 셋이다.

네 열에서 두 열을 고르는 방법이 여섯 가지이므로 조각이 여섯이고, 조각마다 차원이 $4,3,2,2,1,0$ 이다. 조각들이 겹치지 않고 전체를 덮으며, 가장 큰 조각의 차원 $4=2\cdot(4-2)$ 가 전체의 차원이다.

# 정의

## 부분공간의 모임

체 $K$ 위의 $n$ 차원 벡터공간 $V$ 에 대해 **Grassmann 다양체** $\mathrm{Gr}(k,V)$ 는 $V$ 의 $k$ 차원 부분공간 전체의 집합이다. $V=K^n$ 일 때 $\mathrm{Gr}(k,n)$ 으로 쓴다. $\mathrm{Gr}(1,n)$ 은 사영공간 $\mathbb P^{n-1}$ 이고 $\mathrm{Gr}(k,n)$ 과 $\mathrm{Gr}(n-k,n)$ 은 직교여공간을 주고받아 동형이다.

$\mathrm{GL}\_n(K)$ 가 부분공간을 옮겨 추이적으로 작용하고, 표준 부분공간의 안정자는 블록 상삼각 부분군 $P$ 다. 그러므로 $\mathrm{Gr}(k,n)$ 은 등질공간 $\mathrm{GL}\_n(K)/P$ 다. $K=\mathbb R$ 에서는 $\mathrm{O}(n)$ 의 작용으로 $\mathrm{O}(n)/\bigl(\mathrm{O}(k)\times\mathrm{O}(n-k)\bigr)$ 가 되고, 이것이 콤팩트성을 준다.

## Plücker 매장

$W\in\mathrm{Gr}(k,V)$ 의 기저 $w_1,\dots,w_k$ 에 대해 외적 $w_1\wedge\cdots\wedge w_k$ 를 잡는다. 기저를 바꾸면 이 값이 기저변환 행렬의 [행렬식](determinants.md) 배로만 달라지므로 사영공간의 점 하나가 정해진다.

$$\mathrm{Gr}(k,V)\hookrightarrow\mathbb P\bigl(\Lambda^k V\bigr),\qquad W\mapsto\lbrack w_1\wedge\cdots\wedge w_k\rbrack$$

이 사상은 단사다. $w_1\wedge\cdots\wedge w_k$ 가 $v\wedge(w_1\wedge\cdots\wedge w_k)=0$ 인 $v$ 들로 $W$ 를 되돌려 주기 때문이다. 상은 Plücker 좌표의 이차식으로 정의되는 닫힌 부분다양체다. $\mathrm{Gr}(2,4)$ 에서는 관계식이 하나다.

$$p\_{12}p\_{34}-p\_{13}p\_{24}+p\_{14}p\_{23}=0$$

# 성질

## 차원과 세포 분할

**정리.** $\mathrm{Gr}(k,n)$ 은 차원 $k(n-k)$ 인 매끄러운 사영다양체이고, 콤팩트이며 연결이다.

부분공간의 열 $F\_1\subset\cdots\subset F\_n=V$ 를 하나 고정한다. $W$ 에 $\dim(W\cap F\_i)$ 의 열을 대응시키면 이 값이 $0$ 에서 $k$ 까지 한 칸씩 뛰고, 뛰는 자리 $k$ 개가 $W$ 를 분류한다. 직관 절에서 선행 $1$ 이 놓인 열이 그 자리다.

뛰는 자리를 고정한 $W$ 들의 모임을 **Schubert 세포**라 한다. 각 세포는 아핀 공간과 동형이고, 세포의 개수는 $\binom{n}{k}$ 다. 복소수 계수에서는 세포의 실차원이 전부 짝수다.

## 코호몰로지

세포 분할이 CW 구조를 주고 홀수 차원 세포가 없으므로 세포 사슬복합체의 경계사상이 전부 $0$ 이다. 그러므로 정수 코호몰로지가 자유 아벨군이고 계수는 세포의 수다.

$$H^\ast\bigl(\mathrm{Gr}(k,\mathbb C^n);\mathbb Z\bigr)=\bigoplus\_\lambda\mathbb Z\thinspace\sigma\_\lambda$$

$\lambda$ 는 $k\times(n-k)$ 상자 안에 들어가는 분할이고 $\sigma\_\lambda$ 는 그 Schubert 세포의 닫힘이 주는 류다. 곱셈 규칙이 [Littlewood–Richardson 규칙](littlewood-richardson.md)과 같고, 이것을 다루는 것이 [Schubert 계산](schubert-calculus.md)이다.

## 보편 다발

$\mathrm{Gr}(k,n)$ 위에 각 점 $W$ 의 올을 $W$ 자신으로 두는 계수 $k$ 인 벡터다발이 있다. **보편 부분다발**이라 한다. $n$ 을 키워 극한으로 얻은 무한 Grassmann 다양체는 계수 $k$ 인 벡터다발의 [분류공간](classifying-spaces.md)이고, 그 코호몰로지가 특성류를 준다.

# 활용

- [Schubert 계산](schubert-calculus.md)은 Schubert 류의 곱을 계산해 교차 문제를 푼다. 일반 위치의 네 직선과 만나는 직선이 $\mathbb P^3$ 에 둘이라는 것이 $\mathrm{Gr}(2,4)$ 에서 $\sigma\_1^4=2$ 로 나온다.
- [외대수](exterior-algebra.md)의 분해가능 원소가 Plücker 매장의 상이다. $\Lambda^k V$ 의 원소가 $k$ 개 벡터의 외적으로 쓰이는지를 판정하는 조건이 Plücker 관계식이다.
- [분류공간](classifying-spaces.md)의 구성에서 $BO(k)$ 와 $BU(k)$ 를 무한 Grassmann 다양체로 실현한다.
- [Borel–Weil–Bott 정리](borel-weil-bott.md)는 $\mathrm{GL}\_n/P$ 위의 선다발 코호몰로지를 표현으로 읽고, $P$ 가 극대 포물형일 때 그 공간이 Grassmann 다양체다.

# 연관 문서

## 선수지식

- [외대수](exterior-algebra.md)
- [다양체](manifolds.md)

## 더 알아보기

- [Schubert 계산](schubert-calculus.md)

#linear_algebra #algebra #differential_geometry #algebraic_topology
