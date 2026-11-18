# Schnabel 추정량

# 개요

**Schnabel 추정량(Schnabel estimator)** 은 잡아서 표시하고 놓아주기를 여러 번 되풀이한 기록으로 닫힌 집단의 크기를 어림하는 방법이다. 연못에서 사흘 동안 날마다 물고기를 잡아 표시를 세고 새로 표시해 놓아주면, 둘째 날과 셋째 날의 기록이 각각 집단 크기의 어림을 하나씩 준다.

Schnabel 추정량은 날마다의 [Lincoln–Petersen 추정량](lincoln-petersen-estimator.md)을 따로 내는 대신, 모든 날의 기록을 한 식에 모아 집단 크기 하나를 낸다.

# 직관

첫날 $20$ 마리를 잡아 모두 표시한다. 둘째 날 $20$ 마리를 잡았더니 $5$ 마리에 표시가 있고, 나머지 $15$ 마리를 새로 표시해 표시된 물고기가 $35$ 마리가 된다. 셋째 날 $20$ 마리를 잡았더니 $8$ 마리에 표시가 있다.

둘째 날만 보면 $20\cdot20/5=80$, 셋째 날만 보면 $35\cdot20/8=87.5$ 다. 두 날을 합치면, 잡은 수에 그때까지 표시된 수를 곱한 값의 합을 표시된 채 잡힌 수의 합으로 나누어 다음을 얻는다.

$$
\frac{20\cdot20+20\cdot35}{5+8}=\frac{1100}{13}\approx84.6
$$

# 정의

포획을 $t=1,\dots,T$ 번 한다. $t$ 번째 포획에서 잡은 수를 $C_t$, 그 가운데 이미 표시된 수를 $R_t$, $t$ 번째 포획 직전에 집단에 있는 표시된 개체 수를 $M_t$ 라 한다. $M_1=0$ 이고 $M\_{t+1}=M_t+C_t-R_t$ 다.

$$
\hat N=\frac{\sum_t C_tM_t}{\sum_t R_t}
$$

를 **Schnabel 추정량** 이라 한다[^1]. 직관 절에서 $(C_t,R_t,M_t)$ 는 $(20,0,0)$, $(20,5,20)$, $(20,8,35)$ 이므로 $\hat N=1100/13$ 이다. $T=2$ 이면 Lincoln–Petersen 추정량이다.

# 성질

## 근사 최대가능도

집단이 닫혀 있고 모든 개체가 같은 확률로 잡히면, $t$ 번째 포획에서 표시된 수 $R_t$ 는 근사적으로 시행 $C_t$ 번, 성공 확률 $M_t/N$ 의 [이항분포](binomial-distribution.md)를 따른다. 로그가능도

$$
\ell(N)=\sum_t\Bigl(R_t\log\frac{M_t}{N}+(C_t-R_t)\log\Bigl(1-\frac{M_t}{N}\Bigr)\Bigr)
$$

를 $N$ 으로 미분해 $0$ 으로 두면 $\sum_t R_t=\sum_t (C_t-R_t)M_t/(N-M_t)$ 이다. 오른쪽의 $R_t$ 를 기댓값 $C_tM_t/N$ 으로 바꾸면 $(C_t-R_t)/(N-M_t)=C_t/N$ 이 되어 오른쪽이 $\sum_t C_tM_t/N$ 이 되고, 이 식을 풀면 Schnabel 추정량이 나온다.

## 날마다의 추정과의 관계

$t$ 번째 포획만으로 낸 추정 $\hat N_t=C_tM_t/R_t$ 를 무게 $R_t$ 로 평균하면

$$
\frac{\sum_t R_t\hat N_t}{\sum_t R_t}=\frac{\sum_t C_tM_t}{\sum_t R_t}
$$

이다. 표시된 개체가 많이 다시 잡힌 날의 추정이 더 큰 무게를 받는다. 직관 절에서 $80$ 과 $87.5$ 를 무게 $5$, $8$ 로 평균하면 $84.6$ 이다.

## 가정 점검

$R_t/C_t$ 를 $M_t$ 에 대해 그리면 가정 아래 기울기 $1/N$ 인 원점을 지나는 직선 근처에 놓인다. 점들이 직선에서 체계적으로 벗어나면 집단이 열려 있거나 잡히는 확률이 개체마다 다르다는 신호다.

# 활용

- 어류와 소형 포유류의 개체 수 조사. 한 철 동안 여러 번 포획하는 조사의 기본 추정량이다.
- 개방 집단 모형의 출발점. 개체가 들고 나는 집단에서는 [Jolly–Seber 모형](jolly-seber-model.md)이 같은 기록으로 생존율과 유입을 함께 추정한다.

[^1]: Z. E. Schnabel, "The estimation of the total fish population of a lake", *American Mathematical Monthly* 45 (1938), 348–352.

# 연관 문서

## 선수지식

- [Lincoln–Petersen 추정량](lincoln-petersen-estimator.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
