# Golden–Thompson 부등식

# 개요

**Golden–Thompson 부등식(Golden–Thompson inequality)** 은 에르미트 행렬 $H$, $K$ 에 대해 $\mathrm{tr}\thinspace e^{H+K}\le\mathrm{tr}(e^He^K)$ 라는 부등식이다. 수에서는 $e^{a+b}=e^ae^b$ 이지만 행렬이 교환하지 않으면 $e^{H+K}$ 와 $e^He^K$ 는 다른 행렬이고, 곱 $e^He^K$ 는 대칭이지도 않다.

이 부등식은 대각합만 보면 두 값 사이에 언제나 한 방향의 순서가 있다고 답한다. 그래서 합의 지수를 다루기 어려울 때 지수의 곱으로 바꾸어 위에서 누를 수 있다.

# 직관

다음 두 대칭행렬을 잡는다.

$$
H=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix},\qquad K=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}
$$

$H^2=K^2=I$ 이고 $HK=-KH$ 이므로 $(H+K)^2=2I$ 다. 지수의 급수를 짝수 차와 홀수 차로 모으면 다음이 나온다.

$$
e^{H+K}=\cosh\sqrt2\thinspace I+\frac{\sinh\sqrt2}{\sqrt2}(H+K)
$$

$H+K$ 의 대각합이 $0$ 이므로 $\mathrm{tr}\thinspace e^{H+K}=2\cosh\sqrt2\approx 4.356$ 이다.

같은 방법으로 $e^H=\mathrm{diag}(e,e^{-1})$, $e^K=\cosh 1\thinspace I+\sinh 1\thinspace K$ 다. $e^HK$ 의 대각성분은 $0$ 이므로 대각합은 다음과 같다.

$$
\mathrm{tr}(e^He^K)=\cosh 1\cdot(e+e^{-1})=2\cosh^21\approx 4.762
$$

곱의 대각합이 합의 지수의 대각합보다 크다.

$H$, $K$ 가 교환하면 $e^{H+K}=e^He^K$ 이므로 두 값이 같다.

# 정의

$n\times n$ 에르미트 행렬 $H$ 의 지수 $e^H$ 는 [행렬 지수](matrix-exponential.md)이고, 고윳값마다 지수를 취한 양의 정부호 행렬이다. 대각합 $\mathrm{tr}$ 은 대각성분의 합이고 고윳값의 합과 같다.

**Golden–Thompson 부등식** 은 모든 에르미트 행렬 $H$, $K$ 에 대해 다음이 성립한다는 정리다[^1][^2].

$$
\mathrm{tr}\thinspace e^{H+K}\le\mathrm{tr}\bigl(e^He^K\bigr)
$$

직관 절의 $H$, $K$ 에서 좌변은 $2\cosh\sqrt2$, 우변은 $2\cosh^21$ 이다.

# 성질

## 증명의 요지

양의 정부호 행렬 $X$, $Y$ 와 자연수 $m$ 에 대해 다음이 성립한다.

$$
\mathrm{tr}(XY)^{2m}\le\mathrm{tr}(X^2Y^2)^m
$$

$Z=XY$ 의 고윳값의 절댓값을 $2m$ 제곱해 더한 값은 특이값을 $2m$ 제곱해 더한 값 이하다([Weyl 다수화 정리](weyl-majorant-theorem.md)). 특이값의 $2m$ 제곱의 합은 $\mathrm{tr}(ZZ^{\ast})^m=\mathrm{tr}(XY^2X)^m$ 이고, 대각합의 순환성으로 $\mathrm{tr}(X^2Y^2)^m$ 과 같다.

이 부등식을 $m=2^{k-1},2^{k-2},\dots,1$ 에 차례로 쓰면 $\mathrm{tr}(XY)^{2^k}\le\mathrm{tr}(X^{2^k}Y^{2^k})$ 이다. $X=e^{H/2^k}$, $Y=e^{K/2^k}$ 를 넣으면 우변은 $\mathrm{tr}(e^He^K)$ 이고, $k\to\infty$ 에서 좌변은 [Lie–Trotter 곱 공식](lie-trotter-formula.md)에 따라 $\mathrm{tr}\thinspace e^{H+K}$ 로 간다.

