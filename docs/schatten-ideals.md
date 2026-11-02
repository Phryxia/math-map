# Schatten 아이디얼

# 개요

**Schatten 아이디얼(Schatten ideal)** 은 무한차원 공간의 작용소 가운데 특이값을 모은 수열이 일정한 속도로 작아지는 것들의 모임이다. 무한 [행렬](matrices.md)의 대각합을 대각 원소의 합 $\sum_n\langle Ae_n,e_n\rangle$ 으로 정하려 하면 이 합이 수렴하지 않거나 기저에 따라 값이 달라질 수 있다. Schatten 아이디얼 $\mathcal S_p$ 는 특이값 수열이 $\ell^p$ 에 드는 [콤팩트 작용소](compact-operators.md)의 모임이고, $p=1$ 인 것에서는 대각합이 기저와 무관하게 정해진다.

# 직관

유한 행렬에서 대각합은 대각 원소의 합이고 고윳값의 합과 같다. 무한차원 [Hilbert 공간](hilbert-spaces.md)의 [유계 작용소](bounded-operators.md) $A$ 에 같은 정의를 쓰려면 정규직교기저 $e_1,e_2,\dots$ 를 잡아 $\sum_n\langle Ae_n,e_n\rangle$ 을 계산한다.

항등작용소에 이것을 적용하면 모든 항이 $1$ 이라 합이 발산한다. 발산하지 않는 예를 잡아도 문제가 남는다. $De_n=\frac{(-1)^{n+1}}{n}e_n$ 인 대각작용소 $D$ 는 대각 원소의 합이 $1-\frac12+\frac13-\cdots=\log 2$ 로 수렴하지만, 이 합은 조건수렴이라 기저 벡터의 순서를 바꾸면 합이 다른 값으로 수렴한다. 그러면 이 값은 작용소에 붙는 수가 아니라 기저에 붙는 수다.

작용소 노름 $\Vert A\Vert$ 로는 이 수렴을 판정할 수 없다. $\Vert D\Vert=1$ 은 $D$ 가 가장 크게 늘리는 방향 $e_1$ 만 보고 나머지 방향에서 얼마나 빨리 작아지는지는 버린다. 대각합이 절대수렴하려면 모든 방향의 기여를 더한 값이 유한해야 한다.

그래서 방향마다의 늘림 비율을 따로 모은다. $D$ 는 $e_n$ 방향을 $1/n$ 배로 늘리고 부호만 바꾸므로 늘림 비율은 $1,\frac12,\frac13,\dots$ 이고, 그 합은 발산한다. 반면 $e_n$ 을 $1/n^2$ 배로 보내는 작용소는 비율의 합이 $\pi^2/6$ 으로 유한하고, 어느 기저에서도 대각합이 절대수렴해 같은 값 $\pi^2/6$ 이 나온다.

비율의 $p$ 제곱의 합이 유한하다는 조건을 $p$ 마다 두면 작용소의 모임이 한 줄로 늘어선다. $D$ 의 비율은 제곱의 합 $\pi^2/6$ 이 유한하므로 $p=2$ 의 모임에는 들고 $p=1$ 의 모임에는 들지 않는다.

# 정의

## 특이값

[콤팩트 작용소](compact-operators.md) $A$ 의 **특이값(singular value)** 은 양의 자기수반 작용소 $(A^\ast A)^{1/2}$ 의 고윳값을 중복도까지 세어 내림차순으로 늘어놓은 수열 $s_1(A)\ge s_2(A)\ge\dots\ge 0$ 이다. 유한 차원에서는 [특이값 분해](singular-value-decomposition.md)의 대각 성분과 같다.

직관 절의 $D$ 에서는 $D^\ast De_n=\frac{1}{n^2}e_n$ 이므로 $(D^\ast D)^{1/2}e_n=\frac1ne_n$ 이고 $s_n(D)=1/n$ 이다. 부호 $(-1)^{n+1}$ 은 특이값에 남지 않는다.

## Schatten 노름

$0\lt p\lt\infty$ 에 대해 콤팩트 작용소 $A$ 의 **Schatten p 노름(Schatten p-norm)** 은 다음 값이다.

