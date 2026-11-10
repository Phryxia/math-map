# Casselman–Shalika 공식

# 개요

**Casselman–Shalika 공식(Casselman–Shalika formula)** 은 비분기 자리의 구면 Whittaker 함수의 값을 [Schur 다항식](schur-polynomials.md)으로 주는 공식이다.[^1] $\mathrm{GL}\_n$ 의 [Whittaker 모형](whittaker-models.md)으로 $L$ 함수의 국소 인자를 계산하려면 대각행렬 $\varpi^\lambda$ 마다 Whittaker 함수의 값을 알아야 하고, 이 값은 $p$ 진군 위의 적분으로 정의된다. 공식은 그 값이 Satake 매개변수에서 계산한 Schur 다항식 $s_\lambda$ 에 간단한 인자를 곱한 것임을 보여, 적분을 대각표 세기로 바꾼다.

# 직관

$\mathrm{GL}\_2$ 의 [Whittaker 모형](whittaker-models.md)에서 비분기 자리의 $L$ 인자를 계산하려면 구면(spherical) Whittaker 함수 $W^\circ$ 의 값을 대각행렬 $\mathrm{diag}(\varpi^m,1)$ 마다 알아야 한다. 이 값은 $p$ 진군 위의 적분으로 정의된다. Satake 매개변수(Satake parameter)를 $\alpha,\beta$ 라 하면 적분을 계산한 결과는 다음과 같다.

$$
W^\circ(1)=1,\qquad W^\circ\begin{pmatrix}\varpi&\cr&1\end{pmatrix}=q^{-1/2}(\alpha+\beta),\qquad W^\circ\begin{pmatrix}\varpi^2&\cr&1\end{pmatrix}=q^{-1}(\alpha^2+\alpha\beta+\beta^2)
$$

$q^{-m/2}$ 을 떼면 남는 것은 $\alpha^m+\alpha^{m-1}\beta+\cdots+\beta^m$ 이고, 이것은 [Schur 다항식](schur-polynomials.md) $s_{(m,0)}(\alpha,\beta)$ 다. $\mathrm{GL}\_n$ 에서도 같은 일이 일어나서, 적분값이 Schur 다항식에 인자 하나를 곱한 것이 된다. 그래서 적분 계산이 Schur 다항식의 계산, 곧 대각표 세기로 바뀐다.

# 정의

## 국소체와 Borel 부분군

$F$ 를 비아르키메데스 국소체, $\mathcal O$ 를 정수환, $\varpi$ 를 소원, $q=|\mathcal O/\varpi|$ 라 하자. $G=\mathrm{GL}\_n(F)$ 와 $K=\mathrm{GL}\_n(\mathcal O)$ 를 두고 $B=TN$ 을 상삼각 Borel 부분군이라 한다. $\lambda\in\mathbb Z^n$ 에 대해 $\varpi^\lambda=\mathrm{diag}(\varpi^{\lambda_1},\dots,\varpi^{\lambda_n})$ 로 쓴다. $\lambda_1\ge\dots\ge\lambda_n$ 이면 $\lambda$ 를 지배적 여무게(dominant coweight)라 한다.

$\pi$ 를 비분기 기약 허용가능 표현(unramified irreducible admissible representation)이라 하고 그 Satake 매개변수를 $A_\pi=\mathrm{diag}(\alpha_1,\dots,\alpha_n)$ 이라 한다. $\psi$ 를 $\mathcal O$ 에서 자명하고 $\varpi^{-1}\mathcal O$ 에서 자명하지 않은 가법 지표로 두고, $\psi_N(u)=\psi(u_{12}+\cdots+u_{n-1,n})$ 을 $N$ 의 비퇴화 지표(non-degenerate character)라 하자.

## 구면 Whittaker 함수

$\pi$ 의 Whittaker 모형에서 $K$ 불변 벡터에 대응하는 함수를 $W^\circ(1)=1$ 로 정규화한 것을 **구면 Whittaker 함수(spherical Whittaker function)** $W^\circ$ 라 한다. $W^\circ(ugk)=\psi_N(u)W^\circ(g)$ $(u\in N,\ k\in K)$ 이다.

**모듈러스 지표(modulus character)** 는 다음과 같다.

$$
\delta_B(\varpi^\lambda)=\prod_{i\lt j}q^{-(\lambda_i-\lambda_j)}
$$

$n=2$, $\lambda=(m,0)$ 이면 $\delta_B(\varpi^\lambda)=q^{-m}$ 이고, 직관 절의 인자 $q^{-m/2}$ 가 $\delta_B^{1/2}(\varpi^\lambda)$ 다.

