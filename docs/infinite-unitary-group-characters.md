# 무한 유니터리군의 지표

# 개요

**무한 유니터리군의 지표(characters of the infinite unitary group)** 는 크기가 한없이 커지는 유니터리 행렬군에서, 행렬 크기에 매이지 않는 표현의 대각합을 분류한 것이다. $N\times N$ 유니터리 행렬군의 표현 $\mathrm{Sym}^{N/2}$ 의 대각합을 차원으로 나누고 행렬 $\mathrm{diag}(-1,1,\dots,1)$ 에서 재면 $N=2,4,10,100$ 일 때 $0$, $0.4$, $0.460$, $0.496$ 으로 $1/2$ 에 다가간다. Voiculescu 와 Edrei 의 결과에 따르면 이런 극한은 전부 고윳값마다 같은 함수 하나를 곱한 꼴이고, 그 함수는 수 여섯 묶음으로 정해진다.

# 직관

$N\times N$ 유니터리 행렬 전체의 군 $U(N)$ 은 $\mathbb C^N$ 에 작용하고, 그 $k$ 차 대칭곱 $\mathrm{Sym}^k\mathbb C^N$ 에도 작용한다. 고윳값이 $u_1,\dots,u_N$ 인 행렬의 대각합은 [Schur 다항식](schur-polynomials.md) $s\_{(k)}$, 곧 $k$ 차 단항식 전부의 합 $h_k(u_1,\dots,u_N)$ 이고, 차원은 $h_k(1,\dots,1)=\binom{N+k-1}{k}$ 이다.

행렬 $\mathrm{diag}(u,1,\dots,1)$ 에서 대각합을 차원으로 나눈 값을 $k=N/2$ 로 잰다. $N=2$, $k=1$ 이면 $(u+1)/2$ 이고, $N=4$, $k=2$ 이면 $(u^2+3u+6)/10$ 이다. $u=-1$ 을 넣으면 $0$ 과 $0.4$ 이고, $N$ 을 키우면 값이 $1/2$ 로 간다.

$N$ 이 커질 때 이 값은 $u$ 의 함수로 다음 극한을 갖는다.

$$
\Phi(u)=\frac{1}{1-\tfrac12(u-1)}
$$

$u=-1$ 이면 $\Phi(-1)=1/2$ 다. $U(N)$ 을 $U(N+1)$ 의 왼쪽 위 칸으로 보면 이 극한은 모든 크기의 유니터리 행렬 위의 함수이고, 고윳값이 $u_1,\dots,u_m$ 인 행렬에서 $\Phi(u_1)\cdots\Phi(u_m)$ 이다. Voiculescu–Edrei 정리는 쪼갤 수 없는 지표가 모두 이렇게 고윳값마다 한 함수 $\Phi$ 를 곱한 꼴이라는 것과, 가능한 $\Phi$ 의 목록이다.

# 정의

## 무한 유니터리군

$U(N)$ 을 $U(N+1)$ 안에 $U\mapsto\mathrm{diag}(U,1)$ 로 넣은 합집합 $U(\infty)=\bigcup_N U(N)$ 을 **무한 유니터리군(infinite unitary group)** 이라 한다. 원소는 유한 개의 행과 열 밖에서 단위행렬과 같은 무한 유니터리 행렬이고, 고윳값 가운데 $1$ 이 아닌 것은 유한 개다.

## 지표와 극단 지표

$U(\infty)$ 의 **지표(character)** 는 다음 네 조건을 만족하는 함수 $\chi\colon U(\infty)\to\mathbb C$ 다.

- $\chi(I)=1$.
- 켤레에 대해 불변이다. 모든 $U,V$ 에서 $\chi(VUV^{-1})=\chi(U)$.
- 양의 정부호다. 원소 $U_1,\dots,U_r$ 와 복소수 $c_1,\dots,c_r$ 를 어떻게 골라도 $\sum_{i,j}c_i\overline{c_j}\thinspace\chi(U_j^{-1}U_i)\ge 0$.
- 각 $U(N)$ 위에서 연속이다.

[Thoma 정리](thoma-theorem.md)의 지표와 같이, 다른 두 지표의 볼록결합 $t\chi_1+(1-t)\chi_2$, $0\lt t\lt 1$ 로 쓸 수 없는 지표를 **극단 지표(extreme character)** 라 한다. 직관 절의 극한은 극단 지표이고, 상수함수 $1$ 과 행렬식 $\det$ 도 극단 지표다.

## Voiculescu 매개변수

**Voiculescu 매개변수(Voiculescu parameters)** 는 감소하는 음 아닌 수열 넷 $\alpha^\pm=(\alpha^\pm_1\ge\alpha^\pm_2\ge\cdots\ge 0)$, $\beta^\pm=(\beta^\pm_1\ge\beta^\pm_2\ge\cdots\ge 0)$ 과 음 아닌 수 둘 $\gamma^\pm$ 의 묶음 $\omega$ 로, 다음 조건을 만족하는 것이다.

$$
\sum_i\bigl(\alpha^+\_i+\beta^+\_i+\alpha^-\_i+\beta^-\_i\bigr)\lt\infty,\qquad \beta^+\_1+\beta^-\_1\le 1
$$

이런 묶음 전체를 $\Omega$ 로 쓴다. 직관 절의 극한은 $\alpha^+=(1/2,0,\dots)$ 이고 나머지가 모두 $0$ 인 묶음에 대응한다.

# 성질

## Voiculescu–Edrei 정리

**정리.** $\omega\in\Omega$ 마다 다음 함수 $\Phi\_\omega$ 를 두면 $\chi\_\omega(U)=\prod_i\Phi\_\omega(u_i)$ 는 $U(\infty)$ 의 극단 지표이고, 모든 극단 지표가 이렇게 한 번씩 나온다[^1][^2]. 곱은 $U$ 의 고윳값 $u_i$ 전체에 대한 것이고, $\Phi\_\omega(1)=1$ 이므로 유한곱이다.

$$
\begin{aligned}
\Phi\_\omega(u)=\thinspace&e^{\gamma^+(u-1)+\gamma^-(u^{-1}-1)}\cr
&\times\prod_{i\ge 1}\frac{1+\beta^+\_i(u-1)}{1-\alpha^+\_i(u-1)}\cdot\frac{1+\beta^-\_i(u^{-1}-1)}{1-\alpha^-\_i(u^{-1}-1)}
\end{aligned}
$$

Voiculescu 는 1976 년에 이 함수들이 극단 지표라는 것을 보였고, 모든 극단 지표가 이 꼴이라는 것은 Vershik–Kerov 와 Boyer 가 증명했다.

## 매개변수 몇 개의 지표

| 매개변수 | $\Phi\_\omega(u)$ | 지표 |
| --- | --- | --- |
| 모두 $0$ | $1$ | 상수함수 $1$ |
| $\beta^+=(1,0,\dots)$ | $u$ | $\det U$ |
| $\beta^-=(1,0,\dots)$ | $u^{-1}$ | $\overline{\det U}$ |
| $\alpha^+=(1/2,0,\dots)$ | $1/(1-\tfrac12(u-1))$ | 직관 절의 극한 |
| $\gamma^+=c$ | $e^{c(u-1)}$ | |

조건 $\beta^+\_1+\beta^-\_1\le 1$ 은 $\beta^+=\beta^-=(1,0,\dots)$ 을 뺀다. 이 묶음은 $\Phi=u\cdot u^{-1}=1$ 을 주어 모두 $0$ 인 묶음과 같은 지표가 되므로, 조건이 없으면 매개변수가 지표를 하나로 정하지 못한다.

## 곱셈성

지표 $\chi$ 가 극단 지표인 것은 $\chi(\mathrm{diag}(U,V))=\chi(U)\chi(V)$ 가 모든 $U\in U(m)$, $V\in U(n)$ 에서 성립하는 것과 동치다[^2]. 켤레 불변성으로 $U$ 를 대각행렬로 바꾸면, 극단 지표는 $\Phi(u)=\chi(\mathrm{diag}(u,1,1,\dots))$ 한 함수로 정해진다.

## 증명의 요지

극단 지표의 $\Phi$ 를 원 $\vert u\vert=1$ 위의 함수로 보고 Fourier 계수 $\Phi(u)=\sum_{n\in\mathbb Z}a_nu^n$ 을 쓴다. $\chi$ 를 $U(N)$ 으로 제한하면 정규화된 기약지표 $s_\lambda/s_\lambda(1,\dots,1)$ 의 볼록결합이고, 계수를 비교하면 모든 Schur 다항식에서 $\chi$ 가 음 아닌 무게를 준다. Jacobi–Trudi 항등식(Jacobi–Trudi identity)으로 이것을 바꾸어 쓰면 양쪽 무한 [Toeplitz 행렬](toeplitz-matrices.md) $\lbrack a\_{i-j}\rbrack\_{i,j\in\mathbb Z}$ 의 소행렬식이 모두 $0$ 이상이라는 조건이 된다.

이런 양쪽 무한 수열을 양쪽 [Pólya 빈도 수열](polya-frequency-sequences.md)이라 한다. Edrei 는 1953 년에 $\sum_na_n=1$ 인 양쪽 Pólya 빈도 수열의 생성함수가 정확히 정리의 $\Phi\_\omega$ 꼴임을 증명했다[^3]. 한쪽 수열에 대한 Aissen–Schoenberg–Whitney–Edrei 정리가 $\alpha^-=\beta^-=0$, $\gamma^-=0$ 인 경우다.

## Gelfand–Tsetlin 그래프의 극한

$U(N)$ 의 기약표현은 정수열 $\lambda_1\ge\cdots\ge\lambda_N$ 로 번호가 붙는다. 이 열을 꼭짓점으로 두고, $U(N+1)$ 의 표현을 $U(N)$ 으로 제한했을 때 나타나는 표현끼리 변을 이은 그래프를 Gelfand–Tsetlin 그래프(Gelfand–Tsetlin graph)라 한다. 제한에 나타나는 표현은 [Pieri 규칙](pieri-rule.md)의 분기 규칙으로 정해지고, 두 열이 서로 끼어드는 경우다. 극단 지표는 이 그래프를 따라 커지는 열 $\lambda^{(N)}$ 의 정규화된 지표의 극한으로 모두 나온다[^2]. 양수 부분의 $i$ 번째 행 길이와 열 길이를 $N$ 으로 나눈 극한이 $\alpha^+\_i$ 와 $\beta^+\_i$, 음수 부분의 것이 $\alpha^-\_i$ 와 $\beta^-\_i$ 이다. 직관 절의 $\lambda=(N/2,0,\dots,0)$ 은 첫 행의 길이가 $N/2$ 라 $\alpha^+\_1=1/2$ 이다.

# 활용

- 무한 대칭군과의 대응. [Thoma 정리](thoma-theorem.md)의 매개변수 $(\alpha,\beta)$ 는 [Young 격자](youngs-lattice.md)의 행과 열 비율이고, 여기의 $(\alpha^+,\beta^+)$ 와 $(\alpha^-,\beta^-)$ 는 Gelfand–Tsetlin 그래프에서 양수 부분과 음수 부분의 같은 비율이다. 두 증명 모두 Pólya 빈도 수열의 분류로 끝난다.
- 조화해석. 극단 지표가 아닌 지표는 $\Omega$ 위의 확률측도로 극단 지표의 적분이 된다. Borodin 과 Olshanski 는 $U(\infty)$ 의 자연스러운 표현 족에서 나오는 이 측도를 [결정점과정](determinantal-point-process.md)으로 계산했다[^4].
- 유한 인자 표현. $U(\infty)$ 의 극단 지표는 생성하는 [von Neumann 대수](von-neumann-algebras.md)가 유한 인자인 표현의 정규화된 대각합과 일대일로 대응한다.

[^1]: D. Voiculescu, "Représentations factorielles de type II₁ de U(∞)", Journal de Mathématiques Pures et Appliquées 55 (1976), 1–20.
[^2]: A. Borodin, G. Olshanski, "The boundary of the Gelfand–Tsetlin graph: a new approach", Advances in Mathematics 230 (2012), 1738–1779.
[^3]: A. Edrei, "On the generating function of a doubly infinite, totally positive sequence", Transactions of the American Mathematical Society 74 (1953), 367–383.
[^4]: A. Borodin, G. Olshanski, "Harmonic analysis on the infinite-dimensional unitary group and determinantal point processes", Annals of Mathematics 161 (2005), 1319–1422.

# 연관 문서

## 선수지식

- [Thoma 정리](thoma-theorem.md)
- [Schur 다항식](schur-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #functional_analysis #combinatorics
