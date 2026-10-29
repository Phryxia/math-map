# Kasteleyn 정리

# 개요

**Kasteleyn 정리(Kasteleyn's theorem)** 는 평면에 그릴 수 있는 그래프의 완전 매칭 수를 행렬식으로 빠르게 셀 수 있다는 정리다. $2\times n$ 판을 $1\times 2$ 도미노로 빈틈없이 덮는 방법의 수는 이웃한 칸을 이은 격자 그래프의 완전 매칭 수이고, 일반 그래프에서 이 수를 세는 일은 [영구식](permanent.md)을 계산하는 것만큼 어렵다. Kasteleyn 정리는 [평면 그래프](planar-graphs.md)의 변에 방향을 잘 주어 만든 반대칭 [행렬](matrices.md)의 Pfaffian 의 절댓값이 완전 매칭 수와 같음을 보이고, Pfaffian 의 제곱은 행렬식이므로 이 수가 다항시간에 계산된다.

# 직관

Kasteleyn 정리는 모든 평면 그래프에 변의 방향을 잘 주면, 그 방향으로 만든 반대칭 행렬의 Pfaffian 의 절댓값이 완전 매칭의 수와 같다는 정리다. Pfaffian 의 제곱은 행렬식이므로 평면 그래프의 완전 매칭 수가 다항시간에 계산된다. P. W. Kasteleyn 이 1961 년과 1967 년에 증명했고, H. N. V. Temperley 와 M. E. Fisher 가 1961 년에 격자의 경우를 독립적으로 계산했다[^1][^2].

일반 그래프의 완전 매칭 수는 영구식처럼 #P(sharp P)-완전이라서, 평면성이 세기를 쉽게 만드는 경우다. 이 방법을 Fisher–Kasteleyn–Temperley 알고리즘(FKT algorithm)이라 한다.

$2\times n$ 판을 $1\times 2$ 도미노로 빈틈없이 덮는 방법의 수는 판의 칸을 꼭짓점으로, 이웃한 두 칸을 변으로 둔 격자 그래프의 완전 매칭 수다. 이분 그래프이므로 이 수는 인접 행렬의 영구식이고, 영구식은 행렬식에서 부호를 지운 것이다. 행렬식은 빨리 계산되지만 부호가 붙어서 항들이 서로 지워진다.

부호를 지우는 대신 행렬의 성분에 부호를 미리 붙여, 행렬식의 모든 항이 같은 부호가 되게 할 수 있으면 행렬식의 절댓값이 그대로 매칭 수다. 성분의 부호는 변마다 $+1$ 또는 $-1$ 을 고르는 것이고, 평면 그래프에서는 각 면의 둘레를 따라 부호를 맞추는 규칙 하나로 이 선택이 항상 가능하다.

# 정의

## Pfaffian

$2n\times 2n$ 반대칭 행렬 $A$($A^{\mathsf T}=-A$)의 **Pfaffian** 은

$$
\mathrm{Pf}(A)=\sum_{M}\mathrm{sgn}(M)\prod_{\lbrace i,j\rbrace\in M,\ i\lt j}a_{ij}
$$

이다. 합은 $\lbrace 1,\dots,2n\rbrace$ 의 완전 매칭 $M=\lbrace\lbrace i_1,j_1\rbrace,\dots,\lbrace i_n,j_n\rbrace\rbrace$ ($i_k\lt j_k$) 전체에 걸치고, $\mathrm{sgn}(M)$ 은 순열 $i_1j_1i_2j_2\cdots i_nj_n$ 의 부호다. A. Cayley 의 정리로 $\mathrm{Pf}(A)^2=\det A$ 다.

## Kasteleyn 방향

평면에 그린 그래프 $G$ 의 각 변에 방향을 주었을 때, 바깥 면이 아닌 모든 면에서 둘레를 시계 방향으로 돌며 방향이 같은 변의 수가 홀수이면 이 방향을 **Kasteleyn 방향(Kasteleyn orientation)** 이라 한다. 방향 $\vec G$ 에 대해 변 $i\to j$ 이면 $a_{ij}=1$, $a_{ji}=-1$, 변이 없으면 $0$ 인 반대칭 행렬을 $A(\vec G)$ 로 쓴다.

# 성질

## Kasteleyn 정리

정리. 꼭짓점이 짝수 개인 평면 그래프 $G$ 에는 Kasteleyn 방향이 있고, 그 방향 $\vec G$ 에 대해

$$
\lvert\mathrm{Pf}(A(\vec G))\rvert=\text{(}G\text{ 의 완전 매칭 수)}
$$

이다[^1].

증명의 요지. 존재는 신장트리의 변에 방향을 아무렇게나 준 뒤, 나머지 변을 바깥에서 안으로 면을 하나씩 닫으며 그 면의 조건이 맞게 정하는 것으로 얻는다. 같음은 두 완전 매칭 $M,M'$ 의 항의 부호를 비교해 보인다. $M\cup M'$ 은 길이가 짝수인 순환들로 나뉘고, 두 항의 부호 비는 순환마다 시계 방향 변 수의 홀짝으로 정해진다. 평면 그래프에서 이런 순환의 안쪽 꼭짓점은 매칭으로 서로 짝지어지므로 그 수가 짝수다. 그러면 Kasteleyn 조건과 Euler 공식으로 순환마다 시계 방향 변이 홀수 개이고, 모든 항의 부호가 같다.

## 도미노 덮기의 수

정리. $m\times n$ 판을 도미노로 덮는 방법의 수는

$$
\prod_{j=1}^{\lceil m/2\rceil}\prod_{k=1}^{\lceil n/2\rceil}\Big(4\cos^2\frac{\pi j}{m+1}+4\cos^2\frac{\pi k}{n+1}\Big)
$$

이다[^2]. $2\times 2$ 판은 $2$ 가지, $8\times 8$ 판은 $12988816$ 가지다.

격자의 Kasteleyn 행렬은 일차원 경로 행렬 둘의 텐서곱 꼴로 쓰여 [고윳값](eigenvalues.md)이 $2\cos$ 꼴로 계산되고, 그 곱이 위 식이다.

## 평면성의 한계

$K_{3,3}$ 을 마이너로 포함하지 않는 그래프에서도 같은 성질의 방향이 있어 완전 매칭 수가 다항시간에 계산된다[^3]. 반면 일반 그래프의 완전 매칭 수 세기는 #P-완전이다.

# 활용

- 통계역학의 이합체 모형(dimer model). 격자 위 이합체 배치의 분배함수가 가중치를 단 Kasteleyn 행렬의 Pfaffian 이고, 칸당 엔트로피가 Catalan 상수 $G$ 를 $\pi$ 로 나눈 값이다.
- [Ising 모형](ising-model.md). 평면 격자 위 Ising 모형의 분배함수가 보조 그래프의 완전 매칭 생성함수로 바뀌어 Pfaffian 으로 계산된다. Onsager 의 이차원 풀이를 다시 얻는 방법이다.
- 세기 문제의 경계. 영구식이 #P-완전인 것과 대조해, 평면 그래프와 그 확장에서는 세기가 다항시간이다. 홀로그래픽 알고리즘(holographic algorithm)은 이 정리를 바탕으로 다른 세기 문제를 평면 완전 매칭 세기로 옮긴다.

[^1]: P. W. Kasteleyn, "The statistics of dimers on a lattice: I. The number of dimer arrangements on a quadratic lattice", Physica 27(12) (1961), 1209–1225. P. W. Kasteleyn, "Graph theory and crystal physics", in *Graph Theory and Theoretical Physics*, Academic Press, 1967, 43–110.
[^2]: H. N. V. Temperley, M. E. Fisher, "Dimer problem in statistical mechanics: an exact result", Philosophical Magazine 6(68) (1961), 1061–1063.
[^3]: C. H. C. Little, "An extension of Kasteleyn's method of enumerating the 1-factors of planar graphs", Combinatorial Mathematics, Lecture Notes in Mathematics 403 (1974), 63–72.

# 연관 문서

## 선수지식

- [평면 그래프](planar-graphs.md)
- [영구식](permanent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #algorithms
