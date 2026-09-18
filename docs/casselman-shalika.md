# Casselman–Shalika 공식

# 개요

Casselman–Shalika 공식은 비분기 자리에서 구면 Whittaker 함수의 값을 쌍대군의 기약지표로 준다.

$$
W^\circ(\varpi^\lambda)=\delta_B^{1/2}(\varpi^\lambda)\thickspace s_\lambda(\alpha_1,\dots,\alpha_n)
$$

$\alpha_i$ 는 $\pi_v$ 의 Satake 매개변수, $\lambda$ 는 지배적 여무게이고, $\lambda$ 가 지배적이 아니면 값이 0 이다.

[Whittaker 모형](whittaker-models.md)은 $\mathrm{GL}\_n$ 첨점형식의 Fourier 계수를 대신하는 함수 $W(g)$ 를 주고, 유일성 덕분에 $W$ 가 자리마다의 곱으로 쪼개져 $L$ 함수가 Euler 곱이 된다. 각 자리의 $W$ 값을 [Schur 다항식](schur-polynomials.md)이 답한다. $p$ 진군 위의 조화해석이 낳은 값이 복소 Lie 군의 기약지표다.

이 등식이 두 가지를 설명한다.

- **$L$ 인자의 정체.** 두 Whittaker 함수를 곱해 적분하면 $\sum_\lambda s_\lambda(\alpha)s_\lambda(\beta)t^{|\lambda|}$ 가 나오고, Cauchy 항등식이 그것을 $\prod_{i,j}(1-\alpha_i\beta_jt)^{-1}$ 로 바꾼다. 오른쪽이 Rankin–Selberg $L$ 인자다.
- **계산 가능성.** Whittaker 함수의 값을 대각표 세기로 계산할 수 있다.

# 직관

## 값이 놓이는 자리

비분기 자리에서 $W^\circ$ 는 오른쪽으로 $K=\mathrm{GL}\_n(\mathcal O)$ 불변이고 왼쪽으로 $N$ 에 대해 $\psi_N$ 변환한다. Iwasawa 분해 $G=NAK$ 를 쓰면 $W^\circ$ 는 $A$ 위의 값으로 결정되고, $A\cap K$ 불변이므로 값이 다음 자리에만 놓인다.

$$
\varpi^\lambda=\mathrm{diag}(\varpi^{\lambda_1},\dots,\varpi^{\lambda_n}),\qquad\lambda\in\mathbb Z^n
$$

$W^\circ$ 는 $\mathbb Z^n$ 위의 함수 하나다. $\psi_N$ 의 비퇴화성이 $\lambda_1\ge\dots\ge\lambda_n$ 이 아닌 자리에서 값을 0 으로 만들고, 남는 것이 지배적 여무게다.

| | 왼쪽 ($p$ 진군) | 오른쪽 (복소 Lie 군) |
|---|---|---|
| 매개변수의 집합 | $A/(A\cap K)=X_\ast(T)$ 의 지배적 부분 | $\widehat G=\mathrm{GL}\_n(\mathbb C)$ 의 최고무게 $X^\ast(\widehat T)^+$ |
| 변수 | Satake 매개변수 $\alpha_i$ | 쌍대 토러스의 좌표 |
| 값 | $W^\circ(\varpi^\lambda)$ | 기약지표 $s_\lambda(\alpha)$ |

$X_\ast(T)=X^\ast(\widehat T)$ 는 [Satake 동형](satake-isomorphism.md)이 쌍대군을 만들 때 쓴 동일시다. 두 집합이 같은 격자이므로 두 함수의 비교가 뜻을 갖고, 공식은 그 비교가 등식이라고 말한다.

## 지표가 나오는 경로

Hecke 대수의 원소 $f$ 가 $W^\circ$ 에 작용하면 Satake 변환의 값 $\hat f(\alpha)$ 를 곱한 것이 나온다. $W^\circ$ 는 Hecke 대수의 동시 고유벡터이고 그 고유값이 $R(\widehat G)\cong\mathbb C[\alpha]^{S_n}$ 의 원소다.

$\lambda$ 로 매겨진 함수족이 기약표현으로 매겨진 지표족과 같은 대수 위에서 같은 방식으로 변환하므로 남는 것은 정규화 $\delta_B^{1/2}$ 뿐이다. 표현환의 자연 기저가 $\lbrace s_\lambda\rbrace$ 이므로 답도 $s_\lambda$ 다.

Casselman–Shalika 는 Whittaker 함수를 $\mathrm{Ind}\_B^G$ 에서 교차 작용소의 합으로 쓰고, Weyl 군에 걸친 합이 Weyl 지표 공식의 bialternant 꼴로 접히는 것을 보인다.

$$
W^\circ(\varpi^\lambda)\ \propto\ \sum_{w\in W}(-1)^{\ell(w)}\frac{\cdots}{\cdots}\ \longrightarrow\ \frac{\det(\alpha_i^{\lambda_j+n-j})}{\det(\alpha_i^{n-j})}
$$

$\lambda$ 가 지배적이 아닐 때 합이 상쇄되어 0 이 되는 것도 같은 계산에서 나온다.

# 정의

## 설정

$F$ 를 비아르키메데스 국소체, $\mathcal O$ 를 정수환, $\varpi$ 를 소원, $q=|\mathcal O/\varpi|$ 라 하자. $G=\mathrm{GL}\_n(F)$ 와 $K=\mathrm{GL}\_n(\mathcal O)$ 를 두고 $B=TN$ 을 Borel 부분군이라 한다.

$\pi$ 를 비분기 기약 허용가능 표현이라 하고 그 Satake 매개변수를 $A_\pi=\mathrm{diag}(\alpha_1,\dots,\alpha_n)$ 이라 한다. $\psi$ 를 $\mathcal O$ 에서 자명하고 $\varpi^{-1}\mathcal O$ 에서 자명하지 않은 가법 지표로 두고, $\psi_N$ 을 그로부터 만든 비퇴화 지표라 하자.

$\pi$ 의 Whittaker 모형에서 $K$ 불변 벡터에 대응하는 함수를 $W^\circ$ 라 하고 $W^\circ(1)=1$ 로 정규화한다. 모듈러스 지표는 다음과 같다.

$$
\delta_B(\varpi^\lambda)=\prod_{i\lt j}q^{-(\lambda_i-\lambda_j)}
$$

## 공식

> **정리 (Casselman–Shalika, 1980).** 위의 설정에서 $\lambda\in\mathbb Z^n$ 에 대해
> $$
> W^\circ(\varpi^\lambda)=
> \begin{cases}
> \delta_B^{1/2}(\varpi^\lambda)\thinspace s_\lambda(\alpha_1,\dots,\alpha_n), & \lambda_1\ge\lambda_2\ge\dots\ge\lambda_n\cr
> 0, & \text{그 밖에}
> \end{cases}
> $$

$s_\lambda$ 는 Schur 다항식이고 $\lambda_n\lt 0$ 이어도 무방하다. $\det$ 로 나누는 정의가 Laurent 다항식을 준다.

$n=2$ 이고 $\lambda=(m,0)$ 이면 $\delta_B^{1/2}=q^{-m/2}$ 이고

$$
W^\circ\begin{pmatrix}\varpi^m&\cr&1\end{pmatrix}=q^{-m/2}\thinspace\frac{\alpha^{m+1}-\beta^{m+1}}{\alpha-\beta}
$$

이다. 오른쪽 분수가 $\mathrm{Sym}^m$ 의 지표이고 고전적으로는 정규화된 Hecke 고유값 $a_{p^m}/p^{m(k-1)/2}$ 다. 이 공식은 $\mathrm{GL}\_2$ 에서 Hecke 재귀 $a_{p^{m+1}}=a_pa_{p^m}-p^{k-1}a_{p^{m-1}}$ 의 일반화다.

# 성질

## Cauchy 항등식과 $L$ 인자

Rankin–Selberg 국소 적분의 비분기 계산은 $t=q^{-s}$ 로 두면 다음과 같다.

