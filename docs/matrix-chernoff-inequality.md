# 행렬 Chernoff 부등식

# 개요

**행렬 Chernoff 부등식(matrix Chernoff inequality)** 은 독립인 무작위 양의 준정부호 행렬을 더한 합의 가장 작은 고윳값과 가장 큰 고윳값이 기댓값의 몇 배 밖으로 벗어날 확률을 위에서 누르는 부등식이다. 평면의 정해진 세 방향 가운데 하나를 무작위로 여러 번 고르면, 고른 방향들이 평면의 모든 방향을 고르게 덮는지가 문제가 된다. 방향 하나를 정해 두면 수의 Chernoff 한계로 충분하지만 평면의 방향은 무한히 많다.

이 부등식은 모든 방향을 한꺼번에 다루어, 수의 Chernoff 한계에 행렬의 크기 $d$ 를 곱한 한계를 준다.

# 직관

평면에 120° 간격으로 세 단위벡터를 둔다.

$$
v\_1=(1,0),\qquad v\_2=\Bigl(-\frac12,\frac{\sqrt3}{2}\Bigr),\qquad v\_3=\Bigl(-\frac12,-\frac{\sqrt3}{2}\Bigr)
$$

셋 가운데 하나를 같은 확률로 골라 $X=2v\_Jv\_J^{\mathsf T}$ 를 만든다. 세 벡터에서 다음이 성립한다.

$$
v\_1v\_1^{\mathsf T}+v\_2v\_2^{\mathsf T}+v\_3v\_3^{\mathsf T}=\frac32 I
$$

그래서 $\mathbb EX=I$ 이다. 이것을 독립으로 $m$ 번 되풀이해 $Y=X\_1+\dots+X\_m$ 을 만들면 $\mathbb EY=mI$ 이다.

단위벡터 $x$ 하나를 정하면 $x^{\mathsf T}Yx=\sum\_kx^{\mathsf T}X\_kx$ 이고, 각 항은 $0$ 과 $2$ 사이의 독립인 수다. 그래서 $x^{\mathsf T}Yx$ 가 $m$ 의 절반 아래로 내려갈 확률은 수의 Chernoff 한계로 누를 수 있다.

모든 방향에서 한꺼번에 $m$ 의 절반 위에 있는지는 $x^{\mathsf T}Yx$ 의 최솟값으로 정해지고, 이 최솟값은 [Rayleigh 몫](rayleigh-quotient.md)에 따라 $Y$ 의 가장 작은 고윳값 $\lambda\_{\min}(Y)$ 다. $v\_1,v\_2,v\_3$ 이 뽑힌 횟수를 $a,b,c$ 라 하면 $Y$ 의 대각합은 $2m$, 행렬식은 $3(ab+bc+ca)$ 이므로 다음이 나온다.

$$
\lambda\_{\min}(Y)=m-\sqrt{m^2-3(ab+bc+ca)}
$$

$m=6$ 이면 횟수 $(2,2,2)$ 에서 $6$, $(3,3,0)$ 과 $(4,1,1)$ 에서 $3$, $(5,1,0)$ 에서 약 $1.42$, $(6,0,0)$ 에서 $0$ 이다. 이 값은 세 횟수를 함께 보아야 정해지고, 어느 한 방향의 수로 적히지 않는다. 방향마다 수의 Chernoff 한계를 쓰고 확률을 더하는 방법은 방향이 무한히 많아서 쓸 수 없다.

행렬 Chernoff 부등식은 이 경우에 $m=100$ 이면 $\lambda\_{\min}(Y)\le 50$ 일 확률이 약 $0.0009$ 이하라는 것을 준다. 수의 Chernoff 한계를 방향 하나에 쓴 값에 $d=2$ 를 곱한 것이다.

# 정의

대칭행렬 $A$ 가 모든 벡터 $x$ 에 대해 $x^{\mathsf T}Ax\ge 0$ 을 만족하면 양의 준정부호(positive semidefinite)라 한다. $B-A$ 가 양의 준정부호이면 $A\preceq B$ 로 쓰고, 이 순서를 **Löwner 순서(Löwner order)** 라 한다. $d\times d$ 대칭행렬 $Y$ 의 가장 작은 고윳값과 가장 큰 고윳값을 $\lambda\_{\min}(Y)$, $\lambda\_{\max}(Y)$ 로 쓴다.

독립인 무작위 양의 준정부호 행렬 $X\_1,\dots,X\_n$ 의 합 $Y=\sum\_kX\_k$ 에 대해 기댓값의 양 끝 고윳값을 다음과 같이 둔다.

$$
\mu\_{\min}=\lambda\_{\min}\Bigl(\sum\_k\mathbb EX\_k\Bigr),\qquad\mu\_{\max}=\lambda\_{\max}\Bigl(\sum\_k\mathbb EX\_k\Bigr)
$$

직관 절의 $Y$ 에서는 $\sum\_k\mathbb EX\_k=mI$ 이므로 $\mu\_{\min}=\mu\_{\max}=m$ 이고, $X\_k$ 의 고윳값은 $0$ 과 $2$ 이므로 $\lambda\_{\max}(X\_k)\le 2$ 다.

# 성질

## 정리

**정리(Tropp, 2012).** 독립인 $d\times d$ 무작위 양의 준정부호 행렬 $X\_1,\dots,X\_n$ 이 $\lambda\_{\max}(X\_k)\le R$ 을 만족하면 $0\le\delta\lt 1$ 에서 다음이 성립한다[^1].

$$
P\bigl(\lambda\_{\min}(Y)\le(1-\delta)\mu\_{\min}\bigr)\le d\Bigl\lbrack\frac{e^{-\delta}}{(1-\delta)^{1-\delta}}\Bigr\rbrack^{\mu\_{\min}/R}
$$

$\delta\ge 0$ 에서 다음이 성립한다.

$$
P\bigl(\lambda\_{\max}(Y)\ge(1+\delta)\mu\_{\max}\bigr)\le d\Bigl\lbrack\frac{e^{\delta}}{(1+\delta)^{1+\delta}}\Bigr\rbrack^{\mu\_{\max}/R}
$$

$d=1$ 이면 $[0,R]$ 에 값을 갖는 독립인 수의 합에 대한 Chernoff 한계다. 더 약한 꼴로 Ahlswede 와 Winter 가 먼저 증명했다[^2].

$0\le\delta\le 1$ 에서 괄호 안의 값을 지수로 누르면 다음 꼴이 나온다.

$$
\begin{aligned}
P\bigl(\lambda\_{\min}(Y)\le(1-\delta)\mu\_{\min}\bigr)&\le d\thinspace e^{-\delta^2\mu\_{\min}/(2R)}\cr
P\bigl(\lambda\_{\max}(Y)\ge(1+\delta)\mu\_{\max}\bigr)&\le d\thinspace e^{-\delta^2\mu\_{\max}/(3R)}
\end{aligned}
$$

직관 절의 예에 $d=2$, $R=2$, $\mu\_{\min}=100$, $\delta=\frac12$ 를 넣으면 첫 정리에서 약 $0.00093$, 간단한 꼴에서 $2e^{-6.25}\approx 0.0039$ 가 나온다.

## 증명의 요지

[행렬 Bernstein 부등식](matrix-bernstein-inequality.md)과 같은 길을 간다. $\theta\gt 0$ 에서 다음이 성립한다.

$$
P\bigl(\lambda\_{\max}(Y)\ge t\bigr)\le e^{-\theta t}\thinspace\mathbb E\thinspace\mathrm{tr}\thinspace e^{\theta Y}\le e^{-\theta t}\thinspace\mathrm{tr}\exp\Bigl(\sum\_k\log\mathbb Ee^{\theta X\_k}\Bigr)
$$

둘째 부등식은 Lieb 가 증명한 대각합 지수 함수의 오목성에서 나온다. 다음 단계가 Bernstein 부등식과 다르다.

1. $e^{\theta x}$ 는 볼록이므로 $0\le x\le R$ 에서 $e^{\theta x}\le 1+g(\theta)x$ 이고, $g(\theta)=(e^{\theta R}-1)/R$ 이다. $X\_k$ 의 고윳값마다 이것을 쓰면 $\mathbb Ee^{\theta X\_k}\preceq I+g(\theta)\mathbb EX\_k$ 다.
2. $\log$ 는 [연산자 단조 함수](operator-monotone-functions.md)이고 $\log(1+a)\le a$ 이므로 $\log\mathbb Ee^{\theta X\_k}\preceq g(\theta)\mathbb EX\_k$ 다.
3. $\mathrm{tr}\exp$ 는 Löwner 순서를 지키므로 대각합은 $\mathrm{tr}\exp\bigl(g(\theta)\sum\_k\mathbb EX\_k\bigr)\le d\thinspace e^{g(\theta)\mu\_{\max}}$ 이하다.

