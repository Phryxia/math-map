# Radon–Nikodym 정리

Radon–Nikodym 정리는 한 측도가 다른 측도의 영집합을 보존하면 적분 가능한 밀도로 표현할 수 있음을 보장한다.

## 정의

같은 가측 공간 위의 측도 μ와 ν에 대해, μ(E)=0이면 항상 ν(E)=0일 때 ν가 μ에 대해 절대연속이라고 한다.

$$
\nu\ll\mu
$$

μ와 ν가 시그마 유한이고 ν≪μ이면, 음이 아닌 가측함수 f가 존재하여 모든 가측집합 E에서 다음 등식이 성립한다.

$$
\nu(E)=\int_E f\,d\mu
$$

f는 μ-거의 모든 곳에서 유일하며 Radon–Nikodym derivative라 한다.

$$
f=\frac{d\nu}{d\mu}
$$

## 성질

필요조건은 즉시 확인된다. μ(E)=0이면 E 위에서 임의의 음이 아닌 함수의 적분이 0이므로 ν(E)=0이다. 정리의 내용은 시그마 유한성 아래에서 이 필요조건이 충분하다는 것이다.

구간 [0,1]의 길이측도 μ에 대해 ν(E)=2μ(E)라 두면 derivative는 거의 모든 곳에서 2다. 반면 0에 집중된 Dirac measure는 길이가 0인 집합 {0}에 질량 1을 주므로 길이측도에 대해 절대연속이 아니며 이런 밀도를 갖지 않는다.

세 시그마 유한 측도에서 ν≪μ≪λ이면 derivative는 chain rule을 만족한다.

$$
\frac{d\nu}{d\lambda}
=\frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}
\quad\text{거의 모든 곳에서}
$$

## 활용

확률분포의 density, 조건부기댓값, measure change와 likelihood ratio를 정의한다. 서로 다른 기준측도로 적은 적분을 변환하고, 측도를 절대연속 부분과 singular 부분으로 분해하는 Lebesgue decomposition의 핵심 성분이다.

## 기타 참고 문헌

- [Terence Tao, Signed measures and the Radon–Nikodym–Lebesgue theorem](https://terrytao.wordpress.com/2009/01/04/245b-notes-1-signed-measures-and-the-radon-nikodym-lebesgue-theorem/): 절대연속, Radon–Nikodym derivative와 Lebesgue decomposition.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Lebesgue 적분](lebesgue-integral.md)

## 더 알아보기

- [측도변환과 우도비](change-of-measure.md)
- [조건부 기댓값](conditional-expectation.md)

#measure_theory #theorem
