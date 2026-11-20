# Stanley 부등식

# 개요

**Stanley 부등식(Stanley's inequality)** 은 순서 제약이 있는 일들을 한 줄로 세우는 방법 가운데, 정해 둔 일 하나가 $k$ 번째에 오는 방법의 수 $N_k$ 가 $N_k^2\ge N\_{k-1}N\_{k+1}$ 을 만족한다는 정리다. 일 $a$, $b$, $c$, $x$ 가 있고 $b$ 는 $a$ 와 $x$ 를 끝낸 뒤에만 할 수 있으면, 네 일을 세우는 방법은 여덟 가지이고 $x$ 가 첫째부터 넷째에 오는 방법의 수는 $3, 3, 2, 0$ 이다.

이 수들이 늘다가 줄어드는 모양이 우연인지는 세는 것만으로 알 수 없다. Stanley 는 세는 문제를 [순서 다면체](order-polytope.md)의 단면의 부피로 바꾸고, 볼록체의 부피에 관한 부등식으로 이 모양이 모든 순서 제약에서 생긴다는 것을 증명했다.

# 직관

일 $a$, $b$, $c$, $x$ 가 있고 $b$ 는 $a$ 와 $x$ 를 모두 끝낸 뒤에만 할 수 있다. $b$ 가 넷째이면 앞의 세 일 $a$, $c$, $x$ 의 순서는 $3!=6$ 가지이고, $b$ 가 셋째이면 앞의 두 일이 $a$ 와 $x$ 이고 $c$ 가 넷째여서 $2$ 가지다. 모두 $8$ 가지다.

$x$ 의 자리로 나누어 센다. $b$ 가 넷째인 $6$ 가지에서 $x$ 는 첫째, 둘째, 셋째에 두 번씩 온다. $b$ 가 셋째인 $2$ 가지에서 $x$ 는 첫째와 둘째에 한 번씩 온다. 그래서 $x$ 가 $k$ 번째에 오는 방법의 수는 $N_1=3$, $N_2=3$, $N_3=2$, $N_4=0$ 이다.

가운데 수의 제곱은 양 옆 수의 곱 이상이다. $N_2^2=9\ge N_1N_3=6$ 이고 $N_3^2=4\ge N_2N_4=0$ 이다.

이 계산은 이 예의 수를 줄 뿐이고, 다른 순서 제약에서도 같은 부등식이 성립하는 이유를 주지 않는다. 그래서 일마다 $0$ 과 $1$ 사이의 시각을 아무렇게나 뽑는다. 순서를 지키는 시각들의 집합이 순서 다면체이고, $x$ 의 시각을 $\lambda$ 로 고정한 단면의 부피를 계산한다.

$x$ 의 시각이 $\lambda$ 이면 $b$ 의 시각 $g_b$ 는 $\lambda$ 와 $1$ 사이이고, $a$ 의 시각은 $0$ 과 $g_b$ 사이이며, $c$ 의 시각은 아무 값이다. 단면의 부피는 다음과 같다.

$$
\int_\lambda^1 g_b\thinspace dg_b=\frac{1-\lambda^2}{2}
$$

이 값은 $N_k$ 를 계수로 다시 쓸 수 있다. $x$ 가 $k$ 번째인 순서에서는 앞의 $k-1$ 개의 시각이 $\lbrack 0,\lambda\rbrack$ 에, 뒤의 $4-k$ 개의 시각이 $\lbrack\lambda,1\rbrack$ 에 정해진 순서로 놓이므로, 그 부피는 $\lambda^{k-1}(1-\lambda)^{4-k}/((k-1)!(4-k)!)$ 이다. 이것에 $N_k$ 를 곱해 더하면 $(1-\lambda^2)/2$ 가 된다. 단면은 $\lambda=0$ 의 단면과 $\lambda=1$ 의 단면을 $1-\lambda$ 대 $\lambda$ 로 섞은 볼록체이고, 그런 볼록체의 부피의 계수는 [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)을 따른다.

# 정의

## 선형 확장과 위치의 수

$P$ 가 원소 $n$ 개인 유한 [부분순서](partial-orders.md)일 때, $P$ 의 원소를 $u\lt\_P v$ 이면 $u$ 가 $v$ 보다 앞에 오도록 한 줄로 세운 것을 **선형 확장(linear extension)** 이라 한다. 원소 $x\in P$ 와 $1\le k\le n$ 에 대해 $x$ 가 $k$ 번째에 오는 선형 확장의 수를 $N_k=N_k(P,x)$ 라 쓴다. 직관 절의 $P$ 는 $a\lt b$, $x\lt b$ 이고 $c$ 는 어느 원소와도 비교되지 않는 부분순서이며, $N=(3,3,2,0)$ 이다.

## 정리

Stanley 부등식은 모든 유한 부분순서 $P$, 원소 $x$, $2\le k\le n-1$ 에 대해 다음이 성립한다는 정리다[^1].

$$
N_k^2\ge N_{k-1}N_{k+1}
$$

곧 수열 $N_1,\dots,N_n$ 은 Alexandrov–Fenchel 부등식 문서의 뜻으로 로그 오목(log-concave)이다.

# 성질

## 단면의 혼합부피 표현

$P$ 의 순서 다면체를 $\mathcal O(P)$ 라 하고, $\mathcal O(P)$ 의 점 가운데 $x$ 의 좌표가 $\lambda$ 인 것들에서 $x$ 좌표를 뺀 $(n-1)$ 차원 단면을 $S\_\lambda$ 라 한다. $K=S\_1$, $L=S\_0$ 으로 두면 다음이 성립한다[^1].

$$
S_\lambda=\lambda K+(1-\lambda)L,\qquad N_k=(n-1)!\thinspace V\left(K^{k-1},L^{n-k}\right)
$$

$V$ 는 [혼합부피](mixed-volumes.md)다. $K$ 는 $x$ 보다 큰 원소의 좌표가 모두 $1$ 인 단면이고, $L$ 은 $x$ 보다 작은 원소의 좌표가 모두 $0$ 인 단면이다.

증명의 요지. 볼록성에서 $S\_\lambda\supseteq\lambda K+(1-\lambda)L$ 이고, Stanley 는 반대 포함도 증명했다. 직관 절의 계산처럼 $\mathrm{vol}(S\_\lambda)$ 는 선형 확장마다 다음 값을 더한 것이다.

$$
\frac{\lambda^{k-1}(1-\lambda)^{n-k}}{(k-1)!\thinspace(n-k)!}
$$

한편 혼합부피의 정의에서 $\mathrm{vol}(\lambda K+(1-\lambda)L)$ 의 $\lambda^{k-1}(1-\lambda)^{n-k}$ 계수는 $\binom{n-1}{k-1}V(K^{k-1},L^{n-k})$ 이다. 두 전개의 계수를 비교하면 위 식이 나온다. ∎

## 증명

혼합부피 표현에서 $N_k$ 는 $V(K^{k-1},L^{n-k})$ 에 상수 $(n-1)!$ 을 곱한 것이다. Alexandrov–Fenchel 부등식의 로그 오목성 정리에 따르면 $j\mapsto V(K^j,L^{n-1-j})$ 는 로그 오목이므로 $N_k^2\ge N\_{k-1}N\_{k+1}$ 이다. ∎

## 단봉성

$x$ 보다 작은 원소가 $d$ 개, 큰 원소가 $u$ 개이면 $N_k\gt 0$ 인 것은 $d+1\le k\le n-u$ 와 동치다. 그래서 $N_k$ 가 양수인 $k$ 는 연속한 구간을 이룬다. 양수 구간에서 로그 오목이면 $N\_{k+1}/N_k$ 가 $k$ 에 대해 증가하지 않으므로, 수열은 한 번 늘다가 한 번 줄어드는 단봉(unimodal) 수열이다.

## 등호 조건

Shenfeld 와 van Handel 은 Alexandrov–Fenchel 부등식의 다면체 등호 조건을 결정하고, 그 결과로 $N_k\gt 0$ 일 때 $N_k^2=N\_{k-1}N\_{k+1}$ 인 것이 $N\_{k-1}=N_k=N\_{k+1}$ 과 동치임을 보였다[^2].

# 활용

- [1/3–2/3 추측](one-third-two-thirds-conjecture.md). Kahn 과 Saks 는 두 원소 $x$, $y$ 의 위치의 차가 $k$ 인 선형 확장의 수가 로그 오목이라는 Stanley 부등식의 변형으로, 전순서가 아닌 부분순서에 $\Pr(x\lt y)$ 가 $3/11$ 과 $8/11$ 사이인 쌍이 있음을 보였다.
- 부분순서가 주어진 정렬. 일부 비교 결과를 아는 원소들을 정렬할 때, 위 결과의 쌍을 비교하면 남은 선형 확장의 수가 $8/11$ 배 이하로 준다. 그래서 선형 확장의 수의 로그에 비례하는 횟수의 비교로 정렬이 끝난다.

[^1]: Richard P. Stanley, "Two combinatorial applications of the Aleksandrov–Fenchel inequalities", *Journal of Combinatorial Theory, Series A* **31** (1981), 56–65.
[^2]: Yair Shenfeld, Ramon van Handel, "The extremals of the Alexandrov–Fenchel inequality for convex polytopes", *Acta Mathematica* **231** (2023), 89–204.

# 연관 문서

## 선수지식

- [순서 다면체](order-polytope.md)
- [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#order_theory #combinatorics #analysis
