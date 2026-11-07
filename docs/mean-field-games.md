# 평균장 게임

# 개요

**평균장 게임(mean field game)** 은 똑같은 참가자가 아주 많아서 각자는 전체의 분포만 보고 행동을 고르는 게임의 균형이다. 해수욕객 수천 명이 두 해변 가운데 하나를 고를 때, 각자는 가까운 해변을 좋아하지만 사람이 많은 해변을 싫어하고, 한 사람의 선택은 붐비는 정도를 거의 바꾸지 않는다. 각자가 붐비는 정도를 보고 고른 결과가 다시 그 붐비는 정도가 되어야 균형이다. 평균장 게임은 한 사람의 최적화를 [Hamilton–Jacobi–Bellman 방정식](hamilton-jacobi-bellman.md)으로, 사람들의 분포의 변화를 [Fokker–Planck 방정식](fokker-planck.md)으로 적고, 두 방정식을 함께 풀어 균형을 찾는다.

# 직관

해변 $A$ 와 $B$ 가 있고 해변 $A$ 로 가는 사람의 비율을 $x$ 라 한다. 해변 $A$ 를 고른 사람의 비용은 이동 비용 $c_A$ 에 붐빔 $x$ 를 더한 $c_A+x$ 이고, 해변 $B$ 는 $c_B+(1-x)$ 다. 한 사람이 해변을 바꿔도 $x$ 는 거의 그대로이므로 각자는 $x$ 를 주어진 수로 보고 비용이 작은 쪽을 고른다.

두 해변에 모두 사람이 있으려면 두 비용이 같아야 하므로 $c_A+x=c_B+1-x$, 곧 $x=\frac12(1+c_B-c_A)$ 다. $c_A=0$, $c_B=\frac12$ 이면 $x=\frac34$ 이다. 이 $x$ 에서는 누구도 해변을 바꿀 이유가 없고, 각자가 고른 결과의 비율이 다시 $x$ 다.

붐빔의 비용이 비율에 대해 증가하므로 균형이 하나뿐이다. $x$ 가 균형값보다 크면 해변 $A$ 가 더 비싸져 사람이 $B$ 로 옮기고, 작으면 반대로 옮긴다. 시간에 따라 움직이는 참가자에서는 해변의 선택이 매 순간의 속도 선택이 되고, 비율 $x$ 가 시간에 따라 변하는 밀도가 된다.

# 정의

## 평균장 게임 연립계

각 참가자의 상태가 $dX_t=a_t\thinspace dt+\sqrt2\thinspace dB_t$ 를 따르고, 참가자는 전체의 밀도 $m_t$ 가 주어졌다고 보고

$$
\mathbb E\left\lbrack\int_0^T\left(\tfrac12\vert a_t\vert^2+F(X_t,m_t)\right)dt+G(X_T,m_T)\right\rbrack
$$

를 최소화한다. $F$ 와 $G$ 는 밀도에 의존하는 비용이다. 이 문제의 가치함수 $u$ 와 밀도 $m$ 의 연립계

$$
\begin{aligned}
-\partial_tu-\Delta u+\tfrac12\vert\nabla u\vert^2&=F(x,m)\cr
\partial_tm-\Delta m-\nabla\cdot(m\nabla u)&=0
\end{aligned}
$$

와 조건 $u(T,x)=G(x,m_T)$, $m(0)=m_0$ 을 **평균장 게임 연립계(mean field game system)** 라 한다.

첫 식은 $m$ 을 고정했을 때 한 참가자의 Hamilton–Jacobi–Bellman 방정식이고, 최적 제어는 $a=-\nabla u$ 다. 둘째 식은 모든 참가자가 $a=-\nabla u$ 를 쓸 때 밀도가 따르는 Fokker–Planck 방정식이다. 첫 식은 끝 시각에서 거꾸로, 둘째 식은 처음 시각에서 앞으로 풀린다. 직관 절의 해변은 상태가 두 점이고 시간이 없는 경우이며, $F(A,m)=c_A+m(A)$ 다.

## 단조성 조건

모든 확률측도 $m_1$, $m_2$ 에서

$$
\int\bigl(F(x,m_1)-F(x,m_2)\bigr)\thinspace d(m_1-m_2)(x)\ge 0
$$

이면 $F$ 가 **Lasry–Lions 단조성 조건(Lasry–Lions monotonicity condition)** 을 만족한다고 한다. 붐비는 자리일수록 비용이 큰 경우다. 해변 예에서 $F(A,m)-F(B,m)$ 이 $m(A)$ 에 대해 증가하므로 조건이 성립한다.

# 성질

## 유일성

$F$ 와 $G$ 가 단조성 조건을 만족하면 평균장 게임 연립계의 해는 많아야 하나다.[^1]

증명의 요지. 두 해 $(u_1,m_1)$, $(u_2,m_2)$ 의 차를 놓고, 첫 식의 차에 $m_1-m_2$ 를, 둘째 식의 차에 $u_1-u_2$ 를 곱해 시공간에서 적분한다. 부분적분으로 시간 미분 항이 끝 시각의 $G$ 항과 처음 시각의 $0$ 으로 바뀌고

$$
\int_0^T\negthinspace\int\tfrac12(m_1+m_2)\vert\nabla u_1-\nabla u_2\vert^2\thinspace dx\thinspace dt+(\text{단조성 항})\le 0
$$

이 나온다. 모든 항이 $0$ 이상이므로 $m_1+m_2\gt 0$ 인 곳에서 $\nabla u_1=\nabla u_2$ 이고, 그러면 두 밀도가 같은 Fokker–Planck 방정식을 풀어 $m_1=m_2$, $u_1=u_2$ 다.

## 존재

$F$ 와 $G$ 가 밀도에 대해 연속이고 공간 변수로 매끄럽게 하는 성질을 가지면 해가 있다.[^1] 밀도의 경로 $m$ 에서 Hamilton–Jacobi–Bellman 방정식을 풀어 $u$ 를 얻고, 그 $u$ 로 Fokker–Planck 방정식을 풀어 새 경로 $\Phi(m)$ 을 얻는 사상의 고정점을 [Schauder 고정점 정리](schauder-fixed-point.md)로 잡는다. 고정점이 균형이다.

## N 명 게임과의 관계

참가자가 $N$ 명인 확률 미분 게임의 [Nash 균형](nash-equilibrium.md)에서 각자는 다른 $N-1$ 명의 경험분포를 본다. 단조성 조건 아래에서 $N\to\infty$ 이면 그 균형의 가치함수가 평균장 게임의 해로 수렴한다.[^2] 평균장 게임은 이 극한의 균형이고, $N$ 이 클 때 그 해의 되먹임 제어 $-\nabla u$ 를 쓰면 $N$ 명 게임의 근사 균형이 된다.

# 활용

- 군중 이동. 출구를 향해 움직이는 사람들이 붐비는 곳을 피하는 비용 $F(x,m)=m(x)$ 를 두면 밀도와 경로가 연립계에서 함께 정해진다.
- 경제 모형. 같은 꼴의 가계가 저축과 소비를 고르는 모형에서 가계의 자산 분포가 이자율을 정하고, 이자율이 다시 가계의 선택을 정한다. 분포와 선택의 고정점이 평균장 게임 연립계다.
- [최적 수송](optimal-transport.md). 확산 항이 없고 $F=0$ 이며 끝 조건 대신 끝 밀도를 정하면, 연립계는 운동 에너지를 최소화하며 $m_0$ 을 $m_T$ 로 옮기는 동적 최적 수송의 최적성 조건이 된다.

[^1]: Jean-Michel Lasry, Pierre-Louis Lions, "Mean field games", *Japanese Journal of Mathematics* **2** (2007), 229–260. Minyi Huang, Roland P. Malhamé, Peter E. Caines, "Large population stochastic dynamic games: closed-loop McKean–Vlasov systems and the Nash certainty equivalence principle", *Communications in Information and Systems* **6** (2006), 221–252 가 같은 연립계를 독립으로 얻었다.
[^2]: Pierre Cardaliaguet, François Delarue, Jean-Michel Lasry, Pierre-Louis Lions, *The Master Equation and the Convergence Problem in Mean Field Games*, Annals of Mathematics Studies 201, Princeton University Press, 2019.

# 연관 문서

## 선수지식

- [Hamilton–Jacobi–Bellman 방정식](hamilton-jacobi-bellman.md)
- [Fokker–Planck 방정식](fokker-planck.md)
- [Nash 균형](nash-equilibrium.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #optimization
