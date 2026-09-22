# Lang–Trotter 추측과 초특이 소수

# 개요

[Sato–Tate 분포](sato-tate.md)는 Frobenius 각 $\theta_p$ 가 $\frac2\pi\sin^2\theta\thinspace d\theta$ 를 따른다고 말한다. 연속측도다. 그러므로 한 점의 질량이 $0$ 이고, 특정한 정수값

$$
a_p=r\qquad(r\ \text{고정})
$$

를 갖는 소수의 밀도가 $0$ 이다. 밀도가 $0$ 이라는 것은 개수가 $\pi(X)$ 보다 작게 자란다는 뜻일 뿐이고, 유한한지 무한한지는 말해 주지 않는다.

Lang 과 Trotter 는 1976 년에 그 빈자리를 채우는 추측을 냈다.

$$
\char35{}\lbrace p\le X:\ a_p=r\rbrace\ \sim\ C_{E,r}\thinspace\frac{\sqrt X}{\log X}
$$

$\pi(X)\approx X/\log X$ 에 비해 제곱근만큼 작다. $r=0$ 인 경우가 **초특이 소수**의 개수이고 별도의 상수를 갖는다.

$\sqrt X$ 라는 규모는 확률적 발견법에서 나온다. $a_p$ 는 길이 $4\sqrt p$ 인 구간 위에 Sato–Tate 측도로 흩어진 정수이고, 그 구간 안의 정수가 $4\sqrt p$ 개쯤이므로 특정한 값 하나를 맞출 확률이 $\asymp1/\sqrt p$ 다. 그러면

$$
\sum_{p\le X}\frac1{\sqrt p}\ \asymp\ \frac{\sqrt X}{\log X}
$$

가 된다. 상수 $C_{E,r}$ 는 이 발견법을 $\ell$ 진 표현의 상으로 보정한 것으로, $a_p\equiv r$ 이 $\bmod\ell$ 에서 일어나는 빈도를 모든 $\ell$ 에 걸쳐 곱한 오일러 곱이다.

추측은 증명되지 않았고 알려진 것은 예상 점근보다 약한 상계뿐이다[^1]. $r=0$ 에서는 무한성이 증명되어 있다. Elkies 가 1987 년에 $\mathbb Q$ 위의 모든 타원곡선이 무한히 많은 초특이 소수를 가짐을 보였다.

# 직관

## 띠와 점

Sato–Tate 와 Lang–Trotter 는 띠와 점의 차이다.

$|a_p|\le\delta\cdot2\sqrt p$ 는 각의 구간을 지정한다. $\delta$ 가 작아도 구간의 길이가 양수이므로 Sato–Tate 측도가 양의 질량을 주고 그런 소수가 양의 밀도로 존재한다. 질량은 대략

$$
\int_{\pi/2-\arcsin\delta}^{\pi/2+\arcsin\delta}\frac2\pi\sin^2\theta\thinspace d\theta\ \approx\ \frac{4\delta}\pi
$$

다.

$a_p=0$ 은 점이다. $p$ 가 커질수록 $a_p$ 가 놓일 자리가 $4\sqrt p$ 개로 늘어나므로 한 자리를 맞출 확률이 $1/\sqrt p$ 로 줄어든다. 띠는 폭이 $\sqrt p$ 에 비례해 늘어나지만 점은 늘어나지 않는다.

연속측도는 점의 질량이 $0$ 이라고만 말하고 $0$ 으로 가는 속도는 말하지 않으므로, Sato–Tate 가 아무리 정밀해져도 Lang–Trotter 는 따라 나오지 않는다. 속도를 알려면 $\bmod\ell$ 정보를 모든 $\ell$ 에서 모아야 한다.

## 상수의 오일러 곱

$a_p=r$ 을 확인하려면 모든 $\ell$ 에서 $a_p\equiv r\pmod\ell$ 이어야 한다. [Galois 표현](galois-representations.md) $\rho_{E,\ell}$ 의 상 안에서 대각합이 $r$ 인 원소의 비율이 그 확률을 준다. 상이 $\mathrm{GL}\_2(\mathbb F_\ell)$ 전체라면(CM 이 없으면 거의 모든 $\ell$ 에서 그렇다, Serre) 그 비율은 초등적으로 계산된다.

그리고 [Chebotarev 밀도 정리](chebotarev.md)가 각 $\ell$ 에서의 밀도를 실제 소수의 밀도로 바꿔 준다. 서로 다른 $\ell$ 들이 독립이라 가정하면 확률이 곱해지고, 아르키메데스 쪽의 $1/\sqrt p$ 와 합쳐

