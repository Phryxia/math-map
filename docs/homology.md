# 단체 호몰로지

# 개요

**단체 호몰로지(simplicial homology)** 는 도형에 뚫린 구멍을 차원별로 세는 방법이다. 삼각형의 테두리만 있는 도형에는 고리 모양 구멍이 하나 있고 속을 채운 삼각형에는 없는데, 두 도형은 모두 한 덩어리이고 테두리의 모양도 같다. 호몰로지는 도형을 삼각형 조각으로 쪼개고, 경계가 없으면서 어떤 조각의 경계도 아닌 고리를 세어 이 차이를 아벨군으로 나타낸다.

# 직관

꼭짓점 $a,b,c$ 와 변 셋으로 된 삼각형의 테두리 $K$ 와, 같은 테두리에 면을 채운 삼각형 $L$ 을 견준다. 변에 방향을 주어 $\lbrack a,b\rbrack$ 는 $a$ 에서 $b$ 로 가는 변이라 하고, 변의 경계를 끝점에서 시작점을 뺀 것 $b-a$ 로 둔다. 테두리를 한 바퀴 도는 $z=\lbrack a,b\rbrack+\lbrack b,c\rbrack-\lbrack a,c\rbrack$ 의 경계는 $(b-a)+(c-b)-(c-a)=0$ 이므로 $z$ 는 시작도 끝도 없는 고리다.

$L$ 에서는 면 $\lbrack a,b,c\rbrack$ 의 경계를 테두리로 두면 그것이 $z$ 다. 그래서 $L$ 의 고리 $z$ 는 면 하나의 경계이고 구멍을 둘러싸지 않는다. $K$ 에는 면이 없으므로 $z$ 는 어떤 것의 경계도 아니고, $z$ 가 둘러싸는 곳에 구멍이 하나 있다. 경계가 $0$ 인 것들을 모아 어떤 것의 경계인 것들로 나누면 $K$ 에서는 $z$ 의 정수배가 남고 $L$ 에서는 $0$ 이 남는다.

# 정의

## 단체복합체

Euclid 공간의 아핀 독립인 점 $k+1$ 개의 볼록 껍질을 **$k$-단체($k$-simplex)** 라 한다. $0$-단체는 점, $1$-단체는 선분, $2$-단체는 삼각형, $3$-단체는 사면체다. 꼭짓점의 일부가 만드는 단체를 **면(face)** 이라 한다.

단체들의 유한 모음 $K$ 가 다음 두 조건을 만족하면 **단체복합체(simplicial complex)** 라 한다.

$$
\sigma\in K,\thinspace\tau\thinspace\text{가 }\sigma\text{의 면}\Longrightarrow\tau\in K;\qquad
\sigma,\sigma'\in K\Longrightarrow\sigma\cap\sigma'\thinspace\text{는 공집합이거나 둘의 공통 면}
$$

$K$ 에 속한 단체들의 합집합에 부분공간 위상을 준 것을 $K$ 의 **다면체(polyhedron)** 라 한다. 위상공간 $X$ 가 어떤 단체복합체의 다면체와 위상동형이면 그 위상동형을 $X$ 의 **삼각화(triangulation)** 라 한다. 직관 절의 $K$ 는 $0$-단체 셋과 $1$-단체 셋이고 그 다면체는 원과 위상동형이다. $L$ 은 여기에 $2$-단체 하나를 더한 것이다.

## 사슬군과 경계 연산자

각 단체에 꼭짓점 순서로 방향을 준다. **$n$-사슬군($n$-th chain group)** $C_n(K)$ 는 방향을 준 $n$-단체들을 기저로 하는 자유 아벨군이다. **경계 연산자(boundary operator)** $\partial_n\colon C_n(K)\to C_{n-1}(K)$ 는 꼭짓점을 하나씩 뺀 면들의 교대합을 기저 위에서 주고 선형으로 확장한 것이다.[^1]

$$
\partial_n\lbrack v_0,\dots,v_n\rbrack=\sum_{i=0}^{n}(-1)^{i}\thinspace\lbrack v_0,\dots,\widehat{v_i},\dots,v_n\rbrack
$$

$\widehat{v_i}$ 는 그 꼭짓점을 뺀다는 표시다. $\partial_1\lbrack a,b\rbrack=b-a$ 이고 $\partial_2\lbrack a,b,c\rbrack=\lbrack b,c\rbrack-\lbrack a,c\rbrack+\lbrack a,b\rbrack$ 이므로 직관 절의 계산과 같다.

## 호몰로지 군과 Betti 수

$Z_n=\ker\partial_n$ 의 원소를 **순환(cycle)**, $B_n=\mathrm{im}\thinspace\partial_{n+1}$ 의 원소를 **경계(boundary)** 라 한다. 성질 절의 $\partial_n\circ\partial_{n+1}=0$ 으로 $B_n\subseteq Z_n$ 이고, 몫

$$
H_n(K)=Z_n/B_n
$$

을 **$n$ 차 호몰로지 군($n$-th homology group)** 이라 한다. 유한 복합체에서 $H_n(K)$ 는 유한생성 아벨군이므로 $H_n(K)\cong\mathbb{Z}^{\beta_n}\oplus T_n$ 으로 분해되고, $\beta_n$ 을 **$n$ 번째 Betti 수(Betti number)**, 유한군 $T_n$ 을 **꼬임(torsion)** 이라 한다.

직관 절의 $K$ 에서 $Z_1=\mathbb Z z$, $B_1=0$ 이므로 $H_1(K)\cong\mathbb Z$ 이고 $\beta_1=1$ 이다. $L$ 에서는 $B_1=\mathbb Z z$ 이므로 $H_1(L)=0$ 이다. 두 복합체 모두 $Z_0=C_0=\mathbb Z^3$ 이고 $B_0$ 이 $b-a$, $c-b$ 로 생성되므로 $H_0\cong\mathbb Z$ 다.

# 성질

## 경계의 경계

$\partial_{n}\circ\partial_{n+1}=0$ 이다. $\lbrack v_0,\dots,v_{n+1}\rbrack$ 에서 꼭짓점 $v_i$ 와 $v_j$ ($i\lt j$) 를 빼는 순서가 두 가지이고, 같은 항이 부호 $(-1)^j(-1)^i$ 와 $(-1)^i(-1)^{j-1}$ 로 두 번 나타나 상쇄된다.

## 경계 행렬과 Smith 표준형

경계 연산자를 기저에 대해 [행렬](matrices.md)로 쓰면 성분이 $-1,0,1$ 인 정수행렬이다. 정수행렬의 Smith 표준형(Smith normal form)이 계수와 꼬임 계수를 모두 주고, Betti 수는 다음으로 나온다.[^2]

$$
\beta_n=\mathrm{rank}\thinspace Z_n-\mathrm{rank}\thinspace B_n=\bigl(m_n-\mathrm{rank}\thinspace\partial_n\bigr)-\mathrm{rank}\thinspace\partial_{n+1}
$$

$m_n$ 은 $n$-단체의 개수다. 직관 절의 $K$ 에서 $\partial_1$ 은 계수가 $2$ 인 $3\times 3$ 행렬이므로 $\beta_1=(3-2)-0=1$, $\beta_0=3-2=1$ 이다. 이 계산은 [선형사상](linear-maps.md)의 차원 정리를 정수 계수에서 쓴 것이다.

## 표준 계산 결과

$\beta_0$ 은 [연결성분](connectedness.md)의 개수다.

| 공간 | H₀ | H₁ | H₂ | Betti 수 |
| --- | --- | --- | --- | --- |
| 점 | $\mathbb Z$ | $0$ | $0$ | $1,0,0$ |
| 원 | $\mathbb Z$ | $\mathbb Z$ | $0$ | $1,1,0$ |
| 2차원 구면 | $\mathbb Z$ | $0$ | $\mathbb Z$ | $1,0,1$ |
| 원환면 | $\mathbb Z$ | $\mathbb Z^2$ | $\mathbb Z$ | $1,2,1$ |
| 실사영평면 | $\mathbb Z$ | $\mathbb Z/2$ | $0$ | $1,0,0$ |
| Klein 병 | $\mathbb Z$ | $\mathbb Z\oplus\mathbb Z/2$ | $0$ | $1,1,0$ |

닫힌 곡면에서 $H_1$ 에 꼬임이 있는 것은 곡면에 방향을 줄 수 없는 것과 동치다. 실사영평면과 점은 Betti 수가 같으므로 Betti 수만으로는 공간을 구별하지 못한다.

## 위상 불변성

서로 다른 삼각화를 택해도 호몰로지 군은 동형이다. 호몰로지는 호모토피 불변량이고 연속사상은 호몰로지 사이의 준동형을 유도한다. 삼각화 없이 연속사상으로 정의하는 특이 호몰로지(singular homology)는 삼각화 가능한 공간에서 단체 호몰로지와 같다.[^1] 콤팩트 [다양체](manifolds.md)는 3차원 이하에서 항상 삼각화 가능하다.

## 기본군과의 관계

경로연결 공간에서 1차 호몰로지는 [기본군](fundamental-group.md)의 아벨화와 동형이다([Hurewicz 정리](hurewicz-theorem.md)).

$$
H_1(X)\cong\pi_1(X)^{\mathrm{ab}}=\pi_1(X)/\lbrack\pi_1(X),\pi_1(X)\rbrack
$$

8자 모양의 기본군은 생성원 둘의 자유군이고 가환이 아니지만 1차 호몰로지는 $\mathbb Z^2$ 이다.

## 고차원 Brouwer 고정점 정리

$n$ 차원 구면의 $n$ 차 호몰로지는 $\mathbb Z$ 이고 $(n+1)$ 차원 원판의 것은 $0$ 이다. 원판에서 경계 구면으로 가는 수축(retraction) $r$ 이 있으면 포함사상 $i$ 와의 합성 $r\circ i$ 가 항등사상이라 $\mathbb Z\to 0\to\mathbb Z$ 가 항등사상이어야 하므로 모순이다. 그러므로 모든 차원에서 수축이 없고 [Brouwer 고정점 정리](brouwer-fixed-point.md)가 성립한다.

# 활용

- [Euler 지표](euler-characteristic.md). 단체 개수의 교대합은 Betti 수의 교대합과 같다. 직관 절의 $K$ 에서 $3-3=0=1-1$ 이다.

$$
\chi(K)=\sum_{n\ge 0}(-1)^{n}m_n=\sum_{n\ge 0}(-1)^{n}\beta_n
$$

- 위상 데이터 분석. 점구름에서 반지름을 키우며 단체복합체의 열을 만들고, 각 호몰로지류가 나타나고 사라지는 반지름을 기록한다. 이것을 지속 호몰로지(persistent homology)라 한다. 나타나는 반지름과 사라지는 반지름의 차가 작은 류는 잡음으로 본다.
- 센서 네트워크. 통신 반경으로 만든 복합체의 1차 호몰로지가 $0$ 이면 감시 영역에 빈 곳이 없다.
- [그래프](graphs.md). 연결 그래프를 1차원 단체복합체로 보면 1차 Betti 수는 간선 수에서 [최소 신장트리](minimum-spanning-tree.md)의 간선 수를 뺀 값이다.

[^1]: J. R. Munkres, *Elements of Algebraic Topology*, §5–8 (단체복합체, 경계 연산자, 단체 호몰로지), §34 (Hurewicz 정리). https://graphics.stanford.edu/courses/cs468-02-fall/notes/06.pdf
[^2]: 경계 행렬의 성분이 -1, 0, 1 이고 Smith normal form 으로 Betti 수와 꼬임을 얻는 절차. V. Robins, "Computing Homology", Ch. 3. https://people.physics.anu.edu.au/~vbr110/thesis/ch3-homology.pdf

# 연관 문서

## 선수지식

- [위상 공간](topology.md)
- [군](groups.md)

## 더 알아보기

### 세포 구조와 위상 불변량

- [Mayer–Vietoris 완전열](mayer-vietoris.md)
- [CW 복합체](cw-complexes.md)
- [Hurewicz 정리](hurewicz-theorem.md)
- [Morse 이론](morse-theory.md)
- [Euler 지표](euler-characteristic.md)
- [코호몰로지](cohomology.md)
- [de Rham 코호몰로지](de-rham-cohomology.md)
- [Reidemeister 비틀림](reidemeister-torsion.md)
- [Khovanov 호몰로지](khovanov-homology.md)

### 해석학에서의 쓰임

- [Brouwer 차수](brouwer-degree.md)
- [Brouwer 고정점 정리](brouwer-fixed-point.md)
- [Lefschetz 고정점 정리](lefschetz-fixed-point.md)

### 대수와 수론에서의 쓰임

- [Galois 표현](galois-representations.md)
- [대수적 K 이론](algebraic-k-theory.md)

#algebraic_topology #topology #algebra #graph_theory
