# Linnik 정리

# 개요

**Linnik 정리(Linnik's theorem)** 는 등차수열의 가장 작은 소수가 법의 거듭제곱 이하라는 정리다. 절대상수 $C$, $L$ 이 있어, $\gcd(a,q)=1$ 이면 $p\equiv a\pmod q$ 인 소수 $p$ 가 $Cq^L$ 이하에 존재한다. Linnik 이 1944 년에 증명했다[^1].

[Siegel–Walfisz 정리](siegel-walfisz.md)는 법이 $\log x$ 의 거듭제곱 이하일 때만 소수의 개수를 준다. Linnik 정리는 $x$ 가 $q$ 의 거듭제곱인 범위에서 개수의 하한을 주고, 그러려면 [Siegel 영점](siegel-zeros.md)을 따로 처리해야 한다.

# 직관

$q$ 와 서로소인 $a$ 를 고르고, $p\equiv a\pmod q$ 인 소수를 찾을 때까지 $x$ 를 얼마나 키워야 하는지 묻는다. Siegel–Walfisz 정리를 쓰면 $q\le(\log x)^A$ 일 때 $\psi(x;q,a)\sim x/\varphi(q)$ 이므로 $x\approx\exp(q^{1/A})$ 이면 소수가 있다. 이 상한은 $q$ 에 대해 지수적으로 크다.

$\psi(x;q,a)$ 는 지표마다 $L(s,\chi)$ 의 영점 $\rho=\beta+i\gamma$ 에서 나오는 항으로 쓰인다.

$$
\psi(x;q,a)=\frac{x}{\varphi(q)}-\frac1{\varphi(q)}\sum_{\chi}\overline{\chi}(a)\sum_{\rho}\frac{x^\rho}{\rho}+(\text{작은 항})
$$

$x=q^L$ 로 두고 영점 없는 영역 $\beta\le 1-c/\log q$ 를 쓰면 영점 하나의 항은 주항의 $x^{\beta-1}\le e^{-cL}$ 배 이하다. 그런데 높이 $1$ 이하의 영점만 세어도 지표 $\varphi(q)$ 개에 걸쳐 $\varphi(q)\log q$ 개쯤 있어서, 항마다 $e^{-cL}$ 로 막으면 그 합이 주항보다 작아지는 데 $L\gg\log q$ 가 필요하다.

그래서 $1$ 근처의 영점이 몇 개인지를 센다. 실수부가 $1-\lambda/\log q$ 이상인 영점의 개수가 $e^{c'\lambda}$ 이하이면, 영점의 합은 $\lambda$ 에 대한 $e^{-L\lambda}\thinspace d(e^{c'\lambda})$ 의 적분으로 막히고 $L\gt c'$ 에서 주항보다 작아진다. 남는 것은 $\beta$ 가 $1$ 에 너무 가까운 영점 하나이고, 그것이 Siegel 영점이다.

# 정의

## 등차수열의 가장 작은 소수

$\gcd(a,q)=1$ 에 대해 $p\equiv a\pmod q$ 인 가장 작은 소수를 $p(q,a)$ 라 쓰고, $P(q)=\max_a p(q,a)$ 로 둔다. Linnik 정리는 다음 진술이다.

$$
P(q)\le Cq^L
$$

이 부등식이 성립하는 $L$ 의 하한을 **Linnik 상수(Linnik's constant)** 라 한다. 잉여류 $\varphi(q)$ 개마다 서로 다른 소수가 필요하므로 $P(q)\ge\varphi(q)$ 이고, Linnik 상수는 $1$ 이상이다.

## 로그 없는 영점 밀도 추정

법 $q$ 의 모든 지표 $\chi$ 에 걸쳐, $L(s,\chi)$ 의 영점 가운데 $\beta\ge\alpha$, $\vert\gamma\vert\le T$ 인 것의 개수를 $N(\alpha,T,q)$ 라 한다. **로그 없는 영점 밀도 추정(log-free zero density estimate)** 은 절대상수 $c'$ 에 대한 다음 부등식이다[^2].

$$
N(\alpha,T,q)\ll(qT)^{c'(1-\alpha)}\qquad(T\ge 1)
$$

$\alpha$ 가 $1$ 에 가까우면 오른쪽은 유계다. 같은 꼴의 추정에 $\log(qT)$ 의 거듭제곱 인수가 붙으면 직관 절의 적분이 $L$ 을 키워도 작아지지 않으므로, 로그 인수가 없다는 것이 Linnik 정리에 필요하다.

# 성질

## 증명의 요지

증명은 세 가지를 사용한다[^2].

- 영점 없는 영역. Siegel 영점 $\beta_1$ 하나를 빼면 $\beta\le 1-c/\log(q(\vert\gamma\vert+2))$ 다.
- 로그 없는 영점 밀도 추정. $1$ 근처 영점의 합을 주항보다 작게 만든다.
- Siegel 영점 문서의 Deuring–Heilbronn 현상. $\beta_1$ 이 있으면 다른 영점은 $1-\beta_1$ 이 작을수록 $1$ 에서 더 멀리 밀려난다.

$x=q^L$ 에서 주항과 Siegel 영점의 항을 합치면 $\chi_1(a)=1$ 인 잉여류에서 $(x-x^{\beta_1})/\varphi(q)$ 가 된다. 이 값은 $x(1-\beta_1)\log x/\varphi(q)$ 정도이고, $1-\beta_1\gg q^{-1/2}\log^{-2}q$ 라는 유효한 상계 덕분에 $q$ 의 거듭제곱만큼만 줄어든다. $1-\beta_1$ 이 작을수록 Deuring–Heilbronn 현상으로 나머지 영점의 합도 작아지므로, 두 경우 모두 $L$ 을 충분히 크게 잡으면 $\psi(x;q,a)\gt 0$ 이 된다. 모든 상수가 계산되므로 $C$ 와 $L$ 은 유효하다.

## Linnik 상수의 상한

$L$ 의 값은 영점 밀도 추정과 Deuring–Heilbronn 현상의 상수를 수치로 다듬어 내려왔다.

| 연도 | 저자          | 상한 |
| ---- | ------------- | ---- |
| 1957 | Pan Chengdong | 5448 |
| 1965 | Chen Jingrun  | 777  |
| 1992 | Heath-Brown   | 5.5  |

Heath-Brown 의 $5.5$ 는 영점 없는 영역과 Deuring–Heilbronn 현상의 상수를 수치로 계산해 얻었다[^3].

## 조건부 결과

일반화된 [Riemann 가설](riemann-hypothesis.md)이 성립하면 $P(q)\ll_\varepsilon q^{2+\varepsilon}$ 이다[^2]. 영점의 실수부가 모두 $1/2$ 이면 영점 하나의 항이 $x^{1/2}\log^2 q$ 정도이고, 이것이 주항 $x/\varphi(q)$ 보다 작아지는 $x$ 가 $q^{2+\varepsilon}$ 이다. Chowla 추측(Chowla's conjecture)은 $P(q)\ll_\varepsilon q^{1+\varepsilon}$ 이라는 진술이다.

# 활용

- [Chebotarev 밀도 정리](chebotarev.md)의 유효한 판본에서, Lagarias, Montgomery, Odlyzko 는 같은 방법으로 주어진 Frobenius 류에 속하는 가장 작은 소 아이디얼의 노름을 판별식의 거듭제곱으로 막았다[^4].
- 법 $q$ 를 정하고 $p\equiv 1\pmod q$ 인 소수를 찾는 계산은 $kq+1$ 을 $k=1,2,\dots$ 차례로 소수 판정한다. Linnik 정리가 $k\le Cq^{L-1}$ 에서 끝난다는 것을 보장하므로, 이 탐색은 $q$ 의 다항식 횟수 안에 끝난다.

[^1]: Yu. V. Linnik, "On the least prime in an arithmetic progression. I. The basic theorem", Mat. Sb. 15(57) (1944), 139–178. "II. The Deuring–Heilbronn phenomenon", 같은 권, 347–368.
[^2]: H. Iwaniec, E. Kowalski, *Analytic Number Theory*, AMS Colloquium Publications 53, 2004, 18 장.
[^3]: D. R. Heath-Brown, "Zero-free regions for Dirichlet L-functions, and the least prime in an arithmetic progression", Proceedings of the London Mathematical Society (3) 64 (1992), 265–338.
[^4]: J. C. Lagarias, H. L. Montgomery, A. M. Odlyzko, "A bound for the least prime ideal in the Chebotarev density theorem", Inventiones Mathematicae 54 (1979), 271–296.

# 연관 문서

## 선수지식

- [Siegel 영점](siegel-zeros.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis
