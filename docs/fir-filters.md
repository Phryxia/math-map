# FIR 필터

# 개요

**FIR 필터(finite impulse response filter)** 는 입력 수열의 최근 값 유한 개에 고정된 가중치를 곱해 더한 값을 출력하는 디지털 필터다. 온도를 일정한 간격으로 재는데 측정값이 한 번은 높게, 한 번은 낮게 번갈아 흔들리면, 흔들림은 지우고 온도의 느린 변화만 남기고 싶다. FIR 필터는 지우려는 흔들림의 주파수에서 [z 변환](z-transform.md)의 전달함수가 $0$ 이 되도록 가중치를 골라 이 일을 한다.

# 직관

측정값이 $x\lbrack n\rbrack=s+e(-1)^n$ 이다. $s$ 는 진짜 온도이고 $e$ 는 번갈아 붙는 오차다. 연속한 두 값을 평균하면 $\frac12 x\lbrack n\rbrack+\frac12 x\lbrack n-1\rbrack=s$ 이고 오차가 사라진다. 두 값의 평균은 전달함수가 $\frac12(1+z^{-1})$ 인 필터이고, 수열 $(-1)^n$ 은 주파수 $\omega=\pi$ 의 수열이다. $z=e^{i\pi}=-1$ 에서 이 전달함수가 $0$ 이므로 오차가 지워진다.

오차가 $1,0,-1,0,1,0,\dots$ 처럼 네 칸 주기로 붙으면 두 값의 평균으로는 지워지지 않는다. 이 수열은 $\omega=\pi/2$ 의 수열 $e^{i\pi n/2}$ 과 $e^{-i\pi n/2}$ 의 평균이므로, $z=\pm i$ 에서 $0$ 인 인수 $1+z^{-2}$ 를 곱한다. 두 오차를 모두 지우는 필터의 전달함수는 다음과 같다.

$$
H(z)=\tfrac14(1+z^{-1})(1+z^{-2})=\tfrac14(1+z^{-1}+z^{-2}+z^{-3})
$$

이 필터는 연속한 네 값의 평균이다. 온도가 $s\lbrack n\rbrack=n$ 처럼 천천히 오르면 출력은 $\frac14(n+(n-1)+(n-2)+(n-3))=n-\frac32$ 이다. 온도의 변화는 남고 한 칸 반 늦게 나온다.

# 정의

## FIR 필터

FIR 필터는 다음 식으로 출력을 정하는 선형 시불변 시스템(linear time-invariant system)이다. $M$ 을 **차수(order)**, $b_0,\dots,b_M$ 을 **계수(coefficient)** 또는 탭(tap)이라 한다.

$$
y\lbrack n\rbrack=\sum_{k=0}^{M}b_k\thinspace x\lbrack n-k\rbrack
$$

임펄스 응답은 $0\le n\le M$ 에서 $h\lbrack n\rbrack=b_n$ 이고 그 밖에서 $0$ 이다. 임펄스 응답이 유한 개의 항에서만 $0$ 이 아니어서 유한 임펄스 응답(finite impulse response)이라는 이름이 붙는다. 직관 절의 네 값 평균은 $M=3$, $b_0=b_1=b_2=b_3=\frac14$ 이다.

## 전달함수와 영점

FIR 필터의 전달함수는 $z^{-1}$ 의 다항식이다.

$$
H(z)=\sum_{k=0}^{M}b_kz^{-k}=b_0\prod_{j=1}^{M}(1-z_jz^{-1})\qquad(b_0\ne 0)
$$

$H(z_j)=0$ 인 $z_j$ 를 필터의 **영점(zero)** 이라 한다. 네 값 평균의 영점은 $-1, i, -i$ 이고, 각각 주파수 $\pi, \pi/2, -\pi/2$ 의 수열을 지운다.

## 선형 위상

계수가 $b_k=b_{M-k}$ 를 만족하면 필터가 **대칭(symmetric)** 이라 한다. 주파수 응답이 실수값 함수 $A(\omega)$ 에 대해 $H(e^{i\omega})=e^{-i\omega M/2}A(\omega)$ 꼴이면 필터가 **선형 위상(linear phase)** 이라 하고, $M/2$ 를 **군지연(group delay)** 이라 한다. 네 값 평균은 대칭이고 군지연은 $3/2$ 이며, 직관 절의 출력 $n-\frac32$ 에서 이 지연이 보인다.

# 성질

## 안정성

FIR 필터는 항상 BIBO 안정(bounded-input bounded-output stable)이다. $\sum_n\lvert h\lbrack n\rbrack\rvert=\sum_k\lvert b_k\rvert$ 가 유한하기 때문이다. $H(z)$ 의 극은 모두 $z=0$ 에 있고 수렴 영역(region of convergence, ROC)은 $z\ne 0$ 전체다.

## 대칭 계수와 선형 위상

대칭 FIR 필터는 선형 위상이다. $k$ 항과 $M-k$ 항을 묶으면 다음이 나온다.

$$
b_k\left(e^{-i\omega k}+e^{-i\omega(M-k)}\right)=2b_k\thinspace e^{-i\omega M/2}\cos\bigl(\omega(\tfrac M2-k)\bigr)
$$

모든 쌍에 공통 인수 $e^{-i\omega M/2}$ 가 붙고 나머지는 실수다. 선형 위상이면 모든 주파수의 수열이 같은 칸 수만큼 늦어지므로, 통과하는 성분들의 모양이 서로 어긋나지 않는다.

대칭 필터는 $H(z)=z^{-M}H(z^{-1})$ 을 만족한다. 따라서 $z_j$ 가 영점이면 $1/z_j$ 도 영점이고, 단위원 밖의 영점은 단위원 안의 영점과 짝을 이룬다.

## 이동평균의 주파수 응답

길이 $L$ 의 이동평균 $b_k=1/L$ $(0\le k\le L-1)$ 은 등비급수의 합으로 다음 주파수 응답을 갖는다.

$$
\lvert H(e^{i\omega})\rvert=\left\lvert\frac{\sin(L\omega/2)}{L\sin(\omega/2)}\right\rvert
$$

$L=4$ 이면 영점은 $\omega=\pm\pi/2, \pi$ 이고 직관 절과 같다. 영점 사이의 주파수는 완전히 지워지지 않고, 가장 큰 곁봉우리(side lobe)는 $\omega\approx 3\pi/4$ 근처에서 약 $0.27$ 이다.

## 창 방법

$\lvert\omega\rvert\le\omega_c$ 의 주파수만 통과시키는 이상적 저역통과 필터(ideal low-pass filter)의 임펄스 응답은 다음과 같다.

$$
h_d\lbrack n\rbrack=\frac{\sin(\omega_cn)}{\pi n},\qquad h_d\lbrack 0\rbrack=\frac{\omega_c}{\pi}
$$

$h_d$ 는 $\lbrack -\omega_c,\omega_c\rbrack$ 의 지시함수에 이산시간 [Fourier 변환](fourier-transform.md)의 역변환을 적용한 것이다. 이 응답은 모든 $n\in\mathbb Z$ 에서 $0$ 이 아니므로 FIR 필터가 아니다. **창 방법(window method)** 은 $\lvert n\rvert\le M/2$ 만 남기고, 창함수(window function) $w$ 를 곱하고, $M/2$ 칸 늦춰 $b_k=w\lbrack k\rbrack\thinspace h_d\lbrack k-M/2\rbrack$ 로 둔다. 결과는 대칭이므로 선형 위상이다.

창 없이 자르기만 하면 통과대역의 경계 근처에서 주파수 응답이 약 9% 넘쳤다가 출렁인다. 이 넘침은 $M$ 을 늘려도 줄지 않고 출렁임의 폭만 좁아진다. Hamming 창 $w\lbrack k\rbrack=0.54-0.46\cos(2\pi k/M)$ 처럼 양 끝에서 $0$ 쪽으로 줄어드는 창을 곱하면 출렁임이 작아지고 대신 경계의 기울기가 완만해진다.

## 최적 설계

통과대역과 저지대역에서 원하는 응답과의 최대 오차를 가장 작게 하는 대칭 FIR 필터는 오차가 같은 크기로 부호를 번갈아 바꾸는 점이 일정 개수 이상인 것으로 특징지어진다. 이 특징을 써서 계수를 반복으로 찾는 방법이 **Parks–McClellan 알고리즘(Parks–McClellan algorithm)** 이다[^1]. $A(\omega)$ 는 $\cos\omega$ 의 다항식이므로, 이 문제는 [Chebyshev 다항식](chebyshev-polynomials.md)이 푸는 최소 최대 오차 근사 문제와 같은 꼴이다.

## 계산량

출력 하나에 곱셈이 $M+1$ 번 든다. 길이 $N$ 의 입력 블록과 계수의 합성곱을 [고속 Fourier 변환](fft.md)으로 계산하면 블록당 $O((N+M)\log(N+M))$ 번이다. 입력을 블록으로 나눠 각 블록의 합성곱 결과를 겹쳐 더하는 방법을 겹쳐 더하기(overlap-add)라 한다.

# 활용

- 표본화율 낮추기. 수열을 $D$ 칸마다 하나씩 남기기 전에 $\lvert\omega\rvert\gt \pi/D$ 의 성분을 FIR 저역통과 필터로 지운다. 지우지 않으면 [표본화 정리](sampling-theorem.md)의 되접힘이 수열 안에서 일어난다.
- 차분. $b=(1,-1)$ 인 필터 $y\lbrack n\rbrack=x\lbrack n\rbrack-x\lbrack n-1\rbrack$ 은 미분의 이산판이고 영점은 $z=1$ 이다. 상수 성분을 지우고 빠른 변화를 남긴다.
- 이동평균. 통계에서 시계열의 추세를 뽑는 이동평균은 계수가 모두 같은 FIR 필터다.
- 오디오와 영상. 선형 위상이 필요한 음향 등화(equalization)와 영상의 흐리기·윤곽 강조가 2차원 FIR 필터다.

[^1]: T. W. Parks, J. H. McClellan, "Chebyshev approximation for nonrecursive digital filters with linear phase", *IEEE Transactions on Circuit Theory* 19 (1972), 189–194.

# 연관 문서

## 선수지식

- [z 변환](z-transform.md)

## 더 알아보기

- [IIR 필터](iir-filters.md)
- [Wiener 필터](wiener-filter.md)
- [다중률 신호처리](multirate-signal-processing.md)

#signal_processing #analysis #algorithms
