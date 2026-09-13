# Lebesgue 적분

Lebesgue 적분은 가측집합의 크기를 이용해 단순함수의 합에서 일반 함수의 누적량으로 확장한다.

## 정의

측도 공간 (X,Σ,μ)을 고정하고 가측함수의 적분을 정의한다. 가측성의 조건과 예시는 선수지식 문서에서 다룬다.

지시함수 1_A는 A에서 1이고 바깥에서 0이다. 서로소 가측집합 A₁,…,Aₙ과 음이 아닌 유한 실수 c₁,…,cₙ으로 만든 단순함수 s의 적분을 먼저 정한다.

$$
s=\sum_{i=1}^n c_i1_{A_i},\qquad
\int_X s\,d\mu=\sum_{i=1}^n c_i\mu(A_i)
$$

여기서는 0과 무한대의 곱을 0으로 정한다. 음이 아닌 가측함수 f의 적분은 그 아래에 놓인 모든 음이 아닌 단순함수 적분값의 최소 상계다.

$$
\int_X f\,d\mu=\sup_{0\le s\le f,\ s\text{ simple}}\int_X s\,d\mu
$$

값으로 무한대도 허용한다. 실수값 가측함수 f는 |f|의 적분이 유한할 때 적분 가능하다고 하고, 양의 부분 max(f,0)과 음의 부분 max(-f,0)의 적분 차로 적분을 정한다.

## 성질

음이 아닌 가측함수에서 크기의 순서는 적분에서도 유지된다. 작은 함수 아래의 모든 단순함수는 큰 함수 아래에도 있기 때문이다.

Lebesgue measure를 쓰는 [0,1]에서 유리수의 지시함수는 적분이 0이다. 유리수 집합의 측도가 0이기 때문이다. 모든 길이 양수인 부분구간에 유리수와 무리수가 있어 하합은 0, 상합은 1이다. 따라서 Riemann 적분은 존재하지 않는다.

유계 함수가 닫힌 유계 구간에서 Riemann 적분 가능하면 Lebesgue 적분도 가능하고 두 값은 같다.

## 활용

셈측도를 사용하면 적분이 급수가 되고, 확률측도를 사용하면 기댓값이 된다. 이산·연속 분포가 섞인 확률변수에도 같은 정의를 쓴다. 극한과 적분을 교환하려면 별도의 수렴 정리 조건을 확인해야 한다.

## 기타 참고 문헌

- [Terence Tao, Integration on abstract measure spaces](https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/): §4 정의 10·11·13.
- [Tao, The Lebesgue integral](https://terrytao.wordpress.com/2010/09/19/245a-notes-2-the-lebesgue-integral/): Lebesgue measure의 경우에 대한 정의와 성질.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Riemann 적분](riemann-integral.md)
- [가측함수](measurable-functions.md)

## 더 알아보기

- [단조 수렴 정리](monotone-convergence.md)
- [Radon–Nikodym 정리](radon-nikodym.md)
- [확률변수와 기댓값](random-variables.md)
