# Lucas 수열

# 개요

**Lucas 수열(Lucas sequence)** 은 정수 $P,Q$ 를 정해 앞 두 항에서 다음 항을 $x_n=Px_{n-1}-Qx_{n-2}$ 로 만드는 수열이다. [Fibonacci 수](fibonacci-numbers.md) $F_{12}=144$ 와 $F_{18}=2584$ 의 최대공약수는 $8=F_6$ 이고, $2^{12}-1$ 과 $2^{18}-1$ 의 최대공약수도 $2^6-1$ 이다. 두 수열은 각각 $P=1,Q=-1$ 과 $P=3,Q=2$ 인 Lucas 수열이고, 점화식의 두 근으로 쓴 공식 하나에서 이 성질이 함께 나온다.

# 직관

$2^n-1$ 이 $2^m-1$ 로 나누어지는 것은 $m\mid n$ 일 때다. $n=mk$ 이면 다음 항등식이 성립한다.

$$
x^{mk}-y^{mk}=(x^m-y^m)\bigl(x^{m(k-1)}+x^{m(k-2)}y^m+\cdots+y^{m(k-1)}\bigr)
$$

$x=2$, $y=1$ 이면 $2^m-1\mid 2^n-1$ 이다.

Fibonacci 수에서는 $x,y$ 자리에 황금비 $\varphi=(1+\sqrt 5)/2$ 와 $\psi=(1-\sqrt 5)/2$ 를 넣는다. $F_n=(\varphi^n-\psi^n)/(\varphi-\psi)$ 이므로 같은 항등식의 둘째 인수가 $\varphi+\psi=1$ 과 $\varphi\psi=-1$ 의 다항식, 곧 정수가 되어 $F_m\mid F_n$ 이 나온다. $F_6=8$ 이 $F_{12}=144$ 를 나누는 것이 $m=6$, $k=2$ 인 경우다.

두 경우 모두 쓴 것은 $x+y$ 와 $xy$ 가 정수라는 사실뿐이다. $x+y=P$, $xy=Q$ 인 두 수는 $t^2-Pt+Q=0$ 의 근이고, 그 근으로 만든 수열은 점화식 $x_n=Px_{n-1}-Qx_{n-2}$ 를 만족한다.

# 정의

정수 $P,Q$ 에 대해 $D=P^2-4Q\ne 0$ 이라 하자. $t^2-Pt+Q=0$ 의 두 근을 $\alpha,\beta$ 라 하면 $\alpha+\beta=P$, $\alpha\beta=Q$, $(\alpha-\beta)^2=D$ 다.

**Lucas 수열(Lucas sequence)** $U_n=U_n(P,Q)$ 와 $V_n=V_n(P,Q)$ 는 다음으로 정해진다.

$$
\begin{aligned}
U_0&=0,\quad U_1=1,\quad U_n=PU_{n-1}-QU_{n-2}\cr
V_0&=2,\quad V_1=P,\quad V_n=PV_{n-1}-QV_{n-2}
\end{aligned}
$$

두 수열은 근으로 다음과 같이 쓰인다.

$$
U_n=\frac{\alpha^n-\beta^n}{\alpha-\beta},\qquad V_n=\alpha^n+\beta^n
$$

$P=1$, $Q=-1$ 이면 $U_n$ 은 Fibonacci 수 $0,1,1,2,3,5,8,\dots$ 이고 $V_n$ 은 Lucas 수(Lucas number) $2,1,3,4,7,11,18,\dots$ 이다. $P=3$, $Q=2$ 이면 $\alpha=2$, $\beta=1$ 이고 $U_n=2^n-1$, $V_n=2^n+1$ 이다.

# 성질

## 배수 공식

다음 항등식이 성립한다.

$$
U_{2n}=U_nV_n,\qquad V_{2n}=V_n^2-2Q^n,\qquad V_n^2-DU_n^2=4Q^n
$$

세 식 모두 근으로 쓴 꼴에 $\alpha\beta=Q$ 를 넣으면 나온다. Fibonacci 수에서 $F_6=F_3L_3=2\cdot 4$ 이고 $L_6=L_3^2+2=18$ 이다. 마지막 식은 $L_n^2-5F_n^2=4(-1)^n$ 이 되고, $n=3$ 이면 $16-20=-4$ 다.

## 가분성

$m\mid n$ 이면 $U_m\mid U_n$ 이다. 직관 절의 항등식에서 둘째 인수가 $\alpha+\beta$ 와 $\alpha\beta$ 의 정수 계수 다항식이기 때문이다.

$P$ 와 $Q$ 가 서로소이면 다음이 성립한다.

$$
\gcd(U_m,U_n)=\vert U_{\gcd(m,n)}\vert
$$

증명의 요지. $U_{m+n}=U_mU_{n+1}-QU_{m-1}U_n$ 이고 $U_n$ 은 $Q$ 및 이웃한 항과 서로소이므로 $\gcd(U_{m+n},U_n)=\gcd(U_m,U_n)$ 이다. 이것을 되풀이하면 첨자에 [Euclid 호제법](euclidean-algorithm.md)을 하는 것이 된다. 개요의 $\gcd(F_{12},F_{18})=F_6$ 과 $\gcd(2^{12}-1,2^{18}-1)=2^6-1$ 이 이 식의 두 경우다.

## 소수 법의 성질

$p$ 가 $2QD$ 를 나누지 않는 홀수 소수이고 $(D/p)$ 가 [이차 상호법칙](quadratic-reciprocity.md)의 Legendre 기호(Legendre symbol)이면 다음이 성립한다.

$$
U_{p-(D/p)}\equiv 0\pmod p,\qquad V_p\equiv P\pmod p
$$

증명의 요지. $D$ 가 법 $p$ 의 제곱잉여이면 $\alpha,\beta$ 가 $\mathbb F_p$ 에 있어 $\alpha^{p-1}=\beta^{p-1}=1$ 이다. 제곱잉여가 아니면 $\alpha,\beta$ 는 $\mathbb F_{p^2}$ 에 있고 $p$ 제곱이 두 근을 맞바꾸므로 $\alpha^{p+1}=\alpha\beta=Q=\beta^{p+1}$ 이다. 어느 쪽이든 $\alpha^{p-(D/p)}=\beta^{p-(D/p)}$ 이다.

Fibonacci 수에서 $D=5$ 다. $5$ 는 법 $11$ 의 제곱잉여($4^2=16$)이므로 $11\mid F_{10}=55$ 이고, 법 $7$ 의 제곱잉여가 아니므로 $7\mid F_8=21$ 이다.

# 활용

- [Lucas–Lehmer 판정](lucas-lehmer-test.md)의 수열 $s_0=4$, $s_{k}=s_{k-1}^2-2$ 는 $P=4$, $Q=1$ 인 $V_{2^k}$ 이다. 배수 공식 $V_{2n}=V_n^2-2$ 가 그 점화식이다.
- [Pell 방정식](pell-equation.md) $x^2-dy^2=1$ 의 기본해가 $(x_1,y_1)$ 이면 $n$ 번째 해는 $x_n=V_n(2x_1,1)/2$, $y_n=y_1U_n(2x_1,1)$ 이다. $d=2$, $(x_1,y_1)=(3,2)$ 이면 $U_2(6,1)=6$ 이고 $(x_2,y_2)=(17,12)$ 다.
- 소수 법의 성질 $U_{p-(D/p)}\equiv 0$ 을 만족하는 합성수를 Lucas 유사소수(Lucas pseudoprime)라 한다. 이 판정과 밑 $2$ 의 [Miller–Rabin 판정](miller-rabin-test.md)을 함께 쓰는 소수 판정에서는 둘을 모두 통과하는 합성수가 알려져 있지 않다.
- [Bilu–Hanrot–Voutier 정리](bilu-hanrot-voutier-theorem.md)는 $U_n$ 이 $n\gt 30$ 이면 앞 항들에 없던 소인수를 갖는다는 정리다.

# 연관 문서

## 선수지식

- [Fibonacci 수](fibonacci-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory
