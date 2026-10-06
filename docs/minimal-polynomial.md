# 최소다항식

# 개요

선형사상 $T$ 를 소멸시키는 다항식, 곧 $p(T)=0$ 인 $p$ 들은 다항식환의 아이디얼을 이룬다. 다항식환이 주 아이디얼 정역이므로 이 아이디얼은 monic 다항식 하나로 생성되고, 그것이 $T$ 의 최소다항식이다. 최소다항식은 특성다항식을 나누고 그와 같은 근을 가지며, 중복인수가 없는 것이 대각화 가능성과 동치다. Jordan 표준형에서는 블록의 최대 크기를, 유리 표준형에서는 마지막 불변인자를 읽는 자리가 최소다항식이다.

# 직관

$A=\begin{pmatrix}2&1\cr 0&2\end{pmatrix}$ 의 $100$ 제곱을 구한다. 행렬 곱을 $99$ 번 하는 대신 [고윳값](eigenvalues.md)으로 간다. 특성다항식이 $(x-2)^2$ 이므로 고윳값은 $2$ 하나이고, $A-2I$ 의 핵은 $(1,0)$ 이 생성하는 한 방향뿐이다. 고유벡터로 기저를 만들 수 없으니 $A$ 를 대각행렬로 바꿀 수 없고, 거듭제곱을 성분마다 $2^{100}$ 으로 계산하는 길이 막힌다.

대각행렬을 못 만드니 $A$ 의 곱셈만으로 간다. $A^2=\begin{pmatrix}4&4\cr 0&4\end{pmatrix}$ 이고 이것은 $4A-4I$ 와 같다. 곧 $A^2-4A+4I=0$ 이다. $A^2$ 이 $A$ 와 $I$ 의 조합이면 $A^3=A\cdot A^2$ 도 그렇고, 모든 거듭제곱이 $A$ 와 $I$ 의 조합이다.

$x^{100}$ 을 $x^2-4x+4$ 로 나눈 나머지를 $ax+b$ 라 하면 $A^{100}=aA+bI$ 다. 나머지를 구하려면 $x^{100}=q(x)(x-2)^2+ax+b$ 에 $x=2$ 를 넣어 $2^{100}=2a+b$ 를 얻고, 양변을 미분해 $100x^{99}=q'(x)(x-2)^2+2q(x)(x-2)+a$ 에 $x=2$ 를 넣어 $a=100\cdot 2^{99}$ 를 얻는다. 그러면 $b=2^{100}-200\cdot 2^{99}=-99\cdot 2^{100}$ 이다.

$$
A^{100}=100\cdot 2^{99}A-99\cdot 2^{100}I
=\begin{pmatrix}2^{100}&100\cdot 2^{99}\cr 0&2^{100}\end{pmatrix}
$$

$99$ 번의 행렬 곱이 나눗셈 한 번으로 끝났다. 계산을 줄인 것은 $A$ 를 소멸시키는 다항식 $x^2-4x+4$ 이고, 그중 차수가 가장 작은 것을 최소다항식이라 한다.

# 정의

$V$ 를 체 $k$ 위의 유한차원 [벡터 공간](vector-spaces.md), $T$ 를 $V$ 에서 $V$ 로 가는 [선형사상](linear-maps.md)이라 하자. $T$ 를 소멸시키는 [다항식](polynomial-rings.md) 전체를 모은 것이 $T$ 의 **소멸자 아이디얼**이다.

$$
I\_T=\lbrace p\in k\lbrack x\rbrack : p(T)=0\rbrace
$$

$I\_T$ 는 $k\lbrack x\rbrack$ 의 아이디얼이다. 합과 스칼라배에서 닫히고, $p(T)=0$ 이면 $(qp)(T)=q(T)p(T)=0$ 이다. 또 $I\_T$ 는 $0$ 아닌 원소를 갖는다. $\dim V=n$ 이면 $\mathrm{End}(V)$ 의 차원이 $n^2$ 이므로 $I,T,\dots,T^{n^2}$ 이 선형종속이고, 그 관계식의 계수가 소멸 다항식을 준다.

$k\lbrack x\rbrack$ 은 주 아이디얼 정역(principal ideal domain, PID)이므로 $I\_T$ 를 생성하는 다항식이 하나 있다. 생성원에 상수배를 곱해 최고차 계수를 $1$ 로 맞춘 것이 유일하게 정해지고, 그 monic 생성원을 $T$ 의 **최소다항식**이라 하고 $m\_T$ 로 쓴다.

$$
I\_T=(m\_T)
$$

행렬 $A\in M\_n(k)$ 의 최소다항식은 $A$ 가 정하는 선형사상의 최소다항식이고 $m\_A$ 로 쓴다. 기저를 바꾸어도 $p(P^{-1}AP)=P^{-1}p(A)P$ 이므로 $m\_A$ 는 달라지지 않는다.

# 성질

## 나눗셈 판정

*정리.* $p\in k\lbrack x\rbrack$ 에 대해 $p(T)=0$ 인 것과 $m\_T\mid p$ 인 것이 동치다.

*증명의 요지.* $(m\_T)=I\_T$ 의 정의가 그대로 한쪽을 준다. 생성원임을 직접 보려면 나눗셈 정리로 $p=qm\_T+r$ , $\deg r\lt\deg m\_T$ 로 쓰고 $T$ 를 대입한다. $r(T)=p(T)-q(T)m\_T(T)=0$ 이므로 $r$ 이 $m\_T$ 보다 차수가 낮은 소멸 다항식이고, 최소성에서 $r=0$ 이다. ∎

차수가 가장 작은 monic 소멸 다항식이 둘 있으면 서로를 나누므로 같다. 최소다항식의 유일성이 이것이다.

## 특성다항식과의 관계

*정리.* $m\_T$ 는 특성다항식 $\chi\_T$ 를 나눈다. 따라서 $\chi\_T(T)=0$ 이고 $\deg m\_T\le n$ 이다[^2].

*증명의 요지.* $x\cdot v=Tv$ 로 $V$ 에 $k\lbrack x\rbrack$ [가군](modules.md) 구조를 주면 [PID 위의 유한생성 가군](finitely-generated-modules.md) 구조정리가 불변인자 분해를 준다.

$$
V\cong k\lbrack x\rbrack/(d\_1)\oplus\cdots\oplus k\lbrack x\rbrack/(d\_k),
\qquad d\_1\mid d\_2\mid\cdots\mid d\_k
$$

$p$ 가 $V$ 전체를 소멸시키는 것은 모든 $i$ 에서 $d\_i\mid p$ 인 것이고, 나누어짐의 사슬 때문에 이는 $d\_k\mid p$ 와 같다. 곧 $m\_T=d\_k$ 다. [유리 표준형](rational-canonical-form.md)에서 $\chi\_T=d\_1d\_2\cdots d\_k$ 이므로 $d\_k$ 가 $\chi\_T$ 를 나눈다. ∎

$\chi\_T(T)=0$ 이 Cayley–Hamilton 정리다. $k=1$ 인 경우, 곧 $m\_T=\chi\_T$ 인 경우를 순환 사상이라 하고, 이때 $V$ 는 한 벡터와 그 상들로 생성된다.

## 근의 집합

*정리.* $m\_T$ 와 $\chi\_T$ 는 $k$ 의 확대체에서 같은 근을 갖는다. 곧 $m\_T(\lambda)=0$ 인 것과 $\lambda$ 가 $T$ 의 고윳값인 것이 동치다.

*증명의 요지.* $m\_T\mid\chi\_T$ 이므로 $m\_T$ 의 근은 $\chi\_T$ 의 근이다. 반대로 $Tv=\lambda v$ , $v\neq 0$ 이면 $T^jv=\lambda^jv$ 이므로 $0=m\_T(T)v=m\_T(\lambda)v$ 이고, $v\neq 0$ 에서 $m\_T(\lambda)=0$ 이다. ∎

두 다항식은 근의 중복도에서 갈린다. $\chi\_T$ 의 중복도가 대수적 중복도인 반면 $m\_T$ 의 중복도는 그 고윳값에서 쌓인 사슬의 길이다.

## 대각화 판정

*정리.* $T$ 가 대각화 가능한 것과 $m\_T$ 가 $k$ 안에서 서로 다른 일차식들의 곱인 것이 동치다[^1].

*증명의 요지.* 대각화되면 서로 다른 고윳값 $\lambda\_1,\dots,\lambda\_r$ 에 대해 $\prod\_i(T-\lambda\_iI)$ 가 각 고유벡터를 $0$ 으로 보내므로 소멸 다항식이고, 앞의 나눗셈 판정으로 $m\_T$ 가 그것을 나눈다. 역으로 $m\_T=\prod\_i(x-\lambda\_i)$ 가 서로 다른 일차식들의 곱이면 중국인의 나머지 정리로 다음이 성립한다.

$$
k\lbrack x\rbrack/(m\_T)\cong\bigoplus\_{i=1}^{r}k\lbrack x\rbrack/(x-\lambda\_i)
$$

$V$ 는 $k\lbrack x\rbrack/(m\_T)$ 가군이므로 이 분해가 $V=\bigoplus\_i\ker(T-\lambda\_iI)$ 를 주고, 고유공간의 기저를 모으면 대각화하는 기저다. ∎

