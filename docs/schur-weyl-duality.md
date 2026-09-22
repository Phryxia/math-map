# Schur–Weyl 쌍대성

# 개요

$V=\mathbb C^n$ 을 잡고 그 $k$ 중 [텐서곱](tensor-products.md) $V^{\otimes k}$ 를 본다. 이 공간에는 두 군이 자연스럽게 작용한다.

- $\mathrm{GL}\_n(\mathbb C)$ 가 각 자리에 똑같이 작용한다. $g\cdot(v_1\otimes\cdots\otimes v_k)=gv_1\otimes\cdots\otimes gv_k$ 이다.
- 대칭군 $S_k$ 가 자리를 바꾼다. $\sigma\cdot(v_1\otimes\cdots\otimes v_k)=v_{\sigma^{-1}(1)}\otimes\cdots\otimes v_{\sigma^{-1}(k)}$ 이다.

두 작용은 서로 교환한다. 자리를 바꾸고 같은 행렬을 먹이나, 먹이고 자리를 바꾸나 결과가 같기 때문이다. 여기까지는 확인만 하면 되는 사실이다.

Schur–Weyl 쌍대성은 이 관계가 가능한 한 팽팽하다고 말한다.

> 각 군이 생성하는 작용소대수는 정확히 다른 쪽의 중심화대수다. $\mathrm{GL}\_n$ 과 교환하는 작용소는 전부 $S_k$ 의 선형결합이고, 그 역도 성립한다.

여기서 분해가 따라온다.

$$
V^{\otimes k}\cong\bigoplus_{\lambda\vdash k,\ \ell(\lambda)\le n} S^{\lambda}\otimes V_{\lambda}
$$

같은 색인 $\lambda$ — $k$ 의 분할 — 가 대칭군 기약표현 $S^\lambda$ 와 $\mathrm{GL}\_n$ 기약표현 $V_\lambda$ 를 **동시에** 붙잡는다. 중복도가 다른 쪽의 기약표현이라는 말이다.

이것이 [Schur 다항식](schur-polynomials.md)의 정체를 설명한다. 분할이 두 표현론을 색인하는 것은 한 공간을 두 방향에서 본 결과다. 그래서 Schur 다항식은 대칭함수의 기저이면서 $\mathrm{GL}\_n$ 지표다. [군의 표현](group-representations.md)에서 배운 지표 이론이 그 사전의 문법을 준다.

# 직관

## 대칭화와 반대칭화의 사이

$k=2$ 를 보면 전부 보인다. $V\otimes V$ 는 대칭 부분과 반대칭 부분으로 갈린다.

$$
V\otimes V=\mathrm{Sym}^2V\oplus\Lambda^2V
$$

이 분해는 $S_2=\lbrace 1,\tau\rbrace$ 의 두 기약표현 — 자명표현과 부호표현 — 으로 텐서공간을 나눈 것이다. 그런데 나온 조각이 각각 $\mathrm{GL}\_n$ 의 기약표현이기도 하다. $S_2$ 쪽으로 나눴더니 $\mathrm{GL}\_n$ 쪽 기약 조각이 나온 것이다.

$k=3$ 부터는 자명표현과 부호표현 말고 2 차원 기약표현이 하나 더 있고, 그 표현은 중복도 2 로 나타난다. 여기서 "$S_k$ 기약성분의 중복 공간이 $\mathrm{GL}\_n$ 기약표현" 이라는 구조가 제대로 드러난다. 대칭·반대칭이라는 두 극단 사이의 중간 대칭성들이 바로 Young 도형 $\lambda$ 로 색인되는 것이다.

## 이중 중심화 정리

유한차원 반단순대수 $A,B$ 가 한 공간 $W$ 에 교환하며 작용하고 서로의 중심화대수라 하자. 이중 중심화 정리가 말하는 것은

$$
W\cong\bigoplus_i M_i\otimes N_i
$$

이고 $M_i$ 는 $A$ 기약, $N_i$ 는 $B$ 기약이며 짝이 일대일이라는 것이다. 증명은 $W$ 를 $A$ 가군으로 분해하고, $A$ 와 교환하는 작용소가 각 등형 성분의 중복 공간에만 작용한다는 Schur 보조정리를 쓰는 것이다. 중심화대수가 **정확히** $B$ 라는 가정이 중복 공간에 $B$ 가 기약으로 작용함을 준다.

그러므로 증명의 무게는 전부 "중심화대수가 그 이상 크지 않다" 에 실린다. $\mathrm{GL}\_n$ 과 교환하는 작용소가 자리바꿈의 결합으로만 나온다는 사실이 핵심이고, 이것은 다중선형대수의 계산으로 보인다.

## $\ell(\lambda)\le n$ 이라는 조건

$n$ 차원 공간에서 $n+1$ 개를 반대칭화하면 $0$ 이므로 행이 $n$ 개보다 많은 Young 도형은 나타나지 않는다. 그래서 $n$ 이 크면 모든 분할이 살아남고 $n$ 이 작으면 목록이 잘린다. $n\ge k$ 이면 모든 $\lambda\vdash k$ 가 나타나고, 그때 대칭군 표현론과 $\mathrm{GL}\_n$ 표현론의 사전이 가장 완전해진다.

# 정의

## 두 작용과 이중 중심화

$\rho:\mathbb C[S_k]\to\mathrm{End}(V^{\otimes k})$ 와 $\pi:\mathbb C[\mathrm{GL}\_n]\to\mathrm{End}(V^{\otimes k})$ 를 위 작용으로 두고 상을 각각 $\mathcal S$ 와 $\mathcal G$ 라 하자.

**정리 (Schur, 1901; Weyl, 1939)**

$$
\mathrm{End}\_{\mathcal G}(V^{\otimes k})=\mathcal S,\qquad \mathrm{End}\_{\mathcal S}(V^{\otimes k})=\mathcal G
$$

따라서 $(\mathcal G,\mathcal S)$ 이중가군으로서

$$
V^{\otimes k}\cong\bigoplus_{\substack{\lambda\vdash k\cr \ell(\lambda)\le n}} V_{\lambda}\otimes S^{\lambda}
$$

$S^\lambda$ 는 $\lambda$ 에 대응하는 Specht [가군](modules.md), $V_\lambda$ 는 최고무게 $\lambda$ 의 $\mathrm{GL}\_n$ 기약 다항식표현이다.

## 차원 공식

두 차원이 서로 다른 조합론으로 주어진다. $\lambda$ 의 칸 $(i,j)$ 에서 후크 길이를 $h(i,j)$ 라 하면

$$
\dim S^{\lambda}=f^{\lambda}=\frac{k!}{\prod_{(i,j)\in\lambda}h(i,j)}
$$

이고(후크 길이 공식), $\mathrm{GL}\_n$ 쪽은 내용 $c(i,j)=j-i$ 를 써서

$$
\dim V_{\lambda}=\prod_{(i,j)\in\lambda}\frac{n+c(i,j)}{h(i,j)}
$$

다(후크-내용 공식). 두 번째 값은 모양이 $\lambda$ 이고 성분이 $1,\dots,n$ 인 반표준 Young 배열(SSYT)의 개수와 같고, 그것이 곧 $s_\lambda(1,\dots,1)$ 이다.

분해의 차원을 세면 다음 항등식이 된다.

$$
n^{k}=\sum_{\lambda\vdash k,\ \ell(\lambda)\le n} f^{\lambda}\cdot\dim V_{\lambda}
$$

## 지표 판본

두 작용의 지표를 동시에 취하면 대칭함수 항등식이 나온다. $g\in\mathrm{GL}\_n$ 의 고윳값을 $x_1,\dots,x_n$ 으로, $\sigma\in S_k$ 의 순환형을 $\mu$ 라 할 때

$$
\mathrm{tr}\left((g\otimes\sigma)\big|\_{V^{\otimes k}}\right)=p_{\mu}(x)=\sum_{\lambda\vdash k}\chi^{\lambda}(\mu)\thinspace s_{\lambda}(x)
$$

가 된다. 왼쪽은 직접 계산되고(각 순환이 대각합 하나를 주어 거듭제곱합 $p_\mu$ 가 나온다) 오른쪽은 분해에서 나온다. 이것이 거듭제곱합을 Schur 함수로 전개하는 고전적 공식이고, 계수가 대칭군 지표표다. 두 표현론을 잇는 사전의 본문이 이 한 줄이다.

# 성질

## 중심화대수가 정확히 맞는 조건

$n\ge k$ 이면 $\mathbb C[S_k]\to\mathcal S$ 가 단사이고 $\mathcal S\cong\mathbb C[S_k]$ 다. $n\lt k$ 이면 핵이 생긴다 — 행이 $n$ 개를 넘는 $\lambda$ 성분이 죽기 때문이다. 이때도 정리 자체는 성립하지만 $S_k$ 의 표현 가운데 일부만 보이게 된다. 예컨대 $n=1$ 이면 $V^{\otimes k}$ 가 1 차원이고 $S_k$ 는 자명하게만 작용한다.

## 일반화

같은 구조가 여러 방향으로 퍼진다.

| 한쪽 | 다른 쪽 | 이름 |
|---|---|---|
| $\mathrm{GL}\_n$ | $S_k$ | Schur–Weyl |
| $O_n$ 또는 $\mathrm{Sp}\_n$ | Brauer 대수 | Brauer 쌍대성 |
| 양자군 $U_q(\mathfrak{gl}\_n)$ | Hecke 대수 $H_k(q)$ | Jimbo 쌍대성 |
| $\mathfrak{gl}\_n$ | 퇴화 아핀 Hecke | 아핀 판본 |
| $\mathrm{GL}\_n\times\mathrm{GL}\_m$ | — | Howe 쌍대성 |

양자군 판본이 특히 중요하다. $q$ 를 넣으면 대칭군 자리에 Hecke 대수가 오고, 자리바꿈이 땋임으로 바뀐다. 이 변형에서 Jones 다항식 같은 매듭 불변량이 나온다. 자리를 바꾸는 대칭이 자리를 **꼬는** 대칭으로 완화되는 것이 3 차원 위상수학과 연결되는 지점이다.

## 계산에서의 쓰임

실제 계산에서는 주로 세 방향으로 쓴다.

- **텐서곱 분해**: $V_\lambda\otimes V_\mu$ 의 기약 분해 계수(Littlewood–Richardson)가 대칭군 쪽 유도표현 분해와 같은 수다. 한쪽에서 어려운 계산이 다른 쪽에서 쉬울 때가 있다.
- **불변식론**: $\mathrm{GL}\_n$ 불변식을 찾는 문제가 $S_k$ 작용의 자명성분을 찾는 문제로 바뀐다. 고전적 불변식론의 제 1 기본정리가 이 형태로 서술된다.
- **양자정보**: $V^{\otimes k}$ 를 $n$ 준위 입자 $k$ 개의 상태공간으로 읽으면 분해의 성분이 측정의 단위가 된다. Schur 변환이 다항시간에 계산 가능하다는 것이 이 응용의 전제다.

# 활용

## 두 표현론 사이의 사전

- **표현론의 사전**: 대칭군 표현론(조합적, Young 배열)과 $\mathrm{GL}\_n$ 표현론(기하적, 최고무게)을 서로 번역한다. 한쪽의 정리가 다른 쪽 정리를 곧바로 준다.
- **대칭함수 이론의 근거**: 거듭제곱합–Schur 전개, Cauchy 항등식, Littlewood–Richardson 규칙이 전부 이 분해에서 따라 나온다. [Schur 다항식](schur-polynomials.md)의 여러 정의가 왜 일치하는지가 여기서 설명된다.
- **양자정보**: Schur–Weyl 변환이 $k$ 개 복사본에서 스펙트럼을 추정하는 최적 측정을 주고, 양자 자료 압축과 얽힘 농축에 쓰인다.
- **통계물리와 적분가능계**: 스핀 사슬의 대칭성을 두 방향에서 쪼개는 표준 기법이고, 양자군 판본이 Yang–Baxter 방정식과 직접 연결된다.

# 연관 문서

## 선수지식

- [Schur 다항식과 대칭함수](schur-polynomials.md)
- [군의 표현](group-representations.md)

## 더 알아보기

- [Brauer 대수](brauer-algebras.md)

#algebra #group_theory #combinatorics #linear_algebra
