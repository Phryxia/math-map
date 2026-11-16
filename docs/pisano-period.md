# Pisano 주기

# 개요

**Pisano 주기(Pisano period)** 는 Fibonacci 수를 $n$ 으로 나눈 나머지가 되풀이되는 주기다. [Fibonacci 수](fibonacci-numbers.md)의 끝자리는 $0,1,1,2,3,5,8,3,1,4,5,9,4,3,7,0,\dots$ 로 이어지는데, $F_{10^{18}}$ 의 끝자리를 구하려고 $10^{18}$ 번 더할 수는 없다. 끝자리는 $60$ 항마다 되풀이되므로 첨자를 $60$ 으로 나눈 나머지 $40$ 으로 줄이면 $F_{40}=102334155$ 에서 끝자리 $5$ 가 나온다.

# 직관

Fibonacci 수를 $7$ 로 나눈 나머지를 적는다.

$$
0,1,1,2,3,5,1,6,\ 0,6,6,5,4,2,6,1,\ 0,1,1,\dots
$$

다음 항은 앞 두 항의 나머지만으로 정해지므로, 이웃한 두 나머지 $(0,1)$ 이 다시 나오면 그 뒤가 처음부터 되풀이된다. 법 $7$ 에서는 $16$ 번째에 $(0,1)$ 이 돌아온다.

$8$ 번째에 처음 $0$ 이 나오고 그다음 항은 $6\equiv -1$ 이다. 그 뒤는 $(0,-1)$ 에서 출발하므로 처음 여덟 항에 $-1$ 을 곱한 것이 된다. $-1$ 을 두 번 곱하면 $1$ 이라서 주기는 $8\cdot 2=16$ 이다.

# 정의

$n\ge 2$ 에 대해 다음을 만족하는 가장 작은 $k\gt 0$ 을 $n$ 의 **Pisano 주기** $\pi(n)$ 이라 한다.

$$
F_k\equiv 0,\qquad F_{k+1}\equiv 1\pmod n
$$

이웃한 두 나머지의 쌍은 $n^2$ 가지뿐이고, 쌍 $(F_k,F_{k+1})$ 에서 앞의 쌍 $(F_{k-1},F_k)=(F_{k+1}-F_k,F_k)$ 이 정해지므로 쌍의 수열은 처음부터 순환한다. 따라서 $\pi(n)$ 은 존재한다. 직관 절에서 $\pi(7)=16$ 이고, 끝자리는 $\pi(10)=60$ 이다.

$F_k\equiv 0\pmod n$ 인 가장 작은 $k\gt 0$ 을 $n$ 의 **rank of apparition** $\alpha(n)$ 이라 한다. $\alpha(7)=8$ 이다.

# 성질

## 첫 영점과 주기

$c=F_{\alpha(n)+1}$ 이라 하면 $F_{\alpha(n)+k}\equiv cF_k\pmod n$ 이다. 그래서 $\pi(n)=\alpha(n)\cdot\mathrm{ord}\_n(c)$ 이고, 여기서 $\mathrm{ord}\_n(c)$ 는 $c^j\equiv 1$ 인 가장 작은 $j$ 다.

$\pi(n)/\alpha(n)$ 은 $1$, $2$, $4$ 가운데 하나다. Fibonacci 수의 Cassini 항등식 $F_{k-1}F_{k+1}-F_k^2=(-1)^k$ 에 $k=\alpha(n)$ 을 넣으면 $F_{k-1}\equiv F_{k+1}$ 이므로 $c^2\equiv\pm 1$ 이 되기 때문이다. $\pi(11)/\alpha(11)=10/10$, $\pi(7)/\alpha(7)=16/8$, $\pi(13)/\alpha(13)=28/7$ 이 세 경우다.

## 소수 법

$p\ne 2,5$ 가 소수이면 다음이 성립한다.

$$
\pi(p)\mid p-1\quad\Bigl(\bigl(\tfrac 5p\bigr)=1\Bigr),\qquad \pi(p)\mid 2(p+1)\quad\Bigl(\bigl(\tfrac 5p\bigr)=-1\Bigr)
$$

$(5/p)$ 는 Legendre 기호(Legendre symbol)다. 또 $\pi(2)=3$, $\pi(5)=20$ 이다.

증명의 요지. [Lucas 수열](lucas-sequences.md)의 소수 법 성질과 같은 계산이다. $5$ 가 법 $p$ 의 제곱잉여이면 황금비 $\varphi$ 와 $\psi$ 가 $\mathbb F_p$ 에 있어 $\varphi^{p-1}=\psi^{p-1}=1$ 이다. 제곱잉여가 아니면 $\mathbb F_{p^2}$ 에서 $\varphi^{p+1}=\varphi\psi=-1$ 이므로 $\varphi^{2(p+1)}=\psi^{2(p+1)}=1$ 이다. $F_k=(\varphi^k-\psi^k)/(\varphi-\psi)$ 이므로 주기가 각각 $p-1$ 과 $2(p+1)$ 을 나눈다.

$p=11$ 은 첫째 경우로 $\pi(11)=10$, $p=7$ 은 둘째 경우로 $\pi(7)=16$ 이다.

## 합성수 법

$m,n$ 이 서로소이면 $\pi(mn)=\mathrm{lcm}(\pi(m),\pi(n))$ 이다. [중국인의 나머지 정리](chinese-remainder-theorem.md)로 두 법의 나머지가 동시에 $(0,1)$ 로 돌아오는 첫 첨자를 찾는 것이기 때문이다. $\pi(10)=\mathrm{lcm}(3,20)=60$ 이다.

소수 거듭제곱에서는 $\pi(p^2)\ne\pi(p)$ 이면 $\pi(p^k)=p^{k-1}\pi(p)$ 다. $\pi(9)=3\cdot 8=24$, $\pi(25)=5\cdot 20=100$ 이다. Wall 은 $\pi(p^2)=\pi(p)$ 인 소수 $p$ 가 있는지 물었다.[^1] 그런 소수를 Wall–Sun–Sun 소수(Wall–Sun–Sun prime)라 한다.

모든 $n$ 에서 $\pi(n)\le 6n$ 이고, 등호는 $n=2\cdot 5^k$ ($k\ge 1$) 일 때만 성립한다. $\pi(10)=60$, $\pi(50)=300$ 이 그 예다.

# 활용

- 큰 첨자의 Fibonacci 수의 나머지는 첨자를 $\pi(n)$ 으로 나눈 나머지로 줄여 계산한다. 개요의 끝자리 계산이 $n=10$ 인 경우다.
- 소수 $p\ne 2,5$ 는 $p\mid F_{p-(5/p)}$ 를 만족한다. 이 합동을 만족하는 합성수 $323=17\cdot 19$ 는 $17$ 과 $19$ 가 모두 $F_{18}$ 을 나누고 $18\mid 324$ 이므로 $F_{324}$ 를 나누는 합성수이고, [Baillie–PSW 판정](baillie-psw-test.md)(Baillie–Pomerance–Selfridge–Wagstaff)의 Lucas 판정 단계가 다루는 Lucas 유사소수다.

[^1]: D. D. Wall, "Fibonacci series modulo m", *American Mathematical Monthly* **67** (1960), 525–532.

# 연관 문서

## 선수지식

- [Fibonacci 수](fibonacci-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory
