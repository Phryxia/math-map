# Calderón–Zygmund 이론

# 개요

[Fourier 변환](fourier-transform.md)은 $L^2$ 노름을 보존하므로, 심볼을 곱하는 작용소의 $L^2$ 유계성은 심볼이 유계인지만 보면 판정된다. $L^p$ 노름은 Fourier 변환으로 보존되지 않아 같은 판정을 쓸 수 없다.

Calderón–Zygmund 이론은 핵이 $\vert z\vert^{-n}$ 크기이고 평행이동에 대해 완만하게 변하는 작용소에 대해, $L^2$ 유계성 하나에서 $1\lt p\lt\infty$ 전체의 유계성을 끌어내는 정리다. 핵의 크기만 보면 적분이 발산하므로 크기 대신 핵의 차를 적분하는 조건을 쓴다.

# 직관

$\mathbb R^n$ 에서 $-\Delta u=f$ 의 해의 이차 도함수 크기를 $f$ 로 재려 한다. 양변을 Fourier 변환하면 $\vert\xi\vert^2\hat u=\hat f$ 이므로 이차 도함수의 변환이 다음과 같다.

$$
\widehat{\partial_i\partial_j u}(\xi)=-\xi_i\xi_j\hat u(\xi)=-\frac{\xi_i\xi_j}{\vert\xi\vert^2}\thinspace\hat f(\xi)
$$

곱해지는 양은 모든 $\xi\ne 0$ 에서 절댓값이 $1$ 이하다. Plancherel 정리가 $\Vert\partial_i\partial_j u\Vert\_{L^2}\le\Vert f\Vert\_{L^2}$ 를 준다.

$f$ 가 $L^3$ 에 들 때 같은 추정을 얻으려 하면 이 계산이 막힌다. Fourier 변환은 $L^3$ 노름을 바꾸므로 심볼의 크기에서 $\Vert\partial_i\partial_j u\Vert\_{L^3}$ 를 읽을 수 없다. 변환을 되돌려 작용소를 적분으로 적으면 핵이 나온다.

$$
\partial_i\partial_j u(x)=\int\_{\mathbb R^n}K(x-y)\thinspace f(y)\thinspace dy,\qquad K(z)=c_n\thinspace\frac{n\thinspace z_iz_j-\delta\_{ij}\vert z\vert^2}{\vert z\vert^{n+2}}
$$

$\vert K(z)\vert$ 는 $\vert z\vert^{-n}$ 크기이고 $\vert z\vert^{-n}$ 의 적분은 원점과 무한대 양쪽에서 발산한다. 따라서 $\vert Tf\vert$ 를 $\vert K\vert$ 와 $\vert f\vert$ 의 합성곱으로 받치는 계산은 쓸 수 없고, 쓸 수 있는 것은 $K$ 가 구면 위에서 부호를 바꾸어 생기는 상쇄다. 이 상쇄는 $f$ 가 한 자리에서 일정할 때 가장 크게 작동하므로, 평균이 $\lambda$ 를 넘는 정육면체들을 모아 그 안에서는 각 정육면체의 평균을 뺀 조각을 보고 그 밖에서는 $f$ 가 $\lambda$ 이하라는 것을 써서 $L^2$ 추정으로 넘긴다.

# 정의

## Calderón–Zygmund 핵

$K:\mathbb R^n\setminus\lbrace 0\rbrace\to\mathbb C$ 가 어떤 $A\gt 0$ 에 대해 다음 둘을 만족하면 **Calderón–Zygmund 핵**이라 한다.

$$
\vert K(z)\vert\le A\thinspace\vert z\vert^{-n}
$$

$$
\int\_{\vert z\vert\gt 2\vert y\vert}\vert K(z-y)-K(z)\vert\thinspace dz\le A\qquad (y\ne 0)
$$

둘째를 **Hörmander 조건**이라 한다[^1]. $K$ 가 원점 밖에서 미분가능하고 $\vert\nabla K(z)\vert\le A\vert z\vert^{-n-1}$ 이면 평균값 정리로 Hörmander 조건이 따라온다.

## 특이적분 작용소

$K$ 가 Calderón–Zygmund 핵일 때 주값으로 정의한 다음 작용소를 **특이적분 작용소**라 한다.

$$
Tf(x)=\lim\_{\varepsilon\to 0^+}\int\_{\vert x-y\vert\gt \varepsilon}K(x-y)\thinspace f(y)\thinspace dy
$$

$K$ 가 절대적분 가능하지 않으므로 극한 없이 적분한 값은 정의되지 않는다.

## Calderón–Zygmund 분해

$f\in L^1(\mathbb R^n)$ 과 $\lambda\gt 0$ 에 대해, 내부가 서로 겹치지 않는 정육면체 열 $\lbrace Q_j\rbrace$ 가 있어 각 $j$ 에서 다음이 성립한다.

$$
\lambda\lt \frac{1}{\vert Q_j\vert}\int\_{Q_j}\vert f\vert\thinspace dx\le 2^n\lambda
$$

$\Omega=\bigcup_j Q_j$ 라 두면 $\Omega$ 밖의 거의 모든 점에서 $\vert f(x)\vert\le\lambda$ 이고 $\vert\Omega\vert\le\lambda^{-1}\Vert f\Vert\_{L^1}$ 이다. 구성은 변의 길이가 큰 정육면체부터 시작해 평균이 $\lambda$ 이하인 것을 $2^n$ 등분하며 내려가고, 평균이 처음 $\lambda$ 를 넘는 자리에서 멈추는 것이다. 멈춘 정육면체의 부모는 평균이 $\lambda$ 이하이고 부피가 $2^n$ 배이므로 위 상계가 나온다.

# 성질

## Calderón–Zygmund 정리

$K$ 가 Calderón–Zygmund 핵이고 $T$ 가 $L^2(\mathbb R^n)$ 에서 유계이면, $T$ 는 각 $1\lt p\lt\infty$ 에서 $L^p(\mathbb R^n)$ 유계이고 $p=1$ 에서는 약한 추정이 성립한다[^2].

$$
\vert\lbrace x:\vert Tf(x)\vert\gt \lambda\rbrace\vert\le\frac{C}{\lambda}\Vert f\Vert\_{L^1}
$$

