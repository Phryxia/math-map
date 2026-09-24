# Steenrod 연산

# 개요

Steenrod 제곱은 $\mathbb Z/2$ 계수 [코호몰로지](cohomology.md)의 차수를 올리는 자연변환 $\mathrm{Sq}^i:H^n(X;\mathbb Z/2)\to H^{n+i}(X;\mathbb Z/2)$ 이다. 컵곱은 현수를 지나면 사라지지만 Steenrod 제곱은 남으므로, 코호몰로지 환이 같은 두 공간을 구별한다. 안정 연산 전체가 이루는 대수가 Steenrod 대수이고 [스펙트럼 수열](spectral-sequences.md)의 계산이 그 구조를 준다.

# 직관

복소 사영평면 $\mathbb{CP}^2$ 와 쐐기합 $S^2\vee S^4$ 는 코호몰로지가 차수 $0,2,4$ 에 하나씩으로 같다. 컵곱이 둘을 가른다. $\mathbb{CP}^2$ 에서는 차수 $2$ 의 생성원 $\alpha$ 에 대해 $\alpha\cup\alpha$ 가 차수 $4$ 의 생성원이고, 쐐기합에서는 두 생성원이 서로 다른 조각에 있어 $\alpha\cup\alpha=0$ 이다.

두 공간을 각각 현수한 $\Sigma\mathbb{CP}^2$ 와 $S^3\vee S^5$ 에는 이 방법이 통하지 않는다. 현수한 공간에서는 양의 차수 원소의 컵곱이 모두 $0$ 이라 두 공간 다 곱이 자명하다. 코호몰로지도 차수 $0,3,5$ 에 하나씩으로 같다.

차수를 $2$ 만큼 올리는 연산이 있고 그것이 현수와 교환한다고 하자. $\mathbb{CP}^2$ 에서 그 연산이 $\alpha$ 를 $\alpha\cup\alpha\ne0$ 으로 보내면, 현수 뒤에도 차수 $3$ 의 생성원이 차수 $5$ 의 생성원으로 간다. $S^3\vee S^5$ 에서는 어떤 자연 연산도 한 조각의 원소를 다른 조각으로 보내지 못하므로 그 값이 $0$ 이다. 두 공간은 호모토피 동치가 아니다.

이 연산이 $\mathrm{Sq}^2$ 다. 차수를 $i$ 만큼 올리는 것이 $\mathrm{Sq}^i$ 이고, 차수와 같은 만큼 올릴 때 컵제곱과 일치한다.

# 정의

**Steenrod 제곱**은 다음 다섯 조건을 만족하는 자연변환족 $\mathrm{Sq}^i:H^n(X;\mathbb Z/2)\to H^{n+i}(X;\mathbb Z/2)$ 이고, 이 조건이 연산을 유일하게 정한다.

- 자연성. 모든 연속사상 $f$ 에 대해 $f^\ast\mathrm{Sq}^i=\mathrm{Sq}^i f^\ast$ 다.
- $\mathrm{Sq}^0$ 은 항등사상이다.
- $x$ 의 차수가 $n$ 이면 $\mathrm{Sq}^n x=x\cup x$ 다.
- $i\gt n$ 이면 $\mathrm{Sq}^i x=0$ 이다.
- Cartan 공식이 성립한다.

$$
\mathrm{Sq}^k(x\cup y)=\sum_{i+j=k}\mathrm{Sq}^i x\cup\mathrm{Sq}^j y
$$

## 구성

$x\in H^n(X;\mathbb Z/2)$ 를 사상 $X\to K(\mathbb Z/2,n)$ 으로 보고, 대각사상 $X\to X\times X$ 가 유도하는 컵제곱을 $\mathbb Z/2$ 의 자리바꿈 작용까지 담아 올린다. 자리바꿈의 호모토피가 만드는 고차 사슬이 $i\lt n$ 인 연산을 준다.

## 안정성

$\mathrm{Sq}^i$ 는 현수 동형 $H^n(X)\cong H^{n+1}(\Sigma X)$ 와 교환한다. 차수 $n$ 에 의존하지 않으므로 이 연산족을 **안정 코호몰로지 연산**이라 한다. 컵곱은 현수를 지나면 자명해지므로 안정 연산이 아니다.

## 홀수 소수

