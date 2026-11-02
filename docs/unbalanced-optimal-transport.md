# 불균형 최적 수송

# 개요

**불균형 최적 수송(unbalanced optimal transport)** 은 옮기지 않고 남기거나 버린 질량에 벌점을 매겨, 총질량이 다른 두 분포 사이에서도 정의되게 한 [최적 수송](optimal-transport.md) 문제다. 한쪽에 모래 $10$ kg 이 있고 다른 쪽 구덩이들이 합쳐 $8$ kg 을 받는다면, 모래를 전부 구덩이로 옮기는 계획은 존재하지 않는다. 균형 문제는 이런 자료에서 정의조차 되지 않는다. 불균형 최적 수송은 옮긴 양이 양쪽의 주어진 양과 어긋나는 만큼 벌점을 더해, 옮기는 값과 버리는 값을 합친 것이 가장 작은 계획을 고른다.

# 직관

수직선의 점 $0$ 에 모래 $1$ 이 있고 점 $d$ 에 같은 양을 받는 구덩이가 있다. 모래를 옮기는 값은 옮긴 양에 거리의 제곱을 곱한 것이다. 최적 수송은 모래를 전부 옮기므로 값이 $d^2$ 이다. 점 $d=10$ 의 구덩이가 잘못 찍힌 자료라도 값은 $100$ 이 되고, 이 점 하나가 값을 정한다.

모래를 일부만 옮기고 나머지는 버리는 것을 허락한다. 옮긴 양을 $p$ 라 하면 모래 쪽에서도 구덩이 쪽에서도 $1-p$ 가 어긋난다. 어긋남마다 벌점 $\tau(p\log p-p+1)$ 을 매기면 값은

$$
d^2p+2\tau(p\log p-p+1)
$$

이다. $p$ 로 미분해 $0$ 으로 두면 $d^2+2\tau\log p=0$ 이므로 $p=e^{-d^2/(2\tau)}$ 이고, 최솟값은 $2\tau\big(1-e^{-d^2/(2\tau)}\big)$ 이다.

$\tau=2$ 로 두면 $d=1$ 에서 $p\approx0.78$ 이고 값이 $0.88$ 로 전부 옮기는 값 $1$ 에 가깝다. $d=10$ 에서는 $p=e^{-25}$ 로 거의 옮기지 않고 값이 $4$ 에 가깝다. 거리가 $\sqrt{2\tau}$ 보다 훨씬 멀면 질량을 버리고, 값은 $2\tau$ 를 넘지 않는다.

같은 벌점은 양이 다른 두 분포에도 값을 준다. 점 $0$ 에 모래 $10$ 과 구덩이 $8$ 이 있으면 모래를 전부 옮기는 계획이 없다. 옮긴 양 $p$ 에 벌점 $\tau(p\log\frac p{10}-p+10)+\tau(p\log\frac p8-p+8)$ 을 매기면 미분이 $\tau\log\frac{p^2}{80}$ 이므로 $p=\sqrt{80}\approx8.94$ 다.

# 정의

## 불균형 문제

$a\in\mathbb R^n_{\gt 0}$, $b\in\mathbb R^m_{\gt 0}$ 은 총질량이 달라도 된다. 비용 행렬 $C\in\mathbb R^{n\times m}\_{\ge0}$ 과 $\varepsilon\ge0$, $\tau\gt0$ 에 대해

$$
\mathrm{UOT}\_{\varepsilon,\tau}(a,b)=\min_{P\ge0}\ \langle C,P\rangle
+\varepsilon\thinspace\mathrm{KL}(P\thinspace\Vert\thinspace a\otimes b)
+\tau\thinspace\mathrm{KL}(P\mathbf 1\thinspace\Vert\thinspace a)+\tau\thinspace\mathrm{KL}(P^{\mathsf T}\mathbf 1\thinspace\Vert\thinspace b)
$$

를 **불균형 최적 수송(unbalanced optimal transport, UOT)** 의 값이라 한다.[^1] 여기서 $\mathrm{KL}(\mu\Vert\nu)=\sum_i\big(\mu_i\log\frac{\mu_i}{\nu_i}-\mu_i+\nu_i\big)$ 은 총질량이 다른 측도에도 정의되는 Kullback–Leibler 발산(Kullback–Leibler divergence)이다. $\varepsilon\gt0$ 이면 둘째 항이 [Sinkhorn 알고리즘](sinkhorn.md)의 엔트로피 정규화 항이다.

직관 절의 첫 예는 $n=m=1$, $a=b=1$, $C=d^2$, $\varepsilon=0$ 인 경우이고 $\mathrm{UOT}\_{0,\tau}(1,1)=2\tau\big(1-e^{-d^2/(2\tau)}\big)$ 이다.

## 쌍대와 스케일링 반복

쌍대 문제는 제약 없는 오목 최대화다.

$$
\max_{f,g}\ -\tau\sum_ia_i\big(e^{-f_i/\tau}-1\big)-\tau\sum_jb_j\big(e^{-g_j/\tau}-1\big)
-\varepsilon\sum_{i,j}a_ib_j\big(e^{(f_i+g_j-C_{ij})/\varepsilon}-1\big)
$$

$\varepsilon\gt0$ 이면 원문제의 최적해는 $P_{ij}=a_ib_j\thinspace e^{(f_i+g_j-C_{ij})/\varepsilon}$ 이다. $f$ 와 $g$ 를 번갈아 최대화하는 블록 좌표 상승법(block coordinate ascent)의 갱신은

$$
f_i\leftarrow-\lambda\varepsilon\log\sum_jb_je^{(g_j-C_{ij})/\varepsilon},\qquad
g_j\leftarrow-\lambda\varepsilon\log\sum_ia_ie^{(f_i-C_{ij})/\varepsilon},\qquad
\lambda=\frac\tau{\tau+\varepsilon}
$$

이다. $K_{ij}=a_ib_je^{-C_{ij}/\varepsilon}$, $u=e^{f/\varepsilon}$, $v=e^{g/\varepsilon}$ 로 두면 $P=\mathrm{diag}(u)K\mathrm{diag}(v)$ 이고 갱신은 $u\leftarrow(a/Kv)^\lambda$, $v\leftarrow(b/K^{\mathsf T}u)^\lambda$ 다. $\lambda=1$ 이면 Sinkhorn 반복이다.

직관 절의 $a=10$, $b=8$, $C=0$ 에서는 $K=80$ 이고 고정점에서 $P=80uv=80^{1/(1+\lambda)}$ 이다. $\varepsilon\to0$ 이면 $\lambda\to1$ 이어서 $P\to\sqrt{80}$ 이 직관 절의 값과 같다.

## Hellinger–Kantorovich 거리

$\varepsilon=0$, $\tau=1$ 이고 비용을

$$
C(x,y)=-2\log\cos\big(\min(\vert x-y\vert,\tfrac\pi2)\big)
$$

로 잡은 값의 제곱근을 **Hellinger–Kantorovich 거리(Hellinger–Kantorovich distance)** 라 한다. Wasserstein–Fisher–Rao 거리(Wasserstein–Fisher–Rao distance)라고도 부른다. 거리가 $\pi/2$ 이상인 두 점 사이에서는 비용이 무한대여서 질량을 옮기지 않는다. 그래서 질량 $1$ 인 점 $0$ 과 점 $x$($\vert x\vert\ge\pi/2$) 사이에서는 $P=0$ 이고 값이 $\mathrm{KL}(0\Vert1)+\mathrm{KL}(0\Vert1)=2$ 여서 거리는 $\sqrt2$ 다.

# 성질

## 최적해의 존재와 유일성

$\varepsilon\gt0$ 이면 목적함수가 $P$ 에 대해 강볼록이고 아래로 유계이므로 최소점이 하나뿐이다.

## 극한

- $\Vert a\Vert\_1=\Vert b\Vert\_1$ 일 때 $\tau\to\infty$ 이면 $\lambda\to1$ 이고 문제가 균형 엔트로피 정규화 최적 수송으로 수렴한다.
- $\varepsilon=0$ 이고 $C$ 의 성분이 모두 양수이면 $\tau\to0$ 에서 $P\to0$ 이다.
- 옮긴 질량은 $\min(\Vert a\Vert\_1,\Vert b\Vert\_1)$ 보다 클 수 있다. 직관 절의 $a=10$, $b=8$ 에서 옮긴 질량이 $\sqrt{80}\gt8$ 이다.

## 유효 사거리

직관 절의 한 점 계산에서 옮기는 양 $e^{-d^2/(2\tau)}$ 은 $d$ 가 $\sqrt{2\tau}$ 규모를 넘으면 빠르게 $0$ 으로 간다. 좌표를 $s$ 배 늘이면 같은 결과를 얻으려고 $\tau$ 를 $s^2$ 배 해야 하므로 $\tau$ 는 자료의 척도에 맞춰 고른다.

## 거리 성질

$\mathrm{UOT}$ 자체는 거리가 아니다. Hellinger–Kantorovich 거리는 양측도 공간 위의 거리다.[^2]

## 반복의 수렴

반복 한 번의 비용이 Sinkhorn 반복과 같은 $O(nm)$ 이고 로그 영역 안정화가 그대로 적용된다. Hilbert 사영 거리(Hilbert projective metric)에서 $x\mapsto x^\lambda$ 는 거리를 $\lambda$ 배 하므로, 갱신 한 번의 축약비가 Sinkhorn 반복의 축약비에 $\lambda$ 를 곱한 값 이하다.

## 편향 보정

$\varepsilon\gt0$ 이면 $\mathrm{UOT}\_{\varepsilon,\tau}(a,a)\ne0$ 이다. Sinkhorn 발산처럼 $\mathrm{UOT}(a,b)-\tfrac12\mathrm{UOT}(a,a)-\tfrac12\mathrm{UOT}(b,b)$ 에 총질량 차이에 따른 항을 더한 불균형 Sinkhorn 발산이 정의되어 있다.[^3]

# 활용

- 단세포 유전체학. 시점이 다른 세포 집단을 잇는 궤적 추론에서 세포가 분열하고 죽어 총질량이 보존되지 않으므로 불균형 수송을 쓴다.
- 부분 매칭과 점구름 정합. 겹치는 부분만 대응시키고 나머지는 버려야 하는 형상 정합에서 $\tau$ 가 대응시킬 거리의 규모를 정한다.
- 이상치가 섞인 표본의 손실. 균형 Sinkhorn 발산은 이상치까지 질량을 옮기지만, 불균형판은 유효 사거리 밖의 질량을 버린다.
- 영역 적응(domain adaptation). 출발 영역과 도착 영역의 부류 비율이 다를 때 균형 제약은 다른 부류끼리의 대응을 만든다. 벌점으로 바꾸면 비율 차이만큼의 질량을 버릴 수 있다.

[^1]: L. Chizat, G. Peyré, B. Schmitzer, F.-X. Vialard, *Scaling Algorithms for Unbalanced Optimal Transport Problems*, Math. Comp. **87** (2018), 2563–2609.
[^2]: L. Chizat, G. Peyré, B. Schmitzer, F.-X. Vialard, *An Interpolating Distance between Optimal Transport and Fisher–Rao Metrics*, Found. Comput. Math. **18** (2018), 1–44. M. Liero, A. Mielke, G. Savaré, *Optimal Entropy-Transport problems and a new Hellinger–Kantorovich distance between positive measures*, Invent. Math. **211** (2018), 969–1117.
[^3]: T. Séjourné, J. Feydy, F.-X. Vialard, A. Trouvé, G. Peyré, *Sinkhorn Divergences for Unbalanced Optimal Transport*, arXiv:1910.12958 (2019).

# 연관 문서

## 선수지식

- [Sinkhorn 알고리즘](sinkhorn.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #measure_theory
