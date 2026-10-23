# Schönhage–Strassen 알고리즘

# 개요

**Schönhage–Strassen 알고리즘(Schönhage–Strassen algorithm)** 은 $N$ 비트 정수 두 개의 곱을 $O(N\log N\log\log N)$ 번의 비트 연산으로 구하는 알고리즘이다. 수를 조각으로 나눠 다항식의 계수로 보고, 그 합성곱을 환 $\mathbb Z/(2^K+1)\mathbb Z$ 위의 [고속 Fourier 변환](fft.md)으로 계산하며, 조각끼리의 곱은 같은 알고리즘을 재귀로 쓴다. A. Schönhage 와 V. Strassen 이 1971 년에 발표했다[^1].

[Karatsuba 곱셈](karatsuba-multiplication.md)은 곱을 세 값으로 정하고 보간해 지수를 $\log_2 3$ 으로 낮췄다. 이 알고리즘은 값의 수를 조각 수에 비례하게 늘리고, 값을 구하는 계산과 보간을 고속 Fourier 변환으로 해서 지수를 $1$ 로 낮춘다.

# 직관

$N$ 비트 정수 $x$ 를 $M$ 비트 조각 $D$ 개로 나누면 $x=\sum_i a_i2^{Mi}$ 이고, 다항식 $A(t)=\sum_i a_it^i$ 에 대해 $x=A(2^M)$ 이다. $y$ 도 같이 $B(t)$ 로 쓰면 $xy=C(2^M)$ 이고 $C=AB$ 다. $C$ 의 계수는 합성곱 $c_j=\sum_{i}a_ib_{j-i}$ 이므로 고속 Fourier 변환으로 $O(D\log D)$ 번의 연산에 구한다. 마지막에 $C(2^M)$ 을 계산하는 것은 자리 올림을 하며 더하는 일이다.

복소수로 변환하면 반올림 오차가 생겨 정수 계수를 정확히 되찾는다는 보장이 어렵다. 그래서 정수의 나머지 환에서 변환한다. $\mathbb Z/(2^K+1)\mathbb Z$ 에서는 $2^K\equiv -1$ 이므로 $2^{2K}\equiv 1$ 이고, $2$ 가 $2K$ 제곱근이 되는 단위근이다. 이 단위근을 곱하는 것은 비트를 옮기고 한 번 빼는 일이라 $O(K)$ 비트 연산이다.

변환 뒤에 남는 것은 $\mathbb Z/(2^K+1)\mathbb Z$ 의 원소끼리의 곱 $D$ 번이다. $D$ 와 $K$ 를 모두 $\sqrt N$ 정도로 잡으면 이 곱은 처음 문제보다 훨씬 작은 같은 문제이므로 재귀로 푼다.

# 정의

## 환 위의 이산 Fourier 변환

환 $R$ 의 원소 $\omega$ 가 $\omega^L=1$ 이고 $0\lt k\lt L$ 에서 $\sum_{j=0}^{L-1}\omega^{jk}=0$ 이면 $\omega$ 를 **주 $L$ 제곱근(principal L-th root of unity)** 이라 한다. $L$ 이 $R$ 에서 가역이면 길이 $L$ 의 [이산 Fourier 변환](fourier.md)과 그 역변환이 복소수에서와 같은 식으로 정의되고, 합성곱 정리가 성립한다.

$R=\mathbb Z/(2^K+1)\mathbb Z$ 이고 $L$ 이 $2K$ 를 나누는 $2$ 의 거듭제곱이고 $\omega=2^{2K/L}$ 이면 $\omega^{L/2}=2^K=-1$ 이므로 $\omega$ 는 주 $L$ 제곱근이다. $L$ 은 $2$ 의 거듭제곱이고 $2$ 는 $R$ 에서 가역이므로 $L$ 도 가역이다.

## 알고리즘

입력은 $0\le x,y\lt 2^N+1$ 이고, 출력은 $xy\bmod(2^N+1)$ 이다. 정수의 곱 자체는 $N$ 을 두 배로 잡아 구한다.

1. $N=DM$ 이 되게 $D$ 와 $M$ 을 $2$ 의 거듭제곱으로 정하고 $D\approx\sqrt N$ 로 둔다. $x$, $y$ 를 $M$ 비트 조각 $a_i$, $b_i$ $(0\le i\lt D)$ 로 나눈다.
2. $2^{DM}=2^N\equiv -1$ 이므로 필요한 것은 $t^D=-1$ 에서의 곱, 곧 $c_j=\sum_{i\le j}a_ib_{j-i}-\sum_{i\gt j}a_ib_{D+j-i}$ 다. $\lvert c_j\rvert\lt D2^{2M}$ 이므로 $K\ge 2M+\log_2 D+1$ 이고 $D$ 의 배수인 $K$ 를 골라 $c_j$ 를 $\mathbb Z/(2^K+1)\mathbb Z$ 에서 계산한다.
3. $\theta=2^{K/D}$ 로 두면 $\theta^D=-1$ 이다. $a_i$, $b_i$ 에 $\theta^i$ 를 곱한 뒤 길이 $D$ 의 변환을 $\omega=\theta^2$ 로 하면 $t^D=-1$ 에서의 곱이 순환 합성곱이 된다.
4. 변환한 값끼리 곱한다. $\mathbb Z/(2^K+1)\mathbb Z$ 의 곱 $D$ 번이고, 같은 알고리즘을 $N$ 대신 $K$ 로 재귀해 쓴다.
5. 역변환하고 $\theta^{-i}$ 를 곱해 $c_j$ 를 얻고, $\sum_jc_j2^{Mj}$ 을 $2^N+1$ 로 나눈 나머지를 자리 올림으로 계산한다.

# 성질

## 실행 시간

정리. Schönhage–Strassen 알고리즘은 $N$ 비트 정수 두 개를 $O(N\log N\log\log N)$ 번의 비트 연산으로 곱한다[^1][^2].

증명의 요지. 3 단계와 5 단계의 변환은 $\mathbb Z/(2^K+1)\mathbb Z$ 의 덧셈과 단위근 곱셈 $O(D\log D)$ 번이고, 각각이 비트 이동과 덧셈이라 $O(K)$ 다. $DK=O(N)$ 이므로 변환 전체가 $O(N\log N)$ 이다. 4 단계는 크기 $K\approx 2\sqrt N$ 인 곱 $D\approx\sqrt N$ 번이다.

$$
T(N)\le\sqrt N\thinspace T(2\sqrt N)+O(N\log N)
$$

$T(N)=N\log N\cdot s(N)$ 으로 두면 $\sqrt N\cdot 2\sqrt N\log(2\sqrt N)\approx N\log N$ 이므로 $s(N)\le s(2\sqrt N)+O(1)$ 이다. $N$ 에서 $2\sqrt N$ 으로 가는 재귀는 $O(\log\log N)$ 번 만에 상수 크기에 이르므로 $s(N)=O(\log\log N)$ 이다.

부분 문제의 크기가 $N/b$ 가 아니라 $\sqrt N$ 정도라서 이 점화식은 [마스터 정리](master-theorem.md)의 꼴이 아니고, 재귀의 깊이가 $\log N$ 이 아니라 $\log\log N$ 이다.

## 이후의 개선

M. Fürer 는 $\mathbb Z/(2^K+1)\mathbb Z$ 대신 단위근이 더 많은 환을 써서 실행 시간을 $N\log N\cdot 2^{O(\log^\ast N)}$ 으로 줄였다[^3]. D. Harvey 와 J. van der Hoeven 은 다차원 변환을 써서 $O(N\log N)$ 을 증명했다[^4]. $\log^\ast N$ 은 $\log$ 를 몇 번 거듭 써야 $1$ 이하가 되는지를 센 수다.

## 다항식의 곱셈

계수가 환 $R$ 에 있는 차수 $n$ 의 다항식 두 개도 같은 방법으로 곱한다. $R$ 에 단위근이 없어도 $R\lbrack t\rbrack/(t^L+1)$ 에서는 $t$ 가 $2L$ 제곱근이 되므로, $2$ 가 $R$ 에서 가역이면 $R$ 의 연산 $O(n\log n\log\log n)$ 번으로 곱한다[^5].

# 활용

- 큰 정수의 산술. 큰 정수의 나눗셈, 제곱근, 최대공약수는 Newton 반복이나 분할 정복으로 곱셈 몇 번에 환원되므로 곱셈과 같은 차수로 계산된다. 자릿수가 충분히 크면 Karatsuba 곱셈과 Toom–Cook 곱셈보다 이 알고리즘이 빠르다[^2].
- 다항식 산술. 유한체 위 다항식의 곱셈, 나눗셈, 다점 계산이 다항식 곱셈의 비용으로 환원되고, 위의 다항식 형태가 그 곱셈을 준다.

[^1]: A. Schönhage, V. Strassen, "Schnelle Multiplikation großer Zahlen", Computing 7 (1971), 281–292.
[^2]: D. E. Knuth, *The Art of Computer Programming, Vol. 2: Seminumerical Algorithms*, 3rd ed., Addison-Wesley, 1997, §4.3.3.
[^3]: M. Fürer, "Faster integer multiplication", SIAM Journal on Computing 39 (3) (2009), 979–1005.
[^4]: D. Harvey, J. van der Hoeven, "Integer multiplication in time O(n log n)", Annals of Mathematics 193 (2) (2021), 563–617.
[^5]: J. von zur Gathen, J. Gerhard, *Modern Computer Algebra*, 3rd ed., Cambridge University Press, 2013, 8 장.

# 연관 문서

## 선수지식

- [고속 Fourier 변환](fft.md)
- [Karatsuba 곱셈](karatsuba-multiplication.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #complexity #number_theory
