# S-단위 방정식

# 개요

**S-단위 방정식(S-unit equation)** 은 정해진 소수들로만 나누어지는 수 두 개의 합이 $1$ 이 되는 경우를 찾는 방정식이다. 분자와 분모가 $2$ 와 $3$ 의 거듭제곱뿐인 유리수 두 개의 합이 $1$ 인 경우로 $1/9+8/9=1$, $1/4+3/4=1$ 이 있는데, 이런 등식이 유한 개뿐인지는 수를 하나씩 대입해서는 알 수 없다. [Baker 정리](baker-theorem.md)로 해의 크기에 상계를 주면, 그 범위 안을 전부 확인해 해를 모두 찾을 수 있다.

# 직관

분자와 분모가 $2$ 와 $3$ 의 거듭제곱뿐인 유리수 $u,v$ 로 $u+v=1$ 을 만족하는 것을 모두 찾는다. 부호는 음수도 허용한다. $1/9+8/9=1$ 을 분모 $9$ 로 통분하면 $1+8=9$ 이고, $2+(-1)=1$ 은 $2-1=1$ 이다. 통분하면 언제나 $x+y=z$ 꼴이 되고, $x,y,z$ 는 $\pm 2^a3^b$ 꼴이면서 셋 모두를 나누는 소수가 없다.

$x+y=z$ 에서 두 항을 나누는 소수는 셋째 항도 나눈다. 그래서 $2$ 는 세 항 가운데 하나만 나누고 $3$ 도 하나만 나누므로, 적어도 한 항은 $\pm 1$ 이다. 나머지 두 항이 각각 $2$ 의 거듭제곱과 $3$ 의 거듭제곱이면 문제는 $\vert 3^b-2^a\vert=1$ 이 된다. 작은 수부터 대입하면 $2-1$, $3-2$, $4-3$, $9-8$ 이 나오지만, 더 큰 $a,b$ 에서 해가 없는지는 대입으로 끝나지 않는다.

$\vert 3^b-2^a\vert=1$ 이고 $a\ge 2$ 이면 $3^b/2^a=1\pm 2^{-a}$ 이므로 $\Lambda=b\log 3-a\log 2$ 의 절댓값이 $2^{1-a}$ 보다 작다. Baker 정리는 $\log 2$ 와 $\log 3$ 에 정수를 곱해 더한 값이 $0$ 이 아니면 계수 크기의 고정된 거듭제곱의 역수보다 작아질 수 없다는 정리다. $3^b$ 와 $2^a$ 는 같지 않으므로 $\Lambda\ne 0$ 이고, $b\le a$ 이므로 $2^{1-a}$ 가 $a$ 의 거듭제곱의 역수보다 커야 한다. 이것이 $a$ 의 상계를 주고, 그 아래를 전부 확인하면 해가 모두 나온다.

$2$ 와 $3$ 대신 소수들의 유한집합을 고르고 유리수 대신 [대수적 수체](algebraic-number-fields.md)의 원소를 놓아도 같은 계산이 된다. 그 소수들로만 나누어지는 수를 S-단위라 하고, $u+v=1$ 을 S-단위 방정식이라 한다.

# 정의

## 자리

$K$ 를 수체라 하자. $K$ 의 **자리(place)** 는 $K$ 위의 절댓값의 동치류다. [소 아이디얼](prime-ideals.md) $\mathfrak p$ 마다 값매김 $v_{\mathfrak p}$ 로 정해지는 **유한 자리(finite place)** 가 있고, $K$ 를 $\mathbb R$ 이나 $\mathbb C$ 에 넣는 매장마다 **무한 자리(infinite place)** 가 있다. $K=\mathbb Q$ 의 유한 자리는 소수 $2,3,5,\dots$ 이고 무한 자리는 보통의 절댓값 $\infty$ 하나다.

## S 단위

$S$ 를 $K$ 의 무한 자리 전부와 유한 개의 유한 자리를 담은 집합이라 하자. **S-정수환(ring of S-integers)** 은 $S$ 밖의 모든 유한 자리에서 값매김이 음이 아닌 원소의 환이다.

$$
\mathcal O_{K,S}=\lbrace x\in K:v_{\mathfrak p}(x)\ge 0\thinspace\text{ for all }\mathfrak p\notin S\rbrace
$$

그 가역원군 $\mathcal O_{K,S}^\ast$ 의 원소를 **S-단위(S-unit)** 라 한다. $K=\mathbb Q$, $S=\lbrace\infty,2,3\rbrace$ 이면 $\mathcal O_{\mathbb Q,S}=\mathbb Z\lbrack 1/6\rbrack$ 이고, S-단위는 직관 절의 $\pm 2^a3^b$ $(a,b\in\mathbb Z)$ 이다. $S$ 가 무한 자리만 담으면 $\mathcal O_{K,S}=\mathcal O_K$ 이고 S-단위는 보통의 단수(unit)다.

## 방정식

$a,b\in K^\ast$ 에 대해 다음을 만족하는 쌍 $(u,v)\in(\mathcal O_{K,S}^\ast)^2$ 를 찾는 문제가 S-단위 방정식이다.

$$
au+bv=1
$$

$K=\mathbb Q$, $S=\lbrace\infty,2,3\rbrace$, $a=b=1$ 이면 다음이 해다.

$$
(u,v)=(2,-1),\thickspace(4,-3),\thickspace(9,-8),\thickspace(1/2,1/2),\thickspace(1/4,3/4),\thickspace(1/9,8/9)
$$

