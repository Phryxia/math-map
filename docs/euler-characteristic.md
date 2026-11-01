# Euler 지표

# 개요

**Euler 지표(Euler characteristic)** 는 도형을 조각으로 나누었을 때 꼭짓점, 변, 면의 개수를 번갈아 더하고 빼서 얻는 정수다. 정육면체는 꼭짓점 $8$ 개, 모서리 $12$ 개, 면 $6$ 개이고 정사면체는 $4$ 개, $6$ 개, $4$ 개로 개수가 다르지만, 두 경우 모두 $8-12+6=4-6+4=2$ 다. 조각을 더 잘게 나누어도 이 값이 바뀌지 않음을 증명하고, 값이 다른 두 도형은 같은 도형이 아니라고 판정한다.

# 직관

정육면체의 겉면에서 꼭짓점 $8$ 개, 모서리 $12$ 개, 면 $6$ 개를 센다. 정사각형 면 하나에 대각선을 그으면 모서리가 하나 늘고 그 면이 삼각형 둘로 갈라져 면도 하나 는다. 모서리 하나의 가운데에 점을 찍으면 꼭짓점이 하나 늘고 그 모서리가 둘로 갈라져 모서리도 하나 는다. 두 경우 모두 꼭짓점 수에서 모서리 수를 빼고 면 수를 더한 값 $8-12+6=2$ 는 변하지 않는다.

정육면체 겉면을 아무리 잘게 나누어도 이 두 조작을 거듭한 것이므로 값은 $2$ 로 남는다. 공의 겉면을 어떻게 나누든 같은 값이 나오고, 도넛의 겉면은 정사각형 하나의 마주 보는 변을 붙여 꼭짓점 $1$ 개, 모서리 $2$ 개, 면 $1$ 개로 나눌 수 있어 $1-2+1=0$ 이 나온다. 값이 다르므로 공의 겉면과 도넛의 겉면은 늘이고 구부려 서로 옮길 수 없다.

# 정의

## 조합적 정의

$K$ 를 유한 단체복합체(simplicial complex)라 하고 $m_n$ 을 $n$ 차원 단체의 개수라 하자. Euler 지표는 다음 교대합이다.

$$
\chi(K)=\sum_{n\ge 0}(-1)^{n}m_n=m_0-m_1+m_2-m_3+\cdots
$$

2차원에서 꼭짓점·간선·면의 개수를 $V$ , $E$ , $F$ 로 쓰면 다음과 같다.

$$
\chi=V-E+F
$$

[CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology)에서는 $m_n$ 을 $n$ 차원 칸(cell)의 개수로 바꾸어 같은 식으로 정한다.

- 정사면체의 겉면은 꼭짓점 $4$, 변 $6$, 삼각형 $4$ 인 단체복합체이고 $chi=4-6+4=2$ 다.
- 속이 찬 삼각형 하나는 $chi=3-3+1=1$ 이고, 그 테두리인 원은 $chi=3-3=0$ 이다.
- 구면 $S^2$ 는 점 하나에 2 차원 칸 하나를 붙인 CW 복합체이고 $chi=1+1=2$ 다.

## 호몰로지적 정의

[단체 호몰로지](homology.md)의 $n$ 번째 Betti 수 $\beta_n$, 곧 $H_n(K;\mathbb Q)$ 의 차원으로 다음 교대합을 정한다.

$$
\chi(K)=\sum_{n\ge 0}(-1)^{n}\beta_n
$$

- 원은 $\beta_0=1$, $\beta_1=1$ 이므로 $\chi=0$ 이다. 조합적 정의의 $3-3=0$ 과 같다.
- 구면은 $\beta_0=1,\beta_1=0,\beta_2=1$ 이므로 $\chi=2$ 다.

# 성질

## 두 정의의 일치와 불변성

조합적 정의와 호몰로지적 정의는 같은 값을 준다[^1]. Betti 수는 쪼개는 방식에 의존하지 않으므로, 이 등식으로 조합적 교대합이 분할에 의존하지 않는 위상 불변량임이 증명된다. $m_n$ 은 $n$ 사슬군의 계수(rank)이고 계수는 핵과 상으로 분해되므로

$$
m_n=\mathrm{rank}\ker\partial_n+\mathrm{rank}\thinspace\mathrm{im}\partial_n,\qquad
\beta_n=\mathrm{rank}\ker\partial_n-\mathrm{rank}\thinspace\mathrm{im}\partial_{n+1}
$$

이고, 교대합을 취하면 상의 계수들이 인접 항끼리 상쇄된다.

## 평면 그래프의 Euler 공식

$G$ 를 평면에 교차 없이 그린 연결 [그래프](graphs.md), 곧 [평면 그래프](planar-graphs.md)라 하고, 그림이 평면을 나눈 영역(외부 무한 영역 포함)의 개수를 $F$ 라 하자. 그러면 다음이 성립한다.

$$
V-E+F=2
$$

증명. $G$ 의 신장트리(spanning tree) $T$ 를 잡는다. 신장트리는 모든 꼭짓점을 잇고 고리가 없는 부분그래프이며, [최소 신장트리](minimum-spanning-tree.md)가 그 한 예다. $T$ 는 간선이 $V-1$ 개이고 고리가 없으므로 평면을 나누지 않아 면이 1개다. 따라서 교대합은 $V-(V-1)+1=2$ 다. 이제 $G$ 의 남은 간선을 하나씩 $T$ 에 다시 넣는다. 각 간선은 이미 연결된 두 점을 이으므로 새 고리를 만들고, 어떤 면 하나를 정확히 둘로 나눈다. 그러므로 $E$ 와 $F$ 가 동시에 $1$ 씩 늘어 교대합이 보존된다. 남은 간선을 모두 넣으면 $G$ 가 되고 값은 여전히 $2$ 다.

연결이 아니면 성립하지 않는다. 연결성분이 $c$ 개면 $V-E+F=1+c$ 다.

## 볼록다면체

볼록다면체의 표면은 2차원 구면과 위상동형이고, 한 면의 내부에서 사영하면 평면 그래프가 되므로 Euler 공식이 그대로 적용된다. 정사면체는 $4-6+4$ , 정육면체는 $8-12+6$ , 정십이면체는 $20-30+12$ 로 모두 $2$ 다.

## 정다면체의 분류

각 면이 정 $p$ 각형이고 각 꼭짓점에 $q$ 개의 면이 모이는 볼록다면체에서, 면마다 변이 $p$ 개이고 각 변은 두 면이 공유하므로, 또 꼭짓점마다 간선이 $q$ 개이고 각 간선은 두 꼭짓점을 잇으므로 다음이 성립한다.

$$
pF=2E=qV
$$

이를 Euler 공식에 대입한다.

$$
\frac{2E}{q}-E+\frac{2E}{p}=2\thickspace\Longrightarrow\thickspace E\left(\frac{2}{p}+\frac{2}{q}-1\right)=2
$$

$E$ 가 양수이므로 왼쪽 괄호가 양수여야 하고, 조건은 다음과 같다[^2].

$$
\frac{1}{p}+\frac{1}{q}\gt\frac{1}{2},\qquad p\ge 3,\thinspace\thinspace q\ge 3
$$

$p$ 나 $q$ 가 6 이상이면 나머지가 3일 때조차 합이 $1/2$ 을 넘지 못한다. 두 값은 3, 4, 5 로 제한되고 정수해는 (3,3), (3,4), (4,3), (3,5), (5,3) 다섯 개다. 각각 정사면체, 정팔면체, 정육면체, 정이십면체, 정십이면체에 해당한다. 이 조건은 필요조건이므로 다섯 경우의 실현은 따로 구성한다.

## 곡면의 분류

[곡면의 분류](classification-of-surfaces.md)에 따라 콤팩트 연결 곡면은 구면, 원환면의 연결합, 실사영평면의 연결합 중 하나와 위상동형이다[^3]. Euler 지표는 다음과 같다.

$$
\chi=2-2g\thinspace\thinspace(\text{방향지음 가능, 종수 } g),\qquad \chi=2-k\thinspace\thinspace(\text{방향지음 불가능, 사영평면 } k \text{개})
$$

구면은 2, 원환면은 0, Klein 병은 0, 실사영평면은 1이다. 방향지음 가능 여부와 Euler 지표 두 값이 콤팩트 연결 곡면을 완전히 분류한다. 원환면의 Betti 수 1, 2, 1 의 교대합도 0 이다.

## 곱과 합의 규칙

$$
\chi(X\times Y)=\chi(X)\thinspace\chi(Y),\qquad \chi(X\cup Y)=\chi(X)+\chi(Y)-\chi(X\cap Y)
$$

두 번째 식은 두 조각이 부분복합체로 맞물릴 때 성립하는 [포함배제](inclusion-exclusion.md)의 위상판이고, [Mayer–Vietoris 완전열](mayer-vietoris.md)에 완전열의 덧셈 공식을 적용해 얻는다. 원의 지표가 0 이므로 곱 규칙에서 원환면의 지표 0 이 따른다.

## Gauss–Bonnet

[Gauss–Bonnet 정리](gauss-bonnet.md)에 따르면 콤팩트 방향지음 가능 곡면에서 Gauss [곡률](curvature.md)의 총합은 Euler 지표로 결정된다.

$$
\iint_{M}K\thinspace dA=2\pi\chi(M)
$$

다면체에서는 각 꼭짓점의 각도 결손( $2\pi$ 에서 그 꼭짓점에 모인 면각의 합을 뺀 값)을 모두 더하면 $2\pi\chi$ 가 된다(Descartes 의 결손 정리, Descartes' theorem on total angular defect).

# 활용

- 평면성 판정의 상한: 평면 단순그래프는 $V$ 가 $3$ 이상일 때 $E$ 가 $3V-6$ 이하다. 각 면이 최소 3개의 간선으로 둘러싸이고 각 간선이 두 면에 속하므로 $2E$ 가 $3F$ 이상이고, 이를 Euler 공식에 대입하면 얻어진다. 완전그래프 $K_5$ 는 $V=5$ , $E=10$ 으로 이를 위반하므로 평면그래프가 아니다.
- 지도 색칠: 위 상한에서 차수 5 이하인 꼭짓점의 존재가 따르고, 5색 정리의 증명이 이를 쓴다.
- 메쉬 처리: 삼각망의 $V$ , $E$ , $F$ 에서 지표를 계산해 구멍의 개수를 추정하고 위상 오류를 검출한다. 닫힌 삼각망에서는 $2E=3F$ 이므로 지표가 $V-F/2$ 로 계산된다.
- 조합론: 부호를 번갈아 붙여 세는 논법이 포함배제와 [생성함수](generating-functions.md)에서도 쓰이고, 합의 규칙 $\chi(X\cup Y)=\chi(X)+\chi(Y)-\chi(X\cap Y)$ 가 포함배제와 같은 꼴이다.

[^1]: 삼각화의 단체 개수 교대합이 Betti 수의 교대합과 같다는 진술. J. R. Munkres, *Elements of Algebraic Topology*, §22. 요약: "Euler characteristic", Schools Wikipedia. https://landsurvival.com/schools-wikipedia/wp/e/Euler_characteristic.htm
[^2]: 정다면체 다섯 개의 분류를 Euler 공식과 pF=2E=qV에서 얻는 논법. Wolfram MathWorld, "Platonic Solid". https://mathworld.wolfram.com/PlatonicSolid.html
[^3]: 콤팩트 연결 곡면의 분류와 종수 g 방향지음 가능 곡면의 지표가 2-2g라는 사실. Wolfram MathWorld, "Surface Classification Theorem". https://mathworld.wolfram.com/SurfaceClassificationTheorem.html

# 연관 문서

## 선수지식

- [그래프](graphs.md)
- [단체 호몰로지](homology.md)

## 더 알아보기

- [평면 그래프](planar-graphs.md)
- [곡면의 분류](classification-of-surfaces.md)
- [Gauss–Bonnet 정리](gauss-bonnet.md)

#topology #algebraic_topology #graph_theory #combinatorics
