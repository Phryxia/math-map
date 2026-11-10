# 모듈러 형식

# 개요

**모듈러 형식(modular form)** 은 상반평면 위의 [정칙함수](holomorphic-functions.md) 가운데 $z\mapsto(az+b)/(cz+d)$ 꼴의 변환에 대해 정해진 규칙으로 변하는 것이다. 자연수 $n$ 을 네 제곱수의 합으로 쓰는 방법의 수 $r_4(n)$ 을 모든 $n$ 에 대해 구하려면 $n$ 마다 따로 세어야 할 것 같다. 이 수들을 계수로 하는 급수가 모듈러 형식이고, 같은 무게의 모듈러 형식이 이루는 공간은 유한차원이다. 그래서 계수 몇 개만 맞추어 보면 그 급수가 다른 방식으로 만든 형식과 같다는 것이 나오고, Jacobi 의 공식 $r_4(n)=8\sum_{d\mid n,\thinspace 4\nmid d}d$ 가 모든 $n$ 에서 따라 나온다.

# 직관

자연수 $n$ 을 네 정수의 제곱의 합으로 쓰는 방법의 수 $r_4(n)$ 은 순서와 부호를 구별해 센다. $1=(\pm1)^2+0+0+0$ 을 자리 넷에 놓으면 $r_4(1)=8$ 이고, 같은 방식으로 세면 $r_4(2)=24$, $r_4(3)=32$, $r_4(4)=24$ 다. 이 수들을 $q$ 의 거듭제곱의 계수로 모으면

$$
\Theta=\sum_{n\ge0}r_4(n)q^n=1+8q+24q^2+32q^3+24q^4+\cdots
$$

이다. $\theta=\sum_{m\in\mathbb Z}q^{m^2}$ 으로 두면 네 제곱의 합을 고르는 것이 $\theta$ 를 네 번 곱하는 것이므로 $\Theta=\theta^4$ 이다.

$q=e^{2\pi i\tau}$ 로 놓으면 $\theta$ 는 상반평면 $\mathbb H=\lbrace\tau:\mathrm{Im}\thinspace\tau\gt 0\rbrace$ 위의 정칙함수가 된다. $\tau$ 를 $\tau+1$ 로 바꾸면 $q$ 가 그대로이니 $\Theta$ 도 그대로다. [Poisson 합 공식](poisson-summation.md)으로 $\theta(-1/(4\tau))=\sqrt{-2i\tau}\thinspace\theta(\tau)$ 가 나오고, 두 규칙을 합치면 $\tau$ 를 $\tau/(4\tau+1)$ 로 바꿀 때 $\Theta$ 에 $(4\tau+1)^2$ 이 곱해진다.

$\tau\mapsto\tau+1$ 과 $\tau\mapsto\tau/(4\tau+1)$ 을 거듭 합성해 얻는 변환 각각에 대해 이런 규칙을 만족하고 $\mathrm{Im}\thinspace\tau\to\infty$ 에서 유계인 정칙함수 전체는 2 차원 벡터공간을 이루고, 그 원소는 $q$ 전개의 처음 두 계수로 정해진다. $1+8\sum_{n\ge1}\bigl(\sum_{d\mid n,\thinspace 4\nmid d}d\bigr)q^n$ 도 같은 규칙을 만족하도록 만들 수 있는 급수이고, 처음 두 계수가 $\Theta$ 와 같이 $1,8$ 이다. 그러므로 두 급수가 같고, $r_4(n)=8\sum_{d\mid n,\thinspace 4\nmid d}d$ 가 모든 $n$ 에서 성립한다. $n=4$ 이면 $8(1+2)=24$ 다.

이렇게 정해진 변환들에 대해 $(c\tau+d)^k$ 를 곱하는 규칙을 만족하는 정칙함수가 무게 $k$ 의 모듈러 형식이다. $\Theta$ 는 무게 $2$ 이고, 규칙의 변환들이 이루는 군이 아래의 $\Gamma_0(4)$ 다.

# 정의

## 상반평면 위의 작용

다음 $\gamma$ 는 $\gamma\tau=\frac{a\tau+b}{c\tau+d}$ 로 $\mathbb H$ 에 [작용](group-actions.md)한다.

$$
\gamma=\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in\mathrm{SL}\_2(\mathbb R)
$$

$$
\mathrm{Im}(\gamma\tau)=\frac{\mathrm{Im}\thinspace\tau}{\lvert c\tau+d\rvert^2}
$$

이므로 $\gamma\tau\in\mathbb H$ 다. $\pm I$ 는 자명하게 작용한다. $S=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 은 $\tau\mapsto-1/\tau$ 이고 $i$ 를 고정한다. $T=\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 은 $\tau\mapsto\tau+1$ 이다.

**합동 부분군(congruence subgroup)** 은 $\mathrm{SL}\_2(\mathbb Z)$ 의 지수가 유한한 부분군 가운데 어떤 $N$ 에 대해 $\Gamma(N)=\ker\bigl(\mathrm{SL}\_2(\mathbb Z)\to\mathrm{SL}\_2(\mathbb Z/N)\bigr)$ 를 포함하는 것이다. 가장 많이 쓰는 것은

$$
\Gamma_0(N)=\Bigl\lbrace\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in\mathrm{SL}\_2(\mathbb Z):c\equiv0\pmod N\Bigr\rbrace
$$

이고 $N$ 을 **레벨(level)** 이라 한다. 직관 절의 $\tau\mapsto\tau/(4\tau+1)$ 은 $\begin{pmatrix}1&0\cr 4&1\end{pmatrix}\in\Gamma_0(4)$ 다.

$\mathrm{SL}\_2(\mathbb Z)$ 의 **기본영역(fundamental domain)** 은 $\lvert\tau\rvert\ge1$ 이고 $\lvert\mathrm{Re}\thinspace\tau\rvert\le\frac12$ 인 영역이다. $\mathbb H$ 의 모든 점은 $\mathrm{SL}\_2(\mathbb Z)$ 의 원소로 이 영역 안에 옮겨진다. 영역이 위쪽으로 열려 있어 $\tau\to i\infty$ 의 거동을 따로 정한다. $\mathbb Q\cup\lbrace\infty\rbrace$ 의 $\Gamma$ 궤도를 $\Gamma$ 의 **첨점(cusp)** 이라 하고, $\mathrm{SL}\_2(\mathbb Z)$ 의 첨점은 $\infty$ 하나다.

## 모듈러 형식과 첨점형식

$\Gamma\subseteq\mathrm{SL}\_2(\mathbb Z)$ 가 합동 부분군일 때 다음 셋을 만족하는 $f\colon\mathbb H\to\mathbb C$ 가 무게 $k$ 레벨 $\Gamma$ 의 **모듈러 형식** 이다.

1. $f$ 가 $\mathbb H$ 에서 정칙이다.
2. 모든 $\gamma\in\Gamma$ 에서 $f(\gamma\tau)=(c\tau+d)^kf(\tau)$ 다.
3. 모든 첨점에서 정칙이다.

$T^h\in\Gamma$ 인 가장 작은 $h\ge1$ 을 잡으면 $f(\tau+h)=f(\tau)$ 이고, $\Gamma\supseteq\Gamma_0(N)$ 이면 $h=1$ 이라 $f$ 가 $q=e^{2\pi i\tau}$ 의 함수다. 조건 3 은 $\infty$ 에서 그 전개에 $q$ 의 음수 거듭제곱이 없다는 것이고, 다른 첨점에서도 $\mathrm{SL}\_2(\mathbb Z)$ 의 원소로 $\infty$ 로 옮겨 같은 조건을 둔다.

$$
f(\tau)=\sum_{n\ge0}a_nq^n
$$

모든 첨점에서 상수항이 $0$ 이면 **첨점형식(cusp form)** 이다. 무게 $k$ 레벨 $\Gamma$ 의 모듈러 형식 전체를 $M_k(\Gamma)$, 첨점형식 전체를 $S_k(\Gamma)$ 로 쓴다. 직관 절의 $\Theta$ 는 $M_2(\Gamma_0(4))$ 의 원소이고 상수항이 $1$ 이므로 첨점형식이 아니다.

## 격자 위의 함수

$\mathbb C$ 의 [격자](lattices.md) $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ 의 함수 $F$ 가 $F(\lambda\Lambda)=\lambda^{-k}F(\Lambda)$ 를 만족하면 $f(\tau)=F(\mathbb Z\tau+\mathbb Z)$ 는 레벨 $\mathrm{SL}\_2(\mathbb Z)$ 의 조건 2 를 만족한다. 같은 격자의 다른 기저 $(a\omega_1+b\omega_2,\thinspace c\omega_1+d\omega_2)$ 로 바꾸면 $\tau=\omega_1/\omega_2$ 가 $\gamma\tau$ 로 바뀌고, $\omega_2$ 로 나누던 정규화가 $(c\tau+d)\omega_2$ 로 나누는 정규화로 바뀌어 인자 $(c\tau+d)^k$ 가 나온다.

## 표준적인 예

$k\ge4$ 가 짝수일 때 격자 위의 합 $G_k(\Lambda)=\sum_{0\ne\lambda\in\Lambda}\lambda^{-k}$ 는 위 격자 위의 함수의 조건을 만족해 무게 $k$ 의 형식을 준다. 상수항을 1 로 정규화한 것이 [Eisenstein 급수](eisenstein-series.md)다.

$$
E_k(\tau)=1-\frac{2k}{B_k}\sum_{n\ge1}\sigma_{k-1}(n)q^n
$$

$E_4=1+240\sum\sigma_3(n)q^n$ 이고 $E_6=1-504\sum\sigma_5(n)q^n$ 이다.

무게 12 의 첨점형식인 **판별식 형식(discriminant modular form)**

$$
\Delta=\frac{E_4^3-E_6^2}{1728}=q\prod_{n\ge1}(1-q^n)^{24}=\sum_{n\ge1}\tau(n)q^n
$$

은 $\mathbb H$ 에서 영점을 갖지 않는다. 계수 $\tau(n)$ 이 Ramanujan 의 $\tau$ 함수다.

**$j$ 불변량(j-invariant)** 은 다음 함수다.

$$
j=\frac{E_4^3}{\Delta}=q^{-1}+744+196884q+\cdots
$$

$j$ 는 무게 0 이고 $\mathbb H$ 에서 정칙이지만 첨점에서 극을 갖는다. $j(i)=1728$, $j(e^{2\pi i/3})=0$ 이다.

## Hecke 작용소

$M_k$ 위에 [Hecke 작용소](hecke-operators.md)라는 가환 연산자족이 작용한다. 소수 $p$ 에서 $q$ 전개로 쓰면 다음이다.

$$
(T_pf)\_n=a_{np}+p^{k-1}a_{n/p}\qquad(p\nmid n \text{ 이면 둘째 항은 0})
$$

모든 $T_m$ 의 고유벡터인 $f$ 가 **Hecke 고유형식(Hecke eigenform)** 이다. $\Delta$ 는 $(T_2\Delta)\_1=\tau(2)=-24$ 이고 $S_{12}$ 가 1 차원이므로 $T_2\Delta=-24\Delta$ 를 만족하는 고유형식이다. 고유형식의 $L$ 함수(L-function)는 $L(s,f)=\sum_{n\ge1}a_nn^{-s}$ 다.

# 성질

## Hecke 고유형식의 기저

$T_m$ 들은 서로 교환하고 $S_k$ 위에서 Petersson 내적에 대해 [자기수반](spectral-theorem.md)이므로 동시 고유벡터의 기저가 있다. 고유형식을 $a_1=1$ 로 정규화하면 $T_mf=a_mf$ 이고 계수가 곱셈적이어서, 레벨 $\mathrm{SL}\_2(\mathbb Z)$ 에서 $L$ 함수가 다음 Euler 곱을 갖는다.

$$
L(s,f)=\sum_{n\ge1}\frac{a_n}{n^s}=\prod_p\Big(1-a_pp^{-s}+p^{k-1-2s}\Big)^{-1}
$$

## 차원

$\mathrm{SL}\_2(\mathbb Z)$ 에서 짝수 $k\ge0$ 에 대해 다음이 성립하고 홀수 $k$ 에서는 0 이다.

$$
\dim M_k=\begin{cases}\lfloor k/12\rfloor&k\equiv2\pmod{12}\cr \lfloor k/12\rfloor+1&\text{그 외}\end{cases}
$$

$-I$ 가 $(-1)^k$ 를 곱하므로 홀수 무게가 사라진다. $k=4,6,8,10$ 에서 차원이 1 이고 $k=12$ 에서 처음 2 가 된다. $S_{12}$ 가 1 차원이라 $\Delta$ 가 상수배를 빼고 유일한 무게 12 첨점형식이다. 등급환은 자유 [다항식환](polynomial-rings.md)이다.

$$
\bigoplus_kM_k(\mathrm{SL}\_2(\mathbb Z))=\mathbb C\lbrack E_4,E_6\rbrack
$$

차원의 유한성은 영점 개수의 상계에서 나온다. $f\ne0$ 이 무게 $k$ 의 모듈러 형식이면 기본영역의 경계에 [유수 정리](residue-theorem.md)를 써서 다음 valence 공식(valence formula)을 얻는다.

