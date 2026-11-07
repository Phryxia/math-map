# Dirichlet 약수 문제

# 개요

**Dirichlet 약수 문제(Dirichlet divisor problem)** 는 $1$ 부터 $x$ 까지 각 수의 약수 개수를 모두 더한 값이 $x\log x+(2\gamma-1)x$ 와 얼마나 차이 나는지를 묻는 문제다. 약수 개수의 합은 곱 $ab$ 가 $x$ 이하인 양의 정수 쌍 $(a,b)$ 의 개수이고, 이 쌍들은 평면에서 쌍곡선 $ab=x$ 아래의 격자점이다. 격자점 수를 쌍곡선 아래 넓이로 근사하고, 남는 오차가 $x$ 의 몇 제곱 크기인지를 정하는 것이 이 문제다.

# 직관

$x=10$ 이면 $1,\dots,10$ 의 약수 개수는 $1,2,2,3,2,4,2,4,3,4$ 이고 합은 $27$ 이다. 곱 $ab\le 10$ 인 쌍을 $a$ 로 나누어 세면 $a$ 마다 $b$ 가 $\lfloor 10/a\rfloor$ 개이므로 $10+5+3+2+2+1+1+1+1+1=27$ 이다. $\lfloor x/a\rfloor$ 를 $x/a$ 로 바꾸면 [Euler–Mascheroni 상수](euler-mascheroni-constant.md) 문서의 $\sum_{a\le x}1/a=\log x+\gamma+O(1/x)$ 로 합이 $x\log x+\gamma x$ 근처가 된다. 그러나 버린 소수 부분 $\lbrace x/a\rbrace$ 가 $x$ 개 있어 오차가 $x$ 만큼 커질 수 있고, $\gamma x$ 항을 믿을 수 없다.

쌍 $(a,b)$ 는 $a$ 와 $b$ 를 바꾸어도 조건이 같다. $a\le\sqrt x$ 인 쌍과 $b\le\sqrt x$ 인 쌍을 세어 더하고, 둘 다 $\sqrt x$ 이하라서 두 번 센 $\lfloor\sqrt x\rfloor^2$ 개를 빼면 모든 쌍이 한 번씩 세어진다. $x=10$ 이면 $2(10+5+3)-9=27$ 이다. 이 셈에서는 소수 부분을 버리는 자리가 $\sqrt x$ 개뿐이므로 오차가 $\sqrt x$ 규모로 줄고, 둘째 항까지 정해진다.

# 정의

양의 정수 $n$ 의 양의 약수 개수를 $d(n)$ 이라 하고

$$
D(x)=\sum_{n\le x}d(n)=\char35{}\lbrace(a,b)\in\mathbb Z\_{\gt 0}^2:ab\le x\rbrace
$$

로 둔다. $\gamma$ 가 Euler–Mascheroni 상수일 때

$$
\Delta(x)=D(x)-x\log x-(2\gamma-1)x
$$

를 약수 문제의 **오차항(error term)** 이라 한다. $\Delta(x)=O(x^{\theta+\varepsilon})$ 가 모든 $\varepsilon\gt 0$ 에서 성립하는 $\theta$ 의 하한을 $\theta^\ast$ 로 적고, $\theta^\ast$ 를 정하는 문제를 Dirichlet 약수 문제라 한다. 직관 절의 $x=10$ 에서는 주항이 $23.026+1.544=24.570$ 이고 $\Delta(10)\approx 2.43$ 이다.

# 성질

## 쌍곡선 방법

$y=\sqrt x$ 에 대해

$$
D(x)=2\sum_{a\le y}\Bigl\lfloor\frac xa\Bigr\rfloor-\lfloor y\rfloor^2
$$

이다. $\lfloor x/a\rfloor=x/a-\lbrace x/a\rbrace$, $\sum_{a\le y}1/a=\log y+\gamma+O(1/y)$, $\lfloor y\rfloor^2=x+O(y)$ 를 넣으면

$$
D(x)=x\log x+(2\gamma-1)x+O(\sqrt x)
$$

가 나온다. 이 방법을 **쌍곡선 방법(hyperbola method)** 이라 하고, $\theta^\ast\le\frac12$ 가 Dirichlet 의 결과다. 같은 방법은 두 산술 함수의 Dirichlet 합성곱의 부분합에 일반적으로 쓰인다.

## Dirichlet 급수와의 관계

$\sum_nd(n)n^{-s}=\zeta(s)^2$ 이다. [Dirichlet 급수](dirichlet-series.md)의 Perron 공식으로 $D(x)$ 는 $\zeta(s)^2x^s/s$ 의 선적분이고, 주항은 $s=1$ 의 유수다. $\zeta(s)^2=(s-1)^{-2}+2\gamma(s-1)^{-1}+O(1)$ 과 $x^s/s=x\bigl(1+(s-1)(\log x-1)+\cdots\bigr)$ 를 곱해 $(s-1)^{-1}$ 의 계수를 읽으면 $x\log x+(2\gamma-1)x$ 다. 오차항은 선적분을 왼쪽으로 옮길 때 남는 부분이다.

## 상계의 개선

Voronoi 는 다음 전개를 증명하고 이로부터 $\Delta(x)=O(x^{1/3}\log x)$, 곧 $\theta^\ast\le\frac13$ 을 얻었다[^1].

$$
\Delta(x)=\frac{x^{1/4}}{\pi\sqrt2}\sum_{n=1}^{\infty}\frac{d(n)}{n^{3/4}}\cos\Bigl(4\pi\sqrt{nx}-\frac\pi4\Bigr)+O(x^{-1/4})
$$

이후의 개선은 이 급수의 앞부분을 지수합으로 보고 van der Corput 방법(van der Corput's method)으로 상쇄를 얻는 것이다. 현재 알려진 가장 좋은 상계 가운데 하나는 Huxley 의 $\theta^\ast\le\frac{131}{416}=0.3149\ldots$ 이다[^2].

## 하계와 평균

Hardy 는 $\Delta(x)$ 가 $x^{1/4}$ 의 상수배보다 큰 값과 그 음수보다 작은 값을 무한히 자주 가진다는 것을 증명했다. 따라서 $\theta^\ast\ge\frac14$ 이다[^3]. Cramér 는 평균제곱이 다음과 같음을 증명했다.

$$
\int_1^X\Delta(x)^2\thinspace dx=\frac{1}{6\pi^2}\Bigl(\sum_{n=1}^\infty\frac{d(n)^2}{n^{3/2}}\Bigr)X^{3/2}+O(X^{5/4+\varepsilon})
$$

$\Delta(x)$ 는 평균으로 $x^{1/4}$ 크기다. $\theta^\ast=\frac14$ 이라는 진술은 증명되지 않았다[^4].

# 활용

- 약수 개수의 평균. $D(x)/x=\log x+2\gamma-1+O(x^{-1/2})$ 이므로 $d(n)$ 은 평균으로 $\log n$ 크기다. 개별 $d(n)$ 은 $n$ 이 소수이면 $2$ 이고 $n^{\varepsilon}$ 보다 작지만, 평균은 $\log n$ 으로 정해진다.
- 원 안의 격자점. 원 $a^2+b^2\le x$ 안의 격자점 수와 넓이 $\pi x$ 의 차이를 묻는 [Gauss 원 문제](gauss-circle-problem.md)는 같은 꼴의 Voronoi 형 급수를 갖고, 알려진 상계와 하계의 지수가 약수 문제와 같은 방법으로 얻어진다.
- 지수합 방법. van der Corput 방법과 그 뒤의 Bombieri–Iwaniec 방법, Huxley 의 개선은 약수 문제와 원 문제의 지수를 줄이는 것으로 성능을 비교한다.
- zeta 함수의 평균. $\int_0^T\lvert\zeta(\frac12+it)\rvert^2dt$ 의 오차항에 대한 Atkinson 공식이 $\Delta(x)$ 의 Voronoi 급수와 같은 꼴이어서, 두 오차항의 상계가 함께 개선되어 왔다.

[^1]: G. Voronoï, "Sur un problème du calcul des fonctions asymptotiques", *Journal für die reine und angewandte Mathematik* 126 (1903), 241–282.
[^2]: M. N. Huxley, "Exponential sums and lattice points III", *Proceedings of the London Mathematical Society* 87 (2003), 591–609.
[^3]: G. H. Hardy, "On Dirichlet's divisor problem", *Proceedings of the London Mathematical Society* (2) 15 (1916), 1–25.
[^4]: E. C. Titchmarsh, *The Theory of the Riemann Zeta-Function*, 2nd ed., Oxford University Press, 1986, Chapter XII.

# 연관 문서

## 선수지식

- [Euler–Mascheroni 상수](euler-mascheroni-constant.md)
- [Dirichlet 급수](dirichlet-series.md)

## 더 알아보기

- [Gauss 원 문제](gauss-circle-problem.md)

#number_theory #analysis
