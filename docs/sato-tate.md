# Sato–Tate 분포

# 개요

**Sato–Tate 분포(Sato–Tate distribution)** 는 [타원곡선](elliptic-curves.md)의 해를 소수마다 셀 때, 해의 개수가 예상값에서 벗어난 정도가 소수 전체에 걸쳐 따르는 분포다. $y^2=x^3+x+1$ 의 해를 무한원점까지 $p$ 로 나눈 나머지에서 세면 $p+1$ 근처의 수가 나오고, 차이 $a_p$ 는 $-2\sqrt p$ 와 $2\sqrt p$ 사이에 있다. $p=5$ 에서는 해가 $9$ 개이고 $a_5=-3$ 이다. 소수를 늘려 가며 $a_p/(2\sqrt p)$ 를 구간 $[-1,1]$ 에 점으로 찍으면 점들은 고르게 퍼지지 않고 가운데가 높게 쌓인다.

Sato–Tate 분포는 이 쌓임을 밀도 $\frac2\pi\sqrt{1-x^2}$ 의 반원 모양으로 정하고, 곡선이 [복소곱셈](complex-multiplication.md)을 갖지 않으면 점들이 이 분포를 따른다는 것이 증명되어 있다.

# 직관

$y^2=x^3+x+1$ 에서 $p=3,5,7,11,13$ 의 $a_p$ 는 $0,-3,3,-2,-4$ 이고, $a_p/(2\sqrt p)$ 는 $0$, $-0.671$, $0.567$, $-0.302$, $-0.555$ 다. 이 값들은 모두 $[-1,1]$ 안에 있다. 점들이 $[-1,1]$ 에 고르게 퍼진다면 $1000$ 미만의 소수 가운데 절반이 $[-1/2,1/2]$ 에 들어가야 한다. 실제로는 $2$ 와 $31$ 을 뺀 소수 $166$ 개 가운데 $97$ 개, 곧 58% 가 들어간다.

가운데가 높은 이유는 $a_p$ 를 각으로 적으면 드러난다. [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)에 따르면 $p$ 에서의 Frobenius 고윳값 두 개가 $\sqrt p\thinspace e^{\pm i\theta_p}$ 꼴이고 그 합이 $a_p$ 이므로 $a_p/(2\sqrt p)=\cos\theta_p$ 다. 고윳값이 $e^{\pm i\theta}$ 인 $2\times 2$ 행렬을 회전 같은 대칭들의 군 $\mathrm{SU}(2)$ 에서 아무렇게나 고르면, $\cos\theta$ 는 $\pm 1$ 근처보다 $0$ 근처에 더 자주 온다.

Sato 는 수치 계산으로, Tate 는 이 군의 측도로 1960 년대에 같은 답을 냈다. 각 $\theta_p$ 가 $\mathrm{SU}(2)$ 에서 고른 행렬의 각처럼 흩어진다는 것이 그 답이다. $\cos\theta$ 로 옮기면 반원 밀도 $\frac2\pi\sqrt{1-x^2}$ 이 되고, 이 밀도에서 $[-1/2,1/2]$ 의 확률은 $0.609$ 다.

# 정의

## 정규화 각

$E/\mathbb Q$ 가 좋은 환원을 갖는 소수 $p$ 에서 다음과 같이 둔다.

$$
a_p=p+1-\char35{}E(\mathbb F_p),
\qquad
\theta_p=\arccos\negthinspace\Big(\frac{a_p}{2\sqrt p}\Big)\in\lbrack 0,\pi\rbrack
$$

Hasse 부등식(Hasse bound) $\vert a_p\vert\le 2\sqrt p$ 때문에 $\arccos$ 의 인자가 $[-1,1]$ 안에 있다. $y^2=x^3+x+1$ 의 $p=5$ 에서 $\cos\theta_5=-3/(2\sqrt5)$ 이고 $\theta_5\approx 2.306$ 이다.

## Sato–Tate 측도

**Sato–Tate 측도(Sato–Tate measure)** 는 $\lbrack 0,\pi\rbrack$ 위의 다음 확률측도다.

$$
\mu_{ST}=\frac2\pi\sin^2\theta\thinspace d\theta
$$

$x=\cos\theta$ 로 옮기면 $[-1,1]$ 위의 $\frac2\pi\sqrt{1-x^2}\thinspace dx$ 이고, 이 측도가 Sato–Tate 분포다. $\mu_{ST}$ 는 $\theta=\pi/2$ 에 대해 대칭이다. $\vert x\vert\le 1/2$ 은 $\theta\in\lbrack\pi/3,2\pi/3\rbrack$ 이고, 그 질량은 $\frac2\pi\bigl(\frac{\sqrt3}{4}+\frac\pi6\bigr)\approx 0.609$ 다.

## 등분포

수열 $\theta_p$ 가 측도 $\mu$ 에 대해 **등분포한다(equidistributed)** 는 것은 모든 $0\le\alpha\lt\beta\le\pi$ 에서 다음이 성립한다는 것이다.

$$
\lim_{X\to\infty}\frac{\char35{}\lbrace p\le X:\theta_p\in\lbrack\alpha,\beta\rbrack\rbrace}{\char35{}\lbrace p\le X\rbrace}=\mu(\lbrack\alpha,\beta\rbrack)
$$

일반적인 정의는 [등분포](equidistribution.md)에 있다. 직관 절의 58% 는 $\alpha=\pi/3$, $\beta=2\pi/3$, $X=1000$ 에서 좌변의 비율이다.

## 대칭곱 L 함수

$\alpha_p,\beta_p=e^{\pm i\theta_p}$ 를 $p$ 에서의 정규화된 Frobenius 고윳값이라 할 때 **대칭곱 L 함수(symmetric power L-function)** 는 다음 곱이다.

$$
L(\mathrm{Sym}^nE,s)=\prod_{p\ \text{좋음}}\ \prod_{k=0}^{n}
\Big(1-\alpha_p^{\thinspace k}\beta_p^{\thinspace n-k}p^{-s}\Big)^{-1}
$$

$n=1$ 이 $E$ 의 Hasse–Weil L 함수(Hasse–Weil L-function)를 $s$ 방향으로 $1/2$ 옮긴 것이고, $n=2$ 는 수반 L 함수(adjoint L-function)다.

## Sato–Tate 군

$E$ 의 **Sato–Tate 군(Sato–Tate group)** $\mathrm{ST}(E)$ 는 $\ell$ 진 [Galois 표현](galois-representations.md)의 상의 Zariski 폐포를 행렬식 $1$ 로 정규화하고 그 극대 콤팩트 부분군을 취한 것이다. 타원곡선에서는 두 경우뿐이다.

| | ST(E) | 측도 | aₚ=0 인 소수의 밀도 |
|---|---|---|---|
| 복소곱셈 없음 | $\mathrm{SU}(2)$ | $\frac2\pi\sin^2\theta\thinspace d\theta$ | $0$ |
| 복소곱셈 있음 | $N(\mathrm{U}(1))$ | $\frac12\delta_{\pi/2}+\frac1{2\pi}d\theta$ | $\tfrac12$ |

$N(\mathrm{U}(1))$ 은 $\mathrm{SU}(2)$ 안의 대각 원환 $\mathrm{U}(1)$ 의 정규화군이다. $y^2=x^3+x+1$ 은 $j=6912/31$ 이 정수가 아니어서 복소곱셈(complex multiplication, CM)이 없고 $\mathrm{ST}(E)=\mathrm{SU}(2)$ 다. $y^2=x^3+1$ 은 $\mathbb Z\lbrack\zeta_3\rbrack$ 에 의한 복소곱셈이 있어 $N(\mathrm{U}(1))$ 이다.

# 성질

## Sato–Tate 정리

$E/\mathbb Q$ 가 복소곱셈을 갖지 않으면 $\theta_p$ 는 $\mu_{ST}$ 에 대해 등분포한다. Clozel, Harris, Shepherd-Barron, Taylor 가 2008 년에 $j$ 가 정수가 아닌 곡선에서 증명했고, Barnet-Lamb, Geraghty, Harris, Taylor 가 2011 년에 일반 경우를 증명했다. 같은 진술이 총실수체(totally real field) 위의 타원곡선에서도 증명되어 있다.

## 복소곱셈이 있는 경우

$E$ 가 허수이차체 $F$ 에 의한 복소곱셈을 가지면 $F$ 에서 불활성인 소수의 $a_p$ 가 $0$ 이고, 그 소수에서 곡선이 초특이하다. 그런 소수는 소수 전체의 절반이다. 나머지 소수의 $\theta_p$ 는 $\lbrack 0,\pi\rbrack$ 위의 균등 측도에 대해 등분포하고, 이것은 $F$ 의 Hecke 지표(Hecke character)의 $L$ 함수로 증명된다. $y^2=x^3+1$ 에서 $a_p=0$ 인 소수는 $p\equiv 2\pmod 3$ 인 소수다.

## Weyl 적분공식

$\mathrm{SU}(2)$ 의 원소는 켤레를 무시하면 [고윳값](eigenvalues.md) $e^{\pm i\theta}$ 로 정해지므로 켤레류의 공간이 $\lbrack 0,\pi\rbrack$ 다. $\mathrm{SU}(2)$ 의 [Haar 측도](haar-measure.md)를 이 공간으로 밀어내면 Weyl 적분공식(Weyl integration formula)이 $\mu_{ST}$ 를 준다. 인자 $\sin^2\theta$ 는 Weyl 분모 $\vert e^{i\theta}-e^{-i\theta}\vert^2=4\sin^2\theta$ 에서 나온다. 이 인자가 $\theta=0,\pi$ 근처에서 $0$ 이므로 $a_p$ 가 $\pm 2\sqrt p$ 에 가까운 소수가 드물다.

## 대칭곱의 지표

$\mathrm{SU}(2)$ 의 기약표현은 대칭곱 $\mathrm{Sym}^n$ 이고, 그 지표는 제2종 [Chebyshev 다항식](chebyshev-polynomials.md)이다.

