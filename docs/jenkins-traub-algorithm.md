# Jenkins–Traub 알고리즘

# 개요

**Jenkins–Traub 알고리즘(Jenkins–Traub algorithm)** 은 다항식의 근을 절댓값이 작은 것부터 하나씩 찾는 반복법이다. $x^3-6x^2+11x-6$ 의 근 $1$ 을 [Newton 법](newton-method.md)으로 찾으면, 걸음의 길이를 정하는 도함수에 근 $1$, $2$, $3$ 이 똑같은 비중으로 섞여 있다. 이 알고리즘은 도함수 대신 근 $1$ 의 비중만 커지도록 고친 다항식을 반복해서 만들고, 그 다항식으로 걸음을 정해 근 $1$ 을 걸음 열 번 남짓에 부동소수점 정밀도까지 얻는다.

# 직관

차수 $n$ 인 다항식 $p(x)=\prod_i(x-\alpha_i)$ 에서 근 하나를 뺀 곱을 $P_i(x)=p(x)/(x-\alpha_i)$ 로 쓴다. 곱의 미분법으로 도함수는 이 곱들의 합이다.

$$
p'(x)=P_1(x)+P_2(x)+\dots+P_n(x)
$$

$p(x)=x^3-6x^2+11x-6$ 이면 $P_1=(x-2)(x-3)$, $P_2=(x-1)(x-3)$, $P_3=(x-1)(x-2)$ 이다. Newton 걸음 $s-p(s)/p'(s)$ 에서 $p'$ 대신 $P_1$ 을 넣으면 $s-p(s)/P_1(s)=s-(s-1)=1$ 이 되어 어느 점 $s$ 에서 시작해도 한 걸음에 근 $1$ 에 닿는다. $P_1$ 은 근을 모르면 만들 수 없으니, $p'$ 에서 시작해 $P_1$ 의 비중을 키우는 연산을 되풀이한다.

그 연산은 다항식 $H$ 에서 $p$ 의 상수배를 빼서 $x=0$ 에서 $0$ 이 되게 하고 $x$ 로 나누는 것이다.

$$
H\mapsto\frac{1}{x}\left(H(x)-\frac{H(0)}{p(0)}\thinspace p(x)\right)
$$

$p'$ 에 한 번 쓰면 $(11x^2-48x+49)/6$ 이 나오고, 이것은 $P_1+\tfrac12P_2+\tfrac13P_3$ 이다. 연산 한 번에 $P_i$ 의 계수가 $1/\alpha_i$ 배가 되므로, $\lambda$ 번 쓰면 계수는 $1$, $1/2^\lambda$, $1/3^\lambda$ 이고 $P_1$ 이 나머지를 누른다.

이 $H$ 를 최고차 계수로 나눈 것을 $\bar H$ 라 하고, Newton 걸음처럼 $0-p(0)/\bar H(0)$ 을 근의 추정값으로 삼는다. $p'$ 에서는 $1.636$ 이고, 연산을 한 번씩 쓸 때마다 $1.347$, $1.171$, $1.081$, $1.038$, $1.018$, $1.0087$ 로 오차가 거의 반씩 준다. 반씩 주는 것은 $P_2$ 의 계수가 $P_1$ 의 계수에 비해 걸음마다 $1/2$ 배가 되기 때문이다.

연산의 $0$ 을 지금의 추정값 $s$ 로 바꾸면 $P_i$ 의 계수는 $1/(\alpha_i-s)$ 배가 되고, $s$ 가 근 $1$ 에 가까울수록 $P_1$ 이 더 빨리 커진다. $1.0087$ 에서 이렇게 하면 다음 추정값의 오차는 $1.2\times10^{-6}$ 이고, 그다음 걸음에 부동소수점 정밀도에 닿는다. 연산에 쓰는 점을 **이동(shift)** 이라 한다.

# 정의

## H 다항식

$p$ 를 차수 $n$ 인 최고차 계수 $1$ 의 다항식이라 하자. $p(s)\ne0$ 인 점 $s$ 에 대해, **H 다항식(H polynomial)** 의 열은 $H^{(0)}=p'$ 에서 시작하는 다음 점화식이다.

$$
H^{(\lambda+1)}(z)=\frac{1}{z-s_\lambda}\left(H^{(\lambda)}(z)-\frac{H^{(\lambda)}(s_\lambda)}{p(s_\lambda)}\thinspace p(z)\right)
$$

괄호 안의 다항식은 $z=s_\lambda$ 에서 $0$ 이므로 $z-s_\lambda$ 로 나누어떨어지고, $H^{(\lambda)}$ 의 차수는 $n-1$ 이하로 남는다. $s_\lambda$ 가 그 걸음의 이동이다. $\bar H^{(\lambda)}$ 는 $H^{(\lambda)}$ 를 최고차 계수로 나눈 다항식이다.

직관 절의 예에서 $s_0=0$ 이면 $H^{(1)}=(11z^2-48z+49)/6$ 이고 $\bar H^{(1)}=z^2-4.3636z+4.4545$ 다.

## 세 단계

Jenkins–Traub 알고리즘은 이동을 정하는 방법이 다른 세 단계로 근 하나를 찾는다.[^1]

1. **이동 없는 단계(no-shift stage).** $s_\lambda=0$ 으로 $H$ 다항식을 $M$ 번 만든다. 보통 $M=5$ 다.
2. **고정 이동 단계(fixed-shift stage).** 절댓값이 $\beta$ 인 점 $s$ 를 하나 골라 $s_\lambda=s$ 로 고정하고, 걸음마다 근의 추정값 $t_\lambda=s-p(s)/\bar H^{(\lambda+1)}(s)$ 을 계산한다. $p(z)=\sum_ka_kz^k$ 일 때 $\beta$ 는 다음 다항식의 양근이다.

$$
\lvert a_n\rvert z^n+\dots+\lvert a_1\rvert z-\lvert a_0\rvert
$$

이것은 [Cauchy 근 한계](cauchy-root-bound.md)를 역수 다항식 $z^np(1/z)$ 에 쓴 것이므로 $\beta$ 는 $p$ 의 근의 절댓값의 하한이다. $s$ 의 편각은 무작위로 정한다. 추정값의 변화가 두 번 연달아 그 크기의 절반 이하가 되면 다음 단계로 간다.
3. **가변 이동 단계(variable-shift stage).** 이동을 걸음마다 추정값으로 바꾼다.

$$
s_{\lambda+1}=s_\lambda-\frac{p(s_\lambda)}{\bar H^{(\lambda+1)}(s_\lambda)}
$$

근을 찾으면 [다항식 수축](polynomial-deflation.md)으로 $z-s$ 를 나누고, 남은 다항식에 세 단계를 다시 쓴다. 셋째 단계가 정해진 걸음 수 안에 수렴하지 않으면 편각을 바꾼 새 $s$ 로 둘째 단계부터 다시 한다.

직관 절의 예에서 Cauchy 다항식의 양근은 $z^3+6z^2+11z-6$ 의 양근 $\beta=0.4348$ 이다. 이동 없는 단계 다섯 걸음 뒤 $s=0.4348$ 로 고정하면 추정값의 오차는 $4.5\times10^{-3}$, $1.6\times10^{-3}$, $5.5\times10^{-4}$ 이다. 가변 이동 단계로 넘어가면 오차는 $4.5\times10^{-10}$ 이고, 다음 걸음에 부동소수점 정밀도에 닿는다.

한 걸음은 [Horner 법](horner-method.md)으로 $p(s)$ 와 $H(s)$ 를 계산하고, 두 다항식을 섞은 뒤 조립제법으로 $z-s$ 를 나누는 것이다.

```javascript
// p: 최고차부터의 계수(길이 n+1, p[0] = 1), H: 최고차부터의 계수(길이 n)
function horner(c, x) {
  let v = 0;
  for (const a of c) v = v * x + a;
  return v;
}

function nextH(p, H, s) {
  const k = horner(H, s) / horner(p, s);
  const num = p.map((a, i) => (i === 0 ? 0 : H[i - 1]) - k * a); // z = s 에서 0
  const q = [];
  let r = 0;
  for (let i = 0; i < num.length - 1; i++) {
    r = num[i] + r * s; // 조립제법으로 z - s 를 나눈다
    q.push(r);
  }
  return q;
}

function estimate(p, H, s) {
  return s - horner(p, s) / (horner(H, s) / H[0]); // H[0] 으로 나누면 bar H
}

function jenkinsTraubOneRoot(p, beta, M = 5, L = 20) {
  let H = p.slice(0, -1).map((a, i) => a * (p.length - 1 - i)); // p'
  for (let i = 0; i < M; i++) H = nextH(p, H, 0);
  const s = beta; // 복소 계수 판본은 절댓값 beta 에 편각을 무작위로 정한 복소수를 쓴다
  let t = s;
  let settled = 0;
  for (let i = 0; i < L && settled < 2; i++) {
    H = nextH(p, H, s);
    const next = estimate(p, H, s);
    settled = i > 0 && Math.abs(next - t) <= Math.abs(t) / 2 ? settled + 1 : 0;
    t = next;
  }
  let x = t;
  for (let i = 0; i < L && horner(p, x) !== 0; i++) {
    H = nextH(p, H, x);
    x = estimate(p, H, x);
  }
  return x;
}
```

# 성질

## 부분분수 꼴

정리. $p$ 의 근 $\alpha_1,\dots,\alpha_n$ 이 서로 다르면 $H^{(\lambda)}=\sum_ic_i^{(\lambda)}P_i$ 이고 계수는 다음을 만족한다.

$$
c_i^{(0)}=1,\qquad c_i^{(\lambda+1)}=\frac{c_i^{(\lambda)}}{\alpha_i-s_\lambda}
$$

증명의 요지. 점화식은 $H$ 에 대해 선형이므로 $P_i$ 하나에 쓴 결과만 보면 된다. $P_i(s)/p(s)=1/(s-\alpha_i)$ 이고 $p=(z-\alpha_i)P_i$ 이므로, 괄호 안은 다음과 같다.

$$
P_i(z)\left(1-\frac{z-\alpha_i}{s-\alpha_i}\right)=\frac{s-z}{s-\alpha_i}\thinspace P_i(z)
$$

$z-s$ 로 나누면 $P_i/(\alpha_i-s)$ 가 남는다.

$P_i$ 는 모두 최고차 계수가 $1$ 이므로 $\bar H$ 의 계수는 $c_i$ 를 그 합으로 나눈 것이다. 이 꼴을 근의 추정값에 넣으면 다음이 나온다.

$$
s-\frac{p(s)}{\bar H(s)}=s-\frac{\sum_ic_i}{\sum_ic_i/(s-\alpha_i)}
$$

$c_1$ 만 남으면 오른쪽은 $\alpha_1$ 이다.

## 동반행렬의 역반복

차수가 $n$ 보다 작은 다항식의 공간에서, 다항식에 $z$ 를 곱하고 $p$ 로 나눈 나머지를 취하는 사상을 $A$ 라 한다. 이 사상을 단항식 기저로 적은 행렬은 [유리 표준형](rational-canonical-form.md)에서 정의하는 $p$ 의 동반행렬이다. $zP_i=\alpha_iP_i+p$ 이므로 $P_i$ 는 $A$ 의 고윳값 $\alpha_i$ 에 대한 고유벡터다.

점화식의 결과에 $z-s$ 를 곱하면 $H$ 와 $p$ 의 상수배만큼 다르므로, $p$ 로 나눈 나머지로는 $(A-sI)H^{(\lambda+1)}=H^{(\lambda)}$ 이다. 그래서 고정 이동 단계는 동반행렬에 대한 이동 역반복이고([거듭제곱법](power-iteration.md)), 이동 없는 단계는 이동 $0$ 의 역반복이다. 가변 이동 단계는 이동을 걸음마다 고윳값의 추정값으로 바꾸므로 [Rayleigh 몫](rayleigh-quotient.md) 반복과 같은 꼴이다. Jenkins 와 Traub 은 이것을 일반화된 Rayleigh 반복(generalized Rayleigh iteration)이라 불렀다.[^1]

## 고정 이동 단계의 수렴

정리. 이동 $s$ 에 가장 가까운 근 $\alpha_1$ 이 하나뿐이고 이동 없는 단계 뒤의 계수 $c_1$ 이 $0$ 이 아니면, 추정값 $t_\lambda$ 는 $\alpha_1$ 로 수렴하고 오차는 $O(\rho^\lambda)$ 다.

$$
\rho=\frac{\lvert\alpha_1-s\rvert}{\min_{i\ge2}\lvert\alpha_i-s\rvert}
$$

증명의 요지. 부분분수 꼴에서 고정 이동 단계의 걸음마다 $c_i/c_1$ 이 $(\alpha_1-s)/(\alpha_i-s)$ 배가 되므로 $c_i/c_1=O(\rho^\lambda)$ 이다. 추정값의 식에 넣으면 $t_\lambda-\alpha_1=O(\rho^\lambda)$ 다.

정의 절의 예에서 $\rho=(1-0.4348)/(2-0.4348)=0.361$ 이고, 오차 $4.5\times10^{-3}$, $1.6\times10^{-3}$, $5.5\times10^{-4}$ 의 비는 $0.35$ 근처다.

## 가변 이동 단계의 수렴

정리. 고정 이동 단계가 위 정리의 조건 아래 충분히 오래 계속되었으면, 가변 이동 단계의 $s_\lambda$ 는 $\alpha_1$ 로 수렴하고 그 차수는 $1+\varphi\approx2.62$ 이상이다. $\varphi=(1+\sqrt5)/2$ 다.[^1]

정의 절의 예에서 오차 $5.5\times10^{-4}$ 이 한 걸음 뒤 $4.5\times10^{-10}$ 이다. 차수 $2$ 이면 $10^{-7}$ 크기여야 하므로 이차 수렴보다 빠르다.

## 찾는 근의 순서

이동 없는 단계는 계수에 $1/\alpha_i$ 를 곱해 절댓값이 작은 근의 비중을 키우고, 고정 이동의 절댓값은 근의 절댓값의 하한 $\beta$ 다. 그래서 알고리즘은 대체로 절댓값이 작은 근부터 찾는다. 다항식 수축에서 앞으로 수축은 절댓값이 작은 근부터 나눌 때 남은 근이 적게 움직이므로, 이 순서가 수축의 오차를 줄인다.

# 활용

- 범용 다항식 근 찾기. Jenkins 와 Traub 의 복소 계수 구현 CPOLY 와 Jenkins 의 실수 계수 구현 RPOLY 가 ACM(Association for Computing Machinery) 알고리즘으로 발표되었다.[^2] Numerical Recipes 는 이것을 블랙박스 다항식 근 찾기의 사실상 표준으로 소개한다.[^3]
- 실수 계수 다항식. RPOLY 는 복소수 근의 켤레 쌍을 실수 이차 인수로 찾는다. 셋째 단계에서 이동 하나 대신 이차식 $z^2+uz+v$ 를 이동으로 쓰고, $u$, $v$ 를 실수 계산만으로 고친다. 같은 목적의 [Bairstow 법](bairstow-method.md)과 달리 초깃값을 따로 정하지 않는다.
- 다른 근 찾기 방법과의 분담. 한 걸음이 조립제법 몇 번이라 $O(n)$ 연산이다. 동반행렬에 [QR 알고리즘](qr-algorithm.md)을 쓰면 모든 근을 $O(n^3)$ 연산으로 함께 얻는다. [Laguerre 법](laguerre-method.md)도 근을 하나씩 찾고 수축하지만 초깃값에 따라 어느 근으로 갈지 정해지고, [Durand–Kerner 법](durand-kerner-method.md)은 수축 없이 모든 근을 동시에 고친다.

[^1]: M. A. Jenkins, J. F. Traub, A three-stage variable-shift iteration for polynomial zeros and its relation to generalized Rayleigh iteration, Numerische Mathematik 14 (1970), 252–263.
[^2]: M. A. Jenkins, J. F. Traub, Algorithm 419: Zeros of a complex polynomial, Communications of the ACM 15 (1972), 97–99. M. A. Jenkins, Algorithm 493: Zeros of a real polynomial, ACM Transactions on Mathematical Software 1 (1975), 178–189.
[^3]: W. H. Press, S. A. Teukolsky, W. T. Vetterling, B. P. Flannery, Numerical Recipes, 3rd ed., Cambridge University Press (2007), §9.5.

# 연관 문서

## 선수지식

- [Newton 법](newton-method.md)
- [거듭제곱법](power-iteration.md)
- [다항식 수축](polynomial-deflation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #algebra #linear_algebra #analysis
