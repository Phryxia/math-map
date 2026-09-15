# 결정점과정

# 개요

공간에 무작위로 놓인 점들의 집합을 점과정이라 한다. 가장 단순한 것은 점들이 서로 완전히 무관한 Poisson 과정이지만, 자연에서 관찰되는 배치는 대개 그렇지 않다. 무작위 행렬의 [고윳값](eigenvalues.md)은 서로 밀어내고, 결정 속 전자도, 나무들의 위치도 그렇다.

**결정점과정**(determinantal point process)은 점들 사이의 모든 상관을 하나의 핵 $K$ 로 압축하고, $k$ 개의 점이 특정 자리에 함께 있을 밀도를

$$
\rho_k(x_1,\dots,x_k) = \det\bigl[K(x_i,x_j)\bigr]_{i,j=1}^{k}
$$

라는 [행렬식](determinants.md)으로 쓴다. 행렬식 하나가 모든 차수의 상관을 담으므로 계산이 놀랍도록 잘 풀린다. 그리고 행렬식은 인자가 비슷해지면 0 으로 가므로 점들이 자동으로 서로를 밀어낸다. 반발하는 무작위 배치를 다루는 표준 모형이며, [Tracy–Widom 분포](tracy-widom.md)가 Airy 핵의 결정점과정에서 나온다.

유한 개의 점을 보는 동안은 위의 유한 행렬식으로 충분하지만, "이 구간에 점이 하나도 없을 확률" 처럼 구간 전체를 한꺼번에 묻는 순간 무한차원 판본인 [Fredholm 행렬식](fredholm-determinant.md)이 필요해진다. 상관함수에서 간격 확률로 넘어가는 이 자리가 결정점과정의 계산이 실제로 이루어지는 곳이다.

# 직관

## 행렬식이 반발을 만든다

두 점이 아주 가까우면 $K(x_1,\cdot)$ 과 $K(x_2,\cdot)$ 이 거의 같은 함수이므로 행렬의 두 행이 거의 같아지고 행렬식이 0 에 가까워진다. 즉

$$
\rho_2(x,y) = K(x,x)K(y,y) - K(x,y)^2 \le \rho_1(x)\rho_1(y)
$$

가 항상 성립한다. 두 점을 함께 볼 확률이 독립일 때보다 반드시 작다. 반발이 모형의 가정이 아니라 행렬식이라는 형태에서 저절로 따라 나온다는 점이 핵심이다.

같은 이유로 결정점과정은 **양의** 상관을 표현하지 못한다. 뭉치는 점들을 모형화하려면 다른 틀이 필요하다. 이 제약이 오히려 이론을 강하게 만든다. 반발이 구조적으로 보장되므로 개수의 집중, 큰 편차, 극한정리가 모두 깔끔하게 나온다.

## Pauli 배타원리와 같은 수학

자유 페르미온의 다체 파동함수는 Slater 행렬식이고, 그 절댓값 제곱에서 입자 위치의 상관이 정확히 위 형태로 나온다. 두 전자가 같은 자리에 있을 밀도가 0 인 것이 배타원리이고, 행렬식의 두 행이 같아지는 것이 그 수학적 내용이다. 결정점과정은 배타원리를 확률론의 언어로 옮긴 것이라 해도 좋다.

# 정의

## 상관함수와 핵

국소유한 점과정의 $k$ 차 상관함수 $\rho_k$ 를 "서로 다른 $k$ 개의 점이 $dx_1,\dots,dx_k$ 안에 하나씩 있을 확률이 $\rho_k\,dx_1\cdots dx_k$" 로 정의한다. 모든 $k$ 에 대해

$$
\rho_k(x_1,\dots,x_k) = \det\bigl[K(x_i,x_j)\bigr]
$$

를 만족하는 핵 $K$ 가 있으면 이 과정을 **결정점과정**이라 한다. $K$ 가 자기수반 작용소이고 $0 \preceq K \preceq I$ 이면 그런 과정이 존재하고 유일하다는 것이 Macchi–Soshnikov 정리다. 위 부등식이 필요한 이유는 $\rho_k \ge 0$ 이어야 하기 때문이며, $K$ 의 고윳값이 1 을 넘으면 어떤 $k$ 에서 행렬식이 음수가 된다.

## 유한 집합 위의 결정점과정

기저집합이 유한하면 모든 것이 행렬 계산이 된다. $N\times N$ 행렬 $K$ 에 대해 뽑히는 부분집합 $S$ 의 확률이

$$
\Pr[A \subseteq S] = \det K_A
$$

