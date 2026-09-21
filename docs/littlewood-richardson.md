# Littlewood–Richardson 규칙과 hive 모형

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

Knutson 과 Tao 는 계수를 **볼록 다면체의 정수점 개수**로 다시 쓰는 모형을 도입했다.[^1] hive 는 삼각형 격자 위의 수 배열이고 조건이 부등식뿐이라 대칭성이 다면체의 대칭으로 나타난다. 같은 모형에서 다음이 따라 나온다.

> **포화 정리(saturation theorem).** $c^{N\nu}\_{N\lambda,N\mu}\ne0$ 인 $N\ge1$ 이 있으면 $c^\nu_{\lambda\mu}\ne0$ 이다.

이 한 줄이 Horn 추측을 해결한다. 두 에르미트 행렬의 합의 고유값이 어떤 값을 가질 수 있는가라는 선형대수 문제가, LR(Littlewood–Richardson) 수가 $0$ 이 아닌 조건과 정확히 같은 것이었기 때문이다.

# 직관

## 다면체 모형

조합적 규칙은 대상을 하나씩 열거한다. 다면체 모형은 대상을 부등식 계로 기술한다. 후자에는 조합론에 없는 도구가 붙는다.

- 부등식의 대칭이 곧 계수의 대칭이다.
- $c\ne0$ 판정이 "다면체가 정수점을 갖는가" 이고, 정수 조건을 풀면 선형계획법으로 다항시간에 풀린다.
- $\lambda,\mu,\nu$ 를 $N$ 배 하면 다면체가 $N$ 배 팽창한다. 팽창과 정수점의 관계가 곧 포화다.

일반적으로 다면체가 유리점을 가져도 정수점을 갖는다는 보장이 없다. hive 다면체는 그 보장이 성립하는 특별한 다면체이며, 그 사실을 증명하는 것이 Knutson–Tao 작업의 어려운 부분이다.

## hive 삼각형

한 변의 길이가 $n$ 인 삼각형 격자의 각 꼭짓점에 정수를 놓는다. 조건은 모든 작은 마름모(두 삼각형을 붙인 것)에서

$$
(\text{짧은 대각선 양 끝의 합})\thickspace\ge\thickspace(\text{긴 대각선 양 끝의 합})
$$

이 성립한다는 것, 즉 배열이 **오목**하다는 것이다. 세 변의 값 증분을 $\lambda$ 와 $\mu$ 와 $\nu$ 로 지정하면 그런 hive 의 개수가 정확히 $c^\nu_{\lambda\mu}$ 다.

세 변이 대칭적으로 등장하므로 $\lambda\leftrightarrow\mu$ 교환은 삼각형을 뒤집는 것에 불과하다. 규칙 쪽에서 보이지 않던 대칭이 그림에서 자명해진다.

## honeycomb 쌍대

hive 의 오목성 조건을 쌍대로 옮기면 평면 위 세 방향 $0^\circ,120^\circ,240^\circ$ 의 선분들이 이루는 그래프가 된다. 각 삼중점에서 세 선분이 만나고 **장력이 균형**을 이룬다. 바깥으로 뻗는 반직선의 좌표가 $\lambda,\mu,\nu$ 를 준다.

다면체의 꼭짓점에 해당하는 honeycomb 은 겹친 선분이 없는 가장 단순한 그래프이고, 그런 그래프의 좌표는 정수가 된다. 포화 정리의 증명이 이 사실 위에 선다. 유리점이 있으면 극점을 하나 잡을 수 있고, 극점이 정수이므로 정수점이 있다.

## Horn 문제

에르미트 행렬 $A,B$ 의 고유값을 내림차순으로 $\alpha,\beta$ 라 하고 $C=A+B$ 의 고유값을 $\gamma$ 라 하자. $\gamma$ 는 대각합 조건 $\sum\gamma=\sum\alpha+\sum\beta$ 말고 어떤 제약을 받는가. $n=2$ 에서는 부등식 몇 개로 끝나지만 일반 $n$ 에서는 답이 오래 열려 있었다. Horn 은 1962 년에 재귀적으로 정의되는 부등식 계

$$
\sum_{k\in K}\gamma_k\le\sum_{i\in I}\alpha_i+\sum_{j\in J}\beta_j
$$

를 제시하고 이것이 완전하리라 추측했다. 여기서 $(I,J,K)$ 는 더 작은 크기의 Horn 문제에서 나오는 삼중항이다.

Klyachko 가 이 문제를 기하 불변식론으로 옮겨 "$\gamma$ 가 가능하다 $\iff$ $c^{N\gamma}\_{N\alpha,N\beta}\ne0$ 인 $N$ 이 있다" 를 증명했다. 남은 것은 $N$ 을 없애는 일이었고, 그것이 포화 정리다. 두 결과가 맞물려 Horn 추측이 정리가 되었다. 선형대수의 스펙트럼 문제와 표현론의 텐서곱 분해가 같은 다면체로 기술된다.

## LR 계수의 열거

규칙이 세는 대상은 모양 $\nu/\lambda$ , 내용 $\mu$ 인 반표준 대각표 가운데 읽기 낱말이 격자 낱말인 것이다. 정의를 그대로 옮기면 후퇴 탐색이 된다.

```javascript
// c^ν_{λμ} : 모양 ν/λ, 내용 μ 인 반표준 대각표 중 읽기 낱말이 격자 낱말인 것의 개수
function lr(lam, mu, nu) {
  const rows = nu.length, n = mu.length, lamp = i => lam[i] ?? 0;
  const sum = a => a.reduce((x, y) => x + y, 0);
  if (sum(nu) !== sum(lam) + sum(mu)) return 0;
  const cells = [];                                   // 각 행을 오른쪽에서 왼쪽으로
  for (let i = 0; i < rows; i++)
    for (let j = nu[i] - 1; j >= lamp(i); j--) cells.push([i, j]);
  const T = Array.from({ length: rows }, () => []), cnt = Array(n + 1).fill(0);
  let total = 0;
  const rec = (t) => {
    if (t === cells.length) { if (mu.every((m, i) => cnt[i + 1] === m)) total++; return; }
    const [i, j] = cells[t];
    for (let v = 1; v <= n; v++) {
      if (cnt[v] + 1 > mu[v - 1]) continue;
      if (j + 1 < nu[i] && T[i][j + 1] < v) continue;                 // 행 약증가
      if (i > 0 && j >= lamp(i - 1) && !(T[i - 1][j] < v)) continue;  // 열 강증가
      if (v > 1 && cnt[v - 1] <= cnt[v]) continue;                    // 격자 낱말
      T[i][j] = v; cnt[v]++; rec(t + 1); cnt[v]--; T[i][j] = undefined;
    }
  };
  rec(0);
  return total;
}

```

$\lambda=\mu=(2,1)$ 에 이 열거를 적용하면

$$
s_{21}\cdot s_{21}=s_{42}+s_{411}+s_{33}+2\thinspace s_{321}+s_{3111}+s_{222}+s_{2211}
$$

$c^{(3,2,1)}\_{(2,1),(2,1)}=2$ 가 이 곱에서 유일하게 $1$ 을 넘는 계수다.

분할을 $N$ 배로 늘리면 계수 자체는 $c^{N\nu}\_{N\lambda,N\mu}\ge c^\nu_{\lambda\mu}$ 로 커지지만 $0$ 인지 아닌지는 보존된다. 이것이 포화 정리의 진술이다.

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

honeycomb 은 평면 위의 선분과 반직선으로 이루어진 그래프로, 모든 변이 세 방향 중 하나이고 각 꼭짓점에서 만나는 세 변의 방향 벡터 합이 $0$ 이다. 세 방향의 반직선 좌표가 $\lambda,\mu,\nu$ 를 준다. hive 의 오목 함수와 honeycomb 은 Legendre 변환으로 대응하며, 이 쌍대성 아래 hive 의 부등식이 honeycomb 의 변 길이가 음이 아니라는 조건이 된다.

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

$\alpha,\beta,\gamma$ 가 $n$ 개씩의 내림차순 실수열이라 하자. $A+B=C$ 이고 고유값이 각각 $\alpha,\beta,\gamma$ 인 에르미트 행렬이 존재할 필요충분조건은

$$
\sum\gamma_k=\sum\alpha_i+\sum\beta_j\quad\text{이고}\quad
\sum_{k\in K}\gamma_k\le\sum_{i\in I}\alpha_i+\sum_{j\in J}\beta_j\ \ \bigl(\forall(I,J,K)\in T^n_r,\ \forall r\lt n\bigr)
$$

이다. 그리고 정수열인 경우 이 조건은 $c^\gamma_{\alpha\beta}\ne0$ 과 동치다.

# 성질

## 포화 정리

정리는 "hive 다면체가 비어 있지 않으면 정수점을 갖는다" 는 진술이다. 유사한 다면체에서 이런 성질은 흔하지 않다. 예를 들어 $\mathrm{GL}\_n$ 대신 다른 군의 텐서곱 중복도를 세는 다면체는 포화를 만족하지 않고, 실제로 $\mathrm{Sp}\_{2n}$ 에서는 반례가 있다. $\mathrm{GL}\_n$ 에서만 성립하는 이 특수성이 honeycomb 의 극점 구조에서 나온다.

## 판정의 복잡도

| 문제 | 복잡도 |
|---|---|
| $c^\nu_{\lambda\mu}$ 의 값 계산 | $\char35{}\mathrm P$ 완전 |
| $c^\nu_{\lambda\mu}\gt 0$ 인지 판정 | 다항시간 |

값을 세는 것은 어렵지만 $0$ 인지 아닌지는 쉽다. 판정이 쉬운 이유가 포화다. 정수점의 존재를 유리점의 존재로 바꾸면 선형계획법이 되고, 부등식의 개수가 다항적이므로 다항시간에 끝난다. 세는 것이 어려운 양의 소멸 여부가 쉬울 수 있다는 이 대비를 기하학적 복잡도 이론(GCT)이 $\mathrm{VP}$ 대 $\mathrm{VNP}$ 를 공략하는 데 쓴다. Mulmuley 와 Sohoni 의 계획은 Kronecker 계수 같은 더 어려운 중복도에서도 같은 구조를 찾는다.

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

$\mathrm{Gr}(k,n)$ 의 코호몰로지 곱셈 구조상수가 LR 수이므로, hive 모형은 Schubert 순환의 교차수를 다면체의 정수점으로 세는 방법이 된다. 교차수가 음이 아니라는 기하적 사실이 부등식 계의 해 개수라는 형태로 다시 나타난다.

## 표현론의 포화 현상

$c^{N\nu}\_{N\lambda,N\mu}$ 를 $N$ 의 함수로 보면 다면체의 Ehrhart 준다항식이 된다. 곧 텐서곱 중복도의 점근 거동이 다면체의 부피로 읽힌다. 이 관점이 반군 $\lbrace(\lambda,\mu,\nu):c^\nu_{\lambda\mu}\ne0\rbrace$ 의 유한생성성(Klyachko, Belkale)과 그 반군의 면 구조를 다루는 이론으로 이어진다.

[^1]: A. Knutson, T. Tao, *The honeycomb model of* $\mathrm{GL}\_n(\mathbb C)$ *tensor products I: proof of the saturation conjecture*, J. Amer. Math. Soc. **12** (1999), 1055–1090. 대칭성과 다면체 구조는 같은 저자와 C. Woodward 의 후속 논문에 있다. Horn 문제 전체의 개관은 W. Fulton, *Eigenvalues, invariant factors, highest weights, and Schubert calculus*, Bull. Amer. Math. Soc. **37** (2000).

# 연관 문서

## 선수지식

- [Schur 다항식과 대칭함수](schur-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algebra #optimization
