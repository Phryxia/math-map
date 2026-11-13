# 혼합 판별식

# 개요

**혼합 판별식(mixed discriminant)** 은 정사각 행렬 $n$ 개를 섞은 행렬의 [행렬식](determinants.md)에서, 각 행렬이 한 번씩 들어간 부분만 골라낸 값이다. 대각행렬을 넣으면 [영구식](permanent.md)이 되고, 같은 행렬을 $n$ 번 넣으면 행렬식의 $n!$ 배가 된다. 영구식의 하한을 대각이 아닌 행렬로 넓힐 수 있는지 묻는 문제가 이 값으로 적히고, 그 답도 이 값의 하한으로 나온다.

# 직관

$2\times 2$ 행렬 $B=\mathrm{diag}(1,4)$ 에 대해 $\det(sI+tB)$ 를 전개한다.

$$
\det(sI+tB)=(s+t)(s+4t)=s^2+5st+4t^2
$$

$s^2$ 의 계수는 $\det I=1$, $t^2$ 의 계수는 $\det B=4$ 이다. 가운데 $st$ 의 계수 $5$ 는 $I$ 와 $B$ 를 하나씩 쓴 항이고, 여기서는 $\mathrm{tr}\thinspace B=1+4$ 와 같다.

고윳값이 $\lambda_1,\lambda_2\ge 0$ 인 대칭행렬 $B$ 로 바꾸면 다음과 같다.

$$
\det(sI+tB)=(s+\lambda_1t)(s+\lambda_2t)
$$

가운데 계수는 $\lambda_1+\lambda_2$ 다. 산술-기하 평균 부등식 $(\lambda_1+\lambda_2)^2\ge 4\lambda_1\lambda_2$ 는 가운데 계수의 제곱이 양 끝 계수의 곱의 $4$ 배 이상이라는 부등식이다. 위 예에서 $25\ge 16$ 이다.

# 정의

## 혼합 판별식

$n\times n$ 행렬 $A_1,\dots,A_n$ 의 혼합 판별식은 다음 값이다[^1].

$$
D(A_1,\dots,A_n)=\frac{\partial^n}{\partial t_1\cdots\partial t_n}\det\Big(\sum_{i=1}^nt_iA_i\Big)
$$

$\det(\sum_it_iA_i)$ 는 $t_1,\dots,t_n$ 의 $n$ 차 동차다항식이므로, $D$ 는 $t_1t_2\cdots t_n$ 의 계수다.

$n=2$ 이면 직관 절의 전개에서 다음이 나온다.

$$
D(A,B)=a_{11}b_{22}+a_{22}b_{11}-a_{12}b_{21}-a_{21}b_{12}
$$

$A=I$, $B=\mathrm{diag}(1,4)$ 이면 $D(I,B)=5$ 이고, $D(I,I)=2\det I=2$, $D(B,B)=2\det B=8$ 이다.

## 이중 확률 행렬 조

양의 준정부호 대칭행렬 $A_1,\dots,A_n$ 이 $\sum_iA_i=I$ 와 $\mathrm{tr}\thinspace A_i=1$ 을 만족하면 이 조를 **이중 확률 조(doubly stochastic tuple)** 라 한다. $A_i=\mathrm{diag}(b_{i1},\dots,b_{in})$ 이면 이 조건은 $(b_{ij})$ 가 이중 확률 행렬이라는 것과 같다. $A_i=I/n$ 인 조가 이중 확률 조다.

# 성질

## 기본 성질

- $D$ 는 각 자리에서 선형이고, 자리를 바꿔도 값이 같다.
- $D(A,\dots,A)=n!\det A$ 이다. $\det(\sum_it_iA)=(\sum_it_i)^n\det A$ 에서 $t_1\cdots t_n$ 의 계수가 $n!\det A$ 다.
- $A_i=\mathrm{diag}(b_{i1},\dots,b_{in})$ 이면 $\det(\sum_it_iA_i)=\prod_j(\sum_ib_{ij}t_i)$ 이므로 $D(A_1,\dots,A_n)$ 은 행렬 $(b_{ij})$ 의 영구식이다.
- $A_i$ 가 모두 양의 준정부호이면 $D(A_1,\dots,A_n)\ge 0$ 이다. $A_i=\sum_kv_{ik}v_{ik}^T$ 로 쓰면 $D$ 는 $\det\lbrack v_{1k_1}\cdots v_{nk_n}\rbrack^2$ 꼴의 항의 합이다.

