# Hermite–Biehler 정리

# 개요

**Hermite–Biehler 정리(Hermite–Biehler theorem)** 는 실계수 다항식이 Hurwitz 안정인지를 짝수 차 항과 홀수 차 항의 근이 번갈아 놓이는지로 판정하는 정리다. $(s+1)^3$ 과 $(s+1)^3+27$ 은 상수항만 다른데, 앞의 것은 근이 모두 $-1$ 이고 뒤의 것은 오른쪽 반평면에 근이 둘 있다. 다항식에 $s=i\omega$ 를 넣으면 실수부는 짝수 차 항에서, 허수부는 홀수 차 항에서 나온다. 이 정리는 두 부분이 $0$ 이 되는 $\omega$ 들이 번갈아 나오는지만 보고 두 다항식을 가른다.

# 직관

$p(s)=(s+1)^3$ 에 $s=i\omega$ 를 넣으면 다음이 나온다.

$$
p(i\omega)=(1-3\omega^2)+i\thinspace\omega(3-\omega^2)
$$

$\omega$ 가 $0$ 에서 커질 때, 허수부는 $\omega=0$ 에서, 실수부는 $\omega=0.577$ 에서, 허수부는 다시 $\omega=1.732$ 에서 $0$ 이 된다. 점 $p(i\omega)$ 는 양의 실수축에서 출발해 양의 허수축, 음의 실수축을 차례로 지나며 원점 둘레를 반시계 방향으로 돈다.

상수항을 $28$ 로 바꾸면 실수부는 $28-3\omega^2$ 이고 $\omega=3.055$ 에서 $0$ 이 된다. 허수부는 그대로 $\omega=0$ 과 $1.732$ 에서 $0$ 이므로, 허수부의 두 근이 실수부의 근보다 먼저 나온다. 점 $p(i\omega)$ 는 $\omega=1.732$ 에서 양의 실수축으로 되돌아오고, 원점 둘레를 도는 방향이 한 번 뒤집힌다. [Routh–Hurwitz 판정법](routh-hurwitz-criterion.md)으로 보면 앞의 다항식은 안정하고 뒤의 것은 불안정하다.

# 정의

## 짝수 부분과 홀수 부분

실계수 다항식 $p(s)=\sum_{k=0}^na_ks^k$ 에 대해, 다음 두 실다항식을 $p$ 의 **짝수 부분(even part)** 과 **홀수 부분(odd part)** 이라 한다.

$$
\begin{aligned}
p_e(\omega)&=a_0-a_2\omega^2+a_4\omega^4-\cdots\cr
p_o(\omega)&=a_1\omega-a_3\omega^3+a_5\omega^5-\cdots
\end{aligned}
$$

실수 $\omega$ 에서 $p(i\omega)=p_e(\omega)+i\thinspace p_o(\omega)$ 이다. 직관 절의 첫 예에서 $p_e=1-3\omega^2$, $p_o=3\omega-\omega^3$ 이다.

## 끼움 성질

$p_e$ 와 $p_o$ 의 근이 모두 실수이고 서로 다르며, 음이 아닌 근을 작은 것부터 적었을 때 다음처럼 번갈아 나오면 **끼움 성질(interlacing property)** 을 만족한다고 한다.

$$
0=\omega_{o,0}\lt\omega_{e,1}\lt\omega_{o,1}\lt\omega_{e,2}\lt\omega_{o,2}\lt\cdots
$$

$\omega_{o,k}$ 는 $p_o$ 의 근, $\omega_{e,k}$ 는 $p_e$ 의 근이다. 직관 절의 첫 예는 $0\lt 0.577\lt 1.732$ 로 이 성질을 만족하고, 둘째 예는 $0\lt 1.732\lt 3.055$ 에서 $p_o$ 의 근이 연달아 나와 만족하지 않는다.

# 성질

## Hermite–Biehler 정리

정리. 실계수 다항식 $p$ 가 Hurwitz 안정인 것은 $a_n$ 과 $a_{n-1}$ 의 부호가 같고 $p_e$, $p_o$ 가 끼움 성질을 만족하는 것과 동치다.[^1]

증명의 요지. $p=a_n\prod_j(s-r_j)$ 로 쓴다. $\mathrm{Re}\thinspace r_j\lt 0$ 이면 $i\omega$ 가 허수축을 따라 위로 움직일 때 $r_j$ 에서 본 $i\omega$ 의 방향은 반시계 방향으로만 돈다. 그래서 모든 근이 왼쪽 반평면에 있으면 $p(i\omega)$ 의 편각은 $\omega\ge0$ 에서 단조 증가하고, $\omega=0$ 에서 $\infty$ 까지 모두 $n\pi/2$ 만큼 는다. 편각이 단조로 $\pi/2$ 씩 늘 때마다 $p(i\omega)$ 는 실수축과 허수축을 번갈아 지나므로 $p_o$ 와 $p_e$ 의 근이 번갈아 나온다.

거꾸로 끼움 성질이 성립하면 $p_e$ 와 $p_o$ 의 근이 각각 차수만큼 있으므로 편각이 $n\pi/2$ 만큼 는다. [Rouché 정리](rouche-theorem.md)의 편각 원리로 이것은 오른쪽 반평면의 근이 $0$ 개라는 뜻이다.

## 편각의 단조성

위 증명에서 나온 사실은 따로 쓰인다. 다항식이 Hurwitz 안정이면 $p(i\omega)$ 의 편각은 $\omega$ 에 대해 강하게 증가하고, $\lbrack 0,\infty)$ 에서의 증가량은 $n\pi/2$ 다. 거꾸로 $p(i\omega)$ 가 원점을 지나지 않고 편각의 증가량이 $n\pi/2$ 이면 $p$ 는 Hurwitz 안정이다. 이것이 Mikhailov 판정법(Mikhailov criterion)이다.

## 경계에 있는 다항식

$p_e$ 와 $p_o$ 가 공통근 $\omega_0\gt 0$ 을 가지면 $p(i\omega_0)=0$ 이므로 $p$ 는 허수축 위에 근 $\pm i\omega_0$ 을 갖는다. 직관 절의 꼴 $(s+1)^3+k$ 에서 $k=8$ 이면 $p_e=9-3\omega^2$ 의 근이 $p_o$ 의 근 $\sqrt3$ 과 같고, $p$ 는 $(s+3)(s^2+3)$ 이다. Routh–Hurwitz 판정법의 안정 범위 $-1\lt k\lt 8$ 의 끝이 이 다항식이다.

# 활용

- 강건 안정성. [Kharitonov 정리](kharitonov-theorem.md)의 증명은 네 꼭짓점 다항식의 편각이 단조 증가한다는 이 정리의 결과로 값 집합인 직사각형이 원점에 닿지 않음을 보인다.
- 안정한 다항식의 매개화. 끼움 성질을 만족하는 근의 배치를 고르고 $p_e$ 와 $p_o$ 를 그 근으로 만들면 Hurwitz 안정인 다항식이 모두 나온다. 고정 차수 제어기에서 안정한 계수의 범위를 구할 때 이 매개화를 쓴다.
- 이산시간 판본. 단위원 안의 근을 묻는 [Jury 판정법](jury-criterion.md)에는 $p$ 를 대칭 부분과 반대칭 부분으로 나누어 두 부분의 단위원 위 근이 번갈아 놓이는지를 보는 같은 꼴의 정리가 있다.

[^1]: F. R. Gantmacher, *The Theory of Matrices*, Vol. 2, Chelsea, 1959, Chapter XV.

# 연관 문서

## 선수지식

- [Routh–Hurwitz 판정법](routh-hurwitz-criterion.md)

## 더 알아보기

- [Kharitonov 정리](kharitonov-theorem.md)

#complex_analysis #algebra #optimization
