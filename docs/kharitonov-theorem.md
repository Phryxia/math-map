# Kharitonov 정리

# 개요

**Kharitonov 정리(Kharitonov's theorem)** 는 계수마다 범위만 아는 다항식들이 모두 안정한지를 다항식 네 개만 검사해 판정하는 정리다. 장치의 질량이나 마찰 계수를 정확히 모르면 닫힌 고리의 특성다항식도 하나로 정해지지 않고, 계수가 구간 안의 어느 값이든 될 수 있다. 그런 다항식은 무한히 많아 [Routh–Hurwitz 판정법](routh-hurwitz-criterion.md)을 하나씩 쓸 수 없다. Kharitonov 정리는 구간의 끝값을 정해진 무늬로 고른 네 다항식이 안정하면 나머지가 모두 안정하다고 답한다.

# 직관

다음 삼차 다항식의 계수가 $a_2\in\lbrack 1,2\rbrack$, $a_1\in\lbrack 2,3\rbrack$, $a_0\in\lbrack 1,2.5\rbrack$ 의 어느 값이든 될 수 있다고 하자.

$$
s^3+a_2s^2+a_1s+a_0
$$

Routh–Hurwitz 판정법으로 삼차 다항식이 안정한 조건은 세 계수가 양수이고 $a_2a_1\gt a_0$ 인 것이다. $a_2a_1$ 은 $a_2=1$, $a_1=2$ 에서 가장 작은 $2$ 이고 $a_0$ 은 $2.5$ 까지 커지므로, $a_2=1$, $a_1=2$, $a_0=2.5$ 인 다항식이 불안정하다. 실제로 이 다항식의 근 가운데 둘은 $0.075\pm1.472i$ 로 오른쪽 반평면에 있다. $a_0$ 의 범위를 $\lbrack 1,1.5\rbrack$ 로 줄이면 가장 나쁜 경우가 $2\gt 1.5$ 라 모두 안정하다.

삼차에서는 조건이 각 계수에 대해 한 방향으로만 움직여 가장 나쁜 꼭짓점을 바로 찾았다. 사차 이상에서는 Routh–Hurwitz 조건에 $a_3a_2a_1\gt a_1^2+a_3^2a_0$ 처럼 한 계수가 두 방향으로 들어가는 부등식이 생겨, 가장 나쁜 경우가 어느 꼭짓점인지 미리 알 수 없다. 계수가 $n+1$ 개이면 꼭짓점은 $2^{n+1}$ 개이고, 꼭짓점만 보면 된다는 보장도 없다.

Kharitonov 정리는 차수와 상관없이 네 꼭짓점만 보면 된다고 답한다. 위 예에서 그 넷 가운데 하나가 $a_2=1$, $a_1=2$, $a_0=2.5$ 인 다항식이다.

# 정의

## 구간 다항식

$0\lt l_k\le u_k$ 인 실수들에 대해, 다음 다항식 전체의 집합을 **구간 다항식(interval polynomial)** 이라 한다.

$$
p(s)=a_0+a_1s+\dots+a_ns^n,\qquad a_k\in\lbrack l_k,u_k\rbrack
$$

계수는 서로 독립으로 움직인다. 직관 절의 예에서 $l_3=u_3=1$, $\lbrack l_2,u_2\rbrack=\lbrack 1,2\rbrack$, $\lbrack l_1,u_1\rbrack=\lbrack 2,3\rbrack$, $\lbrack l_0,u_0\rbrack=\lbrack 1,2.5\rbrack$ 이다.

## Kharitonov 다항식

구간 다항식의 **Kharitonov 다항식(Kharitonov polynomials)** 은 낮은 차수의 계수부터 하한 $l$ 과 상한 $u$ 를 넷씩 되풀이되는 무늬로 고른 네 다항식이다.

$$
\begin{aligned}
K_1&=l_0+l_1s+u_2s^2+u_3s^3+l_4s^4+l_5s^5+\cdots\cr
K_2&=u_0+u_1s+l_2s^2+l_3s^3+u_4s^4+u_5s^5+\cdots\cr
K_3&=l_0+u_1s+u_2s^2+l_3s^3+l_4s^4+u_5s^5+\cdots\cr
K_4&=u_0+l_1s+l_2s^2+u_3s^3+u_4s^4+l_5s^5+\cdots
\end{aligned}
$$

직관 절의 예에서 넷은 다음이다.

$$
\begin{aligned}
K_1&=1+2s+2s^2+s^3,&K_2&=2.5+3s+s^2+s^3\cr
K_3&=1+3s+2s^2+s^3,&K_4&=2.5+2s+s^2+s^3
\end{aligned}
$$

$a_2a_1\gt a_0$ 을 대 보면 $K_1$, $K_2$, $K_3$ 은 $4\gt 1$, $3\gt 2.5$, $6\gt 1$ 로 안정하고 $K_4$ 는 $2\gt 2.5$ 가 거짓이라 불안정하다.

# 성질

## Kharitonov 정리

정리. 구간 다항식의 모든 다항식이 Hurwitz 안정인 것은 네 Kharitonov 다항식이 Hurwitz 안정인 것과 동치다.[^1]

직관 절의 예에서 $a_0\in\lbrack 1,2.5\rbrack$ 이면 $K_4$ 가 불안정하므로 구간 다항식은 불안정한 다항식을 포함한다. $a_0\in\lbrack 1,1.5\rbrack$ 이면 $K_2$ 와 $K_4$ 의 상수항이 $1.5$ 로 바뀌어 $3\gt 1.5$, $2\gt 1.5$ 로 안정하고, 나머지 둘도 안정하므로 모두 안정하다.

## 값 집합

정리. 실수 $\omega$ 를 하나 고정하면, 구간 다항식의 값 $p(i\omega)$ 전체는 복소평면에서 변이 축에 평행한 직사각형이고, 네 꼭짓점은 $K_1(i\omega),\dots,K_4(i\omega)$ 다.

증명의 요지. $p(i\omega)$ 의 실수부는 짝수 차 계수만, 허수부는 홀수 차 계수만 쓴다.

$$
\begin{aligned}
\mathrm{Re}\thinspace p(i\omega)&=a_0-a_2\omega^2+a_4\omega^4-\cdots\cr
\mathrm{Im}\thinspace p(i\omega)&=a_1\omega-a_3\omega^3+a_5\omega^5-\cdots
\end{aligned}
$$

두 부분은 서로 다른 계수로 따로 움직이므로 값 전체는 직사각형이다. 실수부가 가장 작으려면 부호가 $+$ 인 계수는 하한, $-$ 인 계수는 상한을 골라야 하고, 이것이 $K_1$ 과 $K_3$ 의 짝수 차 무늬 $l_0,u_2,l_4,\dots$ 다. 같은 방식으로 $K_1$ 은 왼쪽 아래, $K_2$ 는 오른쪽 위, $K_3$ 은 왼쪽 위, $K_4$ 는 오른쪽 아래 꼭짓점이다.

## 영점 배제

Kharitonov 정리의 증명은 값 집합과 다음 원리로 이루어진다.

정리. 계수가 연결된 집합 안에서 연속으로 움직이고 최고차 계수가 $0$ 이 되지 않는 다항식 족이 Hurwitz 안정인 다항식을 하나 포함하면, 족 전체가 Hurwitz 안정인 것은 모든 실수 $\omega$ 에서 값 집합이 $0$ 을 포함하지 않는 것과 동치다.

증명의 요지. 근은 계수에 연속으로 의존하므로, 안정한 다항식에서 불안정한 다항식으로 옮겨 가는 길 위 어딘가에서 근 하나가 허수축 위의 점 $i\omega$ 를 지난다. 그 다항식에서 $p(i\omega)=0$ 이다.

네 꼭짓점이 Hurwitz 안정이면 [Hermite–Biehler 정리](hermite-biehler-theorem.md)의 증명에서처럼 각 꼭짓점의 편각은 $\omega$ 에 대해 증가하고, 이 단조성으로부터 직사각형이 원점에 닿지 않는다는 것이 증명된다.[^2]

## 구간 밖의 족

계수가 독립이 아니면 정리가 성립하지 않는다. 계수가 매개변수의 일차식인 족에서는 값 집합이 다각형이 되고, 그 다각형의 모든 모서리에 해당하는 다항식 선분을 검사해야 한다. 이것이 Bartlett, Hollot, Huang 의 모서리 정리(edge theorem)다.[^3]

# 활용

- 강건 안정성 판정. 질량, 저항, 이득의 오차 범위에서 특성다항식 계수의 범위를 구하고 Kharitonov 다항식 넷에 Routh–Hurwitz 판정법을 쓴다. 계수 범위는 실제 매개변수 집합보다 넓게 잡히므로 판정은 보수적이다.
- 제어기 계수 정하기. 고정한 제어기 계수에서 네 다항식의 Routh 표를 만들고, 넷이 모두 안정한 제어기 계수의 범위를 구한다.
- 이산시간 판본. 단위원 안의 근을 묻는 [Jury 판정법](jury-criterion.md)의 경우에는 꼭짓점 넷으로 충분하다는 결론이 일반 차수에서 성립하지 않는다.

[^1]: V. L. Kharitonov, "Asymptotic stability of an equilibrium position of a family of systems of linear differential equations", *Differentsial'nye Uravneniya* 14 (1978), 2086–2088.
[^2]: R. J. Minnichelli, J. J. Anagnost, C. A. Desoer, "An elementary proof of Kharitonov's stability theorem with extensions", *IEEE Transactions on Automatic Control* 34 (1989), 995–998.
[^3]: A. C. Bartlett, C. V. Hollot, L. Huang, "Root locations of an entire polytope of polynomials: it suffices to check the edges", *Mathematics of Control, Signals and Systems* 1 (1988), 61–71.

# 연관 문서

## 선수지식

- [Routh–Hurwitz 판정법](routh-hurwitz-criterion.md)
- [Hermite–Biehler 정리](hermite-biehler-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #optimization #algebra
