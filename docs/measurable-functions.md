# 가측함수

가측함수는 관측하려는 값의 집합을 정의역의 가측 사건으로 되돌려 보낸다.

## 정의

가측 공간 (X,Σ)와 (Y,Τ)에서 함수 f:X→Y가 가측이라는 것은 다음 조건이다. Σ와 Τ는 각각 두 공간의 σ-대수이고, 역상은 해당 값으로 보내지는 원소들의 집합이다.

$$
B\in\mathcal T\quad\Longrightarrow\quad f^{-1}(B)\in\Sigma
$$

실수값 함수에서는 Y의 σ-대수로 열린집합들이 생성하는 Borel σ-대수를 쓴다. 음이 아닌 확장실수값 함수도 같은 방식으로 정의한다.

## 성질

실수값 함수의 가측성을 검사할 때 모든 Borel 집합을 하나씩 확인할 필요는 없다. 모든 실수 a에 대한 다음 조건으로 충분하다.

$$
\{x\in X:f(x)>a\}\in\Sigma
$$

증명의 핵심은 역상이 여집합과 가산 합집합을 보존한다는 점이다. 역상이 Σ에 속하는 값의 집합들은 σ-대수를 이루며, 반직선들이 Borel σ-대수를 생성한다.

가측함수의 합성은 가측이다. f:X→Y와 g:Y→Z, Z의 가측집합 C에 대해 다음 등식에 가측성 조건을 두 번 적용한다.

$$
(g\circ f)^{-1}(C)=f^{-1}\bigl(g^{-1}(C)\bigr)
$$

가측성은 함수만의 성질이 아니라 선택한 σ-대수에도 의존한다. X={0,1}에서 Σ가 공집합과 X뿐이면 실수값 가측함수는 상수함수뿐이다. 두 값을 다르게 보내면 그 사이의 반직선 역상이 한 원소 집합이 되어 조건을 깨기 때문이다. Σ를 X의 모든 부분집합으로 넓히면 모든 실수값 함수가 가측이다.

## 활용

가측함수 f로부터 값이 B에 속할 사건을 만들면 그 사건의 크기를 μ(f⁻¹(B))로 계산할 수 있다. 이는 관측값의 분포를 정하는 방법이다. Lebesgue 적분에서도 가측성을 먼저 확인해야 단순함수로 근사하는 정의를 적용할 수 있다.

## 기타 참고 문헌

- [Terence Tao, Integration on abstract measure spaces](https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/): §4 정의 8, 연습문제 28, 참고 8.

# 연관 문서

## 선수지식

- [측도](measure.md)

## 더 알아보기

- [Lebesgue 적분](lebesgue-integral.md)
- [상측도와 확률분포](pushforward-measure.md)

#measure_theory
