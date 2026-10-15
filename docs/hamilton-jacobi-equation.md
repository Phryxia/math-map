# Hamilton-Jacobi 방정식

# 개요

Hamilton–Jacobi 방정식은 Hamilton 계의 운동을 함수 하나가 만족하는 1차 편미분방정식으로 적는다. [Hamilton 역학](hamiltonian-mechanics.md)의 정준방정식은 $2n$ 개의 연립 상미분방정식이지만, 생성함수 $S(q,t)$ 를

$$
\frac{\partial S}{\partial t}+H\left(q,\frac{\partial S}{\partial q}\right)=0
$$

의 해로 구하면 그 편미분으로 운동 전체가 나온다.

해의 그래프는 [Lagrangian 부분다양체](lagrangian-submanifolds.md)이고, 그 위에서 Hamilton 흐름이 특성곡선이 된다.

# 직관

좌표를 잘 바꾸면 새 Hamilton 함수가 새 좌표에 의존하지 않고, 그러면 새 운동량이 모두 보존량이 되어 운동이 등속으로 적힌다. Lagrangian 부분다양체 문서의 생성함수가 좌표 바꾸기를 하나씩 주므로, 바꾼 뒤의 Hamilton 함수를 가장 단순하게 만드는 생성함수를 찾으면 된다.

가장 단순한 요구는 새 Hamilton 함수가 $0$ 이라는 것이다. 생성함수가 시간에 의존하면 바꾼 뒤의 Hamilton 함수는 $H+\partial S/\partial t$ 이고, 여기에 $p=\partial S/\partial q$ 를 넣어 $0$ 으로 두면 위 방정식이 나온다.

직선 위를 움직이는 자유입자로 풀어 본다. $H=p^2/2m$ 이므로 방정식은 $S\_t+(S\_q)^2/2m=0$ 이다. $S=-Et+W(q)$ 로 두면 $(W')^2=2mE$ 이고 $W=\sqrt{2mE}\thinspace q$ 이므로

$$
S(q,E,t)=\sqrt{2mE}\thinspace q-Et
$$

다. $E$ 를 매개변수로 보고 $\partial S/\partial E$ 를 상수 $\beta$ 로 두면 $q\sqrt{m/2E}-t=\beta$ 이고, 정리하면 $q=\sqrt{2E/m}\thinspace(t+\beta)$ 다. 등속 운동이 적분 없이 나왔고 $E$ 와 $\beta$ 가 두 적분상수다.

매개변수가 $n$ 개 든 해 하나에서 같은 방식으로 $2n$ 개의 적분상수가 나온다. 이렇게 상미분방정식 $2n$ 개를 편미분방정식 하나로 바꾸는 것이 Hamilton–Jacobi 방정식이다.

# 정의

Hamilton–Jacobi 방정식은 Hamilton 함수 $H$ 에 대해 미지함수 $S$ 가 만족하는 다음 편미분방정식이다.

$$
\frac{\partial S}{\partial t}+H\left(q^1,\dots,q^n,\frac{\partial S}{\partial q^1},\dots,\frac{\partial S}{\partial q^n},t\right)=0
$$

$S$ 를 **Hamilton 주함수**라 한다. $H$ 가 $t$ 에 의존하지 않으면 $S=W(q)-Et$ 로 두어

$$
H\left(q,\frac{\partial W}{\partial q}\right)=E
$$

를 얻고, $W$ 를 **Hamilton 특성함수**라 한다.

매개변수 $\alpha=(\alpha\_1,\dots,\alpha\_n)$ 을 가진 해 $S(q,\alpha,t)$ 가

$$
\det\left(\frac{\partial^2S}{\partial q^i\partial\alpha\_j}\right)\ne0
$$

을 만족하면 **완전해**라 한다.

# 성질

## Jacobi 정리

**정리.** $S(q,\alpha,t)$ 가 완전해이면

$$
p\_i=\frac{\partial S}{\partial q^i},\qquad \beta\_i=\frac{\partial S}{\partial\alpha\_i}
$$

에서 $\alpha$ 와 $\beta$ 를 상수로 놓고 $q$ 와 $p$ 를 풀어낸 것이 정준방정식의 해다.[^1]

$S$ 를 생성함수로 하는 좌표 바꾸기는 $(q,p)$ 를 $(\alpha,\beta)$ 로 보내고, 완전해 조건이 음함수 정리로 그 바꾸기의 가역성을 준다. 바꾼 뒤의 Hamilton 함수는 $H+\partial S/\partial t$ 이고 방정식에 의해 $0$ 이므로 $\dot\alpha=0$ 과 $\dot\beta=0$ 이다. ∎

## 해의 그래프와 Lagrangian 성질

**정리.** $W$ 가 $H(q,\partial W/\partial q)=E$ 의 해이면 $\Gamma=\lbrace(q,dW\_q)\rbrace\subset T^\ast N$ 은 $H^{-1}(E)$ 에 든 Lagrangian 부분다양체다.

$\Gamma$ 가 Lagrangian 인 것은 $d(dW)=0$ 과 Lagrangian 부분다양체 문서의 1형식 그래프 판정에서 나온다. $H$ 가 $\Gamma$ 위에서 $E$ 인 것이 방정식 자체다. ∎

역으로 $H^{-1}(E)$ 에 든 Lagrangian 부분다양체가 밑공간으로 국소 미분동형이면, 그 부분다양체는 국소적으로 어떤 $W$ 의 그래프이고 $W$ 가 방정식을 만족한다.

## 특성곡선과 Hamilton 흐름

**정리.** $X\_H$ 의 적분곡선은 $\Gamma$ 에 접한다.

$\Gamma$ 가 $H^{-1}(E)$ 에 들고 Lagrangian 이므로, $T\Gamma$ 는 $\Gamma$ 위에서 $\omega$ 가 소멸하는 최대 차원 공간이다. $\omega(X\_H,v)=dH(v)=0$ 이 모든 $v\in T\Gamma$ 에서 성립하므로 $X\_H$ 가 $T\Gamma$ 의 심플렉틱 여공간에 들고, Lagrangian 은 자기 여공간과 같으므로 $X\_H\in T\Gamma$ 다. ∎

그러므로 한 점에서 출발한 Hamilton 흐름을 모아 $\Gamma$ 를 만들 수 있고, 이것이 1차 편미분방정식의 특성곡선법이다.

## 주함수와 작용

**정리.** 고정된 점 $q\_0$ 에서 시각 $t$ 에 $q$ 에 닿는 운동이 하나뿐인 범위에서, 그 운동을 따라 Lagrange 함수를 적분한 값

$$
S(q,t)=\int\_0^t L(\gamma(s),\dot\gamma(s))\thinspace ds
$$

가 Hamilton–Jacobi 방정식의 해다.[^1]

변분법의 1차 변분 공식이 끝점을 움직일 때 $\partial S/\partial q=p$ 와 $\partial S/\partial t=-H$ 를 주므로 방정식이 성립한다. ∎

운동이 둘 이상 닿는 범위에서는 특성곡선이 교차하고 이 $S$ 가 매끄럽지 않다. 매끄러운 해는 일반적으로 국소적으로만 있고, 교차 뒤까지 이어지는 해는 [점성해](viscosity-solutions.md)로 정의한다.[^2]

# 활용

- [적분가능계](integrable-systems.md)의 작용-각 좌표를 실제로 계산하는 방법이다. $W=\sum\_iW\_i(q^i)$ 꼴로 변수분리가 되면 각 $W\_i$ 가 1변수 적분으로 풀리고, 그 적분이 작용 변수를 준다.
- [Lagrangian 부분다양체](lagrangian-submanifolds.md)의 생성함수를 정하는 방정식이다. 생성함수를 아무 함수로 잡으면 좌표 바꾸기가 하나 나오지만, Hamilton 함수를 단순하게 만드는 바꾸기를 얻으려면 이 방정식을 풀어야 한다.
- [측지선](geodesics.md)은 $H(q,p)=\tfrac12g^{ij}p\_ip\_j$ 의 흐름이므로, $g^{ij}\partial\_iW\partial\_jW=1$ 의 해가 측지선에 수직인 초곡면족을 준다. 기하광학의 파면이 이 초곡면이다.
- [동적 계획법](dynamic-programming.md)의 연속시간 판본에서 가치함수가 만족하는 방정식이 이 방정식의 최솟값 형태다. 제어 변수에 대한 최솟값이 $H$ 자리에 들어간다.

[^1]: V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2판, Springer Graduate Texts in Mathematics 60 (1989), 9 장 46 절과 47 절. Jacobi 정리, 주함수와 작용의 관계, 변수분리가 여기 있다.
[^2]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 3 장. 특성곡선법으로 얻는 해의 국소성, 특성곡선이 교차하는 경우, 점성해의 정의를 다룬다.

# 연관 문서

## 선수지식

- [Hamilton 역학](hamiltonian-mechanics.md)
- [Lagrangian 부분다양체](lagrangian-submanifolds.md)

## 더 알아보기

- [점성해](viscosity-solutions.md)

#differential_geometry #analysis #optimization
