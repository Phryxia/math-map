# Zolotarev 유리 근사

# 개요

**Zolotarev 유리 근사(Zolotarev rational approximation)** 는 두 구간 $[-1,-\ell]$ 과 $[\ell,1]$ 에서 부호 함수에 가장 가까운, 차수를 정해 둔 유리함수다. 특이값이 $0.1$ 과 $1$ 사이에 퍼진 행렬의 극분해를 구하려면 특이값 전부를 $1$ 로 보내야 한다. [QDWH 반복](qdwh-iteration.md)(QR-based dynamically weighted Halley iteration)은 분자가 3차인 유리함수 하나로 한 걸음에 $[0.1,1]$ 을 $[0.866,1]$ 로 모은다.

분자가 5차인 유리함수로는 같은 구간을 한 걸음에 $[0.990,1]$ 로 모을 수 있다. Zolotarev 는 각 차수에서 가장 잘 모으는 함수를 [Jacobi 타원함수](jacobi-elliptic-functions.md)로 적었고, 이 함수를 반복에 쓰면 극분해가 두 걸음에 끝난다.

# 직관

QDWH 문서의 반복 $X\mapsto Xh(X^\ast X)$ 는 특이값마다 $\sigma\mapsto f(\sigma)$ 를 일으킨다. $f(\sigma)=\sigma(a+b\sigma^2)/(1+c\sigma^2)$ 의 계수를 하한 $\ell=0.1$ 에 맞추어 고르면 $[0.1,1]$ 에서 $f$ 의 값은 $0.866$ 과 $1$ 사이에 있다. $f$ 는 $\sigma=0.1$ 과 $0.542$ 에서 최솟값 $0.866$ 에, $\sigma=0.184$ 와 $1$ 에서 최댓값 $1$ 에 닿는다. 네 점에서 최솟값과 최댓값이 번갈아 나온다.

분자와 분모에 $\sigma^2$ 의 일차식을 하나씩 더 곱한 꼴을 쓴다.

$$
f(\sigma)=M\sigma\frac{(\sigma^2+c\_2)(\sigma^2+c\_4)}{(\sigma^2+c\_1)(\sigma^2+c\_3)}
$$

$c\_1=0.00655$, $c\_2=0.0440$, $c\_3=0.227$, $c\_4=1.527$, $M=0.468$ 로 두면 $[0.1,1]$ 에서 $f$ 의 값은 $0.990$ 과 $1$ 사이에 있다. 이번에는 $\sigma=0.1$, $0.228$, $0.780$ 에서 최솟값 $0.990$ 에, $\sigma=0.128$, $0.440$, $1$ 에서 최댓값 $1$ 에 닿아 여섯 점에서 번갈아 나온다.

이 $f$ 를 $2/(1+0.990)$ 배 하면 $[0.1,1]$ 에서 값이 $1-0.00496$ 과 $1+0.00496$ 사이에 있고, 음수 쪽에서는 홀함수라 $-1$ 근처에 있다. 그러므로 행렬 문제는 두 구간에서 부호 함수를 유리함수로 근사하는 문제다.

# 정의

## Zolotarev 함수

$0\lt\ell\lt 1$ 이고 $r$ 이 양의 정수다. 분자의 차수가 $2r+1$ 이하, 분모의 차수가 $2r$ 이하인 실계수 유리함수 $R$ 가운데 다음 값을 가장 작게 하는 것을 **Zolotarev 함수(Zolotarev function)** $Z\_{2r+1}(x;\ell)$ 라 한다.

$$
\max\_{\ell\le\vert x\vert\le 1}\bigl\vert\mathrm{sign}(x)-R(x)\bigr\vert
$$

Zolotarev 는 이 함수를 다음과 같이 적었다[^1]. $\ell'=\sqrt{1-\ell^2}$, $K'=K(\ell')$ 이고 $\mathrm{sn}$, $\mathrm{cn}$ 은 모듈러스 $\ell'$ 의 Jacobi 타원함수다.

$$
c\_i=\ell^2\frac{\mathrm{sn}^2\bigl(iK'/(2r+1);\ell'\bigr)}{\mathrm{cn}^2\bigl(iK'/(2r+1);\ell'\bigr)},\qquad i=1,\dots,2r
$$

$$
\hat Z\_{2r+1}(x;\ell)=\hat Mx\prod\_{j=1}^{r}\frac{x^2+c\_{2j}}{x^2+c\_{2j-1}}
$$

상수 $\hat M$ 은 $\hat Z\_{2r+1}(1;\ell)=1$ 이 되게 정한다. $m=\hat Z\_{2r+1}(\ell;\ell)$ 로 두면 다음이 성립한다[^2].

$$
Z\_{2r+1}(x;\ell)=\frac{2}{1+m}\hat Z\_{2r+1}(x;\ell),\qquad\max\_{\ell\le\vert x\vert\le 1}\bigl\vert\mathrm{sign}(x)-Z\_{2r+1}(x;\ell)\bigr\vert=\frac{1-m}{1+m}
$$

직관 절의 둘째 함수가 $\ell=0.1$ 에서 $r=2$ 인 $\hat Z\_5$ 다. $r=1$ 이면 $c\_1=0.02483$, $c\_2=0.4027$, $\hat M=0.7306$ 이다. QDWH 문서의 계수 $a\_0=11.85$, $b\_0=29.42$, $c\_0=40.27$ 과 견주면 $c\_1=1/c\_0$, $c\_2=a\_0/b\_0$, $\hat M=b\_0/c\_0$ 이므로 $\hat Z\_3$ 은 QDWH 반복의 첫 걸음 함수다.

## Zolo-pd

$A$ 가 가역이고 $\alpha\ge\Vert A\Vert\_2$, $0\lt\ell\_0\le\sigma\_{\min}(A)/\alpha$ 로 둔다. $X\_0=A/\alpha$ 에서 다음을 되풀이하는 반복을 **Zolo-pd(Zolotarev polar decomposition)** 라 한다[^2].

$$
X\_{k+1}=\hat Z\_{2r+1}(X\_k;\ell\_k),\qquad\ell\_{k+1}=\hat Z\_{2r+1}(\ell\_k;\ell\_k)
$$

행렬에 쓰는 $\hat Z\_{2r+1}(X)$ 는 $X$ 의 특이값에 $\hat Z\_{2r+1}$ 을 쓴 것이다. 이것을 계산하려고 $\hat Z\_{2r+1}$ 을 [부분분수 분해](partial-fraction-decomposition.md)한다.

$$
\hat Z\_{2r+1}(x;\ell)=\hat Mx\Bigl(1+\sum\_{j=1}^{r}\frac{a\_j}{x^2+c\_{2j-1}}\Bigr),\qquad a\_j=-\frac{\prod\_{k=1}^{r}(c\_{2j-1}-c\_{2k})}{\prod\_{k\ne j}(c\_{2j-1}-c\_{2k-1})}
$$

직관 절의 $\hat Z\_5$ 에서는 $a\_1=0.258$, $a\_2=1.079$ 다. 각 항의 $X(X^\ast X+cI)^{-1}$ 은 QDWH 반복과 같이 QR 분해로 구한다.

$$
\begin{pmatrix}X\cr\sqrt cI\end{pmatrix}=\begin{pmatrix}Q\_1\cr Q\_2\end{pmatrix}R\quad\Longrightarrow\quad X(X^\ast X+cI)^{-1}=\frac{1}{\sqrt c}Q\_1Q\_2^\ast
$$

$R^\ast R=X^\ast X+cI$ 이고 $Q\_1=XR^{-1}$, $Q\_2=\sqrt cR^{-1}$ 이므로 이 식이 나온다. $r$ 개의 QR 분해는 서로 독립이다.

```javascript
function zoloPd(A, alpha, ell, r, tol) {
  let X = scale(A, 1 / alpha);
  while (!closeTo(ell, 1, tol)) {
    const { c, a, M } = zolotarevCoefficients(r, ell); // 정의 절의 c_i, a_j, M
    let S = X;
    for (let j = 1; j <= r; j++) { // 서로 독립이라 병렬로 계산한다
      const s = Math.sqrt(c[2 * j - 1]);
      const [Q1, Q2] = thinQR(stack(X, scale(identity(X.cols), s)));
      S = add(S, scale(mul(Q1, adjoint(Q2)), a[j] / s));
    }
    X = scale(S, M);
    ell = zolotarev(ell, c, M); // 스칼라 ell 에 같은 함수를 쓴다
  }
  return X; // 극분해의 유니터리 인수
}
```

# 성질

## 등진동

정리. $\hat Z\_{2r+1}(x;\ell)$ 은 $[\ell,1]$ 의 $2r+2$ 개 점 $\ell=x\_0\lt x\_1\lt\dots\lt x\_{2r+1}=1$ 에서 최솟값 $m$ 과 최댓값 $1$ 에 번갈아 닿는다. 거꾸로 차수가 $(2r+1,2r)$ 이하인 홀수 유리함수 $F$ 가 $F(1)=1$ 이고 $[\ell,1]$ 의 $2r+2$ 개 점에서 최솟값과 최댓값 $1$ 에 번갈아 닿으면 $F=\hat Z\_{2r+1}$ 이다[^3].

증명의 요지. 이렇게 번갈아 닿는 함수를 상수배 해 값의 범위를 $1$ 에 대해 대칭으로 맞추면 오차가 $2r+2$ 개 점에서 부호를 바꾸며 최대 절댓값에 닿는다. 유리함수 근사의 교대 정리(alternation theorem)에서 이런 함수는 최량 근사이고, 최량 근사는 하나뿐이다.

[Chebyshev 다항식](chebyshev-polynomials.md)이 최량 다항식 근사를 특징짓는 등진동(equioscillation)과 같은 꼴이다. 직관 절의 네 점과 여섯 점이 $r=1$ 과 $r=2$ 의 경우다. QDWH 문서의 "계수의 최적성" 정리가 $r=1$ 의 경우다.

## 합성 정리

정리. $\ell\_1=\hat Z\_{2r+1}(\ell;\ell)$ 이면 다음이 성립한다[^2].

$$
\hat Z\_{2r+1}\bigl(\hat Z\_{2r+1}(x;\ell);\ell\_1\bigr)=\hat Z\_{(2r+1)^2}(x;\ell)
$$

증명의 요지. 안쪽 함수는 $[\ell,1]$ 을 단조인 조각 $2r+1$ 개로 나누어 각 조각을 $[\ell\_1,1]$ 위로 보낸다. 바깥 함수는 $[\ell\_1,1]$ 의 $2r+2$ 개 점에서 번갈아 닿으므로, 합성은 조각마다 $2r+2$ 개, 이웃한 조각이 끝점을 나누어 모두 $(2r+1)^2+1$ 개 점에서 번갈아 닿는다. 합성의 차수는 $((2r+1)^2,(2r+1)^2-1)$ 이므로 등진동 정리에서 $\hat Z\_{(2r+1)^2}$ 이다.

그러므로 Zolo-pd 를 $k$ 걸음 돌린 결과는 $\hat Z\_{(2r+1)^k}(A/\alpha;\ell\_0)$ 이다. $r=1$ 이면 QDWH 반복 $k$ 걸음이 차수 $3^k$ 의 Zolotarev 함수다. $\ell\_0=0.1$ 에서 QDWH 반복 두 걸음은 $\ell\_2=0.99995$ 를 주고, 이것이 $\hat Z\_9(0.1;0.1)$ 이다.

## 오차의 감소

$\ell=0.1$ 에서 오차 $(1-m)/(1+m)$ 은 $r=1,2,3$ 에 대해 $0.0720$, $0.00496$, $0.000341$ 이다. 오차는 $r$ 에 대해 지수적으로 줄고, 감소율은 $\log(1/\ell)$ 이 클수록 느리다[^2].

## 두 걸음 수렴

정리. $\kappa\_2(A)\le 10^{16}$ 이면 $r\le 8$ 인 Zolo-pd 는 두 걸음 만에 $\ell\_2$ 를 배정밀도의 $1$ 과 구별되지 않을 만큼 가깝게 만든다[^2].

합성 정리로 두 걸음은 차수 $(2r+1)^2$ 의 Zolotarev 함수 하나다. $r=8$ 이면 차수 $289$ 이고, 같은 조건에서 QDWH 반복은 여섯 걸음까지 든다. 산술량은 QDWH 반복보다 많지만, 걸음마다 $r$ 개의 QR 분해를 병렬로 하면 차례로 해야 하는 걸음이 둘이다.

# 활용

- 극분해와 고윳값 분해. Nakatsukasa 와 Freund 는 Zolo-pd 의 유니터리 인수를 [스펙트럼 분할정복](spectral-divide-and-conquer.md)에 넣어 대칭 고윳값 분해와 [특이값 분해](singular-value-decomposition.md)를 구했다[^2].
- [행렬 부호 함수](matrix-sign-function.md). 고윳값이 $[-1,-\ell]$ 과 $[\ell,1]$ 에 있는 대칭행렬 $H$ 에 대해 $Z\_{2r+1}(H;\ell)$ 이 $\mathrm{sign}(H)$ 의 근사다. 격자 양자색역학의 overlap 연산자가 이 근사를 쓴다[^4].
- [교대 방향 음함수 방법](alternating-direction-implicit-method.md). 이동 매개변수를 고르는 문제는 구간 위에서 $\prod\_j(x-p\_j)/(x+p\_j)$ 의 최대 절댓값을 가장 작게 하는 유리함수 근사 문제이고, Zolotarev 가 같은 타원함수로 풀었다[^5].
- 타원 필터(elliptic filter). 통과 대역과 저지 대역에서 크기가 같은 폭으로 오르내리는 전달함수를 Zolotarev 의 유리함수로 만든다.

[^1]: E. I. Zolotarev, "Application of elliptic functions to questions of functions deviating least and most from zero", (1877).
[^2]: Y. Nakatsukasa, R. W. Freund, "Computing fundamental matrix decompositions accurately via the matrix sign function in two iterations: the power of Zolotarev's functions", *SIAM Review* 58 (2016), 461–493.
[^3]: N. I. Akhiezer, *Elements of the Theory of Elliptic Functions*, American Mathematical Society (1990).
[^4]: J. van den Eshof, A. Frommer, Th. Lippert, K. Schilling, H. A. van der Vorst, "Numerical methods for the QCD overlap operator: I. sign-function and error bounds", *Computer Physics Communications* 146 (2002), 203–224.
[^5]: E. L. Wachspress, *The ADI Model Problem*, Springer (2013).

# 연관 문서

## 선수지식

- [QDWH 반복](qdwh-iteration.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #algorithms #complex_analysis
