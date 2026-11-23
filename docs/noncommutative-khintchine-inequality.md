# 비가환 Khintchine 부등식

# 개요

**비가환 Khintchine 부등식(noncommutative Khintchine inequality)** 은 행렬들에 동전으로 정한 부호를 붙여 더한 합의 크기가, 행렬들의 제곱을 더한 행렬의 제곱근과 상수배 안에서 같다는 부등식이다. 수에 부호를 붙여 더한 합은 수들의 제곱합의 제곱근 정도의 크기를 갖는다. 부호를 붙이는 대상이 서로 교환하지 않는 행렬이면 제곱합도 행렬이 되므로, 합의 크기를 어떤 양과 견주어야 하는지부터 정해야 한다.

이 부등식은 그 양이 $\sum\_kA\_kA\_k^\ast$ 와 $\sum\_kA\_k^\ast A\_k$ 의 제곱근이고, 둘의 Schatten 노름 가운데 큰 쪽이 합의 크기와 상수배 안에서 같다는 것을 보인다.

# 직관

수 $a\_1,\dots,a\_n$ 에 독립인 부호 $\varepsilon\_k$ 를 붙인 합 $S=\sum\_k\varepsilon\_ka\_k$ 는 [Khintchine 부등식](khintchine-inequality.md)에 따라 어느 지수 $p$ 에서든 $\sqrt{\sum\_ka\_k^2}$ 의 상수배 안의 크기를 갖는다.

대각행렬 $A\_k=\mathrm{diag}(a\_k,b\_k)$ 에 부호를 붙여 더하면 합은 $\mathrm{diag}(S\_a,S\_b)$ 이고, $S\_a$ 와 $S\_b$ 는 각 대각 성분의 부호 합이다. 대각 성분마다 Khintchine 부등식을 쓰면 $\vert S\_a\vert$ 는 $\sqrt{\sum\_ka\_k^2}$ 정도이고 $\vert S\_b\vert$ 는 $\sqrt{\sum\_kb\_k^2}$ 정도다. 이 두 값은 행렬 $\bigl(\sum\_kA\_k^2\bigr)^{1/2}$ 의 대각 성분이다. 그래서 대각행렬에서는 수의 제곱합 자리에 행렬 $\sum\_kA\_k^2$ 가 온다.

이번에는 서로 교환하지 않는 두 행렬을 쓴다.

$$
A=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix},\qquad B=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}
$$

$Y=\varepsilon\_1A+\varepsilon\_2B$ 는 대각행렬이 아니고, 성분마다 Khintchine 부등식을 쓸 수 없다. $A^2=B^2=I$ 이고 $AB=-BA$ 이므로 부호가 어떻게 나오든 $Y^2=2I$ 이고, $Y$ 의 고윳값은 $\pm\sqrt2$ 다. 한편 $A^2+B^2=2I$ 의 제곱근은 $\sqrt2 I$ 이고 고윳값이 $\sqrt2,\sqrt2$ 다. 성분으로 갈라지지 않는 합에서도 고윳값의 크기가 제곱합 행렬의 제곱근과 같다.

# 정의

$d\times d$ 복소행렬 $X$ 에 대해 $\vert X\vert=(X^\ast X)^{1/2}$ 로 두고, $1\le p\lt\infty$ 에서 다음 값을 Schatten $p$ 노름이라 한다.

$$
\Vert X\Vert\_{S\_p}=\bigl(\mathrm{tr}\thinspace\vert X\vert^p\bigr)^{1/p}
$$

이것은 $X$ 의 특이값을 모은 벡터의 $\ell^p$ 노름이고, [Schatten 아이디얼](schatten-ideals.md)의 노름을 행렬에 쓴 것이다. 직관 절의 $Y$ 는 특이값이 $\sqrt2,\sqrt2$ 이므로 $\Vert Y\Vert\_{S\_p}^p=2\cdot 2^{p/2}$ 다.

행렬 $A\_1,\dots,A\_n$ 에 대해 다음 두 행렬을 각각 **행 제곱함수(row square function)** 와 **열 제곱함수(column square function)** 라 한다.

$$
R=\Bigl(\sum\_kA\_kA\_k^\ast\Bigr)^{1/2},\qquad C=\Bigl(\sum\_kA\_k^\ast A\_k\Bigr)^{1/2}
$$

$A\_k$ 가 모두 대칭이면 두 행렬은 같고, 직관 절의 $A,B$ 에서는 $R=C=\sqrt2 I$ 다.

# 성질

## 정리

**정리(Lust-Piquard, 1986).** $2\le p\lt\infty$ 이고 $\varepsilon\_1,\dots,\varepsilon\_n$ 이 독립인 Rademacher 열(Rademacher sequence)이면, $d$ 와 $n$ 에 무관한 상수 $B\_p$ 가 있어 모든 $d\times d$ 행렬 $A\_1,\dots,A\_n$ 에 대해 다음이 성립한다[^1].

$$
\max\bigl(\Vert R\Vert\_{S\_p},\Vert C\Vert\_{S\_p}\bigr)\le\Bigl(\mathbb E\thinspace\Bigl\Vert\sum\_k\varepsilon\_kA\_k\Bigr\Vert\_{S\_p}^p\Bigr)^{1/p}\le B\_p\max\bigl(\Vert R\Vert\_{S\_p},\Vert C\Vert\_{S\_p}\bigr)
$$

$B\_p$ 는 $\sqrt p$ 의 상수배로 자라고, $p$ 가 짝수이면 최적 상수는 $\bigl((p-1)(p-3)\cdots 1\bigr)^{1/p}$ 이다[^4]. 이 값은 수의 Khintchine 부등식의 최적 상수와 같다. $1\le p\lt 2$ 에서는 가운데 값이 $A\_k=B\_k+D\_k$ 꼴의 분해 전체에 걸친 다음 값의 하한과 동등하다[^2].

$$
\Bigl\Vert\Bigl(\sum\_kB\_kB\_k^\ast\Bigr)^{1/2}\Bigr\Vert\_{S\_p}+\Bigl\Vert\Bigl(\sum\_kD\_k^\ast D\_k\Bigr)^{1/2}\Bigr\Vert\_{S\_p}
$$

$p=2$ 에서는 양쪽이 등호다. 부호의 곱의 기댓값에서 서로 다른 첨자의 항이 사라지므로 다음이 성립한다.

$$
\mathbb E\thinspace\Bigl\Vert\sum\_k\varepsilon\_kA\_k\Bigr\Vert\_{S\_2}^2=\sum\_k\mathrm{tr}\thinspace A\_k^\ast A\_k
$$

이것은 $\Vert R\Vert\_{S\_2}^2$ 와 $\Vert C\Vert\_{S\_2}^2$ 둘 다와 같다.

## 두 제곱함수가 모두 필요한 예

$A\_k=e\_1e\_k^{\mathsf T}$ $(k=1,\dots,d)$ 로 두면 $\sum\_k\varepsilon\_kA\_k$ 는 첫 행이 $(\varepsilon\_1,\dots,\varepsilon\_d)$ 이고 나머지가 $0$ 인 행렬이다. 계수가 $1$ 이므로 특이값은 $\sqrt d$ 하나이고, 모든 $p$ 에서 Schatten 노름이 $\sqrt d$ 다.

$\sum\_kA\_kA\_k^\ast=d\thinspace e\_1e\_1^{\mathsf T}$ 이므로 $\Vert R\Vert\_{S\_p}=\sqrt d$ 이고, $\sum\_kA\_k^\ast A\_k=I$ 이므로 $\Vert C\Vert\_{S\_p}=d^{1/p}$ 다. $p\gt 2$ 이면 $d^{1/p}$ 는 $\sqrt d$ 보다 작아서 열 제곱함수만으로는 합의 크기를 아래에서 누르지 못한다. 전치한 $A\_k=e\_ke\_1^{\mathsf T}$ 에서는 두 제곱함수의 역할이 바뀐다.

## 연산자 노름

연산자 노름 $\Vert X\Vert$ 는 가장 큰 특이값이므로 $\Vert X\Vert\le\Vert X\Vert\_{S\_p}\le d^{1/p}\Vert X\Vert$ 다. $p=\log d$ 로 두면 $d^{1/p}=e$ 이므로 정리에서 다음이 나온다.

$$
\mathbb E\thinspace\Bigl\Vert\sum\_k\varepsilon\_kA\_k\Bigr\Vert\le c\sqrt{\log d}\thinspace\max\Bigl(\Bigl\Vert\sum\_kA\_kA\_k^\ast\Bigr\Vert^{1/2},\Bigl\Vert\sum\_kA\_k^\ast A\_k\Bigr\Vert^{1/2}\Bigr)
$$

여기서 $c$ 는 절대상수다. [행렬 Bernstein 부등식](matrix-bernstein-inequality.md)이 기댓값에 주는 $\sqrt{2\sigma^2\log d}$ 와 같은 꼴이고, 대각행렬 $\mathrm{diag}(S\_1,\dots,S\_d)$ 에서 독립인 부호 합 $d$ 개의 최댓값이 $\sqrt{2\log d}$ 정도이므로 $\sqrt{\log d}$ 인수는 줄일 수 없다.

## Rudelson 보조정리

벡터 $y\_1,\dots,y\_n\in\mathbb R^d$ 에서 $A\_k=y\_ky\_k^{\mathsf T}$ 로 두면 $A\_k^2=\Vert y\_k\Vert^2y\_ky\_k^{\mathsf T}$ 이므로 다음이 성립한다.

$$
\sum\_kA\_k^2\preceq\max\_k\Vert y\_k\Vert^2\sum\_ky\_ky\_k^{\mathsf T}
$$

앞 절의 한계에 넣으면 Rudelson 보조정리(Rudelson's lemma)가 나온다[^3].

$$
\mathbb E\thinspace\Bigl\Vert\sum\_k\varepsilon\_ky\_ky\_k^{\mathsf T}\Bigr\Vert\le c\sqrt{\log d}\thinspace\max\_k\Vert y\_k\Vert\thinspace\Bigl\Vert\sum\_ky\_ky\_k^{\mathsf T}\Bigr\Vert^{1/2}
$$

# 활용

- [스펙트럼 희소화](spectral-sparsification.md). Spielman 과 Srivastava 는 유효저항으로 뽑은 간선의 계수 하나 행렬의 평균이 기댓값에 모인다는 것을 Rudelson 보조정리로 보였다.
- 무작위 벡터의 표본 공분산. 독립인 표본 벡터 $y\_k$ 로 만든 $\frac1n\sum\_ky\_ky\_k^{\mathsf T}$ 가 [공분산](covariance.md) 행렬에 연산자 노름으로 가까워지는 데 필요한 표본 수가 $d\log d$ 정도라는 것을 Rudelson 은 대칭화와 이 보조정리로 보였다[^3].
- 작용소 공간 이론. Lust-Piquard 와 Pisier 는 이 부등식으로 Rademacher 합이 Schatten 류 안에서 생성하는 부분공간이 행 공간과 열 공간의 합이나 교집합과 동형이라는 것을 보였다[^2].
- [행렬 Chernoff 부등식](matrix-chernoff-inequality.md)과 행렬 Bernstein 부등식은 꼬리 확률을 주고, 이 부등식은 모멘트를 준다. 기댓값만 필요하면 두 방법이 같은 $\sqrt{\log d}$ 인수를 준다.

[^1]: F. Lust-Piquard, "Inégalités de Khintchine dans Cp (1 < p < ∞)", *Comptes Rendus de l'Académie des Sciences Paris, Série I* 303 (1986), 289–292.
[^2]: F. Lust-Piquard, G. Pisier, "Non commutative Khintchine and Paley inequalities", *Arkiv för Matematik* 29 (1991), 241–260.
[^3]: M. Rudelson, "Random vectors in the isotropic position", *Journal of Functional Analysis* 164 (1999), 60–72.
[^4]: A. Buchholz, "Operator Khintchine inequality in non-commutative probability", *Mathematische Annalen* 319 (2001), 1–16.

# 연관 문서

## 선수지식

- [Khintchine 부등식](khintchine-inequality.md)
- [Schatten 아이디얼](schatten-ideals.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #functional_analysis #linear_algebra
