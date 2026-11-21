# 강한 안정성 보존 Runge–Kutta 방법

# 개요

**강한 안정성 보존 Runge–Kutta 방법(strong stability preserving Runge–Kutta method, SSP Runge–Kutta method)** 은 한 걸음을 Euler 걸음 여러 개의 평균으로 짠 Runge–Kutta 방법이다. 줄어들기만 하는 농도 $x'=-x^2$, $x(0)=1$ 을 걸음 $0.5$ 로 풀면 Euler 방법은 $0.5$ 를 낸다. 같은 걸음에서 2 차 정확도의 Runge–Kutta 방법 하나는 $0.6875$ 를 내고, 다른 하나는 $2$ 를 내어 농도가 두 배가 된다. 강한 안정성 보존 방법은 Euler 걸음만 양의 무게로 평균하므로, 값이 늘지 않는다거나 음이 되지 않는다는 Euler 걸음의 성질을 높은 차수에서도 지킨다.

# 직관

[전체 변동 감소 방법](tvd-schemes.md)은 공간 방향의 차분을 고쳐서, 시간을 [Euler 방법](euler-method.md) 한 걸음으로 갈 때 계단 앞에 봉우리가 생기지 않게 한다. 시간 방향의 정확도를 높이려고 Euler 방법을 [Runge–Kutta 방법](runge-kutta-methods.md)으로 바꾸면, 이 보장이 함께 따라오는지 따져야 한다. 격자값 여러 개 대신 값 하나짜리 방정식으로 같은 문제를 본다.

농도 $x$ 가 $x'=-x^2$ 으로 줄어들고 $x(0)=1$ 이다. Euler 방법은 한 걸음에 $x$ 를 $x-\Delta t\thinspace x^2$ 으로 바꾸고, $0\le\Delta t\thinspace x\le 1$ 이면 결과가 $0$ 과 $x$ 사이에 있다. $\Delta t=0.5$ 로 한 걸음 가면 $0.5$ 이고, 참값은 $1/1.5\approx 0.667$ 이다.

$f(x)=-x^2$ 으로 두면 다음 방법은 2 차 정확도를 갖는다.

$$
\begin{aligned}
x^{(1)}&=x_n-20\Delta t\thinspace f(x_n)\cr
x_{n+1}&=x_n+\tfrac{41}{40}\Delta t\thinspace f(x_n)-\tfrac1{40}\Delta t\thinspace f\bigl(x^{(1)}\bigr)
\end{aligned}
$$

첫 줄은 시간을 거꾸로 $20$ 걸음 간 Euler 걸음이라 $x^{(1)}=1+10=11$ 로 튄다. 둘째 줄에서 $f(11)=-121$ 이 음의 무게 $-1/40$ 으로 들어가 $x_{n+1}=1-0.5125+1.5125=2$ 가 된다. 줄어들기만 해야 할 농도가 두 배가 되었다.

다음 방법도 2 차 정확도를 갖는다.

$$
\begin{aligned}
x^{(1)}&=x_n+\Delta t\thinspace f(x_n)\cr
x_{n+1}&=\tfrac12x_n+\tfrac12\Bigl(x^{(1)}+\Delta t\thinspace f\bigl(x^{(1)}\bigr)\Bigr)
\end{aligned}
$$

$x^{(1)}=0.5$ 이고, 거기서 Euler 걸음을 한 번 더 가면 $0.5-0.125=0.375$ 다. 그러면 $x_{n+1}=(1+0.375)/2=0.6875$ 다. 두 Euler 걸음은 각자 출발점과 $0$ 사이에 떨어지고, 두 점 $1$ 과 $0.375$ 가 $\lbrack 0,1\rbrack$ 에 있으니 평균도 $\lbrack 0,1\rbrack$ 에 있다.

첫 방법은 거꾸로 가는 걸음과 음의 무게를 썼고, 둘째 방법은 앞으로 가는 Euler 걸음과 양의 무게만 썼다. Euler 걸음만 양의 무게로 평균하면, Euler 걸음이 지키는 성질을 평균도 지킨다. 전체 변동 감소 차분에 쓰면 값의 크기 대신 전체 변동이 늘지 않는다.

# 정의

## 앞 Euler 조건

공간을 먼저 차분해 얻은 [상미분방정식](ordinary-differential-equations.md)계 $u'=L(u)$, $u\in\mathbb R^N$ 을 시간 방향으로 푼다. $\Vert\cdot\Vert$ 는 노름이나 전체 변동 같은 볼록 함수다. 어떤 $\Delta t_{\mathrm{FE}}\gt 0$ 에 대해 $0\le\Delta t\le\Delta t_{\mathrm{FE}}$ 이고 모든 $u$ 에서 다음이 성립하면, $L$ 이 **앞 Euler 조건(forward Euler condition)** 을 만족한다고 한다.

$$
\Vert u+\Delta t\thinspace L(u)\Vert\le\Vert u\Vert
$$

직관 절의 $L(x)=-x^2$ 과 $\Vert x\Vert=\vert x\vert$ 는 $0\le x\le 1$ 에서 $\Delta t_{\mathrm{FE}}=1$ 로 이 조건을 만족한다. [수송 방정식](transport-equation.md) $u_t+u_x=0$ 의 바람 위쪽 차분 $L(u)\_j=-(u_j-u\_{j-1})/h$ 는 전체 변동에 대해 $\Delta t_{\mathrm{FE}}=h$ 로 이 조건을 만족한다. 이때 Euler 걸음은 $\nu=\Delta t/h\le 1$ 인 바람 위쪽 차분이고, 이 차분은 Harten 의 판정(Harten's criterion)으로 전체 변동 감소 방법이다.

## Shu–Osher 꼴

$s$ 단 양함수 Runge–Kutta 방법은 다음 꼴로 쓸 수 있다.[^1]

$$
\begin{aligned}
u^{(0)}&=u^n\cr
u^{(i)}&=\sum_{k=0}^{i-1}\Bigl(\alpha_{ik}u^{(k)}+\Delta t\thinspace\beta_{ik}L\bigl(u^{(k)}\bigr)\Bigr),\qquad i=1,\dots,s\cr
u^{n+1}&=u^{(s)}
\end{aligned}
$$

여기서 $\alpha_{ik}\ge 0$ 이고 $\sum_k\alpha_{ik}=1$ 이다. 이것을 **Shu–Osher 꼴(Shu–Osher form)** 이라 한다. 직관 절의 둘째 방법은 $\alpha_{10}=\beta_{10}=1$, $\alpha_{20}=\tfrac12$, $\beta_{20}=0$, $\alpha_{21}=\beta_{21}=\tfrac12$ 인 Shu–Osher 꼴이다.

## SSP 계수

모든 $\alpha_{ik}$, $\beta_{ik}$ 가 $0$ 이상이고 $\alpha_{ik}=0$ 이면 $\beta_{ik}=0$ 인 Shu–Osher 꼴에서, 다음 값을 그 꼴의 계수라 한다. $\beta_{ik}=0$ 인 항의 비는 $\infty$ 로 센다.

$$
\mathcal C=\min_{i,k}\frac{\alpha_{ik}}{\beta_{ik}}
$$

한 방법의 Shu–Osher 꼴 가운데 이 값의 최댓값을 **SSP 계수(SSP coefficient)** 라 한다. 그런 꼴이 없으면 SSP 계수는 $0$ 이다. SSP 계수가 양수인 방법을 **강한 안정성 보존 Runge–Kutta 방법** 이라 한다. 직관 절의 둘째 방법은 $\min(1/1,\thinspace\tfrac12/\tfrac12)=1$ 이라 SSP 계수가 $1$ 이다.

## 대표적인 방법

$s$ 단 $p$ 차 강한 안정성 보존 방법을 SSP$(s,p)$ 로 적는다. 직관 절의 둘째 방법이 SSP$(2,2)$ 다. SSP$(3,3)$ 은 다음이고 SSP 계수가 $1$ 이다.[^1]

$$
\begin{aligned}
u^{(1)}&=u^n+\Delta t\thinspace L(u^n)\cr
u^{(2)}&=\tfrac34u^n+\tfrac14\Bigl(u^{(1)}+\Delta t\thinspace L\bigl(u^{(1)}\bigr)\Bigr)\cr
u^{n+1}&=\tfrac13u^n+\tfrac23\Bigl(u^{(2)}+\Delta t\thinspace L\bigl(u^{(2)}\bigr)\Bigr)
\end{aligned}
$$

직관 절의 방정식을 $\Delta t=0.5$ 로 풀면 $u^{(1)}=0.5$, $u^{(2)}=0.84375$, $u^{n+1}\approx 0.6585$ 이고, 참값 $0.6667$ 에 SSP$(2,2)$ 의 $0.6875$ 보다 가깝다.

# 성질

## Shu–Osher 정리

$L$ 이 앞 Euler 조건을 만족하고 방법의 SSP 계수가 $\mathcal C\gt 0$ 이면, $0\le\Delta t\le\mathcal C\thinspace\Delta t_{\mathrm{FE}}$ 에서 $\Vert u^{n+1}\Vert\le\Vert u^n\Vert$ 이다.[^1]

증명의 요지. $\alpha_{ik}\gt 0$ 인 항을 묶어 각 단을 다음과 같이 쓴다.

$$
u^{(i)}=\sum_{k=0}^{i-1}\alpha_{ik}\Bigl(u^{(k)}+\frac{\beta_{ik}}{\alpha_{ik}}\Delta t\thinspace L\bigl(u^{(k)}\bigr)\Bigr)
$$

괄호 안은 걸음 $(\beta_{ik}/\alpha_{ik})\Delta t\le\Delta t_{\mathrm{FE}}$ 의 Euler 걸음이라 노름이 $\Vert u^{(k)}\Vert$ 이하다. $\Vert\cdot\Vert$ 가 볼록이고 $\alpha_{ik}$ 의 합이 $1$ 이므로 $\Vert u^{(i)}\Vert\le\max_k\Vert u^{(k)}\Vert$ 이고, $i$ 에 대한 귀납법으로 $\Vert u^{(i)}\Vert\le\Vert u^n\Vert$ 이다.

같은 논증으로, Euler 걸음이 어떤 볼록 집합을 벗어나지 않으면 강한 안정성 보존 방법의 모든 단도 그 집합을 벗어나지 않는다. 직관 절에서 값이 $\lbrack 0,1\rbrack$ 에 머문 것이 이 경우다.

## 음수 계수

Butcher 표의 행렬 $A$ 나 무게 $b$ 에 음수가 있으면 SSP 계수는 $0$ 이다.[^4] 직관 절의 첫 방법은 $a_{21}=-20$, $b_2=-1/40$ 이라 강한 안정성 보존 방법이 아니다. Gottlieb 와 Shu 는 이 방법을 Burgers 방정식의 전체 변동 감소 공간 차분과 함께 쓰면 충격파 근처에 진동이 생기고, 같은 공간 차분에 SSP$(2,2)$ 를 쓰면 생기지 않음을 보였다.[^2]

## 선형 문제

$L$ 이 선형이면 $s\le 4$ 인 $s$ 단 $s$ 차 양함수 방법은 모두 한 걸음이 같은 다항식 $R(\Delta t L)$ 이고, $R(z)$ 는 $e^z$ 의 Taylor 전개를 $z^s$ 까지 자른 것이다. 그래서 선형 문제에서는 직관 절의 두 방법이 같은 값을 내고, 차이는 비선형 $L$ 에서만 나타난다. $R$ 을 Euler 걸음의 배율 $1+z$ 의 거듭제곱으로 전개하면 다음이 나온다.

$$
\sum_{j=0}^{s}\frac{z^j}{j!}=\sum_{k=0}^{s}\frac{1}{k!}\Bigl(\sum_{m=0}^{s-k}\frac{(-1)^m}{m!}\Bigr)(1+z)^k
$$

안쪽 합은 $e^{-1}$ 의 교대급수의 부분합이라 $0$ 이상이다. 그러므로 선형 문제에서는 $\Delta t\le\Delta t_{\mathrm{FE}}$ 일 때 한 걸음이 Euler 걸음을 거듭한 것들의 볼록결합이고, 노름이 늘지 않는다.[^3] $s=2$ 이면 다음이 나오고, 이것이 SSP$(2,2)$ 의 꼴이다.

$$
1+z+\frac{z^2}2=\frac12+\frac12(1+z)^2
$$

## 차수의 한계

- 4 단 4 차 양함수 방법 가운데 SSP 계수가 양수인 것은 없다.[^2]
- 양함수 강한 안정성 보존 Runge–Kutta 방법의 차수는 $4$ 이하다.[^5]
- 5 단 4 차에서는 SSP 계수가 약 $1.508$ 인 방법이 있고,[^6] 10 단 4 차에서는 SSP 계수가 $6$ 인 방법이 있다.[^7]
- 한 걸음에 $L$ 을 $s$ 번 계산하므로 방법끼리는 $\mathcal C/s$ 를 견준다. SSP$(3,3)$ 은 $1/3$, 10 단 4 차 방법은 $0.6$ 이다.
- 차수가 $2$ 이상인 음함수 Runge–Kutta 방법의 SSP 계수는 유한하다.[^4] 음함수 방법으로 바꾸어도 걸음 크기 제한이 사라지지 않는다.

# 활용

- [ENO 방법](eno-schemes.md)(essentially non-oscillatory scheme)의 시간 적분. Shu 와 Osher 는 ENO 공간 차분과 SSP$(3,3)$ 을 함께 제안했다.[^1]
- [WENO 방법](weno-schemes.md)(weighted essentially non-oscillatory scheme)의 시간 적분. 압축성 흐름에서 5 차 WENO 공간 차분과 SSP$(3,3)$ 을 함께 쓴다.
- 불연속 Galerkin 방법(discontinuous Galerkin method). 칸마다 다항식을 두는 공간 차분에 기울기 제한자를 걸고 시간은 강한 안정성 보존 방법으로 푼다.
- 양성 보존. 밀도와 압력이 Euler 걸음에서 양으로 남는 공간 차분을 강한 안정성 보존 방법으로 풀면, Shu–Osher 정리의 볼록 집합 판으로 높은 차수에서도 양으로 남는다.

[^1]: C.-W. Shu, S. Osher, "Efficient implementation of essentially non-oscillatory shock-capturing schemes", *Journal of Computational Physics* 77 (1988), 439–471.

[^2]: S. Gottlieb, C.-W. Shu, "Total variation diminishing Runge–Kutta schemes", *Mathematics of Computation* 67 (1998), 73–85.

[^3]: S. Gottlieb, C.-W. Shu, E. Tadmor, "Strong stability-preserving high-order time discretization methods", *SIAM Review* 43 (2001), 89–112.

[^4]: S. Gottlieb, D. Ketcheson, C.-W. Shu, *Strong Stability Preserving Runge–Kutta and Multistep Time Discretizations*, World Scientific, 2011.

[^5]: S. J. Ruuth, R. J. Spiteri, "Two barriers on strong-stability-preserving time discretization methods", *Journal of Scientific Computing* 17 (2002), 211–220.

[^6]: R. J. Spiteri, S. J. Ruuth, "A new class of optimal high-order strong-stability-preserving time discretization methods", *SIAM Journal on Numerical Analysis* 40 (2002), 469–491.

[^7]: D. I. Ketcheson, "Highly efficient strong stability-preserving Runge–Kutta methods with low-storage implementations", *SIAM Journal on Scientific Computing* 30 (2008), 2113–2136.

# 연관 문서

## 선수지식

- [Runge–Kutta 방법](runge-kutta-methods.md)
- [전체 변동 감소 방법](tvd-schemes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #computation
