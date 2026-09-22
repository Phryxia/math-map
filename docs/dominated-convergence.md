# 지배 수렴 정리

# 개요

지배 수렴 정리는 가측함수열 $f_n$ 이 점마다 $f$ 로 가고 적분 가능한 $g$ 하나가 모든 $n$ 에서 $\lvert f_n\rvert\le g$ 를 만족하면 $\int f_n\to\int f$ 라는 정리다. [단조 수렴 정리](monotone-convergence.md)와 달리 부호가 섞이고 오르내리는 열에 쓴다.

[Riemann 적분](riemann-integral.md)에서 같은 결론을 얻으려면 균등수렴이 필요했다. 여기서는 점별 수렴과 지배함수 $g$ 로 충분하다.

# 직관

## 지배함수가 없는 열

$(0,1]$ 에서 $f_n=n\cdot\mathbf 1_{(0,1/n)}$ 은 점마다 $0$ 으로 가지만 적분은 모두 $1$ 이다. 모든 $f_n$ 을 덮는 함수는 $\sup_n f_n$ 이상이고, $\sup_n f_n(x)$ 는 $x\lt 1/n$ 인 가장 큰 $n$ 이라 $1/x-1$ 이상이다. 이 함수의 $(0,1]$ 적분은 무한대다.

## 지배함수가 있는 열

같은 열을 높이 $1$ 에서 자른 $\min(f_n,1)=\mathbf 1_{(0,1/n)}$ 은 $g=1$ 이 덮는다. 적분 $1/n$ 은 극한 함수 $0$ 의 적분으로 간다.

## 균등적분가능성

지배함수를 찾기 어려워도 교환이 성립할 수 있다. 그때 쓰는 조건이 [균등적분가능성](uniform-integrability.md)이며, 확률론에서 마팅게일 수렴을 다룰 때 쓴다. 지배함수가 있으면 균등적분가능하다.

# 정의

## 진술

[측도](measure.md) 공간 $(X, \Sigma, \mu)$ 에서 가측함수열 $f_1, f_2, \dots$ 가 거의 모든 점에서 $f$ 로 수렴한다고 하자. 적분 가능한 음이 아닌 함수 $G$ 가 있어 모든 $n$ 에 대해 거의 모든 점에서

$$
|f_n(x)|\le G(x)
$$

이면 $f$ 와 각 $f_n$ 이 적분 가능하고

$$
\lim_{n\to\infty}\int_X f_n\thinspace d\mu=\int_X f\thinspace d\mu
$$

가 성립한다. 복소수값 함수에는 실수부와 허수부에 나누어 적용한다.

# 성질

## 증명

거의 모든 점에서 $\lvert f \rvert \le G$ 이므로 $f$ 도 적분 가능하다. $G + f_n \ge 0$ 과 $G - f_n \ge 0$ 에 Fatou 보조정리를 적용한다.

$$
\int (G+f)\le\liminf\int(G+f_n),\qquad
\int (G-f)\le\liminf\int(G-f_n)
$$

$\int G$ 가 유한하므로 양변에서 소거할 수 있고, 두 식이 각각

$$
\int f\le\liminf\int f_n,\qquad \limsup\int f_n\le\int f
$$

를 준다. 상극한과 하극한이 $\int f$ 로 조여지므로 극한이 존재하고 값이 $\int f$ 다. 소거 단계에서 $\int G \lt\infty$ 가 쓰이므로 지배함수는 적분 가능해야 한다.

## L¹ 수렴

$\lvert f_n - f \rvert \to 0$ 이 거의 모든 점에서 성립하고 $\lvert f_n - f \rvert \le 2G$ 이므로 정리를 다시 적용하면

$$
\lim_{n\to\infty}\int_X|f_n-f|\thinspace d\mu=0
$$

이다. 적분값의 수렴보다 강한 $L^1$ [노름](banach-spaces.md)에서의 수렴이며, $L^1$ 의 완비성 증명과 근사 논증에 쓰인다.

## 반례

점별 수렴과 각 함수의 적분 가능성만으로는 부족하다. $(0,1]$ 에서

$$
f_n(x)=n\thinspace\mathbf{1}\_{(0,1/n)}(x)
$$

는 모든 점에서 $0$ 으로 수렴하지만 적분이 항상 $1$ 이다. 적분 가능한 지배함수를 잡을 수 없기 때문이다. 반대로 지배함수 없이 교환이 성립하는 경우도 있으므로 정리의 조건은 충분조건이다.

$\lvert \sin(nx)/(1+nx^2) \rvert \le 1$ 은 지배되어 적분이 $0$ 으로 가고, 좁아지며 높아지는 봉우리는 적분이 $1$ 에 머문다.

## 따름정리

- **유계 수렴 정리.** $\mu(X) \lt\infty$ 이고 $\lvert f_n \rvert \le M$ 이면 상수함수 $M$ 이 지배함수다. 확률공간의 유계 확률변수열에 바로 쓴다.
- **급수의 교환.** $\sum_n \int \lvert g_n \rvert \lt\infty$ 이면 $\int \sum_n g_n = \sum_n \int g_n$ 이다. 부분합이 $\sum_n \lvert g_n \rvert$ 에 지배되기 때문이며, 부호가 섞인 급수에서 쓰인다.
- **적분 기호 아래 미분.** $\lvert \partial f/\partial t\thinspace(x,t) \rvert \le G(x)$ 이면

$$
\frac{d}{dt}\int_X f(x,t)\thinspace d\mu=\int_X\frac{\partial f}{\partial t}(x,t)\thinspace d\mu
$$

이다. 미분몫이 평균값 정리로 도함수에 지배된다. 적률생성함수의 미분, [최대가능도 추정](maximum-likelihood.md)의 점수함수 계산이 이 형태다.

## 흔한 오용

지배함수는 $n$ 에 의존하지 않아야 한다. $\lvert f_n \rvert \le G_n$ 처럼 $n$ 마다 다른 상계를 잡으면 정리가 적용되지 않고, $\int G_n$ 이 유계라는 것으로도 부족하다. 하나의 $G$ 가 모든 $n$ 을 동시에 덮어야 한다.

# 활용

- 매개변수에 의존하는 적분의 연속성과 미분가능성을 보일 때 쓰인다. Fourier 변환의 연속성, 특성함수의 미분, Laplace 변환의 해석성이 이 정리 위에 있다.
- 확률변수열의 기댓값과 극한을 교환할 때, Monte Carlo 추정량의 수렴을 정당화할 때 쓰인다. 유계 연속함수의 기댓값 수렴으로 약수렴을 정의하는 것도 유계 수렴 정리가 배경이다.
- $L^1$ 에서의 조밀성 주장은 근사열을 만들고 이 정리로 수렴을 확인해 증명한다. 단순함수, 계단함수, 연속함수, 매끄러운 함수의 조밀성이 그렇게 얻어지며 Fourier 해석과 편미분방정식의 약해 이론을 떠받친다.[^1]

[^1]: Terence Tao, *An Introduction to Measure Theory*, Theorem 1.4.49 와 이어지는 L¹ 수렴 연습문제. 지배 수렴 정리의 진술, 증명과 따름정리. https://terrytao.files.wordpress.com/2011/01/measure-book.pdf

# 연관 문서

## 선수지식

- [단조 수렴 정리](monotone-convergence.md)

## 더 알아보기

- [균등적분가능성](uniform-integrability.md)

#measure_theory #analysis #probability #theorem
