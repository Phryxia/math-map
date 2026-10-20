# 사원수 대수

# 개요

**사원수 대수(quaternion algebra)** 는 체 $F$ 위의 4 차원 결합대수로, 기저 $1,i,j,k$ 와 관계 $i^2=a$, $j^2=b$, $ij=-ji=k$ 로 정해지는 대수 $(a,b)\_F$ 다. 실수 위의 Hamilton 사원수 $\mathbb H=(-1,-1)\_{\mathbb R}$ 가 예다.

사원수 대수는 행렬 대수 $M_2(F)$ 이거나 나눗셈 대수이고, 어느 쪽인지는 노름형식이라는 4 변수 [이차형식](quadratic-forms.md)이 $0$ 을 표현하는지로 정해진다. 수체 위에서는 나눗셈 대수가 되는 자리의 집합이 대수를 결정한다.

# 직관

[나눗셈 대수](division-algebras.md)의 $\mathbb H$ 는 노름 $N(t+xi+yj+zk)=t^2+x^2+y^2+z^2$ 가 $0$ 아닌 원소에서 양수이므로 역원이 있다. 같은 관계를 유리수 계수로 쓴 $(-1,-1)\_{\mathbb Q}$ 도 노름이 같으므로 나눗셈 대수다. 계수를 바꾼 $(1,1)\_{\mathbb Q}$ 에서는 $i^2=1$ 이라 $(1-i)(1+i)=0$ 이고, 영인자가 있으므로 나눗셈 대수가 아니다.

$(a,b)\_{\mathbb Q}$ 의 노름은 $t^2-ax^2-by^2+abz^2$ 이다. 이 식이 $0$ 아닌 $(t,x,y,z)$ 에서 $0$ 이 되면 그 원소와 켤레의 곱이 $0$ 이라 영인자가 생기고, 그렇지 않으면 모든 $0$ 아닌 원소에 역원이 있다. 그래서 나눗셈 대수인지는 이차형식이 $0$ 을 표현하는지의 문제다.

이차형식이 $\mathbb Q$ 에서 $0$ 을 표현하는지는 Hasse–Minkowski 정리로 각 $\mathbb Q_p$ 와 $\mathbb R$ 에서 따로 판정된다. $(-1,-1)$ 의 노름 $t^2+x^2+y^2+z^2$ 는 $\mathbb R$ 에서 $0$ 을 표현하지 않는다. $\mathbb Q_2$ 에서도 표현하지 않는다. 2 진 정수의 제곱은 $8$ 을 법으로 $0,1,4$ 이므로 $-1\equiv7\pmod8$ 이 세 제곱수의 합이 되지 않고, 이것이 [Gauss 세 제곱수 정리](three-squares-theorem.md)의 제외 조건이다. 홀수 소수 $p$ 에서는 $-1$ 이 $\mathbb Q_p$ 의 두 제곱수의 합이므로 표현한다. 그래서 $(-1,-1)\_{\mathbb Q}$ 가 나눗셈 대수가 되는 자리는 $2$ 와 $\infty$ 두 개다.

# 정의

$F$ 를 표수가 $2$ 가 아닌 체, $a,b\in F^{\times}$ 라 한다.

## 사원수 대수

$(a,b)\_F$ 는 $F$ 위의 기저 $1,i,j,k$ 와 다음 곱셈으로 정한 결합대수다.

$$
i^2=a,\qquad j^2=b,\qquad ij=-ji=k
$$

$k^2=-ab$ 이고 $(a,b)\_F$ 의 중심은 $F$ 다. 이런 꼴의 대수와 동형인 $F$ 대수를 **사원수 대수**라 한다.

## 켤레, 대각합, 노름

$x=t+xi+yj+zk$ 의 켤레는 $\bar x=t-xi-yj-zk$ 다. **축약 대각합(reduced trace)** 과 **축약 노름(reduced norm)** 은

$$
\mathrm{trd}(x)=x+\bar x=2t,\qquad \mathrm{nrd}(x)=x\bar x=t^2-ax^2-by^2+abz^2
$$

이다. 모든 $x$ 가 $x^2-\mathrm{trd}(x)\thinspace x+\mathrm{nrd}(x)=0$ 을 만족하고, $\mathrm{nrd}(xy)=\mathrm{nrd}(x)\mathrm{nrd}(y)$ 다. $\mathrm{nrd}$ 를 대수의 **노름형식(norm form)** 이라 한다.

## 분기

$B$ 가 $M_2(F)$ 와 동형이면 $B$ 가 **분해된다(split)** 고 한다. $F$ 가 수체이고 $v$ 가 그 자리일 때 $B\_v=B\otimes_F F_v$ 가 나눗셈 대수이면 $B$ 가 $v$ 에서 **분기한다(ramified)** 고 하고, 그런 자리의 집합을 $\mathrm{Ram}(B)$ 로 쓴다.

# 성질

## 분해 판정

**정리.** 다음이 동치다.[^1]

1. $(a,b)\_F\cong M_2(F)$ 이다.
2. $(a,b)\_F$ 에 영인자가 있다.
3. 노름형식 $\mathrm{nrd}$ 가 $0$ 아닌 벡터에서 $0$ 이 된다.
4. $ax^2+by^2=z^2$ 이 $0$ 아닌 해를 갖는다.
5. $b$ 가 $F(\sqrt a)$ 에서 오는 노름이다($a$ 가 제곱이면 항상 성립한다).

1 과 2 의 동치는 4 차원 중심단순대수가 $M_2(F)$ 이거나 나눗셈 대수라는 Wedderburn 정리에서 나온다. $(1,b)\_F$ 와 $(a,-a)\_F$ 는 항상 분해된다.

## 동형 판정

$(a,b)\_F\cong(b,a)\_F\cong(a,-ab)\_F\cong(ac^2,b)\_F$ 이다. 두 사원수 대수가 동형인 것과 노름형식이 동치인 것이 동치이고, 대각합이 $0$ 인 원소에 $\mathrm{nrd}$ 를 제한한 3 변수 형식 $-ax^2-by^2+abz^2$ 이 스칼라배를 허용해 동치인 것과도 동치다.[^1]

## 국소체와 대역체

- $\mathbb C$ 위의 사원수 대수는 전부 분해된다. $\mathbb R$ 위에서는 $M_2(\mathbb R)$ 와 $\mathbb H$ 둘뿐이다.
- $p$ 진 국소체 위에는 분해되지 않는 사원수 대수가 동형을 법으로 정확히 하나 있다.
- 수체 $F$ 위의 사원수 대수 $B$ 에서 $\mathrm{Ram}(B)$ 는 유한집합이고 원소의 개수가 짝수다. 역으로 복소 자리를 포함하지 않는 짝수 개의 자리의 집합마다 그 집합을 $\mathrm{Ram}$ 으로 갖는 사원수 대수가 동형을 법으로 하나 있다.[^1]

짝수 조건은 [Brauer 군](brauer-groups.md)의 Hilbert 기호의 곱 공식 $\prod_v(a,b)\_v=1$ 이다. $\mathbb Q$ 위에서 $\mathrm{Ram}(B)=\lbrace p,\infty\rbrace$ 인 대수를 $B\_{p,\infty}$ 로 쓰고, 직관 절의 $(-1,-1)\_{\mathbb Q}$ 가 $B\_{2,\infty}$ 다.

$\mathbb Q$ 위에서 $\infty\in\mathrm{Ram}(B)$ 이면 $B\otimes\mathbb R\cong\mathbb H$ 이므로 $B$ 를 **정부호(definite)**, 아니면 **부정부호(indefinite)** 라 한다.

## 순서

$B$ 가 $\mathbb Q$ 위의 사원수 대수일 때 $\mathbb Z$ 위의 계수 $4$ 격자이면서 부분환인 $\mathcal O\subseteq B$ 를 **순서(order)** 라 하고, 포함관계로 극대인 것을 **극대 순서(maximal order)** 라 한다.

$B\_{2,\infty}$ 에서 $\mathbb Z\lbrack i,j,k\rbrack$ 는 극대가 아니고, $(1+i+j+k)/2$ 를 더한 **Hurwitz 순서(Hurwitz order)** 가 극대 순서다. 그 단위군은 위수 $24$ 이고, 이 순서에서 모든 왼쪽 아이디얼이 주 아이디얼이다. [Lagrange 네 제곱수 정리](four-squares-theorem.md)의 사원수 증명이 이 성질을 쓴다.

## 유형수와 질량

정부호 $B\_{p,\infty}$ 의 극대 순서 $\mathcal O$ 의 왼쪽 아이디얼류를 $I_1,\dots,I_h$ 라 하고 $\mathcal O_i$ 를 $I_i$ 의 오른쪽 순서라 하면 Eichler 의 질량 공식(Eichler mass formula)이 성립한다.[^2]

$$
\sum_{i=1}^{h}\frac{1}{\char35{}\mathcal O_i^{\times}}=\frac{p-1}{24}
$$

$p=2$ 에서 $h=1$ 이고 Hurwitz 순서의 단위군이 위수 $24$ 이므로 양변이 $1/24$ 다. 부정부호 대수에서는 강근사(strong approximation)로 $\mathbb Q$ 위의 극대 순서가 모두 켤레이고 류수가 $1$ 이다.

# 활용

- [Jacquet–Langlands 대응](jacquet-langlands.md): 사원수 대수의 곱셈군 $B^{\times}$ 가 $\mathrm{GL}\_2$ 의 내부형식이고, $B^{\times}$ 의 자기동형 표현이 $\mathrm{Ram}(B)$ 에서 이산 급수인 $\mathrm{GL}\_2$ 의 표현과 대응한다.
- [Deuring 대응](deuring-correspondence.md): 표수 $p$ 의 초특이 타원곡선의 자기준동형환이 $B\_{p,\infty}$ 의 극대 순서이고, 질량 공식의 좌변이 초특이 타원곡선의 자기동형군 위수로 다시 쓰인다.
- [질량 공식](mass-formula.md): 정부호 사원수 대수의 질량을 이차형식의 질량과 같은 꼴로 계산한다.
- [Ramanujan 그래프](ramanujan-graphs.md): LPS(Lubotzky–Phillips–Sarnak) 구성이 $B\_{2,\infty}$ 와 같은 정부호 대수의 정수 원소로 생성원을 정한다.
- [쌍곡 3 다양체](hyperbolic-3-manifolds.md): 수체 위의 사원수 대수의 순서의 단위군이 산술 Klein 군을 준다.

[^1]: J. Voight, *Quaternion Algebras*, Graduate Texts in Mathematics 288, Springer, 2021, 5장, 12장, 14장.
[^2]: J. Voight, 같은 책, 25장.

# 연관 문서

## 선수지식

- [나눗셈 대수](division-algebras.md)
- [이차형식](quadratic-forms.md)

## 더 알아보기

- [Deuring 대응](deuring-correspondence.md)
- [Jacquet–Langlands 대응](jacquet-langlands.md)

#number_theory #algebra #ring_theory