$$
\mathrm{ord}\_\infty(f)+\tfrac12\mathrm{ord}\_i(f)+\tfrac13\mathrm{ord}\_\rho(f)+\sum_{\text{나머지}}\mathrm{ord}\_P(f)=\frac k{12}
$$

$1/2$ 과 $1/3$ 은 $i$ 와 $\rho=e^{2\pi i/3}$ 에서 고정자군이 자명하지 않아 붙는 가중치다. $k\lt 0$ 이면 우변이 음수이므로 형식이 없다.

무게 $k$ 의 두 형식이 $\lfloor k/12\rfloor+1$ 개의 계수에서 일치하면 완전히 같다. 이 개수가 Sturm 한계(Sturm bound)이고, 레벨 $\Gamma_0(N)$ 에서는 $\frac k{12}\lbrack\mathrm{SL}\_2(\mathbb Z):\Gamma_0(N)\rbrack$ 을 넘는 개수의 계수가 같으면 두 형식이 같다. 직관 절의 $\Gamma_0(4)$, 무게 $2$ 에서 이 값은 $1$ 이므로 계수 $a_0,a_1$ 이 같으면 충분하다.

## Ramanujan 의 τ

$\Delta$ 가 유일한 무게 12 첨점형식이므로 Hecke 고유형식이고 $\tau$ 가 곱셈적이다.

$$
\tau(mn)=\tau(m)\tau(n)\ (\gcd(m,n)=1),\qquad \tau(p^{r+1})=\tau(p)\tau(p^r)-p^{11}\tau(p^{r-1})
$$

크기에 대한 Ramanujan 추측(Ramanujan conjecture) $\lvert\tau(p)\rvert\le2p^{11/2}$ 은 Deligne 이 [유한체](finite-fields.md) 위 다양체에 대한 Weil 추측을 증명하면서 따라 나왔다.

무게 12 의 Eisenstein 급수 $E_{12}$ 의 계수에 691 이 분모로 등장하는 데서 합동이 나온다.

$$
\tau(n)\equiv\sigma_{11}(n)\pmod{691}
$$

이 합동은 $\Delta$ 에 붙은 $691$ 진 [Galois 표현](galois-representations.md)을 법 $691$ 로 환원하면 자명한 지표와 $11$ 제곱 순환 지표의 합이 된다는 것과 같다. 법 $p$ Galois 표현과 모듈러 형식의 대응은 [Serre 추측](serre-conjecture.md)의 주제다.

## 모듈러 곡선

$Y_0(N)=\Gamma_0(N)\backslash\mathbb H$ 는 [Riemann 곡면](riemann-surfaces.md)이고 첨점을 더해 콤팩트화한 것이 $X_0(N)$ 이다. 이 곡면 위에서 무게 2 의 첨점형식이 정칙 미분형식 $f(\tau)d\tau$ 와 대응한다.

$$
\dim S_2(\Gamma_0(N))=g\big(X_0(N)\big)
$$

$N=11$ 에서 종수가 1 이라 $X_0(11)$ 자체가 타원곡선이고 대응하는 유일한 무게 2 첨점형식이 $\eta(\tau)^2\eta(11\tau)^2$ 다.

$X_0(N)$ 은 $\mathbb Q$ 위에서 정의된 대수곡선이고, 모듈러성 정리는 $\mathbb Q$ 위 타원곡선마다 $X_0(N)$ 에서 그 곡선으로 가는 비상수 사상이 있다고 서술된다.

## 준모듈러 형식

$E_2=1-24\sum\sigma_1(n)q^n$ 은 정의하는 급수가 절대수렴하지 않아 변환식에 보정항이 붙는다.

$$
E_2\Big(\frac{-1}\tau\Big)=\tau^2E_2(\tau)+\frac{12\tau}{2\pi i}
$$

이런 대상이 준모듈러 형식(quasimodular form)이다. $\Delta$ 의 로그미분이 $E_2$ 이고 Ramanujan 의 미분 관계식

$$
q\frac{dE_4}{dq}=\frac{E_2E_4-E_6}3,\qquad q\frac{dE_6}{dq}=\frac{E_2E_6-E_4^2}2
$$

과 $q\frac{dE_2}{dq}=\frac{E_2^2-E_4}{12}$ 에 따라 $\mathbb C\lbrack E_2,E_4,E_6\rbrack$ 은 $q\frac d{dq}$ 에 대해 닫혀 있다. Ramanujan 의 유사 theta 함수(mock theta function)는 조화 [Maass 형식](maass-forms.md)(harmonic Maass form)의 정칙 부분으로 설명된다(Zwegers).

# 활용

## 약수 함수 항등식

무게 8 의 모듈러 형식 공간은 1 차원이고 $E_8$ 과 $E_4^2$ 이 모두 무게 8 에 상수항 1 이므로 같다.

$$
E_4(\tau)^2=E_8(\tau)
$$

양변의 $q$ 전개를 비교하면 약수 함수의 항등식이 나온다.

$$
\sigma_7(n)=\sigma_3(n)+120\sum_{m=1}^{n-1}\sigma_3(m)\sigma_3(n-m)
$$



## 격자의 theta 급수

격자 $\Lambda$ 의 [theta 급수](theta-series.md) $\Theta_\Lambda(\tau)=\sum_{v\in\Lambda}q^{|v|^2/2}$ 는 $\Lambda$ 가 짝수 유니모듈러면 무게 $\dim\Lambda/2$ 의 모듈러 형식이고 계수가 주어진 길이의 벡터 개수를 센다.

차원 8 에서 짝수 유니모듈러 격자는 $E_8$ 뿐이고 $M_4$ 가 1 차원이므로 $\Theta_{E_8}=E_4$ 다. $E_8$ 격자에서 길이 제곱이 $2n$ 인 벡터가 $240\sigma_3(n)$ 개다. Viazovska 는 모듈러 형식으로 만든 보조함수로 $E_8$ 격자의 [구 채우기](sphere-packing.md)가 8 차원에서 가장 조밀함을 2016 년에 증명했다. 차원 16 에서는 $M_8$ 이 1 차원이라 서로 동형이 아닌 두 격자의 theta 급수가 같아진다.

## 분할수와 생성함수

$\prod(1-q^n)^{-1}$ 이 분할수의 [생성함수](generating-functions.md)이고 $\eta(\tau)=q^{1/24}\prod(1-q^n)$ 과 무게 $1/2$ 의 변환 규칙으로 연결된다. 이 규칙으로 $q\to1$ 근방의 크기를 구하고 원법(circle method)을 쓰면 Hardy–Ramanujan 점근식이 나온다.

$$
p(n)\sim\frac1{4n\sqrt3}\exp\Big(\pi\sqrt{\tfrac{2n}3}\Big)
$$

Rademacher 는 같은 방법으로 $p(n)$ 을 정확히 주는 수렴급수를 얻었다. Ramanujan 의 합동 $p(5n+4)\equiv0\pmod5$ , $p(7n+5)\equiv0\pmod7$ , $p(11n+6)\equiv0\pmod{11}$ 은 Watson 과 Atkin 이 모듈러 형식의 합동으로 증명했다.

## 산술 대상과의 대응

유리수 계수의 무게 2 고유형식이 $\mathbb Q$ 위 [타원곡선](elliptic-curves.md)과 대응하고(모듈러성 정리), 무게 1 의 고유형식이 2 차원 홀수 Artin 표현과 대응한다(Deligne–Serre, Khare–Wintenberger). 무게 $k\ge2$ 의 고유형식마다 2 차원 $\ell$ 진 Galois 표현이 있고, $p\nmid N\ell$ 에서 $a_p$ 가 Frobenius 의 대각합이다.

이 대응이 [Langlands 강령](langlands-program.md)의 $\mathrm{GL}\_2$ 경우의 고전적 서술이다. 타원곡선의 경우 $a_p$ 는 Fourier 계수이면서 $p+1-\char35{}E(\mathbb F_p)$ 이고 Frobenius 의 대각합이다.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [군 작용](group-actions.md)
- [정수론 개관](number-theory-overview.md)

## 더 알아보기

### 작용소와 급수

- [Hecke 작용소](hecke-operators.md)
- [Eisenstein 급수](eisenstein-series.md)
- [theta 급수](theta-series.md)
- [Petersson 공식](petersson-formula.md)

### 기하와 표현론

- [모듈러 곡선](modular-curves.md)
- [Siegel 모듈러 형식](siegel-modular-forms.md)
- [Langlands 강령](langlands-program.md)

### 조합과 물리에서의 쓰임

- [분할수](partitions.md)
- [정점작용소대수](vertex-operator-algebras.md)

#number_theory #complex_analysis #group_theory
