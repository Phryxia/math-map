# 유계 작용소

# 개요

**유계 작용소(bounded operator)** 는 Hilbert 공간 사이의 연속 [선형사상](linear-maps.md)이고, 그 스펙트럼은 $T-\lambda I$ 가 가역이 아닌 $\lambda$ 들의 집합이다. $\lbrack 0,1\rbrack$ 위의 함수 $f(x)$ 를 $xf(x)$ 로 보내는 사상은 [행렬](matrices.md)처럼 선형인데도 $xf=\lambda f$ 를 만족하는 $0$ 이 아닌 함수가 없어, 고윳값으로는 분석할 수 없다. 유계 작용소의 이론은 고윳값 대신 스펙트럼을 써서, 이런 사상도 대각화에 해당하는 분해로 다룬다.

# 직관

유한차원에서 [스펙트럼 정리](spectral-theorem.md)는 자기수반 행렬을 고유벡터의 정규직교기저로 대각화한다. 고윳값은 [특성다항식](eigenvalues.md)의 근이므로 반드시 존재한다. 무한차원 [Hilbert 공간](hilbert-spaces.md) $L^2\lbrack 0,1\rbrack$ 에서 $f(x)\mapsto xf(x)$ 로 같은 일을 해 본다.

고윳값 $\lambda$ 를 찾으려면 $xf(x)=\lambda f(x)$, 곧 $(x-\lambda)f(x)=0$ 을 풀어야 한다. $x\ne\lambda$ 인 모든 점에서 $f(x)=0$ 이고, 한 점 $x=\lambda$ 는 적분에 영향을 주지 않으므로 $f=0$ 이다. 고윳값이 하나도 없다.

그래도 $\lambda\in\lbrack 0,1\rbrack$ 에서 $xf-\lambda f=g$ 를 풀면 $f=g/(x-\lambda)$ 이고, $g=1$ 이면 $\int_0^1 (x-\lambda)^{-2}\thinspace dx$ 가 발산해 $f$ 가 $L^2$ 에 없다. 고윳값은 없지만 $\lambda$ 를 빼면 역을 구할 수 없다. 반대로 $\lambda\notin\lbrack 0,1\rbrack$ 이면 $1/(x-\lambda)$ 가 유계라서 역이 구해진다. 고윳값 대신 이렇게 역을 구할 수 없는 $\lambda$ 를 모은 것이 스펙트럼이고, 이 사상의 스펙트럼은 $\lbrack 0,1\rbrack$ 이다.

# 정의

## 유계 작용소

Hilbert 공간 $H$ 와 $K$ 사이의 선형사상 $T:H\to K$ 의 작용소 노름(operator norm)을

$$
\lVert T\rVert=\sup_{\lVert x\rVert\le1}\lVert Tx\rVert
$$

로 두고, 이 값이 유한하면 $T$ 를 **유계 작용소**라 한다. $H$ 위의 유계 작용소 전체를 $\mathcal B(H)$ 로 적는다.

- 직관 절의 곱셈 작용소 $(Mf)(x)=xf(x)$ 는 $\vert xf(x)\vert\le\vert f(x)\vert$ 이므로 $\lVert Mf\rVert\le\lVert f\rVert$ 이고 $\lVert M\rVert\le 1$ 이다. $f$ 를 $\lbrack 1-\varepsilon,1\rbrack$ 의 지시함수로 잡으면 비가 $1$ 에 가까워지므로 $\lVert M\rVert=1$ 이다.
- $\ell^2$ 의 오른쪽 이동 $S(x_1,x_2,\dots)=(0,x_1,x_2,\dots)$ 는 노름을 보존하므로 $\lVert S\rVert=1$ 이다.
- $L^2\lbrack 0,2\pi\rbrack$ 에서 $\sin(nx)$ 는 노름이 $\sqrt\pi$ 이고 미분하면 노름이 $n\sqrt\pi$ 이므로, 미분은 어느 조밀한 정의역에서도 유계가 아니다.

## 수반작용소

$T\in\mathcal B(H)$ 에 대해

$$
\langle Tx,y\rangle=\langle x,T^\ast y\rangle\qquad\forall x,y\in H
$$

를 만족하는 $T^\ast\in\mathcal B(H)$ 를 $T$ 의 **수반작용소(adjoint)** 라 한다.

- $\langle Mf,g\rangle=\int xf\bar g=\langle f,Mg\rangle$ 이므로 $M^\ast=M$ 이다.
- 오른쪽 이동 $S$ 의 수반작용소는 왼쪽 이동 $S^\ast(x_1,x_2,\dots)=(x_2,x_3,\dots)$ 다.

| 부류 | 조건 | 유한차원 대응 | 예 |
|---|---|---|---|
| 자기수반(self-adjoint) | $T=T^\ast$ | 대칭/에르미트 행렬 | $M$ |
| 유니터리(unitary) | $T^\ast T=TT^\ast=I$ | 직교/유니터리 행렬 | $f(x)\mapsto e^{2\pi ix}f(x)$ |
| 정규(normal) | $T^\ast T=TT^\ast$ | 정규행렬 | $f(x)\mapsto ixf(x)$ |
| 사영(projection) | $T=T^\ast=T^2$ | 직교사영 | $\lbrack 0,1/2\rbrack$ 의 지시함수 곱하기 |

$S$ 는 $S^\ast S=I$ 이지만 $SS^\ast\ne I$ 이므로 정규가 아니다.

## 스펙트럼

$T\in\mathcal B(H)$ 의 **스펙트럼(spectrum)** 은

$$
\sigma(T)=\lbrace\lambda\in\mathbb C:\thinspace T-\lambda I\ \text{가 }\mathcal B(H)\text{ 에서 가역이 아니다}\rbrace
$$

다. 여집합을 **분해집합(resolvent set)**, 그 위의 $R(\lambda)=(T-\lambda I)^{-1}$ 을 **분해작용소(resolvent)** 라 한다. 스펙트럼은 $T-\lambda I$ 가 가역이 아닌 이유에 따라 셋으로 나뉜다.

| $T-\lambda I$ | 스펙트럼 |
| --- | --- |
| 단사가 아니다 | 점 스펙트럼(point spectrum), 곧 고윳값 |
| 단사이고 치역이 조밀하지만 전사가 아니다 | 연속 스펙트럼(continuous spectrum) |
| 단사이고 치역이 조밀하지 않다 | 잔여 스펙트럼(residual spectrum) |

- 직관 절의 계산으로 $\sigma(M)=\lbrack 0,1\rbrack$ 이고 전부 연속 스펙트럼이다.
- $\lambda=0$ 에서 오른쪽 이동 $S$ 는 단사이지만 치역이 첫 좌표가 $0$ 인 수열들이라 조밀하지 않으므로 $0$ 은 $S$ 의 잔여 스펙트럼이다. 왼쪽 이동 $S^\ast$ 는 $(1,0,0,\dots)$ 을 $0$ 으로 보내므로 $0$ 이 고윳값이다.

유한차원에서는 단사이면 전사이므로 세 경우가 점 스펙트럼 하나로 합쳐진다.

## 콤팩트 작용소

유한계수 작용소들의 노름 극한으로 얻어지는 작용소를 [콤팩트 작용소](compact-operators.md)라 한다.

- $\ell^2$ 에서 $D(x_n)=(x_n/n)$ 은 첫 $N$ 좌표만 남긴 $D_N$ 과의 차이가 $\lVert D-D_N\rVert=1/(N+1)$ 이므로 콤팩트다. $M$ 은 콤팩트가 아니다.

# 성질

## 연속성과 완비성

선형사상 $T$ 에 대해 유계인 것, 연속인 것, $0$ 에서 연속인 것은 동치다. $\mathcal B(H)$ 는 작용소 노름과 합성 곱에 대해 완비 대수다.

## 수반작용소의 노름

수반작용소는 Riesz 표현 정리(Riesz representation theorem)로 존재하고 유일하다. $\lVert T^\ast\rVert=\lVert T\rVert$ 이고 $\lVert T^\ast T\rVert=\lVert T\rVert^2$ 다. 마지막 등식이 [C 스타 대수](c-star-algebras.md)를 정의하는 성질이다.

## 스펙트럼의 콤팩트성

