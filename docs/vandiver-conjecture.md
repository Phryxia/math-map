# Vandiver 추측과 순환체의 짝수 성분

# 개요

**Vandiver 추측(Vandiver's conjecture)** 은 $1$ 의 $p$ 제곱근으로 만든 수의 체에서 소인수분해가 깨지는 정도를 재는 류수 가운데, [실수](real-numbers.md)로 된 부분체의 류수가 $p$ 로 나뉘지 않는다는 추측이다. $\zeta_{23}=e^{2\pi i/23}$ 의 정수 계수 다항식으로 쓰이는 수들 사이에서는 소인수분해가 유일하지 않고, 그 깨진 정도를 재는 류수가 $3$ 이다. Kummer 는 류수가 $p$ 로 나뉘지 않으면 $x^p+y^p=z^p$ 에 자연수 해가 없음을 보였으므로, 류수의 $p$ 부분이 언제 $0$ 인지가 문제다.

류수의 $p$ 부분은 홀수 지표 쪽과 짝수 지표 쪽으로 갈리고, 홀수 쪽은 [Bernoulli 수](bernoulli-numbers.md)로 판정된다. Vandiver 는 짝수 쪽인 실부분체 $\mathbb Q(\zeta_p+\zeta_p^{-1})$ 의 류수가 언제나 $p$ 로 나뉘지 않는다고 추측했다.

# 직관

$p$ 가 홀수이면 복소켤레 $J$ 에 대해 $\frac{1\pm J}2$ 가 $\mathbb Z_p\lbrack J\rbrack$ 의 멱등원이므로, $\mathbb Q(\mu_p)$ 의 류군의 $p$ 부분 $A$ 는 $J$ 가 $-1$ 로 작용하는 부분 $A^{-}$ 와 $+1$ 로 작용하는 부분 $A^{+}$ 로 쪼개진다. 각 부분은 다시 Teichmüller 지표(Teichmüller character) $\omega$ 의 거듭제곱별 성분으로 쪼개진다.

$$
A=A^{-}\oplus A^{+},\qquad
A^{-}=\bigoplus_{i\ \text{홀}}A^{(\omega^{i})},\quad
A^{+}=\bigoplus_{i\ \text{짝}}A^{(\omega^{i})}
$$

$p=37$ 이면 류수가 $37$ 이고 $A$ 는 위수 $37$ 의 순환군이다. 이 군은 $A^{-}$ 쪽 성분 $A^{(\omega^{5})}$ 하나이고, $37$ 이 $B_{32}$ 의 분자를 나누는 것과 짝을 이룬다. [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)이 $A^{-}$ 의 성분마다 $0$ 인지를 Bernoulli 수로 판정하고, [Iwasawa 주추측](iwasawa-main-conjecture.md)이 그 특성 아이디얼을 $p$ 진 $L$ 함수로 정한다.

$A^{+}$ 쪽에는 이런 판정이 없다. [Stickelberger 원소](stickelberger.md)는 $(1+\sigma_{-1})\theta=\sum_a\sigma_a$ 때문에 $+$ 쪽에서 노름원소만 남아 $A^{+}$ 에 대해 정보를 주지 않는다. $+$ 쪽의 $L$ 값은 $L(0,\chi)=0$ 이고 미분값 $L'(0,\chi)$ 는 단수의 로그로 적힌다. Vandiver 는 $A^{+}$ 가 언제나 $0$ 이라고 추측했고, $p=37$ 에서도 $A^{+}=0$ 이다.

# 정의

## 실부분체와 두 류수

$K=\mathbb Q(\mu_p)$ 와 $K^{+}=\mathbb Q(\zeta_p+\zeta_p^{-1})$ 를 두고 류수를 각각 $h$ 와 $h^{+}$ 라 하자. $h^{-}=h/h^{+}$ 를 **상대류수(relative class number)** 라 한다. $h^{-}$ 은 일반화 Bernoulli 수 $B_{1,\chi}$ 의 곱으로 계산되지만 $h^{+}$ 에는 그런 공식이 없다. $p=23$ 이면 $h=h^{-}=3$, $h^{+}=1$ 이고, $p=37$ 이면 $h=h^{-}=37$, $h^{+}=1$ 이다.

## Vandiver 추측

Vandiver 추측은 다음 진술이다. 모든 홀소수 $p$ 에 대해 $p\nmid h^{+}$ 이다. 동치로 $A^{+}=0$ 이며, 또 동치로 순환체 단수군 $C$ 가 단수군 $E$ 안에서 지표 $h^{+}$ 를 갖되 그 지표가 $p$ 로 나뉘지 않는다.

## 알려진 동치 조건

$p$ 에 대해 다음이 서로 동치다.

1. $A^{+}=0$.
2. $\mathbb Q(\mu_{p^{\infty}})^{+}$ 의 탑에서 류군의 $p$ 부분이 모든 층에서 자명하다. 곧 Iwasawa 불변량 $\lambda^{+}=\mu^{+}=\nu^{+}=0$ 이다.
3. 각 짝수 $k$ 에 대해 $\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 가군 $X_\infty^{(\omega^{k})}$ 가 0 이다.

# 성질

## 가정 아래의 귀결

| 가정 아래 결론 | 내용 |
|---|---|
| $A^{-}$ 의 구조 | 각 성분 $A^{(\omega^{i})}$ 가 순환군 $\mathbb Z_p/B_{1,\omega^{-i}}\mathbb Z_p$ |
| Iwasawa 가군 | $X_\infty^{-}$ 가 $\Lambda$ 위 순환, 특성 멱급수가 $L_p$ 그 자체 |
| $K_{4k}(\mathbb Z)$ 의 $p$ 부분 | $0$ |

Kurihara 는 $p$ 에 대한 Vandiver 추측이 모든 $k$ 에서 $K_{4k}(\mathbb Z)$ 의 $p$ 부분이 $0$ 인 것과 동치임을 보였다. 이 동치의 증명에 Quillen–Lichtenbaum 추측(Quillen–Lichtenbaum conjecture)이 쓰이고, 이 추측은 Voevodsky 와 Rost 의 노름 잉여 정리로 증명되었다.

## 알려진 결과

- $p$ 가 정칙이면 $h$ 전체가 $p$ 로 나뉘지 않으므로 Vandiver 는 자명하다.
- 비정칙 $p$ 에 대해서도 $2^{31}$ 미만의 모든 소수에서 반례가 없음이 확인되었다[^1].
- 각 $B_k$ 가 $p$ 로 나뉠 확률을 $1/p$ 로 보는 발견적 논법(heuristic)으로는 비정칙 소수의 비율이 $1-e^{-1/2}$, 곧 약 39% 이고, 수치와 맞는다. Washington 은 같은 종류의 논법으로 $x$ 이하의 반례 개수를 $\tfrac12\log\log x$ 정도로 어림했다[^1]. 이 어림대로라면 반례는 무한히 많지만 계산으로 닿는 범위에서는 나타나지 않는다.
- $\lambda^{+}=\mu^{+}=0$ 은 [Greenberg 추측과 총실수체의 Iwasawa 불변량](greenberg-conjecture.md)의 Greenberg 추측의 특수한 경우다.

## 주추측이 기술하는 범위

짝수 지표 $\chi$ 에 대한 주추측은 다음 꼴이다.

$$
\mathrm{char}\_\Lambda\Big(\big(E_\infty/C_\infty\big)^{(\chi)}\Big)=\mathrm{char}\_\Lambda\Big(X_\infty^{(\chi)}\Big)
$$

$E_\infty$ 는 단수의 극한, $C_\infty$ 는 순환체 단수의 극한이다. 좌변은 단수 가운데 순환체 단수가 아닌 것의 크기를 재고 우변은 류군이다. 주추측은 양변의 특성 아이디얼이 같다는 진술이고, Vandiver 추측은 $p$ 에서 양변이 모두 $0$ 이라는 진술이다.

## 난점

$+$ 쪽에는 Stickelberger 원소 같은 $L$ 값 소멸자가 없다. Thaine 정리(Thaine's theorem)는 $E/C$ 의 $p$ 부분을 소멸시키는 군환 원소가 $A^{+}$ 도 소멸시킨다는 정리이고, 순환체 단수가 주는 [Euler 계](euler-systems.md)가 이 정리에서 시작한다. 이 방법은 $A^{+}$ 와 $E/C$ 의 크기를 묶을 뿐 $A^{+}=0$ 을 주지는 않는다. Eisenstein 합동은 $-$ 쪽 성분이 $0$ 이 아님을 보이는 원소를 만들고, $+$ 쪽에서 같은 일을 하는 합동은 Vandiver 추측의 반례가 된다.

# 활용

## Fermat 의 둘째 경우

Kummer 는 정칙소수 $p$ 에 대해 $x^p+y^p=z^p$ 에 자연수 해가 없음을 보였다. Vandiver 는 $p\nmid h^{+}$ 와 Bernoulli 수에 대한 보조 합동 조건 아래 $p\mid xyz$ 인 둘째 경우를 다루었다. [Fermat 마지막 정리](fermats-last-theorem.md)는 Wiles 가 증명했다.

## 대수적 K 이론

[대수적 K 이론](algebraic-k-theory.md)의 군 $K_n(\mathbb Z)$ 은 Vandiver 추측을 가정하면 모두 계산된다. $K_{4k}(\mathbb Z)=0$ 이고, $K_{4k-2}(\mathbb Z)$ 는 $B_{2k}/k$ 의 분자를 위수로 갖는 순환군이다.

## Bernoulli 수의 대규모 계산

Vandiver 추측의 검증은 $B_k\bmod p$ 를 $k\lt p$ 전체에 대해 계산하는 일을 포함한다. Buhler–Harvey 와 Hart–Harvey–Ong 은 이 계산에 빠른 다항식 곱셈을 썼고, 그 결과로 $2^{31}$ 미만의 비정칙 소수 표가 만들어졌다.

[^1]: H. S. Vandiver 의 원래 작업은 1920–30 년대이며, 정리와 동치 조건은 L. Washington, *Introduction to Cyclotomic Fields* (2판) 8, 10 장에 정리되어 있다. 반례 개수의 어림은 같은 책 8.3 절. 수치 검증은 J. Buhler, D. Harvey, *Irregular primes to 163 million*, Math. Comp. **80** (2011) 와 W. Hart, D. Harvey, W. Ong, *Irregular primes to two billion*, Math. Comp. **86** (2017). $K$ 이론과의 관계는 C. Weibel, *Algebraic K-theory of rings of integers in local and global fields* 를 보라.

# 연관 문서

## 선수지식

- [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)
- [Iwasawa 주추측](iwasawa-main-conjecture.md)

## 더 알아보기

- [Greenberg 추측과 총실수체의 Iwasawa 불변량](greenberg-conjecture.md)

#number_theory #computation #algebra
