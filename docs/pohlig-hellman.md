# Pohlig–Hellman 방법

# 개요

**Pohlig–Hellman 방법(Pohlig–Hellman algorithm)** 은 위수가 $N=\prod_j q_j^{e_j}$ 인 순환군 $\langle g\rangle$ 에서 [이산로그](discrete-logarithm.md) $g^x=h$ 를, 소수 $q_j$ 위수 부분군의 이산로그 $\sum_j e_j$ 개로 나눠 풀고 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 합치는 방법이다. 비용은 $N$ 이 아니라 가장 큰 소인수 $q$ 로 정해지고, 부분 문제를 [Baby-step giant-step 알고리즘](baby-step-giant-step.md)으로 풀면 군 연산 $O(\sum_j e_j(\log N+\sqrt{q_j}))$ 번이다. S. Pohlig 와 M. Hellman 이 1978 년에 발표했다[^1].

# 직관

법 $101$ 에서 $2^x\equiv 3$ 을 푼다. $2$ 의 위수는 $100=4\cdot 25$ 이므로 $x\bmod 4$ 와 $x\bmod 25$ 를 따로 구하면 $x\bmod 100$ 이 정해진다.

양변을 $25$ 제곱하면 $(2^{25})^x\equiv 3^{25}$ 이고 법 $101$ 에서 $2^{25}\equiv 10$, $3^{25}\equiv 10$ 이다. $10$ 의 위수는 $4$ 이므로 시험할 지수가 $0,1,2,3$ 넷뿐이고, $10^1\equiv 10$ 에서 $x\equiv 1\pmod 4$ 다.

양변을 $4$ 제곱하면 위수 $25$ 의 원소 $16=2^4$ 에 대해 $16^x\equiv 81$ 이다. $x\bmod 25=x_0+5x_1$ 로 쓰고 한 자리씩 구한다. 다시 $5$ 제곱하면 $95^{x_0}\equiv 84$ 이고 $95^4\equiv 84$ 이므로 $x_0=4$ 다. $81\cdot 16^{-4}\equiv 87$ 은 $95^{x_1}$ 과 같고 $95^3\equiv 87$ 이므로 $x_1=3$ 이다. 그래서 $x\equiv 19\pmod{25}$ 이고, $x\equiv 1\pmod 4$ 와 합치면 $x=69$ 다. 시험한 지수는 모두 위수 $4$ 나 $5$ 의 군 안에서였다.

# 정의

## 소수 거듭제곱으로의 분해

$N=\prod_j q_j^{e_j}$ 이고 $N_j=N/q_j^{e_j}$ 로 둔다. $g_j=g^{N_j}$ 의 위수는 $q_j^{e_j}$ 이고, $h_j=h^{N_j}$ 에 대해 $g_j^{x}=h_j$ 이므로 $x\bmod q_j^{e_j}$ 는 위수 $q_j^{e_j}$ 인 군의 이산로그다. 모든 $j$ 에서 이것을 구하면 중국인의 나머지 정리로 $x\bmod N$ 이 정해진다.

## 소수 거듭제곱 위수의 군

위수가 $q^e$ 인 $\gamma$ 와 $\eta=\gamma^y$ 에 대해 $y=y_0+y_1q+\cdots+y_{e-1}q^{e-1}$ $(0\le y_k\lt q)$ 로 쓴다. $\delta=\gamma^{q^{e-1}}$ 은 위수가 $q$ 다. $k=0,1,\dots,e-1$ 에 대해 차례로 다음을 푼다.

$$
\delta^{y_k}=\left(\eta\gamma^{-(y_0+\cdots+y_{k-1}q^{k-1})}\right)^{q^{e-1-k}}
$$

괄호 안은 $\gamma^{y_kq^k+\cdots}$ 이고 $q^{e-1-k}$ 제곱하면 $q^e$ 의 배수인 항이 사라져 $\delta^{y_k}$ 만 남는다. 각 단계는 위수 $q$ 인 군의 이산로그다.

# 성질

## 비용

정리. 위수 $N=\prod_jq_j^{e_j}$ 인 순환군에서 Pohlig–Hellman 방법은 위수 $q_j$ 인 군의 이산로그 $\sum_je_j$ 개와 군 연산 $O(\sum_je_j\log N)$ 번으로 $x$ 를 구한다[^1][^2].

증명의 요지. $g_j$, $h_j$ 를 구하는 거듭제곱과 각 자리의 $q^{e-1-k}$ 제곱이 군 연산 $O(\log N)$ 번이다. 자리마다 위수 $q_j$ 인 이산로그가 하나다. 그 이산로그를 baby-step giant-step 으로 풀면 $O(\sqrt{q_j})$ 번이다.

## 안전한 군의 선택

비용이 가장 큰 소인수 $q$ 의 $\sqrt q$ 로 정해지므로, 위수가 작은 소수들의 곱인 군은 이산로그가 쉽다. 그래서 암호에는 위수가 큰 소수인 부분군을 쓴다. 법 $p$ 의 곱셈군은 위수 $p-1$ 이 짝수이므로 $p=2q+1$ 인 안전 소수(safe prime)를 고르거나 위수 $q$ 인 부분군으로 제한한다.

군의 위수가 소수가 아닌 것을 공격자가 이용하는 예가 작은 부분군 공격(small subgroup attack)이다. 상대가 보낸 원소가 위수가 작은 부분군에 들어 있으면 비밀 지수를 그 위수로 나눈 나머지가 드러나고, 여러 부분군에서 모은 나머지를 중국인의 나머지 정리로 합친다.

# 활용

- 유한체의 이산로그. 위수 $p-1$ 이 매끄러운 소수 $p$ 의 곱셈군에서는 이 방법으로 이산로그를 다항시간에 구한다. Diffie–Hellman 키 교환의 소수를 고를 때 $p-1$ 의 큰 소인수를 요구하는 근거다.
- [타원곡선](elliptic-curves.md). 곡선의 점 개수가 큰 소수이거나 큰 소수와 작은 여인수의 곱이 되게 곡선을 고른다. 부분 문제에는 [Pollard rho 알고리즘](pollard-rho.md)을 써서 공간을 $O(1)$ 로 둔다.
- 위수 계산과 결합. 군의 위수를 알고 소인수분해할 수 있으면 원소의 위수도 소인수마다 거듭제곱을 시험해 구하고, 같은 분해가 이산로그 계산에도 쓰인다.

[^1]: S. Pohlig, M. Hellman, "An improved algorithm for computing logarithms over GF(p) and its cryptographic significance", IEEE Transactions on Information Theory 24 (1) (1978), 106–110.
[^2]: A. J. Menezes, P. C. van Oorschot, S. A. Vanstone, *Handbook of Applied Cryptography*, CRC Press, 1996, §3.6.4.

# 연관 문서

## 선수지식

- [Baby-step giant-step 알고리즘](baby-step-giant-step.md)
- [중국인의 나머지 정리](chinese-remainder-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography #group_theory
