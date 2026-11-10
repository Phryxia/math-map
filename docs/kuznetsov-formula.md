# Kuznetsov 공식

# 개요

**Kuznetsov 공식(Kuznetsov formula)** 은 [Kloosterman 합](kloosterman-sums.md)들의 가중 합을 [모듈러 형식](modular-forms.md)의 Fourier 계수들의 합으로 바꿔 쓰는 등식이다. 소수 $c$ 에 대한 Kloosterman 합 $K(m,n;c)$ 는 크기가 $1$ 인 [복소수](complex-numbers.md) $c-1$ 개를 더한 것이지만, 그 크기는 $2\sqrt c$ 를 넘지 않는다. 여러 $c$ 에 걸친 합에서 이보다 큰 상쇄를 보이려면 합을 하나씩 추정해서는 부족하므로, Kuznetsov 공식은 그 합을 스펙트럼 쪽의 합으로 옮겨 다른 쪽의 추정으로 바꾼다.

# 직관

$\sum_{c\le C}c^{-1}K(m,n;c)$ 의 크기를 재려 한다. $m=n=1$ 이면 $c=1,2,3,4,5$ 에서 $K(1,1;c)$ 는 $1$, $1$, $-1$, $-2$, $0.38$ 쯤이고, 부호와 크기가 $c$ 마다 바뀐다. Weil 상계는 항마다 $2\sqrt c$ 쯤의 크기를 주므로 각 항이 $c^{-1/2}$ 크기이고 합이 $C^{1/2}$ 크기로 제한된다. 항마다의 상계를 더하는 방법에는 부호가 바뀌면서 생기는 상쇄가 들어오지 않는다.

그래서 합 전체를 다른 양으로 바꾼다. 상반평면의 모듈러 군에서 $m$ 번째 Poincaré 급수를 만들고 그 $n$ 번째 Fourier 계수를 두 방법으로 계산한다. 급수의 정의에서 항을 모아 전개하면 분모 $c$ 마다 $K(m,n;c)$ 가 나와 왼변의 합이 된다.

같은 함수를 Laplace 작용소의 고유함수로 전개하면 [Maass 형식](maass-forms.md)의 계수와 [Eisenstein 급수](eisenstein-series.md) 쪽 적분이 나온다. 두 계산이 한 수를 주므로 등식이 생기고, 스펙트럼 쪽에서 얻는 상계가 왼변의 상쇄를 대신한다.

# 정의

## 스펙트럼 자료

$\Gamma=\mathrm{SL}\_2(\mathbb Z)$ 라 하고 $\Gamma$ 에 대한 Maass 첨점 형식의 정규직교기저를 $\lbrace u_j\rbrace\_{j\ge1}$ 라 한다. $u_j$ 의 Laplace [고윳값](eigenvalues.md)을 $\lambda_j=\frac14+t_j^2$, Fourier 계수를 $\rho_j(n)$ 이라 쓴다. $\mathrm{SL}\_2(\mathbb Z)$ 의 첫 Maass 첨점형식은 $t_1\approx9.534$, $\lambda_1\approx91.1$ 이다. 연속 스펙트럼은 Eisenstein 급수 $E(z,\frac12+it)$ 가 채우고 그 Fourier 계수는 제수 함수 $\sigma_{it}$ 와 [Riemann zeta 함수](riemann-zeta.md)로 적힌다.

## Bessel 변환

$\varphi$ 를 $(0,\infty)$ 에서 매끄럽고 원점과 무한에서 충분히 빨리 작아지는 함수라 한다. $\varphi$ 의 **Bessel 변환(Bessel transform)** 은 다음 함수다. $J_\nu$ 는 제1종 [Bessel 함수](bessel-functions.md)다.

$$
\tilde\varphi(t)=\frac{\pi i}{2\sinh(\pi t)}\int_0^\infty\big(J_{2it}(x)-J_{-2it}(x)\big)\thinspace\varphi(x)\thinspace\frac{dx}{x}
$$

$\tilde\varphi$ 는 $t$ 의 짝함수다.

## 공식

Kuznetsov 가 1980 년에 증명한 다음 등식을 **Kuznetsov 공식** 이라 한다[^1]. $m,n$ 을 양의 정수라 할 때

$$
\sum_{c\ge1}\frac{1}{c}K(m,n;c)\thinspace\varphi\left(\frac{4\pi\sqrt{mn}}{c}\right)=\mathcal D(m,n;\varphi)+\mathcal C(m,n;\varphi)+\mathcal H(m,n;\varphi)
$$

가 성립한다. 이산 쪽 항은

$$
\mathcal D(m,n;\varphi)=\sum_{j\ge1}\frac{\overline{\rho_j(m)}\thinspace\rho_j(n)}{\cosh(\pi t_j)}\thinspace\tilde\varphi(t_j)
$$

이고 연속 쪽 항 $\mathcal C$ 는 같은 꼴의 적분으로 $\sigma_{it}(m)$ 과 $\sigma_{it}(n)$ 의 곱을 $\vert\zeta(1+2it)\vert^2$ 로 나눈 것을 $\tilde\varphi(t)$ 에 대해 $t$ 전체에서 적분한 값이다. 정칙 쪽 항 $\mathcal H$ 는 무게 $k$ 의 정칙 첨점형식의 Fourier 계수의 곱에 $J_{k-1}$ 로 만든 변환을 건 합이고, 이 부분만 떼어 낸 등식이 [Petersson 공식](petersson-formula.md)이다. 정규화 상수는 $u_j$ 의 규격과 $\tilde\varphi$ 의 정의에 따라 달라진다.

# 성질

## 두 방향

같은 등식을 두 방향으로 읽는다. 왼변을 목표로 두면 스펙트럼 쪽 상계가 Kloosterman 합의 합의 상계를 준다. 오른변을 목표로 두면 $\varphi$ 를 좁게 잡아 왼변의 항 수를 줄여 Fourier 계수의 평균을 얻는다. 뒤쪽이 [큰 체](large-sieve.md) 부등식(large sieve inequality)의 자기동형 형식 판본이고, $\rho_j(n)$ 의 개별 상계가 없는 자리에서 평균 상계를 쓰게 한다.

## Selberg 대각합 공식과의 차이

[Selberg 대각합 공식](selberg-trace-formula.md)은 고윳값 $t_j$ 의 합을 쌍곡 류의 길이와 잇고 Fourier 계수를 보지 않는다. Kuznetsov 공식은 고윳값과 Fourier 계수의 곱을 한꺼번에 다루고 기하 쪽에 Kloosterman 합이 온다. 두 공식은 같은 스펙트럼 분해에서 시험 함수를 다르게 걸어 얻는다.

## 역방향 공식

스펙트럼 쪽에서 출발해 Kloosterman 합 쪽으로 가는 등식도 성립한다. 이쪽을 Kuznetsov 역공식(Kuznetsov inverse formula)이라 하고, Bessel 변환의 역변환이 $J$ 대신 $K$ 와 $Y$ 꼴의 Bessel 함수를 쓴다. 두 등식을 이어 붙이면 Bessel 함수 사이의 적분 변환 항등식이 나온다.

## 예외 고윳값

$\lambda_j\lt\frac14$ 인 고윳값이 있으면 $t_j$ 가 순허수가 되고 $\tilde\varphi(t_j)$ 가 지수적으로 커져 그 항이 다른 항을 압도한다. Selberg 고윳값 추측(Selberg eigenvalue conjecture)은 합동 부분군에서 $\lambda_1\ge\frac14$ 라고 진술한다. $\mathrm{SL}\_2(\mathbb Z)$ 자신에서는 $\lambda_1\approx91.1$ 이어서 예외 고윳값이 없으므로 이 자리에서 공식을 쓸 때 추가 조건이 필요하지 않다.

## Linnik 추측 쪽 결과

Linnik 추측(Linnik conjecture)은 $\sum_{c\le C}c^{-1}K(m,n;c)$ 가 모든 $\varepsilon\gt 0$ 에서 $O(C^\varepsilon)$ 라고 진술한다. Kuznetsov 공식에 스펙트럼 쪽 평균 상계를 넣으면 지수 $\varepsilon$ 까지는 못 가도 Weil 상계를 항마다 쓰는 것보다 작은 상계가 나온다[^2].

# 활용

- 이동 [합성곱](convolution.md) 합(shifted convolution sum). $\sum_{n\le N}a(n)\thinspace\overline{a(n+h)}$ 꼴의 합에서 $a$ 가 첨점 형식의 계수이면 합이 Kloosterman 합의 합으로 바뀌고 Kuznetsov 공식이 상계를 준다.
- 첨점형식 계수의 평균. Ramanujan 추측의 개별 상계 대신 $\rho_j(n)$ 의 제곱 평균만으로 결과를 얻을 때 쓴다. 레벨이나 고윳값을 움직이며 형식의 족(family)에 걸쳐 평균하는 경우가 그렇다.
- 산술 함수의 합. 약수 함수와 Fourier 계수를 곱해 더하는 합에서 오차항을 스펙트럼 쪽으로 넘긴다.
- [Weyl 법칙](weyl-law.md)의 가중 판본. 고윳값을 셀 때 각 고윳값에 Fourier 계수의 제곱으로 무게를 준 개수의 점근식이 이 공식에서 나온다.

[^1]: N. V. Kuznetsov, "Petersson's conjecture for cusp forms of weight zero and Linnik's conjecture. Sums of Kloosterman sums", Matematicheskii Sbornik 111 (1980), 334–383.
[^2]: J.-M. Deshouillers, H. Iwaniec, "Kloosterman sums and Fourier coefficients of cusp forms", Inventiones Mathematicae 70 (1982), 219–288.

# 연관 문서

## 선수지식

- [Kloosterman 합](kloosterman-sums.md)
- [Maass 형식](maass-forms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #complex_analysis
