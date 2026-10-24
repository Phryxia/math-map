# Clenshaw–Curtis 구적

# 개요

**Clenshaw–Curtis 구적(Clenshaw–Curtis quadrature)** 은 $\lbrack-1,1\rbrack$ 의 점 $x_k=\cos(k\pi/n)$ $(k=0,\dots,n)$ 에서 피적분함수를 [다항식 보간](polynomial-interpolation.md)하고 그 다항식을 적분해 $\int\_{-1}^1f$ 의 근삿값을 얻는 수치적분 공식이다. 점 $x_k$ 는 [Chebyshev 다항식](chebyshev-polynomials.md) $T_n$ 의 극값점이다.

[Newton–Cotes 공식](newton-cotes.md)과 같은 보간형 공식이고 점의 배치만 다르다. 가중치가 모든 $n$ 에서 양수이므로 점을 늘려도 함숫값의 오차가 커지지 않고, 연속함수이면 $n\to\infty$ 에서 근삿값이 적분값으로 수렴한다.

# 직관

$\lbrack-1,1\rbrack$ 에서 등간격 점 $9$ 개를 쓰는 Newton–Cotes 공식의 가중치는 $\frac{1}{14175}(989,5888,-928,10496,-4540,10496,-928,5888,989)$ 이다. 합은 $2$ 이지만 절댓값의 합은 $41142/14175\approx 2.90$ 이므로, 함숫값마다 $\delta$ 의 오차가 있으면 근삿값의 오차가 $2.90\delta$ 까지 커진다. 점을 더 늘리면 절댓값의 합이 끝없이 커진다.

