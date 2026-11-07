# LMS 알고리즘

# 개요

**LMS 알고리즘(least mean squares algorithm)** 은 측정값이 하나 들어올 때마다 필터의 가중치를 조금씩 고쳐 가는 방법이다. 전화기의 스피커 소리가 방 벽에 부딪혀 마이크로 되돌아오면 상대방은 자기 목소리를 메아리로 듣는데, 되돌아오는 경로가 방마다 달라 미리 계산해 둔 필터로는 메아리를 지울 수 없다. LMS 알고리즘은 메아리를 지운 뒤 남은 소리를 보고 가중치를 그 자리에서 고쳐, 경로를 모르는 채로 [Wiener 필터](wiener-filter.md)의 가중치에 다가간다.

# 직관

입력 $x\lbrack n\rbrack$ 은 평균 $0$, 분산 $1$ 이고 시점끼리 무상관이다. 목표는 $d\lbrack n\rbrack=\frac12x\lbrack n\rbrack+w\lbrack n\rbrack$ 이고, $w\lbrack n\rbrack$ 는 $x$ 와 무상관인 분산 $\frac14$ 의 잡음이다. 가중치 하나 $h$ 로 $d\lbrack n\rbrack$ 를 $hx\lbrack n\rbrack$ 로 추정하면 Wiener 필터의 가중치는 $h^\ast=\mathbb E\lbrack d\lbrack n\rbrack x\lbrack n\rbrack\rbrack/\mathbb E\lbrack x\lbrack n\rbrack^2\rbrack=\frac12$ 이다. 그러나 계수 $\frac12$ 를 모르면 이 기댓값을 계산할 수 없다.

오차의 제곱 평균 $J(h)=\mathbb E\lbrack(d\lbrack n\rbrack-hx\lbrack n\rbrack)^2\rbrack$ 의 기울기는 $-2\thinspace\mathbb E\lbrack e\lbrack n\rbrack x\lbrack n\rbrack\rbrack$ 이고, $e\lbrack n\rbrack=d\lbrack n\rbrack-hx\lbrack n\rbrack$ 는 지금의 추정 오차다. 기댓값을 모르니 이번 시점의 값 $e\lbrack n\rbrack x\lbrack n\rbrack$ 하나로 대신하고, [확률적 경사하강법](stochastic-gradient-descent.md)처럼 보폭 $\mu$ 만큼 내려간다.

$$
h_{n+1}=h_n+\mu\thinspace e\lbrack n\rbrack\thinspace x\lbrack n\rbrack
$$

$h_n$ 이 주어졌을 때 $\mathbb E\lbrack e\lbrack n\rbrack x\lbrack n\rbrack\rbrack=\frac12-h_n$ 이므로 평균으로는 $h_{n+1}-\frac12=(1-\mu)(h_n-\frac12)$ 다. $\mu=0.1$, $h_0=0$ 이면 $\mathbb E h_n=\frac12(1-0.9^n)$ 이고 $20$ 걸음 뒤 약 $0.44$ 다. 한 번의 갱신은 곱셈 두 번이고 기댓값을 한 번도 계산하지 않는다.

# 정의

## LMS 알고리즘

차수 $M$ 의 [FIR 필터](fir-filters.md)(finite impulse response)로 목표 수열 $d\lbrack n\rbrack$ 를 입력 수열 $x\lbrack n\rbrack$ 에서 추정한다. 입력 벡터를 $\mathbf x_n=(x\lbrack n\rbrack,x\lbrack n-1\rbrack,\dots,x\lbrack n-M\rbrack)^\top$, 시점 $n$ 의 가중치 벡터를 $\mathbf h_n$ 이라 하자. **LMS 알고리즘** 은 다음 갱신을 시점마다 되풀이한다[^1]. 상수 $\mu\gt 0$ 을 **보폭(step size)** 이라 한다.

$$
e\lbrack n\rbrack=d\lbrack n\rbrack-\mathbf h_n^\top\mathbf x_n,\qquad\mathbf h_{n+1}=\mathbf h_n+\mu\thinspace e\lbrack n\rbrack\thinspace\mathbf x_n
$$

직관 절은 $M=0$ 인 경우다. 갱신 방향 $e\lbrack n\rbrack\mathbf x_n$ 은 Wiener 필터의 평균제곱오차 $J(\mathbf h)$ 의 기울기 $2(R\mathbf h-\mathbf p)$ 에 $-\frac12$ 을 곱한 것의 한 표본 추정값이다. $R$ 은 $\mathbf x_n$ 의 자기상관 행렬, $\mathbf p=\mathbb E\lbrack d\lbrack n\rbrack\mathbf x_n\rbrack$ 다.

```javascript
// x, d: 입력과 목표 수열. M: 차수. mu: 보폭
function lms(x, d, M, mu) {
  const h = new Array(M + 1).fill(0);
  for (let n = M; n < x.length; n++) {
    let y = 0;
    for (let k = 0; k <= M; k++) y += h[k] * x[n - k];
    const e = d[n] - y;
    for (let k = 0; k <= M; k++) h[k] += mu * e * x[n - k];
  }
  return h;
}
```

## 정규화 LMS

**정규화 LMS(normalized LMS)** 는 보폭을 입력 벡터의 크기로 나눈다. $\varepsilon\gt 0$ 은 $\mathbf x_n=0$ 근처에서 나눗셈을 막는 작은 상수다.

$$
\mathbf h_{n+1}=\mathbf h_n+\frac{\tilde\mu}{\varepsilon+\Vert\mathbf x_n\Vert^2}\thinspace e\lbrack n\rbrack\thinspace\mathbf x_n
$$

입력의 크기가 시간에 따라 바뀌면 LMS 의 실제 보폭 $\mu\Vert\mathbf x_n\Vert^2$ 도 따라 바뀐다. 정규화 LMS 는 이 양을 $\tilde\mu$ 근처로 고정한다.

# 성질

## 평균의 수렴

$\mathbf x_n$ 이 과거의 입력과 독립이라는 **독립 가정(independence assumption)** 을 두면, $\mathbf h_n$ 은 $\mathbf x_n$ 과 독립이고 Wiener 해 $\mathbf h^\ast=R^{-1}\mathbf p$ 에 대해

$$
\mathbb E\mathbf h_{n+1}-\mathbf h^\ast=(I-\mu R)(\mathbb E\mathbf h_n-\mathbf h^\ast)
$$

이 성립한다. $R$ 의 [고윳값](eigenvalues.md)을 $\lambda_1,\dots,\lambda_{M+1}$ 이라 하면 고유벡터 방향의 성분은 한 걸음마다 $1-\mu\lambda_i$ 배가 된다. 따라서 $\mathbb E\mathbf h_n\to\mathbf h^\ast$ 인 것은 다음과 동치다.

$$
0\lt\mu\lt\frac{2}{\lambda_{\max}}
$$

$R$ 의 대각성분은 모두 $r_x\lbrack 0\rbrack$ 이므로 $\lambda_{\max}\le\mathrm{tr}\thinspace R=(M+1)\thinspace r_x\lbrack 0\rbrack$ 이고, $\mu\lt 2/((M+1)r_x\lbrack 0\rbrack)$ 이면 충분하다. 이 값은 입력의 분산만으로 계산된다.

## 수렴 속도와 고윳값 퍼짐

가장 느린 성분은 $\lambda_{\min}$ 방향이고 $1-\mu\lambda_{\min}$ 배씩 줄어든다. $\mu$ 를 안정 한계 $2/\lambda_{\max}$ 아래로 잡아야 하므로 수렴에 드는 걸음 수는 대략 $\lambda_{\max}/\lambda_{\min}$ 에 비례한다. 입력이 시점끼리 강하게 상관되어 있으면 이 비가 커지고 LMS 가 느려진다. 직관 절처럼 입력이 무상관이면 $R=r_x\lbrack 0\rbrack I$ 이고 비는 $1$ 이다.

## 초과 평균제곱오차

보폭이 고정이면 $\mathbf h_n$ 은 $\mathbf h^\ast$ 에 멈추지 않고 그 근처에서 흔들린다. 그 결과 평균제곱오차는 Wiener 필터의 최솟값 $J_{\min}$ 보다 크고, $\mu$ 가 작을 때 극한값은 근사적으로 다음과 같다[^2].

$$
J_\infty\approx J_{\min}\Bigl(1+\frac{\mu}{2}\mathrm{tr}\thinspace R\Bigr)
$$

$J_\infty/J_{\min}-1$ 을 **조정 오차(misadjustment)** 라 한다. 직관 절에서 $J_{\min}=\frac14$, $\mathrm{tr}\thinspace R=1$ 이므로 $\mu=0.1$ 이면 $J_\infty\approx 0.2625$ 다. $\mu$ 를 키우면 빨리 수렴하고 조정 오차가 커지며, 줄이면 그 반대다.

# 활용

- 반향 제거. 스피커로 나간 신호를 $x$, 마이크 신호를 $d$ 로 두면 필터가 방의 반향 경로를 흉내 내고, 오차 $e\lbrack n\rbrack$ 가 메아리를 지운 마이크 신호다. 전화와 화상회의 장치가 정규화 LMS 를 쓴다.
- 채널 등화. 통신 채널이 기호를 이웃 기호와 섞으면, 송신 측이 미리 정한 훈련 수열을 $d$ 로 보내고 수신 측이 LMS 로 섞임을 되푸는 FIR 필터를 맞춘다.
- 적응 잡음 제거. 잡음원 근처의 기준 마이크를 $x$, 신호와 잡음이 섞인 주 마이크를 $d$ 로 두면, 필터 출력이 주 마이크에 섞인 잡음을 추정하고 오차가 신호를 추정한다.
- 시스템 식별. 모르는 시스템에 같은 입력을 넣어 출력을 $d$ 로 두면, 수렴한 가중치가 그 시스템의 임펄스 응답을 근사한다.

[^1]: B. Widrow, M. E. Hoff, "Adaptive switching circuits", *IRE WESCON Convention Record*, Part 4 (1960), 96–104.
[^2]: S. Haykin, *Adaptive Filter Theory*, 4th ed., Prentice Hall, 2002, Chapter 6.

# 연관 문서

## 선수지식

- [Wiener 필터](wiener-filter.md)
- [확률적 경사하강법](stochastic-gradient-descent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#signal_processing #optimization #statistics #linear_algebra
