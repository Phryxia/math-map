# Wiedemann 알고리즘

# 개요

**Wiedemann 알고리즘(Wiedemann's algorithm)** 은 성분 대부분이 $0$ 인 큰 [행렬](matrices.md)의 연립일차방정식을 행렬을 고치지 않고 푸는 알고리즘이다. 성분이 $0$ 과 $1$ 인 백만 행 백만 열 행렬에 [Gauss 소거](gaussian-elimination.md)를 쓰면 소거 도중 $0$ 이던 자리가 차올라 저장할 성분이 크게 늘어난다. Wiedemann 알고리즘은 행렬과 벡터의 곱만 되풀이해 얻은 수열의 점화식에서 해를 만들어, 행렬을 저장된 그대로 둔 채 방정식을 푼다.

# 직관

Wiedemann 알고리즘은 체 위의 희소행렬 $A$ 로 주어진 선형계 $Ax=b$ 를 행렬-벡터 곱과 [Berlekamp–Massey 알고리즘](berlekamp-massey.md)만으로 푸는 알고리즘이다. 스칼라 수열 $u^{\mathsf T}A^ib$ 의 가장 짧은 점화식에서 $A$ 의 [최소다항식](minimal-polynomial.md)의 인수를 얻고, 그 다항식으로 $A^{-1}b$ 를 $b,Ab,A^2b,\dots$ 의 일차결합으로 쓴다.

$A$ 가 $n\times n$ 이고 $0$ 이 아닌 성분이 $w$ 개이면 비용은 $O(nw+n^2)$ 번의 체 연산이다. 행렬을 바꾸지 않으므로 Gauss 소거에서 생기는 채움(fill-in)이 없고, [이차 체](quadratic-sieve.md)와 [수체 체](number-field-sieve.md)의 $\mathbb F_2$ 위 선형대수 단계가 이 방법의 블록판을 쓴다.

$A=\begin{pmatrix}2&1\cr 0&2\end{pmatrix}$ 에서 $Ax=b$, $b=(0,1)$ 을 푼다. 최소다항식이 $x^2-4x+4$ 이므로 $A^2-4A+4I=0$ 이고, 양변에 $A^{-1}$ 을 곱하면 $A^{-1}=(4I-A)/4$ 다. 그러면

$$
x=A^{-1}b=\frac{4b-Ab}{4}=\frac{(0,4)-(1,2)}{4}=\Bigl(-\frac14,\frac12\Bigr)
$$

이고, $A$ 의 역행렬을 구하지 않고 $Ab$ 한 번의 곱으로 답이 나온다.

$n$ 이 수백만이고 행마다 $0$ 이 아닌 성분이 수십 개인 행렬에서는 최소다항식을 이렇게 얻을 수 없다. $A^2,A^3,\dots$ 을 계산하면 행렬이 금방 꽉 차기 때문이다. 벡터 $b,Ab,A^2b,\dots$ 은 곱 한 번에 $w$ 번의 연산이면 얻는다. 벡터 하나하나를 다루는 대신 첫 성분만 보면 수열 $0,1,4,12$ 가 나오고, 이 수열은 $s_j=4s_{j-1}-4s_{j-2}$ 를 만족한다. 가장 짧은 점화식을 찾는 Berlekamp–Massey 알고리즘이 이 수열에서 $1-4x+4x^2$ 을 주고, 계수를 뒤집으면 최소다항식 $x^2-4x+4$ 다.

# 정의

## 벡터의 최소다항식

$A\in M\_n(F)$, $b\in F^n$ 에 대해 $p(A)b=0$ 인 다항식 전체는 $F\lbrack x\rbrack$ 의 아이디얼이고, 그 일계수 생성원을 **$b$ 의 $A$-최소다항식(minimal polynomial of b relative to A)** $m\_{A,b}$ 라 한다. $m\_A(A)b=0$ 이므로 $m\_{A,b}$ 는 $m\_A$ 를 나눈다.

$u\in F^n$ 에 대해 $s_i=u^{\mathsf T}A^ib$ 로 두면, $p(A)b=0$ 인 $p=\sum_k p_kx^k$ 마다 $\sum_k p_ks_{i+k}=u^{\mathsf T}A^ip(A)b=0$ 이다. 그러므로 수열 $(s_i)$ 의 최소다항식 $f\_u$ 는 $m\_{A,b}$ 를 나눈다. 수열의 선형 복잡도가 $n$ 이하이므로 처음 $2n$ 항이 $f\_u$ 를 정한다.

## 알고리즘

$A$ 가 가역이고 $b\ne 0$ 이라 한다.

1. $u$ 를 무작위로 고르고 $s_i=u^{\mathsf T}A^ib$ 를 $i=0,\dots,2n-1$ 에서 계산한다. 행렬-벡터 곱 $2n$ 번이다.
2. Berlekamp–Massey 알고리즘으로 연결 다항식 $C$ 와 길이 $L$ 을 구하고, 뒤집은 다항식 $f(x)=x^LC(1/x)=\sum_{k=0}^{L}f_kx^k$ 를 얻는다.
3. $f(A)b=0$ 이면 $f\_0\ne 0$ 이고 $x=-f\_0^{-1}\sum_{k=1}^{L}f_kA^{k-1}b$ 가 해다. 아니면 새 $u$ 로 1 단계부터 다시 하고, 얻은 다항식들의 최소공배수를 쓴다.

$A$ 가 가역이면 $m\_A(0)\ne 0$ 이므로 그 인수인 $f$ 도 $f(0)=f\_0\ne 0$ 이다. 3 단계의 식은 $f(A)b=0$ 의 양변에서 $f\_0b$ 를 넘기고 $A^{-1}$ 을 곱한 것이다.

```javascript
// matVec(A, v) 는 희소행렬 곱, berlekampMassey 는 연결 다항식 C 와 길이 L 을 돌려준다.
function wiedemannSolve(A, b, F, randomVector) {
  const n = b.length;
  while (true) {
    const u = randomVector(n);
    const s = [];
    let v = b;
    for (let i = 0; i < 2 * n; i++) { s.push(dot(u, v, F)); v = matVec(A, v, F); }
    const { C, L } = berlekampMassey(s, F);
    const f = Array.from({ length: L + 1 }, (v, k) => C[L - k] ?? F.zero); // f[k] 는 x^k 의 계수
    // x = -(1/f0) * sum_{k>=1} f[k] A^{k-1} b 를 Horner 방식으로 계산한다
    let acc = scale(b, f[L], F);
    for (let k = L - 1; k >= 1; k--) acc = addVec(matVec(A, acc, F), scale(b, f[k], F), F);
    const x = scale(acc, F.div(F.sub(F.zero, F.one), f[0]), F);
    if (equalVec(matVec(A, x, F), b)) return x; // f(A)b = 0 이었는지 확인
  }
}
```

# 성질

## 비용

1 단계는 행렬-벡터 곱 $2n$ 번과 내적 $2n$ 번으로 $O(nw+n^2)$ 이다. 2 단계는 Berlekamp–Massey 알고리즘의 $O(n^2)$ 이고, 3 단계는 곱 $L\le n$ 번이다. 저장하는 것은 $A$ 와 벡터 몇 개뿐이어서 메모리가 $O(w+n)$ 이다. Gauss 소거는 $O(n^3)$ 연산과 채움으로 커지는 $O(n^2)$ 메모리가 든다.

## 사영의 성공 확률

$f\_u=m\_{A,b}$ 가 아닌 $u$ 는 $F^n$ 의 진부분공간 몇 개의 합집합에 놓인다. $F$ 가 위수 $q$ 의 [유한체](finite-fields.md)이면 무작위 $u$ 가 그 합집합에 들 확률은 $q$ 가 클수록 작다. $\mathbb F_2$ 처럼 $q$ 가 작으면 실패가 자주 일어나므로 여러 $u$ 의 결과를 최소공배수로 합친다.[^1]

## 특이 행렬과 영공간

인수분해의 선형대수 단계는 $\mathbb F_2$ 위의 특이 행렬 $A$ 에서 $Ax=0$ 인 $x\ne 0$ 을 찾는다. 무작위 $z$ 에서 $b=Az$ 로 두고 $m\_{A,b}(x)=x^eg(x)$, $g(0)\ne 0$ 으로 쓰고 $y=g(A)z$ 로 두면 $A^{e+1}y=m\_{A,b}(A)b=0$ 이다. $y\ne 0$ 이면 $y,Ay,\dots,A^ey$ 가운데 $0$ 이 아닌 마지막 벡터가 영공간의 원소다.

## 블록 Wiedemann

Coppersmith 의 **블록 Wiedemann 알고리즘(block Wiedemann algorithm)** 은 $u$ 와 $b$ 를 $m$ 개, $k$ 개의 벡터를 모은 행렬로 바꾸어 행렬 수열 $U^{\mathsf T}A^iB$ 를 쓴다. 필요한 항이 대략 $n/m+n/k$ 개로 줄고, $k$ 개의 열에 대한 곱은 서로 독립이라 여러 기계에서 나누어 한다. $\mathbb F_2$ 에서는 $64$ 개의 열을 한 기계어에 담아 한 번에 곱한다. 점화식 단계는 Berlekamp–Massey 알고리즘의 행렬판이다.[^2]

# 활용

- **인수분해와 이산로그.** [수체 체](number-field-sieve.md)로 RSA(Rivest–Shamir–Adleman) 도전 수 RSA-768 을 인수분해할 때 1.9 억 행 정도의 $\mathbb F_2$ 행렬의 영공간을 블록 Wiedemann 알고리즘으로 구했다. [지표 계산법](index-calculus.md)의 선형대수는 $\mathbb Z/(p-1)$ 위에서 같은 방법을 쓴다.
- **최소다항식과 행렬식의 계산.** 무작위 대각 행렬을 곱해 $m\_A$ 가 특성다항식과 같아지게 만든 뒤 이 알고리즘을 돌리면 $\det A$ 가 나온다. 희소행렬의 행렬식과 계수를 $O(nw+n^2)$ 에 구하는 방법이다.[^1]
- **Krylov 부분공간 방법과의 관계.** $b,Ab,\dots$ 가 생성하는 공간에서 해를 찾는다는 점에서 [Krylov 부분공간 방법](krylov-subspace-methods.md)과 같은 공간을 쓴다. [실수](real-numbers.md) 위의 Krylov 방법은 내적과 직교성으로 근사해를 고치고, 이 알고리즘은 유한체 위에서 정확한 점화식으로 해를 얻는다.

[^1]: D. H. Wiedemann, "Solving sparse linear equations over finite fields", *IEEE Transactions on Information Theory* 32 (1986), 54–62.
[^2]: D. Coppersmith, "Solving homogeneous linear equations over GF(2) via block Wiedemann algorithm", *Mathematics of Computation* 62 (1994), 333–350.

# 연관 문서

## 선수지식

- [Berlekamp–Massey 알고리즘](berlekamp-massey.md)
- [최소다항식](minimal-polynomial.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #linear_algebra #number_theory
