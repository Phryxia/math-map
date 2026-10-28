# 후처리 오차 추정자

# 개요

**후처리 오차 추정자(a posteriori error estimator)** 는 계산을 마친 근사해와 주어진 자료만으로 오차의 크기를 재는 양이다. 구간 $(0,1)$ 에서 $-u''=f$ 를 [유한요소법](finite-element-method.md)으로 풀어 근사해를 얻어도, 참해를 모르므로 오차가 $10^{-2}$ 인지 $10^{-5}$ 인지는 바로 알 수 없다. 후처리 오차 추정자는 근사해를 방정식에 넣었을 때 남는 양을 요소마다 재어 오차의 수치를 주고, 그 값이 큰 요소만 잘게 나눠 다시 푼다.

# 직관

후처리 오차 추정자는 계산을 마친 근사해와 주어진 자료만으로 오차의 크기를 재는 양이다. 유한요소법의 Céa 보조정리는 오차의 상한을 참해의 노름으로 적으므로 수렴 차수는 주지만 수치를 주지 못하고, 후처리 오차 추정자는 참해를 쓰지 않으므로 수치를 준다.

추정자는 요소마다 하나씩 나오므로 오차가 큰 요소를 가려낸다. 그 요소만 잘게 나누고 다시 푸는 절차가 적응 격자 세분이고, 자료가 매끄럽지 않은 문제에서 균일한 격자보다 적은 미지수로 같은 오차에 닿는다.

$(0,1)$ 에서 $-u''=f$ 와 $u(0)=u(1)=0$ 을 조각일차 요소로 풀어 $u_h$ 를 얻었다. 오차가 얼마인지 알려면 $\Vert u-u_h\Vert\_{H^1}\le Ch\Vert u\Vert\_{H^2}$ 를 쓸 수 있지만, 오른쪽의 $\Vert u\Vert\_{H^2}$ 는 구하려던 $u$ 의 양이라 계산할 수 없다. 격자를 절반으로 줄이면 오차가 절반이 된다는 것만 나오고 지금 오차가 $10^{-2}$ 인지 $10^{-5}$ 인지는 나오지 않는다.

손에 있는 것은 $u_h$ 와 $f$ 다. $u_h$ 를 원래 방정식에 넣어 남는 양을 본다. 조각 안에서 $u_h$ 는 일차이므로 $u_h''=0$ 이고 남는 양은 $f$ 다. 자른 점에서는 $u_h'$ 의 값이 뛴다. 둘 다 $u_h$ 와 $f$ 로 계산된다.

이 두 양이 오차를 얼마나 묶는지 본다. $e=u-u_h$ 라 하고 $v\in H_0^1(0,1)$ 를 잡으면 약한 꼴에서

$$
\int\_0^1 e'v'\thinspace dx=\int\_0^1 fv\thinspace dx-\int\_0^1 u_h'v'\thinspace dx
$$

이다. 오른쪽 둘째 항을 조각마다 부분적분하면 $u_h''=0$ 이어서 적분이 남지 않고 경계값만 남는다. $v(0)=v(1)=0$ 이므로 양 끝은 사라지고 자른 점에서 $u_h'$ 의 도약만 남는다. $\lbrack u_h'\rbrack\_i=u_h'(x_i^+)-u_h'(x_i^-)$ 라 쓰면

$$
\int\_0^1 e'v'\thinspace dx=\int\_0^1 fv\thinspace dx+\sum\_{i=1}^{N-1}\lbrack u_h'\rbrack\_i\thinspace v(x_i)
$$

가 된다. 오른쪽이 $v$ 에 대한 선형범함수이고 계수가 전부 계산 가능한 양이다.

왼쪽에 $v=e$ 를 넣으면 왼쪽이 $\Vert e'\Vert\_{L^2}^2$ 이므로, 오른쪽 범함수의 크기를 재면 오차의 크기가 나온다. 조각마다 $f$ 의 크기와 자른 점마다 도약의 크기를 격자 간격으로 저울질해 더한 값이 그 크기의 추정값이다.

# 정의

## 잔차 범함수

$V=H_0^1(\Omega)$ , $a$ 를 유계 강제 쌍선형형식, $u\in V$ 를 $a(u,v)=\ell(v)$ 의 해, $u_h\in V_h$ 를 이산해라 한다. **잔차 범함수(residual functional)** 는

$$
R(v)=\ell(v)-a(u_h,v)\quad(v\in V)
$$

