# Casson 불변량

# 개요

Casson 불변량 $\lambda(M)$ 은 정수 호몰로지 3 구면 $M$ 의 불가약 $\mathrm{SU}(2)$ 표현을 부호를 붙여 센 수다.

$$
\lambda(M)=\tfrac12\cdot\char35{}^{\text{대수적}}\big\lbrace\rho:\pi_1(M)\to\mathrm{SU}(2)\ \text{불가약}\big\rbrace
$$

[Chern–Simons 이론](chern-simons.md)에서 평탄 $\mathrm{SU}(2)$ 접속의 게이지류는 $\pi_1(M)\to\mathrm{SU}(2)$ 표현의 켤레류와 같다. $M$ 이 정수 호몰로지 3 구면이면 $H_1(M)=0$ 이라 아벨 표현은 자명한 것뿐이고 불가약 표현만 남는다. 그 개수를 그냥 세면 $M$ 을 변형할 때 표현이 쌍으로 생겼다 사라져 불변량이 되지 않는다. 부호를 붙여 세면 쌍이 상쇄된다.

기하적으로는 Heegaard 분해에서 두 손잡이체의 표현다양체가 만나는 교차수로 정의된다. 이 수는 4 차원 위상수학의 Rokhlin 불변량을 정수로 들어 올리고, 매듭의 Alexander 다항식으로 계산되며, Ohtsuki 급수의 첫 계수로 다시 나타난다.

# 직관

## 교차 부호

Heegaard 분해 $M=H_1\cup_\Sigma H_2$ 를 쓰면 표현공간 $R(\Sigma)$ 안에서 $R(H_1)$ 과 $R(H_2)$ 의 교집합이 $R(M)$ 이다. 두 부분다양체를 조금 움직이면 교점이 생기거나 사라지는데 언제나 부호가 반대인 쌍으로 생기고 사라진다.

각 교점에 교차 부호 $\pm1$ 을 붙여 더하면 그 합이 변형에 불변이다. 손잡이체의 종수를 바꾸거나 Heegaard 분해를 바꾸어도 값이 같음을 확인하는 것이 Casson 의 원래 작업이었다.

## 수술 공식

정의만으로는 계산하기 어렵다. $K\subset S^3$ 이 매듭이면 $1/n$ 수술로 얻은 $S^3_{1/n}(K)$ 는 언제나 정수 호몰로지 구면이고

$$
\lambda\big(S^3_{1/n}(K)\big)=\frac n2\thinspace\Delta_K''(1)
$$

이다. $\Delta_K$ 는 $\Delta_K(1)=1$ 과 $\Delta_K(t)=\Delta_K(t^{-1})$ 로 정규화한 Alexander 다항식이다.

왼쪽은 $\mathrm{SU}(2)$ 표현을 세는 3 차원 게이지 이론의 양이고 오른쪽은 매듭 다이어그램에서 조합적으로 계산되는 다항식의 2 차 계수다. $\Delta_K''(1)$ 은 언제나 짝수라 값이 정수가 되며, 짝수성은 Alexander 다항식의 대칭성에서 나온다.

## Rokhlin 불변량과의 관계

Rokhlin 불변량 $\mu(M)\in\mathbb Z/2$ 는 $M$ 을 경계로 갖는 스핀 4 다양체의 교차형식의 부호수를 $16$ 으로 나눈 나머지다. Casson 은

$$
\lambda(M)\bmod2=\mu(M)
$$

를 증명했다. $\mathbb Z/2$ 값 불변량이 정수 불변량의 그림자다.

따름정리로 $\lambda(M)\ne0$ 이면 $\pi_1(M)\ne1$ 이다. 불가약 $\mathrm{SU}(2)$ 표현이 부호를 붙여 세어도 남아 있으면 기본군이 자명할 수 없다.

# 정의

## 교차수로서의 정의

> **정의 (Casson 1985).** $M$ 을 정수 호몰로지 3 구면, $M=H_1\cup_\Sigma H_2$ 를 종수 $g$ Heegaard 분해라 하자. $R^\ast(\cdot)$ 을 불가약 $\mathrm{SU}(2)$ 표현공간이라 할 때
> $$
> \lambda(M)=\frac{(-1)^g}2\big\langle R^\ast(H_1),R^\ast(H_2)\big\rangle_{R^\ast(\Sigma)}
> $$
> 여기 $\langle\cdot,\cdot\rangle$ 은 대수적 교차수다.

$R^\ast(\Sigma)$ 가 심플렉틱 다양체이고 $R^\ast(H_i)$ 가 그 안의 Lagrangian 부분다양체이므로 이 정의가 Floer 이론으로 이어진다. Casson 불변량은 순간자 Floer 호몰로지의 Euler 지표다.

$$
\lambda(M)=\tfrac12\chi\big(HF_\ast^{\text{inst}}(M)\big)
$$

세는 수가 범주화된 대상의 Euler 지표가 되는 구조는 Jones 다항식과 Khovanov 호몰로지의 관계와 같다.

## 특성에 의한 정의

> **정리.** $\lambda$ 는 다음 셋을 만족하는 유일한 함수다.
> 1. $\lambda(S^3)=0$ 이다.
> 2. 모든 매듭 $K$ 와 정수 $n$ 에 대해 $\lambda(S^3_{1/(n+1)}(K))-\lambda(S^3_{1/n}(K))=\tfrac12\Delta_K''(1)$ 이다.
> 3. 경계 이음수가 0 인 2 성분 링크에 대한 적절한 조건.

두 번째가 실제 계산의 전부다. $1/n$ 수술로 얻는 호몰로지 구면은 $n$ 에 대해 등차적으로 변하고 그 공차를 Alexander 다항식이 정한다.

