# j 불변량

# 개요

**j 불변량(j-invariant)** 은 복소수 위의 [타원곡선](elliptic-curves.md)마다 수 하나를 주어, 두 곡선이 좌표만 바꾼 같은 곡선인지를 그 수로 가르는 값이다. $y^2=x^3-x$ 와 $y^2=x^3-4x$ 는 식이 다르지만 $x$ 를 $2x$ 로, $y$ 를 $2\sqrt2\thinspace y$ 로 바꾸면 하나가 다른 하나가 된다. 이런 좌표 변환으로 바뀌지 않는 계수의 조합을 만들면 두 곡선이 같은지를 계산 한 번으로 판정할 수 있고, 그 조합이 $j$ 불변량이다.

# 직관

$y^2=x^3+ax+b$ 에서 $x=\lambda^2x'$, $y=\lambda^3y'$ 로 바꾸고 양변을 $\lambda^6$ 으로 나누면 다음이 나온다.

$$
y'^2=x'^3+\lambda^{-4}a\thinspace x'+\lambda^{-6}b
$$

계수 쌍은 $(a,b)$ 에서 $(\lambda^{-4}a,\lambda^{-6}b)$ 로 바뀐다. $a^3$ 과 $b^2$ 은 둘 다 $\lambda^{-12}$ 배가 되므로 그 비는 바뀌지 않는다. 개요의 두 곡선은 $(a,b)=(-1,0)$ 과 $(-4,0)$ 이고 $\lambda^4=1/4$ 로 서로 옮겨진다.

비 $a^3/b^2$ 은 $b=0$ 이면 정의되지 않으므로, 분모에 판별식에 쓰는 $4a^3+27b^2$ 을 놓은 $4a^3/(4a^3+27b^2)$ 을 쓴다. 이 값도 $\lambda$ 에 따라 바뀌지 않고, 곡선이 매끄러우면 분모가 $0$ 이 아니다. $y^2=x^3-x$ 에서 이 값은 $1$, $y^2=x^3+1$ 에서는 $0$ 이다.

# 정의

## 계수로 쓴 정의

$4a^3+27b^2\ne 0$ 인 복소수 $a,b$ 로 주어진 타원곡선 $E:y^2=x^3+ax+b$ 의 j 불변량은 다음이다.

$$
j(E)=1728\cdot\frac{4a^3}{4a^3+27b^2}
$$

직관 절의 두 예에서 $j(y^2=x^3-x)=1728$, $j(y^2=x^3+1)=0$ 이다. 상수 $1728=12^3$ 은 아래 $q$ 전개의 계수를 정수로 만드는 정규화다.

## 상반평면 위의 함수

$\tau\in\mathbb H$ 에 대해 격자 $\Lambda\_\tau=\mathbb Z+\mathbb Z\tau$ 의 Eisenstein 합을 다음과 같이 둔다.

$$
g\_2(\tau)=60\sum\_{\omega\in\Lambda\_\tau\setminus\lbrace 0\rbrace}\omega^{-4},\qquad g\_3(\tau)=140\sum\_{\omega\in\Lambda\_\tau\setminus\lbrace 0\rbrace}\omega^{-6}
$$

$\mathbb C/\Lambda\_\tau$ 는 타원곡선 $y^2=4x^3-g\_2x-g\_3$ 이고, 그 j 불변량을 $\tau$ 의 함수로 쓴 것이 다음이다.

$$
j(\tau)=1728\cdot\frac{g\_2^3}{g\_2^3-27g\_3^2}
$$

$y$ 를 $2y$ 로 바꾸면 $a=-g\_2/4$, $b=-g\_3/4$ 인 곡선이 되어 계수로 쓴 정의와 맞는다. [모듈러 형식](modular-forms.md)의 [Eisenstein 급수](eisenstein-series.md)로는 $j=E\_4^3/\Delta$ 다.

# 성질

## 동형의 판정

복소수 위의 두 타원곡선이 동형인 것은 j 불변량이 같은 것과 동치다. 직관 절의 계산에서 $\lambda$ 를 고르는 것이 동형이다. 거꾸로 $j(E)=j(E')$ 이고 $ab\ne 0$ 이면 $a^3/b^2=a'^3/b'^2$ 이므로 $\lambda^4=a/a'$ 인 $\lambda$ 로 $\lambda^6=\pm b/b'$ 이 맞고, 부호는 $\lambda$ 를 $i\lambda$ 로 바꾸어 고친다. $a=0$ 이나 $b=0$ 인 경우는 $j=0$ 이나 $j=1728$ 이고 따로 확인한다.

## 주어진 값의 곡선

$j\_0\ne 0,1728$ 인 모든 복소수 $j\_0$ 에 대해 $a=3j\_0(1728-j\_0)$, $b=2j\_0(1728-j\_0)^2$ 인 곡선의 j 불변량이 $j\_0$ 이다. 이 $a,b$ 에서 다음이 나오고, 둘을 더하면 $108\cdot 1728\thinspace j\_0^2(1728-j\_0)^3$ 이므로 정의의 비가 $j\_0/1728$ 이다.

$$
4a^3=108\thinspace j\_0^3(1728-j\_0)^3,\qquad 27b^2=108\thinspace j\_0^2(1728-j\_0)^4
$$

$0$ 과 $1728$ 은 직관 절의 두 곡선이 갖는다.

## 모듈러 함수

$\gamma\tau$ 와 $\tau$ 가 주는 격자는 상수배만 다르므로, $j(\tau)$ 는 [모듈러 군](modular-group.md)의 모든 원소 $\gamma$ 에 대해 $j(\gamma\tau)=j(\tau)$ 를 만족한다. $j$ 는 기본 영역의 궤도들과 $\mathbb C$ 사이의 전단사를 주고, $j(i)=1728$, $j(e^{2\pi i/3})=0$ 이다. $q=e^{2\pi i\tau}$ 로 전개하면 계수가 모두 정수다.

$$
j(\tau)=q^{-1}+744+196884q+21493760q^2+\cdots
$$

$\mathbb H$ 에서 정칙이고 모듈러 군에 불변이며 첨점에서 유한 위수의 극을 갖는 함수는 $j$ 의 다항식뿐이다.

## 허수 이차 무리수에서의 값

$\tau$ 가 허수 이차 무리수이면 $j(\tau)$ 는 대수적 정수이고, 그 차수는 $\tau$ 가 정하는 이차체의 순서환(order)의 류수(class number)다. 류수가 $1$ 인 경우 $j(\tau)$ 는 정수다. $\tau=(1+\sqrt{-163})/2$ 에서 $j(\tau)=-640320^3$ 이고, $q=-e^{-\pi\sqrt{163}}$ 이 아주 작아 $q$ 전개의 뒤 항이 거의 사라지므로 다음이 나온다.

$$
e^{\pi\sqrt{163}}\approx 640320^3+744=262537412640768744
$$

실제 값은 이 정수보다 약 $7.5\times 10^{-13}$ 작다.

# 활용

- [복소 곱셈](complex-multiplication.md): 허수 이차체 $K$ 의 Hilbert 유체(Hilbert class field)가 $K(j(\tau))$ 이고, j 값의 최소다항식이 유체를 정한다.
- [류수 1 문제](class-number-one.md): 류수가 $1$ 인 허수 이차체 아홉 개의 정수환에서 $j$ 가 정수가 된다. $-640320^3$ 이 그 가운데 판별식 $-163$ 의 값이다.
- [괴물 달빛 추측](monstrous-moonshine.md): 계수 $196884=1+196883$ 이 괴물군의 기약표현의 차원의 합이라는 관찰에서 시작했다.
- [모듈러 곡선](modular-curves.md): $X(1)=\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H\cup\lbrace\infty\rbrace$ 의 좌표가 $j$ 이고, $X\_0(N)$ 은 $j(\tau)$ 와 $j(N\tau)$ 의 관계식으로 적힌다.
- [초특이 동종사상 그래프](supersingular-isogeny-graphs.md): 유한체 위 초특이 타원곡선의 동형류를 j 불변량으로 적어 그래프의 정점으로 쓴다.
- [Schoof–Elkies–Atkin 알고리즘](sea-algorithm.md): 유한체 위 곡선의 점 개수를 셀 때 모듈러 다항식에 곡선의 j 불변량을 넣는다.

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [타원곡선](elliptic-curves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #algebra
