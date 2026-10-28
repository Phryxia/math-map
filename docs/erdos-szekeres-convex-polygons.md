# Erdős–Szekeres 볼록 다각형 문제

# 개요

**Erdős–Szekeres 볼록 다각형 문제(Erdős–Szekeres convex polygon problem)** 는 평면에 점을 몇 개 찍어야 그 가운데 $n$ 개가 반드시 볼록 $n$ 각형을 이루는지 묻는 문제다. 세 점이 한 직선 위에 없게 점 다섯 개를 찍으면 어떻게 찍어도 그 가운데 네 개가 볼록 사각형을 이루지만, 점 네 개로는 삼각형 안에 점 하나를 둔 배치에서 볼록 사각형이 생기지 않는다. 이 문제는 그런 최소 개수가 유한함을 증명하고 그 크기를 $n$ 에 대해 위아래로 추정하며, 하한 $2^{n-2}+1$ 이 정확한 값이라는 Erdős–Szekeres 추측이 있다.

# 직관

Erdős–Szekeres 볼록 다각형 문제는 평면에서 세 점이 한 직선 위에 있지 않은 점을 몇 개 찍어야 그 가운데 $n$ 개가 반드시 볼록 $n$ 각형의 꼭짓점이 되는지를 묻는 문제다. 그 최소 개수를 $\mathrm{ES}(n)$ 으로 쓴다. P. Erdős 와 G. Szekeres 는 1935 년에 $\mathrm{ES}(n)$ 이 유한함을 증명했고[^1], 행복한 결말 문제(happy ending problem)라고도 부른다.

알려진 범위는 다음이다.

$$
2^{n-2}+1\le\mathrm{ES}(n)\le 2^{n+O(n^{2/3}\log n)}
$$

점 넷이면 볼록 사각형이 나오지 않을 수 있다. 삼각형의 꼭짓점 셋과 그 안의 점 하나가 그런 예다. 점 다섯이면 볼록 사각형이 반드시 나온다.

다섯 점을 고무줄로 감싸면 고무줄이 걸리는 점의 수에 따라 세 경우가 된다. 다섯이나 넷이면 그 가운데 넷이 볼록 사각형이다. 셋이면 삼각형 안에 점 둘 $p,q$ 가 있다. 직선 $pq$ 는 삼각형의 꼭짓점 셋을 두 쪽으로 가르므로 한쪽에 꼭짓점 둘 $a,b$ 가 있고, $a,b,p,q$ 가 볼록 사각형이다. 그래서 $\mathrm{ES}(4)=5$ 다.

점이 많아지면 경우를 나누는 이 방법은 쓸 수 없다. Erdős 와 Szekeres 는 점을 왼쪽에서 오른쪽으로 늘어놓고, 오목하게 휘는 사슬과 볼록하게 휘는 사슬 가운데 하나가 길어진다는 것을 세는 방법으로 바꿨다. 이 세기는 [비둘기집 원리](pigeonhole-principle.md)로 증명하는 단조 부분수열의 Erdős–Szekeres 정리와 같은 꼴이다.

# 정의

평면의 유한 점 집합에서 세 점이 한 직선 위에 있지 않으면 **일반 위치(general position)** 에 있다고 한다. 점 집합의 어느 점도 나머지 점들의 볼록 껍질에 속하지 않으면 **볼록 위치(convex position)** 에 있다고 한다. 볼록 위치에 있는 $n$ 개 점은 볼록 $n$ 각형의 꼭짓점이다.

$\mathrm{ES}(n)$ 은 일반 위치에 있는 점 $N$ 개가 언제나 볼록 위치에 있는 $n$ 개 점을 포함하는 가장 작은 $N$ 이다.

$x$ 좌표가 서로 다른 점들을 $x$ 좌표 순으로 $p_1,\dots,p_k$ 라 할 때, 이웃한 두 점을 잇는 선분의 기울기가 증가하면 **컵(cup)**, 감소하면 **캡(cap)** 이라 한다. 컵과 캡은 모두 볼록 위치에 있다.

# 성질

## 컵과 캡의 정리

정리(Erdős–Szekeres). $g(k,l)$ 을 일반 위치이고 $x$ 좌표가 서로 다른 점 $N$ 개가 언제나 점 $k$ 개의 컵이나 점 $l$ 개의 캡을 포함하는 가장 작은 $N$ 이라 하면

$$
g(k,l)=\binom{k+l-4}{k-2}+1
$$

이다[^1]. 따라서 $\mathrm{ES}(n)\le g(n,n)=\binom{2n-4}{n-2}+1\approx 4^n/\sqrt n$ 이다.

증명의 요지. $g(k,3)=k$ 와 $g(3,l)=l$ 에서 시작해 $g(k,l)\le g(k-1,l)+g(k,l-1)-1$ 을 보인다. 점 집합 $S$ 에서 점 $k-1$ 개 컵의 오른쪽 끝점이 되는 점의 집합을 $E$ 라 한다. $S\setminus E$ 에는 점 $k-1$ 개 컵이 없으므로 점 $l$ 개 캡이 없다면 $\lvert S\setminus E\rvert\lt g(k-1,l)$ 이고, 그래서 $\lvert E\rvert\ge g(k,l-1)$ 이다. $E$ 에 점 $k$ 개 컵이 없으면 점 $l-1$ 개 캡이 있고, 그 왼쪽 끝점 $p$ 는 어느 점 $k-1$ 개 컵의 오른쪽 끝점이다. $p$ 에서 컵의 마지막 기울기가 캡의 첫 기울기보다 작으면 컵이 점 $k$ 개로 늘고, 크면 캡이 왼쪽으로 늘어 점 $l$ 개가 된다. 같은 크기에서 컵도 캡도 없는 점 집합을 귀납적으로 쌓아 하한이 맞음을 보인다.

## 하한의 구성

Erdős 와 Szekeres 는 볼록 위치의 $n$ 개 점이 없는 일반 위치의 점 $2^{n-2}$ 개를 구성했다[^2]. 컵과 캡의 정리에서 등호를 주는 점 집합들을 $k+l=n+2$ 인 $(k,l)$ 마다 하나씩 만들고, 서로 멀리 떨어뜨려 이어 붙인다. 개수는 $\sum_{i}\binom{n-2}{i}=2^{n-2}$ 이다.

**Erdős–Szekeres 추측(Erdős–Szekeres conjecture)** 은 모든 $n\ge 3$ 에서 $\mathrm{ES}(n)=2^{n-2}+1$ 이라는 진술이다. $n\le 6$ 에서 확인되었다. $\mathrm{ES}(5)=9$ 는 J. D. Kalbfleisch, J. G. Kalbfleisch, R. G. Stanton 이[^3], $\mathrm{ES}(6)=17$ 은 G. Szekeres 와 L. Peters 가 컴퓨터 탐색으로 증명했다[^4].

## Suk 의 상한

A. Suk 는 $\mathrm{ES}(n)\le 2^{n+O(n^{2/3}\log n)}$ 을 증명했다[^5]. 지수의 주항이 추측의 $n-2$ 와 같은 $n$ 이 되었다.

## Ramsey 정리를 쓰는 증명

$N$ 개 점의 네 점 부분집합마다 볼록 위치이면 빨강, 아니면 파랑을 칠한다. 직관 절의 논증으로 어느 다섯 점에도 빨간 네 점이 있으므로 파란 다섯 점 집합은 없다. [Ramsey 이론](ramsey-theory.md)의 초그래프 Ramsey 정리(hypergraph Ramsey theorem)로 $N$ 이 충분히 크면 네 점 부분집합이 모두 빨간 $n$ 개 점이 있다. 한 점이 나머지의 볼록 껍질 안에 있으면 그 점을 담는 삼각형과 함께 볼록이 아닌 네 점이 생기므로, 이 $n$ 개 점은 볼록 위치에 있다. 이 증명이 주는 상한은 탑 함수 꼴이라 컵과 캡의 정리보다 훨씬 크다.

## 빈 볼록 다각형

볼록 $n$ 각형 안에 다른 점이 없기를 요구하면 답이 달라진다. 점이 충분히 많으면 빈 볼록 육각형이 반드시 있다(Gerken, Nicolás)[^6][^7]. 반면 J. D. Horton 은 빈 볼록 칠각형이 없는 임의 크기의 일반 위치 점 집합을 구성했다[^8].

# 활용

- 계산 기하. 점 집합에서 가장 큰 볼록 부분집합을 찾는 문제와 볼록 껍질의 층 구조가 컵과 캡의 분해를 쓴다.
- 순서 유형(order type)의 세기. 일반 위치 점 집합의 조합적 성질은 세 점의 방향(시계 방향인지 반시계 방향인지)만으로 정해지고, $\mathrm{ES}(6)=17$ 의 컴퓨터 증명은 이 방향 정보만으로 경우를 나누어 탐색한 것이다.
- Ramsey 이론의 기하적 사례. 초그래프 Ramsey 정리가 유한 기하에서 쓰이는 첫 예로 인용된다.

[^1]: P. Erdős, G. Szekeres, "A combinatorial problem in geometry", Compositio Mathematica 2 (1935), 463–470.
[^2]: P. Erdős, G. Szekeres, "On some extremum problems in elementary geometry", Annales Universitatis Scientiarum Budapestinensis de Rolando Eötvös Nominatae, Sectio Mathematica 3–4 (1960–1961), 53–62.
[^3]: J. D. Kalbfleisch, J. G. Kalbfleisch, R. G. Stanton, "A combinatorial problem on convex regions", Proceedings of the Louisiana Conference on Combinatorics, Graph Theory and Computing (1970), 180–188.
[^4]: G. Szekeres, L. Peters, "Computer solution to the 17-point Erdős–Szekeres problem", ANZIAM Journal 48 (2006), 151–164.
[^5]: A. Suk, "On the Erdős–Szekeres convex polygon problem", Journal of the American Mathematical Society 30 (2017), 1047–1053.
[^6]: T. Gerken, "Empty convex hexagons in planar point sets", Discrete & Computational Geometry 39 (2008), 239–272.
[^7]: C. M. Nicolás, "The empty hexagon theorem", Discrete & Computational Geometry 38 (2007), 389–397.
[^8]: J. D. Horton, "Sets with no empty convex 7-gons", Canadian Mathematical Bulletin 26 (1983), 482–484.

# 연관 문서

## 선수지식

- [Ramsey 이론](ramsey-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory
