# 호모토피 동치

# 개요

**호모토피 동치(homotopy equivalence)** 는 두 공간을 연속 변형으로 서로 바꿀 수 있다는 관계다. 반지름 $1$ 인 원과 $2$ 인 원 사이의 고리 모양 땅은 원보다 두껍지만, 땅을 안쪽 원으로 짓눌러도 구멍을 도는 고리는 그대로 남는다. 이 관계는 기본군과 호몰로지를 바꾸지 않으므로, 두꺼운 공간의 불변량은 그 공간과 호모토피 동치인 얇은 공간에서 계산한다.

# 직관

원환 영역(annulus) $A=\lbrace z\in\mathbb C : 1\le\vert z\vert\le 2\rbrace$ 의 [기본군](fundamental-group.md)을 구하려고 한다. $A$ 안의 고리는 두 원 사이를 자유롭게 오가므로 원의 기본군을 구한 방법을 바로 쓸 수 없다.

각 점 $z$ 를 같은 방향의 안쪽 원 위의 점 $z/\vert z\vert$ 로 보내는 사상을 $r\colon A\to S^1$ 이라 하고, 원을 $A$ 에 넣는 포함사상을 $i\colon S^1\to A$ 라 한다. 원 위의 점은 $r$ 로 움직이지 않으므로 $r\circ i$ 는 원의 항등사상이다.

반대 순서의 $i\circ r$ 은 $A$ 의 항등사상이 아니다. 그러나 다음 식은 $t=0$ 에서 $z$, $t=1$ 에서 $z/\vert z\vert$ 이고, 그 사이의 점은 모두 $z$ 와 $z/\vert z\vert$ 를 잇는 선분 위에 있어 $A$ 를 벗어나지 않는다.

$$
H(z,t)=(1-t)z+t\frac{z}{\vert z\vert}
$$

그래서 $A$ 의 고리 $f$ 는 $H(f(s),t)$ 를 따라 원 위의 고리 $r\circ f$ 로 연속적으로 옮겨지고, $A$ 의 기본군은 원의 기본군 $\mathbb Z$ 와 같다. 두 사상 $r$ 과 $i$ 를 어느 순서로 합성해도 항등사상과 연속 변형으로 이어지는 관계가 호모토피 동치다.

# 정의

## 사상의 호모토피

$X,Y$ 가 위상공간이고 $f,g\colon X\to Y$ 가 연속사상일 때, $f$ 에서 $g$ 로 가는 **호모토피(homotopy)** 는 다음을 만족하는 연속사상 $H\colon X\times\lbrack 0,1\rbrack\to Y$ 다.

$$
H(x,0)=f(x),\qquad H(x,1)=g(x)
$$

호모토피가 있으면 $f$ 와 $g$ 가 **호모토픽(homotopic)** 하다고 하고 $f\simeq g$ 로 쓴다. 직관 절의 $H$ 는 $A$ 의 항등사상에서 $i\circ r$ 로 가는 호모토피이므로 $\mathrm{id}\_A\simeq i\circ r$ 이다.

## 호모토피 동치

연속사상 $f\colon X\to Y$ 에 대해 다음을 만족하는 연속사상 $g\colon Y\to X$ 가 있으면 $f$ 를 **호모토피 동치** 라 하고, $g$ 를 $f$ 의 **호모토피 역(homotopy inverse)** 이라 한다.

$$
g\circ f\simeq\mathrm{id}\_X,\qquad f\circ g\simeq\mathrm{id}\_Y
$$

호모토피 동치가 있으면 $X$ 와 $Y$ 가 호모토피 동치라 하고 $X\simeq Y$ 로 쓴다. 직관 절에서 $r$ 은 호모토피 동치이고 $i$ 가 그 호모토피 역이다. $r\circ i$ 는 항등사상과 같고, $i\circ r$ 은 $H$ 로 항등사상과 호모토픽하다.

## 변형 수축

부분공간 $B\subset X$ 에 대해 다음을 만족하는 호모토피 $H\colon X\times\lbrack 0,1\rbrack\to X$ 가 있으면 $B$ 를 $X$ 의 **변형 수축(deformation retract)** 이라 한다.

$$
H(x,0)=x,\qquad H(x,1)\in B,\qquad H(b,t)=b\quad(b\in B)
$$

직관 절의 $H$ 에서 $\vert z\vert=1$ 이면 $H(z,t)=z$ 이므로, 안쪽 원은 $A$ 의 변형 수축이다. [Möbius 띠](mobius-strip.md)의 중심원도 Möbius 띠의 변형 수축이다. 변형 수축의 포함사상은 호모토피 동치이고, $H(\cdot,1)$ 이 그 호모토피 역이다.

## 축약 가능한 공간

한 점과 호모토피 동치인 공간을 **축약 가능(contractible)** 하다고 한다. $\mathbb R^n$ 은 $H(x,t)=(1-t)x$ 로 원점을 변형 수축으로 가지므로 축약 가능하다.

# 성질

## 동치관계

호모토피 동치는 위상공간 사이의 [동치관계](equivalence-relations.md)다. $f\colon X\to Y$ 와 $f'\colon Y\to Z$ 가 호모토피 역 $g, g'$ 을 가지면 다음이 성립하므로 $f'\circ f$ 의 호모토피 역은 $g\circ g'$ 이다.

$$
g\circ g'\circ f'\circ f\simeq g\circ\mathrm{id}\_Y\circ f=g\circ f\simeq\mathrm{id}\_X
$$

첫 단계는 $g'\circ f'$ 에서 $\mathrm{id}\_Y$ 로 가는 호모토피 $K$ 의 양쪽에 $g$ 와 $f$ 를 합성한 $g\circ K(f(x),t)$ 다. 반대쪽 합성도 같다.

## 기본군의 불변성

$f\colon X\to Y$ 가 호모토피 동치이면 유도 준동형 $f\_\ast\colon\pi_1(X,x_0)\to\pi_1(Y,f(x_0))$ 은 동형이다.

증명의 요지. 호모토피 $H$ 로 $\varphi\simeq\psi$ 이면, 기준점이 지나는 경로 $h(t)=H(x_0,t)$ 를 써서 $\psi\_\ast$ 는 $\varphi\_\ast$ 에 $\lbrack\gamma\rbrack\mapsto\lbrack\bar h\ast\gamma\ast h\rbrack$ 꼴의 동형을 합성한 것이다. $g\circ f\simeq\mathrm{id}\_X$ 에서 $g\_\ast\circ f\_\ast$ 가 동형이므로 $f\_\ast$ 는 단사이고, $f\circ g\simeq\mathrm{id}\_Y$ 에서 $f\_\ast\circ g\_\ast$ 가 동형이므로 $f\_\ast$ 는 전사다.

## 호몰로지와 Euler 지표의 불변성

호모토픽한 두 사상은 [단체 호몰로지](homology.md)에 같은 준동형을 유도한다. 그래서 호모토피 동치는 모든 차수의 호몰로지군의 동형을 주고, 호몰로지로 계산되는 [Euler 지표](euler-characteristic.md)도 같다. 원환 영역과 원의 Euler 지표는 둘 다 $0$ 이다.

## 위상동형과의 관계

위상동형은 호모토피 동치이지만 역은 성립하지 않는다. 직선 $\mathbb R$ 과 한 점은 축약 가능하므로 호모토피 동치이지만, 직선은 무한집합이고 한 점은 아니므로 위상동형이 아니다. 호모토피 동치는 차원을 지키지 않는다. 원판과 한 점이 호모토피 동치다.

## 계산 예

- $\mathbb R^n\setminus\lbrace 0\rbrace$ 은 $x\mapsto x/\vert x\vert$ 와 직관 절과 같은 직선 호모토피로 구면 $S^{n-1}$ 과 호모토피 동치다.
- 원기둥과 Möbius 띠는 중심원으로 변형 수축되므로 원과 호모토피 동치다.
- 연결 [그래프](graphs.md)는 신장 나무(spanning tree) 하나를 한 점으로 오므리면 원 $E-V+1$ 개를 한 점에서 붙인 공간과 호모토피 동치다. 여기서 $V$ 는 꼭짓점 수, $E$ 는 변 수다.

## Whitehead 정리

[CW 복합체](cw-complexes.md) 사이의 연속사상이 모든 차수의 [호모토피군](homotopy-groups.md)에 동형을 유도하면 호모토피 동치다. 이것을 Whitehead 정리(Whitehead theorem)라 한다. CW 복합체가 아닌 공간에서는 성립하지 않는다. 바르샤바 원(Warsaw circle)은 모든 호모토피군이 자명하지만 축약 가능하지 않다.

# 활용

- [호모토피 연장 성질](homotopy-extension-property.md). 축약 가능한 부분복합체를 한 점으로 오므리는 몫사상이 호모토피 동치라는 것을 증명하고, 계산 예의 그래프를 원들의 묶음으로 바꾸는 데 쓴다.
- [신경 정리](nerve-theorem.md). 겹침이 모두 축약 가능한 덮개의 신경은 원래 공간과 호모토피 동치이고, 데이터에서 만든 단체복합체로 공간의 호몰로지를 계산하는 근거가 된다.
- [de Rham 코호몰로지](de-rham-cohomology.md). 호모토피 동치인 다양체는 같은 de Rham 코호몰로지를 갖고, 축약 가능한 영역에서는 닫힌 형식이 완전 형식이다.
- [분류공간](classifying-spaces.md). 파라콤팩트(paracompact) 공간 위의 [벡터다발](vector-bundles.md)은 분류사상의 호모토피류로 정해지므로, 호모토피 동치인 두 바탕공간 위의 다발 동형류는 일대일로 대응한다.

# 연관 문서

## 선수지식

- [기본군](fundamental-group.md)

## 더 알아보기

- [호모토피 연장 성질](homotopy-extension-property.md)

#algebraic_topology #topology
