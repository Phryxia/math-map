# 신경 정리

# 개요

**신경 정리(nerve theorem)** 는 공간을 조각들로 덮었을 때, 어느 조각들이 서로 겹치는지만 적은 단체복합체가 원래 공간과 같은 모양을 갖는다는 정리다. 지도의 동네 몇 개가 도시를 덮을 때, 겹치는 두 동네를 선분으로 잇고 셋이 함께 겹치면 삼각형을 채운 그림이 도시의 구멍(호수나 공원)을 그대로 보여 주는지가 문제다. 신경 정리는 겹친 부분이 모두 한 점으로 줄어드는 모양이면 이 그림이 공간과 호모토피 동치임을 보여, 공간의 [단체 호몰로지](homology.md)를 겹침의 조합만으로 계산하게 한다.

# 직관

원 $S^1$ 을 열린 호 세 개 $U_1$, $U_2$, $U_3$ 으로 덮되, 이웃한 두 호는 짧은 호 하나에서 겹치고 세 호가 함께 겹치는 점은 없게 한다. 호마다 꼭짓점 하나를 두고 겹치는 두 호의 꼭짓점을 선분으로 이으면 삼각형의 세 변이 나온다. 세 호가 함께 겹치지 않으므로 삼각형은 채우지 않는다. 그 결과는 삼각형의 테두리이고 원과 위상동형이다.

같은 원을 열린 호 두 개로 덮으면 두 호는 원의 양쪽에서 겹쳐 겹친 부분이 두 조각이다. 꼭짓점 둘을 선분 하나로 이은 그림은 한 점으로 줄어들고 원의 구멍이 사라진다. 겹친 부분이 두 조각으로 갈라져 있어서, 겹친다는 사실 하나만 적으면 구멍의 정보가 빠진다. 겹친 부분이 모두 한 덩어리이고 구멍도 없으면 이런 일이 생기지 않는다는 것이 신경 정리다.

# 정의

## 신경

집합 $X$ 의 부분집합 족 $\mathcal U=\lbrace U_i\rbrace\_{i\in I}$ 의 **신경(nerve)** $N(\mathcal U)$ 은 꼭짓점 집합이 $I$ 이고, 유한 부분집합 $\sigma\subseteq I$ 가 단체가 되는 것이 $\bigcap_{i\in\sigma}U_i\ne\varnothing$ 인 것과 동치인 단체복합체다. 교집합이 공집합이 아니면 그 부분족의 교집합도 공집합이 아니므로 면 조건이 성립한다. 직관 절의 호 세 개의 신경은 꼭짓점 셋과 변 셋이고, 호 두 개의 신경은 꼭짓점 둘과 변 하나다.

## 좋은 덮개

두 연속사상 $f,g\colon X\to Y$ 가 연속사상 $H\colon X\times\lbrack 0,1\rbrack\to Y$ 로 $H(\cdot,0)=f$, $H(\cdot,1)=g$ 를 만족하면 $f$ 와 $g$ 가 **호모토픽(homotopic)** 하다고 한다. 연속사상 $f\colon X\to Y$ 와 $g\colon Y\to X$ 가 있어 $g\circ f$ 와 $f\circ g$ 가 각각 항등사상과 호모토픽하면 $X$ 와 $Y$ 는 **호모토피 동치(homotopy equivalent)** 다. 한 점과 호모토피 동치인 공간을 **축약 가능(contractible)** 하다고 한다. 열린 호와 볼록 집합은 축약 가능하고, 두 조각으로 된 집합은 축약 가능하지 않다.

위상공간 $X$ 의 열린 덮개 $\mathcal U$ 에서 공집합이 아닌 모든 유한 교집합이 축약 가능하면 $\mathcal U$ 를 **좋은 덮개(good cover)** 라 한다. 직관 절의 호 세 개는 좋은 덮개이고, 호 두 개는 교집합이 두 조각이라 좋은 덮개가 아니다.

# 성질

## 정리의 진술

$X$ 가 파라콤팩트(paracompact) 공간이고 $\mathcal U$ 가 $X$ 의 좋은 덮개이면 $X$ 와 신경의 다면체 $\vert N(\mathcal U)\vert$ 는 호모토피 동치다(Borsuk, 1948; Weil, 1952)[^1]. 거리 공간은 파라콤팩트이므로 Euclid 공간의 부분집합에 언제나 쓸 수 있다.

$\mathbb R^d$ 의 콤팩트 볼록 집합 유한 개의 족 $\mathcal C$ 에서도 같은 결론이 성립한다. 볼록 집합의 교집합은 공집합이거나 볼록이어서 축약 가능하고, 합집합 $\bigcup\mathcal C$ 와 $\vert N(\mathcal C)\vert$ 가 호모토피 동치다.

## 증명의 요지

$\mathcal U$ 에 종속된 단위 분할 $\lbrace\varphi_i\rbrace$, 곧 $\varphi_i$ 의 지지가 $U_i$ 안에 있고 합이 $1$ 인 연속함수들을 잡는다. 점 $x$ 를 꼭짓점 $v_i$ 들의 무게중심 결합으로 보내는 사상이 $X$ 에서 신경의 다면체로 간다.

$$
x\mapsto\sum_{i}\varphi_i(x)\thinspace v_i
$$

$\varphi_i(x)\gt 0$ 인 $i$ 들의 $U_i$ 는 모두 $x$ 를 포함하므로 이 점은 신경의 한 단체 안에 있다. 거꾸로 가는 사상은 단체의 차원 순으로 만든다. 꼭짓점 $v_i$ 는 $U_i$ 의 한 점으로 보내고, 단체 $\sigma$ 의 경계까지 정의된 사상을 $\bigcap_{i\in\sigma}U_i$ 안으로 연장할 때 그 교집합이 축약 가능하다는 가정을 쓴다. 두 사상의 합성이 항등사상과 호모토픽하다는 것도 같은 연장 논법으로 보인다.

## 호몰로지 판본

공집합이 아닌 모든 유한 교집합의 축약 호몰로지가 $0$ 이면, 축약 가능까지 요구하지 않아도 $H_k(X)\cong H_k(N(\mathcal U))$ 가 모든 $k$ 에서 성립한다(Leray). 두 집합 $U$, $V$ 로 된 덮개에서는 [Mayer–Vietoris 완전열](mayer-vietoris.md)의 $\tilde H_k(U)=\tilde H_k(V)=\tilde H_k(U\cap V)=0$ 인 경우이고, 이때 $X$ 와 신경인 선분이 모두 축약 호몰로지가 $0$ 이다. 일반적인 경우는 덮개의 교집합들 위의 이중 복합체로 같은 계산을 한다.

## Čech 복합체

거리 공간의 유한 점 집합 $P$ 와 $r\gt 0$ 에 대해, 점마다 반지름 $r$ 인 닫힌 공을 놓은 족의 신경을 **Čech 복합체(Čech complex)** $\check C(P,r)$ 이라 한다. Euclid 공간에서 공은 볼록이므로 신경 정리로 공들의 합집합과 $\check C(P,r)$ 은 호모토피 동치다. [지속 호몰로지](persistent-homology.md)의 Vietoris–Rips 복합체 $\mathrm{VR}(P,s)$ 는 지름이 $s$ 이하인 부분집합들로 되어 있고, 두 복합체 사이에 다음 포함이 성립한다.

$$
\check C(P,r)\subseteq\mathrm{VR}(P,2r)\subseteq\check C(P,2r)
$$

앞의 포함은 공 두 개가 만나면 중심 사이의 거리가 $2r$ 이하라는 것에서, 뒤의 포함은 지름이 $2r$ 이하인 점 집합의 한 점이 다른 모든 점의 반지름 $2r$ 공에 들어 있다는 것에서 나온다.

# 활용

- Helly 정리. [Helly 정리](helly-theorem.md)는 $\mathbb R^d$ 의 볼록 집합 유한 개에서 어느 $d+1$ 개든 교집합이 있으면 전체에도 교집합이 있다는 정리다. 콤팩트 볼록 다면체의 족에서 반례가 있으면 전체 교집합은 비었지만 진부분족은 모두 교집합이 있는 최소 부분족 $m\ge d+2$ 개가 있다. 그 신경은 $(m-1)$ 단체의 경계, 곧 구면 $S^{m-2}$ 이므로 합집합의 $m-2$ 차 호몰로지가 $\mathbb Z$ 다. 그런데 $\mathbb R^d$ 안의 콤팩트 다면체는 [Alexander 쌍대성](alexander-duality.md)으로 $d$ 차 이상의 호몰로지가 $0$ 이고 $m-2\ge d$ 이므로 모순이다. 볼록 집합 대신 교집합이 축약 가능한 집합들의 족에서도 같은 논증이 성립하고, 이것을 위상적 Helly 정리(topological Helly theorem)라 한다.
- 위상 데이터 분석. 점구름 주위의 공들의 합집합이 표본을 뽑은 공간의 모양을 따라가고, 신경 정리로 그 합집합의 호몰로지를 Čech 복합체에서 계산한다. 위의 포함으로 계산하기 쉬운 Vietoris–Rips 복합체의 바코드가 Čech 복합체의 바코드와 반지름 배율 $2$ 안에서 맞는다.
- Čech 코호몰로지. 좋은 덮개를 고르면 공간의 코호몰로지가 신경의 단체 코호몰로지와 같고, 다양체의 Čech 코호몰로지와 [de Rham 코호몰로지](de-rham-cohomology.md)를 비교하는 de Rham 정리의 증명에서 좋은 덮개의 신경을 쓴다.

[^1]: K. Borsuk, "On the imbedding of systems of compacta in simplicial complexes", Fundamenta Mathematicae 35 (1948), 217–234. A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 4G 절 Corollary 4G.3.

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #combinatorics