$a,b$ 를 나누는 소 아이디얼을 $S$ 에 넣으면 $a,b$ 가 S-단위가 되고 $au,bv$ 도 S-단위이므로, $a=b=1$ 인 경우로 환원된다.

# 성질

## S 단위군의 구조

[Dirichlet 단수 정리](dirichlet-unit-theorem.md)를 S-정수환으로 넓히면 $\mathcal O_{K,S}^\ast$ 는 유한생성이고, 랭크 $\vert S\vert-1$ 의 자유 아벨 군과 $K$ 의 1 의 거듭제곱근이 이루는 유한 순환군의 곱이다. $\mathbb Z\lbrack 1/6\rbrack^\ast=\lbrace\pm 1\rbrace\times 2^{\mathbb Z}\times 3^{\mathbb Z}$ 에서 $\vert S\vert=3$ 이고 랭크가 $2$ 다.

## 유한성

$u+v=1$ 의 해는 유한 개다. 생성원 $\varepsilon_1,\dots,\varepsilon_r$ 을 고정하고 $u=\zeta\prod\varepsilon_i^{n_i}$, $v=\zeta'\prod\varepsilon_i^{m_i}$ 로 적는다. 지수가 크면 $S$ 의 어느 자리 $w$ 에서 $\vert u\vert_w$ 가 아주 작거나 아주 크다. 작으면 $\vert v-1\vert_w=\vert u\vert_w$ 가 작아 $\log v=\log\zeta'+\sum m_i\log\varepsilon_i$ 가 $0$ 에 가깝고, 크면 같은 이유로 $\log(-u/v)$ 가 $0$ 에 가깝다.

두 값 모두 로그의 일차형식이다. Baker 정리와 유한 자리에서 쓰는 그 p 진 판(p-adic analogue)은 이 값이 $0$ 이 아니면 지수 크기의 거듭제곱의 역수보다 작지 않다고 준다. 두 한계를 맞추면 $\max(\vert n_i\vert,\vert m_i\vert)$ 가 유계다.

## 유효성

위 논증은 해의 높이에 명시적 상계를 준다. $K$, $S$, $a$, $b$ 로 계산되는 상수 $C$ 가 있어 모든 해가 $h(u)\le C$ 를 만족한다. 그 범위를 탐색하면 해를 전부 찾을 수 있다. [Siegel 의 정수점 정리](siegel-integral-points.md)의 원래 증명은 [Diophantine 근사](diophantine-approximation.md)의 비유효 논법을 써서 정수점의 크기에 상계를 주지 못한다.

## 해의 개수 상계

Evertse 는 $u+v=1$ 의 해가 $3\cdot 7^{\lbrack K:\mathbb Q\rbrack+2\vert S\vert}$ 개 이하임을 보였다[^1]. 상계는 $K$ 의 차수와 $\vert S\vert$ 로만 정해진다. 이 상계는 해의 개수를 셀 뿐 해의 크기를 묶지 않으므로, 해를 찾는 데는 앞 절의 유효 상계를 쓴다.

# 활용

## Thue 방정식

[Thue 방정식](thue-equation.md) $F(x,y)=m$ 의 해 유한성이 S-단위 방정식으로 환원된다. $x^3-2y^3=1$ 에서 $\alpha=2^{1/3}$ 이고 $\omega$ 가 $1$ 의 원시 세제곱근이면 좌변이 세 인자의 곱이다.

$$
(x-\alpha y)(x-\omega\alpha y)(x-\omega^2\alpha y)=1
$$

곱이 $1$ 이고 각 인자가 대수적 정수이므로 세 인자 $\theta_1,\theta_2,\theta_3$ 이 모두 단수다. 세 수가 $x$ 와 $y$ 두 개로 만들어지므로 선형관계가 하나 있다.

$$
(\omega-\omega^2)\theta_1+(\omega^2-1)\theta_2+(1-\omega)\theta_3=0
$$

이 식을 $(\omega^2-\omega)\theta_1$ 로 나누면 두 단수의 비에 상수를 곱한 두 항의 합이 $1$ 이 되어, $au+bv=1$ 꼴의 S-단위 방정식이 나온다. 우변 $m$ 이 $1$ 이 아니면 $m$ 의 소인수를 $S$ 에 넣어 인자들을 S-단위로 만든다.

## 타원곡선의 정수점

Siegel 의 정수점 정리는 [타원곡선](elliptic-curves.md)의 정수점이 유한하다는 진술을 포함한다. Weierstrass 식의 우변을 인수분해해 S-단위 방정식으로 옮기면, 비유효 논법을 쓰지 않고 정수점의 높이에 상계를 얻는다. Baker 방법으로 정수점을 실제로 전부 찾는 알고리즘이 이 환원을 쓴다.

## 항이 여러 개인 단위 방정식

S-단위 $n$ 개의 합 $u_1+\dots+u_n=1$ 은 부분합이 $0$ 이 되는 해를 빼면 해가 유한 개다. 이 일반화의 증명에 Schmidt 부분공간 정리(Schmidt subspace theorem)를 쓴다.

[^1]: Evertse, J.-H. "On equations in S-units and the Thue–Mahler equation", *Inventiones Mathematicae* 75 (1984), 561–584.

# 연관 문서

## 선수지식

- [Dirichlet 단수 정리](dirichlet-unit-theorem.md)
- [Baker 정리](baker-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #algebra
