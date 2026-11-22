# div–curl 보조정리

# 개요

**div–curl 보조정리(div–curl lemma)** 는 약하게 수렴하는 두 벡터장의 내적이, 한쪽은 발산이 작고 다른 쪽은 회전이 작으면, 극한의 내적으로 수렴한다는 정리다. $\sin(kx)$ 는 $k\to\infty$ 에서 어느 구간에서 적분해도 $0$ 으로 가지만, 그 제곱 $\sin^2(kx)$ 의 적분은 구간 길이의 절반으로 간다. 진동하는 함수의 곱은 극한을 곱한 것과 다르다.

벡터장 $(\sin(kx_1),0)$ 끼리의 내적은 이렇게 $1/2$ 로 간다. 한쪽을 발산이 $0$ 인 $(0,\sin(kx_1))$ 로 바꾸면 두 벡터장이 진동하는 방향이 서로 수직이 되어 내적이 $0$ 이다. div–curl 보조정리는 발산과 회전의 조건이 진동 방향을 이렇게 갈라 곱의 극한을 지킨다는 것을 보인다.

# 직관

$\mathbb R^2$ 위의 두 벡터장 $B_k=(\sin(kx_1),0)$ 과 $E_k=(\sin(kx_1),0)$ 을 본다. 둘 다 $L^2\_{\mathrm{loc}}$ 에서 $0$ 으로 약하게 수렴한다. 어느 유계 영역에서 어느 $L^2$ 함수를 곱해 적분해도 그 값이 $0$ 으로 간다는 뜻이다. 내적 $E_k\cdot B_k=\sin^2(kx_1)$ 은 $1/2$ 로 약수렴하므로 극한 $0\cdot 0$ 과 다르다.

$B_k$ 는 $\nabla(-\cos(kx_1)/k)$ 이므로 회전이 $0$ 이다. $E_k$ 의 발산은 $k\cos(kx_1)$ 이어서 $k$ 와 함께 커진다. $E_k$ 를 발산이 $0$ 인 $\tilde E_k=(0,\sin(kx_1))$ 로 바꾸면 $\tilde E_k$ 도 $0$ 으로 약수렴하고 내적 $\tilde E_k\cdot B_k$ 는 모든 점에서 $0$ 이다.

$x_1$ 방향으로만 변하는 장에서, $B_k$ 처럼 회전이 $0$ 인 장은 기울기여서 진동하는 방향, 곧 $x_1$ 방향을 향한다. 발산이 $0$ 인 장은 $\partial_1E_1=0$ 이므로 $x_1$ 성분이 진동할 수 없다. 두 장이 같은 방향으로 함께 진동하지 못하므로, 진동끼리 곱해져 남는 항이 생기지 않는다.

# 정의

## 발산과 회전

$\Omega\subset\mathbb R^n$ 이 열린집합이고 $E=(E_1,\dots,E_n)$ 이 $L^2(\Omega;\mathbb R^n)$ 의 벡터장이라 하자. **발산(divergence)** $\mathrm{div}\thinspace E=\sum_i\partial_iE_i$ 와 **회전(curl)** $\mathrm{curl}\thinspace E=(\partial_iE_j-\partial_jE_i)\_{i\lt j}$ 은 [Schwartz 분포](schwartz-distributions.md)의 뜻으로 정한다. 둘 다 $H^{-1}\_{\mathrm{loc}}(\Omega)$ 에 든다. $H^{-1}\_{\mathrm{loc}}$ 은 [Sobolev 공간](sobolev-spaces.md) $H^1_0$ 의 쌍대를 국소화한 공간이다.

직관 절의 $B_k$ 는 $\mathrm{curl}\thinspace B_k=0$, $\tilde E_k$ 는 $\mathrm{div}\thinspace\tilde E_k=0$ 이다.

## div–curl 보조정리

정리(Murat–Tartar). $L^2(\Omega;\mathbb R^n)$ 에서 $E_k\rightharpoonup E$, $B_k\rightharpoonup B$ 가 약수렴하고, $\mathrm{div}\thinspace E_k$ 와 $\mathrm{curl}\thinspace B_k$ 가 $H^{-1}\_{\mathrm{loc}}(\Omega)$ 의 콤팩트 집합에 들면, $E_k\cdot B_k$ 는 분포의 뜻으로 $E\cdot B$ 로 수렴한다[^1][^2].

$\mathrm{div}\thinspace E_k=0$ 이고 $\mathrm{curl}\thinspace B_k=0$ 이면 가정이 성립한다. 직관 절의 $E_k$ 는 가정을 어긴다. $\mathrm{div}\thinspace E_k=k\cos(kx_1)$ 은 $0$ 으로 약하게 수렴하지만 $H^{-1}$ 노름이 $0$ 으로 가지 않으므로 콤팩트 집합에 들지 않는다.

# 성질

## Murat–Tartar 정리의 증명

$\mathrm{div}\thinspace E_k=0$, $\mathrm{curl}\thinspace B_k=0$ 인 경우를 공 $U\subset\Omega$ 안에서 본다. 회전이 $0$ 이므로 $B_k=\nabla\varphi_k$ 이고, 상수를 맞추면 $\varphi_k$ 는 $H^1(U)$ 에서 유계다.

Rellich–Kondrachov 콤팩트성으로 부분열의 $\varphi_k$ 가 $L^2(U)$ 에서 $\varphi$ 로 강하게 수렴하고 $\nabla\varphi=B$ 다. 발산이 $0$ 이므로 $E_k\cdot\nabla\varphi_k=\mathrm{div}(\varphi_kE_k)$ 이다.

$\varphi_kE_k$ 는 강수렴하는 열과 약수렴하는 열의 곱이므로 $L^1$ 에서 $\varphi E$ 로 약수렴한다. 분포의 미분은 약수렴을 보존하므로 다음이 성립한다.

$$
E_k\cdot B_k=\mathrm{div}(\varphi_kE_k)\to\mathrm{div}(\varphi E)=E\cdot B
$$

모든 부분열이 같은 극한을 가지므로 열 전체가 수렴한다.

## Jacobi 행렬식의 약연속성

$n\ge 2$ 이고 $u_k\rightharpoonup u$ 가 $W^{1,n}(\Omega;\mathbb R^n)$ 에서 약수렴하면 $\det\nabla u_k$ 는 분포의 뜻으로 $\det\nabla u$ 로 수렴한다[^3].

$n=2$ 이면 $\det\nabla u=\partial_1u^1\partial_2u^2-\partial_2u^1\partial_1u^2$ 이다. 이것은 기울기 $\nabla u^1$ 과 발산이 $0$ 인 장 $(\partial_2u^2,-\partial_1u^2)$ 의 내적이므로 div–curl 보조정리의 경우다. 일반 $n$ 에서는 여인수 행렬의 각 행이 발산이 $0$ 인 장이라는 것을 쓴다.

$\nabla u_k$ 의 성분 하나하나는 약수렴만 하므로, 성분의 곱으로 된 행렬식이 수렴하는 것은 이 구조 때문이다.

## 실 Hardy 공간과의 관계

정리(Coifman–Lions–Meyer–Semmes). $1\lt p\lt\infty$ 이고 $E\in L^p(\mathbb R^n;\mathbb R^n)$, $B\in L^{p'}(\mathbb R^n;\mathbb R^n)$ 이 $\mathrm{div}\thinspace E=0$, $\mathrm{curl}\thinspace B=0$ 을 만족하면 $E\cdot B$ 는 [실 Hardy 공간](real-hardy-spaces.md) $H^1(\mathbb R^n)$ 에 든다[^4].

[Hölder 부등식](holder-inequality.md)은 $E\cdot B\in L^1$ 만 준다. 발산과 회전의 조건이 붙으면 곱이 평균이 $0$ 인 조각들로 분해되어 $L^1$ 보다 작은 공간에 든다.

# 활용

- 비선형 탄성학. Ball 은 저장 에너지가 $\nabla u$ 와 여인수 행렬과 $\det\nabla u$ 의 볼록함수인 다볼록(polyconvex) 에너지에서, 행렬식의 약연속성으로 에너지의 약 아래 반연속성을 보이고 변분법의 직접법으로 평형 상태의 존재를 증명했다[^3]. [변분법의 직접법](direct-method.md)의 가정을 이 구조가 채운다.
- 쌍곡 보존 법칙. Tartar 와 DiPerna 는 [Burgers 방정식](burgers-equation.md) 같은 스칼라 보존 법칙의 점성 근사해에 div–curl 보조정리를 써서, 엔트로피 쌍으로 만든 벡터장의 곱이 극한에서 유지됨을 보였다. 이것으로 근사해가 강하게 수렴하는 부분열을 갖는다[^2][^5].
- [균질화](homogenization.md). 빠르게 진동하는 계수 $a(x/\varepsilon)$ 를 가진 타원형 방정식의 해에서 플럭스 $a\nabla u\_\varepsilon$ 은 발산이 고정되고 $\nabla u\_\varepsilon$ 은 회전이 $0$ 이다. 에너지 $a\nabla u\_\varepsilon\cdot\nabla u\_\varepsilon$ 의 극한을 이 보조정리로 구해 유효 계수를 정한다.
- 조화사상의 정칙성. 2 차원 조화사상 방정식의 비선형 항이 div–curl 꼴이어서 $H^1$ 에 들고, [유계 평균 진동 공간](bounded-mean-oscillation.md)(bounded mean oscillation, BMO)과의 쌍대성으로 해의 연속성이 나온다. Hélein 의 정칙성 정리의 증명이 이 구조를 쓴다.

[^1]: F. Murat, "Compacité par compensation", Annali della Scuola Normale Superiore di Pisa, Classe di Scienze **5** (1978), 489–507.

[^2]: L. Tartar, "Compensated compactness and applications to partial differential equations", in *Nonlinear Analysis and Mechanics: Heriot–Watt Symposium IV*, Research Notes in Mathematics **39**, Pitman (1979), 136–212.

[^3]: J. M. Ball, "Convexity conditions and existence theorems in nonlinear elasticity", Archive for Rational Mechanics and Analysis **63** (1977), 337–403.

[^4]: R. Coifman, P.-L. Lions, Y. Meyer, S. Semmes, "Compensated compactness and Hardy spaces", Journal de Mathématiques Pures et Appliquées **72** (1993), 247–286.

[^5]: R. J. DiPerna, "Convergence of approximate solutions to conservation laws", Archive for Rational Mechanics and Analysis **82** (1983), 27–70.

# 연관 문서

## 선수지식

- [Schwartz 분포](schwartz-distributions.md)
- [Banach–Alaoglu 정리](banach-alaoglu.md)

## 더 알아보기

- [균질화](homogenization.md)

#functional_analysis #analysis
