# Shannon entropy

Shannon entropy는 확률 분포에서 결과를 알기 전의 불확실성을 평균 정보량으로 측정한다.

## 정의

유한 집합 A에 값을 갖는 확률변수를 X라 하고, a가 나올 확률을 p(a)라 하자. 밑이 2인 로그를 사용한 entropy H(X)는 다음과 같다. 단위는 bit다.

$$
H(X)=-\sum_{a\in A}p(a)\log_2p(a)
$$

확률이 0인 항은 0으로 정의한다. 이는 양의 확률이 0으로 접근할 때 해당 항의 극한이 0인 것과 일치한다.

결과 a의 정보량은 -log₂p(a)다. 확률이 작은 결과일수록 값이 크며, entropy는 이를 발생 확률로 가중한 평균이다.

## 성질

m을 A의 원소 수라고 하자. entropy는 아래 범위에 있고, 상한은 모든 결과가 같은 확률일 때 달성한다.

$$
0\le H(X)\le\log_2m
$$

결과가 확실하면 entropy는 0이다. 공정한 동전은 1 bit, 네 결과가 같은 확률인 실험은 2 bit다. 같은 결과 수라도 확률이 한쪽에 집중되면 entropy가 작아진다.

Y를 또 다른 유한 확률변수라 하자. 두 결과의 쌍에 대한 entropy를 H(X,Y), Y가 주어졌을 때의 조건부 entropy 평균을 H(X|Y)라 쓰면 chain rule은 다음과 같다.

$$
H(X,Y)=H(Y)+H(X\mid Y)
$$

이는 결합확률을 주변확률과 조건부 확률의 곱으로 나누고, 곱의 로그를 합으로 바꾸어 얻는다. 조건부 분포는 Y의 확률이 양수인 값에서만 필요하다.

X와 Y가 독립이면 공동 entropy는 각 entropy의 합이다. 같은 결과를 복사하여 두 번 적는 경우에는 독립이 아니므로 정보량이 두 배로 늘지 않는다.

## 활용

무손실 압축에서 평균 부호 길이의 하한을 다룬다. 이진 prefix code의 평균 길이는 entropy보다 작을 수 없으며, 적절한 부호를 선택하면 entropy보다 1 bit 이상 크지 않게 만들 수 있다.

entropy는 메시지의 의미나 중요도를 직접 재지 않는다. 무엇을 결과로 구분하고 어떤 확률 모델을 쓰는지가 먼저 정해져야 한다.

## 기타 참고 문헌

- [Claude E. Shannon, A Mathematical Theory of Communication](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf): 1948년 원 논문의 교정 재판본. entropy의 도입과 무잡음 부호화 정리.
- 동전·네 결과·복사 예시는 정의에 직접 대입하면 확인된다. 조건부 entropy와 상호정보량은 후속 정점으로 분리한다.

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)

## 더 알아보기

- [KL divergence와 상호정보량](kl-divergence.md)
- [무손실 부호화 정리](source-coding.md)

#information_theory
