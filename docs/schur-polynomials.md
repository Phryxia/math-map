# Schur 다항식

# 개요

**Schur 다항식(Schur polynomial)** $s_\lambda$ 는 변수의 자리를 바꾸어도 그대로인 다항식 가운데, [행렬](matrices.md)군의 기약표현마다 하나씩 대응하는 것이다. 세 변수에서 $s_{(2)}=x^2+y^2+z^2+xy+yz+zx$ 이고 $s_{(1,1)}=xy+yz+zx$ 이며, $(x+y+z)^2=s_{(2)}+s_{(1,1)}$ 이다. 이 등식은 $3$ 차원 공간을 자기 자신과 [텐서곱](tensor-products.md)한 $9$ 차원 표현이 $6$ 차원과 $3$ 차원 기약표현으로 갈라진다는 진술과 같다. 더 큰 표현의 곱이 어느 기약표현으로 갈라지는지는 Schur 다항식의 곱을 Schur 다항식으로 전개해 구하고, 그 계수는 칸에 수를 채운 표를 세어 얻는다.

# 직관

고윳값이 $x,y$ 인 $2\times 2$ 가역행렬 $g$ 가 $\mathbb C^2$ 에 작용하면 대각합은 $x+y$ 다. $g$ 가 $\mathbb C^2\otimes\mathbb C^2$ 에 작용하면 대각합은 $(x+y)^2=x^2+2xy+y^2$ 이다. 이 $4$ 차원 공간은 $u\otimes v+v\otimes u$ 꼴이 펼치는 $3$ 차원 부분공간과 $u\otimes v-v\otimes u$ 꼴이 펼치는 $1$ 차원 부분공간으로 나뉘고, 두 부분공간에서 $g$ 의 대각합은 $x^2+xy+y^2$ 과 $xy$ 다. 그래서 $(x+y)^2=(x^2+xy+y^2)+xy$ 다.

더 나눌 수 없는 표현마다 대각합으로 대칭다항식 하나가 정해지고, 이것이 Schur 다항식이다. [Weyl 지표 공식](weyl-character-formula.md)은 이것을 두 행렬식의 비로 준다. $x^2+xy+y^2$ 은 $\det\begin{pmatrix}x^3&1\cr y^3&1\end{pmatrix}/\det\begin{pmatrix}x&1\cr y&1\end{pmatrix}=(x^3-y^3)/(x-y)$ 이다.

같은 다항식을 세어서도 얻는다. 가로로 놓인 칸 두 개에 $1$ 과 $2$ 를 왼쪽에서 오른쪽으로 줄어들지 않게 채우는 방법은 $11$, $12$, $22$ 의 셋이다. $1$ 을 $x$ 로, $2$ 를 $y$ 로 바꾸어 곱하면 $x^2$, $xy$, $y^2$ 이고, 더하면 $x^2+xy+y^2$ 이다. 세어서 얻는 식에서는 계수가 음이 아닌 정수라는 것이 바로 보인다.

# 정의

## 분할과 대각표

$\lambda=(\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_\ell\gt 0)$ 을 **분할(partition)** 이라 하고, $i$ 번째 행에 $\lambda_i$ 개의 칸을 왼쪽 정렬한 그림을 Young 도형(Young diagram)이라 한다. 그 칸에 $\lbrace 1,\dots,n\rbrace$ 의 값을 채워

- 각 행이 왼쪽에서 오른쪽으로 약증가
- 각 열이 위에서 아래로 강증가

하면 **반표준 Young 대각표(semistandard Young tableau, SSYT)** 이고, 그 전체를 $\mathrm{SSYT}(\lambda,n)$ 으로 쓴다. 대각표 $T$ 의 무게는 $x^T=\prod_{\text{칸}}x_{T(\text{칸})}$ 이고, 값 $i$ 가 $\mu_i$ 번 쓰였을 때 $\mu=(\mu_1,\dots,\mu_n)$ 을 $T$ 의 내용(content)이라 한다.

$\lambda=(2,1)$, $n=2$ 이면 첫 열은 위에서부터 $1,2$ 로 정해지고 첫 행의 둘째 칸은 $1$ 이나 $2$ 다. 대각표는 둘이고 무게는 $x_1^2x_2$ 와 $x_1x_2^2$ 이다.

## Schur 다항식

$\ell(\lambda)\le n$ 인 분할 $\lambda$ 에 대해 **Schur 다항식** 은

$$
s_\lambda(x_1,\dots,x_n)=\frac{\det\negthinspace\big(x_i^{\lambda_j+n-j}\big)\_{1\le i,j\le n}}{\det\negthinspace\big(x_i^{n-j}\big)\_{1\le i,j\le n}}
$$

이다. 분모는 Vandermonde 행렬식(Vandermonde determinant)이고, 분자와 분모가 모두 교대다항식이라 이 식을 bialternant 공식(bialternant formula)이라 한다. $\ell(\lambda)\lt n$ 이면 $\lambda_j=0$ 을 채운다. $\lambda=(2,1)$, $n=2$ 이면 분자가 $x_1^3x_2-x_1x_2^3$ 이고 분모가 $x_1-x_2$ 라서 $s_{(2,1)}=x_1^2x_2+x_1x_2^2$ 이다.

## Kostka 수

$s_\lambda=\sum_\mu K_{\lambda\mu}x^\mu$ 로 전개한 계수 $K_{\lambda\mu}$ 를 **Kostka 수(Kostka number)** 라 한다. 직관 절의 $s_{(2)}(x,y)=x^2+xy+y^2$ 에서 $K_{(2),(1,1)}=1$ 이다.

# 성질

## 세 기술의 일치

[행렬식](determinants.md)의 비로 정의한 $s_\lambda$ 는 다음 두 식과도 같다.

$$
s_\lambda=\sum_{T\in\mathrm{SSYT}(\lambda,n)}x^T=\det\big(h_{\lambda_i-i+j}\big)\_{1\le i,j\le\ell}
$$

여기서 $h_k$ 는 완전 동차 대칭다항식(complete homogeneous symmetric polynomial), 곧 차수 $k$ 의 모든 단항식의 합이며 $h_0=1$ 과 $h_{k\lt 0}=0$ 이다. 첫 등식에서 $K_{\lambda\mu}$ 는 내용이 $\mu$ 인 대각표의 개수이므로 음이 아닌 정수다. 둘째 등식이 Jacobi–Trudi 항등식(Jacobi–Trudi identity)이다. 기본 대칭다항식 $e_k$ 로 쓰는 쌍대 판본도 있다.

$$
s_\lambda=\det\big(e_{\lambda'\_i-i+j}\big),\qquad \lambda'=\text{전치 분할}
$$

$\lambda=(2,1)$ 에서 Jacobi–Trudi 는 $s_{(2,1)}=h_2h_1-h_3$ 이고, 두 변수에서 $h_2h_1-h_3=(x^2+xy+y^2)(x+y)-(x^3+x^2y+xy^2+y^3)=x^2y+xy^2$ 으로 정의 절의 값과 같다.

## 표현론과의 대응

$\ell(\lambda)\le n$ 인 분할과 $\mathrm{GL}\_n(\mathbb C)$ 의 기약 다항식 표현(polynomial representation) $V_\lambda$ 가 일대일로 대응하고, $s_\lambda$ 는 $V_\lambda$ 의 지표다. [Weyl 지표 공식](weyl-character-formula.md)을 $\mathfrak{gl}\_n$ 에 적용하면 분모가 Vandermonde 행렬식이 되어 정의의 bialternant 공식이 나온다. $K_{\lambda\mu}$ 는 $V_\lambda$ 에서 무게 $\mu$ 의 중복도다. $\mathfrak{sl}\_n$ 의 Dynkin 라벨로는

$$
(a_1,\dots,a_{n-1})=(\lambda_1-\lambda_2,\ \lambda_2-\lambda_3,\ \dots,\ \lambda_{n-1}-\lambda_n)
$$

이고, $\dim V_\lambda=s_\lambda(1,\dots,1)=\lvert\mathrm{SSYT}(\lambda,n)\rvert$ 이다. 개요의 $s_{(2)}(1,1,1)=6$ 과 $s_{(1,1)}(1,1,1)=3$ 이 두 기약표현의 차원이다.

## 대칭함수 공간의 기저

차수 $d$ 의 대칭다항식 공간은 분할의 개수 $p(d)$ 만큼의 차원을 갖고, 다음 기저들이 있다.

$$
m_\lambda\ (\text{단항식}),\quad e_\lambda\ (\text{기본}),\quad h_\lambda\ (\text{완전 동차}),\quad p_\lambda\ (\text{거듭제곱합}),\quad s_\lambda
$$

이 가운데 $s_\lambda$ 는 정규직교 기저다. Hall 내적(Hall inner product) $\langle h_\lambda,m_\mu\rangle=\delta_{\lambda\mu}$ 로 정의하면

$$
\langle s_\lambda,s_\mu\rangle=\delta_{\lambda\mu}
$$

이고, 이 내적이 [대칭군](symmetric-groups.md) 표현의 지표 내적과 일치한다. 대칭함수 공간이 모든 대칭군의 표현환을 합친 것과 동형이라는 Frobenius 대응(Frobenius characteristic map)이 여기서 나오고, $s_\lambda$ 가 대칭군 기약표현 $S^\lambda$ 에 대응한다.

$$
\mathrm{ch}:\bigoplus_n R(S_n)\ \xrightarrow{\ \sim\ }\ \Lambda,\qquad [S^\lambda]\mapsto s_\lambda
$$

$\mathrm{GL}\_n$ 의 표현론과 $S_n$ 의 표현론이 같은 대상 위에서 만나는 이 대응이 [Schur–Weyl 쌍대성](schur-weyl-duality.md)의 대칭함수 판본이다.

## Littlewood–Richardson 규칙

두 Schur 다항식의 곱을 전개한 계수가 LR(Littlewood–Richardson) 수다. 직관 절의 $(x+y)^2=s_{(1)}^2=s_{(2)}+s_{(1,1)}$ 에서 $c^{(2)}\_{(1),(1)}=c^{(1,1)}\_{(1),(1)}=1$ 이다.

$$
s_\lambda s_\mu=\sum_\nu c^\nu_{\lambda\mu}s_\nu
$$

표현론에서는 $V_\lambda\otimes V_\mu$ 의 기약 분해 중복도이고, 기하에서는 [Grassmann 다양체](grassmannian.md)의 Schubert 셈법 구조상수다. [Littlewood–Richardson 규칙](littlewood-richardson.md)은 이 수를 세는 조합론적 규칙이다.

> $c^\nu_{\lambda\mu}$ 는 모양이 $\nu/\lambda$ 이고 내용이 $\mu$ 인 반표준 대각표 중 그 읽기 낱말이 격자 낱말(lattice word)인 것의 개수다.

격자 낱말이란 오른쪽부터 읽을 때 항상 $i$ 의 개수가 $i+1$ 의 개수 이상인 낱말이다. 규칙이 유한 열거로 끝나므로 계산이 된다. $c^\nu_{\lambda\mu}$ 가 음이 아님이 규칙에서 바로 나온다. 기하에서 이 양성은 Schubert 순환의 교차수가 실제 교점 개수라는 것이다.

LR 수의 계산 복잡도는 $\char35{}\mathrm P$ 완전이고, 그것이 0 이 아닌지를 판정하는 문제는 다항시간에 가능하다(Knutson–Tao 의 hive 모형과 포화 정리).[^1]

## RSK 대응

행렬식이나 표현론과 무관하게, 순열과 대각표 쌍 사이의 전단사가 있다.

$$
S_n\ \longleftrightarrow\ \bigsqcup_{\lambda\vdash n}\mathrm{SYT}(\lambda)\times\mathrm{SYT}(\lambda)
$$

Robinson–Schensted–Knuth 대응(RSK correspondence)이고, $\mathrm{SYT}(\lambda)$ 는 $1,\dots,n$ 을 한 번씩 쓴 표준 Young 대각표(standard Young tableau)의 집합, $f^\lambda=\lvert\mathrm{SYT}(\lambda)\rvert$ 다. 개수를 세면 $n!=\sum_\lambda(f^\lambda)^2$ 이 나온다. 대칭군의 기약표현 차원의 제곱합이 군의 위수와 같다는 항등식의 조합적 증명이다.

이 대응은 순열의 통계량을 대각표의 모양으로 번역한다. $\lambda_1$ 이 [가장 긴 증가 부분열](longest-increasing-subsequence.md)의 길이이고 $\lambda'\_1$ 이 가장 긴 감소 부분열의 길이다(Schensted 정리). 무작위 순열의 가장 긴 증가 부분열이 $2\sqrt n$ 에 접근하고 요동이 [Tracy–Widom 분포](tracy-widom.md)를 따른다는 결과가 이 대응을 써서 증명되었다.

# 활용

## Schubert 셈법

Grassmann 다양체 $\mathrm{Gr}(k,n)$ 의 [코호몰로지](cohomology.md) 환은 Schubert 순환으로 생성되고, $\sigma_\lambda\mapsto s_\lambda$ 가 환 동형을 준다(단, 큰 분할은 0 으로 보낸다).

$$
H^\ast(\mathrm{Gr}(k,n))\cong\Lambda/(s_\lambda:\lambda\not\subseteq k\times(n-k))
$$

그래서 "일반 위치의 선 넷과 만나는 직선은 몇 개인가" 같은 고전적 셈 문제가 $s_1^4$ 를 전개하는 계산이 된다. LR 수가 곧 교차수다.

## 확률과 적분가능 모형

Schur 다항식은 무작위 대각표, 무작위 분할, 상자 쌓기 모형의 분배함수로 나타난다. Cauchy 항등식

$$
\prod_{i,j}\frac1{1-x_iy_j}=\sum_\lambda s_\lambda(x)s_\lambda(y)
$$

이 그런 모형의 정규화 상수를 준다. 여기서 Schur 측도를 정의하면 행렬식 점 과정이 되고, 상관함수가 행렬식 꼴로 닫혀 점근 분석이 가능하다. 앞의 가장 긴 증가 부분열 문제와 결정 성장 모형(TASEP(totally asymmetric simple exclusion process), 모서리 성장)의 Tracy–Widom 요동이 전부 이 구조 위에서 계산되었다.

## 매개변수 변형

Schur 다항식에 매개변수를 하나나 둘 넣으면 다음 다항식족이 나오고, 각각 다른 이론과 연결된다.

| 대상 | 매개변수 | 연결 |
|---|---|---|
| Hall–Littlewood | $t$ | $p$ 진 군의 구면함수, [Satake 동형](satake-isomorphism.md) |
| Jack | $\alpha$ | 랜덤 행렬의 $\beta$ 앙상블 |
| Macdonald | $q,t$ | 이중 아핀 Hecke 대수, $n!$ 정리 |
| LLT(Lascoux–Leclerc–Thibon) | $q$ | 리본 대각표, 대각조화함수 |

모두 $q,t$ 를 특수화하면 $s_\lambda$ 로 돌아오고, 위의 세 정의가 각각 대응물을 갖는다. Macdonald 다항식의 전개 계수가 음이 아닌 정수라는 추측을 Macdonald 양성 추측이라 하고, Haiman 이 [Hilbert 스킴](hilbert-scheme.md)의 기하로 증명했다.

## 세 정의의 쓰임

계산에 따라 유리한 정의가 다르다.

- 곱 $s_\lambda s_\mu$ 를 전개할 때는 대각표 쪽이 낫다. Littlewood–Richardson 규칙이 나온다.
- 변수의 개수를 무한으로 보내거나 특수화할 때는 Jacobi–Trudi 쪽이 낫다. 행렬식이 변수 개수를 명시적으로 쓰지 않기 때문이다.
- 대칭군 작용을 볼 때는 bialternant 쪽이 낫다. 분자와 분모가 각각 반대칭이라는 구조가 드러난다.

[^1]: 표준 참고서는 I. Macdonald, *Symmetric Functions and Hall Polynomials* (2판, 1995) 1 장과 R. Stanley, *Enumerative Combinatorics II* (1999) 7 장. LR 규칙의 현대적 증명과 hive 모형은 A. Knutson–T. Tao, *The honeycomb model of $\mathrm{GL}\_n(\mathbb C)$ tensor products I*, J. Amer. Math. Soc. 12 (1999). RSK 와 가장 긴 증가 부분열의 점근은 J. Baik–P. Deift–K. Johansson, J. Amer. Math. Soc. 12 (1999). Macdonald 양성은 M. Haiman, J. Amer. Math. Soc. 14 (2001).

# 연관 문서

## 선수지식

- [Weyl 지표 공식](weyl-character-formula.md)
- [대칭함수](symmetric-functions.md)

## 더 알아보기

- [Casselman–Shalika 공식](casselman-shalika.md)
- [Schubert 계산](schubert-calculus.md)
- [Schur–Weyl 쌍대성](schur-weyl-duality.md)
- [Littlewood–Richardson 규칙](littlewood-richardson.md)
- [최장 증가 부분수열](longest-increasing-subsequence.md)

#combinatorics #algebra #linear_algebra
