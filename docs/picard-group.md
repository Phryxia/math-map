# Picard 군

# 개요

공간 위의 가역층은 텐서곱으로 군을 이루고 이 군을 Picard 군이라 한다. Picard 군은 [층 코호몰로지](sheaf-cohomology.md)로 $H^1(X,\mathcal O_X^{\ast})$ 와 같다.

지수열의 긴 완전열이 이 군을 두 조각으로 나눈다. 위상적 조각이 첫 Chern 류이고 나머지가 복소 구조에서 오는 조각이다.

# 직관

Riemann 구면 위에서 점 $p$ 에서 1차 영점을 갖고 점 $q$ 에서 1차 극점을 가지며 다른 곳에서는 영점도 극점도 없는 유리형 함수를 찾는다. $f(z)=(z-p)/(z-q)$ 가 그런 함수다.

같은 물음을 원환면에서 묻는다. $p\ne q$ 를 잡고 $p$ 에서만 1차 영점, $q$ 에서만 1차 극점인 유리형 함수를 찾으면 그런 함수가 없다. 있다면 그 함수가 차수 $1$ 인 정칙사상 $X\to\mathbb P^1$ 이 되어 원환면과 구면이 같아진다.

영점과 극점의 위치를 적은 자료를 정수 계수 형식합으로 쓰고, 유리형 함수에서 오는 것들로 나눈다. 구면에서는 차수가 $0$ 이면 모두 함수에서 오지만 원환면에서는 그렇지 않다. 남는 몫이 공간마다 다르고, 그 몫을 재는 군이 Picard 군이다.

# 정의

## 가역층

$X$ 위의 $\mathcal O_X$ 가군층 $\mathcal L$ 이 국소적으로 $\mathcal O_X$ 와 동형이면 **가역층**이라 한다. 가역층의 텐서곱은 가역층이고 $\mathcal L^{-1}=\mathcal{H}\mathrm{om}(\mathcal L,\mathcal O_X)$ 가 역원이다.

가역층의 동형류가 텐서곱으로 이루는 아벨군을 **Picard 군** $\mathrm{Pic}(X)$ 라 한다.

## 코호몰로지 기술

$$
\mathrm{Pic}(X)\ \cong\ H^1(X,\mathcal O_X^{\ast})
$$

가역층을 덮개 위에서 자명화하면 전이함수 $g_{ij}\in\mathcal O_X^{\ast}(U_i\cap U_j)$ 가 나오고 이것이 Čech 1-코사이클이다. 자명화를 바꾸는 것이 코바운더리를 곱하는 것이므로 동형류와 코호몰로지류가 대응한다.

## Divisor 류군

$X$ 가 매끄러운 다양체이면 여차원 $1$ 인 기약 부분다양체의 형식합을 divisor 라 하고, 유리형 함수의 영점과 극점에서 오는 divisor 를 주 divisor 라 한다. 몫군 $\mathrm{Cl}(X)$ 가 $\mathrm{Pic}(X)$ 와 동형이다.[^1]

# 성질

## 지수열

복소다양체에서 $0\to\mathbb Z\to\mathcal O_X\to\mathcal O_X^{\ast}\to 0$ 의 긴 완전열이 다음을 준다.

$$
H^1(X,\mathbb Z)\to H^1(X,\mathcal O_X)\to\mathrm{Pic}(X)\xrightarrow{c_1}H^2(X,\mathbb Z)\to H^2(X,\mathcal O_X)
$$

연결 사상 $c_1$ 이 첫 Chern 류다. $c_1$ 의 핵을 $\mathrm{Pic}^0(X)$ 라 쓰고, 위 완전열에서 이것이 $H^1(X,\mathcal O_X)$ 를 격자 $H^1(X,\mathbb Z)$ 의 상으로 나눈 것과 같다. $X$ 가 콤팩트 Kähler 이면 이 몫이 복소 토러스다.

## 콤팩트 Riemann 면

종수 $g$ 인 콤팩트 Riemann 면에서 divisor 의 차수가 군 준동형 $\deg:\mathrm{Pic}(X)\to\mathbb Z$ 를 주고 이것은 전사다. 핵 $\mathrm{Pic}^0(X)$ 는 차원 $g$ 인 복소 토러스이고 Jacobi 다양체라 한다.

차수 $0$ 인 divisor 가 주 divisor 인 것과 Abel–Jacobi 사상으로 보낸 값이 $0$ 인 것이 동치다. 원환면에서 $p-q$ 가 주 divisor 가 아닌 것이 이 판정의 한 경우다.

## 사영공간

$\mathrm{Pic}(\mathbb P^n)\cong\mathbb Z$ 이고 생성원이 초평면에 대응하는 $\mathcal O(1)$ 이다. 초곡면의 차수가 그 동형의 값이다.

# 활용

- **Riemann–Roch.** [Riemann–Roch 정리](riemann-roch.md)의 양변이 divisor 의 류에만 의존하므로 정리가 $\mathrm{Pic}(X)$ 위의 등식이다. $\deg$ 가 같은 류들끼리 전역 단면의 차원을 비교한다.
- **타원곡선의 군 구조.** [타원곡선](elliptic-curves.md)에서 점 $P$ 를 $\mathcal O(P-O)$ 의 류로 보내면 곡선과 $\mathrm{Pic}^0$ 사이의 전단사가 되고, 곡선 위의 덧셈이 divisor 류의 덧셈이 된다.
- **선다발의 위상적 분류.** $c_1$ 의 상이 어느 $H^2(X,\mathbb Z)$ 원소가 정칙 선다발에서 오는지를 말한다. Lefschetz 의 $(1,1)$ 류 정리가 그 상을 Hodge 분해로 기술한다.

[^1]: Robin Hartshorne, *Algebraic Geometry*, Springer Graduate Texts in Mathematics 52 (1977), II.6. divisor 류군과 가역층의 대응, 사영공간의 계산이 이 절에 있다.

# 연관 문서

## 선수지식

- [층 코호몰로지](sheaf-cohomology.md)

## 더 알아보기

- [Jacobi 다양체](jacobian-variety.md)

#algebraic_topology #complex_analysis #category_theory
