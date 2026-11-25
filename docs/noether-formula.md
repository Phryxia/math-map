# Noether 공식

# 개요

**Noether 공식(Noether's formula)** 은 콤팩트 복소곡면의 정칙 형식의 개수로 정한 수 $\chi(\mathcal O_X)$ 를 표준다발의 자기교차수 $K^2$ 와 위상적 Euler 표수 $e$ 로 적는 식 $12\chi(\mathcal O_X)=K^2+e$ 다. $3$ 차원 사영공간 안의 오차곡면 위에 정칙 $2$ 형식이 몇 개 있는지 물으면, 형식을 직접 적지 않고 이 식으로 답할 수 있다.

$K^2$ 와 $e$ 는 곡면의 방정식의 차수에서 바로 계산되므로, 이 식은 해석적인 수를 계산하기 쉬운 두 수로 바꾼다.

# 직관

곡면 $X$ 에서 $q$ 를 정칙 $1$ 형식의 공간의 차원, $p_g$ 를 정칙 $2$ 형식의 공간의 차원이라 하고 $\chi(\mathcal O_X)=1-q+p_g$ 로 둔다. 사영평면은 두 형식이 모두 없으므로 $\chi=1$ 이고, 표준다발이 $\mathcal O(-3)$ 이라 $K^2=9$, Euler 표수는 $e=3$ 이다.

사영평면의 한 점을 부풀리면 $q$ 와 $p_g$ 는 그대로여서 $\chi$ 는 $1$ 이다. 그 점이 사영직선으로 바뀌므로 Euler 표수는 $1$ 늘어 $4$ 가 되고, 표준류는 $K+E$ 로 바뀌어 $K^2$ 가 $1$ 줄어 $8$ 이 된다. $K^2+e$ 는 $12$ 로 그대로다.

[K3 곡면](k3-surfaces.md)은 $\chi=1-0+1=2$, $K^2=0$, $e=24$ 이므로 $K^2+e=24$ 다. 두 예에서 $K^2+e$ 는 $\chi$ 의 $12$ 배다.

# 정의

$X$ 를 콤팩트 복소곡면이라 하고 $c\_1$, $c\_2$ 를 접다발의 Chern 류라 한다. $c\_1=-K_X$ 이므로 $c\_1^2=K_X^2$ 이고, $c\_2$ 를 $X$ 위에서 적분한 값이 Euler 표수 $e(X)$ 다. **Noether 공식** 은 다음 등식이다[^1].

$$
\chi(\mathcal O_X)=\frac{K_X^2+e(X)}{12}
$$

좌변은 층 코호몰로지의 차원을 번갈아 더한 값이다.

$$
\chi(\mathcal O_X)=h^0(\mathcal O_X)-h^1(\mathcal O_X)+h^2(\mathcal O_X)=1-q+p_g
$$

직관 절의 사영평면, 한 점을 부풀린 사영평면, K3 곡면이 이 등식을 만족한다.

# 성질

## Hirzebruch–Riemann–Roch 정리로 하는 증명

[Riemann–Roch 정리](riemann-roch.md) 문서의 Hirzebruch–Riemann–Roch 정리를 자명한 선다발에 쓰면 $\chi(\mathcal O_X)$ 는 Todd 류의 $2$ 차 부분의 적분이다. 곡면에서 Todd 류는 다음과 같다.

$$
\mathrm{Td}(X)=1+\frac{c_1}{2}+\frac{c_1^2+c_2}{12}
$$

$2$ 차 부분을 적분하면 $(K^2+e)/12$ 가 나온다.

## 12 의 배수

$\chi(\mathcal O_X)$ 는 정수이므로 모든 콤팩트 복소곡면에서 $K^2+e$ 는 $12$ 의 배수다. [Enriques 곡면](enriques-surfaces.md)은 $K^2=0$ 이므로 $e$ 가 $12$ 의 배수여야 하고, 실제로 $e=12$, $\chi=1$ 이다.

## 초곡면

$\mathbb{CP}^3$ 안의 매끄러운 $d$ 차 곡면은 $K=(d-4)H$ 이므로 $K^2=d(d-4)^2$ 이고, Euler 표수는 $d(d^2-4d+6)$ 이다. 이를 넣으면 다음이 나온다.

$$
\chi(\mathcal O_X)=\frac{d(d^2-6d+11)}{6}
$$

$q=0$ 이므로 $p_g=\chi-1$ 이다. $d=1,2,3,4,5,6$ 에서 $\chi$ 는 $1,1,1,2,5,11$ 이고 $p_g$ 는 $0,0,0,1,4,10$ 이다. 오차곡면의 정칙 $2$ 형식 공간은 $4$ 차원이다.

## 부호수와의 결합

[Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)는 곡면의 교차형식의 부호수를 $\tau=(K^2-2e)/3$ 으로 준다. $K^2=2e+3\tau$ 를 Noether 공식에 넣으면 다음이 나온다.

$$
\chi(\mathcal O_X)=\frac{e+\tau}{4}
$$

K3 곡면은 $(24-16)/4=2$, Enriques 곡면은 $(12-8)/4=1$, 사영평면은 $(3+1)/4=1$ 이다. 왼쪽은 정칙 형식의 수이고 오른쪽은 위상으로만 정해지는 수다.

## 선다발에 대한 Riemann–Roch 정리

곡면 위의 선다발 $\mathcal O(D)$ 에 대해서는 같은 계산에서 다음이 나온다.

$$
\chi\bigl(\mathcal O(D)\bigr)=\chi(\mathcal O_X)+\frac{D\cdot(D-K)}{2}
$$

$D=0$ 이면 등식이 자명하고, Noether 공식은 이 식의 상수항을 정한다.

# 활용

- 곡면의 불변량 계산. K3 곡면, Enriques 곡면, [타원 곡면](elliptic-surfaces.md)에서 $\chi$ 와 $e$ 사이를 오갈 때 쓴다. 타원 곡면에서는 $K^2=0$ 이라 $e=12\chi$ 이다.
- 곡면의 지리. 일반형 극소 곡면의 $(K^2,e)$ 가 놓일 수 있는 범위를 [Miyaoka–Yau 부등식](miyaoka-yau-inequality.md) $K^2\le 3e$ 와 함께 정한다. Noether 공식이 $K^2+e$ 를 $12$ 의 배수로 묶는다.
- 산술 곡면. [Arakelov 기하](arakelov-geometry.md)에서 Faltings 가 산술 곡면 위에 같은 꼴의 공식을 증명했다.

[^1]: W. Barth, K. Hulek, C. Peters and A. Van de Ven, *Compact Complex Surfaces*, 2nd ed., Springer, 2004, Chapter I.

# 연관 문서

## 선수지식

- [Riemann–Roch 정리](riemann-roch.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebraic_topology #algebra
