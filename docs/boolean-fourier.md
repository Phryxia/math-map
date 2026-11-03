# 부울 함수의 Fourier 해석

# 개요

**부울 함수의 Fourier 해석(Fourier analysis of Boolean functions)** 은 $\pm 1$ 값을 받는 변수 $n$ 개의 함수를 변수들의 곱의 합으로 전개해, 함수의 성질을 전개 계수로 계산하는 이론이다. 예로 투표자 $n$ 명의 찬반으로 결과를 정하는 다수결에서, 표 몇 개가 무작위로 뒤집힐 때 결과가 바뀔 확률을 묻는다. 이 확률은 전개 계수의 제곱에 항의 차수별 가중치를 곱해 더한 식으로 적히므로, 계수가 어느 차수에 몰렸는지로 계산된다.

# 직관

투표자 세 명이 찬성 $1$, 반대 $-1$ 로 투표하고 다수결로 결과를 정한다. 결과 함수를 $\mathrm{Maj}\_3(x_1,x_2,x_3)$ 이라 하자. 각 표가 서로 독립으로 확률 $1/4$ 씩 뒤집힌 뒤에도 결과가 같을 확률을 구하려 한다. 원래 표의 배치가 $8$ 가지이고 뒤집힌 배치도 $8$ 가지라서, 직접 세면 $64$ 가지 경우를 따져야 한다.

$x_i$ 가 $\pm 1$ 이므로 $x_i^2=1$ 이고, 어떤 다항식도 각 변수의 차수를 $1$ 이하로 줄일 수 있다. 그런 다항식은 단항식 $2^n$ 개의 결합이고 함수도 $2^n$ 개 점에서의 값으로 정해지므로, 모든 함수가 이 꼴로 하나씩 적힌다. 다수결은 다음과 같다.

$$
\mathrm{Maj}\_3(x)=\tfrac12x_1+\tfrac12x_2+\tfrac12x_3-\tfrac12x_1x_2x_3
$$

$x=(1,1,-1)$ 을 넣으면 $\tfrac12+\tfrac12-\tfrac12+\tfrac12=1$ 이다.

표를 확률 $\frac{1-\rho}{2}$ 로 뒤집어 $y$ 를 만들면 $\mathbb E\lbrack y_i\mid x\rbrack=\rho x_i$ 이다. 좌표가 독립이므로 단항식의 기댓값은 좌표마다의 곱으로 풀린다.

$$
\mathbb E\lbrack y_{i_1}\cdots y_{i_k}\mid x\rbrack=\rho^{k}x_{i_1}\cdots x_{i_k}
$$

그래서 $\mathbb E\lbrack\mathrm{Maj}\_3(x)\mathrm{Maj}\_3(y)\rbrack$ 는 계수의 제곱에 $\rho^{\text{차수}}$ 를 곱해 더한 $\tfrac34\rho+\tfrac14\rho^3$ 이다. 뒤집힐 확률 $1/4$ 은 $\rho=1/2$ 이므로 이 값은 $13/32$ 이고, 결과가 같을 확률은 $(1+13/32)/2=45/64$ 다. $64$ 가지 경우를 세는 대신 계수 네 개로 답이 나온다.

# 정의

## Fourier 전개

$\lbrack n\rbrack=\lbrace 1,\dots,n\rbrace$ 이라 쓴다. 정의역 $\lbrace-1,1\rbrace^n$ 에 [균등분포](uniform-distribution.md)를 주고[^1] 내적을 $\langle f,g\rangle=\mathbb E_x\lbrack f(x)g(x)\rbrack$ 로 둔다. 부분집합 $S\subseteq\lbrack n\rbrack$ 마다

$$
\chi_S(x)=\prod_{i\in S}x_i
$$

를 **지표(character)** 라 한다. 지표들은 정규직교기저를 이루고, 모든 $f\colon\lbrace-1,1\rbrace^n\to\mathbb R$ 는

$$
f=\sum_{S\subseteq\lbrack n\rbrack}\hat f(S)\thinspace\chi_S,\qquad \hat f(S)=\mathbb E_x\bigl\lbrack f(x)\chi_S(x)\bigr\rbrack
$$

로 하나씩 쓰인다. 이것이 $f$ 의 **Fourier 전개(Fourier expansion)** 이고 $\hat f(S)$ 가 **Fourier 계수(Fourier coefficient)** 다. 값이 $\pm 1$ 인 $f$ 를 **부울 함수(Boolean function)** 라 한다. **준위 $k$ 의 무게(Fourier weight at level k)** 는 $W^k\lbrack f\rbrack=\sum_{\vert S\vert=k}\hat f(S)^2$ 이다.

직관 절의 다수결은 $\hat f(\lbrace i\rbrace)=\tfrac12$, $\hat f(\lbrace 1,2,3\rbrace)=-\tfrac12$ 이고 $W^1=\tfrac34$, $W^3=\tfrac14$ 이다. 기준이 되는 다른 함수는 다음이다.

$$
\mathrm{Dict}\_i(x)=x_i,\qquad
\mathrm{XOR}(x)=x_1x_2\cdots x_n,\qquad
\mathrm{AND}\_2(x)=\tfrac{-1+x_1+x_2+x_1x_2}{2}
$$

$\mathrm{Dict}\_i$ 를 독재자(dictator), $\mathrm{XOR}$ 를 패리티(parity) 함수라 한다. $\mathrm{AND}\_2$ 는 두 입력이 모두 $1$ 일 때만 $1$ 이다.

## 영향력

$x^{\oplus i}$ 를 $x$ 의 $i$ 번째 좌표를 뒤집은 것이라 한다. 좌표 $i$ 의 **영향력(influence)** 과 **총 영향력(total influence)** 은 다음이다.

$$
\mathrm{Inf}\_i\lbrack f\rbrack=\Pr_x\bigl\lbrack f(x)\ne f(x^{\oplus i})\bigr\rbrack,\qquad
\mathbf I\lbrack f\rbrack=\sum_i\mathrm{Inf}\_i\lbrack f\rbrack
$$

다수결 $\mathrm{Maj}\_3$ 에서 첫 표가 결과를 바꾸는 것은 나머지 두 표가 갈릴 때이므로 $\mathrm{Inf}\_1=\tfrac12$ 이고, $\mathbf I\lbrack\mathrm{Maj}\_3\rbrack=\tfrac32$ 다.

## 잡음 연산자와 잡음 안정성

$y\sim N_\rho(x)$ 는 각 좌표가 독립으로 확률 $\frac{1+\rho}{2}$ 로 $x_i$ 와 같은 분포다. **잡음 연산자(noise operator)** 와 **잡음 안정성(noise stability)** 은 다음이다.

$$
T_\rho f(x)=\mathbb E_{y\sim N_\rho(x)}\lbrack f(y)\rbrack,
\qquad
\mathrm{Stab}\_\rho\lbrack f\rbrack=\langle f,T_\rho f\rangle
$$

직관 절의 계산이 $\mathrm{Stab}\_{1/2}\lbrack\mathrm{Maj}\_3\rbrack=13/32$ 이다.

# 성질

## Parseval 항등식

$\sum_S\hat f(S)^2=\mathbb E\lbrack f^2\rbrack$ 이다. 이것이 Parseval 항등식(Parseval's identity)이고, 부울 함수이면 우변이 $1$ 이라 $\hat f(S)^2$ 가 부분집합 위의 확률분포가 된다. $\hat f(\emptyset)=\mathbb E\lbrack f\rbrack$ 이므로 분산은 $\sum_{S\ne\emptyset}\hat f(S)^2$ 다. 다수결에서는 $\tfrac34+\tfrac14=1$ 이다.

## 영향력과 잡음의 Fourier 공식

부울 함수에서 다음이 성립한다.

$$
\mathrm{Inf}\_i\lbrack f\rbrack=\sum_{S\ni i}\hat f(S)^2,\qquad
\mathbf I\lbrack f\rbrack=\sum_S\vert S\vert\thinspace\hat f(S)^2,\qquad
T_\rho f=\sum_S\rho^{\vert S\vert}\hat f(S)\chi_S,\qquad
\mathrm{Stab}\_\rho\lbrack f\rbrack=\sum_S\rho^{\vert S\vert}\hat f(S)^2
$$

첫 식은 $f(x)-f(x^{\oplus i})=2\sum_{S\ni i}\hat f(S)\chi_S(x)$ 의 제곱 평균에서, 셋째 식은 직관 절의 단항식 계산에서 나온다. 총 영향력은 분포 $\hat f(S)^2$ 아래에서 준위 $\vert S\vert$ 의 기댓값이므로, 무게가 낮은 준위에 있는 것과 총 영향력이 작은 것은 같은 진술이다.

## 세 기준 함수

| 함수 | 무게 분포 | 총 영향력 | Stabᵨ |
|---|---|---|---|
| $\mathrm{Dict}\_i$ | 준위 $1$ 에 전부 | $1$ | $\rho$ |
| $\mathrm{XOR}\_n$ | 준위 $n$ 에 전부 | $n$ | $\rho^n$ |
| $\mathrm{Maj}\_n$ | 홀수 준위 $k$ 에 $\Theta(k^{-3/2})$ | $\sim\sqrt{2n/\pi}$ | $\to1-\frac2\pi\arccos\rho$ |

독재자와 패리티가 두 극단이고 다수결은 그 사이에 있다. 다수결의 무게는 준위 $1$ 에 가장 많다.

## 초축약성

Bonami–Beckner 부등식(Bonami–Beckner inequality)에 따르면 $1\le p\le q$ 이고 $\rho\le\sqrt{(p-1)/(q-1)}$ 이면 모든 $f$ 에 대해

$$
\Vert T_\rho f\Vert_q\le\Vert f\Vert_p
$$

이다. 이 성질을 초축약성(hypercontractivity)이라 한다. 특히 준위 $k$ 이하의 함수에 대해 $\Vert f\Vert_4\le\sqrt3^{\thinspace k}\Vert f\Vert_2$ 이고, 저차 다항식의 값은 평균에서 크게 흩어지지 않는다.

## 영향력에 관한 정리

- [Kahn–Kalai–Linial 정리](kkl-theorem.md)(KKL). $\mathbb E\lbrack f\rbrack$ 가 $\pm 1$ 에서 떨어져 있으면 어떤 좌표는 영향력이 $\Omega(\log n/n)$ 이상이다[^3]. 증명에 초축약성을 쓴다.
- Friedgut junta 정리(Friedgut's junta theorem). 총 영향력이 $k$ 이면 $f$ 는 $2^{O(k/\varepsilon)}$ 개 좌표에만 의존하는 함수로 $\varepsilon$ 근사된다. 좌표 몇 개에만 의존하는 함수를 junta 라 한다.
- FKN(Friedgut–Kalai–Naor) 정리. 무게가 거의 전부 준위 $1$ 에 있으면 $f$ 는 상수, 독재자, 독재자의 부호를 바꾼 것 가운데 하나에 가깝다.
- Kindler–Safra 정리. 무게가 거의 준위 $k$ 이하에 있으면 $f$ 는 차수 $k$ 인 junta 에 가깝다.

## Majority is Stablest 정리

$\rho\in\lbrack 0,1)$ 과 $\varepsilon\gt 0$ 에 대해 $\tau\gt 0$ 이 있어, $\mathbb E\lbrack f\rbrack=0$ 이고 모든 $i$ 에서 $\mathrm{Inf}\_i\lbrack f\rbrack\le\tau$ 이면

$$
\mathrm{Stab}\_\rho\lbrack f\rbrack\thickspace\le\thickspace 1-\frac2\pi\arccos\rho+\varepsilon
$$

이다. E. Mossel, R. O'Donnell, K. Oleszkiewicz 가 2010 년에 증명했다[^2]. 우변은 $n\to\infty$ 에서 다수결의 안정성의 극한값이고, $\mathrm{Maj}\_n$ 은 각 좌표의 영향력이 $\Theta(1/\sqrt n)$ 이라 조건을 만족하므로 상한은 더 줄일 수 없다.

증명의 요지. [다항식의 불변 원리](invariance-principle-polynomials.md)로 $\pm1$ 입력을 Gauss 입력으로 바꿔도 영향력이 작은 저차 다항식의 분포가 거의 변하지 않음을 보이고, Gauss 쪽에서 Borell 등주 정리(Borell's isoperimetric theorem)를 쓴다. 높은 준위의 꼬리는 초축약성으로 통제한다. Borell 정리는 Gauss 공간의 [등주부등식](isoperimetric-inequality.md)을 잡음 안정성으로 쓴 것이다.

# 활용

- 계수의 계산. Walsh–Hadamard 변환(Walsh–Hadamard transform)으로 $2^n$ 개 계수를 $O(n2^n)$ 번의 덧셈으로 구한다.
- 근사 불가능성. [PCP 정리](pcp-theorem.md)(probabilistically checkable proof)의 검증자는 증명의 몇 비트만 읽고 판정한다. 증명을 부울 함수로 볼 때 그 판정은 함수가 독재자인지 묻는 독재자 검사(dictator test)다. 독재자가 통과할 확률은 $\mathrm{Stab}\_\rho\lbrack\mathrm{Dict}\rbrack=\rho$ 이고, 영향력이 모두 작은 함수가 통과할 확률의 상한은 Majority is Stablest 정리가 준다. [유일게임 추측](unique-games.md) 아래에서 최대 절단(max-cut)의 근사비 $0.878\ldots$ 이 최적이라는 결론이 이렇게 나오고, 이 값은 Goemans–Williamson 의 [반정부호 계획법](semidefinite-programming.md) 근사비와 같다[^4]. P. Raghavendra 는 같은 틀로 여러 제약 만족 문제에서 반정부호 완화의 값이 최적 근사비임을 보였다.
- 속성 검사. 선형성 검사(Blum–Luby–Rubinfeld test, BLR test)의 통과 확률은 $\Pr\lbrack f(x)f(y)=f(xy)\rbrack=\tfrac12+\tfrac12\sum_S\hat f(S)^3$ 이다. 그래서 통과 확률이 크면 어떤 $\chi_S$ 와의 상관이 크다.
- 학습. 무게가 낮은 준위에 몰린 함수는 낮은 준위 계수만 추정하면 근사할 수 있다. 저차 알고리즘(low-degree algorithm)과 Goldreich–Levin 알고리즘(Goldreich–Levin algorithm)이 계수를 추정하는 절차다.
- 회로 하한. 상수 깊이 회로가 계산하는 함수는 낮은 준위에 무게가 몰린다는 Linial–Mansour–Nisan 정리(Linial–Mansour–Nisan theorem)가 [Håstad 스위칭 보조정리](switching-lemma.md)로 증명된다. 패리티는 준위 $n$ 에 무게를 전부 두므로 이런 회로로 계산되지 않는다.
- 사회선택이론. G. Kalai 는 세 후보 선거에서 순환하지 않는 집계 규칙이 독재자뿐이라는 Arrow 정리(Arrow's theorem)를 순환 확률의 Fourier 계산으로 다시 증명하고 정량적 판본을 얻었다.

[^1]: R. O'Donnell, *Analysis of Boolean Functions*, Cambridge University Press (2014). 정의와 정리 진술은 이 책의 1–11 장을 따른다.

[^2]: E. Mossel, R. O'Donnell, K. Oleszkiewicz, *Noise stability of functions with low influences: invariance and optimality*, Ann. of Math. **171** (2010), 295–341. Majority is Stablest 와 불변 원리.

[^3]: J. Kahn, G. Kalai, N. Linial, *The influence of variables on Boolean functions*, FOCS (1988). KKL 정리와 초축약성의 첫 응용.

[^4]: S. Khot, G. Kindler, E. Mossel, R. O'Donnell, *Optimal inapproximability results for MAX-CUT and other 2-variable CSPs?*, SIAM J. Comput. **37** (2007), 319–357. 유일게임 추측 아래 $0.878\ldots$ 가 최적임.

# 연관 문서

## 선수지식

- [이산 Fourier 변환](fourier.md)
- [유한 확률 공간](probability.md)

## 더 알아보기

- [Kahn–Kalai–Linial 정리](kkl-theorem.md)
- [유일게임 추측과 2-to-2 정리](unique-games.md)
- [민감도 정리](sensitivity-theorem.md)
- [다항식의 불변 원리](invariance-principle-polynomials.md)

#combinatorics #complexity #analysis #computation
