# 다중률 신호처리

# 개요

**다중률 신호처리(multirate signal processing)** 는 수열의 표본화율을 계산 도중에 바꾸는 방법을 다룬다. 1초에 $48000$ 번 잰 소리를 $8000$ 번 잰 전화 음성으로 바꾸려면 값을 여섯 개마다 하나만 남겨야 하는데, 그냥 버리면 높은 소리가 낮은 소리로 바뀌어 섞인다. 다중률 신호처리는 버리기 전에 [FIR 필터](fir-filters.md)(finite impulse response)로 높은 주파수를 지우고, 그 필터를 남길 값에 대해서만 계산하도록 다시 배열한다.

# 직관

수열 $x\lbrack n\rbrack=(-1)^n$ 에서 짝수 번째 값만 남기면 $1,1,1,\dots$ 이다. 주파수 $\pi$ 로 번갈아 흔들리던 수열이 흔들림 없는 상수, 곧 주파수 $0$ 의 수열이 되었다. 값을 둘에 하나만 남기면 주파수가 두 배로 늘어나고, $\pi/2$ 보다 높은 주파수는 $\pi$ 를 넘어 되접힌다. [표본화 정리](sampling-theorem.md)의 되접힘이 수열 안에서 일어난 것이다.

그래서 남기기 전에 두 값의 평균 $\frac12(x\lbrack n\rbrack+x\lbrack n-1\rbrack)$ 을 계산한다. 이 필터는 $(-1)^n$ 을 $0$ 으로 만든다. 평균은 짝수 $n$ 에서만 쓰이므로 홀수 $n$ 에서는 계산하지 않아도 되고, 계산량이 절반이 된다.

남긴 평균 $a\lbrack m\rbrack=\frac12(x\lbrack 2m\rbrack+x\lbrack 2m-1\rbrack)$ 만으로는 $x$ 를 되살릴 수 없다. 차이 $d\lbrack m\rbrack=\frac12(x\lbrack 2m\rbrack-x\lbrack 2m-1\rbrack)$ 도 함께 남기면 $x\lbrack 2m\rbrack=a\lbrack m\rbrack+d\lbrack m\rbrack$, $x\lbrack 2m-1\rbrack=a\lbrack m\rbrack-d\lbrack m\rbrack$ 이다. 수 두 개를 수 두 개로 바꾸었으므로 값의 개수는 그대로이고, $a$ 에는 낮은 주파수가, $d$ 에는 높은 주파수가 담긴다.

# 정의

## 다운샘플링과 업샘플링

정수 $D\ge 2$ 에 대해 $y\lbrack n\rbrack=x\lbrack Dn\rbrack$ 로 두는 연산을 $D$ 배 **다운샘플링(downsampling)** 이라 하고 $\downarrow D$ 로 적는다. 정수 $L\ge 2$ 에 대해

$$
u\lbrack n\rbrack=\begin{cases}x\lbrack n/L\rbrack & L\mid n\cr 0 & \text{그 밖}\end{cases}
$$

로 두는 연산을 $L$ 배 **업샘플링(upsampling)** 이라 하고 $\uparrow L$ 로 적는다. 직관 절에서 짝수 번째 값만 남긴 것이 $\downarrow 2$ 다.

## 데시메이션과 보간

저역통과 필터를 거친 뒤 $\downarrow D$ 하는 것을 **데시메이션(decimation)**, $\uparrow L$ 한 뒤 저역통과 필터를 거치는 것을 **보간(interpolation)** 이라 한다. 두 필터의 차단 주파수는 각각 $\pi/D$, $\pi/L$ 이다. 표본화율을 $L/D$ 배로 바꾸려면 $\uparrow L$, 차단 주파수 $\min(\pi/L,\pi/D)$ 의 저역통과 필터, $\downarrow D$ 를 차례로 적용한다. $48000$ 에서 $8000$ 으로 가는 변환은 $L=1$, $D=6$ 이고, $44100$ 에서 $48000$ 으로 가는 변환은 $L=160$, $D=147$ 이다.

## 다위상 분해

필터 $H(z)=\sum_nh\lbrack n\rbrack z^{-n}$ 와 정수 $D$ 에 대해

$$
H(z)=\sum_{m=0}^{D-1}z^{-m}E_m(z^D),\qquad E_m(z)=\sum_nh\lbrack nD+m\rbrack z^{-n}
$$

를 $H$ 의 **다위상 분해(polyphase decomposition)** 라 하고 $E_m$ 을 다위상 성분이라 한다. 두 값의 평균 $H(z)=\frac12(1+z^{-1})$ 은 $D=2$ 에서 $E_0=E_1=\frac12$ 이다.

## 두 채널 필터 뱅크

입력을 분석 필터(analysis filter) $H_0,H_1$ 에 통과시켜 각각 $\downarrow 2$ 하고, 다시 $\uparrow 2$ 하여 합성 필터(synthesis filter) $F_0,F_1$ 을 거친 뒤 더하는 구조를 **두 채널 필터 뱅크(two-channel filter bank)** 라 한다. 출력이 입력을 지연시키고 상수배한 것 $c\thinspace x\lbrack n-\ell\rbrack$ 이면 **완전 재구성(perfect reconstruction)** 이라 한다. 직관 절의 평균과 차이는 $H_0=\frac12(1+z^{-1})$, $H_1=\frac12(1-z^{-1})$ 인 분석 쪽이다.

# 성질

## 다운샘플링과 업샘플링의 z 변환

[z 변환](z-transform.md)으로 쓰면 $W=e^{-2\pi i/D}$ 에 대해

$$
Y(z)=\frac1D\sum_{k=0}^{D-1}X\bigl(z^{1/D}W^k\bigr),\qquad U(z)=X(z^L)
$$

이다. $D=2$ 이면 $Y(z)=\frac12\bigl(X(z^{1/2})+X(-z^{1/2})\bigr)$ 이고, 둘째 항이 $X$ 를 주파수 $\pi$ 만큼 옮긴 성분이 되접힌 것이다. 주파수 응답으로는 $Y(e^{i\omega})=\frac1D\sum_kX(e^{i(\omega-2\pi k)/D})$ 이므로, $X$ 가 $\lvert\omega\rvert\le\pi/D$ 밖에서 $0$ 이면 되접힌 성분이 서로 겹치지 않는다. 업샘플링은 스펙트럼을 $L$ 배 압축해 $\lbrack -\pi,\pi\rbrack$ 안에 $L$ 개의 사본을 만들고, 보간 필터가 가운데 하나만 남긴다.

## noble 항등식

다음 두 등식을 **noble 항등식(noble identity)** 이라 한다.

- $H(z^D)$ 를 거친 뒤 $\downarrow D$ 하는 것은 $\downarrow D$ 한 뒤 $H(z)$ 를 거치는 것과 같다.
- $\uparrow L$ 한 뒤 $H(z^L)$ 을 거치는 것은 $H(z)$ 를 거친 뒤 $\uparrow L$ 하는 것과 같다.

첫째는 $H(z^D)$ 의 임펄스 응답이 $D$ 의 배수 위치에만 값을 가지므로, 출력의 $Dn$ 번째 값이 입력의 $D$ 의 배수 위치 값만 쓰기 때문이다.

## 다위상 구현

데시메이션 필터 $H$ 를 다위상 분해하고 noble 항등식을 쓰면, 입력을 한 칸씩 늦춘 $D$ 개의 수열을 먼저 $\downarrow D$ 하고 각각 $E_m(z)$ 를 거쳐 더한 것과 같아진다. 모든 필터가 낮은 표본화율에서 돌아가므로, 길이 $M+1$ 인 필터의 출력 하나에 드는 곱셈이 $D(M+1)$ 번에서 $M+1$ 번으로 준다. 직관 절에서 짝수 $n$ 의 평균만 계산한 것이 $D=2$ 인 다위상 구현이다. 보간도 같은 방법으로 $L$ 배를 아낀다.

## 완전 재구성 조건

두 채널 필터 뱅크의 출력은 다음과 같다.

$$
\hat X(z)=\tfrac12\bigl(F_0H_0+F_1H_1\bigr)(z)\thinspace X(z)+\tfrac12\bigl(F_0(z)H_0(-z)+F_1(z)H_1(-z)\bigr)X(-z)
$$

둘째 항이 되접힘이다. $F_0(z)=H_1(-z)$, $F_1(z)=-H_0(-z)$ 로 고르면 둘째 항이 사라진다. 그 위에서 $F_0H_0+F_1H_1=2c\thinspace z^{-\ell}$ 이면 완전 재구성이다.

$H_0=\frac1{\sqrt2}(1+z^{-1})$, $H_1=\frac1{\sqrt2}(1-z^{-1})$ 이면 $F_0=\frac1{\sqrt2}(1+z^{-1})$, $F_1=-\frac1{\sqrt2}(1-z^{-1})$ 이고

$$
F_0H_0+F_1H_1=\tfrac12(1+z^{-1})^2-\tfrac12(1-z^{-1})^2=2z^{-1}
$$

이므로 $\hat X(z)=z^{-1}X(z)$ 다. 이 필터 뱅크를 Haar 필터 뱅크(Haar filter bank)라 한다. 직관 절은 이것을 $\frac1{\sqrt2}$ 대신 $\frac12$ 로 정규화한 것이다.

# 활용

- 표본화율 변환. 녹음 장비마다 다른 표본화율($44100$, $48000$, $96000$) 사이를 $\uparrow L$, 저역통과, $\downarrow D$ 로 옮긴다. $L$ 과 $D$ 가 크면 다위상 구현이 계산량을 $L$ 배 줄인다.
- 부대역 부호화. 음성과 음악의 압축 부호화는 신호를 필터 뱅크로 여러 주파수 대역으로 나누어 각 대역을 낮은 표본화율로 저장하고, 귀에 덜 들리는 대역에 비트를 적게 준다.
- 웨이블릿 변환. 두 채널 필터 뱅크의 저역 쪽 출력에 같은 필터 뱅크를 되풀이해 적용한 것이 이산 [웨이블릿 변환](wavelet-transform.md)이다. Haar 필터 뱅크를 되풀이하면 Haar 웨이블릿 변환이 나온다.
- 과표본화 변환기. 아날로그-디지털 변환기는 신호를 목표보다 훨씬 높은 율로 표본화한 뒤 데시메이션으로 율을 낮춘다. 아날로그 필터는 완만해도 되고, 가파른 차단은 디지털 FIR 필터가 맡는다.

# 연관 문서

## 선수지식

- [표본화 정리](sampling-theorem.md)
- [FIR 필터](fir-filters.md)

## 더 알아보기

- [웨이블릿 변환](wavelet-transform.md)

#signal_processing #analysis #algorithms
