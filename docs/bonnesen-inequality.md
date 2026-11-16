# Bonnesen 부등식

# 개요

**Bonnesen 부등식(Bonnesen's inequality)** 은 평면의 볼록한 도형이 원에서 얼마나 먼지를, 둘레와 넓이로 만든 수 하나로 아래에서 잡는 부등식이다. 둘레 $P$ 와 넓이 $A$ 사이에는 [등주부등식](isoperimetric-inequality.md) $P^2\ge 4\pi A$ 가 성립하고 등호는 원에서만 나온다. 한 변이 $1$ 인 정사각형은 $P^2-4\pi A=16-4\pi\approx 3.43$ 이고, 이 차이가 작으면 도형이 원에 가까운지가 문제다.

Bonnesen 부등식은 이 차이가 내접원과 외접원의 반지름 차의 제곱의 $\pi^2$ 배 이상임을 보여, 차이가 작은 도형은 두 원 사이의 좁은 고리 안에 든다는 것을 준다.

# 직관

한 변이 $1$ 인 정사각형의 내접원 반지름은 $r=1/2$, 외접원 반지름은 $R=\sqrt2/2\approx 0.707$ 이다. 정사각형의 경계는 두 원 사이의 고리 안에 있고 고리의 폭은 $R-r\approx 0.207$ 이다.

원판이면 $r=R$ 이라 고리의 폭이 $0$ 이고 $P^2-4\pi A$ 도 $0$ 이다. 정사각형에서 $\pi^2(R-r)^2\approx 0.42$ 이고, 이것은 $P^2-4\pi A\approx 3.43$ 보다 작다. 둘레와 넓이로 만든 차이가 고리의 폭을 위에서 잡는다.

# 정의

$K$ 가 평면의 콤팩트 볼록집합이고 내부가 비어 있지 않다고 하자. $P$ 와 $A$ 는 $K$ 의 둘레와 넓이다. $K$ 안에 들어가는 원판의 반지름 가운데 가장 큰 것을 **내접 반지름(inradius)** $r$, $K$ 를 포함하는 원판의 반지름 가운데 가장 작은 것을 **외접 반지름(circumradius)** $R$ 이라 한다. 직관 절의 정사각형은 $r=1/2$, $R=\sqrt2/2$ 다.

$P^2-4\pi A$ 를 $K$ 의 **등주 결손(isoperimetric deficit)** 이라 한다.

# 성질

## 반지름 사이의 이차부등식

$r\le\rho\le R$ 인 모든 $\rho$ 에 대해 다음이 성립한다.[^1]

$$
\pi\rho^2-P\rho+A\le 0
$$

증명의 요지. $r\lt\rho\lt R$ 이면 반지름 $\rho$ 인 원판 $D$ 는 $K$ 안에 들어가지 않고 $K$ 를 포함하지도 않는다. 그러므로 $D$ 를 강체운동으로 옮겨 $K$ 와 만나게 하면 두 경계가 적어도 두 점에서 만난다.

[주운동학 공식](principal-kinematic-formula.md)으로 $D$ 가 $K$ 와 만나는 강체운동의 측도는 $2\pi(A+\pi\rho^2)+2\pi\rho P$ 다. [Crofton 공식](crofton-formula.md) 문서의 Poincaré 공식으로 경계 교점 수의 적분은 $4P\cdot 2\pi\rho$ 다. 교점이 둘 이상이므로 다음이 나온다.

$$
8\pi\rho P\ge 2\bigl(2\pi(A+\pi\rho^2)+2\pi\rho P\bigr)
$$

정리하면 $\rho P\ge A+\pi\rho^2$ 이고, 양 끝 $\rho=r$, $\rho=R$ 은 극한으로 얻는다.

## Bonnesen 부등식

다음이 성립하고, 등호는 $K$ 가 원판일 때만 나온다.[^1]

$$
P^2-4\pi A\ge\pi^2(R-r)^2
$$

증명의 요지. 이차식 $\pi\rho^2-P\rho+A$ 가 $\rho=r$ 과 $\rho=R$ 에서 $0$ 이하이므로 두 근 $\rho\_1\le\rho\_2$ 가 $\rho\_1\le r\le R\le\rho\_2$ 를 만족한다. 두 근의 차는 $\sqrt{P^2-4\pi A}/\pi$ 이고 $R-r$ 이상이다.

$R-r\ge 0$ 이므로 등주부등식 $P^2\ge 4\pi A$ 가 따라 나오고, 등주 결손이 $0$ 이면 $r=R$ 이라 $K$ 가 원판이다.

# 활용

- 등주부등식의 안정성. 등주 결손이 $\varepsilon$ 이하인 볼록 도형은 $R-r\le\sqrt\varepsilon/\pi$ 를 만족하므로, 경계가 반지름 차가 작은 내접원과 외접원 사이에 있다.
- 등주부등식의 등호 조건. 둘레와 넓이가 $P^2=4\pi A$ 를 만족하는 볼록 도형이 원판뿐이라는 것이 $r=R$ 로 바로 나온다.

[^1]: L. A. Santaló, *Integral Geometry and Geometric Probability*, 2nd ed., Cambridge University Press, 2004, 7 장; T. Bonnesen, *Les problèmes des isopérimètres et des isépiphanes*, Gauthier-Villars, 1929.

# 연관 문서

## 선수지식

- [주운동학 공식](principal-kinematic-formula.md)
- [등주부등식](isoperimetric-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #probability
