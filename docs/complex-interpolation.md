# 복소 보간

# 개요

**복소 보간(complex interpolation)** 은 두 [Banach 공간](banach-spaces.md) 사이의 중간 공간을, 복소평면의 띠 위에서 정칙이고 두 경계선에서 각 공간의 값을 갖는 함수의 가운데 값으로 정하는 방법이다. 작용소 $T$ 가 $L^2$ 에서 $L^2$ 로, 두 번 미분 가능한 함수의 공간 $H^2$ 에서 $H^2$ 로 유계이면 한 번 미분 가능한 함수의 공간 $H^1$ 에서도 유계인지 묻는다. [Riesz–Thorin 정리](riesz-thorin.md)의 증명은 함수의 절댓값을 복소수 지수로 거듭제곱하므로 $L^p$ 공간에만 쓸 수 있다.

복소 보간은 그 증명에서 $L^p$ 에 특수한 부분을 떼어 내고, 정칙함수의 족과 띠의 최대원리만 남겨 어느 Banach 공간 쌍에도 적용한다. 그러면 $H^1$ 이 $L^2$ 와 $H^2$ 의 가운데 공간으로 나오고, $T$ 의 $H^1$ 노름이 두 노름의 기하평균 이하다.

# 직관

$H^s(\mathbb R^n)$ 의 노름은 $\Vert f\Vert\_{H^s}=\Vert(1+\vert\xi\vert^2)^{s/2}\hat f\Vert\_{L^2}$ 다. $T$ 의 $L^2$ 노름을 $M_0$, $H^2$ 노름을 $M_1$ 이라 하자. $f\in H^1$ 에서 띠 $0\le\mathrm{Re}\thinspace z\le 1$ 위의 함수 $F(z)$ 를 [Fourier 변환](fourier-transform.md) 쪽에서 다음으로 둔다.

$$
\widehat{F(z)}(\xi)=(1+\vert\xi\vert^2)^{1/2-z}\thinspace\hat f(\xi)
$$

$F(1/2)=f$ 이다. 왼쪽 경계선 $z=it$ 에서는 $\vert(1+\vert\xi\vert^2)^{-it}\vert=1$ 이므로 $\Vert F(it)\Vert\_{L^2}=\Vert f\Vert\_{H^1}$ 이다. 오른쪽 경계선 $z=1+it$ 에서는 다음이 성립한다.

$$
\Vert F(1+it)\Vert\_{H^2}=\Vert(1+\vert\xi\vert^2)^{1/2}\hat f\Vert\_{L^2}=\Vert f\Vert\_{H^1}
$$

$G(z)=M_0^{z-1}M_1^{-z}TF(z)$ 로 두면 $G$ 는 왼쪽 경계선에서 $L^2$ 노름이, 오른쪽 경계선에서 $H^2$ 노름이 $\Vert f\Vert\_{H^1}$ 이하다. $G(1/2)=M_0^{-1/2}M_1^{-1/2}Tf$ 의 $H^1$ 노름이 $\Vert f\Vert\_{H^1}$ 이하임을 보이면 $T$ 의 $H^1$ 노름은 $\sqrt{M_0M_1}$ 이하다. 이것을 보이려면 $H^1$ 노름을 띠 위의 정칙함수의 가운데 값으로 정의하면 된다.

# 정의

## 허용 함수

$(X_0,X_1)$ 이 [실보간](real-interpolation.md) 문서의 양립 쌍이고 $S=\lbrace z:0\le\mathrm{Re}\thinspace z\le 1\rbrace$ 가 띠라 하자. 함수 $F:S\to X_0+X_1$ 이 다음 셋을 만족하면 **허용 함수(admissible function)** 라 한다.

- $F$ 는 $S$ 에서 유계이고 연속이며, 내부에서 [정칙함수](holomorphic-functions.md)다.
- $t\mapsto F(it)$ 는 $X_0$ 으로 가는 유계 연속함수다.
- $t\mapsto F(1+it)$ 는 $X_1$ 로 가는 유계 연속함수다.

허용 함수 전체를 $\mathcal F(X_0,X_1)$ 이라 하고 노름을 다음으로 준다.

$$
\Vert F\Vert\_{\mathcal F}=\max\Bigl(\sup_t\Vert F(it)\Vert\_{X_0},\thinspace\sup_t\Vert F(1+it)\Vert\_{X_1}\Bigr)
$$

직관 절의 $F$ 는 $(L^2,H^2)$ 의 허용 함수이고 $\Vert F\Vert\_{\mathcal F}=\Vert f\Vert\_{H^1}$ 이다.

## 복소 보간 공간

$0\lt\theta\lt 1$ 에서 허용 함수의 값 $F(\theta)$ 로 나타나는 $x\in X_0+X_1$ 전체를 **복소 보간 공간(complex interpolation space)** $\lbrack X_0,X_1\rbrack\_\theta$ 라 하고, 노름을 다음으로 준다[^1].

$$
\Vert x\Vert\_{\lbrack X_0,X_1\rbrack\_\theta}=\inf\bigl\lbrace\Vert F\Vert\_{\mathcal F}:F\in\mathcal F(X_0,X_1),\ F(\theta)=x\bigr\rbrace
$$

직관 절의 계산은 $\Vert f\Vert\_{\lbrack L^2,H^2\rbrack\_{1/2}}\le\Vert f\Vert\_{H^1}$ 이다.

# 성질

## 보간 정리

정리. $T$ 가 $X_0\to Y_0$ 에서 노름 $M_0$, $X_1\to Y_1$ 에서 노름 $M_1$ 인 선형사상이면, $T$ 는 $\lbrack X_0,X_1\rbrack\_\theta\to\lbrack Y_0,Y_1\rbrack\_\theta$ 에서 노름이 $M_0^{1-\theta}M_1^\theta$ 이하다[^1].

증명의 요지. $x=F(\theta)$ 이면 $G(z)=M_0^{z-1}M_1^{-z}TF(z)$ 는 $(Y_0,Y_1)$ 의 허용 함수이고 $\Vert G\Vert\_{\mathcal F}\le\Vert F\Vert\_{\mathcal F}$ 이다. $G(\theta)=M_0^{\theta-1}M_1^{-\theta}Tx$ 이므로 $F$ 에 대해 하한을 취하면 된다.

## Lᵖ 공간의 복소 보간

정리. $1\le p_0,p_1\le\infty$ 이고 $1/p\_\theta=(1-\theta)/p_0+\theta/p_1$ 이면 $\lbrack L^{p_0},L^{p_1}\rbrack\_\theta=L^{p\_\theta}$ 이고 두 노름은 같다[^1].

증명의 요지. $\Vert f\Vert\_{L^{p\_\theta}}=1$ 인 $f$ 에서 다음 함수는 허용 함수이고 노름이 $1$ 이므로 한쪽 포함이 나온다.

$$
F(z)=\vert f\vert^{p\_\theta\left(\frac{1-z}{p_0}+\frac{z}{p_1}\right)}\mathrm{sgn}\thinspace f
$$

반대쪽은 $g\in L^{p'\_\theta}$ 에 같은 꼴의 함수를 만들어 $\int F(z)G(z)$ 에 [Phragmén–Lindelöf 원리](phragmen-lindelof.md)를 쓴다. 이 정리를 보간 정리에 넣으면 Riesz–Thorin 정리가 나온다.

## Sobolev 공간의 복소 보간

정리. $s_0,s_1\in\mathbb R$ 이고 $s\_\theta=(1-\theta)s_0+\theta s_1$ 이면 $\lbrack H^{s_0},H^{s_1}\rbrack\_\theta=H^{s\_\theta}$ 이고 두 노름은 같다. $1\lt p\lt\infty$ 이면 Bessel 퍼텐셜 공간에서도 $\lbrack H^{s_0}\_p,H^{s_1}\_p\rbrack\_\theta=H^{s\_\theta}\_p$ 가 노름의 동치로 성립한다[^1].

증명의 요지. $p=2$ 에서는 직관 절처럼 $(1+\vert\xi\vert^2)^{(s\_\theta-s_0-z(s_1-s_0))/2}$ 를 곱하는 허용 함수를 쓰고, 반대쪽은 Plancherel 정리와 $L^2$ 의 경우로 줄인다. $p\ne 2$ 에서는 허수 차수의 승수 $(1+\vert\xi\vert^2)^{it}$ 이 Mikhlin 승수 정리로 $L^p$ 에서 유계이고 노름이 $\vert t\vert$ 의 다항식 이하라는 것을 쓴다.

[Triebel–Lizorkin 공간](triebel-lizorkin-spaces.md)으로 쓰면 $H^s_p=F^s_{p,2}$ 다. 같은 쌍을 실보간하면 [Besov 공간](besov-spaces.md) $B^{s\_\theta}\_{p,q}$ 가 나오므로, $p\ne 2$ 이면 두 방법의 결과가 다르다.

## 실보간과의 비교

정리. 실보간 공간과 복소 보간 공간 사이에 다음 포함이 성립한다[^2].

$$
(X_0,X_1)\_{\theta,1}\subset\lbrack X_0,X_1\rbrack\_\theta\subset(X_0,X_1)\_{\theta,\infty}
$$

$L^p$ 에서는 왼쪽이 [Lorentz 공간](lorentz-spaces.md) $L^{p\_\theta,1}$, 가운데가 $L^{p\_\theta}$, 오른쪽이 약한 $L^{p\_\theta}$ 다. 복소 보간은 실보간의 둘째 지수 $q$ 를 고르지 않고 가운데 공간 하나를 준다.

## Stein 의 해석적 족 보간

Stein 보간 정리(Stein interpolation theorem). 작용소의 족 $T_z$ 가 띠에서 $z$ 에 대해 정칙이고 경계선에서 $\Vert T\_{it}\Vert\_{L^{p_0}\to L^{q_0}}\le M_0(t)$, $\Vert T\_{1+it}\Vert\_{L^{p_1}\to L^{q_1}}\le M_1(t)$ 이며 $\log M_j(t)$ 가 $e^{a\vert t\vert}$ ($a\lt\pi$) 보다 느리게 자라면, $T\_\theta$ 는 $L^{p\_\theta}\to L^{q\_\theta}$ 에서 유계다[^3].

증명은 보간 정리의 증명에서 $T$ 를 $T_z$ 로 바꾸고, 경계 상계의 증가를 띠 위의 조화함수로 상쇄하는 것이다.

# 활용

- 분수 차수 정칙성. $\mathbb R^n$ 위의 타원형 작용소의 해가 $L^2$ 자료에서 $H^2$, $H^2$ 자료에서 $H^4$ 에 들면 보간 정리로 $H^s$ 자료에서 $H^{s+2}$ 에 든다. [타원형 정칙성](elliptic-regularity.md)의 정수 차수 결과가 실수 차수로 옮겨진다.
- Schatten 아이디얼. [Schatten 아이디얼](schatten-ideals.md) $S^p$ 는 대각합 노름의 $S^1$ 과 작용소 노름의 $S^\infty$ 의 복소 보간 공간 $\lbrack S^1,S^\infty\rbrack\_\theta=S^{p\_\theta}$ 이고, 비가환 [Hölder 부등식](holder-inequality.md)이 보간 정리에서 나온다.
- 제한 정리. Stein–Tomas 정리의 Stein 의 증명은 구면 측도에 $(1-\vert\xi\vert^2)\_+^z$ 꼴의 해석적 족을 붙이고 Stein 보간 정리를 쓴다. [Fourier 제한 추측](fourier-restriction-conjecture.md)과 [Bochner–Riesz 평균](bochner-riesz-means.md)의 $L^p$ 추정 일부가 이 방법으로 나온다.
- 벡터값 함수공간. $1\le p_0,p_1\lt\infty$ 이면 Banach 공간 값의 $L^p$ 공간의 복소 보간 공간은 $L^{p\_\theta}$ 에 값을 $\lbrack X_0,X_1\rbrack\_\theta$ 에 갖는 공간이다[^2]. 스칼라 함수의 보간을 벡터값 함수로 옮길 때 쓴다.

[^1]: A. P. Calderón, "Intermediate spaces and interpolation, the complex method", Studia Mathematica **24** (1964), 113–190.

[^2]: J. Bergh, J. Löfström, *Interpolation Spaces: An Introduction*, Springer (1976), Chapter 4. 실보간과의 비교는 Theorem 4.7.1, 벡터값 Lᵖ 는 §5.1 에 있다.

[^3]: E. M. Stein, "Interpolation of linear operators", Transactions of the American Mathematical Society **83** (1956), 482–492.

# 연관 문서

## 선수지식

- [Riesz–Thorin 정리](riesz-thorin.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #complex_analysis
