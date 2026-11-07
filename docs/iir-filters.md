# IIR 필터

# 개요

**IIR 필터(infinite impulse response filter)** 는 입력값뿐 아니라 앞서 낸 출력값에도 가중치를 곱해 더해 다음 출력을 내는 디지털 필터다. 측정값의 평균을 내되 최근 값에 큰 가중치를, 오래된 값에 작은 가중치를 주고 과거 전체를 반영하려면, [FIR 필터](fir-filters.md)(finite impulse response)로는 과거 값의 수만큼 곱셈을 해야 한다. IIR 필터는 바로 앞의 출력 하나를 다시 입력처럼 써서 같은 평균을 곱셈 두 번으로 낸다.

# 직관

측정값 $x\lbrack n\rbrack$ 에 가중치 $1, a, a^2, \dots$ $(0\lt a\lt 1)$ 를 거꾸로 붙여 평균을 낸다. 가중치의 합이 $1/(1-a)$ 이므로 다음과 같다.

$$
y\lbrack n\rbrack=(1-a)\sum_{k\ge 0}a^kx\lbrack n-k\rbrack
$$

$a=0.9$ 이면 $50$ 칸 전 값의 가중치가 $0.1\cdot 0.9^{50}\approx 0.0005$ 다. 이 합을 FIR 필터로 계산하면 가중치가 붙은 칸마다 곱셈을 한다.

$y\lbrack n\rbrack$ 에서 $a\thinspace y\lbrack n-1\rbrack$ 을 빼면 $k\ge 1$ 항이 모두 지워지고 $(1-a)x\lbrack n\rbrack$ 만 남는다. 따라서 다음 식으로 같은 $y$ 가 나온다.

$$
y\lbrack n\rbrack=a\thinspace y\lbrack n-1\rbrack+(1-a)\thinspace x\lbrack n\rbrack
$$

출력 하나에 곱셈 두 번이 들고 저장할 값은 $y\lbrack n-1\rbrack$ 하나다. 입력이 $n=0$ 에서만 $1$ 이면 출력은 $(1-a)a^n$ 으로 모든 $n\ge 0$ 에서 $0$ 이 아니다. 같은 식에서 $a=1.1$ 로 잡으면 출력 $-0.1\cdot 1.1^n$ 이 한없이 커진다.

# 정의

## IIR 필터

IIR 필터는 다음 점화식으로 출력을 정하는 인과 선형 시불변 시스템(linear time-invariant system)이다. 입력이 어느 시점 이전에 $0$ 이면 출력도 그 시점 이전에 $0$ 이라고 둔다.

$$
y\lbrack n\rbrack=\sum_{k=0}^{M}b_kx\lbrack n-k\rbrack-\sum_{k=1}^{N}a_ky\lbrack n-k\rbrack
$$

$a_k$ 를 되먹임 계수(feedback coefficient), $b_k$ 를 앞먹임 계수(feedforward coefficient)라 하고, $\max(M,N)$ 을 차수라 한다. 직관 절의 평균은 $N=1$, $a_1=-a$, $M=0$, $b_0=1-a$ 이다.

## 전달함수와 극

점화식의 양변에 [z 변환](z-transform.md)을 적용하면 전달함수는 $z^{-1}$ 의 유리함수다.

$$
H(z)=\frac{B(z)}{A(z)}=\frac{\sum_{k=0}^{M}b_kz^{-k}}{1+\sum_{k=1}^{N}a_kz^{-k}}
$$

약분한 뒤 분모가 $0$ 이 되는 $z$ 를 필터의 **극(pole)** 이라 한다. 분모가 상수가 아니면 임펄스 응답은 무한히 많은 $n$ 에서 $0$ 이 아니고, 이것이 무한 임펄스 응답(infinite impulse response)이라는 이름의 뜻이다. 직관 절의 평균은 $H(z)=(1-a)/(1-az^{-1})$ 이고 극은 $z=a$ 다.

## 2차 구간

$M=N=2$ 인 IIR 필터를 **2차 구간(biquad section)** 이라 한다. 극 $re^{\pm i\theta}$ $(0\lt r\lt 1)$ 를 갖는 2차 구간의 분모는 $1-2r\cos\theta\thinspace z^{-1}+r^2z^{-2}$ 이다.

# 성질

## 안정성

인과 IIR 필터가 BIBO 안정(bounded-input bounded-output stable)일 필요충분조건은 모든 극이 단위원 안에 있는 것이다. 극 $p$ 마다 임펄스 응답에 $p^n$ 꼴의 항이 생기고, $\lvert p\rvert\ge 1$ 이면 이 항의 절댓값의 합이 발산한다. 직관 절에서 $a=0.9$ 는 안정이고 $a=1.1$ 은 불안정이다.

## 주파수 응답

직관 절의 평균은 다음 주파수 응답을 갖는다.

$$
\lvert H(e^{i\omega})\rvert=\frac{1-a}{\lvert 1-ae^{-i\omega}\rvert}
$$

$\omega=0$ 에서 $1$ 이고 $\omega=\pi$ 에서 $(1-a)/(1+a)$ 다. $a=0.9$ 이면 번갈아 붙는 흔들림이 약 $0.053$ 배로 줄어든다. 극이 단위원에 가까울수록 그 극의 각도 근처 주파수가 크게 통과한다. 2차 구간의 극 $re^{\pm i\theta}$ 에서 $r$ 이 $1$ 에 가까우면 $\omega=\theta$ 근처만 통과하는 공진기(resonator)가 된다.

## 위상

실수 계수의 인과 안정 필터가 선형 위상이면 그 필터는 FIR 필터다[^1]. 선형 위상은 임펄스 응답이 어느 점을 중심으로 대칭이거나 반대칭이라는 조건과 같고, $n\lt 0$ 에서 $0$ 인 응답이 대칭이면 반대쪽 끝도 유한해야 하기 때문이다. 같은 경계의 날카로움을 얻는 데 IIR 필터는 FIR 필터보다 적은 계수를 쓰고, 대신 주파수마다 지연이 다르다.

## 쌍일차 변환

연속시간 필터는 [Laplace 변환](laplace-transform.md)의 유리함수 $H_a(s)$ 로 설계되어 있다. **쌍일차 변환(bilinear transform)** 은 다음 치환으로 $H_a$ 를 디지털 필터 $H(z)=H_a(s)$ 로 옮긴다.

$$
s=\frac{2}{T}\cdot\frac{1-z^{-1}}{1+z^{-1}}
$$

이 치환은 왼쪽 반평면 $\mathrm{Re}\thinspace s\lt 0$ 을 단위원 안으로 보내므로 안정한 연속시간 필터가 안정한 IIR 필터로 간다. 허수축은 단위원으로 가고 주파수는 $\Omega=\frac2T\tan(\omega/2)$ 로 대응한다. [Butterworth 필터](butterworth-filter.md) $\lvert H_a(i\Omega)\rvert^2=1/\bigl(1+(\Omega/\Omega_c)^{2N}\bigr)$ 를 이 변환으로 옮기는 것이 표준적인 IIR 저역통과 설계다.

## 계수 양자화

계수를 유한한 자릿수로 반올림하면 극이 움직인다. 차수 $N$ 인 분모를 한 다항식으로 구현하면, 서로 가까운 극들은 계수의 작은 변화에도 크게 움직이고 단위원 밖으로 나갈 수 있다. 그래서 분모를 2차 인수로 나누고 2차 구간을 직렬로 이어 구현한다.

# 활용

- 지수평활. 통계의 지수평활(exponential smoothing)은 직관 절의 1차 IIR 필터다. 무작위 보행에 측정 잡음이 붙은 모형에서 [Kalman 필터](kalman-filter.md)의 정상 상태가 이 필터다.
- 선형 점화식. [Fibonacci 수](fibonacci-numbers.md)의 점화식 $F_n=F_{n-1}+F_{n-2}$ 는 $a_1=a_2=-1$ 인 IIR 필터에 단위 임펄스를 넣은 것이고, 극 $(1\pm\sqrt5)/2$ 가운데 하나가 단위원 밖에 있어 출력이 커진다.
- 오디오. 등화기(equalizer), 공진기, 잔향 처리를 2차 구간의 직렬 연결로 구현한다.
- 제어. 디지털 제어기는 연속시간 제어기를 쌍일차 변환으로 옮긴 IIR 필터로 구현한다.

[^1]: A. V. Oppenheim, R. W. Schafer, *Discrete-Time Signal Processing*, 3rd ed., Pearson (2010), 5.7절.

# 연관 문서

## 선수지식

- [FIR 필터](fir-filters.md)

## 더 알아보기

- [Butterworth 필터](butterworth-filter.md)

#signal_processing #analysis #statistics
