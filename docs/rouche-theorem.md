# Rouché 정리

# 개요

**Rouché 정리(Rouché's theorem)** 는 영역의 경계 위에서 작은 항을 더해도 영역 안의 영점 개수가 바뀌지 않는다는 정리다. 방정식 $z^5+3z+1=0$ 의 다섯 근 가운데 몇 개가 단위원판 $\vert z\vert\lt 1$ 안에 있는지 물으면, 5차 방정식에는 근의 공식이 없어 근을 구해 비교할 수 없다.

이 정리는 단위원 위에서 $3z$ 의 크기 $3$ 이 나머지 $z^5+1$ 의 크기보다 크다는 비교 하나로, 원판 안의 근이 $3z$ 의 근과 같은 수, 곧 하나임을 준다.

# 직관

$f(z)=z^5+3z+1$ 로 두면 $f(-1)=-3$, $f(0)=1$ 이므로 구간 $(-1,0)$ 에 실근이 하나 있다. 나머지 네 근은 실수가 아니어서 부호를 보는 방법으로는 위치를 알 수 없다.

원 안의 근 개수는 원을 한 바퀴 도는 동안 $f(z)$ 가 원점을 몇 바퀴 감는지로 센다. [유수 정리](residue-theorem.md)의 편각 원리가 이 횟수와 근 개수가 같음을 준다. 그런데 $f(e^{it})$ 가 그리는 곡선은 손으로 따라가기 어렵다.

$f$ 를 큰 항 $3z$ 와 작은 항 $z^5+1$ 로 나눈다. $\vert z\vert=1$ 에서 $3z$ 는 반지름 $3$ 인 원을 한 바퀴 돌고, $\vert z^5+1\vert\le 2$ 다. $f(z)$ 는 $3z$ 에서 거리 $2$ 이하에 있으므로 원점에서 거리 $1$ 이상 떨어져 있다.

$3z$ 에서 $f(z)$ 까지 점을 곧게 옮기면 옮기는 동안 곡선이 원점을 지나지 않는다. 원점을 지나지 않고 곡선을 바꾸면 감는 횟수는 바뀌지 않으므로 $f$ 의 곡선도 원점을 한 번 감는다. 단위원판 안의 근은 하나이고, 앞에서 찾은 실근이 그것이다.

반지름 $2$ 인 원에서는 큰 항이 $z^5$ 이다. $\vert z^5\vert=32$ 이고 $\vert 3z+1\vert\le 7$ 이므로 $f$ 는 $z^5$ 처럼 원점을 다섯 번 감고, 원판 $\vert z\vert\lt 2$ 안에 근 다섯이 모두 있다. 그러므로 고리 $1\lt\vert z\vert\lt 2$ 에 근 넷이 있다.

경계 위에서 큰 항이 작은 항보다 크면 두 항을 더한 함수의 근 개수는 큰 항의 근 개수와 같다. 이 진술이 Rouché 정리다.

# 정의

$f$ 가 $a$ 에서 [정칙함수](holomorphic-functions.md)이고 $f(a)=0$ 일 때 영점 $a$ 의 **중복도(multiplicity)** 는 $f(z)=(z-a)^m h(z)$, $h(a)\neq 0$ 으로 쓰이는 정수 $m$ 이다. $z^2(z-1)$ 은 $0$ 에서 중복도 $2$, $1$ 에서 중복도 $1$ 이다.

열린집합 $U$ 안의 **영점 개수(number of zeros)** $N(f;U)$ 는 $U$ 안의 영점마다 중복도를 더한 값이다. $N(z^2(z-1);\lbrace\vert z\vert\lt 2\rbrace)=3$ 이고 $N(z^2(z-1);\lbrace\vert z\vert\lt 1/2\rbrace)=2$ 다. 직관 절의 $f$ 는 $N(f;\lbrace\vert z\vert\lt 1\rbrace)=1$ 이다.

닫힌 경로 $\gamma$ 위에서 $f\neq 0$ 일 때 $f\circ\gamma$ 가 원점을 감는 횟수는 [감김수](winding-number.md) $n(f\circ\gamma,0)$ 이다. 단위원을 시계 반대 방향으로 한 바퀴 도는 $\gamma$ 에서 $n(3\gamma,0)=1$, $n(\gamma^5,0)=5$ 다.

# 성질

## 편각 원리

$D$ 가 원판이고 $f$ 가 $\overline D$ 를 포함하는 열린집합에서 정칙이며 경계 $\partial D$ 위에서 $f\neq 0$ 이면 다음이 성립한다.

$$
N(f;D)=\frac{1}{2\pi i}\oint_{\partial D}\frac{f'(z)}{f(z)}\thinspace dz=n(f\circ\partial D,0)
$$

$f'/f$ 는 중복도 $m$ 인 영점에서 유수 $m$ 을 가지므로 유수 정리에서 첫 등식이 나온다. 이 진술이 편각 원리(argument principle)다.

## Rouché 정리

*정리.* $f$, $g$ 가 $\overline D$ 를 포함하는 열린집합에서 정칙이고 $\partial D$ 위의 모든 점에서 $\vert g(z)\vert\lt\vert f(z)\vert$ 이면 $N(f+g;D)=N(f;D)$ 다[^1].

*증명의 요지.* $t\in\lbrack 0,1\rbrack$ 마다 $f\_t=f+tg$ 로 둔다. $\partial D$ 위에서 다음이 성립한다.

$$
\vert f\_t(z)\vert\ge\vert f(z)\vert-\vert g(z)\vert\gt 0
$$

그러므로 $N(f\_t;D)$ 는 편각 원리의 적분으로 쓰인다. 피적분함수 $f\_t'/f\_t$ 는 $(z,t)$ 에 대해 연속이고 분모가 $0$ 에서 떨어져 있으므로 적분값은 $t$ 의 연속함수다. 정수값 연속함수는 $\lbrack 0,1\rbrack$ 에서 상수이므로 $N(f\_0;D)=N(f\_1;D)$ 다. ∎

부등식이 경계의 한 점에서라도 등호가 되면 결론이 깨진다. 단위원판에서 $f(z)=1$, $g(z)=z$ 는 $z=1$ 에서 $\vert g\vert=\vert f\vert$ 이고, $f$ 는 영점이 없지만 $f+g=1+z$ 는 경계 위의 점 $-1$ 에 영점을 갖는다.

## 대칭형 Rouché 정리

*정리.* $f$, $g$ 가 $\overline D$ 를 포함하는 열린집합에서 정칙이고 $\partial D$ 위에서 다음이 성립하면 $N(f;D)=N(g;D)$ 다[^2].

$$
\vert f(z)+g(z)\vert\lt\vert f(z)\vert+\vert g(z)\vert
$$

*증명의 요지.* 부등식은 $f(z)$, $g(z)$ 가 둘 다 $0$ 이 아니고 $f(z)/g(z)$ 가 양의 실수가 아님을 뜻한다. 그러므로 $\partial D$ 에서 $-f/g$ 는 반직선 $(-\infty,0\rbrack$ 을 피하고, $(-f/g)\circ\partial D$ 는 원점을 감지 않는다. 편각 원리를 $f$ 와 $g$ 에 따로 적용하면 감김수의 차가 $N(f;D)-N(g;D)$ 이므로 이 값은 $0$ 이다. ∎

앞 절의 조건 $\vert g\vert\lt\vert f\vert$ 에서는 다음이 성립한다.

$$
\vert(f+g)+(-f)\vert=\vert g\vert\lt\vert f\vert\le\vert f+g\vert+\vert f\vert
$$

이 정리를 $f+g$ 와 $-f$ 에 적용하면 앞 절의 정리가 나온다.

## 초월방정식의 근

$\lambda\gt 1$ 일 때 방정식 $ze^{\lambda-z}=1$ 은 단위원판 안에 근을 정확히 하나 갖는다. $\vert z\vert=1$ 에서 다음이 성립한다.

$$
\vert ze^{\lambda-z}\vert=e^{\lambda-\mathrm{Re}\thinspace z}\ge e^{\lambda-1}\gt 1
$$

$f(z)=ze^{\lambda-z}$, $g(z)=-1$ 로 두면 정리의 조건이 맞고, $f$ 의 원판 안 영점은 $z=0$ 하나다. 실수 $x$ 에서 $xe^{\lambda-x}-1$ 은 $x=0$ 에서 $-1$, $x=1$ 에서 $e^{\lambda-1}-1\gt 0$ 이므로 그 근은 $(0,1)$ 의 실수다.

## 열린 사상 성질

상수가 아닌 정칙함수 $f$ 가 $f(a)=w\_0$ 을 만족하고 $f-w\_0$ 이 $a$ 에서 중복도 $m$ 의 영점을 가지면, $w\_0$ 에 충분히 가까운 $w$ 마다 방정식 $f(z)=w$ 는 $a$ 근처에 해를 중복도까지 세어 $m$ 개 갖는다.

영점은 고립되어 있으므로 작은 원판 $D$ 를 잡으면 $\overline D$ 에서 $f-w\_0$ 의 영점은 $a$ 하나이고, $\delta=\min\_{\partial D}\vert f-w\_0\vert\gt 0$ 이다. $\vert w-w\_0\vert\lt\delta$ 이면 $f-w=(f-w\_0)+(w\_0-w)$ 에 정리를 적용해 $N(f-w;D)=m$ 을 얻는다. 그러므로 $f(D)$ 는 $w\_0$ 을 중심으로 하는 원판을 포함하고, 정칙함수는 열린집합을 열린집합으로 보낸다. $m=1$ 이면 $a$ 근처에서 $f$ 가 단사이므로 정칙인 역함수를 갖는다.

## 다항식의 근

차수 $n$ 인 다항식을 다음과 같이 쓴다.

$$
p(z)=z^n+a\_{n-1}z^{n-1}+\cdots+a\_1z+a\_0
$$

$R\gt 1+\sum_k\vert a\_k\vert$ 이면 $\vert z\vert=R$ 에서 다음이 성립한다.

$$
\vert p(z)-z^n\vert\le\sum_{k\lt n}\vert a\_k\vert R^k\le R^{n-1}\sum_{k\lt n}\vert a\_k\vert\lt R^n=\vert z^n\vert
$$

정리에서 $N(p;\lbrace\vert z\vert\lt R\rbrace)=N(z^n;\lbrace\vert z\vert\lt R\rbrace)=n$ 이다. $p$ 의 근은 모두 원판 $\vert z\vert\lt R$ 안에 있고 중복도까지 세어 $n$ 개다. 이것으로 [대수학의 기본정리](fundamental-theorem-of-algebra.md)가 증명된다.

# 활용

- [Hurwitz 정리](hurwitz-theorem.md)의 증명에 쓴다. 국소 균등수렴하는 $f\_n\to f$ 에서 큰 $n$ 의 $f\_n-f$ 가 경계 위에서 $\vert f\vert$ 보다 작아지므로 $f\_n$ 과 $f$ 의 영점 개수가 같다.
- 다항식의 근이 계수에 연속적으로 의존한다는 것을 보인다. 근 $a$ 의 중복도가 $m$ 이면 $a$ 둘레의 작은 원 위에서 $\vert p\vert$ 의 최솟값보다 작게 계수를 바꾼 다항식은 그 원 안에 근 $m$ 개를 갖는다.
- 수치해석에서 반복법을 시작하기 전에 원판이나 고리 안의 근 개수를 정한다. 직관 절의 $z^5+3z+1$ 처럼 경계 위에서 큰 항을 골라 비교한다.
- 열린 사상 성질에서 정칙함수의 [[최대 절댓값 원리](maximum-modulus-principle.md)](maximum-modulus-principle.md)가 나온다. $\vert f\vert$ 가 내부의 점 $a$ 에서 최대이면 $f(a)$ 둘레의 원판이 상에 들어가야 하므로 $f$ 는 상수다.

[^1]: J. B. Conway, *Functions of One Complex Variable I*, 2nd ed., Springer, 1978, Chapter V §3 — 편각 원리와 Rouché 정리.
[^2]: I. Glicksberg, "A remark on Rouché's theorem", *Amer. Math. Monthly* 83 (1976), 186–187.

# 연관 문서

## 선수지식

- [유수 정리](residue-theorem.md)

## 더 알아보기

- [Hurwitz 정리](hurwitz-theorem.md)

#complex_analysis #analysis #theorem