$k$ 가 대수적으로 닫혀 있지 않으면 $m\_T$ 가 일차식으로 분해되지 않아 대각화가 막힌다. $\mathbb Q$ 위에서 $\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 의 최소다항식은 $x^2+1$ 이고 중복인수가 없지만 $\mathbb Q$ 에서 일차식의 곱이 아니다.

## 직합과 제한

$V=W\_1\oplus W\_2$ 가 $T$ 불변 분해이고 $T\_i$ 가 $W\_i$ 로의 제한이면 다음이 성립한다.

$$
m\_T=\mathrm{lcm}(m\_{T\_1},m\_{T\_2})
$$

$p(T)=0$ 인 것이 두 제한을 모두 소멸시키는 것과 같기 때문이다. $T$ 불변 부분공간 $W$ 에 대해 $m\_{T\vert W}$ 는 항상 $m\_T$ 를 나눈다.

## 멱영 판정

$T$ 가 멱영인 것과 $m\_T=x^e$ 인 것이 동치이고, 이때 $e$ 는 $T^e=0$ 인 가장 작은 지수다. 특성다항식이 $x^n$ 인 것으로도 멱영을 판정할 수 있으나 $e$ 는 읽히지 않는다.

## 유사 판정의 한계

$m\_T$ 와 $\chi\_T$ 를 함께 알아도 유사류는 결정되지 않는다. $n=4$ 에서 $J\_2(0)\oplus J\_2(0)$ 과 $J\_2(0)\oplus J\_1(0)\oplus J\_1(0)$ 은 최소다항식이 둘 다 $x^2$ 이고 특성다항식이 둘 다 $x^4$ 이지만 유사하지 않다. 불변인자 전체 또는 [Jordan 표준형](jordan-canonical-form.md)의 블록 목록이 있어야 분류가 끝난다.

# 활용

- Jordan 표준형에서 $m\_T=\prod\_\lambda(x-\lambda)^{e\_\lambda}$ 이고 $e\_\lambda$ 는 고윳값 $\lambda$ 의 블록 가운데 최대 크기다. 모든 $e\_\lambda=1$ 인 것이 위의 대각화 판정이다.
- 유리 표준형에서 $m\_T$ 는 마지막 불변인자 $d\_k$ 다. 동반행렬 하나로 된 유리 표준형은 $m\_T=\chi\_T$ 인 경우다.
- $\deg m\_T=d$ 이면 $T$ 의 임의의 다항식이 $I,T,\dots,T^{d-1}$ 의 선형결합이다. $T$ 가 가역이면 $m\_T$ 의 상수항이 $0$ 이 아니므로 $m\_T(T)=0$ 을 $T$ 로 묶어 $T^{-1}$ 을 이 조합으로 적을 수 있다.
- [Krylov 부분공간 방법](krylov-subspace-methods.md)은 초기 잔차 $r\_0$ 에 대한 $A$ 의 최소다항식 차수만큼 반복하면 정확한 해에 닿는다. 그 차수는 $\deg m\_A$ 를 넘지 않는다.
- [체의 확대](field-extensions.md) $k(\alpha)/k$ 에서 $\alpha$ 를 곱하는 사상 $\mu\_\alpha$ 는 $k(\alpha)$ 의 선형사상이고, $\mu\_\alpha$ 의 최소다항식이 대수적 원소 $\alpha$ 의 최소다항식이다. $k(\alpha)$ 가 정역이므로 이 다항식은 기약이고, 그 차수가 확대의 차수다.
- [군의 표현](group-representations.md)에서 위수 $g$ 인 원소의 표현 행렬은 $x^g-1$ 로 소멸되므로 최소다항식이 $x^g-1$ 을 나눈다. 표수가 $g$ 를 나누지 않는 체에서 $x^g-1$ 은 중복인수가 없고, 따라서 그 행렬이 대각화된다.

[^1]: K. Hoffman, R. Kunze, *Linear Algebra*, 2nd ed., Chapter 6 (Elementary Canonical Forms) — 소멸자 아이디얼, 최소다항식의 유일성, 대각화 판정. https://www.cin.ufpe.br/~jrsl/Books/Linear%20Algebra%20-%20Hoffman%20%26%20Kunze%20.pdf

[^2]: D. S. Dummit, R. M. Foote, *Abstract Algebra*, 3rd ed., Section 12.2 (The Rational Canonical Form) — 불변인자와 최소다항식의 일치, Cayley–Hamilton 정리.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [고윳값](eigenvalues.md)

## 더 알아보기

- [Jordan 표준형](jordan-canonical-form.md)

#linear_algebra #algebra #ring_theory
