# 분기군

# 개요

**분기군(ramification groups)** 은 수체나 국소체의 Galois 확대에서 한 소 아이디얼을 고정하는 Galois 원소들을 그 원소가 정수를 얼마나 적게 움직이는지에 따라 거른 부분군의 열이다. 첫 두 항이 분해군과 관성군이고, 그 아래 항들이 야생 분기의 깊이를 잰다.

분해군을 관성군으로 나눈 몫은 잉여체 확대의 Galois 군이고 Frobenius 원소가 생성한다. 분기군의 크기를 더하면 판별식과 도체가 계산된다.

# 직관

$\mathbb Q(i)/\mathbb Q$ 의 Galois 군은 켤레 $\sigma$ 와 항등사상의 $\lbrace1,\sigma\rbrace$ 이고, [대수적 수체](algebraic-number-fields.md)의 분해에서 소수는 세 가지로 갈린다. $5=(2+i)(2-i)$ 는 분해되고, $3$ 은 소수로 남고, $2=-i(1+i)^2$ 는 분기한다.

$\sigma$ 가 각 소 아이디얼을 어떻게 움직이는지 본다. $\sigma(2+i)=2-i$ 이므로 $5$ 위의 두 소 아이디얼은 서로 바뀐다. $3$ 위의 소 아이디얼 $(3)$ 은 고정되고, $\sigma$ 는 잉여체 $\mathbb Z\lbrack i\rbrack/(3)\cong\mathbb F_9$ 에서 $x\mapsto x^3$ 으로 작용한다. $(1+i)$ 도 고정되지만 잉여체가 $\mathbb F_2$ 라 $\sigma$ 는 잉여체에서 항등사상이다.

마지막 경우에 $\sigma$ 는 잉여체로는 보이지 않는데도 항등사상이 아니다. 얼마나 다른지를 $\pi=i-1$ 로 잰다. $\sigma(\pi)-\pi=-2i$ 이고 $2$ 는 $\pi^2$ 의 단원배이므로, $\sigma$ 는 $\pi$ 를 $\pi^2$ 만큼 움직이지만 $\pi^3$ 만큼은 아니다. 이 깊이 $2$ 가 $\mathbb Q(i)$ 의 판별식 $-4$ 에서 $2$ 의 지수와 같다.

# 정의

$L/K$ 를 수체의 Galois 확대, $G=\mathrm{Gal}(L/K)$, $\mathfrak P$ 를 $K$ 의 소 아이디얼 $\mathfrak p$ 위의 $L$ 의 소 아이디얼이라 한다. 잉여체를 $k_{\mathfrak P}=\mathcal O_L/\mathfrak P$, $k_{\mathfrak p}=\mathcal O_K/\mathfrak p$ 로 쓰고 $q=\char35{}k_{\mathfrak p}$ 라 한다.

## 분해군과 관성군

$$
D_{\mathfrak P}=\lbrace\sigma\in G:\sigma\mathfrak P=\mathfrak P\rbrace,\qquad
I_{\mathfrak P}=\lbrace\sigma\in D_{\mathfrak P}:\sigma(x)\equiv x\pmod{\mathfrak P}\thinspace\text{ 모든 } x\in\mathcal O_L\rbrace
$$

$D_{\mathfrak P}$ 를 **분해군(decomposition group)**, $I_{\mathfrak P}$ 를 **관성군(inertia group)** 이라 한다. 분기 지수를 $e$, 잉여 차수를 $f$ 라 하면 $\char35{}D_{\mathfrak P}=ef$, $\char35{}I_{\mathfrak P}=e$ 다.

## Frobenius 원소

$D_{\mathfrak P}$ 는 잉여체에 작용하고 다음이 완전하다.

$$
1\longrightarrow I_{\mathfrak P}\longrightarrow D_{\mathfrak P}\longrightarrow\mathrm{Gal}(k_{\mathfrak P}/k_{\mathfrak p})\longrightarrow1
$$

$\mathfrak p$ 가 분기하지 않으면 $I_{\mathfrak P}=1$ 이고, $x\mapsto x^q$ 에 대응하는 $D_{\mathfrak P}$ 의 원소를 **Frobenius 원소(Frobenius element)** $\mathrm{Frob}\_{\mathfrak P}$ 라 한다.

## 하첨자 분기군

$K$ 를 국소체, $L/K$ 를 유한 Galois 확대, $v_L$ 을 $L$ 의 정규화된 값매김이라 한다. 정수 $i\ge-1$ 에 대해

$$
G_i=\lbrace\sigma\in G:v_L(\sigma(x)-x)\ge i+1\thinspace\text{ 모든 } x\in\mathcal O_L\rbrace
$$

를 **하첨자 분기군(lower ramification groups)** 이라 한다. $G\_{-1}=G$, $G_0$ 는 관성군이고, $i$ 가 충분히 크면 $G_i=1$ 이다. 수체의 경우에는 $\mathfrak P$ 에서 완비화한 국소 확대에서 정의하고, 그 Galois 군이 $D_{\mathfrak P}$ 다.

# 성질

## 몫의 구조

$p$ 를 잉여체의 표수라 한다.[^1]

- $G_0/G_1$ 은 $k_L^{\times}$ 에 단사로 들어가므로 위수가 $p$ 와 서로소인 순환군이다.
- $i\ge1$ 에서 $G_i/G\_{i+1}$ 은 덧셈군 $k_L$ 에 단사로 들어가므로 기본 아벨 $p$ 군이다.
- 따라서 $G_1$ 은 $G_0$ 의 Sylow $p$ 부분군이다. $G_1=1$ 이면 **온순 분기(tamely ramified)**, 아니면 **야생 분기(wildly ramified)** 라 한다.

$p\nmid e$ 이면 $G_1=1$ 이므로 분기가 온순하다. 직관 절의 $\mathbb Q_2(i)/\mathbb Q_2$ 는 $G_0=G_1=G$, $G_2=1$ 인 야생 분기다. $\mathbb Q_p(\zeta_p)/\mathbb Q_p$ 는 $G_0=G\cong(\mathbb Z/p\mathbb Z)^{\times}$, $G_1=1$ 인 온순 완전분기다.

## 차분과 판별식

**Hilbert 공식(Hilbert formula).** $L/K$ 의 차분 아이디얼(different)의 지수는

$$
v_L(\mathfrak D\_{L/K})=\sum_{i\ge0}\big(\char35{}G_i-1\big)
$$

이다.[^1] 판별식의 지수는 이것에 잉여 차수 $f$ 를 곱한 값이다. $\mathbb Q_2(i)$ 에서 $(2-1)+(2-1)=2$ 이므로 판별식이 $2^2=4$ 다.

## 상첨자 번호매김

$\varphi(u)=\int_0^u\frac{dt}{\lbrack G_0:G_t\rbrack}$ 로 정한 **Herbrand 함수(Herbrand function)** 와 그 역함수 $\psi$ 로 $G^v=G\_{\psi(v)}$ 를 둔다. 이것이 **상첨자 분기군(upper ramification groups)** 이다. 하첨자는 부분군으로 제한할 때 보존되고, 상첨자는 정규 부분군의 몫으로 갈 때 보존된다($(G/H)^v=G^vH/H$, Herbrand 의 상첨자 정리).[^1]

**Hasse–Arf 정리(Hasse–Arf theorem).** $G$ 가 아벨이면 $G^v\ne G^{v+\varepsilon}$ 인 도약점 $v$ 가 모두 정수다.

[국소 유체론](local-class-field-theory.md)의 상호사상은 단원군의 여과 $1+\mathfrak m^n$ 을 상첨자 분기군 $G^n$ 으로 보낸다. 도약점이 정수인 것이 이 대응에서 나온다.

## Artin 도체

$\rho:G\to\mathrm{GL}(V)$ 가 복소 표현이면 **Artin 도체(Artin conductor)** 의 지수는

$$
f(\rho)=\sum_{i\ge0}\frac{\char35{}G_i}{\char35{}G_0}\big(\dim V-\dim V^{G_i}\big)
$$

이다. 이 값은 정수이고, 아벨 지표에서는 상첨자의 마지막 도약점에 $1$ 을 더한 값이다. $\mathbb Q_2(i)$ 의 자명하지 않은 지표에서 $f=1+1=2$ 이고 도체는 $4$ 다.

# 활용

- [Chebotarev 밀도 정리](chebotarev.md): 분기하지 않는 소수의 Frobenius 켤레류가 Galois 군 안에서 균등하게 분포한다.
- [원분체](cyclotomic-fields.md): $\mathbb Q(\zeta_n)$ 에서 $p\nmid n$ 의 Frobenius 가 $\sigma_p$ 이고, $p\mid n$ 의 관성군이 $(\mathbb Z/p^k\mathbb Z)^{\times}$ 다.
- [Galois 표현](galois-representations.md): 관성군이 자명하게 작용하는 자리가 불분기 자리이고, 그 자리에서 $\rho(\mathrm{Frob})$ 의 특성다항식이 $L$ 함수의 Euler 인자를 정한다.
- [Serre 추측](serre-conjecture.md): 표현의 준위는 $p$ 밖 자리의 Artin 도체로, 무게는 $p$ 자리 관성군의 작용으로 정한다.
- [국소 유체론](local-class-field-theory.md): 상호사상이 단원군의 여과를 상첨자 분기군으로 보낸다.

[^1]: J.-P. Serre, *Local Fields*, Graduate Texts in Mathematics 67, Springer, 1979, 1장 7절, 4장, 6장.

# 연관 문서

## 선수지식

- [대수적 수체](algebraic-number-fields.md)
- [p 진수](p-adic-numbers.md)

## 더 알아보기

- [국소 유체론](local-class-field-theory.md)

#number_theory #field_theory #group_theory
