# Oseledets 곱셈 에르고딕 정리

# 개요

**Oseledets 곱셈 에르고딕 정리(Oseledets multiplicative ergodic theorem)** 는 점마다 다른 행렬을 차례로 곱해 갈 때, 벡터의 방향마다 정해진 지수적 증가율이 있다는 정리다. 행렬 $\mathrm{diag}(2,1/2)$ 를 거듭 곱하면 첫째 좌표가 $0$ 이 아닌 벡터는 $2^n$ 처럼 자라고 $y$ 축 위의 벡터는 $2^{-n}$ 처럼 줄어, 증가율이 $\log 2$ 와 $-\log 2$ 두 개다. 이 정리는 측도보존변환을 따라 곱하는 행렬이 점마다 달라도 거의 모든 점에서 이런 증가율들과 각 증가율을 갖는 벡터의 부분공간이 정해짐을 보인다.

# 직관

Oseledets 곱셈 에르고딕 정리는 측도보존변환을 따라 행렬을 곱해 갈 때, 거의 모든 점에서 벡터의 방향마다 정해진 지수적 증가율이 있고 그 방향들이 부분공간의 사슬로 정리된다는 정리다. Oseledets 가 1968 년에 증명했다.[^1]

[Kingman 부분가법 에르고딕 정리](kingman-subadditive-ergodic.md)는 행렬 곱의 노름, 곧 가장 빠른 증가율 하나만 준다. 이 정리는 증가율 전체와 각 증가율을 갖는 벡터의 부분공간을 준다.

$A=\begin{pmatrix}2&0\cr 0&1/2\end{pmatrix}$ 를 거듭 곱하면 $A^nv$ 는 $v$ 의 첫째 좌표가 $0$ 이 아닐 때 $2^n$ 처럼 자라고, 첫째 좌표가 $0$ 이면 $2^{-n}$ 처럼 줄어든다. 증가율은 $\log 2$ 와 $-\log 2$ 두 개이고, 느린 증가율을 갖는 벡터는 $y$ 축 하나에 모여 있다. 대부분의 벡터는 빠른 증가율을 갖고, 느린 증가율은 특정한 직선 위에서만 보인다.

행렬이 걸음마다 무작위로 바뀌면 같은 계산이 되지 않는다. 노름 $\Vert A_n\cdots A_1\Vert$ 의 증가율은 Kingman 정리로 정해지지만, 느린 쪽 직선은 행렬열마다 다른 곳에 있다. 이 정리는 그 직선이 거의 모든 행렬열에서 존재하고 행렬열에 따라 가측으로 정해진다는 것을 보인다.

# 정의

## 행렬 곱셈 코사이클

$(X,\mathcal B,\mu)$ 가 확률공간이고 $T$ 가 에르고딕 측도보존변환이라 한다. 가측함수 $A\colon X\to\mathrm{GL}\_d(\mathbb R)$ 에 대해

$$
A^{(n)}(x)=A(T^{n-1}x)\cdots A(Tx)A(x)
$$

를 $A$ 가 정하는 **곱셈 코사이클(multiplicative cocycle)** 이라 한다. $A^{(m+n)}(x)=A^{(n)}(T^mx)A^{(m)}(x)$ 가 성립한다.

## Lyapunov 지수

$v\ne 0$ 에 대해 극한

$$
\lambda(x,v)=\lim_{n\to\infty}\frac1n\log\Vert A^{(n)}(x)v\Vert
$$

이 존재하면 이것을 $v$ 의 **Lyapunov 지수(Lyapunov exponent)** 라 한다.

# 성질

## Oseledets 정리

> **정리 (Oseledets 1968).** $\log^+\Vert A\Vert$ 와 $\log^+\Vert A^{-1}\Vert$ 가 적분가능하다고 한다. 실수 $\lambda_1\gt\lambda_2\gt\cdots\gt\lambda_k$ 와 거의 모든 $x$ 에서 부분공간의 사슬
> $$
> \mathbb R^d=V_1(x)\supsetneq V_2(x)\supsetneq\cdots\supsetneq V_k(x)\supsetneq V_{k+1}(x)=0
> $$
> 이 존재해, $A(x)V_i(x)=V_i(Tx)$ 이고 $v\in V_i(x)\setminus V_{i+1}(x)$ 이면 $\lambda(x,v)=\lambda_i$ 다.

$d_i=\dim V_i-\dim V_{i+1}$ 을 $\lambda_i$ 의 **중복도(multiplicity)** 라 한다. $T$ 가 가역이면 $A(x)E_i(x)=E_i(Tx)$ 인 분해 $\mathbb R^d=E_1(x)\oplus\cdots\oplus E_k(x)$ 가 있고, $E_i(x)$ 의 영이 아닌 벡터는 $n\to\pm\infty$ 양쪽에서 지수 $\lambda_i$ 를 갖는다. 이 분해를 **Oseledets 분해(Oseledets splitting)** 라 한다.

증명의 요지. 외대수(exterior algebra)의 $k$ 차 거듭제곱 $\Lambda^kA^{(n)}$ 의 노름은 부분곱셈적이므로, Kingman 정리로 $\frac1n\log\Vert\Lambda^kA^{(n)}(x)\Vert$ 가 상수로 수렴한다. 이 극한이 중복도를 세어 큰 쪽부터 $k$ 개의 지수를 더한 값이다. 행렬 $\bigl((A^{(n)})^{\mathsf T}A^{(n)}\bigr)^{1/2n}$ 이 수렴함을 보이고, 그 극한의 고유공간으로 $V_i$ 를 만든다. 이 증명은 Raghunathan 의 것이다.[^2]

## 지수의 합

중복도를 세어 모든 지수를 더하면

$$
\sum_{i=1}^k d_i\lambda_i=\int_X\log\vert\det A(x)\vert\thinspace d\mu(x)
$$

이다. $\log\vert\det A^{(n)}\vert$ 는 $\log\vert\det A\vert$ 를 궤도를 따라 더한 것이므로 [에르고딕 정리](ergodic-theorem.md)로 이 등식이 나온다.

# 활용

- **매끄러운 동역학.** 다양체 위의 미분동형사상 $f$ 와 불변측도에서 $A(x)=Df(x)$ 로 두면 접벡터의 증가율이 나온다. 양의 지수가 있으면 가까운 두 궤도가 지수적으로 멀어진다. Pesin 공식은 매끄러운 불변측도에서 [Kolmogorov–Sinai 엔트로피](kolmogorov-sinai-entropy.md)가 양의 지수를 중복도와 함께 더한 값과 같다고 한다.
- **무작위 행렬 곱.** 독립이고 같은 분포의 행렬열에서 $\lambda_1$ 이 Furstenberg–Kesten 정리의 지수다. Furstenberg 는 행렬식이 $\pm 1$ 인 행렬들이 생성하는 군이 콤팩트하지 않고, 부분공간의 유한 합집합 가운데 그 군이 보존하는 것이 없으면 $\lambda_1\gt 0$ 임을 보였다.

[^1]: V. I. Oseledets, "A multiplicative ergodic theorem. Lyapunov characteristic numbers for dynamical systems", *Transactions of the Moscow Mathematical Society* 19 (1968), 197–231.

[^2]: M. S. Raghunathan, "A proof of Oseledec's multiplicative ergodic theorem", *Israel Journal of Mathematics* 32 (1979), 356–362.

# 연관 문서

## 선수지식

- [Kingman 부분가법 에르고딕 정리](kingman-subadditive-ergodic.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #probability #differential_geometry #linear_algebra #theorem
