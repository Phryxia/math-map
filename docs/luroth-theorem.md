# Lüroth 정리

# 개요

**Lüroth 정리(Lüroth's theorem)** 는 한 변수 유리함수체 $k(t)$ 와 $k$ 사이에 끼인 체가 모두 유리함수 하나로 생성된다는 정리다. 곡선 $y^2=x^3$ 을 $x=t^4$, $y=t^6$ 으로 매개화하면 $t$ 와 $-t$ 가 같은 점으로 가서 매개화가 두 번씩 겹친다. Lüroth 정리는 이런 겹치는 매개화가 있으면 겹치지 않는 매개화도 있다는 것을 보장하고, 이 예에서는 $s=t^2$ 이 그 매개변수다.

# 직관

매개화 $t\mapsto(t^4,t^6)$ 이 주는 곡선 위의 유리함수는 $t^4$ 과 $t^6$ 으로 만든 유리식이고, 이들이 이루는 체는 $K=k(t^4,t^6)\subseteq k(t)$ 다. $t^6/t^4=t^2$ 이므로 $t^2\in K$ 이고, 거꾸로 $t^4$ 과 $t^6$ 은 $t^2$ 의 거듭제곱이므로 $K=k(t^2)$ 다.

새 매개변수 $s=t^2$ 으로는 곡선이 $(s^2,s^3)$ 으로 매개화되고, 곡선 위의 점 $(x,y)$ 에서 $s=y/x$ 로 $s$ 가 정해지므로 겹침이 없다. 매개화가 겹치는 정도는 $\lbrack k(t):K\rbrack$ 이고 이 예에서 $2$ 다. Lüroth 정리는 $k$ 보다 큰 $K$ 가 언제나 $k(s)$ 꼴이라는 것이고, 그래서 이 계산이 모든 매개화에서 된다.

# 정의

## 유리함수의 차수

$k$ 를 체, $t$ 를 $k$ 위의 변수라 하자. $u\in k(t)$ 를 서로소인 다항식 $g,h\in k\lbrack t\rbrack$ 로 $u=g/h$ 라 쓸 때 $\deg u=\max(\deg g,\deg h)$ 를 $u$ 의 **차수(degree)** 라 한다. $\deg t^2=2$, $\deg(t+1/t)=\deg\frac{t^2+1}{t}=2$ 다.

## 단순 초월 확대

[초월차수](transcendence-degree.md) 문서의 순초월 확대 가운데 초월기저가 원소 하나인 $k(s)/k$ 를 **단순 초월 확대(simple transcendental extension)** 라 한다. 직관 절의 $K=k(t^2)$ 는 $k$ 위의 단순 초월 확대다.

# 성질

## 차수 보조정리

**보조정리.** $u\in k(t)\setminus k$ 이면 $\lbrack k(t):k(u)\rbrack=\deg u$ 다.

증명의 요지. $u=g/h$ 이면 $t$ 는 다음 다항식의 근이다.

$$
P(X)=g(X)-u\thinspace h(X)\in k(u)\lbrack X\rbrack
$$

$P$ 의 $X$ 에 대한 차수는 $\deg u$ 다. $P$ 를 $k\lbrack u,X\rbrack$ 의 원소로 보면 $u$ 에 대해 일차이고, $g,h$ 가 서로소이므로 원시다항식이다. 그래서 $k\lbrack u,X\rbrack$ 에서 기약이고, [원시다항식의 Gauss 보조정리](gauss-lemma-polynomials.md)로 $k(u)\lbrack X\rbrack$ 에서도 기약이다. $u=t^2$ 이면 $P=X^2-u$ 이고 차수 $2$ 다.

## Lüroth 정리

**정리.** 체 $K$ 가 $k\subsetneq K\subseteq k(t)$ 를 만족하면 $K=k(u)$ 인 $u\in k(t)$ 가 있다. 이때 $\lbrack k(t):K\rbrack=\deg u$ 다[^1].

증명의 요지. $K$ 에 $k$ 밖의 원소가 있으므로 차수 보조정리로 $t$ 는 $K$ 위에서 대수적이다. $t$ 의 $K$ 위 최소다항식을 다음과 같이 쓴다.

$$
m(X)=X^n+a_1X^{n-1}+\cdots+a_n
$$

$t$ 가 $k$ 위에서 초월적이므로 어떤 $a_j$ 는 $k$ 에 들지 않는다. $u=a_j$ 로 두면 $k(u)\subseteq K$ 이므로 $n\le\deg u$ 다.

반대쪽 부등식을 위해 $u=g/h$ 로 쓰고 다음 다항식을 본다.

$$
Q(t,X)=h(t)g(X)-g(t)h(X)\in k\lbrack t,X\rbrack
$$

$Q(t,t)=0$ 이므로 $m(X)$ 가 $Q$ 를 $K\lbrack X\rbrack$ 에서 나눈다. $m$ 의 분모를 없앤 $t$ 에 대한 원시다항식 $F(t,X)$ 는 $u$ 를 계수의 비로 가지므로 $t$ 에 대한 차수가 $\deg u$ 이상이다. Gauss 보조정리로 $Q=FR$ 인 $R\in k\lbrack t,X\rbrack$ 이 있고, $Q$ 의 $t$ 차수가 $\deg u$ 이하이므로 $R$ 은 $X$ 만의 다항식이다.

$Q$ 는 $t$ 와 $X$ 를 바꾸면 부호만 바뀌므로 $X$ 만의 다항식인 인수가 없고, $R$ 은 상수다. 그래서 $n=\deg_XF=\deg_XQ=\deg u$ 다.

직관 절에서 $t$ 의 $K$ 위 최소다항식은 $X^2-t^2$ 이고, 계수 $-t^2$ 이 $k$ 밖에 있으므로 $K=k(t^2)$ 이다.

## 자기동형

$k(t)$ 의 $k$ 위 자기동형 $\varphi$ 는 $k(\varphi(t))=k(t)$ 이므로 차수 보조정리로 $\deg\varphi(t)=1$ 이다. 그래서 $\varphi(t)=(at+b)/(ct+d)$, $ad-bc\ne 0$ 이고, 자기동형군은 $\mathrm{PGL}\_2(k)$ 다. 복소수에서 이것은 [Möbius 변환](mobius-transformations.md)의 군이다.

## 유한군의 고정체

자기동형의 유한군 $G$ 의 고정체 $k(t)^G$ 는 $k$ 보다 크므로 Lüroth 정리로 $k(u)$ 꼴이고, Artin 의 정리(Artin's theorem)에서 $\lbrack k(t):k(u)\rbrack=\vert G\vert$ 이므로 $\deg u=\vert G\vert$ 다. $G=\lbrace t\mapsto t,\ t\mapsto 1/t\rbrace$ 이면 $u=t+1/t$ 이고 차수 $2$ 다.

## 높은 차원

변수가 둘인 $\mathbb C(s,t)$ 에서는 $\mathbb C(s,t)$ 가 그 위의 유한 확대인 부분체가 다시 두 변수 유리함수체다. 이것은 곡면에 대한 [Castelnuovo 유리성 판정법](castelnuovo-rationality-criterion.md)에서 나온다. 변수가 셋이면 성립하지 않고, [삼차원 Fano 다양체](fano-threefolds.md)인 삼차 초곡면의 함수체가 반례다.

# 활용

- 단유리 곡선. 유리함수로 매개화되는 곡선은 겹치지 않는 매개화도 가지므로 유리 곡선이고 종수가 $0$ 이다. 직관 절의 $y^2=x^3$ 이 그 예다.
- Noether 문제. 변수를 섞는 유한군의 고정체가 순초월 확대인지 묻는 [Noether 문제](noether-problem.md)는 변수가 하나이면 Lüroth 정리로 긍정이다.
- 유리 매개화의 계산. 곡선의 매개화가 주어지면 직관 절처럼 최소다항식의 계수 하나를 골라 겹치지 않는 매개화를 얻고, 이 절차가 컴퓨터 대수의 매개화 축소에 쓰인다.

[^1]: P. M. Cohn, *Algebra*, Vol. 3, 2nd ed., Wiley, 1991, 11.3 절. J. Lüroth, "Beweis eines Satzes über rationale Curven", Mathematische Annalen 9 (1875), 163–165.

# 연관 문서

## 선수지식

- [초월차수](transcendence-degree.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra
