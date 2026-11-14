# Banach 대수

# 개요

**Banach 대수(Banach algebra)** 는 원소끼리 곱할 수 있고, 곱의 크기가 크기의 곱을 넘지 않는 완비 노름 공간이다. 원 위의 함수 $f(\theta)=\sum_n a_ne^{in\theta}$ 가 계수의 절댓값의 합이 유한하고 어디서도 $0$ 이 아닐 때, $1/f$ 도 같은 꼴로 쓸 수 있는지 묻는 문제가 이 구조에서 나온다. 이런 함수 전체가 Banach 대수를 이루고, 원소가 역원을 갖는지는 대수에서 복소수로 가는 곱셈적 사상들이 그 원소에서 $0$ 이 되는지로 판정된다.

# 직관

원 위의 함수 가운데 [Fourier 급수](fourier-series.md)의 계수가 절대수렴하는 것만 모은다. 계수를 $a_n$ 이라 하면 $\sum_n\vert a_n\vert$ 가 유한한 함수다. 두 함수를 곱하면 계수는 $c_n=\sum_k a_kb_{n-k}$ 가 되고 $\sum\vert c_n\vert\le\sum\vert a_n\vert\sum\vert b_n\vert$ 이므로 곱도 이 모임에 남는다.

$f(\theta)=2+e^{i\theta}$ 는 $\vert e^{i\theta}\vert=1\lt 2$ 이므로 어디서도 $0$ 이 아니다. 등비급수를 쓰면 $1/f$ 의 계수가 나온다.

$$
\frac{1}{2+e^{i\theta}}=\frac12\cdot\frac{1}{1+e^{i\theta}/2}=\sum_{n\ge 0}\frac{(-1)^n}{2^{n+1}}e^{in\theta}
$$

계수의 절댓값의 합은 $\sum_{n\ge 0}2^{-n-1}=1$ 이다. 따라서 $1/f$ 도 이 모임에 있다.

이 계산은 $e^{i\theta}/2$ 의 계수의 절댓값의 합이 $1$ 보다 작아서 등비급수가 수렴했기 때문에 된다. 항이 여럿이고 어느 상수에도 그 크기로 가깝지 않은 $f$ 에서는 같은 계산이 수렴하지 않는다.

다른 판정은 점마다의 값에서 온다. 점 $\theta$ 하나를 고르면 $f\mapsto f(\theta)$ 는 곱을 곱으로 보내는 사상이고, $f$ 에 역원이 있으면 이 값은 $0$ 일 수 없다. 거꾸로 이런 사상이 모두 점에서의 값이고 그 값이 모두 $0$ 이 아니면 역원이 있다는 것이 성질 절의 Wiener 정리다.

# 정의

## Banach 대수

복소 [Banach 공간](banach-spaces.md) $\mathcal A$ 에 결합적이고 쌍선형인 곱이 있어 모든 $a,b$ 에서 다음을 만족하면 $\mathcal A$ 를 **Banach 대수(Banach algebra)** 라 한다.

$$
\Vert ab\Vert\le\Vert a\Vert\thinspace\Vert b\Vert
$$

곱의 항등원 $1$ 이 있고 $\Vert 1\Vert=1$ 이면 **단위 Banach 대수(unital Banach algebra)** 라 한다. 이 문서의 대수는 모두 단위 대수다.

- 직관 절의 함수 모임은 노름 $\Vert f\Vert=\sum_n\vert a_n\vert$ 로 가환 단위 Banach 대수다. 이것을 **Wiener 대수(Wiener algebra)** 라 하고 $A(\mathbb T)$ 로 쓴다. 항등원은 상수함수 $1$ 이다.
- 콤팩트 Hausdorff 공간 $X$ 위의 연속함수 전체 $C(X)$ 는 점별 곱과 상한 노름으로 가환 Banach 대수다.
- Banach 공간 $E$ 위의 유계 선형작용소 전체 $\mathcal B(E)$ 는 합성과 작용소 노름으로 Banach 대수다. $E=\mathbb C^n$ 이면 $n\times n$ [행렬](matrices.md)의 대수다.

## 스펙트럼

$a\in\mathcal A$ 의 **스펙트럼(spectrum)** 은 $a-\lambda 1$ 이 $\mathcal A$ 에서 역원을 갖지 않는 복소수 $\lambda$ 전체이고 $\sigma(a)$ 로 쓴다. **스펙트럼 반지름(spectral radius)** 은 $r(a)=\max\lbrace\vert\lambda\vert:\lambda\in\sigma(a)\rbrace$ 다.

$A(\mathbb T)$ 에서 $f=2+e^{i\theta}$ 이면 $f-\lambda$ 는 $\vert\lambda-2\vert=1$ 일 때 어떤 $\theta$ 에서 $0$ 이 되므로 역원이 없다. 성질 절의 Wiener 정리에 따라 $\sigma(f)$ 는 $2$ 를 중심으로 한 반지름 $1$ 의 원이고, $0$ 이 그 원 위에 없으므로 $f$ 에 역원이 있다. $r(f)=3=\Vert f\Vert$ 다.

## 지표

$\mathcal A$ 에서 $\mathbb C$ 로 가는 $0$ 이 아닌 선형사상 $\varphi$ 가 $\varphi(ab)=\varphi(a)\varphi(b)$ 를 만족하면 $\varphi$ 를 $\mathcal A$ 의 **지표(character)** 라 한다. 가환 대수 $\mathcal A$ 의 지표 전체를 $\Delta(\mathcal A)$ 로 쓰고, $\mathcal A$ 의 쌍대공간의 약 $\ast$ 위상을 준다.

$A(\mathbb T)$ 에서 점 $\theta$ 마다 $\varphi_\theta(f)=f(\theta)$ 는 지표다. $C(X)$ 에서도 점 $x$ 에서의 값 $f\mapsto f(x)$ 가 지표다.

# 성질

## Neumann 급수

$\Vert a\Vert\lt 1$ 이면 $1-a$ 는 역원을 갖고 다음이 성립한다.

$$
(1-a)^{-1}=\sum_{n\ge 0}a^n
$$

$\Vert a^n\Vert\le\Vert a\Vert^n$ 이므로 급수가 완비성으로 수렴하고, $(1-a)$ 를 곱하면 부분합이 $1-a^{N+1}$ 이 되어 $1$ 로 간다. 직관 절의 등비급수가 $a=-e^{i\theta}/2$ 인 경우다. 따라서 역원을 갖는 원소 전체는 열린 집합이고, $\sigma(a)$ 는 원판 $\vert\lambda\vert\le\Vert a\Vert$ 에 포함되는 닫힌 집합이다.

## 스펙트럼의 콤팩트성

모든 $a\in\mathcal A$ 에서 $\sigma(a)$ 는 공집합이 아닌 콤팩트 집합이다.

증명의 요지. $\sigma(a)$ 가 비었다고 하자. 연속 선형범함수 $\ell$ 마다 $\lambda\mapsto\ell((a-\lambda 1)^{-1})$ 은 복소평면 전체에서 정칙이고 $\vert\lambda\vert\to\infty$ 에서 $0$ 으로 간다. [Liouville 정리](liouville-theorem.md)로 이 함수는 $0$ 이고, [Hahn–Banach 정리](hahn-banach-theorem.md)로 $\ell$ 을 바꿔 가면 $(a-\lambda 1)^{-1}=0$ 이 되어 모순이다.

## Gelfand–Mazur 정리

$0$ 이 아닌 모든 원소가 역원을 갖는 복소 Banach 대수는 $\mathbb C1$ 과 같다. 이것이 Gelfand–Mazur 정리(Gelfand–Mazur theorem)다. $a$ 마다 $\sigma(a)$ 에서 $\lambda$ 를 하나 고르면 $a-\lambda 1$ 이 역원을 갖지 않으므로 $a=\lambda 1$ 이다.

## 스펙트럼 반지름 공식

$$
r(a)=\lim_{n\to\infty}\Vert a^n\Vert^{1/n}
$$

극한이 존재하고 $r(a)\le\Vert a\Vert$ 다.[^1] 증명의 요지. $(a-\lambda 1)^{-1}=-\sum_n a^n\lambda^{-n-1}$ 은 $\vert\lambda\vert\gt r(a)$ 에서 정칙이므로, 범함수를 씌운 Laurent 급수가 그 영역에서 수렴한다. [균등유계성 원리](uniform-boundedness.md)로 $\Vert a^n\lambda^{-n}\Vert$ 가 유계이고, 여기서 $\limsup\Vert a^n\Vert^{1/n}\le r(a)$ 가 나온다. 반대 방향은 $\lambda^n-a^n$ 이 $\lambda-a$ 를 인수로 가지므로 $\lambda^n\in\sigma(a^n)$ 이고 $\vert\lambda\vert^n\le\Vert a^n\Vert$ 인 데서 나온다.

## 가환 대수의 Gelfand 이론

$\mathcal A$ 가 가환이면 다음이 성립한다.[^1]

- 지표는 연속이고 노름이 $1$ 이다. 지표의 핵은 극대 아이디얼이고, 모든 극대 아이디얼은 정확히 하나의 지표의 핵이다. 몫 $\mathcal A/M$ 이 나눗셈 대수가 되어 Gelfand–Mazur 정리로 $\mathbb C$ 와 같기 때문이다.
- $a$ 가 역원을 갖는 것은 모든 지표에서 $\varphi(a)\ne 0$ 인 것과 동치다. 역원이 없는 원소는 어느 극대 아이디얼에 속하기 때문이다. 따라서 $\sigma(a)=\lbrace\varphi(a):\varphi\in\Delta(\mathcal A)\rbrace$ 다.
- $\Delta(\mathcal A)$ 는 콤팩트 Hausdorff 공간이다. [Banach–Alaoglu 정리](banach-alaoglu.md)로 쌍대공간의 단위구가 약 $\ast$ 콤팩트이고 $\Delta(\mathcal A)$ 가 그 안의 닫힌 집합이다.

**Gelfand 변환(Gelfand transform)** 은 $a$ 를 함수 $\hat a(\varphi)=\varphi(a)$ 로 보내는 사상 $\mathcal A\to C(\Delta(\mathcal A))$ 다. 이 사상은 곱을 보존하고 $\Vert\hat a\Vert\_\infty=r(a)\le\Vert a\Vert$ 다. 단사가 아닐 수 있고, 핵은 $r(a)=0$ 인 원소 전체다.

## Wiener 정리

$A(\mathbb T)$ 의 지표는 점에서의 값 $\varphi_\theta$ 뿐이다. 따라서 계수가 절대수렴하는 Fourier 급수 $f$ 가 어디서도 $0$ 이 아니면 $1/f$ 의 Fourier 급수도 계수가 절대수렴한다. 이것이 Wiener 정리(Wiener's lemma)다.[^2]

증명의 요지. 지표 $\varphi$ 에 대해 $z=\varphi(e^{i\theta})$ 로 둔다. $\vert z\vert\le\Vert e^{i\theta}\Vert=1$ 이고 $\vert z^{-1}\vert=\vert\varphi(e^{-i\theta})\vert\le 1$ 이므로 $\vert z\vert=1$ 이다. $z=e^{i\theta_0}$ 이면 $\varphi$ 와 $\varphi_{\theta_0}$ 은 삼각다항식에서 같고, 삼각다항식이 $A(\mathbb T)$ 에서 조밀하므로 연속성으로 $\varphi=\varphi_{\theta_0}$ 이다. 가환 Gelfand 이론의 둘째 항목을 적용하면 정리가 나온다.

# 활용

- [C 스타 대수](c-star-algebras.md). 대합과 C 스타 항등식 $\Vert a^\ast a\Vert=\Vert a\Vert^2$ 을 더한 Banach 대수다. 이 항등식에서 자기수반 원소의 $r(a)=\Vert a\Vert$ 가 나오고, Gelfand 변환이 등거리 동형이 된다.
- [유계 작용소](bounded-operators.md)의 스펙트럼. $\mathcal B(H)$ 에 이 문서의 정리를 적용하면 작용소 스펙트럼의 콤팩트성, 비공집합, 스펙트럼 반지름 공식이 나온다.
- [합성곱](convolution.md) 대수. $L^1(\mathbb R)$ 은 합성곱으로 단위원 없는 가환 Banach 대수이고, 지표는 [Fourier 변환](fourier-transform.md)의 각 진동수에서의 값이다. Wiener 의 [Tauber 정리](tauberian-theorems.md)는 이 대수에서 Fourier 변환이 어디서도 $0$ 이 아닌 원소의 평행이동이 조밀한 부분공간을 펼친다는 진술이다.

[^1]: W. Rudin, *Functional Analysis*, 2판, McGraw-Hill, 1991, 10 장과 11 장. 스펙트럼의 비공집합, Gelfand–Mazur 정리, 스펙트럼 반지름 공식, 가환 Banach 대수의 Gelfand 이론이 있다.

[^2]: N. Wiener, "Tauberian theorems", *Annals of Mathematics* **33** (1932), 1–100. Gelfand 이론을 쓴 짧은 증명은 I. Gelfand, "Normierte Ringe", *Matematicheskii Sbornik* **9** (1941), 3–24 에 있다.

# 연관 문서

## 선수지식

- [Banach 공간](banach-spaces.md)

## 더 알아보기

- [C 스타 대수](c-star-algebras.md)

#functional_analysis #analysis #algebra
