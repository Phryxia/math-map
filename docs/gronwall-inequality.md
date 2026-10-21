# Grönwall 부등식

# 개요

**Grönwall 부등식(Grönwall's inequality)** 은 함수가 상수와 자기 자신의 적분의 합으로 위에서 눌리면 지수함수로 위에서 눌린다는 부등식이다. 미분 부등식으로 쓴 꼴과 적분 부등식으로 쓴 꼴이 있다. [상미분방정식](ordinary-differential-equations.md)의 두 해가 시간이 지나며 얼마나 벌어지는지를 이 부등식으로 재고, 해의 유일성과 초깃값에 대한 연속의존성이 여기서 증명된다.

# 직관

방정식 $x'=f(t,x)$ 에서 $f$ 가 $x$ 에 대해 $\vert f(t,x)-f(t,y)\vert\le K\vert x-y\vert$ 를 만족한다고 하자. 이런 $f$ 를 상수 $K$ 의 [Lipschitz 사상](lipschitz-maps.md)이라 한다. 초깃값만 다른 두 해 $x$, $y$ 가 시각 $t_0$ 에서 $x_0$, $y_0$ 에서 출발한다. 초깃값을 조금 바꾸면 해가 얼마나 바뀌는지 알고 싶다.

두 해를 적분방정식으로 쓰고 빼면 차이 $u(t)=\vert x(t)-y(t)\vert$ 가 다음을 만족한다.

$$
u(t)\le \vert x_0-y_0\vert+K\int_{t_0}^{t}u(s)\thinspace ds
$$

우변에 $u$ 가 다시 들어 있어서 이 식만으로는 $u$ 의 상한이 나오지 않는다. 우변 전체를 $v(t)$ 로 두면 $v'(t)=Ku(t)\le Kv(t)$ 이다. 그러면 $e^{-Kt}v(t)$ 를 미분한 값이 $0$ 이하이므로 이 함수는 감소하고, $v(t)\le v(t_0)e^{K(t-t_0)}$ 이다. $u\le v$ 이므로 다음이 나온다.

$$
\vert x(t)-y(t)\vert\le \vert x_0-y_0\vert\thinspace e^{K(t-t_0)}
$$

초깃값의 차이는 시간에 대해 많아야 지수적으로 커진다. 초깃값이 같으면 우변이 $0$ 이므로 두 해는 같다.

# 정의

구간 $[t_0,T]$ 에서 $u$ 가 연속이고 $\beta$ 가 연속이며 $\beta\ge 0$ 이라 하자.

**적분형.** $\alpha$ 가 상수이고 모든 $t\in[t_0,T]$ 에서

$$
u(t)\le \alpha+\int_{t_0}^{t}\beta(s)u(s)\thinspace ds
$$

이면 모든 $t\in[t_0,T]$ 에서 다음이 성립한다.

$$
u(t)\le \alpha\exp\Bigl(\int_{t_0}^{t}\beta(s)\thinspace ds\Bigr)
$$

**미분형.** $u$ 가 미분가능하고 $u'(t)\le\beta(t)u(t)$ 이면, 이번에는 $\beta$ 의 부호와 상관없이

$$
u(t)\le u(t_0)\exp\Bigl(\int_{t_0}^{t}\beta(s)\thinspace ds\Bigr)
$$

이다. 적분형은 Bellman 이 1943 년에 이 꼴로 정리했고 **Grönwall–Bellman 부등식(Grönwall–Bellman inequality)** 이라고도 부른다.[^1]

# 성질

## 적분형의 증명

$B(t)=\int_{t_0}^{t}\beta(s)\thinspace ds$ 와 $v(t)=\alpha+\int_{t_0}^{t}\beta(s)u(s)\thinspace ds$ 로 둔다. 가정은 $u\le v$ 이고, $\beta\ge 0$ 이므로 $v'=\beta u\le\beta v$ 이다. 따라서

$$
\bigl(e^{-B(t)}v(t)\bigr)'=e^{-B(t)}\bigl(v'(t)-\beta(t)v(t)\bigr)\le 0
$$

이고 $e^{-B(t)}v(t)\le v(t_0)=\alpha$ 이다. $u\le v\le\alpha e^{B(t)}$ 가 나온다.

$\beta\ge 0$ 은 $v'=\beta u\le\beta v$ 를 얻는 단계에서 쓴다. $\beta$ 가 음수인 곳에서는 $u\le v$ 로부터 $\beta u\le\beta v$ 가 나오지 않는다.

## 미분형의 증명

$\bigl(e^{-B(t)}u(t)\bigr)'=e^{-B(t)}\bigl(u'(t)-\beta(t)u(t)\bigr)\le 0$ 이므로 $e^{-B(t)}u(t)\le u(t_0)$ 이다. 이 계산은 $u$ 자신의 미분을 쓰므로 $\beta$ 의 부호가 필요 없다.

## 상수가 아닌 α

$\alpha$ 가 $t$ 의 연속함수일 때, $u(t)\le\alpha(t)+\int_{t_0}^{t}\beta(s)u(s)\thinspace ds$ 이면

$$
u(t)\le\alpha(t)+\int_{t_0}^{t}\alpha(s)\beta(s)\exp\Bigl(\int_{s}^{t}\beta(r)\thinspace dr\Bigr)ds
$$

이다. 증명은 $w(t)=\int_{t_0}^{t}\beta(s)u(s)\thinspace ds$ 에 대해 $w'\le\beta\alpha+\beta w$ 를 얻고 $e^{-B}$ 를 곱해 적분하는 것이다. $\alpha$ 가 감소하지 않으면 우변이 $\alpha(t)e^{B(t)}$ 이하가 되어 상수의 경우와 같은 꼴이 된다.

## 이산판

수열 $u_n\ge 0$, $\beta_k\ge 0$, 상수 $\alpha\ge 0$ 에 대해

$$
u_n\le\alpha+\sum_{k=0}^{n-1}\beta_k u_k\quad(n\ge 0)
$$

이면 $u_n\le\alpha\prod_{k=0}^{n-1}(1+\beta_k)\le\alpha\exp\bigl(\sum_{k=0}^{n-1}\beta_k\bigr)$ 이다. 우변을 $v_n$ 으로 두면 $v_{n+1}=v_n+\beta_n u_n\le(1+\beta_n)v_n$ 이므로 귀납법으로 나온다. 마지막 부등식은 $1+x\le e^x$ 이다.

# 활용

- **유일성과 연속의존성.** Lipschitz 조건 아래 같은 방정식의 두 해는 $\vert x(t)-y(t)\vert\le\vert x_0-y_0\vert e^{K\vert t-t_0\vert}$ 를 만족한다. 직관 절의 계산이고, 상미분방정식의 Picard–Lindelöf 정리(Picard–Lindelöf theorem)의 유일성 부분을 [축약사상 고정점 정리](banach-fixed-point.md) 없이 증명한다. $f$ 가 Lipschitz 가 아니면 이 계산이 성립하지 않고, [Peano 존재정리](peano-existence-theorem.md)의 해는 유일하지 않을 수 있다.
- **해의 전역 존재.** $\vert f(t,x)\vert\le a+b\vert x\vert$ 이면 $\vert x(t)\vert\le\vert x_0\vert+a(t-t_0)+b\int_{t_0}^{t}\vert x(s)\vert\thinspace ds$ 이므로, 상수가 아닌 $\alpha$ 의 판본으로 $\vert x(t)\vert\le(\vert x_0\vert+aT)e^{bT}$ 를 얻는다. 해가 유한 시간에 발산하지 않으므로 해의 최대 존재구간이 $[t_0,t_0+T]$ 를 포함한다.
- **수치해법의 전역 오차.** 상미분방정식의 Euler 방법(Euler method)에서 $n$ 번째 단계의 오차 $e_n$ 은 $e_{n+1}\le(1+hK)e_n+Ch^2$ 를 만족한다. 이산판을 쓰면 $e_n\le Ch\thinspace(e^{K(t_n-t_0)}-1)/K$ 이고, 전역 오차가 $h$ 에 비례한다는 1 차 정확도가 여기서 나온다.[^2]
- **확률미분방정식.** [확률미분방정식](stochastic-differential-equations.md)의 해의 존재와 유일성 증명에서 Picard 반복(Picard iteration)의 차이의 제곱 기댓값이 적분형의 가정을 만족하고, 이 부등식으로 반복이 수렴한다.

[^1]: T. H. Gronwall, *Note on the derivatives with respect to a parameter of the solutions of a system of differential equations*, Annals of Mathematics **20** (1919), 292–296. R. Bellman, *The stability of solutions of linear differential equations*, Duke Mathematical Journal **10** (1943), 643–647.
[^2]: P. Hartman, *Ordinary Differential Equations*, 2nd ed., SIAM, 2002, 3 장 1 절(Gronwall 부등식과 연속의존성). 이산판과 Euler 방법의 오차는 E. Hairer, S. P. Nørsett, G. Wanner, *Solving Ordinary Differential Equations I*, 2nd ed., Springer, 1993, 1 장 7 절.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)

## 더 알아보기

- [Bihari 부등식](bihari-inequality.md)

#analysis #probability #computation
