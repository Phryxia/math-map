# 연산자 단조 함수

# 개요

**연산자 단조 함수(operator monotone function)** 는 수에서 크기 순서를 지키는 함수 가운데 대칭행렬 사이의 크기 순서까지 지키는 함수다. $x^2$ 은 양수에서 순서를 지키지만, 행렬 $A\preceq B$ 를 제곱하면 $A^2\preceq B^2$ 가 깨지는 예가 $2\times 2$ 에서 바로 나온다. 이 문서는 어느 함수가 행렬의 순서를 지키는지를 다루고, Löwner 정리는 그 답을 복소 상반평면의 해석함수로 준다.

# 직관

수에서는 $0\le a\le b$ 이면 $a^2\le b^2$ 이다. 대칭행렬에서는 모든 벡터 $x$ 에 대해 $x^{\mathsf T}Ax\le x^{\mathsf T}Bx$ 일 때 $A\preceq B$ 라고 쓴다. 다음 두 행렬을 놓는다.

$$
A=\begin{pmatrix}1&1\cr 1&1\end{pmatrix},\qquad B=\begin{pmatrix}2&1\cr 1&1\end{pmatrix}
$$

$B-A$ 는 대각성분이 $1,0$ 인 대각행렬이므로 $x^{\mathsf T}(B-A)x=x_1^2\ge 0$ 이고 $A\preceq B$ 다. 두 행렬 모두 고윳값이 $0$ 이상이다.

제곱하면 다음이 나온다.

$$
A^2=\begin{pmatrix}2&2\cr 2&2\end{pmatrix},\qquad B^2=\begin{pmatrix}5&3\cr 3&2\end{pmatrix}
$$

벡터 $x=(1,-3)$ 에서 $x^{\mathsf T}A^2x=8$ 이고 $x^{\mathsf T}B^2x=5$ 이므로 $A^2\preceq B^2$ 가 아니다. 그래서 $x^2$ 은 수에서는 순서를 지키지만 행렬에서는 지키지 않는다.

제곱근은 다르다. 고윳값이 양수인 $A\preceq B$ 에서 $\sqrt B-\sqrt A$ 가 음의 고윳값 $\lambda$ 와 고유벡터 $x$ 를 가진다고 하자. $B-A$ 를 다음처럼 쓴다.

$$
B-A=\tfrac12\bigl\lbrack(\sqrt B-\sqrt A)(\sqrt B+\sqrt A)+(\sqrt B+\sqrt A)(\sqrt B-\sqrt A)\bigr\rbrack
$$

양변에 $x$ 를 넣으면 $x^{\mathsf T}(B-A)x=\lambda\thinspace x^{\mathsf T}(\sqrt B+\sqrt A)x\lt 0$ 이 되어 $A\preceq B$ 와 어긋난다. 그래서 $\sqrt A\preceq\sqrt B$ 이다.

# 정의

## Löwner 순서

실대칭행렬 $A,B$ 에 대해 $B-A$ 가 양의 준정부호, 곧 모든 $x$ 에서 $x^{\mathsf T}(B-A)x\ge 0$ 일 때 $A\preceq B$ 라 쓰고, 이 순서를 **Löwner 순서(Loewner order)** 라 한다. 직관 절의 $A,B$ 는 $A\preceq B$ 이다. $B^2-A^2$ 은 $x=(1,0)$ 에서 $3$, $x=(1,-3)$ 에서 $-3$ 이므로 $A^2,B^2$ 은 어느 쪽으로도 비교되지 않는다.

## 연산자 단조 함수

구간 $I$ 위의 함수 $f$ 와 고윳값이 모두 $I$ 에 있는 실대칭행렬 $A=U\thinspace\mathrm{diag}(\lambda_1,\dots,\lambda_n)U^{\mathsf T}$ 에 대해 $f(A)=U\thinspace\mathrm{diag}(f(\lambda_1),\dots,f(\lambda_n))U^{\mathsf T}$ 로 놓는다. 고윳값이 $I$ 에 있는 $n\times n$ 대칭행렬 사이에서 $A\preceq B$ 이면 언제나 $f(A)\preceq f(B)$ 인 함수를 **$n$ 단조(matrix monotone of order n)** 라 하고, 모든 $n$ 에 대해 $n$ 단조인 함수를 **연산자 단조 함수** 라 한다.

$f(x)=\sqrt x$ 는 $\lbrack 0,\infty)$ 에서 연산자 단조이고, $f(x)=x^2$ 은 $\lbrack 0,\infty)$ 에서 $1$ 단조이지만 $2$ 단조가 아니다. 순서를 거꾸로 하는 함수, 곧 $-f$ 가 연산자 단조인 $f$ 를 연산자 감소 함수라 한다.

# 성질

## 역행렬

양의 정부호 행렬에서 $A\preceq B$ 이면 $B^{-1}\preceq A^{-1}$ 이다. 그래서 $(0,\infty)$ 에서 $-1/t$ 는 연산자 단조다.

증명. $A\preceq B$ 이면 $C=B^{-1/2}AB^{-1/2}\preceq I$ 이므로 $C$ 의 고윳값은 $1$ 이하의 양수다. 그러면 $C^{-1}=B^{1/2}A^{-1}B^{1/2}$ 의 고윳값은 $1$ 이상이고 $C^{-1}\succeq I$ 다. 양쪽에 $B^{-1/2}$ 를 곱하면 $A^{-1}\succeq B^{-1}$ 이다.

$s\ge 0$ 에 대해 $t\mapsto -1/(t+s)$ 도 같은 이유로 $(0,\infty)$ 에서 연산자 단조이고, 연산자 단조 함수의 양의 결합과 점별 극한도 연산자 단조다.

## 거듭제곱과 로그

