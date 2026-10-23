# Pólya 추측

# 개요

**Pólya 추측(Pólya's conjecture)** 은 $\mathbb R^n$ 의 유계 영역 $\Omega$ 에서 Dirichlet 고윳값의 개수 $N_\Omega(\lambda)$ 가 모든 $\lambda$ 에서 [Weyl 법칙](weyl-law.md)의 주항 이하이고, Neumann 고윳값의 개수는 주항 이상이라는 추측이다. Pólya 가 1961 년에 평면을 합동 조각으로 덮는 영역에서 증명하고 일반 영역에 대한 추측으로 제기했다.[^1]

$C_n=\omega_n/(2\pi)^n$ 으로 두면 Dirichlet 쪽 진술은 $N_\Omega(\lambda)\le C_n\vert\Omega\vert\lambda^{n/2}$ 이고, $k$ 번째 고윳값으로는 $\lambda_k(\Omega)\ge 4\pi^2\bigl(k/(\omega_n\vert\Omega\vert)\bigr)^{2/n}$ 이다. $k=1$ 인 경우는 [Faber–Krahn 부등식](faber-krahn.md)에서 나온다.

# 직관

한 변이 $\pi$ 인 정사각형에서 Dirichlet 고윳값은 $m^2+l^2$ $(m,l\ge 1)$ 이므로, $N(\lambda)$ 는 반지름 $\sqrt\lambda$ 인 원의 사분면 안에 있는 양의 정수 격자점의 개수다. 각 격자점 $(m,l)$ 에 그 점을 오른쪽 위 꼭짓점으로 하는 단위 정사각형을 붙이면, 정사각형들은 겹치지 않고 모두 사분원 안에 든다. 그래서 $N(\lambda)\le\pi\lambda/4$ 이고, 이 값이 $C_2\vert\Omega\vert\lambda=\frac{1}{4\pi}\cdot\pi^2\cdot\lambda$ 다.

Neumann 고윳값은 $m,l\ge 0$ 이고, 격자점 $(m,l)$ 을 왼쪽 아래 꼭짓점으로 하는 단위 정사각형들이 사분원을 덮는다. 그래서 개수가 $\pi\lambda/4$ 이상이다. 정사각형에서는 두 부등식이 모든 $\lambda$ 에서 성립한다. Weyl 법칙으로는 두 개수가 $\lambda\to\infty$ 에서 이 값에 가까워진다는 것만 나오고, 이 부등식이 모든 영역에서 성립하는지가 Pólya 추측이다.

# 정의

$\Omega\subset\mathbb R^n$ 을 유계 영역, $0\lt\lambda_1\le\lambda_2\le\cdots$ 를 Dirichlet 고윳값, $0=\mu_1\le\mu_2\le\cdots$ 를 Neumann 고윳값이라 하고 개수 함수를 $N_\Omega(\lambda)$, $N^{\mathrm N}\_\Omega(\lambda)$ 로 적는다. Pólya 추측은 모든 $\lambda\ge 0$ 에서

$$
N_\Omega(\lambda)\le C_n\vert\Omega\vert\lambda^{n/2}\le N^{\mathrm N}\_\Omega(\lambda)
$$

라는 진술이다. 고윳값으로 쓰면 $\mu_{k+1}\le 4\pi^2\bigl(k/(\omega_n\vert\Omega\vert)\bigr)^{2/n}\le\lambda_k$ 다.

# 성질

## 덮는 영역

**정리(Pólya, Kellner).** 평행이동과 회전으로 옮긴 $\Omega$ 의 합동 사본들이 평면을 겹치지 않고 덮으면 $\Omega$ 에서 Pólya 추측이 성립한다.[^1][^2]

증명의 요지. 큰 정사각형 $Q_R$ 이 $\Omega$ 의 사본 $m(R)$ 개를 겹치지 않게 포함하고, $m(R)\vert\Omega\vert/R^2\to 1$ 이다. Dirichlet–Neumann 괄호 매김(Dirichlet–Neumann bracketing)으로 $m(R)N_\Omega(\lambda)\le N_{Q_R}(\lambda)$ 이다. 고정한 $\lambda$ 에서 $N_{Q_R}(\lambda)=C_2R^2\lambda+O(R\sqrt\lambda)$ 이므로 $R\to\infty$ 에서 $N_\Omega(\lambda)\le C_2\vert\Omega\vert\lambda$ 가 나온다. Neumann 쪽은 Kellner 가 같은 방식으로 증명했다.

## 합에 대한 부등식

고윳값 하나가 아니라 처음 $k$ 개의 합에 대해서는 모든 유계 영역에서

$$
\sum_{j=1}^k\lambda_j\ge\frac{n}{n+2}\thinspace 4\pi^2\bigl(\omega_n\vert\Omega\vert\bigr)^{-2/n}k^{1+2/n}
$$

이 성립하고, 이것이 Li–Yau 부등식(Li–Yau inequality)이다.[^3] 여기서 $\lambda_k\ge\frac{n}{n+2}4\pi^2\bigl(k/(\omega_n\vert\Omega\vert)\bigr)^{2/n}$ 이 나오므로, 상수 $n/(n+2)$ 를 빼면 Dirichlet 쪽 추측이 성립한다. Neumann 쪽에서는 Kröger 가 주항에 차원에만 의존하는 상수를 곱한 상한을 증명했다.[^4]

## 곱 영역

**정리(Laptev).** $\Omega_1\subset\mathbb R^{n_1}$ 에서 Dirichlet 쪽 추측이 성립하고 $n_2\ge 2$ 이면, 모든 유계 영역 $\Omega_2\subset\mathbb R^{n_2}$ 에 대해 $\Omega_1\times\Omega_2$ 에서 Dirichlet 쪽 추측이 성립한다.[^5]

## 공

**정리(Filonov–Levitin–Polterovich–Sher, 2023).** 모든 차원의 공에서 Dirichlet 쪽과 Neumann 쪽 추측이 성립한다.[^6]

공의 고윳값은 [Bessel 함수](bessel-functions.md)의 영점으로 주어지고, 증명은 개수 함수를 Bessel 함수의 영점에 대한 격자점 세기로 바꾸어 평가한다. 공은 평면이나 공간을 합동 사본으로 덮지 않으므로 덮는 영역의 정리에 들지 않는다. 같은 논문은 일반 영역에서의 추측을 열린 문제로 적는다.[^6]

# 활용

- [Faber–Krahn 부등식](faber-krahn.md)과 Krahn–Szegő 정리(Krahn–Szegő theorem)가 $k=1,2$ 의 Dirichlet 쪽 추측을 모든 영역에서 준다.

[^1]: G. Pólya, *On the eigenvalues of vibrating membranes*, Proc. London Math. Soc. (3) **11** (1961), 419–433.
[^2]: R. Kellner, *On a theorem of Pólya*, Amer. Math. Monthly **73** (1966), 856–858.
[^3]: P. Li, S.-T. Yau, *On the Schrödinger equation and the eigenvalue problem*, Comm. Math. Phys. **88** (1983), 309–318.
[^4]: P. Kröger, *Upper bounds for the Neumann eigenvalues on a bounded domain in Euclidean space*, J. Funct. Anal. **106** (1992), 353–357.
[^5]: A. Laptev, *Dirichlet and Neumann eigenvalue problems on domains in Euclidean spaces*, J. Funct. Anal. **151** (1997), 531–545.
[^6]: N. Filonov, M. Levitin, I. Polterovich, D. A. Sher, *Pólya's conjecture for Euclidean balls*, Invent. Math. **234** (2023), 129–169.

# 연관 문서

## 선수지식

- [Weyl 법칙](weyl-law.md)
- [Faber–Krahn 부등식](faber-krahn.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #functional_analysis
