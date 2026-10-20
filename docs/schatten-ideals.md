# Schatten 아이디얼

# 개요

**Schatten 아이디얼(Schatten ideal)** $\mathcal S_p$ 는 특이값 수열이 $\ell^p$ 에 드는 [콤팩트 작용소](compact-operators.md)의 모임이다. $p=1$ 인 것을 추적류(trace class), $p=2$ 인 것을 Hilbert–Schmidt 류(Hilbert–Schmidt class)라 한다.

작용소 노름은 가장 큰 특이값만 재므로 대각합이나 행렬식이 수렴하는지 말해 주지 않는다. Schatten 노름은 특이값 전체를 수열로 보고 그 수열의 $\ell^p$ 크기를 재며, $p$ 가 작을수록 좁은 모임이 된다.

# 직관

유한 행렬에서 대각합은 대각 원소의 합이고 고윳값의 합과 같다. 무한차원 [Hilbert 공간](hilbert-spaces.md)의 [유계 작용소](bounded-operators.md) $A$ 에 같은 정의를 쓰려면 정규직교기저 $e_1,e_2,\dots$ 를 잡아 $\sum_n\langle Ae_n,e_n\rangle$ 을 계산한다.

항등작용소에 이것을 적용하면 모든 항이 $1$ 이라 합이 발산한다. 발산하지 않는 예를 잡아도 문제가 남는다. 수렴이 조건수렴이면 기저를 바꾸거나 항의 순서를 바꾸는 것만으로 값이 달라지므로, 작용소에 붙는 수가 아니라 기저에 붙는 수가 된다.

작용소 노름 $\Vert A\Vert$ 로는 이 수렴을 판정할 수 없다. 그 값은 $A$ 가 가장 크게 늘리는 방향 하나만 보고 나머지 방향에서 얼마나 빨리 작아지는지는 버린다. 대각합이 절대수렴하려면 모든 방향의 기여를 더한 값이 유한해야 한다.

그래서 방향마다의 늘림 비율을 따로 모은다. $(A^\ast A)^{1/2}$ 의 고윳값을 내림차순으로 늘어놓은 것이 특이값 $s_1\ge s_2\ge\dots$ 이고, 기저를 특이벡터로 잡으면 대각 원소가 바로 이 값들이다. $\sum_n s_n$ 이 유한하면 어느 기저에서도 대각합이 절대수렴하고 값이 같다.

$\sum_n s_n^p$ 가 유한하다는 조건을 $p$ 마다 두면 작용소의 모임이 한 줄로 늘어선다. $p=1$ 에서 대각합이 정의되고, $p=2$ 에서 내적이 정의되며, $p=\infty$ 가 작용소 노름이다.

# 정의

## 특이값

콤팩트 작용소 $A$ 의 **특이값(singular value)** 은 양의 자기수반 작용소 $(A^\ast A)^{1/2}$ 의 고윳값을 중복도까지 세어 내림차순으로 늘어놓은 수열 $s_1(A)\ge s_2(A)\ge\dots\ge 0$ 이다. 유한 차원에서는 [특이값 분해](singular-value-decomposition.md)의 대각 성분과 같다.

다음 min-max 표현이 성립한다.

$$
s_n(A)=\min\lbrace\Vert A-F\Vert:\mathrm{rank}\thinspace F\lt n\rbrace
$$

## Schatten 노름

$0\lt p\lt\infty$ 에 대해 다음을 Schatten $p$ 노름이라 한다.

$$
\Vert A\Vert\_p=\left(\sum_{n=1}^{\infty}s_n(A)^p\right)^{1/p}
$$

$$
\mathcal S_p=\lbrace A:\Vert A\Vert\_p\lt\infty\rbrace
$$

$p\ge 1$ 이면 $\Vert\cdot\Vert\_p$ 는 노름이고 $\mathcal S_p$ 는 그 노름으로 완비다. $p=\infty$ 로 두면 $s_1(A)=\Vert A\Vert$ 이므로 $\mathcal S_\infty$ 는 콤팩트 작용소 전체다.

## 아이디얼 성질

$A\in\mathcal S_p$ 이고 $B$ 가 유계이면 $AB$ 와 $BA$ 가 $\mathcal S_p$ 에 속하고 다음이 성립한다.

$$
\Vert AB\Vert\_p\le\Vert A\Vert\_p\Vert B\Vert,\qquad\Vert BA\Vert\_p\le\Vert B\Vert\Vert A\Vert\_p
$$

곧 $\mathcal S_p$ 는 유계 작용소 대수의 양쪽 아이디얼이다. 이 성질이 이름의 유래다.

# 성질

## Hölder 부등식

$1/p+1/q=1$ 이고 $A\in\mathcal S_p$, $B\in\mathcal S_q$ 이면 $AB\in\mathcal S_1$ 이고 다음이 성립한다.

$$
\Vert AB\Vert\_1\le\Vert A\Vert\_p\Vert B\Vert\_q
$$

*증명의 요지.* 특이값에 대한 부등식 $\sum_n s_n(AB)\le\sum_n s_n(A)s_n(B)$ 를 쓰고 수열에 수열의 [Hölder 부등식](holder-inequality.md)을 적용한다. 앞의 부등식은 부분합 $\sum_{n\le N}s_n$ 이 계수 $N$ 이하의 사영으로 자른 대각합의 최댓값이라는 표현에서 나온다.

$p=q=2$ 인 경우가 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)에 대응하고, 두 Hilbert–Schmidt 작용소의 곱이 추적류임을 준다.

## 대각합

$A\in\mathcal S_1$ 이면 임의의 정규직교기저에서 $\sum_n\langle Ae_n,e_n\rangle$ 이 절대수렴하고 그 값이 기저에 의존하지 않는다. 이 값이 $\mathrm{tr}(A)$ 다.

$$
\vert\mathrm{tr}(A)\vert\le\Vert A\Vert\_1
$$

$A$ 의 고윳값을 $\lambda_n$ 이라 하면 $\mathrm{tr}(A)=\sum_n\lambda_n$ 이다. 자기수반이 아닌 작용소에서도 성립하는 이 등식이 Lidskii 정리(Lidskii's theorem)다[^1].

## Hilbert–Schmidt 류

$\mathcal S_2$ 는 내적 $\langle A,B\rangle=\mathrm{tr}(B^\ast A)$ 로 Hilbert 공간이다. $L^2(X)$ 에서 적분핵 $K$ 로 정의된 작용소가 $\mathcal S_2$ 에 드는 것은 $K\in L^2(X\times X)$ 와 동치이고, 이때 $\Vert A\Vert\_2$ 가 $K$ 의 $L^2$ 노름과 같다.

## 포함관계와 쌍대성

$p\le r$ 이면 $\Vert A\Vert\_r\le\Vert A\Vert\_p$ 이므로 다음 포함관계가 성립한다.

$$
\mathcal S_1\subset\mathcal S_2\subset\dots\subset\mathcal S_\infty
$$

$1\lt p\lt\infty$ 에서 $\mathcal S_p$ 의 [쌍대 공간](dual-space.md)은 $\mathcal S_q$ 이고, 쌍대쌍은 $(A,B)\mapsto\mathrm{tr}(AB)$ 다. $\mathcal S_1$ 의 쌍대는 유계 작용소 전체이고, 콤팩트 작용소 전체의 쌍대는 $\mathcal S_1$ 이다.

# 활용

- **행렬식의 무한차원 확장.** [Fredholm 행렬식](fredholm-determinant.md)은 $A\in\mathcal S_1$ 에 대해 $\det(I+A)$ 를 정의하며, 수렴에 $\sum_n\vert\lambda_n\vert\lt\infty$ 가 필요하므로 추적류가 정확한 정의역이다.
- **적분방정식.** 핵이 $L^2$ 인 적분작용소는 Hilbert–Schmidt 류이므로 특이값이 제곱합산 가능하고, 유한계수 작용소로 근사할 때의 오차가 꼬리합으로 억제된다.
- **양자계의 상태.** 밀도행렬은 대각합이 $1$ 인 양의 추적류 작용소다. 두 상태의 구별 가능성을 재는 거리가 차의 $\mathcal S_1$ 노름이다.
- **스펙트럼 점근.** 특이값의 감소 속도를 $p$ 로 잰 것이 작용소의 매끄러움에 대응하므로, 어느 $\mathcal S_p$ 에 드는지가 고윳값 계수 함수의 점근을 준다.

[^1]: B. Simon, *Trace Ideals and Their Applications*, 2nd ed., American Mathematical Society, 2005. Chapter 3 에 Lidskii 정리와 Schatten 노름의 쌍대성이 있다.

# 연관 문서

## 선수지식

- [콤팩트 작용소](compact-operators.md)
- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

- [Fredholm 행렬식](fredholm-determinant.md)

#functional_analysis #analysis #linear_algebra