$0\le p\le 1$ 이면 $t^p$ 은 $\lbrack 0,\infty)$ 에서 연산자 단조이고, $p\gt 1$ 이면 그렇지 않다. 이것을 Löwner–Heinz 부등식(Löwner–Heinz inequality)이라 한다[^1]. $0\lt p\lt 1$ 에서는 다음 적분 표현이 있다.

$$
t^p=\frac{\sin p\pi}{\pi}\int_0^\infty s^{p-1}\frac{t}{t+s}\thinspace ds
$$

$t/(t+s)=1-s/(t+s)$ 는 앞 절에 따라 연산자 단조이고, 적분은 이것들의 양의 결합이다. 같은 방식으로

$$
\log t=\int_0^\infty\Bigl(\frac{1}{1+s}-\frac{1}{t+s}\Bigr)ds
$$

이므로 $\log$ 도 $(0,\infty)$ 에서 연산자 단조다.

## Loewner 행렬 판정법

$f$ 가 $I$ 에서 연속 미분가능하면, $f$ 가 $n$ 단조인 것은 $I$ 의 모든 $\lambda_1,\dots,\lambda_n$ 에서 다음 Loewner 행렬이 양의 준정부호인 것과 동치다[^2].

$$
L=\Bigl(\frac{f(\lambda_i)-f(\lambda_j)}{\lambda_i-\lambda_j}\Bigr)\_{i,j}
$$

대각성분은 $f'(\lambda_i)$ 로 둔다. [Daleckii–Krein 공식](daleckii-krein-formula.md)에 따르면 $f$ 의 $A$ 에서 방향 $H$ 로의 미분은 고유벡터 기저에서 $L$ 과 $H$ 의 성분별 곱이고, 성분별 곱은 두 양의 준정부호 행렬에서 양의 준정부호다(Schur 곱 정리, Schur product theorem). 직관 절의 $x^2$ 은 $\lambda=(1,4)$ 에서 $L$ 의 성분이 $2,5,5,8$ 이고 행렬식이 $-9$ 라서 $2$ 단조가 아니다.

## Löwner 정리

열린 구간 $(a,b)$ 위의 함수 $f$ 가 연산자 단조인 것은, $f$ 가 복소 상반평면 위의 해석함수로 확장되고 그 확장이 상반평면을 닫힌 상반평면으로 보내는 것과 동치다[^2]. 이런 해석함수를 Pick 함수(Pick function)라 한다.

$(0,\infty)$ 에서는 다음 꼴의 표현과 같다[^3].

$$
f(t)=\alpha+\beta t+\int_0^\infty\Bigl(\frac{s}{s^2+1}-\frac{1}{s+t}\Bigr)d\mu(s)
$$

여기서 $\alpha$ 는 실수, $\beta\ge 0$ 이고 $\mu$ 는 위 적분이 수렴하는 양의 측도다. 앞 절의 $t^p$ 와 $\log t$ 가 이 꼴이고, $t^2$ 은 상반평면의 $-1+i$ 를 하반평면의 $-2i$ 로 보내므로 이 꼴이 아니다.

## 연산자 오목성

$\lbrack 0,\infty)$ 에서 음이 아닌 연속함수는 연산자 단조인 것과 [연산자 오목](operator-convex-functions.md)인 것이 동치다[^4]. 연산자 오목은 $0\le\theta\le 1$ 에서 $f(\theta A+(1-\theta)B)\succeq\theta f(A)+(1-\theta)f(B)$ 를 뜻한다.

# 활용

- 행렬 평균. 양의 정부호 $A,B$ 의 평균을 $A^{1/2}f(A^{-1/2}BA^{-1/2})A^{1/2}$ 로 정하면, $f$ 가 $f(1)=1$ 인 연산자 단조 함수일 때 이것이 Kubo–Ando 의 연산자 평균(operator mean)이다[^5]. $f(t)=\sqrt t$ 가 [행렬 기하평균](matrix-geometric-mean.md) $A\thinspace\sharp\thinspace B$ 를 준다.
- 공분산 행렬의 비교. 두 추정량의 공분산 행렬이 $\Sigma_1\preceq\Sigma_2$ 이면 역행렬 절에 따라 정밀도 행렬은 $\Sigma_2^{-1}\preceq\Sigma_1^{-1}$ 로 순서가 뒤집히고, 제곱근은 $\Sigma_1^{1/2}\preceq\Sigma_2^{1/2}$ 로 순서가 유지된다. 제곱 $\Sigma^2$ 에서는 직관 절처럼 순서가 깨질 수 있다.
- 행렬 함수의 미분. Loewner 행렬 판정법은 Daleckii–Krein 공식의 미분이 양의 준정부호 방향을 양의 준정부호 방향으로 보내는지를 묻는 것이다.

[^1]: E. Heinz, "Beiträge zur Störungstheorie der Spektralzerlegung", *Mathematische Annalen* 123 (1951), 415–438.
[^2]: K. Löwner, "Über monotone Matrixfunktionen", *Mathematische Zeitschrift* 38 (1934), 177–216.
[^3]: R. Bhatia, *Matrix Analysis*, Springer (1997), 5 장.
[^4]: F. Hansen, G. K. Pedersen, "Jensen's inequality for operators and Löwner's theorem", *Mathematische Annalen* 258 (1982), 229–241.
[^5]: F. Kubo, T. Ando, "Means of positive linear operators", *Mathematische Annalen* 246 (1980), 205–224.

# 연관 문서

## 선수지식

- [Daleckii–Krein 공식](daleckii-krein-formula.md)

## 더 알아보기

- [연산자 볼록 함수](operator-convex-functions.md)
- [행렬 기하평균](matrix-geometric-mean.md)

#analysis #linear_algebra #functional_analysis
