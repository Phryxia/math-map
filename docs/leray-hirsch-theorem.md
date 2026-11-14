# Leray–Hirsch 정리

# 개요

**Leray–Hirsch 정리(Leray–Hirsch theorem)** 는 곱공간이 아닌 다발의 코호몰로지를 밑공간과 올의 코호몰로지로 계산하는 정리다. 띠를 한 번 비틀어 양 끝을 붙이면 원 위에 원이 올라앉은 공간이 되는데, 원환면과 Klein 병이 모두 이렇게 생겼다. 원환면은 원 두 개의 곱이라 [Künneth 공식](kunneth-formula.md)으로 코호몰로지가 나오지만, Klein 병은 곱이 아니어서 같은 공식을 쓸 수 없다. Leray–Hirsch 정리는 올의 코호몰로지류가 전체공간의 류로 늘어나기만 하면 곱이 아니어도 Künneth 공식과 같은 꼴의 답이 나온다고 정한다.

# 직관

Klein 병 $K$ 는 원기둥 $\lbrack 0,1\rbrack\times S^1$ 의 양 끝 원을 반사 $z\mapsto\bar z$ 로 붙인 공간이다. 첫 좌표를 보내는 사상 $K\to S^1$ 의 각 점 위에는 원 하나가 있다. 원기둥의 양 끝을 항등사상으로 붙이면 원환면 $T^2=S^1\times S^1$ 이 나오고, 이것은 곱이므로 Künneth 공식으로 $H^0,H^1,H^2$ 가 $\mathbb Z,\mathbb Z^2,\mathbb Z$ 다.

Klein 병의 정수 계수 코호몰로지는 $\mathbb Z,\mathbb Z,\mathbb Z/2$ 여서 원환면과 다르다. 원환면에서는 올인 원을 한 바퀴 도는 것에 $1$ 을 주는 $1$ 차 코호몰로지류가 전체공간에서 정의된다. Klein 병에서는 밑공간을 한 바퀴 돌아 오면 올의 방향이 뒤집히므로, 그런 류가 있다면 같은 올에서 $1$ 과 $-1$ 을 함께 주어야 한다. 그래서 올의 류가 전체공간의 류로 늘어나지 않는다.

계수를 $\mathbb Z/2$ 로 바꾸면 $-1=1$ 이어서 방향이 뒤집히는 것이 문제가 되지 않는다. 올을 한 번 도는 것에 $1$ 을 주는 류 $b\in H^1(K;\mathbb Z/2)$ 가 전체공간에서 정의되고, 밑공간에서 당겨 온 류 $a$ 와 함께 쓰면 $H^\ast(K;\mathbb Z/2)$ 의 차원이 $1,2,1$ 로 원환면과 같다. 전체공간의 코호몰로지가 밑공간의 코호몰로지에 $1$ 과 $b$ 를 곱한 것들로 빠짐없이, 겹치지 않게 적힌다.

# 정의

## 올다발

연속사상 $p\colon E\to B$ 가 공간 $F$ 를 올로 하는 **올다발(fiber bundle)** 이라는 것은, $B$ 의 각 점에 열린 근방 $U$ 와 위상동형 $p^{-1}(U)\cong U\times F$ 가 있어 이 동형이 $p$ 를 첫 성분의 사영으로 보낸다는 것이다. 올다발은 [올화](fibrations.md)다. 직관 절의 $K\to S^1$ 은 올이 $S^1$ 인 올다발이고, 밑공간의 작은 호 위에서는 곱이지만 전체로는 곱이 아니다.

## 올로의 제한

$b\_0\in B$ 위의 올 $F=p^{-1}(b\_0)$ 의 포함사상을 $i\colon F\to E$ 라 한다. 류 $c\in H^k(E;R)$ 의 제한 $i^\ast c\in H^k(F;R)$ 이 올의 코호몰로지에서 어떤 류인지를 본다. 직관 절의 $b$ 는 $i^\ast b$ 가 $H^1(S^1;\mathbb Z/2)$ 의 생성원인 류다.

# 성질

## Leray–Hirsch 정리

$p\colon E\to B$ 가 올이 $F$ 인 올다발이고 $R$ 가 가환환이며 다음 두 조건이 성립한다고 하자[^1].

- 각 $n$ 에서 $H^n(F;R)$ 이 유한생성 자유 $R$ 가군이다.
- 류 $c_j\in H^{k_j}(E;R)$ 들이 있어, 모든 올에서 제한 $i^\ast c_j$ 들이 $H^\ast(F;R)$ 의 기저를 이룬다.

그러면 다음 사상은 $R$ 가군의 동형이다.

$$
\Phi\colon H^\ast(B;R)\otimes_RH^\ast(F;R)\to H^\ast(E;R),\qquad \beta\otimes i^\ast c_j\mapsto p^\ast\beta\cup c_j
$$

