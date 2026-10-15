# Iwasawa 대수

# 개요

Iwasawa 대수는 $\mathbb Z_p$ 계수 한 변수 형식 멱급수환 $\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 이다. $\Gamma\cong\mathbb Z_p$ 인 위수 무한 군의 완비 군환과 같은 환이고, 유한생성 $\Lambda$ 모듈이 유한 오차를 허용한 직합으로 분류된다.

이 분류가 주는 두 정수 $\lambda$ 와 $\mu$ 가 $\mathbb Z_p$ 확대의 층마다 자라는 류수를 하나의 공식으로 쓴다.

# 직관

$\mathbb Z_p$ 확대는 체의 탑 $K=K_0\subset K_1\subset\cdots$ 으로 주어지고 $\mathrm{Gal}(K_n/K)$ 가 $\mathbb Z/p^n$ 이다. 각 층의 아이디얼 류군 $A_n$ 에는 군환 $\mathbb Z_p\lbrack\mathbb Z/p^n\rbrack=\mathbb Z_p\lbrack t\rbrack/(t^{p^n}-1)$ 이 작용한다. 층마다 다른 환이 작용하므로 $A_0,A_1,A_2,\dots$ 의 크기를 함께 다룰 환이 없다.

$t=1+T$ 로 바꾸면 $n$ 번째 군환이 $\mathbb Z_p\lbrack T\rbrack/((1+T)^{p^n}-1)$ 이고, 이 환들이 $n$ 에 대해 사영계를 이룬다. 역극한을 취하면 $\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 이 나오고, 모든 층의 류군이 이 한 환 위의 모듈 $X=\varprojlim A_n$ 하나로 묶인다. $X$ 를 분해하면 층마다 세던 크기가 분해에 쓰인 멱급수의 차수와 $p$ 지수로 읽힌다.

# 정의

## 완비 군환

$\Gamma$ 가 위수 무한 순환 pro-$p$ 군이고 $\Gamma_n=\Gamma^{p^n}$ 이면 **완비 군환**은 $\mathbb Z_p\lbrack\lbrack\Gamma\rbrack\rbrack=\varprojlim_n\mathbb Z_p\lbrack\Gamma/\Gamma_n\rbrack$ 이다. 생성원 $\gamma$ 를 $1+T$ 로 보내는 사상이 $\mathbb Z_p\lbrack\lbrack\Gamma\rbrack\rbrack\cong\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 을 준다. 이 환을 $\Lambda$ 로 쓴다.

## 특이 다항식

$P(T)=T^d+a_{d-1}T^{d-1}+\cdots+a_0\in\mathbb Z_p\lbrack T\rbrack$ 의 선두계수가 $1$ 이고 나머지 계수가 모두 $p$ 로 나뉘면 $P$ 를 **특이 다항식**이라 한다.

## 유사동형

유한생성 $\Lambda$ 모듈 $M,N$ 에 대해 핵과 여핵이 모두 유한인 $\Lambda$ 준동형 $M\to N$ 이 있으면 $M$ 과 $N$ 이 **유사동형**이라 한다.

## 특성 아이디얼

비틀림 유한생성 $\Lambda$ 모듈 $M$ 이 $\bigoplus_i\Lambda/(g_i)$ 와 유사동형일 때 $\mathrm{char}(M)=(\prod_i g_i)$ 를 $M$ 의 **특성 아이디얼**이라 한다. 구조 정리가 이 아이디얼이 분해의 선택과 무관함을 준다.

# 성질

## Weierstrass 준비 정리

**정리.** $0\neq f\in\Lambda$ 는 $f=p^{\mu}UP$ 로 유일하게 쓰인다. $\mu\ge0$ 은 정수, $U$ 는 $\Lambda$ 의 단위, $P$ 는 특이 다항식이다[^1].

$f$ 의 계수에서 $p$ 의 공통 인자를 $p^\mu$ 로 빼면 남은 급수의 계수 가운데 $p$ 로 나뉘지 않는 것이 있다. 그 가운데 차수가 가장 낮은 자리를 $d$ 라 하면 $f/p^\mu$ 를 $\bmod p$ 에서 읽은 것이 $T^d$ 의 단위배다. Hensel 식 올림으로 이 분해를 $\bmod p^k$ 마다 이어 올린다. ∎

## 구조 정리

**정리.** 유한생성 $\Lambda$ 모듈 $M$ 은 다음과 유사동형이다[^2].

$$
\Lambda^{r}\oplus\bigoplus_{i=1}^{s}\Lambda/(p^{m_i})\oplus\bigoplus_{j=1}^{t}\Lambda/(P_j^{n_j})
$$

$P_j$ 는 서로 다른 기약 특이 다항식이고 $r,s,t,m_i,n_j$ 는 $M$ 으로 정해진다. $\Lambda$ 가 2차원 정칙 국소환이므로 높이 1 소아이디얼마다 국소화하면 이산 부치환이 되고, 거기서 얻은 불변량을 모은 것이 이 분해다. ∎

## 국소환으로서의 구조

$\Lambda$ 는 극대 아이디얼 $(p,T)$ 를 갖는 완비 [Noether](noetherian-rings.md) 국소환이고 [Krull 차원](krull-dimension.md)이 $2$ 다. 높이 1 소아이디얼은 $(p)$ 와 기약 특이 다항식이 생성하는 것이다.

## 류수 공식

**정리(Iwasawa).** $\mathbb Z_p$ 확대의 $n$ 번째 층의 류수에서 $p$ 부분을 $p^{e_n}$ 이라 하면, 어떤 $\lambda,\mu,\nu$ 와 충분히 큰 모든 $n$ 에서 $e_n=\lambda n+\mu p^n+\nu$ 다[^3].

$X=\varprojlim A_n$ 에 구조 정리를 적용해 $\mu=\sum_i m_i$ , $\lambda=\sum_j n_j\deg P_j$ 로 두면, $A_n=X/((1+T)^{p^n}-1)X$ 의 크기가 각 직합성분에서 계산된다. $\Lambda/(p^m)$ 성분이 $p^{m p^n}$ 을, $\Lambda/(P^n)$ 성분이 $p^{n\deg P}$ 를 각 층에서 보탠다. ∎

# 활용

- **Iwasawa 주추측.** [Iwasawa 주추측](iwasawa-main-conjecture.md)은 순환체의 류군 쪽 모듈의 특성 아이디얼이 $p$ 진 $L$ 함수의 멱급수가 생성하는 아이디얼과 같다는 진술이다. 양변이 모두 $\Lambda$ 의 아이디얼이라는 데서 진술이 성립한다.
- **p 진 L 함수의 멱급수 표현.** [Kubota–Leopoldt $p$ 진 zeta 함수](kubota-leopoldt-zeta.md)를 $f_\chi((1+q)^{1-s}-1)$ 로 쓸 때의 $f_\chi$ 가 $\Lambda$ 의 원소다. Weierstrass 준비 정리가 그 영점과 $p$ 지수를 분리한다.
- **mu 불변량의 소멸.** Ferrero–Washington 정리는 아벨 체의 원분 $\mathbb Z_p$ 확대에서 $\mu=0$ 이라는 진술이고[^4], 류수 공식의 $\mu p^n$ 항이 사라져 $e_n$ 이 $n$ 에 일차로 자란다.
- **Selmer 군의 Iwasawa 이론.** 타원곡선의 Selmer 군을 탑에서 모은 모듈도 유한생성 $\Lambda$ 모듈이고, 그 특성 아이디얼을 [p 진 L 함수](p-adic-l-function.md)와 견주는 것이 같은 틀의 되풀이다.

[^1]: L. C. Washington, *Introduction to Cyclotomic Fields*, 2판, Springer, 1997, 7 장 정리 7.3.
[^2]: L. C. Washington, *Introduction to Cyclotomic Fields*, 2판, Springer, 1997, 13 장 정리 13.12.
[^3]: K. Iwasawa, *On $\Gamma$-extensions of algebraic number fields*, Bulletin of the American Mathematical Society **65** (1959), 183–226.
[^4]: B. Ferrero, L. C. Washington, *The Iwasawa invariant $\mu_p$ vanishes for abelian number fields*, Annals of Mathematics **109** (1979), 377–395.

# 연관 문서

## 선수지식

- [p 진수](p-adic-numbers.md)
- [Noether 환](noetherian-rings.md)

## 더 알아보기

- [Hida 이론](hida-theory.md)

#algebra #number_theory #ring_theory
