# Stickelberger 원소와 Gauss 합

# 개요

[Gauss 합](gauss-sums.md)의 절댓값은 $\sqrt p$ 로 정해져 있지만, 그 수가 순환체 안의 어디에 놓이는지는 절댓값이 말해 주지 않는다. $g(\chi)$ 가 생성하는 아이디얼의 소인수분해를 지표 $\chi$ 에 따라 결정하는 것이 Stickelberger 의 정리다.

$\pi=1-\zeta_p$ 로 두고 $\omega$ 를 Teichmüller 지표라 하면

$$
\mathrm{ord}\_\pi\thinspace g(\omega^{-k})=k,\qquad 0\le k\le p-2
$$

이다. Gauss 합의 부치가 지표의 지수를 읽어 준다. Galois 켤레를 모으면 이 자료가 군환 $\mathbb Q[G]$ 의 한 원소로 묶인다.

$$
\theta_m=\sum_{a\in(\mathbb Z/m)^{\times}}\Big\lbrace\frac{a}{m}\Big\rbrace\thinspace\sigma_a^{-1}
$$

이것이 **Stickelberger 원소**다. 계수는 유리수지만 $(c-\sigma_c)\theta_m$ 꼴은 정수계수이고, 그렇게 얻은 정수계수 원소들이 $\mathbb Q(\mu_m)$ 의 이데알류군을 소멸시킨다.

$\theta_m$ 의 지표 성분이 $L(0,\chi)$ 이므로, 이 정리는 $L$ 함수의 값을 계수로 삼은 군환 원소가 이데알류군을 죽인다는 진술이다. [Iwasawa 주추측](iwasawa-main-conjecture.md)에서 Herbrand 방향이 쉬운 것이 이 정리 때문이고, 반대 방향이 어려운 것은 소멸자가 크기를 말해 주지 않기 때문이다.

# 직관

## 절댓값과 소인수분해

$g(\chi)=\sum_{a}\chi(a)\zeta_p^{a}$ 는 $\mathbb Q(\mu_{p-1},\mu_p)$ 의 원소이고 $|g(\chi)|=\sqrt p$ 다. 이 절댓값은 무한 자리의 정보다. 유한 자리에서는 $g(\chi)\overline{g(\chi)}=\pm p$ 에서 $(g(\chi))$ 가 $p$ 위의 [소 아이디얼](prime-ideals.md)들로만 이루어진다는 것까지 나오지만, 각 소 아이디얼의 지수는 나오지 않는다.

$p$ 는 $\mathbb Q(\mu_p)$ 에서 완전히 분기해 $(p)=(\pi)^{p-1}$ 이므로 물음은 $g(\chi)$ 가 $\pi$ 로 몇 번 나뉘는가가 되고, 답이 $\chi=\omega^{-k}$ 의 $k$ 다.

## 부치 계산

$\mathbb Z_p[\mu_p]$ 에서 $\zeta_p=1+\pi$ 이므로

$$
g(\omega^{-k})=\sum_{a=1}^{p-1}\omega^{-k}(a)(1+\pi)^{a}
=\sum_{j\ge0}\binom{\cdot}{j}\pi^{j}\sum_{a}\omega^{-k}(a)a^{\thinspace j}\big/j!\ \text{꼴}
$$

로 전개된다. 안쪽 합 $\sum_a\omega^{-k}(a)a^{j}$ 는 $\omega$ 가 $\bmod p$ 에서 항등이므로 직교성에 의해 $j\equiv k$ 일 때만 $p$ 를 법으로 살아남고, 가장 낮은 살아남는 항이 $j=k$ 라 부치가 $k$ 다. 같은 계산을 더 밀면 **Stickelberger 합동**

$$
\frac{g(\omega^{-k})}{\pi^{k}}\equiv\frac{-1}{k!}\pmod{\pi}
$$

이 나와 최고차 계수까지 계승으로 주어진다.

## 군환 원소로의 묶음

