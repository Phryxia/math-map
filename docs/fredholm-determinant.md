# Fredholm 행렬식

# 개요

**Fredholm 행렬식(Fredholm determinant)** $\det(I+K)$ 는 대각합류 작용소 $K$ 의 고윳값 $\lambda_i$ 로 $\prod_i(1+\lambda_i)$ 라 정의되는 무한차원의 [행렬식](determinants.md)이다. 적분방정식 $\phi(x)-\int_a^bK(x,y)\thinspace\phi(y)\thinspace dy=f(x)$ 가 모든 $f$ 에 대해 풀리는지 알려면 $I-K$ 가 가역인지 판정해야 하는데, $n\times n$ 행렬식을 정의하는 $n!$ 개 항의 합은 $n\to\infty$ 에서 정의가 서지 않는다. Fredholm 행렬식은 행렬식의 급수 전개를 무한차원으로 옮겨, 그 값이 $0$ 이 아닌지로 가역성을 판정한다.

# 직관

적분방정식

$$
\phi(x) - \int_a^b K(x,y)\thinspace\phi(y)\thinspace dy = f(x)
$$

가 모든 $f$ 에 대해 풀리는지는 $I-K$ 가 가역인지로 정해진다. $n\times n$ [행렬](matrices.md)이면 $\det(I-K)\ne 0$ 으로 판정하고, [대각화](eigenvalues.md) 가능하면 $\det(I-K)=\prod_i(1-\lambda_i)$ 다. 이 곱을 무한차원으로 그대로 옮겨 본다.

$K$ 가 [콤팩트](compactness.md)이면 $\lambda_i\to0$ 이므로 각 인자는 $1$ 에 가까워진다. 고윳값을 $\lambda_i=1/(i+1)$ 로 놓고 부분곱을 계산한다.

$$
\prod_{i=1}^{n}\left(1-\frac{1}{i+1}\right)=\prod_{i=1}^{n}\frac{i}{i+1}=\frac{1}{n+1}
$$

$n\to\infty$ 에서 값이 $0$ 이다. 모든 $\lambda_i$ 가 $1$ 과 다르므로 $I-K$ 는 가역인데 곱은 $0$ 이어서, 이 곱으로는 가역성을 판정할 수 없다. $\sum_i 1/(i+1)$ 이 발산하는 것이 원인이다. 고윳값의 절댓값의 합이 유한하면 곱 $\prod(1-\lambda_i)$ 가 수렴하고, 어느 인자도 $0$ 이 아니면 곱도 $0$ 이 아니다.

# 정의

## 대각합류 작용소

[Hilbert 공간](hilbert-spaces.md) 위의 [콤팩트 작용소](compact-operators.md) $K$ 의 특이값(singular value), 곧 $\sqrt{K^\ast K}$ 의 고윳값을 $s_1 \ge s_2 \ge \cdots$ 라 할 때

$$
\lVert K\rVert_1 = \sum_i s_i \lt\infty
$$

이면 $K$ 를 **대각합류(trace class)** 작용소라 한다. 대각합류 $K$ 의 **대각합(trace)** 은 정규직교기저 $e_i$ 에 대한 $\mathrm{tr}K=\sum_i \langle Ke_i, e_i\rangle$ 다.

- $\ell^2$ 에서 $D(x_i)=(x_i/i^2)$ 은 특이값이 $1/i^2$ 이고 합이 $\pi^2/6$ 이므로 대각합류이고, $\mathrm{tr}D=\pi^2/6$ 이다.
- 직관 절의 $\lambda_i=1/(i+1)$ 을 대각성분으로 갖는 작용소는 특이값의 합이 발산하므로 콤팩트이지만 대각합류가 아니다.

## Fredholm 행렬식

대각합류 $K$ 의 고윳값을 대수적 중복도만큼 세어 $\lambda_i$ 라 할 때

$$
\det(I - zK) = \prod_i (1 - z\lambda_i)
$$

를 **Fredholm 행렬식(Fredholm determinant)** 이라 한다. $K$ 가 연속 커널 $K(x,y)$ 를 갖는 $L^2\lbrack a,b\rbrack$ 위의 대각합류 적분작용소이면 같은 값이 다음 급수로 주어지고, 이것을 Fredholm 급수(Fredholm series)라 한다.

$$
\det(I - zK) = \sum_{k\ge0}\frac{(-z)^k}{k!}\int \det\bigl(K(x_i,x_j)\bigr)\_{i,j\le k}\thickspace d^k x
$$

우변에는 고윳값이 나오지 않는다. 유한차원에서 $\det(I-zK)$ 의 $z^k$ 계수는 크기 $k$ 인 주부분행렬식들의 합이고, Fredholm 급수는 지수 집합을 구간 $\lbrack a,b\rbrack$ 로, 합을 적분으로 바꾼 것이다. $1/k!$ 은 순서 없는 $k$ 개 선택을 순서 있는 적분으로 세며 생긴다.

- 정의의 $D$ 에서는 $\det(I-zD)=\prod_i(1-z/i^2)=\sin(\pi\sqrt z)/(\pi\sqrt z)$ 이고, 영점이 $z=i^2$ 이다.
- $K(x,y)=g(x)h(y)$ 인 계수 $1$ 커널에서는 $k\ge2$ 인 항의 행렬식이 모두 $0$ 이어서 $\det(I-zK)=1-z\int_a^b g(x)h(x)\thinspace dx$ 다.

# 성질

## 대각합류의 구조

대각합 $\sum_i \langle Ke_i, e_i\rangle$ 는 절대수렴하고 정규직교기저에 의존하지 않는다. 대각합류 작용소들은 $\lVert\cdot\rVert_1$ 에 대해 [Banach 공간](banach-spaces.md)을 이루고, 유계 작용소를 곱해도 대각합류로 남는 양쪽 아이디얼이다. $\lbrack a,b\rbrack$ 위의 $C^1$ 커널을 갖는 적분작용소는 대각합류다.

Lidskii 정리(Lidskii's theorem)는 대각합류 $K$ 에 대해 $\mathrm{tr}K = \sum_i\lambda_i$ 라고 진술한다. 우변은 대수적 중복도를 세어 절대수렴하며, 등식은 $K$ 가 [자기수반](bounded-operators.md)이 아닐 때도 성립한다. 이 정리에서 Fredholm 행렬식의 곱 표현과 Fredholm 급수가 같다는 것이 유도된다.

## 대각합을 통한 표현

$\lVert K\rVert \lt 1$ 이면 로그를 전개해

$$
\log\det(I - K) = \mathrm{tr}\log(I - K) = -\sum_{m\ge1}\frac{1}{m}\mathrm{tr}K^m
$$

을 얻는다. 우변의 $\mathrm{tr}K^m$ 은 $m$ 중 적분

$$
\mathrm{tr}K^m = \int K(x_1,x_2)K(x_2,x_3)\cdots K(x_m,x_1)\thinspace d^m x
$$

이므로 섭동 전개나 점근 해석에서 항별로 다룬다. Fredholm 급수의 계수를 $\mathrm{tr}K^m$ 들로 적은 것이 Plemelj–Smithies 공식(Plemelj–Smithies formula)이다.

## 급수의 수렴

Hadamard 부등식(Hadamard's inequality)이 $k\times k$ 행렬식을 행 노름의 곱으로 누르므로, 커널이 $\vert K\vert\le M$ 으로 유계이면 급수의 $k$ 번째 항이 $k^{k/2}M^k/k!$ 규모로 눌린다. $k!$ 이 $k^{k/2}$ 보다 빨리 자라므로 급수는 모든 $z$ 에서 수렴하고 $z$ 의 완전함수다. 그 영점이 $1/\lambda_i$ 다.

## 가역성 판정

대각합류 $K$ 에 대해 $I - K$ 가 가역일 필요충분조건은 $\det(I-K) \ne 0$ 이다.

$K$ 가 콤팩트이므로 $I - K$ 는 지표 0 인 Fredholm 작용소이고 단사이면 전사다. 이것이 Fredholm 대안(Fredholm alternative)이다. 제차 방정식 $\phi = K\phi$ 가 자명해만 가지면 비제차 방정식이 모든 $f$ 에 대해 유일해를 갖고, 그렇지 않으면 해가 없거나 무한히 많다.

## 곱셈성과 연속성

대각합류 $K, L$ 에 대해

$$
\det\bigl((I-K)(I-L)\bigr) = \det(I-K)\thinspace\det(I-L)
$$

이 성립한다. 또 $\lVert K_n - K\rVert_1 \to 0$ 이면 $\det(I-K_n) \to \det(I-K)$ 이고, 더 정량적으로

$$
\bigl\lvert\det(I-K) - \det(I-L)\bigr\rvert \le \lVert K - L\rVert_1\thinspace\exp\bigl(\lVert K\rVert_1 + \lVert L\rVert_1 + 1\bigr)
$$

이다. 이 연속성은 대각합류 노름에 대한 것이고 작용소 노름에 대한 것이 아니다. 작용소 노름으로 가까운 두 작용소의 행렬식이 크게 다를 수 있다.

유한 랭크 근사가 대각합류 노름으로 수렴하면 행렬식도 같은 속도로 수렴하므로, 이 부등식이 수치 계산의 근거다.

## 지표와의 비교

$I - K$ 는 [Fredholm 작용소](fredholm-operators.md)로서 지표가 항상 $0$ 이므로 지표로는 $I-K$ 들을 구별할 수 없고, 행렬식은 $K$ 마다 다른 값을 준다. 일반 Fredholm 작용소에서는 지표가 정의되지만 행렬식은 정의되지 않는다.

## 정규화 행렬식

$K$ 가 대각합류가 아니고 특이값의 제곱합만 유한한 Hilbert–Schmidt 작용소(Hilbert–Schmidt operator)이면 곱 $\prod(1-\lambda_i)$ 가 발산할 수 있다. 이때는

$$
{\det}\_2(I - K) = \prod_i (1-\lambda_i)e^{\lambda_i}
$$

처럼 발산하는 1 차 항을 지수인자로 상쇄한 정규화 행렬식(regularized determinant)을 쓴다. 직관 절의 $\lambda_i=1/(i+1)$ 에서도 $\prod(1-\lambda_i)e^{\lambda_i}$ 는 $0$ 이 아닌 값으로 수렴한다. [Schatten 아이디얼](schatten-ideals.md) $\mathcal S_p$ 의 $K$ 에 대해 ${\det}\_p$ 가 같은 방식으로 정의된다. 곱셈성은 ${\det}\_2\bigl((I-K)(I-L)\bigr)={\det}\_2(I-K)\thinspace{\det}\_2(I-L)\thinspace e^{-\mathrm{tr}(KL)}$ 로 바뀐다.

# 활용

## Nyström 구적을 쓴 계산

Fredholm 급수를 항별로 계산하면 다중적분이 겹친다. Bornemann 의 방법은 $[a,b]$ 위의 구적 마디 $x_i$ 와 무게 $w_i$ 를 잡고

$$
\det(I-K) \thickspace\approx\thickspace \det\Bigl(\delta_{ij} - \sqrt{w_i w_j}\thinspace K(x_i,x_j)\Bigr)\_{i,j=1}^{n}
$$

라는 $n \times n$ 행렬식 하나를 계산하는 것이다. $\sqrt{w_iw_j}$ 는 대칭을 유지하려고 나눠 붙였고, 계산의 본체는 적분작용소를 구적으로 이산화한 [Nyström 법](nystrom-method.md)의 근사다. 커널이 해석적이고 [Gauss 구적](gaussian-quadrature.md)을 쓰면 수렴이 지수적이라 마디 몇 개로 기계정밀도에 닿는다.

## 간격 확률과 무작위 행렬

[결정점과정](determinantal-point-process.md)에서 구간 $J$ 에 점이 하나도 없을 확률이 정확히 $\det(I - K)\_{L^2(J)}$ 다. 무작위 행렬의 고윳값이 결정점과정을 이루므로, 고윳값 사이의 간격 분포가 전부 이 행렬식으로 쓰인다. 최대 고윳값의 분포인 [Tracy–Widom 분포](tracy-widom.md) $F_2$ 도 Airy 커널(Airy kernel)에 대한 $\det(I - K_{\mathrm{Ai}})\_{L^2(s,\infty)}$ 이며, 커널과 구간만 바꾸면 같은 수치 절차로 계산된다.

확률에서 나온 양이 해석적으로 다루기 쉬운 결정식으로 표현되고, 그 결정식이 [Painlevé 방정식](painleve-equations.md)과 이어진다.

## 산란과 정규화된 행렬식

산란 이론에서 Jost 함수(Jost function)가 섭동 작용소의 Fredholm 행렬식으로 쓰이고, 그 위상의 증가가 속박 상태의 개수와 같다는 것이 Levinson 정리(Levinson's theorem)다. Birman–Krein 공식(Birman–Krein formula)은 산란 행렬의 행렬식을 스펙트럼 이동 함수(spectral shift function)로 적는다.

Laplace 작용소처럼 대각합류가 아닌 대상에는 [제타 정규화 행렬식](zeta-regularized-determinant.md) $\exp(-\zeta'(0))$ 을 쓴다. 정의는 Fredholm 행렬식과 다르지만 발산하는 고윳값 곱에 유한한 값을 지정한다는 점에서 ${\det}\_p$ 정규화와 같은 계열이다. 해석적 비틀림(analytic torsion)과 곡면 위의 행렬식 공식이 이 틀에 속한다.[^1]

[^1]: Barry Simon, *Trace Ideals and Their Applications*, 2nd ed., Chapters 3 and 5. 대각합류 아이디얼, Lidskii 정리, Fredholm 행렬식의 정의와 곱셈성, 정규화 행렬식 $\det\_p$ . 수치 계산은 Folkmar Bornemann, *On the numerical evaluation of Fredholm determinants*, Mathematics of Computation 79 (2010), §§1–3.

# 연관 문서

## 선수지식

- [행렬식](determinants.md)
- [Fredholm 작용소](fredholm-operators.md)
- [Schatten 아이디얼](schatten-ideals.md)

## 더 알아보기

- [결정점과정](determinantal-point-process.md)

#functional_analysis #analysis #linear_algebra #computation
