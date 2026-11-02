# 균등유계성 원리

# 개요

**균등유계성 원리(uniform boundedness principle)** 는 선형 변환들의 모임이 각 입력에서 출력의 크기가 묶여 있으면, 모든 입력에 대해 한꺼번에 묶인다는 정리다. 연속인 주기함수의 [Fourier 급수](fourier-series.md)가 $x=0$ 에서 언제나 수렴하는지 묻는다. $x=0$ 에서의 부분합을 주는 변환들의 크기는 항 수가 늘수록 한없이 커지지만, 이것만으로 수렴하지 않는 함수가 있는지는 바로 알 수 없다. 균등유계성 원리의 대우를 쓰면 변환들의 크기가 한없이 커지는 것만으로 부분합이 발산하는 연속함수가 존재한다.

# 직관

연속인 주기함수 $f$ 의 Fourier 급수가 $x=0$ 에서 수렴하는지 묻는다. 부분합은 Dirichlet 핵(Dirichlet kernel) $D_N$ 과의 적분 $S_Nf(0)=\frac1{2\pi}\int_{-\pi}^{\pi}f(t)D_N(t)\thinspace dt$ 이다. $\vert f\vert\le 1$ 인 연속함수로 $D_N$ 의 부호를 근사하면 이 적분은 $\frac1{2\pi}\int\vert D_N\vert$ 에 얼마든지 가까워지고, 그보다 커지지는 않는다. 이 값은 $N$ 이 커지면 $\log N$ 의 속도로 커진다.

그래서 $N$ 마다 $\vert f\vert\le1$ 이면서 $S_Nf(0)$ 이 큰 연속함수가 있다. 그런데 그 함수는 $N$ 마다 다르다. 함수 하나를 고정했을 때 모든 $N$ 에서 값이 커지는지는 이 계산으로 나오지 않는다.

반대로 연속함수마다 $S_Nf(0)$ 이 $N$ 에 대해 유계라고 놓는다. 모든 $N$ 에서 $\vert S_Nf(0)\vert\le n$ 인 함수를 모은 집합을 $E_n$ 이라 하면 연속함수 전체가 $E_1, E_2, \dots$ 의 합집합이다. 연속함수 공간은 상한 노름에 대해 완비이므로 [Baire 범주 정리](baire-category.md)로 어떤 $E_n$ 이 공 하나를 포함한다. 그 공 안에서는 모든 $N$ 의 값이 $n$ 이하이고, 평행이동과 확대로 $\frac1{2\pi}\int\vert D_N\vert$ 가 $N$ 에 대해 유계라는 결론이 나온다. 이것은 위의 계산과 모순이므로 어떤 연속함수에서는 $S_Nf(0)$ 이 유계가 아니다.

# 정의

$X$ 는 [Banach 공간](banach-spaces.md), $Y$ 는 노름 공간이고 $\mathcal B(X,Y)$ 는 $X$ 에서 $Y$ 로 가는 [유계 작용소](bounded-operators.md) 전체다. 모임 $\mathcal F\subseteq\mathcal B(X,Y)$ 에 대해

$$
\sup_{T\in\mathcal F}\Vert Tx\Vert\lt\infty\quad(\text{모든 }x\in X)
$$

이면 $\mathcal F$ 를 **점별 유계(pointwise bounded)** 라 하고,

$$
\sup_{T\in\mathcal F}\Vert T\Vert\lt\infty
$$

이면 **균등 유계(uniformly bounded)** 라 한다. $\Vert Tx\Vert\le\Vert T\Vert\thinspace\Vert x\Vert$ 이므로 균등 유계이면 점별 유계다.

연속 주기함수 공간에서 직관 절의 범함수 $f\mapsto S_Nf(0)$ 들은 노름이 $\frac1{2\pi}\int\vert D_N\vert$ 이고 이 값이 $\log N$ 의 속도로 커지므로 균등 유계가 아니다. $C\lbrack 0,1\rbrack$ 에서 $f\mapsto f(1/n)$ 들은 노름이 모두 $1$ 이므로 균등 유계다. 유한 개 항만 $0$ 이 아닌 수열들에 상한 노름을 준 공간 $c\_{00}$ 에서 $T_n(x)=nx_n$ 들은 점별 유계이지만 $\Vert T_n\Vert=n$ 이라 균등 유계가 아니다. $c\_{00}$ 은 Banach 공간이 아니다.

# 성질

## Banach–Steinhaus 정리

Banach–Steinhaus 정리(Banach–Steinhaus theorem). $X$ 가 Banach 공간이고 $\mathcal F\subseteq\mathcal B(X,Y)$ 가 점별 유계이면 $\mathcal F$ 는 균등 유계다.[^1]

증명의 요지. $E_n=\lbrace x\in X:\Vert Tx\Vert\le n\thinspace\text{ 가 모든 }T\in\mathcal F\text{ 에서 성립}\rbrace$ 으로 둔다. 각 $E_n$ 은 닫힌 집합들 $\lbrace x:\Vert Tx\Vert\le n\rbrace$ 의 교집합이므로 닫혀 있고, 점별 유계성에서 $X=\bigcup_n E_n$ 이다. Baire 범주 정리로 어떤 $E_N$ 이 공 $B(x_0,r)$ 을 포함한다. $\Vert z\Vert\lt1$ 이면 $x_0$ 과 $x_0+rz$ 가 둘 다 $E_N$ 에 있으므로

$$
\Vert Tz\Vert=\frac1r\Vert T(x_0+rz)-Tx_0\Vert\le\frac{2N}{r}
$$

이고 $\Vert T\Vert\le 2N/r$ 이 모든 $T\in\mathcal F$ 에서 성립한다. $\square$

## 특이점의 응집

$X$ 가 Banach 공간이고 $\sup_{T\in\mathcal F}\Vert T\Vert=\infty$ 이면 $\sup_{T\in\mathcal F}\Vert Tx\Vert=\infty$ 인 $x$ 의 집합은 제1범주 집합(set of first category)의 여집합이다. 특히 $X$ 에서 조밀하다.

위 증명에서 어느 $E_n$ 도 내부를 갖지 않으므로 $\bigcup_n E_n$ 이 제1범주 집합이다. 그 여집합이 값이 발산하는 점의 집합이다. 이 진술을 특이점의 응집(condensation of singularities)이라 한다.

## 점별 극한

$X$ 가 Banach 공간이고 $T_n\in\mathcal B(X,Y)$ 이며 모든 $x$ 에서 $T_nx$ 가 수렴하면 $Tx=\lim_n T_nx$ 로 정의한 $T$ 는 유계이고 $\Vert T\Vert\le\liminf_n\Vert T_n\Vert$ 다.

수렴하는 열은 유계이므로 $\lbrace T_n\rbrace$ 이 점별 유계이고, 정리로 $\sup_n\Vert T_n\Vert\lt\infty$ 다. $\Vert Tx\Vert=\lim_n\Vert T_nx\Vert\le\liminf_n\Vert T_n\Vert\thinspace\Vert x\Vert$ 이다. $\square$

## 약유계 집합

노름 공간 $X$ 의 부분집합 $A$ 가 모든 $f\in X^\ast$ 에서 $\sup_{a\in A}\vert f(a)\vert\lt\infty$ 를 만족하면 $A$ 는 노름에 대해 유계다.

[쌍대 공간](dual-space.md) $X^\ast$ 는 $X$ 가 완비가 아니어도 Banach 공간이다. 각 $a\in A$ 를 $X^\ast$ 위의 평가 $f\mapsto f(a)$ 로 보면 가정이 이 모임의 점별 유계성이고, 정리로 평가들의 노름이 균등 유계다. [Hahn–Banach 정리](hahn-banach-theorem.md)로 평가의 노름이 $\Vert a\Vert$ 와 같다. $\square$

## 완비성 없는 반례

정의 절의 $c\_{00}$ 과 $T_n(x)=nx_n$ 에서 $x$ 마다 $0$ 이 아닌 항이 유한 개이므로 $\sup_n\vert T_nx\vert$ 가 유한하지만 $\Vert T_n\Vert=n$ 이다. $c_{00}$ 이 완비가 아니어서 정리가 적용되지 않는다.

# 활용

- 직관 절의 범함수 $f\mapsto S_Nf(0)$ 의 노름은 Lebesgue 상수(Lebesgue constant) $L_N=\frac1{2\pi}\int_{-\pi}^{\pi}\vert D_N\vert=\frac4{\pi^2}\log N+O(1)$ 이다. 특이점의 응집으로, $x=0$ 에서 Fourier 급수가 발산하는 연속 주기함수가 연속함수 공간에서 조밀하다.[^2] [Fejér 핵](fejer-kernel.md)은 노름이 $1$ 이어서 Cesàro 평균은 모든 연속함수에서 수렴한다.
- 적분 공식 $Q_n(f)=\sum_k w_{n,k}f(x_{n,k})$ 의 작용소 노름은 $\sum_k\vert w_{n,k}\vert$ 다. 모든 연속함수에서 $Q_n(f)\to\int f$ 일 필요충분조건은 다항식에서 수렴하고 $\sup_n\sum_k\vert w_{n,k}\vert\lt\infty$ 인 것이다(Pólya 정리, Pólya's theorem). [Gauss 구적](gaussian-quadrature.md)과 [Clenshaw–Curtis 구적](clenshaw-curtis-quadrature.md)은 가중치가 양수여서 이 조건을 만족한다.
- [다항식 보간](polynomial-interpolation.md)의 Lebesgue 상수는 어떤 절점 배열에서도 $\frac2\pi\log n$ 보다 느리게 자라지 않는다. 그러므로 절점 배열마다 보간 다항식이 균등수렴하지 않는 연속함수가 존재한다(Faber 정리, Faber's theorem).
- [열린 사상 정리](open-mapping-theorem.md)와 균등유계성 원리는 모두 완비 공간을 닫힌 집합들의 합집합으로 쓰고 Baire 범주 정리로 하나가 내부를 가진다고 결론짓는다. 균등유계성 원리는 정의역 $X$ 의 완비성을, 열린 사상 정리는 $X$ 와 $Y$ 의 완비성을 쓴다.

[^1]: Walter Rudin, *Real and Complex Analysis*, 3rd ed., McGraw–Hill, 1987, Theorem 5.8.
[^2]: 같은 책, 5.11 절.

# 연관 문서

## 선수지식

- [Baire 범주 정리](baire-category.md)
- [Banach 공간](banach-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #topology
