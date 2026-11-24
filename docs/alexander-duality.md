# Alexander 쌍대성

# 개요

**Alexander 쌍대성(Alexander duality)** 은 구면 $S^n$ 에서 콤팩트 집합 $K$ 를 뺀 공간의 호몰로지가 $K$ 자신의 코호몰로지로 정해진다는 정리다. 3 차원 공간에 끈을 매듭지어 양끝을 붙이면, 매듭이 아무리 복잡해도 끈을 한 번 감는 고리는 끈을 건드리지 않고는 풀 수 없고, 두 번 감는 고리는 한 번 감는 고리 두 개로 바뀐다. Alexander 쌍대성은 바깥 공간의 $i$ 차 호몰로지를 $K$ 의 $n-i-1$ 차 코호몰로지와 같다고 보여, 바깥 공간의 고리를 끈 쪽의 계산으로 센다.

# 직관

[Jordan 곡선 정리](jordan-curve-theorem.md)는 평면의 닫힌 곡선 $C$ 를 빼면 조각이 둘 남는다는 정리다. 구면 $S^2$ 에서 보면 $C$ 는 원과 위상동형이고, 남는 조각의 수에서 하나를 뺀 값 $1$ 은 원을 한 바퀴 도는 고리의 개수 $1$ 과 같다. 0 차원의 정보(조각 수)가 1 차원의 정보(원의 고리)로 정해진다.

$S^3$ 에 원 $K$ 를 넣으면 남은 공간은 한 조각이다. 바깥에서 $K$ 를 한 바퀴 감는 작은 고리 $m$ 을 잡으면, $K$ 가 매듭지어져 있어도 $m$ 은 $K$ 를 지나지 않고는 한 점으로 줄어들지 않는다. 바깥의 닫힌 고리 $c$ 마다 $c$ 가 $K$ 를 몇 번 감는지 세는 정수, 곧 얽힘수(linking number) $\mathrm{lk}(c,K)$ 가 정해지고, 고리를 호몰로지로 보면 $c$ 는 $m$ 을 $\mathrm{lk}(c,K)$ 번 돈 것과 같다. 그래서 바깥의 1 차 호몰로지는 $\mathbb Z$ 이고, 이 값은 $K$ 가 원이라는 것, 곧 $K$ 의 1 차 코호몰로지가 $\mathbb Z$ 라는 것에서 나온다.

두 예에서 바깥의 $i$ 차 정보가 $K$ 의 $n-i-1$ 차 정보로 정해진다. $S^2$ 에서는 $i=0$ 과 $1$, $S^3$ 에서는 $i=1$ 과 $1$ 이다.

# 정의

$K$ 가 $S^n$ 의 공집합이 아닌 진부분집합이고 콤팩트이며 국소 축약 가능(locally contractible)하면, 모든 $i$ 에 대해 다음 동형이 있다[^1].

$$
\tilde H_i(S^n\setminus K;\mathbb Z)\cong\tilde H^{n-i-1}(K;\mathbb Z)
$$

$\tilde H_i$ 는 축약 호몰로지, $\tilde H^j$ 는 축약 [코호몰로지](cohomology.md)다. 국소 축약 가능은 각 점의 모든 근방 안에 그 점에서 한 점으로 줄어드는 더 작은 근방이 있다는 조건이다. 유한 단체 복합체와 매끄러운 부분다양체는 이 조건을 만족한다.

직관 절의 두 예를 넣는다. $n=2$, $K=C$ 이면 $\tilde H_0(S^2\setminus C)\cong\tilde H^1(S^1)\cong\mathbb Z$ 이므로 조각이 둘이다. $n=3$ 이고 $K$ 가 매듭이면 $H_1(S^3\setminus K)\cong\tilde H^1(S^1)\cong\mathbb Z$ 이고 $H_2(S^3\setminus K)\cong\tilde H^0(S^1)=0$ 이다.

# 성질

## 증명의 요지

$U=S^n\setminus K$ 로 두고 쌍 $(S^n,U)$ 의 긴 완전열을 쓴다.

$$
\tilde H_{i+1}(S^n)\to H_{i+1}(S^n,U)\to\tilde H_i(U)\to\tilde H_i(S^n)
$$

$\tilde H_j(S^n)$ 은 $j=n$ 에서만 $0$ 이 아니므로 $i\le n-2$ 이면 가운데 사상이 동형이다. $i=n$ 이면 $U$ 가 콤팩트가 아닌 $n$ 차원 다양체라 $\tilde H_n(U)=0$ 이다. $i=n-1$ 이면 기본류가 아래 동형으로 $H^0(K)$ 의 상수 $1$ 로 가므로 몫이 축약 코호몰로지 $\tilde H^0(K)$ 다. 남은 것은 다음 동형이다.

$$
H_{j}(S^n,S^n\setminus K)\cong H^{n-j}(K)
$$

이것은 [Poincaré 쌍대성](poincare-duality.md)을 콤팩트 부분집합으로 넓힌 판본이다. 좌변은 $K$ 의 열린 근방 $V$ 를 줄여 가며 취한 극한 $\varinjlim H^{n-j}(V)$ 와 기본류의 cap 곱으로 동형이다. 국소 축약 가능 조건에서 이 극한이 $H^{n-j}(K)$ 와 같다.

## 매듭과 링크

$S^3$ 안에 서로 만나지 않는 원 $r$ 개로 된 링크(link) $L$ 을 넣으면 다음이 나온다.

$$
H_1(S^3\setminus L)\cong\mathbb Z^r,\qquad H_2(S^3\setminus L)\cong\mathbb Z^{r-1}
$$

$H_1$ 의 생성원은 각 성분을 한 번 감는 작은 고리다. 바깥의 고리 $c$ 를 $(\mathrm{lk}(c,K_1),\dots,\mathrm{lk}(c,K_r))$ 로 보내는 사상이 동형이다. 그래서 매듭 바깥의 호몰로지는 매듭을 구별하지 못하고, 매듭을 구별하려면 바깥의 [기본군](fundamental-group.md)이나 [매듭 불변량](knot-invariants.md)이 필요하다.

## 곡면의 매장

비가향 닫힌 곡면 $N$ 은 $\mathbb R^3$ 에 매장되지 않는다. $\mathbb R^3$ 에 매장되면 $S^3$ 에도 매장되고, Alexander 쌍대성으로 $\tilde H_0(S^3\setminus N)\cong H^2(N;\mathbb Z)\cong\mathbb Z/2$ 다. 축약 0 차 호몰로지는 자유 아벨 군이므로 $\mathbb Z/2$ 일 수 없어 모순이다[^1]. 사영평면과 Klein 병이 여기 든다.

같은 계산으로 $S^3$ 에 매장된 가향 닫힌 곡면은 $\tilde H_0\cong H^2\cong\mathbb Z$ 이므로 공간을 정확히 두 조각으로 나눈다.

## 국소 축약 가능 조건

국소 축약 가능하지 않은 $K$ 에서는 특이 코호몰로지로 쓴 동형이 성립하지 않는다. Warsaw 원(Warsaw circle)은 곡선 $y=\sin(1/x)$ 의 $0\lt x\le 1$ 부분과 그 극한 선분을 호 하나로 이은 평면 집합이다. 이 집합은 평면을 두 조각으로 나누지만 특이 코호몰로지 $H^1$ 은 $0$ 이다. 특이 코호몰로지를 Čech 코호몰로지(Čech cohomology) $\check H^{n-i-1}(K)$ 로 바꾸면 모든 콤팩트 $K$ 에서 동형이 성립하고, Warsaw 원의 $\check H^1$ 은 $\mathbb Z$ 다.

Alexander 쌍대성은 호몰로지만 본다. Alexander 뿔 달린 구면(Alexander horned sphere) $\Sigma\subset S^3$ 은 $S^2$ 와 위상동형이고 바깥의 한 성분이 단일 연결이 아니다. 그래도 $\tilde H_i(S^3\setminus\Sigma)\cong\tilde H^{2-i}(S^2)$ 는 $i=0$ 에서만 $\mathbb Z$ 이므로, 바깥은 두 조각이고 각 조각의 축약 호몰로지는 모두 $0$ 이다.

# 활용

- Jordan–Brouwer 분리 정리. $K$ 가 $S^{n-1}$ 과 위상동형이면 $\tilde H_0(S^n\setminus K)\cong\mathbb Z$ 이고 나머지가 $0$ 이므로 바깥이 두 조각이다. [Jordan 곡선 정리](jordan-curve-theorem.md)의 증명이 Mayer–Vietoris 로 계산한 값과 같다.
- 매듭 이론. 매듭 바깥의 $H_1\cong\mathbb Z$ 가 무한 순환 덮개를 정하고, 그 덮개의 호몰로지에서 [Alexander 다항식](alexander-polynomial.md)이 정의된다. 링크 바깥의 $H_1$ 과 얽힘수의 대응은 Seifert 행렬의 성분을 정하는 데 쓰인다.
- 조합적 Alexander 쌍대성. 정점 $m$ 개 위의 단체 복합체 $\Delta$ 에 대해, 여집합이 $\Delta$ 의 면이 아닌 부분집합들로 된 Alexander 쌍대 복합체 $\Delta^\vee$ 는 $\tilde H_i(\Delta^\vee)\cong\tilde H^{m-i-3}(\Delta)$ 를 만족한다. 단체의 경계 $\partial\Delta^{m-1}$, 곧 구면 $S^{m-2}$ 안에 $\Delta$ 를 넣은 경우의 Alexander 쌍대성이고, [Stanley–Reisner 환](stanley-reisner-rings.md)의 Eagon–Reiner 정리(Eagon–Reiner theorem)에서 쓰인다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 3.3 절 Theorem 3.44 와 Corollary 3.46.

# 연관 문서

## 선수지식

- [Jordan 곡선 정리](jordan-curve-theorem.md)
- [Poincaré 쌍대성](poincare-duality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #combinatorics #theorem
