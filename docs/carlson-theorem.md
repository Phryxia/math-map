# Carlson 정리

# 개요

**Carlson 정리(Carlson's theorem)** 는 정수에서의 값만으로 정칙함수가 하나로 정해지는 조건을 주는 정리다. 수열 $1, 2, 4, 8, \dots$ 을 음이 아닌 정수 $n$ 에서의 값으로 갖는 함수는 $2^z$ 도 있고 $2^z+\sin(\pi z)$ 도 있다. 정수에서의 값만으로는 함수가 하나로 정해지지 않는다.

이 정리는 함수가 커지는 속도에 한계를 두어, 그 한계 안에서는 정수에서의 값이 함수를 하나로 정한다는 것을 보인다. 그 한계는 $\sin(\pi z)$ 가 커지는 속도 바로 아래다.

# 직관

$2^z$ 와 $2^z+\sin(\pi z)$ 는 음이 아닌 정수에서 같은 값을 갖는다. 둘의 차이는 $\sin(\pi z)$ 이므로, 둘 가운데 하나를 고르려면 $\sin(\pi z)$ 가 정수 밖에서 어떻게 움직이는지 보면 된다.

실수축 위에서 $\sin(\pi x)$ 의 절댓값은 $1$ 이하다. 허수축 위에서는 $\vert\sin(\pi iy)\vert=\sinh(\pi\vert y\vert)$ 이고, 이 값은 $\vert y\vert$ 가 커지면 $e^{\pi\vert y\vert}/2$ 에 가까워진다. 반면 $2^{iy}=e^{iy\log 2}$ 의 절댓값은 $1$ 이다.

그래서 허수축 위에서 $e^{\pi\vert y\vert}$ 보다 느리게 커지는 함수로 범위를 좁히면 $2^z+\sin(\pi z)$ 는 빠지고 $2^z$ 만 남는다. Carlson 정리는 이 범위 안에서 정수에서의 값이 같은 두 함수가 언제나 같다고 말한다. 두 함수의 차이가 정수에서 $0$ 이므로, 정수에서 $0$ 인 함수가 $0$ 뿐이라는 것을 보이면 된다.

# 정의

오른쪽 반평면 $H=\lbrace\mathrm{Re}\thinspace z\gt 0\rbrace$ 에서 [정칙함수](holomorphic-functions.md)이고 폐포 $\overline H$ 에서 연속인 함수 $f$ 가 어떤 상수 $C$ 와 $\tau$ 에 대해 다음을 만족하면 $f$ 를 $\overline H$ 에서 **지수형(exponential type)** 이라 한다.

$$
\vert f(z)\vert\le Ce^{\tau\vert z\vert}\qquad(z\in\overline H)
$$

이런 $\tau$ 의 하한을 $f$ 의 **형(type)** 이라 한다. $2^z$ 는 $\vert 2^z\vert=2^{\mathrm{Re}\thinspace z}\le e^{(\log 2)\vert z\vert}$ 이므로 형이 $\log 2$ 이하인 지수형이다. $\sin(\pi z)$ 는 $\vert\sin(\pi z)\vert\le e^{\pi\vert z\vert}$ 이므로 형이 $\pi$ 이하인 지수형이다.

# 성질

## Carlson 정리

*정리.* $f$ 가 $\overline H$ 에서 지수형이고, 어떤 $c\lt\pi$ 와 상수 $C$ 에 대해 허수축 위에서 $\vert f(iy)\vert\le Ce^{c\vert y\vert}$ 이며, 모든 $n=0,1,2,\dots$ 에서 $f(n)=0$ 이면 $f$ 는 항등적으로 $0$ 이다[^1].

*증명의 요지.* $F(z)=f(z)/\sin(\pi z)$ 로 둔다. $f$ 가 정수에서 $0$ 이므로 $F$ 는 $\overline H$ 의 근방에서 정칙이다. 정수를 중심으로 한 작은 원판 밖에서는 $\vert\sin(\pi z)\vert\ge c_0e^{\pi\vert\mathrm{Im}\thinspace z\vert}$ 이고, 원판 안의 값은 [최대 절댓값 원리](maximum-modulus-principle.md)로 원판 둘레의 값 이하이므로 $F$ 도 지수형이다.

허수축 위에서는 $\vert F(iy)\vert\le C'e^{-(\pi-c)\vert y\vert}$ 이므로 $F$ 는 허수축의 위아래 두 반직선에서 모두 지수적으로 줄어든다. 사분면마다 [Phragmén–Lindelöf 원리](phragmen-lindelof.md)를 적용하면, $\overline H$ 에서 지수형이고 $0$ 이 아닌 함수는 두 반직선에서 함께 지수적으로 줄어들 수 없다는 것이 증명된다[^2]. 그러므로 $F=0$ 이고 $f=0$ 이다. ∎

## 조건의 한계

$\sin(\pi z)$ 는 지수형이고 모든 정수에서 $0$ 이지만 $0$ 이 아니다. 허수축 위의 증가가 $e^{\pi\vert y\vert}$ 이므로 $c\lt\pi$ 는 $c\le\pi$ 로 약하게 할 수 없다.

## 유일성의 꼴

정리를 두 함수의 차이에 쓰면 다음이 나온다. $f$ 와 $g$ 가 정리의 증가 조건을 만족하고 모든 $n=0,1,2,\dots$ 에서 $f(n)=g(n)$ 이면 $f=g$ 다. 직관 절의 $2^z$ 는 허수축 위에서 절댓값이 $1$ 이므로, 정수에서 $2^n$ 의 값을 갖고 이 증가 조건을 만족하는 함수는 $2^z$ 하나뿐이다.

# 활용

- [Hausdorff 적률 문제](hausdorff-moment-problem.md)의 유일성. $(0,1\rbrack$ 위의 유한 측도 $\mu$ 에 대해 $F(z)=\int t^z\thinspace d\mu(t)$ 는 $\vert t^z\vert=t^{\mathrm{Re}\thinspace z}\le 1$ 이므로 $\overline H$ 에서 유계다. 두 측도의 적률 $\int t^n\thinspace d\mu$ 가 모든 $n$ 에서 같으면 Carlson 정리로 두 측도의 $F$ 가 같고, 허수축 위의 값 $\int t^{iy}\thinspace d\mu$ 는 [Mellin 변환](mellin-transform.md)이므로 두 측도가 같다.
- 물리학의 replica 방법(replica method)은 정수 $n$ 에서 계산한 양을 실수 $n$ 으로 연속한다. 그 연속이 유일하다는 근거로 Carlson 정리의 증가 조건을 확인한다.

[^1]: E. C. Titchmarsh, *The Theory of Functions*, 2nd ed., Oxford Univ. Press, 1939, §5.81 — Carlson 정리.
[^2]: R. P. Boas, *Entire Functions*, Academic Press, 1954, Chapter 9 — 반평면에서 지수형인 함수의 증가 지표와 Carlson 정리.

# 연관 문서

## 선수지식

- [Phragmén–Lindelöf 원리](phragmen-lindelof.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #probability
