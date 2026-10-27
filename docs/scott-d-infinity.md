# Scott 의 D∞ 모형

# 개요

**Scott 의 D∞ 모형(Scott's D-infinity model)** 은 원소 하나하나가 그 자체로 자기 자신 위의 함수가 되는 수학적 공간이다. [Lambda calculus](lambda-calculus.md)의 항 $\lambda x.\thinspace xx$ 는 인자를 자기 자신에 적용하므로, 이 항에 뜻을 주려면 집합 $D$ 와 $D$ 에서 $D$ 로 가는 함수 전체가 일대일로 대응해야 하는데 원소가 둘 이상인 집합에서는 대각선 논법으로 그런 대응이 없다. Scott 은 모든 함수 대신 연속 사상만 세고 유한 단계의 근사를 이어 극한을 잡아, $D_\infty\cong\lbrack D_\infty\to D_\infty\rbrack$ 인 공간을 만들었다.

# 직관

Scott 의 D∞ 모형은 자기 자신에서 자기 자신으로 가는 연속 사상의 공간과 동형인 비자명한 cpo(complete partial order) $D_\infty\cong\lbrack D_\infty\to D_\infty\rbrack$ 이다. Scott 이 1969 년에 역극한으로 구성했고, Lambda calculus의 첫 수학적 모형이다[^1].

구성에는 [영역 이론](domain-theory.md)의 두 도구를 쓴다. 집합의 모든 함수 대신 Scott 연속 사상만 세고, 유한 단계의 근사 $D_0,D_1,D_2,\dots$ 를 매장과 사영으로 이어 극한을 잡는다.

Lambda calculus 의 항 $\lambda x.\thinspace xx$ 는 인자 $x$ 를 $x$ 자신에 적용한다. 이 항에 집합론의 뜻을 주려면 집합 $D$ 의 원소가 각자 $D$ 에서 $D$ 로 가는 함수여야 하고, $D$ 와 함수 전체의 집합 $D^D$ 사이에 일대일 대응이 있어야 한다. 원소가 둘 이상이면 $D^D$ 는 $D$ 의 부분집합 전체만큼 크므로 $D$ 보다 크고, 그런 대응은 없다.

함수를 Scott 연속 사상으로 줄이면 사정이 달라진다. 두 원소 $\bot\sqsubseteq\top$ 의 cpo $D_0$ 에서 시작한다. $D_0$ 에서 $D_0$ 로 가는 단조 사상은 상수 $\bot$, 항등, 상수 $\top$ 셋이고 이것이 $D_1=\lbrack D_0\to D_0\rbrack$ 이다. $D_2=\lbrack D_1\to D_1\rbrack$ 은 세 원소 사슬 위의 단조 사상 $10$ 개다. $D_0$ 의 원소 $x$ 를 상수 사상으로 보면 $D_0$ 가 $D_1$ 안에 들어가고, 같은 방법으로 $D_1$ 이 $D_2$ 안에, $D_2$ 가 $D_3$ 안에 들어간다.

각 $D_{n+1}$ 은 $D_n$ 위의 사상 공간이고 $D_n$ 을 부분으로 포함한다. 연속 사상은 유한 단계 근사들의 값으로 정해지므로, 사슬 전체의 극한 $D_\infty$ 위의 연속 사상 공간이 다시 $D_\infty$ 다.

# 정의

## Scott 위상

cpo $D$ 의 부분집합 $U$ 가 다음 두 조건을 만족하면 **Scott 열린집합(Scott open set)** 이라 한다.

- $x\in U$ 이고 $x\sqsubseteq y$ 이면 $y\in U$ 다.
- 방향집합 $A$ 의 상한이 $U$ 에 속하면 $A\cap U\ne\varnothing$ 이다.

Scott 열린집합 전체가 **Scott 위상(Scott topology)** 이다. 둘째 조건은 극한에서 관측되는 성질이 유한 단계 근사에서 이미 관측된다는 뜻이다.

## 사상 공간

두 cpo $D,E$ 사이의 Scott 연속 사상 전체를 $\lbrack D\to E\rbrack$ 라 쓰고 점마다 비교하는 순서 $f\sqsubseteq g\iff\forall x\thinspace f(x)\sqsubseteq g(x)$ 를 준다. 방향집합의 상한도 점마다 잡으므로 $\lbrack D\to E\rbrack$ 는 cpo 다.

## 매장과 사영의 쌍

연속 사상의 쌍 $e:D\to E$, $p:E\to D$ 가 다음을 만족하면 **매장 사영 쌍(embedding-projection pair)** 이라 한다.

$$
p\circ e=\mathrm{id}\_D,\qquad e\circ p\sqsubseteq\mathrm{id}\_E
$$

$e$ 는 $D$ 를 $E$ 안에 넣고, $p$ 는 $E$ 의 원소를 $D$ 에서 가장 가까운 아래쪽 근사로 보낸다.

## D∞ 의 구성

$D_0$ 를 cpo 로 두고 $D_{n+1}=\lbrack D_n\to D_n\rbrack$ 이라 한다. 매장 사영 쌍 $(e_n,p_n):D_n\rightleftarrows D_{n+1}$ 을 귀납으로 정한다.

$$
e_0(x)=\lambda y.\thinspace x,\qquad p_0(f)=f(\bot)
$$

$$
e_{n+1}(f)=e_n\circ f\circ p_n,\qquad p_{n+1}(g)=p_n\circ g\circ e_n
$$

$D_\infty$ 는 $p_n(x_{n+1})=x_n$ 을 모든 $n$ 에서 만족하는 열 $(x_0,x_1,x_2,\dots)$ 전체이고, 순서는 성분마다 비교한다. 이것이 사영들의 **역극한(inverse limit)** 이다.

# 성질

## 연속성과 위상

> **정리.** 두 cpo 사이의 사상이 Scott 연속인 것과 Scott 위상에 대해 연속인 것이 동치다.

증명의 요지. Scott 연속 사상의 열린집합 역상이 두 조건을 만족함을 직접 확인한다. 역으로 위상적으로 연속인 사상은 특수화 순서를 보존하므로 단조다. 상한의 보존은 원소 $u$ 에 대해 $\lbrace z:z\not\sqsubseteq u\rbrace$ 가 Scott 열린집합이라는 것을 $u=\bigsqcup f(A)$ 에 적용해 얻는다.

## 고정점 방정식의 해

> **정리 (Scott).** $D_0$ 가 원소를 둘 이상 가지면 $D_\infty$ 는 비자명한 cpo 이고, $D_\infty\cong\lbrack D_\infty\to D_\infty\rbrack$ 이다[^1].

증명의 요지. $x\in D_\infty$ 를 사상으로 보는 적용을 다음으로 정한다.

$$
x\cdot y=\bigsqcup_{n}x_{n+1}(y_n)
$$

$x_{n+1}$ 은 $D_n$ 위의 사상이고 $y_n$ 은 $y$ 의 $n$ 번째 성분이다. 우변의 열은 $n$ 에 대해 증가하므로 상한이 있고, $x\mapsto(y\mapsto x\cdot y)$ 가 $D_\infty$ 에서 $\lbrack D_\infty\to D_\infty\rbrack$ 로 가는 연속 사상이다. 역사상은 연속 사상 $f$ 에 $f_{n+1}=p_{\infty,n}\circ f\circ e_{n,\infty}$ 인 열을 대응시킨다. $e_{n,\infty}$ 와 $p_{\infty,n}$ 은 $D_n$ 과 $D_\infty$ 사이의 표준 매장과 사영이다. 두 사상의 합성이 항등임은 각 성분에서 $e_n\circ p_n$ 이 위로 증가해 항등으로 수렴한다는 것에서 나온다.

## λ 모형

$D_\infty\cong\lbrack D_\infty\to D_\infty\rbrack$ 를 써서 Lambda calculus 의 항에 값을 준다. 변수에 $D_\infty$ 의 원소를 배정하는 환경 $\rho$ 에서 적용은 위의 $x\cdot y$, 추상 $\lambda x.\thinspace M$ 은 $d\mapsto\lbrack\thinspace M\thinspace\rbrack\_{\rho\lbrack x\mapsto d\rbrack}$ 라는 연속 사상의 상이다. $\beta$ 환원과 $\eta$ 환원으로 같아지는 항은 같은 값을 받는다.

> **정리 (Hyland, Wadsworth).** 두 닫힌 항이 $D_\infty$ 에서 같은 값을 받는 것과, 두 항의 Böhm 나무가 무한 $\eta$ 확장까지 같은 것이 동치다[^2].

그래서 머리 정규형이 없는 항은 모두 최소원 $\bot$ 으로 간다. $(\lambda x.\thinspace xx)(\lambda x.\thinspace xx)$ 가 그런 항이다.

# 활용

- **재귀적 자료형.** $D\cong\lbrack D\to D\rbrack$ 에 쓴 역극한 방법은 $D\cong 1+D\times D$ 같은 다른 영역 방정식에도 같은 꼴로 쓰인다. 리스트와 트리의 표시적 의미가 이 해로 정해진다.
- **고정점 결합자.** $Y=\lambda f.\thinspace(\lambda x.\thinspace f(xx))(\lambda x.\thinspace f(xx))$ 의 $D_\infty$ 에서의 값은 [영역 이론](domain-theory.md)의 Kleene 고정점 정리가 주는 최소 고정점 연산자와 같다.
- **관측 동치.** 위 Hyland–Wadsworth 정리로 $D_\infty$ 의 등식은 항을 어떤 문맥에 넣어도 머리 정규형을 가질지가 같다는 관측 동치와 같다.

[^1]: D. S. Scott, *Continuous lattices*, Toposes, Algebraic Geometry and Logic, LNM 274 (1972), 97–136.
[^2]: H. P. Barendregt, *The Lambda Calculus: Its Syntax and Semantics*, North-Holland (1984), Ch. 18–19. J. M. E. Hyland, *A syntactic characterization of the equality in some models for the lambda calculus*, J. London Math. Soc. 12 (1976), 361–370. C. P. Wadsworth, *The relation between computational and denotational properties for Scott's D∞-models of the lambda-calculus*, SIAM J. Comput. 5 (1976), 488–521.

# 연관 문서

## 선수지식

- [영역 이론](domain-theory.md)
- [Lambda calculus](lambda-calculus.md)

## 더 알아보기

아직 연결한 문서가 없다.

#order_theory #logic #computation
