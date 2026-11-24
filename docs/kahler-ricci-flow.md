# Kähler–Ricci 흐름

# 개요

**Kähler–Ricci 흐름(Kähler–Ricci flow)** 은 Kähler 계량을 그 Ricci 형식만큼 시간에 따라 깎아 나가는 방정식이다. 종수 $2$ 곡면에 울퉁불퉁한 계량을 주면 곡률이 자리마다 다르다. 이 계량을 연속적으로 바꿔 곡률이 어디서나 같은 계량에 닿을 수 있는지 묻는다.

Kähler–Ricci 흐름은 이 변형을 Kähler 퍼텐셜 하나에 대한 [열방정식](heat-equation.md) 꼴의 방정식으로 적는다. 그 해가 모든 시간에 존재하고 수렴하면 극한이 [Kähler–Einstein 계량](kahler-einstein-metrics.md)이다.

# 직관

[Ricci 흐름](ricci-flow.md)은 계량을 $\partial g/\partial t=-2\mathrm{Ric}(g)$ 로 바꾸고, 반지름 $r_0$ 인 둥근 구를 반지름만 줄여 한 점으로 모은다. 복소 사영공간 $\mathbb{CP}^n$ 의 Fubini–Study 계량 $\omega\_{\mathrm{FS}}$ 에서도 같은 일이 생긴다. $\mathrm{Ric}(\omega\_{\mathrm{FS}})=(n+1)\omega\_{\mathrm{FS}}$ 이고 계량을 상수배 해도 Ricci 형식은 그대로이므로, $\omega(t)=(1-(n+1)t)\omega\_{\mathrm{FS}}$ 가 $\partial\omega/\partial t=-\mathrm{Ric}(\omega)$ 를 만족한다. 계량은 Kähler 계량으로 남고 $t=1/(n+1)$ 에서 $0$ 이 된다.

이 예에서 줄어든 것은 계량의 코호몰로지류다. Ricci 형식의 류는 계량과 상관없이 $2\pi c_1(M)$ 이므로, 어느 Kähler 계량에서 출발해도 류는 다음 직선을 따라 움직인다.

$$
\lbrack\omega(t)\rbrack=\lbrack\omega_0\rbrack-2\pi t\thinspace c_1(M)
$$

$c_1(M)\lt 0$ 이면 류가 커지고, $c_1(M)=0$ 이면 그대로이고, $c_1(M)\gt 0$ 이면 줄어든다. 시각마다 류가 정해져 있으니 [Calabi 추측](calabi-conjecture.md)에서처럼 계량을 기준 형식과 함수 하나의 $i\partial\bar\partial$ 로 적을 수 있고, 흐름은 그 함수 하나에 대한 방정식이 된다.

# 정의

## 흐름

[Kähler 다양체](kahler-manifolds.md) $M$ 위의 Kähler 형식의 족 $\omega(t)$ 가 다음을 만족하면 $\omega(t)$ 를 $\omega_0$ 에서 출발한 Kähler–Ricci 흐름이라 한다.

$$
\frac{\partial\omega}{\partial t}=-\mathrm{Ric}(\omega),\qquad\omega(0)=\omega_0
$$

Ricci 형식 $\mathrm{Ric}(\omega)$ 는 Ricci 텐서에 복소구조를 끼운 형식이므로, 대응하는 계량은 $\partial g/\partial t=-\mathrm{Ric}(g)$ 를 만족한다. [Riemann 계량](riemannian-metrics.md)의 Ricci 흐름 $h(s)$ 에서 $g(t)=h(t/2)$ 로 시간만 바꾼 것이다. 직관 절의 $\omega(t)=(1-(n+1)t)\omega\_{\mathrm{FS}}$ 가 이 정의의 예다.

## 정규화한 흐름

$\lambda\in\lbrace -1,0,1\rbrace$ 에 대해 다음 방정식을 **정규화한 Kähler–Ricci 흐름(normalized Kähler–Ricci flow)** 이라 한다.

$$
\frac{\partial\omega}{\partial t}=-\mathrm{Ric}(\omega)+\lambda\omega
$$

우변이 $0$ 인 계량은 $\mathrm{Ric}(\omega)=\lambda\omega$ 인 Kähler–Einstein 계량이다. 류는 $d\lbrack\omega\rbrack/dt=-2\pi c_1(M)+\lambda\lbrack\omega\rbrack$ 를 따르므로, $\lambda=\pm 1$ 이고 $\lambda\lbrack\omega_0\rbrack=2\pi c_1(M)$ 이면 류가 움직이지 않는다. $\mathbb{CP}^n$ 에서 $\omega_0=(n+1)\omega\_{\mathrm{FS}}$ 는 $\lambda=1$ 인 흐름에서 정지해 있다.

## 퍼텐셜 방정식

기준 형식 $\hat\omega_t=\omega_0-t\thinspace\mathrm{Ric}(\omega_0)$ 는 류 $\lbrack\omega_0\rbrack-2\pi t\thinspace c_1(M)$ 에 속한다. $\omega(t)=\hat\omega_t+i\partial\bar\partial\phi$ 로 쓰면 좌변은 $-\mathrm{Ric}(\omega_0)+i\partial\bar\partial\dot\phi$ 다. 우변은 Ricci 형식이 부피 형식의 로그의 $-i\partial\bar\partial$ 이므로 다음과 같다.

$$
-\mathrm{Ric}(\omega)=-\mathrm{Ric}(\omega_0)+i\partial\bar\partial\log\frac{\omega^n}{\omega_0^n}
$$

두 식을 맞추고 상수를 $\phi$ 에 흡수하면 Kähler–Ricci 흐름은 다음 방정식과 같다.

$$
\frac{\partial\phi}{\partial t}=\log\frac{(\hat\omega_t+i\partial\bar\partial\phi)^n}{\omega_0^n},\qquad\phi(0)=0,\qquad\hat\omega_t+i\partial\bar\partial\phi\gt 0
$$

이것은 Kähler–Einstein 계량의 복소 [Monge–Ampère 방정식](monge-ampere-equation.md)에 시간 도함수를 붙인 꼴이다.

# 성질

## 최대 존재 시간

정리(Tian–Zhang 정리, Tian–Zhang theorem). 콤팩트 Kähler 다양체에서 $\omega_0$ 에서 출발한 Kähler–Ricci 흐름의 해는 다음 $T$ 에 대해 $\lbrack 0,T)$ 에서 존재하고 하나뿐이다.[^1]

$$
T=\sup\lbrace t\gt 0\mid\lbrack\omega_0\rbrack-2\pi t\thinspace c_1(M)\text{ 이 Kähler 류}\rbrace
$$

해는 류가 Kähler 류로 남는 동안 이어지고, 류가 Kähler 류의 경계에 닿는 시각에 끊긴다. $\mathbb{CP}^n$ 에서 $\omega_0=\omega\_{\mathrm{FS}}$ 이면 류가 $(1-(n+1)t)\lbrack\omega\_{\mathrm{FS}}\rbrack$ 이므로 $T=1/(n+1)$ 이다. $c_1(M)\lt 0$ 이면 Kähler 류에 Kähler 류 $-2\pi t\thinspace c_1(M)$ 을 더해 가고 $c_1(M)=0$ 이면 류가 그대로이므로, 두 경우 모두 $T=\infty$ 다.

## Cao 정리

정리(Cao 정리, Cao theorem). $c_1(M)\lt 0$ 이면 $\lambda=-1$ 인 정규화한 흐름이 모든 $t\ge 0$ 에서 존재하고 $\mathrm{Ric}(\omega)=-\omega$ 인 Kähler–Einstein 계량으로 매끄럽게 수렴한다. $c_1(M)=0$ 이면 정규화하지 않은 흐름이 모든 $t\ge 0$ 에서 존재하고 $\lbrack\omega_0\rbrack$ 안의 Ricci 평탄한 계량으로 수렴한다.[^2]

증명의 요지. $c_1(M)\lt 0$ 이면 $\chi=-\mathrm{Ric}(\Omega)\gt 0$ 인 부피 형식 $\Omega$ 가 있다. 기준 형식을 $\hat\omega_t=e^{-t}\omega_0+(1-e^{-t})\chi$ 로 잡으면 퍼텐셜 방정식이 다음 꼴이 된다.

$$
\frac{\partial\phi}{\partial t}=\log\frac{(\hat\omega_t+i\partial\bar\partial\phi)^n}{\Omega}-\phi
$$

