# Schottky 문제

# 개요

**Schottky 문제(Schottky problem)** 는 주편극 아벨 다양체(principally polarized abelian variety)가 어떤 곡선의 [Jacobi 다양체](jacobian-variety.md)인지 판정하는 문제다. 구멍이 넷인 [Riemann 곡면](riemann-surfaces.md)의 모양은 복소수 $9$ 개로 정해지는데, 그 곡면의 적분 주기를 적는 $4\times 4$ 대칭행렬에는 성분이 $10$ 개 있다. 그러므로 이런 대칭행렬의 대부분은 어느 곡면에서도 오지 않는다.

Schottky 문제는 행렬의 성분이나 theta 함수의 성질로 쓴 시험을 찾아, 주어진 행렬이 곡면에서 왔는지를 그 시험으로 가린다.

# 직관

차원 $1$ 에서는 이 문제가 생기지 않는다. 상반평면의 수 $\tau$ 하나가 격자 $\mathbb Z+\mathbb Z\tau$ 를 주고, 몫 $\mathbb C/(\mathbb Z+\mathbb Z\tau)$ 는 [타원곡선](elliptic-curves.md)이며 그 Jacobi 다양체가 자기 자신이다. 모든 $\tau$ 가 곡선에서 온다.

종수 $g$ 의 곡면에서는 정칙 미분 $g$ 개를 순환 $2g$ 개 위에서 적분해 $g\times g$ 대칭행렬 $\tau$ 를 얻는다. 곡면을 고르는 수는 $3g-3$ 개이고([곡선의 모듈라이 공간](moduli-of-curves.md)의 차원), 행렬을 고르는 수는 $g(g+1)/2$ 개다([Siegel 모듈라이 다양체](siegel-modular-variety.md)의 차원).

| 종수 | 곡면의 수 | 행렬의 수 | 차이 |
| ---- | --------- | --------- | ---- |
| $2$  | $3$       | $3$       | $0$  |
| $3$  | $6$       | $6$       | $0$  |
| $4$  | $9$       | $10$      | $1$  |
| $5$  | $12$      | $15$      | $3$  |

종수 $4$ 에서 곡면에서 오는 행렬은 $10$ 개의 수 사이의 방정식 하나로 묶인다. 같은 곡면이라도 순환의 기저를 바꾸면 행렬이 바뀌므로, 그 방정식은 기저 변환에 따라 정해진 꼴로만 달라지는 함수여야 한다. Schottky 는 1888 년에 그런 함수를 theta 상수로 적었다[^1].

# 정의

## 주기 행렬

$X$ 를 종수 $g$ 의 콤팩트 Riemann 곡면이라 한다. $H_1(X,\mathbb Z)$ 의 기저 $a_1,\dots,a_g,b_1,\dots,b_g$ 를 교차수가 $a_i\cdot b_j=\delta_{ij}$, $a_i\cdot a_j=b_i\cdot b_j=0$ 이 되게 고르고, 정칙 $1$ 형식의 기저 $\omega_1,\dots,\omega_g$ 를 $\oint_{a_i}\omega_j=\delta_{ij}$ 가 되게 고른다. 이때 다음 행렬을 $X$ 의 정규화된 주기 행렬이라 한다.

$$
\tau_{ij}=\oint_{b_i}\omega_j
$$

Riemann 쌍선형 관계(Riemann bilinear relations)에 따라 $\tau$ 는 대칭이고 허수부가 양정부호이므로 Siegel 상반공간 $\mathbb H_g$ 의 원소다. 기저를 바꾸면 $\tau$ 는 $\mathrm{Sp}\_{2g}(\mathbb Z)$ 의 작용으로 바뀌고, $J(X)=\mathbb C^g/(\mathbb Z^g+\tau\mathbb Z^g)$ 의 주편극을 갖춘 동형류는 $\mathcal A_g$ 의 한 점이다.

## Jacobi 궤적

Torelli 사상 $t:\mathcal M_g\to\mathcal A_g$ 는 곡선 $X$ 를 주기 행렬의 류로 보낸다. 그 상 $\mathcal J_g=t(\mathcal M_g)$ 를 **Jacobi 궤적(Jacobian locus)** 이라 하고, $\mathcal A_g$ 안에서의 닫힘을 $\overline{\mathcal J}\_g$ 로 적는다. Schottky 문제는 $\overline{\mathcal J}\_g$ 를 $\mathcal A_g$ 안에서 정의하는 방정식을 찾거나, 주편극 아벨 다양체의 성질로 $\mathcal J_g$ 의 점을 가려내는 문제다.

닫힘에는 곡선의 Jacobi 다양체가 아닌 점도 들어 있다. 다음 대각행렬은 두 타원곡선의 곱 $E_1\times E_2$ 에 곱 편극을 준 것이다.

$$
\tau=\begin{pmatrix}\tau_1&0\cr 0&\tau_2\end{pmatrix}\in\mathbb H_2
$$

매끄러운 곡선의 Jacobi 다양체는 두 아벨 다양체의 곱으로 갈라지지 않으므로 이 점은 $\mathcal J_2$ 에 속하지 않는다. 종수 $2$ 곡선이 두 타원곡선을 한 점에서 붙인 곡선으로 퇴화하면 주기 행렬이 이 대각행렬로 수렴하므로, 이 점은 $\overline{\mathcal J}\_2$ 에 속한다.

## theta 함수와 theta divisor

$\tau\in\mathbb H_g$ 에 대해 Riemann theta 함수(Riemann theta function)는 다음과 같다.

$$
\theta(z,\tau)=\sum_{n\in\mathbb Z^g}\exp\bigl(\pi i\thinspace n^{\mathsf T}\tau n+2\pi i\thinspace n^{\mathsf T}z\bigr),\qquad z\in\mathbb C^g
$$

$z$ 를 $\mathbb Z^g$ 의 원소만큼 옮기면 $\theta$ 는 그대로이고 $\tau\mathbb Z^g$ 의 원소만큼 옮기면 영이 아닌 지수함수가 곱해지므로, 영점 집합은 몫 $A=\mathbb C^g/(\mathbb Z^g+\tau\mathbb Z^g)$ 위에서 정해진다. 이 영점 집합 $\Theta\subset A$ 를 **theta divisor** 라 하고, $\Theta$ 의 특이점 집합을 $\mathrm{Sing}\thinspace\Theta$ 로 적는다. $\Theta$ 의 선다발이 $A$ 의 주편극을 준다.

# 성질

## 종수 3 이하

$g\le 3$ 이면 $\overline{\mathcal J}\_g=\mathcal A_g$ 다.

증명의 요지. $g=1$ 은 직관 절에서 보았다. $g=2,3$ 이면 Torelli 사상이 단사이므로 상의 닫힘은 차원 $3g-3$ 의 기약 닫힌 부분다양체다. $\mathcal A_g$ 는 연결된 $\mathbb H_g$ 의 몫이라 기약이고 차원이 $g(g+1)/2=3g-3$ 이므로 둘이 같다.

## 종수 4 의 Schottky–Igusa 형식

$g=4$ 에서 $\overline{\mathcal J}\_4$ 는 $\mathcal A_4$ 의 기약 초곡면이고, 무게 $8$ 의 [Siegel 모듈러 형식](siegel-modular-forms.md) $J$ 하나의 영점 집합과 같다[^2]. 이 $J$ 를 Schottky–Igusa 형식(Schottky–Igusa form)이라 한다.

$J$ 는 격자의 theta 급수로 적힌다. 짝 유니모듈러 격자(even unimodular lattice) $L\subset\mathbb R^n$ 의 종수 $g$ theta 급수는 다음과 같다.

$$
\Theta^{(g)}\_L(\tau)=\sum_{v_1,\dots,v_g\in L}\exp\Bigl(\pi i\sum_{i,j=1}^{g}(v_i\cdot v_j)\thinspace\tau_{ij}\Bigr)
$$

$g=1$ 이면 [theta 급수](theta-series.md)의 $\Theta_L$ 이고, $\Theta^{(g)}\_L$ 은 무게 $n/2$ 의 Siegel 모듈러 형식이다. $16$ 차원의 짝 유니모듈러 격자는 $E_8\oplus E_8$ 과 $D_{16}^+$ 둘이다. 두 격자의 theta 급수는 $g\le 3$ 에서 같고 $g=4$ 에서 처음 달라지며, 그 차가 $J$ 의 영이 아닌 상수배다[^3].

$$
J=c\thinspace\bigl(\Theta^{(4)}\_{E_8\oplus E_8}-\Theta^{(4)}\_{D_{16}^+}\bigr),\qquad c\ne 0
$$

## Andreotti–Mayer 궤적

$X$ 가 종수 $g\ge 4$ 의 곡선이면 $J(X)$ 의 theta divisor 는 곡선 위 차수 $g-1$ 의 유효 divisor 류들이 이루는 자취의 평행이동이다. [Riemann 특이점 정리](riemann-singularity-theorem.md)에 따르면 그 류에서 $\Theta$ 의 중복도는 대응하는 선다발의 전역 단면 공간의 차원과 같다. 이로부터 다음이 나온다.

$$
\dim\mathrm{Sing}\thinspace\Theta=\begin{cases}g-4 & X\text{ 가 초타원곡선이 아닐 때}\cr g-3 & X\text{ 가 초타원곡선일 때}\end{cases}
$$

일반적인 주편극 아벨 다양체에서는 $\mathrm{Sing}\thinspace\Theta$ 가 공집합이다. 그래서 theta divisor 의 특이점이 Jacobi 다양체를 가르는 시험의 후보가 된다.

$N_k=\lbrace(A,\Theta)\in\mathcal A_g:\dim\mathrm{Sing}\thinspace\Theta\ge k\rbrace$ 를 Andreotti–Mayer 궤적(Andreotti–Mayer locus)이라 한다. Andreotti–Mayer 정리에 따르면 $\overline{\mathcal J}\_g$ 는 $N_{g-4}$ 의 기약 성분이다[^4]. 증명은 $\theta$ 가 만족하는 열 방정식(heat equation)으로 $\Theta$ 의 특이점 조건을 $\tau$ 에 대한 조건으로 옮긴다.

$N_{g-4}$ 에는 다른 성분도 있다. $g=4$ 이면 $N_0$ 은 $\overline{\mathcal J}\_4$ 와 theta-null 인자(theta-null divisor), 곧 $\Theta$ 가 짝인 $2$ 등분점에서 특이한 주편극 아벨 다양체의 자취, 두 성분의 합집합이다[^5]. 이 분해는 Beauville 이 [Prym 다양체](prym-varieties.md)로 증명했다. 그러므로 Andreotti–Mayer 궤적은 $\overline{\mathcal J}\_g$ 를 성분으로 포함할 뿐 그것과 같지 않다.

## Shiota 정리

Shiota 정리(Shiota's theorem). 곱으로 갈라지지 않는 주편극 아벨 다양체 $(A,\Theta)$ 가 곡선의 Jacobi 다양체일 필요충분조건은 벡터 $U\ne 0$, $V$, $W\in\mathbb C^g$ 와 상수 $c$ 가 있어, 모든 $z\in\mathbb C^g$ 에 대해 다음 함수가 [Kadomtsev–Petviashvili 방정식](kadomtsev-petviashvili-equation.md)을 만족하는 것이다[^6].

$$
u(x,y,t)=2\thinspace\partial_x^2\log\theta(Ux+Vy+Wt+z,\tau)+c
$$

Jacobi 다양체이면 이런 $U,V,W$ 가 있다는 방향은 Krichever 의 구성으로, 곡선 위의 한 점에서 정한 Baker–Akhiezer 함수(Baker–Akhiezer function)가 이 해를 준다. 반대 방향은 Novikov 가 추측했고 Shiota 가 증명했다.

## 삼중할선 정리

$\varepsilon\in\lbrace 0,1\rbrace^g$ 마다 이계 theta 함수(second order theta function)를 다음과 같이 둔다.

$$
\Theta\lbrack\varepsilon\rbrack(z)=\sum_{n\in\mathbb Z^g}\exp\bigl(2\pi i\thinspace m^{\mathsf T}\tau m+4\pi i\thinspace m^{\mathsf T}z\bigr),\qquad m=n+\tfrac12\varepsilon
$$

이 $2^g$ 개의 함수는 $z$ 에 대해 짝함수이므로 $z\mapsto(\Theta\lbrack\varepsilon\rbrack(z))\_\varepsilon$ 은 $A/\pm 1$ 을 $\mathbb P^{2^g-1}$ 로 보낸다. 그 상을 Kummer 다양체(Kummer variety)라 하고, $g=2$ 이면 [Kummer 곡면](kummer-surfaces.md)이다. 세 점에서 Kummer 다양체와 만나는 직선을 삼중할선(trisecant line)이라 한다.

곡선의 Jacobi 다양체이면 곡선 위의 네 점마다 삼중할선이 하나씩 생긴다. 이것이 Fay 삼중할선 항등식(Fay's trisecant identity)이다. 역으로 곱으로 갈라지지 않는 주편극 아벨 다양체의 Kummer 다양체에 삼중할선이 하나라도 있으면 그 아벨 다양체는 Jacobi 다양체다[^7]. Welters 가 추측했고 Krichever 가 증명했다.

# 활용

- 적분가능계. [KP 위계](kp-hierarchy.md)(Kadomtsev–Petviashvili hierarchy)의 해 가운데 theta 함수로 적히는 것은 곡선의 Jacobi 다양체에서 온다. Shiota 정리에 따르면 곡선에서 오지 않는 주편극 아벨 다양체의 theta 함수로는 KP 방정식의 해를 만들 수 없다.
- 격자의 구별. [E₈ 격자](e8-lattice.md) 두 개의 직합과 $D_{16}^+$ 는 길이별 점의 개수가 같아 종수 $1$ 의 theta 급수로 구별되지 않는다. 종수 $4$ 의 theta 급수의 차가 Schottky–Igusa 형식이므로, 두 격자는 종수 $4$ 에서 처음 구별되고 그 차가 Jacobi 궤적에서 $0$ 이다.

[^1]: F. Schottky, "Zur Theorie der Abelschen Functionen von vier Variabeln", Journal für die reine und angewandte Mathematik **102** (1888), 304–352.

[^2]: J. Igusa, "On the Irreducibility of Schottky's Divisor", Journal of the Faculty of Science, University of Tokyo **28** (1981), 531–545.

[^3]: J. Igusa, "Schottky's Invariant and Quadratic Forms", E. B. Christoffel International Symposium, Birkhäuser (1981), 352–362.

[^4]: A. Andreotti and A. L. Mayer, "On Period Relations for Abelian Integrals on Algebraic Curves", Annali della Scuola Normale Superiore di Pisa **21** (1967), 189–238.

[^5]: A. Beauville, "Prym Varieties and the Schottky Problem", Inventiones Mathematicae **41** (1977), 149–196.

[^6]: T. Shiota, "Characterization of Jacobian Varieties in Terms of Soliton Equations", Inventiones Mathematicae **83** (1986), 333–382.

[^7]: I. Krichever, "Characterizing Jacobians via Trisecants of the Kummer Variety", Annals of Mathematics **172** (2010), 485–516.

# 연관 문서

## 선수지식

- [Riemann 특이점 정리](riemann-singularity-theorem.md)
- [곡선의 모듈라이 공간](moduli-of-curves.md)
- [Siegel 모듈라이 다양체](siegel-modular-variety.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #number_theory #algebra
