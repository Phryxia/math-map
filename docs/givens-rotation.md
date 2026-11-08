# Givens 회전

# 개요

**Givens 회전(Givens rotation)** 은 좌표 두 개가 이루는 평면 하나만 돌리고 나머지 좌표는 그대로 두는 선형사상이다. 행렬 $\begin{pmatrix}3&0\cr 4&5\end{pmatrix}$ 을 길이를 보존하는 변환만으로 위삼각행렬로 바꾸려면 왼쪽 아래 성분 $4$ 하나를 $0$ 으로 만들어야 한다. Givens 회전은 첫 열 $(3,4)$ 를 $x$ 축 위로 돌리는 각을 골라 그 성분 하나를 지우고, 지울 성분마다 한 번씩 써서 QR 분해(orthogonal-triangular decomposition)를 만든다.

# 직관

$(3,4)$ 를 원점 둘레로 돌려 $x$ 축 위에 놓는다. 길이가 $5$ 이므로 도착점은 $(5,0)$ 이다. $(3,4)$ 가 $x$ 축과 이루는 각의 코사인이 $c=3/5$, 사인이 $s=4/5$ 이므로 그 각만큼 시계 방향으로 돌리면 된다.

$$
G=\begin{pmatrix}c&s\cr -s&c\end{pmatrix}=\begin{pmatrix}3/5&4/5\cr -4/5&3/5\end{pmatrix},\qquad G\begin{pmatrix}3\cr 4\end{pmatrix}=\begin{pmatrix}9/5+16/5\cr -12/5+12/5\end{pmatrix}=\begin{pmatrix}5\cr 0\end{pmatrix}
$$

같은 회전을 둘째 열 $(0,5)$ 에도 쓰면 $(4,3)$ 이 나온다. 그래서 $GA=\begin{pmatrix}5&4\cr 0&3\end{pmatrix}$ 이고, 이것은 [행렬 분해](matrix-factorizations.md)의 Gram–Schmidt 직교화(Gram–Schmidt process)가 같은 $A$ 에서 준 $R$ 과 같다. $Q=G^{\mathsf T}$ 이다.

좌표가 셋 이상이면 두 좌표만 고른 평면에서 같은 회전을 하고 나머지 좌표는 건드리지 않는다. 그래서 회전 한 번이 성분 하나를 $0$ 으로 만들고, 이미 $0$ 으로 만든 다른 자리는 그 두 행에 걸리지 않는 한 그대로 남는다.

# 정의

$1\le i\lt j\le n$ 과 $c^2+s^2=1$ 인 실수 $c, s$ 에 대해, 단위행렬에서 네 성분만 바꾼 다음 행렬을 Givens 회전이라 한다.

$$
G(i,j)\_{ii}=G(i,j)\_{jj}=c,\qquad G(i,j)\_{ij}=s,\qquad G(i,j)\_{ji}=-s
$$

$G(i,j)x$ 는 $x$ 의 $i$, $j$ 성분만 바꾼다. 바뀐 값은 $(cx_i+sx_j,\thinspace -sx_i+cx_j)$ 이다. 직관 절의 $G$ 는 $n=2$, $i=1$, $j=2$, $c=3/5$, $s=4/5$ 인 경우다.

$x_j$ 를 $0$ 으로 만들려면 $r=\sqrt{x_i^2+x_j^2}\ne 0$ 에 대해

$$
c=\frac{x_i}{r},\qquad s=\frac{x_j}{r}
$$

로 잡는다. 그러면 $i$ 성분은 $r$, $j$ 성분은 $0$ 이 된다. 직관 절에서 $r=5$ 이다. $r$ 을 $\sqrt{x_i^2+x_j^2}$ 로 그대로 계산하면 제곱에서 넘침(overflow)이 날 수 있으므로 큰 쪽으로 나눈 비를 쓴다.

```javascript
// a 를 r 로, b 를 0 으로 보내는 (c, s, r)
function givens(a, b) {
  if (b === 0) return { c: 1, s: 0, r: a };
  if (Math.abs(b) > Math.abs(a)) {
    const t = a / b;
    const u = Math.sqrt(1 + t * t);
    const s = Math.sign(b) / u;
    return { c: s * t, s, r: Math.abs(b) * u };
  }
  const t = b / a;
  const u = Math.sqrt(1 + t * t);
  const c = Math.sign(a) / u;
  return { c, s: c * t, r: Math.abs(a) * u };
}
```

# 성질

## 직교이며 행렬식 1

$G(i,j)^{\mathsf T}G(i,j)=I$ 이고 $\det G(i,j)=c^2+s^2=1$ 이다. 그래서 Givens 회전은 회전이고 2 노름을 보존한다. [Householder 반사](householder-reflection.md)는 행렬식이 $-1$ 이다. 직관 절에서 Householder 반사는 $(3,4)$ 를 $(-5,0)$ 으로, Givens 회전은 $(5,0)$ 으로 보냈다. 회전에서는 $c$ 와 $s$ 를 나눗셈으로 직접 얻으므로 Householder 벡터에서 나는 부호 선택 문제가 없다.

## 연산량

$G(i,j)$ 를 $m\times n$ 행렬의 왼쪽에 곱하면 행 $i$ 와 행 $j$ 만 바뀐다. 열마다 곱셈 4 번과 덧셈 2 번이므로 $6n$ 번이다. 오른쪽에 곱하면 열 $i$ 와 열 $j$ 만 바뀐다.

## Givens QR 분해

$m\times n$ 행렬 $A$ ($m\ge n$) 의 대각 아래 성분을 열마다 아래에서 위로 하나씩 회전으로 $0$ 으로 만든다. $k$ 번째 열에서는 행 $(j-1,j)$ 회전으로 $(j,k)$ 성분을 지우고, $j=m,\dots,k+1$ 의 순서로 간다. 앞 열에서 지운 성분은 두 행이 모두 $0$ 이므로 회전 뒤에도 $0$ 이다. 회전은 모두 $mn-n(n+1)/2$ 번이고, $R=G_N\cdots G_1A$, $Q=G_1^{\mathsf T}\cdots G_N^{\mathsf T}$ 이다.

조밀한 행렬에서 연산량은 약 $3mn^2-n^3$ 번이다[^1]. Householder QR 분해의 $2mn^2-\frac23 n^3$ 번보다 많고, 정사각행렬에서는 $2n^3$ 대 $\frac43 n^3$ 이다. 지울 성분이 적으면 회전 수가 그만큼 줄어든다. 위 Hessenberg 행렬(upper Hessenberg matrix)은 대각 바로 아래 성분 $n-1$ 개만 지우면 되므로 $n-1$ 번의 회전, $O(n^2)$ 번의 연산으로 QR 분해가 끝난다.

## 안정성

Givens 회전으로 만든 QR 분해는 후방 안정(backward stable)이다[^1]. 계산한 $\hat R$ 은 $\Vert\delta A\Vert\le C\thinspace u\Vert A\Vert$ 인 $A+\delta A$ 를 정확한 직교행렬로 삼각화한 결과이고, $u$ 는 기계 정밀도(machine precision), $C$ 는 $m$, $n$ 에만 의존하는 상수다. 회전 하나는 두 행의 선형결합이고 직교행렬이므로 오차를 키우지 않는다.

## 서로 겹치지 않는 회전

행의 쌍이 겹치지 않는 두 회전 $G(i,j)$, $G(k,l)$ 은 교환한다. 그래서 겹치지 않는 회전들은 동시에 계산할 수 있다. Givens QR 분해에서 $k$ 번째 열의 회전과 $k+1$ 번째 열의 회전을 두 단계씩 어긋나게 배치하면 약 $m+n$ 단계의 병렬 계산으로 끝난다[^2].

# 활용

- [QR 알고리즘](qr-algorithm.md)의 Hessenberg 반복. Hessenberg 행렬 $H=QR$ 을 Givens 회전 $n-1$ 개로 분해하고, $RQ$ 는 $R$ 의 오른쪽에 같은 회전들의 전치를 곱해 $O(n^2)$ 번에 얻는다. $RQ$ 도 위 Hessenberg 꼴이다.
- [Krylov 부분공간 방법](krylov-subspace-methods.md)의 [GMRES](gmres.md)(generalized minimal residual). Arnoldi 반복(Arnoldi iteration)이 만든 $(m+1)\times m$ Hessenberg 행렬의 최소제곱 문제(least squares problem)를 반복마다 회전 하나를 더해 갱신하고, 잔차의 노름을 그 회전의 $s$ 들의 곱으로 얻는다.
- QR 분해의 갱신. $A$ 에 행 하나를 더하면 그 행을 $R$ 아래에 붙인 행렬의 새 행을 회전 $n$ 개로 지워 새 $R$ 을 얻는다. 처음부터 다시 분해하는 $O(mn^2)$ 대신 $O(n^2)$ 번이 든다. 최소제곱 문제에 자료가 하나씩 들어올 때 쓴다.
- 희소 행렬(sparse matrix)의 QR 분해. 0 이 아닌 대각 아래 성분만 골라 지우므로 0 성분을 채우지 않는다.
- 대칭행렬 고윳값의 Jacobi 방법(Jacobi eigenvalue method). 대각 밖 성분 $a_{ij}$ 하나를 $0$ 으로 만드는 회전 $G(i,j)$ 를 양쪽에 곱하는 닮음 변환(similarity transformation) $G^{\mathsf T}AG$ 를 되풀이해 $A$ 를 대각행렬에 수렴시킨다.

[^1]: Gene H. Golub and Charles F. Van Loan, *Matrix Computations*, 4th ed., Johns Hopkins University Press (2013), §5.1, §5.2. Givens 회전의 계산, Givens QR 분해의 연산량 $3n^2(m-n/3)$, Hessenberg QR 분해, 반올림 오차 분석이 있다.

[^2]: A. H. Sameh and D. J. Kuck, "On stable parallel linear system solvers", *Journal of the ACM* 25 (1978), 81–91.

# 연관 문서

## 선수지식

- [행렬 분해](matrix-factorizations.md)

## 더 알아보기

- [GMRES](gmres.md)

#linear_algebra #algorithms #computation
