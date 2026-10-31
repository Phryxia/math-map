# Curry–Howard 대응

# 개요

**Curry–Howard 대응(Curry–Howard correspondence)** 은 논리의 증명과 프로그램을 같은 대상의 두 표기법으로 보는 대응이다. "$A$ 이고 $B$ 이면 $A$" 의 증명은 두 값의 순서쌍을 받아 첫 성분을 돌려주는 함수와 같은 모양이다. Curry–Howard 대응은 명제를 타입으로, 증명을 그 타입의 프로그램으로 읽어, 증명을 검사하는 일을 프로그램의 타입 검사로 바꾼다.

# 직관

"$A$ 이고 $B$ 이면 $A$" 를 증명한다. "$A$ 이고 $B$" 를 가정하면 그 가정에서 $A$ 를 꺼낼 수 있고, 가정을 거두면 "$A$ 이고 $B$ 이면 $A$" 가 된다. 같은 일을 프로그램으로 쓰면 순서쌍 $p$ 를 받아 첫 성분을 돌려주는 함수 $\lambda p.\thinspace\mathrm{fst}\thinspace p$ 다. 가정 하나가 함수의 인자 하나이고, 가정에서 $A$ 를 꺼내는 단계가 첫 성분을 꺼내는 연산이다.

같은 맞춤은 연결사마다 된다. $A \to B$ 의 증명은 $A$ 의 증명을 받아 $B$ 의 증명을 돌려주는 함수이고, $A \wedge B$ 의 증명은 두 증명의 순서쌍이다. $A \vee B$ 의 증명은 어느 쪽인지 표시된 증명 하나이므로 합 타입의 값이다. 이 해석은 [직관주의 논리](intuitionism.md)의 증명 해석이고, 프로그램 쪽은 [lambda calculus](lambda-calculus.md)로 적는다.

| 논리 | 타입 | 프로그램 |
|---|---|---|
| $A \to B$ | 함수 타입 | $\lambda$ 추상 |
| $A \wedge B$ | 곱 타입 | 순서쌍 |
| $A \vee B$ | 합 타입 | 태그 붙은 값 |
| $\top$ | 단위 타입 | 유일한 값 |
| $\bot$ | 빈 타입 | 값이 없음 |
| $\neg A$ | $A \to \bot$ | 빈 타입으로 가는 함수 |
| $\forall x.P(x)$ | 의존 함수 타입 | 인자에 따라 결과 타입이 변하는 함수 |
| $\exists x.P(x)$ | 의존 곱 타입 | 증인과 증명의 쌍 |

# 정의

## 단순 타입 lambda calculus

**단순 타입 lambda calculus(simply typed lambda calculus)** 는 기본 타입과 $\sigma \to \tau$ 로 만든 타입을 항에 붙이고, 문맥(context) $\Gamma$ 아래에서 다음 세 규칙으로 항의 타입을 판정하는 체계다.

$$
\frac{(x:\sigma)\in\Gamma}{\Gamma\vdash x:\sigma}\qquad
\frac{\Gamma,x:\sigma\vdash t:\tau}{\Gamma\vdash\lambda x.t:\sigma\to\tau}\qquad
\frac{\Gamma\vdash t:\sigma\to\tau\quad\Gamma\vdash u:\sigma}{\Gamma\vdash t\thinspace u:\tau}
$$

첫 규칙으로 $x:\sigma,y:\tau\vdash x:\sigma$ 이고, 둘째 규칙을 두 번 쓰면 $\vdash\lambda x.\lambda y.x:\sigma\to(\tau\to\sigma)$ 이다.

## 자연연역과의 대조

같은 세 규칙에서 타입 이름을 명제로 바꾸면 자연연역(natural deduction)의 가정, $\to$ 도입, $\to$ 제거가 된다.

$$
\frac{A\in\Gamma}{\Gamma\vdash A}\qquad
\frac{\Gamma,A\vdash B}{\Gamma\vdash A\to B}\qquad
\frac{\Gamma\vdash A\to B\quad\Gamma\vdash A}{\Gamma\vdash B}
$$

앞 절의 유도에서 항을 지우면 $A,B\vdash A$ 에서 $\to$ 도입을 두 번 써서 $\vdash A\to(B\to A)$ 를 얻는 증명이 된다. 항을 지우면 증명이 되고, 증명에 항을 붙이면 프로그램이 된다.

## 절단과 β 축약

