# Moran 모형

# 개요

**Moran 모형(Moran model)** 은 크기가 일정한 집단에서 한 번에 한 개체가 자식을 낳고 한 개체가 죽을 때 한 유형의 개체 수가 어떻게 바뀌는지를 나타내는 확률 모형이다. 개체 $4$ 개로 된 집단에 남들보다 자식을 두 배 자주 낳는 돌연변이 $A$ 가 하나 생겼다. 이 $A$ 가 집단 전체로 퍼질 확률이 얼마인지가 이 모형의 물음이다.

Moran 모형은 $A$ 의 개수를 한 칸씩 오르내리는 걷기로 보고, 오를 확률과 내릴 확률의 비만으로 이 확률을 계산한다.

# 직관

자식을 낳을 개체는 자식을 낳는 빈도에 비례해 고르고, 죽을 개체는 네 개체 가운데 고르게 고른다. 죽은 자리를 자식이 채우므로 집단은 늘 $4$ 개체다. $A$ 의 개수가 바뀌는 것은 $A$ 가 낳고 다른 개체가 죽거나, 다른 개체가 낳고 $A$ 가 죽을 때뿐이다.

$A$ 가 $x$ 개이면 앞의 일이 일어날 확률은 $2x(4-x)$ 에, 뒤의 일이 일어날 확률은 $(4-x)x$ 에 비례한다. 비가 $2:1$ 이므로 개수가 바뀔 때마다 확률 $2/3$ 로 하나 늘고 확률 $1/3$ 로 하나 준다. 이 비는 $x$ 와 상관없다.

$A$ 가 $k$ 개에서 출발해 집단 전체로 퍼질 확률을 $h_k$ 라 하면 $h_0=0$, $h_4=1$ 이고 다음이 성립한다.

$$
h_k=\frac23h_{k+1}+\frac13h_{k-1}\qquad(k=1,2,3)
$$

이 식은 $2(h_{k+1}-h_k)=h_k-h_{k-1}$ 과 같으므로 이웃한 값의 차이가 한 칸마다 절반이 된다. 네 차이 $h_1$, $h_1/2$, $h_1/4$, $h_1/8$ 을 더하면 $h_4-h_0=1$ 이므로 $\frac{15}{8}h_1=1$ 이고 $h_1=8/15$ 다. $A$ 가 자식을 낳는 빈도가 다른 개체와 같으면 차이가 줄지 않아 $h_1=1/4$ 이다.

# 정의

## Moran 모형

집단의 개체 수를 $N$, 유형 $A$ 의 상대 적합도(relative fitness)를 $r\gt 0$ 이라 한다. $A$ 개체는 세기 $r$, 나머지 유형 $B$ 의 개체는 세기 $1$ 로 자식을 낳고, 자식은 $N$ 개체 가운데 고르게 고른 하나를 대체한다. 시각 $t$ 의 $A$ 의 개수 $X_t$ 를 **Moran 모형** 이라 한다[^1]. $r=1$ 이면 중립(neutral)이라 한다.

$X_t$ 는 상태공간 $\lbrace 0,1,\dots,N\rbrace$ 위의 [출생사망 과정](birth-death-process.md)이고, 출생률과 사망률은 다음과 같다.

$$
\lambda_x=\frac{r\thinspace x(N-x)}{N},\qquad \mu_x=\frac{x(N-x)}{N}
$$

$A$ 가 자식을 낳는 세기 $rx$ 에 그 자식이 $B$ 를 대체할 확률 $(N-x)/N$ 을 곱한 것이 $\lambda_x$ 다. 직관 절의 집단은 $N=4$, $r=2$, $X_0=1$ 이고 $\lambda_1=3/2$, $\mu_1=3/4$ 이다.

## 고정 확률

상태 $0$ 과 $N$ 은 흡수 상태이고, [Wright–Fisher 모형](wright-fisher-model.md)에서처럼 $X_t=N$ 이 되는 것을 $A$ 의 고정(fixation)이라 한다. $X_0=i$ 일 때 $A$ 가 고정될 확률을 $\phi_i$ 라 하고, 돌연변이 하나에서 출발한 $\phi_1$ 을 **고정 확률(fixation probability)** 이라 한다. 직관 절의 $h_k$ 가 $\phi_k$ 이고 $\phi_1=8/15$ 다.

## 뛰는 순서의 걷기

$X_t$ 가 뛸 때마다 뛴 뒤의 값을 적은 열 $Y_0,Y_1,\dots$ 를 **뛰는 순서의 걷기(embedded jump chain)** 라 한다. $0\lt x\lt N$ 에서 $Y$ 가 오를 확률은 다음과 같다.

$$
\frac{\lambda_x}{\lambda_x+\mu_x}=\frac{r}{1+r}
$$

이 값이 $x$ 와 상관없으므로 $Y$ 는 오를 확률이 $r/(1+r)$ 인 걷기를 $0$ 과 $N$ 에서 멈춘 것이다. 직관 절의 $2/3$ 과 $1/3$ 이 $r=2$ 일 때의 이 확률이다.

# 성질

## 고정 확률의 공식

정리. $r\ne 1$ 이면 다음이 성립하고, $r=1$ 이면 $\phi_i=i/N$ 이다[^2].

$$
\phi_i=\frac{1-r^{-i}}{1-r^{-N}}
$$

증명의 요지. 출생사망 과정의 재귀성 절에 있는 도달 확률 공식에서 $\rho_j=\prod_{k\le j}\mu_k/\lambda_k=r^{-j}$ 다. $0$ 보다 $N$ 에 먼저 닿을 확률은 $\sum_{j\lt i}\rho_j\big/\sum_{j\lt N}\rho_j$ 이고, 분자와 분모를 등비급수로 더하면 위 식이 나온다.

$r\to 1$ 에서 이 식은 $i/N$ 으로 수렴한다. $N=4$, $i=1$, $r=2$ 이면 $\frac{1-1/2}{1-1/16}=8/15$ 로 직관 절의 값과 같다.

## 큰 집단의 극한

$i=1$ 이고 $N\to\infty$ 이면, $r\gt 1$ 일 때 $\phi_1\to 1-1/r$ 이고 $r\lt 1$ 일 때 $\phi_1$ 이 $r^N$ 규모로 $0$ 에 간다. 유리한 돌연변이도 확률 $1/r$ 로 사라진다. $r=2$ 이면 집단이 아무리 커도 절반의 확률로 사라진다.

이 극한은 [분지과정](branching-processes.md)의 소멸 확률과 같다. $A$ 가 드문 동안 $\lambda_x\approx rx$, $\mu_x\approx x$ 이므로 $A$ 의 개수가 선형 출생사망 과정으로 근사되고, 그 소멸 확률이 $\min(1,1/r)$ 이다.

## 중립 고정의 시간

정리. 중립 Moran 모형에서 $X_0=1$ 이면 흡수까지의 평균 시간은 $\sum_{x=1}^{N-1}1/x$ 이고, 고정을 조건으로 한 평균 시간은 $N-1$ 이다[^3].

증명의 요지. 중립이면 뛰는 순서의 걷기는 대칭 걷기이고, $1$ 에서 출발해 흡수되기 전에 $x$ 를 방문하는 평균 횟수는 $2(N-x)/N$ 이다. 상태 $x$ 에 한 번 머무는 평균 시간은 $N/\big(2x(N-x)\big)$ 이므로 둘을 곱해 $x$ 에 대해 더하면 $\sum 1/x$ 가 나온다. 고정을 조건으로 하면 방문 횟수에 $x$ 가 곱해져 각 항이 $1$ 이 된다.

시간 단위는 개체마다 자식을 평균 하나 낳는 시간, 곧 한 세대다. Wright–Fisher 모형에서 돌연변이 하나가 고정되는 데 평균 약 $2N$ 세대가 걸리므로, 같은 크기의 집단에서 Moran 모형의 고정이 두 배 빠르다.

## 이형접합도의 감소

$p_t=X_t/N$ 이라 하고 이형접합도(heterozygosity)를 $H_t=2p_t(1-p_t)$ 로 둔다. 중립에서 그 평균은 다음과 같이 준다[^2].

$$
\mathbb E[H_t]=e^{-2t/N}H_0
$$

$f(x)=x(N-x)$ 라 하면 한 칸 오를 때 $f$ 가 $N-2x-1$ 만큼, 한 칸 내릴 때 $-(N-2x+1)$ 만큼 바뀐다. 여기에 $\lambda_x=\mu_x$ 를 곱해 더하면 $\mathbb E[f(X_t)]$ 의 변화율이 $-\frac2N\mathbb E[f(X_t)]$ 이므로 위 식이 나온다. Wright–Fisher 모형의 $(1-1/N)^n\approx e^{-n/N}$ 보다 두 배 빠르다.

## 계보의 합류

시간을 거꾸로 보면, 지금 개체 두 개의 계보는 한 출생에서 부모와 대체된 개체가 그 둘일 때 하나로 합쳐진다. 출생은 세기 $N$ 으로 일어나고 그 쌍이 맞을 확률이 $2/N^2$ 이므로 두 계보는 세기 $2/N$ 으로 합쳐진다. 시간을 $N/2$ 단위로 재면 표본의 계보가 [Kingman 합류](kingman-coalescent.md)로 나타난다[^2].

# 활용

- 진화 게임 이론(evolutionary game theory). 적합도를 다른 개체와 만나 얻는 보수의 평균으로 두면 $r$ 이 $x$ 에 따라 바뀐다. 각 전략이 자기 자신에 대한 최선의 응답인 두 전략 게임에서, 선택이 약할 때 $A$ 하나의 고정 확률이 중립값 $1/N$ 보다 클 조건은 두 전략의 보수가 같아지는 $A$ 의 빈도가 $1/3$ 보다 작은 것이다. 이것을 1/3 규칙(one-third rule)이라 한다[^4].
- 그래프 위의 진화. 자식이 그래프에서 이웃한 정점만 대체하게 하면 [그래프 위의 Moran 모형](moran-on-graphs.md)이 된다. 모든 정점으로 들어오는 대체 확률의 합이 같은 그래프에서는 고정 확률이 위 공식과 같다. 이것을 등온 정리(isothermal theorem)라 한다[^5].

[^1]: P. A. P. Moran, "Random processes in genetics", *Mathematical Proceedings of the Cambridge Philosophical Society* 54 (1958), 60–71.
[^2]: Richard Durrett, *Probability Models for DNA Sequence Evolution*, 2nd ed., Springer, 2008, Ch. 1 (Moran 모형의 고정 확률, 이형접합도, 합류).
[^3]: Warren J. Ewens, *Mathematical Population Genetics I*, 2nd ed., Springer, 2004, Ch. 3 (Moran 모형의 흡수 시간).
[^4]: Martin A. Nowak, Akira Sasaki, Christine Taylor, Drew Fudenberg, "Emergence of cooperation and evolutionary stability in finite populations", *Nature* 428 (2004), 646–650.
[^5]: Erez Lieberman, Christoph Hauert, Martin A. Nowak, "Evolutionary dynamics on graphs", *Nature* 433 (2005), 312–316.

# 연관 문서

## 선수지식

- [출생사망 과정](birth-death-process.md)
- [Wright–Fisher 모형](wright-fisher-model.md)

## 더 알아보기

- [그래프 위의 Moran 모형](moran-on-graphs.md)

#probability #statistics
