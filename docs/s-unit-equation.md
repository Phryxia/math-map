# S-단위 방정식

# 개요

$S$ 를 수체 $K$ 의 소수 자리 유한집합이라 하자. $S$ 밖에서 값이 $1$ 인 원소를 $S$-단위라 하고, 그들의 군 $\mathcal O_{K,S}^\ast$ 에서 방정식

$$
u+v=1
$$

의 해를 찾는 문제를 **$S$-단위 방정식**이라 한다.

해는 유한하다. [Baker 정리](baker-theorem.md)의 로그 선형형식 하계가 해의 높이에 유효한 상계를 주고, 해의 개수에는 $\vert S\vert$ 와 $\lbrack K:\mathbb Q\rbrack$ 만으로 정해지는 상계가 있다.

# 직관

$x^3-2y^3=1$ 의 정수해를 찾는다. $\alpha=2^{1/3}$ 이고 $\omega$ 가 $1$ 의 원시 세제곱근이면 좌변이 세 인자의 곱이다.

$$
(x-\alpha y)(x-\omega\alpha y)(x-\omega^2\alpha y)=1
$$

곱이 $1$ 이고 각 인자가 대수적 정수이므로 세 인자가 모두 단수다.

세 인자를 $\theta_1,\theta_2,\theta_3$ 이라 적으면 이들은 서로 독립이 아니다. $x$ 와 $y$ 두 개로 만들어진 세 수이므로 선형관계가 하나 있고, 계수를 계산하면 다음이 나온다.

$$
(\omega-\omega^2)\theta_1+(\omega^2-1)\theta_2+(1-\omega)\theta_3=0
$$

세 항을 $\theta_3$ 항으로 나누면 두 단수의 비 둘이 더해서 $1$ 이 된다. 원래의 정수해를 찾는 문제가 단수군 안에서 $u+v=1$ 을 푸는 문제로 바뀐다. 우변의 $1$ 을 정해진 소수들로만 나누어지는 수로 넓히면 단수 대신 $S$-단위가 나온다.

단수군은 [Dirichlet 단수 정리](dirichlet-unit-theorem.md)로 유한생성이다. 생성원을 고정하면 $u$ 와 $v$ 가 지수 벡터로 적히고, $u+v=1$ 은 지수들에 대한 조건이 된다. 지수가 크면 $u$ 의 절댓값이 $v$ 의 절댓값을 압도해 $u+v$ 가 $1$ 에서 멀어지므로, 지수에 상계를 주는 것이 곧 해의 유한성이다. 그 상계를 주는 것이 Baker 정리다.

# 정의

## $S$-단위

$K$ 를 수체, $S$ 를 $K$ 의 자리 가운데 무한 자리 전부와 유한 개의 유한 자리를 담은 집합이라 하자. **$S$-정수환**은 $S$ 밖의 모든 유한 자리에서 값이 음이 아닌 원소의 환이다.

$$
\mathcal O_{K,S}=\lbrace x\in K:v_{\mathfrak p}(x)\ge 0\thinspace\text{ for all }\mathfrak p\notin S\rbrace
$$

그 가역원군 $\mathcal O_{K,S}^\ast$ 의 원소를 **$S$-단위**라 한다. $S$ 가 무한 자리만 담으면 $\mathcal O_{K,S}=\mathcal O_K$ 이고 $S$-단위는 보통의 단수다.

## 방정식

$a,b\in K^\ast$ 에 대해 다음을 만족하는 쌍 $(u,v)\in(\mathcal O_{K,S}^\ast)^2$ 를 찾는 문제가 $S$-단위 방정식이다.

$$
au+bv=1
$$

$a=b=1$ 인 경우로 정규화해도 일반성을 잃지 않는다. $u$ 를 $au$ 로 바꾸면 계수가 $S$-단위군의 잉여류를 바꿀 뿐이다.

# 성질

## 유한성

$S$-단위 방정식의 해는 유한하다. Dirichlet 단수 정리로 $\mathcal O_{K,S}^\ast$ 는 랭크 $\vert S\vert-1$ 의 자유군과 유한 순환군의 곱이다. 생성원 $\varepsilon_1,\dots,\varepsilon_r$ 을 고정하고 $u=\zeta\prod\varepsilon_i^{n_i}$ 로 적으면, $u+v=1$ 에서 $\vert u-1\vert$ 가 작아야 하므로 $\log\vert u\vert$ 가 $0$ 에 가깝다. 이 양이 $\sum n_i\log\vert\varepsilon_i\vert$ 꼴의 로그 선형형식이고, Baker 정리는 그 값이 $0$ 이 아니면 지수의 크기로 적은 하계를 갖는다고 말한다. 하계와 상계를 맞추면 $\max\vert n_i\vert$ 가 유계다.

## 유효성

위 논증은 해의 높이에 명시적 상계를 준다. $S$, $K$, $a$, $b$ 로 계산되는 상수 $C$ 가 있어 모든 해가 $h(u)\le C$ 를 만족한다. 그 범위를 탐색하면 해를 전부 찾을 수 있고, 이 점이 Thue 방정식과 [Siegel 의 정수점 정리](siegel-integral-points.md)를 가르는 차이다. Siegel 의 증명은 Diophantine 근사의 비유효 논법을 쓰므로 정수점의 개수에 상계를 주지 못한다.

## 해의 개수 상계

Evertse 는 해의 개수가 $K$ 와 $S$ 의 크기만으로 유계임을 보였다[^1]. 상계는 $a,b$ 에 무관하고 $\lbrack K:\mathbb Q\rbrack$ 와 $\vert S\vert$ 의 함수다. 증명은 높이 상계를 쓰지 않고 $S$-단위 쌍을 유한 개의 부분공간으로 나누는 논법을 쓰므로, 유효 상계를 주는 Baker 쪽 논증과 다른 길이다.

# 활용

## Thue 방정식

[Thue 방정식](thue-equation.md) $F(x,y)=m$ 의 해 유한성이 $S$-단위 방정식으로 환원된다. $F$ 를 일차 인자로 쪼개고 세 인자 사이의 선형관계를 세우는 과정이 직관 절의 계산이다. $m$ 의 소인수를 $S$ 에 넣으면 인자들이 $S$-단위가 된다.

## 타원곡선의 정수점

Siegel 의 정수점 정리는 타원곡선의 정수점이 유한하다는 진술이다. Weierstrass 식의 우변을 인수분해해 $S$-단위 방정식으로 옮기면, 비유효 논법을 쓰지 않고 정수점의 높이에 상계를 얻는다. 이 길이 Baker 방법으로 정수점을 실제로 전부 찾는 알고리즘의 바탕이다.

## 단위 방정식의 변형

$u+v=w$ 꼴을 $S$-단위 세 개로 쓰거나 항을 늘린 $u_1+\dots+u_n=1$ 을 보면, 부분합이 $0$ 이 되는 경우를 제외한 해가 유한 개다. 부분공간 정리가 이 일반화의 증명에 들어간다.

[^1]: Evertse, J.-H. "On equations in S-units and the Thue–Mahler equation", *Inventiones Mathematicae* 75 (1984), 561–584.

# 연관 문서

## 선수지식

- [Dirichlet 단수 정리](dirichlet-unit-theorem.md)
- [Baker 정리](baker-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #algebra
