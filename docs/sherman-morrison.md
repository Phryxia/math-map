# Sherman–Morrison 공식

# 개요

역행렬을 이미 아는 행렬에 랭크 $1$ 행렬을 더하면, 새 역행렬이 옛 역행렬과 벡터 두 개로 적힌다. 행렬을 다시 뒤집지 않고 $n^2$ 번의 곱셈으로 갱신하는 공식이다.

[Schur 보수](schur-complement.md)를 블록 $\begin{pmatrix}A&u\cr v^{\mathsf T}&-1\end{pmatrix}$ 에 쓰면 이 공식이 나온다. 랭크가 $k$ 인 갱신으로 넓힌 것이 Woodbury 항등식이다.

# 직관

$n\times n$ 행렬 $A$ 의 [$LU$ 분해](matrix-factorizations.md)를 이미 구해 두었고, 그것으로 $Ay=b$ 를 풀어 $y$ 를 손에 쥐고 있다. 이제 $A$ 의 $(1,1)$ 성분만 $\alpha$ 만큼 키운 행렬로 같은 우변을 풀어야 한다. 새 계수행렬은 $A+\alpha e_1e_1^{\mathsf T}$ 다. 분해를 처음부터 다시 하면 곱셈이 $n^3/3$ 번이고, 방금 한 일을 그대로 되풀이한다.

바뀐 것은 성분 하나이니 새 해 $x$ 를 $y$ 에서 얼마나 움직였는지로 적는다. $(A+\alpha e_1e_1^{\mathsf T})x=b$ 를 옮기면

$$
Ax=b-\alpha(e_1^{\mathsf T}x)\thinspace e_1
$$

이다. 괄호 안 $e_1^{\mathsf T}x$ 는 $x$ 의 첫 성분이고 아직 모르는 수 하나다. 이것을 $\tau$ 라 두면 우변이 알려진 두 벡터의 결합이므로, 갖고 있는 분해로 $Az=e_1$ 을 한 번 더 풀어

$$
x=y-\alpha\tau\thinspace z
$$

를 얻는다. $z$ 를 구하는 데 전진대입과 후진대입이 한 번씩이라 곱셈이 $n^2$ 번이다.

남은 것은 $\tau$ 하나다. 위 식의 첫 성분을 읽으면 $\tau=e_1^{\mathsf T}y-\alpha\tau\thinspace e_1^{\mathsf T}z$ 이므로

$$
\tau=\frac{e_1^{\mathsf T}y}{1+\alpha\thinspace e_1^{\mathsf T}z}
$$

이고, 이것을 $x=y-\alpha\tau z$ 에 넣으면 새 해가 나온다. 분모가 $0$ 이면 새 행렬이 가역이 아니다.

# 정의

$A$ 가 $n\times n$ 가역행렬이고 $u,v\in\mathbb R^n$ 이라 하자. $1+v^{\mathsf T}A^{-1}u\ne0$ 이면 $A+uv^{\mathsf T}$ 가 가역이고

$$
(A+uv^{\mathsf T})^{-1}=A^{-1}-\frac{A^{-1}u\thinspace v^{\mathsf T}A^{-1}}{1+v^{\mathsf T}A^{-1}u}
$$

가 성립한다. 이 등식이 **Sherman–Morrison 공식**이다. 직관 절은 $u=\alpha e_1$ , $v=e_1$ 인 경우다.

$U,V$ 가 $n\times k$ 행렬이고 $C$ 가 $k\times k$ 가역행렬일 때 같은 등식을 랭크 $k$ 갱신으로 넓힌 것이 **Woodbury 항등식**이다.

$$
(A+UCV^{\mathsf T})^{-1}=A^{-1}-A^{-1}U(C^{-1}+V^{\mathsf T}A^{-1}U)^{-1}V^{\mathsf T}A^{-1}
$$

오른쪽에서 뒤집는 행렬은 $k\times k$ 다. $k$ 가 $n$ 보다 훨씬 작을 때 이 교환이 이득이다. $k=1$ 이고 $C=1$ 이면 Sherman–Morrison 공식이 된다.

# 성질

## Schur 보수에서 얻는 유도

$2\times2$ 블록 행렬을 잡는다.

$$
M=\begin{pmatrix}A&-U\cr V^{\mathsf T}&C^{-1}\end{pmatrix}
$$

$A$ 를 소거하면 Schur 보수가 $M/A=C^{-1}+V^{\mathsf T}A^{-1}U$ 이고, $C^{-1}$ 을 소거하면 $M/C^{-1}=A+UCV^{\mathsf T}$ 다. $M^{-1}$ 의 왼쪽 위 블록을 두 소거 순서로 각각 적으면

$$
(M/C^{-1})^{-1}=A^{-1}-A^{-1}U(M/A)^{-1}V^{\mathsf T}A^{-1}
$$

이고 이것이 Woodbury 항등식이다. 두 Schur 보수가 동시에 가역인 것이 공식이 쓰이는 조건이다.

## 검산

유도를 따르지 않아도 곱해 보면 확인된다. $\beta=1+v^{\mathsf T}A^{-1}u$ 로 두고 오른쪽 식을 $A+uv^{\mathsf T}$ 에 곱하면

$$
I+uv^{\mathsf T}A^{-1}-\frac{uv^{\mathsf T}A^{-1}+u(v^{\mathsf T}A^{-1}u)v^{\mathsf T}A^{-1}}{\beta}
$$

이고, 둘째 항의 분자가 $\beta\thinspace uv^{\mathsf T}A^{-1}$ 이므로 남는 것은 $I$ 다. 스칼라 $v^{\mathsf T}A^{-1}u$ 를 벡터 사이에서 빼내는 것이 계산의 전부다.

## 행렬식

같은 갱신에서 [행렬식](determinants.md)도 스칼라 하나만 곱해진다.

$$
\det(A+uv^{\mathsf T})=(1+v^{\mathsf T}A^{-1}u)\det A
$$

블록 행렬 $M$ 의 행렬식을 두 소거 순서로 적고 $\det M=\det A\cdot\det(M/A)$ 를 양쪽에 쓰면 나온다. 그러므로 $\beta=0$ 인 것과 $A+uv^{\mathsf T}$ 가 특이인 것이 같다.

## 수치적 안정성

$\beta$ 가 $0$ 에 가까우면 공식의 분모가 작아지고 상대오차가 $1/\vert\beta\vert$ 배로 커진다. 갱신된 행렬이 특이에 가까운 경우이고, 이때는 갱신된 행렬을 새로 분해하는 편이 낫다.[^1] 대칭 양의 정부호 행렬에서 랭크 $1$ 을 더하는 경우에는 역행렬 대신 Cholesky 인자를 직접 갱신하는 $n^2$ 알고리즘이 있고, 이쪽이 뺄셈을 피해 더 안정적이다.[^1]

# 활용

- [삼중대각계](tridiagonal-systems.md)의 순환 판은 계수행렬이 삼중대각행렬과 랭크 $1$ 행렬의 합이다. 삼중대각계를 두 번 풀고 공식으로 합치면 주기 경계조건이 붙어도 연산량이 $n$ 에 비례한다.
- [선형회귀](linear-regression.md)에서 관측을 하나 더 받으면 정규방정식의 행렬이 $X^{\mathsf T}X+x\_{n+1}x\_{n+1}^{\mathsf T}$ 로 바뀐다. 공식으로 역행렬을 갱신하는 것이 순차 최소제곱이고, 상태공간 모형에서 같은 갱신을 하는 것이 Kalman 필터의 관측 갱신 단계다.
- 같은 식에서 관측 하나를 빼면 그 관측을 제외한 적합값이 나온다. 잔차를 $1-h_i$ 로 나눈 꼴의 하나 빼기 교차검증 공식이 이 계산이고, $h_i$ 는 사영행렬의 대각성분이다.
- [Gauss 과정](gaussian-processes.md)의 예측은 커널 행렬의 역행렬을 쓴다. 자료점을 하나 더하면 커널 행렬이 한 행과 한 열 늘어나고, Woodbury 항등식과 Schur 보수로 옛 역행렬에서 새 역행렬을 만든다.
- [준뉴턴법](newton-method.md)은 Hessian 근사를 랭크 $1$ 이나 랭크 $2$ 로 갱신한다. 갱신을 역행렬 쪽에 직접 적용하면 매 반복에서 선형계를 푸는 대신 행렬-벡터 곱만 하게 되고, BFGS(Broyden–Fletcher–Goldfarb–Shanno)의 역Hessian 갱신식이 Woodbury 항등식을 두 번 쓴 결과다.

[^1]: Gene H. Golub and Charles F. Van Loan, *Matrix Computations*, 4th ed., Johns Hopkins University Press (2013), §2.1.4 와 §6.5.4. 갱신 공식의 오차 증폭과 Cholesky 인자 갱신 알고리즘을 다룬다.

# 연관 문서

## 선수지식

- [Schur 보수](schur-complement.md)

## 더 알아보기

- [Kalman 필터](kalman-filter.md)

#linear_algebra #algorithms #statistics
