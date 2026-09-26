# 매듭 불변량

# 개요

매듭은 원 $S^1$ 을 $\mathbb R^3$ 안에 매장한 것이고, 두 매듭은 하나를 끊지 않고 연속적으로 움직여 다른 하나로 만들 수 있으면 같다.

두 매듭이 같다는 것은 변형을 하나 제시하면 증명되지만 다르다는 것은 그렇지 않다. 그래서 변형으로 바뀌지 않는 양인 **불변량**을 매듭에서 뽑아내고, 값이 다를 때 매듭이 다르다고 판정한다.

기본적인 불변량은 여공간 $S^3\setminus K$ 의 [기본군](fundamental-group.md)인 **매듭군**이다. 매듭군과 주변 구조가 매듭을 결정하지만(Gordon–Luecke) 군의 표시로 주어지므로 두 표시가 같은 군인지 판정하기 어렵고, 계산 가능한 불변량이 따로 필요하다.

1928 년 Alexander 가 만든 다항식 불변량이 반세기 동안 유일했다. 1984 년 Jones 가 작용소대수 연구 도중 다른 불변량을 발견했고, Kauffman 이 그것을 도식의 교차점마다 두 가지로 끊어 더하는 초등적 구성으로 다시 세웠다.

이 구성은 Alexander 다항식이 놓치던 **카이랄성**, 곧 매듭과 거울상의 구별을 잡아낸다.

# 직관

## 도식과 Reidemeister 이동

매듭을 평면에 투영하고 교차점마다 어느 가닥이 위인지 표시한 것이 **매듭 도식**이다. 3 차원의 문제가 평면 그림의 문제로 바뀌는데, 대신 한 매듭이 여러 도식을 갖는다.

Reidemeister 의 정리가 이 대응을 통제한다. 두 도식이 같은 매듭을 나타낼 필요충분조건은 평면 변형과 다음 세 이동으로 서로 옮겨지는 것이다.

- R1: 꼬임 하나를 넣거나 뺀다.
- R2: 두 가닥을 겹쳤다 풀었다 한다.
- R3: 가닥 하나를 교차점 너머로 민다.

불변량을 만드는 일은 도식의 함수를 정의하고 세 이동에서 값이 변하지 않음을 확인하는 유한한 작업이 된다. 매듭 이론이 조합적으로 다루어지는 근거다.

## Kauffman 괄호

교차점 하나를 골라 위아래 정보를 지우고 두 가지 방식으로 이어 붙인다[^2].

$$
\text{교차}\ \longmapsto\ A\cdot(\text{A-이음})\thickspace+\thickspace A^{-1}\cdot(\text{B-이음})
$$

두 이음 중 어느 쪽이 A 인지는 위 가닥을 반시계 방향으로 돌려 아래 가닥에 붙이는 쪽으로 약속한다. 교차점이 $n$ 개면 이 규칙을 전부 적용해 $2^n$ 개의 **상태**가 나오고, 각 상태는 교차점이 하나도 없는 그림, 곧 평면 위의 원 몇 개다. 원 하나에 $\delta=-A^2-A^{-2}$ 를 주고 전부 더한 것이 **Kauffman 괄호**다.

$$
\langle K\rangle=\sum_{s}A^{\thinspace a(s)-b(s)}\thinspace\delta^{\thinspace|s|-1}
$$

$a(s),b(s)$ 는 상태 $s$ 에서 A-이음과 B-이음의 개수, $|s|$ 는 원의 개수다.

$\delta=-A^2-A^{-2}$ 를 쓰면 R2 이동에서 두 항이 상쇄되고 R3 도 따라온다. 다른 값에서는 상쇄가 일어나지 않으므로, 원 하나의 무게는 R2 불변성이 강제하는 값이다.

## 비틀림수 보정

R1 에서는 상쇄가 일어나지 않아 꼬임을 하나 넣으면 괄호에 $-A^{\pm3}$ 이 곱해진다. 이 어긋남은 도식의 **비틀림수**

$$
w(D)=\sum_{\text{교차점}}\varepsilon,\qquad \varepsilon=\pm1
$$

로 정확히 추적된다. $w$ 도 R1 에서만 $\pm1$ 변하므로, 두 어긋남을 곱해서 없앨 수 있다.

$$
f(K)=(-A^3)^{-w(D)}\langle D\rangle
$$

이 $f$ 가 세 이동 모두에서 불변이고, $A=t^{-1/4}$ 를 대입한 것이 **Jones 다항식** $V(K)(t)$ 다. 부호와 지수의 규약은 역사적인 것이고, 구성의 내용은 R2 가 $\delta$ 를 결정하고 R1 이 비틀림 보정을 강제한다는 것이다.

## 거울상

도식의 모든 교차점을 뒤집어 거울상 $K^\ast$ 로 가면 A-이음과 B-이음이 맞바뀌므로 괄호에서 $A\mapsto A^{-1}$ 이 일어나고, 비틀림수는 부호가 바뀐다. 결과적으로

$$
V(K^\ast)(t)=V(K)(t^{-1})
$$

이다. $V(K)$ 가 $t\mapsto t^{-1}$ 대칭이 아니면 $K$ 는 거울상과 다른 매듭이다. Alexander 다항식은 이 대칭을 항상 만족하도록 만들어져 카이랄성을 볼 수 없다.

# 정의

## 매듭과 링크

**매듭**은 매장 $S^1\hookrightarrow S^3$ 의 상이고, 성분이 여럿이면 **링크**라 한다. 두 매듭 $K_0$ 과 $K_1$ 이 **동위**(isotopic)라는 것은 주변 공간 전체의 동위사상 $H:S^3\times[0,1]\to S^3$ 이 있어 $H_0=\mathrm{id}$ 이고 $H_1(K_0)=K_1$ 인 것이다. 매끄럽거나 조각선형인 범주에서 다루지 않으면 매듭을 한 점으로 조이는 야생 매듭이 생겨 이론이 성립하지 않는다.

## 매듭군

여공간의 기본군 $\pi_1(S^3\setminus K)$ 를 매듭군이라 한다. Wirtinger 표시는 도식에서 직접 읽는다. 도식의 각 호마다 생성원 $x_i$ 를 두고, 교차점마다 관계 하나를 적는다.

$$
x_k=x_j x_i x_j^{-1}
$$

$x_j$ 가 위 가닥, $x_i,x_k$ 가 아래 가닥의 들어오고 나가는 호다. 풀린 매듭의 매듭군은 $\mathbb Z$ 이고 삼엽매듭의 것은 세 가닥 땋임군 $B_3$ 와 같은 $\langle x,y\mid xyx=yxy\rangle$ 다. 후자가 비가환이므로 삼엽매듭은 풀리지 않는다.

## Kauffman 괄호와 Jones 다항식

도식 $D$ 에 대해 괄호 $\langle D\rangle\in\mathbb Z[A,A^{-1}]$ 를 다음 세 규칙으로 정의한다.

$$
\langle\bigcirc\rangle=1,\qquad
\langle D\sqcup\bigcirc\rangle=(-A^2-A^{-2})\langle D\rangle,\qquad
\langle\times\rangle=A\langle\asymp\rangle+A^{-1}\langle\smile\frown\rangle
$$

세 번째 규칙을 모든 교차점에 적용해 펼치면 상태합 $\sum_{s}A^{\thinspace a(s)-b(s)}\thinspace\delta^{\thinspace\vert s\vert-1}$ 이 된다. 방향을 준 도식의 비틀림수 $w(D)$ 를 써서

$$
V(K)(t)=\left[(-A^3)^{-w(D)}\langle D\rangle\right]\_{A=t^{-1/4}}
$$

로 둔다. 매듭이면 $V\in\mathbb Z[t,t^{-1}]$ 이고, 성분이 짝수인 링크에서는 $t^{1/2}$ 이 남는다.

## Skein 관계

Jones 다항식은 다음 재귀로도 특징지어진다. 한 교차점만 다른 세 도식 $L_+,L_-,L_0$ 에 대해

$$
t^{-1}V(L_+)-t\thinspace V(L_-)=\left(t^{1/2}-t^{-1/2}\right)V(L_0)
$$

이고 $V(\text{풀린 매듭})=1$ 이다. 교차점을 하나씩 뒤집으면 어떤 도식이든 유한 단계에 풀린 링크로 내려가므로 이 관계와 초기값이 $V$ 를 유일하게 결정한다. HOMFLY(Hoste–Ocneanu–Millett–Freyd–Lickorish–Yetter) 다항식은 이 관계의 두 변수 판본이고, Alexander 다항식과 Jones 다항식을 동시에 특수화로 갖는다.

# 성질

## 분리력

- **카이랄성.** 삼엽매듭에서 $V(t)\ne V(t^{-1})$ 이므로 삼엽매듭은 거울상과 다르다.
- **풀린 매듭 판정.** $V(K)=1$ 이면 $K$ 가 풀린 매듭인가는 열린 문제다. 링크에서는 반례가 있다(Eliahou–Kauffman–Thistlethwaite).
- **불완전성.** 서로 다른 매듭이 같은 Jones 다항식을 갖는 예가 많다. Conway 매듭과 Kinoshita–Terasaka 매듭은 Alexander 다항식이 같은 고전적 예다.
- **교차수의 하한.** 괄호의 지수 폭이 교대 도식의 교차수와 맞물려 Tait 추측 셋 중 둘이 Jones 다항식으로 풀렸다.

## 작용소대수와의 관계

Jones 는[^1] $\mathrm{II}\_1$ 인자의 부분인자 지표를 연구하다 Temperley–Lieb 대수의 자취 함수에서 이 불변량을 얻었다. 땋임군 $B_n$ 의 표현이 Temperley–Lieb 대수를 거쳐 나오고 땋임의 닫힘이 링크를 주므로(Alexander 정리) 자취가 링크 불변량이 된다. 지표가 $4$ 아래에서 $4\cos^2(\pi/n)$ 값만 가진다는 정리와 $\delta=-A^2-A^{-2}$ 의 제약이 같은 사실을 달리 쓴 것이다.

## Chern–Simons 이론에서의 해석

Witten 은 1989 년에[^3] $V$ 를 3 차원 Chern–Simons 이론의 Wilson 고리 기댓값으로 해석했다. 이 관점에서 Jones 다항식은 3 차원 다양체의 불변량이고 $t$ 는 준위 $k$ 의 $1$ 의 거듭제곱근이다. Reshetikhin–Turaev 가 이 그림을 수학적으로 구성했고 필요한 대수적 입력이 [모듈러 텐서범주](modular-tensor-categories.md)다. Jones 다항식은 그 구성을 $\mathfrak{sl}\_2$ 의 준위 $1$ 에 적용한 결과다.

## 계산 복잡도

Jones 다항식을 임의의 $t$ 에서 정확히 계산하는 것은 $\char35{}P$ 어려움이고, 상태합이 $2^n$ 항이다. 예외는 $1$ 의 거듭제곱근 몇 곳이며, 준위 $5$ 지점의 근사 계산이 $\mathsf{BQP}$ 완전이라 양자계산의 표준 완전 문제가 된다.

# 활용

## 삼엽매듭의 Jones 다항식

도식을 PD(planar diagram) 표기로 주고, 교차마다 네 호의 라벨을 적어 두 이음이 잇는 쌍을 정한다. $2^n$ 상태를 모두 돌며 원의 개수를 union-find 로 센다.

$V\ne1$ 이므로 삼엽매듭은 풀린 매듭이 아니고, $V(t)\ne V(t^{-1})$ 이므로 거울상과도 다르다. 거울상의 매듭군은 원래 매듭군과 동형이므로 카이랄성은 매듭군에서 나오지 않는다. Jones 다항식은 방향을 잊지 않는 불변량을 값싸게 준다.

## Tait 추측, DNA 위상학, 양자계산

- **Tait 추측**: 교대 매듭의 기약 도식은 교차수가 최소이고, 같은 매듭의 두 기약 교대 도식은 비틀림수가 같다. Kauffman, Murasugi, Thistlethwaite 가 Jones 다항식의 지수 폭 논법으로 증명했다.
- **DNA 위상학**: 고리형 DNA 의 얽힘과 초나선을 재조합 효소가 어떻게 바꾸는지를 매듭과 tangle 의 언어로 기술한다. 전자현미경 사진에서 읽은 매듭형이 효소의 작용 기작을 판별한다.
- **양자계산**: 준위 $5$ 에서 Jones 다항식을 근사하는 문제가 BQP(bounded-error quantum polynomial time) 완전이고, 위상적 양자계산 모형은 아예 애니온을 땋아 이 값을 계산하는 기계로 설계된다.
- **3 차원 [다양체](manifolds.md) 불변량**: Witten–Reshetikhin–Turaev 불변량은 매듭 위 수술로 얻은 3 차원 다양체에 수를 붙인다. 그 재료가 모듈러 텐서범주이고, 매듭 다항식은 그 이론의 색칠된 고리 하나에 해당한다.

[^1]: V. F. R. Jones, *A polynomial invariant for knots via von Neumann algebras*, Bull. AMS 12 (1985). 원전.
[^2]: L. H. Kauffman, *State models and the Jones polynomial*, Topology 26 (1987). 괄호를 통한 초등적 재구성.
[^3]: E. Witten, *Quantum field theory and the Jones polynomial*, Comm. Math. Phys. 121 (1989). 3 차원 해석.

# 연관 문서

## 선수지식

- [기본군](fundamental-group.md)

## 더 알아보기

- [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)
- [땋임군과 Alexander–Markov 정리](braid-groups.md)
- [Khovanov 호몰로지](khovanov-homology.md)
- [볼륨 추측과 색 Jones 다항식](volume-conjecture.md)

#topology #algebraic_topology #combinatorics #computation
