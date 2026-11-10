# Petersson 공식

# 개요

**Petersson 공식(Petersson formula)** 은 같은 무게의 [모듈러 형식](modular-forms.md) 전체에 걸쳐 Fourier 계수의 곱을 더한 값을 계산할 수 있는 두 항으로 적는 등식이다. 무게 $12$ 의 첨점 형식은 $\Delta=q\prod_{n\ge 1}(1-q^n)^{24}$ 하나뿐이고 그 계수 $1,-24,252,\dots$ 는 규칙 없이 움직이며, 무게가 커지면 첨점 형식이 여럿이 되어 각각의 계수를 따로 계산하기 더 어렵다. Petersson 공식은 기저 전체에 걸친 합 $\sum_f\overline{a_f(m)}a_f(n)$ 을 $m=n$ 일 때만 남는 항과 [Kloosterman 합](kloosterman-sums.md)의 합으로 바꿔, 개별 계수 대신 계수의 평균을 계산한다.

# 직관

무게 $k$, 준위 $1$ 의 첨점 형식 전체를 훑으며 Fourier 계수 $a_f(n)$ 의 크기를 재려 한다. 한 형식만 보면 Deligne 의 상계(Deligne bound)가 $\vert a_f(n)\vert\le d(n)n^{(k-1)/2}$ 를 주지만, 기저 전체에서 계수의 곱 $\overline{a_f(m)}a_f(n)$ 을 더한 값은 그 상계를 항마다 쓰면 형식의 개수만큼 커질 뿐이고 서로 다른 형식 사이의 상쇄가 들어오지 않는다.

그래서 그 합을 한 함수에서 읽는다. $m$ 번째 Poincaré 급수(Poincaré series)는 내적을 걸면 $f$ 의 $m$ 번째 계수를 내놓는 성질로 만든 첨점 형식이다. 이 급수를 기저로 전개한 뒤 $n$ 번째 Fourier 계수를 보면 계수의 곱의 합이 나온다.

같은 급수를 정의에서 직접 전개하면 항등원에서 $m=n$ 일 때의 기여가 떨어지고 나머지 잉여류에서 분모 $c$ 마다 [Kloosterman 합](kloosterman-sums.md)이 나온다. 두 계산이 한 수를 주므로 등식이 생긴다.

# 정의

## Petersson 내적

$S_k$ 를 무게 $k$, 준위 $1$ 의 첨점 형식 공간이라 한다. $f,g\in S_k$ 의 내적은

$$
\langle f,g\rangle=\int_{\mathcal F}f(z)\thinspace\overline{g(z)}\thinspace y^{k-2}\thinspace dx\thinspace dy
$$

이고 $\mathcal F$ 는 모듈러 군의 기본 영역, $z=x+iy$ 다. 첨점에서의 감소로 적분이 수렴한다. 이것을 **Petersson 내적(Petersson inner product)** 이라 한다.[^1] 무게 $12$ 의 $\Delta$ 에서는 $\langle\Delta,\Delta\rangle\approx 1.0354\times 10^{-6}$ 이다.

## Poincaré 급수

$m\ge1$ 에 대해

$$
P_m(z)=\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}(cz+d)^{-k}e^{2\pi im\gamma z},\qquad\gamma=\begin{pmatrix}a&b\cr c&d\end{pmatrix}
$$

를 **$m$ 번째 Poincaré 급수** 라 한다. $\Gamma=\mathrm{SL}\_2(\mathbb Z)$ 이고, 합은 평행이동 부분군 $\Gamma_\infty=\lbrace\pm\begin{pmatrix}1&t\cr 0&1\end{pmatrix}\rbrace$ 에 대한 잉여류에서 돈다. $(cz+d)^{-k}$ 를 무게 $k$ 의 자동형 인자(automorphy factor)라 한다. $k\gt 2$ 에서 급수가 절대수렴하고 $P_m\in S_k$ 다.

## 공식

$\mathcal B_k$ 를 $S_k$ 의 직교기저라 할 때 모든 $m,n\ge1$ 에서

$$
\frac{\Gamma(k-1)}{(4\pi\sqrt{mn})^{k-1}}\sum_{f\in\mathcal B_k}\frac{\overline{a_f(m)}\thinspace a_f(n)}{\langle f,f\rangle}=\delta_{mn}+2\pi i^{-k}\sum_{c\ge1}\frac{K(m,n;c)}{c}J_{k-1}\left(\frac{4\pi\sqrt{mn}}{c}\right)
$$

가 성립한다. 이 등식을 Petersson 공식이라 한다. $\delta_{mn}$ 은 $m=n$ 에서 $1$, 아니면 $0$ 이고 $J_{k-1}$ 은 제1종 [Bessel 함수](bessel-functions.md)다. 왼변은 기저의 선택에 의존하지 않는다.

$k=12$ 이면 $S_{12}=\mathbb C\Delta$ 이고 $a_\Delta(1)=1$, $i^{-12}=1$ 이다. $m=n=1$ 에서 왼변은 $\Gamma(11)/\bigl((4\pi)^{11}\langle\Delta,\Delta\rangle\bigr)\approx 2.840$ 이다. 오른변의 $c=1$ 항은 $K(1,1;1)=1$ 이므로 $2\pi J_{11}(4\pi)\approx 1.830$ 이고, $c\ge 2$ 의 항을 모두 더하면 약 $0.010$ 이어서 $1+1.830+0.010$ 이 왼변과 같다.

# 성질

## Poincaré 급수의 내적

$f=\sum a_f(n)q^n\in S_k$ 이면 다음이 성립한다.

$$
\langle f,P_m\rangle=\frac{\Gamma(k-1)}{(4\pi m)^{k-1}}\thinspace a_f(m)
$$

증명의 요지. $\mathcal F$ 위의 잉여류 합을 띠 $0\le x\le 1$, $y\gt 0$ 위의 적분 하나로 펼친다. $x$ 에 대한 적분이 $f$ 의 $m$ 번째 계수를 뽑고, $y$ 에 대한 적분은 다음과 같다.

$$
\int_0^\infty e^{-4\pi my}y^{k-2}dy=\frac{\Gamma(k-1)}{(4\pi m)^{k-1}}
$$

$P_m$ 을 직교기저로 전개하면 계수가 이 식으로 정해지고, 그 $n$ 번째 Fourier 계수를 정의에서 직접 계산한 것과 견주면 Petersson 공식이 나온다.

## 대각 항과 오차 항

$J_{k-1}(x)$ 가 $x\to0$ 에서 $x^{k-1}$ 크기이므로 둘째 항의 $c$ 번째 항은 $(\sqrt{mn}/c)^{k-1}$ 쯤이다. $mn$ 이 작으면 $c=1$ 항부터 이미 작아 대각 항이 왼변을 지배한다. 이 공식은 $\delta_{mn}$ 을 주항으로, Kloosterman 쪽을 오차로 두고 쓴다.

## Hecke 고유형식으로 다시 쓰기

$\mathcal B_k$ 를 Hecke 고유형식의 기저로 잡고 계수를 $a_f(1)=1$ 로 규격화하면 $\langle f,f\rangle$ 이 $f$ 의 대칭제곱 $L$ 함수(symmetric square L-function)의 $s=1$ 특수값과 상수배로 같다. 그래서 왼변이 Hecke 고윳값의 곱을 그 특수값으로 나눈 조화 가중(harmonic weight) 합이 된다. 아족 평균에서 쓰는 가중이 이 꼴이다.

## Kuznetsov 공식과의 관계

무게 $0$ 의 [Maass 형식](maass-forms.md)에 대한 같은 꼴의 등식이 [Kuznetsov 공식](kuznetsov-formula.md)이다. 두 공식은 같은 논증을 서로 다른 스펙트럼에 적용한 것이다. Petersson 쪽은 유한차원 공간 $S_k$ 를 다루므로 왼변이 유한합이고 연속 스펙트럼이 없다.

Kuznetsov 쪽은 Laplace 작용소(Laplace operator)의 스펙트럼이 무한하고 Eisenstein 쪽 적분이 따라온다. 무게 $k$ 를 함께 평균하면 두 공식의 Bessel 가중이 서로 옮겨진다.

## 역방향의 쓰임

오른변을 목표로 두면 왼변의 상계가 Kloosterman 합의 합의 상계를 준다. Deligne 의 상계를 왼변에 넣으면 Weil 상계(Weil bound)를 항마다 쓰는 것보다 작은 값이 나오므로, 이 방향으로 Kloosterman 합 사이의 상쇄가 증명된다[^2].

# 활용

- 첨점 형식 아족에서 $L(f,\frac12)$ 의 거듭제곱 평균을 계산할 때 계수의 곱의 합이 나오고 Petersson 공식이 그것을 대각 항과 오차로 가른다. 대각 항이 주항을 준다.
- 적률의 하한과 상한을 견주면 아족의 양의 비율에서 $L(f,\frac12)\ne0$ 이라는 결론이 나온다.
- 아족의 $L$ 함수 영점 분포를 무작위 [행렬](matrices.md)의 고윳값 통계와 견주는 계산([저수준 영점](low-lying-zeros.md))에서 명시 공식(explicit formula)의 합이 Petersson 가중으로 평균된다.
- 공식을 오른변에서 읽어 Kloosterman 합의 가중 합을 추정한다.

[^1]: H. Petersson, "Über eine Metrisierung der ganzen Modulformen", Jahresbericht der Deutschen Mathematiker-Vereinigung 49 (1939), 49–75.
[^2]: J.-M. Deshouillers, H. Iwaniec, "Kloosterman sums and Fourier coefficients of cusp forms", Inventiones Mathematicae 70 (1982), 219–288.

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [Kloosterman 합](kloosterman-sums.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #analysis
