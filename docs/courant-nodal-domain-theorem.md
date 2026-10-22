# Courant 마디 영역 정리

# 개요

**Courant 마디 영역 정리(Courant nodal domain theorem)** 는 유계 영역에서 Dirichlet 경계조건의 [Laplace 연산자](laplace-operator.md)의 $k$ 번째 고유함수가 $0$ 이 아닌 곳이 많아야 $k$ 개의 연결 성분으로 나뉜다는 정리다. R. Courant 가 1923 년에 증명했다[^1]. Å. Pleijel 은 [Weyl 법칙](weyl-law.md)과 [Faber–Krahn 부등식](faber-krahn.md)을 써서, 평면 영역에서는 $k$ 가 클 때 성분의 개수가 $k$ 의 $0.692$ 배를 넘지 않음을 보였다[^2].

# 직관

길이 $\pi$ 의 양 끝을 고정한 줄에서 $k$ 번째 고유함수는 $\sin(kx)$ 이고, 줄 안에서 $k-1$ 번 $0$ 이 되어 $k$ 조각으로 나뉜다. 조각 수가 번호와 같다.

한 변이 $\pi$ 인 정사각형에서는 고유함수 $\sin(mx)\sin(ly)$ 가 직선 $x=\pi i/m$, $y=\pi j/l$ 에서 $0$ 이 되어 정사각형을 직사각형 $ml$ 개로 나눈다. 고윳값은 $\lambda=m^2+l^2$ 이고, 이 고윳값의 번호 $k$ 는 $\lambda$ 이하인 고윳값의 개수이므로 [Weyl 법칙](weyl-law.md)으로 $\pi\lambda/4$ 근처다. 한편 $ml\le(m^2+l^2)/2=\lambda/2$ 다. 그래서 $k$ 가 클 때 조각 수를 번호로 나눈 값은 대략 $(\lambda/2)/(\pi\lambda/4)=2/\pi\approx 0.64$ 이하다.

조각 하나만 놓고 보면 고유함수는 그 조각에서 경계값 $0$ 인 부호가 일정한 고유함수다. 그 조각의 가장 낮은 고윳값이 $\lambda$ 이므로 조각이 작을수록 $\lambda$ 가 커야 한다. 조각마다 넓이의 하한이 생기고, 하한과 조각 수의 곱이 정사각형의 넓이를 넘을 수 없다. 이 논법이 성질 절의 Pleijel 정리다.

# 정의

$\Omega\subset\mathbb R^n$ 을 유계인 연결 열린집합이라 하고, Dirichlet 고윳값을 $\lambda_1\lt\lambda_2\le\lambda_3\le\cdots$, 그 고유함수를 $\varphi_1,\varphi_2,\dots$ 라 한다. 고유함수 $\varphi$ 의 **마디 집합(nodal set)** 은 $\lbrace x\in\Omega:\varphi(x)=0\rbrace$ 이고, **마디 영역(nodal domain)** 은 $\Omega$ 에서 마디 집합을 뺀 열린집합의 연결 성분이다. 마디 영역의 개수를 $\nu(\varphi)$ 로 쓴다.

Courant 마디 영역 정리는 고윳값 $\lambda_k$ 의 모든 고유함수 $\varphi$ 에 대해

$$
\nu(\varphi)\le k
$$

라는 주장이다. 여기서 $k$ 는 $\lambda_{k-1}\lt\lambda_k$ 가 되도록 고른 가장 작은 번호다. 등호 $\nu(\varphi_k)=k$ 가 성립하는 고윳값을 **Courant 날카로운(Courant-sharp)** 고윳값이라 한다.

# 성질

## 마디 영역 위의 고유함수

$D$ 를 $\varphi$ 의 마디 영역이라 하면 $\varphi$ 를 $D$ 로 제한한 것은 $D$ 의 Dirichlet 고유함수이고 $D$ 에서 부호가 일정하다. 부호가 일정한 고유함수는 첫 고유함수뿐이므로 $\lambda_1(D)=\lambda_k(\Omega)$ 다. $\Omega$ 가 연결이면 $\lambda_1$ 은 단순하고 $\varphi_1$ 은 부호가 바뀌지 않으므로 $\nu(\varphi_1)=1$ 이다. $\varphi_2$ 는 $\varphi_1$ 과 직교하므로 부호가 바뀌고 마디 영역이 정확히 둘이다.

## Courant 정리의 증명

$\varphi$ 의 마디 영역이 $D_1,\dots,D_{k+1}$ 이상 있다고 하자. $u_i=\varphi\mathbf 1_{D_i}$ 는 $H^1_0(\Omega)$ 에 속하고 Rayleigh 몫이 모두 $\lambda_k$ 다. $u_1,\dots,u_k$ 는 서로 겹치지 않는 곳에서 $0$ 이 아니므로, 그 선형결합 $v$ 의 Rayleigh 몫도 $\lambda_k$ 다. $v\ne 0$ 을 $\varphi_1,\dots,\varphi_{k-1}$ 과 직교하게 고를 수 있고, [스펙트럼 정리](spectral-theorem.md)의 min–max 정리에서 이런 $v$ 는 $\lambda_k$ 의 고유함수다. 그런데 $v$ 는 열린집합 $D_{k+1}$ 에서 $0$ 이다. Aronszajn 의 유일 연속 정리(unique continuation theorem)는 열린집합에서 $0$ 인 고유함수가 연결 영역 전체에서 $0$ 이라고 하므로[^3] 모순이다.

## 일차원의 등호

$n=1$ 에서는 모든 고윳값이 Courant 날카롭다. [Sturm–Liouville 이론](sturm-liouville.md)의 Sturm 진동 정리(Sturm oscillation theorem)로 $k$ 번째 고유함수는 구간 안에서 정확히 $k-1$ 번 $0$ 이 된다.

## Pleijel 정리

$n=2$ 이면

$$
\limsup_{k\to\infty}\frac{\nu(\varphi_k)}{k}\le\frac{4}{j_{0,1}^2}\approx 0.692
$$

이다. $j_{0,1}$ 은 0 차 [Bessel 함수](bessel-functions.md)의 첫 영점이다. 이것이 Pleijel 정리(Pleijel's theorem)다[^2].

증명의 요지. $\varphi_k$ 의 마디 영역을 $D_1,\dots,D_\nu$ 라 하면 각각 $\lambda_1(D_i)=\lambda_k$ 다. Faber–Krahn 부등식으로 $\lambda_k\ge\pi j_{0,1}^2/\vert D_i\vert$ 이므로 $\vert D_i\vert\ge\pi j_{0,1}^2/\lambda_k$ 다. 이것을 $i$ 에 대해 더하면 $\nu\thinspace\pi j_{0,1}^2/\lambda_k\le\vert\Omega\vert$ 다. Weyl 법칙으로 $\lambda_k\sim 4\pi k/\vert\Omega\vert$ 이므로 $\nu/k$ 의 상극한이 $4/j_{0,1}^2$ 이하다.

$n$ 차원에서는 같은 증명으로 상한이 $(2\pi)^n/(\omega_n^2j_{n/2-1,1}^n)$ 이고, 모든 $n\ge 2$ 에서 $1$ 보다 작다[^4]. 그래서 $n\ge 2$ 에서는 Courant 날카로운 고윳값이 유한 개뿐이다.

# 활용

- [양자 혼돈](quantum-chaos.md)에서 고유함수의 마디 영역 개수는 고유함수의 분포를 재는 양 가운데 하나다. 혼돈적인 영역의 고유함수는 무작위 파동과 같은 마디 영역 개수를 가질 것이라는 Bogomolny–Schmit 추측(Bogomolny–Schmit conjecture)이 있다.
- [그래프 Laplacian](graph-laplacian.md)의 둘째 고유벡터인 Fiedler 벡터(Fiedler vector)의 부호로 정점을 둘로 가르는 것은 $\varphi_2$ 의 두 마디 영역의 이산판이다. 그래프에서도 $k$ 번째 고유벡터의 부호 영역 수에 대한 Courant 꼴의 상한이 성립한다[^5].

[^1]: R. Courant, "Ein allgemeiner Satz zur Theorie der Eigenfunktionen selbstadjungierter Differentialausdrücke", Nachr. Ges. Wiss. Göttingen, Math.-Phys. Kl. (1923), 81–84.
[^2]: Å. Pleijel, "Remarks on Courant's nodal line theorem", Comm. Pure Appl. Math. 9 (1956), 543–550.
[^3]: N. Aronszajn, "A unique continuation theorem for solutions of elliptic partial differential equations or inequalities of second order", J. Math. Pures Appl. 36 (1957), 235–249.
[^4]: P. Bérard, D. Meyer, "Inégalités isopérimétriques et applications", Ann. Sci. Éc. Norm. Supér. 15 (1982), 513–541.
[^5]: E. B. Davies, G. M. L. Gladwell, J. Leydold, P. F. Stadler, "Discrete nodal domain theorems", Linear Algebra Appl. 336 (2001), 51–60.

# 연관 문서

## 선수지식

- [Weyl 법칙](weyl-law.md)
- [Faber–Krahn 부등식](faber-krahn.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #theorem
