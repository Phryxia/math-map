# Korovkin 정리

# 개요

Korovkin 정리는 양선형작용소 열이 연속함수 전체에서 균등수렴하는지를 세 함수에서의 수렴만으로 판정한다. $C\lbrack 0,1\rbrack$ 에서 그 세 함수는 $1$ , $t$ , $t^2$ 이다.

[Stone–Weierstrass 정리](stone-weierstrass.md)는 근사하는 함수족이 어떤 대수적 조건을 만족할 때 조밀한지를 말하고, Korovkin 정리는 주어진 근사 작용소 열이 수렴하는지를 말한다. Bernstein 다항식의 균등수렴이 이 정리의 특수한 경우다.

# 직관

$f\in C\lbrack 0,1\rbrack$ 에 대해 Bernstein 다항식

$$
B_n f(x)=\sum_{k=0}^{n}f\Bigl(\frac kn\Bigr)\binom nk x^k(1-x)^{n-k}
$$

이 $f$ 로 균등수렴함을 보려 한다. $f(t)=1$ 이면 이항정리로 $B_n f=1$ 이고, $f(t)=t$ 이면 $B_n f=x$ 이고, $f(t)=t^2$ 이면 $B_n f=x^2+x(1-x)/n$ 이다. 세 경우 모두 합을 닫은 꼴로 계산할 수 있고 수렴이 바로 나온다.

일반 $f$ 에서는 합이 닫은 꼴로 쓰이지 않는다. 대신 $f$ 의 균등연속성을 쓴다. $\vert t-x\vert$ 가 작으면 $\vert f(t)-f(x)\vert$ 가 작고, $\vert t-x\vert$ 가 $\delta$ 이상이면 $(t-x)^2/\delta^2$ 이 $1$ 이상이므로 $\vert f(t)-f(x)\vert$ 를 $2\Vert f\Vert(t-x)^2/\delta^2$ 로 누를 수 있다. 두 경우를 합치면 모든 $t$ 와 $x$ 에서 $\vert f(t)-f(x)\vert\le\varepsilon+2\Vert f\Vert(t-x)^2/\delta^2$ 이고, 오른쪽은 $1$ , $t$ , $t^2$ 의 결합이다. 작용소가 양수성을 보존하면 이 부등식이 작용소를 통과하므로 세 함수에서의 수렴이 $f$ 에서의 수렴을 준다.

# 정의

## 양선형작용소

$X$ 를 콤팩트 Hausdorff 공간, $C(X)$ 를 실숫값 [연속함수](continuity.md) 전체에 노름 $\Vert f\Vert=\sup\_{x\in X}\vert f(x)\vert$ 를 준 공간이라 한다. 선형작용소 $L\colon C(X)\to C(X)$ 가 **양작용소**라는 것은 $f\ge 0$ 이면 항상 $Lf\ge 0$ 이라는 뜻이다.

양작용소는 유계이고 $\Vert L\Vert=\Vert Le_0\Vert$ 이다. $\vert f\vert\le\Vert f\Vert e_0$ 에 양수성을 적용하면 $\vert Lf\vert\le\Vert f\Vert Le_0$ 이 나온다.

## 검정함수

$e_0(t)=1$ , $e_1(t)=t$ , $e_2(t)=t^2$ 를 $\lbrack 0,1\rbrack$ 위의 **검정함수**라 한다.

# 성질

## Korovkin 정리

**정리.** 양선형작용소 열 $L_n\colon C\lbrack 0,1\rbrack\to C\lbrack 0,1\rbrack$ 이 $i=0,1,2$ 에서 $\Vert L_ne_i-e_i\Vert\to 0$ 을 만족하면 모든 $f\in C\lbrack 0,1\rbrack$ 에서 $\Vert L_nf-f\Vert\to 0$ 이다[^1].

$f$ 와 $\varepsilon\gt 0$ 을 잡는다. 균등연속성에서 $\vert t-x\vert\lt \delta$ 일 때 $\vert f(t)-f(x)\vert\lt \varepsilon$ 인 $\delta\gt 0$ 이 있고, $\vert t-x\vert\ge\delta$ 일 때는 $\vert f(t)-f(x)\vert\le 2\Vert f\Vert\le 2\Vert f\Vert(t-x)^2/\delta^2$ 이다. 두 경우를 합치면 모든 $t,x\in\lbrack 0,1\rbrack$ 에서

$$
\vert f(t)-f(x)\vert\le\varepsilon+\frac{2\Vert f\Vert}{\delta^2}(t-x)^2
$$

이다. $x$ 를 고정하고 $\varphi_x(t)=(t-x)^2$ 로 두어 양수성과 선형성을 쓰면

$$
\vert L_nf(x)-f(x)L_ne_0(x)\vert\le\varepsilon L_ne_0(x)+\frac{2\Vert f\Vert}{\delta^2}L_n\varphi_x(x)
$$

이 나온다. $\varphi_x=e_2-2xe_1+x^2e_0$ 이므로

$$
L_n\varphi_x(x)=L_ne_2(x)-2xL_ne_1(x)+x^2L_ne_0(x)
$$

이고, 가정에서 이 값은 $x^2-2x^2+x^2=0$ 으로 균등수렴한다. $L_ne_0\to e_0$ 이므로 $f(x)L_ne_0(x)\to f(x)$ 가 균등하게 성립하고, $\varepsilon$ 이 임의이므로 $\Vert L_nf-f\Vert\to 0$ 이다. ∎

## Bernstein 다항식

**따름정리.** $B_nf\to f$ 가 $C\lbrack 0,1\rbrack$ 에서 균등하게 성립한다.

$B_n$ 은 계수 $\binom nk x^k(1-x)^{n-k}$ 가 $\lbrack 0,1\rbrack$ 에서 음이 아니므로 양작용소다. 직관 절의 계산이 $B_ne_0=e_0$ , $B_ne_1=e_1$ , $B_ne_2=e_2+e_1(e_0-e_1)/n$ 을 주고 마지막 항의 노름이 $1/(4n)$ 이므로 세 검정함수에서 수렴한다. ∎

$B_nf(x)$ 는 성공확률 $x$ 인 시행 $n$ 회의 성공 비율에 $f$ 를 적용한 값의 기댓값이고, 이 따름정리는 [큰 수의 법칙](law-of-large-numbers.md)을 쓰지 않고 세 함수의 계산만으로 같은 결론을 준다.

## Lipschitz 함수의 수렴 속도

**정리.** $\vert f(t)-f(s)\vert\le M\vert t-s\vert$ 이면 $\Vert B_nf-f\Vert\le M/(2\sqrt n)$ 이다.

$\vert B_nf(x)-f(x)\vert\le B_n(\vert t-x\vert)(x)$ 이고, 양작용소의 Cauchy–Schwarz 부등식에서 $B_n(\vert t-x\vert)(x)\le(B_n\varphi_x(x))^{1/2}=(x(1-x)/n)^{1/2}$ 이다. $x(1-x)\le 1/4$ 이므로 상계가 $M/(2\sqrt n)$ 이다. ∎

## 검정함수 셋의 필요성

$e_0$ 과 $e_1$ 만으로는 판정이 성립하지 않는다. $Lf(x)=f(0)(1-x)+f(1)x$ 는 양작용소이고 $Le_0=e_0$ , $Le_1=e_1$ 이지만 $Le_2=e_1\ne e_2$ 다. $L_n=L$ 로 둔 상수열은 두 함수에서 수렴하면서 $e_2$ 에서 수렴하지 않는다.

# 활용

- **Weierstrass 근사정리.** Stone–Weierstrass 정리의 Weierstrass 근사정리 절이 Bernstein 다항식으로 근사열을 직접 쓴다. 그 수렴을 세 함수의 계산으로 끌어내는 것이 이 정리다.
- **Fejér 작용소.** [Fourier 급수](fourier-series.md)의 Cesàro 평균은 음이 아닌 핵과의 합성곱이므로 양작용소이고, 원 위의 검정함수 $1$ , $\cos t$ , $\sin t$ 에서의 수렴이 연속인 주기함수에서의 균등수렴을 준다.
- **구적공식의 수렴.** 구간을 나눠 값을 가중평균하는 구적공식은 가중값이 음이 아니면 양작용소다. 세 검정함수에서 정확하면 모든 연속함수에서 적분값으로 수렴한다.

[^1]: P. P. Korovkin, *Linear Operators and Approximation Theory*, Hindustan Publishing, 1960, 1 장. 검정함수 셋과 그것을 콤팩트 거리공간으로 옮긴 판본이 함께 있다.

# 연관 문서

## 선수지식

- [Stone–Weierstrass 정리](stone-weierstrass.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #probability