$$
\Vert A\Vert\_p=\left(\sum_{n=1}^{\infty}s_n(A)^p\right)^{1/p}
$$

**Schatten 아이디얼(Schatten ideal)** $\mathcal S_p$ 는 이 값이 유한한 콤팩트 작용소의 모임이다.

$$
\mathcal S_p=\lbrace A:\Vert A\Vert\_p\lt\infty\rbrace
$$

$p=\infty$ 에서는 $\Vert A\Vert\_\infty=s_1(A)=\Vert A\Vert$ 로 두고, $\mathcal S_\infty$ 는 콤팩트 작용소 전체다. $\mathcal S_1$ 의 원소를 **추적류(trace class)** 작용소, $\mathcal S_2$ 의 원소를 **Hilbert–Schmidt 작용소(Hilbert–Schmidt operator)** 라 한다.

$e_n$ 을 $n^{-\alpha}e_n$ 으로 보내는 대각작용소 $D_\alpha$ 는 $\Vert D_\alpha\Vert\_p^p=\sum_n n^{-\alpha p}$ 이므로 $\alpha p\gt 1$ 일 때만 $\mathcal S_p$ 에 든다. 직관 절의 $D$ 는 $D_1$ 과 특이값이 같으므로 Hilbert–Schmidt 작용소이고 추적류가 아니다. $D_2$ 는 추적류이고 $\Vert D_2\Vert\_1=\pi^2/6$ 이다.

# 성질

## 유한계수 근사

특이값은 유한계수 작용소로 근사한 오차의 최솟값이다.

$$
s_n(A)=\min\lbrace\Vert A-F\Vert:\mathrm{rank}\thinspace F\lt n\rbrace
$$

$D$ 에서는 $F$ 를 처음 $n-1$ 개 대각 원소만 남긴 작용소로 잡으면 오차가 $1/n$ 이다.

## 노름과 완비성

$p\ge 1$ 이면 $\Vert\cdot\Vert\_p$ 는 노름이고 $\mathcal S_p$ 는 그 노름으로 완비다. $0\lt p\lt 1$ 에서는 삼각부등식이 성립하지 않는다.

## 아이디얼 성질

$A\in\mathcal S_p$ 이고 $B$ 가 유계이면 $AB$ 와 $BA$ 가 $\mathcal S_p$ 에 속하고 다음이 성립한다.

$$
\Vert AB\Vert\_p\le\Vert A\Vert\_p\Vert B\Vert,\qquad\Vert BA\Vert\_p\le\Vert B\Vert\Vert A\Vert\_p
$$

곧 $\mathcal S_p$ 는 유계 작용소 대수의 양쪽 아이디얼(two-sided ideal)이다. 양쪽에서 유계 작용소를 곱해도 그 안에 남는 부분공간이라는 뜻이고, 이름이 여기서 왔다. 증명은 $s_n(AB)\le s_n(A)\Vert B\Vert$ 이며, 이는 유한계수 근사 표현에서 $\Vert AB-FB\Vert\le\Vert A-F\Vert\thinspace\Vert B\Vert$ 로 나온다.

## Hölder 부등식

$1/p+1/q=1$ 이고 $A\in\mathcal S_p$, $B\in\mathcal S_q$ 이면 $AB\in\mathcal S_1$ 이고 다음이 성립한다.

$$
\Vert AB\Vert\_1\le\Vert A\Vert\_p\Vert B\Vert\_q
$$

증명의 요지. 특이값에 대한 부등식 $\sum_n s_n(AB)\le\sum_n s_n(A)s_n(B)$ 를 쓰고 수열에 수열의 [Hölder 부등식](holder-inequality.md)을 적용한다. 앞의 부등식은 Ky Fan 최대 원리(Ky Fan maximum principle) $\sum_{n\le N}s_n(A)=\max\sum_{n\le N}\vert\langle Ax_n,y_n\rangle\vert$ 에서 나온다. 여기서 최댓값은 정규직교 원소 $N$ 개의 두 묶음 $x_n$, $y_n$ 에 대해 잡는다.

$p=q=2$ 인 경우가 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)에 대응하고, 두 Hilbert–Schmidt 작용소의 곱이 추적류임을 준다. $D=D_1$ 의 제곱은 $D_2$ 와 특이값이 같아 추적류다.

## 대각합

$A\in\mathcal S_1$ 이면 임의의 정규직교기저에서 $\sum_n\langle Ae_n,e_n\rangle$ 이 절대수렴하고 그 값이 기저에 의존하지 않는다. 이 값이 대각합(trace) $\mathrm{tr}(A)$ 다.

$$
\vert\mathrm{tr}(A)\vert\le\Vert A\Vert\_1
$$

$A$ 의 고윳값을 대수적 중복도까지 세어 $\lambda_n$ 이라 하면 $\mathrm{tr}(A)=\sum_n\lambda_n$ 이다. 자기수반이 아닌 작용소에서도 성립하는 이 등식이 Lidskii 정리(Lidskii's theorem)다[^1].

## Hilbert–Schmidt 작용소

$\mathcal S_2$ 는 내적 $\langle A,B\rangle=\mathrm{tr}(B^\ast A)$ 로 Hilbert 공간이다. $L^2(X)$ 에서 적분핵 $K$ 로 정의된 작용소가 $\mathcal S_2$ 에 드는 것은 $K\in L^2(X\times X)$ 와 동치이고, 이때 $\Vert A\Vert\_2$ 가 $K$ 의 $L^2$ 노름과 같다.

## 포함관계와 쌍대성

$p\le r$ 이면 $\Vert A\Vert\_r\le\Vert A\Vert\_p$ 이므로 다음 포함관계가 성립한다.

$$
\mathcal S_1\subset\mathcal S_2\subset\dots\subset\mathcal S_\infty
$$

$D_\alpha$ 의 예에서 $\alpha$ 를 $1/r\lt\alpha\le 1/p$ 로 잡으면 $\mathcal S_r$ 에 들고 $\mathcal S_p$ 에 들지 않으므로 $p\lt r$ 일 때 포함이 진포함이다.

$1\lt p\lt\infty$ 에서 $\mathcal S_p$ 의 [쌍대 공간](dual-space.md)은 $\mathcal S_q$ 이고, 쌍대쌍은 $(A,B)\mapsto\mathrm{tr}(AB)$ 다. $\mathcal S_1$ 의 쌍대는 유계 작용소 전체이고, 콤팩트 작용소 전체의 쌍대는 $\mathcal S_1$ 이다.

# 활용

- [Fredholm 행렬식](fredholm-determinant.md)은 $A\in\mathcal S_1$ 에 대해 $\det(I+A)=\prod_n(1+\lambda_n)$ 으로 정의된다. Weyl 부등식(Weyl's inequality) $\sum_n\vert\lambda_n\vert\le\Vert A\Vert\_1$ 이 이 곱의 수렴을 보장한다.
- 핵이 $L^2$ 인 적분작용소는 Hilbert–Schmidt 작용소이므로 특이값의 제곱합이 유한하고, 유한계수 작용소로 근사할 때의 오차가 특이값의 꼬리로 억제된다.
- 양자계의 밀도행렬(density matrix)은 대각합이 $1$ 인 양의 추적류 작용소다. 두 상태의 대각합 거리(trace distance)는 차의 $\mathcal S_1$ 노름의 절반이다.
- $A\in\mathcal S_p$ 이면 특이값이 감소하므로 $ns_n(A)^p\to 0$ 이고, 특이값이 $t$ 이상인 것의 개수는 $o(t^{-p})$ 다. 미분작용소의 역작용소가 어느 $\mathcal S_p$ 에 드는지로 고윳값 개수의 점근을 적는다.

[^1]: B. Simon, *Trace Ideals and Their Applications*, 2nd ed., American Mathematical Society, 2005. Chapter 3 에 Lidskii 정리와 Schatten 노름의 쌍대성이 있다.

# 연관 문서

## 선수지식

- [콤팩트 작용소](compact-operators.md)
- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

- [Fredholm 행렬식](fredholm-determinant.md)

#functional_analysis #analysis #linear_algebra
