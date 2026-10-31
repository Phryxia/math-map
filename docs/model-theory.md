# 모형론

# 개요

**모형론(model theory)** 은 논리식으로 적은 문장이 어떤 수학적 구조에서 참인지, 그리고 문장들이 구조를 얼마나 구별하는지 다루는 분야다. 유리수 전체의 순서와 [무리수](irrational-numbers.md) 전체의 순서는 둘 다 끝점이 없고 두 수 사이에 언제나 다른 수가 있다. 유리수는 셀 수 있게 많고 무리수는 셀 수 없이 많지만, 원소와 부등호만 쓰는 문장으로는 둘을 구별할 수 없다. 모형론은 같은 문장들을 만족하는 구조들을 모아 비교해, 어떤 차이가 문장으로 드러나고 어떤 차이가 드러나지 않는지 정한다.

# 직관

유리수 전체의 순서와 무리수 전체의 순서는 다른 집합이다. 순서 기호 $\lt$ 만 쓰는 [1차 논리](first-order-logic.md)의 문장으로 둘을 구별할 수 있는가. 두 순서 모두 조밀하고 끝점이 없으므로, 매개변수 $a, b$ 를 쓴 논리식 $\exists x\thinspace (a \lt x \land x \lt b)$ 는 $a \lt b$ 와 같은 값을 갖는다. 한정사(quantifier, 양화사)가 사라지고 매개변수 사이의 순서 비교만 남았다.

한정사 하나에 부등식이 여러 개 걸려도 $\exists x\thinspace \bigl(\bigwedge_i a_i \lt x \land \bigwedge_j x \lt b_j\bigr)$ 가 성립할 필요충분조건은 모든 $i, j$ 에 대해 $a_i \lt b_j$ 인 것이고, 오른쪽에는 한정사가 없다. 등식이 섞여 있으면 그 등식으로 변수를 대입해 없앤다. 안쪽 한정사부터 이 치환을 반복하면 어떤 논리식도 매개변수 사이의 부등식과 등식만으로 쓰인다.

매개변수가 없는 문장은 그러면 항상 참이거나 항상 거짓이 된다. 두 순서는 같은 문장을 만족하고, 1차 문장으로는 유리수의 순서와 무리수의 순서를 구별할 수 없다.

# 정의

## 구조와 만족

언어 $L$ 은 상수, 함수, 관계 기호의 모임이다. $L$ 위의 **구조(structure)** $\mathcal M$ 은 공집합이 아닌 정의역 $M$ 과 각 기호의 해석으로 이루어진다. 직관 절의 두 구조는 언어 $\lbrace\lt\rbrace$ 위의 $(\mathbb Q,\lt)$ 와 $(\mathbb R\setminus\mathbb Q,\lt)$ 다.

논리식 $\varphi(x_1,\dots,x_n)$ 과 $a_1,\dots,a_n \in M$ 에 대해 **만족 관계(satisfaction relation)** $\mathcal M \models \varphi(a_1,\dots,a_n)$ 을 논리식의 구조에 대한 재귀로 정의한다. 원자식은 해석으로, 접속사는 진리표로, 한정사는 정의역 전체를 훑는 것으로 정한다. $(\mathbb Q,\lt)\models\exists x\thinspace(0\lt x\land x\lt 1)$ 이고 증인은 $1/2$ 이다.

## 기본 동치와 기본 확대

$\mathcal M$ 에서 참인 문장 전체를 $\mathrm{Th}(\mathcal M)$ 이라 한다. $\mathrm{Th}(\mathcal M) = \mathrm{Th}(\mathcal N)$ 이면 두 구조가 **기본 동치(elementarily equivalent)** 라 하고 $\mathcal M \equiv \mathcal N$ 으로 쓴다. 직관 절의 계산이 보인 것은 $(\mathbb Q,\lt)\equiv(\mathbb R\setminus\mathbb Q,\lt)$ 다.

$\mathcal M$ 이 $\mathcal N$ 의 부분구조이고 모든 논리식 $\varphi$ 와 $\bar a \in M$ 에 대해 다음이 성립하면 $\mathcal M$ 이 $\mathcal N$ 의 **기본 부분구조(elementary substructure)** 라 하고 $\mathcal M \preceq \mathcal N$ 으로 쓴다. 이때 $\mathcal N$ 을 $\mathcal M$ 의 **기본 확대(elementary extension)** 라 한다.

$$
\mathcal M \models \varphi(\bar a) \iff \mathcal N \models \varphi(\bar a)
$$