# 성질

## 계산되는 예

- **Poincaré 구면.** $\Sigma(2,3,5)=S^3_{-1}(3_1)$ 이고 삼엽매듭의 $\Delta''(1)=2$ 이므로 $\lambda=-1$ 이다. $\lambda\bmod2=1$ 이 Rokhlin 불변량과 맞는다. $\pi_1$ 이 위수 120 의 이진 정이십면체군이고 불가약 $\mathrm{SU}(2)$ 표현이 두 개 있다.
- **Brieskorn 구면.** $\Sigma(p,q,r)$ 의 불가약 표현은 유한개이고 개수가 $(p-1)(q-1)(r-1)/4$ 다. Casson 불변량은 그 표현들을 부호를 붙여 센 값이고 Dedekind 합으로 닫힌 형태가 있다.
- **$\lambda=0$ 인 비자명한 예.** 표현이 있어도 부호가 상쇄되어 0 이 될 수 있으므로 $\lambda(M)=0$ 은 $M=S^3$ 을 뜻하지 않는다.

## 양자 불변량과의 관계

Ohtsuki 급수의 1 차 계수가 Casson 불변량이다. $q=e^h$ 로 두고 $\tau_k(M)$ 을 $h$ 로 전개하면

$$
\lambda_1(M)=6\thinspace\lambda(M)
$$

가 된다. 정규화에 따라 상수가 다르다. [Witten 점근 추측](witten-asymptotics.md) 쪽에서 이것은 자명한 접속 주위의 섭동전개의 첫 보정항이다.

Casson 불변량은 세 언어로 같은 것을 말한다. 게이지 이론에서는 평탄 접속의 부호 붙은 개수, 조합적 위상수학에서는 Alexander 다항식의 2 차 계수, 양자 위상수학에서는 섭동전개의 1 차 계수다.

## 확장

- **Walker–Lescop.** 유리 호몰로지 구면, 나아가 모든 닫힌 유향 3 다양체로 확장된다. Lescop 의 확장은 명시적인 수술 공식을 갖는다.
- **Floer 호몰로지.** $\lambda$ 가 Euler 지표로 올라간다. 정보량이 크게 늘고, $\lambda=0$ 이지만 Floer 호몰로지가 자명하지 않은 예가 있다.
- **$\mathrm{SU}(n)$ 판.** 더 큰 게이지군으로 같은 셈을 하려는 시도가 있고, 표현공간의 특이점 때문에 어렵다.

# 활용

## Alexander 다항식에 의한 계산

수술 공식을 쓰면 계산이 다항식 미분으로 끝난다.

$\Delta(1)=1$ 은 정규화 조건이자 $1/n$ 수술이 정수 호몰로지 구면을 주는 이유다. 수술로 얻은 다양체의 1 차 호몰로지의 위수가 $|\Delta(1)|$ 이므로 그 값이 1 인 것이 $H_1=0$ 과 같다.

$\Delta''(1)$ 은 언제나 짝수다. $\Delta(t)=\Delta(t^{-1})$ 이라 계수가 $a_i=a_{-i}$ 로 대칭이고 $i$ 와 $-i$ 의 기여가 $a_i[i(i-1)+i(i+1)]=2a_ii^2$ 로 묶인다. 교차수를 2 로 나누는데도 정수가 나오는 것이 표현이 켤레 쌍으로 나타나는 것의 대수적 그림자다.

삼엽매듭 줄의 $n=-1$ 이 Poincaré 구면 $S^3_{-1}(3_1)=\Sigma(2,3,5)$ 이고 값이 $-1$ 이므로 $\pi_1(\Sigma(2,3,5))\ne1$ 이다. 호몰로지가 $S^3$ 과 같은 다양체가 단일 연결이 아님을 이 수 하나가 증명한다. $-1\equiv1\pmod 2$ 가 Rokhlin 불변량 $\mu=1$ 과 맞는다. 8 자매듭 쪽 부호가 반대인 것은 Alexander 다항식의 가운데 계수가 $3$ 대 $-1$ 로 다르기 때문이다.

## 쓰이는 자리

- **단일 연결성의 판정.** $\lambda\ne0$ 이면 기본군이 자명하지 않다. 3 차원 Poincaré 추측이 증명되기 전 이 방향의 주요 도구였고, 구체적 다양체에 대해서는 지금도 가장 값싼 판정이다.
- **4 차원으로의 다리.** Rokhlin 불변량을 정수로 들어 올리는 성질이 4 차원 다양체의 존재 문제와 이어진다.
- **범주화의 출발점.** Floer 호몰로지가 이 수를 Euler 지표로 갖는다는 관점이 게이지 이론적 3 다양체 불변량의 틀이 되었다.

[^1]: Casson 의 강의는 출판되지 않았고, 표준 참고문헌은 S. Akbulut–J. McCarthy, *Casson's Invariant for Oriented Homology 3-Spheres: An Exposition*, Princeton Univ. Press (1990). 수술 공식과 특성화가 여기 있다.
[^2]: Floer 호몰로지와의 관계는 A. Floer, *An instanton-invariant for 3-manifolds*, Comm. Math. Phys. 118 (1988) 및 C. Taubes, *Casson's invariant and gauge theory*, J. Diff. Geom. 31 (1990). 확장은 C. Lescop, *Global Surgery Formula for the Casson–Walker Invariant* (1996).

# 연관 문서

## 선수지식

- [Chern–Simons 이론과 레벨 양자화](chern-simons.md)

## 더 알아보기

- [순간자 Floer 호몰로지](instanton-floer-homology.md)

#topology #algebraic_topology #differential_geometry