점을 구간 끝 쪽으로 몰아 본다. $x=\cos\theta$ 로 두고 $\theta$ 를 $\lbrack 0,\pi\rbrack$ 에서 등간격으로 고르면 $x$ 는 끝에서 촘촘하고 가운데서 성기다. $n=2$ 이면 점이 $-1,0,1$ 이어서 Simpson 규칙(Simpson's rule) 그대로이고 가중치는 $\tfrac13,\tfrac43,\tfrac13$ 이다. $n=8$ 이면 $9$ 개 가중치가 전부 양수이고 절댓값의 합이 $2$ 다.

# 정의

$n\ge 1$ 에 대해 $x_k=\cos(k\pi/n)$ $(k=0,\dots,n)$ 이라 하고 $\ell_k$ 를 이 점들의 Lagrange 기저 다항식이라 한다. **Clenshaw–Curtis 구적**은

$$
Q_n(f)=\sum\_{k=0}^nw_kf(x_k),\qquad w_k=\int\_{-1}^1\ell_k(x)\thinspace dx
$$

이다.[^1] 노드를 $T_n$ 의 영점 $\cos\frac{(2k-1)\pi}{2n}$ 으로 바꾼 같은 꼴의 공식은 Fejér 제1규칙(Fejér's first rule)이라 한다.

## Chebyshev 계수로 쓴 꼴

$c_0=c_n=\tfrac12$, 나머지 $c_k=1$ 로 둔다. 보간 다항식 $p$ 를 Chebyshev 다항식으로 전개하면

$$
p(x)=\sum\_{j=0}^nc_ja_jT_j(x),\qquad a_j=\frac2n\sum\_{k=0}^nc_kf(x_k)\cos\frac{jk\pi}{n}
$$

이다. $x=\cos\theta$ 로 치환하면 $\int\_{-1}^1T_j(x)\thinspace dx=\int_0^\pi\cos j\theta\sin\theta\thinspace d\theta$ 이고, 이 값은 $j$ 가 짝수이면 $2/(1-j^2)$, 홀수이면 $0$ 이다. 따라서

$$
Q_n(f)=\sum\_{j\thinspace\mathrm{even}}c_ja_j\frac{2}{1-j^2}
$$

이다. $n=2$, $f(x)=x^2$ 이면 $a_0=a_2=1$ 이고 $Q_2(f)=1-\tfrac13=\tfrac23$ 이다.

## 가중치

$n$ 이 짝수이면 가중치는 다음과 같다. $b_j$ 는 $j=n/2$ 에서 $1$, 그 밖에서 $2$ 다.

$$
w_0=w_n=\frac{1}{n^2-1},\qquad w_k=\frac2n\Bigl(1-\sum\_{j=1}^{n/2}\frac{b_j}{4j^2-1}\cos\frac{2jk\pi}{n}\Bigr)\quad(0\lt k\lt n)
$$

$n=4$ 이면 $w=(\tfrac1{15},\tfrac8{15},\tfrac{12}{15},\tfrac8{15},\tfrac1{15})$ 이다.

```typescript
// n 은 짝수. 반환값 w[k] 는 노드 cos(k*pi/n) 의 가중치
function clenshawCurtisWeights(n: number): number[] {
  const w: number[] = [];
  for (let k = 0; k <= n; k++) {
    if (k === 0 || k === n) { w.push(1 / (n * n - 1)); continue; }
    let s = 1;
    for (let j = 1; j <= n / 2; j++) {
      const b = j === n / 2 ? 1 : 2;
      s -= (b / (4 * j * j - 1)) * Math.cos((2 * j * k * Math.PI) / n);
    }
    w.push((2 / n) * s);
  }
  return w;
}
```

# 성질

## 정확도 차수

차수 $n$ 이하의 다항식은 보간 다항식이 그 다항식 자신이므로 $Q_n$ 이 정확하다. $n$ 이 짝수이면 노드와 가중치가 $x\mapsto -x$ 에 대해 대칭이므로 $x^{n+1}$ 의 적분과 가중합이 모두 $0$ 이고, 정확도 차수가 $n+1$ 이다. 노드가 $n+1$ 개인 [Gauss 구적](gaussian-quadrature.md)의 정확도 차수 $2n+1$ 보다 낮다.

## 가중치의 양수성

**정리.** 모든 $n$ 에서 Clenshaw–Curtis 구적의 가중치는 양수이고 합이 $2$ 다.[^2]

증명의 요지($n$ 짝수). 끝점 가중치 $1/(n^2-1)$ 은 양수다. 안쪽 가중치의 괄호에서 빼는 합은 코사인의 절댓값이 $1$ 이하이므로 절댓값이 $\sum\_{j=1}^{n/2}b_j/(4j^2-1)$ 이하이고, 이 값은

$$
\sum\_{j=1}^{n/2}\frac{b_j}{4j^2-1}\lt\sum\_{j=1}^\infty\frac{2}{4j^2-1}=\sum\_{j=1}^\infty\Bigl(\frac{1}{2j-1}-\frac{1}{2j+1}\Bigr)=1
$$

을 만족한다. $b\_{n/2}=1$ 이므로 부등호가 엄격하고, 괄호 안이 양수다. 상수함수 $1$ 에서 공식이 정확하므로 가중치의 합은 $2$ 다. $\square$

함숫값마다 $\delta$ 의 오차가 있을 때 근삿값의 오차는 $\delta\sum_k\vert w_k\vert=2\delta$ 이하다.

## 연속함수에서의 수렴

**정리 (Pólya).** $f$ 가 $\lbrack-1,1\rbrack$ 에서 연속이면 $Q_n(f)\to\int\_{-1}^1f$ 이다.[^3]

증명의 요지. [Stone–Weierstrass 정리](stone-weierstrass.md)로 $\Vert f-p\Vert\_\infty\lt\varepsilon$ 인 다항식 $p$ 를 잡는다. $n\ge\deg p$ 이면 $Q_n(p)=\int p$ 이므로

$$
\Bigl\vert Q_n(f)-\int\_{-1}^1f\Bigr\vert\le\vert Q_n(f-p)\vert+\Bigl\vert\int\_{-1}^1(p-f)\Bigr\vert\le 2\varepsilon+2\varepsilon
$$

이다. 첫 항에 가중치의 양수성과 합 $2$ 를 썼다. $\square$

같은 점에서의 보간 다항식은 모든 연속함수에서 균등수렴하지는 않는다(Faber 정리). 적분은 가중합 하나만 보므로 보간이 수렴하지 않아도 근삿값은 수렴한다.

## 수렴 속도

오차는 Chebyshev 계수 $a_j$ 가 줄어드는 속도로 정해진다. $f^{(k)}$ 가 유계 변동이면 오차가 $O(n^{-k})$ 이고, $f$ 가 $\lbrack-1,1\rbrack$ 을 감싸는 타원 위에서 해석적이면 오차가 $n$ 에 대해 지수적으로 줄어든다. Trefethen 은 해석적인 영역이 구간에 가까운 함수에서 같은 노드 수의 Gauss 구적과 오차가 거의 같음을 보였다.[^4] 정확도 차수의 차이 $n+1$ 대 $2n+1$ 이 오차에 드러나는 것은 $f$ 가 구간에서 먼 곳까지 해석적일 때다.

## 계산

$a_j$ 를 구하는 식은 이산 코사인 변환이고, $f(\cos\theta)$ 를 $\theta\in\lbrack 0,2\pi)$ 의 $2n$ 개 등간격 점으로 짝수 연장하면 [이산 Fourier 변환](fourier.md)이 된다. 그래서 [고속 Fourier 변환](fft.md)으로 $a_j$ 전부를 $O(n\log n)$ 에 얻는다. 가중치도 같은 방법으로 $O(n\log n)$ 에 얻는다.[^5]

$\cos(k\pi/n)=\cos(2k\pi/2n)$ 이므로 $n$ 의 노드는 $2n$ 의 노드에 모두 들어 있다. $n$ 을 두 배로 늘릴 때 이미 계산한 함숫값을 다시 쓰고 새 점 $n$ 개에서만 $f$ 를 계산한다. $Q_n$ 과 $Q\_{2n}$ 의 차를 오차 추정으로 쓰고 차가 허용치 밖이면 다시 두 배로 늘린다. Gauss 구적은 $n$ 이 바뀌면 노드가 전부 바뀐다.

# 활용

- [Nyström 법](nystrom-method.md)에서 적분방정식의 적분을 구적 공식으로 바꿀 때 Clenshaw–Curtis 구적을 쓰면 노드가 늘어도 가중치가 양수로 유지된다.
- 점을 두 배로 늘리며 오차를 추정하는 자동 적분 절차가 노드의 포함관계를 사용한다. Clenshaw 와 Curtis 의 1960 년 논문이 이 용도로 공식을 제안했다.[^1]
- 고차원 적분을 1 차원 구적의 텐서곱으로 근사할 때 노드가 포함관계를 이루는 1 차원 공식으로 Clenshaw–Curtis 구적을 쓴다. [Smolyak 희소격자 구적](smolyak-quadrature.md)이 그 예다.

[^1]: C. W. Clenshaw, A. R. Curtis, "A method for numerical integration on an automatic computer", *Numerische Mathematik* **2** (1960), 197–205.
[^2]: J. P. Imhof, "On the method for numerical integration of Clenshaw and Curtis", *Numerische Mathematik* **5** (1963), 138–141.
[^3]: G. Pólya, "Über die Konvergenz von Quadraturverfahren", *Mathematische Zeitschrift* **37** (1933), 264–286. 가중치가 양수인 보간형 공식 전부에 대한 정리다.
[^4]: Lloyd N. Trefethen, "Is Gauss quadrature better than Clenshaw–Curtis?", *SIAM Review* **50** (2008), 67–87.
[^5]: Jörg Waldvogel, "Fast construction of the Fejér and Clenshaw–Curtis quadrature rules", *BIT Numerical Mathematics* **46** (2006), 195–202.

# 연관 문서

## 선수지식

- [Newton–Cotes 공식](newton-cotes.md)
- [Chebyshev 다항식](chebyshev-polynomials.md)

## 더 알아보기

- [Smolyak 희소격자 구적](smolyak-quadrature.md)

#analysis #algorithms #linear_algebra
