# Brill–Noether 이론

# 개요

**Brill–Noether 이론(Brill–Noether theory)** 은 종수 $g$ 의 곡선 위에 극이 $d$ 개 이하인 유리형함수, 더 넓게는 차수 $d$ 로 $r$ 차원 사영공간에 가는 사상이 있는지를 정하는 이론이다. 평면 사차곡선은 종수가 $3$ 인데, 그 위에 극이 둘뿐인 함수가 있는지, 셋인 함수는 있는지를 물을 수 있다.

이 물음은 정칙 미분의 값을 늘어놓은 행렬의 계수 조건으로 바뀌고, 조건의 개수를 세면 수 $\rho=g-(r+1)(g-d+r)$ 이 나온다. 일반적인 곡선에서는 $\rho\ge 0$ 일 때만 그런 함수가 있고, 그 모임의 차원이 $\rho$ 다.

# 직관

매끄러운 평면 사차곡선 $X$ 를 잡는다. 종수는 $3$ 이고, 정칙 미분은 일차식 $ax+by+cz$ 와 일대일로 대응한다. 미분의 영점은 그 일차식이 정하는 직선과 $X$ 의 교점 넷이다.

두 점 $P$, $Q$ 에서만 극을 갖는 함수의 공간의 차원 $\ell(P+Q)$ 를 [Riemann–Roch 정리](riemann-roch.md)로 구하면 다음이 나온다.

$$
\ell(P+Q)=2-3+1+\ell(K-P-Q)
$$

$\ell(K-P-Q)$ 는 $P$, $Q$ 에서 $0$ 이 되는 정칙 미분의 공간의 차원이고, 그 미분은 $P$ 와 $Q$ 를 지나는 직선의 일차식이다. 그런 직선은 하나뿐이므로 $\ell(K-P-Q)=1$, $\ell(P+Q)=1$ 이고, 상수함수뿐이다. $X$ 위에는 극이 둘인 함수가 없다.

극이 셋이면 다음과 같다.

$$
\ell(P+Q+R)=3-3+1+\ell(K-P-Q-R)
$$

$P$, $Q$, $R$ 이 한 직선 위에 있으면 그 직선 하나가 세 점을 지나므로 $\ell=2$ 이고, 상수가 아닌 함수가 있다. 그 직선이 $X$ 와 만나는 넷째 점을 $S$ 라 하면, 이 함수는 $S$ 를 지나는 직선마다 나머지 세 교점을 하나의 값으로 보내는 함수다. $S$ 는 $X$ 위를 움직이므로 극이 셋인 함수의 모임은 $1$ 차원이다.

이 계산은 일반적인 꼴로 적힌다. 정칙 미분의 기저 $g$ 개를 점 $d$ 개에서 계산한 $g\times d$ 행렬의 계수를 $k$ 라 하면 $\ell(K-D)=g-k$ 이다. $\ell(D)\ge r+1$ 이려면 $k\le d-r$ 이어야 하고, 이 조건은 $r(g-d+r)$ 개의 식이다.

점 $d$ 개를 고르는 자유도는 $d$ 다. 같은 함수 공간을 주는 점 배치는 $r$ 차원씩 모여 있으므로, 자유도에서 식의 개수와 $r$ 을 빼면 다음이 남는다.

$$
d-r-r(g-d+r)=g-(r+1)(g-d+r)
$$

$g=3$ 에서 $d=2$, $r=1$ 이면 이 값이 $-1$ 이고, $d=3$, $r=1$ 이면 $1$ 이다. 앞의 두 계산과 맞는다.

# 정의

$X$ 를 종수 $g$ 의 콤팩트 [Riemann 곡면](riemann-surfaces.md)이라 하고, [Riemann 특이점 정리](riemann-singularity-theorem.md) 문서의 Brill–Noether 자취를 쓴다.

$$
W^r_d(X)=\lbrace\lbrack D\rbrack\in\mathrm{Pic}^d(X):\ell(D)\ge r+1\rbrace
$$

$W^r_d(X)$ 가 비어 있지 않으면 $X$ 가 $g^r_d$ 를 갖는다고 한다. $r=1$ 이면 극이 $d$ 개 이하인 상수가 아닌 함수가 있다는 뜻이다. 직관 절의 사차곡선은 $g^1_3$ 을 갖고 $g^1_2$ 를 갖지 않는다.