$\phi(\cdot,t)$ 가 최대인 점에서 $i\partial\bar\partial\phi\le 0$ 이므로 분자가 $\hat\omega_t^n\le C\Omega$ 이하이고, 그 점에서 $\dot\phi\le\log C-\phi$ 다. [최대값 원리](maximum-principle.md)로 $\sup\phi$ 가 $t$ 와 상관없이 유계이고, 최소점에서 같은 논법으로 $\inf\phi$ 도 유계다. 고계 추정은 Calabi 추측의 Yau 추정을 시간에 따라 옮긴 것이다.

## Fano 다양체

$c_1(M)\gt 0$ 이고 $\lbrack\omega_0\rbrack=2\pi c_1(M)$ 이면 $\lambda=1$ 인 정규화한 흐름은 류를 바꾸지 않고 모든 $t\ge 0$ 에서 존재한다.[^2] 수렴은 항상 일어나지 않는다. $\mathbb{CP}^2$ 를 한 점에서 부풀린 곡면에는 Kähler–Einstein 계량이 없으므로, 이 곡면의 흐름은 Kähler–Einstein 계량으로 수렴할 수 없다.

정리(Perelman 추정, Perelman's estimate). Fano 다양체의 $\lambda=1$ 인 정규화한 흐름에서 스칼라 곡률, 지름, $\mathrm{Ric}(\omega)-\omega=i\partial\bar\partial u$ 인 함수 $u$ 의 $C^1$ 노름이 $t$ 와 상관없이 유계다.[^3]

정리(Tian–Zhu 정리, Tian–Zhu theorem). Fano 다양체에 Kähler–Einstein 계량이 있으면 $2\pi c_1(M)$ 의 어느 Kähler 형식에서 출발해도 $\lambda=1$ 인 정규화한 흐름이 Kähler–Einstein 계량으로 수렴한다.[^4]

# 활용

- 존재 정리의 다른 증명. Cao 정리는 Kähler–Einstein 계량의 Aubin–Yau 정리와 Calabi 추측의 존재 부분을 연속법 대신 흐름의 수렴으로 증명한다.
- [Kähler–Ricci 솔리톤](kahler-ricci-solitons.md). Kähler–Einstein 계량이 없는 Fano 다양체에서 Kähler–Ricci 솔리톤이 있고 초기 계량이 솔리톤의 대칭을 가지면 정규화한 흐름은 그 솔리톤으로 수렴한다.[^4] 솔리톤은 [Ricci 솔리톤](ricci-solitons.md)의 Kähler 판이다.
- 일반형 다양체의 표준 모형. 표준 선다발(canonical bundle) $K_M$ 이 big 이고 nef 인 사영 다양체에서 $\lambda=-1$ 인 정규화한 흐름은 모든 시간에 존재하고, 표준 모형(canonical model) 위의 특이점이 있는 Kähler–Einstein 계량으로 수렴한다.[^1] 최대 존재 시간 $T$ 가 유한한 흐름에서 그 시각에 일어나는 수축을 대수기하의 극소 모형 프로그램(minimal model program)과 맞추는 연구가 Song–Tian 의 해석적 극소 모형 프로그램(analytic minimal model program)이다.

[^1]: Gang Tian, Zhou Zhang, "On the Kähler–Ricci flow on projective manifolds of general type", *Chinese Annals of Mathematics, Series B* **27** (2006), 179–192.
[^2]: Huai-Dong Cao, "Deformation of Kähler metrics to Kähler–Einstein metrics on compact Kähler manifolds", *Inventiones Mathematicae* **81** (1985), 359–372.
[^3]: Natasa Sesum, Gang Tian, "Bounding scalar curvature and diameter along the Kähler Ricci flow (after Perelman)", *Journal of the Institute of Mathematics of Jussieu* **7** (2008), 575–587.
[^4]: Gang Tian, Xiaohua Zhu, "Convergence of Kähler–Ricci flow", *Journal of the American Mathematical Society* **20** (2007), 675–699.

# 연관 문서

## 선수지식

- [Ricci 흐름](ricci-flow.md)
- [Kähler–Einstein 계량](kahler-einstein-metrics.md)

## 더 알아보기

- [Kähler–Ricci 솔리톤](kahler-ricci-solitons.md)

#differential_geometry #complex_analysis #analysis
