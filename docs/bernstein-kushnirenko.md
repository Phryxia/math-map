# Bernstein–Kushnirenko 정리

# 개요

**Bernstein–Kushnirenko 정리(Bernstein–Kushnirenko theorem)** 는 연립 다항식이 0 이 아닌 좌표에서 갖는 해의 개수를, 각 다항식에 나타나는 지수가 이루는 다각형의 [혼합부피](mixed-volumes.md)로 세는 정리다. 다음 두 방정식은 둘 다 2차식이어서 차수만 보면 해가 넷까지 있을 수 있는데, 실제로 풀면 해가 둘이다.

$$
1+x+y+2xy=0,\qquad 2+x+3y+xy=0
$$

이 정리는 각 다항식에 어떤 단항식이 나타나는지만 보고 해의 개수를 정확히 준다.

# 직관

첫 방정식을 $y$ 에 대해 풀면 $y=-(1+x)/(1+2x)$ 다. 둘째 방정식을 $y$ 가 있는 항과 없는 항으로 묶고 $y$ 를 넣은 뒤 $1+2x$ 를 곱하면 다음이 나온다.

$$
(2+x)(1+2x)-(3+x)(1+x)=x^2+x-1=0
$$

$x=(-1\pm\sqrt5)/2$ 이고, 두 값 모두 $1+2x\ne 0$, $1+x\ne 0$ 이므로 $x$ 와 $y$ 가 $0$ 이 아닌 해가 정확히 둘이다.

차수로 세면 넷이 나오는 이유는 일반적인 2차식이 단항식 $1,x,y,x^2,xy,y^2$ 을 모두 가질 수 있기 때문이다. 두 방정식에는 $1,x,y,xy$ 만 있다. 지수 $(a,b)$ 를 평면의 점으로 찍으면 일반적인 2차식의 지수는 꼭짓점이 $(0,0),(2,0),(0,2)$ 인 삼각형을 채우고, 두 방정식의 지수는 단위정사각형의 꼭짓점이다. 삼각형의 넓이 $2$ 에 $2$ 를 곱하면 차수로 센 $4$ 이고, 정사각형의 넓이 $1$ 에 $2$ 를 곱하면 실제 해의 개수 $2$ 다.

두 방정식의 지수 다각형이 다르면 넓이 대신 혼합부피를 쓴다. 정사각형 $P$ 와 일차식의 지수 삼각형 $Q=\mathrm{conv}\lbrace(0,0),(1,0),(0,1)\rbrace$ 이면 $P+Q$ 의 넓이가 $7/2$ 이므로 $2V(P,Q)=7/2-1-1/2=2$ 이다. 일차식으로 $y$ 를 $x$ 의 일차식으로 쓰고 $xy$ 가 든 식에 넣으면 $x$ 의 2차방정식이 되어 해가 둘이다.

# 정의

$x^a=x_1^{a_1}\cdots x_n^{a_n}$ 에서 $a\in\mathbb Z^n$ 이면 지수가 음수여도 된다. 이런 단항식의 유한 일차결합 $f=\sum_a c_ax^a$ 를 Laurent 다항식(Laurent polynomial)이라 하고, $c_a\ne 0$ 인 $a$ 의 집합을 $f$ 의 지지집합(support)이라 한다. 지지집합의 볼록 껍질을 $f$ 의 **Newton 다면체(Newton polytope)** 라 하고 $\mathrm{New}(f)$ 로 쓴다.

직관 절의 첫 방정식의 왼쪽 다항식은 지지집합이 $\lbrace(0,0),(1,0),(0,1),(1,1)\rbrace$ 이고 Newton 다면체가 단위정사각형이다.

$(\mathbb C^\ast)^n$ 은 모든 좌표가 $0$ 이 아닌 복소수인 점의 집합이다. Laurent 다항식은 이 집합 위에서 정의된다.

Bernstein–Kushnirenko 정리는 다음 진술이다.[^1][^2] $n$ 변수 Laurent 다항식 $f_1,\dots,f_n$ 의 Newton 다면체를 $P_1,\dots,P_n$ 이라 하면, 연립방정식 $f_1=\dots=f_n=0$ 의 $(\mathbb C^\ast)^n$ 안 고립해를 중복도까지 센 개수 $N$ 에 대해 다음 상한이 성립한다.

$$
N\le n!\thinspace V(P_1,\dots,P_n)
$$

지지집합을 고정하고 계수를 일반적으로 고르면 등호가 성립한다.

# 성질

## Kushnirenko 정리

모든 $P_i$ 가 같은 $P$ 이면 $V(P,\dots,P)=\mathrm{vol}(P)$ 이므로 해의 개수는 $n!\thinspace\mathrm{vol}(P)$ 다. Kushnirenko 가 먼저 증명한 경우이고, 직관 절의 정사각형이 $n=2$ 의 예다.[^2]

## Bézout 정리와의 관계

$\Delta$ 를 꼭짓점이 원점과 표준기저 $e_1,\dots,e_n$ 인 단체라 하면 $\mathrm{vol}(\Delta)=1/n!$ 이다. 차수 $d_i$ 인 일반적인 다항식의 Newton 다면체는 $d_i\Delta$ 이고, 혼합부피의 다중선형성으로 다음이 나온다.

$$
n!\thinspace V(d_1\Delta,\dots,d_n\Delta)=n!\thinspace d_1\cdots d_n\thinspace\mathrm{vol}(\Delta)=d_1\cdots d_n
$$

이것이 [교차 이론](intersection-theory.md)의 Bézout 정리(Bézout's theorem)가 주는 수다. 지지집합이 $d_i\Delta$ 보다 작으면 사영공간의 무한원점에 놓인 해가 생기고, Bézout 의 수에서 그만큼 빠진 것이 이 정리의 수다. 직관 절의 예를 동차화하면 두 곡선이 무한원점 $(1:0:0)$ 과 $(0:1:0)$ 을 공유하고, $4-2=2$ 다.

## 등호 조건

$w\in\mathbb R^n$ 에 대해 $f_i$ 의 항 가운데 $\langle w,a\rangle$ 가 가장 작은 항만 모은 것을 $\mathrm{in}\_w f_i$ 라 한다. Bernstein 은 모든 $w\ne 0$ 에서 $\mathrm{in}\_w f_1=\dots=\mathrm{in}\_w f_n=0$ 이 $(\mathbb C^\ast)^n$ 에 해를 갖지 않으면 모든 해가 고립되고 등호가 성립함을 보였다.[^1]

조건이 깨지면 해가 무한원으로 빠져나간다. 둘째 방정식의 $xy$ 계수를 $2$ 로 바꾸면 $w=(-1,0)$ 에서 두 식의 $\mathrm{in}\_w$ 가 $x(1+2y)$ 로 같아 $y=-1/2$ 를 공통근으로 갖는다. 직관 절의 소거를 다시 하면 다음이 나오므로 해가 하나도 없다.

$$
(2+x)(1+2x)-(3+2x)(1+x)=-1
$$

## 혼합 세분과 증명의 요지

평면에서 $P+Q$ 는 $P$ 의 평행이동, $Q$ 의 평행이동, 그리고 $P$ 의 변과 $Q$ 의 변을 더한 평행사변형들로 나눌 수 있고, 이 나눔을 혼합 세분(mixed subdivision)이라 한다. 평행사변형들의 넓이를 더하면 $2V(P,Q)$ 다. 직관 절의 정사각형과 삼각형에서는 평행사변형들의 넓이 합이 $2$ 다.

증명은 계수에 매개변수 $t$ 를 넣어 $t\to 0$ 일 때의 해를 Puiseux 급수로 전개한다. 각 해의 첫 항의 지수가 혼합 세분의 칸 하나를 고르고, 평행사변형 칸 하나에서 나오는 해의 개수가 그 칸의 넓이와 같다. $n$ 차원에서도 같은 논법이 성립하고, 혼합 칸들의 부피 합이 $n!\thinspace V(P_1,\dots,P_n)$ 이다.

# 활용

- 다면체 호모토피. Huber 와 Sturmfels 는 증명의 변형을 그대로 수치 알고리즘으로 바꾸어, 혼합 칸마다 쉬운 연립방정식에서 출발해 해를 따라가는 방법으로 $(\mathbb C^\ast)^n$ 의 해를 모두 계산했다.[^3] 따라가는 경로의 수가 혼합부피이므로 차수의 곱으로 세는 방법보다 적다.
- [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md). Teissier 와 Khovanskii 는 해의 개수를 [토릭 다양체](toric-varieties.md) 위 인자의 교차수로 읽고, Hodge 지표 정리(Hodge index theorem)를 적용해 격자 다면체의 혼합부피 부등식을 유도했다.
- 희소 종결식. 지지집합이 정해진 $n+1$ 개의 Laurent 다항식이 공통해를 가질 조건은 계수의 다항식 하나로 적히고, 이것이 [종결식](resultant.md)의 희소 판본이다. 이 다항식이 $f_i$ 의 계수에 대해 갖는 차수는 나머지 $n$ 개의 Newton 다면체의 혼합부피에 $n!$ 을 곱한 값이다.[^4]
- [0 차원 아이디얼](zero-dimensional-ideals.md). 해가 유한 개인 연립방정식의 해의 개수는 몫환의 차원으로 계산되고, 이 정리는 [Gröbner 기저](groebner-bases.md)를 구하기 전에 그 수의 상한을 지지집합만으로 준다.

[^1]: D. N. Bernstein, "The number of roots of a system of equations", Functional Analysis and Its Applications 9 (1975), 183–185.
[^2]: A. G. Kushnirenko, "Newton polytopes and the Bezout theorem", Functional Analysis and Its Applications 10 (1976), 233–235.
[^3]: Birkett Huber and Bernd Sturmfels, "A polyhedral method for solving sparse polynomial systems", Mathematics of Computation 64 (1995), 1541–1555.
[^4]: David A. Cox, John Little and Donal O'Shea, *Using Algebraic Geometry*, 2nd ed., Springer, 2005, ch. 7.

# 연관 문서

## 선수지식

- [혼합부피](mixed-volumes.md)
- [0 차원 아이디얼](zero-dimensional-ideals.md)

## 더 알아보기

- [호모토피 연속법](homotopy-continuation.md)

#algebra #combinatorics #computation
