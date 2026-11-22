# Morrey 준볼록성

# 개요

**Morrey 준볼록성(Morrey quasiconvexity)** 은 행렬을 변수로 받는 에너지 밀도 $f$ 가, 경계를 고정한 균일한 변형을 안쪽에서 어떻게 흔들어도 평균 에너지가 줄지 않는다는 조건이다. 고무판을 일정하게 늘려 테두리를 고정했을 때, 판 안쪽을 잘게 주름지게 하면 에너지가 더 낮아질 수 있는가 하는 물음이 이 조건이다.

준볼록성은 에너지 $\int f(\nabla u)$ 가 약수렴의 극한에서 값이 뛰어오르지 않을 조건과 같다. 그래서 탄성체의 평형 상태가 존재하는지를 [변분법의 직접법](direct-method.md)으로 판정할 때 이 조건을 확인한다.

# 직관

평면의 탄성판이 점 $x$ 를 $u(x)\in\mathbb R^2$ 로 옮긴다. 에너지는 $\int f(\nabla u)\thinspace dx$ 이고, $\nabla u$ 는 $2\times 2$ 행렬이다. 판을 그대로 둔 $\nabla u=I$ 에서 에너지 밀도가 $0$ 이고, 판을 통째로 돌려도 에너지는 바뀌지 않는다. 판을 반 바퀴 돌린 변형의 기울기는 $-I$ 이므로 $f(-I)=0$ 이다.

$f$ 가 볼록이면 $f(0)\le\tfrac12f(I)+\tfrac12f(-I)=0$ 이다. 기울기 $0$ 은 판 전체를 한 점으로 눌러 버리는 변형인데 에너지가 $0$ 이하가 되어 버린다. 그러므로 탄성 에너지는 볼록일 수 없고, 스칼라 문제에서 쓰던 볼록성 판정을 쓸 수 없다.

약하반연속성에 실제로 필요한 조건을 찾는다. 단위 정사각형 $D$ 위의 균일한 변형 $Ax$ 에 주기 $1$ 인 립시츠 함수 $\varphi$ 로 만든 진동을 더해 $u_k(x)=Ax+\varphi(kx)/k$ 로 둔다. $u_k$ 는 $Ax$ 로 고르게 수렴하고, 기울기 $A+\nabla\varphi(kx)$ 는 $A$ 로 [약하게 수렴](weak-convergence.md)한다. 기울기는 작은 정사각형마다 같은 무늬를 되풀이하므로 에너지는 다음 값으로 간다.

$$
\int_Df(\nabla u_k)\thinspace dx\to\int_Df\bigl(A+\nabla\varphi(y)\bigr)\thinspace dy
$$

약하반연속성은 이 극한이 $f(A)$ 이상일 것을 요구한다. 균일한 변형에 어떤 주기적 흔들림을 더해도 평균 에너지가 $f(A)$ 아래로 내려가지 않아야 한다. 이 조건을 준볼록성이라 한다.

# 정의

$f:\mathbb R^{m\times n}\to\mathbb R$ 이 연속이라 하자. 모든 유계 열린집합 $D\subset\mathbb R^n$, 모든 $A\in\mathbb R^{m\times n}$, 경계에서 $0$ 인 모든 립시츠 함수 $\varphi:D\to\mathbb R^m$ 에서 다음이 성립하면 $f$ 를 **준볼록(quasiconvex)** 이라 한다[^1].

$$
f(A)\le\frac{1}{\vert D\vert}\int_Df\bigl(A+\nabla\varphi(x)\bigr)\thinspace dx
$$

$D$ 를 하나로 고정해도 같은 조건이고, 경계에서 $0$ 인 $\varphi$ 대신 직관 절의 주기 함수 $\varphi$ 를 써도 같은 조건이다[^2].

$m=n=2$ 에서 [행렬식](determinants.md) $\det$ 는 준볼록이다. $\det(A+\nabla\varphi)$ 를 전개하면 $\det A$ 와 $\nabla\varphi$ 에 선형인 항과 $\det\nabla\varphi$ 가 나온다. 선형인 항은 $\varphi$ 가 경계에서 $0$ 이므로 적분이 $0$ 이다. 마지막 항도 다음 발산 꼴이라 적분이 $0$ 이다.

$$
\det\nabla\varphi=\partial_1(\varphi_1\partial_2\varphi_2)-\partial_2(\varphi_1\partial_1\varphi_2)
$$

그러므로 정의의 부등식이 등식으로 성립하고, 같은 이유로 $-\det$ 도 준볼록이다. $\det$ 는 볼록이 아니다. $\mathrm{diag}(1,-1)$ 과 $\mathrm{diag}(-1,1)$ 의 행렬식은 $-1$ 이고 그 가운데 점 $0$ 의 행렬식은 $0$ 이다.

# 성질

## 볼록성 사이의 순서

$f$ 가 **다볼록(polyconvex)** 이라는 것은 $A$ 의 모든 소행렬식을 늘어놓은 벡터 $T(A)$ 의 볼록함수 $g$ 로 $f(A)=g(T(A))$ 라 적히는 것이다. $2\times 2$ 행렬에서는 $T(A)=(A,\det A)$ 다. $f$ 가 **계수 1 볼록(rank-one convex)** 이라는 것은 모든 $a\in\mathbb R^m$, $b\in\mathbb R^n$ 에서 $t\mapsto f(A+ta\otimes b)$ 가 볼록인 것이다.

정리. 실숫값 $f$ 에서 다음 함의가 성립한다. $m=1$ 이거나 $n=1$ 이면 네 조건이 모두 볼록성과 동치다[^2].

$$
\text{볼록}\Rightarrow\text{다볼록}\Rightarrow\text{준볼록}\Rightarrow\text{계수 1 볼록}
$$

증명의 요지. 다볼록에서 준볼록은 [Jensen 부등식](jensen-inequality.md)이다. 소행렬식 $T(A+\nabla\varphi)$ 의 평균은 행렬식의 예처럼 $T(A)$ 이므로 $g(T(A))\le$ 평균 $g(T(A+\nabla\varphi))$ 다. 준볼록에서 계수 1 볼록은 아래의 층 구조에서 나온다.

## 층 구조와 계수 1 연결

$0\lt\lambda\lt 1$ 이고 $h$ 가 주기 $1$ 의 톱니 함수로서, 길이 $\lambda$ 의 구간에서 기울기 $1-\lambda$, 나머지 구간에서 기울기 $-\lambda$ 를 가진다고 하자. $\varphi(y)=a\thinspace h(y\cdot b)$ 로 두면 $\nabla\varphi=h'(y\cdot b)\thinspace a\otimes b$ 이고, 기울기 $A+\nabla\varphi$ 는 $b$ 에 수직인 띠마다 다음 두 값을 번갈아 갖는다.

$$
A+(1-\lambda)a\otimes b,\qquad A-\lambda\thinspace a\otimes b
$$

이 $\varphi$ 를 준볼록성의 주기 꼴 정의에 넣으면 다음 부등식이 나오고, 이것이 계수 1 볼록성이다.

$$
f(A)\le\lambda f\bigl(A+(1-\lambda)a\otimes b\bigr)+(1-\lambda)f(A-\lambda\thinspace a\otimes b)
$$

두 상수 기울기 $F$ 와 $G$ 가 법선 $b$ 인 직선을 사이에 두고 이어지려면 $F-G=a\otimes b$ 꼴, 곧 계수 $1$ 이어야 한다. 직관 절의 $I$ 와 $-I$ 는 차가 $2I$ 로 계수 $2$ 여서 띠로 번갈아 놓을 수 없다. 그래서 준볼록성은 $f(0)\le 0$ 을 요구하지 않는다.

## Šverák 반례

$m\ge 3$, $n\ge 2$ 이면 계수 1 볼록이지만 준볼록이 아닌 함수가 있다[^3]. 준볼록이지만 다볼록이 아닌 함수도 있다[^2]. 그러므로 위의 세 함의는 $m\ge 3$ 에서 모두 진함의다.

## 약하반연속성 정리

정리(Morrey, Acerbi–Fusco). $1\le p\lt\infty$ 이고 $f$ 가 연속이며 $0\le f(A)\le C(1+\vert A\vert^p)$ 를 만족한다고 하자. 범함수 $J(u)=\int_\Omega f(\nabla u)\thinspace dx$ 가 $W^{1,p}(\Omega;\mathbb R^m)$ 에서 순차 약하반연속일 필요충분조건은 $f$ 가 준볼록인 것이다[^1][^4].

필요조건은 직관 절의 계산이다. 충분조건의 증명은 약수렴하는 열을 작은 정육면체마다 경계값이 아핀인 함수로 바꾸고 각 정육면체에서 정의의 부등식을 쓴다. $f(A)\ge c\vert A\vert^p-C$ 인 $p\gt 1$ 을 더하면 직접법으로 경계값 문제의 최소점이 존재한다.

## 준볼록 포락과 완화

$f$ 의 **준볼록 포락(quasiconvex envelope)** $Qf$ 는 $f$ 이하인 준볼록 함수 가운데 가장 큰 것이고, 다음 식으로 계산된다.

$$
Qf(A)=\inf_\varphi\frac{1}{\vert D\vert}\int_Df\bigl(A+\nabla\varphi(x)\bigr)\thinspace dx
$$

위 정리의 증가 조건 아래에서 $\int f(\nabla u)$ 의 하한은 $\int Qf(\nabla u)$ 의 최솟값과 같다[^2]. $m=1$ 에서 $Qf$ 는 볼록 포락이다. [Young 측도](young-measures.md)의 Bolza 문제의 $f(s)=(s^2-1)^2$ 에서 $Qf(s)$ 는 $\vert s\vert\le 1$ 일 때 $0$ 이고 그 밖에서 $f(s)$ 다.

# 활용

- 비선형 탄성학. Ball 은 판이 눌려 부피가 $0$ 으로 갈 때 에너지가 무한대로 가는 다볼록 에너지에서 평형 상태의 존재를 증명했다[^5]. 다볼록성을 쓰는 까닭은 준볼록성보다 확인하기 쉽기 때문이고, 증명은 [div–curl 보조정리](div-curl-lemma.md)가 주는 행렬식의 약연속성을 쓴다.
- 결정의 미세 구조. 형상 기억 합금의 마르텐사이트는 에너지가 $0$ 인 기울기 집합이 계수 1 연결된 둘 이상의 회전 궤도로 된 에너지를 가진다. Ball 과 James 는 이 에너지의 최소화열이 점점 잘아지는 층 구조로 하한에 다가가고 최소점은 없을 수 있음을 보였다[^6]. 관측되는 미세 구조는 준볼록 포락과 최소화열의 Young 측도로 기술한다.
- 기울기 Young 측도. Kinderlehrer 와 Pedregal 은 Young 측도가 어떤 함수열의 기울기로 생성될 필요충분조건이 모든 준볼록 함수에 대한 Jensen 부등식임을 보였다[^7].

[^1]: C. B. Morrey, "Quasi-convexity and the lower semicontinuity of multiple integrals", *Pacific Journal of Mathematics* **2** (1952), 25–53.

[^2]: B. Dacorogna, *Direct Methods in the Calculus of Variations*, 2nd ed., Springer (2008), Chapters 5–6, 9.

[^3]: V. Šverák, "Rank-one convexity does not imply quasiconvexity", *Proceedings of the Royal Society of Edinburgh* **120A** (1992), 185–189.

[^4]: E. Acerbi, N. Fusco, "Semicontinuity problems in the calculus of variations", *Archive for Rational Mechanics and Analysis* **86** (1984), 125–145.

[^5]: J. M. Ball, "Convexity conditions and existence theorems in nonlinear elasticity", *Archive for Rational Mechanics and Analysis* **63** (1977), 337–403.

[^6]: J. M. Ball, R. D. James, "Fine phase mixtures as minimizers of energy", *Archive for Rational Mechanics and Analysis* **100** (1987), 13–52.

[^7]: D. Kinderlehrer, P. Pedregal, "Characterizations of Young measures generated by gradients", *Archive for Rational Mechanics and Analysis* **115** (1991), 329–365.

# 연관 문서

## 선수지식

- [변분법의 직접법](direct-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