**Brill–Noether 수(Brill–Noether number)** 는 다음 정수다.

$$
\rho(g,r,d)=g-(r+1)(g-d+r)
$$

직관 절의 셈에서 $\rho$ 는 $W^r_d$ 가 가질 것으로 예상되는 차원이다. $\rho(3,1,2)=-1$, $\rho(3,1,3)=1$ 이다.

상수가 아닌 함수의 극의 개수 가운데 가장 작은 것을 $X$ 의 **gonality** 라 한다. 직관 절의 사차곡선의 gonality 는 $3$ 이다.

곡선의 성질이 [곡선의 모듈라이 공간](moduli-of-curves.md) $M_g$ 에서 진부분 닫힌 집합 밖의 모든 점에서 성립하면 **일반 곡선(general curve)** 에서 성립한다고 한다.

# 성질

## 존재 정리

Brill–Noether 존재 정리(Brill–Noether existence theorem). $\rho\ge 0$ 이면 모든 종수 $g$ 곡선에서 $W^r_d$ 가 비어 있지 않고, 그 성분의 차원은 모두 $\rho$ 이상이다[^1].

증명의 요지. $\mathrm{Pic}^d$ 위에서 $W^r_d$ 는 두 벡터다발 사이 사상의 계수가 떨어지는 자리로 적힌다. 그 여차원은 많아야 $(r+1)(g-d+r)$ 이다. Porteous 공식(Porteous formula)으로 그 자리의 코호몰로지 류를 계산하면 다음이 나온다.

$$
\lbrack W^r_d\rbrack=\prod_{i=0}^{r}\frac{i!}{(g-d+r+i)!}\cdot\theta^{(r+1)(g-d+r)}
$$

$\theta$ 는 theta divisor 의 류다. $\rho\ge 0$ 이면 지수가 $g$ 이하이고 $\theta$ 의 거듭제곱이 $0$ 이 아니므로 이 류가 $0$ 이 아니고, $W^r_d$ 는 비어 있지 않다.

## Griffiths–Harris 정리

Brill–Noether 정리(Brill–Noether theorem). 일반 곡선에서 $\rho\lt 0$ 이면 $W^r_d$ 는 비어 있고, $\rho\ge 0$ 이면 $W^r_d$ 의 차원은 정확히 $\rho$ 다[^2].

Griffiths 와 Harris 는 곡선을 유리곡선 위에 첨점 $g$ 개를 둔 곡선으로 퇴화시켜 증명했다. Eisenbud 와 Harris 는 같은 결과를 타원곡선 $g$ 개를 사슬로 이은 곡선으로 퇴화시키는 극한 선형계(limit linear series)로 다시 증명했다.

$\rho=0$ 이면 일반 곡선의 $W^r_d$ 는 점 몇 개이고, 그 개수는 존재 정리의 류에 $\theta^g=g!$ 을 넣은 값이다.

$$
\char35{}W^r_d=g!\prod_{i=0}^{r}\frac{i!}{(g-d+r+i)!}
$$

$g=4$, $r=1$, $d=3$ 이면 $\rho=0$ 이고 개수는 $24\cdot\frac12\cdot\frac16=2$ 다. 종수 $4$ 의 정준곡선이 놓인 이차곡면의 두 직선족이 이 둘이다.

## Gieseker–Petri 정리

선다발 $L$ 에 대해 단면의 곱이 주는 사상을 **Petri 사상(Petri map)** 이라 한다.

$$
\mu_0:H^0(L)\otimes H^0(K_X\otimes L^{-1})\to H^0(K_X)
$$

Gieseker–Petri 정리(Gieseker–Petri theorem). 일반 곡선에서는 모든 선다발 $L$ 의 Petri 사상이 단사다[^3]. 따름정리로 $W^r_d\setminus W^{r+1}\_d$ 는 매끄럽고 차원이 $\rho$ 다. 그 점에서 $W^r_d$ 의 접공간은 $\mu_0$ 의 상에 수직인 공간이고, $\mu_0$ 가 단사이면 상의 차원이 $(r+1)(g-d+r)$ 이라 접공간의 차원이 $\rho$ 가 된다.

## 연결성

Fulton–Lazarsfeld 정리. $\rho\ge 1$ 이면 모든 곡선에서 $W^r_d$ 는 연결되어 있다[^4]. Gieseker–Petri 정리와 함께 쓰면 일반 곡선에서 $\rho\ge 1$ 인 $W^r_d$ 는 기약이다.

## 일반 곡선의 gonality

$r=1$ 이면 $\rho=2d-g-2$ 이므로 $\rho\ge 0$ 은 $d\ge(g+2)/2$ 와 같다. 따라서 일반 곡선의 gonality 는 $\lfloor(g+3)/2\rfloor$ 다. $g=3$ 이면 $3$ 이고 직관 절과 맞는다. [초타원곡선](hyperelliptic-curves.md)은 gonality 가 $2$ 이므로 $g\ge 3$ 이면 일반 곡선이 아니다.

## 평면곡선

매끄러운 평면 $e$ 차 곡선은 종수가 $(e-1)(e-2)/2$ 이고 직선 단면이 $g^2_e$ 를 준다. $e=4$ 이면 $\rho(3,2,4)=3-3\cdot 1=0$ 이므로 일반 종수 $3$ 곡선은 평면 사차곡선이다. $e=5$ 이면 $\rho(6,2,5)=6-3\cdot 3=-3$ 이므로 매끄러운 평면 오차곡선은 일반 종수 $6$ 곡선이 아니다.

## Martens 정리

Martens 정리(Martens' theorem). $g\ge 3$, $2\le d\le g-1$, $0\lt 2r\le d$ 이면 $\dim W^r_d\le d-2r$ 이고, 등호는 $X$ 가 초타원곡선일 때뿐이다[^5].

존재 정리는 아래쪽 한계를, Martens 정리는 모든 곡선에서 위쪽 한계를 준다. $r=1$, $d=g-1$ 이면 $\rho=g-4$ 이고, 초타원곡선이 아니면 Martens 정리가 $\dim W^1_{g-1}\le g-4$ 를 주므로 두 한계가 만난다. 이것이 Riemann 특이점 정리 문서의 $\dim\mathrm{Sing}\thinspace\Theta=g-4$ 다.

# 활용

- theta divisor 의 특이점. Riemann 특이점 정리로 $\mathrm{Sing}\thinspace\Theta$ 가 $W^1_{g-1}$ 의 평행이동이므로, 그 차원을 존재 정리와 Martens 정리로 정한다. [Schottky 문제](schottky-problem.md)의 Andreotti–Mayer 궤적이 이 차원을 쓴다.
- 곡선의 모듈라이. $\rho=-1$ 이면 $g^r_d$ 를 갖는 곡선은 $M_g$ 의 여차원 $1$ 집합을 이룬다. Harris, Mumford, Eisenbud 는 이 Brill–Noether 인자(Brill–Noether divisor)의 류를 계산해 $g\ge 24$ 이면 $M_g$ 가 일반형임을 보였다[^6].
- 사영 매장. 일반 곡선이 $\mathbb P^r$ 에 차수 $d$ 로 들어가는지를 $\rho(g,r,d)\ge 0$ 으로 판정한다. 평면곡선 절의 오차곡선이 그 예다.

[^1]: S. Kleiman and D. Laksov, "On the Existence of Special Divisors", American Journal of Mathematics **94** (1972), 431–436. 같은 시기에 G. Kempf 가 독립적으로 증명했다.

[^2]: P. Griffiths and J. Harris, "On the Variety of Special Linear Systems on a General Algebraic Curve", Duke Mathematical Journal **47** (1980), 233–272.

[^3]: D. Gieseker, "Stable Curves and Special Divisors: Petri's Conjecture", Inventiones Mathematicae **66** (1982), 251–275.

[^4]: W. Fulton and R. Lazarsfeld, "On the Connectedness of Degeneracy Loci and Special Divisors", Acta Mathematica **146** (1981), 271–283.

[^5]: E. Arbarello, M. Cornalba, P. A. Griffiths and J. Harris, *Geometry of Algebraic Curves, Volume I*, Springer (1985), IV장과 V장. Martens 정리와 Porteous 공식에 의한 류의 계산이 여기 있다.

[^6]: D. Eisenbud and J. Harris, "The Kodaira Dimension of the Moduli Space of Curves of Genus ≥ 23", Inventiones Mathematicae **90** (1987), 359–387.

# 연관 문서

## 선수지식

- [Riemann 특이점 정리](riemann-singularity-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra
