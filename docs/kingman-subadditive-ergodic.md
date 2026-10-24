# Kingman 부분가법 에르고딕 정리

# 개요

**Kingman 부분가법 에르고딕 정리(Kingman's subadditive ergodic theorem)** 는 측도보존변환 위의 부분가법 확률변수열 $g_n$ 에서 $g_n/n$ 이 거의 모든 점에서 수렴한다는 정리다. Kingman 이 1968 년에 증명했다.[^1]

[Fekete 보조정리](fekete-lemma.md)는 수열 하나의 부분가법성에서 극한을 얻는다. 이 정리는 표본마다 다른 수열이 나오는 경우에 같은 결론을 준다. $g_n$ 이 가법이면 Birkhoff 의 [에르고딕 정리](ergodic-theorem.md)와 같다.

# 직관

$2\times 2$ 무작위 행렬 $A_1,A_2,\dots$ 이 독립이고 같은 분포를 따른다고 한다. 곱 $A_n\cdots A_1$ 의 크기가 $n$ 에 대해 지수적으로 자라는지, 그 지수가 얼마인지 알고 싶다. $g_n=\log\Vert A_n\cdots A_1\Vert$ 로 두면 노름의 부분곱셈성으로

$$
g_{m+n}\le g_m+\log\Vert A_{m+n}\cdots A_{m+1}\Vert
$$

이다. 오른쪽 둘째 항은 $g_n$ 과 분포가 같으므로 기댓값 $a_n=\mathbb E\thinspace g_n$ 은 $a_{m+n}\le a_m+a_n$ 을 만족하고, Fekete 보조정리로 $a_n/n$ 이 수렴한다.

평균의 증가율이 정해져도 각 표본에서 $g_n/n$ 이 수렴하는지는 따로 남는다. 합 $\sum f(T^kx)$ 이었다면 에르고딕 정리가 답하지만, 여기서는 등식 대신 부등식만 있다. 이 정리는 부등식만으로도 거의 모든 표본에서 $g_n/n$ 이 평균의 극한으로 수렴한다고 답한다.

# 정의

## 부분가법 과정

$(X,\mathcal B,\mu)$ 가 확률공간이고 $T$ 가 측도보존변환이라 한다. 적분가능한 함수열 $g_n\colon X\to\mathbb R$ 이 거의 모든 $x$ 와 모든 $m,n\ge 1$ 에서

$$
g_{m+n}(x)\le g_m(x)+g_n(T^mx)
$$

를 만족하면 $(g_n)$ 을 $T$ 위의 **부분가법 과정(subadditive process)** 이라 한다. 직관 절에서는 $X$ 가 행렬열 $(A_1,A_2,\dots)$ 의 공간이고 $T$ 가 한 칸 미는 이동이다. $f\in L^1$ 의 합 $g_n=\sum_{k=0}^{n-1}f\circ T^k$ 은 등호가 성립하는 경우다.

# 성질

## Kingman 정리

> **정리 (Kingman 1968).** $(g_n)$ 이 부분가법 과정이고 $\gamma=\inf_n\frac1n\int g_n\thinspace d\mu\gt -\infty$ 이면, $g_n/n$ 은 거의 모든 점과 $L^1$ 에서 $T$ 불변인 함수 $g$ 로 수렴하고 $\int g\thinspace d\mu=\gamma$ 다. $T$ 가 에르고딕이면 $g=\gamma$ 가 거의 어디서나 성립한다.

$a_n=\int g_n\thinspace d\mu$ 는 $T$ 가 측도를 보존하므로 부분가법이고, Fekete 보조정리로 $\gamma=\lim a_n/n$ 이다.

증명의 요지. $\underline g=\liminf g_n/n$ 으로 두면 $g_{n+1}\le g_1+g_n\circ T$ 에서 $\underline g\le\underline g\circ T$ 가 나오고, $T$ 가 측도를 보존하므로 $\underline g$ 는 $T$ 불변이다. 상극한이 $\underline g$ 이하라는 것은 각 점의 궤도를 $g_k/k$ 가 처음으로 $\underline g+\varepsilon$ 아래로 내려가는 시각들로 잘라, 부분가법성을 조각마다 적용해 얻는다. 이 판본의 짧은 증명은 Steele 의 것이다.[^2]

## Furstenberg–Kesten 정리

> **정리 (Furstenberg–Kesten 1960).** 독립이고 같은 분포를 따르는 무작위 행렬 $A_n$ 이 $\mathbb E\log^+\Vert A_1\Vert\lt\infty$ 를 만족하면 $\frac1n\log\Vert A_n\cdots A_1\Vert$ 가 거의 확실히 상수 $\lambda_1$ 로 수렴한다.

직관 절의 $g_n$ 에 Kingman 정리를 적용한 것이고, 이동 $T$ 가 에르고딕이어서 극한이 상수다. $\lambda_1$ 을 **최대 Lyapunov 지수(top Lyapunov exponent)** 라 한다.

# 활용

- **최초 통과 침투.** 정수 격자의 각 변에 독립이고 같은 분포의 통과 시간을 주고 $0$ 에서 $nx$ 까지의 최소 통과 시간을 $\tau(0,nx)$ 라 하면 $\tau(0,(m+n)x)\le\tau(0,mx)+\tau(mx,(m+n)x)$ 다. 이 정리로 시간 상수 $\lim\tau(0,nx)/n$ 이 거의 확실히 존재한다. 최초 통과 침투(first-passage percolation)는 Hammersley 와 Welsh 가 도입한 [침투](percolation.md)의 변형이다.
- **최장 증가 부분수열.** 단위정사각형에 Poisson 점을 뿌리고 오른쪽 위로 가는 경로가 지나는 점의 최대 개수를 보면 초가법 과정이 된다. Hammersley 는 이것으로 [최장 증가 부분수열](longest-increasing-subsequence.md)의 길이를 $\sqrt n$ 으로 나눈 값이 상수로 수렴함을 보였고, 그 상수가 $2$ 라는 것은 Vershik–Kerov 와 Logan–Shepp 가 증명했다.
- **Oseledets 정리.** 최대 지수뿐 아니라 Lyapunov 지수 전체와 그에 맞는 부분공간의 분해를 주는 [Oseledets 곱셈 에르고딕 정리](oseledets-theorem.md)는 외대수 $\Lambda^kA$ 의 노름에 이 정리를 적용해 증명한다.

[^1]: J. F. C. Kingman, "The ergodic theory of subadditive stochastic processes", *Journal of the Royal Statistical Society, Series B* 30 (1968), 499–510. H. Furstenberg, H. Kesten, "Products of random matrices", *Annals of Mathematical Statistics* 31 (1960), 457–469.

[^2]: J. M. Steele, "Kingman's subadditive ergodic theorem", *Annales de l'Institut Henri Poincaré, Probabilités et Statistiques* 25 (1989), 93–98.

# 연관 문서

## 선수지식

- [Fekete 보조정리](fekete-lemma.md)
- [에르고딕 정리](ergodic-theorem.md)

## 더 알아보기

- [Oseledets 곱셈 에르고딕 정리](oseledets-theorem.md)

#measure_theory #probability #analysis #theorem
