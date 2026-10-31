# Kleisli 범주와 Eilenberg–Moore 범주

# 개요

**Kleisli 범주(Kleisli category)** 와 **Eilenberg–Moore 범주(Eilenberg–Moore category)** 는 [monad](monads.md) $T$ 를 낳는 [수반](adjunctions.md)들의 범주에서 각각 시작대상(initial object)과 종단대상(terminal object)이 되는 분해다. 수 하나를 받아 가능한 답들의 목록을 돌려주는 함수 두 개는, 첫 함수의 결과가 목록이어서 둘째 함수에 그대로 넣을 수 없다. Kleisli 범주는 이런 함수들을 목록을 펼쳐 합성하는 사상으로 모으고, Eilenberg–Moore 범주는 목록을 원소 하나로 합치는 연산을 가진 대상들을 모은다.

# 직관

목록 monad $T$ 에서 두 함수 $f(n)=\lbrack n,n+1\rbrack$ 과 $g(m)=\lbrack m,10m\rbrack$ 은 $X\to T(Y)$ 꼴이다. $f(1)=\lbrack 1,2\rbrack$ 은 목록이고 $g$ 는 수 하나를 받으므로 둘은 그대로 합성되지 않는다. 목록의 각 항에 $g$ 를 적용하면 $\lbrack\lbrack 1,10\rbrack,\lbrack 2,20\rbrack\rbrack$ 이 나오고, 이것을 $\mu$ 로 펼치면 $\lbrack 1,10,2,20\rbrack$ 이다. 대상은 그대로 두고 $X\to T(Y)$ 꼴 함수를 사상으로, 이 펼친 합성을 합성으로 삼은 것이 Kleisli 범주다.

같은 $T$ 에서 자연수의 합 $\lbrack 2,3,5\rbrack\mapsto 10$ 은 목록을 수 하나로 접는 사상 $T(\mathbb N)\to\mathbb N$ 이다. 이 접기는 두 겹 목록을 먼저 펼치든 안쪽부터 접든 같은 값을 주고, $\lbrack x\rbrack$ 를 $x$ 로 보낸다. 목록 $T(X)$ 도 $\mu_X$ 로 목록의 목록을 접는다. 이런 접기를 모두 모은 것이 Eilenberg–Moore 범주이고, Kleisli 범주는 $(T(X),\mu_X)$ 꼴 접기만 모은 것과 같다.

# 정의

## 분해의 범주

monad $T$ 를 고정한다. $T$ 의 **분해(resolution)** 는 $T = GF$ 이고 unit 과 $\mu$ 가 monad 의 것과 일치하는 수반 $F \dashv G : \mathcal D \to \mathcal C$ 다.

