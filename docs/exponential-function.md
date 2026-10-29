# 지수함수

# 개요

**지수함수(exponential function)** 는 도함수가 자기 자신과 같고 $0$ 에서 값이 $1$ 인 함수 $e^x$ 다. 세균의 수가 늘어나는 빠르기가 그때의 세균 수에 비례하면 세균 수를 시간의 함수로 적어야 하는데, 미분해서 자기 자신이 되는 함수는 다항식 가운데 $0$ 뿐이다. 지수함수는 그런 함수를 무한히 많은 항의 합으로 만들어, 증가율이 크기에 비례하는 모든 양을 $Ce^{kx}$ 로 적는다.

# 직관

$f'=f$ 이고 $f(0)=1$ 인 함수를 다항식으로 찾아본다. $f(x)=1$ 로 시작하면 $f'=0$ 이라 맞지 않는다. 도함수가 $1$ 이 되도록 $x$ 를 더해 $f=1+x$ 로 두면 이번에는 $f'=1$ 이 $x$ 만큼 모자란다. 도함수에 $x$ 가 생기도록 $x^2/2$ 를 더하면 $f'=1+x$ 가 $x^2/2$ 만큼 모자란다.

항을 하나 더할 때마다 도함수에 같은 크기의 모자람이 생기므로 다항식으로는 끝나지 않는다. 그래서 끝내지 않고 계속 더한다. $n$ 번째에 더하는 항은 미분하면 앞의 항 $x^{n-1}/(n-1)!$ 이 되는 $x^n/n!$ 이다. 끝없이 더한 [멱급수](power-series.md) $1+x+x^2/2!+x^3/3!+\cdots$ 를 항별로 미분하면 각 항이 앞의 항으로 옮겨 가 급수 자신이 된다.

# 정의

## 지수함수와 e

모든 [실수](real-numbers.md) $x$ 에서 다음 급수로 정한 함수를 지수함수라 하고 $\exp x$ 또는 $e^x$ 로 쓴다.

$$
\exp x=\sum_{n=0}^{\infty}\frac{x^n}{n!}
$$

이웃한 항의 비가 $\vert x\vert/(n+1)\to0$ 이므로 수렴반경이 무한이다. $e=\exp 1=2.71828\cdots$ 를 **자연로그의 밑(Euler's number)** 이라 한다.

## 자연로그와 일반 지수

$\exp$ 는 $\mathbb R$ 에서 $(0,\infty)$ 로 가는 증가 전단사이고(아래 성질 절), 그 역함수를 **자연로그(natural logarithm)** $\log$ 라 한다. $a\gt 0$ 과 실수 $x$ 에 대해 $a^x=\exp(x\log a)$ 로 정한다. $x$ 가 유리수 $p/q$ 이면 이 값은 $a^p$ 의 $q$ 제곱근과 같다.

# 성질

## 미분방정식의 유일한 해

**정리.** $\exp'=\exp$ 이고 $\exp 0=1$ 이다. $f'=f$, $f(0)=1$ 인 미분가능 함수는 $\exp$ 뿐이다.

증명의 요지. 항별 미분으로 첫 주장이 나온다. 둘째는 $g(x)=f(x)\exp(-x)$ 로 두면 $g'=f\exp(-x)-f\exp(-x)=0$ 이므로 $g$ 는 상수 $g(0)=1$ 이다. $f=\exp$ 를 넣으면 $\exp(x)\exp(-x)=1$ 도 나오므로 $\exp$ 는 $0$ 이 되지 않는다.

## 덧셈 법칙

**정리.** 모든 실수 $x,y$ 에서 $\exp(x+y)=\exp x\exp y$ 다.

증명의 요지. $y$ 를 고정하고 $f(x)=\exp(x+y)\exp(-y)$ 로 두면 $f'=f$, $f(0)=1$ 이므로 앞의 정리로 $f=\exp$ 다. 양변에 $\exp y$ 를 곱하고 $\exp(-y)\exp y=1$ 을 쓴다.

덧셈 법칙에서 $\exp x=\exp(x/2)^2\gt 0$ 이고, $\exp'=\exp\gt 0$ 이므로 $\exp$ 는 증가한다. $x\gt 0$ 에서 $\exp x\gt 1+x$ 이므로 $x\to\infty$ 에서 $\exp x\to\infty$ 이고, $\exp(-x)=1/\exp x$ 로 $x\to-\infty$ 에서 $0$ 으로 간다. [중간값 정리](intermediate-value-theorem.md)로 $\exp$ 는 $(0,\infty)$ 위로의 전단사다. 역함수 쪽에서는 $\log(xy)=\log x+\log y$ 이고 $\log'x=1/x$ 다.

## 극한 표현

**정리.** 모든 실수 $x$ 에서 $(1+x/n)^n\to e^x$ 다.

증명의 요지. $n\log(1+x/n)$ 은 $t=x/n$ 으로 두면 $x\cdot\log(1+t)/t$ 이고, $t\to0$ 에서 $\log(1+t)/t\to\log'1=1$ 이다. 따라서 $n\log(1+x/n)\to x$ 이고 $\exp$ 의 연속성으로 결론이 나온다. 연이율 100% 를 $n$ 번 나누어 복리로 붙이면 $1$ 년 뒤 원금의 $(1+1/n)^n$ 배가 되고, $n$ 이 커지면 이 값이 $e$ 로 간다.

## 다항식보다 빠른 증가

$x\gt 0$ 에서 급수의 항이 모두 양수이므로 $e^x\gt x^{k+1}/(k+1)!$ 이다. 따라서 $x^k/e^x\lt (k+1)!/x\to0$ 이고, 어떤 다항식도 $x\to\infty$ 에서 $e^x$ 보다 느리게 자란다. 역함수 쪽에서는 모든 $\varepsilon\gt 0$ 에 대해 $\log x/x^{\varepsilon}\to0$ 이다.

## e 의 무리수성

**정리.** $e$ 는 [무리수](irrational-numbers.md)다.

증명의 요지. $e=p/q$ 라 하자. $N=q!\thinspace(e-\sum_{n=0}^{q}1/n!)$ 은 정수다. 한편 $N=\sum_{n\gt q}q!/n!$ 이고 이 합은 $0$ 보다 크고 $1/(q+1)+1/(q+1)^2+\cdots=1/q\le1$ 보다 작아 모순이다. $e$ 가 정수계수 다항식의 근도 아니라는 것은 Hermite 가 증명했다([초월수](transcendental-numbers.md)).

# 활용

- [상미분방정식](ordinary-differential-equations.md)의 $y'=ky$ 는 해가 $Ce^{kx}$ 뿐이고, 상수계수 선형방정식은 $e^{\lambda x}$ 꼴의 해를 넣어 특성방정식으로 푼다.
- [쌍곡함수](hyperbolic-functions.md) $\cosh$, $\sinh$ 는 $e^x$ 와 $e^{-x}$ 의 합과 차의 절반이다.
- [복소수](complex-numbers.md)에서 같은 급수로 $e^z$ 를 정하면 $e^{i\theta}=\cos\theta+i\sin\theta$ 이고, 극형식과 [Fourier 급수](fourier-series.md)가 이 식을 쓴다.
- [정규분포](normal-distribution.md)의 밀도는 $e^{-x^2/2}/\sqrt{2\pi}$ 이고, 다항식보다 빠른 감소 때문에 모든 적률이 유한하다.
- [감마 함수](gamma-function.md)는 $\int_0^{\infty}t^{s-1}e^{-t}\thinspace dt$ 로 정의되고, $e^{-t}$ 의 빠른 감소가 적분의 수렴을 준다.
- [Lie 군](lie-groups.md)의 지수사상은 같은 급수를 [행렬](matrices.md)에 넣은 $e^{A}=\sum A^n/n!$ 이고, 덧셈 법칙은 $AB=BA$ 인 행렬에서는 성립하고 일반적으로는 성립하지 않는다.

# 연관 문서

## 선수지식

- [멱급수](power-series.md)

## 더 알아보기

- [쌍곡함수](hyperbolic-functions.md)
- [Poisson 분포](poisson-distribution.md)

#analysis #complex_analysis #number_theory
