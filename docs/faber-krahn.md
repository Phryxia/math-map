# Faber–Krahn 부등식

# 개요

**Faber–Krahn 부등식(Faber–Krahn inequality)** 은 부피가 같은 유계 영역 가운데 Dirichlet 경계조건의 [Laplace 연산자](laplace-operator.md) 첫 고윳값이 가장 작은 것이 공이라는 부등식이다. $\Omega^\ast$ 를 $\Omega$ 와 부피가 같은 공이라 하면

$$
\lambda_1(\Omega)\ge\lambda_1(\Omega^\ast)
$$

이다. 경계를 고정한 막 가운데 넓이가 같으면 원형 막의 기본음이 가장 낮다는 주장을 Rayleigh 가 1877 년에 내놓았고[^1], G. Faber 와 E. Krahn 이 1923 년과 1925 년에 따로 증명했다[^2][^3].

# 직관

한 변이 $\pi$ 인 정사각형 막의 가장 낮은 고윳값은 고유함수 $\sin x\sin y$ 의 고윳값 $2$ 다. 넓이가 같은 $\pi^2$ 인 원판은 반지름이 $\sqrt\pi$ 이고, 첫 고유함수는 $J_0(j_{0,1}r/\sqrt\pi)$ 다. $J_0$ 은 0 차 [Bessel 함수](bessel-functions.md)이고 $j_{0,1}\approx 2.405$ 는 그 첫 영점이다. 고윳값은 $j_{0,1}^2/\pi\approx 1.84$ 로 정사각형의 $2$ 보다 작다.

모든 모양과 비교하려면 고유함수를 적지 않고 고윳값을 재는 방법이 있어야 한다. 경계에서 $0$ 인 함수 $u$ 에 대해 $\int\Vert\nabla u\Vert^2$ 를 $\int u^2$ 으로 나눈 값의 최솟값이 첫 고윳값이다. 그래서 영역 $\Omega$ 의 첫 고유함수 $u$ 에서 출발해 원판 위의 함수를 하나 만들고, 그 함수의 비가 $u$ 의 비보다 작음을 보이면 된다.

$u$ 의 높이 $t$ 마다 $u\gt t$ 인 영역을 같은 넓이의 원판으로 바꾼다. 원판들을 같은 중심에 포개면 원판 위에 중심에서 멀수록 작아지는 함수가 생긴다. 높이마다 넓이가 같으므로 $\int u^2$ 은 바뀌지 않는다. 기울기는 높이 $t$ 의 등고선 길이와 관계가 있고, [등주부등식](isoperimetric-inequality.md)으로 넓이가 같으면 원의 둘레가 가장 짧으므로 $\int\Vert\nabla u\Vert^2$ 는 줄어든다.

# 정의

## 첫 고윳값

유계 열린집합 $\Omega\subset\mathbb R^n$ 의 Dirichlet 첫 고윳값은 [Sobolev 공간](sobolev-spaces.md) $H^1_0(\Omega)$ 위의 Rayleigh 몫(Rayleigh quotient)의 최솟값이다.

$$
\lambda_1(\Omega)=\min_{u\in H^1_0(\Omega)\setminus\lbrace 0\rbrace}\frac{\int_\Omega\Vert\nabla u\Vert^2\thinspace dx}{\int_\Omega u^2\thinspace dx}
$$

최솟값을 주는 $u$ 가 첫 고유함수이고, $\vert u\vert$ 도 같은 값을 주므로 $u\ge 0$ 으로 잡을 수 있다. 고윳값 전체의 분포는 [Weyl 법칙](weyl-law.md)의 대상이다.

## 대칭 감소 재배열

가측집합 $A$ 의 **대칭화(symmetrization)** $A^\ast$ 는 원점을 중심으로 하고 부피가 $\vert A\vert$ 인 열린 공이다. 무한원에서 $0$ 으로 가는 함수 $u\ge 0$ 의 **대칭 감소 재배열(symmetric decreasing rearrangement)** 은

$$
u^\ast(x)=\int_0^\infty\mathbf 1_{\lbrace u\gt t\rbrace^\ast}(x)\thinspace dt
$$

이다. $u^\ast$ 는 $\Vert x\Vert$ 만의 함수이고 $\Vert x\Vert$ 가 커지면 줄어들며, 모든 $t$ 에서 $\lbrace u^\ast\gt t\rbrace=\lbrace u\gt t\rbrace^\ast$ 다. 이 재배열을 Schwarz 대칭화(Schwarz symmetrization)라고도 한다.

## Faber–Krahn 부등식

부피가 $\vert\Omega\vert$ 인 공의 반지름은 $(\vert\Omega\vert/\omega_n)^{1/n}$ 이고 첫 고윳값은 $j_{n/2-1,1}^2$ 를 반지름의 제곱으로 나눈 값이다. $j_{\nu,1}$ 은 Bessel 함수 $J_\nu$ 의 첫 영점이다. 그래서 Faber–Krahn 부등식은

$$
\lambda_1(\Omega)\ge j_{n/2-1,1}^2\Bigl(\frac{\omega_n}{\vert\Omega\vert}\Bigr)^{2/n}
$$

으로 쓸 수 있다. 매끄러운 경계의 영역에서 등호는 $\Omega$ 가 공일 때만 성립한다.

# 성질

## 재배열이 보존하는 양

$u$ 와 $u^\ast$ 는 모든 $t$ 에서 $\vert\lbrace u\gt t\rbrace\vert=\vert\lbrace u^\ast\gt t\rbrace\vert$ 를 만족한다. 적분은 수준집합의 부피로 정해지므로 모든 $p\ge 1$ 에서 $\Vert u^\ast\Vert\_{L^p}=\Vert u\Vert\_{L^p}$ 다. $u\in H^1_0(\Omega)$ 이고 $u\ge 0$ 이면 $u^\ast\in H^1_0(\Omega^\ast)$ 다.

## Pólya–Szegő 부등식

$u\in H^1_0(\Omega)$, $u\ge 0$ 이면

$$
\int_{\Omega^\ast}\Vert\nabla u^\ast\Vert^2\thinspace dx\le\int_\Omega\Vert\nabla u\Vert^2\thinspace dx
$$

이다. 이것이 Pólya–Szegő 부등식(Pólya–Szegő inequality)이다[^4].

증명의 요지. $\mu(t)=\vert\lbrace u\gt t\rbrace\vert$, $P(t)$ 를 등위면 $\lbrace u=t\rbrace$ 의 $(n-1)$ 차원 넓이라 한다. [면적공식](area-formula.md)의 여면적공식으로

$$
\int\Vert\nabla u\Vert^2dx=\int_0^\infty\int_{\lbrace u=t\rbrace}\Vert\nabla u\Vert\thinspace d\mathcal H^{n-1}dt,\qquad-\mu^\prime(t)=\int_{\lbrace u=t\rbrace}\frac{d\mathcal H^{n-1}}{\Vert\nabla u\Vert}
$$

