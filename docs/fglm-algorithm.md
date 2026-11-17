# FGLM 알고리즘

# 개요

**FGLM 알고리즘(Faugère–Gianni–Lazard–Mora algorithm)** 은 해가 유한 개인 연립 다항식의 [Gröbner 기저](groebner-bases.md)를 한 단항식 순서에서 다른 순서로 바꾸는 알고리즘이다. 연립방정식 $x^2=y$, $y^2=x$ 를 풀려면 $x$ 를 소거한 $y$ 만의 방정식 $y^4=y$ 와 $x=y^2$ 이 필요하고, 이것은 사전식 순서의 Gröbner 기저다. 그런데 사전식 순서의 기저를 직접 계산하면 중간 다항식의 차수가 커져 느리므로, 계산이 빠른 순서의 기저를 먼저 구한다. FGLM 알고리즘은 그 기저로 나머지를 계산해 단항식들 사이의 일차 관계를 찾는 일차대수만으로 사전식 기저를 얻는다.

# 직관

$S=\mathbb Q\lbrack x,y\rbrack$ 에서 $I=(x^2-y,\thinspace y^2-x)$ 라 한다. 전체 차수가 큰 단항식을 먼저 크게 두는 차수 역사전식 순서(graded reverse lexicographic order)에서 $\lbrace x^2-y,\thinspace y^2-x\rbrace$ 는 이미 Gröbner 기저이고, 선두항 $x^2$, $y^2$ 로 나누어떨어지지 않는 단항식 $1,x,y,xy$ 가 [0 차원 아이디얼](zero-dimensional-ideals.md)의 몫 $S/I$ 의 기저다. 어떤 다항식이든 이 기저로 나눈 나머지는 $1,x,y,xy$ 의 일차결합으로 계산된다.

사전식 순서 $x\gt y$ 에서 작은 단항식부터 $1,y,y^2,y^3,y^4,\dots$ 의 나머지를 차례로 계산한다. $1$ 과 $y$ 는 그대로이고, $y^2$ 의 나머지는 $x$, $y^3=y\cdot y^2$ 의 나머지는 $xy$ 다. 지금까지 나온 $1,y,x,xy$ 는 일차독립이다.

$y^4=y\cdot y^3$ 의 나머지는 $xy^2\to x\cdot x=x^2\to y$ 이므로 $y$ 다. 이것은 앞에서 나온 $y$ 의 나머지와 같으므로 $y^4-y\in I$ 다. 다음 단항식 $x$ 의 나머지 $x$ 는 $y^2$ 의 나머지와 같으므로 $x-y^2\in I$ 다.

새로 얻은 $\lbrace x-y^2,\thinspace y^4-y\rbrace$ 가 사전식 순서의 Gröbner 기저다. $y^4-y=0$ 에서 $y=0$ 이나 $y^3=1$ 이고, $x=y^2$ 으로 해 네 개가 나온다.

# 정의

$I\subseteq S=k\lbrack x\_1,\dots,x\_n\rbrack$ 이 0 차원 아이디얼이고 $D=\dim\_kS/I$ 라 하자. 단항식 순서 $\lt\_1$ 의 축소 Gröbner 기저 $G\_1$ 이 주어졌을 때, 다음 절차로 순서 $\lt\_2$ 의 축소 Gröbner 기저 $G\_2$ 를 만드는 것을 **FGLM 알고리즘** 이라 한다[^1]. $\mathrm{NF}(m)$ 은 $G\_1$ 으로 나눈 $m$ 의 나머지를 $S/I$ 의 기저에 대한 좌표 벡터로 적은 것이다.

1. 후보 목록을 $\lbrace 1\rbrace$, 계단 기저 $B$ 와 $G\_2$ 를 빈 목록으로 둔다.
2. 후보 가운데 $\lt\_2$ 로 가장 작은 단항식 $m$ 을 꺼낸다. $m$ 이 이미 찾은 $G\_2$ 의 선두항으로 나누어떨어지면 버린다.
3. $\mathrm{NF}(m)$ 이 $\lbrace\mathrm{NF}(b):b\in B\rbrace$ 의 일차결합 $\sum\_bc\_b\mathrm{NF}(b)$ 이면 $m-\sum\_bc\_bb$ 를 $G\_2$ 에 더한다. 아니면 $m$ 을 $B$ 에 더하고 $x\_1m,\dots,x\_nm$ 을 후보에 넣는다.
4. 후보가 비면 멈춘다.

직관 절의 계산은 $\lt\_1$ 이 차수 역사전식 순서, $\lt\_2$ 가 사전식 순서인 경우다. $B=\lbrace 1,y,y^2,y^3\rbrace$ 이고 $G\_2=\lbrace y^4-y,\thinspace x-y^2\rbrace$ 이다.

```javascript
// NF(m): G1 으로 나눈 나머지의 좌표 벡터. solve(vs, v): v 를 vs 의 일차결합으로 쓰는 계수, 없으면 null.
function fglm(NF, vars, lessThan2) {
  const B = [], vecs = [], G2 = [];
  let cands = [ONE];
  while (cands.length > 0) {
    cands.sort(lessThan2);
    const m = cands.shift();
    if (G2.some((g) => divides(leading(g), m)) || B.some((b) => equal(b, m))) continue;
    const v = NF(m);
    const c = solve(vecs, v);
    if (c !== null) G2.push({ lead: m, tail: B.map((b, i) => [c[i], b]) });
    else {
      B.push(m); vecs.push(v);
      for (const x of vars) cands.push(times(x, m));
    }
  }
  return G2;
}
```

# 성질

## 정확성

정리. FGLM 알고리즘은 유한 번에 멈추고, 출력 $G\_2$ 는 $\lt\_2$ 에 대한 $I$ 의 축소 Gröbner 기저이며, $B$ 는 $\lt\_2$ 의 선두항 아이디얼에 들지 않는 단항식 전체다[^1].

증명의 요지. $B$ 의 원소의 나머지는 일차독립이므로 $\vert B\vert\le D$ 다. 단항식을 $\lt\_2$ 의 오름차순으로 보므로, $m$ 의 나머지가 앞선 단항식들의 나머지에 종속이면 $m$ 은 선두항 아이디얼에 들고 그 관계식의 선두항이 $m$ 이다. 선두항 아이디얼의 극소 생성원이 모두 이렇게 발견되므로 $G\_2$ 가 Gröbner 기저다.

## 비용

$x\_im$ 의 나머지는 0 차원 아이디얼의 곱셈 행렬 $M\_{x\_i}$ 를 $\mathrm{NF}(m)$ 에 곱해 얻는다. 후보는 $nD$ 개 이하이고 후보마다 크기 $D$ 의 행렬과 벡터의 곱과 일차종속 판정이 드므로, 체의 연산 $O(nD^3)$ 번에 끝난다[^1]. 비용이 Gröbner 기저의 차수가 아니라 해의 개수 $D$ 로 정해진다.

$I$ 가 모양 보조정리의 꼴이면 사전식 기저는 $x\_n$ 의 거듭제곱의 나머지만으로 정해진다. 이때는 $M\_{x\_n}$ 의 [최소다항식](minimal-polynomial.md)과 $x\_i$ 의 좌표를 구하는 문제가 되고, $M\_{x\_n}$ 이 희소하면 [Wiedemann 알고리즘](wiedemann-algorithm.md)의 방법으로 더 빨리 계산한다.

# 활용

- 연립 다항식의 정확한 풀이. 차수 역사전식 순서의 기저를 F4 나 F5 같은 알고리즘으로 구하고, FGLM 으로 사전식 기저로 바꾼 뒤, 마지막 일변수 다항식의 근을 구해 나머지 변수를 대입으로 얻는다.
- 다변수 공개키 암호와 대칭 암호의 대수적 공격. 비밀 열쇠를 미지수로 둔 연립 다항식의 해가 유한 개이면 이 순서로 열쇠를 구한다. 공격 비용을 해의 개수 $D$ 와 차수 우선 기저의 계산 비용으로 견적한다.

[^1]: J. C. Faugère, P. Gianni, D. Lazard, T. Mora, "Efficient computation of zero-dimensional Gröbner bases by change of ordering", *Journal of Symbolic Computation* 16 (1993), 329–344.

# 연관 문서

## 선수지식

- [0 차원 아이디얼](zero-dimensional-ideals.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algorithms #linear_algebra
