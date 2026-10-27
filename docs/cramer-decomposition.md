# Cramér 분해 정리

# 개요

**Cramér 분해 정리(Cramér's decomposition theorem)** 는 독립인 두 확률변수의 합이 [정규분포](normal-distribution.md)를 따르면 두 확률변수도 각각 정규분포를 따른다는 정리다. 측정값이 정규분포를 따르고 그 값이 서로 독립인 두 잡음의 합이라면, 두 잡음이 각각 어떤 분포인지 묻는다. 독립인 두 정규 변수의 합이 정규라는 것은 계산으로 바로 나오지만, 합이 정규라는 것만으로 두 성분이 정규라는 결론이 나오는지는 계산으로 보이지 않는다. Cramér 분해 정리는 [특성함수](characteristic-functions.md)의 곱을 복소평면 전체의 함수로 보고 인수의 꼴을 정해 그 결론을 증명한다.

# 직관

Cramér 분해 정리에서 상수는 분산이 $0$ 인 정규분포로 센다. 독립인 정규 변수의 합이 정규라는 사실의 역이다.

증명은 특성함수를 복소평면 전체로 넓혀 전해석함수로 보고, 영점이 없고 증가가 느린 전해석함수의 꼴을 정하는 Hadamard 인수분해 정리(Hadamard factorization theorem)를 쓴다.

$X+Y\sim N(0,1)$ 이고 $X,Y$ 가 독립이면 특성함수는 $\varphi_X(t)\varphi_Y(t)=e^{-t^2/2}$ 를 만족한다. 우변을 두 인수로 나누는 방법으로 $e^{-at^2/2}\cdot e^{-(1-a)t^2/2}$ 가 바로 떠오르고, 이것은 $X,Y$ 가 분산 $a$ 와 $1-a$ 인 정규분포인 경우다. 실수 $t$ 에서만 보면 다른 나눗셈이 없다고 말할 근거가 없다.

$t$ 를 복소수 $z$ 로 바꾸면 $e^{-z^2/2}$ 는 복소평면 어디서도 $0$ 이 아니다. 두 인수 $\varphi_X(z)$, $\varphi_Y(z)$ 가 복소평면 전체에서 정의된다면 곱이 $0$ 이 아니므로 어느 쪽도 $0$ 이 되지 않는다. 영점이 없는 전해석함수는 $e^{g(z)}$ 꼴이고, $\lvert\varphi_X(z)\rvert$ 가 $e^{C\lvert z\rvert^2}$ 보다 빨리 자라지 않으면 $g$ 가 이차 이하의 다항식이어야 한다. 특성함수가 $e^{\text{이차식}}$ 인 분포가 정규분포다.

# 정의

## 정리

$X,Y$ 가 독립인 실숫값 확률변수이고 $X+Y$ 가 정규분포(퇴화 포함)를 따르면 $X$ 와 $Y$ 는 각각 정규분포(퇴화 포함)를 따른다.

## 위수

전해석함수 $h$ 의 위수는 $\lvert h(z)\rvert\le e^{C\lvert z\rvert^\rho}$ 가 충분히 큰 $\lvert z\rvert$ 에서 성립하는 $\rho$ 의 하한이다. Hadamard 인수분해 정리에 따르면 영점이 없고 위수가 $\rho$ 이하인 전해석함수는 차수가 $\rho$ 이하인 다항식 $g$ 로 $e^{g(z)}$ 꼴이다. 이 정리는 [Weierstrass 인수분해 정리](weierstrass-factorization.md)를 유한 위수로 좁힌 것이다.

# 성질

## 증명의 단계

평균을 옮겨 $X+Y\sim N(0,1)$ 로 둔다. $Y$ 의 중앙값 $m$ 을 잡으면 $P(\lvert X\rvert\gt r+\lvert m\rvert)\le 2P(\lvert X+Y\rvert\gt r)$ 이므로 $X$ 의 꼬리도 $e^{-r^2/2}$ 의 속도로 줄어든다. 그래서 모든 복소수 $z$ 에서 $\mathbb E e^{\lvert zX\rvert}\lt\infty$ 이고 $\varphi_X(z)=\mathbb E e^{izX}$ 가 위수 $2$ 이하의 전해석함수다. $Y$ 도 같다.

$\varphi_X(z)\varphi_Y(z)=e^{-z^2/2}$ 가 실수에서 성립하므로 항등정리로 복소평면 전체에서 성립하고, 우변에 영점이 없으므로 $\varphi_X$ 에도 영점이 없다. Hadamard 인수분해로 $\varphi_X(z)=e^{a+bz+cz^2}$ 이다. $\varphi_X(0)=1$ 에서 $a=0$ 이고, 실수 $t$ 에서 $\lvert\varphi_X(t)\rvert\le 1$ 이며 $\overline{\varphi_X(t)}=\varphi_X(-t)$ 이므로 $b$ 는 순허수, $c$ 는 $0$ 이하의 실수다. 이 꼴의 특성함수는 평균 $b/i$, 분산 $-2c$ 인 정규분포의 것이다.

## Poisson 분포의 판

같은 꼴의 정리가 Poisson 분포에서도 성립한다. 독립인 $X,Y$ 의 합이 Poisson 분포를 따르면 $X$ 와 $Y$ 는 각각 평행이동한 Poisson 분포를 따른다. 이것이 Raikov 정리(Raikov's theorem)이고, 특성함수 $e^{\lambda(e^{it}-1)}$ 에 같은 논증을 적용한다.

## 무한분해가능성과의 대비

정규분포는 무한분해가능하다. 곧 모든 $n$ 에 대해 독립 동일분포 $n$ 개의 합으로 쓸 수 있다. Cramér 정리는 정규분포를 독립인 두 변수의 합으로 나누는 방법이 정규분포끼리의 합뿐이라는 것이고, 같은 분포일 것도 요구하지 않는다.

# 활용

- 독립인 신호와 잡음의 합으로 관측한 값이 정규분포를 따르면 신호와 잡음이 둘 다 정규분포다.
- 독립성분분석(independent component analysis)에서 정규분포인 성분을 둘 이상 분리할 수 없다는 것은 같은 꼴의 Darmois–Skitovich 정리(Darmois–Skitovich theorem)에서 나온다. 독립 변수의 두 일차결합이 독립이면 두 결합에 모두 나타나는 변수는 정규분포라는 정리이고, 증명에 특성함수의 같은 논증을 쓴다.

# 연관 문서

## 선수지식

- [정규분포](normal-distribution.md)
- [특성함수](characteristic-functions.md)
- [Weierstrass 인수분해 정리](weierstrass-factorization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #complex_analysis #theorem