이다. [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $P(t)^2\le\int_{\lbrace u=t\rbrace}\Vert\nabla u\Vert\cdot(-\mu^\prime(t))$ 이므로 안쪽 적분은 $P(t)^2/(-\mu^\prime(t))$ 이상이다. $u^\ast$ 는 등위면 위에서 $\Vert\nabla u^\ast\Vert$ 가 상수라서 이 부등식이 등식이고, $\mu$ 는 같으며, 등주부등식으로 $P^\ast(t)\le P(t)$ 다.

## Faber–Krahn 부등식의 증명

$u\ge 0$ 을 $\Omega$ 의 첫 고유함수라 한다. $u^\ast\in H^1_0(\Omega^\ast)$ 이고, 재배열이 분모를 보존하며 Pólya–Szegő 부등식이 분자를 줄이므로

$$
\lambda_1(\Omega^\ast)\le\frac{\int\Vert\nabla u^\ast\Vert^2}{\int(u^\ast)^2}\le\frac{\int\Vert\nabla u\Vert^2}{\int u^2}=\lambda_1(\Omega)
$$

이다.

## 둘째 고윳값

부피가 같은 영역 가운데 $\lambda_2$ 를 가장 작게 하는 것은 부피가 절반인 같은 공 두 개의 합집합이다. 이것이 Krahn–Szegő 정리(Krahn–Szegő theorem)이고, 식으로는 $\lambda_2(\Omega)\ge 2^{2/n}\lambda_1(\Omega^\ast)$ 다[^5]. 증명은 둘째 고유함수의 양의 부분과 음의 부분이 각각 영역 하나의 첫 고유함수라는 데서 출발해, 두 부분에 Faber–Krahn 부등식을 따로 쓴다.

비 $\lambda_2/\lambda_1$ 은 공에서 가장 크다. 이것이 Payne–Pólya–Weinberger 추측(Payne–Pólya–Weinberger conjecture)이고 M. Ashbaugh 와 R. Benguria 가 증명했다[^6].

## Pólya 추측의 처음 두 경우

[Weyl 법칙](weyl-law.md)의 [Pólya 추측](polya-conjecture.md)은 $\lambda_k(\Omega)\ge 4\pi^2\bigl(k/(\omega_n\vert\Omega\vert)\bigr)^{2/n}$ 다. 모든 $n$ 에서 $j_{n/2-1,1}^2\omega_n^{4/n}\ge 4\pi^2$ 이므로 $k=1$ 인 경우는 Faber–Krahn 부등식에서 나온다. $n=2$ 에서는 $j_{0,1}^2\approx 5.78$ 이고 $4\pi^2/\omega_2^2=4$ 다. $k=2$ 인 경우는 Krahn–Szegő 정리에서 같은 방법으로 나온다.

# 활용

- [열방정식](heat-equation.md)의 [Dirichlet 문제](dirichlet-problem.md)에서 해는 $e^{-\lambda_1t}$ 의 속도로 $0$ 에 간다. 부피가 같은 영역 가운데 공에서 이 속도가 가장 느리다.
- 완비 Riemann 다양체의 열핵 상한. 부피가 $v$ 인 모든 영역에서 $\lambda_1\ge c\thinspace v^{-2/n}$ 꼴의 부등식이 성립하는 다양체에서는 열핵이 대각선에서 $Ct^{-n/2}$ 이하다. A. Grigor'yan 이 두 성질이 동치임을 보였다[^7].

[^1]: J. W. S. Rayleigh, *The Theory of Sound*, Macmillan, 1877.
[^2]: G. Faber, "Beweis, dass unter allen homogenen Membranen von gleicher Fläche und gleicher Spannung die kreisförmige den tiefsten Grundton gibt", Sitzungsber. Bayer. Akad. Wiss. München, Math.-Phys. Kl. (1923), 169–172.
[^3]: E. Krahn, "Über eine von Rayleigh formulierte Minimaleigenschaft des Kreises", Math. Ann. 94 (1925), 97–100.
[^4]: G. Pólya, G. Szegő, *Isoperimetric Inequalities in Mathematical Physics*, Princeton Univ. Press, 1951.
[^5]: E. Krahn, "Über Minimaleigenschaften der Kugel in drei und mehr Dimensionen", Acta Comm. Univ. Tartu (Dorpat) A9 (1926), 1–44.
[^6]: M. S. Ashbaugh, R. D. Benguria, "A sharp bound for the ratio of the first two eigenvalues of Dirichlet Laplacians and extensions", Ann. of Math. 135 (1992), 601–628.
[^7]: A. Grigor'yan, "Heat kernel upper bounds on a complete non-compact manifold", Rev. Mat. Iberoam. 10 (1994), 395–452.

# 연관 문서

## 선수지식

- [Laplace 연산자](laplace-operator.md)
- [등주부등식](isoperimetric-inequality.md)

## 더 알아보기

- [Szegő–Weinberger 부등식](szego-weinberger.md)
- [Courant 마디 영역 정리](courant-nodal-domain-theorem.md)
- [Pólya 추측](polya-conjecture.md)

#analysis #differential_geometry #optimization #theorem
