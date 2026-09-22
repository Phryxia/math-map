# Riemann zeta 함수

# 개요

Riemann zeta 함수는 $\mathrm{Re}\thinspace s\gt 1$ 에서 급수 $\zeta(s)=\sum_{n=1}^\infty n^{-s}$ 로 정의되는 복소함수다. 이 급수는 그 범위 밖에서 발산하지만 함수 자신은 $s=1$ 의 극 하나를 제외한 복소평면 전체로 [해석적 연속](analytic-continuation.md)된다.

[소수](primes.md)의 유일분해가 이 함수를 소수에 대한 곱으로 다시 쓰게 한다. 그래서 $\zeta$ 의 극과 영점의 위치에서 소수의 분포를 읽는다.

# 직관

$1$ 부터 $N$ 까지 $1/n$ 을 더한 값은 $N$ 을 키우면 얼마든지 커진다. 이 합을 소수 쪽에서 다시 세어 본다.

$N$ 이하의 수 $n$ 은 저마다 $2^a3^b5^c\cdots$ 꼴로 한 가지로만 쓰인다. 소수가 $2,3,5$ 뿐이라면 $1/n$ 의 값은 전부 $2^{-a}3^{-b}5^{-c}$ 꼴이고, 이런 값을 모두 더한 것은 등비급수 셋의 곱이다.

$$
\Big(1+\frac12+\frac14+\cdots\Big)\Big(1+\frac13+\frac19+\cdots\Big)\Big(1+\frac15+\frac1{25}+\cdots\Big)=2\cdot\frac32\cdot\frac54=\frac{15}4
$$

소수가 유한 개면 이렇게 유한한 값이 나오는데 왼쪽 합은 무한히 커지므로 소수는 무한히 많다.

소수 전체로 같은 계산을 하려면 양쪽이 수렴해야 한다. 지수를 $1$ 에서 $s\gt 1$ 로 올리면 왼쪽 합이 수렴하고 등비급수의 공비도 $p^{-s}$ 로 작아진다.

$$
\sum_{n=1}^\infty\frac1{n^s}=\prod_p\frac1{1-p^{-s}}
$$

왼쪽은 소수를 한 번도 쓰지 않고 오른쪽은 소수만으로 쓰였다. 왼쪽의 함수가 $\zeta(s)$ 다.

$s$ 를 $1$ 로 내리면 왼쪽은 처음의 합으로 돌아가 발산한다. 양변에 로그를 취하면 오른쪽은 $\sum_p p^{-s}$ 와 유계 차이이므로 소수의 역수를 더한 값도 발산한다. 발산하는 속도가 소수가 얼마나 빽빽한지를 정한다.

$s$ 를 실수로 두면 $s=1$ 한 점의 정보만 쓴다. $s$ 를 복소수로 놓고 수렴 범위 밖까지 연속하면 극 말고 영점이 생기고, 영점의 위치가 소수를 셀 때의 오차를 정한다.

# 정의

## Dirichlet 급수

$$
\zeta(s)=\sum_{n=1}^\infty\frac1{n^s}
$$

$\mathrm{Re}\thinspace s\gt 1$ 에서 절대수렴한다. $\lvert n^{-s}\rvert=n^{-\mathrm{Re}\thinspace s}$ 이므로 수렴 판정이 실급수 $\sum n^{-\sigma}$ 와 같다.

## 해석적 연속과 함수방정식

$$
\zeta(s)=2^s\pi^{s-1}\sin\negthinspace\Big(\frac{\pi s}2\Big)\Gamma(1-s)\thinspace\zeta(1-s)
$$

이 등식이 $\zeta$ 를 $s=1$ 의 단순극 하나를 제외한 복소평면 전체의 유리형함수로 정한다. 그 극에서의 유수는 $1$ 이다.

## 완비 zeta 함수

$$
\xi(s)=\pi^{-s/2}\thinspace\Gamma\negthinspace\Big(\frac s2\Big)\zeta(s)
$$

로 놓으면 함수방정식이 $\xi(s)=\xi(1-s)$ 가 된다. [감마 함수](gamma-function.md) 인자가 소수마다 붙는 Euler 인자에 대응하는 무한 자리의 인자이고, 이것을 붙여야 $s$ 와 $1-s$ 의 대칭이 드러난다.

## 영점

$s=-2,-4,-6,\dots$ 에서 함수방정식의 사인 인자가 $0$ 이 되고 $\zeta$ 도 $0$ 이 된다. 이 값들이 자명한 영점이다.

나머지 영점은 모두 임계띠 $0\lt\mathrm{Re}\thinspace s\lt 1$ 안에 있고 비자명한 영점이라고 부른다. $\xi(s)=\xi(1-s)$ 와 $\overline{\zeta(\bar s)}=\zeta(s)$ 가 이들을 직선 $\mathrm{Re}\thinspace s=1/2$ 과 실축 양쪽에 대칭으로 배치한다.

[Riemann 가설](riemann-hypothesis.md)은 비자명한 영점이 전부 $\mathrm{Re}\thinspace s=1/2$ 위에 있다는 추측이다.

# 성질

## Euler 곱

$\mathrm{Re}\thinspace s\gt 1$ 에서 다음이 성립한다.

$$
\zeta(s)=\prod_p\big(1-p^{-s}\big)^{-1}
$$

각 인자를 $\sum_{k\ge0}p^{-ks}$ 로 펴고 소수 유한 개에 대해 곱한 뒤 극한을 취한다. 절대수렴이 항의 재배열을 허용한다. 소인수분해의 존재가 모든 $n$ 이 나타남을, 유일성이 정확히 한 번씩 나타남을 보장한다.

## von Mangoldt 함수

Euler 곱의 로그를 미분하면 소수에 대한 급수가 나온다.

$$
-\frac{\zeta'}{\zeta}(s)=\sum_{n\ge1}\frac{\Lambda(n)}{n^s},\qquad
\Lambda(n)=\begin{cases}\ln p&n=p^k\cr 0&\text{그 외}\end{cases}
$$

$\Lambda$ 가 von Mangoldt 함수다. $\zeta'/\zeta$ 의 극은 $\zeta$ 의 극과 영점뿐이고 그 유수가 극의 차수와 영점의 차수다. 좌변의 극 자료와 우변의 소수 자료가 이 등식으로 맞물린다.

## 특수값

$$
\zeta(2k)=\frac{(-1)^{k+1}B_{2k}(2\pi)^{2k}}{2\thinspace(2k)!},\qquad
\zeta(-n)=-\frac{B_{n+1}}{n+1}
$$

$B_k$ 는 [Bernoulli 수](bernoulli-numbers.md)다. 두 식은 함수방정식으로 서로 옮겨진다. 앞 식의 $k=1$ 이 $\zeta(2)=\pi^2/6$ 이고, 뒤 식의 $n=1$ 이 $\zeta(-1)=-1/12$ 다.

## 직선 $\mathrm{Re}\thinspace s=1$ 위의 비소멸

$t\ne0$ 이면 $\zeta(1+it)\ne0$ 이다. 증명은 다음 부등식을 쓴다.

$$
3+4\cos\theta+\cos2\theta=2(1+\cos\theta)^2\ge0
$$

$\zeta$ 의 로그를 $\sum_{p,k}p^{-k\sigma}\cos(kt\ln p)/k$ 로 전개하고 $\theta=kt\ln p$ 를 대입하면 $\sigma\gt 1$ 에서 $\lvert\zeta(\sigma)^3\zeta(\sigma+it)^4\zeta(\sigma+2it)\rvert\ge1$ 이 나온다. $\zeta(1+it)=0$ 을 가정하면 $\sigma\to1^+$ 에서 $\lvert\zeta(\sigma)\rvert^3$ 이 $(\sigma-1)^{-3}$ 규모로 커지고 $\lvert\zeta(\sigma+it)\rvert^4$ 가 $(\sigma-1)^4$ 규모로 작아져 좌변이 $0$ 으로 가므로 모순이다.

이 논증을 정량화하면 무영점 영역 $\sigma\gt 1-c/\ln(\lvert t\rvert+2)$ 가 나온다(de la Vallée Poussin). Vinogradov 와 Korobov 는 지수합 추정으로 이 영역을 $\sigma\gt 1-c(\ln\lvert t\rvert)^{-2/3}(\ln\ln\lvert t\rvert)^{-1/3}$ 까지 넓혔다.

## 임계띠 안의 영점 개수

높이 $0\lt t\le T$ 에 있는 비자명한 영점의 개수 $N(T)$ 는 다음을 만족한다.

$$
N(T)=\frac{T}{2\pi}\ln\frac{T}{2\pi}-\frac{T}{2\pi}+O(\ln T)
$$

$\xi$ 의 로그 미분을 임계띠를 둘러싼 직사각형에서 적분하고 편각 원리를 적용해 얻는다. Hardy 는 직선 $\mathrm{Re}\thinspace s=1/2$ 위에 영점이 무한히 많음을 증명했다.

# 활용

## 소수 세기

$-\zeta'/\zeta$ 를 Perron 공식에 넣고 유수 정리로 계산하면 [소수 정리](prime-number-theorem.md)의 명시 공식이 나온다. $s=1$ 의 극이 주항을 주고 비자명한 영점이 오차항을 준다.

## L 함수

[Dirichlet 지표](dirichlet-l-functions.md) $\chi$ 를 계수에 붙인 $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ 도 Euler 곱과 함수방정식을 가지며, 자명한 지표가 $\zeta$ 를 준다. 수체 $K$ 의 아이디얼로 같은 곱을 만든 것이 Dedekind zeta 함수 $\zeta_K(s)=\sum_{\mathfrak a}(N\mathfrak a)^{-s}$ 이고, 그 $s=1$ 유수가 류수 공식에서 류수와 조정자를 묶는다. [Tate 의 박사논문](tate-thesis.md)은 이 함수방정식을 아델 위의 Fourier 해석으로 다시 증명한다.

## 모듈러 형식의 계수

무게 $k$ 의 [Eisenstein 급수](eisenstein-series.md)의 상수항이 $\zeta(1-k)$ 이고, 나머지 계수는 약수 함수다. $\zeta(-1)=-1/12$ 가 무게 $2$ 자리에 나타나는 것이 이 계산이다.

## 유한체 위의 다양체

유한체 위 다양체의 점의 개수를 모은 zeta 함수에도 대응하는 함수방정식과 Riemann 가설이 있고, 후자는 Weil 추측의 일부로 증명되었다.

## 영점의 간격

Montgomery 와 Dyson 은 임계선 위 영점의 간격 분포가 Gauss 유니터리 앙상블의 고윳값 간격 분포와 같은 꼴임을 관찰했다. 무작위 행렬의 고윳값 통계를 $L$ 함수의 평균값 예측에 쓰는 것이 이 대응에 기댄다. 고윳값의 대역 분포는 [Wigner 반원법칙](wigner-semicircle.md)이 준다.

# 연관 문서

## 선수지식

- [소수](primes.md)
- [해석적 연속](analytic-continuation.md)

## 더 알아보기

- [소수 정리](prime-number-theorem.md)
- [Riemann 가설](riemann-hypothesis.md)
- [Bernoulli 수와 von Staudt–Clausen 정리](bernoulli-numbers.md)
- [Eisenstein 급수와 스펙트럼 분해](eisenstein-series.md)
- [Tate 의 논문](tate-thesis.md)

#number_theory #complex_analysis #analysis
