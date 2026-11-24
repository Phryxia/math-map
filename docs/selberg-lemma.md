# Selberg 보조정리

# 개요

**Selberg 보조정리(Selberg's lemma)** 는 유한 개의 행렬로 생성되는 행렬군에, 단위원 말고는 거듭제곱해서 단위원이 되는 원소가 없는 부분군이 유한 지수로 들어 있다는 정리다. [모듈러 군](modular-group.md)의 원소 $S$ 는 네 번 곱하면 단위행렬이고, 상반평면의 점 $i$ 를 고정한다. 이런 원소가 있으면 상반평면을 군으로 나눈 몫이 고정점 둘레에서 원뿔 꼴로 접힌다. 성분을 $3$ 으로 나눈 나머지가 단위행렬과 같은 행렬만 모으면 이런 원소가 모두 빠지고, 지수 $24$ 인 부분군이 남는다.

# 직관

$\mathrm{SL}\_2(\mathbb Z)$ 의 다음 원소는 $S^2=-I$, $S^4=I$ 를 만족한다.

$$
S=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}
$$

성분을 $2$ 로 나눈 나머지가 단위행렬과 같은 행렬만 모으면 $S$ 는 빠지지만 $-I$ 가 남는다. $-1$ 과 $1$ 은 $2$ 로 나눈 나머지가 같기 때문이다.

법을 $3$ 으로 올리면 $-I$ 도 빠진다. 나머지가 단위행렬인 $g\ne I$ 는 $g=I+3A$ 꼴이다. $A$ 의 성분 가운데 $3$ 의 배수가 아닌 것이 있다고 하자. 제곱하면 $g^2=I+6A+9A^2$ 이고, $6A$ 의 성분 가운데 $9$ 로 나누어지지 않는 것이 있으므로 $g^2\ne I$ 다. 세제곱하면 다음이 나온다.

$$
g^3=I+9A+27A^2+27A^3
$$

$9A$ 의 성분 가운데 $27$ 로 나누어지지 않는 것이 있으므로 $g^3\ne I$ 다. $A$ 의 성분이 모두 $3$ 의 배수이면 $3$ 을 더 묶어 $g=I+9A'$ 로 쓰고 같은 계산을 한다. 다른 거듭제곱도 같은 방식으로 단위행렬이 되지 않는다.

# 정의

## 비틀림 없는 군

군 $G$ 의 원소 $g$ 가 어떤 양의 정수 $m$ 에 대해 $g^m=e$ 이면 $g$ 를 **비틀림 원소(torsion element)** 라 한다. 단위원 $e$ 말고는 비틀림 원소가 없는 군을 **비틀림 없는 군(torsion-free group)** 이라 한다. 직관 절의 $S$ 와 $-I$ 는 $\mathrm{SL}\_2(\mathbb Z)$ 의 비틀림 원소이고, 성분을 $3$ 으로 나눈 나머지가 단위행렬인 원소들의 군 $\Gamma(3)$ 은 비틀림 없는 군이다. $\Gamma(3)$ 은 [합동 부분군](congruence-subgroups.md) 문서의 주합동 부분군이다.

## 진술

Selberg 보조정리는 다음 진술이다. 표수 $0$ 인 체 $F$ 위의 가역행렬의 군 $\mathrm{GL}\_n(F)$ 의 유한생성 부분군 $G$ 에는 비틀림 없는 정규부분군이 유한 지수로 들어 있다.[^1] $G=\mathrm{SL}\_2(\mathbb Z)$ 이면 $\Gamma(3)$ 이 그런 부분군이고 지수는 $\mathrm{SL}\_2(\mathbb Z/3\mathbb Z)$ 의 위수 $24$ 다.

# 성질

## 주합동 부분군의 비틀림

$N\ge 3$ 이면 성분을 $N$ 으로 나눈 나머지가 단위행렬인 정수 행렬의 군 $\Gamma_n(N)\le\mathrm{GL}\_n(\mathbb Z)$ 는 비틀림 없는 군이다. Minkowski 가 증명했다. $N=2$ 에서는 $-I\in\Gamma_n(2)$ 이므로 성립하지 않는다.

증명의 요지. $N$ 이 홀수 소수 $p$ 를 인수로 가지면 $\Gamma_n(N)\le\Gamma_n(p)$ 이므로 $\Gamma_n(p)$ 만 보면 된다. 위수가 소수 $q$ 인 $g\in\Gamma_n(p)$ 를 $g=I+p^kA$ 로 쓰고 $A$ 의 성분이 모두 $p$ 의 배수는 아니게 한다. $g^q=I$ 를 이항 전개하면 다음이 나온다.

