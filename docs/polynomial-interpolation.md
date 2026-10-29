# 다항식 보간

# 개요

**다항식 보간(polynomial interpolation)** 은 서로 다른 $n+1$ 개의 점 $x_0,\dots,x_n$ 과 값 $y_0,\dots,y_n$ 이 주어질 때 모든 $i$ 에서 $p(x_i)=y_i$ 인 차수 $n$ 이하의 다항식 $p$ 를 찾는 문제다. $2^x$ 의 값을 $x=0,1,2$ 에서만 알 때 그 사이의 값을 어림하려면 세 점을 지나는 간단한 곡선이 있어야 한다. 한 점에서만 $1$ 이고 나머지 두 점에서 $0$ 인 이차식 셋을 만들어 값으로 가중합하면 세 점을 지나는 이차 다항식이 나온다.

# 직관

$f(x)=2^x$ 의 값 $f(0)=1$, $f(1)=2$, $f(2)=4$ 를 지나는 이차 다항식을 찾는다. 먼저 $x=0$ 에서 $1$ 이고 $x=1,2$ 에서 $0$ 인 다항식을 만든다. $(x-1)(x-2)$ 는 $x=1,2$ 에서 $0$ 이고 $x=0$ 에서 $2$ 이므로 $2$ 로 나누면 된다. 같은 방법으로

$$
\ell_0(x)=\frac{(x-1)(x-2)}{2},\qquad\ell_1(x)=-x(x-2),\qquad\ell_2(x)=\frac{x(x-1)}{2}
$$

를 얻는다. $\ell_i$ 는 $x_i$ 에서 $1$, 다른 두 점에서 $0$ 이다.

값을 곱해 더하면 $p=1\cdot\ell_0+2\ell_1+4\ell_2=\frac12x^2+\frac12x+1$ 이고, 세 점에서 $f$ 와 같다. 세 점 밖의 $x=3$ 에서는 $p(3)=7$ 이고 $f(3)=8$ 이라 차이가 $1$ 이다. 이 차이는 $f$ 의 삼계 [미분](derivative.md) $(\ln 2)^3 2^x$ 와 세 점까지의 거리의 곱 $3\cdot 2\cdot 1$ 로 정해진다. 성질 절의 오차 공식이 그 식이다.

이런 $p$ 는 하나뿐이고, $y_i=f(x_i)$ 이면 $f-p$ 의 크기는 $f$ 의 $(n+1)$ 계 미분으로 정해진다.

# 정의

## Lagrange 꼴

서로 다른 점 $x_0,\dots,x_n$ 의 **Lagrange 기저 다항식(Lagrange basis polynomial)** 은

$$
\ell_i(x)=\prod_{j\ne i}\frac{x-x_j}{x_i-x_j}
$$

이다. $\ell_i(x_j)$ 는 $i=j$ 이면 $1$, 아니면 $0$ 이다. 보간 다항식은 $p(x)=\sum_iy_i\ell_i(x)$ 이고, 이 식을 **Lagrange 보간 공식(Lagrange interpolation formula)** 이라 한다.

## 분할 차분과 Newton 꼴

**분할 차분(divided difference)** 은 $f\lbrack x_i\rbrack=f(x_i)$ 와

$$
f\lbrack x_i,\dots,x_{i+k}\rbrack=\frac{f\lbrack x_{i+1},\dots,x_{i+k}\rbrack-f\lbrack x_i,\dots,x_{i+k-1}\rbrack}{x_{i+k}-x_i}
$$

로 정의한다. 보간 다항식은

$$
p(x)=\sum_{k=0}^nf\lbrack x_0,\dots,x_k\rbrack\prod_{j\lt k}(x-x_j)
$$

로도 쓰이고, 이것이 Newton 꼴(Newton form)이다. 점 $x_{n+1}$ 을 더하면 항 하나만 붙는다.

```javascript
// 분할 차분표의 대각선 c[k] = f[x_0, ..., x_k]
function dividedDifferences(xs, ys) {
  const c = ys.slice();
  for (let k = 1; k < xs.length; k++)
    for (let i = xs.length - 1; i >= k; i--)
      c[i] = (c[i] - c[i - 1]) / (xs[i] - xs[i - k]);
  return c;
}
```

## Lebesgue 상수

연속함수 $f$ 를 보간 다항식으로 보내는 사상을 $I_n$ 이라 하면 $I_n$ 은 선형이다. 구간 $\lbrack a,b\rbrack$ 에서

$$
\Lambda_n=\max_{x\in\lbrack a,b\rbrack}\sum_i\vert\ell_i(x)\vert
$$

는 균등노름에 대한 $I_n$ 의 작용소 노름이고, 이것을 **Lebesgue 상수(Lebesgue constant)** 라 한다.

# 성질

## 존재와 유일성

Lagrange 꼴이 존재를 준다. 두 보간 다항식의 차는 차수 $n$ 이하이고 근이 $n+1$ 개이므로 [다항식환](polynomial-rings.md)에서 $0$ 이다. 계수로 쓰면 연립방정식의 계수 행렬이 Vandermonde 행렬(Vandermonde matrix)이고, 그 [행렬식](determinants.md) $\prod_{i\lt j}(x_j-x_i)$ 이 $0$ 이 아니다.

## 오차 공식

$f$ 가 $\lbrack a,b\rbrack$ 에서 $n+1$ 번 연속 미분가능하고 점들이 그 안에 있으면, 각 $x$ 에서 어떤 $\xi\in(a,b)$ 가 존재해

$$
f(x)-p(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}\prod_{i=0}^n(x-x_i)
$$

이다.

증명의 요지. 점이 아닌 $x$ 를 고정하고 $g(t)=f(t)-p(t)-K\prod_i(t-x_i)$ 에서 $g(x)=0$ 이 되게 $K$ 를 정한다. $g$ 는 $x_0,\dots,x_n,x$ 의 $n+2$ 곳에서 $0$ 이므로 Rolle 정리(Rolle's theorem)를 $n+1$ 번 쓰면 $g^{(n+1)}(\xi)=0$ 인 $\xi$ 가 있다. $p^{(n+1)}=0$ 이므로 $K=f^{(n+1)}(\xi)/(n+1)!$ 이다. 같은 논법으로 $f\lbrack x_0,\dots,x_n\rbrack=f^{(n)}(\xi)/n!$ 이다.

## 최선 근사와의 비교

차수 $n$ 이하의 모든 다항식 $q$ 에 대해 $I_nq=q$ 이므로 $f-I_nf=(f-q)-I_n(f-q)$ 다. 그래서

$$
\Vert f-I_nf\Vert\_\infty\le(1+\Lambda_n)\min_{\deg q\le n}\Vert f-q\Vert\_\infty
$$

이다. 등간격 점에서는 $\Lambda_n$ 이 $2^n$ 규모로 커지고, [Chebyshev 다항식](chebyshev-polynomials.md)의 극값점에서는 $\log n$ 규모로 커진다.

## Runge 현상

$\lbrack -1,1\rbrack$ 에서 $f(x)=1/(1+25x^2)$ 을 등간격 점 $n+1$ 개로 보간하면 $n\to\infty$ 에서 구간 끝 근처의 오차가 무한히 커진다. 이것이 Runge 현상(Runge's phenomenon)이다[^1]. 오차 공식의 $\prod_i(x-x_i)$ 가 등간격 점에서는 구간 끝에서 가운데보다 지수적으로 크다.

점을 어떻게 골라도 이 현상을 모든 연속함수에서 피할 수는 없다. G. Faber 는 각 $n$ 의 점 배치를 어떻게 정하든 보간 다항식이 균등수렴하지 않는 연속함수가 있음을 보였다[^2]. 증명은 어떤 배치에서도 $\Lambda_n\to\infty$ 임을 보이고 Banach–Steinhaus 정리(Banach–Steinhaus theorem)를 쓴다.

# 활용

- [Gauss 구적](gaussian-quadrature.md)은 [직교다항식](orthogonal-polynomials.md)의 근에서 $f$ 를 보간한 다항식을 적분한다. 가중치는 Lagrange 기저 다항식의 적분이다.
- [중국인의 나머지 정리](chinese-remainder-theorem.md)를 체 위의 다항식환에서 법 $x-x_i$ 들로 쓰면 Lagrange 보간 공식이 된다.
- 다항식 $f$ 의 값 $n+1$ 개가 $f$ 를 정하므로, 차수 $n$ 의 다항식 둘의 곱은 $2n+1$ 개 점에서 값을 곱한 뒤 보간해 얻을 수 있다. [고속 Fourier 변환](fft.md)은 점을 1 의 거듭제곱근으로 골라 값 매기기와 보간을 $O(n\log n)$ 에 한다.

[^1]: C. Runge, "Über empirische Funktionen und die Interpolation zwischen äquidistanten Ordinaten", Z. Math. Phys. 46 (1901), 224–243.
[^2]: G. Faber, "Über die interpolatorische Darstellung stetiger Funktionen", Jahresber. Deutsch. Math.-Verein. 23 (1914), 192–210.

# 연관 문서

## 선수지식

- [미분](derivative.md)
- [다항식환](polynomial-rings.md)

## 더 알아보기

- [Gauss 구적](gaussian-quadrature.md)
- [Newton–Cotes 공식](newton-cotes.md)
- [비밀 분산](secret-sharing.md)

#analysis #algorithms #algebra
