# 대수학의 기본정리

# 개요

**대수학의 기본정리(fundamental theorem of algebra)** 는 복소수 계수의 상수가 아닌 다항식이 복소수 근을 적어도 하나 갖는다는 정리다. $x^2+1=0$ 은 실수 근이 없어서 $i$ 를 새로 넣었는데, $x^5-x+1=0$ 이나 $x^3-i=0$ 을 풀려면 또 새로운 수를 넣어야 하는지가 물음이다. 이 정리는 [복소수](complex-numbers.md) 안에서 모든 다항식이 풀린다는 것을 보여, 차수 $n$ 인 다항식을 일차식 $n$ 개의 곱으로 쪼갠다.

# 직관

$x^3=i$ 처럼 거듭제곱 하나로 된 방정식은 극형식으로 푼다. $i=e^{i\pi/2}$ 이므로 $e^{i\pi/6}$ 의 세제곱이 $i$ 이고, 새 수가 필요하지 않다. 그러나 $x^5-x+1$ 처럼 항이 섞인 다항식은 근을 식으로 적는 방법이 없다. 근을 적지 않고 근이 있다는 것만 보이는 방법이 있어야 한다.

$f(z)=z^2+1$ 로 시험한다. $z$ 가 반지름 $R$ 인 원 $z=Re^{it}$ 을 한 바퀴 돌면 $f(z)=R^2e^{2it}+1$ 은 중심 $1$, 반지름 $R^2$ 인 원을 두 바퀴 돈다. $R=2$ 이면 이 원은 반지름이 $4$ 라서 원점을 두 바퀴 감는다. $R=1/2$ 이면 반지름이 $1/4$ 라서 원점을 감지 않는다.

$R$ 을 $2$ 에서 $1/2$ 로 줄이는 동안 곡선은 연속으로 움직이고, 원점을 감는 횟수가 $2$ 에서 $0$ 으로 바뀐다. 곡선이 원점을 지나지 않으면 감는 횟수는 바뀌지 않으므로, 어떤 $R$ 에서 곡선이 원점을 지난다. $R=1$ 일 때 $t=\pi/2$ 에서 $f(i)=-1+1=0$ 이고, 그 점이 근 $i$ 다.

일반 다항식에서도 큰 원 위에서는 최고차항 $z^n$ 이 나머지보다 커서 $f(z)$ 가 원점을 $n$ 바퀴 감고, 아주 작은 원 위에서는 $f(z)$ 가 $f(0)$ 근처에 머물러 원점을 감지 않는다. 그래서 그 사이 어떤 원 위에 근이 있다.

# 정의

## 진술

차수 $n\ge 1$ 인 다항식 $f\in\mathbb C\lbrack x\rbrack$ 에 대해 $f(z_0)=0$ 인 $z_0\in\mathbb C$ 가 존재한다[^1].

## 인수분해 꼴

[다항식환](polynomial-rings.md)의 나눗셈 정리로 $f(z_0)=0$ 이면 $f=(x-z_0)g$ 이고 $g$ 의 차수는 $n-1$ 이다. 이를 되풀이하면 다음 꼴이 나온다. $a$ 는 $f$ 의 최고차 계수이고 $z_1,\dots,z_n$ 은 중복을 세어 적은 근이다.

$$
f(x)=a(x-z_1)(x-z_2)\cdots(x-z_n)
$$

$x^4+1$ 은 $\zeta=e^{i\pi/4}$ 로 $(x-\zeta)(x-\zeta^3)(x-\zeta^5)(x-\zeta^7)$ 이다. 이 꼴은 $\mathbb C$ 가 대수적으로 닫힌 체라는 것과 같고, $\mathbb C$ 는 $\mathbb R$ 의 [대수적 폐포](algebraic-closure.md)다.

# 성질

## 최솟값에 의한 증명

d'Alembert 와 Argand 의 증명이다. $\vert z\vert$ 가 크면 $\vert f(z)\vert$ 가 크므로, $\vert f\vert$ 는 충분히 큰 닫힌 원판 안의 어떤 점 $z_0$ 에서 평면 전체의 최솟값을 갖는다.

$f(z_0)\ne 0$ 이라 한다. $z_0$ 에서 전개하면 다음이 나온다. $k\ge 1$ 이고 $c\ne 0$ 이다.

$$
f(z_0+h)=f(z_0)+ch^k+O(\vert h\vert^{k+1})
$$

