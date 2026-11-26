# Bairstow 법

# 개요

**Bairstow 법(Bairstow's method)** 은 실수 계수 다항식의 이차 인수를 실수 계산만으로 찾는 반복법이다. $p(x)=x^4-2x^3+3x^2-2x+2$ 는 실근이 없어서, 실수 초깃값 $0$ 에서 [Newton 법](newton-method.md)을 쓰면 $0$, $1$, $0$, $1$ 을 끝없이 오간다. Bairstow 법은 근 대신 $x^2-rx-s$ 꼴의 인수를 찾으므로, $r=s=0$ 에서 시작해 여섯 걸음 만에 $p$ 를 나누어떨어지게 하는 인수 $x^2+1$ 에 닿는다.

# 직관

실수 계수 다항식의 복소수 근은 켤레끼리 짝을 지어 나오고, 한 쌍 $a\pm bi$ 는 실수 계수 이차식 $x^2-2ax+(a^2+b^2)$ 의 근이다. 위의 $p$ 는 $(x^2+1)(x^2-2x+2)$ 이고 근은 $\pm i$ 와 $1\pm i$ 다. 실수 초깃값에서 Newton 법의 걸음 $x-p(x)/p'(x)$ 는 계속 실수이므로 이 근들에 닿지 못한다. $p(0)=2$, $p'(0)=-2$ 라서 $0$ 의 다음 점은 $1$ 이고, $p(1)=2$, $p'(1)=2$ 라서 $1$ 의 다음 점은 다시 $0$ 이다.

그래서 근을 찾는 대신 이차식 $x^2-rx-s$ 로 $p$ 를 나눈다. 나눈 나머지는 일차식이고, 그 두 계수는 $r$, $s$ 의 함수다. 두 계수가 모두 $0$ 이 되는 $(r,s)$ 를 찾으면 그 이차식이 $p$ 의 인수다. 미지수 두 개, 방정식 두 개이고 계산은 전부 실수에서 일어난다.

$r=s=0$ 이면 $x^2$ 으로 나누는 것이므로 나머지는 $p$ 의 아래 두 항 $-2x+2$ 다. 이 나머지를 $0$ 으로 만드는 방향으로 $(r,s)$ 를 옮기면 $(0.4,-0.4)$ 이고, 되풀이하면 $(r,s)$ 가 $(0,-1)$ 로 간다. 인수는 $x^2-0\cdot x-(-1)=x^2+1$ 이다.

# 정의

## 이차식에 의한 조립제법

$p(x)=\sum_{k=0}^n a_kx^k$ 와 실수 $r$, $s$ 에 대해 수열 $b_k$ 를 다음으로 정한다. $b_{n+1}=b_{n+2}=0$ 으로 둔다.

$$
b_k=a_k+rb_{k+1}+sb_{k+2}\qquad(k=n,n-1,\dots,0)
$$

그러면 다음 항등식이 성립한다.

$$
p(x)=(x^2-rx-s)\thinspace q(x)+b_1(x-r)+b_0,\qquad q(x)=\sum_{k=2}^{n}b_kx^{k-2}
$$

[Horner 법](horner-method.md)의 조립제법이 $x-r$ 로 나누는 것을 $x^2-rx-s$ 로 나누는 것으로 바꾼 꼴이다. 양변의 $x^k$ 계수를 비교하면 점화식이 나온다. 나머지가 $0$ 인 것, 곧 $x^2-rx-s$ 가 $p$ 의 인수인 것은 $b_0=b_1=0$ 과 동치다.

직관 절의 예에서 $r=s=0$ 이면 $b_k=a_k$ 이므로 $b_1=-2$, $b_0=2$ 이고 나머지는 $-2x+2$ 다.

## Bairstow 반복

$b_k$ 에 같은 점화식을 한 번 더 적용해 $c_k$ 를 만든다. $c_{n+1}=c_{n+2}=0$ 으로 둔다.

$$
c_k=b_k+rc_{k+1}+sc_{k+2}\qquad(k=n,n-1,\dots,1)
$$

**Bairstow 반복** 은 다음 연립일차방정식의 해 $(\Delta r,\Delta s)$ 만큼 $(r,s)$ 를 옮기는 반복이다.

$$
\begin{pmatrix}c_1&c_2\cr c_2&c_3\end{pmatrix}\begin{pmatrix}\Delta r\cr \Delta s\end{pmatrix}=-\begin{pmatrix}b_0\cr b_1\end{pmatrix}
$$

직관 절의 예에서 $r=s=0$ 이면 $c_3=-2$, $c_2=3$, $c_1=-2$ 다. 방정식은 $-2\Delta r+3\Delta s=-2$, $3\Delta r-2\Delta s=2$ 이고 해는 $\Delta r=0.4$, $\Delta s=-0.4$ 다.

```javascript
// 실수 계수 a[0..n] 인 다항식의 이차 인수 x^2 - r x - s 를 찾는 Bairstow 반복
function bairstow(a, r, s, tol, maxIter) {
  const n = a.length - 1;
  for (let it = 0; it < maxIter; it++) {
    const b = new Array(n + 3).fill(0);
    const c = new Array(n + 3).fill(0);
    for (let k = n; k >= 0; k--) b[k] = a[k] + r * b[k + 1] + s * b[k + 2];
    for (let k = n; k >= 1; k--) c[k] = b[k] + r * c[k + 1] + s * c[k + 2];
    const det = c[1] * c[3] - c[2] * c[2];
    const dr = (-b[0] * c[3] + b[1] * c[2]) / det;
    const ds = (-b[1] * c[1] + b[0] * c[2]) / det;
    r += dr;
    s += ds;
    if (Math.abs(dr) + Math.abs(ds) < tol) {
      const quotient = b.slice(2, n + 1); // 몫 q 의 계수
      return { r, s, quotient };
    }
  }
  return null;
}
```

인수를 찾으면 이차식의 근을 근의 공식으로 구하고, 몫 $q$ 에 같은 반복을 되풀이한다. 직관 절의 예에서 수렴했을 때의 몫은 $x^2-2x+2$ 이고 그 근이 $1\pm i$ 다.

# 성질

## Newton 법으로서의 Bairstow 반복

정리. $b_0$, $b_1$ 을 $(r,s)$ 의 함수로 보면 다음이 성립한다.

$$
\frac{\partial b_k}{\partial r}=c_{k+1},\qquad\frac{\partial b_k}{\partial s}=c_{k+2}
$$

따라서 Bairstow 반복은 연립방정식 $b_0(r,s)=0$, $b_1(r,s)=0$ 에 대한 다변수 Newton 법이다.

증명의 요지. $b_k$ 의 점화식을 $r$ 로 미분하면 다음이 나온다.

$$
\frac{\partial b_k}{\partial r}=b_{k+1}+r\frac{\partial b_{k+1}}{\partial r}+s\frac{\partial b_{k+2}}{\partial r}
$$

$d_k=\partial b_{k-1}/\partial r$ 로 두면 $d_k$ 는 $c_k$ 와 같은 점화식과 같은 끝 조건을 만족하므로 $d_k=c_k$ 다. $s$ 로 미분하면 같은 방법으로 $\partial b_{k-2}/\partial s=c_k$ 가 나온다. 정의 절의 계수 행렬은 $(b_0,b_1)$ 의 $(r,s)$ 에 대한 Jacobian 이다.

## 이차 수렴

정리. $x^2-rx-s$ 가 $p$ 의 인수이고 몫 $q$ 와 공통근이 없으면, 그 $(r,s)$ 근처의 초깃값에서 Bairstow 반복은 이차 수렴한다.

증명의 요지. 공통근이 없으면 위의 Jacobian 이 그 점에서 가역이고, 다변수 Newton 법의 국소 이차 수렴이 그대로 적용된다. 이차식이 중근을 갖거나 $q$ 와 근을 나누면 Jacobian 의 행렬식이 $0$ 이 되어 수렴이 선형으로 느려진다.

직관 절의 예에서 $(0,-1)$ 까지의 거리(두 성분 차의 최댓값)는 $1$, $0.6$, $0.20$, $2.4\times10^{-2}$, $6.1\times10^{-4}$, $2.3\times10^{-7}$, $1.2\times10^{-13}$ 이다. 마지막 세 걸음에서 지수가 거의 두 배씩 커진다.

## 초깃값과 찾는 인수

초깃값이 정하는 것은 어느 이차 인수로 가는가다. 같은 $p$ 에서 $(1.5,-1.5)$ 로 시작하면 $(2.235,-1.926)$, $(1.919,-1.716)$, $(2.003,-2.016)$ 을 거쳐 $(2,-2)$, 곧 인수 $x^2-2x+2$ 로 간다.

$(1,-1)$ 처럼 Jacobian 이 특이한 점에서 시작하면 첫 걸음을 계산할 수 없다. 이 예에서 $(1,-1)$ 이면 $c_1=c_2=c_3=0$ 이다. 전역 수렴은 보장되지 않으므로 실제 구현은 수렴하지 않을 때 초깃값을 바꿔 다시 시작한다.

# 활용

- 실수 계수 다항식의 모든 근. 이차 인수를 하나 찾을 때마다 몫으로 차수를 둘 낮추고([다항식 수축](polynomial-deflation.md)), 차수가 $1$ 이나 $2$ 로 남으면 직접 푼다. 계산이 [복소수](complex-numbers.md) 없이 실수로만 이루어지고, 켤레 근이 쌍으로 함께 나오므로 반올림 때문에 켤레가 어긋나지 않는다.[^1] 몫의 계수에 쌓인 반올림 오차는 찾은 인수를 원래 다항식에 대해 한두 걸음 다시 다듬어 줄인다.
- 다른 근 찾기 방법과의 분담. [Laguerre 법](laguerre-method.md)은 근을 하나씩, [Durand–Kerner 법](durand-kerner-method.md)은 모든 근을 동시에 복소수에서 찾는다. 실수 계수의 [Jenkins–Traub 알고리즘](jenkins-traub-algorithm.md)도 복소수 근의 쌍을 이차 인수로 찾는다.

[^1]: W. H. Press, S. A. Teukolsky, W. T. Vetterling, B. P. Flannery, Numerical Recipes, 3rd ed., Cambridge University Press (2007), §9.5.

# 연관 문서

## 선수지식

- [Newton 법](newton-method.md)
- [Horner 법](horner-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #algebra #analysis
