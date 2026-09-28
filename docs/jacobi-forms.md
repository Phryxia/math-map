# Jacobi 형식

# 개요

Jacobi 형식은 $\mathbb H\times\mathbb C$ 위의 정칙함수로, 첫 변수에서는 가중치 $k$ 의 [모듈러 형식](modular-forms.md)처럼 변하고 둘째 변수에서는 격자 평행이동에 지수인수를 달고 변하는 것이다. 차수 $2$ 의 [Siegel 모듈러 형식](siegel-modular-forms.md)을 한 변수로 전개하면 계수마다 Jacobi 형식이 나온다. Fourier 계수가 판별식 하나와 나머지 하나에만 의존하므로, 지표 $1$ 의 공간이 반정수 가중치 형식의 공간과 동형이고 그 동형이 Saito–Kurokawa 승강의 중간 단계다.

# 직관

차수 $2$ 의 Siegel 첨점형식을 손으로 다루려 한다. Fourier 계수는 반정수 대칭행렬 $T$ 로 매겨지고 성분이 셋이라 한꺼번에 보기 어렵다. 셋 가운데 하나를 고정하면 무엇이 남는지 계산한다.

$$\tau=\begin{pmatrix}\tau_1&z\cr z&\tau_2\end{pmatrix},\qquad T=\begin{pmatrix}n&r/2\cr r/2&m\end{pmatrix}$$

로 적으면 $\mathrm{tr}(T\tau)=n\tau_1+rz+m\tau_2$ 이므로 전개가 갈린다.

$$F(\tau)=\sum_{m\ge 0}\left(\sum_{n,r}a(n,r,m)\thinspace e^{2\pi i(n\tau_1+rz)}\right)e^{2\pi i m\tau_2}$$

괄호 안은 $\tau_1$ 과 $z$ 의 함수다. 이것을 $\phi_m(\tau_1,z)$ 라 두면 $m$ 마다 함수 하나가 나오고, 남은 매개변수는 $m$ 하나다.

$\phi_m$ 이 만족하는 식은 $\mathrm{Sp}\_4(\mathbb Z)$ 의 원소 가운데 $m$ 을 섞지 않는 것들에서 나온다. 첫째는 $\tau_1$ 에 $\mathrm{SL}\_2(\mathbb Z)$ 를 작용시키는 것으로, $\tau_1\mapsto(a\tau_1+b)/(c\tau_1+d)$ 와 함께 $z\mapsto z/(c\tau_1+d)$ 와 $\tau_2\mapsto\tau_2-cz^2/(c\tau_1+d)$ 가 딸려 온다. $F$ 의 변환식에서 $\det(C\tau+D)=c\tau_1+d$ 이고 $e^{2\pi im\tau_2}$ 의 지수가 바뀐 만큼이 $\phi_m$ 쪽으로 옮겨진다.

$$\phi_m\left(\frac{a\tau_1+b}{c\tau_1+d},\thinspace\frac{z}{c\tau_1+d}\right)=(c\tau_1+d)^k\thinspace e^{2\pi i mcz^2/(c\tau_1+d)}\thinspace\phi_m(\tau_1,z)$$

둘째는 $z$ 를 격자만큼 평행이동하는 원소들로, $z\mapsto z+\lambda\tau_1+\mu$ 와 함께 $\tau_2\mapsto\tau_2+\lambda^2\tau_1+2\lambda z+\lambda\mu$ 가 딸려 온다. 같은 방식으로 지수를 옮기면 다음이 나온다.

$$\phi_m(\tau_1,z+\lambda\tau_1+\mu)=e^{-2\pi i m(\lambda^2\tau_1+2\lambda z)}\thinspace\phi_m(\tau_1,z)$$

이 두 식을 Siegel 형식과 떼어 조건으로 삼은 것이 Jacobi 형식이다.

# 정의

**가중치 $k$, 지표 $m$ 의 Jacobi 형식**은 $\mathbb H\times\mathbb C$ 위의 정칙함수 $\phi$ 로 다음 두 변환식을 만족하는 것이다. $k$ 와 $m$ 은 정수이고 $m\ge 0$ 이다.

$$\phi\left(\frac{a\tau+b}{c\tau+d},\thinspace\frac{z}{c\tau+d}\right)=(c\tau+d)^k\thinspace e^{2\pi i mcz^2/(c\tau+d)}\thinspace\phi(\tau,z),\qquad\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in\mathrm{SL}\_2(\mathbb Z)$$

$$\phi(\tau,z+\lambda\tau+\mu)=e^{-2\pi i m(\lambda^2\tau+2\lambda z)}\thinspace\phi(\tau,z),\qquad \lambda,\mu\in\mathbb Z$$

이 공간을 $J_{k,m}$ 이라 쓴다.

## Fourier 전개

두 변환식 가운데 $\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 과 $(\lambda,\mu)=(0,1)$ 에 해당하는 것이 $\phi$ 를 $\tau\mapsto\tau+1$ 과 $z\mapsto z+1$ 에 불변으로 만들므로 전개가 있다.

$$\phi(\tau,z)=\sum_{n,r}c(n,r)\thinspace q^n\zeta^r,\qquad q=e^{2\pi i\tau},\quad \zeta=e^{2\pi i z}$$

성장 조건을 어디까지 두느냐로 세 가지를 나눈다.

| 이름 | 조건 |
| --- | --- |
| 첨점형식 | $4nm-r^2\le 0$ 이면 $c(n,r)=0$ |
| Jacobi 형식 | $4nm-r^2\lt 0$ 이면 $c(n,r)=0$ |
| 약한 Jacobi 형식 | $n\lt 0$ 이면 $c(n,r)=0$ |

$m=0$ 이면 둘째 변환식이 $\phi$ 를 $z$ 에 대해 주기적이고 유계인 정칙함수로 만들어 $z$ 에 상수이고, $J_{k,0}$ 은 가중치 $k$ 의 모듈러 형식 공간이다.

# 성질

## 계수가 의존하는 양

$c(n,r)$ 은 판별식 $D=4nm-r^2$ 과 나머지 $r\bmod 2m$ 에만 의존한다[^1].

증명의 요지. 둘째 변환식의 좌변과 우변을 $q,\zeta$ 로 전개해 $\zeta^r$ 의 계수를 견주면

$$c(n,r)=c(n+\lambda r+\lambda^2m,\thinspace r+2\lambda m)$$

이 모든 $\lambda\in\mathbb Z$ 에서 성립한다. 이 치환은 $r$ 을 $2m$ 으로 나눈 나머지를 바꾸지 않고, $4(n+\lambda r+\lambda^2m)m-(r+2\lambda m)^2=4nm-r^2$ 이므로 판별식도 바꾸지 않는다. 거꾸로 $D$ 와 $r\bmod 2m$ 이 같은 두 쌍 $(n,r)$, $(n',r')$ 은 어떤 $\lambda$ 로 옮겨진다.

## theta 분해

$\mu\bmod 2m$ 마다 다음을 두자.

$$\theta_{m,\mu}(\tau,z)=\sum_{r\equiv\mu\ (2m)}q^{r^2/(4m)}\zeta^r$$

그러면 $\phi\in J_{k,m}$ 이 유일하게 갈라진다.

$$\phi(\tau,z)=\sum_{\mu\bmod 2m}h_\mu(\tau)\thinspace\theta_{m,\mu}(\tau,z),\qquad h_\mu(\tau)=\sum_{D}c_\mu(D)\thinspace q^{D/(4m)}$$

$c_\mu(D)$ 는 앞 절의 $c(n,r)$ 을 $D$ 와 $\mu$ 로 다시 적은 것이다. $q^n\zeta^r=q^{D/(4m)}\cdot q^{r^2/(4m)}\zeta^r$ 이므로 전개를 $r\bmod 2m$ 으로 묶으면 그대로 나온다. $(h_\mu)$ 는 가중치 $k-1/2$ 의 벡터값 모듈러 형식이고, 그 변환을 정하는 표현이 [Weil 표현](weil-representation.md)이다. 스칼라 가중치의 정칙함수 하나가 반정수 가중치의 성분 $2m$ 개로 바뀐다.

## 지표 1 과 Saito–Kurokawa 승강

$m=1$ 이면 $\theta_{1,0}$ 과 $\theta_{1,1}$ 의 계수가 $h_0,h_1$ 을 한 함수로 묶어, $J_{k,1}$ 이 가중치 $k-1/2$ 의 Kohnen plus 공간 $M^+\_{k-1/2}(\Gamma_0(4))$ 와 동형이 된다[^2]. plus 공간은 $q$ 전개의 지수가 $0,3\bmod 4$ 인 항만 갖는 부분공간이다. 여기에 [Shimura 대응](shimura-correspondence.md)을 이으면 세 공간의 사슬이 된다.

$$J_{k,1}\thinspace\cong\thinspace M^+\_{k-1/2}(\Gamma_0(4))\thinspace\cong\thinspace M_{2k-2}(\mathrm{SL}\_2(\mathbb Z))$$

차수 $2$ 의 Siegel 형식을 $\sum_m\phi_m(\tau_1,z)e^{2\pi im\tau_2}$ 로 적었을 때 $\phi_1$ 이 나머지 전부를 정하는 형식들이 Maass 승강의 상이므로, 이 사슬이 가중치 $2k-2$ 의 타원 첨점형식에서 가중치 $k$ 의 Siegel 첨점형식으로 가는 길을 준다.

## 약한 Jacobi 형식의 환

약한 Jacobi 형식 전체 $J^{\mathrm{weak}}\_{\ast,\ast}$ 는 $M_\ast(\mathrm{SL}\_2(\mathbb Z))$ 위의 다항대수이고, 생성원은 가중치와 지표가 $(-2,1)$ 과 $(0,1)$ 인 두 형식이다[^1].

$$\phi_{-2,1}=\frac{\theta_1(\tau,z)^2}{\eta(\tau)^6},\qquad \phi_{0,1}=4\sum_{j=1}^{3}\frac{\theta_{j+1}(\tau,z)^2}{\theta_{j+1}(\tau,0)^2}$$

$\theta_j$ 는 Jacobi theta 함수, $\eta$ 는 Dedekind eta 함수다. 가중치가 음수인 생성원이 있는 것은 $n\ge 0$ 만 요구하는 약한 조건 때문이며, 정칙 조건 $4nm-r^2\ge 0$ 을 붙이면 $k\ge 0$ 이다.

# 활용

- **Siegel 형식의 Fourier–Jacobi 전개.** 차수 $2$ 의 Siegel 모듈러 형식을 지표별 Jacobi 형식의 열로 본다. Siegel 모듈러 형식의 $\Phi$ 연산자가 $m=0$ 항을 뽑는 것이고, Maass 승강의 상은 $\phi_1$ 이 나머지를 정하는 부분공간이다.
- **반정수 가중치와 격자.** theta 분해가 Jacobi 형식을 Weil 표현에 대한 벡터값 형식으로 바꾼다. 판별식 형식이 $2m$ 차 순환군인 경우가 지표 $m$ 의 Jacobi 형식이고, 일반 격자의 판별식 형식으로 바꾸면 [theta 급수](theta-series.md)의 벡터값 형식이 나온다.
- **Borcherds 곱의 입력.** [Borcherds 곱](borcherds-products.md)은 Weil 표현에 대한 벡터값 약정칙 형식을 받아 직교군의 자기동형 형식을 내놓는다. 지표 $m$ 의 약한 Jacobi 형식은 theta 분해로 그 꼴이 되고, 약한 조건이 허용하는 $4nm-r^2\lt 0$ 항이 벡터값 형식의 극에 대응한다. 계수는 무한곱의 지수로 들어간다.
- **Mock 모듈러 형식과의 관계.** [Mock 모듈러 형식](mock-modular-forms.md)의 계수를 담는 함수 가운데 둘째 변수를 붙여야 변환식이 닫히는 것들이 있고, 그 변환식이 Jacobi 형식의 것에서 완비화 항만큼 벗어난다.
- **복소다양체의 타원 종수.** 콤팩트 복소다양체의 타원 종수가 차원으로 정해지는 가중치와 지표의 약한 Jacobi 형식이다. Chern 수의 관계식을 이 공간의 유한 차원성으로 읽는다.

[^1]: M. Eichler, D. Zagier, *The Theory of Jacobi Forms*, Progress in Mathematics **55**, Birkhäuser (1985). 계수의 판별식 의존성은 §2, 약한 Jacobi 형식 환의 생성원은 §9.

[^2]: W. Kohnen, "Modular forms of half-integral weight on $\Gamma_0(4)$", Mathematische Annalen **248** (1980), 249–266. Jacobi 형식과 plus 공간의 동형은 Eichler–Zagier §5.

# 연관 문서

## 선수지식

- [theta 급수](theta-series.md)
- [Siegel 모듈러 형식](siegel-modular-forms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #algebra
