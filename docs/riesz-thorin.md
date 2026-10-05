# Riesz–Thorin 정리

# 개요

작용소의 $L^p$ 노름은 지수마다 다르다. 두 지수에서 그 노름을 알 때 그 사이 지수의 노름을 묻는다.

Riesz–Thorin 정리는 그 노름이 두 끝 노름의 기하평균 이하라고 답한다[^1]. 증명은 지수를 복소수로 움직여 띠 영역의 정칙함수를 만들고 최대원리를 쓰는 것이다.

# 직관

$T$ 가 선형이고 $L^1\to L^1$ 에서 노름 $M_0$, $L^2\to L^2$ 에서 노름 $M_1$ 로 유계다. $f\in L^{4/3}$ 에 대해 $\Vert Tf\Vert\_{L^{4/3}}$ 를 재려 한다. $f$ 를 $\vert f\vert\gt 1$ 인 부분 $f_0$ 과 나머지 $f_1$ 로 가르면 $f_0\in L^1$ 이고 $f_1\in L^2$ 이므로 두 가정을 각각 쓸 수 있다.

$$
\Vert Tf\Vert\_{L^{4/3}}\le\Vert Tf_0\Vert\_{L^1}+\Vert Tf_1\Vert\_{L^2}\le M_0\Vert f_0\Vert\_{L^1}+M_1\Vert f_1\Vert\_{L^2}
$$

오른쪽은 노름 둘의 합이고 $\Vert f\Vert\_{L^{4/3}}$ 의 상수배가 아니다. 왼쪽의 $L^{4/3}$ 노름을 $L^1$ 노름과 $L^2$ 노름으로 받친 것도 틀린 부등식이다. 가르는 방법으로는 $M_0$ 과 $M_1$ 이 곱으로 섞이지 않는다.

가르는 대신 지수를 움직인다. $1/p_\theta=(1-\theta)/1+\theta/2$ 에서 $\theta$ 를 복소수 $z$ 로 바꾸면 $\vert f\vert^{p/p_z}$ 꼴의 함수가 $z$ 에 대해 정칙이다. 쌍대성으로 노름을 적분 $\int (Tf_z)\thinspace g_z$ 로 적으면 이 적분이 띠 $0\le\mathrm{Re}\thinspace z\le 1$ 에서 정칙이고, 두 경계선 위에서 가정과 Hölder 부등식이 각각 $M_0$ 과 $M_1$ 의 상계를 준다. 띠에서 유계인 정칙함수는 내부에서 두 경계값의 기하평균으로 받쳐지므로 $z=\theta$ 의 값이 $M_0^{1-\theta}M_1^\theta$ 이하다.

# 정의

## 보간 지수

$1\le p_0,p_1,q_0,q_1\le\infty$ 와 $0\lt\theta\lt 1$ 에 대해 다음으로 $p\_\theta$ 와 $q\_\theta$ 를 정한다.

$$
\frac{1}{p\_\theta}=\frac{1-\theta}{p_0}+\frac{\theta}{p_1},\qquad\frac{1}{q\_\theta}=\frac{1-\theta}{q_0}+\frac{\theta}{q_1}
$$

$\theta$ 가 $0$ 에서 $1$ 로 가면 $1/p\_\theta$ 가 $1/p_0$ 에서 $1/p_1$ 로 직선을 그린다.

## 띠 영역

$S=\lbrace z\in\mathbb C:0\le\mathrm{Re}\thinspace z\le 1\rbrace$ 를 쓴다. $S$ 에서 연속이고 내부에서 정칙이며 유계인 함수 $F$ 가 두 경계선에서 $\vert F\vert\le M_0$ 과 $\vert F\vert\le M_1$ 을 만족하면, 모든 $0\lt\theta\lt 1$ 에서 $\vert F(\theta)\vert\le M_0^{1-\theta}M_1^\theta$ 다. 이것을 **Phragmén–Lindelöf 원리** 또는 띠에서의 최대원리라 한다. $M_0^{z-1}M_1^{-z}F(z)$ 가 두 경계선에서 절댓값 $1$ 이하임을 보고 최대절댓값 원리를 쓰면 나온다.

# 성질

## 보간 정리

$T$ 가 $L^{p_0}\to L^{q_0}$ 에서 노름 $M_0$ 이고 $L^{p_1}\to L^{q_1}$ 에서 노름 $M_1$ 인 선형 작용소이면, 각 $0\lt\theta\lt 1$ 에서 $T$ 는 $L^{p\_\theta}\to L^{q\_\theta}$ 에서 유계이고 그 노름이 다음을 만족한다.

