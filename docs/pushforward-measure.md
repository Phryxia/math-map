# 상측도와 확률분포

상측도(pushforward measure)는 가측함수가 원래 측도의 질량을 값 공간으로 옮겨 만든 측도다.

## 정의

측도 공간 X와 가측 공간 Y, 가측함수 φ:X→Y를 생각하자. X의 시그마 대수와 측도를 각각 Σ와 μ, Y의 시그마 대수를 T라 쓰자. Y의 가측집합 B에 대해 상측도 φ_*μ를 다음처럼 정의한다.

$$
(\phi_*\mu)(B)=\mu\!\left(\phi^{-1}(B)\right),\qquad B\in\mathcal T
$$

μ가 확률측도이면 φ_*μ도 확률측도이며, 확률변수 φ의 분포 또는 법칙이라고 부른다.

## 성질

서로소인 가측집합 B₁,B₂,…의 역상은 서로소이고, 역상은 가산 합집합을 보존한다. 따라서 μ의 가산가법성을 적용하면 φ_*μ도 측도임을 얻는다.

음이 아닌 가측함수 g:Y→[0,∞]에 대해 다음 적분 공식이 성립한다.

$$
\int_Y g(y)\,d(\phi_*\mu)(y)
=\int_X g(\phi(x))\,d\mu(x)
$$

지시함수에서는 정의와 같고, 단순함수에서는 선형성으로 따르며, 일반적인 음이 아닌 함수에는 단조 수렴 정리를 적용한다. 적분 가능한 실수값 함수에는 양의 부분과 음의 부분에 각각 적용한다.

또 다른 가측함수 ψ:Y→Z가 있으면 함수 합성과 상측도는 다음처럼 양립한다.

$$
(\psi\circ\phi)_*\mu=\psi_*(\phi_*\mu)
$$

공정한 주사위 표본공간에서 φ를 눈의 홀짝으로 잡으면 상측도는 홀수와 짝수에 각각 1/2을 주는 분포다. 상측도는 함수의 방향과 같은 쪽으로 측도를 보내므로, 함수에 단순히 측도를 대입하는 연산과 혼동하면 안 된다.

## 활용

확률변수와 통계량의 분포를 원래 표본공간의 확률로부터 정의한다. 고차원 표본을 관측값으로 요약하거나, 좌표변환 뒤의 적분을 계산하거나, 결정론적 함수가 확률분포를 어떻게 바꾸는지 기술할 때 사용한다.

## 기타 참고 문헌

- [Terence Tao, Integration on abstract measure spaces, and the convergence theorems](https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/): Exercise 36의 상측도 정의와 적분 변환 공식.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [가측함수](measurable-functions.md)

## 더 알아보기

- [확률변수와 기댓값](random-variables.md)
- [측도변환과 우도비](change-of-measure.md)
