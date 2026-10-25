# NC 계층

# 개요

**NC 계층(NC hierarchy)** 은 다항 크기이고 깊이가 $O(\log^i n)$ 인 균일한 [불 회로](boolean-circuits.md) 족으로 판정되는 언어의 부류 $\mathrm{NC}^i$ 들의 층이고, 층을 모두 합친 것이 NC 다. 회로의 깊이는 처리기를 다항식 개 쓰는 병렬 계산의 단계 수이므로, NC 는 빠른 병렬 알고리즘이 있는 문제의 부류다. 이름은 S. A. Cook 이 N. Pippenger 의 이름을 따서 Nick's Class 로 붙였다[^1][^2].

$\mathrm{NC}\subseteq\mathrm P$ 이고, [공간 복잡도](space-complexity.md)의 로그 공간 부류는 NC 의 낮은 층 사이에 놓인다. $\mathrm P$ 의 언어 가운데 NC 에 들 가능성이 가장 낮은 것은 로그 공간 환원에 대한 P-완전 언어이고, 회로 값 문제가 그 예다.

# 직관

$n$ 비트 이진수 두 개를 더한다. 손으로 하는 덧셈은 아랫자리부터 받아올림을 넘기므로 $n$ 단계가 걸린다. 자리마다 처리기를 하나씩 두어도, 받아올림을 기다리는 동안 윗자리 처리기는 할 일이 없다.

받아올림의 조건을 자리마다 직접 쓴다. 자리 $i$ 로 받아올림이 들어오는 것은 아래의 어떤 자리 $j$ 에서 두 비트가 모두 $1$ 이고, 그 사이의 자리 $j+1,\dots,i-1$ 에서 두 비트 가운데 하나가 $1$ 인 것이다. 이 조건은 $j$ 마다 따로 확인되고, 확인할 $j$ 는 $i$ 개다. 자리마다 $j$ 를 모두 동시에 확인하고 결과의 논리합을 취하면, 입력 수에 제한이 없는 게이트로는 깊이 $3$ 에서, 입력이 둘인 게이트로는 논리곱과 논리합을 이진 나무로 펼쳐 깊이 $O(\log n)$ 에서 받아올림이 모두 나온다.

덧셈은 크기가 다항식이고 깊이가 $O(\log n)$ 인 회로로 계산된다. 깊이를 단계 수로 읽으면 다항식 개의 처리기로 $O(\log n)$ 단계에 끝나는 병렬 알고리즘이다.

# 정의

## 균일성

회로 족 $(C_n)$ 이 **로그 공간 균일(logspace-uniform)** 하다는 것은 $1^n$ 을 받아 $C_n$ 의 게이트와 연결을 써 내는 로그 공간 기계가 있다는 것이다. 균일성이 없으면 [불 회로](boolean-circuits.md)의 P/poly 처럼 결정 불가능한 언어도 들어오므로, 병렬 알고리즘의 부류에는 이 조건을 붙인다.

## NC 와 AC

$i\ge 0$ 이라 한다.

- $\mathrm{NC}^i$ 는 입력이 둘 이하인 AND, OR 게이트와 NOT 게이트로 이루어지고, 크기가 $n$ 의 다항식이며 깊이가 $O(\log^i n)$ 인 로그 공간 균일 회로 족으로 판정되는 언어의 부류다.
- $\mathrm{AC}^i$ 는 AND, OR 게이트의 입력 수에 제한을 두지 않은 것이다. AC 는 교대 회로(alternating circuit)의 약어다.

$$
\mathrm{NC}=\bigcup_{i\ge 0}\mathrm{NC}^i=\bigcup_{i\ge 0}\mathrm{AC}^i
$$

이다. 출력이 여러 비트인 함수도 출력 비트마다 회로를 두어 같은 부류에 넣는다.

## P-완전

언어 $B\in\mathrm P$ 가 **P-완전(P-complete)** 이라는 것은 $\mathrm P$ 의 모든 언어가 로그 공간 환원으로 $B$ 에 환원된다는 것이다. **회로 값 문제(circuit value problem)** 는 회로 $C$ 와 입력 $x$ 를 받아 $C(x)=1$ 인지 묻는 문제다.

# 성질

## 포함 관계

$$
\mathrm{NC}^0\subseteq\mathrm{AC}^0\subseteq\mathrm{NC}^1\subseteq\mathrm L\subseteq\mathrm{NL}\subseteq\mathrm{AC}^1\subseteq\mathrm{NC}^2\subseteq\cdots\subseteq\mathrm{NC}\subseteq\mathrm P
$$

증명의 요지. 각 포함을 따로 보인다.

- $\mathrm{AC}^i\subseteq\mathrm{NC}^{i+1}$. 입력이 다항식 개인 게이트 하나를 입력 둘인 게이트의 이진 나무로 바꾸면 깊이가 $O(\log n)$ 배 는다.
- $\mathrm{NC}^1\subseteq\mathrm L$. 출력에서 입력 쪽으로 깊이 우선으로 값을 계산하면서, 지금 게이트까지의 경로를 왼쪽과 오른쪽의 비트열로 기억한다. 깊이가 $O(\log n)$ 이므로 경로는 $O(\log n)$ 비트다[^3].
- $\mathrm{NL}\subseteq\mathrm{AC}^1$. NL(nondeterministic logarithmic space)의 언어는 구성 그래프의 도달 가능성으로 판정된다. 인접 행렬 $A$ 에 단위행렬을 더한 불 행렬을 $\lceil\log_2 N\rceil$ 번 제곱하면 $N$ 걸음 이내의 도달 관계가 나오고, 불 행렬의 곱 한 번은 논리곱 다음 논리합의 깊이 $2$ 회로다.
- $\mathrm{NC}\subseteq\mathrm P$. 균일성으로 $C_n$ 을 다항시간에 써 내고 게이트 값을 위상순으로 계산한다.

$\mathrm{AC}^0\ne\mathrm{NC}^1$ 이다. 홀짝 함수는 깊이 $O(\log n)$ 의 XOR(exclusive or) 게이트의 나무로 $\mathrm{NC}^1$ 에 들지만, [Håstad 스위칭 보조정리](switching-lemma.md)로 증명되는 홀짝 하한에 따라 $\mathrm{AC}^0$ 에 들지 않는다.

## NC 에 드는 계산

- 두 정수의 덧셈은 직관 절의 받아올림 계산으로 $\mathrm{AC}^0$ 에 든다. $n$ 개 정수의 덧셈과 두 정수의 곱셈은 $\mathrm{NC}^1$ 에 든다.
- 행렬의 곱은 성분마다 곱 $n$ 개를 더하는 것이므로 $\mathrm{NC}^1$ 에 든다.
- [행렬식](determinants.md)과 역행렬은 $\mathrm{NC}^2$ 에 든다. L. Csanky 가 특성다항식의 계수를 Newton 항등식으로 거듭제곱의 대각합에서 구해 증명했다[^4]. 이 방법은 표수 $0$ 의 체에서 성립한다.

## P-완전성과 NC

정리. 회로 값 문제는 P-완전이다[^5].

증명의 요지. 다항시간 기계의 시간-공간 표를 칸마다 작은 회로로 바꾸면 계산이 회로 값 문제의 한 실례가 된다. [NP-완전성과 Cook–Levin 정리](np-completeness.md)의 표와 같은 구성이고, 표의 칸마다 같은 꼴의 회로를 두므로 로그 공간에서 써 낼 수 있다.

로그 공간 환원은 $\mathrm{NC}^2$ 에서 계산되고 NC 는 이런 환원에 대해 닫혀 있다. 따라서 P-완전 언어 하나가 NC 에 들면 $\mathrm{NC}=\mathrm P$ 다. 회로 값 문제 밖에 선형계획법의 실행 가능성, 단조 회로 값 문제, 깊이 우선 탐색의 사전순 첫 방문 순서가 P-완전이다.

# 활용

- [고립 보조정리](isolation-lemma.md)는 완전 매칭을 찾는 문제를 무작위 비트를 쓰는 NC 알고리즘으로 푼다. 무작위 무게 아래 최소 무게 매칭이 하나뿐이면 Tutte 행렬의 행렬식 계산 몇 번으로 그 매칭의 변을 모두 동시에 확인한다[^6].
- [Goldwasser–Kalai–Rothblum 프로토콜](gkr-protocol.md)은 로그 공간 균일 회로의 출력을 회로 깊이에 비례하는 검증 시간으로 확인한다. NC 의 언어에서는 검증 시간이 입력 길이에 $\log n$ 의 거듭제곱을 곱한 정도다.
- [선형계획법](linear-programming.md)은 다항시간에 풀리지만 실행 가능성 판정이 P-완전이어서, $\mathrm{NC}\ne\mathrm P$ 이면 다항식 개의 처리기로 polylog 단계에 푸는 알고리즘이 없다.

[^1]: N. Pippenger, "On simultaneous resource bounds", Proceedings of the 20th IEEE Symposium on Foundations of Computer Science (1979), 307–311.
[^2]: S. A. Cook, "A taxonomy of problems with fast parallel algorithms", Information and Control 64 (1985), 2–22.
[^3]: A. Borodin, "On relating time and space to size and depth", SIAM Journal on Computing 6 (1977), 733–744.
[^4]: L. Csanky, "Fast parallel matrix inversion algorithms", SIAM Journal on Computing 5 (1976), 618–623.
[^5]: R. E. Ladner, "The circuit value problem is log space complete for P", ACM SIGACT News 7 (1975), 18–20.
[^6]: K. Mulmuley, U. V. Vazirani, V. V. Vazirani, "Matching is as easy as matrix inversion", Combinatorica 7 (1987), 105–113.

# 연관 문서

## 선수지식

- [불 회로](boolean-circuits.md)
- [공간 복잡도](space-complexity.md)

## 더 알아보기

- [Barrington 정리](barrington-theorem.md)

#complexity #computation #algorithms
