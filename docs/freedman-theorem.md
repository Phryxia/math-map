# Freedman 정리

# 개요

**Freedman 정리(Freedman's theorem)** 는 모든 고리를 한 점으로 줄일 수 있는 닫힌 4 차원 공간을, 그 안의 곡면들이 서로 몇 번 만나는지 적은 대칭 [행렬](matrices.md) 하나와 $0$ 또는 $1$ 인 값 하나로 분류한다는 정리다. $S^2\times S^2$ 안의 두 구면 $S^2\times\lbrace p\rbrace$ 와 $\lbrace p\rbrace\times S^2$ 는 한 번 만나고 각자는 자기 자신과 $0$ 번 만나므로 행렬이 $\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 이고, $\mathbb{CP}^2\mathbin{\char35}\overline{\mathbb{CP}^2}$ 의 행렬은 $\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}$ 이어서 두 공간은 위상동형이 아니다. Freedman 정리는 거꾸로 행렬과 그 값이 같으면 두 공간이 위상동형임을 보이고, 증명은 차원 $5$ 이상에서 쓰는 교차점 제거를 4 차원에서 무한히 되풀이하는 구성으로 한다.

# 직관

개요의 행렬은 4 차원 다양체 안의 곡면들이 만나는 횟수를 적은 [교차형식](intersection-form.md)이다. 차원 $5$ 이상에서 단연결 다양체의 분류를 주는 것은 [s-코보디즘 정리](s-cobordism.md)이고, 그 증명은 두 부분다양체의 교차점을 짝지어 없애는 Whitney 트릭(Whitney trick)으로 손잡이를 지운다. 교차점 두 개를 잇는 원판을 끼워 넣고 그 원판을 따라 한쪽을 밀면 두 점이 함께 사라진다. 이 수가 되려면 끼운 원판이 자기 자신과 만나지 않아야 한다.

원판은 $2$ 차원이므로 $n$ 차원 다양체 안에서 일반 위치의 자기교차는 차원 $2+2-n$ 에 놓인다. $n\ge 5$ 이면 이 값이 음수여서 자기교차가 없다. $n=4$ 이면 $0$ 이고 자기교차가 점으로 남는다. 남은 점마다 Whitney 트릭을 다시 쓰려면 또 원판이 필요하고 그 원판도 자기 자신과 만나므로 계산이 제자리로 돌아온다.

Freedman 은 교차점을 없애는 대신 다음 단계로 민다. 원판 하나를 자기교차를 허용한 손잡이로 바꾸고, 거기서 생긴 교차점을 없애는 원판을 다시 그런 손잡이로 바꾸는 식으로 무한히 쌓는다. 어느 유한 단계에서도 매끄러운 원판은 나오지 않는다.

무한히 쌓은 전체를 하나의 열린 다양체로 보면 그것이 표준 손잡이 $D^2\times\mathbb R^2$ 와 위상동형이다. 미분동형은 얻지 못하지만 위상동형은 얻으므로, 위상다양체에서는 $4$ 차원에서도 Whitney 트릭을 쓸 수 있고 손잡이를 지울 수 있다.

# 정의

## Kirby–Siebenmann 불변량

위상다양체가 조각마다 선형인 구조(piecewise linear structure)를 갖는 데 대한 장애를 **Kirby–Siebenmann 불변량(Kirby–Siebenmann invariant)** 이라 한다. 닫힌 $4$ 차원 다양체 $M$ 에서는

$$
\mathrm{ks}(M)\in H^4(M;\mathbb Z/2)\cong\mathbb Z/2
$$

의 원소다.

- 매끄러운 다양체는 조각마다 선형인 구조를 가지므로 $\mathrm{ks}=0$ 이다. $S^4$, $S^2\times S^2$, $\mathbb{CP}^2$ 가 그렇다.
- Freedman 정리의 실현 부분이 주는, 교차형식이 $\mathbb{CP}^2$ 와 같은 $(1)$ 이고 $\mathrm{ks}=1$ 인 다양체를 가짜 $\mathbb{CP}^2$(fake $\mathbb{CP}^2$, Chern 다양체)라 한다.

## Casson 손잡이

$D^2\times D^2$ 의 중심 원판 $D^2\times 0$ 에 횡단 자기교차점을 몇 개 만들고 그 근방을 붙인 것을 **꼬인 손잡이(kinky handle)** 라 한다. 꼬인 손잡이의 자기교차점마다 생기는 고리에 다시 꼬인 손잡이를 붙이는 일을 셀 수 있는 무한 층으로 되풀이해 얻는 열린 $4$ 차원 다양체를 **Casson 손잡이(Casson handle)** 라 한다. 각 층의 꼬인 손잡이 수와 자기교차의 부호가 Casson 손잡이를 정한다.

- 자기교차점이 없는 꼬인 손잡이는 표준 $2$ 손잡이 $D^2\times D^2$ 다.
- 층마다 꼬인 손잡이 하나에 양의 자기교차점 하나를 두면 가장 단순한 Casson 손잡이가 나온다. 직관의 무한히 쌓는 구성이 이것이다.

# 성질

## 분류와 실현

닫힌 단연결 $4$ 차원 위상다양체 $M,N$ 에 대해 $Q_M\cong Q_N$ 이고 $\mathrm{ks}(M)=\mathrm{ks}(N)$ 이면 $M$ 과 $N$ 은 위상동형이다. 또 단모듈러(unimodular) 대칭 쌍선형형식 $Q$ 와 $\mathbb Z/2$ 의 원소 하나마다 그것을 교차형식과 Kirby–Siebenmann 불변량으로 갖는 다양체가 존재한다[^1].

짝수형에서는 두 값이 독립이 아니다. Rokhlin 정리가 매끄러운 경우의 부호수를 $16$ 으로 나누므로 $\mathrm{ks}(M)=\sigma(M)/8 \bmod 2$ 가 성립하고, 짝수형 하나마다 다양체가 위상동형까지 하나다. 홀수형에서는 $\mathrm{ks}$ 의 두 값이 모두 실현되어 다양체가 둘이다.

## 증명의 요지

Casson 손잡이가 $D^2\times\mathbb R^2$ 에 위상동형임을 보이는 것이 증명의 본체다. 무한탑에서 층마다 교차점을 다음 층으로 밀어내는 구성을 하고, 그 극한이 표준 손잡이가 되는 것을 Bing 수축 판정(Bing shrinking criterion)으로 확인한다. 이것을 쓰면 단연결 $4$ 차원 코보디즘에서 위상적 손잡이 소거가 되고 s-코보디즘 정리의 증명이 그대로 옮겨간다.

## 4 차원 위상적 Poincaré 추측

교차형식이 $0$ 인 경우가 호몰로지 $4$ 구다. 교차형식이 $0$ 이면 짝수형이므로 $\mathrm{ks}=0$ 이고, 정리로 그 다양체는 $S^4$ 와 위상동형이다. 따라서 $4$ 차원 위상적 Poincaré 추측이 성립한다.

## 매끄러운 범주와의 차이

실현 부분이 정부호 짝수형 $E_8$ 을 교차형식으로 갖는 위상다양체를 준다. [Donaldson 불변량](donaldson-invariants.md)을 정의하는 모듈라이 공간(moduli space)에서 Donaldson 대각화 정리(Donaldson's diagonalization theorem)가 나온다. 닫힌 단연결 매끄러운 $4$ 차원 다양체의 정부호 교차형식은 $\pm$ 항등행렬로 대각화된다. $E_8$ 은 정부호이면서 항등행렬과 동형이 아니므로 그 위상다양체에는 매끄러운 구조가 없다.

$\mathbb R^4$ 에도 표준 구조와 미분동형이 아닌 매끄러운 구조가 있다. 대각화 정리로 어떤 콤팩트 조각이 매끄럽게 매장되지 않음을 보이고, 이 정리로 위상적 매장을 만들어 둘을 대비한다. $4$ 차원 매끄러운 Poincaré 추측, 곧 [이색 구면](exotic-spheres.md)의 $4$ 차원 판본이 없다는 진술은 판정되지 않은 채다[^2].

# 활용

- 교차형식 문서에서 짝수형 교차형식이 닫힌 단연결 $4$ 차원 위상다양체를 위상동형까지 정한다는 사실의 근거로 쓴다.
- Donaldson 불변량과 [Seiberg–Witten 이론](seiberg-witten-theory.md)이 미분동형이 아닌 짝을 가려낼 때, 위상동형이라는 전제를 이 정리가 공급한다. 교차형식이 같은 두 매끄러운 다양체는 이 정리로 위상동형이고, 불변량이 다르면 미분동형이 아니다.
- [수술 이론](surgery-theory.md)이 차원 $5$ 이상에서 쓰는 수술 정확열을 위상 범주의 $4$ 차원 단연결 경우로 넓히는 데 쓴다.
- 짝수형 교차형식이 [스핀 구조](spin-structures.md)의 존재와 같으므로, Rokhlin 정리와 함께 스핀 $4$ 다양체의 부호수를 제한한다.

[^1]: M. H. Freedman, "The topology of four-dimensional manifolds", *Journal of Differential Geometry* **17** (1982), 357–453. 분류와 실현, Casson 손잡이의 위상형이 이 논문에 있다. 교과서 서술은 M. H. Freedman and F. Quinn, *Topology of 4-Manifolds*, Princeton University Press (1990).

[^2]: M. Freedman, R. Gompf, S. Morrison, K. Walker, *Man and machine thinking about the smooth 4-dimensional Poincaré conjecture*, Quantum Topology **1** (2010), 171–208. 추측이 판정되지 않은 채임을 전제로 반례 후보를 검사한다.

# 연관 문서

## 선수지식

- [s-코보디즘 정리와 고차원 Poincaré 추측](s-cobordism.md)
- [교차형식](intersection-form.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology #differential_geometry
