# Adams 연산

# 개요

**Adams 연산(Adams operations)** 은 벡터다발을 거듭제곱하는 연산을, 다발의 직합과 텐서곱을 모두 보존하게 고친 K 이론 위의 연산이다. 선다발 $L$ 은 $L^{\otimes k}$ 로 보내면 되지만, 외곱은 $\Lambda^2(E\oplus F)=\Lambda^2E\oplus(E\otimes F)\oplus\Lambda^2F$ 여서 직합을 보존하지 않는다. Adams 연산 $\psi^k$ 는 외곱 연산의 조합으로 정의되어 덧셈과 곱을 모두 보존하고, 구면의 K 군 위에서 $k^n$ 배로 작용하는 이 성질로 Hopf 불변량이 $1$ 인 사상이 차원 $2,4,8$ 에서만 존재함이 증명된다.

# 직관

Adams 연산은 위상 K 이론 위의 환 준동형 $\psi^k:K(X)\to K(X)$ 의 족으로, 선다발 $L$ 을 $k$ 번 텐서곱한 $L^{\otimes k}$ 로 보내는 것을 덧셈과 곱을 보존하도록 연장한 것이다. 외곱 연산 $\lambda^i$ 의 조합으로 정의된다.

[Bott 주기성](bott-periodicity.md)으로 정한 짝수 차원 구면의 K 군 위에서 $\psi^k$ 는 $k^n$ 배로 작용한다. 이 단순한 작용을 써서 Adams 와 Atiyah 는 Hopf 불변량이 $1$ 인 사상이 차원 $2,4,8$ 에서만 존재함을 보였다.

K 이론에서 벡터다발 $E$ 의 외곱 $\Lambda^iE$ 는 정의되지만 $E\mapsto\Lambda^iE$ 는 덧셈을 보존하지 않는다. $\Lambda^2(E\oplus F)=\Lambda^2E\oplus(E\otimes F)\oplus\Lambda^2F$ 이기 때문이다. 덧셈과 곱을 모두 보존하는 연산을 원한다.

$E$ 가 선다발들의 합 $L\_1\oplus\cdots\oplus L\_m$ 이라 하면 $\Lambda^iE$ 는 $L\_j$ 들의 $i$ 차 기본 대칭식이다. 기본 대칭식 대신 거듭제곱 합 $L\_1^k+\cdots+L\_m^k$ 을 취하면 덧셈은 합집합으로, 곱은 $(L\_iL\_j)^k=L\_i^kL\_j^k$ 로 보존된다. 거듭제곱 합은 Newton 항등식으로 기본 대칭식의 다항식이므로, 선다발로 쪼개지지 않는 $E$ 에서도 $\Lambda^iE$ 들의 같은 다항식으로 정의할 수 있다.

# 정의

콤팩트 Hausdorff 공간 $X$ 의 복소 K 이론 $K(X)$ 에서 $\lambda\_t(E)=\sum\_i\Lambda^iE\thinspace t^i$ 라 한다. Newton 다항식 $Q\_k$ 로 $s\_k=Q\_k(e\_1,\dots,e\_k)$ 가 거듭제곱 합 $\sum x\_j^k$ 를 기본 대칭식 $e\_i$ 로 적은 것이라 할 때

$$
\psi^k(E)=Q\_k\bigl(\Lambda^1E,\dots,\Lambda^kE\bigr)
$$

를 **Adams 연산** 이라 한다. 예를 들어 $\psi^2(E)=E\otimes E-2\Lambda^2E$ 다.

# 성질

## 기본 성질

- $\psi^k$ 는 환 준동형이고 연속사상의 당김과 가환한다.
- 선다발 $L$ 에 대해 $\psi^k(L)=L^{\otimes k}$ 이다.
- $\psi^k\psi^l=\psi^{kl}$ 이다.
- 소수 $p$ 에 대해 $\psi^p(x)\equiv x^p\pmod p$ 이다.

처음 셋은 분열 원리로 선다발의 합에서 확인하면 충분하고, 넷째는 $(L\_1+\cdots+L\_m)^p\equiv L\_1^p+\cdots+L\_m^p\pmod p$ 에서 나온다.

## 구면에서의 작용

$\widetilde K(S^{2n})\cong\mathbb Z$ 의 생성원 $\beta\_n$ 에 대해 $\psi^k(\beta\_n)=k^n\beta\_n$ 이다. $n=1$ 에서 $\beta\_1=H-1$ 이고 $H$ 는 $S^2=\mathbb{CP}^1$ 의 표준 선다발이다. $(H-1)^2=0$ 이므로 $\psi^k(H-1)=H^k-1=(1+\beta\_1)^k-1=k\beta\_1$ 이고, 일반 $n$ 은 Bott 주기성의 외적으로 $\beta\_n=\beta\_1^{\ast n}$ 에서 나온다.

## Hopf 불변량 1

**정리(Adams–Atiyah).** $f:S^{4n-1}\to S^{2n}$ 의 [Hopf 불변량](hopf-invariant.md)이 홀수이면 $n\in\lbrace 1,2,4\rbrace$ 다[^1].

증명의 요지. $f$ 의 사상원뿔 $X$ 에서 $\widetilde K(X)$ 는 $a$, $b$ 를 기저로 하고 $a^2=hb$ 이며 $h$ 가 Hopf 불변량이다. 구면에서의 작용으로 $\psi^k(a)=k^na+\mu\_kb$, $\psi^k(b)=k^{2n}b$ 이고, $\psi^2(a)\equiv a^2\pmod 2$ 에서 $\mu\_2\equiv h$ 가 홀수다. $\psi^2\psi^3=\psi^3\psi^2$ 를 $a$ 에 적용하면

$$
2^n(2^n-1)\mu\_3=3^n(3^n-1)\mu\_2
$$

이고, $\mu\_2$ 가 홀수이므로 $2^n$ 이 $3^n-1$ 을 나눈다. 이것은 $n=1,2,4$ 에서만 성립한다.

## 실 K 이론

실 K 이론 $KO(X)$ 에도 같은 정의로 $\psi^k$ 가 있다. Adams 는 실사영공간의 $\widetilde{KO}$ 위에서 $\psi^k$ 를 계산해 구면 $S^{n-1}$ 위의 일차독립인 벡터장의 최대 개수가 Radon–Hurwitz 수 $\rho(n)-1$ 임을 증명했다[^2].

# 활용

- **나눗셈 대수.** Hopf 불변량 $1$ 정리에서 $\mathbb R^n$ 에 나눗셈이 되는 쌍선형 곱이 있으면 $n=1,2,4,8$ 이다. [실수](real-numbers.md), [복소수](complex-numbers.md), 사원수, 팔원수가 그 넷이다.
- **[J 준동형](j-homomorphism.md)의 상.** Adams 는 $\psi^k$ 로 만든 e 불변량으로 안정 J 준동형의 상의 위수를 위에서 묶었다.
- **Chern 지표.** 유리수 계수에서 $\psi^k$ 는 Chern 지표의 $2i$ 차 성분에 $k^i$ 를 곱하는 연산이 되어, $K(X)\otimes\mathbb Q$ 를 고유공간으로 나눈다.

[^1]: J. F. Adams, M. F. Atiyah, "K-theory and the Hopf invariant", *Quarterly Journal of Mathematics* 17 (1966), 31–38.
[^2]: J. F. Adams, "Vector fields on spheres", *Annals of Mathematics* 75 (1962), 603–632.

# 연관 문서

## 선수지식

- [Bott 주기성](bott-periodicity.md)
- [Hopf 불변량](hopf-invariant.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology
