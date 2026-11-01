# 준등각 사상

# 개요

**준등각 사상(quasiconformal map)** 은 작은 원을 작은 타원으로 보내되 타원의 긴 축과 짧은 축의 비가 정해진 수 $K$ 를 넘지 않는, 평면 영역 사이의 일대일 연속 사상이다. 정사각형 $[0,1]^2$ 를 $f(x+iy)=2x+iy$ 로 가로 $2$, 세로 $1$ 인 직사각형에 보내면 모든 작은 원이 축비 $2$ 인 타원이 되고, 꼭짓점을 꼭짓점으로 보내는 등각사상은 이 두 도형 사이에 존재하지 않는다. 준등각 사상은 축비가 $1$ 이 아닌 것을 허용해 등각사상으로 이어지지 않는 영역들을 잇고, 필요한 축비의 상한으로 두 영역이 서로 얼마나 다른지를 잰다.

# 직관

정사각형 $\lbrack 0,1\rbrack^2$ 과 직사각형 $\lbrack 0,2\rbrack\times\lbrack 0,1\rbrack$ 사이에서 꼭짓점을 꼭짓점으로 보내는 [등각사상](conformal-mapping.md)을 찾는다. 등각사상은 꼭짓점 넷을 지키는 한 직사각형의 변의 비를 보존하므로, 비가 $1$ 인 것과 $2$ 인 것 사이에는 그런 사상이 없다. 한편 $f(x+iy)=2x+iy$ 는 전단사이고 매끄러우며 꼭짓점을 꼭짓점으로 보낸다. 그러나 반지름이 작은 원을 가로축이 세로축의 두 배인 타원으로 보내므로 등각이 아니다.

왜곡을 숫자로 재면 이런 사상을 모을 수 있다. 미분 $Df$ 가 원을 보내 만드는 타원의 축비를 영역 전체에서 $K$ 이하로 묶는 조건을 세우면, 위 사상은 $K=2$ 에 들고 등각사상은 $K=1$ 에 든다. 축비는 점마다 다를 수 있고 타원의 방향도 점마다 다를 수 있으므로, 사상을 지정하는 데 필요한 자료는 점마다의 축비와 방향이다.

# 정의

## 기하적 정의

**사각형(quadrilateral)** $Q$ 는 경계에 네 점을 차례로 표시한 Jordan 영역이다. 표시한 점을 꼭짓점으로 보내는 등각사상으로 $Q$ 를 직사각형 $\lbrack 0,a\rbrack\times\lbrack 0,b\rbrack$ 에 옮기면 비 $m(Q)=a/b$ 가 하나로 정해지고, 이를 $Q$ 의 **모듈러스(modulus)** 라 한다. 직관 절의 정사각형은 모듈러스가 $1$ 이고 직사각형은 $2$ 다.

영역 $\Omega\subseteq\mathbb C$ 의 동형사상 $f$ 가 **K 준등각(K-quasiconformal)** 이라는 것은 $\Omega$ 안의 모든 사각형 $Q$ 에 대해 다음이 성립한다는 뜻이다.

$$
\frac1K\thinspace m(Q)\le m(f(Q))\le K\thinspace m(Q)
$$

가장 작은 그러한 $K$ 를 $f$ 의 **팽창률(maximal dilatation)** 이라 한다. 직관 절의 $f(x+iy)=2x+iy$ 는 가로세로 비가 $a/b$ 인 축에 평행한 직사각형을 비 $2a/b$ 인 직사각형으로 보내고, 팽창률이 $2$ 다.

## Beltrami 방정식

$f$ 가 국소적으로 [Sobolev 공간](sobolev-spaces.md) $W^{1,2}$ 에 드는 동형사상이고 거의 어디서나 다음을 만족하면 $K$ 준등각이다.

$$
f\_{\bar z}=\mu\thinspace f_z,\qquad \Vert\mu\Vert\_\infty\le\frac{K-1}{K+1}\lt 1
$$

이 식을 **Beltrami 방정식(Beltrami equation)**, 가측 함수 $\mu$ 를 $f$ 의 **Beltrami 계수(Beltrami coefficient)** 라 한다. 점 $z$ 에서 타원의 축비는 $(1+\vert\mu(z)\vert)/(1-\vert\mu(z)\vert)$ 이고, 긴 축의 방향은 $\mu(z)$ 의 편각의 절반이다. $\mu=0$ 이 Cauchy–Riemann 방정식이고 그 해가 등각사상이다.

직관 절의 사상은 $f(z)=\tfrac32 z+\tfrac12\bar z$ 로 적히므로 $f_z=3/2$, $f\_{\bar z}=1/2$ 이고 $\mu=1/3$ 이다. 축비는 $(1+1/3)/(1-1/3)=2$ 이고 $(K-1)/(K+1)=1/3$ 에서 $K=2$ 다. 편각이 $0$ 이므로 긴 축은 가로 방향이다.

# 성질

## 두 정의의 동치

기하적 정의와 Beltrami 방정식의 정의는 같은 사상의 모임을 준다.[^1] 기하적 정의는 미분가능성을 가정하지 않고, 해석적 정의는 $\mu$ 를 자료로 쓴다.

## 가측 Riemann 사상 정리

$\Vert\mu\Vert\_\infty\lt 1$ 인 가측 함수 $\mu$ 마다 $\mathbb C$ 위에서 Beltrami 방정식의 동형사상 해가 존재하고, $0,1,\infty$ 를 고정하는 조건에서 유일하다. 이것이 **가측 Riemann 사상 정리(measurable Riemann mapping theorem)** 다.[^1]

증명의 요지. Cauchy 변환(Cauchy transform)과 Beurling 변환(Beurling transform) $S$ 를 써서 $f\_{\bar z}=\mu f_z$ 를 $h=\mu Sh+\mu$ 꼴의 적분방정식으로 적는다. $S$ 가 $L^2$ 에서 등거리이므로 $\Vert\mu\Vert\_\infty\lt 1$ 에서 Neumann 급수(Neumann series)가 수렴한다. 얻은 $h$ 에서 $f$ 를 적분으로 구한다.

## 합성과 극한

$f_1$ 이 $K_1$ 준등각이고 $f_2$ 가 $K_2$ 준등각이면 $f_2\circ f_1$ 은 $K_1K_2$ 준등각이고 $f_1^{-1}$ 은 $K_1$ 준등각이다. Beltrami 계수는 합성에서 분수 변환으로 결합한다.

$K$ 를 고정하면, Riemann 구면에서 세 점을 고정한 $K$ 준등각 사상의 모임은 균등 수렴에 대해 콤팩트하고 극한도 $K$ 준등각이다. 극값 문제의 해의 존재를 이 콤팩트성으로 얻는다.

## 영집합과 정칙성

$K$ 준등각 사상은 Lebesgue 영집합을 영집합으로 보내고, [Hölder 공간](holder-spaces.md)의 지수 $1/K$ 로 국소 Hölder 연속이다. $K$ 준등각 사상은 거의 어디서나 미분가능하다. $\mu$ 가 Hölder 연속이면 $f$ 는 $C^1$ 급이다.

# 활용

## Teichmüller 거리

종수 $g$ 곡면의 표시된 복소구조 $X,Y$ 에 대해 표시를 지키는 준등각 사상의 최소 팽창률을 $K(X,Y)$ 라 하면 $d(X,Y)=\tfrac12\log K(X,Y)$ 가 [Teichmüller 공간](teichmuller-space.md)의 거리다. 최소를 실현하는 사상이 유일하게 존재하고 그 Beltrami 계수가 정칙 이차미분(holomorphic quadratic differential)으로 적힌다는 것이 [Teichmüller 정리](teichmuller-theorem.md)다.

## 복소구조의 변형

곡면 위의 Beltrami 미분 $\mu$ 를 주면 가측 Riemann 사상 정리가 새 복소구조를 하나 준다. $\Vert\mu\Vert\_\infty\lt 1$ 인 미분 전체를 같은 표시된 복소구조를 주는 것끼리 묶으면 Teichmüller 공간이 나오고, Bers 매장(Bers embedding)이 이것을 $\mathbb C^{3g-3}$ 안의 유계영역으로 실현한다.

## 복소동역학

유리사상의 [Fatou 성분](fatou-components.md) 위에서 Beltrami 계수를 바꾸고 가측 Riemann 사상 정리로 새 유리사상을 얻는 방법을 준등각 수술(quasiconformal surgery)이라 한다. 유리사상이 방황 영역을 갖지 않는다는 Sullivan 비방황 정리(Sullivan's no wandering domains theorem)는 방황 영역 위의 Beltrami 계수가 무한 차원의 변형을 주는데 차수 $d$ 유리사상의 모임은 유한 차원이라는 모순으로 증명된다.

[^1]: L. V. Ahlfors, *Lectures on Quasiconformal Mappings*, 2nd ed. (2006), II 장 — 두 정의의 동치와 가측 Riemann 사상 정리. Beurling 변환을 쓴 증명은 K. Astala, T. Iwaniec, G. Martin, *Elliptic Partial Differential Equations and Quasiconformal Mappings in the Plane* (2009), 5 장.

# 연관 문서

## 선수지식

- [Riemann 사상정리](riemann-mapping-theorem.md)
- [Riemann 곡면](riemann-surfaces.md)

## 더 알아보기

- [Fatou 성분의 분류](fatou-components.md)
- [Teichmüller 정리](teichmuller-theorem.md)

#complex_analysis #topology #differential_geometry
