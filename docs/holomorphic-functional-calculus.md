# 정칙 함수 계산

# 개요

**정칙 함수 계산(holomorphic functional calculus)** 은 복소수에서 정의된 [정칙함수](holomorphic-functions.md) $f$ 에 행렬이나 작용소 $a$ 를 넣어 $f(a)$ 를 정의하는 방법이다. 행렬 $A$ 의 로그를 거듭제곱급수 $\log(1+x)=x-x^2/2+\cdots$ 로 정의하려 하면, $A-I$ 의 고윳값이 $1$ 보다 크기만 해도 급수가 발산한다. 정칙 함수 계산은 급수 대신 Cauchy 적분 공식의 $1/(\lambda-z)$ 자리에 $(\lambda-a)^{-1}$ 을 넣어, $f$ 가 $a$ 의 고윳값 근처에서 정칙이기만 하면 $f(a)$ 를 정의한다.

# 직관

행렬 $A=\mathrm{diag}(1,3)$ 의 로그를 구한다. 급수 $\sum_{n\ge 1}(-1)^{n+1}(A-I)^n/n$ 은 대각성분이 $0$ 과 $2$ 이므로 둘째 성분에서 발산한다. 그런데 대각행렬이면 $\mathrm{diag}(\log 1,\log 3)$ 을 로그로 쓰면 되고, 이것은 지수함수를 씌우면 $A$ 로 돌아온다. 대각화되지 않는 행렬에서는 이 방법도 쓸 수 없다.

수 $z$ 에서 Cauchy 적분 공식(Cauchy integral formula)은 $z$ 를 둘러싸는 곡선 $\Gamma$ 위에서 다음을 준다.

$$
f(z)=\frac{1}{2\pi i}\oint_\Gamma\frac{f(\lambda)}{\lambda-z}\thinspace d\lambda
$$

대각화되지 않는 행렬 $A=\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 에서 $z$ 를 $A$ 로 바꾼다. $(\lambda I-A)^{-1}$ 은 다음과 같다.

$$
(\lambda I-A)^{-1}=\begin{pmatrix}\dfrac{1}{\lambda-1}&\dfrac{1}{(\lambda-1)^2}\cr 0&\dfrac{1}{\lambda-1}\end{pmatrix}
$$

성분마다 Cauchy 적분 공식과 도함수 공식을 쓰면 다음이 나온다.

$$
f(A)=\frac{1}{2\pi i}\oint_\Gamma f(\lambda)(\lambda I-A)^{-1}\thinspace d\lambda=\begin{pmatrix}f(1)&f^\prime(1)\cr 0&f(1)\end{pmatrix}
$$

$f=\log$ 이고 $\Gamma$ 가 $1$ 을 둘러싸며 $0$ 을 둘러싸지 않는 원이면 $\log A=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 이다. 이 행렬 $N$ 은 $N^2=0$ 이라 $e^N=I+N=A$ 이므로 실제로 $A$ 의 로그다.

# 정의

$\mathcal A$ 를 단위 [Banach 대수](banach-algebras.md), $a\in\mathcal A$, $U$ 를 스펙트럼 $\sigma(a)$ 를 포함하는 복소평면의 열린 집합, $f$ 를 $U$ 에서 정칙인 함수라 한다. $\Gamma$ 는 $U\setminus\sigma(a)$ 안의 유한 개의 닫힌 곡선으로, $\sigma(a)$ 의 모든 점을 한 번씩 감고 $U$ 밖의 점은 감지 않는 것이다. 이때 다음 원소를 $f(a)$ 로 정의한다.

$$
f(a)=\frac{1}{2\pi i}\oint_\Gamma f(\lambda)(\lambda 1-a)^{-1}\thinspace d\lambda
$$

$\lambda\mapsto(\lambda 1-a)^{-1}$ 은 $\sigma(a)$ 밖에서 연속이므로 적분은 $\mathcal A$ 의 원소로 수렴한다. 연속 선형범함수를 씌우면 정칙함수의 적분이 되므로, Cauchy 정리에 따라 값은 $\Gamma$ 의 선택에 의존하지 않는다. 직관 절에서 $\mathcal A$ 는 $2\times 2$ 복소행렬의 대수이고 $\sigma(A)=\lbrace 1\rbrace$ 이다.

# 성질

## 다항식과 급수와의 일치

$f$ 가 다항식이면 위 적분은 $a$ 를 대입해 계산한 $f(a)$ 와 같다. $f(z)=\sum_nc_nz^n$ 의 수렴반지름이 스펙트럼 반지름보다 크면 $f(a)=\sum_nc_na^n$ 이다.

증명의 요지. $\vert\lambda\vert$ 가 큰 원 위에서 $(\lambda 1-a)^{-1}=\sum_na^n\lambda^{-n-1}$ 이고, 항별로 적분하면 $\oint\lambda^{k-n-1}d\lambda$ 가 $n=k$ 에서만 $2\pi i$ 다.

## 대수 준동형

$U$ 위의 정칙함수 전체 $\mathcal O(U)$ 에서 $\mathcal A$ 로 가는 사상 $f\mapsto f(a)$ 는 곱을 보존하는 대수 준동형이다. 곧 $(fg)(a)=f(a)g(a)$ 이고 $1\mapsto 1$, $z\mapsto a$ 다. $f_n$ 이 $U$ 의 콤팩트 부분집합에서 균등수렴하면 $f_n(a)$ 가 $f(a)$ 로 노름수렴한다.

곱의 보존은 분해작용소 항등식(resolvent identity)에서 나온다.

$$
(\lambda 1-a)^{-1}-(\mu 1-a)^{-1}=(\mu-\lambda)(\lambda 1-a)^{-1}(\mu 1-a)^{-1}
$$

합성에 대해 $(g\circ f)(a)=g(f(a))$ 가 성립하므로, 직관 절의 $\exp(\log A)=A$ 는 $\exp\circ\log$ 가 $1$ 근처에서 항등함수인 데서 나온다.

## 스펙트럼 사상 정리

$$
\sigma(f(a))=f(\sigma(a))
$$

이것이 스펙트럼 사상 정리(spectral mapping theorem)다.[^1] 직관 절에서 $\sigma(\log A)=\lbrace\log 1\rbrace=\lbrace 0\rbrace$ 이고, $\log A$ 는 멱영이므로 스펙트럼이 $\lbrace 0\rbrace$ 이다.

증명의 요지. $\mu=f(\lambda_0)$ 이고 $\lambda_0\in\sigma(a)$ 이면 $f(z)-\mu=(z-\lambda_0)g(z)$ 인 정칙함수 $g$ 가 있어 $f(a)-\mu=(a-\lambda_0)g(a)$ 이고, 이것이 역원을 가지면 $a-\lambda_0$ 도 역원을 가지게 되어 모순이다. 반대로 $\mu\notin f(\sigma(a))$ 이면 $1/(f-\mu)$ 가 $\sigma(a)$ 근처에서 정칙이고, 그것을 넣은 원소가 $f(a)-\mu$ 의 역원이다.

## Riesz 사영

$\sigma(a)$ 가 서로 떨어진 두 닫힌 집합 $\sigma_1,\sigma_2$ 의 합집합이면, $\sigma_1$ 근처에서 $1$ 이고 $\sigma_2$ 근처에서 $0$ 인 정칙함수 $e$ 를 넣은 $P=e(a)$ 를 **Riesz 사영(Riesz projection)** 이라 한다. $e^2=e$ 이므로 $P^2=P$ 이고, $P$ 는 $a$ 와 교환한다.

$a$ 가 $n\times n$ 행렬이면 $P$ 는 $\sigma_1$ 에 속한 고윳값들의 일반화 고유공간으로의 사영이고, 그 핵은 $\sigma_2$ 쪽 일반화 고유공간이다. $\mathrm{diag}(1,3)$ 에서 $\sigma_1=\lbrace 1\rbrace$ 로 두면 $P=\mathrm{diag}(1,0)$ 이다.

# 활용

- [행렬 로그](matrix-logarithm.md). $\sigma(A)$ 가 $0$ 에서 나가는 반직선 하나를 피하면, 그 반직선 밖에서 정의된 로그의 분지로 $\log A$ 를 정의한다. 직관 절의 두 예가 이 경우다.
- [행렬 부호 함수](matrix-sign-function.md). 허수축에 고윳값이 없는 행렬에서 오른쪽 반평면 쪽 Riesz 사영을 $P$ 라 하면 부호 함수는 $2P-I$ 다.
- [해석 반군](analytic-semigroups.md). 비유계 생성원 $A$ 에서도 분해작용소가 부채꼴 밖에서 유계이면 같은 꼴의 적분으로 $e^{tA}$ 를 정의한다.
- Banach 대수의 지수와 로그. $\Vert a-1\Vert\lt 1$ 이면 $\sigma(a)$ 가 $1$ 을 중심으로 한 반지름 $1$ 의 열린 원판 안에 있어 $\log a$ 가 정의되고 $\exp(\log a)=a$ 다.

[^1]: W. Rudin, *Functional Analysis*, 2판, McGraw-Hill, 1991, 10 장. 정칙 함수 계산의 정의, 대수 준동형성, 스펙트럼 사상 정리, Riesz 사영이 있다.

# 연관 문서

## 선수지식

- [Banach 대수](banach-algebras.md)
- [정칙함수](holomorphic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #complex_analysis #linear_algebra
