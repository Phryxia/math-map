# Eneström–Kakeya 정리

# 개요

**Eneström–Kakeya 정리(Eneström–Kakeya theorem)** 는 계수가 모두 양수인 다항식의 근이 원점에서 얼마나 떨어져 있는지를 이웃한 계수의 비로 정하는 정리다. $1+2z+3z^2$ 의 근은 근의 공식으로 구하면 절댓값이 $1/\sqrt 3\approx 0.577$ 이지만, 차수가 커지면 근을 직접 구할 수 없다. 이 정리는 계수만 보고 모든 근이 원환 $\alpha\le\lvert z\rvert\le\beta$ 안에 있다고 답한다. 위 다항식에서는 $\alpha=1/2$, $\beta=2/3$ 이다.

# 직관

$p(z)=1+2z+3z^2$ 의 근이 단위원 밖에 있을 수 있는지 묻는다. 계수가 차수를 따라 커지므로 $1-z$ 를 곱하면 이웃한 계수의 차가 남는다.

$$
(1-z)p(z)=1+z+z^2-3z^3
$$

$\lvert z\rvert\gt 1$ 이면 $1$, $\lvert z\rvert$, $\lvert z\rvert^2$ 이 모두 $\lvert z\rvert^3$ 보다 작으므로 $\lvert 1+z+z^2\rvert\lt 3\lvert z\rvert^3$ 이다. 그래서 $(1-z)p(z)$ 는 $0$ 이 아니고, $p$ 의 근은 모두 $\lvert z\rvert\le 1$ 에 있다.

$z=\frac{2}{3}w$ 로 바꾸면 $p$ 는 $1+\frac{4}{3}w+\frac{4}{3}w^2$ 이 된다. 계수가 여전히 줄어들지 않으므로 같은 논법으로 $\lvert w\rvert\le 1$, 곧 $\lvert z\rvert\le 2/3$ 이다. 근 $(-1\pm i\sqrt 2)/3$ 의 절댓값 $0.577$ 이 이 상한 안에 있다.

# 정의

## Eneström–Kakeya 정리

$n\ge 1$ 이고 $a_0,a_1,\dots,a_n$ 이 모두 양의 실수라 하자. 다음 다항식을 둔다.

$$
p(z)=a_0+a_1z+\cdots+a_nz^n
$$

이웃한 계수의 비 가운데 가장 작은 것을 $\alpha$, 가장 큰 것을 $\beta$ 로 둔다.

$$
\alpha=\min_{0\le k\lt n}\frac{a_k}{a_{k+1}},\qquad\beta=\max_{0\le k\lt n}\frac{a_k}{a_{k+1}}
$$

$p$ 의 모든 복소 근 $z$ 는 $\alpha\le\lvert z\rvert\le\beta$ 를 만족한다[^1]. [대수학의 기본정리](fundamental-theorem-of-algebra.md)로 $p$ 는 근을 $n$ 개 가지므로 이 원환 안에 근이 중복도를 세어 $n$ 개 있다.

$1+2z+3z^2$ 에서 비는 $1/2$ 와 $2/3$ 이므로 $\alpha=1/2$, $\beta=2/3$ 이다.

## 단조 계수의 경우

$0\lt a_0\le a_1\le\cdots\le a_n$ 이면 모든 비가 $1$ 이하이므로 $\beta\le 1$ 이고, $p$ 의 근은 모두 닫힌 단위원판 $\lvert z\rvert\le 1$ 에 있다. 처음 증명된 꼴이 이것이고, 일반 꼴은 이 경우에서 변수를 바꿔 얻는다.

# 성질

## 단조 계수의 증명

$1-z$ 를 곱하면 계수의 차가 남는다.

$$
(1-z)p(z)=a_0+\sum_{k=1}^{n}(a_k-a_{k-1})z^k-a_nz^{n+1}
$$

