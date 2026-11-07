# Signorini 문제

# 개요

**Signorini 문제(Signorini problem)** 는 영역의 경계 일부에 "이 높이 아래로 내려갈 수 없다" 는 제약을 둔 채 에너지가 가장 작은 상태를 찾는 문제다. 탄성체를 단단한 바닥 위에 올려놓고 누르면, 바닥에 닿는 부분과 들뜨는 부분이 생기는데 어디가 닿는지는 미리 알 수 없다. Signorini 문제는 경계에서 "닿지 않았거나, 닿았다면 바닥이 미는 힘만 받는다" 는 조건을 부등식 두 개와 등식 하나로 적고, 이것을 [Lions–Stampacchia 정리](lions-stampacchia.md)의 변분 부등식으로 푼다.

# 직관

구간 $(0,1)$ 위의 줄이 오른쪽 끝에서 높이 $c$ 에 고정되어 있다. 왼쪽 끝은 기둥을 따라 위아래로 미끄러질 수 있지만, 기둥에 붙은 멈춤쇠 때문에 높이 $0$ 아래로는 내려가지 못한다. 줄의 높이를 $u(x)$ 라 하면 에너지 $\frac12\int_0^1u'^2\thinspace dx$ 를 $u(1)=c$, $u(0)\ge 0$ 에서 가장 작게 하는 $u$ 를 찾는다.

$c\ge 0$ 이면 $u\equiv c$ 가 에너지 $0$ 이고 제약을 만족하므로 답이다. 왼쪽 끝은 멈춤쇠에 닿지 않고 기울기 $u'(0)$ 은 $0$ 이다. $c\lt 0$ 이면 $u\equiv c$ 는 $u(0)=c\lt 0$ 이라 쓸 수 없다. 끝값이 $u(0)=a\ge 0$ 이면 가장 작은 에너지는 직선의 것 $\frac12(c-a)^2$ 이고, 이것은 $a=0$ 에서 가장 작다. 답은 $u(x)=cx$ 이고 왼쪽 끝이 멈춤쇠에 닿으며 기울기 $u'(0)=c\lt 0$ 이다.

두 경우 모두 왼쪽 끝에서 $u(0)\ge 0$ 과 $-u'(0)\ge 0$ 이 성립하고, 둘 가운데 하나는 $0$ 이다. $-u'(0)$ 은 멈춤쇠가 줄을 위로 미는 힘이다. 닿지 않으면 힘이 $0$ 이고, 힘이 있으면 닿아 있다. 어느 쪽인지는 $c$ 에 따라 정해졌다.

# 정의

## 스칼라 Signorini 문제

$\Omega\subset\mathbb R^n$ 이 유계이고 경계가 매끄러운 열린집합이며, 경계가 겹치지 않는 두 부분 $\Gamma_D$ 와 $\Gamma_S$ 로 나뉜다. $\nu$ 는 바깥 단위 법선, $f\in L^2(\Omega)$ 는 힘, $g$ 는 $\Gamma_D$ 위의 경계값, $\psi$ 는 $\Gamma_S$ 위의 장애물이다. [Sobolev 공간](sobolev-spaces.md) $H^1(\Omega)$ 의 함수 가운데 흔적(trace)이 $\Gamma_D$ 에서 $g$ 이고 $\Gamma_S$ 에서 $\psi$ 이상인 것의 집합을 $K$ 라 하자. $K$ 에서

$$
E(u)=\frac12\int\_\Omega\vert\nabla u\vert^2\thinspace dx-\int\_\Omega fu\thinspace dx
$$

를 최소로 하는 $u$ 를 찾는 문제를 **Signorini 문제** 라 한다. 직관 절은 $n=1$, $\Omega=(0,1)$, $\Gamma_D=\lbrace 1\rbrace$, $\Gamma_S=\lbrace 0\rbrace$, $f=0$, $g=c$, $\psi=0$ 인 경우다.

## Signorini 경계 조건

$\Gamma_S$ 위의 다음 세 조건을 **Signorini 경계 조건(Signorini boundary condition)** 이라 한다.

$$
u\ge\psi,\qquad\partial_\nu u\ge 0,\qquad(u-\psi)\thinspace\partial_\nu u=0
$$

$u=\psi$ 인 점의 집합을 **접촉 집합(contact set)** 이라 한다. 직관 절에서 $x=0$ 의 바깥 법선은 $-1$ 이므로 $\partial_\nu u=-u'(0)$ 이고, 접촉 집합은 $c\lt 0$ 일 때 $\lbrace 0\rbrace$, $c\ge 0$ 일 때 공집합이다.

## 얇은 장애물 문제

$\Omega$ 안의 초평면 조각 $M$ 위에서만 $u\ge\psi$ 를 요구하고 에너지 $\frac12\int\vert\nabla u\vert^2$ 를 최소로 하는 문제를 **얇은 장애물 문제(thin obstacle problem)** 라 한다. $\Omega$ 와 $\psi$ 가 $M$ 에 대해 대칭이면 해도 대칭이고, $M$ 의 한쪽 반을 $\Omega$ 로 보면 $\Gamma_S=M$ 인 Signorini 문제가 된다.

# 성질

## 존재와 유일성

