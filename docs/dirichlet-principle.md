# Dirichlet 원리

# 개요

**Dirichlet 원리(Dirichlet's principle)** 는 경계에서 값이 정해진 함수들 가운데 기울기 제곱의 적분 $\frac12\int\vert\nabla u\vert^2$ 이 가장 작은 함수가 방정식 $\Delta u=0$ 의 해라는 원리다. 구간 $\lbrack 0,1\rbrack$ 의 양 끝 값이 $0$ 과 $1$ 인 함수 가운데 이 적분이 가장 작은 것은 직선 $u(x)=x$ 이고, 이 함수는 $u''=0$ 을 만족한다. 이 원리로 [Dirichlet 문제](dirichlet-problem.md)의 해를 찾는 일이 적분값을 가장 작게 하는 함수를 찾는 일로 바뀐다.

# 직관

유계 영역 $\Omega$ 와 경계 위의 함수 $g$ 가 주어졌을 때 $\Delta u=0$ 이고 경계에서 $u=g$ 인 함수를 찾고 싶다. 방정식을 직접 푸는 대신, 경계에서 $g$ 와 같은 함수 $u$ 마다 수 $E(u)=\frac12\int_\Omega\vert\nabla u\vert^2\thinspace dx$ 를 붙이고 이 수를 가장 작게 하는 $u$ 를 찾는다.

$u$ 가 최소라고 하자. 경계에서 $0$ 인 함수 $v$ 를 더해도 경계값은 그대로이므로 $u+\varepsilon v$ 도 후보다. 전개하면

$$
E(u+\varepsilon v)=E(u)+\varepsilon\int_\Omega\nabla u\cdot\nabla v\thinspace dx+\varepsilon^2E(v)
$$

이고, 이 이차식이 $\varepsilon=0$ 에서 최소이므로 일차 계수가 $0$ 이다. 부분적분하면 $\int_\Omega\nabla u\cdot\nabla v=-\int_\Omega(\Delta u)v$ 이고, 이것이 경계에서 $0$ 인 모든 $v$ 에 대해 $0$ 이므로 $\Delta u=0$ 이다. 최소점이 있으면 그것이 해다.

남은 것은 최소점이 있는지다. $E\ge 0$ 이므로 하한은 있지만, 하한에 다가가는 함수열이 어떤 함수로 수렴해 그 하한을 달성한다는 보장은 없다.

# 정의

$\Omega\subseteq\mathbb R^n$ 이 유계 열린 집합이고 $g$ 가 경계 $\partial\Omega$ 위의 함수다. 경계에서 $g$ 와 같은 함수들의 집합을 $\mathcal A\_g$ 라 하고, 그 위의 **Dirichlet 에너지(Dirichlet energy)** 를

$$
E(u)=\frac12\int_\Omega\vert\nabla u\vert^2\thinspace dx
$$

로 정의한다. **Dirichlet 원리** 는 $E$ 가 $\mathcal A\_g$ 에서 최솟값을 갖고, 최소점이 $\Delta u=0$, $u\vert\_{\partial\Omega}=g$ 의 해라는 주장이다. 현대적 판본에서 $\mathcal A\_g$ 는 [Sobolev 공간](sobolev-spaces.md) $H^1(\Omega)$ 에서 경계 트레이스(trace)가 $g$ 인 함수들의 집합이다[^1].

개요의 예는 $n=1$, $\Omega=(0,1)$, $g(0)=0$, $g(1)=1$ 인 경우다. $u(x)=x$ 이면 $E(u)=\frac12\int_0^1 1\thinspace dx=\frac12$ 이고, 같은 경계값을 갖는 $w(x)=x^2$ 이면 $E(w)=\frac12\int_0^1 4x^2dx=\frac23$ 이다. $u$ 가 $\Delta u=u''=0$ 을 만족하므로 Dirichlet 원리에 따라 $\frac12$ 이 $\mathcal A\_g$ 에서의 최솟값이다.

# 성질

## 최소점과 조화함수의 동치

$u\in\mathcal A\_g$ 가 충분히 매끄러우면, $u$ 가 $E$ 의 최소점인 것과 $\Delta u=0$ 인 것은 동치다. 한 방향은 직관 절의 계산이다. 반대로 $\Delta u=0$ 이고 $w\in\mathcal A\_g$ 이면 $v=w-u$ 는 경계에서 $0$ 이고, 부분적분으로 $\int\nabla u\cdot\nabla v=0$ 이므로

$$
E(w)=E(u)+E(v)\ge E(u)
$$

이다. 등호는 $\nabla v=0$, 곧 $v$ 가 상수이고 경계에서 $0$ 이어서 $v=0$ 일 때뿐이므로 최소점은 하나다.

## Weierstrass 의 반례

Riemann 은 Dirichlet 원리를 써서 [Riemann 사상정리](riemann-mapping-theorem.md)를 증명했지만, Weierstrass 는 1870 년에 비슷한 범함수가 최솟값을 갖지 않는 예를 들었다[^2]. Hilbert 는 1900 년에 Dirichlet 에너지의 최솟값이 존재함을 증명해 이 원리를 정당화했다[^2]. $\lbrack -1,1\rbrack$ 에서 $u(-1)=-1$, $u(1)=1$ 인 함수에 대해

$$
J(u)=\int_{-1}^{1}x^2u'(x)^2\thinspace dx
$$

를 본다. $u\_n(x)=\arctan(nx)/\arctan n$ 이면 $y=nx$ 로 치환해 $J(u\_n)\le\frac{1}{n\arctan(n)^2}\int_{-\infty}^{\infty}\frac{y^2}{(1+y^2)^2}dy\to 0$ 이므로 하한은 $0$ 이다. $J(u)=0$ 이면 $x\ne 0$ 에서 $u'=0$ 이고 $u$ 는 상수여야 하는데, 경계 조건 $u(-1)=-1$, $u(1)=1$ 과 맞지 않는다. 하한 $0$ 은 달성되지 않는다.

## 직접법에 의한 증명

[변분법의 직접법](direct-method.md)을 쓴다. $H^1(\Omega)$ 에서 $\mathcal A\_g$ 는 닫힌 볼록 집합이다. Sobolev 공간의 [Poincaré 부등식](poincare-inequality.md)으로 $E$ 는 $\mathcal A\_g$ 에서 $\Vert u\Vert\_{H^1}$ 이 커지면 커지고, 볼록이므로 약수렴에 대해 하반연속이다. 최소화열은 $H^1$ 에서 유계이므로 약수렴하는 부분열을 갖고, 그 극한이 최소점이다. 최소점은 약한 의미에서 $\Delta u=0$ 을 만족하고, [Weyl 보조정리](weyl-lemma.md)로 매끄러운 조화함수다[^1]. 이 증명에서 반례를 막은 것은 Poincaré 부등식이다. Weierstrass 의 범함수에서는 가중치 $x^2$ 가 $x=0$ 에서 사라져 이런 부등식이 성립하지 않는다.

# 활용

- [Riemann 곡면](riemann-surfaces.md)의 균일화 정리(uniformization theorem)와 Riemann 사상정리: Riemann 이 원래 이 원리로 조화함수를 만들었고, Hilbert 의 정당화 뒤에 증명의 한 경로가 되었다.
- [유한요소법](finite-element-method.md): $E$ 를 조각마다 다항식인 함수들의 유한차원 부분공간에서 최소화하면 연립일차방정식이 나온다. 이 근사가 Ritz 방법(Ritz method)이고, 최소화 문제이므로 근사해의 에너지 오차가 그 부분공간에서 가장 작다.
- [유효저항](effective-resistance.md): 그래프에서 경계 정점의 전압을 정하고 변마다 전압 차의 제곱의 합을 최소화하면 내부 정점의 전압이 이웃의 평균이 된다. 이산 Dirichlet 원리이고, 두 정점의 전압 차가 1 일 때 그 최솟값이 두 정점 사이 유효저항의 역수다.

[^1]: L. C. Evans, *Partial Differential Equations*, 2nd ed., Graduate Studies in Mathematics 19, American Mathematical Society, 2010, 2 장 2 절 5 항(Dirichlet 원리), 8 장 2 절(직접법).
[^2]: K. Weierstrass, *Über das sogenannte Dirichlet'sche Princip*, 1870 년 강연, *Mathematische Werke* 2 권, Mayer & Müller, 1895, 49–54. D. Hilbert, *Über das Dirichletsche Prinzip*, Jahresbericht der Deutschen Mathematiker-Vereinigung **8** (1900), 184–188.

# 연관 문서

## 선수지식

- [Dirichlet 문제](dirichlet-problem.md)
- [변분법의 직접법](direct-method.md)

## 더 알아보기

- [장애물 문제](obstacle-problem.md)

#analysis #functional_analysis #complex_analysis
