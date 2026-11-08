# Halperin 정리

# 개요

**Halperin 정리(Halperin's theorem)** 는 닫힌 부분공간 여러 개로의 정사영을 정해진 순서로 되풀이해 곱하면 그 곱의 거듭제곱이 교집합으로의 정사영으로 수렴한다는 정리다. 공간 $\mathbb R^3$ 에서 $z$ 축을 공통으로 지나는 평면 세 장이 있을 때, 점을 첫 평면, 둘째 평면, 셋째 평면에 차례로 수직으로 내리기를 되풀이하면 점이 $z$ 축 위의 한 점으로 다가간다. 이 정리는 두 부분공간에 대한 [교대 사영](alternating-projections.md)의 수렴을 세 개 이상으로 옮기고, 극한이 출발점에서 가장 가까운 교집합의 점이라는 것까지 정한다.

# 직관

$\mathbb R^3$ 의 평면 $U_1=\lbrace y=0\rbrace$, $U_2=\lbrace x=y\rbrace$, $U_3=\lbrace x=2y\rbrace$ 는 모두 $z$ 축을 지난다. 각 평면으로 내리는 것은 $z$ 좌표를 그대로 두고 $(x,y)$ 를 $xy$ 평면의 직선으로 내리는 것이다. $(4,4,7)$ 에서 시작하면 $U_1$ 로 $(4,0,7)$, $U_2$ 로 $(2,2,7)$, $U_3$ 로 $(2.4,1.2,7)$ 이다. 셋째 걸음은 $(2,2)$ 를 방향 $(2,1)$ 의 직선으로 내린 것이고, 내적 $6$ 을 $5$ 로 나눈 $1.2$ 배의 $(2,1)$ 이다.

다음 바퀴에서 $U_1$ 로 내리면 $(2.4,0,7)$ 이다. 한 바퀴 전의 $(4,0,7)$ 과 비교하면 $x$ 좌표가 $0.6$ 배가 되었다. 직선에서 직선으로 내릴 때마다 길이에 두 직선 사이 각의 코사인이 곱해지고, 세 각의 코사인 $1/\sqrt2$, $3/\sqrt{10}$, $2/\sqrt5$ 의 곱이 $0.6$ 이다. 그래서 $(x,y)$ 는 바퀴마다 $0.6$ 배로 줄어 $0$ 으로 가고, $z=7$ 은 그대로다. 극한 $(0,0,7)$ 은 $(4,4,7)$ 에서 $z$ 축으로 바로 내린 점이다.

# 정의

$H$ 가 [Hilbert 공간](hilbert-spaces.md)이고 $U_1,\dots,U_k$ 가 닫힌 부분공간이며 $P_i$ 가 $U_i$ 로의 정사영이라 하자. 곱

$$
T=P_kP\_{k-1}\cdots P_1
$$

을 순환 사영 작용소라 하고, 반복 $x\_{n+1}=Tx_n$ 을 순환 사영(cyclic projections)이라 한다. $U=U_1\cap\cdots\cap U_k$ 로 쓰고 $P_U$ 를 그 정사영이라 한다. $k=2$ 이면 교대 사영이다. 직관 절의 예는 $H=\mathbb R^3$, $k=3$, $U$ 가 $z$ 축인 경우다.

# 성질

## Halperin 정리

정리. 모든 $x\in H$ 에서 $\lim\_{n\to\infty}T^nx=P_Ux$ 이다.[^1]

증명의 요지. 세 단계다.

첫째, 걸음의 제곱합이 유한하다. 정사영 $P$ 는 $\Vert Px\Vert^2=\Vert x\Vert^2-\Vert x-Px\Vert^2$ 를 만족하므로, $y_0=x$, $y_i=P_iy\_{i-1}$ 로 두면 $\Vert Tx\Vert^2=\Vert x\Vert^2-\sum\_{i=1}^k\Vert y\_{i-1}-y_i\Vert^2$ 다. 이것을 $T^nx$ 에 대해 더하면 $\sum_n\Vert T^nx-T^{n+1}x\Vert^2$ 이 유한하고, 특히 $T^nx-T^{n+1}x\to 0$ 이다. 같은 등식에서 $\Vert Tx\Vert=\Vert x\Vert$ 이면 모든 걸음이 $0$ 이므로 $Tx=x$ 인 점의 집합은 $U$ 다.

둘째, 공간을 둘로 나눈다. $\Vert T\Vert\le 1$ 이면 $Tx=x$ 에서 $\Vert T^\ast x-x\Vert^2=\Vert T^\ast x\Vert^2-2\langle x,Tx\rangle+\Vert x\Vert^2\le 0$ 이므로 $T^\ast x=x$ 다. 그래서 $U$ 는 $(I-T)$ 의 치역에 수직이고, $H=U\oplus\overline{\mathrm{ran}(I-T)}$ 이다.

셋째, 각 부분에서 수렴을 본다. $U$ 위에서는 $T^nx=x$ 다. $x=w-Tw$ 이면 $T^nx=T^nw-T^{n+1}w\to 0$ 이다. 치역의 닫힘으로는 $\Vert T^n\Vert\le 1$ 이 고르게 성립하므로 극한이 넘어간다.

## 수렴률

정리(Smith–Solmon–Wagner 한계). $\theta_i$ 를 $U_i$ 와 $U\_{i+1}\cap\cdots\cap U_k$ 의 Friedrichs 각이라 하면

$$
\Vert T^n-P_U\Vert\le\Bigl(1-\prod\_{i=1}^{k-1}\sin^2\theta_i\Bigr)^{n/2}
$$

이다.[^2]

직관 절에서 $U_1$ 은 $z$ 축을 포함하므로 $\theta_1=90^\circ$ 이고, $\theta_2$ 는 $U_2$ 와 $U_3$ 의 각으로 $\sin^2\theta_2=1/10$ 이다. 한계의 비율은 $\sqrt{0.9}\approx 0.95$ 이고 실제 비율 $0.6$ 은 그보다 작다. $k=2$ 이면 비율이 $\cos\theta_1$ 이고, 교대 사영 문서의 정확한 비율 $\cos^2\theta_1$ 보다 느슨하다.

유한차원에서는 모든 Friedrichs 각이 양수이므로 순환 사영이 선형 수렴한다. 무한차원에서는 직교여공간들의 합 $U_1^\perp+\cdots+U_k^\perp$ 가 닫혀 있는 것과 순환 사영이 모든 출발점에서 같은 비율로 선형 수렴하는 것이 동치이고, 그렇지 않으면 수렴이 얼마든지 느린 출발점이 있다.[^3]

## 순서를 바꾼 곱

정사영을 주기적으로 쓰지 않고 아무 순서로 쓰면, 그 순서가 모든 첨자를 무한히 자주 쓰더라도 일반 Hilbert 공간에서는 약수렴만 성립한다.[^4] 부분공간 세 개로 노름 수렴하지 않는 순서를 만든 예가 있다.[^5] 유한차원에서는 이런 곱도 $P_U$ 로 수렴한다.

평균 $\frac1k(P_1+\cdots+P_k)$ 의 거듭제곱도 $P_U$ 로 수렴한다. 이 작용소는 자기수반이고 $0$ 과 $1$ 사이에 있어서, 교대 사영 문서의 von Neumann 정리의 증명이 그대로 된다.

# 활용

- [Kaczmarz 방법](kaczmarz-method.md). 일차연립방정식의 각 식이 정하는 초평면으로 차례로 사영하는 반복이고, 해 하나를 원점으로 옮기면 순환 사영이다. 해집합이 여럿이면 극한이 출발점에서 가장 가까운 해라는 것이 이 정리에서 나온다.
- 단층 촬영의 재구성. 각 방향의 투영 자료가 정하는 아핀 부분공간으로 차례로 사영하는 대수적 재구성 방법(algebraic reconstruction technique)이 순환 사영이고, Smith–Solmon–Wagner 한계가 이 문제에서 나왔다.[^2]
- 볼록집합으로의 확장. 부분공간 대신 닫힌 볼록집합을 쓰면 순환 사영은 교집합의 한 점으로 약수렴하지만 출발점의 사영으로 가지는 않는다. 사영으로 가게 하려면 [Dykstra 알고리즘](dykstra-algorithm.md)의 보정을 쓴다.

[^1]: I. Halperin, "The product of projection operators", *Acta Scientiarum Mathematicarum (Szeged)* **23** (1962), 96–99.
[^2]: K. T. Smith, D. C. Solmon, S. L. Wagner, "Practical and mathematical aspects of the problem of reconstructing objects from radiographs", *Bulletin of the American Mathematical Society* **83** (1977), 1227–1270. 증명은 Frank Deutsch, *Best Approximation in Inner Product Spaces*, Springer, 2001, 9 장에 있다.
[^3]: H. H. Bauschke, J. M. Borwein, A. S. Lewis, "The method of cyclic projections for closed convex sets in Hilbert space", *Contemporary Mathematics* **204** (1997), 1–38.
[^4]: I. Amemiya, T. Ando, "Convergence of random products of contractions in Hilbert space", *Acta Scientiarum Mathematicarum (Szeged)* **26** (1965), 239–244.
[^5]: E. Kopecká, V. Müller, "A product of three projections", *Studia Mathematica* **223** (2014), 175–186.

# 연관 문서

## 선수지식

- [교대 사영](alternating-projections.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #linear_algebra #optimization
