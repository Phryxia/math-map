# Beatty 수열

# 개요

**Beatty 수열(Beatty sequence)** 은 양의 실수 $r$ 의 배수 $r,2r,3r,\dots$ 를 차례로 내림해 얻는 정수열이다. $1.618$ 씩 걸으며 내리면 $1,3,4,6,8,9,11,\dots$ 이 나오고, $2.618$ 씩 걸으며 내리면 $2,5,7,10,13,\dots$ 이 나온다. 두 수열은 겹치지 않고 모든 양의 정수를 빠짐없이 덮는다.

양의 정수 전체를 두 수열로 나누는 방법을 찾는 문제는 이렇게 실수 하나를 고르는 문제가 된다. Rayleigh 정리가 그 조건을 $1/r+1/s=1$ 인 두 무리수로 정한다.

# 직관

$r=1.618\cdots$ 와 $s=2.618\cdots$ 의 두 수열에서 $1$ 부터 $N$ 까지 들어 있는 항의 개수를 센다. $\lfloor nr\rfloor\le N$ 은 $nr\lt N+1$ 과 같으므로 첫 수열의 항은 $N+1$ 을 $r$ 로 나눈 몫만큼, 곧 $\lfloor (N+1)/r\rfloor$ 개다. $N=10$ 이면 $\lfloor 11/1.618\rfloor=6$ 이고, 실제로 $1,3,4,6,8,9$ 의 여섯 개다.

같은 방법으로 둘째 수열의 항은 $\lfloor 11/2.618\rfloor=4$ 개이고 $2,5,7,10$ 이다. 합이 $10$ 이므로 두 수열의 항이 $1$ 부터 $10$ 까지를 정확히 한 번씩 채운다. $1/1.618+1/2.618=1$ 이라서 $11/r$ 과 $11/s$ 의 합이 $11$ 이 되고, 둘 다 정수가 아니므로 내린 값의 합이 $10$ 이 된다.

# 정의

실수 $r\gt 0$ 의 **Beatty 수열** 은 다음 수열이다. $\lfloor x\rfloor$ 는 $x$ 이하인 가장 큰 정수다.

$$
\mathcal B_r=\bigl(\lfloor nr\rfloor\bigr)\_{n\ge 1}
$$

직관 절의 두 수열은 황금비 $\varphi=(1+\sqrt5)/2$ 와 $\varphi^2=\varphi+1$ 의 Beatty 수열이다. $1/\varphi+1/\varphi^2=(\varphi+1)/\varphi^2=1$ 이다.

$r\gt 1$ 이면 이웃한 두 항의 차 $\lfloor (n+1)r\rfloor-\lfloor nr\rfloor$ 가 $1$ 이상이므로 $\mathcal B_r$ 은 순증가하고 항이 서로 다르다.

# 성질

## Rayleigh 정리

**Rayleigh 정리(Rayleigh's theorem, Beatty 정리)** 는 다음 진술이다.[^1] [무리수](irrational-numbers.md) $r,s\gt 1$ 이 $1/r+1/s=1$ 을 만족하면 $\mathcal B_r$ 과 $\mathcal B_s$ 는 양의 정수 전체를 서로 겹치지 않게 나눈다.

증명의 요지. 양의 정수 $N$ 이하인 $\mathcal B_r$ 의 항은 $\lfloor (N+1)/r\rfloor$ 개다. $r$ 이 무리수이므로 $nr=N+1$ 인 $n$ 이 없어 등호 경우가 생기지 않는다. 두 개수를 더하면 다음이 나온다.

$$
\left\lfloor\frac{N+1}{r}\right\rfloor+\left\lfloor\frac{N+1}{s}\right\rfloor=N
$$

$(N+1)/r$ 과 $(N+1)/s$ 는 정수가 아니고 합이 정수 $N+1$ 이므로 소수 부분의 합이 $1$ 이다. 그래서 내린 값의 합은 $N$ 이다. 이 개수가 $N-1$ 에서 $N$ 으로 갈 때 정확히 $1$ 늘어나므로 $N$ 은 두 수열 가운데 정확히 한 곳에 한 번 나타난다.

## 역

$\mathcal B_r$ 과 $\mathcal B_s$ 가 양의 정수 전체를 겹치지 않게 나누면 $r,s$ 는 무리수이고 $1/r+1/s=1$ 이다. $N$ 이하의 항의 비율이 $1/r$ 과 $1/s$ 로 다가가므로 비율의 합이 $1$ 이어야 한다. $r=p/q$ 가 유리수이면 $s=p/(p-q)$ 이고, $\lfloor qr\rfloor=\lfloor (p-q)s\rfloor=p$ 에서 두 수열이 겹친다.

## 셋 이상으로 나누기

$k\ge 3$ 이면 양의 정수 전체를 $\mathcal B_{r_1},\dots,\mathcal B_{r_k}$ 로 겹치지 않게 나누는 실수 $r_1,\dots,r_k$ 는 없다. Uspensky 가 1927 년에 증명했다.[^2]

## 차의 열

$r\gt 1$ 이 무리수이면 차 $\lfloor (n+1)r\rfloor-\lfloor nr\rfloor$ 는 $\lfloor r\rfloor$ 과 $\lfloor r\rfloor+1$ 두 값만 갖는다. $\varphi$ 에서는 $1,3,4,6,8,9,11$ 의 차 $2,1,2,2,1,2$ 이다. 이 두 글자의 열을 **Sturm 단어(Sturmian word)** 라 한다. 큰 값이 나오는 $n$ 의 비율은 $r$ 의 소수 부분이고, [등분포](equidistribution.md)에서 $nr$ 의 소수 부분이 구간 $\lbrack 0,1)$ 에 고르게 퍼지는 데서 나온다.

# 활용

- 두 무더기의 돌에서 한 무더기의 돌을 원하는 만큼 가져가거나 두 무더기에서 같은 수만큼 가져가는 Wythoff 놀이(Wythoff's game)에서, 차례가 된 사람이 지는 배치는 $(\lfloor n\varphi\rfloor,\lfloor n\varphi^2\rfloor)$ 와 그 순서를 바꾼 것이다. 처음 다섯 쌍은 $(1,2)$, $(3,5)$, $(4,7)$, $(6,10)$, $(8,13)$ 이고, 두 좌표가 Rayleigh 정리로 양의 정수를 한 번씩 쓴다.[^3]
- 정수를 두 부류로 나누어야 하는 조합론 문제에서 $\mathcal B_r$ 과 $\mathcal B_s$ 를 그 분할의 후보로 쓴다. $r=\sqrt2$, $s=2+\sqrt2$ 이면 $1,2,4,5,7,8,9,\dots$ 와 $3,6,10,13,\dots$ 이다.
- 차의 열인 Sturm 단어는 기호 동역학(symbolic dynamics)에서 원 위의 회전 $x\mapsto x+r$ 을 두 구간으로 나눠 기록한 열이다.

[^1]: J. W. S. Rayleigh, *The Theory of Sound*, 2nd ed., Vol. 1, Macmillan, 1894. S. Beatty, Problem 3173, *American Mathematical Monthly* **33** (1926), 159, 풀이 **34** (1927), 159.
[^2]: J. V. Uspensky, "On a problem arising out of the theory of a certain game", *American Mathematical Monthly* **34** (1927), 516–521.
[^3]: W. A. Wythoff, "A modification of the game of nim", *Nieuw Archief voor Wiskunde* (2) **7** (1907), 199–202.

# 연관 문서

## 선수지식

- [무리수](irrational-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics
