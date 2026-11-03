# Steenrod 연산

# 개요

**Steenrod 제곱(Steenrod square)** 은 $\mathbb Z/2$ 계수 [코호몰로지](cohomology.md)의 원소를 더 높은 차수의 원소로 보내는 연산이다. 복소 사영평면 $\mathbb{CP}^2$ 와 쐐기합 $S^2\vee S^4$ 는 컵곱으로 구별되지만, 두 공간을 한 번씩 현수하면 컵곱이 모두 $0$ 이 되어 코호몰로지 환으로는 구별되지 않는다. Steenrod 제곱은 차수를 올리면서 현수와 교환하므로, 현수한 두 공간에서도 값이 달라 둘을 구별한다.

# 직관

복소 사영평면(complex projective plane) $\mathbb{CP}^2$ 와 쐐기합(wedge sum) $S^2\vee S^4$ 는 코호몰로지가 차수 $0,2,4$ 에 하나씩으로 같고, 컵곱(cup product)이 둘을 가른다. $\mathbb{CP}^2$ 에서는 차수 $2$ 의 생성원 $\alpha$ 에 대해 $\alpha\cup\alpha$ 가 차수 $4$ 의 생성원이고, 쐐기합에서는 두 생성원이 서로 다른 조각에 있어 $\alpha\cup\alpha=0$ 이다.

두 공간을 각각 현수(suspension)한 $\Sigma\mathbb{CP}^2$ 와 $S^3\vee S^5$ 에서는 양의 차수 원소의 컵곱이 모두 $0$ 이라 이 방법이 통하지 않는다. 코호몰로지도 차수 $0,3,5$ 에 하나씩으로 같다.

차수를 $2$ 만큼 올리고 현수와 교환하는 연산이 $\mathbb{CP}^2$ 에서 $\alpha$ 를 $\alpha\cup\alpha\ne0$ 으로 보내면, 현수 뒤에도 차수 $3$ 의 생성원이 차수 $5$ 의 생성원으로 간다. $S^3\vee S^5$ 에서는 이런 연산이 $S^3$ 조각의 원소를 $S^3$ 의 차수 $5$ 코호몰로지, 곧 $0$ 으로 보내므로 그 값이 $0$ 이고, 두 공간은 호모토피 동치가 아니다. 이 연산이 $\mathrm{Sq}^2$ 다. 차수를 $i$ 만큼 올리는 것이 $\mathrm{Sq}^i$ 이고, 차수와 같은 만큼 올릴 때 컵제곱과 일치한다.

# 정의

## Steenrod 제곱

**Steenrod 제곱** 은 다음 다섯 조건을 만족하는 [자연변환](natural-transformations.md)족 $\mathrm{Sq}^i:H^n(X;\mathbb Z/2)\to H^{n+i}(X;\mathbb Z/2)$ ($i\ge 0$)이다.

- 자연성. 모든 연속사상 $f$ 에 대해 $f^\ast\mathrm{Sq}^i=\mathrm{Sq}^i f^\ast$ 다.
- $\mathrm{Sq}^0$ 은 항등사상이다.
- $x$ 의 차수가 $n$ 이면 $\mathrm{Sq}^n x=x\cup x$ 다.
- $i\gt n$ 이면 $\mathrm{Sq}^i x=0$ 이다.
- Cartan 공식(Cartan formula)이 성립한다.

$$
\mathrm{Sq}^k(x\cup y)=\sum_{i+j=k}\mathrm{Sq}^i x\cup\mathrm{Sq}^j y
$$

$\mathbb{CP}^2$ 의 $\alpha$ 에서는 세 번째 조건으로 $\mathrm{Sq}^2\alpha=\alpha\cup\alpha$ 이고, $H^3(\mathbb{CP}^2;\mathbb Z/2)=0$ 이므로 $\mathrm{Sq}^1\alpha=0$ 이다.

