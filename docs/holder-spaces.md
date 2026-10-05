# Hölder 공간

# 개요

Hölder 공간은 함수값의 차를 두 점 사이 거리의 $\alpha$ 제곱으로 통제하는 함수들의 공간이다. 지수 $\alpha$ 가 $1$ 이면 [Lipschitz 사상](lipschitz-maps.md)의 조건과 같고, $\alpha$ 를 $1$ 보다 작게 잡으면 Lipschitz 가 아닌 함수까지 들어온다.

노름을 균등노름과 차의 비의 상한을 더해 정의하면 [Banach 공간](banach-spaces.md)이 된다. 타원형 방정식의 Schauder 추정과 Brown 운동 경로의 정칙성이 이 공간의 지수로 적힌다.

# 직관

$f(x)=\sqrt x$ 를 $\lbrack 0,1\rbrack$ 에서 본다. 이 함수는 연속이지만 Lipschitz 조건 $\vert f(x)-f(y)\vert\le C\vert x-y\vert$ 를 만족하지 않는다. $y=0$ 에 두면 조건이 $\sqrt x\le Cx$ 이고 $x$ 를 $0$ 으로 보내면 좌변이 우변보다 커지므로 어떤 $C$ 로도 막을 수 없다.

차가 거리에 비례하지는 않으니, 거리의 제곱근과 비교한다. $x\gt y\ge 0$ 에서

$$
(\sqrt y+\sqrt{x-y})^2=x+2\sqrt{y(x-y)}\ge x
$$

이므로 $\sqrt x\le\sqrt y+\sqrt{x-y}$ 이고

$$
\vert\sqrt x-\sqrt y\vert\le\sqrt{\vert x-y\vert}
$$

이다. 비례상수는 $1$ 이고 거리에 붙은 지수가 $1/2$ 다. 지수를 $\alpha$ 로 두고 $\vert f(x)-f(y)\vert\le C\vert x-y\vert^\alpha$ 를 만족하는 함수를 모으면 $\alpha$ 마다 하나씩 공간이 나오고, $\alpha=1$ 인 것이 Lipschitz 함수의 공간이다.

# 정의

## Hölder 조건

$U\subset\mathbb R^n$ 를 열린집합, $0\lt \alpha\le 1$ 이라 하자. $f:U\to\mathbb R$ 에 대해

$$
\lbrack f\rbrack\_{\alpha}=\sup\_{x,y\in U,\thinspace x\ne y}\frac{\vert f(x)-f(y)\vert}{\vert x-y\vert^\alpha}
$$

를 $f$ 의 **$\alpha$ 차 Hölder 반노름**이라 한다. $\lbrack f\rbrack\_\alpha\lt \infty$ 이면 $f$ 가 **지수 $\alpha$ 의 Hölder 조건**을 만족한다고 한다. $\lbrack f\rbrack\_\alpha=0$ 인 것은 $f$ 가 상수인 것과 같으므로 이것은 노름이 아니라 반노름이다.

## $C^{k,\alpha}$ 공간

$k$ 가 음이 아닌 정수일 때

$$
C^{k,\alpha}(\overline U)=\lbrace f:D^\beta f\thinspace\text{가 }\overline U\text{ 에서 유계 연속}(\vert\beta\vert\le k),\thinspace\lbrack D^\beta f\rbrack\_\alpha\lt \infty\thinspace(\vert\beta\vert=k)\rbrace
$$

를 **Hölder 공간**이라 하고 노름을

$$
\Vert f\Vert\_{C^{k,\alpha}}=\sum\_{\vert\beta\vert\le k}\Vert D^\beta f\Vert\_{C^0}+\sum\_{\vert\beta\vert=k}\lbrack D^\beta f\rbrack\_\alpha
$$

로 준다. $\beta$ 는 다중지수, $\Vert\cdot\Vert\_{C^0}$ 는 $\overline U$ 의 균등노름이다. $k=0$ 인 경우를 $C^{0,\alpha}(\overline U)$ 로 쓰고, $C^{0,1}(\overline U)$ 가 유계 Lipschitz 함수의 공간이다.

# 성질

## 완비성

**정리.** $C^{k,\alpha}(\overline U)$ 는 Banach 공간이다.[^1]

증명의 요지. $(f_m)$ 을 Cauchy 열이라 하자. 노름에 균등노름이 들어 있으므로 각 $D^\beta f_m$ 이 $\vert\beta\vert\le k$ 에서 균등수렴하고, 극한함수를 $f$ 라 하면 균등수렴이 미분과 교환하므로 $D^\beta f$ 가 그 극한이다. 반노름은

$$
\lbrack g\rbrack\_\alpha=\sup\_{x\ne y}\frac{\vert g(x)-g(y)\vert}{\vert x-y\vert^\alpha}
$$

꼴의 상한이고 상한은 점마다의 수렴에 대해 하반연속이므로 $\lbrack D^\beta f-D^\beta f\_m\rbrack\_\alpha\le\liminf\_l\lbrack D^\beta f\_l-D^\beta f\_m\rbrack\_\alpha$ 다. 오른쪽이 $m$ 에 대해 $0$ 으로 가므로 $f\_m\to f$ 가 이 노름에서 성립한다. $\square$

## 지수의 포함관계

**정리.** $U$ 가 유계이고 $0\lt \alpha\lt \beta\le 1$ 이면 $C^{0,\beta}(\overline U)\subset C^{0,\alpha}(\overline U)$ 이고 포함사상이 유계다.

증명의 요지. $d$ 를 $U$ 의 지름이라 하면 $\vert x-y\vert\le d$ 이므로

$$
\vert x-y\vert^\beta=\vert x-y\vert^\alpha\vert x-y\vert^{\beta-\alpha}\le d^{\beta-\alpha}\vert x-y\vert^\alpha
$$

이고 $\lbrack f\rbrack\_\alpha\le d^{\beta-\alpha}\lbrack f\rbrack\_\beta$ 다. $\square$

유계가 아닌 $U$ 에서는 포함이 깨진다. $\mathbb R$ 에서 $f(x)=x$ 는 $\lbrack f\rbrack\_1=1$ 이지만 $\alpha\lt 1$ 에서 $\lbrack f\rbrack\_\alpha=\infty$ 다.

## 지수가 $1$ 을 넘는 경우

**정리.** $U$ 가 연결 열린집합이고 $\alpha\gt 1$ 이면 $\lbrack f\rbrack\_\alpha\lt \infty$ 인 함수는 상수뿐이다.

증명의 요지. $x\in U$ 와 작은 $h$ 에서 $\vert f(x+h)-f(x)\vert\le\lbrack f\rbrack\_\alpha\vert h\vert^\alpha$ 이므로 차분몫이 $\lbrack f\rbrack\_\alpha\vert h\vert^{\alpha-1}$ 로 묶이고 $h\to 0$ 에서 $0$ 으로 간다. 따라서 $f$ 가 미분가능하고 $\nabla f=0$ 이며, $U$ 가 연결이므로 $f$ 가 상수다. $\square$

지수의 범위를 $0\lt \alpha\le 1$ 로 잡는 근거가 이것이다. $k$ 를 올리는 것과 $\alpha$ 를 올리는 것이 서로 다른 방향이고, $C^{k,1}$ 과 $C^{k+1,0}$ 은 다른 공간이다.

## Morrey 부등식

**정리.** $U\subset\mathbb R^n$ 가 유계이고 경계가 $C^1$ 이며 $p\gt n$ 이면 $W^{1,p}(U)\subset C^{0,\gamma}(\overline U)$ 이고 $\gamma=1-n/p$ 에서 매입이 유계다.[^2]

증명의 요지. $u\in C^1$ 에서 공 위의 평균과 값의 차를 기울기의 적분으로 올려 쓰고 Hölder 부등식을 쓰면 $\vert u(x)-u(y)\vert\le C\vert x-y\vert^{1-n/p}\Vert\nabla u\Vert\_{L^p}$ 가 나온다. [Sobolev 공간](sobolev-spaces.md)에서 $C^1$ 함수가 조밀하므로 추정이 확장된다. $\square$

$p$ 가 $n$ 에 가까우면 $\gamma$ 가 $0$ 에 가깝고, $p\to\infty$ 에서 $\gamma\to 1$ 이다. 이 지수가 약한 해의 정칙성을 재는 척도로 쓰인다.

## 콤팩트 매입

**정리.** $U$ 가 유계이고 $0\lt \alpha\lt \beta\le 1$ 이면 $C^{0,\beta}(\overline U)$ 의 유계집합은 $C^{0,\alpha}(\overline U)$ 에서 상대콤팩트다.

증명의 요지. $\Vert f\Vert\_{C^{0,\beta}}\le M$ 인 모임은 균등유계이고 균등연속이므로 [Arzelà–Ascoli 정리](arzela-ascoli.md)가 $C^0$ 에서 수렴하는 부분열을 준다. 그 부분열의 차 $g$ 에 대해 $\vert x-y\vert\le\delta$ 에서는 포함관계의 계산이 $\lbrack g\rbrack\_\alpha$ 를 $\delta^{\beta-\alpha}\lbrack g\rbrack\_\beta$ 로 묶고, $\vert x-y\vert\gt \delta$ 에서는 $\lbrack g\rbrack\_\alpha\le 2\delta^{-\alpha}\Vert g\Vert\_{C^0}$ 다. $\delta$ 를 먼저 잡고 균등수렴을 쓰면 $\lbrack g\rbrack\_\alpha$ 가 $0$ 으로 간다. $\square$

# 활용

- **Schauder 추정.** [타원형 정칙성](elliptic-regularity.md) 문서의 Hölder 판은 $f\in C^{0,\alpha}(\overline U)$ 에서 약한 해가 $C^{2,\alpha}(\overline U)$ 에 든다는 추정이다. 자료와 해를 같은 지수 $\alpha$ 로 재고 미분 횟수만 둘 올리는 진술이라 $C^{k,\alpha}$ 의 두 지표가 모두 쓰인다.
- **Lipschitz 사상.** $\alpha=1$ 인 경우가 Lipschitz 사상 문서의 조건이고, Rademacher 정리의 거의 모든 점에서의 미분가능성은 $\alpha\lt 1$ 에서 성립하지 않는다. 위의 차분몫 계산이 $\alpha\lt 1$ 에서는 아무 상한도 주지 않기 때문이다.
- **Brown 운동의 경로.** [Brown 운동](brownian-motion.md)의 경로는 거의 확실히 $\alpha\lt 1/2$ 에서 지수 $\alpha$ 의 Hölder 조건을 만족하고 $\alpha\ge 1/2$ 에서는 만족하지 않는다.[^3] 증분의 분산이 시간 간격에 비례한다는 성질이 이 지수를 정한다.
- **Sobolev 매입의 끝.** Morrey 부등식은 $p\gt n$ 에서 Sobolev 함수에 각 점의 값을 주고, 그 값이 얼마나 고른지를 Hölder 지수로 적는다.

[^1]: David Gilbarg, Neil S. Trudinger, *Elliptic Partial Differential Equations of Second Order*, 2판, Springer, 1983, 4.1 절.
[^2]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 5.6.2 절. Charles B. Morrey, "Functions of several variables and absolute continuity, II", *Duke Mathematical Journal* **6** (1940), 187–215 이 원 논문이다.
[^3]: Ioannis Karatzas, Steven E. Shreve, *Brownian Motion and Stochastic Calculus*, 2판, Springer, 1991, 2.9 절.

# 연관 문서

## 선수지식

- [Lipschitz 사상](lipschitz-maps.md)
- [Banach 공간](banach-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #topology
