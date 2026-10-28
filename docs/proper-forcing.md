# Proper 강제법

# 개요

**Proper 강제법(proper forcing)** 은 집합론의 모형에 새 집합을 더하는 [강제법](forcing.md) 가운데, 셀 수 없는 가장 작은 무한 기수 $\aleph_1$ 을 셀 수 있게 만들지 않는 넓은 부류다. 새 실수를 하나 더하는 강제법은 한 번 쓸 때 이 조건을 지키지만, 같은 일을 $\omega_2$ 번 되풀이하면 되풀이하는 방법에 따라 $\aleph_1$ 이 셀 수 있게 무너질 수 있다. Proper 강제법은 셀 수 있는 부분모형마다 그 모형에 대해 일반적인 조건이 있다는 성질로 정의되고, 이 성질이 가산지지 반복에서 보존되므로 반복을 끝까지 해도 $\aleph_1$ 이 그대로 남는다.

# 직관

Proper 강제법은 바탕 모형의 가산 기본 부분모형마다 그 모형에 대해 일반적인 조건을 찾을 수 있는 강제 순서다.

가산 반사슬 조건(countable chain condition, ccc)과 가산 닫힘이 모두 proper 를 함의하고, proper 순서는 $\aleph\_1$ 을 보존한다. 가산지지 [반복](iterated-forcing.md)이 이 성질을 보존하므로 ccc 가 아닌 순서를 $\omega\_2$ 번 반복하는 무모순성 증명이 가능하다.

[Borel 추측](borel-conjecture.md)의 무모순성 증명은 [Laver 강제법](laver-forcing.md) $\mathbb L$ 을 가산지지로 $\omega\_2$ 번 반복한다. 반복이 $\omega\_1$ 을 가산으로 붕괴시키면 "모든 강 측도 영집합이 가산" 이라는 결론이 뜻을 잃는다. 반복 전체가 $\aleph\_1$ 을 보존하는지 확인해야 한다.

유한지지 반복의 ccc 보존 정리를 쓰려면 각 단계가 ccc 여야 한다. $\mathbb L$ 의 조건은 줄기 위의 모든 분기점에서 후계자가 무한히 많은 나무다. 줄기가 빈 수열인 나무에서 첫 분기점의 후계자 집합을 무한집합 $A\subseteq\omega$ 로 제한한 나무를 $T\_A$ 라 하면, $A\cap B$ 가 유한인 두 집합에 대해 $T\_A\cap T\_B$ 는 첫 분기점의 후계자가 유한하므로 Laver 나무가 아니다. 쌍마다 교집합이 유한한 무한집합을 $\omega$ 안에서 $2^{\aleph\_0}$ 개 고를 수 있으므로 $\mathbb L$ 에는 비가산 반사슬이 있다.

조건의 가산 감소열이 언제나 하계를 가지면 확대 모형에 $\omega$ 에서 $V$ 로 가는 새 함수가 없고, 따라서 $\omega\_1$ 이 보존된다. $\mathbb L$ 은 Laver 실수를 더하므로 이 조건도 쓸 수 없다.

두 증명이 공통으로 하는 일을 본다. $\omega\_1$ 이 붕괴한다는 것은 확대 모형에 $\omega$ 에서 $\omega\_1^V$ 로 가는 전사 $f$ 가 생긴다는 것이다. ccc 증명은 $f(n)$ 의 값 후보를 바탕 모형의 가산 집합 안에 가두었고, 가산 닫힘 증명은 조건을 가산 번 강화해 $f$ 의 값을 모두 정했다. 둘 다 조건 하나가 바탕 모형의 가산 조각을 결정한다.

그 조각을 집합으로 명시한다. $V$ 의 가산 부분모형 $N$ 을 $f$ 의 이름과 $\mathbb P$ 를 담도록 잡고, $N$ 에 든 조밀집합을 모두 만나는 조건 $q$ 를 찾는다. 그러면 $q$ 아래의 확대에서 $f$ 의 값은 $N$ 안에 머문다. $N$ 이 가산이므로 $N\cap\omega\_1$ 은 $\omega\_1$ 미만의 서수 $\delta$ 이고, $f$ 의 치역이 $\delta$ 에 갇혀 $\omega\_1$ 로 가는 전사가 아니다. 모든 $N$ 에 대해 그런 $q$ 를 찾을 수 있는 순서를 **proper** 라 한다.

# 정의

## 가산 기본 부분모형

