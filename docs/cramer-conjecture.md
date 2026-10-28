# Cramér 추측

# 개요

**Cramér 추측(Cramér's conjecture)** 은 연속한 두 [소수](primes.md) 사이의 간격이 소수의 로그의 제곱보다 크게 자라지 않는다는 추측이다. $113$ 과 $127$ 사이처럼 소수가 한동안 나오지 않는 구간이 있고, 소수가 커지면 이런 구간도 길어진다. 간격이 얼마나 길어질 수 있는지는 소수의 정의만으로는 알기 어렵다. Cramér 는 수 $n$ 이 확률 $1/\log n$ 으로 독립하게 소수가 된다고 놓은 모형에서 간격의 최댓값을 계산해 이 추측을 세웠다.

# 직관

Cramér 추측은 연속한 소수의 간격 $d_n=p_{n+1}-p_n$ 의 최대 크기가 $(\log p_n)^2$ 라고 하는 추측이다. 소수를 독립 시행으로 뽑은 집합으로 바꾼 모형에서 나온 예측이고, 증명된 상계는 그보다 훨씬 크다.

Cramér 가 1936 년에 그 모형과 함께 제시했다[^1].

[소수 정리](prime-number-theorem.md)는 $x$ 근방의 소수 밀도를 $1/\log x$ 로 준다. 그러면 [소수 간격](prime-gaps.md)이 얼마나 커질 수 있는지 묻는다. 평균 간격은 $\log x$ 인데 최대 간격은 평균의 상계에서 나오지 않는다.

밀도만 남기고 소수를 동전으로 바꿔 센다. $2$ 이상의 각 정수를 서로 독립으로 확률 $1/\log n$ 에서 뽑는다. 뽑힌 수 하나의 다음 자리부터 $\lambda\log x$ 개가 모두 안 뽑힐 확률은 $(1-1/\log x)^{\lambda\log x}$ 이고 $e^{-\lambda}$ 에 가깝다. $x$ 까지 뽑힌 수가 $x/\log x$ 개이므로 그만큼 긴 빈자리의 개수는 평균 $(x/\log x)e^{-\lambda}$ 다. 이 평균이 $1$ 로 떨어지는 자리는 $e^\lambda=x/\log x$, 곧 $\lambda$ 가 $\log x$ 쯤인 곳이다. 빈자리의 길이 $\lambda\log x$ 가 그 자리에서 $(\log x)^2$ 이다.

# 정의

## 추측

$p_n$ 을 $n$ 번째 소수, $d_n=p_{n+1}-p_n$ 이라 할 때

$$
\limsup_{n\to\infty}\frac{d_n}{(\log p_n)^2}=1
$$

을 Cramér 추측이라 한다. 분자를 $\log$ 로 한 번 더 나눈 꼴로 적으면 $d_n\le(1+o(1))(\log p_n)^2$ 와 같다.

## Cramér 무작위 모형

$n\ge3$ 인 각 정수를 서로 독립으로 확률 $1/\log n$ 에서 뽑아 만든 무작위 집합을 Cramér 모형이라 한다. 소수 정리가 주는 밀도만 남기고 합동 조건과 소수 사이의 상관은 모두 버린 모형이다.

# 성질

## 모형에서의 최대 간격

Cramér 모형의 연속한 원소 사이 간격 $g_n$ 은 거의 확실하게 $\limsup g_n/(\log n)^2=1$ 을 만족한다[^1]. 증명의 요지는 [Borel–Cantelli 보조정리](borel-cantelli.md)다. $\lambda$ 를 $1$ 보다 크게 잡으면 길이 $\lambda(\log n)^2$ 인 빈자리의 확률의 합이 수렴해 유한 번만 일어나고, $1$ 보다 작게 잡으면 발산해 무한히 자주 일어난다.

## 증명된 상계

[Riemann 가설](riemann-hypothesis.md) 아래에서 $d_n\ll\sqrt{p_n}\thinspace\log p_n$ 이 성립한다. 가정 없이 증명된 것은 $d_n\ll p_n^{0.525}$ 다[^2]. 둘 다 $(\log p_n)^2$ 와 크기의 차이가 크다.

## 증명된 하한

Rankin 은 $d_n$ 이 $\log p_n$ 의 상수배보다 큰 정도를 세 겹 반복 로그까지 끌어올렸다[^3]. 그 꼴에서 상수를 임의로 크게 잡을 수 있다는 것이 뒤에 증명됐다[^4]. 하한의 크기는 $\log p_n$ 에 반복 로그 인자를 곱한 것이고 $(\log p_n)^2$ 보다 작다.

## 모형과 실제 소수의 어긋남

Maier 는 길이 $(\log x)^\lambda$ 인 짧은 구간의 소수 개수가 Cramér 모형이 주는 값과 어긋남을 증명했다[^5]. 그 구간에서 개수의 상극한과 하극한이 모형의 예측을 각각 위아래로 벗어난다. 어긋남의 원인은 모형이 버린 합동 조건이다. 작은 소수의 배수를 거르면 남는 수의 밀도가 구간의 위치에 따라 달라진다. Granville 은 이 효과를 넣어 추측의 극한값을 $2e^{-\gamma}$ 로 고쳐 제시했다[^6].

# 활용

- **소수 간격의 기록과의 비교.** 알려진 최대 간격을 $(\log p)^2$ 로 나눈 값이 Cramér–Shanks 비율이다. 이 비율이 어느 크기에 머무는지가 추측의 극한값을 두고 Cramér 쪽과 Granville 쪽을 가르는 지표로 쓰인다.
- **짧은 구간의 소수.** 길이 $(\log x)^\lambda$ 구간의 소수 개수를 다루는 결과는 Cramér 모형의 예측을 기준선으로 두고 그 차이를 잰다.
- **다음 소수 찾기.** 주어진 수 위의 첫 소수를 찾는 절차에서 시도 횟수의 상계는 간격의 상계에서 나온다. Cramér 추측을 가정하면 $(\log p)^2$ 번의 소수 판정으로 끝난다.

[^1]: H. Cramér, "On the order of magnitude of the difference between consecutive prime numbers", Acta Arithmetica 2 (1936), 23–46.
[^2]: R. C. Baker, G. Harman, J. Pintz, "The difference between consecutive primes, II", Proceedings of the London Mathematical Society 83 (2001), 532–562.
[^3]: R. A. Rankin, "The difference between consecutive prime numbers", Journal of the London Mathematical Society 13 (1938), 242–247.
[^4]: K. Ford, B. Green, S. Konyagin, T. Tao, "Large gaps between consecutive prime numbers", Annals of Mathematics 183 (2016), 935–974. J. Maynard, "Large gaps between primes", Annals of Mathematics 183 (2016), 915–933.
[^5]: H. Maier, "Primes in short intervals", Michigan Mathematical Journal 32 (1985), 221–225.
[^6]: A. Granville, "Harald Cramér and the distribution of prime numbers", Scandinavian Actuarial Journal 1 (1995), 12–28.

# 연관 문서

## 선수지식

- [소수 간격](prime-gaps.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #probability #analysis
