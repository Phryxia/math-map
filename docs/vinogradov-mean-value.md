# Vinogradov 평균값 정리

# 개요

**Vinogradov 평균값 정리(Vinogradov's mean value theorem)** 는 지수 $1$ 부터 $k$ 까지를 한꺼번에 담은 지수합의 $2s$ 제곱 평균 $J_{s,k}(X)$ 의 크기를 정하는 정리다. $X$ 이하 정수 $x_1,x_2,x_3$ 과 $y_1,y_2,y_3$ 가운데 합, 제곱합, 세제곱합이 모두 같은 조를 세면 $y$ 가 $x$ 의 순서를 바꾼 것인 해가 대략 $3!\thinspace X^3$ 개 있고, 변수가 더 많아지면 순서 바꾸기가 아닌 해가 얼마나 많은지가 문제다. 이 정리는 그 개수가 순서 바꾸기에서 오는 해의 수 $X^s$ 와 멱합의 값이 퍼지는 범위로 계산한 수 $X^{2s-k(k+1)/2}$ 가운데 큰 쪽을 거의 넘지 않음을 보인다.

# 직관

[원법](circle-method.md)의 부 호 추정은 Weyl 의 부등식에 기댄다. 그 부등식의 절약 지수는 $2^{1-k}$ 이어서 $k$ 가 커지면 $1$ 에 가까운 절약이 $0$ 으로 줄고, Waring 문제의 상계가 $G(k)\le2^k+1$ 로 지수만큼 커진다. 손실이 어디서 나는지 보면, 차분을 $k-1$ 번 거듭할 때마다 합의 길이가 그대로인 채 지수 절약만 반으로 깎인다.

점마다의 상계 대신 평균을 재면 사정이 달라진다. $\alpha$ 를 하나 고정하지 않고 $\vert f(\alpha)\vert^{2s}$ 를 $\alpha$ 전체에서 적분하면, 그 값은 지수를 전개해 항마다 적분한 결과이고 지수가 $0$ 인 항만 남는다. 남는 항의 개수가 곧 멱합이 같은 정수 조의 개수다. 개수를 세는 문제는 합동류별로 변수를 모으는 조합 논법에 걸리므로, 점마다 추정할 때 쓸 수 없던 수단이 생긴다.

예를 보자. $s=k$ 이면 $x$ 조와 $y$ 조가 같은 멱합을 $k$ 개까지 공유하므로 근의 대칭함수가 모두 같고, $y$ 조는 $x$ 조의 치환이다. 해의 개수는 $k!\thinspace X^{k}$ 에 작은 오차를 더한 크기다. $s$ 가 더 크면 치환이 아닌 해가 생기고 그 개수를 세는 것이 문제가 된다.

Wooley 가 $k=3$ 을, Bourgain, Demeter, Guth 가 $k\ge4$ 를 증명했다.

# 정의

$\boldsymbol\alpha=(\alpha_1,\dots,\alpha_k)$ 에 대해 지수합을

$$
f(\boldsymbol\alpha;X)=\sum_{x=1}^{X}e(\alpha_1x+\alpha_2x^2+\dots+\alpha_kx^k),\qquad e(\theta)=e^{2\pi i\theta}
$$

로 두고 그 $2s$ 제곱 평균을

$$
J_{s,k}(X)=\int_{\lbrack 0,1\rbrack^k}\vert f(\boldsymbol\alpha;X)\vert^{2s}\thinspace d\boldsymbol\alpha
$$

로 둔다. 지수를 전개해 항별로 적분하면 $J_{s,k}(X)$ 는 연립방정식

$$
x_1^j+\dots+x_s^j=y_1^j+\dots+y_s^j\qquad(1\le j\le k)
$$

의 해 $(x_1,\dots,x_s,y_1,\dots,y_s)\in\lbrace1,\dots,X\rbrace^{2s}$ 의 개수와 같다.

# 성질

## 자명한 하한

대각해 $y_i=x_{\sigma(i)}$ 가 $\gg X^{s}$ 개 있다. 한편 각 방정식의 양변이 $\ll X^{j}$ 이므로 $2s$ 개 변수에 걸린 제약이 $\ll X^{k(k+1)/2}$ 가지 값만 가르고, 비둘기집 논법이 $\gg X^{2s-k(k+1)/2}$ 를 준다. 따라서

$$
J_{s,k}(X)\gg X^{s}+X^{2s-k(k+1)/2}
$$

이다. 두 항은 $s=k(k+1)/2$ 에서 같은 크기가 된다.

## 주 추측과 그 증명

모든 $\varepsilon\gt 0$ 에 대해

$$
J_{s,k}(X)\ll X^{\varepsilon}\left(X^{s}+X^{2s-k(k+1)/2}\right)
$$

이다. 곧 위 하한이 $X^{\varepsilon}$ 오차 안에서 정확하다. $k=2$ 는 약수 계산으로 나오고, $k=3$ 은 Wooley 의 효율적 합동법이[^1], $k\ge4$ 는 Bourgain, Demeter, Guth 의 $\ell^2$ 분해 정리가 증명했다[^2].

증명의 요지는 두 갈래다. 효율적 합동법은 해를 소수 $p$ 를 법으로 하는 합동류로 가르고, 같은 류에 든 변수를 묶어 변수 개수를 줄인 같은 꼴의 평균값으로 되돌린다. 되돌릴 때마다 지수가 주 추측 쪽으로 움직이고, 되돌림을 여러 번 거듭하면 남는 손실이 $X^{\varepsilon}$ 안에 들어간다. 분해 정리는 모멘트 곡선 $(t,t^2,\dots,t^k)$ 위에 실린 Fourier 확장의 $L^{2s}$ 노름을 짧은 호 위의 조각들의 노름으로 가르는 조화해석의 부등식이고, 곡선의 비퇴화성이 조각 사이의 상쇄를 준다.

## Weyl 합의 추정

주 추측을 쓰면 $\alpha_k$ 가 유리수 근사에서 멀 때

$$
\left\vert\sum_{x\le X}e(\alpha_kx^k)\right\vert\ll X^{1-1/(4k^2)+\varepsilon}
$$

꼴의 절약이 나온다. 절약 지수가 $k$ 의 다항식 역수라서 Weyl 의 부등식의 $2^{1-k}$ 보다 크다.

# 활용

- **Waring 문제의 상계.** [Waring 문제](waring-problem.md)의 부 호 추정에 Weyl 의 부등식 대신 이 정리를 넣으면 $G(k)\ll k\log k$ 가 나온다.
- **Riemann zeta 함수의 영점 없는 영역.** $\zeta(\sigma+it)$ 를 길이가 다른 조각의 지수합으로 가를 때 각 조각에 위 Weyl 합 추정이 들어간다. [Riemann zeta 함수](riemann-zeta.md)의 고전적 영점 없는 영역을 $\sigma\gt1-c/(\log t)^{2/3}(\log\log t)^{1/3}$ 까지 넓히는 Vinogradov–Korobov 영역이 그 결과다.
- **등분포의 속도.** 다항식 $P(x)$ 의 계수 가운데 하나가 무리수이면 수열 $P(1),P(2),\dots$ 의 소수부가 [등분포](equidistribution.md)한다. Erdős–Turán 부등식이 불일치도를 지수합으로 묶으므로, 이 정리의 지수합 추정이 그대로 수렴 속도를 준다.

[^1]: T. D. Wooley, "The cubic case of the main conjecture in Vinogradov's mean value theorem", Adv. Math. 294 (2016), 532–561.
[^2]: J. Bourgain, C. Demeter, L. Guth, "Proof of the main conjecture in Vinogradov's mean value theorem for degrees higher than three", Ann. of Math. 184 (2016), 633–682.

# 연관 문서

## 선수지식

- [원법](circle-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #combinatorics
