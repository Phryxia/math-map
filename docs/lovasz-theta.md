# Lovász 세타 함수

# 개요

그래프의 최대 독립집합 크기 $\alpha(G)$ 와 채색수 $\chi(G)$ 는 둘 다 계산이 NP-난해다. [그래프 색칠](graph-coloring.md)의 부등식 $\omega(G)\le\chi(G)$ 는 두 값 사이의 간격이 얼마든지 커질 수 있어 쓸모가 제한된다.

Lovász 는 1979 년에 이 둘 사이에 끼면서 다항시간에 계산되는 양을 찾았다.

$$
\alpha(G)\ \le\ \vartheta(G)\ \le\ \chi(\bar G)
$$

양 끝은 NP-난해이고 가운데는 [반정부호 계획법](semidefinite-programming.md)으로 임의의 정밀도까지 계산된다. 샌드위치 정리라 불리는 이 결과가 조합 최적화에서 반정부호 완화를 쓴 첫 사례이며, 최대 절단의 0.878 근사보다 15 년 앞선다.

$\vartheta$ 의 출처는 정보이론이다. Shannon 이 1956 년에 무오류 용량을 정의하면서 $C_5$ 의 값을 결정하지 못했고[^1], Lovász 가 $\vartheta$ 를 도구로 그 값이 $\sqrt5$ 임을 증명했다[^2].

# 직관

## 독립집합의 벡터 완화

각 정점 $i$ 에 단위벡터 $u_i$ 를 배정하되 인접한 두 정점의 벡터는 직교하게 하고, 모든 벡터와 각을 이루는 고정된 단위벡터 $c$ 를 하나 잡는다.

여집합 관계를 뒤집으면 독립집합 $S$ 에 대응하는 벡터들이 서로 직교하는 상황을 만들 수 있다. 직교하는 단위벡터 $k$ 개에 대해 $\sum\langle c,u_i\rangle^2\le1$ 이므로, 각 $\langle c,u_i\rangle^2$ 가 $1/t$ 이상이면 $k\le t$ 다. 이 $t$ 의 최소값이 $\vartheta$ 이고 $\alpha(G)\le\vartheta(G)$ 가 따라온다.

정점을 고르거나 말거나 하는 0–1 결정이 정점에 벡터를 놓는 문제로 완화되면서 실행가능 영역이 볼록해지고 최적화가 다항시간이 된다.

## 클릭 덮개에서 오는 상계

$\bar G$ 를 $k$ 개의 색으로 칠하는 것은 $G$ 를 $k$ 개의 클릭으로 덮는 것이다. 각 클릭에 벡터 하나씩을 배정하면 위 완화의 실행가능해가 되고 그 값이 $k$ 이므로 $\vartheta(G)\le\chi(\bar G)$ 다. 정수 문제 둘이 하나의 볼록 완화를 사이에 두고 아래위로 놓인다.

## 강곱에서의 곱셈성

Shannon 용량을 다루려면 강곱 $G\boxtimes H$ 에서의 행동이 필요하다. $\alpha$ 는 곱셈적이지 않다. $\alpha(C_5)=2$ 인데 $\alpha(C_5\boxtimes C_5)=5$ 다.

$\vartheta$ 는 곱셈적이다. 벡터 표현의 텐서곱이 실행가능해가 되므로 $\vartheta(G\boxtimes H)=\vartheta(G)\vartheta(H)$ 이고, 따라서 $\Theta(G)=\lim\alpha(G^{\boxtimes k})^{1/k}\le\vartheta(G)$ 가 극한 계산 없이 상계를 준다.

# 정의

## 직교 표현

$G=(V,E)$ 의 직교 표현은 각 정점에 배정된 단위벡터 $u_i\in\mathbb R^d$ 의 모임으로 $ij\notin E$ 일 때 $\langle u_i,u_j\rangle=0$ 인 것이다. 인접하지 않은 정점이 직교한다는 규약을 쓴다.

## 세타 함수

$$
\vartheta(G)=\min_{\lbrace u_i\rbrace,\thinspace c}\ \max_{i\in V}\frac1{\langle c,u_i\rangle^2}
$$

$\lbrace u_i\rbrace$ 는 $G$ 의 직교 표현이고 $c$ 는 단위벡터다. 모든 정점이 $c$ 와 되도록 가까운 방향을 갖도록 표현을 고르는 문제다.

## 반정부호 계획 형식

$$
\vartheta(G)=\max\ \lbrace\thinspace\mathrm{tr}(JX)\ :\ X\succeq0,\ \mathrm{tr}(X)=1,\ X_{ij}=0\ \ \forall ij\in E\thinspace\rbrace
$$

$J$ 는 모든 성분이 1 인 행렬이다. $X$ 를 랭크 1 인 $xx^{\mathsf T}$ 로 제한하면 독립집합 문제 자체가 되고, 랭크 제약을 푼 것이 이 완화다.

쌍대는 고윳값 문제다.

$$
\vartheta(G)=\min\ \lbrace\thinspace\lambda_{\max}(A)\ :\ A=A^{\mathsf T},\ A_{ij}=1\ \text{if}\ i=j\ \text{or}\ ij\notin E\thinspace\rbrace
$$

간선에 해당하는 성분만 자유롭게 고르고 나머지는 1 로 고정한 뒤 최대고윳값을 최소화한다. 강쌍대성이 성립해 두 값이 같다.

## Shannon 용량

혼동 그래프 $G$ 에서 서로 혼동되지 않는 길이 $k$ 의 부호어 최대 개수가 $\alpha(G^{\boxtimes k})$ 다. 무오류 용량은 다음이다.

$$
\Theta(G)=\lim_{k\to\infty}\alpha(G^{\boxtimes k})^{1/k}=\sup_k\alpha(G^{\boxtimes k})^{1/k}
$$

Fekete 보조정리로 극한이 존재하고 $\alpha(G)\le\Theta(G)$ 다.

# 성질

## 샌드위치 정리

$$
\alpha(G)\le\Theta(G)\le\vartheta(G)\le\chi(\bar G)
$$

가운데 항만 임의의 정밀도까지 다항시간에 계산된다. $\vartheta$ 는 무리수일 수 있고 $C_5$ 의 $\sqrt5$ 가 그 예이므로, 다항시간 계산에는 정밀도 단서가 붙는다.

## 완전그래프에서의 붕괴

$G$ 가 완전그래프(perfect graph)면 $\alpha(G)=\vartheta(G)=\chi(\bar G)$ 다. 완전그래프의 독립집합과 채색수를 다항시간에 계산하는 알려진 유일한 방법이 이것이다. 강한 완전그래프 정리(2002)가 완전그래프를 구조적으로 특징지은 뒤에도 다항시간 채색 알고리즘은 $\vartheta$ 를 경유한다.

## 곱셈성과 보그래프

$$
\vartheta(G\boxtimes H)=\vartheta(G)\thinspace\vartheta(H),\qquad
\vartheta(G)\thinspace\vartheta(\bar G)\ge n
$$

정점추이적 그래프에서 둘째 부등식은 등호다. $C_5$ 는 자기 보그래프와 동형이므로 $\vartheta(C_5)^2=5$ 이고 $\vartheta(C_5)=\sqrt5$ 다.

$\alpha(C_5\boxtimes C_5)=5$ 인 부호가 존재하므로 $\Theta(C_5)\ge\sqrt5$ 이고, 샌드위치 정리의 $\Theta(C_5)\le\sqrt5$ 와 합쳐 값이 확정된다.

$C_7$ 의 Shannon 용량은 결정되지 않았다[^2]. 상계 $\vartheta(C_7)\approx3.3177$ 과 하계 $3.2$ 근처 사이가 비어 있다.

## 홀수 순환의 값

홀수 순환은 정점추이적이라 쌍대 형식의 자유 성분을 모두 같은 값으로 두어도 최적이다. 한 모수짜리 볼록 문제가 되어 고윳값 계산으로 풀린다.

```python
import numpy as np
from math import cos, pi

def cycle_adj(n):
    A = np.zeros((n, n))
    for i in range(n):
        A[i, (i + 1) % n] = A[(i + 1) % n, i] = 1
    return A

def theta_cycle(n):
    """홀수 순환 C_n 은 정점추이적이라 A = J + s·Adj 한 모수로 최적화가 끝난다.
       theta(G) = min { lambda_max(A) : A_ij = 1 for i=j or ij not in E }."""
    J, Adj = np.ones((n, n)), cycle_adj(n)
    lo, hi = -5.0, 0.0
    for _ in range(200):                         # 볼록 함수의 삼분 탐색
        m1, m2 = lo + (hi - lo) / 3, hi - (hi - lo) / 3
        f = lambda s: np.linalg.eigvalsh(J + s * Adj).max()
        if f(m1) < f(m2): hi = m2
        else: lo = m1
    s = (lo + hi) / 2
    return np.linalg.eigvalsh(J + s * Adj).max()

for n in (5, 7, 9, 11):
    print(f"C_{n:>2}: alpha = {n // 2} <= theta = {theta_cycle(n):.6f} <= "
          f"chi(complement) = {(n + 1) // 2}")

# C_ 5: alpha = 2 <= theta = 2.236068 <= chi(complement) = 3
# C_ 7: alpha = 3 <= theta = 3.317667 <= chi(complement) = 4
# C_ 9: alpha = 4 <= theta = 4.360090 <= chi(complement) = 5
# C_11: alpha = 5 <= theta = 5.386303 <= chi(complement) = 6
```

닫힌 형태는 $\vartheta(C_n)=n\cos(\pi/n)/(1+\cos(\pi/n))$ 이다. 샌드위치의 양 끝이 $\lfloor n/2\rfloor$ 와 $\lceil n/2\rceil$ 로 1 만큼 벌어져 있고 그 사이의 $\vartheta$ 는 무리수다.

$n$ 이 커지면 $\vartheta(C_n)/\alpha(C_n)\to1$ 이다. 무작위 그래프에서는 $\alpha(G)\approx2\log_2n$ 인데 $\vartheta(G)\approx\sqrt n$ 이라 간격이 다항식 규모로 벌어지므로, 완화의 품질은 그래프에 크게 의존한다.

## 근사 한계

$\vartheta$ 는 $\alpha$ 를 $n^{1-\epsilon}$ 배 이내로 근사하지 못하며, 무작위 그래프가 그 간격을 실현한다.

더 정밀한 완화는 SDP 에 유효부등식을 더한 $\vartheta'$ 이나 $\vartheta^+$ , 또는 Lasserre 계층이다. 계층을 $r$ 단계 올리면 $n^{O(r)}$ 크기의 SDP 가 되지만 독립집합 문제에서는 상수 단계로 근사비가 크게 개선되지 않는다는 하계가 있다. 유일 게임 추측 아래에서는 $\vartheta$ 계열의 완화가 최선이라는 결과들이 알려져 있다.

# 활용

## 무오류 부호화

[채널 부호화 정리](channel-coding.md)의 용량은 오류 확률을 0 으로 보내는 극한에서 정의되고, 무오류 용량은 오류를 정확히 0 으로 요구한다.

$\vartheta$ 는 무오류 용량의 일반 상계 가운데 가장 쓸 만한 것이다. Shannon 의 분수 클릭 덮개수 상계보다 언제나 좋거나 같고 $C_5$ 를 비롯한 여러 그래프에서 정확하다. 얽힘을 허용한 양자 무오류 용량의 상계로도 같은 양이 쓰인다.

## 완전그래프와 조합 최적화

완전그래프에서 독립집합, 클릭, 채색, 클릭 덮개가 모두 다항시간에 풀린다. 구간 그래프, 현 그래프, 이분그래프의 여러 변형이 완전그래프이므로 스케줄링과 자원 배정 문제의 상당수가 이 틀에 든다. 보통 완화는 근사만 주지만 완전그래프에서는 완화가 타이트하다.

## 부호와 설계의 상계

$\vartheta$ 를 연관 스킴 위의 부호에 적용하면 Delsarte 의 선형계획 상계가 나온다. 오류정정부호 크기의 고전적 상계들이 이 틀에서 통일되고, 반정부호 계획으로 강화하면 더 좋은 상계가 나온다.

구 채우기 밀도의 상계를 주는 Cohn–Elkies 선형계획법도 같은 구조다. 8 차원과 24 차원에서 이 상계가 정확히 달성됨을 Viazovska 가 2016 년에 증명했다.

## 양자 문맥성

그래프의 정점을 측정 결과로 보고 비호환 결과를 간선으로 연결하면 $\vartheta$ 가 문맥성 부등식의 최대 양자 위반값과 일치한다. Bell 부등식의 고전 한계가 $\alpha$ , 양자 한계가 $\vartheta$ , 상대론적 인과성만 요구한 한계가 분수 채색수에 대응한다.

[^1]: C. E. Shannon, "The zero error capacity of a noisy channel", IRE Transactions on Information Theory 2 (1956), 8–19. 무오류 용량의 정의와 $C_5$ 가 미결로 남는다는 서술이 여기 있다.
[^2]: L. Lovász, "On the Shannon capacity of a graph", IEEE Transactions on Information Theory 25 (1979), 1–7. $\vartheta$ 의 정의, $\Theta(C_5)=\sqrt5$ 의 증명, 그리고 $C_7$ 을 비롯한 큰 홀수 순환의 값이 결정되지 않는다는 서술이 있다.

# 연관 문서

## 선수지식

- [반정부호 계획법과 최대 절단](semidefinite-programming.md)
- [그래프 색칠](graph-coloring.md)

## 더 알아보기

- [완전그래프와 강한 완전그래프 정리](perfect-graphs.md)

#optimization #graph_theory #information_theory
