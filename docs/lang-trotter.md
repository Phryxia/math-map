# Lang–Trotter 추측

# 개요

**Lang–Trotter 추측(Lang–Trotter conjecture)** 은 [타원곡선](elliptic-curves.md)의 해를 소수마다 셀 때, 예상값과의 차이 $a_p$ 가 미리 정한 정수 $r$ 과 같아지는 소수가 얼마나 자주 나오는지를 예측한 추측이다. $y^2=x^3+x+1$ 에서 $p=5$ 의 해는 무한원점까지 $9$ 개라 $a_5=6-9=-3$ 이고, 소수마다 이렇게 $a_p$ 를 구해 $a_p=-3$ 인 소수를 모으는 것이 문제다. $a_p$ 는 $-2\sqrt p$ 와 $2\sqrt p$ 사이의 정수 약 $4\sqrt p$ 개 가운데 하나이므로 특정한 값이 나올 확률은 $1/\sqrt p$ 쯤이다. Lang 과 Trotter 는 1976 년에 이 확률을 소수에 걸쳐 더해, $x$ 이하에서 그런 소수의 개수가 $\sqrt x/\log x$ 의 상수배로 자란다고 추측했다.

# 직관

$E\colon y^2=x^3+x+1$ 과 소수 $p$ 에 대해 $a_p=p+1-\char35{}E(\mathbb F_p)$ 는 Hasse 의 정리로 $\vert a_p\vert\le2\sqrt p$ 를 만족한다. $a_p=2\sqrt p\cos\theta_p$ 로 쓰면 각 $\theta_p\in\lbrack0,\pi\rbrack$ 가 정해지고, [Sato–Tate 분포](sato-tate.md)에 따르면 $\theta_p$ 는 측도 $\frac2\pi\sin^2\theta\thinspace d\theta$ 로 분포한다.

이 측도로 $\vert a_p\vert\le\delta\cdot2\sqrt p$ 인 소수의 비율을 잰다. 이 조건은 $\theta_p$ 가 $\pi/2$ 주변의 구간에 드는 것이고, 구간의 길이가 양수이므로 비율도 양수다.

$$
\int_{\pi/2-\arcsin\delta}^{\pi/2+\arcsin\delta}\frac2\pi\sin^2\theta\thinspace d\theta\thickspace\approx\thickspace\frac{4\delta}\pi
$$

$a_p=r$ 인 소수는 이와 다르다. 이 조건은 $\theta_p$ 가 한 점에 있다는 것이어서 Sato–Tate 측도로는 비율이 $0$ 이고, 그런 소수가 유한 개인지 무한 개인지는 측도가 정하지 않는다. $a_p$ 가 놓일 수 있는 정수 자리가 $4\sqrt p$ 개쯤이므로, 한 자리를 맞출 확률을 $1/\sqrt p$ 쯤으로 놓고 소수에 걸쳐 더하면 $X$ 이하에서 다음 크기가 나온다.

$$
\sum_{p\le X}\frac1{\sqrt p}\thickspace\asymp\thickspace\frac{\sqrt X}{\log X}
$$

# 정의

## a_p 와 좋은 환원

타원곡선 $E/\mathbb Q$ 의 방정식을 소수 $p$ 로 나눈 나머지가 여전히 타원곡선이면 $p$ 를 $E$ 의 좋은 환원(good reduction) 소수라 하고, $a_p=p+1-\char35{}E(\mathbb F_p)$ 로 둔다. $y^2=x^3+x+1$ 은 판별식이 $-16\cdot31$ 이므로 $2$ 와 $31$ 을 뺀 소수에서 좋은 환원을 갖고, $a_5=-3$ 이다.

## Lang–Trotter 추측

$E/\mathbb Q$ 를 [복소 곱셈](complex-multiplication.md)(complex multiplication, CM)이 없는 타원곡선, $r$ 을 정수라 하자.

$$
\pi_{E,r}(X)=\char35{}\lbrace p\le X:\thinspace p\thinspace\text{가 좋은 환원},\ a_p=r\rbrace
$$

**Lang–Trotter 추측** 은 $E$ 와 $r$ 에만 의존하는 상수 $C_{E,r}\ge0$ 이 존재해 다음이 성립한다는 진술이다[^1].

$$
\pi_{E,r}(X)\sim C_{E,r}\frac{\sqrt X}{\log X}\qquad(X\to\infty)
$$

$C_{E,r}=0$ 이면 이 식은 $\pi_{E,r}(X)=o(\sqrt X/\log X)$ 로 읽고, 이 경우는 합동 조건 때문에 $a_p=r$ 이 유한 번만 일어나는 경우다. $E$ 가 유리 2 등분점을 가지면 $\char35{}E(\mathbb F_p)$ 가 짝수이므로 $a_p$ 는 항상 짝수이고, 홀수 $r$ 에서는 $C_{E,r}=0$ 이다.

## 초특이 소수

$E$ 의 $p$ 에서의 환원이 초특이, 곧 $a_p\equiv0\pmod p$ 이면 $p$ 를 $E$ 의 **초특이 소수(supersingular prime)** 라 한다. $p\gt3$ 이고 좋은 환원이면 Hasse 한계 $\vert a_p\vert\le2\sqrt p\lt p$ 로 이것은 $a_p=0$ 과 같으므로, 초특이 소수의 개수는 $\pi_{E,0}(X)$ 다. CM 을 갖는 곡선 $y^2=x^3-x$ 에서는 $p\equiv3\pmod4$ 인 소수가 모두 초특이 소수다.

# 성질

## 알려진 결과

Elkies 는 1987 년에 $\mathbb Q$ 위의 모든 타원곡선이 무한히 많은 초특이 소수를 가짐을 증명했다[^1]. 이 증명은 개수의 점근을 주지 않는다.

$r$ 에 대해 무조건 알려진 상계는 다음과 같다[^1]. 일반화 [Riemann 가설](riemann-hypothesis.md)을 가정하면 $X^{4/5}$ 규모까지 내려간다.

$$
\pi_{E,r}(X)\thickspace\ll\thickspace\frac{X\thinspace(\log\log X)^2}{(\log X)^2}
$$

CM 이 있으면 문제가 허수이차체의 Hecke 지표로 옮겨지고, 초특이 소수는 그 체에서 분해되지 않는 소수여서 $\pi_{E,0}(X)\sim\frac12\pi(X)$ 다.

## 세 층위

$a_p$ 에 관한 진술은 다음 층으로 나뉜다.

| 층위 | 진술 | 상태 |
|---|---|---|
| 크기 | $\lvert a_p\rvert\le2\sqrt p$ | Hasse — 정리 |
| 구간의 분포 | $\theta_p\sim\frac2\pi\sin^2\theta\thinspace d\theta$ | Sato–Tate — 정리 |
| 한 값의 분포 | $\char35{}\lbrace a_p=r\rbrace\sim C\sqrt X/\log X$ | Lang–Trotter — 추측[^1] |
| 한 값의 무한성 | $a_p=0$ 이 무한히 많다 | Elkies — 정리 |

Sato–Tate 분포는 연속측도이므로, 오차항까지 정밀하게 얻어도 한 점에 대한 Lang–Trotter 의 점근은 유도되지 않는다. 크기의 정리는 [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)의 특수한 경우다.

## 상수의 Euler 곱

$a_p=r$ 이면 모든 소수 $\ell$ 에서 $a_p\equiv r\pmod\ell$ 이다. [Galois 표현](galois-representations.md) $\rho_{E,\ell}$ 의 상 안에서 대각합이 $r$ 인 원소의 비율이 이 합동의 확률이고, [Chebotarev 밀도 정리](chebotarev.md)가 이 비율을 실제 소수의 밀도로 준다. CM 이 없으면 유한 개를 뺀 모든 $\ell$ 에서 상이 $\mathrm{GL}\_2(\mathbb F_\ell)$ 전체이고(Serre), 그때 비율은 직접 계산된다.

서로 다른 $\ell$ 들이 독립이라고 가정해 확률을 곱하고 직관 절의 $1/\sqrt p$ 와 합치면 다음 꼴의 상수가 나온다.

$$
C_{E,r}=\frac2\pi\cdot\prod_\ell(\text{국소 인자})
$$

국소 조건을 곱하고 실수 쪽 밀도를 곱하는 구조는 Hardy–Littlewood 의 쌍둥이 소수 상수와 같고, 독립성을 증명하는 방법이 없다는 점도 같다.

## 초특이 소수의 기하

$a_p=0$ 은 $p$ 에서의 환원이 초특이라는 조건이고, [Newton 다각형](newton-polygon.md)의 기울기가 $\tfrac12,\tfrac12$ 인 것, 형식군의 높이가 $2$ 인 것과 동치다.

## 같은 꼴의 추측

- 고정된 환원 유형. $\mathrm{End}(E\bmod p)$ 가 주어진 허수이차 순서환이 되는 소수의 개수도 $\sqrt X/\log X$ 규모로 예측된다.
- Koblitz 추측(Koblitz conjecture). $\char35{}E(\mathbb F_p)$ 가 소수인 $p$ 의 개수가 $X/(\log X)^2$ 의 상수배라는 추측이다. 크기가 $\sqrt X/\log X$ 가 아니라는 점에서 Lang–Trotter 와 다르다.

이 문제들은 모두 밀도 $0$ 인 조건을 만족하는 소수를 세고, Chebotarev 밀도 정리를 무한히 많은 확대에 걸쳐 균등하게 적용해야 한다.

# 활용

- 암호에서의 곡선 선택. 초특이 곡선의 [이산로그](discrete-logarithm.md)는 MOV(Menezes–Okamoto–Vanstone) 귀착으로 작은 [유한체](finite-fields.md)의 이산로그로 옮겨지므로, 이산로그 암호에서는 초특이 곡선을 배제한다. 무작위 곡선이 초특이일 확률은 $1/\sqrt p$ 쯤이다.
- [초특이 동종사상 그래프](supersingular-isogeny-graphs.md). 초특이 곡선 사이의 동종사상 그래프를 쓰는 암호 계열이 있고, $\mathbb F_{p^2}$ 위의 초특이 $j$ 불변량이 약 $p/12$ 개라는 사실을 설계에 쓴다. 이 계열의 SIDH(supersingular isogeny Diffie–Hellman)는 2022 년 Castryck 와 Decru 의 공격으로 깨졌다.
- 수치 검증. 상수 $C_{E,r}$ 를 검증하려면 많은 소수에서 $a_p$ 를 계산해야 하고, [Schoof–Elkies–Atkin 알고리즘](sea-algorithm.md)이 그 표를 만든다.
- 일반화. [아벨 다양체](abelian-varieties.md), [모듈러 형식](modular-forms.md)의 Fourier 계수, 수체 위의 타원곡선에 대해 같은 꼴의 추측이 세워져 있다.

[^1]: S. Lang, H. Trotter, *Frobenius Distributions in GL₂-Extensions*, Lecture Notes in Math. 504 (1976). 초특이 소수의 무한성은 N. Elkies, *The existence of infinitely many supersingular primes for every elliptic curve over Q*, Invent. Math. **89** (1987), 561–567. 상계는 E. Fouvry, M. R. Murty 및 V. K. Murty 의 일련의 논문, 요약은 A. Cojocaru, *Questions about the reductions modulo primes of an elliptic curve*, in *Number Theory* (CRM Proc. 36, 2004). 초특이 동종사상 그래프는 D. Jao, L. De Feo, PQCrypto 2011.

# 연관 문서

## 선수지식

- [Sato–Tate 분포](sato-tate.md)

## 더 알아보기

- [초특이 동종사상 그래프](supersingular-isogeny-graphs.md)

#number_theory #probability #cryptography #computation