$ch^k$ 가 $-f(z_0)$ 와 같은 방향이 되게 $h$ 의 방향을 고르고 $\vert h\vert$ 를 작게 하면 $\vert f(z_0+h)\vert\lt\vert f(z_0)\vert$ 다. 최솟값이라는 데 어긋나므로 $f(z_0)=0$ 이다.

## Liouville 정리에 의한 증명

$f$ 에 근이 없으면 $1/f$ 는 평면 전체에서 정칙이고, $\vert z\vert\to\infty$ 일 때 $0$ 으로 가므로 유계다. [정칙함수](holomorphic-functions.md)의 [Liouville 정리](liouville-theorem.md)로 $1/f$ 는 상수이고, $f$ 의 차수가 $1$ 이상인 데 어긋난다.

## 감김수에 의한 증명

직관 절의 논증을 [감김수](winding-number.md)로 적은 것이다. $f$ 에 근이 없으면 원 $\vert z\vert=R$ 의 상 $f(Re^{it})$ 이 원점을 감는 횟수는 $R$ 에 대해 연속이고 정수이므로 일정하다. $R$ 이 크면 그 값은 $z^n$ 의 감김수 $n$ 이고, $R\to 0$ 이면 $0$ 이다. $n\ge 1$ 이면 모순이다. 같은 논증을 원의 [기본군](fundamental-group.md)이 $\mathbb Z$ 라는 사실로도 적는다.

## 대수적 증명

이 증명은 해석학의 사실로 실수의 두 성질만 쓴다. 양의 실수는 실수 제곱근을 갖고, 홀수 차수 실계수 다항식은 [중간값 정리](intermediate-value-theorem.md)로 실근을 갖는다.

증명의 요지. 계수를 켤레로 바꾼 다항식 $\bar f$ 에 대해 $f\bar f$ 는 실계수이므로 실계수 다항식만 보면 된다. 그 분해체 $L$ 에 $i$ 를 더한 체의 Galois 군을 $G$ 라 한다. [Sylow 정리](sylow-theorems.md)로 $G$ 의 Sylow $2$ 부분군의 고정체는 $\mathbb R$ 위의 홀수 차수 확대인데, 홀수 차수 실계수 기약다항식은 실근을 가지므로 그 확대는 $\mathbb R$ 자신이고 $G$ 는 $2$ 군이다.

$L\ne\mathbb C$ 이면 [Galois 이론](galois-theory.md)으로 $\mathbb C$ 의 이차 확대가 나오는데, 복소수는 모두 제곱근을 가지므로 이차 확대는 없다[^2]. 같은 증명이 [실폐체](real-closed-fields.md) $F$ 에 대해 $F(i)$ 가 대수적으로 닫혀 있음을 보인다.

## 실계수 다항식

실계수 다항식 $f$ 의 근 $z$ 에 대해 켤레 $\bar z$ 도 근이다. $(x-z)(x-\bar z)=x^2-2(\mathrm{Re}\thinspace z)x+\vert z\vert^2$ 은 실계수이므로, 실계수 다항식은 실수 위에서 일차식과 판별식이 음수인 이차식의 곱으로 쪼개진다.

# 활용

- [고윳값](eigenvalues.md). $n\times n$ 복소행렬의 특성다항식은 차수 $n$ 이므로 근을 갖고, 모든 복소 정사각행렬은 고윳값을 갖는다. [Jordan 표준형](jordan-canonical-form.md)이 이 사실을 쓴다.
- 부분분수 분해(partial fraction decomposition). 실계수 유리함수의 분모를 실수 위의 일차식과 이차식으로 쪼개어, 유리함수의 적분을 로그와 역탄젠트로 적는다.
- 상수계수 선형 미분방정식. 특성방정식의 근이 복소수 안에 모두 있으므로 해가 $x^ke^{\lambda x}$ 꼴의 결합으로 적힌다.

[^1]: B. Fine, G. Rosenberger, The Fundamental Theorem of Algebra, Springer Undergraduate Texts in Mathematics, 1997 — 최솟값, Liouville, 위상, Galois 이론에 의한 증명.
[^2]: E. Artin 의 증명. S. Lang, Algebra, revised 3rd ed., Springer, Graduate Texts in Mathematics 211 (2002), Chapter VI §2 를 따른다.

# 연관 문서

## 선수지식

- [복소수](complex-numbers.md)
- [다항식환](polynomial-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #field_theory
