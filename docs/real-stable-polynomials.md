# 실안정 다항식

# 개요

**실안정 다항식(real stable polynomial)** 은 변수가 여럿인 실계수 다항식 가운데, 모든 변수에 허수부가 양수인 복소수를 넣으면 값이 $0$ 이 되지 않는 다항식이다. 무작위 벡터로 만든 행렬들의 특성다항식을 평균하면, 그 평균 다항식의 근이 모두 실수인지 알아야 [끼움 족](interlacing-families.md) 논법을 쓸 수 있다. 근이 모두 실수인 다항식들을 평균해도 근이 실수라는 보장은 없다. 실안정 다항식은 평균 다항식을 변수가 여럿인 행렬식에 미분과 대입을 한 결과로 적고, 그 단계마다 실안정성이 유지된다는 것으로 평균 다항식의 근이 실수임을 보인다.

# 직관

평면의 두 단위벡터 $e_1, e_2$ 가운데 하나를 고르게 뽑는 일을 두 번 독립으로 하고, 뽑은 벡터를 $v_1, v_2$ 라 한다. 행렬 $v_1v_1^T + v_2v_2^T$ 는 확률 $1/2$ 로 $\mathrm{diag}(2,0)$ 이나 $\mathrm{diag}(0,2)$ 이고, 확률 $1/2$ 로 단위행렬이다. 특성다항식은 앞의 둘이 $x(x-2)$, 뒤가 $(x-1)^2$ 이므로 평균은 다음과 같다.

$$
\frac{x(x-2) + (x-1)^2}{2} = x^2 - 2x + \frac{1}{2}
$$

근은 $1 \pm 1/\sqrt2$ 로 실수다. 벡터가 많아지면 특성다항식이 지수적으로 많아져 하나하나 더해 볼 수 없다.

두 벡터의 평균 행렬은 $E\lbrack v_iv_i^T\rbrack = I/2$ 다. 변수 $z_1, z_2$ 를 더 두고 행렬식 $\det(xI + z_1 I/2 + z_2 I/2) = w^2$ 을 만든다. 여기서 $w = x + (z_1 + z_2)/2$ 다. $(1 - \partial_{z_1})(1 - \partial_{z_2})$ 를 적용하면 $w^2 - 2w + 1/2$ 이 되고, $z_1 = z_2 = 0$ 을 넣으면 평균 다항식 $x^2 - 2x + 1/2$ 이 나온다.

그래서 평균 다항식의 근이 실수라는 것은 세 단계로 나뉜다. 처음 행렬식이 어떤 성질을 갖고, $1 - \partial_{z_i}$ 와 $z_i = 0$ 대입이 그 성질을 유지하고, 변수가 하나 남았을 때 그 성질이 "근이 모두 실수" 가 되면 된다. 실안정성이 그런 성질이다.

# 정의

## 실안정 다항식

$\mathbb H = \lbrace z \in \mathbb C : \mathrm{Im}\thinspace z \gt 0\rbrace$ 를 위 반평면이라 한다. $0$ 이 아닌 다항식 $p \in \mathbb R\lbrack z_1, \dots, z_n\rbrack$ 이 $z \in \mathbb H^n$ 에서 $p(z) \ne 0$ 이면 $p$ 를 실안정 다항식이라 한다.

변수가 하나이면 실안정과 근이 모두 실수인 것이 같다. 실계수 다항식의 실수가 아닌 근은 켤레쌍으로 나오고, 쌍 가운데 하나는 $\mathbb H$ 에 있기 때문이다. 직관 절의 $x^2 - 2x + 1/2$ 은 실안정이다.

$z_1z_2 - 1$ 은 실안정이다. $z_1, z_2 \in \mathbb H$ 이면 두 편각이 $0$ 과 $\pi$ 사이에 있어 $z_1z_2$ 의 편각이 $0$ 과 $2\pi$ 사이에 있으므로, $z_1z_2$ 는 양의 실수 $1$ 이 될 수 없다. $z_1^2 + z_2^2$ 은 $z_2 = 1 + i$, $z_1 = -1 + i$ 에서 $0$ 이므로 실안정이 아니다.

## 혼합 특성다항식

$d \times d$ 양의 준정부호 Hermite 행렬 $A_1, \dots, A_m$ 의 **혼합 특성다항식(mixed characteristic polynomial)** 은 다음이다[^1].

$$
\mu\lbrack A_1, \dots, A_m\rbrack(x) = \prod_{i=1}^m(1 - \partial_{z_i})\det\Big(xI + \sum_{i=1}^m z_iA_i\Big)\Big\vert_{z_1 = \dots = z_m = 0}
$$

독립인 무작위 벡터 $v_1, \dots, v_m$ 이 $E\lbrack v_iv_i^\ast\rbrack = A_i$ 를 만족하면, $\det(xI - \sum v_iv_i^\ast)$ 의 기댓값이 $\mu\lbrack A_1, \dots, A_m\rbrack(x)$ 와 같다[^1]. 직관 절은 $A_1 = A_2 = I/2$ 인 경우다.

# 성질

## 행렬식

$A_1, \dots, A_n$ 이 양의 준정부호 Hermite 행렬이고 $B$ 가 Hermite 행렬이면, $\det(B + \sum z_iA_i)$ 는 $0$ 이 아닐 때 실안정이다[^2].

증명의 요지. $A_i$ 가 모두 양의 정부호인 경우를 본다. $z \in \mathbb H^n$ 이면 $M = B + \sum z_iA_i$ 의 허수부 $\sum(\mathrm{Im}\thinspace z_i)A_i$ 가 양의 정부호이므로, $Mv = 0$ 인 $v \ne 0$ 이 있으면 $v^\ast Mv$ 의 허수부가 양수여서 모순이다. 일반 경우는 $A_i + \varepsilon I$ 에서 $\varepsilon \to 0$ 으로 보내고 [Hurwitz 정리](hurwitz-theorem.md)를 쓴다. 계수가 실수인 것은 실수 $z$ 에서 Hermite 행렬의 행렬식이 실수이기 때문이다.

## 실안정성을 유지하는 연산

$p$ 가 실안정이면 다음도 $0$ 이 아닐 때 실안정이다[^3].

- 실안정 다항식과의 곱.
- 실수 $a$ 를 넣은 $p(a, z_2, \dots, z_n)$.
- 두 변수를 같게 둔 $p(z_1, z_1, z_3, \dots, z_n)$.
- $(1 - \partial_{z_1})p$.

실수 대입은 $a + i\varepsilon$ 을 넣은 실안정 다항식에서 $\varepsilon \to 0$ 으로 보내고 Hurwitz 정리를 쓴다. 변수를 같게 두는 것은 $\mathbb H^n$ 의 점에서 값을 보는 것이므로 바로 나온다.

$(1 - \partial_{z_1})p$ 의 증명의 요지. $z_2, \dots, z_n \in \mathbb H$ 를 고정하면 $q(t) = p(t, z_2, \dots, z_n)$ 의 근 $r_k$ 는 모두 $\mathrm{Im}\thinspace r_k \le 0$ 이다. $t \in \mathbb H$ 이면 $t - r_k$ 의 허수부가 양수이므로 $1/(t - r_k)$ 의 허수부가 음수다. 그래서 $q^\prime(t)/q(t) = \sum_k 1/(t - r_k)$ 는 $1$ 이 될 수 없고 $q(t) - q^\prime(t) \ne 0$ 이다.

## 혼합 특성다항식의 실근

혼합 특성다항식의 근은 모두 실수다[^1]. $\det(xI + \sum z_iA_i)$ 는 변수 $x, z_1, \dots, z_m$ 의 실안정 다항식이고, $1 - \partial_{z_i}$ 와 $z_i = 0$ 대입을 거친 뒤 변수 $x$ 하나의 실안정 다항식이 남는다.

무작위 벡터의 값 일부를 고정하고 나머지에 대해 평균한 다항식도 혼합 특성다항식이므로, 끼움 족의 정의에 나오는 평균 다항식들의 볼록결합은 모두 실근만 갖는다. 끼움 족의 공통 끼움 판정으로 $\det(xI - \sum v_iv_i^\ast)$ 들이 끼움 족을 이룬다.

## 가장 큰 근의 상한

$\sum A_i = I$ 이고 모든 $i$ 에서 $\mathrm{tr}\thinspace A_i \le \varepsilon$ 이면 다음이 성립한다[^1].

$$
\mathrm{maxroot}\thinspace\mu\lbrack A_1, \dots, A_m\rbrack \le (1 + \sqrt\varepsilon)^2
$$

증명은 $1 - \partial_{z_i}$ 를 적용할 때마다 다변수 실안정 다항식의 영점이 없는 영역이 얼마나 줄어드는지를 장벽 함수(barrier function) $\partial_{z_j}\log p$ 로 잰다.

# 활용

- Kadison–Singer 문제(Kadison–Singer problem). 끼움 족 정리와 가장 큰 근의 상한을 합치면 $\Vert\sum v_iv_i^\ast\Vert \le (1 + \sqrt\varepsilon)^2$ 인 값의 선택이 존재하고, 이것으로 Kadison–Singer 문제가 긍정으로 풀렸다[^1].
- 음의 상관. $\lbrace 0,1\rbrace^n$ 위의 확률측도 $\mu$ 의 생성다항식 $\sum_S\mu(S)\prod_{i \in S}z_i$ 가 실안정이면 $\mu$ 를 [강한 Rayleigh 측도](strongly-rayleigh-measures.md)라 하고, 이런 측도에서 서로 다른 좌표에 의존하는 증가 함수 둘은 음의 상관을 갖는다[^4]. [FKG 부등식](fkg-inequality.md)(Fortuin–Kasteleyn–Ginibre inequality)과 반대 방향이다. 그래프의 신장트리를 고르게 뽑는 측도는 생성다항식이 행렬-트리 정리(matrix-tree theorem)로 [그래프 Laplacian](graph-laplacian.md)의 소행렬식이 되어 행렬식 절에 따라 강한 Rayleigh 측도다.

[^1]: A. W. Marcus, D. A. Spielman, N. Srivastava, "Interlacing families II: Mixed characteristic polynomials and the Kadison–Singer problem", Annals of Mathematics 182 (2015), 327–350.
[^2]: J. Borcea, P. Brändén, "Applications of stable polynomials to mixed determinants: Johnson's conjectures, unimodality, and symmetrized Fischer products", Duke Mathematical Journal 143 (2008), 205–223.
[^3]: D. G. Wagner, "Multivariate stable polynomials: theory and applications", Bulletin of the American Mathematical Society 48 (2011), 53–84.
[^4]: J. Borcea, P. Brändén, T. M. Liggett, "Negative dependence and the geometry of polynomials", Journal of the American Mathematical Society 22 (2009), 521–567.

# 연관 문서

## 선수지식

- [끼움 족](interlacing-families.md)

## 더 알아보기

- [강한 Rayleigh 측도](strongly-rayleigh-measures.md)

#linear_algebra #combinatorics #complex_analysis
