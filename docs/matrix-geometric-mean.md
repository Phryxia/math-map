# 행렬 기하평균

# 개요

**행렬 기하평균(matrix geometric mean)** 은 양수 $a,b$ 의 기하평균 $\sqrt{ab}$ 를 양의 정부호 행렬 두 개로 옮긴 평균이다. 행렬 $A,B$ 에 $\sqrt{AB}$ 를 그대로 쓰면 곱 $AB$ 가 대칭이 아니어서 결과가 대칭행렬이 아니다. 행렬 기하평균은 $x^2/a=b$ 의 해가 $\sqrt{ab}$ 라는 성질을 행렬 방정식 $XA^{-1}X=B$ 로 옮기고, 그 방정식의 양의 정부호 해를 평균으로 삼는다.

# 직관

양수에서는 $\sqrt{ab}$ 가 $a$ 와 $b$ 의 기하평균이다. 다음 두 양의 정부호 행렬에서 같은 것을 구하려 한다.

$$
A=\begin{pmatrix}1&0\cr 0&4\end{pmatrix},\qquad B=\begin{pmatrix}5&8\cr 8&20\end{pmatrix}
$$

곱 $AB$ 의 둘째 행은 $(32,80)$ 이고 둘째 열은 $(8,80)$ 이라 대칭이 아니다. 그래서 $AB$ 의 제곱근은 대칭행렬로 나오지 않는다.

수에서 $x=\sqrt{ab}$ 는 $x\cdot a^{-1}\cdot x=b$ 를 만족하는 양수다. 같은 식을 행렬로 쓰면 $XA^{-1}X=B$ 이고, 이 식은 $X$ 가 대칭이면 양변이 대칭이다. 다음 행렬을 넣어 본다.

$$
X=\begin{pmatrix}2&2\cr 2&8\end{pmatrix}
$$

$XA^{-1}$ 는 다음과 같다.

$$
XA^{-1}=\begin{pmatrix}2&1/2\cr 2&2\end{pmatrix}
$$

여기에 $X$ 를 곱하면 첫째 행이 $(5,8)$, 둘째 행이 $(8,20)$ 으로 $B$ 가 나온다. $X$ 는 대각성분이 양수이고 행렬식이 $12$ 이므로 양의 정부호다. 이 $X$ 가 $A$ 와 $B$ 의 기하평균이다.

# 정의

## 양의 정부호 행렬의 기하평균

양의 정부호 행렬 $A,B$ 의 **기하평균(geometric mean)** $A\thinspace\sharp\thinspace B$ 는 다음 행렬이다.

$$
A\thinspace\sharp\thinspace B=A^{1/2}\bigl(A^{-1/2}BA^{-1/2}\bigr)^{1/2}A^{1/2}
$$

여기서 $A^{1/2}$ 는 고윳값의 제곱근을 취한 양의 정부호 제곱근이다. 직관 절에서 $A^{1/2}$ 는 대각성분 $1,2$ 인 대각행렬이고, $A^{-1/2}BA^{-1/2}$ 는 첫째 행 $(5,4)$, 둘째 행 $(4,5)$ 인 행렬이다. 그 제곱근은 첫째 행 $(2,1)$, 둘째 행 $(1,2)$ 인 행렬이고, 양쪽에 $A^{1/2}$ 를 곱하면 직관 절의 $X$ 가 나온다.

## 가중 기하평균

$0\le t\le 1$ 에 대해 다음을 **가중 기하평균(weighted geometric mean)** 이라 한다.

$$
A\thinspace\sharp_t\thinspace B=A^{1/2}\bigl(A^{-1/2}BA^{-1/2}\bigr)^{t}A^{1/2}
$$

$t=0$ 이면 $A$, $t=1$ 이면 $B$, $t=1/2$ 이면 $A\thinspace\sharp\thinspace B$ 다.

# 성질

## Riccati 방정식의 해

$A\thinspace\sharp\thinspace B$ 는 $XA^{-1}X=B$ 의 양의 정부호 해 가운데 유일한 것이다. $Y=A^{-1/2}XA^{-1/2}$ 로 놓으면 방정식은 $Y^2=A^{-1/2}BA^{-1/2}$ 가 되고, 양의 정부호 행렬의 양의 정부호 제곱근은 하나뿐이다. 이 방정식은 [대수 Riccati 방정식](algebraic-riccati-equation.md)에서 일차항이 없는 경우다.

## 대칭성과 교환하는 경우

$A\thinspace\sharp\thinspace B=B\thinspace\sharp\thinspace A$ 이다. $XA^{-1}X=B$ 의 양변의 역행렬을 취하면 $X^{-1}AX^{-1}=B^{-1}$ 이고, 이것은 $XB^{-1}X=A$ 와 같다. 그래서 $X$ 는 $B$ 와 $A$ 의 순서로 쓴 방정식의 해이기도 하다.

$A$ 와 $B$ 가 교환하면 $A\thinspace\sharp\thinspace B=(AB)^{1/2}$ 이다. 이때 $AB$ 는 양의 정부호이고, 두 행렬을 함께 대각화하면 고윳값마다 $\sqrt{ab}$ 가 된다.

## 산술·기하·조화 평균 부등식

다음이 성립한다.

$$
2\bigl(A^{-1}+B^{-1}\bigr)^{-1}\preceq A\thinspace\sharp\thinspace B\preceq\tfrac12(A+B)
$$

$\preceq$ 는 [연산자 단조 함수](operator-monotone-functions.md)의 Löwner 순서다. 증명은 $C=A^{-1/2}BA^{-1/2}$ 로 놓고 수의 부등식 $2t/(1+t)\le\sqrt t\le(1+t)/2$ 를 $C$ 의 고윳값마다 적용한 뒤, 양쪽에 $A^{1/2}$ 를 곱하는 것이다. 수의 산술·기하·조화 평균 부등식을 행렬로 옮긴 것이다.

## 단조성과 오목성

$B\preceq B'$ 이면 $A\thinspace\sharp\thinspace B\preceq A\thinspace\sharp\thinspace B'$ 이다. 정의식은 $C$ 에 $\sqrt t$ 를 적용하고 $A^{1/2}$ 를 양쪽에 곱한 것이다. $B\preceq B'$ 이면 $C\preceq C'$ 이고, $\sqrt t$ 가 연산자 단조이므로 $C^{1/2}\preceq C'^{1/2}$ 이다. 대칭성으로 $A$ 에 대해서도 단조다.

Ando 는 다음 특징 짓기를 보였다[^1].

$$
A\thinspace\sharp\thinspace B=\max\Bigl\lbrace X=X^{\mathsf T}:\begin{pmatrix}A&X\cr X&B\end{pmatrix}\succeq 0\Bigr\rbrace
$$

최대는 Löwner 순서에서의 최대다. 이 꼴에서 $(A,B)\mapsto A\thinspace\sharp\thinspace B$ 가 두 변수에 대해 함께 오목하다는 것이 나온다.

## 행렬식

$\det(A\thinspace\sharp\thinspace B)=\sqrt{\det A\det B}$ 이다. 직관 절에서 $\det A=4$, $\det B=36$ 이고 $\det X=12=\sqrt{144}$ 이다.

## 측지선의 중점

양의 정부호 행렬 전체에 점 $A$ 에서 접벡터 $H,K$ 의 내적을 $\mathrm{tr}(A^{-1}HA^{-1}K)$ 로 주는 [Riemann 계량](riemannian-metrics.md)을 놓는다. 이 계량에서 $A$ 와 $B$ 를 잇는 측지선은 $t\mapsto A\thinspace\sharp_t\thinspace B$ 이고, 기하평균은 그 중점이다[^2].

# 활용

- 연산자 평균. 연산자 단조 함수 $f$ 로 $A^{1/2}f(A^{-1/2}BA^{-1/2})A^{1/2}$ 를 만드는 Kubo–Ando 의 연산자 평균에서 $f(t)=\sqrt t$ 인 경우가 기하평균이다. $f(t)=(1+t)/2$ 는 산술평균, $f(t)=2t/(1+t)$ 는 조화평균을 준다.
- 공분산 행렬의 평균. 두 공분산 행렬의 산술평균은 행렬식이 두 행렬식의 기하평균 이상이고, 기하평균은 행렬식이 정확히 두 행렬식의 기하평균이다. 확산 텐서 영상에서 텐서를 평균할 때 이 성질 때문에 측지선의 중점을 쓴다.
- 행렬 부등식. 산술·기하·조화 평균 부등식과 Ando 의 특징 짓기는 블록 행렬이 양의 준정부호인지를 판정하는 데 쓰인다.

[^1]: T. Ando, "Concavity of certain maps on positive definite matrices and applications to Hadamard products", *Linear Algebra and its Applications* 26 (1979), 203–241.
[^2]: R. Bhatia, *Positive Definite Matrices*, Princeton University Press (2007), 6 장.

# 연관 문서

## 선수지식

- [연산자 단조 함수](operator-monotone-functions.md)

## 더 알아보기

- [Karcher 평균](karcher-mean.md)

#analysis #linear_algebra #statistics
