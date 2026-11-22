# 균질화

# 개요

**균질화(homogenization)** 는 아주 짧은 주기로 바뀌는 계수를 가진 미분방정식을, 주기가 $0$ 으로 갈 때 상수 계수의 방정식으로 바꾸는 이론이다. 전도율이 $1$ 인 층과 $4$ 인 층을 같은 두께로 번갈아 쌓은 막대에서, 층이 아주 얇으면 막대는 한 가지 재료처럼 열을 전한다. 그 재료의 전도율은 산술평균 $5/2$ 가 아니라 조화평균 $8/5$ 이다.

균질화는 이 유효 계수를 한 주기 위의 보조 방정식, 곧 셀 문제를 풀어 정한다. 층을 쌓은 방향과 나란한 방향에서는 같은 재료의 유효 전도율이 산술평균 $5/2$ 로 바뀐다.

# 직관

$(0,1)$ 위의 방정식 $-(a(x/\varepsilon)u\_\varepsilon')'=f$, $u\_\varepsilon(0)=u\_\varepsilon(1)=0$ 을 본다. $a(y)$ 는 주기 $1$ 의 함수이고, 한 주기의 앞 절반에서 $1$, 뒤 절반에서 $4$ 다. 열 흐름 $\sigma\_\varepsilon=a(x/\varepsilon)u\_\varepsilon'$ 은 $-\sigma\_\varepsilon'=f$ 를 만족하므로 다음 꼴이다.

$$
\sigma\_\varepsilon(x)=c\_\varepsilon-\int_0^xf(t)\thinspace dt
$$

$\sigma\_\varepsilon$ 은 상수 $c\_\varepsilon$ 만 $\varepsilon$ 에 의존하므로 진동하지 않는다. 진동은 기울기 $u\_\varepsilon'=\sigma\_\varepsilon/a(x/\varepsilon)$ 에 있다. $\varepsilon\to 0$ 에서 $1/a(x/\varepsilon)$ 은 한 주기의 평균 $\tfrac12\cdot 1+\tfrac12\cdot\tfrac14=\tfrac58$ 로 약하게 수렴한다.

진동하지 않는 $\sigma\_\varepsilon$ 과 진동하는 $1/a(x/\varepsilon)$ 의 곱은 극한끼리의 곱으로 간다. 그래서 극한에서 $u'=\tfrac58\sigma$, 곧 $\sigma=\tfrac85u'$ 이고, 극한 방정식은 $-(\tfrac85u')'=f$ 다.

산술평균 $5/2$ 가 틀린 이유는 $a(x/\varepsilon)$ 과 $u\_\varepsilon'$ 이 함께 진동하기 때문이다. 전도율이 큰 층에서 기울기가 작으므로, 두 진동의 곱은 극한의 곱과 다르다.

# 정의

## 주기 계수의 문제

$Y=\lbrack 0,1)^n$ 이고 $A(y)$ 가 $Y$ 주기의 대칭 행렬값 함수이며 상수 $0\lt\lambda\le\Lambda$ 에서 $\lambda\vert\xi\vert^2\le A(y)\xi\cdot\xi\le\Lambda\vert\xi\vert^2$ 를 만족한다고 하자. 유계 영역 $\Omega\subset\mathbb R^n$ 과 $f\in H^{-1}(\Omega)$ 에서 다음 문제의 해 $u\_\varepsilon\in H^1_0(\Omega)$ 는 [Lax–Milgram 정리](lax-milgram.md)로 하나 있다.

$$
-\mathrm{div}\bigl(A(x/\varepsilon)\nabla u\_\varepsilon\bigr)=f
$$

## 셀 문제와 균질화 계수

$j=1,\dots,n$ 마다 $Y$ 주기의 $H^1$ 함수 $\chi_j$ 가 다음 **셀 문제(cell problem)** 를 만족한다. $\chi_j$ 는 평균이 $0$ 이 되도록 정하면 하나다.

$$
-\mathrm{div}\_y\bigl(A(y)(e_j+\nabla_y\chi_j)\bigr)=0
$$

**균질화 계수(homogenized coefficient)** $A^\ast$ 는 다음 상수 행렬이다[^1].

$$
A^\ast e_j=\int_YA(y)\bigl(e_j+\nabla_y\chi_j(y)\bigr)\thinspace dy
$$

직관 절의 $n=1$ 에서는 $a(1+\chi')$ 가 상수 $a^\ast$ 여야 하고 $\chi'$ 의 평균이 $0$ 이므로 $\int_0^1a^\ast/a=1$ 이다. 그러므로 $a^\ast=(\int_0^11/a)^{-1}=8/5$ 다.

# 성질

## 균질화 정리

정리. $\varepsilon\to 0$ 에서 $u\_\varepsilon$ 은 $H^1_0(\Omega)$ 에서 $u_0$ 으로 약하게 수렴하고 $A(x/\varepsilon)\nabla u\_\varepsilon$ 은 $L^2$ 에서 $A^\ast\nabla u_0$ 으로 약하게 수렴한다. $u_0$ 은 $-\mathrm{div}(A^\ast\nabla u_0)=f$ 의 $H^1_0$ 해다[^1].

증명의 요지. 해는 $H^1_0$ 에서 유계이므로 부분열에서 $u\_\varepsilon\rightharpoonup u_0$ 이고 흐름 $\sigma\_\varepsilon=A(x/\varepsilon)\nabla u\_\varepsilon\rightharpoonup\sigma$ 이며 $-\mathrm{div}\thinspace\sigma=f$ 다. Tartar 의 진동 시험 함수 $w\_\varepsilon^j(x)=x_j+\varepsilon\chi_j(x/\varepsilon)$ 은 $\nabla w\_\varepsilon^j\rightharpoonup e_j$ 와 $A(x/\varepsilon)\nabla w\_\varepsilon^j\rightharpoonup A^\ast e_j$ 를 만족하고, 셀 문제로 후자의 발산은 $0$ 이다.

$A$ 가 대칭이므로 다음 두 내적은 같은 함수다.

$$
\sigma\_\varepsilon\cdot\nabla w\_\varepsilon^j=\nabla u\_\varepsilon\cdot A(x/\varepsilon)\nabla w\_\varepsilon^j
$$

[div–curl 보조정리](div-curl-lemma.md)를 왼쪽에 쓰면 극한은 $\sigma\cdot e_j$ 이고, 오른쪽에 쓰면 $\nabla u_0\cdot A^\ast e_j$ 다. 그러므로 $\sigma=A^\ast\nabla u_0$ 이고, 해가 하나이므로 열 전체가 수렴한다.

## 조화평균과 산술평균 사이의 경계

정리(Voigt–Reuss 경계). 이차형식의 순서로 다음이 성립한다[^1].

$$
\Bigl(\int_YA(y)^{-1}dy\Bigr)^{-1}\le A^\ast\le\int_YA(y)\thinspace dy
$$

증명의 요지. $A^\ast\xi\cdot\xi$ 는 $Y$ 주기 함수 $\varphi$ 에 대한 $\int_YA(\xi+\nabla\varphi)\cdot(\xi+\nabla\varphi)$ 의 최솟값이다. $\varphi=0$ 을 넣으면 오른쪽 부등식이 나온다. 왼쪽은 발산이 $0$ 이고 평균이 $\xi$ 인 주기 벡터장 위의 쌍대 변분 원리에서 상수장을 넣어 얻는다.

직관 절의 막대를 $\mathbb R^2$ 에서 $x_1$ 방향으로 층을 쌓은 재료로 보면 $A(y)=a(y_1)I$ 이다. $x_1$ 방향에서는 직관 절의 계산이 그대로 되어 조화평균 $8/5$ 가, $x_2$ 방향에서는 $\chi_2=0$ 이 셀 문제를 풀어 산술평균 $5/2$ 가 나온다. $x_1$ 방향에서는 아래 경계가, $x_2$ 방향에서는 위 경계가 등호다.

$$
A^\ast=\begin{pmatrix}8/5&0\cr 0&5/2\end{pmatrix}
$$

## 교정자와 강수렴

$\nabla u\_\varepsilon$ 은 $\nabla u_0$ 으로 강하게 수렴하지 않는다. 직관 절에서 $u\_\varepsilon'$ 은 층마다 $\sigma$ 와 $\sigma/4$ 사이를 오간다. 일차 **교정자(corrector)** 를 더한 함수 $u_0+\varepsilon\sum_j\chi_j(x/\varepsilon)\partial_ju_0$ 은 $u_0$ 이 충분히 매끄러우면 $u\_\varepsilon$ 과의 차이가 $H^1$ 에서 $0$ 으로 간다[^1].

# 활용

- 복합 재료. 섬유나 층으로 된 재료의 유효 전도율과 유효 탄성 계수를 셀 문제의 수치해로 정한다. Voigt–Reuss 경계는 미세 구조를 모를 때의 범위이고, Hashin–Shtrikman 경계가 등방 재료에서 이를 좁힌다.
- 다공성 매질. 주기적으로 놓인 작은 장애물 사이의 [Stokes 방정식](stokes-equations.md)을 균질화하면 압력 기울기와 평균 속도가 비례하는 Darcy 법칙(Darcy's law)이 나온다[^2].
- 주기가 없는 계수. Murat 와 Tartar 의 H 수렴(H-convergence)은 주기 가정 없이 계수의 열에 대해 같은 극한을 정의하고, div–curl 보조정리로 그 존재를 보인다[^2]. 무작위 계수에서는 Papanicolaou–Varadhan 과 Kozlov 의 확률적 균질화가 에르고딕성 아래 상수 계수를 준다[^3].
- 다중 척도 수치 해석. 격자를 주기 $\varepsilon$ 보다 굵게 잡은 [유한요소법](finite-element-method.md)은 진동을 해상하지 못한다. 다중 척도 유한요소법(multiscale finite element method)은 셀 문제의 해로 기저함수를 만들어 굵은 격자에서 $A^\ast$ 를 반영한다.

[^1]: A. Bensoussan, J.-L. Lions, G. Papanicolaou, *Asymptotic Analysis for Periodic Structures*, North-Holland (1978), Chapter 1.

[^2]: L. Tartar, *The General Theory of Homogenization*, Springer (2009).

[^3]: G. C. Papanicolaou, S. R. S. Varadhan, "Boundary value problems with rapidly oscillating random coefficients", in *Random Fields*, Colloquia Mathematica Societatis János Bolyai **27**, North-Holland (1981), 835–873.

# 연관 문서

## 선수지식

- [Lax–Milgram 정리](lax-milgram.md)
- [div–curl 보조정리](div-curl-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis
