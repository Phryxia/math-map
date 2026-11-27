# Morley 삼등분선 정리

# 개요

**Morley 삼등분선 정리(Morley's trisector theorem)** 는 삼각형의 세 각을 각각 삼등분하는 선을 그으면, 각 변에 가까운 두 삼등분선의 교점 세 개가 정삼각형을 이룬다는 정리다. 각의 이등분선은 한 점에서 만나지만, 삼등분선은 여섯 개라 교점이 많고 어느 것이 특별한지 바로 보이지 않는다. 변마다 그 변에 붙은 두 삼등분선의 교점을 고르면 어떤 삼각형에서든 정삼각형이 나오고, 그 한 변의 길이는 외접원의 반지름과 세 각의 삼분의 일에 대한 [삼각함수](trigonometric-functions.md)로 적힌다.

# 직관

$A=(0,0)$, $B=(2,0)$, $C=(0,2)$ 인 직각이등변삼각형에서 각은 $A$ 가 $90°$, $B$ 와 $C$ 가 $45°$ 다. 삼등분하면 $A$ 에서는 $30°$, $B$ 와 $C$ 에서는 $15°$ 씩이다.

- 변 $BC$ 에 붙은 두 삼등분선은 $B$ 에서 $BC$ 와 $15°$ 를 이루는 선과 $C$ 에서 $CB$ 와 $15°$ 를 이루는 선이고, 대칭이므로 직선 $y=x$ 위에서 만난다. 교점은 $P_a=(\sqrt3-1,\sqrt3-1)$ 이다.
- 변 $CA$ 에 붙은 두 삼등분선, 곧 $A$ 에서 $y$ 축과 $30°$ 를 이루는 선과 $C$ 에서 $CA$ 와 $15°$ 를 이루는 선의 교점은 $P_b=\left(\frac{\sqrt3-1}2,\frac{3-\sqrt3}2\right)$ 이다.
- 변 $AB$ 쪽 교점은 대칭으로 $P_c=\left(\frac{3-\sqrt3}2,\frac{\sqrt3-1}2\right)$ 이다.

세 거리의 제곱은 모두 $14-8\sqrt3$ 이다. $P_bP_c$ 는 $y=x$ 에 수직인 방향이라 계산이 바로 되고, $P_aP_b$ 는 성분이 $\frac{\sqrt3-1}2$ 와 $\frac{3\sqrt3-5}2$ 라 제곱의 합이 같은 값이다. 원래 삼각형은 정삼각형이 아닌데 세 교점은 한 변이 $\sqrt2(2-\sqrt3)\approx 0.379$ 인 정삼각형이다.

# 정의

## Morley 삼각형

삼각형 $ABC$ 의 세 각을 $3\alpha$, $3\beta$, $3\gamma$ 라 하면 $\alpha+\beta+\gamma=60°$ 다. 꼭짓점 $B$ 에서 변 $BC$ 와 $\beta$ 를 이루는 삼등분선과 꼭짓점 $C$ 에서 변 $CB$ 와 $\gamma$ 를 이루는 삼등분선의 교점을 $P_a$ 라 한다. 같은 방법으로 변 $CA$ 쪽 교점 $P_b$, 변 $AB$ 쪽 교점 $P_c$ 를 정한다.

삼각형 $P_aP_bP_c$ 를 **Morley 삼각형(Morley triangle)** 이라 한다. 직관 절에서는 $\alpha=30°$, $\beta=\gamma=15°$ 다.

# 성질

## Morley 정리

Morley 삼각형은 정삼각형이고, 외접원의 반지름을 $R$ 이라 하면 한 변의 길이는 다음과 같다.

$$
8R\sin\alpha\sin\beta\sin\gamma
$$

직관 절에서는 $R=\sqrt2$ 이므로 다음과 같다.

$$
8\sqrt2\sin 30°\sin^2 15°=4\sqrt2\cdot\frac{2-\sqrt3}{4}=\sqrt2(2-\sqrt3)
$$

증명의 요지. 세배각 공식은 다음 곱의 꼴로 쓸 수 있다.

$$
\sin 3\alpha=4\sin\alpha\sin(60°+\alpha)\sin(60°-\alpha)
$$

삼각형 $BP_aC$ 에 사인 법칙(law of sines)을 쓰면 $BP_a=a\sin\gamma/\sin(\beta+\gamma)$ 이고, $a=2R\sin 3\alpha$ 와 $\beta+\gamma=60°-\alpha$ 에서 $BP_a=8R\sin\alpha\sin\gamma\sin(60°+\alpha)$ 가 나온다. 같은 방법으로 $BP_c=8R\sin\alpha\sin\gamma\sin(60°+\gamma)$ 이다.

삼각형 $BP_aP_c$ 는 $B$ 에서의 끼인각이 $\beta$ 이고 두 변이 $\sin(60°+\alpha)$ 와 $\sin(60°+\gamma)$ 에 비례한다. 세 각 $60°+\alpha$, $60°+\gamma$, $\beta$ 의 합이 $180°$ 이므로 이 삼각형은 그 세 각을 갖는 삼각형과 닮았고, 셋째 변은 $\sin\beta$ 에 비례한다. 따라서 $P_aP_c=8R\sin\alpha\sin\beta\sin\gamma$ 이고, 이 값이 세 변에서 같다.

## 역방향 구성

정삼각형에서 시작해 거꾸로 삼각형을 만드는 Conway 의 증명도 있다. 정삼각형의 바깥에 각을 $\alpha,\beta,\gamma$ 로 정한 삼각형들을 붙여 각이 $3\alpha,3\beta,3\gamma$ 인 삼각형을 만들고, 처음 정삼각형이 그 삼각형의 Morley 삼각형임을 확인한다. 삼각형은 세 각으로 닮음이 정해지므로 이것으로 모든 삼각형에서 정리가 성립한다.

# 활용

- 작도의 한계와의 대비. 일반적인 각의 삼등분은 눈금 없는 자와 컴퍼스로 작도할 수 없다. Morley 정리는 작도와 무관하게 삼등분선이 존재한다고 놓고 그 교점의 위치를 다룬다.
- 삼각함수 항등식. 증명에 쓰이는 세배각 공식의 곱 꼴은 $\sin(60°+\alpha)\sin(60°-\alpha)=3/4-\sin^2\alpha$ 에서 나오고, 같은 꼴의 곱이 삼각형의 길이 계산에 쓰인다.
- 군으로 하는 증명. Connes 는 꼭짓점을 중심으로 한 회전을 [복소수](complex-numbers.md)의 아핀 사상 $z\mapsto az+b$ 로 적고, 세 회전 $g_1,g_2,g_3$ 에 대해 $g_1^3g_2^3g_3^3=1$ 이면 $g_1g_2$, $g_2g_3$, $g_3g_1$ 의 고정점이 정삼각형을 이룬다는 군의 항등식으로 이 정리를 증명했다[^1]. [Napoleon 정리](napoleon-theorem.md)도 세 회전의 곱으로 증명되는 같은 부류다.

[^1]: A. Connes, "A new proof of Morley's theorem", Publications Mathématiques de l'IHÉS 88 (1998), 43–46.

# 연관 문서

## 선수지식

- [삼각함수](trigonometric-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #combinatorics
