# Browder–Minty 정리

# 개요

**Browder–Minty 정리(Browder–Minty theorem)** 는 반사적 Banach 공간에서 그 쌍대공간으로 가는 작용소가 단조이고 강압적이며 직선 위에서 연속이면 전사라는 진술이다. 구간 $(0,1)$ 에서 $-(\vert u'\vert u')'=f$, $u(0)=u(1)=0$ 을 풀려고 하면, 방정식이 $u$ 에 대해 선형이 아니라서 [Lax–Milgram 정리](lax-milgram.md)를 쓸 수 없다.

이 진술은 좌변을 Sobolev 공간 위의 단조 작용소로 보고, 그 작용소가 모든 $f$ 를 값으로 가진다는 것으로 약해의 존재를 준다.

# 직관

실수에서 실수로 가는 연속 증가함수 $T$ 가 $x\to\pm\infty$ 에서 $\pm\infty$ 로 가면 [중간값 정리](intermediate-value-theorem.md)로 $T$ 는 모든 실수를 값으로 가진다. 증가는 $(T(x)-T(y))(x-y)\ge0$ 이고, 양 끝으로 가는 것은 $T(x)x$ 가 $\vert x\vert$ 보다 빠르게 커지는 것으로 적을 수 있다. 무한차원에서는 중간값 정리가 없으므로, 이 두 조건을 내적 꼴로 옮기고 유한차원 근사와 약수렴으로 중간값 정리를 대신한다.

개요의 방정식에서 $f=1$ 이면 대칭성에서 $\vert u'\vert u'=\tfrac12-x$ 이고 적분하면 다음 해가 나온다.

$$
u(x)=\frac23\Bigl(\bigl(\tfrac12\bigr)^{3/2}-\bigl\vert x-\tfrac12\bigr\vert^{3/2}\Bigr)
$$

$f$ 가 일반 함수이거나 정의역이 평면 영역이면 이런 식이 없고, 해가 있는지부터 정리로 보여야 한다.

# 정의

## 단조, 반연속, 강압

$X$ 를 [반사 공간](reflexive-spaces.md)인 실 [Banach 공간](banach-spaces.md), $X^\ast$ 를 그 쌍대공간, $\langle\cdot,\cdot\rangle$ 을 둘 사이의 짝이라 한다. 작용소 $T:X\to X^\ast$ 가 다음을 만족하면 각각 단조(monotone), 반연속(hemicontinuous), 강압적(coercive)이라 한다.

$$
\begin{aligned}
&\langle Tu-Tv,\thinspace u-v\rangle\ge0\cr
&t\mapsto\langle T(u+tv),\thinspace w\rangle\quad(\text{연속})\cr
&\frac{\langle Tu,u\rangle}{\Vert u\Vert}\to\infty\quad(\Vert u\Vert\to\infty)
\end{aligned}
$$

단조성은 [단조 작용소](monotone-operators.md)의 정의를 [Hilbert 공간](hilbert-spaces.md)의 내적에서 쌍대 짝으로 옮긴 것이다.

## p-Laplace 작용소

$1\lt p\lt\infty$ 와 유계 영역 $\Omega\subset\mathbb R^n$ 에서 $X=W\_0^{1,p}(\Omega)$ 는 [Sobolev 공간](sobolev-spaces.md)이고 반사적이다. 다음으로 정한 $T:X\to X^\ast$ 를 **p-Laplace 작용소(p-Laplacian)** 라 한다.

$$
\langle Tu,v\rangle=\int_\Omega\vert\nabla u\vert^{p-2}\nabla u\cdot\nabla v\thinspace dx
$$

$\langle Tu,u\rangle=\Vert\nabla u\Vert\_p^p$ 이고 $p\gt1$ 이라 강압적이다. 단조성은 $\xi\mapsto\vert\xi\vert^{p-2}\xi$ 가 볼록함수 $\tfrac1p\vert\xi\vert^p$ 의 기울기라는 데서 나온다. 직관 절의 방정식은 $n=1$, $p=3$ 인 경우다.

# 성질

## Browder–Minty 정리

정리. $X$ 가 반사적이고 $T:X\to X^\ast$ 가 유계, 단조, 반연속, 강압적이면 $T$ 는 전사다[^1][^2].

증명의 요지. $f\in X^\ast$ 를 고정한다. 유한차원 부분공간 $X\_n$ 에서 $\langle Tu-f,u\rangle\gt0$ 이 큰 구 위에서 성립하므로, [Brouwer 고정점 정리](brouwer-fixed-point.md)로 $X\_n$ 의 모든 $v$ 에서 $\langle Tu\_n-f,v\rangle=0$ 인 $u\_n$ 이 있다. 강압성으로 $u\_n$ 이 유계이고, 반사성으로 약수렴하는 부분수열의 극한 $u$ 가 있다. 마지막으로 아래의 Minty 기법으로 $Tu=f$ 를 얻는다.

## Minty 기법

정리. $T$ 가 단조이고 반연속이면, 모든 $v\in X$ 에서 $\langle f-Tv,\thinspace u-v\rangle\ge0$ 인 것은 $Tu=f$ 와 동치다.

증명의 요지. $v=u-tw$ ($t\gt0$) 를 넣고 $t$ 로 나누면 $\langle f-T(u-tw),w\rangle\ge0$ 이다. $t\to0$ 에서 반연속성으로 $\langle f-Tu,w\rangle\ge0$ 이고, $w$ 와 $-w$ 를 모두 넣으면 $Tu=f$ 다. 이 부등식은 약극한에서 유지되므로 비선형 항의 약극한을 직접 다루지 않아도 된다.

## 유일성

$u\ne v$ 에서 $\langle Tu-Tv,u-v\rangle\gt0$ 이면(순단조) 해는 하나다. $Tu=Tv=f$ 이면 좌변이 $0$ 이라 $u=v$ 다. p-Laplace 작용소는 순단조이므로 $-\mathrm{div}(\vert\nabla u\vert^{p-2}\nabla u)=f$ 의 약해는 $f\in X^\ast$ 마다 하나뿐이다.

# 활용

- 준선형 타원형 방정식. $-\mathrm{div}\thinspace a(x,u,\nabla u)=f$ 꼴에서 $a$ 가 기울기에 대해 단조이고 증가 조건을 만족하면 같은 방법으로 약해가 나온다. Leray–Lions 정리(Leray–Lions theorem)가 이 일반판이다.
- 거듭제곱 법칙 유체. 점성이 변형률의 거듭제곱에 비례하는 유체의 정상 흐름은 p-Laplace 꼴의 단조 작용소 방정식이다.
- [변분법](calculus-of-variations.md). 강압적인 볼록 범함수의 Gâteaux 미분(Gâteaux derivative)은 단조이고 반연속이므로, 이 정리가 그 범함수의 Euler–Lagrange 방정식의 해를 준다.

[^1]: F. E. Browder, "Nonlinear elliptic boundary value problems", *Bulletin of the American Mathematical Society* 69 (1963), 862–874.
[^2]: G. J. Minty, "On a 'monotonicity' method for the solution of nonlinear equations in Banach spaces", *Proceedings of the National Academy of Sciences* 50 (1963), 1038–1041.

# 연관 문서

## 선수지식

- [단조 작용소](monotone-operators.md)
- [Sobolev 공간](sobolev-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #optimization
