# 유도 함자

# 개요

유도 함자는 완전열을 보존하지 못하는 [함자](functors.md)의 실패를 측정하는 함자의 열이다. [가군](modules.md) 범주에서 [텐서곱](tensor-products.md) $M \otimes_R -$ 은 우완전이고 $\mathrm{Hom}\_R(M, -)$ 은 좌완전이며, 둘 다 반대쪽 완전성을 잃는다. 잃어버린 정보는 사라지지 않고 $\mathrm{Tor}$ 과 $\mathrm{Ext}$ 라는 새 가군에 남는다.

구성은 세 단계다. 가군을 사영가군이나 단사가군의 분해로 바꾸고, 그 분해에 함자를 적용하고, 얻은 복합체의 호몰로지를 취한다. 결과가 분해의 선택에 무관하다는 것이 이 구성의 핵심 정리이고, 짧은 완전열 하나가 유도 함자의 긴 완전열로 늘어나는 것이 주된 계산 수단이다.

# 직관

## 완전성의 실패

짧은 완전열 $0 \to A \to B \to C \to 0$ 에 함자 $F$ 를 적용하면 완전성이 한쪽 끝에서 깨진다. $F = - \otimes_{\mathbb Z} \mathbb Z/2\mathbb Z$ 와 곱하기 $2$ 로 주어지는 열 $0 \to \mathbb Z \to \mathbb Z \to \mathbb Z/2\mathbb Z \to 0$ 이 그 예다. 적용 결과는 $\mathbb Z/2\mathbb Z \to \mathbb Z/2\mathbb Z \to \mathbb Z/2\mathbb Z \to 0$ 이고 첫 사상이 영사상이므로 왼쪽 끝의 단사성이 깨진다.

깨진 자리에 무엇을 놓으면 완전열이 이어지는지 묻는 것이 유도 함자의 출발이다. 위 예에서 그 자리에 놓이는 가군이 $\mathrm{Tor}\_1^{\mathbb Z}(\mathbb Z/2\mathbb Z, \mathbb Z/2\mathbb Z) \cong \mathbb Z/2\mathbb Z$ 다.

## 분해에 의한 근사

사영가군 위에서는 $\mathrm{Hom}$ 이 완전하고 자유가군 위에서는 텐서곱이 완전하다. 임의의 가군은 그런 좋은 가군들의 완전열로 덮을 수 있고, 함자를 가군에 직접 적용하는 대신 덮개에 적용한 뒤 호몰로지로 원래 가군의 몫을 되돌린다.

# 정의

## 사영 분해

가군 $M$ 의 **사영 분해**는 각 $P_n$ 이 사영가군인 완전열이다.

$$
\cdots \to P_2 \xrightarrow{d_2} P_1 \xrightarrow{d_1} P_0 \xrightarrow{\varepsilon} M \to 0
$$

모든 가군은 사영 분해를 가진다. 자유가군에서 $M$ 위로 가는 전사 $P_0 \to M$ 을 잡고 그 핵에 같은 구성을 되풀이하면 된다. 절단된 복합체 $P_\bullet$ 은 $M$ 을 뗀 $\cdots \to P_1 \to P_0 \to 0$ 을 가리킨다.

**단사 분해**는 쌍대로 정의한다. 각 $I^n$ 이 단사가군인 완전열 $0 \to M \to I^0 \to I^1 \to \cdots$ 이다. 가군 범주에서는 모든 가군이 단사가군에 매장된다.

## 왼쪽 유도 함자

$F$ 가 가법 우완전 함자일 때 $M$ 의 $n$ 번째 **왼쪽 유도 함자**는 사영 분해 $P_\bullet$ 을 써서 정의한다.

$$
L_nF(M) = H_n\bigl(F(P_\bullet)\bigr)
$$

$F(P_\bullet)$ 은 사슬 복합체 $\cdots \to F(P_1) \to F(P_0) \to 0$ 이고 $H_n$ 은 그 $n$ 번째 [호몰로지](homology.md)다.

## 오른쪽 유도 함자

$G$ 가 가법 좌완전 함자일 때 $M$ 의 $n$ 번째 **오른쪽 유도 함자**는 단사 분해 $I^\bullet$ 을 써서 정의한다.

$$
R^nG(M) = H^n\bigl(G(I^\bullet)\bigr)
$$

## Tor 와 Ext

환 $R$ 위의 두 가군 $M, N$ 에 대해 두 유도 함자를 다음으로 정의한다.

$$
\mathrm{Tor}\_n^R(M, N) = L_n(- \otimes_R N)(M), \qquad \mathrm{Ext}\_R^n(M, N) = R^n \mathrm{Hom}\_R(M, -)(N)
$$

$\mathrm{Ext}$ 는 둘째 변수의 단사 분해 대신 첫째 변수의 사영 분해로도 계산되며 두 결과가 자연동형이다.

# 성질

## 분해의 독립성

두 사영 분해 사이에는 항등사상을 덮는 사슬 사상이 존재하고, 그런 사슬 사상은 사슬 호모토피를 무시하면 유일하다. 가법 함자는 사슬 호모토피를 보존하므로 호몰로지가 같다. 따라서 $L_nF(M)$ 은 분해의 선택에 무관하다.

증명의 요지는 사영성의 올림 성질이다. $P_n$ 이 사영이므로 전사 위로 가는 사상은 항상 올라가고, 두 올림의 차는 다음 단계에서 호모토피를 준다.

## 0 차 항

$F$ 가 우완전이면 $L_0F \cong F$ 이고, $G$ 가 좌완전이면 $R^0G \cong G$ 다. 완전열 $P_1 \to P_0 \to M \to 0$ 에 우완전 $F$ 를 적용하면 $F(P_1) \to F(P_0) \to F(M) \to 0$ 이 완전이므로 $H_0(F(P_\bullet)) = F(M)$ 이다.

$F$ 가 완전 함자이면 모든 $n \ge 1$ 에서 $L_nF = 0$ 이다. 유도 함자가 사라지는 것과 함자가 완전인 것이 대응한다.

## 긴 완전열

짧은 완전열 $0 \to A \to B \to C \to 0$ 과 우완전 함자 $F$ 에 대해 다음 긴 완전열이 존재한다.

$$
\cdots \to L_1F(C) \to F(A) \to F(B) \to F(C) \to 0
$$

좌완전 $G$ 에 대해서는 방향이 반대인 열을 얻는다.

$$
0 \to G(A) \to G(B) \to G(C) \to R^1G(A) \to \cdots
$$

연결사상은 말굽 보조정리로 세 가군의 사영 분해를 짧은 완전열로 맞춘 뒤 뱀 보조정리를 적용해 얻는다.

## Tor 의 대칭성

$\mathrm{Tor}\_n^R(M, N) \cong \mathrm{Tor}\_n^R(N, M)$ 이 성립한다. 첫 변수를 분해하든 둘째 변수를 분해하든 같은 값을 얻는다는 사실에서 따라오며, 두 분해를 동시에 쓴 이중 복합체의 전체 복합체를 두 방향으로 계산하면 증명된다.

정수환 위의 유한생성 가군에서는 값이 명시적이다.

$$
\mathrm{Tor}\_1^{\mathbb Z}(\mathbb Z/m\mathbb Z, \mathbb Z/n\mathbb Z) \cong \mathbb Z/\gcd(m, n)\mathbb Z
$$

$n \ge 2$ 에서는 $\mathrm{Tor}\_n^{\mathbb Z} = 0$ 이다. $\mathbb Z$ 가 주 아이디얼 정역이라 모든 가군이 길이 1 의 자유 분해를 가지기 때문이다.

## 소멸에 의한 특성화

유도 함자의 소멸이 가군의 성질을 판정한다.

- $M$ 이 평탄가군인 것과 모든 $N$ 에 대해 $\mathrm{Tor}\_1^R(M, N) = 0$ 인 것이 동치다.
- $M$ 이 사영가군인 것과 모든 $N$ 에 대해 $\mathrm{Ext}\_R^1(M, N) = 0$ 인 것이 동치다.
- $N$ 이 단사가군인 것과 모든 $M$ 에 대해 $\mathrm{Ext}\_R^1(M, N) = 0$ 인 것이 동치다.

$M$ 의 사영 차원은 $\mathrm{Ext}\_R^n(M, -)$ 이 소멸하기 시작하는 가장 작은 $n$ 이고, 환 $R$ 의 대역 차원은 모든 가군의 사영 차원의 상한이다. 대역 차원이 $0$ 인 환이 반단순환이다.

## 확대의 분류

$\mathrm{Ext}\_R^1(C, A)$ 의 원소는 $0 \to A \to B \to C \to 0$ 꼴 확대의 동치류와 일대일로 대응하며, 영원소가 분열 확대에 대응한다.[^1] 이 대응이 기호 $\mathrm{Ext}$ 의 이름을 설명한다.

# 활용

- **보편계수 정리.** 사슬 복합체의 정수 계수 호몰로지에서 임의 계수 호몰로지를 얻는 짧은 완전열의 가운데 항에 $\mathrm{Tor}\_1^{\mathbb Z}$ 항이 들어간다. 계수를 바꿀 때 생기는 비틀림 보정이 이 항이다.
- **군 코호몰로지.** 군 $G$ 의 코호몰로지는 군환 위의 $\mathrm{Ext}$ 로 정의한다. $H^n(G, M) = \mathrm{Ext}\_{\mathbb Z G}^n(\mathbb Z, M)$ 이고, $H^2$ 가 [군의 확대](group-extensions.md)를 분류한다.
- **평탄성 판정.** 가군의 평탄성을 직접 검사하는 대신 $\mathrm{Tor}\_1$ 의 소멸을 확인한다. [국소화](localization-rings.md)가 평탄이라는 사실을 이 판정으로 보인다.
- **국소환의 차원 이론.** [Noether 환](noetherian-rings.md)의 국소환에서 정칙성은 유한 대역 차원과 동치이고, 증명에 Koszul 복합체로 계산한 $\mathrm{Tor}$ 을 쓴다.

[^1]: Weibel, *An Introduction to Homological Algebra*, Cambridge University Press, 1994, 3.4 절.

# 연관 문서

## 선수지식

- [Functor](functors.md)
- [텐서곱](tensor-products.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #ring_theory #category_theory #algebraic_topology
