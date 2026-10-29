# 양자 코호몰로지

# 개요

**양자 코호몰로지(quantum cohomology)** 는 매끄러운 사영다양체의 코호몰로지에 [Gromov–Witten 불변량](gromov-witten-invariants.md)으로 변형한 곱을 준 환이다. 사영평면에서 직선 세 개를 일반 위치에 두면 셋이 공통으로 지나는 점이 없어서, 교차를 세는 컵곱으로는 직선류의 세제곱이 $0$ 이다. 사이클들을 지나는 유리곡선의 수를 차수별로 세어 변수 $q$ 로 묶어 곱에 더하면 직선류의 세제곱이 $q$ 가 되고, 이 곱의 결합성에서 곡선의 수를 구하는 점화식이 나온다.

# 직관

$\mathbb P^2$ 의 코호몰로지는 $1$, 직선류 $H$, 점류 $H^2$ 로 생성되고 $H^3=0$ 이다. 컵곱이 사이클이 만나는 수를 세는 것이므로 직선 셋을 일반 위치에 두면 공통점이 없고 그래서 곱이 $0$ 이다.

같은 세 사이클을 직선으로 잇는 대신 차수 $d$ 의 유리곡선으로 잇는 수를 센다. 점 둘을 지나는 직선은 하나이므로 두 점류와 한 직선류에 대한 차수 $1$ 의 수가 $1$ 이다. 차수마다 이런 수가 있고, 차수를 기록하는 변수 $q$ 를 달아 전부 더한다.

더한 것을 곱으로 적으면 $H$ 를 세 번 곱한 값이 $0$ 이 아니라 $q$ 가 된다. 이 곱이 결합적인지는 자명하지 않고, 결합성은 네 점 불변량을 두 가지 방식으로 쪼갠 결과가 같다는 데서 나온다.

컵곱이 사이클의 교차만 세는 데 비해 양자곱은 사이클들을 잇는 유리곡선까지 센다. 변형 매개변수를 $0$ 으로 보내면 컵곱이 나온다.

# 정의

$X$ 를 매끄러운 사영다양체라 하고 $\lbrace T_i\rbrace$ 를 $H^\ast(X,\mathbb Q)$ 의 기저, $\lbrace T^i\rbrace$ 를 Poincaré 쌍대 기저라 한다.

**Novikov 환**은 $\beta\in H_2(X,\mathbb Z)$ 로 지수를 갖는 형식 급수의 환 $\Lambda$ 로, 생성원 $q^\beta$ 가 $q^\beta q^{\beta'}=q^{\beta+\beta'}$ 를 만족하는 것이다. 유효류 $\beta$ 만 쓴다.

**양자곱**은 $H^\ast(X,\mathbb Q)\otimes\Lambda$ 위의 곱

$$\gamma_1\ast\gamma_2=\sum\_\beta\sum_i\langle\gamma_1,\gamma_2,T_i\rangle\_{0,\beta}\thinspace T^i\thinspace q^\beta$$

이고, $\langle\cdot\rangle\_{0,\beta}$ 는 종수 $0$ 의 Gromov–Witten 불변량이다. $\beta=0$ 항이 컵곱이므로 $q=0$ 에서 양자곱은 컵곱이다.

**양자 코호몰로지 환**은 이 곱을 준 $QH^\ast(X)=H^\ast(X,\mathbb Q)\otimes\Lambda$ 다.

# 성질

## 결합성

양자곱은 결합적이고 가환이며 $1$ 이 단위원이다.

증명의 요지. $(\gamma_1\ast\gamma_2)\ast\gamma_3$ 와 $\gamma_1\ast(\gamma_2\ast\gamma_3)$ 의 차이는 네 점 불변량 $\langle\gamma_1,\gamma_2,\gamma_3,\gamma_4\rangle\_{0,\beta}$ 를 모듈라이 공간 $\overline{\mathcal M}\_{0,4}$ 의 경계로 쪼갠 결과다. $\overline{\mathcal M}\_{0,4}$ 는 $\mathbb P^1$ 이고 그 경계점 세 개가 네 표시점을 둘씩 나누는 세 가지 방식에 대응한다. 경계점은 $\mathbb P^1$ 안에서 서로 호몰로지류가 같으므로 두 방식의 쪼갠 합이 일치한다.

이 일치를 좌표로 적은 것이 WDVV(Witten–Dijkgraaf–Verlinde–Verlinde) 방정식이다. 불변량을 미지수로 보면 이 방정식이 점화식이 되어 낮은 차수의 불변량에서 높은 차수의 것을 결정한다.[^1]

## 사영공간의 양자 코호몰로지

$X=\mathbb P^n$ 에서 양자 코호몰로지 환은 하나의 관계식으로 적힌다.

$$QH^\ast(\mathbb P^n)=\mathbb Q\lbrack H,q\rbrack/(H^{n+1}-q)$$

컵곱에서는 $H^{n+1}=0$ 이고 양자곱에서는 $H^{n+1}=q$ 다. 차이를 주는 것은 직선류 하나짜리 유효류에 대한 세 점 불변량이고, 그 값이 $\mathbb P^n$ 의 점 둘을 지나는 직선이 하나라는 셈이다.

$n=2$ 에서 $QH^\ast(\mathbb P^2)=\mathbb Q\lbrack H,q\rbrack/(H^3-q)$ 이고, 이 환이 직관 절의 셈을 식 하나로 담는다.

## Frobenius 구조

$H^\ast(X)$ 위에 Poincaré 쌍대가 주는 쌍선형형식과 양자곱을 함께 두면 쌍선형형식이 곱과 양립한다.

$$\langle\gamma_1\ast\gamma_2,\gamma_3\rangle=\langle\gamma_1,\gamma_2\ast\gamma_3\rangle$$

변형 매개변수를 $H^2(X)$ 뿐 아니라 코호몰로지 전체로 넓히면 각 점에서 이런 곱이 하나씩 생기고, 그 족이 Frobenius 다양체의 구조를 이룬다. WDVV 방정식이 그 구조를 정하는 미분방정식이다.

# 활용

- **열거기하의 셈.** 결합성에서 나오는 점화식으로 유리곡선의 수를 계산한다. $\mathbb P^2$ 의 차수 $d$ 유리곡선이 점 $3d-1$ 개를 지나는 수가 이 점화식으로 결정되고, 고전적으로 알려진 차수 $1,2,3$ 의 값과 맞는다.
- **거울대칭.** Calabi–Yau 다양체의 양자 코호몰로지에서 나오는 미분방정식이 거울짝의 주기 적분이 만족하는 방정식과 일치한다. 양쪽을 짝지으면 곡선 셈이 주기 적분의 계산으로 바뀐다.
- **심플렉틱 불변량.** Gromov–Witten 불변량이 심플렉틱 구조만으로 정해지므로 양자 코호몰로지 환도 그렇다. 두 사영다양체의 양자 코호몰로지가 다르면 심플렉틱 다양체로서도 다르다.

[^1]: M. Kontsevich and Yu. Manin, "Gromov–Witten Classes, Quantum Cohomology, and Enumerative Geometry", Communications in Mathematical Physics **164** (1994), 525–562.

# 연관 문서

## 선수지식

- [Gromov–Witten 불변량](gromov-witten-invariants.md)
- [코호몰로지](cohomology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #algebraic_topology #differential_geometry
