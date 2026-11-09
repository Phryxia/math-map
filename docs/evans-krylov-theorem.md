# Evans–Krylov 정리

# 개요

**Evans–Krylov 정리(Evans–Krylov theorem)** 는 2계 도함수에 대해 오목한 완전 비선형 타원형 방정식 $F(D^2u)=0$ 의 해가 2계 도함수까지 Hölder 연속이라는 정리다. $F(M)=\min(\mathrm{tr}M,\thinspace\mathrm{tr}(AM))$ 처럼 두 선형 방정식 가운데 작은 쪽을 고르는 방정식은 최적 제어에서 두 행동 가운데 하나를 고를 때 나오고, 어느 쪽이 작은지는 자리마다 바뀐다. 한 번 미분해 얻는 선형 방정식은 계수가 자리마다 뛰므로, 그 계수로는 해가 두 번 연속미분가능한지 알 수 없다. Evans–Krylov 정리는 오목성이 2계 도함수에 한쪽 부등식을 준다는 것과 [Krylov–Safonov Harnack 부등식](krylov-safonov-harnack.md)을 합쳐 이 물음에 답한다.

# 직관

$F$ 가 행렬에 대해 매끄럽고 $u$ 가 $F(D^2u)=0$ 의 매끄러운 해라 하자. 방향 $e$ 로 한 번 미분하면

$$
\sum\_{i,j}F\_{ij}(D^2u(x))\thinspace D\_{ij}u_e=0
$$

이다. $F\_{ij}=\partial F/\partial M\_{ij}$ 이다. 계수 $a^{ij}(x)=F\_{ij}(D^2u(x))$ 는 $D^2u$ 를 통해서만 $x$ 에 의존하므로 연속인지 알 수 없다. 계수가 측정가능하기만 해도 Krylov–Safonov 정리가 $u_e$ 의 Hölder 연속성을 주므로 $u$ 의 1계 도함수까지는 Hölder 연속이다.

한 번 더 미분하면

$$
\sum\_{i,j}F\_{ij}\thinspace D\_{ij}u\_{ee}=-\sum\_{i,j,k,l}F\_{ij,kl}\thinspace D\_{ij}u_e\thinspace D\_{kl}u_e
$$

이다. $F$ 가 오목이면 오른쪽이 $0$ 이상이므로 $u\_{ee}$ 는 등식이 아니라 한쪽 부등식만 만족한다. 그래서 $\sup u\_{ee}-u\_{ee}$ 가 음 아닌 위 해이고 약한 Harnack 부등식이 그 함수의 작은 값의 부피를 묶지만, 반대쪽 부등식은 없다.

반대쪽은 방정식 자체에서 나온다. 각 점에서 $D^2u$ 는 곡면 $\lbrace F=0\rbrace$ 위에 있으므로, 어떤 방향의 $u\_{ee}$ 가 최댓값보다 많이 작으면 타원성 때문에 다른 방향의 $u\_{e'e'}$ 는 커야 한다. 대칭행렬을 펼치는 유한 개의 방향 $e_1,\dots,e_N$ 에 대해 한쪽 정보를 모아 반지름을 반으로 줄일 때마다 $D^2u$ 의 진동이 일정한 비율로 준다.

# 정의

## 일률 타원형 완전 비선형 연산자

$\mathcal S^n$ 을 $n\times n$ 실대칭행렬의 공간이라 하자. 함수 $F:\mathcal S^n\to\mathbb R$ 가 상수 $0\lt \lambda\le\Lambda$ 에 대해 모든 $M\in\mathcal S^n$ 과 $P\ge 0$ 에서

$$
\lambda\thinspace\mathrm{tr}P\le F(M+P)-F(M)\le\Lambda\thinspace\mathrm{tr}P
$$

를 만족하면 **일률 타원형(uniformly elliptic)** 이라 한다. $-F$ 가 $\mathcal S^n$ 에서 [볼록](convexity.md)함수이면 **오목(concave)** 이라 한다. 방정식 $F(D^2u)=0$ 을 **완전 비선형 타원형 방정식(fully nonlinear elliptic equation)** 이라 한다.

$F(M)=\mathrm{tr}M$ 이면 $\lambda=\Lambda=1$ 이고 방정식은 $\Delta u=0$ 이다. 개요의 $F(M)=\min(\mathrm{tr}M,\thinspace\mathrm{tr}(AM))$ 은 $\lambda\le 1\le\Lambda$ 이고 $A$ 의 고윳값이 $\lambda$ 와 $\Lambda$ 사이에 있을 때 일률 타원형이고, 선형함수 둘의 최솟값이므로 오목이다. 이 예의 $F$ 는 $\mathrm{tr}M=\mathrm{tr}(AM)$ 인 자리에서 미분가능하지 않다.

## Bellman 방정식

대칭행렬 $A\_\theta$ 와 상수 $c\_\theta$ 의 모임 $(\theta\in\Theta)$ 에 대해

$$
F(D^2u)=\inf\_{\theta\in\Theta}\bigl(\mathrm{tr}(A\_\theta D^2u)+c\_\theta\bigr)=0
$$

꼴을 **Bellman 방정식(Bellman equation)** 이라 한다. 각 $A\_\theta$ 의 고윳값이 $\lambda$ 와 $\Lambda$ 사이에 있으면 $F$ 는 일률 타원형이고 오목이다. 거꾸로 일률 타원형인 오목 $F$ 는 그 접평면들의 최솟값이므로 이 꼴로 쓸 수 있다. 개요의 예는 $\Theta$ 가 두 원소이고 $c\_\theta=0$ 인 경우다.

# 성질

## Evans–Krylov 정리

정리. $F$ 가 일률 타원형이고 오목이며 $u\in C^2(B_1)$ 가 $F(D^2u)=0$ 을 만족하면, $n$, $\lambda$, $\Lambda$ 에만 의존하는 $0\lt \alpha\lt 1$ 과 $C$ 로

$$
\Vert u\Vert\_{C^{2,\alpha}(\overline{B\_{1/2}})}\le C\bigl(\Vert u\Vert\_{L^\infty(B_1)}+\vert F(0)\vert\bigr)
$$

이다.[^1][^2]

증명의 요지. 오목성에서 $u\_{ee}$ 가 아래 해이므로 국소 최댓값 원리가 $u\_{ee}$ 를 위에서 묶고, 모든 방향에서 $u\_{ee}\le K$ 이면 타원성 조건에 $P=KI-D^2u$ 를 넣어 $D^2u$ 가 아래에서도 묶인다. 방향 $e_k$ 마다 $w_k=\sup\_{B_r}u\_{e_ke_k}-u\_{e_ke_k}$ 는 직관 절의 부등식에 따라 음 아닌 위 해이고, 약한 Harnack 부등식이 각 $w_k$ 의 작은 값의 부피를 아래로 묶는다. 오목성에서 다음이 성립한다.

$$
F(D^2u(y))\le F(D^2u(x))+\sum F\_{ij}(D^2u(x))\bigl(D\_{ij}u(y)-D\_{ij}u(x)\bigr)
$$

양변의 $F$ 가 $0$ 이므로, $D^2u(y)-D^2u(x)$ 가 모든 방향에서 함께 음수로 크게 내려가지 못한다. 두 정보를 합치면 $\mathrm{osc}\_{B\_{r/2}}D^2u\le\gamma\thinspace\mathrm{osc}\_{B_r}D^2u$ 인 $\gamma\lt 1$ 이 나온다.

## 오목성 가정의 필요성

오목성 없이 일률 타원형만 가정하면 결론이 성립하지 않는다. 12 차원에서 일률 타원형 방정식 $F(D^2u)=0$ 의 점성해 가운데 $C^2$ 가 아닌 것이 있다.[^3] 일률 타원형만 가정하면 Krylov–Safonov 정리로 얻는 $C^{1,\alpha}$ 가 일반적인 결론이다.

## 점성해와 고계 정칙성

같은 결론이 $F(D^2u)=0$ 의 [점성해](viscosity-solutions.md)에서도 성립한다.[^1] $F$ 가 매끄러우면 $D^2u$ 의 Hölder 연속성이 미분한 선형 방정식의 계수 $F\_{ij}(D^2u)$ 를 Hölder 연속으로 만들고, [Schauder 추정](schauder-estimates.md)을 되풀이 써서 $u\in C^\infty$ 가 나온다.

# 활용

- 확률 최적 제어. 확산 과정의 세기를 매 순간 고르는 제어 문제에서 가치함수가 [Hamilton–Jacobi–Bellman 방정식](hamilton-jacobi-bellman.md)을 만족하고, 그 방정식은 Bellman 방정식의 꼴이다. 이 정리가 가치함수의 2계 도함수까지의 정칙성을 준다.
- 연속법에 의한 존재. 방정식 $F(D^2u)=0$ 을 $\Delta u=0$ 과 잇는 방정식의 모임에서 해를 따라갈 때, 이 정리의 $C^{2,\alpha}$ 상한이 해들의 열에서 수렴하는 부분열을 준다. 그 결과로 [Dirichlet 문제](dirichlet-problem.md)의 고전해가 존재한다.[^2]
- [Monge–Ampère 방정식](monge-ampere-equation.md). $\log\det D^2u$ 는 양의 정부호 행렬에서 오목이므로, 해의 2계 도함수가 위아래로 유계인 영역에서는 방정식 $\log\det D^2u=\log f$ 가 이 정리의 가정을 만족하고 해가 $C^{2,\alpha}$ 다.

[^1]: Luis A. Caffarelli, Xavier Cabré, *Fully Nonlinear Elliptic Equations*, American Mathematical Society Colloquium Publications 43, 1995, 6 장.
[^2]: Lawrence C. Evans, "Classical solutions of fully nonlinear, convex, second-order elliptic equations", *Communications on Pure and Applied Mathematics* **35** (1982), 333–363. N. V. Krylov, "Boundedly inhomogeneous elliptic and parabolic equations", *Izvestiya Akademii Nauk SSSR, Seriya Matematicheskaya* **46** (1982), 487–523 이 같은 결론을 독립으로 얻었다.
[^3]: Nikolai Nadirashvili, Serge Vlăduţ, "Nonclassical solutions of fully nonlinear elliptic equations", *Geometric and Functional Analysis* **17** (2007), 1283–1296.

# 연관 문서

## 선수지식

- [Krylov–Safonov Harnack 부등식](krylov-safonov-harnack.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization #probability
