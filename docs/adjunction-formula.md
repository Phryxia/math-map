# 딸림 공식

# 개요

**딸림 공식(adjunction formula)** 은 곡면 위에 놓인 곡선의 표준류를 곡면의 표준류와 곡선 자신으로 적는 식이다. 평면곡선 $x^4+y^4=1$ 에 구멍이 몇 개 있는지, 곧 종수가 얼마인지를 물으면 곡선 위의 미분형식을 직접 찾기는 어렵다.

딸림 공식은 평면의 미분형식을 곡선으로 제한해 이 물음을 곡선의 차수만으로 답한다. 차수 $d$ 인 매끄러운 평면곡선의 종수는 $(d-1)(d-2)/2$ 이고, 사차곡선은 $3$ 이다.

# 직관

[Riemann–Roch 정리](riemann-roch.md)에 따르면 콤팩트 [Riemann 곡면](riemann-surfaces.md)의 종수 $g$ 는 정칙 $1$ 형식들이 이루는 공간의 차원이다. 곡선 $C$ 를 $F(x,y)=0$ 으로 두면 곡선 위에서 $x$ 와 $y$ 가 서로 묶여 있어 $1$ 형식을 직접 적기 어렵다. 평면에서는 $2$ 형식 $dx\wedge dy$ 를 바로 적을 수 있으므로 평면에서 시작한다.

$F_y\ne 0$ 인 $C$ 의 점 근처에서는 $(x,F)$ 를 좌표로 쓸 수 있다. $dF=F_x\thinspace dx+F_y\thinspace dy$ 이므로 다음이 나온다.

$$
\frac{dx\wedge dy}{F}=\frac{dx}{F_y}\wedge\frac{dF}{F}
$$

$dF/F$ 는 $C$ 를 가로지르는 방향의 극이고, 그 앞의 $dx/F_y$ 가 $C$ 위의 $1$ 형식이다. 평면의 $2$ 형식 가운데 $C$ 를 따라 한 번 극을 갖는 것에서 $C$ 의 $1$ 형식이 하나씩 나온다.

다음은 무한원 직선이다. $u=1/x$, $v=y/x$ 로 두면 $dx\wedge dy=-du\wedge dv/u^3$ 이므로 $dx\wedge dy$ 는 무한원 직선을 따라 $3$ 차 극을 갖는다. 다항식 $p$ 를 곱한 $p\thinspace dx\wedge dy/F$ 는 거기서 극의 차수가 $3+\deg p-d$ 이므로, $\deg p\le d-3$ 이면 극이 $C$ 에만 있고 $p\thinspace dx/F_y$ 는 $C$ 위의 정칙 $1$ 형식이다.

차수가 $d-3$ 이하인 단항식은 $(d-1)(d-2)/2$ 개이고, 이 개수가 종수다[^1]. $x^4+y^4=1$ 에서는 $p=1,x,y$ 의 세 개라 종수가 $3$ 이다. 평면 위의 $2$ 형식이 무한원 직선에서 갖는 극의 차수 $3$ 과 곡선의 차수 $d$ 가 함께 곡선의 $1$ 형식을 정한 것이고, 이것을 식으로 적은 것이 딸림 공식이다.

# 정의

$S$ 를 매끄러운 사영곡면, $C\subset S$ 를 매끄러운 곡선이라 하고 $K_S$, $K_C$ 를 각각의 표준인자라 한다. **딸림 공식** 은 다음 선다발의 동형이다.

$$
K_C=(K_S+C)\vert\_C
$$

양변의 차수를 [교차 이론](intersection-theory.md)의 교차수로 적으면 $\deg K_C=2g(C)-2$ 이므로 다음이 나온다.

$$
2g(C)-2=C\cdot(C+K_S)
$$

사영평면에서 $K=-3H$ 이고 차수 $d$ 인 곡선의 류는 $dH$ 이므로 $2g-2=d(d-3)$ 이다. 직관 절의 $(d-1)(d-2)/2$ 가 여기서 나온다.

## 산술 종수

$C$ 가 기약이지만 매끄럽지 않을 수 있으면 $2p_a(C)-2=C\cdot(C+K_S)$ 로 **산술 종수(arithmetic genus)** $p_a$ 를 정의한다. $C$ 가 매끄러우면 $p_a$ 는 종수와 같다.

평면 삼차곡선 $y^2=x^2+x^3$ 은 원점에 마디가 있고, $p_a=1$ 이다. 이 곡선은 $t=y/x$ 로 매개화되므로 사영직선과 쌍유리 동치이고, 매개화하는 곡선의 종수는 $0$ 이다.

## 일반 차원

매끄러운 다양체 $Y$ 안의 매끄러운 초곡면 $X$ 에 대해서도 같은 꼴 $K_X=(K_Y+X)\vert\_X$ 가 성립한다[^2].

# 성질

## 증명

$C$ 의 [아이디얼](ideals-quotient-rings.md) 층을 $\mathcal I$ 라 하면 $\mathcal I/\mathcal I^2$ 는 $C$ 의 여법다발이고 $\mathcal O_C(-C)$ 와 같다. 다음 [완전열](exact-sequences.md)이 성립한다.

$$
0\to\mathcal O_C(-C)\to\Omega_S\vert\_C\to\Omega_C\to 0
$$

가운데 항은 계수 $2$, 양끝 항은 계수 $1$ 인 다발이다. 짧은 완전열에서 최고차 외적은 곱이 되므로 $K_S\vert\_C=K_C\otimes\mathcal O_C(-C)$ 이고, 이것이 딸림 공식이다. 직관 절의 계산은 이 사상을 좌표로 적은 것이다.

## 특이점과 종수

$C$ 의 정규화를 $\widetilde C$ 라 하면 다음이 성립한다[^1].

$$
p_a(C)=g(\widetilde C)+\sum_{P}\delta_P
$$

$\delta_P$ 는 특이점 $P$ 마다 정해지는 양의 정수이고, 마디와 뾰족점에서는 $1$ 이다. 그래서 $p_a(C)\ge g(\widetilde C)$ 이고, 등호는 $C$ 가 매끄러울 때만이다. 정의 절의 마디 삼차곡선은 $1=0+1$ 이다.

[부풀림](blow-ups.md)에서 중복도 $m$ 인 점을 부풀리면 $p_a$ 가 $m(m-1)/2$ 만큼 준다. 이것은 고유 변환에 딸림 공식을 쓴 결과다.

## 초곡면

사영공간 $\mathbb P^n$ 은 $K=-(n+1)H$ 이므로, 그 안의 차수 $d$ 인 매끄러운 초곡면 $X$ 는 다음을 만족한다.

$$
K_X=\mathcal O(d-n-1)\vert\_X
$$

| 차원 n | 차수 d | 표준다발 | 곡선이나 곡면 |
| --- | --- | --- | --- |
| 2 | 3 | 자명 | 타원곡선 |
| 2 | 4 | $\mathcal O(1)\vert\_X$ | 종수 3 곡선 |
| 3 | 3 | $\mathcal O(-1)\vert\_X$ | 삼차곡면 |
| 3 | 4 | 자명 | K3 곡면 |
| 4 | 5 | 자명 | 오차 삼차원 다양체 |

$K_X$ 가 자명하면 정칙 최고차 형식이 어디서도 $0$ 이 되지 않는다. 사차곡선에서 $K_X=\mathcal O(1)\vert\_X$ 는 직관 절의 $1,x,y$ 가 직선의 방정식들이라는 것과 같다.

## 곱 곡면 위의 곡선

$\mathbb P^1\times\mathbb P^1$ 위에서 이중차수 $(a,b)$ 인 곡선의 류를 $(a,b)$ 로 적으면 교차수는 $(a,b)\cdot(a',b')=ab'+a'b$ 이고 $K=(-2,-2)$ 다. 딸림 공식으로 다음이 나온다.

$$
2g-2=2ab-2a-2b,\qquad g=(a-1)(b-1)
$$

이중차수 $(2,2)$ 인 매끄러운 곡선은 종수 $1$ 이고, $(3,3)$ 은 종수 $4$ 다.

## 유리곡선의 자기교차수

$C$ 가 사영직선과 동형이면 $C^2+K_S\cdot C=-2$ 다. 부풀림의 예외 곡선은 $E^2=-1$ 이므로 $K\cdot E=-1$ 이다. $K_S=0$ 인 곡면에서는 매끄러운 유리곡선이 모두 $C^2=-2$ 다.

# 활용

- 곡면 분류의 판정. [Kodaira 차원](kodaira-dimension.md)의 초곡면 판정은 위 표의 $K_X=\mathcal O(d-n-1)\vert\_X$ 의 부호로 한다.
- (−1) 곡선의 셈. [del Pezzo 곡면](del-pezzo-surfaces.md)의 (−1) 곡선은 $\ell^2=-1$, $\ell\cdot K=-1$ 을 만족하는 류로 세는데, 둘째 조건이 딸림 공식에서 나온다.
- K3 곡면의 곡선. [K3 곡면](k3-surfaces.md)은 $K=0$ 이므로 종수 $g$ 인 매끄러운 곡선이 $C^2=2g-2$ 를 만족하고, 격자의 $-2$ 류가 유리곡선 후보가 된다.
- 불변량 계산. [Noether 공식](noether-formula.md)의 초곡면 예와 [삼차곡면](cubic-surfaces.md)의 $K^2=3$ 은 $K=(d-4)H$ 에서 계산한다.
- 표준 매장. 매끄러운 평면 사차곡선은 $K=\mathcal O(1)\vert\_C$ 이므로 표준사상이 평면에 넣는 사상 그 자체이고, [초타원곡선](hyperelliptic-curves.md)이 아니다.

[^1]: R. Hartshorne, *Algebraic Geometry*, Graduate Texts in Mathematics 52, Springer, 1977, Chapter V, Section 1 과 Exercise IV.1.8.

[^2]: P. Griffiths and J. Harris, *Principles of Algebraic Geometry*, Wiley, 1978, Chapter 1, Section 1.

# 연관 문서

## 선수지식

- [교차 이론](intersection-theory.md)
- [Riemann–Roch 정리](riemann-roch.md)

## 더 알아보기

- [선직곡면](ruled-surfaces.md)

#algebra #complex_analysis #differential_geometry
