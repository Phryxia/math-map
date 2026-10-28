# 문맥 자유 문법

# 개요

**문맥 자유 문법(context-free grammar, CFG)** 은 변수 하나를 문자열 하나로 바꾸는 규칙의 유한 집합으로 문자열을 생성하는 체계다. 짝이 맞는 괄호나 $0$ 이 $n$ 개 오고 $1$ 이 $n$ 개 오는 문자열만 골라내려 하면, 상태가 유한 개인 [유한 오토마타](finite-automata.md)는 앞에서 읽은 개수를 끝까지 기억하지 못한다. 문맥 자유 문법은 개수를 세는 대신 $S\to 0S1$ 같은 규칙으로 문자열을 안쪽부터 지어 이런 중첩 구조를 만든다.

# 직관

$0$ 이 $n$ 개 오고 $1$ 이 $n$ 개 오는 문자열 $0^n1^n$ 만 받아들이고 싶다. 유한 오토마타는 $0$ 을 읽는 동안 지금까지 읽은 개수를 상태로 기억해야 하는데, 상태가 $p$ 개뿐이면 $0^p1^p$ 를 읽을 때 같은 상태가 두 번 나와 개수를 잃는다. 유한 오토마타의 pumping lemma 가 이 계산이다.

개수를 세는 대신 문자열을 안쪽부터 짓는다. 기호 $S$ 를 "$0^n1^n$ 꼴의 문자열이 올 자리" 로 정하고, $S$ 를 $0S1$ 로 바꾸거나 빈 문자열로 바꾸는 규칙 둘을 둔다. $S$ 에서 시작해 $0S1$, $00S11$, $000S111$ 로 바꾸고 마지막에 $S$ 를 지우면 $000111$ 이 나온다. 규칙을 쓸 때마다 $0$ 과 $1$ 이 하나씩 함께 붙으므로 개수가 늘 같다.

$S$ 를 바꿀 때 $S$ 의 앞뒤에 무엇이 있는지는 보지 않는다. 앞뒤 문맥을 보지 않고 변수 하나만 바꾸므로 이런 규칙의 체계를 문맥 자유라 한다.

문맥 자유 문법이 생성하는 언어를 문맥 자유 언어(context-free language)라 하고, 이 언어는 스택 하나를 붙인 비결정적 오토마타가 인식하는 언어와 같다.

# 정의

**문맥 자유 문법** 은 네 요소 $G=(V,\Sigma,R,S)$ 다. $V$ 는 변수의 유한 집합, $\Sigma$ 는 $V$ 와 겹치지 않는 단말 기호(terminal)의 유한 집합, $R$ 은 $A\to\alpha$ 꼴 규칙의 유한 집합이고 $A\in V$, $\alpha\in(V\cup\Sigma)^\ast$ 다. $S\in V$ 는 시작 변수(start variable)다.

문자열 $\beta A\gamma$ 에 규칙 $A\to\alpha$ 를 쓰면 $\beta\alpha\gamma$ 가 되고, 이것을 $\beta A\gamma\Rightarrow\beta\alpha\gamma$ 로 적고 한 단계의 유도(derivation)라 한다. $\Rightarrow$ 를 유한 번 거듭한 관계를 $\Rightarrow^\ast$ 로 적는다. $G$ 가 생성하는 언어는

$$
L(G)=\lbrace w\in\Sigma^\ast : S\Rightarrow^\ast w\rbrace
$$

이다. 직관 절의 문법은 $V=\lbrace S\rbrace$, $\Sigma=\lbrace 0,1\rbrace$, $R=\lbrace S\to 0S1,\quad S\to\varepsilon\rbrace$ 이고 $L(G)=\lbrace 0^n1^n:n\ge 0\rbrace$ 이다.

유도 과정에서 각 변수를 그 변수를 바꾼 규칙의 오른쪽 기호들로 가지 치게 그린 나무를 **파스 트리(parse tree)** 라 한다. 어떤 $w\in L(G)$ 가 서로 다른 파스 트리 둘을 가지면 $G$ 는 **모호(ambiguous)** 하다.

규칙이 모두 $A\to BC$ 와 $A\to a$ 꼴이고($B,C$ 는 시작 변수가 아닌 변수, $a$ 는 단말 기호) 빈 문자열은 $S\to\varepsilon$ 으로만 생성되는 문법을 **Chomsky 정규형(Chomsky normal form)** 이라 한다. 모든 문맥 자유 문법은 같은 언어를 생성하는 Chomsky 정규형 문법으로 바꿀 수 있다.

**푸시다운 오토마타(pushdown automaton)** 는 비결정적 유한 오토마타에 스택 하나를 붙인 기계다. 한 단계에서 현재 상태, 읽은 입력 기호(또는 읽지 않음), 스택 맨 위 기호를 보고 다음 상태로 가며 스택 맨 위를 기호열로 바꾼다.

# 성질

## 푸시다운 오토마타와의 동치

**정리.** 언어가 어떤 문맥 자유 문법으로 생성되는 것과 어떤 푸시다운 오토마타로 인식되는 것은 동치다.

문법에서 기계를 만드는 쪽은 스택에 아직 처리하지 않은 유도 문자열을 둔다. 맨 위가 변수이면 규칙 하나를 비결정적으로 골라 오른쪽으로 바꾸고, 단말 기호이면 입력의 다음 기호와 비교해 지운다. 기계에서 문법을 만드는 쪽은 상태 쌍 $(p,q)$ 마다 변수 $A\_{pq}$ 를 두어 "스택을 비운 채 $p$ 에서 $q$ 로 가며 읽는 문자열" 을 생성하게 한다.

결정적 푸시다운 오토마타가 인식하는 언어는 문맥 자유 언어의 진부분집합이다. $\lbrace ww^R : w\in\lbrace 0,1\rbrace^\ast\rbrace$ ($w^R$ 은 $w$ 를 뒤집은 것)는 문맥 자유이지만 결정적 기계로는 가운데가 어디인지 알 수 없어 인식되지 않는다.

## 문맥 자유 언어의 pumping lemma

**정리.** $L$ 이 문맥 자유 언어이면 어떤 $p\ge 1$ 이 존재해, 길이가 $p$ 이상인 모든 $w\in L$ 을 $w=uvxyz$ 로 쪼갤 수 있다. 여기서 $vy$ 는 비어 있지 않고 $vxy$ 의 길이는 $p$ 이하이며, 모든 $i\ge 0$ 에서 $uv^ixy^iz\in L$ 이다.

증명의 요지. Chomsky 정규형 문법의 변수가 $m$ 개일 때 $p=2^m$ 으로 잡는다. 길이가 $p$ 이상인 문자열의 파스 트리에는 길이가 $m$ 보다 긴 경로가 있고, 그 경로에서 같은 변수 $A$ 가 두 번 나온다. 위쪽 $A$ 가 생성하는 부분이 $vxy$, 아래쪽 $A$ 가 생성하는 부분이 $x$ 이고, 아래쪽 $A$ 의 자리에 위쪽 $A$ 의 부분나무를 끼우거나 빼면 $uv^ixy^iz$ 가 나온다. ∎

$\lbrace 0^n1^n2^n:n\ge 0\rbrace$ 은 문맥 자유가 아니다. $w=0^p1^p2^p$ 에서 $vxy$ 는 길이가 $p$ 이하라 세 기호 가운데 많아야 둘만 담고, $uv^2xy^2z$ 에서는 세 기호의 개수가 같지 않다.

## 닫힘 성질

문맥 자유 언어의 부류는 합집합, 접합, 스타에 대해 닫혀 있다. 문법 둘의 시작 변수를 $S\_1,S\_2$ 라 하면 $S\to S\_1\mid S\_2$, $S\to S\_1S\_2$, $S\to SS\_1\mid\varepsilon$ 이 각각을 생성한다.

교집합과 여집합에 대해서는 닫혀 있지 않다. $\lbrace 0^n1^n2^m\rbrace$ 과 $\lbrace 0^m1^n2^n\rbrace$ 은 둘 다 문맥 자유인데 교집합은 $\lbrace 0^n1^n2^n\rbrace$ 이다. 여집합에 닫혀 있으면 합집합과 [De Morgan 법칙](de-morgan-laws.md)으로 교집합에도 닫히므로 여집합에도 닫혀 있지 않다. 정규언어와의 교집합은 푸시다운 오토마타와 유한 오토마타를 동시에 돌려 다시 문맥 자유 언어가 된다.

## 소속 판정

Chomsky 정규형 문법에서 $w=a\_1\cdots a\_n$ 이 $L(G)$ 에 속하는지는 Cocke–Younger–Kasami 알고리즘(CYK algorithm)으로 $O(n^3\lvert R\rvert)$ 시간에 판정된다. 부분 문자열 $a\_i\cdots a\_j$ 를 생성하는 변수의 집합을 짧은 구간부터 채운다.