다. $e=u-u_h$ 가 $a(e,v)=R(v)$ 를 만족하므로 $a$ 의 유계성과 강제성에서 $\Vert e\Vert_V$ 와 $\Vert R\Vert\_{V'}$ 가 서로 상수배로 묶인다. Galerkin 직교성이 모든 $v_h\in V_h$ 에서 $R(v_h)=0$ 을 준다.

## 잔차형 추정자

$-\mathrm{div}(A\nabla u)=f$ 와 삼각분할 $\mathcal T_h$ 에서 요소 $T$ 의 **국소 추정자(local estimator)** 를

$$
\eta_T^2=h_T^2\Vert f+\mathrm{div}(A\nabla u_h)\Vert\_{L^2(T)}^2+h_T\sum\_{E\subset\partial T}\Vert\lbrack A\nabla u_h\cdot n\rbrack\_E\Vert\_{L^2(E)}^2
$$

로 둔다. 첫 항은 요소 안에서 방정식이 남기는 양이고 둘째 항은 면 $E$ 에서 법선 유속이 뛰는 양이다. **전역 추정자(global estimator)** 는 $\eta^2=\sum\_{T\in\mathcal T_h}\eta_T^2$ 다.

## 신뢰성과 효율성

추정자가 **신뢰성(reliability)** 을 가진다는 것은 $h$ 와 무관한 $C\_{\mathrm{rel}}$ 에서 $\Vert e\Vert_V\le C\_{\mathrm{rel}}\thinspace\eta$ 가 성립하는 것이다. **효율성(efficiency)** 은 $\eta\le C\_{\mathrm{eff}}\Vert e\Vert_V$ 가 성립하는 것이다. 두 부등식이 함께 성립하면 $\eta$ 와 오차가 같은 크기이고, 격자를 고를 때 $\eta$ 를 오차 대신 쓴다.

# 성질

## 신뢰성

**정리.** 위 추정자는 $\Vert e\Vert\_{H^1}\le C\_{\mathrm{rel}}\thinspace\eta$ 를 만족하고 $C\_{\mathrm{rel}}$ 은 형상 정칙 상수와 $A$ 의 상하계로만 정해진다.[^1]

증명의 요지. 강제성에서 $\alpha\Vert e\Vert\_{H^1}^2\le a(e,e)=R(e)$ 다. Galerkin 직교성으로 $R(e)=R(e-I_he)$ 이고 $I_h$ 는 절점값을 평균으로 정하는 보간이다. $R$ 을 요소마다 부분적분해 요소 잔차와 면 도약으로 적고, 각 항에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓴 뒤 보간 추정 $\Vert e-I_he\Vert\_{L^2(T)}\le Ch_T\Vert e\Vert\_{H^1(\omega_T)}$ 과 그 면 판본 $\Vert e-I_he\Vert\_{L^2(E)}\le Ch_E^{1/2}\Vert e\Vert\_{H^1(\omega_E)}$ 을 넣는다. $\omega_T$ 와 $\omega_E$ 는 겹치는 요소가 형상 정칙 조건에서 유한 개이므로 합이 $\eta\Vert e\Vert\_{H^1}$ 로 묶이고, 양변을 $\Vert e\Vert\_{H^1}$ 로 나눈다. $\square$

## 효율성

$\eta_T$ 는 국소 오차와 자료의 진동으로 위에서 묶인다.[^1]

$$
\eta_T\le C\bigl(\Vert e\Vert\_{H^1(\omega_T)}+h_T\Vert f-\bar f\Vert\_{L^2(\omega_T)}\bigr)
$$

$\bar f$ 는 $f$ 의 요소별 평균이다. 증명은 요소 안에서만 $0$ 이 아닌 거품함수를 $v$ 자리에 넣어 $R(v)$ 를 아래에서 재는 것이고, 거품함수의 노름비가 $h_T$ 의 거듭제곱으로 정해진다. 자료 진동 항은 $f$ 가 매끄러우면 추정자보다 높은 차수다.

## 적응 격자 세분

추정자를 쓰는 순환은 네 단계다. 이산해를 구하고, 요소마다 $\eta_T$ 를 계산하고, 세분할 요소를 표시하고, 표시된 요소를 나눈다. **Dörfler 표시(Dörfler marking)** 는 고정한 $\theta\in(0,1)$ 에서

$$
\sum\_{T\in\mathcal M}\eta_T^2\ge\theta\sum\_{T\in\mathcal T_h}\eta_T^2
$$

를 만족하는 가장 작은 부분집합 $\mathcal M$ 을 고른다. 전체 추정자의 고정 비율을 한 번에 줄이므로 순환마다 오차가 상수배로 줄고, 세분 규칙이 형상 정칙성을 보존하면 미지수 개수에 대해 최적 차수의 수렴이 성립한다.[^2]

# 활용

- **격자 적응의 기준.** [다중격자](multigrid.md) 계열에서 격자 두 단계의 해를 견주어 얻는 값도 같은 자리에 쓰인다. [완전 다중격자](full-multigrid.md)와 [완전 근사 저장](full-approximation-scheme.md)이 그 방식을 쓰고, 잔차형 추정자는 한 격자의 해만으로 같은 판정을 한다.
- **계산의 정지 조건.** 전역 추정자가 주어진 허용값 아래로 내려가면 계산을 멈춘다. 신뢰성 부등식이 그 판정을 오차의 상한으로 바꾼다.
- **목적 지향 추정.** 오차 전체가 아니라 하나의 선형 범함수 $J(u)$ 만 필요한 경우에는 쌍대 문제 $a(w,v)=J(v)$ 의 해로 잔차에 가중을 준다. 가중 계수가 요소마다 다르므로 $J$ 에 영향이 큰 요소만 세분된다.
- **혼합 꼴의 추정자.** [혼합 유한요소법](mixed-finite-element-method.md)에서는 유속이 미지수이므로 법선 유속의 도약이 $0$ 이고, 추정자의 두 항이 요소 잔차와 $\sigma_h+A\nabla u_h$ 의 크기로 바뀐다.

[^1]: Rüdiger Verfürth, *A Posteriori Error Estimation Techniques for Finite Element Methods*, Oxford University Press (2013), 1.2 절과 1.4 절. 신뢰성의 보간 추정과 효율성의 거품함수 논법이 각각 그 두 절의 내용이다.

[^2]: Willy Dörfler, *A convergent adaptive algorithm for Poisson's equation*, SIAM Journal on Numerical Analysis **33** (1996), 1106–1124 이 표시 규칙의 원 논문이다. 미지수 개수에 대한 최적 차수는 J. Manuel Cascón, Christian Kreuzer, Ricardo H. Nochetto, Kunibert G. Siebert, *Quasi-optimal convergence rate for an adaptive finite element method*, SIAM Journal on Numerical Analysis **46** (2008), 2524–2550.

# 연관 문서

## 선수지식

- [유한요소법](finite-element-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #functional_analysis #algorithms