$t=(1+\delta)\mu\_{\max}$, $\theta=\log(1+\delta)/R$ 로 고르면 둘째 정리가 나온다. 첫째 정리는 $\theta$ 를 음수로 잡아 같은 단계를 밟고 $\theta=\log(1-\delta)/R$ 로 고른다[^1].

## 쿠폰 수집가 문제와 차원 인수

$e\_1,\dots,e\_d$ 가운데 하나를 같은 확률로 골라 $X\_k=e\_Je\_J^{\mathsf T}$ 로 두면 $Y$ 는 각 번호가 뽑힌 횟수를 대각에 놓은 행렬이다. $\lambda\_{\min}(Y)=0$ 은 한 번도 뽑히지 않은 번호가 있다는 것이고, 이것은 [쿠폰 수집가 문제](coupon-collector.md)의 사건이다.

여기서 $R=1$, $\mu\_{\min}=m/d$ 이다. 첫째 정리의 우변은 $\delta\to 1$ 에서 $d\thinspace e^{-m/d}$ 로 줄어들므로 다음이 나온다.

$$
P\bigl(\lambda\_{\min}(Y)=0\bigr)\le d\thinspace e^{-m/d}
$$

이것은 번호마다 빠질 확률 $(1-1/d)^m\le e^{-m/d}$ 를 $d$ 개 더한 값과 같다. $m=d\log d+cd$ 이면 우변이 $e^{-c}$ 이고, 쿠폰 수집가 문제에서 $m$ 이 $d\log d$ 보다 작으면 빠진 번호가 남을 확률이 $1$ 에 가까우므로 인수 $d$ 는 줄일 수 없다.

## 행렬 Bernstein 부등식과의 차이

행렬 Bernstein 부등식은 평균이 $0$ 인 항의 합을 다루고 행렬 분산 $\Vert\sum\_k\mathbb EX\_k^2\Vert$ 를 쓴다. 행렬 Chernoff 부등식은 양의 준정부호인 항의 합을 다루고 기댓값의 고윳값 $\mu\_{\min}$, $\mu\_{\max}$ 와 상한 $R$ 만 쓴다. 그래서 벗어나는 정도를 기댓값에 대한 비율 $\delta$ 로 재고, 가장 작은 고윳값이 $0$ 에서 떨어져 있는지를 보이는 데 쓰인다.

# 활용

- [스펙트럼 희소화](spectral-sparsification.md). 간선을 유효저항에 비례하는 확률로 뽑으면 정규화한 간선 항이 양의 준정부호이고 노름이 일정하게 눌리므로, 이 부등식으로 정점이 $n$ 개인 그래프에서 간선 $O(n\log n/\varepsilon^2)$ 개면 모든 이차형식이 $1\pm\varepsilon$ 배 안에 든다는 것이 나온다.
- [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md). 간선마다 확률 $p$ 로 넣은 그래프의 [그래프 Laplacian](graph-laplacian.md)은 간선 하나의 Laplacian 을 독립으로 더한 것이고, 기댓값은 상수 벡터에 수직인 방향에서 고윳값이 모두 $pn$ 이다. 그 방향으로 제한하면 $R=2$ 이므로 둘째로 작은 고윳값이 $(1-\delta)pn$ 아래일 확률은 $(n-1)e^{-\delta^2pn/4}$ 이하이고, $p\ge C\log n/n$ 이고 상수 $C$ 가 충분히 크면 그래프가 높은 확률로 연결된다.
- [무작위 특이값 분해](randomized-svd.md)와 무작위 행 추출. 행렬의 행을 무작위로 골라 줄일 때, 고른 행으로 만든 Gram 행렬의 가장 작은 고윳값이 원래의 절반 아래로 내려가지 않는다는 것을 이 부등식으로 보인다. Tropp 은 무작위 Hadamard 변환 뒤 행을 고르는 방법을 이렇게 분석했다[^3].

[^1]: J. A. Tropp, "User-friendly tail bounds for sums of random matrices", *Foundations of Computational Mathematics* 12 (2012), 389–434. Theorem 1.1.
[^2]: R. Ahlswede, A. Winter, "Strong converse for identification via quantum channels", *IEEE Transactions on Information Theory* 48 (2002), 569–579.
[^3]: J. A. Tropp, "Improved analysis of the subsampled randomized Hadamard transform", *Advances in Adaptive Data Analysis* 3 (2011), 115–126.

# 연관 문서

## 선수지식

- [행렬 Bernstein 부등식](matrix-bernstein-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #linear_algebra #algorithms #graph_theory
