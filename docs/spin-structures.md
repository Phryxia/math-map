# 스핀 구조

# 개요

스핀 구조는 방향 지어진 [Riemann 다양체](riemannian-metrics.md)의 정규직교 틀다발을 회전군의 이중덮개로 들어 올린 [주다발](principal-bundles.md)이다. 들어 올림이 있는 것은 둘째 Stiefel–Whitney 류가 $0$ 인 것과 같다.

들어 올림이 있으면 회전군의 표현으로는 만들 수 없는 스피너 다발이 생기고, 그 위에서 Dirac 작용소를 세울 수 있다.

# 직관

방향 지어진 다양체의 정규직교 틀다발은 전이함수 $g_{\alpha\beta}\colon U_\alpha\cap U_\beta\to\mathrm{SO}(n)$ 로 결정된다. $\mathrm{Spin}(n)\to\mathrm{SO}(n)$ 이 이중덮개이므로 각 $g_{\alpha\beta}$ 를 $\tilde g_{\alpha\beta}$ 로 들어 올릴 수 있고, 들어 올림은 겹침마다 부호 두 가지다. 올린 것들이 다시 다발의 전이함수가 되려면 삼중 겹침에서 $\tilde g_{\alpha\beta}\tilde g_{\beta\gamma}\tilde g_{\gamma\alpha}=1$ 이어야 한다.

이 곱은 원래 전이함수의 조건에서 $\mathrm{SO}(n)$ 의 항등으로 내려가므로 $\pm 1$ 뿐이다. 겹침마다 부호를 바꿔 모든 삼중 겹침에서 $+1$ 로 맞출 수 있는지가 문제이고, 맞출 수 없는 장애가 $\mathbb Z/2$ 계수 코호몰로지의 한 류로 남는다. 그 류가 둘째 Stiefel–Whitney 류다.

# 정의

## Spin 군

$n\ge 3$ 에서 $\pi_1(\mathrm{SO}(n))=\mathbb Z/2$ 이므로 $\mathrm{SO}(n)$ 의 보편[덮개공간](covering-spaces.md)은 이중덮개다. 이 덮개군을 $\mathrm{Spin}(n)$ 이라 하고, 다음 짧은 완전열을 갖는다.[^1]

$$
1\to\mathbb Z/2\to\mathrm{Spin}(n)\to\mathrm{SO}(n)\to 1
$$

낮은 차원에서는 $\mathrm{Spin}(3)=\mathrm{SU}(2)$ 이고 $\mathrm{Spin}(4)=\mathrm{SU}(2)\times\mathrm{SU}(2)$ 다.

## 스핀 구조

방향 지어지고 계량을 가진 계수 $n$ 실[벡터다발](vector-bundles.md) $E\to M$ 의 정규직교 틀다발을 $P\_{\mathrm{SO}}$ 라 한다. $E$ 의 **스핀 구조**는 주 $\mathrm{Spin}(n)$ 다발 $P\_{\mathrm{Spin}}$ 과 사상 $\Phi\colon P\_{\mathrm{Spin}}\to P\_{\mathrm{SO}}$ 로 다음을 만족하는 것이다.

- $\Phi$ 가 밑공간 위의 항등을 덮는다.
- $\Phi(u\thinspace\tilde g)=\Phi(u)\thinspace\rho(\tilde g)$ 다. 여기서 $\rho\colon\mathrm{Spin}(n)\to\mathrm{SO}(n)$ 은 덮개 사상이다.

다양체 $M$ 의 스핀 구조는 접다발의 스핀 구조이고, 그런 구조를 하나 고른 다양체를 **스핀 다양체**라 한다.

## 스피너 다발

$\mathrm{Spin}(n)$ 의 복소 표현 $\Delta$ 가운데 $\mathbb Z/2$ 가 항등으로 작용하지 않는 것을 **스피너 표현**이라 한다. 결합다발

$$
S=P\_{\mathrm{Spin}}\times\_\Delta\Delta
$$

를 **스피너 다발**이라 한다. $\mathbb Z/2$ 가 비자명하게 작용하므로 $S$ 는 $P\_{\mathrm{SO}}$ 의 결합다발로는 얻어지지 않는다.

# 성질

## 존재 판정

**정리.** $E$ 가 스핀 구조를 갖는 것은 $w_1(E)=0$ 이고 $w_2(E)=0$ 인 것과 같다. 여기서 $w_i$ 는 [Stiefel–Whitney 류](stiefel-whitney-classes.md)다.

증명의 요지. $w_1=0$ 은 방향 가능성, 곧 구조군이 $\mathrm{SO}(n)$ 으로 축소되는 조건이다. 축소된 다음, 직관 절의 부호 $\varepsilon_{\alpha\beta\gamma}=\tilde g_{\alpha\beta}\tilde g_{\beta\gamma}\tilde g_{\gamma\alpha}\in\lbrace\pm 1\rbrace$ 는 Čech 2 공사슬이고 코사이클 조건을 만족한다. 들어 올림의 부호를 $\eta_{\alpha\beta}$ 로 바꾸면 $\varepsilon$ 이 $\eta$ 의 Čech 경계만큼 달라지므로 그 코호몰로지류가 들어 올림의 선택에 의존하지 않고, 이 류가 $w_2(E)$ 다. 류가 $0$ 이면 부호를 다시 골라 모든 삼중 겹침에서 $+1$ 로 맞출 수 있다. ∎

## 스핀 구조의 개수

**정리.** $w_1(E)=w_2(E)=0$ 이면 스핀 구조의 동형류 전체에 $H^1(M;\mathbb Z/2)$ 가 자유롭고 추이적으로 작용한다.

증명의 요지. 스핀 구조 둘의 들어 올림을 비교하면 겹침마다 부호 $\eta_{\alpha\beta}$ 가 나오고, 두 쪽 모두 코사이클 조건을 만족하므로 $\eta$ 는 Čech 1 코사이클이다. 경계만큼 다른 두 코사이클이 동형인 구조를 주므로 작용이 자유롭고, 임의의 1 코사이클을 한 구조의 들어 올림에 곱하면 다른 구조가 나오므로 추이적이다. ∎

따라서 $H^1(M;\mathbb Z/2)=0$ 인 다양체의 스핀 구조는 있으면 하나다. 원 $S^1$ 은 $H^1(S^1;\mathbb Z/2)=\mathbb Z/2$ 이므로 스핀 구조가 둘이다.

## 예

- 모든 구면 $S^n$ 은 스핀이다. 접다발이 자명한 다발의 안정 합이므로 Stiefel–Whitney 류가 모두 소멸한다.
- 방향 가능한 3 차원 콤팩트 다양체는 모두 스핀이다. $w_1=0$ 이고 Wu 공식이 $w_2=w_1^2=0$ 을 준다.
- 복소 다양체에서 $w_2$ 는 첫 Chern 류의 $\mathbb Z/2$ 환원이다. 사영평면 $\mathbb{CP}^2$ 는 $c_1$ 이 생성원의 $3$ 배이므로 $w_2\ne 0$ 이고 스핀이 아니다.

## 스피너 다발의 접속

Levi-Civita [접속](connection.md)은 덮개를 통해 $P\_{\mathrm{Spin}}$ 으로 올라가고 스피너 다발 $S$ 위의 접속을 준다. 이 공변미분에 [Clifford 대수](clifford-algebras.md)의 곱을 합성한 1 계 작용소가 [Dirac 작용소](dirac-operator.md)이고, 그 제곱이 접속 Laplace 작용소에 스칼라 곡률의 $1/4$ 을 더한 것이다.

스칼라 곡률이 양이면 이 등식의 우변이 양의 정부호이므로 Dirac 작용소의 핵이 $0$ 이다.

# 활용

- [지표 정리](index-theorem.md)의 가장 쓰임이 많은 경우가 Dirac 작용소다. $4k$ 차원 콤팩트 스핀 다양체에서 지표가 $\hat A$ 류의 적분이고, 그 값이 정수라는 것이 Pontryagin 수에 제약을 준다.
- 4 차원 콤팩트 스핀 다양체의 부호수가 $16$ 으로 나뉜다(Rokhlin). 이 제약으로 어떤 교차형식이 매끄러운 4 차원 다양체에서 나오지 않는다.
- [분류공간](classifying-spaces.md)으로 적으면 스핀 구조는 $M\to B\mathrm{SO}(n)$ 을 $M\to B\mathrm{Spin}(n)$ 으로 들어 올리는 것이고, 장애가 $B\mathrm{SO}(n)$ 의 $H^2(\cdot;\mathbb Z/2)$ 의 생성원이다.
- 물리에서 페르미온의 장이 스피너 다발의 단면이다. 다양체가 스핀이 아니면 그 장을 전역으로 둘 수 없다.

[^1]: H. Blaine Lawson and Marie-Louise Michelsohn, *Spin Geometry*, Princeton University Press (1989), Ch. I–II. Spin 군의 구성, 스핀 구조의 존재와 개수, 스피너 다발과 Dirac 작용소가 이 두 장에 있다.

# 연관 문서

## 선수지식

- [특성류](characteristic-classes.md)
- [주다발](principal-bundles.md)

## 더 알아보기

- [Dirac 작용소](dirac-operator.md)
- [Seiberg–Witten 이론](seiberg-witten-theory.md)

#differential_geometry #algebraic_topology #topology #group_theory
