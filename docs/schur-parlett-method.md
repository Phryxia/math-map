# Schur–Parlett 방법

# 개요

**Schur–Parlett 방법(Schur–Parlett method)** 은 정사각행렬 $A$ 와 함수 $f$ 가 주어졌을 때 행렬 $f(A)$ 를 계산하는 일반적인 방법이다. $e^A$, $\cos A$, $\log A$ 는 미분방정식의 해와 회전의 보간에 나오는데, 고유벡터로 대각화해 고윳값마다 $f$ 를 쓰는 방법은 고유벡터가 거의 평행하면 오차가 커지고 대각화할 수 없는 행렬에서는 쓸 수 없다. Schur–Parlett 방법은 유니터리 닮음으로 $A$ 를 위삼각행렬로 바꾸고, 위삼각행렬의 $f$ 를 대각에서 위로 한 줄씩 점화식으로 채운다.

# 직관

[Schur 분해](schur-decomposition.md)로 $A=QTQ^\ast$ 를 얻었고 $T=\begin{pmatrix}1&1\cr 0&2\end{pmatrix}$ 라 한다. $f(A)=Qf(T)Q^\ast$ 이므로 $F=e^T$ 만 구하면 된다.

$F$ 도 위삼각이고 대각은 $e^1$, $e^2$ 다. 남은 $f\_{12}$ 를 구하려고 $F$ 가 $T$ 의 함수라서 $T$ 와 교환한다는 것을 쓴다. $TF=FT$ 의 $(1,2)$ 성분을 비교하면 다음이 나온다.

$$
t\_{11}f\_{12}+t\_{12}f\_{22}=f\_{11}t\_{12}+f\_{12}t\_{22}
$$

$f\_{12}$ 에 대해 풀면 다음이 나온다.

$$
f\_{12}=t\_{12}\frac{f\_{22}-f\_{11}}{t\_{22}-t\_{11}}=e^2-e\approx 4.6708
$$

행렬이 더 크면 같은 비교를 대각에서 위로 한 줄씩 하면서, 이미 구한 성분으로 다음 성분을 구한다.

이 식은 대각 성분이 가까우면 문제가 생긴다. $t\_{22}=1+10^{-8}$ 이면 $f\_{12}$ 는 $(e^{1+10^{-8}}-e)/10^{-8}$ 로 $e$ 에 가깝다. 배정밀도로 계산하면 분자의 뺄셈에서 앞 여덟 자리가 지워져 상대오차가 $7\times 10^{-9}$ 이다. 그래서 가까운 대각 성분은 한 블록으로 묶어 블록 안에서는 Taylor 급수로 $f$ 를 계산하고, 점화식은 서로 떨어진 블록 사이에만 쓴다.

# 정의

## 행렬 함수

$A$ 의 서로 다른 고윳값을 $\lambda\_1,\dots,\lambda\_s$, 최소다항식에서 $\lambda\_i$ 의 중복도를 $n\_i$ 라 한다. $f$ 가 각 $\lambda\_i$ 에서 $n\_i-1$ 번 미분가능하면, $p^{(k)}(\lambda\_i)=f^{(k)}(\lambda\_i)$($0\le k\lt n\_i$)를 만족하는 다항식 $p$ 로 $f(A)=p(A)$ 라 정의한다.[^1] 이 값은 $p$ 의 선택에 무관하고, [Jordan 표준형](jordan-canonical-form.md)으로 정의한 것과 같다. $f(A)$ 는 $A$ 의 다항식이므로 $A$ 와 교환하고, 가역인 $X$ 에 대해 $f(XAX^{-1})=Xf(A)X^{-1}$ 이다.

## Parlett 점화식

위삼각행렬 $T$ 의 대각 성분이 서로 다르면 $F=f(T)$ 는 위삼각이고 $f\_{ii}=f(t\_{ii})$ 다. $i\lt j$ 인 성분은 다음 **Parlett 점화식(Parlett recurrence)** 으로 정해진다.[^2]

$$
f\_{ij}=t\_{ij}\frac{f\_{ii}-f\_{jj}}{t\_{ii}-t\_{jj}}+\sum\_{k=i+1}^{j-1}\frac{f\_{ik}t\_{kj}-t\_{ik}f\_{kj}}{t\_{ii}-t\_{jj}}
$$

오른쪽은 $j-i$ 가 더 작은 성분만 쓰므로, 첫째 위대각, 둘째 위대각의 순으로 계산한다. 직관 절의 $f\_{12}$ 는 합이 비어 있는 경우다.

## 블록 Schur–Parlett 방법

$T$ 의 대각을 재배열해 가까운 고윳값끼리 대각 블록 $T\_{11},\dots,T\_{mm}$ 에 모으고, 서로 다른 블록의 고윳값은 떨어지게 한다. 다음 계산을 **블록 Schur–Parlett 방법(block Schur–Parlett method)** 이라 한다.[^3]

- 대각 블록. $T\_{ii}$ 의 고윳값 평균을 $\sigma$ 라 하고 $F\_{ii}=\sum\_k f^{(k)}(\sigma)(T\_{ii}-\sigma I)^k/k!$ 를 수렴할 때까지 더한다.
- 위 블록. $i\lt j$ 이면 $F\_{ij}$ 는 다음 [Sylvester 방정식](sylvester-equation.md)의 해다.

$$
T\_{ii}F\_{ij}-F\_{ij}T\_{jj}=F\_{ii}T\_{ij}-T\_{ij}F\_{jj}+\sum\_{k=i+1}^{j-1}\bigl(F\_{ik}T\_{kj}-T\_{ik}F\_{kj}\bigr)
$$

$T\_{ii}$ 와 $T\_{jj}$ 가 공통 고윳값을 갖지 않으므로 해가 하나뿐이다. 블록이 모두 $1\times 1$ 이면 Parlett 점화식과 같다.

# 성질

## 점화식의 유도

$F$ 는 $T$ 의 다항식이므로 $TF=FT$ 다. 두 쪽의 $(i,j)$ 성분은 $\sum\_{k=i}^jt\_{ik}f\_{kj}$ 와 $\sum\_{k=i}^jf\_{ik}t\_{kj}$ 이고, $k=i$ 와 $k=j$ 항을 떼어 $f\_{ij}$ 에 대해 풀면 점화식이 나온다. 대각 성분이 같으면 $f\_{ij}$ 의 계수 $t\_{ii}-t\_{jj}$ 가 $0$ 이어서 교환 관계만으로는 $F$ 가 정해지지 않는다.

## 오차와 블록 나누기

점화식의 오차는 $1/\vert t\_{ii}-t\_{jj}\vert$ 에 비례해 커진다. 직관 절의 $10^{-8}$ 간격에서 여덟 자리가 사라진 것이 그 예다. 블록 방법에서는 이 역할을 Sylvester 방정식의 분리 $\mathrm{sep}(T\_{ii},T\_{jj})$ 가 맡고, 대각 블록 안에서는 Taylor 급수가 분모 없이 계산된다. Davies 와 Higham 은 고윳값 사이의 거리가 $\delta=0.1$ 미만이면 같은 블록에 넣는 규칙을 썼다.[^3]

## 비용

Schur 분해에 약 $25n^3$ 번의 실수 연산이 들고, 위삼각행렬에서 점화식은 약 $2n^3/3$ 번이다. 블록 방법은 블록이 클수록 Taylor 급수의 행렬 곱이 늘어난다. $e^A$, $\sqrt A$, $\log A$ 처럼 전용 방법이 있는 함수는 척도 조정과 제곱 같은 전용 방법을 쓰고, Schur–Parlett 방법은 그 밖의 함수에 쓴다.

# 활용

- 일반 함수의 계산. 도함수를 계산할 수 있는 $f$ 라면 무엇이든 받으므로 $\cos A$, $\sin A$, $\cosh A$ 와 특수함수의 행렬판을 같은 코드로 계산한다. MATLAB(matrix laboratory)의 `funm` 이 블록 방법을 구현한다.
- 미분방정식. 2 계 방정식 $x''+Ax=0$ 의 해 $\cos(\sqrt A\thinspace t)x\_0$ 를 계산한다. $\sqrt A$ 없이 $\cos(\sqrt{\cdot}\thinspace t)$ 를 한 함수로 넘긴다.
- 위삼각행렬의 함수. [행렬 지수](matrix-exponential.md), [행렬 제곱근](matrix-square-root.md), [행렬 로그](matrix-logarithm.md)의 Schur 기반 방법이 모두 같은 점화식에서 출발한다.

[^1]: N. J. Higham, *Functions of Matrices: Theory and Computation*, SIAM (2008), 1.2 절.

[^2]: B. N. Parlett, "A recurrence among the elements of functions of triangular matrices", *Linear Algebra and its Applications* 14 (1976), 117–121.

[^3]: P. I. Davies, N. J. Higham, "A Schur–Parlett algorithm for computing matrix functions", *SIAM Journal on Matrix Analysis and Applications* 25 (2003), 464–485.

# 연관 문서

## 선수지식

- [Sylvester 방정식](sylvester-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #algorithms
