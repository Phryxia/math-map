# Schur 다항식과 대칭함수

# 개요

[Weyl 지표 공식](weyl-character-formula.md)을 $\mathfrak{gl}\_n$ 에 적용하면 분모가 Vandermonde 행렬식이 되고, 지표가 두 행렬식의 비로 떨어진다.

$$
s_\lambda(x_1,\dots,x_n)=\frac{\det\negthinspace\big(x_i^{\lambda_j+n-j}\big)\_{1\le i,j\le n}}{\det\negthinspace\big(x_i^{n-j}\big)\_{1\le i,j\le n}}
$$

이것이 **Schur 다항식**이다. 표현론에서는 기약표현의 지표이지만, 정의만 보면 대칭다항식 하나이고 실제로 대칭다항식 공간의 가장 자연스러운 기저다.

서로 무관해 보이는 세 가지 기술이 전부 같은 것을 준다.

| 관점 | 정의 |
|---|---|
| 표현론 | $\mathrm{GL}\_n$ 기약표현의 지표, 위의 bialternant 공식 |
| 조합론 | 모양 $\lambda$ 인 반표준 Young 대각표들의 무게 합 |
| 대수 | 완전 동차 대칭다항식의 행렬식 (Jacobi–Trudi) |

행렬식 두 개의 비가 왜 다항식인지조차 자명하지 않은데, 그것이 음이 아닌 계수를 갖는다는 것(조합론적 정의)과 다른 행렬식으로도 쓰인다는 것(Jacobi–Trudi)이 따라온다. 세 관점이 각각 다른 질문에 답하기 좋아서, 한 문제를 세 언어 사이에서 옮기는 것이 이 분야의 기본 기술이 된다.

특히 텐서곱 분해의 계수인 **Littlewood–Richardson 수**는 표현론에서는 정의하기 쉽지만 계산하기 어렵고, 조합론 쪽으로 옮기면 격자 낱말을 세는 유한 규칙이 된다. 이 번역이 없으면 계산이 불가능하다.

# 직관

## 무게 다이어그램과 대각표

$\mathrm{GL}\_n$ 의 기약표현 $V_\lambda$ 의 무게 다이어그램을 생각하자. 무게 $\mu$ 의 중복도가 $\dim(V_\lambda)\_\mu$ 이고, 지표는 그것을 $x^\mu$ 에 실어 모은 것이다.

$$
s_\lambda(x)=\sum_\mu K_{\lambda\mu}\thinspace x^\mu
$$

이 계수 $K_{\lambda\mu}$ 를 **Kostka 수**라 한다. [Weyl 지표 공식 문서](weyl-character-formula.md)에서 Kostant 공식으로 계산한 것이 바로 이 수이고, 거기서는 Weyl 군 위의 교대합이라 부호가 상쇄되는 형태였다.

조합론적 기술은 상쇄 없이 센다. 모양 $\lambda$ 의 칸에 $1,\dots,n$ 을 채우되 행은 왼쪽에서 오른쪽으로 약증가, 열은 위에서 아래로 강증가하도록 하면 그것이 반표준 Young 대각표(SSYT)이고,

$$
s_\lambda(x)=\sum_{T\in\mathrm{SSYT}(\lambda,n)}x^{T},\qquad x^T=\prod_{\text{칸}}x_{T(\text{칸})}
$$

가 된다. $K_{\lambda\mu}$ 는 내용이 $\mu$ 인 대각표의 개수다. 음이 아닌 정수임이 정의에서 바로 보인다.

두 조건의 방향이 다른 것에 이유가 있다. 행의 약증가는 대칭성(같은 값이 반복 가능)에서, 열의 강증가는 반대칭성(교대곱에서 같은 값이 죽음)에서 나온다. $\mathrm{GL}\_n$ 표현이 대칭곱과 외적의 조합으로 만들어지는 구조가 대각표의 두 규칙으로 번역된 것이다.

## 세 정의가 같다는 것의 무게

같은 함수를 세 방식으로 쓸 수 있다는 사실이 실제로 하는 일은 이렇다.

- 곱 $s_\lambda s_\mu$ 를 전개할 때는 대각표 쪽이 낫다. Littlewood–Richardson 규칙이 나온다.
- 변수의 개수를 무한으로 보내거나 특수화할 때는 Jacobi–Trudi 쪽이 낫다. 행렬식이 변수 개수를 명시적으로 쓰지 않기 때문이다.
- 모듈러성이나 대칭군 작용을 볼 때는 bialternant 쪽이 낫다. 분자와 분모가 각각 반대칭이라는 구조가 드러난다.

# 정의

## 분할과 대각표

$\lambda=(\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_\ell\gt 0)$ 을 **분할**이라 하고, $i$ 번째 행에 $\lambda_i$ 개의 칸을 왼쪽 정렬한 그림을 Young 도형이라 한다. 그 칸에 $\lbrace 1,\dots,n\rbrace$ 의 값을 채워

