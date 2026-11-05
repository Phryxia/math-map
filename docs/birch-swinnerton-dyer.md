# Birch–Swinnerton-Dyer 추측

# 개요

**Birch–Swinnerton-Dyer 추측(Birch–Swinnerton-Dyer conjecture, BSD)** 은 [타원곡선](elliptic-curves.md) 위 유리점이 얼마나 많은지를 소수마다 센 점의 개수로 알 수 있다고 주장하는 추측이다. 예로 곡선 $y^2=x^3-2$ 에는 유리점 $(3,5)$ 에서 할선과 접선을 거듭 그어 얻는 유리점이 무한히 많고, $y^2=x^3-x$ 의 유리점은 $y=0$ 인 세 점과 무한원점뿐이다. 이 추측은 소수 $p$ 마다 나머지 계산으로 곡선 위의 점을 세어 함수 하나로 모으고, 그 함수가 $s=1$ 에서 $0$ 이 되는 차수가 유리점 전체를 만드는 데 필요한 독립인 점의 개수라고 예측한다.

# 직관

$y^2=x^3-x$ 와 $y^2=x^3-2$ 를 소수 $p$ 마다 [유한체](finite-fields.md) $\mathbb F_p$ 위에서 풀어 무한원점을 포함한 해의 개수 $N_p=\char35{}E(\mathbb F_p)$ 를 센다. $p=5$ 에서 $y^2=x^3-x$ 는 $x=0,1,4$ 에서 $y=0$, $x=2,3$ 에서 $y$ 가 둘씩이라 $N_5=8$ 이고, $y^2=x^3-2$ 는 $N_5=6$ 이다. $p=7$ 에서는 각각 $8$ 과 $7$ 이다.

$y^2=x^3-2$ 에는 유리점 $P=(3,5)$ 가 있고 $P,2P,3P,\dots$ 가 모두 다르다. 이 점들을 법 $p$ 로 줄이면 $E(\mathbb F_p)$ 안에 점이 생기므로, 무한히 많은 유리점이 있는 곡선은 $N_p$ 가 $p$ 보다 큰 쪽으로 치우칠 것이라고 예상할 수 있다. $5\le p\le2000$ 에서 $N_p/p$ 를 모두 곱하면 $y^2=x^3-x$ 에서는 약 $1.8$, $y^2=x^3-2$ 에서는 약 $6.0$ 이다.

Birch 와 Swinnerton-Dyer 는 1960 년대 초 EDSAC 으로 여러 곡선에서 이 곱을 계산해 $\prod_{p\le X}N_p/p$ 가 $C(\log X)^r$ 처럼 자란다고 관측했다[^1]. $r$ 은 유리점 전체를 만드는 데 필요한 독립인 점의 개수다. $N_p$ 를 모두 모은 함수 $L(E,s)$ 에서는 이 곱이 $s=1$ 근처의 값에 대응하고, $(\log X)^r$ 의 지수가 $s=1$ 에서 $L(E,s)$ 가 $0$ 이 되는 차수에 대응한다.

# 정의

## L 함수

[타원곡선](elliptic-curves.md) $E/\mathbb Q$ 의 도체를 $N$ 이라 하고 $a_p=p+1-N_p$ 로 둔다. $E$ 의 **L 함수(L-function)** 는 다음 Euler 곱이다. 나쁜 환원 자리 $p\mid N$ 에서 $a_p$ 는 $0$ 또는 $\pm1$ 이다.

$$
L(E,s)=\prod_{p\nmid N}\Big(1-\frac{a_p}{p^s}+\frac1{p^{2s-1}}\Big)^{-1}\prod_{p\mid N}\Big(1-\frac{a_p}{p^s}\Big)^{-1}
$$

직관 절의 $y^2=x^3-x$ 에서 $a_5=5+1-8=-2$, $a_7=7+1-8=0$ 이므로 $p=5$ 의 인자는 $(1+2\cdot5^{-s}+5^{1-2s})^{-1}$ 이다.

## 순위

$E(\mathbb Q)$ 는 Mordell–Weil 정리(Mordell–Weil theorem)로 유한생성 아벨군이고 $E(\mathbb Q)\cong\mathbb Z^r\oplus E(\mathbb Q)\_{\mathrm{tors}}$ 다. $r$ 을 **대수적 순위(algebraic rank)**, $E(\mathbb Q)\_{\mathrm{tors}}$ 를 **비틀림 부분군(torsion subgroup)** 이라 한다. $\mathrm{ord}\_{s=1}L(E,s)$ 를 **해석적 순위(analytic rank)** 라 한다.

$y^2=x^3-x$ 의 유리점은 $y=0$ 인 세 점과 무한원점뿐이므로 $r=0$ 이고 비틀림 부분군의 위수가 $4$ 다. $y^2=x^3-2$ 는 $(3,5)$ 가 생성하는 $r=1$ 인 곡선이다.

## 추측의 진술

**Birch–Swinnerton-Dyer 추측** 의 약한 형태는 해석적 순위와 대수적 순위가 같다는 진술이다.

$$
\mathrm{ord}\_{s=1}L(E,s)=r=\mathrm{rank}\thinspace E(\mathbb Q)
$$

강한 형태는 선행계수를 다음과 같이 예측한다.

$$
\lim_{s\to1}\frac{L(E,s)}{(s-1)^r}
=\frac{\Omega_E\cdot\mathrm{Reg}\_E\cdot\char35{}\text{Ш}(E/\mathbb Q)\cdot\prod_pc_p}{\big(\char35{}E(\mathbb Q)\_{\mathrm{tors}}\big)^2}
$$

| 인자 | 뜻 |
|---|---|
| $\Omega_E$ | 실주기(real period). $\int_{E(\mathbb R)}\vert\omega\vert$ |
| $\mathrm{Reg}\_E$ | 조절자(regulator). 아래 절의 행렬식 |
| $\char35{}\text{Ш}$ | [Tate–Shafarevich 군](selmer-tate-shafarevich.md)의 위수 (유한하다고 가정) |
| $c_p$ | Tamagawa 수(Tamagawa number). 나쁜 환원 자리의 국소 지수 |
| $E(\mathbb Q)\_{\mathrm{tors}}$ | 비틀림 부분군 |

약한 형태는 Clay 연구소의 밀레니엄 문제(Millennium Prize Problems) 가운데 하나다.

## 정준 높이와 조절자

[Néron–Tate 높이](canonical-height.md) $\hat h\colon E(\mathbb Q)\to\mathbb R_{\ge0}$ 에서 쌍 $\langle P,Q\rangle=\tfrac12(\hat h(P+Q)-\hat h(P)-\hat h(Q))$ 를 만든다. 자유 부분의 생성원 $P_1,\dots,P_r$ 에 대해 조절자는 다음 [행렬식](determinants.md)이다.

$$
\mathrm{Reg}\_E=\det\big(\langle P_i,P_j\rangle\big)
$$

$y^2=x^3-2$ 에서는 $\mathrm{Reg}\_E=\hat h((3,5))$ 이고, $y^2=x^3-x$ 처럼 순위가 $0$ 이면 빈 행렬식이라 $\mathrm{Reg}\_E=1$ 이다.

# 성질

## 수렴과 함수방정식

Hasse 의 부등식 $|a_p|\le2\sqrt p$ 로 Euler 곱은 $\mathrm{Re}(s)\gt 3/2$ 에서 수렴한다. 모듈러성 정리(modularity theorem)로 $E$ 는 무게 $2$ 의 새형식 $f$ 에서 오므로 $L(E,s)=L(f,s)$ 이고, 후자는 $\mathbb C$ 전체로 해석적으로 연속되며 함수방정식

$$
\Lambda(s)=N^{s/2}(2\pi)^{-s}\Gamma(s)L(E,s),\qquad \Lambda(2-s)=w\thinspace\Lambda(s)
$$

를 만족한다. 그래서 수렴 영역 밖의 $s=1$ 에서 소멸 차수가 정의된다. $s=1$ 은 함수방정식의 중심이다.

## 정준 높이 쌍

$\hat h(mP)=m^2\hat h(P)$ 이고 $\hat h$ 는 이차형식이며, 쌍 $\langle\cdot,\cdot\rangle$ 은 $E(\mathbb Q)\otimes\mathbb R$ 에서 양의 정부호다. 그래서 $\mathrm{Reg}\_E$ 는 $E(\mathbb Q)/E(\mathbb Q)\_{\mathrm{tors}}$ 가 이루는 [격자](lattices.md)의 공부피의 제곱이고 양수다.

## Ш 이외의 인자의 계산

$\text{Ш}$ 의 유한성이 증명되지 않았으므로 $\char35{}\text{Ш}$ 만 유효한 계산법이 없고, 나머지 양은 모두 유효하게 구해진다[^1].

## 함수방정식의 부호와 패리티

$w=\pm1$ 이 함수방정식의 부호다. $w=-1$ 이면 $\Lambda(1)=-\Lambda(1)$ 이므로 $L(E,1)=0$ 이고 소멸 차수가 홀수이며, $w=+1$ 이면 짝수다. BSD 아래에서 순위의 홀짝이 국소 자료로 결정된다. 이 따름명제를 따로 떼어 낸 패리티 추측(parity conjecture)은 많은 경우에 증명되어 있다.

## 알려진 경우

| 결과 | 내용 |
|---|---|
| Coates–Wiles (1977) | [복소 곱셈](complex-multiplication.md)(complex multiplication, CM)을 가진 곡선에서 $r\gt 0\Rightarrow L(E,1)=0$ |
| Gross–Zagier (1986) | $L'(E,1)$ 이 [Heegner 점](heegner-points.md)의 정준 높이와 같다 |
| Kolyvagin (1988) | 해석적 순위 $\le1$ 이면 대수적 순위가 같고 $\text{Ш}$ 가 유한 |
| Skinner–Urban, Kato | [Iwasawa 주추측](iwasawa-main-conjecture.md)을 통해 순위 $0$ 에서 강한 BSD 공식의 $p$ 부분을 여러 $p$ 에서 |
| Bhargava–Skinner–Zhang | 높이로 정렬한 타원곡선의 $66\char37{}$ 이상에서 약한 BSD 성립 |

Gross–Zagier 정리는 $L$ 의 미분을 Heegner 점의 높이로 적고, Kolyvagin 은 그 점에서 [Euler 계](euler-systems.md)를 만들어 Selmer 군의 크기에 상계를 준다. 두 정리를 합치면 해석적 순위가 $0$ 또는 $1$ 인 곡선에서 약한 BSD 가 증명된다. 해석적 순위 $\ge2$ 에서는 어떤 곡선에 대해서도 대수적 순위가 같음이 증명되어 있지 않다.

## 순위 2 이상과 Heegner 점

Heegner 점의 구성은 $L'(E,1)$ 하나에 점 하나를 준다. 순위 $2$ 이상에서는 독립인 점이 둘 이상 있어야 하는데, 그런 점들을 $L$ 함수의 고계 미분에서 만드는 구성은 알려져 있지 않다[^1]. 그래서 Gross–Zagier–Kolyvagin 의 방법은 해석적 순위 $1$ 까지만 적용된다.

## p 진 판본과 Bloch–Kato 추측

- $p$ 진 BSD: $L$ 함수 대신 [p 진 L 함수](p-adic-l-function.md)를 쓰고 Selmer 군의 특성 아이디얼과 비교한다. Iwasawa 주추측이 그 기본 도구이고 고전 BSD 보다 증명된 부분이 많다.
- Bloch–Kato 추측(Bloch–Kato conjecture): 임의의 모티브(motive) $M$ 에 대해 $L(M,s)$ 의 소멸 차수와 선행계수를 Selmer 군과 행렬식으로 예측한다. BSD 는 $M=h^1(E)(1)$ 인 경우다.
- 수체 위의 BSD: $\text{Ш}$ 와 조절자의 정의가 그대로 확장된다.

# 활용

## Ш 의 위수 예측

순위 0 곡선에서는 강한 BSD 를 역으로 쓴다. $L(E,1)$ 을 수치로 계산하고 $\Omega_E,c_p,\char35{}E_{\mathrm{tors}}$ 를 구하면

$$
\char35{}\text{Ш}\ \stackrel?=\ \frac{L(E,1)\cdot\char35{}E(\mathbb Q)\_{\mathrm{tors}}^2}{\Omega_E\prod_pc_p}
$$

가 예측값을 준다. Cassels–Tate 쌍(Cassels–Tate pairing)이 이 값이 완전제곱수임을 보장하므로 공식의 정합성 검사가 된다. $\char35{}\text{Ш}=4,9,16,\dots$ 인 곡선들이 이렇게 발견되었고 하강으로 확인된 경우도 많다.

## 합동수 문제

$n$ 이 합동수(congruent number), 곧 넓이가 $n$ 인 유리수 변의 직각삼각형이 있는 수인 것은 $E_n:y^2=x^3-n^2x$ 의 순위가 양수인 것과 같다. Tunnell 은 $L(E_n,1)$ 의 소멸 여부를 무게 $3/2$ 형식의 계수로 판정하는 유한 조건을 얻었다.

$$
n\ \text{홀수 무제곱수}:\quad n\ \text{합동수}\ \Longrightarrow\ \char35{}\lbrace x^2+2y^2+8z^2=n\rbrace=2\thinspace\char35{}\lbrace x^2+2y^2+32z^2=n\rbrace
$$

조건이 성립하면 합동수라는 역방향은 순위 0 의 BSD 에 의존한다.

## 순위 계산 알고리즘

하강(descent)은 Selmer 군의 크기로 순위의 상한을 주고, 점 탐색은 하한을 준다. $\text{Ш}$ 가 유한하면 더 높은 하강에서 상한이 하한과 같아져 계산이 끝난다. 약한 BSD 를 가정하면 $L$ 함수의 수치 계산에서 나온 해석적 순위가 목표값이 된다. 순위를 계산했다고 말할 때 사실상 BSD 를 가정하는 경우가 많다.[^1]

[^1]: 원 논문은 B. Birch, H. P. F. Swinnerton-Dyer, *Notes on elliptic curves II*, J. reine angew. Math. **218** (1965). Gross–Zagier 는 *Heegner points and derivatives of L-series*, Invent. Math. **84** (1986). 개설은 Wiles 의 Clay 문제 해설과 Silverman, *The Arithmetic of Elliptic Curves*.

# 연관 문서

## 선수지식

- [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)
- [Dirichlet L 함수](dirichlet-l-functions.md)
- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md)

## 더 알아보기

- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)
- [Kolyvagin–Logachev 정리](kolyvagin-logachev.md)
- [p 진 L 함수](p-adic-l-function.md)

#number_theory #complex_analysis #theorem
