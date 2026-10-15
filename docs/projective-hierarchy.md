# 사영 계층

# 개요

Polish 공간의 Borel 집합에 사영과 여집합을 번갈아 붙여 얻는 집합을 **사영 집합**이라 하고, 붙인 횟수로 매긴 등급이 사영 계층이다. 첫 단계가 해석적 집합 $\Sigma^1_1$ 과 여해석적 집합 $\Pi^1_1$ 이다.

낮은 단계에서 성립하는 완전집합 성질과 Lebesgue 가측성이 어느 단계까지 올라가는지가 이 계층의 중심 문제다. ZFC(Zermelo–Fraenkel 집합론과 선택공리)는 $\Sigma^1_1$ 까지만 증명하고, 그 위는 결정성 공리나 큰 기수 가정이 정한다.

# 직관

평면의 Borel 집합을 직선으로 사영하면 Borel 집합이 아닐 수 있다. Suslin 이 그런 예를 만들었고, 사영으로 나오는 집합을 모은 것이 [Borel 계층](borel-hierarchy.md)의 위에 놓인 해석적 집합이다.

사영은 $\exists y$ 를 붙이는 연산이고 이 $y$ 는 비가산 집합 위를 달리므로 가산 합집합으로 대신되지 않는다. 그래서 해석적 집합의 족도 여집합에 닫혀 있지 않고, 여집합을 취한 뒤 다시 사영하면 또 새로운 족이 나온다. 두 연산을 번갈아 붙이는 것을 멈출 자리가 없으므로 단계마다 이름을 붙인다.

Borel 집합과 해석적 집합은 비가산이면 Cantor 집합을 품고 Lebesgue 가측이다. 단계를 올리면 이 두 성질이 어떻게 되는지를 묻는다.

# 정의

## 사영 계층

$X$ 를 Polish 공간, $\mathcal N=\omega^{\omega}$ 를 Baire 공간이라 한다. $\Sigma^1_1$ 을 $X$ 의 해석적 집합 전체, 곧 $X\times\mathcal N$ 의 Borel 집합의 사영 전체로 두고 다음을 귀납으로 정의한다.

$$
\Pi^1_n=\lbrace X\setminus A:A\in\Sigma^1_n\rbrace,\qquad
\Sigma^1_{n+1}=\lbrace \mathrm{proj}\thinspace B:B\in\Pi^1_n(X\times\mathcal N)\rbrace
$$

$\Delta^1_n=\Sigma^1_n\cap\Pi^1_n$ 이고, 모든 $n$ 의 합집합이 **사영 집합**의 족이다. Suslin 정리가 $\Delta^1_1$ 을 Borel 집합 전체로 지목한다.

## 정규성

집합 $A$ 가 **완전집합 성질**을 가진다는 것은 $A$ 가 비가산이면 Cantor 집합과 동상인 부분집합을 품는다는 뜻이다. **Lebesgue 가측성**과 **Baire 성질**(열린집합과의 차가 제1 범주)이 나머지 두 정규성이다.

## 결정성

$A\subseteq\mathcal N$ 에 대해 두 사람이 번갈아 자연수를 하나씩 두어 수열 $x$ 를 만드는 길이 $\omega$ 의 게임 $G(A)$ 를 생각한다. $x\in A$ 이면 먼저 두는 쪽이 이긴다. 한쪽에 필승 전략이 있으면 $A$ 를 **결정적**이라 한다.

모든 사영 집합이 결정적이라는 명제를 **사영 결정성**(projective determinacy, PD)이라 한다.

# 성질

## 계층의 구조

각 $\Sigma^1_n$ 은 가산 합집합, 가산 교집합, 연속 역상, 사영에 닫혀 있고 $\Pi^1_n$ 은 여집합을 제외하고 같다. 포함관계는 $\Sigma^1_n\cup\Pi^1_n\subseteq\Delta^1_{n+1}$ 이다.

비가산 Polish 공간에서 모든 $n$ 에 대해 $\Sigma^1_n\ne\Pi^1_n$ 이고 계층이 진성으로 커진다.[^1] 증명은 Borel 계층과 같은 보편집합과 대각화다.

## 나무 표현과 유계 정리

$A\in\Pi^1_1$ 이면 $x\in A$ 와 나무 $T_x$ 가 정초인 것이 동치가 되도록 나무의 족을 잡을 수 있다. 정초 나무에 서수 계수 $\vert T\vert\lt\omega_1$ 을 주면 $A$ 가 계수에 따라 $\aleph_1$ 개의 조각으로 갈린다.

**정리(유계).** $B\subseteq A$ 가 $\Sigma^1_1$ 이면 $\lbrace\vert T_x\vert:x\in B\rbrace$ 가 어떤 가산 서수로 유계다.[^1]

따라서 $\Pi^1_1$ 집합은 $\aleph_1$ 개의 Borel 집합의 증가 합집합이고, 그 안의 $\Sigma^1_1$ 부분집합은 어느 한 조각 안에 들어간다. 이 유계성이 Suslin 정리의 증명과 $\Pi^1_1$ 의 서수 분석 전체를 지탱한다.

## 첫 단계의 정규성

- **완전집합 성질(Suslin).** 비가산 해석적 집합은 Cantor 집합을 품는다.
- **가측성(Luzin).** 해석적 집합과 여해석적 집합은 Lebesgue 가측이고 Baire 성질을 갖는다.
- **균일화(Kondô).** $\Pi^1_1$ 집합은 $\Pi^1_1$ 인 함수의 그래프로 균일화된다.[^2] 따라서 $\Sigma^1_2$ 집합도 균일화된다.

## ZFC 에서 결정되지 않는 단계

$V=L$ 이면 실수의 정렬순서가 $\Sigma^1_2$ 로 정의되고, 그 정렬순서에서 Lebesgue 가측이 아닌 $\Delta^1_2$ 집합과 완전집합 성질이 없는 비가산 $\Pi^1_1$ 집합이 만들어진다. 따라서 ZFC 는 $\Sigma^1_2$ 의 가측성도 $\Pi^1_1$ 의 완전집합 성질도 증명하지 않는다.

반대로 도달 불가능 기수가 있는 모형에서 강제법으로 모든 사영 집합이 Lebesgue 가측인 모형을 얻는다.[^3] 두 결과가 둘째 단계부터의 정규성을 큰 기수의 문제로 옮긴다.

$\Sigma^1_2$ 진술은 같은 서수를 가진 추이적 모형 사이에서 절대적이므로(Shoenfield), 강제법으로 바꿀 수 있는 것은 그 위 단계부터다.

## 사영 결정성

Borel 집합의 결정성은 ZFC 에서 증명된다.[^4] 사영 집합으로 올리면 ZFC 를 넘는 가정이 필요하다.

**정리(Martin–Steel).** Woodin 기수가 무한히 많으면 PD 가 성립한다.[^5]

PD 아래에서는 모든 사영 집합이 완전집합 성질, Lebesgue 가측성, Baire 성질을 갖는다. 척도 성질과 균일화는 $\Pi^1_1,\Sigma^1_2,\Pi^1_3,\Sigma^1_4,\dots$ 의 자리에서만 성립하고, 이 주기 $2$ 의 교대가 주기성 정리다.

# 활용

- **해석학에서 나오는 집합의 복잡도.** $C\lbrack0,1\rbrack$ 안에서 어디서도 미분 가능하지 않은 함수들의 집합은 Borel 이지만, 미분 가능한 함수들의 집합은 $\Pi^1_1$ 이고 $\Pi^1_1$ 안에서 가장 복잡한 자리에 놓인다. 어떤 집합이 Borel 인지 묻는 문제도 같은 자리에 있다.
- **동치관계의 분류.** 해석적 동치관계 사이의 Borel 환원 가능성이 분류 문제의 난이도를 재는 척도가 되고, 그 비교가 사영 계층 안에서 이루어진다.
- **효과적 판본.** [해석적 계층](analytical-hierarchy.md)의 $\Sigma^1_n$ 은 자연수 집합 위에서 읽은 같은 정의이고, $\Delta^1_1$ 자리에서 [초산술적 계층](hyperarithmetical-hierarchy.md)과 만난다.
- **큰 기수와의 대응.** 각 단계의 정규성이 어떤 큰 기수의 존재와 무모순 강도가 같다는 대응이 알려져 있고, 이 대응이 큰 기수 공리를 고르는 기준으로 쓰인다.

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