전체 제곱 $\mathrm{Sq}=\mathrm{Sq}^0+\mathrm{Sq}^1+\cdots$ 를 쓰면 Cartan 공식은 $\mathrm{Sq}(x\cup y)=\mathrm{Sq}\thinspace x\cup\mathrm{Sq}\thinspace y$ 다. $H^\ast(\mathbb{RP}^\infty;\mathbb Z/2)=\mathbb Z/2\lbrack t\rbrack$ ($\deg t=1$, [실사영공간](real-projective-space.md)의 극한)에서는 $\mathrm{Sq}\thinspace t=t+t^2$ 이므로 $\mathrm{Sq}(t^n)=(t+t^2)^n$ 이고, $\mathrm{Sq}^i(t^n)=\binom ni t^{n+i}$ 다. $\mathrm{Sq}^1(t^2)=2t^3=0$, $\mathrm{Sq}^1(t^3)=t^4$, $\mathrm{Sq}^2(t^3)=t^5$ 이다.

## 안정 코호몰로지 연산

차수마다 정해진 연산 $\theta\_n:H^n(X)\to H^{n+i}(X)$ 의 족이 모든 $X$ 에서 현수 동형 $H^n(X)\cong H^{n+1}(\Sigma X)$ 와 교환하면 이 족을 **안정 코호몰로지 연산(stable cohomology operation)** 이라 한다. 컵제곱 $x\mapsto x\cup x$ 는 $\Sigma\mathbb{CP}^2$ 에서 $0$ 이 되지만 $\mathbb{CP}^2$ 에서는 $0$ 이 아니므로 안정 연산이 아니다.

## 홀수 소수의 Steenrod 거듭제곱

홀수 [소수](primes.md) $p$ 에서 **Steenrod 거듭제곱(Steenrod power)** $P^i:H^n(X;\mathbb Z/p)\to H^{n+2i(p-1)}(X;\mathbb Z/p)$ 는 Steenrod 제곱과 같은 꼴의 공리를 만족하는 연산족이고, 차수가 $2i$ 인 원소에서 $P^i x=x^p$ 다. 짧은 [완전열](exact-sequences.md) $0\to\mathbb Z/p\to\mathbb Z/p^2\to\mathbb Z/p\to 0$ 의 연결 사상 $\beta:H^n(X;\mathbb Z/p)\to H^{n+1}(X;\mathbb Z/p)$ 를 Bockstein 준동형(Bockstein homomorphism)이라 한다.

# 성질

## 존재와 유일성

다섯 조건을 만족하는 연산족은 존재하고 유일하다[^1]. 구성은 $x\in H^n(X;\mathbb Z/2)$ 를 사상 $X\to K(\mathbb Z/2,n)$ 으로 보고, 대각사상 $X\to X\times X$ 가 주는 컵제곱을 두 인자의 자리바꿈 작용까지 함께 다루는 것이다. 사슬 수준에서 컵곱은 자리바꿈과 호모토피로만 교환하고, 그 호모토피들인 컵-i 곱(cup-i product)이 $\mathrm{Sq}^{n-i}$ 를 준다. $\mathrm{Sq}^1$ 은 $p=2$ 의 Bockstein 준동형과 같다.

## 안정성

$\mathrm{Sq}^i$ 는 현수 동형과 교환하므로 안정 코호몰로지 연산이다. 직관 절의 $\Sigma\mathbb{CP}^2$ 에서 $\mathrm{Sq}^2$ 가 차수 $3$ 의 생성원을 차수 $5$ 의 생성원으로 보내는 것이 이 성질에서 나온다.

## Adem 관계

$a\lt 2b$ 이면 다음이 성립한다(Adem relation).

$$
\mathrm{Sq}^a\mathrm{Sq}^b=\sum_{c=0}^{\lfloor a/2\rfloor}\binom{b-c-1}{a-2c}\mathrm{Sq}^{a+b-c}\mathrm{Sq}^c
$$

이항계수는 $\mathbb Z/2$ 에서 계산한다. 따라서 $n$ 이 $2$ 의 거듭제곱이 아니면 $\mathrm{Sq}^n$ 이 더 낮은 제곱들의 합성의 합으로 적힌다. $a=1$, $b=2$ 이면 $\mathrm{Sq}^1\mathrm{Sq}^2=\mathrm{Sq}^3$ 이 가장 작은 예다. $\mathbb{RP}^\infty$ 에서 $\mathrm{Sq}^1\mathrm{Sq}^2(t^3)=\mathrm{Sq}^1(t^5)=t^6$ 이고 $\mathrm{Sq}^3(t^3)=t^6$ 이다.

## Steenrod 대수

안정 연산 전체는 합성을 곱으로 하여 $\mathbb Z/2$ 위의 대수를 이룬다. 이를 **Steenrod 대수(Steenrod algebra)** $\mathcal A$ 라 한다. $i_j\ge 2i_{j+1}$ 인 합성 $\mathrm{Sq}^{i_1}\mathrm{Sq}^{i_2}\cdots\mathrm{Sq}^{i_k}$ 를 **허용 단항식(admissible monomial)** 이라 한다. Adem 관계로 모든 합성을 허용 단항식들의 합으로 쓸 수 있고, 허용 단항식 전체가 $\mathcal A$ 의 기저다.

## Serre 의 계산

허용 단항식 $\mathrm{Sq}^I=\mathrm{Sq}^{i_1}\cdots\mathrm{Sq}^{i_k}$ 의 초과(excess)를 $e(I)=i_1-i_2-\cdots-i_k$ 로 둔다. [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md) $K(\mathbb Z/2,n)$ 의 기본류를 $\iota\_n$ 이라 하면, $H^\ast(K(\mathbb Z/2,n);\mathbb Z/2)$ 는 $e(I)\lt n$ 인 허용 단항식에 대한 $\mathrm{Sq}^I\iota\_n$ 들이 생성하는 다항식 대수다. $n=1$ 이면 $e(I)\lt 1$ 인 것은 빈 단항식뿐이고, $H^\ast(\mathbb{RP}^\infty;\mathbb Z/2)=\mathbb Z/2\lbrack\iota\_1\rbrack$ 이 나온다.

증명의 요지. $K(\mathbb Z/2,n-1)\to PK\to K(\mathbb Z/2,n)$ 이 [올화](fibrations.md)이고 전체공간이 수축가능하므로, 그 [스펙트럼 수열](spectral-sequences.md)에서 밑공간의 코호몰로지가 올의 것으로부터 차수별로 결정된다. $n$ 에 대한 귀납으로 생성원의 목록이 허용 단항식과 일치한다.

## Wu 공식

닫힌 [다양체](manifolds.md) $M$ 에는 모든 $x$ 에 대해 $\langle v\cup x,\lbrack M\rbrack\rangle=\langle\mathrm{Sq}\thinspace x,\lbrack M\rbrack\rangle$ 인 Wu 류(Wu class) $v$ 가 있고, [Stiefel–Whitney 류](stiefel-whitney-classes.md)가 $w=\mathrm{Sq}(v)$ 로 결정된다. 따라서 Stiefel–Whitney 류는 다양체의 호모토피형에만 의존한다.

# 활용

- [Hopf 불변량](hopf-invariant.md). Hopf 불변량이 $1$ 인 사상 $S^{2n-1}\to S^n$ 이 있으면 그 사상뿔에서 $\mathrm{Sq}^n$ 이 한 생성원을 다른 생성원으로 보낸다. Adem 관계가 $n$ 을 $2$ 의 거듭제곱으로 제한하고, Adams 가 2차 연산으로 $n\le 8$ 까지 줄였다.
- [특성류](characteristic-classes.md). Wu 공식이 Stiefel–Whitney 류를 Steenrod 제곱으로 적고, 이 류와 그 쌍대류가 다양체를 유클리드 공간에 몰입하거나 매장하는 데 장애를 준다.
- 공간의 구별. 코호몰로지 환이 같은 두 공간을 안정 연산으로 가른다. $\Sigma\mathbb{CP}^2$ 와 $S^3\vee S^5$ 가 그 예다.
- 호모토피군 계산. Adams 스펙트럼 수열(Adams spectral sequence)의 두 번째 페이지가 $\mathcal A$ 위의 Ext 군이고, 구면의 안정 [호모토피군](homotopy-groups.md)이 거기서 나온다[^1].

[^1]: N. E. Steenrod and D. B. A. Epstein, *Cohomology Operations*, Ann. of Math. Studies 50 (1962) 가 공리와 구성을 함께 다룬다. 허용 단항식과 Serre 의 계산은 A. Hatcher, *Algebraic Topology* (2002) 4.L 절에 있다.

# 연관 문서

## 선수지식

- [코호몰로지](cohomology.md)

## 더 알아보기

- [Stiefel–Whitney 류](stiefel-whitney-classes.md)

#algebraic_topology #topology #algebra
