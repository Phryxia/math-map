# Stone–Weierstrass 정리

# 개요

Stone–Weierstrass 정리는 [콤팩트](compactness.md) 공간 위의 연속함수를 어떤 함수족으로 균등근사할 수 있는지 정한다. 점을 분리하고 상수함수를 담은 부분대수는 연속함수 전체에서 균등수렴 위상으로 조밀하다.

$\lbrack a,b\rbrack$ 위에서 다항식을 잡으면 Weierstrass 의 근사정리가 되고, 원 위에서 삼각다항식을 잡으면 Fourier 급수의 균등근사가 된다. 증명은 대수 조건에서 절댓값과 최댓값을 만들어 내고, 그것으로 국소적인 근사를 이어 붙이는 두 단계다.

# 직관

$\lbrack 0,1\rbrack$ 위의 연속함수 $f$ 를 다항식으로 오차 $\varepsilon$ 안에서 균등근사하려 한다. 연속함수는 각 점에서만 정보를 주므로, 점마다 맞춘 근사를 하나로 이어 붙이는 방법이 필요하다.

두 점 $x,y$ 를 정하면 $p(x)=f(x)$ 와 $p(y)=f(y)$ 를 만족하는 일차식 $p$ 가 있다. 점 쌍마다 이런 $p\_{xy}$ 를 잡으면 각 쌍에서는 정확하지만 다른 곳에서는 $f$ 와 멀다. 이 조각들을 합쳐 전체에서 가까운 하나를 만들려면 여러 조각의 최댓값과 최솟값을 취해야 한다.

최댓값은 대수 연산이 아니다. 그런데

$$
\max(g,h)=\frac{g+h+\vert g-h\vert}{2},\qquad \min(g,h)=\frac{g+h-\vert g-h\vert}{2}
$$

이므로 절댓값만 만들 수 있으면 최댓값과 최솟값이 따라온다. 절댓값은 $\vert t\vert=\sqrt{t^2}$ 이고 $\sqrt{\thinspace\cdot\thinspace}$ 를 $\lbrack 0,1\rbrack$ 에서 다항식으로 균등근사할 수 있으므로, 대수 안에서 $\vert g\vert$ 를 원하는 만큼 가깝게 얻는다.

절댓값이 생기면 이어 붙이기가 끝난다. 점 $x$ 를 고정하고 모든 $y$ 에 대해 $p\_{xy}$ 를 잡으면 각 $y$ 근방에서 $p\_{xy}\lt f+\varepsilon$ 이다. 콤팩트성으로 유한 개의 근방만 쓰면 되고, 그 유한 개의 최솟값이 $x$ 근방에서 $f-\varepsilon$ 보다 크면서 전체에서 $f+\varepsilon$ 보다 작다. 이제 $x$ 를 움직여 같은 일을 하고 최댓값을 취한다.

# 정의

## 부분대수와 점 분리

콤팩트 Hausdorff 공간 $X$ 위의 실숫값 연속함수 전체를 $C(X)$ 라 하고 노름을 $\Vert f\Vert=\sup\_{x\in X}\vert f(x)\vert$ 로 둔다. $C(X)$ 는 이 노름에 대해 [Banach 공간](banach-spaces.md)이고 곱셈에 대해 닫혀 있다.

$\mathcal A\subseteq C(X)$ 가 **부분대수**라는 것은 덧셈, 실수배, 곱셈에 대해 닫혀 있다는 뜻이다. $\mathcal A$ 의 **점 분리**는 서로 다른 $x,y\in X$ 마다 $g(x)\ne g(y)$ 인 $g\in\mathcal A$ 가 있다는 뜻이다.

# 성질

## Stone–Weierstrass 정리

**정리.** $X$ 가 콤팩트 Hausdorff 공간이고 $\mathcal A\subseteq C(X)$ 가 점을 분리하며 상수함수를 담은 부분대수이면 $\mathcal A$ 는 $C(X)$ 에서 조밀하다.[^1]

증명은 세 단계다.

첫째로 $\mathcal A$ 의 닫힘 $\overline{\mathcal A}$ 가 절댓값에 닫혀 있음을 본다. $\sqrt t$ 를 $\lbrack 0,1\rbrack$ 에서 균등근사하는 다항식 열 $q_k$ 를 잡고 $g\in\overline{\mathcal A}$ 에 대해 $q_k(g^2/\Vert g\Vert^2)$ 를 보면 $\vert g\vert/\Vert g\Vert$ 로 균등수렴한다. 위의 항등식으로 $\overline{\mathcal A}$ 는 최댓값과 최솟값에도 닫혀 있다.

둘째로 두 점에서의 값을 지정할 수 있음을 본다. $x\ne y$ 와 실수 $\alpha,\beta$ 에 대해 $g(x)\ne g(y)$ 인 $g\in\mathcal A$ 를 잡고

$$
p=\alpha+(\beta-\alpha)\thinspace\frac{g-g(x)}{g(y)-g(x)}
$$

로 두면 $p\in\mathcal A$ 이고 $p(x)=\alpha$ , $p(y)=\beta$ 다. 상수함수가 $\mathcal A$ 에 있어야 이 식이 $\mathcal A$ 안에 머문다.

셋째로 직관 절의 이어 붙이기를 수행한다. $f\in C(X)$ 와 $\varepsilon\gt 0$ 을 잡고 각 쌍 $(x,y)$ 에 대해 $p\_{xy}(x)=f(x)$ , $p\_{xy}(y)=f(y)$ 인 $p\_{xy}\in\mathcal A$ 를 둘째 단계로 얻는다. 연속성에서 $y$ 의 근방 $U_y$ 위에서 $p\_{xy}\lt f+\varepsilon$ 이고, $X$ 의 콤팩트성으로 $U\_{y_1},\dots,U\_{y_k}$ 가 $X$ 를 덮는다. $p_x=\min_j p\_{xy_j}$ 는 $\overline{\mathcal A}$ 에 있고 $X$ 전체에서 $p_x\lt f+\varepsilon$ 이며 $x$ 의 어떤 근방 $V_x$ 에서 $p_x\gt f-\varepsilon$ 이다. 다시 콤팩트성으로 $V\_{x_1},\dots,V\_{x_l}$ 을 골라 $p=\max_i p\_{x_i}$ 로 두면 $\Vert p-f\Vert\lt\varepsilon$ 이다. ∎

## Weierstrass 근사정리

**따름정리.** $\lbrack a,b\rbrack$ 위의 연속함수는 다항식으로 균등근사된다.[^2]

다항식 전체는 부분대수이고 상수를 담으며, 항등함수가 점을 분리한다. ∎

Bernstein 다항식으로 근사열을 직접 쓸 수도 있다. $f\in C\lbrack 0,1\rbrack$ 에 대해

$$
B_n f(x)=\sum_{k=0}^{n}f\Bigl(\frac kn\Bigr)\binom nk x^k(1-x)^{n-k}
$$

가 $f$ 로 균등수렴한다. 이 식은 성공확률 $x$ 인 시행 $n$ 회의 성공 비율에 $f$ 를 적용한 값의 기댓값이고, 큰 수의 법칙이 수렴을 준다.

## 복소 판본과 반례

복소숫값 함수에서는 조건이 하나 더 필요하다. $\mathcal A\subseteq C(X,\mathbb C)$ 가 켤레에 닫혀 있어야 조밀성이 성립한다.[^1]

단위원 위에서 $z$ 의 다항식 전체는 점을 분리하고 상수를 담은 부분대수이지만 조밀하지 않다. 그 닫힘에 속한 함수는 원판 안으로 정칙하게 연장되므로 평균값 성질을 따르고, $\bar z$ 는 그 성질을 어긴다. 켤레를 더하면 $z$ 와 $\bar z$ 의 다항식이 삼각다항식 전체와 같아져 조밀해진다.

# 활용

- **Fourier 급수의 균등근사.** 원 위의 삼각다항식은 켤레에 닫힌 부분대수이고 점을 분리하므로, 연속인 주기함수는 삼각다항식으로 균등근사된다. [Fourier 급수](fourier-series.md)의 부분합이 항상 균등수렴하지는 않으므로 근사의 존재는 따로 필요하다.
- **구면조화함수의 완전성.** 구면 위의 다항식 제한이 부분대수이고 점을 분리하므로 $C(S^2)$ 에서 조밀하고, $L^2$ 에서도 조밀하다. [구면조화함수](spherical-harmonics.md)가 $L^2(S^2)$ 의 정규직교기저를 이룬다는 진술을 이 정리가 준다.
- **측도의 결정.** 콤팩트 공간 위의 두 유한 Borel 측도가 어떤 조밀한 부분대수의 모든 원소에 같은 적분값을 주면 두 측도가 같다. 적률이 분포를 정하는 조건을 다룰 때 이 형태로 쓰인다.

[^1]: M. H. Stone, *The generalized Weierstrass approximation theorem*, Math. Mag. **21** (1948), 167–184 및 237–254. 켤레 조건과 격자 판본이 함께 있다.

[^2]: K. Weierstrass, *Über die analytische Darstellbarkeit sogenannter willkürlicher Functionen einer reellen Veränderlichen*, Sitzungsberichte der Akademie zu Berlin (1885), 633–639, 789–805.

# 연관 문서

## 선수지식

- [균등수렴](uniform-convergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #topology
