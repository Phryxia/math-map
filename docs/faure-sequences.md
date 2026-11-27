# Faure 수열

# 개요

**Faure 수열(Faure sequence)** 은 소수 $b$ 를 밑으로 삼고 좌표마다 Pascal 삼각형의 거듭제곱으로 자릿수를 섞어, 차원 $s\le b$ 인 상자를 칸마다 고르게 채우는 점의 수열이다. 정육면체 위의 함수를 점 $9$ 개의 평균으로 어림할 때, $9$ 개를 어느 방향으로 세 겹씩 잘라도 겹마다 세 점이 들고, 두 방향으로 세 겹씩 잘라 생긴 칸 아홉 개에도 한 점씩 들게 하려고 한다. Faure 수열은 밑 $3$ 의 자릿수에 Pascal 행렬을 곱하는 것만으로 이런 점을 만든다.

# 직관

[Sobol 수열](sobol-sequences.md)은 밑 $2$ 의 자릿수를 섞는다. 칸의 모양이 $2^m$ 개로 쪼갠 상자이므로 차원이 셋 이상이면 모든 모양의 칸에 점을 하나씩 넣을 수 없고, 칸마다 점이 $2^t$ 개씩 들도록 기준을 늦춘다. 밑을 $3$ 으로 올리면 정육면체를 세 겹씩 자른 칸으로 같은 일을 할 수 있다.

$n=0,\dots,8$ 을 삼진법으로 $n=a_0+3a_1$ 로 쓴다. 세 좌표의 삼진 자릿수 $(y_0,y_1)$ 을 다음과 같이 정하고, 좌표를 $y_0/3+y_1/9$ 로 둔다.

| 좌표 | $y_0$ | $y_1$ |
| --- | --- | --- |
| 첫째 | $a_0$ | $a_1$ |
| 둘째 | $a_0+a_1$ | $a_1$ |
| 셋째 | $a_0+2a_1$ | $a_1$ |

덧셈은 $3$ 으로 나눈 나머지로 한다. $n=5$ 이면 $a_0=2$, $a_1=1$ 이므로 세 좌표의 자릿수는 $(2,1)$, $(0,1)$, $(1,1)$ 이고, 점은 $(7/9,1/9,4/9)$ 다. 아홉 점에 $9$ 를 곱한 것은 다음이다.

$$
\begin{aligned}
&(0,0,0),\quad(3,3,3),\quad(6,6,6),\cr
&(1,4,7),\quad(4,7,1),\quad(7,1,4),\cr
&(2,8,5),\quad(5,2,8),\quad(8,5,2)
\end{aligned}
$$

좌표 하나를 골라 정육면체를 아홉 겹으로 자르면 겹마다 한 점이 든다. 각 좌표의 값 $0,\dots,8$ 이 한 번씩 나오기 때문이다. 좌표 둘을 골라 각각 세 겹으로 자르면 칸 아홉 개에 한 점씩 든다. 첫째와 셋째 좌표를 $3$ 으로 나눈 몫은 $(0,0)$, $(1,1)$, $(2,2)$, $(0,2)$, $(1,0)$, $(2,1)$, $(0,1)$, $(1,2)$, $(2,0)$ 으로 아홉 가지가 모두 다르다.

# 정의

## Pascal 행렬

소수 $b$ 와 $c\in\mathbb Z/b$ 에 대해, $k$ 행 $l$ 열 성분이 다음인 위삼각 행렬을 $P^c$ 로 쓴다. 행과 열의 번호는 $0$ 부터 센다.

$$
(P^c)\_{kl}=\binom{l}{k}c^{\thinspace l-k}\bmod b
$$

$c=1$ 인 $P$ 는 Pascal 삼각형을 위삼각으로 놓은 행렬이고, $P^c$ 는 실제로 $P$ 의 $c$ 제곱이다. $P^0$ 은 단위행렬이다. 직관 절의 표에서 둘째 좌표의 $y_0=a_0+a_1$ 은 $P^1$ 의 첫 행 $(1,1)$ 이고, 셋째 좌표의 $y_0=a_0+2a_1$ 은 $P^2$ 의 첫 행 $(1,2)$ 다.

## Faure 수열

$s\le b$ 라 한다. $n$ 의 밑 $b$ 자릿수를 낮은 자리부터 세운 열벡터를 $\boldsymbol a(n)$ 이라 하고, $j=1,\dots,s$ 에 대해 $\boldsymbol y=P^{j-1}\boldsymbol a(n)$ 의 성분을 소수점 아래에 놓은 수

$$
x_j(n)=\frac{y_0}{b}+\frac{y_1}{b^2}+\frac{y_2}{b^3}+\cdots
$$

를 $n$ 번째 점의 $j$ 번째 좌표로 한다. 이 점의 수열이 차원 $s$, 밑 $b$ 의 Faure 수열이다[^1]. 첫 좌표는 밑 $b$ 의 van der Corput 수열이다. 직관 절의 아홉 점은 $b=s=3$ 인 Faure 수열의 처음 $9$ 개다.

Sobol 수열 문서의 디지털 구성에서 생성 행렬을 $C_j=P^{j-1}$ 로 둔 것과 같다. $b=2$, $s=2$ 이면 $C_2$ 의 첫 세 행이 $(1,1,1)$, $(0,1,0)$, $(0,0,1)$ 이어서 Sobol 수열 문서의 여덟 점과 같은 점이 나온다.

```javascript
// n 번째 점의 j 번째 좌표 (j = 1..s, s <= b, b 는 소수)
function faureCoordinate(n, j, b, digits) {
  // n 의 밑 b 자릿수, 낮은 자리부터
  const a = [];
  for (let i = 0; i < digits; i++, n = Math.floor(n / b)) a.push(n % b);
  // Pascal 삼각형을 법 b 로 만든다: C[l][k] = C(l, k) mod b
  const C = [[1]];
  for (let l = 1; l < digits; l++) {
    C.push([1]);
    for (let k = 1; k < l; k++) C[l].push((C[l - 1][k - 1] + C[l - 1][k]) % b);
    C[l].push(1);
  }
  const c = j - 1;
  let x = 0;
  for (let k = 0; k < digits; k++) {
    // y_k = sum_{l >= k} C(l, k) c^(l-k) a_l  (mod b)
    let y = 0;
    let power = 1;
    for (let l = k; l < digits; l++) {
      y = (y + C[l][k] * power * a[l]) % b;
      power = (power * c) % b;
    }
    x += y / b ** (k + 1);
  }
  return x;
}
```

# 성질

## (0, s) 수열

$s\le b$ 이면 Faure 수열은 밑 $b$ 의 (0, s) 수열이다[^1]. 곧 모든 $m$ 과 $k$ 에서 점 $x_{kb^m},\dots,x_{(k+1)b^m-1}$ 이 부피 $b^{-m}$ 인 기본 상자마다 정확히 한 점씩 들어간다.

증명의 요지. Sobol 수열 문서의 그물 조건으로, $d_1+\cdots+d_s=m$ 일 때 $P^{j-1}$ 의 첫 $d_j$ 행을 첫 $m$ 열까지 자른 행들이 일차독립임을 보이면 된다. $P^c$ 의 $k$ 행은 다항식 $g(x)=\sum_{l\lt m}g_lx^l$ 에 대해 $\sum_l\binom lk c^{l-k}g_l=g^{(k)}(c)/k!$ 를 주는 일차형식이다.

행들의 일차결합이 $0$ 이 되는 $g\ne 0$ 이 있으면, 차수가 $m$ 미만인 $g$ 가 $\mathbb Z/b$ 의 서로 다른 $s$ 개 점 $0,1,\dots,s-1$ 에서 각각 $d_j$ 위수로 0 이 되어 근의 수가 중복도까지 $m$ 개가 된다. 차수보다 근이 많으므로 모순이다. 이것은 [Hermite 보간](hermite-interpolation.md)의 유일성과 같은 논법이다.

