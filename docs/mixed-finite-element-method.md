# 혼합 유한요소법

# 개요

**혼합 유한요소법(mixed finite element method)** 은 미분방정식의 해와 그 도함수를 따로 미지수로 두고 동시에 근사하는 방법이다. $(0,1)$ 에서 $-u''=f$ 를 [유한요소법](finite-element-method.md)으로 풀면 조각마다 일차인 근사해 $u_h$ 가 나오는데, 지하수의 유속처럼 필요한 양이 $\sigma=-u'$ 이면 $u_h$ 를 미분한 값은 조각마다 상수라 정확도가 한 차수 떨어진다. 혼합 유한요소법은 방정식을 $\sigma=-u'$ 와 $\sigma'=f$ 두 개로 나누고 $\sigma$ 와 $u$ 를 서로 다른 유한요소공간에서 근사해, $\sigma$ 를 독립된 미지수로 얻는다.

# 직관

혼합 유한요소법은 2계 편미분방정식을 1계 방정식 두 개로 바꾸고, 두 미지 함수를 서로 다른 유한요소공간에서 동시에 근사하는 방법이다. 유한요소법은 해 하나만 근사하고 그 도함수는 근사해를 미분해 얻지만, 혼합 유한요소법은 도함수를 독립 미지수로 두고 같은 차수로 근사한다.

이 꼴의 쌍선형형식은 한 변수 방향에서 $0$ 이므로 강제가 아니고 [Lax–Milgram 정리](lax-milgram.md)가 적용되지 않는다. 가해성과 안정성은 조건 두 개를 따로 요구하는 Babuška–Brezzi 조건(Babuška–Brezzi condition)이 준다. 두 공간을 따로 고르므로 각각이 근사 성질을 가져도 짝이 이 조건을 만족하지 않을 수 있고, 그때는 격자를 가늘게 해도 오차가 줄지 않는다.

$(0,1)$ 에서 $-u''=f$ 와 $u(0)=u(1)=0$ 을 유한요소법으로 풀면 조각마다 일차인 연속함수 $u_h$ 가 나온다. 지하수의 유속이나 막대의 응력처럼 알아야 할 양이 $u$ 가 아니라 $\sigma=-u'$ 인 문제에서는 $u_h$ 를 미분해 $\sigma_h=-u_h'$ 로 쓴다.

이렇게 얻은 $\sigma_h$ 는 조각마다 상수이고 자른 점에서 값이 뛴다. $u-u_h$ 의 $H^1$ 오차가 $O(h^k)$ 이므로 $\sigma-\sigma_h$ 의 $L^2$ 오차도 $O(h^k)$ 이고, $u$ 쪽 $L^2$ 오차 $O(h^{k+1})$ 보다 한 차수 낮다. 원래 방정식을 1계 꼴로 적은 $\sigma'=f$ 도 조각 안에서 $\sigma_h'=0$ 이므로 성립하지 않는다.

그래서 $\sigma$ 를 미지수로 놓는다. $\sigma=-u'$ 와 $\sigma'=f$ 가 원래 방정식과 같은 내용이다. 앞 식에 $\tau$ 를 곱해 적분하고 $u'\tau$ 를 부분적분하면 $u(0)=u(1)=0$ 에서 경계항이 사라져

$$
\int\_0^1\sigma\tau\thinspace dx-\int\_0^1 u\tau'\thinspace dx=0
$$

이고, 뒤 식에 $v$ 를 곱해 적분하면

$$
\int\_0^1\sigma'v\thinspace dx=\int\_0^1 fv\thinspace dx
$$

다. 두 식에서 $\sigma$ 는 $H^1(0,1)$ 에서 찾고 $u$ 는 $L^2(0,1)$ 에서 찾으며 $u$ 에는 미분이 걸리지 않는다.

두 식을 $(\sigma,u)$ 와 $(\tau,v)$ 의 쌍선형형식 하나로 묶으면

$$
B((\sigma,u),(\tau,v))=\int\_0^1\sigma\tau\thinspace dx-\int\_0^1 u\tau'\thinspace dx+\int\_0^1\sigma'v\thinspace dx
$$

이다. $\tau=0$ 과 $v=u$ 를 넣으면 세 항이 모두 $0$ 이므로 $u\ne 0$ 에서도 $B((0,u),(0,u))=0$ 이다. 강제성 $B(w,w)\ge\alpha\Vert w\Vert^2$ 이 성립하지 않으니 Lax–Milgram 정리로는 해의 존재도 안정성도 나오지 않는다.

$u$ 방향에서 형식이 $0$ 인 것이 막힌 이유다. 그래서 강제성을 조건 두 개로 나눈다. $\int\_0^1\sigma\tau\thinspace dx$ 는 $\tau'=0$ 인 $\tau$ 들만 보면 강제이고, $u$ 를 정하는 일은 $\int\_0^1 u\tau'\thinspace dx$ 가 $0$ 이 아닌 $u$ 를 $0$ 으로 보내지 않는다는 조건이 맡는다.

# 정의

## 안장점 문제

$V$ 와 $Q$ 를 [Hilbert 공간](hilbert-spaces.md), $a\colon V\times V\to\mathbb R$ 와 $b\colon V\times Q\to\mathbb R$ 을 유계 쌍선형형식, $f\in V'$ 와 $g\in Q'$ 를 유계 선형범함수라 한다. **안장점 문제(saddle point problem)** 는 다음을 만족하는 $(\sigma,u)\in V\times Q$ 를 찾는 문제다.

$$
a(\sigma,\tau)+b(\tau,u)=f(\tau)\quad(\forall\tau\in V),\qquad b(\sigma,v)=g(v)\quad(\forall v\in Q)
$$

$b$ 가 정하는 유계 작용소 $B\colon V\to Q'$ 를 $(B\tau)(v)=b(\tau,v)$ 로 두고 그 핵을 $K=\ker B$ 라 쓴다. $K$ 는 $V$ 의 닫힌 부분공간이다.

위 직관의 1차원 문제는 $V=H^1(0,1)$ , $Q=L^2(0,1)$ , $a(\sigma,\tau)=\int\_0^1\sigma\tau\thinspace dx$ , $b(\tau,v)=-\int\_0^1 v\tau'\thinspace dx$ , $f=0$ , $g(v)=-\int\_0^1 fv\thinspace dx$ 인 경우다. 이때 $K=\lbrace \tau\in H^1(0,1):\tau'=0\rbrace$ 는 상수함수 전체다.

## 혼합 유한요소공간

유한차원 부분공간 $V_h\subset V$ 와 $Q_h\subset Q$ 를 따로 고른다. **혼합 유한요소공간(mixed finite element space)** 은 이런 짝 $(V_h,Q_h)$ 이고, 이산 문제는 같은 두 식을 $\tau\in V_h$ 와 $v\in Q_h$ 에서만 요구한다. 기저를 잡아 $\boldsymbol\sigma$ 와 $\boldsymbol u$ 를 계수벡터라 하면 연립방정식은 블록 꼴이다.

$$
\begin{pmatrix}A&B^{\mathsf T}\cr B&0\end{pmatrix}\begin{pmatrix}\boldsymbol\sigma\cr\boldsymbol u\end{pmatrix}=\begin{pmatrix}\boldsymbol f\cr\boldsymbol g\end{pmatrix}
$$

$A$ 는 $a$ 의 강성행렬이고 $B$ 는 $b$ 의 [행렬](matrices.md)이다. 오른쪽 아래 블록이 $0$ 인 것이 강제성이 깨지는 자리다. 이산 핵은 $K_h=\lbrace \tau_h\in V_h:b(\tau_h,v_h)=0\thinspace(\forall v_h\in Q_h)\rbrace$ 다.

# 성질

## Babuška–Brezzi 정리

**정리.** 다음 두 조건이 성립하면 안장점 문제의 해가 유일하게 존재하고 $\Vert\sigma\Vert_V+\Vert u\Vert_Q\le C(\Vert f\Vert\_{V'}+\Vert g\Vert\_{Q'})$ 이다.[^1]

- **핵 강제성.** 어떤 $\alpha\gt 0$ 에서 모든 $\tau\in K$ 가 $a(\tau,\tau)\ge\alpha\Vert\tau\Vert_V^2$ 를 만족한다.
- **inf-sup 조건.** 어떤 $\beta\gt 0$ 에서 모든 $v\in Q$ 가 $\sup\_{\tau\in V,\thinspace\tau\ne 0}b(\tau,v)/\Vert\tau\Vert_V\ge\beta\Vert v\Vert_Q$ 를 만족한다.

상수 $C$ 는 $\alpha^{-1}$ , $\beta^{-1}$ , $a$ 의 유계상수로만 정해진다.

증명의 요지. inf-sup 조건은 $B'$ 가 단사이고 치역이 닫혔다는 것이므로 [닫힌 치역 정리](closed-range-theorem.md)로 $B$ 가 전사이고 $B\sigma_g=g$ 와 $\Vert\sigma_g\Vert_V\le\beta^{-1}\Vert g\Vert\_{Q'}$ 인 $\sigma_g$ 가 있다. $\sigma=\sigma_0+\sigma_g$ 로 두면 $\sigma_0\in K$ 를 찾는 문제가 남는다. 첫 식을 $\tau\in K$ 에서만 보면 $b(\tau,u)=0$ 이므로 $u$ 가 사라지고

$$
a(\sigma_0,\tau)=f(\tau)-a(\sigma_g,\tau)\quad(\forall\tau\in K)
$$

가 된다. $K$ 는 닫힌 부분공간이고 거기서 $a$ 가 강제이므로 Lax–Milgram 정리가 $\sigma_0$ 를 유일하게 준다. 남은 $u$ 는 범함수 $\tau\mapsto f(\tau)-a(\sigma,\tau)$ 가 $K$ 에서 $0$ 이라는 데서 나온다. $K$ 의 소멸자가 $B'$ 의 치역이므로 그 범함수가 $B'u$ 로 적히고, $B'$ 가 단사여서 $u$ 가 유일하다. 두 부등식을 모으면 안정성 추정이 나온다. $\square$

## 이산 안정성

이산 문제는 $V_h$ 와 $Q_h$ 에 대한 같은 꼴의 안장점 문제이므로 위 정리를 그대로 적용한다. 이때 쓰이는 상수는 $K_h$ 에서의 강제상수 $\alpha_h$ 와 $V_h\times Q_h$ 에서의 inf-sup 상수 $\beta_h$ 다. **이산 안정성(discrete stability)** 은 $h$ 와 무관한 양수 $\alpha_0$ 와 $\beta_0$ 가 있어 모든 격자에서 $\alpha_h\ge\alpha_0$ 와 $\beta_h\ge\beta_0$ 가 성립하는 것이다.

부분공간은 이 두 조건을 물려받지 않는다. $K_h$ 가 $K$ 에 포함되지 않으므로 $K$ 에서의 강제성이 $K_h$ 에서의 강제성을 주지 않고, inf-sup 조건의 상한이 $V$ 에서 $V_h$ 로 좁아지므로 $\beta$ 가 $\beta_h$ 를 주지 않는다. 두 조건은 짝 $(V_h,Q_h)$ 마다 따로 확인한다.

## 오차 추정

**정리.** 이산 안정성이 성립하면

$$
\Vert\sigma-\sigma_h\Vert_V+\Vert u-u_h\Vert_Q\le C\Bigl(\inf\_{\tau_h\in V_h}\Vert\sigma-\tau_h\Vert_V+\inf\_{v_h\in Q_h}\Vert u-v_h\Vert_Q\Bigr)
$$

이고 $C$ 는 $\alpha_0^{-1}$ 과 $\beta_0^{-1}$ 로 정해진다.[^1]

유한요소법의 Céa 보조정리에 대응하는 추정이다. 두 공간의 근사 오차가 함께 들어가므로 한쪽만 차수를 올려도 전체 차수가 오르지 않는다. $\beta_h$ 가 $h\to 0$ 에서 $0$ 으로 가면 $C$ 가 발산하므로, 오른쪽의 두 하한이 $0$ 으로 가도 왼쪽이 줄지 않는다.

## 불안정한 쌍과 체커보드 모드

$\beta_h\gt 0$ 은 $B_h\colon V_h\to Q_h'$ 가 전사라는 것이므로 $\dim V_h\ge\dim Q_h$ 가 필요하다. $\dim Q_h\gt\dim V_h$ 이면 $b(\tau_h,v_h)=0$ 을 모든 $\tau_h\in V_h$ 에서 만족하는 $v_h\ne 0$ 이 있고 $\beta_h=0$ 이다.

차원 조건은 충분하지 않다. 위 1차원 문제를 $0=x_0\lt x_1\lt\dots\lt x_N=1$ 에서 이산화하면서 $V_h$ 를 조각마다 일차인 연속함수 전체, $Q_h$ 도 같은 공간으로 잡으면 두 차원이 모두 $N+1$ 이다. 그런데 $\tau_h\in V_h$ 의 도함수는 조각마다 상수이고 그런 함수의 공간은 $N$ 차원이므로 $B_h$ 의 계수가 $N$ 이하다. 따라서 $v_h\ne 0$ 이 $Q_h$ 에 있어 모든 $\tau_h$ 에서 $\int\_0^1 v_h\tau_h'\thinspace dx=0$ 이다. 조각 $\lbrack x_i,x\_{i+1}\rbrack$ 의 지시함수가 $\tau_h'$ 로 나오므로 이 조건은 조각마다 $v_h$ 의 적분이 $0$ 이라는 것이고, $v_h$ 가 조각마다 일차이므로 $(v_h(x_i)+v_h(x\_{i+1}))/2=0$ 이다. 곧 $v_h$ 의 절점값이 $c,-c,c,\dots$ 로 번갈아 나타난다. 이 $v_h$ 를 **체커보드 모드(checkerboard mode)** 라 하고, 이 짝에서 $u_h$ 는 체커보드 모드를 더한 만큼 정해지지 않는다.

