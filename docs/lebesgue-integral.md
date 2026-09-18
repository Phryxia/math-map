# Lebesgue 적분

# 개요

[Riemann 적분](riemann-integral.md)은 정의역을 자르고 각 조각 위에서 함수가 거의 일정하기를 요구하므로, 함수가 어디서나 요동치면 무너진다. Lebesgue 적분은 치역을 잘라 함수값이 $c$ 근처인 점들의 집합이 얼마나 큰지를 재고 그 크기에 $c$ 를 곱해 더한다.

이 전환에는 임의의 집합의 크기를 재는 [측도](measure.md)가 필요하고, 재는 대상이 잘 정의되려면 함수가 [가측](measurable-functions.md)이어야 한다. 두 개념을 갖추면 Riemann 적분이 다루지 못하던 함수가 들어오고 극한과 적분을 교환하는 정리들이 생긴다. 이 교환 가능성이 Lebesgue 이론의 성과다.

# 직관

## 치역을 자르는 방식

동전 더미의 총액을 구할 때 Riemann 은 왼쪽부터 순서대로 집어 액면가를 더하고, Lebesgue 는 액면가별로 쌓아 각 더미의 개수에 액면가를 곱해 더한다. 두 방법의 답은 같지만 동전의 순서가 엉망일수록 두 번째가 안정적이다.

함수가 심하게 진동해도 $\lbrace x:f(x)\gt c\rbrace$ 의 측도만 알면 적분이 정의된다.

## 단순함수의 상한

정의는 두 단계다. 유한 개의 값만 갖는 단순함수에 대해 값 곱하기 그 값을 갖는 집합의 측도로 적분을 정하고, 일반적인 음이 아닌 함수의 적분은 그 아래에 놓인 모든 단순함수의 적분값의 최소 상계로 정한다.

상한만 쓰고 하한을 쓰지 않는 점이 Riemann 의 Darboux 정의와 다르다. 위아래에서 조여 만나기를 요구하지 않으므로 값이 무한대여도 정의가 성립하고 적분 가능성과 적분값의 정의가 분리되며, 이것이 극한 정리들의 근거가 된다.

```mermaid
graph TD
  A["음이 아닌 단순함수<br/>∫ = Σ c_i μ(A_i)"] --> B["음이 아닌 가측함수<br/>∫ = sup over s ≤ f"]
  B --> C["실수값 가측함수<br/>∫ = ∫f⁺ − ∫f⁻"]
  C --> D["적분 가능: ∫|f| < ∞"]
  B --> E["단조수렴 / Fatou"]
  D --> F["지배수렴"]
```

# 정의

## 단순함수의 적분

측도 공간 $(X, \Sigma, \mu)$ 를 고정한다. 지시함수 $\mathbf{1}\_A$ 는 $A$ 위에서 값이 $1$ 이고 바깥에서 $0$ 이다. 서로소 가측집합 $A_1, \dots, A_n$ 과 음이 아닌 유한 실수 $c_1, \dots, c_n$ 으로 만든 단순함수 $s$ 에 대해

$$
s=\sum_{i=1}^n c_i\mathbf{1}\_{A_i},\qquad
\int_X s\thinspace d\mu=\sum_{i=1}^n c_i\thinspace\mu(A_i)
$$

로 정한다. 여기서 $0 \cdot \infty = 0$ 으로 약속한다. 이 값이 $s$ 의 표현 방식에 의존하지 않는다는 것은 공통 세분을 취해 확인한다.

## 일반 함수의 적분

음이 아닌 가측함수 $f$ 에 대해

$$
\int_X f\thinspace d\mu=\sup\Bigl\lbrace\int_X s\thinspace d\mu\ :\ 0\le s\le f,\ s\text{ 단순}\Bigr\rbrace
$$

로 정의하며 값으로 $\infty$ 를 허용한다. 실수값 가측함수는 $f^+ = \max(f, 0)$ 과 $f^- = \max(-f, 0)$ 으로 쪼개

$$
\int_X f\thinspace d\mu=\int_X f^+\thinspace d\mu-\int_X f^-\thinspace d\mu
$$

로 정한다. 두 항이 모두 무한대면 정의되지 않는다. $\int \lvert f \rvert\thinspace d\mu \lt\infty$ 이면 $f$ 가 **적분 가능**하고, 그런 함수들의 모임이 $L^1(\mu)$ 다. 가측집합 $E$ 위의 적분은 $\int f \cdot \mathbf{1}\_E\thinspace d\mu$ 다.

## 거의 어디서나

측도 $0$ 인 집합을 제외하고 성립하는 성질을 **거의 어디서나** 성립한다고 한다. $f = g$ 가 거의 어디서나이면 두 적분이 같으므로 Lebesgue 적분은 측도 $0$ 집합 위의 값 변화를 보지 않고, $L^1$ 을 함수들의 동치류 공간으로 다룬다.

# 성질

## 기본 성질

- 단조성: $0 \le f \le g$ 이면 $\int f \le \int g$ 다. $f$ 아래의 단순함수는 모두 $g$ 아래에도 있기 때문이다.
- 선형성: $\int (af + bg) = a\int f + b\int g$ 다. 음이 아닌 경우는 단조수렴 정리를 거쳐 증명하며, 정의에서 곧바로 나오지 않는다는 점이 Riemann 과 다르다.
- 삼각부등식: $\lvert \int f \rvert \le \int \lvert f \rvert$ 다.
- $\int \lvert f \rvert\thinspace d\mu = 0$ 인 것과 $f = 0$ 이 거의 어디서나인 것은 동치다.

## 수렴 정리

다음 세 정리가 이 이론의 핵심이다.

| 정리 | 가정 | 결론 |
|---|---|---|
| [단조수렴](monotone-convergence.md) | $0 \le f_1 \le f_2 \le \cdots$ 이고 $f_n \to f$ | $\int f_n \to \int f$ |
| Fatou | $f_n \ge 0$ | $\int \liminf f_n \le \liminf \int f_n$ |
| [지배수렴](dominated-convergence.md) | $f_n \to f$ 거의 어디서나이고 $\lvert f_n \rvert \le g \in L^1$ | $\int f_n \to \int f$ 이고 $\int \lvert f_n - f \rvert \to 0$ |

가정이 점별 수렴이다. Riemann 적분에서는 균등수렴이 필요했는데 여기서는 단조성이나 적분 가능한 지배함수면 된다. 이 완화로 급수와 적분의 교환, 매개변수 미분과 적분의 교환이 실용적인 도구가 된다.

단조수렴 정리의 따름정리로 음이 아닌 항의 급수와 적분을 항상 교환할 수 있다.

$$
\int_X\sum_{n=1}^\infty f_n\thinspace d\mu=\sum_{n=1}^\infty\int_X f_n\thinspace d\mu\qquad(f_n\ge0)
$$

## Riemann 적분과의 관계

유계함수가 $[a,b]$ 에서 Riemann 적분 가능하면 Lebesgue 적분도 가능하고 두 값이 같으므로, Lebesgue 적분은 Riemann 적분의 확장이다.

역은 성립하지 않는다. $[0,1]$ 에서 유리수의 지시함수는 유리수 집합의 측도가 $0$ 이므로 Lebesgue 적분이 $0$ 이지만, 모든 부분구간에 유리수와 무리수가 있어 상합이 $1$ 이고 하합이 $0$ 이라 Riemann 적분이 존재하지 않는다.

예외가 하나 있다. 이상적분 $\int_0^\infty \frac{\sin x}{x}\thinspace dx$ 는 수렴하지만 $\int \frac{\lvert \sin x \rvert}{x}\thinspace dx = \infty$ 라 Lebesgue 적분 가능하지 않다. Lebesgue 적분은 절대적분이라 조건수렴을 담지 못하고, 이 경우에는 이상적분을 따로 다룬다.

## 완비성

$L^1(\mu)$ 는 $\lVert f \rVert_1 = \int \lvert f \rvert\thinspace d\mu$ 로 완비 노름공간이 된다. 이것이 Riesz–Fischer 정리이고 지배수렴 정리가 증명의 도구다. Riemann 적분으로 같은 노름을 주면 완비가 되지 않으므로, Lebesgue 이론이 빠진 극한을 채운다. 같은 방식으로 $L^2$ 가 Hilbert 공간이 되고 Fourier 해석의 무대가 된다.

## 측도의 교체

정의에 등장하는 것은 $\mu$ 뿐이므로 측도를 바꾸면 다른 대상이 나온다.

# 활용

## 급수와 기댓값

셈측도를 쓰면 적분이 급수가 되고 확률측도를 쓰면 [기댓값](random-variables.md)이 되므로, 급수의 교환 정리와 확률의 수렴 정리를 따로 증명하지 않는다. 이산분포와 연속분포가 섞인 확률변수도 밀도가 없는 특이분포도 같은 정의로 다뤄진다. 확률론이 측도론 위에 세워진 근거다.

## 밀도와 측도의 비교

두 측도 사이의 관계를 함수 하나로 표현할 수 있는지를 묻는 것이 [Radon–Nikodym 정리](radon-nikodym.md)다. 절대연속이면 밀도가 존재하고, 그 밀도가 확률에서 확률밀도함수, 통계에서 [우도비](change-of-measure.md), 정보이론에서 [KL divergence](kl-divergence.md)의 피적분함수가 된다.

## 교환의 조건

수렴 정리들이 극한과 적분의 교환을 넉넉하게 허용하지만 무조건은 아니다. $f_n = n \cdot \mathbf{1}\_{(0,1/n)}$ 은 점별로 $0$ 에 수렴하지만 모든 $n$ 에서 적분이 $1$ 이다. 지배함수가 없는 경우이고 Fatou 의 부등식이 등호가 아닌 이유를 보이는 예다. 적분 기호와 극한 기호의 순서를 바꿀 때는 어떤 정리의 어떤 가정을 쓰는지 밝혀야 한다.[^1]

[^1]: Terence Tao, *245A Notes 3: Integration on abstract measure spaces and the convergence theorems*, §4 정의 10·11·13. 단순함수에서 일반 가측함수로의 확장과 수렴 정리. https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Riemann 적분](riemann-integral.md)
- [가측함수](measurable-functions.md)

## 더 알아보기

- [단조 수렴 정리](monotone-convergence.md)
- [Radon–Nikodym 정리](radon-nikodym.md)
- [확률변수와 기댓값](random-variables.md)

#measure_theory #analysis #probability
