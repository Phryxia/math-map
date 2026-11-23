# S 보조정리

# 개요

**S 보조정리(S-lemma)** 는 이차 부등식 하나가 성립하는 모든 점에서 다른 이차 부등식도 성립한다는 함의가, 두 이차식의 음 아닌 결합 하나가 어디서나 음이 아니라는 것과 동치라는 정리다. $x^2\le 1$ 인 모든 실수 $x$ 에서 $x\le 1$ 인지 확인하려면 구간 전체를 살펴야 할 것 같다.

S 보조정리는 $1-x$ 에 $x^2-1$ 의 적당한 음 아닌 배수를 더해 완전제곱이 되는 것을 보이면 된다고 답하고, 그 배수를 찾는 문제는 [반정부호 계획법](semidefinite-programming.md)으로 풀린다.

# 직관

$f(x)=1-x$, $g(x)=x^2-1$ 로 두면 물음은 $g(x)\le 0$ 인 모든 $x$ 에서 $f(x)\ge 0$ 인지다.

$\lambda\ge 0$ 에 대해 $f+\lambda g$ 가 모든 $x$ 에서 음이 아니면, $g(x)\le 0$ 인 $x$ 에서는 $\lambda g(x)\le 0$ 이므로 $f(x)\ge f(x)+\lambda g(x)\ge 0$ 이다. $\lambda=1/2$ 이면 다음이 된다.

$$
f(x)+\tfrac12g(x)=\tfrac12(x^2-2x+1)=\tfrac12(x-1)^2\ge 0
$$

그러므로 $x^2\le 1$ 에서 $x\le 1$ 이다. $\lambda$ 하나로 무한히 많은 $x$ 의 확인이 끝난다.

$f$ 와 $g$ 가 아무 함수일 때는 이런 $\lambda$ 가 없어도 함의가 성립할 수 있다. 두 함수가 모두 이차식이면 함의가 성립할 때 이런 $\lambda$ 가 반드시 있다는 것이 S 보조정리다.

# 정의

$\mathbb R^n$ 위의 이차식은 대칭행렬 $A$, 벡터 $a$, 실수 $\alpha$ 로 $f(x)=x^{\mathsf T}Ax+2a^{\mathsf T}x+\alpha$ 꼴로 쓰는 함수다. 이 $f$ 에 다음 $(n+1)\times(n+1)$ 대칭행렬을 대응시킨다.

$$
M\_f=\begin{pmatrix}A&a\cr a^{\mathsf T}&\alpha\end{pmatrix}
$$

$(x,1)^{\mathsf T}M\_f(x,1)=f(x)$ 이다. 직관 절의 $f(x)=1-x$ 는 $A=0$, $a=-1/2$, $\alpha=1$ 이고, $g(x)=x^2-1$ 은 $B=1$, $b=0$, $\beta=-1$ 이다.

**S 보조정리** 는 다음을 말한다[^1]. $f$, $g$ 가 이차식이고 $g(\bar x)\lt 0$ 인 점 $\bar x$ 가 있으면, 다음 둘은 동치다.

1. $g(x)\le 0$ 인 모든 $x$ 에서 $f(x)\ge 0$ 이다.
2. $\lambda\ge 0$ 이 있어 모든 $x$ 에서 $f(x)+\lambda g(x)\ge 0$ 이다.

# 성질

## 증명의 요지

2 에서 1 은 직관 절의 계산이다. 1 에서 2 를 보이려고 동차화한 두 이차형식 $u\mapsto u^{\mathsf T}M\_fu$, $u\mapsto u^{\mathsf T}M\_gu$ ($u\in\mathbb R^{n+1}$) 를 쓴다.

두 이차형식의 값의 짝을 모은 집합 $\lbrace(u^{\mathsf T}M\_fu,u^{\mathsf T}M\_gu)\rbrace$ 는 $\mathbb R^2$ 의 볼록 원뿔이다. 이것이 Dines 정리(Dines' theorem)이고 [결합 수치 범위](joint-numerical-range.md)의 두 행렬 경우의 실수판이다. 1 은 이 원뿔이 열린 사분면 $\lbrace(s,t):s\lt 0,\thinspace t\lt 0\rbrace$ 과 만나지 않는다는 것으로 바뀌고, 두 볼록 집합을 가르는 직선의 기울기가 $\lambda$ 다. $g(\bar x)\lt 0$ 이라는 조건은 그 직선이 세로축이 되지 않게 한다[^2].

## 반정부호 조건

2 는 다음 행렬 부등식과 동치다.

$$
M\_f+\lambda M\_g\succeq 0
$$

$\lambda$ 가 변수 하나인 선형 행렬 부등식이므로 반정부호 계획법으로 풀린다. 직관 절에서 $\lambda=1/2$ 이면 행렬은 다음과 같고 고윳값 $0,1$ 을 가진다.

$$
M\_f+\tfrac12M\_g=\frac12\begin{pmatrix}1&-1\cr -1&1\end{pmatrix}
$$

## 제약이 둘 이상인 경우

$g\_1(x)\le 0,\dots,g\_m(x)\le 0$ 에서 $f(x)\ge 0$ 이라는 함의가 $\lambda\_1,\dots,\lambda\_m\ge 0$ 으로 $f+\sum\_i\lambda\_ig\_i\ge 0$ 인 결합의 존재와 동치라는 것은 $m\ge 2$ 에서 일반적으로 성립하지 않는다. 결합이 있으면 함의가 성립하지만 그 역이 깨진다. 결합의 존재는 함의의 충분조건으로 쓰이고, 이 완화를 S 절차(S-procedure)라 한다[^2].

## Lagrange 쌍대 간극

이차식 $f$ 를 이차 제약 $g(x)\le 0$ 하나 아래에서 최소화하는 문제의 [Lagrange 쌍대성](lagrange-duality.md) 간극은 $0$ 이다. S 보조정리를 $f-t$ 와 $g$ 에 적용하면, 최솟값이 $t$ 이상이라는 것과 $f-t+\lambda g\ge 0$ 인 $\lambda\ge 0$ 이 있다는 것이 동치이기 때문이다.

# 활용

- [신뢰영역 방법](trust-region.md)의 부분문제. 이차 모형을 공 $\Vert p\Vert^2\le\Delta^2$ 위에서 최소화하는 문제는 이차 제약이 하나이므로 쌍대 간극이 $0$ 이다. 부분문제 전역해의 특성 조건 $(B+\lambda I)\succeq 0$ 이 반정부호 조건 절의 행렬 부등식이다.
- 제어 이론. Yakubovich 는 이 정리를 비선형 되먹임이 있는 계의 절대 안정성(absolute stability)을 판정하는 데 썼다[^1]. 주파수 영역의 부등식을 행렬 부등식으로 바꾸는 [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)가 이 방향에 있다.
- 강건 최적화. 타원체 모양의 불확실성 집합 안의 모든 자료에서 이차 제약이 성립해야 한다는 조건을 행렬 부등식 하나로 바꾼다[^2].

[^1]: V. A. Yakubovich, "S-procedure in nonlinear control theory", *Vestnik Leningrad University* 1 (1971), 62–77.
[^2]: I. Pólik, T. Terlaky, "A survey of the S-lemma", *SIAM Review* 49 (2007), 371–418.

# 연관 문서

## 선수지식

- [반정부호 계획법](semidefinite-programming.md)
- [결합 수치 범위](joint-numerical-range.md)

## 더 알아보기

- [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)

#optimization #linear_algebra
