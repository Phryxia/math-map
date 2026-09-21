# Latin 방진

# 개요

Latin 방진은 $n \times n$ 배열의 각 행과 각 열에 $n$ 개 기호가 한 번씩 나타나도록 채운 것이다. 두 방진을 겹쳤을 때 기호쌍이 모두 한 번씩 나타나면 서로 직교한다고 한다.

크기 $n$ 에서 서로 직교하는 방진은 최대 $n-1$ 개이고, 이 최대에 이르는 것과 차수 $n$ 인 사영평면이 있는 것이 동치다. 직교하는 쌍은 $n = 2, 6$ 을 뺀 모든 $n$ 에서 존재한다.

# 직관

밭을 $n \times n$ 구획으로 나누어 비료 $n$ 종을 시험한다. 토양은 남북으로 비옥도가 다르고 동서로 배수가 다르므로, 한 비료를 한 행에 몰아 주면 수확량의 차이가 비료 때문인지 땅 때문인지 가릴 수 없다.

각 비료가 모든 행에 한 번, 모든 열에 한 번 오도록 배치하면 비료마다 좋은 행과 나쁜 행을 똑같이 한 번씩 받는다. $n=3$ 에서 비료를 $A, B, C$ 라 하면 다음이 그런 배치다.

| | 1열 | 2열 | 3열 |
| --- | --- | --- | --- |
| **1행** | $A$ | $B$ | $C$ |
| **2행** | $B$ | $C$ | $A$ |
| **3행** | $C$ | $A$ | $B$ |

살충제 $\alpha, \beta, \gamma$ 도 함께 시험하려 한다. 같은 방식으로 배치하되 비료와 살충제의 조합이 한쪽으로 치우치면 안 되므로, 아홉 칸에 $(A,\alpha), (A,\beta), \dots, (C,\gamma)$ 아홉 쌍이 각각 한 번씩 오게 겹친다. 살충제를 $\alpha\beta\gamma$, $\gamma\alpha\beta$, $\beta\gamma\alpha$ 순으로 행마다 놓으면 아홉 쌍이 모두 한 번씩 나온다.

$n=2$ 에서는 같은 일을 할 수 없다. 배치가 $AB/BA$ 와 $\alpha\beta/\beta\alpha$ 두 가지뿐이고, 어느 쌍을 겹쳐도 네 칸에 두 종류의 쌍만 나온다.

Euler 는 $n=6$ 에서도 되지 않음을 확인하고 $n$ 이 $4$ 로 나눈 나머지가 $2$ 이면 항상 안 된다고 추측했다. 이 추측은 $n=6$ 에서만 맞고 $n=10$ 부터는 틀리다.

# 정의

## Latin 방진

기호 집합 $\lbrace 1,\dots,n\rbrace$ 의 원소를 $n \times n$ 배열에 채워 각 행과 각 열에 모든 기호가 정확히 한 번씩 나타나게 한 것을 크기 $n$ 의 **Latin 방진**이라 한다.

행과 열을 원소로, 칸의 기호를 곱으로 읽으면 Latin 방진은 유한 준군의 곱셈표와 같다. 군의 곱셈표는 언제나 Latin 방진이지만 그 역은 성립하지 않는다.

## 직교성

크기 $n$ 인 두 Latin 방진 $L, L'$ 이 **직교**한다는 것은 쌍 $(L_{ij}, L'\_{ij})$ 가 $n^2$ 개 칸에서 서로 다른 값을 갖는다는 뜻이다. 곧 가능한 기호쌍 $n^2$ 개가 각각 한 번씩 나타난다.

서로 직교하는 방진들의 모임을 **MOLS**(mutually orthogonal Latin squares)라 하고, 크기 $n$ 에서 가능한 최대 개수를 $N(n)$ 으로 쓴다.

# 성질

## 개수의 상한

**정리.** $n \ge 2$ 이면 $N(n) \le n-1$ 이다.

방진들의 기호를 다시 이름 붙여 첫 행을 모두 $1,2,\dots,n$ 으로 맞춘다. 직교하는 두 방진은 같은 칸에 같은 기호를 둘 수 없으므로, $(2,1)$ 칸의 기호가 방진마다 달라야 한다. 그 자리에 올 수 있는 기호는 첫 행에서 이미 쓴 $1$ 을 뺀 $n-1$ 가지다. ∎

## 사영평면과의 동치

**정리(Bose)**[^1]**.** $N(n) = n-1$ 인 것과 차수 $n$ 인 유한 사영평면이 존재하는 것이 동치다.

사영평면의 한 직선을 무한원 직선으로 삼아 빼면 $n^2$ 개 점이 남고, 남은 직선들이 기울기에 따라 $n+1$ 개 평행류로 나뉜다. 두 평행류를 행과 열의 좌표로 쓰고 나머지 $n-1$ 개 평행류가 각각 하나의 Latin 방진을 준다. 서로 다른 평행류의 직선이 꼭 한 점에서 만나므로 방진들이 직교한다. ∎

$n$ 이 소수거듭제곱이면 [유한체](finite-fields.md) $\mathbb F_n$ 위에서 $L^{(a)}\_{ij} = ai + j$ 로 두어 $a \neq 0$ 마다 방진을 얻고, 이들이 서로 직교하므로 $N(n) = n-1$ 이다.

## Euler 추측의 반증

**정리(Bose–Shrikhande–Parker)**[^2]**.** $n \neq 2, 6$ 이면 $N(n) \ge 2$ 다.

$n = 6$ 이 불가능한 것은 Tarry 가 경우를 나누어 확인했다.[^3] 나머지 $n \equiv 2 \pmod 4$ 에서는 $n = 10$ 의 직교쌍을 직접 구성한 뒤, 작은 방진에서 큰 방진을 만드는 곱 구성과 부분 방진 교체를 써서 모든 $n \ge 10$ 을 덮는다. ∎

$N(n)$ 은 $n$ 이 커지면 함께 커진다. 알려진 하한은 $n$ 이 충분히 크면 $N(n) \ge n^{1/14.8}$ 이다.[^4]

# 활용

- 실험계획법의 Latin 방진 설계가 두 방향의 방해 요인을 통제한다. 직교하는 방진을 겹치면 요인을 하나 더 통제하고, 이 설계가 Graeco-Latin 방진 설계다.
- [오류정정부호](error-correcting-codes.md)와 대응한다. 크기 $n$ 의 MOLS $k$ 개가 길이 $k+2$, 최소거리 $k+1$ 인 $n$ 진 MDS(maximum distance separable) 부호와 같은 대상이다.
- [조합적 설계](block-designs.md)의 구성 재료다. 횡단 설계를 MOLS 로 만들고, 거기서 균형 불완전 블록 설계를 얻는다.
- 스도쿠는 크기 $9$ 의 Latin 방진에 $3 \times 3$ 상자 조건을 더한 것이다. 상자 조건이 있는 방진의 개수를 세는 문제가 조합적 열거의 예제가 된다.

[^1]: R. C. Bose, "On the application of the properties of Galois fields to the problem of construction of hyper-Graeco-Latin squares", *Sankhyā* 3 (1938), 323–338.

[^2]: R. C. Bose, S. S. Shrikhande, and E. T. Parker, "Further results on the construction of mutually orthogonal Latin squares and the falsity of Euler's conjecture", *Canadian Journal of Mathematics* 12 (1960), 189–203.

[^3]: G. Tarry, "Le problème des 36 officiers", *Comptes Rendus de l'Association Française pour l'Avancement des Sciences* 29 (1900), 170–203.

[^4]: T. Beth, "Eine Bemerkung zur Abschätzung der Anzahl orthogonaler lateinischer Quadrate mittels Siebverfahren", *Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg* 53 (1983), 284–288.

# 연관 문서

## 선수지식

- [조합적 설계](block-designs.md)

## 더 알아보기

- [유한 사영평면](finite-projective-planes.md)

#combinatorics #statistics #algebra
