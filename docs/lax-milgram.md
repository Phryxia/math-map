# Lax–Milgram 정리

# 개요

**Lax–Milgram 정리(Lax–Milgram theorem)** 는 경계값 문제의 해가 존재하고 하나뿐임을 보이는 정리다. $-\Delta u=f$ 의 약한 꼴은 왼쪽이 [Hilbert 공간](hilbert-spaces.md)의 내적이라 Riesz 표현 정리(Riesz representation theorem)로 풀리지만, 항 $b\cdot\nabla u$ 를 더하면 왼쪽이 $u$ 와 $v$ 에 대해 대칭이 아니어서 내적이 되지 않는다. 이 정리는 왼쪽의 형식이 유계이고 $u=v$ 에서 $\Vert u\Vert^2$ 의 상수배 이상이기만 하면 해가 존재하고 유일함을 보인다.

# 직관

$U\subset\mathbb R^n$ 에서 $-\Delta u=f$ 와 경계값 $0$ 을 푼다. 양변에 [Sobolev 공간](sobolev-spaces.md) $H_0^1(U)$ 의 함수 $v$ 를 곱하고 부분적분하면

$$
\int\_U\nabla u\cdot\nabla v\thinspace dx=\int\_U fv\thinspace dx
$$

가 된다. 왼쪽은 $H_0^1(U)$ 의 내적이고 오른쪽은 $v$ 에 대한 유계 선형범함수이므로, Hilbert 공간의 Riesz 표현 정리가 이 식을 만족하는 $u$ 를 하나 준다.

같은 방법으로 $-\Delta u+b\cdot\nabla u=f$ 를 풀면 왼쪽이

$$
\int\_U\nabla u\cdot\nabla v\thinspace dx+\int\_U(b\cdot\nabla u)v\thinspace dx
$$

이다. 둘째 항은 $u$ 와 $v$ 의 자리를 바꾸면 값이 달라진다. 내적이 아니므로 Riesz 표현 정리를 왼쪽에 바로 쓸 수 없다.

대칭을 잃은 것은 $u$ 와 $v$ 를 함께 본 결과이므로, $u$ 를 고정하고 $v$ 만 변수로 본다. 그러면 $v\mapsto B(u,v)$ 가 유계 선형범함수이고 Riesz 표현 정리가 그것을 대표하는 벡터 $Au$ 를 준다. $B(u,v)=\langle Au,v\rangle$ 이므로 방정식은 $Au=w$ 로 바뀌고, 남은 것은 $A$ 가 전단사인지다. $B(u,u)\ge\alpha\Vert u\Vert^2$ 를 가정하면

$$
\alpha\Vert u\Vert^2\le B(u,u)=\langle Au,u\rangle\le\Vert Au\Vert\thinspace\Vert u\Vert
$$

이므로 $\alpha\Vert u\Vert\le\Vert Au\Vert$ 다. 이 부등식이 $A$ 의 단사성과 상의 닫힘을 주고, 상의 직교여공간에 같은 부등식을 쓰면 상이 공간 전체가 된다.

# 정의

## 유계성과 강제성

$H$ 를 실 Hilbert 공간, $B:H\times H\to\mathbb R$ 를 쌍선형형식이라 하자. 상수 $\beta\gt 0$ 이 있어 모든 $u,v\in H$ 에서

$$
\vert B(u,v)\vert\le\beta\Vert u\Vert\thinspace\Vert v\Vert
$$

이면 $B$ 가 **유계(bounded)** 라 한다. 상수 $\alpha\gt 0$ 이 있어 모든 $u\in H$ 에서

$$
B(u,u)\ge\alpha\Vert u\Vert^2
$$

이면 $B$ 가 **강제(coercive)** 라 한다.

- $H=\mathbb R^2$ 에서 $B(u,v)=u_1v_1+u_2v_2+u_1v_2$ 는 대칭이 아니다. $\vert B(u,v)\vert\le 2\Vert u\Vert\thinspace\Vert v\Vert$ 이므로 $\beta=2$ 로 유계이고, $B(u,u)=u_1^2+u_2^2+u_1u_2\ge\tfrac12\Vert u\Vert^2$ 이므로 $\alpha=1/2$ 로 강제다.
- $B(u,v)=u_1v_1-u_2v_2$ 는 $u=(0,1)$ 에서 $B(u,u)=-1$ 이므로 강제가 아니다.
- 직관 절의 $B(u,v)=\int\_U\nabla u\cdot\nabla v\thinspace dx+\int\_U(b\cdot\nabla u)v\thinspace dx$ 는 $b$ 가 상수 벡터이면 $\int\_U(b\cdot\nabla u)u\thinspace dx=\tfrac12\int\_U b\cdot\nabla(u^2)\thinspace dx=0$ 이므로 $B(u,u)=\int\_U\vert\nabla u\vert^2dx$ 이다.

## 약한 꼴 방정식

$f\in H^\ast$ 에 대해, 모든 $v\in H$ 에서 $B(u,v)=f(v)$ 인 $u\in H$ 를 찾는 문제를 **약한 꼴 방정식(weak formulation)** 이라 한다. $H^\ast$ 는 $H$ 의 [쌍대공간](dual-space.md)이다.

미분방정식에서는 방정식에 시험함수를 곱해 부분적분해 이 꼴을 얻는다.

- $U=(0,1)$ 에서 $-u''=1$, $u(0)=u(1)=0$ 의 약한 꼴은 $B(u,v)=\int_0^1u'v'\thinspace dx$, $f(v)=\int_0^1 v\thinspace dx$ 이고, 해는 $u(x)=x(1-x)/2$ 다.

# 성질

## Lax–Milgram 정리

Lax–Milgram 정리는 다음과 같다. $B$ 가 $H$ 에서 유계이고 강제이면, 각 $f\in H^\ast$ 에 대해 모든 $v\in H$ 에서 $B(u,v)=f(v)$ 인 $u\in H$ 가 유일하게 존재하고

$$
\Vert u\Vert\le\frac{1}{\alpha}\Vert f\Vert\_{H^\ast}
$$

가 성립한다.[^1]

증명의 요지. $u$ 를 고정하면 $v\mapsto B(u,v)$ 가 노름 $\beta\Vert u\Vert$ 이하인 유계 선형범함수이므로 Riesz 표현 정리가 $\langle Au,v\rangle=B(u,v)$ 인 $Au\in H$ 를 유일하게 준다. $B$ 의 쌍선형성에서 $A$ 가 선형이고 $\Vert Au\Vert\le\beta\Vert u\Vert$ 다. 강제성은

$$
\alpha\Vert u\Vert^2\le B(u,u)=\langle Au,u\rangle\le\Vert Au\Vert\thinspace\Vert u\Vert
$$

을 주므로 $\alpha\Vert u\Vert\le\Vert Au\Vert$ 이고, $A$ 는 단사이며 상 $R(A)$ 가 닫혀 있다. $w\in R(A)^\perp$ 이면 $\langle Aw,w\rangle=0$ 이고 같은 부등식에서 $w=0$ 이므로 $R(A)=H$ 다. $f$ 에 Riesz 표현 정리를 써서 $\langle w_f,v\rangle=f(v)$ 인 $w_f$ 를 잡으면 $Au=w_f$ 의 해가 유일한 $u$ 이고, $\alpha\Vert u\Vert\le\Vert w\_f\Vert=\Vert f\Vert\_{H^\ast}$ 가 추정을 준다.

$\alpha$ 가 작아질수록 해의 노름 상한이 커진다. 이 비는 뒤의 근사 오차 추정에도 그대로 나타난다.

## 대칭인 경우

$B$ 가 대칭이면 강제성과 유계성은 $B$ 가 $H$ 의 원래 노름과 동치인 노름을 주는 내적이라는 뜻이고, 정리는 그 내적에 대한 Riesz 표현 정리로 바뀐다. 비대칭인 $B$ 까지 결론을 넓힌 것이 Lax–Milgram 정리다.

## 변분 특성

$B$ 가 유계이고 강제이며 대칭이면, 약한 꼴 방정식의 해 $u$ 는

$$
J(v)=\tfrac12 B(v,v)-f(v)
$$

의 유일한 최소점이다.

증명의 요지. $J(u+tv)-J(u)=t\lbrack B(u,v)-f(v)\rbrack+\tfrac12t^2B(v,v)$ 이다. $B(u,v)=f(v)$ 이면 대괄호가 $0$ 이고 남은 항이 $\tfrac12t^2B(v,v)\ge\tfrac12t^2\alpha\Vert v\Vert^2$ 이므로 $v\ne 0,t\ne 0$ 에서 값이 커진다. 거꾸로 $u$ 가 최소점이면 $t$ 에 대한 일차항이 $0$ 이어야 하므로 방정식이 성립한다.

비대칭인 $B$ 에는 이 특성이 없다. 최소화할 범함수가 없는 자리에서도 정리가 해를 주는 점이 Riesz 표현 정리와의 차이다.

## 강제성의 필요성

$H=H_0^1(U)$ 와

$$
B(u,v)=\int\_U\nabla u\cdot\nabla v\thinspace dx-\lambda\int\_U uv\thinspace dx
$$

를 놓는다. $\lambda$ 가 $U$ 에서 Dirichlet 경계조건을 준 Laplace 작용소의 고윳값이면 그 고유함수 $\varphi$ 가 모든 $v$ 에서 $B(\varphi,v)=0$ 을 만족하므로 해의 유일성이 깨진다. 최소 고윳값을 $\lambda_1$ 이라 하면 Rayleigh 몫이 $\int\_U\vert\nabla u\vert^2dx\ge\lambda_1\int\_U u^2dx$ 를 주므로

$$
B(u,u)\ge(1-\lambda/\lambda_1)\int\_U\vert\nabla u\vert^2dx
$$

이고 $\lambda\lt \lambda_1$ 에서는 강제성이 남는다. 강제성이 깨지는 자리와 유일성이 깨지는 자리가 $\lambda_1$ 에서 만난다.

# 활용

- [Dirichlet 문제](dirichlet-problem.md) $-\Delta u=f$ 와 경계값 $0$ 에서 $B(u,v)=\int\_U\nabla u\cdot\nabla v\thinspace dx$ 를 놓으면 Poincaré 부등식(Poincaré inequality)이 강제성을 주고 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)이 유계성을 준다.
- 이류-확산 방정식(advection–diffusion equation) $-\mathrm{div}(a\nabla u)+b\cdot\nabla u+cu=f$ 의 쌍선형형식은 $b\ne 0$ 에서 대칭이 아니다. $a$ 가 아래로 유계이고 $c$ 가 음이 아니며 $\Vert b\Vert\_{L^\infty}$ 가 작으면 강제성이 남는다.
- Galerkin 근사(Galerkin approximation)에서는 유한차원 부분공간 $V_h\subset H$ 에서 모든 $v\in V_h$ 에 대해 $B(u_h,v)=f(v)$ 인 $u_h$ 를 구하면, Céa 보조정리(Céa's lemma)가 $\Vert u-u\_h\Vert\le(\beta/\alpha)\inf\_{v\in V\_h}\Vert u-v\Vert$ 을 준다. 유한요소법의 수렴 증명은 이 부등식과 부분공간의 근사 능력 두 부분으로 나뉜다.
- Stokes 방정식(Stokes equations)의 쌍선형형식은 속도와 압력을 함께 놓은 공간에서 강제가 아니다. 이 경우에는 Lax–Milgram 정리 대신 두 공간 사이의 부등식을 가정하는 Babuška–Brezzi 조건(Babuška–Brezzi condition)을 쓰고, 그 조건 아래 이산화하는 방법이 [혼합 유한요소법](mixed-finite-element-method.md)이다.[^2]

[^1]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 6.2.1 절. Peter D. Lax, Arthur N. Milgram, "Parabolic equations", *Contributions to the Theory of Partial Differential Equations*, Princeton University Press, 1954, 167–190 이 원 논문이다.
[^2]: Daniele Boffi, Franco Brezzi, Michel Fortin, *Mixed Finite Element Methods and Applications*, Springer, 2013, 4 장. Céa 보조정리는 Susanne C. Brenner, L. Ridgway Scott, *The Mathematical Theory of Finite Element Methods*, 3판, Springer, 2008, 2.8 절이다.

# 연관 문서

## 선수지식

- [Hilbert 공간](hilbert-spaces.md)
- [Sobolev 공간](sobolev-spaces.md)

## 더 알아보기

- [타원형 정칙성](elliptic-regularity.md)
- [유한요소법](finite-element-method.md)

#functional_analysis #analysis #optimization
