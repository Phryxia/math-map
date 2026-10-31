# Gödel 불완전성 정리

# 개요

**Gödel 불완전성 정리(Gödel's incompleteness theorems)** 는 산술을 충분히 담을 수 있는 무모순 형식체계라면 증명도 반증도 되지 않는 문장이 반드시 존재한다는 결과다(1931). 자연수에 관해 참인 문장을 모두 증명하는 공리 목록을 기계가 확인할 수 있는 꼴로 만들려 하면, 목록을 아무리 늘려도 증명되지 않는 참인 문장이 남는다. 정리는 문장과 증명을 자연수로 부호화해 "이 문장은 증명될 수 없다" 에 해당하는 산술 문장을 만들고, 그 문장이 체계 안에서 결정되지 않음을 보인다.

# 직관

거짓말쟁이 문장 "이 문장은 거짓이다" 는 참도 거짓도 될 수 없다. Gödel 은 "거짓" 을 체계 안에서 정의할 수 없다는 문제(Tarski 의 정의 불가능성 정리, Tarski's undefinability theorem)를 피해, "거짓" 을 "증명될 수 없다" 로 바꾸었다. "이 문장은 증명될 수 없다" 는 모순이 아니라 참이면서 증명되지 않는 문장이 된다.

문장이 자기에 대해 말하려면 문장을 수로 바꿔야 한다. 기호 $0$, $=$, $S$ 에 $1$, $2$, $3$ 을 주고 기호열 $s_1s_2s_3$ 을 $2^{s_1}3^{s_2}5^{s_3}$ 으로 보내면, 기호열 "$0=0$" 은 $2^1\cdot 3^2\cdot 5^1=90$ 이 된다. 증명은 문장의 유한 열이므로 같은 방식으로 수 하나가 되고, "이 수는 저 문장의 증명이다" 를 확인하는 일은 수에 대한 계산이 된다. 그래서 "증명될 수 있다" 가 자연수에 대한 성질이 된다.

그러면 "부호가 $g$ 인 문장은 증명될 수 없다" 를 산술 문장으로 적을 수 있다. 이 문장 자신의 부호가 $g$ 가 되도록 맞추면 "이 문장은 증명될 수 없다" 에 해당하는 산술 문장 $G$ 가 나온다. 체계가 $G$ 를 증명하면 $G$ 가 말하는 내용이 거짓이 되므로, 거짓을 증명하지 않는 체계에서 $G$ 는 증명되지 않는다.

# 정의

이론 $T$ 가 아래 조건을 만족한다고 하자. 이 조건들이 정리의 가설이며 하나라도 빠지면 결론이 성립하지 않는다.

- $T$ 는 [1차 논리](first-order-logic.md)의 이론이고 공리 집합이 인식 가능하다(recursively enumerable, 효과적 공리화).
- $T$ 는 무모순이다.
- $T$ 는 충분히 강하다. 구체적으로는 Robinson 산술(Robinson arithmetic) Q 하나만 해석할 수 있으면 된다. [Peano 산술](peano-axioms.md)(Peano arithmetic, PA), [ZFC](zfc-axioms.md)(Zermelo–Fraenkel 집합론에 선택공리를 더한 것), Q 자신 모두 해당한다.

덧셈만 있고 곱셈이 없는 Presburger 산술(Presburger arithmetic)은 Q 를 해석하지 못하고, 실제로 완전하다. 표준 모델 $\mathbb N$ 에서 참인 산술 문장 전체는 완전하고 무모순이지만 공리 집합이 인식 가능하지 않다. 두 이론은 가설이 하나씩 빠진 경우다.

## 산술화

각 기호, 논리식, 유한 증명열에 자연수를 단사로 대응시키는 것을 산술화(arithmetization)라 한다. 직관 절의 부호 매김에서 "$0=0$" 의 부호는 $90$ 이다. 논리식 $\varphi$ 의 부호를 꺾쇠로 쓴다.

$$
\ulcorner\varphi\urcorner\in\mathbb{N}
$$

" $n$ 은 $T$ 에서의 증명의 부호이고 그 결론은 $m$ 이다"라는 관계는 순수하게 구문적 검사이므로 [원시 재귀](recursive-functions.md) 관계다. 따라서 산술 논리식으로 표현된다. 이를 써서 증명 가능성 술어(provability predicate)를 정의한다.

$$
\mathrm{Pr}\_T(m)\quad :\equiv\quad \exists n\quad \mathrm{Proof}\_T(n,m)
$$

증명 가능성 술어는 다음 세 성질을 만족한다. 이것을 Hilbert–Bernays–Löb 파생 조건(derivability conditions)이라 한다.

$$
T\vdash\varphi \implies T\vdash \mathrm{Pr}\_T(\ulcorner\varphi\urcorner)
$$

$$
T\vdash \mathrm{Pr}\_T(\ulcorner\varphi\to\psi\urcorner)\to\bigl(\mathrm{Pr}\_T(\ulcorner\varphi\urcorner)\to \mathrm{Pr}\_T(\ulcorner\psi\urcorner)\bigr)
$$

$$
T\vdash \mathrm{Pr}\_T(\ulcorner\varphi\urcorner)\to \mathrm{Pr}\_T(\ulcorner \mathrm{Pr}\_T(\ulcorner\varphi\urcorner)\urcorner)
$$

무모순성 문장은 모순이 증명되지 않는다는 진술로 정의한다.

$$
\mathrm{Con}(T)\quad :\equiv\quad \neg\thinspace\mathrm{Pr}\_T(\ulcorner 0=1\urcorner)
$$

## 대각선 보조정리

대각선 보조정리(diagonal lemma)는 다음 진술이다. 자유 변수 하나를 가진 임의의 논리식 $\psi$ 에 대해, 다음을 만족하는 문장 $D$ 가 존재한다[^1].

$$
T\vdash\quad D\quad \leftrightarrow\quad \psi(\ulcorner D\urcorner)
$$

$\psi(x)$ 를 $\neg\thinspace\mathrm{Pr}\_T(x)$ 로 두면 직관 절의 문장 $G$ 가 나온다. 증명의 요지는 다음과 같다. 대입 연산 "논리식의 부호와 수를 받아 대입 결과의 부호를 내놓는 함수"가 산술적으로 표현 가능하다는 사실을 쓴다. 자기 자신의 부호를 자기에게 대입하는 논리식을 만들면 위 동치가 $T$ 안에서 증명된다.

# 성질

## 제1정리

$T$ 가 효과적으로 공리화된 무모순 이론이고 Robinson 산술을 해석하면, $T$ 에서 증명도 반증도 되지 않는 산술 문장이 존재한다[^2].

대각선 보조정리를 $\psi(x)$ 로 " $x$ 는 증명 불가능"을 두어 적용하면 Gödel 문장 $G$ 를 얻는다.

$$
T\vdash\quad G\quad \leftrightarrow\quad \neg\thinspace\mathrm{Pr}\_T(\ulcorner G\urcorner)
$$

$G$ 는 증명되지 않는다. $T$ 가 $G$ 를 증명하면 첫 번째 파생 조건으로 $T$ 는 증명 가능성도 증명하고, $G$ 의 동치에서 그 부정도 증명한다. 이는 $T$ 의 무모순성에 반한다.

$G$ 의 부정도 증명되지 않는다. $T$ 가 $G$ 의 부정을 증명하면 $T$ 는 " $G$ 의 증명이 존재한다"를 증명한다. 그런데 실제 증명은 없다. 즉 각 구체적 $n$ 에 대해 " $n$ 은 $G$ 의 증명이 아니다"가 증명되면서 존재 문장도 증명되는 상황이다. 이를 배제하는 원래 가정이 $\omega$ 무모순성($\omega$-consistency)이다. Rosser(1936)는 증명 가능성 대신 "이 증명보다 짧은 반증이 없는 증명"이라는 변형 술어를 써서, 단순 무모순성만으로 같은 결론을 얻었다[^3].

표준 모델에서 $G$ 는 참이다. 실제로 증명이 없으므로 "증명이 없다"는 참이다. 다만 이 "참"은 $T$ 밖에서의 판정이다.

## 제2정리

$T$ 가 위 조건을 만족하고 무모순이면 $T$ 는 $\mathrm{Con}(T)$ 를 증명하지 못한다.

제1정리의 전반부 논법을 형식화하면 다음이 $T$ 안에서 증명된다.

$$
T\vdash\quad \mathrm{Con}(T)\to G
$$

만약 $T$ 가 $\mathrm{Con}(T)$ 를 증명하면 $G$ 도 증명하게 되어 제1정리에 모순이다. 세 파생 조건만으로 이 결론이 나오므로, 증명에는 증명 가능성 술어의 형식적 성질만 쓰인다. 이 결과로 유한적 수단만으로 수학 전체의 무모순성을 증명하려던 Hilbert 계획(Hilbert's program)의 원래 형태는 실현될 수 없다([Hilbert 계획과 형식주의](formalism-hilbert-program.md)). 같은 조건에서 Löb 정리(Löb's theorem)가 따라 나온다.

$$
T\vdash \mathrm{Pr}\_T(\ulcorner\varphi\urcorner)\to\varphi\quad \Longrightarrow\quad T\vdash\varphi
$$

## 정지 문제와의 관계

효과적으로 공리화된 무모순 이론 $T$ 의 정리 집합은 인식 가능하지만 결정 가능하지 않다. 결정 가능하다면 문장마다 증명 여부를 판정할 수 있어 $T$ 가 완전해지는데, 제1정리가 이를 막는다. 거꾸로 [정지 문제](halting-problem.md)의 결정 불가능성에서 제1정리를 얻을 수도 있다. "프로그램 $p$ 가 입력 $x$ 에서 멈추지 않는다"는 문장들이 모두 증명 가능한 완전한 체계가 있다면, 증명 탐색과 실행을 병렬로 돌려 정지 문제를 결정한다([계산 가능성](computability.md), [Rice 정리](rice-theorem.md)). 두 결과 모두 대각선 논법으로 증명된다.

## 흔한 오해

- "참인데 증명 불가능한 문장이 있다"는 절대적 의미가 아니다. 각 문장은 어떤 이론에 대해 증명 불가능하다. $G$ 는 $T$ 에서 증명되지 않지만 $T$ 에 $G$ 를 공리로 추가한 이론에서는 증명된다. 그 새 이론에는 다시 새로운 Gödel 문장이 생긴다.
- 수학의 특정 문제가 원리적으로 해결 불가능하다는 뜻이 아니다. 정리는 모든 문장을 결정하는 완전한 효과적 체계가 없다는 진술이다.
- 사람의 마음이 기계를 넘어선다는 결론은 따라 나오지 않는다. 정리는 형식체계에 대한 진술이며, 사람의 수학적 판단이 무모순임을 전제하지 않는다.
- 자기 무모순성을 증명하는 체계가 아예 없다는 뜻도 아니다. 무모순이지만 약해서 가설을 만족하지 못하는 체계나, 애초에 모순인 체계는 자기 무모순성을 증명할 수 있다. 또 $T$ 의 무모순성은 더 강한 이론에서 증명될 수 있다. Gentzen 은 $\varepsilon_0$ 까지의 초한귀납법으로 PA 의 무모순성을 증명했다([서수](ordinals.md)).
- Gödel 의 완전성 정리와 불완전성 정리는 서로 다른 "완전"을 쓴다. 전자는 논리의 증명 규칙이 의미론적 귀결을 모두 포착한다는 뜻이고, 후자는 특정 이론이 자기 언어의 모든 문장을 결정하지 못한다는 뜻이다. 둘은 모순이 아니다.

# 활용

## 독립 문장의 실제 예

Gödel 문장은 인공적이지만, 자연스러운 수학 문장 중에도 PA 에서 독립인 것이 있다.

- [Goodstein 정리](goodstein-theorem.md): 어떤 자연수에서 시작하는 Goodstein 수열도 유한 단계에서 0에 도달한다. 증명은 각 항에 서수를 배정해 감소함을 보이는 것으로, $\varepsilon_0$ 까지의 초한귀납법을 요구하며 PA 에서 증명되지 않는다.
- [Paris–Harrington 정리](paris-harrington.md): Ramsey 정리의 강화판으로, PA 에서 독립이다([Ramsey 이론](ramsey-theory.md)).
- ZFC 에서는 [연속체 가설](continuum-hypothesis.md)과 [선택공리](axiom-of-choice.md)의 독립성이 forcing 으로 증명되었다. 다만 이 독립성은 불완전성 정리의 논법과는 다른 방법의 결과다.

## 증명 가능성 논리

파생 조건 세 개를 양상 논리(modal logic)의 공리로 두면 체계 GL(Gödel–Löb)이 된다. 증명 가능성 술어를 상자 기호로 쓰면 Löb 공리는 다음과 같고, Solovay 의 정리로 GL 은 PA 의 증명 가능성에 대해 건전하고 완전하다.

$$
\Box(\Box\varphi\to\varphi)\to\Box\varphi
$$

[^1]: Gödel's Incompleteness Theorems, Stanford Encyclopedia of Philosophy (대각선 보조정리와 파생 조건). https://plato.stanford.edu/entries/goedel-incompleteness/
[^2]: Gödel's incompleteness theorems, Wikipedia. https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems
[^3]: Rosser's trick, Wikipedia ( $\omega$ -무모순성 가정의 제거). https://en.wikipedia.org/wiki/Rosser%27s_trick

# 연관 문서

## 선수지식

- [1차 논리](first-order-logic.md)
- [Peano 공리](peano-axioms.md)
- [계산 가능성](computability.md)

## 더 알아보기

- [Paris–Harrington 정리](paris-harrington.md)
- [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md)

#logic #foundations #theorem
