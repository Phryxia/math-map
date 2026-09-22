# 단조 수렴 정리

# 개요

단조 수렴 정리는 음이 아닌 [가측함수](measurable-functions.md)열 $f_n$ 이 점마다 증가해 $f$ 로 가면 $\int f_n\to\int f$ 라는 정리다. 균등수렴도 지배함수도 요구하지 않는다.

[Lebesgue 적분](lebesgue-integral.md)은 아래에 놓인 단순함수들의 상한으로 정의해서 선형성조차 정의에서 바로 나오지 않는다. 선형성, 급수와 적분의 교환, Fatou 보조정리, [지배수렴 정리](dominated-convergence.md)를 이 정리로 증명한다.

# 직관

## 증가하는 열

$f_n=\min(f,n)$ 은 $f$ 를 높이 $n$ 에서 잘라 낸 함수다. 점마다 증가해 $f$ 로 가고, 각 $\int f_n$ 은 $\int f$ 이하다. 정리에 따르면 $\int f_n$ 은 $\int f$ 까지 올라간다. $f$ 아래의 단순함수 $s$ 는 유한한 값만 가지므로 어느 $n$ 부터는 $f_n$ 아래에 있고, 그래서 $\int f_n$ 의 극한은 어떤 $\int s$ 보다도 작지 않다.

## 증가하지 않는 열

$(0,1]$ 에서 $f_n = n \cdot \mathbf 1_{(0,1/n)}$ 은 모든 점에서 $0$ 으로 가지만 각 적분이 $1$ 이다. 각 점에서 값이 $n$ 까지 올랐다가 $0$ 으로 떨어지므로 증가하는 열이 아니다.

$f_n\to f$ 가 점별로 성립할 때 적분과 극한을 바꿀 수 있는 조건은 다음 셋이다.

| 가정 | 결론 | 정리 |
| --- | --- | --- |
| $f_n$ 이 증가 | $\int f_n\to\int f$ | 단조수렴 |
| $\vert f_n\vert\le g$ 이고 $g\in L^1$ | $\int f_n\to\int f$ | 지배수렴 |
| $f_n\ge0$ | $\int\liminf f_n\le\liminf\int f_n$ | Fatou |

$f_n = n \cdot \mathbf 1_{(0,1/n)}$ 은 증가하지도 않고 적분 가능한 지배함수도 없어 마지막 줄만 적용된다. Fatou 부등식 $0 \le 1$ 은 성립한다.

# 정의

## 진술

[측도](measure.md) 공간 $(X, \Sigma, \mu)$ 에서 각 $n$ 에 대해 $f_n : X \to [0,\infty]$ 가 가측이고 모든 $x$ 에서 다음이 성립한다고 하자.

$$
0\le f_1(x)\le f_2(x)\le\cdots
$$

점별 극한을 $f(x) = \lim f_n(x)$ 로 두면 다음이 성립하며 양변에 $\infty$ 도 허용한다.

$$
\lim_{n\to\infty}\int_X f_n\thinspace d\mu=\int_X f\thinspace d\mu
$$

$f$ 는 가측함수의 점별 극한이므로 가측이고, 적분값의 수열은 증가하므로 극한이 항상 존재한다.

# 성질

## 증명

적분의 단조성에서 $\int f_n \le \int f$ 이므로 왼쪽 극한은 오른쪽 이하다.

반대 부등식을 본다. $f$ 아래의 음이 아닌 단순함수 $s$ 를 고정하고 $0 \lt c \lt 1$ 을 잡아

$$
E_n=\lbrace x: f_n(x)\ge c\thinspace s(x)\rbrace
$$

라 두자. $f_n$ 이 증가하므로 $E_n$ 이 증가하고, $c \lt 1$ 이므로 $s$ 가 양수인 모든 점이 언젠가 $E_n$ 에 들어가 $\bigcup E_n = X$ 다.

$$
\int_X f_n\thinspace d\mu\ge\int_{E_n}f_n\thinspace d\mu\ge c\int_{E_n}s\thinspace d\mu
$$

$s$ 가 단순함수이므로 오른쪽은 유한 개 집합의 측도의 합이고 측도의 아래로부터 연속성을 쓸 수 있다. $n \to \infty$ 를 취하면 다음을 얻는다.

$$
\lim_{n\to\infty}\int_X f_n\thinspace d\mu\ge c\int_X s\thinspace d\mu
$$

$c \to 1$ 로 보내고 $f$ 아래의 모든 단순함수 $s$ 에 대해 상한을 취하면 정의에 의해 $\int f$ 가 나온다. 증명이 쓰는 것은 측도의 아래로부터 연속성뿐이다.

## 측도의 연속성

증가하는 가측집합 $E_1 \subseteq E_2 \subseteq \cdots$ 에 $f_n = \mathbf 1_{E_n}$ 을 적용하면 다음을 얻는다.

$$
\mu\Bigl(\bigcup_{n=1}^{\infty}E_n\Bigr)=\lim_{n\to\infty}\mu(E_n)
$$

정리와 측도의 연속성이 서로를 함의한다.

## Fatou 보조정리와 지배수렴

$g_n = \inf_{k \ge n} f_k$ 로 두면 $g_n$ 이 증가하고 $g_n \le f_n$ 이므로 단조수렴 정리에서 다음이 나온다.

$$
\int_X\liminf_n f_n\thinspace d\mu\le\liminf_n\int_X f_n\thinspace d\mu
$$

이것이 Fatou 보조정리이고 음이 아니라는 가정만으로 성립한다. 지배함수를 더해 $g - f_n$ 과 $g + f_n$ 양쪽에 적용하면 지배수렴 정리가 나온다.

## 적분의 선형성

음이 아닌 가측함수 $f$ 와 $g$ 에 대해 $\int(f+g) = \int f + \int g$ 를 보이는 표준적인 방법도 이 정리다. 단순함수로 근사하는 열 $s_n \uparrow f$ 와 $t_n \uparrow g$ 를 잡으면 $s_n + t_n \uparrow f + g$ 이고 단순함수에서는 선형성이 자명하므로 양변에 정리를 적용한다.

## 감소하는 경우

감소하는 열에는 같은 결론이 성립하지 않는다. $f_n = \mathbf 1_{[n,\infty)}$ 은 $0$ 으로 감소하지만 각 적분이 $\infty$ 다. 감소하는 경우에는 $\int f_1 \lt\infty$ 라는 조건이 추가로 필요하고, 그때는 지배수렴 정리로 처리된다.

# 활용

## 급수와 적분의 교환

각 $g_n \ge 0$ 이면 부분합 $F_N = \sum_{n \le N} g_n$ 이 증가하므로 정리를 적용해 다음을 얻는다.

$$
\int_X\sum_{n=1}^{\infty}g_n\thinspace d\mu=\sum_{n=1}^{\infty}\int_X g_n\thinspace d\mu
$$

음이 아니기만 하면 조건 없이 교환된다. 이 결과가 Tonelli 정리로 이어져 이중급수의 순서 교환과 Fubini 정리의 음이 아닌 판본을 준다. 부호가 섞이면 절댓값의 적분이 유한한지 먼저 확인하며, 그 확인을 이 정리로 한다.

## 확률에서의 쓰임

증가하는 사건열의 확률이 합집합의 확률로 수렴한다는 사실, 음이 아닌 확률변수를 유계 확률변수로 잘라 근사해도 기댓값이 보존된다는 사실, 꼬리합 공식

$$
\mathbb{E}[X]=\int_0^\infty P(X\gt t)\thinspace dt\qquad(X\ge0)
$$

이 모두 이 정리에서 나온다. 마팅게일 수렴 정리와 [조건부 기댓값](conditional-expectation.md)의 성질을 세울 때도 쓰인다.

## 구성의 정당화

측도나 적분을 단조 근사로 정의하는 구성이 이 정리에 기댄다. 외측도에서 측도를 만드는 Carathéodory 구성, 곱측도의 존재, 적분을 단순함수의 상한으로 정의한 것 자체가 그렇다.[^1]

[^1]: Terence Tao, *245A Notes 3: Integration on abstract measure spaces and the convergence theorems*, Theorem 14 와 Corollary 15. 단조 수렴 정리의 진술과 증명, 급수 교환 따름정리. https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/

# 연관 문서

## 선수지식

- [Lebesgue 적분](lebesgue-integral.md)

## 더 알아보기

- [지배 수렴 정리](dominated-convergence.md)

#measure_theory #analysis #probability #theorem
