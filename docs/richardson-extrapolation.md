# Richardson 외삽

# 개요

**Richardson 외삽(Richardson extrapolation)** 은 간격을 줄여 가며 얻은 근삿값 두 개를 섞어 더 정확한 값을 만드는 방법이다. 단위원에 내접한 정 $n$ 각형의 둘레의 절반 $A(n)$ 은 $\pi$ 의 근삿값이고 오차가 대략 $1/n^2$ 에 비례하므로, $A(6)=3$ 과 $A(12)\approx 3.1058$ 로 $(4A(12)-A(6))/3\approx 3.1411$ 을 만들면 두 값보다 $\pi$ 에 훨씬 가깝다. Richardson 외삽은 오차가 간격의 거듭제곱으로 전개될 때 서로 다른 간격의 근삿값을 선형결합해 오차의 첫 항을 지우고, 이를 되풀이해 수치 적분과 수치 미분의 정확도를 높인다.

# 직관

Richardson 외삽은 간격 $h$ 에 따라 정해지는 근삿값 $A(h)$ 의 오차가 $h$ 의 거듭제곱으로 전개될 때, 서로 다른 $h$ 의 근삿값 둘을 선형결합해 오차의 첫 항을 지우는 방법이다. $A(h)=A+ch^p+O(h^q)$ $(q\gt p)$ 이면

$$
\frac{2^pA(h/2)-A(h)}{2^p-1}=A+O(h^q)
$$

이다. L. F. Richardson 이 체계적으로 썼고[^1], 복합 사다리꼴 규칙에 되풀이해 쓴 것이 W. Romberg 의 적분법이다[^2].

$f(x)=e^x$ 의 $x=0$ 에서의 미분 $1$ 을 중심 차분 $D(h)=\bigl(f(h)-f(-h)\bigr)/2h$ 로 어림한다. $D(h)=\sinh h/h$ 이므로 $h=0.2$ 에서 $1.00668$, $h=0.1$ 에서 $1.00167$ 이다. 오차가 $h$ 를 반으로 줄일 때 약 $1/4$ 로 줄어든다.

Taylor 전개로 $D(h)=f^\prime(0)+\frac{h^2}{6}f^{\prime\prime\prime}(0)+O(h^4)$ 이므로 오차의 첫 항이 $h^2$ 에 비례한다. 그러면 $4D(0.1)-D(0.2)$ 에서 $h^2$ 항이 지워지고, $3$ 으로 나누면 $(4\cdot 1.00167-1.00668)/3\approx 0.999997$ 이다. 함숫값을 더 계산하지 않고 오차가 $h^4$ 규모로 줄었다.

# 정의

$A(h)$ 가

$$
A(h)=A+c_1h^{p_1}+c_2h^{p_2}+\cdots,\qquad 0\lt p_1\lt p_2\lt\cdots
$$

꼴의 전개를 가진다고 하자. 비 $r\gt 1$ 에 대해

$$
A_1(h)=\frac{r^{p_1}A(h/r)-A(h)}{r^{p_1}-1}
$$

을 **Richardson 외삽값** 이라 한다. $A_1(h)=A+O(h^{p_2})$ 이고, $A_1$ 에 같은 연산을 $p_2$ 로 다시 쓰면 다음 항이 지워진다.

# 성질

## Romberg 적분

복합 사다리꼴 규칙 $T(h)$ 의 오차는 $f$ 가 매끄러우면 [Euler–Maclaurin 공식](euler-maclaurin.md)으로 $h^2,h^4,h^6,\dots$ 의 짝수 거듭제곱으로만 전개된다. $R_{k,0}=T\bigl((b-a)/2^k\bigr)$ 로 두고

$$
R_{k,j}=R_{k,j-1}+\frac{R_{k,j-1}-R_{k-1,j-1}}{4^j-1}
$$

로 표를 채우는 것이 **Romberg 적분(Romberg integration)** 이다. $R_{k,j}$ 의 오차는 $h_k=(b-a)/2^k$ 에 대해 $O(h_k^{2j+2})$ 다. $R_{k,1}$ 은 복합 Simpson 규칙과 같다.

```javascript
// R[k][j]: 칸 2^k 개의 사다리꼴 값에서 j 번 외삽한 값
function romberg(f, a, b, K) {
  const R = [[(b - a) * (f(a) + f(b)) / 2]];
  for (let k = 1; k <= K; k++) {
    const h = (b - a) / 2 ** k;
    let s = 0;
    for (let i = 1; i < 2 ** k; i += 2) s += f(a + i * h);
    R[k] = [R[k - 1][0] / 2 + h * s];
    for (let j = 1; j <= k; j++)
      R[k][j] = R[k][j - 1] + (R[k][j - 1] - R[k - 1][j - 1]) / (4 ** j - 1);
  }
  return R[K][K];
}
```

## 오차 전개의 조건

외삽은 오차 전개가 성립할 때만 차수를 올린다. 피적분함수가 끝점에서 $\sqrt x$ 처럼 매끄럽지 않으면 사다리꼴 오차에 $h^{3/2}$ 같은 항이 나타나고, $h^2$ 를 가정한 Romberg 표는 차수를 올리지 못한다. 주기함수를 한 주기에서 적분하면 Euler–Maclaurin 전개의 모든 항이 $0$ 이라 외삽할 것이 없다.

## 반올림 오차

$h$ 를 줄이면 절단 오차는 줄지만 함숫값의 반올림 오차가 커진다. 중심 차분에서 함숫값의 상대 오차가 $\delta$ 이면 반올림 오차는 $\delta/h$ 규모다. 외삽은 큰 $h$ 에서 높은 차수를 얻으므로, 같은 정확도를 더 큰 $h$ 에서 얻어 반올림 오차를 줄인다.

# 활용

- [Newton–Cotes 공식](newton-cotes.md)의 복합 규칙에 Romberg 적분을 쓰면 매끄러운 함수에서 수렴 차수가 단계마다 $2$ 씩 오른다.
- [상미분방정식](ordinary-differential-equations.md)의 수치해법. 간격 $h$ 의 해법이 $h^p$ 의 전개를 가지면 간격을 줄여 가며 외삽하는 Bulirsch–Stoer 방법(Bulirsch–Stoer method)이 된다.

[^1]: L. F. Richardson, J. A. Gaunt, "The deferred approach to the limit", Phil. Trans. R. Soc. Lond. A 226 (1927), 299–361.
[^2]: W. Romberg, "Vereinfachte numerische Integration", Det Kongelige Norske Videnskabers Selskabs Forhandlinger 28 (1955), 30–36.

# 연관 문서

## 선수지식

- [Newton–Cotes 공식](newton-cotes.md)
- [Euler–Maclaurin 공식](euler-maclaurin.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algorithms