홀수 소수 $p$ 에서는 차수를 $2i(p-1)$ 만큼 올리는 **Steenrod 거듭제곱** $P^i$ 와 Bockstein 연산 $\beta$ 가 같은 자리를 차지한다. $P^i$ 는 차수가 $2i$ 인 원소에서 $p$ 제곱과 일치한다.

# 성질

## Adem 관계

$a\lt 2b$ 이면 다음이 성립한다.

$$
\mathrm{Sq}^a\mathrm{Sq}^b=\sum_{c}\binom{b-c-1}{a-2c}\mathrm{Sq}^{a+b-c}\mathrm{Sq}^c
$$

이항계수는 $\mathbb Z/2$ 에서 읽는다. 따라서 $n$ 이 $2$ 의 거듭제곱이 아니면 $\mathrm{Sq}^n$ 이 더 낮은 제곱들의 합성으로 분해된다. $\mathrm{Sq}^3=\mathrm{Sq}^1\mathrm{Sq}^2$ 가 가장 작은 예다.

## Steenrod 대수

안정 연산 전체가 합성을 곱으로 하여 $\mathbb Z/2$ 대수를 이룬다. 이를 **Steenrod 대수** $\mathcal A$ 라 한다. Adem 관계로 모든 합성을 **허용 단항식** $\mathrm{Sq}^{i_1}\mathrm{Sq}^{i_2}\cdots\mathrm{Sq}^{i_k}$ , 곧 $i_j\ge 2i_{j+1}$ 인 것들의 합으로 쓸 수 있고, 허용 단항식이 $\mathcal A$ 의 기저다.

## Serre 의 계산

$H^\ast(K(\mathbb Z/2,n);\mathbb Z/2)$ 는 $n$ 이하의 초과분을 갖는 허용 단항식을 기본류에 적용한 것들이 생성하는 다항식 대수다.

**증명의 요지.** $K(\mathbb Z/2,n-1)\to PK\to K(\mathbb Z/2,n)$ 이 올화이고 전체공간이 수축가능하므로 그 [스펙트럼 수열](spectral-sequences.md)에서 밑공간의 코호몰로지가 올의 것으로부터 차수별로 결정된다. $n$ 에 대한 귀납으로 생성원의 목록이 허용 단항식과 일치한다.

## Wu 공식

닫힌 [다양체](manifolds.md) $M$ 에는 모든 $x$ 에 대해 $\langle v\cup x,\lbrack M\rbrack\rangle=\langle\mathrm{Sq}\thinspace x,\lbrack M\rbrack\rangle$ 인 Wu 류 $v$ 가 있고, Stiefel–Whitney 류가 $w=\mathrm{Sq}(v)$ 로 결정된다. 따라서 Stiefel–Whitney 류는 다양체의 호모토피형에만 달려 있다.

# 활용

- **[Hopf 불변량](hopf-invariant.md).** Hopf 불변량이 $1$ 이면 사상뿔에서 $\mathrm{Sq}^n$ 이 한 생성원을 다른 생성원으로 보낸다. Adem 관계가 $n$ 을 $2$ 의 거듭제곱으로 제한하고, 2차 연산이 다시 $n\le 8$ 로 줄인다.
- **[특성류](characteristic-classes.md).** Wu 공식이 Stiefel–Whitney 류를 Steenrod 제곱으로 표현하며, 이 류의 소멸이 다양체의 몰입과 매장을 판정한다.
- **공간의 구별.** 코호몰로지 환이 같은 두 공간을 안정 연산으로 가른다. $\Sigma\mathbb{CP}^2$ 와 $S^3\vee S^5$ 가 그 예다.
- **호모토피군 계산.** Adams 스펙트럼 수열의 두 번째 페이지가 $\mathcal A$ 위의 Ext 군이고, 구면의 안정 호모토피군이 거기서 나온다.[^1]

[^1]: N. E. Steenrod and D. B. A. Epstein, *Cohomology Operations*, Ann. of Math. Studies 50 (1962) 가 공리와 구성을 함께 다룬다. 허용 단항식과 Serre 의 계산은 A. Hatcher, *Algebraic Topology* (2002) 4.L 절에 있다.

# 연관 문서

## 선수지식

- [코호몰로지](cohomology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #algebra
