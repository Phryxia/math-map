# 양자 질의 복잡도

# 개요

**양자 질의 복잡도(quantum query complexity)** 는 입력 비트열의 한 칸을 묻는 일만 비용으로 셀 때, 함수의 값을 구하는 데 드는 양자 질의의 최소 횟수다. 비트 두 개의 배타적 논리합 $x\_1\oplus x\_2$ 를 구하려면 고전적으로는 두 칸을 다 물어야 하지만, [Deutsch–Jozsa 알고리즘](deutsch-jozsa-algorithm.md)의 회로는 질의 한 번으로 구한다. 반대로 비트 $N$ 개 가운데 $1$ 이 있는지 묻는 문제는 양자 질의로도 $\sqrt N$ 규모가 든다. 양자 질의 복잡도는 질의 $T$ 번 뒤의 진폭이 입력 비트의 $T$ 차 다항식이라는 사실로 이런 하한을 계산한다.

# 직관

입력 $x=(x\_1,x\_2)$ 의 칸 $i$ 를 묻는 질의는 $\vert i\rangle\mapsto(-1)^{x\_i}\vert i\rangle$ 이다. $\tfrac1{\sqrt 2}(\vert 1\rangle+\vert 2\rangle)$ 에 질의를 한 번 걸면

$$
\tfrac1{\sqrt 2}\big((-1)^{x_1}\vert 1\rangle+(-1)^{x_2}\vert 2\rangle\big)=\tfrac1{\sqrt 2}\big((1-2x_1)\vert 1\rangle+(1-2x_2)\vert 2\rangle\big)
$$

이고, $H$ 를 걸고 측정하면 결과가 $x\_1\oplus x\_2$ 다. 질의 뒤 진폭은 $x\_1,x\_2$ 의 일차식이고, $H$ 같은 입력과 무관한 연산은 진폭을 섞을 뿐 차수를 올리지 않는다. 측정 확률은 진폭의 절댓값 제곱이므로 차수가 $2$ 이하인 다항식이다. 실제로 $x\_1\oplus x\_2=x\_1+x\_2-2x\_1x\_2$ 는 차수가 $2$ 다.

질의를 $T$ 번 하면 진폭은 차수 $T$ 이하, 확률은 차수 $2T$ 이하의 다항식이다. 비트 $N$ 개의 배타적 논리합은 차수 $N$ 의 다항식으로만 적히므로 $2T\ge N$ 이어야 하고, 질의가 적어도 $N/2$ 번 든다.

# 정의

## 질의 알고리즘

입력 $x\in\lbrace 0,1\rbrace^N$ 에 대한 **질의(query)** 는 유니터리 $O\_x\vert i,b,z\rangle=\vert i,b\oplus x\_i,z\rangle$ 다. $z$ 는 작업 공간이다. 질의 $T$ 번의 알고리즘은 $x$ 와 무관한 유니터리 $U\_0,\dots,U\_T$ 로

$$
U_TO_xU_{T-1}O_x\cdots U_1O_xU_0\vert 0\cdots 0\rangle
$$

을 만들고 정해 둔 큐비트를 측정해 답을 낸다. 직관 절의 회로는 $N=2$, $T=1$ 이다.

## 복잡도의 종류

불 함수 $f:\lbrace 0,1\rbrace^N\to\lbrace 0,1\rbrace$ 에 대해 모든 $x$ 에서 확률 $1$ 로 $f(x)$ 를 내는 알고리즘의 최소 질의 수를 $Q\_E(f)$, 확률 $2/3$ 이상으로 내는 알고리즘의 최소 질의 수를 $Q\_2(f)$ 라 한다. 고전 결정적 알고리즘의 최소 질의 수, 곧 결정 나무의 최소 깊이는 $D(f)$ 다. $f(x)=x\_1\oplus x\_2$ 이면 $D(f)=2$, $Q\_E(f)=1$ 이다.

## 근사 차수

$f$ 를 실계수 다중선형 다항식으로 나타낸 것의 차수를 $\deg f$ 라 한다([민감도 정리](sensitivity-theorem.md)의 차수와 같다). 모든 $x$ 에서 $\vert p(x)-f(x)\vert\le 1/3$ 인 실계수 다항식 $p$ 의 최소 차수를 **근사 차수(approximate degree)** $\widetilde{\deg}(f)$ 라 한다. 배타적 논리합 $x\_1\oplus x\_2$ 는 $\deg=\widetilde{\deg}=2$ 다.

# 성질

## 다항식 방법

질의 $T$ 번의 알고리즘이 $1$ 을 낼 확률은 $x$ 의 차수 $2T$ 이하 실계수 다항식이다[^1]. 따라서

$$
Q_E(f)\ge\tfrac12\deg f,\qquad Q_2(f)\ge\tfrac12\widetilde{\deg}(f)
$$

이다. 이 하한을 얻는 방법을 **다항식 방법(polynomial method)** 이라 한다. 비트 $N$ 개의 배타적 논리합은 $\widetilde{\deg}=N$ 이므로 $Q\_2\ge N/2$ 이고, 칸을 둘씩 묶어 직관 절의 회로를 쓰면 $N/2$ 번에 정확히 구하므로 $Q\_E=Q\_2=N/2$ 다.

## OR 함수

$\mathrm{OR}\_N(x)=x\_1\vee\cdots\vee x\_N$ 은 $\widetilde{\deg}(\mathrm{OR}\_N)=\Theta(\sqrt N)$ 이다[^2]. 다항식 방법으로 $Q\_2(\mathrm{OR}\_N)=\Omega(\sqrt N)$ 이고, [Grover 알고리즘](grover-algorithm.md)이 $O(\sqrt N)$ 번에 구하므로 $Q\_2(\mathrm{OR}\_N)=\Theta(\sqrt N)$ 다. 반면 $\deg(\mathrm{OR}\_N)=N$ 이라 $Q\_E(\mathrm{OR}\_N)\ge N/2$ 이고, 오류를 허용하지 않으면 Grover 알고리즘의 이득은 많아야 상수배다.

## 전함수의 다항 관계

모든 입력에서 정의된 불 함수에서는 $D(f)=O(Q\_2(f)^4)$ 다[^3]. 증명에는 민감도 정리의 $\deg f\le s(f)^2$ 를 쓴다. 따라서 전함수에서는 양자 질의가 고전 질의보다 다항식 배 넘게 적을 수 없다. Deutsch–Jozsa 문제와 [Simon 알고리즘](simon-algorithm.md)의 지수 차이는 입력이 특정 꼴이라는 약속이 있어서 생긴다.

## 적대자 방법

입력의 쌍 $(x,y)$ 에 무게를 주고, 질의 한 번이 $f(x)\ne f(y)$ 인 쌍에 대한 두 상태의 내적을 얼마나 줄이는지 재는 하한을 **적대자 방법(adversary method)** 이라 한다[^4]. 무게에 음수를 허용한 판본은 $Q\_2(f)$ 를 상수배 안에서 정확히 준다[^5].

# 활용

- 알고리즘의 최적성. Grover 알고리즘의 $O(\sqrt N)$ 이 최적이라는 것과, 구조 없는 탐색에서 양자 계산의 이득이 제곱근에 그친다는 것을 다항식 방법으로 보인다.
- 충돌 문제. 2 대 1 함수에서 같은 값을 갖는 두 입력을 찾는 문제의 양자 질의 복잡도가 $\Theta(N^{1/3})$ 이라는 것이 근사 차수 하한으로 증명되었다[^6]. 같은 값을 갖는 입력의 쌍이 부분군의 잉여류를 이루지 않으면 [숨은 부분군 문제](hidden-subgroup-problem.md)의 다항 로그 질의가 통하지 않는다.

[^1]: R. Beals, H. Buhrman, R. Cleve, M. Mosca, R. de Wolf, Quantum lower bounds by polynomials, *Journal of the ACM* 48 (2001), 778–797.
[^2]: N. Nisan, M. Szegedy, On the degree of Boolean functions as real polynomials, *Computational Complexity* 4 (1994), 301–313.
[^3]: S. Aaronson, S. Ben-David, R. Kothari, S. Rao, A. Tal, Degree vs. approximate degree and quantum implications of Huang's sensitivity theorem, *Proceedings of the 53rd ACM Symposium on Theory of Computing* (2021), 1330–1342.
[^4]: A. Ambainis, Quantum lower bounds by quantum arguments, *Journal of Computer and System Sciences* 64 (2002), 750–767.
[^5]: B. W. Reichardt, Reflections for quantum query algorithms, *Proceedings of the 22nd ACM-SIAM Symposium on Discrete Algorithms* (2011), 560–569.
[^6]: S. Aaronson, Y. Shi, Quantum lower bounds for the collision and the element distinctness problems, *Journal of the ACM* 51 (2004), 595–605.

# 연관 문서

## 선수지식

- [Grover 알고리즘](grover-algorithm.md)
- [민감도 정리](sensitivity-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #complexity #combinatorics
