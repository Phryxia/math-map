# Grover 알고리즘

# 개요

**Grover 알고리즘(Grover's algorithm)** 은 후보 $N$ 개 가운데 조건을 만족하는 것 하나를 조건 확인 약 $\sqrt N$ 번으로 찾는 양자 알고리즘이다. 네 자리 비밀번호의 후보는 $10^4$ 개이고, 맞는지 확인만 할 수 있으면 하나씩 넣어 보는 수밖에 없어 평균 $5000$ 번 남짓 확인한다. Grover 알고리즘은 모든 후보를 같은 진폭으로 겹쳐 놓고, 정답의 진폭을 뒤집은 뒤 평균에 대해 반사하는 단계를 $78$ 번 되풀이해 정답의 진폭을 $1$ 가까이 키운다.

# 직관

후보가 $0,1,2,3$ 넷이고 정답은 $2$ 라 한다. 정답인지 확인하는 함수 $f$ 는 $f(2)=1$ 이고 나머지에서 $0$ 이다. 고전적으로는 확인을 최대 세 번 해야 정답을 안다.

[양자 회로](quantum-circuits.md)로는 네 후보를 진폭 $(\tfrac12,\tfrac12,\tfrac12,\tfrac12)$ 로 겹쳐 놓는다. $f$ 를 한 번 써서 정답의 진폭 부호만 바꾸면 $(\tfrac12,\tfrac12,-\tfrac12,\tfrac12)$ 이다. 진폭의 평균은 $\tfrac14$ 이고, 각 진폭 $a$ 를 평균에 대해 반사해 $2\cdot\tfrac14-a$ 로 바꾸면 $\tfrac12$ 는 $0$ 이 되고 $-\tfrac12$ 는 $1$ 이 된다. 결과는 $(0,0,1,0)$ 이고 측정하면 확률 $1$ 로 $2$ 가 나온다. 확인은 한 번 썼다.

후보가 $N$ 개이면 처음 진폭은 모두 $1/\sqrt N$ 이다. 부호 바꾸기와 평균 반사를 한 번 하면 정답의 진폭이 약 $2/\sqrt N$ 만큼 늘고 나머지 진폭은 조금씩 준다. 정답의 진폭이 $1$ 가까이 가려면 이 단계를 $\sqrt N$ 규모의 횟수만큼 되풀이한다.

# 정의

## 위상 오라클

$f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 이고 $N=2^n$ 이다. $f$ 의 **위상 오라클(phase oracle)** 은

$$
O_f\vert x\rangle=(-1)^{f(x)}\vert x\rangle
$$

로 정의되는 유니터리 사상이다. $f$ 를 계산하는 가역 회로가 있으면 보조 큐비트를 $\tfrac1{\sqrt 2}(\vert 0\rangle-\vert 1\rangle)$ 에 두고 $\vert x,b\rangle\mapsto\vert x,b\oplus f(x)\rangle$ 를 걸어 $O_f$ 를 얻는다. $O_f$ 를 한 번 거는 것을 **질의(query)** 한 번으로 센다. 직관 절의 $N=4$ 에서 $O_f$ 는 진폭 벡터를 $(\tfrac12,\tfrac12,\tfrac12,\tfrac12)$ 에서 $(\tfrac12,\tfrac12,-\tfrac12,\tfrac12)$ 로 보낸다.

## 평균에 대한 반사

$\vert s\rangle=H^{\otimes n}\vert 0\cdots 0\rangle=N^{-1/2}\sum_x\vert x\rangle$ 은 모든 후보의 균등한 중첩이다. **확산 연산자(diffusion operator)** 는

$$
D=2\vert s\rangle\langle s\vert-I=H^{\otimes n}\left(2\vert 0\cdots 0\rangle\langle 0\cdots 0\vert-I\right)H^{\otimes n}
$$

이다. 상태 $\sum_x a_x\vert x\rangle$ 의 진폭 평균을 $\bar a=N^{-1}\sum_x a_x$ 라 하면 $\langle s\vert\psi\rangle=\sqrt N\thinspace\bar a$ 이므로

$$
D\sum_x a_x\vert x\rangle=\sum_x(2\bar a-a_x)\vert x\rangle
$$

이다. 직관 절에서 $(\tfrac12,\tfrac12,-\tfrac12,\tfrac12)$ 가 $(0,0,1,0)$ 으로 간 것이 이 사상이다.

## Grover 반복

**Grover 반복(Grover iteration)** 은 $G=DO_f$ 다. 정답이 하나일 때 Grover 알고리즘은 다음과 같다[^1].

1. $\vert s\rangle$ 을 만든다.
2. $G$ 를 $k=\lfloor\tfrac\pi4\sqrt N\rfloor$ 번 건다.
3. 계산 기저로 측정해 나온 $x$ 에서 $f(x)=1$ 인지 확인한다.

질의는 $k$ 번이다. $N=4$ 이면 $k=1$ 이고 직관 절의 계산과 같다. $N=10^4$ 이면 $k=78$ 이다.

# 성질

## 2 차원 평면의 회전

정답이 $M$ 개라 하고 $\vert w\rangle$ 을 정답들의 균등한 중첩, $\vert r\rangle$ 을 나머지의 균등한 중첩이라 한다. $\sin\theta=\sqrt{M/N}$ 으로 $\theta$ 를 정하면 $\vert s\rangle=\sin\theta\vert w\rangle+\cos\theta\vert r\rangle$ 이다. $O_f$ 는 이 평면에서 $\vert r\rangle$ 을 축으로 하는 반사이고 $D$ 는 $\vert s\rangle$ 을 축으로 하는 반사다. 두 반사의 곱은 두 축 사이 각 $\theta$ 의 두 배만큼의 회전이므로

$$
G^k\vert s\rangle=\sin\big((2k+1)\theta\big)\vert w\rangle+\cos\big((2k+1)\theta\big)\vert r\rangle
$$

이다. 측정에서 정답이 나올 확률은 $\sin^2((2k+1)\theta)$ 이고, $(2k+1)\theta$ 가 $\pi/2$ 에 가장 가까운 $k\approx\tfrac\pi4\sqrt{N/M}$ 에서 $1-M/N$ 이상이다. $N=4$, $M=1$ 이면 $\theta=\pi/6$ 이고 $k=1$ 에서 $3\theta=\pi/2$ 라 확률이 $1$ 이다. $k=2$ 로 더 돌리면 확률은 $\sin^2(5\pi/6)=\tfrac14$ 로 떨어진다.

## 질의 하한

$f$ 에 질의로만 접근하는 양자 알고리즘이 정답 하나를 상수 확률로 찾으려면 $\Omega(\sqrt N)$ 번 질의해야 한다(Bennett–Bernstein–Brassard–Vazirani)[^2]. 증명은 질의 하나가 정답 후보 $x$ 의 진폭을 바꾸는 양을 모든 $x$ 에 대해 더해, $T$ 번 질의한 상태와 $f\equiv 0$ 일 때의 상태의 거리가 $O(T/\sqrt N)$ 를 넘지 못함을 보인다. 따라서 Grover 알고리즘의 질의 수는 상수배를 빼면 줄어들지 않는다. 같은 논법으로 어떤 오라클에 대해 NP(nondeterministic polynomial time)가 BQP(bounded-error quantum polynomial time)에 포함되지 않는다.

주기처럼 함수의 구조를 쓰는 [Shor 알고리즘](shor-algorithm.md)은 지수 배로 빨라지지만, 구조 없이 확인만 하는 탐색에서 양자 회로가 얻는 이득은 제곱근뿐이다.

## 미지의 정답 수

$M$ 을 모르면 $k$ 를 정할 수 없다. 반복 횟수의 상한 $m$ 을 $1$ 에서 시작해 $6/5$ 배씩 늘리며, 매번 $0\le k\lt m$ 에서 $k$ 를 무작위로 골라 $G^k\vert s\rangle$ 을 측정한다. 이 방법은 기댓값 $O(\sqrt{N/M})$ 번의 질의로 정답을 찾는다(Boyer–Brassard–Høyer–Tapp)[^3].

## 진폭 증폭

$\vert s\rangle$ 대신 성공 확률 $p$ 인 임의의 양자 알고리즘 $A$ 의 출력 상태 $A\vert 0\cdots 0\rangle$ 을 쓰고 $D$ 를 $A(2\vert 0\cdots 0\rangle\langle 0\cdots 0\vert-I)A^{-1}$ 로 바꾸어도 같은 회전이 성립한다. 그러면 $A$ 를 $O(1/\sqrt p)$ 번 써서 성공 확률을 상수로 올린다. 이것을 **진폭 증폭(amplitude amplification)** 이라 한다[^4]. 고전적으로 같은 일을 하려면 $A$ 를 $O(1/p)$ 번 되풀이한다.

# 활용

- 대칭키 암호의 전수 탐색. 키가 $k$ 비트인 블록 암호의 키를 평문과 암호문 한 쌍으로 찾는 탐색이 $2^{k/2}$ 번의 질의로 줄어든다. 그래서 양자 컴퓨터를 고려하는 대칭키 암호는 키 길이를 두 배로 늘린다. 공개키 쪽의 대비는 [격자 기반 후양자 암호](post-quantum-cryptography.md)다.
- 충족 가능성 판정. 변수 $n$ 개인 논리식의 할당 $2^n$ 개를 전수 탐색하는 대신 $2^{n/2}$ 번의 질의로 충족 할당을 찾는다. SAT(satisfiability)가 [NP-완전](np-completeness.md)이므로 NP 의 모든 문제에서 전수 탐색이 같은 비율로 빨라지지만, 지수 시간은 그대로다.
- 최솟값 찾기. 표의 값 $N$ 개의 최솟값을 진폭 증폭과 임계값 갱신으로 $O(\sqrt N)$ 번의 질의에 찾는다(Dürr–Høyer)[^5].

[^1]: L. K. Grover, A fast quantum mechanical algorithm for database search, *Proceedings of the 28th Annual Symposium on Theory of Computing* (1996), 212–219.
[^2]: C. H. Bennett, E. Bernstein, G. Brassard, U. Vazirani, Strengths and weaknesses of quantum computing, *SIAM Journal on Computing* 26 (1997), 1510–1523.
[^3]: M. Boyer, G. Brassard, P. Høyer, A. Tapp, Tight bounds on quantum searching, *Fortschritte der Physik* 46 (1998), 493–505.
[^4]: G. Brassard, P. Høyer, M. Mosca, A. Tapp, Quantum amplitude amplification and estimation, *Contemporary Mathematics* 305 (2002), 53–74.
[^5]: C. Dürr, P. Høyer, A quantum algorithm for finding the minimum, arXiv:quant-ph/9607014 (1996).

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)

## 더 알아보기

- [양자 질의 복잡도](quantum-query-complexity.md)

#computation #algorithms #complexity #cryptography