$\sigma_t$ 가 $\omega$ 를 $\omega^{t}$ 로 보내므로 $\sigma_t$ 를 적용하면 지수 $k$ 가 $[0,p-2]$ 안의 대표원 $\langle kt\rangle$ 로 바뀐다. 따라서

$$
\big(g(\omega^{-k})\big)=\prod_t \mathfrak P_t^{\thinspace\langle kt\rangle}
$$

이고, 지수의 목록 $\lbrace\langle kt\rangle/(p-1)\rbrace$ 이 $\theta$ 의 계수 $\lbrace a/m\rbrace$ 다. 분수부 함수는 $p$ 진 전개의 자릿수를 재는 자리에 있다.

## 소멸자의 정체

$\mathfrak P^{\thinspace\theta}$ 가 주 아이디얼이라는 것이 위 등식의 내용이다. $\theta$ 자체는 정수계수가 아니지만 정수계수로 만드는 원소를 곱하면 $\mathfrak P$ 의 류를 그만큼 거듭제곱하면 단위류라는 말이 되고, 소 아이디얼의 류가 류군을 생성하므로 소멸 정리가 나온다.

$\lbrace a/m\rbrace+\lbrace-a/m\rbrace=1$ 이므로 $(1+\sigma_{-1})\theta_m=\sum_a\sigma_a$ 이고, $\theta$ 의 짝수 부분에는 노름원소밖에 없다. 노름원소는 류군의 짝수 성분에 대해 아무 정보도 주지 않으므로 Stickelberger 는 홀수 성분만 다루며, 이 비대칭이 Herbrand–Ribet 과 Vandiver 추측까지 이어진다.

# 정의

## Stickelberger 원소와 아이디얼

$K=\mathbb Q(\mu_m)$ , $G=\mathrm{Gal}(K/\mathbb Q)\cong(\mathbb Z/m)^{\times}$ , $\sigma_a(\zeta_m)=\zeta_m^{a}$ 라 하자.

$$
\theta_m=\sum_{a\in(\mathbb Z/m)^{\times}}\Big\lbrace\frac{a}{m}\Big\rbrace\sigma_a^{-1}\in\mathbb Q[G],
\qquad
I_m=\mathbb Z[G]\cap\theta_m\mathbb Z[G]
$$

$I_m$ 을 **Stickelberger 아이디얼**이라 한다. $\gcd(c,m)=1$ 인 $c$ 에 대해 $(c-\sigma_c)\theta_m\in\mathbb Z[G]$ 이고, 이런 원소들이 $I_m$ 을 생성한다.

## Gauss 합의 소인수분해

**정리(Stickelberger).** $\mathfrak P$ 를 $\mathbb Q(\mu_{p-1},\mu_p)$ 의 $p$ 위 소 아이디얼이라 하자. $\chi$ 가 $\mathbb F_p^{\times}$ 의 위수 $d\mid p-1$ 인 지표일 때

$$
\big(g(\chi)\big)=\mathfrak P^{\thinspace(p-1)\theta}
$$

꼴로 쓸 수 있고, 지수에 나타나는 유리수가 위의 $\lbrace a/m\rbrace$ 이다. $q=p^{f}$ 의 $\mathbb F_q$ 로 가면 지수가 $k$ 의 $p$ 진 자릿수의 합 $s_p(k)$ 로 대체된다.

## Stickelberger 의 정리

**정리.** $I_m$ 은 $\mathbb Q(\mu_m)$ 의 이데알류군 $\mathrm{Cl}(K)$ 를 소멸시킨다. 곧 $\alpha\in I_m$ 과 아이디얼류 $[\mathfrak a]$ 에 대해 $[\mathfrak a]^{\alpha}=1$ 이다[^1].

**증명의 요지.** 류군은 $m$ 과 서로소인 1 차 소 아이디얼 $\mathfrak p$ 의 류로 생성된다. $\mathfrak p$ 의 잉여체 위에서 Gauss 합을 만들면 위 분해에 의해 $\mathfrak p^{(c-\sigma_c)\theta}$ 가 $g$ 의 적당한 거듭제곱이 생성하는 주 아이디얼이 되므로 그 류가 자명하다. $\square$

## $L$ 값과의 관계

$\chi$ 를 도체 $f\mid m$ 인 원시 지표라 하면

$$
\chi(\theta_m)=\sum_a\Big\lbrace\frac{a}{m}\Big\rbrace\chi^{-1}(a)
=-L(0,\chi^{-1})\times(\text{국소 인자}),
\qquad
L(0,\chi)=-B_{1,\chi}=-\frac1f\sum_{a=1}^{f}\chi(a)\thinspace a
$$

이다. $\chi$ 가 짝이면 $L(0,\chi)=0$ 이고 $\theta$ 의 짝수 부분 소멸과 맞는다. $\theta_m$ 은 $L$ 함수의 $s=0$ 값들을 성분으로 갖는 군환 원소다.

# 성질

## Herbrand 방향

$p$ 가 홀소수, $k$ 가 짝수, $2\le k\le p-3$ 이라 하자. $\theta$ 의 $\omega^{1-k}$ 성분은 $L(0,\omega^{-k})$ 와 같고 Kummer 합동으로

$$
L_p(0,\omega^{-k})\ \equiv\ -\frac{B_k}{k}\pmod p
$$

이다. $p\nmid B_k$ 이면 그 성분이 $\mathbb Z_p$ 의 단원이 되고 소멸 정리가 $A^{(\omega^{1-k})}=0$ 을 준다. 이것이 **Herbrand 정리**다.

반대 방향, 곧 $p\mid B_k$ 일 때 그 성분이 0 이 아님을 보이는 것이 Ribet 의 정리다. 군이 크다는 것을 보이려면 소멸자가 아니라 원소를 만들어야 한다.

## 지표 공식과 상대류수

Iwasawa 와 Sinnott 은 Stickelberger 아이디얼의 지표를 계산했다.

$$
\big[\thinspace\mathbb Z[G]^{-}:I_m^{-}\thinspace\big]=h^{-}\_m
$$

$h^{-}$ 은 상대류수 $h/h^{+}$ 다. 이 공식이 [Iwasawa 주추측](iwasawa-main-conjecture.md)에서 총량을 고정하는 두 지표 공식 중 하나이고, 나머지 하나가 순환체 단수의 지표 $[E:C]=h^{+}$ 다.

| 쪽 | 대상 | 지표 공식 | $L$ 값 |
|---|---|---|---|
| 홀수 성분 $-$ | Stickelberger 아이디얼 | $[\mathbb Z[G]^{-}:I^{-}]=h^{-}$ | $\chi$ 가 홀일 때의 $L(0,\chi)$ |
| 짝수 성분 $+$ | 순환체 단수 | $[E:C]=h^{+}$ | $\chi$ 가 짝일 때의 $L'(0,\chi)$ |

$\theta$ 가 홀수 쪽만 보는 것과 단수가 짝수 쪽만 보는 것은 모두 복소켤레의 작용에서 나온다.

## 소멸자와 크기의 간극

Stickelberger 는 $I_m$ 이 류군을 죽인다고만 말하므로 $\char35{}\mathrm{Cl}$ 의 상계는 나오지 않는다. 지표 공식은 크기를 주지만 $\Lambda$ 가군으로서의 구조를 주지 않는다.

1. **Stickelberger** — 소멸자. 성분별로 0 인지 판정한다.
2. **지표 공식** — 총량. 전체 크기를 고정한다.
3. **주추측** — 구조. $\Lambda$ 가군의 특성 아이디얼까지 결정한다.

[Euler 계](euler-systems.md)가 필요한 지점이 1 에서 3 으로 올라가는 대목이다. Stickelberger 원소 하나는 방정식 하나를 주지만 Euler 계는 층마다 새 방정식을 공급한다.

## 일반화

- **Brumer–Stark 추측.** 임의의 아벨 확대 $L/K$ 에 대해 $\theta$ 의 유사물이 류군을 소멸시키고, 그 소멸을 실현하는 원소가 명시적 조건을 만족한다는 예측이다. 총실체 위에서는 Dasgupta–Kakde 가 증명했다.
- **Gross–Koblitz 공식.** Stickelberger 합동의 $\pi$ 진 정밀판으로, Gauss 합을 Morita 의 $p$ 진 감마함수 값의 곱으로 표현해 합동을 등식으로 올린다.
- **Rubin–Stark 원소.** 고차 소실 차수에서의 유사물이다. 존재하면 Euler 계가 되지만 아직 추측이다.

# 활용

## 허수이차체의 유수 공식

$m=p\equiv3\pmod4$ 이고 $\chi$ 가 이차 지표이면 $\theta_p$ 의 $\chi$ 성분이

$$
h\big(\mathbb Q(\sqrt{-p})\big)=\frac{1}{2-\left(\frac2p\right)}\sum_{0\lt a\lt p/2}\left(\frac{a}{p}\right)\cdot(-1)\ \text{꼴}
$$

의 고전적 유수 공식으로 환원된다. 이차잉여가 앞쪽 절반에 몇 개 더 있는지가 류수를 준다는 Dirichlet 의 결과이며, Stickelberger 원소는 이를 모든 지표로 확장한다.

## 정칙소수 판정

Kummer 의 기준, 곧 $p\nmid B_2B_4\cdots B_{p-3}$ 이면 $p\nmid h$ 라는 진술의 홀수 쪽 절반이 Herbrand 방향에서 나온다. 짝수 쪽은 [Vandiver 추측](vandiver-conjecture.md)에 기대며, 그 추측은 대규모 수치 검증을 받았다.

## Jacobi 합과 곡선의 점 개수

Gauss 합의 분해는 Jacobi 합 $J(\chi,\psi)=g(\chi)g(\psi)/g(\chi\psi)$ 의 분해를 준다. Jacobi 합은 [유한체](finite-fields.md) 위의 Fermat 곡선 $x^{n}+y^{n}=1$ 의 점 개수를 세는 Weil 수이고, 그 절댓값이 $\sqrt q$ 인 것이 Weil 추측의 가장 이른 사례다. Stickelberger 의 분해는 그 Weil 수의 소 아이디얼별 지수까지 주어 곡선의 [Newton 다각형](newton-polygon.md)과 Hodge 수를 조합적으로 계산하게 한다.

## 류군 계산

실제 계산에서 $I_m$ 은 류군의 후보를 줄이는 데 쓰인다. 성분별로 $L(0,\chi)$ 의 $p$ 부치를 계산하면 0 이어야 할 성분이 드러나고, 남은 성분만 하강이나 Minkowski 경계로 다룬다. 순환체의 류수표가 이 방식으로 작성된다.

[^1]: 표준 서술은 L. Washington, *Introduction to Cyclotomic Fields* (2판, Springer 1997) 6, 15 장과 K. Ireland, M. Rosen, *A Classical Introduction to Modern Number Theory* (2판) 14 장. 원논문은 L. Stickelberger, *Über eine Verallgemeinerung der Kreistheilung*, Math. Ann. **37** (1890). Gross–Koblitz 는 Ann. of Math. **109** (1979), Brumer–Stark 의 해결은 S. Dasgupta, M. Kakde, Ann. of Math. **200** (2024).

# 연관 문서

## 선수지식

- [Gauss 합](gauss-sums.md)
- [Bernoulli 수와 von Staudt–Clausen 정리](bernoulli-numbers.md)

## 더 알아보기

- [Iwasawa 주추측과 순환체 단수](iwasawa-main-conjecture.md)
- [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)

#number_theory #algebra #field_theory #theorem