$s\le b$ 는 점 $0,\dots,s-1$ 이 $\mathbb Z/b$ 안에서 서로 달라야 한다는 조건이다.

## 밑과 차원의 한계

밑 $b$ 의 (0, s) 수열이 있으면 $s\le b$ 다[^2]. 따라서 밑 $2$ 에서 $t=0$ 인 수열은 차원 $2$ 까지이고, 차원 $s$ 에서 $t=0$ 을 얻으려면 밑이 $s$ 이상이어야 한다. Faure 수열은 $s$ 이상인 가장 작은 소수를 밑으로 써서 이 한계에 닿는다.

## 불일치도

Faure 수열의 처음 $N$ 개 점의 별 불일치도는 다음을 만족한다[^1].

$$
D_N^\ast\le c_s\frac{(\log N)^s}{N}+O\left(\frac{(\log N)^{s-1}}{N}\right),\qquad c_s=\frac{1}{s!}\left(\frac{b-1}{2\log b}\right)^{s}
$$

$b$ 를 $s$ 이상인 가장 작은 소수로 잡으면 $b$ 는 $2s$ 보다 작고, $s!$ 이 $((b-1)/(2\log b))^s$ 보다 빨리 자라므로 $s\to\infty$ 에서 $c_s\to 0$ 이다. Halton 수열은 같은 차수의 상수가 $s$ 와 함께 커진다.

## Niederreiter 수열

Pascal 행렬의 점 $c_j\in\mathbb Z/b$ 대신 $\mathbb F_b$ 위의 서로 다른 일계수 기약다항식 $p_1,\dots,p_s$ 를 쓰면 **Niederreiter 수열(Niederreiter sequence)** 을 얻는다[^2]. $p_j$ 의 차수를 $e_j$ 라 하면 이 수열은 밑 $b$ 의 (t, s) 수열이고 $t=\sum_j(e_j-1)$ 이다. $p_j=x-c_j$ 로 일차다항식만 쓰면 $t=0$ 이고 Faure 수열과 같은 그물 성질을 갖는다. 밑 $2$ 에서 차원이 커지면 일차다항식이 둘뿐이라 차수가 큰 기약다항식이 필요하고, 그만큼 $t$ 가 커진다.

# 활용

- 준몬테카를로 적분(quasi-Monte Carlo integration). [Koksma–Hlawka 부등식](koksma-hlawka-inequality.md)에 위 불일치도를 넣으면 적분 오차가 $c_s(\log N)^s/N$ 의 차수다. 차원이 수십인 금융 파생상품의 기댓값 계산에 Faure 수열과 그 생성 행렬에 정칙 행렬을 곱한 일반화 Faure 수열을 쓴다.
- 뒤섞은 그물. Sobol 수열 문서의 Owen 뒤섞기는 밑 $b$ 의 (0, m, s) 그물에도 그대로 적용되어, 평균이 불편추정량이면서 그물 성질이 남는다.
- 직교 배열과 실험 설계. 밑 $b$ 의 (0, 2, s) 그물 $b^2$ 개 점의 첫 자릿수들은 강도 $2$ 인 직교 배열(orthogonal array)이다. 직관 절에서 세 좌표의 첫 자릿수는 어느 두 열을 골라도 아홉 쌍이 모두 한 번씩 나온다.

[^1]: H. Faure, "Discrépance de suites associées à un système de numération (en dimension s)", Acta Arithmetica 41 (1982), 337–351.

[^2]: H. Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, CBMS-NSF Regional Conference Series in Applied Mathematics 63, SIAM, 1992, Chapter 4.

# 연관 문서

## 선수지식

- [Sobol 수열](sobol-sequences.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #probability #algorithms
