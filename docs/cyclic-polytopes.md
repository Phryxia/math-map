# 순환 다면체

# 개요

**순환 다면체(cyclic polytope)** 는 곡선 $t\mapsto(t,t^2,\dots,t^d)$ 위의 점 여러 개로 만든 [볼록 다면체](convex-polytopes.md)다. 점 $n$ 개로 볼록 다면체를 만들 때 모서리를 몇 개까지 만들 수 있는지 물으면, $3$ 차원에서는 $3n-6$ 개가 한계이지만 $4$ 차원에서 이 곡선 위의 점 여섯 개를 잡으면 여섯 점의 모든 쌍 $15$ 개가 모서리가 된다. 어느 점들이 면을 이루는지는 점의 좌표를 넣은 다항식의 부호로 판정하고, 그 판정으로 모든 차원의 면의 수가 가장 많은 다면체를 얻는다.

# 직관

$4$ 차원 공간에 점 여섯 개 $v\_t=(t,t^2,t^3,t^4)$, $t=1,2,\dots,6$ 을 놓는다. $v\_2$ 와 $v\_5$ 를 잇는 선분이 볼록 껍질의 모서리인지 본다. 모서리이려면 여섯 점을 한쪽에 두면서 $v\_2$ 와 $v\_5$ 만 지나는 초평면이 있어야 한다.

다항식 $p(x)=(x-2)^2(x-5)^2$ 을 전개한다.

$$
p(x)=x^4-14x^3+69x^2-140x+100
$$

$p$ 의 계수로 다음 일차식을 만든다.

$$
\ell(y\_1,y\_2,y\_3,y\_4)=100-140y\_1+69y\_2-14y\_3+y\_4
$$

$v\_t$ 를 넣으면 $\ell(v\_t)=p(t)$ 다. $p$ 는 제곱의 곱이므로 음이 아니고, 값은 다음과 같다.

| t         | 1    | 2   | 3   | 4   | 5   | 6    |
| --------- | ---- | --- | --- | --- | --- | ---- |
| $p(t)$    | $16$ | $0$ | $4$ | $4$ | $0$ | $16$ |

초평면 $\ell=0$ 은 $v\_2$ 와 $v\_5$ 만 지나고 나머지 네 점은 $\ell\gt 0$ 쪽에 있으므로 선분 $v\_2v\_5$ 는 모서리다. $2$ 와 $5$ 대신 어느 두 수를 넣어도 같은 계산이 되므로 여섯 점의 $15$ 쌍이 모두 모서리다.

# 정의

## 모멘트 곡선

$\mathbb R^d$ 의 곡선 $\gamma(t)=(t,t^2,\dots,t^d)$ 를 **모멘트 곡선(moment curve)** 이라 한다. 직관 절의 여섯 점은 $d=4$ 인 모멘트 곡선 위의 $t=1,\dots,6$ 인 점이다.

## 순환 다면체

$n\gt d$ 이고 $t\_1\lt t\_2\lt\dots\lt t\_n$ 일 때 $\gamma(t\_1),\dots,\gamma(t\_n)$ 의 볼록 껍질을 순환 다면체라 하고 $C(n,d)$ 로 쓴다. 직관 절의 다면체는 $C(6,4)$ 다.

## 이웃 다면체

$d$ 차원 다면체에서 꼭짓점 $k$ 개를 어떻게 골라도 그 $k$ 개가 한 면의 꼭짓점 전부일 때 그 다면체를 **$k$ 이웃(k-neighborly)** 이라 한다. 직관 절의 계산은 $C(6,4)$ 가 $2$ 이웃이라는 것, 곧 꼭짓점의 모든 쌍이 모서리라는 것이다.

# 성질

## Gale 짝수 조건

정리. $C(n,d)$ 의 꼭짓점 $d$ 개의 집합 $S$ 가 한 극대면의 꼭짓점 전부인 것은 다음과 동치다. $S$ 에 들지 않는 두 첨자 $i\lt j$ 마다, $i$ 와 $j$ 사이에 있는 $S$ 의 원소의 수가 짝수다. 이것을 **Gale 짝수 조건(Gale's evenness condition)** 이라 한다[^1].

증명의 요지. 다항식 $q(x)=\prod\_{s\in S}(x-t\_s)$ 의 계수로 만든 일차식은 $S$ 의 점에서만 $0$ 인 초평면을 준다. $S$ 가 극대면이려면 나머지 점에서 $q$ 의 부호가 모두 같아야 한다. $q$ 의 부호는 근 하나를 지날 때마다 바뀌므로, 두 비원소 $t\_i$, $t\_j$ 에서 부호가 같은 것은 그 사이의 근이 짝수 개인 것과 같다.

$C(6,4)$ 에서 $S$ 의 여집합 $\lbrace i,j\rbrace$ 는 $j-i$ 가 홀수일 때 조건을 만족한다. 그런 쌍은 $\lbrace 1,2\rbrace$, $\lbrace 1,4\rbrace$, $\lbrace 1,6\rbrace$, $\lbrace 2,3\rbrace$, $\lbrace 2,5\rbrace$, $\lbrace 3,4\rbrace$, $\lbrace 3,6\rbrace$, $\lbrace 4,5\rbrace$, $\lbrace 5,6\rbrace$ 의 아홉이므로 $C(6,4)$ 의 극대면은 $9$ 개다.

조건에 $t\_i$ 의 값이 들어가지 않으므로 $C(n,d)$ 의 면 구조는 $t\_1,\dots,t\_n$ 을 어떻게 잡아도 같다. $C(n,d)$ 는 단체 다면체다.

## 이웃성

정리. $C(n,d)$ 는 $\lfloor d/2\rfloor$ 이웃이다[^2].

증명의 요지. $\lvert S\rvert=k\le d/2$ 이면 $\prod\_{s\in S}(x-t\_s)^2$ 은 차수가 $d$ 이하이고 음이 아니며 $S$ 의 점에서만 $0$ 이다. 직관 절과 같이 이 다항식의 계수가 $S$ 의 점만 지나는 받침 초평면을 준다.

$d=2$ 이면 $\lfloor d/2\rfloor=1$ 이고 모든 꼭짓점이 꼭짓점이라는 말뿐이다. $d=4$ 이면 모든 쌍이 모서리이므로 그래프가 완전그래프 $K\_n$ 이다.

## 극대면의 수

Gale 짝수 조건으로 극대면을 세면 다음이 나온다[^2].

$$
f\_{d-1}(C(n,d))=\begin{cases}\dfrac{n}{n-m}\dbinom{n-m}{m}, & d=2m\cr 2\dbinom{n-m-1}{m}, & d=2m+1\end{cases}
$$

$d=3$ 이면 $2(n-2)=2n-4$ 로, Euler–Poincaré 관계식이 주는 $3$ 차원 단체 다면체의 극대면 수와 같다. $n=6$, $d=4$ 이면 $\tfrac64\binom42=9$ 로 위의 셈과 같다.

## 상계 정리

정리. 꼭짓점이 $n$ 개인 $d$ 차원 볼록 다면체 $P$ 에 대해 모든 $i$ 에서 $f\_i(P)\le f\_i(C(n,d))$ 다. 이것을 상계 정리(upper bound theorem)라 한다[^3].

증명의 요지. 꼭짓점을 조금 움직여 $P$ 를 단체 다면체로 바꾸면 면의 수가 줄지 않는다. 단체 다면체의 f 벡터는 h 벡터로 정해지고, $h\_i\le\binom{n-d+i-1}{i}$ 가 $i\le d/2$ 에서 성립한다. 이 부등식의 등호가 $\lfloor d/2\rfloor$ 이웃 다면체에서 성립하고, Dehn–Sommerville 관계식 $h\_i=h\_{d-i}$ 로 나머지 $h\_i$ 도 정해진다.

# 활용

- [Balinski 정리](balinski-theorem.md). $C(n,4)$ 의 그래프가 $K\_n$ 이므로, $4$ 차원 이상에서는 다면체의 그래프가 차원을 정하지 않는다.
- [Stanley–Reisner 환](stanley-reisner-rings.md). Stanley 는 상계 정리를 다면체의 경계에서 구면의 삼각분할로 넓혔고, 순환 다면체가 그 상한을 준다.
- [Blind–Mani 정리](blind-mani-theorem.md). 꼭짓점 $6$ 개인 $5$ 차원 단체와 $C(6,4)$ 는 그래프가 둘 다 $K\_6$ 이므로, 단순 다면체가 아니면 그래프가 면 구조를 정하지 않는다.

[^1]: D. Gale, "Neighborly and cyclic polytopes", *Convexity* (Proceedings of Symposia in Pure Mathematics 7), American Mathematical Society, 1963, 225–232.
[^2]: G. M. Ziegler, *Lectures on Polytopes*, Graduate Texts in Mathematics 152, Springer, 1995, 0 장과 8 장.
[^3]: P. McMullen, "The maximum numbers of faces of a convex polytope", *Mathematika* 17 (1970), 179–184.

# 연관 문서

## 선수지식

- [볼록 다면체](convex-polytopes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #combinatorics
