# Laver 강제법

# 개요

Laver 강제법은 나무 조건으로 이루어진 [강제 순서](forcing.md)이고, 바탕 모형의 모든 함수를 최종 지배하는 실수 하나를 더한다.

이 강제법의 확대 모형에서 바탕 모형의 비가산 실수 집합은 [강 측도 영집합](strong-measure-zero.md)이 아니다. 이 성질이 가산지지 반복에서 보존되므로 [Borel 추측](borel-conjecture.md)의 무모순성 증명에 쓰인다.

# 직관

바탕 모형의 비가산 집합 $X\subseteq\mathbb R$ 를 강 측도 영집합이 아니게 만들려고 한다. $X$ 가 강 측도 영집합이라는 것은 임의의 양수열 $(\varepsilon\_n)$ 에 대해 길이가 $\varepsilon\_n$ 이하인 구간 $I\_n$ 으로 $X$ 를 덮을 수 있다는 뜻이다. 그러므로 어떤 구간열로도 덮이지 않는 수열 $(\varepsilon\_n)$ 하나를 확대 모형에 만들면 된다.

Cohen 실수는 이 일을 하지 못한다. Cohen 실수 $c$ 와 바탕 모형의 함수 $f$ 에 대해 $c(n)\lt f(n)$ 인 $n$ 이 무한히 많으므로, $f$ 가 주는 덮개가 그 자리에서 $\varepsilon\_n$ 보다 작아진다. 필요한 것은 바탕 모형의 모든 $f$ 를 어느 자리 뒤로 계속 넘어서는 함수다.

그런 함수를 유한 수열의 나무로 만든다. 조건은 $\omega^{\lt\omega}$ 의 부분나무이고, 아래쪽 유한 수열 $s$ 까지는 값이 정해져 있고 $s$ 위의 모든 자리에서는 무한히 많은 값을 열어 둔다. 바탕 모형의 $f$ 가 주어지면 길이 $n$ 인 각 분기점에서 $f(n)$ 이하인 후계자를 버리는데, 후계자가 무한히 많으므로 버린 뒤에도 조건이 남는다. 그 조건의 모든 가지는 $\lvert s\rvert$ 뒤로 $f$ 를 넘으므로, 일반 필터가 정하는 함수는 $f$ 를 최종 지배한다.

# 정의

## Laver 나무

$T\subseteq\omega^{\lt\omega}$ 가 **Laver 나무**라는 것은 다음 셋이 성립한다는 뜻이다.

- $t\in T$ 이고 $u\subseteq t$ 이면 $u\in T$ 다.
- $T$ 의 모든 원소와 비교 가능한 가장 긴 원소 $s$ 가 있다. 이것을 $T$ 의 **줄기**라 하고 $\mathrm{stem}(T)$ 로 쓴다.
- $s\subseteq t$ 인 모든 $t\in T$ 에 대해 $\lbrace k\in\omega:t^\frown\langle k\rangle\in T\rbrace$ 가 무한집합이다.

## 강제 순서

Laver 나무 전체를 $\mathbb L$ 이라 하고 $T'\le T$ 를 $T'\subseteq T$ 로 정한다. 줄기를 늘리면 조건이 강해진다.

일반 필터 $G$ 에 대해 $\bigcap\_{T\in G}\lbrack T\rbrack$ 는 한 점이고, 그 점 $\ell\in\omega^\omega$ 를 **Laver 실수**라 한다. 여기서 $\lbrack T\rbrack$ 는 $T$ 의 무한 가지 전체다.

## Laver 성질

강제 순서 $\mathbb P$ 가 **Laver 성질**을 갖는다는 것은 다음이 성립한다는 뜻이다. $V^{\mathbb P}$ 의 함수 $f\in\omega^\omega$ 가 $V$ 의 함수로 유계이면, $V$ 에 집합값 함수 $S$ 가 있어 모든 $n$ 에서 $\lvert S(n)\rvert\le n$ 이고 $f(n)\in S(n)$ 이다.

# 성질

## 지배 실수

**정리.** Laver 실수 $\ell$ 은 $V$ 의 모든 $f\in\omega^\omega$ 에 대해 유한개의 $n$ 을 빼고 $f(n)\lt\ell(n)$ 을 만족한다.[^1]

증명은 직관 절의 가지치기다. $T$ 와 $f$ 가 주어지면 줄기 위의 각 $t$ 에서 $f(\lvert t\rvert)$ 이하인 후계자를 버린다. 무한집합에서 유한개를 버렸으므로 결과가 다시 Laver 나무이고, 이것이 $\ell$ 의 지배성을 강제한다. 따라서 $\mathbb L$ 은 $\mathfrak b$ 를 키운다.

## 순수 결정

**정리.** $T\in\mathbb L$ 과 문장 $\varphi$ 에 대해, $\mathrm{stem}(T')=\mathrm{stem}(T)$ 이면서 $\varphi$ 를 결정하는 $T'\le T$ 가 있다.[^2]

증명은 줄기 위의 분기점을 순서대로 훑어 각 자리에서 $\varphi$ 의 값이 같은 후계자만 남기는 융합이다. 각 분기점의 후계자가 무한히 많으므로 두 값 가운데 하나가 무한히 남는다.

조건을 강하게 만들 때 줄기를 늘리지 않아도 된다는 것이 이 정리의 내용이고, $\mathbb L$ 의 나머지 성질은 모두 이것을 쓴다.

## 적당성

**정리.** $\mathbb L$ 은 proper 이고 따라서 $\aleph\_1$ 을 보존한다.[^2]

가산 기본 부분모형 $N$ 과 $T\in\mathbb L\cap N$ 이 주어지면, $N$ 의 조밀집합을 차례로 만나도록 순수 결정으로 가지를 융합해 $N$ 에 대해 일반적인 조건을 얻는다. [반복 강제법](iterated-forcing.md)에서 가산지지 반복이 properness 를 보존하므로 반복 전체도 $\aleph\_1$ 을 보존한다.

## Laver 성질과 Cohen 실수

**정리.** $\mathbb L$ 은 Laver 성질을 갖고, Laver 성질은 가산지지 반복에서 보존된다. Laver 성질을 갖는 강제법은 Cohen 실수를 더하지 않는다.[^3]

유계인 새 함수 $f$ 를 순수 결정으로 다루면 각 자리의 값 후보가 바탕 모형에서 셀 수 있게 묶이고, 그 묶음이 Laver 성질의 $S$ 가 된다. 바탕 모형의 $S$ 에 모든 자리에서 갇힌 실수는 $S$ 가 정하는 조밀 열린집합의 가산 교집합을 피하지 못하므로 Cohen 실수가 아니다.

## 강 측도 영집합의 파괴

**정리(Laver).** $X\subseteq\mathbb R$ 가 $V$ 의 비가산 집합이면 $V^{\mathbb L}$ 에서 $X$ 는 강 측도 영집합이 아니다. 이 성질은 가산지지 반복에서 보존된다.[^1]

증명의 요지는 지배성과 순수 결정을 함께 쓰는 것이다. $\varepsilon\_n=2^{-\ell(n)}$ 으로 두면 이 수열은 $V$ 의 어떤 수열보다 빨리 줄어든다. 확대 모형에서 이 수열에 맞는 덮개 $(I\_n)$ 이 있다고 가정하고 순수 결정으로 각 $I\_n$ 의 후보를 바탕 모형에서 유한개로 줄이면, 그 유한개를 모두 피하는 점을 $X$ 에서 고를 수 있다. 반복에서의 보존이 증명의 더 긴 부분이고, 가산지지 반복의 각 단계에서 위 논증을 반복하면서 이름의 가산 열을 융합한다.

# 활용

- **Borel 추측의 무모순성.** 연속체 가설이 성립하는 모형에서 $\mathbb L$ 을 가산지지로 $\omega\_2$ 번 반복하면 모든 강 측도 영집합이 가산인 모형이 나온다. [Borel 추측](borel-conjecture.md)의 Laver 모형 절이 그 구성이다.
- **기수 불변량.** Laver 모형에서 $\mathfrak b=\mathfrak d=2^{\aleph\_0}=\aleph\_2$ 이고, Laver 성질 때문에 Cohen 실수가 더해지지 않아 제1범주 쪽 불변량이 따로 움직인다. [기수 불변량](cardinal-characteristics.md)의 Cichoń 도형에서 두 축이 갈리는 모형의 예다.
- **나무 강제법의 본보기.** 조건을 나무로 두고 분기 조건만 바꾸면 Sacks, Mathias, Silver 의 강제법이 된다. 순수 결정과 융합 논법은 그 전부에서 같은 모양으로 쓰인다.

[^1]: R. Laver, *On the consistency of Borel's conjecture*, Acta Math. **137** (1976), 151–169.
[^2]: T. Bartoszyński, H. Judah, *Set Theory: On the Structure of the Real Line*, A K Peters, 1995, 7 장.
[^3]: S. Shelah, *Proper and Improper Forcing*, 2nd ed., Springer, 1998, VI 장.

# 연관 문서

## 선수지식

- [강제법](forcing.md)

## 더 알아보기

- [Borel 추측](borel-conjecture.md)

#set_theory #logic #foundations #measure_theory