$K$ 가 비어 있지 않고 $\Gamma_D$ 의 넓이가 양수이면 Signorini 문제의 해가 하나뿐이다. $K$ 는 흔적 사상이 연속이므로 닫혀 있고, 부등식 제약이므로 볼록이다. $\Gamma_D$ 에서 경계값이 고정되어 있으므로 Poincaré 부등식(Poincaré inequality)에 따라 $\int\nabla u\cdot\nabla v$ 가 강제이고, Lions–Stampacchia 정리가 해를 준다. 해는 모든 $v\in K$ 에서 다음 변분 부등식을 만족하는 $u\in K$ 와 같다.

$$
\int\_\Omega\nabla u\cdot\nabla(v-u)\thinspace dx\ge\int\_\Omega f\thinspace(v-u)\thinspace dx
$$

## 강한 꼴

해가 충분히 매끄러우면 $-\Delta u=f$ 가 $\Omega$ 에서 성립하고 $\Gamma_S$ 에서 Signorini 경계 조건이 성립한다. Green 공식으로 변분 부등식은

$$
\int\_{\Gamma_S}\partial_\nu u\thinspace(v-u)\thinspace dS\ge 0
$$

이 된다. $v=u+\varphi$, $\varphi\ge 0$ 을 넣으면 $\partial_\nu u\ge 0$ 이고, 접촉 집합 밖에서는 $\varphi$ 의 부호를 바꿀 수 있으므로 $\partial_\nu u=0$ 이다. [장애물 문제](obstacle-problem.md)가 영역 안에 놓은 상보성 조건을 Signorini 문제는 경계에 놓는다.

## 최적 정칙성

$\psi$ 가 매끄러우면 얇은 장애물 문제의 해는 $M$ 의 양쪽에서 $C^{1,1/2}$ 이고, 이 지수는 더 올릴 수 없다[^2]. $n=2$, $M=\lbrace x_2=0\rbrace$, $\psi=0$ 에서

$$
u(x_1,x_2)=\mathrm{Re}\bigl(x_1+i\vert x_2\vert\bigr)^{3/2}
$$

은 $M$ 밖에서 [조화함수](harmonic-functions.md)이고, $M$ 위에서 $x_1\ge 0$ 이면 $u=x_1^{3/2}\gt 0$, $x_1\lt 0$ 이면 $u=0$ 이다. 기울기가 $\vert x\vert^{1/2}$ 크기로 변하므로 $C^{1,1/2}$ 보다 매끄럽지 않다. 장애물 문제의 해가 $C^{1,1}$ 인 것과 비교하면 제약을 낮은 차원의 집합에 둔 만큼 정칙성이 떨어진다.

## 탄성체의 Signorini 문제

원래 문제는 변위 벡터 $\mathbf u$ 의 선형 탄성 에너지 $\frac12\int\sigma(\mathbf u):\varepsilon(\mathbf u)\thinspace dx-\int\mathbf f\cdot\mathbf u\thinspace dx$ 를 최소화한다. $\varepsilon(\mathbf u)$ 는 변형률, $\sigma(\mathbf u)$ 는 응력이다. 접촉면 $\Gamma_S$ 에서 법선 변위가 틈 $h$ 를 넘지 않는다는 조건 $\mathbf u\cdot\nu\le h$, 법선 응력이 누르는 쪽이라는 조건 $\sigma_{\nu\nu}\le 0$, 둘의 상보성 $(\mathbf u\cdot\nu-h)\sigma_{\nu\nu}=0$, 마찰이 없다는 조건을 둔다. Fichera 가 이 문제의 해의 존재와 유일성을 증명했고, 변분 부등식 이론이 여기서 시작되었다[^1].

# 활용

- 접촉 역학. 기계 부품의 맞닿은 면, 기초 위의 구조물, 타이어와 노면처럼 닿는 영역이 하중에 따라 바뀌는 문제를 탄성체의 Signorini 문제로 적고 [유한요소법](finite-element-method.md)으로 푼다.
- 반투과 막. 경계를 통해 유체가 한 방향으로만 흐르는 막에서는 압력이 문턱값을 넘을 때만 흐름이 생긴다. 압력을 $u$, 문턱을 $\psi$ 로 두면 Signorini 경계 조건이 된다.
- 분수 거듭제곱. 반공간의 조화 확장을 쓰면 $\mathbb R^{n-1}$ 위의 [Laplace 연산자](laplace-operator.md)의 분수 거듭제곱 $(-\Delta)^{1/2}$ 에 대한 장애물 문제가 얇은 장애물 문제와 같아진다. $C^{1,1/2}$ 정칙성이 이 대응으로 분수 장애물 문제에 옮겨진다.

[^1]: G. Fichera, "Sul problema elastostatico di Signorini con ambigue condizioni al contorno", *Atti della Accademia Nazionale dei Lincei, Rendiconti, Classe di Scienze Fisiche, Matematiche e Naturali* (8) 34 (1963), 138–142.
[^2]: I. Athanasopoulos, L. A. Caffarelli, "Optimal regularity of lower dimensional obstacle problems", *Journal of Mathematical Sciences* 132 (2006), 274–284.

# 연관 문서

## 선수지식

- [Lions–Stampacchia 정리](lions-stampacchia.md)
- [장애물 문제](obstacle-problem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #optimization
