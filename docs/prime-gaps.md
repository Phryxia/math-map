# 소수 간격

# 개요

소수 간격은 연속한 [소수](primes.md)의 차 $d_n=p_{n+1}-p_n$ 이다. [소수 정리](prime-number-theorem.md)가 평균이 $\log p_n$ 정도라는 것을 주고, 평균보다 작은 간격과 큰 간격이 각각 얼마나 자주 나오는지가 문제다.

작은 간격 쪽의 결과는 [큰 체](large-sieve.md)에서 나온다. 체 가중으로 짧은 구간 안의 소수 개수를 아래에서 누르면, 간격이 유계인 소수 쌍이 무한히 많다는 결론이 나온다. 큰 간격 쪽은 연속한 합성수를 직접 만들어 하한을 얻는다.

# 직관

$x$ 이하의 소수가 $x/\log x$ 개이고 길이 $x$ 인 구간에 퍼져 있으므로, 연속한 소수의 차의 평균은 $\log x$ 정도다. 평균보다 훨씬 작은 간격이 얼마나 자주 나오는지를 묻는다.

평균만으로 얻는 것은 하나다. $p_n\le x$ 에 걸친 $\sum d_n$ 이 $x$ 정도이고 항의 개수가 $\pi(x)$ 이므로 평균이 $x/\pi(x)$ , 곧 $\log x$ 다. 평균 이하인 항이 있어야 하므로

$$
\liminf\_{n\to\infty}\frac{d_n}{\log p_n}\le 1
$$

이 성립한다. 그러나 이 논법은 비를 $1$ 밑의 어떤 상수로도 내리지 못한다. 모든 간격이 $\log x$ 에 가까운 경우도 평균 조건을 만족하기 때문이다.

막힌 까닭은 간격을 하나씩 보지 않고 합의 평균만 쓴 것이다. 간격 하나를 보려면 길이 $h$ 인 구간 안에 소수가 둘 이상 드는지 세야 한다. 정수 $h_1,\dots,h_k$ 를 고정하고 양수 가중 $w_n$ 을 잡아

$$
\sum\_{n\le x}\Bigl(\sum\_{i\le k}\mathbf 1\lbrack n+h_i\text{ 가 소수}\rbrack-1\Bigr)w_n\gt 0
$$

이면, 괄호 안이 양수인 $n$ 이 있으므로 그 $n$ 에서 $n+h_i$ 가운데 둘 이상이 소수다. 그 두 소수의 차는 $h_k-h_1$ 이하다.

가중 $w_n$ 을 체에서 가져온다. 체 가중의 제곱을 쓰면 위 두 합을 모두 계산할 수 있고, 소수를 세는 쪽 합에 등차수열의 소수 개수가 들어간다. 그 값을 법의 평균으로 주는 것이 Bombieri–Vinogradov 정리이므로, 부등식이 성립하는지는 그 정리가 다루는 법의 범위에 달려 있다.

# 정의

## 간격과 허용집합

$p_n$ 을 $n$ 번째 소수라 하고 $d_n=p_{n+1}-p_n$ 이라 한다.

음이 아닌 서로 다른 정수의 유한집합 $\mathcal H=\lbrace h_1,\dots,h_k\rbrace$ 가 **허용집합**이라는 것은, 모든 소수 $p$ 에서 $\mathcal H$ 의 원소를 $p$ 로 나눈 나머지들이 법 $p$ 의 잉여류 전체를 덮지 않는다는 뜻이다.

$\lbrace 0,2\rbrace$ 는 허용집합이다. $\lbrace 0,2,4\rbrace$ 는 법 $3$ 의 세 잉여류를 모두 덮으므로 허용집합이 아니고, 실제로 $n,n+2,n+4$ 가 모두 소수인 것은 $n=3$ 뿐이다.

## 특이급수

허용집합 $\mathcal H$ 와 소수 $p$ 에 대해 $\nu(p)$ 를 $\mathcal H$ 가 덮는 법 $p$ 의 잉여류 개수라 하고

$$
\mathfrak S(\mathcal H)=\prod\_p\Bigl(1-\frac{\nu(p)}{p}\Bigr)\Bigl(1-\frac1p\Bigr)^{-k}
$$

를 **특이급수**라 한다. 허용집합이면 각 인자가 $0$ 이 아니고 곱이 수렴한다.

**Hardy–Littlewood 추측.** $n+h_1,\dots,n+h_k$ 가 모두 소수인 $n\le x$ 의 개수가 $\mathfrak S(\mathcal H)\thinspace x/(\log x)^k$ 에 점근한다.

# 성질

## 임의로 큰 간격

**정리.** 임의의 $m$ 에 대해 $d_n\ge m$ 인 $n$ 이 있다.

증명의 요지. $(m+1)!+2,\dots,(m+1)!+m+1$ 의 $m$ 개 수는 각각 $2,\dots,m+1$ 로 나누어지므로 모두 합성수다. 이 구간 앞뒤의 소수 사이의 간격이 $m$ 이상이다.

## Rankin 의 하한

**정리.** 양수 상수 $c$ 에 대해

$$
d_n\gg\frac{c\thinspace\log n\thinspace\log\log n\thinspace\log\log\log\log n}{(\log\log\log n)^2}
$$

인 $n$ 이 무한히 많다. $c$ 는 임의로 크게 잡을 수 있다.[^1]

증명의 요지. 길이 $y$ 인 구간에서 작은 소수의 잉여류를 골라 모든 정수를 덮는 피복계를 만든다. 덮는 데 쓰는 소수의 개수를 아껴야 간격이 길어지므로, 잉여류를 고르는 문제가 조합적 최적화가 된다. Rankin 의 구성에 쓰인 잉여류 선택을 확률적 방법으로 개선해 상수 $c$ 를 임의로 키운다.

## 유계 간격

**정리.** $\liminf\_{n\to\infty}d_n\lt\infty$ 다. 더 정확히 $d_n\le 246$ 인 $n$ 이 무한히 많다.[^2]

증명의 요지. Goldston, Pintz, Yıldırım 은 Selberg 가중의 제곱 $\Lambda_R(n)^2$ 을 직관 절의 부등식에 넣고 두 합을 계산했다. 소수를 세는 쪽 합의 평가에 등차수열의 소수 개수가 들어가고, Bombieri–Vinogradov 정리가 다루는 법의 범위 $x^{1/2}$ 에서는 부등식이 간신히 성립하지 않는다. Zhang 은 법을 매끄러운 수로 제한한 판본을 증명해 범위를 $1/2$ 보다 조금 넘겼다. Maynard 와 Tao 는 가중을 $k$ 변수 함수로 바꿔, $1/2$ 범위만으로도 부등식이 성립하게 했다.

**정리.** 임의의 $m$ 에 대해 $\liminf\_{n\to\infty}(p\_{n+m}-p_n)\lt\infty$ 다.[^2]

Maynard 와 Tao 의 다변수 가중은 괄호 안의 $-1$ 을 $-m$ 으로 바꿔도 부등식을 유지한다.

## 체 방법의 한계

$k=2$ 로 두고 위 논증을 돌리면 쌍둥이 소수의 무한성이 나올 것처럼 보이지만 나오지 않는다. 체 조건만으로는 소인수의 개수가 짝수인 수와 홀수인 수를 가르지 못하기 때문이다.[^3]

따라서 유계 간격의 결과는 $k$ 를 충분히 크게 잡아 간격의 상한을 얻는 데서 멈춘다.

# 활용

- **쌍둥이 소수의 밀도 예측.** $\mathcal H=\lbrace 0,2\rbrace$ 의 특이급수가 쌍둥이 소수 상수이고, Hardy–Littlewood 추측이 주는 점근값이 [체 방법](sieve-methods.md)의 Brun 상한과 같은 크기다.
- **Bombieri–Vinogradov 정리의 범위.** 유계 간격의 상한이 법의 범위 $\theta$ 에 단조로 의존하므로, Elliott–Halberstam 추측이 성립하면 상한이 $6$ 으로 내려간다. 큰 체의 결과를 개선하는 동기가 여기서 나온다.
- **소수 계량 함수의 오차.** [Riemann 가설](riemann-hypothesis.md)은 $\pi(x)$ 의 오차에 $x^{1/2}\log x$ 상한을 주지만, 간격에 대해서는 $d_n\ll p_n^{1/2}\log p_n$ 밖에 주지 않는다. Cramér 추측의 $d_n\ll(\log p_n)^2$ 와 차이가 크다.

[^1]: R. A. Rankin, *The difference between consecutive prime numbers*, J. London Math. Soc. **13** (1938), 242–247. 상수 $c$ 를 임의로 키운 것은 K. Ford, B. Green, S. Konyagin, J. Maynard, T. Tao, *Long gaps between primes*, J. Amer. Math. Soc. **31** (2018), 65–105 다.

[^2]: D. A. Goldston, J. Pintz, C. Y. Yıldırım, *Primes in tuples I*, Ann. of Math. **170** (2009), 819–862. Y. Zhang, *Bounded gaps between primes*, Ann. of Math. **179** (2014), 1121–1174. J. Maynard, *Small gaps between primes*, Ann. of Math. **181** (2015), 383–413. 상한 $246$ 과 Elliott–Halberstam 아래의 $6$ 은 D. H. J. Polymath, *Variants of the Selberg sieve, and bounded intervals containing many primes*, Res. Math. Sci. **1** (2014), 12 다.

[^3]: J. Friedlander, H. Iwaniec, *Opera de Cribro*, American Mathematical Society, 2010, 16 장. 패리티 현상이 $k=2$ 에서 결론을 막는 이유를 설명한다.

# 연관 문서

## 선수지식

- [큰 체](large-sieve.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics
