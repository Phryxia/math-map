# Monad

# 개요

Monad 는 한 범주 $\mathcal C$ 위에서 무언가를 형식적으로 덧붙였다가 두 겹으로 쌓인 것을 한 겹으로 평탄화하는 구조다. 데이터는 자기 functor $T : \mathcal C \to \mathcal C$ 와 두 [자연변환](natural-transformations.md) $\eta : \mathrm{id} \Rightarrow T$, $\mu : T^2 \Rightarrow T$ 이고 조건은 결합법칙과 단위법칙이다.

[Adjunction](adjunctions.md)과의 관계가 이 구조의 위치를 정한다. 모든 수반 $F \dashv G$ 는 $T = GF$ 로 monad 를 남기고, 모든 monad 는 그것을 낳는 수반으로 분해된다. monad 는 수반이 한쪽 범주에 남긴 그림자이고, 그 그림자에서 원래 수반을 복원하는 방법이 Kleisli 와 Eilenberg–Moore 둘이다.

# 직관

## 붙이고 평탄화하기

집합 $X$ 에 그 원소들의 유한 리스트 전체를 대응시키는 $T(X) = \mathrm{List}(X)$ 에서 $\eta_X$ 는 원소를 길이 1 리스트로 만들고 $\mu_X$ 는 리스트의 리스트를 이어 붙인다.

$$
\eta_X(x)=[x],\qquad \mu_X\big([[1,2],[\thinspace],[3]]\big)=[1,2,3]
$$

$\mu$ 는 두 조건을 지킨다. 세 겹을 두 겹으로 줄이는 순서가 달라도 결과가 같아야 하고(결합법칙), $\eta$ 로 한 겹을 끼워 넣었다가 평탄화하면 아무 일도 없어야 한다(단위법칙). 모노이드의 곱과 항등원이 만족하는 조건과 같은 모양이고, monad 는 자기 functor 들의 범주 안의 모노이드다.

## 문맥을 품은 계산

$T(X)$ 를 $X$ 의 값을 어떤 문맥 안에 담은 것으로 읽으면 $\eta$ 는 순수한 값을 문맥에 넣고 $\mu$ 는 이중으로 쌓인 문맥을 합친다.

| $T$ | 문맥 | $\mu$ 가 하는 일 |
|---|---|---|
| `List` | 비결정적 결과 여러 개 | 가능성의 가능성을 펼쳐 모은다 |
| `Maybe` | 실패할 수 있음 | 실패의 실패는 실패다 |
| $X \mapsto (X \times S)^S$ | 상태를 읽고 쓰기 | 상태 변화를 순서대로 잇는다 |
| $X \mapsto$ 확률분포 | 무작위성 | 분포의 혼합을 하나의 분포로 |
| $X \mapsto$ 자유군 | 형식적 낱말 | 낱말의 낱말을 펼쳐 쓴다 |

$f : X \to T(Y)$ 꼴의 사상을 이으려면 $f$ 를 적용한 뒤 $T(g)$ 를 적용하고 $\mu$ 로 평탄화한다. 이 합성의 결합성이 monad 법칙이고 프로그래밍의 `bind` 가 작동하는 근거다.

# 정의

## 세 쌍 (T, η, μ)

범주 $\mathcal C$ 위의 monad 는 functor $T : \mathcal C \to \mathcal C$ 와 자연변환 $\eta : \mathrm{id}_{\mathcal C} \Rightarrow T$, $\mu : T \circ T \Rightarrow T$ 로 다음 두 등식을 모든 대상에서 만족하는 것이다.

$$
\mu\circ T\mu=\mu\circ\mu T,\qquad \mu\circ T\eta=\operatorname{id}_T=\mu\circ\eta T
$$

$T\mu$ 는 성분이 $T(\mu_X)$ 인 자연변환이고 $\mu T$ 는 성분이 $\mu_{T(X)}$ 인 자연변환이다. 같은 $T^3(X) \to T(X)$ 를 만드는 두 방법이 일치해야 한다.

```mermaid
graph LR
  T3["T³X"] -->|"Tμ"| A["T²X"]
  T3 -->|"μT"| B["T²X"]
  A -->|"μ"| X["TX"]
  B -->|"μ"| X
```

## Kleisli 형태의 동치 정의

$\mu$ 대신 확장 연산 $(-)^*$ 를 쓰는 정의가 있다. 대상마다 $\eta_X : X \to T(X)$ 를 주고 각 사상 $f : X \to T(Y)$ 에 $f^\ast : T(X) \to T(Y)$ 를 대응시키되 다음을 요구한다.

$$
f^*\circ\eta_X=f,\qquad \eta_X^*=\operatorname{id}_{T(X)},\qquad (g^*\circ f)^*=g^*\circ f^*
$$

$T(f) = (\eta \circ f)^\ast$ 와 $\mu = (\mathrm{id}\_{T(X)})^\ast$ 를 정의하면 앞의 정의가 복원되고, 반대로 $f^* = \mu \circ T(f)$ 로 가면 이쪽이 복원된다. 프로그래밍 언어의 `return` 과 `bind` 가 $\eta$ 와 $(-)^*$ 다.

## T-대수

Monad $T$ 에 대한 대수는 대상 $A$ 와 사상 $a : T(A) \to A$ 로 다음을 만족한다.

$$
a\circ\eta_A=\operatorname{id}_A,\qquad a\circ\mu_A=a\circ T(a)
$$

형식적으로 쌓아 둔 것을 실제로 계산해 내는 방법이 대수이고, 두 조건은 그 계산이 $\eta$ 와 $\mu$ 에 모순되지 않는다는 뜻이다. $T$ 가 자유 monoid monad 인 `List` 이면 $T$ 대수는 monoid 다. 리스트를 하나의 값으로 접는 방법이 결합적 곱과 항등원이기 때문이다. $T$ 대수와 그 사이의 사상들이 이루는 범주가 Eilenberg–Moore 범주 $\mathcal C^T$ 다.

# 성질

## 수반에서 나오는 monad

$F \dashv G$ 에 unit $\eta$ 와 counit $\varepsilon$ 이 있으면 $T = GF$ 와 $\mu = G\varepsilon F$ 가 monad 법칙을 만족한다. 삼각항등식이 단위법칙이 되고 $\varepsilon$ 의 자연성이 결합법칙이 된다. [자유군](groups.md) 수반의 monad 는 집합에 형식적 낱말을 붙이는 연산, [가군](modules.md)의 자유 수반의 monad 는 형식적 선형결합을 취하는 연산이다.

## monad 의 수반 분해

역방향은 유일하지 않고 분해의 양 끝이 존재한다.

- **Kleisli 범주** $\mathcal C_T$ 는 대상이 $\mathcal C$ 와 같고 $X$ 에서 $Y$ 로 가는 사상이 $\mathcal C$ 의 사상 $X \to T(Y)$ 다. 합성은 $g^* \circ f$ 다. 자유 functor $\mathcal C \to \mathcal C_T$ 와 망각 functor 가 이루는 수반이 $T$ 를 준다.
- **Eilenberg–Moore 범주** $\mathcal C^T$ 는 $T$ 대수 범주다. 망각 functor $\mathcal C^T \to \mathcal C$ 는 자유대수 functor 의 right adjoint 이고 이 수반도 $T$ 를 준다.

$T$ 를 주는 모든 수반의 범주에서 Kleisli 는 시작대상, Eilenberg–Moore 는 종단대상이다. Kleisli 범주는 $\mathcal C^T$ 에서 자유대수만 모은 충만한 부분범주와 동치다.

## 대수 이론으로서의 monad

집합의 범주 위의 monad 가운데 유한 항수의 연산과 등식으로 주어지는 것들은 대수 구조와 일대일로 대응한다. monoid, 군, 환, 가군, 볼록결합이 모두 어떤 monad 의 대수 범주다. 체는 역원을 부분적으로만 취할 수 있어 등식만으로 서술되지 않으므로 이렇게 나오지 않는다.

## 쌍대 개념

화살표를 뒤집으면 comonad $(W, \varepsilon : W \Rightarrow \mathrm{id}, \delta : W \Rightarrow W^2)$ 가 된다. monad 가 값을 문맥에 넣는 쪽이라면 comonad 는 문맥에서 값을 꺼내고 문맥을 복제하는 쪽이며, 스트림과 이웃을 보는 계산이 그 예다.

# 활용

- **계산 효과의 구조화.** 순수 함수만 있는 언어에서 예외, 상태, 입출력, 비결정성을 다루는 표준 방법이다. 효과가 다른 두 계산을 잇는 일이 Kleisli 합성이 되고 결합법칙이 프로그램 변형의 안전성을 보장한다. `do` 표기법은 Kleisli 합성을 순차 실행처럼 쓴 문법이다.
- **확률과 측도.** 집합에 그 위의 [확률분포](random-variables.md) 전체를 대응시키면 monad 가 된다. $\eta$ 는 한 점에 질량을 몰아 주는 분포, $\mu$ 는 분포에서 분포를 뽑아 섞는 연산이다. [Markov 연쇄](markov-chains.md)의 한 걸음이 $X \to T(X)$ 꼴 Kleisli 사상이고 여러 걸음을 잇는 일이 Chapman–Kolmogorov 관계식이다.
- **자유 구성.** 자유군, 자유가군, 다항식환처럼 생성원만 주고 관계식은 최소한만 넣는 구성이 전부 어떤 monad 의 자유대수다. monad 하나를 확인하면 대수 범주, 몫, 표현이 함께 따라온다.

# 연관 문서

## 선수지식

- [Adjunction](adjunctions.md)

## 더 알아보기

- [Kleisli 범주와 Eilenberg–Moore 범주](kleisli-eilenberg-moore.md)

#category_theory #construction
