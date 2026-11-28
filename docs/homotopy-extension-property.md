# 호모토피 연장 성질

# 개요

**호모토피 연장 성질(homotopy extension property)** 은 공간 $X$ 의 부분공간 $A$ 위에서 주어진 연속 변형을, $X$ 전체의 사상이 처음 값을 갖고 있으면 $X$ 전체의 연속 변형으로 늘릴 수 있다는 성질이다. 그래프에서 고리가 없는 부분 나무를 한 점으로 오므려도 그래프의 모양이 바뀌지 않는다는 것을 보이려면, 나무를 오므리는 움직임을 그래프 전체의 움직임으로 늘려야 한다. 이 성질은 [CW 복합체](cw-complexes.md)(closure-finite weak topology)와 그 부분복합체의 쌍이 언제나 갖고, 이것으로 축약 가능한 부분복합체를 한 점으로 오므린 몫공간이 원래 공간과 호모토피 동치임이 증명된다.

# 직관

꼭짓점 $a,b,c$ 와 변 $ab$, $bc$, $ca$ 로 된 삼각형 테두리 $X$ 에서 변 $ab$ 를 $A$ 로 잡는다. $A$ 는 선분이므로 시간 $t\in\lbrack 0,1\rbrack$ 동안 $A$ 의 점을 점 $a$ 쪽으로 끌어당겨 $t=1$ 에서 $A$ 전체를 $a$ 로 보내는 변형이 있다. 이 변형을 $X$ 전체로 늘리려면 변 $bc$ 와 $ca$ 의 점들도 움직여야 한다. $b$ 가 $a$ 로 끌려가는 동안 변 $bc$ 를 늘여 $b$ 쪽 끝을 따라가게 하면, $t=1$ 에서 $X$ 는 꼭짓점 $a$ 와 $c$ 를 잇는 변 둘, 곧 원으로 옮겨진다.

$t=1$ 에서의 사상은 $A$ 를 한 점으로 보내므로 몫공간 $X/A$ 에서 $X$ 로 가는 사상을 정한다. 이 사상과 몫사상 $X\to X/A$ 가 서로의 호모토피 역이 된다. 삼각형 테두리와 $ab$ 를 오므린 두 변짜리 원이 [호모토피 동치](homotopy-equivalence.md)라는 결론이 $A$ 위의 변형을 $X$ 로 늘리는 한 단계에서 나온다.

# 정의

$A\subseteq X$ 이고 연속사상 $f_0\colon X\to Y$ 와 $f_0$ 에서 시작하는 $A$ 위의 호모토피 $g\colon A\times\lbrack 0,1\rbrack\to Y$, 곧 $g(a,0)=f_0(a)$ 인 연속사상이 주어진다. 언제나 $F(x,0)=f_0(x)$ 이고 $A\times\lbrack 0,1\rbrack$ 위에서 $F=g$ 인 연속사상 $F\colon X\times\lbrack 0,1\rbrack\to Y$ 가 존재하면, 쌍 $(X,A)$ 가 **호모토피 연장 성질** 을 갖는다고 한다. 이 성질을 갖는 포함사상 $A\hookrightarrow X$ 를 **쌍대올화(cofibration)** 라 한다.

직관 절에서 $f_0$ 은 항등사상, $g$ 는 변 $ab$ 를 $a$ 로 끌어당기는 변형이고, 변 $bc$ 를 늘여 따라가게 한 움직임이 $F$ 다.

# 성질

## 수축 판정

$(X,A)$ 가 호모토피 연장 성질을 갖는 것은 $X\times\lbrace 0\rbrace\cup A\times\lbrack 0,1\rbrack$ 이 $X\times\lbrack 0,1\rbrack$ 의 수축(retract)인 것과 동치다. 단, $A$ 는 $X$ 의 닫힌 집합이다. 수축 $r$ 이 있으면 $f_0$ 과 $g$ 를 이어 붙인 사상에 $r$ 을 합성한 것이 $F$ 다. 거꾸로 $Y=X\times\lbrace 0\rbrace\cup A\times\lbrack 0,1\rbrack$ 로 두고 포함사상과 항등사상에 성질을 쓰면 수축이 나온다.

## CW 쌍

$X$ 가 CW 복합체이고 $A$ 가 부분복합체이면 $(X,A)$ 는 호모토피 연장 성질을 갖는다[^1]. $D^n\times\lbrack 0,1\rbrack$ 은 $D^n\times\lbrace 0\rbrace\cup\partial D^n\times\lbrack 0,1\rbrack$ 위로 수축되므로, 수축 판정으로 $A$ 에 없는 세포를 차원 순으로 하나씩 처리한다. 차원마다 수축을 시간 구간 $\lbrack 1/2^{n+1},1/2^n\rbrack$ 에서 수행하면 무한 차원에서도 연속이다.

## 축약 가능한 부분복합체의 오므리기

$(X,A)$ 가 호모토피 연장 성질을 갖고 $A$ 가 축약 가능하면 몫사상 $q\colon X\to X/A$ 는 호모토피 동치다.

증명의 요지. $A$ 를 한 점으로 줄이는 호모토피를 $X$ 의 항등사상에서 시작하는 호모토피 $F$ 로 늘린다. $F_1$ 은 $A$ 를 한 점으로 보내므로 $F_1=p\circ q$ 인 $p\colon X/A\to X$ 가 있다. $p\circ q=F_1$ 은 항등사상과 호모토픽하다. $F_t(A)\subseteq A$ 이므로 $F_t$ 는 $X/A$ 위의 호모토피를 유도하고, 그것이 $q\circ p$ 와 항등사상을 잇는다.

## 그래프의 기본군

연결 그래프 $G$ 에서 모든 꼭짓점을 지나는 나무 $T$ 를 고르면 $T$ 는 축약 가능하고 부분복합체이므로 $G\simeq G/T$ 다. $G/T$ 는 $T$ 에 들지 않는 변마다 원 하나를 한 점에서 붙인 원들의 쐐기합이다. 꼭짓점 $V$ 개, 변 $E$ 개이면 원은 $E-V+1$ 개이고 $G$ 의 [기본군](fundamental-group.md)은 생성원 $E-V+1$ 개의 자유군이다. 직관 절의 삼각형 테두리는 $E-V+1=1$ 이다.

## 성질이 없는 쌍

구간 $X=\lbrack 0,1\rbrack$ 과 $A=\lbrace 0\rbrace\cup\lbrace 1/n : n\ge 1\rbrace$ 은 호모토피 연장 성질을 갖지 않는다. $Z=X\times\lbrace 0\rbrace\cup A\times\lbrack 0,1\rbrack$ 위로 가는 수축 $r$ 이 있다고 하자. 선분 $\lbrack 1/(n+1),1/n\rbrack\times\lbrace 1\rbrace$ 의 상은 $Z$ 안에서 $(1/(n+1),1)$ 과 $(1/n,1)$ 을 잇는 경로다. $Z$ 의 수직선들은 높이 $0$ 위에서 서로 떨어져 있으므로 이 경로는 높이 $0$ 인 점을 지나고, 그 점의 원상 $x_n$ 은 $n\to\infty$ 에서 $(0,1)$ 로 간다. $r(x_n)$ 의 높이는 $0$ 인데 $r(0,1)=(0,1)$ 의 높이는 $1$ 이므로 $r$ 은 연속이 아니다.

# 활용

- 호모토피 동치의 판정. 축약 가능한 부분복합체를 오므리는 위 정리로 $S^2$ 에 지름 하나를 붙인 공간이 $S^2\vee S^1$ 과 호모토피 동치이고, 그래프가 원들의 쐐기합과 호모토피 동치임을 보인다.
- 상대 호몰로지. 호모토피 연장 성질을 갖는 좋은 쌍에서는 $H_n(X,A)\cong\tilde H_n(X/A)$ 이다. [단체 호몰로지](homology.md)의 쌍의 긴 완전열과 함께 $S^n$ 과 쐐기합의 호몰로지 계산에 쓴다.
- 세포 근사와 장애 이론. [세포 근사 정리](cellular-approximation.md)의 상대 판본과 [장애 이론](obstruction-theory.md)은 부분복합체 위에서 이미 정한 호모토피를 세포를 하나씩 붙이며 전체로 늘리고, 그 각 단계가 이 성질이다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 0 장 Proposition 0.16, Proposition 0.17, Example 0.15.

# 연관 문서

## 선수지식

- [CW 복합체](cw-complexes.md)
- [호모토피 동치](homotopy-equivalence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology
