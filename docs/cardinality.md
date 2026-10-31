# 기수

# 개요

**기수(cardinality)** 는 집합의 크기다. 자연수 전체와 짝수 전체는 둘 다 끝없이 많아서 원소를 세어서는 어느 쪽이 많은지 정할 수 없다. 기수는 원소를 세는 대신 두 집합의 원소를 하나씩 짝지어 남는 것이 있는지 보고 크기를 비교한다.

# 직관

유한집합의 크기는 원소를 하나씩 짝지어 비교한다. $n \mapsto 2n$ 은 자연수 전체와 짝수 전체를 빠짐없이 짝짓는다. 짝수는 자연수의 진부분집합인데 남는 것 없이 짝지어졌다. 무한집합에서는 부분이니까 더 작다는 추론을 쓸 수 없고, 전단사가 실제로 있는지 구성해 보는 것만 남는다.

그러면 모든 무한집합이 자연수와 짝지어지는가. $0$ 과 $1$ 로 된 무한 수열 전체를 1 번, 2 번, 3 번으로 전부 불렀다고 하자. $n$ 번째 수열의 $n$ 번째 자리만 모아 전부 뒤집으면 그 수열은 목록의 $n$ 번째 항목과 $n$ 번째 자리에서 다르므로 어느 항목과도 같지 않다. 목록이 전부를 담았다는 가정이 깨지고, 짝지을 수 있는 무한과 그렇지 않은 무한이 갈린다.

# 정의

## 기수와 가산

두 집합 $A,B$ 사이에 [전단사](functions.md)가 있으면 $A$ 와 $B$ 가 **같은 기수를 가진다(equinumerous)** 고 하고 $|A| = |B|$ 로 쓴다. 단사 $A \to B$ 가 있으면 $|A| \le |B|$ 다. 자연수는 $0$ 부터 시작한다고 하자.

$\lbrace a,b,c\rbrace$ 와 $\lbrace 1,2,3\rbrace$ 은 $a\mapsto 1, b\mapsto 2, c\mapsto 3$ 으로 같은 기수를 가진다. 직관 절의 $n\mapsto 2n$ 으로 $\mathbb N$ 과 짝수 전체가 같은 기수를 가진다.

| 이름 | 조건 |
|---|---|
| 가산(countable) | 유한이거나 $\mathbb{N}$ 과 전단사 |
| 가산무한(countably infinite) | 무한이면서 가산. 기수를 $\aleph_0$ 로 쓴다 |
| 비가산(uncountable) | 가산이 아님 |

정수 전체는 $0,-1,1,-2,2,\dots$ 의 순서로 번호를 매기면 $\mathbb N$ 과 전단사이므로 가산무한이다. 직관 절의 $0$ 과 $1$ 로 된 무한 수열 전체는 비가산이다.

## 멱집합과 연속체

$A$ 의 부분집합 전체인 멱집합(power set)을 $\mathcal P(A)$ 로 쓰고, 그 기수를 $2^{|A|}$ 로 쓴다. $\mathcal P(\lbrace 1,2\rbrace)=\lbrace \varnothing,\lbrace 1\rbrace,\lbrace 2\rbrace,\lbrace 1,2\rbrace\rbrace$ 은 원소가 $4=2^2$ 개다. 실수의 기수 $|\mathbb{R}| = 2^{\aleph_0}$ 를 연속체의 크기(cardinality of the continuum)라 한다. $2^{\aleph_0}$ 가 $\aleph_0$ 다음 기수인지는 ZFC(Zermelo–Fraenkel 집합론에 [선택공리](axiom-of-choice.md)를 더한 공리계)로 결정되지 않으며 이것이 [연속체 가설](continuum-hypothesis.md)이다.

# 성질

## 가산집합의 닫힘

- 가산집합의 부분집합은 가산이다.
- 가산 개의 가산집합의 합집합은 가산이다.
- 가산집합 두 개의 곱집합은 가산이다.
- 가산집합 위의 유한 수열 전체는 가산이다.
- 비어 있지 않은 집합이 가산인 것과, 중복을 허용한 수열로 모든 원소를 나열할 수 있는 것은 동치다. 전사 $\mathbb{N} \to A$ 가 있으면 처음 등장 시점으로 번호를 다시 매겨 전단사를 얻는다.

두 번째 항목은 각 집합의 나열 방식을 하나씩 골라야 하므로 선택공리의 약한 형태를 쓴다. 네 번째에서 유한 수열은 가산이고 무한 수열은 비가산이다. 알파벳이 유한하면 유한 문자열 전체가 가산이므로 프로그램, 증명, 수식처럼 유한한 기호열로 적히는 대상은 전부 가산이다.

정의할 수 있는 실수는 가산 개뿐인데 실수는 비가산이므로 이름 붙일 수 없는 실수가 존재한다.

$\mathbb{Q}$ 의 나열은 분자와 분모의 절댓값 합이 작은 것부터 훑어 얻는다. 각 단계의 후보가 유한 개이고 모든 유리수가 언젠가 등장한다.

## 대각선 논법

모든 무한 $0 \cdot 1$ 수열의 집합은 비가산이다.

[귀류법](proofs.md)으로 보인다. 전부 나열한 목록 $a^{(1)}, a^{(2)}, \ldots$ 이 있다고 하자. $n$ 번째 수열의 $n$ 번째 항을 $a_{nn}$ 이라 하고

$$
b_n=1-a_{nn}
$$

으로 정의한다. $b$ 는 목록의 $n$ 번째 수열과 $n$ 번째 자리에서 다르므로 어느 항목과도 같지 않아 가정이 모순이다.

[실수](real-numbers.md)도 같은 이유로 비가산이므로 모든 무한집합의 크기가 같지는 않다. 같은 논법을 프로그램의 목록에 적용하면 [정지 문제](halting-problem.md)의 결정 불가능성이 되고, 증명 가능한 명제의 목록에 적용하면 [Gödel 불완전성 정리](godel-incompleteness.md)가 된다.

## Cantor 정리

Cantor 정리(Cantor's theorem)는 다음이다. 임의의 집합 $A$ 에 대해 $|A| \lt |\mathcal P(A)|$ 다.

단사 $a \mapsto \lbrace a\rbrace$ 가 있으므로 $\le$ 이다. 전사 $f : A \to \mathcal P(A)$ 가 있다면

$$
D=\lbrace a\in A: a\notin f(a)\rbrace
$$

가 어떤 $f(a_0)$ 와 같아야 하는데 $a_0 \in D \iff a_0 \notin D$ 라 모순이다.

대각선 논법의 집합판이며 Russell 역설(Russell's paradox)과 같은 논법이다. 기수에는 최댓값이 없고 무한의 크기는 끝없이 올라간다.

## Cantor–Schröder–Bernstein

Cantor–Schröder–Bernstein 정리(Cantor–Schröder–Bernstein theorem)는 다음이다. $|A| \le |B|$ 이고 $|B| \le |A|$ 이면 $|A| = |B|$ 다. 양방향 단사에서 전단사를 구성할 수 있고 선택공리도 필요 없다. $[0,1]$ 과 $\mathbb{R}$ 이 같은 크기임을 보일 때처럼 전단사를 직접 만들기 번거로운 경우에 쓴다.

# 활용

## 측도에서의 가산과 비가산

[측도](measure.md)는 가산 가법성(countable additivity)을 요구한다. 한 점의 길이가 $0$ 이고 유리수가 가산이므로 $\mathbb{Q} \cap [0,1]$ 의 길이는 $0$ 이다. 구간은 비가산 개의 점으로 이루어져 같은 논증을 적용할 수 없고 길이가 $0$ 이 아니다. 거의 어디서나 성립한다는 표현의 의미도 이 구분에 있다.

가산성이 필요충분은 아니다. [Cantor 집합](cantor-set.md)은 비가산인데 측도가 $0$ 이다.

## 계산과 증명의 한계

프로그램은 가산인데 $\mathbb{N} \to \lbrace 0,1\rbrace$ 함수는 비가산이므로 계산 불가능한 함수가 존재한다. 증명은 가산인데 명제의 참·거짓 배정은 비가산이다. 세는 논증이 존재성을 보장하고 대각선 논법이 구체적인 반례를 지목하며, 정지 문제가 후자의 결과다.

## 논리에서의 상대성

1 계 논리의 언어가 가산이면 모형도 가산인 것을 잡을 수 있다는 것이 [Löwenheim–Skolem 정리](lowenheim-skolem.md)다. 비가산 집합의 존재를 증명하는 ZFC 에도 가산 모형이 있다는 Skolem 역설(Skolem's paradox)이 생긴다. 전단사의 존재가 모형 안에서 판정되므로 역설이 아니고, 크기는 모형에 상대적이다[^1].

[^1]: Jiří Lebl, *Basic Analysis*, Basic set theory / Intervals and the size of R. 기수와 가산성, 유리수의 가산성, 실수의 비가산성(정리 1.4.2). https://www.jirka.org/ra/html/sec_basicset.html

# 연관 문서

## 선수지식

- [함수](functions.md)
- [증명](proofs.md)

## 더 알아보기

- [측도](measure.md)
- [계산 가능성](computability.md)
- [Löwenheim–Skolem 정리](lowenheim-skolem.md)
- [연속체 가설](continuum-hypothesis.md)
- [Δ 체계 보조정리](delta-system-lemma.md)

#set_theory #measure_theory #logic #computation
