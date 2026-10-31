# 사영 계층

# 개요

**사영 계층(projective hierarchy)** 은 공간의 집합을 좌표 하나를 지우는 사영과 여집합을 몇 번 거쳐 얻는지로 매긴 집합의 등급이다. 평면의 Borel 집합을 직선에 사영하면 Borel 집합이 아닐 수 있으므로, Borel 집합에서 성립하던 Lebesgue 가측성 같은 성질이 사영한 집합에서는 다시 물음이 된다. 사영 계층은 사영과 여집합을 붙인 횟수로 단계를 세우고, 그 성질이 어느 단계까지 증명되는지를 단계마다 따진다.

# 직관

평면의 닫힌집합 $B=\lbrace(x,y):x=y^2\rbrace$ 를 $x$ 축에 사영하면 $\lbrace x:\exists y\thinspace(x,y)\in B\rbrace=\lbrack 0,\infty)$ 다. 사영은 조건 앞에 "어떤 $y$ 가 있어서" 를 붙이는 연산이다.

[Borel 계층](borel-hierarchy.md)의 집합은 열린집합에서 셀 수 있는 합집합과 여집합을 되풀이해 만든다. 두 연산은 Lebesgue 가측성을 보존하므로 Borel 집합은 가측이다. 사영한 집합은 $y$ 마다의 단면 $\lbrace x:(x,y)\in B\rbrace$ 를 모든 실수 $y$ 에 걸쳐 합친 것이다. 합치는 단면이 셀 수 없이 많으므로 가측성이 따라 나오지 않는다. 한 점은 가측이지만 실수의 어떤 부분집합이든 그 점들을 합친 것이다.

Suslin 은 평면의 Borel 집합 가운데 사영이 Borel 이 아닌 것을 찾았다. 그래서 Borel 집합의 사영을 새 족으로 모으고, 그 여집합을 모으고, 여집합을 다시 사영한다. 매번 앞의 족에 없던 집합이 나오므로 단계마다 이름을 붙이고, 단계마다 가측성을 다시 묻는다.

# 정의

## 사영 계층

$X$ 를 [Polish 공간](polish-spaces.md), $\mathcal N=\omega^{\omega}$ 를 Baire 공간(Baire space)이라 한다. $X\times\mathcal N$ 의 Borel 집합을 $X$ 에 사영한 집합을 **해석적 집합(analytic set)** 이라 하고, 그 전체를 $\Sigma^1_1$ 로 쓴다. 다음을 귀납으로 정의한다.

$$
\Pi^1_n=\lbrace X\setminus A:A\in\Sigma^1_n\rbrace,\qquad
\Sigma^1_{n+1}=\lbrace \mathrm{proj}\thinspace B:B\in\Pi^1_n(X\times\mathcal N)\rbrace
$$

$\Pi^1_1$ 의 원소를 **여해석적 집합(coanalytic set)** 이라 한다. $\Delta^1_n=\Sigma^1_n\cap\Pi^1_n$ 이고, 모든 $n$ 에 걸친 $\Sigma^1_n$ 의 합집합의 원소를 **사영 집합(projective set)** 이라 한다.

직관 절의 $\lbrack 0,\infty)$ 는 $\Sigma^1_1$ 이다. Borel 집합 $A\subseteq X$ 는 $A\times\mathcal N$ 의 사영이므로 $\Sigma^1_1$ 이고, 여집합도 Borel 이므로 $\Delta^1_1$ 이다.

자연수 위의 관계 $R$ 을 $mRn$ 일 때 $\langle m,n\rangle$ 번째 자리가 $1$ 인 $0$ 과 $1$ 의 수열 $x$ 로 적고, $x$ 를 $R$ 의 부호(code)라 한다. $x$ 가 전순서를 적을 때, 그 순서가 정렬순서([서수](ordinals.md))가 아닌 것은 무한 감소열 $y$ 가 있는 것과 동치다.

$$
\exists y\in\mathcal N\thinspace\forall n\thinspace\bigl(y(n+1)\mathrel{R}y(n),\quad y(n+1)\neq y(n)\bigr)
$$