- 각 행이 왼쪽에서 오른쪽으로 약증가
- 각 열이 위에서 아래로 강증가

하면 **반표준 Young 대각표**이고, 값들의 집합을 $\mathrm{SSYT}(\lambda,n)$ 으로 쓴다.

## 세 정의

$$
s_\lambda(x_1,\dots,x_n)=\frac{\det\big(x_i^{\lambda_j+n-j}\big)}{\det\big(x_i^{n-j}\big)}
=\sum_{T\in\mathrm{SSYT}(\lambda,n)}x^T
=\det\big(h_{\lambda_i-i+j}\big)\_{1\le i,j\le\ell}
$$

여기서 $h_k$ 는 완전 동차 대칭다항식, 곧 차수 $k$ 의 모든 단항식의 합이며 $h_0=1$ 과 $h_{k\lt 0}=0$ 이다. 마지막 등식이 **Jacobi–Trudi 항등식**이다. 기본 대칭다항식 $e_k$ 로 쓰는 쌍대 판본도 있다.

$$
s_\lambda=\det\big(e_{\lambda'\_i-i+j}\big),\qquad \lambda'=\text{전치 분할}
$$

## 표현론과의 사전

$\ell(\lambda)\le n$ 인 분할과 $\mathrm{GL}\_n(\mathbb C)$ 의 다항식 기약표현이 대응한다. $\mathfrak{sl}\_n$ 의 Dynkin 라벨로는

$$
(a_1,\dots,a_{n-1})=(\lambda_1-\lambda_2,\ \lambda_2-\lambda_3,\ \dots,\ \lambda_{n-1}-\lambda_n)
$$

이고, $\dim V_\lambda=s_\lambda(1,\dots,1)=|\mathrm{SSYT}(\lambda,n)|$ 이다. 곧 **차원이 대각표의 개수**다.

# 성질

## 대칭함수 공간의 기저

차수 $d$ 의 대칭다항식 공간은 분할의 개수 $p(d)$ 만큼의 차원을 갖고, 여러 자연스러운 기저가 있다.

$$
m_\lambda\ (\text{단항식}),\quad e_\lambda\ (\text{기본}),\quad h_\lambda\ (\text{완전 동차}),\quad p_\lambda\ (\text{거듭제곱합}),\quad s_\lambda
$$

이 중 $s_\lambda$ 가 특별한 것은 **내적에 대해 정규직교**이기 때문이다. Hall 내적 $\langle h_\lambda,m_\mu\rangle=\delta_{\lambda\mu}$ 로 정의하면

$$
\langle s_\lambda,s_\mu\rangle=\delta_{\lambda\mu}
$$

이고, 이 내적이 대칭군 표현의 지표 내적과 일치한다. 대칭함수 공간이 모든 대칭군의 표현환을 합친 것과 동형이라는 **Frobenius 대응**이 여기서 나오고, $s_\lambda$ 가 대칭군 기약표현 $S^\lambda$ 에 대응한다.

$$
\mathrm{ch}:\bigoplus_n R(S_n)\ \xrightarrow{\ \sim\ }\ \Lambda,\qquad [S^\lambda]\mapsto s_\lambda
$$

$\mathrm{GL}\_n$ 의 표현론과 $S_n$ 의 표현론이 같은 대상 위에서 만나는 이 현상이 **Schur–Weyl 쌍대성**의 대칭함수 판본이다.

## Littlewood–Richardson 규칙

두 Schur 다항식의 곱을 전개한 계수가 LR(Littlewood–Richardson) 수다.

$$
s_\lambda s_\mu=\sum_\nu c^\nu_{\lambda\mu}s_\nu
$$

표현론에서는 $V_\lambda\otimes V_\mu$ 의 기약 분해 중복도이고, 기하에서는 Grassmann 다양체의 Schubert 셈법 구조상수다. 정의만으로는 계산할 수 없지만 조합론적 규칙이 있다.

> $c^\nu_{\lambda\mu}$ 는 모양이 $\nu/\lambda$ 이고 내용이 $\mu$ 인 반표준 대각표 중 그 읽기 낱말이 **격자 낱말**인 것의 개수다.

격자 낱말이란 오른쪽부터 읽을 때 항상 $i$ 의 개수가 $i+1$ 의 개수 이상인 낱말이다. 규칙이 유한 열거로 끝나므로 계산이 가능해진다. $c^\nu_{\lambda\mu}$ 가 음이 아니라는 사실이 규칙에서 자명하지만, 대수적 정의에서는 전혀 자명하지 않다. 이 양성이 기하학적으로는 Schubert 순환의 교차수가 실제 교점 개수라는 사실이다.

LR 수의 계산 복잡도는 $\char35{}P$ 완전이고, 그것이 0 이 아닌지를 판정하는 문제는 다항시간에 가능하다(Knutson–Tao 의 hive 모형과 포화 정리). 조합론적 대상의 복잡도가 이렇게 갈리는 것이 기하학적 복잡도 이론의 출발점 중 하나다.[^1]

## RSK 대응

행렬식이나 표현론과 무관하게, 순열과 대각표 쌍 사이의 전단사가 있다.

$$
S_n\ \longleftrightarrow\ \bigsqcup_{\lambda\vdash n}\mathrm{SYT}(\lambda)\times\mathrm{SYT}(\lambda)
$$

**Robinson–Schensted–Knuth 대응**이고, 개수를 세면 $n!=\sum_\lambda(f^\lambda)^2$ 이 나온다. 대칭군의 표현론에서 아는 항등식을 순수하게 조합적으로 증명하는 셈이다.

이 대응은 순열의 통계량을 대각표의 모양으로 번역한다. $\lambda_1$ 이 가장 긴 증가 부분열의 길이이고 $\lambda'\_1$ 이 가장 긴 감소 부분열의 길이다(Schensted 정리). 무작위 순열의 가장 긴 증가 부분열이 $2\sqrt n$ 에 접근하고 요동이 Tracy–Widom 분포를 따른다는 결과가 이 번역 위에서 증명되었고, 랜덤 행렬 이론과 조합론을 이었다.

# 활용

## Schubert 셈법

Grassmann 다양체 $\mathrm{Gr}(k,n)$ 의 코호몰로지 환은 Schubert 순환으로 생성되고, $\sigma_\lambda\mapsto s_\lambda$ 가 환 동형을 준다(단, 큰 분할은 0 으로 보낸다).

$$
H^\ast(\mathrm{Gr}(k,n))\cong\Lambda/(s_\lambda:\lambda\not\subseteq k\times(n-k))
$$

그래서 "일반 위치의 선 넷과 만나는 직선은 몇 개인가" 같은 고전적 셈 문제가 $s_1^4$ 를 전개하는 계산이 된다. LR 수가 곧 교차수다.

## 확률과 적분가능 모형

Schur 다항식은 무작위 대각표, 무작위 분할, 상자 쌓기 모형의 분배함수로 나타난다. Cauchy 항등식

$$
\prod_{i,j}\frac1{1-x_iy_j}=\sum_\lambda s_\lambda(x)s_\lambda(y)
$$

이 그런 모형의 정규화 상수를 준다. 여기서 Schur 측도를 정의하면 행렬식 점 과정이 되고, 상관함수가 행렬식 꼴로 닫혀 점근 분석이 가능해진다. 앞의 가장 긴 증가 부분열 문제와 결정 성장 모형(TASEP, 모서리 성장)의 Tracy–Widom 요동이 전부 이 구조 위에서 계산되었다.

## 일반화

Schur 다항식을 한 방향으로 변형한 것들이 각각 다른 이론을 연다.

| 대상 | 매개변수 | 연결 |
|---|---|---|
| Hall–Littlewood | $t$ | $p$ 진 군의 구면함수, Satake 동형 |
| Jack | $\alpha$ | 랜덤 행렬의 $\beta$ 앙상블 |
| Macdonald | $q,t$ | 이중 아핀 Hecke 대수, $n!$ 정리 |
| LLT(Lascoux–Leclerc–Thibon), 비대칭 Macdonald | 여럿 | 아핀 결정 기저, 대각조화함수 |

모두 $q,t$ 를 특수화하면 $s_\lambda$ 로 돌아오고, 위의 세 정의가 각각 대응물을 갖는다. Macdonald 다항식의 전개 계수가 음이 아닌 정수라는 추측(Macdonald 양성 추측)이 Haiman 의 Hilbert 스킴 기하로 증명된 것이 이 방향의 대표적 성과다.

[^1]: 표준 참고서는 I. Macdonald, *Symmetric Functions and Hall Polynomials* (2판, 1995) 1 장과 R. Stanley, *Enumerative Combinatorics II* (1999) 7 장. LR 규칙의 현대적 증명과 hive 모형은 A. Knutson–T. Tao, *The honeycomb model of $\mathrm{GL}\_n(\mathbb C)$ tensor products I*, J. Amer. Math. Soc. 12 (1999). RSK 와 가장 긴 증가 부분열의 점근은 J. Baik–P. Deift–K. Johansson, J. Amer. Math. Soc. 12 (1999). Macdonald 양성은 M. Haiman, J. Amer. Math. Soc. 14 (2001).

# 연관 문서

## 선수지식

- [Weyl 지표 공식과 최고무게 이론](weyl-character-formula.md)

## 더 알아보기

- [Casselman–Shalika 공식](casselman-shalika.md)
- [Schubert 계산과 Grassmann 다양체](schubert-calculus.md)
- [Schur–Weyl 쌍대성](schur-weyl-duality.md)
- [Littlewood–Richardson 규칙과 hive 모형](littlewood-richardson.md)

#combinatorics #algebra #linear_algebra
