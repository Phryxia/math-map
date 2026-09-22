# Erdős–Rényi 랜덤 그래프

# 개요

Erdős–Rényi 랜덤 그래프 $G(n,p)$ 는 정점 $n$ 개에 가능한 간선 각각을 확률 $p$ 로 독립하게 넣어 얻는 그래프다. $n$ 이 커질 때 그래프의 성질은 $p$ 를 조금 바꾸는 것만으로 확률 $0$ 에서 확률 $1$ 로 넘어가고, 그 자리를 문턱이라 한다.

연결성의 문턱은 $p=\log n/n$ 이고 고립점이 사라지는 자리와 같다. 평균 차수가 $1$ 을 넘는 자리 $p=1/n$ 에서는 최대 성분의 크기가 $\log n$ 규모에서 $n$ 규모로 바뀐다. 문턱을 찾는 계산은 적률을 재는 두 단계로 이루어진다.

# 직관

정점 $n$ 개에 간선을 확률 $p$ 로 독립하게 넣었을 때 그래프가 연결될 확률을 알려 한다. 연결성을 직접 다루는 대신 연결을 막는 가장 작은 장애인 고립점부터 센다.

정점 하나가 고립될 확률은 $(1-p)^{n-1}$ 이다. 고립점의 개수를 $X$ 라 하면

$$
\mathbb E\lbrack X\rbrack=n(1-p)^{n-1}\approx n\thinspace e^{-pn}
$$

이다. 여기에 $p=(\log n+c)/n$ 을 넣으면 $\mathbb E\lbrack X\rbrack\to e^{-c}$ 로 수렴한다. $c$ 를 크게 하면 이 값이 $0$ 으로 가고, 작게 하면 커진다.

기댓값이 $0$ 으로 가면 $X\ge 1$ 일 확률도 $0$ 으로 간다. 개수는 정수이므로 $\Pr\lbrack X\ge 1\rbrack\le\mathbb E\lbrack X\rbrack$ 이기 때문이다. 반대로 기댓값이 커질 때 $X\ge 1$ 이라고 말하려면 기댓값만으로는 부족하다. 몇 안 되는 경우에 $X$ 가 아주 크면 기댓값이 커져도 대부분의 그래프에서 $X=0$ 일 수 있다. 분산을 재서 그런 쏠림이 없음을 보이면 $X\ge 1$ 이 따라온다.

두 계산을 합치면 $p=(\log n+c)/n$ 을 지나면서 고립점이 사라진다. 고립점이 없으면 연결이라는 것까지 보이면 연결성의 문턱이 같은 자리에 놓인다.

# 정의

## 두 모형

$G(n,p)$ 는 정점 집합 $\lbrace 1,\dots,n\rbrace$ 위에서 $\binom n2$ 개의 간선 각각을 서로 독립하게 확률 $p$ 로 넣어 얻는 랜덤 그래프다. $G(n,m)$ 은 간선이 정확히 $m$ 개인 그래프 전체에서 하나를 균등하게 뽑은 것이다.

$m\approx p\binom n2$ 이면 두 모형에서 성립하는 성질이 대체로 같아, 계산이 쉬운 $G(n,p)$ 에서 보이고 $G(n,m)$ 으로 옮기는 것이 표준이다.

## 문턱

그래프의 성질 $\mathcal P$ 가 **단조**라는 것은 간선을 더해도 성질이 유지된다는 뜻이다. 연결성, 부분그래프 $H$ 의 포함, 해밀턴성이 그렇다.

단조 성질 $\mathcal P$ 에 대해 함수 $p^{\ast}(n)$ 이 **문턱**이라는 것은 다음 두 조건이 성립한다는 뜻이다.

$$
p/p^{\ast}\to 0\thinspace\Rightarrow\thinspace \Pr\lbrack G(n,p)\in\mathcal P\rbrack\to 0,\qquad
p/p^{\ast}\to\infty\thinspace\Rightarrow\thinspace \Pr\lbrack G(n,p)\in\mathcal P\rbrack\to 1
$$

자명하지 않은 단조 성질은 모두 문턱을 갖는다.[^1]

# 성질

## 1차 적률법과 2차 적률법

음이 아닌 정수값 [확률변수](random-variables.md) $X$ 에 대해 Markov 부등식이

$$
\Pr\lbrack X\ge 1\rbrack\thinspace\le\thinspace\mathbb E\lbrack X\rbrack
$$

을 주고, Chebyshev 부등식이

$$
\Pr\lbrack X=0\rbrack\thinspace\le\thinspace\frac{\mathrm{Var}\lbrack X\rbrack}{(\mathbb E\lbrack X\rbrack)^2}
$$

을 준다. 앞의 것으로 $\mathbb E\lbrack X\rbrack\to 0$ 일 때 $X=0$ 이 거의 확실함을 얻고, 뒤의 것으로 $\mathrm{Var}\lbrack X\rbrack=o((\mathbb E\lbrack X\rbrack)^2)$ 일 때 $X\ge 1$ 이 거의 확실함을 얻는다. 문턱을 찾는 계산은 이 두 단계다.

## 부분그래프의 문턱

정점 $v$ 개, 간선 $e$ 개인 그래프 $H$ 에 대해 밀도를 $\rho(H)=e/v$ 로 두고

$$
m(H)=\max\lbrace \rho(H')\thinspace :\thinspace H'\subseteq H,\thinspace H'\ne\varnothing\rbrace
$$

로 둔다. $H$ 를 부분그래프로 포함하는 성질의 문턱은 $n^{-1/m(H)}$ 이다.[^2]

1차 적률법 쪽은 세기로 나온다. $G(n,p)$ 에 들어 있는 $H$ 의 복사본 개수 $X$ 는 $\mathbb E\lbrack X\rbrack=\Theta(n^{v}p^{e})$ 이고, $p\ll n^{-v/e}$ 이면 이 값이 $0$ 으로 간다. $H$ 의 부분그래프 가운데 밀도가 가장 큰 것이 먼저 사라지므로 지수에 $m(H)$ 가 들어간다. 2차 적률법 쪽은 두 복사본이 간선을 공유하는 경우를 공유하는 부분그래프별로 나누어 세면 분산이 작음이 나온다.

## 연결성

$p=(\log n+c_n)/n$ 이라 하자. $c_n\to-\infty$ 이면 $G(n,p)$ 가 연결일 확률이 $0$ 으로 가고, $c_n\to\infty$ 이면 $1$ 로 간다. $c_n\to c$ 로 수렴하면 연결일 확률이 $e^{-e^{-c}}$ 로 간다.[^3]

고립점의 개수는 위의 두 적률법으로 처리된다. 고립점이 없는데 연결이 아니라면 크기가 $2$ 이상 $n/2$ 이하인 성분이 있고, 그런 성분이 하나라도 있을 확률은 크기별로 합을 잡으면 $0$ 으로 간다. 따라서 연결성의 문턱이 고립점이 사라지는 자리와 같다.

## 거대 성분

$p=c/n$ 으로 두면 평균 차수가 $c$ 에 가깝다. $c\lt 1$ 이면 최대 성분의 크기가 $O(\log n)$ 이고, $c\gt 1$ 이면 크기가 $\theta(c)\thinspace n$ 인 성분이 하나 있고 나머지 성분은 전부 $O(\log n)$ 이다. 여기서 $\theta(c)$ 는

$$
\theta=1-e^{-c\theta}
$$

의 양의 해다.[^4] 한 정점에서 시작해 이웃을 훑어 나가는 과정을 자식 수의 평균이 $c$ 인 분기 과정으로 근사하면, $c$ 가 $1$ 을 넘을 때 그 과정이 영원히 이어질 확률이 $\theta(c)$ 이고 그것이 성분 크기의 비율로 나타난다.

# 활용

- **확률적 방법의 모형.** 성질을 만족하는 그래프의 존재를 보일 때 $G(n,p)$ 를 뽑아 확률이 양수임을 보인다. Ramsey 수의 하한과 둘레가 크면서 채색수도 큰 그래프의 구성이 [확률적 방법](probabilistic-method.md)의 표준 예다.
- **알고리즘의 평균 분석.** 입력 그래프를 $G(n,p)$ 에서 뽑았다고 가정하면 최악의 경우와 다른 실행시간이 나온다. [그래프 동형](graph-isomorphism.md) 판정과 색칠에서 평균적으로 빠른 절차의 근거가 된다.
- **실제 네트워크와의 차이.** $G(n,p)$ 의 차수 분포는 이항분포라 꼬리가 지수적으로 얇고, 삼각형의 개수가 정점 수에 비해 적다. 관측되는 네트워크의 두꺼운 꼬리와 높은 뭉침을 설명하지 못하므로 기준선으로 쓰인다.

[^1]: B. Bollobás, A. Thomason, *Threshold functions*, Combinatorica **7** (1987), 35–38.

[^2]: 표준 서술은 S. Janson, T. Łuczak, A. Ruciński, *Random Graphs*, Wiley (2000) 3 장이다.

[^3]: P. Erdős, A. Rényi, *On random graphs I*, Publ. Math. Debrecen **6** (1959), 290–297.

[^4]: P. Erdős, A. Rényi, *On the evolution of random graphs*, Publ. Math. Inst. Hungar. Acad. Sci. **5** (1960), 17–61.

# 연관 문서

## 선수지식

- [확률적 방법](probabilistic-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #probability #graph_theory
