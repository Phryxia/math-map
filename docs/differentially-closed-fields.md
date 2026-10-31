# 미분적으로 닫힌 체

# 개요

**미분적으로 닫힌 체(differentially closed field)** 는 계수가 그 체에 있는 미분방정식이 해를 가지면 그 해가 항상 그 체 안에서 구해지는 체다. 복소 유리함수체 $\mathbb C(x)$ 에서 $y'=y$ 의 해 $e^x$ 는 유리함수가 아니므로 $\mathbb C(x)$ 안에 없다. 미분적으로 닫힌 체는 이런 해를 모두 더해 넣은 체이고, 다항식의 근을 모두 더해 대수적으로 닫힌 체를 만드는 것과 같은 방식으로 미분방정식의 해를 한 체 안에서 다룬다.

# 직관

복소 유리함수체 $\mathbb C(x)$ 에서 미분을 $d/dx$ 로 두고 $y'=y$ 를 풀어 본다. $y=p/q$ 를 서로소인 다항식의 몫이라 하면

$$
\frac{p'q-pq'}{q^2}=\frac{p}{q},\qquad p'q-pq'=pq
$$

다. 왼쪽에서 $q$ 가 $pq'$ 를 나누어야 하고 $p$ 와 $q$ 가 서로소이므로 $q$ 가 $q'$ 를 나눈다. $q'$ 의 차수가 $q$ 의 차수보다 작으므로 $q'=0$ 이고 $q$ 는 상수다. 그러면 $y$ 가 다항식 $p$ 이고 $p'=p$ 인데, 미분이 차수를 하나 낮추므로 $p=0$ 이다. $y'=y$ 는 $\mathbb C(x)$ 안에서 $0$ 말고는 해가 없다.

해를 얻으려면 $e^x$ 를 새 원소로 붙여 $\mathbb C(x)(e^x)$ 로 확대한다. 그 체에서 다시 $y'=y^2+x$ 를 풀면 또 밖으로 나가고, 확대는 끝나지 않는다. 확대를 멈추는 자리는 계수가 그 안에 있는 미분 방정식이면 무엇이든 해가 이미 들어 있는 체다.

# 정의

## 미분체

**미분체(differential field)** 는 체 $K$ 와 덧셈을 보존하고 Leibniz 규칙(Leibniz rule)을 만족하는 사상 $\delta:K\to K$ 의 짝이다.

$$
\delta(a+b)=\delta a+\delta b,\qquad \delta(ab)=a\thinspace\delta b+b\thinspace\delta a
$$

$\delta a$ 를 $a'$ 로도 쓴다. $\delta a=0$ 인 원소들의 집합 $C\_K=\lbrace a\in K:a'=0\rbrace$ 은 부분체이고 **상수체(field of constants)** 라 한다. 표수 $0$ 인 미분체의 예는 직관 절의 $\mathbb C(x)$ 와 미분 $d/dx$ 이고 상수체는 $\mathbb C$ 다. $\delta(x\cdot x)=x\cdot 1+x\cdot 1=2x$ 가 Leibniz 규칙의 한 경우다.

## 미분 다항식

$K\lbrace y\rbrace=K\lbrack y,y',y'',\dots\rbrack$ 를 **미분 다항식환(ring of differential polynomials)** 이라 한다. 항 $y^{(n)}$ 을 서로 독립인 변수로 보고 만든 다항식환이며 미분은 $\delta(y^{(n)})=y^{(n+1)}$ 로 확장한다. $f\in K\lbrace y\rbrace$ 에 실제로 나타나는 가장 높은 도함수의 차수를 $f$ 의 **위수(order)** 라 한다. 직관 절의 $y'-y$ 는 위수 $1$, $y'-y^2-x$ 도 위수 $1$ 이고, $y$ 는 위수 $0$ 이다.

## DCF 공리

표수 $0$ 인 미분체 $K$ 가 미분적으로 닫혀 있다는 것은 $K\lbrace y\rbrace$ 의 임의의 $f,g$ 에 대해 $f$ 의 위수가 $g$ 의 위수보다 크고 $g\neq 0$ 이면 다음을 만족하는 $a\in K$ 가 있다는 뜻이다.[^1]

$$
f(a)=0\quad\text{이고}\quad g(a)\neq 0
$$

$g$ 는 $f$ 의 해 가운데 낮은 위수의 방정식으로 이미 잡히는 것을 배제한다. $f=y'-y$, $g=y$ 로 두면 이 조건은 $a'=a$ 이고 $a\neq 0$ 인 $a$ 를 요구한다. 직관 절의 계산으로 $\mathbb C(x)$ 에는 그런 원소가 없으므로 $\mathbb C(x)$ 는 미분적으로 닫혀 있지 않다.

이 조건들을 [1차 논리](first-order-logic.md)의 공리로 적은 것이 표수 $0$ 인 미분적으로 닫힌 체의 이론 DCF$\_0$(differentially closed fields of characteristic 0)이다. 각 위수와 차수마다 공리 하나가 대응한다.

# 성질

## 미분 닫힘의 존재와 유일성

표수 $0$ 의 모든 미분체 $K$ 는 미분적으로 닫힌 확대를 갖고, 그중 $K$ 위의 소모형이 동형을 제외하고 유일하다. 이것을 $K$ 의 미분 닫힘(differential closure)이라 한다.[^2]

증명의 요지는 다음과 같다. DCF$\_0$ 는 완전 이론이고 $\omega$ 안정($\omega$-stable)이다. $\omega$ 안정 이론은 임의의 매개변수 집합 위에 소모형(prime model)을 가지며 그 소모형이 유일하다. 존재는 공리를 하나씩 만족시키는 확대를 반복해 얻는다.

대수적 닫힘과 달리 미분 닫힘은 극소가 아니다. $K$ 의 미분 닫힘이 자신보다 작은 미분적으로 닫힌 부분확대를 포함할 수 있다.[^2]

## 한정사 소거

DCF$\_0$ 는 미분환의 1차 언어에서 한정사 소거(quantifier elimination)를 갖고, 따라서 모형완전(model complete)하다. 정의 가능 집합은 미분 다항 방정식과 그 부정을 유한 번 합집합과 교집합으로 묶은 것이다.

## 상수체와 강최소성

미분적으로 닫힌 $K$ 의 상수체 $C\_K$ 는 대수적으로 닫힌 체다. 논리식 $y'=0$ 이 정의하는 집합으로서 $C\_K$ 는 강최소(strongly minimal)이고, 그 위의 유도된 구조는 순수한 대수적으로 닫힌 체의 구조다.

## 삼분법

DCF$\_0$ 의 모형 안의 강최소 집합은 자명한 프리기하(pregeometry)를 갖거나, 상수체로 내려가지 않는 단순 아벨 다양체의 Manin 핵(Manin kernel)과 비직교(non-orthogonal)이거나, 상수체와 비직교다.[^3] 이것이 이 이론에서 성립하는 [Zilber 삼분법](zilber-trichotomy.md)이다.

증명은 강최소 집합이 Zariski 기하(Zariski geometry)를 이룸을 보이고, Hrushovski–Zilber 의 Zariski 기하 분류를 쓴다.

# 활용

- Mordell–Lang 추측의 함수체 경우. 함수체 $K$ 를 미분적으로 닫힌 체에 넣고 Manin 사상의 핵으로 유한 Morley 계수의 군을 만든 뒤 위 삼분법을 적용한다. [Mordell–Lang 추측](mordell-lang.md)의 증명이 이 경로를 쓴다.
- [미분 Galois 이론](differential-galois-theory.md). 선형 미분 방정식의 Picard–Vessiot 확대는 상수체가 늘지 않는 미분 확대이고, 그 자기동형군이 상수체 위의 선형 대수군이다. 미분 닫힘 안에서 이 확대들을 찾는다.
- 미분 방정식의 해의 초월성. [Painlevé 방정식](painleve-equations.md)의 일반해가 고전적인 특수함수로 표현되지 않는다는 진술이 미분 대수적 군의 정의 가능성 판정으로 환원된다.
- 차분체와의 대비. 미분 대신 자기동형사상을 붙인 차분체의 이론 ACFA(algebraically closed fields with an automorphism)에서도 삼분법이 성립하고, 같은 방법이 아벨 다양체의 꼬임점을 다룬다.

[^1]: L. Blum, "Differentially closed fields: a model-theoretic tour", *Contributions to Algebra*, Academic Press (1977), 37–61. 위수와 차수로 공리를 적는 방식이 여기서 나왔다.
[^2]: D. Marker, "Model theory of differential fields", *Model Theory of Fields*, Lecture Notes in Logic **5**, Springer (1996), 38–113. 미분 닫힘의 유일성과 극소가 아니라는 사실의 증명이 3장과 4장에 있다.
[^3]: E. Hrushovski and Ž. Sokolović, "Minimal subsets of differentially closed fields" (1994). 서술은 각주 2의 5장.

# 연관 문서

## 선수지식

- [Zilber 삼분법](zilber-trichotomy.md)

## 더 알아보기

- [미분 Galois 이론](differential-galois-theory.md)

#logic #foundations #algebra
