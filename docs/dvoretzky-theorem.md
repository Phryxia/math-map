# Dvoretzky 정리

# 개요

**Dvoretzky 정리(Dvoretzky's theorem)** 는 차원이 큰 노름 공간은 어떤 노름이든 Euclid 공간과 거의 같은 부분공간을 갖는다는 정리다. $n$ 차원 정육면체 $\lbrack -1,1\rbrack^n$ 은 모서리 방향으로는 길이 $1$, 대각선 방향으로는 길이 $\sqrt n$ 까지 뻗어 공과 전혀 닮지 않았다. 그런데 원점을 지나는 평면이나 3 차원 부분공간으로 잘 고른 방향에서 자르면 단면이 원판이나 공과 거의 같다. Dvoretzky 정리는 이런 단면이 모든 대칭 볼록체에 있고 그 차원이 $\log n$ 에 비례할 만큼 크다는 것을, 무작위로 고른 부분공간이 확률 $1$ 에 가깝게 그런 단면이라는 계산으로 보인다.

# 직관

$\mathbb R^n$ 에 노름 $\Vert x\Vert\_\infty=\max_i\vert x_i\vert$ 를 준다. 단위구는 정육면체다. Euclid 단위구면 위에서 이 노름은 $e_1$ 에서 $1$, $(1,\dots,1)/\sqrt n$ 에서 $1/\sqrt n$ 이므로, 큰 값과 작은 값의 비가 $\sqrt n$ 이다. 노름이 단위구면 위에서 상수이면 단위구가 공이므로, 이 비가 $1$ 에 가까운 부분공간을 찾는다.

단위구면에서 점 $x$ 를 균등하게 고르면 $\Vert x\Vert\_\infty$ 는 거의 언제나 $\sqrt{2\log n/n}$ 근처에 있다. $\Vert x\Vert\_\infty$ 는 $\vert\Vert x\Vert\_\infty-\Vert y\Vert\_\infty\vert\le\vert x-y\vert$ 를 만족하므로, [Lévy 등주부등식](levy-isoperimetric-inequality.md)의 측도 집중에 따라 중앙값 $M$ 에서 $t$ 이상 벗어날 확률이 $2e^{-nt^2/2}$ 정도 이하다. $t=\varepsilon M$ 이면 이 확률은 $2e^{-\varepsilon^2\log n}=2n^{-\varepsilon^2}$ 정도다.

$k$ 차원 부분공간을 무작위로 고르고, 그 단위구면에서 서로 $\varepsilon$ 이내로 촘촘한 점 약 $(3/\varepsilon)^k$ 개를 잡는다. 점 하나가 벗어날 확률이 $2n^{-\varepsilon^2}$ 이므로, $(3/\varepsilon)^k\cdot 2n^{-\varepsilon^2}\lt 1$ 이면 모든 점에서 노름이 $M(1\pm\varepsilon)$ 안에 있는 부분공간이 존재한다. 이 조건은 $k$ 가 $\varepsilon^2\log n/\log(3/\varepsilon)$ 정도일 때 성립한다. 촘촘한 점 사이는 삼각부등식으로 메우면 그 부분공간의 단위구면 전체에서 노름이 거의 상수다.

# 정의

## Banach–Mazur 거리

같은 차원의 노름 공간 $X$, $Y$ 사이의 **Banach–Mazur 거리(Banach–Mazur distance)** 는

$$
d(X,Y)=\inf\lbrace\Vert T\Vert\thinspace\Vert T^{-1}\Vert : T:X\to Y\text{ 는 선형 동형사상}\rbrace
$$

이다. $d(X,Y)\ge 1$ 이고, $d(X,Y)=1$ 은 두 공간이 등거리 동형이라는 것이다. $\ell\_p^k$ 는 $\mathbb R^k$ 에 노름 $(\sum\vert x_i\vert^p)^{1/p}$ 를 준 공간이다. 직관 절에서 항등사상은 $\Vert\mathrm{id}:\ell\_2^n\to\ell\_\infty^n\Vert=1$, $\Vert\mathrm{id}:\ell\_\infty^n\to\ell\_2^n\Vert=\sqrt n$ 이므로 $d(\ell\_2^n,\ell\_\infty^n)\le\sqrt n$ 이다.

## 거의 Euclid 인 부분공간

$\varepsilon\gt 0$ 일 때 노름 공간 $X$ 의 부분공간 $E$ 가 $d(E,\ell\_2^{\dim E})\le 1+\varepsilon$ 이면 $E$ 를 **$(1+\varepsilon)$-Euclid 부분공간($(1+\varepsilon)$-Euclidean subspace)** 이라 한다. $\mathbb R^n$ 의 대칭 볼록체 $K$ 로 말하면, 원점을 지나는 $k$ 차원 부분공간 $E$ 와 Euclid 공 $B$ 가 있어 $B\subseteq K\cap E\subseteq(1+\varepsilon)B$ 라는 것이다. 직관 절에서 찾은 부분공간이 이것이다.

# 성질

## Dvoretzky 정리

모든 $\varepsilon\gt 0$ 에 대해 상수 $c(\varepsilon)\gt 0$ 이 있어, 모든 $n$ 차원 노름 공간은 차원이 $k\ge c(\varepsilon)\log n$ 인 $(1+\varepsilon)$-Euclid 부분공간을 갖는다[^1]. Dvoretzky 가 1961 년에 증명했다.

Milman 은 직관 절의 측도 집중 논법으로 $c(\varepsilon)=c\thinspace\varepsilon^2/\log(1/\varepsilon)$ 을 얻었고[^2], Gordon 은 [Gauss 과정](gaussian-processes.md)의 비교 부등식으로 $c\thinspace\varepsilon^2$ 을 얻었다[^3].

## Milman 의 차원 공식

$X=(\mathbb R^n,\Vert\cdot\Vert)$ 에서 Euclid 단위구면 위 노름의 평균을 $M$, 최댓값을 $b$ 라 하자. 무작위로 고른 차원

$$
k\approx c\thinspace\varepsilon^2\thinspace n\Bigl(\frac{M}{b}\Bigr)^2
$$

의 부분공간은 확률 $1$ 에 가깝게 $(1+\varepsilon)$-Euclid 다[^4]. 직관 절의 계산에서 $\log n$ 이 나온 자리가 $n(M/b)^2$ 이다. 위치를 잘 잡으면, 곧 $K$ 에 맞는 Euclid 구조를 고르면 모든 $X$ 에서 $n(M/b)^2\ge c\log n$ 이 되어 Dvoretzky 정리가 나온다.

## 두 끝의 예

- $\ell\_\infty^n$. $M\approx\sqrt{2\log n/n}$, $b=1$ 이므로 $n(M/b)^2\approx 2\log n$ 이다. 이 공간의 $(1+\varepsilon)$-Euclid 부분공간은 차원이 $C(\varepsilon)\log n$ 이하이므로 $\log n$ 은 일반적으로 더 키울 수 없다[^4].
- $\ell\_1^n$. $M\approx\sqrt{2n/\pi}$, $b=\sqrt n$ 이므로 $n(M/b)^2\approx 2n/\pi$ 이다. 차원이 $n$ 에 비례하는 $(1+\varepsilon)$-Euclid 부분공간이 있다. 정팔면체를 일반화한 볼록체 $\lbrace\sum\vert x_i\vert\le 1\rbrace$ 의 무작위 단면은 차원의 일정 비율까지 거의 공이다. Kashin 은 차원 $n/2$ 의 부분공간과 그 직교여공간이 함께 $\Vert x\Vert\_1/(\sqrt n\vert x\vert)$ 를 상수 $c\gt 0$ 과 $1$ 사이에 두는 분해를 얻었다[^5].

## 무한차원 공간

무한차원 Banach 공간 $X$ 는 모든 $n$ 과 $\varepsilon$ 에 대해 $d(E,\ell\_2^n)\le 1+\varepsilon$ 인 $n$ 차원 부분공간 $E$ 를 갖는다. $X$ 의 $N$ 차원 부분공간에 Dvoretzky 정리를 쓰고 $c(\varepsilon)\log N\ge n$ 이 되게 $N$ 을 잡는다. 유한차원 부분공간의 모양으로 보면 $\ell\_2$ 는 모든 무한차원 Banach 공간 안에 들어 있다.

# 활용

- [Banach 공간](banach-spaces.md)의 국소 이론(local theory). 유한차원 부분공간의 모양으로 공간을 분류할 때, 이 정리에 따라 모든 무한차원 공간이 $\ell\_2^n$ 을 모든 $n$ 에서 포함한다. [Rademacher type](rademacher-type.md)의 Maurey–Pisier 정리(Maurey–Pisier theorem)는 $X$ 가 갖는 type 의 상한 $p\_X$ 에 대해 $\ell\_{p\_X}^n$ 을 같은 뜻으로 찾는다.
- [압축 센싱](compressed-sensing.md). $\ell\_1^n$ 의 거의 Euclid 인 비례 차원 부분공간을 핵으로 갖는 측정 행렬은 희소 벡터를 $\ell\_1$ 최소화로 복원한다. Kashin 분해와 Garnaev–Gluskin 의 Gelfand 폭 계산이 이 성질을 쓴다.
- [Johnson–Lindenstrauss 보조정리](johnson-lindenstrauss-lemma.md). 무작위 부분공간에서 노름이 거의 상수라는 같은 논법을 점 $N$ 개의 거리에 쓰면 차원 $O(\varepsilon^{-2}\log N)$ 으로의 사영이 거리를 보존한다.
- 볼록기하. 대칭 볼록체의 단면과 사영이 공에 가까운 차원을 재는 문제에 쓴다. Milman 의 부분공간의 몫 정리(quotient of subspace theorem)는 이 정리의 측도 집중 논법을 부분공간과 몫공간에 차례로 써서 얻는다.

[^1]: A. Dvoretzky, "Some results on convex bodies and Banach spaces", *Proceedings of the International Symposium on Linear Spaces* (Jerusalem, 1960), Jerusalem Academic Press (1961), 123–160.

[^2]: V. D. Milman, "A new proof of A. Dvoretzky's theorem on cross-sections of convex bodies", *Funktsional'nyi Analiz i ego Prilozheniya* 5 (1971), no. 4, 28–37.

[^3]: Y. Gordon, "Some inequalities for Gaussian processes and applications", *Israel Journal of Mathematics* 50 (1985), 265–289.

[^4]: T. Figiel, J. Lindenstrauss and V. D. Milman, "The dimension of almost spherical sections of convex bodies", *Acta Mathematica* 139 (1977), 53–94.

[^5]: B. S. Kashin, "Diameters of some finite-dimensional sets and classes of smooth functions", *Izvestiya Akademii Nauk SSSR, Seriya Matematicheskaya* 41 (1977), 334–351.

# 연관 문서

## 선수지식

- [Banach 공간](banach-spaces.md)
- [Lévy 등주부등식](levy-isoperimetric-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #probability
