# 등각사상

# 개요

등각사상은 각의 크기와 방향을 보존하는 사상이다. 평면에서는 도함수가 $0$ 이 아닌 정칙함수가 정확히 등각사상이고, 그래서 복소해석의 정리들이 평면 영역의 기하학으로 읽힌다. 중심 결과는 Riemann 사상정리다. $\mathbb C$ 가 아닌 단순연결 영역은 어느 것이나 단위원판과 등각동치이므로, 원판에서 푼 문제를 임의의 단순연결 영역으로 옮길 수 있다.

# 직관

정칙함수 $f$ 를 점 $a$ 근방에서 $f(z)\approx f(a)+f'(a)(z-a)$ 로 근사하면, $f'(a)\neq0$ 일 때 사상은 국소적으로 $f'(a)$ 를 곱하는 것이다. 복소수를 곱하는 것은 회전과 등방 확대이므로 두 곡선이 만나는 각이 그대로 유지된다. $f'(a)=0$ 인 점에서는 각이 영점의 중복도만큼 배가되어 등각성이 깨진다.

Riemann 사상정리는 영역의 모양이 복소해석에서는 정보가 아니라고 말한다. 단순연결이라는 위상 조건과 $\mathbb C$ 전체가 아니라는 조건만 남고, 나머지 기하학적 차이는 등각사상이 지운다.

# 정의

## 등각성

영역 $\Omega\subset\mathbb C$ 에서 정칙인 $f$ 가 $a\in\Omega$ 에서 $f'(a)\neq0$ 이면 $f$ 는 $a$ 에서 **등각**이다. $\Omega$ 의 모든 점에서 등각이고 단사이면 $f$ 를 $\Omega$ 위의 **등각사상**이라 한다.

두 영역 $\Omega_1,\Omega_2$ 사이에 전단사 등각사상이 있으면 둘을 **등각동치**라 한다. 역사상도 자동으로 정칙이므로 이 관계는 동치관계다.

## Möbius 변환

$$T(z)=\frac{az+b}{cz+d},\qquad ad-bc\neq0$$

꼴의 사상을 **Möbius 변환**이라 한다. Riemann 구면 $\widehat{\mathbb C}=\mathbb C\cup\lbrace\infty\rbrace$ 의 전단사 등각사상은 정확히 Möbius 변환이고, 합성에 대해 군을 이루며 $\mathrm{PGL}\_2(\mathbb C)$ 와 동형이다.

Möbius 변환은 원과 직선을 원과 직선으로 옮기고, 서로 다른 세 점을 지정한 서로 다른 세 점으로 옮기는 변환이 유일하게 하나 있다.

# 성질

## Schwarz 보조정리

$\mathbb D=\lbrace z:\vert z\vert\lt 1\rbrace$ 에서 정칙이고 $f(\mathbb D)\subset\mathbb D$ , $f(0)=0$ 인 $f$ 는 모든 $z\in\mathbb D$ 에서

$$\vert f(z)\vert\le\vert z\vert,\qquad \vert f'(0)\vert\le1$$

을 만족한다. 어느 한 점에서 등호가 성립하면 $f(z)=e^{i\theta}z$ 인 회전이다.

증명은 최대 절댓값 원리다. $g(z)=f(z)/z$ 는 $0$ 에서 제거 가능한 특이점을 가지므로 $\mathbb D$ 에서 정칙이고, 반지름 $r$ 의 원 위에서 $\vert g\vert\le1/r$ 이다. $r\to1$ 로 보내면 $\vert g\vert\le1$ 이다.

## 원판의 자기동형군

$\mathbb D$ 의 전단사 등각사상은 정확히

$$\varphi(z)=e^{i\theta}\thinspace\frac{z-a}{1-\bar az},\qquad a\in\mathbb D,\ \theta\in\mathbb R$$

꼴이다. Schwarz 보조정리를 $\varphi$ 와 그 역에 함께 적용해 얻는다. 이 군이 쌍곡평면의 등거리변환군이므로 원판 위의 Poincaré 계량이 등각사상으로 보존된다.

## Riemann 사상정리

$\Omega\subsetneq\mathbb C$ 가 공집합이 아닌 단순연결 영역이면 $\Omega$ 는 $\mathbb D$ 와 등각동치다. 지정한 점 $z_0\in\Omega$ 를 $0$ 으로 보내고 $f'(z_0)\gt 0$ 이라는 정규화를 걸면 사상은 유일하다[^1].

증명의 요지는 극값 문제다. $\Omega$ 에서 $\mathbb D$ 로 가는 단사 정칙함수 가운데 $\vert f'(z_0)\vert$ 를 최대로 하는 것을 찾는다. 이 집합이 비어 있지 않음을 제곱근 가지를 써서 보이고, Montel 정리로 정규족에서 극대원이 존재함을 얻은 뒤, 극대원이 전사가 아니라면 Koebe 사상으로 도함수를 더 키울 수 있음을 보여 모순을 얻는다.

정리는 사상의 존재만 주고 명시적 공식을 주지 않는다. $\mathbb C$ 자체가 제외되는 것은 Liouville 정리 때문이다. $\mathbb C$ 에서 $\mathbb D$ 로 가는 유계 전해석함수는 상수뿐이다.

## 경계 대응

$\partial\Omega$ 가 Jordan 곡선이면 Riemann 사상은 $\overline\Omega$ 에서 $\overline{\mathbb D}$ 로 가는 위상동형으로 확장된다(Carathéodory 정리)[^1]. 경계에서의 값이 정해지므로 [Dirichlet 문제](dirichlet-problem.md)를 원판에서 풀고 되돌릴 수 있다.

다각형 영역에서는 사상이 명시적이다. Schwarz–Christoffel 공식

$$f(z)=A+C\int_0^z\prod_{k=1}^{n}(\zeta-x_k)^{\alpha_k-1}\thinspace d\zeta$$

는 상반평면을 내각이 $\pi\alpha_k$ 인 $n$ 각형으로 옮긴다. $x_k$ 는 실축 위의 사전점이고, 그 위치를 정하는 것은 초월방정식이다.

# 활용

- [조화함수](harmonic-functions.md): 조화성은 등각사상으로 보존된다. 임의의 단순연결 영역의 Dirichlet 문제를 원판으로 옮겨 Poisson 공식으로 푼다.
- [Riemann 곡면과 균일화 정리](riemann-surfaces.md): 균일화 정리는 Riemann 사상정리의 곡면판이다. 모든 단순연결 Riemann 곡면은 구면, 평면, 원판 셋 중 하나와 등각동치다.
- [모듈러 형식](modular-forms.md): 상반평면 위의 $\mathrm{SL}\_2(\mathbb Z)$ 작용이 Möbius 변환이고, 그 몫이 [모듈러 곡선](modular-curves.md)이다.
- [쌍곡 3차원 다양체](hyperbolic-3-manifolds.md): $\widehat{\mathbb C}$ 의 Möbius 변환군이 쌍곡 3차원 공간의 등거리변환군과 같아서, 무한원 구면 위의 등각구조가 다양체의 기하를 결정한다.

[^1]: W. Rudin, *Real and Complex Analysis*, 3rd ed., 14장 (Riemann 사상정리와 경계 거동).

# 연관 문서

## 선수지식

- [정칙함수와 Cauchy 적분 정리](holomorphic-functions.md)

## 더 알아보기

- [Riemann 곡면과 균일화 정리](riemann-surfaces.md)

#complex_analysis #analysis #topology #differential_geometry
