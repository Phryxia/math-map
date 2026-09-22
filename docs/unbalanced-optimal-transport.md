# 불균형 최적 수송

# 개요

최적 수송 문제는 결합의 집합 $\Pi(a,b)$ 위에서 정의된다. 이 집합이 비어 있지 않으려면 두 분포의 총질량이 같아야 하고 모든 질량이 어딘가로 가야 한다. 실제 자료에서는 표본 크기가 다르고 이상치가 섞이며 세포가 분열하거나 죽는다.

한 점만 멀리 떨어져 있어도 균형 문제는 그 질량을 끝까지 옮긴다. 비용이 거리의 제곱이면 이상치 하나가 전체 비용을 지배한다.

**불균형 최적 수송**은 주변분포 제약을 등식에서 벌점으로 바꾼다[^1].

$$
\min_{P\ge0}\ \langle C,P\rangle+\varepsilon\thinspace\mathrm{KL}(P\thinspace\Vert\thinspace a\otimes b)
+\tau\thinspace\mathrm{KL}(P\mathbf 1\thinspace\Vert\thinspace a)+\tau\thinspace\mathrm{KL}(P^\top\mathbf 1\thinspace\Vert\thinspace b)
$$

$\tau$ 가 "질량을 버리는 값" 과 "멀리 옮기는 값" 사이의 환율이다. $\tau\to\infty$ 면 벌점이 제약으로 돌아가 [Sinkhorn](sinkhorn.md) 문제가 되고, $\tau$ 가 작으면 먼 질량을 아예 포기한다.

알고리즘은 거의 그대로다. 최적해가 여전히 대각 스케일링 꼴이고 반복에 지수 하나가 붙는다.

$$
u\leftarrow\Big(\frac a{Kv}\Big)^{\negthinspace\lambda},\qquad \lambda=\frac\tau{\tau+\varepsilon}
$$

# 직관

## 제약의 벌점화

등식 제약 $P\mathbf 1=a$ 는 행 합이 $a$ 와 다르면 벌금이 무한대라는 뜻이다. 무한대를 유한한 값으로 낮추면 질량을 옮기는 비용이 버리는 벌금보다 클 때 최적화가 그 질량을 버린다.

벌금의 척도로 $\mathrm{KL}$ 을 쓰는 근거가 둘이다. $\mathrm{KL}$ 이 이미 엔트로피 정규화에 쓰이므로 목적함수가 같은 종류의 항으로 이루어지고, $\mathrm{KL}(\mu\Vert\nu)$ 가 $\mu\ll\nu$ 를 요구하므로 질량이 없던 곳에 새로 생기지 않는다.

## 완화된 갱신

균형 문제의 일계 조건은 행 합이 정확히 $a$ 가 되도록 $f$ 를 고르는 것이다. 벌점에서는 행 합을 $a$ 에 맞추는 이득과 $f$ 를 움직이는 비용이 균형을 이루는 지점이 답이고, 두 항이 모두 로그 꼴이라 그 지점이 기하평균이다.

$$
f_i\ \longleftarrow\ -\lambda\thinspace\varepsilon\log\sum_jb_j\thinspace e^{(g_j-C_{ij})/\varepsilon},\qquad
\lambda=\frac\tau{\tau+\varepsilon}\in(0,1)
$$

$\lambda=1$ 이면 균형 갱신이고 $\lambda\lt 1$ 이면 그 방향으로 덜 간다. 불균형 Sinkhorn 은 완화된 Sinkhorn 이며, 한 줄만 고치면 구현이 끝나고 로그 영역 안정화도 그대로 쓰인다.

$\lambda\lt 1$ 은 축약을 강하게 만든다. 균형 문제에서 $\varepsilon\to0$ 일 때 반복이 폭증하는 것과 달리, 유한한 $\tau$ 는 갱신을 덜 움직이게 해 수렴을 돕는다.

## 수송과 소멸 사이의 보간

$\tau\to\infty$ 는 균형 최적 수송이고 $\tau\to0$ 은 아무것도 옮기지 않는 해 $P=0$ 이다. 그 사이에서 어느 거리까지 옮길 가치가 있는지가 임계 반지름으로 정해진다.

제곱비용 $C=|x-y|^2$ 와 $\varepsilon=0$ 에서 질량 하나를 거리 $d$ 만큼 옮기는 값이 $d^2$ 이고 버리는 값이 대략 $2\tau$ 이므로, $d^2\gt 2\tau$ 이면 버린다. 유효 사거리 $\sqrt{2\tau}$ 가 이상치 강건성을 주고, 무시할 이상치의 범위가 $\tau$ 로 조절된다.

# 정의

## 불균형 문제

$a\in\mathbb R^n_{\gt 0}$ 과 $b\in\mathbb R^m_{\gt 0}$ 은 총질량이 달라도 된다. $C\in\mathbb R^{n\times m}\_{\ge0}$ 에 대해

$$
\mathrm{UOT}\_{\varepsilon,\tau}(a,b)=\min_{P\ge0}\ \langle C,P\rangle
+\varepsilon\thinspace\mathrm{KL}(P\thinspace\Vert\thinspace a\otimes b)
+\tau\thinspace\mathrm{KL}(P\mathbf 1\thinspace\Vert\thinspace a)+\tau\thinspace\mathrm{KL}(P^\top\mathbf 1\thinspace\Vert\thinspace b)
$$

로 둔다. 여기서 $\mathrm{KL}(\mu\Vert\nu)=\sum\mu_i\log\frac{\mu_i}{\nu_i}-\mu_i+\nu_i$ 로, 총질량이 다른 측도에도 뜻이 있는 형태를 쓴다. 마지막 두 항이 없으면 [Sinkhorn](sinkhorn.md) 문제이고, 그 항들의 계수를 무한대로 보내면 등식 제약이 복원된다.

목적함수가 $P$ 에 대해 강볼록하고 아래로 유계이므로 최소점이 유일하다.

## 쌍대와 스케일링 반복

쌍대 문제는 제약 없는 오목 최대화다.

$$
\max_{f,g}\ -\tau\sum_ia_i\big(e^{-f_i/\tau}-1\big)-\tau\sum_jb_j\big(e^{-g_j/\tau}-1\big)
-\varepsilon\sum_{i,j}a_ib_j\big(e^{(f_i+g_j-C_{ij})/\varepsilon}-1\big)
$$

최적해가 $P_{ij}=a_ib_j\thinspace e^{(f_i+g_j-C_{ij})/\varepsilon}$ 이고, 블록 좌표 상승법이 앞서 본 완화된 갱신이다.

$$
f_i\leftarrow-\lambda\varepsilon\log\sum_jb_je^{(g_j-C_{ij})/\varepsilon},\qquad
g_j\leftarrow-\lambda\varepsilon\log\sum_ia_ie^{(f_i-C_{ij})/\varepsilon},\qquad
\lambda=\frac\tau{\tau+\varepsilon}
$$

곱 형태로 쓰면 $u\leftarrow(a/Kv)^\lambda$ 이고 $v\leftarrow(b/K^\top u)^\lambda$ 다. 균형판과 코드가 한 글자 차이다.

## Hellinger–Kantorovich 거리

$\varepsilon=0$ 이고 두 벌점의 계수가 같으면, 이 최소값에서 거리가 나온다. 비용을 제곱거리 대신

$$
C(x,y)=-2\log\cos\big(\min(|x-y|,\tfrac\pi2)\big)
$$

로 잡으면 $\sqrt{\mathrm{UOT}}$ 가 양측도 공간 위의 거리가 되며 **Hellinger–Kantorovich 거리**(또는 Wasserstein–Fisher–Rao 거리)라 부른다. 가까운 질량은 수송으로, 먼 질량은 생성과 소멸로 처리하는 두 기하를 붙인 것이고, $\pi/2$ 에서 잘리는 것이 유효 사거리의 정확한 형태다.

# 성질

## 극한과 보간

- $\tau\to\infty$ : $\lambda\to1$ 이고 문제가 균형 엔트로피 정규화 최적 수송으로 수렴한다.
- $\tau\to0$ : 옮기는 것이 언제나 손해라 $P\to0$ 이다.
- $\varepsilon\to0$ : 엔트로피 흐림이 사라지고 Hellinger–Kantorovich 형태가 남는다.
- 총질량이 달라도 문제가 잘 정의되며, 최적해의 총질량은 $\min(\Vert a\Vert\_1,\Vert b\Vert\_1)$ 이하이고 $\tau$ 에 대해 단조증가한다.

## 알고리즘

반복 한 번의 비용이 균형판과 같은 $O(nm)$ 이고 로그 영역 안정화가 그대로 적용된다. $\lambda\lt 1$ 이 갱신을 축소해 Hilbert 사영 거리에서의 축약비가 균형판보다 작으므로, 같은 $\varepsilon$ 에서 더 빨리 수렴한다.

편향은 균형판과 같은 방식으로 다룬다. $\mathrm{UOT}\_{\varepsilon,\tau}(a,a)\ne0$ 이므로 Sinkhorn 발산과 똑같은 보정

$$
S_{\varepsilon,\tau}(a,b)=\mathrm{UOT}(a,b)-\tfrac12\mathrm{UOT}(a,a)-\tfrac12\mathrm{UOT}(b,b)+\text{(질량 보정항)}
$$

을 쓰며, 총질량이 다르면 상수항 보정이 하나 더 필요하다.

## 척도 의존과 거리 성질

- $\tau$ 는 자료의 척도에 민감하다. 유효 사거리가 $\sqrt{2\tau}$ 규모이므로 좌표를 바꾸면 $\tau$ 도 함께 바꿔야 한다.
- 주변분포가 정확히 복원되지 않는다. 그것이 목적이지만, 주변분포를 보존해야 하는 응용에서는 잘못된 도구다.
- $\mathrm{UOT}$ 자체는 거리가 아니다. 위에서 말한 특정 비용과 $\varepsilon=0$ 에서만 거리가 된다.

# 활용

## 이상치와 유효 사거리

원점 근처에 모인 두 분포에 멀리 떨어진 점 하나를 더하면, 균형 문제는 그 점의 질량을 그 거리만큼 옮겨야 하므로 비용이 그 점 하나로 결정된다. 질량 $0.2$ 를 거리 $10$ 옮기는 비용 $0.2\times10^2=20$ 이 원점 근처 점들의 기여인 $10^{-3}$ 규모를 덮는다.

불균형 문제에서는 유효 사거리 $\sqrt{2\tau}$ 가 이상치까지의 거리보다 작으면 그 질량이 옮겨지는 대신 소멸한다. 위 배치에서 $\tau=10$ 이면 $\sqrt{2\tau}\approx4.5\lt 10$ 이라 이상치로 가는 질량이 $10^{-5}$ 규모로 줄고 수송 비용도 같은 규모로 떨어진다.

대가는 버린 질량이다. 같은 $\tau=10$ 에서 최적해의 총질량은 $0.89$ 로, 원래 질량의 11 퍼센트가 사라진다. $\tau$ 를 더 줄이면 옮기는 것 자체가 손해가 되어 총질량이 계속 줄고 $\tau\to0$ 극한에 다가간다.

## 유전체학, 형상 정합, 생성모형

- **단세포 유전체학.** 시점이 다른 세포 집단을 잇는 궤적 추론에서 세포는 분열하고 죽는다. 총질량 보존이 물리적으로 틀린 가정이라 불균형 수송이 표준이다.
- **부분 매칭과 점구름 정합.** 겹치는 부분만 대응시키고 나머지는 버려야 하는 형상 정합에서 $\tau$ 가 겹침의 허용 범위를 준다.
- **강건한 생성모형 손실.** 이상치가 섞인 표본에서 균형 Sinkhorn 발산은 이상치에 끌려가지만, 불균형판은 자동으로 무시한다.
- **영역 적응.** 출발 영역과 도착 영역의 부류 비율이 다를 때 균형 제약이 틀린 대응을 강제한다. 제약을 풀면 비율 차이를 모형이 스스로 흡수한다.

[^1]: 불균형 문제의 정식화와 스케일링 반복은 L. Chizat, G. Peyré, B. Schmitzer, F.-X. Vialard, *Scaling Algorithms for Unbalanced Optimal Transport Problems*, Math. Comp. 87 (2018), 2563–2609. Hellinger–Kantorovich 거리는 같은 저자들의 *An Interpolating Distance between Optimal Transport and Fisher–Rao Metrics*, Found. Comput. Math. 18 (2018), 1–44, 및 M. Liero, A. Mielke, G. Savaré, Invent. Math. 211 (2018).

# 연관 문서

## 선수지식

- [Sinkhorn 알고리즘과 엔트로피 정규화](sinkhorn.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #measure_theory
