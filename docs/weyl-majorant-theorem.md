# Weyl 다수화 정리

# 개요

**Weyl 다수화 정리(Weyl's majorant theorem)** 는 정사각행렬의 고윳값의 절댓값을 큰 것부터 $k$ 개 곱한 값이 특이값을 큰 것부터 $k$ 개 곱한 값 이하라는 정리다. 첫 행이 $1,2$ 이고 둘째 행이 $0,1$ 인 행렬은 고윳값이 둘 다 $1$ 이지만 벡터 $(0,1)$ 을 길이 $\sqrt5$ 인 $(2,1)$ 로 보낸다. 고윳값만 보면 이 행렬이 벡터를 얼마나 늘이는지 알 수 없다.

이 정리는 고윳값과 특이값 사이에 곱으로 쓴 한 방향의 순서가 언제나 있다고 답하고, 그 순서에서 거듭제곱 합의 부등식이 나온다.

# 직관

다음 행렬을 잡는다.

$$
A=\begin{pmatrix}1&2\cr 0&1\end{pmatrix},\qquad A^{\mathsf T}A=\begin{pmatrix}1&2\cr 2&5\end{pmatrix}
$$

$A$ 는 위 삼각이므로 고윳값은 대각성분 $1,1$ 이다. [특이값](singular-value-decomposition.md)은 $A^{\mathsf T}A$ 의 고윳값 $3\pm2\sqrt2$ 의 제곱근이고, $3\pm2\sqrt2=(\sqrt2\pm1)^2$ 이므로 $s\_1=\sqrt2+1\approx 2.414$, $s\_2=\sqrt2-1\approx 0.414$ 다.

큰 것 하나를 비교하면 $\vert\lambda\_1\vert=1\le s\_1$ 이다. 고유벡터 $v$ 에서 $\Vert Av\Vert=\vert\lambda\_1\vert\Vert v\Vert$ 이고 $s\_1$ 은 $A$ 가 벡터를 가장 많이 늘이는 배율이기 때문이다. 둘 다 곱하면 $\vert\lambda\_1\lambda\_2\vert=1$ 이고 $s\_1s\_2=(\sqrt2+1)(\sqrt2-1)=1$ 이다. 둘 다 $\vert\det A\vert$ 와 같다.

고윳값은 큰 쪽이 특이값보다 작고, 곱 전체는 같다. 그래서 고윳값의 절댓값들은 특이값들보다 고르게 퍼져 있다.

# 정의

$n\times n$ 복소행렬 $A$ 의 고윳값을 절댓값이 큰 순서로 $\lambda\_1,\dots,\lambda\_n$, 특이값을 큰 순서로 $s\_1\ge\dots\ge s\_n\ge 0$ 으로 쓴다.

**Weyl 다수화 정리** 는 다음이 성립한다는 정리다[^1].

$$
\prod\_{i=1}^k\vert\lambda\_i\vert\le\prod\_{i=1}^ks\_i\quad(k=1,\dots,n-1),\qquad\prod\_{i=1}^n\vert\lambda\_i\vert=\prod\_{i=1}^ns\_i
$$

이 관계를 $(\vert\lambda\_i\vert)$ 가 $(s\_i)$ 에 **로그 다수화된다(log-majorized)** 고 한다. 로그를 취하면 [다수화](majorization.md)의 부분합 조건이 된다. 직관 절의 $A$ 에서 $k=1$ 의 부등식은 $1\le\sqrt2+1$ 이고 $k=2$ 의 등식은 $1=1$ 이다.

# 성질

## 증명의 요지

$k=1$ 은 직관 절의 계산이다. 고유벡터 $v$ 에서 $\vert\lambda\_1\vert\Vert v\Vert=\Vert Av\Vert\le s\_1\Vert v\Vert$ 이다.

일반 $k$ 는 [외대수](exterior-algebra.md)의 $k$ 차 외부 거듭제곱 $\Lambda^kA$ 에 $k=1$ 을 적용한다. $\Lambda^kA$ 의 고윳값은 서로 다른 $k$ 개의 고윳값의 곱이고 그 가운데 절댓값이 가장 큰 것은 $\lambda\_1\cdots\lambda\_k$ 다. $\Lambda^kA$ 의 특이값은 서로 다른 $k$ 개의 특이값의 곱이고 가장 큰 것은 $s\_1\cdots s\_k$ 다. $k=n$ 의 등식은 $\vert\det A\vert$ 를 두 방법으로 쓴 것이다.

## 거듭제곱 합

$f(e^t)$ 가 $t$ 의 증가하는 볼록함수이면 다음이 성립한다[^1].

$$
\sum\_{i=1}^nf(\vert\lambda\_i\vert)\le\sum\_{i=1}^nf(s\_i)
$$

로그를 취한 수열에 다수화의 Karamata 부등식(Karamata's inequality)을 적용한 것이다. $f(x)=x^p$ ($p\gt 0$) 이면 $\sum\vert\lambda\_i\vert^p\le\sum s\_i^p$ 다. 직관 절의 $A$ 에서 $p=2$ 이면 $2\le 6$ 이고, $6$ 은 성분의 제곱 $1,4,0,1$ 을 더한 값이다.

## Horn 의 역

양수 수열 $\vert\lambda\_i\vert$ 와 $s\_i$ 가 위의 곱 부등식과 등식을 만족하면, 고윳값의 절댓값이 $\vert\lambda\_i\vert$ 이고 특이값이 $s\_i$ 인 행렬이 존재한다[^2]. 그래서 곱 부등식이 고윳값의 절댓값과 특이값 사이의 관계 전부다.

## 정규행렬

$A$ 가 정규행렬이면 특이값은 고윳값의 절댓값이고 모든 $k$ 에서 등호가 성립한다. 직관 절의 $A$ 는 $AA^{\mathsf T}\ne A^{\mathsf T}A$ 이므로 정규가 아니고, $k=1$ 에서 등호가 성립하지 않는다.

# 활용

- [Golden–Thompson 부등식](golden-thompson-inequality.md). 증명의 첫 단계 $\mathrm{tr}(XY)^{2m}\le\mathrm{tr}(X^2Y^2)^m$ 은 $XY$ 의 고윳값의 $2m$ 제곱 합을 특이값의 $2m$ 제곱 합으로 누르는 거듭제곱 합 절의 부등식이다.
- 스펙트럼 반지름과 노름. $k=1$ 은 스펙트럼 반지름이 연산자 노름 이하라는 것이고, 반복법 $x\_{t+1}=Ax\_t$ 의 수렴을 고윳값으로 판정할 때 처음 몇 단계의 증폭은 특이값으로 잡는다.
- 대각합 부등식. $\vert\mathrm{tr}A^m\vert\le\sum\vert\lambda\_i\vert^m\le\sum s\_i^m$ 이 거듭제곱 합 절에서 나온다.

[^1]: H. Weyl, "Inequalities between the two kinds of eigenvalues of a linear transformation", *Proceedings of the National Academy of Sciences* 35 (1949), 408–411.
[^2]: A. Horn, "On the eigenvalues of a matrix with prescribed singular values", *Proceedings of the American Mathematical Society* 5 (1954), 4–7.

# 연관 문서

## 선수지식

- [특이값 분해](singular-value-decomposition.md)
- [다수화](majorization.md)

## 더 알아보기

- [Golden–Thompson 부등식](golden-thompson-inequality.md)

#linear_algebra #analysis #combinatorics
