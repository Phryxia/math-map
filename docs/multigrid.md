# 다중격자

# 개요

**다중격자(multigrid)** 는 촘촘한 격자와 성긴 격자를 오가며 격자 위의 방정식을 푸는 반복법이다. 금속판의 온도를 격자점마다 이웃의 평균으로 고치는 반복으로 구하면, 들쭉날쭉한 오차는 몇 번 만에 사라지지만 판 전체에 걸친 완만한 오차는 수천 번 반복해도 남는다. 같은 완만한 오차가 성긴 격자에서는 들쭉날쭉한 오차가 되어 몇 번의 반복으로 사라진다. 다중격자는 격자를 여러 단계로 쌓아 단계마다 그 단계에서 들쭉날쭉한 오차를 지워, 미지수 개수에 비례하는 비용으로 방정식을 푼다.

# 직관

구간 $\lbrack 0,1\rbrack$ 을 간격 $h=1/8$ 로 나눈 안쪽 일곱 점에서 $-u''=f$ 를 차분으로 바꾼 계 $Ax=b$ 를 반복법으로 푼다. 반복은 각 점의 값을, 자기 값과 이웃 두 점 평균의 평균으로 고친다. 근사의 오차 $e$ 는 $f=0$ 일 때의 같은 반복을 따르고, 양 끝 바깥의 값은 $0$ 이다.

오차가 들쭉날쭉한 $e=(1,-1,1,-1,1,-1,1)$ 이면 안쪽 점마다 이웃 평균이 자기 값의 반대 부호여서, 한 번의 반복 뒤 오차가 $(1/4,0,0,0,0,0,1/4)$ 이 된다. 오차가 완만한 $e_j=\sin(j\pi/8)$, 곧 약 $(0.38,\thinspace 0.71,\thinspace 0.92,\thinspace 1,\thinspace 0.92,\thinspace 0.71,\thinspace 0.38)$ 이면 이웃 평균이 자기 값과 거의 같다. 한 번의 반복은 오차에 $(1+\cos(\pi/8))/2\approx 0.96$ 을 곱할 뿐이다. 정사각 격자의 Poisson 방정식(Poisson equation)에서도 같은 일이 나서, 가장 완만한 오차는 한 번에 $1-O(h^2)$ 배로만 줄어든다.

완만한 오차를 짝수 번째 점 셋, 곧 간격 $1/4$ 의 격자에서 보면 $(0.71,\thinspace 1,\thinspace 0.71)$ 이다. 이 격자에서는 같은 반복이 오차에 $(1+\cos(\pi/4))/2\approx 0.85$ 를 곱하고, 한 단계 더 성긴 간격 $1/2$ 의 격자에는 점이 하나뿐이어서 그 방정식은 바로 풀린다. 격자를 성기게 할수록 같은 오차가 더 들쭉날쭉해지고 미지수는 절반으로 준다. 2차원 격자에서는 미지수가 4분의 1로 준다.

# 정의

## 완화

계 $Ax=b$ 의 현재 근사 $x$ 에 간단한 반복을 $\nu$ 번 적용하는 것을 **완화(relaxation)** 라 한다. $D$ 가 $A$ 의 대각부분일 때

$$
x\mapsto x+\omega D^{-1}(b-Ax)
$$

를 **감쇠 Jacobi 반복(damped Jacobi iteration)** 이라 한다. 직관 절의 반복은 $\omega=1/2$ 인 감쇠 Jacobi 반복이다. 완화가 오차에 곱하는 행렬을 $S$ 라 쓰면 오차는 $e\mapsto S^{\nu}e$ 로 바뀐다. 감쇠 Jacobi 반복이면 $S=I-\omega D^{-1}A$ 다.

## 격자 사이의 옮김

촘촘한 격자의 벡터를 성긴 격자로 보내는 [선형사상](linear-maps.md) $R$ 을 **제한(restriction)**, 반대 방향의 $P$ 를 **보간(prolongation)** 이라 한다. 성긴 격자의 계수행렬 $A_c$ 를 다음과 같이 정한 것을 **Galerkin 곱(Galerkin product)** 이라 한다.

$$
A_c=RAP
$$

직관 절의 일곱 점에서 간격 $1/4$ 의 세 점으로 갈 때, 보간 $P$ 는 성긴 점의 값을 그 자리에 놓고 사이의 점에 양옆 값의 평균을 놓는다. 제한 $R$ 은 성긴 점 $2i$ 에 $(e_{2i-1}+2e_{2i}+e_{2i+1})/4$ 를 놓는다. 이때 $R=P^{\top}/2$ 이고, $RAP$ 는 간격 $2h$ 로 같은 차분을 한 $3\times 3$ 행렬이다.

## V 사이클

완화하고, 잔차(residual)를 성긴 격자로 제한해 보정을 구하고, 그 보정을 보간해 더한 뒤 다시 완화하는 절차를 재귀로 쓴 것을 **V 사이클(V-cycle)** 이라 한다. 앞의 완화를 사전 완화(pre-smoothing), 뒤의 완화를 사후 완화(post-smoothing)라 한다.

```javascript
function vcycle(level, b, x) {
  if (level === coarsest) return solveDirect(A[level], b)

  x = relax(A[level], b, x, nu1)              // 사전 완화
  const r = subtract(b, apply(A[level], x))   // 잔차
  const rc = restrict(level, r)               // 성긴 격자로

  const ec = vcycle(level + 1, rc, zeros(rc.length))

  x = add(x, prolong(level, ec))              // 보정을 가는 격자로 올려 더한다
  return relax(A[level], b, x, nu2)           // 사후 완화
}
```

직관 절의 예에서 V 사이클은 점 일곱 개, 셋, 하나의 세 단계를 내려갔다 올라오고, 점 하나인 단계는 직접 푼다.

성긴 단계에서 재귀 호출을 두 번 하면 W 사이클(W-cycle)이고, 가장 성긴 격자에서 시작해 한 단계씩 내려오며 보간한 값을 초기 근사로 쓰면 [완전 다중격자](full-multigrid.md)다.

# 성질

## 사이클 한 번의 연산량

차원 $d$ 에서 격자 간격을 두 배로 늘리면 미지수가 $2^{-d}$ 배가 된다. 각 단계의 완화 비용이 그 단계 미지수에 비례하므로 한 사이클의 비용은 다음 등비급수로 묶인다.

$$
c\thinspace n\thinspace(1+2^{-d}+2^{-2d}+\dots)=\frac{c\thinspace n}{1-2^{-d}}
$$

한 사이클이 $O(n)$ 이고 사이클 수가 $n$ 과 무관하면 전체가 $O(n)$ 이다.

## 수렴

다음 두 조건을 각각 완화 성질(smoothing property)과 근사 성질(approximation property)이라 한다.[^1]

$$
\Vert AS^{\nu}\Vert\le\eta(\nu)h^{-2},\qquad \Vert A^{-1}-PA_c^{-1}R\Vert\le Ch^{2}
$$

**정리(Hackbusch).** 두 조건이 성립하고 $\eta(\nu)\to 0$ 이면, 충분히 큰 $\nu$ 에서 두 단계 방법(two-grid method)의 오차 감소 인자가 $C\eta(\nu)\lt 1$ 로 묶이고 이 값은 $h$ 에 의존하지 않는다.

증명의 요지는 두 노름을 곱하는 것이다. 두 단계 반복의 오차 연산자는 $(A^{-1}-PA_c^{-1}R)AS^{\nu}$ 이고, 앞 인자를 근사 성질로 뒤 인자를 완화 성질로 묶으면 $h^{2}\cdot h^{-2}=1$ 이 되어 $h$ 가 사라진다. V 사이클은 성긴 단계를 정확히 풀지 않고 재귀로 근사하므로 여기에 한 단계 더 귀납이 필요하다. ∎

수렴률이 $h$ 와 무관하다는 것이 이 방법의 성질이다. [공액기울기법](krylov-subspace-methods.md)의 반복 횟수는 조건수의 제곱근에 비례해 $h^{-1}$ 규모로 늘어난다.

## 대수적 다중격자

격자가 명시적으로 없으면 [행렬](matrices.md) 성분만으로 단계를 만든다. $\vert a_{ij}\vert$ 가 같은 행의 다른 성분에 비해 크면 변수 $i$ 와 $j$ 가 강하게 결합되었다고 보고, 강한 결합 관계에서 극대독립집합(maximal independent set)에 가까운 것을 골라 성긴 변수 집합으로 삼는다. 보간은 성긴 변수의 값으로 촘촘한 변수를 표현하되 계수를 행의 성분에서 읽는다.[^2]

# 활용

- 전처리. V 사이클 한 번을 $M^{-1}v$ 계산으로 쓰면 [전처리](preconditioning.md)된 공액기울기법이 된다. 수렴률이 $h$ 와 무관하므로 스펙트럼 등가 상수도 그렇다.
- 편미분방정식. 확산(diffusion) 항이 지배하는 이산화 계에서 표준 해법이다. 이류(advection) 항이 섞이면 완화가 들쭉날쭉한 오차를 지우지 못해, 흐름 방향을 따르는 순서로 완화하거나 [반좌표 성긴화](semicoarsening.md)를 쓴다.
- [그래프 Laplacian](graph-laplacian.md). [대수적 다중격자](algebraic-multigrid.md)를 [그래프](graphs.md)의 Laplacian 계에 적용하면 성긴 단계가 정점을 뭉친 그래프가 된다.

[^1]: Wolfgang Hackbusch, *Multi-Grid Methods and Applications*, Springer Series in Computational Mathematics 4 (1985), 6–7장. 완화 성질과 근사 성질에서 두 단계 수렴을 얻고 V 사이클로 확장하는 논증이 이 장에 있다.
[^2]: John W. Ruge, Klaus Stüben, *Algebraic multigrid*, in Multigrid Methods, SIAM Frontiers in Applied Mathematics 3 (1987), 73–130.

# 연관 문서

## 선수지식

- [전처리](preconditioning.md)

## 더 알아보기

- [Fourier 국소 해석](local-fourier-analysis.md)
- [완전 다중격자](full-multigrid.md)
- [완전 근사 저장](full-approximation-scheme.md)
- [대수적 다중격자](algebraic-multigrid.md)
- [영역 분할법](domain-decomposition.md)

#linear_algebra #algorithms #computation
