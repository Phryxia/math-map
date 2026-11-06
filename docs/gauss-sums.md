# Gauss 합

# 개요

**Gauss 합(Gauss sum)** 은 [유한체](finite-fields.md)의 원소마다 곱셈을 보존하는 값과 덧셈을 보존하는 값을 곱해 모두 더한 수다. $p=5$ 에서 $n=1,2,3,4$ 가 제곱수인지에 따라 부호 $+,-,-,+$ 를 정하고 $1$ 의 $5$ 제곱근 $\zeta=e^{2\pi i/5}$ 의 거듭제곱 $\zeta^n$ 에 곱해 더하면 $\zeta-\zeta^2-\zeta^3+\zeta^4=\sqrt5$ 다. 단위원 위의 점 넷을 더한 결과가 실수축의 $\sqrt5$ 에 정확히 놓인다. 곱셈과 덧셈을 한 합에 섞으면 합의 절댓값의 제곱이 원소의 개수로 계산되므로 원소가 $p$ 개인 체에서 절댓값은 항상 $\sqrt p$ 이고, 이 값이 $L$ 함수의 함수방정식에 나오는 상수를 정한다.

# 직관

$p=5$ 에서 $1=1^2$ 과 $4=2^2$ 은 제곱수이고 $2,3$ 은 아니다. 제곱수이면 $+1$, 아니면 $-1$ 인 부호 $\chi(n)$ 을 $\zeta=e^{2\pi i/5}$ 의 거듭제곱에 곱해 더한다. $\zeta+\zeta^4=2\cos 72^\circ\approx 0.618$ 이고 $\zeta^2+\zeta^3=2\cos 144^\circ\approx -1.618$ 이므로 다음이 나온다.

$$
g=\zeta-\zeta^2-\zeta^3+\zeta^4\approx 0.618+1.618=2.236\dots=\sqrt5
$$

$\zeta$ 대신 $\zeta^m$ $(m=1,2,3,4)$ 을 넣은 합 $\sum_n\chi(n)\zeta^{mn}$ 에서 $n$ 을 $mn$ 으로 바꿔 세면, $\chi(mn)=\chi(m)\chi(n)$ 이므로 합이 $\chi(m)\thinspace g$ 다. 수열 $f$ 를 $m\mapsto\sum_nf(n)\zeta^{mn}$ 으로 보내는 변환은 $\mathbb Z/5$ 위의 [이산 Fourier 변환](fourier.md)이고, 위 계산은 이 변환이 $\chi$ 를 $g\chi$ 로 보낸다는 뜻이다.

Fourier 변환을 두 번 하면 $f(n)$ 이 $5f(-n)$ 이 된다. $\chi(-1)=\chi(4)=1$ 이므로 두 번 한 결과는 $5\chi$ 이고, 한 번에 $g$ 배이므로 $g^2=5$ 다. 곱셈과 맞물리는 부호와 덧셈과 맞물리는 $\zeta^n$ 을 한 합에 섞었기 때문에 합이 Fourier 변환의 고윳값이 되고, 그 크기가 원소 개수의 제곱근으로 정해진다.

# 정의

## Gauss 합

소수 $p$ 와 곱셈 지표 $\chi\colon(\mathbb Z/p)^\times\to\mathbb C^\times$ 에 대해

$$
g(\chi)=\sum_{n=1}^{p-1}\chi(n)\thinspace e^{2\pi in/p}
$$

를 **Gauss 합** 이라 한다. 직관 절의 $g=\sqrt5$ 는 $p=5$ 의 이차 지표의 Gauss 합이다. $\chi$ 는 법 $m$ 의 지표일 수 있고, 덧셈 지표 $\psi$ 를 명시하면 $g(\chi,\psi)$ 로 쓴다.

**Jacobi 합(Jacobi sum)** 은 곱셈 지표 두 개의 [합성곱](convolution.md)이다.

$$
J(\chi_1,\chi_2)=\sum_{n}\chi_1(n)\chi_2(1-n),\qquad
J(\chi_1,\chi_2)=\frac{g(\chi_1)g(\chi_2)}{g(\chi_1\chi_2)}\ \ (\chi_1\chi_2\ne1)
$$

$p=5$ 의 이차 지표 $\chi$ 에서 $J(\chi,\chi)=\chi(2)\chi(4)+\chi(3)\chi(3)+\chi(4)\chi(2)=-1$ 이다. 유한체 위 방정식의 해의 개수가 Jacobi 합으로 표현되고, Weil 추측의 최초 사례가 이 계산이다.

## 도체와 국소 근 수

[Tate 의 zeta 적분](tate-zeta-integral.md)은 자리 $v$ 마다 국소 함수방정식을 준다. 두 국소 zeta 적분의 비는 시험함수에 의존하지 않는 인자 $\gamma_v$ 다.

$$
Z_v(\hat f_v,\chi_v^{-1},1-s)=\gamma_v(\chi_v,s)\thinspace Z_v(f_v,\chi_v,s),
\qquad
\gamma_v=\varepsilon_v(\chi_v,s)\thinspace\frac{L(1-s,\chi_v^{-1})}{L(s,\chi_v)}
$$

$L$ 인자를 뺀 나머지 $\varepsilon_v$ 를 **국소 근 수(local root number)** 라 한다.

국소체 $K_v$ 의 곱셈 지표 $\chi_v$ 에 대해, $\chi_v(U^{(n)})=1$ 이 되는 최소의 $n\ge0$ 을 **도체 지수(conductor exponent)** $a(\chi_v)$ 라 한다. 여기서 $U^{(n)}=1+\mathfrak p_v^n$ 이고 $U^{(0)}=\mathcal O_v^\times$ 다. $a=0$ 이면 비분기다. 덧셈 지표 $\psi_v$ 에도 비슷하게 준위(level) $n(\psi_v)$ 가 정의된다. 국소 근 수의 $s$ 의존은 다음 꼴이다.

$$
\varepsilon_v(\chi_v,\psi_v,s)=q_v^{(\frac12-s)(a(\chi_v)+n(\psi_v))}\thickspace\varepsilon_v\big(\chi_v,\psi_v,\tfrac12\big)
$$

$s$ 의존성이 지수 하나로 빠지므로 정보는 $s=1/2$ 에서의 값에 있다. 그 값은 비분기 자리에서 $1$ 이고 분기 자리에서 도체를 법으로 한 Gauss 합을 $\sqrt{q^{a}}$ 로 나눈 것이다.

국소 적분 $\int_{K_v^\times}f_v(x)\chi_v(x)|x|^s\thinspace d^\times x$ 에 $f_v=\mathbf 1_{\mathcal O_v}$ 를 넣고 $\chi_v$ 가 비분기이면 적분이 등비급수가 되고, Fourier 변환한 쪽도 마찬가지라 두 결과의 비에 상수가 남지 않는다. $\chi_v$ 가 분기하면 $\mathcal O_v^\times$ 위에서 진동하므로 같은 적분이 지표의 직교성으로 $0$ 이 된다. $\chi_v$ 가 남는 크기의 시험함수를 골라야 하고, 그 함수의 Fourier 변환이 유한 잉여환 위의 지표합, 곧 Gauss 합이다.

## 대역 근 수

대역 함수방정식의 부호는 국소 근 수의 곱이다.

$$
\Lambda(s,\chi)=W(\chi)\thinspace\Lambda(1-s,\bar\chi),\qquad
W(\chi)=\prod_v\varepsilon_v\big(\chi_v,\psi_v,\tfrac12\big)
$$

거의 모든 자리에서 인자가 $1$ 이라 유한 곱이다. 법 $q$ 의 원시 Dirichlet 지표의 [Dirichlet L 함수](dirichlet-l-functions.md)에서는 다음과 같다.

$$
W(\chi)=\frac{g(\chi)}{i^{\delta}\sqrt q},\qquad
\delta=\begin{cases}0&\chi(-1)=1\cr 1&\chi(-1)=-1\end{cases}
$$

$i^\delta$ 는 무한 자리의 근 수다. 지표가 홀이면 감마 인자가 $\Gamma(\frac{s+1}2)$ 로 바뀌면서 $i$ 가 붙는다.

# 성질

## 기본 항등식

$\chi$ 가 법 $p$ 의 비자명한 지표이면 다음이 성립한다.

1. $g(\chi)\thinspace g(\bar\chi)=\chi(-1)\thinspace p$
2. $\lvert g(\chi)\rvert=\sqrt p$
3. $m\not\equiv0$ 일 때 $\sum_n\chi(n)\psi(mn)=\bar\chi(m)\thinspace g(\chi)$ 다
4. $\chi$ 가 이차이면 $p\equiv1\bmod4$ 일 때 $g(\chi)=\sqrt p$ 이고 $p\equiv3\bmod4$ 일 때 $g(\chi)=i\sqrt p$ 다

첫째와 둘째는 같은 계산의 두 표현이다. 셋째는 직관 절의 계산, 곧 $\chi$ 가 Fourier 변환의 고유벡터라는 진술이고 국소 근 수의 계산이 이 식을 쓴다.

넷째를 Gauss 의 부호 정리(Gauss's sign theorem)라 한다[^1]. Gauss 는 1801 년에 부호를 예상하고 1805 년에 증명했으며, 여기서 [이차 상호법칙](quadratic-reciprocity.md)의 네 번째 증명이 나왔다.

넷째의 크기 부분 $\lvert g(\chi)\rvert=\sqrt p$ 는 $g(\chi)\overline{g(\chi)}$ 를 전개해 지표의 직교성을 쓰면 나오고, 그 논법은 $g(\chi)$ 가 $\pm\sqrt p$ 인지 $\pm i\sqrt p$ 인지까지만 좁힌다. 부호에는 theta 함수의 극한이나 유수 계산 같은 해석적 논증이 필요하다.

## 근 수의 성질

- 절댓값. $\chi_v$ 가 유니터리이면 $\lvert\varepsilon_v(\chi_v,\psi_v,\frac12)\rvert=1$ 이다. 따라서 $\lvert W(\chi)\rvert=1$ 이고 함수방정식의 부호가 단위원 위에 있다.
- 비분기 자리. $a(\chi_v)=0$ 이고 $\psi_v$ 의 준위가 $0$ 이면 $\varepsilon_v=1$ 이다. 그래서 $W(\chi)$ 가 유한 곱이다.
- 이차 지표. $\chi$ 가 [실수](real-numbers.md)값(이차) 지표이면 $W(\chi)=1$ 이다. 이차 지표의 $L$ 함수는 부호가 $+1$ 이고, Gauss 의 부호 정리가 이를 준다.
- 곱셈성. 일반적으로 $\varepsilon(\chi_1\chi_2)\ne\varepsilon(\chi_1)\varepsilon(\chi_2)$ 다. 그 차이가 Jacobi 합이고, Langlands 와 Deligne 의 국소 상수 이론(theory of local constants)이 일반 표현에서 이 차이를 다룬다.

## 중심값과 패리티

$W(\chi)=-1$ 이면 함수방정식이 $\Lambda(\frac12)=-\Lambda(\frac12)$ 를 강제해 중심값이 $0$ 이 된다. [타원곡선](elliptic-curves.md)의 $L$ 함수에서 이 부호가 패리티(parity)이고, [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)을 통해 계수의 홀짝을 예측한다.

Deligne 은 국소 근 수가 [Galois 표현](galois-representations.md)의 자료만으로 정해지는 방식을 확립했다. 자기동형 쪽의 $\varepsilon$ 과 Galois 쪽의 $\varepsilon$ 이 일치해야 한다는 조건이 [Langlands 강령](langlands-program.md)에서 대응을 특정한다.

# 활용

- L 함수의 계산. 함수방정식으로 임계띠 안의 값을 계산하려면 $W(\chi)$ 가 필요하므로, $L$ 함수를 다루는 코드가 근 수를 먼저 구한다.
- 패리티. 타원곡선 $L$ 함수의 근 수가 $-1$ 이면 중심값이 $0$ 이고, BSD(Birch–Swinnerton-Dyer) 추측에 따라 계수가 홀수다. 근 수는 국소 자료에서 계산되므로 계수의 홀짝을 곡선의 환원 자료만으로 예측할 수 있다.
- 지수합 추정. Gauss 합과 Jacobi 합의 절댓값 $\sqrt p$ 가 유한체 위 방정식의 점 개수 추정을 준다. Weil 추측의 곡선 사례가 이 계산의 일반화다.
- 상호법칙. 이차 Gauss 합의 부호에서 이차 상호법칙이, 높은 차수의 Gauss 합에서 삼차와 사차 상호법칙이 나온다. [유체론](class-field-theory.md) 이전의 고전적 경로다.

[^1]: Gauss 합의 기본 성질과 부호 정리는 K. Ireland, M. Rosen, *A Classical Introduction to Modern Number Theory* (2판, 1990) 6장과 8장. 국소 근 수의 정의와 Tate 의 국소 함수방정식은 J. Tate, *Local Constants*, in *Algebraic Number Fields* (Durham 1975), 89–131. Galois 쪽 근 수와의 일치는 P. Deligne, *Les constantes des équations fonctionnelles des fonctions L*, Antwerp II (1973).

# 연관 문서

## 선수지식

- [Tate 의 zeta 적분](tate-zeta-integral.md)
- [Dirichlet L 함수](dirichlet-l-functions.md)

## 더 알아보기

- [Dwork 의 유리성 정리](dwork-rationality.md)
- [Stickelberger 원소](stickelberger.md)
- [Kloosterman 합](kloosterman-sums.md)

#number_theory #complex_analysis #analysis
