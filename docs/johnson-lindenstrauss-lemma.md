# Johnson–Lindenstrauss 보조정리

# 개요

**Johnson–Lindenstrauss 보조정리(Johnson–Lindenstrauss lemma)** 는 점 $n$ 개를 무작위 선형사상으로 $k$ 차원에 옮기면 $k$ 가 $\log n$ 의 상수배일 때 모든 두 점 사이 거리가 거의 보존된다는 정리다. 백만 차원 공간의 문서 벡터 천 개에서 가장 가까운 쌍을 찾으면 거리 한 번에 백만 번의 곱셈이 든다. 이 정리는 원래 차원과 무관한 수천 차원으로 옮겨도 모든 거리의 제곱이 10% 안에서 맞는다는 것을 보여, 계산을 작은 차원에서 하게 한다.

# 직관

$\mathbb R^d$ 의 벡터 $u$ 를 $k$ 차원으로 줄이는 가장 단순한 방법은 좌표 $k$ 개를 골라 남기는 것이다. $u=e_1$ 처럼 한 좌표에만 값이 있는 벡터는 그 좌표가 뽑히지 않으면 $0$ 이 되므로, 고정한 좌표 선택은 어떤 벡터의 길이를 지운다.

좌표 대신 무작위 방향으로 잰다. 성분이 독립인 표준 정규분포를 따르는 벡터 $g$ 에서 $\langle g,u\rangle$ 는 평균 $0$, 분산 $\vert u\vert^2$ 인 정규분포를 따른다. 이런 방향 $g_1,\dots,g_k$ 를 독립으로 뽑아 $f(u)=\frac{1}{\sqrt k}(\langle g_1,u\rangle,\dots,\langle g_k,u\rangle)$ 로 놓으면 $\vert f(u)\vert^2/\vert u\vert^2$ 는 자유도 $k$ 인 [카이제곱 분포](chi-squared-distribution.md)를 $k$ 로 나눈 것이다. 평균이 $1$ 이고 분산이 $2/k$ 이며, $u$ 가 어느 방향이든 같다.

점이 $n$ 개면 차이 벡터가 $\binom n2$ 개이고 그 전부가 $1\pm\varepsilon$ 배 안에 들어야 한다. 분산만 쓰면 한 차이 벡터가 벗어날 확률이 $2/(k\varepsilon^2)$ 이하라는 것밖에 모르고, 이것을 $\binom n2$ 번 더하면 $k$ 가 $n^2$ 규모여야 한다. 카이제곱 분포의 꼬리는 $k$ 에 대해 지수적으로 작아서 벗어날 확률이 $2e^{-k(\varepsilon^2/2-\varepsilon^3/3)/2}$ 이하이고, $\binom n2$ 번 더해도 $1$ 보다 작게 하려면 $k$ 가 $\log n$ 규모면 된다.

$n=1000$, $\varepsilon=0.1$ 이면 $k\ge 4\ln 1000/(0.005-0.00033)\approx 5920$ 이고, 이 값은 원래 차원 $d$ 를 포함하지 않는다.

# 정의

## 왜곡

$X\subset\mathbb R^d$ 가 유한집합이고 $0\lt\varepsilon\lt 1$ 이라 한다. 사상 $f:X\to\mathbb R^k$ 가 **$\varepsilon$ 왜곡 매장($\varepsilon$-distortion embedding)** 이라는 것은 모든 $x,y\in X$ 에서 다음이 성립한다는 것이다.

$$
(1-\varepsilon)\vert x-y\vert^2\le\vert f(x)-f(y)\vert^2\le(1+\varepsilon)\vert x-y\vert^2
$$

직관 절의 $u=e_1$ 과 $0$ 으로 된 두 점 집합에서, 첫 좌표를 버리는 좌표 선택은 두 점을 같은 점으로 보내므로 어떤 $\varepsilon\lt 1$ 에서도 $\varepsilon$ 왜곡 매장이 아니다.

## Gauss 무작위 사영

성분이 독립인 표준 정규분포를 따르는 $k\times d$ 행렬 $G$ 로 $f(x)=Gx/\sqrt k$ 를 놓은 것을 **Gauss 무작위 사영(Gaussian random projection)** 이라 한다. $f$ 는 선형이므로 $f(x)-f(y)=f(x-y)$ 이고, 왜곡을 확인할 대상은 차이 벡터 $x-y$ 들이다.

# 성질

## 보조정리

$X\subset\mathbb R^d$ 가 점 $n$ 개의 집합이고 $0\lt\varepsilon\lt 1$ 이라 한다. 정수 $k$ 가

$$
k\ge\frac{4\ln n}{\varepsilon^2/2-\varepsilon^3/3}
$$

를 만족하면 $\varepsilon$ 왜곡 매장인 선형사상 $f:\mathbb R^d\to\mathbb R^k$ 가 존재한다[^1][^2]. Gauss 무작위 사영이 양의 확률로 그런 사상이다.

