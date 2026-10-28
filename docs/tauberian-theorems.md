# Tauber 정리

# 개요

**Tauber 정리(Tauberian theorem)** 는 급수의 평균이 수렴할 때 항에 조건을 더해 급수 자체의 수렴을 얻는 정리다. 급수 $1-1+1-1+\cdots$ 의 부분합은 $1,0,1,0,\dots$ 을 오가서 수렴하지 않지만, 부분합의 평균은 $1/2$ 로 간다. 평균에서 급수로 돌아가려면 부분합이 이렇게 오가는 것을 막아야 하고, Tauber 정리는 항이 $1/n$ 보다 빨리 작아진다는 조건으로 이것을 막는다.

# 직관

급수가 수렴하면 평균도 같은 값으로 수렴한다는 반대 방향의 정리는 조건 없이 성립하고 Abel 형 정리(Abelian theorem)라 한다. [멱급수](power-series.md)의 Abel 정리가 그 예다. 이름은 Abel 정리의 역을 처음 증명한 A. Tauber 에게서 왔다[^1].

급수 $1-1+1-1+\cdots$ 의 부분합은 $1,0,1,0,\dots$ 이라 수렴하지 않는다. 각 항에 $x^n$ 을 곱한 멱급수는 $\sum(-1)^nx^n=1/(1+x)$ 이고, $x\to 1^-$ 에서 $1/2$ 로 간다. 멱급수의 극한은 있는데 급수는 수렴하지 않으므로 Abel 정리의 역은 그대로는 성립하지 않는다.

$x$ 를 $1$ 에 가깝게 하면 $x^n$ 은 $n$ 이 $1/(1-x)$ 보다 작은 동안 $1$ 에 가깝고, 그보다 크면 작아진다. 그래서 멱급수의 값은 부분합을 $1/(1-x)$ 번째 항 근처까지 고르게 섞은 평균이다. 부분합이 $1$ 과 $0$ 을 오가도 평균은 $1/2$ 로 간다.

평균이 부분합을 대신할 수 있으려면 부분합이 오가지 않아야 한다. 항 $a_n$ 이 $1/n$ 보다 빨리 작아지면 $N$ 번째 부분합과 그 근처의 부분합들이 거의 같아서 평균과 부분합이 같은 값으로 간다. $\pm 1$ 이 번갈아 나오는 위 급수는 항이 작아지지 않아 이 조건을 만족하지 않는다.

# 정의

## Abel 합

급수 $\sum a_n$ 에 대해 $f(x)=\sum a_nx^n$ 이 $\vert x\vert\lt 1$ 에서 수렴하고 $\lim_{x\to 1^-}f(x)=s$ 이면, 급수가 **Abel 합(Abel sum)** $s$ 를 갖는다고 한다. Abel 정리는 $\sum a_n=s$ 이면 Abel 합도 $s$ 라는 것이다.

## Tauber 조건

Abel 합이나 그 밖의 평균에서 급수의 수렴을 끌어내려고 항이나 부분합에 붙이는 조건을 **Tauber 조건(Tauberian condition)** 이라 한다. $na_n\to 0$, $na_n=O(1)$, $a_n\ge 0$ 이 대표적이다.

## 적분꼴

증가함수 $N:\lbrack 0,\infty)\to\lbrack 0,\infty)$ 의 Laplace–Stieltjes 변환은

$$
\mathcal L N(t)=\int_0^\infty e^{-t\lambda}\thinspace dN(\lambda)
$$

이다. $a_n$ 을 $\lambda=n$ 에 놓은 점질량으로 보고 $x=e^{-t}$ 로 두면 $\mathcal LN(t)=\sum a_nx^n$ 이므로 멱급수가 이 변환의 특수한 경우다. 적분꼴의 Tauber 정리는 $t\to 0^+$ 에서 $\mathcal LN$ 의 점근으로 $\lambda\to\infty$ 에서 $N$ 의 점근을 얻는다.

# 성질

## Tauber 의 정리

$\sum a_n$ 이 Abel 합 $s$ 를 갖고 $na_n\to 0$ 이면 $\sum a_n=s$ 다[^1].

증명의 요지. $x=1-1/N$ 으로 잡고 $S_N=\sum_{n\le N}a_n$ 과 $f(x)$ 를 비교한다.

$$
\vert S_N-f(x)\vert\le\sum_{n\le N}\vert a_n\vert(1-x^n)+\sum_{n\gt N}\vert a_n\vert x^n
$$

$1-x^n\le n(1-x)=n/N$ 이므로 첫째 합은 $\frac1N\sum_{n\le N}n\vert a_n\vert$ 이하이고, $n\vert a_n\vert\to 0$ 이므로 이 평균도 $0$ 으로 간다. 둘째 합은 $\sup_{n\gt N}n\vert a_n\vert\cdot\frac1N\sum_nx^n=\sup_{n\gt N}n\vert a_n\vert$ 이하이고 역시 $0$ 으로 간다.