## 등호

$H$, $K$ 가 교환하면 등호가 성립한다. 역으로 등호가 성립하면 $H$, $K$ 가 교환한다[^3].

## 세 행렬

세 에르미트 행렬에서 $\mathrm{tr}\thinspace e^{H+K+L}\le\vert\mathrm{tr}(e^He^Ke^L)\vert$ 는 일반적으로 성립하지 않는다. Lieb 는 $e^K$ 를 곱하는 자리에 적분으로 정의한 사상을 넣은 세 행렬 판본을 증명했다[^4].

**정리(Lieb 의 세 행렬 부등식, Lieb's triple matrix inequality).** 에르미트 행렬 $H$, $K$, $L$ 에 대해 다음이 성립한다.

$$
\mathrm{tr}\thinspace e^{H+K+L}\le\int\_0^\infty\mathrm{tr}\Bigl(e^H\bigl(e^{-K}+t\bigr)^{-1}e^L\bigl(e^{-K}+t\bigr)^{-1}\Bigr)\thinspace dt
$$

세 행렬이 교환하면 $\int\_0^\infty(a+t)^{-2}\thinspace dt=1/a$ 이므로 우변은 $\mathrm{tr}(e^He^Ke^L)$ 이다. $L=0$ 이면 같은 적분으로 우변이 $\mathrm{tr}(e^He^K)$ 가 되어 Golden–Thompson 부등식이 나온다.

적분 $\int\_0^\infty(A+t)^{-1}B(A+t)^{-1}\thinspace dt$ 는 [행렬 로그](matrix-logarithm.md)의 $A$ 에서 $B$ 방향의 미분이다. Lieb 는 이 부등식을 [Lieb 오목성 정리](lieb-concavity-theorem.md) 문서의 대각합 지수 함수의 오목성에서 유도했다[^4].

# 활용

- [행렬 Bernstein 부등식](matrix-bernstein-inequality.md). Ahlswede 와 Winter 는 독립인 무작위 행렬 합의 $\mathbb E\thinspace\mathrm{tr}\thinspace e^{\theta\sum X\_k}$ 를 이 부등식으로 $X\_k$ 하나씩 떼어 내어 [행렬 Chernoff 부등식](matrix-chernoff-inequality.md)을 증명했다[^5]. 이 방법은 분산 대신 $\sum\_k\Vert\mathbb EX\_k^2\Vert$ 를 주므로, Tropp 은 [Lieb 오목성 정리](lieb-concavity-theorem.md) 쪽 방법으로 이를 $\Vert\sum\_k\mathbb EX\_k^2\Vert$ 로 줄였다.
- 양자 통계역학. 해밀토니언이 $H\_0+V$ 인 계의 분배함수 $\mathrm{tr}\thinspace e^{-\beta(H\_0+V)}$ 는 $\mathrm{tr}(e^{-\beta H\_0}e^{-\beta V})$ 이하다. Golden 과 Thompson 이 이 부등식을 얻은 것이 분배함수의 한계를 구하는 문제에서였다[^1][^2].

[^1]: S. Golden, "Lower bounds for the Helmholtz function", *Physical Review* 137 (1965), B1127–B1128.
[^2]: C. J. Thompson, "Inequality with applications in statistical mechanics", *Journal of Mathematical Physics* 6 (1965), 1812–1813.
[^3]: D. Petz, "A survey of certain trace inequalities", *Banach Center Publications* 30 (1994), 287–298.
[^4]: E. H. Lieb, "Convex trace functions and the Wigner–Yanase–Dyson conjecture", *Advances in Mathematics* 11 (1973), 267–288.
[^5]: R. Ahlswede, A. Winter, "Strong converse for identification via quantum channels", *IEEE Transactions on Information Theory* 48 (2002), 569–579.

# 연관 문서

## 선수지식

- [Lie–Trotter 곱 공식](lie-trotter-formula.md)
- [Weyl 다수화 정리](weyl-majorant-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #linear_algebra #probability
