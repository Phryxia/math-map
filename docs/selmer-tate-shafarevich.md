# Selmer 군과 Tate–Shafarevich 군

# 개요

**Selmer 군(Selmer group)** 과 **Tate–Shafarevich 군(Tate–Shafarevich group)** 은 [타원곡선](elliptic-curves.md)의 유리점을 셀 때, 각 소수와 [실수](real-numbers.md)에서는 해가 있는데 유리수에서는 해가 없는 곡선들을 다루는 군이다. Selmer 는 1951 년에 $3x^3+4y^3+5z^3=0$ 이 실수에서도 모든 [p 진수](p-adic-numbers.md) 체에서도 $0$ 아닌 해를 갖지만 유리수 해는 갖지 않음을 보였다. 타원곡선의 유리점이 몇 개의 생성원으로 만들어지는지 셀 때, 국소 조건만 보는 계산은 이런 곡선 때문에 실제보다 큰 답을 낸다. 국소 조건으로 걸러낸 계산 가능한 유한군이 Selmer 군이고, 그 답이 실제보다 큰 정도를 재는 군이 Tate–Shafarevich 군이다.

# 직관

수체 $K$ 위의 타원곡선 $E$ 에 대해 [Mordell–Weil 정리](canonical-height.md)는 유리점의 군이 다음 꼴이라고 준다.

$$
E(K)\thickspace\cong\thickspace\mathbb Z^r\oplus E(K)\_{\mathrm{tors}}
$$

유한 부분 $E(K)\_{\mathrm{tors}}$ 는 계산하기 쉽지만 $r$ 은 그렇지 않다. $E(K)/2E(K)$ 의 위수가 $2^r\cdot\char35{}E(K)\lbrack 2\rbrack$ 이므로, $E(K)/2E(K)$ 를 구하면 $r$ 이 나온다.

점 $P$ 가 $2E(K)$ 에 드는지는 $2Q=P$ 인 $Q$ 가 $K$ 위에 있는지와 같다. $\bar K$ 위에서 그런 $Q$ 는 네 개이고, 하나를 $Q_0$ 라 하면 나머지는 두 번 더해 무한원점이 되는 점 $T$ 에 대한 $Q_0+T$ 다. Galois 군의 원소 $\sigma$ 가 $Q_0$ 를 $Q_0+c_\sigma$ 로 보내므로, $P$ 마다 $\sigma\mapsto c_\sigma$ 라는 자료가 하나 정해진다. 이 자료가 자명한 것과 $P\in 2E(K)$ 가 동치이고, 그래서 $E(K)/2E(K)$ 는 [Galois 코호몰로지](galois-cohomology.md)의 군 $H^1(K,E\lbrack 2\rbrack)$ 안에 들어간다.

$H^1(K,E\lbrack 2\rbrack)$ 는 무한군이어서 이것만으로는 $E(K)/2E(K)$ 가 정해지지 않는다. 유리점에서 온 류는 $\mathbb R$ 과 모든 [p 진수](p-adic-numbers.md) 체 $\mathbb Q_p$ 위의 점에서도 오므로, 이 국소 조건을 통과하지 못하는 류를 버린다. 국소 조건은 유한 개의 합동식으로 검사되고, 남은 류는 유한 개다. 이 남은 류의 군이 Selmer 군이다.

국소 조건을 통과한 류가 모두 유리점에서 오지는 않는다. 그런 류마다 $2y^2=x^4-17$ 같은 곡선이 하나 대응하는데, 이 곡선은 $\mathbb R$ 과 모든 $\mathbb Q_p$ 에서 점을 갖지만 $\mathbb Q$ 점은 없다. 이런 곡선의 류가 이루는 군이 Tate–Shafarevich 군이고, Selmer 군의 위수를 이 군의 $2$ 등분 부분의 위수로 나누어야 $E(K)/2E(K)$ 의 위수가 나온다.

# 정의

## Weil–Châtelet 군

$E/K$ 의 **주동차공간(principal homogeneous space)** 은 $E$ 의 단순추이적 작용 $E\times C\to C$ 를 갖춘 매끄러운 사영 곡선 $C/K$ 다. $K$ 동형에 의한 동치류 전체를

$$
\mathrm{WC}(E/K)\thickspace\cong\thickspace H^1(K,E(\bar K))
$$

라 쓰고 **Weil–Châtelet 군(Weil–Châtelet group)** 이라 한다. 류가 자명한 것과 $C(K)\ne\emptyset$ 인 것이 동치다. 직관 절의 $C:2y^2=x^4-17$ 은 종수 $1$ 이고 그 [Jacobi 다양체](jacobian-variety.md) $E$ 의 주동차공간이며, $C(\mathbb Q)=\emptyset$ 이므로 $\mathrm{WC}(E/\mathbb Q)$ 의 자명하지 않은 원소다.

## Kummer 열

$m\ge2$ 에 대해 완전열 $0\to E[m]\to E(\bar K)\xrightarrow{m}E(\bar K)\to0$ 에 Galois 코호몰로지를 씌우면

$$
0\longrightarrow E(K)/mE(K)\xrightarrow{\ \delta\ }H^1(K,E[m])\longrightarrow H^1(K,E)[m]\longrightarrow0
$$

이 된다. 이것을 **Kummer 열(Kummer sequence)** 이라 하고, [Kummer 이론](kummer-theory.md)의 $K^\times/(K^\times)^m\hookrightarrow H^1(K,\mu_m)$ 을 타원곡선으로 옮긴 것이다. $m=2$ 이면 $\delta$ 는 직관 절에서 $P$ 에 자료 $\sigma\mapsto c_\sigma$ 의 류를 주는 사상이다. 같은 열을 각 완비화 $K_v$ 에 대해서도 쓰고 $\delta_v$ 로 적는다.

## Selmer 군과 Ш

$$
\mathrm{Sel}^m(E/K)=\ker\Big(H^1(K,E[m])\to\prod_v\frac{H^1(K_v,E[m])}{\mathrm{im}\thinspace\delta_v}\Big),\qquad
\text{Ш}(E/K)=\ker\Big(H^1(K,E)\to\prod_vH^1(K_v,E)\Big)
$$

왼쪽이 **Selmer 군($m$-Selmer group)**, 오른쪽이 **Tate–Shafarevich 군** 이다. $\text{Ш}(E/K)$ 는 모든 자리에서 국소점을 갖는 주동차공간의 류, 곧 [Hasse 원리](hasse-principle.md)의 반례의 군이다. 두 정의를 Kummer 열과 함께 놓으면 기본 완전열이 나온다.

$$
0\longrightarrow E(K)/mE(K)\longrightarrow\mathrm{Sel}^m(E/K)\longrightarrow \text{Ш}(E/K)[m]\longrightarrow0
$$

$E:y^2=x^3-x$ 와 $m=2$ 이면 $E(\mathbb Q)=E(\mathbb Q)\lbrack 2\rbrack$ 는 위수 $4$ 이고, 2 하강의 계산으로 $\mathrm{Sel}^2(E/\mathbb Q)$ 도 위수 $4$ 다. 그래서 $r=0$ 이고 $\text{Ш}(E/\mathbb Q)\lbrack 2\rbrack=0$ 이다.

# 성질

## Selmer 군의 유한성

$\mathrm{Sel}^m(E/K)$ 는 항상 유한하다. $S$ 를 나쁜 환원 자리, $m$ 을 나누는 자리, 무한 자리의 합집합이라 하면 Selmer 군의 원소는 $S$ 밖에서 비분기다. 차수가 유계이고 $S$ 밖에서 비분기인 확대가 유한 개뿐이라는 Hermite–Minkowski 정리(Hermite–Minkowski theorem)로 유한성이 나온다. 약한 Mordell–Weil 정리(weak Mordell–Weil theorem), 곧 $E(K)/mE(K)$ 의 유한성이 여기서 따라 나온다.

$\text{Ш}(E/K)$ 가 유한하다는 진술은 Tate–Shafarevich 추측(Tate–Shafarevich conjecture)이고 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)(Birch–Swinnerton-Dyer conjecture, BSD)의 일부다[^2]. 증명된 경우는 다음과 같다.

| 결과 | 조건 |
|---|---|
| Rubin (1987) | 복소곱셈(complex multiplication, CM)을 갖는 타원곡선, 해석적 순위 $0$ |
| Kolyvagin (1988) | [모듈러 곡선](modular-curves.md)에서 오는 타원곡선, 해석적 순위 $\le1$ |
| Kato, Skinner–Urban | [Iwasawa 주추측](iwasawa-main-conjecture.md) 경유, 순위 $0$ 의 여러 경우 |

## 순위의 상한

$E(K)\_{\mathrm{tors}}$ 를 알고 $\mathrm{Sel}^m$ 을 계산하면

$$
r\thickspace\le\thickspace\log_m\char35{}\mathrm{Sel}^m(E/K)-\log_m\char35{}E(K)[m]
$$

를 얻는다. 등호는 $\text{Ш}[m]=0$ 일 때 성립한다. 하한은 실제 점을 찾아 얻으며, 상한과 하한이 만나면 순위가 확정된다.

## Cassels–Tate 쌍

$\text{Ш}$ 에는 교대 쌍

$$
\langle\ ,\ \rangle\colon \text{Ш}(E/K)\times \text{Ш}(E/K)\longrightarrow\mathbb Q/\mathbb Z
$$

가 있고, 나눌 수 있는 부분을 나눈 몫 위에서 비퇴화다. 정의에는 [Brauer 군](brauer-groups.md)의 국소 불변량의 합 $\sum_v\mathrm{inv}\_v$ 를 쓴다. 교대 쌍이 비퇴화이므로 $\text{Ш}$ 가 유한하면 위수가 완전제곱수다.

## 2 하강

$E:y^2=x(x-e_1)(x-e_2)$ 처럼 $E\lbrack 2\rbrack\subset E(K)$ 이면 $E\lbrack 2\rbrack\cong(\mathbb Z/2)^2$ 위의 Galois 작용이 자명하므로 다음이 성립한다.

$$
H^1(K,E\lbrack 2\rbrack)\cong\big(K^\times/(K^\times)^2\big)^2
$$

이 동형으로 $\delta$ 는 $P=(x,y)$ 를 $(x-e_1,\thinspace x-e_2)$ 의 제곱류로 보낸다. $x=e_1$ 이나 $x=e_2$ 인 점에서는 두 성분의 곱이 $y^2$ 의 제곱류와 같다는 조건으로 빈 성분을 정한다. Selmer 군의 원소는 $S$ 밖에서 비분기이므로 다음 유한군의 쌍 $(d_1,d_2)$ 에 놓인다.

$$
K(S,2)=\lbrace d\in K^\times/(K^\times)^2:\ v(d)\equiv0\ (2)\ \forall v\notin S\rbrace
$$

쌍 $(d_1,d_2)$ 마다 곡선 $d_1z_1^2-d_2z_2^2=e_2-e_1$, $d_1z_1^2-d_1d_2z_3^2=-e_1$ 이 대응한다. 이 곡선이 모든 $K_v$ 에서 점을 가지면 $(d_1,d_2)$ 는 Selmer 군에 들고, $K$ 점까지 가지면 $E(K)/2E(K)$ 에서 온다. 국소 조건은 유한 검사이지만 $K$ 점의 탐색은 언제 멈출지 정해져 있지 않고, 그 차이가 $\text{Ш}\lbrack 2\rbrack$ 다.

$y^2=x^3-x$ 에서는 $e_1=1$, $e_2=-1$, $S=\lbrace 2,\infty\rbrace$ 이고 $K(S,2)=\lbrace\pm1,\pm2\rbrace$ 다. 무한원점, $(0,0)$, $(1,0)$, $(-1,0)$ 의 상은 $(1,1)$, $(-1,1)$, $(2,2)$, $(-2,2)$ 다.

## Lind–Reichardt 곡선

$$
C\colon\quad 2y^2=x^4-17
$$

는 종수 1 이고 그 Jacobi 다양체 $E$ 의 주동차공간이다. $C$ 는 모든 $\mathbb Q_p$ 와 $\mathbb R$ 에서 점을 갖지만 $\mathbb Q$ 점이 없다. 따라서 $[C]$ 는 $\text{Ш}(E/\mathbb Q)[2]$ 의 비자명 원소이며, 유리수 위에서 Hasse 원리가 깨지는 고전적인 예다[^1].

Selmer 의 삼차곡선 $3x^3+4y^3+5z^3=0$ 도 같은 유형의 예다.

## Ш 의 검출 난점

$\text{Ш}$ 의 원소인 곡선에 유리점이 없음을 증명하는 일은 일반적으로 어렵다. 국소 조건은 모두 통과하므로 합동만으로는 결론이 나지 않고, 4차 잉여 상호법칙(quartic reciprocity), 상위 하강(higher descent), Brauer–Manin 장애(Brauer–Manin obstruction) 같은 다른 논법이 필요하다. $\text{Ш}$ 가 유한하면 하강을 충분히 높은 차수까지 반복해 결론에 이르지만, 유한성이 증명되지 않았으므로 순위 계산 알고리즘의 종료가 보장되지 않는다[^2].

# 활용

## 국소 가해성 판정

$C$ 를 원시 정수해로 동차화하면 $2Y^2=X^4-17Z^4$ , $\gcd(X,Z)=1$ 이다. 홀수 소수에서는 $\bmod\thinspace p$ 의 비특이 해 하나면 [Hensel 보조정리](hensel-lemma.md)가 $\mathbb Z_p$ 해로 올려 준다.

$p=2$ 는 따로 본다. $X=11,\ Z=1$ 에서

$$
11^4-17=14624=2\cdot16\cdot457,\qquad Y^2=16\cdot457
$$

이고 $457\equiv1\pmod8$ 이므로 $457$ 은 $\mathbb Z_2^\times$ 에서 제곱이다. $\mathbb R$ 점은 $x\gt 17^{1/4}\approx2.03$ 에서 있다. 그러므로 $C$ 는 어디서나 국소적으로 풀린다. 대역 점이 없다는 증명은 $\mathbb Q(\sqrt{17})$ 로 올라가 4차 잉여 상호법칙을 쓴다.

## 합동수 문제

$n$ 이 합동수라 함은 변이 유리수이고 넓이가 $n$ 인 직각삼각형이 있다는 뜻이며, 이는

$$
E_n\colon\ y^2=x^3-n^2x
$$

의 순위가 양수인 것과 동치다. $E_n[2]\subset E_n(\mathbb Q)$ 이므로 완전 2 하강이 바로 적용된다. Fermat 이 $n=1$ 이 합동수가 아님을 보인 무한하강이 이 하강의 원형이다.

Tunnell 은 $E_n$ 의 L 함수의 중심값 $L(E_n,1)$ 을 무게 $3/2$ 인 [모듈러 형식](modular-forms.md)의 Fourier 계수로 표현해, 세 변수 [이차형식](quadratic-forms.md)의 해의 개수를 비교하는 정수 조건을 얻었다. $n$ 이 합동수이면 이 조건이 성립한다. 조건이 성립하면 합동수라는 역방향은 "$L(E_n,1)=0$ 이면 순위가 양수다" 라는 BSD 추측의 일부를 가정한다.

## BSD 추측

$$
\lim_{s\to1}\frac{L(E,s)}{(s-1)^r}=\frac{\Omega_E\cdot\mathrm{Reg}\_E\cdot\char35{}\text{Ш}(E/\mathbb Q)\cdot\prod_pc_p}{\char35{}E(\mathbb Q)\_{\mathrm{tors}}^2}
$$

정밀 BSD 공식의 분자에 $\char35{}\text{Ш}$ 가 등장하므로 유한성은 추측의 전제이자 일부다. 순위 0 인 곡선에서 $L(E,1)\ne0$ 을 계산하고 공식을 쓰면 $\char35{}\text{Ш}$ 의 예측값이 나오고, 그 값을 하강으로 확인하는 것이 수치 실험의 표준 절차다.

## Euler 계와 Kolyvagin

Kolyvagin 의 방법은 Selmer 군의 위수에 상계를 준다. 모듈러 곡선 위의 [Heegner 점](heegner-points.md)들이 허수이차체의 환체(ring class field) 탑을 따라 정합적인 족을 이루고, 이 족이 [Euler 계](euler-systems.md)가 되어 Selmer 군의 원소마다 국소 조건을 하나씩 더 준다. 결론은 해석적 순위가 $\le1$ 이면 대수적 순위가 그와 같고 $\text{Ш}$ 가 유한하다는 것이다.

Kato 의 Euler 계는 모듈러 단위에서 오고, Iwasawa 주추측을 통해 [p 진 L 함수](p-adic-l-function.md)와 Selmer 군의 특성 아이디얼을 잇는다.

[^1]: D. Lind (1940) 과 H. Reichardt (1942) 가 독립적으로 든 예다. Cassels 의 *Lectures on Elliptic Curves* 와 Silverman 의 *The Arithmetic of Elliptic Curves* X 장에 하강과 $\text{Ш}$ 의 표준적 서술이 있다.
[^2]: A. Wiles, *The Birch and Swinnerton-Dyer Conjecture*, Clay Mathematics Institute 공식 문제 설명. $\text{Ш}$ 의 유한성이 BSD 추측의 일부로 남아 있음을 밝힌다. https://www.claymath.org/wp-content/uploads/2022/06/birchswin.pdf

# 연관 문서

## 선수지식

- [타원곡선](elliptic-curves.md)
- [Galois 코호몰로지](galois-cohomology.md)
- [Brauer 군](brauer-groups.md)

## 더 알아보기

- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)
- [Poitou–Tate 완전열](poitou-tate.md)
- [Chabauty–Kim 방법](chabauty-kim.md)
- [Mordell–Weil 시브](mordell-weil-sieve.md)

#number_theory #group_theory #theorem
