# 표현 가능 함자

# 개요

표현 가능 함자는 어떤 대상으로 들어오는 사상들의 집합과 자연동형인 함자다. 곱, 자유군, 텐서곱처럼 보편 성질로 정의하는 대상은 모두 어떤 함자를 표현하는 대상이다. 표현이 있으면 [Yoneda lemma](yoneda-lemma.md)가 그것을 유일한 동형까지 정한다.

# 직관

집합 $A$ 와 $B$ 의 곱은 순서쌍의 집합 $A\times B$ 다. 군이나 위상공간에서 같은 것을 만들려면 원소를 쓰지 않고 곱을 적어야 한다.

집합 $X$ 에서 $A\times B$ 로 가는 함수는 $X\to A$ 와 $X\to B$ 두 함수의 쌍과 일대일 대응한다.

$$
\mathrm{Hom}(X,A\times B)\ \cong\ \mathrm{Hom}(X,A)\times\mathrm{Hom}(X,B)
$$

$X$ 를 바꿔도 대응 규칙은 같다. $g:X'\to X$ 로 앞에서 합성하면 양변이 함께 바뀐다.

오른쪽은 $A\times B$ 를 모르고도 쓸 수 있다. $X$ 마다 집합 $F(X)=\mathrm{Hom}(X,A)\times\mathrm{Hom}(X,B)$ 를 주는 [함자](functors.md)이기 때문이다. 곱을 만드는 일은 $\mathrm{Hom}(-,C)$ 가 이 $F$ 와 [자연동형](natural-transformations.md)이 되는 대상 $C$ 를 찾는 일로 바뀐다.

그런 $C$ 를 찾았다고 하자. $X=C$ 에서 동형이 항등사상 $\mathrm{id}\_C$ 를 보내는 곳은 $F(C)$ 의 원소 하나, 곧 사상 쌍 $(p,q)$ 다. 다른 $X$ 에서의 대응은 이 쌍으로 결정된다. $f:X\to C$ 가 $(p\circ f,\thinspace q\circ f)$ 로 가기 때문이다. 원소 하나가 동형 전체를 담는다.

# 정의

## 표현 가능 함자

$\mathcal C$ 를 locally small [범주](category.md)라 하자. 반변 함자 $F:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ 가 **표현 가능**하다는 것은 대상 $A$ 와 자연동형

$$
\eta:\mathrm{Hom}\_{\mathcal C}(-,A)\ \xrightarrow{\ \cong\ }\ F
$$

가 있다는 뜻이다. 쌍 $(A,\eta)$ 를 $F$ 의 **표현**이라 한다. 공변 함자 $\mathcal C\to\mathbf{Set}$ 에 대해서는 $\mathrm{Hom}\_{\mathcal C}(A,-)$ 를 쓴다.

## 보편원소

표현 $(A,\eta)$ 에 대해

$$
u=\eta_A(\mathrm{id}\_A)\in F(A)
$$

를 **보편원소**라 한다. $u$ 가 보편원소인 것은 다음과 같다. 모든 대상 $X$ 와 모든 $x\in F(X)$ 에 대해 $F(f)(u)=x$ 인 사상 $f:X\to A$ 가 유일하게 있다.

# 성질

## 보편원소와 표현의 대응

Yoneda lemma 는 자연변환 전체를 원소 하나로 바꾼다.

$$
\mathrm{Nat}(\mathrm{Hom}\_{\mathcal C}(-,A),F)\ \cong\ F(A),\qquad \eta\mapsto\eta_A(\mathrm{id}\_A)
$$

이 대응에서 자연동형에 해당하는 쪽이 보편원소다. 표현을 찾는 일과 보편원소를 찾는 일이 같다.

## 표현의 유일성

$(A,\eta)$ 와 $(B,\theta)$ 가 같은 $F$ 의 표현이면 $\theta^{-1}\circ\eta$ 가 $\mathrm{Hom}\_{\mathcal C}(-,A)$ 와 $\mathrm{Hom}\_{\mathcal C}(-,B)$ 사이의 자연동형이다. Yoneda 매장이 충실충만하므로 이 자연동형은 동형 $A\cong B$ 에서 오고, 그 동형은 보편원소를 보편원소로 보내는 유일한 사상이다.

## 극한 보존과 표현 불가능성

$\mathrm{Hom}\_{\mathcal C}(-,A)$ 는 쌍대제한을 제한으로 바꾸고 $\mathrm{Hom}\_{\mathcal C}(A,-)$ 는 제한을 제한으로 보낸다. 그러므로 이 보존을 어기는 함자는 표현 가능하지 않다.

공변 멱집합 함자 $\mathcal P:\mathbf{Set}\to\mathbf{Set}$ 가 그런 예다. $\mathcal P$ 를 $A$ 가 표현한다면 $\mathrm{Hom}(A,\varnothing)\cong\mathcal P(\varnothing)$ 인데 오른쪽은 원소가 하나이므로 $A=\varnothing$ 이다. 그런데 $\mathrm{Hom}(\varnothing,X)$ 는 모든 $X$ 에서 원소가 하나이고 $\mathcal P(X)$ 는 $2^{\lvert X\rvert}$ 개이므로 모순이다.

## 수반의 판정

함자 $G:\mathcal D\to\mathcal C$ 가 왼쪽 [수반](adjunctions.md)을 갖는 것과, $\mathcal C$ 의 각 대상 $C$ 마다 공변 함자 $\mathrm{Hom}\_{\mathcal C}(C,G-)$ 가 표현 가능한 것이 동치다. 표현하는 대상을 $F(C)$ 라 놓으면 $F$ 가 함자가 되고

$$
\mathrm{Hom}\_{\mathcal D}(F(C),D)\ \cong\ \mathrm{Hom}\_{\mathcal C}(C,GD)
$$

가 자연동형이 된다[^1].

# 활용

- **자유 대상.** 망각 함자 $U:\mathbf{Grp}\to\mathbf{Set}$ 에 대해 $\mathrm{Hom}\_{\mathbf{Set}}(S,U-)$ 를 표현하는 군이 $S$ 위의 자유군이고, 보편원소는 생성원을 넣는 함수 $S\to UF(S)$ 다.
- **텐서곱.** 가군 $A,B$ 를 고정하고 $C$ 에 쌍선형 사상의 집합을 주는 함자를 표현하는 대상이 [텐서곱](tensor-products.md) $A\otimes B$ 이고, 보편원소는 $(a,b)\mapsto a\otimes b$ 다.
- **극한.** [제한과 쌍대제한](limits-colimits.md)의 정의도 표현이다. 원뿔 전체를 주는 함자를 표현하는 대상이 제한이다.
- **코호몰로지.** $H^n(X;G)\cong\lbrack X,K(G,n)\rbrack$ 는 [코호몰로지](cohomology.md) 함자를 [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)이 표현한다는 뜻이다.

[^1]: Emily Riehl, *Category Theory in Context*, §2.4 와 §4.2. 표현 가능성, 보편원소, 수반의 판정. https://emilyriehl.github.io/files/context.pdf

# 연관 문서

## 선수지식

- [Yoneda lemma](yoneda-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#category_theory #algebra #algebraic_topology
