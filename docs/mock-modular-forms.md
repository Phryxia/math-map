# Mock 모듈러 형식과 Zwegers 이론

# 개요

Ramanujan 은 1920 년 죽기 넉 달 전 Hardy 에게 보낸 마지막 편지에서 함수 열일곱 개를 적고 **mock theta 함수**라 불렀다. 예를 들면 이런 것이다.

$$
f(q)=\sum_{n\ge 0}\frac{q^{n^2}}{(1+q)^2(1+q^2)^2\cdots(1+q^n)^2}
$$

편지의 주장은 이랬다. 이 함수는 $q\to$ 단위원 위의 점으로 갈 때 보통 모듈러 형식과 똑같은 종류의 점근 전개를 갖는다. 그런데 어떤 모듈러 형식과도 유한한 차이를 보이며 일치하지 않는다. 즉 "모듈러 형식처럼 생겼지만 모듈러 형식이 아닌" 것이다. Ramanujan 은 그 뜻을 정의하지 않았고, 편지에는 증명도 없었다.

이 "처럼 생겼다" 가 정확히 무슨 뜻인지가 80 년 동안 열려 있었다. 답은 2002 년 Zwegers 의 박사논문에서 나왔다. 요지는 한 문장으로 줄어든다.

> mock 모듈러 형식 $h$ 에는 **shadow** 라 부르는 모듈러 형식 $g$ 가 딸려 있고, $g$ 로 만든 비정칙 항을 $h$ 에 더하면 변환법칙이 정확히 맞는다.

완성된 $\widehat h=h+(\text{보정항})$ 은 모듈러이지만 정칙이 아니고, 원래의 $h$ 는 정칙이지만 모듈러가 아니다. 정칙성과 모듈러성 중 하나는 반드시 포기해야 하며, 얼마나 포기했는지를 재는 것이 shadow 다. $g=0$ 이면 [모듈러 형식](modular-forms.md)으로 돌아온다. 모듈러 형식 공간을 한 겹 넓힌 것이고, 넓힌 방향이 [theta 급수](theta-functions.md)로 통제된다.

이 문서는 그 완성 과정을 세 가지 원천 — Appell–Lerch 합, 부정부호 theta 급수, [Eisenstein 급수](eisenstein-series.md)의 무게 $3/2$ 판본 — 에서 각각 따라간다. 셋 모두 같은 형태의 보정항을 요구하고, 그 공통 구조가 조화 Maass 형식이다.

# 직관

## 정칙성과 모듈러성의 맞바꿈

무게 $k$, 준위 $N$ 의 정칙 모듈러 형식 공간은 유한차원이다. 차원 공식이 $k$ 와 $N$ 으로 명시적으로 주어지므로, 조건을 만족하는 $q$ 급수는 매우 드물다. 그 드묾이 항등식을 뽑아내는 힘의 원천이지만, 동시에 이론 바깥에 남는 흥미로운 급수를 많이 만든다.

Zwegers 의 처방은 조건 하나를 약화시키는 것이다. "정칙 + 모듈러" 를 "조화 + 모듈러" 로 바꾼다. 무게 $k$ 쌍곡 Laplace 작용소

$$
\Delta_k=-y^2\left(\partial_x^2+\partial_y^2\right)+iky\left(\partial_x+i\partial_y\right),\qquad \tau=x+iy
$$

의 핵에 있는 실해석 함수를 허용한다. 정칙 함수는 자동으로 $\Delta_k$ 의 핵에 있으므로 진짜 확장이다. 핵이 정칙 함수만으로 채워지지 않는 것이 요점이고, 여분의 방향이 정확히 shadow 만큼이다.

두 방향을 갈라 보는 도구가 하강 작용소다.

$$
\xi_k=2iy^k\overline{\frac{\partial}{\partial\bar\tau}}
$$

