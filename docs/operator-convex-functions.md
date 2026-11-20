# 연산자 볼록 함수

# 개요

**연산자 볼록 함수(operator convex function)** 는 수에서 볼록인 함수 가운데 대칭행렬에 적용해도 볼록 부등식이 Löwner 순서로 성립하는 함수다. $t^3$ 은 양수에서 볼록이지만, 양의 준정부호 행렬 두 개의 중점에 적용하면 두 값의 평균보다 작지 않은 방향이 생긴다. 이 문서는 어느 함수가 행렬에서도 볼록한지를 다루고, 답은 [연산자 단조 함수](operator-monotone-functions.md)와의 대응으로 주어진다.

# 직관

수에서 $f$ 가 볼록이면 두 점의 중점에서의 값이 두 값의 평균 이하다. 대칭행렬에서는 다음 부등식을 Löwner 순서로 묻는다.

$$
f\Bigl(\frac{A+B}{2}\Bigr)\preceq\frac{f(A)+f(B)}{2}
$$

$f(t)=t^3$ 과 다음 두 행렬을 놓는다. $A$ 는 양의 정부호이고 $B$ 는 양의 준정부호다.

$$
A=\begin{pmatrix}2&1\cr 1&1\end{pmatrix},\qquad B=\begin{pmatrix}1&0\cr 0&0\end{pmatrix}
$$

$A^3$ 의 성분은 $13,8,8,5$ 이고 $B^3=B$ 이므로 두 값의 평균은 성분이 $7,4,4,5/2$ 다. 중점의 세제곱은 성분이 $17/4,7/4,7/4,3/4$ 이다. 둘의 차를 $D$ 라 하면 다음과 같다.

$$
D=\frac{A^3+B^3}{2}-\Bigl(\frac{A+B}{2}\Bigr)^3=\frac14\begin{pmatrix}11&9\cr 9&7\end{pmatrix}
$$

$x=(4,-5)$ 에서 $x^{\mathsf T}Dx=-9/4$ 이므로 $D$ 는 양의 준정부호가 아니다. 그래서 $t^3$ 은 수에서는 볼록이지만 행렬에서는 볼록 부등식이 성립하지 않는다.

$t^2$ 에서는 다음 등식이 성립한다.

$$
\frac{A^2+B^2}{2}-\Bigl(\frac{A+B}{2}\Bigr)^2=\frac14(A-B)^2
$$

오른쪽은 대칭행렬의 제곱이라 양의 준정부호이므로 $t^2$ 은 행렬에서도 볼록이다.

# 정의

## 연산자 볼록 함수

구간 $I$ 위의 함수 $f$ 가, 고윳값이 $I$ 에 있는 모든 크기의 대칭행렬 $A,B$ 와 $0\le\theta\le 1$ 에 대해 다음을 만족하면 **연산자 볼록** 이라 한다.

$$
f\bigl(\theta A+(1-\theta)B\bigr)\preceq\theta f(A)+(1-\theta)f(B)
$$

여기서 $f(A)$ 는 고윳값마다 $f$ 를 적용한 행렬이고 $\preceq$ 는 Löwner 순서다. $-f$ 가 연산자 볼록이면 $f$ 를 **연산자 오목(operator concave)** 이라 한다. 직관 절의 $t^2$ 은 실수 전체에서 연산자 볼록이고, $t^3$ 은 $\lbrack 0,\infty)$ 에서 연산자 볼록이 아니다.

# 성질

## 역수

$f(t)=1/t$ 는 $(0,\infty)$ 에서 연산자 볼록이다.

증명. 양의 정부호 $A$ 에 대해 다음 블록 행렬은 양의 준정부호다. 왼쪽 위 블록이 양의 정부호이고 [Schur 보수](schur-complement.md) $A^{-1}-IA^{-1}I$ 가 $0$ 이다.

$$
\begin{pmatrix}A&I\cr I&A^{-1}\end{pmatrix}\succeq 0
$$

$A$ 와 $B$ 의 이 행렬을 $\theta$, $1-\theta$ 로 결합해도 양의 준정부호이고, $C=\theta A+(1-\theta)B$ 로 두면 Schur 보수가 양의 준정부호라는 조건에서 $C^{-1}\preceq\theta A^{-1}+(1-\theta)B^{-1}$ 이 나온다.

## 연산자 단조 함수와의 대응

$\lbrack 0,\alpha)$ 위의 연속함수 $f$ 가 $f(0)\le 0$ 이면, $f$ 가 연산자 볼록인 것과 $f(t)/t$ 가 $(0,\alpha)$ 에서 연산자 단조인 것은 동치다[^1].

- $t^2$ 에서 $t^2/t=t$ 는 연산자 단조다.
- $1\le p\le 2$ 이면 $t^p/t=t^{p-1}$ 이 연산자 단조이므로 $t^p$ 은 연산자 볼록이다.
- $t^3$ 에서 $t^2$ 은 연산자 단조가 아니므로 직관 절처럼 $t^3$ 은 연산자 볼록이 아니다.
- $t\log t$ 에서 $\log t$ 는 연산자 단조이므로 $t\log t$ 는 $\lbrack 0,\infty)$ 에서 연산자 볼록이다.

## Jensen 연산자 부등식

$\lbrack 0,\alpha)$ 위의 연속함수 $f$ 가 $f(0)\le 0$ 이면, $f$ 가 연산자 볼록인 것은 고윳값이 $\lbrack 0,\alpha)$ 에 있는 모든 대칭행렬 $A$ 와 $C^{\mathsf T}C\preceq I$ 인 모든 행렬 $C$ 에 대해

$$
f(C^{\mathsf T}AC)\preceq C^{\mathsf T}f(A)C
$$

인 것과 동치다[^1]. 이것을 Jensen 연산자 부등식(Jensen's operator inequality)이라 한다. 수에서 $f(c^2a)\le c^2f(a)$ ($\vert c\vert\le 1$) 는 $f(0)\le 0$ 인 볼록함수에서 $0$ 과 $a$ 를 잇는 볼록 결합으로 나온다.

## Kraus 의 판정법

연속 미분가능한 $f$ 가 연산자 볼록이면 둘째 분할 차분으로 만든 행렬이 모두 양의 준정부호이고, 그 역도 성립한다[^2]. 연산자 단조 함수의 Loewner 행렬 판정법에서 첫째 분할 차분을 둘째 분할 차분으로 바꾼 꼴이다.

# 활용

- 양자 상대 엔트로피. $t\log t$ 의 연산자 볼록성에서 두 밀도 행렬의 상대 엔트로피 $\mathrm{tr}\thinspace\rho(\log\rho-\log\sigma)$ 가 $(\rho,\sigma)$ 에 대해 함께 볼록이라는 것이 증명된다[^3].
- 행렬 부등식. 역수의 연산자 볼록성은 공분산 행렬의 볼록 결합의 역이 정밀도 행렬의 볼록 결합 이하라는 부등식을 준다.

[^1]: F. Hansen, G. K. Pedersen, "Jensen's inequality for operators and Löwner's theorem", *Mathematische Annalen* 258 (1982), 229–241.
[^2]: F. Kraus, "Über konvexe Matrixfunktionen", *Mathematische Zeitschrift* 41 (1936), 18–42.
[^3]: E. G. Effros, "A matrix convexity approach to some celebrated quantum inequalities", *Proceedings of the National Academy of Sciences* 106 (2009), 1006–1008.

# 연관 문서

## 선수지식

- [연산자 단조 함수](operator-monotone-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra #functional_analysis
