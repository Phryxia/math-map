# Wiman 최소 절댓값 정리

# 개요

**Wiman 최소 절댓값 정리(Wiman's minimum modulus theorem)** 는 천천히 자라는 전해석함수가 반지름이 큰 원 위에서 어디서나 크게 되는 원을 끝없이 갖는다는 정리다. 다항식 $z^2-1$ 은 반지름 $r$ 인 원 위에서 크기가 $r^2-1$ 이상이지만, $e^z$ 는 같은 원의 왼쪽 끝에서 크기가 $e^{-r}$ 로 작아진다. 정리는 위수(order)가 $1/2$ 보다 작은 전해석함수가 이 둘 가운데 다항식 쪽으로 움직인다고 답하고, 그 정도를 $\cos\pi\rho$ 로 잰다.

# 직관

전해석함수 $F(z)=\prod\_{n\ge 1}(1+z/n^4)$ 를 본다. 영점은 음의 실축 위 $-1,-16,-81,\dots$ 이다. 각 인수 $\vert 1+z/n^4\vert$ 는 반지름 $r$ 인 원 위에서 $z=r$ 일 때 가장 크고 $z=-r$ 일 때 가장 작으므로, 원 위의 최댓값은 $F(r)$, 최솟값은 $\vert F(-r)\vert$ 다.

$r=n^4$ 이면 $F(-r)=0$ 이므로 그 원 위의 최솟값은 $0$ 이다. 영점 사이의 반지름 $r=2.5^4=39.06$ 에서는 $F(r)=270$, $\vert F(-r)\vert=20.9$ 이고, 로그의 비는 $\log 20.9/\log 270=0.543$ 이다. 반지름을 $10.5^4$ 과 $100.5^4$ 으로 키우면 이 비는 $0.661$, $0.700$ 이 된다.

비는 $\cos(\pi/4)=0.707$ 로 다가간다. $F$ 의 위수는 $1/4$ 이다. 그러므로 영점 사이의 원 위에서는 최솟값이 최댓값의 $0.7$ 제곱 정도로 커서, 최솟값도 함께 무한대로 간다.

# 정의

전해석함수 $f$ 에 대해 다음을 둔다.

$$
M(r)=\max\_{\vert z\vert=r}\vert f(z)\vert,\qquad m(r)=\min\_{\vert z\vert=r}\vert f(z)\vert
$$

$m(r)$ 을 $f$ 의 **최소 절댓값(minimum modulus)** 이라 한다. 직관 절의 $F$ 에서는 $M(r)=F(r)$, $m(r)=\vert F(-r)\vert$ 이다. $f$ 에 영점이 있으면 그 영점의 절댓값인 $r$ 에서 $m(r)=0$ 이므로, 정리는 $m(r)$ 의 상극한에 대한 것이다.

# 성질

## cos πρ 정리

정리. $f$ 가 위수 $\rho\lt 1$ 인 상수 아닌 전해석함수이면 다음이 성립한다[^1].

$$
\limsup\_{r\to\infty}\frac{\log m(r)}{\log M(r)}\ge\cos\pi\rho
$$

이 결과를 **cos πρ 정리(cos πρ theorem)** 라 한다.

증명의 요지. $\rho\lt 1$ 이므로 [Weierstrass 인수분해 정리](weierstrass-factorization.md)의 Hadamard 꼴에서 $f(z)=cz^k\prod\_n(1-z/a\_n)$ 이다. 각 인수는 다음을 만족한다.

$$
\Bigl\vert 1-\frac{r}{\vert a\_n\vert}\Bigr\vert\le\Bigl\vert 1-\frac{z}{a\_n}\Bigr\vert\le 1+\frac{r}{\vert a\_n\vert},\qquad\vert z\vert=r
$$

그러므로 영점을 음의 실축으로 옮긴 $F(z)=\prod\_n(1+z/\vert a\_n\vert)$ 에 대해 $M(r)\le\vert c\vert r^kF(r)$, $m(r)\ge\vert c\vert r^k\vert F(-r)\vert$ 이고, $F$ 의 위수도 $\rho$ 다. 남는 것은 $\log\vert F(-r)\vert$ 와 $\log F(r)$ 을 영점 개수 함수 $n(t)$ 의 적분으로 쓰고 비교하는 것이다[^1].

## 등호의 예

$n(t)=t^\rho$ 이면 두 적분은 다음과 같다.

$$
\int\_0^\infty\log\Bigl(1+\frac rt\Bigr)dn(t)=\frac{\pi r^\rho}{\sin\pi\rho},\qquad\int\_0^\infty\log\Bigl\vert 1-\frac rt\Bigr\vert dn(t)=\frac{\pi r^\rho}{\tan\pi\rho}
$$

비가 $\cos\pi\rho$ 이므로 정리의 하한은 더 올릴 수 없다. 직관 절의 $F$ 는 영점 $-n^4$ 의 개수 함수가 $\lfloor t^{1/4}\rfloor$ 이고, 영점 사이에서 비가 $\cos(\pi/4)$ 로 다가간다.

## Wiman 정리

정리. $f$ 가 위수 $\rho\lt 1/2$ 인 상수 아닌 전해석함수이면 $\limsup\_{r\to\infty}m(r)=\infty$ 다[^2].

$\rho\lt 1/2$ 이면 $\cos\pi\rho\gt 0$ 이고 $\log M(r)\to\infty$ 이므로 cos πρ 정리에서 나온다.

$1/2$ 는 더 올릴 수 없다. 다음 $G$ 는 위수 $1/2$ 인 전해석함수다.

$$
G(z)=\frac{\sinh(\pi\sqrt z)}{\pi\sqrt z}=\prod\_{n\ge 1}\Bigl(1+\frac{z}{n^2}\Bigr)
$$

$z=-r$ 에서 $G(-r)=\sin(\pi\sqrt r)/(\pi\sqrt r)$ 이므로 $m(r)\le 1/(\pi\sqrt r)$ 이 $0$ 으로 간다.

# 활용

- 점근값. 위수가 $1/2$ 보다 작은 전해석함수는 유한한 점근값을 갖지 않는다. $m(r)$ 이 큰 원들이 끝없이 있어서 무한대로 가는 곡선이 그 원들을 지날 때마다 $\vert f\vert$ 가 크기 때문이다. [Denjoy–Carleman–Ahlfors 정리](denjoy-carleman-ahlfors-theorem.md)의 점근값 개수 상한 $2\rho$ 가 $1$ 보다 작은 경우와 맞는다.
- 거듭제곱 급수. 계수가 모두 양수인 전해석함수는 $M(r)=f(r)$ 이다. $f(z)=\sum\_{n\ge 0}z^n/(n!)^3$ 은 위수 $1/3$ 이고 $\cos(\pi/3)=1/2$ 이므로, 음의 실축 위에서도 $\vert f(-r)\vert\ge f(r)^{0.49}$ 인 $r$ 이 끝없이 있다.

[^1]: W. K. Hayman, *Subharmonic Functions, Volume 2*, Academic Press (1989).
[^2]: B. Ya. Levin, *Distribution of Zeros of Entire Functions*, revised ed., American Mathematical Society (1980).

# 연관 문서

## 선수지식

- [Weierstrass 인수분해 정리](weierstrass-factorization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis
