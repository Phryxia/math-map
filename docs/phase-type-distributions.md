# 위상형 분포

# 개요

**위상형 분포(phase-type distribution)** 는 유한 개의 상태를 오가는 [연속시간 Markov 연쇄](continuous-time-markov-chains.md)가 끝 상태에 닿을 때까지 걸린 시간의 분포다. 고장 난 기계를 고치는 시간을 재 보면 곧바로 끝나는 일은 드물고 $30$ 분 근처에서 가장 자주 끝난다. 그런데 [지수분포](exponential-distribution.md)의 밀도는 $0$ 에서 가장 크므로 이 자료에 맞지 않는다.

위상형 분포는 수리를 지수분포를 따르는 단계 여러 개로 쪼개 이런 대기시간을 적고, 그 분포를 [행렬 지수](matrix-exponential.md) 하나로 계산한다.

# 직관

수리는 진단과 교체의 두 단계로 이루어지고, 각 단계는 평균 $1/2$ 시간의 지수분포를 따른다고 놓는다. 단계마다 남은 시간이 지난 시간과 무관하므로, 지금 어느 단계에 있는지만 알면 앞으로의 진행이 정해진다. 수리 전체의 시간 $T$ 는 두 단계 시간의 합이다.

$T\gt t$ 이려면 시간 $t$ 까지 진단이 끝나지 않았거나, 진단은 끝났고 교체가 끝나지 않았어야 한다. 빈도 $2$ 의 사건이 $[0,t]$ 에 $0$ 번 또는 $1$ 번 일어날 확률을 더하면 다음이 나온다.

$$
\Pr(T\gt t)=(1+2t)e^{-2t}
$$

이것을 미분하면 밀도 $4te^{-2t}$ 가 나온다. 밀도는 $t=0$ 에서 $0$ 이고 $t=1/2$ 에서 가장 크다. 평균은 $1$ 시간이고 분산은 $1/2$ 로, 평균이 같은 지수분포의 분산 $1$ 보다 작다.

단계의 수를 늘리거나, 진단 결과에 따라 다른 교체 단계로 갈라지게 하면 모양이 다른 대기시간을 만들 수 있다. 어느 경우든 과정은 상태 몇 개 위의 연속시간 Markov 연쇄이고, 수리가 끝난 것은 더 움직이지 않는 끝 상태에 닿은 것이다.

# 정의

## 위상형 분포

상태 $\lbrace 1,\dots,m,m+1\rbrace$ 위의 연속시간 Markov 연쇄의 전이율 행렬이 다음 블록 꼴이라 하자. 상태 $m+1$ 은 떠나지 않는 **흡수 상태(absorbing state)** 이고 나머지 $m$ 개를 **위상(phase)** 이라 한다.

$$
\begin{pmatrix}S&s\cr 0&0\end{pmatrix},\qquad s=-S\mathbf 1
$$

연쇄가 확률벡터 $\alpha$ 에 따라 위상 가운데 하나에서 출발할 때, 흡수 상태에 닿는 시각 $T$ 의 분포를 **위상형 분포** $\mathrm{PH}(\alpha,S)$ 라 한다[^1]. $S$ 는 모든 위상에서 결국 흡수되도록 고른다.

직관 절의 수리는 위상 두 개(진단, 교체)이고 다음 $\alpha$, $S$, $s$ 를 갖는다.

$$
\alpha=(1,\thinspace 0),\qquad S=\begin{pmatrix}-2&2\cr 0&-2\end{pmatrix},\qquad s=\begin{pmatrix}0\cr 2\end{pmatrix}
$$

## Erlang 분포와 초지수 분포

같은 빈도 $\lambda$ 의 위상 $k$ 개를 차례로 거치는 위상형 분포를 **Erlang 분포(Erlang distribution)** 라 한다. 형상 모수가 정수 $k$ 인 [감마분포](gamma-distribution.md)와 같다. 직관 절의 수리는 $k=2$, $\lambda=2$ 인 Erlang 분포다.

확률 $p_i$ 로 위상 $i$ 하나를 골라 그 위상에서 바로 흡수되는 위상형 분포를 **초지수 분포(hyperexponential distribution)** 라 한다. 지수분포의 혼합이다. 확률 $0.9$ 로 평균 $0.1$, 확률 $0.1$ 로 평균 $10$ 인 지수분포를 섞으면 평균은 $1.09$ 이고, 대부분은 빨리 끝나지만 가끔 아주 오래 걸리는 대기시간이 된다.

# 성질

## 분포함수와 적률

정리. $T\sim\mathrm{PH}(\alpha,S)$ 이면 다음이 성립한다[^1].

$$
\Pr(T\gt t)=\alpha e^{tS}\mathbf 1,\qquad f(t)=\alpha e^{tS}s,\qquad E\lbrack T^k\rbrack=k!\thinspace\alpha(-S)^{-k}\mathbf 1
$$

증명의 요지. 시각 $t$ 에 연쇄가 위상 $j$ 에 있을 확률은 $(\alpha e^{tS})\_j$ 다. 흡수되지 않았을 확률은 그 합이고, 밀도는 위상 $j$ 에서 빈도 $s_j$ 로 흡수되는 몫을 더한 것이다. 적률은 $\int_0^\infty t^{k-1}e^{tS}dt=(k-1)!(-S)^{-k}$ 에서 나온다.

직관 절의 수리에서 $e^{tS}$ 는 다음이다.

$$
e^{tS}=e^{-2t}\begin{pmatrix}1&2t\cr 0&1\end{pmatrix}
$$

여기서 $\alpha e^{tS}\mathbf 1=(1+2t)e^{-2t}$ 와 $\alpha e^{tS}s=4te^{-2t}$ 가 나와 직관 절의 계산과 맞는다. $(-S)^{-1}$ 의 첫 행은 $(1/2,\thinspace 1/2)$ 이므로 평균은 $1$ 이다.

## 닫힘 성질

위상형 분포를 따르는 독립 확률변수 둘의 합, 최솟값, 최댓값은 위상형 분포를 따르고, 두 위상형 분포의 혼합도 위상형 분포다[^1]. 합은 첫 연쇄가 흡수될 때 둘째 연쇄의 출발 위상으로 넘어가게 위상을 이어 붙인 것이다. 최솟값과 최댓값은 두 연쇄를 동시에 돌리는 곱 상태공간 위의 연쇄로 얻는다.

## 조밀성

정리. $[0,\infty)$ 위의 모든 확률분포는 위상형 분포의 열로 [약수렴](weak-convergence.md)의 뜻에서 근사된다[^1]. Erlang 분포의 혼합만으로도 충분하다.

증명의 요지. 위상 $k$ 개의 Erlang 분포는 평균을 고정하고 $k$ 를 키우면 한 점에 모인다. 점질량의 혼합이 모든 분포를 근사하므로, Erlang 분포의 혼합도 그렇다.

## 변동계수의 하한

정리. 위상이 $m$ 개인 위상형 분포의 변동계수(coefficient of variation), 곧 표준편차를 평균으로 나눈 값은 $1/\sqrt m$ 이상이고, 등호는 Erlang 분포에서만 성립한다[^2]. 직관 절의 수리는 $m=2$ 이고 변동계수가 $\sqrt{1/2}/1=1/\sqrt 2$ 이므로 하한에 닿는다.

# 활용

- [대기행렬](queues.md). 서비스 시간이나 도착 간격이 위상형 분포이면 손님 수와 위상을 함께 상태로 둔 연쇄가 Markov 연쇄가 되고, 정상분포가 행렬 기하 꼴로 풀린다. 이 방법을 행렬 해석적 방법(matrix-analytic method)이라 한다[^3].
- 신뢰성 분석. 부품의 수명을 열화 단계의 연쇄로 두면 고장까지의 시간이 위상형 분포다.
- 파산 확률. [Cramér–Lundberg 모형](cramer-lundberg-model.md)에서 청구액이 위상형 분포이면 파산 확률이 행렬 지수 꼴로 닫힌 식을 갖는다[^1].

[^1]: S. Asmussen, *Applied Probability and Queues*, 2nd ed., Springer (2003), Chapter III.4(위상형 분포의 정의, 분포함수와 적률, 닫힘 성질, 조밀성)와 Chapter VIII(파산 확률).
[^2]: D. Aldous, L. Shepp, "The least variable phase type distribution is Erlang", *Stochastic Models* 3 (1987), 467–473.
[^3]: M. F. Neuts, *Matrix-Geometric Solutions in Stochastic Models*, Johns Hopkins University Press (1981).

# 연관 문서

## 선수지식

- [연속시간 Markov 연쇄](continuous-time-markov-chains.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #linear_algebra