$$
\Psi(s,W^\circ,W'^\circ)=\sum_{\lambda\ \text{지배적}}s_\lambda(\alpha)\thinspace s_\lambda(\beta)\thinspace t^{|\lambda|}
$$

$\delta_B^{1/2}$ 인자들은 측도와 상쇄된다. 여기에 Schur 다항식의 **Cauchy 항등식**

$$
\sum_\lambda s_\lambda(x)s_\lambda(y)=\prod_{i,j}\frac1{1-x_iy_j}
$$

을 $x_i=\alpha_it$ , $y_j=\beta_j$ 로 쓰면 오른쪽이 다음이 된다.

$$
\prod_{i,j}\frac1{1-\alpha_i\beta_jq^{-s}}=\det\bigl(1-(A_\pi\otimes A_{\pi'})q^{-s}\bigr)^{-1}=L(s,\pi\times\pi')
$$

국소 $L$ 인자가 텐서곱 행렬의 특성다항식인 이유가 Cauchy 항등식이다. 자기동형 쪽 적분과 Galois 쪽 $L$ 인자가 같은 수가 되는 다리가 조합론적 항등식 하나다.

$t$ 가 작을수록, 곧 $\mathrm{Re}(s)$ 가 클수록 수렴이 빠르다. Rankin–Selberg 적분이 $\mathrm{Re}(s)$ 가 클 때만 수렴하고 나머지 영역을 해석적 접속으로 얻는 사정의 산술적 그림자다.

## 일반화의 범위

공식은 분할 가능한 임의의 환원군 $G$ 로 일반화된다. Schur 다항식 자리에 $\widehat G$ 의 기약지표가 들어가고 증명 구조가 같다.

$$
W^\circ(\varpi^\lambda)=\delta_B^{1/2}(\varpi^\lambda)\thinspace\chi_\lambda(A_\pi),\qquad\chi_\lambda=\widehat G\ \text{의 기약지표}
$$

$\mathrm{GL}\_n$ 에서 $\chi_\lambda=s_\lambda$ 이고 [Weyl 지표 공식](weyl-character-formula.md)이 그 bialternant 표현을 준다.

분기 자리에서는 명시적 공식이 없고 등급이 있는 벡터에 대한 부분적 결과만 있다. 메타플렉틱 덮개군에서는 Whittaker 모형의 유일성이 실패하고 공식의 자리에 Weyl 군 다중 Dirichlet 급수가 들어온다. 그 합이 결정 기저의 조합론과 이어지는 것이 최근 연구의 한 줄기다.

# 활용

## Gelfand–Tsetlin 조합론

Schur 다항식의 대각표 표시를 쓰면 Whittaker 값이 세는 문제가 된다.

$$
W^\circ(\varpi^\lambda)=\delta_B^{1/2}\sum_{T\in\mathrm{SSYT}(\lambda,n)}\alpha^{T}
$$

$p$ 진 적분의 값이 모양 $\lambda$ 의 반표준 대각표를 무게로 세는 것과 같다. Gelfand–Tsetlin 패턴으로 옮기면 각 패턴이 Iwasawa 분해의 한 조각에 대응하고, Whittaker 적분을 구획으로 나눠 계산하면 패턴이 나온다는 증명도 있다.

## 기하적 판본

기하학적 Satake 의 언어로 옮기면 공식이 층의 코호몰로지 계산이 된다. Whittaker 조건을 층 쪽에서 부과하면 아핀 Grassmann 다양체의 $N$ 궤도와 $G(\mathcal O)$ 궤도의 교차가 나오고, 그 교차의 점 개수가 지표의 무게 중복도를 준다. Mirković–Vilonen 순환이 무게 공간의 기저를 주는 그림의 함수 수준 판본이다.

## 적분 표현의 설계

Langlands 강령의 적분 표현은 거의 전부 이 공식을 거친다. 국소 적분을 세우고 비분기 자리에서 값을 계산해 예상한 $L$ 인자인지 확인하고 나면, 나머지 유한개의 분기 자리를 따로 다루고 전역 $L$ 함수의 해석적 성질을 적분에서 얻는다.

- Rankin–Selberg $L$ 함수 $L(s,\pi\times\pi')$ 는 Cauchy 항등식에서 나온다.
- [Godement–Jacquet 적분](godement-jacquet.md)의 표준 $L$ 함수는 같은 계산의 단순한 판이다.
- 외부 제곱과 대칭 제곱 $L$ 함수에는 Littlewood 항등식이 대응한다.

어느 $L$ 함수를 얻느냐가 어느 대칭함수 항등식을 쓰느냐로 결정된다.

[^1]: W. Casselman, J. Shalika, *The unramified principal series of p-adic groups II: the Whittaker function*, Compositio Math. **41** (1980), 207–231. 표준 서술과 $\mathrm{GL}\_n$ 의 Rankin–Selberg 계산은 D. Bump, *Automorphic Forms and Representations* (1997) 4.6 절과 J. Cogdell 의 강의록 *L-functions and converse theorems for GL(n)*.
[^2]: Gelfand–Tsetlin 쪽 해석과 메타플렉틱 일반화는 B. Brubaker, D. Bump, S. Friedberg, *Weyl Group Multiple Dirichlet Series: Type A Combinatorial Theory*, Ann. of Math. Studies **175** (2011). 기하적 판은 I. Frenkel, D. Gaitsgory, K. Vilonen 계열의 작업과 Mirković–Vilonen 이론.

# 연관 문서

## 선수지식

- [Whittaker 모형과 중복도 1](whittaker-models.md)
- [Schur 다항식과 대칭함수](schur-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics #group_theory
