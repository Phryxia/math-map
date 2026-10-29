# 복소수

# 개요

**복소수(complex number)** 는 [실수](real-numbers.md) 두 개의 쌍 $a+bi$ 로 적고, $i^2=-1$ 이라는 규칙 하나를 더해 사칙연산을 하는 수다. 삼차방정식 $x^3=15x+4$ 의 근은 $4$ 인데, 삼차방정식의 근의 공식에 넣으면 계산 도중에 $\sqrt{-121}$ 이 나와 실수만으로는 계산을 이어 갈 수 없다. $\sqrt{-1}$ 을 기호 $i$ 로 두고 보통의 대수 규칙대로 계산하면 $i$ 가 서로 지워지고 실근 $4$ 가 나온다.

# 직관

삼차방정식 $x^3=px+q$ 의 근의 공식(Cardano 공식, Cardano's formula)은 다음이다.

$$
x=\sqrt[3]{\frac q2+\sqrt{\frac{q^2}4-\frac{p^3}{27}}}+\sqrt[3]{\frac q2-\sqrt{\frac{q^2}4-\frac{p^3}{27}}}
$$

$x^3=15x+4$ 는 $x=4$ 에서 $64=60+4$ 로 성립한다. 그런데 $p=15$, $q=4$ 를 넣으면 제곱근 안이 $4-125=-121$ 이다. 음수의 제곱근이 실수에 없으므로 공식은 여기서 멈춘다.

실수에 없어서 멈췄으니, $\sqrt{-1}$ 을 기호 $i$ 로 두고 $i^2=-1$ 만 지키며 다항식처럼 계산한다. 그러면 $\sqrt{-121}=11i$ 이고 공식은 $\sqrt[3]{2+11i}+\sqrt[3]{2-11i}$ 다. $(2+i)^3=8+12i+6i^2+i^3=8+12i-6-i=2+11i$ 이므로 첫째 세제곱근은 $2+i$ 이고, 같은 계산으로 둘째는 $2-i$ 다. 더하면 $i$ 가 지워져 $x=4$ 가 나온다.

# 정의

## 복소수체

순서쌍 $(a,b)\in\mathbb R^2$ 전체에 덧셈과 곱셈을 다음처럼 준 것을 **복소수체** $\mathbb C$ 라 한다.

$$
(a,b)+(c,d)=(a+c,\ b+d),\qquad (a,b)(c,d)=(ac-bd,\ ad+bc)
$$

$(a,0)$ 을 실수 $a$ 와 같게 보고 $i=(0,1)$ 로 두면 $(a,b)=a+bi$ 이고 $i^2=(-1,0)=-1$ 이다. 곱셈 규칙은 $(a+bi)(c+di)$ 를 전개하고 $i^2=-1$ 을 쓴 결과와 같다. 이 연산으로 $\mathbb C$ 는 [체](fields.md)가 된다.

## 실수부, 허수부, 켤레, 절댓값

$z=a+bi$ 에 대해 $a$ 를 **실수부(real part)** $\mathrm{Re}\thinspace z$, $b$ 를 **허수부(imaginary part)** $\mathrm{Im}\thinspace z$ 라 한다. $\bar z=a-bi$ 를 **켤레(complex conjugate)** 라 하고, $\vert z\vert=\sqrt{a^2+b^2}$ 를 **절댓값(modulus)** 이라 한다. $z\bar z=\vert z\vert^2$ 이므로 $z\ne0$ 의 역원은 다음이다.

$$
\frac1z=\frac{\bar z}{\vert z\vert^2}=\frac{a-bi}{a^2+b^2}
$$

$(a,b)$ 를 평면의 점으로 그린 것을 **복소평면(complex plane)** 이라 한다. $\vert z-w\vert$ 는 두 점 사이의 Euclid 거리다.

# 성질

## 켤레와 절댓값의 연산

$\overline{z+w}=\bar z+\bar w$, $\overline{zw}=\bar z\bar w$ 이다. 여기서 $\vert zw\vert^2=zw\overline{zw}=z\bar z\thinspace w\bar w$ 이므로 $\vert zw\vert=\vert z\vert\vert w\vert$ 다. 삼각부등식 $\vert z+w\vert\le\vert z\vert+\vert w\vert$ 가 성립하므로 $\vert z-w\vert$ 로 $\mathbb C$ 는 [거리 공간](metric-spaces.md)이 된다.

## 극형식

$z\ne0$ 은 $r=\vert z\vert$ 와 양의 실수축에서 잰 각 $\theta$ 로 $z=r(\cos\theta+i\sin\theta)$ 로 쓸 수 있다. $\theta$ 를 **편각(argument)** 이라 하고 $2\pi$ 의 정수배만큼의 차이를 같게 본다.

**정리.** $z=r(\cos\theta+i\sin\theta)$, $w=s(\cos\varphi+i\sin\varphi)$ 이면 $zw=rs(\cos(\theta+\varphi)+i\sin(\theta+\varphi))$ 다.

증명의 요지. 곱을 전개하면 실수부가 $\cos\theta\cos\varphi-\sin\theta\sin\varphi$, 허수부가 $\sin\theta\cos\varphi+\cos\theta\sin\varphi$ 이고, [삼각함수](trigonometric-functions.md)의 덧셈정리로 각각 $\cos(\theta+\varphi)$, $\sin(\theta+\varphi)$ 다.

곱하면 절댓값은 곱해지고 편각은 더해진다. $i$ 를 곱하는 것은 원점을 중심으로 $90^\circ$ 돌리는 것이다.

## Euler 공식

$e^z=\sum_{n\ge0}z^n/n!$ 은 모든 복소수에서 절대수렴하는 [멱급수](power-series.md)다. $z=i\theta$ 를 넣고 짝수 차 항과 홀수 차 항을 나누면 각각 $\cos\theta$ 와 $i\sin\theta$ 의 급수가 되므로 다음이 성립한다. 이것을 **Euler 공식(Euler's formula)** 이라 한다.

$$
e^{i\theta}=\cos\theta+i\sin\theta
$$

극형식은 $z=re^{i\theta}$ 로 쓰이고, 앞의 정리는 $e^{i\theta}e^{i\varphi}=e^{i(\theta+\varphi)}$ 다. $\theta=\pi$ 에서 $e^{i\pi}=-1$ 이다.

## 거듭제곱근

$n\ge1$ 에 대해 $z^n=1$ 의 해는 $e^{2\pi ik/n}$, $k=0,1,\dots,n-1$ 의 $n$ 개이고 단위원을 $n$ 등분하는 점이다. 이것을 **$1$ 의 $n$ 제곱근(root of unity)** 이라 한다. $w=re^{i\theta}\ne0$ 의 $n$ 제곱근은 $r^{1/n}e^{i\theta/n}$ 에 $1$ 의 $n$ 제곱근을 곱한 $n$ 개다. 직관 절의 $2+11i$ 의 세제곱근은 $2+i$ 를 포함해 세 개이고, 근의 공식에서 두 세제곱근의 곱이 $p/3=5$ 가 되게 짝지으면 나머지 두 짝에서 $x^3=15x+4$ 의 다른 두 실근 $-2\pm\sqrt3$ 이 나온다.

## 대수적 닫힘

복소계수의 상수가 아닌 다항식은 복소수 근을 갖는다. 이것을 대수학의 기본 정리(fundamental theorem of algebra)라 하고, 증명은 [정칙함수](holomorphic-functions.md)의 Liouville 정리를 쓴다. 실수계수 방정식 $x^2+1=0$ 이 실근을 갖지 않는 것과 대비된다.

## 순서가 없음

$\mathbb C$ 에는 사칙연산과 맞는 순서를 줄 수 없다. 그런 순서가 있으면 $0$ 이 아닌 수의 제곱은 양수이므로 $i^2=-1\gt 0$ 이고, $1^2=1\gt 0$ 과 더하면 $0\gt 0$ 이 되어 모순이다. 그래서 복소수에는 크기 비교가 없고 절댓값만 비교한다.

# 활용

- [정칙함수](holomorphic-functions.md)는 복소수의 나눗셈으로 미분계수를 정의한 함수다. $h$ 가 평면의 모든 방향에서 $0$ 으로 갈 수 있다는 것이 실함수와 다른 성질을 준다.
- [Fourier 급수](fourier-series.md)는 $\cos nx$, $\sin nx$ 대신 $e^{inx}$ 를 쓰면 계수 공식이 하나로 적히고, 곱셈이 편각의 덧셈이라는 극형식의 정리가 미분을 $in$ 의 곱으로 바꾼다.
- [고윳값](eigenvalues.md). 평면을 $90^\circ$ 돌리는 실행렬은 실수 고윳값이 없고 고윳값이 $\pm i$ 다. 대수학의 기본 정리로 복소 정방행렬은 항상 고윳값을 갖는다.
- [원분체](cyclotomic-fields.md)는 $1$ 의 $n$ 제곱근 하나를 유리수체에 더한 체다.
- [Gauss 정수환](gaussian-integers.md)은 $a,b$ 가 정수인 $a+bi$ 의 환이고, 절댓값의 제곱 $a^2+b^2$ 이 두 제곱수의 합을 다루는 데 쓰인다.
- [나눗셈 대수](division-algebras.md). 실수 위의 유한차원 결합적 나눗셈 대수는 실수, 복소수, 사원수 셋뿐이다(Frobenius 정리, Frobenius theorem).

# 연관 문서

## 선수지식

- [복소해석 개관](complex-analysis-overview.md)
- [실수](real-numbers.md)

## 더 알아보기

- [정칙함수](holomorphic-functions.md)

#complex_analysis #algebra #analysis
