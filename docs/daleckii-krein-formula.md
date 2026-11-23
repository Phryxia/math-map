# Daleckii–Krein 공식

# 개요

**Daleckii–Krein 공식(Daleckii–Krein formula)** 은 대칭행렬 $A$ 를 조금 바꿀 때 행렬 함수 $f(A)$ 가 얼마나 바뀌는지를, $f$ 의 그래프에서 두 고윳값을 잇는 할선의 기울기로 주는 공식이다. $A=\mathrm{diag}(1,4)$ 의 비대각 성분을 $0$ 에서 $t$ 로 바꾸면 제곱근 $\sqrt A$ 의 비대각 성분은 약 $t/3$ 만큼 바뀐다. 수의 제곱근의 기울기 $1/(2\sqrt x)$ 는 $x=1$ 에서 $1/2$, $x=4$ 에서 $1/4$ 이라 어느 쪽도 이 배율이 아니다. Daleckii–Krein 공식은 이 배율이 할선의 기울기 $(\sqrt4-\sqrt1)/(4-1)=1/3$ 임을 보이고, 고유벡터 기저 하나로 모든 방향의 변화를 계산하게 한다.

# 직관

$A=\mathrm{diag}(1,4)$ 의 [행렬 제곱근](matrix-square-root.md)은 $\mathrm{diag}(1,2)$ 다. 비대각 성분을 $t$ 로 바꾼 행렬의 양의 정부호 제곱근을 대각 성분 $a$, $d$ 와 비대각 성분 $b$ 로 된 대칭행렬 $X$ 로 두고 제곱하면 다음이 나온다.

$$
X^2=\begin{pmatrix}a^2+b^2&b(a+d)\cr b(a+d)&d^2+b^2\end{pmatrix}=\begin{pmatrix}1&t\cr t&4\end{pmatrix}
$$

$t$ 가 작으면 $b$ 도 작아 $b^2$ 을 무시할 수 있고, $a\approx 1$, $d\approx 2$ 다. 그러면 $b(a+d)=t$ 에서 $b\approx t/3$ 이 나온다. 대각 성분은 $t^2$ 크기로만 바뀐다.

수의 미분을 흉내 내어 $f'(A)=\mathrm{diag}(1/2,1/4)$ 를 대각 성분이 $0$, 나머지 성분이 $1$ 인 $E$ 에 곱하면, 왼쪽에서 곱한 $f'(A)E$ 의 오른쪽 위 성분은 $1/2$, 오른쪽에서 곱한 $Ef'(A)$ 의 그 성분은 $1/4$ 이다. 둘의 평균 $3/8$ 도 $1/3$ 이 아니다. $A$ 와 $E$ 가 교환하지 않아 수의 계산이 맞지 않는다.

맞는 배율은 $b(a+d)=t$ 에 있다. $a+d=\sqrt1+\sqrt4$ 이므로 $b=t/(\sqrt1+\sqrt4)$ 이고, $1/(\sqrt1+\sqrt4)=(\sqrt4-\sqrt1)/(4-1)$ 은 $\sqrt x$ 의 그래프에서 $x=1$ 과 $x=4$ 를 잇는 할선의 기울기다. 대각 성분 $1$ 을 $1+t$ 로 바꾸면 $\sqrt{1+t}\approx 1+t/2$ 라 배율이 한 점의 기울기 $1/2$ 다. 성분 $(i,j)$ 의 배율은 고윳값 $\lambda_i$ 와 $\lambda_j$ 를 잇는 할선의 기울기이고, $i=j$ 이면 접선의 기울기다.

# 정의

## 대칭행렬의 함수

실대칭행렬 $A$ 를 [스펙트럼 정리](spectral-theorem.md)로 $A=U\Lambda U^{\mathsf T}$, $\Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_n)$ 로 쓴다. 고윳값을 모두 포함하는 구간 위의 함수 $f$ 에 대해 다음을 **행렬 함수(matrix function)** 라 한다.

$$
f(A)=U\thinspace\mathrm{diag}\bigl(f(\lambda_1),\dots,f(\lambda_n)\bigr)U^{\mathsf T}
$$

직관 절의 $\sqrt A$ 는 $f(x)=\sqrt x$, $U=I$ 인 경우다.

## 첫째 분할 차분과 Loewner 행렬

미분가능한 $f$ 에 대해 다음을 $f$ 의 **첫째 분할 차분(first divided difference)** 이라 한다. 이것은 [다항식 보간](polynomial-interpolation.md)의 분할 차분 $f\lbrack\lambda,\mu\rbrack$ 에서 $\lambda=\mu$ 인 경우를 미분으로 채운 것이다.

$$
f^{\lbrack 1\rbrack}(\lambda,\mu)=\begin{cases}\dfrac{f(\lambda)-f(\mu)}{\lambda-\mu}&\lambda\ne\mu\cr f'(\lambda)&\lambda=\mu\end{cases}
$$

고윳값 $\lambda_1,\dots,\lambda_n$ 에 대해 $n\times n$ 행렬 $\bigl(f^{\lbrack 1\rbrack}(\lambda_i,\lambda_j)\bigr)$ 를 **Loewner 행렬(Loewner matrix)** 이라 한다. 직관 절에서 $f(x)=\sqrt x$, $\lambda=(1,4)$ 의 Loewner 행렬은 다음이다.

$$
\begin{pmatrix}1/2&1/3\cr 1/3&1/4\end{pmatrix}
$$

## Fréchet 미분

대칭행렬 $A$ 에서 대칭행렬 위의 선형사상 $Df(A)$ 가 다음을 만족하면, $Df(A)$ 를 $f$ 의 $A$ 에서의 **Fréchet 미분(Fréchet derivative)** 이라 한다. [행렬 지수의 Fréchet 미분](matrix-exponential-frechet-derivative.md)은 $f(x)=e^x$ 인 경우다.

$$
\bigl\Vert f(A+E)-f(A)-Df(A)\lbrack E\rbrack\bigr\Vert=o\bigl(\Vert E\Vert\bigr)\qquad(E\to 0)
$$

# 성질

## Daleckii–Krein 정리

$f$ 가 $A$ 의 고윳값을 포함하는 열린 구간에서 연속미분가능하면 $f$ 는 $A$ 에서 Fréchet 미분가능하고, $\tilde E=U^{\mathsf T}EU$ 로 두면 다음이 성립한다.[^1]

$$
Df(A)\lbrack E\rbrack=U\Bigl(\bigl(f^{\lbrack 1\rbrack}(\lambda_i,\lambda_j)\thinspace\tilde E_{ij}\bigr)\_{i,j}\Bigr)U^{\mathsf T}
$$

고유벡터 기저에서 미분은 Loewner 행렬과 $\tilde E$ 의 성분별 곱이다. 직관 절에서는 $U=I$ 이고 $\tilde E=E$ 의 비대각 성분 $1$ 에 Loewner 행렬의 $1/3$ 이 곱해진다.

증명의 요지. $f(x)=x^k$ 이면 $(A+E)^k-A^k$ 의 일차 부분은 $\sum_{m=0}^{k-1}A^mEA^{k-1-m}$ 이다. 고유벡터 기저에서 그 $(i,j)$ 성분은 다음이다.

$$
\sum_{m=0}^{k-1}\lambda_i^m\lambda_j^{k-1-m}\tilde E_{ij}=\frac{\lambda_i^k-\lambda_j^k}{\lambda_i-\lambda_j}\tilde E_{ij}
$$

양변이 $f$ 에 대해 선형이므로 다항식에서 공식이 성립한다. 연속미분가능한 $f$ 는 구간 위에서 $f$ 와 $f'$ 를 함께 다항식으로 고르게 근사할 수 있고, 분할 차분은 $f'$ 의 구간 평균이라 이 근사를 따라 수렴한다.[^2]

## 지수 함수와 제곱 함수

$f(x)=e^x$ 이면 $f^{\lbrack 1\rbrack}(\lambda,\mu)=(e^\lambda-e^\mu)/(\lambda-\mu)$ 이고, 행렬 지수의 Fréchet 미분에서 대각화로 얻은 식과 같다. $f(x)=x^2$ 이면 $f^{\lbrack 1\rbrack}(\lambda,\mu)=\lambda+\mu$ 이고, 공식은 $Df(A)\lbrack E\rbrack=AE+EA$ 를 준다.

## 대각합의 미분

$\tilde E$ 의 대각 성분만 대각합에 남으므로 다음이 성립한다.

$$
\mathrm{tr}\thinspace Df(A)\lbrack E\rbrack=\sum_if'(\lambda_i)\tilde E_{ii}=\mathrm{tr}\bigl(f'(A)E\bigr)
$$

함수 $A\mapsto\mathrm{tr}\thinspace f(A)$ 의 기울기는 $f'(A)$ 다. 대각합에서는 직관 절의 실패한 추측 $f'(A)E$ 가 맞는 답이 된다.

## Frobenius 노름의 Lipschitz 성질

$f$ 의 Lipschitz 상수가 $K$ 이면 모든 $\lambda,\mu$ 에서 $\vert f^{\lbrack 1\rbrack}(\lambda,\mu)\vert\le K$ 다. $\tilde E$ 의 Frobenius 노름은 $E$ 의 것과 같으므로 $\Vert Df(A)\lbrack E\rbrack\Vert_F\le K\Vert E\Vert_F$ 이다. 이것을 $A$ 와 $B$ 를 잇는 선분 위에서 적분하면, 연속미분가능한 $f$ 에 대해 다음이 나온다.[^2]

$$
\Vert f(A)-f(B)\Vert_F\le K\Vert A-B\Vert_F
$$

연산자 노름에서는 같은 상수의 부등식이 성립하지 않을 수 있고, $f(x)=\vert x\vert$ 가 그 예다.[^2]

## 연산자 단조 함수

대칭행렬 사이의 순서 $A\preceq B$ 를 $B-A$ 가 양의 준정부호라는 뜻으로 쓴다. $A\preceq B$ 이면 항상 $f(A)\preceq f(B)$ 인 함수를 [연산자 단조 함수](operator-monotone-functions.md)(operator monotone function)라 한다. 이 순서에서 커지는 방향 $E=\mathbf 1\mathbf 1^{\mathsf T}$ 를 대각행렬 $A$ 에 주면 Daleckii–Krein 공식이 Loewner 행렬 자체를 미분으로 준다. 그러므로 $f$ 가 연산자 단조이면 모든 Loewner 행렬이 양의 준정부호이고, Löwner 는 그 역도 성립함을 보였다.[^3]

$\sqrt x$ 의 Loewner 행렬은 성분이 $1/(\sqrt{\lambda_i}+\sqrt{\lambda_j})$ 이고, 직관 절의 행렬은 행렬식이 $1/8-1/9\gt 0$ 이라 양의 정부호다. $x^2$ 의 Loewner 행렬은 $\lambda=(1,4)$ 에서 대각 성분이 $2$, $8$ 이고 나머지 성분이 $5$ 이며 행렬식이 $-9$ 라, $x^2$ 은 $\lbrack 0,\infty)$ 에서 연산자 단조가 아니다.

## 둘째 Fréchet 미분

두 번 연속미분가능한 $f$ 에 대해 다음을 **둘째 분할 차분(second divided difference)** 이라 한다. $\lambda=\nu$ 이면 연속성으로 채우고, 세 점이 같으면 $f''(\lambda)/2$ 다.

$$
f^{\lbrack 2\rbrack}(\lambda,\mu,\nu)=\frac{f^{\lbrack 1\rbrack}(\lambda,\mu)-f^{\lbrack 1\rbrack}(\mu,\nu)}{\lambda-\nu}
$$

이때 $f$ 는 $A$ 에서 두 번 Fréchet 미분가능하고, 고유벡터 기저에서 둘째 미분은 다음 성분을 갖는다[^2].

$$
\bigl(U^{\mathsf T}D^2f(A)\lbrack E,F\rbrack U\bigr)\_{ik}=\sum\_jf^{\lbrack 2\rbrack}(\lambda\_i,\lambda\_j,\lambda\_k)\bigl(\tilde E\_{ij}\tilde F\_{jk}+\tilde F\_{ij}\tilde E\_{jk}\bigr)
$$

여기서 $\tilde F=U^{\mathsf T}FU$ 이다. 둘째 미분까지 쓴 전개는 다음과 같다.

$$
f(A+E)=f(A)+Df(A)\lbrack E\rbrack+\frac12D^2f(A)\lbrack E,E\rbrack+o\bigl(\Vert E\Vert^2\bigr)
$$

$f(x)=x^3$ 이면 $f^{\lbrack 2\rbrack}(\lambda,\mu,\nu)=\lambda+\mu+\nu$ 이고, 공식은 $D^2f(A)\lbrack E,E\rbrack=2(AE^2+EAE+E^2A)$ 를 준다. 이것은 $(A+E)^3$ 을 전개한 이차 항의 두 배다.

$f$ 가 [연산자 볼록 함수](operator-convex-functions.md)이면 $t\mapsto f(A+tE)$ 가 Löwner 순서로 볼록이므로 $D^2f(A)\lbrack E,E\rbrack\succeq 0$ 이다. 대각행렬 $A$ 와 알맞은 $E$ 에 이 공식을 쓰면 Kraus 의 판정법에 나오는 둘째 분할 차분의 행렬이 나온다.

## 대칭이 아닌 행렬

$A=V\Lambda V^{-1}$ 로 대각화되면 $U$ 를 $V$ 로, $U^{\mathsf T}$ 를 $V^{-1}$ 로 바꾼 같은 공식이 성립한다. 대각화되지 않으면 블록 행렬 공식으로 미분을 얻는다.[^4]

$$
f\begin{pmatrix}A&E\cr 0&A\end{pmatrix}=\begin{pmatrix}f(A)&Df(A)\lbrack E\rbrack\cr 0&f(A)\end{pmatrix}
$$

왼쪽은 [Schur–Parlett 방법](schur-parlett-method.md)으로 계산할 수 있다.

# 활용

- 행렬 함수의 조건수. 대칭행렬에서 Frobenius 노름의 절대 조건수는 Loewner 행렬 성분의 절댓값의 최댓값이다.[^4] 직관 절의 $\sqrt A$ 에서는 $1/2$ 이다.
- 스펙트럼 함수의 최적화. 고윳값에만 달린 함수 $\sum_if(\lambda_i)$ 의 기울기가 $f'(A)$ 라는 사실을 반정부호 계획법과 행렬 완성의 경사법에 쓴다.[^5]
- [행렬 로그](matrix-logarithm.md)의 미분. $\log$ 의 분할 차분 $(\log\lambda-\log\mu)/(\lambda-\mu)$ 로 상대 엔트로피 $\mathrm{tr}\thinspace\rho(\log\rho-\log\sigma)$ 의 미분을 계산한다.
- 섭동 이론. 양자역학의 Hamilton 행렬을 조금 바꿀 때 $e^{-\beta H}$ 같은 함수의 변화를 고유 상태 사이의 분할 차분으로 적는다.[^1]

[^1]: Ju. L. Daleckii, S. G. Krein, "Integration and differentiation of functions of Hermitian operators and applications to the theory of perturbations", *American Mathematical Society Translations, Series 2* 47 (1965), 1–30.

[^2]: R. Bhatia, *Matrix Analysis*, Graduate Texts in Mathematics 169, Springer (1997), V.3 절, X.2 절.

[^3]: K. Löwner, "Über monotone Matrixfunktionen", *Mathematische Zeitschrift* 38 (1934), 177–216.

[^4]: N. J. Higham, *Functions of Matrices: Theory and Computation*, SIAM (2008), 3 장.

[^5]: A. S. Lewis, "Derivatives of spectral functions", *Mathematics of Operations Research* 21 (1996), 576–588.

# 연관 문서

## 선수지식

- [스펙트럼 정리](spectral-theorem.md)
- [행렬 지수의 Fréchet 미분](matrix-exponential-frechet-derivative.md)

## 더 알아보기

- [연산자 단조 함수](operator-monotone-functions.md)

#analysis #linear_algebra #functional_analysis
