# 주운동학 공식

# 개요

**주운동학 공식(principal kinematic formula)** 은 볼록한 도형 하나를 고정하고 다른 볼록한 도형을 무작위 위치와 각도로 놓을 때, 두 도형이 겹치는 놓는 방법 전체의 크기를 두 도형의 넓이와 둘레만으로 주는 공식이다. 한 변이 $1$ 인 정사각형 타일을 바닥에 놓인 같은 크기의 정사각형 위로 던지면, 겹치는 위치의 넓이가 타일의 각도에 따라 $4$ 에서 $2+2\sqrt2$ 사이로 바뀐다.

각도마다 다른 이 넓이를 모든 각도에 대해 적분한 값은 두 도형의 넓이의 합과 둘레의 곱으로 정해지고, 그 값으로 던진 도형이 고정된 도형과 만날 확률을 계산한다.

# 직관

한 변이 $1$ 인 정사각형 $K$ 를 고정하고, 같은 정사각형 $L$ 을 각도 $\theta$ 만큼 돌린 뒤 평행이동한다. $L$ 의 중심이 어느 영역에 있을 때 두 정사각형이 겹치는지를 본다.

$\theta=0$ 이면 두 중심의 가로 차와 세로 차가 모두 $1$ 이하일 때 겹친다. 그런 중심의 영역은 한 변이 $2$ 인 정사각형이라 넓이가 $4$ 다.

$\theta=\pi/4$ 이면 $L$ 은 대각선이 $\sqrt2$ 인 마름모처럼 놓인다. 겹치는 중심의 영역은 $K$ 를 그 마름모만큼 부풀린 팔각형이고 넓이가 $2+2\sqrt2\approx 4.83$ 이다. 두 넓이 $1+1$ 은 각도와 상관없고, 나머지 $2$ 와 $2\sqrt2$ 가 각도에 따라 바뀐다.

바뀌는 부분을 $\theta$ 에 대해 $0$ 에서 $2\pi$ 까지 평균 내면 두 둘레의 곱을 $2\pi$ 로 나눈 값 $16/2\pi=8/\pi$ 가 된다. 그래서 각도까지 적분한 크기는 다음과 같다.

$$
2\pi\Bigl(1+1+\frac{8}{\pi}\Bigr)=4\pi+16\approx 28.57
$$

# 정의

평면의 **강체운동(rigid motion)** 은 회전 뒤 평행이동하는 사상 $g(z)=e^{i\theta}z+a$ 다. 강체운동 전체의 측도를 평행이동 $a=(x,y)$ 의 넓이와 각 $\theta\in\lbrack 0,2\pi)$ 의 곱 $dg=dx\thinspace dy\thinspace d\theta$ 로 잡는다. 이 측도는 강체운동군의 [Haar 측도](haar-measure.md)다.

$K$ 와 $L$ 이 평면의 콤팩트 볼록집합이면 $K\cap gL$ 도 볼록이므로, 그 [Euler 지표](euler-characteristic.md) $\chi(K\cap gL)$ 는 둘이 만나면 $1$, 아니면 $0$ 이다. 직관 절의 $28.57$ 은 $\chi(K\cap gL)$ 를 $dg$ 로 적분한 값이다.

$A\_K$, $P\_K$ 는 $K$ 의 넓이와 둘레다. 직관 절의 정사각형은 $A=1$, $P=4$ 다.

# 성질

## 평면의 주운동학 공식

$K$, $L$ 이 평면의 콤팩트 볼록집합이면 다음이 성립한다. 이것을 Blaschke 공식(Blaschke's formula)이라고도 한다.[^1]

$$
\int\chi(K\cap gL)\thinspace dg=2\pi(A\_K+A\_L)+P\_KP\_L
$$

증명의 요지. 각 $\theta$ 를 고정하면 $K$ 와 $e^{i\theta}L+a$ 가 만나는 $a$ 의 집합은 Minkowski 합(Minkowski sum) $K+(-e^{i\theta}L)$ 이다. 그 넓이는 [혼합부피](mixed-volumes.md)로 $A\_K+A\_L+2V(K,-e^{i\theta}L)$ 이다. 혼합 넓이(mixed area) $V(K,M)$ 은 $K$ 의 둘레를 따라 $M$ 의 지지함수(support function)를 적분한 값의 절반이고, 지지함수를 각도에 대해 평균 내면 $M$ 의 둘레를 $2\pi$ 로 나눈 값이 된다. 그러므로 $2V$ 의 평균은 $P\_KP\_L/2\pi$ 이고, $\theta$ 로 적분하면 공식이 나온다.

반지름 $r$, $R$ 인 두 원판이면 두 중심의 거리가 $r+R$ 이하일 때 만나므로 좌변은 $2\pi\cdot\pi(r+R)^2$ 이다. 우변 $2\pi(\pi r^2+\pi R^2)+4\pi^2rR$ 와 같다.

## 무작위로 던진 도형이 만날 확률

$K\subseteq D$ 이고 $D$ 도 볼록일 때, $D$ 와 만나는 강체운동 가운데 고르게 하나를 뽑아 $L$ 을 놓으면 $L$ 이 $K$ 와 만날 확률은 다음이다.

$$
\frac{2\pi(A\_K+A\_L)+P\_KP\_L}{2\pi(A\_D+A\_L)+P\_DP\_L}
$$

$L$ 이 길이 $\ell$ 인 선분이면 $A\_L=0$, $P\_L=2\ell$ 이다. 반지름 $r$ 인 원판 $K$ 와 만나는 측도는 $2\pi^2r^2+4\pi r\ell$ 이고, [Buffon 의 바늘 문제](buffons-needle.md)처럼 바늘을 던지는 문제가 이 꼴의 비로 풀린다.

## 곡선의 교점과의 관계

두 볼록집합의 경계 곡선이 만나는 점의 수를 강체운동에 대해 적분하면, [Crofton 공식](crofton-formula.md) 문서의 Poincaré 공식으로 $4P\_KP\_L$ 이다. 주운동학 공식은 교점의 수 대신 두 집합이 만나는지를 세므로, 한 집합이 다른 집합 안에 들어가 경계가 만나지 않는 위치까지 센다. 넓이 항 $2\pi(A\_K+A\_L)$ 이 그 차이에서 나온다.

## 공간의 주운동학 공식

$\mathbb R^3$ 에서 회전의 측도 전체를 $8\pi^2$ 로 잡으면 볼록체 $K$, $L$ 에 대해 다음이 성립한다.[^1]

$$
\int\chi(K\cap gL)\thinspace dg=8\pi^2(V\_K+V\_L)+2\pi(S\_KM\_L+S\_LM\_K)
$$

$V$ 는 부피, $S$ 는 겉넓이, $M$ 은 경계에서 평균곡률을 적분한 값이다. 반지름 $r$ 인 공은 $V=4\pi r^3/3$, $S=4\pi r^2$, $M=4\pi r$ 이고, 두 공에 넣으면 좌변 $8\pi^2\cdot\frac43\pi(r+R)^3$ 과 같다. $n$ 차원에서는 같은 꼴이 [내재부피](intrinsic-volumes.md)의 곱의 합으로 적힌다.

# 활용

- 기하 확률. 판에 무작위로 떨어진 동전이나 바늘이 고정된 볼록 무늬와 겹칠 확률을 위 확률 식으로 구한다. 무늬가 볼록 도형의 합집합이면 $\chi$ 가 덧셈적이라 무늬마다 더하고 겹친 부분을 빼서 같은 식을 쓴다.
- 입체계측학(stereology). 재료 안에 볼록한 알갱이가 흩어져 있을 때, 무작위 시험 도형과 만나는 알갱이 수의 기댓값이 알갱이의 넓이, 둘레 또는 부피, 겉넓이, 평균곡률 적분의 합으로 적힌다. 단면에서 센 수로 이 기하량을 추정한다.
- 등주부등식의 증명. 볼록집합 $K$ 와 반지름이 $K$ 의 내접원 반지름 $r$ 과 외접원 반지름 $R$ 사이인 원판에 주운동학 공식과 Poincaré 공식을 함께 쓰면 Bonnesen 부등식(Bonnesen's inequality) $P\_K^2-4\pi A\_K\ge\pi^2(R-r)^2$ 이 나온다.[^1] [등주부등식](isoperimetric-inequality.md) $P\_K^2\ge 4\pi A\_K$ 는 그 따름정리다.

[^1]: L. A. Santaló, *Integral Geometry and Geometric Probability*, 2nd ed., Cambridge University Press, 2004, 6 장과 15 장.

# 연관 문서

## 선수지식

- [Crofton 공식](crofton-formula.md)
- [내재부피](intrinsic-volumes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #probability #measure_theory
