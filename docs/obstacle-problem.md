# 장애물 문제

# 개요

**장애물 문제(obstacle problem)** 는 경계값이 정해진 함수 가운데, 주어진 장애물 함수보다 아래로 내려가지 않는 것 중 에너지가 가장 작은 함수를 찾는 문제다. 양 끝을 높이 $0$ 에 고정한 줄 아래에 언덕 모양의 받침을 두면, 줄은 받침에 닿는 구간에서 받침 모양을 따르고 닿지 않는 구간에서 곧게 펴진다. 줄이 어디부터 어디까지 받침에 닿는지는 미리 주어지지 않고 답의 일부다. 장애물 문제는 이 조건을 부등식 두 개와 등식 하나로 적어, 닿는 구간과 해를 함께 정한다.

# 직관

구간 $(-1,1)$ 에서 $u(-1)=u(1)=0$ 인 줄의 에너지 $\frac12\int u'^2\thinspace dx$ 를 가장 작게 하면 [Dirichlet 원리](dirichlet-principle.md)에 따라 $u''=0$ 인 직선 $u=0$ 이 나온다. 이제 받침 $\psi(x)=\frac34-x^2$ 을 두고 $u\ge\psi$ 를 요구한다. $u=0$ 은 $x=0$ 에서 $\psi(0)=\frac34$ 보다 낮으므로 쓸 수 없다.

줄은 받침에 닿지 않는 곳에서는 여전히 직선이다. 직선이 받침과 만나는 점에서 꺾이면 꺾인 모서리를 깎아 에너지를 줄일 수 있으므로, 직선은 받침에 접해야 한다. $(1,0)$ 을 지나 $\psi$ 에 $x=a$ 에서 접하는 직선은 $\psi(a)+\psi'(a)(1-a)=0$, 곧 $a^2-2a+\frac34=0$ 에서 $a=\frac12$ 다. 따라서

$$
u(x)=\begin{cases}\frac34-x^2 & \vert x\vert\le\frac12\cr 1-\vert x\vert & \frac12\le\vert x\vert\le 1\end{cases}
$$

이다.

이 해에서 $-u''$ 는 닿는 구간 $\lbrack -\frac12,\frac12\rbrack$ 에서 $2$, 그 밖에서 $0$ 이다. 어디서나 $u\ge\psi$ 와 $-u''\ge 0$ 이 성립하고, 각 점에서 둘 가운데 하나는 등호다. 닿는 구간의 끝 $\pm\frac12$ 는 계산의 결과로 나왔고, $u''$ 는 그 점에서 $-2$ 와 $0$ 사이를 뛴다.

# 정의

## 장애물 문제

$\Omega\subset\mathbb R^n$ 이 유계 열린집합이고 $g$ 가 경계값, $\psi$ 가 $\overline\Omega$ 위의 함수이며 $\partial\Omega$ 에서 $\psi\le g$ 다. [Sobolev 공간](sobolev-spaces.md) $H^1(\Omega)$ 에서 경계값이 $g$ 인 함수 가운데 $u\ge\psi$ 인 것의 집합을 $K$ 라 한다. $K$ 에서

$$
E(u)=\frac12\int\_\Omega\vert\nabla u\vert^2\thinspace dx
$$

를 최소로 하는 $u$ 를 찾는 문제를 **장애물 문제** 라 하고, $\psi$ 를 **장애물(obstacle)** 이라 한다. 직관 절은 $n=1$, $\Omega=(-1,1)$, $g=0$, $\psi=\frac34-x^2$ 인 경우다.

## 접촉 집합과 자유 경계

해 $u$ 에 대해 $\Lambda=\lbrace x\in\Omega:u(x)=\psi(x)\rbrace$ 를 **접촉 집합(contact set)**, 열린집합 $\lbrace u\gt\psi\rbrace$ 의 $\Omega$ 안의 경계를 **자유 경계(free boundary)** 라 한다. 직관 절의 해에서 접촉 집합은 $\lbrack -\frac12,\frac12\rbrack$ 이고 자유 경계는 두 점 $\pm\frac12$ 다.

# 성질

## 존재와 유일성

$K$ 가 비어 있지 않으면 장애물 문제의 해가 하나 있다.[^1] $K$ 는 $H^1(\Omega)$ 의 닫힌 볼록집합이고, $E$ 는 경계값이 고정된 함수에서 강제적이며 순볼록이다. 최소화 수열은 $H^1$ 에서 유계라 약수렴하는 부분열을 갖고, $K$ 가 닫힌 볼록집합이라 극한이 $K$ 에 남으며, 순볼록성이 최소점을 하나로 만든다.

## 변분 부등식

$u\in K$ 가 해인 것과 모든 $v\in K$ 에서

$$
\int\_\Omega\nabla u\cdot\nabla(v-u)\thinspace dx\ge 0
$$

인 것은 동치다. 이 꼴의 조건을 **변분 부등식(variational inequality)** 이라 한다. $v=u+t(w-u)$ 는 $0\le t\le 1$ 에서 $K$ 에 있으므로, $E(u+t(w-u))$ 가 $t=0$ 에서 최소라는 조건의 $t$ 에 대한 미분이 이 부등식이다. [Lax–Milgram 정리](lax-milgram.md)를 닫힌 볼록집합으로 넓힌 [Lions–Stampacchia 정리](lions-stampacchia.md)가 같은 존재와 유일성을 준다.[^1]

## 상보성 조건

해 $u$ 는 분포의 뜻에서

$$
u\ge\psi,\qquad -\Delta u\ge 0,\qquad (u-\psi)\thinspace\Delta u=0
$$

을 만족하고, 이것을 한 식으로 $\min(-\Delta u,\thinspace u-\psi)=0$ 이라 쓴다. 변분 부등식에 $v=u+\varphi$, $\varphi\ge 0$ 을 넣으면 $-\Delta u\ge 0$ 이 나온다. $\lbrace u\gt\psi\rbrace$ 의 콤팩트 부분집합에 받침을 둔 $\varphi$ 는 부호와 상관없이 작은 배수로 넣을 수 있으므로 그 집합에서 $\Delta u=0$ 이다.

## 가장 작은 위 조화함수

해 $u$ 는 $-\Delta w\ge 0$, $w\ge\psi$, 경계에서 $w\ge g$ 인 함수 $w$ 전체의 하한과 같다. $w$ 가 그런 함수이면 $\lbrace u\gt\psi\rbrace$ 에서 $-\Delta(w-u)\ge 0$ 이고 그 집합의 경계에서 $w\ge u$ 이므로, [최대값 원리](maximum-principle.md)의 비교 원리가 $w\ge u$ 를 준다. 접촉 집합에서는 $w\ge\psi=u$ 다.

## 해의 정칙성

$\psi\in C^2(\overline\Omega)$ 이면 해는 $\Omega$ 안에서 $C^{1,1}$ 이다. 곧 $\nabla u$ 가 Lipschitz 이고 2계 도함수가 유계다.[^2] 직관 절의 예에서 $u''$ 가 자유 경계에서 뛰므로 $u$ 는 $C^2$ 가 아니고, $C^{1,1}$ 보다 나은 정칙성은 일반적으로 성립하지 않는다.

## 자유 경계의 정칙성

$\psi$ 가 매끄럽고 $-\Delta\psi\ge c\gt 0$ 이면, 자유 경계의 각 점은 정칙점(regular point)이거나 특이점(singular point)이다. 정칙점 근처에서 자유 경계는 $C^{1,\alpha}$ 초곡면이다.[^3] $\psi$ 가 해석적이면 그 근처에서 해석적 초곡면이다.[^2] 정칙점과 특이점은 해를 그 점 근처에서 확대한 극한이 한 방향의 반공간 위의 이차식인지, 모든 방향의 이차식인지로 나뉜다.[^2]

# 활용

- 최적 정지. [Brown 운동](brownian-motion.md)을 $\Omega$ 를 벗어나기 전에 멈추고 멈춘 자리의 $\psi$ 를 받는 [최적 정지](optimal-stopping.md) 문제에서, 출발점 $x$ 의 최대 기대 보상은 $\Delta$ 를 쓴 장애물 문제의 해다. 접촉 집합이 멈추는 영역이고, 가장 작은 위 조화함수라는 성질이 보상 과정의 Snell 포락(Snell envelope)에 해당한다.
- [미국형 옵션](american-options.md). 가격함수가 만족하는 변분 부등식은 Black–Scholes 작용소를 쓴 시간 의존 장애물 문제이고, 자유 경계가 조기 행사 경계다.
- 탄성막의 접촉. 가장자리를 고정한 막을 장애물 위에 덮으면 작은 변형에서 막의 높이가 이 문제의 해이고, 접촉 집합이 막이 장애물에 닿는 부분이다.[^1]

[^1]: David Kinderlehrer, Guido Stampacchia, *An Introduction to Variational Inequalities and Their Applications*, Academic Press, 1980, 2 장. 닫힌 볼록집합 위의 변분 부등식, Lions–Stampacchia 정리, 장애물 문제의 존재와 상보성 조건을 다룬다.
[^2]: Arshak Petrosyan, Henrik Shahgholian, Nina Uraltseva, *Regularity of Free Boundaries in Obstacle-Type Problems*, Graduate Studies in Mathematics 136, American Mathematical Society, 2012. 해의 $C^{1,1}$ 정칙성, 확대 극한에 의한 정칙점과 특이점의 분류를 다룬다.
[^3]: Luis A. Caffarelli, "The regularity of free boundaries in higher dimensions", *Acta Mathematica* **139** (1977), 155–184.

# 연관 문서

## 선수지식

- [Dirichlet 원리](dirichlet-principle.md)
- [최대값 원리](maximum-principle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization #probability
