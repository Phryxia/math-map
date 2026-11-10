# Toeplitz 행렬

# 개요

**Toeplitz 행렬(Toeplitz matrix)** 은 왼쪽 위에서 오른쪽 아래로 가는 대각선마다 성분이 같은 [행렬](matrices.md)이다. 수열 $x$ 를 $y\lbrack n\rbrack=x\lbrack n-1\rbrack+2x\lbrack n\rbrack+x\lbrack n+1\rbrack$ 로 고르는 계산을 길이 $n$ 의 구간에서 행렬로 쓰면, 어느 행이나 $1,2,1$ 이 한 칸씩 밀려 놓인 Toeplitz 행렬이 된다. 이런 행렬은 서로 다른 성분이 $2n-1$ 개뿐이어서 곱, 연립방정식의 풀이, 고윳값을 일반 행렬보다 적은 계산으로 얻는다.

# 직관

길이 $3$ 의 구간 밖을 $0$ 으로 두면 위의 계산은

$$
\begin{pmatrix}y_0\cr y_1\cr y_2\end{pmatrix}=\begin{pmatrix}2&1&0\cr 1&2&1\cr 0&1&2\end{pmatrix}\begin{pmatrix}x_0\cr x_1\cr x_2\end{pmatrix}
$$

이다. 이 행렬을 $T$ 라 하자. $T$ 는 [합성곱](convolution.md)의 일부를 잘라 낸 것이라, 성분은 행과 열의 차 $i-j$ 에만 의존한다.

[이산 Fourier 변환](fourier.md)은 순환 합성곱을 성분별 곱으로 바꾼다. $T$ 는 순환이 아니지만 길이를 $5$ 로 늘려 $x$ 뒤에 $0$ 두 개를 붙이고 $(2,1,0,0,1)$ 과 순환 합성곱을 하면, 결과의 앞 세 성분이 $Tx$ 다. 첫 행은 $2x_0+x_1$, 둘째 행은 $x_0+2x_1+x_2$, 셋째 행은 $x_1+2x_2$ 로 맞는다.

같은 계산이 고윳값도 준다. 수열 $e^{ik\theta}$ 를 $1,2,1$ 로 고르면 $(e^{-i\theta}+2+e^{i\theta})e^{ik\theta}$ 가 나오므로 배율은 $a(\theta)=2+2\cos\theta$ 다. $T$ 의 고윳값은 $a$ 를 $\theta=\pi/4,\ 2\pi/4,\ 3\pi/4$ 에서 읽은 $2+\sqrt2,\ 2,\ 2-\sqrt2$ 다. 함수 $a$ 를 $T$ 의 기호라 한다.

# 정의

## Toeplitz 행렬과 기호

복소수 $t_k$ $(k\in\mathbb Z)$ 에 대해 $(i,j)$ 성분이 $t_{i-j}$ 인 $n\times n$ 행렬

$$
T_n=\begin{pmatrix}t_0&t_{-1}&\cdots&t_{-(n-1)}\cr t_1&t_0&\cdots&t_{-(n-2)}\cr \vdots&&\ddots&\vdots\cr t_{n-1}&t_{n-2}&\cdots&t_0\end{pmatrix}
$$

을 **Toeplitz 행렬** 이라 한다. $\sum_k\lvert t_k\rvert\lt\infty$ 일 때

$$
a(\theta)=\sum_{k\in\mathbb Z}t_ke^{ik\theta}
$$

를 $T_n$ 의 **기호(symbol)** 라 하고 $T_n=T_n(a)$ 로 적는다. 직관 절은 $t_0=2$, $t_{\pm1}=1$, 나머지 $t_k=0$ 이고 $a(\theta)=2+2\cos\theta$ 다. $t_{-k}=\overline{t_k}$ 이면 $T_n$ 은 Hermite 행렬(Hermitian matrix)이고 $a$ 는 실숫값이다.

## 순환행렬

$t_{i-j}$ 가 $i-j$ 를 $n$ 으로 나눈 나머지에만 의존하는 Toeplitz 행렬을 **순환행렬(circulant matrix)** 이라 한다. 첫 열 $c=(c_0,\dots,c_{n-1})$ 이 행렬 전체를 정하고, $Cx$ 는 $c$ 와 $x$ 의 순환 합성곱이다. 직관 절의 길이 $5$ 계산은 첫 열이 $(2,1,0,0,1)$ 인 $5\times 5$ 순환행렬의 곱이다.

# 성질

## 순환행렬의 대각화

$F$ 를 DFT 행렬(discrete Fourier transform matrix)이라 하면 모든 $n\times n$ 순환행렬은

$$
C=F^{-1}\thinspace\mathrm{diag}(Fc)\thinspace F
$$

이다. 이산 Fourier 변환의 합성곱 정리를 행렬로 쓴 것이다. 고윳값은 $Fc$ 의 성분이고 고유벡터는 $F$ 의 열이다. 첫 열이 $(2,1,0,0,1)$ 이면 고윳값은 $2+2\cos(2\pi k/5)$, $k=0,\dots,4$ 다.

## 빠른 곱

$n\times n$ Toeplitz 행렬은 첫 열이 $(t_0,t_1,\dots,t_{n-1},t_{-(n-1)},\dots,t_{-1})$ 인 $(2n-1)\times(2n-1)$ 순환행렬의 왼쪽 위 블록이다. $x$ 뒤에 $0$ 을 $n-1$ 개 붙여 이 순환행렬을 곱하고 앞 $n$ 성분을 읽으면 $T_nx$ 다. [고속 Fourier 변환](fft.md) 세 번으로 $O(n\log n)$ 번의 연산이 든다. 일반 행렬의 곱은 $O(n^2)$ 이다.

## Hermite Toeplitz 행렬의 고윳값의 범위

$a$ 가 실숫값이면 $T_n(a)$ 의 모든 고윳값은 $\min a$ 와 $\max a$ 사이에 있다. $x\in\mathbb C^n$ 에 대해 $\hat x(\theta)=\sum_jx_je^{-ij\theta}$ 로 두면

$$
x^\ast T_n(a)x=\frac1{2\pi}\int_{-\pi}^{\pi}a(\theta)\thinspace\lvert\hat x(\theta)\rvert^2d\theta,\qquad x^\ast x=\frac1{2\pi}\int_{-\pi}^{\pi}\lvert\hat x(\theta)\rvert^2d\theta
$$

이므로 [Rayleigh 몫](rayleigh-quotient.md)이 $a$ 의 가중평균이다. 직관 절의 고윳값 $2\pm\sqrt2,\ 2$ 는 $a$ 의 값의 범위 $\lbrack 0,4\rbrack$ 안에 있다. 이 표현에서 $a\ge 0$ 이면 $T_n(a)$ 가 양의 준정부호이고, $a\gt 0$ 이면 양의 정부호다. 정상 과정의 자기상관으로 만든 Toeplitz 행렬은 기호가 전력 스펙트럼 밀도이고 그 밀도가 $0$ 이상이므로 양의 준정부호다.

## 삼중대각 Toeplitz 행렬

$t_0=\alpha$, $t_{\pm1}=\beta$ 이고 나머지가 $0$ 이면 $T_n$ 의 고윳값은

$$
\lambda_j=\alpha+2\beta\cos\frac{j\pi}{n+1},\qquad j=1,\dots,n
$$

이고 고유벡터의 성분은 $\sin(jk\pi/(n+1))$, $k=1,\dots,n$ 이다. 고유벡터를 대입해 $\sin$ 의 덧셈정리를 쓰면 확인된다. 직관 절은 $\alpha=2$, $\beta=1$, $n=3$ 이다. 고윳값이 기호 $a(\theta)=\alpha+2\beta\cos\theta$ 를 $\theta=j\pi/(n+1)$ 에서 읽은 값이다.

## Szegő 극한 정리

Szegő 정리(Szegő's theorem). $a$ 가 실숫값 [연속함수](continuity.md)이고 $\lambda^{(n)}\_1,\dots,\lambda^{(n)}\_n$ 이 $T_n(a)$ 의 고윳값이면, $\lbrack\min a,\max a\rbrack$ 위의 연속함수 $G$ 에 대해

$$
\lim_{n\to\infty}\frac1n\sum_{j=1}^{n}G\bigl(\lambda^{(n)}\_j\bigr)=\frac1{2\pi}\int_{-\pi}^{\pi}G\bigl(a(\theta)\bigr)\thinspace d\theta
$$

이다[^1]. 고윳값들이 기호의 값과 같은 분포로 퍼진다. 삼중대각 경우에는 고윳값이 기호를 등간격 점에서 읽은 값이므로 좌변이 Riemann 합이 되어 바로 확인된다. $a\gt 0$ 이고 $G=\log$ 이면

$$
\lim_{n\to\infty}\frac1n\log\det T_n(a)=\frac1{2\pi}\int_{-\pi}^{\pi}\log a(\theta)\thinspace d\theta
$$

다. 직관 절의 행렬을 $n\times n$ 으로 늘리면 $\det T_n=n+1$ 이라 좌변이 $0$ 이고, $2+2\cos\theta=\lvert 1+e^{i\theta}\rvert^2$ 의 로그 적분도 $0$ 이다.

## 연립방정식의 풀이

Hermite 양의 정부호 Toeplitz 연립방정식 $T_nx=b$ 는 크기 $1,2,\dots,n$ 의 왼쪽 위 블록의 해를 차례로 늘려 $O(n^2)$ 번의 연산으로 풀린다. 행렬을 뒤집어 읽어도 같은 행렬이라는 대칭을 쓰며, 이것이 [Levinson–Durbin 알고리즘](levinson-durbin-algorithm.md)이다. 일반 행렬의 소거법은 $O(n^3)$ 이다.

# 활용

- [Wiener 필터](wiener-filter.md)의 Wiener–Hopf 방정식과 선형 예측의 Yule–Walker 방정식(Yule–Walker equations)의 계수 행렬이 자기상관의 Toeplitz 행렬이다.
- [Slepian 수열](slepian-sequences.md)의 집중 행렬은 기호가 구간 $\lbrack -W,W\rbrack$ 의 지시함수인 Toeplitz 행렬이다. 기호가 $1$ 과 $0$ 두 값만 가지므로, Szegő 정리를 유계 기호로 넓힌 판본에서 고윳값이 거의 다 $1$ 과 $0$ 근처에 모인다.
- [Fredholm 작용소](fredholm-operators.md)의 Toeplitz 작용소는 $n\to\infty$ 의 판본이다. 기호가 $0$ 이 아니면 Fredholm 이고 지표가 기호의 회전수에 $-1$ 을 곱한 값이다.
- [Borel–Padé 재합산](borel-pade.md)의 Padé 근사의 분모 계수는 Taylor 계수로 만든 Toeplitz 연립방정식의 해다.

[^1]: U. Grenander, G. Szegő, *Toeplitz Forms and Their Applications*, University of California Press, 1958, 5 장.

# 연관 문서

## 선수지식

- [행렬](matrices.md)
- [이산 Fourier 변환](fourier.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #signal_processing #functional_analysis #algorithms
