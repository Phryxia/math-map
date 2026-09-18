# 쌍대 공간

# 개요

체 $F$ 위의 벡터 공간 $V$ 에서 $F$ 로 가는 선형사상 전체는 다시 $F$ 위의 벡터 공간이다. 이 공간이 $V$ 의 쌍대 공간이다.

유한차원에서 쌍대 공간의 차원은 $V$ 의 차원과 같다. 그러나 두 공간 사이의 동형은 기저를 하나 고른 뒤에 정해지고, 기저를 바꾸면 달라진다. 기저와 무관하게 정해지는 동형은 $V$ 와 쌍대의 쌍대 사이에 있다.

# 직관

쌍대 공간의 원소는 벡터에 수를 대응시키는 눈금이다. 기저 $e_1,\dots,e_n$ 을 고정하면 벡터의 $i$ 번째 좌표를 읽는 함수가 쌍대 공간의 기저를 이룬다.

선형사상을 쌍대로 옮기면 화살표의 방향이 뒤집힌다. $f\colon V\to W$ 가 있을 때 $W$ 의 눈금은 $f$ 를 앞에 붙여 $V$ 의 눈금이 되기 때문이다.

# 정의

## 쌍대 공간

$V$ 의 **쌍대 공간** $V^\ast$ 는 $V$ 에서 $F$ 로 가는 [선형사상](linear-maps.md) 전체의 공간이다.

$$V^\ast = \mathrm{Hom}\_F(V, F)$$

덧셈과 스칼라곱은 점별로 정의한다. $(\varphi+\psi)(v)=\varphi(v)+\psi(v)$, $(c\varphi)(v)=c\thinspace\varphi(v)$. $V^\ast$ 의 원소를 **선형 범함수**라 한다.

## 쌍대 기저

$V$ 의 기저 $e_1,\dots,e_n$ 에 대해 $e^i\in V^\ast$ 를 다음으로 정한다.

$$e^i(e_j)=\delta^i_j$$

$\delta^i_j$ 는 $i=j$ 일 때 1, 그 밖에서 0 이다. $e^1,\dots,e^n$ 을 $e_1,\dots,e_n$ 의 **쌍대 기저**라 한다.

## 전치사상

선형사상 $f\colon V\to W$ 의 **전치사상** $f^\ast\colon W^\ast\to V^\ast$ 는 합성으로 정의한다.

$$f^\ast(\varphi)=\varphi\circ f$$

## 이중쌍대와 표준 사상

$V^{\ast\ast}=(V^\ast)^\ast$ 를 **이중쌍대**라 한다. 표준 사상 $\mathrm{ev}\colon V\to V^{\ast\ast}$ 는 벡터를 그 벡터에서의 값매김으로 보낸다.

$$\mathrm{ev}(v)(\varphi)=\varphi(v)$$

이 정의에는 기저가 들어가지 않는다.

## 소멸자

부분집합 $S\subseteq V$ 의 **소멸자** $S^\circ$ 는 $S$ 의 모든 원소를 0 으로 보내는 범함수의 집합이다.

$$S^\circ=\lbrace \varphi\in V^\ast : \varphi(s)=0 \thinspace (\forall s\in S)\rbrace$$

$S^\circ$ 는 $V^\ast$ 의 부분공간이고, $S$ 가 생성하는 부분공간의 소멸자와 같다.

# 성질

## 차원 등식

$\dim V=n$ 이 유한이면 $\dim V^\ast=n$ 이다.

쌍대 기저가 $V^\ast$ 의 기저임을 보이면 된다. $\varphi\in V^\ast$ 에 대해 $\sum_i \varphi(e_i)e^i$ 와 $\varphi$ 는 모든 $e_j$ 에서 같은 값을 주므로 같은 범함수다. 따라서 $e^i$ 가 생성한다. 또 $\sum_i c_i e^i=0$ 을 $e_j$ 에 적용하면 $c_j=0$ 이므로 독립이다.

무한차원에서는 등식이 깨진다. $F$ 계수 유한지지 수열의 공간 $V$ 의 쌍대는 모든 수열의 공간이고, 그 차원은 $\dim V$ 보다 크다.

## 자연 동형의 부재

$V\cong V^\ast$ 를 주는 동형은 기저의 선택에 의존한다. 기저 $e_i$ 를 $e^i$ 로 보내는 사상은 동형이지만, 기저를 $e_1'=2e_1$ 로 바꾸면 $e^{1\prime}=\tfrac12 e^1$ 이어서 같은 벡터에 다른 범함수가 대응한다.

반면 유한차원에서 $\mathrm{ev}\colon V\to V^{\ast\ast}$ 는 동형이고 기저와 무관하다. 단사성은 $v\neq 0$ 을 기저의 원소로 확장해 $\varphi(v)=1$ 인 $\varphi$ 를 잡으면 나오고, 차원 등식을 두 번 쓰면 $\dim V^{\ast\ast}=\dim V$ 이므로 전사다. 무한차원에서는 $\mathrm{ev}$ 가 단사이지만 전사가 아니다.

## 전치의 반변성

$(g\circ f)^\ast=f^\ast\circ g^\ast$ 이고 $(\mathrm{id}\_V)^\ast=\mathrm{id}\_{V^\ast}$ 다. 정의에 따라 $(g\circ f)^\ast(\varphi)=\varphi\circ g\circ f=f^\ast(g^\ast(\varphi))$ 이다. 그러므로 $V\mapsto V^\ast$ 는 반변 [functor](functors.md) 다.

기저를 고정해 $f$ 의 행렬을 $A$ 라 하면, 쌍대 기저에 대한 $f^\ast$ 의 행렬은 전치행렬 $A^{T}$ 다.

## 소멸자의 차원

$W\subseteq V$ 가 부분공간이고 $V$ 가 유한차원이면 다음이 성립한다.

$$\dim W+\dim W^\circ=\dim V$$

제한 사상 $V^\ast\to W^\ast$, $\varphi\mapsto \varphi\vert_W$ 를 본다. $W$ 의 기저를 $V$ 의 기저로 확장하면 이 사상은 전사이고, 핵은 정의상 $W^\circ$ 다. 차원 등식과 계수-퇴화차수 정리로 위 식이 나온다.

따름정리로 $W^{\circ\circ}=W$ 다. $W\subseteq W^{\circ\circ}$ 는 정의에서 나오고 차원이 같다.

## 계수의 일치

$f\colon V\to W$ 가 유한차원 사이의 선형사상이면 $\mathrm{rank}(f^\ast)=\mathrm{rank}(f)$ 다.

$\mathrm{im}(f^\ast)=(\ker f)^\circ$ 를 보인다. $\varphi\circ f$ 는 $\ker f$ 에서 0 이므로 포함 한쪽이 나온다. 거꾸로 $\psi\in(\ker f)^\circ$ 는 $V/\ker f\cong \mathrm{im}(f)$ 를 거쳐 분해되고, 그 범함수를 $W$ 로 확장하면 $\psi=f^\ast(\varphi)$ 다. 소멸자의 차원 공식을 쓰면 $\dim \mathrm{im}(f^\ast)=\dim V-\dim\ker f=\mathrm{rank}(f)$ 다.

행렬의 언어로는 $A$ 와 $A^{T}$ 의 계수가 같다는 진술이다.

## 쌍선형 형식과의 대응

$V$ 위의 쌍선형 형식 $B\colon V\times V\to F$ 는 사상 $V\to V^\ast$, $v\mapsto B(v,\cdot\thinspace)$ 를 준다. 이 사상이 동형인 것이 $B$ 가 비퇴화라는 조건이다. [내적 공간](inner-product-spaces.md)에서 내적이 그런 형식이고, 그래서 유한차원 내적 공간은 자기 쌍대와 동일시된다.

# 활용

- 다양체의 각 점에서 접공간의 쌍대인 여접공간을 잡으면 그 원소가 1형식이다. [미분형식](differential-forms.md)의 정의가 이 대응 위에 있다.
- 유한차원에서 $V^\ast\otimes W$ 와 $\mathrm{Hom}(V,W)$ 가 동형이다. [텐서곱](tensor-products.md)으로 선형사상을 텐서로 다루는 자리에서 쓴다.
- 노름공간에서는 연속 범함수만 모아 쌍대를 정의한다. [Banach 공간](banach-spaces.md)의 Hahn–Banach 정리가 이 쌍대가 점을 분리함을 보장한다.
- [Hilbert 공간](hilbert-spaces.md)의 Riesz 표현정리는 연속 쌍대를 자기 자신과 동일시한다. 유한차원 내적 공간의 대응이 완비성 아래에서 무한차원으로 확장된 진술이다.
- 반변 functor 의 표준 예로 범주론에서 쓴다. $V\mapsto V^{\ast\ast}$ 는 공변이고, 유한차원 벡터 공간의 범주에서 항등 functor 와 [자연 동형](natural-transformations.md)이다.

# 연관 문서

## 선수지식

- [선형사상](linear-maps.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algebra #functional_analysis #category_theory
