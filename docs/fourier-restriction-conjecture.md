# Fourier 제한 추측

# 개요

**Fourier 제한 추측(Fourier restriction conjecture)** 은 함수의 Fourier 변환을 구면 같은 휘어진 곡면 위로 제한한 값이 함수의 적분 크기로 조절되는 범위에 관한 추측이다. $\mathbb R^3$ 의 함수 $f$ 를 [Fourier 변환](fourier-transform.md)하면 $\hat f$ 는 다시 $\mathbb R^3$ 의 함수다. 그 값을 단위구면 위에서만 읽으려 하면, 구면은 부피가 $0$ 이어서 거의 어디서나 정해진 함수로는 구면 위의 값이 뜻을 갖지 않는다.

제한 추측은 $f$ 가 어느 $L^p$ 공간에 있으면 구면 위의 값이 뜻을 갖고 $f$ 의 노름으로 조절되는지를 정한다. 평면 조각에서는 $p=1$ 밖에 되지 않고, 구면에서는 휘어짐 때문에 더 넓은 범위가 된다.

# 직관

구면과 평평한 원판을 비교한다. 단위구면 $S^2$ 의 넓이 측도를 $\sigma$ 라 하고 $\sigma$ 의 Fourier 변환을 계산한다. $x$ 의 크기를 $r$ 이라 하고 $x$ 방향과 이루는 각으로 적분하면 다음이 나온다.

$$
\hat\sigma(x)=\int_{S^2}e^{-2\pi i x\cdot\omega}\thinspace d\sigma(\omega)=2\pi\int_{-1}^{1}e^{-2\pi i rt}\thinspace dt=\frac{2\sin(2\pi r)}{r}
$$

$\lvert\hat\sigma(x)\rvert$ 는 $2/\lvert x\rvert$ 이하로 줄어든다.

평면 $\xi_3=0$ 안의 단위원판의 넓이 측도 $\mu$ 는 다르다. 점 $(0,0,t)$ 에서 $e^{-2\pi i(0,0,t)\cdot\omega}=1$ 이므로 $\hat\mu(0,0,t)=\pi$ 이고, $t$ 가 커져도 줄지 않는다.

$\hat\sigma$ 가 $\mathbb R^3$ 에서 $q$ 제곱 적분가능한지는 $\int^\infty r^{-q}r^2\thinspace dr$ 로 정해지고, $q\gt 3$ 일 때만 유한하다. $\hat\mu$ 는 어느 $q\lt\infty$ 에서도 $q$ 제곱 적분가능하지 않다. 구면 위의 함수 $g$ 로 측도 $g\thinspace d\sigma$ 를 만들어 Fourier 변환한 것이 어느 $L^q$ 에 드는지가 제한 문제의 쌍대이고, 직관 절의 계산은 $g=1$ 인 경우다.

# 정의

## 제한 작용소와 확장 작용소

$S$ 를 $\mathbb R^n$ 의 단위구면, $\sigma$ 를 그 넓이 측도라 한다. 매끄럽고 빨리 줄어드는 함수 $f$ 에 대해 $Rf=\hat f\vert\_S$ 를 **제한 작용소(restriction operator)** 라 한다. 다음이 성립할 때 $R(p\to q)$ 가 성립한다고 쓴다.

$$
\Vert\hat f\vert\_S\Vert\_{L^q(S,\sigma)}\le C\Vert f\Vert\_{L^p(\mathbb R^n)}
$$

이 부등식이 성립하면 $R$ 은 $L^p(\mathbb R^n)$ 전체로 연장되어 구면 위의 값이 뜻을 갖는다.

구면 위의 함수 $g$ 에 대해 다음을 **확장 작용소(extension operator)** 라 한다.

$$
Eg(x)=\int_S g(\omega)e^{2\pi i x\cdot\omega}\thinspace d\sigma(\omega)
$$

$E$ 는 $R$ 의 쌍대 작용소이므로 $R(p\to q)$ 는 $\Vert Eg\Vert\_{L^{p'}}\le C\Vert g\Vert\_{L^{q'}(S)}$ 와 동치다. $p',q'$ 은 켤레 지수다. 직관 절의 $\hat\sigma$ 는 $E1$ 의 켤레복소수다.

## 제한 추측

**Fourier 제한 추측** 은 $n\ge 2$ 에서 다음 부등식이 $q\gt 2n/(n-1)$ 인 모든 $q$ 에서 성립한다는 진술이다.

$$
\Vert Eg\Vert\_{L^q(\mathbb R^n)}\le C\Vert g\Vert\_{L^\infty(S)}
$$

$n=3$ 이면 $q\gt 3$ 이고, 직관 절에서 $g=1$ 이 이 범위에서만 성립함을 보았다. E. M. Stein 이 이 꼴로 제기했다[^1].

# 성질

## Stein–Tomas 정리

정리. $q\ge 2(n+1)/(n-1)$ 이면 $\Vert Eg\Vert\_{L^q(\mathbb R^n)}\le C\Vert g\Vert\_{L^2(S)}$ 다. 동치로 $1\le p\le 2(n+1)/(n+3)$ 이면 $R(p\to 2)$ 가 성립한다. P. A. Tomas 가 끝점을 뺀 경우를, Stein 이 끝점을 증명했다[^2]. 이것을 **Stein–Tomas 정리(Stein–Tomas theorem)** 라 한다.

증명의 요지. $\Vert Rf\Vert\_{L^2(S)}^2=\langle f,R^\ast Rf\rangle$ 이고 $R^\ast Rf=f\ast\check\sigma$ 이므로, $\check\sigma$ 와의 합성곱이 $L^p$ 에서 $L^{p'}$ 으로 유계임을 보이면 된다. $\check\sigma$ 를 크기 $2^k$ 의 껍질로 나눈 조각 $K_k$ 를 본다.

조각 $K_k$ 와의 합성곱은 [정상위상법](stationary-phase.md)의 감소 $\lvert\check\sigma(x)\rvert\lesssim\lvert x\rvert^{-(n-1)/2}$ 로 $L^1\to L^\infty$ 노름이 $2^{-k(n-1)/2}$ 규모이고, Fourier 쪽에서 보면 $L^2\to L^2$ 노름이 $2^k$ 규모다. [Riesz–Thorin 정리](riesz-thorin.md)로 두 끝을 보간하면 $L^p\to L^{p'}$ 노름이 $2^{k\theta}$ 꼴이 되고, $p\lt 2(n+1)/(n+3)$ 이면 지수 $\theta$ 가 음수라 $k$ 에 대한 합이 수렴한다.

## Knapp 예

Stein–Tomas 정리의 지수는 $L^2(S)$ 에서 더 좋아질 수 없다. 북극 근처의 반지름 $\delta$ 인 모자 위에서 $1$ 이고 나머지에서 $0$ 인 $g$ 를 둔다. 모자는 평면과 $\delta^2$ 이내로 붙어 있으므로, $\lvert x'\rvert\lesssim\delta^{-1}$, $\lvert x_n\rvert\lesssim\delta^{-2}$ 인 관에서 $e^{2\pi i x\cdot\omega}$ 의 위상이 거의 일정하다.

그 관에서 $\lvert Eg\rvert$ 는 모자의 넓이 $\delta^{n-1}$ 규모이고 관의 부피는 $\delta^{-(n+1)}$ 이다. 따라서 다음이 나온다.

$$
\Vert Eg\Vert\_{L^q}\gtrsim\delta^{n-1-(n+1)/q},\qquad\Vert g\Vert\_{L^2(S)}\approx\delta^{(n-1)/2}
$$

$\delta\to 0$ 에서 부등식이 유지되려면 $q\ge 2(n+1)/(n-1)$ 이어야 한다.

## 휘어짐의 역할

곡면이 평평한 조각을 포함하면 $R(p\to q)$ 는 $p=1$ 에서만 성립한다. 직관 절의 원판에서 $E1$ 이 수직 방향으로 줄지 않는 것이 그 이유다. 구면에서는 모든 방향으로 휘어 있어 $\hat\sigma$ 가 $\lvert x\rvert^{-(n-1)/2}$ 로 줄어들고, 이 감소가 Stein–Tomas 정리의 지수를 정한다.

## 평면의 경우와 다른 추측과의 관계

$n=2$ 에서 제한 추측은 C. Fefferman 과 A. Zygmund 가 증명했다[^3]. $n\ge 3$ 에서 제한 추측은 [Kakeya 극대함수](kakeya-maximal-function.md)에 대한 추측을 함의한다. T. Tao 는 [Bochner–Riesz 평균](bochner-riesz-means.md)에 대한 추측이 제한 추측을 함의함을 보였다[^4].

# 활용

- 분산 방정식의 Strichartz 추정. 자유 Schrödinger 방정식의 해는 포물면 위의 함수를 확장 작용소로 보낸 것이다. 포물면에 대한 Stein–Tomas 꼴 부등식이 해의 시공간 $L^q$ 노름을 초기값의 $L^2$ 노름으로 누르는 Strichartz 추정(Strichartz estimate)이다[^5].
- 격자점 세기. 구 안의 격자점 수를 부피와 비교할 때 오차 항의 크기가 $\hat\sigma$ 의 감소율로 정해진다.
- 프랙탈 측도의 제한 정리. Fourier 변환이 $\lvert x\rvert^{-\beta}$ 로 줄어드는 측도에 대해서도 Stein–Tomas 의 보간 논법이 그대로 쓰여, 구면 대신 프랙탈 집합 위의 측도에 대한 제한 정리가 나온다.

[^1]: E. M. Stein, *Harmonic Analysis: Real-Variable Methods, Orthogonality, and Oscillatory Integrals*, Princeton University Press, 1993, 8 장.
[^2]: P. A. Tomas, "A restriction theorem for the Fourier transform", Bulletin of the American Mathematical Society 81 (1975), 477–478.
[^3]: C. Fefferman, "Inequalities for strongly singular convolution operators", Acta Mathematica 124 (1970), 9–36. A. Zygmund, "On Fourier coefficients and transforms of functions of two variables", Studia Mathematica 50 (1974), 189–201.
[^4]: T. Tao, "The Bochner–Riesz conjecture implies the restriction conjecture", Duke Mathematical Journal 96 (1999), 363–375.
[^5]: R. S. Strichartz, "Restrictions of Fourier transforms to quadratic surfaces and decay of solutions of wave equations", Duke Mathematical Journal 44 (1977), 705–714.

# 연관 문서

## 선수지식

- [Fourier 변환](fourier-transform.md)
- [정상위상법](stationary-phase.md)
- [Riesz–Thorin 정리](riesz-thorin.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #measure_theory #functional_analysis
