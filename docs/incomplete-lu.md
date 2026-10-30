# 불완전 LU 분해

# 개요

**불완전 LU 분해(incomplete lower–upper factorization, ILU)** 는 [행렬](matrices.md)을 두 삼각행렬의 곱으로 분해하되, 정해 둔 자리 밖에 생기는 값은 버리는 근사 분해다. 격자 위의 [열방정식](heat-equation.md)을 풀 때 나오는 행렬은 한 줄에 $0$ 이 아닌 성분이 다섯 개뿐이지만, [Gauss 소거](gaussian-elimination.md)로 분해하면 원래 $0$ 이던 자리가 값으로 채워져 저장 공간이 모자란다. 원래 $0$ 이던 자리의 값을 버리면 정확한 분해는 아니지만 원래 행렬에 가까운 행렬의 분해가 되고, 그 분해를 반복법의 [전처리](preconditioning.md)에 쓴다.

# 직관

한 변에 $N$ 개씩 격자점을 놓은 $2$ 차원 5점 차분(five-point stencil) 행렬은 크기가 $n=N^2$ 이고 행마다 $0$ 이 아닌 성분이 다섯 개이므로 저장량이 $5n$ 이다. Gauss 소거를 하면 $0$ 이 아닌 성분이 대각에서 떨어진 거리가 최대 $N$ 인 띠 안을 거의 다 채워 삼각인자의 저장량이 $O(nN)=O(n^{3/2})$ 이 되고, $N=1000$ 이면 원 행렬의 $200$ 배다. 격자를 촘촘히 할수록 비율이 커지므로 분해를 그대로 쓸 수 없다.

소거는 그대로 하되 원래 $0$ 이던 자리에 값이 생기면 그 값을 버린다. 크기가 $3$ 인 행렬로 보인다.

$$
A=\begin{pmatrix}4&-1&-1\cr -1&4&0\cr -1&0&4\end{pmatrix}
$$

첫 열을 소거하려고 $2$ 행에 $1$ 행의 $1/4$ 배를 더하면 $2$ 행이 $(0,\thinspace 15/4,\thinspace -1/4)$ 이 된다. $(2,3)$ 자리는 원래 $0$ 이었으므로 $-1/4$ 을 버린다. $3$ 행도 같은 방식으로 $(3,2)$ 자리의 $-1/4$ 을 버린다. 그러면

$$
L=\begin{pmatrix}1&0&0\cr -1/4&1&0\cr -1/4&0&1\end{pmatrix},\qquad U=\begin{pmatrix}4&-1&-1\cr 0&15/4&0\cr 0&0&15/4\end{pmatrix}
$$

이고, $LU$ 는 $A$ 의 $(2,3)$ 과 $(3,2)$ 자리에 $1/4$ 을 더한 행렬이다. $L$ 과 $U$ 는 $A$ 와 같은 자리에만 $0$ 이 아닌 성분을 가지므로 저장량이 늘지 않는다.

$LU$ 는 $A$ 와 같지 않지만 차이가 작다. 그래서 $M = LU$ 로 두면 $M^{-1}A$ 가 $I$ 에 가깝고, $M^{-1}v$ 는 삼각계를 두 번 풀어 얻는다. 이것이 전처리 행렬에 요구되는 두 조건이다.

# 정의

## 무늬와 분해

**무늬(sparsity pattern)** 는 $0$ 이 아닌 값을 허용할 자리의 집합 $S\subseteq\lbrace 1,\dots,n\rbrace^2$ 이다. 행렬 $A$ 와 무늬 $S$ 에 대해 **불완전 LU 분해** 는 대각성분이 $1$ 인 아래삼각행렬 $L$ 과 위삼각행렬 $U$ 로

$$
A=LU-R,\qquad L\_{ij}=U\_{ij}=0\thickspace((i,j)\notin S),\qquad R\_{ij}=0\thickspace((i,j)\in S)
$$

를 만족하는 것이다. $S$ 밖에서는 인자가 $0$ 이고 $S$ 안에서는 곱이 $A$ 와 일치한다. 직관 절의 예에서 $S$ 는 $A$ 의 $0$ 아닌 자리 일곱 개이고, $R$ 은 $(2,3)$ 과 $(3,2)$ 자리만 $1/4$ 인 행렬이다. 두 자리는 $S$ 밖이므로 정의의 조건 $R\_{ij}=0\thickspace((i,j)\in S)$ 를 만족한다.

절차는 Gauss 소거와 같고 $(i,j)\notin S$ 에 값이 생길 때마다 버린다.

```javascript
// A 는 n x n 행렬, S 는 (i,j) 를 받아 참거짓을 주는 무늬
function ilu(A, S, n) {
  const M = A.map((row) => row.slice())
  for (let k = 0; k < n; k++) {
    for (let i = k + 1; i < n; i++) {
      if (!S(i, k)) continue
      M[i][k] = M[i][k] / M[k][k]
      for (let j = k + 1; j < n; j++) {
        if (!S(i, j)) continue
        M[i][j] = M[i][j] - M[i][k] * M[k][j]
      }
    }
  }
  return M // 아래삼각부가 L 의 비대각, 위삼각부가 U
}
```

## 무늬를 고르는 방법

$S$ 를 $A$ 의 $0$ 아닌 자리로 잡은 것이 $\mathrm{ILU}(0)$ 이다. 직관 절의 분해가 $\mathrm{ILU}(0)$ 이다.

소거가 원래 $0$ 이던 자리에 만드는 값을 **채움(fill-in)** 이라 한다. 채움에 **준위(level of fill)** 를 매겨 무늬를 넓히면 $\mathrm{ILU}(k)$ 가 된다. $A$ 의 $0$ 아닌 자리에 준위 $0$ 을 주고, 준위 $p$ 와 $q$ 인 자리의 곱으로 생긴 채움에 준위 $p+q+1$ 을 준다. 준위가 $k$ 이하인 자리만 남긴다. 직관 절의 예에서 $(2,3)$ 과 $(3,2)$ 의 채움은 준위 $0$ 인 자리끼리의 곱이므로 준위가 $1$ 이다. 그래서 $\mathrm{ILU}(1)$ 은 두 채움을 남기고, 이 행렬에서는 정확한 LU 분해와 같다.

무늬 대신 크기로 거르는 방법이 $\mathrm{ILUT}$(ILU with threshold) 다. 소거 도중 나온 값이 그 행 노름의 $\tau$ 배보다 작으면 버리고, 남은 것 가운데 큰 것부터 행마다 $p$ 개만 지킨다.

## 불완전 Cholesky 분해

$A$ 가 대칭 양정부호이면 같은 절차를 Cholesky 분해에 적용해 $A=LL^{\mathsf T}-R$ 을 얻는다. 이것이 **불완전 Cholesky 분해(incomplete Cholesky factorization)** 다.

# 성질

## 저장량

$\mathrm{ILU}(0)$ 의 저장량은 $A$ 의 저장량과 같다. 불완전 Cholesky 분해는 $L$ 하나만 저장하므로 저장량이 $\mathrm{ILU}$ 의 절반이다.

## 존재

비대각 성분이 모두 $0$ 이하이고 역행렬의 성분이 모두 $0$ 이상인 행렬을 **M-행렬(M-matrix)** 이라 한다. 직관 절의 $A$ 는 비대각 성분이 $0$ 과 $-1$ 이고 각 행에서 대각이 나머지의 절댓값 합보다 크므로 M-행렬이다.

**정리.** $A$ 가 M-행렬이면 임의의 무늬 $S$ 에 대해 $\mathrm{ILU}$ 가 존재하고 $L$ 과 $U$ 가 모두 가역이다.[^1]

소거 단계마다 남은 부분행렬이 다시 M-행렬임을 보인다. 값을 버리는 연산은 비대각 성분을 $0$ 쪽으로 올리므로 M-행렬의 부호 조건을 깨지 않고, 대각 축은 양수로 남는다. ∎

대칭 양정부호만으로는 존재가 보장되지 않는다. 축이 음수가 되어 절차가 끊기는 예가 있고, 이때는 대각에 $\alpha$ 를 더한 $A+\alpha I$ 를 분해한다.

## 수정 불완전 분해

버린 값을 그 행의 대각에 더하면 $R$ 의 행합이 $0$ 이 되고

$$
(LU)\thinspace\mathbf 1=A\thinspace\mathbf 1
$$

이 성립한다. 이것이 **수정 불완전 LU 분해(modified incomplete lower–upper factorization, MILU)** 다. 직관 절의 예에서 버린 $-1/4$ 을 대각에 더하면 $U$ 의 둘째와 셋째 대각이 $15/4 - 1/4 = 7/2$ 가 되고, $LU$ 의 $2$ 행은 $(-1,\thinspace 15/4,\thinspace 1/4)$ 이 되어 행합이 $A$ 의 $2$ 행과 같은 $3$ 이다. 상수에 가까운 벡터가 오차에서 정확히 재현되므로 타원형 문제에서 조건수 상한이 $O(h^{-2})$ 에서 $O(h^{-1})$ 로 내려간다.[^2]

## 정렬 의존성

같은 행렬이라도 미지수의 번호를 바꾸면 채움의 자리가 달라지고 분해의 품질이 달라진다. 5점 차분 행렬에서 빨강-검정 정렬(red-black ordering)은 병렬 계산에 유리하지만 자연 정렬(natural ordering)보다 수렴이 느리다.

전처리 품질과 병렬성이 정렬에서 맞서므로 문제마다 정렬을 따로 고른다.

# 활용

- 전처리된 공액기울기법(preconditioned conjugate gradient method). 대칭 양정부호 희소계에서 불완전 Cholesky 분해를 $M$ 으로 쓴다. 반복마다 드는 추가 비용은 삼각계 두 번 풀이이고 $A$ 와 같은 차수의 연산이다.
- 비대칭 계의 반복 풀이. 이류-확산 방정식(advection–diffusion equation)처럼 대칭성이 깨진 계에서 $\mathrm{ILUT}$ 를 [Krylov 부분공간 방법](krylov-subspace-methods.md)의 전처리로 쓴다.
- 다단계 전처리의 성긴 단계. [다중격자](multigrid.md)의 가장 성긴 격자에서 직접 풀이 대신 불완전 분해를 쓰면 성긴 계가 커도 비용이 선형으로 유지된다.
- 선형계 반복 풀이 라이브러리의 기본값. 문제의 구조를 모르는 상태에서 쓸 전처리로 $\mathrm{ILU}(0)$ 이나 $\mathrm{ILUT}$ 가 선택된다. 무늬와 임계값 두 매개변수만 정하면 되고 행렬의 성긴 구조만 있으면 적용된다.

[^1]: J. Meijerink, H. van der Vorst, "An iterative solution method for linear systems of which the coefficient matrix is a symmetric M-matrix", *Math. Comp.* **31** (1977).
[^2]: I. Gustafsson, "A class of first order factorization methods", *BIT* **18** (1978). 수정 분해의 조건수 개선이 여기서 나왔다. 무늬 준위와 $\mathrm{ILUT}$ 를 포함한 서술은 Y. Saad, *Iterative Methods for Sparse Linear Systems*, 2판 (2003), 10장.

# 연관 문서

## 선수지식

- [전처리](preconditioning.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation
