# Sinkhorn 알고리즘과 엔트로피 정규화

# 개요

이산 Kantorovich [최적 수송](optimal-transport.md) 문제는 선형계획이다. $n$ 개 점에 대해 $\tilde O(n^3)$ 이 들고, 최적해가 심플렉스의 꼭짓점이라 입력을 조금 흔들면 해가 튀며 미분가능하지 않다.

엔트로피 항을 더하면 목적함수가 강볼록해져 해가 유일하고 매끄러워지며, 최적해가 닫힌 꼴을 갖는다.

$$
P^\star=\mathrm{diag}(u)\thinspace K\thinspace\mathrm{diag}(v),\qquad K=e^{-C/\varepsilon}
$$

남은 일은 $u,v$ 를 주변분포에 맞추는 것이고, 두 조건을 번갈아 강제하는 것이 **Sinkhorn 반복**이다. 행렬-벡터 곱만 쓰므로 GPU 에서 빠르다.

해가 대각 스케일링 꼴인 것은 볼록쌍대가 설명하고, 반복의 수렴은 [KL 발산](kl-divergence.md)에 대한 교대 사영과 Hilbert 사영 거리의 축약성이 설명한다. 작은 $\varepsilon$ 에서의 수치적 언더플로는 로그 영역 구현이, $\varepsilon>0$ 이 남기는 편향은 Sinkhorn 발산이 고친다.

# 직관

## 엔트로피 항

비용 $\langle C,P\rangle$ 는 $P$ 에 대해 선형이므로 최적 계획은 볼록집합의 꼭짓점에 놓이고, 질량을 쪼개지 않고 한 점을 한 점으로 보낸다.

엔트로피 $H(P)=-\sum P_{ij}(\log P_{ij}-1)$ 는 질량이 퍼질수록 커지므로 $-\varepsilon H(P)$ 를 최소화하는 것은 계획을 흐릿하게 만드는 힘이다. $\varepsilon$ 이 두 힘의 환율이다.

$$
\varepsilon\to0:\ P^\star\to\text{최적 수송 계획},\qquad
\varepsilon\to\infty:\ P^\star\to a\thinspace b^\top\ (\text{독립 결합})
$$

$\varepsilon$ 이 크면 비용을 무시하고 가장 무질서한 결합인 곱측도로 가고, 작으면 원래 문제로 돌아간다.

## 대각 스케일링

주변분포 제약은 행 합과 열 합, 곧 $n+m$ 개의 선형 등식이다. Lagrange 승수도 $n+m$ 개이고 목적함수가 $P_{ij}$ 에 대해 분리가능하므로 최적해가 성분마다 풀린다.

$$
\frac{\partial}{\partial P_{ij}}\Big[\langle C,P\rangle-\varepsilon H(P)-\textstyle\sum_if_i(\cdot)-\sum_jg_j(\cdot)\Big]=0
\ \Longrightarrow\
P_{ij}=e^{f_i/\varepsilon}e^{-C_{ij}/\varepsilon}e^{g_j/\varepsilon}
$$

$u_i=e^{f_i/\varepsilon}$ , $v_j=e^{g_j/\varepsilon}$ 로 쓰면 대각 스케일링이고 미지수가 $nm$ 개에서 $n+m$ 개로 줄었다. 엔트로피 항의 로그가 지수를 낳고 지수가 곱으로 분리된다.

## KL 교대 사영

$K=e^{-C/\varepsilon}$ 로 두면

$$
\langle C,P\rangle-\varepsilon H(P)=\varepsilon\thinspace\mathrm{KL}(P\thinspace\Vert\thinspace K)+\text{상수}
$$

이므로 엔트로피 정규화 최적 수송은 $K$ 에 KL 발산으로 가장 가까운 결합을 찾는 문제다. 제약 집합은 아핀집합 두 개의 교집합이다.

$$
\mathcal C_1=\lbrace P:P\mathbf 1=a\rbrace,\qquad \mathcal C_2=\lbrace P:P^\top\mathbf 1=b\rbrace
$$

Sinkhorn 반복의 한 단계는 $\mathcal C_1$ 로의 KL 사영, 다음 단계는 $\mathcal C_2$ 로의 KL 사영이다. 아핀집합으로의 Bregman 교대 사영이 교집합으로 수렴한다는 정리의 특수한 경우다.

## 수렴의 근거

Sinkhorn 반복은 $u$ 를 양수 벡터의 사영공간에서 움직이고, 그 공간의 거리가 **Hilbert 사영 거리**다.

$$
d_H(u,u')=\log\max_{i,j}\frac{u_iu'_j}{u_ju'_i}
$$

Birkhoff–Hopf 정리에 따르면 성분이 모두 양수인 행렬 $K$ 를 곱하는 사상은 이 거리에서 축약이고 축약비가 $K$ 의 사영 지름으로 명시된다.

$K=e^{-C/\varepsilon}$ 이면 성분 사이의 비가 $\varepsilon$ 이 작아질수록 극단적이 되어 축약비가 $1$ 에 지수적으로 가까워진다. 정확한 해에 가까울수록 알고리즘이 느려지므로 $\varepsilon$ 을 함부로 줄일 수 없다.

# 정의

## 엔트로피 정규화 최적 수송

$a\in\Delta_n$ 과 $b\in\Delta_m$ 을 확률벡터, $C\in\mathbb R^{n\times m}_{\ge0}$ 을 비용행렬이라 하고 $\Pi(a,b)=\lbrace P\ge0:P\mathbf1=a,\ P^\top\mathbf1=b\rbrace$ 라 하자.

$$
\mathrm{OT}_\varepsilon(a,b)=\min_{P\in\Pi(a,b)}\ \langle C,P\rangle+\varepsilon\thinspace\mathrm{KL}\big(P\thinspace\Vert\thinspace a\otimes b\big)
$$

기준측도를 $K=e^{-C/\varepsilon}$ 로 잡느냐 곱측도 $a\otimes b$ 로 잡느냐는 상수 차이이고 최적해 $P^\star$ 는 같다. 아래에서는 곱측도 규약을 쓴다. 목적함수가 강볼록하고 $\Pi(a,b)$ 가 콤팩트 볼록집합이므로 최소점이 유일하다.

## 쌍대 문제

제약에 승수 $f\in\mathbb R^n$ 과 $g\in\mathbb R^m$ 을 붙이고 $P$ 에 대해 최소화하면 제약 없는 매끄러운 문제가 나온다.

$$
\max_{f,g}\ \langle f,a\rangle+\langle g,b\rangle-\varepsilon\sum_{i,j}a_ib_j\thinspace e^{(f_i+g_j-C_{ij})/\varepsilon}
$$

최적해는

$$
P^\star_{ij}=a_ib_j\thinspace e^{(f_i+g_j-C_{ij})/\varepsilon}
$$

이고 각 변수에 대한 일계 조건이 주변분포 조건이다. 이 조건을 번갈아 풀면

$$
f_i=-\varepsilon\log\sum_jb_j\thinspace e^{(g_j-C_{ij})/\varepsilon},\qquad
g_j=-\varepsilon\log\sum_ia_i\thinspace e^{(f_i-C_{ij})/\varepsilon}
$$

가 되므로, Sinkhorn 반복은 쌍대 문제의 블록 좌표 상승법이다. 곱 형태 $u\leftarrow a/(Kv)$ 와 $v\leftarrow b/(K^\top u)$ 를 로그로 옮긴 것이다.

## 로그 영역 반복

$\varepsilon$ 이 작으면 $K_{ij}=e^{-C_{ij}/\varepsilon}$ 이 부동소수점에서 $0$ 으로 무너지고 $Kv$ 로 나누는 순간 계산이 끝난다. 로그 형태를 쓰되 $\log\sum\exp$ 를 최댓값을 빼고 계산하면 이 문제가 사라진다.

$$
\mathrm{LSE}(z)=z_{\max}+\log\sum_k e^{z_k-z_{\max}}
$$

지수의 인자가 항상 $0$ 이하라 오버플로가 없고, 한 항이 정확히 $1$ 이라 합이 $0$ 이 되지 않는다. 대가는 $\exp$ 와 $\log$ 호출이 늘어 행렬 곱의 이점을 일부 잃는 것이다.

## Sinkhorn 발산

$\varepsilon>0$ 이면 $\mathrm{OT}\_\varepsilon(a,a)>0$ 이라 자기 자신과의 거리가 $0$ 이 아니다. 이 상수를 빼낸 것이 **Sinkhorn 발산**이다[^1].

$$
S_\varepsilon(a,b)=\mathrm{OT}_\varepsilon(a,b)-\tfrac12\mathrm{OT}_\varepsilon(a,a)-\tfrac12\mathrm{OT}_\varepsilon(b,b)
$$

$S_\varepsilon(a,a)=0$ 이 정의에서 따라 나오고, $S_\varepsilon(a,b)\ge0$ 이며 $a=b$ 일 때만 $0$ 이다. 두 번의 추가 Sinkhorn 실행이 비용의 전부다.

# 성질

## 수렴

> **Franklin–Lorenz.** $K$ 의 성분이 모두 양수이면 Sinkhorn 반복은 Hilbert 사영 거리에서 선형 수렴한다. 축약비는
> $$
> \lambda=\frac{\sqrt\eta-1}{\sqrt\eta+1},\qquad
> \eta=\max_{i,j,k,l}\frac{K_{ik}K_{jl}}{K_{jk}K_{il}}
> $$
> 이고, $K=e^{-C/\varepsilon}$ 이면 $\eta=e^{\Delta/\varepsilon}$ 이고 $\Delta=\max_{i,j,k,l}(C_{jk}+C_{il}-C_{ik}-C_{jl})$ 다.

$\lambda=\tanh\negthinspace\big(\Delta/4\varepsilon\big)$ 로 정리된다. $\varepsilon$ 이 크면 $\lambda\approx\Delta/4\varepsilon$ 로 빠르고, $\varepsilon\to0$ 이면 $\lambda\to1-2e^{-\Delta/2\varepsilon}$ 이라 필요한 반복 수가 $e^{\Delta/2\varepsilon}$ 규모로 폭증한다.

정규화 없는 최적 수송을 $\delta$ 오차로 풀려면 $\varepsilon\sim\delta/\log n$ 을 잡아야 하고, 전체 복잡도는 $\tilde O(n^2/\delta^3)$ 이다. 선형계획의 $\tilde O(n^3)$ 과 견주면 정밀도를 낮게 잡을수록 유리하다.

## 편향의 크기

매끄러운 분포에서

$$
\mathrm{OT}_\varepsilon(a,b)-\mathrm{OT}_0(a,b)=O\big(\varepsilon\log\tfrac1\varepsilon\big)
$$

이 알려져 있다. $S_\varepsilon$ 은 앞선 항들이 상쇄되어 $\varepsilon$ 의 더 높은 차수로 접근하므로, 같은 $\varepsilon$ 에서 더 정확하고 같은 정확도를 더 큰 $\varepsilon$ 으로 얻어 반복 수도 줄어든다.

$S_\varepsilon$ 은 $\varepsilon\to0$ 에서 최적 수송 비용으로, $\varepsilon\to\infty$ 에서 커널 $-C$ 로 정의되는 최대평균불일치(MMD)로 수렴해 두 극한을 보간한다.

## 미분가능성

쌍대 문제의 포락선 정리에서 기울기가 나온다.

$$
\nabla_a\mathrm{OT}_\varepsilon(a,b)=f^\star\quad(\textstyle\sum_if^\star_i a_i=0\ \text{로 정규화})
$$

최적 쌍대 변수가 곧 기울기이므로 반복을 되짚어 미분할 필요가 없다. 반복 전체를 자동미분할 수도 있지만, 수렴한 지점에서는 위 식이 메모리와 정확도 양쪽에서 낫다.

## 한계

- $\mathrm{OT}\_\varepsilon$ 은 삼각부등식을 만족하지 않는다. $S_\varepsilon$ 도 일반적으로 거리가 아니고, 양정성과 볼록성, 약수렴의 거리화만 보장된다.
- $\varepsilon$ 을 줄이면 정확해지지만 반복이 지수적으로 늘고 조건수가 나빠진다. $\varepsilon$ 을 크게 시작해 줄여 가는 어닐링이 표준 대응이다.
- 유한 반복에서 얻은 $P$ 는 한쪽 주변분포만 정확하므로, 근사 계획을 쓰려면 반올림 단계가 따로 필요하다.

# 활용

## 로그 영역 계산

비용의 최댓값이 $C_{\max}$ 일 때 표준 영역 커널의 최솟값은 $e^{-C_{\max}/\varepsilon}$ 이므로, $\varepsilon$ 이 작으면 배정도에서 $0$ 이 되어 첫 나눗셈에서 실패한다. 로그 영역 구현은 그 영역에서 선택이 아니라 필수다.

## 쓰이는 자리

- **생성모형의 손실함수.** 표본 집합 두 개 사이의 거리를 미분가능하게 재는 자리에 $S_\varepsilon$ 이 들어간다. 적대적 학습 없이 분포를 맞추므로 학습이 안정적이다.
- **영역 적응과 색 이전.** 서로 다른 분포의 표본을 대응시키는 문제가 수송 계획이며, 부드러운 계획이 잡음에 강하다.
- **단세포 유전체학.** 서로 다른 시점에 측정한 세포 집단을 잇는 궤적 추론이 수송 문제로 세워지고, 규모 때문에 Sinkhorn 이 쓰인다.
- **미분가능한 정렬과 순위.** 치환행렬의 볼록완화가 이중확률행렬이므로 Sinkhorn 을 부드러운 정렬로 쓴다. 순위 기반 손실함수를 신경망에 넣을 때의 표준 수법이다.
- **행렬 균형화.** 양수 행렬을 이중확률행렬로 만드는 고전적 문제가 $\varepsilon=1$ , $C=-\log K$ 인 특수한 경우이며, Sinkhorn 의 1964년 원논문의 문제다.

[^1]: Marco Cuturi, *Sinkhorn Distances: Lightspeed Computation of Optimal Transport*, NeurIPS 2013 이 정규화와 반복을 최적 수송에 도입했다. 수렴 비율은 J. Franklin, J. Lorenz, *On the scaling of multidimensional matrices*, Linear Algebra Appl. 114–115 (1989), 717–735. Sinkhorn 발산의 양정성과 거리화는 J. Feydy 외, *Interpolating between Optimal Transport and MMD using Sinkhorn Divergences*, AISTATS 2019. 복잡도 $\tilde O(n^2/\delta^3)$ 은 J. Altschuler, J. Weed, P. Rigollet, NeurIPS 2017.

# 연관 문서

## 선수지식

- [최적 수송과 Wasserstein 거리](optimal-transport.md)
- [KL divergence와 상호정보량](kl-divergence.md)

## 더 알아보기

- [불균형 최적 수송](unbalanced-optimal-transport.md)

#optimization #machine_learning #information_theory
