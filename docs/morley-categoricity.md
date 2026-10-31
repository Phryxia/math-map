# Morley 범주성 정리

# 개요

**Morley 범주성 정리(Morley's categoricity theorem)** 는 가산 언어의 완전 이론이 어떤 비가산 [기수](cardinality.md)에서 모형을 하나만 가지면 모든 비가산 기수에서 그렇다는 정리다. 표수 $0$ 인 대수적으로 닫힌 체는 크기를 비가산 $\kappa$ 로 정하면 동형을 빼고 하나뿐인데, 이런 유일성이 크기마다 따로 확인해야 하는 성질인지가 이 정리의 물음이다. 정리는 그런 이론의 모형이 차원 하나로 결정됨을 보여 한 크기에서의 유일성을 모든 비가산 크기로 옮긴다.

# 직관

표수 $0$ 인 대수적으로 닫힌 체(algebraically closed field)의 이론 $\mathrm{ACF}\_0$ 에서 크기 $\kappa$ 인 모형을 세어 본다. 모형 $K$ 는 소체 $\mathbb Q$ 를 포함하고, $\mathbb Q$ 위의 초월기저 $B$ 를 잡으면 $K$ 는 $\mathbb Q(B)$ 의 대수적 폐포이므로 $K$ 가 $\vert B\vert$ 하나로 정해진다. $\kappa$ 가 비가산이면 $\vert K\vert=\vert B\vert$ 이므로 [초월차수](transcendence-degree.md)가 $\kappa$ 로 강제되고, 크기 $\kappa$ 인 모형은 동형을 빼고 하나다.

$\kappa=\aleph_0$ 이면 초월차수가 $0,1,2,\dots,\aleph_0$ 가운데 무엇이든 되고 그 값마다 다른 모형이 나온다. 대수적 수 전체 $\overline{\mathbb Q}$, $\mathbb Q(\pi)$ 의 대수적 폐포, $\mathbb Q(\pi,e)$ 의 대수적 폐포는 모두 가산이지만 서로 동형이 아니다. 가산 모형은 $\aleph_0$ 개다.

초월차수는 대수적 종속이라는 관계가 만드는 차원이고, 벡터공간의 차원도 선형 종속에서 같은 방식으로 나온다. 두 경우 모두 종속 관계가 유한 부분집합에서 결정되고 교환법칙을 만족한다. Morley 정리에 따르면 어떤 비가산 기수에서 모형이 유일하면 그 이론 안에는 이런 종속 관계를 갖춘 정의 가능 집합이 있고, 모형은 그 집합 위의 차원 하나로 결정된다. 비가산 크기에서는 차원의 값이 모형의 크기와 같으므로 유일성이 모든 비가산 기수로 옮겨간다.

# 정의

## 범주성

이론 $T$ 의 크기 $\kappa$ 인 모형이 동형을 빼고 하나뿐이면 $T$ 를 $\kappa$ **범주적(categorical)** 이라 한다. 모든 비가산 기수에서 범주적이면 **비가산 범주적(uncountably categorical)** 이라 한다. 직관 절의 계산으로 $\mathrm{ACF}\_0$ 는 비가산 범주적이고 $\aleph_0$ 범주적이 아니다.

## 강최소 집합

모형 $\mathcal M$ 의 정의 가능한 무한집합 $D$ 가 **최소(minimal)** 라는 것은 $D$ 의 정의 가능한 부분집합이 모두 유한이거나 $D$ 안에서 여유한(cofinite)이라는 뜻이다. $\mathcal M$ 의 모든 기본 확대(elementary extension)에서 $D$ 를 정의하는 논리식이 정의하는 집합이 최소이면 $D$ 를 **강최소(strongly minimal)** 라 한다.

$\mathrm{ACF}\_0$ 의 모형 $\mathbb C$ 에서 논리식 $x=x$ 가 정의하는 $\mathbb C$ 전체는 강최소다. 한 변수 논리식이 정의하는 집합은 다항식의 영점 집합들을 합집합, 교집합, 여집합으로 엮은 것이고, 영이 아닌 다항식의 영점은 유한 개다.

강최소 집합 $D$ 위의 **대수적 폐포(algebraic closure)** 연산은 다음과 같다.

$$
\mathrm{acl}(A)=\lbrace b\in D:\text{어떤 }\varphi(x,\bar a)\text{ 가 }b\text{ 를 만족하고 }\varphi(\mathcal M,\bar a)\text{ 가 유한}\rbrace
$$

$\mathbb C$ 에서 $\mathrm{acl}(\varnothing)=\overline{\mathbb Q}$ 이고, $\mathrm{acl}(A)$ 는 $\mathbb Q(A)$ 의 대수적 폐포다. $b=\pi^2+1$ 은 $\mathrm{acl}(\lbrace\pi\rbrace)$ 에 속하고 $\mathrm{acl}(\varnothing)$ 에 속하지 않는다. 이때 $\pi$ 는 $x^2+1-b=0$ 의 근이므로 $\pi\in\mathrm{acl}(\lbrace b\rbrace)$ 다.

부분집합 $B\subseteq D$ 의 어느 원소 $b$ 도 $\mathrm{acl}(B\setminus\lbrace b\rbrace)$ 에 속하지 않으면 $B$ 를 독립이라 한다. 독립이고 $\mathrm{acl}(B)=D$ 인 $B$ 를 기저라 하고, 기저의 크기를 $D$ 의 **차원(dimension)** 이라 한다. $\mathbb C$ 에서 기저는 초월기저이고 차원은 초월차수 $2^{\aleph_0}$ 이다.

## Vaughtian 쌍

$\mathcal M\prec\mathcal N$ 이 서로 다른 모형이고 정의 가능 무한집합 $\varphi(\mathcal M,\bar a)=\varphi(\mathcal N,\bar a)$ 가 있으면 $(\mathcal N,\mathcal M)$ 을 $\varphi$ 에 대한 **Vaughtian 쌍(Vaughtian pair)** 이라 한다. 모형을 키워도 $\varphi$ 가 정의하는 집합이 그대로인 상황이다.

한 자리 관계 기호 $U$ 하나의 언어에서 "$U$ 도 무한이고 $U$ 의 여집합도 무한이다" 를 이론으로 삼는다. $\mathcal M=(\mathbb N,\text{짝수})$ 에 $U$ 밖의 원소만 더한 $\mathcal N$ 을 잡으면 $\mathcal M\prec\mathcal N$ 이고 $U(\mathcal M)=U(\mathcal N)$ 이므로 Vaughtian 쌍이다. 이 이론은 $U$ 와 여집합의 크기를 따로 정할 수 있어 비가산 기수에서 범주적이 아니다.

# 성질

## Morley 정리

가산 언어의 완전 이론 $T$ 가 어떤 비가산 기수 $\kappa$ 에서 $\kappa$ 범주적이면 모든 비가산 기수에서 범주적이다.[^1]

$\mathrm{acl}$ 은 강최소 집합 위에서 교환법칙과 유한성을 만족한다. $b\in\mathrm{acl}(A\cup\lbrace c\rbrace)\setminus\mathrm{acl}(A)$ 이면 $c\in\mathrm{acl}(A\cup\lbrace b\rbrace)$ 이고, $\mathrm{acl}(A)$ 는 $A$ 의 유한 부분집합들의 $\mathrm{acl}$ 의 합집합이다. 그래서 기저가 존재하고 기저의 크기가 하나로 정해져, 정의 절의 차원이 잘 정의된다.

증명은 세 단계다.

첫째, $\kappa$ 범주적이면 $T$ 가 $\omega$ 안정($\omega$-stable)이다. [안정 이론](stable-theories.md)에서 $\omega$ 안정은 가산 매개변수 집합 위의 타입(type)이 가산 개뿐이라는 조건이다. 이 조건이 깨지면 어떤 가산 집합 위의 타입을 비가산 개 실현하는 크기 $\kappa$ 모형과, 가산 부분집합마다 타입을 가산 개만 실현하는 크기 $\kappa$ 의 Ehrenfeucht–Mostowski 모형(Ehrenfeucht–Mostowski model)이 생겨 둘이 동형이 아니다.

둘째, $\omega$ 안정 이론에서 Morley 위수(Morley rank)가 가장 작고 Morley 정도(Morley degree)가 $1$ 인 무한 정의 가능 집합은 최소 집합이다. 셋째 단계에서 Vaughtian 쌍이 없다는 것을 쓰면 이 집합에서 강최소 집합을 얻는다.

셋째, $\kappa$ 범주적이면 Vaughtian 쌍이 없다. Vaughtian 쌍이 있으면 Vaught 의 두 기수 정리(two-cardinal theorem)로 $\varphi$ 의 집합이 가산이면서 크기가 $\kappa$ 인 모형이 생기고, $\varphi$ 의 집합도 크기가 $\kappa$ 인 모형과 동형이 아니다. Vaughtian 쌍이 없으면 모형 $\mathcal M$ 이 강최소 집합 $D$ 위의 차원으로 결정되고, 비가산 $\lambda$ 에서 그 차원은 $\lambda$ 로 강제된다.

## Baldwin–Lachlan 판정

Baldwin–Lachlan 정리(Baldwin–Lachlan theorem). 가산 언어의 완전 이론 $T$ 가 비가산 범주적인 것은 $T$ 가 $\omega$ 안정이고 Vaughtian 쌍이 없는 것과 같다.[^2]

이로부터 $T$ 가 비가산 범주적이면 $T$ 의 가산 모형은 동형을 빼고 $1$ 개이거나 $\aleph_0$ 개다. 가산 모형은 강최소 집합 위의 차원이 $0,1,2,\dots,\aleph_0$ 가운데 무엇인가로 갈리므로 $\aleph_0$ 개이고, 차원이 항상 무한이 되는 이론에서만 $1$ 개다. $\mathrm{ACF}\_0$ 는 $\aleph_0$ 개, 무한 집합의 이론은 $1$ 개다.

## Vaught 추측

가산 언어의 완전 이론의 비동형 가산 모형 개수는 Vaught 정리로 $2$ 가 될 수 없고, Ehrenfeucht 의 예로 $3$ 은 될 수 있다. 비가산 범주적 이론에서는 위의 결과로 그 개수가 $1$ 이나 $\aleph_0$ 이다. 가산 모형 개수가 $\aleph_0$ 보다 크면 $2^{\aleph_0}$ 이라는 진술이 Vaught 추측(Vaught's conjecture)이다.

# 활용

- 비가산 범주적 이론의 예. 표수가 고정된 대수적으로 닫힌 체, 가산 체 위의 무한 차원 벡터공간, 나누어지는 꼬임 없는 아벨군(divisible torsion-free abelian group), 상등만 갖춘 무한 집합이 비가산 범주적이다. 넷 모두 강최소 집합 위의 차원이 초월차수나 선형 차원이다.
- $\mathrm{ACF}\_p$ 의 모형 판정. 두 대수적으로 닫힌 체는 표수와 초월차수가 같으면 동형이다. [Ax–Grothendieck 정리](ax-grothendieck.md)의 증명이 이 판정으로 유한체의 대수적 폐포에서 [복소수체](complex-numbers.md)로 진술을 옮긴다.
- 안정성 스펙트럼. 증명 첫 단계는 타입 개수로 이론을 가르고, 그 기준을 모든 기수로 넓힌 것이 안정 이론의 안정성 스펙트럼(stability spectrum)이다.
- 강최소 집합의 조합기하. 대수적 폐포가 주는 프리기하(pregeometry)를 분류하는 작업이 Morley 정리의 둘째 단계에서 갈라져 나왔다. 자명한 기하, 벡터공간의 기하, 대수적으로 닫힌 체의 기하 셋이 기본 예이고, 이 셋이 전부인지를 묻는 것이 [Zilber 삼분법](zilber-trichotomy.md)이다.

[^1]: M. Morley, "Categoricity in power", *Trans. Amer. Math. Soc.* **114** (1965). 교재 서술은 D. Marker, *Model Theory: An Introduction* (2002), 6장.
[^2]: J. Baldwin, A. Lachlan, "On strongly minimal sets", *J. Symbolic Logic* **36** (1971).

# 연관 문서

## 선수지식

- [안정 이론](stable-theories.md)

## 더 알아보기

- [Zilber 삼분법](zilber-trichotomy.md)

#logic #foundations #algebra
