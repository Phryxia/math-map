# 접촉 과정

# 개요

**접촉 과정(contact process)** 은 격자나 그래프의 각 점이 감염과 회복을 되풀이하며, 감염된 점이 이웃을 일정한 비율로 감염시키는 연속시간 Markov 과정이다. 독감처럼 나은 사람이 다시 걸릴 수 있는 병이 한 줄로 늘어선 마을에 퍼질 때, 감염력이 얼마 이상이어야 병이 영원히 남을 수 있는지가 이 과정의 물음이다.

이 과정은 감염력 $\lambda$ 에 문턱 $\lambda_c$ 가 있어서, 그보다 작으면 병이 반드시 사라지고 크면 양의 확률로 살아남는다는 것을 보인다.

# 직관

두 사람 $a, b$ 가 서로 이웃이다. 감염된 사람은 비율 $1$ 로 낫고, 비율 $\lambda$ 로 건강한 이웃을 감염시킨다. 한 사람만 감염된 상태에서 병이 사라질 때까지의 평균 시간을 $T_1$, 둘 다 감염된 상태에서의 평균 시간을 $T_2$ 라 한다.

한 사람만 감염된 상태는 평균 $1/(1+\lambda)$ 동안 머물고, 확률 $1/(1+\lambda)$ 로 병이 사라지고 확률 $\lambda/(1+\lambda)$ 로 둘 다 감염된다. 둘 다 감염된 상태는 비율 $2$ 로 한 사람이 나으므로 평균 $1/2$ 뒤에 한 사람 감염 상태로 간다.

$$
T_1=\frac{1}{1+\lambda}+\frac{\lambda}{1+\lambda}T_2,\qquad T_2=\frac12+T_1
$$

두 식을 풀면 $T_1=1+\lambda/2$ 다. $\lambda=2$ 이면 $T_1=2$, $T_2=5/2$ 이다. 점이 유한 개이면 모두 건강한 상태에서 빠져나올 수 없으므로 병은 언젠가 반드시 사라지고, 사라지는 데 걸리는 시간만 $\lambda$ 에 따라 달라진다. 점이 무한히 많은 $\mathbb Z$ 에서는 병이 영원히 남을 수 있다.

# 정의

$G$ 는 차수가 유계인 그래프이고 $\lambda\gt 0$ 이다. 감염된 점의 집합 $\xi\_t\subseteq V(G)$ 가 다음 비율로 바뀌는 Markov 과정을 **접촉 과정** 이라 한다[^1].

- $x\in\xi\_t$ 는 비율 $1$ 로 $\xi\_t$ 에서 빠진다.
- $x\notin\xi\_t$ 는 비율 $\lambda\cdot\char35{}\lbrace y\in\xi\_t: y\sim x\rbrace$ 로 $\xi\_t$ 에 들어간다.

$\xi\_0=A$ 로 시작한 과정을 $\xi^A\_t$ 라 한다. 직관 절의 두 사람은 정점 둘과 간선 하나의 그래프다.

과정이 **살아남는다(survives)** 는 것은 모든 $t$ 에서 $\xi^{\lbrace 0\rbrace}\_t\ne\varnothing$ 일 확률이 양수인 것이다. **임계값(critical value)** 은 다음 값이다.

$$
\lambda_c=\inf\lbrace\lambda: \xi^{\lbrace 0\rbrace}\_t\text{ 가 양의 확률로 살아남는다}\rbrace
$$

# 성질

## 그림 표현

점마다 비율 $1$ 의 [Poisson 과정](poisson-process.md)으로 회복 시각을, 방향 있는 간선마다 비율 $\lambda$ 의 Poisson 과정으로 감염 시각을 뽑으면 모든 처음 집합 $A$ 의 과정이 한 확률공간에서 함께 만들어진다. Harris 가 도입한 이 구성에서 $A\subseteq B$ 이면 모든 $t$ 에서 $\xi^A\_t\subseteq\xi^B\_t$ 이고, $\lambda$ 를 키우면 감염 시각이 늘어 감염 집합이 커진다[^2]. 그러므로 살아남을 확률은 $\lambda$ 에 대해 증가하고 $\lambda_c$ 가 잘 정의된다.

## 자기 쌍대성

그림 표현에서 시간을 거꾸로 읽으면 같은 법칙의 과정이 나온다. 그래서 유한 집합 $A, B$ 에 대해 $P(\xi^A\_t\cap B\ne\varnothing)=P(\xi^B\_t\cap A\ne\varnothing)$ 이다[^1].

## 임계값의 범위

$\mathbb Z^d$ 에서 $1/(2d)\le\lambda_c\lt\infty$ 이다. 하한은 감염자 한 명이 비율 $1$ 로 죽고 비율 $2d\lambda$ 이하로 자식을 낳으므로, 감염자 수가 평균 자식 수 $2d\lambda$ 인 [분지과정](branching-processes.md)에 눌려 $2d\lambda\le 1$ 이면 소멸하는 데서 나온다. 상한은 Harris 가 증명했다[^2]. $d=1$ 에서는 Holley 와 Liggett 가 $\lambda_c\le 2$ 를 증명했다[^3].

## 임계점에서의 소멸

$\lambda=\lambda_c$ 이면 $\mathbb Z^d$ 의 접촉 과정은 확률 $1$ 로 소멸한다[^4]. 그러므로 살아남을 확률은 $\lambda_c$ 에서 연속이다.

## 나무 위의 두 임계값

정칙 나무에서는 살아남는 것과, 원점이 무한히 여러 번 다시 감염되는 것의 문턱이 다르다. 두 문턱 $\lambda_1\lt\lambda_2$ 사이에서는 병이 살아남지만 결국 원점에서 멀리 떠나 원점 근처에서는 사라진다[^5].

# 활용

- 감염병 모형. 나은 사람이 다시 걸리는 병의 SIS 모형(susceptible-infected-susceptible model)을 격자나 [네트워크](network-epidemics.md) 위에 놓은 것이 접촉 과정이고, $\lambda_c$ 가 유행이 끝나지 않는 문턱이다.
- 방향 있는 [침투](percolation.md). 그림 표현에서 감염이 전달되는 경로는 시간 방향으로만 이어지는 침투 경로다. 접촉 과정과 방향 있는 침투는 임계점 근처의 지수가 같은 부류로 묶인다.
- 상호작용 입자계. [단순 배제 과정](simple-exclusion-process.md)과 함께, 그림 표현과 쌍대성으로 배치 위의 Markov 과정을 다루는 방법의 첫 예다.

[^1]: T. M. Liggett, *Interacting Particle Systems*, Springer, 1985, Chapter VI.

[^2]: T. E. Harris, "Contact interactions on a lattice", *The Annals of Probability* **2** (1974), 969–988.

[^3]: R. Holley, T. M. Liggett, "The survival of contact processes", *The Annals of Probability* **6** (1978), 198–206.

[^4]: C. Bezuidenhout, G. Grimmett, "The critical contact process dies out", *The Annals of Probability* **18** (1990), 1462–1482.

[^5]: R. Pemantle, "The contact process on trees", *The Annals of Probability* **20** (1992), 2089–2116.

# 연관 문서

## 선수지식

- [연속시간 Markov 연쇄](continuous-time-markov-chains.md)
- [분지과정](branching-processes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #graph_theory
