# Denjoy–Carleman–Ahlfors 정리

# 개요

**Denjoy–Carleman–Ahlfors 정리(Denjoy–Carleman–Ahlfors theorem)** 는 위수가 $\rho$ 인 전해석함수가 무한대로 가는 길을 따라 다가가는 서로 다른 유한값이 많아야 $2\rho$ 개라는 정리다. 적분 $\int\_0^x\frac{\sin t}{t}dt$ 는 $x\to+\infty$ 에서 $\pi/2$ 로, $x\to-\infty$ 에서 $-\pi/2$ 로 간다. 이 함수를 복소평면 전체로 넓히면, 두 극한값이 다르다는 것만으로 그 사이에서 함수가 지수함수만큼 빨리 커져야 한다.

이 정리는 극한값이 많을수록 함수가 커지는 영역이 많아지고, 영역마다 좁아져 더 빨리 커져야 한다는 것을 [Ahlfors 왜곡 정리](ahlfors-distortion-theorem.md)로 셈하여 그 개수를 위수로 누른다.

# 직관

$f(z)=\int\_0^z\frac{\sin t}{t}dt$ 는 피적분함수가 원점에서 정칙이므로 전해석함수다. 양의 실수축을 따라가면 $f\to\pi/2$, 음의 실수축을 따라가면 $f\to-\pi/2$ 다.

허수축 위에서는 $\sin(iy)/(iy)=\sinh y/y$ 이므로 $f(iy)=i\int\_0^y\frac{\sinh s}{s}ds$ 이고, 이 값은 $e^y/y$ 정도로 커진다. 위쪽 반평면은 극한 $\pi/2$ 로 가는 길과 극한 $-\pi/2$ 로 가는 길 사이에 있고, 그 사이에서 $f$ 는 유계가 아니다.

두 길 사이에서 $f$ 가 유계이면 두 극한값이 같아야 한다는 것이 Lindelöf 정리(Lindelöf's theorem)다. 그래서 극한값이 $N$ 개이면 이웃한 두 길 사이마다 $f$ 가 커지는 영역이 하나씩 있어 그런 영역이 $N$ 개다. 영역들은 겹치지 않으므로 반지름 $r$ 인 원에서 차지하는 각을 더하면 $2\pi$ 이하이고, 각이 좁은 영역일수록 $f$ 는 그 안에서 빨리 커져야 한다.

# 정의

전해석함수 $f$ 의 최대 절댓값을 $M(r)=\max\_{\vert z\vert=r}\vert f(z)\vert$ 로 쓴다. $f$ 의 **위수(order)** 는 [Weierstrass 인수분해 정리](weierstrass-factorization.md)에서처럼 다음 값이다.

$$
\rho=\limsup\_{r\to\infty}\frac{\log\log M(r)}{\log r}
$$

복소수 $a$ 에 대해, $\vert z\vert\to\infty$ 로 가는 곡선 $\gamma$ 가 있어 $\gamma$ 를 따라 $f(z)\to a$ 이면 $a$ 를 $f$ 의 **점근값(asymptotic value)** 이라 한다. 직관 절의 $f$ 에서 $\pi/2$ 와 $-\pi/2$ 가 점근값이다. $\vert f\vert$ 는 허수축 위에서 $e^r/r$ 정도로 커지고 다른 방향에서도 $e^r$ 를 넘지 않으므로 위수는 $1$ 이다.

# 성질

## 정리

**정리(Ahlfors, 1930).** 위수가 $\rho$ 인 전해석함수의 서로 다른 유한 점근값은 많아야 $2\rho$ 개다[^1].

Denjoy 가 1907 년에 이 한계를 추측했고, Carleman 이 $5\rho$ 로 증명한 것을 Ahlfors 가 $2\rho$ 로 줄였다[^2]. 위수가 $1/2$ 보다 작으면 $2\rho\lt 1$ 이므로 유한 점근값이 없다.

## 증명의 요지

유한 점근값이 $N$ 개이면 직관 절처럼 $\vert f\vert$ 가 큰 영역 $D\_1,\dots,D\_N$ 이 겹치지 않게 무한대로 뻗는다. 반지름 $r$ 인 원과 $D\_j$ 가 겹치는 호의 각을 $\theta\_j(r)$ 라 하면 $\sum\_j\theta\_j(r)\le 2\pi$ 다.

$w=\log z$ 로 옮기면 $D\_j$ 는 단면 폭이 $\theta\_j$ 인 통로가 되고, Ahlfors 왜곡 정리에 따라 $D\_j$ 안의 $\log\vert f\vert$ 가 다음 크기 이상으로 커진다.

$$
\exp\Bigl(\pi\int\_{r\_0}^r\frac{dt}{t\thinspace\theta\_j(t)}\Bigr)
$$

[Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $\sum\_j1/\theta\_j\ge N^2/\sum\_j\theta\_j\ge N^2/(2\pi)$ 이므로, 어느 $j$ 에서 적분이 $\frac N{2\pi}\log r$ 에 가까운 값 이상이다. 그러면 $\log M(r)$ 이 $r^{N/2}$ 의 상수배 이상으로 커지므로 $\rho\ge N/2$ 다[^2].

## 등호

모든 자연수 $n$ 에 대해 다음 함수는 위수 $n$ 이고 점근값이 $2n$ 개다.

$$
f\_n(z)=\int\_0^z\frac{\sin t^n}{t^n}dt
$$

$t^n$ 이 실수인 반직선 $\arg t=\pi k/n$ ($k=0,\dots,2n-1$) 을 따라 피적분함수가 $\sin s^n/s^n$ 꼴로 줄어들어, $f\_n$ 은 그 반직선마다 $e^{i\pi k/n}C\_n$ 으로 간다. 여기서 $C\_n=\int\_0^\infty\frac{\sin s^n}{s^n}ds\gt 0$ 이다. $n=1$ 이 직관 절의 함수다.

# 활용

- [역함수의 특이점](singularities-of-inverse-functions.md). 점근값은 $f$ 의 역함수를 해석적으로 이어 갈 때 막히는 초월 특이점이 놓이는 값이다(Iversen). 이 정리는 위수가 유한한 전해석함수에서 그런 값이 유한 개이고 그 수가 $2\rho$ 이하임을 준다.
- 위수가 작은 함수. 위수가 $1/2$ 보다 작은 전해석함수는 무한대로 가는 어느 곡선을 따라가도 유한값으로 수렴하지 않는다. 다항식이 아닌 위수 $0$ 의 함수, 예를 들어 $\prod\_{k\ge 1}(1-z/2^k)$ 가 그렇다.

[^1]: L. Ahlfors, "Untersuchungen zur Theorie der konformen Abbildung und der ganzen Funktionen", *Acta Societatis Scientiarum Fennicae, Nova Series A* 1 (1930), no. 9.
[^2]: J. B. Garnett, D. E. Marshall, *Harmonic Measure*, Cambridge University Press, 2005.

# 연관 문서

## 선수지식

- [Ahlfors 왜곡 정리](ahlfors-distortion-theorem.md)
- [Weierstrass 인수분해 정리](weierstrass-factorization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis
