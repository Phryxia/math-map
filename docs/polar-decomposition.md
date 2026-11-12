# 극분해

# 개요

**극분해(polar decomposition)** 는 정사각행렬을 돌리기만 하는 행렬과 서로 수직인 방향으로 늘이기만 하는 행렬의 곱으로 쓰는 분해다. 정사각형을 옆으로 미는 전단 변환은 변의 길이와 방향을 함께 바꾸어, 그 가운데 얼마가 회전이고 얼마가 늘임인지 바로 보이지 않는다. [복소수](complex-numbers.md) $z=e^{i\theta}r$ 를 각과 크기로 나누듯 행렬을 $A=QP$ 로 나누면, 직교행렬 $Q$ 가 회전 부분이고 양의 준정부호 행렬 $P$ 가 늘임 부분이다.

# 직관

전단 행렬 $A$ 는 점 $(x,y)$ 를 $(x+y,\thinspace y)$ 로 보낸다.

$$
A=\begin{pmatrix}1&1\cr 0&1\end{pmatrix}
$$

길이의 변화는 회전과 상관없으므로 $\Vert Av\Vert^2=v^{\mathsf T}A^{\mathsf T}Av$ 에 들어 있다. $A^{\mathsf T}A=\begin{pmatrix}1&1\cr 1&2\end{pmatrix}$ 는 대칭이고 [고윳값](eigenvalues.md)이 $\varphi^2$ 와 $\varphi^{-2}$ 다. 여기서 $\varphi=(1+\sqrt5)/2$ 다. 그래서 고유벡터 방향으로 $\varphi$ 배와 $\varphi^{-1}$ 배 늘이는 대칭행렬 $P$ 를 잡으면 $P^2=A^{\mathsf T}A$ 이고, 계산하면 다음과 같다.

$$
P=\frac1{\sqrt5}\begin{pmatrix}2&1\cr 1&3\end{pmatrix}
$$

남은 부분 $Q=AP^{-1}$ 은 다음과 같고, $Q^{\mathsf T}Q=I$ 라 회전이다. 각은 $-26.57^\circ$ 다.

$$
Q=\frac1{\sqrt5}\begin{pmatrix}2&1\cr -1&2\end{pmatrix}
$$

전단은 먼저 두 방향으로 $\varphi$ 배와 $\varphi^{-1}$ 배 늘이고, 그다음 시계 방향으로 $26.57^\circ$ 돌린 것이다.

# 정의

$A$ 가 $n\times n$ 복소행렬일 때, 유니터리(unitary) 행렬 $Q$ 와 양의 준정부호 에르미트 행렬 $P$ 에 대해

$$
A=QP
$$

로 쓰는 것을 $A$ 의 **극분해** 라 한다.

$P$ 를 극분해의 에르미트 인수, $Q$ 를 유니터리 인수라 한다. 실행렬이면 $Q$ 는 직교행렬, $P$ 는 대칭행렬로 잡는다. 곱의 순서를 바꾼 $A=P'Q$ 를 왼쪽 극분해라 하고, 이때 $P'=QPQ^\ast$ 다. 직관 절의 $Q$, $P$ 가 전단 행렬의 극분해다.

# 성질

## 존재와 유일성

모든 정사각행렬은 극분해를 갖고, $P=(A^\ast A)^{1/2}$ 는 언제나 하나로 정해진다. $A$ 가 가역이면 $Q=AP^{-1}$ 도 하나로 정해진다.[^1]

증명의 요지. [특이값 분해](singular-value-decomposition.md) $A=U\Sigma V^\ast$ 에서 다음과 같이 둔다.

$$
A=\bigl(UV^\ast\bigr)\bigl(V\Sigma V^\ast\bigr),\qquad Q=UV^\ast,\quad P=V\Sigma V^\ast
$$

$P^2=V\Sigma^2V^\ast=A^\ast A$ 이고 양의 준정부호 행렬의 양의 준정부호 제곱근은 하나뿐이라 $P$ 가 정해진다. $A$ 가 가역이면 $P$ 도 가역이라 $Q=AP^{-1}$ 이다.