증명의 요지. 약한 추정을 보이고 $L^2$ 유계성과 Marcinkiewicz 보간 정리로 $1\lt p\lt 2$ 를 얻는다. $2\lt p\lt\infty$ 는 핵 $K^\ast(z)=\overline{K(-z)}$ 를 가진 쌍대 작용소가 같은 두 조건을 만족하므로 $L^{p'}$ 결과의 쌍대로 나온다. 약한 추정은 $\lambda$ 에서 분해를 잡아 $f=g+b$ 로 가르는 데서 나온다. 좋은 부분 $g$ 는 $\Omega$ 밖에서 $f$ 와 같고 각 $Q_j$ 에서 평균값을 갖는 함수이고, 나쁜 부분 $b=\sum_j b_j$ 는 각 $Q_j$ 에 받침을 갖고 적분이 $0$ 인 조각들의 합이다. $g$ 는 $\vert g\vert\le 2^n\lambda$ 와 $\Vert g\Vert\_{L^1}\le\Vert f\Vert\_{L^1}$ 에서 $\Vert g\Vert\_{L^2}^2\le 2^n\lambda\Vert f\Vert\_{L^1}$ 이므로 $L^2$ 유계성이 $g$ 쪽 추정을 준다. $b_j$ 는 적분이 $0$ 이므로 $Q_j$ 의 중심 $y_j$ 를 써서 $Tb_j(x)=\int(K(x-y)-K(x-y_j))b_j(y)\thinspace dy$ 로 적을 수 있고, $2Q_j$ 밖에서 이 적분을 Hörmander 조건으로 받치면 $\Vert Tb\Vert\_{L^1(\mathbb R^n\setminus 2\Omega)}\le A\Vert f\Vert\_{L^1}$ 이다. $2\Omega$ 자체의 부피는 $\vert\Omega\vert$ 의 상계로 처리한다.

## Hilbert 변환과 Riesz 변환

$n=1$ 에서 $K(z)=1/(\pi z)$ 는 Calderón–Zygmund 핵이고 그 특이적분 작용소가 **Hilbert 변환** $H$ 다. 심볼은 $-i\thinspace\mathrm{sgn}\thinspace\xi$ 이므로 Plancherel 정리가 $L^2$ 유계성을 준다. $\mathbb R^n$ 에서 $j$ 번째 **Riesz 변환**은 핵 $c_n z_j\vert z\vert^{-n-1}$ 의 작용소이고 심볼은 $-i\xi_j/\vert\xi\vert$ 다. 두 경우 심볼이 유계이므로 정리의 가정이 채워지고, 직관 절의 핵 $K$ 도 Riesz 변환 둘의 합성이다.

## $L^1$ 과 $L^\infty$ 에서의 비유계성

$p=1$ 과 $p=\infty$ 는 정리의 범위 밖이고, 그 두 자리에서 유계성은 성립하지 않는다. $f=\mathbf 1\_{\lbrack 0,1\rbrack}$ 의 Hilbert 변환은 다음과 같다.

$$
Hf(x)=\frac{1}{\pi}\ln\left\vert\frac{x}{x-1}\right\vert
$$

$x\to 0$ 과 $x\to 1$ 에서 로그가 발산하므로 $Hf\notin L^\infty$ 이고, $x\to\infty$ 에서 $Hf(x)$ 가 $1/(\pi x)$ 와 같은 크기이므로 $Hf\notin L^1$ 이다. $f$ 는 $L^1\cap L^\infty$ 에 든다.

## 유계 평균 진동

$T$ 가 $L^\infty$ 를 보내는 자리는 $L^\infty$ 가 아니라 **BMO**(bounded mean oscillation)다. $f$ 가 BMO 에 든다는 것은 모든 정육면체 $Q$ 에서 평균 $f_Q$ 를 뺀 것의 평균 절댓값이 유계라는 뜻이다.

$$
\sup_Q\frac{1}{\vert Q\vert}\int_Q\vert f-f_Q\vert\thinspace dx\lt \infty
$$

$L^\infty\subset\mathrm{BMO}$ 이고 $\ln\vert x\vert$ 가 BMO 에 들어 포함이 진부분이다. John–Nirenberg 부등식이 BMO 함수의 분포에 지수 감쇠를 주며[^3], $T$ 의 $L^\infty\to\mathrm{BMO}$ 유계성과 이 부등식을 보간하면 $p$ 가 큰 쪽의 $L^p$ 유계성을 다시 얻는다.

# 활용

- **타원형 정칙성의 $L^p$ 판.** $\Delta u=f$ 와 $f\in L^p$ 에서 $\Vert D^2u\Vert\_{L^p}\le C_p\Vert f\Vert\_{L^p}$ 가 나온다. 직관 절의 핵이 Calderón–Zygmund 핵이므로 정리를 그대로 쓴 것이고, [타원형 정칙성](elliptic-regularity.md)의 $H^k$ 판과 같은 두 계단 구조를 갖는다.
- **Sobolev 노름의 동등 표현.** Riesz 변환 $R_j$ 가 $\partial_j$ 를 $\vert\nabla\vert$ 로 나눈 작용소이므로, $1\lt p\lt\infty$ 에서 $\Vert\partial_j f\Vert\_{L^p}$ 를 $\vert\nabla\vert f$ 의 $L^p$ 노름으로 바꿔 쓸 수 있다. [Sobolev 공간](sobolev-spaces.md)의 노름을 분수 차수로 확장할 때 쓰는 동등성이 이것이다.
- **유사미분작용소.** 심볼이 $\xi$ 에 대해 완만하게 변하는 작용소의 핵이 Calderón–Zygmund 조건을 만족하므로, 계수가 변하는 타원형 연산자의 $L^p$ 추정이 상수계수 경우와 같은 형태로 나온다.
- **특이적분의 선험적 추정.** 비선형 방정식을 선형 부분과 나머지로 가르고 선형 부분의 역작용소에 $L^p$ 유계성을 쓰는 방식이 준선형 타원형 방정식과 Navier–Stokes 방정식의 국소 해 구성에 쓰인다.

[^1]: L. Hörmander, "Estimates for translation invariant operators in $L^p$ spaces", Acta Mathematica **104** (1960), 93–140.

[^2]: A. P. Calderón, A. Zygmund, "On the existence of certain singular integrals", Acta Mathematica **88** (1952), 85–139.

[^3]: F. John, L. Nirenberg, "On functions of bounded mean oscillation", Communications on Pure and Applied Mathematics **14** (1961), 415–426.

# 연관 문서

## 선수지식

- [Fourier 변환](fourier-transform.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #measure_theory