$\sigma(T)$ 는 $\lbrace|\lambda|\le\lVert T\rVert\rbrace$ 에 포함되는 닫힌 집합이며 비어 있지 않다.

증명의 요지는 다음과 같다. $|\lambda|\gt\lVert T\rVert$ 일 때 Neumann 급수(Neumann series) $\sum \lambda^{-n-1}T^n$ 이 수렴해 역작용소를 주므로 유계다. 가역 작용소들이 열린 집합을 이루므로 닫혀 있다. $\sigma(T)$ 가 비었다면 $R(\lambda)$ 가 전해석이고 무한대에서 0 으로 가므로 Liouville 정리(Liouville's theorem)로 항등적으로 0 이 되어 모순이다.

스펙트럼 반지름(spectral radius)은 다음과 같다.

$$
r(T)=\max_{\lambda\in\sigma(T)}|\lambda|=\lim_{n\to\infty}\lVert T^n\rVert^{1/n}
$$

정규작용소에서는 $r(T)=\lVert T\rVert$ 지만 일반적으로는 더 작을 수 있다. 멱영행렬에서 $r=0\lt\lVert T\rVert$ 다.

## 자기수반 작용소의 실 스펙트럼

$T=T^\ast$ 이면 $\sigma(T)\subset\mathbb R$ 이고, 나아가 $\sigma(T)\subset[m,M]$ 이다. 여기서 $m=\inf_{\lVert x\rVert=1}\langle Tx,x\rangle$ , $M=\sup_{\lVert x\rVert=1}\langle Tx,x\rangle$ 이며 양 끝점이 모두 스펙트럼에 속한다.

증명의 요지는 다음과 같다. $\lambda=a+bi$ 에 $b\ne0$ 이면 $\lVert(T-\lambda)x\rVert\ge|b|\lVert x\rVert$ 가 나오고, 이것이 단사성과 치역의 닫힘을 준다. 치역의 직교여공간은 $T-\bar\lambda$ 의 핵이고 같은 부등식으로 $0$ 이므로 치역이 전체다.

## 콤팩트 작용소의 스펙트럼

콤팩트 작용소의 $0$ 이 아닌 스펙트럼은 고윳값뿐이고, 각 고유공간이 유한차원이며, 고윳값은 $0$ 으로만 모인다. 정의의 예 $D$ 의 고윳값은 $1,1/2,1/3,\dots$ 이고 $0$ 으로 모인다.

## 콤팩트 자기수반 작용소의 스펙트럼 정리

$T$ 가 콤팩트이고 자기수반이면 정규직교기저 $\lbrace e_n\rbrace$ 과 [실수](real-numbers.md) $\lambda_n\to0$ 이 존재해

$$
Tx=\sum_n\lambda_n\langle x,e_n\rangle e_n
$$

가 성립한다.

증명의 요지는 다음과 같다. $\lVert T\rVert$ 또는 $-\lVert T\rVert$ 가 고윳값이다. $\langle Tx,x\rangle$ 를 단위구에서 최대화하는 수열을 잡으면 [콤팩트성](compactness.md)이 부분수열의 수렴을 보장해 최대점이 존재하고 그것이 고유벡터가 된다. 그 고유벡터의 직교여공간으로 제한해 반복한다. 크기가 $\epsilon$ 이상인 고윳값이 무한히 많으면 대응 고유벡터들이 서로 $\sqrt2\epsilon$ 이상 떨어져 수렴 부분수열을 가질 수 없으므로 고윳값은 0 으로 수렴한다.

## 스펙트럼 측도

콤팩트가 아니면 합이 적분으로 바뀐다. 자기수반 $T$ 에 대해 사영값 측도(projection-valued measure) $E$ 가 유일하게 존재해

$$
T=\int_{\sigma(T)}\lambda\thinspace dE(\lambda)
$$

가 성립한다. $E(B)$ 는 Borel 집합 $B$ 에 대응하는 직교사영이며 고유공간의 일반화다. 곱셈 작용소 $M$ 에서 $E(B)$ 는 $B\cap\lbrack 0,1\rbrack$ 의 지시함수를 곱하는 작용소다.

모든 자기수반 작용소는 어떤 측도공간 위의 곱셈 작용소와 유니터리 동치다.

## 함수 계산

사영값 측도로 $\sigma(T)$ 위의 유계 Borel 함수 $f$ 에 작용소를 대응시키는 것을 함수 계산(functional calculus)이라 한다.

$$
f(T)=\int_{\sigma(T)}f(\lambda)\thinspace dE(\lambda)
$$

$f$ 가 다항식이면 보통의 다항식 계산과 일치하고, $f(\lambda)=e^{it\lambda}$ 이면 유니터리군 $e^{itT}$ 가 나온다. 대응 $f\mapsto f(T)$ 가 대수 준동형이므로 함수 사이의 항등식이 작용소 사이의 항등식으로 옮겨진다. $M$ 에서는 $f(M)$ 이 $f(x)$ 를 곱하는 작용소다.

## Fredholm 대안

Fredholm 대안(Fredholm alternative)은 다음과 같다. $T$ 가 콤팩트이고 $\lambda\ne0$ 이면 다음 중 정확히 하나가 성립한다. 모든 $y$ 에 대해 $(T-\lambda)x=y$ 가 유일한 해를 갖거나, 동차방정식 $(T-\lambda)x=0$ 이 0 이 아닌 해를 갖고 그 해공간이 유한차원이다.

유한차원 선형대수의 "단사이면 전사" 가 항등작용소에 콤팩트 작용소를 더한 작용소에서도 성립한다는 진술이다.

# 활용

## 양자역학

관측량은 자기수반 작용소이고 측정 결과의 가능한 값이 스펙트럼이다. 위치와 운동량처럼 연속 스펙트럼을 갖는 관측량은 고윳값을 갖지 않으므로 위치의 정확한 고유상태가 존재하지 않는다.

상태의 시간 발전은 $\psi(t)=e^{-itH/\hbar}\psi(0)$ 이며 함수 계산이 이 지수를 정의한다. Stone 정리(Stone's theorem)가 유니터리군과 자기수반 생성원의 일대일 대응을 준다.

## 적분방정식

핵 $k(x,y)$ 가 제곱적분가능하면 $(Tf)(x)=\int k(x,y)f(y)\thinspace dy$ 가 콤팩트 작용소다. $f-\lambda Tf=g$ 꼴의 방정식에 Fredholm 대안이 적용되고, 핵이 대칭이면 고유함수 전개로 해를 쓸 수 있다.

[Sturm–Liouville 이론](sturm-liouville.md)의 고유함수 전개가 그 사례다. 미분방정식을 [Green 함수](greens-function.md)로 적분방정식으로 바꾸면 비유계 미분 작용소가 콤팩트 적분 작용소로 바뀐다.

## 수치 계산

무한차원 작용소를 유한차원으로 잘라 다룰 때 잘라 낸 행렬의 고윳값이 원래 스펙트럼을 근사하는 정도가 문제가 된다. 콤팩트 작용소에서는 잘 되지만 연속 스펙트럼이 있으면 유한 행렬이 고윳값만 가지므로 흉내 내지 못하고, 스펙트럼 오염(spectral pollution)이라 부르는 가짜 고윳값이 나타난다.

## 작용소 대수

$\mathcal B(H)$ 의 부분대수로 수반에 대해 닫혀 있고 노름 닫힌 것이 C 스타 대수, 약작용소 위상에서 닫힌 것이 [von Neumann 대수](von-neumann-algebras.md)다. Gelfand–Naimark 정리(Gelfand–Naimark theorem)로 모든 단위원을 가진 가환 $C^\ast$ 대수는 콤팩트 Hausdorff 공간 위의 연속함수 대수와 동형이다. 비가환 $C^\ast$ 대수를 이런 함수 대수의 비가환 판으로 다루는 분야가 비가환 기하학(noncommutative geometry)이다.

# 연관 문서

## 선수지식

- [Hilbert 공간](hilbert-spaces.md)
- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

- [콤팩트 작용소](compact-operators.md)
- [비유계 작용소](unbounded-operators.md)
- [Fredholm 작용소](fredholm-operators.md)
- [C 스타 대수](c-star-algebras.md)
- [von Neumann 대수](von-neumann-algebras.md)

#functional_analysis #analysis #linear_algebra