$$
\mathrm{tr}\thinspace\mathrm{Sym}^n(\theta)=\frac{\sin((n+1)\theta)}{\sin\theta}=U_n(\cos\theta)
$$

$U_n(\cos\theta)$ 들은 $\mu_{ST}$ 에 대해 정규직교계이고 그 일차결합이 연속함수 공간에서 조밀하다. 그래서 모든 $n\ge 1$ 에서 $\sum_{p\le X}U_n(\cos\theta_p)$ 가 소수 개수보다 작은 차수이면 등분포가 나온다. 이 합은 $L(\mathrm{Sym}^nE,s)$ 의 로그미분의 계수합이고, $L(\mathrm{Sym}^nE,s)$ 가 $\mathrm{Re}(s)\ge 1$ 까지 해석적으로 연장되고 $\mathrm{Re}(s)=1$ 에서 영점이 없으면 Wiener–Ikehara 꼴 [Tauber 정리](tauberian-theorems.md)로 작은 차수임이 증명된다.

## 증명의 요지

$n=1$ 의 해석적 연장은 모듈러성 정리(modularity theorem)가 준다. $n=2$ 는 Gelbart–Jacquet 이, $n=3$ 은 Kim–Shahidi 가, $n=4$ 는 Kim 이 증명했다. 등분포에는 모든 $n$ 이 필요하다.

Taylor 와 공저자들은 $\mathrm{Sym}^nE$ 가 $\mathbb Q$ 위에서 자기동형이라는 것 대신, 어떤 총실수체로 올라가면 자기동형이 된다는 잠재적 모듈러성(potential modularity)을 증명했다. 이것으로 해석적 연장과 $\mathrm{Re}(s)=1$ 에서의 비소멸이 나온다. 도구는 모듈러성 올림 정리(modularity lifting theorem) $R=T$ 와 대칭곱을 실현하는 Dwork 족의 Calabi–Yau 다양체다.

## 다른 등분포 정리와의 비교

| 등분포 진술 | 필요한 해석적 사실 |
|---|---|
| [소수 정리](prime-number-theorem.md) | $\zeta(1+it)\ne0$ |
| 산술급수의 소수 분포 | $L(1+it,\chi)\ne0$ |
| [Chebotarev 밀도 정리](chebotarev.md) | [Artin L 함수](artin-l-functions.md)의 비소멸 |
| Sato–Tate | 모든 $\mathrm{Sym}^n$ L 함수의 비소멸 |

네 경우 모두 군의 기약표현마다 L 함수를 하나씩 두고, 그 L 함수가 $\mathrm{Re}(s)=1$ 에서 영점을 갖지 않으면 그 지표의 평균이 $0$ 이 된다. Sato–Tate 에서는 군이 $\mathrm{SU}(2)$ 여서 기약표현이 무한히 많다.

## 오차항과 Lang–Trotter 추측

Sato–Tate 정리는 극한만 주고 수렴 속도를 주지 않는다. 대칭곱 L 함수들의 일반화된 [Riemann 가설](riemann-hypothesis.md)을 가정하면 수렴 속도의 상계가 증명된다.

- [Lang–Trotter 추측](lang-trotter.md)(Lang–Trotter conjecture)은 고정된 $r$ 에 대해 $a_p=r$ 인 $p\le X$ 의 개수가 $c_{E,r}\sqrt X/\log X$ 에 점근한다는 추측이다. Sato–Tate 정리는 그 개수가 소수 개수에 비해 밀도 $0$ 이라는 것만 준다.
- 복소곱셈이 없는 곡선에서 $a_p=0$ 인 초특이 소수(supersingular prime)는 밀도가 $0$ 이지만 무한히 많다(Elkies, 1987). $y^2=x^3+x+1$ 에서는 $p=3,17$ 이 그런 소수다.

# 활용

- 추측은 수치 계산에서 나왔다. $a_p$ 의 표는 [SEA 알고리즘](sea-algorithm.md)(Schoof–Elkies–Atkin)이나 [Kedlaya 알고리즘](kedlaya-algorithm.md)으로 만들고, LMFDB(L-functions and Modular Forms Database)의 곡선 자료에 들어 있다.
- 복소곱셈 판정. $a_p=0$ 인 소수의 비율이 $\tfrac12$ 에 가까우면 복소곱셈이 있다.
- Sato–Tate 군 분류. 종수 $2$ 의 아벨 다양체에서는 Sato–Tate 군이 될 수 있는 콤팩트군이 $52$ 개로 분류되어 있다(Fité, Kedlaya, Rotger, Sutherland, 2012).
- 증명에 쓴 $R=T$ 꼴의 모듈러성 올림 정리는 [Langlands 강령](langlands-program.md)의 함자성 문제에 쓰인다.

# 연관 문서

## 선수지식

- [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)

## 더 알아보기

- [Lang–Trotter 추측](lang-trotter.md)

#number_theory #probability #analysis #computation