# 성질

## 값이 정해지는 자리

Iwasawa 분해(Iwasawa decomposition) $G=NTK$ 에서 $W^\circ$ 는 $T$ 위의 값으로 결정되고, $T\cap K$ 불변이므로 $\varpi^\lambda$ 위의 값으로 결정된다. $\lambda$ 가 지배적이 아니면 $\lambda_i\lt\lambda_{i+1}$ 인 $i$ 가 있고, $\psi(x)\ne1$ 인 $x\in\varpi^{-1}\mathcal O$ 로 $u=1+xE_{i,i+1}$ 을 잡으면 $\varpi^{-\lambda}u\varpi^\lambda\in K$ 이므로 $\psi(x)W^\circ(\varpi^\lambda)=W^\circ(u\varpi^\lambda)=W^\circ(\varpi^\lambda)$ 이고 $W^\circ(\varpi^\lambda)=0$ 이다.

## Casselman–Shalika 공식

Casselman–Shalika 공식은 다음 진술이다.[^1] $\lambda\in\mathbb Z^n$ 에 대해

$$
W^\circ(\varpi^\lambda)=
\begin{cases}
\delta_B^{1/2}(\varpi^\lambda)\thinspace s_\lambda(\alpha_1,\dots,\alpha_n), & \lambda_1\ge\lambda_2\ge\dots\ge\lambda_n\cr
0, & \text{그 밖에}
\end{cases}
$$

이다. $s_\lambda$ 는 Schur 다항식이고 $\lambda_n\lt 0$ 이어도 된다. 그때는 $\det$ 의 거듭제곱으로 나누어 Laurent 다항식이 된다.

$n=2$, $\lambda=(m,0)$ 이면

$$
W^\circ\begin{pmatrix}\varpi^m&\cr&1\end{pmatrix}=q^{-m/2}\thinspace\frac{\alpha^{m+1}-\beta^{m+1}}{\alpha-\beta}
$$

이고 직관 절의 세 값이 $m=0,1,2$ 인 경우다. 오른쪽 분수는 $\mathrm{Sym}^m$ 의 지표이고, 무게 $k$ 의 고윳형식에서는 정규화된 Hecke [고윳값](eigenvalues.md) $a_{p^m}/p^{m(k-1)/2}$ 다. $m$ 에 대한 재귀식이 Hecke 재귀 $a_{p^{m+1}}=a_pa_{p^m}-p^{k-1}a_{p^{m-1}}$ 다.

## 증명의 요지

Casselman 과 Shalika 는 $W^\circ$ 를 유도표현 $\mathrm{Ind}\_B^G$ 의 Jacquet 적분으로 쓰고, 교차 작용소(intertwining operator)의 계산으로 Weyl 군 $W$ 위의 합 $\sum_{w\in W}$ 꼴을 얻는다. 이 합이 Weyl 분모 공식으로 정리되어 bialternant

$$
\frac{\det(\alpha_i^{\lambda_j+n-j})}{\det(\alpha_i^{n-j})}=s_\lambda(\alpha_1,\dots,\alpha_n)
$$

가 된다.

## Cauchy 항등식과 L 인자

Rankin–Selberg 국소 적분의 비분기 계산은 $t=q^{-s}$ 로 두면 다음과 같다.

$$
\Psi(s,W^\circ,W'^\circ)=\sum_{\lambda\ \text{지배적}}s_\lambda(\alpha)\thinspace s_\lambda(\beta)\thinspace t^{|\lambda|}
$$

$\delta_B^{1/2}$ 인자들은 측도와 상쇄된다. 여기에 Schur 다항식의 Cauchy 항등식(Cauchy identity)

$$
\sum_\lambda s_\lambda(x)s_\lambda(y)=\prod_{i,j}\frac1{1-x_iy_j}
$$

을 $x_i=\alpha_it$ , $y_j=\beta_j$ 로 쓰면 오른쪽이 다음이 된다.

$$
\prod_{i,j}\frac1{1-\alpha_i\beta_jq^{-s}}=\det\bigl(1-(A_\pi\otimes A_{\pi'})q^{-s}\bigr)^{-1}=L(s,\pi\times\pi')
$$

Cauchy 항등식으로 국소 적분이 [텐서곱](tensor-products.md) [행렬](matrices.md) $A_\pi\otimes A_{\pi'}$ 의 특성다항식의 역수와 같아진다.

이 급수는 $\vert t\vert$ 가 작을 때, 곧 $\mathrm{Re}(s)$ 가 클 때 수렴한다. 전역 [Rankin–Selberg 적분](rankin-selberg.md)도 $\mathrm{Re}(s)$ 가 클 때 수렴하고, 나머지 영역은 해석적 접속으로 얻는다.

## 일반화의 범위

공식은 분할 환원군(split reductive group) $G$ 로 일반화된다. Schur 다항식 자리에 $\widehat G$ 의 기약지표가 들어가고 증명 구조가 같다.

$$
W^\circ(\varpi^\lambda)=\delta_B^{1/2}(\varpi^\lambda)\thinspace\chi_\lambda(A_\pi),\qquad\chi_\lambda=\widehat G\ \text{의 기약지표}
$$

$\mathrm{GL}\_n$ 에서 $\chi_\lambda=s_\lambda$ 이고 [Weyl 지표 공식](weyl-character-formula.md)이 그 bialternant 표현을 준다.

이 공식은 비분기 자리의 구면 벡터에 대한 것이다. 메타플렉틱 덮개군(metaplectic cover)에서는 Whittaker 모형의 유일성이 실패하고[^2] 공식 대신 Weyl 군 다중 [Dirichlet 급수](dirichlet-series.md)(Weyl group multiple Dirichlet series)가 쓰인다. 그 급수의 계수는 결정 기저(crystal basis)의 조합론으로 기술된다.

# 활용

## Gelfand–Tsetlin 조합론

Schur 다항식을 반표준 Young 대각표(semistandard Young tableau, SSYT)의 합으로 쓰면 Whittaker 값이 대각표를 세는 문제가 된다.

$$
W^\circ(\varpi^\lambda)=\delta_B^{1/2}\sum_{T\in\mathrm{SSYT}(\lambda,n)}\alpha^{T}
$$

$p$ 진 적분의 값이 모양 $\lambda$ 의 반표준 대각표를 무게로 세는 것과 같다. Gelfand–Tsetlin 패턴(Gelfand–Tsetlin pattern)으로 옮기면 각 패턴이 Iwasawa 분해의 한 조각에 대응하고, Whittaker 적분을 구획으로 나눠 계산하면 패턴이 나온다는 증명도 있다.

## 기하적 판본

[기하학적 Satake 대응](geometric-satake.md)으로 옮기면 공식이 [층](sheaves.md)의 [코호몰로지](cohomology.md) 계산이 된다. Whittaker 조건을 층 쪽에서 부과하면 아핀 Grassmann 다양체(affine Grassmannian)의 $N$ 궤도와 $G(\mathcal O)$ 궤도의 교차가 나오고, 그 교차의 점 개수가 지표의 무게 중복도를 준다. Casselman–Shalika 공식은 Mirković–Vilonen 순환(Mirković–Vilonen cycle)이 무게 공간의 기저를 준다는 기하적 결과를 함수 수준에서 적은 것이다.

## 적분 표현의 설계

[Langlands 강령](langlands-program.md)의 적분 표현에서 비분기 자리의 계산에 이 공식을 사용한다. 국소 적분을 세우고 비분기 자리에서 값을 계산해 예상한 $L$ 인자인지 확인하고 나면, 나머지 유한개의 분기 자리를 따로 다루고 전역 $L$ 함수의 해석적 성질을 적분에서 얻는다.

- Rankin–Selberg $L$ 함수 $L(s,\pi\times\pi')$ 는 Cauchy 항등식에서 나온다.
- [Godement–Jacquet 적분](godement-jacquet.md)의 표준 $L$ 함수는 같은 계산의 단순한 판이다.
- 외부 제곱과 대칭 제곱 $L$ 함수에는 Littlewood 항등식(Littlewood identity)이 대응한다.

[^1]: W. Casselman, J. Shalika, *The unramified principal series of p-adic groups II: the Whittaker function*, Compositio Math. **41** (1980), 207–231. 표준 서술과 $\mathrm{GL}\_n$ 의 Rankin–Selberg 계산은 D. Bump, *Automorphic Forms and Representations* (1997) 4.6 절과 J. Cogdell 의 강의록 *L-functions and converse theorems for GL(n)*.
[^2]: Gelfand–Tsetlin 쪽 해석과 메타플렉틱 일반화는 B. Brubaker, D. Bump, S. Friedberg, *Weyl Group Multiple Dirichlet Series: Type A Combinatorial Theory*, Ann. of Math. Studies **175** (2011). 기하적 판은 I. Frenkel, D. Gaitsgory, K. Vilonen 계열의 작업과 Mirković–Vilonen 이론.

# 연관 문서

## 선수지식

- [Whittaker 모형과 중복도 1](whittaker-models.md)
- [Schur 다항식](schur-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics #group_theory
