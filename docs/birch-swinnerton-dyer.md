# Birch–Swinnerton-Dyer 추측

# 개요

Birch–Swinnerton-Dyer(BSD) 추측은 [타원곡선](elliptic-curves.md) $E/\mathbb Q$ 의 $L$ 함수가 $s=1$ 에서 소멸하는 차수가 Mordell–Weil 군의 계수와 같다고 주장한다.

$$
\mathrm{ord}\_{s=1}L(E,s)\thickspace=\thickspace\mathrm{rank}\thinspace E(\mathbb Q)
$$

[Selmer 군](selmer-groups.md)을 통한 하강은 순위의 상한만 주고, 그 상한의 정확성이 $\text{Ш}$ 에 막힌다. Birch 와 Swinnerton-Dyer 는 1960 년대 초 EDSAC 으로 각 소수에서 환원한 점의 개수 $N_p=\char35{}E(\mathbb F_p)$ 를 모아

$$
\prod_{p\le X}\frac{N_p}{p}\ \sim\ C\thinspace(\log X)^{r}
$$

를 관측했다. 좌변은 [유한체](finite-fields.md) 위의 점 세기이고 우변의 $r$ 은 $E(\mathbb Q)$ 의 계수다. 이 곱을 정돈한 것이 [Dirichlet $L$ 함수](dirichlet-l-functions.md)와 같은 꼴의 $L(E,s)$ 이고, $\log X$ 의 거듭제곱이 $s=1$ 에서의 소멸 차수로 번역된다.

위 등식이 약한 BSD 이며 밀레니엄 문제의 하나다. 강한 형태는 선행계수까지 명시해 $\char35{}\text{Ш}$ 를 포함한 공식으로 쓴다.

# 직관

## 순위와 환원점의 개수

$P\in E(\mathbb Q)$ 가 무한위수 점이면 $P,2P,3P,\dots$ 가 모두 다르고, $\bmod\ p$ 환원이 $E(\mathbb F_p)$ 안에 많은 점을 만든다. $E(\mathbb F_p)$ 가 유한군이라 언젠가 겹치지만 겹치는 시점이 늦어질수록 $N_p$ 가 커지고, 순위가 클수록 그 압력이 세다.

이 발견법이 BSD 추측의 원래 동기였고, 그것을 정리로 바꾸는 논증은 나와 있지 않다[^1].

## Euler 곱과 해석적 연속

$a_p=p+1-N_p$ 로 두고 Euler 곱을 만든다.

$$
L(E,s)=\prod_{p\nmid N}\Big(1-\frac{a_p}{p^s}+\frac1{p^{2s-1}}\Big)^{-1}\prod_{p\mid N}\Big(1-\frac{a_p}{p^s}\Big)^{-1}
$$

Hasse 의 $|a_p|\le2\sqrt p$ 때문에 이 곱은 $\mathrm{Re}(s)\gt 3/2$ 에서만 수렴하고 $s=1$ 은 수렴 영역 밖이다. 해석적 연속을 준 것이 모듈러성 정리다. $E$ 가 무게 2 새형식 $f$ 에서 오므로 $L(E,s)=L(f,s)$ 이고, 후자는 $\mathbb C$ 전체로 연속되며 함수방정식

$$
\Lambda(s)=N^{s/2}(2\pi)^{-s}\Gamma(s)L(E,s),\qquad \Lambda(2-s)=w\thinspace\Lambda(s)
$$

를 갖는다. $s=1$ 이 함수방정식의 중심이다.

## 함수방정식의 부호와 패리티

$w=\pm1$ 이 함수방정식의 부호다. $w=-1$ 이면 $\Lambda(1)=-\Lambda(1)$ 이므로 $L(E,1)=0$ 이고 소멸 차수가 홀수이며, $w=+1$ 이면 짝수다. BSD 아래에서 순위의 홀짝이 국소 자료로 결정되고, 이 따름명제를 따로 떼어 낸 패리티 추측은 많은 경우에 증명되어 있다.

## 강한 형태의 인자

선행계수를 예측하려면 [격자](lattices.md)의 부피가 필요하다. $E(\mathbb Q)$ 의 생성원이 얼마나 성긴지를 재는 조절자와, 유리점이 아닌데 국소적으로는 점처럼 보이는 것들의 개수가 들어간다. 후자가 $\char35{}\text{Ш}$ 다.

# 정의

## 약한 BSD

$$
\mathrm{ord}\_{s=1}L(E,s)=r=\mathrm{rank}\thinspace E(\mathbb Q)
$$

좌변이 해석적 순위, 우변이 대수적 순위다.

## 강한 BSD

$$
\lim_{s\to1}\frac{L(E,s)}{(s-1)^r}
=\frac{\Omega_E\cdot\mathrm{Reg}\_E\cdot\char35{}\text{Ш}(E/\mathbb Q)\cdot\prod_pc_p}{\big(\char35{}E(\mathbb Q)\_{\mathrm{tors}}\big)^2}
$$

| 인자 | 뜻 |
|---|---|
| $\Omega_E$ | 실주기. $\int_{E(\mathbb R)}\vert\omega\vert$ |
| $\mathrm{Reg}\_E$ | 조절자. 생성원의 정준 높이 쌍 행렬식 |
| $\char35{}\text{Ш}$ | Tate–Shafarevich 군의 위수 (유한하다고 가정) |
| $c_p$ | Tamagawa 수. 나쁜 환원 자리의 국소 지수 |
| $E(\mathbb Q)\_{\mathrm{tors}}$ | 비틀림 부분군 |

$\text{Ш}$ 의 유한성이 증명되지 않았으므로 $\char35{}\text{Ш}$ 만 유효한 계산법이 없고, 나머지 양은 모두 유효하게 구해진다[^1].

## 정준 높이와 조절자

Néron–Tate 높이 $\hat h\colon E(\mathbb Q)\to\mathbb R_{\ge0}$ 는 $\hat h(mP)=m^2\hat h(P)$ 를 만족하는 이차형식이고, 쌍 $\langle P,Q\rangle=\tfrac12(\hat h(P+Q)-\hat h(P)-\hat h(Q))$ 가 자유 부분에서 양정치다. 생성원 $P_1,\dots,P_r$ 에 대해

$$
\mathrm{Reg}\_E=\det\big(\langle P_i,P_j\rangle\big)
$$

가 격자의 공부피다. 순위가 $0$ 이면 빈 행렬식이라 $\mathrm{Reg}\_E=1$ 이다.

# 성질

## 알려진 경우

| 결과 | 내용 |
|---|---|
| Coates–Wiles (1977) | [복소 곱셈](complex-multiplication.md)(complex multiplication, CM)을 가진 곡선에서 $r\gt 0\Rightarrow L(E,1)=0$ |
| Gross–Zagier (1986) | $L'(E,1)$ 이 Heegner 점의 정준 높이와 같다 |
| Kolyvagin (1988) | 해석적 순위 $\le1$ 이면 대수적 순위가 같고 $\text{Ш}$ 가 유한 |
| Skinner–Urban, Kato | Iwasawa 주추측을 통해 순위 $0$ 의 강한 BSD 를 여러 경우에 |
| Bhargava–Skinner–Zhang | 도체로 정렬한 타원곡선의 양의 비율(> 66%)에서 BSD 성립 |

Gross–Zagier 가 $L$ 의 미분을 기하적 점의 높이로 바꾸고 Kolyvagin 이 그 점에서 Euler 계를 만들어 Selmer 군을 누른다. 두 정리가 맞물려 해석적 순위가 0 또는 1 인 경우가 해결된다. 해석적 순위 $\ge2$ 에서는 어떤 곡선에 대해서도 대수적 순위가 같음이 증명되어 있지 않다.

## 순위 2 이상과 Heegner 점

Heegner 점은 하나뿐이다. $L'(E,1)$ 하나에 점 하나가 대응하므로 순위 1 까지는 점을 공급할 수 있지만, 순위 2 이상에서 필요한 독립적 점들을 만드는 구성이 없다. Gross–Zagier–Kolyvagin 의 방법은 여기서 멈춘다.

## 일반화

- **$p$ 진 BSD.** $L$ 함수 대신 $p$ 진 $L$ 함수를 쓰고 Selmer 군의 특성 아이디얼과 비교한다. Iwasawa 주추측이 그 기본 도구이고 고전 BSD 보다 증명된 부분이 많다.
- **Bloch–Kato 추측.** 임의의 모티브 $M$ 에 대해 $L(M,s)$ 의 소멸 차수와 선행계수를 Selmer 군과 행렬식으로 예측한다. BSD 는 $M=h^1(E)(1)$ 인 경우다.
- **수체 위의 BSD.** $\text{Ш}$ 와 조절자의 정의가 그대로 확장된다.

# 활용

## $\text{Ш}$ 의 위수 예측

순위 0 곡선에서는 강한 BSD 를 역으로 쓴다. $L(E,1)$ 을 수치로 계산하고 $\Omega_E,c_p,\char35{}E_{\mathrm{tors}}$ 를 구하면

$$
\char35{}\text{Ш}\ \stackrel?=\ \frac{L(E,1)\cdot\char35{}E(\mathbb Q)\_{\mathrm{tors}}^2}{\Omega_E\prod_pc_p}
$$

가 예측값을 준다. [Cassels–Tate 쌍](selmer-groups.md)이 이 값이 완전제곱수임을 보장하므로 공식의 정합성 검사가 된다. $\char35{}\text{Ш}=4,9,16,\dots$ 인 곡선들이 이렇게 발견되었고 하강으로 확인된 경우도 많다.

## 합동수 문제

$n$ 이 합동수인 것은 $E_n:y^2=x^3-n^2x$ 의 순위가 양수인 것과 같다. Tunnell 은 $L(E_n,1)$ 의 소멸 여부를 무게 $3/2$ 형식의 계수로 판정하는 유한 조건을 얻었다.

$$
n\ \text{홀수 무제곱수}:\quad n\ \text{합동수}\ \Longrightarrow\ \char35{}\lbrace x^2+2y^2+8z^2=n\rbrace=2\thinspace\char35{}\lbrace x^2+2y^2+32z^2=n\rbrace
$$

조건이 성립하면 합동수라는 역방향은 순위 0 의 BSD 에 의존한다.

## 순위 계산 알고리즘

BSD 가 참이면 순위 계산이 유한 시간에 끝난다. $L$ 함수 쪽에서 순위의 상한을 수치로 얻고 하강에서 하한을 얻어 양쪽이 만나기를 기다리며, $\text{Ш}$ 의 유한성이 종료를 보장한다. 순위를 계산했다고 말할 때 사실상 BSD 를 가정하는 경우가 많다.[^1]

[^1]: 원 논문은 B. Birch, H. P. F. Swinnerton-Dyer, *Notes on elliptic curves II*, J. reine angew. Math. **218** (1965). Gross–Zagier 는 *Heegner points and derivatives of L-series*, Invent. Math. **84** (1986). 개설은 Wiles 의 Clay 문제 해설과 Silverman, *The Arithmetic of Elliptic Curves*.

# 연관 문서

## 선수지식

- [Selmer 군과 Tate–Shafarevich 군](selmer-groups.md)
- [Dirichlet L 함수](dirichlet-l-functions.md)
- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md)

## 더 알아보기

- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)
- [Kolyvagin–Logachev 정리와 겨냥 몫](kolyvagin-logachev.md)

#number_theory #complex_analysis #theorem
