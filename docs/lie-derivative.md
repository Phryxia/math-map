# Lie 미분

# 개요

함수는 벡터장 $X$ 를 방향으로 삼아 $Xf$ 로 미분된다. 벡터장이나 미분형식을 같은 방향으로 미분하려면 서로 다른 점의 접공간을 한 공간으로 모으는 수단이 있어야 한다.

**Lie 미분**은 $X$ 의 흐름으로 텐서장을 끌어온 뒤 시간에 대해 미분한 것이다. 벡터장에 쓰면 Lie 괄호와 같고, 미분형식에 쓰면 외미분과 내부곱으로 분해된다.

# 직관

다양체 위의 벡터장 $Y$ 를 점 $p$ 에서 $X$ 방향으로 미분하려고 한다. 함수라면 $p$ 근처의 값을 빼서 차이를 재면 되지만, $Y$ 의 값은 점마다 다른 접공간에 놓여 있어 $Y(q)-Y(p)$ 라는 뺄셈이 정의되지 않는다.

[흐름](vector-fields.md)이 그 뺄셈을 만들어 준다. $X$ 의 흐름 $\phi_t$ 는 $p$ 를 $\phi_t(p)$ 로 옮기고, 그 미분은 $\phi_t(p)$ 의 접공간을 $p$ 의 접공간과 동일시한다. $Y(\phi_t(p))$ 를 이 동일시로 $p$ 로 끌어오면 $t$ 마다 $p$ 의 접공간의 벡터가 하나씩 생기고, 이제 $t=0$ 에서 미분할 수 있다. 좌표로 계산하면 이 미분의 $i$ 번째 성분이 $X^j\partial_jY^i-Y^j\partial_jX^i$ 이고, 두 벡터장을 바꾸면 부호가 바뀌는 식이 나온다.

# 정의

## 당김과 Lie 미분

$X$ 가 다양체 $M$ 위의 완비 벡터장이고 $\phi_t$ 가 그 흐름일 때, 텐서장 $T$ 의 **Lie 미분**은

$$
\mathcal L_XT=\left.\frac{d}{dt}\right\vert\_{t=0}\phi_t^{\ast}T
$$

이다. $\phi_t^{\ast}$ 는 미분동형 $\phi_t$ 에 의한 당김이고, 공변 성분에는 $d\phi_t$ 를, 반변 성분에는 그 역사상을 합성한다. $X$ 가 완비가 아니면 각 점의 근방에서 작은 $t$ 에 대해 $\phi_t$ 가 정의되므로 같은 식을 국소적으로 쓴다.

## 함수와 벡터장

$f$ 가 함수이면 $\phi_t^{\ast}f=f\circ\phi_t$ 이므로 $\mathcal L_Xf=Xf$ 다.

$Y$ 가 벡터장이면

$$
\mathcal L_XY=\lbrack X,Y\rbrack
$$

이고, 좌표로는 $(\mathcal L_XY)^i=X^j\partial_jY^i-Y^j\partial_jX^i$ 다. 오른쪽은 [벡터장](vector-fields.md)의 Lie 괄호다.

## 내부곱

$\omega$ 가 $k$ 형식이고 $X$ 가 벡터장일 때

$$
(\iota_X\omega)(Y_1,\dots,Y_{k-1})=\omega(X,Y_1,\dots,Y_{k-1})
$$

로 정의한 $k-1$ 형식 $\iota_X\omega$ 를 **내부곱**이라 한다. $\iota_X$ 는 차수를 $1$ 내리고 $\iota_X\iota_X=0$ 을 만족한다.

# 성질

## Leibniz 규칙

$$
\mathcal L_X(S\otimes T)=(\mathcal L_XS)\otimes T+S\otimes(\mathcal L_XT)
$$

이고 $\mathcal L_X$ 는 축약과 교환한다. 당김이 텐서곱과 축약을 보존하므로 미분이 Leibniz 규칙을 따른다. 이 두 성질과 함수와 벡터장 위의 값이 모든 텐서장 위의 $\mathcal L_X$ 를 결정한다.

따라서 $1$ 형식 $\omega$ 에 대해 $(\mathcal L_X\omega)(Y)=X(\omega(Y))-\omega(\lbrack X,Y\rbrack)$ 이다.

## 교환자

**정리.** $\mathcal L_X\mathcal L_Y-\mathcal L_Y\mathcal L_X=\mathcal L_{\lbrack X,Y\rbrack}$ 이다.

함수에서는 양변이 모두 $XYf-YXf$ 이고, 벡터장에서는 Lie 괄호의 Jacobi 항등식이 그대로 이 식이다. Leibniz 규칙으로 일반 텐서장에 퍼진다. ∎

## Cartan 공식

**정리.** 미분형식 위에서

$$
\mathcal L_X=d\thinspace\iota_X+\iota_X\thinspace d
$$

가 성립한다.[^1]

양변이 모두 차수를 보존하는 미분연산자이고 Leibniz 규칙을 만족하므로, 함수와 $df$ 에서 확인하면 충분하다. 함수 $f$ 에서 $\iota_Xf=0$ 이므로 오른쪽은 $\iota_X\thinspace df=Xf$ 이고 왼쪽도 $Xf$ 다. $df$ 에서는 $d\thinspace\iota_X\thinspace df=d(Xf)$ 이고 $\iota_X\thinspace d\thinspace df=0$ 이므로 오른쪽이 $d(Xf)$ 이며, 왼쪽은 $\mathcal L_X$ 가 [외미분](differential-forms.md)과 교환하므로 $d(\mathcal L_Xf)=d(Xf)$ 다. ∎

## 외미분과의 교환

$\mathcal L_Xd=d\thinspace\mathcal L_X$ 다. 당김이 외미분과 교환하므로 $t$ 에 대한 미분도 교환한다. Cartan 공식과 $dd=0$ 에서 다시 얻는다.

## 불변성 판정

**정리.** $X$ 가 완비이면 $\mathcal L_XT=0$ 인 것과 모든 $t$ 에서 $\phi_t^{\ast}T=T$ 인 것이 동치다.

$t\mapsto\phi_t^{\ast}T$ 는 $\phi_{t+s}=\phi_t\circ\phi_s$ 에서 오는 한 매개변수 반군의 작용이므로, $t$ 에 대한 미분이 $\phi_t^{\ast}(\mathcal L_XT)$ 다. 미분이 항등적으로 $0$ 인 것과 상수인 것이 동치다. ∎

# 활용

- **계량의 불변성.** [Killing 벡터장](killing-vector-fields.md)은 Riemann 계량 $g$ 에 대해 $\mathcal L_Xg=0$ 인 벡터장으로 정의되고, 그 흐름이 등거리변환이 된다.
- **심플렉틱 구조의 보존.** $\mathcal L_X\omega=0$ 인 벡터장을 심플렉틱 벡터장이라 하고, Cartan 공식과 $d\omega=0$ 으로 이 조건이 $d\thinspace\iota_X\omega=0$ 과 같다. $\iota_X\omega$ 가 완전형식인 경우가 [심플렉틱 다양체](symplectic-manifolds.md)의 Hamilton 벡터장이다.
- **Poincaré 보조정리.** 별모양 영역에서 방사 벡터장의 흐름으로 형식을 끌어오고 Cartan 공식을 $t$ 에 대해 적분하면 호모토피 공식이 나오고, 닫힌 형식이 완전형식임이 따라온다.
- **Ricci 솔리톤.** [Ricci 솔리톤](ricci-solitons.md)의 방정식 $\mathcal L_Xg+2\thinspace\mathrm{Ric}=2\lambda g$ 에서 왼쪽 첫 항이 계량의 Lie 미분이고, 이 항이 Ricci 흐름의 자기유사해를 기술한다.

[^1]: 공식과 아래 증명의 표준적 서술은 J. M. Lee, *Introduction to Smooth Manifolds*, 2nd ed. (2013) 14장에 있다.

# 연관 문서

## 선수지식

- [벡터장](vector-fields.md)
- [미분형식](differential-forms.md)

## 더 알아보기

- [Killing 벡터장](killing-vector-fields.md)

#differential_geometry #analysis #topology
