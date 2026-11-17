# AMS 스케치

# 개요

**AMS 스케치(AMS sketch, Alon–Matias–Szegedy sketch)** 는 스트림(stream)에서 항목마다의 빈도를 제곱해 더한 값을, 계수기 몇 개만으로 추정하는 방법이다. 두 테이블을 같은 열로 조인할 때 결과의 행 수를 미리 알고 싶으면 값마다 등장 횟수를 곱해 더해야 하고, 한 테이블을 자기 자신과 조인하면 그 값은 빈도의 제곱합이다. AMS 스케치는 항목마다 무작위 부호 $+1$ 이나 $-1$ 을 정해 두고 부호를 더한 합 하나를 유지하며, 그 합의 제곱이 평균적으로 빈도의 제곱합과 같다는 성질로 값을 추정한다.

# 직관

스트림 $a,b,a,c,a$ 에서 빈도는 $f(a)=3$, $f(b)=1$, $f(c)=1$ 이고 제곱합은 $9+1+1=11$ 이다. 항목마다 계수기를 두지 않고 이 $11$ 을 얻으려 한다.

항목마다 동전을 던져 부호 $\sigma(a),\sigma(b),\sigma(c)\in\lbrace +1,-1\rbrace$ 를 정하고, 항목이 올 때마다 그 부호를 계수기 $Z$ 에 더한다. 스트림이 끝나면 $Z=3\sigma(a)+\sigma(b)+\sigma(c)$ 다. 부호의 네 경우와 $Z^2$ 는 다음과 같다. 나머지 네 경우는 부호가 모두 뒤집혀 $Z^2$ 가 같다.

| $\sigma(a),\sigma(b),\sigma(c)$ | $Z$ | $Z^2$ |
| ------------------------------- | --- | ----- |
| $+,+,+$                         | $5$ | $25$  |
| $+,+,-$                         | $3$ | $9$   |
| $+,-,+$                         | $3$ | $9$   |
| $+,-,-$                         | $1$ | $1$   |

네 값 $25,9,9,1$ 의 평균은 $11$ 이다. $Z^2$ 를 전개하면 $9+1+1$ 에 $6\sigma(a)\sigma(b)$ 같은 교차항이 더해지는데, 교차항은 부호가 반반으로 나와 평균이 $0$ 이다. 그래서 $Z^2$ 의 평균이 제곱합이고, 한 번 얻은 $Z^2$ 는 $1$ 에서 $25$ 까지 흩어지므로 이런 계수기를 여러 개 두어 평균을 낸다.

# 정의

## 빈도 모멘트

스트림 $x\_1,\dots,x\_n$ 의 항목은 집합 $U$ 에 속하고, 항목 $a$ 의 빈도는 $f(a)=\lvert\lbrace i: x\_i=a\rbrace\rvert$ 다. 정수 $k\ge 0$ 에 대해 다음 값을 $k$ 차 **빈도 모멘트(frequency moment)** 라 한다.

$$
F\_k=\sum\_{a\in U}f(a)^k
$$

$F\_0$ 은 서로 다른 항목의 수이고 $F\_1=n$ 이다. 직관 절의 스트림에서 $F\_0=3$, $F\_1=5$, $F\_2=11$ 이다.

## 4 중 독립 부호

함수족 $\mathcal S$ 에서 고른 $\sigma: U\to\lbrace +1,-1\rbrace$ 가, 서로 다른 항목 넷 이하를 어떻게 골라도 그 부호들이 독립이고 각각 $\pm 1$ 을 확률 $1/2$ 씩 가지면 $\mathcal S$ 를 **4 중 독립(4-wise independent)** 이라 한다. 소수 $p$ 에 대해 차수 $3$ 이하의 무작위 다항식으로 만드는 [범용 해시족](universal-hashing.md)의 변형이 그런 족이고, 함수 하나를 계수 네 개로 저장한다.

## 추정량

4 중 독립인 족에서 $\sigma$ 를 고르고 다음 계수기를 유지한다. 항목 $x$ 가 오면 $Z$ 에 $\sigma(x)$ 를 더한다.

$$
Z=\sum\_{i=1}^{n}\sigma(x\_i)=\sum\_{a\in U}\sigma(a)f(a)
$$

$Z^2$ 이 $F\_2$ 의 **AMS 추정량** 이다. 직관 절의 표가 $Z$ 와 $Z^2$ 의 예다. Alon, Matias, Szegedy 가 1996 년에 제안했다[^1].

# 성질

## 기댓값과 분산

정리. $\mathbb E\lbrack Z^2\rbrack=F\_2$ 이고 $\mathrm{Var}(Z^2)\le 2F\_2^2$ 이다[^1].

증명의 요지. $Z^2$ 을 전개하면 다음과 같다.

$$
Z^2=\sum\_a f(a)^2+\sum\_{a\ne b}\sigma(a)\sigma(b)f(a)f(b)
$$

서로 다른 두 부호의 곱은 평균이 $0$ 이므로 기댓값이 $F\_2$ 다. $Z^4$ 를 전개하면 4 중 독립성으로 부호가 짝을 이루는 항만 남는다.

$$
\mathbb E\lbrack Z^4\rbrack=\sum\_a f(a)^4+6\sum\_{a\lt b}f(a)^2f(b)^2
$$

여기서 다음 값을 빼면 분산은 $4\sum\_{a\lt b}f(a)^2f(b)^2\le 2F\_2^2$ 이다.

$$
F\_2^2=\sum\_a f(a)^4+2\sum\_{a\lt b}f(a)^2f(b)^2
$$

## 평균과 중앙값

정리. 독립인 추정량 $t=\lceil 8/\varepsilon^2\rceil$ 개의 평균을 $Y$ 라 하면 $\Pr\lbrack\lvert Y-F\_2\rvert\gt\varepsilon F\_2\rbrack\le 1/4$ 이다. 이런 $Y$ 를 $r=O(\log(1/\delta))$ 개 만들어 중앙값을 내면 실패 확률이 $\delta$ 이하다[^1].

증명의 요지. $\mathrm{Var}(Y)\le 2F\_2^2/t$ 이므로 [집중부등식](concentration-inequalities.md)의 Chebyshev 부등식(Chebyshev's inequality)으로 실패 확률이 $2/(t\varepsilon^2)\le 1/4$ 이다. 중앙값이 틀리려면 $Y$ 의 절반 이상이 틀려야 하고, 틀리는 개수는 평균이 $r/4$ 인 독립 시행의 합이라 Chernoff 부등식(Chernoff bound)으로 그 확률이 $r$ 에 대해 지수적으로 줄어든다.

계수기는 $O(\varepsilon^{-2}\log(1/\delta))$ 개이고 각각 $O(\log n)$ 비트이며, 부호 함수마다 계수 네 개를 저장한다. 갱신 하나는 계수기마다 부호 하나를 계산해 더하는 것이다.

## 선형성

$Z$ 는 빈도 벡터 $(f(a))\_{a\in U}$ 의 선형 함수다. 그래서 항목을 지우는 갱신은 $\sigma(x)$ 를 빼면 반영되고, 같은 부호 함수로 만든 두 스케치를 더하면 두 스트림을 이어 붙인 스트림의 스케치가 된다. 두 스트림의 빈도 $f,g$ 에 대해 $Z\_fZ\_g$ 의 기댓값은 내적 $\sum\_a f(a)g(a)$ 이고, 이것이 조인 크기의 추정량이다.

## 다른 차수의 모멘트

- $F\_0$ 은 해시값의 처음 $1$ 의 자리를 쓰는 [HyperLogLog](hyperloglog.md) 같은 방법으로 추정한다.
- $k\ge 3$ 이면 $F\_k$ 를 상수 배 오차로 추정하는 데 $\lvert U\rvert^{1-2/k}$ 에 로그 인자를 곱한 공간이면 충분하다는 것을 Indyk 와 Woodruff 가 증명했다[^3]. Bar-Yossef, Jayram, Kumar, Sivakumar 는 통신 복잡도로 지수가 $1-2/k$ 에 얼마든지 가까운 공간 하한을 증명했다[^2].
- 항목마다 빈도를 추정하는 Count 스케치(Count sketch)는 AMS 부호에 해시 칸을 더한 것이다. 칸마다 부호를 더해 두고 항목의 칸 값에 그 부호를 곱해 읽으면 오차가 $\varepsilon\sqrt{F\_2}$ 이하다. [Count-Min 스케치](count-min-sketch.md)의 오차 $\varepsilon F\_1$ 보다 작은 경우가 많지만 계수기가 $\varepsilon^{-2}$ 에 비례한다[^4].

# 활용

- 데이터베이스의 조인 크기 추정. 두 테이블의 조인 열에 대한 스케치의 곱으로 조인 결과의 행 수를 실행 전에 추정해 질의 계획을 고른다.
- 네트워크 감시. 흐름별 패킷 수의 제곱합이 갑자기 커지면 소수의 흐름이 트래픽을 차지한 것이므로 이상 트래픽의 신호로 쓴다.
- 차원 축소. 부호 계수기 $t$ 개는 빈도 벡터에 무작위 $\pm 1$ 행렬을 곱한 것이고, 노름을 보존하는 무작위 사영으로서 [Johnson–Lindenstrauss 보조정리](johnson-lindenstrauss-lemma.md)의 부호 행렬판과 같은 꼴이다.

[^1]: N. Alon, Y. Matias, M. Szegedy, "The space complexity of approximating the frequency moments", Journal of Computer and System Sciences 58 (1999), 137–147.
[^2]: Z. Bar-Yossef, T. S. Jayram, R. Kumar, D. Sivakumar, "An information statistics approach to data stream and communication complexity", Journal of Computer and System Sciences 68 (2004), 702–732.
[^3]: P. Indyk, D. Woodruff, "Optimal approximations of the frequency moments of data streams", ACM Symposium on Theory of Computing (STOC) 2005.
[^4]: M. Charikar, K. Chen, M. Farach-Colton, "Finding frequent items in data streams", Theoretical Computer Science 312 (2004), 3–15.

# 연관 문서

## 선수지식

- [Count-Min 스케치](count-min-sketch.md)
- [집중부등식](concentration-inequalities.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms #probability