$\xi_k$ 는 무게 $k$ 인 것을 무게 $2-k$ 인 것으로 보내고, 정칙 함수를 $0$ 으로 보낸다. 그러므로 $\xi_k\widehat h$ 는 $\widehat h$ 가 정칙에서 벗어난 정도만 본다. 그 값이 shadow 다.

$$
\xi_k\widehat h=g
$$

```mermaid
graph LR
  H["mock h<br/>정칙, 모듈러 아님"] -->|"비정칙 Eichler 적분을 더한다"| Hhat["완성 ĥ<br/>모듈러, 정칙 아님"]
  Hhat -->|"ξ_k"| G["shadow g<br/>무게 2-k 의 진짜 모듈러 형식"]
  G -->|"g = 0 이면"| M["보통 모듈러 형식"]
```

$h$ 는 $\widehat h$ 의 정칙 부분이라는 뜻에서 **mock** 이고, $g$ 는 그 그림자다. 하나의 $g$ 에 대해 $h$ 는 유일하지 않다 — 보통 모듈러 형식을 더해도 shadow 가 같다 — 므로 대응은 $h \bmod M_k$ 수준에서만 일대일이다.

## 보정항이 어디서 오는가

무게 $k$ 첨점형식 $g$ 의 **비정칙 Eichler 적분**은 이렇게 생겼다.

$$
g^*(\tau)=\left(\frac{i}{2\pi}\right)^{k-1}\int_{-\bar\tau}^{i\infty}\frac{\overline{g(-\bar z)}}{(z+\tau)^{k}}\,dz
$$

적분의 하한이 $-\bar\tau$ 인 것이 전부다. 정칙 Eichler 적분은 하한을 $\tau$ 로 두고 주기 다항식만큼 모듈러성이 깨지는데, 하한을 켤레로 바꾸면 그 깨짐이 사라지는 대신 정칙성이 깨진다. 결국 같은 데이터를 갖고 무엇을 포기할지만 고른 셈이다.

$g=\sum b_n q^n$ 을 대입하고 적분을 계산하면 보정항이 불완전 감마 함수의 급수로 나온다. 무게 $1/2$ mock 에 대응하는 무게 $3/2$ shadow $g=\sum_{n\ge 0} b_n q^{n}$ 의 경우

$$
g^*(\tau)=\sum_{n> 0}\overline{b_n}\,n^{-1/2}\,\Gamma\!\left(-\tfrac12,4\pi n y\right)q^{-n}
$$

꼴이고, $\Gamma(-1/2,\cdot)$ 안에 $y$ 가 들어 있어 $\bar\tau$ 의존성이 생긴다. 계수에 $q^{-n}$ 이 붙는 것에 주의한다. 보정항은 정칙 부분과 반대 방향으로 자라는 조각이며, 둘이 합쳐져야 첨점에서의 증가가 통제된다.

## 왜 Ramanujan 은 점근만 보았나

$q\to\zeta$ (단위근) 로 갈 때 $\widehat h$ 는 모듈러이므로 변환법칙에서 곧바로 점근 전개가 나온다. $h=\widehat h-g^*$ 이고 $g^*$ 는 그 극한에서 $y^{1-k}$ 정도로 얌전하다. 그러므로 $h$ 의 점근은 모듈러 형식의 점근과 주요항이 같고, 차이는 한 차수 낮은 곳에서 나타난다. Ramanujan 이 "모듈러 형식처럼 생겼는데 어떤 모듈러 형식과도 일치하지 않는다" 고 말할 수 있었던 이유가 이것이다. 그는 주요항을 본 것이고, 보정항은 그가 계산하던 정밀도 아래에 숨어 있었다.

# 정의

## 조화 Maass 형식

$\mathrm{SL}_2(\mathbb Z)$ 의 유한지표 부분군 $\Gamma$ 와 $k\in\frac12\mathbb Z$ 를 잡는다. 실해석 함수 $\widehat h:\mathbb H\to\mathbb C$ 가 다음 셋을 만족하면 무게 $k$ 의 **조화 Maass 형식**이다.

1. 모든 $\gamma\in\Gamma$ 에 대해 무게 $k$ 변환법칙을 만족한다(반정수 무게면 theta 곱수를 포함한다).
2. $\Delta_k\widehat h=0$.
3. 모든 첨점에서 많아야 선형 지수 증가를 한다.

이때 Fourier 전개가 두 조각으로 갈린다.

$$
\widehat h(\tau)=\underbrace{\sum_{n\gg-\infty}c^+(n)q^n}_{\text{정칙 부분 }h}+\underbrace{\sum_{n<0}c^-(n)\,\Gamma(1-k,4\pi|n|y)\,q^{n}}_{\text{비정칙 부분}}
$$

정칙 부분 $h$ 를 **mock 모듈러 형식**, $g=\xi_k\widehat h$ 를 그 **shadow** 라 한다. $g$ 는 무게 $2-k$ 의 (약정칙이 아닌 진짜) 모듈러 형식이고, 위 전개의 $c^-$ 가 $g$ 의 계수를 켤레한 것으로 결정된다.

## Appell–Lerch 합

Zwegers 가 다룬 첫 번째 원천이다. $u,v\in\mathbb C$, $q=e^{2\pi i\tau}$, $x=e^{2\pi i u}$, $y=e^{2\pi i v}$ 에 대해

$$
\mu(u,v;\tau)=\frac{x^{1/2}}{\vartheta(v;\tau)}\sum_{n\in\mathbb Z}\frac{(-1)^n q^{n(n+1)/2}y^n}{1-q^n x}
$$

로 둔다. $\mu$ 는 $u\leftrightarrow v$ 에 대칭이고 준주기 관계를 만족하지만, 모듈러 변환에서는 어긋난다. Zwegers 는 명시적 실해석 함수 $R$ 을 만들어

$$
\widehat\mu(u,v;\tau)=\mu(u,v;\tau)+\tfrac{i}{2}R(u-v;\tau)
$$

가 무게 $1/2$ Jacobi 형식의 변환법칙을 만족함을 보였다. 여기서

$$
R(u;\tau)=\sum_{n\in\mathbb Z+\frac12}\left\{\operatorname{sgn}(n)-E\!\left((n+a)\sqrt{2y}\right)\right\}(-1)^{n-\frac12}e^{-2\pi i n u}q^{-n^2/2}
$$

이고 $E(z)=2\int_0^z e^{-\pi t^2}dt$, $a=\operatorname{Im}(u)/y$ 다. $\operatorname{sgn}$ 을 오차함수로 매끄럽게 바꾸는 것이 보정의 정체다. Ramanujan 의 mock theta 함수는 전부 $\mu$ 의 특수화로 쓰이므로, 이 한 정리가 열일곱 개를 한꺼번에 설명한다.

## 부정부호 theta 급수

두 번째 원천이다. 부호수 $(r-1,1)$ 의 부정부호 이차형식 $Q$ 에 대해 $\sum_{n\in\mathbb Z^r}q^{Q(n)}$ 은 발산한다. 양의정부호 격자에서와 달리 $Q$ 가 음수가 되는 방향이 있기 때문이다. 수렴하게 만들려면 격자점을 잘라내야 하고, 잘라내는 조건으로 두 벡터 $c_1,c_2$ 를 잡아

$$
\Theta_{c_1,c_2}(\tau)=\sum_{n\in\mathbb Z^r}\tfrac12\left\{\operatorname{sgn}(B(c_1,n))-\operatorname{sgn}(B(c_2,n))\right\}q^{Q(n)}
$$

로 둔다. 합은 수렴하지만 $\operatorname{sgn}$ 이 들어가 모듈러성이 깨진다. 여기서도 $\operatorname{sgn}$ 을 오차함수로 바꾸면 모듈러가 회복되고, 원래 급수는 그 완성의 정칙 부분, 곧 mock 모듈러 형식이 된다.

앞의 $R$ 과 같은 구조임을 눈여겨본다. 두 원천 모두 "부호 함수를 오차함수로 매끄럽게 만든다" 는 한 가지 조작으로 설명된다.

## Zagier 의 무게 3/2 Eisenstein 급수

세 번째 원천이자 역사적으로 가장 이른 예다(1975). 판별식 $-n$ 의 이진 이차형식 류수를 무게로 센 **Hurwitz 계급수** $H(n)$ 을 계수로 하는 급수

$$
\mathcal H(\tau)=-\tfrac1{12}+\sum_{n>0}H(n)q^n
$$

는 무게 $3/2$ mock 모듈러 형식이고, shadow 는 무게 $1/2$ theta 급수 $\theta(\tau)=\sum_{n\in\mathbb Z}q^{n^2}$ 의 상수배다. 완성은

$$
\widehat{\mathcal H}(\tau)=\mathcal H(\tau)+\frac{1}{8\sqrt\pi}\sum_{n\ge1}n\,\Gamma\!\left(-\tfrac12,4\pi n^2y\right)q^{-n^2}+\frac{1}{4\sqrt{\pi y}}
$$

이고 이것이 무게 $3/2$ 로 $\Gamma_0(4)$ 위에서 모듈러다. 상수항 $1/(4\sqrt{\pi y})$ 는 $\theta$ 의 상수항이 남긴 흔적이다. 계급수가 Eisenstein 급수 자리에 앉는다는 점에서, 이 예는 mock 현상이 예외적 기교가 아니라 산술의 기본 대상에서 이미 일어나고 있음을 보여 준다.

# 성질

## shadow 가 결정하는 것과 결정하지 않는 것

$\xi_k$ 는 조화 Maass 형식 공간에서 무게 $2-k$ 모듈러 형식 공간으로 가는 전사 선형사상이고, 핵은 약정칙 모듈러 형식이다. 그러므로 완전열

$$
0\to M^!_k(\Gamma)\to H_k(\Gamma)\xrightarrow{\ \xi_k\ } M_{2-k}(\Gamma)\to 0
$$

이 성립한다. 여기서 $M^!$ 은 첨점에서 극을 허용하는 약정칙 형식이다. mock 모듈러 형식은 shadow 를 지정해도 $M^!_k$ 만큼의 자유가 남고, 첨점에서의 극 차수를 제한해야 유한차원 문제가 된다. 실제 계산에서는 주요부(principal part)를 고정해 유일성을 얻는 방식을 쓴다.

## 계수의 증가와 원법

정칙 모듈러 형식 계수의 크기가 무게로 통제되듯, mock 쪽에도 원법이 적용된다. 다만 보정항 때문에 주항이 두 종류로 갈린다. Bringmann–Ono 는 조화 Maass 형식에 Rademacher 형 수렴 급수를 세워, 예컨대 $f(q)$ 의 계수 $\alpha(n)$ 에 대해

$$
\alpha(n)=\frac{(-1)^{n+1}}{\sqrt{n-\frac1{24}}}\sum_{c>0}\frac{A_{2c}(n)}{c}\,I_{1/2}\!\left(\frac{\pi\sqrt{24n-1}}{12c}\right)+O(1)
$$

꼴의 정확 공식을 얻었다. Andrews–Dragonette 추측이 이 공식의 따름결과로 해결되었다. [분할수](partitions.md) 쪽 원법의 계산이 그대로 재사용되며, 차이는 Kloosterman 합 자리에 다른 곱수계가 들어간다는 것뿐이다.

## Ramanujan 의 17 개는 어느 무게인가

Ramanujan 의 mock theta 함수는 전부 무게 $1/2$ 이고 shadow 는 무게 $3/2$ 의 단항 theta 급수다. 함수마다 "차수(order)" 3, 5, 7 이 붙어 있었는데 — 그도 그 뜻을 정의하지 않았다 — Zwegers 이후에는 shadow 의 준위로 읽힌다. 차수 $\ell$ 의 mock theta 함수는 준위가 $\ell$ 을 나누는 자리에서 사는 theta 급수를 그림자로 갖는다. 80 년 묵은 용어가 정의를 얻은 셈이다.

## 곱셈 구조는 없다

정칙 모듈러 형식은 무게에 대해 등급환을 이루지만 mock 쪽은 그렇지 않다. 두 조화 Maass 형식의 곱은 $\Delta_k$ 의 핵에 있지 않다. 보정항끼리 곱하면 $\bar\tau$ 에 대해 이차인 항이 생기기 때문이다. 이 실패가 이론의 사용법을 규정한다. mock 모듈러 형식은 환 안에서 다루는 대상이 아니라, shadow 를 통해 알려진 모듈러 형식과 이어 붙여 쓰는 대상이다.

## 조화 Maass 형식과 Maass 파형은 다르다

이름이 비슷하지만 다른 것이다. 고전적 Maass 파형은 $\Delta_0$ 의 고유값이 $0$ 이 아닌 고유함수이고 첨점에서 감쇠한다. 조화 Maass 형식은 고유값이 $0$ 이며 첨점에서 지수적으로 자라도 된다. 전자는 [Eisenstein 급수](eisenstein-series.md)와 함께 $L^2$ 스펙트럼을 이루고, 후자는 스펙트럼 바깥의 이산적 대상이다. 두 이론이 만나는 지점은 있지만 같은 공간에 사는 것은 아니다.

# 활용

## Zagier Eisenstein 급수를 수치로 확인한다

Hurwitz 계급수를 직접 세고, $\mathcal H$ 가 혼자서는 모듈러가 아니지만 계수들이 계급수 관계식(Eichler, Hurwitz–Kronecker)을 만족함을 확인한다. 관계식

$$
\sum_{r\in\mathbb Z}H(4n-r^2)+2\lambda_1(n)=2\sigma_1(n)
$$

는 $\mathcal H$ 의 무게 $3/2$ mock 성질이 무게 $2$ 쪽으로 내려온 흔적이다. 여기서 $\lambda_1(n)=\frac12\sum_{d\mid n}\min(d,n/d)$ 다.

```python
from math import isqrt
from fractions import Fraction

def hurwitz(N):
    """H(N): 판별식 -N 의 Hurwitz-Kronecker 계급수. 축약 이진 이차형식을 직접 센다."""
    if N == 0:
        return Fraction(-1, 12)
    if N < 0 or N % 4 in (1, 2):       # 판별식이 될 수 없는 잉여류
        return Fraction(0)
    total = Fraction(0)
    b = N % 2                          # b^2 + N = 4ac 이므로 b 의 홀짝이 N 과 같다
    while b * b <= N:
        m = (b * b + N) // 4           # ac = m
        for a in range(max(b, 1), isqrt(m) + 1):   # 축약 조건 |b| <= a <= c
            if m % a:
                continue
            c = m // a
            if a == b == c:
                w = Fraction(1, 3)     # x^2+xy+y^2 자리, 자기동형군 위수 6
            elif b == 0 and a == c:
                w = Fraction(1, 2)     # x^2+y^2 자리, 자기동형군 위수 4
            else:
                w = Fraction(1)
            mult = 1 if (b == 0 or a == b or a == c) else 2   # b<0 짝이 따로 있는가
            total += mult * w
        b += 2
    return total

def sigma1(n):
    return sum(d for d in range(1, n + 1) if n % d == 0)

def lambda1(n):
    return Fraction(sum(min(d, n // d) for d in range(1, n + 1) if n % d == 0), 2)

print("n   H(n)")
for n in range(0, 24):
    if hurwitz(n):
        print(f"{n:3d} {str(hurwitz(n)):>6}")

print("\nEichler 관계식  Σ_r H(4n-r^2) + 2λ1(n) == 2σ1(n)")
for n in range(1, 13):
    R = 2 * isqrt(n) + 2
    lhs = sum(hurwitz(4 * n - r * r) for r in range(-R, R + 1)) + 2 * lambda1(n)
    rhs = 2 * sigma1(n)
    print(f"n={n:2d}  좌변 {str(lhs):>5}   우변 {rhs:>4}   {'OK' if lhs == rhs else 'MISMATCH'}")

# n   H(n)
#   0  -1/12
#   3    1/3
#   4    1/2
#   7      1
#  12    4/3
#  16    3/2
#  23      3
#
# Eichler 관계식  Σ_r H(4n-r^2) + 2λ1(n) == 2σ1(n)
# n= 1  좌변     2   우변    2   OK
# n= 5  좌변    12   우변   12   OK
# n=12  좌변    56   우변   56   OK
```

$H(3)=1/3$ 과 $H(4)=1/2$ 의 분모는 자기동형이 큰 형식(육각 격자와 정사각 격자)에서 온 것이고, $\mathcal H$ 의 상수항 $-1/12$ 도 같은 종류의 보정이다. 이 분수들이 있어야 관계식이 정수로 닫힌다는 점이 중요하다. 계급수를 순진하게 정수로 세면 $n=1$ 에서부터 어긋난다.

## 어디에 쓰이는가

- **[Umbral moonshine](umbral-moonshine.md)**: K3 타원 종수를 $N=4$ 지표로 분해하면 짧은 지표 쪽 계수가 mock 모듈러 형식을 이룬다. 23 개 사례 각각에서 shadow 가 Niemeier 격자의 근계 theta 급수다. mock 이라는 사실 자체가 이 달빛을 괴물 달빛과 구별하는 특징이다.
- **분할수의 계수 합동**: Ramanujan 합동 $p(5n+4)\equiv0\pmod5$ 의 사촌들, 특히 rank 생성함수의 합동은 mock 모듈러성으로 설명된다. Dyson 의 rank 는 mock 을, crank 는 보통 Jacobi 형식을 준다.
- **블랙홀 엔트로피 세기**: $N=4$ 끈이론에서 단일중심 BPS 상태의 축퇴도가 mock Jacobi 형식의 계수로 나온다. 다중중심 상태를 빼는 조작이 정확히 $\operatorname{sgn}$ 을 넣는 자리이고, 그래서 mock 이 나타난다.
- **Gross–Zagier 와 높이**: Zagier 의 무게 $3/2$ Eisenstein 급수는 Heegner 점 높이 생성함수의 Eisenstein 부분으로 등장한다. 계급수가 여기서 기하적 의미를 얻는다.

[^1]: S. Zwegers, *Mock Theta Functions*, Utrecht 박사논문, 2002. 세 원천(Appell–Lerch, 부정부호 theta, Eisenstein)을 모두 다룬 원전.
[^2]: D. Zagier, *Nombres de classes et formes modulaires de poids 3/2*, C. R. Acad. Sci. Paris, 1975. 계급수 생성함수가 mock 임을 최초로 계산한 논문.
[^3]: K. Bringmann, K. Ono, *The f(q) mock theta function conjecture and partition ranks*, Invent. Math. 165 (2006). Andrews–Dragonette 추측 해결.

# 연관 문서

## 선수지식

- [theta 급수와 Dedekind eta](theta-functions.md)
- [Eisenstein 급수와 스펙트럼 분해](eisenstein-series.md)

## 더 알아보기

- [Dyson 의 rank 와 crank](dyson-rank-crank.md)
- [Umbral moonshine 과 Mathieu 달빛](umbral-moonshine.md)

#number_theory #complex_analysis #combinatorics