## 카이제곱 꼬리

단위벡터 $u$ 에서 $Q=\vert Gu\vert^2$ 은 자유도 $k$ 인 카이제곱 분포를 따르고 다음이 성립한다[^2].

$$
P\bigl(Q\ge(1+\varepsilon)k\bigr)\le e^{-\frac k2(\varepsilon^2/2-\varepsilon^3/3)},\qquad P\bigl(Q\le(1-\varepsilon)k\bigr)\le e^{-\frac k2(\varepsilon^2/2-\varepsilon^3/3)}
$$

증명의 요지. [집중부등식](concentration-inequalities.md)의 Chernoff 기법을 쓴다. $\mathbb E e^{\lambda Q}=(1-2\lambda)^{-k/2}$ 이므로 위쪽 꼬리는 $\bigl((1+\varepsilon)e^{-\varepsilon}\bigr)^{k/2}$ 이하이고, $\ln(1+\varepsilon)\le\varepsilon-\varepsilon^2/2+\varepsilon^3/3$ 을 쓴다. 아래쪽 꼬리도 같은 계산이다.

보조정리는 이 꼬리와 합집합 상한(union bound)에서 나온다. 차이 벡터 $\binom n2$ 개 각각이 벗어날 확률이 $2e^{-\frac k2(\varepsilon^2/2-\varepsilon^3/3)}\le 2n^{-2}$ 이므로, 하나라도 벗어날 확률은 $\binom n2\cdot 2n^{-2}=1-1/n$ 이하다.

## 차원의 최적성

$k=O(\varepsilon^{-2}\log n)$ 은 선형이 아닌 사상까지 포함해 개선할 수 없다. $n$ 이 충분히 크고 $\varepsilon$ 이 $n^{-1/2}$ 보다 충분히 크면, $\varepsilon$ 왜곡 매장을 허용하지 않는 점 $n$ 개의 집합이 $k=c\thinspace\varepsilon^{-2}\log n$ 차원마다 있다[^3].

## 다른 무작위 행렬

성분이 $\pm 1$ 을 반반으로 갖는 행렬도 같은 꼴의 차원 상한을 준다[^4]. 이 행렬은 덧셈과 뺄셈만으로 사영을 계산한다. 무작위 부호와 고속 Hadamard 변환을 앞에 곱해 차이 벡터의 질량을 좌표들에 고르게 퍼뜨리면 희소한 사영 행렬을 쓸 수 있고, 이것을 고속 Johnson–Lindenstrauss 변환(fast Johnson–Lindenstrauss transform)이라 한다[^5].

## 다른 노름

$\ell_1$ 노름에서는 같은 정리가 성립하지 않는다. 왜곡 $D\gt 1$ 로 $\ell_1^k$ 에 매장할 수 없는 $\ell_1$ 의 점 $n$ 개가 있고, 그런 매장이 있으려면 $k$ 가 $n^{\Omega(1/D^2)}$ 규모여야 한다[^6].

# 활용

- [스펙트럼 희소화](spectral-sparsification.md)에서 모든 간선의 [유효저항](effective-resistance.md)을 근사할 때, 정점의 저항 벡터를 $O(\log n)$ 차원으로 사영해 계산한다.
- 최근접 이웃 탐색, 군집화, 최소제곱 문제를 차원을 줄인 뒤 푼다. [주성분 분석](principal-component-analysis.md)은 자료에 맞춰 축을 고르고, 이 정리는 자료를 보지 않고 축을 고른다.
- [압축 센싱](compressed-sensing.md)의 제한 등거리 성질(restricted isometry property)이 무작위 행렬에서 성립한다는 증명은 이 정리의 꼬리 상한을 희소 벡터의 그물에 합집합 상한으로 쓴다.

[^1]: W. B. Johnson, J. Lindenstrauss, "Extensions of Lipschitz mappings into a Hilbert space", *Contemporary Mathematics* 26 (1984), 189–206.
[^2]: S. Dasgupta, A. Gupta, "An elementary proof of a theorem of Johnson and Lindenstrauss", *Random Structures & Algorithms* 22 (2003), 60–65.
[^3]: K. G. Larsen, J. Nelson, "Optimality of the Johnson–Lindenstrauss lemma", *58th IEEE Symposium on Foundations of Computer Science* (2017), 633–638.
[^4]: D. Achlioptas, "Database-friendly random projections: Johnson–Lindenstrauss with binary coins", *Journal of Computer and System Sciences* 66 (2003), 671–687.
[^5]: N. Ailon, B. Chazelle, "The fast Johnson–Lindenstrauss transform and approximate nearest neighbors", *SIAM Journal on Computing* 39 (2009), 302–322.
[^6]: B. Brinkman, M. Charikar, "On the impossibility of dimension reduction in l1", *Journal of the ACM* 52 (2005), 766–788.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)
- [카이제곱 분포](chi-squared-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #probability #machine_learning
