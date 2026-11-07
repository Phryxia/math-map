# 선형 상보성 문제

# 개요

**선형 상보성 문제(linear complementarity problem)** 는 음 아닌 벡터 두 개를 찾되 한쪽이 다른 쪽의 일차식이고, 각 좌표에서 둘 가운데 하나는 $0$ 이어야 하는 문제다. 시장에서 공급이 수요보다 많아 남는 물건은 값이 $0$ 이고 값이 양수인 물건은 남지 않는다는 조건처럼, "둘 가운데 하나는 $0$" 꼴의 조건이 좌표마다 붙은 문제가 이 꼴이다. 어느 좌표에서 어느 쪽이 $0$ 인지 고르는 방법이 $2^n$ 가지라서 하나씩 시험하면 계산이 지수적으로 늘어난다. 선형 상보성 문제는 이 선택을 일차방정식과 부등식의 계로 적고, 행렬의 성질로 해의 존재와 유일성을 판정하며 피벗 연산으로 해를 찾는다.

# 직관

$z=(z_1,z_2)\ge 0$ 과 $w=Mz+q$ 에서

$$
M=\begin{pmatrix}2&1\cr 1&2\end{pmatrix},\qquad q=\begin{pmatrix}-5\cr -1\end{pmatrix}
$$

로 두고 $w\ge 0$, $z_1w_1=0$, $z_2w_2=0$ 을 요구한다. 각 좌표에서 $z_i=0$ 이거나 $w_i=0$ 이므로 네 경우를 차례로 본다.

$z=0$ 이면 $w=q$ 가 음수라 안 된다. $w_1=w_2=0$ 이면 $2z_1+z_2=5$, $z_1+2z_2=1$ 에서 $z_2=-1$ 이라 안 된다. $z_1=0$, $w_2=0$ 이면 $z_2=\frac12$ 이고 $w_1=z_2-5\lt 0$ 이라 안 된다. $z_2=0$, $w_1=0$ 이면 $z_1=\frac52$, $w_2=z_1-1=\frac32$ 이고 모든 조건이 맞는다.

해는 $z=(\frac52,0)$, $w=(0,\frac32)$ 하나다. 좌표가 $n$ 개이면 이런 경우가 $2^n$ 개이므로, 경우를 차례로 시험하지 않고 해를 찾는 방법과 해가 하나뿐인지 미리 아는 방법이 있어야 한다.

# 정의

## 선형 상보성 문제

$M\in\mathbb R^{n\times n}$ 과 $q\in\mathbb R^n$ 에 대해

$$
z\ge 0,\qquad w=Mz+q\ge 0,\qquad z^{\mathsf T}w=0
$$

을 만족하는 $z\in\mathbb R^n$ 을 찾는 문제를 $\mathrm{LCP}(q,M)$ 으로 쓴다. 부등식은 좌표별이다. $z\ge 0$ 과 $w\ge 0$ 에서 $z^{\mathsf T}w=0$ 은 모든 $i$ 에서 $z_iw_i=0$ 과 같고, 이 조건을 **상보성(complementarity)** 이라 한다. 직관 절의 문제는 $\mathrm{LCP}((-5,-1),M)$ 이다.

## P 행렬

정방행렬 $M$ 의 모든 주소행렬식(principal minor)이 양수이면 $M$ 을 **P 행렬(P-matrix)** 이라 한다. 주소행렬식은 같은 번호의 행과 열을 골라 만든 정방 부분행렬의 [행렬식](determinants.md)이다. 직관 절의 $M$ 은 주소행렬식이 $2$, $2$, $3$ 이므로 P 행렬이다. 대칭이 아니어도 $x^{\mathsf T}Mx\gt 0$ 이 모든 $x\ne 0$ 에서 성립하면 P 행렬이다.

# 성질

## 해의 존재와 유일성

정리. $\mathrm{LCP}(q,M)$ 이 모든 $q\in\mathbb R^n$ 에서 해를 하나씩만 갖는 것과 $M$ 이 P 행렬인 것은 동치다.[^1]

$M$ 이 P 행렬이 아니면 어떤 $q$ 에서 해가 없거나 둘 이상이다. $n=1$ 에서 $M=(m)$ 이면 $m\gt 0$ 일 때 $z=\max(0,-q/m)$ 가 유일한 해이고, $m=-1$, $q=1$ 이면 $z=0$ 과 $z=1$ 이 둘 다 해다.

## 볼록 이차 계획의 최적성 조건

$Q$ 가 대칭 양의 반정부호일 때 이차 계획

$$
\min\_x\ \tfrac12x^{\mathsf T}Qx+c^{\mathsf T}x\quad\text{제약 }Ax\ge b,\ x\ge 0
$$

의 [Lagrange 쌍대성](lagrange-duality.md)의 KKT 조건(Karush–Kuhn–Tucker conditions)은 $z=(x,y)$ 에 대한 $\mathrm{LCP}(q,M)$ 이다. 여기서 $y$ 는 $Ax\ge b$ 의 승수이고

$$
M=\begin{pmatrix}Q&-A^{\mathsf T}\cr A&0\end{pmatrix},\qquad q=\begin{pmatrix}c\cr -b\end{pmatrix}
$$

이다. $w$ 의 앞쪽 성분은 $x\ge 0$ 의 승수, 뒤쪽 성분은 여유 $Ax-b$ 이고 상보성이 상보 여유 조건이다. 직관 절의 문제는 $\min\frac12z^{\mathsf T}Mz+q^{\mathsf T}z$, $z\ge 0$ 의 최적성 조건이다.

## Lemke 알고리즘

Lemke 알고리즘(Lemke's algorithm)은 보조 변수 $z_0\ge 0$ 을 더한 계 $w=Mz+q+z_0\mathbf 1$ 에서 출발한다. $z=0$, $z_0=-\min_iq_i$ 로 두면 $w\ge 0$ 이고 상보성이 성립한다. 그 뒤 [단체법](simplex-method.md)처럼 기저 변수 하나를 내보내고 하나를 들이되, 막 나간 변수의 짝을 들이는 규칙으로 피벗을 이어 간다. $z_0$ 이 기저에서 나가면 그때의 $(z,w)$ 가 해다.[^1]

```javascript
// 보충 피벗의 골격. tableau 는 w = q + M z + z0·1 을 담는다.
function lemke(tableau) {
  let entering = "z0";
  let leaving = tableau.argminRow("q");          // 가장 음수인 q_i 의 행
  while (true) {
    tableau.pivot(leaving, entering);
    if (leaving === "z0") return tableau.solution();
    entering = complementOf(leaving);             // w_i 가 나가면 z_i 가 들어온다
    leaving = tableau.ratioTest(entering);        // 음 아님을 지키는 최소비 검사
    if (leaving === null) return "ray";           // 반직선 종료
  }
}
```

$M$ 이 양의 반정부호이면 반직선 종료는 문제에 해가 없다는 뜻이다.[^1] 퇴화가 없으면 피벗이 같은 기저로 돌아오지 않으므로 알고리즘이 끝난다.

## 계산 복잡도

일반 $M$ 에 대해 $\mathrm{LCP}(q,M)$ 이 해를 갖는지 판정하는 문제는 [NP-완전](np-completeness.md)이다.[^2] $M$ 이 양의 반정부호이면 볼록 이차 계획과 같아 [내점법](interior-point-method.md)이 다항시간에 푼다.

# 활용

- 쌍행렬 게임. 두 사람의 보수 행렬로 혼합 전략의 [Nash 균형](nash-equilibrium.md)을 찾는 조건이 선형 상보성 문제이고, [Lemke–Howson 알고리즘](lemke-howson.md)이 같은 보충 피벗으로 균형 하나를 찾는다.
- [장애물 문제](obstacle-problem.md). [Laplace 연산자](laplace-operator.md)를 격자에서 차분으로 바꾸면 $u\ge\psi$, $-\Delta\_hu\ge 0$ 과 상보성이 $z=u-\psi$ 에 대한 선형 상보성 문제가 되고, 차분 행렬은 P 행렬이다.
- [미국형 옵션](american-options.md). 가격의 변분 부등식을 시간과 공간에서 이산화하면 시간 단계마다 선형 상보성 문제가 나온다.
- 접촉 역학. 물체 사이의 간격과 접촉력이 둘 다 음이 아니고 둘 가운데 하나가 $0$ 이라는 조건이 상보성 조건이다.

[^1]: Richard W. Cottle, Jong-Shi Pang, Richard E. Stone, *The Linear Complementarity Problem*, Academic Press, 1992, 3 장과 4 장. P 행렬과 해의 유일성, Lemke 알고리즘과 반직선 종료를 다룬다.
[^2]: Sung-Jin Chung, "NP-completeness of the linear complementarity problem", *Journal of Optimization Theory and Applications* **60** (1989), 393–399.

# 연관 문서

## 선수지식

- [Lagrange 쌍대성](lagrange-duality.md)
- [단체법](simplex-method.md)

## 더 알아보기

- [Lemke–Howson 알고리즘](lemke-howson.md)

#optimization #linear_algebra #computation