분해 사이의 사상 $(\mathcal D, F, G) \to (\mathcal D', F', G')$ 은 함자 $K : \mathcal D \to \mathcal D'$ 로 $KF = F'$ 와 $G'K = G$ 를 만족하는 것이다. 이 범주를 $\mathrm{Adj}(T)$ 라 쓴다.

[수반](adjunctions.md) 문서의 자유군 수반은 집합의 범주 위의 자유군 monad 의 분해다.

## Kleisli 범주

**Kleisli 범주(Kleisli category)** $\mathcal C_T$ 의 대상은 $\mathcal C$ 의 대상과 같다. 사상은 다음이다.

$$
\mathcal C_T(X,Y)=\mathcal C(X,T(Y))
$$

항등사상은 $\eta_X$ 이고, $f : X \to T(Y)$ 와 $g : Y \to T(Z)$ 의 합성은 다음이다.

$$
g\odot f=\mu_Z\circ T(g)\circ f
$$

자유 함자 $F_T : \mathcal C \to \mathcal C_T$ 는 대상에 항등이고 사상 $f$ 를 $\eta\circ f$ 로 보내며, 망각 함자 $G_T$ 는 대상 $X$ 를 $T(X)$ 로, 사상 $f$ 를 $\mu\circ T(f)$ 로 보낸다.

직관 절의 목록에서 $g\odot f$ 는 $1\mapsto\lbrack 1,10,2,20\rbrack$ 이고, 항등사상 $\eta$ 는 $n\mapsto\lbrack n\rbrack$ 이다. $G_T(g)$ 는 목록 $\lbrack 1,2\rbrack$ 을 $\lbrack 1,10,2,20\rbrack$ 으로 보낸다.

## Eilenberg–Moore 범주

**Eilenberg–Moore 범주(Eilenberg–Moore category)** $\mathcal C^T$ 의 대상은 $T$ 대수 $(A, a: T(A)\to A)$ 로 다음 두 법칙을 만족하는 것이다.

$$
a\circ\eta_A=\mathrm{id}\_A,\qquad a\circ\mu_A=a\circ T(a)
$$

사상 $(A,a) \to (B,b)$ 는 $h : A \to B$ 로 $h\circ a = b\circ T(h)$ 를 만족하는 것이다. 망각 함자 $G^T : \mathcal C^T \to \mathcal C$ 는 $(A,a)\mapsto A$ 이다. $(T(X), \mu_X)$ 꼴 대수를 **자유대수(free algebra)** 라 하고, $X$ 를 $(T(X), \mu_X)$ 로 보내는 함자를 자유 함자 $F^T$ 라 한다.

목록 monad 에서 자연수의 합 $(\mathbb N, a)$ 와 2 로 나눈 나머지의 합 $(\mathbb Z/2\mathbb Z, b)$ 는 대수이고, 나머지를 주는 $h:\mathbb N\to\mathbb Z/2\mathbb Z$ 는 사상이다. $\lbrack 2,3,5\rbrack$ 을 더한 뒤 나머지를 취한 $h(10)=0$ 과, 나머지 $\lbrack 0,1,1\rbrack$ 을 더한 $0$ 이 같다.

## 비교 함자

분해 $F \dashv G : \mathcal D \to \mathcal C$ 의 counit 을 $\varepsilon$ 이라 할 때, 다음 함자 $K$ 를 **비교 함자(comparison functor)** 라 한다.

$$
K:\mathcal D\to\mathcal C^T,\qquad D\mapsto\big(G(D),\thinspace G(\varepsilon_D)\big)
$$

자유군 수반에서 $K$ 는 군 $H$ 를 $H$ 의 원소의 집합과, 원소를 글자로 쓴 낱말을 $H$ 의 곱으로 계산하는 사상의 쌍으로 보낸다.

# 성질

## Kleisli 합성의 법칙

monad 의 결합법칙과 단위법칙으로부터 Kleisli 합성 $\odot$ 의 결합법칙과 단위법칙이 유도된다.

## 시작대상과 종단대상

$\mathcal C_T$ 는 $\mathrm{Adj}(T)$ 의 시작대상이고 $\mathcal C^T$ 는 종단대상이다. $F_T\dashv G_T$ 와 $F^T\dashv G^T$ 는 수반이고, 비교 함자 $K$ 는 $\mathrm{Adj}(T)$ 의 사상이다.

종단성은 위의 $K$ 가 존재하고 유일함에서 나온다. 조건 $G^TK = G$ 가 $K$ 의 바탕 대상을 $G(D)$ 로, $KF = F^T$ 가 자유대수 위에서의 값을 강제하고 나머지는 자연성으로 결정된다.

시작성도 같은 방식이다. $L : \mathcal C_T \to \mathcal D$ 를 $X \mapsto F(X)$ 로 두면 조건이 이 정의를 강제한다. Kleisli 사상 $f : X \to T(Y)$ 는 $F(X) \to F(Y)$ 로 $\varepsilon_{F(Y)}\circ F(f)$ 를 통해 옮겨진다.

## Kleisli 범주의 매장

$\mathcal C^T$ 로 가는 비교 함자를 $\mathcal C_T$ 에 적용하면 $X \mapsto (T(X),\mu_X)$ 이고 충만하고 충실하다. $\mathcal C_T$ 는 자유대수들이 이루는 $\mathcal C^T$ 의 충만한 부분범주와 동치다.

$$
\mathcal C^T\big((T(X),\mu_X),(T(Y),\mu_Y)\big)\cong\mathcal C(X,T(Y))=\mathcal C_T(X,Y)
$$

왼쪽에서 오른쪽은 $\eta_X$ 와의 합성이고 오른쪽에서 왼쪽은 확장 연산 $(-)^\ast$ 이며, 두 구성이 서로 역이다.

## 극한과 쌍대극한

$\mathcal C^T$ 는 $\mathcal C$ 가 가진 모든 극한을 가지며 망각 함자가 그것을 보존하고 반사한다. 대수의 곱은 바탕 대상의 곱에 성분별 구조를 준 것이다. 쌍대극한은 일반적으로 존재가 보장되지 않고, 군의 자유곱이 집합의 합집합과 다른 것이 그 예다.

$\mathcal C_T$ 는 $\mathcal C$ 의 쌍대극한을 물려받지만 극한은 대개 갖지 못한다.

## Monadicity

비교 함자 $K$ 가 동치일 때 $G$ 를 **monadic** 하다고 한다. 이 경우 $\mathcal D$ 는 $\mathcal C$ 위의 대수 범주로 완전히 재구성된다.

판정 기준은 Beck monadicity 정리(Beck's monadicity theorem)다. $G$ 가 왼쪽 수반을 가지고, 동형을 반사하며, $G$ 로 보낸 상이 분할 여핵(split coequalizer)을 가지는 평행쌍(parallel pair)마다 $\mathcal D$ 에 여핵이 존재하고 $G$ 가 그것을 보존하면 $G$ 는 monadic 이다.

| 망각 함자 | monadic 인가 |
|---|---|
| $\mathbf{Grp}\to\mathbf{Set}$ | 예 |
| $\mathbf{Ring}\to\mathbf{Set}$ | 예 |
| $R\text{-}\mathbf{Mod}\to\mathbf{Set}$ | 예 |
| $\mathbf{Top}\to\mathbf{Set}$ | 아니오 |
| $\mathbf{Field}\to\mathbf{Set}$ | 아니오 |

위상공간에서는 같은 바탕집합에 서로 다른 위상이 있고 연속 전단사가 동형이 아닐 수 있어 동형을 반사하지 못한다. 체의 망각 함자는 왼쪽 수반이 없다.

콤팩트 Hausdorff 공간의 범주가 초필터 monad(ultrafilter monad)에 대해 monadic 이라는 것이 이 정리의 대표적 응용이다.

# 활용

## 프로그래밍의 do 표기

Kleisli 범주는 효과를 가진 계산의 범주다. `return` 이 $\eta$ 이고 $\gt\gt =$ 가 확장 연산이며, do 표기는 Kleisli 합성의 연쇄를 명령형처럼 보이게 쓴 문법이다.

monad 법칙이 이 표기의 정당성이다. 결합법칙이 do 블록을 어디서 끊어 함수로 빼내도 의미가 같음을, 단위법칙이 `return` 을 넣고 빼도 같음을 보장한다.

## monad 로 본 대수 구조

Eilenberg–Moore 범주는 monad 가 서술하는 대수 구조가 무엇인지를 답한다. 거꾸로 어떤 구체적 범주가 어떤 monad 의 대수 범주인지를 묻는 것이 monadicity 문제이고, 답이 예이면 자유대상의 존재와 극한의 계산과 여핵의 구성이 일반 정리에서 유도된다.

분포 monad 의 대수는 볼록집합이고 초필터 monad 의 대수는 콤팩트 Hausdorff 공간이다.

## 효과의 합성과 monad 변환자

Kleisli 범주를 층층이 쌓아 여러 효과를 조합하는 것이 monad 변환자(monad transformer)다. 두 monad 의 합성이 일반적으로 monad 가 아니므로 필요한 장치이고, 합성이 가능한 조건을 주는 것이 분배 법칙(distributive law)이다. 분배 법칙은 한쪽 monad 를 다른 쪽의 Eilenberg–Moore 범주로 들어 올리는 자료와 같다.

## 의미론

부분성, 비결정성, 확률, 상태, 입출력 같은 계산 효과를 monad 로 모형화하면 프로그램의 의미가 Kleisli 사상이 된다. 서로 다른 효과를 같은 틀에서 비교하고 프로그램 변환의 정당성을 범주적 등식으로 환원할 수 있다. Moggi 의 계산의 monad 의미론이며 함수형 언어 설계에 반영되었다.

# 연관 문서

## 선수지식

- [Monad](monads.md)

## 더 알아보기

아직 연결한 문서가 없다.

#category_theory #computation #algebra #construction
