# Mock 모듈러 형식과 Zwegers 이론

# 개요

Ramanujan 은 1920 년 Hardy 에게 보낸 마지막 편지에서 함수 열일곱 개를 적고 **mock theta 함수**라 불렀다.

$$
f(q)=\sum_{n\ge 0}\frac{q^{n^2}}{(1+q)^2(1+q^2)^2\cdots(1+q^n)^2}
$$

편지의 주장은 이 함수가 $q$ 가 단위원 위의 점으로 갈 때 모듈러 형식과 같은 종류의 점근 전개를 가지면서도 어떤 모듈러 형식과도 유한한 차이로 일치하지 않는다는 것이었다. 정의도 증명도 없었다.

답은 2002 년 Zwegers 의 박사논문에서 나왔다.

> mock 모듈러 형식 $h$ 에는 **shadow** 라 부르는 모듈러 형식 $g$ 가 딸려 있고, $g$ 로 만든 비정칙 항을 $h$ 에 더하면 변환법칙이 정확히 맞는다.

완성된 $\widehat h=h+(\text{보정항})$ 은 모듈러이지만 정칙이 아니고, 원래의 $h$ 는 정칙이지만 모듈러가 아니다. 정칙성과 모듈러성 중 하나를 포기해야 하고 포기한 양을 재는 것이 shadow 다. $g=0$ 이면 [모듈러 형식](modular-forms.md)으로 돌아온다. 모듈러 형식 공간을 한 겹 넓힌 것이고 넓힌 방향을 [theta 급수](theta-functions.md)가 통제한다.

이 문서는 완성 과정을 Appell–Lerch 합, 부정부호 theta 급수, [Eisenstein 급수](eisenstein-series.md)의 무게 $3/2$ 판본에서 따라간다. 셋 모두 같은 형태의 보정항을 요구하고 그 공통 구조가 조화 Maass 형식이다.

# 직관

## 정칙성과 모듈러성의 맞바꿈

무게 $k$ 와 준위 $N$ 의 정칙 모듈러 형식 공간은 유한차원이고 차원 공식이 명시적이다. 그 드묾이 항등식을 뽑는 힘이면서 이론 바깥에 남는 급수를 많이 만든다.

Zwegers 의 처방은 정칙 + 모듈러를 조화 + 모듈러로 바꾸는 것이다. 무게 $k$ 쌍곡 Laplace 작용소

$$
\Delta_k=-y^2\left(\partial_x^2+\partial_y^2\right)+iky\left(\partial_x+i\partial_y\right),\qquad \tau=x+iy
$$

의 핵에 있는 실해석 함수를 허용한다. 정칙 함수는 $\Delta_k$ 의 핵에 있으므로 진짜 확장이고, 핵의 여분 방향이 shadow 만큼이다.

두 방향을 가르는 도구가 하강 작용소다.

$$
\xi_k=2iy^k\overline{\frac{\partial}{\partial\bar\tau}}
$$

$\xi_k$ 는 무게 $k$ 를 무게 $2-k$ 로 보내고 정칙 함수를 $0$ 으로 보내므로, $\xi_k\widehat h$ 는 $\widehat h$ 가 정칙에서 벗어난 정도만 본다. 그 값이 shadow 다.

$$
\xi_k\widehat h=g
$$

$h$ 는 $\widehat h$ 의 정칙 부분이고 $g$ 는 그 그림자다. 보통 모듈러 형식을 더해도 shadow 가 같으므로 대응은 $h \bmod M_k$ 수준에서 일대일이다.

## 보정항의 출처

무게 $k$ 첨점형식 $g$ 의 **비정칙 Eichler 적분**은 다음이다.

$$
g^*(\tau)=\left(\frac{i}{2\pi}\right)^{k-1}\int_{-\bar\tau}^{i\infty}\frac{\overline{g(-\bar z)}}{(z+\tau)^{k}}\thinspace dz
$$

정칙 Eichler 적분은 하한을 $\tau$ 로 두고 주기 다항식만큼 모듈러성이 깨지는데, 하한을 켤레로 바꾸면 그 깨짐이 사라지고 대신 정칙성이 깨진다.

$g=\sum b_n q^n$ 을 대입하면 보정항이 불완전 감마 함수의 급수가 된다. 무게 $1/2$ mock 에 대응하는 무게 $3/2$ shadow $g=\sum_{n\ge 0} b_n q^{n}$ 에서는 다음 꼴이다.

$$
g^*(\tau)=\sum_{n\gt 0}\overline{b_n}\thinspace n^{-1/2}\thinspace\Gamma\negthinspace\left(-\tfrac12,4\pi n y\right)q^{-n}
$$

$\Gamma(-1/2,\cdot)$ 안에 $y$ 가 있어 $\bar\tau$ 의존성이 생긴다. 계수에 $q^{-n}$ 이 붙으므로 보정항은 정칙 부분과 반대 방향으로 자라고, 둘이 합쳐져야 첨점에서의 증가가 통제된다.

## Ramanujan 이 본 점근

$q\to\zeta$ (단위근) 로 갈 때 $\widehat h$ 는 모듈러이므로 변환법칙에서 점근 전개가 나온다. $h=\widehat h-g^\ast$ 이고 $g^\ast$ 는 그 극한에서 $y^{1-k}$ 정도로 얌전하므로, $h$ 의 점근은 모듈러 형식의 점근과 주요항이 같고 차이는 한 차수 낮은 곳에 나타난다. Ramanujan 은 주요항을 보았고 보정항은 그의 계산 정밀도 아래에 있었다.

# 정의

## 조화 Maass 형식

$\mathrm{SL}_2(\mathbb Z)$ 의 유한지표 부분군 $\Gamma$ 와 $k\in\frac12\mathbb Z$ 를 잡는다. 실해석 함수 $\widehat h:\mathbb H\to\mathbb C$ 가 다음 셋을 만족하면 무게 $k$ 의 **조화 Maass 형식**이다.

1. 모든 $\gamma\in\Gamma$ 에 대해 무게 $k$ 변환법칙을 만족한다(반정수 무게면 theta 곱수를 포함한다).
2. $\Delta_k\widehat h=0$ 이다.
3. 모든 첨점에서 많아야 선형 지수 증가를 한다.

Fourier 전개가 두 조각으로 갈린다.

$$
\widehat h(\tau)=\underbrace{\sum_{n\gg-\infty}c^+(n)q^n}_{\text{정칙 부분 }h}+\underbrace{\sum_{n\lt 0}c^-(n)\thinspace\Gamma(1-k,4\pi|n|y)\thinspace q^{n}}_{\text{비정칙 부분}}
$$

정칙 부분 $h$ 가 **mock 모듈러 형식**, $g=\xi_k\widehat h$ 가 그 **shadow** 다. $g$ 는 무게 $2-k$ 의 모듈러 형식이고 위 전개의 $c^-$ 가 $g$ 의 계수를 켤레한 것으로 결정된다.

## Appell–Lerch 합

$u,v\in\mathbb C$ , $q=e^{2\pi i\tau}$ , $x=e^{2\pi i u}$ , $y=e^{2\pi i v}$ 에 대해 다음으로 둔다.

$$
\mu(u,v;\tau)=\frac{x^{1/2}}{\vartheta(v;\tau)}\sum_{n\in\mathbb Z}\frac{(-1)^n q^{n(n+1)/2}y^n}{1-q^n x}
$$

$\mu$ 는 $u\leftrightarrow v$ 에 대칭이고 준주기 관계를 만족하지만 모듈러 변환에서 어긋난다. Zwegers 는 실해석 함수 $R$ 을 만들어

$$
\widehat\mu(u,v;\tau)=\mu(u,v;\tau)+\tfrac{i}{2}R(u-v;\tau)
$$

가 무게 $1/2$ Jacobi 형식의 변환법칙을 만족함을 보였다.

$$
R(u;\tau)=\sum_{n\in\mathbb Z+\frac12}\left\lbrace\mathrm{sgn}(n)-E\negthinspace\left((n+a)\sqrt{2y}\right)\right\rbrace(-1)^{n-\frac12}e^{-2\pi i n u}q^{-n^2/2}
$$

$E(z)=2\int_0^z e^{-\pi t^2}dt$ 이고 $a=\mathrm{Im}(u)/y$ 다. 보정의 내용은 $\mathrm{sgn}$ 을 오차함수로 매끄럽게 바꾸는 것이다. Ramanujan 의 mock theta 함수가 전부 $\mu$ 의 특수화이므로 이 정리 하나가 열일곱 개를 설명한다.

## 부정부호 theta 급수

부호수 $(r-1,1)$ 의 부정부호 이차형식 $Q$ 에 대해 $\sum_{n\in\mathbb Z^r}q^{Q(n)}$ 은 $Q$ 가 음수가 되는 방향 때문에 발산한다. 격자점을 잘라내는 조건으로 두 벡터 $c_1,c_2$ 를 잡는다.

$$
\Theta_{c_1,c_2}(\tau)=\sum_{n\in\mathbb Z^r}\tfrac12\left\lbrace\mathrm{sgn}(B(c_1,n))-\mathrm{sgn}(B(c_2,n))\right\rbrace q^{Q(n)}
$$

합은 수렴하지만 $\mathrm{sgn}$ 이 모듈러성을 깬다. 여기서도 $\mathrm{sgn}$ 을 오차함수로 바꾸면 모듈러가 회복되고 원래 급수가 그 완성의 정칙 부분이 된다. 앞의 $R$ 과 같은 조작이다.

## Zagier 의 무게 3/2 Eisenstein 급수

판별식 $-n$ 의 이진 이차형식 류수를 무게로 센 **Hurwitz 계급수** $H(n)$ 을 계수로 하는 급수

$$
\mathcal H(\tau)=-\tfrac1{12}+\sum_{n\gt 0}H(n)q^n
$$

는 무게 $3/2$ mock 모듈러 형식이고 shadow 는 무게 $1/2$ theta 급수 $\theta(\tau)=\sum_{n\in\mathbb Z}q^{n^2}$ 의 상수배다. 완성은 다음이고 $\Gamma_0(4)$ 위에서 무게 $3/2$ 로 모듈러다.

$$
\widehat{\mathcal H}(\tau)=\mathcal H(\tau)+\frac{1}{8\sqrt\pi}\sum_{n\ge1}n\thinspace\Gamma\negthinspace\left(-\tfrac12,4\pi n^2y\right)q^{-n^2}+\frac{1}{4\sqrt{\pi y}}
$$

상수항 $1/(4\sqrt{\pi y})$ 는 $\theta$ 의 상수항이 남긴 것이다. 1975 년에 나온 이 예에서 계급수가 Eisenstein 급수 자리에 앉는다.

# 성질

## shadow 가 남기는 자유도

$\xi_k$ 는 조화 Maass 형식 공간에서 무게 $2-k$ 모듈러 형식 공간으로 가는 전사 선형사상이고 핵은 약정칙 모듈러 형식이다.

$$
0\to M^!_k(\Gamma)\to H_k(\Gamma)\xrightarrow{\ \xi_k\ } M_{2-k}(\Gamma)\to 0
$$

$M^!$ 은 첨점에서 극을 허용하는 약정칙 형식이다. shadow 를 지정해도 $M^!_k$ 만큼의 자유가 남으므로 첨점에서의 극 차수를 제한해야 유한차원 문제가 되고, 계산에서는 주요부를 고정해 유일성을 얻는다.

## 계수의 증가와 원법

Bringmann–Ono 는 조화 Maass 형식에 Rademacher 형 수렴 급수를 세워 $f(q)$ 의 계수 $\alpha(n)$ 에 대한 정확 공식을 얻었다.

$$
\alpha(n)=\frac{(-1)^{n+1}}{\sqrt{n-\frac1{24}}}\sum_{c\gt 0}\frac{A_{2c}(n)}{c}\thinspace I_{1/2}\negthinspace\left(\frac{\pi\sqrt{24n-1}}{12c}\right)+O(1)
$$

Andrews–Dragonette 추측이 이 공식의 따름결과로 해결되었다. [분할수](partitions.md) 쪽 원법의 계산이 재사용되고 Kloosterman 합 자리에 다른 곱수계가 들어간다.

## Ramanujan 의 17 개와 차수

Ramanujan 의 mock theta 함수는 전부 무게 $1/2$ 이고 shadow 는 무게 $3/2$ 의 단항 theta 급수다. 함수마다 붙어 있던 차수(order) 3, 5, 7 은 Zwegers 이후 shadow 의 준위로 읽힌다. 차수 $\ell$ 의 mock theta 함수는 준위가 $\ell$ 을 나누는 자리에서 사는 theta 급수를 그림자로 갖는다.

## 곱셈 구조의 부재

정칙 모듈러 형식은 무게에 대해 등급환을 이루지만 mock 쪽은 그렇지 않다. 두 조화 Maass 형식의 곱은 보정항끼리 곱할 때 $\bar\tau$ 에 대해 이차인 항이 생겨 $\Delta_k$ 의 핵을 벗어난다. mock 모듈러 형식은 환 안에서 다루는 대상이 아니라 shadow 를 통해 알려진 모듈러 형식과 이어 붙여 쓰는 대상이다.

## 조화 Maass 형식과 Maass 파형

고전적 Maass 파형은 $\Delta_0$ 의 고유값이 $0$ 이 아닌 고유함수이고 첨점에서 감쇠한다. 조화 Maass 형식은 고유값이 $0$ 이며 첨점에서 지수적으로 자라도 된다. 전자는 [Eisenstein 급수](eisenstein-series.md)와 함께 $L^2$ 스펙트럼을 이루고 후자는 스펙트럼 바깥의 이산적 대상이다.

# 활용

- **[Umbral moonshine](umbral-moonshine.md).** K3 타원 종수를 $N=4$ 지표로 분해하면 짧은 지표 쪽 계수가 mock 모듈러 형식을 이룬다. 23 개 사례 각각에서 shadow 가 Niemeier 격자의 근계 theta 급수이며, 이 점이 괴물 달빛과의 차이다.
- **분할수의 계수 합동.** rank 생성함수의 합동이 mock 모듈러성으로 설명된다. Dyson 의 rank 는 mock 을, crank 는 보통 Jacobi 형식을 준다.
- **블랙홀 엔트로피.** $N=4$ 끈이론에서 단일중심 BPS 상태의 축퇴도가 mock Jacobi 형식의 계수로 나온다. 다중중심 상태를 빼는 조작이 $\mathrm{sgn}$ 을 넣는 자리다.
- **Gross–Zagier 와 높이.** Zagier 의 무게 $3/2$ Eisenstein 급수가 Heegner 점 높이 생성함수의 Eisenstein 부분으로 등장하고, 계급수가 거기서 기하적 의미를 얻는다.

# 연관 문서

## 선수지식

- [theta 급수와 Dedekind eta](theta-functions.md)
- [Eisenstein 급수와 스펙트럼 분해](eisenstein-series.md)

## 더 알아보기

- [Dyson 의 rank 와 crank](dyson-rank-crank.md)
- [Umbral moonshine 과 Mathieu 달빛](umbral-moonshine.md)
- [Borcherds 곱과 특이 theta 올림](borcherds-products.md)

#number_theory #complex_analysis #combinatorics
