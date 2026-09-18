# Riemann 곡면과 균일화 정리

# 개요

$\sqrt z$ 나 $\log z$ 는 [정칙함수](holomorphic-functions.md)로서 복소평면 위에서 한 값으로 정의되지 않는다. 원점을 한 바퀴 돌면 다른 가지로 넘어가기 때문이다. 여러 장의 평면을 가지가 바뀌는 곳에서 이어 붙이면 그 위에서 함수가 한 값이 된다. 그렇게 얻은 대상이 Riemann 곡면이다.

Riemann 곡면은 복소구조를 가진 1 차원 복소다양체다. 위상적으로는 [곡면](classification-of-surfaces.md)이고 그 위에 복소좌표가 정칙 전이함수로 붙어 있다. 위상은 종수 하나로 분류되지만 복소구조는 같은 곡면 위에서 연속적인 족을 이룬다. 이 자유도에서 [Teichmüller 공간](teichmuller-space.md)과 모듈라이 문제가 나온다.

**균일화 정리**는 단순연결 Riemann 곡면이 동형을 빼고 구, 평면, 원판 셋뿐이라고 말한다. 임의의 Riemann 곡면은 이 셋 가운데 하나를 [보편덮개](covering-spaces.md)로 가지므로 덮개변환군으로 몫을 취한 꼴로 기술된다. 복소해석적 분류가 세 모형으로 환원되고, 남는 자유도가 덮개변환군의 선택이다.

# 직관

## 가지를 펴는 구성

$w^2=z$ 에서는 $z\ne0$ 마다 $w$ 가 둘이다. 평면 두 장을 음의 실축을 따라 잘라 놓고 첫 장의 위쪽 가장자리를 둘째 장의 아래쪽 가장자리에 붙이면 원점을 한 바퀴 돌 때 다른 장으로 넘어가고 두 바퀴를 돌아야 제자리가 된다.

이 공간 위에서 $w$ 는 단일값 정칙함수다. 이 공간은 다시 구와 같고, $w$ 를 좌표로 쓰면 $z=w^2$ 이다. Riemann 곡면은 다가함수가 단일값이 되도록 정의역을 최소한으로 늘린 것이고, 원래의 다가성은 곡면에서 평면으로 내려가는 사상의 겹수가 된다.

## 세 모형

복소구조는 등각구조이고 등각구조는 곡률을 하나로 정규화한다. 곡률의 부호가 양, 영, 음 셋이고 각각에 대응하는 완비 단순연결 모형이 구, 평면, 원판이다.

| 모형 | 곡률 | 자기동형군 | 부피 |
| --- | --- | --- | --- |
| $\widehat{\mathbb C}=\mathbb P^1$ | $+1$ | $\mathrm{PSL}\_2(\mathbb C)$ | 유한 |
| $\mathbb C$ | $0$ | $z\mapsto az+b$ | 무한 |
| $\mathbb H$ 또는 $\mathbb D$ | $-1$ | $\mathrm{PSL}\_2(\mathbb R)$ | 무한 |

자기동형군의 크기가 셋을 가른다. 구의 자기동형은 3 차원 복소군이고 평면은 그보다 작으며 원판은 3 차원 실군이다. 이 차이가 몫공간의 풍부함을 정한다. 구로 덮이는 곡면은 구뿐이고, 평면으로 덮이는 것은 평면과 원기둥과 [토러스](classification-of-surfaces.md)뿐이며, 나머지는 원판으로 덮인다.

## 쌍곡 곡면의 우세

종수 $g$ 의 콤팩트 곡면에서 Euler 지표는 $2-2g$ 다. Gauss–Bonnet 이 곡률 적분을 이 값에 묶으므로 $g\ge2$ 이면 평균 곡률이 음수이고 모형은 원판이다. $g=0$ 이면 구, $g=1$ 이면 평면이다. 위상이 세 모형 가운데 어느 것인지를 정하고, 복소구조는 덮개변환군을 $\mathrm{PSL}\_2(\mathbb R)$ 안에서 어떻게 잡느냐를 정한다.

종수가 모형을 정하고 모형 안에서의 군 선택이 모듈라이를 이룬다.

# 정의

## Riemann 곡면

연결된 Hausdorff 위상공간 $X$ 에 열린덮개 $\lbrace U_i\rbrace$ 와 위상동형 $\varphi_i:U_i\to V_i\subset\mathbb C$ 가 주어지고, 겹치는 곳에서 전이함수

$$
\varphi_j\circ\varphi_i^{-1}:\varphi_i(U_i\cap U_j)\to\varphi_j(U_i\cap U_j)
$$

가 모두 정칙이면 $X$ 를 **Riemann 곡면**이라 한다. 실차원이 2 이므로 곡면이고, 복소차원은 1 이다.

사상 $f:X\to Y$ 가 **정칙**이라는 것은 양쪽 좌표로 표현했을 때 정칙이라는 뜻이다. 상수가 아닌 정칙사상은 열린사상이고 적당한 좌표에서 국소적으로 $z\mapsto z^n$ 꼴이다. 이 $n$ 이 그 점의 **분기지수**다.

## 기본 예

- $\mathbb C$ 와 그 열린부분집합.
- **Riemann 구** $\widehat{\mathbb C}=\mathbb C\cup\lbrace\infty\rbrace$ 다. 좌표는 $z$ 와 $1/z$ 두 장이고 전이함수가 $z\mapsto1/z$ 다. 콤팩트 Riemann 곡면 가운데 종수 0 인 유일한 것이다.
- **복소 토러스** $\mathbb C/\Lambda$ 다. 여기서 $\Lambda=\mathbb Z+\tau\mathbb Z$ 는 격자이고 $\tau\in\mathbb H$ 다. 종수 1 이며, [타원곡선](elliptic-curves.md)의 복소해석적 모습이다.
- 평면곡선 $\lbrace(z,w):P(z,w)=0\rbrace$ 의 비특이점 집합. 콤팩트 Riemann 곡면은 전부 이런 대수곡선으로 실현된다.

## 균일화 정리

> **정리(Koebe, Poincaré, 1907).** 단순연결 Riemann 곡면은 $\widehat{\mathbb C}$ 와 $\mathbb C$ 와 $\mathbb D=\lbrace|z|\lt 1\rbrace$ 가운데 정확히 하나와 정칙동형이다.

세 모형은 서로 동형이 아니다. $\widehat{\mathbb C}$ 만 콤팩트이고, $\mathbb C$ 와 $\mathbb D$ 는 Liouville 정리로 갈린다. $\mathbb D\to\mathbb C$ 인 정칙사상은 많지만 $\mathbb C\to\mathbb D$ 는 유계 정함수라 상수뿐이다.

일반 곡면에는 보편덮개를 거쳐 적용한다. $X$ 의 보편덮개 $\widetilde X$ 는 단순연결 Riemann 곡면이므로 셋 중 하나이고, 덮개변환군 $\Gamma\cong\pi_1(X)$ 는 그 모형의 자기동형군 안에서 자유롭고 진성불연속으로 작용한다. 따라서

$$
X\cong\widetilde X/\Gamma .
$$

$\widetilde X$ 가 무엇이냐에 따라 $X$ 를 **타원형**, **포물형**, **쌍곡형**이라 부른다.

## 세 유형의 목록

| 보편덮개 | 가능한 $X$ |
| --- | --- |
| $\widehat{\mathbb C}$ | $\widehat{\mathbb C}$ 뿐이다 |
| $\mathbb C$ | $\mathbb C$ 와 $\mathbb C^\times$ 와 복소 토러스 $\mathbb C/\Lambda$ |
| $\mathbb D$ | 나머지 전부 |

$\widehat{\mathbb C}$ 의 자기동형은 모두 고정점을 가지므로 자유 작용이 자명한 것뿐이고, 타원형 곡면이 하나뿐이다. $\mathbb C$ 의 자유 작용 군은 평행이동으로 이루어진 이산군, 곧 계수 0, 1, 2 의 격자뿐이므로 포물형 목록도 짧다.

# 성질

## 콤팩트 곡면과 대수곡선

콤팩트 Riemann 곡면 위에는 유리형함수가 충분히 많아 곡면을 사영공간에 매장할 수 있고, 그 상이 대수곡선이다. 거꾸로 비특이 사영곡선은 Riemann 곡면이다. 함수체를 통해 보면 다음 세 범주가 같다.

$$
\lbrace\text{콤팩트 Riemann 곡면}\rbrace\ \leftrightarrow\ \lbrace\mathbb C\text{ 위 비특이 사영곡선}\rbrace\ \leftrightarrow\ \lbrace\mathbb C\text{ 의 초월차수 }1\text{ 확대체}\rbrace
$$

유리형함수의 존재는 $\bar\partial$ 방정식의 해결이나 Hodge 이론으로 증명되고, 그 결과가 [Riemann–Roch](riemann-roch.md) 정리다.

## Riemann–Hurwitz 공식

정칙사상 $f:X\to Y$ 가 차수 $n$ 이고 분기지수가 $e_p$ 라 하면

$$
2g_X-2=n(2g_Y-2)+\sum_{p\in X}(e_p-1)
$$

이다. 분기가 없으면 Euler 지표가 곱셈적이라는 덮개공간의 사실이고 분기가 그것을 보정한다. 이 공식이 곡면 사이의 사상을 제한한다. 종수 2 곡면에서 종수 3 곡면으로 가는 상수 아닌 정칙사상은 없다. 우변이 $n\cdot4$ 이상인데 좌변이 2 이기 때문이다.

## 자기동형군의 유한성

$g\ge2$ 인 콤팩트 곡면의 자기동형군은 유한하고 크기가 $84(g-1)$ 을 넘지 않는다(Hurwitz 한계). 자기동형은 쌍곡 등거리사상이고 곡면의 쌍곡 면적이 Gauss–Bonnet 으로 $4\pi(g-1)$ 에 고정되므로, 몫의 면적이 최소일 때 군이 최대다. 최소 면적을 주는 것이 각이 $\pi/2,\pi/3,\pi/7$ 인 삼각형이고 거기서 $84(g-1)$ 이 나온다.

$g=0,1$ 에서는 자기동형군이 무한하다. 구는 $\mathrm{PSL}\_2(\mathbb C)$ 전체이고 토러스는 평행이동만으로도 무한하다. 유한성은 쌍곡성에서 온다.

## 모듈라이

종수 1 곡면은 전부 $\mathbb C/(\mathbb Z+\tau\mathbb Z)$ 꼴이고, 두 격자가 같은 곡면을 주는 것은 $\tau$ 가 $\mathrm{SL}\_2(\mathbb Z)$ 작용으로 옮겨질 때다. 종수 1 복소구조의 모듈라이는 $\mathbb H/\mathrm{SL}\_2(\mathbb Z)$ 이고 이것이 [모듈러 곡선](modular-curves.md)이다. 위상적으로 하나인 토러스가 복소구조로는 1 차원 족을 이룬다.

$g\ge2$ 에서는 이 족이 복소차원 $3g-3$ 이다. 그 공간을 다루는 것이 Teichmüller 이론이다.

# 활용

- **모듈라이와 변형.** 종수 $g\ge2$ 곡면의 복소구조가 이루는 공간이 Teichmüller 공간이고, 사상류군으로 몫을 취하면 모듈라이 공간이 된다. 준등각 사상과 Beltrami 방정식이 그 공간에 좌표를 준다.
- **정수론.** 종수 1 의 모듈라이가 모듈러 곡선이고, 거기서 모듈러 형식과 Galois 표현이 나온다. 콤팩트 Riemann 곡면이 대수곡선이라는 사실이 이 통로를 연다.
- **3 차원으로.** 쌍곡 곡면의 등거리군이 $\mathrm{PSL}\_2(\mathbb R)$ 의 이산부분군이듯 쌍곡 3 다양체는 $\mathrm{PSL}\_2(\mathbb C)$ 의 이산부분군으로 기술된다. [쌍곡 3 다양체](hyperbolic-3-manifolds.md)에서는 Mostow 강직성으로 구조가 굳고, 곡면에서는 모듈라이가 움직인다.
- **해석적 도구.** 균일화의 증명은 Perron 방법이나 Dirichlet 원리, 곧 타원형 편미분방정식의 해결이다. 같은 기법이 Hodge 이론과 지표 정리에 쓰인다.

# 연관 문서

## 선수지식

- [등각사상](conformal-mapping.md)
- [덮개공간](covering-spaces.md)
- [곡면의 분류](classification-of-surfaces.md)

## 더 알아보기

- [Teichmüller 공간과 곡면의 모듈라이](teichmuller-space.md)
- [모듈러 곡선](modular-curves.md)

#complex_analysis #topology #theorem
