# Sobolev 공간

# 개요

Sobolev 공간은 함수와 그 약한 도함수가 모두 [$L^p$ 공간](lp-spaces.md)에 드는 함수들의 공간이다. 열린집합 $U\subset\mathbb R^n$ , 정수 $k\ge 0$ , $1\le p\le\infty$ 에 대해 $W^{k,p}(U)$ 로 쓴다.

점마다의 극한으로 정의하는 도함수를 부분적분 공식으로 바꿔 쓰면 미분가능하지 않은 함수도 도함수를 갖는다. 이렇게 넓힌 공간은 완비이므로 수렴하는 열의 극한이 공간 안에 남는다. 미분방정식의 해를 먼저 이 공간에서 찾고 매끄러움을 뒤에 따지는 방식이 여기서 나온다.

$p=2$ 인 $H^k(U)=W^{k,2}(U)$ 는 [Hilbert 공간](hilbert-spaces.md)이다.

# 직관

구간 $(-1,1)$ 에서 적분

$$
\int\_{-1}^{1}\vert u'(x)-g(x)\vert^2dx
$$

을 가장 작게 하는 $u$ 를 찾는다. $g(x)$ 는 $x\gt 0$ 에서 $1$ , $x\lt 0$ 에서 $-1$ 이고, $u$ 는 도함수가 연속인 함수 가운데서 고른다.

적분값이 $0$ 이려면 $u'=g$ 여야 한다. $u(x)=\vert x\vert$ 가 $x\ne 0$ 에서 이 식을 만족하지만 $x=0$ 에서 좌우 차분이 $-1$ 과 $1$ 로 갈려 도함수가 없다. $u_n$ 을 $\vert x\vert$ 의 꺾인 자리만 폭 $2/n$ 인 구간에서 매끄럽게 이은 함수로 두면, 피적분함수가 그 구간 밖에서 $0$ 이고 그 안에서 $4$ 이하이므로 적분값이 $8/n$ 이하다. 그러나 어느 $n$ 에서도 $0$ 이 아니다.

하한 $0$ 에 다가가는 열은 있는데 그 극한 $\vert x\vert$ 가 고르는 범위 밖에 있다. $\vert x\vert$ 에 도함수를 주려면 $x=0$ 한 점을 무시해야 한다. 적분은 한 점에서 값을 바꿔도 변하지 않으므로, 도함수를 점마다 묻는 대신 적분 안에서만 묻는다.

미분가능한 $u$ 와 양 끝에서 $0$ 인 매끄러운 $\varphi$ 에 대해 부분적분은

$$
\int\_{-1}^{1}u\varphi'\thinspace dx=-\int\_{-1}^{1}u'\varphi\thinspace dx
$$

를 준다. $u=\vert x\vert$ 를 넣으면 왼쪽은 $\int\_{-1}^{0}\varphi\thinspace dx-\int\_0^{1}\varphi\thinspace dx$ 이고, 오른쪽의 $u'$ 자리에 $g$ 를 넣은 값도 같다. 그래서 $g$ 를 $\vert x\vert$ 의 도함수로 삼는다. 이렇게 도함수를 갖는 함수를 모아 $u$ 와 그 도함수의 $L^p$ 노름을 합친 것을 노름으로 쓰면, 처음의 최소화 문제의 답이 그 공간 안에 있다.

# 정의

## 약한 도함수

다중지표 $\alpha=(\alpha_1,\dots,\alpha_n)$ 과 $U$ 에서 국소적분가능한 함수 $u,v$ 에 대해, 모든 $\varphi\in C_c^\infty(U)$ 에서

$$
\int\_U u\thinspace\partial^\alpha\varphi\thinspace dx=(-1)^{\vert\alpha\vert}\int\_U v\thinspace\varphi\thinspace dx
$$

가 성립하면 $v$ 를 $u$ 의 **약한 도함수**라 하고 $\partial^\alpha u=v$ 로 쓴다. 여기서 $\vert\alpha\vert=\alpha_1+\dots+\alpha_n$ 이고, $C_c^\infty(U)$ 는 $U$ 안의 어떤 콤팩트 집합 밖에서 $0$ 인 매끄러운 함수 전체다.

약한 도함수는 있으면 거의 어디서나 유일하다. 두 후보의 차를 $w$ 라 하면 모든 $\varphi$ 에서 $\int\_U w\varphi\thinspace dx=0$ 이고, $C_c^\infty(U)$ 가 $L^1\_{\mathrm{loc}}$ 에서 충분히 많으므로 $w=0$ 이 거의 어디서나 성립한다. $u$ 가 $\vert\alpha\vert$ 번 연속미분가능하면 부분적분이 위 식을 주므로 통상의 도함수가 약한 도함수다.

## 공간과 노름

$1\le p\lt\infty$ 라 하자. $\vert\alpha\vert\le k$ 인 모든 $\alpha$ 에서 약한 도함수 $\partial^\alpha u$ 가 존재하고 $L^p(U)$ 에 드는 $u$ 전체를 $W^{k,p}(U)$ 라 하고

$$
\Vert u\Vert\_{W^{k,p}(U)}=\Bigl(\sum\_{\vert\alpha\vert\le k}\Vert\partial^\alpha u\Vert\_{L^p(U)}^p\Bigr)^{1/p}
$$

로 노름을 준다. $p=\infty$ 에서는 합 대신 $\vert\alpha\vert\le k$ 에 걸친 최댓값을 쓴다. $p=2$ 인 경우를 $H^k(U)$ 로 쓴다.

$C_c^\infty(U)$ 의 $W^{k,p}(U)$ 안에서의 닫힘을 $W_0^{k,p}(U)$ 라 한다. 경계에서 $0$ 이라는 조건을 이 꼴로 쓴다.

# 성질

## 완비성

**정리.** $W^{k,p}(U)$ 는 Banach 공간이고 $H^k(U)$ 는 Hilbert 공간이다.

증명의 요지. Cauchy 열 $u_m$ 에서 각 $\partial^\alpha u_m$ 이 $L^p(U)$ 의 Cauchy 열이므로 $L^p$ 의 완비성이 극한 $v_\alpha$ 를 준다. 약한 도함수의 정의식은 양변이 적분이어서 $L^p$ 수렴을 극한 안으로 넘길 수 있고, 따라서 $v_\alpha=\partial^\alpha v_0$ 이다. $H^k(U)$ 의 내적은

$$
\langle u,v\rangle=\sum\_{\vert\alpha\vert\le k}\int\_U\partial^\alpha u\thinspace\partial^\alpha v\thinspace dx
$$

다.

## Sobolev 매장 정리

$U\subset\mathbb R^n$ 을 유계이고 경계가 $C^1$ 인 열린집합이라 하자.

**정리.** $1\le p\lt n$ 이면 $p^\ast=np/(n-p)$ 에 대해 $W^{1,p}(U)\subset L^{p^\ast}(U)$ 이고 포함사상이 유계다. $p\gt n$ 이면 $\gamma=1-n/p$ 에 대해 $W^{1,p}(U)\subset C^{0,\gamma}(\overline U)$ 다.[^1]

증명의 요지. $u\in C_c^1(\mathbb R^n)$ 에서 $\vert u(x)\vert$ 를 각 좌표 방향으로 $\nabla u$ 의 적분으로 올려 쓰고, $n$ 개의 추정을 Hölder 부등식으로 묶으면

$$
\Vert u\Vert\_{L^{n/(n-1)}}\le C\Vert\nabla u\Vert\_{L^1}
$$

을 얻는다. 여기에 $u$ 대신 $\vert u\vert^t$ 를 넣고 $t$ 를 지수가 맞도록 고르면 일반 $p$ 의 꼴이 나온다. $p\gt n$ 에서는 같은 추정을 공 위의 평균에 적용해 두 점의 값 차이를 거리의 $\gamma$ 제곱으로 누른다. 매끄러운 함수에서 얻은 부등식은 $C_c^\infty(\mathbb R^n)$ 의 조밀성으로 $W^{1,p}(U)$ 전체로 옮긴다.

## Rellich–Kondrachov 콤팩트성

**정리.** 위와 같은 $U$ 와 $1\le p\lt n$ 에 대해, $1\le q\lt p^\ast$ 이면 포함사상 $W^{1,p}(U)\to L^q(U)$ 가 콤팩트다.[^1]

$W^{1,p}(U)$ 에서 유계인 열이 $L^q(U)$ 에서 수렴하는 부분열을 갖는다는 뜻이다. 지수를 $p^\ast$ 자신으로 올리면 콤팩트성이 깨진다. 한 점으로 모이는 함수열이 $L^{p^\ast}$ 노름을 유지하면서 약하게 $0$ 으로 가기 때문이다.

## Poincaré 부등식

**정리.** $U$ 가 유계이면 $u\in W_0^{1,p}(U)$ 에 대해

$$
\Vert u\Vert\_{L^p(U)}\le C\Vert\nabla u\Vert\_{L^p(U)}
$$

인 상수 $C$ 가 $U$ 와 $p$ 에만 의존해 존재한다.[^1]

증명의 요지. 매장 정리와 Rellich–Kondrachov 정리로 얻는다. 부등식이 거짓이면 $\Vert u\_m\Vert\_{L^p}=1$ 이고 $\Vert\nabla u\_m\Vert\_{L^p}\to 0$ 인 열이 있고, 콤팩트성이 주는 부분열의 극한은 약한 도함수가 $0$ 이면서 $W\_0^{1,p}(U)$ 에 드는 함수다. 그런 함수는 $0$ 이므로 $L^p$ 노름이 $1$ 인 것과 어긋난다.

따라서 $W_0^{1,p}(U)$ 에서는 $\Vert\nabla u\Vert\_{L^p(U)}$ 만으로 원래 노름과 동치인 노름을 준다.

## 흔적 정리

$W^{1,p}(U)$ 의 원소는 거의 어디서나 같은 함수를 동일시한 것이므로, 측도가 $0$ 인 경계 $\partial U$ 에서의 값이 정의로부터 바로 정해지지 않는다.

**정리.** $U$ 가 유계이고 경계가 $C^1$ 이면, 유계 선형사상 $T:W^{1,p}(U)\to L^p(\partial U)$ 가 있어 $u\in C(\overline U)\cap W^{1,p}(U)$ 에서 $Tu$ 가 $u$ 의 경계에서의 제한과 같다. 또한 $Tu=0$ 인 것과 $u\in W_0^{1,p}(U)$ 인 것이 같다.[^1]

경계조건을 $W^{1,p}(U)$ 의 함수에 부과하는 자리가 이 사상이다.

# 활용

- **타원형 경계값 문제의 약한 해.** [Dirichlet 문제](dirichlet-problem.md) $-\Delta u=f$ 와 경계값 $0$ 을, 모든 $v\in H_0^1(U)$ 에서 $\int\_U\nabla u\cdot\nabla v\thinspace dx=\int\_U fv\thinspace dx$ 인 $u\in H_0^1(U)$ 를 찾는 문제로 바꿔 쓴다. Poincaré 부등식이 왼쪽 쌍선형형식의 강제성을 주고, Lax–Milgram 정리가 해의 존재와 유일성을 준다.
- **Dirichlet 에너지의 최소화.** $\int\_U\vert\nabla u\vert^2dx$ 를 최소화하는 열은 $H^1(U)$ 에서 유계이고, Rellich–Kondrachov 정리가 수렴하는 부분열을 준다. 극한이 최소점이라는 확인에는 노름의 약한 하반연속성을 쓴다.
- **타원 미분작용소의 지표.** 닫힌 [다양체](manifolds.md) 위의 타원 미분작용소는 차수가 다른 두 Sobolev 공간 사이에서 [Fredholm 작용소](fredholm-operators.md)다. 매장이 주는 콤팩트 포함이 유사역원의 오차를 콤팩트 작용소로 만든다.
- **Lipschitz 함수와의 동일시.** $U$ 가 유계 볼록이면 $W^{1,\infty}(U)$ 가 $U$ 위의 [Lipschitz 함수](lipschitz-maps.md) 전체와 같다. [Rademacher 정리](rademacher-theorem.md)가 주는 점마다의 도함수가 약한 도함수와 일치하고, 그 $L^\infty$ 노름이 Lipschitz 상수다.

[^1]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 5 장. 매장, 콤팩트성, 흔적, Poincaré 부등식의 증명이 모두 이 장에 있다. 경계의 정칙성을 Lipschitz 로 낮춘 서술은 Robert A. Adams, John J. F. Fournier, *Sobolev Spaces*, 2판, Academic Press, 2003 이다.

# 연관 문서

## 선수지식

- [$L^p$ 공간](lp-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #measure_theory
