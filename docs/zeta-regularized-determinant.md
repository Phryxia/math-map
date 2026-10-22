# 제타 정규화 행렬식

# 개요

**제타 정규화 행렬식(zeta-regularized determinant)** 은 고윳값이 무한히 커지는 작용소에 대해, 고윳값으로 만든 zeta 함수의 원점에서의 도함수로 정의한 행렬식이다.

$$
\zeta_A(s)=\sum_k\lambda_k^{-s},\qquad {\det}\_\zeta A=\exp\bigl(-\zeta_A^\prime(0)\bigr)
$$

고윳값의 곱 $\prod_k\lambda_k$ 는 발산하지만, $\zeta_A$ 를 $s=0$ 까지 [해석적 연속](analytic-continuation.md)으로 늘리면 유한한 값이 나온다. 콤팩트 다양체의 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)에서는 이 연속이 늘 존재하고, 미분형식의 Laplace 작용소들의 행렬식을 묶은 것이 Ray–Singer 의 해석적 비틀림(analytic torsion)이다.

# 직관

$n\times n$ 양의 정부호 행렬 $A$ 의 고윳값이 $\lambda_1,\dots,\lambda_n$ 이면 행렬식은 고윳값의 곱이고, 로그를 취하면 합이다.

$$
\log\det A=\sum_k\log\lambda_k=-\frac{d}{ds}\Bigl(\sum_k\lambda_k^{-s}\Bigr)\Bigr\vert\_{s=0}
$$

$\lambda^{-s}=e^{-s\log\lambda}$ 를 $s$ 로 미분하면 $-\log\lambda\cdot\lambda^{-s}$ 이고, $s=0$ 에서 $-\log\lambda$ 다.

길이 $2\pi$ 인 원 위의 $-d^2/dx^2$ 에서 같은 일을 한다. 고유함수는 $e^{inx}$ 이고 고윳값은 $n^2$ 이다. $0$ 을 빼면 각 $n^2$ 이 두 번($\pm n$) 나오므로 곱은 $\prod_{n\ge 1}n^4$ 이고 발산한다. 합 쪽은 $\sum_{n\ge 1}2n^{-2s}=2\zeta(2s)$ 이고, $\mathrm{Re}\thinspace s\gt 1/2$ 에서만 수렴한다.

[Riemann zeta 함수](riemann-zeta.md)는 $s=0$ 근방까지 해석적으로 연속되고 $\zeta^\prime(0)=-\tfrac12\log 2\pi$ 다. 그래서 합의 도함수를 $s=0$ 에서 계산할 수 있다.

$$
\frac{d}{ds}2\zeta(2s)\Bigr\vert\_{s=0}=4\zeta^\prime(0)=-2\log 2\pi,\qquad {\det}^\prime\_\zeta\Bigl(-\frac{d^2}{dx^2}\Bigr)=e^{2\log 2\pi}=4\pi^2
$$

발산하던 곱에 값 $4\pi^2$ 이 주어졌다. 같은 계산으로 $\prod_{n\ge1}n$ 의 정규화 값은 $e^{-\zeta^\prime(0)}=\sqrt{2\pi}$ 다.

# 정의

## 스펙트럼 zeta 함수

$M$ 을 닫힌 $n$ 차원 Riemann 다양체, $\Delta$ 를 함수 위의 Laplace–Beltrami 연산자라 한다. $\Delta$ 의 $0$ 이 아닌 고윳값을 $0\lt\lambda_1\le\lambda_2\le\cdots$ 로 쓰고 다음을 둔다.

$$
\zeta\_\Delta(s)=\sum_{k\ge 1}\lambda_k^{-s}
$$

[Weyl 법칙](weyl-law.md)에서 $\lambda_k$ 가 $k^{2/n}$ 규모로 자라므로 이 급수는 $\mathrm{Re}\thinspace s\gt n/2$ 에서 수렴한다. 이것이 **스펙트럼 zeta 함수(spectral zeta function)** 다.

## 행렬식

$\zeta\_\Delta$ 가 $s=0$ 에서 해석적으로 연속되면 다음을 $\Delta$ 의 **제타 정규화 행렬식** 이라 한다. 고윳값 $0$ 을 뺐다는 표시로 $\det^\prime$ 이라 쓴다.

$$
{\det}^\prime\_\zeta\Delta=\exp\bigl(-\zeta\_\Delta^\prime(0)\bigr)
$$

같은 정의가 양의 고윳값을 갖는 타원형 미분작용소 전반에 쓰인다.

## 해석적 비틀림

$\Delta_q$ 를 $q$ 차 미분형식 위의 Hodge Laplace 작용소, $\zeta_q$ 를 그 스펙트럼 zeta 함수라 한다. **해석적 비틀림(analytic torsion)** 은 다음 양이다[^1].

$$
\log T(M)=\frac12\sum_{q=0}^{n}(-1)^q\thinspace q\thinspace\zeta_q^\prime(0)
$$

평탄 직교 벡터다발에 값을 갖는 형식으로 바꾸어도 같은 식으로 정의된다.

# 성질

## 원점에서의 정칙성

> **정리 (Seeley).** $\zeta\_\Delta$ 는 $\mathbb C$ 전체의 유리형 함수로 연속되고, $s=0$ 에서 정칙이다.

증명의 요지는 [감마 함수](gamma-function.md)의 적분 표현으로 zeta 함수를 열핵의 대각합에 대한 [Mellin 변환](mellin-transform.md)으로 쓰는 것이다.

$$
\zeta\_\Delta(s)=\frac{1}{\Gamma(s)}\int_0^\infty t^{s-1}\bigl(\mathrm{tr}\thinspace e^{-t\Delta}-1\bigr)\thinspace dt
$$

$t\to\infty$ 에서는 피적분함수가 $e^{-\lambda_1t}$ 로 줄어 문제가 없다. $t\to 0$ 에서는 열핵의 점근 전개 $\mathrm{tr}\thinspace e^{-t\Delta}\sim(4\pi t)^{-n/2}\sum_{j\ge 0}a_jt^j$ 를 항별로 적분하면 $s=n/2-j$ 에 단순극이 생긴다. $s=0$ 에 생길 수 있는 극은 $1/\Gamma(s)$ 의 영점이 지운다.

같은 계산에서 $\zeta\_\Delta(0)$ 의 값이 나온다. $n$ 이 홀수이면 $\zeta\_\Delta(0)=-1$ 이고, 짝수이면 $\zeta\_\Delta(0)=(4\pi)^{-n/2}a_{n/2}-1$ 이다. $-1$ 은 뺀 고윳값 $0$ 의 개수다.

## 척도 변환과 곱셈성

$c\gt 0$ 이면 $\zeta_{c\Delta}(s)=c^{-s}\zeta\_\Delta(s)$ 이므로 다음이 성립한다.

$$
{\det}^\prime\_\zeta(c\Delta)=c^{\zeta\_\Delta(0)}\thinspace{\det}^\prime\_\zeta\Delta
$$

유한 행렬에서는 지수가 차원이지만, 여기서는 지수가 $\zeta\_\Delta(0)$ 이다. 또 일반적으로 ${\det}\_\zeta(AB)\ne{\det}\_\zeta A\cdot{\det}\_\zeta B$ 이다. 두 쪽의 비를 곱셈 이상(multiplicative anomaly)이라 하고, Wodzicki 잉여(Wodzicki residue)로 적힌다.

## Cheeger–Müller 정리

> **정리 (Cheeger, Müller).** 닫힌 Riemann 다양체와 직교 표현에서 해석적 비틀림은 [Reidemeister 비틀림](reidemeister-torsion.md)과 같다[^2].

Ray 와 Singer 는 해석적 비틀림이 계량의 선택과 무관함을 보이고 이 일치를 추측했다. 렌즈 공간에서는 두 양을 모두 계산해 일치를 확인할 수 있다.

## Fredholm 행렬식과의 차이

[Fredholm 행렬식](fredholm-determinant.md)은 $I+K$ 꼴에서 $K$ 가 대각합류일 때 정의된다. Laplace 작용소의 고윳값은 무한대로 가므로 $I+K$ 꼴로 쓸 수 없고 Fredholm 행렬식이 정의되지 않는다. 제타 정규화 행렬식은 고윳값의 크기 대신 zeta 함수의 해석적 연속을 써서 이 경우에 값을 준다.

# 활용

- **곡면 위의 극값 문제.** 닫힌 곡면에서 넓이를 고정하고 같은 등각류 안의 계량을 움직이면, ${\det}^\prime\_\zeta\Delta$ 는 곡률이 상수인 계량에서 최대가 된다. Osgood, Phillips, Sarnak 이 Polyakov 의 변분 공식으로 증명했다[^3].
- **쌍곡 곡면의 행렬식.** 종수 $g\ge 2$ 의 쌍곡 곡면에서 ${\det}^\prime\_\zeta\Delta$ 는 Selberg zeta 함수의 $s=1$ 에서의 도함수에 $g$ 에만 의존하는 상수를 곱한 것이다. [Selberg 대각합 공식](selberg-trace-formula.md)으로 두 쪽의 로그 미분을 비교해 얻는다.
- **Gauss 적분.** 무한차원 Gauss 적분 $\int e^{-\langle\phi,A\phi\rangle/2}\thinspace d\phi$ 의 값을 $({\det}\_\zeta A)^{-1/2}$ 로 정한다. 양자장론의 일고리 보정이 이 정의를 쓴다.

[^1]: D. B. Ray, I. M. Singer, *R-torsion and the Laplacian on Riemannian manifolds*, Adv. Math. 7 (1971), 145–210.
[^2]: J. Cheeger, *Analytic torsion and the heat equation*, Ann. of Math. 109 (1979), 259–322. W. Müller, *Analytic torsion and R-torsion of Riemannian manifolds*, Adv. Math. 28 (1978), 233–305.
[^3]: B. Osgood, R. Phillips, P. Sarnak, *Extremals of determinants of Laplacians*, J. Funct. Anal. 80 (1988), 148–211.

# 연관 문서

## 선수지식

- [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)
- [Riemann zeta 함수](riemann-zeta.md)
- [Weyl 법칙](weyl-law.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #functional_analysis
