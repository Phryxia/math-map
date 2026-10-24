# 통신 복잡도

# 개요

**통신 복잡도(communication complexity)** 는 입력을 나누어 가진 두 사람이 함수의 값을 계산하는 데 주고받아야 하는 비트의 수다. Alice 는 $x\in\lbrace 0,1\rbrace^n$ 을, Bob 은 $y\in\lbrace 0,1\rbrace^n$ 을 받고, 둘이 정해 둔 규칙에 따라 비트를 번갈아 보내 $f(x,y)$ 를 알아낸다. 각자의 계산은 비용으로 세지 않는다. A. C.-C. Yao 가 1979 년에 도입했다[^1].

계산 비용을 세지 않으므로 하한을 증명하기 쉽고, 그 하한이 다른 계산 모형의 하한으로 옮겨진다. [불 회로](boolean-circuits.md)의 깊이는 Karchmer–Wigderson 정리로 통신 복잡도와 같아지고, 스트리밍 알고리즘과 자료구조의 메모리 하한도 통신 복잡도에서 나온다. [무작위 복잡도 부류](randomized-complexity-classes.md)에서처럼 무작위성을 허락하면 비용이 지수적으로 줄어드는 함수가 있다.

# 직관

Alice 와 Bob 이 각자 가진 $n$ 비트 파일이 같은지 확인한다. 이 함수를 동등 함수(equality) $\mathrm{EQ}(x,y)$ 라 쓰고, $x=y$ 이면 $1$, 아니면 $0$ 이다. Alice 가 $x$ 를 통째로 보내면 Bob 이 비교해 답을 돌려보내므로 $n+1$ 비트로 된다.

더 적게 보낼 수 없는지 본다. 규칙이 $n$ 비트보다 적게 보낸다면 대화의 기록이 $2^n$ 가지보다 적다. 그러면 서로 다른 두 입력 $x\ne x'$ 에서 $(x,x)$ 와 $(x',x')$ 의 대화 기록이 같다. Alice 가 보내는 비트는 $x$ 와 지금까지의 기록으로 정해지고 Bob 의 비트는 $y$ 와 기록으로 정해지므로, 같은 기록은 $(x,x')$ 에서도 나온다. 기록이 같으면 답도 같으므로 $(x,x')$ 에서 답이 $1$ 이 되어 틀린다.

무작위성을 쓰면 비용이 줄어든다. 소수 $p$ 를 $n^2$ 과 $2n^2$ 사이에서 고르고, $x$ 를 계수로 하는 다항식 $X(t)=\sum_i x_it^i$ 를 생각한다. Alice 는 $\mathbb F_p$ 의 무작위 점 $r$ 과 $X(r)\bmod p$ 를 보내고, Bob 은 자기 다항식의 값 $Y(r)$ 과 비교한다. $x\ne y$ 이면 $X-Y$ 는 차수가 $n$ 미만인 0 이 아닌 다항식이라 근이 $n$ 개 미만이고, 두 값이 같을 확률은 $n/p\le 1/n$ 이하다. 보내는 것은 $\mathbb F_p$ 의 원소 둘이므로 $O(\log n)$ 비트다.

# 정의

## 규칙과 비용

**규칙(protocol)** 은 내부 정점마다 Alice 나 Bob 가운데 말할 사람과 그 사람이 보낼 비트를 정하는 함수가 붙은 이진 나무다. Alice 의 정점에는 $x$ 의 함수가, Bob 의 정점에는 $y$ 의 함수가 붙고, 보낸 비트에 따라 왼쪽이나 오른쪽 자식으로 간다. 잎에는 출력이 붙는다. 규칙의 비용은 나무의 깊이이고, 모든 입력에서 $f(x,y)$ 를 출력하는 규칙의 최소 비용을 **결정적 통신 복잡도** $D(f)$ 라 한다.

## 직사각형

$A\subseteq X$, $B\subseteq Y$ 에 대해 $A\times B$ 꼴의 집합을 **조합적 직사각형(combinatorial rectangle)** 이라 한다. $f$ 가 그 위에서 상수이면 단색이라 한다. $f$ 의 **통신 행렬** $M_f$ 는 행이 $x$, 열이 $y$ 이고 성분이 $f(x,y)$ 인 $2^n\times 2^n$ 행렬이다.

## 무작위 규칙

규칙의 각 정점이 입력에 더해 무작위 비트열을 볼 수 있게 한 것이 무작위 규칙이다. 두 사람이 같은 무작위 비트열을 보면 **공개 동전(public coin)**, 각자 자기 것만 보면 **사적 동전(private coin)** 규칙이다. 모든 입력에서 확률 $2/3$ 이상으로 바른 값을 내는 사적 동전 규칙의 최소 비용을 $R(f)$ 로 쓴다.

# 성질

## 직사각형 분할

정리. 비용 $c$ 인 규칙의 잎마다 그 잎에 닿는 입력의 집합은 단색 직사각형이다. 따라서 $M_f$ 는 많아야 $2^c$ 개의 단색 직사각형으로 나뉘고, $D(f)\ge\log_2(\text{단색 직사각형 분할의 최소 개수})$ 다.

증명의 요지. 정점 $v$ 에 닿는 입력의 집합이 $A_v\times B_v$ 라 하자. $v$ 에서 Alice 가 말하면 보낸 비트에 따라 $A_v$ 만 둘로 나뉘고 $B_v$ 는 그대로다. Bob 이 말할 때도 같다. 뿌리에서 $X\times Y$ 로 시작하므로 귀납법으로 모든 정점에서 직사각형이고, 잎에서는 출력이 하나이므로 단색이다.

직관 절의 논증은 대각선의 $2^n$ 개 점 $(x,x)$ 가 서로 다른 직사각형에 들어야 한다는 것이다. 이런 점의 집합을 **속임 집합(fooling set)** 이라 하고, 속임 집합의 크기가 $s$ 이면 $D(f)\ge\log_2 s$ 다. 이로부터 $D(\mathrm{EQ})=n+1$ 이다.

## 계수 하한

정리(Mehlhorn–Schmidt). 실수 위의 행렬 계수로 $D(f)\ge\log_2\mathrm{rank}\thinspace M_f$ 다[^2].

증명의 요지. $1$ 의 값을 갖는 단색 직사각형은 계수가 $1$ 인 행렬이고, $M_f$ 는 이런 행렬 $2^{D(f)}$ 개 이하의 합이다. EQ 의 통신 행렬은 단위행렬이어서 계수가 $2^n$ 이다. $D(f)$ 가 $\log_2\mathrm{rank}\thinspace M_f$ 의 다항식으로 위에서 묶이는지 묻는 것이 L. Lovász 와 M. Saks 의 **로그 계수 추측(log-rank conjecture)** 이다[^3].

## 무작위성과 집합의 서로소

- 직관 절의 규칙으로 $R(\mathrm{EQ})=O(\log n)$ 이다. 공개 동전으로는 무작위 비트열 $r$ 과의 내적 $\langle x,r\rangle$ 을 몇 번 비교해 $O(1)$ 비트로 된다.
- I. Newman 의 정리로 공개 동전 규칙은 비용을 $O(\log n)$ 만큼 더 들여 사적 동전 규칙으로 바뀐다[^4].
- $x$ 와 $y$ 를 $\lbrace 1,\dots,n\rbrace$ 의 부분집합의 특성 벡터로 보고 두 집합이 겹치지 않는지 묻는 서로소 함수(disjointness) $\mathrm{DISJ}$ 는 $R(\mathrm{DISJ})=\Theta(n)$ 이다. B. Kalyanasundaram 과 G. Schnitger 가 증명했고 A. A. Razborov 가 간단한 증명을 주었다[^5][^6]. 무작위성을 써도 줄지 않는 대표적인 함수이고, 많은 하한이 이 함수로의 환원으로 증명된다.

## Karchmer–Wigderson 정리

불 함수 $g:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 에 대해, Alice 가 $g(x)=1$ 인 $x$ 를, Bob 이 $g(y)=0$ 인 $y$ 를 받고 $x_i\ne y_i$ 인 좌표 $i$ 를 찾는 문제를 $g$ 의 KW(Karchmer–Wigderson) 관계라 한다.

정리. 입력이 둘인 AND, OR 게이트와 입력의 부정으로 $g$ 를 계산하는 회로의 최소 깊이는 $g$ 의 KW 관계의 결정적 통신 복잡도와 같다[^7].

증명의 요지. 회로의 출력에서 시작해 내려간다. OR 게이트에서는 $x$ 쪽 값이 $1$ 인 입력을 Alice 가 1 비트로 알리고, AND 게이트에서는 $y$ 쪽 값이 $0$ 인 입력을 Bob 이 알린다. 입력 변수에 닿으면 그 좌표에서 $x$ 와 $y$ 가 다르다. 거꾸로 규칙 나무의 Alice 정점을 OR, Bob 정점을 AND 로 바꾸면 회로가 된다.

# 활용

- 스트리밍 알고리즘의 메모리 하한. 스트림을 둘로 잘라 앞부분을 Alice, 뒷부분을 Bob 에게 주면, 메모리 $m$ 비트로 도는 알고리즘은 메모리 내용을 보내는 비용 $m$ 의 단방향 규칙이 된다. 가장 큰 빈도를 정확히 계산하는 알고리즘은 DISJ 로의 환원으로 선형 메모리가 필요하고, [Count-Min 스케치](count-min-sketch.md) 같은 요약은 근사를 허락해 메모리를 줄인다.
- [불 회로](boolean-circuits.md)의 깊이 하한. Karchmer–Wigderson 정리로 단조 회로의 깊이 하한이 KW 관계의 통신 하한으로 바뀐다. 완전 매칭의 존재를 계산하는 단조 회로는 깊이 $\Omega(n)$ 이 필요하다는 것이 이렇게 증명되었다[^7].

[^1]: A. C.-C. Yao, "Some complexity questions related to distributive computing", Proceedings of the 11th ACM Symposium on Theory of Computing (1979), 209–213.
[^2]: K. Mehlhorn, E. M. Schmidt, "Las Vegas is better than determinism in VLSI and distributed computing", Proceedings of the 14th ACM Symposium on Theory of Computing (1982), 330–337.
[^3]: L. Lovász, M. Saks, "Lattices, Möbius functions and communication complexity", Proceedings of the 29th IEEE Symposium on Foundations of Computer Science (1988), 81–90.
[^4]: I. Newman, "Private vs. common random bits in communication complexity", Information Processing Letters 39 (1991), 67–71.
[^5]: B. Kalyanasundaram, G. Schnitger, "The probabilistic communication complexity of set intersection", SIAM Journal on Discrete Mathematics 5 (1992), 545–557.
[^6]: A. A. Razborov, "On the distributional complexity of disjointness", Theoretical Computer Science 106 (1992), 385–390.
[^7]: M. Karchmer, A. Wigderson, "Monotone circuits for connectivity require super-logarithmic depth", SIAM Journal on Discrete Mathematics 3 (1990), 255–265. 완전 매칭의 선형 깊이 하한은 R. Raz, A. Wigderson, "Monotone circuits for matching require linear depth", Journal of the ACM 39 (1992), 736–744.

# 연관 문서

## 선수지식

- [불 회로](boolean-circuits.md)
- [무작위 복잡도 부류](randomized-complexity-classes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #combinatorics
