# 현수선

# 개요

현수선은 균일한 사슬을 두 점에 매달아 자기 무게로 처지게 한 곡선이다. 식은 쌍곡코사인이다.

$$
y=\lambda+C\cosh\frac{x-x_0}{C}
$$

사슬의 길이를 고정하고 위치 에너지를 가장 작게 하는 문제이므로, [변분법](calculus-of-variations.md)의 구속조건 문제가 되고 Lagrange 곱수와 Beltrami 항등식으로 풀린다.

# 직관

사슬을 양 끝에서 잡아 늘어뜨리면 아래로 처진 곡선이 나온다. 모양이 포물선처럼 보이지만 포물선인지는 식을 세워 봐야 한다.

사슬은 위치 에너지가 가장 작은 모양을 취한다. 선밀도가 $\rho$ 로 일정하므로 길이 요소 $ds$ 가 갖는 위치 에너지는 $\rho gy\thinspace ds$ 이고, 둘째 좌표를 위로 재면 전체 위치 에너지는 $\rho g\int y\sqrt{1+y'^2}\thinspace dx$ 다.

이 값만 작게 하려 하면 사슬이 끝없이 아래로 늘어진다. 사슬의 길이 $\int\sqrt{1+y'^2}\thinspace dx$ 는 정해진 값이므로 그 조건 아래에서 최소를 찾아야 하고, 이것이 구속조건이 붙은 변분 문제다.

구속조건은 Lagrange 곱수 $\lambda$ 를 써서 $y-\lambda$ 를 높이 자리에 놓는 것으로 처리된다. 바뀐 피적분함수에는 $x$ 가 명시적으로 없으므로 Beltrami 항등식이 한 번 적분해 주고, 남는 1 계 방정식의 해가 쌍곡코사인이다.

# 정의

사슬의 양 끝을 $(0,y\_0)$ 과 $(a,y\_1)$ 에 두고 모양을 $y:\lbrack 0,a\rbrack\to\mathbb R$ 로 쓴다. 둘째 좌표는 위로 잰다.

$$
U\lbrack y\rbrack=\rho g\int_0^ay\sqrt{1+y'^2}\thinspace dx,\qquad L\lbrack y\rbrack=\int_0^a\sqrt{1+y'^2}\thinspace dx
$$

길이 $L\lbrack y\rbrack$ 를 정해진 값 $\ell$ 로 고정했을 때 $U\lbrack y\rbrack$ 를 가장 작게 하는 곡선을 **현수선**이라 한다.

# 성질

## 쌍곡코사인 해

구속조건을 Lagrange 곱수로 넣으면 피적분함수가 $F=(y-\lambda)\sqrt{1+y'^2}$ 다. $F$ 가 $x$ 를 명시적으로 포함하지 않으므로 Beltrami 항등식을 쓴다.

$$
F-y'\frac{\partial F}{\partial y'}=\frac{y-\lambda}{\sqrt{1+y'^2}}=C
$$

**정리.** 이 방정식의 해는 쌍곡코사인이다.[^1]

$$
y=\lambda+C\cosh\frac{x-x_0}{C}
$$

확인은 대입이다. $y'=\sinh((x-x_0)/C)$ 이고 $1+\sinh^2 t=\cosh^2 t$ 이므로 $\sqrt{1+y'^2}=\cosh((x-x_0)/C)$ 이고, 따라서 $(y-\lambda)/\sqrt{1+y'^2}=C$ 다. 상수 $\lambda$, $C$, $x_0$ 은 두 끝점과 길이 $\ell$ 이 정한다.

## 포물선과의 구별

포물선은 이 방정식을 만족하지 않는다. $y=\alpha x^2$ 를 넣으면 좌변이 $\alpha x^2-\lambda$ 이고 오른쪽이 $C\sqrt{1+4\alpha^2x^2}$ 다. $x$ 가 커질 때 왼쪽은 $x^2$ 에 비례하고 오른쪽은 $x$ 에 비례하므로 두 식이 같을 수 없다.

두 곡선은 꼭짓점 근처에서만 가깝다. $\cosh t=1+t^2/2+t^4/24+\cdots$ 이므로 $C$ 에 비해 $\lvert x-x_0\rvert$ 가 작은 구간에서 현수선은 포물선과 $4$ 차항까지 어긋나지 않는다.

## 장력에서 오는 유도

사슬의 한 점에서 장력의 수평성분을 $H$ 라 하면 $H$ 는 사슬 전체에서 일정하고, 수직성분은 최저점에서 그 점까지의 무게 $\rho gs$ 다. 여기서 $s$ 는 호의 길이다. 장력이 접선 방향이므로 다음이 성립한다.

$$
\frac{dy}{dx}=\frac{\rho gs}{H}
$$

양변을 $x$ 로 미분하고 $ds/dx=\sqrt{1+y'^2}$ 을 넣으면 $y''=(\rho g/H)\sqrt{1+y'^2}$ 이고, 해는 위와 같은 쌍곡코사인이며 $C=H/(\rho g)$ 다. 변분 쪽 상수 $C$ 가 수평 장력을 중력 선밀도로 나눈 값이라는 것이 이 유도에서 나온다.

# 활용

- **현수교의 포물선.** 케이블이 자기 무게만 지탱하면 현수선이지만, 수직 행어로 다리 바닥을 지탱하면 하중이 수평 거리에 비례해 $y''=\text{상수}$ 가 되고 케이블이 포물선이 된다. 두 모양이 갈리는 자리는 하중이 호의 길이에 비례하는지 수평 거리에 비례하는지다.
- **압축만 받는 아치.** 현수선을 위아래로 뒤집은 아치는 자기 무게 아래에서 축방향 압축만 받고 휨모멘트가 생기지 않는다. Gaudí 가 Sagrada Família 의 기둥과 아치를 이 모양으로 세웠다.
- **구속조건 문제의 본보기.** 길이를 고정하는 조건이 Lagrange 곱수 하나로 처리되는 가장 간단한 경우이고, [변분법](calculus-of-variations.md)의 구속조건 절이 드는 등주 문제와 같은 꼴이다.

[^1]: H. Goldstine, *A History of the Calculus of Variations from the 17th through the 19th Century*, Springer, 1980, 1 장. Galileo 가 포물선이라 적은 것과 Huygens, Leibniz, Johann Bernoulli 가 1691 년에 얻은 해가 실려 있다.

# 연관 문서

## 선수지식

- [변분법](calculus-of-variations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization #differential_geometry
