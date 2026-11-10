# Jacobi 형식

# 개요

**Jacobi 형식(Jacobi form)** 은 변수 두 개를 가진 함수로, 한 변수에서는 [모듈러 형식](modular-forms.md)처럼 변하고 다른 변수에서는 격자 평행이동에 대해 정해진 인수를 곱하며 변하는 것이다. 차수 $2$ 의 Siegel 첨점형식은 Fourier 계수가 성분이 셋인 대칭행렬로 매겨져 한꺼번에 다루기 어렵다. 성분 하나를 고정하고 나머지로 묶으면 계수마다 Jacobi 형식이 나와, 변수가 셋인 문제를 변수가 둘인 문제 여러 개로 나누어 다룬다.

# 직관

차수 $2$ 의 [Siegel 모듈러 형식](siegel-modular-forms.md) $F$ 를 손으로 다루려 한다. Fourier 계수는 반정수 대칭행렬 $T$ 로 매겨지고 성분이 셋이라 한꺼번에 보기 어려우므로, 셋 가운데 하나를 고정하면 무엇이 남는지 계산한다. 아래처럼 적으면 $\mathrm{tr}(T\tau)=n\tau_1+rz+m\tau_2$ 이므로 전개가 $m$ 에 따라 갈린다.

$$\tau=\begin{pmatrix}\tau_1&z\cr z&\tau_2\end{pmatrix},\qquad T=\begin{pmatrix}n&r/2\cr r/2&m\end{pmatrix}$$

$$F(\tau)=\sum_{m\ge 0}\left(\sum_{n,r}a(n,r,m)\thinspace e^{2\pi i(n\tau_1+rz)}\right)e^{2\pi i m\tau_2}$$

괄호 안은 $\tau_1$ 과 $z$ 의 함수이고, 이것을 $\phi_m(\tau_1,z)$ 라 두면 $m$ 마다 함수 하나가 나온다. $\phi_m$ 이 만족하는 식은 $\mathrm{Sp}\_4(\mathbb Z)$ 의 원소 가운데 $m$ 을 섞지 않는 두 종류에서 나온다. 하나는 $\tau_1$ 에 $\mathrm{SL}\_2(\mathbb Z)$ 를 작용시키는 것이고 다른 하나는 $z$ 를 격자만큼 평행이동하는 것이며, 둘 다 $\tau_2$ 를 함께 바꾼다. $F$ 의 변환식에서 $e^{2\pi i m\tau_2}$ 의 지수가 바뀐 만큼이 $\phi_m$ 쪽 인자로 옮겨지고, 그렇게 얻은 두 식을 Siegel 형식과 떼어 조건으로 삼은 것이 Jacobi 형식이다.

$$\tau_1\mapsto\frac{a\tau_1+b}{c\tau_1+d},\qquad z\mapsto\frac{z}{c\tau_1+d},\qquad \tau_2\mapsto\tau_2-\frac{cz^2}{c\tau_1+d}$$

$$z\mapsto z+\lambda\tau_1+\mu,\qquad \tau_2\mapsto\tau_2+\lambda^2\tau_1+2\lambda z+\lambda\mu$$

# 정의

정수 $k$ 와 $m\ge0$ 에 대해 가중치(weight) $k$, 지표(index) $m$ 의 **Jacobi 형식(Jacobi form)** 은 $\mathbb H\times\mathbb C$ 위의 [정칙함수](holomorphic-functions.md) $\phi$ 로, 다음 두 변환식과 아래 Fourier 전개 절의 성장 조건을 만족하는 것이다. 첫째 식은 직관 절의 $\mathrm{SL}\_2(\mathbb Z)$ 작용에서, 둘째 식은 $z$ 의 평행이동에서 온다.

$$\phi\left(\frac{a\tau+b}{c\tau+d},\thinspace\frac{z}{c\tau+d}\right)=(c\tau+d)^k\thinspace e^{2\pi i mcz^2/(c\tau+d)}\thinspace\phi(\tau,z),\qquad\begin{pmatrix}a&b\cr c&d\end{pmatrix}\in\mathrm{SL}\_2(\mathbb Z)$$

$$\phi(\tau,z+\lambda\tau+\mu)=e^{-2\pi i m(\lambda^2\tau+2\lambda z)}\thinspace\phi(\tau,z),\qquad \lambda,\mu\in\mathbb Z$$

이 공간을 $J_{k,m}$ 이라 쓴다. 직관 절의 $\phi_m$ 이 $J_{k,m}$ 의 원소다.

## Fourier 전개

두 변환식 가운데 $\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 과 $(\lambda,\mu)=(0,1)$ 에 해당하는 것이 $\phi$ 를 $\tau\mapsto\tau+1$ 과 $z\mapsto z+1$ 에 불변으로 만들므로 전개가 있다.

$$\phi(\tau,z)=\sum_{n,r}c(n,r)\thinspace q^n\zeta^r,\qquad q=e^{2\pi i\tau},\quad \zeta=e^{2\pi i z}$$

성장 조건을 어디까지 두느냐로 세 가지를 나눈다. 첫째를 **Jacobi 첨점형식(Jacobi cusp form)**, 셋째를 **약한 Jacobi 형식(weak Jacobi form)** 이라 한다.

| 이름 | 조건 |
| --- | --- |
| 첨점형식 | $4nm-r^2\le 0$ 이면 $c(n,r)=0$ |
| Jacobi 형식 | $4nm-r^2\lt 0$ 이면 $c(n,r)=0$ |
| 약한 Jacobi 형식 | $n\lt 0$ 이면 $c(n,r)=0$ |

$m=0$ 이면 둘째 변환식이 $\phi$ 를 $z$ 에 대해 주기적이고 유계인 정칙함수로 만들어 $z$ 에 상수이고, $J_{k,0}$ 은 가중치 $k$ 의 모듈러 형식 공간이다.

$m=1$ 의 예로 Jacobi 형식의 [Eisenstein 급수](eisenstein-series.md)(Jacobi–Eisenstein series) $E_{4,1}\in J_{4,1}$ 이 있고, 그 전개는 다음과 같이 시작한다[^1].

$$E_{4,1}(\tau,z)=1+\left(\zeta^{2}+56\zeta+126+56\zeta^{-1}+\zeta^{-2}\right)q+O(q^2)$$

$q^1$ 의 항에서 $4nm-r^2$ 은 $r=\pm2$ 에서 $0$, $r=\pm1$ 에서 $3$, $r=0$ 에서 $4$ 이므로 성장 조건을 만족한다.

# 성질

## 계수가 의존하는 양

$c(n,r)$ 은 판별식 $D=4nm-r^2$ 과 나머지 $r\bmod 2m$ 에만 의존한다[^1]. $E_{4,1}$ 에서 $c(1,2)$ 와 $c(0,0)$ 은 $D=0$, $r\equiv0\pmod2$ 로 같으므로 둘 다 $1$ 이다.

증명의 요지. 둘째 변환식의 좌변과 우변을 $q,\zeta$ 로 전개해 $\zeta^r$ 의 계수를 견주면

$$c(n,r)=c(n+\lambda r+\lambda^2m,\thinspace r+2\lambda m)$$

이 모든 $\lambda\in\mathbb Z$ 에서 성립한다. 이 치환은 $r$ 을 $2m$ 으로 나눈 나머지를 바꾸지 않고, $4(n+\lambda r+\lambda^2m)m-(r+2\lambda m)^2=4nm-r^2$ 이므로 판별식도 바꾸지 않는다. 거꾸로 $D$ 와 $r\bmod 2m$ 이 같은 두 쌍 $(n,r)$, $(n',r')$ 은 어떤 $\lambda$ 로 옮겨진다.

## theta 분해

$\mu\bmod 2m$ 마다 다음을 두자.

$$\theta_{m,\mu}(\tau,z)=\sum_{r\equiv\mu\pmod{2m}}q^{r^2/(4m)}\zeta^r$$

그러면 $\phi\in J_{k,m}$ 이 유일하게 갈라진다.

$$\phi(\tau,z)=\sum_{\mu\bmod 2m}h_\mu(\tau)\thinspace\theta_{m,\mu}(\tau,z),\qquad h_\mu(\tau)=\sum_{D}c_\mu(D)\thinspace q^{D/(4m)}$$

$c_\mu(D)$ 는 앞 절의 $c(n,r)$ 을 $D$ 와 $\mu$ 로 다시 적은 것이다. $q^n\zeta^r=q^{D/(4m)}\cdot q^{r^2/(4m)}\zeta^r$ 이므로 전개를 $r\bmod 2m$ 으로 묶으면 그대로 나온다. $(h_\mu)$ 는 가중치 $k-1/2$ 의 벡터값 모듈러 형식이고, 그 변환을 정하는 표현이 [Weil 표현](weil-representation.md)이다. 스칼라 가중치의 정칙함수 하나가 반정수 가중치의 성분 $2m$ 개로 바뀐다.

## 지표 1 과 Saito–Kurokawa 승강

$m=1$ 이면 $\theta_{1,0}$ 과 $\theta_{1,1}$ 의 계수가 $h_0,h_1$ 을 한 함수로 묶어, $J_{k,1}$ 이 가중치 $k-1/2$ 의 Kohnen plus 공간(Kohnen plus space) $M^+\_{k-1/2}(\Gamma_0(4))$ 와 동형이 된다[^2]. plus 공간은 $q$ 전개의 지수가 $0,3\bmod 4$ 인 항만 갖는 부분공간이다. 여기에 [Shimura 대응](shimura-correspondence.md)을 이으면 세 공간의 사슬이 된다.

$$J_{k,1}\thinspace\cong\thinspace M^+\_{k-1/2}(\Gamma_0(4))\thinspace\cong\thinspace M_{2k-2}(\mathrm{SL}\_2(\mathbb Z))$$

차수 $2$ 의 Siegel 형식을 $\sum_m\phi_m(\tau_1,z)e^{2\pi im\tau_2}$ 로 적었을 때 $\phi_1$ 이 나머지 전부를 정하는 형식들이 Maass 승강(Maass lift)의 상이다. 이 사슬과 Maass 승강을 이어 가중치 $2k-2$ 의 타원 첨점형식에서 가중치 $k$ 의 Siegel 첨점형식을 만드는 사상을 Saito–Kurokawa 승강(Saito–Kurokawa lift)이라 한다.

## 약한 Jacobi 형식의 환

짝수 가중치의 약한 Jacobi 형식 전체 $J^{\mathrm{weak}}\_{\mathrm{ev},\ast}$ 는 $M_\ast(\mathrm{SL}\_2(\mathbb Z))$ 위의 다항대수이고, 생성원은 가중치와 지표가 $(-2,1)$ 과 $(0,1)$ 인 두 형식이다[^1].

$$\phi_{-2,1}=\frac{\theta_1(\tau,z)^2}{\eta(\tau)^6},\qquad \phi_{0,1}=4\sum_{j=1}^{3}\frac{\theta_{j+1}(\tau,z)^2}{\theta_{j+1}(\tau,0)^2}$$

$\theta_j$ 는 Jacobi theta 함수(Jacobi theta function), $\eta$ 는 Dedekind eta 함수(Dedekind eta function)다. 두 생성원의 전개는 $\phi_{-2,1}=(\zeta-2+\zeta^{-1})+O(q)$, $\phi_{0,1}=(\zeta+10+\zeta^{-1})+O(q)$ 로 시작한다. $\phi_{-2,1}$ 의 $q^0\zeta^{\pm1}$ 항은 $4nm-r^2=-1\lt 0$ 이어서 Jacobi 형식의 조건은 만족하지 않고 약한 조건만 만족한다.

# 활용

- Siegel 형식의 Fourier–Jacobi 전개(Fourier–Jacobi expansion). 차수 $2$ 의 Siegel 모듈러 형식을 지표별 Jacobi 형식의 열로 본다. Siegel 모듈러 형식의 $\Phi$ 연산자가 $m=0$ 항을 뽑는 것이고, Maass 승강의 상은 $\phi_1$ 이 나머지를 정하는 부분공간이다.
- 반정수 가중치와 격자. theta 분해가 Jacobi 형식을 Weil 표현에 대한 벡터값 형식으로 바꾼다. 판별식 형식이 $2m$ 차 순환군인 경우가 지표 $m$ 의 Jacobi 형식이고, 일반 격자의 판별식 형식으로 바꾸면 [theta 급수](theta-series.md)의 벡터값 형식이 나온다.
- Borcherds 곱의 입력. [Borcherds 곱](borcherds-products.md)은 Weil 표현에 대한 벡터값 약정칙 형식(weakly holomorphic form)을 받아 직교군의 자기동형 형식을 내놓는다. 지표 $m$ 의 약한 Jacobi 형식은 theta 분해로 그 꼴이 되고, 약한 조건이 허용하는 $4nm-r^2\lt 0$ 항이 벡터값 형식의 극에 대응한다. 계수는 무한곱의 지수로 들어간다.
- Mock 모듈러 형식과의 관계. [Mock 모듈러 형식](mock-modular-forms.md)의 계수를 담는 함수 가운데 둘째 변수를 붙여야 변환식이 닫히는 것들이 있고, 그 변환식이 Jacobi 형식의 것에서 완비화 항만큼 벗어난다.
- 타원 종수. 복소 차원 $d$ 의 Calabi–Yau 다양체(Calabi–Yau manifold)의 타원 종수(elliptic genus)는 가중치 $0$, 지표 $d/2$ 의 약한 Jacobi 형식이다. 이 공간이 유한 차원이므로 타원 종수의 계수 사이에 선형 관계가 생기고, 그 관계가 Chern 수 사이의 관계식을 준다.

[^1]: M. Eichler, D. Zagier, *The Theory of Jacobi Forms*, Progress in Mathematics **55**, Birkhäuser (1985). 계수의 판별식 의존성은 §2, 약한 Jacobi 형식 환의 생성원은 §9.

[^2]: W. Kohnen, "Modular forms of half-integral weight on $\Gamma_0(4)$", Mathematische Annalen **248** (1980), 249–266. Jacobi 형식과 plus 공간의 동형은 Eichler–Zagier §5.

# 연관 문서

## 선수지식

- [theta 급수](theta-series.md)
- [Siegel 모듈러 형식](siegel-modular-forms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #algebra
