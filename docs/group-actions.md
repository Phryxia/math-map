# 군 작용

# 개요

**군 작용(group action)** 은 [군](groups.md)의 원소 하나하나에 한 집합의 원소를 옮기는 규칙을 정해 두는 것이다. 정삼각형의 꼭짓점 셋을 빨강과 파랑으로 칠하는 방법은 $2^3=8$ 가지다. 삼각형을 돌리거나 뒤집어 겹쳐지는 두 칠하기를 같은 것으로 치면 몇 가지가 남는가. 군 작용은 칠하기마다 그것과 겹쳐지는 칠하기의 묶음과 그것을 그대로 두는 변환을 세어, 묶음의 크기와 개수를 구한다.

# 직관

정삼각형의 꼭짓점을 $A,B,C$ 라 하자. 삼각형을 제자리로 보내는 변환은 $0^\circ$, $120^\circ$, $240^\circ$ 회전과, 꼭짓점 하나와 마주 보는 변의 가운데를 잇는 축에 대한 뒤집기 셋으로 모두 여섯이다. 변환 하나는 칠하기 하나를 다른 칠하기로 옮긴다. $A$ 만 빨강인 칠하기를 $120^\circ$ 돌리면 $B$ 만 빨강인 칠하기가 된다.

$A$ 만 빨강인 칠하기에 여섯 변환을 모두 해 보면 "$A$ 만 빨강", "$B$ 만 빨강", "$C$ 만 빨강" 셋이 나온다. 변환은 여섯인데 결과가 셋인 것은, $A$ 만 빨강인 칠하기를 그대로 두는 변환이 $0^\circ$ 회전과 $A$ 를 지나는 축의 뒤집기 둘이어서 결과가 둘씩 겹치기 때문이다. $3\times 2=6$ 이다. 세 꼭짓점이 모두 빨강인 칠하기는 여섯 변환이 모두 그대로 두므로 결과가 하나뿐이다.

그래서 $8$ 을 $6$ 으로 나누는 계산은 맞지 않는다. 칠하기마다 묶음의 크기는 $6$ 을 그 칠하기를 그대로 두는 변환의 수로 나눈 값이다. 여덟 칠하기는 빨강의 개수가 $0,1,2,3$ 인 것끼리 묶여 크기 $1,3,3,1$ 인 네 묶음으로 나뉘고, 답은 $4$ 다. 한 칠하기를 옮겨 닿는 칠하기들의 묶음을 궤도, 그 칠하기를 그대로 두는 변환들의 모임을 안정자라 한다.

# 정의

## 작용

$G$ 를 군, $e$ 를 항등원, $X$ 를 집합이라 하자. 함수 $G \times X \to X$, $(g, x) \mapsto g \cdot x$ 가 다음 두 조건을 만족하면 이것을 $G$ 의 $X$ 위 **군 작용(group action)** 이라 한다.

$$
e\cdot x=x,\qquad(gh)\cdot x=g\cdot(h\cdot x)
$$

첫째 조건은 항등원이 아무것도 옮기지 않는다는 것이고, 둘째 조건은 $h$ 를 한 뒤 $g$ 를 한 결과가 군에서 곱한 $gh$ 를 한 번 한 결과와 같다는 것이다.

직관 절의 예에서 $G$ 는 정삼각형을 제자리로 보내는 변환 여섯 개가 합성으로 이루는 군이고, $X$ 는 칠하기 여덟 개의 집합이며, $g\cdot x$ 는 칠하기 $x$ 를 변환 $g$ 로 옮긴 칠하기다. 같은 $G$ 가 꼭짓점의 집합 $\lbrace A,B,C\rbrace$ 위에도 작용한다. 이때 $g\cdot A$ 는 변환 $g$ 가 $A$ 를 보낸 꼭짓점이다.

## 궤도

$x\in X$ 의 **궤도(orbit)** 는 $x$ 에 $G$ 의 원소를 작용시켜 닿는 점 전체다.

$$
\mathrm{Orb}(x)=\lbrace g\cdot x: g\in G\rbrace
$$

$A$ 만 빨강인 칠하기의 궤도는 "$A$ 만 빨강", "$B$ 만 빨강", "$C$ 만 빨강" 세 칠하기이고, 모두 빨강인 칠하기의 궤도는 그 칠하기 하나다. 궤도 전체의 집합을 $X/G$ 로 쓴다. 칠하기의 예에서 $X/G$ 는 원소가 넷이다.

## 안정자

$x\in X$ 의 **안정자(stabilizer)** 는 $x$ 를 옮기지 않는 $G$ 의 원소 전체다.

$$
\mathrm{Stab}(x)=\lbrace g\in G: g\cdot x=x\rbrace
$$

$A$ 만 빨강인 칠하기의 안정자는 $0^\circ$ 회전과 $A$ 를 지나는 축의 뒤집기 두 원소이고, 모두 빨강인 칠하기의 안정자는 $G$ 전체다.

## 추이적, 자유, 충실한 작용

항등원 하나로만 된 부분군 $\lbrace e\rbrace$ 를 **자명한 부분군(trivial subgroup)** 이라 한다.

- 궤도가 $X$ 전체 하나뿐인 작용을 **추이적 작용(transitive action)** 이라 한다. 어느 점에서든 군의 원소 하나로 다른 어느 점에든 닿는다.
- 모든 $x$ 의 안정자가 자명한 부분군인 작용을 **자유 작용(free action)** 이라 한다. 항등원이 아닌 원소는 어느 점도 그대로 두지 않는다.
- 모든 $x$ 를 그대로 두는 원소가 $e$ 뿐인 작용을 **충실한 작용(faithful action)** 이라 한다. 서로 다른 두 원소는 어느 점에서 반드시 다르게 작용한다.

여섯 변환이 꼭짓점 $\lbrace A,B,C\rbrace$ 에 하는 작용은 추이적이고 충실하지만 자유가 아니다. $A$ 를 지나는 축의 뒤집기가 $A$ 를 그대로 두기 때문이다. 회전 셋만 꼭짓점에 작용시키면 추이적이고 자유다. 여섯 변환이 칠하기에 하는 작용은 궤도가 넷이므로 추이적이 아니다.

# 성질

## 작용과 준동형

$g$ 를 고정하면 $x\mapsto g\cdot x$ 는 $X$ 에서 $X$ 로 가는 전단사 함수이고, 역함수는 $x\mapsto g^{-1}\cdot x$ 다. 두 조건에서 $g^{-1}\cdot(g\cdot x)=(g^{-1}g)\cdot x=e\cdot x=x$ 가 나오기 때문이다.

$X$ 위의 전단사 함수 전체가 합성으로 이루는 [대칭군](symmetric-groups.md)을 $\mathrm{Sym}(X)$ 라 하자. $g$ 에 전단사 $x\mapsto g\cdot x$ 를 대응시키는 함수

$$
\rho: G\to\mathrm{Sym}(X)
$$

는 둘째 조건에 의해 준동형이다. 거꾸로 준동형 $\rho$ 가 주어지면 $g\cdot x=\rho(g)(x)$ 가 작용이다. 그래서 $G$ 의 $X$ 위 작용과 준동형 $G\to\mathrm{Sym}(X)$ 는 같은 것이다. $\ker\rho$ 는 모든 점을 그대로 두는 원소들의 모임이므로, 작용이 충실한 것과 $\rho$ 가 단사인 것은 동치다. $\mathrm{Sym}(X)$ 대신 가역행렬군으로 가는 준동형을 보면 [군의 표현](group-representations.md)이 된다.

## 궤도 분할

$y$ 가 $x$ 의 궤도에 속한다는 관계는 [동치관계](equivalence-relations.md)다. $e\cdot x=x$ 에서 반사성이, $y=g\cdot x$ 이면 $x=g^{-1}\cdot y$ 인 것에서 대칭성이, $z=h\cdot y$, $y=g\cdot x$ 이면 $z=(hg)\cdot x$ 인 것에서 추이성이 나온다. 따라서 궤도들은 $X$ 를 겹치지 않는 조각으로 나눈다. 칠하기 여덟 개가 크기 $1,3,3,1$ 인 네 궤도로 나뉜 것이 그 예다.

## 안정자와 켤레

$x$ 를 그대로 두는 두 원소의 곱과 한 원소의 역원도 $x$ 를 그대로 두므로 $\mathrm{Stab}(x)$ 는 $G$ 의 부분군이다. 같은 궤도의 두 점의 안정자는 켤레다.

$$
\mathrm{Stab}(g\cdot x)=g\thinspace\mathrm{Stab}(x)\thinspace g^{-1}
$$

$A$ 의 안정자가 $A$ 를 지나는 축의 뒤집기를 포함하면, $B=g\cdot A$ 의 안정자는 $B$ 를 지나는 축의 뒤집기를 포함한다.

## 궤도-안정자 정리

**궤도-안정자 정리(orbit-stabilizer theorem).** $G$ 가 유한군이면

$$
|G|=|\mathrm{Orb}(x)|\thinspace|\mathrm{Stab}(x)|
$$

다. $G$ 가 무한군이면 $\mathrm{Orb}(x)$ 의 원소와 $\mathrm{Stab}(x)$ 의 왼쪽 잉여류가 일대일로 대응한다.

증명의 요지. $g\cdot x=h\cdot x$ 인 것과 $h^{-1}g\in\mathrm{Stab}(x)$ 인 것, 곧 $g\thinspace\mathrm{Stab}(x)=h\thinspace\mathrm{Stab}(x)$ 인 것은 동치다. 그래서 $g\cdot x\mapsto g\thinspace\mathrm{Stab}(x)$ 가 궤도에서 잉여류 전체로 가는 전단사이고, 유한군이면 잉여류마다 원소가 $|\mathrm{Stab}(x)|$ 개다.

직관 절의 $6=3\times 2$ 가 이 정리이고, 묶음의 크기가 $6$ 나누기 안정자의 크기라는 계산도 이 정리다. 궤도의 크기가 $|G|$ 의 약수라는 것이 따름정리로 나온다.

## Burnside 보조정리

