# Kneser 그래프

# 개요

**Kneser 그래프(Kneser graph)** $K(n,k)$ 는 $\lbrace 1,\dots,n\rbrace$ 의 $k$ 원소 부분집합을 정점으로 하고, 서로 만나지 않는 두 부분집합을 간선으로 잇는 그래프다. 독립집합은 [Erdős–Ko–Rado 정리](erdos-ko-rado.md)의 교차족이고, 채색수가 $n-2k+2$ 라는 Lovász 정리(Lovász's theorem)는 [Borsuk–Ulam 정리](borsuk-ulam.md)로 증명된다.

# 직관

$\lbrace 1,\dots,n\rbrace$ 의 $k$ 원소 부분집합을 몇 개의 묶음으로 나눠, 같은 묶음 안의 두 집합은 언제나 만나게 하려 한다. 묶음이 몇 개 필요한지 알고 싶다. 각 묶음은 교차족이고 Erdős–Ko–Rado 정리에 따라 $n\ge 2k$ 이면 원소가 많아야 $\binom{n-1}{k-1}$ 개이므로, 묶음은

$$
\binom nk\Big/\binom{n-1}{k-1}=\frac nk
$$

개 이상 있어야 한다.

묶음을 실제로 만든다. 집합 $S$ 를 가장 작은 원소 $\min S$ 로 묶으면 같은 묶음의 집합은 그 원소를 공유한다. 다만 $\min S\ge n-2k+2$ 인 집합들은 모두 $2k-1$ 원소 집합 $\lbrace n-2k+2,\dots,n\rbrace$ 안에 있고, $2k-1$ 원소 집합의 $k$ 원소 부분집합 둘은 반드시 만나므로 이들을 한 묶음으로 합친다. 묶음은 $\min S=1,\dots,n-2k+1$ 인 것과 마지막 하나를 합쳐 $n-2k+2$ 개다.

$n=5$, $k=2$ 이면 하한이 $5/2$ 이므로 $3$ 이상이고 구성이 $3$ 개를 주어 답이 $3$ 이다. $n=3k$ 이면 하한은 $3$ 인데 구성은 $k+2$ 개다. 세기로는 이 차이가 줄지 않는다. 묶음을 $n-2k+1$ 개로 줄일 수 없다는 것이 Lovász 정리이고, 그 증명은 구면 위의 대척점을 쓴다.

# 정의

$n\ge 2k\ge 2$ 에서 정점 집합이 $\binom{\lbrack n\rbrack}{k}$, 곧 $\lbrack n\rbrack=\lbrace 1,\dots,n\rbrace$ 의 $k$ 원소 부분집합 전체이고, $S\cap T=\emptyset$ 일 때 $S$ 와 $T$ 를 간선으로 잇는 그래프를 $K(n,k)$ 라 한다.

- $K(n,1)$ 은 완전그래프 $K_n$ 이다.
- $K(2k,k)$ 는 여집합끼리 잇는 완전 매칭이다.
- $K(5,2)$ 는 Petersen 그래프(Petersen graph)다.
- $K(2k+1,k)$ 를 **홀수 그래프(odd graph)** $O_{k+1}$ 이라 한다.

$K(n,k)$ 는 $\binom{n-k}{k}$ 정칙 그래프이고, $\lbrack n\rbrack$ 의 치환이 정점에 추이적으로 작용한다.

# 성질

## 독립수

$n\ge 2k$ 이면 독립수는 $\alpha(K(n,k))=\binom{n-1}{k-1}$ 이다. 독립집합이 교차족이므로 Erdős–Ko–Rado 정리와 같은 진술이다.

인접행렬의 고윳값은 $j=0,1,\dots,k$ 에 대해

$$
\lambda_j=(-1)^j\binom{n-k-j}{k-j}
$$

이고, 가장 큰 값은 $\lambda_0=\binom{n-k}{k}$, 가장 작은 값은 $\lambda_1=-\binom{n-k-1}{k-1}$ 이다. 정칙 그래프의 독립수에 대한 Hoffman 비율 한계(Hoffman ratio bound) $\alpha\le N\cdot\frac{-\lambda_{\min}}{\lambda_{\max}-\lambda_{\min}}$ 에 넣으면 $\binom{n-k}{k}=\binom{n-k-1}{k-1}\frac{n-k}{k}$ 이므로

$$
\alpha\le\binom nk\frac{\binom{n-k-1}{k-1}}{\binom{n-k-1}{k-1}\frac nk}=\binom{n-1}{k-1}
$$

이 되어 Erdős–Ko–Rado 정리의 다른 증명이 나온다.[^1]

## Lovász 정리

**정리(Lovász, 1978).** $n\ge 2k$ 이면 $\chi(K(n,k))=n-2k+2$ 다.[^2]

윗한계는 직관 절의 구성이다. 아랫한계 증명의 요지(Greene). $d=n-2k+1$ 로 두고 $K(n,k)$ 를 $d$ 색으로 칠했다고 하자. 구면 $S^d$ 위에 $n$ 개의 점을, 원점을 지나는 어떤 초평면에도 $d+1$ 개가 놓이지 않게 둔다. $x\in S^d$ 의 열린 반구를 $H(x)=\lbrace y:\langle x,y\rangle\gt 0\rbrace$ 라 하고, $i=1,\dots,d$ 마다 $H(x)$ 안에 놓인 점들 가운데 색 $i$ 인 $k$ 원소 집합이 있는 $x$ 의 집합을 $U_i$ 로, 나머지를 $F=S^d\setminus(U_1\cup\dots\cup U_d)$ 로 둔다. $U_i$ 는 열린집합이고 $F$ 는 닫힌집합이다. 열린집합과 닫힌집합이 섞인 Lusternik–Schnirelmann 덮개 정리로 한 집합이 대척점 쌍 $x$, $-x$ 를 포함한다.

- $x,-x\in U_i$ 이면 $H(x)$ 와 $H(-x)$ 가 서로 만나지 않으므로 색 $i$ 인 서로 만나지 않는 두 집합이 생겨 색칠에 모순이다.
- $x,-x\in F$ 이면 두 반구에 점이 각각 $k-1$ 개 이하다. $k$ 개 이상이면 그 가운데 $k$ 개가 어떤 색을 받아 $x$ 가 그 색의 $U_i$ 에 들어가기 때문이다. 그러면 초평면 $x^\perp$ 위에 점이 $n-2(k-1)=d+1$ 개 이상 놓여 점의 배치에 모순이다.[^3]

## 분수 채색수

정점 추이적 그래프의 분수 채색수(fractional chromatic number)는 정점 수를 독립수로 나눈 값이므로 $\chi_f(K(n,k))=n/k$ 다. 직관 절의 세기 하한이 이 값이고, $n=3k$ 에서 $\chi_f=3$ 과 $\chi=k+2$ 의 차이는 $k$ 와 함께 커진다.

## Schrijver 그래프

원 위에 $1,\dots,n$ 을 놓고 이웃한 두 수를 함께 담지 않는 $k$ 원소 집합만 정점으로 남긴 $K(n,k)$ 의 유도 부분그래프를 Schrijver 그래프(Schrijver graph) $SG(n,k)$ 라 한다. $SG(n,k)$ 의 채색수도 $n-2k+2$ 이고, 정점을 하나라도 빼면 채색수가 줄어든다.[^4]

# 활용

- **[그래프 색칠](graph-coloring.md)의 위상적 하한.** 그래프에 단체복합체나 대칭 공간을 대응시키고 그 공간의 연결도로 채색수의 하한을 얻는 방법이 있고, Kneser 그래프는 이 하한이 채색수와 같아지는 기본 예다.
- **[Tucker 보조정리](tucker-lemma.md)의 조합적 증명.** Lovász 정리의 하한은 연속함수 없이 Tucker 보조정리로도 증명되고, 이 경로가 위상적 조합론의 정리를 조합적 증명으로 바꾸는 예가 된다.
- **Erdős–Ko–Rado 정리의 스펙트럼 증명.** 성질 절의 고윳값 계산으로 교차족의 크기 상한을 얻는 방법은 $t$ 교차족과 벡터 공간 판본으로 넓혀진다.

[^1]: L. Lovász, "On the Shannon capacity of a graph", IEEE Transactions on Information Theory 25 (1979), 1–7.
[^2]: L. Lovász, "Kneser's conjecture, chromatic number, and homotopy", Journal of Combinatorial Theory, Series A 25 (1978), 319–324.
[^3]: J. E. Greene, "A new short proof of Kneser's conjecture", American Mathematical Monthly 109 (2002), 918–920.
[^4]: A. Schrijver, "Vertex-critical subgraphs of Kneser graphs", Nieuw Archief voor Wiskunde 26 (1978), 454–461.

# 연관 문서

## 선수지식

- [Erdős–Ko–Rado 정리](erdos-ko-rado.md)
- [Borsuk–Ulam 정리](borsuk-ulam.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #algebraic_topology
