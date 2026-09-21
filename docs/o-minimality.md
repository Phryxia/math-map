# o-최소성

# 개요

o-최소성은 선형순서를 갖춘 구조에서 정의 가능한 부분집합이 구간과 점의 유한 합집합뿐이라는 조건이다. 실수체의 1차 이론이 이 조건을 만족하고, 지수함수를 더한 구조도 만족한다.

정의 가능 집합의 모양을 이렇게 제한하면 차원, 셀 분해, 성분 개수의 유한성이 따라 나온다. 병리적인 집합이 정의되지 않으므로 해석기하의 정리를 1차 논리 안에서 쓸 수 있다.

# 직관

실수체 $(\mathbb R, +, \cdot, \lt)$ 에서 논리식으로 정의할 수 있는 집합을 모아 본다. $x^2 \lt 2$ 는 열린구간을 주고, $\exists y\thinspace(y^2 = x)$ 는 반직선 $\lbrack 0,\infty)$ 를 준다. 다항식의 부호 조건을 유한히 결합한 것이므로 어느 경우에나 구간과 점의 유한 합집합이 나온다.

정수 집합은 이 방식으로 나오지 않는다. $\mathbb Z$ 가 정의 가능하다면 $\mathbb Z$ 안에서 덧셈과 곱셈을 쓸 수 있고, 산술의 정의 가능 집합은 구간의 유한 합집합이 아니다. 실수체의 1차 이론이 결정 가능한 반면 산술의 이론은 결정 가능하지 않으므로 두 구조를 가르는 선이 있어야 한다.

그 선을 정의 가능 집합의 모양으로 긋는다. 한 변수 논리식이 정의하는 집합이 언제나 구간과 점의 유한 합집합이면 구조가 **o-최소**다. 여러 변수의 경우는 이 조건에서 따라 나온다.

# 정의

## o-최소 구조

조밀한 선형순서 $\lt$ 를 포함하는 언어의 구조 $M$ 이 **o-최소**라는 것은, 매개변수를 허용한 한 변수 논리식이 정의하는 $M$ 의 부분집합이 모두 다음 꼴이라는 뜻이다.

$$
I_1 \cup \dots \cup I_k \cup \lbrace a_1, \dots, a_m\rbrace
$$

$I_j$ 는 끝점이 $M \cup \lbrace \pm\infty\rbrace$ 에 있는 열린구간이다. 이론 $T$ 의 모든 모형이 o-최소이면 $T$ 를 o-최소 이론이라 한다.

## 셀

$M^n$ 의 **셀**을 $n$ 에 대한 재귀로 정의한다. $M^1$ 의 셀은 한 점이나 열린구간이다. $C \subseteq M^n$ 이 셀이고 $f, g$ 가 $C$ 위의 정의 가능 연속함수일 때 다음이 $M^{n+1}$ 의 셀이다.

$$
\Gamma(f) = \lbrace (x,f(x)) : x \in C\rbrace,
\qquad
(f,g)\_C = \lbrace (x,y) : x \in C,\ f(x) \lt y \lt g(x)\rbrace
$$

$f$ 나 $g$ 자리에 $\pm\infty$ 를 넣은 것도 셀이다. 각 셀은 어떤 $M^d$ 와 정의 가능 동형이고 그 $d$ 를 셀의 **차원**이라 한다.

# 성질

## 셀 분해 정리

> **정리.** $M$ 이 o-최소이면 $M^n$ 의 정의 가능 부분집합은 유한 개의 셀로 분할된다. 정의 가능 함수 $f\colon A \to M$ 에 대해서는 $A$ 의 셀 분해를 각 셀 위에서 $f$ 가 연속이 되도록 잡을 수 있다.[^1]

증명은 $n$ 에 대한 귀납이다. $n=1$ 은 o-최소성의 정의다. 귀납 단계에서는 마지막 좌표를 양화해 얻은 집합에 귀납 가정을 쓰고, 단조성 정리로 각 조각 위에서 끝점 함수가 연속임을 확보한다.

**단조성 정리.** 정의 가능 함수 $f\colon (a,b) \to M$ 에 대해 $(a,b)$ 를 유한 개의 점과 열린구간으로 나누어, 각 구간 위에서 $f$ 가 상수이거나 연속인 강한 단조함수가 되게 할 수 있다.

## 차원과 유한성

정의 가능 집합 $A$ 의 **차원**은 그 셀 분해에 나오는 셀의 차원 가운데 가장 큰 값이고, 분해를 어떻게 잡아도 같다. 차원은 다음을 만족한다.

$$
\dim(A \cup B) = \max(\dim A, \dim B),
\qquad
\dim f(A) \le \dim A
$$

정의 가능 집합의 연결 성분은 유한 개이고 각 성분이 정의 가능하다. 매개변수를 갖는 집합족 $\lbrace A_t\rbrace$ 에서 성분 개수가 $t$ 에 무관하게 유계라는 것도 셀 분해에서 나온다.

## o-최소인 구조

실폐체는 o-최소다. 양화사 소거로 정의 가능 집합이 다항식의 부호 조건이 되고, 한 변수 다항식의 부호는 근 사이에서 일정하다. 실수체에 지수함수를 더한 $(\mathbb R, +, \cdot, \lt, \exp)$ 도 o-최소이며, 이 증명이 Wilkie 의 결과다.[^2]

정수 집합이 정의 가능한 구조는 o-최소가 아니다. $\mathbb Z$ 는 구간과 점의 유한 합집합이 아니기 때문이다. 같은 이유로 실수체에 사인함수를 더한 구조도 o-최소가 아니다. 사인의 영점 집합이 $\pi\mathbb Z$ 다.

# 활용

- 실수의 1차 이론의 결정 절차가 정의 가능 집합의 모양에서 나온다. 양화사 소거가 결정성을 주고, o-최소성이 그 결과를 기하적 진술로 옮긴다.
- 실해석적 기하의 유한성 정리를 1차 논리로 서술한다. 준해석적 집합의 성분 유한성과 위상적 사소성이 셀 분해의 따름정리다.
- [Pila–Wilkie 의 셈 정리](pila-wilkie-theorem.md)가 o-최소 집합 위의 유리점 개수를 제한하고, 이것이 Manin–Mumford 추측과 André–Oort 추측의 증명에 쓰인다. 초월적 부분의 유리점이 드물다는 진술을 차원 논증으로 얻는다.
- [Lie 군](lie-groups.md)의 지수사상이 정의 가능한 구조에서 부분군의 분류가 유한 자료로 환원된다. $\exp$ 를 더한 구조의 o-최소성이 그 전제다.

[^1]: Lou van den Dries, *Tame Topology and O-minimal Structures*, Cambridge University Press, London Mathematical Society Lecture Note Series 248 (1998), Ch. 3. 셀 분해 정리와 단조성 정리, 차원 이론이 이 장에 있다.

[^2]: A. J. Wilkie, "Model completeness results for expansions of the ordered field of real numbers by restricted Pfaffian functions and the exponential function", Journal of the American Mathematical Society 9 (1996), 1051–1094.

# 연관 문서

## 선수지식

- [모형론](model-theory.md)

## 더 알아보기

- [Pila–Wilkie 정리](pila-wilkie-theorem.md)

#logic #foundations #algebra #topology