$\to$ 도입 바로 뒤에 $\to$ 제거가 오는 자리를 절단(cut)이라 한다. 절단을 없애는 변환을 β 축약(β-reduction)이라 한다.

$$
(\lambda x.t)\thinspace u\ \rightsquigarrow\ t\lbrack x:=u\rbrack
$$

왼쪽은 가정을 세워 $B$ 를 얻은 뒤 그 가정을 실제 증명으로 채운 증명이고, 오른쪽은 대입을 미리 수행한 직접 증명이다. $(\lambda x.\lambda y.x)\thinspace u\rightsquigarrow\lambda y.u$ 는 $A\to(B\to A)$ 의 증명에 $A$ 의 증명 $u$ 를 넣어 $B\to A$ 의 증명을 얻는 절단을 없앤 것이다.

# 성질

## 배중률의 부재

$A \vee \neg A$ 의 증명은 왼쪽 또는 오른쪽이라는 답을 내놓아야 한다. 임의의 명제에 대해 그 답을 주는 프로그램은 [정지 문제](halting-problem.md)를 푸는 것과 같으므로 존재하지 않는다. 직관주의 논리에서 배중률이 정리가 아닌 것이 계산 쪽에서는 이렇게 나타난다.

## 정규화와 일관성

단순 타입 lambda calculus 는 강한 정규화(strong normalization) 성질을 가진다. 타입이 붙은 항은 어떤 순서로 축약해도 유한 단계 안에 정규형에 도달한다. 논리 쪽에서는 모든 증명을 절단 없는 형태로 정리할 수 있다는 뜻이고, $\bot$ 의 절단 없는 증명은 형태상 존재할 수 없으므로 일관성이 따라온다.

무한 재귀를 허용하는 타입 체계에서는 $\bot$ 를 증명할 수 있어 논리로서 일관성을 잃는다. 그래서 증명 보조기(proof assistant)는 재귀를 정지가 보장되는 꼴로 제한한다.

## 고전 논리와 제어 연산자

배중률이나 이중부정 제거를 추가하면 다른 프로그램 개념이 대응한다. Griffin 이 보인 대로 Peirce 법칙 $((A \to B) \to A) \to A$ 는 call/cc 같은 제어 연산자(control operator)의 타입이다. 고전적 증명에서 뽑아낸 프로그램은 계산 도중 이전 지점으로 되돌아가 답을 바꾼다. 존재만 보이고 대상을 주지 않는 고전적 증명의 성격이 계산에서는 백트래킹으로 나타난다.

## 범주론적 판본

단순 타입 lambda calculus 는 데카르트 닫힌 범주(cartesian closed category)의 내부 언어(internal language)이고, 곱 타입은 곱, 함수 타입은 지수 대상에 해당한다. 논리·계산·범주의 삼각 대응을 Curry–Howard–Lambek 대응이라 부른다.

## 조합자와 공리

조합자(combinator) $K$ , $S$ 의 타입이 함의 논리의 두 공리이고, 커링과 그 역이 곱과 함수 사이의 [수반](adjunctions.md)을 준다.

$I=S(K)(K(K))$ 는 $A \to A$ 가 두 공리에서 유도된다는 것을 항으로 쓴 것이다.

# 활용

- Coq, Lean, Agda 는 정리를 타입으로 쓰고 증명을 그 타입의 항으로 만든다. 타입 검사기가 증명 검사기이므로 신뢰 기반이 작은 핵심부로 좁혀진다. 4색 정리와 Feit–Thompson 정리의 기계 검증, CompCert 컴파일러의 정확성 증명이 이 방식이다.
- 구성적 증명에서 프로그램을 추출할 수 있다. 모든 $x$ 에 대해 $P(x,y)$ 를 만족하는 $y$ 가 존재함을 구성적으로 증명하면 그 증명이 $y$ 를 계산하는 알고리즘이고 명세의 충족은 이미 보장된다.
- 프로그래밍 언어의 타입 기능은 논리 쪽 대응물을 가진다. 다형성은 2 차 논리의 전칭 한정, 의존 타입은 술어논리의 한정기호, 선형 타입은 선형논리에 대응한다. 새 타입 기능이 대응하는 논리의 일관성으로 검증된다.

# 연관 문서

## 선수지식

- [Lambda calculus](lambda-calculus.md)
- [직관주의](intuitionism.md)

## 더 알아보기

- [호모토피 타입 이론](homotopy-type-theory.md)

#logic #computation
