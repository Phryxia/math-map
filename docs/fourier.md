# 이산 Fourier 변환

이산 Fourier 변환은 유한한 수열을 서로 다른 주기로 회전하는 성분들의 계수로 바꾼다.

## 정의

이산 Fourier 변환은 discrete Fourier transform, 줄여서 DFT다. 양의 정수 N을 배열 길이, x를 길이 N의 복소수 배열, X를 변환 결과 배열이라 하자. 입력 인덱스 t와 주파수 인덱스 k는 모두 0부터 N-1까지다.

i는 제곱이 -1인 허수 단위다. 실수 θ에 대해 복소 지수의 표기를 다음처럼 이해할 수 있다.

$$
e^{i\theta}=\cos\theta+i\sin\theta
$$

여기서는 변환 방향의 지수 부호를 음수로 정한다.

$$
X[k]=\sum_{t=0}^{N-1}x[t]e^{-2\pi i kt/N},\qquad k=0,\ldots,N-1
$$

## 성질

DFT는 가역적인 선형 변환이다. 역변환은 지수 부호를 바꾸고 N으로 나눈다.

$$
x[t]=\frac1N\sum_{k=0}^{N-1}X[k]e^{2\pi i kt/N},\qquad t=0,\ldots,N-1
$$

역변환이 성립하는 핵심은 서로 다른 회전 성분의 합이 상쇄된다는 사실이다. 정수 r에 대해 아래 합은 r이 N의 배수일 때 N, 아닐 때 0이다.

$$
\sum_{k=0}^{N-1}e^{2\pi i kr/N}=\begin{cases}N&N\mid r\\0&N\nmid r\end{cases}
$$

N=4이고 x가 차례로 1, 0, -1, 0인 배열이면 결과는 차례로 0, 2, 0, 2다. 하나의 실수 진동이 양·음의 주파수에 대응하는 두 복소 성분으로 표현된다.

k=0의 계수는 입력값의 합이므로 N으로 나누면 평균이다. 실수 입력에서는 양·음의 주파수 계수가 서로 복소켤레로 대응한다.

## 활용

유한 신호의 주기 성분 분석, 순환 convolution, 선형 연산의 대각화에 사용한다. DFT 자체는 변환의 정의이고 fast Fourier transform, 줄여서 FFT는 그 값을 빠르게 계산하는 알고리즘 계열이다.

유한 배열의 주파수 표현은 길이 N의 주기적 반복과 맞물린다. 실제 신호를 유한 구간에서 잘라 얻었다면 경계와 표본화가 해석에 영향을 준다.

## 기타 참고 문헌

- [MIT, Complex Matrices; Fast Fourier Transform](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/complex-matrices-fast-fourier-transform-fft/): Fourier 행렬과 빠른 변환.
- 직교 합 공식은 공비가 1인 경우와 아닌 경우를 나누어 유한 등비급수 공식을 적용하면 증명된다. 위 역변환은 이 합 공식을 대입한 결과다.

# 연관 문서

## 선수지식

- [선형사상](linear-maps.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algorithms
