# 큰 기수

# 개요

큰 기수는 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)가 존재를 증명하지 못하는 크기의 [기수](cardinality.md)다. 도달 불가능 기수, 측도 가능 기수처럼 여러 종류가 있고, 각각을 존재한다고 가정한 것이 큰 기수 공리다.

이 공리들은 세기가 다르고, 센 것을 가정하면 약한 것의 존재가 따라 나온다. 집합론은 이 줄을 명제의 세기를 재는 눈금으로 쓴다.

# 직관

누적 계층을 $V_0=\varnothing$ , $V_{\alpha+1}=\mathcal P(V_\alpha)$ , 극한 $\lambda$ 에서 $V_\lambda=\bigcup_{\alpha\lt \lambda}V_\alpha$ 로 쌓는다. $V_\omega$ 는 유전적 유한집합 전체이고, 여기서 ZFC 의 공리를 하나씩 확인하면 무한 공리만 빼고 모두 성립한다. 멱집합 공리는 유한집합의 멱집합이 유한해서 성립하고, 치환 공리는 유한집합의 상이 유한해서 성립한다. 이 두 확인이 쓴 것은 $\aleph_0$ 의 성질 둘이다. 유한 기수 $n$ 에 대해 $2^n$ 이 여전히 유한하고, 유한 개의 유한집합을 합쳐도 유한하다.

같은 성질을 비가산 기수 $\kappa$ 에서 되풀이한다. $\lambda\lt \kappa$ 마다 $2^\lambda\lt \kappa$ 이고 $\kappa$ 개 미만의 $\kappa$ 미만 기수를 합쳐도 $\kappa$ 에 못 미친다고 하자. 그러면 위의 두 확인이 그대로 $V_\kappa$ 에서 돌아가고, 이번에는 $\omega\in V_\kappa$ 이므로 무한 공리까지 성립한다. 이런 $\kappa$ 가 **도달 불가능 기수**다.

# 정의

## 정칙성과 강극한

기수 $\kappa$ 의 공종도 $\mathrm{cf}(\kappa)$ 는 $\kappa$ 에 공종인 부분집합의 최소 크기다. $\mathrm{cf}(\kappa)=\kappa$ 이면 $\kappa$ 가 **정칙**이고, 아니면 특이하다. $\aleph_0$ 과 $\aleph_1$ 은 정칙이고 $\aleph_\omega$ 는 공종도가 $\omega$ 라 특이하다.

모든 $\lambda\lt \kappa$ 에 대해 $2^\lambda\lt \kappa$ 이면 $\kappa$ 가 **강극한**이다.

## 도달 불가능 기수

비가산이고 정칙이며 강극한인 기수를 **도달 불가능 기수**라 한다. 세 조건이 각각 $\kappa$ 를 아래에서 만드는 세 방법을 막는다. 비가산성은 $\omega$ 에서 세어 올라가는 것을, 정칙성은 작은 기수들의 합집합을, 강극한성은 멱집합을 막는다.

## 측도 가능 기수

$\kappa$ 위에 $\kappa$ 개 미만의 만남에 닫힌 비주요 [초필터](boolean-algebras.md)가 있으면 $\kappa$ 를 **측도 가능 기수**라 한다. 그런 초필터는 $\kappa$ 의 부분집합마다 $0$ 이나 $1$ 을 주고 $\kappa$ 개 미만의 교집합에서 값을 보존하는 유한 가법 측도와 같다.

## 기본 매장과 임계점

$M$ 이 추이적 모임이고 $j\colon V\to M$ 이 모든 논리식의 참을 보존하면서 항등사상이 아니면 $j$ 를 **기본 매장**이라 한다. $j(\alpha)\neq\alpha$ 인 가장 작은 서수를 $j$ 의 **임계점**이라 하고 $\mathrm{crit}(j)$ 로 쓴다.

# 성질

## $V_\kappa$ 가 ZFC 의 모형

**정리.** $\kappa$ 가 도달 불가능이면 $V_\kappa$ 는 ZFC 의 모형이다.

외연, 정칙, 쌍, 합집합, 무한 공리는 $V_\kappa$ 가 추이적이고 $\omega$ 를 담는 데서 나온다. $x\in V_\kappa$ 이면 어떤 $\alpha\lt \kappa$ 에 대해 $x\subseteq V_\alpha$ 이므로 $\mathcal P(x)\subseteq V_{\alpha+1}$ 이고 강극한성으로 $\mathcal P(x)\in V_\kappa$ 다. 치환은 정칙성이 준다. $x\in V_\kappa$ 의 크기는 $\kappa$ 미만이므로 그 상의 서수들이 $\kappa$ 에 공종일 수 없고, 상이 어떤 $V_\beta$ 안에 들어간다. ∎

**따름정리.** ZFC 가 무모순이면 ZFC 는 도달 불가능 기수의 존재를 증명하지 못한다.

증명했다면 ZFC 안에서 ZFC 의 모형을 만들 수 있고, 이는 [Gödel 의 제2불완전성 정리](godel-incompleteness.md)에 어긋난다. 다른 큰 기수도 도달 불가능성을 함의하므로 같은 결론이 따른다.

## 측도 가능에서 도달 불가능

**정리.** 측도 가능 기수는 도달 불가능이다.

$\kappa$ 가 특이하면 $\kappa$ 를 $\mathrm{cf}(\kappa)$ 개의 작은 조각으로 나눌 수 있고, 초필터가 $\kappa$ 완비이므로 어느 한 조각이 값 $1$ 을 받아 $\kappa$ 미만의 집합이 측도 $1$ 이 된다. 이는 비주요성에 어긋난다. 강극한성도 같은 방식으로 $2^\lambda\ge\kappa$ 인 $\lambda\lt \kappa$ 에서 모순을 얻는다. ∎

## 구성가능 우주와의 충돌

**정리(Scott).** 측도 가능 기수가 존재하면 $V\neq L$ 이다.

증명은 [구성가능 우주](constructible-universe.md)에 있다. 측도 가능 기수의 초필터로 만든 초곱이 기본 매장 $j\colon V\to M$ 을 주고, $V=L$ 이면 $L$ 의 정의 가능한 정렬순서가 $j$ 로 보존되어 임계점에서 모순이 난다.

## Kunen 비일관성 정리

**정리(Kunen).** ZFC 에서 $j\colon V\to V$ 인 비자명 기본 매장은 존재하지 않는다[^1].

임계점 $\kappa$ 에서 시작해 $\kappa_{n+1}=j(\kappa_n)$ 으로 만든 열의 상한 $\lambda$ 를 잡으면 $j(\lambda)=\lambda$ 가 되고, $\lambda$ 위에서 $j$ 가 고정하지 못하는 조합적 대상을 만들어 모순을 얻는다. 이 정리가 기본 매장으로 세울 수 있는 큰 기수 공리의 위쪽 한계를 정한다.

# 활용

## 무모순성 강도의 눈금

명제 $\varphi$ 가 ZFC 와 함께 무모순인지를 직접 묻는 대신, 어떤 큰 기수 공리를 가정하면 $\varphi$ 의 모형을 만들 수 있는지를 묻는다. 강제법으로 모형을 만들 때 출발 모형에 큰 기수를 넣어 두는 것이 표준 절차이고, 역으로 $\varphi$ 에서 큰 기수의 무모순성을 되얻는 내부 모형 논증이 강도의 하한을 준다.

## 결정성 공리

$\omega$ 위의 무한 게임에서 두 참가자 중 한쪽이 필승 전략을 갖는다는 명제가 결정성이다. Woodin 기수가 무한히 많으면 $L(\mathbb R)$ 에서 모든 게임이 결정된다[^2]. 실수의 부분집합이 전부 Lebesgue [가측](measurable-functions.md)이라는 결론이 여기서 나온다.

## Grothendieck 우주

[범주](category.md)론에서 모든 집합의 모임 같은 대상을 다루려면 집합론적으로 닫힌 작은 우주가 필요하다. 도달 불가능 기수 $\kappa$ 에 대한 $V_\kappa$ 가 그 우주이고, Grothendieck 우주의 존재를 가정하는 것이 도달 불가능 기수의 존재를 가정하는 것과 같다.

[^1]: Kenneth Kunen, *Elementary embeddings and infinitary combinatorics*, Journal of Symbolic Logic 36 (1971), 407–413. 선택공리를 쓰는 증명이고, 선택공리 없이 같은 결론이 나오는지는 이 논문이 다루지 않는다.

[^2]: W. Hugh Woodin, *Supercompact cardinals, sets of reals, and weakly homogeneous trees*, Proceedings of the National Academy of Sciences 85 (1988), 6587–6591. Akihiro Kanamori, *The Higher Infinite* (2판, 2003) 32 절에 도달 불가능 기수부터 Woodin 기수까지의 줄과 각 층의 무모순성 강도가 정리되어 있다.

# 연관 문서

## 선수지식

- [서수](ordinals.md)
- [구성가능 우주](constructible-universe.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #logic #foundations
