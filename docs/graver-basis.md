# Graver 기저

# 개요

**Graver 기저(Graver basis)** 는 정수 행렬 $A$ 에 대해 $Ax=0$ 을 만족하는 정수 벡터 가운데, 같은 부호로 더 작게 쪼갤 수 없는 것을 모두 모은 유한 집합이다. 무게가 $1,1,2$ 킬로그램이고 값이 다른 상자 세 종류로 정확히 $2$ 킬로그램을 맞출 때, 지금의 선택에서 상자 몇 개를 바꿔 넣는 이동으로 더 싼 선택을 찾다 보면 어느 이동으로도 나아지지 않는데 최적이 아닌 자리에 멈출 수 있다. Graver 기저는 정수계획 문제에서 그런 자리가 생기지 않는 이동의 목록이고, 이 목록의 이동만 되풀이하면 최적해에 이른다.

# 직관

상자 $A$, $B$ 는 $1$ 킬로그램이고 값이 $2$ 와 $5$ 이며, 상자 $C$ 는 $2$ 킬로그램이고 값이 $3$ 이다. 상자를 $x\_1,x\_2,x\_3$ 개 담아 무게 $x\_1+x\_2+2x\_3=2$ 를 맞추고 값의 합 $2x\_1+5x\_2+3x\_3$ 을 가장 작게 하려고 한다. 가능한 선택은 $(2,0,0)$, $(1,1,0)$, $(0,2,0)$, $(0,0,1)$ 넷이고 값은 $4,7,10,3$ 이다.

두 선택의 차는 무게를 바꾸지 않는 정수 벡터, 곧 $u\_1+u\_2+2u\_3=0$ 의 정수해다. 이런 벡터는 모두 $(1,-1,0)$ 과 $(1,1,-1)$ 의 정수 결합이므로, 이 두 벡터와 그 반대 벡터만 이동으로 쓴다. $(2,0,0)$ 에서 네 이동을 해 보면 $(1,1,0)$ 은 값이 $7$ 로 늘고, $(3,-1,0)$, $(3,1,-1)$, $(1,-1,1)$ 은 상자 수가 음수라 선택이 아니다. 어느 이동으로도 나아지지 않지만 $(0,0,1)$ 의 값 $3$ 이 더 작다.

$(2,0,0)$ 에서 $(0,0,1)$ 로 가는 차는 $(-2,0,1)$ 이다. 이 벡터를 두 이동의 합 $-(1,-1,0)-(1,1,-1)$ 로 쪼개면 가운데 단계에서 상자 $B$ 를 하나 담았다 빼야 하고, 그 단계 $(1,1,0)$ 의 값이 $7$ 이다. 부호가 엇갈리게 쪼갠 것이 막힌 이유였으므로, 각 좌표의 부호를 지키면서 더 작게 쪼갤 수 없는 벡터를 모두 이동으로 넣는다. 이 문제에서 그런 벡터는 다음 여덟 개다.

$$
\pm(1,-1,0),\quad \pm(2,0,-1),\quad \pm(0,2,-1),\quad \pm(1,1,-1)
$$

$-(2,0,-1)$ 이 들어 있으므로 $(2,0,0)$ 에서 한 번에 $(0,0,1)$ 로 간다.

# 정의

## 부호를 지키는 순서

$u,v\in\mathbb Z^n$ 에서 모든 좌표 $i$ 에 대해 $u\_iv\_i\ge 0$ 이고 $\lvert u\_i\rvert\le\lvert v\_i\rvert$ 이면 $u\sqsubseteq v$ 로 쓰고, $u$ 가 $v$ 에 **부합한다(conformal)** 고 한다. $u$ 는 $v$ 와 같은 부호의 좌표만 가지며 각 좌표의 크기가 $v$ 이하다.

직관 절에서 $(1,0,-1)\sqsubseteq(2,0,-1)$ 이고, $(1,-1,0)$ 은 $(2,0,-1)$ 에 부합하지 않는다. 둘째 좌표의 크기가 $1$ 인데 $(2,0,-1)$ 의 둘째 좌표가 $0$ 이다.

## Graver 기저

정수 행렬 $A\in\mathbb Z^{d\times n}$ 의 정수 영공간 $\ker\_{\mathbb Z}A=\lbrace u\in\mathbb Z^n:\thinspace Au=0\rbrace$ 에서 $0$ 이 아닌 원소 가운데 $\sqsubseteq$ 에 대해 극소인 것 전체를 $A$ 의 **Graver 기저** $\mathcal G(A)$ 라 한다. 곧 $u\in\mathcal G(A)$ 는 $u\ne 0$ 이고, $0\ne v\sqsubseteq u$ 인 $v\in\ker\_{\mathbb Z}A$ 가 $u$ 뿐인 원소다.

직관 절의 $A=(1\ 1\ 2)$ 에서 $(1,1,-1)$ 에 부합하는 영이 아닌 벡터 가운데 무게가 $0$ 인 것은 $(1,1,-1)$ 뿐이므로 $(1,1,-1)\in\mathcal G(A)$ 다. $(3,-1,-1)$ 은 무게가 $0$ 이지만 $(1,-1,0)\sqsubseteq(3,-1,-1)$ 이므로 들지 않는다.

# 성질

## 유한성

정리. $\mathcal G(A)$ 는 유한 집합이다[^1].

증명의 요지. 부호 벡터 $\sigma\in\lbrace\pm1\rbrace^n$ 마다 $O\_\sigma=\lbrace x:\sigma\_ix\_i\ge 0\rbrace$ 로 두면 $\ker A\cap O\_\sigma$ 는 직선을 포함하지 않는 유리 다면 원뿔이다. 같은 $O\_\sigma$ 안에서 $v\sqsubseteq u$ 이면 $u-v$ 도 $O\_\sigma$ 의 정수점이므로, $\sqsubseteq$ 의 극소 원소는 두 영이 아닌 원소의 합으로 쓰이지 않는 기약 원소다. [Gordan 보조정리](gordan-lemma.md)로 기약 원소는 유한 개이고, 부호 벡터는 $2^n$ 개다. ∎

## 부합 분해

정리. $\ker\_{\mathbb Z}A$ 의 모든 원소 $u$ 는 $u$ 에 부합하는 Graver 기저 원소들의 합 $u=g\_1+\cdots+g\_k$ 로 쓰인다.

증명의 요지. $u\ne 0$ 이면 $u$ 에 부합하는 영이 아닌 원소는 유한 개이므로 그 가운데 극소인 $g\_1$ 이 있고, $g\_1\in\mathcal G(A)$ 다. $u-g\_1$ 은 $u$ 에 부합하고 좌표 크기의 합이 줄어든다. 같은 일을 되풀이한다. ∎

직관 절의 $(-2,0,1)$ 은 그 자체가 Graver 기저 원소이고, 정수 결합 $-(1,-1,0)-(1,1,-1)$ 은 둘째 좌표의 부호가 엇갈려 부합 분해가 아니다.

## 시험 집합

정리. 정수계획 문제 $\min\lbrace c^{\mathsf T}x:\thinspace Ax=b,\thinspace l\le x\le u,\thinspace x\in\mathbb Z^n\rbrace$ 의 허용해 $x$ 가 최적이 아니면, $x+g$ 가 허용해이고 $c^{\mathsf T}g\lt 0$ 인 $g\in\mathcal G(A)$ 가 존재한다[^1].

증명의 요지. 최적해 $y$ 에 대해 $y-x$ 를 부합 분해해 $\sum g\_k$ 로 쓴다. $c^{\mathsf T}(y-x)\lt 0$ 이므로 어떤 $g\_k$ 에서 $c^{\mathsf T}g\_k\lt 0$ 이다. $g\_k\sqsubseteq y-x$ 이므로 $x+g\_k$ 의 각 좌표는 $x\_i$ 와 $y\_i$ 사이에 있어 범위 조건을 만족하고, $A(x+g\_k)=b$ 다. ∎

그래서 $\mathcal G(A)$ 는 $b,l,u,c$ 에 관계없이 $A$ 만으로 정해지는 **시험 집합(test set)** 이다. 허용해에서 시작해 값이 줄어드는 Graver 이동을 되풀이하면 최적해에서 멈춘다. 이동마다 가능한 한 여러 번 같은 방향으로 가는 규칙을 쓰면 이동 횟수가 입력 크기의 다항식으로 묶인다[^2].

## 다른 기저와의 포함

$A$ 의 정수 영공간의 격자 기저는 일반적으로 시험 집합이 아니다. 직관 절의 $\lbrace(1,-1,0),(1,1,-1)\rbrace$ 이 그 예다. [토릭 아이디얼](toric-ideals.md) $I\_A$ 의 보편 [Gröbner 기저](groebner-bases.md)는 Graver 기저에 포함되고, 그래서 모든 항 순서(term order)의 Gröbner 기저도 Graver 기저의 부분집합이다[^3].

# 활용

- 정수계획의 증가 알고리즘. 행렬이 작은 블록을 대각으로 여러 번 되풀이한 꼴인 $N$ 겹 정수계획(N-fold integer programming)에서는 Graver 기저 원소의 크기가 블록에만 의존하고, 이 성질로 $N$ 에 대해 다항 시간 알고리즘이 나온다[^4].
- 대수 통계. 주변합이 고정된 분할표 위의 무작위 걸음에 쓰는 Markov 기저(Markov basis)는 Graver 기저의 부분집합이다. 분할표 문제에서 Graver 기저를 계산해 Markov 기저의 후보로 쓴다[^5].
- [Gordan 보조정리](gordan-lemma.md)의 계산. 부호 영역마다의 기약 원소가 Graver 기저이므로, Graver 기저를 계산하는 완비 알고리즘(completion procedure)은 원뿔의 Hilbert 기저 계산에도 쓴다.

[^1]: Jack E. Graver, "On the foundations of linear and integer linear programming I", *Mathematical Programming* **9** (1975), 207–226.
[^2]: Jesús A. De Loera, Raymond Hemmecke, Matthias Köppe, *Algebraic and Geometric Ideas in the Theory of Discrete Optimization*, SIAM, 2013.
[^3]: Bernd Sturmfels, *Gröbner Bases and Convex Polytopes*, American Mathematical Society, 1996.
[^4]: Raymond Hemmecke, Shmuel Onn, Lyubov Romanchuk, "N-fold integer programming in cubic time", *Mathematical Programming* **137** (2013), 325–341.
[^5]: Persi Diaconis, Bernd Sturmfels, "Algebraic algorithms for sampling from conditional distributions", *Annals of Statistics* **26** (1998), 363–397.

# 연관 문서

## 선수지식

- [Gordan 보조정리](gordan-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #combinatorics #algebra
