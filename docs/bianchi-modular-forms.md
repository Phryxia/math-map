# Bianchi 모듈러 형식

# 개요

**Bianchi 모듈러 형식(Bianchi modular form)** 은 허수이차체 위에서 모듈러 형식이 하던 일을 하는 함수다. 유리수 위의 곡선 $y^2+y=x^3-x^2$ 을 Gauss 정수의 소아이디얼마다 법으로 줄여 해를 세면 아이디얼마다 정수가 하나씩 나온다. 이 정수들을 계수로 갖는 함수는 상반평면이 아니라 쌍곡 3 공간 위에 있고, [Bianchi 군](bianchi-groups.md)의 작용에서 불변인 미분형식으로 정의된다.

# 직관

곡선 $E\colon y^2+y=x^3-x^2$ 을 유리수 위에서 보면, 소수 $p$ 마다 $a_p=p+1-\char35{}E(\mathbb F_p)$ 가 [모듈러 형식](modular-forms.md) $q\prod_{n\ge 1}(1-q^n)^2(1-q^{11n})^2$ 의 $q^p$ 계수와 같다. [Eichler–Shimura 관계](eichler-shimura.md)에서 $a_2=-2$, $a_3=-1$ 이고, 급수의 $q^5$ 계수에서 $a_5=1$ 이다.

같은 곡선을 [Gauss 정수](gaussian-integers.md) $\mathbb Z\lbrack i\rbrack$ 위에서 본다. 소아이디얼 $\mathfrak p$ 마다 잉여체 $\mathbb Z\lbrack i\rbrack/\mathfrak p$ 위의 해를 세고 $a_{\mathfrak p}=N\mathfrak p+1-\char35{}E(\mathbb Z\lbrack i\rbrack/\mathfrak p)$ 로 둔다. $N\mathfrak p$ 는 잉여체의 원소 수다.

| 소아이디얼 | 잉여체 | 점의 수 | 계수 |
| --- | --- | --- | --- |
| $(1+i)$ | $\mathbb F_2$ | $5$ | $-2$ |
| $(2+i)$, $(2-i)$ | $\mathbb F_5$ | $5$ | $1$ |
| $(3)$ | $\mathbb F_9$ | $15$ | $-5$ |

$(3)$ 의 잉여체는 원소가 $9$ 개인 체다. $\mathbb F_3$ 에서 Frobenius 의 두 고윳값 $\alpha,\beta$ 는 $\alpha+\beta=-1$, $\alpha\beta=3$ 이므로 $\alpha^2+\beta^2=1-6=-5$ 이고, $\mathbb F_9$ 위의 점은 $9+1-(-5)=15$ 개다.

유리수 위에서 계수 $a_n$ 은 $q^n=e^{2\pi in\tau}$ 앞에 붙었다. $e^{2\pi in\tau}$ 는 평행이동 $\tau\mapsto\tau+1$ 에서 값이 그대로인 함수이고, 상반평면의 높이 $\mathrm{Im}\thinspace\tau$ 를 따라 지수적으로 줄어든다. Gauss 정수 위에서는 평행이동이 $w\mapsto w+1$ 과 $w\mapsto w+i$ 두 방향이다. 두 평행이동에서 불변인 함수는 복소수 $w$ 와 높이 $t\gt 0$ 의 함수이고, 사는 곳은 쌍곡 3 공간 $\mathbb H^3$ 이다.

$\mathbb H^3$ 은 실차원이 $3$ 이라 복소 구조가 없고, 정칙함수라는 조건을 쓸 수 없다. 정칙성 대신 미분형식이 닫혀 있고 쌍대로도 닫혀 있다는 조건을 쓴다. 이 조건을 만족하고 $\mathrm{PSL}\_2(\mathbb Z\lbrack i\rbrack)$ 의 부분군에서 불변인 형식을 찾으면, 그 Fourier 계수가 위 표의 수들과 같은 형식이 하나 나온다.

# 정의

## 합동 부분군

$K$ 를 허수이차체, $\mathcal O_K$ 를 그 정수환, $\mathfrak n$ 을 $\mathcal O_K$ 의 0 이 아닌 아이디얼이라 한다. 다음 군을 준위 $\mathfrak n$ 의 합동 부분군이라 한다.

$$
\Gamma_0(\mathfrak n)=\left\lbrace\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in\mathrm{PSL}\_2(\mathcal O_K)\ :\ c\in\mathfrak n\right\rbrace
$$

$\mathfrak n=\mathcal O_K$ 이면 Bianchi 군 전체다. 직관 절의 곡선은 $K=\mathbb Q(i)$, $\mathfrak n=(11)$ 에 대응한다. $11$ 은 $4$ 로 나눈 나머지가 $3$ 이므로 $\mathbb Z\lbrack i\rbrack$ 에서 소수로 남는다.

## 무게 2 Bianchi 첨점형식

$\mathbb H^3$ 의 점을 $(w,t)$ 로 쓰고 다음 세 1-형식을 둔다.

$$
\beta=\left(-\frac{dw}{t},\ \frac{dt}{t},\ \frac{d\bar w}{t}\right)
$$

함수 $F=(F_0,F_1,F_2)\colon\mathbb H^3\to\mathbb C^3$ 에 대해 1-형식 $\omega_F=F_0\beta_0+F_1\beta_1+F_2\beta_2$ 가 다음 셋을 만족하면 $F$ 를 준위 $\mathfrak n$ 의 **무게 2 Bianchi 첨점형식(weight 2 Bianchi cusp form)** 이라 한다.

1. 모든 $\gamma\in\Gamma_0(\mathfrak n)$ 에 대해 $\gamma^\ast\omega_F=\omega_F$ 다.
2. $d\omega_F=0$ 이고 $d\ast\omega_F=0$ 이다. 곧 $\omega_F$ 는 [미분형식](differential-forms.md)으로서 조화적이다.
3. $\Gamma_0(\mathfrak n)$ 의 모든 cusp 에서 $\omega_F$ 의 상수항이 $0$ 이다.

이런 $F$ 들의 공간을 $S_2(\Gamma_0(\mathfrak n))$ 로 쓴다. 조건 1 은 모듈러 형식의 변환 규칙에, 조건 2 는 정칙성에, 조건 3 은 첨점 조건에 해당한다.

## Fourier 전개

$\mathfrak d$ 를 $K$ 의 차분 아이디얼(different ideal)이라 한다. $F\in S_2(\Gamma_0(\mathfrak n))$ 는 다음 꼴로 전개된다.

$$
F(w,t)=\sum_{0\ne\alpha\in\mathfrak d^{-1}}c(\alpha)\thinspace t^2\thinspace\mathbf K(4\pi\vert\alpha\vert t)\thinspace e^{2\pi i\thinspace\mathrm{Tr}(\alpha w)}
$$

$\mathbf K$ 는 [Bessel 함수](bessel-functions.md) $K_0$, $K_1$ 로 만든 $\mathbb C^3$ 값 함수이고, $t\to\infty$ 에서 지수적으로 줄어든다. 계수 $c(\alpha)$ 는 아이디얼 $\alpha\mathfrak d$ 에만 의존하므로 0 이 아닌 아이디얼 $\mathfrak m$ 마다 $c(\mathfrak m)$ 이 하나씩 정해진다.

## Hecke 고유형식과 L 함수

$\mathfrak n$ 을 나누지 않는 소아이디얼 $\mathfrak p$ 마다 [Hecke 작용소](hecke-operators.md) $T_{\mathfrak p}$ 가 $S_2(\Gamma_0(\mathfrak n))$ 에 작용한다. 모든 $T_{\mathfrak p}$ 의 동시 고유벡터이고 $c(\mathcal O_K)=1$ 로 정규화된 $F$ 를 Hecke 고유형식이라 하고, $T_{\mathfrak p}F=c(\mathfrak p)F$ 다. 그 $L$ 함수는 다음과 같다.

$$
L(F,s)=\sum_{\mathfrak m\ne 0}\frac{c(\mathfrak m)}{N\mathfrak m^{s}}
$$

직관 절의 곡선에 대응하는 고유형식은 준위 $(11)$ 에서 $c(1+i)=-2$, $c(2\pm i)=1$, $c(3)=-5$ 를 갖는다.

# 성질

## 코호몰로지 실현

조화 1-형식 $\omega_F$ 의 코호몰로지류를 대응시키면 다음 동형이 나온다[^1].

$$
S_2(\Gamma_0(\mathfrak n))\cong H^1_{\mathrm{cusp}}(\Gamma_0(\mathfrak n)\backslash\mathbb H^3,\mathbb C)
$$

오른쪽은 [군 코호몰로지](group-cohomology.md) $H^1(\Gamma_0(\mathfrak n),\mathbb C)$ 에서 cusp 에서 0 으로 제한되는 류의 부분공간이고, Hecke 작용과 가환이다. 유리수 위의 Eichler–Shimura 동형 $S_2\oplus\overline{S_2}\cong H^1$ 에서는 정칙형식과 반정칙형식 두 벌이 나오지만, 여기서는 복소 구조가 없어 한 벌만 나온다. 이 동형이 Bianchi 형식을 유한 계산으로 구하는 근거다.

## 준위 1 의 Picard 군

$K=\mathbb Q(i)$, $\mathfrak n=(1)$ 이면 $S_2=0$ 이다. $H^1(\Gamma,\mathbb C)=\mathrm{Hom}(\Gamma,\mathbb C)$ 이고, Picard 군 $\mathrm{PSL}\_2(\mathbb Z\lbrack i\rbrack)$ 의 아벨화는 $(\mathbb Z/2)^2$ 로 유한하므로 $\mathbb C$ 로 가는 준동형은 $0$ 뿐이다. 첨점형식은 준위를 키워야 나타나고, 직관 절의 형식은 준위 $(11)$ 에서 나온다.

## 기저 변환

$f$ 를 준위 $N$ 의 유리수 위 무게 2 Hecke 고유형식이라 하고, $f$ 가 $K$ 에 의한 허수곱(complex multiplication)을 갖지 않는다고 하자. 그러면 $K$ 위의 Bianchi 고유형식 $f_K$ 가 있다. 이것이 Langlands 의 순환 확대에 대한 **기저 변환(base change)** 이다[^2]. 계수는 다음과 같다.

- $p$ 가 $K$ 에서 갈라지거나 분기하여 $N\mathfrak p=p$ 이면 $c(\mathfrak p)=a_p$ 다.
- $p$ 가 $K$ 에서 소수로 남아 $N\mathfrak p=p^2$ 이면 $c(\mathfrak p)=a_p^2-2p$ 다.

둘째 식은 $\mathbb F_{p^2}$ 위의 Frobenius 가 $\mathbb F_p$ 위 Frobenius 의 제곱이고, 그 고윳값이 $\alpha^2,\beta^2$ 이라는 데서 나온다. 직관 절의 표는 $f$ 가 준위 $11$ 의 형식일 때 이 두 식을 적용한 값이다.

## Galois 표현

Hecke 고유형식 $F$ 와 소수 $\ell$ 마다 $K$ 의 절대 Galois 군의 2 차원 $\ell$ 진 [Galois 표현](galois-representations.md)이 있고, $\mathfrak n\ell$ 을 나누지 않는 $\mathfrak p$ 에서 Frobenius 의 대각합이 $c(\mathfrak p)$ 다. 이 표현은 Harris–Lan–Taylor–Thorne 이 구성했다[^3]. 유리수 위에서는 [모듈러 곡선](modular-curves.md)이라는 대수곡선의 코호몰로지에서 표현을 얻지만, $\Gamma_0(\mathfrak n)\backslash\mathbb H^3$ 은 대수다양체가 아니어서 더 큰 [Shimura 다양체](shimura-varieties.md)의 코호몰로지를 거쳐 구성한다.

## 꼬임 코호몰로지

정수 계수 코호몰로지 $H^1(\Gamma_0(\mathfrak n),\mathbb Z)$ 에는 큰 꼬임 부분군이 나타난다. Scholze 는 이 꼬임 류에도 법 $\ell$ Galois 표현이 붙는다는 것을 증명했다[^4]. Bergeron–Venkatesh 는 준위를 키울 때 꼬임 부분군의 크기의 로그가 몫 다양체의 부피에 비례해 자란다고 추측했다[^5].

# 활용

- 허수이차체 위 타원곡선의 모듈러성. Caraiani–Newton 은 $\mathbb Q(i)$ 를 포함한 몇몇 허수이차체 위의 모든 [타원곡선](elliptic-curves.md)이 Bianchi 고유형식에 대응한다는 것을 증명했다[^6]. 대응은 직관 절의 표처럼 $a_{\mathfrak p}=c(\mathfrak p)$ 다.
- [모듈러 기호](modular-symbols.md)로 하는 계산. Cremona 는 Bianchi 군의 기본 다면체로 만든 모듈러 기호로 코호몰로지 실현의 오른쪽을 계산해 Bianchi 고유형식의 계수를 표로 만들었다[^7].
- [Langlands 강령](langlands-program.md). Bianchi 형식은 허수이차체 위 $\mathrm{GL}\_2$ 의 자기동형 표현 가운데 코호몰로지에 나타나는 것이고, 정칙 구조가 없는 자기동형 형식에 Galois 표현을 붙이는 문제의 시험 사례다.

[^1]: G. Harder, "Eisenstein cohomology of arithmetic groups. The case GL₂", Inventiones Mathematicae 89 (1987).
[^2]: R. P. Langlands, Base Change for GL(2), Annals of Mathematics Studies 96, Princeton University Press (1980).
[^3]: M. Harris, K.-W. Lan, R. Taylor, J. Thorne, "On the rigid cohomology of certain Shimura varieties", Research in the Mathematical Sciences 3 (2016).
[^4]: P. Scholze, "On torsion in the cohomology of locally symmetric varieties", Annals of Mathematics 182 (2015).
[^5]: N. Bergeron, A. Venkatesh, "The asymptotic growth of torsion homology for arithmetic groups", Journal of the Institute of Mathematics of Jussieu 12 (2013).
[^6]: A. Caraiani, J. Newton, "On the modularity of elliptic curves over imaginary quadratic fields", arXiv (2023).
[^7]: J. E. Cremona, "Hyperbolic tessellations, modular symbols, and elliptic curves over complex quadratic fields", Compositio Mathematica 51 (1984).

# 연관 문서

## 선수지식

- [Bianchi 군](bianchi-groups.md)
- [모듈러 형식](modular-forms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #differential_geometry #algebraic_topology