## Alexandrov 부등식

양의 준정부호 대칭행렬 $A,B,A_3,\dots,A_n$ 에 대해 다음이 성립한다. A. D. Alexandrov 가 1938 년에 증명했고 Alexandrov 부등식(Alexandrov inequality)이라 한다[^2].

$$
D(A,B,A_3,\dots,A_n)^2\ge D(A,A,A_3,\dots,A_n)\thinspace D(B,B,A_3,\dots,A_n)
$$

$n=2$ 에서 $A=I$ 이면 $(\mathrm{tr}\thinspace B)^2\ge 4\det B$ 로, 직관 절의 산술-기하 평균 부등식이다. 이 부등식은 [혼합부피](mixed-volumes.md)의 [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)과 같은 꼴이다.

## Bapat 추측과 Gurvits 정리

이중 확률 조 $A_1,\dots,A_n$ 은 다음을 만족하고, 등호는 $A_i=I/n$ 일 때뿐이다.

$$
D(A_1,\dots,A_n)\ge\frac{n!}{n^n}
$$

R. B. Bapat 가 1989 년에 추측했고(Bapat 추측, Bapat's conjecture)[^3], L. Gurvits 가 2006 년에 증명했다[^4]. 대각행렬의 조에서는 [van der Waerden 부등식](van-der-waerden-inequality.md)이다.

증명의 요지. $p(t)=\det(\sum_it_iA_i)$ 는 양의 준정부호 행렬의 결합의 행렬식이므로 [실안정 다항식](real-stable-polynomials.md)이고, 계수가 양의 준정부호 행렬들의 혼합 판별식이라 음이 아니다. Gurvits 는 이중 확률 조에서 $p$ 의 용량이 $1$ 임을 보였다. van der Waerden 부등식 문서의 Gurvits 정리를 $p$ 에 쓰면 $D=\partial^np/\partial t_1\cdots\partial t_n\ge n!/n^n$ 이다.

# 활용

- 영구식의 일반화. 대각행렬을 넣은 혼합 판별식이 영구식이므로, 영구식의 하한과 상한을 대각이 아닌 행렬로 넓힐 때 이 값을 쓴다[^4].
- van der Waerden 부등식의 증명. G. P. Egorychev 는 대각행렬의 혼합 판별식에 Alexandrov 부등식을 써서 van der Waerden 부등식을 증명했다[^2].
- [연산자 척도화](operator-scaling.md). Sinkhorn 척도화를 양의 사상으로 넓힌 연산자 척도화는 행렬의 조를 이중 확률 조로 바꾸고, 이 하한으로 혼합 판별식을 $e^n$ 배 안에서 결정적으로 추정한다[^5].

[^1]: R. B. Bapat, T. E. S. Raghavan, *Nonnegative Matrices and Applications*, Cambridge University Press, 1997, Chapter 5.
[^2]: A. D. Alexandrov, "On the theory of mixed volumes of convex bodies IV: Mixed discriminants and mixed volumes", Matematicheskii Sbornik 3 (1938), 227–251. G. P. Egorychev, "The solution of van der Waerden's problem for permanents", Advances in Mathematics 42 (1981), 299–305.
[^3]: R. B. Bapat, "Mixed discriminants of positive semidefinite matrices", Linear Algebra and its Applications 126 (1989), 107–124.
[^4]: L. Gurvits, "The van der Waerden conjecture for mixed discriminants", Advances in Mathematics 200 (2006), 435–454.
[^5]: L. Gurvits, A. Samorodnitsky, "A deterministic algorithm for approximating the mixed discriminant and mixed volume, and a combinatorial corollary", Discrete & Computational Geometry 27 (2002), 531–550.

# 연관 문서

## 선수지식

- [행렬식](determinants.md)
- [van der Waerden 부등식](van-der-waerden-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #linear_algebra #theorem
