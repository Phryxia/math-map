# 조합 경매

# 개요

**조합 경매(combinatorial auction)** 는 여러 물건을 한 번에 팔면서 입찰자가 물건 하나하나가 아니라 물건의 묶음에 금액을 걸게 하는 경매다. 물건 X 와 Y 를 파는데 한 입찰자는 둘을 함께 받아야만 쓸모가 있다면, 물건마다 따로 경매할 때 그 입찰자는 X 에 돈을 걸었다가 Y 를 놓치면 쓸모없는 X 값만 치른다. 조합 경매는 묶음 입찰을 받아 서로 겹치지 않는 입찰들 가운데 금액 합이 가장 큰 것을 고르고, 이긴 입찰자가 낼 금액을 따로 정한다.

# 직관

[VCG 메커니즘](vcg-mechanism.md)(Vickrey–Clarke–Groves mechanism) 문서의 예를 쓴다. 입찰자 1 은 X 와 Y 를 함께 받으면 $10$, 하나만 받으면 $0$ 의 가치를 둔다. 입찰자 2 는 X 에 $6$, 입찰자 3 은 Y 에 $5$ 를 둔다.

X 와 Y 를 동시에 오름 경매로 판다고 하자. 가격이 오르다가 X 가 $6$ 을 넘으면 2 가 빠지고 Y 가 $5$ 를 넘으면 3 이 빠진다. 1 이 둘을 다 이기려면 $11$ 이상을 내야 하는데 그 가치는 $10$ 이다.

1 이 X 를 $6$ 넘게 부른 채 Y 에서 빠지면 가치 $0$ 인 X 에 $6$ 넘게 낸다. 1 은 중간에 어디서 멈출지 정할 수 없다.

묶음에 금액을 걸게 하면 1 은 묶음 XY 에 $10$ 을 걸고, 하나만 받는 일은 생기지 않는다. 판매자는 입찰 $\lbrace\mathrm{XY}:10\rbrace$, $\lbrace\mathrm X:6\rbrace$, $\lbrace\mathrm Y:5\rbrace$ 가운데 물건이 겹치지 않게 골라 합을 최대로 한다. 2 와 3 의 입찰을 고르면 합이 $11$ 이다.

남은 일은 2 와 3 이 낼 금액이다. 낸 금액을 그대로 받으면 각자 가치보다 낮게 적는다.

VCG 지불액은 2 가 $5$, 3 이 $4$ 로 합이 $9$ 인데, 1 은 혼자서 $10$ 을 내겠다고 했다. 판매자와 1 이 따로 거래하면 둘 다 나아진다. 2 와 3 의 지불 합이 $10$ 이상이어야 이런 거래가 생기지 않는다.

# 정의

물건의 유한집합 $M$ 과 입찰자 $1,\dots,n$ 이 있다. 입찰자 $i$ 의 **가치 함수** 는 묶음 $S\subseteq M$ 마다 음이 아닌 실수 $v_i(S)$ 를 주는 함수이고 $v_i(\varnothing)=0$ 이다. 입찰자는 가치 함수 대신 묶음과 금액의 목록 $b_i$ 를 낸다.

**배분** 은 서로 겹치지 않는 묶음 $S_1,\dots,S_n\subseteq M$ 이고, $S_i$ 가 입찰자 $i$ 가 받는 묶음이다. 각 입찰자가 낸 목록 가운데 많아야 하나의 묶음만 받는다고 놓고 금액 합을 최대로 하는 배분을 찾는 문제를 **승자 결정 문제(winner determination problem)** 라 한다.

$$
\max\sum_{i=1}^{n}b_i(S_i)\qquad S_i\cap S_j=\varnothing\quad(i\ne j)
$$

$x_{iS}\in\lbrace 0,1\rbrace$ 를 $i$ 가 묶음 $S$ 를 받는지로 두면 [정수계획법](integer-programming.md)의 문제다.

$$
\begin{aligned}
\max\quad&\sum_{i,S}b_i(S)\thinspace x_{iS}\cr
\text{s.t. }&\sum_Sx_{iS}\le 1\quad(i=1,\dots,n),\qquad\sum_{i}\sum_{S\ni j}x_{iS}\le 1\quad(j\in M)
\end{aligned}
$$

입찰자 부분집합 $L$ 만으로 얻을 수 있는 가치 합의 최댓값을 $w(L)$ 이라 하자. 승자 결정의 배분이 $S\_1,\dots,S\_n$ 이고 입찰자 $i$ 가 $p_i$ 를 낼 때, 모든 $L$ 에 대해 다음이 성립하면 지불 $p$ 가 **핵(core)** 에 든다고 한다.

$$
\sum_{i=1}^{n}p_i+\sum_{i\in L}\bigl(v_i(S_i)-p_i\bigr)\ge w(L),\qquad v_i(S_i)-p_i\ge 0
$$

좌변은 판매자의 수입과 $L$ 의 이득의 합이고, 우변은 판매자와 $L$ 이 따로 거래해 얻을 수 있는 최댓값이다. 직관 절의 예에서 $L=\lbrace 1\rbrace$ 은 $p_2+p_3\ge 10$ 을, $L=\lbrace 1,2\rbrace$ 는 $p_3\ge 4$ 를, $L=\lbrace 1,3\rbrace$ 은 $p_2\ge 5$ 를 준다. 핵은 이 세 부등식과 $p_2\le 6$, $p_3\le 5$ 를 만족하는 $(p_2,p_3)$ 의 집합이고, VCG 지불 $(5,4)$ 는 첫째 부등식을 어겨 핵 밖에 있다.

# 성질

## 승자 결정의 어려움

승자 결정 문제는 각 입찰자가 묶음 하나씩만 낸 경우에 가중 집합 묶음 문제(weighted set packing)와 같다. 그러므로 [NP-난해](np-completeness.md)(NP 는 nondeterministic polynomial time)다. 그래프의 정점마다 입찰자를 두고 그 정점에 닿은 간선의 묶음을 금액 $1$ 로 내게 하면, 이긴 입찰자들은 서로 이웃하지 않는 정점들이다. [클리크 문제](clique-problem.md)의 근사 불가능성에서, 물건이 $m$ 개일 때 임의의 $\varepsilon\gt 0$ 에 대해 $m^{1/2-\varepsilon}$ 배 안으로 근사하는 다항식 시간 알고리즘이 없다(P ≠ NP 가정 아래)[^1].

## 핵이 비어 있지 않음

입찰자마다 자기가 받는 묶음에 낸 금액을 그대로 내게 하면, 이긴 입찰자의 이득은 $0$ 이고 수입은 $w(\lbrace 1,\dots,n\rbrace)$ 다. 모든 $L$ 에서 $w(L)$ 이하이므로 이 지불은 핵에 든다. 그래서 핵은 비어 있지 않다.

## 최소 수입 핵 지불

핵 가운데 판매자 수입이 가장 작은 지불을 고르는 경매를 **핵 선택 경매(core-selecting auction)** 라 한다. 직관 절의 예에서 최소 수입은 $10$ 이고 그 지불은 $p_2+p_3=10$, $5\le p_2\le 6$, $4\le p_3\le 5$ 인 선분이다. VCG 지불 $(5,4)$ 에서 가장 가까운 점을 고르면 $(5.5,4.5)$ 다.

핵 선택 경매에서는 진실한 신고가 우월 전략이 아니다. 핵 선택 경매 가운데 입찰자들이 거짓 신고로 얻을 수 있는 이득의 합을 최소로 하는 것은 최소 수입 핵 지불을 고르는 경매다[^2].

## VCG 지불이 핵에 드는 조건

모든 입찰자의 가치가 총대체재 조건(gross substitutes condition)을 만족하면 VCG 지불은 핵에 든다[^3]. 총대체재 조건은 어떤 물건의 가격이 올라도 다른 물건에 대한 수요가 줄지 않는다는 조건이다. 직관 절의 입찰자 1 은 X 와 Y 를 함께만 원하므로 X 의 가격이 오르면 Y 의 수요도 사라지고, 이 조건을 어긴다.

## 입찰 언어

묶음마다 금액을 적으면 물건이 $m$ 개일 때 $2^m-1$ 개의 금액이 필요하다. XOR 언어(exclusive-or bidding language)는 묶음과 금액의 목록 가운데 많아야 하나만 이기게 하고, OR 언어(or bidding language)는 서로 겹치지 않는 여러 묶음이 함께 이길 수 있게 한다. OR 언어로는 하나만 이기는 대체재 가치를 적을 수 없고, XOR 언어로는 더해지는 가치를 적는 데 $2^m-1$ 개가 필요하다[^4].

# 활용

- 주파수 경매. 1994 년 미국 연방통신위원회(Federal Communications Commission, FCC)는 지역별 주파수를 동시 오름 경매(simultaneous ascending auction)로 팔았고, 직관 절의 노출 문제(exposure problem)가 그 약점으로 지적되었다. 뒤의 여러 주파수 경매는 묶음 수요를 받는 조합 시계 경매(combinatorial clock auction)에 최소 수입 핵 지불을 붙였다[^4].
- 공항 이착륙 시간대. 항공편 하나는 출발 공항과 도착 공항의 시간대를 함께 받아야 하므로 두 시간대가 묶음이다. 시간대 배분에 조합 경매를 제안한 것이 이 경매의 첫 연구다[^5].
- 운송과 조달. 화물 운송 계약에서 운송사는 돌아오는 짐이 있는 노선의 묶음에 낮은 금액을 건다. 구매자가 여는 역경매이고, 승자 결정은 비용 합을 최소로 하는 같은 정수계획이다.
- 근사 메커니즘. 승자 결정을 근사로 풀 때 VCG 지불을 붙이면 진실성이 깨진다([VCG 메커니즘](vcg-mechanism.md)의 계산 절). 입찰자가 원하는 묶음이 하나인 경우에는 묶음 크기의 제곱근으로 나눈 금액 순으로 탐욕적으로 고르고 임계 금액을 받는 경매가 진실하고 $\sqrt m$ 배 근사다[^6].

[^1]: T. Sandholm, "Algorithm for optimal winner determination in combinatorial auctions", Artificial Intelligence 135 (2002).
[^2]: R. Day, P. Milgrom, "Core-selecting package auctions", International Journal of Game Theory 36 (2008).
[^3]: L. M. Ausubel, P. Milgrom, "Ascending auctions with package bidding", Frontiers of Theoretical Economics 1 (2002).
[^4]: P. Cramton, Y. Shoham, R. Steinberg (eds.), *Combinatorial Auctions*, MIT Press (2006).
[^5]: S. J. Rassenti, V. L. Smith, R. L. Bulfin, "A combinatorial auction mechanism for airport time slot allocation", Bell Journal of Economics 13 (1982).
[^6]: D. Lehmann, L. I. O'Callaghan, Y. Shoham, "Truth revelation in approximately efficient combinatorial auctions", Journal of the ACM 49 (2002).

# 연관 문서

## 선수지식

- [VCG 메커니즘](vcg-mechanism.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #complexity
