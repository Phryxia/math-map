# 토릭 아이디얼

# 개요

**토릭 아이디얼(toric ideal)** 은 변수마다 단항식을 대입했을 때 $0$ 이 되는 다항식 전체의 아이디얼이다. $a=s^2$, $b=st$, $c=t^2$ 로 놓으면 $b^2$ 과 $ac$ 가 둘 다 $s^2t^2$ 이 되므로 $b^2-ac$ 가 이 아이디얼에 든다.

이런 관계는 언제나 두 단항식의 차로 생성되고, 두 단항식의 지수의 차는 정수 행렬의 영공간에 든 벡터다. 그래서 단항식 사이의 관계를 찾는 문제가 정수 벡터의 계산이 되고, 그 계산이 [토릭 다양체](toric-varieties.md)의 방정식, 정수 계획법의 개선 방향, 분할표의 표본 추출에 함께 쓰인다.

# 직관

$a=s^2$, $b=st$, $c=t^2$ 에서 단항식 $a^{u_1}b^{u_2}c^{u_3}$ 은 $s^{2u_1+u_2}t^{u_2+2u_3}$ 이 된다. 지수만 보면 열이 $(2,0)$, $(1,1)$, $(0,2)$ 인 행렬 $A$ 를 $u=(u_1,u_2,u_3)$ 에 곱한 것이다.

$$
A=\begin{pmatrix}2&1&0\cr 0&1&2\end{pmatrix}
$$

두 단항식이 같은 것이 되는 것은 $Au=Av$ 일 때다. $b^2$ 과 $ac$ 는 $A(0,2,0)=A(1,0,1)=(2,2)$ 이고, 차 $(1,-2,1)$ 이 $A$ 의 정수 영공간을 생성한다. 이 경우 관계는 $b^2-ac$ 하나로 생성된다.

변수를 넷으로 늘려 $a=s^3$, $b=s^2t$, $c=st^2$, $d=t^3$ 으로 둔다. 영공간은 $(1,-2,1,0)$ 과 $(0,1,-2,1)$ 이 생성하고, 두 벡터에서 $b^2-ac$ 와 $c^2-bd$ 가 나온다. 둘의 합 $(1,-1,-1,1)$ 에서 나오는 $ad-bc$ 도 관계다.

$ad-bc$ 는 앞의 두 식으로 만들어지지 않는다. $b=c=0$ 이면 앞의 두 식은 $a$, $d$ 에 상관없이 $0$ 이지만 $ad-bc=ad$ 는 $0$ 이 아니다. 영공간의 기저에서 나온 관계만으로는 부족하다.

# 정의

정수 행렬 $A$ 의 열을 $a_1,\dots,a_n\in\mathbb Z^d$ 라 한다. 체 $k$ 위에서 다음 환 준동형을 둔다.

$$
\varphi_A:k\lbrack x_1,\dots,x_n\rbrack\to k\lbrack t_1^{\pm1},\dots,t_d^{\pm1}\rbrack,\qquad x_j\mapsto t^{a_j}
$$

그 핵 $I_A=\ker\varphi_A$ 를 $A$ 의 **토릭 아이디얼** 이라 한다. 직관 절의 첫 예에서 $I_A=(b^2-ac)$ 다.

정수 벡터 $u$ 를 양의 성분과 음의 성분으로 나누어 $u=u^+-u^-$ 로 쓴다. $x^{u^+}-x^{u^-}$ 꼴의 다항식을 **이항식(binomial)** 이라 한다. 직관 절의 $(1,-1,-1,1)$ 에서 $u^+=(1,0,0,1)$, $u^-=(0,1,1,0)$ 이고 이항식은 $ad-bc$ 다.

# 성질

## 이항식 생성

$I_A$ 는 $u\in\ker\_{\mathbb Z}A$ 에 대한 이항식 $x^{u^+}-x^{u^-}$ 들로 생성된다[^1].

증명의 요지. $\varphi_A$ 는 단항식을 단항식으로 보낸다. $f\in I_A$ 의 항을 같은 단항식으로 가는 것끼리 묶으면, 묶음마다 계수의 합이 $0$ 이다. 그래서 각 묶음은 같은 상을 갖는 단항식들의 차의 일차결합이고, $Au=Av$ 인 $x^u-x^v$ 는 공통 인수를 빼면 $\ker\_{\mathbb Z}A$ 의 벡터의 이항식이다.

$\varphi_A$ 의 상은 정역의 부분환이므로 $I_A$ 는 소아이디얼이다.

