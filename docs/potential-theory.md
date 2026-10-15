# 퍼텐셜 이론

# 개요

[Dirichlet 문제](dirichlet-problem.md)는 경계가 매끄러운 영역에서 [Green 함수](greens-function.md)로 풀린다. 경계가 거칠면 경계의 어느 부분이 해의 값을 결정하고 어느 부분이 결정하지 못하는지부터 가려야 한다.

**퍼텐셜 이론**은 그 구분을 측도의 에너지와 용량으로 재고, 세분함수의 상한으로 일반 영역의 해를 만든다. 용량이 $0$ 인 집합은 경계값에 영향을 주지 못하고, 같은 집합이 Brownian 운동이 닿지 못하는 집합이다.

# 직관

원판 $D$ 에서 중심을 뺀 영역 $\Omega=D\setminus\lbrace 0\rbrace$ 에서 Dirichlet 문제를 푼다. 경계는 $\partial D$ 와 점 $0$ 으로 되어 있고, $\partial D$ 에서 $0$, 점 $0$ 에서 $1$ 인 경계값을 준다.

해가 있다고 하고 계산해 본다. 유계인 조화함수는 한 점을 뺀 근방에서 그 점까지 조화적으로 연장되므로, 해를 $D$ 전체의 조화함수로 볼 수 있다. 그러면 경계 $\partial D$ 에서 $0$ 이고 최대값 원리로 $D$ 에서 $0$ 이다. 점 $0$ 에서 값 $1$ 을 받아내는 해는 없다. 경계에 올려놓은 값이 한 점에서는 버려지는 것이므로, 경계의 어느 부분이 값을 받아내는지 재는 양이 있어야 한다. 집합에 질량을 올려 퍼텐셜의 에너지가 유한하게 할 수 있는지로 재면 그 양이 나오고, 한 점에는 그런 질량을 올릴 수 없다.

# 정의

## 세분함수

영역 $\Omega$ 에서 상반연속인 함수 $u:\Omega\to\lbrack-\infty,\infty)$ 가 모든 닫힌 공 $\overline B(x,r)\subset\Omega$ 에서

$$
u(x)\le\frac{1}{\sigma(\partial B(x,r))}\int_{\partial B(x,r)}u\thinspace d\sigma
$$

를 만족하면 $u$ 를 **세분함수**라 한다. $u$ 가 $C^2$ 이면 이 조건은 $\Delta u\ge0$ 과 같다. $-u$ 가 세분함수인 것을 상위조화함수라 하고, 둘 다인 것이 조화함수다.

## Perron 해

유계 영역 $\Omega$ 의 경계 위 유계 함수 $f$ 에 대해

$$
\mathcal U_f=\lbrace v:\Omega\to\mathbb R\ \vert\ v\thinspace\text{ 세분},\ \limsup_{x\to\xi}v(x)\le f(\xi)\thinspace\text{ 모든 }\xi\in\partial\Omega\rbrace
$$

로 두고 $H_f(x)=\sup_{v\in\mathcal U_f}v(x)$ 를 **Perron 해**라 한다.

## 퍼텐셜과 에너지

$d\ge3$ 에서 핵을 $k(x,y)=\vert x-y\vert^{2-d}$ 로 둔다. 양측도 $\mu$ 의 **퍼텐셜**과 **에너지**는

$$
U^{\mu}(x)=\int k(x,y)\thinspace d\mu(y),\qquad I(\mu)=\int\int k(x,y)\thinspace d\mu(x)\thinspace d\mu(y)
$$

다. $d=2$ 에서는 $k(x,y)=\log\frac{1}{\vert x-y\vert}$ 를 쓴다.

## 용량

콤팩트 집합 $K$ 의 **용량**은

$$
\mathrm{cap}(K)=\frac{1}{\inf\lbrace I(\mu)\ \vert\ \mu\thinspace\text{ 는 }K\thinspace\text{ 위의 확률측도}\rbrace}
$$

이고, 에너지가 유한한 확률측도가 없으면 $\mathrm{cap}(K)=0$ 이다. 하한을 달성하는 측도를 $K$ 의 **균형 측도**라 한다.

# 성질

## Perron 해의 조화성

**정리.** $\mathcal U_f$ 가 비어 있지 않으면 $H_f$ 는 $\Omega$ 에서 조화함수다.[^1]

세분함수족의 상한이 상반연속이고 평균값 부등식을 보존하므로 $H_f$ 가 세분함수다. 공마다 Poisson 적분으로 조화함수를 세워 비교하면 부등식이 등식이 되고, 평균값 성질을 만족하는 함수가 조화함수다. ∎

## 정칙 경계점과 Wiener 기준

경계점 $\xi$ 에서 모든 연속 경계값 $f$ 에 대해 $H_f(x)\to f(\xi)$ 이면 $\xi$ 를 **정칙 경계점**이라 한다.

**정리.** $d\ge3$ 에서 $A_n=\lbrace y\notin\Omega\ \vert\ 2^{-n-1}\le\vert y-\xi\vert\le2^{-n}\rbrace$ 라 할 때, $\xi$ 가 정칙인 것과

$$
\sum_{n\ge1}2^{n(d-2)}\thinspace\mathrm{cap}(A_n)=\infty
$$

인 것이 동치다.[^2]

영역 밖의 부분이 $\xi$ 근처에서 충분한 용량을 갖는지가 조건이다. 모든 경계점이 정칙이면 연속 경계값에 대한 Dirichlet 문제가 풀린다.

## 용량 0 집합

**정리.** $K$ 가 콤팩트이고 $\mathrm{cap}(K)=0$ 이면 $\Omega\setminus K$ 에서 유계인 조화함수가 $\Omega$ 로 조화적으로 연장된다.

$K$ 위에 에너지가 유한한 측도가 없으므로 $K$ 를 덮는 작은 집합에서 퍼텐셜의 차이를 $0$ 으로 누를 수 있고, 최대값 원리를 두 번 쓰면 연장이 유일하게 정해진다. ∎

용량 $0$ 인 집합은 경계값을 받아내지 못하므로 Dirichlet 문제의 경계 조건에서 무시된다. 한 점이 $d\ge2$ 에서 용량 $0$ 이고, 이것이 직관 절의 계산이 말한 내용이다.

## Brownian 운동과의 대응

**정리.** $d\ge3$ 에서 콤팩트 집합 $K$ 의 용량이 $0$ 인 것과 [Brownian 운동](brownian-motion.md)이 $K$ 에 닿을 확률이 모든 출발점에서 $0$ 인 것은 동치다.[^3]

도달 확률 $x\mapsto P_x(\tau_K\lt\infty)$ 가 $K$ 밖에서 조화함수이고 $K$ 에서 $1$ 이므로 균형 측도의 퍼텐셜을 정규화한 것과 같다. 에너지가 유한한 측도가 있는 것과 이 함수가 $0$ 이 아닌 것이 대응한다.

# 활용

- **일반 영역의 Dirichlet 문제.** 경계의 매끄러움을 가정하지 않고 Perron 해를 만들고, Wiener 기준으로 경계값이 받아들여지는 점을 가린다. 정칙이 아닌 경계점의 집합은 용량 $0$ 이다.
- **제거가능 특이점의 판정.** 조화함수나 유계 [정칙함수](holomorphic-functions.md)가 어떤 집합을 넘어 연장되는지가 그 집합의 용량으로 결정된다.
- **초월수론의 높이 추정.** 복소평면의 콤팩트 집합 위에서 수렴하는 멱급수의 계수 추정에 로그 용량과 균형 측도가 들어가고, 용량이 Chebyshev 상수와 같다는 등식이 쓰인다.
- **Brownian 운동의 도달 문제.** 집합에 닿을 확률과 평균 도달 시간을 용량과 균형 측도로 계산한다. 열방정식과 확률 과정을 잇는 계산이 이 대응을 통과한다.

[^1]: O. Perron, "Eine neue Behandlung der ersten Randwertaufgabe für $\Delta u=0$", *Math. Z.* **18** (1923), 42–54.
[^2]: N. Wiener, "The Dirichlet problem", *J. Math. Phys.* **3** (1924), 127–146. 현대적 서술은 L. L. Helms, *Potential Theory*, 2nd ed. (2014) 의 7장과 8장.
[^3]: S. Kakutani, "Two-dimensional Brownian motion and harmonic functions", *Proc. Imp. Acad. Tokyo* **20** (1944), 706–714.

# 연관 문서

## 선수지식

- [Dirichlet 문제](dirichlet-problem.md)
- [Green 함수](greens-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #complex_analysis #probability
