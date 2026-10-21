# Yang–Mills 이론

# 개요

**Yang–Mills 이론(Yang–Mills theory)** 은 주다발의 [접속](connection.md)에 곡률의 $L^2$ 노름의 제곱을 대응시키는 Yang–Mills 범함수와 그 임계점을 다루는 이론이다. 그 임계점이 **Yang–Mills 접속**이고, 조건은 곡률의 공변 여미분이 $0$ 이라는 2 계 방정식이다.

4 차원에서 이 범함수는 아래로 유계이고 하한이 다발의 위상 불변량으로 정해진다. 하한에 이르는 접속이 자기쌍대이거나 반자기쌍대인 접속이고, 그 모듈라이 공간이 4 차원 다양체의 매끄러운 구조를 조사하는 도구가 된다.

# 직관

전자기장은 $\mathrm{U}(1)$ [주다발](principal-bundles.md)의 접속으로 적힌다. 접속을 국소적으로 1 형식 $A$ 로 쓰면 장은 $F=dA$ 이고, 진공 Maxwell 방정식은 $dF=0$ 과 $d^\ast F=0$ 둘이다. 앞의 것은 $F=dA$ 에서 자동으로 따라오고, 뒤의 것은 작용 $\int\vert F\vert^2$ 를 $A$ 에 대해 변분해서 나온다. 구조군을 비가환 Lie 군으로 바꾸면 곡률이 $F_A=dA+A\wedge A$ 가 되고 외미분이 공변 외미분 $d_A$ 로 바뀐다.

4 차원에서는 Hodge 별표가 2 형식을 2 형식으로 보내고 제곱이 항등이므로, 곡률이 고윳값 $\pm 1$ 의 성분 $F_A=F_A^++F_A^-$ 로 갈라진다. 두 성분으로 적으면 $\int\vert F_A\vert^2=\int(\vert F_A^+\vert^2+\vert F_A^-\vert^2)$ 이고 Chern 수의 적분은 $\int(\vert F_A^+\vert^2-\vert F_A^-\vert^2)$ 에 비례한다. 앞의 합이 뒤의 차이보다 작을 수 없으므로 범함수의 하한이 Chern 수로 정해지고, 등호는 두 성분 가운데 하나가 $0$ 일 때 성립한다.

# 정의

## Yang–Mills 범함수

콤팩트 Riemann 다양체 $M$ 위의 주 $G$ 다발 $P$ 를 두고 $G$ 를 콤팩트 [Lie 군](lie-groups.md)이라 한다. $P$ 의 접속 $A$ 의 곡률 $F_A$ 는 수반다발 $\mathrm{ad}\thinspace P$ 에 값을 갖는 2 형식이다. **Yang–Mills 범함수**는 다음이다.[^1]

$$
\mathrm{YM}(A)=\frac12\int_M\vert F_A\vert^2\thinspace dV
$$

노름은 $M$ 의 계량과 $\mathfrak g$ 의 불변 내적으로 정한다. 게이지 변환이 곡률을 수반작용으로 옮기고 내적이 불변이므로 $\mathrm{YM}$ 은 게이지군의 작용에 불변이다.

## Yang–Mills 방정식

접속의 공간은 아핀 공간이고 접벡터가 $\mathrm{ad}\thinspace P$ 값 1 형식 $a$ 다. $F\_{A+ta}=F_A+t\thinspace d_Aa+t^2a\wedge a$ 이므로 변분은 다음이다.

$$
\frac{d}{dt}\Big\vert\_{t=0}\mathrm{YM}(A+ta)=\int_M\langle d_A^\ast F_A,a\rangle\thinspace dV
$$

따라서 임계점 조건은 **Yang–Mills 방정식** $d_A^\ast F_A=0$ 이다. Bianchi 항등식 $d_AF_A=0$ 은 모든 접속에서 성립하므로 방정식이 아니다.

## 반자기쌍대 접속

$\dim M=4$ 에서 Hodge 별표는 $\Omega^2$ 의 대합이고 $\Omega^2=\Omega^+\oplus\Omega^-$ 로 갈라진다. $F_A^+=0$ 인 접속을 **반자기쌍대 접속** 또는 **순간자**라 하고, $F_A^-=0$ 인 접속을 자기쌍대 접속이라 한다.

반자기쌍대 접속은 Yang–Mills 방정식을 만족한다. $\ast F_A=-F_A$ 이므로 $d_A^\ast F_A$ 가 Bianchi 항등식에서 $0$ 이 된다.

## 모듈라이 공간

