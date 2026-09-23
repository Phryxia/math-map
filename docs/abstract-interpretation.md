# 추상해석

# 개요

추상해석은 프로그램의 의미론을 과대근사해 정적 분석의 건전성을 보장하는 틀이다. 비자명한 의미론적 성질은 [Rice 정리](rice-theorem.md)에 따라 결정 불가능하므로, 분석기는 답을 한쪽으로만 틀리게 만든다. "이 배열 접근은 안전하다" 는 판정은 반드시 맞고, 위험하다는 판정은 틀릴 수 있다.

Cousot 부부가 1977 년에 이 구도를 형식화했다.[^1] 구체 의미론의 영역 $C$ 와 추상 영역 $A$ 를 [Galois 연결](galois-connections.md)

$$
\alpha\colon C\rightleftarrows A\colon\gamma,\qquad \alpha(c)\sqsubseteq_A a\iff c\sqsubseteq_C\gamma(a)
$$

로 잇고, 구체 전이함수 $F$ 를 추상 전이함수 $F^\sharp\sqsupseteq\alpha\circ F\circ\gamma$ 로 올린다. Knaster–Tarski 정리가 양쪽에서 최소 고정점을 주고

$$
\gamma\bigl(\mathrm{lfp}\thinspace F^\sharp\bigr)\thickspace\sqsupseteq\thickspace\mathrm{lfp}\thinspace F
$$

가 따라온다. 이것이 **건전성**이다. 분석기가 계산한 추상값을 구체화하면 실제 도달 가능한 상태를 모두 포함한다.

# 직관

## 과대근사의 비대칭

정확한 분석은 불가능하므로 무엇을 잃을지 먼저 정한다. 변수 $x$ 의 값 집합 $\lbrace 2,5,7\rbrace$ 대신 구간 $[2,7]$ 만 기억하면 집합의 [격자](order-lattices.md)에서 구간의 격자로 내려온 것이다. $\alpha(\lbrace 2,5,7\rbrace)=[2,7]$ 이고 $\gamma([2,7])=\lbrace 2,3,4,5,6,7\rbrace$ 이라 원래보다 커진다. 커지는 방향이 항상 같다. 과대근사만 하고 과소근사는 하지 않는다.

건전성은 이 비대칭에서 나온다. 분석기가 $x\in[2,7]$ 이라 말하면 실제 값은 그 안에 있으므로 $x\ne0$ 이라는 결론은 믿을 수 있다. $x\in[-1,7]$ 이 나오면 $0$ 인지 아닌지 모른다고만 말한다. 거짓 경보는 나오지만 놓친 오류는 없다.

## 추상 영역의 선택

| 추상 영역 | 기억하는 것 | 비용 |
|---|---|---|
| 부호 $\lbrace-,0,+\rbrace$ | 부호만 | 아주 쌈 |
| 구간 $[l,u]$ | 변수별 범위 | 쌈 |
| 팔면체 $\pm x\pm y\le c$ | 변수 쌍의 관계 | 중간 |
| 다면체 $\sum a_ix_i\le b$ | 선형 관계 전부 | 비쌈 |

구간 영역은 변수 사이의 관계를 잊는다. $x=y$ 여도 $x-y=0$ 을 표현할 수 없어 $x-y\in[-\infty,\infty]$ 가 된다. 관계를 기억하려면 팔면체나 다면체로 올라가야 하고, 그만큼 각 연산이 비싸진다. 분석기 설계는 이 표에서 한 줄을 고르는 일이다.

## 고정점 반복의 수렴 실패

루프의 불변량은 전이함수의 최소 고정점이다. Kleene 반복 $\bot,F(\bot),F^2(\bot),\dots$ 이 그것에 수렴하지만, 추상 영역이 무한 높이면 수렴이 끝나지 않거나 지나치게 느리다. 구간 영역이 그런 경우다.

```javascript
const BOT = 'bot';
const mk = (l, u) => (l > u ? BOT : [l, u]);
const join = (a, b) => a === BOT ? b : b === BOT ? a : mk(Math.min(a[0],b[0]), Math.max(a[1],b[1]));
const meet = (a, b) => a === BOT || b === BOT ? BOT : mk(Math.max(a[0],b[0]), Math.min(a[1],b[1]));
const add1 = (a) => a === BOT ? BOT : mk(a[0] + 1, a[1] + 1);
const eq = (a, b) => a === BOT || b === BOT ? a === b : a[0] === b[0] && a[1] === b[1];

// 위드닝: 늘어나는 쪽 끝을 곧바로 무한으로 보낸다
const widen = (a, b) => a === BOT ? b : b === BOT ? a :
  mk(b[0] < a[0] ? -Infinity : a[0], b[1] > a[1] ? Infinity : a[1]);

// 분석 대상: x = 0; while (x < 100) x = x + 1;
// 루프 머리의 불변량은 X = [0,0] ⊔ ((X ⊓ [-∞,99]) + 1) 의 최소 고정점
const F = (X) => join(mk(0, 0), add1(meet(X, mk(-Infinity, 99))));

// 같은 단계함수를 안정할 때까지 돌린다
const iterate = (step, start) => {
  let X = start;
  for (;;) { const Y = step(X); if (eq(X, Y)) return X; X = Y; }
};

const kleene   = iterate(F, BOT);
const widened  = iterate((X) => widen(X, F(X)), BOT);
const narrowed = iterate(F, widened);
```

순진한 반복은 $[0,0],[0,1],[0,2],\dots$ 로 한 칸씩 올라가 $102$ 단계가 걸린다. 상한이 $10^9$ 였다면 사실상 끝나지 않는다. **위드닝**은 상한이 늘어나는 것을 보고 곧바로 $+\infty$ 로 점프해 $3$ 단계에 멈춘다. 그 결과 $[0,+\infty]$ 는 너무 거칠고, 여기서 다시 $F$ 를 반복하는 **내로잉**이 $[0,100]$ 을 회복한다.

위드닝은 임의로 크게 뛰므로 답이 부정확해질 수 있다. 그러나 위로만 뛰므로 건전성은 깨지지 않는다.

$$
a\sqsubseteq a\thinspace\nabla\thinspace b,\qquad b\sqsubseteq a\thinspace\nabla\thinspace b
$$

를 요구하면 위드닝 수열은 항상 실제 고정점 위에 머문다. 여기에 무한 상승 사슬을 만들지 않는다는 조건을 더하면 종료도 보장된다.

```mermaid
graph TD
  C["구체 영역<br/>실제 상태 집합"] -->|"α 추상화"| A["추상 영역<br/>구간, 팔면체, …"]
  A -->|"γ 구체화"| C
  A --> IT["Kleene 반복"]
  IT -->|"수렴 안 함"| WD["위드닝 ∇"]
  WD --> POST["후고정점"]
  POST -->|"내로잉 Δ"| RES["최종 불변량"]
  RES -->|"γ ⊒ lfp F"| SOUND["건전성"]
```

# 정의

## 추상 영역과 Galois 연결

완비 격자 $(C,\sqsubseteq)$ 를 구체 영역, $(A,\sqsubseteq^\sharp)$ 를 추상 영역이라 하고 단조사상 쌍 $\alpha,\gamma$ 가 Galois 연결을 이룬다고 하자. $\alpha\circ\gamma=\mathrm{id}\_A$ 이면 **Galois 삽입**이며, 이때 추상 영역에 같은 것을 두 번 표현하는 잉여가 없다.

Galois 연결의 판정 조건이 설계에 쓰인다. $\gamma$ 를 먼저 정하고 그것이 하한을 보존하는지만 확인하면 $\alpha$ 는 자동으로 존재하고 유일하다.

## 건전한 추상 전이함수

구체 전이함수 $F\colon C\to C$ 에 대해 $F^\sharp\colon A\to A$ 가 **건전**하다는 것은

$$
\alpha\circ F\circ\gamma\thickspace\sqsubseteq^\sharp\thickspace F^\sharp
$$

곧 각 추상값에서 한 걸음 나아간 결과를 $F^\sharp$ 가 과대근사한다는 뜻이다. 등호가 성립하는 $F^\sharp=\alpha\circ F\circ\gamma$ 가 **최적 추상 전이함수**이며, 존재하지만 계산 가능하지 않을 수 있어 실무에서는 더 거친 것을 쓴다.

## 고정점 전달 정리

$F^\sharp$ 가 건전하면

$$
\mathrm{lfp}\thinspace F\thickspace\sqsubseteq\thickspace\gamma\bigl(\mathrm{lfp}\thinspace F^\sharp\bigr)
$$

가 성립한다.

