# Carleman 부등식

# 개요

**Carleman 부등식(Carleman's inequality)** 은 양수 수열의 앞부분 기하평균들을 모두 더한 값이 원래 수열의 합의 $e$ 배를 넘지 않는다는 부등식이다. $a_n=1/n^2$ 의 합은 $\pi^2/6\approx 1.645$ 로 유한하다. 앞의 $n$ 항의 기하평균 $(a_1\cdots a_n)^{1/n}$ 은 $1$, $0.5$, 약 $0.303$, 약 $0.204$ 로 줄어드는데, 이 값들을 끝까지 더해도 유한한지가 물음이다.

이 부등식은 기하평균들의 합이 $e\cdot 1.645\approx 4.47$ 이하라고 답한다. 증명은 각 기하평균에 가중을 넣은 [산술-기하 평균 부등식](am-gm-inequality.md)을 쓰고, 가중을 더한 합의 순서를 바꾸는 것이다.

# 직관

기하평균은 산술평균 이하이므로 앞의 $n$ 항의 기하평균을 산술평균 $(a_1+\cdots+a_n)/n$ 으로 누를 수 있다. 그런데 $n$ 번째 산술평균에는 $a_1/n$ 이 들어 있어서, $a_1\gt 0$ 이면 산술평균들의 합이 [조화급수](harmonic-series.md)처럼 발산한다. 그래서 이 상한은 쓸모가 없다. 앞쪽 항이 뒤의 모든 평균에 같은 무게로 들어가서 막혔다.

그래서 항마다 무게를 달리한다. $a_k$ 에 $c_k$ 를 곱한 뒤 기하평균을 내고, 나중에 $(c_1\cdots c_n)^{1/n}$ 으로 나눈다. 뒤쪽 항일수록 큰 $c_k$ 를 주면 산술평균 안에서 앞쪽 항의 몫이 줄어든다. $c_1\cdots c_n=(n+1)^n$ 이 되게 고르면 나누는 수가 $n+1$ 이 되어, 이어지는 합이 망원급수로 정리된다.

# 정의

음이 아닌 실수 $a_1,a_2,\dots$ 에 대해 다음을 **Carleman 부등식** 이라 한다[^1].

$$
\sum_{n=1}^\infty(a_1a_2\cdots a_n)^{1/n}\le e\sum_{n=1}^\infty a_n
$$

$e$ 는 자연로그의 밑이다. 우변이 유한하면 좌변도 유한하다. 개요의 $a_n=1/n^2$ 에서 좌변은 약 $3.10$ 이고 우변은 약 $4.47$ 이다.

# 성질

## 증명

$c_k=(k+1)^k/k^{k-1}$ 로 둔다. 곱이 망원곱이 되어 $c_1c_2\cdots c_n=(n+1)^n$ 이다. 가중을 넣은 수 $c_1a_1,\dots,c_na_n$ 에 산술-기하 평균 부등식을 쓰면 다음이 나온다.

$$
(a_1\cdots a_n)^{1/n}=\frac{(c_1a_1\cdots c_na_n)^{1/n}}{n+1}\le\frac{c_1a_1+\cdots+c_na_n}{n(n+1)}
$$

$n$ 에 대해 더하고 합의 순서를 바꾼다. $\sum_{n\ge k}1/\bigl(n(n+1)\bigr)=1/k$ 이므로 다음과 같다.

$$
\sum_{n=1}^\infty(a_1\cdots a_n)^{1/n}\le\sum_{k=1}^\infty\frac{c_k}{k}a_k=\sum_{k=1}^\infty\Big(1+\frac1k\Big)^ka_k
$$

$(1+1/k)^k$ 은 증가하며 $e$ 로 수렴하므로 모든 $k$ 에서 $e$ 보다 작다.

## 상수 e 의 최선성

$e$ 를 더 작은 수로 바꾸면 부등식이 성립하지 않는다. $k\le N$ 에서 $a_k=1/k$ 이고 나머지가 $0$ 인 수열을 잡는다. $(n!)^{1/n}$ 은 $n/e$ 에 가까워지므로 $n\le N$ 에서 기하평균 $(n!)^{-1/n}$ 은 $e/n$ 에 가까워진다.

좌변은 $e\log N$ 과 비가 $1$ 로 가고 우변의 합은 $\log N$ 과 비가 $1$ 로 간다. 두 합의 비는 $N\to\infty$ 에서 $e$ 로 간다.

## 등호 조건

수열이 모두 $0$ 이 아니면 등호는 성립하지 않는다. 증명의 마지막 단계에서 $(1+1/k)^k\lt e$ 이므로, $a_k\gt 0$ 인 $k$ 가 하나라도 있으면 부등식이 엄밀하다.

## Hardy 부등식과의 관계

[Hardy 부등식](hardy-inequality.md)의 수열 꼴은 $p\gt 1$ 에서 다음이다.

$$
\sum_{n=1}^\infty\Big(\frac{a_1+\cdots+a_n}{n}\Big)^p\le\Big(\frac{p}{p-1}\Big)^p\sum_{n=1}^\infty a_n^p
$$

$a_k$ 를 $a_k^{1/p}$ 로 바꾸면 좌변의 각 항은 $a_k^{1/p}$ 들의 산술평균의 $p$ 제곱이 된다. $p\to\infty$ 에서 이 값은 기하평균 $(a_1\cdots a_n)^{1/n}$ 으로 가고 상수 $(p/(p-1))^p$ 는 $e$ 로 간다. 그래서 Carleman 부등식은 Hardy 부등식의 $p\to\infty$ 극한이다.

# 활용

- 적분 꼴. 양의 함수 $f$ 에 대해 다음이 성립한다. 좌변의 지수 안은 구간 $\lbrack 0,x\rbrack$ 에서 $\log f$ 의 평균이므로, 이것은 함수의 기하평균에 대한 같은 부등식이다.

  $$
  \int_0^\infty\exp\Big(\frac1x\int_0^x\log f(t)\thinspace dt\Big)\thinspace dx\le e\int_0^\infty f(x)\thinspace dx
  $$

- 준해석 함수(quasi-analytic function). 모든 $n$ 에서 $\sup\vert f^{(n)}\vert\le M_n$ 인 매끄러운 함수의 모임에서, 한 점의 모든 도함수가 $0$ 인 함수가 $0$ 뿐일 조건을 찾는 문제가 있다. Carleman 은 $M_n$ 이 로그 볼록일 때 그 조건이 $\sum_n M_n^{-1/n}=\infty$ 임을 증명하면서 이 부등식을 썼다[^1].

[^1]: T. Carleman, "Sur les fonctions quasi-analytiques", *Conférences faites au cinquième congrès des mathématiciens scandinaves*, Helsingfors (1923), 181–196.

# 연관 문서

## 선수지식

- [산술-기하 평균 부등식](am-gm-inequality.md)
- [Hardy 부등식](hardy-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #combinatorics
