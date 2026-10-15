# Littlewood–Richardson 규칙

# 개요

[Schur 다항식](schur-polynomials.md)에서 곱의 전개 계수

$$
s_\lambda s_\mu=\sum_\nu c^\nu_{\lambda\mu}\thinspace s_\nu
$$

가 격자 낱말을 세는 규칙으로 주어진다. 규칙은 계수의 값을 주지만 구조는 드러내지 않는다. 대칭성이 그런 예다. 표현론에서 $V_\lambda\otimes V_\mu\cong V_\mu\otimes V_\lambda$ 이므로

$$
c^\nu_{\lambda\mu}=c^\nu_{\mu\lambda}
$$

가 당연한데, 격자 낱말 쪽에서는 $\lambda$ 와 $\mu$ 가 완전히 다른 역할(모양과 내용)을 맡아 이 등식이 전혀 보이지 않는다. 두 집합 사이의 전단사를 손으로 만드는 것은 어려운 문제다.

Knutson 과 Tao 는 계수를 볼록 다면체의 정수점 개수로 다시 쓰는 모형을 도입했다.[^1] hive 는 삼각형 격자 위의 수 배열이고 조건이 부등식뿐이라 대칭성이 다면체의 대칭으로 나타난다. 같은 모형에서 다음이 따라 나온다.

> **포화 정리(saturation theorem).** $c^{N\nu}\_{N\lambda,N\mu}\ne0$ 인 $N\ge1$ 이 있으면 $c^\nu_{\lambda\mu}\ne0$ 이다.

이 한 줄이 Horn 추측을 해결한다. 두 에르미트 행렬의 합의 고윳값이 어떤 값을 가질 수 있는가라는 선형대수 문제가, LR(Littlewood–Richardson) 수가 $0$ 이 아닌 조건과 정확히 같은 것이었기 때문이다.

# 직관

한 변에 격자점이 $n+1$ 개 놓인 삼각형의 꼭짓점마다 정수를 놓는다. 작은 삼각형 둘을 붙인 모든 마름모에서 짧은 대각선 양 끝의 합이 긴 대각선 양 끝의 합보다 크거나 같게 한다.

$$
(\text{짧은 대각선 양 끝의 합})\thickspace\ge\thickspace(\text{긴 대각선 양 끝의 합})
$$

세 변을 따라 이웃한 값의 차를 읽어 $\lambda$ 와 $\mu$ 와 $\nu$ 를 지정하면 그런 배열의 개수가 정확히 $c^\nu_{\lambda\mu}$ 다.

이렇게 세면 $\lambda$ 와 $\mu$ 가 삼각형의 두 변으로 대등하게 들어가므로 둘을 바꾸는 것이 삼각형을 뒤집는 것이고, 격자 낱말 쪽에서 보이지 않던 $c^\nu_{\lambda\mu}=c^\nu_{\mu\lambda}$ 가 그림에서 보인다. 조건이 부등식뿐이라 $\lambda,\mu,\nu$ 를 $N$ 배 하면 부등식이 정하는 영역도 $N$ 배로 팽창한다. 팽창한 영역의 정수점에서 원래 영역의 정수점을 얻는 것이 포화 정리다.

# 정의

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

honeycomb 은 평면 위의 선분과 반직선으로 이루어진 [그래프](graphs.md)로, 모든 변이 세 방향 중 하나이고 각 꼭짓점에서 만나는 세 변의 방향 벡터 합이 $0$ 이다. 세 방향의 반직선 좌표가 $\lambda,\mu,\nu$ 를 준다. hive 의 오목 함수와 honeycomb 은 [볼록 공액](convex-conjugate.md)(Legendre 변환)으로 대응하며, 이 쌍대성 아래 hive 의 부등식이 honeycomb 의 변 길이가 음이 아니라는 조건이 된다.

## Horn 부등식

크기 $n$ 의 Horn 삼중항 집합 $T^n_r$ 을 재귀로 정의한다. $|I|=|J|=|K|=r$ 인 부분집합 삼중항 $(I,J,K)$ 가 $T^n_r$ 에 속하는 것은

$$
\sum_{i\in I}i+\sum_{j\in J}j=\sum_{k\in K}k+\binom{r+1}{2}
$$

이고, 모든 $s\lt r$ 과 $(F,G,H)\in T^r_s$ 에 대해

$$
\sum_{f\in F}i_f+\sum_{g\in G}j_g\le\sum_{h\in H}k_h+\binom{s+1}{2}
$$

가 성립하는 경우다. 정의가 자기 자신을 더 작은 크기에서 부르므로, 부등식의 목록이 $n$ 에 대해 재귀적으로 자란다.

## Horn 문제의 답

$\alpha,\beta,\gamma$ 가 $n$ 개씩의 내림차순 실수열이라 하자. $A+B=C$ 이고 고윳값이 각각 $\alpha,\beta,\gamma$ 인 에르미트 행렬이 존재할 필요충분조건은

$$
\sum\gamma_k=\sum\alpha_i+\sum\beta_j\quad\text{이고}\quad
\sum_{k\in K}\gamma_k\le\sum_{i\in I}\alpha_i+\sum_{j\in J}\beta_j\ \ \bigl(\forall(I,J,K)\in T^n_r,\ \forall r\lt n\bigr)
$$

이다. 그리고 정수열인 경우 이 조건은 $c^\gamma_{\alpha\beta}\ne0$ 과 동치다.

Horn 은 1962 년에 이 부등식 계를 제시하고 완전하리라 추측했다. Klyachko 가 $\gamma$ 가 가능한 것과 $c^{N\gamma}\_{N\alpha,N\beta}\ne0$ 인 $N$ 이 있는 것이 동치임을 기하 불변식론으로 증명했고, 포화 정리가 그 $N$ 을 없애 추측이 정리가 되었다. 선형대수의 스펙트럼 문제와 표현론의 [텐서곱](tensor-products.md) 분해가 같은 다면체로 기술된다.

# 성질

## 포화 정리

정리는 "hive 다면체가 비어 있지 않으면 정수점을 갖는다" 는 진술이다. 유사한 다면체에서 이런 성질은 흔하지 않다. 예를 들어 $\mathrm{GL}\_n$ 대신 다른 군의 텐서곱 중복도를 세는 다면체는 포화를 만족하지 않고, 실제로 $\mathrm{Sp}\_{2n}$ 에서는 반례가 있다. $\mathrm{GL}\_n$ 에서만 성립하는 이 특수성이 honeycomb 의 극점 구조에서 나온다. 다면체가 비어 있지 않으면 유리 극점이 하나 있고, 극점에 해당하는 honeycomb 은 겹친 선분이 없는 가장 단순한 그래프여서 좌표가 정수다.

## 판정의 복잡도

| 문제 | 복잡도 |
|---|---|
| $c^\nu_{\lambda\mu}$ 의 값 계산 | $\char35{}\mathrm P$ 완전 |
| $c^\nu_{\lambda\mu}\gt 0$ 인지 판정 | 다항시간 |

값을 세는 것은 어렵지만 $0$ 인지 아닌지는 쉽다. 판정이 쉬운 이유가 포화다. 정수점의 존재를 유리점의 존재로 바꾸면 선형계획법이 되고, 부등식의 개수가 다항적이므로 다항시간에 끝난다. 세는 것이 어려운 양의 소멸 여부가 쉬울 수 있다는 이 대비를 기하학적 복잡도 이론(geometric complexity theory, GCT)이 $\mathrm{VP}$ 대 $\mathrm{VNP}$ 를 공략하는 데 쓴다. Mulmuley 와 Sohoni 의 계획은 Kronecker 계수 같은 더 어려운 중복도에서도 같은 구조를 찾는다.

## hive 의 $S_3$ 대칭

hive 삼각형의 세 변은 대등하다. $\lambda,\mu,\nu$ 를 순환시키거나 뒤집는 조작이 삼각형의 대칭군 $S_3$ 작용에 해당하고, 부등식 계는 그 작용에 불변이다. 따라서

$$
c^\nu_{\lambda\mu}=c^\nu_{\mu\lambda}=c^{\nu^{\negthinspace\ast}}\_{\lambda^{\negthinspace\ast}\mu^{\negthinspace\ast}}
$$

같은 항등식이 부등식 계의 대칭에서 바로 나온다. 원래 규칙에서는 각각 별도의 전단사를 요구하던 것들이다.

## 다른 규칙들과의 관계

Berenstein–Zelevinsky 다면체, Gelfand–Tsetlin 패턴, puzzle 규칙이 모두 같은 수를 세는 서로 다른 모형이다. 그중 Knutson–Tao–Woodward 의 **puzzle** 은 세 종류의 조각으로 삼각형을 채우는 문제로, Schubert 계산의 구조상수를 다룰 때 특히 편하다. 각 모형이 서로 다른 일반화로 뻗는다. 동변 코호몰로지, $K$ 이론, 양자 코호몰로지가 그 방향이다.

# 활용

## 스펙트럼 문제의 판정

수치선형대수와 양자정보에서 "부분계의 스펙트럼이 주어졌을 때 전체계의 스펙트럼으로 무엇이 가능한가" 를 묻는 일이 잦다. 양자 주변 문제(quantum marginal problem)의 가장 단순한 경우가 Horn 문제이고, 위 부등식 계가 완전한 답을 준다. 판정이 다항시간이므로 실제로 계산해 쓸 수 있다.

## Schubert 셈법의 구조상수

[Grassmann 다양체](grassmannian.md) $\mathrm{Gr}(k,n)$ 의 코호몰로지 곱셈 구조상수가 LR 수이므로, hive 모형은 Schubert 순환의 교차수를 다면체의 정수점으로 세는 방법이 된다. 교차수가 음이 아니라는 기하적 사실이 부등식 계의 해 개수라는 형태로 다시 나타난다.

## 표현론의 포화 현상

$c^{N\nu}\_{N\lambda,N\mu}$ 를 $N$ 의 함수로 보면 다면체의 Ehrhart 준다항식이 된다. 곧 텐서곱 중복도의 점근 거동이 다면체의 부피로 읽힌다. 이 관점이 반군 $\lbrace(\lambda,\mu,\nu):c^\nu_{\lambda\mu}\ne0\rbrace$ 의 유한생성성(Klyachko, Belkale)과 그 반군의 면 구조를 다루는 이론으로 이어진다.

[^1]: A. Knutson, T. Tao, *The honeycomb model of* $\mathrm{GL}\_n(\mathbb C)$ *tensor products I: proof of the saturation conjecture*, J. Amer. Math. Soc. **12** (1999), 1055–1090. 대칭성과 다면체 구조는 같은 저자와 C. Woodward 의 후속 논문에 있다. Horn 문제 전체의 개관은 W. Fulton, *Eigenvalues, invariant factors, highest weights, and Schubert calculus*, Bull. Amer. Math. Soc. **37** (2000).

# 연관 문서

## 선수지식

- [Schur 다항식](schur-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algebra #optimization
