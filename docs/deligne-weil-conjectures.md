# Deligne 의 Weil 추측 증명

# 개요

**Deligne 의 Weil 추측 증명(Deligne's proof of the Weil conjectures)** 은 유한체에서 다항식 방정식의 해를 셀 때 그 개수가 예상값에서 얼마나 벗어나는지를 정한 정리다. $5$ 로 나눈 나머지에서 $y^2=x^3+x+1$ 을 풀면 $x=0,2,3,4$ 마다 해가 둘씩 있고 $x=1$ 에서는 없어서, 무한원점까지 해가 $9$ 개다. 예상값 $5+1=6$ 과의 차이 $3$ 은 $2\sqrt5$ 보다 작고, $5$ 를 다른 소수 $p$ 로 바꾸어도 차이는 $2\sqrt p$ 를 넘지 않는다.

Deligne 은 해의 개수를 코호몰로지 위에 작용하는 Frobenius 사상의 고윳값으로 적고, 그 고윳값의 절댓값이 정해진 값임을 증명해 임의 차원의 다양체에서 같은 꼴의 한계를 얻었다.

# 직관

개요의 곡선을 더 큰 유한체에서 센다. $\mathbb F_5$ 에서 해의 개수는 $9=5+1-a$ 이므로 $a=-3$ 이다. 이차방정식 $X^2-aX+5=0$ 의 두 근을 $\alpha,\beta$ 라 하면 $\alpha+\beta=-3$, $\alpha\beta=5$ 이고 $\alpha,\beta=(-3\pm\sqrt{-11})/2$ 다. 원소가 $5^n$ 개인 유한체에서 해의 개수는 $5^n+1-\alpha^n-\beta^n$ 이고, $n=2$ 이면 $26-(\alpha^2+\beta^2)=26-((\alpha+\beta)^2-2\alpha\beta)=27$ 이다.

$\alpha$ 와 $\beta$ 를 알면 모든 $n$ 의 개수가 정해진다. $\vert\alpha\vert^2=\alpha\beta=5$ 이므로 $\vert\alpha\vert=\vert\beta\vert=\sqrt5$ 이고, 그래서 해의 개수가 $5^n+1$ 에서 $2\cdot5^{n/2}$ 보다 더 벗어나지 않는다. 개수를 생성함수로 모은 zeta 함수는

$$
Z(T)=\exp\Bigl(\sum_{n\ge1}N_n\frac{T^n}{n}\Bigr)=\frac{(1-\alpha T)(1-\beta T)}{(1-T)(1-5T)}=\frac{1+3T+5T^2}{(1-T)(1-5T)}
$$

로 유리함수다. $N_n$ 은 원소가 $5^n$ 개인 체에서의 해의 개수다.

차원이 $d$ 인 다양체에서도 $Z(T)$ 는 유리함수다. [Dwork](dwork-rationality.md)가 1960 년에 $p$ 진 해석학으로 이것을 증명했다. 분자와 분모의 근의 역수 $\alpha$ 는 [에탈 코호몰로지](etale-cohomology.md) $H^i$ 위의 Frobenius 고윳값이고, 곡선의 $\vert\alpha\vert=\sqrt5$ 에 해당하는 진술은 $H^i$ 의 고윳값이 $\vert\alpha\vert=q^{i/2}$ 라는 것이다. 유리성은 대각합의 [생성함수](generating-functions.md)가 유리함수라는 선형대수에서, 함수방정식은 [Poincaré 쌍대성](poincare-duality.md)에서 나오지만, 절댓값은 $\ell$ 진 계수의 코호몰로지에서 바로 나오지 않는다. Grothendieck 는 [Hodge 이론](hodge-theory.md)의 양성을 [유한체](finite-fields.md)로 옮기는 표준 추측(standard conjectures)[^1]으로 이것을 얻으려 했고, 표준 추측은 증명되지 않았다[^2].

Deligne 은 상계 $\vert\alpha\vert\le q^{(i+1)/2}$ 를 먼저 얻었다[^3]. 거듭제곱 $X^m$ 에서는 $\alpha^m$ 이 $H^{im}$ 의 고윳값이므로 같은 상계가 $\vert\alpha\vert^m\le q^{(im+1)/2}$ 를 주고, $m\to\infty$ 이면 $\vert\alpha\vert\le q^{i/2}$ 다. 쌍대성에서 $H^{2d-i}$ 의 고윳값 $\alpha'=q^d/\alpha$ 에 이 상계를 쓰면 $\vert\alpha\vert\ge q^{i/2}$ 가 되어 등식이 나온다.

# 정의

## Weil 추측의 Riemann 가설

$X$ 를 $\mathbb F_q$ 위의 차원 $d$ 인 매끄러운 사영다양체라 하자. $\ell\ne p$ 인 소수에 대해 $\ell$ 진 에탈 코호몰로지 $H^i(X_{\overline{\mathbb F_q}},\mathbb Q_\ell)$ 위에 기하적 Frobenius 가 작용하고

$$
P_i(T)=\det\bigl(1-T\thinspace\mathrm{Frob}\mid H^i\bigr)=\prod_j(1-\alpha_{ij}T),\qquad
Z(X/\mathbb F_q,T)=\prod_{i=0}^{2d}P_i(T)^{(-1)^{i+1}}
$$

이다. **Weil 추측(Weil conjectures)** 가운데 [Riemann 가설](riemann-hypothesis.md)에 해당하는 진술은 모든 $i,j$ 와 $\mathbb Q_\ell\hookrightarrow\mathbb C$ 의 모든 매장에 대해 $\vert\alpha_{ij}\vert=q^{i/2}$ 라는 진술이다. 개요의 곡선에서는 $P_0=1-T$, $P_1=1+3T+5T^2$, $P_2=1-5T$ 이고 $P_1$ 의 근의 역수가 절댓값 $\sqrt5$ 다. $T=q^{-s}$ 로 쓰면 이 진술은 $P_i$ 의 영점이 $\mathrm{Re}(s)=i/2$ 위에 있다는 것이 되므로 Riemann 가설이라 부른다.

## 무게

대수적 수 $\alpha$ 가 $\mathbb C$ 로의 모든 매장에서 $\vert\alpha\vert=q^{w/2}$ 이면 $\alpha$ 를 **무게(weight)** $w$ 의 Weil 수라 한다. 직관 절의 $(-3+\sqrt{-11})/2$ 는 $q=5$ 에 대한 무게 $1$ 이다.

[층](sheaves.md) $\mathcal F$ 가 **무게 $w$ 이하(mixed of weight at most w)** 라는 것은 모든 닫힌점 $x$ 에서 Frobenius 고윳값의 절댓값이 $q_x^{w/2}$ 이하라는 뜻이다. $q_x$ 는 $x$ 의 잉여체의 원소 개수다. 상수층 $\mathbb Q_\ell$ 은 무게 $0$ 이다.

## Ramanujan–Petersson 추측

무게 $k$, 수준 $N$ 의 정규화된 Hecke 고유 첨점형식 $f=\sum a_nq^n$ 에 대해

$$
\vert a_p\vert\le2\thinspace p^{(k-1)/2}\qquad(p\nmid N)
$$

이라는 진술을 **Ramanujan–Petersson 추측(Ramanujan–Petersson conjecture)** 이라 한다. $k=12$, $N=1$ 인 판별식 $\Delta=\sum\tau(n)q^n$ 에서는 $\vert\tau(p)\vert\le2p^{11/2}$ 이고, $\tau(2)=-24$ 는 $2\cdot2^{11/2}\approx90.5$ 이하다.

# 성질

## Deligne 의 정리

모든 $i,j$ 와 $\mathbb Q_\ell\hookrightarrow\mathbb C$ 의 모든 매장에 대해 $\vert\alpha_{ij}\vert=q^{i/2}$ 다[^3]. 그 결과 $P_i(T)\in\mathbb Z\lbrack T\rbrack$ 이고 $P_i$ 는 $\ell$ 에 무관하다. $d=1$ 인 곡선의 경우는 Weil 이 1948 년에 증명했다.

## Weil II 의 무게 정리

Deligne 은 *Weil II*(1980)에서 다음을 증명했다. $f$ 가 다양체 사이의 사상이고 $\mathcal F$ 가 무게 $w$ 이하이면 고차 순상 $R^if_!\mathcal F$ 는 무게 $w+i$ 이하다. $X\to\mathrm{Spec}\thinspace\mathbb F_q$ 와 상수층에 적용하면 Deligne 의 정리의 상계 쪽이 다시 나온다.

## Ramanujan 한계의 유도

Deligne 은 1969 년에 무게 $k\ge2$ 의 Hecke 고유형식 $f$ 마다 [Galois 표현](galois-representations.md)

$$
\rho_f:\mathrm{Gal}(\overline{\mathbb Q}/\mathbb Q)\to\mathrm{GL}\_2(\mathbb Q_\ell),
\qquad
\mathrm{tr}\thinspace\rho_f(\mathrm{Frob}\_p)=a_p,
\quad
\det\rho_f(\mathrm{Frob}\_p)=p^{k-1}
$$

을 [모듈러 곡선](modular-curves.md) 위 어떤 층의 에탈 코호몰로지에서 구성했다. 그 코호몰로지가 무게 $k-1$ 이므로 Deligne 의 정리에 의해 $\rho_f(\mathrm{Frob}\_p)$ 의 고윳값 $\alpha_p,\beta_p$ 는 $\vert\alpha_p\vert=\vert\beta_p\vert=p^{(k-1)/2}$ 를 만족한다. 따라서

$$
\vert a_p\vert=\vert\alpha_p+\beta_p\vert\le\vert\alpha_p\vert+\vert\beta_p\vert=2p^{(k-1)/2}
$$

이고 Ramanujan–Petersson 추측이 증명된다.

$\alpha_p\beta_p=p^{k-1}$ 이므로 $\alpha_p=p^{(k-1)/2}e^{i\theta_p}$, $\beta_p=\overline{\alpha_p}$ 로 쓸 수 있고 $a_p=2p^{(k-1)/2}\cos\theta_p$ 다. $\theta_p\in\lbrack 0,\pi\rbrack$ 을 Frobenius 각(Frobenius angle)이라 하고, 그 분포는 [Sato–Tate 분포](sato-tate.md)가 다룬다. Deligne 의 정리에서는 각이 실수라는 것까지 나오고 분포는 나오지 않는다.

## p 진 절댓값과 복소 절댓값

같은 $\alpha$ 의 $p$ 진 절댓값은 $P_i$ 의 계수의 $p$ 진 부치로 정해지고 [Newton 다각형](newton-polygon.md)으로 계산된다. 타원곡선에서 이것은 보통과 초특이를 가른다. 복소 절댓값 $q^{i/2}$ 는 계수에서 바로 나오지 않고 Deligne 의 정리가 있어야 한다. [Kloosterman 합](kloosterman-sums.md)의 두 고윳값이 그 예다.

## 증명의 요지

1. Poincaré 쌍대성과 약한 Lefschetz 정리(weak Lefschetz theorem)로 짝수 차원 다양체의 중간 코호몰로지 $H^d$ 로 환원한다.
2. $X$ 를 $\mathbb P^1$ 위 초평면 절단의 족으로 만든다. 이것을 Lefschetz 다발(Lefschetz pencil)이라 한다. 올의 소멸 순환(vanishing cycle)이 $\mathbb P^1$ 위의 층 $\mathcal F$ 를 만든다.
3. $\mathcal F$ 의 단행성군(monodromy group)이 충분히 커서 $\mathrm{Sym}^{2k}\mathcal F$ 의 불변량 공간이 작다.
4. $L(\mathrm{Sym}^{2k}\mathcal F,T)$ 의 $\log$ 계수가 실수이고 음이 아니다.
5. 4 번과 Landau 의 정리로 상계 $\vert\alpha\vert\le q^{(d+1)/2}(1+\varepsilon_k)$ 를 얻고 $k\to\infty$ 로 보낸다.
6. 직관 절대로 $X^m$ 과 쌍대성을 써서 등식으로 만든다.

표준 추측은 쓰이지 않는다.

## 단행성군과 Landau 의 정리

$X$ 를 사영공간에 매장하고 초평면 다발로 $\mathbb P^1$ 위의 족으로 만들면 각 올이 $X$ 의 초평면 절단이라 차원이 하나 낮다. $X$ 의 코호몰로지가 $\mathbb P^1$ 위 층의 코호몰로지로 적히므로 차원에 대한 귀납이 가능하다. 단행성군은 올이 특이해지는 점 주위를 한 바퀴 돌 때 소멸 순환이 옮겨지는 변환들의 군이다. Kazhdan–Margulis 정리(Kazhdan–Margulis theorem)로 이 군이 충분히 큼이 증명된다.

Landau 의 정리(Landau's theorem)는 [Dirichlet 급수](dirichlet-series.md) $\sum a_nn^{-s}$ 에서 $a_n\ge0$ 이면 수렴 영역의 경계의 실수점에 특이점이 있다는 정리다. $L(T)=\prod(1-\alpha_jT)^{-1}$ 의 $\log$ 를 전개하면 계수가 $\sum_j\alpha_j^n/n$ 이고, 이것이 음이 아닌 실수이면 수렴반경이 $\max\vert\alpha_j\vert^{-1}$ 이므로 극점의 위치에서 $\max\vert\alpha_j\vert$ 의 상계가 나온다. 계수가 음이 아닌 것은 $\mathcal F$ 대신 $\mathrm{Sym}^{2k}\mathcal F$ 를 볼 때이고, 대칭곱의 대각합이 제곱의 합 꼴로 정리되기 때문이다. Rankin 이 $\tau(n)$ 의 상계에 쓴 방법과 같다.

# 활용

- $\Delta$ 는 Hecke 고유형식이므로 $\tau$ 는 곱셈적이고, $\tau(p^2)=\alpha_p^2+\beta_p^2=\tau(p)^2-p^{11}$ 처럼 소수 거듭제곱의 값도 $\alpha_p,\beta_p$ 로 적힌다. 그 결과 $\vert\tau(n)\vert\le d(n)\thinspace n^{11/2}$ 이다. $d(n)$ 은 $n$ 의 약수 개수다. Frobenius 고윳값이 [Hecke 작용소](hecke-operators.md)의 고윳값과 같아지는 자리다.
- 여러 변수 지수합의 제곱근 크기 상계가 이 정리에서 나온다. Kloosterman 합의 상계 $2\sqrt p$ 는 곡선의 경우인 Weil 의 정리에서 나온다. Katz 의 *Gauss Sums, Kloosterman Sums and Monodromy Groups* 가 이 응용을 정리했다.
- [모듈러 형식](modular-forms.md)의 계수에 $\vert a_n\vert\le d(n)\thinspace n^{(k-1)/2}$ 의 상계를 준다.
- 대수기하 부호(algebraic geometry code)의 매개변수는 곡선의 유리점 개수 $N$ 과 종수 $g$ 로 정해지고, Weil 한계 $N\le q+1+2g\sqrt q$ 가 $N$ 의 상한을 준다. Tsfasman–Vlăduţ–Zink 는 유리점이 많은 모듈러 곡선으로 Gilbert–Varshamov 한계(Gilbert–Varshamov bound)를 넘는 부호의 열을 만들었다.
- *Weil II* 의 무게 정리는 편향 층(perverse sheaf), 교차 코호몰로지(intersection cohomology), 혼합 Hodge [가군](modules.md)(mixed Hodge module)의 무게 이론에 사용된다.

[^1]: A. Grothendieck, "Standard conjectures on algebraic cycles", Algebraic Geometry (Bombay Colloquium 1968), Oxford University Press, 1969, 193–199.
[^2]: S. L. Kleiman, "The standard conjectures", Motives, Proceedings of Symposia in Pure Mathematics 55 (1994), 3–20. 표준 추측이 어떤 경우에 알려져 있고 일반적으로는 증명되지 않았음을 정리한 서베이다.
[^3]: P. Deligne, "La conjecture de Weil. I", Publications mathématiques de l'IHÉS 43 (1974), 273–307.

# 연관 문서

## 선수지식

- [Dwork 의 유리성 정리](dwork-rationality.md)

## 더 알아보기

- [Sato–Tate 분포](sato-tate.md)
- [Kloosterman 합](kloosterman-sums.md)
- [저수준 영점](low-lying-zeros.md)

#number_theory #algebraic_topology #theorem #complex_analysis
