# Mayer–Vietoris 완전열

# 개요

**Mayer–Vietoris 완전열(Mayer–Vietoris exact sequence)** 은 공간을 두 열린집합으로 나눠 그 [호몰로지](homology.md)를 계산하는 긴 [완전열](exact-sequences.md)이다. 구면을 북반구와 남반구로 나누면 두 반구에는 구멍이 없고 겹친 띠에는 원 모양 구멍 하나가 있는데, 조각의 값을 더하기만 하면 구면이 감싸는 빈 공간이 사라져 틀린 답이 나온다. 이 완전열은 겹친 부분의 구멍이 전체에서 한 차원 높은 구멍으로 바뀌는 것까지 계산해 전체의 호몰로지를 준다.

# 직관

구면 $S^2$ 의 호몰로지를 조각에서 구한다. 적도를 조금 넘기도록 북반구를 $A$, 남반구를 $B$ 로 잡으면 $A$ 와 $B$ 는 각각 원판으로 수축하므로 $k\ge 1$ 에서 $H_k(A)=H_k(B)=0$ 이고, 교집합 $A\cap B$ 는 적도를 둘러싼 띠라 원과 호모토피 동치여서 $H_1(A\cap B)\cong\mathbb Z$ 다. 세 조각의 호몰로지는 전부 알지만 조각의 값을 더해서는 $H_2(S^2)$ 가 $0$ 이 되어 틀린 답이 나온다. 구면 전체를 덮는 2 차 순환은 두 반구 어디에도 들어가지 않는다.

조각마다 끊어 보지 않고 사슬을 더한다. $A$ 의 사슬과 $B$ 의 사슬을 합치면 $S^2$ 의 사슬이 되고, 겹치는 부분의 사슬은 두 번 센 만큼 빼야 한다. 뺀 양이 $A\cap B$ 의 사슬이므로 세 사슬 복합체가 짧은 완전열을 이루고, 뱀 보조정리(snake lemma)가 그것을 호몰로지의 긴 완전열로 옮긴다. 그 열에서 사상 $H_2(S^2)\to H_1(A\cap B)$ 의 양옆이 $H_2(A)\oplus H_2(B)=0$ 과 $H_1(A)\oplus H_1(B)=0$ 이므로 이 사상은 동형이고 $H_2(S^2)\cong\mathbb Z$ 가 나온다.

# 정의

## 작은 사슬 복합체

$X=A\cup B$ 가 열린집합 $A$ 와 $B$ 의 합집합일 때, 특이 사슬 복합체 $C\_\ast(X)$ 안에서 상이 $A$ 에 들어가는 특이 단체와 $B$ 에 들어가는 특이 단체가 생성하는 부분복합체를 다음으로 쓴다.

$$
C\_\ast^{A,B}(X)=C\_\ast(A)+C\_\ast(B)
$$

직관 절의 구면에서 구면 전체로 가는 특이 2 단체는 $C\_2^{A,B}(S^2)$ 에 들지 않고, 북반구 안의 특이 단체와 남반구 안의 특이 단체의 합은 $C\_2^{A,B}(S^2)$ 에 든다.

## Mayer–Vietoris 열

포함사상에서 오는 두 사슬 사상을 다음으로 둔다.

$$
\varphi(c)=(c,-c),\qquad \psi(a,b)=a+b
$$

순환 $z\in C\_n^{A,B}(X)$ 를 $z=a+b$ ($a$ 는 $A$ 의 사슬, $b$ 는 $B$ 의 사슬) 로 쓰면 $\partial a=-\partial b$ 는 $A\cap B$ 의 순환이다. 그 호몰로지류를 $\partial\lbrack z\rbrack$ 로 두어 얻는 $\partial\colon H\_n(X)\to H\_{n-1}(A\cap B)$ 를 **연결 준동형(connecting homomorphism)** 이라 하고, $\varphi\_\ast$, $\psi\_\ast$, $\partial$ 로 이은 다음 열을 **Mayer–Vietoris 열** 이라 한다.

$$
\cdots\to H\_n(A\cap B)\xrightarrow{\varphi\_\ast}H\_n(A)\oplus H\_n(B)\xrightarrow{\psi\_\ast}H\_n(X)\xrightarrow{\partial}H\_{n-1}(A\cap B)\to\cdots\to H\_0(X)\to 0
$$

직관 절의 구면에서 기본류 $\lbrack S^2\rbrack$ 를 북반구 쪽 조각 $a$ 와 남반구 쪽 조각 $b$ 로 나누면 $\partial a$ 는 적도를 한 바퀴 도는 순환이고, $\partial\lbrack S^2\rbrack$ 는 $H_1(A\cap B)\cong\mathbb Z$ 의 생성원이다.

# 성질

## 사슬 수준의 짧은 완전열

다음은 사슬 복합체의 짧은 완전열이다.

$$
0\to C\_\ast(A\cap B)\xrightarrow{\varphi}C\_\ast(A)\oplus C\_\ast(B)\xrightarrow{\psi}C\_\ast^{A,B}(X)\to 0
$$

$\varphi$ 의 단사성과 $\psi$ 의 전사성은 정의에서 바로 나오고, $\mathrm{im}\thinspace\varphi=\ker\psi$ 는 $a+b=0$ 인 쌍이 $a=-b\in C\_\ast(A)\cap C\_\ast(B)=C\_\ast(A\cap B)$ 를 만족한다는 것이다. 연결 준동형은 대표원 $a,b$ 의 선택과 무관하다.

## 작은 사슬 정리

$A$ 와 $B$ 가 열린집합이면 포함사상 $C\_\ast^{A,B}(X)\hookrightarrow C\_\ast(X)$ 는 호몰로지의 동형을 유도한다. 증명은 중심세분(barycentric subdivision)을 반복해 각 단체를 $A$ 또는 $B$ 안에 들어가는 조각으로 쪼개고, 세분이 항등사상과 사슬 호모토픽함을 보이는 것이다.

## 완전성

Mayer–Vietoris 정리(Mayer–Vietoris theorem)는 Mayer–Vietoris 열이 완전열이라는 것이다. 위 짧은 완전열의 긴 호몰로지 완전열에서 $C\_\ast^{A,B}(X)$ 의 호몰로지를 작은 사슬 정리로 $H\_\ast(X)$ 로 바꾸면 나온다. $A\cap B$ 가 비어 있지 않으면 축소 호몰로지에서도 같은 열이 완전하다.

## 구면의 호몰로지

$n\ge 2$ 에서 $S^n$ 을 두 반구 $A$, $B$ 로 덮으면 각각 $\mathbb R^n$ 과 위상동형이라 축소 호몰로지가 모두 $0$ 이고 $A\cap B$ 는 $S^{n-1}$ 과 호모토피 동치다. 축소 판본의 긴 완전열에서 양 끝이 $0$ 이므로 모든 $k$ 에서 다음이 성립한다.

$$
\tilde H\_k(S^n)\cong\tilde H\_{k-1}(S^{n-1})
$$

$\tilde H\_k(S^1)$ 이 $k=1$ 에서 $\mathbb Z$ 이고 그 밖에서 $0$ 이므로 귀납으로 $H\_k(S^n)$ 은 $k=0$ 과 $k=n$ 에서 $\mathbb Z$ 이고 그 밖에서 $0$ 이다.

## 쐐기합

기점이 좋은 근방을 갖는 공간 $X$, $Y$ 에 대해 다음이 성립한다.

$$
\tilde H\_n(X\vee Y)\cong\tilde H\_n(X)\oplus\tilde H\_n(Y)
$$

기점의 근방을 각각 $X$, $Y$ 쪽으로 조금 키운 두 열린집합을 잡으면 교집합이 수축가능하므로 축소 판본의 열에서 양 끝이 $0$ 이다.

## 코호몰로지 판본

[코호몰로지](cohomology.md)에서는 화살표의 방향이 뒤집힌다.

$$
\cdots\to H^n(X)\to H^n(A)\oplus H^n(B)\to H^n(A\cap B)\xrightarrow{\delta}H^{n+1}(X)\to\cdots
$$

각 차수에서 $C\_n^{A,B}(X)$ 는 자유 아벨군이라 사슬 수준의 짧은 완전열이 분할되고, 그래서 $\mathrm{Hom}(\cdot,G)$ 를 적용해도 완전하다. [de Rham 코호몰로지](de-rham-cohomology.md)에서는 미분형식의 복합체에 같은 열을 세우고 연결 준동형을 [단위분할](partitions-of-unity.md)로 만든다.

## 열린집합이 아닌 덮개

$A$ 와 $B$ 가 각각 어떤 열린 근방의 변형 수축핵(deformation retract)이면 그 근방에 정리를 적용하고 호모토피 동치로 옮겨 같은 열을 얻는다. [CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology)의 부분복합체 쌍이 이 조건을 만족하므로, 세포 구조로 주어진 공간에서는 닫힌 부분복합체로 덮어 쓴다.

# 활용

- 호몰로지의 표준 계산. 구면, 원환면, [실사영공간](real-projective-space.md)의 호몰로지를 경계 [행렬](matrices.md)을 직접 다루지 않고 조각의 값에서 얻는다. 원환면은 두 열린 원기둥으로 덮고, 교집합이 원 두 개와 호모토피 동치인 점을 쓴다.
- [Euler 지표](euler-characteristic.md)의 합 규칙. $\chi(X\cup Y)=\chi(X)+\chi(Y)-\chi(X\cap Y)$ 는 Mayer–Vietoris 열에 유한 길이 완전열의 교대합이 $0$ 이라는 사실을 적용한 것이다.
- de Rham 정리. de Rham 코호몰로지와 특이 코호몰로지가 같다는 정리의 증명은 좋은 덮개를 잡아 두 이론의 Mayer–Vietoris 열을 나란히 놓고 다섯 보조정리(five lemma)로 귀납하는 것이다.
- [Hartshorne–Lichtenbaum 소멸 정리](hartshorne-lichtenbaum.md). 증명은 아이디얼이 한 원소로 생성된 경우를 먼저 처리하고, 생성원 개수에 대한 귀납과 [국소 코호몰로지](local-cohomology.md)의 Mayer–Vietoris 열로 일반의 경우를 그 경우로 환원한다. 덮개 대신 아이디얼의 쪼갬이 들어간다.
- [Jordan 곡선 정리](jordan-curve-theorem.md). $S^n$ 에서 원판과 위상동형인 집합을 뺀 집합의 축소 호몰로지가 $0$ 임을 원판을 반쪽씩 나눠 이 완전열로 귀납해 보이면, $S^2$ 에서 원과 위상동형인 곡선을 뺀 집합의 $\tilde H_0$ 이 $\mathbb Z$ 이고, 곡선의 여집합은 연결 성분 둘로 나뉜다.

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)
- [완전열](exact-sequences.md)

## 더 알아보기

- [Jordan 곡선 정리](jordan-curve-theorem.md)

#algebraic_topology #topology #algebra #differential_geometry
