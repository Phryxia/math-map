# $L^p$ 공간

# 개요

$L^p$ 공간은 [측도](measure.md)공간 $(X,\mathcal M,\mu)$ 위에서 $\vert f\vert^p$ 가 적분가능한 [가측함수](measurable-functions.md)들을 모아 만든 노름공간이다. $1\le p\le\infty$ 에서 노름은

$$
\Vert f\Vert\_p=\Bigl(\int_X\vert f\vert^p\thinspace d\mu\Bigr)^{1/p}
$$

이고, 이 노름에 대해 $L^p$ 는 완비다. 삼각부등식이 Minkowski 부등식이고, 두 함수의 곱을 재는 Hölder 부등식이 그 증명과 쌍대성을 함께 준다.

$p=2$ 에서만 노름이 내적에서 나오며, 그 경우가 [Hilbert 공간](hilbert-spaces.md)이다.

# 직관

함수의 크기를 수 하나로 재려 한다. $\lbrack 0,1\rbrack$ 위의 함수에서 최댓값을 쓰면 한 점에서만 큰 함수와 전 구간에서 큰 함수가 같은 값을 받는다. 적분을 쓰면 그 둘이 갈린다.

지수를 바꾸면 큰 값에 주는 가중이 달라진다. $\int\vert f\vert\thinspace d\mu$ 는 모든 값을 그대로 더하고, $\int\vert f\vert^2\thinspace d\mu$ 는 큰 값을 제곱해 더 세게 반영한다. 지수 $p$ 를 올릴수록 최댓값에 가까워지고, $p=\infty$ 에서 본질적 상한이 된다.

적분값에 $p$ 제곱근을 씌우는 이유는 삼각부등식이다. $\int\vert f\vert^p\thinspace d\mu$ 만 쓰면 함수를 두 배로 늘릴 때 값이 $2^p$ 배가 되어 노름이 아니다. 제곱근을 씌우면 상수배가 그대로 나온다.

$p\lt 1$ 에서는 제곱근을 씌워도 삼각부등식이 깨진다. $p=1/2$ 에서 $f=2\cdot\mathbf 1\_{\lbrack 0,1/2\rbrack}$ 과 $g=2\cdot\mathbf 1\_{(1/2,1\rbrack}$ 을 잡으면 $\Vert f\Vert\_{1/2}=\Vert g\Vert\_{1/2}=1/2$ 인데 $f+g$ 는 구간 전체에서 값이 $2$ 라 $\Vert f+g\Vert\_{1/2}=2$ 다. 합의 크기가 크기의 합보다 크다. 그래서 $p\ge 1$ 만 다룬다.

# 정의

## 노름과 공간

$(X,\mathcal M,\mu)$ 를 측도공간이라 하고 $1\le p\lt\infty$ 라 하자. 가측함수 $f$ 에 대해

$$
\Vert f\Vert\_p=\Bigl(\int_X\vert f\vert^p\thinspace d\mu\Bigr)^{1/p}
$$

로 두고 $\Vert f\Vert\_p\lt\infty$ 인 $f$ 전체를 $\mathcal L^p(\mu)$ 라 한다. $p=\infty$ 에서는 **본질적 상한**

$$
\Vert f\Vert\_\infty=\inf\lbrace M\ge 0\thinspace :\thinspace \mu(\lbrace x : \vert f(x)\vert\gt M\rbrace)=0\rbrace
$$

를 쓴다.

$\Vert f\Vert\_p=0$ 인 것과 $f=0$ 이 거의 어디서나 성립하는 것이 같으므로, 거의 어디서나 같은 함수를 동일시한 몫공간을 $L^p(\mu)$ 라 한다. 이 몫을 취해야 $\Vert\cdot\Vert\_p$ 가 노름이 된다.

## 켤레지수

$1\le p\le\infty$ 에 대해

$$
\frac1p+\frac1q=1
$$

을 만족하는 $q$ 를 $p$ 의 **켤레지수**라 한다. $p=1$ 이면 $q=\infty$ 이고 $p=2$ 이면 $q=2$ 다.

# 성질

## Hölder 부등식

**정리.** $p$ 와 $q$ 가 켤레지수이면 $\Vert fg\Vert\_1\le\Vert f\Vert\_p\thinspace\Vert g\Vert\_q$ 다.

$1\lt p\lt\infty$ 에서 증명은 Young 부등식 $ab\le a^p/p+b^q/q$ 로 한다. 이 부등식은 $\log$ 의 오목성에서 나온다. $\Vert f\Vert\_p=\Vert g\Vert\_q=1$ 로 정규화한 뒤 $a=\vert f(x)\vert$ , $b=\vert g(x)\vert$ 를 넣고 적분하면

$$
\int\vert fg\vert\thinspace d\mu\thinspace\le\thinspace\frac1p+\frac1q=1
$$

이다. ∎

등호는 $\vert f\vert^p$ 와 $\vert g\vert^q$ 가 거의 어디서나 비례할 때 성립한다. $p=q=2$ 인 경우가 Cauchy–Schwarz 부등식이다.

## Minkowski 부등식

**정리.** $1\le p\le\infty$ 이면 $\Vert f+g\Vert\_p\le\Vert f\Vert\_p+\Vert g\Vert\_p$ 다.

$1\lt p\lt\infty$ 에서 $\vert f+g\vert^p\le\vert f+g\vert^{p-1}(\vert f\vert+\vert g\vert)$ 를 적분하고 오른쪽 두 항에 Hölder 부등식을 지수 $p$ 와 $q$ 로 적용하면

$$
\Vert f+g\Vert\_p^p\thinspace\le\thinspace\Vert f+g\Vert\_p^{p-1}\bigl(\Vert f\Vert\_p+\Vert g\Vert\_p\bigr)
$$

이 되고, $\Vert f+g\Vert\_p^{p-1}$ 로 나누면 된다. ∎

## Riesz–Fischer 정리

**정리.** $1\le p\le\infty$ 에서 $L^p(\mu)$ 는 [Banach 공간](banach-spaces.md)이다.[^1]

$1\le p\lt\infty$ 에서 완비성은 절대수렴하는 급수가 수렴함을 보이면 된다. $\sum_k\Vert f_k\Vert\_p=M\lt\infty$ 라 하자. $g_n=\sum_{k\le n}\vert f_k\vert$ 는 증가하고 Minkowski 부등식에서 $\Vert g_n\Vert\_p\le M$ 이므로, 단조수렴정리로 $g=\lim g_n$ 이 $\Vert g\Vert\_p\le M$ 을 만족한다. 따라서 $g$ 가 거의 어디서나 유한하고 $\sum_k f_k$ 가 거의 어디서나 절대수렴한다. 그 합을 $f$ 라 하면 $\vert f-\sum_{k\le n}f_k\vert^p\le g^p$ 이므로 [지배수렴정리](dominated-convergence.md)로 $L^p$ 에서도 수렴한다. ∎

## 포함관계와 조밀성

측도가 유한하면 $p\lt r$ 일 때 $L^r(\mu)\subseteq L^p(\mu)$ 이고 Hölder 부등식에서

$$
\Vert f\Vert\_p\thinspace\le\thinspace\mu(X)^{1/p-1/r}\thinspace\Vert f\Vert\_r
$$

를 얻는다. 측도가 무한하면 어느 쪽 포함도 성립하지 않는다. 계수 측도를 쓴 수열공간 $\ell^p$ 에서는 반대로 $p\lt r$ 일 때 $\ell^p\subseteq\ell^r$ 이다.

$1\le p\lt\infty$ 에서 유한개의 값만 갖는 단순함수가 $L^p$ 에서 조밀하다. $X$ 가 국소 콤팩트 Hausdorff 공간이고 $\mu$ 가 Radon 측도이면 콤팩트 받침을 갖는 [연속함수](continuity.md)도 조밀하다. $p=\infty$ 에서는 둘 다 성립하지 않는다.

## 쌍대공간

$1\le p\lt\infty$ 이고 $\mu$ 가 $\sigma$ 유한이면 사상 $g\mapsto\bigl(f\mapsto\int fg\thinspace d\mu\bigr)$ 이 $L^q(\mu)$ 에서 $L^p(\mu)^{\ast}$ 로의 등거리 동형이다.[^2] Hölder 부등식이 이 사상의 유계성을 주고, [Radon–Nikodym 정리](radon-nikodym.md)가 전사성을 준다.

따라서 $1\lt p\lt\infty$ 에서 $L^p$ 는 반사적이다. $L^1$ 의 쌍대는 $L^\infty$ 이지만 $L^\infty$ 의 쌍대는 $L^1$ 보다 크다.

# 활용

- **Fourier 해석.** $L^2$ 의 내적 구조에서 Parseval 항등식이 나오고, [Fourier 급수](fourier-series.md)가 $L^2$ 에서 수렴한다. $L^p$ 에서의 수렴은 $1\lt p\lt\infty$ 에서만 성립한다.
- **확률론의 적률.** 확률측도에서 $\Vert X\Vert\_p$ 가 $p$ 차 절대적률의 $p$ 제곱근이고, 유한측도의 포함관계가 적률의 단조성이 된다. [균등적분가능성](uniform-integrability.md)의 $L^p$ 유계 조건이 여기서 쓰인다.
- **편미분방정식의 해 공간.** 함수와 그 약한 도함수가 $L^p$ 에 드는 조건으로 Sobolev 공간을 정의한다. 해의 존재를 약한 형태로 먼저 얻고 정칙성을 따로 보이는 방식이 표준이다.

[^1]: F. Riesz, *Untersuchungen über Systeme integrierbarer Funktionen*, Math. Ann. **69** (1910), 449–497. 같은 결과를 E. Fischer 가 $p=2$ 에서 독립으로 얻었다.

[^2]: 표준 서술은 W. Rudin, *Real and Complex Analysis* (3판, 1987) 6 장이다.

# 연관 문서

## 선수지식

- [Lebesgue 적분](lebesgue-integral.md)
- [Banach 공간](banach-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #measure_theory #analysis #probability