로 주어진다($K_A$ 는 $A$ 로 지표된 주부분행렬). 기계학습에서는 $L$ 앙상블 형식

$$
\Pr[S] = \frac{\det L_S}{\det(I+L)}, \qquad K = L(I+L)^{-1}
$$

을 더 자주 쓴다. $L$ 을 자료점 사이의 유사도 행렬로 두면 $\det L_S$ 가 그 자료점들이 펼치는 부피가 되어, 서로 다른 항목을 함께 고를수록 확률이 커진다.

## 표준적인 핵 두 개

무작위 행렬에서 나오는 두 핵이 특히 중요하다. 스펙트럼 **안쪽**을 확대하면 sine 핵

$$
K_{\sin}(x,y) = \frac{\sin\pi(x-y)}{\pi(x-y)}
$$

이 나오고, **가장자리**를 $N^{2/3}$ 배로 확대하면 [Airy 함수](airy-functions.md)로 만든 Airy 핵

$$
K_{\mathrm{Ai}}(x,y) = \frac{\operatorname{Ai}(x)\operatorname{Ai}'(y)-\operatorname{Ai}'(x)\operatorname{Ai}(y)}{x-y}
$$

가 나온다. 둘 다 사영작용소의 핵이다. sine 핵은 $[-\tfrac12,\tfrac12]$ 위 Fourier 모드로의 사영, Airy 핵은 Airy 변환에서 음의 스펙트럼으로의 사영이다.

# 성질

## 개수는 독립 베르누이의 합이다

영역 $B$ 로 제한한 작용소 $K_B$ 의 고윳값을 $\lambda_1,\lambda_2,\dots$ 라 하면, $B$ 안의 점 개수가

$$
\#(B) \;\overset{d}{=}\; \sum_i \mathrm{Bern}(\lambda_i)
$$

로 독립 베르누이 확률변수들의 합과 같은 분포를 가진다. 점들 자체는 독립이 아닌데 개수는 독립합으로 분해된다는 것이 결정점과정의 가장 유용한 성질이다. 여기서 $\mathbb E\#(B) = \operatorname{tr}K_B$ 와 $\operatorname{Var}\#(B) = \sum\lambda_i(1-\lambda_i) \le \mathbb E\#(B)$ 가 바로 따라 나온다. 분산이 평균보다 작다는 것이 반발의 정량적 표현이고, 집중부등식과 중심극한정리도 이 분해에서 나온다.

$K_B$ 가 사영이면 모든 $\lambda_i$ 가 0 또는 1 이라 개수가 결정론적이다. $N$ 차원 사영핵의 결정점과정이 언제나 정확히 $N$ 개의 점을 내놓는 이유다.

## 빈 공간 확률

구간 $(s,\infty)$ 에 점이 하나도 없을 확률이

$$
\Pr[\#(s,\infty) = 0] = \det\bigl(I - K\bigr)_{L^2(s,\infty)}
$$

라는 Fredholm 행렬식으로 쓰인다. 최대 점의 분포함수가 곧 이 값이므로, Airy 핵에 적용하면 [Tracy–Widom 분포](tracy-widom.md) $F_2$ 가 정의된다. 최댓값의 분포를 구하는 문제가 작용소의 행렬식 계산으로 바뀌는 것이 이 이론이 무작위 행렬에서 하는 일이다.

## 무작위 행렬 바깥의 예

- **균등 생성수형도.** 유한 그래프의 생성수형도를 균등하게 뽑을 때, 뽑힌 변들의 집합이 전달 전류 행렬을 핵으로 하는 결정점과정이다(Burton–Pemantle). 이 사실에서 변들이 음의 상관을 가진다는 것이 바로 나온다.
- **비교차 경로와 타일링.** 겹치지 않는 격자 경로들의 위치, 마름모 타일링의 무늬가 결정점과정을 이루며, 북극권 현상이 이 틀에서 증명된다.
- **자료의 다양성 선택.** 추천이나 요약에서 서로 비슷하지 않은 항목을 고르고 싶을 때 $L$ 앙상블에서 표본을 뽑는다. 반발이 곧 다양성이다.

# 활용

## 이산 sine 핵을 표본추출한다

연쇄법칙으로 결정점과정을 정확히 표본추출할 수 있다. 지표를 하나씩 보면서 조건부 확률로 뽑고, 뽑았는지 여부에 따라 핵을 Schur 보완으로 갱신하면 된다. 갱신식의 분모만 다르다.

```python
import math, random

def sine_kernel(N, rho):
    """정수 격자 위의 이산 sine 핵. 밀도 rho 의 사영작용소."""
    K = [[rho if i == j else math.sin(math.pi * rho * (i - j)) / (math.pi * (i - j))
          for j in range(N)] for i in range(N)]
    return K

def sample(K0, rng):
    """연쇄법칙 표본추출. 뽑으면 분모가 K_ii, 안 뽑으면 K_ii - 1."""
    N = len(K0)
    K = [row[:] for row in K0]
    S = []
    for i in range(N):
        take = rng.random() < K[i][i]
        if take:
            S.append(i)
        den = K[i][i] - (0.0 if take else 1.0)
        col = [K[r][i] for r in range(N)]
        row = K[i][:]
        for r in range(N):
            for c in range(N):
                K[r][c] -= col[r] * row[c] / den
    return S

N, rho, S = 30, 0.5, 1000
rng = random.Random(11)
K = sine_kernel(N, rho)
total = adj = far = 0
for _ in range(S):
    s = set(sample(K, rng))
    total += len(s)
    adj += sum(1 for i in range(N - 1) if i in s and i + 1 in s)
    far += sum(1 for i in range(N - 2) if i in s and i + 2 in s)

pair = lambda d: rho ** 2 - (math.sin(math.pi * rho * d) / (math.pi * d)) ** 2
print(f"평균 점 개수   {total/S:.3f}   (tr K = {rho*N:.1f})")
print(f"거리 1 쌍 비율 {adj/(S*(N-1)):.4f}   이론 {pair(1):.4f}   독립이면 {rho**2:.4f}")
print(f"거리 2 쌍 비율 {far/(S*(N-2)):.4f}   이론 {pair(2):.4f}   독립이면 {rho**2:.4f}")
```

세 줄이 각각 다른 것을 보여 준다. 점 개수는 평균 $15.002$ 로 $\operatorname{tr}K = 15$ 와 맞는다. 사영핵이라 이론적으로는 표본마다 정확히 $15$ 개여야 하며, 남은 $0.002$ 는 Schur 보완을 반복하면서 쌓인 수치 오차다.

거리 1 인 쌍은 $0.147$ 로, 독립이라면 나왔을 $0.25$ 보다 훨씬 작다. 바로 옆자리를 서로 강하게 피한다는 뜻이고, 이론값 $\rho^2 - K(0,1)^2 = 0.1487$ 과 맞는다. 반면 거리 2 인 쌍은 $0.252$ 로 독립값 $0.25$ 와 사실상 같다. $\rho = 1/2$ 에서 $K(0,2) = \sin(\pi)/(2\pi) = 0$ 이라 상관이 정확히 사라지기 때문이다. 반발이 모든 거리에서 일률적으로 작동하는 것이 아니라 핵이 지정한 대로 정확히 작동한다는 것을 보여 주는 예다.

## 왜 이 틀이 쓸모 있는가

첫째, 계산이 닫힌다. 개수의 분포, 빈 공간 확률, 최대·최소의 분포가 모두 작용소의 고윳값이나 Fredholm 행렬식으로 쓰이므로 극한을 취하기 쉽다. 무작위 행렬의 국소 통계에 대한 정리 대부분이 이 경로로 증명된다.

둘째, 표본추출이 다항시간이다. 위 알고리즘은 $O(N^3)$ 이고, 스펙트럼 분해를 이용한 판본은 표본마다 $O(N k^2)$ 이다. 반발하는 배치를 정확히 뽑을 수 있는 모형이 드물기 때문에 실무에서 값어치가 크다.

셋째, 서로 무관해 보이는 대상들이 같은 틀에 들어온다. 고윳값, 생성수형도, 타일링, 비교차 경로가 전부 결정점과정이고, 그래서 한쪽에서 증명한 극한정리가 다른 쪽으로 옮겨 간다. Tracy–Widom 분포가 여러 분야에 동시에 나타나는 이유도 결국 이 공유 구조다.[^1]

[^1]: J. Ben Hough, Manjunath Krishnapur, Yuval Peres, Bálint Virág, *Determinantal Processes and Independence*, Probability Surveys 3 (2006), 206–229. 정의와 존재 정리, 개수의 독립 베르누이 분해, 표본추출 알고리즘.

# 연관 문서

## 선수지식

- [Fredholm 행렬식](fredholm-determinant.md)
- [확률변수와 기댓값](random-variables.md)

## 더 알아보기

- [Tracy–Widom 분포와 Airy 핵](tracy-widom.md)

#probability #linear_algebra
