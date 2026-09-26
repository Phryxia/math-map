# Cohen–Macaulay 환

# 개요

Cohen–Macaulay 환은 깊이와 [Krull 차원](krull-dimension.md)이 같은 Noether 국소환이다. [정칙 국소환](regular-local-rings.md)의 조건을 약화한 것이고, 극대 아이디얼의 원소로 차례차례 나누어 차원을 하나씩 떨어뜨리는 계산이 차원 횟수만큼 이어진다는 뜻이다.

# 직관

정칙 국소환 $R$ 에서는 극대 아이디얼 $\mathfrak m$ 이 $d=\dim R$ 개의 원소로 생성되고, 그 원소로 하나씩 나누면 차원이 매번 $1$ 씩 떨어져 $d$ 번 만에 $0$ 이 된다. 일반 Noether 국소환에서 같은 계산을 해 본다.

$R=k[[x,y]]/(xy)$ 는 차원 $1$ 이다. $x$ 로 나누려 하면 $xy=0$ 이고 $y\ne 0$ 이라 $x$ 가 영인자여서 나눌 수 없고, $y$ 도 같다. $x+y$ 는 영인자가 아니고, 이것으로 나누면 $k[[x]]/(x^2)$ 이라 차원이 $0$ 이다. 한 번 나누어 차원 $1$ 을 다 썼다.

$R=k[[x,y]]/(x^2,xy)$ 도 차원이 $1$ 이다. 그런데 $\mathfrak m=(x,y)$ 안에 영인자가 아닌 원소가 하나도 없다. $x\cdot x=0$ 이고 $x\cdot y=0$ 이므로 $\mathfrak m$ 의 모든 원소가 $x$ 를 죽인다. 나눌 수 있는 원소가 없으니 차원 $1$ 을 한 번도 쓰지 못한다.

둘째 환에서 나눌 것이 없는 이유는 $x$ 가 생성하는 조각이 $y$ 축 위의 한 점에 박혀 있고 차원에 기여하지 않기 때문이다. 나눌 수 있는 원소를 이어 놓은 열의 최대 길이를 깊이라 하면, 앞의 환은 깊이가 $1$ 로 차원과 같고 뒤의 환은 깊이가 $0$ 으로 차원보다 작다.

# 정의

$(R,\mathfrak m)$ 을 Noether 국소환, $M\ne 0$ 을 유한생성 $R$ 가군이라 하자.

## 정칙열

$x_1,\dots,x_n\in\mathfrak m$ 이 **$M$ 정칙열**이라는 것은 각 $i$ 에서 $x_i$ 가 $M/(x_1,\dots,x_{i-1})M$ 의 영인자가 아니고 $M/(x_1,\dots,x_n)M\ne 0$ 인 것이다.

## 깊이

**깊이** $\mathrm{depth}\thinspace M$ 은 $\mathfrak m$ 안의 $M$ 정칙열의 최대 길이다. 모든 극대 정칙열의 길이가 같으므로 이 값이 잘 정의된다.

## Cohen–Macaulay 환

**Cohen–Macaulay 환**은 $\mathrm{depth}\thinspace R=\dim R$ 인 Noether 국소환이다. 국소가 아닌 Noether 환은 모든 극대 아이디얼에서의 국소화가 이 조건을 만족할 때 Cohen–Macaulay 라 한다.

$M$ 에 대해서도 $\mathrm{depth}\thinspace M=\dim M$ 이면 **Cohen–Macaulay 가군**이라 한다.

# 성질

## 깊이와 차원의 부등식

$M$ 의 모든 딸림 소아이디얼 $\mathfrak p$ 에 대해 $\mathrm{depth}\thinspace M\le\dim R/\mathfrak p$ 다[^1]. 따라서 언제나 $\mathrm{depth}\thinspace M\le\dim M$ 이고, Cohen–Macaulay 조건은 이 부등식이 등식인 경우다.

