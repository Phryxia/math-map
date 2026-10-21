# Bott 주기성

# 개요

**Bott 주기성(Bott periodicity)** 은 안정 유니터리군 $U$ 의 호모토피군이 주기 $2$ 로, 안정 직교군 $O$ 의 호모토피군이 주기 $8$ 로 되풀이된다는 정리다.

$$
\pi\_k(U)\cong\pi\_{k+2}(U),\qquad \pi\_k(O)\cong\pi\_{k+8}(O)
$$

[분류공간](classifying-spaces.md)으로 옮기면 $\Omega^2BU\simeq\mathbb Z\times BU$ 와 $\Omega^8BO\simeq\mathbb Z\times BO$ 이고, 위상 K 이론이 주기 $2$ 와 $8$ 의 일반화 코호몰로지 이론이 된다. Bott 가 1959 년에 [Morse 이론](morse-theory.md)으로 증명했다.

# 직관

[Lie 군](lie-groups.md) $U(n)$ 은 $\mathbb C^n$ 의 단위벡터 하나를 고정하는 부분군이 $U(n-1)$ 이고, 단위벡터 전체가 구면 $S^{2n-1}$ 이므로 올화 $U(n-1)\to U(n)\to S^{2n-1}$ 이 있다. 구면의 낮은 차수 호모토피군이 $0$ 이어서 $\pi\_k(U(n))$ 은 $n$ 이 $k$ 에 비해 크면 $n$ 에 의존하지 않는다. 그 값을 $\pi\_k(U)$ 라 쓴다.

작은 차수를 직접 구한다. $U(n)$ 은 연결이므로 $\pi\_0(U)=0$ 이다. 행렬식 $U(n)\to S^1$ 이 $\pi\_1(U)\cong\mathbb Z$ 를 준다. $\pi\_2$ 는 모든 Lie 군에서 $0$ 이다. $SU(2)$ 가 구면 $S^3$ 이므로 $\pi\_3(U)\cong\mathbb Z$ 다. 값이 $0,\mathbb Z,0,\mathbb Z$ 로 번갈아 나오고, Bott 주기성은 이 번갈음이 모든 차수에서 이어진다는 것이다.

직교군에서 같은 계산을 하면 $\pi\_0(O)=\mathbb Z/2$ (행렬식의 부호), $\pi\_1(O)=\mathbb Z/2$ (스핀 이중덮개), $\pi\_2(O)=0$, $\pi\_3(O)=\mathbb Z$ 이고, 그 뒤 $0,0,0,\mathbb Z$ 가 이어진 다음 처음으로 돌아온다.

# 정의

$U(n)\subset U(n+1)$ 을 왼쪽 위 블록으로 넣어 합집합 $U=\bigcup\_nU(n)$ 을 **안정 유니터리군(stable unitary group)** 이라 하고, 같은 방식으로 **안정 직교군** $O=\bigcup\_nO(n)$ 을 정의한다. $BU$ 와 $BO$ 는 각각의 분류공간이고, $\Omega$ 는 고리공간을 취하는 조작이다. 분류공간에 대해 $\Omega BG\simeq G$ 이다.

# 성질

## 정리

**정리(Bott, 1959).** 호모토피 동치

$$
\Omega U\simeq\mathbb Z\times BU,\qquad \Omega^7O\simeq\mathbb Z\times BO
$$

이 존재한다[^1]. 따라서 호모토피군은 다음 주기표를 따른다.

| k mod 8 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| U 의 호모토피군 | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z$ |
| O 의 호모토피군 | $\mathbb Z/2$ | $\mathbb Z/2$ | $0$ | $\mathbb Z$ | $0$ | $0$ | $0$ | $\mathbb Z$ |

증명의 요지. Bott 는 $SU(2m)$ 위의 항등원에서 $-I$ 로 가는 경로 공간에 에너지 범함수의 Morse 이론을 썼다. 가장 짧은 측지선들의 공간이 [Grassmann 다양체](grassmannian.md) $\mathrm{Gr}(m,2m)$ 이고, 다른 임계점의 지표가 크게 자라므로 낮은 차수에서는 경로 공간과 이 Grassmann 다양체가 같은 호모토피군을 갖는다. $m\to\infty$ 의 극한이 $\Omega SU\simeq BU$ 다.

## K 이론의 주기성

복소 [벡터다발](vector-bundles.md)의 안정 동형류는 $BU$ 로 가는 사상의 호모토피류이므로 $\widetilde K(X)=\lbrack X,\mathbb Z\times BU\rbrack$ 이고, 주기성은

$$
\widetilde K(\Sigma^2X)\cong\widetilde K(X)
$$

이 된다. 구면에서는 $\widetilde K(S^{n})$ 이 $n$ 이 짝수이면 $\mathbb Z$, 홀수이면 $0$ 이다. Atiyah 와 Bott 는 이 동형을 $X\times S^2$ 위의 다발을 붙이는 함수(clutching function)로 직접 증명했다[^2]. 실 K 이론 $\widetilde{KO}(S^n)$ 은 $n\equiv 0,1,2,4\pmod 8$ 에서 $\mathbb Z,\mathbb Z/2,\mathbb Z/2,\mathbb Z$ 이고 나머지에서 $0$ 이다.

## Clifford 대수와의 대응

실 [Clifford 대수](clifford-algebras.md) $\mathrm{Cl}\_n$ 의 꼴은 $n$ 에 대해 주기 $8$ 로 되풀이되고, Atiyah–Bott–Shapiro 는 $\widetilde{KO}(S^n)$ 을 Clifford 가군의 Grothendieck 군의 몫으로 적었다[^3]. 실 Bott 주기성의 주기 $8$ 이 Clifford 대수의 주기 $8$ 과 같은 것이다.

# 활용

- **구면 위의 다발.** 계수가 큰 복소 벡터다발이 $S^k$ 위에 몇 가지인지는 $\pi\_{k-1}(U)$ 이므로 $k$ 가 짝수이면 $\mathbb Z$, 홀수이면 하나다.
- **Hopf 불변량 $1$ 문제.** Adams 와 Atiyah 는 K 이론의 Adams 연산으로 [Hopf 불변량](hopf-invariant.md)이 $1$ 인 사상이 $S^1$, $S^3$, $S^7$ 에서 오는 것뿐임을 보였다. 이 계산이 Bott 주기성으로 정한 $\widetilde K(S^{2n})$ 의 생성원을 쓴다.
- **지표 정리.** [지표 정리](index-theorem.md)의 위상적 지표는 K 이론의 Thom 동형과 Bott 주기성으로 정의된다. [작용소 K 이론](operator-k-theory.md)에서 같은 주기성이 $C^\ast$ 대수의 $K\_0$ 과 $K\_1$ 을 잇는다.

[^1]: R. Bott, "The stable homotopy of the classical groups", *Annals of Mathematics* 70 (1959), 313–337.
[^2]: M. F. Atiyah, R. Bott, "On the periodicity theorem for complex vector bundles", *Acta Mathematica* 112 (1964), 229–247.
[^3]: M. F. Atiyah, R. Bott, A. Shapiro, "Clifford modules", *Topology* 3 (1964), suppl. 1, 3–38.

# 연관 문서

## 선수지식

- [Lie 군](lie-groups.md)
- [분류공간](classifying-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