$\lvert z\rvert\gt 1$ 이라 하자. $a_0\gt 0$ 이고 $a_k-a_{k-1}\ge 0$ 이므로 삼각부등식과 $\lvert z\rvert^k\le\lvert z\rvert^n$ 에서 다음이 나온다. 첫 항에서 $\lvert z\rvert^0\lt\lvert z\rvert^n$ 이라 부등식이 엄격하다.

$$
\left\lvert a_0+\sum_{k=1}^{n}(a_k-a_{k-1})z^k\right\rvert\lt\lvert z\rvert^n\left(a_0+\sum_{k=1}^{n}(a_k-a_{k-1})\right)=a_n\lvert z\rvert^n
$$

우변 $a_n\lvert z\rvert^n$ 은 마지막 항의 절댓값 $a_n\lvert z\rvert^{n+1}$ 보다 작으므로 $(1-z)p(z)\ne 0$ 이다. 그래서 $\lvert z\rvert\gt 1$ 인 근이 없다.

## 일반 꼴의 증명

상한은 변수를 $z=\beta w$ 로 바꿔 얻는다. $p(\beta w)$ 의 계수 $b_k=a_k\beta^k$ 는 $b_k/b_{k+1}=a_k/(a_{k+1}\beta)\le 1$ 이므로 줄어들지 않는다. 단조 계수의 경우로 $\lvert w\rvert\le 1$ 이고 $\lvert z\rvert\le\beta$ 다.

하한은 계수의 순서를 뒤집어 얻는다. 뒤집은 다항식은 다음과 같다.

$$
z^np(1/z)=a_n+a_{n-1}z+\cdots+a_0z^n
$$

이 다항식의 근은 $p$ 의 근의 역수이고, 이 다항식의 이웃한 계수의 비는 $a_{k+1}/a_k$ 이므로 그 최댓값이 $1/\alpha$ 다. 상한을 이 다항식에 쓰면 $\lvert 1/z\rvert\le 1/\alpha$, 곧 $\lvert z\rvert\ge\alpha$ 다.

## 경계 위의 근

단조 계수의 경우에 경계 $\lvert z\rvert=1$ 위의 근은 실제로 나온다. $1+z+\cdots+z^n$ 은 계수가 모두 같고, 근은 $1$ 이 아닌 $n+1$ 제곱근으로 모두 단위원 위에 있다. 계수가 엄격하게 커지면 근은 모두 단위원 안쪽에 있다. $\lvert z\rvert=1$ 에서 위 부등식이 등호가 되려면 양수 계수가 붙은 항 $1,z,\dots,z^n$ 의 편각이 모두 같아야 하므로 $z=1$ 이고, $p(1)\gt 0$ 이므로 $1$ 은 근이 아니다.

# 활용

- 지수함수의 Taylor 다항식. [멱급수](power-series.md) $e^z=\sum_k z^k/k!$ 의 부분합 $s_n(z)=\sum_{k=0}^{n}z^k/k!$ 은 이웃한 계수의 비가 $(k+1)!/k!=k+1$ 이므로 $\alpha=1$, $\beta=n$ 이다. 그래서 $s_n$ 의 근은 모두 $1\le\lvert z\rvert\le n$ 에 있고, 차수와 상관없이 원판 $\lvert z\rvert\lt 1$ 에는 근이 없다.
- 계수가 커지는 다항식의 근. $1+2z+3z^2+\cdots+(n+1)z^n$ 은 비가 $(k+1)/(k+2)$ 이므로 근이 모두 $1/2\le\lvert z\rvert\le n/(n+1)$ 에 있고, 단위원 안쪽에 있다.
- [Gauss–Lucas 정리](gauss-lucas-theorem.md)와 함께 쓰면 도함수의 근도 같은 원판에 있다. 단조 계수의 경우에 $p$ 의 근이 볼록 집합인 닫힌 단위원판 안에 있으므로 $p'$ 의 근도 그 안에 있다.

[^1]: M. Marden, Geometry of Polynomials, 2nd ed., AMS Mathematical Surveys 3, 1966.

# 연관 문서

## 선수지식

- [대수학의 기본정리](fundamental-theorem-of-algebra.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #theorem
