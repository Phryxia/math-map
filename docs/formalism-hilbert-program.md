# 형식주의와 Hilbert 프로그램

# 개요

형식주의는 수학을 기호 체계와 그 위의 규칙 조작으로 보는 입장이고, Hilbert 프로그램은 그 입장을 구체적 연구 계획으로 만든 것이다. 계획의 핵심은 무한을 다루는 고전 수학 전체를 유한한 형식체계로 공리화하고, 그 체계의 무모순성을 논란 없는 유한주의적(finitary) 방법만으로 증명하는 것이었다. 성공하면 무한에 관한 추론은 유한한 사실을 얻기 위한 안전한 도구로 정당화된다. Gödel의 불완전성 정리는 이 목표의 강한 형태가 불가능함을 보였고[^1], 이후 계획은 "어떤 무한적 방법이 어떤 유한적 · 구성적 방법으로 환원되는가"를 측정하는 증명론으로 재편되었다. 남은 유산은 서수 분석, relativized Hilbert program, reverse mathematics다.

# 직관

Hilbert 는 무한 집합을 물리학의 "무한히 먼 점" 과 같은 지위로 두었다. 실재하는 대상이 아니라 계산을 매끄럽게 하는 이상적 원소다. 계획은 유한하게 확인 가능한 명제(real statement)와 그것을 다루기 편하게 하는 명제(ideal statement)를 나누고, 이상적 부분을 통과한 증명이 유한적 결론을 망치지 않음을 보이는 것이다.

무모순성 증명은 규칙을 아무리 길게 적용해도 $0=1$ 이라는 문자열이 나오지 않는다는, 기호열에 관한 유한한 주장이다. Hilbert 는 이런 주장이라면 철학적 전제 없이 검사할 수 있다고 보았다.

# 정의

형식체계는 기호 집합, 논리식의 문법, 공리 집합, 추론 규칙으로 구성되며 증명은 유한한 기호열의 나열이다. 이 층위에서 의미는 사용하지 않는다. [1차 논리](first-order-logic.md)가 그 표준 틀이다.

체계 $T$ 의 무모순성은 다음으로 정의한다.

$$
\mathrm{Con}(T)\ :\equiv\ \neg\thinspace\exists p\ \big(\mathrm{Proof}\_T(p,\ \ulcorner 0=1\urcorner)\big)
$$

Hilbert가 요구한 유한주의적 관점은 구체적으로 주어진 기호 구성물만 다루고, 완결된 무한 전체에 대한 양화를 쓰지 않으며, 결정 가능한 술어와 원시재귀적 구성만 허용한다. 현대적 대응물로는 원시재귀 산술(primitive recursive arithmetic, PRA)을 쓴다[^1].

명제를 두 부류로 나눈다.

$$
\text{real: } \forall x\thinspace R(x)\ (R \text{ 결정 가능})\ \text{의 각 예시},\qquad
\text{ideal: } \text{완결된 무한을 양화하는 명제}
$$

프로그램의 두 목표는 다음과 같이 적을 수 있다. $S$ 는 유한주의 체계, $T$ 는 고전 수학의 형식화라 하자.

$$
\textbf{(무모순성)}\quad S \vdash \mathrm{Con}(T)
$$

$$
\textbf{(보존성)}\quad T \vdash \varphi \ \Longrightarrow\ S \vdash \varphi \qquad (\varphi\ \text{는 real 명제})
$$

보존성은 무모순성에서 따라온다. $T$ 가 무모순임을 $S$ 에서 증명할 수 있으면, $T$ 가 증명한 유한적 명제가 $S$ 에서도 확인된다는 논증을 $S$ 안에서 수행할 수 있다.

# 성질

## 불완전성 정리의 타격

Gödel 제1정리에 의해 재귀적으로 공리화되고 충분히 강하며 무모순인 $T$ 는 결정할 수 없는 명제를 가진다. 따라서 "모든 수학적 문제를 결정하는 완전한 체계"라는 목표는 즉시 무너진다. 제2정리는 더 직접적이다[^1].

$$
T \nvdash \mathrm{Con}(T)\qquad (T \supseteq \mathrm{PA},\ T\ \text{무모순},\ T\ \text{재귀적 공리화})
$$

PRA 는 Peano 산술(Peano arithmetic, PA)에 포함된다. 유한주의적 방법이 $T$ 안에서 형식화된다면 $S$ 에서의 $\mathrm{Con}(T)$ 증명은 $T$ 에서의 $\mathrm{Con}(T)$ 증명을 낳으므로 $T$ 는 모순이다. 자세한 진술과 증명 개요는 [Gödel 불완전성 정리](godel-incompleteness.md)에 있다.

논리적으로 남는 빈틈은 "유한주의가 PA 안에서 형식화된다"는 전제뿐이다. 이 전제를 부정하는 입장도 있으나 널리 받아들여지지는 않는다.

## Gentzen의 부분적 성공

Gentzen 은 1936 년에 PA 의 무모순성을 증명했다[^2]. 사용한 추가 원리는 서수 $\varepsilon\_0$ 까지의 초한귀납법이다.

$$
\varepsilon_0=\sup\lbrace\omega,\ \omega^{\omega},\ \omega^{\omega^{\omega}},\dots\rbrace
= \min\lbrace\alpha:\omega^{\alpha}=\alpha\rbrace
$$

PRA 에 $\varepsilon\_0$ 까지의 초한귀납법을 더한 체계는 PA 의 무모순성을 증명하고, 반대로 PA 는 $\varepsilon\_0$ 까지의 초한귀납법을 증명하지 못한다. $\varepsilon\_0$ 이 PA 의 증명론적 서수다. 초한귀납법은 유한주의의 범위를 넘으므로 제2정리와 모순되지 않고, 유한하게 조작 가능한 서수 표기 체계 위의 구성적 원리로 정당화된다. Gödel 의 Dialectica 해석(1958)은 같은 목표를 유한 타입 원시재귀 함수로 접근한 다른 환원이다.

## 재편된 프로그램

결론은 "무모순성 증명은 불가능하다"가 아니라 "어떤 증명도 증명 대상보다 강한 원리를 요구한다"다. 그래서 질문이 정량적으로 바뀐다.

- 서수 분석: 체계마다 증명론적 서수를 계산해 강도를 비교한다. PA 와 $\mathrm{ACA}\_0$ 은 $\varepsilon\_0$ , $\mathrm{ATR}\_0$ 은 $\Gamma\_0$ 이다.
- Relativized Hilbert program: 유한주의 대신 구성적 또는 약한 체계 $S$ 를 기준으로 삼아, $T$ 의 어떤 부류의 정리가 $S$ 로 환원되는지를 본다.
- Reverse mathematics: 해석학 · 대수학의 표준 정리들이 정확히 어떤 집합존재 공리와 동등한지 분류한다. Hilbert의 "어떤 무한이 실제로 필요한가"라는 물음의 현대적 형태다.

## 형식주의 자체에 대한 반론

수학이 순전히 무의미한 기호 놀이라면 왜 그 놀이가 물리 세계에 적용되는지 설명해야 한다. 또 무모순성 주장 자체는 기호열에 관한 실질적 산술 명제이므로, 극단적 형식주의는 자기 기반이 되는 metamathematics의 지위를 설명하지 못한다. 이 때문에 Hilbert 본인의 입장은 순수 형식주의가 아니라 유한적 산술에 관해서는 내용적 실재론을 유지하는 이중 구조로 읽는 것이 보통이다. [플라톤주의](mathematical-platonism.md)와 [직관주의](intuitionism.md)가 각각 반대쪽에서 이 이중 구조를 공격한다.

# 활용

- 증명 보조기와 형식 검증. 형식체계로 환원한다는 발상은 Coq · Lean · Isabelle 같은 체계에서 실제 기술이 되었다. 증명의 정당성이 유한한 규칙 검사로 귀결된다는 Hilbert의 관점이 커널 설계 원리 그대로다.
- 체계 강도 비교. 어떤 정리를 증명하려면 어떤 공리가 필요한지 묻는 실천적 습관. Goodstein 정리는 PA 에서 증명할 수 없고 $\varepsilon\_0$ 까지의 귀납법을 요구한다.
- 무모순성의 상대화. 큰 기수 공리를 다룰 때 "ZFC(Zermelo–Fraenkel 집합론에 [선택공리](axiom-of-choice.md)를 더한 공리계)가 무모순이면 ZFC + 공리도 무모순"이라는 형태의 상대적 무모순성만 목표로 삼는 관행은 제2정리 이후의 표준이다.
- 계산 가능성과의 접점. 결정 가능한 증명 술어라는 요구는 [계산 가능성](computability.md)의 언어로 정확히 표현된다. Hilbert의 Entscheidungsproblem이 부정적으로 해결된 것도 같은 맥락이다.

[^1]: Richard Zach, Hilbert's Program, Stanford Encyclopedia of Philosophy, §1–§3 (유한주의, real/ideal 구분, 보존성 목표, Gödel 정리의 영향과 Bernays의 관찰). https://plato.stanford.edu/entries/hilbert-program/
[^2]: Jan von Plato, The Development of Proof Theory, Stanford Encyclopedia of Philosophy, §4 (Gentzen 1936: 서수 초한귀납법에 의한 PA 무모순성 증명과 현대 증명론의 출발). https://plato.stanford.edu/entries/proof-theory-development/

# 연관 문서

## 선수지식

- [1차 논리](first-order-logic.md)
- [Gödel 불완전성 정리](godel-incompleteness.md)
- [수학기초론 개관](foundations-overview.md)

## 더 알아보기

아직 연결한 문서가 없다.

#philosophy_of_math #foundations #logic
