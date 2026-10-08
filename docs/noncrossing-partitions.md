# 비교차 분할

# 개요

$n$ 개의 점을 원 위에 차례로 놓고 집합의 분할에서 같은 블록의 점을 현으로 잇는다. 어떤 분할에서는 현이 교차하고 어떤 분할에서는 교차하지 않는다.

교차하지 않는 분할만 세면 [Bell 수](bell-numbers.md) 대신 [Catalan 수](catalan-numbers.md)가 나온다. 교차를 버리는 이 조건이 자유확률의 적률 공식과 무작위 행렬의 고윳값 분포에 그대로 나타난다.

# 직관

$n=4$ 에서 모든 분할을 센다. $\lbrace 1,2,3,4\rbrace$ 의 분할은 $15$ 개이고 이것이 Bell 수 $B_4$ 다. 네 점을 원 위에 $1,2,3,4$ 순서로 놓고 블록마다 그 점들을 이어 보면 현이 교차하는 분할은 $\lbrace 1,3\rbrace,\lbrace 2,4\rbrace$ 하나뿐이다. 남는 것이 $14$ 개이고 이것이 Catalan 수 $C_4$ 다.

교차하지 않는 분할을 직접 센다. 원소 $1$ 이 속한 블록을 $\lbrace 1=a_1\lt a_2\lt\dots\lt a_k\rbrace$ 라 하면, 이 블록의 현들이 원의 내부를 $k$ 개의 조각으로 가른다. 다른 블록은 현이 이 블록과 교차하지 않아야 하므로 한 조각 안에 들어 있어야 한다. 조각들은 서로 영향을 주지 않으므로 각 조각에서 비교차 분할을 독립적으로 고르면 된다.

$a_2$ 가 어디인지로 경우를 가르면, $1$ 과 $a_2$ 사이에 놓인 $j$ 개의 원소가 한 조각을 이루고 나머지가 다른 쪽을 이룬다. 두 쪽의 개수를 곱해 더하면 다음 식이 나온다.

$$
f(n)=\sum\_{j=0}^{n-1}f(j)\thinspace f(n-1-j)
$$

이것은 Catalan 수의 점화식이고 $f(0)=1$ 이므로 $f(n)=C_n$ 이다.

# 정의

## 비교차 분할

$\lbrack n\rbrack=\lbrace 1,\dots,n\rbrace$ 의 분할 $\pi$ 가 **비교차 분할**이라는 것은 $a\lt b\lt c\lt d$ 에서 $a,c$ 가 같은 블록이고 $b,d$ 가 같은 블록이면 네 원소가 모두 한 블록에 드는 것이다. 비교차 분할 전체를 $\mathrm{NC}(n)$ 이라 쓴다.

## 격자 구조

$\mathrm{NC}(n)$ 에 분할의 세분 순서를 준다. $\pi\le\sigma$ 는 $\pi$ 의 각 블록이 $\sigma$ 의 어떤 블록에 들어간다는 뜻이다. 이 순서에서 $\mathrm{NC}(n)$ 은 격자이고 최소원이 모든 점을 따로 두는 분할, 최대원이 전체를 한 블록으로 두는 분할이다. 분할 전체의 격자 $\Pi(n)$ 의 부분집합이지만 두 격자의 이음이 다르므로 부분격자는 아니다.

# 성질

## 개수

$\vert\mathrm{NC}(n)\vert=C_n$ 이고 $C_n=\binom{2n}{n}/(n+1)$ 이다. 직관 절의 점화식이 증명이다.

블록이 정확히 $k$ 개인 비교차 분할의 개수는 **Narayana 수**다.

$$
N(n,k)=\frac{1}{n}\binom{n}{k}\binom{n}{k-1}
$$

$k$ 에 대해 더하면 $C_n$ 이 된다. 분할 전체에서 같은 세기를 하면 Stirling 수가 나오므로, 두 수열의 차이가 교차 조건이 얼마를 버리는지를 보여 준다.

## Kreweras 보완

$\pi\in\mathrm{NC}(n)$ 에 대해 $1,\bar 1,2,\bar 2,\dots,n,\bar n$ 을 원 위에 놓고, $\pi$ 와 교차하지 않는 $\bar 1,\dots,\bar n$ 의 분할 가운데 가장 큰 것을 $K(\pi)$ 라 한다. $K$ 는 $\mathrm{NC}(n)$ 에서 순서를 뒤집는 전단사이고 $\vert\pi\vert+\vert K(\pi)\vert=n+1$ 이다[^1]. 따라서 $\mathrm{NC}(n)$ 은 자기쌍대 격자이고 Narayana 수가 $k$ 에 대해 대칭이다.

## 자유 누적량

확률변수의 적률 $m_n$ 과 고전 누적량 $\kappa_n$ 의 관계는 분할 전체에 대한 합이다. 그 합에서 분할의 범위를 비교차 분할로 줄인 것이 **자유 누적량**의 정의다[^2].

$$
m_n=\sum\_{\pi\in\mathrm{NC}(n)}\prod\_{V\in\pi}\kappa\_{\vert V\vert}
$$

두 변수의 혼합 자유 누적량이 모두 $0$ 이라는 것이 자유독립이고, 고전 독립에서 같은 조건을 $\Pi(n)$ 위에서 쓰면 보통의 독립이 된다.

## 반원분포

$\kappa_2$ 만 $0$ 이 아닌 분포가 반원분포다. 위 공식에서 블록 크기가 모두 $2$ 인 비교차 분할만 남으므로 홀수 적률이 $0$ 이고 $2m$ 번째 적률이 비교차 짝짓기의 개수 $C_m$ 이다. 고전 쪽에서 같은 조건을 주면 모든 짝짓기가 남아 $(2m-1)!!$ 과 정규분포가 나온다.

# 활용

- **무작위 행렬의 고윳값.** [Wigner 반원법칙](wigner-semicircle.md)의 적률 계산에서 교차하는 짝짓기가 차원의 거듭제곱에서 밀려나고 비교차 짝짓기만 남는다. 극한 분포의 적률이 $C_m$ 인 근거가 이 세기다.
- **도형 대수의 기저.** [Temperley–Lieb 대수](temperley-lieb-algebras.md)의 기저가 $2n$ 개 점의 비교차 짝짓기이고 차원이 $C_n$ 이다. 곱이 도형을 이어 붙이는 것이므로 비교차 조건이 대수 구조에 그대로 들어간다.
- **반사군의 조합론.** 대칭군의 순환 원소를 호환으로 쪼개는 방법들이 $\mathrm{NC}(n)$ 과 순서를 지키며 대응하고, 이 대응을 다른 반사군으로 넓히면 그 군의 비교차 분할 격자가 정의된다.
- **격자 경로와 타일링.** 비교차 분할을 Dyck 경로로 옮기면 블록 개수가 경로의 봉우리 수가 되어 Narayana 수의 두 번째 해석이 나온다.

[^1]: G. Kreweras, "Sur les partitions non croisées d'un cycle", Discrete Mathematics **1** (1972), 333–350.

[^2]: R. Speicher, "Multiplicative functions on the lattice of non-crossing partitions and free convolution", Mathematische Annalen **298** (1994), 611–628.

# 연관 문서

## 선수지식

- [Catalan 수](catalan-numbers.md)
- [Bell 수](bell-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #probability #order_theory
