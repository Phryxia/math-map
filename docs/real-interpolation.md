# 실보간

# 개요

**실보간(real interpolation)** 은 두 함수공간 사이에 중간 공간을 만드는 방법으로, 함수를 두 공간의 조각으로 가르는 데 드는 비용이 얼마나 빨리 자라는지로 중간 공간의 노름을 정한다. 구간 $(0,1)$ 위의 함수 $f(x)=x^{-1/2}$ 은 $p\lt 2$ 인 모든 $L^p$ 에 들고 $L^2$ 에는 들지 않는다. $L^p$ 공간만으로는 이 함수가 지수 $2$ 의 경계에 정확히 있다는 것을 적을 수 없다.

실보간은 $f$ 를 적분 가능한 조각과 유계인 조각으로 가르는 비용을 잰다. 이 비용으로 정한 중간 공간에서 $f$ 는 지수 $2$ 의 공간에 든다.

# 직관

$f(x)=x^{-1/2}$ 을 높이 $\lambda\ge 1$ 에서 자른다. 윗부분 $f_0=\max(f-\lambda,0)$ 과 아랫부분 $f_1=\min(f,\lambda)$ 을 더하면 $f$ 다. 윗부분은 $x\lt\lambda^{-2}$ 에서만 $0$ 이 아니므로 적분이 작다.

$$
\Vert f_0\Vert\_{L^1}=\int_0^{\lambda^{-2}}\bigl(x^{-1/2}-\lambda\bigr)\thinspace dx=\frac1\lambda,\qquad\Vert f_1\Vert\_{L^\infty}=\lambda
$$

$L^1$ 조각과 $L^\infty$ 조각의 크기를 무게 $t\gt 0$ 로 더한 비용 $1/\lambda+t\lambda$ 는 $\lambda=t^{-1/2}$ 에서 가장 작고, 그 값은 $2t^{1/2}$ 이다. $t\ge 1$ 이면 $f$ 전체를 $L^1$ 조각으로 두는 비용 $\Vert f\Vert\_{L^1}=2$ 가 더 작다.

$t\le 1$ 에서 비용을 $t^{1/2}$ 로 나눈 값은 늘 $2$ 다. 이 값의 상한은 유한하지만, $dt/t$ 로 제곱해 적분하면 $t\to 0$ 에서 발산한다. [Besov 공간](besov-spaces.md)의 계단 함수에서 띠 조각 크기의 수열이 줄지 않은 것과 같은 꼴이고, 비용을 상한으로 재면 $f$ 가 지수 $2$ 의 공간에 든다.

# 정의

## 양립 쌍

두 [Banach 공간](banach-spaces.md) $X_0$, $X_1$ 이 같은 Hausdorff 위상 벡터 공간에 연속으로 포함되면 $(X_0,X_1)$ 을 **양립 쌍(compatible couple)** 이라 한다. 이때 합 $X_0+X_1$ 이 정의된다. 직관 절의 $(L^1,L^\infty)$ 는 두 공간이 모두 가측함수의 공간에 들므로 양립 쌍이다.

## K 범함수

$x\in X_0+X_1$ 과 $t\gt 0$ 에서 **K 범함수(K-functional)** 는 다음이다.

$$
K(t,x)=\inf\bigl\lbrace\Vert x_0\Vert\_{X_0}+t\Vert x_1\Vert\_{X_1}:x=x_0+x_1\bigr\rbrace
$$

직관 절의 계산은 $f(x)=x^{-1/2}$ 에서 $t\le 1$ 이면 $K(t,f)\le 2t^{1/2}$, $t\ge 1$ 이면 $K(t,f)\le 2$ 를 준다. 아래 Peetre 공식으로 두 부등식은 등식이다.

## 실보간 공간

$0\lt\theta\lt 1$ 이고 $1\le q\le\infty$ 라 하자. $x\in X_0+X_1$ 의 노름을 다음으로 정한다.

$$
\Vert x\Vert\_{\theta,q}=\Bigl(\int_0^\infty\bigl(t^{-\theta}K(t,x)\bigr)^q\frac{dt}{t}\Bigr)^{1/q}
$$

$q=\infty$ 이면 적분 대신 $t$ 에 대한 상한을 취한다. 이 노름이 유한한 $x$ 전체를 **실보간 공간(real interpolation space)** $(X_0,X_1)\_{\theta,q}$ 라 한다[^1]. 정의를 처음 준 것은 Lions 와 Peetre 다[^2].

$f(x)=x^{-1/2}$ 에서 $\theta=1/2$ 이면 $t^{-1/2}K(t,f)$ 는 $t\le 1$ 에서 $2$, $t\ge 1$ 에서 $2t^{-1/2}$ 이다. 그러므로 $f$ 는 $(L^1,L^\infty)\_{1/2,\infty}$ 에 들고, $q\lt\infty$ 인 $(L^1,L^\infty)\_{1/2,q}$ 에는 들지 않는다.

# 성질

## 보간 정리

정리. $T$ 가 $X_0$ 에서 $Y_0$ 으로 노름 $M_0$ 인, $X_1$ 에서 $Y_1$ 으로 노름 $M_1$ 인 선형사상이면, $T$ 는 $(X_0,X_1)\_{\theta,q}$ 에서 $(Y_0,Y_1)\_{\theta,q}$ 로 가는 유계 사상이고 노름이 $M_0^{1-\theta}M_1^\theta$ 이하다[^1].

증명의 요지. $x=x_0+x_1$ 이면 $Tx=Tx_0+Tx_1$ 이므로 K 범함수 사이에 다음이 성립한다.

$$
K(t,Tx)\le M_0\thinspace K\bigl(tM_1/M_0,\thinspace x\bigr)
$$

실보간 노름의 적분에서 $t$ 를 $tM_0/M_1$ 로 바꾸면 상수 $M_0^{1-\theta}M_1^\theta$ 가 나온다.

## Peetre 공식과 Lorentz 공간

$f$ 의 **감소 재배열(decreasing rearrangement)** 은 [Marcinkiewicz 보간 정리](marcinkiewicz-interpolation.md) 문서의 분포함수 $d_f$ 로 정한 $f^\ast(s)=\inf\lbrace\lambda\gt 0:d_f(\lambda)\le s\rbrace$ 다. $(0,1)$ 위의 $f(x)=x^{-1/2}$ 은 이미 감소하므로 $f^\ast=f$ 다.

정리(Peetre 공식). $(L^1,L^\infty)$ 의 K 범함수는 다음이다[^1].

$$
K(t,f)=\int_0^tf^\ast(s)\thinspace ds
$$

증명의 요지. 높이 $f^\ast(t)$ 에서 직관 절처럼 자르면 윗부분의 $L^1$ 노름과 $t$ 배 한 아랫부분의 높이를 더한 값이 오른쪽과 같다. 거꾸로 $f=f_0+f_1$ 이면 크기 $t$ 인 어느 집합 위에서도 $\vert f\vert$ 의 적분은 $\Vert f_0\Vert\_{L^1}+t\Vert f_1\Vert\_{L^\infty}$ 이하다.

$1\lt p\lt\infty$ 와 $1\le q\le\infty$ 에서 Lorentz 공간(Lorentz space) $L^{p,q}$ 는 $t^{1/p}f^\ast(t)$ 의 $L^q(dt/t)$ 노름이 유한한 함수의 공간이다. Peetre 공식과 [Hardy 부등식](hardy-inequality.md)으로 다음이 나온다[^1].

$$
(L^1,L^\infty)\_{\theta,q}=L^{p,q},\qquad\frac1p=1-\theta
$$

$q=p$ 이면 $L^{p,p}=L^p$ 이고, $q=\infty$ 이면 $L^{p,\infty}$ 는 $d_f(\lambda)\le C\lambda^{-p}$ 인 함수의 공간, 곧 약한 $L^p$ 다. $f(x)=x^{-1/2}$ 은 $t^{1/2}f^\ast(t)=1$ 이므로 약한 $L^2$ 에 들고 $L^2$ 에 들지 않는다.

## 재반복 정리

재반복 정리(reiteration theorem). $0\lt\theta_0\lt\theta_1\lt 1$ 이고 $X_{\theta_i}=(X_0,X_1)\_{\theta_i,q_i}$ 라 하자. $0\lt\eta\lt 1$ 과 $\theta=(1-\eta)\theta_0+\eta\theta_1$ 에서 다음이 성립한다. 이 등식은 $q_0$, $q_1$ 에 의존하지 않는다[^1].

$$
(X_{\theta_0},X_{\theta_1})\_{\eta,q}=(X_0,X_1)\_{\theta,q}
$$

$1\lt p_0\lt p_1\lt\infty$ 이면 $L^{p_i}$ 와 약한 $L^{p_i}$ 가 둘 다 $(L^1,L^\infty)$ 의 실보간 공간이다. 재반복 정리로 $(L^{p_0},L^{p_1})\_{\eta,p}$ 와 약한 $L^{p_0}$, 약한 $L^{p_1}$ 의 실보간 공간이 모두 $L^p$ 다. 보간 정리에 넣으면 선형사상에 대한 Marcinkiewicz 보간 정리가 나온다.

## Sobolev 공간의 실보간

정리. $1\le p\le\infty$, $0\lt\theta\lt 1$, $1\le q\le\infty$ 이면 다음이 성립한다[^3].

$$
\bigl(L^p(\mathbb R^n),W^{1,p}(\mathbb R^n)\bigr)\_{\theta,q}=B^\theta_{p,q}(\mathbb R^n)
$$

증명의 요지. $f$ 를 Besov 공간 문서의 띠 조각으로 가르고 $j$ 번째 띠까지를 $W^{1,p}$ 조각, 나머지를 $L^p$ 조각으로 두면 다음이 성립한다.

$$
K(2^{-j},f)\le C\sum_{i\gt j}\Vert\Delta_if\Vert\_{L^p}+C2^{-j}\sum_{i\le j}2^i\Vert\Delta_if\Vert\_{L^p}
$$

$t$ 적분을 $t=2^{-j}$ 마다 끊어 더하면 오른쪽이 Besov 노름이 된다. 반대 방향은 Besov 공간 문서의 Bernstein 부등식으로 $\Vert\Delta_jf\Vert\_{L^p}\le CK(2^{-j},f)$ 를 보여 얻는다.

같은 쌍의 복소 보간, 곧 [Riesz–Thorin 정리](riesz-thorin.md)의 방법으로 만든 공간은 $1\lt p\lt\infty$ 에서 Besov 공간이 아니라 [분수 Sobolev 공간](fractional-sobolev-spaces.md)의 Fourier 쪽 정의를 $L^p$ 로 옮긴 Bessel 퍼텐셜 공간(Bessel potential space)이다.

# 활용

- 끝점 추정. $1\le p\lt n$ 과 $1/p^\ast=1/p-1/n$ 에서 Sobolev 매장 $W^{1,p}(\mathbb R^n)\subset L^{p^\ast}$ 은 Lorentz 공간 $L^{p^\ast,p}$ 로 좁혀진다. [Hardy–Littlewood–Sobolev 부등식](hardy-littlewood-sobolev-inequality.md)과 합성곱 부등식도 Lorentz 공간에서 더 좁은 꼴로 적힌다.
- 근사 이론. $(L^p,W^{k,p})$ 의 K 범함수 $K(t^k,f)$ 는 $f$ 의 $k$ 차 연속률(modulus of smoothness) $\omega_k(f,t)\_p$ 와 상수배 안에서 같다[^4]. 다항식과 스플라인의 근사 오차가 $t^\theta$ 로 줄어드는 함수의 공간이 실보간 공간으로 정해진다.
- 유한요소법의 오차. [유한요소법](finite-element-method.md)에서 격자 간격 $h$ 의 근사 작용소 $\Pi_h$ 가 $\Vert u-\Pi_hu\Vert\_{L^2}\le C\Vert u\Vert\_{L^2}$ 와 $\Vert u-\Pi_hu\Vert\_{L^2}\le Ch\Vert u\Vert\_{H^1}$ 을 만족한다고 하자. 보간 정리를 선형사상 $u\mapsto u-\Pi_hu$ 에 쓰면 $u\in B^\theta_{2,\infty}$ 에서 오차가 $Ch^\theta\Vert u\Vert\_{B^\theta_{2,\infty}}$ 이하다.
- 경계값 공간. Besov 공간 문서의 흔적 정리가 주는 $B^{1-1/p}\_{p,p}$ 는 실보간 공간 $(L^p,W^{1,p})\_{1-1/p,p}$ 이고, Lions–Peetre 의 흔적 방법(trace method)은 이 공간을 경계값으로 정의한다[^2].

[^1]: J. Bergh, J. Löfström, *Interpolation Spaces: An Introduction*, Springer (1976). K 범함수와 보간 정리는 Chapter 3, 재반복 정리는 §3.5, Peetre 공식과 Lorentz 공간은 Chapter 5 에 있다.

[^2]: J.-L. Lions, J. Peetre, "Sur une classe d'espaces d'interpolation", Publications Mathématiques de l'IHÉS **19** (1964), 5–68.

[^3]: Bergh–Löfström 의 Chapter 6 과 H. Triebel, *Interpolation Theory, Function Spaces, Differential Operators*, North-Holland (1978), §2.4.

[^4]: H. Johnen, K. Scherer, "On the equivalence of the K-functional and moduli of continuity and some applications", in *Constructive Theory of Functions of Several Variables*, Lecture Notes in Mathematics **571**, Springer (1977), 119–140.

# 연관 문서

## 선수지식

- [Marcinkiewicz 보간 정리](marcinkiewicz-interpolation.md)
- [Besov 공간](besov-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #measure_theory
