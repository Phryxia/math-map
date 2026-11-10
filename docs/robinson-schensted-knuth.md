# Robinson–Schensted–Knuth 대응

# 개요

**Robinson–Schensted–Knuth 대응(Robinson–Schensted–Knuth correspondence, RSK)** 은 순열 하나를 같은 모양의 표준 Young 대각표 두 개로 바꾸고, 그 두 대각표에서 순열을 다시 되찾는 규칙이다. 카드 다섯 장이 $3,1,4,2,5$ 순서로 놓였을 때, 왼쪽에서 오른쪽으로 골라 커지는 카드를 가장 많이 고르는 문제와 줄어드는 카드를 가장 많이 고르는 문제를 함께 푼다고 하자. 카드를 차례로 대각표에 끼워 넣으면 모양 $(3,2)$ 가 나오고, 첫 행의 길이 $3$ 과 첫 열의 길이 $2$ 가 두 답이다.

# 직관

$3,1,4,2,5$ 의 카드를 한 장씩 집어 줄에 놓는다. 첫 줄에 놓을 때는 그 카드보다 큰 카드 가운데 가장 왼쪽 것을 빼고 그 자리에 놓으며, 큰 카드가 없으면 줄 끝에 놓는다. 뺀 카드는 같은 규칙으로 다음 줄에 놓는다.

- $3$: 첫 줄이 $3$ 이다.
- $1$: $3$ 을 빼고 $1$ 을 놓는다. $3$ 은 둘째 줄로 간다. 줄은 $1$ 과 $3$ 이다.
- $4$: 첫 줄 끝에 붙는다. 줄은 $1,4$ 와 $3$ 이다.
- $2$: 첫 줄에서 $4$ 를 빼고 $2$ 를 놓는다. $4$ 는 둘째 줄 끝에 붙는다. 줄은 $1,2$ 와 $3,4$ 다.
- $5$: 첫 줄 끝에 붙는다. 줄은 $1,2,5$ 와 $3,4$ 다.

줄마다 수가 왼쪽에서 오른쪽으로 커지고, 열마다 위에서 아래로 커진다. 첫 줄의 길이 $3$ 은 가장 길게 커지는 부분수열 $3,4,5$ 의 길이이고, 첫 열의 길이 $2$ 는 가장 길게 줄어드는 부분수열 $3,1$ 의 길이다.

줄만 남기면 카드 순서를 되찾을 수 없다. 그래서 $k$ 번째 카드를 놓았을 때 새로 생긴 칸에 $k$ 를 적은 두 번째 표를 함께 만든다. 위 과정에서 새 칸은 $1$ 행 $1$ 열, $2$ 행 $1$ 열, $1$ 행 $2$ 열, $2$ 행 $2$ 열, $1$ 행 $3$ 열의 순서로 생겼으므로 두 번째 표는 첫 줄 $1,3,5$, 둘째 줄 $2,4$ 다. 두 표가 있으면 마지막 카드부터 과정을 거꾸로 밟아 순열이 나온다.

# 정의

## 행 삽입

[Schur 다항식](schur-polynomials.md) 문서의 대각표에서 각 행이 약증가하고 각 열이 강증가한 것을 이 문서에서 대각표라 한다. 대각표 $P$ 와 수 $x$ 에 대해 **행 삽입(row insertion)** $P\leftarrow x$ 는 다음 절차로 얻는 대각표다. 첫 행에서 $x$ 보다 큰 수 가운데 가장 왼쪽 것 $y$ 를 $x$ 로 바꾸고 $y$ 를 둘째 행에 같은 방식으로 넣는다. 넣을 행에 $x$ 보다 큰 수가 없으면 $x$ 를 그 행 끝에 붙이고 끝낸다. 직관 절에서 첫 행 $1,4$ 와 둘째 행 $3$ 으로 된 대각표에 $2$ 를 넣으면 첫 행 $1,2$ 와 둘째 행 $3,4$ 가 된다.

```javascript
// P: 행의 배열. 각 행은 약증가하는 수의 배열이다.
// 반환값: 새 칸이 생긴 행 번호
function rowInsert(P, x) {
  for (let r = 0; ; r++) {
    if (r === P.length) { P.push([x]); return r; }
    const row = P[r];
    const k = row.findIndex((y) => y > x);
    if (k === -1) { row.push(x); return r; }
    [row[k], x] = [x, row[k]]; // 밀려난 수를 다음 행에 넣는다
  }
}
```

## Robinson–Schensted 대응

순열 $\sigma\in S_n$ 에 대해 빈 대각표에서 시작해 $\sigma(1),\dots,\sigma(n)$ 을 차례로 행 삽입한 결과를 $P(\sigma)$ 라 하고 삽입 대각표(insertion tableau)라 한다. $k$ 번째 삽입에서 새로 생긴 칸에 $k$ 를 적은 표를 $Q(\sigma)$ 라 하고 기록 대각표(recording tableau)라 한다. 두 표는 같은 모양 $\lambda\vdash n$ 의 표준 Young 대각표다. **Robinson–Schensted 대응** 은 $\sigma\mapsto(P(\sigma),Q(\sigma))$ 다[^1]. 직관 절의 $\sigma=31425$ 에서는 다음과 같다.

$$
P(\sigma)=\begin{matrix}1&2&5\cr 3&4&\end{matrix}\qquad Q(\sigma)=\begin{matrix}1&3&5\cr 2&4&\end{matrix}
$$

## Knuth 의 확장

Knuth 는 순열 대신 음이 아닌 정수 행렬을 받도록 넓혔다[^2]. 행렬 $A=(a\_{ij})$ 에서 쌍 $(i,j)$ 를 $a\_{ij}$ 번씩 쓰고 $i$ 의 순서로, $i$ 가 같으면 $j$ 의 순서로 늘어놓는다. $j$ 를 차례로 행 삽입해 $P$ 를 만들고, 새 칸에 그때의 $i$ 를 적어 $Q$ 를 만든다.

$P$ 와 $Q$ 는 같은 모양의 반표준 Young 대각표(semistandard Young tableau)다. $a\_{11}=a\_{12}=a\_{22}=1$, $a\_{21}=0$ 이면 쌍은 $(1,1),(1,2),(2,2)$ 이고, $1,2,2$ 를 넣어 $P$ 의 한 행 $1,2,2$ 와 $Q$ 의 한 행 $1,1,2$ 가 나온다.

# 성질

## 전단사

Robinson–Schensted 대응은 $S_n$ 에서 같은 모양의 표준 Young 대각표 쌍 전체로 가는 전단사다. 증명의 요지. $Q$ 에서 $n$ 이 있는 칸은 마지막 삽입이 끝난 칸이고 모서리다. $P$ 의 그 칸에 있는 수를 빼서 윗행에서 그보다 작은 수 가운데 가장 오른쪽 것과 바꾸기를 첫 행까지 되풀이하면 마지막으로 첫 행에서 밀려난 수가 $\sigma(n)$ 이다. 이 역 삽입을 $n-1,\dots,1$ 에 차례로 하면 $\sigma$ 가 나온다.

$n=3$ 에서 모양별 표준 대각표 수는 $f^{(3)}=1$, $f^{(2,1)}=2$, $f^{(1,1,1)}=1$ 이고 쌍의 수는 $1+4+1=6=3!$ 이다. 일반적으로 $\sum_{\lambda\vdash n}(f^\lambda)^2=n!$ 이고, $f^\lambda$ 는 [갈고리 길이 공식](hook-length-formula.md)으로 계산된다.

## 역순열과 대칭성

$\sigma^{-1}$ 의 두 대각표는 $\sigma$ 의 두 대각표를 맞바꾼 것이다[^3].

$$
P(\sigma^{-1})=Q(\sigma),\qquad Q(\sigma^{-1})=P(\sigma)
$$

$\sigma=31425$ 이면 $\sigma^{-1}=24135$ 이고, $2,4,1,3,5$ 를 넣으면 $P$ 는 첫 행 $1,3,5$, 둘째 행 $2,4$ 로 $Q(\sigma)$ 와 같다. 따라서 $\sigma=\sigma^{-1}$ 인 순열, 곧 대합(involution)은 $P=Q$ 인 것과 동치이고, $S_n$ 의 대합 수는 $\sum_\lambda f^\lambda$ 다. $n=3$ 이면 항등순열과 호환 셋으로 $4=1+2+1$ 이다.

## Schensted 정리

$P(\sigma)$ 의 첫 행의 길이는 $\sigma(1),\dots,\sigma(n)$ 의 가장 긴 증가 부분수열의 길이이고, 첫 열의 길이는 가장 긴 감소 부분수열의 길이다. 이것이 Schensted 정리(Schensted's theorem)다[^4]. 첫 행만 보면 행 삽입은 새 수보다 큰 첫 수를 바꾸거나 끝에 붙이는 일이고, 첫 행의 $k$ 번째 수는 지금까지 본 길이 $k$ 의 증가 부분수열의 끝값 가운데 가장 작은 것이다.

## Cauchy 항등식

Knuth 의 확장은 행렬과 같은 모양의 반표준 대각표 쌍 사이의 전단사이고, 행렬 $A$ 의 행 합이 $Q$ 의 내용, 열 합이 $P$ 의 내용이 된다. 무게를 세면 Schur 다항식의 Cauchy 항등식(Cauchy identity)이 나온다.

$$
\sum_\lambda s_\lambda(x_1,\dots,x_m)\thinspace s_\lambda(y_1,\dots,y_k)=\prod_{i=1}^{m}\prod_{j=1}^{k}\frac1{1-x_iy_j}
$$

우변의 $x_iy_j$ 의 지수가 $a\_{ij}$ 이고, 좌변의 $s_\lambda(y)$ 가 $P$, $s_\lambda(x)$ 가 $Q$ 의 무게 합이다.

# 활용

- [최장 증가 부분수열](longest-increasing-subsequence.md). Schensted 정리로 증가 부분수열의 최대 길이가 대각표 모양의 첫 행이다. 균등하게 고른 순열의 모양은 확률 $(f^\lambda)^2/n!$ 로 나오고, 최대 길이의 점근 거동은 이 분포의 극한 모양에서 구한다.
- [대칭군](symmetric-groups.md)의 표현. $S_n$ 의 기약표현의 차원이 $f^\lambda$ 이므로 $\sum(f^\lambda)^2=n!$ 은 정칙표현의 분해를 세는 등식이고, 이 대응이 그 조합적 증명이다.
- Schur 다항식의 곱셈. 대각표 두 개를 이어 삽입하는 연산이 Schur 다항식의 곱에 대응하고, 그 전개 계수를 세는 규칙이 [Littlewood–Richardson 규칙](littlewood-richardson.md)이다.

[^1]: G. de B. Robinson, On the representations of the symmetric group, *Amer. J. Math.* **60** (1938), 745–760. C. Schensted, Longest increasing and decreasing subsequences, *Canadian J. Math.* **13** (1961), 179–191.
[^2]: D. E. Knuth, Permutations, matrices, and generalized Young tableaux, *Pacific J. Math.* **34** (1970), 709–727.
[^3]: R. Stanley, *Enumerative Combinatorics II* (1999), 7.13 절.
[^4]: C. Schensted, Longest increasing and decreasing subsequences, *Canadian J. Math.* **13** (1961), 179–191.

# 연관 문서

## 선수지식

- [Schur 다항식](schur-polynomials.md)

## 더 알아보기

- [최장 증가 부분수열](longest-increasing-subsequence.md)
- [Plancherel 측도](plancherel-measure.md)

#combinatorics #algorithms #algebra
