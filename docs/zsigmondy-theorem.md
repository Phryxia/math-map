# Zsigmondy 정리

# 개요

**Zsigmondy 정리(Zsigmondy's theorem)** 는 $a^n-b^n$ 이 몇 가지 예외를 빼면 앞선 지수의 $a^k-b^k$ 에는 나타나지 않는 새 소인수를 반드시 갖는다는 정리다. $2^n-1$ 을 차례로 소인수분해하면 $3,7,3\cdot 5,31,3^2\cdot 7,127,3\cdot 5\cdot 17$ 이고, $n=4$ 에서 $5$, $n=8$ 에서 $17$ 처럼 지수마다 처음 나오는 소수가 있지만 $n=6$ 의 $63$ 에는 없다. 정리는 $a^n-b^n$ 에서 원분다항식(cyclotomic polynomial) 인수를 떼어 내 그 인수가 앞선 소인수만으로는 이루어질 수 없을 만큼 크다는 것을 보인다.

# 직관

$2^n-1$ 의 소인수 $p$ 가 $n$ 에서 처음 나온다는 것은 $2^k\equiv 1\pmod p$ 인 가장 작은 $k$ 가 $n$ 이라는 뜻이다. 곧 [원시근](primitive-roots.md)에서 정의한 위수로 $\mathrm{ord}\_p(2)=n$ 이다. $n=8$ 에서 $255=3\cdot 5\cdot 17$ 이고, $2^8=256\equiv 1\pmod{17}$ 이지만 $2^4=16\not\equiv 1\pmod{17}$ 이므로 $17$ 에서 $2$ 의 위수는 $8$ 이다.

$n=6$ 에서 $63=3^2\cdot 7$ 이고 $3\mid 2^2-1$, $7\mid 2^3-1$ 이므로 새 소인수가 없다. $2^6-1=(2^3-1)(2^3+1)=7\cdot 9$ 에서 $9=2^3+1$ 이 $3$ 의 거듭제곱으로만 이루어진 것이 원인이다.

# 정의

서로소인 정수 $a\gt b\ge 1$ 과 $n\ge 1$ 에 대해, 소수 $p$ 가 $a^n-b^n$ 을 나누고 $1\le k\lt n$ 인 어떤 $k$ 에 대해서도 $a^k-b^k$ 를 나누지 않으면 $p$ 를 $a^n-b^n$ 의 **원시 소인수(primitive prime divisor)** 라 한다. $b=1$ 이면 이는 $\mathrm{ord}\_p(a)=n$ 과 같다.

Zsigmondy 정리는 다음 진술이다. 다음 두 경우를 빼면 $a^n-b^n$ 은 원시 소인수를 갖는다.

- $n=2$ 이고 $a+b$ 가 $2$ 의 거듭제곱이다. 예: $3^2-1^2=8$.
- $n=6$, $a=2$, $b=1$ 이다.

$n=1$ 에서 $a-b=1$ 인 경우는 소인수가 없으므로 따로 뺀다. $b=1$ 인 경우는 Bang 이 1886 년에, 일반 경우는 Zsigmondy 가 1892 년에 증명했다.[^1]

# 성질

## 원분다항식 인수

$a^n-b^n=\prod_{d\mid n}\Phi_d(a,b)$ 로 쓴다. $\Phi_d(x,y)$ 는 $d$ 차 원분다항식을 동차화한 것이다. $2^6-1=\Phi_1\Phi_2\Phi_3\Phi_6=1\cdot 3\cdot 7\cdot 3$ 이다. 원시 소인수는 모두 $\Phi_n(a,b)$ 를 나눈다.

$p\mid\Phi_n(a,b)$ 이고 $p\nmid n$ 이면 $p$ 는 원시 소인수다. $p\mid n$ 이면 $p$ 는 $n$ 의 가장 큰 소인수이고, 예외인 경우를 빼면 $p^2\nmid\Phi_n(a,b)$ 이다. 따라서 원시 소인수가 없으면 $\Phi_n(a,b)$ 는 $1$ 이거나 $n$ 의 가장 큰 소인수 하나다.

증명의 요지. $\Phi_n(a,b)$ 는 $1$ 의 원시 $n$ 제곱근 $\zeta$ 전부에 대한 $a-\zeta b$ 의 곱이다. 각 인수의 절댓값을 아래에서 눌러 $\Phi_n(a,b)$ 가 $n$ 의 가장 큰 소인수보다 크다는 것을 보이면 원시 소인수가 있다. 이 비교가 실패하는 작은 경우를 직접 확인하면 위 두 예외가 남는다.

## 원시 소인수의 합동

$p$ 가 $a^n-1$ 의 원시 소인수이면 $p\equiv 1\pmod n$ 이다. [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)로 $a^{p-1}\equiv 1$ 이고, 위수 $n$ 이 $p-1$ 을 나누기 때문이다. 그러므로 $n\ge 2$ 마다 $p\equiv 1\pmod n$ 인 소수가 있다. 이를 $n$ 마다 $2^{nk}-1$ 에 적용하면 $p\equiv 1\pmod n$ 인 소수가 무한히 많다는 등차수열 속 소수에 대한 Dirichlet 정리(Dirichlet's theorem on arithmetic progressions)의 특수한 경우가 나온다.

# 활용

- 유한 고전군의 위수 $q^{n(n-1)/2}\prod_{i=1}^{n}(q^i-1)$ 꼴에는 $q^i-1$ 의 원시 소인수가 나타난다. Artin 은 이 원시 소인수를 비교해 서로 다른 족의 유한 단순군이 같은 위수를 갖는 경우를 결정했다.[^2]
- 소수 $p$ 에 대해 $2^p-1$ 의 소인수는 모두 원시 소인수이므로 $2kp+1$ 꼴이다. $2^{11}-1=23\cdot 89$ 에서 $23=2\cdot 11+1$, $89=8\cdot 11+1$ 이다. [완전수](perfect-numbers.md)를 만드는 Mersenne 소수를 찾을 때 시험할 약수를 이 꼴로 줄인다.

[^1]: K. Zsigmondy, "Zur Theorie der Potenzreste", *Monatshefte für Mathematik und Physik* **3** (1892), 265–284. A. S. Bang, "Taltheoretiske Undersøgelser", *Tidsskrift for Mathematik* (5) **4** (1886), 70–80, 130–137.
[^2]: E. Artin, "The orders of the linear groups", *Communications on Pure and Applied Mathematics* **8** (1955), 355–365.

# 연관 문서

## 선수지식

- [원시근](primitive-roots.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory
