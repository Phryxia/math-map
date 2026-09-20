# 강제법

# 개요

강제법은 집합론의 한 모형에 새 집합을 더해 더 큰 모형을 만드는 방법이다. Cohen 이 [연속체 가설](continuum-hypothesis.md)의 독립성을 보이려고 1963년에 고안했다.

더한 결과가 다시 ZFC(Zermelo–Fraenkel with choice)의 모형이 되고, 새 모형에서 무엇이 참인지를 더하기 전의 모형 안에서 판정할 수 있다. 이 두 성질이 강제법을 독립성 증명의 표준 도구로 만든다.

# 직관

[ZFC 공리계](zfc-axioms.md)의 추이 모형 $M$ 이 있고 그 안에서 연속체 가설이 참이라 하자. 가설을 깨려면 실수를 더 넣어야 한다. 그런데 넣으려는 실수는 $M$ 안에 없으므로 $M$ 의 언어로 그것을 지목할 수 없다.

실수 하나를 $0$ 과 $1$ 의 무한 비트열로 본다. $M$ 안에서 적을 수 있는 것은 유한 비트열이다. 유한 비트열 $p$ 뒤에 비트를 더 붙여 $q$ 를 만들면 $q$ 는 $p$ 가 정한 자리를 모두 같게 정하고 몇 자리를 더 정한다. 이렇게 늘려 가는 유한 비트열의 사슬 하나가 무한 비트열 하나를 완성한다.

아무 사슬이나 늘리면 $M$ 에 이미 있는 비트열이 나온다. 뒤를 전부 $0$ 으로 채우면 그렇다. $M$ 안의 실수 $x$ 를 피하려면 $x$ 와 값이 갈리는 자리를 한 번은 지나야 하는데, 어떤 유한 비트열에서 출발하든 한 자리만 더 붙이면 $x$ 와 갈리게 할 수 있다. 어디서 출발해도 늘려서 도달할 수 있는 $M$ 안의 비트열 모임을 조밀하다고 한다. 사슬이 조밀한 모임을 하나도 빠짐없이 지나면 얻은 비트열은 $M$ 의 어느 실수와도 다르다.

$M$ 을 가산으로 잡으면 조밀한 모임도 가산 개이므로 하나씩 차례로 지나게 해 사슬을 완성할 수 있다. 얻은 비트열은 $M$ 밖에 있지만 $M$ 안의 유한 비트열들로만 만들어졌으므로, 각 유한 비트열이 "내가 사슬에 들어가면 새 우주에서 이런 일이 성립한다"고 정하는 바를 $M$ 안에서 계산할 수 있다. 이 조밀한 모임이 조밀집합, 사슬이 일반 필터, 계산되는 관계가 강제 관계다.

# 정의

## 강제 순서

**강제 순서**는 최대원 $1$ 을 가진 부분순서 $(P, \le)$ 다. 원소를 **조건**이라 하고, $q \le p$ 를 $q$ 가 $p$ 보다 **강하다**고 읽는다. 강한 조건은 약한 조건이 정한 것을 모두 정하고 더 정한다.

두 조건 $p, q$ 는 $r \le p$ 이고 $r \le q$ 인 $r$ 이 있으면 **양립한다**고 한다. 서로 양립하지 않는 조건들의 집합이 **반사슬**이다.

## 조밀집합과 일반 필터

$D \subseteq P$ 가 **조밀**하다는 것은 모든 $p \in P$ 에 대해 $q \le p$ 인 $q \in D$ 가 있다는 뜻이다.

$G \subseteq P$ 가 **필터**라는 것은 다음 둘이 성립한다는 뜻이다.

- $p \in G$ 이고 $p \le q$ 이면 $q \in G$ 다.
- $p, q \in G$ 이면 $r \le p$ 이고 $r \le q$ 인 $r \in G$ 가 있다.

필터 $G$ 가 $M$ 에 속하는 모든 조밀집합 $D$ 에 대해 $G \cap D \neq \varnothing$ 을 만족하면 $M$ 위의 **일반 필터**라 한다.

## 이름과 확대 모형

$P$ 에 대한 **이름**을 초한 재귀로 정의한다. $\tau$ 가 이름이라는 것은 $\tau$ 가 순서쌍 $(\sigma, p)$ 들의 집합이고 각 $\sigma$ 가 이름이며 각 $p$ 가 $P$ 의 조건이라는 뜻이다. 일반 필터 $G$ 가 주어지면 이름의 **값**을 다시 초한 재귀로 정한다.

$$
\tau^G = \lbrace \sigma^G : (\sigma, p) \in \tau \thinspace\text{ 이고 }\thinspace p \in G \rbrace
$$

$M$ 에 속하는 이름 전체를 $M^P$ 라 쓰고, 그 값들의 모임이 **확대 모형**이다.

$$
M\lbrack G\rbrack = \lbrace \tau^G : \tau \in M^P \rbrace
$$

## 강제 관계

조건 $p$ 와 이름들로 쓴 논리식 $\varphi$ 에 대해, $p$ 를 원소로 갖는 모든 일반 필터 $G$ 가 $M\lbrack G\rbrack \models \varphi$ 를 만족할 때 $p \Vdash \varphi$ 로 쓰고 $p$ 가 $\varphi$ 를 **강제한다**고 한다.

## Cohen 순서

유한 부분함수들의 순서가 새 실수를 만든다.

$$
\mathrm{Add}(\omega, \kappa) = \lbrace p : p \thinspace\text{ 는 } \kappa \times \omega \thinspace\text{ 의 유한 부분집합에서 } \lbrace 0, 1 \rbrace \thinspace\text{ 로 가는 함수} \rbrace
$$

순서는 포함의 역이다. $q \le p$ 는 $q \supseteq p$ 를 뜻한다.

# 성질

## 일반 모형 정리

**정리.** $M$ 이 ZFC 의 가산 추이 모형이고 $G$ 가 $M$ 위의 일반 필터이면 $M\lbrack G\rbrack$ 은 ZFC 의 추이 모형이고, $M \subseteq M\lbrack G\rbrack$ 이며 $G \in M\lbrack G\rbrack$ 이고, 두 모형의 서수는 같다.

증명의 요지는 공리마다 필요한 이름을 $M$ 안에서 구성하는 것이다. 분리 공리와 치환 공리는 강제 관계가 $M$ 안에서 정의 가능하다는 아래 정리를 써서, 원하는 집합의 이름을 $M$ 안의 논리식으로 잘라 낸다. 선택공리는 $M$ 의 정렬을 이름 쪽으로 옮겨 얻는다. 서수가 늘지 않는 것은 이름의 값이 이름의 계수보다 높은 계수를 갖지 않기 때문이다.

## 정의 가능성과 진리

**정리(정의 가능성).** 관계 $p \Vdash \varphi$ 는 $M$ 안에서 정의 가능하다.

**정리(진리 보조정리).** $M\lbrack G\rbrack \models \varphi$ 인 것과 어떤 $p \in G$ 가 $p \Vdash \varphi$ 인 것이 동치다.[^1]

두 정리를 합치면 확대 모형에서 무엇이 참인지를 $M$ 안에서 판정할 수 있다. $M\lbrack G\rbrack$ 은 $M$ 밖에 있지만 그것에 대한 질문은 $M$ 안의 질문으로 번역된다. 강제법이 독립성 증명에 쓰이는 근거가 이 번역이다.

정의 가능성 정리의 증명은 $\varphi$ 의 구조에 대한 귀납이다. 원자식은 이름의 계수에 대한 재귀로, 부정은 $p \Vdash \neg\varphi$ 를 "$q \le p$ 인 어떤 $q$ 도 $\varphi$ 를 강제하지 않는다"로, 존재 양화는 조밀성으로 처리한다.

## 일반 필터의 존재

**정리(Rasiowa–Sikorski).** $M$ 이 가산이면 임의의 조건 $p$ 에 대해 $p \in G$ 인 $M$ 위의 일반 필터 $G$ 가 있다.

$M$ 이 가산이므로 $M$ 안의 조밀집합을 $D_0, D_1, D_2, \dots$ 로 줄 세운다. $p_0 = p$ 에서 시작해 $p_{n+1}$ 을 $D_n$ 에 속하면서 $p_n$ 보다 강한 조건으로 잡는다. 조밀성이 매 단계의 선택을 보장한다. 이 사슬이 생성하는 필터가 일반 필터다. 가산 추이 모형의 존재는 [Löwenheim–Skolem 정리](lowenheim-skolem.md)와 추이 붕괴에서 나온다.

## 기수 보존

$P$ 의 반사슬이 모두 가산이면 $P$ 가 **가산 반사슬 조건**(countable chain condition, ccc)을 만족한다고 한다.

**정리.** $P$ 가 ccc 를 만족하면 $M$ 의 기수와 공종도가 $M\lbrack G\rbrack$ 에서도 그대로다.

$\dot f$ 가 $M\lbrack G\rbrack$ 의 함수 $\alpha \to \beta$ 의 이름이라 하자. 각 $\xi \lt \alpha$ 에 대해 값의 후보를 모은다.

$$
A_\xi = \lbrace \eta \lt \beta : \thinspace\text{ 어떤 } p \in P \thinspace\text{ 가 } \dot f(\xi) = \eta \thinspace\text{ 를 강제한다} \rbrace
$$

서로 다른 $\eta$ 를 강제하는 조건들은 양립하지 않으므로 반사슬을 이루고, ccc 에 의해 $\vert A_\xi \vert \le \aleph_0$ 이다. $M$ 안에서 $f$ 의 치역이 가산 집합 $\alpha$ 개의 합집합에 들어가므로 $\beta$ 가 $\alpha$ 로 붕괴할 수 없다.

$\mathrm{Add}(\omega, \kappa)$ 는 조건이 유한이므로 ccc 를 만족한다. 따라서 $\kappa$ 개의 새 실수를 더해도 기수는 그대로이고, $\kappa$ 를 $\aleph_2$ 로 잡으면 확대 모형에서 $2^{\aleph_0} \ge \aleph_2$ 가 되어 연속체 가설이 깨진다.

붕괴를 목적으로 하는 순서도 있다. Levy 붕괴 $\mathrm{Coll}(\omega, \kappa)$ 는 $\omega$ 에서 $\kappa$ 로 가는 유한 부분함수들의 순서이고, 확대 모형에서 $\kappa$ 를 가산으로 만든다.

## 반복 강제법

한 번의 확대로 얻은 모형에서 다시 강제하는 조작을 **반복 강제법**이라 한다. 극한 단계에서 앞 단계들의 조건을 어떻게 이어 붙일지가 선택 사항이고, 유한 개의 좌표에서만 자명하지 않은 값을 갖게 하는 것이 유한 지지 반복이다.

ccc 순서의 유한 지지 반복은 다시 ccc 를 만족한다. Solovay 와 Tennenbaum 은 이 성질로 Martin 의 공리와 연속체 가설의 부정이 함께 무모순임을 보였다.[^2]

# 활용

- 연속체 가설의 독립성 증명에서 Cohen 순서가 새 실수를 더한다. [연속체 가설](continuum-hypothesis.md) 문서의 Cohen 의 결과 절이 이 구성이다.
- Suslin 가설과 Whitehead 문제가 ZFC 와 독립임을 보이는 데 반복 강제법이 쓰인다. 두 문제 모두 한쪽 방향은 구성가능 우주에서, 다른 쪽은 강제 확대에서 나온다.
- 강제 공리는 특정 종류의 순서에 대해 조밀집합을 충분히 많이 만나는 필터가 실제로 존재한다고 주장한다. Martin 의 공리는 ccc 순서에 대한 강제 공리이고, 여기서 Lebesgue [측도](measure.md)와 위상공간의 여러 성질이 따라 나온다.
- Levy 와 Solovay 는 크기가 작은 강제 확대가 거대기수의 성질을 보존함을 보였다. 따라서 거대기수 공리를 가정해도 연속체 가설을 참으로도 거짓으로도 만드는 확대가 있다.
- 강제 순서를 완비 [Boolean 대수](boolean-algebras.md)로 바꾸면 확대 모형이 Boolean 값 모형이 되고, 일반 필터를 고르는 단계 없이 대수적으로 다룰 수 있다.

[^1]: Kenneth Kunen, *Set Theory: An Introduction to Independence Proofs*, North-Holland (1980), Ch. VII. 이름, 강제 관계, ccc 기수 보존의 표준적인 전개다.
[^2]: R. M. Solovay and S. Tennenbaum, "Iterated Cohen Extensions and Souslin's Problem", Annals of Mathematics 94 (1971), https://www.jstor.org/stable/1970860

# 연관 문서

## 선수지식

- [연속체 가설과 독립성](continuum-hypothesis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #logic #foundations
