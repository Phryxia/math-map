# 일반화된 Wythoff 놀이

# 개요

**일반화된 Wythoff 놀이(generalized Wythoff game)** 는 [Wythoff 놀이](wythoff-game.md)에서 두 무더기를 함께 줄이는 수를, 두 무더기에서 가져가는 양의 차가 $t$ 보다 작기만 하면 되도록 넓힌 놀이다. $t=1$ 이 원래 Wythoff 놀이이고, $t=2$ 이면 두 무더기에서 $3$ 개와 $2$ 개처럼 하나 차이로 가져가는 수가 더해진다.

수가 늘면 두는 사람이 지는 배치가 바뀐다. 그 배치는 여전히 두 Beatty 수열로 적히고, 황금비 자리에 $t$ 로 정해지는 다른 이차 무리수가 온다.

# 직관

$t=2$ 에서 두는 사람이 지는 배치를 손으로 찾는다. $(0,0)$ 은 둘 수 없으니 지는 배치다. $(0,y)$ 와 $(x,x)$, $(x,x+1)$ 은 한 수로 $(0,0)$ 에 가므로 이기는 배치다.

$(1,2)$ 는 $(1,1)$ 이나 $(0,1)$ 을 거치지 않고 두 무더기에서 $1$ 개와 $2$ 개를 가져가 $(0,0)$ 으로 간다. 차가 $1$ 이라 허용된다. $(1,3)$ 에서는 $(0,0)$ 으로 가려면 $1$ 개와 $3$ 개를 가져가야 하고 차가 $2$ 라 허용되지 않는다. 다른 수는 모두 이기는 배치로 가므로 $(1,3)$ 이 다음 지는 배치다.

같은 방법으로 이어 가면 지는 배치는 다음과 같다. 작은 쪽은 앞에 나오지 않은 가장 작은 수이고, 두 수의 차는 $0, 2, 4, 6, 8, \dots$ 이다.

$$
(0,0),\ (1,3),\ (2,6),\ (4,10),\ (5,13),\ (7,17),\ (8,20)
$$

작은 쪽 $1,2,4,5,7,8$ 은 $\lfloor n\sqrt2\rfloor$ 이고, 큰 쪽 $3,6,10,13,17,20$ 은 $\lfloor n(2+\sqrt2)\rfloor$ 다. $t=1$ 에서 황금비가 맡던 자리를 $\sqrt2$ 가 맡는다.

# 정의

양의 정수 $t$ 를 고정한다. 배치는 음이 아닌 정수의 순서쌍 $(x,y)$ 이고, 한 수는 다음 셋 가운데 하나다. $k,l\ge 1$ 이다.

$$
(x,y)\to(x-k,y),\qquad(x,y)\to(x,y-k),\qquad(x,y)\to(x-k,y-l)\quad(\vert k-l\vert\lt t)
$$

이것을 **t-Wythoff 놀이** 라 한다. Fraenkel 은 매개변수를 $a$ 로 적어 a-Wythoff 놀이라 불렀다.[^1] 둘 수 없는 사람이 지고, P 배치와 N 배치는 Wythoff 놀이 문서의 정의를 쓴다.

직관 절의 $(1,3)$ 은 $t=2$ 의 P 배치다. $t=1$ 에서는 $(1,3)$ 의 한 무더기를 $2$ 로 줄여 P 배치 $(1,2)$ 로 가므로 N 배치다.

# 성질

## P 배치의 점화식

$a\_0=b\_0=0$ 이고 $n\ge 1$ 에 대해 다음과 같이 두면, $t$-Wythoff 놀이의 P 배치는 $(a\_n,b\_n)$ 과 $(b\_n,a\_n)$ 이 전부다.[^1]

$$
a\_n=\mathrm{mex}\thinspace\lbrace a\_i,b\_i:0\le i\lt n\rbrace,\qquad b\_n=a\_n+tn
$$

증명의 요지. 두 무더기를 함께 줄이는 수는 두 수의 차를 $t$ 보다 작게 바꾼다. P 배치끼리는 차가 $t$ 의 배수만큼 다르므로 서로 한 수로 가지 않는다.

P 배치가 아닌 $(x,y)$, $x\le y$ 에서 $x=b\_m$ 이면 $y$ 를 $a\_m$ 으로 줄인다. $x=a\_n$ 이고 $y\gt b\_n$ 이면 $y$ 를 $b\_n$ 으로 줄인다. $y\lt b\_n$ 이면 차 $d=y-x$ 를 $d=tm+r$, $0\le r\lt t$ 로 나누고, 두 무더기에서 $a\_n-a\_m$ 개와 $y-b\_m$ 개를 가져가 $(a\_m,b\_m)$ 으로 간다. 가져가는 양의 차가 $r$ 이라 허용된다.

## Beatty 수열 공식

다음 $\alpha$ 에 대해 $a\_n=\lfloor n\alpha\rfloor$, $b\_n=\lfloor n(\alpha+t)\rfloor$ 이다.[^1]

$$
\alpha=\frac{2-t+\sqrt{t^2+4}}{2}
$$

증명의 요지. $\lfloor n(\alpha+t)\rfloor=\lfloor n\alpha\rfloor+tn$ 이므로 차가 $tn$ 이다. $\alpha$ 는 $\alpha^2+(t-2)\alpha-t=0$ 의 양의 근이고, 이 식은 $1/\alpha+1/(\alpha+t)=1$ 과 동치다. [Beatty 수열](beatty-sequences.md) 문서의 Rayleigh 정리로 두 수열이 양의 정수를 겹치지 않게 나누므로, 점화식이 정하는 수열과 같다.

$t=1$ 이면 $\alpha=(1+\sqrt5)/2$, $t=2$ 이면 $\alpha=\sqrt2$, $t=3$ 이면 $\alpha=(\sqrt{13}-1)/2$ 다.

## Grundy 값의 가법적 주기

[Sprague–Grundy 정리](sprague-grundy-theorem.md)의 Grundy 값은 P 배치만큼 간단히 적히지 않는다. $t=1$ 에서 한 무더기를 $1$ 로 고정하고 다른 무더기를 $0$ 부터 $11$ 까지 늘린 행의 Grundy 값은 다음과 같다.

$$
1,\ 2,\ 0,\ 4,\ 5,\ 3,\ 7,\ 8,\ 6,\ 10,\ 11,\ 9
$$

세 칸마다 같은 꼴이 $3$ 씩 커지며 되풀이된다. 한 무더기를 고정한 행마다, 충분히 먼 곳부터 일정한 주기 $p$ 와 증가량 $p$ 로 값이 되풀이된다는 것이 증명되어 있다.[^2] 이것을 가법적 주기(additive periodicity)라 한다.

# 활용

- 무리수 분할의 놀이 해석. Rayleigh 정리가 주는 양의 정수의 분할 가운데 차가 일정하게 늘어나는 것이 놀이의 P 배치로 나타난다. $t$ 마다 두 무리수 $\alpha$ 와 $\alpha+t$ 의 Beatty 수열이 그런 분할이다.
- 놀이의 합. 여러 판을 동시에 두는 합 놀이에서는 Grundy 값의 배타적 논리합(exclusive or, XOR)이 승패를 정하므로, 가법적 주기 정리가 행마다 Grundy 값을 유한한 표로 계산하게 한다.

[^1]: A. S. Fraenkel, "How to beat your Wythoff games' opponent on three fronts", *American Mathematical Monthly* 89 (1982), 353–361.
[^2]: A. Dress, A. Flammenkamp, N. Pink, "Additive periodicity of the Sprague–Grundy function of certain Nim games", *Advances in Applied Mathematics* 22 (1999), 249–270.

# 연관 문서

## 선수지식

- [Wythoff 놀이](wythoff-game.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #combinatorics #number_theory
