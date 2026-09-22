# 코호몰로지

# 개요

코호몰로지는 사슬에 계수를 대응시키는 함수들로 만든 불변량이다. 호몰로지가 공간의 사슬을 직접 다루는 데 비해 코호몰로지는 그 사슬 위의 함수를 다루고, 함수끼리 곱할 수 있으므로 차수를 넘나드는 곱셈 구조가 생긴다. 이 곱이 호몰로지군만으로는 구별되지 않는 공간을 가른다.

# 직관

복소사영평면 $\mathbb{CP}^2$ 와 구 두 개를 한 점에서 붙인 $S^2\vee S^4$ 를 견준다. [단체 호몰로지](homology.md)를 계산하면 둘 다 $H_0=H_2=H_4=\mathbb Z$ 이고 나머지 차수는 $0$ 이다. 군만 보면 두 공간이 같다.

두 공간은 같지 않다. $\mathbb{CP}^2$ 에서 두 직선은 한 점에서 만나고, 그 교점이 2 차원 순환 둘에서 4 차원 정보를 만든다. $S^2\vee S^4$ 에서는 $S^2$ 를 두 번 겹쳐도 $S^4$ 쪽으로 아무것도 나오지 않는다. 호몰로지군은 차수마다 따로 놓인 군이라 이 차이를 담지 못한다.

2 차 순환 두 개에서 4 차의 값을 얻으려면 곱셈이 있어야 한다. 순환끼리는 곱할 수 없지만 순환에 수를 대응시키는 함수끼리는 곱할 수 있다. 2 차 사슬에 수를 주는 함수 $\varphi$ 와 $\psi$ 가 있을 때, 4 차 단체를 앞의 두 면과 뒤의 두 면으로 자르고 각 조각에 $\varphi$ 와 $\psi$ 를 매겨 곱하면 4 차 사슬에 수를 주는 함수가 된다.

이 곱을 $\mathbb{CP}^2$ 에서 계산하면 2 차 생성원 $x$ 에 대해 $x\cup x$ 가 4 차 생성원이고, $S^2\vee S^4$ 에서는 $x\cup x=0$ 이다. 두 공간이 갈린다.

# 정의

## 쌍대 사슬 복합체

$(C_\bullet,\partial)$ 을 공간 $X$ 의 사슬 복합체, $R$ 를 가환환이라 하자. $C^n=\mathrm{Hom}(C_n,R)$ 로 두고 **코경계 연산자**를 $\partial$ 의 쌍대로 정의한다.

$$(\delta\varphi)(c)=\varphi(\partial c),\qquad \varphi\in C^n,\ c\in C_{n+1}$$

$\partial\partial=0$ 에서 $\delta\delta=0$ 이 따라오므로 $(C^\bullet,\delta)$ 는 복합체이고, 화살표 방향만 반대다. **코호몰로지군**은 그 상동군이다.

$$H^n(X;R)=\ker\delta^n/\mathrm{im}\thinspace\delta^{n-1}$$

$\ker\delta^n$ 의 원소를 코사이클, $\mathrm{im}\thinspace\delta^{n-1}$ 의 원소를 코경계라 한다.

## 함자성

연속사상 $f:X\to Y$ 는 사슬 사상 $f\_\ast:C\_\bullet(X)\to C\_\bullet(Y)$ 를 주고, 그 쌍대가 $f^\ast:H^n(Y;R)\to H^n(X;R)$ 이다. 화살표가 뒤집히므로 코호몰로지는 반변 함자다.

## 컵곱

특이 사슬에서 $n+m$ 차 단체 $\sigma$ 의 앞 $n$ 개 꼭짓점이 펼치는 면을 $\sigma\vert\_{\lbrack 0..n\rbrack}$ , 뒤 $m$ 개가 펼치는 면을 $\sigma\vert\_{\lbrack n..n+m\rbrack}$ 라 쓴다.

$$(\varphi\cup\psi)(\sigma)=\varphi(\sigma\vert\_{\lbrack 0..n\rbrack})\thinspace\psi(\sigma\vert\_{\lbrack n..n+m\rbrack})$$

이 곱은 $\delta(\varphi\cup\psi)=\delta\varphi\cup\psi+(-1)^n\varphi\cup\delta\psi$ 를 만족하므로 코호몰로지로 내려가고, $H^\ast(X;R)=\bigoplus_n H^n(X;R)$ 은 등급환이 된다. 이것이 **코호몰로지환**이다.

# 성질

## 보편계수 정리

$R$ 가 주아이디얼정역이면 각 $n$ 에 대해 다음 완전열이 있고 분해한다.

$$0\to\mathrm{Ext}^1(H_{n-1}(X),R)\to H^n(X;R)\to\mathrm{Hom}(H_n(X),R)\to 0$$

계수가 체이면 $\mathrm{Ext}$ 항이 사라져 $H^n$ 이 $H_n$ 의 쌍대공간이다. 분해는 자연스럽지 않으므로 이 동형으로 사상 $f^\ast$ 를 읽을 수는 없다. 군만 보면 코호몰로지는 호몰로지에서 결정되고, 새로운 정보는 컵곱에서 나온다.

## 등급 가환성

$\varphi\in H^n$ 과 $\psi\in H^m$ 에 대해 $\varphi\cup\psi=(-1)^{nm}\psi\cup\varphi$ 다. 사슬 수준의 컵곱은 가환이 아니고, 두 순서의 차이가 코경계임을 보이는 사슬 호모토피가 증명의 요지다.

## 두 공간의 구별

$H^\ast(\mathbb{CP}^2;\mathbb Z)=\mathbb Z\lbrack x\rbrack/(x^3)$ 이고 $\deg x=2$ 다. $H^\ast(S^2\vee S^4;\mathbb Z)$ 에서는 서로 다른 쐐기 성분에서 온 두 류의 곱이 $0$ 이다. 두 환이 동형이 아니므로 두 공간은 호모토피 동치가 아니다. 호몰로지군은 같았으므로 컵곱이 구별을 준다.

## Poincaré 쌍대성

$M$ 이 닫힌 유향 $n$ 다양체이면 기본류 $\lbrack M\rbrack\in H_n(M)$ 과의 cap 곱이 동형 $H^k(M;R)\to H_{n-k}(M;R)$ 을 준다. 이 동형 아래 컵곱은 부분다양체의 교차에 대응하고, 상보적 차수의 두 류의 곱을 기본류에서 값매김한 수가 교차수다.

# 활용

- **장애류.** [장애 이론](obstruction-theory.md)에서 사상을 한 차원 더 늘리려 할 때 생기는 장애가 코호몰로지류 하나다. [Postnikov 탑](postnikov-tower.md)의 k-불변량도 같은 형태다.
- **특성류.** [특성류](characteristic-classes.md)는 벡터다발에 코호몰로지류를 대응시키고, 다발의 곱에 대한 규칙이 컵곱으로 적힌다.
- **미분형식.** [de Rham 코호몰로지](de-rham-cohomology.md)는 매끄러운 다양체에서 실계수 특이 코호몰로지와 같고, 쐐기곱이 컵곱에 대응한다.
- **군 코호몰로지.** 군 $G$ 에 대해 $H^\ast(K(G,1);A)$ 를 $G$ 의 코호몰로지라 하고, $H^2$ 가 [군 확대](group-extensions.md)를 분류한다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002. 3장이 보편계수 정리, 컵곱, Poincaré 쌍대성을 다루고 3.1절 끝의 예가 $\mathbb{CP}^2$ 와 $S^2\vee S^4$ 의 구별이다.

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)

## 더 알아보기

- [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)

#algebraic_topology #topology #algebra
