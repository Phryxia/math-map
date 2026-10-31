# 연속체 가설

# 개요

**연속체 가설(continuum hypothesis, CH)** 은 자연수 집합보다 크고 [실수](real-numbers.md) 집합보다 작은 집합이 없다는 주장이다. 구간 $\lbrack 0,1\rbrack$ 안의 유리수 전체는 자연수와 일대일로 짝지어지고 [Cantor 집합](cantor-set.md)은 실수 전체와 일대일로 짝지어지는데, 실수의 무한 부분집합 가운데 둘 다 안 되는 것이 있는지 묻는 문제다. 연속체 가설은 그런 집합이 없다고 답하고, 이 답은 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)로 증명도 반증도 되지 않는다.

# 직관

실수의 [기수](cardinality.md)는 자연수의 기수보다 크다. 자연수보다 크고 실수 전체보다 작은 실수의 부분집합이 있는가. 닫힌집합이나 Borel 집합처럼 다루기 좋은 집합은 가산이거나 완전집합(perfect set)을 포함해 연속체 크기라서 중간 크기가 나오지 않는다. 임의의 부분집합을 허용하면 통제 수단이 없어진다. 뿌리는 멱집합 연산이다. ZFC 는 멱집합의 존재를 말할 뿐 그 안에 무엇이 들어 있는지 규정하지 않는다.

# 정의

## 연속체 가설

[서수](ordinals.md)로 무한 기수에 차례로 이름을 붙인다. 가장 작은 무한 기수가 $\aleph_0$, 그다음이 $\aleph_1$ 이다. 실수 집합의 크기는 자연수 집합의 멱집합의 크기와 같다.

$$
|\mathbb{R}| \thickspace=\thickspace 2^{\aleph_0}
$$

연속체 가설은 다음 등식이다. Cantor 가 제기했고, Hilbert 가 1900년에 제시한 23개 문제 가운데 첫 번째다.

$$
2^{\aleph_0} = \aleph_1
$$

개요의 두 예에서 $\lbrack 0,1\rbrack$ 의 유리수 전체는 크기 $\aleph_0$, Cantor 집합은 크기 $2^{\aleph_0}$ 이다. CH 가 참이면 실수의 셀 수 없는 부분집합은 전부 Cantor 집합과 크기가 같다.

**일반화 연속체 가설(generalized continuum hypothesis, GCH)** 은 모든 무한 기수 $\kappa$ 에 대한 다음 등식이다. 오른쪽 위 첨자는 바로 다음 기수다.

$$
2^{\kappa} = \kappa^{+}
$$

$\kappa=\aleph_0$ 이면 이 등식이 CH 이고, $\kappa=\aleph_1$ 이면 $2^{\aleph_1}=\aleph_2$ 다.

## 구성가능 우주

[구성가능 우주](constructible-universe.md) $L$ 은 각 단계에서 [1차 논리](first-order-logic.md)식으로 정의되는 부분집합만 취해 초한 재귀로 쌓은 모임이다. 일반 멱집합 대신 정의 가능한 부분집합만 취하므로 단계마다 크기를 셀 수 있다.

## 강제법

$M$ 을 ZFC 의 가산 추이 모형(countable transitive model), $P$ 를 $M$ 안의 [부분순서](partial-orders.md)라 하자. $M$ 안의 모든 조밀 부분집합과 만나는 $P$ 의 필터 $G$ 를 $M$ 위의 **일반 필터(generic filter)** 라 하고, $M$ 과 $G$ 로부터 생성되는 최소의 ZFC 모형을 $M\lbrack G\rbrack$ 로 쓴다. $M$ 이 가산이므로 조밀집합도 가산 개이고, Rasiowa–Sikorski 보조정리(Rasiowa–Sikorski lemma)가 일반 필터의 존재를 준다.

CH 를 깨는 데 쓰는 $P$ 는 $\kappa \times \omega$ 의 유한 부분집합에서 $\lbrace 0, 1 \rbrace$ 로 가는 함수들의 순서이고, 포함이 클수록 강한 조건이다. 각 조건은 유한한 정보만 확정하고, 모든 조밀집합을 만나는 필터가 이 조각들을 이어 붙여 $\kappa$ 개의 무한 비트열을 완성한다. 구성의 상세는 [강제법](forcing.md)에 있다.

$\kappa=1$ 이면 조건은 자연수의 유한 집합에서 $\lbrace 0,1\rbrace$ 로 가는 함수다. $p=\lbrace (0,1),(3,0)\rbrace$ 는 비트열의 $0$ 번 자리가 $1$, $3$ 번 자리가 $0$ 이라고 정하고, $q=p\cup\lbrace (5,1)\rbrace$ 는 $p$ 보다 강한 조건이다.

# 성질

## 동치 형태

CH 는 실수의 모든 무한 부분집합이 자연수 집합과 대등하거나 실수 전체와 대등하다는 진술과 동치다. Sierpiński 는 GCH 에서 [선택공리](axiom-of-choice.md)가 따라 나옴을 보였다.

## Gödel 의 결과

Gödel 은 1938년에 ZF(Zermelo–Fraenkel)에서 $L$ 이 ZFC 와 GCH 를 만족함을 증명할 수 있다. 따라서 ZF 가 무모순이면 ZFC + GCH 도 무모순이다.

증명의 요지는 다음과 같다. $L$ 은 추이적이고 모든 서수를 포함하므로 ZF 의 공리들이 상대화되어 성립한다. 선택공리는 $L$ 의 원소들이 구성 순서에 따라 정의 가능하게 잘 정렬되므로 나온다. GCH 는 응축 보조정리(condensation lemma)에서 나온다. $L_\alpha$ 의 기본 부분구조를 잡아 추이 붕괴하면 다시 어떤 $L_\beta$ 가 되고, 여기서 $L$ 안의 $\kappa$ 의 부분집합들이 모두 낮은 단계에 이미 나타나 개수 상한이 정해진다.

CH 는 ZFC 에서 반증 불가능하다. 중간 크기 집합의 존재는 ZFC 로 증명할 수 없다.

## Cohen 의 결과

Cohen 은 1963년에 ZFC 가 무모순이면 ZFC + CH 의 부정도 무모순임을 보였다[^1].

증명의 요지는 다음과 같다. 가산 추이 모형 $M$ 에서 시작해 위의 $P$ 로 확장을 만든다. $\kappa$ 를 $M$ 이 $\aleph_2$ 라고 여기는 기수로 잡으면 일반 필터가 서로 다른 $\kappa$ 개의 실수를 준다. 임의의 두 첨자에 대해 어느 자리에서 값이 갈리게 하는 조건들의 모임이 조밀하므로 실수들이 서로 다르다.

기수 붕괴(collapse of cardinals)는 일어나지 않는다. 조건이 유한이므로 $P$ 는 가산 반사슬 조건(countable chain condition)을 만족하고, $M$ 의 기수가 $M[G]$ 에서도 기수로 남는다. 따라서 $M[G]$ 에서 실수는 적어도 $\aleph_2$ 개이고 CH 는 거짓이다.

강제법은 이후 집합론의 표준 기법이 되었다. [Boolean 값 모형](boolean-valued-models.md)으로 다시 쓰면 [Boole 대수](boolean-algebras.md) 위의 값매김이 되어 순수 대수적으로 다룰 수 있다.

## 연속체 크기의 자유도

Easton 정리(Easton's theorem)는 다음이다. 정칙 기수(regular cardinal)들 위에서 멱집합 함수는 단조성과 König 의 부등식(König's inequality)만 지키면 무엇이든 될 수 있다. König 의 부등식은 공종도(cofinality)에 대한 제약이다.

$$
\mathrm{cf}\big(2^{\kappa}\big) \gt\kappa
$$

연속체의 크기가 $\aleph_\omega$ 가 되는 것은 그 기수의 공종도가 $\aleph_0$ 이므로 불가능하다. $\aleph_2$, $\aleph_{17}$, $\aleph_{\omega+1}$ 은 모두 가능하다.

특이 기수(singular cardinal)에서는 사정이 다르다. Silver 정리(Silver's theorem)로 비가산 공종도의 특이 기수에서 GCH 는 처음 깨질 수 없고, Shelah 의 pcf 이론(pcf theory)은 특이 기수의 멱집합 크기에 ZFC 만으로 증명되는 상한을 준다. 자유도는 정칙 기수 쪽에 몰려 있다.

## 큰 기수 공리의 한계

Gödel 은 [큰 기수](large-cardinals.md) 공리가 CH 를 결정해 주기를 기대했다. Levy–Solovay 정리(Levy–Solovay theorem)에 따르면 크기가 작은 강제 확대는 큰 기수의 성질을 보존하므로, 큰 기수를 가정해도 CH 를 참으로도 거짓으로도 만드는 확장이 있다.

큰 기수 공리는 실수의 다루기 좋은 부분집합들에 대해서는 많은 것을 결정한다. 충분한 큰 기수가 있으면 [사영 계층](projective-hierarchy.md)의 집합들은 모두 Lebesgue [측도](measure.md) 가측이고 완전집합 성질을 가진다. 결정되지 않는 것은 임의의 부분집합에 관한 질문, 곧 CH 자체다.

## 이후의 논쟁

논쟁은 CH 에 진리값이 있는가라는 물음으로 옮겨졌다.

다중우주 관점(multiverse view)에서 집합론적 우주는 하나가 아니며 CH 는 어떤 우주에서는 참이고 어떤 우주에서는 거짓이다. 이 관점에서 독립성은 문제의 해소다. [수학적 구조주의](mathematical-structuralism.md)와 친화적이다.

유일 우주 관점(universe view)에서 집합 개념은 하나의 우주를 의도하며 아직 옳은 공리를 못 찾았을 뿐이다. [수학적 플라톤주의](mathematical-platonism.md)가 여기에 해당한다.

Woodin 은 후자의 입장에서 작업해 왔다. 2000년 전후에는 $\Omega$-논리($\Omega$-logic)의 틀에서 연속체의 크기가 $\aleph_2$ 여야 한다는 논거를 제시했고[^2], 이후 Ultimate L 이라 불리는 내부 모형 계획으로 방향을 바꾸었다. 그 계획이 성공하면 CH 는 참이 된다. Foreman 과 Magidor 는 Martin 의 최대 원리(Martin's maximum) 같은 강한 강제 공리(forcing axiom)를 지지하며, 이 공리는 연속체의 크기가 $\aleph_2$ 임을 함의한다.

합의에 이른 쪽은 없다. 논쟁의 성격이 수학적 증명이 아니라 공리 선택의 정당화다[^3].

# 활용

- 강제법은 [Suslin 문제](suslin-problem.md), Whitehead 문제(Whitehead problem), Borel 집합 밖의 측도 문제 등 여러 명제가 ZFC 와 독립임을 보이는 표준 도구다.
- CH 를 가정하면 Lebesgue 측도가 0 이면서 비가산인 집합들이 구성되고 [Banach 공간](banach-spaces.md)론의 특정 반례가 만들어진다. [Martin 의 공리](martins-axiom.md)처럼 CH 를 부정하는 방향의 공리를 가정하면 위상공간의 여러 성질이 정리된다.
- [Gödel 불완전성 정리](godel-incompleteness.md)는 충분히 강한 체계에 결정 불가능한 문장이 있다는 일반적 사실이고 그 문장은 대각화로 만든 인위적인 것이다. CH 는 수학자가 실제로 물은 질문이 결정되지 않는 사례이며, [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md)이 기대한 완결된 공리화의 어려움을 보인다.
- 공리 선택의 기준으로 내적 정합성, 다른 정리들과의 연결, 직관적 자명성, 결과의 유용성이 제시된다. 이 논의는 수학적 대상의 존재를 보는 입장과 분리되지 않는다.

[^1]: Paul J. Cohen, "The Independence of the Continuum Hypothesis", PNAS 50 (1963), https://www.pnas.org/doi/10.1073/pnas.50.6.1143
[^2]: W. Hugh Woodin, "The Continuum Hypothesis, Part I", Notices of the AMS 48 (2001), https://www.ams.org/notices/200106/fea-woodin.pdf
[^3]: Stanford Encyclopedia of Philosophy, "The Continuum Hypothesis", https://plato.stanford.edu/entries/continuum-hypothesis/

# 연관 문서

## 선수지식

- [기수](cardinality.md)
- [ZFC 공리계](zfc-axioms.md)
- [서수](ordinals.md)

## 더 알아보기

- [강제법](forcing.md)

#set_theory #foundations
