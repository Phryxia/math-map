# Kelvin–Stokes 정리

# 개요

**Kelvin–Stokes 정리(Kelvin–Stokes theorem)** 는 공간의 닫힌 곡선을 따라 흐름이 얼마나 돌고 있는지를 그 곡선을 가장자리로 하는 곡면 위에서 흐름이 각 점에서 도는 세기의 합으로 바꾸는 정리다. 물에 철사 고리를 담그고 물이 고리를 따라 한 바퀴 미는 양을 재려면 고리를 따라 [선적분](line-integral.md)을 해야 한다. Kelvin–Stokes 정리는 이 선적분을 고리에 걸친 아무 곡면 위의 [면적분](surface-integral.md)으로 바꾸고, 그 곡면은 계산하기 쉬운 것으로 골라도 된다.

# 직관

물이 $z$ 축 둘레를 각속도 $1$ 로 돌아 점 $(x,y,z)$ 에서 속도가 $F=(-y,x,0)$ 이라 하자. $xy$ 평면의 단위원 $C$ 를 시계 반대 방향으로 $r(t)=(\cos t,\sin t,0)$ 으로 돌면 $F(r(t))\cdot r'(t)=\sin^2t+\cos^2t=1$ 이므로, 물이 고리를 따라 미는 양은 $\int_0^{2\pi}1\thinspace dt=2\pi$ 이다.

고리가 감싼 원판을 작은 정사각형으로 자른다. 각 정사각형의 둘레를 같은 방향으로 돌며 잰 값을 모두 더하면, 이웃한 두 정사각형이 공유하는 변은 반대 방향으로 두 번 지나므로 지워지고 바깥 고리만 남는다. 작은 정사각형 하나의 둘레에서 잰 값은 [Green 정리](greens-theorem.md)로 $\partial F_2/\partial x-\partial F_1/\partial y$ 에 정사각형의 넓이를 곱한 값에 가깝다. 예에서는 이 값이 $1-(-1)=2$ 이므로 원판 전체의 합은 $2\times\pi=2\pi$ 이고, 고리에서 잰 값과 같다.

같은 고리에 원판 대신 위쪽 반구면을 걸쳐도 작은 조각으로 자르고 더하는 계산은 그대로 된다. 조각이 기울어 있으므로 조각마다 도는 세기를 그 조각의 법선 방향으로 재야 한다.

# 정의

## 순환

곡선 $C$ 가 $r(t)$, $a\le t\le b$ 로 매개화되어 있을 때 [벡터장](vector-fields.md) $F$ 의 $C$ 를 따른 **순환(circulation)** 은 다음이다.

$$
\oint_C F\cdot dr=\int_a^b F(r(t))\cdot r'(t)\thinspace dt
$$

직관 절의 단위원에서 순환은 $2\pi$ 다.

## 회전

$C^1$ 벡터장 $F=(F_1,F_2,F_3)$ 의 **회전(curl)** 은 다음 벡터장이다.

$$
\mathrm{curl}\thinspace F=\nabla\times F=\left(\frac{\partial F_3}{\partial y}-\frac{\partial F_2}{\partial z},\thinspace\frac{\partial F_1}{\partial z}-\frac{\partial F_3}{\partial x},\thinspace\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right)
$$

직관 절의 $F=(-y,x,0)$ 은 $\mathrm{curl}\thinspace F=(0,0,2)$ 다. 셋째 성분이 직관 절에서 작은 정사각형마다 잰 $2$ 다.

## Kelvin–Stokes 정리

Kelvin–Stokes 정리는 다음이다. $S$ 가 향이 주어진 조각마다 매끄러운 곡면이고 경계 $\partial S$ 가 조각마다 매끄러운 닫힌 곡선이며, $\partial S$ 의 방향은 법선 $n$ 쪽으로 머리를 두고 걸을 때 $S$ 가 왼쪽에 오도록 잡는다. $F$ 가 $S$ 를 포함하는 열린집합에서 $C^1$ 이면 다음이 성립한다.

$$
\oint_{\partial S}F\cdot dr=\iint_S(\mathrm{curl}\thinspace F)\cdot n\thinspace dS
$$

우변은 $\mathrm{curl}\thinspace F$ 의 $S$ 를 지나는 유량이고, 유량은 [발산 정리](divergence-theorem.md) 문서에서 정의한 것이다[^1].

# 성질

## 증명의 요지

$S$ 가 $D$ 위의 그래프 $z=g(x,y)$ 이고 위쪽 법선을 잡으면, $\partial S$ 는 $\partial D$ 를 $z=g$ 로 들어 올린 곡선이다. 좌변의 선적분에 $dz=g_x\thinspace dx+g_y\thinspace dy$ 를 넣으면 평면의 선적분 $\oint_{\partial D}P\thinspace dx+Q\thinspace dy$ 가 되고, 여기서 $P=F_1+F_3g_x$, $Q=F_2+F_3g_y$ 다.

이 선적분에 Green 정리를 쓰고 [연쇄법칙](chain-rule.md)으로 $\partial Q/\partial x-\partial P/\partial y$ 를 계산하면 우변의 면적분을 $D$ 위로 옮긴 식과 같다. 일반 곡면은 그래프 조각으로 자르고 더하며, 맞닿은 변에서는 선적분이 지워진다.

## 곡면에 무관함

$\mathrm{div}(\mathrm{curl}\thinspace F)=0$ 이 혼합 편미분의 대칭([Schwarz 정리](schwarz-theorem.md))에서 나온다. 같은 경계를 가진 두 곡면 $S_1$, $S_2$ 가 함께 영역 $\Omega$ 를 둘러싸면, 발산 정리로 $\mathrm{curl}\thinspace F$ 의 $\partial\Omega$ 를 지나는 유량이 $0$ 이고 두 곡면의 유량이 같다.

직관 절의 위쪽 반구면에서는 $n=(x,y,z)$ 이고 $(\mathrm{curl}\thinspace F)\cdot n=2z$ 다. $\iint 2z\thinspace dS=2\pi$ 이어서 원판에서 얻은 값과 같다.

## 회전의 뜻

점 $p$ 와 단위벡터 $n$ 에 대해, $p$ 를 중심으로 $n$ 에 수직인 반지름 $\varepsilon$ 의 원 $C_\varepsilon$ 을 잡으면 다음이 성립한다.

$$
(\mathrm{curl}\thinspace F)(p)\cdot n=\lim_{\varepsilon\to 0}\frac{1}{\pi\varepsilon^2}\oint_{C_\varepsilon}F\cdot dr
$$

정리를 원판에 쓰고 $\mathrm{curl}\thinspace F$ 의 [연속성](continuity.md)을 쓰면 나온다. 회전의 $n$ 성분은 $n$ 에 수직인 작은 고리를 따라 단위 넓이당 도는 양이다.

## 회전이 0 인 벡터장

$\mathbb R^3$ 이나 볼록 영역에서 $\mathrm{curl}\thinspace F=0$ 이면 모든 닫힌 곡선을 따른 순환이 $0$ 이다. 그러면 기준점에서 $x$ 까지의 선적분이 경로에 무관하고, 이 값을 $f(x)$ 로 두면 $F=\nabla f$ 다.

영역에 구멍이 있으면 이 결론이 성립하지 않는다. $z$ 축을 뺀 공간의 $F=(-y,x,0)/(x^2+y^2)$ 은 회전이 $0$ 이지만 단위원을 따른 순환이 $2\pi$ 다. 단위원에 걸친 곡면은 모두 $z$ 축과 만나서 정리를 쓸 수 없다. 이런 차이를 재는 것이 [de Rham 코호몰로지](de-rham-cohomology.md)다.

# 활용

- [미분형식](differential-forms.md)의 Stokes 정리(Stokes' theorem). $F$ 에 대응하는 1형식 $\omega=F_1dx+F_2dy+F_3dz$ 의 외미분이 $\mathrm{curl}\thinspace F$ 에 대응하는 2형식이고, 이 정리는 $\int_{\partial S}\omega=\int_S d\omega$ 의 한 경우다.
- 전자기학의 적분형. Faraday 유도 법칙(Faraday's law of induction)과 Ampère 법칙(Ampère's law)의 미분형 $\nabla\times E=-\partial_tB$, $\nabla\times B=\mu_0J$ 를 곡면 위에서 적분하면 고리를 따른 전압과 고리를 지나는 자기 유량 및 전류가 나온다.
- [Navier–Stokes 방정식](navier-stokes-equations.md)의 와도. 속도장의 회전을 와도(vorticity)라 하고, 고리를 따른 순환이 점성이 없는 흐름에서 시간에 따라 보존된다는 Kelvin 순환 정리(Kelvin's circulation theorem)가 이 정리로 와도의 유량에 대한 진술이 된다.
- 퍼텐셜의 존재 판정. 회전이 0 인 벡터장 절의 결론으로 힘의 장이 퍼텐셜 에너지를 갖는지를 편미분 계산만으로 판정한다.

[^1]: J. Stewart, *Calculus: Early Transcendentals*, 8th ed., Cengage, 2016, Section 16.8.

# 연관 문서

## 선수지식

- [발산 정리](divergence-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
