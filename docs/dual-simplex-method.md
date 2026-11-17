# 쌍대 단체법

# 개요

**쌍대 단체법(dual simplex method)** 은 최적성 조건은 만족하지만 제약을 어기는 기저에서 출발해, 어긴 제약을 하나씩 고쳐 가며 최적해에 이르는 [단체법](simplex-method.md)의 변형이다. 선형계획 문제를 푼 뒤 제약 $2x\_1+x\_2\le 3$ 을 하나 더하면, 원래 최적해 $(1,\tfrac32)$ 는 새 제약을 어기므로 처음부터 다시 풀어야 할 것처럼 보인다. 쌍대 단체법은 원래의 최적 기저를 그대로 출발점으로 삼아, 이 예에서 피벗 한 번으로 새 최적해 $(\tfrac23,\tfrac53)$ 을 얻는다.

# 직관

단체법 문서의 문제 $\max\thinspace x\_1+x\_2$, $x\_1+2x\_2\le 4$, $3x\_1+2x\_2\le 6$, $x\ge 0$ 의 최적 기저는 $\lbrace x\_1,x\_2\rbrace$ 이고, 여유 변수 $s\_1,s\_2$ 로 적으면 다음과 같다.

$$
x\_1=1+\tfrac12s\_1-\tfrac12s\_2,\qquad x\_2=\tfrac32-\tfrac34s\_1+\tfrac14s\_2,\qquad z=\tfrac52-\tfrac14s\_1-\tfrac14s\_2
$$

새 제약 $2x\_1+x\_2\le 3$ 의 여유 변수 $s\_3=3-2x\_1-x\_2$ 를 기저에 넣는다. 위의 두 식을 대입하면 $s\_3=-\tfrac12-\tfrac14s\_1+\tfrac34s\_2$ 이고, $s\_1=s\_2=0$ 에서 $s\_3=-\tfrac12$ 이 음수라 제약을 어긴다. 한편 $z$ 의 계수 $-\tfrac14$, $-\tfrac14$ 는 그대로 음수여서 최적성 조건은 만족한다.

$s\_3$ 을 $0$ 으로 올리려면 $s\_3$ 의 식에서 계수가 양수인 $s\_2$ 를 늘려야 한다. $s\_2=\tfrac23$ 이면 $s\_3=0$ 이고, $x\_1=\tfrac23$, $x\_2=\tfrac53$, $z=\tfrac52-\tfrac16=\tfrac73$ 이다. $s\_2$ 를 기저에 넣고 $s\_3$ 을 빼서 다시 적으면 $z=\tfrac73-\tfrac13s\_1-\tfrac13s\_3$ 이 되어 계수가 여전히 음수이고, 이제 모든 변수가 $0$ 이상이므로 최적이다.

# 정의

## 쌍대 허용 기저

등식형 문제 $\max\lbrace c^{\mathsf T}x:Ax=b,\thinspace x\ge 0\rbrace$ 의 기저 $\mathcal B$ 에서 모든 축소 비용이 $\bar c\_j\le 0$ 이면 $\mathcal B$ 를 **쌍대 허용 기저(dual feasible basis)** 라 한다. 이때 $y^{\mathsf T}=c\_{\mathcal B}^{\mathsf T}A\_{\mathcal B}^{-1}$ 이 쌍대 문제 $\min\lbrace b^{\mathsf T}y:A^{\mathsf T}y\ge c\rbrace$ 의 허용해다. 직관 절의 기저 $\lbrace x\_1,x\_2,s\_3\rbrace$ 은 쌍대 허용이지만 $x\_{\mathcal B}$ 의 성분 $s\_3=-\tfrac12$ 이 음수다.

## 쌍대 단체법

쌍대 허용 기저에서 다음 피벗을 되풀이하는 절차를 **쌍대 단체법** 이라 한다. $\bar a\_{rj}$ 는 $A\_{\mathcal B}^{-1}A$ 의 $r$ 번째 행의 $j$ 번째 성분이다.

1. $x\_{\mathcal B}=A\_{\mathcal B}^{-1}b\ge 0$ 이면 멈춘다. 현재 기저 해가 최적이다.
2. $x\_{\mathcal B,r}\lt 0$ 인 $r$ 하나를 나갈 변수로 고른다.
3. 그 행에서 $\bar a\_{rj}\lt 0$ 인 $j$ 가 없으면 원문제가 허용해를 갖지 않는다.
4. $\bar a\_{rj}\lt 0$ 인 $j$ 가운데 $\bar c\_j/\bar a\_{rj}$ 가 가장 작은 것을 들어올 변수로 고르고(쌍대 비율 검사, dual ratio test), $\mathcal B$ 에서 $r$ 번째 첨자를 $j$ 로 바꾼다.

직관 절에서 $s\_3$ 의 행을 $s\_3+\tfrac14s\_1-\tfrac34s\_2=-\tfrac12$ 로 쓰면 $\bar a\_{r,s\_1}=\tfrac14$, $\bar a\_{r,s\_2}=-\tfrac34$ 이므로 음수인 $s\_2$ 만 후보이고, 이 피벗이 직관 절의 계산이다. 이 절차는 Lemke 가 1954 년에 제안했다[^1].

# 성질

## 피벗 뒤의 쌍대 허용성

정리. 쌍대 비율 검사로 고른 피벗 뒤에도 모든 축소 비용이 $0$ 이하이고, 쌍대 목적값 $b^{\mathsf T}y$ 는 늘지 않는다. 퇴화가 없으면 줄어든다[^2].

증명의 요지. 피벗 뒤의 축소 비용은 $\bar c\_k-(\bar c\_j/\bar a\_{rj})\bar a\_{rk}$ 다. $\bar a\_{rk}\ge 0$ 이면 빼는 양이 $0$ 이상이고, $\bar a\_{rk}\lt 0$ 이면 비율 검사의 최소성으로 부호가 지켜진다. 쌍대 목적값의 변화는 $(\bar c\_j/\bar a\_{rj})\cdot x\_{\mathcal B,r}$ 이고, 두 인수가 각각 $0$ 이상과 음수다.

이 절차는 쌍대 문제에 단체법을 적용한 것과 같은 기저의 열을 지난다. 그래서 퇴화와 순환, Bland 규칙 같은 단체법의 성질이 그대로 옮겨진다.

## 다시 풀기의 비용

제약을 더하거나 우변 $b$ 를 바꾸어도 축소 비용 $\bar c$ 는 바뀌지 않으므로 원래의 최적 기저가 쌍대 허용으로 남는다. 그러므로 바뀐 문제를 처음부터 풀지 않고 그 기저에서 쌍대 단체법을 시작한다.

# 활용

- [정수계획법](integer-programming.md)의 분기 한정법과 절단평면. 변수의 범위를 좁히거나 절단을 더한 자식 문제를 부모의 최적 기저에서 쌍대 단체법으로 다시 푼다. 상용 정수계획 풀이기의 기본 풀이법이다.
- 우변 감도 분석. 자원량 $b$ 를 바꾼 문제의 최적해를 원래 최적 기저에서 몇 번의 쌍대 피벗으로 얻는다.
- 비용이 모두 $0$ 이상인 최소화 문제. 모든 비용이 $0$ 이상인 최소화 문제는 여유 변수 기저가 곧 쌍대 허용이므로 첫 단계 없이 쌍대 단체법으로 시작한다.

[^1]: C. E. Lemke, "The dual method of solving the linear programming problem", *Naval Research Logistics Quarterly* 1 (1954), 36–47.
[^2]: Dimitris Bertsimas, John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997, 4.5 절.

# 연관 문서

## 선수지식

- [단체법](simplex-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #linear_algebra
