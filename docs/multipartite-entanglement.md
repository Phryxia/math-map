# 다자간 얽힘

# 개요

**다자간 얽힘(multipartite entanglement)** 은 세 개 이상의 큐비트가 함께 얽힌 방식을 다루는 개념이다. 세 큐비트 상태 $\tfrac1{\sqrt 2}(\vert 000\rangle+\vert 111\rangle)$ 과 $\tfrac1{\sqrt 3}(\vert 001\rangle+\vert 010\rangle+\vert 100\rangle)$ 은 둘 다 어느 큐비트도 나머지와 떨어져 있지 않지만, 셋째 큐비트를 버리면 앞의 것은 남은 두 큐비트가 얽힘을 잃고 뒤의 것은 얽힘이 남는다. 두 큐비트에서는 얽힘의 양을 수 하나로 비교했지만, 세 큐비트에서는 각자의 큐비트에 가역 연산을 걸어 서로 바꿀 수 있는지로 상태를 부류로 나눈다.

# 직관

세 큐비트를 앨리스, 밥, 찰리가 하나씩 가진다. 상태 $\tfrac1{\sqrt 2}(\vert 000\rangle+\vert 111\rangle)$ 에서 찰리가 자기 큐비트를 계산 기저로 측정하면, $0$ 이 나올 때 앨리스와 밥의 상태는 $\vert 00\rangle$ 이고 $1$ 이 나올 때 $\vert 11\rangle$ 이다. 어느 쪽이든 [양자 얽힘](quantum-entanglement.md)의 곱 상태이고, 찰리가 결과를 알리지 않으면 두 사람의 상태는 섞음 $\tfrac12(\vert 00\rangle\langle 00\vert+\vert 11\rangle\langle 11\vert)$ 이라 분리 가능하다.

상태 $\tfrac1{\sqrt 3}(\vert 001\rangle+\vert 010\rangle+\vert 100\rangle)$ 에서 찰리가 측정하면 확률 $\tfrac23$ 으로 $0$ 이 나오고, 그때 앨리스와 밥의 상태는 $\tfrac1{\sqrt 2}(\vert 01\rangle+\vert 10\rangle)$ 이다. 이 상태는 진폭 행렬의 행렬식이 $-\tfrac12$ 라 얽혀 있다. 확률 $\tfrac13$ 으로 $1$ 이 나오면 $\vert 00\rangle$ 이다.

두 상태 모두 어느 한 사람의 큐비트를 나머지 둘과 떼어 놓은 곱으로 쓸 수 없다. 그런데 한 사람이 빠질 때의 행동이 다르므로, 세 큐비트의 얽힘은 얽혔는지 아닌지만으로는 다 적히지 않는다.

# 정의

## GHZ 상태와 W 상태

$$
\vert\mathrm{GHZ}\rangle=\tfrac1{\sqrt 2}(\vert 000\rangle+\vert 111\rangle),\qquad\vert W\rangle=\tfrac1{\sqrt 3}(\vert 001\rangle+\vert 010\rangle+\vert 100\rangle)
$$

를 각각 **GHZ 상태**(Greenberger–Horne–Zeilinger state)와 **W 상태(W state)** 라 한다. 직관 절의 두 상태다. 큐비트 $n$ 개의 GHZ 상태는 $\tfrac1{\sqrt 2}(\vert 0\cdots 0\rangle+\vert 1\cdots 1\rangle)$ 이다.

## 완전히 얽힌 상태

$\mathbb C^2\otimes\mathbb C^2\otimes\mathbb C^2$ 의 순수 상태가 $\vert\alpha\rangle\_A\otimes\vert\beta\rangle\_{BC}$ 꼴이거나 $B$ 나 $C$ 를 떼어 낸 같은 꼴이면 **쌍분리 가능(biseparable)** 하다고 하고, 셋 다 아니면 **완전히 얽힌 상태(genuinely entangled state)** 라 한다. $\vert 0\rangle\otimes\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 은 쌍분리 가능하고 $\vert\mathrm{GHZ}\rangle$ 과 $\vert W\rangle$ 은 완전히 얽혀 있다. 한 큐비트와 나머지 두 큐비트로 나눈 Schmidt 분해의 Schmidt 랭크가 세 나눔 모두에서 $2$ 이면 완전히 얽힌 상태다.

## SLOCC 동치

세 사람이 각자의 큐비트에 가역 행렬 $A$, $B$, $C$ 를 걸어

$$
(A\otimes B\otimes C)\vert\psi\rangle\propto\vert\phi\rangle
$$

가 되면 $\vert\psi\rangle$ 과 $\vert\phi\rangle$ 이 **SLOCC 동치**(stochastic local operations and classical communication)라 한다. 각자 측정을 하고 결과를 고전 통신으로 주고받는 절차(LOCC, local operations and classical communication)로 $0$ 이 아닌 확률로 $\vert\psi\rangle$ 을 $\vert\phi\rangle$ 으로 바꾸고 그 반대도 할 수 있는 것과 같다. 측정 결과 하나에 해당하는 연산이 가역 행렬 하나다. $\cos\theta\vert 000\rangle+\sin\theta\vert 111\rangle$ ($0\lt \theta\lt \pi/2$) 은 $A=\mathrm{diag}(\tfrac1{\cos\theta},\tfrac1{\sin\theta})$, $B=C=I$ 를 걸면 $\vert 000\rangle+\vert 111\rangle$ 이 되므로 $\vert\mathrm{GHZ}\rangle$ 과 SLOCC 동치다.

## 3 얽힘량

진폭 $a\_{ijk}$ 로 적은 세 큐비트 상태에 대해 Cayley 초행렬식(Cayley hyperdeterminant)

$$
\begin{aligned}
\mathrm{Det}(a)={}&a_{000}^2a_{111}^2+a_{001}^2a_{110}^2+a_{010}^2a_{101}^2+a_{100}^2a_{011}^2\cr
&-2(a_{000}a_{001}a_{110}a_{111}+a_{000}a_{010}a_{101}a_{111}+a_{000}a_{100}a_{011}a_{111}\cr
&\qquad+a_{001}a_{010}a_{101}a_{110}+a_{001}a_{100}a_{011}a_{110}+a_{010}a_{100}a_{011}a_{101})\cr
&+4(a_{000}a_{011}a_{101}a_{110}+a_{001}a_{010}a_{100}a_{111})
\end{aligned}
$$

을 두고 $\tau=4\vert\mathrm{Det}(a)\vert$ 를 **3 얽힘량(three-tangle)** 이라 한다[^1]. $\vert\mathrm{GHZ}\rangle$ 은 $a\_{000}=a\_{111}=\tfrac1{\sqrt 2}$ 라 첫 항만 남아 $\mathrm{Det}=\tfrac14$, $\tau=1$ 이다. $\vert W\rangle$ 은 모든 항에 $0$ 인 진폭이 들어가 $\tau=0$ 이다.

# 성질

## 세 큐비트의 분류

세 큐비트의 순수 상태는 SLOCC 동치로 여섯 부류로 나뉜다. 곱 상태, 쌍분리 가능한 상태 세 부류(떨어진 큐비트가 $A$, $B$, $C$ 인 것), 그리고 완전히 얽힌 상태의 두 부류다. 완전히 얽힌 상태는 $\tau\gt 0$ 이면 $\vert\mathrm{GHZ}\rangle$ 과, $\tau=0$ 이면 $\vert W\rangle$ 과 SLOCC 동치다(Dür–Vidal–Cirac 정리, Dür–Vidal–Cirac theorem)[^2].

## GHZ 부류와 W 부류의 구별

초행렬식은 $\mathrm{Det}\big((A\otimes B\otimes C)a\big)=(\det A)^2(\det B)^2(\det C)^2\thinspace\mathrm{Det}(a)$ 를 만족한다. 가역 행렬의 행렬식은 $0$ 이 아니므로 $\tau=0$ 인지 아닌지는 SLOCC 로 바뀌지 않는다. $\vert\mathrm{GHZ}\rangle$ 은 $\tau=1$, $\vert W\rangle$ 은 $\tau=0$ 이므로 두 상태는 확률이 아무리 작아도 서로 바뀌지 않는다.

## 텐서 계수

세 큐비트 상태는 $2\times 2\times 2$ 텐서이고, 단순텐서 $\vert\alpha\rangle\otimes\vert\beta\rangle\otimes\vert\gamma\rangle$ 의 합으로 쓸 때 필요한 항의 최소 개수가 [텐서곱](tensor-products.md)의 계수다. 가역 행렬 $A\otimes B\otimes C$ 는 단순텐서를 단순텐서로 보내므로 계수는 SLOCC 불변량이다. $\vert\mathrm{GHZ}\rangle$ 의 계수는 $2$ 이고 $\vert W\rangle$ 의 계수는 $3$ 이다. 한편

$$
\vert 001\rangle+\vert 010\rangle+\vert 100\rangle=\lim_{\varepsilon\to 0}\frac1\varepsilon\Big((\vert 0\rangle+\varepsilon\vert 1\rangle)^{\otimes 3}-\vert 0\rangle^{\otimes 3}\Big)
$$

이므로 $\vert W\rangle$ 은 계수 $2$ 인 상태들의 극한이다. 계수 $2$ 인 텐서들의 극한으로 얻는 텐서의 최소 계수를 **경계 계수(border rank)** 라 하고, $\vert W\rangle$ 의 경계 계수는 $2$ 다. W 부류는 GHZ 부류의 폐포 안에 들어 있다.

## 한 큐비트를 버린 상태

$\vert\mathrm{GHZ}\rangle$ 에서 $C$ 를 버린 $\rho\_{AB}=\tfrac12(\vert 00\rangle\langle 00\vert+\vert 11\rangle\langle 11\vert)$ 은 분리 가능하다. $\vert W\rangle$ 에서 $C$ 를 버린 상태는

$$
\rho_{AB}=\tfrac13\vert 00\rangle\langle 00\vert+\tfrac23\vert\Psi^+\rangle\langle\Psi^+\vert,\qquad\vert\Psi^+\rangle=\tfrac1{\sqrt 2}(\vert 01\rangle+\vert 10\rangle)
$$

이다. 부분 전치는 $\vert 00\rangle$, $\vert 11\rangle$ 이 펼치는 블록이 $\tfrac13\begin{pmatrix}1&1\cr 1&0\end{pmatrix}$ 이고 고윳값 $\tfrac{1-\sqrt 5}6\lt 0$ 을 가지므로 부분 전치 판정법으로 얽혀 있다. 세 쌍 $AB$, $BC$, $CA$ 가 모두 얽혀 있고, 각 쌍의 얽힘이 얼마나 클 수 있는지는 [얽힘의 일부일처성](monogamy-of-entanglement.md)이 제한한다.

# 활용

- 비국소성. 세 사람이 $\vert\mathrm{GHZ}\rangle$ 을 $X$ 나 $Y$ 로 측정하면 $XXX$, $XYY$, $YXY$, $YYX$ 의 측정값의 곱이 각각 $+1,-1,-1,-1$ 로 확률 $1$ 로 정해진다. 미리 정한 답 $x\_A,y\_A,\dots$ 로 이 넷을 맞추려면 네 곱을 모두 곱한 값이 $+1$ 이어야 하는데 요구된 값의 곱은 $-1$ 이다. [Bell 부등식](bell-inequality.md)과 달리 확률이 아닌 한 번의 결과로 국소 숨은 변수 모형이 배제된다[^3].
- 비밀 분산. 딜러가 $\vert\mathrm{GHZ}\rangle$ 의 나머지 두 큐비트를 두 사람에게 나눠 주고 세 사람이 같은 무작위 기저로 측정하면, 두 사람이 측정 결과를 합쳐야만 딜러의 결과를 알 수 있다. [비밀 분산](secret-sharing.md)의 두 사람 판을 양자 상태로 한 것이다.
- 안정자 상태. $n$ 큐비트 GHZ 상태는 $X^{\otimes n}$ 과 $Z\_iZ\_{i+1}$ 로 생성되는 안정자의 안정자 상태이고, [Gottesman–Knill 정리](gottesman-knill.md)에 따라 이 상태를 만드는 회로는 고전적으로 흉내 낼 수 있다. W 상태는 안정자 상태가 아니다.
- 행렬 곱셈의 복잡도. [Strassen 알고리즘](strassen-algorithm.md)의 지수 상한 $\omega\le\log\_nr$ 은 텐서 계수 $r$ 대신 경계 계수로 바꿔도 성립한다. Coppersmith–Winograd 의 방법은 $\vert W\rangle$ 처럼 경계 계수가 계수보다 작은 텐서를 쓴다.

[^1]: V. Coffman, J. Kundu, W. K. Wootters, Distributed entanglement, *Physical Review A* 61 (2000), 052306.
[^2]: W. Dür, G. Vidal, J. I. Cirac, Three qubits can be entangled in two inequivalent ways, *Physical Review A* 62 (2000), 062314.
[^3]: D. M. Greenberger, M. A. Horne, A. Shimony, A. Zeilinger, Bell's theorem without inequalities, *American Journal of Physics* 58 (1990), 1131–1143.

# 연관 문서

## 선수지식

- [양자 얽힘](quantum-entanglement.md)

## 더 알아보기

- [얽힘의 일부일처성](monogamy-of-entanglement.md)

#computation #linear_algebra #information_theory
