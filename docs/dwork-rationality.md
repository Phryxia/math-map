# Dwork 의 유리성 정리와 지수합

# 개요

[Galois 표현](galois-representations.md)의 그림에서 Weil 추측의 유리성과 함수방정식은 [코호몰로지](cohomology.md) 이론이 있으면 형식적으로 따라 나오고 [Riemann 가설](riemann-hypothesis.md)만 어렵다.

역사는 반대 순서였다. Weil 이 추측을 낸 1949 년부터 11 년 동안 그 코호몰로지가 만들어지지 않았고, 1960 년에 Dwork 가 코호몰로지 없이 유리성을 증명했다. 도구는 $\ell\ne p$ 인 $\ell$ 진 계수가 아니라 표수와 같은 $p$ 의 $p$ 진 해석학이었다.

$$
Z(X/\mathbb F_q,T)=\exp\negthinspace\Big(\sum_{n\ge1}\frac{\char35{}X(\mathbb F_{q^n})}{n}T^n\Big)\in\mathbb Q(T)
$$

$X$ 는 매끄럽지 않아도, 사영이 아니어도, 특이점이 있어도 된다. 코호몰로지 증명이 요구하는 가정이 없고, 이 일반성은 지금도 Dwork 의 방법만 준다.[^1]

유리성은 계수열 $N_n=\char35{}X(\mathbb F_{q^n})$ 이 선형점화식을 만족한다는 뜻이고, 선형점화식은 어떤 작용소의 $n$ 제곱의 대각합이라는 형태에서 나온다. Dwork 는 점 개수를 덧셈 지표의 지수합으로 바꾸고 그 지표를 $p$ 진 해석함수의 값으로 실현해, 지수합을 무한차원 $p$ 진 [Banach 공간](banach-spaces.md) 위 작용소의 대각합으로 만들었다. 유한차원 코호몰로지 대신 무한차원이되 완전연속인 작용소를 쓴 것이다. 완전연속 작용소의 [Fredholm 행렬식](fredholm-determinant.md)이 $p$ 진 정함수이므로 $Z$ 는 정함수의 비가 되어 $p$ 진 유리형이고, 여기에 Borel–Dwork 판정을 대면 유리함수가 나온다.

Weil 추측의 진술과 Frobenius 고윳값 언어는 [Galois 표현](galois-representations.md)에서, 지수합의 기본형과 그 $p$ 진 부치는 [Gauss 합](gauss-sums.md)에서 온다. Dwork 의 $\pi$ 는 $\pi^{p-1}=-p$ 를 만족하는 수이고 Stickelberger 정리에 나오는 것과 같다.

이 방법은 $Z$ 의 유리성과 Frobenius 고윳값의 $p$ 진 부치를 주지만 복소 절댓값 $|\alpha|=q^{i/2}$ 는 주지 않는다. 그것이 Riemann 가설이고 Deligne 의 몫으로 남았다.

# 직관

## 지수합 번역

[유한체](finite-fields.md)에서 방정식의 해를 세는 표준 기법은 덧셈 지표다. $\psi:\mathbb F_p\to\mu_p$ 를 비자명한 덧셈 지표라 하면 직교성이 지시함수를 준다.

$$
\frac1p\sum_{t\in\mathbb F_p}\psi(tu)=
\begin{cases}1&u=0\cr 0&u\ne0\end{cases}
$$

그러므로 $f\in\mathbb F_q[x_1,\dots,x_m]$ 의 영점 개수는

$$
\char35{}\lbrace x:f(x)=0\rbrace=\frac1q\sum_{t\in\mathbb F_q}\sum_{x}\psi\big(\mathrm{Tr}\_{\mathbb F_q/\mathbb F_p}(tf(x))\big)
$$

가 된다. 기하 문제가 $\sum_x\psi(\mathrm{Tr}\thinspace f(x))$ 꼴의 지수합 하나로 바뀐다. Gauss 합은 $f(x)=ax$ 에 곱셈 지표를 곁들인 사례이고 Kloosterman 합은 $f(x)=ax+b/x$ 다.

## 분해함수

$\psi$ 는 유한군 위의 함수라 미분도 급수전개도 없다. 복소수 쪽에서 $\psi$ 의 값 $e^{2\pi ik/p}$ 는 단위원 위에 흩어진 점이다.

$p$ 진 세계에서는 $\psi$ 가 해석함수의 값으로 실현된다. $\pi\in\mathbb C_p$ 를 $\pi^{p-1}=-p$ 인 원소로 잡으면 $\mathrm{ord}\_p\pi=\frac1{p-1}$ 이고 $\zeta_p=1+\pi+O(\pi^2)$ 꼴의 $p$ 제곱근이 존재한다. $p$ 진 지수함수는 $\mathrm{ord}\_p(x)\gt\frac1{p-1}$ 에서만 수렴하므로 $\exp(\pi x)$ 의 수렴반경이 $1$ 에 못 미치는데, Teichmüller 대표원은 절댓값이 정확히 $1$ 이다.

Dwork 의 **분해함수**가 이 벽을 넘는다.

$$
\theta(x)=\exp\big(\pi(x-x^p)\big)=\sum_{m\ge0}\theta_mx^m,
\qquad
\mathrm{ord}\_p\theta_m\ \ge\ \frac{(p-1)m}{p^2}
$$

$-\pi x^p$ 항을 더하면 수렴반경이 $p^{(p-1)/p^2}\gt 1$ 로 늘어나 닫힌 단위원판을 넘어서 수렴한다. 이 초과수렴(overconvergence)이 뒤에서 작용소를 완전연속으로 만든다.

분모가 사라지는 현상은 Artin–Hasse 지수함수에서 가장 뚜렷하다.

$$
E_p(x)=\exp\Big(\sum_{k\ge0}\frac{x^{p^k}}{p^k}\Big)\in\mathbb Z_{(p)}[[x]]
$$

$\exp(x)$ 의 계수 $1/n!$ 이 분모에 $p$ 를 끌고 오는데 $x^p/p+x^{p^2}/p^2+\cdots$ 를 더하면 그 분모가 상쇄된다. Dwork 의 $\theta$ 는 같은 상쇄를 $\pi$ 위에서 일으켜 수렴반경을 $1$ 보다 크게 만든다.

## 대각합과 Fredholm 행렬식

$\theta$ 가 있으면 지수합이 해석적 대상이 된다. Dwork 의 대각합 공식은 토러스 $(\mathbb F_{q^n}^\times)^m$ 위의 지수합을 작용소 하나로 정리한다.

$$
S_n(f)=\sum_{x\in(\mathbb F_{q^n}^\times)^m}\psi\big(\mathrm{Tr}\_{\mathbb F_{q^n}/\mathbb F_p}f(x)\big)
=(q^n-1)^m\thinspace\mathrm{Tr}(\alpha^n)
$$

여기서 $\alpha$ 는 $\theta$ 로 만든 급수를 곱한 뒤 $p$ 제곱근을 취하는 작용소이고, 무한차원 공간 위에서 **완전연속**이다. 완전연속이면 Fredholm 행렬식 $\det(1-T\alpha)$ 가 정의되고 $p$ 진 정함수이며

$$
\det(1-T\alpha)^{-1}=\exp\Big(\sum_{n\ge1}\frac{\mathrm{Tr}(\alpha^n)}{n}T^n\Big)
$$

가 성립한다. $(q^n-1)^m$ 을 이항전개해서 넣으면 $L$ 함수가 정함수의 유한 곱과 비로 표현된다.

$$
L(f,T)=\exp\Big(\sum_{n\ge1}\frac{S_n}{n}T^n\Big)
=\prod_{j=0}^{m}\det(1-q^jT\alpha)^{(-1)^{m-j+1}\binom mj}
$$

오른쪽은 $\mathbb C_p$ 전체에서 유리형이다. 유리함수라는 결론은 Borel–Dwork 판정이 준다.

# 정의

## zeta 함수

$X$ 를 $\mathbb F_q$ 위의 유한형 스킴이라 하고 $N_n=\char35{}X(\mathbb F_{q^n})$ 이라 둔다.

$$
Z(X/\mathbb F_q,T)=\exp\Big(\sum_{n\ge1}\frac{N_n}{n}T^n\Big)
=\prod_{x\in|X|}\big(1-T^{\deg x}\big)^{-1}
$$

오른쪽 곱은 닫힌점 $x$ 전체에 걸친 것이고, 이 곱 표현이 $Z\in\mathbb Z[[T]]$ 를 준다. 정수 계수가 Borel–Dwork 판정의 가설이 된다.

## Dwork 분해함수

$\pi\in\mathbb C_p$ 는 $\pi^{p-1}=-p$ 의 근이고, $\theta(x)=\exp(\pi(x-x^p))$ 다. 성질은 두 가지다.

- $\theta$ 는 $|x|\_p\lt p^{(p-1)/p^2}$ 에서 수렴한다. 이 반경은 $1$ 보다 크다.
- $\theta(1)=\zeta_p$ 는 원시 $p$ 제곱근이고, Teichmüller 대표원 $\hat a$ 에 대해 $\psi(a)=\theta(\hat a)$ 가 $\mathbb F_p$ 의 덧셈 지표가 된다.

$q=p^s$ 인 $\mathbb F_q$ 로 올릴 때는 $\Theta(x)=\prod_{i=0}^{s-1}\theta(x^{p^i})$ 를 쓴다. 그러면 $\Theta(\hat a)=\psi(\mathrm{Tr}\_{\mathbb F_q/\mathbb F_p}a)$ 다.

## 완전연속 작용소와 Fredholm 행렬식

$p$ 진 Banach 공간 $B$ 위의 연속선형작용소 $\alpha$ 가 **완전연속**(completely continuous, Serre 의 용어)이라 함은 유한계수 작용소의 노름극한이라는 뜻이다. 이때 $\alpha$ 의 행렬 $(a_{ij})$ 에 대해

$$
\det(1-T\alpha)=\sum_{k\ge0}(-1)^kc_kT^k,
\qquad
c_k=\sum_{i_1\lt\dots\lt i_k}\det\big(a_{i_\mu i_\nu}\big)\_{1\le\mu,\nu\le k}
$$

가 잘 정의되고 $T$ 의 정함수다. 고윳값 이론이 유한차원처럼 작동한다는 것이 Serre 의 정리다.

## Kloosterman 합

$a,b\in\mathbb F_q^\times$ 에 대해

$$
\mathrm{Kl}\_n(a,b)=\sum_{x\in\mathbb F_{q^n}^\times}\psi\Big(\mathrm{Tr}\_{\mathbb F_{q^n}/\mathbb F_p}\big(ax+bx^{-1}\big)\Big)
$$

이다. $f(x)=ax+bx^{-1}$ 은 토러스 $\mathbb G_m$ 위의 함수이므로 $m=1$ 사례다. 이 합의 $L$ 함수가 Dwork 이론의 가장 작은 비자명 예다.

# 성질

## Dwork 의 정리

> **정리 (Dwork, 1960).**
> $\mathbb F_q$ 위의 모든 유한형 스킴 $X$ 에 대해 $Z(X/\mathbb F_q,T)$ 는 $\mathbb Q(T)$ 의 원소다.

증명의 요지는 네 단계다.

1. **정수성.** $Z\in\mathbb Z[[T]]$ 이고 $N_n\le Cq^{nd}$ 이므로 아르키메데스 수렴반경이 $q^{-d}\gt 0$ 이상이다.
2. **환원.** 아핀 조각으로 자르고 포함배제를 쓰면 초곡면의 경우로 환원되고, 다시 위의 지시함수 항등식으로 토러스 위의 지수합 $L$ 함수로 환원된다.
3. **$p$ 진 유리형성.** 분해함수 $\theta$ 로 지수합을 완전연속 작용소의 대각합으로 쓰고, Fredholm 행렬식으로 $L(f,T)$ 를 정함수의 곱과 비로 표현한다. 따라서 $Z$ 는 $\mathbb C_p$ 전체에서 유리형이다.
4. **판정.** Borel–Dwork 를 적용한다.

## Borel–Dwork 유리성 판정

> $f(T)=\sum a_nT^n$ 이고 $a_n\in\mathbb Z$ 라 하자. $f$ 가 복소해석적으로 $|T|\lt r$ 에서 수렴하고 $p$ 진 해석적으로 $|T|\_p\lt R$ 에서 유리형이며 $rR\gt 1$ 이면 $f\in\mathbb Q(T)$ 다.

Dwork 의 경우 $R=\infty$ 이므로 $r\gt 0$ 이면 된다. 유리수는 곱공식 때문에 모든 자리에서 동시에 작을 수 없고, 정수 계수라는 조건이 두 절댓값을 묶어 계수를 유한한 점화식에 가둔다.

형식적인 쪽의 고전적 판정은 Kronecker 의 Hankel 행렬식 조건이다.

$$
f\in K(T)
\iff
\exists\thinspace m_0\ \ \forall m\ge m_0,\ \forall s\ge0:\quad
H_m^{(s)}=\det\big(a_{s+i+j}\big)\_{0\le i,j\le m}=0
$$

행렬식이 $0$ 이 되는 최소 $m$ 이 분모의 차수다. Dwork 는 이 조건을 직접 확인하는 대신 $p$ 진 유리형성을 거쳐 우회한다. 계산에서는 Hankel 판정이 유리성을 확인하는 가장 짧은 길이다.

## Kloosterman 합의 구조

> **정리 (Weil).** $a,b\in\mathbb F_q^\times$ 이면 $\alpha\beta=q$ 이고 $|\alpha|=|\beta|=\sqrt q$ 인 $\alpha,\beta$ 가 있어
> $$\mathrm{Kl}\_n(a,b)=-(\alpha^n+\beta^n),\qquad\text{따라서}\qquad|\mathrm{Kl}\_1(a,b)|\le2\sqrt q$$

동치로 $L$ 함수가 정확히 차수 $2$ 의 다항식이다.

$$
L(T)=\exp\Big(\sum_{n\ge1}\frac{\mathrm{Kl}\_n}{n}T^n\Big)=(1-\alpha T)(1-\beta T)=1+\mathrm{Kl}\_1\thinspace T+qT^2
$$

여기서 두 절댓값이 서로 다른 일을 한다.

- **아르키메데스.** $|\alpha|=|\beta|=\sqrt q$ 는 Weil 의 곡선 Riemann 가설이다. Dwork 의 방법으로는 나오지 않는다.
- **$p$ 진.** $\mathrm{Kl}\_1$ 은 $p$ 진 단위다. $\psi$ 의 값이 전부 $1\bmod\pi$ 이므로 $\mathrm{Kl}\_1\equiv q-1\equiv-1\pmod\pi$ 다. 그러면 $1+\mathrm{Kl}\_1T+qT^2$ 의 Newton 다각형이 $(0,0),(1,0),(2,1)$ 의 아래쪽 볼록포이고 기울기가 $0$ 과 $1$ 이다. 즉 $\mathrm{ord}\_q\alpha=0$ (단위근), $\mathrm{ord}\_q\beta=1$ 이다.

단위근의 존재는 Dwork 이론에서 나오고 Weil 의 상계는 다른 증명을 요구한다.

## Newton 다각형과 Frobenius 부치

$p$ 진 부치는 유리성보다 미세한 정보를 준다. 다항식 $\sum c_iT^i$ 의 Newton 다각형은 점 $(i,\mathrm{ord}\_p c_i)$ 의 아래쪽 볼록포이고, 기울기의 목록이 근의 $\mathrm{ord}\_p$ 의 목록(부호 반대)이다. 타원곡선의 $P(T)=1-a_pT+pT^2$ 에서 바로 보인다.

| 경우 | $\mathrm{ord}\_p a_p$ | 기울기 | 이름 |
|---|---|---|---|
| $p\nmid a_p$ | $0$ | $0,\ 1$ | 보통(ordinary) |
| $p\mid a_p$ | $\ge1$ | $\tfrac12,\ \tfrac12$ | 초특이(supersingular) |

기울기 $0$ 인 근이 단위근이고 그 존재 여부가 형식군의 높이를 결정한다. Dwork 의 작용소가 이 부치를 계산하며, 여러 변수 지수합에서 Newton 다각형의 아래쪽 한계를 Adolphson–Sperber 가 Newton 다면체로 주었다.

## Gauss 합과 Stickelberger 정리

$\mathbb Q(\zeta_p)$ 에서 $p$ 위의 유일한 [소 아이디얼](prime-ideals.md)이 $(\zeta_p-1)$ 이고 $\pi$ 는 그 생성원과 결부된다. Gauss 합의 $p$ 진 크기는 Stickelberger 정리가 준다. $\omega$ 를 Teichmüller 지표라 할 때

$$
\mathrm{ord}\_p\thinspace g(\omega^{-a})=\frac{a}{p-1},\qquad 0\le a\lt p-1
$$

이고 Gross–Koblitz 정리는 값 자체를 $p$ 진 감마함수 $\Gamma_p$ 로 주며 그 증명이 Dwork 의 분해함수를 쓴다. Gauss 합은 한 점 위의 Dwork 이론이고 그 $p$ 진 부치가 Newton 다각형의 기울기다. 절댓값 $\sqrt p$ 와 $\mathrm{ord}\_p=a/(p-1)$ 은 같은 수의 두 절댓값이다.

# 활용

## 점 개수에서 zeta 함수 복원

$E:y^2=x^3+x+1$ 을 $\mathbb F_5$ 위에 놓으면 $\mathbb F_{5^n}$ 의 유리점 수가 $N_n=9,27,108,675,3069,15552$ 다. 이 수열에서 만든 $Z(T)$ 는 유리함수다.

$$
Z(T)=\frac{1+3T+5T^2}{(1-T)(1-5T)}
$$

분자의 최고차 계수가 $q=5$ 인 것이 함수방정식이고, $a_p=-3$ 은 $N_1=5+1-(-3)=9$ 와 맞는다. Borel–Dwork 판정의 Hankel 행렬식 $H_m^{(s)}=\det(Z_{s+i+j})$ 는 $s\ge1$ 과 $m\ge2$ 에서 $0$ 이 되어 분모 차수 $2$ 를 준다. $s=0$ 에서 $H_2\ne0$ 인 것은 분자 차수가 분모 차수와 같아 생기는 자리밀림이고, 판정은 큰 $s$ 에서의 소멸을 요구한다. 유한개의 $N_n$ 이 무한히 많은 $N_n$ 을 결정한다.

## Kloosterman 합의 두 절댓값

$\alpha+\beta=-\mathrm{Kl}\_1$ 과 $\alpha\beta=p$ 로 $\alpha,\beta$ 를 정하면 확대체의 값이 $\mathrm{Kl}\_n=-(\alpha^n+\beta^n)$ 이다.

$n=1$ 하나가 모든 확대체의 값을 결정하며, 이것이 $L$ 함수가 차수 $2$ 라는 유리성의 구체적 내용이다. $|\alpha|=|\beta|=\sqrt p$ 는 판별식 $\mathrm{Kl}\_1^2-4p\lt 0$ 에서 나오고 Weil 한계와 같은 진술이다. $p=17$ 에서 최댓값 $7.96$ 이 한계 $8.246$ 에 가까우므로 이 상계는 최선에 가깝다.

## 점 세기와 에탈 코호몰로지

- **점 세기 알고리즘.** Dwork 의 방법을 Monsky–Washnitzer 코호몰로지로 다듬은 것이 Kedlaya 알고리즘(2001)이다. 초타원곡선의 zeta 함수를 $p$ 진 정밀도로 계산하며 비용이 $p$ 에 선형이고 확대차수에 다항식이라 작은 $p$ 와 큰 $n$ 을 맡고, 큰 $p$ 를 맡는 Schoof–Elkies–Atkin 과 상보적이다. Lauder–Wan 이 일반 다양체로 확장했다.
- **암호.** 위 알고리즘이 곡선 암호의 군 위수를 정하는 실무 도구다. [타원곡선](elliptic-curves.md) 위수를 모르면 안전성을 논할 수 없다.
- **해석적 정수론.** Kloosterman 합은 사원 이차형식의 표현수를 원법으로 다루면서 나왔다. Weil 한계 $2\sqrt q$ 가 원법의 오차항을 결정하고 Kuznetsov 공식을 거쳐 [모듈러 형식](modular-forms.md)의 해석적 이론으로 들어간다.
- **Newton 다각형의 기하.** 지수합의 $p$ 진 부치를 다면체로 예측하는 Adolphson–Sperber 이론과 Katz 의 Newton 다각형 도약 문제가 이 줄기에 있다.
- **에탈 코호몰로지.** Grothendieck 의 에탈 코호몰로지가 유리성과 함수방정식을 다시 증명했고 1974 년 Deligne 이 Riemann 가설을 닫았다.

[^1]: Dwork 의 원논문은 B. Dwork, *On the rationality of the zeta function of an algebraic variety*, Amer. J. Math. **82** (1960), 631–648. 교과서 서술은 N. Koblitz, *p-adic Numbers, p-adic Analysis, and Zeta-Functions* (2판, 1984) 5장이 가장 접근하기 쉽고, 완전연속 작용소와 Fredholm 행렬식은 J.-P. Serre, *Endomorphismes complètement continus des espaces de Banach p-adiques*, Publ. IHÉS **12** (1962). 지수합의 Newton 다각형은 A. Adolphson, S. Sperber, *Exponential sums and Newton polyhedra*, Ann. of Math. **130** (1989). Kedlaya 알고리즘은 K. Kedlaya, *Counting points on hyperelliptic curves using Monsky–Washnitzer cohomology*, J. Ramanujan Math. Soc. **16** (2001).

# 연관 문서

## 선수지식

- [Galois 표현](galois-representations.md)
- [Gauss 합](gauss-sums.md)
- [Newton 다각형](newton-polygon.md)

## 더 알아보기

- [Kedlaya 알고리즘과 p 진 점 세기](kedlaya-algorithm.md)
- [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)

#number_theory #analysis #theorem #computation
