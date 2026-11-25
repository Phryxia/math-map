# 입력 대 상태 안정성

# 개요

**입력 대 상태 안정성(input-to-state stability, ISS)** 은 입력이 없을 때 원점으로 돌아오는 비선형 계가, 크기가 유계인 입력을 받으면 상태도 입력 크기에 따라 정해지는 범위 안에 머문다는 성질이다. 계 $\dot x=-x+xu$ 는 $u=0$ 이면 $x(t)=e^{-t}x\_0$ 으로 원점에 가지만, 일정한 입력 $u=2$ 를 넣으면 $\dot x=x$ 가 되어 $x(t)=e^{t}x\_0$ 으로 커진다.

입력 대 상태 안정성은 이런 계를 걸러내는 조건이다. 상태의 상한을 초기 상태가 사라지는 항과 입력 크기의 함수로 된 항의 합으로 적고, 그런 상한이 있는지를 Lyapunov 함수 하나로 판정한다.

# 직관

계 $\dot x=-x+u$ 의 해는 다음과 같다.

$$
x(t)=e^{-t}x\_0+\int\_0^te^{-(t-s)}u(s)\thinspace ds
$$

입력의 크기가 $\vert u(s)\vert\le r$ 이면 적분항은 $r(1-e^{-t})\le r$ 이하이므로 $\vert x(t)\vert\le e^{-t}\vert x\_0\vert+r$ 이다. 초기 상태는 지수적으로 잊히고, 남는 상태는 입력 크기 $r$ 을 넘지 않는다.

개요의 $\dot x=-x+xu$ 에서는 입력이 상태에 곱해져 들어오므로 입력이 $1$ 보다 크면 감쇠 $-x$ 를 이긴다. 입력을 받는 계의 안정성은 입력이 없을 때의 안정성만으로 판정되지 않는다.

계 $\dot x=-x^3+u$ 는 선형이 아니지만 위와 같은 상한을 갖는다. $V=x^2/2$ 로 두면 $\dot V=-x^4+xu$ 이고, $\vert x\vert\ge(2\vert u\vert)^{1/3}$ 이면 $xu\le x^4/2$ 이므로 $\dot V\le-x^4/2\lt 0$ 이다. 상태가 입력 크기의 세제곱근 규모보다 크면 $V$ 가 줄어드므로, 상태는 결국 $(2r)^{1/3}$ 근처 안에 머문다.

# 정의

## 비교 함수

연속이고 순증가하며 $\alpha(0)=0$ 인 $\alpha:\lbrack 0,\infty)\to\lbrack 0,\infty)$ 를 $\mathcal K$ 함수라 하고, 그 가운데 $r\to\infty$ 에서 $\alpha(r)\to\infty$ 인 것을 $\mathcal K\_\infty$ 함수라 한다. $\beta(r,t)$ 가 $t$ 를 고정하면 $\mathcal K$ 함수이고 $r$ 을 고정하면 $t\to\infty$ 에서 $0$ 으로 줄어드는 감소 함수이면 $\mathcal{KL}$ 함수라 한다. 직관 절의 $e^{-t}r$ 은 $\mathcal{KL}$ 함수이고, $r$ 과 $(2r)^{1/3}$ 은 $\mathcal K\_\infty$ 함수다.

## 입력 대 상태 안정성

$f(0,0)=0$ 인 계 $\dot x=f(x,u)$ 가 다음을 만족하는 $\mathcal{KL}$ 함수 $\beta$ 와 $\mathcal K$ 함수 $\gamma$ 를 가지면 **입력 대 상태 안정(input-to-state stable)** 이라 한다[^1].

$$
\vert x(t)\vert\le\beta(\vert x\_0\vert,t)+\gamma\Bigl(\sup\_{0\le s\le t}\vert u(s)\vert\Bigr)\qquad(\text{모든 }x\_0,\thinspace u,\thinspace t\ge 0)
$$

$\gamma$ 를 이 계의 이득이라 한다. 직관 절의 $\dot x=-x+u$ 는 $\beta(r,t)=e^{-t}r$, $\gamma(r)=r$ 로 입력 대 상태 안정하다. $u=0$ 이면 이 식은 원점이 대역 점근 안정이라는 것이다.

## ISS Lyapunov 함수

$\mathcal K\_\infty$ 함수 $\alpha\_1,\alpha\_2,\alpha\_3$ 과 $\mathcal K$ 함수 $\chi$ 에 대해 매끄러운 함수 $V$ 가 다음 두 조건을 만족하면 **ISS Lyapunov 함수(ISS-Lyapunov function)** 라 한다.

$$
\alpha\_1(\vert x\vert)\le V(x)\le\alpha\_2(\vert x\vert),\qquad\vert x\vert\ge\chi(\vert u\vert)\implies\nabla V(x)\cdot f(x,u)\le-\alpha\_3(\vert x\vert)
$$

직관 절의 $\dot x=-x^3+u$ 에서 $V=x^2/2$ 는 $\chi(r)=(2r)^{1/3}$, $\alpha\_3(r)=r^4/2$ 인 ISS Lyapunov 함수다.

# 성질

## Lyapunov 판정

**정리(Sontag–Wang, 1995).** 계가 입력 대 상태 안정인 것과 ISS Lyapunov 함수를 갖는 것은 동치다[^2].

ISS Lyapunov 함수가 있으면, 상태가 $\chi(\Vert u\Vert\_\infty)$ 보다 큰 동안 $V$ 가 줄어들어 [Lyapunov 안정성](lyapunov-stability.md)의 직접법과 같은 계산으로 $\beta$ 가 나오고, 상태가 그보다 작은 집합에 들어가면 $V$ 의 준위 집합에 갇혀 $\gamma=\alpha\_1^{-1}\circ\alpha\_2\circ\chi$ 가 나온다. 역방향은 [역 Lyapunov 정리](converse-lyapunov-theorems.md)의 판본으로 증명된다.

## 선형계

$\dot x=Ax+Bu$ 가 입력 대 상태 안정인 것과 $A$ 의 고윳값의 실수부가 모두 음수인 것은 동치다. 해의 공식에서 $\beta(r,t)=\Vert e^{At}\Vert r$, $\gamma(r)=r\Vert B\Vert\int\_0^\infty\Vert e^{As}\Vert\thinspace ds$ 를 읽는다. 선형계에서는 입력이 없을 때의 점근 안정성과 입력 대 상태 안정성이 같고, 개요의 $\dot x=-x+xu$ 는 입력이 상태에 곱해지는 비선형 항 때문에 둘이 갈린다.

## 직렬 연결

$\dot x\_1=f\_1(x\_1,x\_2)$ 가 $x\_2$ 를 입력으로 입력 대 상태 안정이고 $\dot x\_2=f\_2(x\_2,u)$ 가 입력 대 상태 안정이면, 둘을 이은 계는 $u$ 를 입력으로 입력 대 상태 안정이다. 둘째 계의 상태가 유계이고 결국 $\gamma\_2(\Vert u\Vert\_\infty)$ 안에 들어가므로, 첫째 계의 상한에 그 값을 넣으면 된다[^1].

## 비선형 작은 이득 정리

**정리(Jiang–Teel–Praly, 1994).** $\dot x\_1=f\_1(x\_1,x\_2)$ 와 $\dot x\_2=f\_2(x\_2,x\_1)$ 가 각각 상대의 상태를 입력으로 이득 $\gamma\_1$, $\gamma\_2$ 를 갖고 입력 대 상태 안정이라 하자. 모든 $r\gt 0$ 에서 $\gamma\_1(\gamma\_2(r))\lt r$ 이면 되먹임으로 이은 계의 원점은 대역 점근 안정이다[^3].

이득이 선형 $\gamma\_i(r)=g\_ir$ 이면 조건은 $g\_1g\_2\lt 1$ 이고, [작은 이득 정리](small-gain-theorem.md)의 조건과 같은 꼴이다. 작은 이득 정리가 신호의 에너지로 이득을 재는 데 비해, 이 판본은 상태의 최댓값으로 재고 비선형 이득 함수를 허용한다.

# 활용

- 비선형 제어 설계. [역진 설계](backstepping.md)로 만든 제어기에 외란이 들어올 때, 닫힌 계가 외란을 입력으로 입력 대 상태 안정이 되도록 설계해 외란의 크기에 비례하는 상태의 상한을 보장한다.
- 관측기와 되먹임의 결합. 관측 오차를 입력으로 보는 계가 입력 대 상태 안정이면, 오차가 $0$ 으로 가는 관측기와 이어도 닫힌 계가 안정하다는 것이 직렬 연결 절에서 나온다.
- 망으로 이은 계. 여러 부분계가 서로의 상태를 입력으로 받는 큰 계에서, 각 부분계의 이득을 이어 붙인 고리마다 작은 이득 조건을 확인해 전체의 안정성을 판정한다.

[^1]: E. D. Sontag, "Smooth stabilization implies coprime factorization", *IEEE Transactions on Automatic Control* 34 (1989), 435–443.
[^2]: E. D. Sontag, Y. Wang, "On characterizations of the input-to-state stability property", *Systems & Control Letters* 24 (1995), 351–359.
[^3]: Z.-P. Jiang, A. R. Teel, L. Praly, "Small-gain theorem for ISS systems and applications", *Mathematics of Control, Signals, and Systems* 7 (1994), 95–120.

# 연관 문서

## 선수지식

- [작은 이득 정리](small-gain-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis
