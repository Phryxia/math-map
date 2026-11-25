# Enriques 곡면

# 개요

**Enriques 곡면(Enriques surface)** 은 정칙 $1$ 형식도 정칙 $2$ 형식도 없지만, 정칙 $2$ 형식 두 개를 곱한 꼴의 대상은 어디서도 $0$ 이 되지 않는 것이 있는 콤팩트 복소곡면이다. [K3 곡면](k3-surfaces.md) 하나를 골라 그 위의 점을 고정점 없이 짝지어 바꾸는 사상으로 두 점씩 묶으면 이런 곡면이 나온다.

정칙 형식이 하나도 없는 곡선은 사영직선뿐이므로, 정칙 $1$ 형식과 $2$ 형식이 없는 곡면도 사영평면처럼 유리곡면인지 물을 수 있다. Enriques 곡면은 그렇지 않은 예이고, 형식의 제곱을 세는 수 $P_2$ 가 둘을 가른다.

# 직관

곡선에서는 정칙 $1$ 형식이 없으면 종수가 $0$ 이고 곡선은 사영직선이다. 곡면에서 같은 조건을 세운다. 정칙 $1$ 형식의 공간의 차원 $q=h^{0,1}$ 과 정칙 $2$ 형식의 공간의 차원 $p_g=h^{2,0}$ 이 모두 $0$ 이면 사영평면처럼 유리곡면인가. 사영평면은 $q=p_g=0$ 을 만족한다.

$\mathbb{CP}^5$ 의 좌표를 $(x_0:x_1:x_2:y_0:y_1:y_2)$ 로 적고, 세 변수의 이차식 $Q_i$, $R_i$ 를 골라 다음 세 식의 교차 $X$ 를 잡는다.

$$
Q_i(x_0,x_1,x_2)+R_i(y_0,y_1,y_2)=0,\qquad i=1,2,3
$$

이차식을 일반적으로 고르면 $X$ 는 매끄럽고, [K3 곡면](k3-surfaces.md) 문서의 예대로 K3 곡면이다. 사상 $\sigma(x:y)=(x:-y)$ 는 세 식을 바꾸지 않으므로 $X$ 를 $X$ 로 보낸다.

$\sigma$ 가 고정하는 점은 $(x,-y)$ 가 $(x,y)$ 의 상수배인 점, 곧 $y=0$ 이거나 $x=0$ 인 점이다. $y=0$ 이면 $Q_1(x)=Q_2(x)=Q_3(x)=0$ 이어야 하는데, 평면의 원뿔곡선 셋은 일반적으로 공통점이 없다. $x=0$ 쪽도 같다. 따라서 $\sigma$ 는 고정점이 없고, $X$ 의 점을 $\sigma$ 로 짝지어 묶은 몫 $Y=X/\sigma$ 는 매끄러운 콤팩트 복소곡면이다.

$Y$ 의 정칙 $1$ 형식은 $X$ 로 끌어올리면 $X$ 의 정칙 $1$ 형식이 되는데 $X$ 에는 그런 것이 없으므로 $q(Y)=0$ 이다. $X$ 의 정칙 $2$ 형식 $\omega$ 는 상수배를 빼고 하나이므로 $\sigma^\ast\omega=\pm\omega$ 다.

부호가 $+$ 이면 $\omega$ 가 $Y$ 로 내려가 $p_g(Y)=1$ 이고 $\chi(\mathcal O_Y)=1-q+p_g=2$ 다. 그런데 Noether 공식(Noether's formula) $\chi(\mathcal O)=(K^2+c_2)/12$ 의 두 항은 고정점 없이 두 점씩 묶는 몫에서 모두 절반이 되므로 $\chi(\mathcal O_Y)=\chi(\mathcal O_X)/2=1$ 이다. 그러므로 $\sigma^\ast\omega=-\omega$ 이고 $Y$ 에는 정칙 $2$ 형식이 없다.

그래도 $\omega\otimes\omega$ 는 $\sigma$ 로 부호가 두 번 바뀌어 그대로이므로 $Y$ 로 내려간다. 그 결과는 $Y$ 위에서 어디서도 $0$ 이 되지 않는 $2$ 형식 두 개의 곱이다. 사영평면에는 이런 것이 없으므로 $Y$ 는 사영평면과 같은 종류의 곡면이 아니다.

# 정의

**Enriques 곡면** 은 연결된 콤팩트 복소곡면 $Y$ 로 다음 세 조건을 만족하는 것이다.

$$
H^1(Y,\mathcal O_Y)=0,\qquad K_Y\not\cong\mathcal O_Y,\qquad K_Y^{\otimes 2}\cong\mathcal O_Y
$$

$K_Y$ 는 정칙 $2$ 형식의 선다발이고, $K_Y^{\otimes 2}$ 의 단면은 $2$ 형식 두 개의 곱으로 국소적으로 적히는 대상이다. 첫 조건은 $q=0$ 이다. 직관 절의 몫 $Y=X/\sigma$ 는 $q=0$ 이고, $\omega$ 가 내려가지 않으므로 $K_Y$ 는 자명하지 않고, $\omega\otimes\omega$ 가 내려가므로 $K_Y^{\otimes 2}$ 는 자명하다. 따라서 Enriques 곡면이다.

$K_Y^{\otimes n}$ 의 단면 공간의 차원 $P_n$ 을 **다중종수(plurigenus)** 라 한다. $P_1=p_g$ 다.

# 성질

## 다중종수

Enriques 곡면은 $p_g=0$ 이다. $K_Y$ 의 $0$ 이 아닌 단면 $s$ 가 있으면 $s\otimes s$ 는 자명한 다발 $K_Y^{\otimes 2}$ 의 단면이라 상수이고, $0$ 이 아니므로 $s$ 는 어디서도 $0$ 이 되지 않는다. 그러면 $K_Y$ 가 자명해 정의에 어긋난다.

같은 논법으로 $n$ 이 홀수이면 $P_n=0$ 이고, $n$ 이 짝수이면 $K_Y^{\otimes n}$ 이 자명하므로 $P_n=1$ 이다.

## K3 덮개

$K_Y$ 는 제곱이 자명한 선다발이므로 $Y$ 의 두 겹 덮개 $\pi:X\to Y$ 를 정한다. $K_Y^{\otimes 2}$ 를 자명하게 하는 단면 $s$ 를 하나 고르고, $K_Y$ 의 원소 $v$ 가운데 $v\otimes v=s$ 인 것을 모은 곡면이 $X$ 다. $s$ 가 어디서도 $0$ 이 아니므로 분기점이 없다. 이것을 **K3 덮개(K3 cover)** 라 한다.

정리. Enriques 곡면의 K3 덮개는 K3 곡면이고, $Y$ 의 [기본군](fundamental-group.md)은 $\mathbb Z/2$ 다.

증명의 요지. $K_X=\pi^\ast K_Y$ 이고 $\pi^\ast K_Y$ 는 덮개 위에서 자명해지므로 $K_X\cong\mathcal O_X$ 다. Noether 공식의 두 항은 분기점 없는 두 겹 [덮개공간](covering-spaces.md)에서 모두 두 배가 되므로 $\chi(\mathcal O_X)=2\chi(\mathcal O_Y)=2(1-0+0)=2$ 다. $p_g(X)=1$ 이므로 $q(X)=0$ 이고, $X$ 는 K3 곡면이다. K3 곡면은 단순연결이므로 $X$ 가 $Y$ 의 보편 덮개이고 기본군은 덮개 변환군 $\mathbb Z/2$ 다.

거꾸로 K3 곡면을 고정점 없는 대합으로 나눈 몫은 직관 절의 논법대로 Enriques 곡면이다. 그래서 Enriques 곡면은 고정점 없는 대합을 갖춘 K3 곡면과 같은 것이다.

## 위상 불변량

Noether 공식에 $\chi(\mathcal O_Y)=1$, $K_Y^2=0$ 을 넣으면 $c_2(Y)=12$ 다. K3 곡면의 Euler 표수 $24$ 를 덮개의 겹수 $2$ 로 나눈 값과 같다.

$b_1=0$ 이므로 $b_2=12-2=10$ 이다. $p_g=0$ 이므로 $h^{1,1}=b_2=10$ 이고, $H^2(Y,\mathbb C)$ 의 모든 류가 $(1,1)$ 형이다.

## 교차 격자

$H^2(Y,\mathbb Z)$ 는 $\mathbb Z^{10}\oplus\mathbb Z/2$ 이고, 꼬임 부분은 $K_Y$ 의 류가 생성한다. 꼬임을 나눈 격자 위의 [교차형식](intersection-form.md)은 단모듈러이고 부호수가 $(1,9)$ 이며 짝수다.

부호수는 Hirzebruch 부호수 공식(Hirzebruch signature formula) $\tau=(c_1^2-2c_2)/3=(0-24)/3=-8$ 과 $b_2=10$ 에서 나온다. 짝수성은 Wu 공식(Wu formula) $x\cdot x\equiv x\cdot K_Y \pmod 2$ 에서 나온다. $K_Y$ 가 꼬임 원소라 우변이 $0$ 이다. 부정부호 짝수 단모듈러 형식은 계수와 부호수로 정해지므로 다음이 나온다[^1].

$$
H^2(Y,\mathbb Z)/\mathrm{tors}\cong U\oplus E_8(-1)
$$

$U$ 는 쌍곡형식, $E_8(-1)$ 은 [E₈ 격자](e8-lattice.md)의 형식에 $-1$ 을 곱한 것이다. K3 덮개 $X$ 에서 보면, $\pi^\ast$ 는 교차수를 두 배로 하므로 $H^2(X,\mathbb Z)$ 안의 $\sigma^\ast$ 불변 부분격자는 $U(2)\oplus E_8(-2)$ 이고, $\sigma^\ast$ 가 부호를 바꾸는 부분격자는 $U\oplus U(2)\oplus E_8(-2)$ 다[^1]. 계수의 합 $10+12=22$ 가 K3 격자의 계수다.

## 사영성

모든 Enriques 곡면은 사영 대수곡면이다. $H^2(Y,\mathbb C)$ 의 모든 류가 $(1,1)$ 형이므로 Lefschetz $(1,1)$ 정리(Lefschetz (1,1) theorem)로 모든 정수 류가 선다발의 류이고, 부호수 $(1,9)$ 의 양의 방향에서 자기교차수가 양인 선다발을 고를 수 있다. 그러므로 Picard 수는 $10$ 이다. K3 곡면은 Picard 수가 $0$ 인 것도 있어 사영이 아닐 수 있다는 점과 다르다.

## 유리곡면과의 구별

Castelnuovo 유리성 판정법(Castelnuovo's rationality criterion). 매끄러운 사영 대수곡면이 유리곡면일 필요충분조건은 $q=P_2=0$ 이다[^2]. Enriques 곡면은 $q=p_g=0$ 이지만 $P_2=1$ 이므로 유리곡면이 아니다. 직관 절의 물음에 대한 답이다.

# 활용

- 곡면 분류. 극소 대수곡면 가운데 Kodaira 차원(Kodaira dimension)이 $0$ 인 것은 K3 곡면, Enriques 곡면, 아벨 곡면, 쌍타원 곡면(bielliptic surface)의 네 부류이고, $(b_1,p_g)$ 가 차례로 $(0,1)$, $(0,0)$, $(4,1)$, $(2,0)$ 이다[^2]. 넷 가운데 Enriques 곡면만 $b_1=p_g=0$ 이다.
- 4 차원 위상. Enriques 곡면의 교차형식은 짝수인데 부호수가 $-8$ 이다. $w_2$ 는 $c_1=-K_Y$ 를 $2$ 로 줄인 것이고 $K_Y$ 의 류가 $0$ 이 아니므로 스핀 다양체가 아니다. [Rokhlin 정리](rokhlin-theorem.md)가 단순연결을 가정해야 하는 이유를 보이는 예다.
- 모듈라이. Enriques 곡면은 $\sigma^\ast$ 가 부호를 바꾸는 계수 $12$ 의 격자로 주기를 적어 $10$ 차원의 모듈라이 공간을 갖는다. 직관 절의 이차식 $Q_i$, $R_i$ 의 계수를 바꾸면 이 공간의 열린 부분이 나온다[^1].

[^1]: W. Barth, K. Hulek, C. Peters and A. Van de Ven, *Compact Complex Surfaces*, 2nd ed., Springer, 2004, Chapter VIII.

[^2]: A. Beauville, *Complex Algebraic Surfaces*, 2nd ed., London Mathematical Society Student Texts 34, Cambridge University Press, 1996, Chapters V and VIII.

# 연관 문서

## 선수지식

- [K3 곡면](k3-surfaces.md)
- [덮개공간](covering-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #algebra #complex_analysis #algebraic_topology
