# 1차 논리

# 개요

**1차 논리(first-order logic)** 는 대상에 대한 양화("모든 $x$ 에 대하여", "어떤 $x$ 가 존재하여")를 허용하고 술어와 함수 기호로 구조를 기술하는 형식 언어다. "모든 자연수에는 그보다 큰 소수가 있다" 는 "모든" 과 "있다" 가 겹쳐 있어, 문장 단위로 참과 거짓만 붙이는 명제 논리로는 쪼갤 수 없다. 1차 논리는 변수와 한정사로 이런 문장을 기호로 적고, 기호 조작으로 얻는 증명과 구조 안에서의 참이 일치함을 보인다.

# 직관

"모든 자연수에는 그보다 큰 소수가 있다" 를 명제 논리로 적으면 문장 전체가 기호 하나 $P$ 가 되고, 그 안의 "모든" 과 "있다" 는 보이지 않는다. 1차 논리는 대상을 가리키는 변수 $x$, $y$ 와 관계 기호 $\lt$, $\mathrm{Prime}$ 을 두고 이 문장을 다음과 같이 적는다.

$$
\forall x\thinspace\exists y\thinspace\bigl(x\lt y\wedge\mathrm{Prime}(y)\bigr)
$$

이 기호열이 참인지는 $x$, $y$ 가 무엇을 가리키고 $\lt$, $\mathrm{Prime}$ 이 무엇인지를 정해야 정해진다. 자연수 전체에서 $\lt$ 를 보통의 순서로, $\mathrm{Prime}$ 을 소수의 집합으로 읽으면 참이다. 같은 기호열을 $\lbrace 0,1,2\rbrace$ 에서 같은 방식으로 읽으면 $x=2$ 보다 큰 $y$ 가 없으므로 거짓이다.

한편 [증명](proofs.md)에서 말로 하던 증명을 기호열을 바꾸는 규칙으로 고정할 수 있다. 그러면 규칙으로 얻는 문장과 모든 해석에서 참인 문장이 같은 문장인지 물을 수 있다.

# 정의

## 언어와 논리식

언어(signature) $L$ 은 상수 기호, 함수 기호, 관계(술어) 기호들의 모임이며 각 함수·관계 기호에는 자연수 항수(arity)가 붙는다. 항(term)은 변수와 상수에서 함수 기호를 유한히 적용해 얻는 기호열이다. 직관 절의 언어는 항수 $2$ 인 관계 기호 $\lt$ 와 항수 $1$ 인 관계 기호 $\mathrm{Prime}$ 으로 이루어진다. [군](groups.md)의 언어에 이항 함수 기호 $m$ 과 상수 $e$ 가 있으면 $m(x,e)$ 와 $m(m(x,y),z)$ 가 항이다.

원자 논리식(atomic formula)은 항 $t_1$, $t_2$ 에 대한 등식이나 관계 기호의 적용이고, 논리식(formula)은 원자 논리식에서 연결사와 한정사(quantifier)로 생성된다.

$$
\varphi ::= t_1 = t_2 \mid R(t_1,\dots,t_n) \mid \neg\varphi \mid \varphi\wedge\psi \mid \varphi\vee\psi \mid \varphi\to\psi \mid \forall x\thinspace\varphi \mid \exists x\thinspace\varphi
$$

자유 변수(free variable)가 없는 논리식을 문장(sentence)이라 한다. 이론(theory) $T$ 는 문장들의 집합이다. $\exists y\thinspace(x\lt y)$ 는 $x$ 가 자유 변수인 논리식이고, 앞에 $\forall x$ 를 붙이면 문장이 된다.

## L 구조

언어 $L$ 위의 구조(structure) $\mathcal M$ 은 공집합이 아닌 논의 영역(domain) $M$ 과 각 기호의 해석으로 이루어진다.

$$
\mathcal{M}=\bigl(M,\quad (c^{\mathcal M})\_{c},\quad (f^{\mathcal M})\_{f},\quad (R^{\mathcal M})\_{R}\bigr),\qquad f^{\mathcal M}:M^{n}\to M,\quad R^{\mathcal M}\subseteq M^{n}
$$

직관 절의 두 해석은 $(\mathbb N,\lt,P)$ 와 $(\lbrace 0,1,2\rbrace,\lt,\lbrace 2\rbrace)$ 다. $P$ 는 소수의 집합이다.

## 만족 관계

변수 배정(variable assignment) $v$ 와 구조 $\mathcal{M}$ 에 대해 만족 관계를 논리식의 구조에 대한 재귀로 정의한다(Tarski 의 진리 정의). 한정사 절만 적으면 다음과 같다.

$$
\mathcal{M},v\models \forall x\thinspace\varphi \iff \text{모든 } a\in M \text{ 에 대해 } \mathcal{M},v\lbrack x\mapsto a\rbrack\models\varphi
$$

직관 절의 문장을 $\sigma$ 라 하면 $(\mathbb N,\lt,P)\models\sigma$ 이고 $(\lbrace 0,1,2\rbrace,\lt,\lbrace 2\rbrace)\not\models\sigma$ 다. 뒤의 구조에서 $v(x)=2$ 이면 $\exists y\thinspace(x\lt y\wedge\mathrm{Prime}(y))$ 를 만족하는 $y$ 가 없다.

문장 집합 $T$ 의 모든 문장을 만족하는 구조를 $T$ 의 모델(model)이라 한다. 덧셈과 $0$ 으로 본 정수 $(\mathbb Z,+,0)$ 은 군의 공리 세 문장의 모델이다. 의미론적 귀결(semantic consequence)과 증명 가능성을 각각 다음으로 쓴다.

$$
T\models\varphi \iff T \text{ 의 모든 모델이 } \varphi \text{ 를 만족},\qquad T\vdash\varphi \iff T \text{ 에서 } \varphi \text{ 의 형식적 증명이 존재}
$$

증명 체계는 Hilbert 체계, 자연추론(natural deduction), 시퀀트 계산(sequent calculus) 가운데 무엇을 써도 아래 정리들이 같은 형태로 성립한다.

# 성질

## 건전성 정리

건전성 정리(soundness theorem). $T$ 에서 $\varphi$ 가 증명되면 $T$ 의 모든 모델이 $\varphi$ 를 만족한다.

$$
T\vdash\varphi \implies T\models\varphi
$$

증명은 증명의 길이에 대한 귀납법이다. 각 공리가 모든 구조에서 참이고 각 추론 규칙이 만족을 보존함을 확인하면 된다.

## 완전성 정리

완전성 정리(completeness theorem, Gödel 1929). $T$ 가 $\varphi$ 를 의미론적으로 귀결하면 $T$ 에서 $\varphi$ 가 증명된다[^1].

$$
T\models\varphi \implies T\vdash\varphi
$$

동치인 형태: 무모순인(즉 모순을 증명하지 않는) 모든 이론은 모델을 가진다. Henkin 의 증명 개요는 다음과 같다. 무모순 이론 $T$ 를 시작으로 각 존재 문장마다 새 상수 기호인 증인(witness)을 추가해 언어를 확장하고, 무모순성을 유지하면서 극대 무모순 집합(maximal consistent set)으로 확장한다. 그 다음 항들의 등식 [동치류](equivalence-relations.md)를 원소로 삼아 구조를 만들면 그 구조가 $T$ 의 모델이 된다. 언어가 비가산이면 확장 단계에서 정렬순서나 [Zorn 보조정리](axiom-of-choice.md)가 필요하다.

## 콤팩트성 정리

콤팩트성 정리(compactness theorem). $T$ 의 모든 유한 부분집합이 모델을 가지면 $T$ 도 모델을 가진다[^2].

증명은 대우를 쓴다. $T$ 가 모델을 갖지 않으면 완전성의 대우로 $T$ 는 모순을 증명하고, 그 증명은 $T$ 의 유한 부분집합 $T_0$ 만 사용한다. 따라서 $T_0$ 가 이미 모델을 갖지 않는다.

무한 모델을 가지는 이론에는 임의로 큰 모델이 있다. 서로 다른 새 상수 $\kappa$ 개와 그것들이 서로 다르다는 문장들을 $T$ 에 추가해도 임의의 유한 부분집합은 무한 모델에서 만족되므로, 콤팩트성 정리로 크기가 $\kappa$ 이상인 모델이 있다. 이것이 [Löwenheim–Skolem 정리](lowenheim-skolem.md)의 상향 부분이다.

## 표현력의 한계

- [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel set theory with choice)를 비롯한 군·환·[체](fields.md)와 집합론의 이론은 1차 논리의 이론으로 적힌다. 반면 충분히 강한 산술 이론은 [Gödel 불완전성 정리](godel-incompleteness.md)에 따라 완전하지 않다.
- 유한성은 1차 논리로 표현되지 않는다. 논의 영역이 유한하다고 말하는 문장 집합이 있다면 콤팩트성 정리에 모순이 생긴다.
- 하향 Löwenheim–Skolem: 가산 언어의 이론이 무한 모델을 가지면 가산 모델을 가진다. 이 정리에서 ZFC 가 무모순이면 ZFC 에 가산 모델이 있다는 Skolem 역설(Skolem's paradox)이 따라온다. 모델 내부에서 "비가산" 이라는 판정은 그 모델이 가진 함수들만으로 이루어지므로 모순은 아니다([기수](cardinality.md)).
- [실수](real-numbers.md)체의 [완비성](completeness.md)이나 자연수의 귀납법 원리를 "모든 부분집합에 대하여"로 말하려면 2차 논리가 필요하다. 1차 산술로는 표준 모델을 고정할 수 없고, 콤팩트성 정리는 초실수 같은 비표준 모델의 존재를 보장한다.
- 결정 가능성: 1차 논리의 타당성 판정 문제는 결정 불가능하다(Church–Turing). 다만 타당한 문장의 집합은 재귀적으로 열거 가능(recursively enumerable)하다. 완전성 정리로 타당한 문장은 증명을 차례로 나열해 찾을 수 있다([계산 가능성](computability.md)).

# 활용

## 수학 이론의 형식화

- 군의 이론: 언어는 이항 함수 기호 하나와 상수 하나, 공리는 결합법칙·항등원·역원 세 문장이다.
- 체, 순서체, 대수적으로 닫힌 체 등도 유한히 많은 문장 또는 하나의 공리 스킴으로 적힌다.
- 집합론은 관계 기호 하나(원소 관계)만 가진 언어의 이론이다.
- Peano 산술(Peano arithmetic, PA)은 0, 후속자, 덧셈, 곱셈 기호를 가지며 귀납법을 논리식마다 하나씩 주는 스킴으로 표현한다.

## 대수에서의 콤팩트성 논법

표수 $0$ 인 모든 체에서 참인 문장은 충분히 큰 소수 $p$ 마다 표수 $p$ 인 모든 체에서도 참이다. 표수가 0이라는 조건은 무한히 많은 문장으로만 적히므로, 유한 개만 쓰는 증명은 큰 표수에서도 통한다. 이런 이전(transfer) 논법은 대수기하에서 쓰인다.

## 자동 추론

완전성 정리는 "타당한 문장은 언젠가 증명이 발견된다"를 보장하므로 [결의법](resolution.md)(resolution), 타블로(tableau), SMT(satisfiability modulo theories) 같은 증명 탐색 절차의 근거가 된다. 군의 공리에서 항등원의 유일성을 유도하는 것이 그런 절차가 푸는 문제의 예다.

$$
\forall x\thinspace y\thinspace z.\quad m(m(x,y),z)=m(x,m(y,z)),\qquad \forall x.\quad m(x,e)=x\land m(e,x)=x,\qquad \forall x\thinspace\exists y.\quad m(x,y)=e
$$

$$
\forall e'.\quad (\forall x.\quad m(x,e')=x)\to e'=e
$$

고전 논리 대신 증명의 구성성을 요구하면 [직관주의 논리](intuitionism.md)가 되고, 그때 의미론은 구조 하나가 아니라 [Kripke 모형](kripke-semantics.md)의 족이 된다.

[^1]: Gödel's completeness theorem, Wikipedia. https://en.wikipedia.org/wiki/G%C3%B6del%27s_completeness_theorem
[^2]: Compactness Theorem, Internet Encyclopedia of Philosophy. https://iep.utm.edu/compactness/

# 연관 문서

## 선수지식

- [증명](proofs.md)
- [집합](sets.md)

## 더 알아보기

### 형식 체계와 모형

- [한정사 표준형](prenex-normal-form.md)
- [Löwenheim–Skolem 정리](lowenheim-skolem.md)
- [Peano 공리](peano-axioms.md)
- [2차 산술](second-order-arithmetic.md)
- [Gödel 불완전성 정리](godel-incompleteness.md)
- [산술적 계층](arithmetical-hierarchy.md)

### 기초 프로그램

- [ZFC 공리계](zfc-axioms.md)
- [논리주의](logicism.md)
- [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md)

#logic #set_theory #foundations
