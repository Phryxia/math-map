# Littlewood–Richardson 규칙

# 개요

**Littlewood–Richardson 규칙(Littlewood–Richardson rule)** 은 두 [Schur 다항식](schur-polynomials.md)의 곱을 Schur 다항식들의 합으로 풀 때 각 항의 계수를 칸 채우기의 개수로 세는 규칙이다. 칸이 $2,1$ 개인 두 줄짜리 Young 도형의 $s_{(2,1)}$ 에 칸 하나의 $s_{(1)}$ 을 곱하면, 도형에 칸 하나를 붙이는 세 방법에 따라 $s_{(2,1)}s_{(1)}=s_{(3,1)}+s_{(2,2)}+s_{(2,1,1)}$ 이다. 붙이는 도형이 칸 여러 개이면 같은 결과 도형이 여러 번 나올 수 있어, 몇 번 나오는지가 문제다. 규칙은 붙인 칸에 수를 채우는 방법 가운데 정해진 순서 조건을 만족하는 것만 세어 그 횟수를 준다.

# 직관

칸 하나짜리 도형에 칸 하나를 붙이면 오른쪽에 붙여 $(2)$ 가 되거나 아래에 붙여 $(1,1)$ 이 되므로 $s_{(1)}s_{(1)}=s_{(2)}+s_{(1,1)}$ 이다. 칸 하나를 붙일 때는 결과 도형마다 방법이 하나씩이다. 칸 여러 개로 된 도형 $\mu$ 를 붙이면 같은 결과가 여러 번 나온다. $s_{(2,1)}s_{(2,1)}$ 을 전개하면 $s_{(3,2,1)}$ 의 계수가 $2$ 다.

이 $2$ 를 세는 방법은 다음과 같다. $(3,2,1)$ 에서 $(2,1)$ 을 빼면 칸 $(1,3)$, $(2,2)$, $(3,1)$ 이 남는다. 붙이는 도형 $(2,1)$ 의 첫 행에서 $1$ 을 두 개, 둘째 행에서 $2$ 를 한 개 가져와 남은 칸에 채운다. 채운 수를 위 행부터 각 행은 오른쪽에서 왼쪽으로 읽을 때, 읽는 도중 언제나 $1$ 이 $2$ 보다 적지 않아야 한다. 첫 칸 $(1,3)$ 에 $2$ 를 넣으면 첫 글자부터 어긋나므로, $2$ 는 $(2,2)$ 나 $(3,1)$ 에 들어가고 채우기는 $2$ 개다.

이 규칙에서 $\lambda$ 는 빼는 도형이고 $\mu$ 는 채우는 수의 개수라서 두 도형의 역할이 다르다. 그래서 곱의 교환법칙에서 나오는 $c^\nu_{\lambda\mu}=c^\nu_{\mu\lambda}$ 가 이 셈에서는 보이지 않는다. A. Knutson 과 T. Tao 는 같은 수를 삼각형 위 수 배열의 개수로 세는 모형을 도입했다.[^1]

한 변에 격자점이 $n+1$ 개 놓인 삼각형의 꼭짓점마다 정수를 놓는다. 작은 삼각형 둘을 붙인 모든 마름모에서 짧은 대각선 양 끝의 합이 긴 대각선 양 끝의 합보다 크거나 같게 한다.

$$
(\text{짧은 대각선 양 끝의 합})\thickspace\ge\thickspace(\text{긴 대각선 양 끝의 합})
$$

세 변을 따라 이웃한 값의 차를 읽어 $\lambda$ 와 $\mu$ 와 $\nu$ 를 지정하면 그런 배열의 개수가 정확히 $c^\nu_{\lambda\mu}$ 다.

이렇게 세면 $\lambda$ 와 $\mu$ 가 삼각형의 두 변으로 대등하게 들어가므로 둘을 바꾸는 것이 삼각형을 뒤집는 것이고, $c^\nu_{\lambda\mu}=c^\nu_{\mu\lambda}$ 가 그림에서 보인다. 조건이 부등식뿐이라 $\lambda,\mu,\nu$ 를 $N$ 배 하면 부등식이 정하는 영역도 $N$ 배로 팽창한다.

# 정의

## Littlewood–Richardson 계수

분할 $\lambda\subseteq\nu$ 에 대해 $\nu$ 의 Young 도형에서 $\lambda$ 의 칸을 뺀 칸들을 비틀린 도형(skew shape) $\nu/\lambda$ 라 한다. 그 칸에 양의 정수를 채워 행은 왼쪽에서 오른쪽으로 줄지 않고 열은 위에서 아래로 늘게 하고, 수 $i$ 를 $\mu_i$ 개 쓴 것을 내용 $\mu$ 의 반표준 채우기라 한다. 채운 수를 위 행부터 각 행은 오른쪽에서 왼쪽으로 읽은 낱말이, 어느 처음 부분에서도 $i$ 의 개수가 $i+1$ 의 개수 이상이면 **격자 낱말(lattice word)** 이라 한다.

**Littlewood–Richardson 계수(Littlewood–Richardson coefficient)** $c^\nu_{\lambda\mu}$ 는 Schur 다항식의 곱의 전개

$$
s_\lambda s_\mu=\sum_\nu c^\nu_{\lambda\mu}\thinspace s_\nu
$$

의 계수다. Littlewood–Richardson 규칙은 $c^\nu_{\lambda\mu}$ 가 $\nu/\lambda$ 의 내용 $\mu$ 인 반표준 채우기 가운데 읽은 낱말이 격자 낱말인 것의 개수라는 진술이다. 직관 절의 계산은 $c^{(3,2,1)}\_{(2,1),(2,1)}=2$ 를 준다.

## hive

$\Delta_n$ 을 한 변에 $n+1$ 개의 격자점이 놓인 삼각형이라 하자. 함수 $h\colon\Delta_n\cap\mathbb Z^2\to\mathbb R$ 가 **hive** 라 함은, 인접한 두 작은 삼각형이 이루는 모든 마름모 $(a,b,c,d)$ ($b,c$ 가 짧은 대각선)에 대해

$$
h(b)+h(c)\thickspace\ge\thickspace h(a)+h(d)
$$

가 성립하는 것이다. 세 종류의 마름모가 있으므로 부등식도 세 묶음이다.

경계 조건은 이렇게 준다. 세 변을 따라가며 이웃한 값의 차를 읽으면 각각 $\lambda$ 와 $\mu$ 와 $\nu$ 의 성분이 되도록 $h$ 를 규격화한다. 그러면

$$
c^\nu_{\lambda\mu}=\char35{}\bigl\lbrace\text{경계가 }(\lambda,\mu,\nu)\text{ 인 정수 hive}\bigr\rbrace
$$

## honeycomb

**honeycomb** 은 평면 위의 선분과 반직선으로 이루어진 [그래프](graphs.md)로, 모든 변이 세 방향 중 하나이고 각 꼭짓점에서 만나는 세 변의 방향 벡터 합이 $0$ 이다. 세 방향의 반직선 좌표가 $\lambda,\mu,\nu$ 를 준다. hive 의 오목 함수와 honeycomb 은 [볼록 공액](convex-conjugate.md)(Legendre 변환)으로 대응하며, 이 쌍대성 아래 hive 의 부등식이 honeycomb 의 변 길이가 음이 아니라는 조건이 된다.

## Horn 부등식

크기 $n$ 의 Horn 삼중항(Horn triple) 집합 $T^n_r$ 을 재귀로 정의한다. $|I|=|J|=|K|=r$ 인 부분집합 삼중항 $(I,J,K)$ 가 $T^n_r$ 에 속하는 것은

$$
\sum_{i\in I}i+\sum_{j\in J}j=\sum_{k\in K}k+\binom{r+1}{2}
$$

이고, 모든 $s\lt r$ 과 $(F,G,H)\in T^r_s$ 에 대해

$$
\sum_{f\in F}i_f+\sum_{g\in G}j_g\le\sum_{h\in H}k_h+\binom{s+1}{2}
$$

가 성립하는 경우다. 정의가 자기 자신을 더 작은 크기에서 부르므로, 부등식의 목록이 $n$ 에 대해 재귀적으로 자란다.

## Horn 문제의 답

$\alpha,\beta,\gamma$ 가 $n$ 개씩의 내림차순 [실수](real-numbers.md)열이라 하자. $A+B=C$ 이고 [고윳값](eigenvalues.md)이 각각 $\alpha,\beta,\gamma$ 인 에르미트 [행렬](matrices.md)(Hermitian matrix)이 존재할 필요충분조건은

$$
\sum\gamma_k=\sum\alpha_i+\sum\beta_j\quad\text{이고}\quad
\sum_{k\in K}\gamma_k\le\sum_{i\in I}\alpha_i+\sum_{j\in J}\beta_j\thickspace\bigl(\forall(I,J,K)\in T^n_r,\thinspace\forall r\lt n\bigr)
$$

이다. 정수열인 경우 이 조건은 $c^\gamma_{\alpha\beta}\ne0$ 과 동치다. 이 조건으로 가능한 고윳값을 정하는 문제를 Horn 문제(Horn problem)라 한다.

A. Horn 은 1962 년에 이 부등식 계를 제시하고 완전하리라 추측했다. 이것이 Horn 추측(Horn's conjecture)이다. Klyachko 가 $\gamma$ 가 가능한 것과 $c^{N\gamma}\_{N\alpha,N\beta}\ne0$ 인 $N$ 이 있는 것이 동치임을 기하 불변식론(geometric invariant theory)으로 증명했고, 포화 정리가 그 $N$ 을 없애 추측이 정리가 되었다. 선형대수의 스펙트럼 문제와 표현론의 [텐서곱](tensor-products.md) 분해가 같은 다면체로 기술된다.

# 성질

## 포화 정리

정리(포화 정리, saturation theorem). $c^{N\nu}\_{N\lambda,N\mu}\ne0$ 인 $N\ge1$ 이 있으면 $c^\nu_{\lambda\mu}\ne0$ 이다.[^1]

이 정리는 "hive 다면체가 비어 있지 않으면 정수점을 갖는다" 는 진술이다. 유사한 다면체에서 이런 성질은 흔하지 않다. 예를 들어 $\mathrm{GL}\_n$ 대신 다른 군의 텐서곱 중복도를 세는 다면체는 포화를 만족하지 않고, 실제로 $\mathrm{Sp}\_{2n}$ 에서는 반례가 있다. $\mathrm{GL}\_n$ 에서만 성립하는 이 특수성이 honeycomb 의 극점 구조에서 나온다. 다면체가 비어 있지 않으면 유리 극점이 하나 있고, 극점에 해당하는 honeycomb 은 겹친 선분이 없는 가장 단순한 그래프여서 좌표가 정수다.

## 판정의 복잡도

| 문제 | 복잡도 |
|---|---|
| $c^\nu_{\lambda\mu}$ 의 값 계산 | $\char35{}\mathrm P$ 완전 |
| $c^\nu_{\lambda\mu}\gt 0$ 인지 판정 | 다항시간 |

값을 세는 것은 어렵지만 $0$ 인지 아닌지는 쉽다. 판정이 쉬운 이유가 포화다. 정수점의 존재를 유리점의 존재로 바꾸면 선형계획법이 되고, 부등식의 개수가 다항적이므로 다항시간에 끝난다. 세는 것이 어려운 양의 소멸 여부가 쉬울 수 있다는 이 대비를 기하학적 복잡도 이론(geometric complexity theory, GCT)이 $\mathrm{VP}$ 대 $\mathrm{VNP}$ 를 공략하는 데 쓴다. Mulmuley 와 Sohoni 의 계획은 Kronecker 계수 같은 더 어려운 중복도에서도 같은 구조를 찾는다.

## hive 의 S₃ 대칭

hive 삼각형의 세 변은 대등하다. $\lambda,\mu,\nu$ 를 순환시키거나 뒤집는 조작이 삼각형의 대칭군 $S_3$ 작용에 해당하고, 부등식 계는 그 작용에 불변이다. 따라서

$$
c^\nu_{\lambda\mu}=c^\nu_{\mu\lambda}=c^{\nu^{\negthinspace\ast}}\_{\lambda^{\negthinspace\ast}\mu^{\negthinspace\ast}}
$$

같은 항등식이 부등식 계의 대칭에서 바로 나온다. 원래 규칙에서는 각각 별도의 전단사를 요구하던 것들이다.

## 다른 규칙들과의 관계

Berenstein–Zelevinsky 다면체, Gelfand–Tsetlin 패턴, puzzle 규칙이 모두 같은 수를 세는 서로 다른 모형이다. 그중 Knutson–Tao–Woodward 의 퍼즐(puzzle)은 세 종류의 조각으로 삼각형을 채우는 문제로, [Schubert 계산](schubert-calculus.md)의 구조상수를 다룰 때 특히 편하다. 각 모형이 서로 다른 일반화로 뻗는다. 동변 코호몰로지, $K$ 이론, 양자 코호몰로지가 그 방향이다.

# 활용

## 스펙트럼 문제의 판정

수치선형대수와 양자정보에서 "부분계의 스펙트럼이 주어졌을 때 전체계의 스펙트럼으로 무엇이 가능한가" 를 묻는 일이 잦다. 양자 주변 문제(quantum marginal problem)의 가장 단순한 경우가 Horn 문제이고, 위 부등식 계가 완전한 답을 준다. 판정이 다항시간이므로 실제로 계산해 쓸 수 있다.

## Schubert 셈법의 구조상수

[Grassmann 다양체](grassmannian.md) $\mathrm{Gr}(k,n)$ 의 코호몰로지 곱셈 구조상수가 Littlewood–Richardson 계수이므로, hive 모형은 Schubert 순환의 교차수를 다면체의 정수점으로 세는 방법이 된다. 교차수가 음이 아니라는 기하적 사실이 부등식 계의 해 개수라는 형태로 다시 나타난다.

## 표현론의 포화 현상

$c^{N\nu}\_{N\lambda,N\mu}$ 를 $N$ 의 함수로 보면 다면체의 Ehrhart 준다항식(Ehrhart quasi-polynomial)이 된다. 곧 텐서곱 중복도의 점근 거동이 다면체의 부피로 정해진다. 이 관점이 반군 $\lbrace(\lambda,\mu,\nu):c^\nu_{\lambda\mu}\ne0\rbrace$ 의 유한생성성(Klyachko, Belkale)과 그 반군의 면 구조를 다루는 이론으로 이어진다.

[^1]: A. Knutson, T. Tao, *The honeycomb model of* $\mathrm{GL}\_n(\mathbb C)$ *tensor products I: proof of the saturation conjecture*, J. Amer. Math. Soc. **12** (1999), 1055–1090. 대칭성과 다면체 구조는 같은 저자와 C. Woodward 의 후속 논문에 있다. Horn 문제 전체의 개관은 W. Fulton, *Eigenvalues, invariant factors, highest weights, and Schubert calculus*, Bull. Amer. Math. Soc. **37** (2000).

# 연관 문서

## 선수지식

- [Schur 다항식](schur-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algebra #optimization