$$
C_{E,r}=\frac2\pi\cdot\prod_\ell(\text{국소 인자})
$$

꼴이 나온다. 국소 조건을 곱하고 아르키메데스 밀도를 곱하는 구조가 Hardy–Littlewood 의 쌍둥이 소수 상수와 같고, 독립성을 증명할 방법이 없다는 어려움도 같다.

## $r=0$ 의 특수성

$a_p=0$ 은 $p$ 에서 곡선이 **초특이**라는 기하적 조건이고, [Newton 다각형](newton-polygon.md)의 기울기가 $\tfrac12,\tfrac12$ 라는 것, 형식군의 높이가 $2$ 라는 것과 같다. 산술 조건이 아니라 환원의 유형에 관한 조건이다.

Elkies 의 증명은 이 기하를 쓴다. 초특이 소수가 유한하다고 가정하고 허수이차 차수의 Hilbert [유체론](class-field-theory.md)과 힐베르트 류다항식으로 모순을 끌어낸다. 초특이 $j$ 불변량이 $\mathbb F_{p^2}$ 에 살고 그 개수가 대략 $p/12$ 라는 것, 복소곱셈을 가진 곡선의 환원이 초특이가 되는 소수를 이차 상호법칙으로 통제한다는 것이 재료다. $r\ne0$ 에는 이런 기하가 없다.
# 정의

## Lang–Trotter 추측

$E/\mathbb Q$ 를 복소곱셈이 없는 타원곡선, $r\in\mathbb Z$ 를 고정한다.

$$
\pi_{E,r}(X)=\char35{}\lbrace p\le X:\ p\ \text{좋은 환원},\ a_p=r\rbrace
$$

> **추측 (Lang–Trotter, 1976).** $r\ne0$ 이거나 $r=0$ 이면
> $$\pi_{E,r}(X)\sim C_{E,r}\frac{\sqrt X}{\log X}\qquad(X\to\infty)$$
> 단 $C_{E,r}=0$ 인 자명한 경우(합동 조건 때문에 $a_p=r$ 이 유한 번만 가능한 경우)는 제외한다.

$r$ 의 홀짝과 $E$ 의 유리 등분점에 따라 $C_{E,r}$ 가 $0$ 이 될 수 있다. $E$ 가 유리 2 등분점을 가지면 $a_p$ 가 항상 짝수라 홀수 $r$ 은 나오지 않는다.

## 초특이 소수

$p$ 가 **초특이 소수**라 함은 $E$ 의 $\bmod p$ 환원이 초특이라는 것, 곧 $a_p\equiv0\pmod p$ 라는 뜻이다. $p\gt 3$ 이고 좋은 환원이면 Hasse 한계 $|a_p|\le2\sqrt p\lt p$ 때문에 이것은 $a_p=0$ 과 같다.

> **정리 (Elkies, 1987).** $\mathbb Q$ 위의 모든 타원곡선은 무한히 많은 초특이 소수를 갖는다.

개수의 점근은 추측으로 남아 있다. Lang–Trotter 는 $\sim C\sqrt X/\log X$ 를 예측하고 Elkies 의 증명은 $\gg\log\log X$ 하계만 준다.

## 알려진 상계

무조건적으로 알려진 상계는 다음과 같다.

$$
\pi_{E,r}(X)\ \ll\ \frac{X\thinspace(\log\log X)^2}{(\log X)^2}
$$

추측값 $\sqrt X/\log X$ 와 거의 $\sqrt X$ 만큼 떨어져 있다. 일반화 [Riemann 가설](riemann-hypothesis.md)을 가정하면 $X^{4/5}$ 규모까지 내려간다. CM 이 있으면 허수이차체의 Hecke 지표로 환원되어 $\pi_{E,0}(X)\sim\frac12\pi(X)$ 라는 정확한 답이 나온다.

# 성질

## 세 층위

$a_p$ 에 관한 진술은 다음 층으로 나뉜다.

| 층위 | 진술 | 상태 |
|---|---|---|
| 크기 | $\lvert a_p\rvert\le2\sqrt p$ | [Hasse, Deligne](deligne-weil-conjectures.md) — 정리 |
| 분포(띠) | $\theta_p\sim\frac2\pi\sin^2\theta\thinspace d\theta$ | [Sato–Tate](sato-tate.md) — 정리 |
| 분포(점) | $\char35{}\lbrace a_p=r\rbrace\sim C\sqrt X/\log X$ | Lang–Trotter — 추측[^1] |
| 점의 무한성 | $a_p=0$ 이 무한히 많다 | Elkies — 정리 |

아래로 갈수록 미세하고 어렵고, 위 층이 아래 층을 함의하지 않는다. 연속측도의 한 점이므로 Sato–Tate 를 정밀한 오차항과 함께 얻어도 Lang–Trotter 는 나오지 않는다.

## 관련 추측들

같은 $\sqrt X/\log X$ 꼴이 여러 곳에 나타난다.

- **고정된 자취.** 위의 $a_p=r$ 인 경우다.
- **Koblitz 추측.** $\char35{}E(\mathbb F_p)$ 가 소수인 $p$ 의 개수가 $\asymp X/(\log X)^2$ 라는 추측. 이쪽은 $X/(\log X)^2$ 라 층위가 다르다. 암호에서 좋은 곡선을 찾는 비용을 예측한다.
- **고정된 환원 유형.** $\mathrm{End}(E\bmod p)$ 가 주어진 차수가 되는 소수의 개수. 역시 $\sqrt X/\log X$ 다.

모두 밀도 $0$ 인 조건의 개수를 세는 문제이고, Chebotarev 를 무한히 많은 확대에 걸쳐 균등하게 적용해야 한다는 같은 요구를 받는다.

# 활용

## $\sqrt X/\log X$ 규모

$r=\pm2$ 의 상수가 $r=\pm1$ 보다 크다. 상수가 $r$ 에 의존한다는 것이 Lang–Trotter 의 오일러 곱이 말하는 바이고, 홀짝에 따른 국소 인자의 차이가 큰 몫을 한다.

## 초특이 소수의 목록

$p=17$ 은 [Kedlaya 알고리즘](kedlaya-algorithm.md)에서 Hasse 불변량이 $0$ 으로 나온 소수이고 여기서 목록의 첫 원소다. 소수 $6054$ 개 가운데 $16$ 개로 비율이 $0.0026$ 이다. 밀도는 $0$ 으로 가지만 Elkies 의 정리대로 목록이 끊기지 않는다.

## 띠와 점의 비교

띠의 비율은 Sato–Tate 예측과 맞고, 점의 비율은 $X$ 를 키우면 $0$ 으로 줄어든다. 띠는 Sato–Tate 가 예측하고 점은 예측하지 못한다.

## [lang-trotter]

- **암호에서의 곡선 선택.** 초특이 곡선은 MOV(Menezes–Okamoto–Vanstone) 공격으로 [이산로그](discrete-logarithm.md)가 유한체 이산로그로 환원되므로 배제한다. 무작위 곡선이 초특이일 확률은 $\asymp1/\sqrt p$ 로 작지만 검사는 한다.
- **초특이 동종사상 암호.** 반대로 초특이 곡선만 모아 그 사이의 동종사상 그래프를 쓰는 암호 계열(SIDH, supersingular isogeny Diffie–Hellman 과 SIKE, supersingular isogeny key encapsulation 및 그 후속)이 있다. 초특이 $j$ 불변량이 $\mathbb F_{p^2}$ 에 $\approx p/12$ 개라는 사실이 설계의 근거다.
- **수치 검증.** Lang–Trotter 상수의 검증은 대량의 $a_p$ 표를 요구하고 그 표를 [SEA](sea-algorithm.md)(Schoof–Elkies–Atkin) 알고리즘이 만든다. 정밀한 검증에는 $X$ 를 $10^{10}$ 이상으로 올려야 한다.
- **일반화.** 아벨 다양체와 [모듈러 형식](modular-forms.md)의 $a_p$ 와 수체 위의 곡선으로 같은 꼴의 추측이 확장되어 있다.

[^1]: S. Lang, H. Trotter, *Frobenius Distributions in GL₂-Extensions*, Lecture Notes in Math. 504 (1976). 초특이 소수의 무한성은 N. Elkies, *The existence of infinitely many supersingular primes for every elliptic curve over Q*, Invent. Math. **89** (1987), 561–567. 상계는 E. Fouvry, M. R. Murty 및 V. K. Murty 의 일련의 논문, 요약은 A. Cojocaru, *Questions about the reductions modulo primes of an elliptic curve*, in *Number Theory* (CRM Proc. 36, 2004). 초특이 동종사상 그래프는 D. Jao, L. De Feo, PQCrypto 2011.

# 연관 문서

## 선수지식

- [Sato–Tate 분포](sato-tate.md)

## 더 알아보기

- [초특이 동종사상 그래프와 SIDH](supersingular-isogeny-graphs.md)

#number_theory #probability #cryptography #computation
