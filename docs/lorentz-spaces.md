# Lorentz 공간

# 개요

**Lorentz 공간(Lorentz space)** 은 함수의 크기를 값이 큰 순서로 다시 늘어놓은 함수로 재고, 지수 $p$ 하나에 둘째 지수 $q$ 를 더해 $L^p$ 공간을 더 잘게 나눈 함수공간이다. 구간 $(0,1)$ 위의 $x^{-1/2}$ 과 $x^{-1/2}(1+\log(1/x))^{-1/2}$ 은 둘 다 $p\lt 2$ 인 $L^p$ 에 들고 $L^2$ 에는 들지 않는다. $L^p$ 공간만으로는 두 함수가 구별되지 않는다.

Lorentz 공간은 두 함수가 지수 $2$ 의 경계를 넘는 정도를 둘째 지수로 가른다. 앞의 함수는 $L^{2,\infty}$ 에만 들고, 뒤의 함수는 $q\gt 2$ 인 모든 $L^{2,q}$ 에 든다.

# 직관

$(0,1)$ 위의 함수 $g_a(x)=x^{-1/2}(1+\log(1/x))^{-a}$ 을 본다. $a=0$ 이면 $x^{-1/2}$ 이다. 제곱의 적분은 $u=\log(1/x)$ 로 바꾸어 다음이 된다.

$$
\int_0^1g_a(x)^2\thinspace dx=\int_0^1\frac{1}{x(1+\log(1/x))^{2a}}\thinspace dx=\int_0^\infty\frac{du}{(1+u)^{2a}}
$$

이 적분은 $a\gt 1/2$ 일 때만 유한하다. $a=1$ 이면 $g_1\in L^2$ 이고, $a=1/2$ 과 $a=0$ 이면 둘 다 $L^2$ 에 들지 않는다.

적분을 $\int_0^1(x^{1/2}g_a(x))^2\thinspace dx/x$ 로 다시 적으면 $x^{1/2}g_a(x)=(1+\log(1/x))^{-a}$ 를 무게 $dx/x$ 로 제곱해 적분한 것이다. 제곱 대신 $q$ 제곱을 쓰면 같은 치환으로 적분은 $aq\gt 1$ 일 때 유한하다. $a=1/2$ 이면 $q\gt 2$ 에서, $a=0$ 이면 어떤 $q\lt\infty$ 에서도 유한하지 않고 상한 $\sup_x x^{1/2}g_0(x)=1$ 만 유한하다. 지수 $q$ 가 $L^2$ 의 경계 근처를 더 잘게 나눈다.

# 정의

## 감소 재배열

[실보간](real-interpolation.md) 문서의 **감소 재배열(decreasing rearrangement)** $f^\ast(t)=\inf\lbrace\lambda\gt 0:d_f(\lambda)\le t\rbrace$ 을 쓴다. $d_f$ 는 [Marcinkiewicz 보간 정리](marcinkiewicz-interpolation.md) 문서의 분포함수다. $f^\ast$ 는 $(0,\infty)$ 위의 감소함수이고 모든 $\lambda$ 에서 $d_{f^\ast}(\lambda)=d_f(\lambda)$ 다. 직관 절의 $g_a$ 는 $(0,1)$ 에서 감소하므로 $g_a^\ast=g_a$ 다.

## Lorentz 노름

$1\le p\lt\infty$ 와 $1\le q\lt\infty$ 에서 가측함수 $f$ 의 **Lorentz 노름(Lorentz quasinorm)** 은 다음이다.

$$
\Vert f\Vert\_{L^{p,q}}=\Bigl(\int_0^\infty\bigl(t^{1/p}f^\ast(t)\bigr)^q\frac{dt}{t}\Bigr)^{1/q}
$$

$q=\infty$ 이면 $\Vert f\Vert\_{L^{p,\infty}}=\sup\_{t\gt 0}t^{1/p}f^\ast(t)$ 로 둔다. 이 값이 유한한 $f$ 전체를 $L^{p,q}$ 라 한다[^1]. 이 값은 삼각부등식을 상수배로만 만족하므로 이름에 준노름(quasinorm)을 쓴다.

직관 절의 계산은 $g_a\in L^{2,q}$ 가 $aq\gt 1$ 과 동치라는 것이다. $g_0=x^{-1/2}$ 은 $L^{2,\infty}$ 에 들고 $q\lt\infty$ 인 $L^{2,q}$ 에는 들지 않는다.

# 성질

## Lᵖ 와 약한 Lᵖ

$q=p$ 이면 $\Vert f\Vert\_{L^{p,p}}^p=\int_0^\infty f^\ast(t)^p\thinspace dt=\Vert f\Vert\_{L^p}^p$ 이다. $f^\ast$ 와 $f$ 의 분포함수가 같기 때문이다.

$q=\infty$ 이면 $t^{1/p}f^\ast(t)$ 의 상한은 $\lambda\thinspace d_f(\lambda)^{1/p}$ 의 상한과 같다. 그러므로 $L^{p,\infty}$ 는 $d_f(\lambda)\le C\lambda^{-p}$ 인 함수의 공간, 곧 약한 $L^p$ 공간(weak Lᵖ space)이다.

## 둘째 지수에 대한 포함

정리. $q_0\le q_1$ 이면 $L^{p,q_0}\subset L^{p,q_1}$ 이고 $\Vert f\Vert\_{L^{p,q_1}}\le C\Vert f\Vert\_{L^{p,q_0}}$ 이다[^1].

증명의 요지. $f^\ast$ 가 감소하므로 다음이 성립한다.

$$
\Vert f\Vert\_{L^{p,q_0}}^{q_0}\ge f^\ast(t)^{q_0}\int_0^ts^{q_0/p}\frac{ds}{s}=\frac p{q_0}\bigl(t^{1/p}f^\ast(t)\bigr)^{q_0}
$$

그러므로 $\Vert f\Vert\_{L^{p,\infty}}\le(q_0/p)^{1/q_0}\Vert f\Vert\_{L^{p,q_0}}$ 이다. $q_1\lt\infty$ 이면 피적분함수의 $q_1$ 제곱을 $q_0$ 제곱과 상한의 $q_1-q_0$ 제곱의 곱으로 누른다.

## 노름화 가능성

정리. $1\lt p\lt\infty$, $1\le q\le\infty$ 이면 $f^\ast$ 를 평균 $f^{\ast\ast}(t)=\tfrac1t\int_0^tf^\ast(s)\thinspace ds$ 로 바꾼 값은 노름이고 원래 준노름과 동치다. 그러므로 $L^{p,q}$ 는 [Banach 공간](banach-spaces.md)이다[^1].

증명의 요지. $f^{\ast\ast}(t)$ 는 크기 $t$ 인 집합 위의 $\vert f\vert$ 의 평균의 상한이므로 $f$ 에 대해 삼각부등식을 만족한다. $f^\ast\le f^{\ast\ast}$ 는 $f^\ast$ 가 감소하기 때문이고, 반대 방향은 $p\gt 1$ 에서 [Hardy 부등식](hardy-inequality.md)이 준다.

$p=1$ 에서 $L^{1,\infty}$ 는 어느 노름과도 동치가 아니다. $\mathbb R$ 위의 $f_k(x)=1/\vert x-k\vert$ 는 $d\_{f_k}(\lambda)=2/\lambda$ 이므로 모두 준노름이 $2$ 다. 평균 $\tfrac1N\sum_{k=1}^Nf_k$ 은 구간 $\lbrack 1,N\rbrack$ 위에서 조화수 $H_N=\sum_{k=1}^N1/k$ 의 상수배를 $N$ 으로 나눈 값 이상이므로 준노름이 $\log N$ 의 상수배 이상이다. 노름이었다면 평균의 노름은 $2$ 의 상수배 이하여야 한다.

## Hölder 부등식과 쌍대성

O'Neil 의 [Hölder 부등식](holder-inequality.md)(O'Neil's inequality). $1/r=1/p_0+1/p_1$ 이고 $1/s=1/q_0+1/q_1$ 이면 다음이 성립한다[^2].

$$
\Vert fg\Vert\_{L^{r,s}}\le C\Vert f\Vert\_{L^{p_0,q_0}}\Vert g\Vert\_{L^{p_1,q_1}}
$$

$1\lt p\lt\infty$, $1\le q\lt\infty$ 이면 $L^{p,q}$ 의 [쌍대 공간](dual-space.md)은 $L^{p',q'}$ 이다. 여기서 $p'$, $q'$ 은 켤레 지수다[^3].

## 실보간 공간으로서의 Lorentz 공간

$1\le p_0\lt p_1\lt\infty$ 와 $0\lt\theta\lt 1$, $1/p=(1-\theta)/p_0+\theta/p_1$ 에서 다음이 성립한다. 실보간 문서의 Peetre 공식과 재반복 정리에서 나온다.

$$
(L^{p_0,q_0},L^{p_1,q_1})\_{\theta,q}=L^{p,q}
$$

등식의 오른쪽은 $q_0$, $q_1$ 에 의존하지 않는다. 끝점에서 약한 유형 추정만 아는 선형사상도 사이 지수에서 모든 $q$ 의 $L^{p,q}$ 사이의 유계 사상이 된다.

# 활용

- 거듭제곱 함수. $\mathbb R^n$ 위의 $\vert x\vert^{-n/r}$ 은 어느 $L^p$ 에도 들지 않지만 $L^{r,\infty}$ 에 든다. [Hardy–Littlewood–Sobolev 부등식](hardy-littlewood-sobolev-inequality.md)은 이 핵과의 합성곱을 O'Neil 의 합성곱 부등식 $L^p\ast L^{r,\infty}\subset L^{t}$ 로 다루어 증명할 수 있다. 지수는 $1+1/t=1/p+1/r$ 이다.
- 약한 유형 추정. [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)는 $L^1$ 에서 $L^{1,\infty}$ 로 유계이고, 이 끝점 추정이 Marcinkiewicz 보간 정리의 가정이다.
- Sobolev 매장의 끝점. $1\le p\lt n$ 과 $1/p^\ast=1/p-1/n$ 에서 $W^{1,p}(\mathbb R^n)\subset L^{p^\ast,p}$ 이다. $L^{p^\ast,p}$ 는 $L^{p^\ast}$ 보다 작으므로 Sobolev 매장 정리보다 강하다.
- 유체 방정식. $\mathbb R^3$ 위의 속도장 $\vert x\vert^{-1}$ 의 크기는 $L^{3,\infty}$ 에 들고, 이 공간은 [Navier–Stokes 방정식](navier-stokes-equations.md)의 척도 변환 $u(x)\mapsto\lambda u(\lambda x)$ 에서 노름이 바뀌지 않는다. 그래서 자기 닮은 해를 다루는 공간으로 쓴다.

[^1]: E. M. Stein, G. Weiss, *Introduction to Fourier Analysis on Euclidean Spaces*, Princeton University Press (1971), Chapter V §3. 처음 정의는 G. G. Lorentz, "Some new functional spaces", Annals of Mathematics **51** (1950), 37–55 다.

[^2]: R. O'Neil, "Convolution operators and L(p,q) spaces", Duke Mathematical Journal **30** (1963), 129–142.

[^3]: R. A. Hunt, "On L(p,q) spaces", L'Enseignement Mathématique **12** (1966), 249–276.

# 연관 문서

## 선수지식

- [실보간](real-interpolation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #measure_theory #analysis
