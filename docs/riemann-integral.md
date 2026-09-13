# Riemann 적분

Riemann 적분은 잘게 나눈 구간의 함수값과 폭을 곱한 합으로 누적량을 정의한다.

## 정의

실수 a<b에 대해 f를 닫힌 구간 [a,b]의 유계 실함수라 하자. 분할 P와 각 조각의 표본점 ξ를 다음처럼 정한다. n은 조각 수인 양의 정수다.

$$
a=x_0<x_1<\cdots<x_n=b,\qquad
\xi_i\in[x_{i-1},x_i]
$$

Riemann 합 S와 분할의 최대 폭은 다음과 같다.

$$
S(f,P,\xi)=\sum_{i=1}^n f(\xi_i)(x_i-x_{i-1}),\qquad
\|P\|=\max_i(x_i-x_{i-1})
$$

최대 폭이 0으로 갈 때 모든 분할과 표본점 선택에 대해 합이 같은 실수 I로 수렴하면 적분 가능하다고 한다.

$$
I=\int_a^b f(x)\,dx
$$

정확히는 임의의 양수 ε에 대해 양수 δ가 있어, 최대 폭이 δ보다 작은 모든 분할과 모든 표본점에서 합과 I의 차의 절댓값이 ε보다 작아야 한다.

## 성질

닫힌 유계 구간에서 연속인 함수는 Riemann 적분 가능하다. 상수함수 f(x)=c의 모든 Riemann 합은 c(b-a)이므로 적분도 이 값이다.

유계성만으로는 부족하다. [0,1]에서 유리수에는 1, 무리수에는 0을 주는 함수를 보자. 모든 표본점을 유리수로 고르면 합은 1이고 무리수로 고르면 0이다. 구간을 아무리 잘게 나누어도 단일한 극한이 없다.

## 활용

변하는 속도의 누적 변위, 밀도의 총량, 수치 적분을 다룬다. 음의 함수값도 부호를 가지고 더해지므로 적분값을 언제나 도형의 넓이라고 해석할 수는 없다.

## 기타 참고 문헌

- [OpenStax, The Definite Integral](https://openstax.org/books/calculus-volume-1/pages/5-2-the-definite-integral): Riemann 합, 정적분, 연속함수의 적분 가능성.
- 정의에서는 등분할에 한정하지 않고 최대 폭과 모든 표본점에 대한 조건을 명시했다.

# 연관 문서

## 선수지식

- [연속함수](continuity.md)

## 더 알아보기

- [미적분학의 기본 정리](fundamental-calculus.md)
- [Lebesgue 적분](lebesgue-integral.md)
- [Fourier 급수](fourier-series.md)

#analysis
