# Ising 모형

# 개요

**Ising 모형(Ising model)** 은 그래프의 정점마다 위나 아래를 가리키는 자석을 놓고, 이웃한 두 자석이 같은 쪽을 가리킬수록 큰 확률을 주는 확률분포다. $n\times n$ 격자의 바깥 둘레를 모두 위쪽으로 고정했을 때, 격자를 아무리 키워도 가운데 자석이 위쪽을 가리킬 확률이 $1/2$ 보다 크게 남는지가 이런 문제다. Ising 모형은 이웃한 두 자석이 다를 때마다 확률에 $e^{-2\beta}$ 를 곱해 이 물음을 계산으로 바꾸고, 2 차원 이상에서는 $\beta$ 가 어떤 값을 넘으면 그 확률이 $1/2$ 보다 크게 남는다.

# 직관

Ising 모형은 그래프의 정점마다 부호 $\pm 1$ 을 배정한 것 위의 확률분포이고, 인접한 두 정점의 부호가 같은 변이 많을수록 큰 확률을 준다. 상태가 둘인 [Potts 모형](potts-model.md)이다.

정점의 부호를 스핀(spin)이라 부른다. 정수 격자 $\mathbb Z^d$ 에서 $d\ge 2$ 이면 역온도가 어떤 값을 넘을 때 상전이(phase transition)가 일어난다. 상자의 경계 스핀을 모두 $+1$ 로 고정하면 상자를 아무리 키워도 원점의 스핀이 $+1$ 쪽으로 치우친 채 남는다. $d=1$ 에서는 그런 값이 없다.

$\mathbb Z^2$ 의 $n\times n$ 상자 안의 정점에 스핀을 배정하고, 상자 바깥 둘레의 스핀은 모두 $+1$ 로 고정한다. 이웃한 두 스핀이 다른 변 하나마다 확률에 $e^{-2\beta}$ 를 곱한다. $\beta=0$ 이면 스핀이 서로 독립이라 원점의 스핀은 확률 $1/2$ 로 $-1$ 이다. $n$ 을 키우면서 이 확률이 $1/2$ 로 가는지 묻는다.

원점의 스핀이 $-1$ 이면, 원점을 포함하는 $-1$ 덩어리와 바깥의 $+1$ 사이에 경계선이 있다. 경계선은 부호가 다른 이웃 쌍을 가르는 단위 선분들을 이은 닫힌 곡선이고 원점을 둘러싼다. 길이가 $\ell$ 인 경계선이 하나 있는 배정에서, 그 안쪽 스핀의 부호를 모두 뒤집으면 경계선이 사라지고 부호가 다른 변이 $\ell$ 개 줄어든다. 뒤집기는 일대일이므로 특정한 경계선이 나타날 확률은 $e^{-2\beta\ell}$ 이하다.

원점을 둘러싸는 길이 $\ell$ 의 닫힌 곡선은 원점 오른쪽의 가로선과 만나는 첫 자리를 $\ell$ 가지 이하에서 고르고, 그 자리부터 한 걸음마다 방향을 셋 이하에서 고르므로 $\ell\cdot 4\cdot 3^{\ell-1}$ 개 이하다. [침투](percolation.md)에서 자기회피 경로의 수를 세던 것과 같은 셈이다. 그래서

$$
P(\sigma_0=-1)\le\sum_{\ell\ge 4}\ell\cdot 4\cdot 3^{\ell-1}e^{-2\beta\ell}
$$

이고, $\beta$ 가 크면 우변이 $n$ 과 상관없이 $1/2$ 보다 작다. 경계의 $+1$ 이 상자 크기와 상관없이 원점까지 영향을 준다. 이 현상이 자발 자화(spontaneous magnetization)다.

# 정의

## Ising 측도

유한 그래프 $G=(V,E)$ 위의 스핀 배정 $\sigma\in\lbrace -1,1\rbrace^V$ 에 다음 확률을 준다.

$$
\mu\_{G,\beta,h}(\sigma)=\frac{1}{Z\_{G}(\beta,h)}\exp\Bigl(\beta\sum_{uv\in E}\sigma_u\sigma_v+h\sum_{v\in V}\sigma_v\Bigr)
$$

