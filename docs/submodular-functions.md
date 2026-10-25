# 부분모듈 함수

# 개요

**부분모듈 함수(submodular function, 열등모듈 함수)** 는 유한 집합 $E$ 의 부분집합에 실수를 주는 함수 $f$ 가운데 모든 $S,T\subseteq E$ 에서 $f(S)+f(T)\ge f(S\cup T)+f(S\cap T)$ 를 만족하는 것이다. 원소 하나를 더할 때 늘어나는 값이 이미 가진 집합이 클수록 작다는 조건과 동치다.

[Matroid](matroids.md)의 계수 함수, 그래프의 절단 함수, 집합족이 덮는 원소의 수가 모두 부분모듈 함수다. 부분모듈 함수의 최소화는 다항시간에 풀리고, 최대화는 NP(nondeterministic polynomial time)-난해이지만 단조이면 탐욕법이 $1-1/e$ 배 이상의 값을 준다.

# 직관

감지기 셋이 지키는 구역이 $A_1=\lbrace 1,2,3,4\rbrace$, $A_2=\lbrace 1,2,5\rbrace$, $A_3=\lbrace 3,4,6\rbrace$ 이다. 감지기 두 개를 골라 지키는 구역의 수를 가장 크게 하려 한다. 고른 감지기 집합 $S$ 에 대해 $f(S)$ 를 $S$ 의 감지기들이 지키는 구역의 수로 둔다.

$A_2$ 를 혼자 고르면 구역이 $3$ 개 는다. $A_1$ 이 구역 $1,2$ 를 이미 지키므로, $A_1$ 을 고른 뒤에 $A_2$ 를 더하면 구역 $5$ 하나만 는다. 가진 감지기가 많을수록 새 감지기가 늘리는 구역이 적거나 같고, 이 성질이 부분모듈성이다.

가장 많이 늘리는 감지기부터 고르면 $A_1$ 을 고른 뒤 $A_2$ 나 $A_3$ 이 각각 $1$ 개를 더해 $5$ 개가 된다. $A_2$ 와 $A_3$ 을 고르면 $6$ 개이므로 이 방법은 최적이 아니다. 그래도 $5/6$ 은 최적값의 $1-1/e\approx 0.632$ 배보다 크고, $f$ 가 단조이고 부분모듈이면 이 비율이 늘 보장된다.

# 정의

$E$ 는 유한 집합이고 $f:2^E\to\mathbb R$ 이다. $S\subseteq E$ 와 $e\notin S$ 에 대해 $f(e\mid S)=f(S\cup\lbrace e\rbrace)-f(S)$ 를 한계 이득(marginal gain)이라 한다.

$f$ 가 다음 두 조건 가운데 하나를 만족하면 부분모듈 함수다. 두 조건은 동치다.

$$
f(S)+f(T)\ge f(S\cup T)+f(S\cap T)\qquad(S,T\subseteq E)
$$

$$
f(e\mid S)\ge f(e\mid T)\qquad(S\subseteq T,\ e\notin T)
$$

$S\subseteq T$ 에서 $f(S)\le f(T)$ 이면 단조(monotone)라 한다. 부등호가 반대인 함수를 초모듈 함수(supermodular function)라 하고, 등호이면 모듈 함수(modular function)라 한다. 모듈 함수는 원소마다 정한 무게의 합에 상수를 더한 꼴이다.

## 예

- 덮기 함수. 집합 $A_1,\dots,A_m$ 이 주어지면 $f(S)=\lvert\bigcup_{i\in S}A_i\rvert$ 는 단조 부분모듈 함수다.
- matroid 의 계수 함수 $r$ 은 단조 부분모듈 함수다.
- 절단 함수. 그래프 $G=(V,E)$ 에서 $f(S)$ 를 $S$ 와 $V\setminus S$ 를 잇는 간선의 수로 두면 부분모듈 함수이고 단조가 아니다.
- [엔트로피](entropy.md). 확률변수 $X_1,\dots,X_n$ 에서 $f(S)=H(X_i : i\in S)$ 는 단조 부분모듈 함수다. 부분모듈성은 조건부 상호정보 $I(X_A;X_B\mid X_C)\ge 0$ 과 같다.

# 성질

## Lovász 확장

$f(\varnothing)=0$ 이라 하자. $x\in\lbrack 0,1\rbrack^E$ 의 성분을 $x_{\sigma(1)}\ge\cdots\ge x_{\sigma(n)}$ 으로 늘어놓고 $S_i=\lbrace\sigma(1),\dots,\sigma(i)\rbrace$ 로 두면

$$
\hat f(x)=\sum_{i=1}^n x_{\sigma(i)}\bigl(f(S_i)-f(S_{i-1})\bigr)
$$

을 $f$ 의 Lovász 확장(Lovász extension)이라 한다. $\theta$ 를 $\lbrack 0,1\rbrack$ 에서 고르게 뽑으면 $\hat f(x)$ 는 $f(\lbrace e : x_e\ge\theta\rbrace)$ 의 기댓값이다. $\hat f$ 는 꼭짓점 $\lbrace 0,1\rbrace^E$ 에서 $f$ 와 같다.

정리(Lovász). $f$ 가 부분모듈 함수인 것은 $\hat f$ 가 [볼록 함수](convexity.md)인 것과 동치다[^1].

## 최소화

부분모듈 함수의 최솟값은 값을 묻는 신탁 아래 다항시간에 구한다. $\min_S f(S)=\min_{x\in\lbrack 0,1\rbrack^E}\hat f(x)$ 이고 $\hat f$ 가 볼록이므로, M. Grötschel, L. Lovász, A. Schrijver 가 [타원체법](ellipsoid-method.md)으로 처음 다항시간 알고리즘을 얻었다[^2]. 2000 년에 A. Schrijver 와 S. Iwata, L. Fleischer, S. Fujishige 가 따로 조합적 강다항시간 알고리즘을 냈다. 그래프의 최소 절단과 두 matroid 의 공통 독립집합 문제가 이 최소화의 특수한 경우다.

## 단조 함수의 탐욕적 최대화

정리(Nemhauser–Wolsey–Fisher). $f$ 가 단조 부분모듈 함수이고 $f(\varnothing)=0$ 이면, 한계 이득이 가장 큰 원소를 $k$ 번 고른 집합 $S_k$ 는 $f(S_k)\ge(1-1/e)\max_{\lvert S\rvert\le k}f(S)$ 를 만족한다[^3].

증명의 요지. 최적 집합을 $O$, 값을 $\mathrm{OPT}$ 라 한다. 단조성과 부분모듈성에서

$$
\mathrm{OPT}\le f(S_i\cup O)\le f(S_i)+\sum_{e\in O}f(e\mid S_i)\le f(S_i)+k\bigl(f(S_{i+1})-f(S_i)\bigr)
$$

이다. 마지막 부등식은 탐욕법이 한계 이득이 가장 큰 원소를 고른 데서 나온다. 그래서 $\mathrm{OPT}-f(S_{i+1})\le(1-1/k)\bigl(\mathrm{OPT}-f(S_i)\bigr)$ 이고, $k$ 번 되풀이하면 $\mathrm{OPT}-f(S_k)\le(1-1/k)^k\mathrm{OPT}\le e^{-1}\mathrm{OPT}$ 다.

U. Feige 는 덮기 함수의 최대화에서 $1-1/e$ 보다 큰 비율을 다항시간에 보장하면 $\mathrm P=\mathrm{NP}$ 임을 증명했다[^4]. 그래서 이 비율은 다항시간 알고리즘으로 개선되지 않는다. 제약이 matroid 의 독립집합일 때는 탐욕법이 $1/2$ 을 보장하고, 연속 탐욕법(continuous greedy)이 $1-1/e$ 를 보장한다.

## 일반 최대화

단조가 아닌 부분모듈 함수의 최대화는 그래프의 최대 절단을 특수한 경우로 포함하므로 NP-난해다. 제약 없이 최대화할 때 원소를 하나씩 넣거나 빼는 무작위 이중 탐욕법이 기댓값 $1/2$ 배를 보장한다.

# 활용

- [Matroid 교집합 정리](matroid-intersection.md)의 최소최대 공식 $\min_A\bigl(r_1(A)+r_2(E\setminus A)\bigr)$ 는 부분모듈 함수 $r_1(A)+r_2(E\setminus A)$ 의 최소화이고, 이 관점에서 Edmonds 의 [다모듈 다면체](polymatroids.md) 교집합 정리로 일반화된다.
- 요약과 자료 선택. 문서에서 문장을 고르거나 학습 자료의 부분집합을 고를 때, 덮는 내용의 양을 덮기 함수로 두고 탐욕법을 쓴다.
- 영향력 최대화. 사회망의 확산 모형에서 처음 고른 사람 집합이 퍼뜨리는 사람 수의 기댓값이 단조 부분모듈 함수이므로 탐욕법이 $1-1/e$ 를 보장한다.
- 정보이론. 엔트로피의 단조성과 부분모듈성에서 유도되는 부등식을 Shannon 부등식이라 한다. Z. Zhang 과 R. W. Yeung 은 엔트로피 함수가 만족하지만 Shannon 부등식에서 유도되지 않는 부등식을 찾았다.

[^1]: L. Lovász, "Submodular functions and convexity", in Mathematical Programming: The State of the Art, Springer (1983), 235–257.
[^2]: M. Grötschel, L. Lovász, A. Schrijver, "The ellipsoid method and its consequences in combinatorial optimization", Combinatorica 1 (1981), 169–197.
[^3]: G. L. Nemhauser, L. A. Wolsey, M. L. Fisher, "An analysis of approximations for maximizing submodular set functions—I", Mathematical Programming 14 (1978), 265–294.
[^4]: U. Feige, "A threshold of ln n for approximating set cover", Journal of the ACM 45 (1998), 634–652.

# 연관 문서

## 선수지식

- [Matroid](matroids.md)

## 더 알아보기

- [다모듈 다면체](polymatroids.md)

#optimization #combinatorics #machine_learning
