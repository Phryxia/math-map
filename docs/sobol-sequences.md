# Sobol 수열

# 개요

**Sobol 수열(Sobol sequence)** 은 점의 좌표를 이진 자릿수의 배타적 논리합으로 만들어, 정사각형이나 고차원 상자를 고르게 채우는 점의 수열이다. 정사각형 위의 함수를 점 $16$ 개의 평균으로 어림할 때 $4\times 4$ 격자를 쓰면, 함수가 거의 가로 좌표에만 달린 경우 가로 좌표가 네 가지뿐이라 점 $4$ 개를 쓴 것과 같다. Sobol 수열의 처음 $2^m$ 개 점은 좌표마다 $2^m$ 가지 값을 모두 한 번씩 갖고, 넓이가 같은 여러 모양의 칸에 점을 하나씩 넣는다. 그래서 [Koksma–Hlawka 부등식](koksma-hlawka-inequality.md)의 별 불일치도가 작고, 적분 오차가 $1/N$ 에 가까운 속도로 준다.

# 직관

Koksma–Hlawka 부등식 문서의 van der Corput 수열은 $n$ 을 이진법으로 쓰고 자릿수를 소수점 아래로 뒤집는다. $n=0,1,\dots,7$ 이면 $0$, $1/2$, $1/4$, $3/4$, $1/8$, $5/8$, $3/8$, $7/8$ 이고, $\lbrack 0,1)$ 을 여덟 칸으로 나누면 칸마다 한 점이 든다. 정사각형에 점을 놓으려면 둘째 좌표가 필요하다.

둘째 좌표도 van der Corput 수열로 두면 점이 대각선 위에만 놓인다. 그래서 자릿수를 섞는다. $n$ 의 이진 자릿수를 낮은 자리부터 $b_1,b_2,b_3$ 이라 하고, 둘째 좌표를 $b_1$ 이면 $0.1$, $b_2$ 이면 $0.11$, $b_3$ 이면 $0.101$ 을 이진 소수로 배타적 논리합한 값으로 둔다. $n=3$ 이면 $b_1=b_2=1$ 이므로 $0.1\oplus 0.11=0.01$, 곧 $1/4$ 이다.

$n=0,\dots,7$ 의 여덟 점은 다음이다.

$$
\begin{aligned}
&(0,0),\quad(0.5,0.5),\quad(0.25,0.75),\quad(0.75,0.25),\cr
&(0.125,0.625),\quad(0.625,0.125),\quad(0.375,0.375),\quad(0.875,0.875)
\end{aligned}
$$

정사각형을 세로 줄 여덟 개로 나누어도, 가로 줄 여덟 개로 나누어도 칸마다 한 점이 든다. $2\times 4$ 칸으로 나누어도 $4\times 2$ 칸으로 나누어도 칸마다 한 점이 든다. 넓이 $1/8$ 인 이 네 가지 모양의 칸 어느 것에도 점이 둘 들거나 하나도 없는 경우가 없다.

# 정의

## 기본 상자와 그물

밑 $b$ 의 **기본 상자(elementary interval)** 는 음이 아닌 정수 $d_j$ 와 $0\le a_j\lt b^{d_j}$ 로 다음 꼴인 상자다.

$$
E=\prod_{j=1}^{s}\left\lbrack\frac{a_j}{b^{d_j}},\frac{a_j+1}{b^{d_j}}\right)
$$

부피는 $b^{-(d_1+\cdots+d_s)}$ 다. 직관 절의 네 가지 칸은 $b=2$, $s=2$ 에서 $(d_1,d_2)$ 가 $(3,0)$, $(0,3)$, $(1,2)$, $(2,1)$ 인 기본 상자다.

$0\le t\le m$ 일 때 $\lbrack 0,1)^s$ 의 점 $b^m$ 개가 부피 $b^{t-m}$ 인 기본 상자마다 정확히 $b^t$ 개씩 들면 이 점들을 **(t, m, s) 그물((t, m, s)-net)** 이라 한다. 직관 절의 여덟 점은 $t=0$, $m=3$, $s=2$ 인 그물이다.

수열 $x_0,x_1,\dots$ 의 모든 $k\ge 0$ 과 $m\ge t$ 에서 묶음 $x_{kb^m},\dots,x_{(k+1)b^m-1}$ 이 (t, m, s) 그물이면 이 수열을 **(t, s) 수열((t, s)-sequence)** 이라 한다.

## 디지털 구성

$\mathbb F_2$ 위의 행렬 $C_1,\dots,C_s$ 를 정하고, $n$ 의 이진 자릿수를 낮은 자리부터 세운 열벡터를 $\boldsymbol b(n)$ 이라 한다. $C_j\boldsymbol b(n)$ 의 성분 $y_1,y_2,\dots$ 를 소수점 아래에 놓은 수 $0.y_1y_2\cdots$ 를 $n$ 번째 점의 $j$ 번째 좌표로 하는 점들을 **디지털 그물(digital net)** 이라 하고, $C_j$ 를 생성 행렬이라 한다.

$C_j$ 의 $k$ 번째 열을 이진 소수로 읽은 수를 $v_{j,k}$ 라 하면, 좌표는 $b_k=1$ 인 $k$ 의 $v_{j,k}$ 를 배타적 논리합한 값이다. 직관 절에서 $C_1$ 은 단위행렬이고, $C_2$ 의 세 열은 $0.1$, $0.11$, $0.101$ 이다.

## Sobol 수열

좌표마다 $\mathbb F_2$ 위의 차수 $r$ 인 [원시 다항식](linear-feedback-shift-registers.md)을 하나씩 고른다.

$$
x^r+a_1x^{r-1}+\cdots+a_{r-1}x+1
$$

홀수 $m_1,\dots,m_r$ 을 $m_k\lt 2^k$ 로 정하고, $k\gt r$ 에서는 다음 점화식으로 정한다.

$$
m_k=2a_1m_{k-1}\oplus 2^2a_2m_{k-2}\oplus\cdots\oplus 2^{r-1}a_{r-1}m_{k-r+1}\oplus 2^rm_{k-r}\oplus m_{k-r}
$$

$\oplus$ 는 이진 자릿수마다의 배타적 논리합이다. 그 좌표의 **방향수(direction number)** 는 $v_k=m_k/2^k$ 이고, 이 $v_k$ 를 열로 하는 디지털 구성이 Sobol 수열이다[^1]. 첫 좌표에는 모든 $m_k=1$ 을 써서 van der Corput 수열을 둔다.

직관 절의 둘째 좌표는 $x+1$ 에서 $r=1$, $m_1=1$ 로 시작한다. 점화식 $m_k=2m_{k-1}\oplus m_{k-1}$ 으로 $m_2=3$, $m_3=5$, $m_4=15$ 이고, 방향수는 $1/2$, $3/4$, $5/8$, $15/16$ 이다. 이진법으로 $0.1$, $0.11$, $0.101$, $0.1111$ 이다.

```javascript
// a: 원시 다항식의 가운데 계수 a_1..a_{r-1}, m: 초기값 m_1..m_r
// m_1..m_bits 를 점화식으로 이어 만든다
function directionNumbers(r, a, m, bits) {
  const out = m.slice(0, r);
  for (let k = r; k < bits; k++) {
    let x = out[k - r] ^ (out[k - r] << r);
    for (let i = 1; i < r; i++) if (a[i - 1]) x ^= out[k - i] << i;
    out.push(x);
  }
  return out;
}

// n 의 자릿수 b_k 가 1 인 k 마다 v_k = m_k / 2^k 를 배타적 논리합한다
function sobolCoordinate(n, mk) {
  const bits = mk.length;
  let x = 0;
  for (let k = 1; k <= bits && n > 0; k++, n >>= 1) {
    if (n & 1) x ^= mk[k - 1] << (bits - k);
  }
  return x / 2 ** bits;
}
```

# 성질

## 그물 조건과 행렬의 계수

디지털 그물의 점 $2^m$ 개가 (t, m, s) 그물인 것은 다음과 동치다. $d_1+\cdots+d_s=m-t$ 인 모든 $d_j\ge 0$ 에서, $C_j$ 의 첫 $d_j$ 행을 첫 $m$ 열까지 잘라 모은 $(m-t)\times m$ 행렬의 행들이 일차독립이다.

증명의 요지. 점 $n$ 이 기본 상자 $E$ 에 드는 것은 좌표마다 첫 $d_j$ 자릿수가 $a_j$ 의 이진 자릿수와 같은 것이다. 이것은 $\boldsymbol b(n)\in\mathbb F_2^m$ 에 대한 일차방정식 $m-t$ 개다. 행들이 일차독립이면 해가 정확히 $2^t$ 개이므로 모든 $E$ 에 점이 $2^t$ 개씩 든다.

직관 절에서 $C_2$ 의 첫 세 행은 $(1,1,1)$, $(0,1,0)$, $(0,0,1)$ 이다. $(d_1,d_2)=(1,2)$ 이면 행 $(1,0,0)$, $(1,1,1)$, $(0,1,0)$ 이 일차독립이고, 다른 세 경우도 같아 $t=0$ 이다.

## 불일치도

밑 $b$ 의 (t, m, s) 그물의 점 $N=b^m$ 개는 별 불일치도가 다음 차수 이하이고, (t, s) 수열의 처음 $N$ 개는 지수 $s-1$ 이 $s$ 로 바뀐 차수 이하다[^2].

$$
D_N^\ast=O\left(b^t\frac{(\log N)^{s-1}}{N}\right)
$$

Koksma–Hlawka 부등식과 합치면 Hardy–Krause 변동이 유한한 함수의 적분 오차가 $(\log N)^s/N$ 의 차수다. 상수에 $b^t$ 가 곱해지므로 $t$ 가 작을수록 좋다.

Sobol 수열은 밑 $2$ 의 (t, s) 수열이다. $t$ 는 차원 $s$ 와 고른 원시 다항식의 차수로 정해진다[^2]. 직관 절의 두 좌표는 $t=0$ 인 (0, 2) 수열이다.

## 뒤섞은 그물

그물의 자릿수를 무작위로 뒤집는 Owen 뒤섞기(Owen scrambling)를 하면 점마다의 분포가 $\lbrack 0,1)^s$ 위의 균등분포이면서 그물 성질이 남는다. 그러면 평균이 적분의 불편추정량이 되고, 함수가 충분히 매끄러우면 분산이 다음 차수다[^3].

$$
O\left(\frac{(\log N)^{s-1}}{N^3}\right)
$$

무작위 점의 분산 $O(1/N)$ 보다 빠르고, 같은 뒤섞기를 여러 번 해서 오차의 크기를 표본에서 어림할 수 있다.

# 활용

- 준몬테카를로 적분(quasi-Monte Carlo integration). 금융에서 여러 시점의 가격 경로로 정해지는 파생상품의 기댓값을 수백 차원의 적분으로 쓰고, 무작위 점 대신 Sobol 수열로 계산한다.
- 컴퓨터 그래픽스의 빛 적분. 화소 하나에 들어오는 빛을 방향과 렌즈 위치에 대한 적분으로 쓰고, Sobol 수열의 처음 몇 좌표로 표본을 정한다.
- 민감도 분석. 모형의 출력 분산을 입력 변수별로 나누는 Sobol 지수(Sobol indices)를 적분으로 계산할 때 이 수열을 쓴다.
- 실험 설계. 매개변수 공간을 고르게 덮는 시험점을 정할 때, 좌표마다 겹치는 값이 없는 Sobol 점을 쓴다.

[^1]: I. M. Sobol, "On the distribution of points in a cube and the approximate evaluation of integrals", USSR Computational Mathematics and Mathematical Physics 7 (1967), 86–112.

[^2]: H. Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, CBMS-NSF Regional Conference Series in Applied Mathematics 63, SIAM, 1992, Chapter 4.

[^3]: A. B. Owen, "Scrambled net variance for integrals of smooth functions", Annals of Statistics 25 (1997), 1541–1562.

# 연관 문서

## 선수지식

- [Koksma–Hlawka 부등식](koksma-hlawka-inequality.md)

## 더 알아보기

- [Faure 수열](faure-sequences.md)

#number_theory #analysis #probability #algorithms