$\beta\ge 0$ 은 역온도(inverse temperature), $h\in\mathbb R$ 은 외부장(external field)이고 정규화 상수 $Z\_{G}(\beta,h)$ 가 분배함수(partition function)다. $\beta\ge 0$ 이므로 같은 부호의 이웃을 선호하고, 이 경우를 강자성(ferromagnetic)이라 한다. $h=0$ 이면 $\sigma_u\sigma_v=2\delta_{\sigma_u,\sigma_v}-1$ 이므로 Potts 모형의 $q=2$, $v=e^{2\beta}-1$ 과 같은 분포다.

## 경계 조건

$\Lambda\subset\mathbb Z^d$ 가 유한집합이고 $\eta\in\lbrace -1,1\rbrace^{\mathbb Z^d}$ 일 때, $\Lambda$ 바깥의 스핀을 $\eta$ 로 고정한 측도를 $\mu^{\eta}\_{\Lambda}$ 라 쓴다. $\Lambda$ 안의 변과 $\Lambda$ 에서 바깥으로 나가는 변을 모두 지수에 넣는다. $\eta\equiv +1$ 인 것이 **$+$ 경계 조건**이고 그 측도를 $\mu^{+}\_{\Lambda}$ 라 쓴다.

## 자화와 임계 역온도

$\Lambda_n=\lbrace -n,\dots,n\rbrace^d$ 에 대해 다음을 둔다.

$$
m^\ast(\beta)=\lim_{n\to\infty}\mu^{+}\_{\Lambda_n,\beta,0}(\sigma_0),\qquad \beta_c=\inf\lbrace\beta: m^\ast(\beta)\gt 0\rbrace
$$

$m^\ast$ 가 **자발 자화**이고 $\beta_c$ 가 **임계 역온도(critical inverse temperature)** 다. 극한의 존재와 $m^\ast$ 의 단조성은 성질 절의 상관 부등식으로 증명된다.

# 성질

## FKG 부등식

배정 사이에 자리마다 비교하는 순서 $\sigma\le\sigma^\prime$ 을 둔다. 이 순서에 대해 증가하는 함수를 증가 함수라 한다.

**FKG 부등식**(Fortuin–Kasteleyn–Ginibre inequality)은 다음 상관 부등식이다.

> **정리.** 강자성 Ising 측도에서 두 증가 함수 $f,g$ 는 $\mu(fg)\ge\mu(f)\mu(g)$ 를 만족한다[^1].

따름정리로 $\Lambda\subset\Lambda^\prime$ 이면 $\mu^{+}\_{\Lambda}(\sigma_0)\ge\mu^{+}\_{\Lambda^\prime}(\sigma_0)$ 이다. $\Lambda^\prime$ 에서 $\Lambda$ 바깥의 스핀을 $+1$ 로 조건화하는 것이 증가 사건으로의 조건화이기 때문이다. 음이 아닌 감소열이므로 $m^\ast$ 의 극한이 존재한다. $m^\ast$ 가 $\beta$ 에 대해 증가하는 것은 Griffiths 부등식(Griffiths inequality)에서 나온다. 스핀 곱들의 상관이 음이 아니라는 부등식이고, $\beta$ 에 대한 도함수가 그 상관의 합이다.

## 1 차원 모형

$G$ 가 정점 $0,1,\dots,n$ 의 경로이고 $h=0$ 이면 변마다 $\tau_i=\sigma_{i-1}\sigma_i$ 로 바꾸어 쓴다. $\sigma_0$ 와 $\tau_1,\dots,\tau_n$ 은 서로 독립이고 $\tau_i$ 의 기댓값은 $\tanh\beta$ 다.

$$
\mu(\sigma_0\sigma_n)=\prod_{i=1}^n\mu(\tau_i)=(\tanh\beta)^n
$$

$\tanh\beta\lt 1$ 이므로 상관이 거리에 대해 지수적으로 줄고, 경계 조건의 영향이 원점까지 오지 않는다. 모든 $\beta$ 에서 $m^\ast(\beta)=0$ 이고 $\beta_c=\infty$ 다.

## Peierls 논법

> **정리 (Peierls).** $d\ge 2$ 이면 $\beta_c\lt\infty$ 다[^2].

증명의 요지는 직관 절의 계산이다. $d=2$ 에서 원점을 둘러싼 경계선의 수를 세고 뒤집기의 가중치 비를 곱하면 $P(\sigma_0=-1)$ 이 $\beta$ 가 클 때 $1/2$ 보다 작게 유계된다. $d\ge 3$ 에서는 경계선 대신 원점을 둘러싼 닫힌 곡면을 세어 같은 계산을 한다.

## 무작위 클러스터 표현

Potts 모형의 무작위 클러스터 모형에서 $q=2$, 변을 여는 확률 $p=1-e^{-2\beta}$ 로 둔 측도를 $\phi$ 라 한다.

$$
\mu\_{G,\beta,0}(\sigma_u\sigma_v)=\phi(u\leftrightarrow v)
$$

$u\leftrightarrow v$ 는 $u$ 와 $v$ 가 열린 변으로 이어진다는 사건이다. 열린 클러스터마다 부호를 독립으로 고르면 Ising 배정이 나오므로, 같은 클러스터의 두 스핀은 상관 $1$ 이고 다른 클러스터의 두 스핀은 상관 $0$ 이다. 이 등식으로 자발 자화가 무한 클러스터의 존재와 같은 진술이 된다.

## Onsager 해

> **정리 (Onsager, Yang).** $\mathbb Z^2$ 에서 $\sinh(2\beta_c)=1$, 곧 $\beta_c=\tfrac12\log(1+\sqrt2)$ 이고, $\beta\gt\beta_c$ 에서 자발 자화는 다음과 같다[^3].

$$
m^\ast(\beta)=\bigl(1-\sinh^{-4}(2\beta)\bigr)^{1/8}
$$

분배함수는 전달 행렬(transfer matrix)의 대각합으로 적힌다. 한 줄의 스핀 배정 $2^n$ 개를 행과 열로 하는 행렬 $T$ 에 대해 $Z=\mathrm{tr}\thinspace T^m$ 이다. Onsager 는 $T$ 의 고윳값을 모두 구했고, 자유에너지의 극한이 $\beta_c$ 에서 해석적이지 않음을 보였다. 임계점에서 $m^\ast$ 는 지수 $1/8$ 로 $0$ 이 된다.

## Lee–Yang 정리

> **정리 (Lee–Yang).** 강자성 Ising 모형의 분배함수를 $z=e^{-2h}$ 의 다항식으로 보면 그 근은 모두 단위원 $\vert z\vert=1$ 위에 있다[^4].

그래서 [실수](real-numbers.md) $h\ne 0$ 에서는 분배함수가 $0$ 이 되지 않고, 극한에서 자유에너지가 해석적이지 않을 수 있는 자리는 $h=0$ 뿐이다.

# 활용

- **표본추출.** [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)에서 한 자리의 부호만 다시 뽑는 Gibbs 표본추출이 Glauber 동역학(Glauber dynamics)이다. 높은 온도에서 [Markov 연쇄의 혼합시간](mixing-time.md)이 정점 수의 다항식이고, 자유 경계의 상자에서 $\beta\gt\beta_c$ 이면 거의 모든 스핀이 $+1$ 인 배정과 $-1$ 인 배정 사이를 오가는 데 상자 한 변의 길이에 지수인 시간이 걸린다. 무작위 클러스터 표현을 쓰는 Swendsen–Wang 절차는 클러스터 하나의 부호를 통째로 바꾼다.
- **임계점의 등각장론.** 2 차원 임계 Ising 모형의 척도 극한은 [Virasoro 대수](virasoro-algebra.md)의 최소모형 가운데 중심전하 $c=1/2$ 인 것으로 기술된다.
- **상관함수.** 2 차원 Ising 모형의 두 점 상관함수가 척도 극한에서 [Painlevé 방정식](painleve-equations.md) 셋째 꼴의 해로 적힌다.
- **확률 그래프 모형.** 정점의 이진 변수에 변마다 쌍 상호작용을 둔 [확률 그래프 모형](graphical-models.md)이 외부장과 결합 상수를 정점과 변마다 달리한 Ising 모형이다.

[^1]: C. M. Fortuin, P. W. Kasteleyn, J. Ginibre, *Correlation inequalities on some partially ordered sets*, Comm. Math. Phys. 22 (1971), 89–103.
[^2]: R. Peierls, *On Ising's model of ferromagnetism*, Proc. Cambridge Philos. Soc. 32 (1936), 477–481.
[^3]: L. Onsager, *Crystal statistics. I. A two-dimensional model with an order-disorder transition*, Phys. Rev. 65 (1944), 117–149. C. N. Yang, *The spontaneous magnetization of a two-dimensional Ising model*, Phys. Rev. 85 (1952), 808–816.
[^4]: T. D. Lee, C. N. Yang, *Statistical theory of equations of state and phase transitions. II. Lattice gas and Ising model*, Phys. Rev. 87 (1952), 410–419.

# 연관 문서

## 선수지식

- [Potts 모형](potts-model.md)
- [침투](percolation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #graph_theory
