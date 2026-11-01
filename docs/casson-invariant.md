# Casson 불변량

# 개요

**Casson 불변량(Casson invariant)**[^1] $\lambda(M)$ 은 정수 [호몰로지](homology.md) 3 구면 $M$ 의 [기본군](fundamental-group.md)을 $\mathrm{SU}(2)$ 로 보내는 표현을 부호를 붙여 센 정수다. Poincaré 의 호몰로지 구면처럼, 구멍을 세는 호몰로지로는 3 구면과 구별되지 않는 3 다양체가 있다. Casson 불변량은 이런 다양체에서 0 이 아닌 값을 가져 3 구면과 가른다.

# 직관

정수 호몰로지 3 구면은 호몰로지가 $S^3$ 과 같은 닫힌 3 다양체다. Poincaré 구면 $\Sigma(2,3,5)$ 가 그런 예이고, 그 기본군은 위수 120 인 이진 정이십면체군(binary icosahedral group)이다. 호몰로지로는 $\Sigma(2,3,5)$ 와 $S^3$ 을 가를 수 없지만 기본군은 다르다. 기본군에서 행렬군 $\mathrm{SU}(2)$ 로 가는 준동형을 세면 $S^3$ 에는 자명한 것 하나뿐이고, $\Sigma(2,3,5)$ 에는 상이 가환이 아닌 준동형이 켤레를 무시하고 두 개 있다.

기본군이 다르다는 것을 보이려면 이런 셈이 어느 다양체에서나 정의되어야 한다. 그런데 준동형들의 모임은 낱개의 점이 아니라 곡선이나 곡면일 수 있고, 그러면 하나씩 셀 수 없다. 다양체를 두 조각으로 자르면 이 모임은 두 조각의 준동형 모임이 겹치는 부분이 된다. 두 모임을 조금 움직이면 겹치는 부분이 낱개의 점이 되어 셀 수 있지만, 움직이는 방법에 따라 점이 두 개씩 생기거나 사라진다.

생기고 사라지는 두 점은 언제나 교차 부호가 반대다. 점마다 교차 부호 $\pm1$ 을 붙여 더하면 그 두 점의 기여가 상쇄되므로 합은 움직이는 방법에 의존하지 않는다. 자르는 방법을 바꾸어도 이 합이 같음을 보인 것이 Casson 의 1985 년 작업이다.

# 정의

## 표현공간

군 $\pi$ 의 **$\mathrm{SU}(2)$ 표현공간(representation space)** $R(\pi)$ 는 준동형 $\pi\to\mathrm{SU}(2)$ 들을 $\mathrm{SU}(2)$ 의 켤레로 묶은 몫공간이다. 상이 가환군이 아닌 준동형을 **불가약(irreducible)** 표현이라 하고, 그 모임을 $R^\ast(\pi)$ 로 적는다. 공간 $X$ 에 대해 $R(X)=R(\pi_1(X))$ 로 쓴다.

- $R^\ast(S^3)$ 은 공집합이다. 기본군이 자명하므로 준동형이 자명한 것 하나뿐이다.
- $R^\ast(\Sigma(2,3,5))$ 는 두 점이다. 직관의 두 준동형이다.
- 정수 호몰로지 3 구면 $M$ 에서는 $H_1(M)=0$ 이므로 가환군으로 가는 준동형은 자명한 것뿐이고, $R(M)$ 은 $R^\ast(M)$ 에 자명한 표현 한 점을 더한 것이다.

## Heegaard 분해

닫힌 유향 3 다양체 $M$ 의 **Heegaard 분해(Heegaard splitting)** 는 종수 $g$ 인 두 손잡이체(handlebody) $H_1,H_2$ 를 공통 경계 곡면 $\Sigma$ 를 따라 붙인 표시 $M=H_1\cup_\Sigma H_2$ 다. 손잡이체는 닫힌 공에 손잡이 $g$ 개를 단 3 차원 도형이다.

- $S^3$ 은 두 개의 꽉 찬 원환면을 붙인 종수 1 분해를 갖는다.
- 포함사상이 $R(M)\to R(H_i)\to R(\Sigma)$ 를 주고, [Seifert–van Kampen 정리](seifert-van-kampen.md)에 따라 $R(M)=R(H_1)\cap R(H_2)$ 다. 직관의 "두 조각의 겹치는 부분" 이 이것이다.

## Casson 불변량

$M$ 을 정수 호몰로지 3 구면, $M=H_1\cup_\Sigma H_2$ 를 종수 $g$ Heegaard 분해라 하면

$$
\lambda(M)=\frac{(-1)^g}2\big\langle R^\ast(H_1),R^\ast(H_2)\big\rangle_{R^\ast(\Sigma)}
$$

이다. $\langle\cdot,\cdot\rangle$ 은 두 부분다양체를 횡단하게 움직인 뒤 교점마다 교차 부호를 붙여 더한 대수적 교차수다. $R^\ast(\Sigma)$ 는 $6g-6$ 차원, $R^\ast(H_i)$ 는 $3g-3$ 차원이므로 교집합은 점들이 된다.

- $\lambda(S^3)=0$ 이다. $R^\ast(S^3)$ 이 비어 있으므로 교점이 없다.
- $\lambda(\Sigma(2,3,5))=-1$ 이다. 두 교점이 같은 부호이고 각각 $-\tfrac12$ 씩 기여한다.

# 성질

## 공리 특성화

$\lambda$ 는 다음 셋을 만족하는 정수 호몰로지 3 구면 위의 유일한 함수다.

1. $\lambda(S^3)=0$ 이다.
2. 모든 매듭 $K\subset S^3$ 과 정수 $n$ 에 대해 $\lambda(S^3_{1/(n+1)}(K))-\lambda(S^3_{1/n}(K))=\tfrac12\Delta_K''(1)$ 이다.
3. 이음수가 $0$ 인 2 성분 링크 $K\cup L$ 의 두 성분에 $1/m$, $1/n$ [Dehn 수술](dehn-surgery.md)을 한 다양체를 $M_{m,n}$ 이라 하면 $\lambda(M_{m+1,n})-\lambda(M_{m,n})$ 은 $n$ 에 의존하지 않는다.

$S^3_{1/n}(K)$ 는 $K$ 를 따라 $1/n$ 수술을 한 다양체이고, $\Delta_K$ 는 $\Delta_K(1)=1$ 과 $\Delta_K(t)=\Delta_K(t^{-1})$ 로 정규화한 [Alexander 다항식](alexander-polynomial.md)이다. 모든 정수 호몰로지 3 구면은 $S^3$ 에서 $\pm1$ 수술을 거듭해 얻어지므로 조건 2 와 3 으로 값이 정해진다.

## Rokhlin 불변량

**Rokhlin 불변량(Rokhlin invariant)** $\mu(M)\in\mathbb Z/2$ 는 $M$ 을 경계로 갖는 [스핀](spin-structures.md) 4 다양체의 교차형식의 부호수를 $8$ 로 나눈 값의 홀짝이다. Casson 은 정수 호몰로지 3 구면 $M$ 에 대해 $\lambda(M)\equiv\mu(M)\pmod2$ 임을 보였다.

$R^\ast(M)$ 이 비면 $\lambda(M)=0$ 이므로, $\lambda(M)\ne0$ 이면 $\pi_1(M)\ne1$ 이다. 특히 단순연결인 호몰로지 3 구면의 Rokhlin 불변량은 $0$ 이다.

## Brieskorn 구면

$\Sigma(p,q,r)$ 의 불가약 표현은 유한개이고 모두 같은 부호로 교차하므로 $\lambda(\Sigma(p,q,r))=-\tfrac12\char35{}R^\ast(\Sigma(p,q,r))$ 이다(Fintushel–Stern). 값은 $\Sigma(p,q,r)$ 을 경계로 갖는 Milnor 섬유(Milnor fiber)의 부호수 $\sigma$ 의 $1/8$ 이다(Neumann–Wahl). $\Sigma(2,3,5)$ 의 Milnor 섬유는 $E_8$ 교차형식을 갖고 $\sigma=-8$ 이므로 $\lambda=-1$ 이 다시 나온다.

표현이 있어도 부호가 상쇄되어 $0$ 이 될 수 있으므로 $\lambda(M)=0$ 은 $M=S^3$ 을 뜻하지 않는다.

## Floer 호몰로지

$R^\ast(\Sigma)$ 는 [심플렉틱 다양체](symplectic-manifolds.md)이고 $R^\ast(H_i)$ 는 그 안의 [Lagrangian 부분다양체](lagrangian-submanifolds.md)다. 두 Lagrangian 의 교점을 생성원으로 하는 사슬 복합체에서 [순간자 Floer 호몰로지](instanton-floer-homology.md)가 나오고, Casson 불변량은 그 [Euler 지표](euler-characteristic.md)의 절반이다(Taubes).[^2]

$$
\lambda(M)=\tfrac12\chi\big(HF_\ast^{\text{inst}}(M)\big)
$$

Floer 호몰로지는 $\lambda$ 보다 정보가 많아, $\lambda=0$ 이지만 Floer 호몰로지가 자명하지 않은 다양체가 있다. 세는 수가 호몰로지의 Euler 지표가 되는 같은 구조가 Jones 다항식과 [Khovanov 호몰로지](khovanov-homology.md) 사이에도 있다.

## Ohtsuki 급수

$\mathrm{SO}(3)$ 양자 불변량 $\tau_r(M)$ 을 $q-1$ 의 거듭제곱으로 전개한 Ohtsuki 급수(Ohtsuki series)의 1 차 계수가 $6\lambda(M)$ 이다. 정규화에 따라 상수가 다르다. [Witten 점근 추측과 Ohtsuki 급수](witten-asymptotics.md)의 관점에서는 자명한 접속 주위의 섭동전개의 첫 보정항이다. [Chern–Simons 이론](chern-simons.md)에서 평탄 $\mathrm{SU}(2)$ 접속의 게이지류는 $R(M)$ 의 점과 같으므로, 이 계수와 교차수 정의는 같은 대상을 센다.

## 확장

- Walker 는 유리 호몰로지 구면으로, Lescop 은 모든 닫힌 유향 3 다양체로 확장했다. Lescop 의 확장은 명시적인 수술 공식을 갖는다.
- Boden–Herald 는 $\mathrm{SU}(3)$ 표현을 세는 판을 정의했다.

# 활용

## Alexander 다항식을 쓴 계산

공리 특성화의 조건 2 를 $n$ 에 대해 더하면 닫힌 식이 나온다.

$$
\lambda\big(S^3_{1/n}(K)\big)=\frac n2\thinspace\Delta_K''(1)
$$

$1/n$ 수술로 얻은 다양체의 1 차 호몰로지의 위수는 $\vert\Delta_K(1)\vert=1$ 이므로 $S^3_{1/n}(K)$ 는 언제나 정수 호몰로지 구면이다. $\Delta_K=a_0+\sum_{i\ge1}a_i(t^i+t^{-i})$ 로 쓰면 $\Delta_K''(1)=\sum_{i\ge1}2a_ii^2$ 이므로 우변은 정수다.

삼엽매듭은 $\Delta=t-1+t^{-1}$ 이라 $\Delta''(1)=2$ 이고, $n=-1$ 이면 $S^3_{-1}(3_1)=\Sigma(2,3,5)$ 에서 $\lambda=-1$ 이 나온다. 이 계산만으로 Poincaré 구면이 단순연결이 아님이 증명된다. 8 자 매듭은 $\Delta=-t+3-t^{-1}$ 이라 $a_1=-1$ 이고 $\Delta''(1)=-2$ 로 부호가 반대다.

## 3 차원과 4 차원 위상

- $\lambda\ne0$ 이면 기본군이 자명하지 않으므로, 호몰로지 구면이 $S^3$ 과 다름을 Alexander 다항식 계산으로 보일 수 있다.
- 단순연결인 호몰로지 3 구면의 Rokhlin 불변량이 $0$ 이라는 사실로부터, [Freedman 정리](freedman-theorem.md)가 주는 $E_8$ 다양체는 삼각분할을 갖지 않음이 따른다.
- 순간자 Floer 호몰로지가 이 수를 Euler 지표로 갖는다는 사실은 게이지 이론으로 정의되는 3 [다양체](manifolds.md) 불변량의 출발점이 되었다.

[^1]: Casson 의 강의는 출판되지 않았고, 표준 참고문헌은 S. Akbulut–J. McCarthy, *Casson's Invariant for Oriented Homology 3-Spheres: An Exposition*, Princeton Univ. Press (1990). 수술 공식과 특성화가 여기 있다.
[^2]: Floer 호몰로지와의 관계는 A. Floer, *An instanton-invariant for 3-manifolds*, Comm. Math. Phys. 118 (1988) 및 C. Taubes, *Casson's invariant and gauge theory*, J. Diff. Geom. 31 (1990). 확장은 C. Lescop, *Global Surgery Formula for the Casson–Walker Invariant* (1996).

# 연관 문서

## 선수지식

- [Chern–Simons 이론](chern-simons.md)

## 더 알아보기

- [순간자 Floer 호몰로지](instanton-floer-homology.md)

#topology #algebraic_topology #differential_geometry
