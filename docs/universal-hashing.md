# 범용 해시족

# 개요

**범용 해시족(universal hash family)** 은 키를 $m$ 개의 칸에 나눠 넣는 함수들의 모임으로서, 그 가운데 하나를 무작위로 고르면 서로 다른 두 키가 같은 칸에 들어갈 확률이 $1/m$ 이하인 것이다. 칸이 $100$ 개이고 키를 $100$ 으로 나눈 나머지 칸에 넣으면, 키가 $0, 100, 200,\dots$ 처럼 $100$ 의 배수로만 들어올 때 모든 키가 한 칸에 몰려 키 하나를 찾는 데 키의 개수만큼 시간이 걸린다. 범용 해시족은 함수를 미리 정하지 않고 족에서 무작위로 골라, 어떤 키들이 들어와도 한 칸에 몰리는 키 수의 기댓값을 작게 만든다.

# 직관

[해시 테이블](hash-tables.md)은 키 $x$ 를 칸 $h(x)\in\lbrace 0,\dots,m-1\rbrace$ 에 넣고 같은 칸에 든 키들을 목록으로 잇는다. 키를 찾는 시간은 그 칸의 목록 길이다. $m=100$ 이고 $h(x)=x \bmod 100$ 이면, 키가 $0,100,200,\dots$ 처럼 100 의 배수로만 들어올 때 모든 키가 칸 $0$ 에 모이고 찾는 시간이 키 개수에 비례한다. 키 집합이 칸보다 크므로 어떤 $h$ 를 고정해도 [비둘기집 원리](pigeonhole-principle.md)로 이렇게 한 칸에 모이는 키들이 있다.

이 키들은 $h$ 를 보고 고른 것이어서 한 칸에 모였다. 그래서 키가 정해진 뒤 $h$ 를 무작위로 고른다. 키보다 큰 소수 $p$ 를 잡고 $a\in\lbrace 1,\dots,p-1\rbrace$ 과 $b\in\lbrace 0,\dots,p-1\rbrace$ 을 무작위로 골라 $h(x)=((ax+b)\bmod p)\bmod m$ 으로 둔다. 그러면 키 $0$ 과 $100$ 이 같은 칸에 갈 확률은 $1/m$ 이하이고, 다른 어떤 두 키를 넣어도 같은 한계가 나온다. 이런 함수들의 모임이 범용 해시족이다.

# 정의

## 범용성

$U$ 는 키 집합이고 $\mathcal H$ 는 $U\to\lbrace 0,\dots,m-1\rbrace$ 함수의 유한한 모임이다. $h$ 를 $\mathcal H$ 에서 균등하게 고르는 [유한 확률 공간](probability.md)에서, 서로 다른 모든 $x,y\in U$ 에 대해 다음이 성립하면 $\mathcal H$ 를 **범용(universal)** 이라 한다. Carter 와 Wegman 이 1979 년에 정의했다[^1].

$$
\Pr\_{h}\lbrack h(x)=h(y)\rbrack\le\frac{1}{m}
$$

예. $U=\lbrace 0,1,2\rbrace$, $m=2$ 에서 $f=(0,0,1)$, $g=(0,1,0)$ 으로 $f(0),f(1),f(2)$ 와 $g(0),g(1),g(2)$ 를 정하면 $\mathcal H=\lbrace f,g\rbrace$ 는 범용이다. $0$ 과 $1$ 은 $f$ 에서만, $0$ 과 $2$ 는 $g$ 에서만 충돌해 확률이 $1/2$ 이고, $1$ 과 $2$ 는 충돌하지 않는다. 직관 절의 $h(x)=x\bmod 100$ 하나만 든 족은 $0$ 과 $100$ 이 확률 $1$ 로 충돌하므로 범용이 아니다.

## 쌍마다 독립

서로 다른 모든 $x,y\in U$ 와 모든 칸 $s,t$ 에 대해 다음이 성립하면 $\mathcal H$ 를 **쌍마다 독립(pairwise independent)** 이라 한다. Wegman 과 Carter 는 이것을 **강한 범용(strongly universal)** 이라 불렀다[^2].

$$
\Pr\_{h}\lbrack h(x)=s,\thinspace h(y)=t\rbrack=\frac{1}{m^2}
$$

예. $U=\lbrace 0,1\rbrace$, $m=2$ 에서 $a,b\in\lbrace 0,1\rbrace$ 로 $h\_{a,b}(x)=(ax+b)\bmod 2$ 네 개를 두면 $(h\_{a,b}(0),h\_{a,b}(1))=(b,a+b\bmod 2)$ 가 $(0,0),(0,1),(1,0),(1,1)$ 을 한 번씩 지나므로 각 쌍의 확률이 $1/4$ 이고 쌍마다 독립이다. 앞의 $\lbrace f,g\rbrace$ 는 $(f(1),f(2))=(0,1)$, $(g(1),g(2))=(1,0)$ 이라 $(0,0)$ 이 나오지 않으므로 쌍마다 독립이 아니다.

$s$ 와 $t$ 가 같은 경우를 더하면 충돌 확률이 정확히 $1/m$ 이므로 쌍마다 독립인 족은 범용이다.

# 성질

## Carter–Wegman 족

정리. $p$ 가 소수이고 $U\subseteq\lbrace 0,\dots,p-1\rbrace$ 이면 [정수의 합동](modular-arithmetic.md)의 일차식으로 만든 다음 족은 범용이다[^1].

$$
h\_{a,b}(x)=((ax+b)\bmod p)\bmod m,\qquad a\in\lbrace 1,\dots,p-1\rbrace,\thinspace b\in\lbrace 0,\dots,p-1\rbrace
$$

증명의 요지. $x\ne y$ 를 고정하고 $r=ax+b \bmod p$, $s=ay+b \bmod p$ 로 둔다. $r-s\equiv a(x-y)\pmod p$ 이고 $p$ 가 소수이므로 $r\ne s$ 다. $a=(r-s)(x-y)^{-1}$, $b=r-ax$ 로 거꾸로 풀리므로 $(a,b)$ 에서 $(r,s)$ 로 가는 사상은 $p(p-1)$ 개의 쌍과 $r\ne s$ 인 쌍 $p(p-1)$ 개 사이의 전단사다. 그래서 $(r,s)$ 는 서로 다른 쌍 위에서 균등하다. $r$ 을 고정하면 $s\ne r$ 이고 $s\equiv r\pmod m$ 인 $s$ 는 $(p-1)/m$ 개 이하이므로 충돌 확률은 $1/m$ 이하다.

$a$ 에 $0$ 도 허용하고 칸 수를 $m=p$ 로 두면 $h\_{a,b}(x)=ax+b \bmod p$ 는 쌍마다 독립이다. $(a,b)$ 에서 $(h\_{a,b}(x),h\_{a,b}(y))$ 로 가는 사상이 $(\mathbb Z/p\mathbb Z)^2$ 의 전단사다.

## 목록 길이의 기댓값

정리. $\mathcal H$ 가 범용이고 $S\subseteq U$ 가 키 $n$ 개의 집합이면, 모든 $x\in U$ 에 대해 $h(y)=h(x)$ 인 $y\in S\setminus\lbrace x\rbrace$ 의 개수의 기댓값은 $n/m$ 이하다.

증명의 요지. $y$ 마다 $h(y)=h(x)$ 일 때 $1$ 인 [확률변수](random-variables.md)를 두면 개수는 그 합이다. 기댓값의 선형성으로 기댓값은 확률 $\Pr\lbrack h(y)=h(x)\rbrack\le 1/m$ 을 $n$ 개 더한 값 이하다. 그래서 $m\ge n$ 이면 키 하나를 찾는 시간의 기댓값이 키 집합과 무관하게 상수다.

## 완전 해싱

**Fredman–Komlós–Szemerédi 정리(Fredman–Komlós–Szemerédi theorem).** 키 $n$ 개의 고정된 집합에 대해, 크기 $O(n)$ 이고 찾는 시간이 최악의 경우에도 상수인 표가 기댓값 $O(n)$ 시간에 만들어진다[^3].

증명의 요지. 크기 $m$ 인 표에 범용 해시 함수로 $n$ 개를 넣으면 충돌하는 쌍의 수의 기댓값은 $\binom n2/m$ 이다. $m=n^2$ 이면 이 값이 $1/2$ 보다 작으므로 충돌이 하나라도 있을 확률이 $1/2$ 보다 작다. 첫 단계는 $m=n$ 으로 넣고 칸 $i$ 에 든 키 수를 $n\_i$ 라 하면 $\sum\_i n\_i^2=n+2\cdot(\text{충돌 쌍의 수})$ 이므로 기댓값이 $2n$ 보다 작다. 둘째 단계에서 칸 $i$ 마다 크기 $n\_i^2$ 의 표를 충돌이 없을 때까지 새 함수로 다시 만든다.

# 활용

- 해시 테이블. 표를 만들 때 함수를 한 번 고른다. 키를 넣는 쪽이 고른 함수를 모르면 목록 길이의 기댓값 정리가 어떤 키 집합에도 성립한다. 찾기의 최악 시간까지 상수로 두는 방식이 [뻐꾸기 해싱](cuckoo-hashing.md)이다.
- [메시지 인증 코드](message-authentication-codes.md). 일회용 MAC(message authentication code) $am+b \bmod p$ 는 쌍마다 독립인 족이고, 위조 확률 $1/p$ 는 두 칸의 값이 독립이라는 데서 나온다[^2].
- [무작위성 추출기](randomness-extractors.md). 잔여 해시 보조정리(leftover hash lemma)는 최소 엔트로피(min-entropy)가 $k$ 인 분포에서 뽑은 $x$ 와 범용 해시 함수 $h$ 에 대해 $(h,h(x))$ 가 균등 분포에 가깝다는 정리다. [유사난수 생성기](pseudorandom-generators.md)를 일반 [일방향 함수](one-way-functions.md)에서 만드는 Håstad–Impagliazzo–Levin–Luby 구성이 이 보조정리를 쓴다[^4].
- 스트림 요약. [Count-Min 스케치](count-min-sketch.md)는 쌍마다 독립인 해시 함수 몇 개로 항목마다 계수기를 골라 빈도를 고정된 메모리로 추정한다[^5].

[^1]: J. L. Carter, M. N. Wegman, "Universal classes of hash functions", Journal of Computer and System Sciences 18 (1979), 143–154.
[^2]: M. N. Wegman, J. L. Carter, "New hash functions and their use in authentication and set equality", Journal of Computer and System Sciences 22 (1981), 265–279.
[^3]: M. L. Fredman, J. Komlós, E. Szemerédi, "Storing a sparse table with O(1) worst case access time", Journal of the ACM 31 (1984), 538–544.
[^4]: R. Impagliazzo, L. A. Levin, M. Luby, "Pseudo-random generation from one-way functions", STOC 1989, 12–24.
[^5]: G. Cormode, S. Muthukrishnan, "An improved data stream summary: the count-min sketch and its applications", Journal of Algorithms 55 (2005), 58–75.

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)
- [정수의 합동](modular-arithmetic.md)

## 더 알아보기

### 자료구조와 알고리즘

- [Count-Min 스케치](count-min-sketch.md)
- [Bloom 필터](bloom-filters.md)
- [해시 테이블](hash-tables.md)
- [Rabin–Karp 알고리즘](rabin-karp.md)

### 무작위성과 복잡도

- [무작위성 추출기](randomness-extractors.md)
- [Valiant–Vazirani 정리](valiant-vazirani.md)

#data_structures #algorithms #probability #cryptography
