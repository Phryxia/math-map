# 기본군

# 개요

**기본군(fundamental group)** 은 위상공간의 한 점을 기준으로 잡은 닫힌 경로들을 연속 변형으로 동일시하여 얻는 [군](groups.md)이다. 도넛의 겉면과 공의 겉면이 서로 연속적으로 변형되지 않음을 보이려 할 때, 가능한 변형을 모두 따져서는 끝나지 않는다. 기본군은 고리가 구멍을 몇 번 감아 도는지를 군의 원소로 기록하므로, 두 공간의 기본군이 다르다는 계산으로 두 공간이 위상동형이 아님을 증명한다.

# 직관

평면 $\mathbb R^2$ 과 원점을 뺀 평면 $\mathbb R^2\setminus\lbrace 0\rbrace$ 이 위상동형이 아님을 보이려고 한다. 점 $x_0$ 에서 출발해 $x_0$ 로 돌아오는 닫힌 경로 $f\colon\lbrack 0,1\rbrack\to\mathbb R^2$ 는 $H(s,t)=(1-t)f(s)+tx_0$ 로 끝점을 고정한 채 상수 경로까지 줄어든다. 원점을 뺀 평면에서 원점을 한 바퀴 도는 원에 같은 식을 쓰면 중간에 원점을 지나므로 쓸 수 없다.

원점을 뺀 평면에서 닫힌 경로를 따라가며 원점을 보는 각도의 변화를 더하면 $2\pi$ 의 정수배가 나온다. 경로를 조금 움직이면 이 정수가 조금만 움직여야 하는데 정수는 조금만 움직일 수 없으므로 값이 변하지 않는다. 그래서 원점을 $n$ 번 도는 경로는 서로 다른 $n$ 마다 서로 옮겨지지 않고, 평면에서는 모든 닫힌 경로가 상수로 옮겨진다. 두 닫힌 경로를 차례로 이어 돌면 도는 횟수가 더해지므로, 옮겨지는 것끼리 묶은 묶음들은 덧셈을 가진 정수군이 된다.

# 정의

## 고리와 경로 호모토피

$X$ 를 위상공간, $x_0\in X$ 를 기준점(base point)으로 둔다. $x_0$ 에 기반한 **고리(loop)** 는 [연속함수](continuity.md) $f\colon\lbrack 0,1\rbrack\to X$ 로 $f(0)=f(1)=x_0$ 인 것이다. 두 고리 $f,g$ 가 **경로 호모토피(path-homotopic)** 라는 것은 다음을 만족하는 연속함수 $H$ 가 있다는 것이다.

$$
H\colon\lbrack 0,1\rbrack\times\lbrack 0,1\rbrack\to X,\quad H(s,0)=f(s),\thinspace H(s,1)=g(s),\thinspace H(0,t)=H(1,t)=x_0
$$

직관 절의 $H(s,t)=(1-t)f(s)+tx_0$ 는 $\mathbb R^2$ 의 고리 $f$ 와 상수 고리 사이의 경로 호모토피다.

## 기본군

경로 호모토피는 고리들 사이의 [동치관계](equivalence-relations.md)이고, $f$ 의 동치류를 $\lbrack f\rbrack$ 로 쓴다. 두 고리의 **연접(concatenation)** 은 $f$ 를 두 배 빠르게 돈 뒤 $g$ 를 두 배 빠르게 도는 고리다.

$$
(f\ast g)(s)=\begin{cases} f(2s), & 0\le s\le \tfrac12\cr g(2s-1), & \tfrac12\le s\le 1\end{cases}
$$

**기본군(fundamental group)** $\pi_1(X,x_0)$ 은 $x_0$ 기반 고리의 동치류 전체에 연산 $\lbrack f\rbrack\cdot\lbrack g\rbrack=\lbrack f\ast g\rbrack$ 를 준 군이다.[^1] 원점을 뺀 평면에서 $f(s)=(\cos 2\pi s,\sin 2\pi s)$ 이면 $f\ast f$ 는 원을 두 번 도는 고리이고, $\lbrack f\rbrack^2=\lbrack f\ast f\rbrack$ 이다.

## 유도 준동형과 단순연결

연속사상 $h\colon X\to Y$ 가 $h(x_0)=y_0$ 이면 $h_\ast\lbrack f\rbrack=\lbrack h\circ f\rbrack$ 로 $h_\ast\colon\pi_1(X,x_0)\to\pi_1(Y,y_0)$ 을 정의한다. 기본군이 자명한 경로연결(path-connected) 공간을 **단순연결(simply connected)** 이라 한다. $\mathbb R^2$ 은 직관 절의 호모토피로 단순연결이다.

# 성질

## 군 공리

연접은 경로 수준에서는 결합법칙을 만족하지 않는다. $(f\ast g)\ast h$ 는 $f$ 를 구간의 앞 $1/4$ 에서, $f\ast(g\ast h)$ 는 앞 $1/2$ 에서 돈다. 두 고리는 매개변수만 바꾼 것이므로 경로 호모토피이고, 동치류에서는 결합법칙이 성립한다. 같은 방법으로 상수 고리의 류가 항등원이고 $f(1-s)$ 의 류가 $\lbrack f\rbrack$ 의 역원이다.

## 기준점과 함자성

$X$ 가 경로연결이면 $x_0$ 에서 $x_1$ 로 가는 경로 $\gamma$ 가 $\lbrack f\rbrack\mapsto\lbrack\bar\gamma\ast f\ast\gamma\rbrack$ 로 동형 $\pi_1(X,x_0)\cong\pi_1(X,x_1)$ 을 준다. 그래서 기준점을 생략하고 $\pi_1(X)$ 로 적기도 한다. $(\mathrm{id}\_X)\_\ast$ 는 항등준동형이고 $(k\circ h)\_\ast=k\_\ast\circ h\_\ast$ 이므로 기본군은 점 달린 위상공간의 [범주](category.md)에서 군의 범주로 가는 [함자](functors.md)다. 그러므로 위상동형인 두 공간의 기본군은 동형이다.

## 원의 기본군

원의 기본군은 정수군과 동형이고, 동형사상은 고리에 [감김수](winding-number.md)를 대응시킨다.[^2]

$$
\pi_1(S^1)\cong\mathbb{Z}
$$

증명은 [실수](real-numbers.md) 직선에서 원으로 가는 [덮개공간](covering-spaces.md)의 사상 $p(t)=(\cos 2\pi t,\sin 2\pi t)$ 를 쓴다. $p^{-1}(1)=\mathbb Z$ 이고, 각 점의 작은 근방의 역상은 겹치지 않는 구간들로 갈라진다. 기준점 $1$ 에 기반한 고리 $f$ 를 $0$ 에서 시작하는 경로로 올리는 방법은 하나뿐이고, 그 끝점은 정수이며 이것을 $f$ 의 차수라 한다. 호모토피도 하나뿐인 방법으로 올라가므로 차수는 동치류에만 의존하고, 연접은 차수의 덧셈이 된다. $f(s)=p(ns)$ 의 차수가 $n$ 이므로 전사이고, 차수가 $0$ 이면 올린 경로가 닫혀 있고 $\mathbb R$ 에서 직선 호모토피로 상수까지 줄어들므로 단사다.

## 계산 결과

- Euclid 공간, 볼록집합, 별모양집합은 직선 호모토피로 단순연결이다.
- 원환 영역(annulus), 원점을 뺀 평면, 원기둥, Möbius 띠는 원과 호모토피 동치이므로 기본군이 $\mathbb Z$ 다.
- $n\ge 2$ 이면 $S^n$ 은 단순연결이다.
- 곱공간의 기본군은 기본군의 곱이다. 원환면의 기본군은 $\mathbb Z^2$ 이다.
- 두 원을 한 점에서 붙인 8자 모양의 기본군은 생성원 둘의 자유군(free group)이고 가환이 아니다.
- 실사영평면의 기본군은 $\mathbb Z/2$ 다.

## 2차원 Brouwer 고정점 정리

닫힌 원판 $D^2$ 에서 자신으로 가는 연속사상은 고정점을 가진다.[^3] 고정점이 없으면 각 점 $x$ 에 $f(x)$ 에서 $x$ 로 향하는 반직선이 경계와 만나는 점을 대응시켜 수축(retraction) $r\colon D^2\to S^1$ 을 얻는다. 경계의 포함사상 $i$ 에 대해 $r\circ i=\mathrm{id}\_{S^1}$ 이므로 다음 합성이 항등준동형이다.

$$
\pi_1(S^1)\xrightarrow{\thinspace i_\ast\thinspace}\pi_1(D^2)\xrightarrow{\thinspace r_\ast\thinspace}\pi_1(S^1)
$$

가운데 군은 자명하고 $\mathbb Z$ 의 항등사상은 자명하지 않으므로 모순이다. $n\ge 3$ 이면 $D^n$ 의 경계 $S^{n-1}$ 이 단순연결이라 이 논법이 쓰이지 않고, 일반 차원의 [Brouwer 고정점 정리](brouwer-fixed-point.md)는 [단체 호몰로지](homology.md)로 증명된다. 거리공간의 축약사상에 대한 고정점 정리는 [축약사상 고정점 정리](banach-fixed-point.md)다.

## Seifert–van Kampen 정리

[Seifert–van Kampen 정리](seifert-van-kampen.md)는 공간을 경로연결인 열린집합 둘 $U,V$ 로 덮고 $U\cap V$ 가 경로연결일 때 $\pi_1(X)$ 를 $\pi_1(U)$ 와 $\pi_1(V)$ 의 $\pi_1(U\cap V)$ 위 융합곱(amalgamated product)으로 기술한다. 8자 모양과 [CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology)의 기본군을 생성원과 관계식으로 계산하는 데 쓴다.

# 활용

- 위상동형 판별. 기본군이 다르면 위상동형이 아니므로 원과 구면, 원환면과 구면은 위상동형이 아니다. 역은 성립하지 않는다. $S^2$ 와 $S^3$ 은 둘 다 단순연결이지만 위상동형이 아니다.
- 대수학의 기본정리(fundamental theorem of algebra). 차수 $n\ge 1$ 인 복소 다항식에 근이 없으면 반지름 $R$ 인 원의 상의 감김수가 $R$ 이 클 때 $n$ 이고 $R\to 0$ 일 때 $0$ 인데, $R$ 에 대해 연속이라 값이 같아야 하므로 모순이다.
- 배위공간(configuration space). 장애물이 있는 평면에서 두 경로가 서로 옮겨지는지는 장애물을 뺀 영역의 기본군으로 정해진다.
- [정칙함수](holomorphic-functions.md). 단순연결 영역에서 정칙함수의 선적분은 경로에 의존하지 않는다.
- 덮개공간의 분류. 경로연결, 국소 경로연결, 반국소 단순연결인 공간의 연결 덮개공간은 기본군의 부분군의 켤레류와 대응한다. 이 대응을 [그래프](graphs.md)의 덮개에 쓰면 자유군의 부분군이 자유군이라는 Nielsen–Schreier 정리(Nielsen–Schreier theorem)가 증명된다.

[^1]: J. R. Munkres, *Topology*, 2nd ed., §51–52 (경로 호모토피와 기본군), §53–54 (피복공간과 올림 보조정리). 같은 내용의 강의노트: A. Landesman, "Notes on the fundamental group". https://people.math.harvard.edu/~landesman/assets/fundamental-group.pdf
[^2]: 원의 기본군이 정수군임을 지수 덮개와 올림 보조정리로 증명한 서술. S. Dooley, "Basic algebraic topology: the fundamental group of a circle", UChicago REU(Research Experiences for Undergraduates). https://www.math.uchicago.edu/~may/VIGRE/VIGRE2011/REUPapers/Dooley.pdf
[^3]: 기본군의 함자 성질로 수축의 부재를 보이고 2차원 Brouwer 정리를 얻는 논법. N. Gill, "The fundamental group and the Brouwer fixed point theorem", UChicago REU. http://math.uchicago.edu/~may/REU2013/REUPapers/Gill.pdf

# 연관 문서

## 선수지식

- [위상 공간](topology.md)
- [군](groups.md)

## 더 알아보기

- [호모토피군](homotopy-groups.md)
- [곡면의 분류](classification-of-surfaces.md)
- [덮개공간](covering-spaces.md)
- [Seifert–van Kampen 정리](seifert-van-kampen.md)
- [매듭 불변량](knot-invariants.md)
- [Brouwer 고정점 정리](brouwer-fixed-point.md)

#algebraic_topology #topology #group_theory
