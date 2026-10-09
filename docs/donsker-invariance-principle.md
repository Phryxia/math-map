# Donsker 불변원리

# 개요

평균이 $0$ 이고 분산이 유한한 독립 증분의 부분합을 시간은 $n$, 공간은 $\sqrt n$ 으로 줄여 꺾은선으로 이으면, 그 꺾은선의 분포가 연속함수 공간 $C\lbrack 0,1\rbrack$ 위에서 표준 Brown 운동의 분포로 약수렴한다.

[중심극한정리](central-limit-theorem.md)는 한 시각의 값이 어떤 분포로 가는지를 말하고, Donsker 불변원리는 경로 전체가 어떤 확률과정으로 가는지를 말한다. 경로의 연속 범함수인 최댓값, 적분, 체류시간의 극한분포가 이 수렴 하나에서 한꺼번에 나온다.

# 직관

독립이고 같은 분포를 따르며 평균이 $0$, 분산이 $1$ 인 걸음 $X_1,X_2,\dots$ 의 부분합을 $S_k=X_1+\dots+X_k$ 라 한다. $n$ 걸음 동안 가장 멀리 간 거리 $\max_{k\le n}S_k$ 의 분포를 알려 한다.

중심극한정리를 쓴다. 시각 $k=\lfloor nt\rfloor$ 를 고정하면 $S_k/\sqrt n$ 의 극한분포는 $N(0,t)$ 다. 시각을 여럿 고정해 $(S_{k_1},\dots,S_{k_m})/\sqrt n$ 의 결합 극한분포까지 얻을 수도 있다. 그런데 최댓값은 $n$ 개 시각의 값을 동시에 읽은 것이고 $n$ 이 커지면 읽는 시각의 개수도 늘어난다. 고정된 개수의 시각에서 분포를 알아도 최댓값의 분포는 나오지 않는다.

시각을 고정하고 분포를 재는 한 막혀 있으므로, 경로 하나를 점 하나로 보는 공간에서 분포를 잰다. $S_k$ 를 $k/n$ 에 놓고 사이를 직선으로 이으면 $\lbrack 0,1\rbrack$ 위 연속함수 $W_n$ 이 하나 나오고, $W_n$ 의 분포는 함수들의 공간 $C\lbrack 0,1\rbrack$ 위의 확률측도다. 이 공간에 두 함수의 차의 최댓값을 거리로 주고 수렴을 묻는다.

이 수렴이 성립하면 최댓값을 읽는 일은 $f\mapsto\max_{t}f(t)$ 라는 연속함수를 적용하는 일이므로 극한이 따라 넘어간다. $\max_{k\le n}S_k/\sqrt n$ 의 극한분포는 Brown 운동의 최댓값 분포이고, 반사원리로 그 분포는 $\vert N(0,1)\vert$ 와 같다. 걸음의 분포가 무엇이었는지는 답에 남지 않는다.

# 정의

$X_1,X_2,\dots$ 를 독립이고 같은 분포를 따르며 $\mathbb E\lbrack X_1\rbrack=0$, $\mathrm{Var}(X_1)=\sigma^2\in(0,\infty)$ 인 확률변수열이라 한다. $S_0=0$, $S_k=X_1+\dots+X_k$ 로 둔다.

## 스케일된 꺾은선 과정

$$
W_n(t)=\frac{1}{\sigma\sqrt n}\Big(S_{\lfloor nt\rfloor}+(nt-\lfloor nt\rfloor)X_{\lfloor nt\rfloor+1}\Big),
\qquad t\in\lbrack 0,1\rbrack
$$

각 $W_n$ 은 $C\lbrack 0,1\rbrack$ 의 원소이고, $W_n$ 의 분포는 $C\lbrack 0,1\rbrack$ 위의 확률측도다. $C\lbrack 0,1\rbrack$ 에는 균등노름 $\Vert f\Vert\_\infty=\sup_{t\in\lbrack 0,1\rbrack}\vert f(t)\vert$ 로 거리를 준다.

# 성질

## 불변원리

**정리.** $W_n$ 의 분포는 $C\lbrack 0,1\rbrack$ 위에서 표준 [Brown 운동](brownian-motion.md) $B$ 의 분포로 [약수렴](weak-convergence.md)한다.[^1]

극한이 $X_1$ 의 분포에 의존하지 않는 것이 이 정리를 불변원리라 부르는 이유다. $\pm1$ 걸음으로 계산해 둔 극한분포를 평균 $0$, 분산 유한인 아무 증분에도 쓸 수 있다.

증명의 요지는 두 단계다. 유한차원 분포의 수렴은 시각 $t_1\lt \dots\lt t_m$ 에서 증분 $W_n(t_{j+1})-W_n(t_j)$ 가 독립이므로 다변량 중심극한정리로 나온다. 남은 것은 분포족 $\lbrace W_n\rbrace$ 의 tightness 이고, 그것을 얻으면 Prokhorov 정리가 수렴 부분열을 주고 유한차원 분포가 극한을 Brown 운동으로 확정한다.

## C[0,1] 에서의 tightness 판정

[Arzelà–Ascoli 정리](arzela-ascoli.md)로 $C\lbrack 0,1\rbrack$ 의 콤팩트 집합은 균등유계이고 균등연속인 함수족의 닫힘이다. 이 서술을 확률측도로 옮기면 tightness 가 다음 두 조건과 동치가 된다.[^2]

$\lbrace W_n(0)\rbrace$ 의 분포족이 tight 하고, 모든 $\varepsilon\gt 0$ 에 대해

$$
\lim_{\delta\to0}\ \limsup_{n\to\infty}\ \mathbb P\Big(\sup_{\vert s-t\vert\lt \delta}\vert W_n(s)-W_n(t)\vert\gt \varepsilon\Big)=0
$$

이다. 첫 조건은 $W_n(0)=0$ 에서 자동이고, 둘째 조건은 부분합의 최대부등식으로 확인한다. 길이 $\delta$ 구간 안의 변동이 $\varepsilon$ 을 넘는 확률을 $\lfloor n\delta\rfloor$ 걸음의 부분합 최댓값으로 묶고, Doob 부등식으로 $\delta$ 에 대한 유계를 얻는다.

## 연속 범함수의 극한

연속사상 정리를 $\Phi:C\lbrack 0,1\rbrack\to\mathbb R$ 에 적용하면 $\Phi(W_n)$ 의 극한분포가 $\Phi(B)$ 의 분포다.

| $\Phi(f)$ | 부분합 쪽 양 | 극한분포 |
| --- | --- | --- |
| $\max_{t}f(t)$ | $\max_{k\le n}S_k/(\sigma\sqrt n)$ | $\max_{t\le1}B_t$, 곧 $\vert N(0,1)\vert$ |
| $\max_{t}\vert f(t)\vert$ | $\max_{k\le n}\vert S_k\vert/(\sigma\sqrt n)$ | $\max_{t\le1}\vert B_t\vert$ |
| $\int_0^1 f(t)\thinspace dt$ | $n^{-3/2}\sigma^{-1}\sum_{k\le n}S_k$ | $\int_0^1 B_t\thinspace dt$, 곧 $N(0,1/3)$ |
| $f(1)$ | $S_n/(\sigma\sqrt n)$ | $N(0,1)$ |

마지막 줄이 중심극한정리다. 불변원리는 그 수렴을 범함수 $f\mapsto f(1)$ 하나에서 연속 범함수 전체로 넓힌다.

## 경험과정 판본

$U_1,\dots,U_n$ 이 $\lbrack 0,1\rbrack$ 위 균등분포에서 독립으로 뽑힌 표본이고 $F_n$ 이 그 경험분포함수이면, $\sqrt n\thinspace(F_n(t)-t)$ 는 Brown 다리로 약수렴한다. 증명은 같은 두 단계를 쓰지만 경로가 불연속이므로 $C\lbrack 0,1\rbrack$ 대신 오른쪽 연속 함수의 공간과 Skorokhod 위상에서 돌린다.[^3]

# 활용

- [Brown 운동](brownian-motion.md)의 직관. 그 문서는 시간 간격 $h$ 마다 $\pm\sqrt h$ 로 움직이는 걷기의 축소 극한으로 Brown 운동을 소개하고, 그 극한이 경로 수준에서 존재한다는 근거로 이 정리를 든다.
- [약수렴](weak-convergence.md)의 극한정리 구조. tightness 와 극한의 유일성으로 나누는 두 단계 논증에서, 함수공간 위의 예가 이 정리다.
- 검정통계량의 극한분포. 경험과정 판본의 $\max_t\vert F_n(t)-t\vert$ 가 Kolmogorov–Smirnov 검정의 통계량이고, 그 극한분포가 Brown 다리의 최댓값 분포다.

[^1]: Billingsley, *Convergence of Probability Measures*, 2nd ed., §8 "Donsker's theorem" — 꺾은선 과정의 구성과 수렴 증명.
[^2]: Billingsley, 같은 책 §7 — $C\lbrack 0,1\rbrack$ 에서 tightness 와 진동 조건의 동치.
[^3]: Billingsley, 같은 책 §13, §16 — 경험과정과 Skorokhod 공간 $D\lbrack 0,1\rbrack$ 위의 수렴.

# 연관 문서

## 선수지식

- [약수렴](weak-convergence.md)
- [Brown 운동](brownian-motion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #statistics #theorem
