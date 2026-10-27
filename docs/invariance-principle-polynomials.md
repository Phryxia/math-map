# 다항식의 불변 원리

# 개요

**다항식의 불변 원리(invariance principle for low-degree polynomials)** 는 차수가 낮고 어느 한 변수에도 크게 좌우되지 않는 다항식이면, 변수에 $\pm 1$ 동전을 넣든 정규분포를 넣든 값의 분포가 거의 같다는 정리다. $Q(x)=(x_1+\cdots+x_n)/\sqrt n$ 에 $\pm 1$ 을 넣으면 [중심극한정리](central-limit-theorem.md)로 분포가 표준정규분포에 가까워지고, 표준정규를 넣으면 정확히 표준정규분포다. 이 정리는 변수를 하나씩 동전에서 정규분포로 바꾸며 한 번 바꿀 때 생기는 차이를 그 변수의 영향력으로 묶어, 같은 결론을 차수가 낮은 다항식 전체로 넓힌다.

# 직관

다항식의 불변 원리는 모든 좌표의 영향력이 작은 저차 다중선형 다항식에 $\pm 1$ 무작위 입력을 넣은 값과 독립 표준정규 입력을 넣은 값의 분포가 가깝다는 정리다. E. Mossel, R. O'Donnell, K. Oleszkiewicz 가 2010 년에 증명했다[^1].

[부울 함수의 Fourier 해석](boolean-fourier.md)의 Majority is Stablest 정리는 이 정리로 문제를 Gauss 공간으로 옮기고, Gauss 공간에서 Borell 의 등주정리를 써서 증명된다. 증명은 중심극한정리의 Lindeberg 치환을 다항식에 적용한 것이다.

$x_1,\dots,x_n$ 이 독립이고 확률 $\tfrac12$ 씩 $\pm 1$ 이라 하자. $Q(x)=(x_1+\cdots+x_n)/\sqrt n$ 의 분포가 $Q(g)$ 와 가까운지 묻는다. $g_1,\dots,g_n$ 은 독립 표준정규이고 $Q(g)$ 는 표준정규분포를 따른다.

좌표를 하나씩 바꾼다. $x_i$ 를 $g_i$ 로 바꿔도 평균과 분산이 같으므로, 매끄러운 함수 $\psi$ 의 기댓값 $\mathbb E\psi(Q)$ 를 Taylor 전개하면 2 차항까지 같고 3 차항에서만 차이가 난다. 3 차항은 $(1/\sqrt n)^3$ 규모이므로 $n$ 번 바꾼 차이는 $n\cdot n^{-3/2}=n^{-1/2}$ 규모다.

$Q(x)=x_1$ 이면 같은 계산이 실패한다. $x_1$ 을 $g_1$ 로 바꾸는 한 단계에서 분포가 $\pm 1$ 에서 표준정규로 바뀐다. 실패한 이유는 한 좌표가 값 전체를 정했기 때문이다. 그래서 불변 원리의 조건은 모든 좌표의 영향력이 작다는 것이다.

# 정의

## 다중선형 다항식과 영향력

차수 $d$ 이하의 다중선형 다항식 $Q(z)=\sum_{\vert S\vert\le d}c_S\prod_{i\in S}z_i$ 에 대해 좌표 $i$ 의 영향력을 $\mathrm{Inf}\_i(Q)=\sum_{S\ni i}c_S^2$ 로 둔다. 입력이 $\pm 1$ 일 때와 표준정규일 때 모두 $\mathbb E Q=c_\emptyset$, $\mathrm{Var}\thinspace Q=\sum_{S\ne\emptyset}c_S^2$ 이다.

## 불변 원리

정리. $Q$ 가 차수 $d$ 이하이고 $\mathrm{Var}\thinspace Q=1$ 이며 모든 $i$ 에서 $\mathrm{Inf}\_i(Q)\le\tau$ 라 하자. $x$ 를 독립 균등 $\pm 1$ 입력, $g$ 를 독립 표준정규 입력이라 하면

$$
\sup_{t\in\mathbb R}\big\vert\Pr\lbrack Q(x)\le t\rbrack-\Pr\lbrack Q(g)\le t\rbrack\big\vert\le O\big(d\thinspace\tau^{1/(8d)}\big)
$$

이다[^1].

# 성질

## Lindeberg 치환

세 번 미분가능하고 $\vert\psi'''\vert\le B$ 인 $\psi$ 에 대해 다음이 성립한다[^1][^2].

$$
\big\vert\mathbb E\psi(Q(x))-\mathbb E\psi(Q(g))\big\vert\le B\thinspace 2^{O(d)}\sum_i\mathrm{Inf}\_i(Q)^{3/2}\le B\thinspace 2^{O(d)}\thinspace d\sqrt\tau
$$

증명의 요지. 앞의 $i-1$ 개 좌표가 Gauss, 뒤의 좌표가 $\pm 1$ 인 혼합 입력에서 $Q=R_i+z_iS_i$ 로 쓴다. $R_i$, $S_i$ 는 $z_i$ 를 포함하지 않고 $\mathbb E S_i^2=\mathrm{Inf}\_i(Q)$ 다. $z_i=x_i$ 와 $z_i=g_i$ 의 1 차와 2 차 적률이 같으므로 Taylor 전개의 차이는 3 차 나머지항 $\tfrac B6\mathbb E\vert S_i\vert^3$ 규모다. $S_i$ 는 차수 $d-1$ 이하이므로 초축약성(hypercontractivity)으로 $\mathbb E\vert S_i\vert^3\le 2^{O(d)}(\mathbb ES_i^2)^{3/2}$ 이다. $\sum_i\mathrm{Inf}\_i(Q)\le d$ 이므로 둘째 부등식이 나온다.

분포함수의 차이는 $\psi$ 로 계단함수를 근사하고, Gauss 다항식의 값이 짧은 구간에 몰리지 않는다는 Carbery–Wright 부등식(Carbery–Wright inequality)으로 근사 오차를 막아 얻는다. 지수 $1/(8d)$ 가 이 단계에서 나온다.

## Borell 의 등주정리

**Borell 의 등주정리(Borell's isoperimetric theorem)** 는 Gauss 공간의 잡음 안정성에 대한 정리다. $(g,h)$ 가 $\mathbb R^n$ 위의 상관계수 $\rho\in(0,1)$ 인 표준정규 쌍이고 $f\colon\mathbb R^n\to\lbrack-1,1\rbrack$ 의 평균이 $0$ 이면

$$
\mathbb E\lbrack f(g)f(h)\rbrack\le 1-\frac2\pi\arccos\rho
$$

이고, 등호는 반공간의 부호함수 $f(z)=\mathrm{sgn}(z_1)$ 에서 성립한다[^3]. 오른쪽은 $\Pr\lbrack\mathrm{sgn}\thinspace g_1=\mathrm{sgn}\thinspace h_1\rbrack=1-\arccos(\rho)/\pi$ 에서 나온다.

## Majority is Stablest 의 증명

영향력이 $\tau$ 이하인 $f\colon\lbrace-1,1\rbrace^n\to\lbrack-1,1\rbrack$ 의 평균이 $0$ 이라 하자. 잡음 연산자를 조금 걸어 높은 준위의 무게를 지우면 $f$ 가 저차 다항식으로 근사된다. 불변 원리로 그 다항식의 안정성을 Gauss 입력의 안정성으로 옮기고, Gauss 쪽 값이 $\lbrack-1,1\rbrack$ 밖으로 나가는 양은 $\psi(t)=\mathrm{dist}(t,\lbrack-1,1\rbrack)^2$ 에 Lindeberg 치환을 써서 작다는 것을 보인다. 잘라낸 함수에 Borell 의 등주정리를 쓰면 $\mathrm{Stab}\_\rho\lbrack f\rbrack\le 1-\tfrac2\pi\arccos\rho+o_\tau(1)$ 이다[^1].

# 활용

- [유일게임 추측과 2-to-2 정리](unique-games.md)에서, 유일게임 추측을 가정하면 MAX-CUT(maximum cut)을 Goemans–Williamson 비율보다 잘 근사하는 것이 NP(nondeterministic polynomial time)-어렵다는 결과가 Majority is Stablest 에서 나온다[^4].
- 영향력이 작은 다항식의 문턱함수에 대한 결과를 Gauss 공간의 결과로 옮긴다. 다항식 문턱함수의 잡음 민감도와 평균 민감도의 상한이 이 방법으로 증명된다[^2].
- 사회선택에서 각 투표자의 영향력이 작은 투표 규칙 가운데 투표 오류에 가장 덜 민감한 것이 다수결이라는 진술이 Majority is Stablest 다[^1].

[^1]: E. Mossel, R. O'Donnell, K. Oleszkiewicz, "Noise stability of functions with low influences: invariance and optimality", *Annals of Mathematics* **171** (2010), 295–341.
[^2]: R. O'Donnell, *Analysis of Boolean Functions*, Cambridge University Press, 2014, 11 장.
[^3]: C. Borell, "Geometric bounds on the Ornstein–Uhlenbeck velocity process", *Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete* **70** (1985), 1–13.
[^4]: S. Khot, G. Kindler, E. Mossel, R. O'Donnell, "Optimal inapproximability results for MAX-CUT and other 2-variable CSPs?", *SIAM Journal on Computing* **37** (2007), 319–357.

# 연관 문서

## 선수지식

- [부울 함수의 Fourier 해석](boolean-fourier.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #probability #complexity
