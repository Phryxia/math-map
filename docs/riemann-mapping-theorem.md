# Riemann 사상정리

# 개요

**Riemann 사상정리(Riemann mapping theorem)** 는 평면 전체가 아니고 구멍이 없는 평면 영역이면, 그 영역을 단위원판으로 각도를 보존하며 일대일로 옮기는 함수가 있다는 정리다. 경계에서 값이 주어진 [조화함수](harmonic-functions.md)를 찾는 문제는 원판에서는 적분식 하나로 풀리지만, 상반평면에서는 그 식을 쓸 수 없다. 상반평면을 원판으로 옮기는 함수 $(z-i)/(z+i)$ 로 문제를 원판으로 가져가면 원판의 식으로 풀린다. Riemann 사상정리는 이런 함수가 구멍 없는 모든 영역에 존재함을 증명한다.

# 직관

평면의 단순연결 영역은 단위원판과 등각동치다. 원판에서만 아는 공식을 임의의 단순연결 영역으로 옮기는 데 쓴다.

증명은 한 점에서 도함수를 최대로 하는 단사 정칙함수를 찾는 극값 문제다. 그 최댓값을 실현하는 함수의 존재는 [Montel 정리](montel-theorem.md)가 주고, 극한이 단사성을 잃지 않는다는 것은 [Hurwitz 정리](hurwitz-theorem.md)가 준다.

영역 $\Omega$ 의 경계에서 값이 주어진 조화함수를 찾으려 한다. $\Omega$ 가 단위원판이면 Poisson 적분이 그 답을 적분식으로 준다. $\Omega$ 가 상반평면이면 그 적분식이 없다.

조화함수는 정칙함수와 합성해도 조화이므로, 상반평면을 원판으로 옮기는 전단사 정칙함수를 찾으면 된다. $T(z)=(z-i)/(z+i)$ 를 보자. $z$ 가 실수이면 $i$ 와 $-i$ 에서 같은 거리에 있어 $\vert z-i\vert=\vert z+i\vert$ 이므로 상이 단위원 위에 있고, 상반평면의 점은 $-i$ 보다 $i$ 에 가까워 분자가 분모보다 작으므로 상이 원판 안에 든다. 역사상 $w\mapsto i(1+w)/(1-w)$ 도 정칙이므로 $T$ 는 전단사다. 원판에서 Poisson 적분으로 푼 뒤 $T$ 로 되돌리면 상반평면의 답이 나온다.

$T$ 는 상반평면에 맞춰 찾은 식이다. 반달 모양이나 한 선분을 떼어낸 평면에서는 식을 다시 찾아야 한다. Riemann 사상정리는 식을 찾지 않고도 사상이 있다고 말한다. 조건은 영역의 모양이 아니라 둘, 구멍이 없다는 것과 평면 전체가 아니라는 것이다.

# 정의

$\mathbb D=\lbrace z\in\mathbb C:\vert z\vert\lt 1\rbrace$ 라 쓴다.

*정리.* $\Omega\subsetneq\mathbb C$ 가 공집합이 아닌 단순연결 영역이고 $z_0\in\Omega$ 이면, $f(z_0)=0$ 과 $f'(z_0)\gt 0$ 을 만족하는 전단사 [등각사상](conformal-mapping.md) $f:\Omega\to\mathbb D$ 가 유일하게 하나 있다[^1].

정규화 조건 둘을 떼면 사상은 $\mathbb D$ 의 자기동형군만큼 많다. 정규화를 걸어 그 자유도를 없앤 것이 유일성이다.

# 성질

## 단순연결과 정칙 제곱근

*보조정리.* $\Omega$ 가 단순연결이고 $g$ 가 $\Omega$ 에서 정칙이며 영점이 없으면 $g=h^2$ 인 정칙함수 $h$ 가 $\Omega$ 에 있다.

*증명의 요지.* $g'/g$ 는 $\Omega$ 에서 정칙이고, 단순연결 영역에서 정칙함수의 닫힌 경로 적분이 사라지므로 원시함수 $L$ 을 갖는다. $(ge^{-L})'=0$ 이므로 $g=ce^{L}$ 이고 상수 $c$ 를 $L$ 에 흡수하면 $g=e^{L}$ 이다. $h=e^{L/2}$ 를 잡는다.

증명에서 단순연결은 이 자리에만 쓰인다. 구멍이 있는 영역에서는 $g(z)=z$ 가 반례다. 원환에서 $z$ 의 정칙 제곱근은 없다.

## 극값 문제

$\mathcal F$ 를 $\Omega$ 에서 $\mathbb D$ 로 가는 단사 정칙함수 가운데 $f(z_0)=0$ 인 것들의 집합이라 하고 $M=\sup\lbrace \vert f'(z_0)\vert: f\in\mathcal F\rbrace$ 라 둔다.

$\mathcal F$ 는 비어 있지 않다. $a\notin\Omega$ 를 잡으면 $z-a$ 는 $\Omega$ 에서 영점이 없으므로 위 보조정리가 $h^2(z)=z-a$ 인 정칙 $h$ 를 준다. $h(z_1)=h(z_2)$ 를 제곱하면 $z_1=z_2$ 이므로 $h$ 는 단사다. $h(z_1)=-h(z_2)$ 를 제곱해도 $z_1=z_2$ 가 나오고 그때 $h(z_1)=0$ 인데 $h$ 는 영점이 없으므로, $h(\Omega)$ 와 $-h(\Omega)$ 는 만나지 않는다. $-h(\Omega)$ 는 열린 집합이므로 $-h(z_0)$ 를 중심으로 한 어떤 원판을 포함하고 $h(\Omega)$ 는 그 원판을 피한다. 따라서 $1/(h(z)+h(z_0))$ 는 $\Omega$ 에서 유계인 단사 정칙함수이고, 평행이동과 축소로 $\mathcal F$ 의 원소를 얻는다.

## 극대원의 존재

$\mathcal F$ 의 함수는 모두 $\vert f\vert\lt 1$ 이므로 $\mathcal F$ 는 국소 유계이고, Montel 정리로 정규족이다. Cauchy 추정이 $M\lt\infty$ 를 준다.

$\vert f_n'(z_0)\vert\to M$ 인 수열 $(f_n)\subset\mathcal F$ 에서 국소 균등수렴하는 부분열을 뽑아 극한 $f$ 를 얻는다. 극한은 정칙이고 $f'(z_0)=M\gt 0$ 이므로 상수가 아니다. Hurwitz 정리가 단사 정칙함수열의 비상수 극한이 단사임을 주고, $\vert f\vert\le 1$ 과 [최대값 원리](maximum-principle.md)가 $f(\Omega)\subseteq\mathbb D$ 를 준다. 그래서 $f\in\mathcal F$ 이고 $\vert f'(z_0)\vert=M$ 이다.

## 극대원의 전사성

$f$ 가 전사가 아니라 하고 $w_0\in\mathbb D\setminus f(\Omega)$ 를 잡는다. $c\in\mathbb D$ 마다 $\varphi_c(z)=(z-c)/(1-\bar cz)$ 는 $\mathbb D$ 의 자기동형이다.

$\varphi_{w_0}\circ f$ 는 $\Omega$ 에서 영점이 없으므로 보조정리가 정칙 제곱근 $g$ 를 주고, $g$ 는 단사인 함수의 제곱근이므로 단사다. $F=\varphi_{g(z_0)}\circ g$ 는 $\mathcal F$ 에 들고

$$\vert F'(z_0)\vert=\frac{1+\vert w_0\vert}{2\sqrt{\vert w_0\vert}}\thinspace M$$

이다. $\varphi_c'(0)=1-\vert c\vert^2$ 와 $\varphi_c'(c)=1/(1-\vert c\vert^2)$ 를 $g^2=\varphi_{w_0}\circ f$ 의 양변을 미분한 식에 넣어 얻는다. $0\lt t\lt 1$ 이면 $1+t\gt 2\sqrt t$ 이므로 $\vert F'(z_0)\vert\gt M$ 이고 $M$ 의 정의에 모순이다. 따라서 $f$ 는 $\mathbb D$ 위로 전사다.

도함수를 키우는 이 조작이 Koebe 사상이다. 제곱근이 원판의 상을 넓히고 자기동형이 중심을 원점으로 옮긴다.

## 유일성

$f_1,f_2$ 가 둘 다 정규화를 만족하면 $\psi=f_2\circ f_1^{-1}$ 는 $\mathbb D$ 의 전단사 등각사상이고 $\psi(0)=0$, $\psi'(0)\gt 0$ 이다. Schwarz 보조정리를 $\psi$ 와 $\psi^{-1}$ 에 함께 쓰면 $\vert\psi'(0)\vert\le 1$ 과 $1/\vert\psi'(0)\vert\le 1$ 이므로 $\vert\psi'(0)\vert=1$ 이고, 등호 경우가 $\psi(z)=e^{i\theta}z$ 를 준다. $\psi'(0)\gt 0$ 에서 $\theta=0$ 이므로 $f_1=f_2$ 다.

## 평면 전체의 제외

$\mathbb C$ 자체는 단순연결이지만 $\mathbb D$ 와 등각동치가 아니다. $f:\mathbb C\to\mathbb D$ 가 정칙이면 유계인 전해석함수이므로 Liouville 정리로 상수이고 단사가 아니다. 그래서 $\Omega\subsetneq\mathbb C$ 조건을 뗄 수 없다.

Riemann 구면 $\widehat{\mathbb C}$ 까지 넣으면 단순연결 영역의 등각류는 구면, 평면, 원판 셋이다. 이 삼분법을 임의의 [Riemann 곡면](riemann-surfaces.md)으로 올린 것이 균일화 정리다.

## 경계 대응

$\partial\Omega$ 가 [Jordan 곡선](jordan-curve-theorem.md)이면 Riemann 사상은 $\overline\Omega$ 에서 $\overline{\mathbb D}$ 로 가는 위상동형으로 확장된다[^2]. 경계에서의 값이 정해지므로 원판에서 푼 경계값 문제를 $\Omega$ 로 되돌릴 수 있다.

경계가 Jordan 곡선이 아니면 확장이 깨진다. 한 선분을 떼어낸 원판에서는 떼어낸 선분의 양쪽 변이 경계의 서로 다른 두 호에 대응하므로, 사상이 경계까지 단사로 늘어나지 않는다.

## Schwarz–Christoffel 공식

정리는 사상의 존재만 주고 식을 주지 않는다. 다각형 영역에서는 식이 적분꼴로 나온다.

$$f(z)=A+C\int_0^z\prod_{k=1}^{n}(\zeta-x_k)^{\alpha_k-1}\thinspace d\zeta$$

이 사상은 상반평면을 내각이 $\pi\alpha_k$ 인 $n$ 각형으로 옮긴다. $x_k$ 는 꼭짓점에 대응하는 실축 위의 점이고, 그 위치는 변의 길이가 정하는 초월방정식의 해다. 길이를 지정하면 $x_k$ 를 수치로만 구한다.

[^1]: W. Rudin, *Real and Complex Analysis*, 3rd ed., 14.8절.
[^2]: C. Pommerenke, *Boundary Behaviour of Conformal Maps*, 2장 (Carathéodory 정리와 Jordan 영역의 경계 확장).

# 연관 문서

## 선수지식

- [등각사상](conformal-mapping.md)
- [Montel 정리](montel-theorem.md)

## 더 알아보기

- [준등각 사상](quasiconformal-maps.md)

#complex_analysis #analysis #topology #theorem
