# 보손 표본추출

# 개요

**보손 표본추출(boson sampling)** 은 광자 여러 개를 거울과 분광기로 된 회로에 넣고, 광자가 어느 출구로 나오는지의 분포에서 표본을 뽑는 문제다. 광자 두 개를 반투명 거울의 두 입구에 하나씩 넣으면, 서로 무관하게 움직이는 공 두 개라면 절반의 확률로 서로 다른 출구로 나오지만 광자는 언제나 같은 출구로 함께 나온다. 출구 분포의 각 확률은 회로 행렬의 부분행렬의 [영구식](permanent.md)으로 적히고, 영구식 계산이 어렵다는 사실을 써서 이 분포를 고전 컴퓨터가 흉내 내기 어렵다는 것을 보인다.

# 직관

반투명 거울은 들어온 광자를 진폭 $\tfrac1{\sqrt 2}$ 로 통과시키고 진폭 $\tfrac1{\sqrt 2}$ 로 반사한다. 입구 1 로 들어온 광자는 출구 1 로 진폭 $\tfrac1{\sqrt 2}$, 출구 2 로 진폭 $\tfrac1{\sqrt 2}$ 로 가고, 입구 2 로 들어온 광자는 출구 1 로 진폭 $\tfrac1{\sqrt 2}$, 출구 2 로 진폭 $-\tfrac1{\sqrt 2}$ 로 간다. 이 네 진폭을 늘어놓으면 다음 유니터리 행렬이다.

$$
U=\frac1{\sqrt 2}\begin{pmatrix}1&1\cr 1&-1\end{pmatrix}
$$

$U$ 의 $(j,i)$ 성분이 입구 $i$ 에서 출구 $j$ 로 가는 진폭이다.

두 입구에 광자를 하나씩 넣는다. 두 광자가 서로 다른 출구로 나오는 길은 둘이다. 광자 1 이 출구 1, 광자 2 가 출구 2 로 가는 길의 진폭은 $\tfrac1{\sqrt 2}\cdot(-\tfrac1{\sqrt 2})=-\tfrac12$ 이고, 광자 1 이 출구 2, 광자 2 가 출구 1 로 가는 길의 진폭은 $\tfrac12$ 이다.

[양자 회로](quantum-circuits.md)에서처럼 같은 결과에 이르는 길의 진폭은 더한 뒤 제곱한다. 광자 두 개는 구별되지 않으므로 두 길은 같은 결과이고, 진폭의 합은 $-\tfrac12+\tfrac12=0$ 이다. 그래서 두 광자는 서로 다른 출구로 나오지 않는다[^2]. 공 두 개였다면 두 길의 확률 $\tfrac14$ 를 더해 $\tfrac12$ 이었다.

두 길의 진폭을 더한 값 $U\_{11}U\_{22}+U\_{21}U\_{12}$ 는 $U$ 의 영구식이다. 광자가 $n$ 개이면 광자를 출구에 배정하는 길이 $n!$ 개이고, 진폭의 합은 $n\times n$ 행렬의 영구식이다. 영구식은 [행렬식](determinants.md)과 달리 소거법으로 계산할 수 없어서, 광자 수가 늘면 이 분포를 계산하는 일이 빠르게 어려워진다.

# 정의

## 모드와 출력 배치

광자가 지나는 길 하나를 **모드(mode)** 라 한다. 모드가 $m$ 개이고 광자가 $n$ 개일 때, 모드 $j$ 에 광자가 $s\_j$ 개 있는 상태를 수열 $s=(s\_1,\dots,s\_m)$ 으로 적고 **출력 배치(output configuration)** 라 한다. $s\_1+\dots+s\_m=n$ 이다. 직관 절의 출력 배치는 $(1,1)$, $(2,0)$, $(0,2)$ 셋이다.

## 선형 광학 회로

모드 $m$ 개의 **선형 광학 회로(linear optical network)** 는 $m\times m$ 유니터리 행렬 $U$ 다. 광자 $n$ 개의 상태를 변수 $y\_1,\dots,y\_m$ 의 $n$ 차 동차다항식으로 적고, 단항식 $y\_1^{s\_1}\cdots y\_m^{s\_m}/\sqrt{s\_1!\cdots s\_m!}$ 들이 정규직교기저가 되게 내적을 준다. 이 단항식이 출력 배치 $s$ 의 상태다. 회로는 각 변수를 다음과 같이 바꾼다.

$$
y\_i\mapsto\sum\_{j=1}^{m}U\_{ji}\thinspace y\_j
$$

직관 절에서 입구 1 과 2 에 광자를 하나씩 넣은 상태는 $y\_1y\_2$ 이고, 회로를 지나면 다음이 된다.

$$
\tfrac1{\sqrt 2}(y\_1+y\_2)\cdot\tfrac1{\sqrt 2}(y\_1-y\_2)=\tfrac12 y\_1^2-\tfrac12 y\_2^2
$$

$y\_1y\_2$ 의 계수가 $0$ 이므로 출력 배치 $(1,1)$ 은 나오지 않는다. $y\_1^2=\sqrt 2\cdot(y\_1^2/\sqrt{2!})$ 이므로 $(2,0)$ 의 진폭은 $\tfrac1{\sqrt 2}$ 이고 확률은 $\tfrac12$ 다.

## 보손 표본추출 문제

광자 $n$ 개를 모드 $1,\dots,n$ 에 하나씩 넣고 회로 $U$ 를 지나게 한 뒤, 각 모드의 광자 수를 센다. $U$ 를 받아 이 출력 배치의 분포에서 표본 하나를 뽑는 문제를 **보손 표본추출 문제(boson sampling problem)** 라 한다[^1]. 분포를 그대로 따르는 표본을 내야 하면 정확한 표본추출이고, [전변동거리](total-variation-distance.md) $\varepsilon$ 안의 분포면 되면 근사 표본추출이다.

# 성질

## 출력 확률의 영구식 공식

$U$ 의 처음 $n$ 개 열에서 $j$ 행을 $s\_j$ 번 되풀이해 만든 $n\times n$ 행렬을 $U\_s$ 라 하면

$$
\Pr\lbrack s\rbrack=\frac{\vert\mathrm{perm}\thinspace U\_s\vert^2}{s\_1!\cdots s\_m!}
$$

이다[^1]. 입력 $y\_1\cdots y\_n$ 이 회로를 지난 다항식 $\prod\_{i=1}^{n}\sum\_jU\_{ji}y\_j$ 를 전개하면, 광자 $i$ 마다 모드 $f(i)$ 를 고르는 함수 $f$ 하나가 항 하나다. $U\_s$ 의 되풀이된 행끼리 맞바꾸는 $s\_1!\cdots s\_m!$ 개의 순열이 같은 $f$ 를 주므로, $y^s$ 에 기여하는 $f$ 의 항을 모두 더하면 $\mathrm{perm}\thinspace U\_s/(s\_1!\cdots s\_m!)$ 이다. 기저 단항식의 크기 $\sqrt{s\_1!\cdots s\_m!}$ 을 곱하면 진폭은 $\mathrm{perm}\thinspace U\_s/\sqrt{s\_1!\cdots s\_m!}$ 이다.

## 구별 가능한 입자

광자 대신 서로 구별되는 입자를 넣으면 입자마다 따로 입구 $i$ 에서 출구 $j$ 로 확률 $\vert U\_{ji}\vert^2$ 로 간다. 그러면 성분이 $\vert U\_{ji}\vert^2$ 인 음 아닌 행렬 $V$ 로 $\Pr\lbrack s\rbrack=\mathrm{perm}\thinspace V\_s/(s\_1!\cdots s\_m!)$ 이다. 이 분포는 입자마다 출구를 따로 뽑아 고전적으로 바로 흉내 낸다. 음 아닌 행렬의 영구식은 Jerrum–Sinclair–Vigoda 알고리즘으로 $1\pm\varepsilon$ 배 안에서 다항시간에 어림된다.

## 정확한 표본추출의 고전적 어려움

고전 무작위 알고리즘이 보손 표본추출의 분포를 다항시간에 정확히 따른다면 $\mathrm P^{\char35{}\mathrm P}=\mathrm{BPP}^{\mathrm{NP}}$ 이고, [다항 계층](polynomial-hierarchy.md)(polynomial hierarchy, PH)이 셋째 층으로 무너진다[^1]. 여기서 BPP(bounded-error probabilistic polynomial time)는 무작위 다항시간 부류이고, NP(nondeterministic polynomial time)는 신탁으로 쓴 비결정적 다항시간 부류다. 이것이 Aaronson–Arkhipov 정리(Aaronson–Arkhipov theorem)다.

증명의 요지. 크기를 줄인 임의의 $n\times n$ 행렬은 충분히 큰 유니터리 행렬의 왼쪽 위 부분행렬로 넣을 수 있다. 그 유니터리로 표본추출기를 돌리면 출력 $(1,\dots,1,0,\dots,0)$ 의 확률이 그 행렬의 영구식의 절댓값 제곱이다. 표본추출기가 고전 알고리즘이면 이 확률은 무작위 비트열을 세는 문제이므로, Stockmeyer 의 [근사 세기](approximate-counting.md)로 $\mathrm{BPP}^{\mathrm{NP}}$ 에서 상수배 안으로 어림된다.

영구식 계산이 #P-완전이라는 Valiant 정리(Valiant theorem)를 써서, 실수 행렬의 영구식 제곱을 상수배 안으로 어림하는 일도 #P-어렵다는 것이 증명된다. 그러므로 $\mathrm P^{\char35{}\mathrm P}\subseteq\mathrm{BPP}^{\mathrm{NP}}\subseteq\Sigma\_3^{\mathrm p}$ 이고, [Toda 정리](toda-theorem.md)의 $\mathrm{PH}\subseteq\mathrm P^{\char35{}\mathrm P}$ 와 합치면 $\mathrm{PH}=\Sigma\_3^{\mathrm p}$ 다.

## 근사 표본추출과 두 추측

근사 표본추출에 대해서는 같은 결론이 다음 두 추측 아래에서 증명된다[^1]. 모드 수 $m$ 이 $n$ 의 충분히 큰 다항식이면 무작위 유니터리의 $n\times n$ 부분행렬에 $\sqrt m$ 을 곱한 것은 성분이 독립인 복소 Gauss 행렬에 가깝다.

- 영구식 Gauss 추측(permanent-of-Gaussians conjecture). 성분이 독립인 표준 복소 Gauss 행렬 $X$ 의 $\vert\mathrm{perm}\thinspace X\vert^2$ 을 대부분의 $X$ 에서 상수배 안으로 어림하는 일은 #P-어렵다.
- 영구식 반집중 추측(permanent anti-concentration conjecture). 다항식 $p$ 가 있어서 $\Pr\lbrack\vert\mathrm{perm}\thinspace X\vert^2\lt n!/p(n,1/\delta)\rbrack\lt\delta$ 이다.

두 번째 추측은 출력 확률이 대부분 평균 $n!/m^n$ 규모라는 것이고, 근사 표본추출기의 오차가 한 출력에 몰리지 않게 하는 데 쓴다.

## 고전 알고리즘

영구식의 Ryser 공식(Ryser formula)은 $n\times n$ 영구식을 $O(n2^n)$ 번의 연산으로 계산한다. P. Clifford 와 R. Clifford 는 같은 규모의 시간 $O(n2^n)+\mathrm{poly}(m,n)$ 에 보손 표본추출의 분포에서 정확히 표본을 뽑는 고전 알고리즘을 주었다[^3]. 그래서 광자 수가 수십 개를 넘어야 고전 계산과의 차이가 실험으로 드러난다.

L. Gurvits 는 작용소 노름이 $\Vert A\Vert$ 인 $n\times n$ 행렬의 영구식을 덧셈 오차 $\varepsilon\Vert A\Vert^n$ 안에서 시간 $O(n^2/\varepsilon^2)$ 에 어림하는 무작위 알고리즘을 주었다[^4]. 유니터리의 부분행렬은 노름이 $1$ 이하이므로 진폭 하나를 덧셈 오차 $\varepsilon$ 안으로 어림하는 일은 쉽다. 어려움의 근거는 출력 확률이 대부분 $n!/m^n$ 처럼 작아서 덧셈 오차로는 아무것도 알 수 없다는 데 있다.

# 활용

- 양자 우위 실험. 범용 양자 컴퓨터 없이 광학 회로만으로 고전 컴퓨터가 흉내 내기 어려운 분포를 만드는 실험의 이론적 근거다. 2020 년 실험은 Gauss 보손 표본추출로 광자를 최대 76 개까지 검출했다[^5].
- Gauss 보손 표본추출(Gaussian boson sampling). 광자 하나씩 대신 압착된 빛을 넣는 변형이다. 출력 확률은 영구식 대신 대칭 행렬의 hafnian 으로 적힌다[^6]. 회로를 그래프의 인접 행렬로 맞추면 [매칭](matchings.md)의 수가 많은 부분그래프가 자주 표본으로 나온다.
- 영구식의 성질에 대한 물음. 반집중 추측과 Gauss 행렬의 영구식 분포는 표본추출과 무관하게 무작위 행렬(random matrix) 이론의 물음이기도 하다.

[^1]: S. Aaronson, A. Arkhipov, The computational complexity of linear optics, *Theory of Computing* 9 (2013), 143–252.
[^2]: C. K. Hong, Z. Y. Ou, L. Mandel, Measurement of subpicosecond time intervals between two photons by interference, *Physical Review Letters* 59 (1987), 2044–2046.
[^3]: P. Clifford, R. Clifford, The classical complexity of boson sampling, *Proceedings of the 29th Annual ACM-SIAM Symposium on Discrete Algorithms* (2018), 146–155.
[^4]: L. Gurvits, On the complexity of mixed discriminants and related problems, *Mathematical Foundations of Computer Science 2005*, Lecture Notes in Computer Science 3618 (2005), 447–458.
[^5]: H.-S. Zhong et al., Quantum computational advantage using photons, *Science* 370 (2020), 1460–1463.
[^6]: C. S. Hamilton, R. Kruse, L. Sansoni, S. Barkhofen, C. Silberhorn, I. Jex, Gaussian boson sampling, *Physical Review Letters* 119 (2017), 170501.

# 연관 문서

## 선수지식

- [영구식](permanent.md)
- [양자 회로](quantum-circuits.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #complexity #linear_algebra