$$
M\_\theta\le M_0^{1-\theta}M_1^{\theta}
$$

증명의 요지. 단순함수는 각 $L^p$ 에서 조밀하므로 $f$ 와 쌍대 쪽 $g$ 를 단순함수로 둔다. 지수 $1/p_z$ 와 $1/q_z$ 를 복소수 $z$ 로 늘리고 $f_z=\vert f\vert^{p\_\theta/p_z}\mathrm{sgn}\thinspace f$ 와 $g_z=\vert g\vert^{q'\_\theta/q'\_z}\mathrm{sgn}\thinspace g$ 로 두면, $F(z)=\int (Tf_z)\thinspace g_z$ 가 유한 합이므로 $S$ 에서 정칙이고 유계다. $\mathrm{Re}\thinspace z=0$ 에서 $\Vert f_z\Vert\_{L^{p_0}}=\Vert f\Vert\_{L^{p\_\theta}}^{p\_\theta/p_0}$ 이고 $g_z$ 쪽도 같은 꼴이므로, 가정과 Hölder 부등식이 $\vert F\vert\le M_0$ 을 준다. $\mathrm{Re}\thinspace z=1$ 에서 같은 계산이 $M_1$ 을 준다. Phragmén–Lindelöf 원리를 $z=\theta$ 에 쓰고 $g$ 에 대해 상한을 취하면 $\Vert Tf\Vert\_{L^{q\_\theta}}\le M_0^{1-\theta}M_1^\theta\Vert f\Vert\_{L^{p\_\theta}}$ 다.

## Hausdorff–Young 부등식

[Fourier 변환](fourier-transform.md)은 $L^1\to L^\infty$ 에서 노름 $1$ 이고 $L^2\to L^2$ 에서 노름 $1$ 이다. 보간하면 $1\le p\le 2$ 와 켤레지수 $p'$ 에서 $\Vert\hat f\Vert\_{L^{p'}}\le\Vert f\Vert\_{L^p}$ 가 나온다. 두 끝 노름이 $1$ 이므로 보간한 노름도 $1$ 이하다.

## Marcinkiewicz 정리와의 차이

[Marcinkiewicz 보간 정리](marcinkiewicz-interpolation.md)는 가정이 약한 유형 추정이고 준선형 작용소에 쓰이며 결론에서 끝점 지수를 잃는다. Riesz–Thorin 정리는 가정이 강한 유형이라 더 세고 선형 작용소에만 쓰이지만, 상수가 기하평균이라 더 작고 끝점을 잃지 않는다. 극대함수처럼 선형이 아닌 작용소에는 쓸 수 없다.

# 활용

- **Fourier 변환의 유계성.** Hausdorff–Young 부등식이 $p=1$ 과 $p=2$ 사이의 모든 지수에서 변환의 유계성을 준다. $p\gt 2$ 에서는 성립하지 않는다.
- **합성곱 작용소.** $g\in L^r$ 을 고정한 합성곱 $f\mapsto f\ast g$ 가 두 끝 지수에서 유계이므로, 보간이 Young 부등식 $\Vert f\ast g\Vert\_{L^q}\le\Vert f\Vert\_{L^p}\Vert g\Vert\_{L^r}$ 의 일반 지수 꼴을 준다.
- **행렬의 노름.** 유한 차원에서 $\ell^p$ 노름 사이의 작용소 노름을 보간하면, 행 합과 열 합으로 받친 $\ell^1$ 과 $\ell^\infty$ 추정에서 $\ell^2$ 노름의 상계가 나온다. Schur 판정법이 이 보간이다.
- **복소 보간 공간.** 두 Banach 공간 쌍에 이 증명의 구조를 적용해 $\lbrack X_0,X_1\rbrack\_\theta$ 를 만드는 것이 복소 보간이며, Sobolev 공간의 분수 차수를 이 방식으로도 정의한다.

[^1]: M. Riesz, "Sur les maxima des formes bilinéaires et sur les fonctionnelles linéaires", Acta Mathematica **49** (1926), 465–497 가 실수 지수에서 세웠고, G. O. Thorin, "An extension of a convexity theorem due to M. Riesz", Kungliga Fysiografiska Sällskapets i Lund Förhandlingar **8** (1938) 이 복소해석적 증명으로 넓혔다.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [$L^p$ 공간](lp-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #complex_analysis #measure_theory