게이지군 $\mathcal G$ 를 $P$ 의 자기동형군이라 한다. 반자기쌍대 접속의 집합을 $\mathcal G$ 로 나눈 것이 **순간자 모듈라이 공간** $\mathcal M(P)$ 다.

# 성질

## 4 차원의 하한

**정리.** $\dim M=4$ 이고 $G=\mathrm{SU}(2)$ 이면 $\mathrm{YM}(A)\ge 8\pi^2\vert k\vert$ 다. 여기서 $k$ 는 $P$ 의 둘째 Chern 수다. 등호는 $k\lt 0$ 에서 반자기쌍대, $k\gt 0$ 에서 자기쌍대 접속일 때만 성립한다.

증명의 요지. $8\pi^2k=\int_M(\vert F_A^-\vert^2-\vert F_A^+\vert^2)$ 이고 $2\thinspace\mathrm{YM}(A)=\int_M(\vert F_A^+\vert^2+\vert F_A^-\vert^2)$ 다. 두 식을 더하거나 빼면 $2\thinspace\mathrm{YM}(A)\mp 8\pi^2k$ 가 음이 아닌 적분이 되고, 등호 조건이 해당 성분의 소멸이다. ∎

## 등각 불변성

$\dim M=4$ 에서 $\mathrm{YM}$ 은 계량의 등각 변형에 불변이다. 계량을 $e^{2f}g$ 로 바꾸면 2 형식의 노름이 $e^{-4f}$ 배가 되고 부피 형식이 $e^{4f}$ 배가 되어 상쇄된다. 자기쌍대 분해도 등각류에만 의존한다.

## Uhlenbeck 콤팩트성

**정리.** $\mathrm{YM}$ 이 균등하게 유계인 반자기쌍대 접속의 열은, 게이지 변환을 거치면 유한개의 점을 뺀 곳에서 부분열이 반자기쌍대 접속으로 수렴한다.

빠진 점마다 에너지가 $8\pi^2$ 의 정수배만큼 집중되고, 그 점을 중심으로 늘려 보면 $\mathbb R^4$ 위의 순간자가 나타난다. 그래서 모듈라이 공간은 콤팩트하지 않고, 에너지가 더 작은 모듈라이 공간과 점들의 곱으로 경계를 붙여 콤팩트화한다.

## Donaldson 정리

**정리(Donaldson).** 콤팩트 단연결 매끄러운 4 차원 다양체의 교차형식이 정부호이면 그 형식은 대각화된다.

증명의 요지. $k=-1$ 인 $\mathrm{SU}(2)$ 다발의 순간자 모듈라이 공간이 5 차원이고, 특이점은 자명하지 않은 안정자에서만 나와 교차형식의 제곱이 $-1$ 인 류마다 하나다. 이 공간이 원래 다양체와 특이점 주변의 $\mathbb{CP}^2$ 들을 경계로 하는 코보디즘을 주므로 부호수를 비교하면 그런 류의 개수가 교차형식의 계수와 같아야 한다. ∎

# 활용

- [Seiberg–Witten 이론](seiberg-witten-theory.md)이 같은 틀에서 구조군을 $\mathrm{U}(1)$ 로 바꾸고 스피너 장을 넣은 것이다. 게이지군이 가환이 되어 모듈라이 공간이 콤팩트해지고 Uhlenbeck 콤팩트화가 필요하지 않다.
- [순간자 Floer 호몰로지](instanton-floer-homology.md)의 미분이 3 차원 다양체의 두 평탄 접속을 잇는 반자기쌍대 접속의 개수다.
- [Chern–Simons 이론](chern-simons.md)의 작용이 Yang–Mills 작용의 경계항이다. 4 차원 다양체 위의 $\mathrm{tr}(F_A\wedge F_A)$ 적분이 경계에서 Chern–Simons 범함수가 된다.
- 물리에서 강한 상호작용과 약한 상호작용의 장이 $\mathrm{SU}(3)$ 과 $\mathrm{SU}(2)$ 주다발의 접속이다.

[^1]: S. K. Donaldson and P. B. Kronheimer, *The Geometry of Four-Manifolds*, Oxford University Press (1990), Ch. 2–4, 8. Yang–Mills 범함수와 변분, 순간자 모듈라이 공간의 구성, Uhlenbeck 콤팩트성과 대각화 정리가 이 장들에 있다.

# 연관 문서

## 선수지식

- [접속](connection.md)
- [주다발](principal-bundles.md)

## 더 알아보기

- [Donaldson 불변량](donaldson-invariants.md)
- [순간자 Floer 호몰로지](instanton-floer-homology.md)

#differential_geometry #topology #algebraic_topology