$\Phi$ 는 $H^\ast(B;R)$ 가군의 동형이기도 하다. $H^\ast(E;R)$ 은 $c_j$ 들을 기저로 하는 자유 $H^\ast(B;R)$ 가군이다. Klein 병에서 $R=\mathbb Z/2$, $c_1=1$, $c_2=b$ 로 두면 조건이 성립하고, $H^\ast(K;\mathbb Z/2)$ 은 $1$ 과 $b$ 를 기저로 하는 자유 $H^\ast(S^1;\mathbb Z/2)$ 가군이다.

증명의 요지. $B$ 가 유한 [CW 복합체](cw-complexes.md)(closure-finite weak topology)이면 세포의 개수에 대한 귀납법이다. 다발이 곱인 열린 집합 위에서는 $\Phi$ 가 Künneth 동형이다. 두 열린 집합의 합집합 위에서는 양쪽의 [Mayer–Vietoris 완전열](mayer-vietoris.md)을 $\Phi$ 가 잇고, 다섯 보조정리(five lemma)로 동형이 늘어난다. 일반적인 $B$ 는 CW 근사와 극한으로 넘어간다.

## 환 동형이 아님

$\Phi$ 는 가군의 동형이고 환의 동형이 아니다. 원환면의 $\mathbb Z/2$ 계수 코호몰로지에서 올의 류 $b$ 는 $b^2=0$ 이다. Klein 병에서는 $b^2=ab\ne0$ 이다.

$K$ 는 방향을 줄 수 없는 닫힌 곡면이어서 $\mathbb Z/2$ 계수의 컵곱 쌍 $H^1\times H^1\to H^2$ 에 제곱이 $0$ 이 아닌 류가 있고, $a^2=0$ 이므로 그 류는 $b$ 나 $a+b$ 이며 두 경우 모두 제곱이 $b^2$ 이다. 차원은 같아도 두 환은 동형이 아니다.

## 스펙트럼 수열로 본 조건

[스펙트럼 수열](spectral-sequences.md)로는 다음과 같다. 정리의 두 조건 아래 Serre 스펙트럼 수열의 $E_2$ 항이 $H^\ast(B;R)\otimes H^\ast(F;R)$ 이고, 올의 류가 전체공간으로 늘어나므로 모든 미분이 $0$ 이어서 $E_2=E_\infty$ 다. 직관 절의 정수 계수 Klein 병에서는 밑공간의 기본군이 올의 코호몰로지에 $-1$ 로 작용해 $E_2$ 항부터 곱의 꼴이 아니다.

## 사영다발 공식

$E\to B$ 가 계수 $n$ 인 복소 [벡터다발](vector-bundles.md)이면, 각 올의 복소 직선 전체로 만든 사영다발 $P(E)\to B$ 는 올이 $\mathbb{CP}^{n-1}$ 인 올다발이다. $P(E)$ 위의 표준 선다발의 첫 Chern 류 $x\in H^2(P(E);\mathbb Z)$ 의 거듭제곱 $1,x,\dots,x^{n-1}$ 은 각 올에서 $H^\ast(\mathbb{CP}^{n-1};\mathbb Z)$ 의 기저로 제한된다. 그러므로 $H^\ast(P(E);\mathbb Z)$ 는 $1,x,\dots,x^{n-1}$ 을 기저로 하는 자유 $H^\ast(B;\mathbb Z)$ 가군이고, 이것을 사영다발 공식(projective bundle formula)이라 한다.

# 활용

- [특성류](characteristic-classes.md). 사영다발 공식에서 $x^n$ 은 기저 $1,x,\dots,x^{n-1}$ 의 $H^\ast(B)$ 계수 결합으로 유일하게 적힌다. Grothendieck 은 그 계수로 Chern 류 $c_1(E),\dots,c_n(E)$ 를 정의했다[^2]. 같은 논법을 실사영다발과 $\mathbb Z/2$ 계수로 하면 [Stiefel–Whitney 류](stiefel-whitney-classes.md)가 나온다.
- 분할 원리. $p^\ast\beta=\Phi(\beta\otimes1)$ 이고 $\Phi$ 가 동형이므로 $p^\ast\colon H^\ast(B)\to H^\ast(P(E))$ 는 단사다. 사영다발을 되풀이해 깃발다발(flag bundle)로 가면 $E$ 의 당김이 선다발의 직합으로 쪼개지고 코호몰로지는 단사로 옮겨진다.
- [깃발다양체](flag-varieties.md). $\mathbb C^n$ 의 완전 깃발 다양체는 사영다발을 $n-1$ 번 쌓은 공간이고, Leray–Hirsch 정리를 되풀이해 코호몰로지가 자유 가군이며 계수 합이 $n!$ 임을 얻는다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 정리 4D.1. 같은 절이 사영다발과 깃발다발의 코호몰로지를 계산한다.
[^2]: A. Grothendieck, "La théorie des classes de Chern", *Bulletin de la Société Mathématique de France* 86 (1958).

# 연관 문서

## 선수지식

- [Künneth 공식](kunneth-formula.md)
- [올화](fibrations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
