# 매듭 불변량과 Jones 다항식

# 개요

매듭은 원 `S^1` 을 `\mathbb R^3` 안에 매장한 것이다. 두 매듭은 하나를 끊지 않고 연속적으로 움직여 다른 하나로 만들 수 있으면 같다고 본다. 문제는 단순하게 물을 수 있다.

> 주어진 두 매듭이 같은가? 특히 이 매듭은 정말 풀 수 없는가?

같다는 것은 변형을 하나 제시하면 증명되지만, 다르다는 것은 그런 식으로 증명되지 않는다. 모든 변형을 다 시도해 볼 수는 없기 때문이다. 그래서 **불변량**을 만든다. 변형으로 바뀌지 않는 양을 매듭에서 뽑아내면, 그 값이 다를 때 매듭이 다르다고 말할 수 있다.

가장 정직한 불변량은 여공간 `S^3\setminus K` 의 [기본군](fundamental-group.md), 곧 **매듭군**이다. 완전에 가까운 불변량이지만(Gordon–Luecke: 매듭군과 주변 구조가 매듭을 결정한다) 군의 표시로 주어지므로 두 표시가 같은 군인지 판정하는 것 자체가 어렵다. 계산 가능한 불변량이 따로 필요하다.

1928 년 Alexander 가 다항식 불변량을 만들었고, 그것이 반세기 동안 유일한 다항식 불변량이었다. 1984 년 Jones 가 작용소대수 연구 도중 전혀 다른 불변량을 발견했다. 그 뒤 Kauffman 이 이 불변량을 초등적으로 다시 구성했는데, 재료가 놀랍도록 적었다. 도식의 교차점마다 두 가지로 끊어 보고 결과를 더하는 것이 전부다.

이 문서는 Kauffman 의 구성을 따라가며 Jones 다항식을 정의하고, 그것이 Alexander 다항식이 놓치던 **카이랄성** — 매듭과 그 거울상의 구별 — 을 잡아냄을 계산으로 확인한다.

# 직관

## 도식과 Reidemeister 이동

매듭을 평면에 그림자처럼 투영하고 교차점마다 어느 가닥이 위인지 표시한 것이 **매듭 도식**이다. 3 차원의 문제가 평면 그림의 문제로 바뀌는데, 대신 한 매듭이 여러 도식을 갖는다.

Reidemeister 의 정리가 이 대응을 통제한다. 두 도식이 같은 매듭을 나타낼 필요충분조건은 평면 변형과 다음 세 이동으로 서로 옮겨지는 것이다.

```mermaid
graph LR
  R1["R1 : 꼬임 하나를<br/>넣거나 뺀다"]
  R2["R2 : 두 가닥을 겹쳤다<br/>풀었다 한다"]
  R3["R3 : 가닥 하나를 교차점<br/>너머로 민다"]
  R1 --- R2 --- R3
```

그러므로 불변량을 만드는 일은 "도식의 함수를 정의하고, 세 이동에서 값이 변하지 않음을 확인하는" 유한한 작업으로 환원된다. 이것이 매듭 이론이 조합적으로 다루어지는 이유다.

## 교차점을 끊어 본다

Kauffman 의 착상은 이렇다. 교차점 하나를 골라 위아래 정보를 지우고, 두 가지 방식으로 이어 붙인다.

$$
\text{교차}\ \longmapsto\ A\cdot(\text{A-이음})\;+\;A^{-1}\cdot(\text{B-이음})
$$

두 이음 중 어느 쪽이 A 인지는 위 가닥을 반시계 방향으로 돌려 아래 가닥에 붙이는 쪽으로 약속한다. 교차점이 `n` 개면 이 규칙을 전부 적용해 `2^n` 개의 **상태**가 나오고, 각 상태는 교차점이 하나도 없는 그림, 곧 평면 위의 원 몇 개다. 원 하나에 `\delta=-A^2-A^{-2}` 를 주고 전부 더한 것이 **Kauffman 괄호**다.

$$
\langle K\rangle=\sum_{s}A^{\,a(s)-b(s)}\,\delta^{\,|s|-1}
$$

`a(s),b(s)` 는 상태 `s` 에서 A-이음과 B-이음의 개수, `|s|` 는 원의 개수다.

`\delta` 의 정체가 이 구성의 핵심이다. `-A^2-A^{-2}` 를 쓰면 R2 이동에서 두 항이 정확히 상쇄되고, 그러면 R3 도 따라온다. 다른 값으로는 상쇄가 일어나지 않는다. 즉 원 하나의 무게는 선택지가 아니라 R2 불변성이 강제하는 값이다.

## 남는 하나의 어긋남