$(\mathbb Q,\lt)\preceq(\mathbb R,\lt)$ 이다. 직관 절의 소거로 유리수 매개변수의 논리식은 매개변수 사이의 순서 비교로 바뀌고, 그 비교는 $\mathbb Q$ 에서와 $\mathbb R$ 에서 같다. 반면 순서체 $(\mathbb Q,+,\cdot,0,1,\lt)$ 는 $(\mathbb R,+,\cdot,0,1,\lt)$ 의 부분구조이지만 기본 부분구조가 아니다. 문장 $\exists y\thinspace(y\cdot y=1+1)$ 은 $\mathbb R$ 에서 참이고 $\mathbb Q$ 에서 거짓이다.

## 완전 이론과 한정사 소거

$L$ 문장의 집합 $T$ 가 **이론(theory)** 이고, $T$ 의 모든 문장을 만족하는 구조가 $T$ 의 **모형(model)** 이다. 모든 문장 $\sigma$ 에 대해 $T$ 가 $\sigma$ 나 $\neg\sigma$ 가운데 하나를 함의하면 $T$ 를 **완전(complete)** 하다고 한다. $\mathrm{Th}(\mathcal M)$ 은 언제나 완전하다. 선형 순서의 공리는 완전하지 않다. 문장 "가장 작은 원소가 있다" 는 $(\mathbb N,\lt)$ 에서 참이고 $(\mathbb Z,\lt)$ 에서 거짓이다.

이론 $T$ 가 **한정사 소거(quantifier elimination)** 를 갖는다는 것은 모든 논리식 $\varphi(\bar x)$ 에 대해 $T \models \forall \bar x\thinspace(\varphi(\bar x) \leftrightarrow \psi(\bar x))$ 인 한정사 없는 논리식 $\psi$ 가 있다는 뜻이다. 조밀하고 끝점이 없는 선형 순서의 이론을 조밀 선형 순서(dense linear order) 이론이라 하고, 직관 절의 계산이 이 이론의 한정사 소거다. $\exists x\thinspace(a\lt x\land x\lt b)$ 에 대응하는 $\psi$ 는 $a\lt b$ 다.

## 범주성

[기수](cardinality.md) $\kappa$ 에 대해 $T$ 의 크기 $\kappa$ 인 모형이 동형을 빼고 하나뿐이면 $T$ 를 $\kappa$ 에서 **범주적(categorical)** 이라 한다. 무한 집합의 이론, 곧 빈 언어에서 "원소가 $n$ 개 이상" 이라는 문장들을 모은 이론은 모든 무한 기수에서 범주적이다. 모형이 크기만으로 정해진다. 조밀 선형 순서 이론은 $2^{\aleph\_0}$ 에서 범주적이 아니다. $(\mathbb R,\lt)$ 와 $(\mathbb R\setminus\mathbb Q,\lt)$ 는 크기가 같지만, 앞의 것은 위로 유계인 집합마다 상한이 있고 뒤의 것은 그렇지 않아 동형이 아니다.

# 성질

## Tarski–Vaught 판정

Tarski–Vaught 판정(Tarski–Vaught test). $\mathcal M$ 이 $\mathcal N$ 의 부분구조일 때, $\mathcal M \preceq \mathcal N$ 인 것은 다음과 동치다. 논리식 $\varphi(x,\bar a)$ 와 $\bar a \in M$ 에 대해 $\mathcal N \models \exists x\thinspace \varphi(x,\bar a)$ 이면 $\mathcal N \models \varphi(b,\bar a)$ 인 $b \in M$ 이 있다.

증명은 논리식의 복잡도에 대한 귀납이고, 존재 한정사 단계에서 이 조건을 쓴다. [Löwenheim–Skolem 정리](lowenheim-skolem.md)의 하향 판본은 이 판정으로 증인을 모아 작은 기본 부분구조를 만든다.

## 한정사 소거를 갖는 이론

조밀 선형 순서 이론, 표수 $p$ 가 고정된 대수적 폐체(algebraically closed field)의 이론 $\mathrm{ACF}\_p$, [실폐체](real-closed-fields.md)의 이론, 무한 집합의 이론이 한정사 소거를 갖는다.[^1]

모든 원자식이나 그 부정 $\theta_i$ 와 매개변수에 대해 $\exists x\thinspace \bigwedge_i \theta_i$ 꼴을 한정사 없이 쓸 수 있으면 $T$ 가 한정사 소거를 갖는다. 일반 논리식을 선언 표준형(disjunctive normal form)으로 바꾸면 존재 한정사가 각 논리곱 항에 분배되므로 이 꼴만 처리하면 된다.

대수적 폐체에서 이 단계는 종결식(resultant) 계산이다. 다항식 $f, g$ 가 공통근을 가질 필요충분조건이 종결식이 $0$ 이라는 것이고, 종결식은 계수의 다항식이므로 한정사가 사라진다.

Chevalley 정리(Chevalley's theorem). 대수적 폐체에서 [구성가능 집합](constructible-sets.md)의 사영은 구성가능하다. 존재 한정사가 사영에 대응하고 한정사 없는 논리식이 구성가능 집합에 대응하므로, 이 정리는 $\mathrm{ACF}\_p$ 의 한정사 소거를 정의 가능 집합으로 옮긴 진술이다.

## 완전성 판정

Łoś–Vaught 판정(Łoś–Vaught test). $T$ 에 유한 모형이 없고 어떤 무한 기수 $\kappa$ 에서 $T$ 가 $\kappa$ 범주적이면 $T$ 는 완전하다.

$T$ 가 완전하지 않으면 $\sigma$ 와 $\neg\sigma$ 의 모형이 따로 있다. 유한 모형이 없으므로 Löwenheim–Skolem 정리로 두 모형을 크기 $\kappa$ 로 맞출 수 있고, 범주성으로 둘이 동형이 되어 모순이다.

조밀 선형 순서 이론은 Cantor 의 왕복 논법(back-and-forth argument)으로 $\aleph\_0$ 범주적이므로 완전하다. 대수적 폐체는 표수와 초월 차수(transcendence degree)로 동형을 빼고 정해지고, 비가산 기수 $\kappa$ 인 대수적 폐체의 초월 차수는 $\kappa$ 이므로 $\mathrm{ACF}\_p$ 는 비가산 기수에서 범주적이고 완전하다.

[Morley 범주성 정리](morley-categoricity.md). 가산 언어의 이론이 어떤 비가산 기수에서 범주적이면 모든 비가산 기수에서 범주적이다.[^2] 이 정리 뒤로 모형의 개수를 기수마다 세는 분류 이론(classification theory)이 전개되었다.

# 활용

- 대수적 폐체의 한정사 소거에서 Chevalley 정리와 [Ax–Grothendieck 정리](ax-grothendieck.md)가 나온다. 뒤의 것은 복소 아핀 공간의 단사 다항식 사상이 전사라는 진술이고, 증명은 [유한체](finite-fields.md) 위에서 성립함을 보인 뒤 $\mathrm{ACF}\_0$ 로 옮기는 것이다.
- 실폐체의 한정사 소거가 Tarski 의 결정 절차(decision procedure)를 준다. [실수](real-numbers.md)의 순서체 이론은 결정 가능하다. 정의 가능한 실수 부분집합이 유한 개의 점과 구간의 합집합이라는 실폐체의 성질을 정의로 삼은 것이 [o-최소성](o-minimality.md)이고, 제한된 실해석적 함수를 더한 구조도 이 성질을 가진다.
- 실수체의 [초곱](ultraproducts.md)으로 초실수체를 기본 확대로 얻어 [비표준 해석학](nonstandard-analysis.md)의 이전 원리를 세운다.
- [안정 이론](stable-theories.md)이 정의 가능 집합의 조합적 성질로 이론을 분류한다. Hrushovski 는 이 이론으로 함수체 위의 [Mordell–Lang 추측](mordell-lang.md)을 증명했다.

[^1]: David Marker, *Model Theory: An Introduction*, Springer, Graduate Texts in Mathematics 217 (2002), Ch. 3. 한정사 소거의 판정과 대수적 폐체, 실폐체의 예가 이 장에 있다.
[^2]: Michael Morley, "Categoricity in power", Transactions of the American Mathematical Society 114 (1965), 514–538.

# 연관 문서

## 선수지식

- [Löwenheim–Skolem 정리](lowenheim-skolem.md)

## 더 알아보기

### 모형의 구성

- [초곱](ultraproducts.md)
- [Fraïssé 극한](fraisse-limits.md)

### 이론의 분류

- [o-최소성](o-minimality.md)
- [안정 이론](stable-theories.md)

### 대수와 기하에서의 쓰임

- [구성가능 집합](constructible-sets.md)
- [Ax–Grothendieck 정리](ax-grothendieck.md)

#logic #foundations #algebra
