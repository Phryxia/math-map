# von Neumann 부등식

# 개요

**von Neumann 부등식(von Neumann's inequality)** 은 노름이 $1$ 이하인 작용소 $T$ 와 다항식 $p$ 에 대해 $p(T)$ 의 노름이 단위원판 위에서 $\lvert p(z)\rvert$ 의 최댓값을 넘지 않는다는 정리다. 행렬 $T=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 은 고윳값이 $0$ 뿐인데 $T$ 자신의 노름은 $1$ 이므로, $p(T)$ 의 크기를 고윳값에서의 값 $p(0)$ 만으로는 가늠할 수 없다. 이 부등식은 $T$ 를 더 큰 공간의 유니터리 작용소의 한 조각으로 보고, 유니터리 작용소에서는 다항식의 노름이 단위원 위의 값으로 정해진다는 것을 써서 $p(T)$ 의 상한을 준다.

# 직관

대칭행렬이나 유니터리 행렬 $A$ 는 고유벡터의 정규직교 기저로 대각화되므로 $\Vert p(A)\Vert$ 는 고윳값 $\lambda$ 에서의 $\lvert p(\lambda)\rvert$ 가운데 가장 큰 값이다. 개요의 $T$ 는 이렇게 대각화되지 않는다. $p(z)=1+z$ 를 넣으면 다음이 나온다.

$$
p(T)=\begin{pmatrix}1&1\cr 0&1\end{pmatrix},\qquad \Vert p(T)\Vert=\frac{1+\sqrt5}{2}\approx 1.618
$$

고윳값 $0$ 에서의 값 $p(0)=1$ 보다 크다. 그래도 단위원판 위의 최댓값 $p(1)=2$ 보다는 작다.

이 $T$ 를 더 큰 공간의 작용소에서 잘라 낸다. $\ell^2(\mathbb Z)$ 의 표준 기저 $e\_k$ 에 대해 $Se\_k=e\_{k-1}$ 로 정한 이동 작용소 $S$ 는 유니터리다. $e\_1$, $e\_2$ 가 펼치는 평면을 $H$, $H$ 로의 직교사영을 $P$ 라 한다. $Se\_2=e\_1$, $Se\_1=e\_0$ 이고 $Pe\_0=0$ 이므로 $PS$ 를 $H$ 에 제한하면 $T$ 다.

거듭제곱에서도 같다. $S^2e\_2=e\_0$ 이고 $Pe\_0=0$ 이므로 $PS^2$ 를 $H$ 에 제한하면 $T^2=0$ 이다. 그래서 모든 다항식에서 $p(T)$ 는 $p(S)$ 를 $H$ 로 잘라 낸 것이다. 잘라 내면 노름이 줄지 않으므로 $\Vert p(T)\Vert\le\Vert p(S)\Vert$ 이고, 유니터리인 $S$ 에서 $\Vert p(S)\Vert$ 는 단위원 위 $\lvert p\rvert$ 의 최댓값이다.

# 정의

## 축약

[Hilbert 공간](hilbert-spaces.md) $H$ 위의 [유계 작용소](bounded-operators.md) $T$ 가 $\Vert T\Vert\le1$ 을 만족하면 **축약(contraction)** 이라 한다. 직관 절의 $T$ 는 $\Vert T\Vert=1$ 인 축약이다.

## 유니터리 팽창

$H$ 를 닫힌 부분공간으로 갖는 Hilbert 공간 $K$ 위의 유니터리 작용소 $U$ 가 모든 $n\ge0$ 에서 다음을 만족하면 $U$ 를 $T$ 의 **유니터리 팽창(unitary dilation)** 이라 한다. $P\_H$ 는 $K$ 에서 $H$ 로의 직교사영이다.

$$
T^n=P\_HU^n\vert\_H
$$

직관 절의 이동 작용소 $S$ 는 $K=\ell^2(\mathbb Z)$ 에서 $T$ 의 유니터리 팽창이다.

# 성질

## Sz.-Nagy 팽창 정리

정리. 모든 축약은 유니터리 팽창을 갖는다. 이것을 Sz.-Nagy 팽창 정리(Sz.-Nagy dilation theorem)라 한다[^1].

증명의 요지. $D\_T=(I-T^\ast T)^{1/2}$ 로 두면 $\Vert Th\Vert^2+\Vert D\_Th\Vert^2=\Vert h\Vert^2$ 이다. $H$ 의 사본을 정수로 번호 붙여 직합 $\bigoplus\_{k\in\mathbb Z}H$ 를 만들고, 한 자리에서 $T$ 를 곱하고 남은 부분 $D\_Th$ 를 옆자리로 넘기는 작용소를 짠다. Schäffer 의 행렬 구성으로 이 작용소가 유니터리이고 거듭제곱을 $H$ 로 잘라 내면 $T^n$ 임을 확인한다.

직관 절에서는 $T^\ast T$ 가 $e\_2$ 방향의 사영이므로 $D\_T$ 는 $e\_1$ 방향의 사영이고, $Te\_1=0$ 에서 잃은 길이가 $S$ 에서는 $e\_0$ 으로 넘어간다.

## von Neumann 부등식

정리. 축약 $T$ 와 다항식 $p$ 에 대해 다음이 성립한다[^2].

$$
\Vert p(T)\Vert\le\max\_{\lvert z\rvert\le1}\lvert p(z)\rvert
$$

증명의 요지. 유니터리 팽창 $U$ 를 잡으면 $p(T)=P\_Hp(U)\vert\_H$ 이므로 $\Vert p(T)\Vert\le\Vert p(U)\Vert$ 다. 유니터리 작용소는 정규 작용소이고 스펙트럼이 단위원 위에 있으므로, 함수 계산에서 $\Vert p(U)\Vert$ 는 스펙트럼 위 $\lvert p\rvert$ 의 최댓값이고 단위원판 위의 최댓값 이하다. [최대 절댓값 원리](maximum-modulus-principle.md)로 원판 위의 최댓값은 원 위의 최댓값과 같다.

다항식 대신 원판에서 정칙이고 경계까지 연속인 함수 $f$ 를 넣어도, $f$ 를 다항식으로 균등하게 근사해 $f(T)$ 를 정의하고 같은 부등식을 얻는다.

## 변수가 여럿인 경우

정리. 서로 교환하는 축약 두 개 $T\_1$, $T\_2$ 와 두 변수 다항식 $p$ 에 대해 다음이 성립한다.

$$
\Vert p(T\_1,T\_2)\Vert\le\max\_{\lvert z\_1\rvert\le1,\thinspace\lvert z\_2\rvert\le1}\lvert p(z\_1,z\_2)\rvert
$$

이것을 Andô 정리(Andô's theorem)라 하고, 두 축약이 서로 교환하는 유니터리 팽창을 함께 갖는다는 것으로 증명한다[^3].

서로 교환하는 축약 세 개에서는 이 부등식이 성립하지 않는 예가 있다[^4]. Varopoulos 가 존재를 보였고 Crabb 과 Davie 가 $8$ 차원 공간 위의 구체적인 예를 만들었다[^5].

# 활용

- [수치 범위](numerical-range.md). Crouzeix 추측은 단위원판 대신 행렬의 수치 범위 $W(A)$ 위의 최댓값으로 $\Vert p(A)\Vert$ 를 누르는 부등식이다. $\Vert T\Vert\le1$ 이면 $W(T)$ 가 단위원판 안에 있고, von Neumann 부등식은 $W(T)$ 를 감싼 단위원판 위에서 상수 $1$ 로 같은 꼴의 부등식이 성립한다는 진술이다.
- 작용소의 함수 계산. 축약에는 단위원판의 원판 대수 함수를 넣을 수 있고, 그 대응의 노름이 $1$ 이하다. Sz.-Nagy 와 Foiaş 는 이것을 원판 위의 유계 정칙함수로 넓힌 함수 계산을 만들었다[^1].

[^1]: B. Sz.-Nagy, C. Foiaş, *Harmonic Analysis of Operators on Hilbert Space*, North-Holland, 1970, 1 장과 3 장.
[^2]: J. von Neumann, "Eine Spektraltheorie für allgemeine Operatoren eines unitären Raumes", *Mathematische Nachrichten* 4 (1951), 258–281.
[^3]: T. Andô, "On a pair of commutative contractions", *Acta Scientiarum Mathematicarum (Szeged)* 24 (1963), 88–90.
[^4]: N. Th. Varopoulos, "On an inequality of von Neumann and an application of the metric theory of tensor products to operators theory", *Journal of Functional Analysis* 16 (1974), 83–100.
[^5]: M. J. Crabb, A. M. Davie, "von Neumann's inequality for Hilbert space operators", *Bulletin of the London Mathematical Society* 7 (1975), 49–50.

# 연관 문서

## 선수지식

- [유계 작용소](bounded-operators.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #linear_algebra #complex_analysis
