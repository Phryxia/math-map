# Lions–Stampacchia 정리

# 개요

**Lions–Stampacchia 정리(Lions–Stampacchia theorem)** 는 [Lax–Milgram 정리](lax-milgram.md)의 방정식을 닫힌 볼록집합 위의 부등식으로 바꾸어도 해가 하나 있다는 정리다. 평면에서 원점에 가장 가까우면서 직선 $x_1=1$ 의 오른쪽에 있는 점을 찾으면, 답 $(1,0)$ 에서 거리의 기울기는 $0$ 이 아니고 허용 영역 안쪽을 가리킨다. 제약이 있는 최소화의 답은 방정식 대신 "허용된 모든 방향으로 값이 줄지 않는다" 는 부등식을 만족한다. Lions–Stampacchia 정리는 이 부등식을 Hilbert 공간의 쌍선형형식으로 적고, 대칭이 아닌 경우까지 해의 존재와 유일성을 증명한다.

# 직관

$\mathbb R^2$ 에서 $J(v)=\frac12\vert v\vert^2-f\cdot v$ 를 $f=(0,1)$ 로 두고 최소화한다. 제약이 없으면 기울기 $v-f$ 가 $0$ 인 $v=f=(0,1)$ 이 답이다. 제약 $K=\lbrace v:v_1\ge 1\rbrace$ 을 두면 $(0,1)$ 은 $K$ 밖이므로 쓸 수 없다.

$J(v)=\frac12\vert v-f\vert^2-\frac12\vert f\vert^2$ 이므로 $J$ 의 최소점은 $K$ 에서 $f$ 에 가장 가까운 점 $u=(1,1)$ 이다. 그 점의 기울기 $u-f=(1,0)$ 은 $0$ 이 아니다. 대신 $K$ 의 모든 점 $v$ 에서 $(u-f)\cdot(v-u)=v_1-1\ge 0$ 이므로, $u$ 에서 $K$ 안의 어느 방향으로 움직여도 $J$ 가 1차에서 줄지 않는다.

$J$ 의 기울기 $v-f$ 를 일반적인 [선형사상](linear-maps.md) $Av-f$ 로 바꾸면, $A$ 가 대칭이 아닐 때는 그 기울기를 갖는 함수 $J$ 가 없다. 그래도 조건 $(Au-f)\cdot(v-u)\ge 0$ 은 뜻이 있다. 이 조건을 만족하는 $u$ 를 찾는 문제가 변분 부등식이다.

# 정의

## 변분 부등식

$H$ 가 실 Hilbert 공간, $K\subset H$ 가 비어 있지 않은 닫힌 볼록집합, $B$ 가 $H$ 위의 쌍선형형식, $f\in H^\ast$ 라 하자. 모든 $v\in K$ 에서

$$
B(u,v-u)\ge f(v-u)
$$

인 $u\in K$ 를 찾는 문제를 **변분 부등식(variational inequality)** 이라 한다. 직관 절은 $H=\mathbb R^2$, $B(u,v)=u\cdot v$, $f(v)=(0,1)\cdot v$, $K=\lbrace v_1\ge 1\rbrace$ 이고 해는 $u=(1,1)$ 이다. $K=H$ 이면 $v-u$ 가 모든 벡터를 지나므로 부등식이 등식 $B(u,w)=f(w)$ 가 된다.

## 사영

[Hilbert 공간](hilbert-spaces.md) $H$ 의 닫힌 볼록집합 $K$ 와 $x\in H$ 에 대해 $\Vert x-z\Vert$ 를 가장 작게 하는 $z\in K$ 는 하나뿐이고, 그것을 $P_Kx$ 로 쓴다. 직관 절의 $K$ 에서 $P_K(0,1)=(1,1)$ 이다. $z=P_Kx$ 인 것과 모든 $v\in K$ 에서 $\langle x-z,v-z\rangle\le 0$ 인 것이 동치다.

# 성질

## Lions–Stampacchia 정리

정리. $B$ 가 유계이고 강제이면, 각 $f\in H^\ast$ 에 대해 변분 부등식의 해 $u\in K$ 가 하나뿐이다.[^1] $f$ 를 $f'$ 로 바꾼 해를 $u'$ 라 하면 $\Vert u-u'\Vert\le\alpha^{-1}\Vert f-f'\Vert\_{H^\ast}$ 다.

증명의 요지. $B(u,v)=\langle Au,v\rangle$, $f(v)=\langle w,v\rangle$ 로 쓴다. 사영의 부등식 특성에서, $u$ 가 해인 것과 어떤 $\rho\gt 0$ 에서 $u=P_K\bigl(u-\rho(Au-w)\bigr)$ 인 것이 동치다. $T(u)=P_K\bigl(u-\rho(Au-w)\bigr)$ 로 두면 $P_K$ 가 거리를 늘리지 않으므로

$$
\Vert Tu-Tv\Vert^2\le(1-2\rho\alpha+\rho^2\beta^2)\Vert u-v\Vert^2
$$

이다. $0\lt \rho\lt 2\alpha/\beta^2$ 에서 $T$ 는 축약사상이고, [축약사상 고정점 정리](banach-fixed-point.md)가 고정점 하나를 준다.

## 대칭인 경우의 최소화

$B$ 가 대칭이면 변분 부등식의 해는 $J(v)=\frac12B(v,v)-f(v)$ 의 $K$ 위의 유일한 최소점이다.[^2] $J(u+t(v-u))$ 가 $t\in\lbrack 0,1\rbrack$ 에서 $t=0$ 일 때 가장 작다는 조건의 $t=0$ 에서의 오른쪽 미분이 변분 부등식이다. $B$ 를 내적으로 보면 해는 그 내적에 대한 $K$ 위의 사영이다.

## Lax–Milgram 정리와의 관계

$K=H$ 이면 변분 부등식이 약한 꼴 방정식이 되므로 Lax–Milgram 정리가 이 정리의 특수한 경우다. $K$ 가 닫힌 부분공간이면 부등식을 $v-u$ 와 $u-v$ 에 함께 써서 $K$ 위의 방정식이 나온다.

# 활용

- [장애물 문제](obstacle-problem.md). $H=H^1\_0(\Omega)$, $B(u,v)=\int\nabla u\cdot\nabla v$, $K=\lbrace u\ge\psi\rbrace$ 인 경우다. 대칭이 아닌 $B$, 곧 1계 항이 있는 타원형 연산자의 장애물 문제도 이 정리로 풀린다.
- 접촉 문제. 탄성체가 강체 벽을 뚫지 못한다는 조건을 변위의 볼록 제약으로 적은 [Signorini 문제](signorini-problem.md)는 변위가 닫힌 볼록집합에 있는 변분 부등식이다.
- [선형 상보성 문제](linear-complementarity.md). $H=\mathbb R^n$, $K=\lbrace x\ge 0\rbrace$ 이면 변분 부등식은 $x\ge 0$, $Mx-q\ge 0$, $x\cdot(Mx-q)=0$ 이 된다. $M$ 이 양의 정부호이면 이 정리가 해의 존재와 유일성을 준다.
- [미국형 옵션](american-options.md). 가격함수가 만족하는 시간 의존 변분 부등식을 시간에 대해 이산화하면 각 단계가 이 정리의 꼴이다.

[^1]: J.-L. Lions, G. Stampacchia, "Variational inequalities", *Communications on Pure and Applied Mathematics* **20** (1967), 493–519.
[^2]: David Kinderlehrer, Guido Stampacchia, *An Introduction to Variational Inequalities and Their Applications*, Academic Press, 1980, 2 장. 사영, 변분 부등식의 존재와 유일성, 장애물 문제와 접촉 문제를 다룬다.

# 연관 문서

## 선수지식

- [Lax–Milgram 정리](lax-milgram.md)

## 더 알아보기

- [Signorini 문제](signorini-problem.md)

#functional_analysis #analysis #optimization