## 격자 기저 아이디얼과 포화

$\ker\_{\mathbb Z}A$ 의 격자 기저에서 나온 이항식들이 생성하는 아이디얼을 $J$ 라 한다. $J\subseteq I_A$ 이고, 변수의 곱 $x_1\cdots x_n$ 으로 포화하면 같아진다[^1].

$$
I_A=\bigl(J:(x_1\cdots x_n)^\infty\bigr)
$$

직관 절의 넷째 예에서 $J=(b^2-ac,\thinspace c^2-bd)$ 다. $bc(ad-bc)$ 는 $J$ 에 들지만 $ad-bc$ 는 들지 않는다. 좌표 초평면 위의 여분 성분 $b=c=0$ 이 포화로 사라진다.

## Gröbner 기저

[Gröbner 기저](groebner-bases.md)를 계산하는 Buchberger 알고리즘은 이항식들의 S 다항식과 나머지를 다시 이항식으로 만든다. 그래서 $I_A$ 의 모든 축소 Gröbner 기저는 이항식으로 이루어진다.

$A$ 의 성분이 음이 아니면 $I_A$ 는 다음 아이디얼에서 $t$ 변수를 소거해 얻는다.

$$
I_A=\bigl(x_1-t^{a_1},\dots,x_n-t^{a_n}\bigr)\cap k\lbrack x_1,\dots,x_n\rbrack
$$

Gröbner 기저 문서의 소거 정리로 계산한다. 모든 항 순서의 축소 Gröbner 기저를 합친 보편 Gröbner 기저는 [Graver 기저](graver-basis.md)의 이항식에 포함된다[^1].

## Markov 기저

정수 벡터의 유한집합 $\mathcal M\subset\ker\_{\mathbb Z}A$ 가 다음을 만족하면 **Markov 기저(Markov basis)** 라 한다. $Au=Av$ 인 음이 아닌 정수 벡터 $u$, $v$ 는 $\pm\mathcal M$ 의 원소를 차례로 더해 서로 이어지고, 중간의 벡터도 모두 음이 아니다.

Diaconis 와 Sturmfels 는 $\mathcal M$ 이 Markov 기저일 필요충분조건이 $\lbrace x^{m^+}-x^{m^-}:m\in\mathcal M\rbrace$ 가 $I_A$ 를 생성하는 것임을 보였다[^2]. 직관 절의 넷째 예에서 $(1,-2,1,0)$ 과 $(0,1,-2,1)$ 만으로는 $u=(1,0,0,1)$ 에서 $v=(0,1,1,0)$ 으로 갈 수 없다. 두 벡터 어느 쪽을 더하거나 빼도 음의 성분이 생긴다.

# 활용

- 토릭 다양체의 방정식. $I_A$ 의 영점 집합은 단항식 사상 $t\mapsto(t^{a_1},\dots,t^{a_n})$ 의 상의 폐포이고, 토릭 다양체 문서의 원뿔 $xy=z^2$ 이 직관 절의 첫 예다.
- 정수 계획법. Conti 와 Traverso 는 $Au=b$, $u\ge 0$ 에서 $c\cdot u$ 를 최소화하는 문제를, $c$ 로 정한 항 순서의 $I_A$ 의 Gröbner 기저로 단항식 $x^u$ 의 나머지를 구해 풀었다[^3]. 나머지의 지수가 최적해다.
- 분할표의 정확 검정. 행과 열의 합이 고정된 분할표 전체 위에서 [Markov 연쇄](markov-chains.md)를 돌릴 때, $I_A$ 의 생성원이 연쇄의 이동이다. $2\times 2$ 표에서는 대각에 $+1$, 반대각에 $-1$ 을 더하는 이동 하나가 Markov 기저다[^2].

[^1]: B. Sturmfels, *Gröbner Bases and Convex Polytopes*, University Lecture Series 8, American Mathematical Society, 1996.
[^2]: P. Diaconis, B. Sturmfels, "Algebraic algorithms for sampling from conditional distributions", *The Annals of Statistics* 26 (1998), 363–397.
[^3]: P. Conti, C. Traverso, "Buchberger algorithm and integer programming", in *Applied Algebra, Algebraic Algorithms and Error-Correcting Codes (AAECC-9)*, Lecture Notes in Computer Science 539, Springer, 1991, 130–139.

# 연관 문서

## 선수지식

- [Gröbner 기저](groebner-bases.md)
- [토릭 다양체](toric-varieties.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #combinatorics #optimization
