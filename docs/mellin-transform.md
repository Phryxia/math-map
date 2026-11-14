# Mellin 변환

# 개요

**Mellin 변환(Mellin transform)** 은 함수에 $x^{s-1}$ 을 곱해 $(0,\infty)$ 에서 적분하여, 함수를 변수 $s$ 의 함수로 바꾸는 변환이다. $x$ 가 $0$ 에 가까울 때 $e^{-x}+e^{-2x}+e^{-3x}+\cdots$ 는 항마다 $1$ 에 가까워 커지지만, 어떤 거듭제곱에 어떤 계수가 붙어 커지는지는 합에서 바로 보이지 않는다. 이 합의 Mellin 변환은 $\Gamma(s)\zeta(s)$ 이고, 그 극점 $s=1,0,-1$ 의 유수를 모으면 $1/x-1/2+x/12$ 가 나온다.

# 직관

다음 함수가 $x\to 0$ 에서 어떻게 커지는지 알고 싶다.

$$
f(x)=e^{-x}+e^{-2x}+e^{-3x}+\cdots=\frac1{e^{x}-1}
$$

양변에 $x^{s-1}$ 을 곱해 $0$ 부터 $\infty$ 까지 적분한다. $x=t/n$ 으로 바꾸면 $\int_0^\infty e^{-nx}x^{s-1}dx=n^{-s}\Gamma(s)$ 이므로, 항별로 더하면 $\mathrm{Re}\thinspace s\gt 1$ 에서 다음이 나온다.

$$
\int_0^{\infty}\frac{x^{s-1}}{e^{x}-1}\thinspace dx=\Gamma(s)\sum_{n\ge 1}n^{-s}=\Gamma(s)\zeta(s)
$$

$\Gamma(s)\zeta(s)$ 는 $s=1$ 에서 $\zeta$ 의 극점으로 유수 $1$ 을, $s=0$ 에서 [감마 함수](gamma-function.md)의 극점으로 유수 $\zeta(0)=-\tfrac12$ 를, $s=-1$ 에서 유수 $-\zeta(-1)=\tfrac1{12}$ 를 갖는다. 변환에서 $f$ 를 다시 얻는 공식 $f(x)=\frac1{2\pi i}\int\Gamma(s)\zeta(s)x^{-s}ds$ 의 경로를 왼쪽으로 밀면 극점 $s_0$ 마다 유수에 $x^{-s_0}$ 을 곱한 항이 나오고, 셋을 더하면 $1/x-1/2+x/12$ 다.

극점 하나가 $f$ 의 전개 항 하나를 준다. 극점의 위치가 $x$ 의 지수이고 유수가 계수다.

# 정의

## 변환과 기본 띠

$(0,\infty)$ 에서 국소적분가능한 $f$ 의 Mellin 변환은 다음 함수다.

$$
\tilde f(s)=\int_0^{\infty}f(x)\thinspace x^{s-1}\thinspace dx
$$

적분이 절대수렴하는 띠 $a\lt\mathrm{Re}\thinspace s\lt b$ 를 **기본 띠(fundamental strip)** 라 한다. $x\to0$ 에서 $f=O(x^{-a})$ 이고 $x\to\infty$ 에서 $f=O(x^{-b})$ 이면 적분이 $a\lt\mathrm{Re}\thinspace s\lt b$ 에서 수렴한다.

기본 예는 다음 둘이다. $e^{-x}$ 는 $x\to 0$ 에서 유계이고 $x\to\infty$ 에서 어떤 거듭제곱보다 빨리 줄므로 기본 띠가 $\mathrm{Re}\thinspace s\gt 0$ 이다. 직관 절의 $1/(e^x-1)$ 은 $x\to 0$ 에서 $1/x$ 처럼 커지므로 기본 띠가 $\mathrm{Re}\thinspace s\gt 1$ 이다.

$$
\int_0^{\infty}e^{-x}x^{s-1}dx=\Gamma(s)\quad(0\lt\mathrm{Re}\thinspace s),
\qquad
\int_0^{\infty}\frac{x^{s-1}}{e^{x}-1}dx=\Gamma(s)\zeta(s)\quad(1\lt\mathrm{Re}\thinspace s)
$$

## 조화합

같은 함수를 여러 스케일로 겹쳐 놓은 합을 **조화합(harmonic sum)** 이라 한다.

$$
F(x)=\sum_k\lambda_k\thinspace f(\mu_kx)
\quad\Longrightarrow\quad
\tilde F(s)=\Big(\sum_k\lambda_k\mu_k^{-s}\Big)\tilde f(s)
$$

변환이 [Dirichlet 급수](dirichlet-series.md)와 기본 변환의 곱으로 갈라진다. 직관 절의 합은 $f(x)=e^{-x}$, $\lambda_k=1$, $\mu_k=k$ 인 조화합이고, 변환이 $\zeta(s)\Gamma(s)$ 다.

# 성질

## 정칙성과 역변환

$\tilde f$ 는 기본 띠에서 정칙이다. 역변환은 $a\lt c\lt b$ 인 임의의 $c$ 에서 다음이고 값은 $c$ 에 의존하지 않는다.

$$
f(x)=\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}\tilde f(s)\thinspace x^{-s}\thinspace ds
$$

## Fourier 변환과의 관계

$x=e^{u}$ 와 $s=c+it$ 로 두면 적분이 다음이 된다.

$$
\tilde f(c+it)=\int_{-\infty}^{\infty}f(e^{u})e^{cu}\thinspace e^{itu}\thinspace du
$$

$\tilde f$ 는 $f(e^{u})e^{cu}$ 의 [Fourier 변환](fourier-transform.md)이다. Mellin 변환의 반전 공식과 곱셈 정리는 덧셈군 $\mathbb R$ 위의 Fourier 이론을 곱셈군 $(0,\infty)$ 로 옮긴 것이다. [Poisson 합](poisson-summation.md)이 덧셈 [격자](lattices.md) $\mathbb Z$ 에 대해 성립하는 것처럼, 조화합의 공식은 곱셈적 스케일 $\mu_k$ 에 대해 성립한다.

## 윤곽 이동과 점근전개

$\tilde f$ 가 띠 바깥으로 유리형으로 이어지고 수직선 위에서 충분히 빨리 감쇠하면 윤곽을 왼쪽으로 $\mathrm{Re}s=d$ 까지 밀어 다음을 얻는다.

$$
f(x)=\sum_{d\lt\mathrm{Re}s_0\lt c}\mathop{\mathrm{Res}}\_{s=s_0}\big(\tilde f(s)x^{-s}\big)+O\negthinspace\left(x^{-d}\right)
$$

직관 절의 계산이 이 공식이다. [해석적 연속](analytic-continuation.md)으로 기본 띠 바깥에서 만나는 극점마다 같은 대응이 성립한다. 차수 $m$ 의 극점에서 나오는 항은 $x^{-s_0}$ 곱하기 $\log x$ 의 $m-1$ 차 다항식이다. 극점이 허축 위에 있으면 $x^{-it}=e^{-it\log x}$ 라 $\log x$ 에 대한 진동항이 나오고, 알고리즘 분석의 작은 주기 변동이 이 항이다.

## 곱셈 정리

$$
\int_0^{\infty}f(x)g(x)\frac{dx}x=\frac1{2\pi i}\int_{(c)}\tilde f(s)\thinspace\tilde g(1-s)\thinspace ds
$$

Fourier 변환의 Parseval 등식(Parseval's identity)에 해당한다. $dx/x$ 가 곱셈군의 [Haar 측도](haar-measure.md)이므로 이 꼴이 나온다. $\zeta$ 의 적률을 계산할 때 쓴다.

## 2 의 거듭제곱으로 겹친 합

$$
S(x)=\sum_{k\ge0}e^{-x2^{k}}
\quad\Longrightarrow\quad
\tilde S(s)=\frac{\Gamma(s)}{1-2^{-s}}
$$

극점은 세 종류다. $s=0$ 에서 $\Gamma$ 의 극점과 분모의 영점이 겹친 2 차 극점, $s=-n$ 에서 $\Gamma$ 의 극점, $k\ne0$ 인 $s=\chi_k=2\pi ik/\log2$ 에서 분모가 만드는 단순극점이다. 유수를 모으면 $x\to0$ 에서 다음이 된다.

$$
S(x)=\frac{\log(1/x)}{\log2}+\frac12-\frac{\gamma}{\log2}
+\sum_{n\ge1}\frac{(-1)^{n}}{n!\thinspace(1-2^{n})}x^{n}
+\frac1{\log2}\sum_{k\ne0}\Gamma(\chi_k)x^{-\chi_k}
$$

마지막 합이 $\log_2x$ 에 대해 주기 1 로 진동하는 항이고 진폭은 다음이다.

$$
\frac2{\log2}\left\vert\Gamma\negthinspace\left(\frac{2\pi i}{\log2}\right)\right\vert=\frac{2}{\log 2}\sqrt{\frac{\pi}{y\sinh\pi y}}\Big\vert\_{y=2\pi/\log2}=1.573\times10^{-6}
$$

주도항 $\log_2(1/x)$ 에 백만 분의 일 수준의 주기 떨림이 더해진다.

## Perron 공식

Perron 공식(Perron's formula). $D(s)=\sum a_nn^{-s}$ 가 $\mathrm{Re}s\gt\sigma_a$ 에서 절대수렴하고 $c\gt\sigma_a$ 면 다음이 성립한다.

$$
{\sum_{n\le x}}'\thinspace a_n=\frac1{2\pi i}\int_{(c)}D(s)\frac{x^{s}}{s}ds
$$

핵이 되는 것은 다음 적분이다.

$$
\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}\frac{y^{s}}{s}ds=
\begin{cases}1,&y\gt 1\cr \tfrac12,&y=1\cr 0,&0\lt y\lt 1\end{cases}
$$

$y=x/n$ 을 넣고 $n$ 에 대해 더하면 위 공식이 된다. $n\le x$ 라는 셈의 조건이 윤곽적분으로 바뀐다. 프라임은 $n=x$ 항을 절반만 센다는 뜻이다. 실제 계산에서는 적분을 $\vert t\vert\le T$ 로 자른 유효판을 쓰고 잘라낸 꼬리를 명시적 오차항으로 평가한다.

# 활용

## 소수 정리의 증명

[소수 정리](prime-number-theorem.md)는 $-\zeta'(s)/\zeta(s)=\sum\Lambda(n)n^{-s}$ 에 Perron 공식을 적용해 증명한다. 적용하면 다음이 된다.

$$
\psi(x)=\sum_{n\le x}\Lambda(n)=\frac1{2\pi i}\int_{(c)}\left(-\frac{\zeta'(s)}{\zeta(s)}\right)\frac{x^{s}}{s}ds
$$

윤곽을 왼쪽으로 밀면 $s=1$ 의 극점이 유수 $x$ 를 주고 $\zeta$ 의 비자명 영점 $\rho$ 마다 $-x^{\rho}/\rho$ 가 나온다.

$$
\psi(x)=x-\sum_{\rho}\frac{x^{\rho}}{\rho}-\log2\pi-\tfrac12\log(1-x^{-2})
$$

영점의 실수부가 오차항의 크기를 정한다. $\mathrm{Re}\rho\lt 1$ 을 보이는 것이 소수 정리이고, $\mathrm{Re}\rho=\tfrac12$ 이면 오차가 $O(x^{1/2+\varepsilon})$ 이다.

## 알고리즘 분석

이진 [트라이](tries.md)의 평균 깊이, 자릿수 기반 자료구조의 비용, 해시의 충돌 횟수처럼 크기가 2 배씩 갈라지는 구조의 평균 비용은 조화합으로 쓰인다. 그 Mellin 변환에 $\chi_k=2\pi ik/\log2$ 극점이 생기고, 결과가 $\log_2n$ 의 주요항에 작은 주기 변동이 더해진 형태가 된다. 실험값의 톱니 무늬가 이 항이다.

## 특수함수의 점근

$\Gamma$ , [Bessel 함수](bessel-functions.md), 초기하함수의 점근전개를 얻는 표준 절차가 Mellin–Barnes 표현(Mellin–Barnes representation)이다. 피적분함수를 감마 함수의 비로 쓰고 윤곽을 밀어 극점의 유수로 전개를 얻는다. [Laplace 방법](laplace-method.md)은 같은 전개를 안장점에서 얻는다. 지수에 큰 매개변수가 곱해져 있으면 안장점이, 거듭제곱 꼴의 전개가 필요하면 Mellin 이 편하다.

## 함수방정식

$\theta$ 함수의 변환식에 Mellin 변환을 적용하면 $\zeta$ 의 함수방정식이 나온다. 거꾸로 Mellin 변환이 띠에서 정칙이고 양쪽 끝 거동이 대칭이면 함수방정식이 따라온다. 같은 계산을 아델(adele) 위에서 한 것이 [Tate 의 zeta 적분](tate-zeta-integral.md)이며, 거기서는 각 소수 자리마다 국소 Mellin 변환을 하고 전부 곱한다. 감마 인자가 무한대 자리의 Mellin 변환이다.[^1]

[^1]: 표준 참고는 P. Flajolet, X. Gourdon, P. Dumas, *Mellin transforms and asymptotics: harmonic sums*, Theoret. Comput. Sci. 144 (1995) 와 H. Iwaniec, E. Kowalski, *Analytic Number Theory* 5 장. Perron 공식의 유효판과 오차항은 H. Montgomery, R. Vaughan, *Multiplicative Number Theory I* 5 장에 정리되어 있다.

# 연관 문서

## 선수지식

- [감마 함수](gamma-function.md)
- [Poisson 합 공식](poisson-summation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #number_theory #computation
