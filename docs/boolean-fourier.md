# 부울 함수의 Fourier 해석

# 개요

부울 함수의 Fourier 해석은 $f\colon\lbrace-1,1\rbrace^n\to\lbrace-1,1\rbrace$ 를 군 $(\mathbb Z/2)^n$ 의 지표로 전개해 조합적 성질을 계수로 읽는 이론이다. 이 군의 지표는 부분집합 $S\subseteq[n]$ 마다 하나씩 있다.

$$
\chi_S(x)=\prod_{i\in S}x_i
$$

모든 $f$ 는 $2^n$ 개의 단항식의 실계수 결합으로 유일하게 쓰인다. 계수 $\hat f(S)$ 의 분포가 함수의 조합적 성질을 지고 있다. 어떤 좌표가 얼마나 중요한지(영향력), 입력에 잡음을 섞으면 값이 얼마나 유지되는지(잡음 안정성), 함수가 몇 개의 좌표로 근사되는지가 모두 계수의 이차식이다.

[유한 확률 공간](probability.md)의 언어가 필요하다. 정의역에 균등분포를 주면 $\lbrace\chi_S\rbrace$ 가 정규직교기저가 되고 Parseval 항등식이 $\sum_S\hat f(S)^2=1$ 이 된다. $\hat f(S)^2$ 가 확률분포가 되어 무게가 어느 준위에 실려 있는지를 물을 수 있다.

[PCP 정리](pcp-theorem.md)의 검증자를 설계할 때 필요한 **독재자 검사**, 곧 함수가 한 좌표에만 의존하는지를 상수 개의 질의로 판정하는 절차의 완전성과 건전성이 잡음 안정성의 부등식으로 계산된다. [유일게임 추측](unique-games.md) 아래에서 최대 절단의 최적 근사비를 정하는 **Majority is Stablest** 정리가 이 계통의 정점이다.

# 직관

## 중복차수 1 의 다항식

$x_i\in\lbrace-1,1\rbrace$ 이므로 $x_i^2=1$ 이고 어떤 다변수 다항식도 각 변수의 차수를 $1$ 이하로 줄일 수 있다. 자유도가 $2^n$ 이고 함수도 $2^n$ 개 점에서의 값으로 결정되므로 모든 부울 함수는 중복차수 $1$ 의 다항식으로 유일하게 표현된다.

$$
\mathrm{Dict}_i(x)=x_i,\qquad
\mathrm{XOR}(x)=x_1x_2\cdots x_n,\qquad
\mathrm{AND}_2(x)=\tfrac{-1+x_1+x_2+x_1x_2}{2}
$$

독재자는 준위 $1$ 에 무게를 전부 싣고 XOR 은 준위 $n$ 에 전부 싣는다. 무게가 낮은 준위에 몰리면 함수가 매끄럽고 높은 준위에 몰리면 요동친다.

## 영향력과 준위의 기댓값

좌표 $i$ 의 **영향력**은 $i$ 를 뒤집었을 때 값이 바뀔 확률이다.

$$
\mathrm{Inf}_i[f]=\sum_{S\ni i}\hat f(S)^2,\qquad
\mathbf I[f]=\sum_i\mathrm{Inf}_i[f]=\sum_S|S|\thinspace\hat f(S)^2
$$

총 영향력은 분포 $\hat f(S)^2$ 아래에서 준위 $|S|$ 의 기댓값이므로, 무게가 낮은 준위에 있다는 것과 총 영향력이 작다는 것이 같은 말이다.

## 잡음 연산자

입력 $x$ 의 각 비트를 확률 $\frac{1-\rho}{2}$ 로 독립적으로 뒤집어 $y$ 를 만들면 $\mathbb E[y_i\mid x]=\rho x_i$ 이고 지표에 대해서는 곱으로 풀린다.

$$
\mathbb E[\chi_S(y)\mid x]=\rho^{|S|}\chi_S(x)
$$

잡음 연산자 $T_\rho$ 는 준위 $k$ 의 계수를 $\rho^k$ 배 하는 대각 연산자다. 잡음 안정성이 곧바로 나온다.

$$
\mathrm{Stab}_\rho[f]=\mathbb E[f(x)f(y)]=\sum_S\rho^{|S|}\hat f(S)^2
$$

```mermaid
flowchart LR
  F["부울 함수 f"] --> C["Fourier 무게<br/>W_k = sum_{|S|=k} f-hat(S)^2"]
  C --> I["총 영향력<br/>sum k W_k"]
  C --> S["잡음 안정성<br/>sum rho^k W_k"]
  C --> L["저차 근사<br/>낮은 k 에 몰렸는가"]
  I --> D["독재자 검사"]
  S --> D
  D --> H["근사 불가능성"]
```

높은 준위의 계수는 $\rho^{|S|}$ 로 빠르게 죽는다. 안정성이 크다는 것은 무게가 낮은 준위에 있다는 것이고, $\mathrm{Stab}_\rho=\rho$ 를 달성하는 것은 준위 $1$ 에 무게를 몰아 준 독재자뿐이다. 검사하려는 성질이 부등식의 등호 조건으로 나타나므로 독재자 검사가 가능해진다.

## 근사 불가능성과의 연결

PCP 의 검사자는 증명의 몇 비트만 읽고 판정한다. 증명을 부울 함수로 보면 그 판정은 이 함수가 독재자인지를 묻는 것이다.

- 독재자라면 반드시 통과해야 한다(완전성).
- 좌표 몇 개에 의존하지 않는 함수는 낮은 확률로만 통과해야 한다(건전성).

두 조건을 잡음 안정성으로 쓰면 영향력이 모두 작은 함수의 안정성 상한이 필요하다. Majority is Stablest 가 그 상한을 $1-\frac2\pi\arccos\rho$ 로 주고, 이 값이 Goemans–Williamson 의 [반정부호 계획법](semidefinite-programming.md) 근사비 $0.878\ldots$ 와 일치한다.

# 정의

## Fourier 전개

정의역 $\lbrace-1,1\rbrace^n$ 에 균등분포를 주고 내적을 $\langle f,g\rangle=\mathbb E_x[f(x)g(x)]$ 로 둔다. 지표 $\chi_S(x)=\prod_{i\in S}x_i$ 는 정규직교기저를 이루고

$$
f=\sum_{S\subseteq[n]}\hat f(S)\thinspace\chi_S,\qquad \hat f(S)=\mathbb E_x\bigl[f(x)\chi_S(x)\bigr]
$$

가 유일하게 성립한다. **Parseval 항등식**은 $\sum_S\hat f(S)^2=\mathbb E[f^2]$ 이고, 값이 $\pm1$ 이면 우변이 $1$ 이다. $\hat f(\emptyset)=\mathbb E[f]$ 이므로 분산은 $\sum_{S\ne\emptyset}\hat f(S)^2$ 다. 준위별 무게를 $W^k[f]=\sum_{|S|=k}\hat f(S)^2$ 로 쓴다.

## 영향력과 잡음

$$
\mathrm{Inf}_i[f]=\Pr_x\bigl[f(x)\ne f(x^{\oplus i})\bigr]=\sum_{S\ni i}\hat f(S)^2
$$

$x^{\oplus i}$ 는 $i$ 번째 좌표를 뒤집은 것이다. 잡음 연산자는 다음과 같다.

$$
T_\rho f(x)=\mathbb E_{y\sim N_\rho(x)}[f(y)]=\sum_S\rho^{|S|}\hat f(S)\chi_S,
\qquad
\mathrm{Stab}_\rho[f]=\langle f,T_\rho f\rangle=\sum_S\rho^{|S|}\hat f(S)^2
$$

$y\sim N_\rho(x)$ 는 각 좌표가 독립적으로 확률 $\frac{1+\rho}{2}$ 로 $x_i$ 와 같은 분포다.

## 초축약성

**정리(Bonami–Beckner).** $1\le p\le q$ 이고 $\rho\le\sqrt{(p-1)/(q-1)}$ 이면 모든 $f$ 에 대해

$$
\Vert T_\rho f\Vert_q\le\Vert f\Vert_p
$$

이다. 특히 준위 $k$ 이하의 함수에 대해 $\Vert f\Vert_4\le\sqrt3^{\thinspace k}\Vert f\Vert_2$ 가 나온다. 저차 다항식의 값이 크게 흩어질 수 없다는 뜻이며, 이 분야 정리 대부분의 해석적 엔진이다. KKL 정리의 증명도 이 부등식을 쓴다.

## Majority is Stablest

**정리(Mossel–O'Donnell–Oleszkiewicz, 2010).** $\rho\in[0,1)$ 과 $\varepsilon>0$ 에 대해 $\tau>0$ 이 있어, $\mathbb E[f]=0$ 이고 모든 $i$ 에서 $\mathrm{Inf}_i[f]\le\tau$ 이면

$$
\mathrm{Stab}_\rho[f]\thickspace\le\thickspace 1-\frac2\pi\arccos\rho+\varepsilon
$$

이다. 우변은 $n\to\infty$ 에서 다수결 함수의 안정성의 극한값이다.

*증명.* 불변 원리로 $\pm1$ 입력을 Gauss 입력으로 바꿔도 저차 다항식의 분포가 거의 변하지 않음을 보이고, Gauss 쪽에서 Borell 의 등주부등식을 쓴다. 옮기는 것을 정당화하는 것이 초축약성이다.

# 성질

## 세 기준 함수

| 함수 | 무게 분포 | 총 영향력 | $\mathrm{Stab}_\rho$ |
|---|---|---|---|
| $\mathrm{Dict}_i$ | 준위 $1$ 에 전부 | $1$ | $\rho$ |
| $\mathrm{XOR}_n$ | 준위 $n$ 에 전부 | $n$ | $\rho^n$ |
| $\mathrm{Maj}_n$ | 홀수 준위에 $\Theta(k^{-3/2})$ | $\sim\sqrt{2n/\pi}$ | $\to1-\frac2\pi\arccos\rho$ |

독재자와 XOR 이 두 극단이고 다수결이 그 사이의 기준점이다. 다수결의 총 영향력이 $\sqrt n$ 규모라는 것은 무게가 낮은 준위에 몰려 있되 독재자만큼은 아니라는 뜻이다.

## 주요 정리

- **KKL.** $\mathbb E[f]$ 가 상수에서 떨어져 있으면 어떤 좌표는 영향력이 $\Omega(\log n/n)$ 이상이다. 증명이 초축약성의 첫 큰 응용이었다.
- **Friedgut.** 총 영향력이 $k$ 이면 $f$ 는 $2^{O(k/\varepsilon)}$ 개 좌표에만 의존하는 함수로 $\varepsilon$ 근사된다.
- **FKN.** 무게가 거의 전부 준위 $1$ 에 있으면 $f$ 는 독재자에 가깝다. 독재자 검사의 안정성 보증이 이 형태다.
- **Kindler–Safra.** 무게가 거의 준위 $k$ 이하에 있으면 $f$ 는 차수 $k$ 의 junta 에 가깝다.
- **Arrow 의 정리.** 세 후보 선거에서 순환하지 않는 집계 규칙은 독재자뿐이라는 결론을 Kalai 가 순환 확률의 Fourier 계산으로 얻었다.

## 복잡도에서의 위치

- **독재자 검사.** 완전성은 $\mathrm{Stab}_\rho[\mathrm{Dict}]=\rho$ 에서, 건전성은 Majority is Stablest 에서 나온다.
- **최적 근사비.** [유일게임 추측](unique-games.md) 아래에서 최대 절단의 근사 임계가 $\alpha_{\mathrm{GW}}=0.878\ldots$ 로 확정된다. 같은 틀이 최대 $k$ 절단과 여러 제약 만족 문제에 적용되어, 반정부호 완화의 값이 최적 근사비라는 Raghavendra 의 정리로 이어진다.
- **학습.** 무게가 낮은 준위에 몰린 함수는 낮은 준위 계수만 추정하면 배울 수 있다. Low-Degree 알고리즘과 Goldreich–Levin 이 그 구현이다.
- **회로 하한.** $\mathsf{AC}^0$ 회로가 계산하는 함수는 낮은 준위에 무게가 몰린다는 Linial–Mansour–Nisan 의 정리와, XOR 이 준위 $n$ 에 무게를 전부 싣는다는 사실에서 패리티가 $\mathsf{AC}^0$ 밖임이 따라온다.

# 활용

## 계수의 계산

Walsh–Hadamard 변환으로 $2^n$ 개 계수를 $O(n2^n)$ 에 뽑고, Parseval 과 총 영향력과 잡음 안정성을 계수에서 읽는다.

```python
from math import acos, pi, sqrt

def wht(a):
    """빠른 Walsh-Hadamard 변환. 결과를 2^n 으로 나누면 Fourier 계수가 된다."""
    a = a[:]; N = len(a); h = 1
    while h < N:
        for i in range(0, N, h * 2):
            for j in range(i, i + h):
                a[j], a[j + h] = a[j] + a[j + h], a[j] - a[j + h]
        h *= 2
    return a

def coeffs(f, n):
    """진리표를 받아 f-hat(S) 를 준다. 비트 b 는 (-1)^b, 첨자 S 는 비트마스크."""
    N = 1 << n
    return [c / N for c in wht([f(x, n) for x in range(N)])]

def bit_values(x, n):
    return [1 - 2 * ((x >> i) & 1) for i in range(n)]      # 비트 b -> (-1)^b

majority = lambda x, n: 1 if sum(bit_values(x, n)) > 0 else -1   # n 은 홀수로 쓴다
dictator = lambda x, n: bit_values(x, n)[0]
parity   = lambda x, n: 1 if bin(x).count('1') % 2 == 0 else -1

popcount = lambda S: bin(S).count('1')
parseval = lambda fh: sum(c * c for c in fh)
influence = lambda fh: sum(c * c * popcount(S) for S, c in enumerate(fh))
stability = lambda fh, r: sum(c * c * r ** popcount(S) for S, c in enumerate(fh))

n = 3
for name, f in [("Dict_1", dictator), ("Maj_3", majority), ("XOR_3", parity)]:
    fh = coeffs(f, n)
    support = sorted((popcount(S), round(c, 3)) for S, c in enumerate(fh) if abs(c) > 1e-12)
    print(f"{name:>7} : Parseval={parseval(fh):.3f}  I[f]={influence(fh):.3f}  (준위, 계수)={support}")

for n in (3, 7, 11, 15):
    fh = coeffs(majority, n)
    row = "".join(f"{stability(fh, r):>9.5f}" for r in (0.2, 0.5, 0.8))
    print(f"{n:>3} {influence(fh):>8.4f} {sqrt(2 * n / pi):>12.4f} |" + row)

#  Dict_1 : Parseval=1.000  I[f]=1.000  (준위, 계수)=[(1, 1.0)]
#   Maj_3 : Parseval=1.000  I[f]=1.500  (준위, 계수)=[(1, 0.5), (1, 0.5), (1, 0.5), (3, -0.5)]
#   XOR_3 : Parseval=1.000  I[f]=3.000  (준위, 계수)=[(3, 1.0)]
```

독재자는 준위 $1$ 에 계수 하나를 두고, XOR 은 준위 $n$ 에 계수 하나를 두며, 다수결은 홀수 준위에 퍼져 있되 준위 $1$ 이 지배한다. 총 영향력이 $1$, $n$, $\sqrt{2n/\pi}$ 로 갈린다.

유한 $n$ 에서 $\mathrm{Maj}_n$ 의 안정성은 극한값 $1-\frac2\pi\arccos\rho$ 보다 크고 차이가 단조로 줄어든다. $\mathrm{Maj}_n$ 은 각 좌표의 영향력이 $\Theta(1/\sqrt n)$ 이라 $n$ 이 크면 정리의 조건을 만족하고 극한에서 상한을 달성하므로, 정리는 개선될 수 없다. $\rho$ 가 $1$ 에 가까울수록 수렴이 느린 것은 높은 준위 계수가 $\rho^{|S|}$ 로 충분히 죽지 않기 때문이며, 그 꼬리를 통제하는 것이 초축약성이다.

## 쓰이는 자리

- **근사 불가능성 증명.** 독재자 검사를 설계하고 완전성과 건전성을 Fourier 로 계산하는 절차가 정형화되어 있다.
- **속성 검사.** 선형성 검사(BLR)는 $\Pr[f(x)f(y)=f(xy)]$ 를 Fourier 로 쓰면 $\sum_S\hat f(S)^3$ 이 되어, 통과 확률이 큰 것과 어떤 $\chi_S$ 에 가까운 것이 같은 말이 된다.
- **사회선택이론.** Arrow, Gibbard–Satterthwaite 계열의 정리와 그 정량적 판본이 Fourier 계산으로 증명된다.
- **학습이론과 회로 하한.** 저차 근사 가능성이 학습 알고리즘과 하한 증명을 동시에 낳는다.

[^1]: R. O'Donnell, *Analysis of Boolean Functions*, Cambridge University Press (2014). 이 문서의 정의와 정리 진술은 이 책의 1–11 장을 따른다. 저자 공개본이 있다.

[^2]: E. Mossel, R. O'Donnell, K. Oleszkiewicz, *Noise stability of functions with low influences: invariance and optimality*, Ann. of Math. **171** (2010), 295–341. Majority is Stablest 와 불변 원리.

[^3]: J. Kahn, G. Kalai, N. Linial, *The influence of variables on Boolean functions*, FOCS (1988). KKL 정리와 초축약성의 첫 응용.

[^4]: S. Khot, G. Kindler, E. Mossel, R. O'Donnell, *Optimal inapproximability results for MAX-CUT and other 2-variable CSPs?*, SIAM J. Comput. **37** (2007), 319–357. 유일게임 추측 아래 $0.878\ldots$ 가 최적임.

# 연관 문서

## 선수지식

- [이산 Fourier 변환](fourier.md)
- [유한 확률 공간](probability.md)

## 더 알아보기

- [유일게임 추측과 2-to-2 정리](unique-games.md)

#combinatorics #complexity #analysis #computation