## Hardy–Littlewood 정리

J. E. Littlewood 는 $na_n\to 0$ 을 $na_n=O(1)$ 로 약하게 해도 Tauber 의 정리가 성립함을 보였다[^2]. G. H. Hardy 와 Littlewood 는 계수가 음이 아닌 경우를 다뤘다[^3]. $a_n\ge 0$ 이고 $\alpha\gt 0$ 일 때

$$
\sum_na_nx^n\sim\frac{A}{(1-x)^\alpha}\quad(x\to 1^-)\qquad\Longrightarrow\qquad\sum_{n\le N}a_n\sim\frac{A}{\Gamma(\alpha+1)}N^\alpha\quad(N\to\infty)
$$

이다. $\Gamma$ 는 [감마 함수](gamma-function.md)다. 이것을 **Hardy–Littlewood Tauber 정리(Hardy–Littlewood Tauberian theorem)** 라 한다.

## Karamata 의 증명

J. Karamata 는 위 정리를 적분꼴로 짧게 증명했다[^4]. 증가함수 $N$ 에 대해 $\mathcal LN(t)\sim At^{-\alpha}$ $(t\to 0^+)$ 이면

$$
N(\lambda)\sim\frac{A}{\Gamma(\alpha+1)}\lambda^\alpha\qquad(\lambda\to\infty)
$$

이다. 이 형태를 Karamata Tauber 정리(Karamata's Tauberian theorem)라고도 한다.

증명의 요지. 다항식 $P$ 마다

$$
\int_0^\infty e^{-t\lambda}P(e^{-t\lambda})\thinspace dN(\lambda)\sim\frac{A}{\Gamma(\alpha)}t^{-\alpha}\int_0^\infty u^{\alpha-1}e^{-u}P(e^{-u})\thinspace du
$$

이다. 단항식 $P(y)=y^k$ 이면 좌변은 가정에 $t$ 대신 $(k+1)t$ 를 넣은 것이므로 $A(k+1)^{-\alpha}t^{-\alpha}$ 에 가깝고, 우변의 적분은 $\Gamma(\alpha)(k+1)^{-\alpha}$ 다. $\lbrack 0,1\rbrack$ 에서 $y\lt 1/e$ 이면 $0$, $y\ge 1/e$ 이면 $1/y$ 인 함수 $g$ 를 위아래에서 다항식으로 근사한다. $N$ 이 증가하므로 근사의 부등식이 적분에서도 유지되고, $e^{-t\lambda}g(e^{-t\lambda})$ 가 $\lambda\le 1/t$ 의 지시함수이므로 $N(1/t)\sim At^{-\alpha}/(\alpha\Gamma(\alpha))$ 가 나온다.

## Wiener–Ikehara 정리

[Dirichlet 급수](dirichlet-series.md)의 Wiener–Ikehara 정리(Wiener–Ikehara theorem)도 Tauber 정리다. 계수가 음이 아니라는 것이 Tauber 조건이고, 가정은 평균의 점근 대신 Dirichlet 급수가 $\mathrm{Re}\thinspace s=1$ 까지 극 하나만 남기고 정칙하게 연장된다는 것이다.

# 활용

- [Weyl 법칙](weyl-law.md)의 열 대각합 증명. 열 대각합 $\sum_ke^{-t\lambda_k}$ 는 고윳값 세기 함수의 Laplace–Stieltjes 변환이고, $t\to 0^+$ 의 점근에 Karamata Tauber 정리를 쓰면 세기 함수의 점근이 나온다.
- [소수 정리](prime-number-theorem.md). $-\zeta^\prime/\zeta$ 에 Wiener–Ikehara 정리를 쓰면 $\sum_{n\le x}\Lambda(n)\sim x$ 다.
- 생성함수의 계수. 계수가 음이 아닌 생성함수가 $x=1$ 근처에서 $(1-x)^{-\alpha}$ 처럼 커지면 Hardy–Littlewood Tauber 정리가 계수 부분합의 점근을 준다.

[^1]: A. Tauber, "Ein Satz aus der Theorie der unendlichen Reihen", Monatsh. Math. Phys. 8 (1897), 273–277.
[^2]: J. E. Littlewood, "The converse of Abel's theorem on power series", Proc. London Math. Soc. (2) 9 (1911), 434–448.
[^3]: G. H. Hardy, J. E. Littlewood, "Tauberian theorems concerning power series and Dirichlet's series whose coefficients are positive", Proc. London Math. Soc. (2) 13 (1914), 174–191.
[^4]: J. Karamata, "Über die Hardy-Littlewoodschen Umkehrungen des Abelschen Stetigkeitssatzes", Math. Z. 32 (1930), 319–320.

# 연관 문서

## 선수지식

- [멱급수](power-series.md)

## 더 알아보기

- [Weyl 법칙](weyl-law.md)

#analysis #number_theory #theorem
