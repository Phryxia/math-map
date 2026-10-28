# 위상 양자장론

# 개요

**위상 양자장론(topological quantum field theory, TQFT)** 은 도형을 조각으로 잘라 조각마다 정한 계산을 이어 붙여서 도형 전체에 수를 매기는 규칙이다. 닫힌 곡면을 원을 따라 자르면 바지 모양 조각, 원판, 원기둥이 나오는데, 같은 곡면을 다르게 잘라도 같은 수가 나와야 한다. TQFT 는 잘린 원마다 벡터공간을, 조각마다 선형사상을 두고, 조각을 이어 붙이는 것을 사상의 합성으로 계산해 이 요구를 만족시킨다.

# 직관

위상 양자장론은 $n-1$ 차원 닫힌 [다양체](manifolds.md)에 벡터공간을, 그 사이의 $n$ 차원 [코보디즘](cobordism.md)에 선형사상을 대응시키는 규칙이다. 이 규칙은 코보디즘을 이어 붙이는 것을 사상의 합성으로, 분리합을 [텐서곱](tensor-products.md)으로 보낸다. 닫힌 $n$ 차원 다양체는 빈 다양체에서 빈 다양체로 가는 코보디즘이므로 수 하나를 받고, 그 수는 미분동형 불변량이다. 2 차원 TQFT 는 가환 Frobenius 대수와 일대일로 대응한다.

방향을 준 닫힌 곡면마다 수 하나를 정하고 싶다. 곡면은 원을 따라 자르면 바지 모양 조각, 원판, 원기둥으로 나뉜다. 조각마다 계산을 정해 두고 이어 붙인 결과로 전체의 수를 얻으려 한다.

원에 벡터공간 $A$ 를 하나 둔다. 원 두 개가 들어와 하나로 나가는 바지 조각에는 선형사상 $m\colon A\otimes A\to A$ 를, 원 하나가 나가는 원판에는 $A$ 의 원소 $1$ 을, 원 하나가 들어오는 원판에는 선형사상 $\varepsilon\colon A\to k$ 를 둔다. 원 하나가 들어와 둘로 나가는 거꾸로 된 바지 조각에는 $\Delta\colon A\to A\otimes A$ 를 둔다. 조각을 이어 붙이는 것은 사상을 합성하는 것이다.

같은 곡면을 두 가지로 자르면 두 합성이 같아야 한다. 바지 조각 두 개로 원 세 개를 하나로 모으는 방법이 둘이므로 $m(m(a,b),c)=m(a,m(b,c))$ 이고, 원판으로 바지 조각의 한쪽을 막으면 원기둥이므로 $m(1,a)=a$ 다. 이런 등식들이 $A$ 위의 곱 $m$ 을 결합법칙과 단위원을 가진 곱으로 만든다.

$A=\mathbb C\lbrack x\rbrack/(x^2)$ 에 $\varepsilon(1)=0$, $\varepsilon(x)=1$, $\Delta(1)=1\otimes x+x\otimes 1$, $\Delta(x)=x\otimes x$ 를 준다. 원판, $\Delta$, $m$, 원판을 차례로 붙이면 원환면이고 그 수는 $\varepsilon(m(\Delta(1)))=\varepsilon(2x)=2$ 다. 손잡이 하나를 더 달 때마다 $m\Delta$ 를 한 번 더 합성하는데 $m\Delta(x)=0$ 이므로, 이 규칙은 구면에 $0$, 원환면에 $2$, 종수 $2$ 이상의 곡면에 $0$ 을 준다.

# 정의

## 코보디즘 범주

$\mathrm{Bord}\_n$ 은 다음 범주다. 대상은 방향을 준 닫힌 $n-1$ 차원 다양체이고, $M$ 에서 $N$ 으로 가는 사상은 경계가 $\bar M\sqcup N$ 인 방향을 준 콤팩트 $n$ 차원 다양체를 경계를 고정한 미분동형으로 묶은 류다. 합성은 공통 경계를 따라 이어 붙이는 것이고, 항등사상은 원기둥 $M\times\lbrack 0,1\rbrack$ 이다. 분리합 $\sqcup$ 과 빈 다양체가 이 범주를 대칭 [모노이드 범주](monoidal-categories.md)(symmetric monoidal category)로 만든다.

## TQFT

체 $k$ 위의 $n$ 차원 TQFT 는 대칭 모노이드 [함자](functors.md)

$$
Z\colon\mathrm{Bord}\_n\longrightarrow\mathrm{Vect}\_k
$$

다. 곧 $Z(M\sqcup N)\cong Z(M)\otimes Z(N)$ 이고 $Z(\varnothing)=k$ 이다. 닫힌 $n$ 차원 다양체 $W$ 는 $\varnothing$ 에서 $\varnothing$ 으로 가는 사상이므로 $Z(W)\colon k\to k$ 는 수 $Z(W)(1)$ 하나다. 이 공리계는 Atiyah 공리(Atiyah axioms)라 불린다[^1].

## Frobenius 대수

체 $k$ 위의 유한차원 결합대수 $A$ 와 선형사상 $\varepsilon\colon A\to k$ 가 있어 쌍선형형식 $(a,b)\mapsto\varepsilon(ab)$ 가 비퇴화이면 $(A,\varepsilon)$ 을 **Frobenius 대수(Frobenius algebra)** 라 한다. $\varepsilon$ 을 Frobenius 범함수(Frobenius form)라 한다. 비퇴화 형식으로 $A\cong A^\ast$ 이고, $m$ 의 쌍대로 여곱 $\Delta\colon A\to A\otimes A$ 가 정의된다.

# 성질

## 유한차원성

TQFT 의 상태공간 $Z(\Sigma)$ 는 유한차원이다. 원기둥 $\Sigma\times\lbrack 0,1\rbrack$ 을 구부려 $\Sigma\sqcup\bar\Sigma$ 에서 $\varnothing$ 으로 가는 사상과 그 반대로 보면, 이 둘이 $Z(\Sigma)$ 와 $Z(\bar\Sigma)$ 사이의 쌍대성을 주고 항등사상이 유한합으로 적힌다. 원기둥의 양 끝을 붙인 $\Sigma\times S^1$ 의 값이 그 항등사상의 대각합이므로 $Z(\Sigma\times S^1)=\dim Z(\Sigma)$ 다.

## 2 차원 분류 정리

$Z\mapsto Z(S^1)$ 은 2 차원 TQFT 의 범주에서 가환 Frobenius 대수의 범주로 가는 범주 동치다[^2].

증명의 요지는 $\mathrm{Bord}\_2$ 의 생성원과 관계다. 연결된 2 차원 코보디즘은 바지 조각, 거꾸로 된 바지 조각, 두 원판, 원기둥, 두 원을 맞바꾸는 꼬임으로 이어 붙여 만들어진다. [곡면의 분류](classification-of-surfaces.md)로 두 분해가 같은 곡면을 주는지 판정하면 관계는 결합법칙, 단위원, 여결합법칙, 여단위원, 가환성, 그리고 Frobenius 관계

$$
(m\otimes\mathrm{id})(\mathrm{id}\otimes\Delta)=\Delta\circ m=(\mathrm{id}\otimes m)(\Delta\otimes\mathrm{id})
$$

로 모인다. 이 관계들이 정확히 가환 Frobenius 대수의 공리다.

## 닫힌 곡면의 값

$h=m(\Delta(1))\in A$ 를 손잡이 원소라 하면 종수 $g$ 인 닫힌 곡면 $\Sigma_g$ 에 대해

$$
Z(\Sigma_g)=\varepsilon(h^{g})
$$

다. 원환면의 값 $\varepsilon(h)$ 는 $\dim A$ 이고, 이것은 $Z(S^1\times S^1)=\dim Z(S^1)$ 의 경우다. 직관 절의 $A$ 에서 $h=2x$ 다.

## 1 차원 경우

1 차원 TQFT 는 양의 방향 점에 붙인 유한차원 벡터공간 $V$ 로 정해진다. 음의 방향 점에는 $V^\ast$ 가, 구간에는 계산 사상 $V^\ast\otimes V\to k$ 와 그 쌍대가 붙고, 원의 값은 $\dim V$ 다.

# 활용

- [Khovanov 호몰로지](khovanov-homology.md). 매듭 도식의 해소에서 나오는 원의 모임에 $A=\mathbb Z\lbrack X\rbrack/(X^2)$ 가 정하는 2 차원 TQFT 를 적용해 사슬복합체를 만든다. 정육면체의 면이 가환인 것은 두 합성이 같은 코보디즘이기 때문이다.
- 3 차원 불변량. [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)은 [모듈러 텐서범주](modular-tensor-categories.md)에서 3 차원 TQFT 를 만들고, 닫힌 3 차원 다양체의 값이 그 불변량이다.
- 유한군의 세기. 유한군 $G$ 의 군대수의 중심은 가환 Frobenius 대수이고, 이 대수가 정하는 2 차원 TQFT 의 값은 [기본군](fundamental-group.md)에서 $G$ 로 가는 준동형의 개수를 센다. [군의 표현](group-representations.md)으로 적으면 다음 식이 나온다[^3].
  $$
  \frac{\vert\mathrm{Hom}(\pi_1(\Sigma_g),G)\vert}{\vert G\vert}=\sum_{\rho}\left(\frac{\vert G\vert}{\dim\rho}\right)^{2g-2}
  $$
  합은 $G$ 의 기약표현 $\rho$ 전체에 대한 것이다.

[^1]: M. Atiyah, Topological quantum field theories, *Publ. Math. IHÉS* **68** (1988), 175–186.
[^2]: L. Abrams, Two-dimensional topological quantum field theories and Frobenius algebras, *J. Knot Theory Ramifications* **5** (1996), 569–587. 생성원과 관계의 증명은 J. Kock, *Frobenius Algebras and 2D Topological Quantum Field Theories*, Cambridge University Press (2004), 1–3장.
[^3]: A. Mednykh, Determination of the number of nonequivalent coverings over a compact Riemann surface, *Soviet Math. Dokl.* **19** (1978), 318–320.

# 연관 문서

## 선수지식

- [코보디즘](cobordism.md)
- [모노이드 범주](monoidal-categories.md)

## 더 알아보기

- [Khovanov 호몰로지](khovanov-homology.md)

#topology #category_theory #algebra #algebraic_topology
