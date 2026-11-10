# Friedgut junta 정리

# 개요

**Friedgut junta 정리(Friedgut's junta theorem)** 는 좌표 하나를 뒤집어 값이 바뀌는 일이 드문 부울 함수는 좌표 몇 개만 보는 함수와 거의 같다는 정리다. $n$ 명이 $\pm 1$ 을 내는 투표에서 처음 세 사람의 다수결을 내되, 나머지 $n-3$ 명이 전부 $1$ 을 낸 경우에만 결과를 뒤집는 규칙은 모든 사람의 표를 본다. 그래도 결과가 세 사람의 다수결과 다른 경우는 확률 $2^{-(n-3)}$ 뿐이다. 이 정리는 영향력의 합만 보고 이런 규칙이 좌표 몇 개짜리 규칙으로 근사된다는 것과 그 좌표 수의 상한을 준다.

# 직관

$f(x)$ 를 $x_4=\cdots=x_n=1$ 이면 $-\mathrm{Maj}\_3(x_1,x_2,x_3)$, 아니면 $\mathrm{Maj}\_3(x_1,x_2,x_3)$ 로 둔다. [Kahn–Kalai–Linial 정리](kkl-theorem.md)의 영향력으로 재면, 좌표 $1,2,3$ 은 각각 거의 $1/2$ 이다. 좌표 $i\ge 4$ 는 나머지 $n-4$ 개 좌표가 전부 $1$ 일 때만 값을 바꾸므로 영향력이 $2^{-(n-4)}$ 이다. 그래서 영향력을 다 더한 값은 $3/2$ 에 가깝고, 좌표 수 $n$ 이 커져도 커지지 않는다.

$f$ 를 $\mathrm{Maj}\_3$ 으로 바꾸면 틀리는 확률이 $2^{-(n-3)}$ 이다. 영향력이 작은 좌표 $4,\dots,n$ 을 무시한 것이 근사가 되었다. 일반적인 $f$ 에서 이것이 되려면 영향력이 작은 좌표들의 영향력이 모두 더해도 작아야 하는데, 영향력의 합이 작다는 것만으로는 그렇지 않다.

영향력 $1/n$ 인 좌표 $n$ 개의 합이 $1$ 이다. Friedgut 정리는 값이 $\pm 1$ 이라는 조건으로 이 경우를 막는다. 영향력이 작은 좌표가 들어간 낮은 준위 항의 무게는 [초축약성](hypercontractivity.md)으로 작게 눌리고, 높은 준위 항의 무게는 영향력의 합으로 눌린다.

# 정의

## junta

$f\colon\lbrace -1,1\rbrace^n\to\lbrace -1,1\rbrace$ 가 크기 $k$ 인 집합 $J$ 의 좌표에만 의존하면, 곧 $x$ 와 $y$ 가 $J$ 에서 같을 때 $f(x)=f(y)$ 이면 $f$ 를 **$k$-junta** 라 한다. $\mathrm{Maj}\_3(x_1,x_2,x_3)$ 은 $J=\lbrace 1,2,3\rbrace$ 인 3-junta 이고, 직관 절의 $f$ 는 $n$-junta 이지만 그보다 작은 junta 가 아니다.

## 근사

[균등분포](uniform-distribution.md)에서 $\Pr\_x\lbrack f(x)\ne g(x)\rbrack\le\varepsilon$ 이면 $f$ 와 $g$ 가 **$\varepsilon$-가깝다($\varepsilon$-close)** 고 한다. 직관 절의 $f$ 와 $\mathrm{Maj}\_3$ 은 $2^{-(n-3)}$-가깝다.

영향력 $\mathrm{Inf}\_i\lbrack f\rbrack$, 총 영향력 $\mathbf I\lbrack f\rbrack$, 미분 $D_if$ 는 Kahn–Kalai–Linial 정리 문서의 정의를 쓴다.

# 성질

## Friedgut 정리

$\mathbf I\lbrack f\rbrack\le K$ 이고 $0\lt\varepsilon\le 1$ 이면 $f$ 는 어떤 $2^{O(K/\varepsilon)}$-junta 와 $\varepsilon$-가깝다[^1]. 상수는 $n$ 과 $f$ 에 무관하다.

## Friedgut 정리의 증명

$k=2K/\varepsilon$ 과 문턱 $\tau$ 를 정하고, 영향력이 $\tau$ 이상인 좌표의 집합을 $J$ 라 한다. 영향력의 합이 $K$ 이하이므로 $\vert J\vert\le K/\tau$ 다. $g=\sum_{S\subseteq J}\hat f(S)x_S$ 로 두면 $g$ 는 $J$ 의 좌표에만 의존하고, $f-g$ 의 무게 $\sum_{S\not\subseteq J}\hat f(S)^2$ 는 두 부분으로 나뉜다.

- 준위가 $k$ 보다 큰 항. $\mathbf I\lbrack f\rbrack=\sum_S\vert S\vert\hat f(S)^2$ 이므로 무게가 $K/k=\varepsilon/2$ 이하다.
- 준위가 $k$ 이하이고 $J$ 밖의 좌표 $i$ 를 포함하는 항. 초축약성을 $D_if$ 에 쓴 Kahn–Kalai–Linial 정리의 부등식 $\sum_{S\ni i}3^{1-\vert S\vert}\hat f(S)^2\le\mathrm{Inf}\_i\lbrack f\rbrack^{3/2}$ 에서, 이런 항의 무게는 $3^{k}\sum_{i\notin J}\mathrm{Inf}\_i\lbrack f\rbrack^{3/2}\le 3^k\tau^{1/2}K$ 이하다.

$\tau=(\varepsilon/2K)^2 9^{-k}$ 로 잡으면 둘째도 $\varepsilon/2$ 이하이고 $\vert J\vert\le K/\tau=2^{O(K/\varepsilon)}$ 이다. $h=\mathrm{sgn}(g)$ 는 $J$ 위의 junta 이고, $f(x)\ne h(x)$ 이면 $\vert f(x)-g(x)\vert\ge 1$ 이므로 $\Pr\lbrack f\ne h\rbrack\le\mathbb E(f-g)^2\le\varepsilon$ 이다.

## 지수의 필요성

좌표 수의 상한이 $K$ 에 지수적인 것은 줄일 수 없다. 좌표 $m$ 개의 Tribes 함수는 총 영향력이 $\Theta(\log m)$ 이고 모든 좌표의 영향력이 같아, 좌표 수가 $m$ 보다 훨씬 작은 junta 와는 상수 확률 이상 다르다. $K=\Theta(\log m)$ 이므로 junta 의 크기 $m$ 은 $2^{\Omega(K)}$ 다[^2].

## 높은 준위의 무게로 쓴 꼴

증명에서 쓴 것은 $\mathbf I\lbrack f\rbrack$ 가 높은 준위의 무게를 누른다는 것뿐이다. Bourgain 은 총 영향력 대신 준위 $k$ 이상의 무게가 $k^{-1/2-o(1)}$ 보다 충분히 작다는 조건만으로 $f$ 가 junta 에 가깝다는 것을 보였다[^3]. 실숫값 함수 $(x_1+\cdots+x_n)/\sqrt n$ 은 총 영향력이 $1$ 이지만 어떤 작은 junta 와도 가깝지 않으므로, 값이 $\pm 1$ 이라는 조건이 필요하다.

## 준위 1 의 경우

Fourier 무게가 거의 전부 준위 $0$ 과 $1$ 에 있는 부울 함수는 상수나 독재자 함수 $\pm x_i$ 와 가깝다. 이것이 FKN 정리(Friedgut–Kalai–Naor theorem)이고, 가까운 junta 의 크기가 $1$ 인 경우다[^2].

# 활용

- 문턱 현상(threshold phenomenon). [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)의 단조 성질이 넓은 구간에서 천천히 $0$ 에서 $1$ 로 가면 총 영향력이 작고, 이 정리의 편향 측도 판본에 따라 그 성질은 작은 부분그래프 몇 개의 존재로 근사된다. Friedgut 은 이것으로 $k$-충족 가능성 문제($k$-satisfiability, $k$-SAT)의 문턱이 날카롭다는 것을 보였다[^4].
- [정점 덮개 문제](vertex-cover.md)의 근사 불가능성. Dinur 와 Safra 는 정점 덮개를 $1.36$ 배 안으로 근사하는 것이 NP(nondeterministic polynomial time)-어려움을 보일 때, 영향력이 작은 함수를 junta 로 바꾸는 단계에 이 정리를 썼다[^5].

[^1]: E. Friedgut, "Boolean functions with low average sensitivity depend on few coordinates", *Combinatorica* 18 (1998), 27–35.

[^2]: R. O'Donnell, *Analysis of Boolean Functions*, Cambridge University Press (2014), 2 장과 9 장. FKN 정리, Friedgut junta 정리와 그 최적성이 있다.

[^3]: J. Bourgain, "On the distribution of the Fourier spectrum of Boolean functions", *Israel Journal of Mathematics* 131 (2002), 269–276.

[^4]: E. Friedgut, "Sharp thresholds of graph properties, and the k-sat problem", *Journal of the American Mathematical Society* 12 (1999), 1017–1054.

[^5]: I. Dinur and S. Safra, "On the hardness of approximating minimum vertex cover", *Annals of Mathematics* 162 (2005), 439–485.

# 연관 문서

## 선수지식

- [Kahn–Kalai–Linial 정리](kkl-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #complexity #probability #analysis
