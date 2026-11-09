# 이산 Fourier 변환

# 개요

**이산 Fourier 변환(discrete Fourier transform, DFT)** 은 일정한 간격으로 잰 값들을 여러 진동수의 파동의 합으로 다시 적는 변환이다. 1초에 $8$ 번 잰 소리 값 $8$ 개에 어떤 높이의 소리가 섞여 있는지 알려면, 값들을 진동수 $0$ 부터 $7$ 까지의 파동 $8$ 개의 계수로 바꿔야 한다. 이산 Fourier 변환은 이 계수를 값들과 단위근 거듭제곱의 곱의 합으로 계산하고, 순환 [합성곱](convolution.md)을 계수끼리의 곱으로 바꾼다.

# 직관

길이 $N$ 의 배열을 한 칸 순환 이동시키는 [선형사상](linear-maps.md)을 $S$ 라 하자. 표준 기저에서 $S$ 의 [행렬](matrices.md)은 성분을 섞지만, $x[t]=z^t$ 꼴의 배열에 적용하면 $(Sx)[t]=z^{t-1}=z^{-1}x[t]$ 로 상수배가 된다. 배열이 길이 $N$ 으로 순환하므로 $z^N=1$ 이어야 하고, 그런 $z$ 는 $e^{2\pi ik/N}$ 꼴의 $N$ 개뿐이다. 이 $N$ 개의 배열이 $S$ 의 고유벡터이고 $\mathbb{C}^N$ 의 기저를 이룬다.

$N=4$ 이면 $z$ 는 $1,i,-1,-i$ 이고, $z=i$ 의 배열은 $(1,i,-1,-i)$ 다. 한 칸 밀면 $(-i,1,i,-1)$ 이 되어 $-i=z^{-1}$ 배다. 배열 $(1,0,-1,0)$ 은 $z=i$ 와 $z=-i$ 의 배열을 반씩 더한 것이므로, 이 기저에서는 두 좌표만 $0$ 이 아니다.

순환 합성곱은 $S$ 의 거듭제곱들의 일차결합이므로 이 기저에서 전부 대각행렬이 된다. 대각성분을 읽으면 합성곱이 성분별 곱으로 바뀐다. 좌표를 이 기저로 옮기는 선형변환이 이산 Fourier 변환이다.

# 정의

## 변환

$N$ 을 배열 길이, $x$ 를 길이 $N$ 의 [복소수](complex-numbers.md) 배열이라 하자. $i$ 는 허수 단위이고 [실수](real-numbers.md) $\theta$ 에 대해

$$
e^{i\theta}=\cos\theta+i\sin\theta
$$

이다. 변환 방향의 지수 부호를 음수로 정하고, 다음 배열 $X$ 를 $x$ 의 **이산 Fourier 변환** 이라 한다.

$$
X[k]=\sum_{t=0}^{N-1}x[t]\thinspace e^{-2\pi ikt/N},\qquad k=0,\ldots,N-1
$$

부호와 정규화 상수의 배치는 문헌마다 다르다. $N=4$, $x=(1,0,-1,0)$ 이면 $X[k]=1-(-1)^k$ 이므로 $X=(0,2,0,2)$ 다. 직관 절대로 $z=i$ 와 $z=-i$ 에 해당하는 $k=1,3$ 의 성분만 $0$ 이 아니다.

## 역변환

$$
x[t]=\frac1N\sum_{k=0}^{N-1}X[k]\thinspace e^{2\pi ikt/N},\qquad t=0,\ldots,N-1
$$

지수 부호를 바꾸고 $N$ 으로 나눈다. 양쪽에 $1/\sqrt{N}$ 을 배치하면 변환이 유니터리가 되고 Parseval 등식에 상수가 붙지 않는다.

## DFT 행렬

$\omega = e^{-2\pi i/N}$ 이라 할 때 성분이 $F\_{kt} = \omega^{kt}$ 인 $N \times N$ 행렬을 **DFT 행렬(DFT matrix)** 이라 하고, $X=Fx$ 다. $F^{-1} = F^\ast/N$ 이다. $F/\sqrt{N}$ 이 유니터리이므로 DFT 는 $\mathbb{C}^N$ 의 [내적 공간](inner-product-spaces.md) 구조에서 정규직교 기저 변환이다. $N=2$ 이면 $\omega=-1$ 이고 $F=\begin{pmatrix}1&1\cr 1&-1\end{pmatrix}$ 이다.

# 성질

## 직교성

서로 다른 주파수의 회전 성분을 한 주기에 걸쳐 더하면 상쇄된다. 정수 $r$ 에 대해

$$
\sum_{k=0}^{N-1}e^{2\pi ikr/N}=\begin{cases}N&N\mid r\cr 0&N\nmid r\end{cases}
$$

이고, 공비가 $1$ 인 경우와 아닌 경우로 나누어 유한 등비급수 공식을 적용하면 얻는다. 이 합 공식을 대입하면 역변환식이 나오고, 같은 식이 기저의 직교성이다.

## 기본 성질

- 선형이고 가역이다.
- $X[0]$ 은 입력값의 합이므로 $N$ 으로 나누면 평균이다.
- 실수 입력이면 $X[N-k]=\overline{X[k]}$ 다. 실수 신호의 정보가 절반에 들어 있어 실수 전용 변환이 연산량을 절반으로 줄인다.
- Parseval 등식(Parseval's identity). $\sum \vert x[t]\vert^2 = (1/N)\sum \vert X[k]\vert^2$ 로 에너지가 보존된다. $x=(1,0,-1,0)$ 에서 양변은 $2=(4+4)/4$ 다.
- 이동. 입력을 $m$ 만큼 순환 이동하면 $X[k]$ 에 $\omega^{km}$ 이 곱해진다. 크기는 변하지 않는다.

정의 절의 $x=(1,0,-1,0)$ 에서 실수 진동 하나가 양과 음의 주파수에 대응하는 두 복소 성분 $X[1]$, $X[3]$ 으로 나타난다.

## 주기성과 스펙트럼 누출

DFT 는 길이 $N$ 의 배열을 무한히 반복되는 주기 신호로 취급한다. 마지막 원소 다음이 첫 원소다. 실제 신호를 유한 구간에서 잘라 변환하면 양 끝이 이어 붙으며 불연속이 생기고, 그 불연속이 모든 주파수에 에너지를 흩뿌린다. 이것을 스펙트럼 누출(spectral leakage)이라 한다. [창함수](window-functions.md)(window function)를 곱해 양 끝을 부드럽게 만드는 것이 표준 대응이다.

표본화 주파수의 절반을 넘는 성분은 낮은 주파수로 되접히며, 이것을 에일리어싱(aliasing)이라 한다.

## 합성곱 정리

순환 합성곱을 $(x \ast y)[n] = \sum_m x[m]\thinspace y[(n-m) \bmod N]$ 이라 하면

$$
\mathrm{DFT}(x\ast y)[k]=X[k]\cdot Y[k]
$$

가 성립한다. $O(N^2)$ 짜리 합성곱이 변환 두 번, 성분별 곱 한 번, 역변환 한 번으로 $O(N \log N)$ 이 된다. 다항식 곱셈, 큰 정수 곱셈, 이미지 필터링, 상관 계산이 모두 합성곱이므로 같은 방법으로 가속된다.

$(1+2z)(3+4z) = 3 + 10z + 8z^2$ 를 변환 경로로 계산한다. 결과의 길이가 $3$ 이므로 $0$ 을 덧붙여 $N=4$ 로 두면 $x=(1,2,0,0)$, $y=(3,4,0,0)$ 이고 $X=(3,1-2i,-1,1+2i)$, $Y=(7,3-4i,-1,3+4i)$ 다. 성분별 곱 $(21,-5-10i,1,-5+10i)$ 를 역변환하면 $(3,10,8,0)$ 이 나온다. 덧붙이지 않고 $N=2$ 로 두면 $8z^2$ 이 상수항에 겹쳐 $(11,10)$ 이 나온다.

## 빠른 계산

정의를 그대로 쓰면 $O(N^2)$ 이다. [고속 Fourier 변환](fft.md)(fast Fourier transform, FFT)의 Cooley–Tukey 알고리즘(Cooley–Tukey algorithm)은 짝수 인덱스와 홀수 인덱스로 나누어

$$
X[k]=E[k]+\omega^k O[k],\qquad X[k+N/2]=E[k]-\omega^k O[k]
$$

로 절반 크기의 문제 두 개로 환원한다. $T(N)=2T(N/2)+O(N)$ 이므로 $O(N\log N)$ 이다.

$N$ 이 $2$ 의 거듭제곱이 아니면 소인수분해를 이용하거나 Bluestein 알고리즘(Bluestein's algorithm)으로 합성곱 문제로 바꾼다. DFT 는 변환의 정의이고 FFT 는 그 값을 계산하는 알고리즘 계열이다.

## 유한군 위의 변환

DFT 는 순환군 $\mathbb{Z}/N\mathbb{Z}$ 위의 [Fourier 변환](fourier-transform.md)이다. [지수함수](exponential-function.md) $t \mapsto \omega^{kt}$ 가 그 군의 지표(character)이고 직교성이 지표의 직교 관계다.

변환은 일반 유한 아벨군으로 확장되고, 비가환군에서는 [군의 표현](group-representations.md)이 지수함수를 대신한다. $(\mathbb{Z}/2\mathbb{Z})^n$ 위의 변환이 Walsh–Hadamard 변환(Walsh–Hadamard transform)이고 부울 함수 해석에 쓰인다. 이 변환들이 군 위의 조화해석이라는 하나의 틀에 들어간다.

## 수론 변환

복소수 대신 [유한체](finite-fields.md)의 $N$ 차 원시 단위근을 쓰면 같은 구조가 성립한다. 이 **수론 변환(number-theoretic transform)** 은 부동소수점 오차 없이 정확한 정수 합성곱을 주고, 큰 정수 곱셈 라이브러리와 [격자](lattices.md) 기반 암호의 다항식 연산에 쓰인다.

# 활용

## 신호 처리와 압축

주기 성분의 검출, 잡음 제거, 대역 통과 필터링, 스펙트로그램 생성이 DFT 를 쓴다. JPEG(Joint Photographic Experts Group) 은 [이산 코사인 변환](discrete-cosine-transform.md)(discrete cosine transform)을 쓰고, MP3(MPEG-1 Audio Layer III)를 비롯한 오디오 코덱은 주파수 영역에서 지각적으로 덜 중요한 성분을 버린다. 실제 압축률은 [엔트로피 부호화](source-coding.md)와 결합해 나온다.

## 곱셈의 가속

다항식 곱셈과 큰 정수 곱셈은 합성곱이므로 FFT 로 $O(N\log N)$ 에 처리된다. [Schönhage–Strassen 알고리즘](schonhage-strassen.md)과 그 후속 알고리즘이 이 원리를 쓰고, 수십만 자리 이상의 정수를 다루는 계산 대수 시스템의 기본 루틴이다.

## 선형 연산의 대각화

순환 구조를 가진 행렬은 DFT 기저에서 대각행렬이 된다. 순환 행렬의 역행렬 계산, 상수계수 편미분방정식의 스펙트럼 해법, 정상 확률과정의 스펙트럼 분해가 이를 쓴다. 격자 위의 Poisson 방정식을 FFT 로 푸는 것이 그 예다.[^1]

[^1]: MIT 18.06SC, *Complex Matrices; Fast Fourier Transform*. Fourier 행렬, 직교성과 빠른 변환. https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/complex-matrices-fast-fourier-transform-fft/

# 연관 문서

## 선수지식

- [선형사상](linear-maps.md)
- [해석학 개관](analysis-overview.md)

## 더 알아보기

### 알고리즘

- [고속 Fourier 변환](fft.md)
- [Goertzel 알고리즘](goertzel-algorithm.md)
- [Shor 알고리즘](shor-algorithm.md)
- [양자 위상 추정](quantum-phase-estimation.md)

### 신호처리

- [창함수](window-functions.md)
- [스펙트럼 추정](spectral-estimation.md)
- [해석 신호](analytic-signal.md)
- [이산 코사인 변환](discrete-cosine-transform.md)

### 조합론과 정수론

- [부울 함수의 Fourier 해석](boolean-fourier.md)
- [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)
- [Freiman 정리](freiman-theorem.md)

#analysis #algorithms
