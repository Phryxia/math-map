# Liouville 정리

# 개요

**Liouville 정리(Liouville's theorem)** 는 복소평면 전체에서 미분 가능하고 절댓값이 일정한 값을 넘지 않는 함수는 상수라는 정리다. 실수에서 $\sin x$ 는 모든 점에서 미분 가능하고 값이 $-1$ 과 $1$ 사이에 머문다. 복소수에서는 같은 $\sin z$ 가 허축 위에서 $\sin(iy)=i\sinh y$ 로 한없이 커진다. 이 정리는 평면 전체에서 미분 가능한 함수가 상수가 아니면 반드시 어딘가에서 한없이 커진다는 것을 보여, 함수가 커지는 속도로 함수의 꼴을 정한다.

# 직관

[정칙함수](holomorphic-functions.md)는 원 안의 값이 원 둘레의 값으로 정해진다. Cauchy 적분 공식을 미분하면 중심 $a$ 에서의 도함수는 반지름 $R$ 인 원 둘레의 값의 평균을 $R$ 로 나눈 꼴이다.

원 둘레에서 $\vert f\vert$ 가 $M$ 을 넘지 않으면 $\vert f'(a)\vert\le M/R$ 이다. $f$ 가 평면 전체에서 정칙이면 원을 얼마든지 크게 그릴 수 있다. $M$ 이 $R$ 에 상관없이 하나로 정해져 있으면 $R$ 을 키울수록 $M/R$ 이 $0$ 으로 가고, $f'(a)=0$ 이다. 모든 점에서 도함수가 $0$ 이므로 $f$ 는 상수다.

$\sin z$ 에서는 이 논증이 막힌다. 반지름 $R$ 인 원 위의 $\vert\sin z\vert$ 의 최댓값은 대략 $e^R/2$ 로 커져서, $M/R$ 이 $0$ 으로 가지 않는다.

# 정의

## 전해석함수

복소평면 $\mathbb C$ 전체에서 정칙인 함수를 **전해석함수(entire function)** 라 한다. 다항식, $e^z$, $\sin z$ 는 전해석함수다. $1/z$ 는 $z=0$ 에서 정의되지 않으므로 전해석함수가 아니다.

## 유계 함수

어떤 실수 $M$ 이 있어 모든 $z$ 에서 $\vert f(z)\vert\le M$ 이면 $f$ 를 **유계(bounded)** 라 한다. 상수함수는 유계이고, $e^z$ 는 실축 위에서 $e^x$ 로 커지므로 유계가 아니다.

# 성질

## Cauchy 부등식

$f$ 가 중심 $a$, 반지름 $R$ 인 닫힌 원판을 포함하는 영역에서 정칙이고 원 둘레에서 $\vert f\vert\le M$ 이면 다음이 성립한다[^1].

$$
\vert f^{(k)}(a)\vert\le\frac{k!\thinspace M}{R^k}
$$

Cauchy 적분 공식을 $k$ 번 미분한 식에서 적분의 절댓값을 원 둘레의 길이 $2\pi R$ 와 피적분함수의 최댓값의 곱으로 누르면 나온다.

## 정리

유계인 전해석함수는 상수다[^1].

증명의 요지. $\vert f\vert\le M$ 이면 모든 $a$ 와 모든 $R$ 에서 Cauchy 부등식으로 $\vert f'(a)\vert\le M/R$ 이고, $R\to\infty$ 로 $f'(a)=0$ 이다. 복소평면은 연결되어 있으므로 $f$ 는 상수다.

## 다항식 증가

어떤 $C$ 와 정수 $n\ge 0$ 에 대해 $\vert f(z)\vert\le C(1+\vert z\vert)^n$ 인 전해석함수는 차수가 $n$ 이하인 다항식이다.

증명의 요지. 중심 $a$, 반지름 $R$ 인 원 위에서 $\vert z\vert\le\vert a\vert+R$ 이므로 Cauchy 부등식에 $k=n+1$ 을 넣으면 다음이 나온다.

$$
\vert f^{(n+1)}(a)\vert\le\frac{(n+1)!\thinspace C(1+\vert a\vert+R)^n}{R^{n+1}}
$$

우변은 $R\to\infty$ 에서 $0$ 으로 간다. $f$ 의 $(n+1)$ 계 도함수가 $0$ 이므로 $f$ 는 차수 $n$ 이하의 다항식이다.

## 한쪽만 유계

전해석함수 $f$ 의 실부가 위로 유계, 곧 $\mathrm{Re}\thinspace f\le M$ 이면 $f$ 는 상수다. $g=e^{f}$ 는 $\vert g\vert=e^{\mathrm{Re} f}\le e^M$ 이므로 유계이고, Liouville 정리로 $g$ 는 상수다. 그러면 $g'=f'g=0$ 이고 $g\ne 0$ 이므로 $f'=0$ 이다.

[Picard 정리](picard-theorems.md)는 더 강한 결론을 준다. 상수가 아닌 전해석함수는 복소수 가운데 많아야 한 값을 빼고 모든 값을 갖는다.

# 활용

- [대수학의 기본정리](fundamental-theorem-of-algebra.md). 근이 없는 다항식 $p$ 에 대해 $1/p$ 가 유계인 전해석함수가 되어 상수이므로 모순이다.
- [타원함수](elliptic-functions.md). 두 방향으로 주기를 갖는 전해석함수는 주기 평행사변형 위의 값이 전부이므로 유계이고 상수다. 그래서 상수가 아닌 타원함수는 극을 가져야 한다.
- Banach 대수의 스펙트럼. 복소 Banach 대수(Banach algebra)의 원소 $a$ 의 스펙트럼이 비어 있으면 $\lambda\mapsto(a-\lambda)^{-1}$ 에 [Hahn–Banach 정리](hahn-banach-theorem.md)가 주는 선형범함수를 합성한 함수가 유계인 전해석함수가 되어 $0$ 이다. 그래서 스펙트럼은 비어 있지 않다.

[^1]: E. M. Stein, R. Shakarchi, Complex Analysis, Princeton Lectures in Analysis II, Princeton University Press 2003, Chapter 2 §4 — Cauchy 부등식, Liouville 정리, 대수학의 기본정리.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #functional_analysis