$$
qp^kA+\binom q2p^{2k}A^2+\cdots+p^{qk}A^q=0
$$

$q\ne p$ 이면 첫 항만 $p^{k+1}$ 로 나누어지지 않아 모순이다. $q=p\ge 3$ 이면 $p$ 가 $\binom p2$ 를 나누므로 첫 항 $p^{k+1}A$ 만 $p^{k+2}$ 로 나누어지지 않아 모순이다. $N$ 이 $2$ 의 거듭제곱이면 $N\ge 4$ 이고, $g=I+2^kA$ 에서 $k\ge 2$ 이므로 같은 계산이 된다.

## 일반 경우의 증명

$G$ 의 생성원과 그 역원의 성분이 생성하는 환 $R\subseteq F$ 는 유한생성 정역이고 $G\le\mathrm{GL}\_n(R)$ 이다. $R$ 의 극대 아이디얼 $\mathfrak m$ 에서 $R/\mathfrak m$ 은 유한체이므로, 성분을 $\mathfrak m$ 으로 나눈 나머지를 취하는 사상의 핵 $G(\mathfrak m)$ 은 유한 지수 정규부분군이다.

위수가 소수 $q$ 인 $g\in G(\mathfrak m)$ 의 고윳값은 $1$ 의 $q$ 제곱근이고, $g$ 가 $\mathfrak m$ 을 법으로 $I$ 이므로 $g\ne I$ 의 고윳값 가운데 원시 $q$ 제곱근 $\zeta$ 가 있고, $R\lbrack\zeta\rbrack$ 에서 $\mathfrak m$ 을 포함하는 극대 아이디얼에 $1-\zeta$ 가 든다. $\prod_{j=1}^{q-1}(1-\zeta^j)=q$ 이므로 $q\in\mathfrak m$ 이고, $q$ 는 $R/\mathfrak m$ 의 표수다. $R$ 은 표수가 $0$ 이므로 잉여체의 표수가 서로 다른 극대 아이디얼 $\mathfrak m_1,\mathfrak m_2$ 가 있고, $G(\mathfrak m_1)\cap G(\mathfrak m_2)$ 에는 위수가 소수인 원소가 없다. 유한 위수의 원소는 거듭제곱해서 위수가 소수인 원소를 주므로 이 교집합이 비틀림 없는 군이다.

## 잉여 유한성

같은 축소 사상으로 다음도 증명된다. 유한생성 선형군 $G$ 의 원소 $g\ne e$ 마다, $g$ 를 단위원이 아닌 원소로 보내는 유한군으로의 준동형이 있다. 이 성질을 **잉여 유한성(residual finiteness)** 이라 하고, 유한생성 선형군에 대한 이 진술을 Malcev 정리(Malcev's theorem)라 한다. $g-I$ 의 성분 가운데 $0$ 이 아닌 것을 포함하지 않는 극대 아이디얼 $\mathfrak m$ 을 고르면 축소 사상이 그 준동형이다.

# 활용

- [합동 부분군](congruence-subgroups.md)의 몫 곡면. $\Gamma(3)$ 은 비틀림 없으므로 상반평면을 $\Gamma(3)$ 으로 나눈 몫은 원뿔점이 없는 곡면이고, 구면에서 첨점 네 개를 뺀 것이다. $\mathrm{PSL}\_2(\mathbb Z)$ 안에서 지수가 $12$ 이고 첨점마다 폭이 $3$ 이므로 첨점은 $12/3=4$ 개다.
- 유리수 [Euler 지표](euler-characteristic.md). 비틀림 원소가 있는 군 $G$ 의 Euler 지표를 비틀림 없는 부분군 $G'$ 의 Euler 지표를 지수로 나눈 값으로 정의한다. $\Gamma(3)$ 의 몫 곡면은 Euler 지표가 $2-4=-2$ 이므로 $\mathrm{PSL}\_2(\mathbb Z)$ 의 Euler 지표는 $-2/12=-1/6$ 이다.
- [Bianchi 군](bianchi-groups.md)과 산술군. 비틀림 원소가 있는 이산군 $\Gamma\le\mathrm{PSL}\_2(\mathbb C)$ 에서 유한 지수의 비틀림 없는 부분군을 고르면 그 몫이 유한 부피 완비 쌍곡 3 다양체가 된다.

[^1]: A. Selberg, "On discontinuous groups in higher-dimensional symmetric spaces", in *Contributions to Function Theory*, Tata Institute of Fundamental Research, Bombay, 1960, 147–164.

# 연관 문서

## 선수지식

- [합동 부분군](congruence-subgroups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #differential_geometry
