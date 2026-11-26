# Bernoulli 법

# 개요

**Bernoulli 법(Bernoulli's method)** 은 다항식의 계수로 선형 점화식을 세워 수열을 만들고, 이웃한 항의 비로 절댓값이 가장 큰 근을 구하는 방법이다. $p(x)=x^3-6x^2+11x-6$ 의 가장 큰 근을 도함수 없이 덧셈과 곱셈만으로 구하려 한다. 계수를 그대로 옮긴 다음 점화식을 쓴다.

$$
u_{k+3}=6u_{k+2}-11u_{k+1}+6u_k
$$

이 점화식을 $0$, $0$, $1$ 에서 돌리면 $1$, $6$, $25$, $90$, $301$, $966$ 이 나오고, 이웃한 항의 비 $6$, $4.17$, $3.60$, $3.34$, $3.21$ 이 가장 큰 근 $3$ 으로 다가간다.

# 직관

$p$ 의 근은 $1$, $2$, $3$ 이다. 각 근 $r$ 에 대해 수열 $r^k$ 를 점화식에 넣으면 좌변과 우변의 차가 $r^kp(r)=0$ 이므로 $r^k$ 는 점화식을 만족한다.

점화식이 선형이므로 이 세 수열의 일차결합도 점화식을 만족한다. 처음 세 항 $0$, $0$, $1$ 에 맞추면 다음이 나온다.

$$
u_k=\frac{1}{2}\cdot1^k-1\cdot2^k+\frac{1}{2}\cdot3^k
$$

$k$ 가 커지면 $3^k$ 항이 나머지를 압도한다. 그래서 $u_{k+1}/u_k$ 는 $3$ 으로 가고, 차이는 $2^k$ 항과 $3^k$ 항의 비 $(2/3)^k$ 정도로 준다. 비 $3.34$, $3.21$, $3.13$, $3.08$ 에서 $3$ 과의 차는 걸음마다 약 $2/3$ 배다.

# 정의

## 근에서 만드는 점화식

최고차 계수가 $1$ 인 $n$ 차 다항식 $p(x)=\sum_{j=0}^na_jx^j$ 에 대해 다음 점화식을 세운다.

$$
u_{k+n}=-\left(a_{n-1}u_{k+n-1}+\cdots+a_1u_{k+1}+a_0u_k\right)
$$

[생성함수](generating-functions.md)의 선형 점화식 풀이로, 근 $r_1,\dots,r_n$ 이 서로 다르면 해는 $u_k=\sum_ic_ir_i^k$ 꼴이고 상수 $c_i$ 는 처음 $n$ 개의 항으로 정해진다.

## Bernoulli 반복

**Bernoulli 반복** 은 초깃값 $u_0=\cdots=u_{n-2}=0$, $u_{n-1}=1$ 로 위 점화식을 돌리고, 몫 $q_k=u_{k+1}/u_k$ 를 가장 큰 근의 근삿값으로 삼는 반복이다.

```javascript
// 최고차 계수가 1 인 다항식 x^n + a[n-1] x^(n-1) + ... + a[0] 의 가장 큰 근을 Bernoulli 법으로 어림한다
function bernoulli(a, steps) {
  const n = a.length;
  const u = new Array(n).fill(0);
  u[n - 1] = 1;
  let q = NaN;
  for (let k = 0; k < steps; k++) {
    let next = 0;
    for (let j = 0; j < n; j++) next -= a[j] * u[j];
    q = next / u[n - 1];
    u.shift();
    u.push(next); // 크기가 넘치지 않게 실제 구현은 u 전체를 가끔 같은 수로 나눈다
  }
  return q;
}
```

직관 절의 예에서 $a=(-6,11,-6)$ 이다. 몫은 $6$, $4.1667$, $3.6$, $3.3444$, $3.2093$, $3.1315$, $3.0843$ 이다.

# 성질

## 초깃값과 계수

정리. 근 $r_1,\dots,r_n$ 이 서로 다르면 Bernoulli 반복의 수열은 다음이다.

$$
u_k=\sum_{i=1}^n\frac{r_i^k}{p'(r_i)}
$$

증명의 요지. 오른쪽은 $r_i^k$ 의 일차결합이므로 점화식을 만족한다. $1/p(x)$ 를 부분분수로 쓰면 $\sum_i\frac{1}{p'(r_i)(x-r_i)}$ 이다. $1/(x-r_i)=\sum_kr_i^kx^{-k-1}$ 로 전개해 $1/p(x)=x^{-n}+\cdots$ 와 계수를 비교하면 $k\le n-2$ 에서 $\sum_ir_i^k/p'(r_i)=0$, $k=n-1$ 에서 $1$ 이 나온다. 처음 $n$ 개의 항이 같으므로 두 수열이 같다.

직관 절의 예에서 $p'(1)=2$, $p'(2)=-1$, $p'(3)=2$ 이고, 계수 $1/2$, $-1$, $1/2$ 이 이것의 역수다. 모든 $c_i$ 가 $0$ 이 아니므로 이 초깃값에서는 가장 큰 근의 항이 빠지지 않는다.

## 수렴률

정리. $\lvert r_1\rvert\gt\lvert r_2\rvert\ge\cdots\ge\lvert r_n\rvert$ 이면 $q_k\to r_1$ 이고 다음이 성립한다.

$$
q_k-r_1=O\left(\left\lvert\frac{r_2}{r_1}\right\rvert^k\right)
$$

증명의 요지. $c_1\ne0$ 이므로 다음처럼 쓴다.

$$
u_k=c_1r_1^k\left(1+\sum_{i\ge2}\frac{c_i}{c_1}\left(\frac{r_i}{r_1}\right)^k\right)
$$

괄호 안의 합이 $O(\lvert r_2/r_1\rvert^k)$ 이다. 이웃한 두 항의 비를 쓰면 같은 차수의 차가 남는다.

직관 절의 예에서 $q_k-3=(2^k-1)/u_k$ 이고 $k=13$ 에서 $1.0\times10^{-2}$ 다. 두 근의 절댓값이 같으면, 예컨대 가장 큰 근이 켤레 복소수의 쌍이면 $q_k$ 는 수렴하지 않고 진동한다. 가장 큰 근이 중근이면 $q_k-r_1$ 이 $1/k$ 정도로만 줄어든다.

## 거듭제곱법과의 관계

[유리 표준형](rational-canonical-form.md)에서 정의하는 $p$ 의 동반행렬을 전치한 행렬 $C$ 는 열벡터 $(u_k,\dots,u_{k+n-1})$ 를 $(u_{k+1},\dots,u_{k+n})$ 로 보내고, 고윳값이 $p$ 의 근이다. 그래서 Bernoulli 반복은 $C$ 에 대한 [거듭제곱법](power-iteration.md)이고, 몫 $q_k$ 는 벡터의 마지막 성분의 비다. 수렴률 $\lvert r_2/r_1\rvert$ 도 거듭제곱법의 고윳값 비와 같다.

# 활용

- 근의 크기 어림. 가장 큰 근의 근삿값을 몇 걸음 만에 얻어 [Newton 법](newton-method.md)이나 [Laguerre 법](laguerre-method.md)의 초깃값으로 쓴다.
- 작은 근. $x^np(1/x)$ 에 쓰면 그 다항식의 가장 큰 근, 곧 $p$ 의 절댓값이 가장 작은 근의 역수가 나온다.
- 모든 근. [qd 알고리즘](qd-algorithm.md)은 Bernoulli 수열을 계수로 하는 급수에서 몫과 차의 표를 채워, 첫 열이 Bernoulli 몫이고 다음 열들이 다음으로 큰 근들로 가게 만든다.
- [Graeffe 근 제곱법](graeffe-method.md)과 견주면, Graeffe 변환은 근의 비를 걸음마다 제곱해 빨리 갈라 놓고, Bernoulli 법은 비를 걸음마다 한 번 곱해 선형으로 수렴한다.

# 연관 문서

## 선수지식

- [거듭제곱법](power-iteration.md)
- [생성함수](generating-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #linear_algebra #algebra
