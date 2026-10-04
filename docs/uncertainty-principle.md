# 불확정성 원리

# 개요

불확정성 원리는 함수와 그 [Fourier 변환](fourier-transform.md)이 동시에 한 점 주위로 모일 수 없다는 부등식이다. 두 함수의 퍼짐을 분산으로 재면 그 곱이 아래로 유계이고, 하한은 Gauss 함수에서만 등호가 된다.

# 직관

Fourier 변환의 늘림 성질은 $f(ax)$ 의 변환이 $\hat f(\xi/a)/\vert a\vert$ 라고 말한다. $a$ 를 키워 $f$ 를 좁히면 $\hat f$ 가 그만큼 넓어지므로, 한 함수를 늘리고 줄이는 동안에는 두 폭의 곱이 변하지 않는다. 모양을 바꾸면 둘을 함께 좁힐 수 있는지가 남는다.

폭 $\delta$ 의 사각 펄스 $f=\mathbf 1_{\lbrack -\delta,\delta\rbrack}$ 로 해 본다. 변환은 $\hat f(\xi)=\sin(2\pi\delta\xi)/(\pi\xi)$ 이고, 처음 영점이 $\xi=1/(2\delta)$ 에 있으므로 주된 봉우리의 폭이 $1/\delta$ 쯤이다. $\delta$ 를 반으로 줄이면 봉우리가 두 배로 넓어진다. 끝이 꺾이지 않은 Gauss 함수 $e^{-\pi x^2/\delta^2}$ 로 바꿔도 변환이 $\delta e^{-\pi\delta^2\xi^2}$ 라서 폭이 $\delta$ 와 $1/\delta$ 로 갈린다.

폭을 재는 방법을 정하면 이 관찰이 부등식이 된다. $\vert f\vert^2$ 를 질량분포로 보고 그 분산을 $f$ 의 폭으로, $\vert\hat f\vert^2$ 의 분산을 $\hat f$ 의 폭으로 잡는다. 두 분산의 곱에 하한이 있고, 그 하한은 미분을 곱셈으로 바꾸는 성질과 Cauchy–Schwarz 부등식에서 나온다.

# 정의

$f\in L^2(\mathbb R)$ 이고 $\Vert f\Vert\_2=1$ 이라 한다. $xf(x)$ 와 $\xi\hat f(\xi)$ 가 제곱적분가능할 때

$$\mathrm{Var}(f)=\int_{\mathbb R}(x-a)^2\vert f(x)\vert^2\thinspace dx,\qquad a=\int_{\mathbb R}x\vert f(x)\vert^2\thinspace dx$$

를 $f$ 의 **분산**이라 하고, $\hat f$ 의 분산도 같은 식으로 중심 $b=\int\xi\vert\hat f(\xi)\vert^2\thinspace d\xi$ 에 대해 정한다. $\Vert f\Vert\_2=1$ 과 Plancherel 정리에서 $\vert f\vert^2$ 와 $\vert\hat f\vert^2$ 는 둘 다 전체 적분이 $1$ 인 밀도다.

# 성질

## Heisenberg 부등식

**정리.** $f\in L^2(\mathbb R)$, $\Vert f\Vert\_2=1$ 이고 두 분산이 유한하면 다음이 성립한다.[^1]

$$\mathrm{Var}(f)\thinspace\mathrm{Var}(\hat f)\ge\frac{1}{16\pi^2}$$

증명의 요지. 평행이동과 변조가 두 분산의 중심만 옮기고 값을 바꾸지 않으므로 $a=b=0$ 으로 둔다. $f$ 가 매끄럽고 빠르게 감소하는 경우에 부분적분을 쓴다.

$$1=\int_{\mathbb R}\vert f\vert^2\thinspace dx=-\int_{\mathbb R}x\frac{d}{dx}\vert f(x)\vert^2\thinspace dx=-2\thinspace\mathrm{Re}\int_{\mathbb R}x f(x)\overline{f'(x)}\thinspace dx$$

오른쪽에 Cauchy–Schwarz 부등식을 적용하면 $1\le 2\Vert xf\Vert\_2\Vert f'\Vert\_2$ 다. Plancherel 정리와 $\widehat{f'}(\xi)=2\pi i\xi\hat f(\xi)$ 에서 $\Vert f'\Vert\_2=2\pi\Vert\xi\hat f\Vert\_2$ 이므로 $1\le 4\pi\Vert xf\Vert\_2\Vert\xi\hat f\Vert\_2$ 이고, 양변을 제곱하면 부등식이 된다. 일반 $f$ 는 Schwartz 함수로 근사한다.

## 등호의 경우

등호는 Cauchy–Schwarz 부등식에서 $f'$ 가 $xf$ 의 상수배일 때, 곧 $f'(x)=-cxf(x)$ 인 $c\gt 0$ 이 있을 때만 성립한다. 이 미분방정식의 해는 $f(x)=Ae^{-cx^2/2}$ 이므로 하한을 달성하는 것은 Gauss 함수와 그것의 평행이동, 변조, 늘림뿐이다. 늘림 $c$ 를 바꾸면 두 분산이 서로 반비례로 움직이고 곱은 $1/(16\pi^2)$ 에 머문다.

## 받침이 유한한 경우

**정리.** $f\in L^2(\mathbb R)$ 가 $0$ 이 아니면 $f$ 와 $\hat f$ 의 받침이 모두 유한한 구간에 들 수 없다.

증명의 요지. $\hat f$ 의 받침이 유계이면 $f(x)=\int\hat f(\xi)e^{2\pi i\xi x}\thinspace d\xi$ 의 적분 구간이 유한하므로 $f$ 가 복소평면 전체로 해석적으로 확장된다. [정칙함수](holomorphic-functions.md)의 영점 집합은 고립되어 있으므로, $f$ 가 어떤 구간에서 $0$ 이면 $f\equiv 0$ 이다.

# 활용

- **양자역학의 위치와 운동량.** 상태함수 $\psi$ 의 $\vert\psi\vert^2$ 가 위치의 확률밀도이고 $\vert\hat\psi\vert^2$ 가 운동량의 확률밀도이므로, 두 표준편차의 곱이 $1/(4\pi)$ 이상이라는 것이 Heisenberg 부등식이다. 상수에 $\hbar$ 가 붙는 꼴은 변환의 규격을 바꾼 것이다.
- **대역제한과 시간제한.** 받침이 유한한 경우의 정리는 유한한 시간 동안만 켜지는 신호가 유한한 주파수 대역에 갇힐 수 없다는 뜻이다. 신호를 유한한 구간으로 자르면 그 변환이 넓은 주파수 범위에 퍼진다.
- **신호의 분해.** 창의 폭을 고정한 변환은 좁은 시간 구간과 좁은 주파수 구간을 함께 볼 수 없으므로, 폭을 주파수에 따라 바꾸는 분해를 쓴다. [Fourier 변환](fourier-transform.md)의 늘림 성질이 그 교환비를 준다.

[^1]: Elias M. Stein, Rami Shakarchi, *Fourier Analysis: An Introduction*, Princeton University Press, 2003, 5 장 4 절. 부등식과 등호 조건의 증명이 여기 있다.

# 연관 문서

## 선수지식

- [Fourier 변환](fourier-transform.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
