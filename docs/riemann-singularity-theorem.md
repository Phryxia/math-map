# Riemann 특이점 정리

# 개요

**Riemann 특이점 정리(Riemann singularity theorem)** 는 곡선의 Jacobi 다양체 안에 놓인 theta divisor 가 어느 점에서 몇 겹으로 접히는지를 곡선 위 함수의 개수로 세는 정리다. 종수 $3$ 의 곡선 $y^2=x^8-1$ 에서 $x$ 값이 같은 두 점의 쌍 $(x,\pm y)$ 를 모으면 직선 하나만큼의 쌍이 생기는데, 이 쌍들은 Jacobi 다양체의 한 점으로 모두 겹쳐 그 점에서 theta divisor 가 뾰족해진다.

그 점의 중복도는 그 쌍에서만 극을 갖는 유리형함수 공간의 차원과 같다. 그래서 theta divisor 의 특이점만 보고도 곡선 위에 특별한 함수가 있는지 알 수 있다.

# 직관

종수 $3$ 의 곡선 $X:y^2=x^8-1$ 에서 두 점의 합 $D=P+Q$ 를 생각한다. [Jacobi 다양체](jacobian-variety.md)의 Abel–Jacobi 사상은 이런 합 전체, 곧 $2$ 차원 공간을 $3$ 차원 토러스 $J(X)$ 로 보내고, 상은 $J(X)$ 안의 곡면이다. Abel 정리에 따르면 두 합 $D$, $D'$ 가 같은 점으로 가는 것은 $D'-D$ 가 유리형함수의 영점과 극점의 차일 때뿐이다.

$P=(a,b)$ 와 $Q=(a,-b)$ 의 쌍은 함수 $x-a$ 의 영점이고, 그 극점은 무한원점 둘이다. 그러므로 $a$ 가 무엇이든 쌍 $(a,b)+(a,-b)$ 는 모두 같은 점으로 간다. $a$ 를 움직여 얻는 쌍 전체는 직선 하나만큼이고, 이 직선이 곡면의 한 점으로 줄어든다. 줄어든 점에서 곡면은 매끄럽지 않다.

이 직선의 크기는 $D=(a,b)+(a,-b)$ 에서만 극을 갖는 함수의 공간으로 잰다. 상수 $1$ 과 $1/(x-a)$ 가 그 공간을 생성하므로 차원은 $2$ 이고, 그 점에서 곡면은 두 겹이다.

# 정의

## Brill–Noether 자취

$X$ 를 종수 $g\ge 1$ 의 콤팩트 [Riemann 곡면](riemann-surfaces.md)이라 하고, 차수 $d$ 의 divisor 류 전체를 $\mathrm{Pic}^d(X)$ 로 적는다. 기준점을 하나 고르면 Abel–Jacobi 사상이 $\mathrm{Pic}^d(X)$ 와 $J(X)$ 를 동일시한다. $D$ 의 [Riemann–Roch 정리](riemann-roch.md) 공간의 차원 $\ell(D)$ 는 선형동치류에만 의존한다.

$$
W^r_d=\lbrace\lbrack D\rbrack\in\mathrm{Pic}^d(X):\ell(D)\ge r+1\rbrace,\qquad W_d=W^0_d
$$

$W^r_d$ 를 **Brill–Noether 자취(Brill–Noether locus)** 라 한다. $W_d$ 는 유효 divisor 의 류 전체이고 $d$ 개 점의 합들의 상이다. 직관 절의 곡선에서 $W_2$ 가 곡면이고, $W^1_2$ 는 $\lbrack(a,b)+(a,-b)\rbrack$ 한 점이다.

## 중복도

$\theta$ 를 Riemann theta 함수, $\Theta\subset J(X)$ 를 그 영점 집합인 theta divisor 라 한다. $u\in\Theta$ 에서 $\theta$ 를 Taylor 전개했을 때 $0$ 이 아닌 가장 낮은 차수의 항이 $m$ 차이면 $m$ 을 $u$ 에서 $\Theta$ 의 **중복도(multiplicity)** 라 하고 $\mathrm{mult}\_u\Theta$ 로 적는다. 그 $m$ 차 항이 $\mathbb C^g$ 에서 정의하는 원뿔을 $u$ 에서 $\Theta$ 의 **접원뿔(tangent cone)** 이라 한다. 중복도가 $2$ 이상인 점이 $\Theta$ 의 특이점이다.

# 성질

## Riemann theta divisor 정리

Riemann 정리(Riemann's theorem). $J(X)$ 의 어떤 점 $\kappa$ 가 있어 $\Theta=W_{g-1}+\kappa$ 다. 이 $\kappa$ 를 Riemann 상수(Riemann constant)라 한다.

$\kappa$ 는 기준점의 선택에 따라 바뀐다. 이 동일시로 $\Theta$ 의 점은 차수 $g-1$ 의 유효 divisor 류다.

## 특이점 정리

Riemann 특이점 정리. $\lbrack D\rbrack\in W_{g-1}$ 이면 다음이 성립한다.

$$
\mathrm{mult}\_{\lbrack D\rbrack+\kappa}\thinspace\Theta=\ell(D)
$$

따라서 $\mathrm{Sing}\thinspace\Theta=W^1_{g-1}+\kappa$ 다.

증명의 요지. Kempf 는 접원뿔을 직접 계산했다[^1]. $r=\ell(D)$ 라 하면 Riemann–Roch 정리와 $\deg D=g-1$ 로 $\ell(K-D)=\ell(D)=r$ 이다. $L(D)$ 의 기저 $s_1,\dots,s_r$ 과 $L(K-D)$ 에 대응하는 정칙 미분 $t_1,\dots,t_r$ 을 고르면 곱 $s_it_j$ 는 정칙 미분, 곧 $J(X)$ 의 접공간 위의 일차형식이다. 접원뿔은 $\det(s_it_j)=0$ 이고, 이 다항식의 차수가 $r$ 이므로 중복도가 $r$ 이다.

## 접원뿔과 정준곡선

접원뿔은 정준사상(canonical map) $X\to\mathbb P^{g-1}$ 의 상을 포함한다. 곡선 위의 점 $p$ 에서 행렬 $(s_i(p)t_j(p))$ 는 두 벡터의 바깥곱이므로 계수가 $1$ 이하이고 행렬식이 $0$ 이다.

## 특이점 집합의 차원

$g\ge 4$ 이면 다음이 성립한다.

$$
\dim\mathrm{Sing}\thinspace\Theta=\begin{cases}g-4 & X\text{ 가 초타원곡선이 아닐 때}\cr g-3 & X\text{ 가 초타원곡선일 때}\end{cases}
$$

초타원곡선이면 $W^1_{g-1}$ 은 차수 $2$ 함수의 극 divisor 류에 $W_{g-3}$ 을 더한 것이므로 차원이 $g-3$ 이다. 초타원곡선이 아니면 Martens 정리(Martens' theorem)가 $\dim W^1_{g-1}\le g-4$ 를 주고[^2], Brill–Noether 존재 정리(Brill–Noether existence theorem)가 $\dim W^1_{g-1}\ge g-4$ 를 준다.

## 작은 종수의 예

- $g=2$. $\Theta$ 는 $W_1$, 곧 곡선 자신의 상이고 특이점이 없다.
- $g=3$. [초타원곡선](hyperelliptic-curves.md)이면 $\Theta$ 의 특이점은 직관 절의 한 점이고 중복도는 $2$ 다. 초타원곡선이 아니면 차수 $2$ 의 함수가 없으므로 $\Theta$ 는 매끄럽다.
- $g=4$, 초타원곡선이 아닐 때. 정준곡선은 $\mathbb P^3$ 에서 이차곡면 $Q$ 와 삼차곡면의 교선이고, $Q$ 의 직선족 하나가 차수 $3$ 의 함수 하나를 준다. $Q$ 가 매끄러우면 직선족이 둘이므로 $\mathrm{Sing}\thinspace\Theta$ 는 두 점이고, $Q$ 가 원뿔이면 한 점이다. 각 점의 접원뿔은 정준곡선을 포함하는 이차곡면이므로 $Q$ 자신이다.

# 활용

- [Schottky 문제](schottky-problem.md). 일반적인 주편극 아벨 다양체에서는 theta divisor 가 매끄러우므로, 특이점 집합의 차원이 $g-4$ 라는 것이 Jacobi 다양체를 가르는 Andreotti–Mayer 궤적의 조건이 된다.
- 곡선의 복원. 종수 $4$ 에서 특이점의 접원뿔이 정준곡선을 담은 이차곡면이므로, theta divisor 만으로 정준곡선의 방정식 하나가 정해진다.
- 곡선 위의 함수. 차수 $g-1$ 이하의 함수가 있는지를 theta 함수의 편도함수가 $0$ 이 되는지로 판정한다. 직관 절의 곡선에서는 $\theta$ 와 그 일차 편도함수가 함께 $0$ 인 점이 있으므로 차수 $2$ 의 함수가 있다.

[^1]: G. Kempf, "On the Geometry of a Theorem of Riemann", Annals of Mathematics **98** (1973), 178–185.

[^2]: E. Arbarello, M. Cornalba, P. A. Griffiths and J. Harris, *Geometry of Algebraic Curves, Volume I*, Springer (1985), IV장. Martens 정리와 Brill–Noether 존재 정리가 이 장에 있다.

# 연관 문서

## 선수지식

- [Jacobi 다양체](jacobian-variety.md)
- [Riemann–Roch 정리](riemann-roch.md)

## 더 알아보기

- [Schottky 문제](schottky-problem.md)

#complex_analysis #algebra
