# Bergman 공간

# 개요

**Bergman 공간(Bergman space)** 은 단위원판의 정칙함수 가운데 원판 전체에서 절댓값의 제곱을 넓이로 적분한 값이 유한한 것들의 공간이다. $(1-z)^{-1/2}$ 는 점 $1$ 근처에서 커져서 원 위의 제곱 평균이 반지름 $r\to 1$ 에서 무한대로 가므로 [Hardy 공간](hardy-spaces.md) $H^2$ 에 들지 않는다. 원판의 넓이로 적분하면 유한하므로 이 함수는 Bergman 공간에 든다. 경계값이 없는 정칙함수도 원판 안의 값만으로 크기를 재어 Hilbert 공간에 넣는 방법이다.

# 직관

$f(z)=\sum\_{n\ge 0}a\_nz^n$ 의 넓이 적분을 계수로 적는다. [극좌표](polar-coordinates.md) $z=re^{i\theta}$ 에서 서로 다른 $n,m$ 의 $z^n\bar z^m$ 은 $\theta$ 로 적분하면 $0$ 이므로 다음이 나온다.

$$
\frac1\pi\int_{\mathbb D}\vert z^n\vert^2\thinspace dA=\frac1\pi\int_0^{2\pi}\int_0^1r^{2n}\thinspace r\thinspace dr\thinspace d\theta=\frac{1}{n+1}
$$

그래서 $\frac1\pi\int_{\mathbb D}\vert f\vert^2\thinspace dA=\sum\vert a\_n\vert^2/(n+1)$ 이다. $H^2$ 의 노름 $\sum\vert a\_n\vert^2$ 과 비교하면 높은 차수의 계수에 $1/(n+1)$ 의 무게가 붙는다.

$(1-z)^{-1/2}$ 의 계수는 $n^{-1/2}$ 정도로 줄어든다. $\sum 1/n$ 은 발산하므로 $H^2$ 에 들지 않고, $\sum 1/n^2$ 은 수렴하므로 넓이 적분은 유한하다. $1/(1-z)$ 는 계수가 모두 $1$ 이고 $\sum 1/(n+1)$ 이 발산하므로 넓이 적분도 무한하다.

# 정의

$\mathbb D$ 위의 넓이 측도를 $\pi$ 로 나눈 $dA/\pi$ 는 원판 전체에 $1$ 을 준다. $1\le p\lt\infty$ 일 때 **Bergman 공간** $A^p$ 는 $\mathbb D$ 의 정칙함수 $f$ 가운데 다음 값이 유한한 것들의 집합이다.

$$
\Vert f\Vert\_{A^p}^p=\frac1\pi\int_{\mathbb D}\vert f(z)\vert^p\thinspace dA(z)
$$

$A^2$ 는 $L^2(\mathbb D,dA/\pi)$ 의 부분공간이고 내적은 $\langle f,g\rangle=\frac1\pi\int_{\mathbb D}f\bar g\thinspace dA$ 다. 직관 절의 계산에서 $\sqrt{n+1}\thinspace z^n$ 들이 $A^2$ 의 정규직교기저다. $H^2\subseteq A^2$ 이고, $(1-z)^{-1/2}$ 는 $A^2$ 에 들고 $H^2$ 에 들지 않는다.

# 성질

## 점 평가의 유계성

$f\in A^2$ 와 $z\in\mathbb D$ 에서 다음이 성립한다.

$$
\vert f(z)\vert\le\frac{\Vert f\Vert\_{A^2}}{1-\vert z\vert^2}
$$

증명의 요지. 계수 꼴로 쓰고 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓰면 다음이 나온다.

$$
\vert f(z)\vert^2\le\sum_{n\ge 0}\frac{\vert a_n\vert^2}{n+1}\cdot\sum_{n\ge 0}(n+1)\vert z\vert^{2n}=\frac{\Vert f\Vert\_{A^2}^2}{(1-\vert z\vert^2)^2}
$$

$A^2$ 에서 수렴하는 함수열은 원판의 콤팩트 집합에서 균등수렴하고 극한이 정칙이므로, $A^2$ 는 $L^2(\mathbb D,dA/\pi)$ 의 닫힌 부분공간이고 [Hilbert 공간](hilbert-spaces.md)이다.

## 재생핵

점 평가가 유계이므로 Riesz 표현에서 각 $z$ 마다 $f(z)=\langle f,K\_z\rangle$ 인 $K\_z\in A^2$ 가 있다. 정규직교기저로 적으면 다음과 같다.