$\exists y$ 뒤의 조건과 "$x$ 가 전순서를 적는다" 는 조건은 $(x,y)$ 의 닫힌 조건이므로 정렬순서가 아닌 전순서의 부호 전체는 $\Sigma^1_1$ 이고, 정렬순서의 부호 전체 $\mathrm{WO}$ 는 $\Pi^1_1$ 이다. $\mathrm{WO}$ 는 Borel 이 아니다[^1].

## 정규성

집합 $A$ 가 비가산이면 [Cantor 집합](cantor-set.md)과 동상인 부분집합을 포함할 때, $A$ 가 **완전집합 성질(perfect set property)** 을 가진다고 한다. $\lbrack 0,\infty)$ 는 Cantor 집합을 그대로 포함하므로 완전집합 성질을 가진다.

조밀한 곳이 없는 집합의 셀 수 있는 합집합을 제1 범주(first category) 집합이라 한다([Baire 범주 정리](baire-category.md)). 어떤 열린집합과의 대칭차가 제1 범주인 집합 $A$ 는 **Baire 성질(property of Baire)** 을 가진다고 한다. 유리수 집합은 열린집합 $\varnothing$ 과의 대칭차가 셀 수 있는 점들의 합집합이므로 Baire 성질을 가진다.

완전집합 성질, Lebesgue 가측성, Baire 성질을 묶어 정규성 성질(regularity properties)이라 한다.

## 결정성 게임

$A\subseteq\mathcal N$ 에 대해 두 사람이 번갈아 자연수를 하나씩 두어 수열 $x$ 를 만드는 게임 $G(A)$ 에서, $x\in A$ 이면 먼저 두는 쪽이 이기고 아니면 나중 두는 쪽이 이긴다. 한쪽에 필승 전략(winning strategy)이 있으면 $A$ 가 **결정적(determined)** 이라 한다([결정성](determinacy.md)). $A=\lbrace x:x(0)\text{ 은 짝수}\rbrace$ 이면 먼저 두는 쪽이 $0$ 을 두어 이기고, $A=\lbrace x:x(1)\text{ 은 짝수}\rbrace$ 이면 나중 두는 쪽이 $1$ 을 두어 이긴다. 둘 다 결정적이다.

모든 사영 집합이 결정적이라는 명제를 **사영 결정성(projective determinacy, PD)** 이라 한다.

# 성질

## 계층의 구조

각 $\Sigma^1_n$ 은 셀 수 있는 합집합, 셀 수 있는 교집합, 연속 역상, 사영에 닫혀 있고 $\Pi^1_n$ 은 사영을 빼고 같은 연산에 닫혀 있다. 포함관계는 $\Sigma^1_n\cup\Pi^1_n\subseteq\Delta^1_{n+1}$ 이다.

비가산 Polish 공간에서 모든 $n$ 에 대해 $\Sigma^1_n\ne\Pi^1_n$ 이고 계층이 진성으로 커진다.[^1] 증명은 Borel 계층과 같은 보편집합과 대각화다.

