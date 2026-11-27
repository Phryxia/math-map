# Weil 지표합 한계

# 개요

**Weil 지표합 한계(Weil bound for character sums)** 는 유한체의 다항식 값에 곱셈 지표를 넣어 더한 합이 항의 개수의 제곱근 정도로만 커진다는 부등식이다. $p=5$ 에서 $x^3+x$ 의 값이 제곱수인지를 $x=0,1,2,3,4$ 에 대해 $+1$, $-1$, $0$ 으로 적어 더하면 $-2$ 다. 이 합은 곡선 $y^2=x^3+x$ 위의 점의 개수가 $p$ 에서 얼마나 벗어나는지를 재고, $p$ 가 커질 때 그 벗어남이 얼마나 클 수 있는지가 문제다.

Weil 지표합 한계는 이 합의 절댓값이 $p$ 와 무관한 상수에 $\sqrt p$ 를 곱한 값 이하라는 것을 보여, 다항식의 값들의 제곱잉여 여부가 동전 던지기처럼 고르게 섞인다는 것을 정량으로 준다.

# 직관

소수 $p$ 와 정수 $a$ 에 대해 Legendre 기호 $(a/p)$ 는 $a$ 가 $0$ 이 아닌 제곱수이면 $1$, 제곱수가 아니면 $-1$, $p$ 의 배수이면 $0$ 이다. 곡선 $y^2=f(x)$ 에서 $x$ 를 하나 정하면 $y$ 의 개수는 $1+(f(x)/p)$ 다. 그래서 $\mathbb F\_p$ 위의 점의 개수는 다음과 같다.

$$
\char35\lbrace(x,y)\in\mathbb F\_p^2:y^2=f(x)\rbrace=p+\sum\_{x\in\mathbb F\_p}\Bigl(\frac{f(x)}{p}\Bigr)
$$

$p=5$, $f(x)=x^3+x$ 이면 $f(0),\dots,f(4)$ 를 $5$ 로 나눈 나머지가 $0,2,0,0,3$ 이다. $5$ 의 제곱잉여는 $1$, $4$ 이므로 기호는 $0,-1,0,0,-1$ 이고 합은 $-2$, 점의 개수는 $3$ 이다. 직접 세면 $x=0,2,3$ 에서 $y=0$ 하나씩이고 $x=1,4$ 에서는 해가 없다.

합의 항은 $p$ 개이므로 아무렇게나 $\pm 1$ 을 고르면 합이 $p$ 까지 갈 수 있다. 동전을 $p$ 번 던져 앞면이면 $+1$, 뒷면이면 $-1$ 을 더하면 합은 보통 $\sqrt p$ 정도다. Weil 의 정리는 다항식의 값에서도 합이 $\sqrt p$ 의 상수배를 넘지 않는다는 것이다. $x^3+x$ 에서는 상수가 $2$ 이고, 위의 $-2$ 는 $2\sqrt5\approx 4.47$ 이하다.

# 정의

## 곱셈 지표

$q$ 원소 유한체 $\mathbb F\_q$ 의 곱셈군에서 $0$ 이 아닌 복소수의 곱셈군으로 가는 군 준동형 $\chi$ 를 **곱셈 지표(multiplicative character)** 라 하고, $\chi(0)=0$ 으로 늘려 $\mathbb F\_q$ 전체에서 정의한다. $\chi^m$ 이 자명한 가장 작은 $m\ge 1$ 이 $\chi$ 의 위수다. 직관 절의 Legendre 기호는 $\mathbb F\_p$ 의 위수 $2$ 인 지표다.

## 지표합

다항식 $f\in\mathbb F\_q\lbrack x\rbrack$ 와 지표 $\chi$ 에 대해 다음 합을 **지표합(character sum)** 이라 한다.

$$
S(\chi,f)=\sum\_{x\in\mathbb F\_q}\chi\bigl(f(x)\bigr)
$$

직관 절에서 $S\bigl((\cdot/5),\thinspace x^3+x\bigr)=-2$ 다.

# 성질

## Weil 의 한계

**정리(Weil, 1948).** $\chi$ 의 위수가 $m\gt 1$ 이고, $f$ 가 어떤 다항식 $g$ 와 상수 $c$ 로 $cg^m$ 꼴이 아니며, $f$ 의 서로 다른 근이 대수적 닫힘에서 $d$ 개이면 다음이 성립한다[^1][^2].

$$
\vert S(\chi,f)\vert\le(d-1)\sqrt q
$$

$x^3+x$ 는 서로 다른 근이 $0$, $\pm i$ 셋이므로 한계가 $2\sqrt q$ 다. $d=1$ 이면 $f=c(x-a)^k$ 이고 $m\nmid k$ 일 때 합이 $0$ 이다.

증명의 요지. $\chi$ 의 위수가 $m$ 이면 곡선 $C:y^m=f(x)$ 의 $\mathbb F\_q$ 점의 개수가 $\chi,\chi^2,\dots,\chi^{m-1}$ 에 대한 지표합의 합으로 적힌다. [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)의 곡선 경우로 Weil 이 먼저 증명한 정리는 곡선의 제타 함수의 분자의 근이 모두 절댓값 $\sqrt q$ 라고 말한다. 지표마다 분자가 인수로 나뉘고 $S(\chi,f)$ 는 그 인수의 근 $d-1$ 개 이하의 합에 음의 부호를 붙인 것이므로 한계가 나온다.

## 이차 다항식

$f(x)=ax^2+bx+c$ 이고 $b^2-4ac\ne 0$ 이면 Legendre 기호에 대해 다음이 성립한다.

$$
\sum\_{x\in\mathbb F\_p}\Bigl(\frac{ax^2+bx+c}{p}\Bigr)=-\Bigl(\frac ap\Bigr)
$$

완전제곱으로 바꾸면 $x^2-D$ 꼴의 합이 되고, 원뿔곡선 $y^2=x^2-D$ 의 점이 $p-1$ 개라는 것에서 나온다. $p=7$, $f=x^2+1$ 이면 값이 $1,2,5,3,3,5,2$ 이고 기호의 합이 $-1$ 이다. $d=2$ 의 한계 $\sqrt p$ 보다 훨씬 작다.

## 타원곡선의 Hasse 한계

$f$ 가 서로 다른 근 셋을 갖는 삼차식이면 $y^2=f(x)$ 는 [타원곡선](elliptic-curves.md)이고, 무한원점을 더한 점의 개수 $N$ 은 다음을 만족한다.

$$
\vert N-(p+1)\vert\le 2\sqrt p
$$

이것을 Hasse 한계(Hasse bound)라 한다. 직관 절의 곡선은 $N=4$ 이고 $\vert 4-6\vert=2\le 2\sqrt5$ 다.

## 가법 지표의 합

가법 지표 $\psi$ 가 자명하지 않고 $f$ 의 차수 $n$ 이 $p$ 와 서로소이면 $\bigl\vert\sum\_x\psi(f(x))\bigr\vert\le(n-1)\sqrt q$ 다[^1]. [Gauss 합](gauss-sums.md)은 $f=x^2$ 인 경우이고, 절댓값이 정확히 $\sqrt q$ 다.

## 초등적 증명

Stepanov 는 대수기하를 쓰지 않고, 근이 많은 보조 다항식을 만들어 차수를 비교하는 방법으로 같은 꼴의 한계를 증명했다. Bombieri 와 Schmidt 가 이 방법을 일반 곡선으로 넓혔다[^3].

# 활용

- [Paley 토너먼트](paley-tournaments.md)와 [Paley 그래프](paley-graphs.md). 정점 $k$ 개마다 그 모두를 이기는 정점이 있다는 것을 보일 때, 그런 정점의 개수를 서로 다른 일차식의 곱에 대한 지표합으로 적고 이 한계로 누른다.
- [Kloosterman 합](kloosterman-sums.md). $\sum\_x\psi(ax+b/x)$ 의 절댓값이 $2\sqrt p$ 이하라는 Weil 의 한계는 곡선 위의 같은 논증에서 나온다.
- 짧은 구간의 지표합. [Burgess 한계](burgess-bound.md)는 길이가 $p$ 보다 훨씬 짧은 구간에서 Legendre 기호의 합을 누르는데, 증명의 한 단계에서 이 한계를 쓴다.
- 의사난수와 부호. 다항식의 값의 제곱잉여 여부로 만든 수열이 고르게 섞인다는 것이 이 한계로 보장되어, 수열의 상관과 부호의 최소 거리를 추정하는 데 쓰인다.

[^1]: A. Weil, "On some exponential sums", *Proceedings of the National Academy of Sciences of the USA* 34 (1948), 204–207.
[^2]: R. Lidl, H. Niederreiter, *Finite Fields*, 2nd ed., Cambridge University Press, 1997, 5장.
[^3]: W. M. Schmidt, *Equations over Finite Fields: An Elementary Approach*, Lecture Notes in Mathematics 536, Springer, 1976.

# 연관 문서

## 선수지식

- [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)

## 더 알아보기

- [Burgess 한계](burgess-bound.md)

#number_theory #algebra #combinatorics
