# Dirichlet 단수 정리

# 개요

Dirichlet 단수 정리는 [대수적 수체](algebraic-number-fields.md) $K$ 의 정수환 $\mathcal O_K$ 에서 역원을 갖는 원소들이 이루는 군의 구조를 정한다. 그 군은 유한 순환군과 자유가환군의 곱이고, 자유 부분의 계수는 $K$ 의 실 매장 수와 복소 매장 쌍의 수로 정해진다.

계수를 재는 도구는 단수를 로그 좌표로 옮기는 매장이다. 곱셈군을 덧셈군으로 바꾸면 단수군의 상이 [격자](lattices.md)가 되고, 격자의 계수가 곧 단수군의 계수다.

# 직관

$\mathbb Z$ 에서 역원을 갖는 정수는 $\pm1$ 뿐이다. $\mathbb Z\lbrack\sqrt2\rbrack$ 에서는 사정이 다르다. $(1+\sqrt2)(-1+\sqrt2)=1$ 이므로 $1+\sqrt2$ 가 역원을 갖고, 그 거듭제곱 $3+2\sqrt2$ , $7+5\sqrt2$ 도 모두 역원을 갖는다. 단수가 무한히 많다.

왜 $\mathbb Z$ 와 달라졌는지 본다. $\alpha=a+b\sqrt2$ 가 단수일 조건은 노름 $N(\alpha)=a^2-2b^2$ 가 $\pm1$ 이라는 것이다. $\alpha$ 와 그 켤레 $\bar\alpha=a-b\sqrt2$ 의 곱이 $\pm1$ 이므로, $\alpha$ 가 커지면 $\bar\alpha$ 가 그만큼 작아진다. 두 값이 함께 커질 수는 없고 곱만 묶여 있다.

이 조건을 로그로 옮긴다. $(\log\lvert\alpha\rvert,\log\lvert\bar\alpha\rvert)$ 를 평면의 점으로 보면 곱이 $\pm1$ 이라는 조건은 두 좌표의 합이 $0$ 이라는 직선이다. 단수들은 그 직선 위의 점이 되고, 거듭제곱은 같은 점을 정수배 한 것이다.

직선 위에 단수의 상이 조밀하지 않고 띄엄띄엄 놓인다면 그 상은 격자이고 생성원이 하나다. 그 생성원에 해당하는 단수가 $1+\sqrt2$ 이며, 모든 단수는 $\pm(1+\sqrt2)^n$ 이다. 정리는 이 계산을 일반 수체에서 하고, 직선의 차원이 무엇으로 정해지는지를 말한다.

# 정의

## 매장과 로그 매장

수체 $K$ 의 차수를 $n=\lbrack K:\mathbb Q\rbrack$ 이라 하고, $\mathbb R$ 로 가는 매장의 수를 $r_1$ , 서로 켤레인 복소 매장의 쌍 수를 $r_2$ 라 한다. 그러면 $n=r_1+2r_2$ 다.

**로그 매장**을 다음으로 정의한다.

$$
\lambda\colon\mathcal O_K^\times\to\mathbb R^{r_1+r_2},\qquad
\lambda(u)=\bigl(\log\lvert\sigma_1(u)\rvert,\dots,\log\lvert\sigma_{r_1}(u)\rvert,\thinspace 2\log\lvert\tau_1(u)\rvert,\dots,2\log\lvert\tau_{r_2}(u)\rvert\bigr)
$$

여기서 $\sigma_i$ 는 실 매장, $\tau_j$ 는 복소 매장의 대표다. $\lambda$ 는 곱을 합으로 보내는 준동형이다.

## 단수군

$\mathcal O_K^\times$ 는 $\mathcal O_K$ 에서 곱셈 역원을 갖는 원소들의 군이다. $u$ 가 단수일 필요충분조건은 $N_{K/\mathbb Q}(u)=\pm1$ 이다.

$K$ 에 든 1 의 거듭제곱근 전체를 $\mu_K$ 라 쓴다. 유한 순환군이다.

# 성질

## 정리

**정리 (Dirichlet, 1846).** 다음 동형이 성립한다.

$$
\mathcal O_K^\times\cong\mu_K\times\mathbb Z^{r}, \qquad r=r_1+r_2-1
$$

**증명의 요지.** 세 단계다. 첫째, $\lambda$ 의 핵은 모든 매장에서 절댓값이 $1$ 인 단수들이고, Kronecker 의 정리에 의해 그런 대수적 정수는 1 의 거듭제곱근이다. 둘째, 노름이 $\pm1$ 이므로 상은 좌표의 합이 $0$ 인 $r$ 차원 초평면 $H$ 안에 있고, 유계 영역에 든 대수적 정수가 유한 개이므로 상은 이산이다. 곧 상은 $H$ 안의 격자다. 셋째, 그 격자가 $H$ 전체를 채운다는 것은 Minkowski 의 볼록체 정리로 노름이 유계인 원소를 충분히 많이 만들어 보인다.

## 계수의 값

| 수체 | $r_1$ | $r_2$ | $r$ | 단수군 |
| --- | --- | --- | --- | --- |
| $\mathbb Q$ | $1$ | $0$ | $0$ | $\lbrace\pm1\rbrace$ |
| 허수이차체 | $0$ | $1$ | $0$ | 유한 순환군 |
| 실이차체 | $2$ | $0$ | $1$ | $\pm\varepsilon^{\mathbb Z}$ |
| $\mathbb Q(\zeta_p)$ | $0$ | $(p-1)/2$ | $(p-3)/2$ | $\mu\times\mathbb Z^{(p-3)/2}$ |

실이차체의 생성원 $\varepsilon$ 을 **기본단수**라 한다. $\mathbb Q(\sqrt d)$ 의 기본단수를 구하는 일은 [Pell 방정식](pell-equation.md) $x^2-dy^2=\pm1$ 의 최소해를 구하는 일과 같다.

## 조절자

격자 $\lambda(\mathcal O_K^\times)$ 의 기본영역 부피를 **조절자** $R_K$ 라 한다. 기본단수들의 로그 좌표로 만든 $r\times r$ 행렬의 [행렬식](determinants.md) 절댓값이다.

조절자는 단수가 얼마나 드문드문 있는지를 재는 수이고, 기본단수가 클수록 크다.

## 류수 공식과의 관계

Dedekind zeta 함수 $\zeta_K(s)$ 의 $s=1$ 에서의 유수가 다음과 같다.

$$
\mathop{\mathrm{Res}}\_{s=1}\zeta_K(s)=\frac{2^{r_1}(2\pi)^{r_2}h_KR_K}{w_K\sqrt{\lvert d_K\rvert}}
$$

$h_K$ 는 류수, $w_K$ 는 $\mu_K$ 의 위수, $d_K$ 는 판별식이다. 류수와 조절자가 곱으로만 나타나므로 한쪽을 알아야 다른 쪽이 정해진다. 실이차체에서 기본단수가 커지면 류수가 작아지는 경향이 이 등식에서 읽힌다.

# 활용

- **Pell 방정식.** 실이차체의 단수군이 계수 $1$ 이라는 사실이 $x^2-dy^2=1$ 의 해가 최소해의 거듭제곱으로 전부 나온다는 진술과 같다.
- **Mordell 방정식.** $y^2=x^3+k$ 꼴 방정식의 정수해를 다룰 때 단수군의 계수가 유한하다는 점을 써서 경우를 유한하게 줄인다.
- **순환체의 단수.** $\mathbb Q(\zeta_p)$ 의 순환단수는 명시적으로 쓸 수 있는 부분군이고, 그 지표가 류수의 실수 성분과 같다([Iwasawa 주추측](iwasawa-main-conjecture.md)).
- **계산 대수적 수론.** 단수군의 생성원과 류군을 함께 구하는 것이 수체 계산의 기본 작업이고, 조절자의 크기가 계산량을 지배한다.

# 연관 문서

## 선수지식

- [대수적 수체와 정수환](algebraic-number-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #algebra