같은 현상이 2차원 Stokes 방정식의 사각형 격자에서 속도를 겹일차 연속함수, 압력을 요소마다 상수로 잡을 때도 나타난다. 차원 조건은 성립하지만 요소를 체스판처럼 $+1$ 과 $-1$ 로 칠한 압력이 모든 이산 속도에 대해 $b(\tau_h,v_h)=0$ 을 만족한다.[^2]

## Raviart–Thomas 요소

$\Omega\subset\mathbb R^d$ 의 삼각분할 $\mathcal T_h$ 에서 $V=\lbrace \tau\in L^2(\Omega)^d:\mathrm{div}\thinspace\tau\in L^2(\Omega)\rbrace$ 와 $Q=L^2(\Omega)$ 를 쓴다. 요소 $T$ 마다 국소공간을

$$
V_k(T)=(P_k(T))^d+x\thinspace P_k(T)
$$

로 두고, $V_h$ 를 요소마다 $V_k(T)$ 에 속하며 면에서 법선성분이 연속인 $\tau$ 전체, $Q_h$ 를 요소마다 $P_k$ 인 불연속함수 전체라 한다. 이 짝을 **Raviart–Thomas 요소(Raviart–Thomas element)** 라 한다.[^3]

$\mathrm{div}\thinspace V_h=Q_h$ 가 성립하고, 이 등식과 보간 작용소의 가환성에서 이산 안정성이 $h$ 와 무관한 상수로 따라 나온다. $k$ 차 요소의 오차는 $\Vert\sigma-\sigma_h\Vert\_{L^2}+\Vert u-u_h\Vert\_{L^2}=O(h^{k+1})$ 이고, $\sigma$ 와 $u$ 가 같은 차수로 수렴한다. 1차원에서 $k=0$ 인 경우가 $V_h$ 를 조각마다 일차인 연속함수, $Q_h$ 를 조각마다 상수로 잡은 짝이다.

# 활용

- **Darcy 흐름의 유속.** 다공질 매체의 압력 $u$ 와 유속 $\sigma$ 가 $\sigma=-\kappa\nabla u$ 와 $\mathrm{div}\thinspace\sigma=f$ 를 만족한다. 유속이 구하려는 양이므로 그것을 미지수로 두는 것이 맞고, 둘째 식에 요소 $T$ 의 지시함수를 넣으면 $\int_T\mathrm{div}\thinspace\sigma_h=\int_T f$ 가 등식으로 성립해 요소마다 질량 보존이 정확하다.
- **Stokes 방정식.** 속도와 압력을 함께 미지수로 두면 압력이 비압축 조건의 Lagrange 승수가 되고 문제가 안장점 꼴이 된다([Lagrange 쌍대성](lagrange-duality.md)의 안장점과 같은 구조다). 속도를 조각마다 이차, 압력을 조각마다 일차인 연속함수로 잡은 Taylor–Hood 요소(Taylor–Hood element)가 이산 안정성을 만족한다.[^2]
- **탄성의 응력 변수화.** Hellinger–Reissner 원리(Hellinger–Reissner principle)로 응력을 미지수로 두면 변위만 쓰는 공식에서 Poisson 비가 $1/2$ 에 가까울 때 수렴이 느려지는 현상을 피한다.
- **연립방정식의 해법.** 블록 행렬이 대칭이지만 양의 정부호가 아니므로 공액기울기법을 그대로 쓸 수 없다. 블록 대각 근사나 Schur 보원 근사를 [전처리](preconditioning.md)로 쓰고 극소잔차 계열의 반복법을 적용한다.

[^1]: Daniele Boffi, Franco Brezzi, Michel Fortin, *Mixed Finite Element Methods and Applications*, Springer (2013), 4.2 절과 5.2 절. 원 논문은 I. Babuška, *Error-bounds for finite element method*, Numerische Mathematik **16** (1971), 322–333 과 F. Brezzi, *On the existence, uniqueness and approximation of saddle-point problems arising from Lagrangian multipliers*, RAIRO Analyse Numérique **8** (1974), 129–151.

[^2]: 같은 책 8.6 절이 사각형 격자의 체커보드 압력을, 8.8 절이 Taylor–Hood 요소의 이산 안정성 증명을 담는다.

[^3]: P.-A. Raviart, J. M. Thomas, *A mixed finite element method for 2nd order elliptic problems*, Lecture Notes in Mathematics **606**, Springer (1977), 292–315.

# 연관 문서

## 선수지식

- [유한요소법](finite-element-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #functional_analysis #algorithms
