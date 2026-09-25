# Feynman–Kac 공식

# 개요

Feynman–Kac 공식은 포물형 편미분방정식의 해를 확산 과정에 대한 기댓값으로 쓴다. 방정식을 풀지 않고 경로를 뽑아 평균하면 해의 값이 나오고, 반대로 기댓값을 방정식을 풀어 얻을 수도 있다. 열이 퍼지는 모습과 입자가 무작위로 돌아다니는 모습의 대응이 이 공식이다.

증명은 [Itô 공식](ito-calculus.md)을 해에 적용하는 것이다. 방정식 때문에 $dt$ 항이 0 이 되고, 남은 확률적분이 martingale 이라 기댓값이 시간에 대해 변하지 않는다. [Girsanov 정리](girsanov.md)는 측도를 바꿔 표류를 지우고 여기서는 방정식이 표류를 지운다. Black–Scholes 방정식과 위험중립 기댓값이 같은 답을 주는 것도 이 공식에서 나온다.

# 직관

## 표류항의 상쇄

방정식의 해를 $u(t,x)$ 라 하고 확산 과정 $X$ 를 따라 $u(t,X_t)$ 를 본다. Itô 공식이 이 값의 변화를 두 부분으로 나눈다.

$$
du(t,X_t)=\underbrace{\Big(\partial_tu+b\thinspace\partial_xu+\tfrac12\sigma^2\partial_x^2u\Big)dt}\_{\text{표류}}+\underbrace{\sigma\thinspace\partial_xu\thinspace dB_t}\_{\text{요동}}
$$

괄호 안은 풀려는 방정식의 좌변이다. $u$ 가 해이면 이 항이 0 이므로 표류가 사라지고 $u(t,X_t)$ 가 martingale 이 된다. martingale 의 기댓값은 시간에 무관하므로 지금 값과 만기 값의 기댓값이 같다.

$$
u(t,x)=\mathbb E\big[u(T,X_T)\mid X_t=x\big]=\mathbb E\big[\varphi(X_T)\mid X_t=x\big]
$$

만기 조건 $u(T,\cdot)=\varphi$ 를 알면 오른쪽은 계산 가능한 기댓값이고, 방정식을 푸는 일이 경로를 뽑아 평균하는 일이 된다.

## 소멸항과 생존 확률

방정식에 $-c(x)u$ 항이 있으면 기댓값 안에 $\exp(-\int c\thinspace ds)$ 가 붙는다. 입자가 비율 $c(x)$ 로 소멸한다고 하면 만기까지 남을 확률이 이 지수이고, 해는 남은 입자만 센 기댓값이다.

금융에서 같은 인자가 할인 계수다. 이자율 $r$ 로 할인하는 것과 비율 $r$ 로 소멸하는 것이 수식에서 구별되지 않는다.

## 고차원에서의 이점

유한차분법은 각 축을 $N$ 등분하므로 $d$ 차원에서 격자점이 $N^d$ 개이고, 10 차원에서 이미 계산이 불가능하다. Monte Carlo 오차는 경로 수 $M$ 에 대해 $1/\sqrt{M}$ 이라 차원에 직접 의존하지 않는다.

두 방법이 주는 것이 다르다. 유한차분법은 모든 격자점의 해를 한 번에 주고 Monte Carlo 는 지정한 한 점 $(t,x)$ 의 해만 준다.

# 정의

## 생성원

$d$ 차원 확산 과정

$$
dX_t=b(t,X_t)\thinspace dt+\sigma(t,X_t)\thinspace dB_t
$$

의 생성원을 다음 이차 미분연산자로 정의한다.

$$
\mathcal L_t f(x)=\sum_ib_i(t,x)\thinspace\partial_if(x)+\frac12\sum_{i,j}\big(\sigma\sigma^{\mathsf T}\big)\_{ij}(t,x)\thinspace\partial_i\partial_jf(x)
$$