## 가장 가까운 유니터리 행렬

유니터리 행렬 $W$ 가운데 Frobenius 노름 $\Vert A-W\Vert\_F$ 를 가장 작게 하는 것은 극분해의 $Q$ 다.[^1] 직관 절의 $A$ 에서 $\Vert A-Q\Vert\_F^2\approx 0.528$ 이고, 항등행렬과의 거리 제곱 $\Vert A-I\Vert\_F^2=1$ 보다 작다.

증명의 요지. $\Vert A-W\Vert\_F^2=\Vert A\Vert\_F^2+n-2\thinspace\mathrm{Re}\thinspace\mathrm{tr}(W^\ast A)$ 이므로 $\mathrm{Re}\thinspace\mathrm{tr}(W^\ast QP)$ 를 크게 하면 된다. $P$ 의 고유벡터 기저에서 이 값은 $P$ 의 고윳값에 크기 $1$ 이하인 수를 곱해 더한 것이라, $W^\ast Q=I$ 일 때 가장 크다.

## Newton 반복

$A$ 가 가역이면 $X_0=A$ 에서 다음을 되풀이할 때 $X_k$ 가 $Q$ 로 이차 수렴한다.[^2]

$$
X\_{k+1}=\frac12\bigl(X_k+X_k^{-\ast}\bigr)
$$

$X_k=QP_k$ 꼴이 유지되고 $P_k$ 의 고윳값마다 $\sigma\mapsto(\sigma+1/\sigma)/2$ 가 일어나 $1$ 로 간다. 직관 절의 $A$ 에서는 $X_1=\tfrac{\sqrt5}2Q$ 이고, 그 뒤 계수가 $1.118$, $1.0062$, $1.0000193$ 으로 $1$ 에 간다. [행렬 부호 함수](matrix-sign-function.md)의 Newton 반복과 같은 수 반복이고, 실제로 다음이 성립한다.[^1]

$$
\mathrm{sign}\begin{pmatrix}0&A\cr A^\ast&0\end{pmatrix}=\begin{pmatrix}0&Q\cr Q^\ast&0\end{pmatrix}
$$

# 활용

- 직교 Procrustes 문제. 점 집합 $B$ 를 돌려 $C$ 에 가장 가깝게 맞추는 직교행렬, 곧 $\Vert QB-C\Vert\_F$ 를 가장 작게 하는 $Q$ 는 $CB^{\mathsf T}$ 의 극분해의 직교 인수다. 분자 구조를 겹쳐 비교하는 Kabsch 알고리즘(Kabsch algorithm)이 이 계산이다.
- 연속체 역학의 변형. 변형 기울기 $F$ 를 $F=RU$ 로 나누어 회전 $R$ 과 늘임 $U$ 를 가르고, 응력은 늘임 $U$ 로만 정한다.
- [면적공식](area-formula.md). [선형사상](linear-maps.md)을 극분해하면 등거리 부분은 Hausdorff 측도를 보존하고, 대칭 부분이 고윳값의 곱만큼 넓이를 바꾼다.
- [Uhlmann 정리](uhlmann-theorem.md). 두 밀도행렬의 충실도 $\mathrm{tr}\thinspace\vert\sqrt\rho\sqrt\sigma\vert$ 는 $\sqrt\rho\sqrt\sigma$ 의 극분해에서 에르미트 인수의 대각합이고, 최적 정화를 주는 유니터리가 유니터리 인수다.

[^1]: N. J. Higham, *Functions of Matrices: Theory and Computation*, SIAM (2008), 8 장. 극분해의 존재와 유일성, 가장 가까운 유니터리 행렬, 부호 함수와의 관계.
[^2]: N. J. Higham, "Computing the polar decomposition — with applications", *SIAM Journal on Scientific and Statistical Computing* 7 (1986), 1160–1174.

# 연관 문서

## 선수지식

- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #analysis
