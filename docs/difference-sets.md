# 차분집합

# 개요

**차분집합(difference set)** 은 군의 부분집합 가운데, 원소 두 개의 차로 단위원이 아닌 모든 원소가 같은 횟수씩 나오는 것이다. 시계 위의 일곱 칸 $0,\dots,6$ 에서 $\lbrace 1,2,4\rbrace$ 를 고르면, 세 칸 사이의 거리 $1,2,3$ 과 그 반대 방향 $6,5,4$ 가 $1$ 부터 $6$ 까지를 한 번씩 덮는다. 이 집합을 한 칸씩 돌린 일곱 개를 블록으로 쓰면 Fano 평면이 나오듯, 차분집합 하나로 [조합적 설계](block-designs.md) 전체를 적는다.

# 직관

$\mathbb Z/7$ 에서 $D=\lbrace 1,2,4\rbrace$ 의 서로 다른 두 원소의 차 $d-d'$ 을 전부 적으면

$$
2-1=1,\quad 4-2=2,\quad 4-1=3,\quad 1-4=4,\quad 2-4=5,\quad 1-2=6
$$

이다. $0$ 이 아닌 원소 여섯 개가 정확히 한 번씩 나온다.

$D$ 를 $g$ 만큼 옮긴 $D+g$ 일곱 개 $\lbrace 1,2,4\rbrace,\lbrace 2,3,5\rbrace,\dots,\lbrace 0,1,3\rbrace$ 를 블록으로 삼는다. 두 점 $x\ne y$ 가 함께 들어 있는 블록 $D+g$ 는 $x-g$, $y-g$ 가 모두 $D$ 에 있는 것이고, 그 차 $x-y$ 가 $D$ 의 차로 한 번만 나오므로 $g$ 가 하나로 정해진다. 그래서 어느 두 점도 정확히 한 블록에 함께 들어가고, 이것이 Fano 평면이다. 설계 전체가 집합 $\lbrace 1,2,4\rbrace$ 하나와 $\mathbb Z/7$ 의 덧셈으로 정해진다.

# 정의

$G$ 를 위수 $v$ 인 군이라 하자. 원소 $k$ 개의 부분집합 $D\subseteq G$ 가 단위원이 아닌 모든 $g\in G$ 를 $g=dd'^{-1}$ ($d,d'\in D$) 꼴로 정확히 $\lambda$ 번씩 나타내면 $D$ 를 $(v,k,\lambda)$ **차분집합** 이라 한다. 가환군이면 $g=d-d'$ 으로 쓴다. 직관 절의 $\lbrace 1,2,4\rbrace\subseteq\mathbb Z/7$ 은 $(7,3,1)$ 차분집합이다. $n=k-\lambda$ 를 차분집합의 차수(order)라 한다.

순서쌍 $(d,d')$, $d\ne d'$ 은 $k(k-1)$ 개이고 각 $g\ne e$ 에 $\lambda$ 개씩 가므로

$$
k(k-1)=\lambda(v-1)
$$

이다. $(7,3,1)$ 에서 $6=6$ 이다.

# 성질

## 대칭 설계

$D$ 가 $(v,k,\lambda)$ 차분집합이면 평행이동 $Dg$ ($g\in G$) 를 블록으로 하는 설계는 점 $v$ 개, 블록 $v$ 개, 블록 크기 $k$ 이고 어느 두 점도 정확히 $\lambda$ 개의 블록에 함께 들어가는 대칭 설계다. 증명은 직관 절의 계산과 같다. $G$ 는 오른쪽 곱으로 점과 블록 위에 작용하고, 점 하나를 다른 점 하나로 보내는 원소가 정확히 하나다.

## 지표 판정

$G$ 가 가환이면, $D$ 가 $(v,k,\lambda)$ 차분집합인 것은 자명하지 않은 모든 지표 $\chi:G\to\mathbb C^\times$ 에 대해

$$
\Bigl\vert\sum_{d\in D}\chi(d)\Bigr\vert^2=k-\lambda
$$

인 것과 동치다[^1]. 좌변을 전개하면 $\sum_{d,d'}\chi(d-d')$ 이고, 차의 개수가 고르면 $k+\lambda\sum_{g\ne 0}\chi(g)=k-\lambda$ 다. 역은 [이산 Fourier 변환](fourier.md)의 역변환으로 차의 개수를 되찾는 것이다. $\mathbb Z/7$ 에서 $\zeta=e^{2\pi i/7}$ 로 두면 $\zeta+\zeta^2+\zeta^4=\frac{-1+i\sqrt7}2$ 이고 절댓값의 제곱이 $\frac{1+7}4=2=3-1$ 이다.

## Paley 차분집합

$p$ 가 $4$ 로 나눈 나머지가 $3$ 인 소수이면 $\mathbb Z/p$ 의 $0$ 이 아닌 제곱수 전체는 $\bigl(p,\frac{p-1}2,\frac{p-3}4\bigr)$ 차분집합이다. $-1$ 이 제곱수가 아니므로 차 $d-d'$ 이 제곱수인 쌍과 제곱수가 아닌 쌍이 같은 수만큼 있고, 제곱수 $a$ 를 곱하는 것이 $D$ 를 보존해 같은 종류의 원소는 같은 횟수씩 나온다. $p=7$ 이면 $\lbrace 1,2,4\rbrace$, $p=11$ 이면 $\lbrace 1,3,4,5,9\rbrace$ 가 $(11,5,2)$ 차분집합이다.

## Singer 차분집합

$q$ 가 소수의 거듭제곱이면 $\mathbb Z/(q^2+q+1)$ 에 $(q^2+q+1,\thinspace q+1,\thinspace 1)$ 차분집합이 있다[^2]. 차수 $q$ 의 [유한 사영평면](finite-projective-planes.md) 위에 점을 하나씩 돌리는 순환군이 작용하고, 직선 하나가 차분집합이다. $q=2$ 가 직관 절의 $\lbrace 1,2,4\rbrace$ 이고, $q=3$ 이면 $\lbrace 0,1,3,9\rbrace\subseteq\mathbb Z/13$ 이다. 이 집합의 차 열두 개는 $1,2,\dots,12$ 를 한 번씩 덮는다.

## 승수 정리

$D$ 가 가환군의 $(v,k,\lambda)$ 차분집합이고 소수 $p$ 가 $n=k-\lambda$ 를 나누며 $p\gt\lambda$, $\gcd(p,v)=1$ 이면, $pD=\lbrace pd:d\in D\rbrace$ 는 $D$ 의 평행이동 $D+g$ 하나와 같다[^3]. 이런 $p$ 를 승수(multiplier)라 한다. $\lbrace 1,2,4\rbrace$ 는 $n=2$ 이고 $2D=\lbrace 2,4,1\rbrace=D$ 다. 이 정리로 주어진 매개변수의 차분집합이 없음을 보이거나 찾을 범위를 줄인다.

# 활용

- 두 수준 자기상관 수열. $(v,k,\lambda)$ 순환 차분집합 $D$ 에서 $a_i=-1$ ($i\in D$), $a_i=1$ ($i\notin D$) 로 둔 길이 $v$ 의 주기 수열은 $0$ 이 아닌 모든 이동 $s$ 에서 $\sum_ia_ia\_{i+s}=v-4(k-\lambda)$ 다. $\lbrace 1,2,4\rbrace$ 에서 이 값은 $7-8=-1$ 이고, 레이더와 통신의 동기 신호로 쓴다.
- [굽은 함수](bent-functions.md). $\mathbb F_2^m$ 위의 굽은 함수가 $1$ 인 점의 집합이 Hadamard 차분집합이다.
- [Hadamard 행렬](hadamard-matrices.md). $(4t-1,2t-1,t-1)$ 차분집합에서 Hadamard 행렬을 만든다. Paley 차분집합에서 얻는 것이 Hadamard 행렬 문서의 Paley 구성이다.

[^1]: T. Beth, D. Jungnickel, H. Lenz, *Design Theory*, 2nd ed., Cambridge University Press, 1999. 6 장.
[^2]: J. Singer, "A theorem in finite projective geometry and some applications to number theory", *Transactions of the American Mathematical Society* 43 (1938), 377–385.
[^3]: M. Hall Jr., "Cyclic projective planes", *Duke Mathematical Journal* 14 (1947), 1079–1090.

# 연관 문서

## 선수지식

- [조합적 설계](block-designs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #group_theory #number_theory