정칙 비가산 기수 $\theta$ 에 대해 $H(\theta)$ 는 전이적 폐포의 크기가 $\theta$ 미만인 집합 전체다. $N\preccurlyeq H(\theta)$ 는 $N$ 이 구조 $(H(\theta),\in)$ 의 [기본 부분구조](lowenheim-skolem.md)라는 뜻이다. 강제 순서 $\mathbb P$ 에 대해 $\mathcal P(\mathbb P)\in H(\theta)$ 인 $\theta$ 를 고르고, $\mathbb P\in N$ 이면서 $N$ 이 가산인 $N\preccurlyeq H(\theta)$ 를 쓴다.

## 일반 조건

$q\in\mathbb P$ 가 $(N,\mathbb P)$ **일반 조건**이라는 것은 $N$ 에 드는 $\mathbb P$ 의 모든 극대 반사슬 $A$ 에 대해 $A\cap N$ 이 $q$ 아래에서 조밀하다는 뜻이다. 동치로

$$
q\Vdash\dot G\cap A\cap N\ne\varnothing
$$

이 $N$ 에 드는 모든 극대 반사슬 $A$ 에 대해 성립한다. 여기서 $\dot G$ 는 일반 필터의 이름이다.

## Proper

강제 순서 $\mathbb P$ 가 **proper** 라는 것은, 위와 같이 고른 $\theta$ 와 $\mathbb P\in N\preccurlyeq H(\theta)$ 인 모든 가산 $N$ 과 모든 $p\in\mathbb P\cap N$ 에 대해 $q\le p$ 인 $(N,\mathbb P)$ 일반 조건 $q$ 가 있다는 뜻이다.[^1]

$\theta$ 의 선택은 정의를 바꾸지 않는다. 한 $\theta$ 에서 성립하면 $\mathcal P(\mathbb P)$ 를 담는 모든 $\theta$ 에서 성립한다.

# 성질

## 가산 반사슬 조건

**정리.** $\mathbb P$ 가 ccc 를 만족하면 proper 다.

$A\in N$ 이 극대 반사슬이면 ccc 에서 $A$ 가 가산이다. $N$ 이 기본 부분모형이고 $A$ 가 가산이므로 $A$ 의 줄 세움이 $N$ 에 있고 $A\subseteq N$ 이다. 그러면 $A\cap N=A$ 가 모든 조건 아래에서 조밀하므로 $\mathbb P$ 의 모든 조건이 $(N,\mathbb P)$ 일반 조건이다.

## 가산 닫힘

**정리.** $\mathbb P$ 의 모든 가산 감소열이 하계를 가지면 $\mathbb P$ 는 proper 다.

$N$ 이 가산이므로 $N$ 에 드는 극대 반사슬이 가산 개다. 그것을 $A\_0,A\_1,\dots$ 으로 줄 세우고 $p\_0=p$ 에서 시작해 $p\_{n+1}\le p\_n$ 을 $A\_n\cap N$ 의 어떤 원소 아래로 잡는다. $A\_n$ 이 극대이고 $N$ 이 기본이므로 그런 원소가 $N$ 안에 있다. 가산 닫힘으로 $(p\_n)$ 의 하계 $q$ 를 얻고, $q$ 는 각 $A\_n\cap N$ 을 만나는 조건 아래에 있으므로 $(N,\mathbb P)$ 일반 조건이다.

ccc 와 가산 닫힘은 서로를 함의하지 않는다. Cohen 순서는 ccc 이고 가산 닫혀 있지 않으며, $\omega\_1$ 의 가산 부분함수 순서는 가산 닫혀 있고 ccc 가 아니다. proper 는 둘을 함께 포함한다.

## ℵ₁ 보존

**정리.** $\mathbb P$ 가 proper 이면 $\mathbb P$ 의 강제 확대에서 $\omega\_1^V$ 가 기수로 남는다.

$p$ 가 $\dot f$ 를 $\omega$ 에서 $\omega\_1^V$ 로 가는 전사의 이름으로 강제한다고 하자. $\mathbb P,p,\dot f$ 를 담는 가산 $N\preccurlyeq H(\theta)$ 를 잡고 $q\le p$ 를 $(N,\mathbb P)$ 일반 조건으로 잡는다. 각 $n$ 에 대해 $\dot f(n)$ 의 값을 결정하는 조건들이 극대 반사슬 $A\_n\in N$ 을 이루고, $q$ 가 $\dot G$ 를 $A\_n\cap N$ 과 만나게 하므로 $q\Vdash\dot f(n)\in N$ 이다. $N\cap\omega\_1=\delta\lt\omega\_1$ 이므로 $q$ 는 $\dot f$ 의 치역이 $\delta$ 에 든다고 강제하고, 이것은 전사에 모순이다.

