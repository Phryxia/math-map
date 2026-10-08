# 극대 특이적분

# 개요

[Calderón–Zygmund 이론](calderon-zygmund-theory.md)은 특이적분 작용소를 주값 극한으로 정의하고 그 작용소의 $L^p$ 유계성을 준다. 그 극한이 어느 점에서 존재하는지는 그 정리가 말하지 않는다.

극대 특이적분은 절단 적분들의 절댓값의 상한이다. Cotlar 부등식이 이 상한을 [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md) 두 개로 받치고, 그 추정에서 주값 극한이 거의 모든 점에서 존재한다는 결론이 나온다.

# 직관

$K$ 가 Calderón–Zygmund 핵일 때 원점 근방을 잘라낸 적분을 본다.

$$
T\_\varepsilon f(x)=\int\_{\vert x-y\vert\gt \varepsilon}K(x-y)\thinspace f(y)\thinspace dy
$$

$f\in L^p$ 에서 $\varepsilon\to 0^+$ 일 때 이 값이 수렴하는지 묻는다. $f$ 가 연속미분가능하고 받침이 콤팩트하면 수렴한다. 구면 위에서 핵이 상쇄하므로 두 절단의 차를 $f$ 의 Lipschitz 상수와 절단 반지름의 곱으로 받칠 수 있다. 이런 함수는 $L^p$ 에서 조밀하므로, 공 평균의 수렴을 보일 때처럼 남은 조각의 절단 적분들을 그 조각의 노름으로 받치려 한다.

공 평균에서 그 자리를 맡은 것이 극대함수 $Mf$ 였다. 절단 적분에는 같은 것을 쓸 수 없다.

$$
\vert T\_\varepsilon f(x)\vert\le\int\_{\vert x-y\vert\gt \varepsilon}\vert K(x-y)\vert\thinspace\vert f(y)\vert\thinspace dy
$$

오른쪽 핵은 $\vert z\vert^{-n}$ 크기이고 그 적분은 무한대 근방에서 발산한다. 그래서 오른쪽을 $Mf(x)$ 의 상수배로 받치는 계산이 나오지 않는다. 근사 항등원의 핵은 꼬리가 줄어 그 추정이 되지만 Calderón–Zygmund 핵은 줄지 않는다.

절댓값을 씌운 자리에서 핵의 상쇄를 버렸으므로 받칠 수 없다. 상쇄를 담은 양은 적분을 이미 끝낸 $Tf$ 다. 그래서 $T\_\varepsilon f(x)$ 를 $Mf(x)$ 와 $M(Tf)(x)$ 둘로 받친다.

# 정의

## 극대 특이적분 작용소

$K$ 가 Calderón–Zygmund 핵일 때 절단 적분 $T\_\varepsilon$ 의 절댓값의 상한을 **극대 특이적분 작용소**라 한다.

$$
T^\ast f(x)=\sup\_{\varepsilon\gt 0}\vert T\_\varepsilon f(x)\vert
$$

$\varepsilon$ 마다 $T\_\varepsilon$ 은 절대적분 가능한 핵의 합성곱이므로 $f\in L^p$ 에서 각 점의 값이 정의된다. 상한을 취하므로 $T^\ast$ 는 선형이 아니고 $T^\ast(f+g)\le T^\ast f+T^\ast g$ 를 만족하는 준선형 작용소다.

## 절단의 진동량

$f\in L^p$ 와 $x$ 에 대해 다음 값을 **진동량**이라 한다.

$$
Of(x)=\limsup\_{\varepsilon\to 0^+}T\_\varepsilon f(x)-\liminf\_{\varepsilon\to 0^+}T\_\varepsilon f(x)
$$

$Of(x)=0$ 은 $x$ 에서 주값 극한이 존재한다는 것과 같다. $Of\le 2\thinspace T^\ast f$ 이고 $O$ 도 준선형이다.

# 성질

## Cotlar 부등식

$K$ 가 Calderón–Zygmund 핵이고 $T$ 가 $L^2(\mathbb R^n)$ 에서 유계이면, 상수 $C$ 가 있어 모든 $f\in L^2$ 와 모든 $x$ 에서 다음이 성립한다[^1].

$$
T^\ast f(x)\le C\thinspace\bigl(M(Tf)(x)+Mf(x)\bigr)
$$

증명의 요지. $x$ 와 $\varepsilon$ 을 고정하고 $B=B\_\varepsilon(x)$ 에서 $f$ 를 가른다. $f_1=f\mathbf 1_B$ 와 $f_2=f-f_1$ 라 두면 절단이 $B$ 밖만 보므로 $T\_\varepsilon f(x)=Tf_2(x)$ 다. $z\in B\_{\varepsilon/2}(x)$ 에서 $\vert x-z\vert$ 가 $f_2$ 의 받침까지의 거리의 절반 이하이므로, 핵의 차를 Hörmander 조건으로 받치면 다음이 나온다.

$$
\vert Tf_2(x)-Tf_2(z)\vert\le C\thinspace A\thinspace Mf(x)
$$

따라서 $\vert T\_\varepsilon f(x)\vert\le\vert Tf(z)\vert+\vert Tf_1(z)\vert+C\thinspace A\thinspace Mf(x)$ 이고, 앞의 두 항이 동시에 작은 $z$ 가 $B\_{\varepsilon/2}(x)$ 안에 있음을 보이면 된다. $\vert Tf(z)\vert\gt 2^{n+1}M(Tf)(x)$ 인 $z$ 의 집합은 Chebyshev 부등식으로 $\vert B\_{\varepsilon/2}\vert$ 의 절반 이하다. $\vert Tf_1(z)\vert\gt\lambda$ 인 $z$ 의 집합은 약한 $(1,1)$ 추정으로 $C\lambda^{-1}\Vert f_1\Vert\_{L^1}$ 이하이고 $\Vert f_1\Vert\_{L^1}\le\vert B\vert\thinspace Mf(x)$ 이므로, $\lambda$ 를 $Mf(x)$ 의 큰 상수배로 잡으면 이 집합도 절반 이하다. 두 집합의 부피 합이 $\vert B\_{\varepsilon/2}\vert$ 보다 작으므로 둘 다 피하는 $z$ 가 있다.

## $L^p$ 유계성

$T$ 가 $L^2$ 유계인 Calderón–Zygmund 작용소이면 $T^\ast$ 는 각 $1\lt p\lt\infty$ 에서 $L^p(\mathbb R^n)$ 유계다.

$$
\Vert T^\ast f\Vert\_{L^p}\le C\_{n,p}\thinspace\Vert f\Vert\_{L^p}
$$

Cotlar 부등식의 오른쪽 두 항을 각각 받친다. $Mf$ 는 극대함수의 $L^p$ 유계성으로, $M(Tf)$ 는 같은 유계성과 Calderón–Zygmund 정리의 $\Vert Tf\Vert\_{L^p}\le C\Vert f\Vert\_{L^p}$ 를 이어서 받친다.

## 약한 유형 $(1,1)$ 추정

$T^\ast$ 는 약한 유형 $(1,1)$ 이다.

$$
\vert\lbrace x:T^\ast f(x)\gt \lambda\rbrace\vert\le\frac{C}{\lambda}\Vert f\Vert\_{L^1}
$$

이 추정은 Cotlar 부등식에서 나오지 않는다. $f\in L^1$ 에서 $Tf$ 는 $L^1$ 에 들지 않으므로 $M(Tf)$ 의 분포를 $\Vert f\Vert\_{L^1}$ 로 잴 수 없다. 대신 Calderón–Zygmund 분해를 $T^\ast$ 에 직접 적용한다. 좋은 부분은 $L^2$ 유계성으로, 나쁜 부분은 각 조각의 적분이 $0$ 이라는 것과 Hörmander 조건으로 처리하고, 그 계산이 절단 반지름에 무관한 상계를 주므로 상한을 취해도 유지된다[^2].

## 주값의 각점 존재

$1\le p\lt\infty$ 이고 $f\in L^p(\mathbb R^n)$ 이면 거의 모든 $x$ 에서 주값 극한 $Tf(x)$ 가 존재한다.

증명의 요지. 연속미분가능하고 받침이 콤팩트한 $g$ 를 $\Vert f-g\Vert\_{L^p}\lt\varepsilon$ 으로 잡는다. $Og=0$ 이므로 준선형성에서 $Of\le 2\thinspace T^\ast(f-g)$ 다. $T^\ast$ 의 약한 추정이 $\vert\lbrace Of\gt \lambda\rbrace\vert\le C\lambda^{-p}\varepsilon^p$ 를 주고 $\varepsilon$ 이 임의이므로 그 집합은 영집합이다. $\lambda$ 를 $1/k$ 로 두고 가산 합집합을 취하면 $Of=0$ 이 거의 모든 점에서 성립한다.

# 활용

- **주값 적분의 정의.** Calderón–Zygmund 이론은 특이적분 작용소를 절단의 극한으로 정의한다. 그 정의가 거의 모든 점에서 값을 갖는 함수를 내놓는 근거가 위의 각점 존재 정리다.
- **Hilbert 변환의 경계값.** $n=1$ 과 $K(z)=1/(\pi z)$ 에서 절단 Hilbert 변환의 상한이 $L^p$ 유계이므로, $f\in L^p$ 의 Hilbert 변환이 거의 모든 점에서 존재한다. 상반평면에서 조화 공액함수가 실축에 거의 모든 점에서 경계값을 갖는다는 것이 이것이다.
- **에르고딕 Hilbert 변환.** 측도 보존 변환의 궤도에서 $f(S^kx)/k$ 를 $k\ne 0$ 에 대해 더한 대칭 부분합이 거의 모든 점에서 수렴한다. [Birkhoff 에르고딕 정리](ergodic-theorem.md)의 극대 부등식과 Cotlar 부등식이 같은 구조이고, Cotlar 가 두 정리를 한 틀로 다룬 자리가 여기다.
- **극대 작용소 방법.** 각점 수렴을 조밀한 부분집합에서의 수렴과 극대 작용소의 약한 추정 둘로 가르는 방식이 여러 수렴 정리의 틀이다. Fourier 급수의 각점 수렴을 Carleson 연산자의 유계성으로 얻는 증명이 같은 구조다.

[^1]: M. Cotlar, "A unified theory of Hilbert transforms and ergodic theorems", Revista Matemática Cuyana **1** (1955), 105–167.

[^2]: E. M. Stein, *Singular Integrals and Differentiability Properties of Functions*, Princeton University Press (1970), Chapter II, §4.

# 연관 문서

## 선수지식

- [Calderón–Zygmund 이론](calderon-zygmund-theory.md)
- [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #measure_theory
