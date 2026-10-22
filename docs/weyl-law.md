# Weyl 법칙

# 개요

**Weyl 법칙(Weyl's law)** 은 유계 영역이나 닫힌 Riemann 다양체에서 [Laplace 연산자](laplace-operator.md)의 고윳값 가운데 $\lambda$ 이하인 것의 개수가 $\lambda\to\infty$ 에서 부피와 $\lambda^{n/2}$ 의 곱에 비례한다는 정리다. $n$ 차원 영역 $\Omega$ 에서 그 개수를 $N(\lambda)$ 라 하면

$$
N(\lambda)\sim\frac{\omega_n\thinspace\mathrm{vol}(\Omega)}{(2\pi)^n}\lambda^{n/2}
$$

이고 $\omega_n$ 은 $n$ 차원 단위공의 부피다. 주항은 부피와 차원만으로 정해지고 영역의 모양에 의존하지 않는다. H. Weyl 이 1912 년에 증명했다[^1].

# 직관

양 끝이 고정된 길이 $\pi$ 의 줄은 $-u''=\lambda u$, $u(0)=u(\pi)=0$ 의 해로 떨린다. 해는 $\sin(mx)$ 이고 고윳값은 $m^2$ $(m=1,2,\dots)$ 다. $\lambda$ 이하인 고윳값은 $m\le\sqrt\lambda$ 인 것이므로 그 개수는 $\sqrt\lambda$ 에 가깝다. 줄의 길이가 $L$ 이면 고윳값이 $(\pi m/L)^2$ 이 되어 개수는 $L\sqrt\lambda/\pi$ 근처이고, 개수가 길이에 비례한다.

한 변이 $\pi$ 인 정사각형 막에서는 $\sin(mx)\sin(ly)$ 가 고유함수이고 고윳값은 $m^2+l^2$ $(m,l\ge 1)$ 다. $\lambda$ 이하인 고윳값의 개수는 반지름 $\sqrt\lambda$ 인 사분원 안에 있는 격자점 $(m,l)$ 의 개수다. 격자점 하나가 넓이 $1$ 인 칸 하나를 차지하므로 그 개수는 사분원의 넓이 $\pi\lambda/4$ 에 가깝다. 정사각형의 넓이가 $\pi^2$ 이므로 $\pi\lambda/4=\pi^2\lambda/(4\pi)$ 이고, 개수가 넓이에 비례한다.

$n$ 차원 정육면체 $\lbrack 0,\pi\rbrack^n$ 에서도 같은 계산이 된다. 고윳값은 $m_1^2+\cdots+m_n^2$ $(m_i\ge 1)$ 이고, 개수는 반지름 $\sqrt\lambda$ 인 공을 좌표평면으로 $2^n$ 조각 낸 것 하나 안의 격자점 수, 곧 $\omega_n\lambda^{n/2}/2^n$ 근처다. 정육면체의 부피 $\pi^n$ 으로 다시 쓰면 $\omega_n\pi^n\lambda^{n/2}/(2\pi)^n$ 이고 개요의 식과 같다.

모양이 다른 막에서는 고유함수를 식으로 적을 수 없다. 그래서 막을 작은 정육면체로 채우고, 정육면체마다 위의 계산을 써서 개수를 더한다. 영역 안에 들어가는 정육면체들과 영역을 덮는 정육면체들 양쪽에서 개수를 비교하면 개요의 식이 나온다.

# 정의

## 영역의 Dirichlet 고윳값

$\Omega\subset\mathbb R^n$ 을 유계 열린집합이라 한다. Dirichlet 경계조건의 Laplace 연산자 $-\Delta$ 는 [Sobolev 공간](sobolev-spaces.md) $H^1_0(\Omega)$ 위의 이차형식

$$
q(u)=\int_\Omega\Vert\nabla u\Vert^2\thinspace dx
$$

로 정의되는 자기수반 작용소다. Rellich–Kondrachov 정리(Rellich–Kondrachov theorem)로 $H^1_0(\Omega)$ 에서 $L^2(\Omega)$ 로의 포함이 콤팩트하므로 스펙트럼은 고윳값

$$
0\lt\lambda_1\le\lambda_2\le\cdots\to\infty
$$

뿐이다. 고윳값은 중복도만큼 되풀이해 적는다. **고윳값 세기 함수(eigenvalue counting function)** 는

$$
N_\Omega(\lambda)=\char35{}\lbrace k:\lambda_k\le\lambda\rbrace
$$

다. 형식의 정의역을 $H^1_0(\Omega)$ 대신 $H^1(\Omega)$ 로 두면 Neumann 경계조건이고, 그 세기 함수를 $N^{\mathrm N}\_\Omega$ 로 쓴다. 정육면체에서는 Neumann 고윳값도 이산이다.

## Weyl 법칙

경계 $\partial\Omega$ 의 Lebesgue 측도가 $0$ 인 유계 열린집합 $\Omega\subset\mathbb R^n$ 에서

$$
N_\Omega(\lambda)=C_n\thinspace\mathrm{vol}(\Omega)\thinspace\lambda^{n/2}+o(\lambda^{n/2})\qquad(\lambda\to\infty)
$$

가 성립한다는 것이 Weyl 법칙이다. 상수는

$$
C_n=\frac{\omega_n}{(2\pi)^n}=\frac{1}{(4\pi)^{n/2}\thinspace\Gamma(n/2+1)}
$$

이다. $N_\Omega(\lambda_k)$ 가 $k$ 근처이므로 같은 내용을 고윳값의 크기로 쓰면

$$
\lambda_k\sim 4\pi^2\Bigl(\frac{k}{\omega_n\thinspace\mathrm{vol}(\Omega)}\Bigr)^{2/n}\qquad(k\to\infty)
$$

이다.

## 다양체의 Weyl 법칙

$(M,g)$ 를 닫힌 $n$ 차원 [Riemann 계량](riemannian-metrics.md)의 다양체라 하고, [Laplace–Beltrami 연산자](laplace-beltrami-operator.md) $-\Delta_g$ 의 고윳값을 $0=\lambda_0\lt\lambda_1\le\cdots$ 로 적는다. 그 세기 함수 $N_M$ 에 대해

$$
N_M(\lambda)\sim C_n\thinspace\mathrm{vol}\_g(M)\thinspace\lambda^{n/2}\qquad(\lambda\to\infty)
$$

가 성립한다.

# 성질

## 정육면체의 고윳값 개수

한 변이 $a$ 인 정육면체 $Q$ 의 Dirichlet 고유함수는 $\prod_i\sin(\pi m_ix_i/a)$ $(m_i\ge 1)$ 이고 Neumann 고유함수는 $\prod_i\cos(\pi m_ix_i/a)$ $(m_i\ge 0)$ 이다. 고윳값은 둘 다 $(\pi/a)^2\Vert m\Vert^2$ 이므로

$$
N_Q(\lambda)=\char35{}\Bigl\lbrace m\in\mathbb Z_{\ge 1}^n:\Vert m\Vert\le\frac{a\sqrt\lambda}{\pi}\Bigr\rbrace,\qquad N^{\mathrm N}\_Q(\lambda)=\char35{}\Bigl\lbrace m\in\mathbb Z_{\ge 0}^n:\Vert m\Vert\le\frac{a\sqrt\lambda}{\pi}\Bigr\rbrace
$$

다. 두 수의 차는 좌표평면 위의 격자점 수이고 $O(\lambda^{(n-1)/2})$ 다. 그래서 둘 다 $C_na^n\lambda^{n/2}+O(\lambda^{(n-1)/2})$ 다.

## Dirichlet–Neumann 괄호 매김

[스펙트럼 정리](spectral-theorem.md)의 Courant–Fischer min–max 정리(Courant–Fischer min–max theorem)는 형식의 정의역 $D$ 에서

$$
\lambda_k=\min_{V\subset D,\ \dim V=k}\ \max_{u\in V\setminus\lbrace 0\rbrace}\frac{q(u)}{\Vert u\Vert^2}
$$

를 준다. 같은 형식을 더 큰 정의역에서 재면 최솟값을 고르는 범위가 넓어지므로 $\lambda_k$ 가 작아지고 $N(\lambda)$ 가 커진다. 여기서 **Dirichlet–Neumann 괄호 매김(Dirichlet–Neumann bracketing)** 의 세 부등식이 나온다.

- $\Omega_1\subset\Omega_2$ 이면 $N_{\Omega_1}(\lambda)\le N_{\Omega_2}(\lambda)$ 다. $H^1_0(\Omega_1)$ 의 함수를 $0$ 으로 늘이면 $H^1_0(\Omega_2)$ 에 속한다.
- $\Omega_1,\Omega_2$ 가 겹치지 않는 열린집합이면 $N_{\Omega_1\cup\Omega_2}=N_{\Omega_1}+N_{\Omega_2}$ 다. Neumann 도 같다.
- $\Omega$ 가 내부가 겹치지 않는 정육면체 $Q_1,\dots,Q_m$ 의 합집합의 내부이면 $N_\Omega(\lambda)\le\sum_iN^{\mathrm N}\_{Q_i}(\lambda)$ 다. $H^1_0(\Omega)$ 의 함수를 각 $Q_i$ 로 제한하면 $\bigoplus_iH^1(Q_i)$ 에 속한다.

## Weyl 법칙의 증명

한 변이 $a$ 인 정육면체 격자를 깐다. $\Omega$ 안에 들어가는 정육면체의 합집합을 $I_a$, $\Omega$ 의 폐포와 만나는 정육면체의 합집합을 $U_a$ 라 한다. 괄호 매김의 세 부등식에서

$$
\sum_{Q\subset I_a}N_Q(\lambda)\le N_\Omega(\lambda)\le\sum_{Q\subset U_a}N^{\mathrm N}\_Q(\lambda)
$$

다. $a$ 를 고정하고 $\lambda^{n/2}$ 로 나눠 $\lambda\to\infty$ 로 보내면 정육면체의 계산에서 하극한이 $C_n\mathrm{vol}(I_a)$ 이상, 상극한이 $C_n\mathrm{vol}(U_a)$ 이하다. $\partial\Omega$ 의 측도가 $0$ 이므로 $a\to 0$ 에서 두 부피가 모두 $\mathrm{vol}(\Omega)$ 로 간다. 이 논법은 R. Courant 의 것이다[^2].

## 열 대각합

닫힌 다양체에서 열 대각합(heat trace)

$$
\theta(t)=\sum_k e^{-t\lambda_k}=\int_0^\infty e^{-t\lambda}\thinspace dN_M(\lambda)
$$

은 $t\to 0^+$ 에서 $\theta(t)\sim\mathrm{vol}\_g(M)\thinspace(4\pi t)^{-n/2}$ 를 만족한다[^3]. 짧은 시간에 [열방정식](heat-equation.md)의 해는 한 점 근처만 보므로, 열핵(heat kernel)이 대각선 근처에서 $\mathbb R^n$ 의 열핵 $(4\pi t)^{-n/2}e^{-\Vert x-y\Vert^2/4t}$ 와 같아진다. 대각선에서 적분하면 위 식이다.

Karamata Tauber 정리(Karamata's Tauberian theorem)는 증가함수 $N$ 에 대해 $\int_0^\infty e^{-t\lambda}dN(\lambda)\sim At^{-\alpha}$ $(t\to 0^+)$ 이면 $N(\lambda)\sim A\lambda^\alpha/\Gamma(\alpha+1)$ 이라는 정리다. $\alpha=n/2$, $A=\mathrm{vol}\_g(M)(4\pi)^{-n/2}$ 를 넣으면 다양체의 Weyl 법칙이 나온다.

## 스펙트럼이 정하는 양

Weyl 법칙에서 $N(\lambda)$ 의 증가 차수가 차원 $n$ 을, 주항의 계수가 부피를 정한다. 그래서 고윳값의 목록이 같은 두 영역은 차원과 부피가 같다. M. Kac 는 평면 영역의 Dirichlet 고윳값이 영역의 모양을 정하는지 물었다[^4]. C. Gordon, D. Webb, S. Wolpert 는 Dirichlet 고윳값이 모두 같고 합동이 아닌 평면 다각형 두 개를 만들었다[^5].

## 둘째 항

Weyl 추측(Weyl's conjecture)은 매끄러운 경계의 영역에서

$$
N_\Omega(\lambda)=C_n\thinspace\mathrm{vol}(\Omega)\thinspace\lambda^{n/2}\mp\frac14C_{n-1}\thinspace\mathrm{vol}\_{n-1}(\partial\Omega)\thinspace\lambda^{(n-1)/2}+o(\lambda^{(n-1)/2})
$$

라는 주장이다. 부호는 Dirichlet 에서 $-$, Neumann 에서 $+$ 다. 정사각형 $\lbrack 0,\pi\rbrack^2$ 에서 둘째 항은 $\frac14\cdot\frac1\pi\cdot 4\pi\sqrt\lambda=\sqrt\lambda$ 이고, 사분원에서 좌표축 위의 격자점 약 $2\sqrt\lambda$ 개의 절반을 빼는 것과 맞는다. V. Ivrii 는 주기적인 당구 궤도의 집합이 측도 $0$ 인 영역에서 이 식을 증명했다[^6].

## Pólya 추측과 Li–Yau 부등식

Pólya 추측(Pólya's conjecture)은 모든 유계 영역과 모든 $\lambda$ 에서

$$
N_\Omega(\lambda)\le C_n\thinspace\mathrm{vol}(\Omega)\thinspace\lambda^{n/2}
$$

라는 주장이다. G. Pólya 는 합동인 조각으로 평면을 빈틈없이 덮는 영역에서 이것을 증명했다[^7]. 고윳값의 합에 대해서는 모든 유계 영역에서 Li–Yau 부등식(Li–Yau inequality)

$$
\sum_{j=1}^k\lambda_j\ge\frac{n}{n+2}\thinspace 4\pi^2\bigl(\omega_n\thinspace\mathrm{vol}(\Omega)\bigr)^{-2/n}k^{1+2/n}
$$

이 성립한다[^8]. 우변은 Weyl 법칙의 $\lambda_j$ 를 $j=1,\dots,k$ 에 대해 더한 값의 주항과 같다.

# 활용

- [제타 정규화 행렬식](zeta-regularized-determinant.md)의 스펙트럼 zeta 함수 $\sum_k\lambda_k^{-s}$ 는 $\lambda_k$ 가 $k^{2/n}$ 규모로 자라므로 $\mathrm{Re}\thinspace s\gt n/2$ 에서 수렴한다.
- [양자 혼돈](quantum-chaos.md)의 펼친 스펙트럼은 고윳값 $\lambda_k$ 를 Weyl 법칙의 주항 $C_n\mathrm{vol}\thinspace\lambda_k^{n/2}$ 으로 바꿔 평균 간격을 $1$ 로 맞춘 열이다.
- [Maass 형식](maass-forms.md)의 개수 세기. $\mathrm{SL}\_2(\mathbb Z)$ 의 몫 곡면은 넓이가 $\pi/3$ 이고 콤팩트하지 않다. A. Selberg 는 [Selberg 대각합 공식](selberg-trace-formula.md)으로 첨점형식의 고윳값에 대해 $N(\lambda)\sim\lambda/12$ 를 얻었고, 이 값은 $C_2\cdot\pi/3$ 과 같다.

[^1]: H. Weyl, "Das asymptotische Verteilungsgesetz der Eigenwerte linearer partieller Differentialgleichungen", Math. Ann. 71 (1912), 441–479.
[^2]: R. Courant, D. Hilbert, *Methoden der mathematischen Physik I*, Springer, 1924, 6 장.
[^3]: S. Minakshisundaram, Å. Pleijel, "Some properties of the eigenfunctions of the Laplace-operator on Riemannian manifolds", Canad. J. Math. 1 (1949), 242–256.
[^4]: M. Kac, "Can one hear the shape of a drum?", Amer. Math. Monthly 73 (1966), 1–23.
[^5]: C. Gordon, D. Webb, S. Wolpert, "Isospectral plane domains and surfaces via Riemannian orbifolds", Invent. Math. 110 (1992), 1–22.
[^6]: V. Ya. Ivrii, "Second term of the spectral asymptotic expansion of the Laplace–Beltrami operator on manifolds with boundary", Funct. Anal. Appl. 14 (1980), 98–106.
[^7]: G. Pólya, "On the eigenvalues of vibrating membranes", Proc. London Math. Soc. (3) 11 (1961), 419–433.
[^8]: P. Li, S.-T. Yau, "On the Schrödinger equation and the eigenvalue problem", Comm. Math. Phys. 88 (1983), 309–318.

# 연관 문서

## 선수지식

- [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)
- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

- [양자 혼돈](quantum-chaos.md)
- [제타 정규화 행렬식](zeta-regularized-determinant.md)

#differential_geometry #analysis #functional_analysis #theorem
