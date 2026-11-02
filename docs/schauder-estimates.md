# Schauder 추정

# 개요

**Schauder 추정(Schauder estimates)** 은 2계 타원형 방정식의 우변과 계수가 조금 매끄러우면 해는 그보다 미분 두 번만큼 더 매끄럽다는 부등식이다. 공 $B_1$ 에서 $-\Delta u=f$ 를 풀 때 $f$ 가 연속이기만 하면 $u$ 의 2계 도함수가 유계가 아닐 수 있지만, $f$ 가 지수 $\alpha$ 의 Hölder 조건을 만족하면 2계 도함수도 같은 조건을 만족한다. Schauder 추정은 자료와 해를 모두 [Hölder 공간](holder-spaces.md)에서 재어 $\Vert u\Vert\_{C^{2,\alpha}}$ 를 $\Vert f\Vert\_{C^{\alpha}}$ 와 $u$ 의 크기로 누르고, 이 부등식으로 비선형 방정식의 해의 존재와 매끄러움을 증명한다.

# 직관

$B_1\subset\mathbb R^n$ 에서 $-\Delta u=f$ 를 풀고 $u$ 의 2계 도함수가 유계인지 본다. 기본해(fundamental solution) $\Gamma$ 로 쓴 Newton 퍼텐셜(Newtonian potential)

$$
u(x)=\int\_{B_1}\Gamma(x-y)f(y)\thinspace dy
$$

를 두 번 미분하면 $D^2\Gamma(z)$ 의 크기가 $\vert z\vert^{-n}$ 에 비례하므로

$$
\vert D^2u(x)\vert\le C\Vert f\Vert\_{C^0}\int\_{B\_1}\vert x-y\vert^{-n}\thinspace dy
$$

꼴의 상한이 나온다. 극좌표로 적분하면 피적분함수가 $r^{-n}\cdot r^{n-1}=r^{-1}$ 이고 적분이 $\log$ 로 발산한다. $f$ 가 유계라는 것만으로는 $D^2u$ 의 상한이 나오지 않는다.

발산이 $\log$ 에 그치므로 피적분함수에서 양의 지수 하나만 얻으면 된다. $x$ 를 고정하고 $f(y)$ 대신 $f(y)-f(x)$ 를 넣는다. 상수를 더하거나 빼는 것은 $\int D^2\Gamma(x-y)\thinspace dy$ 를 따로 남기므로

$$
D^2u(x)=\int\_{B_1}D^2\Gamma(x-y)\lbrack f(y)-f(x)\rbrack\thinspace dy+f(x)\int\_{B_1}D^2\Gamma(x-y)\thinspace dy
$$

이고 둘째 적분은 발산 부분을 경계 적분으로 바꿔 유한하다. 첫째 적분에서 $f$ 가 지수 $\alpha$ 의 Hölder 조건을 만족하면 $\vert f(y)-f(x)\vert\le\lbrack f\rbrack\_\alpha\vert x-y\vert^\alpha$ 이므로 피적분함수가 $\vert x-y\vert^{\alpha-n}$ 으로 묶이고, 극좌표에서 $r^{\alpha-1}$ 이 되어 적분이 수렴한다. 자료에 붙은 지수 $\alpha$ 가 $\log$ 발산을 메운다.

# 정의

## 일률 타원형 연산자

$U\subset\mathbb R^n$ 를 열린집합이라 하고

$$
Lu=-\sum\_{i,j=1}^n a^{ij}(x)D\_{ij}u+\sum\_{i=1}^n b^i(x)D\_iu+c(x)u
$$

를 놓는다. $a^{ij}=a^{ji}$ 이고 상수 $0\lt \lambda\le\Lambda$ 가 있어 모든 $x\in U$ 와 $\xi\in\mathbb R^n$ 에서

$$
\lambda\vert\xi\vert^2\le\sum\_{i,j}a^{ij}(x)\xi_i\xi_j\le\Lambda\vert\xi\vert^2
$$

이면 $L$ 이 **일률 타원형(uniformly elliptic)** 이라 한다. 계수 $a^{ij},b^i,c$ 가 모두 $C^{0,\alpha}(\overline U)$ 에 드는 경우를 **Hölder 계수(Hölder continuous coefficients)** 라 한다.

직관 절의 $-\Delta$ 는 $a^{ij}=\delta\_{ij}$, $b^i=0$, $c=0$ 이고 $\lambda=\Lambda=1$ 인 일률 타원형 연산자다. $U=B_1\subset\mathbb R^2$ 에서 $a^{ij}=(1+\vert x\vert^2)\delta\_{ij}$ 는 $\lambda=1$, $\Lambda=2$ 로 일률 타원형이고 계수가 매끄러우므로 Hölder 계수다. $a^{11}=1$, $a^{22}=x_1^2$, $a^{12}=0$ 은 $x_1=0$ 에서 $\xi=(0,1)$ 의 값이 $0$ 이라 일률 타원형이 아니다. $a^{11}=a^{22}=1+\frac12\mathrm{sgn}(x_1)$, $a^{12}=0$ 은 $\lambda=\frac12$, $\Lambda=\frac32$ 로 일률 타원형이지만 $x_1=0$ 에서 불연속이라 Hölder 계수가 아니다.

## 추정의 꼴

$\overline V$ 가 콤팩트이고 $\overline V\subset U$ 이면 $V$ 가 $U$ 에 콤팩트하게 포함된다(compactly contained)고 하고 $V\subset\subset U$ 로 쓴다. 부등식의 왼쪽에 $V$ 에서의 $C^{2,\alpha}$ 노름을, 오른쪽에 $U$ 에서의 $C^0$ 노름과 $C^{0,\alpha}$ 노름을 두는 형태를 **내부 추정(interior estimate)** 이라 한다. 오른쪽의 상수는 해에 의존하지 않고 $n,\alpha,\lambda,\Lambda$, 계수의 $C^{0,\alpha}$ 노름, $\mathrm{dist}(V,\partial U)$ 에만 의존한다.

$U=B_1$, $V=B\_{1/2}$ 이면 $V\subset\subset U$ 이고 $\mathrm{dist}(V,\partial U)=\frac12$ 다. $-\Delta u=f$ 의 내부 추정은 $\Vert u\Vert\_{C^{2,\alpha}(\overline{B\_{1/2}})}$ 를 $\Vert u\Vert\_{C^0(B_1)}$ 과 $\Vert f\Vert\_{C^{0,\alpha}(B_1)}$ 의 합의 상수배로 누르는 부등식이고, 상수는 $n$ 과 $\alpha$ 에만 의존한다.

# 성질

## 내부 Schauder 추정

$L$ 이 $U$ 에서 Hölder 계수의 일률 타원형 연산자, $u\in C^{2,\alpha}(U)$, $f\in C^{0,\alpha}(U)$ 이고 $Lu=f$ 라 하자. $V\subset\subset U$ 이면 상수 $C$ 가 있어

$$
\Vert u\Vert\_{C^{2,\alpha}(\overline V)}\le C\left(\Vert u\Vert\_{C^0(U)}+\Vert f\Vert\_{C^{0,\alpha}(U)}\right)
$$

이다.[^1]

증명의 요지. 먼저 $L=-\Delta$ 와 받침이 콤팩트인 경우를 직관 절의 적분으로 처리한다. 둘째로 점 $x_0$ 을 고정해 계수를 $a^{ij}(x_0)$ 으로 동결(freezing)하고 방정식을

$$
-\sum\_{i,j}a^{ij}(x_0)D\_{ij}u=f+\sum\_{i,j}\lbrack a^{ij}(x)-a^{ij}(x_0)\rbrack D\_{ij}u-\sum\_i b^iD\_iu-cu
$$

로 옮긴다. 계수가 $C^{0,\alpha}$ 이므로 $x_0$ 의 반지름 $r$ 인 공에서 $\vert a^{ij}(x)-a^{ij}(x_0)\vert\le C r^\alpha$ 이고, 상수계수 추정을 그 공에 쓰면 오른쪽의 섭동항이 $Cr^\alpha\Vert u\Vert\_{C^{2,\alpha}}$ 로 묶인다. $r$ 을 작게 잡아 그 항을 왼쪽으로 넘기면 공마다의 추정이 남는다. 셋째로 절단함수(cutoff function)로 $V$ 를 덮는 공들의 추정을 이어 붙인다. $\square$

$Lu=0$ 이어도 $u$ 가 $0$ 이 아닐 수 있으므로 오른쪽에 $u$ 의 $C^0$ 노름이 남는다. $L=-\Delta$ 에서 [조화함수](harmonic-functions.md) $u=x_1$ 은 $f=0$ 이지만 $C^{2,\alpha}$ 노름이 $0$ 이 아니다. $c\ge 0$ 이고 경계값이 주어지면 [최대값 원리](maximum-principle.md)가 $\Vert u\Vert\_{C^0}$ 를 $f$ 와 경계값의 노름으로 누른다.

## 경계 추정

$\partial U$ 가 $C^{2,\alpha}$ 이고 $u\in C^{2,\alpha}(\overline U)$ 가 $Lu=f$ 와 $\partial U$ 에서 $u=g$ 를 만족하며 $g\in C^{2,\alpha}(\partial U)$ 이면

$$
\Vert u\Vert\_{C^{2,\alpha}(\overline U)}\le C\left(\Vert u\Vert\_{C^0(U)}+\Vert f\Vert\_{C^{0,\alpha}(U)}+\Vert g\Vert\_{C^{2,\alpha}(\partial U)}\right)
$$

이다.[^1]

증명의 요지. 경계 근방을 평탄화하는 $C^{2,\alpha}$ 좌표변환을 쓴다. 변환이 $C^{2,\alpha}$ 이면 바뀐 연산자의 계수가 $C^{0,\alpha}$ 에 그대로 남으므로 반공에서의 추정으로 환원되고, 거기서는 반사로 내부 추정을 쓴다. $\square$

좌표변환의 2계 도함수가 바뀐 계수에 들어가므로, 경계의 정칙성을 $C^{2,\alpha}$ 보다 낮추면 이 증명이 성립하지 않는다.

## 지수의 필요성

자료를 $f\in C^{0,\alpha}$ 에서 $f\in C^0$ 으로 낮추면 결론의 $C^{2,\alpha}$ 를 $C^2$ 로 바꾼 진술도 성립하지 않는다.[^2] 직관 절의 적분이 $\alpha=0$ 에서 $\log$ 로 발산하므로 2계 도함수의 상한이 나오지 않는다. $f$ 가 유계이기만 하면 얻는 것은 모든 $\beta\lt 1$ 에서의 $C^{1,\beta}$ 다.

## 추정에서 존재로

$c\ge 0$ 이고 $\partial U$ 가 $C^{2,\alpha}$ 이면 각 $f\in C^{0,\alpha}(\overline U)$ 와 $g\in C^{2,\alpha}(\partial U)$ 에 대해 $Lu=f$, $u\vert\_{\partial U}=g$ 의 해 $u\in C^{2,\alpha}(\overline U)$ 가 유일하게 존재한다.[^1]

증명의 요지. $L_t=(1-t)(-\Delta)+tL$ 로 두면 $t=0$ 의 가해성은 Laplace 방정식에서 알고 있다. 경계 추정이 $t$ 와 무관한 상수로 $\Vert u\Vert\_{C^{2,\alpha}}\le C\Vert L_tu\Vert\_{C^{0,\alpha}}$ 를 주므로, 가해인 $t$ 의 집합이 $\lbrack 0,1\rbrack$ 에서 열려 있고 닫혀 있다. 연결성에서 $t=1$ 도 가해다. $\square$

이 논법을 연속법(method of continuity)이라 한다. 추정의 상수가 $t$ 에 의존하지 않으면 가해인 $t$ 의 집합이 닫히고, 그 조건이 깨지면 논법이 성립하지 않는다.

# 활용

- [타원형 정칙성](elliptic-regularity.md)의 $H^k$ 판은 자료가 $H^k$ 에 들면 해가 $H^{k+2}$ 에 든다는 것을 주고, 각 점의 2계 도함수를 얻으려면 Sobolev 매입(Sobolev embedding)을 한 번 더 거친다. Schauder 추정은 같은 구조로 미분 횟수를 둘 올리는 Hölder 판이고, 되풀이 적용하면 $f\in C^{k,\alpha}$ 에서 $u\in C^{k+2,\alpha}$ 가 나온다.
- [Dirichlet 문제](dirichlet-problem.md)의 Perron 방법(Perron's method)은 경계값의 연속성만으로 조화함수인 해를 주고 내부의 미분 가능성은 조화함수의 성질에서 받는다. 변계수 연산자에서는 그 성질을 쓸 수 없고, 위의 연속법이 고전해를 직접 준다.
- [Schauder 고정점 정리](schauder-fixed-point.md)를 쓰려면 사상이 콤팩트 볼록집합을 자신으로 보내야 한다. Hölder 공간 문서의 콤팩트 매입이 $C^{2,\alpha}$ 의 유계집합을 $C^2$ 에서 상대콤팩트로 만들고, Schauder 추정이 그 유계성을 자료의 노름으로 준다.
- 정의 절의 $1+\frac12\mathrm{sgn}(x_1)$ 처럼 계수가 유계 측정가능일 뿐이면 이 추정이 성립하지 않는다. 계수가 연속이면 [Calderón–Zygmund 이론](calderon-zygmund-theory.md)의 $W^{2,p}$ 추정이, 발산형 연산자의 유계 측정가능 계수이면 [De Giorgi–Nash–Moser 정리](de-giorgi-nash-moser.md)의 $C^{0,\gamma}$ 추정이 대신 성립한다.

[^1]: David Gilbarg, Neil S. Trudinger, *Elliptic Partial Differential Equations of Second Order*, 2판, Springer, 1983, 6.1 절, 6.2 절, 6.3 절. 연속법은 같은 책 17.2 절이다. Juliusz Schauder, "Über lineare elliptische Differentialgleichungen zweiter Ordnung", *Mathematische Zeitschrift* **38** (1934), 257–282 이 원 논문이다.
[^2]: Gilbarg, Trudinger, 같은 책 4.2 절의 주. 유계 자료에서 $C^{1,\beta}$ 까지만 나오는 것은 같은 책 4.3 절이다.

# 연관 문서

## 선수지식

- [타원형 정칙성](elliptic-regularity.md)
- [Hölder 공간](holder-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #measure_theory
