# 약한 Hilbert 16 번째 문제

# 개요

**약한 Hilbert 16 번째 문제(weak Hilbert's sixteenth problem)** 는 차수 $n+1$ 의 다항식 $H$ 와 차수 $n$ 이하의 다항식 1-형식 $\omega$ 에 대해, $H$ 의 등위선 위의 닫힌 곡선들을 따라 $\omega$ 를 적분한 함수가 갖는 고립 영점의 개수에 $n$ 에만 의존하는 상한을 구하는 문제다. 이 적분을 Abel 적분(Abelian integral)이라 한다. Hamilton 벡터장을 작게 섭동했을 때 닫힌 궤도 족에서 갈라져 나오는 극한 순환의 개수가 이 영점 개수로 정해지므로, [Hilbert 의 16 번째 문제](hilbert-sixteenth-problem.md)를 섭동 근처로 좁힌 판이다.

# 직관

$H=(x^2+y^2)/2$ 로 두면 계 $x'=-y$, $y'=x$ 의 해는 원 $H=h$ 를 따라 돌고 모든 궤도가 닫혀 있다. 극한 순환은 없다. 이 계에 작은 항을 더한

$$
x'=-y+\varepsilon P(x,y),\qquad y'=x+\varepsilon Q(x,y)
$$

에서 극한 순환이 몇 개 생기는지 알고 싶다.

해를 따라 $H$ 가 변하는 속도는 $\frac{d}{dt}H=xx'+yy'=\varepsilon(xP+yQ)$ 다. 해가 원 $H=h$ 근처에서 한 바퀴 도는 동안 $H$ 가 변한 양은, $\varepsilon$ 이 작으면 해를 원으로 바꿔 계산해도 오차가 $O(\varepsilon^2)$ 이다. 원 위에서 $dx=-y\thinspace dt$, $dy=x\thinspace dt$ 이므로 $(xP+yQ)\thinspace dt=P\thinspace dy-Q\thinspace dx$ 이고, 한 바퀴 동안의 변화량은

$$
\Delta(h,\varepsilon)=\varepsilon\oint_{H=h}(P\thinspace dy-Q\thinspace dx)+O(\varepsilon^2)
$$

이다. 한 바퀴 돌아 $H$ 가 제자리로 오는 해가 닫힌 궤도이므로, 극한 순환은 $\Delta(h,\varepsilon)=0$ 인 $h$ 근처에 있다.

$P=x(a+b(x^2+y^2))$, $Q=y(a+b(x^2+y^2))$ 로 계산한다. [Green 정리](greens-theorem.md)로 원 위의 적분을 원판 위의 $P_x+Q_y=2a+4b(x^2+y^2)$ 의 적분으로 바꾸면, 반지름이 $\rho=\sqrt{2h}$ 인 원판에서

$$
\int_0^\rho(2a+4br^2)\thinspace 2\pi r\thinspace dr=2\pi(a\rho^2+b\rho^4)=4\pi h(a+2bh)
$$

이다. $a$ 와 $b$ 의 부호가 다르면 $h=-a/(2b)$ 에서 영점이 하나 생기고, 실제로 극좌표에서 $r'=\varepsilon r(a+br^2)$ 이므로 원 $r^2=-a/b$ 가 극한 순환이다. 극한 순환을 세는 일이 적분의 영점을 세는 일로 바뀌었고, $P$, $Q$ 의 차수를 고정했을 때 영점이 몇 개까지 가능한지가 이 문제의 물음이다.

# 정의

$H$ 가 차수 $n+1$ 의 실계수 다항식이고 $h$ 가 구간 $(h_0,h_1)$ 을 움직일 때 $H^{-1}(h)$ 의 연결성분 $\gamma(h)$ 가 연속적으로 움직이는 닫힌 곡선 족이라 하자. 차수 $n$ 이하의 실계수 다항식 $P$, $Q$ 로 $\omega=P\thinspace dy-Q\thinspace dx$ 를 두고

$$
I(h)=\oint_{\gamma(h)}\omega
$$

를 **Abel 적분(Abelian integral)** 이라 한다. $\gamma(h)$ 의 방향은 Hamilton 벡터장 $x'=-H_y$, $y'=H_x$ 의 흐름을 따른다.

$H$, $\omega$, 닫힌 곡선 족을 모두 바꿔 가며 $I$ 가 $(h_0,h_1)$ 에서 갖는 고립 영점 개수의 상한을 $Z(n)$ 이라 한다. 약한 Hilbert 16 번째 문제는 $Z(n)$ 이 유한한지와 그 값을 묻는다.[^1]

# 성질

## Poincaré–Pontryagin 정리

**정리(Poincaré–Pontryagin).** 섭동계 $x'=-H_y+\varepsilon P$, $y'=H_x+\varepsilon Q$ 에서 $\gamma(h)$ 를 가로지르는 선분 위의 점을 $H$ 의 값 $h$ 로 매개하고, 그 점에서 출발한 해가 한 바퀴 돌아 선분에 돌아왔을 때 $H$ 의 값의 변화를 $\Delta(h,\varepsilon)$ 이라 하자. 그러면 $(h_0,h_1)$ 의 콤팩트 부분구간에서 고르게

$$
\Delta(h,\varepsilon)=\varepsilon I(h)+O(\varepsilon^2)
$$

이다.[^2]

$I$ 를 **첫 Melnikov 함수(first Melnikov function)** 라고도 한다. $I(h^\ast)=0$, $I'(h^\ast)\ne 0$ 이면 $\Delta/\varepsilon$ 에 음함수 정리를 적용해, 작은 $\varepsilon\ne 0$ 마다 $\gamma(h^\ast)$ 근처에 극한 순환이 정확히 하나 있다. $I$ 가 항등적으로 $0$ 이 아니면 콤팩트 부분구간 근처에서 생기는 극한 순환의 개수는 그 구간에 있는 $I$ 의 영점 개수를 중복도까지 세어 넘지 않는다.

## Green 정리로 쓴 꼴

$\gamma(h)$ 가 둘러싼 영역을 $D(h)$ 라 하면 $\gamma(h)$ 가 반시계 방향일 때

$$
I(h)=\iint_{D(h)}(P_x+Q_y)\thinspace dx\thinspace dy
$$

다. 그래서 $I$ 는 섭동의 발산을 등위선 안에서 적분한 값이고, 직관 절의 계산이 이 꼴이다.

## Varchenko–Khovanskii 정리

**정리(Varchenko–Khovanskii, 1984).** 모든 $n$ 에서 $Z(n)\lt\infty$ 다.[^3]

증명의 요지. $I$ 를 $h$ 의 복소 함수로 연장하면 $H$ 의 임계값을 뺀 복소평면에서 여러 값을 갖는 해석함수가 되고, 임계값 $c$ 근처에서 $(h-c)^\alpha(\log(h-c))^k$ 꼴 항의 합으로 전개된다. Varchenko 는 이 전개의 차수가 $H$ 와 $\omega$ 의 계수에 대해 고르게 묶인다는 것에서, Khovanskii 는 Pfaff 함수(Pfaffian function)의 영점 수를 세는 자신의 이론에서 상한을 얻었다. 두 논증 모두 상한의 존재만 주고 값은 주지 않는다.

## 명시적 상한

$Z(n)\le 2^{2^{p(n)}}$ 를 만족하는 $n$ 의 다항식 $p$ 가 존재한다. Binyamini, Novikov, Yakovenko 가 2010 년에 증명했다. $I$ 가 만족하는 Picard–Fuchs 미분방정식계(Picard–Fuchs system)의 계수 크기를 통제해 영점 수를 센다.[^4]

## Hilbert 수와의 관계

$Z(n)$ 의 상한은 Hilbert 수 $H(n)$ 의 상한을 주지 않는다. 극한 순환은 닫힌 곡선 족의 끝, 곧 $\gamma(h)$ 가 평형점으로 줄어들거나 평형점을 지나는 곡선에 닿는 곳 근처에서도 생기는데, Poincaré–Pontryagin 정리의 고른 근사는 콤팩트 부분구간에서만 성립한다. 또 $I\equiv 0$ 이면 $\Delta$ 의 $\varepsilon^2$ 이상 항이 극한 순환을 정하고, Hamilton 계에서 멀리 떨어진 벡터장은 이 섭동 논증으로 다룰 수 없다.[^1]

# 활용

- **극한 순환의 하한 구성.** Hamilton 벡터장과 섭동을 골라 $I$ 가 단순 영점을 많이 갖게 하면 Poincaré–Pontryagin 정리로 그만큼의 극한 순환을 갖는 다항식 벡터장을 얻는다. Hilbert 의 16 번째 문제 성질 절의 $H(n)$ 하한들이 이런 섭동 구성을 쓴다.[^1]
- **Bogdanov–Takens 분기.** 고윳값이 둘 다 $0$ 인 평형점의 [Bogdanov–Takens 분기](bogdanov-takens-bifurcation.md)에서 극한 순환이 많아야 하나라는 증명은, 축척을 바꾼 계를 $x$ 에 대해 3 차인 Hamilton 함수의 섭동으로 쓰고, 두 Abel 적분의 비가 $h$ 에 대해 단조라는 것으로 $I$ 의 영점이 하나뿐임을 보인다.[^5]

[^1]: Yu. Ilyashenko, "Centennial history of Hilbert's 16th problem", Bull. Amer. Math. Soc. 39 (2002), 301–354.
[^2]: Yu. Ilyashenko, S. Yakovenko, *Lectures on Analytic Differential Equations*, Graduate Studies in Mathematics 86, American Mathematical Society, 2008, 26 장.
[^3]: A. N. Varchenko, "Estimation of the number of zeros of an abelian integral depending on a parameter, and limit cycles", Funct. Anal. Appl. 18 (1984), 98–108. A. G. Khovanskii, "Real analytic manifolds with the property of finiteness, and complex abelian integrals", Funct. Anal. Appl. 18 (1984), 119–127.
[^4]: G. Binyamini, D. Novikov, S. Yakovenko, "On the number of zeros of Abelian integrals", Invent. Math. 181 (2010), 227–289.
[^5]: Yu. A. Kuznetsov, *Elements of Applied Bifurcation Theory*, 3rd ed., Springer, 2004, 8 장.

# 연관 문서

## 선수지식

- [Hilbert 의 16 번째 문제](hilbert-sixteenth-problem.md)

## 더 알아보기

- [Bogdanov–Takens 분기](bogdanov-takens-bifurcation.md)

#analysis #topology
