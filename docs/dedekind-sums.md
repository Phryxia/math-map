# Dedekind 합

# 개요

**Dedekind 합(Dedekind sum)** 은 $r/k$ 와 $hr/k$ 의 소수부에서 각각 $1/2$ 를 뺀 두 값을 $r=1,\dots,k-1$ 에 대해 곱해 더한 유리수 $s(h,k)$ 다. [Dedekind eta 함수](dedekind-eta-function.md)를 $\tau\mapsto(a\tau+b)/(c\tau+d)$ 로 바꿀 때 곱해지는 24 차 단위근이 이 합으로 정해진다. $c$ 가 백만이면 정의대로는 항 백만 개를 더해야 한다.

$s(h,k)$ 와 $s(k,h)$ 의 합은 $h$, $k$ 의 간단한 유리식이다. 이 식과 $s(h,k)$ 가 $h$ 를 $k$ 로 나눈 나머지에만 달려 있다는 것을 번갈아 쓰면, [유클리드 알고리즘](euclidean-algorithm.md)과 같은 횟수의 단계로 값이 나온다.

# 직관

$k=7$, $h=2$ 로 둔다. $r=1,\dots,6$ 에 대해 $r/7$ 의 소수부에서 $1/2$ 를 뺀 값과 $2r/7$ 의 소수부에서 $1/2$ 를 뺀 값을 나란히 적으면 다음과 같다. 두 값은 모두 $14$ 를 분모로 한다.

| r | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| $r/7$ 쪽의 분자 | $-5$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |
| $2r/7$ 쪽의 분자 | $-3$ | $1$ | $5$ | $-5$ | $-1$ | $3$ |

두 줄을 칸마다 곱하면 $15,-3,-5,-5,-3,15$ 이고 합이 $14$ 다. 분모 $14^2=196$ 으로 나누면 $s(2,7)=14/196=1/14$ 이다.

이 계산은 $k-1$ 개의 항을 더한다. 거꾸로 $s(7,2)$ 는 $r=1$ 한 항이고, $1/2$ 의 소수부에서 $1/2$ 를 빼면 $0$ 이라 $s(7,2)=0$ 이다. 두 값의 합 $1/14$ 는 다음 식의 값과 같다.

$$
-\frac14+\frac1{12}\Bigl(\frac27+\frac72+\frac1{14}\Bigr)=-\frac14+\frac{54}{168}=\frac1{14}
$$

이 등식이 모든 서로소 $h$, $k$ 에서 성립하는 것이 상호법칙이다. 그러면 큰 $k$ 의 합 하나를 작은 $h$ 의 합으로 바꿀 수 있다.

# 정의

## 톱니 함수

실수 $x$ 에 대해 다음 함수를 **톱니 함수(sawtooth function)** 라 한다.

$$
((x))=\begin{cases}x-\lfloor x\rfloor-\frac12 & x\notin\mathbb Z\cr 0 & x\in\mathbb Z\end{cases}
$$

$((x))$ 는 주기 $1$ 이고 홀함수다. 직관 절의 표가 $14\thinspace((r/7))$ 와 $14\thinspace((2r/7))$ 이다.

## Dedekind 합

정수 $h$ 와 양의 정수 $k$ 에 대해 **Dedekind 합** 은 다음이다.

$$
s(h,k)=\sum_{r=1}^{k-1}\Bigl(\Bigl(\frac rk\Bigr)\Bigr)\Bigl(\Bigl(\frac{hr}k\Bigr)\Bigr)
$$

$s(2,7)=1/14$ 이고, $k=1$ 이면 빈 합이라 $s(h,1)=0$ 이다.

# 성질

## 주기성과 부호

$s(h,k)$ 는 $h$ 를 $k$ 로 나눈 나머지에만 달려 있다. $((x))$ 가 홀함수이므로 $s(-h,k)=-s(h,k)$ 다. $h\bar h\equiv1\pmod k$ 이면 $r$ 를 $\bar hr$ 로 바꾸어 세어 $s(\bar h,k)=s(h,k)$ 를 얻는다. $5\equiv-2\pmod 7$ 이므로 $s(5,7)=-1/14$ 다.

## 상호법칙

서로소인 양의 정수 $h$, $k$ 에 대해 다음이 성립한다. 이것을 Dedekind 상호법칙(Dedekind reciprocity law)이라 한다.

$$
s(h,k)+s(k,h)=-\frac14+\frac1{12}\Bigl(\frac hk+\frac kh+\frac1{hk}\Bigr)
$$

증명의 요지. Dedekind eta 함수의 일반 변환식을 $\gamma$ 와 $S\gamma$ 에 각각 쓰고, $S\gamma$ 의 변환을 $\gamma$ 의 변환 뒤에 $S$ 의 변환을 한 것과 비교한다. 두 계산이 같은 단위근을 주어야 하므로 그 지수를 맞추면 위 식이 나온다. 꼭짓점이 $(0,0)$, $(k,0)$, $(k,h)$ 인 삼각형 안의 격자점을 세는 초등적 증명도 있다[^1].

## 유클리드 알고리즘을 따르는 계산

$k\gt h\gt 0$ 이면 상호법칙으로 $s(h,k)$ 를 $s(k,h)$ 로 바꾸고, 주기성으로 $s(k,h)=s(k\bmod h,h)$ 로 줄인다. 쌍 $(h,k)$ 가 $(k\bmod h,h)$ 로 바뀌는 것은 유클리드 알고리즘의 한 단계이므로, 단계 수는 $O(\log k)$ 다. 직관 절의 $s(2,7)$ 은 $(2,7)\to(1,2)\to(0,1)$ 이고, $s(1,2)=0$ 에서 한 번에 나왔다.

## 특수값

$s(1,k)$ 는 상호법칙에 $h=1$ 을 넣고 $s(k,1)=0$ 을 쓰면 다음과 같다.

$$
s(1,k)=\frac{(k-1)(k-2)}{12k}
$$

$s(1,3)=1/18$ 이다. 모든 $h$, $k$ 에서 $6k\thinspace s(h,k)$ 는 정수다. $s(2,7)$ 에서는 $42\cdot\frac1{14}=3$ 이다.

## 여접 합

다음 표현도 성립한다[^1].

$$
s(h,k)=\frac1{4k}\sum_{r=1}^{k-1}\cot\frac{\pi r}k\cot\frac{\pi hr}k
$$

$k=3$, $h=1$ 이면 $\cot(\pi/3)=1/\sqrt3$, $\cot(2\pi/3)=-1/\sqrt3$ 이라 합이 $2/3$ 이고 $s(1,3)=1/18$ 과 맞는다.

# 활용

- [Dedekind eta 함수](dedekind-eta-function.md)의 일반 변환식. $c\gt 0$ 인 $\gamma$ 에서 곱해지는 단위근이 $\exp(\pi i((a+d)/12c-s(d,c)))$ 다.
- 분할수의 Rademacher 급수. $p(n)$ 을 정확히 주는 급수의 계수가 $\omega\_{h,k}=e^{\pi is(h,k)}$ 를 단 지수합 $A\_k(n)=\sum\_h\omega\_{h,k}e^{-2\pi inh/k}$ 이고, 이 합은 [Kloosterman 합](kloosterman-sums.md)과 같은 꼴이다.
- [렌즈 공간](lens-spaces.md)과 [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md). 렌즈 공간 $L(k,h)$ 의 부호수 결손(signature defect)과 eta 불변량(eta invariant)이 $s(h,k)$ 로 적힌다.
- 격자점 세기. 직각삼각형 안의 격자점 개수와 격자 사면체의 [Ehrhart 다항식](ehrhart-polynomial.md) 계수에 Dedekind 합이 나타난다.

[^1]: H. Rademacher and E. Grosswald, *Dedekind Sums*, Carus Mathematical Monographs 16, Mathematical Association of America, 1972, Ch. 2 와 Ch. 3.

# 연관 문서

## 선수지식

- [Dedekind eta 함수](dedekind-eta-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics
