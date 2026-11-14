# Bourgain–Tzafriri 제한 가역성 정리

# 개요

**Bourgain–Tzafriri 제한 가역성 정리(Bourgain–Tzafriri restricted invertibility theorem)** 는 길이가 $1$ 인 벡터를 많이 모아 둔 행렬에서, 서로 거의 수직인 벡터들을 정해진 개수 이상 골라낼 수 있다는 정리다. 평면에 $x$ 축 방향의 단위벡터 두 개와 $y$ 축 방향의 단위벡터 두 개가 있으면 넷을 모두 고르면 겹치는 것이 생기지만, 방향이 다른 둘을 고르면 서로 수직이다. 이 정리는 고를 수 있는 개수를 행렬의 크기 하나, 곧 작용소 노름으로 정한다.

# 직관

평면의 네 벡터 $a_1=a_2=(1,0)$ 과 $a_3=a_4=(0,1)$ 을 열로 둔 $2\times 4$ 행렬을 $A$ 라 한다. 네 열을 모두 쓰면 $a_1-a_2=0$ 이므로 계수를 $x=(1,-1,0,0)$ 으로 준 결합이 $0$ 이 된다. 열을 늘어놓은 사상 $x\mapsto\sum_jx_ja_j$ 가 $0$ 이 아닌 $x$ 를 $0$ 으로 보내므로 아래로 유계가 아니다.

$a_1$ 과 $a_3$ 만 고르면 $\vert x_1a_1+x_3a_3\vert^2=x_1^2+x_3^2$ 이다. 고른 열의 결합은 계수 벡터의 길이를 그대로 지킨다.

몇 개를 고를 수 있는지는 열이 같은 방향에 얼마나 몰려 있는지에 달려 있다. 이 예에서 $AA^{\mathsf T}=2I$ 이므로 $\Vert A\Vert^2=2$ 이고, 열의 수를 이 값으로 나누면 $4/2=2$ 로 고를 수 있는 개수와 같다. 열이 서로 수직인 단위벡터 $n$ 개이면 $\Vert A\Vert=1$ 이고 $n$ 개를 모두 고를 수 있다.

# 정의

$A$ 를 $m\times n$ 실행렬이라 하고 열을 $a_1,\dots,a_n$ 이라 한다. $\Vert A\Vert$ 는 [특이값 분해](singular-value-decomposition.md)의 가장 큰 특이값, 곧 작용소 노름이다.

부분집합 $\sigma\subseteq\lbrace 1,\dots,n\rbrace$ 에 대해 $A_\sigma$ 는 $\sigma$ 에 속한 열만 남긴 $m\times\vert\sigma\vert$ 행렬이다. $A_\sigma$ 의 가장 작은 특이값을 $s_{\min}(A_\sigma)$ 로 쓴다. 모든 $x\in\mathbb R^\sigma$ 에서 다음이 성립하는 가장 큰 $c$ 가 $s_{\min}(A_\sigma)$ 다.

$$
\Bigl\vert\sum_{j\in\sigma}x_ja_j\Bigr\vert\ge c\thinspace\vert x\vert
$$

$s_{\min}(A_\sigma)\gt 0$ 이면 $A_\sigma$ 는 치역 위에서 역사상을 갖고, 그 역사상의 노름이 $1/s_{\min}(A_\sigma)$ 다. 열의 일부로 제한한 행렬이 가역이라는 뜻에서 이 성질을 **제한 가역성(restricted invertibility)** 이라 한다. 직관 절에서 $\sigma=\lbrace 1,3\rbrace$ 이면 $s_{\min}(A_\sigma)=1$ 이고 $\sigma=\lbrace 1,2\rbrace$ 이면 $0$ 이다.

# 성질

## 제한 가역성 정리

모든 열의 길이가 $1$ 이면, 절대상수 $c,d\gt 0$ 이 있어 다음을 만족하는 $\sigma$ 가 존재한다.[^1]

$$
\vert\sigma\vert\ge\frac{d\thinspace n}{\Vert A\Vert^2},\qquad s_{\min}(A_\sigma)\ge c
$$

$c$ 와 $d$ 는 $A$ 의 크기 $m\times n$ 에도 $\Vert A\Vert$ 에도 의존하지 않는다. 열의 길이가 $1$ 이면 $n=\mathrm{tr}\thinspace A^{\mathsf T}A\le m\Vert A\Vert^2$ 이므로 $n/\Vert A\Vert^2$ 는 행의 수 $m$ 을 넘지 않는다.

## Spielman–Srivastava 꼴

$0\lt\varepsilon\lt 1$ 마다 다음을 만족하는 $\sigma$ 가 있다.[^2]

$$
\vert\sigma\vert\ge\Bigl\lfloor\frac{\varepsilon^2n}{\Vert A\Vert^2}\Bigr\rfloor,\qquad s_{\min}(A_\sigma)\gt 1-\varepsilon
$$

직관 절의 예에서 $\varepsilon$ 을 $1$ 에 가깝게 잡으면 $\lfloor\varepsilon^2\cdot 4/2\rfloor=1$ 이고, 열 하나를 고르면 $s_{\min}=1$ 이다.

증명의 요지. 열을 하나씩 더해 $\sigma$ 를 키운다. 고른 열로 만든 행렬 $B=A_\sigma A_\sigma^{\mathsf T}$ 의 $0$ 이 아닌 고윳값이 모두 기준선 $b$ 위에 있도록 유지하고, 고윳값이 $b$ 에 가까울수록 커지는 퍼텐셜 $\mathrm{tr}\thinspace(B-bI)^{-1}$ 로 그 여유를 잰다. 열 $a_j$ 를 더했을 때 퍼텐셜의 변화를 모든 $j$ 에 걸쳐 평균하면, $\sum_ja_ja_j^{\mathsf T}=AA^{\mathsf T}\le\Vert A\Vert^2I$ 이므로 평균이 작다. 그래서 퍼텐셜을 키우지 않고 $b$ 를 정해진 양만큼 올릴 수 있는 열이 있고, 이 단계를 $\varepsilon^2n/\Vert A\Vert^2$ 번 되풀이한다.

# 활용

- [Kadison–Singer 문제](kadison-singer-problem.md). 제한 가역성 정리의 가장 강한 꼴, 곧 열 전체를 정해진 개수의 조각으로 나누어 조각마다 $s_{\min}$ 이 아래로 유계가 되게 할 수 있다는 진술이 Kadison–Singer 문제와 동치다. Marcus–Spielman–Srivastava 가 [교차 다항식족](interlacing-families.md)으로 이것을 증명했다.
- [스펙트럼 희소화](spectral-sparsification.md). Batson–Spielman–Srivastava 의 희소화는 같은 퍼텐셜을 고윳값의 위와 아래에 하나씩 두고 벡터를 하나씩 더해 간선 수가 정점 수에 비례하는 희소 그래프를 만든다.
- 틀 이론(frame theory). 길이가 $1$ 인 벡터 $n$ 개가 위 틀 상수(upper frame bound) $B$ 를 가지면, 그 가운데 $n/B$ 에 비례하는 개수의 벡터가 아래 상수가 절대상수인 Riesz 열(Riesz sequence)을 이룬다. 직관 절의 $\Vert A\Vert^2$ 가 $B$ 이다.

[^1]: J. Bourgain, L. Tzafriri, "Invertibility of 'large' submatrices with applications to the geometry of Banach spaces and harmonic analysis", *Israel Journal of Mathematics* **57** (1987), 137–224.

[^2]: D. A. Spielman, N. Srivastava, "An elementary proof of the restricted invertibility theorem", *Israel Journal of Mathematics* **190** (2012), 83–91.

# 연관 문서

## 선수지식

- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #functional_analysis #combinatorics