더 센 형태로 proper 순서는 $V$ 의 가산 집합을 확대 모형에서도 가산인 집합으로 덮는다. 곧 확대 모형의 가산 집합 $X\subseteq V$ 마다 $X\subseteq Y$ 인 $V$ 의 가산 집합 $Y$ 가 있다.

## 정상집합 보존

**정리(Shelah).** $\mathbb P$ 가 proper 인 것은 모든 비가산 기수 $\lambda$ 에 대해 $\lbrack\lambda\rbrack^{\aleph\_0}$ 의 정상집합이 $\mathbb P$ 의 확대에서도 정상집합인 것과 동치다.[^1]

여기서 $S\subseteq\lbrack\lambda\rbrack^{\aleph\_0}$ 이 정상집합이라는 것은 $\lbrack\lambda\rbrack^{\aleph\_0}$ 의 상향 닫히고 $\sigma$ 방향으로 닫힌 모든 부분집합과 $S$ 가 만난다는 뜻이다. 일반 조건의 존재가 이 꼴의 정상성을 그대로 옮긴다.

$\omega\_1$ 의 정상집합만 보존하는 것은 proper 보다 약하다. Namba 강제법은 $\omega\_1$ 의 정상집합을 보존하면서 $\omega\_2$ 의 공종도를 $\omega$ 로 만들므로 proper 가 아니다.[^2]

## 가산지지 반복

**정리(Shelah).** 각 단계가 proper 임을 앞 단계가 강제하면 가산지지 반복 전체가 proper 다.[^1]

증명은 반복의 길이에 대한 귀납이고, 극한 단계에서 가산 많은 좌표의 일반 조건을 융합한다. $N$ 이 가산이므로 $N$ 에 드는 좌표가 가산 개이고 가산지지가 그 융합을 조건으로 남긴다. 유한지지 반복은 이 보존을 주지 않는다. 길이 $\omega\_1$ 의 유한지지 반복에서 $\omega\_1$ 이 붕괴하는 예가 있다.

## Proper 가 아닌 순서

Levy 붕괴 $\mathrm{Coll}(\omega,\omega\_1)$ 은 $\omega\_1$ 을 가산으로 만들므로 proper 가 아니다. $\aleph\_1$ 보존이 proper 의 필요조건이므로 $\omega\_1$ 을 붕괴시키는 모든 순서가 여기 든다.

# 활용

- 반복 강제법: 가산지지 반복의 proper 보존 정리가 ccc 가 아닌 순서를 $\omega\_2$ 번 반복하는 구성을 가능하게 한다. 유한지지 반복에서 ccc 가 하던 역할을 가산지지 반복에서 proper 가 한다.
- Laver 강제법: 순수 결정으로 가지를 융합해 일반 조건을 얻으므로 proper 다. Mathias 순서도 같은 융합으로 proper 이고, 두 순서 모두 ccc 가 아니다.
- Borel 추측: Laver 강제법의 가산지지 $\omega\_2$ 반복이 $\aleph\_1$ 을 보존한다는 것이 무모순성 증명의 한 단계다.
- [Martin 의 공리](martins-axiom.md): proper 순서에 대한 $\mathrm{MA}(\aleph\_1)$ 이 **PFA**(proper forcing axiom)이고, 초콤팩트 기수에서 무모순성이 나온다.
- [기수 불변량](cardinal-characteristics.md): 연속체의 불변량을 분리하는 모형은 ccc 가 아닌 순서의 가산지지 반복으로 얻는 경우가 많고, 그 반복의 $\aleph\_1$ 보존이 proper 에서 나온다.

[^1]: Saharon Shelah, *Proper and Improper Forcing*, 2nd ed., Springer (1998). properness 의 정의, 정상집합 보존과의 동치, 가산지지 반복 보존 정리가 이 책의 1장과 3장이다.

[^2]: Thomas Jech, *Set Theory*, 3rd millennium ed., Springer (2003), 37장. Namba 강제법과 그 정상집합 보존을 다룬다.

# 연관 문서

## 선수지식

- [반복 강제법](iterated-forcing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #logic #foundations
