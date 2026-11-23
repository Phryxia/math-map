# 행렬 Bernstein 부등식

# 개요

**행렬 Bernstein 부등식(matrix Bernstein inequality)** 은 독립인 무작위 대칭행렬을 더한 합의 가장 큰 고윳값이 크게 벗어날 확률을, 행렬의 크기 $d$ 와 합의 분산으로 위에서 누르는 부등식이다. 동전을 $m$ 번 던져 앞면에 $+1$, 뒷면에 $-1$ 을 더한 합이 $t$ 를 넘을 확률은 [집중부등식](concentration-inequalities.md)으로 잡힌다. 동전 던지기의 결과가 수 대신 서로 교환하지 않는 행렬에 붙어 있으면 합의 고윳값은 동전 합들로 갈라지지 않는다.

이 부등식은 그런 합에도 수에서의 Bernstein 부등식과 같은 꼴의 한계를 주고, 그 대가는 앞에 붙는 인수 $d$ 하나다.

# 직관

부호 $\varepsilon\_1,\dots,\varepsilon\_m$ 이 독립이고 각각 반반의 확률로 $+1$ 이나 $-1$ 이면, 합 $S=\sum\_k\varepsilon\_k$ 에 대해 Hoeffding 부등식이 $P(S\ge t)\le e^{-t^2/(2m)}$ 를 준다.

독립인 합 $S\_1$, $S\_2$ 를 대각행렬 $\mathrm{diag}(S\_1,S\_2)$ 에 넣으면 가장 큰 고윳값은 $\max(S\_1,S\_2)$ 다. 둘 가운데 하나가 $t$ 를 넘을 확률은 각각의 확률을 더한 값 이하이므로 $2e^{-t^2/(2m)}$ 이하다.

이번에는 다음 두 행렬에 부호를 붙인다.

$$
A=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix},\qquad B=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}
$$

$A$ 에 $m$ 번, $B$ 에 $m$ 번 독립인 부호를 붙여 더하면 합은 $Y=S\_1A+S\_2B$ 이다. $A^2=B^2=I$ 이고 $AB=-BA$ 이므로 $Y^2=(S\_1^2+S\_2^2)I$ 이고, 가장 큰 고윳값은 $\sqrt{S\_1^2+S\_2^2}$ 이다. 이 값은 어느 성분에서도 부호의 합으로 적히지 않으므로 대각행렬에서처럼 성분마다 Hoeffding 부등식을 쓸 수 없다. 행렬 Bernstein 부등식은 이 경우에도 대각행렬과 같은 꼴의 한계 $2\exp\bigl(-\frac{t^2/2}{2m+t/3}\bigr)$ 를 준다.

# 정의

$d\times d$ 대칭행렬 $Y$ 의 가장 큰 고윳값을 $\lambda\_{\max}(Y)$, 연산자 노름을 $\Vert Y\Vert$ 로 쓴다. 무작위 대칭행렬 $X$ 의 기댓값 $\mathbb EX$ 는 성분마다 기댓값을 취한 행렬이다.

독립인 무작위 대칭행렬 $X\_1,\dots,X\_n$ 의 합 $Y=\sum\_kX\_k$ 에 대해 다음 값을 $Y$ 의 **행렬 분산(matrix variance)** 이라 한다.

$$
\sigma^2=\Bigl\Vert\sum\_k\mathbb EX\_k^2\Bigr\Vert
$$

직관 절의 $Y$ 에서 $X\_k$ 는 $\varepsilon\_kA$ 나 $\varepsilon\_kB$ 이고 $X\_k^2=I$ 이므로 $\sigma^2=\Vert 2mI\Vert=2m$ 이다.

# 성질

## 정리

**정리(Tropp, 2012).** 독립인 $d\times d$ 무작위 대칭행렬 $X\_1,\dots,X\_n$ 이 $\mathbb EX\_k=0$ 이고 $\lambda\_{\max}(X\_k)\le R$ 을 만족하면, 모든 $t\ge 0$ 에 대해 다음이 성립한다[^1].

$$
P\Bigl(\lambda\_{\max}\Bigl(\sum\_kX\_k\Bigr)\ge t\Bigr)\le d\cdot\exp\Bigl(-\frac{t^2/2}{\sigma^2+Rt/3}\Bigr)
$$

$d=1$ 이면 수의 Bernstein 부등식(Bernstein inequality)이다. $-X\_k$ 에도 적용하면 $\Vert\sum\_kX\_k\Vert\ge t$ 의 확률은 그 두 배 이하다.

## 증명의 요지

수에서와 같이 지수의 기댓값으로 꼬리를 누른다. $e^{\theta\lambda\_{\max}(Y)}$ 는 $e^{\theta Y}$ 의 가장 큰 고윳값이고 $e^{\theta Y}$ 의 고윳값은 모두 양수이므로, $\theta\gt 0$ 에서 다음이 성립한다.

$$
P\bigl(\lambda\_{\max}(Y)\ge t\bigr)\le e^{-\theta t}\thinspace\mathbb E\thinspace\mathrm{tr}\thinspace e^{\theta Y}
$$

수에서는 독립성으로 $\mathbb Ee^{\theta\sum X\_k}$ 가 곱으로 갈라지지만 행렬에서는 $e^{X+X'}\ne e^Xe^{X'}$ 이다. 대신 $A\mapsto\mathrm{tr}\exp(H+\log A)$ 의 오목성이 쓰인다. 이것은 [Lieb 오목성 정리](lieb-concavity-theorem.md)와 같은 논문에서 증명된 Lieb 의 정리이고, $A=e^{X}$ 에 [Jensen 부등식](jensen-inequality.md)을 적용해 $X\_k$ 를 하나씩 기댓값으로 바꾸면 다음이 나온다.

$$
\mathbb E\thinspace\mathrm{tr}\thinspace e^{\theta Y}\le\mathrm{tr}\exp\Bigl(\sum\_k\log\mathbb Ee^{\theta X\_k}\Bigr)
$$

$\mathbb EX\_k=0$ 과 $\lambda\_{\max}(X\_k)\le R$ 에서 $\log\mathbb Ee^{\theta X\_k}\preceq g(\theta)\thinspace\mathbb EX\_k^2$ 이고, $g(\theta)=(e^{\theta R}-\theta R-1)/R^2$ 이다. 대각합 안의 행렬을 $g(\theta)\sigma^2I$ 로 바꾸면 우변이 $d\thinspace e^{g(\theta)\sigma^2}$ 이하가 되고, $\theta$ 를 수의 Bernstein 부등식에서처럼 고르면 정리가 나온다[^1].

## 차원 인수

인수 $d$ 는 줄일 수 없다. 직관 절의 대각행렬 $\mathrm{diag}(S\_1,\dots,S\_d)$ 에서 $\lambda\_{\max}=\max\_iS\_i$ 이고, 독립인 $d$ 개 가운데 하나가 $t$ 를 넘을 확률은 $t$ 가 너무 크지 않으면 하나가 넘을 확률의 약 $d$ 배다. 그래서 $\mathbb E\lambda\_{\max}(Y)$ 의 한계에는 $\sqrt{2\sigma^2\log d}$ 가 들어간다[^1].

# 활용

- [행렬 완성](matrix-completion.md). Recht 는 관측한 칸으로 만든 무작위 행렬의 합이 기댓값 가까이 모인다는 것을 이 부등식으로 보여, 핵노름 최소화가 원래 행렬을 복원하는 데 필요한 관측 수를 줄였다[^2].
- [스펙트럼 희소화](spectral-sparsification.md). 간선을 유효 저항에 비례하는 확률로 뽑아 만든 Laplace 행렬의 합이 원래 Laplace 행렬과 $1\pm\varepsilon$ 배 안에서 같은 이차형식을 가진다는 것을 이 꼴의 행렬 집중으로 보인다.
- [공분산](covariance.md) 추정. 독립인 표본 벡터 $x\_k$ 의 $x\_kx\_k^{\mathsf T}$ 를 더해 표본 공분산 행렬을 만들면, 연산자 노름으로 $\varepsilon$ 안에 드는 데 필요한 표본 수가 차원에 대해 $d\log d$ 정도다[^1].

[^1]: J. A. Tropp, "User-friendly tail bounds for sums of random matrices", *Foundations of Computational Mathematics* 12 (2012), 389–434.
[^2]: B. Recht, "A simpler approach to matrix completion", *Journal of Machine Learning Research* 12 (2011), 3413–3430.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)
- [Lieb 오목성 정리](lieb-concavity-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #linear_algebra #algorithms
