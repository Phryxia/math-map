# Poincaré–Dulac 정규형

# 개요

**Poincaré–Dulac 정규형(Poincaré–Dulac normal form)** 은 평형점 근처의 자율 미분방정식을 좌표 변환으로 일차 근사와 공명 단항식(resonant monomial)들의 합으로 바꾼 꼴이다. [Sternberg 정리](sternberg-theorem.md)는 공명이 없을 때 비선형 항을 모두 없애고, 공명이 있으면 이 정규형이 없앨 수 없는 항만 남긴 가장 단순한 꼴이다. Hopf 분기와 Bogdanov–Takens 분기의 표준형이 이 정규형의 예다.

# 직관

Sternberg 정리의 직관 절에서 $x'=-x$, $y'=-2y+x^2$ 의 $x^2$ 항은 $Y=y-cx^2$ 꼴의 변환으로 없앨 수 없었다. 고윳값 $\lambda=(-1,-2)$ 가 $\lambda_2=2\lambda_1$ 을 만족하기 때문이었다. 이 방정식에 다른 항을 더한

$$
x'=-x+y^2,\qquad y'=-2y+x^2+xy
$$

에서는 어떤 항을 없앨 수 있는지 알고 싶다.

Sternberg 정리의 호몰로지 방정식에 따르면 $i$ 번째 성분의 단항식 $x^{m_1}y^{m_2}$ 은 $m_1\lambda_1+m_2\lambda_2-\lambda_i\ne 0$ 이면 없앨 수 있다. $x$ 성분의 $y^2$ 은 $-4+1=-3$ 이라 없어지고, $y$ 성분의 $xy$ 는 $-1-2+2=-1$ 이라 없어진다. $y$ 성분의 $x^2$ 만 $-2+2=0$ 이라 남는다. 차수를 높여도 같다. $\lambda_1=-1=m_1\lambda_1+m_2\lambda_2$ 이면 $m_1+2m_2=1$ 이라 $\lvert m\rvert\ge 2$ 일 수 없고, $\lambda_2=-2$ 이면 $m_1+2m_2=2$ 에서 $\lvert m\rvert\ge 2$ 인 것은 $m=(2,0)$ 뿐이다.

그래서 고윳값이 $-1$, $-2$ 인 해석적 방정식은 몇 차 항이 있든 좌표를 바꿔 $x'=-x$, $y'=-2y+cx^2$ 으로 만들 수 있다. $c\ne 0$ 이면 $x$ 를 상수배해 $c=1$ 로 만든다. 이 고윳값을 가진 방정식은 $c=0$ 인 선형계와 $c=1$ 인 계 둘 가운데 하나로 바뀐다.

# 정의

$A$ 가 [Jordan 표준형](jordan-canonical-form.md)인 $n\times n$ 행렬이고 대각 성분이 $\lambda_1,\dots,\lambda_n$ 이다. 음이 아닌 정수 순서쌍 $m$ 과 $i$ 에 대해 $\lambda_i=m\cdot\lambda$, $\lvert m\rvert\ge 2$ 이면 벡터장 $x^me_i=x_1^{m_1}\cdots x_n^{m_n}e_i$ 를 **공명 단항식(resonant monomial)** 이라 한다.

$x'=Ax+w(x)$ 에서 $w$ 의 Taylor 급수가 공명 단항식만으로 이루어지면 이 방정식이 **Poincaré–Dulac 정규형** 이라 한다.

**정리(Poincaré–Dulac, 형식적 판본).** 원점에서 $f(0)=0$ 이고 일차 근사가 $A$ 인 매끄러운 $f$ 에 대해, 형식적 멱급수 좌표 변환 $y=x+p(x)$ 가 존재해 방정식이 형식적 멱급수로 Poincaré–Dulac 정규형이 된다. 유한 차수 $N$ 까지만 보면 다항식 좌표 변환으로 $N$ 차까지의 Taylor 다항식을 정규형으로 만든다.[^1]

증명은 Sternberg 정리의 호몰로지 방정식을 차수 $k=2,3,\dots$ 마다 푸는 것이다. $L_A$ 의 상에 들어가는 $k$ 차 항을 없애고, 그 여공간으로 공명 단항식이 생성하는 공간을 고른다.

# 성질

## 해석적 판본

고윳값들의 볼록 껍질이 복소평면에서 $0$ 을 포함하지 않는 경우를 **Poincaré 영역(Poincaré domain)** 이라 한다. 이때 공명은 유한 개이고, 해석적인 $f$ 는 해석적 좌표 변환으로 공명 단항식만으로 이루어진 다항식 정규형이 된다. 이것이 Poincaré–Dulac 정리다. 직관 절의 고윳값 $-1$, $-2$ 는 Poincaré 영역에 있고 정규형 $y'=-2y+cx^2$ 이 다항식이다.[^1]

## 정규형의 비유일성

정규형은 하나로 정해지지 않는다. 공명 단항식으로 된 좌표 변환은 호몰로지 방정식에서 $L_A$ 의 핵에 들어가므로, 정규형을 다른 정규형으로 옮기면서 더 높은 차수의 계수를 바꾼다. 그래서 정규형의 계수 가운데 좌표 변환으로 바뀌지 않는 것만 방정식의 불변량이다. 직관 절에서 $c=0$ 인지 아닌지가 그런 불변량이다.

## 켤레 허수 고윳값

평면에서 고윳값이 $\pm i\omega$ 이면 복소좌표 $z=x+iy$ 로 방정식을 $z'=i\omega z+\dots$ 로 쓴다. $z$, $\bar z$ 의 고윳값이 $i\omega$, $-i\omega$ 이므로 $z^a\bar z^b$ 이 $z$ 성분에서 공명인 것은 $(a-b)i\omega=i\omega$, 곧 $a=b+1$ 일 때다. 정규형은

$$
z'=i\omega z+c_1z\lvert z\rvert^2+c_2z\lvert z\rvert^4+\cdots
$$

이다. [Hopf 분기](hopf-bifurcation.md)의 첫 Lyapunov 계수는 $\ell_1=\mathrm{Re}\thinspace c_1/\omega$ 다. 극좌표로 쓰면 $r'=\mathrm{Re}\thinspace c_1\thinspace r^3+\cdots$ 이므로 $c_1$ 의 실수부가 극한 순환의 존재와 안정성을 정한다.[^2]

## 영 고윳값의 Jordan 블록

$A=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 이면 모든 단항식이 공명이어서 위의 정의는 아무 제약도 주지 않는다. 그래도 $L_A$ 의 상은 $0$ 이 아니어서 더 많은 항을 없앨 수 있고, $L_A$ 의 상의 여공간을 따로 골라 정규형을 정한다. 그 한 꼴이

$$
x'=y,\qquad y'=\sum_{k\ge 2}(a_kx^k+b_kx^{k-1}y)
$$

이다. 이것을 Takens 정규형(Takens normal form)이라 하고, $a_2b_2\ne 0$ 인 경우가 [Bogdanov–Takens 분기](bogdanov-takens-bifurcation.md)의 조건이다.[^2]

# 활용

- **분기의 표준형 유도.** 평형점의 고윳값이 허수축에 닿는 분기를 다룰 때 중심 다양체로 차원을 줄인 뒤 정규형으로 바꾸고, 정규형에 남는 첫 계수가 $0$ 이 아니라는 조건으로 분기를 분류한다. Hopf 분기의 $\ell_1\ne 0$, Bogdanov–Takens 분기의 $a_2b_2\ne 0$ 이 이 조건이다.
- **Hamilton 계의 정규형.** Hamilton 계에서는 좌표 변환을 정준변환으로 제한하고 같은 절차를 Hamilton 함수의 Taylor 급수에 적용한다. 그 결과가 [Birkhoff 정규형](birkhoff-normal-form.md)이고, 공명 조건은 진동수들의 정수 관계다.
- **평균화.** 빠른 회전과 느린 변화가 섞인 방정식에서 공명 단항식만 남기는 것은 회전에 대해 평균한 방정식을 얻는 것과 같고, 남은 공명 항이 장시간 거동을 정한다.

[^1]: V. I. Arnold, *Geometrical Methods in the Theory of Ordinary Differential Equations*, 2nd ed., Springer, 1988, 5 장.
[^2]: Yu. A. Kuznetsov, *Elements of Applied Bifurcation Theory*, 3rd ed., Springer, 2004, 3 장과 8 장.

# 연관 문서

## 선수지식

- [Sternberg 정리](sternberg-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
