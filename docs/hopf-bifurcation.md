# Hopf 분기

# 개요

**Hopf 분기(Hopf bifurcation)** 는 매개변수를 바꿀 때 평형 상태가 불안정해지면서 그 주위를 일정한 주기로 도는 해가 새로 생기는 현상이다. 평면의 어떤 방정식에서는 매개변수 $\mu$ 가 음수일 때 모든 해가 나선을 그리며 원점으로 감겨 들고, $\mu$ 가 양수가 되면 해들이 원점에서 멀어져 반지름 $\sqrt\mu$ 인 원에 감긴다. 평형점에서 일차 근사의 켤레 복소 고윳값 한 쌍이 허수축을 가로지르는 매개변수를 찾아 이런 주기해가 생기는 자리를 정한다.

# 직관

Hopf 분기는 매개변수를 가진 자율 미분방정식에서 평형점의 일차 근사의 켤레 복소 고윳값 한 쌍이 허수축을 가로지를 때, 그 평형점에서 주기해가 갈라져 나오는 현상이다. 평형점의 개수는 그대로이고 주기해가 새로 생긴다는 점에서, 해의 개수가 바뀌는 [분기 이론](bifurcation-theory.md)의 정적 분기와 다르다. [Hartman–Grobman 정리](hartman-grobman.md)는 쌍곡 평형점 근처의 해들의 모양이 매개변수를 조금 바꿔도 그대로라고 하므로, 모양이 바뀌는 매개변수는 고윳값이 허수축 위에 있는 곳이고 Hopf 분기는 그 가운데 고윳값이 켤레 복소수인 경우다.

매개변수 $\mu$ 를 가진 평면의 방정식

$$
x'=\mu x-y-x(x^2+y^2),\qquad y'=x+\mu y-y(x^2+y^2)
$$

에서 $\mu$ 가 $0$ 을 지날 때 원점 근처의 해가 어떻게 바뀌는지 알고 싶다. 원점에서의 일차 근사의 고윳값은 $\mu\pm i$ 다. $\mu\lt 0$ 이면 원점은 쌍곡이고 안정하며, $\mu\gt 0$ 이면 쌍곡이고 불안정하다. $\mu=0$ 에서는 고윳값이 $\pm i$ 로 허수축 위에 있어 Hartman–Grobman 정리를 쓸 수 없다.

원점까지의 거리 $r$ 과 각 $\theta$ 로 쓰면 $r'=\mu r-r^3$, $\theta'=1$ 이다. $\mu\le 0$ 이면 $r\gt 0$ 에서 $r'\lt 0$ 이므로 모든 해가 원점으로 감겨 든다. $\mu\gt 0$ 이면 $r=\sqrt\mu$ 에서 $r'=0$ 이고, 그 안쪽에서는 $r'\gt 0$, 바깥쪽에서는 $r'\lt 0$ 이다. 반지름 $\sqrt\mu$ 인 원이 주기 $2\pi$ 의 안정한 극한 순환이 된다.

$\mu$ 가 $0$ 을 지나는 순간 극한 순환이 원점에서 반지름 $0$ 으로 태어나 반지름 $\sqrt\mu$ 로 자란다. 극한 순환의 존재와 안정성을 정한 것은 $r'$ 의 $r^3$ 항의 부호다. 이 부호가 반대인 방정식 $r'=\mu r+r^3$ 에서는 $\mu\lt 0$ 쪽에 불안정한 극한 순환이 있고, $\mu$ 가 $0$ 에 다가가면 이 원이 원점으로 줄어들어 사라진다.

# 정의

$x'=f(x,\mu)$ 가 평면에서 정의되고 $f$ 가 충분히 매끄러우며, 모든 $\mu$ 에서 $f(0,\mu)=0$ 이다. $D\_xf(0,\mu)$ 의 고윳값이 $\alpha(\mu)\pm i\omega(\mu)$ 이고 $\alpha(0)=0$, $\omega(0)=\omega\_0\gt 0$ 이다.

- **횡단 조건(transversality condition)** 은 $\alpha'(0)\ne 0$ 이다. 고윳값이 허수축을 속도 $0$ 이 아닌 채로 가로지른다는 뜻이다.
- $\mu=0$ 에서 좌표를 바꿔 $f(x,0)=(-\omega\_0y+g\_1(x,y),\ \omega\_0x+g\_2(x,y))$ 꼴로 쓰고 $g\_1,g\_2$ 의 이차 이상 항으로 정하는 수

$$
\ell\_1=\frac1{16}\bigl(g\_{1,xxx}+g\_{1,xyy}+g\_{2,xxy}+g\_{2,yyy}\bigr)+\frac1{16\omega\_0}\bigl(g\_{1,xy}(g\_{1,xx}+g\_{1,yy})-g\_{2,xy}(g\_{2,xx}+g\_{2,yy})-g\_{1,xx}g\_{2,xx}+g\_{1,yy}g\_{2,yy}\bigr)
$$

를 **첫 Lyapunov 계수(first Lyapunov coefficient)** 라 한다. 편도함수는 원점에서 계산한다.[^1]

$\ell\_1\lt 0$ 인 Hopf 분기를 **초임계(supercritical)**, $\ell\_1\gt 0$ 인 것을 **아임계(subcritical)** 라 한다. 직관 절의 첫 방정식에서 $\ell\_1=-1$ 이고 둘째 방정식에서 $\ell\_1=1$ 이다.

# 성질

## Hopf 분기 정리

**정리(Hopf 분기 정리, Hopf bifurcation theorem).** 횡단 조건이 성립하고 $\ell\_1\ne 0$ 이면, $\mu=0$ 근처의 한쪽 매개변수 범위에서만 원점 근처에 주기 궤도가 하나 있다. 그 주기 궤도의 지름은 $\sqrt{\vert\mu\vert}$ 에 비례하고, 주기는 $\mu\to 0$ 에서 $2\pi/\omega\_0$ 로 다가간다. 주기 궤도가 생기는 쪽은 $\alpha'(0)\mu$ 와 $\ell\_1$ 의 부호가 반대인 쪽이다. 초임계이면 주기 궤도는 안정하고, 아임계이면 불안정하다.[^1]

증명의 요지. 극좌표와 정규형 변환(normal form transformation)으로 방정식을

$$
r'=\alpha(\mu)r+\ell\_1r^3+O(r^5)+O(\mu r^3),\qquad\theta'=\omega\_0+O(\mu)+O(r^2)
$$

꼴로 바꾼다. $r'=0$ 을 $r\gt 0$ 에서 풀면 $r^2\approx-\alpha'(0)\mu/\ell\_1$ 이고, 이 근이 양수인 쪽의 $\mu$ 에서만 주기 궤도가 있다. 근 주변에서 $r'$ 의 부호로 안정성이 정해진다. 차원이 3 이상이면 [중심 다양체](center-manifold-theorem.md)라는 2 차원 불변 곡면으로 방정식을 줄인 뒤 같은 계산을 한다.

## 초임계와 아임계의 차이

초임계 Hopf 분기에서는 평형점이 불안정해지는 매개변수에서 작은 진폭의 안정한 진동이 나타난다. 매개변수를 조금 넘겨도 해는 평형점 근처에 머문다.

아임계 Hopf 분기에서는 평형점이 불안정해지는 매개변수에서 근처에 해를 붙잡는 집합이 없다. 매개변수를 넘기는 순간 해가 평형점 근처를 떠나 멀리 있는 다른 끌개로 간다. 매개변수를 되돌려도 해가 평형점으로 돌아오지 않을 수 있고, 이것을 이력 현상(hysteresis)이라 한다.

# 활용

- [Lorenz 방정식](lorenz-system.md): 평형점 $C\_\pm$ 은 $\rho=\rho\_H$ 에서 아임계 Hopf 분기를 겪는다. $\rho$ 가 $\rho\_H$ 를 넘으면 $C\_\pm$ 근처에 해를 붙잡는 집합이 없고, 해는 이상 끌개로 간다.
- [Liénard 정리](lienard-theorem.md)의 van der Pol 방정식 $x''-\mu(1-x^2)x'+x=0$ 은 원점의 고윳값이 $\mu/2\pm i\sqrt{1-\mu^2/4}$ 이므로 $\mu=0$ 에서 Hopf 분기를 겪는다. 분기는 초임계이고, $\mu\gt 0$ 에서 생기는 극한 순환이 Liénard 정리가 유일성을 보인 극한 순환이다.
- [Poincaré–Bendixson 정리](poincare-bendixson.md)는 유계 영역에 갇힌 해가 주기 궤도로 감긴다는 것만 주고 주기 궤도가 어디서 오는지는 말하지 않는다. Hopf 분기는 매개변수가 변할 때 주기 궤도가 평형점에서 생기는 한 경로다.

[^1]: J. Guckenheimer, P. Holmes, *Nonlinear Oscillations, Dynamical Systems, and Bifurcations of Vector Fields*, Springer, 1983, 3 장 4 절(정리 3.4.2 와 식 3.4.11). Y. A. Kuznetsov, *Elements of Applied Bifurcation Theory*, 3rd ed., Springer, 2004, 3 장 4 절과 3 장 5 절.

# 연관 문서

## 선수지식

- [Hartman–Grobman 정리](hartman-grobman.md)
- [분기 이론](bifurcation-theory.md)

## 더 알아보기

- [Bogdanov–Takens 분기](bogdanov-takens-bifurcation.md)

#analysis #topology
