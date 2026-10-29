# 생일 문제

# 개요

**생일 문제(birthday problem)** 는 $N$ 가지 값 가운데 하나를 고르게 무작위로 $k$ 번 뽑을 때 같은 값이 두 번 이상 나올 확률을 묻는 문제다. 생일이 $365$ 가지라면 $23$ 명만 모여도 생일이 같은 두 사람이 있을 확률이 $0.507$ 로 절반을 넘는다. 겹침은 사람 하나가 아니라 사람의 쌍마다 일어날 수 있으므로, 쌍의 수 $k(k-1)/2$ 가 $N$ 과 비슷해지는 $k\approx\sqrt N$ 근처에서 겹칠 확률이 커진다.

# 직관

$23$ 명의 생일이 모두 다를 확률을 한 사람씩 계산한다. 첫 사람은 아무 날이나 되고, 둘째 사람은 첫 사람과 다른 날일 확률이 $364/365$, 셋째 사람은 앞의 두 날과 다를 확률이 $363/365$ 다. 이렇게 $23$ 번째 사람까지 곱하면 다음과 같다.

$$
\frac{365}{365}\cdot\frac{364}{365}\cdots\frac{343}{365}\approx 0.493
$$

그래서 겹칠 확률은 $1-0.493=0.507$ 이다. 곱의 인수 하나하나는 $1$ 에 가깝지만, $23$ 명이면 비교할 쌍이 $253$ 개이고 쌍마다 $1/365$ 씩 겹칠 기회가 있다.

# 정의

$X_1,\dots,X_k$ 를 $\lbrace 1,\dots,N\rbrace$ 위에서 고르게 분포하는 독립 확률변수라 하자. $i\ne j$ 이면서 $X_i=X_j$ 인 쌍이 있는 사건을 **충돌(collision)** 이라 하고, 그 확률을 $p(k,N)$ 이라 한다. **생일 문제** 는 $p(k,N)$ 의 크기와 첫 충돌이 일어나는 시각을 묻는 문제다.[^1]

$$
1-p(k,N)=\prod_{i=0}^{k-1}\left(1-\frac iN\right)
$$

# 성질

## 지수 상한과 문턱

$1-x\le e^{-x}$ 를 인수마다 쓰면 다음이 나온다.

$$
1-p(k,N)\le\exp\left(-\frac{k(k-1)}{2N}\right)
$$

따라서 $k(k-1)\ge 2N\ln 2$, 대략 $k\ge 1.18\sqrt N$ 이면 충돌 확률이 $1/2$ 이상이다. $N=365$ 에서 이 값이 $22.5$ 이다.

반대 방향으로는 쌍마다 겹칠 확률이 $1/N$ 이므로 합집합 한계로 다음이 성립한다.

$$
p(k,N)\le\binom k2\frac1N=\frac{k(k-1)}{2N}
$$

두 부등식으로 $k=o(\sqrt N)$ 이면 충돌 확률이 $0$ 으로 가고 $k/\sqrt N\to\infty$ 이면 $1$ 로 간다.

## 첫 충돌 시각

첫 충돌이 일어나는 뽑기 번호를 $C$ 라 하면 다음이 성립한다.

$$
\mathbb E\lbrack C\rbrack=1+\sum_{k=1}^{N}\prod_{i=1}^{k-1}\left(1-\frac iN\right)\sim\sqrt{\frac{\pi N}{2}}
$$

$\Pr\lbrack C\gt k\rbrack=1-p(k,N)$ 를 $k=0,1,\dots$ 에 대해 더한 것이 첫 식이고, 곱을 $e^{-k^2/(2N)}$ 로 근사해 Gauss 적분을 하면 점근식이 나온다. $N=365$ 이면 평균 약 $24.6$ 명째에 처음 겹친다. 또한 $C/\sqrt N$ 은 밀도가 $xe^{-x^2/2}$ 인 Rayleigh 분포(Rayleigh distribution)로 분포수렴한다.

## 고르지 않은 분포

값마다 확률 $q_1,\dots,q_N$ 이 다르면, 같은 $k$ 에서 충돌 확률은 고른 분포일 때보다 작아지지 않는다. 두 번 뽑아 겹칠 확률 $\sum q_j^2$ 은 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $1/N$ 이상이고, 등호는 고른 분포일 때뿐이다. 이것이 $k=2$ 인 경우다.

# 활용

- [암호 해시 함수](cryptographic-hash-functions.md)의 출력이 $n$ 비트이면 $2^{n/2}$ 개 근처의 입력에서 충돌이 나온다. 그래서 충돌 저항성의 보안 수준은 출력 길이의 절반이다.
- [Pollard rho 알고리즘](pollard-rho.md)은 법 $p$ 의 무작위처럼 움직이는 수열이 $\sqrt p$ 단계 근처에서 되풀이되는 것을 써서 $n$ 의 소인수 $p$ 를 찾는다.
- [블록 암호 운용 모드](block-cipher-modes.md)에서 블록 길이가 $n$ 비트이면 같은 키로 $2^{n/2}$ 블록 근처를 암호화할 때 암호문 블록의 충돌로 평문 정보가 드러나기 시작한다.
- 크기 $N$ 인 군에서 [이산로그](discrete-logarithm.md)를 구하는 Pollard rho 판본도 같은 충돌로 $\sqrt N$ 단계 근처에서 끝난다. [Baby-step giant-step 알고리즘](baby-step-giant-step.md)은 같은 $\sqrt N$ 을 결정론적으로 얻는다.

[^1]: M. Mitzenmacher, E. Upfal, *Probability and Computing*, 2nd ed., Cambridge University Press (2017), §5.1. 생일 문제의 지수 상한과 문턱, 해싱과 충돌로의 응용.

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)

## 더 알아보기

- [암호 해시 함수](cryptographic-hash-functions.md)
- [Pollard rho 알고리즘](pollard-rho.md)

#probability #combinatorics #cryptography
