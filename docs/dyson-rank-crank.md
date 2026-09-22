# Dyson 의 rank 와 crank

# 개요

Ramanujan 이 [분할수](partitions.md) 표에서 찾아낸 세 합동식이 있다.

$$
p(5n+4)\equiv0\ (\mathrm{mod}\ 5),\qquad p(7n+5)\equiv0\ (\mathrm{mod}\ 7),\qquad p(11n+6)\equiv0\ (\mathrm{mod}\ 11)
$$

증명은 생성함수 조작으로 나오지만, $p(5n+4)$ 개의 분할을 다섯 무더기로 똑같이 나누는 방법은 알려 주지 않는다.

1944 년 Freeman Dyson 이 그 무더기를 짓는 통계량으로 **rank** 를 제안했다.

$$
\mathrm{rank}(\lambda)=(\text{가장 큰 부분})-(\text{부분의 개수})
$$

Dyson 의 추측은 $5n+4$ 개짜리 분할들을 rank 의 법 $5$ 잉여로 나누면 다섯 무더기의 크기가 같다는 것이었다. 법 $7$ 에서도 마찬가지이고 1954 년에 Atkin–Swinnerton-Dyer 가 증명했다.

$11$ 에서는 rank 가 균등 분포하지 않는다. Dyson 은 세 합동식을 모두 설명할 통계량이 있으리라 보고 정의를 모르는 채 **crank** 라는 이름을 붙였다. 1988 년에 Andrews 와 Garvan 이 찾아냈다.

# 직관

## 조합적 설명

$p(4)=5$ 의 다섯 분할은 다음과 같다.

$$
4,\quad 3+1,\quad 2+2,\quad 2+1+1,\quad 1+1+1+1
$$

rank 는 순서대로 $3,1,0,-1,-3$ 이고 법 $5$ 로 줄이면 $3,1,0,4,2$ 로 다섯 잉여류가 하나씩 나온다. 모든 $n$ 에서 그렇다.

개수가 $5$ 의 배수라는 산술적 사실을 다섯 개의 같은 크기 상자로 나눌 수 있다는 구성적 사실로 바꾼 것이 조합적 설명이다. 나눈 뒤 각 상자 안의 구조를 다시 물을 수 있다.

## crank 의 정의

Andrews–Garvan 의 답은 $1$ 을 특별 취급한다. 분할 $\lambda$ 에서 $1$ 의 개수를 $\omega$ , $\omega$ 보다 큰 부분의 개수를 $\mu$ 라 하면

$$
\mathrm{crank}(\lambda)=\begin{cases}\text{가장 큰 부분}&\omega=0\cr \mu-\omega&\omega\gt 0\end{cases}
$$

이다. 생성함수 쪽에서는 crank 가 더 단순하다.

$$
\sum_{\lambda}z^{\mathrm{crank}(\lambda)}q^{|\lambda|}=\prod_{n\ge1}\frac{1-q^n}{(1-zq^n)(1-z^{-1}q^n)}
$$

이것은 완전한 Jacobi 형식이다. rank 쪽 생성함수는

$$
\sum_{\lambda}z^{\mathrm{rank}(\lambda)}q^{|\lambda|}=\sum_{n\ge0}\frac{q^{n^2}}{(zq;q)\_n(z^{-1}q;q)\_n}
$$

이고 $z$ 가 $1$ 의 거듭제곱근이면 Ramanujan 의 mock theta 함수가 된다. 두 통계량의 차이가 모듈러와 mock 의 차이다. crank 의 정의가 복잡해 보이는 것은 무한곱을 조합적으로 읽어낸 결과이기 때문이다.

## rank 와 crank 의 비교

| | rank | crank |
| --- | --- | --- |
| 정의 | 최대 부분 빼기 부분의 개수 | 1 의 개수로 갈린 규칙 |
| 설명하는 합동식 | 법 5, 법 7 | 법 5, 법 7, 법 11 |
| 생성함수 | mock 모듈러(Ramanujan 의 $f(q)$ ) | Jacobi 형식 |

Dyson 이 rank 를 정의했을 때 그 생성함수가 Ramanujan 의 유작과 같은 대상이라는 것은 알려져 있지 않았다. 두 이야기가 합쳐진 것은 2000 년대이고, Bringmann–Ono 가 조화 Maass 형식으로 rank 의 계수에 정확 공식을 세우면서 Andrews–Dragonette 추측이 풀렸다.

# 정의

## rank 와 그 개수 함수

분할 $\lambda=(\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_\ell)$ 에 대해

$$
\mathrm{rank}(\lambda)=\lambda_1-\ell
$$

이다. $N(m,n)$ 은 $n$ 의 분할 가운데 rank 가 $m$ 인 것의 개수, $N(r,t,n)$ 은 rank 가 $r\pmod t$ 인 것의 개수다. 켤레 분할이 rank 의 부호를 뒤집으므로 $N(m,n)=N(-m,n)$ 이다.

**정리 (Atkin–Swinnerton-Dyer, 1954).**

$$
N(r,5,5n+4)=\frac{p(5n+4)}{5}\ (0\le r\le4),\qquad N(r,7,7n+5)=\frac{p(7n+5)}{7}\ (0\le r\le6)
$$

법 $11$ 에서는 성립하지 않는다.

## crank 와 세 합동식

$\omega(\lambda)$ 를 $1$ 인 부분의 개수, $\mu(\lambda)$ 를 $\omega(\lambda)$ 보다 큰 부분의 개수라 하면

$$
\mathrm{crank}(\lambda)=\begin{cases}\lambda_1&\omega(\lambda)=0\cr\mu(\lambda)-\omega(\lambda)&\omega(\lambda)\gt 0\end{cases}
$$

이다.

**정리 (Andrews–Garvan, 1988).** crank 는 $5n+4$ , $7n+5$ , $11n+6$ 에서 각각 법 $5,7,11$ 로 균등 분포한다.

$p(1)=1$ 이라 균등 분포가 불가능하므로 $n=1$ 은 관례상 따로 다룬다.

## 생성함수

$$
R(z;q)=\sum_{n\ge0}\sum_m N(m,n)z^mq^n=\sum_{n\ge0}\frac{q^{n^2}}{(zq;q)\_n(z^{-1}q;q)\_n}
$$

$$
C(z;q)=\sum_{n\ge0}\sum_m M(m,n)z^mq^n=\prod_{n\ge1}\frac{1-q^n}{(1-zq^n)(1-z^{-1}q^n)}
$$

여기서 $(a;q)\_n=\prod_{j=0}^{n-1}(1-aq^j)$ 이고, $z=1$ 에서 둘 다 $\sum p(n)q^n$ 이 된다.

$R(-1;q)$ 는 Ramanujan 의 세 번째 차수 mock theta 함수 $f(q)$ 다. 일반적으로 $z$ 가 $1$ 의 $k$ 제곱근이면 $R(z;q)$ 가 무게 $1/2$ 의 mock 모듈러 형식이고 shadow 는 $k$ 에 따른 [theta 급수](theta-series.md)다.

# 성질

## 균등 분포의 강도

$N(r,5,5n+4)$ 가 $r$ 에 무관하다는 것은 $p(5n+4)\equiv0\pmod5$ 를 함의하고 역은 성립하지 않는다. 균등 분포의 증명은 생성함수의 $1$ 의 거듭제곱근에서의 거동을 요구하며 그 거동이 mock 모듈러성과 직결된다.

## $11$ 에서의 실패

$R(z;q)$ 를 $z=\zeta_{11}$ 에서 보면 $\Gamma_0(11)$ 관련 준위에서 shadow 가 $0$ 이 아닌 mock 형식이 되어 균등 분포에 필요한 소멸이 일어나지 않는다. $C(z;q)$ 는 $z$ 가 어떤 $1$ 의 거듭제곱근이어도 eta 몫으로 표현되어 순수 모듈러성을 유지한다. 실패의 원인은 정칙성을 얼마나 포기했는가에 있다.

## 더 큰 합동식

Ramanujan 합동식은 고립된 세 개가 아니다. $p(n)$ 은 $5^a7^b11^c$ 꼴의 법에서 합동식 족을 갖고(Watson, Atkin), Ono 는 $5$ 이상의 모든 소수 $\ell$ 에 대해 $p(An+B)\equiv0\pmod\ell$ 인 산술급수가 존재함을 보였다. 증명은 분할 생성함수를 반정수 무게 모듈러 형식으로 보고 [Galois 표현](galois-representations.md)과 Serre 의 소멸 정리를 쓴다. 조합적 설명이 있는 것은 작은 법뿐이다.

## 모멘트

crank 의 모멘트 $\sum_m m^{2k}M(m,n)$ 이 rank 의 모멘트보다 크다는 것이 Andrews 의 정리이고, 그 차이가 $k$ marked Durfee 기호를 센다. 두 통계량의 차이 자체가 셀 만한 대상을 센다.

# 활용

- 생성함수 항등식 대신 분할들을 짝지어 합동식을 증명하는 전략이 다른 조합 수열의 합동식에도 적용된다.
- $R(z;q)$ 가 $1$ 의 거듭제곱근에서 mock 이 되는 현상이 Ramanujan 의 mock theta 함수를 조합적으로 설명한다.
- Bringmann–Ono 는 조화 Maass 형식의 원법으로 $N(m,n)$ 의 정확 공식을 세웠고, 그로부터 $n\to\infty$ 에서 rank 의 극한 분포가 나온다.
- crank 생성함수의 무한곱은 자유 보손 분배함수와 같은 꼴이라 rank 와 crank 통계가 격자 모형의 관측량으로 재해석된다.

# 연관 문서

## 선수지식

- [분할수](partitions.md)
- [Mock 모듈러 형식과 Zwegers 이론](mock-modular-forms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory #complex_analysis
