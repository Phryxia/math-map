# Clifford–Clifford 알고리즘

# 개요

**Clifford–Clifford 알고리즘(Clifford–Clifford algorithm)** 은 [보손 표본추출](boson-sampling.md)의 출력 배치를 고전 컴퓨터로 정확한 분포에 따라 뽑는 절차다. 광자 $20$ 개를 모드 $400$ 개의 회로에 넣으면 나올 수 있는 출력 배치가 $10^{33}$ 개를 넘어서, 배치마다 확률을 계산해 표를 만들 수 없다. 이 알고리즘은 광자를 한 개씩 차례로 출구에 놓고, 매번 출구 $400$ 개의 확률만 계산해 표본 하나를 얻는다.

# 직관

보손 표본추출 문서의 반투명 거울에 광자 두 개를 넣는다. 출력 배치는 $(2,0)$, $(1,1)$, $(0,2)$ 셋이고 [영구식](permanent.md) 공식으로 확률을 계산하면 $\tfrac12$, $0$, $\tfrac12$ 이다. 이 표에서 하나를 뽑으면 표본이 나온다. 광자가 $20$ 개, 모드가 $400$ 개이면 표의 칸이 $10^{33}$ 개를 넘고 칸마다 $20\times 20$ 영구식을 계산해야 하므로 이 방법은 쓸 수 없다.

배치 전체를 한 번에 뽑는 대신 광자를 하나씩 출구에 놓는다. 첫 광자의 출구를 뽑고, 그 출구가 정해진 조건에서 둘째 광자의 출구를 뽑는다. 첫 광자가 출구 $i$ 로 갈 확률을 얻으려면 나머지 광자의 출구를 전부 더해야 하므로 다시 모든 배치를 더하는 문제처럼 보인다.

회로 행렬의 열은 서로 직교하고 길이가 $1$ 이어서 이 합이 줄어든다. 첫 광자가 출구 $i$ 로 갈 확률은 입구 $n$ 개 각각에서 출구 $i$ 로 가는 확률 $\vert U_{ic}\vert^2$ 의 평균이다. 그래서 입구 하나를 무작위로 고르고 그 입구의 광자가 어느 출구로 가는지 뽑으면 이 분포가 나온다.

반투명 거울에서 입구 1 을 골랐다고 하자. 첫 광자는 출구 1 과 2 로 확률 $\tfrac12$ 씩 가고, 출구 1 이 나왔다고 하자. 둘째 광자는 두 입구를 모두 쓴다. 출구 $i$ 의 무게는 행이 (출구 1, 출구 $i$), 열이 (입구 1, 입구 2) 인 $2\times 2$ 행렬의 영구식의 절댓값 제곱이다.

$$
\Big\vert\tfrac1{\sqrt2}\cdot\tfrac1{\sqrt2}+\tfrac1{\sqrt2}\cdot\tfrac1{\sqrt2}\Big\vert^2=1,\qquad
\Big\vert\tfrac1{\sqrt2}\cdot\big({-\tfrac1{\sqrt2}}\big)+\tfrac1{\sqrt2}\cdot\tfrac1{\sqrt2}\Big\vert^2=0
$$

둘째 광자도 출구 1 로 가고 표본은 $(2,0)$ 이다. 두 광자가 늘 같은 출구로 나온다는 보손 표본추출 문서의 결과와 맞는다. 각 단계에서 계산한 것은 출구마다의 무게 하나씩뿐이다.

# 정의

## 순서 있는 출력

모드 $m$ 개, 광자 $n$ 개의 회로 $U$ 에서 처음 $n$ 개 열로 된 $m\times n$ 행렬을 $A$ 라 한다. 행 번호의 열 $R=(r_1,\dots,r_k)$ 와 열 번호의 열 $C=(c_1,\dots,c_k)$ 에 대해, $(a,b)$ 성분이 $A_{r_a c_b}$ 인 $k\times k$ 행렬을 $A\lbrack R,C\rbrack$ 로 적는다. 행 번호는 되풀이될 수 있다.

길이 $n$ 인 열 $r=(r_1,\dots,r_n)\in\lbrace 1,\dots,m\rbrace^n$ 을 **순서 있는 출력(ordered output)** 이라 하고, 그 확률을 다음으로 둔다.

$$
q(r)=\frac{1}{n!}\big\vert\mathrm{perm}\thinspace A\lbrack r,(1,\dots,n)\rbrack\big\vert^2
$$

$r$ 에서 순서를 잊고 모드 $j$ 가 나온 횟수를 $s_j$ 로 세면 출력 배치 $s$ 가 된다. 반투명 거울에서 $q(1,1)=\tfrac12\vert\tfrac12+\tfrac12\vert^2=\tfrac12$ 이고 $q(1,2)=\tfrac12\vert{-\tfrac12}+\tfrac12\vert^2=0$ 이다.

## 알고리즘

Clifford–Clifford 알고리즘은 다음 절차다[^1].

1. 열 번호 $1,\dots,n$ 의 순열 $\alpha$ 를 고르게 무작위로 고른다.
2. $k=1,\dots,n$ 에 대해, 출구 $i$ 마다 다음 무게 $w_i$ 를 계산하고, $w_i$ 에 비례하는 확률로 $r_k$ 를 뽑는다.

   $$
   w_i=\big\vert\mathrm{perm}\thinspace A\lbrack(r_1,\dots,r_{k-1},i),(\alpha_1,\dots,\alpha_k)\rbrack\big\vert^2
   $$

3. $r$ 의 순서를 잊은 출력 배치 $s$ 를 낸다.

직관 절의 계산은 $\alpha=(1,2)$ 이고 $r=(1,1)$ 이 나온 경우다. 무게는 영구식을 마지막 행으로 전개해 계산한다.

$$
\mathrm{perm}\thinspace A\lbrack(r_1,\dots,r_{k-1},i),(\alpha_1,\dots,\alpha_k)\rbrack=\sum_{l=1}^{k}A_{i\alpha_l}\thinspace P_l
$$

$P_l$ 은 행 $(r_1,\dots,r_{k-1})$, 열 $(\alpha_1,\dots,\alpha_k)$ 에서 $\alpha_l$ 을 뺀 $(k-1)\times(k-1)$ 행렬의 영구식이다. $P_1,\dots,P_k$ 는 $i$ 와 무관하므로 단계마다 한 번만 계산한다.

```javascript
// A: m×n 복소 행렬(회로 행렬의 처음 n 열). 곱과 합은 복소수 연산이다.
function cliffordClifford(A, m, n) {
  const alpha = randomPermutation(n); // 열 번호의 무작위 순열
  const r = [];
  for (let k = 1; k <= n; k++) {
    const cols = alpha.slice(0, k);
    // P[l] = perm A[r, cols 에서 l 번째를 뺀 열]. k = 1 이면 P = [1]
    const P = laplaceSubPermanents(A, r, cols);
    const w = [];
    for (let i = 0; i < m; i++) {
      let amp = 0;
      for (let l = 0; l < k; l++) amp += A[i][cols[l]] * P[l];
      w.push(abs2(amp));
    }
    r.push(sampleProportional(w)); // w 에 비례하는 확률로 출구 하나
  }
  const s = new Array(m).fill(0);
  for (const j of r) s[j] += 1;
  return s;
}
```

# 성질

## 주변확률 공식

순서 있는 출력의 앞 $k$ 개가 $(r_1,\dots,r_k)$ 일 확률은 다음과 같다[^1].

$$
\sum_{r_{k+1},\dots,r_n}q(r)=\frac{(n-k)!}{n!}\sum_{\substack{C\subseteq\lbrace 1,\dots,n\rbrace\cr \vert C\vert=k}}\big\vert\mathrm{perm}\thinspace A\lbrack(r_1,\dots,r_k),C\rbrack\big\vert^2
$$

증명의 요지. 영구식을 앞 $k$ 개 행으로 전개하면 $\mathrm{perm}\thinspace A\lbrack r,(1,\dots,n)\rbrack$ 은 크기 $k$ 인 열 집합 $C$ 마다 앞 행 쪽 영구식과 나머지 행 쪽 영구식을 곱한 항의 합이다. $A$ 의 열이 정규직교이므로 $\sum_i\overline{A_{ic}}A_{ic'}$ 은 $c=c'$ 일 때 $1$ 이고 아니면 $0$ 이다. 그래서 나머지 행 $r_{k+1},\dots,r_n$ 에 대해 절댓값 제곱을 더하면 서로 다른 $C$ 의 곱항이 사라지고, 같은 $C$ 의 항마다 $(n-k)!$ 이 남는다.

크기 $k$ 인 열 집합은 $\binom nk$ 개이므로, 우변은 무작위로 고른 열 집합 $C$ 에 대한 $\vert\mathrm{perm}\thinspace A\lbrack(r_1,\dots,r_k),C\rbrack\vert^2/k!$ 의 기댓값이다. $k=1$ 이면 직관 절의 "입구 $n$ 개에서 출구 $i$ 로 가는 확률의 평균" 이다.

## 정확성

Clifford–Clifford 알고리즘이 내는 출력 배치 $s$ 의 분포는 보손 표본추출의 분포 $\vert\mathrm{perm}\thinspace U_s\vert^2/(s_1!\cdots s_m!)$ 과 같다[^1].

증명의 요지. 열 집합 $S_k=\lbrace\alpha_1,\dots,\alpha_k\rbrace$ 에 대해 $W_k=\vert\mathrm{perm}\thinspace A\lbrack(r_1,\dots,r_k),S_k\rbrack\vert^2$ 이라 한다. 단계 $k$ 의 무게 합 $Z_k=\sum_iw_i$ 는 주변확률 공식과 같은 직교성으로 $S_k$ 에서 열 하나를 뺀 $k$ 개 집합에 대한 $\vert\mathrm{perm}\vert^2$ 의 합이 되고, 집합 $S_k$ 에만 의존한다. 그러므로 $\alpha$ 가 주어졌을 때 순서 있는 출력 $r$ 이 나올 확률은 $\prod_kW_k/Z_k$ 다.

$S_k$ 가 정해지면 $S_{k-1}$ 은 그 안의 크기 $k-1$ 인 부분집합 가운데 고르게 무작위이므로 $W_{k-1}$ 의 조건부 기댓값은 $Z_k/k$ 다. $k=2$ 부터 차례로 이 기댓값을 취하면 $\alpha$ 에 대한 평균이 $W_n/n!=q(r)$ 이 된다. 마지막으로 출력 배치 $s$ 를 주는 순서 있는 출력은 $n!/(s_1!\cdots s_m!)$ 개이고 모두 $\mathrm{perm}\thinspace A\lbrack r,(1,\dots,n)\rbrack=\mathrm{perm}\thinspace U_s$ 이므로, 이들의 $q(r)$ 을 더하면 보손 표본추출의 확률이 나온다.

## 계산 시간

단계 $k$ 에서 $P_1,\dots,P_k$ 를 모두 계산하는 데 Ryser 공식(Ryser formula)과 같은 Gray 부호(Gray code) 순서의 갱신으로 $O(k2^k)$ 번의 연산이 든다[^1]. 무게 $w_1,\dots,w_m$ 은 $O(mk)$ 번에 나온다. 단계를 모두 더하면 표본 하나의 비용은 다음과 같다.

$$
\sum_{k=1}^{n}O(k2^k+mk)=O(n2^n+mn^2)
$$

$\sum_kk2^k$ 은 $2n2^n$ 보다 작으므로, 표본 하나를 뽑는 비용은 $n\times n$ 영구식 두 개를 Ryser 공식으로 계산하는 비용과 같은 규모다.

# 활용

- 양자 우위 실험의 기준. 보손 표본추출 실험이 고전 계산보다 빠르다고 하려면, 광자 수 $n$ 에서 $n2^n$ 번의 연산이 고전 컴퓨터로 감당하기 어려운 규모여야 한다. 광자 수가 수십 개를 넘어야 고전 계산과의 차이가 실험으로 드러나는 것이 이 비용 때문이다.
- 표본추출과 확률 계산의 비교. 보손 표본추출의 정확한 표본 하나는 출력 확률 하나를 계산하는 것과 같은 규모의 시간에 나온다. 정확한 표본추출이 어렵다는 Aaronson–Arkhipov 정리(Aaronson–Arkhipov theorem)의 근거가 영구식 계산의 어려움인 것과 맞는다.
- 모드 수가 광자 수에 비례하는 경우. 출력에 같은 모드가 되풀이되면 영구식의 같은 행이 겹치는 것을 써서, $m=n$ 일 때 평균 시간을 $O(n\thinspace 1.69^n)$ 으로 줄인 판본이 있다[^2].

[^1]: P. Clifford, R. Clifford, The classical complexity of boson sampling, *Proceedings of the 29th Annual ACM-SIAM Symposium on Discrete Algorithms* (2018), 146–155.
[^2]: P. Clifford, R. Clifford, Faster classical boson sampling, arXiv:2005.04214 (2020).

# 연관 문서

## 선수지식

- [보손 표본추출](boson-sampling.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #computation #linear_algebra
