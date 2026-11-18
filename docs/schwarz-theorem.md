# Schwarz 정리

# 개요

**Schwarz 정리(Schwarz's theorem)** 는 이계 편미분이 연속인 함수에서 $x$ 로 먼저 미분하고 $y$ 로 미분한 값과 순서를 바꾸어 미분한 값이 같다는 정리다. $f(x,y)=x^3y^2$ 을 $x$ 로 미분한 뒤 $y$ 로 미분하면 $6x^2y$ 이고, $y$ 로 미분한 뒤 $x$ 로 미분해도 $6x^2y$ 다. Schwarz 정리는 두 순서가 모두 직사각형 네 꼭짓점의 같은 차분의 극한이라는 것으로 이 일치를 증명하고, 이계 편미분이 연속이 아니면 두 값이 다를 수 있음을 보인다.

# 직관

$f(x,y)=x^3y^2$ 의 점 $(1,1)$ 에서 가로세로가 $h=0.1$ 인 정사각형의 네 꼭짓점 값을 다음처럼 더하고 뺀다.

$$
\Delta=f(1.1,\thinspace 1.1)-f(1.1,\thinspace 1)-f(1,\thinspace 1.1)+f(1,\thinspace 1)
$$

앞의 두 항을 묶으면 $x=1.1$ 에서 $y$ 방향으로 잰 변화이고, 뒤의 두 항은 $x=1$ 에서 잰 같은 변화다. 그러므로 $\Delta$ 는 "$y$ 방향 변화" 가 $x$ 를 따라 얼마나 바뀌는지이고, $\Delta/h^2$ 은 $y$ 로 미분한 뒤 $x$ 로 미분한 값에 가깝다.

같은 네 항을 첫째와 셋째, 둘째와 넷째로 묶으면 $y=1.1$ 과 $y=1$ 에서 잰 $x$ 방향 변화의 차다. 그러므로 $\Delta/h^2$ 은 $x$ 로 미분한 뒤 $y$ 로 미분한 값에도 가깝다. 하나의 수 $\Delta$ 를 두 방법으로 묶은 것이므로 두 순서의 극한은 같아야 한다.

이 함수에서는 $\Delta$ 가 두 차의 곱으로 나뉜다.

$$
\Delta=(1.1^3-1)(1.1^2-1)=0.331\times0.21=0.06951
$$

그러므로 $\Delta/h^2=6.951$ 이다. $h$ 를 줄이면 이 값은 $6x^2y$ 의 $(1,1)$ 에서의 값 $6$ 으로 간다.

# 정의

열린집합 $U\subseteq\mathbb R^2$ 위의 함수 $f$ 의 **이계 혼합 편미분(mixed second partial derivative)** 은 다음 두 극한이다.

$$
f_{xy}=\frac{\partial}{\partial y}\Bigl(\frac{\partial f}{\partial x}\Bigr),\qquad f_{yx}=\frac{\partial}{\partial x}\Bigl(\frac{\partial f}{\partial y}\Bigr)
$$

아래첨자는 미분하는 순서대로 적는다. 직관 절의 $f=x^3y^2$ 은 $f_x=3x^2y^2$ 이므로 $f_{xy}=6x^2y$ 이고, $f_y=2x^3y$ 이므로 $f_{yx}=6x^2y$ 다.

모든 이계 편미분이 존재하고 연속인 함수를 $C^2$ 함수라 한다. $\mathbb R^n$ 에서는 두 좌표 $x_i$, $x_j$ 를 골라 같은 방법으로 $\partial_j\partial_i f$ 를 정의한다.

# 성질

## Schwarz 정리

$f$ 가 점 $(a,b)$ 근처에서 $C^2$ 이면 다음이 성립한다[^1].

$$
f_{xy}(a,b)=f_{yx}(a,b)
$$

증명의 요지. 직관 절의 $\Delta$ 를 $s$, $t$ 에 대해 다음으로 둔다.

$$
\Delta(s,t)=f(a+s,b+t)-f(a+s,b)-f(a,b+t)+f(a,b)
$$

 $g(x)=f(x,b+t)-f(x,b)$ 이면 $\Delta=g(a+s)-g(a)$ 다. [평균값 정리](mean-value-theorem.md)를 $g$ 에 쓰고, 그 결과에 다시 $y$ 방향으로 쓰면 $\Delta=st\thinspace f_{xy}(\xi,\eta)$ 인 점 $(\xi,\eta)$ 가 사각형 안에 있다.

묶는 순서를 바꾸어 $k(y)=f(a+s,y)-f(a,y)$ 로 같은 계산을 하면 $\Delta=st\thinspace f_{yx}(\xi',\eta')$ 인 점이 있다. $s,t\to0$ 이면 두 점이 모두 $(a,b)$ 로 가고, 연속성으로 $f_{xy}(a,b)=f_{yx}(a,b)$ 다.

## 연속성이 없는 반례

원점에서 $0$ 이고 그 밖에서 다음 식으로 주어진 함수는 모든 이계 편미분이 존재하지만 원점에서 $f_{xy}\ne f_{yx}$ 다.

$$
f(x,y)=\frac{xy(x^2-y^2)}{x^2+y^2}
$$

$y\ne0$ 이면 $f_x(0,y)=\lim_{h\to0}f(h,y)/h=-y$ 이고, $f_x(0,0)=0$ 이므로 $f_x(0,y)=-y$ 가 모든 $y$ 에서 성립한다. 그러므로 $f_{xy}(0,0)=-1$ 이다. 같은 계산으로 $f_y(x,0)=x$ 이고 $f_{yx}(0,0)=1$ 이다. 이 함수의 $f_{xy}$ 는 원점에서 연속이 아니다.

## 고계 편미분

$f$ 가 $C^k$ 이면 $k$ 계 이하의 편미분은 미분하는 순서에 무관하다. 순서를 바꾸는 일은 이웃한 두 미분을 맞바꾸는 일을 되풀이해서 할 수 있고, 맞바꿀 때마다 Schwarz 정리를 쓴다. 그래서 $C^k$ 함수의 $k$ 계 편미분은 각 변수로 몇 번 미분했는지만으로 정해진다.

# 활용

- [Hessian 행렬](hessian.md): $C^2$ 함수의 이계 편미분을 늘어놓은 행렬이 대칭이고, 그래서 고윳값이 실수이고 직교 대각화된다.
- [선적분](line-integral.md): 보존장 $F=\nabla f=(P,Q)$ 는 $P_y=f_{xy}=f_{yx}=Q_x$ 를 만족해야 한다. 벡터장 $(-y,x)$ 는 $P_y=-1$, $Q_x=1$ 이므로 보존장이 아니다.
- [Kelvin–Stokes 정리](kelvin-stokes-theorem.md): 기울기 벡터장의 회전이 $0$ 이라는 것과 회전의 발산이 $0$ 이라는 것은 각 성분이 혼합 편미분의 차이므로 이 정리에서 나온다.
- [미분형식](differential-forms.md): 외미분을 두 번 하면 $0$ 이라는 $d\circ d=0$ 은 혼합 편미분의 대칭과 쐐기곱의 반대칭성이 항을 지워서 나온다.
- 열역학: 내부 에너지 같은 상태함수의 이계 혼합 편미분이 같다는 것에서 Maxwell 관계식(Maxwell relations)이 나온다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, Theorem 9.41. 반례는 같은 책 9 장 연습문제 27.

# 연관 문서

## 선수지식

- [평균값 정리](mean-value-theorem.md)

## 더 알아보기

- [Hessian 행렬](hessian.md)

#analysis #differential_geometry
