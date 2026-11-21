# Lax–Wendroff 정리

# 개요

**Lax–Wendroff 정리(Lax–Wendroff theorem)** 는 보존 법칙을 칸 사이를 지나는 양의 수지 계산으로 푸는 차분 방법이 수렴하면, 그 극한이 보존 법칙의 약한 해라는 정리다. 차량 밀도의 계단을 [Burgers 방정식](burgers-equation.md)으로 옮길 때, 방정식을 $u\_t+uu\_x=0$ 꼴 그대로 차분으로 바꾸면 계단이 한 자리에 멈춰 움직이지 않는다. 같은 방정식을 $u\_t+(u^2/2)\_x=0$ 꼴에서 칸 경계의 플럭스로 바꾸면 계단이 맞는 속도로 움직이고, 이 정리는 그 차이가 어디서 오는지를 보인다.

# 직관

Burgers 방정식을 칸 너비 $h=1$, 시간 간격 $k=0.5$ 로 푼다. 칸 $j\le 0$ 의 평균은 $1$, 칸 $j\ge 1$ 의 평균은 $0$ 이다. 참해는 [엔트로피 해](entropy-solutions.md)의 충격파이고, 속도 $(1+0)/2=1/2$ 로 움직여 한 걸음에 칸 $1$ 의 $1/4$ 까지 들어간다. 한 걸음 뒤 칸 $1$ 의 참 평균은 $0.25$ 다.

$u\_t+uu\_x=0$ 에서 $u\_x$ 를 왼쪽 차이로 바꾸면 다음 갱신이 된다.

$$
U^{n+1}\_j=U^n\_j-\frac kh\thinspace U^n\_j\bigl(U^n\_j-U^n\_{j-1}\bigr)
$$

칸 $1$ 은 $0-0.5\cdot 0\cdot(0-1)=0$ 이고, 칸 $0$ 은 왼쪽 차이가 $0$ 이라 $1$ 이다. 걸음을 몇 번 하든 계단은 칸 $0$ 과 칸 $1$ 사이에 멈춰 있다. 칸 $1$ 의 값이 $0$ 이라 그 칸으로 들어오는 양을 곱셈이 지운다.

$u\_t+(u^2/2)\_x=0$ 에서 칸 $j$ 의 오른쪽 경계를 지나는 양을 $F\_{j+1/2}=(U\_j)^2/2$ 로 두면 칸 $1$ 은 $0-0.5\bigl(0-\frac12\bigr)=0.25$ 로, 참 평균과 같다. 이 갱신에서는 칸 $0$ 이 내보낸 양이 그대로 칸 $1$ 로 들어간다. 그래서 칸 평균의 합은 왼쪽 끝에서 들어온 양만큼만 바뀌고, 계단이 움직이는 속도가 이 수지로 정해진다.

# 정의

## 보존형 방법과 일관성

보존 법칙 $u\_t+f(u)\_x=0$ 의 차분 방법이 함수 $F$ 와 정수 $p,q\ge 0$ 에 대해 다음 꼴이면 **보존형(conservative)** 이라 한다.

$$
U^{n+1}\_j=U^n\_j-\frac kh\bigl(F\_{j+1/2}-F\_{j-1/2}\bigr),\qquad F\_{j+1/2}=F\bigl(U^n\_{j-p},\dots,U^n\_{j+q}\bigr)
$$

모든 $u$ 에서 $F(u,\dots,u)=f(u)$ 이고 $F$ 가 각 변수에 대해 Lipschitz 연속이면 수치 플럭스 $F$ 가 **일관적(consistent)** 이라 한다.[^1] 직관 절의 둘째 갱신은 $p=0$, $q=0$, $F(u)=u^2/2$ 인 보존형 방법이고 일관적이다. 첫째 갱신은 이 꼴로 쓸 수 없다.

## 정리

격자 $h\_l\to 0$, $k\_l/h\_l$ 은 일정한 열에서, 보존형이고 일관적인 방법의 수치해를 칸과 걸음마다 상수인 함수 $u\_l(x,t)$ 로 놓는다. 다음 두 가지를 가정한다.[^1][^2]

1. $u\_l$ 이 어떤 함수 $u$ 로 국소 $L^1$ 수렴한다.
2. 모든 $l$ 과 $t$ 에서 $u\_l(\cdot,t)$ 의 전체 변동이 한 상수 $R$ 이하다.

그러면 $u$ 는 처음 값 $g$ 의 보존 법칙의 약한 해다. 곧 모든 $\varphi\in C\_c^1(\mathbb R\times\lbrack 0,\infty))$ 에서 다음이 성립한다.

$$
\int\_0^\infty\int\_{\mathbb R}\bigl(u\varphi\_t+f(u)\varphi\_x\bigr)\thinspace dx\thinspace dt+\int\_{\mathbb R}g(x)\varphi(x,0)\thinspace dx=0
$$

# 성질

## 증명의 요지

갱신식에 $hk\thinspace\varphi(x\_j,t\_n)$ 을 곱하고 모든 $j$, $n$ 에 대해 더한다. 합의 순서를 바꾸어 차이를 $\varphi$ 쪽으로 옮기면 다음을 얻는다.

$$
\begin{aligned}
&hk\sum\_{n\ge 1}\sum\_jU^n\_j\frac{\varphi^n\_j-\varphi^{n-1}\_j}{k}\cr
&\quad+hk\sum\_{n\ge 0}\sum\_jF^n\_{j+1/2}\frac{\varphi^n\_{j+1}-\varphi^n\_j}{h}+h\sum\_jU^0\_j\varphi^0\_j=0
\end{aligned}
$$

첫째 합과 셋째 합은 가정 1 로 $\iint u\varphi\_t$ 와 $\int g\varphi(x,0)$ 에 간다. 둘째 합에서는 일관성과 Lipschitz 연속성으로 $\vert F^n\_{j+1/2}-f(U^n\_j)\vert$ 가 이웃 칸 차이의 합 이하이고, 가정 2 로 그 기여가 $h\to 0$ 에서 사라져 $\iint f(u)\varphi\_x$ 에 간다.

## 충격파의 속도

극한 $u$ 가 곡선 $x=s(t)$ 를 따라 끊기고 끊김의 왼쪽 값이 $u\_l$, 오른쪽 값이 $u\_r$ 이면, 약한 해이므로 끊김의 속도가 다음 Rankine–Hugoniot 조건(Rankine–Hugoniot condition)을 만족한다.

$$
s'=\frac{f(u\_l)-f(u\_r)}{u\_l-u\_r}
$$

직관 절의 보존형 방법은 수렴하면 계단을 속도 $1/2$ 로 옮긴다. 보존형이 아닌 방법은 이 조건을 만족하지 않는 속도로 계단을 옮길 수 있다. Hou 와 LeFloch 는 보존형이 아닌 방법이 틀린 충격파로 수렴할 때 그 오차가 격자를 줄여도 사라지지 않는다는 것을 보였다.[^3]

## 수렴과 엔트로피 조건

정리는 수렴을 가정하고 극한의 성질만 준다. 수렴 자체는 [전체 변동 감소 방법](tvd-schemes.md)처럼 전체 변동을 묶어 두는 성질로 따로 보인다.

극한인 약한 해는 엔트로피 해가 아닐 수 있다. [Roe 풀이](roe-solver.md)를 엔트로피 수정 없이 쓰면 음속 희박파 자리에 서 있는 충격파로 수렴할 수 있고, 이 극한도 약한 해다.[^2] 단조인 보존형 방법은 엔트로피 해로 수렴한다.[^4]

# 활용

- 충격파 포착 방법의 설계. [Godunov 방법](godunov-method.md), [MUSCL 방법](muscl-method.md), [ENO 방법](eno-schemes.md)을 수치 플럭스의 보존형으로 쓰는 근거다.
- 기체 역학 계산. 압축성 [Euler 방정식](euler-equations-fluid.md)을 에너지 같은 보존량의 형태로 풀어 충격파의 위치와 세기를 맞춘다. 압력이나 온도 같은 보존되지 않는 변수로 쓴 차분은 충격파를 틀린 자리로 옮길 수 있다.
- 다른 보존형 방법의 수렴 증명. 전체 변동 한계를 보인 뒤 이 정리로 극한이 약한 해임을 얻고, 엔트로피 부등식의 이산판으로 엔트로피 해임을 얻는다.

[^1]: P. D. Lax, B. Wendroff, "Systems of conservation laws", *Communications on Pure and Applied Mathematics* 13 (1960), 217–237.

[^2]: R. J. LeVeque, *Finite Volume Methods for Hyperbolic Problems*, Cambridge University Press (2002), 12 장.

[^3]: T. Y. Hou, P. G. LeFloch, "Why nonconservative schemes converge to wrong solutions: error analysis", *Mathematics of Computation* 62 (1994), 497–530.

[^4]: M. G. Crandall, A. Majda, "Monotone difference approximations for scalar conservation laws", *Mathematics of Computation* 34 (1980), 1–21.

# 연관 문서

## 선수지식

- [Godunov 방법](godunov-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #computation