$$
K(z,w)=\sum_{n\ge 0}(n+1)z^n\bar w^n=\frac{1}{(1-z\bar w)^2}
$$

이것을 원판의 **Bergman 핵(Bergman kernel)** 이라 한다. $H^2$ 의 재생핵 $1/(1-z\bar w)$ 의 제곱이다. 점 평가 부등식의 등호는 $f=K\_z$ 에서 성립한다.

## Bergman 사영

$L^2(\mathbb D,dA/\pi)$ 에서 $A^2$ 로 가는 직교사영은 다음 적분이다.

$$
Pg(z)=\frac1\pi\int_{\mathbb D}\frac{g(w)}{(1-z\bar w)^2}\thinspace dA(w)
$$

이것을 **Bergman 사영(Bergman projection)** 이라 한다. $P$ 는 $1\lt p\lt\infty$ 에서 $L^p$ 에서 $A^p$ 로 유계이고, $p=1$ 에서는 유계가 아니다[^1].

## Carleson 측도의 상자 조건

원판의 유한한 양의 측도 $\mu$ 에 대해 모든 $f\in A^2$ 에서 $\int\vert f\vert^2\thinspace d\mu\le C\Vert f\Vert\_{A^2}^2$ 인 것은, 경계의 모든 호 $I$ 위 상자 $S(I)$ 에서 $\mu(S(I))\le C'\vert I\vert^2$ 인 것과 동치다[^2]. [Carleson 측도](carleson-measures.md)의 조건에서 $\vert I\vert$ 가 $\vert I\vert^2$ 로 바뀐다.

## 영점 집합

$H^2$ 의 함수의 영점은 [Blaschke 곱](blaschke-products.md)의 조건 $\sum(1-\vert z\_k\vert)\lt\infty$ 를 만족하고, 이 조건을 만족하는 점열은 모두 어떤 $H^2$ 함수의 영점 집합이다. $A^2$ 에는 이 조건을 어기는 영점 집합이 있다. 또 두 $A^2$ 영점 집합의 합집합이 $A^2$ 영점 집합이 아닌 경우가 있다[^3].

## 등각사상의 Bergman 핵

단순연결 영역 $\Omega$ 위에서도 넓이를 $\pi$ 로 나눈 측도로 Bergman 공간과 핵 $K\_\Omega$ 를 정의한다. $\varphi:\Omega\to\mathbb D$ 가 [Riemann 사상정리](riemann-mapping-theorem.md)의 등각사상이면 다음이 성립한다.

$$
K\_\Omega(z,w)=\frac{\varphi'(z)\thinspace\overline{\varphi'(w)}}{\bigl(1-\varphi(z)\overline{\varphi(w)}\bigr)^2}
$$

$\varphi(a)=0$, $\varphi'(a)\gt 0$ 으로 정규화하면 $K\_\Omega(z,a)=\varphi'(z)\varphi'(a)$ 이므로 핵에서 사상이 정해진다.

# 활용

- Bergman 계량. $\partial\bar\partial\log K(z,z)$ 를 길이의 무게로 쓴 계량을 Bergman 계량(Bergman metric)이라 한다. 원판에서 $K(z,z)=(1-\vert z\vert^2)^{-2}$ 이므로 이 계량은 $2/(1-\vert z\vert^2)^2$ 이고, [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)의 Poincaré 계량의 상수배다. 여러 복소변수의 영역에서 같은 정의로 정칙 자기동형이 거리를 보존하는 계량이 된다.
- 연산자 이론. $A^2$ 위에서 $z$ 를 곱하는 연산자의 닫힌 불변 부분공간 $M$ 은 Beurling 정리처럼 내부 함수 하나로 적히지 않는다. $H^2$ 에서는 $M\ominus zM$ 의 차원이 언제나 $1$ 인데, $A^2$ 에서는 이 차원이 $1$ 부터 무한대까지 모든 값을 갖는다.
- 등각사상의 계산. 영역의 Bergman 핵을 다항식 기저의 Gram–Schmidt 정규직교화로 근사하고 위 공식으로 Riemann 사상을 근사한다.

[^1]: H. Hedenmalm, B. Korenblum, K. Zhu, *Theory of Bergman Spaces*, Springer, 2000, 1 장.
[^2]: W. W. Hastings, "A Carleson measure theorem for Bergman spaces", Proceedings of the American Mathematical Society 52 (1975).
[^3]: C. Horowitz, "Zeros of functions in the Bergman spaces", Duke Mathematical Journal 41 (1974).

# 연관 문서

## 선수지식

- [Hardy 공간](hardy-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #functional_analysis #analysis
