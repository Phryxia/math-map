# 실 Hardy 공간

# 개요

**실 Hardy 공간(real Hardy space)** $H^1(\mathbb R^n)$ 은 적분 가능한 함수 가운데, 특이적분을 취해도 적분 가능한 것의 공간이다. 구간 $\lbrack 0,1\rbrack$ 위의 지시함수는 적분이 $1$ 이지만, 그 Hilbert 변환은 멀리서 $1/(\pi x)$ 처럼 줄어 적분이 발산한다. 같은 함수에서 $\lbrack 1,2\rbrack$ 위의 지시함수를 빼면 Hilbert 변환이 $1/x^2$ 처럼 줄어 적분 가능하다.

$L^1$ 은 특이적분이 들어가지 못하는 공간이다. 실 Hardy 공간은 평균이 $0$ 인 작은 조각들의 합으로 적히는 함수만 모아, 특이적분이 $L^1$ 로 유계가 되게 한다.

# 직관

$\mathbb R$ 위의 **Hilbert 변환(Hilbert transform)** 은 주값 적분 $Hf(x)=\tfrac1\pi\mathrm{p.v.}\int f(y)/(x-y)\thinspace dy$ 이고, [Calderón–Zygmund 이론](calderon-zygmund-theory.md)의 가장 간단한 특이적분이다. $f=\mathbf 1\_{\lbrack 0,1\rbrack}$ 이면 적분을 바로 계산할 수 있다.

$$
Hf(x)=\frac1\pi\log\left\vert\frac{x}{x-1}\right\vert
$$

$x=0$ 과 $x=1$ 근처의 로그 특이점은 적분 가능하다. $x\to\infty$ 에서는 $\log(x/(x-1))=-\log(1-1/x)$ 가 $1/x$ 와 같은 크기이므로 $\int\vert Hf\vert$ 가 발산한다. $f$ 는 $L^1$ 에 들지만 $Hf$ 는 들지 않는다.

$g=\mathbf 1\_{\lbrack 0,1\rbrack}-\mathbf 1\_{\lbrack 1,2\rbrack}$ 은 적분이 $0$ 이다. 같은 계산으로 다음이 나온다.

$$
Hg(x)=\frac1\pi\log\left\vert\frac{x(x-2)}{(x-1)^2}\right\vert
$$

$x(x-2)/(x-1)^2=1-1/(x-1)^2$ 이므로 $x\to\infty$ 에서 $Hg$ 는 $1/x^2$ 와 같은 크기이고 적분 가능하다. 멀리서의 $1/x$ 항은 $\int f$ 에 비례하므로, 적분이 $0$ 인 조각에서는 그 항이 지워진다.

# 정의

## Riesz 변환에 의한 정의

$\mathbb R^n$ 의 $j$ 번째 Riesz 변환(Riesz transform) $R_j$ 는 [Fourier 변환](fourier-transform.md) 쪽에서 $-i\xi_j/\vert\xi\vert$ 를 곱하는 작용소이고, $n=1$ 이면 Hilbert 변환이다. $f\in L^1(\mathbb R^n)$ 이고 모든 $R_jf$ 가 $L^1$ 에 들면 $f\in H^1(\mathbb R^n)$ 이라 하고, 노름을 다음으로 준다[^1].

$$
\Vert f\Vert\_{H^1}=\Vert f\Vert\_{L^1}+\sum_{j=1}^n\Vert R_jf\Vert\_{L^1}
$$

직관 절의 $\mathbf 1\_{\lbrack 0,1\rbrack}$ 은 $H^1(\mathbb R)$ 에 들지 않고, $\mathbf 1\_{\lbrack 0,1\rbrack}-\mathbf 1\_{\lbrack 1,2\rbrack}$ 은 든다.

## 원자

정육면체 $Q$ 에 받침이 있고 $\vert a\vert\le 1/\vert Q\vert$ 이며 $\int a=0$ 인 함수 $a$ 를 **원자(atom)** 라 한다. 직관 절의 $g$ 를 $2$ 로 나눈 것은 $Q=\lbrack 0,2\rbrack$ 의 원자다.

## 원자 분해

정리(Coifman–Latter). $f\in H^1(\mathbb R^n)$ 이면 원자 $a_k$ 와 $\sum_k\vert\lambda_k\vert\lt\infty$ 인 수 $\lambda_k$ 가 있어 $f=\sum_k\lambda_ka_k$ 이다. 그런 표현의 $\sum_k\vert\lambda_k\vert$ 의 하한은 $\Vert f\Vert\_{H^1}$ 과 동치인 노름이다[^2].

$H^1$ 은 원자들의 절대수렴 합으로 적히는 함수의 공간이다. 극대함수 $\sup\_{t\gt 0}\vert\varphi_t\ast f\vert$ 가 $L^1$ 에 드는 함수의 공간도 같은 공간이다[^1]. 여기서 $\varphi_t(x)=t^{-n}\varphi(x/t)$ 이고 $\varphi$ 는 적분이 $1$ 인 Schwartz 함수다.

# 성질

## 평균이 0 인 조건

정리. $f\in H^1$ 이면 $\int f=0$ 이다.

증명의 요지. $f$ 와 $R_jf$ 가 $L^1$ 에 들므로 두 Fourier 변환은 연속이다. $\widehat{R_jf}(\xi)=-i(\xi_j/\vert\xi\vert)\hat f(\xi)$ 가 $\xi=0$ 에서 연속이려면, $\xi_j/\vert\xi\vert$ 가 방향마다 다른 값으로 가므로 $\hat f(0)=0$ 이어야 한다.

직관 절의 $\mathbf 1\_{\lbrack 0,1\rbrack}$ 이 $H^1$ 에 들지 않는 이유가 이것이다.

## 원자의 특이적분

정리. Calderón–Zygmund 작용소 $T$ 에서 상수 $C$ 가 있어 모든 원자 $a$ 가 $\Vert Ta\Vert\_{L^1}\le C$ 를 만족한다. 그러므로 $T$ 는 $H^1$ 에서 $L^1$ 로 유계다[^1].

증명의 요지. $Q$ 의 중심을 $c$, 두 배로 늘린 정육면체를 $Q^\ast$ 라 하자. $Q^\ast$ 위에서는 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)과 $T$ 의 $L^2$ 유계성으로 다음을 얻는다.

$$
\int\_{Q^\ast}\vert Ta\vert\le\vert Q^\ast\vert^{1/2}\Vert Ta\Vert\_{L^2}\le C\vert Q\vert^{1/2}\Vert a\Vert\_{L^2}\le C
$$

$Q^\ast$ 밖에서는 $\int a=0$ 으로 $Ta(x)=\int(K(x-y)-K(x-c))a(y)\thinspace dy$ 로 적는다. 핵의 매끄러움 조건이 괄호를 $\ell(Q)/\vert x-c\vert^{n+1}$ 의 상수배로 누르고, 그 적분은 $Q^\ast$ 밖에서 유한하다.

## BMO 와의 쌍대성

정리(Fefferman). $H^1(\mathbb R^n)$ 의 [쌍대 공간](dual-space.md)은 [유계 평균 진동 공간](bounded-mean-oscillation.md)(bounded mean oscillation, BMO) $\mathrm{BMO}$ 다. $g\in\mathrm{BMO}$ 마다 $f\mapsto\int fg$ 가 $H^1$ 위의 유계 선형범함수로 연장되고, 모든 유계 선형범함수가 이 꼴이다[^3].

증명의 요지. 원자 $a$ 와 $g\in\mathrm{BMO}$ 에서 $\int a=0$ 이므로 다음이 성립한다.

