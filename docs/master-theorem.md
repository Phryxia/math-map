# 마스터 정리

# 개요

**마스터 정리(master theorem)** 는 크기 $n$ 인 문제를 크기 $n/b$ 인 문제 $a$ 개로 나누고 나누기와 합치기에 $f(n)$ 을 쓰는 분할 정복(divide and conquer) 알고리즘의 실행 시간 $T(n)=aT(n/b)+f(n)$ 을 $f(n)$ 과 $n^{\log_b a}$ 의 크기 비교만으로 정하는 정리다. Bentley, Haken, Saxe 가 1980 년에 이 꼴로 정리했다[^1].

[비교 정렬](comparison-sorting.md)의 병합 정렬은 $a=b=2$, $f(n)=n$ 인 경우이고, 그 문서의 $n\log_2 n$ 상한이 이 정리의 둘째 경우로 나온다.

# 직관

병합 정렬은 $n$ 장의 카드를 반으로 나눠 두 더미를 따로 정렬하고, 두 더미를 합치는 데 $n$ 번 일한다. 나누기를 그림으로 그리면 맨 위에 더미 하나, 그 아래 반 크기 더미 둘, 그 아래 $4$ 분의 $1$ 크기 더미 넷이 놓인다. 층마다 더미 크기를 모두 더하면 $n$ 이므로 층마다 합치는 일도 $n$ 이다. 층은 $\log_2 n$ 개이므로 전체 일은 $n\log_2 n$ 이다.

같은 그림에서 더미를 반 크기 셋으로 나누면 층마다 더미 수가 세 배가 되고 크기는 반이 된다. 아래로 한 층 내려갈 때마다 층의 일이 $3/2$ 배로 늘어, 맨 아래 층이 전체를 정한다. 맨 아래 층의 더미 수는 $3^{\log_2 n}=n^{\log_2 3}$ 이다.

반대로 합치는 일이 $n^2$ 이고 반 크기 둘로 나누면 한 층 내려갈 때마다 층의 일이 $2\cdot(1/2)^2=1/2$ 배로 준다. 이때는 맨 위 층의 일 $n^2$ 이 전체를 정한다.

세 경우 모두 층의 일이 한 층마다 몇 배가 되는지로 갈린다. 그 배수가 $1$ 이면 층의 수가 곱해지고, $1$ 보다 크면 맨 아래 층이, $1$ 보다 작으면 맨 위 층이 전체를 정한다.

# 정의

## 분할 정복 점화식

**분할 정복 점화식(divide-and-conquer recurrence)** 은 다음 꼴의 점화식(recurrence)이다.

$$
T(n)=aT(n/b)+f(n),\qquad a\ge 1,\quad b\gt 1
$$

$a$ 는 부분 문제의 수, $n/b$ 는 부분 문제의 크기, $f(n)$ 은 나누기와 합치기에 드는 비용이다. $n$ 이 작을 때 $T(n)$ 은 상수다. $n/b$ 가 정수가 아니면 $\lceil n/b\rceil$ 이나 $\lfloor n/b\rfloor$ 로 읽고, 아래 결론은 그대로다[^2].

## 재귀 트리

**재귀 트리(recursion tree)** 는 점화식을 펼친 트리다. 뿌리는 크기 $n$ 인 문제이고 비용 $f(n)$ 이 붙는다. 크기 $m$ 인 마디의 자식은 크기 $m/b$ 인 마디 $a$ 개다. 깊이 $j$ 에는 마디가 $a^j$ 개 있고 각각 크기가 $n/b^j$ 이므로 깊이 $j$ 의 비용은 $a^jf(n/b^j)$ 다. 깊이는 $\log_b n$ 이고 잎은 $a^{\log_b n}=n^{\log_b a}$ 개다. 따라서 다음이 성립한다.

$$
T(n)=\Theta\left(n^{\log_b a}\right)+\sum_{j=0}^{\log_b n-1}a^jf(n/b^j)
$$

지수 $\log_b a$ 를 **임계 지수(critical exponent)** 라 한다.

# 성질

## 마스터 정리

정리. $T(n)=aT(n/b)+f(n)$ 이고 $p=\log_b a$ 일 때 다음이 성립한다[^1][^2].

1. 어떤 $\varepsilon\gt 0$ 에 대해 $f(n)=O(n^{p-\varepsilon})$ 이면 $T(n)=\Theta(n^p)$ 다.
2. 어떤 $k\ge 0$ 에 대해 $f(n)=\Theta(n^p\log^k n)$ 이면 $T(n)=\Theta(n^p\log^{k+1}n)$ 이다.
3. 어떤 $\varepsilon\gt 0$ 에 대해 $f(n)=\Omega(n^{p+\varepsilon})$ 이고, 어떤 $c\lt 1$ 과 충분히 큰 모든 $n$ 에 대해 $af(n/b)\le cf(n)$ 이면 $T(n)=\Theta(f(n))$ 이다.

셋째 경우의 부등식 $af(n/b)\le cf(n)$ 을 **정칙성 조건(regularity condition)** 이라 한다.

증명의 요지. 재귀 트리의 합에서 깊이 $j$ 의 비용과 잎의 비용의 비를 본다. 첫째 경우 $a^jf(n/b^j)\le Ca^j(n/b^j)^{p-\varepsilon}=Cn^{p-\varepsilon}b^{\varepsilon j}$ 이므로 합은 공비 $b^\varepsilon\gt 1$ 인 등비수열로 위에서 눌리고, 마지막 항이 $O(n^p)$ 다. 둘째 경우 $a^j(n/b^j)^p=n^p$ 이므로 깊이마다 비용이 $\Theta(n^p\log^k(n/b^j))$ 이고, $\log_b n$ 개를 더하면 $\Theta(n^p\log^{k+1}n)$ 이다. 셋째 경우 정칙성 조건을 $j$ 번 쓰면 $a^jf(n/b^j)\le c^jf(n)$ 이므로 합은 공비 $c$ 인 등비수열로 위에서 눌려 $O(f(n))$ 이고, 뿌리의 비용 $f(n)$ 이 아래에서 누른다.

## 세 경우 사이의 틈

세 경우는 $f(n)$ 의 모든 꼴을 덮지 않는다. $f(n)=n^p/\log n$ 은 첫째 경우의 $n^{p-\varepsilon}$ 보다 크고 둘째 경우의 $k\ge 0$ 꼴에 들지 않는다. 이때 깊이 $j$ 의 비용은 $n^p/\log_b(n/b^j)$ 에 비례하고, $\log_b n-j$ 를 $1$ 부터 $\log_b n$ 까지 더하면 조화수가 나와 $T(n)=\Theta(n^p\log\log n)$ 이다. $T(n)=2T(n/2)+n/\log n$ 이 그 예다.

## Akra–Bazzi 정리

부분 문제의 크기가 서로 다른 점화식은 **Akra–Bazzi 정리(Akra–Bazzi theorem)** 가 다룬다[^3]. $T(n)=\sum_{i=1}^{k}a_iT(b_in)+g(n)$ 이고 $a_i\gt 0$, $0\lt b_i\lt 1$ 이며 $g$ 가 다항식 정도로 자라면, $\sum_{i=1}^{k}a_ib_i^{\thinspace q}=1$ 인 실수 $q$ 에 대해 다음이 성립한다.

$$
T(n)=\Theta\left(n^q\left(1+\int_1^n\frac{g(u)}{u^{q+1}}\thinspace du\right)\right)
$$

$k=1$, $a_1=a$, $b_1=1/b$ 이면 $q=\log_b a$ 이고 마스터 정리의 세 경우가 다시 나온다.

# 활용

- [이진 탐색](binary-search.md)은 $T(n)=T(n/2)+O(1)$ 이다. $p=\log_2 1=0$ 이고 둘째 경우의 $k=0$ 이므로 $T(n)=\Theta(\log n)$ 이다.
- 병합 정렬과 [고속 Fourier 변환](fft.md)의 기수 2 Cooley–Tukey 알고리즘은 $T(n)=2T(n/2)+\Theta(n)$ 이다. $p=1$ 이고 둘째 경우이므로 $T(n)=\Theta(n\log n)$ 이다.
- [Karatsuba 곱셈](karatsuba-multiplication.md)은 $n$ 자리 정수 두 개의 곱을 $n/2$ 자리 곱 세 번과 덧셈으로 구한다[^4]. $T(n)=3T(n/2)+\Theta(n)$ 이고 $p=\log_2 3\approx 1.585$ 이므로 첫째 경우에서 $T(n)=\Theta(n^{\log_2 3})$ 이다.
- Strassen 알고리즘(Strassen algorithm)은 $n\times n$ 행렬의 곱을 $n/2$ 크기 행렬 곱 일곱 번과 행렬 덧셈으로 구한다[^5]. $T(n)=7T(n/2)+\Theta(n^2)$ 이고 $p=\log_2 7\approx 2.807$ 이므로 첫째 경우에서 $T(n)=\Theta(n^{\log_2 7})$ 이다.
- [선택 알고리즘](selection-algorithm.md)의 중앙값의 중앙값 방법은 $T(n)\le T(n/5)+T(7n/10)+an$ 을 만족한다. 부분 문제의 크기가 둘이므로 Akra–Bazzi 정리를 쓴다. $(1/5)^q+(7/10)^q=1$ 의 해는 $q\lt 1$ 이고 적분이 $\Theta(n^{1-q})$ 이므로 $T(n)=\Theta(n)$ 이다.

[^1]: J. L. Bentley, D. Haken, J. B. Saxe, "A general method for solving divide-and-conquer recurrences", ACM SIGACT News 12 (3) (1980), 36–44.
[^2]: T. H. Cormen, C. E. Leiserson, R. L. Rivest, C. Stein, *Introduction to Algorithms*, 3rd ed., MIT Press, 2009, §4.5–4.6.
[^3]: M. Akra, L. Bazzi, "On the solution of linear recurrence equations", Computational Optimization and Applications 10 (1998), 195–210.
[^4]: A. Karatsuba, Yu. Ofman, "Multiplication of many-digital numbers by automatic computers", Doklady Akad. Nauk SSSR 145 (1962), 293–294.
[^5]: V. Strassen, "Gaussian elimination is not optimal", Numerische Mathematik 13 (1969), 354–356.

# 연관 문서

## 선수지식

- [비교 정렬](comparison-sorting.md)

## 더 알아보기

- [Karatsuba 곱셈](karatsuba-multiplication.md)

#algorithms #complexity #analysis
