# 유체론

# 개요

유체론은 [수체](algebraic-number-fields.md) $K$ 의 아벨 확대를 $K$ 안의 산술 자료만으로 분류한다. 분류하는 자료가 류군을 넓힌 **광선류군**이고, 분류를 실현하는 사상이 **Artin 상호법칙**이다.

$$
\mathrm{Cl}\_{\mathfrak m}(K)/H \thickspace\xrightarrow{\ \sim\ }\thickspace \mathrm{Gal}(L/K)
$$

$K$ 의 아벨 확대 $L$ 마다 광선류군의 부분군 하나가 대응하고 그 몫이 $\mathrm{Gal}(L/K)$ 와 동형이다. 확대체를 만들어 보지 않고 $K$ 의 [아이디얼](ideals-quotient-rings.md) 산술만으로 아벨 확대의 목록을 읽어낼 수 있다.

[이차 상호법칙](quadratic-reciprocity.md)은 $p$ 가 법 $q$ 에서 제곱수인지와 $q$ 가 법 $p$ 에서 제곱수인지를 잇는다. 유체론의 언어로는 소수 $p$ 가 아벨 확대 $L/K$ 에서 분해하는 방식이 $p$ 의 합동조건으로 결정된다는 진술이며, Gauss 의 정리는 $K=\mathbb Q$ 이고 $L$ 이 이차체인 경우다.

# 직관

## 분해법칙과 합동조건

$K=\mathbb Q$ 이고 $L=\mathbb Q(\zeta_m)$ 일 때

$$
\mathrm{Gal}(L/\mathbb Q)\cong(\mathbb Z/m\mathbb Z)^\times,\qquad \mathrm{Frob}\_p\longmapsto p\bmod m
$$

이고 $p$ 가 완전분해할 조건은 $\mathrm{Frob}\_p=1$ , 곧 $p\equiv1\pmod m$ 이다. 소수의 분해라는 대수적 질문이 나머지 계산으로 번역된다.

유체론은 이것이 원분체만의 현상이 아니라고 말한다. $K$ 의 모든 아벨 확대에서 분해법칙이 합동조건으로 서술되고, 기저체가 $\mathbb Q$ 가 아니면 법 $m$ 의 나머지 자리에 광선류군의 원소가 들어간다.

## 아벨 조건의 역할

분기하지 않는 $\mathfrak p$ 위의 Frobenius 는 $\mathfrak p$ 위에 있는 $L$ 의 [소 아이디얼](prime-ideals.md)을 골라야 정해지고, 다른 것을 고르면 Galois 군의 켤레원이 나온다. 일반적으로 $\mathrm{Frob}\_{\mathfrak p}$ 는 원소가 아니라 켤레류다.

군이 아벨이면 켤레류가 한원소라 모호함이 사라진다. $\mathrm{Frob}\_{\mathfrak p}$ 가 $\mathfrak p$ 만의 함수가 되고, 아이디얼의 곱에 대해 곱셈적으로 확장하면 아이디얼군에서 Galois 군으로 가는 준동형이 생긴다. 유체론이 아벨 확대에서 멈추는 이유다.

비아벨로 넘어가면 켤레류 정보만 남는다. 켤레류에서 수를 뽑으려면 [표현의 지표](group-representations.md)가 필요하고, 거기서 [Galois 표현](galois-representations.md)과 $L$ 함수의 세계가 열린다.

## 대응의 구조

```mermaid
graph TD
  subgraph A["K 안쪽 — 산술"]
    A1["모듈러스 m"] --> A2["광선류군 Cl_m(K)"]
    A2 --> A3["부분군 H"]
  end
  subgraph B["K 바깥쪽 — 체"]
    B1["아벨 확대 L/K<br/>(m 밖에서 불분기)"] --> B2["Gal(L/K)"]
  end
  A3 -->|"존재 정리"| B1
  B2 -->|"Artin 상호법칙<br/>Frob_p ↤ p"| A2
  A2 -.->|"포함관계를 뒤집는<br/>격자 동형"| B1
```

작은 부분군에 큰 확대가 대응한다. $H$ 가 전체 광선류군이면 $L=K$ 이고, $H$ 가 자명군이면 $L$ 은 그 모듈러스에서 가능한 가장 큰 아벨 확대인 광선유체다.

## 모듈러스의 역할

류군에 대응하는 확대는 분기가 전혀 없는 것뿐인데 $\mathbb Q(i)/\mathbb Q$ 처럼 유용한 아벨 확대는 대개 어딘가에서 분기한다. $\mathbb Q$ 의 류수는 1 이므로 류군만 보면 $\mathbb Q$ 에 아벨 확대가 없다는 잘못된 결론이 나온다.

어디까지 분기를 허용할지 미리 정하는 지정이 모듈러스 $\mathfrak m$ 이고, $\mathfrak m$ 을 크게 잡을수록 더 많은 아벨 확대가 시야에 들어온다. $K=\mathbb Q$ 이고 $\mathfrak m=(m)\infty$ 로 두면 광선류군이 $(\mathbb Z/m\mathbb Z)^\times$ 가 되어 원분체 이야기가 복원된다. 모든 $\mathfrak m$ 의 광선류군을 한꺼번에 담은 것이 이델류군이다.

# 정의

## 모듈러스와 광선류군

$K$ 의 **모듈러스** $\mathfrak m$ 은 형식적인 곱 $\mathfrak m=\mathfrak m_0\mathfrak m_\infty$ 다. $\mathfrak m_0$ 는 $\mathcal O_K$ 의 0 이 아닌 아이디얼, $\mathfrak m_\infty$ 는 실매장들의 부분집합이다.

- $I_K^{\mathfrak m}$ 은 $\mathfrak m_0$ 와 서로소인 소 아이디얼들이 생성하는 분수 아이디얼군이다.
- $P_K^{\mathfrak m}$ 은 $\alpha\equiv1\ (\mathrm{mod}^\times\mathfrak m)$ 인 $\alpha$ 로 생성되는 주 아이디얼들이다. 곧 $\mathfrak m_0$ 의 각 소인수에서 $\alpha$ 가 1 과 충분히 합동이고 $\mathfrak m_\infty$ 의 각 실매장에서 $\sigma(\alpha)\gt 0$ 이다.

**광선류군**은 그 몫이다.

$$
\mathrm{Cl}\_{\mathfrak m}(K)=I_K^{\mathfrak m}/P_K^{\mathfrak m}
$$

언제나 유한군이고 $\mathfrak m=1$ 이면 류군 $\mathrm{Cl}(K)$ 다. 크기는 다음 완전열이 결정한다.

$$
1\to\frac{\mathcal O_K^\times}{\mathcal O_{K,\mathfrak m}^\times}\to\frac{(\mathcal O_K/\mathfrak m_0)^\times\times\lbrace\pm1\rbrace^{\mathfrak m_\infty}}{1}\to\mathrm{Cl}\_{\mathfrak m}(K)\to\mathrm{Cl}(K)\to1
$$

$K=\mathbb Q$ 이고 $\mathfrak m=(m)\infty$ 이면 $\mathrm{Cl}(\mathbb Q)=1$ 이고 $\mathfrak m_\infty$ 조건이 양수만 남기므로

$$
\mathrm{Cl}\_{(m)\infty}(\mathbb Q)\cong(\mathbb Z/m\mathbb Z)^\times
$$

가 된다. $\mathfrak m_0$ 와 서로소인 분수 아이디얼은 양의 유리수 $a/b$ 로 유일하게 쓰이고 $P^{\mathfrak m}$ 은 $\equiv1\pmod m$ 인 것들이다.

## Artin 사상

$L/K$ 가 아벨 확대이고 $\mathfrak m$ 이 분기하는 모든 소수를 포함한다고 하자. $\mathfrak m$ 과 서로소인 소 아이디얼 $\mathfrak p$ 에 대해 $\mathrm{Frob}\_{\mathfrak p}\in\mathrm{Gal}(L/K)$ 가 잘 정의되고, 곱셈적으로 확장해

$$
\psi_{L/K}\colon I_K^{\mathfrak m}\to\mathrm{Gal}(L/K),\qquad
\prod\mathfrak p_i^{a_i}\mapsto\prod\mathrm{Frob}\_{\mathfrak p_i}^{a_i}
$$

를 얻는다. 이것이 **Artin 사상**이다.

## 유체론의 세 정리

> **Artin 상호법칙.** $L/K$ 가 아벨 확대면, 분기 소수를 모두 포함하는 적당한 모듈러스 $\mathfrak m$ 이 있어 $\psi_{L/K}$ 가 전사이고 그 핵이
> $$
> \ker\psi_{L/K}=P_K^{\mathfrak m}\cdot N_{L/K}(I_L^{\mathfrak m})
> $$
> 이다. 따라서 $\mathrm{Cl}\_{\mathfrak m}(K)/N_{L/K}(\cdots)\cong\mathrm{Gal}(L/K)$ 다.

그런 $\mathfrak m$ 가운데 가장 작은 것이 $L/K$ 의 **도체** $\mathfrak f_{L/K}$ 이고, $\mathfrak p\mid\mathfrak f_{L/K}$ 인 것과 $\mathfrak p$ 가 분기하는 것이 동치다. 도체는 이 확대를 보는 데 필요한 합동조건의 정밀도를 잰다.

> **존재 정리.** $\mathrm{Cl}\_{\mathfrak m}(K)$ 의 임의의 부분군 $H$ 에 대해, $\ker\psi_{L/K}$ 가 $H$ 의 당김과 일치하는 아벨 확대 $L/K$ 가 유일하게 존재한다.

> **유일성과 격자 동형.** 두 대응은 서로 역이며 포함관계를 뒤집는다. $H_1\subseteq H_2\iff L_1\supseteq L_2$ 이고, 교집합과 합성이 곱과 교집합에 대응한다.

$H$ 가 자명군일 때 나오는 확대 $K_{\mathfrak m}$ 가 **광선유체**다. $\mathfrak m$ 밖에서 불분기인 아벨 확대 전체를 품는 최대 확대이며 $\mathrm{Gal}(K_{\mathfrak m}/K)\cong\mathrm{Cl}\_{\mathfrak m}(K)$ 다.

## 이델류군을 쓴 서술

모든 자리 $v$ 를 한꺼번에 다루는 것이 이델이다.

$$
\mathbb A_K^\times=\Big\lbrace(x_v)\in\prod_v K_v^\times : \text{거의 모든 } v \text{ 에서 } x_v\in\mathcal O_v^\times\Big\rbrace,
\qquad C_K=\mathbb A_K^\times/K^\times
$$

$C_K$ 가 **이델류군**이다. 열린 유한지표 부분군으로 몫을 취하면 광선류군이 나오므로 $C_K$ 는 모든 $\mathrm{Cl}\_{\mathfrak m}(K)$ 를 동시에 담는다. 유체론은 한 줄이 된다.

$$
\psi_K\colon C_K\longrightarrow\mathrm{Gal}(K^{\mathrm{ab}}/K)
$$

가 연속 전사이고 유한지표 열린 부분군과 유한 아벨 확대가 일대일 대응한다. $\mathrm{Gal}(K^{\mathrm{ab}}/K)$ 는 $C_K$ 의 유한완비화다.

**국소 유체론**은 각 자리에서의 대응이다. $K_v$ 가 국소체면

$$
\psi_v\colon K_v^\times\longrightarrow\mathrm{Gal}(K_v^{\mathrm{ab}}/K_v)
$$

가 있어 단원군 $\mathcal O_v^\times$ 가 관성군에 대응하고 소원 $\pi$ 가 Frobenius 로 간다. 대역 사상 $\psi_K$ 는 국소 사상들의 곱으로 만들어지며, 국소 조건들의 대역적 정합성이 상호법칙의 내용이다. 국소 쪽은 Lubin–Tate 형식군으로 명시적으로 구성된다.

# 성질

## 힐베르트 유체

$\mathfrak m=1$ 에 대응하는 확대 $H$ 를 **힐베르트 유체**라 한다.

- $H/K$ 는 유한 소수와 무한 소수 모두에서 불분기인 최대 아벨 확대다.
- $\mathrm{Gal}(H/K)\cong\mathrm{Cl}(K)$ 이므로 $[H:K]=h_K$ 다.
- $\mathfrak p$ 가 $H$ 에서 완전분해할 조건은 $\psi(\mathfrak p)=1$ , 곧 $\mathfrak p$ 가 주 아이디얼인 것이다.

마지막 항목은 아이디얼이 주 아이디얼인지를 묻는 질문을 소수가 어떤 체에서 완전분해하는지로 바꾸고, 후자는 다항식이 법 $\mathfrak p$ 에서 근을 갖는지로 판정된다.

**주 아이디얼 정리**는 $K$ 의 모든 아이디얼이 $H$ 로 올라가면 주 아이디얼이 된다고 말한다. $H$ 자신의 류군은 새로 생길 수 있어 $K\subset H\subset H_2\subset\cdots$ 로 유체탑을 쌓을 수 있고, Golod–Shafarevich 가 1964 년에 무한히 계속되는 예를 만들었다.

## Kronecker–Weber 정리

> $\mathbb Q$ 의 모든 유한 아벨 확대는 어떤 원분체 $\mathbb Q(\zeta_m)$ 안에 들어 있다.

$\mathbb Q$ 의 아벨 확대 $L$ 의 도체를 $\mathfrak m\mid(m)\infty$ 로 잡으면 $L$ 이 광선유체 안에 들어가야 하는데, $\mathrm{Cl}\_{(m)\infty}(\mathbb Q)\cong(\mathbb Z/m\mathbb Z)^\times$ 이고 $\mathbb Q(\zeta_m)$ 이 그 광선유체다.

이 정리를 일반 $K$ 로 옮기는 것이 Hilbert 의 12 번 문제다. $K^{\mathrm{ab}}$ 를 생성하는 해석적 함수를 찾는 문제이며, $K=\mathbb Q$ 에서는 $e^{2\pi ix}$ 가 답이고 허수 이차체에서는 타원 모듈러 함수와 [타원곡선](elliptic-curves.md)의 복소곱셈 이론에서 답이 나온다. 그 밖의 수체에서는 그런 함수가 알려져 있지 않다[^1].

## 이차 상호법칙의 재증명

$p$ 가 홀소수고 $p^\ast=(-1)^{(p-1)/2}p$ 라 하면 $\mathbb Q(\sqrt{p^\ast})$ 는 $\mathbb Q(\zeta_p)$ 의 유일한 이차 부분체다. $\mathrm{Gal}(\mathbb Q(\zeta_p)/\mathbb Q)\cong(\mathbb Z/p\mathbb Z)^\times$ 의 지표 2 부분군인 제곱잉여들이 $\mathbb Q(\sqrt{p^\ast})$ 를 고정한다. 다른 소수 $q$ 에 대해

$$
\Big(\frac{p^\ast}q\Big)=1
\iff \mathrm{Frob}\_q \text{ 가 } \mathbb Q(\sqrt{p^\ast}) \text{ 를 고정}
\iff q\bmod p \text{ 가 제곱잉여}
\iff \Big(\frac qp\Big)=1
$$

이고, $\left(\frac{p^\ast}q\right)=\left(\frac{-1}q\right)^{(p-1)/2}\left(\frac pq\right)$ 을 풀면 Gauss 의 공식이 된다. 두 Legendre 기호는 같은 원분체의 Galois 군을 서로 다른 방향에서 본 것이다.

## $p=x^2+ny^2$ 의 판정

$h=1$ 이면 합동조건으로 답이 나오지만 $h\gt 1$ 이면 부족하고, 그 부분을 힐베르트 유체가 채운다.

$K=\mathbb Q(\sqrt{-n})$ 이고 $p$ 가 $n$ 을 나누지 않는 홀소수이며 $\mathcal O_K=\mathbb Z[\sqrt{-n}]$ 이라 하면

$$
p=x^2+ny^2
\iff p\mathcal O_K=\mathfrak p\bar{\mathfrak p} \text{ 이고 } \mathfrak p \text{ 가 주 아이디얼}
\iff p \text{ 가 } H \text{ 에서 완전분해}
$$

이다. $H$ 를 생성하는 다항식 $f$ 를 잡으면 마지막 조건이 $\left(\frac{-n}p\right)=1$ 이고 $f$ 가 법 $p$ 에서 근을 갖는다는 판정이 된다. 앞은 합동조건이고 뒤가 류군이 자명하지 않을 때 필요한 정보다.

$n=5$ 에서 $\mathrm{Cl}(\mathbb Q(\sqrt{-5}))\cong\mathbb Z/2$ 이므로 $[H:K]=2$ 이고 $H=K(i)=\mathbb Q(i,\sqrt5)$ 다. $\mathbb Q(i,\sqrt5)/\mathbb Q$ 가 $(\mathbb Z/2)^2$ 확대라 $p$ 의 완전분해가 합동조건 $p\equiv1,9\pmod{20}$ 으로 떨어진다.

| $p\bmod 20$ | 소수의 예 | $x^2+5y^2$ | $2x^2+2xy+3y^2$ | $H$ 에서 완전분해 |
|---|---|---|---|---|
| $1,\thickspace 9$ | 29, 41 | O | | O |
| $3,\thickspace 7$ | 3, 7, 23, 43, 47 | | O | |
| $11,13,17,19$ | 11, 13, 17, 19 | | | |

$x^2+5y^2$ 으로 표현되는 소수와 $H$ 에서 완전분해하는 소수가 같다. 두 이차형식이 류군의 두 류에 대응하고, $p\equiv11,13,17,19$ 인 경우는 $p$ 가 $K$ 에서 분해하지 않아 어느 형식으로도 표현되지 않는다.

류군 대신 차수의 환유군을 쓰면 대응하는 체가 아벨이 아닐 수 있다. $p=x^2+27y^2$ 의 판정은 $p\equiv1\pmod3$ 이고 2 가 법 $p$ 의 세제곱잉여라는 조건이며, 여기 관여하는 $\mathbb Q(\zeta_3,\sqrt[3]2)/\mathbb Q$ 는 $S_3$ 확대라 $\mathbb Q$ 위에서 합동조건으로 서술되지 않는다. $\mathbb Q(\zeta_3)$ 위에서는 아벨이라 유체론이 적용되므로, 상호법칙을 쓰려면 밑체를 올바로 골라야 한다.

## Chebotarev 밀도 정리

유체론의 해석적 짝이다. $L/K$ 가 Galois 이고 $C\subseteq\mathrm{Gal}(L/K)$ 가 켤레류면 $\mathrm{Frob}\_{\mathfrak p}=C$ 인 소 아이디얼의 밀도가 $|C|/[L:K]$ 다.

아벨 확대에 적용하면 각 광선류에 속하는 소 아이디얼의 밀도가 모두 같다는 뜻이고, $K=\mathbb Q$ 에서는 [Dirichlet L 함수](dirichlet-l-functions.md)의 등차수열 소수 정리가 된다. Frobenius 의 균등 분포 덕분에 충분히 많은 $\mathfrak p$ 에서 분해 양상이 같으면 두 확대가 같다는 논증이 가능하다.

## 증명 구조

큰 줄기는 두 개의 부등식이다.

- **제1 부등식**, 곧 $\le$ 쪽은 $\zeta_K(s)$ 의 $s=1$ 에서의 극을 비교하는 해석적 논증으로 노름군의 지표가 $[L:K]$ 이상임을 준다.
- **제2 부등식**, 곧 $\ge$ 쪽은 Herbrand 몫과 단원 계산을 쓰는 대수적 논증이다.

둘을 합치면 지표가 정확히 $[L:K]$ 이고, 남은 일은 그 몫이 Artin 사상으로 실현됨을 보이는 것이다. 현대적 서술은 이 과정을 군 코호몰로지로 정리해 $H^2(\mathrm{Gal}(L/K),C_L)\cong\frac1{[L:K]}\mathbb Z/\mathbb Z$ 로 압축하며, 이 군의 표준 생성원이 주는 컵곱이 Artin 동형이다.

# 활용

## 비아벨 류체론

켤레류에서 수를 뽑는 방법은 표현의 지표를 취하는 것이다. Galois 표현 $\rho\colon\mathrm{Gal}(\bar K/K)\to\mathrm{GL}\_n(\mathbb C)$ 에 대해

$$
L(s,\rho)=\prod_{\mathfrak p}\det\big(1-\rho(\mathrm{Frob}\_{\mathfrak p})N\mathfrak p^{-s}\big)^{-1}
$$

를 만들면 $n=1$ 일 때 Hecke $L$ 함수이고, 유체론은 그 $L$ 함수가 자기동형 $L$ 함수와 일치한다는 진술이 된다.

[Langlands 강령](langlands-program.md)은 $n\ge2$ 에서도 $n$ 차원 Galois 표현이 $\mathrm{GL}\_n$ 의 자기동형 표현과 대응하고 $L$ 함수가 일치한다고 예측한다. $n=2$ 의 특별한 경우가 모듈러성 정리이며 Fermat 마지막 정리의 증명을 완성했다. 유체론은 $\mathrm{GL}\_1$ 의 경우로 이 그림 안에 자리잡는다.

## 허수 이차체와 복소곱셈

$K$ 가 허수 이차체면 $K^{\mathrm{ab}}$ 를 타원 모듈러 함수의 값으로 명시할 수 있다. $j$ 불변량 $j(\mathcal O_K)$ 가 힐베르트 유체를 생성하고 그 최소다항식의 차수가 류수다.

$h_K=1$ 이면 $j(\mathcal O_K)$ 가 유리정수여야 하고, $j=q^{-1}+744+196884q+\cdots$ 에서 $q=-e^{-\pi\sqrt{163}}$ 이 극히 작으므로 $e^{\pi\sqrt{163}}$ 가 정수에 가까워진다.

CM(complex multiplication) 방법은 원하는 위수를 갖는 타원곡선을 [유한체](finite-fields.md) 위에 만들 때 쓴다. 적당한 허수 이차체의 힐베르트 유체 다항식을 계산해 그 근으로 $j$ 불변량을 얻으며, 곡선을 무작위로 뽑아 점 개수를 세는 것보다 빠르다. 특정 매장 차수를 갖는 곡선이 필요한 [쌍 기반 암호](pairing-based-cryptography.md)에서는 사실상 유일한 수단이다.

## 계산 정수론

힐베르트 유체를 계산하는 것은 류군을 계산하는 것과 같은 문제다. 허수 이차체에서는 축약 이차형식을 세는 방법이 쓰이고, 일반 수체에서는 아이디얼의 관계를 모아 선형대수로 풀어 류군과 단원군을 동시에 얻는다.

어떤 정수가 노름이 될 수 있는지를 묻는 질문에는 Hasse 노름 정리를 쓴다. 순환 확대 $L/K$ 에서 $a\in K^\times$ 가 대역적으로 노름인 것과 모든 자리에서 국소적으로 노름인 것이 동치라는 정리이며, 순환이 아니면 깨진다. 그 깨짐을 재는 것이 Brauer 군이고 Hasse 원리의 실패를 설명하는 Brauer–Manin 장애로 이어진다.

[^1]: R. P. Langlands, *Some contemporary problems with origins in the Jugendtraum*, Mathematical Developments Arising from Hilbert Problems, Proc. Sympos. Pure Math. **28** (1976), 401–418. 유리수체와 허수 이차체 밖에서 Hilbert 의 12 번 문제가 풀리지 않은 채임을 전제로 그 너머의 접근을 논한다.

# 연관 문서

## 선수지식

- [대수적 수체](algebraic-number-fields.md)
- [이차 상호법칙](quadratic-reciprocity.md)

## 더 알아보기

- [Langlands 강령](langlands-program.md)
- [Chebotarev 밀도 정리](chebotarev.md)
- [국소 유체론과 Lubin–Tate 형식군](local-class-field-theory.md)
- [복소 곱셈](complex-multiplication.md)
- [Brauer 군](brauer-groups.md)

#number_theory #field_theory #group_theory #theorem