*증명.* $\mathrm{lfp}\thinspace F^\sharp$ 의 구체화가 $F$ 의 후고정점임을 확인하고 Knaster–Tarski 의 최소성을 쓴다. 분석기의 건전성 증명이 이 한 줄로 환원된다.

## 위드닝과 내로잉

연산자 $\nabla\colon A\times A\to A$ 가 **위드닝**이라 함은 다음을 만족하는 것이다.

1. $a\sqsubseteq a\nabla b$ 이고 $b\sqsubseteq a\nabla b$
2. 임의의 수열 $(b_n)$ 에 대해 $a_0=b_0$ , $a_{n+1}=a_n\nabla b_{n+1}$ 로 정의한 수열이 유한 단계에 안정화

조건 2 가 종료를 강제한다. 대칭적으로 $\Delta$ 가 **내로잉**이라 함은 $b\sqsubseteq a$ 일 때 $b\sqsubseteq a\Delta b\sqsubseteq a$ 이고 하강 사슬이 안정화하는 것이다.

# 성질

## 정밀도와 비용의 교환

추상 영역이 정밀할수록 거짓 경보가 줄지만 각 연산이 비싸진다. 다면체 영역은 볼록 껍질 계산이 지수적일 수 있어 큰 프로그램에 쓰기 어렵고, 팔면체는 $O(n^3)$ 의 최단경로 닫힘으로 균형을 잡는다. 실무 분석기는 여러 영역을 곱해서 쓰거나(약한 곱, 축소된 곱) 프로그램 구간마다 다른 영역을 붙인다.

## 완전성의 희소성

건전성은 설계로 얻지만 **완전성**(거짓 경보가 전혀 없음)은 거의 얻지 못한다. 완전한 분석은 결정 불가능한 문제를 푸는 것이 된다. 특정 성질에 대해 특정 영역이 완전한 경우가 있고, 어떤 영역이 어떤 성질에 완전한지를 다루는 완전성 이론이 따로 있다.

## 위드닝 지점과 정밀도

위드닝 지점을 어디에 두느냐가 결과를 크게 바꾼다. 루프 머리마다 위드닝을 걸면 안전하지만 거칠고, 몇 번 반복한 뒤에 걸면(지연 위드닝) 정밀해지지만 느리다. 위 예제에서 $F$ 를 두 번 돌린 다음 위드닝을 시작하면 $[0,+\infty]$ 를 거치지 않는다.

## Rice 정리와의 관계

Rice 정리는 정확한 분석을 금지할 뿐 한쪽으로 치우친 분석을 금지하지 않는다. 추상해석은 그 틈을 사용하는 방법론이다. 형 검사기와 모델 검사의 추상 정련도 같은 전략을 쓴다.

# 활용

- **산업용 분석기.** Astrée 는 이 이론 위에서 항공 제어 소프트웨어의 실행시간 오류 부재를 증명했다. 부동소수점 연산을 포함한 수십만 줄 코드에서 거짓 경보를 $0$ 으로 만들기 위해 대상 프로그램군에 특화된 추상 영역(등차수열 영역, 필터 영역)을 새로 설계했다.
- **컴파일러 최적화.** 상수 전파, 범위 검사 제거, 별칭 분석이 추상해석의 사례다. 최적화가 프로그램의 의미를 바꾸지 않으려면 분석이 건전해야 한다.
- **형 시스템.** 형은 값의 추상이고 형 규칙은 건전한 추상 전이함수다. 형 추론이 고정점 계산인 경우도 많다.
- **기계학습 모형 검증.** 신경망의 입력 구간을 추상 영역으로 전파해 출력 범위를 과대근사하면 견고성 증명이 된다. 구간, 다면체, zonotope 이 그대로 쓰인다.
- **확률 프로그램.** 분포의 상계를 전파하는 확률 추상 영역이 같은 틀에서 정의된다.

[^1]: P. Cousot, R. Cousot, *Abstract interpretation: a unified lattice model for static analysis of programs by construction or approximation of fixpoints*, POPL (1977), 238–252. 위드닝과 내로잉은 같은 저자의 *Comparing the Galois connection and widening/narrowing approaches to abstract interpretation*, PLILP (1992). Astrée 의 설계는 Blanchet 등, *A static analyzer for large safety-critical software*, PLDI (2003).

# 연관 문서

## 선수지식

- [Galois 연결](galois-connections.md)
- [Rice 정리](rice-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#order_theory #computation #logic