**Burnside 보조정리(Burnside's lemma).** $G$ 가 유한군이고 $X$ 가 유한집합이면 궤도의 개수는 고정점 개수의 평균이다.

$$
|X/G|=\frac1{|G|}\sum_{g\in G}|\mathrm{Fix}(g)|,\qquad
\mathrm{Fix}(g)=\lbrace x\in X: g\cdot x=x\rbrace
$$

증명의 요지. $g\cdot x=x$ 인 쌍 $(g,x)$ 를 $g$ 로 먼저 세면 오른쪽 합이고, $x$ 로 먼저 세면 $\sum_x|\mathrm{Stab}(x)|$ 다. 궤도-안정자 정리로 한 궤도 위의 합은 $|G|$ 이므로 전체는 $|G|\cdot|X/G|$ 다.

칠하기의 예에서 $0^\circ$ 회전은 여덟 칠하기를 모두 그대로 두고, $120^\circ$ 와 $240^\circ$ 회전은 세 꼭짓점이 같은 색인 두 칠하기만 그대로 둔다. 뒤집기는 축이 지나는 꼭짓점의 색이 자유롭고 나머지 두 꼭짓점의 색이 같아야 하므로 $2\times 2=4$ 개를 그대로 둔다. $(8+2+2+4+4+4)/6=4$ 로 직관 절의 답과 같다. 다른 계산과 응용은 [Burnside 보조정리](burnside-lemma.md)에 있다.

## 류 방정식

$G$ 가 자기 자신에 켤레 $g\cdot x=gxg^{-1}$ 로 작용하면 궤도는 [켤레류](conjugacy-classes.md)이고 안정자는 중심화군이다. 궤도가 한 점뿐인 원소가 정확히 중심 $Z(G)$ 의 원소이므로 $\lvert G\rvert$ 는 $\lvert Z(G)\rvert$ 와 크기 $2$ 이상인 켤레류들의 크기의 합이다. 각 항이 $1$ 보다 큰 $\lvert G\rvert$ 의 약수이므로 $\lvert G\rvert=p^n$ 이면 중심이 자명한 부분군이 아니다. [Sylow 정리](sylow-theorems.md)의 증명이 같은 꼴의 세기를 쓴다.

## 자기 자신 위의 작용

$G$ 는 $G$ 자신이나 부분군에 관한 집합에 여러 방식으로 작용하고, 방식마다 다른 정리가 나온다.

| 작용 | 궤도 | 안정자 | 얻는 것 |
|---|---|---|---|
| 왼쪽 곱 $g \cdot x = gx$ | $G$ 전체 | 자명한 부분군 | Cayley 정리 |
| 켤레 $g \cdot x = gxg^{-1}$ | 켤레류 | 중심화군 | 류 방정식 |
| 부분군 $H$ 의 잉여류에 왼쪽 곱 | 잉여류 전체 | $H$ 의 켤레 | Sylow 정리 |
| 부분군 전체에 켤레 | 켤레 부분군들 | [정규화군](normalizer.md) | Sylow 부분군의 개수 |

# 활용

## 동형류의 열거

목걸이와 타일의 색칠, 분자의 이성질체, [그래프](graphs.md)의 동형류를 셀 때 Burnside 보조정리와 그 가중치판인 [Pólya 세기 정리](polya-enumeration.md)를 쓴다. 궤도마다 대표원 하나를 정해진 규칙으로 고르면 중복 없는 열거 알고리즘이 된다.

## 군의 구조

군을 잉여류나 켤레류에 작용시켜 얻은 세기 제약에서 유한군의 구조가 나온다. 왼쪽 곱 작용이 충실하다는 것에서 모든 군이 어떤 대칭군의 부분군과 동형이라는 Cayley 정리(Cayley's theorem)가, 잉여류와 부분군 위의 작용에서 Sylow 정리가 증명된다.

## 기하와 방정식

Klein 의 Erlangen 프로그램(Erlangen program)은 기하학을 어떤 변환군의 작용 아래 바뀌지 않는 성질의 연구로 정의한다. 유클리드 기하는 강체운동군, 아핀 기하는 아핀군, 사영 기하는 사영군의 작용에 대응한다.

[Galois 이론](galois-theory.md)에서는 체 확대의 자기동형군을 다항식의 근의 집합에 작용시킨다. 궤도가 기약인수의 근들에 대응하고, 부분군과 중간체가 포함 순서를 뒤집어 대응한다.[^1]

[^1]: Keith Conrad, *Group Actions*. 작용의 정의, 궤도와 안정자, 궤도-안정자 공식과 응용. https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf

# 연관 문서

## 선수지식

- [군](groups.md)
- [동치관계](equivalence-relations.md)

## 더 알아보기

### 군론

- [켤레류](conjugacy-classes.md)
- [정규화군](normalizer.md)
- [Sylow 정리](sylow-theorems.md)
- [군의 표현](group-representations.md)

### 세기와 다른 분야

- [Burnside 보조정리](burnside-lemma.md)
- [Galois 이론](galois-theory.md)
- [순종군](amenable-groups.md)
- [Banach–Tarski 분해](banach-tarski.md)
- [덮개공간](covering-spaces.md)
- [모듈러 형식](modular-forms.md)

#group_theory #algebra #combinatorics #field_theory
