# 타원함수

# 개요

**타원함수(elliptic function)** 는 복소평면 위의 유리형함수 가운데 서로 독립인 두 주기를 갖는 것이다. $\sin z$ 처럼 주기가 하나인 함수는 많지만, 두 방향으로 동시에 주기를 갖는 정칙함수는 유계여서 상수뿐이므로 상수가 아닌 이런 함수는 극을 가져야 한다. 타원함수는 주기 [격자](lattices.md)로 평면을 접은 원환면 위의 유리형함수로 다루고, 대표인 Weierstrass 페 함수(Weierstrass ℘-function) $\wp$ 가 만족하는 삼차 관계식으로 원환면을 타원곡선과 잇는다.

# 직관

$\sin z$ 는 주기 $2\pi$ 하나를 가지므로 폭 $2\pi$ 인 띠 위의 값으로 전부 정해진다. 주기 $1$ 과 $i$ 를 함께 가지는 함수는 꼭짓점이 $0,1,1+i,i$ 인 정사각형 위의 값으로 전부 정해진다. 평행사변형의 마주 보는 변을 붙이면 원환면이 되므로 타원함수의 정의역은 콤팩트 곡면이다. [콤팩트성](compactness.md)이 제약을 만든다. 극이 없으면 유계이고 Liouville 정리로 상수가 되므로, 상수가 아닌 타원함수는 반드시 극을 갖는다.

# 정의

## 주기 격자와 타원함수

$\omega_1,\omega_2\in\mathbb C$ 가 $\mathbb R$ 위에서 독립일 때

$$\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$$

를 **격자(lattice)** 라 한다. 유리형함수 $f$ 가 모든 $\omega\in\Lambda$ 에 대해 $f(z+\omega)=f(z)$ 를 만족하면 $f$ 를 격자 $\Lambda$ 에 대한 **타원함수** 라 한다. 격자 $\Lambda$ 에 대한 타원함수 전체는 체를 이룬다. 직관 절의 격자는 $\Lambda=\mathbb Z+\mathbb Zi$ 다. $\sin z$ 는 $\sin(z+2\pi i)\ne\sin z$ 이므로 어떤 격자에 대해서도 타원함수가 아니다.

**기본 평행사변형(fundamental parallelogram)** 은 $\lbrace a+s\omega_1+t\omega_2:0\le s,t\lt 1\rbrace$ 이고, 타원함수의 값은 이 영역에서 전부 결정된다. $\Lambda=\mathbb Z+\mathbb Zi$, $a=0$ 이면 직관 절의 정사각형이다.

## Weierstrass 페 함수

$$\wp(z)=\frac1{z^2}+\sum_{\omega\in\Lambda\setminus\lbrace 0\rbrace}\left(\frac1{(z-\omega)^2}-\frac1{\omega^2}\right)$$

는 격자점마다 위수 $2$ 의 극을 갖는 짝 타원함수다. 뺄셈항 $1/\omega^2$ 이 급수를 절대수렴하게 한다. 도함수

$$\wp'(z)=-2\sum_{\omega\in\Lambda}\frac1{(z-\omega)^3}$$

은 홀 타원함수다.

격자의 [Eisenstein 급수](eisenstein-series.md)는 $k\ge3$ 에서 $G_k(\Lambda)=\sum_{\omega\in\Lambda\setminus\lbrace 0\rbrace}\omega^{-k}$ 다. 홀수 $k$ 에서는 $\omega$ 와 $-\omega$ 가 상쇄되어 $0$ 이다. $\Lambda=\mathbb Z+\mathbb Zi$ 이면 $i\Lambda=\Lambda$ 이므로 $G_6(\Lambda)=G_6(i\Lambda)=i^{-6}G_6(\Lambda)=-G_6(\Lambda)$ 이고, $G_6(\Lambda)=0$ 이다.

# 성질

## Liouville 정리

타원함수에 대해 다음 Liouville 정리(Liouville's theorems)가 성립한다. 기본 평행사변형의 경계에서 [유수 정리](residue-theorem.md)로 적분하면 마주 보는 변의 기여가 주기성으로 상쇄되고, 그 값이 $0$ 이라는 데서 셋이 모두 나온다.

- 극이 없는 타원함수는 상수다.
- 기본 평행사변형 안 극의 유수 합은 $0$ 이다. 따라서 위수 $1$ 의 극 하나만 갖는 타원함수는 없다.
- 중복도를 세면 영점의 개수와 극의 개수가 같다. 이 공통값이 타원함수의 **위수(order)** 이고 상수가 아니면 $2$ 이상이다.
- 영점의 합과 극의 합은 $\Lambda$ 를 법으로 하여 같다.

$\wp$ 는 위수 $2$ 이므로 가장 간단한 비상수 타원함수다.

## 미분방정식

$\wp$ 의 Laurent 전개를 $0$ 근방에서 계산해 $\wp'^2-4\wp^3+g_2\wp+g_3$ 이 극이 없고 $0$ 에서 값이 $0$ 임을 보이면, 첫 Liouville 정리로 이 함수가 항등적으로 $0$ 이다.

$$\wp'^2=4\wp^3-g_2\wp-g_3,\qquad g_2=60G_4,\quad g_3=140G_6$$

판별식 $\Delta=g_2^3-27g_3^2$ 은 격자마다 $0$ 이 아니므로 우변의 삼차식은 중근을 갖지 않는다. $\Lambda=\mathbb Z+\mathbb Zi$ 이면 $g_3=140G_6=0$ 이므로 관계식은 $\wp'^2=4\wp^3-g_2\wp$ 다.

## 원환면과 타원곡선

사상 $z\mapsto(\wp(z),\wp'(z))$ 는 $\mathbb C/\Lambda$ 에서 사영평면의 곡선

$$y^2=4x^3-g_2x-g_3$$

으로 가는 쌍정칙 동형(biholomorphism)이고, 격자점은 무한원점으로 간다. 덧셈군 $\mathbb C/\Lambda$ 의 구조가 곡선 위의 현과 접선으로 정의되는 군 구조와 일치한다. 그 대응이 $\wp$ 의 덧셈정리

$$\wp(z_1+z_2)=\frac14\left(\frac{\wp'(z_1)-\wp'(z_2)}{\wp(z_1)-\wp(z_2)}\right)^2-\wp(z_1)-\wp(z_2)$$

로 나타난다.

## 타원함수체의 구조

격자 $\Lambda$ 에 대한 타원함수체는 $\mathbb C(\wp,\wp')$ 이다. 짝 타원함수는 $\wp$ 의 유리함수이고, 홀 타원함수는 $\wp'$ 곱하기 $\wp$ 의 유리함수다. 증명은 영점과 극의 위치를 맞춘 $\wp$ 의 유리식을 만들어 몫이 극 없는 타원함수, 곧 상수임을 보이는 것이다.

# 활용

- [모듈러 형식](modular-forms.md): $\Lambda=\mathbb Z+\mathbb Z\tau$ 로 두고 $G_k$ 를 $\tau$ 의 함수로 보면 무게 $k$ 의 모듈러 형식이 된다. $\Delta$ 는 무게 $12$ 의 첨점형식(cusp form)이다.
- [타원곡선](elliptic-curves.md): [복소수](complex-numbers.md)체 위의 타원곡선은 모두 어떤 $\mathbb C/\Lambda$ 와 동형이다. 꼬임점(torsion point)은 $\mathbb Q\Lambda/\Lambda$ 의 점에 대응한다.
- [복소 곱셈](complex-multiplication.md): $\lambda\Lambda\subset\Lambda$ 인 정수 아닌 $\lambda$ 가 있으면 $\mathbb C/\Lambda$ 의 자기준동형환이 $\mathbb Z$ 보다 커지고, 그 $\lambda$ 는 허수이차체에 든다.
- 타원적분(elliptic integral): 곡선 $y^2=4x^3-g_2x-g_3$ 위의 적분 $\int dx/y$ 의 역함수가 $\wp$ 다. 타원함수는 타원적분을 뒤집어 얻은 함수라는 역사적 경로가 여기 있다.

# 연관 문서

## 선수지식

- [유수 정리](residue-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #number_theory #analysis