Suslin 정리(Suslin's theorem)에 따라 $\Delta^1_1$ 은 Borel 집합 전체와 같다.

## 나무 표현과 유계 정리

$A\in\Pi^1_1$ 이면 $x\in A$ 와 나무 $T_x$ 가 정초인 것이 동치가 되도록 나무의 족을 잡을 수 있다. 정초 나무에 서수 계수 $\vert T\vert\lt\omega_1$ 을 주면 $A$ 가 계수에 따라 $\aleph_1$ 개의 조각으로 갈린다. $\mathrm{WO}$ 에서는 이 계수가 부호가 적는 정렬순서의 순서형이다.

유계 정리(boundedness theorem). $B\subseteq A$ 가 $\Sigma^1_1$ 이면 $\lbrace\vert T_x\vert:x\in B\rbrace$ 가 어떤 가산 서수로 유계다.[^1]

따라서 $\Pi^1_1$ 집합은 $\aleph_1$ 개의 Borel 집합의 증가 합집합이고, 그 안의 $\Sigma^1_1$ 부분집합은 어느 한 조각 안에 들어간다. 유계 정리는 Suslin 정리의 증명과 $\Pi^1_1$ 집합의 서수 분석에 쓰인다.

## 첫 단계의 정규성

- Suslin. 비가산 해석적 집합은 Cantor 집합을 포함한다.
- Luzin. 해석적 집합과 여해석적 집합은 Lebesgue 가측이고 Baire 성질을 갖는다.
- Kondô. $\Pi^1_1$ 집합은 $\Pi^1_1$ 인 함수의 그래프로 균일화(uniformization)된다.[^2] 따라서 $\Sigma^1_2$ 집합도 균일화된다.

## ZFC 에서 결정되지 않는 단계

모든 집합이 [구성가능 우주](constructible-universe.md) $L$ 에 속한다는 공리 $V=L$ 아래에서는 [실수](real-numbers.md)의 정렬순서가 $\Sigma^1_2$ 로 정의된다. 그 정렬순서에서 Lebesgue 가측이 아닌 $\Delta^1_2$ 집합과 완전집합 성질이 없는 비가산 $\Pi^1_1$ 집합이 만들어진다. 따라서 ZFC(Zermelo–Fraenkel 집합론과 선택공리)는 $\Sigma^1_2$ 의 가측성도 $\Pi^1_1$ 의 완전집합 성질도 증명하지 않는다.

반대로 도달 불가능 기수(inaccessible cardinal)가 있는 모형에서 [강제법](forcing.md)으로 모든 사영 집합이 Lebesgue 가측인 모형을 얻는다.[^3] 두 결과에서, 도달 불가능 기수를 더한 ZFC 가 무모순이면 둘째 단계 이상의 사영 집합의 가측성은 ZFC 로 결정되지 않는다.

$\Sigma^1_2$ 진술은 같은 서수를 가진 추이적 모형 사이에서 참거짓이 같다. 이것이 Shoenfield 절대성 정리(Shoenfield absoluteness theorem)이고, 강제법으로 참거짓을 바꿀 수 있는 사영 진술은 $\Sigma^1_3$ 부터다.

## 사영 결정성

Borel 집합의 결정성은 ZFC 에서 증명된다.[^4] 사영 집합의 결정성은 ZFC 를 넘는 가정이 필요하다.

Martin–Steel 정리. Woodin 기수(Woodin cardinal)가 무한히 많으면 PD 가 성립한다.[^5]

PD 아래에서는 모든 사영 집합이 완전집합 성질, Lebesgue 가측성, Baire 성질을 갖는다. 척도 성질(scale property)과 균일화는 $\Pi^1_1,\Sigma^1_2,\Pi^1_3,\Sigma^1_4,\dots$ 의 자리에서 성립한다. 이 주기 $2$ 의 교대가 주기성 정리(periodicity theorem)다.

# 활용

- 해석학에서 나오는 집합의 복잡도. $C\lbrack 0,1\rbrack$ 안에서 모든 점에서 미분 가능한 함수 전체는 $\Pi^1_1$ 이고 Borel 이 아니다(Mazurkiewicz)[^1].
- 동치관계의 분류. 해석적 동치관계 사이의 Borel 환원 가능성(Borel reducibility)으로 분류 문제의 난이도를 비교한다.
- 효과적 판본. [해석적 계층](analytical-hierarchy.md)의 $\Sigma^1_n$ 은 같은 정의를 자연수 집합 위에서 쓴 것이고, $\Delta^1_1$ 자리에서 [초산술적 계층](hyperarithmetical-hierarchy.md)과 같아진다.
- [큰 기수](large-cardinals.md)와의 대응. 모든 $\Sigma^1_3$ 집합이 Lebesgue 가측이면 $\omega_1$ 은 $L$ 에서 도달 불가능 기수다(Shelah). PD 는 Woodin 기수가 무한히 많다는 가정과 무모순 강도가 같다.

[^1]: A. S. Kechris, *Classical Descriptive Set Theory*, Springer Graduate Texts in Mathematics 156 (1995), 37절과 35절. 계층의 진성, 나무 표현, 유계 정리가 여기 있다.
[^2]: Y. N. Moschovakis, *Descriptive Set Theory*, 2판, American Mathematical Society (2009), 4E절.
[^3]: R. M. Solovay, "A model of set-theory in which every set of reals is Lebesgue measurable", Ann. of Math. 92 (1970), 1–56.
[^4]: D. A. Martin, "Borel determinacy", Ann. of Math. 102 (1975), 363–371.
[^5]: D. A. Martin, J. R. Steel, "A proof of projective determinacy", J. Amer. Math. Soc. 2 (1989), 71–125.

# 연관 문서

## 선수지식

- [Borel 계층](borel-hierarchy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #logic #topology
