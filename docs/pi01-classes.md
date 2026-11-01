# Π⁰₁ 부류

# 개요

**Π⁰₁ 부류(Π⁰₁ class)** 는 계산 가능한 규칙으로 금지된 유한 문자열을 하나도 포함하지 않는 무한 $0$-$1$ 수열 전체의 집합이다. "$11$ 이 연속해서 나오면 안 된다" 는 규칙을 지키는 무한 수열은 무한히 많고, 각 수열은 지키는 길을 계속 골라 나간 결과다. 규칙을 확인하는 프로그램이 있어도 그 규칙을 지키는 수열 가운데 계산 가능한 것이 하나도 없을 수 있다. Π⁰₁ 부류는 이런 집합에서 고를 수 있는 원소가 얼마나 계산하기 어려운지를 다루는 틀이다.

# 직관

[Peano 공리](peano-axioms.md)에 문장을 더해 모든 산술 문장의 참거짓을 모순 없이 정한 이론, 곧 완전 무모순 확장을 하나 찾는다. 산술의 문장을 $\varphi_0,\varphi_1,\varphi_2,\dots$ 으로 줄 세우고, $0$ 과 $1$ 로 된 유한 수열 $\sigma$ 로 처음 몇 개 문장을 넣거나 넣지 않는 선택을 적는다. $\sigma$ 가 길이 $n$ 일 때, $\sigma$ 가 지정한 문장들과 Peano 공리에서 $n$ 단계 이내에 모순이 유도되지 않으면 $\sigma$ 를 나무 $T$ 에 넣는다. 증명 탐색을 $n$ 단계에서 끊으므로 이 판정은 유한 계산이고, $T$ 는 계산가능한 나무다.

$T$ 는 무한하다. 처음 $n$ 개 문장의 참값을 표준 모형 $\mathbb N$ 에서 읽어 $\sigma$ 를 만들면 $\sigma$ 가 지정한 문장들이 모두 $\mathbb N$ 에서 성립하므로 모순이 나오지 않고, 층마다 마디가 생긴다. $T$ 의 무한 가지는 문장 전체를 무모순으로 결정한 것이므로 완전 무모순 확장 하나에 대응하지만, 가지를 계산하는 절차가 있으면 완전 확장 하나가 결정가능해져 [Gödel 불완전성 정리](godel-incompleteness.md)와 어긋나므로 [계산 가능](computability.md)한 가지는 하나도 없다. 가지 하나를 지목하는 방법이 없으므로 가지 전체를 하나의 대상으로 다루고, 대상마다 원소의 차수가 얼마나 낮을 수 있는지가 물음이 된다.

# 정의

## 부류

이진 나무 $T\subseteq2^{\lt \mathbb N}$ 와 그 가지의 정의는 [약한 König 보조정리](weak-konig-lemma.md)의 것을 따른다. $T$ 의 가지 전체를 $\lbrack T\rbrack$ 이라 쓰면 $\lbrack T\rbrack\subseteq2^{\mathbb N}$ 이다.

$P\subseteq2^{\mathbb N}$ 가 **$\Pi^0_1$ 부류** 라는 것은 계산가능한 이진 나무 $T$ 가 있어 $P=\lbrack T\rbrack$ 인 것이다.

개요의 규칙에서 $11$ 이 연속해 나오지 않는 유한 수열 전체를 $T\_{11}$ 이라 하면, 수열을 한 번 훑어 판정되므로 $T\_{11}$ 은 계산가능한 나무다. $\lbrack T\_{11}\rbrack$ 은 $11$ 이 나오지 않는 무한 수열 전체이고 $\Pi^0_1$ 부류다. 이 부류는 계산가능한 원소 $000\cdots$ 와 $0101\cdots$ 을 포함한다. 직관 절의 나무 $T$ 도 계산가능하므로 $\lbrack T\rbrack$ 은 $\Pi^0_1$ 부류이지만, 계산가능한 원소가 없다.

## 논리식으로 본 꼴

$P$ 가 $\Pi^0_1$ 부류인 것과, 계산가능한 술어 $R$ 이 있어

$$
X\in P\iff\forall n\thinspace R(X_{\lt n})
$$

인 것이 동치다. $X_{\lt n}$ 은 $X$ 의 처음 $n$ 자리로 된 수열이다. 전칭 한정사(universal quantifier) 하나에 계산가능한 술어가 붙은 꼴이므로 [산술적 계층](arithmetical-hierarchy.md)의 $\Pi^0_1$ 이라는 이름이 붙는다. $\lbrack T\_{11}\rbrack$ 에서는 $R(\sigma)$ 를 "$\sigma$ 에 $11$ 이 나오지 않는다" 로 두면 된다.

## 위상으로 본 꼴

$2^{\mathbb N}$ 에 곱위상(product topology)을 주면 $\lbrack T\rbrack$ 은 닫힌 집합이다. 역으로 닫힌 $C\subseteq2^{\mathbb N}$ 에 대해

$$
T_C=\lbrace \sigma:\sigma \text{ 를 앞자름으로 갖는 } C \text{ 의 원소가 있다}\rbrace
$$

를 잡으면 $C=\lbrack T_C\rbrack$ 이다. $T_C$ 가 계산가능한 경우가 $\Pi^0_1$ 부류이고, 그래서 **효과적으로 닫힌 집합(effectively closed set)** 이라고도 부른다. $\lbrack T\_{11}\rbrack$ 의 여집합은 $11$ 을 포함하는 유한 수열 $\sigma$ 마다 $\sigma$ 로 시작하는 수열 전체를 모은 열린 집합의 합집합이다.

# 성질

## 콤팩트성

$2^{\mathbb N}$ 이 콤팩트하고 $\Pi^0_1$ 부류는 그 닫힌 부분집합이므로 콤팩트하다. $T$ 가 무한하면 $\lbrack T\rbrack$ 은 비어 있지 않고, 이 진술이 약한 König 보조정리다. $\lbrack T\rbrack$ 이 비어 있으면 어떤 층 $n$ 에서 $T$ 에 길이 $n$ 인 마디가 하나도 없다.

## 계산가능한 원소가 없는 부류

비어 있지 않은 $\Pi^0_1$ 부류 가운데 계산가능한 원소를 하나도 갖지 않는 것이 있다.[^1] 직관 절의 나무가 그 예다.

## 계산가능 열거 집합의 분리

$W_e$ 와 $W_i$ 가 서로소인 계산가능 열거 집합일 때 두 집합을 가르는 집합 전체

$$
P=\lbrace X:W_e\subseteq X,\thinspace W_i\cap X=\varnothing\rbrace
$$

는 $\Pi^0_1$ 부류다. $X$ 가 조건을 어기는 것은 $W_e$ 의 원소 하나가 $X$ 에 없거나 $W_i$ 의 원소 하나가 $X$ 에 있는 것이고, 둘 다 유한 정보로 확인되므로 여집합이 열려 있다.

Peano 공리에서 증명되는 문장의 번호 집합과 반증되는 문장의 번호 집합이 이런 쌍이면서 계산가능한 가름 집합을 갖지 않는다. 이 부류의 원소를 계산하는 [Turing 차수](turing-degrees.md)가 [PA 차수](pa-degrees.md)(Peano arithmetic degree)다.

## 기저 정리

비어 있지 않은 $\Pi^0_1$ 부류는 $A'\equiv_T\mathbf 0'$ 인 원소 $A$ 를 갖는다.[^1] 이것을 저차 기저 정리(low basis theorem)라 한다. 증명의 요지. $P_0=P$ 에서 시작해 단계 $e$ 마다 $e$ 번 오라클 계산이 입력 $e$ 에서 멈추지 않는 $X\in P_e$ 전체를 본다. 이 집합도 $\Pi^0_1$ 부류이고, 그것이 비어 있지 않은지는 $\mathbf 0'$ 이 판정한다. 비어 있지 않으면 그것을 $P_{e+1}$ 로, 비어 있으면 $P_e$ 를 그대로 $P_{e+1}$ 로 둔다. 모든 $P_e$ 의 교집합의 원소 $A$ 에서 $A'$ 의 각 자리가 이 판정으로 정해진다.

$C$ 가 계산가능하지 않으면, 비어 있지 않은 $\Pi^0_1$ 부류마다 $C\le_T A$ 가 성립하지 않는 원소 $A$ 가 있다.[^2] 이것을 원뿔 회피 기저 정리(cone avoidance basis theorem)라 한다. 비어 있지 않은 부류의 원소가 모두 계산하는 계산 불가능 집합은 없다.

# 활용

- [역수학](reverse-mathematics.md)의 체계 $\mathrm{WKL}\_0$ 는 약한 König 보조정리(weak König's lemma, WKL)를 공리로 갖는다. 비어 있지 않은 $\Pi^0_1$ 부류에 원소가 있다는 진술이 이 공리와 같은 내용이고, 저차 기저 정리를 되풀이 적용해 차수가 낮은 집합만 모은 $\mathrm{WKL}\_0$ 의 모형을 짓는다.
- PA 차수는 계산가능한 차수를 포함하지 않으면서 위로 닫혀 있고, 저차 기저 정리에 따라 $\mathbf 0'$ 보다 낮은 원소를 갖는다.
- 계산가능한 가환환의 소 아이디얼(prime ideal) 전체와 계산가능한 형식적 실체(formally real field)의 순서 전체는 $\Pi^0_1$ 부류를 이룬다. 콤팩트성으로 원소가 존재하고, 이 두 존재 진술은 $\mathrm{WKL}\_0$ 와 동치인 진술의 예다.

[^1]: C. G. Jockusch, R. I. Soare, *$\Pi^0_1$ classes and degrees of theories*, Trans. Amer. Math. Soc. **173** (1972), 33–56. 계산가능한 원소가 없는 부류의 예와 저차 기저 정리.

[^2]: D. Cenzer, *$\Pi^0_1$ classes in computability theory*, Handbook of Computability Theory (1999), 37–85. 기저 정리 계열의 정리와 PA 차수의 성질.

# 연관 문서

## 선수지식

- [Turing 차수](turing-degrees.md)
- [약한 König 보조정리](weak-konig-lemma.md)

## 더 알아보기

- [PA 차수](pa-degrees.md)
- [Martin-Löf 무작위성](martin-lof-randomness.md)

#computation #logic #foundations
