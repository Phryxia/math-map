# 강연속 반군

# 개요

**강연속 반군(strongly continuous semigroup, C₀ semigroup)** 은 시간 $t\ge0$ 마다 작용소 $T(t)$ 를 하나씩 주어, $t$ 동안 흐른 뒤의 상태를 $T(t)$ 로 계산하게 하는 작용소의 모임이다. 방정식 $u\_t=u\_x$ 의 해는 처음 함수 $f$ 를 왼쪽으로 $t$ 만큼 민 $f(x+t)$ 인데, 행렬 방정식 $u'=Au$ 처럼 $e^{tA}$ 의 급수로 풀려고 하면 $f$ 를 무한히 미분해야 하므로 꺾인 점이 있는 $f$ 에서는 급수가 정의되지 않는다. 그래서 미분 작용소 $A$ 에서 출발하지 않고 미는 작용소 $T(t)$ 의 모임에서 출발하고, $A$ 는 $T(t)$ 를 $t=0$ 에서 미분해 되찾는다.

# 직관

행렬 $A$ 에 대해 $u'=Au$, $u(0)=u\_0$ 의 해는 $u(t)=e^{tA}u\_0$ 이고 $e^{tA}=\sum\_{n\ge0}t^nA^n/n!$ 이다. $A=d/dx$ 에 같은 식을 쓰면 다음이 나온다.

$$
\sum\_{n\ge0}\frac{t^n}{n!}f^{(n)}(x)
$$

$f(x)=x^2$ 이면 이 합은 다음과 같다.

$$
x^2+2tx+t^2=(x+t)^2
$$

그래프를 왼쪽으로 $t$ 만큼 민 함수가 나온다.

$f(x)=e^{-\lvert x\rvert}$ 이면 $x=0$ 에서 $f'$ 이 없어 합의 첫 항부터 정의되지 않는다. 그런데 $f(x+t)$ 는 여전히 뜻이 있고 $u\_t=u\_x$ 를 꺾인 점 밖에서 만족한다. 막힌 곳은 $A$ 의 거듭제곱이므로, $A$ 대신 미는 작용소 $(T(t)f)(x)=f(x+t)$ 를 먼저 정한다.

$T(t)$ 는 $T(0)=I$, $T(t+s)=T(t)T(s)$ 를 만족하고, $f$ 가 제곱적분 가능하면 $t\to0$ 에서 $\Vert T(t)f-f\Vert\to0$ 이다. 미분 작용소는 $\big(T(t)f-f\big)/t$ 의 극한으로 되찾는다. 이 극한은 $f$ 가 미분 가능할 때만 존재하므로 $A$ 는 일부 $f$ 에서만 정의되고, $T(t)$ 는 모든 $f$ 에서 정의된다.

# 정의

## 강연속 반군

[Banach 공간](banach-spaces.md) $X$ 위의 유계 작용소 $T(t)$, $t\ge0$ 가 다음을 만족하면 **강연속 반군**이라 한다.

1. $T(0)=I$ 이고 $s,t\ge0$ 에서 $T(t+s)=T(t)T(s)$ 다.
2. 모든 $x\in X$ 에서 $t\to0^+$ 이면 $\Vert T(t)x-x\Vert\to0$ 이다.

모든 $t$ 에서 $\Vert T(t)\Vert\le1$ 이면 **축약 반군(contraction semigroup)** 이라 한다. 직관 절의 이동 $T(t)$ 는 $L^2(\mathbb R)$ 위의 축약 반군이고, 노름을 보존하므로 $\Vert T(t)\Vert=1$ 이다.

## 생성원

강연속 반군 $T$ 의 **생성원(generator)** $A$ 는 다음 극한이 존재하는 $x$ 전체를 정의역 $\mathcal D(A)$ 로 갖는 작용소다.

$$
Ax=\lim\_{t\to0^+}\frac{T(t)x-x}{t}
$$

직관 절의 이동에서 $A$ 는 $Af=f'$ 이고, 정의역은 $f$ 와 그 약미분 $f'$ 이 모두 $L^2(\mathbb R)$ 에 드는 [Sobolev 공간](sobolev-spaces.md) $H^1(\mathbb R)$ 이다. $e^{-\lvert x\rvert}$ 은 약미분 $-\mathrm{sgn}(x)e^{-\lvert x\rvert}$ 이 $L^2$ 에 들므로 정의역에 있다.

# 성질

## 지수 증가

정리. 강연속 반군에는 상수 $M\ge1$, $\omega\in\mathbb R$ 이 있어 모든 $t\ge0$ 에서 $\Vert T(t)\Vert\le Me^{\omega t}$ 다[^1].

증명의 요지. 구간 $\lbrack 0,\delta\rbrack$ 에서 $T(t)x$ 가 $x$ 마다 유계이므로 [균등유계성 원리](uniform-boundedness.md)로 $\Vert T(t)\Vert\le M$ 이다. $t=n\delta+r$ 로 쪼개고 반군 법칙을 쓰면 $\Vert T(t)\Vert\le M^{n+1}$ 이 되어 지수 상한이 나온다.

## 생성원의 성질

정리. 생성원 $A$ 는 닫힌 작용소이고 정의역이 조밀하다. 서로 다른 강연속 반군은 생성원이 다르다[^1].

$x\in\mathcal D(A)$ 이면 $u(t)=T(t)x$ 는 $u'(t)=Au(t)$, $u(0)=x$ 의 유일한 해다. 그래서 반군을 $T(t)=e^{tA}$ 로 쓴다.

## 분해작용소와 Laplace 변환

정리. $\mathrm{Re}\thinspace\lambda\gt\omega$ 이면 $\lambda$ 는 $A$ 의 분해집합에 있고 다음이 성립한다[^1].

$$
(\lambda-A)^{-1}x=\int\_0^\infty e^{-\lambda t}T(t)x\thinspace dt
$$

분해작용소는 반군의 [Laplace 변환](laplace-transform.md)이다. 이동 반군에서 $g(x)=\int\_0^\infty e^{-\lambda t}f(x+t)\thinspace dt$ 를 미분하고 부분적분하면 $g'=\lambda g-f$ 이므로 $(\lambda-A)g=f$ 다.

## Hille–Yosida 정리

정리. $X$ 위의 작용소 $A$ 가 축약 반군의 생성원인 것은 다음 세 조건과 동치다. 이것을 Hille–Yosida 정리(Hille–Yosida theorem)라 한다[^2][^3].

1. $A$ 는 닫힌 작용소이고 정의역이 조밀하다.
2. 모든 $\lambda\gt0$ 이 $A$ 의 분해집합에 있다.
3. 모든 $\lambda\gt0$ 에서 $\Vert(\lambda-A)^{-1}\Vert\le1/\lambda$ 다.

필요성은 위의 Laplace 변환 식에서 $\Vert T(t)\Vert\le1$ 을 쓰면 나온다. 충분성은 유계 작용소 $A\_\lambda=\lambda A(\lambda-A)^{-1}$ 을 만든다. $e^{tA\_\lambda}$ 는 급수로 정의되는 축약이고, $\lambda\to\infty$ 에서 $A\_\lambda x\to Ax$ 이므로 $e^{tA\_\lambda}x$ 가 수렴해 반군을 준다. $A\_\lambda$ 를 Yosida 근사(Yosida approximation)라 한다.

## Lumer–Phillips 정리

[Hilbert 공간](hilbert-spaces.md)에서 정의역의 모든 $x$ 에 대해 $\mathrm{Re}\langle Ax,x\rangle\le0$ 이면 $A$ 를 **소산 작용소(dissipative operator)** 라 한다.

정리. Hilbert 공간 위의 조밀하게 정의된 작용소 $A$ 가 축약 반군의 생성원인 것은 $A$ 가 소산 작용소이고 어떤 $\lambda\gt0$ 에서 $\lambda-A$ 가 전사인 것과 동치다. 이것을 Lumer–Phillips 정리(Lumer–Phillips theorem)라 한다[^4].

이동 반군에서 $\mathrm{Re}\langle f',f\rangle=\tfrac12\int(\lvert f\rvert^2)'\thinspace dx=0$ 이므로 $A$ 와 $-A$ 가 둘 다 소산 작용소다. 그래서 이동은 양쪽 시간 방향으로 축약이고 유니터리 군이 된다. 이것이 [비유계 작용소](unbounded-operators.md) 문서의 Stone 정리에서 자기수반 작용소가 $iA$ 인 경우다.

# 활용

- [열방정식](heat-equation.md). $L^2(\mathbb R^n)$ 에서 Laplace 작용소 $\Delta$ 는 소산 작용소이고 $1-\Delta$ 가 전사이므로 축약 반군 $e^{t\Delta}$ 를 생성한다. $e^{t\Delta}f$ 는 $f$ 를 Gauss 핵과 합성곱한 것이다.
- 연속 시간 Markov 과정. 상태 공간 위의 함수 $f$ 에 $x\mapsto E\lbrack f(X\_t)\mid X\_0=x\rbrack$ 를 대응시키면 [Feller 과정](feller-processes.md)에서는 강연속 축약 반군이 나오고, 생성원이 과정의 순간 변화율을 정한다.
- 선형 발전 방정식. 지연 방정식, 수송 방정식, 감쇠 파동 방정식을 Banach 공간 위의 $u'=Au$ 로 쓰고, Hille–Yosida 정리로 해의 존재와 연속 의존성을 얻는다[^1].

[^1]: K.-J. Engel, R. Nagel, *One-Parameter Semigroups for Linear Evolution Equations*, Graduate Texts in Mathematics 194, Springer, 2000, 1 장과 2 장.
[^2]: E. Hille, *Functional Analysis and Semi-Groups*, American Mathematical Society Colloquium Publications 31, 1948.
[^3]: K. Yosida, "On the differentiability and the representation of one-parameter semi-group of linear operators", *Journal of the Mathematical Society of Japan* 1 (1948), 15–21.
[^4]: G. Lumer, R. S. Phillips, "Dissipative operators in a Banach space", *Pacific Journal of Mathematics* 11 (1961), 679–698.

# 연관 문서

## 선수지식

- [비유계 작용소](unbounded-operators.md)

## 더 알아보기

- [Lie–Trotter 곱 공식](lie-trotter-formula.md)
- [Feller 과정](feller-processes.md)
- [해석 반군](analytic-semigroups.md)

#functional_analysis #analysis #probability
