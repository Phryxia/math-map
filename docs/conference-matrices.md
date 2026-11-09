# 회의 행렬

# 개요

**회의 행렬(conference matrix)** 은 대각성분이 $0$ 이고 나머지 성분이 $\pm 1$ 이며 서로 다른 두 행이 직교하는 정사각[행렬](matrices.md)이다. 차수 $12$ 의 [Hadamard 행렬](hadamard-matrices.md)을 만들 때 Paley 구성은 $11$ 을 쓰지만, $q=5$ 처럼 $4$ 로 나눈 나머지가 $1$ 인 소수에서는 같은 구성이 Hadamard 행렬을 주지 않는다. 그 대신 $q=5$ 에서 차수 $6$ 의 회의 행렬이 나오고, 회의 행렬 하나를 네 블록으로 늘리면 차수 $12$ 의 Hadamard 행렬이 된다.

# 직관

$\mathbb F_5$ 에서 $0$ 이 아닌 제곱수는 $1,4$ 다. $\chi(a)$ 를 $a$ 가 $0$ 이 아닌 제곱수이면 $1$, 제곱수가 아니면 $-1$, $a=0$ 이면 $0$ 으로 두고 $Q\_{ab}=\chi(a-b)$ 를 만든다. $-1=4$ 가 제곱수라 $\chi(b-a)=\chi(a-b)$ 이고 $Q$ 는 대칭이다. Hadamard 행렬 문서의 Paley 구성은 $Q$ 가 반대칭인 것을 써서 $I$ 를 더했으므로 여기서는 통하지 않는다.

$I$ 를 더하지 않고 둘레에 $1$ 을 붙이면

$$
C=\begin{pmatrix}0&1&1&1&1&1\cr 1&0&1&-1&-1&1\cr 1&1&0&1&-1&-1\cr 1&-1&1&0&1&-1\cr 1&-1&-1&1&0&1\cr 1&1&-1&-1&1&0\end{pmatrix}
$$

이다. 둘째 행과 셋째 행의 성분별 곱은 $1,0,0,-1,1,-1$ 이고 합이 $0$ 이다. 어느 두 행을 골라도 합이 $0$ 이고, 각 행은 $0$ 이 하나이므로 자기 자신과의 내적이 $5$ 다.

곧 $CC^{\mathsf T}=5I$ 다. 대각에 $0$ 이 하나씩 있다는 것만 빼면 Hadamard 행렬과 같은 성질이다.

# 정의

대각성분이 $0$ 이고 나머지 성분이 $\pm 1$ 인 $n\times n$ 행렬 $C$ 가

$$
CC^{\mathsf T}=(n-1)I
$$

를 만족하면 $C$ 를 차수 $n$ 의 **회의 행렬** 이라 한다[^1]. 직관 절의 $C$ 는 차수 $6$ 이고 대칭이다. 행이나 열에 $-1$ 을 곱하고 행과 열을 같은 순열로 바꾸어 놓아도 회의 행렬이다. 첫 행과 첫 열의 대각 밖 성분을 모두 $1$ 로 맞춘 꼴을 정규화된 회의 행렬이라 한다.

# 성질

## Paley 구성

$q$ 가 소수의 거듭제곱이고 $Q\_{ab}=\chi(a-b)$ 를 [유한체](finite-fields.md) $\mathbb F_q$ 의 원소로 번호 매긴 행렬이라 하자. 첫 행과 첫 열에 $1$ 을 붙인 차수 $q+1$ 의 행렬은 $q\equiv 1\pmod 4$ 이면 대칭 회의 행렬이다[^1]. $QQ^{\mathsf T}=qI-J$ 이고 $Q$ 의 각 행의 합이 $0$ 인 것에서 확인된다. $J$ 는 성분이 모두 $1$ 인 행렬이다. $q\equiv 3\pmod 4$ 이면 첫 열을 $-1$ 로 붙여 반대칭 회의 행렬을 얻고, 거기에 $I$ 를 더한 것이 Hadamard 행렬 문서의 Paley 구성이다.

## Hadamard 행렬로의 두 배 늘리기

$C$ 가 차수 $n$ 의 대칭 회의 행렬이면

$$
H=\begin{pmatrix}C+I&C-I\cr C-I&-C-I\end{pmatrix}
$$

는 차수 $2n$ 의 Hadamard 행렬이다. 성분은 $C$ 의 대각에서 $\pm 1$ 이 되고 나머지에서 그대로 $\pm 1$ 이다.

$C^2=CC^{\mathsf T}=(n-1)I$ 를 쓰면 $HH^{\mathsf T}$ 의 왼쪽 위 블록은 $(C+I)^2+(C-I)^2=2C^2+2I=2nI$ 이고, 오른쪽 위 블록은 $(C+I)(C-I)-(C-I)(C+I)=0$ 이다. 직관 절의 $C$ 에서 차수 $12$ 의 Hadamard 행렬이 나온다. 차수 $q+1$ 의 대칭 회의 행렬이 있으므로 $q\equiv 1\pmod 4$ 이면 차수 $2(q+1)$ 의 Hadamard 행렬이 있다.

## 차수의 조건

차수 $n\gt 2$ 의 회의 행렬은 정규화하면 대칭이거나 반대칭이다. 대칭이면 $n\equiv 2\pmod 4$ 이고, 반대칭이면 $n\equiv 0\pmod 4$ 다[^1]. 대칭 회의 행렬이 있으면 $n-1$ 은 두 정수의 제곱의 합이다[^1]. 그래서 차수 $22$ 의 대칭 회의 행렬은 없다. $21=3\cdot 7$ 은 두 제곱수의 합이 아니다.

## Paley 그래프

$q\equiv 1\pmod 4$ 일 때 $\mathbb F_q$ 의 원소를 정점으로 하고 차가 $0$ 이 아닌 제곱수인 두 원소를 이은 그래프를 [Paley 그래프](paley-graphs.md)라 한다. 이웃이면 $1$, 이웃이 아니면 $-1$, 대각이 $0$ 인 행렬이 위의 $Q$ 다. $q=5$ 이면 각 정점이 차 $\pm 1$ 인 두 정점과 이웃이라 5 각형이다. Paley 그래프는 $\mathrm{srg}(q,(q-1)/2,(q-5)/4,(q-1)/4)$ 인 [강정칙 그래프](strongly-regular-graphs.md)다.

# 활용

- Hadamard 행렬의 구성. Paley 구성 두 가지와 [Kronecker 곱](kronecker-product.md)으로 $4$ 의 배수인 차수를 채운다. $q\equiv 3\pmod 4$ 에서 차수 $q+1$, $q\equiv 1\pmod 4$ 에서 두 배 늘리기로 차수 $2(q+1)$ 이 나온다.
- [등각 직선](equiangular-lines.md). 대칭 회의 행렬 $C$ 에 대해 $I+C/\sqrt{n-1}$ 은 양의 준정부호이고 계수가 $n/2$ 다. 그 Gram 분해로 $\mathbb R^{n/2}$ 에서 서로 같은 각을 이루는 직선 $n$ 개를 얻는다. $n=6$ 이면 정이십면체의 마주 보는 꼭짓점을 이은 직선 여섯 개다.

[^1]: J. H. van Lint, R. M. Wilson, *A Course in Combinatorics*, 2nd ed., Cambridge University Press, 2001. 18 장.

# 연관 문서

## 선수지식

- [Hadamard 행렬](hadamard-matrices.md)

## 더 알아보기

- [강정칙 그래프](strongly-regular-graphs.md)
- [등각 직선](equiangular-lines.md)

#combinatorics #linear_algebra #number_theory
