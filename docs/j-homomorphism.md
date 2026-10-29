# J 준동형

# 개요

**J 준동형(J-homomorphism)** 은 회전이 연속으로 이어진 족을 구면에서 구면으로 가는 사상으로 바꾸는 대응이다. 평면을 각도 $\theta$ 만큼 돌리는 회전에서 $\theta$ 를 $0$ 부터 $2\pi$ 까지 움직이면 회전의 고리가 하나 생기고, 이 고리에서 3 차원 구면 $S^3$ 을 2 차원 구면 $S^2$ 로 보내는 Hopf 사상이 만들어진다. 구면 사이의 사상을 연속 변형으로 분류하는 [호모토피군](homotopy-groups.md)은 계산이 어렵지만 회전군의 호모토피군은 계산되어 있으므로, J 준동형은 회전군 쪽의 원소를 옮겨 구면의 호모토피군 안에 알려진 원소를 만든다.

# 직관

J 준동형은 회전군의 호모토피군에서 구면의 호모토피군으로 가는 준동형 $J:\pi\_k(SO(n))\to\pi\_{n+k}(S^n)$ 이다. 회전의 족 하나에서 구면 사이의 사상 하나를 만드는 Hopf 구성으로 정의된다.

$n$ 을 키우면 $J$ 는 [Bott 주기성](bott-periodicity.md)으로 아는 안정 직교군의 호모토피군에서 [Freudenthal 매달기 정리](freudenthal-suspension.md)의 안정 호모토피군으로 가는 사상이 된다. 그 상은 Adams 가 결정했고, 차수 $4s-1$ 에서 위수가 [Bernoulli 수](bernoulli-numbers.md) $B\_{2s}/4s$ 의 분모인 순환군이다.

원 위의 회전 $S^1\to SO(2)$ 를 하나 고른다. 각 $\theta$ 마다 평면의 회전 $A(\theta)$ 가 있으므로, $(\theta,v)\mapsto A(\theta)v$ 는 $S^1\times S^1$ 에서 $S^1$ 로 가는 사상이다. 두 변수 사상 $S^1\times S^1\to S^1$ 에서 $S^3\to S^2$ 를 만드는 Hopf 구성을 쓰면, 한 바퀴 도는 회전에서 Hopf 사상이 나온다.

같은 구성을 $S^k\to SO(n)$ 에 쓰면 $S^k\times S^{n-1}\to S^{n-1}$ 을 거쳐 $S^{n+k}\to S^n$ 이 나온다. 회전군의 호모토피군은 Bott 주기성으로 모두 알려져 있으므로, 이 구성은 계산하기 어려운 구면의 호모토피군 안에 알려진 원소들을 놓는다.

# 정의

$f:S^k\to SO(n)$ 에 대해 $\tilde f:S^k\times S^{n-1}\to S^{n-1}$, $\tilde f(x,v)=f(x)v$ 를 둔다. $S^{n+k}=S^k\ast S^{n-1}$ 을 두 구면의 결합으로 보고, 결합의 선분 $\lbrack x,v\rbrack$ 을 $S^{n-1}$ 의 매달기 $S^n$ 의 선분 $\lbrack\tilde f(x,v)\rbrack$ 으로 보낸다. 이 Hopf 구성이 주는 사상 $S^{n+k}\to S^n$ 의 호모토피류를 $J(\lbrack f\rbrack)$ 라 하고

$$
J:\pi\_k(SO(n))\to\pi\_{n+k}(S^n)
$$

을 **J 준동형** 이라 한다. $n\gt k+1$ 이면 양쪽이 안정 범위에 들어가 **안정 J 준동형** $J:\pi\_k(SO)\to\pi\_k^s$ 가 된다.

# 성질

## 상의 결정

**정리(Adams, Quillen).** $k\ge 1$ 에서 안정 J 준동형의 상은 다음과 같다[^1].

| k mod 8 | 0 | 1 | 3 | 7 | 그 밖 |
| --- | --- | --- | --- | --- | --- |
| SO 의 호모토피군 | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z$ | $\mathbb Z$ | $0$ |
| J 의 상 | $\mathbb Z/2$ | $\mathbb Z/2$ | 순환군 | 순환군 | $0$ |

$k=4s-1$ 이면 상은 위수가 $B\_{2s}/4s$ 의 기약분수 분모인 순환군이다. Adams 는 K 이론의 [Adams 연산](adams-operations.md)으로 만든 e 불변량으로 상이 이 위수를 넘지 않음을 보였고, 같은 위수에 닿는다는 것은 Adams 추측에 의존했다. Adams 추측은 Quillen 과 Sullivan 이 증명했다[^2].

## 낮은 차수의 값

| k | 1 | 3 | 7 | 8 | 11 |
| --- | --- | --- | --- | --- | --- |
| J 의 상 | $\mathbb Z/2$ | $\mathbb Z/24$ | $\mathbb Z/240$ | $\mathbb Z/2$ | $\mathbb Z/504$ |
| 안정 호모토피군 | $\mathbb Z/2$ | $\mathbb Z/24$ | $\mathbb Z/240$ | $(\mathbb Z/2)^2$ | $\mathbb Z/504$ |

$k=3$ 에서 $B\_2/4=1/24$, $k=7$ 에서 $B\_4/8=-1/240$, $k=11$ 에서 $B\_6/12=1/504$ 이다. $k=1,3,7,11$ 에서는 안정 호모토피군 전체가 J 의 상이다. 반대로 $\pi\_2^s$ 와 $\pi\_6^s$ 의 $\mathbb Z/2$ 는 $SO$ 의 호모토피군이 $0$ 인 차수여서 상 밖에 있다.

## 틀 지은 다양체

Pontryagin–Thom 구성으로 $\pi\_k^s$ 는 법다발에 틀을 준 $k$ 차원 닫힌 다양체의 [코보디즘](cobordism.md)류와 같다. 표준 구면 $S^k$ 의 법다발 틀을 사상 $S^k\to SO$ 로 비틀면 그 류가 J 의 상의 원소다. 그래서 J 의 상은 구면 위의 틀에서 오는 류이고, 그 몫 $\pi\_k^s/\mathrm{im}\thinspace J$ 이 다른 다양체에서 오는 류다.

# 활용

- **이색 구면의 개수.** Kervaire–Milnor 는 $n$ 차원 호모토피 구면의 군 $\Theta\_n$ 을 $\pi\_n^s/\mathrm{im}\thinspace J$ 와 평행화 가능한 다양체의 경계에서 오는 부분군으로 나누어 계산했다. $\Theta\_7$ 의 위수 $28$ 이 이 계산에서 나오고, [이색 구면](exotic-spheres.md)이 그 원소다[^3].
- **안정 호모토피군의 구조.** $\pi\_\ast^s$ 는 J 의 상과 그 밖의 부분으로 나누어 연구한다. J 의 상은 K 이론의 Adams 연산으로 검출되는 부분이다.
- **[Hopf 불변량](hopf-invariant.md).** $k=1,3,7$ 에서 J 의 상의 생성원은 [복소수](complex-numbers.md), 사원수, 팔원수의 곱셈에서 오는 Hopf 사상의 안정류다.

[^1]: J. F. Adams, "On the groups J(X) IV", *Topology* 5 (1966), 21–71.
[^2]: D. Quillen, "The Adams conjecture", *Topology* 10 (1971), 67–80.
[^3]: M. A. Kervaire, J. W. Milnor, "Groups of homotopy spheres I", *Annals of Mathematics* 77 (1963), 504–537.

# 연관 문서

## 선수지식

- [Bott 주기성](bott-periodicity.md)
- [Freudenthal 매달기 정리](freudenthal-suspension.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology
