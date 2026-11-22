# Wente 부등식

# 개요

**Wente 부등식(Wente's inequality)** 은 평면에서 [Poisson 방정식](poisson-equation.md)의 우변이 두 함수의 Jacobi 행렬식이면, 우변이 적분 가능하다는 것만으로도 해가 유계이고 연속이라는 부등식이다. 비누막처럼 평균곡률이 일정한 곡면을 등각으로 매개화하면 그 매개화는 우변이 이런 행렬식인 방정식을 만족하고, 곡면이 찢어지거나 끊기는 점이 있는지를 물어야 한다.

Wente 부등식은 해의 최댓값을 두 함수의 에너지의 곱으로 누른다. 그래서 에너지가 유한한 매개화는 연속이다.

# 직관

원판 $B\subset\mathbb R^2$ 위에서 $\Delta\varphi=f$, 경계에서 $\varphi=0$ 인 문제를 본다. $f$ 가 적분 가능하기만 하면 $\varphi$ 는 유계가 아닐 수 있다. 원점 근처에서 $\varphi(x)=\log\log(1/\vert x\vert)$ 는 $\Delta\varphi=-1/(\vert x\vert^2\log^2\vert x\vert)$ 가 적분 가능하지만 원점에서 무한대로 간다.

$f$ 가 두 함수 $a,b$ 의 Jacobi 행렬식 $a_xb_y-a_yb_x$ 이면 상황이 다르다. 이 식은 $(ab_y)\_x-(ab_x)\_y$ 로 다시 적히는 발산 꼴이고, 발산이 $0$ 인 장 $(b_y,-b_x)$ 와 기울기 $\nabla a$ 의 내적이다. 그런 내적에서는 $f$ 의 큰 값과 작은 값이 서로 지워져, $\log\log$ 같은 해가 생기지 않는다.

$a=x$, $b=y$ 이면 $f=1$ 이고 $\varphi=(x^2+y^2-1)/4$ 다. 최댓값 $\vert\varphi\vert$ 는 $1/4$ 이고, $\int_B\vert\nabla a\vert^2=\int_B\vert\nabla b\vert^2=\pi$ 다.

# 정의

정리(Wente). $a,b\in H^1(B)$ 이고 $\varphi\in H^1_0(B)$ 가 다음 방정식의 약해라 하자.

$$
\Delta\varphi=a_xb_y-a_yb_x
$$

그러면 $\varphi$ 는 연속이고 다음이 성립한다[^1][^2].

$$
\Vert\varphi\Vert\_{L^\infty}+\Vert\nabla\varphi\Vert\_{L^2}\le C\Vert\nabla a\Vert\_{L^2}\Vert\nabla b\Vert\_{L^2}
$$

상수 $C$ 는 $a$ 와 $b$ 에 의존하지 않는다. 우변은 $a$ 와 $b$ 에 상수를 더해도 바뀌지 않으며, 원판을 확대하거나 등각사상으로 옮겨도 바뀌지 않는다.

# 성질

## 실 Hardy 공간을 쓰는 증명

$a,b$ 를 $\mathbb R^2$ 의 $H^1$ 함수로 연장하면 Coifman–Lions–Meyer–Semmes 정리로 Jacobi 행렬식은 [실 Hardy 공간](real-hardy-spaces.md) $\mathcal H^1$ 에 들고 그 노름은 $C\Vert\nabla a\Vert\_{L^2}\Vert\nabla b\Vert\_{L^2}$ 이하다. $\mathcal H^1$ 에서 Riesz 변환이 유계이므로 $\Delta^{-1}$ 을 취한 함수의 이계 도함수가 적분 가능하다. 평면에서 이계 도함수가 적분 가능한 함수는 연속이고 유계다. 경계값을 맞추는 조화함수는 [최대값 원리](maximum-principle.md)로 같은 상수 안에 든다.

## 최적 상수

원판에서 $\Vert\varphi\Vert\_{L^\infty}\le\tfrac{1}{2\pi}\Vert\nabla a\Vert\_{L^2}\Vert\nabla b\Vert\_{L^2}$ 이고, 상수 $1/(2\pi)$ 는 더 줄일 수 없다[^3]. 직관 절의 예에서 왼쪽은 $1/4$, 오른쪽은 $\pi/(2\pi)=1/2$ 다.

## 고차원과 다른 우변

우변이 $\nabla a$ 와 $\nabla b$ 의 일반적인 이차식이면 이 부등식은 성립하지 않는다. $a_xb_x$ 처럼 지워짐이 없는 곱은 적분 가능할 뿐이고, 직관 절의 $\log\log$ 해를 막지 못한다. $n$ 차원에서는 $n$ 개 함수의 Jacobi 행렬식이 $W^{1,n}$ 함수들에 대해 같은 역할을 한다.

# 활용

- 상수 평균곡률 곡면. 평균곡률이 $H$ 인 곡면의 등각 매개화 $u$ 는 $\Delta u=2H\thinspace u_x\times u_y$ 를 만족한다. 외적의 각 성분이 두 성분 함수의 Jacobi 행렬식이므로 Wente 부등식으로 $H^1$ 매개화가 연속이다. Wente 는 이 추정으로 주어진 경계 곡선을 가지는 상수 평균곡률 원판의 존재를 증명했다[^1].
- 조화사상. [Hélein 정칙성 정리](helein-regularity-theorem.md)의 증명은 평면 조화사상 방정식의 비선형 항을 Jacobi 꼴의 합으로 바꾸고 이 부등식과 같은 추정을 쓴다.
- 등각 불변 문제의 몰림. 에너지가 작은 원판에서 Wente 부등식이 해의 진동을 누르므로, 에너지가 모이는 점은 유한 개다.

[^1]: H. C. Wente, "An existence theorem for surfaces of constant mean curvature", *Journal of Mathematical Analysis and Applications* **26** (1969), 318–344.

[^2]: F. Hélein, *Harmonic Maps, Conservation Laws and Moving Frames*, 2nd ed., Cambridge University Press (2002), Chapter 3.

[^3]: P. Topping, "The optimal constant in Wente's L∞ estimate", *Commentarii Mathematici Helvetici* **72** (1997), 316–328.

# 연관 문서

## 선수지식

- [실 Hardy 공간](real-hardy-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
