# 유한요소법

# 개요

유한요소법은 약한 꼴 방정식을 조각마다 다항식인 유한차원 부분공간에서 푸는 방법이다. 영역을 작은 요소로 나누고 요소마다 다항식 하나를 얹어 미지수를 유한 개로 줄인다.

[Lax–Milgram 정리](lax-milgram.md)는 약한 꼴 방정식의 해가 하나 있다는 것까지 말하고 그 해의 값은 주지 않는다. 유한요소법은 같은 쌍선형형식을 부분공간에 제한해 연립방정식 하나를 얻고, 그 해가 원래 해에서 얼마나 떨어지는지를 Céa 보조정리로 잰다.

# 직관

$(0,1)$ 에서 $-u''=f$ 와 $u(0)=u(1)=0$ 을 푼다. 양변에 $v$ 를 곱하고 부분적분하면 약한 꼴

$$
\int\_0^1 u'v'\thinspace dx=\int\_0^1 fv\thinspace dx
$$

가 모든 $v\in H_0^1(0,1)$ 에서 성립한다. 이 식을 만족하는 $u$ 가 하나 있지만, $u$ 를 수로 적으려면 미지수가 필요하고 $H_0^1(0,1)$ 의 함수 하나를 적는 데는 수가 무한히 많이 든다.

미지수를 유한 개로 만들려면 쓸 수 있는 함수를 좁혀야 한다. $0=x_0\lt x_1\lt \dots\lt x_N=1$ 로 구간을 자르고, 자른 조각마다 일차함수이며 전체가 연속이고 양 끝에서 $0$ 인 함수만 쓴다. 그런 함수는 $x_1,\dots,x\_{N-1}$ 에서의 값으로 완전히 정해지므로 미지수가 $N-1$ 개다. $x_i$ 에서 $1$ 이고 다른 자른 점에서 $0$ 인 함수를 $\phi_i$ 라 하면, 쓸 수 있는 함수는 모두 $u_h=\sum\_j c_j\phi_j$ 꼴이다.

약한 꼴에 $u_h$ 를 넣고 $v$ 자리에도 $\phi_i$ 를 차례로 넣으면

$$
\sum\_j c_j\int\_0^1\phi_j'\phi_i'\thinspace dx=\int\_0^1 f\phi_i\thinspace dx
$$

이고 미지수 $N-1$ 개에 식 $N-1$ 개다. $\phi_i$ 는 $x\_{i-1}$ 과 $x\_{i+1}$ 사이에서만 $0$ 이 아니므로 $\phi_i'\phi_j'$ 의 적분은 $\vert i-j\vert\le 1$ 일 때만 남는다. 자른 간격이 모두 $h=1/N$ 이면 $\phi_i'$ 는 $\pm 1/h$ 이고, 적분은 $\int\phi_i'\phi_i'=2/h$ 와 $\int\phi_i'\phi\_{i+1}'=-1/h$ 다. $i$ 번째 식은

$$
\frac{-c\_{i-1}+2c_i-c\_{i+1}}{h}=\int\_0^1 f\phi_i\thinspace dx
$$

가 되고, 이것은 미지수 $N-1$ 개의 삼중대각 연립방정식이다.

# 정의

## 삼각분할과 유한요소공간

$\Omega\subset\mathbb R^d$ 를 다면체 영역이라 하자. $\Omega$ 의 **삼각분할** $\mathcal T_h$ 는 닫힌 단체 $K$ 의 유한 모임으로, 합집합이 $\overline\Omega$ 이고 서로 다른 두 단체의 교집합이 공통인 면이나 공집합이다. $h=\max\_{K\in\mathcal T_h}\mathrm{diam}\thinspace K$ 를 **격자 간격**이라 한다.

차수 $k$ 의 **유한요소공간**은

$$
V_h=\lbrace v\in C^0(\overline\Omega):v\vert_K\in P_k(K)\thinspace\text{for all }K\in\mathcal T_h,\thinspace v\vert\_{\partial\Omega}=0\rbrace
$$

이고 $P_k(K)$ 는 $K$ 에서 차수 $k$ 이하인 다항식의 공간이다. $V_h\subset H_0^1(\Omega)$ 인 것은 조각마다 다항식이고 전체가 연속인 함수의 약도함수가 $L^2(\Omega)$ 에 들기 때문이다. $V_h$ 는 유한차원이고 차원은 자유도의 개수다.

## 이산 문제와 강성행렬

$B$ 를 $H_0^1(\Omega)$ 위의 쌍선형형식, $f$ 를 유계 선형범함수라 하자. 모든 $v\in V_h$ 에서

$$
B(u_h,v)=f(v)
$$

인 $u_h\in V_h$ 를 찾는 문제를 **Galerkin 문제**라 한다. $V_h$ 의 기저 $\phi_1,\dots,\phi_n$ 을 잡고 $u_h=\sum\_j c_j\phi_j$ 로 쓰면 이 조건은 행렬 방정식

$$
Sc=F,\qquad S\_{ij}=B(\phi_j,\phi_i),\qquad F_i=f(\phi_i)
$$

과 같다. $S$ 를 **강성행렬**이라 한다. 기저로는 자유도 하나에서 $1$ 이고 다른 자유도에서 $0$ 인 함수를 쓰고, 그 받침은 그 자유도를 포함하는 요소들의 합집합이다.

# 성질

## 이산 문제의 가해성

$B$ 가 $H_0^1(\Omega)$ 에서 상수 $\beta$ 로 유계이고 상수 $\alpha$ 로 강제이면 부분공간 $V_h$ 에서도 같은 두 상수로 유계이고 강제다. Lax–Milgram 정리를 $V_h$ 에 적용하면 $u_h$ 가 유일하게 존재하고 강성행렬이 가역이다. 격자를 바꿔도 $\alpha,\beta$ 는 그대로이므로 가역성은 $h$ 에 의존하지 않는다.

## Galerkin 직교성

**정리.** $u$ 가 약한 꼴 방정식의 해, $u_h$ 가 Galerkin 문제의 해이면 모든 $v\in V_h$ 에서 $B(u-u_h,v)=0$ 이다.

증명의 요지. $v\in V_h\subset H_0^1(\Omega)$ 이므로 $B(u,v)=f(v)$ 와 $B(u_h,v)=f(v)$ 가 함께 성립하고 두 식을 뺀다. $\square$

$B$ 가 대칭이면 $B$ 가 내적이고 이 식은 오차 $u-u_h$ 가 $V_h$ 에 수직이라는 뜻이다. 곧 $u_h$ 는 그 내적에서 $u$ 의 직교사영이다.

## Céa 보조정리

**정리.** $B$ 가 유계이고 강제이면

$$
\Vert u-u\_h\Vert\le\frac{\beta}{\alpha}\inf\_{v\in V\_h}\Vert u-v\Vert
$$

이다.[^1]

증명의 요지. 임의의 $v\in V_h$ 에서 $u_h-v\in V_h$ 이므로 Galerkin 직교성이 $B(u-u_h,u_h-v)=0$ 을 준다. 따라서

$$
\alpha\Vert u-u\_h\Vert^2\le B(u-u\_h,u-u\_h)=B(u-u\_h,u-v)\le\beta\Vert u-u\_h\Vert\thinspace\Vert u-v\Vert
$$

이고 양변을 $\Vert u-u_h\Vert$ 로 나눈 뒤 $v$ 에 대한 하한을 취한다. $\square$

이 부등식은 근사 오차를 $V_h$ 안의 함수가 $u$ 에 얼마나 가까이 갈 수 있는지의 문제로 바꾼다. 쌍선형형식은 상수 $\beta/\alpha$ 로만 남는다.

## 수렴률

**정리.** $\mathcal T_h$ 의 요소가 형상 정칙이고 $u\in H^{k+1}(\Omega)\cap H_0^1(\Omega)$ 이면 $h$ 에 의존하지 않는 상수 $C$ 가 있어

$$
\Vert u-u\_h\Vert\_{H^1}\le Ch^k\Vert u\Vert\_{H^{k+1}}
$$

이다.[^2]

증명의 요지. Céa 보조정리의 하한을 $u$ 의 보간함수 $I_hu\in V_h$ 로 위에서 잡는다. 요소마다 Taylor 전개의 나머지를 재면 $\Vert u-I_hu\Vert\_{H^1(K)}\le C_K h_K^k\Vert u\Vert\_{H^{k+1}(K)}$ 이고, 상수 $C_K$ 는 $K$ 를 기준 단체로 보내는 아핀 사상의 특잇값비로 통제된다. 형상 정칙 조건은 그 비를 요소마다 일정하게 묶는 가정이다. 요소마다의 추정을 더해 전체 추정을 얻는다. $\square$

가정 $u\in H^{k+1}(\Omega)$ 는 자료 $f$ 에 대한 조건으로 바꿀 수 있다. [타원형 정칙성](elliptic-regularity.md)이 $f\in H^{k-1}(\Omega)$ 와 매끄러운 경계에서 $u\in H^{k+1}(\Omega)$ 를 주기 때문이다. 영역에 들어간 각이 있으면 이 정칙성이 깨지고 수렴률이 $h^k$ 보다 낮아진다.

## 강성행렬의 희소성과 조건수

$S_{ij}\ne 0$ 은 $\phi_i$ 와 $\phi_j$ 의 받침이 겹칠 때만 일어난다. 자유도 하나와 받침이 겹치는 자유도의 개수는 한 자유도가 닿는 요소의 개수로 묶이고, 형상 정칙 조건에서 이 개수는 $h$ 와 무관하다. 따라서 $S$ 의 행마다 $0$ 이 아닌 성분의 개수가 고정이고 $S$ 는 희소하다.

$B$ 가 대칭이면 $S$ 는 대칭 양의 정부호이고, $d$ 차원 등간격 격자에서 조건수는 $h^{-2}$ 에 비례한다. 미지수 개수가 $h^{-d}$ 에 비례하므로 격자를 가늘게 할수록 직접 분해의 비용과 반복법의 반복 횟수가 함께 커진다.

# 활용

- **삼중대각계.** 일차원 조각일차 요소의 강성행렬은 삼중대각이다. [삼중대각계](tridiagonal-systems.md) 문서의 Thomas 알고리즘이 미지수 개수에 비례하는 연산으로 이 계를 푼다.
- **다중격자.** [다중격자](multigrid.md)가 쓰는 격자 계층은 삼각분할을 성기게 한 단계들이고, 각 단계에서 푸는 계가 그 격자의 강성행렬이다. 다중격자의 수렴률이 격자 간격과 무관하다는 성질이 위의 조건수 증가를 상쇄한다.
- **영역 분할법.** [영역 분할법](domain-decomposition.md)은 삼각분할을 부분영역으로 나누고 부분영역마다 작은 강성행렬을 푼다.
- **전처리.** [전처리](preconditioning.md) 문서의 불완전 분해와 응집 전처리는 강성행렬의 희소 무늬를 입력으로 받는다.
- **이류-확산 방정식.** Lax–Milgram 정리 문서의 이류-확산 쌍선형형식에서 $\Vert b\Vert\_{L^\infty}$ 가 커지면 $\beta/\alpha$ 가 커지고 Céa 보조정리의 상한이 느슨해진다. 이 경우 격자를 가늘게 하기 전에는 수렴률이 보이지 않는다.

[^1]: Susanne C. Brenner, L. Ridgway Scott, *The Mathematical Theory of Finite Element Methods*, 3판, Springer, 2008, 2.8 절.
[^2]: Philippe G. Ciarlet, *The Finite Element Method for Elliptic Problems*, North-Holland, 1978, 3.2 절. 형상 정칙 조건과 아핀 사상의 특잇값비는 같은 책 3.1 절이다.

# 연관 문서

## 선수지식

- [Lax–Milgram 정리](lax-milgram.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #functional_analysis #algorithms