R1 에서는 상쇄가 일어나지 않는다. 꼬임을 하나 넣으면 괄호에 `-A^{\pm3}` 이 곱해진다. 이 어긋남은 도식의 **비틀림수**(writhe)

$$
w(D)=\sum_{\text{교차점}}\varepsilon,\qquad \varepsilon=\pm1
$$

로 정확히 추적된다. `w` 도 R1 에서만 `\pm1` 변하므로, 두 어긋남을 곱해서 없앨 수 있다.

$$
f(K)=(-A^3)^{-w(D)}\langle D\rangle
$$

이 `f` 가 세 이동 모두에서 불변이고, `A=t^{-1/4}` 를 대입한 것이 **Jones 다항식** `V(K)(t)` 다. 부호와 지수의 뒤엉킴은 역사적 규약일 뿐이고, 내용은 "R2 가 `\delta` 를 결정하고 R1 이 비틀림 보정을 강제한다" 한 줄이다.

## 왜 거울상을 구별하는가

도식의 모든 교차점을 뒤집으면(거울상 `K^*`) A-이음과 B-이음이 맞바뀌므로 괄호에서 `A\mapsto A^{-1}` 이 일어나고, 비틀림수는 부호가 바뀐다. 결과적으로

$$
V(K^*)(t)=V(K)(t^{-1})
$$

이다. 그러므로 `V(K)` 가 `t\mapsto t^{-1}` 대칭이 아니면 `K` 는 거울상과 다른 매듭이다. Alexander 다항식은 이 대칭을 항상 만족하도록 만들어져 있어 카이랄성을 원리적으로 볼 수 없었다. Jones 다항식이 즉시 새로운 정보를 준 자리가 여기다.

# 정의

## 매듭과 링크

**매듭**은 매장 `S^1\hookrightarrow S^3` 의 상이고, 성분이 여럿이면 **링크**라 한다. 두 매듭 `K_0,K_1` 이 **동위**(isotopic)라는 것은 주변 공간 전체의 동위사상 `H:S^3\times[0,1]\to S^3` 이 있어 `H_0=\mathrm{id}`, `H_1(K_0)=K_1` 인 것이다. 매끄럽거나 조각선형인 범주에서 다루는데, 그러지 않으면 매듭을 한 점으로 조여 버리는 야생 매듭이 생겨 이론이 무너진다.

## 매듭군

여공간의 기본군 `\pi_1(S^3\setminus K)` 를 매듭군이라 한다. Wirtinger 표시는 도식에서 직접 읽는다. 도식의 각 호마다 생성원 `x_i` 를 두고, 교차점마다 관계 하나를 적는다.

$$
x_k=x_j x_i x_j^{-1}
$$

`x_j` 가 위 가닥, `x_i,x_k` 가 아래 가닥의 들어오고 나가는 호다. 풀린 매듭은 `\mathbb Z`, 삼엽매듭은 `\langle x,y\mid xyx=yxy\rangle` 이고 이것은 세 가닥 땋임군 `B_3` 와 같은 군이다. 후자가 비가환이므로 삼엽매듭은 풀리지 않는다. 이것이 가장 이른 엄밀한 증명이다.

## Kauffman 괄호와 Jones 다항식

도식 `D` 에 대해 괄호 `\langle D\rangle\in\mathbb Z[A,A^{-1}]` 를 다음 세 규칙으로 정의한다.

$$
\langle\bigcirc\rangle=1,\qquad
\langle D\sqcup\bigcirc\rangle=(-A^2-A^{-2})\langle D\rangle,\qquad
\langle\times\rangle=A\langle\asymp\rangle+A^{-1}\langle\smile\frown\rangle
$$

세 번째 규칙을 모든 교차점에 적용해 펼치면 앞 절의 상태합이 된다. 방향을 준 도식의 비틀림수 `w(D)` 를 써서

$$
V(K)(t)=\left[(-A^3)^{-w(D)}\langle D\rangle\right]_{A=t^{-1/4}}
$$

로 둔다. 매듭이면 `V\in\mathbb Z[t,t^{-1}]` 이고, 성분이 짝수인 링크에서는 `t^{1/2}` 이 남는다.

## Skein 관계

Jones 다항식은 다음 재귀로도 특징지어진다. 한 교차점만 다른 세 도식 `L_+,L_-,L_0` 에 대해

$$
t^{-1}V(L_+)-t\,V(L_-)=\left(t^{1/2}-t^{-1/2}\right)V(L_0)
$$

이고 `V(\text{풀린 매듭})=1` 이다. 이 관계와 초기값만으로 `V` 가 유일하게 결정된다. 교차점을 하나씩 뒤집어 가면 어떤 도식이든 유한 단계에 풀린 링크로 내려가기 때문이다. HOMFLY 다항식은 이 관계의 두 변수 판본이고, Alexander 다항식과 Jones 다항식을 동시에 특수화로 갖는다.

# 성질

## 무엇을 잡고 무엇을 놓치는가

- **카이랄성을 본다.** 삼엽매듭에서 `V(t)\ne V(t^{-1})` 이므로 삼엽매듭은 거울상과 다르다.
- **풀린 매듭을 판정하는지는 미해결이다.** `V(K)=1` 이면 `K` 가 풀린 매듭인가 — 이것이 유명한 열린 문제다. 링크에서는 반례가 알려져 있다(Eliahou–Kauffman–Thistlethwaite).
- **완전하지 않다.** 서로 다른 매듭이 같은 Jones 다항식을 갖는 예가 많다. `4_1` 과 여러 매듭이 겹치고, Conway 매듭과 Kinoshita–Terasaka 매듭은 Alexander 다항식이 같은 고전적 예다.
- **교차수에 하한을 준다.** 괄호의 지수 폭이 교대 도식의 교차수와 맞물려, Tait 추측 세 개 중 둘이 Jones 다항식으로 풀렸다. 100 년 가까이 열려 있던 문제였다.

## 왜 작용소대수에서 나왔나

Jones 는 `\mathrm{II}_1` 인자의 부분인자 지표를 연구하다 Temperley–Lieb 대수의 자취 함수에서 이 불변량을 얻었다. 땋임군 `B_n` 의 표현이 Temperley–Lieb 대수를 거쳐 나오고, 땋임의 닫힘이 링크를 주므로(Alexander 정리) 자취가 링크 불변량을 준다. 지표가 `4` 아래에서 `4\cos^2(\pi/n)` 값만 가진다는 정리와 `\delta=-A^2-A^{-2}` 의 제약이 같은 사실의 두 얼굴이다.

## 3 차원으로 들어 올리기

Witten 은 1989 년에 `V` 가 3 차원 Chern–Simons 이론의 Wilson 고리 기댓값이라고 해석했다. 이 관점에서 Jones 다항식은 평면 도식의 조합이 아니라 3 차원 다양체의 불변량으로, `t` 는 준위 `k` 의 `1` 의 거듭제곱근이 된다. Reshetikhin–Turaev 가 이 그림을 수학적으로 구성했고, 거기서 필요한 대수적 입력이 [모듈러 텐서범주](modular-tensor-categories.md)다. Jones 다항식은 그 구성을 `\mathfrak{sl}_2` 준위 `1`, 곧 가장 작은 자료에 적용한 결과에 해당한다. 매듭 하나에 대한 초등적 계산이 3 차원 위상양자장론의 가장 단순한 사례였던 셈이다.

## 계산 복잡도

Jones 다항식을 임의의 `t` 에서 정확히 계산하는 것은 `\#P`-어려움이다. 상태합이 `2^n` 항이라는 것이 본질적 어려움을 반영한다. 예외는 `1` 의 거듭제곱근 몇 곳이고, 특히 준위 `5` 지점의 근사 계산이 양자컴퓨터에 대해 `\mathsf{BQP}`-완전이다. 매듭 불변량 근사가 양자계산의 표준 완전 문제 가운데 하나라는 사실이 여기서 나온다.

# 활용

## 삼엽매듭의 Jones 다항식을 상태합으로 계산한다

도식을 PD 표기로 준다. 교차마다 네 호의 라벨을 적고, 두 이음이 각각 어느 쌍을 잇는지 정해 `2^n` 상태를 모두 돌며 원의 개수를 union-find 로 센다.

```python
from itertools import product
from collections import defaultdict

def bracket(pd):
    """Kauffman 괄호. 교차는 호 라벨 4 개 (a,b,c,d), A-이음은 a-b 와 c-d 를 잇는다.
    반환은 A 의 지수 -> 계수."""
    poly = defaultdict(int)
    for state in product([0, 1], repeat=len(pd)):
        parent = {}
        def find(x):
            parent.setdefault(x, x)
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        def union(x, y):
            rx, ry = find(x), find(y)
            if rx != ry:
                parent[rx] = ry
        arcs = set()
        for (a, b, c, d), s in zip(pd, state):
            arcs |= {a, b, c, d}
            if s == 0:
                union(a, b); union(c, d)      # A-이음
            else:
                union(a, d); union(b, c)      # B-이음
        loops = len({find(x) for x in arcs})
        term = defaultdict(int)
        term[state.count(0) - state.count(1)] = 1
        for _ in range(loops - 1):            # delta = -A^2 - A^-2 를 곱한다
            nxt = defaultdict(int)
            for e, co in term.items():
                nxt[e + 2] -= co
                nxt[e - 2] -= co
            term = nxt
        for e, co in term.items():
            poly[e] += co
    return {e: c for e, c in poly.items() if c}

def normalize(poly, writhe):
    """f(K) = (-A^3)^{-w} <D>"""
    sign = -1 if writhe % 2 else 1
    out = defaultdict(int)
    for e, c in poly.items():
        out[e - 3 * writhe] += sign * c
    return {e: c for e, c in out.items() if c}

def to_V(poly):
    """A = t^{-1/4} 를 대입한다. 매듭이면 A 의 지수가 모두 4 의 배수다."""
    assert all(e % 4 == 0 for e in poly), "A 의 지수가 4 의 배수가 아니다 (링크인가?)"
    return {-e // 4: c for e, c in poly.items()}

def show(poly):
    return " + ".join(f"{c}t^{e}" for e, c in sorted(poly.items())).replace("+ -", "- ")

trefoil = [(1, 4, 2, 5), (3, 6, 4, 1), (5, 2, 6, 3)]   # 왼손 삼엽, w = -3
V = to_V(normalize(bracket(trefoil), -3))
print("왼손 삼엽  V =", show(V))

# 거울상 : 모든 교차를 뒤집으면 A -> A^-1, w -> -w
mirror = {-e: c for e, c in bracket(trefoil).items()}
Vm = to_V(normalize(mirror, 3))
print("오른손 삼엽 V =", show(Vm))

assert V == {-4: -1, -3: 1, -1: 1}                 # 문헌값 -t^-4 + t^-3 + t^-1
assert Vm == {e: c for e, c in zip([1, 3, 4], [1, 1, -1])}
assert V != Vm, "카이랄성을 못 잡았다"
assert {-e: c for e, c in V.items()} == Vm         # V(K*)(t) = V(K)(1/t)
print("\n삼엽매듭은 거울상과 다르다. 특히 풀리지 않는다.")

# 왼손 삼엽  V = -1t^-4 + 1t^-3 + 1t^-1
# 오른손 삼엽 V = 1t^1 + 1t^3 - 1t^4
#
# 삼엽매듭은 거울상과 다르다. 특히 풀리지 않는다.
```

`V\ne1` 이므로 삼엽매듭은 풀린 매듭이 아니고, `V(t)\ne V(t^{-1})` 이므로 거울상과도 다르다. 두 번째 결론이 중요하다. 삼엽매듭이 카이랄이라는 것은 매듭군만으로는 곧바로 나오지 않는다 — 거울상의 매듭군은 원래 매듭군과 동형이기 때문이다. 방향을 잊지 않는 불변량이 필요했고, Jones 다항식이 그것을 가장 싸게 준다.

## 어디에 쓰이는가

- **Tait 추측**: 교대 매듭의 기약 도식은 교차수가 최소이고, 같은 매듭의 두 기약 교대 도식은 비틀림수가 같다. Kauffman, Murasugi, Thistlethwaite 가 Jones 다항식의 지수 폭 논법으로 증명했다.
- **DNA 위상학**: 고리형 DNA 의 얽힘과 초나선을 재조합 효소가 어떻게 바꾸는지를 매듭과 tangle 의 언어로 기술한다. 전자현미경 사진에서 읽은 매듭형이 효소의 작용 기작을 판별한다.
- **양자계산**: 준위 `5` 에서 Jones 다항식을 근사하는 문제가 `\mathsf{BQP}`-완전이고, 위상적 양자계산 모형은 아예 애니온을 땋아 이 값을 계산하는 기계로 설계된다.
- **3 차원 다양체 불변량**: Witten–Reshetikhin–Turaev 불변량은 매듭 위 수술로 얻은 3 차원 다양체에 수를 붙인다. 그 재료가 [모듈러 텐서범주](modular-tensor-categories.md)이고, 매듭 다항식은 그 이론의 색칠된 고리 하나에 해당한다.

[^1]: V. F. R. Jones, *A polynomial invariant for knots via von Neumann algebras*, Bull. AMS 12 (1985). 원전.
[^2]: L. H. Kauffman, *State models and the Jones polynomial*, Topology 26 (1987). 괄호를 통한 초등적 재구성.
[^3]: E. Witten, *Quantum field theory and the Jones polynomial*, Comm. Math. Phys. 121 (1989). 3 차원 해석.

# 연관 문서

## 선수지식

- [기본군](fundamental-group.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology #combinatorics #computation