$$
\Bigl\vert\int ag\Bigr\vert=\Bigl\vert\int_Qa\thinspace(g-g\_Q)\Bigr\vert\le\frac1{\vert Q\vert}\int_Q\vert g-g\_Q\vert\le\Vert g\Vert\_\ast
$$

원자 분해로 이것이 $H^1$ 전체의 부등식이 된다. 반대 방향은 [Hahn–Banach 정리](hahn-banach-theorem.md)로 범함수를 $L^1$ 의 곱공간으로 연장하고, Riesz 변환으로 BMO 함수를 만든다.

## 국소 L log L 판정

정리(Stein). $f\ge 0$ 이 공 $B$ 에 받침이 있으면, $Mf$ 가 $B$ 위에서 적분 가능한 것은 $\int_Bf\log(2+f)\lt\infty$ 인 것과 동치다. 그러므로 공에 받침이 있고 적분이 $0$ 이며 $\vert f\vert\log(2+\vert f\vert)$ 가 적분 가능한 함수는 $H^1$ 에 든다[^4].

$M$ 은 [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)다. $L^1$ 함수의 극대함수는 약한 $L^1$ 에만 들고, 로그만큼 더 적분 가능해야 $L^1$ 에 든다.

# 활용

- 특이적분의 끝점. Calderón–Zygmund 작용소는 $L^1$ 에서 유계가 아니지만 $H^1\to L^1$ 과 $H^1\to H^1$ 로 유계다. $L^2$ 유계성과 [복소 보간](complex-interpolation.md)하면 $1\lt p\lt 2$ 의 $L^p$ 유계성이 나온다. $\lbrack H^1,L^2\rbrack\_\theta=L^p$ 이기 때문이다.
- 보정 콤팩트성(compensated compactness). [div–curl 보조정리](div-curl-lemma.md)의 정량적 꼴이다. $E\in L^p(\mathbb R^n)$ 의 발산이 $0$ 이고 $B\in L^{p'}(\mathbb R^n)$ 의 회전이 $0$ 이면 $E\cdot B\in H^1$ 이다. $u\in W^{1,n}(\mathbb R^n;\mathbb R^n)$ 의 Jacobi 행렬식도 $H^1$ 에 든다. 비선형 편미분방정식에서 이 곱의 적분이 BMO 함수와의 쌍대성으로 잡힌다[^5].
- 웨이블릿 기저. $L^1(\mathbb R)$ 에는 무조건 기저(unconditional basis)가 없지만, $H^1(\mathbb R)$ 에서는 매끄러운 [웨이블릿 변환](wavelet-transform.md)의 기저가 무조건 기저다. 계수의 크기만으로 $H^1$ 노름을 잰다.
- 해석함수의 경계값. $n=1$ 이면 실수 함수 $f\in H^1(\mathbb R)$ 와 $f+iHf$ 가 상반평면의 [Hardy 공간](hardy-spaces.md)에 드는 정칙함수의 경계값이 된다. 실 Hardy 공간이라는 이름이 여기서 나온다.

[^1]: C. Fefferman, E. M. Stein, "Hᵖ spaces of several variables", Acta Mathematica **129** (1972), 137–193.

[^2]: R. R. Coifman, "A real variable characterization of Hᵖ", Studia Mathematica **51** (1974), 269–274. 고차원은 R. H. Latter, "A characterization of Hᵖ(Rⁿ) in terms of atoms", Studia Mathematica **62** (1978), 93–101.

[^3]: C. Fefferman, "Characterizations of bounded mean oscillation", Bulletin of the American Mathematical Society **77** (1971), 587–588.

[^4]: E. M. Stein, "Note on the class L log L", Studia Mathematica **32** (1969), 305–310.

[^5]: R. Coifman, P.-L. Lions, Y. Meyer, S. Semmes, "Compensated compactness and Hardy spaces", Journal de Mathématiques Pures et Appliquées **72** (1993), 247–286.

# 연관 문서

## 선수지식

- [유계 평균 진동 공간](bounded-mean-oscillation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
