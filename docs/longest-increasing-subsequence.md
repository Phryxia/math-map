# 최장 증가 부분수열

# 개요

**최장 증가 부분수열(longest increasing subsequence)** 은 수열에서 순서를 지키며 고른 항들이 증가하는 부분수열 가운데 가장 긴 것이다. 수열 $3,7,1,8,2,5,9,4,6$ 에서는 $1,2,5,9$ 처럼 길이 $4$ 인 것이 가장 긴데, 항을 고르거나 버리는 후보가 $2^n$ 개라 전부 따져서는 $n=60$ 에서 이미 끝나지 않는다. 각 항에서 끝나는 가장 긴 길이를 앞에서부터 채우면 답이 나오고, 이 계산을 다듬으면 비교 $O(n\log n)$ 번으로 구해진다.

# 직관

수열 $3,7,1,8,2,5,9,4,6$ 에서 증가하는 부분수열을 가장 길게 고른다. 항마다 고르거나 버리므로 후보는 $2^9=512$ 개이고, 항이 $n$ 개이면 $2^n$ 개다. 전부 따져 보는 방법은 $n=60$ 에서 이미 끝나지 않는다.

후보를 끝나는 자리로 묶는다. $i$ 번째 항에서 끝나는 가장 긴 증가 부분수열의 길이를 $L(i)$ 라 하면, 그 부분수열의 바로 앞 항은 $a_j\lt a_i$ 인 $j\lt i$ 가운데 하나다. 그래서 $L(i)=1+\max L(j)$ 이고 $L$ 을 앞에서부터 채우면 답은 $\max_iL(i)$ 다. 위 수열에서 $L=1,2,1,3,2,3,4,3,4$ 이므로 답은 $4$ 이고, $1,2,5,9$ 나 $1,2,4,6$ 이 그런 부분수열이다. 이것은 [동적 계획법](dynamic-programming.md)이고 비교가 $n^2$ 번 든다.

$L(i)$ 를 구할 때마다 앞의 항을 전부 훑는 것이 $n^2$ 의 원인이다. 그런데 길이가 같은 두 부분수열 가운데 끝 항이 작은 쪽만 기억하면 된다. 뒤에 붙일 수 있는 항이 더 많기 때문이다. 길이 $k$ 마다 끝 항의 최솟값 $t_k$ 를 적어 두면 $t_1\lt t_2\lt\cdots$ 이므로, 새 항이 들어갈 자리를 이분 탐색(binary search)으로 찾는다.

위 수열에서 $t$ 는 $(3)$, $(3,7)$, $(1,7)$, $(1,7,8)$, $(1,2,8)$, $(1,2,5)$, $(1,2,5,9)$, $(1,2,4,9)$, $(1,2,4,6)$ 으로 바뀐다. 마지막 $t$ 의 길이 $4$ 가 답이다.

순열에서 그 길이는 RSK(Robinson–Schensted–Knuth) 대응이 주는 Young 도형의 첫 행의 길이와 같고, 무작위 순열에서는 $2\sqrt n$ 근처에 있으며 요동이 [Tracy–Widom 분포](tracy-widom.md)를 따른다.

# 정의

수열 $a_1,\dots,a_n$ 에서 $i_1\lt i_2\lt\cdots\lt i_k$ 이고 $a_{i_1}\lt a_{i_2}\lt\cdots\lt a_{i_k}$ 인 $(a_{i_1},\dots,a_{i_k})$ 를 길이 $k$ 의 **증가 부분수열(increasing subsequence)** 이라 한다. 그 길이의 최댓값을 $\ell(a)$ 로 쓰고, 길이가 $\ell(a)$ 인 증가 부분수열을 최장 증가 부분수열이라 한다. 감소 부분수열과 그 최대 길이 $\ell^-(a)$ 도 같은 방식으로 정의된다.

순열 $\sigma\in S_n$ 은 수열 $\sigma(1),\dots,\sigma(n)$ 으로 보고 $\ell(\sigma)$ 를 정의한다.

# 성질

## 꼬리 배열 알고리즘

직관 절의 $t$ 를 쓰는 알고리즘이다. 새 항 $x$ 가 오면 $t_k\ge x$ 인 가장 작은 $k$ 를 찾아 $t_k$ 를 $x$ 로 바꾸고, 그런 $k$ 가 없으면 $t$ 의 끝에 $x$ 를 붙인다.

```typescript
function lisLength(a: number[]): number {
  const tails: number[] = []; // tails[k] = 길이 k+1 인 증가 부분수열의 끝 항의 최솟값
  for (const x of a) {
    let lo = 0;
    let hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = x;
  }
  return tails.length;
}
```

불변식은 "앞의 항들만 보았을 때 $t_k$ 는 길이 $k$ 인 증가 부분수열의 끝 항의 최솟값이다" 이다. $x$ 는 $t_{k-1}\lt x$ 이므로 길이 $k-1$ 인 부분수열 뒤에 붙어 길이 $k$ 의 끝 항이 되고, $x\le t_k$ 이므로 최솟값을 갱신한다. 다른 $t_j$ 는 바뀌지 않는다. 그래서 끝난 뒤 $t$ 의 길이가 $\ell(a)$ 이고 비교는 $O(n\log n)$ 번이다. 비교만 쓰는 알고리즘은 최악의 경우 $\Omega(n\log n)$ 번의 비교가 필요하다[^1].

각 $x$ 가 놓인 자리 $k$ 가 직관 절의 $L(i)$ 이다. 자리마다 직전 칸의 항을 함께 기록해 두면 최장 증가 부분수열 하나를 거꾸로 따라가 복원한다.

## Erdős–Szekeres 정리

서로 다른 [실수](real-numbers.md) $(r-1)(s-1)+1$ 개의 수열은 길이 $r$ 의 증가 부분수열이나 길이 $s$ 의 감소 부분수열을 가진다. 증명은 [비둘기집 원리](pigeonhole-principle.md) 문서에 있고, 항마다 붙이는 쌍 $(L(i),L^-(i))$ 가 직관 절의 $L$ 과 그 감소 판이다. 따라서 $\ell(a)\thinspace\ell^-(a)\ge n$ 이다.

## Schensted 정리

RSK 대응은 순열 $\sigma\in S_n$ 을 같은 모양 $\lambda\vdash n$ 의 표준 Young 대각표(standard Young tableau) 쌍 $(P,Q)$ 로 보내는 전단사다([Schur 다항식](schur-polynomials.md) 문서의 RSK 대응 절). $P$ 는 $\sigma(1),\dots,\sigma(n)$ 을 차례로 행 삽입(row insertion)해 만든다.

Schensted 정리(Schensted's theorem)는 $\lambda_1=\ell(\sigma)$ 이고 $\lambda'\_1=\ell^-(\sigma)$ 라는 것이다[^2].

행 삽입에서 $P$ 의 첫 행이 받는 갱신은 꼬리 배열 알고리즘의 갱신과 같다. 새 항이 첫 행에서 자신보다 큰 첫 항을 밀어내고, 없으면 끝에 붙는다. 그래서 $P$ 의 첫 행이 마지막 $t$ 이고 그 길이가 $\ell(\sigma)$ 다. 직관 절의 수열을 순위로 바꾼 순열에서 $P$ 의 첫 행은 $1,2,4,6$ 에 해당하는 네 칸이다.

Greene 정리(Greene's theorem)는 이것을 넓혀 $\lambda_1+\cdots+\lambda_k$ 가 서로 겹치지 않는 증가 부분수열 $k$ 개의 길이 합의 최댓값이라고 진술한다.

## 무작위 순열에서의 길이

$\sigma_n$ 을 $S_n$ 에서 균등하게 고른 순열이라 하자. Vershik–Kerov 와 Logan–Shepp 가 $\mathbb E\thinspace\ell(\sigma_n)/\sqrt n\to 2$ 를 증명했다[^3]. RSK 대응으로 $\sigma_n$ 의 모양 $\lambda$ 는 확률 $(f^\lambda)^2/n!$ 로 나오고, 이 분포를 Plancherel 측도(Plancherel measure)라 한다. 여기서 $f^\lambda$ 는 모양 $\lambda$ 의 표준 Young 대각표의 개수다. Young 도형을 $\sqrt n$ 로 줄이면 극한 모양 하나로 수렴하고, 그 첫 행의 길이가 $2$ 다.

요동은 Baik–Deift–Johansson 정리가 정한다[^4].

$$
\frac{\ell(\sigma_n)-2\sqrt n}{n^{1/6}}\thickspace\longrightarrow\thickspace\mathrm{TW}\_2
$$

$\mathrm{TW}\_2$ 는 Gauss 유니터리 앙상블(Gaussian unitary ensemble)의 최대 고윳값의 극한 분포다. 증명은 $n$ 을 Poisson 분포로 무작위화한 뒤 $\Pr(\ell\le k)$ 를 Toeplitz 행렬식으로 적고 그 점근을 Riemann–Hilbert 방법(Riemann–Hilbert method)으로 계산한다.

# 활용

- 정렬에 필요한 이동 횟수. 순열에서 항 하나를 빼서 다른 자리에 넣는 이동으로 정렬하려면 최소 $n-\ell(\sigma)$ 번이 든다. 최장 증가 부분수열의 항은 그대로 두고 나머지를 옮기면 이 횟수가 된다.
- 최장 공통 부분수열. 두 순열 $\sigma,\tau$ 의 최장 공통 부분수열의 길이는 $\ell(\sigma^{-1}\circ\tau)$ 이다. 일반 수열에서도 같은 항끼리의 짝을 나열해 이 문제로 바꾸면 짝이 적을 때 $n^2$ 보다 빠르다.
- [Dilworth 정리](dilworth-theorem.md). 수열을 감소 부분수열로 나눌 때 필요한 최소 개수가 $\ell(a)$ 다. 꼬리 배열 알고리즘에서 $t_k$ 자리에 놓인 항들을 모으면 각 무더기가 감소 부분수열이므로 이 나눔이 실제로 만들어진다.
- 무작위 성장 모형. 단위정사각형에 균등하게 뿌린 점 $n$ 개 가운데 오른쪽 위로 가며 지나는 점의 최대 개수는 $\ell(\sigma_n)$ 과 같은 분포를 가진다. 점을 [Poisson 과정](poisson-process.md)으로 뿌린 판이 Hammersley 과정(Hammersley process)이고, 같은 $\mathrm{TW}\_2$ 극한이 성장 모형의 요동에 나타난다.

[^1]: M. Fredman, On computing the length of longest increasing subsequences, *Discrete Math.* **11** (1975), 29–35.
[^2]: C. Schensted, Longest increasing and decreasing subsequences, *Canad. J. Math.* **13** (1961), 179–191.
[^3]: A. Vershik, S. Kerov, Asymptotics of the Plancherel measure of the symmetric group and the limiting form of Young tableaux, *Soviet Math. Dokl.* **18** (1977), 527–531. B. Logan, L. Shepp, A variational problem for random Young tableaux, *Adv. Math.* **26** (1977), 206–222.
[^4]: J. Baik, P. Deift, K. Johansson, On the distribution of the length of the longest increasing subsequence of random permutations, *J. Amer. Math. Soc.* **12** (1999), 1119–1178. 개관은 D. Romik, *The Surprising Mathematics of Longest Increasing Subsequences*, Cambridge University Press (2015).

# 연관 문서

## 선수지식

- [동적 계획법](dynamic-programming.md)
- [Schur 다항식](schur-polynomials.md)
- [Tracy–Widom 분포](tracy-widom.md)

## 더 알아보기

- [KPZ 보편성류](kpz-universality.md)

#combinatorics #algorithms #probability
