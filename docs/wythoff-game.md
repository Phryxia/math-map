# Wythoff 놀이

# 개요

**Wythoff 놀이(Wythoff's game)** 는 돌 두 무더기에서 번갈아 돌을 가져가고, 마지막 돌을 가져가는 사람이 이기는 놀이다. 한 번에 한 무더기에서 원하는 만큼 가져가거나, 두 무더기에서 같은 수만큼 가져간다. 무더기가 $3$ 개와 $5$ 개일 때 먼저 두는 사람은 어떻게 두어도 진다.

지는 배치를 작은 것부터 찾아 나가면 $(1,2),(3,5),(4,7),(6,10)$ 이 나온다. 이 배치는 황금비 $\varphi$ 의 배수를 내린 두 정수열로 한 번에 적히고, 그래서 아무리 큰 배치에서도 이기는 수를 바로 계산한다.

# 직관

배치 $(a,b)$ 에서 두는 사람이 지는 배치를 찾는다. $(0,0)$ 에서는 둘 수가 없으니 진다. $(0,k)$, $(k,0)$, $(k,k)$ 에서는 한 번에 $(0,0)$ 으로 갈 수 있으니 이긴다.

$1$ 이 들어 있는 배치 가운데 $(1,2)$ 에서 갈 수 있는 곳은 $(0,2),(1,1),(1,0),(0,1)$ 이고 모두 $(0,0)$ 으로 한 번에 간다. 그래서 $(1,2)$ 는 지는 배치다. $1$ 과 $2$ 를 쓴 다른 배치는 한 무더기만 줄여 $(1,2)$ 로 갈 수 있으니 이긴다.

아직 쓰지 않은 가장 작은 수는 $3$ 이다. 두 수의 차가 $0$ 과 $1$ 인 배치는 이미 두 무더기를 같이 줄여 $(0,0)$ 이나 $(1,2)$ 로 갈 수 있으므로, $3$ 의 짝은 차가 $2$ 인 $5$ 다. 같은 방법으로 다음은 $4$ 와 차 $3$ 인 $(4,7)$, 그다음은 $6$ 과 차 $4$ 인 $(6,10)$ 이다. 작은 수 $1,3,4,6$ 과 큰 수 $2,5,7,10$ 이 겹치지 않고 양의 정수를 차례로 채운다.

# 정의

Wythoff 놀이의 배치는 음이 아닌 정수의 순서쌍 $(a,b)$ 이고, 한 수는 다음 셋 가운데 하나다. $k\ge 1$ 이다.

$$
(a,b)\to(a-k,b),\qquad (a,b)\to(a,b-k),\qquad (a,b)\to(a-k,b-k)
$$

둘 수 없는 사람이 지는 [Sprague–Grundy 정리](sprague-grundy-theorem.md)의 공평 게임이다. 두는 사람이 지는 배치를 **P 배치(P-position)**, 이기는 배치를 N 배치(N-position)라 한다. P 배치는 Grundy 값이 $0$ 인 배치다.

직관 절의 $(0,0),(1,2),(3,5)$ 가 P 배치이고 $(1,1)$, $(2,5)$ 는 N 배치다.

# 성질

## P 배치의 점화식

$a_0=b_0=0$ 이고 $n\ge 1$ 에 대해 다음과 같이 두면 P 배치는 $(a_n,b_n)$ 과 $(b_n,a_n)$ 이 전부다.[^1]

$$
a_n=\mathrm{mex}\thinspace\lbrace a_i,b_i:0\le i\lt n\rbrace,\qquad b_n=a_n+n
$$

증명의 요지. 양의 정수는 $a_n$, $b_n$ 가운데 정확히 한 곳에 한 번 나오고, 차 $b_n-a_n=n$ 은 $n$ 마다 다르다.

- 한 무더기만 줄이면 다른 무더기의 수가 그대로이므로 다른 P 배치로 가지 않는다. 두 무더기를 같이 줄이면 차가 그대로이므로 역시 다른 P 배치로 가지 않는다.
- P 배치가 아닌 $(a,b)$, $a\le b$ 에서 $a=a_n$ 이면 $b\gt b_n$ 일 때 $(a_n,b_n)$ 으로, $b\lt b_n$ 일 때 차 $b-a$ 가 $n$ 보다 작으므로 같이 줄여 차가 $b-a$ 인 P 배치로 간다. $a=b_m$ 이면 $b$ 를 $a_m$ 으로 줄인다.

## 황금비 공식

P 배치의 두 좌표는 황금비 $\varphi=(1+\sqrt5)/2$ 의 [Beatty 수열](beatty-sequences.md)이다.[^1]

$$
a_n=\lfloor n\varphi\rfloor,\qquad b_n=\lfloor n\varphi^2\rfloor
$$

증명의 요지. $\varphi^2=\varphi+1$ 이므로 $\lfloor n\varphi^2\rfloor=\lfloor n\varphi\rfloor+n$ 이고 차가 $n$ 이다. $1/\varphi+1/\varphi^2=1$ 이므로 Rayleigh 정리로 두 수열이 양의 정수를 겹치지 않게 나눈다. 앞 절의 점화식은 이 두 조건과 $a_n$ 의 증가로 수열을 하나로 정하므로 두 수열이 같다.

$\varphi$ 는 두 조건에서 정해진다. $a_n=\lfloor nr\rfloor$, $b_n=\lfloor n(r+1)\rfloor$ 이 양의 정수를 나누려면 $1/r+1/(r+1)=1$ 이어야 하고, 이것은 $r^2=r+1$ 이다.

## Zeckendorf 표현

양의 정수를 겹치지 않는 [Fibonacci 수](fibonacci-numbers.md)의 합으로 쓴 Zeckendorf 표현(Zeckendorf representation)을 $1,2,3,5,8,\dots$ 의 자리로 적는다. $n$ 이 $a$ 수열에 드는 것은 표현의 끝에 $0$ 이 짝수 개 붙은 것과 동치다. $3=100$, $4=101$, $6=1001$ 은 $a$ 수열에, $2=10$, $5=1000$, $7=1010$ 은 $b$ 수열에 든다.[^2]

# 활용

- 체스판의 퀸을 왼쪽, 아래, 왼쪽 아래 대각선으로만 옮겨 구석에 먼저 넣는 사람이 이기는 놀이는 퀸의 좌표를 두 무더기로 보면 Wythoff 놀이다. 퀸을 $(\lfloor n\varphi\rfloor,\lfloor n\varphi^2\rfloor)$ 칸에 두면 이긴다.
- 이기는 수를 찾으려면 작은 무더기 $a$ 가 어느 수열의 몇 번째 항인지를 Zeckendorf 표현이나 $\lfloor n\varphi\rfloor$ 의 계산으로 정하고, 점화식의 증명대로 옮길 P 배치를 고른다. 무더기 크기의 자릿수에 대한 다항 시간에 끝난다.

[^1]: W. A. Wythoff, "A modification of the game of nim", *Nieuw Archief voor Wiskunde* (2) **7** (1907), 199–202.
[^2]: R. Silber, "A Fibonacci property of Wythoff pairs", *The Fibonacci Quarterly* **14** (1976), 380–384.

# 연관 문서

## 선수지식

- [Sprague–Grundy 정리](sprague-grundy-theorem.md)
- [Beatty 수열](beatty-sequences.md)

## 더 알아보기

- [일반화된 Wythoff 놀이](generalized-wythoff-game.md)

#computation #combinatorics #number_theory