증명의 요지. $\mathrm{depth}\thinspace M$ 에 대한 귀납이다. 깊이가 $0$ 이면 $\mathfrak m$ 이 딸림 소아이디얼이라 부등식이 자명하다. 정칙원 $x$ 로 나누면 깊이가 $1$ 줄고 $\dim R/\mathfrak p$ 도 최소 $1$ 준다.

## 정칙 국소환

정칙 국소환은 Cohen–Macaulay 다. $\mathfrak m$ 을 생성하는 $d$ 개의 원소가 그대로 $R$ 정칙열이고, 그 길이가 $d=\dim R$ 이다.

## 박힌 성분의 부재

Cohen–Macaulay 환에서 딸림 소아이디얼은 전부 극소이고 모두 같은 차원 $\dim R$ 을 갖는다. 곧 박힌 성분이 없고 모든 기약 성분의 차원이 같다.

이 성질이 위 직관의 두 예를 가른다. $k[[x,y]]/(x^2,xy)$ 에서는 $\mathfrak m$ 자신이 딸림 소아이디얼이라 차원 $0$ 인 성분이 박혀 있다.

## 사슬 조건

Cohen–Macaulay 국소환은 catenary 다. 소아이디얼 $\mathfrak p\subset\mathfrak q$ 를 잇는 극대 사슬의 길이가 모두 같고, 그 값이 $\dim R/\mathfrak p-\dim R/\mathfrak q$ 다.

## Auslander–Buchsbaum 공식

$M$ 의 사영차원이 유한하면 다음이 성립한다[^1].

$$\mathrm{pd}\thinspace M+\mathrm{depth}\thinspace M=\mathrm{depth}\thinspace R$$

정칙 국소환에서는 모든 유한생성 가군의 사영차원이 유한하므로 이 공식이 사영차원을 깊이 계산으로 바꾼다.

## 자유성 판정

$A\subseteq R$ 가 Noether 정규화, 곧 $A$ 가 정칙 국소환이고 $R$ 가 $A$ 위에서 유한생성 가군이라 하자. $R$ 가 Cohen–Macaulay 인 것과 $R$ 가 $A$ 위의 자유가군인 것이 같다[^1]. 이 판정이 Cohen–Macaulay 성질을 차원과 깊이 계산 없이 확인하는 수단을 준다.

# 활용

- **교차 이론.** Cohen–Macaulay 스킴 위에서 초곡면을 자를 때마다 차원이 정확히 $1$ 씩 떨어지므로, 정칙열로 정의한 완전교차의 차원 계산이 예상대로 나온다.
- **불변량 이론.** 선형 환원군이 정칙환에 작용할 때 불변량환이 Cohen–Macaulay 다[^2].
- **조합론.** 단체 복합체의 Stanley–Reisner 환이 Cohen–Macaulay 인 조건이 복합체의 위상으로 읽히고, 이것이 단체 다포체의 면 개수 상한을 준다[^3].
- **정규성 판정.** Noether 환이 정규인 것은 Serre 조건 $R_1$ 과 $S_2$ 를 함께 만족하는 것이고, Cohen–Macaulay 환은 $S_2$ 를 자동으로 만족한다.

[^1]: W. Bruns and J. Herzog, *Cohen–Macaulay Rings*, revised edition, Cambridge University Press (1998), 1장과 2장.

[^2]: M. Hochster and J. L. Roberts, "Rings of Invariants of Reductive Groups Acting on Regular Rings are Cohen–Macaulay", Advances in Mathematics **13** (1974), 115–175.

[^3]: R. P. Stanley, "The Upper Bound Conjecture and Cohen–Macaulay Rings", Studies in Applied Mathematics **54** (1975), 135–142.

# 연관 문서

## 선수지식

- [정칙 국소환](regular-local-rings.md)

## 더 알아보기

- [Gorenstein 환](gorenstein-rings.md)

#ring_theory #algebra #combinatorics
