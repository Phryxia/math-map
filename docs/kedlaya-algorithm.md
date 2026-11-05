# Kedlaya 알고리즘

# 개요

**Kedlaya 알고리즘(Kedlaya's algorithm)** 은 [유한체](finite-fields.md) 위 [초타원곡선](hyperelliptic-curves.md) $y^2=f(x)$ 의 해의 개수를 원소를 하나씩 대입하지 않고 계산하는 알고리즘이다. 원소가 $3^{100}$ 개인 체에서 해를 세려면 $x$ 에 $3^{100}$ 개의 값을 넣어야 하므로 직접 셀 수 없다. 해의 개수는 정수 계수 다항식 하나로 정해지고, 그 계수의 크기에는 상계가 있다. 알고리즘은 $3$ 진 수의 근사 계산으로 이 계수를 상계의 두 배보다 정밀하게 구해, 정수인 계수를 정확히 확정한다.

# 직관

$\mathbb F_5$ 위의 곡선 $E\colon y^2=x^3+x+1$ 의 점을 센다. $x=0,1,2,3,4$ 에서 $x^3+x+1$ 은 $1,3,1,1,4$ 이고, $3$ 만 $\mathbb F_5$ 의 제곱수가 아니다. 그래서 $x$ 마다 $y$ 가 둘씩 네 번 나오고 무한원점을 더해 점은 $9$ 개다. 점의 개수를 $p+1-a_p$ 로 쓰면 $a_5=-3$ 이다. 이 방법은 $x$ 를 $p$ 번 대입하므로 $p$ 가 크면 쓸 수 없다.

대입 없이 $a_p$ 를 구하는 첫 수는 $\mathbb F_p$ 의 원소 $u\ne0$ 이 제곱수인지를 $u^{(p-1)/2}=\pm1$ 로 판정하는 것이다. 그러면 $a_p\equiv-\sum_x f(x)^{(p-1)/2}\pmod p$ 이다. $f^{(p-1)/2}$ 를 전개하면 $\sum_xx^k$ 는 $k\gt 0$ 이고 $(p-1)\mid k$ 일 때만 $-1$ 이고 그 밖에는 $0$ 이므로, $x^{p-1}$ 의 계수 하나만 남는다.

$$
a_p\equiv\big\lbrack\thinspace x^{p-1}\thinspace\big\rbrack\thinspace f(x)^{(p-1)/2}\pmod p
$$

$p=5$ 이면 $(x^3+x+1)^2=x^6+2x^4+2x^3+x^2+2x+1$ 의 $x^4$ 계수가 $2$ 이므로 $a_5\equiv2\pmod5$ 이고, 실제로 $-3\equiv2$ 다.

이것으로 정해지는 것은 $a_p\bmod p$ 뿐이다. Hasse 의 정리로 $\vert a_p\vert\le2\sqrt p$ 이지만, $p=5$ 에서는 $\lbrack-4.47,4.47\rbrack$ 안에 $5$ 로 나눈 나머지가 $2$ 인 정수가 $-3$ 과 $2$ 둘이다. $a_p$ 를 $25$ 를 법으로 알면 둘 가운데 하나로 정해진다. Kedlaya 알고리즘은 Frobenius 사상의 작용을 $p$ 진 코호몰로지에서 $p^N$ 을 법으로 계산해, 이 정밀도를 필요한 만큼 올린다.

# 정의

## zeta 함수와 점 세기 문제

$C$ 를 $q=p^n$ 인 $\mathbb F_q$ 위의 종수 $g$ 의 매끄러운 사영곡선이라 하자. $C$ 의 zeta 함수는 다음 꼴이다([Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)).

$$
Z(C,T)=\frac{P(T)}{(1-T)(1-qT)},\qquad
P(T)=\prod_{j=1}^{2g}(1-\alpha_jT)\in\mathbb Z\lbrack T\rbrack,\quad\vert\alpha_j\vert=\sqrt q
$$

$P(T)$ 를 계산하는 것을 **점 세기 문제(point counting problem)** 라 한다. $\char35{}C(\mathbb F_{q^k})=q^k+1-\sum_j\alpha_j^k$ 이므로 $P(T)$ 에서 모든 확대체 위의 점 개수가 나온다. 직관 절의 곡선은 $g=1$ 이고 $P(T)=1-a_5T+5T^2=1+3T+5T^2$ 이다.

## Hasse 불변량

$p$ 가 홀소수이고 $E\colon y^2=f(x)$ 가 $\mathbb F_p$ 위의 타원곡선일 때, $f(x)^{(p-1)/2}$ 의 $x^{p-1}$ 계수를 $E$ 의 **Hasse 불변량(Hasse invariant)** 이라 한다. 직관 절의 곡선에서 Hasse 불변량은 $2$ 다. Hasse 불변량이 $0$ 이면 $E$ 를 **초특이(supersingular)** 라 하고, 아니면 보통(ordinary)이라 한다.

## 약수렴 대수와 Monsky–Washnitzer 코호몰로지

$\mathbb Z_q$ 를 $\mathbb F_q$ 의 [Witt 벡터](witt-vectors.md)의 환이라 하자. $\mathbb F_q$ 대수 $\bar A$ 를 $\mathbb Z_q$ 위로 올린 대수 $A=\mathbb Z_q\lbrack x_1,\dots,x_m\rbrack/I$ 에 대해, **약수렴 대수(weakly complete algebra)** $A^\dagger$ 는 계수가 지수적으로 빨리 $0$ 으로 가는 [멱급수](power-series.md), 곧 어떤 반경 $\rho\gt 1$ 의 원판에서 수렴하는 급수들의 대수다. $A=\mathbb Z_p\lbrack x\rbrack$ 이면 $\sum_ip^ix^i$ 는 반경 $p$ 에서 수렴하므로 $A^\dagger$ 에 속하고, $\sum_ip^ix^{p^i}$ 는 수렴반경이 정확히 $1$ 이므로 속하지 않는다.

$A^\dagger\otimes\mathbb Q$ 의 [de Rham 코호몰로지](de-rham-cohomology.md)를 $\bar A$ 의 **Monsky–Washnitzer 코호몰로지(Monsky–Washnitzer cohomology)** 라 한다. $f$ 가 중근이 없는 $2g+1$ 차 다항식이고 $\bar A$ 가 $y^2=f(x)$ 에서 $y=0$ 인 점을 뺀 아핀 곡선의 좌표환이면, $H^1$ 의 $y\mapsto-y$ 에 대한 음의 부분은 $x^i\thinspace dx/y$ ($0\le i\lt 2g$) 를 기저로 갖는다.

## Kedlaya 알고리즘

$p\ne2$ 이고 $C\colon y^2=f(x)$, $\deg f=2g+1$ 이며 $f$ 에 중근이 없다고 하자. Kedlaya 알고리즘은 다음 다섯 단계다[^1].

1. 목표 정밀도 $N$ 을 정한다. Weil 한계에서 오는 계수 상계의 두 배를 $p^N$ 이 넘도록 잡는다.
2. $H^1$ 의 기저 $x^i\thinspace dx/y$ ($0\le i\lt 2g$) 를 고정한다.
3. Frobenius 의 올림 $\sigma(x)=x^p$, $\sigma(y)=y^p(1+\delta)^{1/2}$ 를 $p^N$ 정밀도로 전개한다.
4. 각 기저원소의 상 $\sigma(x^i\thinspace dx/y)$ 를 환원 공식으로 기저의 일차결합으로 나타내 [행렬](matrices.md) $M$ 을 얻는다.
5. $\det(1-TM)$ 의 계수를 정수로 복원한다. 그 결과가 $P(T)$ 다.

3 단계의 $\delta$ 는 $\sigma(y)^2=f^\sigma(x^p)$ 에서 나온다. 이 식을 $y^{2p}$ 로 묶으면 다음과 같다.

$$
\sigma(y)=y^p\Big(1+\underbrace{\frac{f^\sigma(x^p)-f(x)^p}{y^{2p}}}\_{=\thinspace\delta}\Big)^{1/2}
=y^p\sum_{k\ge0}\binom{1/2}{k}\delta^k
$$

$\delta$ 의 분자가 $p$ 로 나누어지므로 급수가 $p$ 진으로 수렴하고, 정밀도 $p^N$ 에서는 $k$ 를 $O(N)$ 에서 잘라 유한 합으로 만든다. 4 단계에서 $\sigma(x^i\thinspace dx/y)$ 는 기저가 아닌 $x^k\thinspace dx/y^m$ 꼴의 항을 낸다. 이 항을 기저로 나타내는 환원(reduction)은 $d(x^ay^b)$ 가 코호몰로지에서 $0$ 이라는 관계식을 반복 적용하는 선형대수다.

# 성질

## 복원 원리

$m\in\mathbb Z$, $\vert m\vert\le M$ 이고 $p^N\gt 2M$ 이면 $m\bmod p^N$ 에서 $m$ 이 유일하게 정해진다. $P(T)=\sum_ic_iT^i$ 에서 $\vert c_i\vert\le\binom{2g}{i}q^{i/2}$ 이므로 필요한 정밀도는 다음과 같다.

$$
N\gt\log_p\Big(2\binom{2g}{g}q^{g/2}\Big)\approx\frac{gn}{2}+O(g)
$$

$P$ 는 함수방정식으로 $c_{2g-i}=q^{g-i}c_i$ 를 만족하므로 $c_0,\dots,c_g$ 만 구하면 된다. 정밀도가 $n$ 과 $g$ 에 대해 일차이므로 전체 비용이 다항식으로 유지된다.

## 정밀도 p¹ 의 한계

정밀도 $p^1$ 만 쓰면 $a_p\bmod p$ 만 얻는다. 종수 $1$ 의 소수체에서는 $4\sqrt p\lt p$, 곧 $p\gt16$ 이면 후보가 하나뿐이어서 이것으로 충분하다. $p\le 13$ 이면 직관 절의 $p=5$ 처럼 후보가 둘 이상 남을 수 있다. $\mathbb F_{p^n}$ 에서는 $\vert a\vert\le2\sqrt{p^n}$ 이어서 약 $n/2$ 자리의 정밀도가 필요하고, 종수가 커지면 계수 $g$ 개가 각각 정밀도를 요구한다. Hasse 불변량의 계산은 Kedlaya 알고리즘에서 $N=1$, $g=1$, $n=1$ 인 경우다.

## Monsky–Washnitzer 코호몰로지의 성질

- 유한차원이다.
- $\bar A$ 만으로 정해지고, 올림 $A$ 의 선택에 의존하지 않는다.
- Frobenius 가 작용하고, 그 대각합으로 점 개수가 나온다([Lefschetz 고정점 정리](lefschetz-fixed-point.md)의 $p$ 진 판본).

$$
\char35{}C(\mathbb F_{q^k})=\sum_{i}(-1)^i\thinspace\mathrm{tr}\big(\mathrm{Frob}^k\mid H^i_{\mathrm{MW}}\big)
$$

유한차원성은 수렴반경이 $1$ 보다 크다는 조건에서 나온다. $p$ 진 완비화를 그대로 쓰면 수렴반경이 정확히 $1$ 인 급수까지 들어와 코호몰로지가 무한차원이 된다. Berthelot 의 강성 코호몰로지(rigid cohomology)가 이 이론을 특이점이 있거나 고유하지 않은 다양체로 확장한다.

## Dwork 의 방법과의 관계

[Dwork 의 유리성 정리와 지수합](dwork-rationality.md)은 zeta 함수가 유리함수임을 $p$ 진 해석학으로 증명했다. 그 증명은 완전연속 작용소의 [Fredholm 행렬식](fredholm-determinant.md)으로 zeta 함수를 나타내므로 구성적이지만, 급수의 수렴이 느려 계산에 쓰기 어려웠다. Dwork 의 분해함수 $\theta(x)=\exp(\pi(x-x^p))$ 의 수렴반경 $p^{(p-1)/p^2}\gt 1$ 이 작용소를 완전연속으로 만드는 조건이고, Monsky–Washnitzer 는 1 보다 큰 수렴반경을 대수의 정의에 넣었다.

## 다른 점 세기 알고리즘과의 비교

$\mathbb F_{p^n}$ 위의 종수 $g$ 곡선에서 Kedlaya 알고리즘의 비용은 대략 $\tilde O(p\thinspace n^3g^4)$ 이다. $p$ 에 대해 일차이므로 $p$ 가 작고 $n$ 이 큰 경우에 쓴다.

| 알고리즘 | 비용 | 쓰는 경우 |
|---|---|---|
| 직접 대입 | $O(q)$ | 작은 $q$ |
| Shanks–Mestre ([Baby-step giant-step 알고리즘](baby-step-giant-step.md)) | $\tilde O(q^{1/4})$ | 중간 크기, 종수 1 |
| [Schoof–Elkies–Atkin 알고리즘](sea-algorithm.md) | $\log q$ 의 다항식 | 종수 1, 큰 $p$ |
| Kedlaya | $\tilde O(p\thinspace n^3g^4)$ | 임의 종수, 작은 $p$, 큰 $n$ |
| Lauder–Wan | $p$ 의 다항식 | 일반 다양체 |
| Harvey | $\tilde O(p^{1/2})$ | 중간 크기 $p$ |

$p=2$ 에서는 Kedlaya 의 가정 $p\ne2$ 가 성립하지 않아 Mestre 의 AGM(arithmetic-geometric mean) 방법이나 Satoh 의 정준 올림(canonical lift) 방법을 쓴다.

## 초특이성과 Newton 다각형

종수 $1$ 에서 Hasse 불변량이 $0$ 이면 $a_p\equiv0\pmod p$ 이고, $P(T)=1-a_pT+pT^2$ 의 [Newton 다각형](newton-polygon.md)은 기울기 $\frac12,\frac12$ 인 한 변이다. 직관 절의 곡선은 $a_5=-3$ 이므로 $p=5$ 에서 보통이다. Elkies 는 $\mathbb Q$ 위의 모든 타원곡선이 무한히 많은 소수에서 초특이임을 증명했다.

일반 종수에서는 Frobenius 행렬 $M$ 의 특성다항식의 Newton 다각형이 곡선의 Newton 다각형이다. Kedlaya 알고리즘은 $P(T)$ 전체를 주므로 이 다각형도 계산한다.

# 활용

- 곡선 암호. [타원곡선](elliptic-curves.md)이나 초타원곡선으로 암호를 만들려면 군의 위수를 알아야 한다. 위수가 작은 소인수만 가지면 [Pohlig–Hellman 방법](pohlig-hellman.md)으로 [이산로그](discrete-logarithm.md)가 계산된다. 곡선을 무작위로 골라 위수를 세고 조건에 맞을 때까지 반복하며, 위수를 세는 데 이 알고리즘을 쓴다.
- $p$ 진 불변량의 계산. 초특이성, Newton 다각형, 형식군의 높이, $p$ 진 높이의 계산에 Frobenius 행렬 $M$ 을 쓴다.
- 수치 자료. 많은 소수에 대한 $a_p$ 의 표가 [Sato–Tate 분포](sato-tate.md)와 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)의 수치 검증에 쓰인다. LMFDB(L-functions and Modular Forms Database)의 종수 $2$ 곡선 자료가 이런 알고리즘으로 계산되었다.
- 일반 다양체. Lauder–Wan 은 Dwork 의 방법으로 임의의 다양체에 대해 $p$ 의 다항식 시간 알고리즘을 주었다. Lauder 의 변형법(deformation method)은 매개변수를 움직이며 미분방정식을 풀어 비용을 낮춘다.

[^1]: K. Kedlaya, *Counting points on hyperelliptic curves using Monsky–Washnitzer cohomology*, J. Ramanujan Math. Soc. **16** (2001), 323–338 (errata 18 (2003)). 약수렴 대수와 코호몰로지는 P. Monsky, G. Washnitzer, *Formal cohomology I*, Ann. of Math. **88** (1968), 181–217. 일반 다양체는 A. Lauder, D. Wan, *Counting points on varieties over finite fields of small characteristic*, in *Algorithmic Number Theory* (MSRI, 2008). 개량된 비용은 D. Harvey, *Kedlaya's algorithm in larger characteristic*, IMRN (2007). Hasse 불변량과 초특이성은 J. Silverman, *The Arithmetic of Elliptic Curves* (2판, 2009) V장.

# 연관 문서

## 선수지식

- [Dwork 의 유리성 정리와 지수합](dwork-rationality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #computation #cryptography