```typescript
// table[i][j] = a_i..a_j 를 생성하는 변수의 집합 (0-based, i <= j)
function cyk(w: string[], unit: [string, string][], binary: [string, string, string][], start: string): boolean {
  const n = w.length;
  const table = [...Array(n)].map(() => [...Array(n)].map(() => new Set()));
  for (let i = 0; i < n; i++)
    for (const [A, a] of unit) if (a === w[i]) table[i][i].add(A);
  for (let len = 2; len <= n; len++)
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      for (let k = i; k < j; k++)
        for (const [A, B, C] of binary)
          if (table[i][k].has(B) && table[k + 1][j].has(C)) table[i][j].add(A);
    }
  return n > 0 && table[0][n - 1].has(start);
}
```

공허성과 유한성도 결정 가능하다. 공허성은 단말 기호열을 생성하는 변수를 아래에서부터 표시해 시작 변수가 표시되는지로, 유한성은 그런 변수들 사이의 규칙 그래프에 순환이 있는지로 판정한다.

## 결정 불가능한 문제

다음은 결정 불가능하다.

- $L(G)=\Sigma^\ast$ 인지. 따라서 두 문법이 같은 언어를 생성하는지도 결정 불가능하다.
- 두 문법이 생성하는 언어의 교집합이 비어 있는지.
- 문법이 모호한지.

교집합과 모호성은 [Post 대응 문제](post-correspondence-problem.md)에서 환원한다. 도미노 $(u\_i,v\_i)$ 마다 위 문자열들로 $S\_1\to u\_iS\_1c\_i\mid u\_ic\_i$, 아래 문자열들로 $S\_2\to v\_iS\_2c\_i\mid v\_ic\_i$ 를 만들면($c\_i$ 는 도미노 번호를 적는 새 기호), 두 언어가 공통 원소를 갖는 것과 도미노 문제가 해를 갖는 것이 동치이고 $S\to S\_1\mid S\_2$ 가 모호한 것도 같다. 전체성은 Turing 기계의 받아들이는 계산 기록(형상을 하나 걸러 뒤집어 적은 것)이 아닌 문자열 전체가 문맥 자유 언어라는 사실에서 환원한다.

## 내재적 모호성

모든 문법이 모호한 문맥 자유 언어가 존재하고, 이런 언어를 **내재적으로 모호(inherently ambiguous)** 하다고 한다. $\lbrace 0^i1^j2^k : i=j\text{ 또는 }j=k\rbrace$ 가 그 예다(Parikh, 1966)[^1]. 증명은 Ogden 보조정리(Ogden's lemma)로, 어느 문법에서든 어떤 $n$ 에서 $0^n1^n2^n$ 이 파스 트리를 둘 갖게 됨을 보인다.

# 활용

- 컴파일러의 구문 분석. 프로그래밍 언어의 문법은 문맥 자유 문법으로 적고, 파서는 결정적 푸시다운 오토마타로 인식되는 LR(left-to-right, rightmost derivation) 문법이나 LL(left-to-right, leftmost derivation) 문법으로 제한해 입력 길이에 선형인 시간에 파스 트리를 만든다.
- Chomsky 계층(Chomsky hierarchy). Chomsky 는 1956년에 규칙의 꼴로 문법을 네 층으로 나누었고, 문맥 자유 문법은 정규 문법 바로 위의 층이다[^2]. 각 층은 [유한 오토마타](finite-automata.md)의 계산 모델 계층과 같은 언어족을 준다.
- [나무 오토마타](tree-automata.md). 문맥 자유 문법의 파스 트리 전체는 나무 오토마타가 인식하는 나무 언어이고, 파스 트리의 잎을 왼쪽부터 읽은 문자열 전체가 문맥 자유 언어다.
- 확률적 문맥 자유 문법(stochastic context-free grammar). 규칙에 확률을 붙인 문법으로 RNA(ribonucleic acid) 이차 구조의 중첩된 염기쌍을 모형화하고, CYK 와 같은 구간 동적 계획법으로 가장 그럴듯한 파스 트리를 구한다.

[^1]: R. J. Parikh, On context-free languages, *Journal of the ACM* **13** (1966), 570–581.
[^2]: N. Chomsky, Three models for the description of language, *IRE Transactions on Information Theory* **2** (1956), 113–124.

# 연관 문서

## 선수지식

- [유한 오토마타](finite-automata.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #algorithms #logic