$X$ 가 표준 [Brown 운동](brownian-motion.md)이면 $\mathcal L = \tfrac12\Delta$ 이고, 열방정식과 Brown 운동이 이 등식으로 대응한다.

## 정리

$c \ge 0$ 와 $g$ 가 주어졌을 때 다음 종단값 문제를 생각한다.

$$
\partial_tu+\mathcal L_tu-c(t,x)\thinspace u+g(t,x)=0,\qquad u(T,x)=\varphi(x)
$$

적절한 정칙성과 성장 조건 아래에서 해는 다음과 같다.

$$
u(t,x)=\mathbb E^{t,x}\left[\varphi(X_T)\thinspace e^{-\int_t^Tc(s,X_s)ds}+\int_t^Tg(r,X_r)\thinspace e^{-\int_t^rc(s,X_s)ds}\thinspace dr\right]
$$

$\mathbb E^{t,x}$ 는 $X_t = x$ 에서 출발한 확산에 대한 기댓값이다. $c = g = 0$ 이면 $u(t,x)=\mathbb E^{t,x}\lbrack\varphi(X_T)\rbrack$ 다.

## 시간 방향

방정식은 종단 조건에서 과거로 푼다. $v(t,x) = u(T-t,x)$ 로 시간을 뒤집으면 초기값 문제 $\partial_tv = \mathcal Lv$ 가 된다. 확산의 기댓값은 미래를 보고 현재를 평가하는 구조라 종단값 문제로 쓴다.

# 성질

## 증명

$c = g = 0$ 인 경우로 보인다. $u$ 가 해이고 충분히 매끄럽다고 가정한다. $Y_s = u(s,X_s)$ 에 Itô 공식을 적용하면

$$
dY_s=\big(\partial_su+\mathcal L_su\big)(s,X_s)\thinspace ds+\big(\nabla u\big)^{\mathsf T}\sigma\thinspace dB_s=\big(\nabla u\big)^{\mathsf T}\sigma\thinspace dB_s
$$

이고, 첫 항이 방정식 때문에 사라진다. 양변을 $t$ 에서 $T$ 까지 적분하고 기댓값을 취하면 확률적분의 기댓값이 0 이므로

$$
\mathbb E^{t,x}[u(T,X_T)]=u(t,x)
$$

를 얻고, $u(T,\cdot)=\varphi$ 를 대입하면 된다.

일반적인 $c$ 와 $g$ 에 대해서는 $Y_s = u(s,X_s)e^{-\int_t^sc\thinspace dr} + \int_t^s g\thinspace e^{-\int_t^rc}\thinspace dr$ 로 잡고 같은 계산을 한다. 지수 인자를 미분해 나오는 $-cu\thinspace ds$ 와 적분 항의 $g\thinspace ds$ 가 방정식의 남은 두 항을 상쇄한다.

## 정리의 범위

위 논증은 해가 존재하고 매끄럽다는 가정 아래 그 해가 기댓값과 같음을 보이는 검증 정리이며, 존재 정리가 아니다. 확률적분의 기댓값이 0 이라는 단계에는 $\nabla u$ 의 적분가능성 조건이 필요하다.

기댓값으로 정의된 함수가 방정식을 만족한다는 역방향은 별도의 논증이고 확산이 퇴화하지 않는다는 조건이 든다. $\sigma\sigma^{\mathsf T}$ 가 일정하게 양정의면 열방정식의 매끄럽게 하는 성질로 기댓값이 매끄러워진다. 퇴화하면 기댓값은 잘 정의되지만 점성 해의 의미에서만 방정식을 만족할 수 있다.

## Kolmogorov 방정식과의 관계

$\varphi$ 를 지시함수로 두면 $u(t,x) = \Pr(X_T \in A \mid X_t = x)$ 이므로 Feynman–Kac 은 전이확률이 만족하는 Kolmogorov 후방방정식의 일반화다. 전이밀도가 도착점에 대해 만족하는 방정식이 전방방정식, 곧 Fokker–Planck 방정식이며 생성원의 수반연산자를 쓴다.

| 대상 | 방정식 | 변수 |
|---|---|---|
| 기댓값 $u(t,x)$ | $\partial_tu+\mathcal Lu=0$ | 출발점, 시간을 거슬러 |
| 밀도 $p(t,y)$ | $\partial_tp=\mathcal L^{\ast}p$ | 도착점, 시간 순으로 |

## 확률적 표현의 귀결

방정식의 성질 몇 가지가 기댓값 표현에서 바로 나온다.

- 최대원리. $\varphi \le M$ 이고 $c \ge 0$ 이며 $g = 0$ 이면 기댓값도 $M$ 이하다.
- 비음성. $\varphi \ge 0$ 이면 $u \ge 0$ 이다. 기댓값이 음수가 될 수 없다.
- 비교원리. $\varphi_1 \le \varphi_2$ 이면 $u_1 \le u_2$ 다.

편미분방정식 쪽에서 따로 증명하는 이 정리들이 확률 표현에서는 기댓값의 단조성으로 나온다.

## 이산 대응

[무작위 걷기](random-walks.md)와 [조화함수](harmonic-functions.md) 사이에 같은 구조가 있다. 격자에서 $u(x)$ 가 이웃 평균과 같다는 이산 Laplace 방정식은 $u(X_n)$ 이 martingale 이라는 것과 동치이고, 경계값 문제의 해는 경계에 처음 닿는 지점에서의 경계값의 기댓값이다. Feynman–Kac 은 이 관찰의 연속시간 판이고 소멸항이 있는 경우까지 다룬다.

# 활용

## Black–Scholes 방정식과 위험중립 가격

파생상품 가격을 얻는 길은 둘이다. 복제 포트폴리오로 방정식을 세워 푸는 길과 Girsanov 정리로 위험중립측도를 만들어 할인된 기댓값을 계산하는 길이다.

$$
\partial_tV+rS\thinspace\partial_SV+\tfrac12\sigma^2S^2\partial_S^2V-rV=0\qquad\Longleftrightarrow\qquad V_t=e^{-r(T-t)}\thinspace\mathbb E_Q\big[\Phi(S_T)\big]
$$

이 동치가 Feynman–Kac 의 결론이다. 좌변의 $-rV$ 가 우변의 할인 계수이고 좌변의 표류 $rS$ 가 위험중립측도의 표류다. 경로에 의존하는 지급이나 고차원 바스켓에서는 기댓값 쪽이, 조기 행사가 있는 미국형에서는 방정식 쪽이 유리하다.

## 고차원 방정식의 Monte Carlo 해법

수십에서 수백 차원의 포물형 방정식은 격자법으로 다룰 수 없다. 특정 지점의 값만 필요하면 경로를 뽑아 평균하는 방법이 차원의 저주를 우회한다.

신경망으로 해를 근사하면서 확률 표현을 손실함수로 쓰는 방법도 있다. 후방 확률미분방정식으로 정식화한 deep **BSDE**(backward stochastic differential equation) 계열이 그 예다.

## 물리에서의 기원

Feynman 의 경로적분은 양자역학의 전파자를 경로에 대한 합으로 쓴다. 시간을 허수로 돌리면 진동하는 위상이 감쇠하는 지수가 되어 다룰 수 있는 측도가 되고, 그 결과가 Kac 의 정리다. 격자 양자색역학의 Monte Carlo 계산이 이 허수시간 회전을 쓴다.

소멸항 $c$ 를 위치에너지로 읽으면 Schrödinger 연산자의 [스펙트럼](unbounded-operators.md)을 확산 과정의 기댓값으로 연구할 수 있고, 바닥상태 에너지가 큰 시간 극한의 지수 감쇠율로 나온다.

# 연관 문서

## 선수지식

- [Girsanov 정리](girsanov.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #theorem
