# 모형론

# 개요

모형론은 [1차 논리](first-order-logic.md)식이 구조에 대해 무엇을 말할 수 있는지 다룬다. 한 이론의 모형들이 서로 얼마나 다를 수 있는지, 논리식이 정의하는 부분집합이 어떤 모양인지가 물음이다.

[Löwenheim–Skolem 정리](lowenheim-skolem.md)는 무한 모형을 갖는 이론이 모든 크기의 모형을 가짐을 준다. 그러므로 이론이 모형을 하나로 정하는 일은 없고, 남는 물음은 모형들이 논리식으로 구별되는가와 각 크기에서 모형이 몇 개인가다.

# 직관

유리수 전체의 순서와 무리수 전체의 순서는 다른 집합이다. 순서 기호 $\lt$ 만 쓰는 1차 문장으로 둘을 구별할 수 있는가.

두 순서 모두 조밀하고 끝점이 없다. 매개변수 $a, b$ 를 쓴 논리식 $\exists x\thinspace (a \lt x \land x \lt b)$ 를 보면, 조밀성에 의해 이 논리식은 $a \lt b$ 와 같은 값을 갖는다. 양화사가 사라지고 매개변수 사이의 순서 비교만 남았다.

양화사 하나에 부등식이 여러 개 걸려도 마찬가지다. $\exists x\thinspace \bigl(\bigwedge_i a_i \lt x \land \bigwedge_j x \lt b_j\bigr)$ 가 성립할 필요충분조건은 모든 $i, j$ 에 대해 $a_i \lt b_j$ 인 것이다. 오른쪽에는 양화사가 없다. 등식이 섞여 있으면 그 등식으로 변수를 대입해 없앤다.

안쪽 양화사부터 이 치환을 반복하면 어떤 논리식도 매개변수 사이의 부등식과 등식만으로 쓰인다. 매개변수가 없는 문장은 그러면 항상 참이거나 항상 거짓이 되므로 두 순서는 같은 문장을 만족한다. 1차 문장으로는 유리수의 순서와 무리수의 순서를 구별할 수 없다.

# 정의

## 구조와 만족

언어 $L$ 은 상수, 함수, 관계 기호의 모임이다. $L$ -**구조** $\mathcal M$ 은 공집합이 아닌 정의역 $M$ 과 각 기호의 해석으로 이루어진다.

논리식 $\varphi(x_1,\dots,x_n)$ 과 $a_1,\dots,a_n \in M$ 에 대해 **만족 관계** $\mathcal M \models \varphi(a_1,\dots,a_n)$ 을 논리식의 구조에 대한 재귀로 정의한다. 원자식은 해석으로, 접속사는 진리표로, 양화사는 정의역 전체를 훑는 것으로 정한다.

## 기본 동치와 기본 확대

$\mathcal M$ 에서 참인 문장 전체를 $\mathrm{Th}(\mathcal M)$ 이라 한다. $\mathrm{Th}(\mathcal M) = \mathrm{Th}(\mathcal N)$ 이면 두 구조가 **기본 동치**라 하고 $\mathcal M \equiv \mathcal N$ 으로 쓴다.

$\mathcal M$ 이 $\mathcal N$ 의 부분구조이고 모든 논리식 $\varphi$ 와 $\bar a \in M$ 에 대해 다음이 성립하면 $\mathcal M$ 이 $\mathcal N$ 의 **기본 부분구조**라 하고 $\mathcal M \preceq \mathcal N$ 으로 쓴다.

$$
\mathcal M \models \varphi(\bar a) \iff \mathcal N \models \varphi(\bar a)
$$

부분구조인 것만으로는 부족하다. 순서체 $\mathbb Q$ 는 $\mathbb R$ 의 부분구조이지만 $2$ 의 제곱근의 존재를 말하는 문장에서 갈린다.

## 완전 이론과 양화사 소거

$L$ -문장의 집합 $T$ 가 **이론**이고, $T$ 의 모든 문장을 만족하는 구조가 $T$ 의 **모형**이다. 모든 문장 $\sigma$ 에 대해 $T$ 가 $\sigma$ 나 $\neg\sigma$ 가운데 하나를 함의하면 $T$ 를 **완전**하다고 한다.

이론 $T$ 가 **양화사 소거**를 갖는다는 것은 모든 논리식 $\varphi(\bar x)$ 에 대해 $T \models \forall \bar x\thinspace(\varphi(\bar x) \leftrightarrow \psi(\bar x))$ 인 양화사 없는 논리식 $\psi$ 가 있다는 뜻이다.

## 범주성

기수 $\kappa$ 에 대해 $T$ 의 크기 $\kappa$ 인 모형이 동형을 빼고 하나뿐이면 $T$ 를 $\kappa$ -**범주적**이라 한다.

# 성질

## Tarski–Vaught 판정

**정리.** $\mathcal M$ 이 $\mathcal N$ 의 부분구조일 때, $\mathcal M \preceq \mathcal N$ 인 것은 다음과 동치다. 논리식 $\varphi(x,\bar a)$ 와 $\bar a \in M$ 에 대해 $\mathcal N \models \exists x\thinspace \varphi(x,\bar a)$ 이면 $\mathcal N \models \varphi(b,\bar a)$ 인 $b \in M$ 이 있다.

증명은 논리식의 복잡도에 대한 귀납이고, 존재 양화 단계에서 이 조건을 쓴다. 이 판정이 하향 Löwenheim–Skolem 정리의 구성에서 증인을 고르는 근거다.

## 양화사 소거를 갖는 이론

조밀하고 끝점이 없는 선형순서의 이론, 표수가 고정된 대수적 폐체의 이론 $\mathrm{ACF}\_p$, 실폐체의 이론, 무한 집합의 이론이 양화사 소거를 갖는다.[^1]

**판정.** 모든 원자식 $\theta_i$ 와 매개변수에 대해 $\exists x\thinspace \bigwedge_i \theta_i$ 꼴을 양화사 없이 쓸 수 있으면 $T$ 가 양화사 소거를 갖는다.

일반 논리식을 선언 표준형으로 바꾸면 존재 양화가 각 논리곱 항에 분배되므로 이 꼴만 처리하면 된다. 대수적 폐체에서 이 단계는 종결식 계산이다. 다항식 $f, g$ 가 공통근을 가질 필요충분조건이 종결식이 $0$ 이라는 것이고, 종결식은 계수의 다항식이므로 양화사가 사라진다.

**따름정리(Chevalley).** 대수적 폐체에서 구성가능 집합의 사영은 구성가능하다.

양화사 소거를 정의 가능 집합의 언어로 옮긴 것이 이 진술이다. 존재 양화가 사영에 대응하고, 양화사 없는 논리식이 구성가능 집합에 대응한다.

## 완전성 판정

**정리(Łoś–Vaught).** $T$ 에 유한 모형이 없고 어떤 무한 기수 $\kappa$ 에서 $T$ 가 $\kappa$ -범주적이면 $T$ 는 완전하다.

$T$ 가 완전하지 않으면 $\sigma$ 와 $\neg\sigma$ 의 모형이 따로 있다. 유한 모형이 없으므로 Löwenheim–Skolem 정리로 두 모형을 크기 $\kappa$ 로 맞출 수 있고, 범주성에 의해 둘이 동형이 되어 모순이다. ∎

조밀 선형순서의 이론은 $\aleph_0$ -범주적이므로 완전하고, $\mathrm{ACF}\_p$ 는 비가산 기수에서 범주적이므로 완전하다. 뒤의 것은 대수적 폐체가 초월 차수로 결정되기 때문이다.

**정리(Morley).** 가산 언어의 이론이 어떤 비가산 기수에서 범주적이면 모든 비가산 기수에서 범주적이다.[^2]

이 정리가 모형의 개수를 기수마다 세는 분류 이론의 출발이 되었다.

# 활용

- 대수적 폐체의 양화사 소거에서 Chevalley 정리와 Ax–Grothendieck 정리가 나온다. 뒤의 것은 복소 아핀 공간의 단사 다항식 사상이 전사라는 진술이고, 증명은 [유한체](finite-fields.md) 위에서 성립함을 보인 뒤 $\mathrm{ACF}\_0$ 로 옮기는 것이다.
- 실폐체의 양화사 소거가 Tarski 의 결정 절차를 준다. 실수의 1차 이론은 결정 가능하고, o-최소 구조의 이론이 이 성질을 실해석적 함수로 넓힌다.
- 초실수체를 기본 확대로 얻어 [비표준 해석학](nonstandard-analysis.md)의 이전 원리를 세운다.
- 안정성 이론이 정의 가능 집합의 조합적 성질로 이론을 분류한다. Hrushovski 는 이 언어로 함수체 위의 [Mordell–Lang 추측](mordell-lang.md)을 증명했다.

[^1]: David Marker, *Model Theory: An Introduction*, Springer, Graduate Texts in Mathematics 217 (2002), Ch. 3. 양화사 소거의 판정과 대수적 폐체, 실폐체의 예가 이 장에 있다.
[^2]: Michael Morley, "Categoricity in power", Transactions of the American Mathematical Society 114 (1965), 514–538.

# 연관 문서

## 선수지식

- [Löwenheim–Skolem 정리](lowenheim-skolem.md)

## 더 알아보기

- [초곱](ultraproducts.md)
- [o-최소성](o-minimality.md)
- [구성가능 집합](constructible-sets.md)
- [Ax–Grothendieck 정리](ax-grothendieck.md)
- [안정 이론](stable-theories.md)

#logic #foundations #algebra
