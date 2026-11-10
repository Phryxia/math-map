# Deuring 대응

# 개요

**Deuring 대응(Deuring correspondence)** 은 표수 $p$ 의 초특이 타원곡선을 그 자기준동형환으로 보내, 곡선과 사원수 대수 $B_{p,\infty}$ 의 극대 순서환을 일대일로 잇는 대응이다[^1]. 초특이 타원곡선 두 개가 주어질 때 하나에서 다른 하나로 가는 동종사상을 곡선의 식만 보고 찾으려면, 곡선을 하나씩 바꿔 가며 따라가야 한다. Deuring 대응은 곡선을 사원수 대수 안의 극대 순서환으로, 동종사상을 아이디얼로 옮겨 이 물음을 [격자](lattices.md) 계산으로 바꾼다.

# 직관

표수 $11$ 의 [초특이 동종사상 그래프](supersingular-isogeny-graphs.md)에는 정점이 $j=0$ 과 $j=1728$ 두 개다. $j=1728$ 인 곡선 $E\colon y^2=x^3-x$ 에는 $\lbrack i\rbrack(x,y)=(-x,iy)$ 와 Frobenius $\pi(x,y)=(x^{11},y^{11})$ 이 있고, $\lbrack i\rbrack^2=-1$, $\pi^2=-11$, $\pi\lbrack i\rbrack=-\lbrack i\rbrack\pi$ 를 만족한다. 그래서 $E$ 의 자기준동형은 $1,\lbrack i\rbrack,\pi,\lbrack i\rbrack\pi$ 의 유리수 결합 안에 들어 있고, 이 결합 전체가 [사원수 대수](quaternion-algebras.md)를 이룬다.

자기준동형 $1+\lbrack i\rbrack$ 는 차수가 $1^2+1^2=2$ 인 동종사상이다. 이 동종사상 뒤에 자기준동형을 붙인 것 $\alpha(1+\lbrack i\rbrack)$ 를 모두 모으면 자기준동형환의 부분집합이 되고, 원소의 차수는 모두 $2$ 의 배수다. 이렇게 동종사상 하나가 자기준동형환 안의 집합 하나로 적히고, 그 집합의 원소 차수에서 동종사상의 차수 $2$ 가 나온다.

동종사상의 목적지가 다른 곡선이어도 같은 방법이 된다. $\varphi\colon E\to E'$ 이면 $E'$ 에서 $E$ 로 돌아오는 동종사상을 $\varphi$ 뒤에 붙인 것들이 $E$ 의 자기준동형환 안의 집합을 이룬다. 곡선 사이의 경로를 찾는 문제가 사원수 대수 안에서 원하는 차수의 원소를 찾는 문제로 바뀐다.

# 정의

## 사원수 대수와 극대 순서환

$p$ 와 무한 자리에서만 분기하는 $\mathbb Q$ 위 사원수 대수는 동형을 무시하면 하나이고, 이것을 $B_{p,\infty}$ 라 쓴다. 분기의 뜻은 [Brauer 군](brauer-groups.md)에서 정해진다. $p\equiv3\pmod 4$ 이면

$$
B_{p,\infty}=\mathbb Q\oplus\mathbb Q i\oplus\mathbb Q j\oplus\mathbb Q k,
\qquad i^2=-1,\quad j^2=-p,\quad k=ij=-ji
$$

이고 노름은 $\mathrm N(x+yi+zj+wk)=x^2+y^2+p(z^2+w^2)$ 다. 여기서 $j$ 는 사원수 기호이고 $j$ 불변량과 다르다. 직관 절의 $\lbrack i\rbrack$ 와 $\pi$ 가 $i$ 와 $j$ 에 대응한다.

$B_{p,\infty}$ 의 부분환 가운데 $\mathbb Z$ 위 계수 4 개의 격자인 것을 순서환(order)이라 하고, 포함관계로 가장 큰 것을 **극대 순서환(maximal order)** 이라 한다. 두 극대 순서환이 $\mathcal O'=\gamma\mathcal O\gamma^{-1}$ 이면 같은 형(type)이라 한다. 극대 순서환의 예는

$$
\mathcal O=\mathbb Z\Bigl\langle 1,\thinspace i,\thinspace \frac{i+k}2,\thinspace \frac{1+j}2\Bigr\rangle
$$

이고, 이것이 $j=1728$ 인 초특이 곡선의 자기준동형환이다.

## 좌 아이디얼

극대 순서환 $\mathcal O$ 의 **좌 아이디얼(left ideal)** 은 $\mathcal O I\subseteq I$ 인 계수 4 개의 격자 $I\subseteq B_{p,\infty}$ 다. 노름 $\mathrm N(I)$ 는 $I$ 의 원소 노름들의 최대공약수다. 직관 절의 $\mathcal O(1+i)$ 는 노름이 $2$ 인 좌 아이디얼이다. 두 좌 아이디얼이 $J=I\beta$ 이면 같은 류(class)라 한다.

## Deuring 대응

초특이 곡선 $E$ 를 $\mathrm{End}(E)$ 로 보내고, $\mathcal O=\mathrm{End}(E)$ 라 할 때 동종사상 $\varphi\colon E\to E'$ 를

$$
I_\varphi=\mathrm{Hom}(E',E)\cdot\varphi
=\lbrace\alpha\in\mathcal O\thinspace:\thinspace\ker\varphi\subseteq\ker\alpha\rbrace
$$

로 보내는 대응을 Deuring 대응이라 한다. 직관 절의 $\varphi=1+\lbrack i\rbrack$ 는 $E'=E$ 이므로 $I_\varphi=\mathcal O(1+i)$ 다.

## KLPT 문제

KLPT(Kohel–Lauter–Petit–Tignol) 문제는 좌 $\mathcal O$ 아이디얼 $I$ 와 소수 $\ell$ 이 주어졌을 때 $I$ 와 같은 류이고 $\mathrm N(J)=\ell^e$ 인 좌 아이디얼 $J$ 를 찾는 문제다. $\mathcal O$ 가 직관 절의 극대 순서환이고 $\ell=2$ 이면 $I=\mathcal O(1+i)$ 자신이 $e=1$ 인 답이다.

# 성질

## Deuring 의 정리

$E\mapsto\mathrm{End}(E)$ 는 초특이 곡선의 동형류에서 $B_{p,\infty}$ 의 극대 순서환의 형으로 가는 전사이고, 각 형에 대응하는 곡선은 많아야 둘(Frobenius 켤레)이다. $E$ 를 고정하면 $\varphi\mapsto I_\varphi$ 는 $E$ 에서 나가는 동종사상의 동형류와 $\mathcal O$ 의 좌 아이디얼 사이의 전단사다. 거꾸로 좌 아이디얼 $I$ 에서 $\ker I=\bigcap_{\alpha\in I}\ker\alpha$ 를 커널로 갖는 동종사상이 정해지고, 두 구성은 서로 역이다. 대응하는 자료는 다음과 같다.

| 곡선 쪽 | 사원수 쪽 |
| --- | --- |
| 초특이 곡선 $E$ | 극대 순서환 $\mathcal O\cong\mathrm{End}(E)$ |
| 동종사상 $\varphi:E\to E'$ | 좌 $\mathcal O$ 아이디얼 $I_\varphi$ |
| $\deg\varphi$ | 노름 $\mathrm{N}(I_\varphi)$ |
| 합성 $\psi\circ\varphi$ | 아이디얼의 곱 |
| 쌍대 $\hat\varphi$ | 켤레 아이디얼 $\bar I$ |
| $E\cong E'$ | 같은 좌 아이디얼 류 |
| 동종사상 그래프 | 아이디얼 류 그래프 |

$p=11$ 이면 초특이 곡선이 둘이고 $B_{11,\infty}$ 의 극대 순서환의 형도 둘이다. 이 대응은 [범주](category.md) 사이의 반변 동치로도 적힌다.

## KLPT 알고리즘

Kohel–Lauter–Petit–Tignol 은 KLPT 문제를 $e=O(\log p)$ 로 푸는 다항 시간 알고리즘을 주었다. 요지는 정부호 이차형식 $x^2+y^2+p(z^2+w^2)$ 가 주어진 $\ell$ 의 거듭제곱을 표현하게 만드는 것이다. 형식이 정부호이므로 $z,w$ 가 $0$ 이 아니려면 표현할 수가 $p$ 이상이어야 하고, 그래서 지수 $e$ 는 $\log_\ell p$ 의 상수배 크기다.

Cornacchia 알고리즘(Cornacchia's algorithm)으로 $x^2+y^2=r$ 을 풀고, $z,w$ 는 합동 조건을 만족하도록 격자에서 고른다. 노름이 $\ell^e$ 인 아이디얼은 곡선 쪽에서 차수 $\ell$ 인 동종사상 $e$ 개의 합성으로 옮겨진다.

## 계산 난이도의 비대칭

$E$ 가 주어졌을 때 $\mathrm{End}(E)$ 를 계산하는 알려진 최선의 알고리즘은 $\widetilde O(\sqrt p)$ 시간이 든다. $\mathrm{End}(E)$ 를 알면 KLPT 로 $E$ 에서 다른 곡선으로 가는 경로를 다항 시간에 만든다. Wesolowski 는 일반화 [Riemann 가설](riemann-hypothesis.md) 아래 자기준동형환 계산과 경로 찾기가 다항 시간 환원으로 서로 옮겨 감을 증명했다[^1]. 그래서 초특이 동종사상 암호의 안전성은 $\mathrm{End}(E)$ 계산이 어렵다는 가정 하나로 적힌다.

## 질량 공식과 Brandt 행렬

좌 아이디얼 류의 개수를 세는 Eichler 의 [질량 공식](mass-formula.md)(mass formula)은 Deuring 대응을 거쳐 초특이 곡선의 개수 공식이 된다. 아이디얼 류 위의 Brandt [행렬](matrices.md)(Brandt matrix)은 동종사상 그래프의 인접 행렬과 같고, 무게 2 첨점형식 위의 [Hecke 작용소](hecke-operators.md)와 같은 고윳값을 갖는다. 그 고윳값에 [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)에서 나오는 Ramanujan–Petersson 한계가 적용되어 동종사상 그래프가 Ramanujan 그래프임이 증명된다.

# 활용

## SQIsign

SQIsign(Short Quaternion and Isogeny Signature)은 Deuring 대응을 쓰는 동종사상 기반 서명이고, 구조는 시그마 규약(sigma protocol)이다.

1. 비밀키는 기준 곡선 $E_0$ 에서 곡선 $E_A$ 로 가는 비밀 동종사상이며, 이를 알면 $\mathrm{End}(E_A)$ 를 안다. 공개키는 $E_A$ 뿐이다.
2. 서명자가 임의의 곡선 $E_1$ 로 가는 동종사상을 만들고 $E_1$ 을 약속으로 보낸다.
3. 챌린지가 $E_1$ 에서 나가는 동종사상 하나를 지정한다.
4. 응답은 $E_A$ 에서 챌린지의 목적지로 가는 동종사상이다. 서명자는 $\mathrm{End}(E_A)$ 를 알므로 사원수 쪽에서 아이디얼을 만들고 KLPT 로 노름을 $\ell^e$ 로 바꾼 뒤 곡선 쪽으로 옮긴다.

검증자는 응답이 실제 동종사상인지만 확인한다. $\mathrm{End}(E_A)$ 를 모르면 4 단계를 수행할 수 없다는 것이 안전성의 근거다.

## SIDH 공격과의 차이

SIDH(supersingular isogeny Diffie–Hellman)는 2022 년 Castryck–Decru 공격으로 깨졌다. 이 공격은 SIDH 가 공개하는 비밀 동종사상의 비틀림점 상을 써서, 고차원 [아벨 다양체](abelian-varieties.md)의 동종사상으로 비밀을 복원한다. SQIsign 은 비틀림점의 상을 공개하지 않고 동종사상 자체만 응답으로 보내므로 이 공격이 적용되지 않는다.

[^1]: 대응의 원형은 M. Deuring, *Die Typen der Multiplikatorenringe elliptischer Funktionenkörper* (Abh. Math. Sem. Univ. Hamburg **14**, 1941). 현대적 서술과 이념 사전은 J. Voight, *Quaternion Algebras* (2021) 42 장. 알고리즘 쪽은 D. Kohel, K. Lauter, C. Petit, J.-P. Tignol, *On the quaternion l-isogeny path problem* (LMS J. Comput. Math. **17**, 2014). 자기준동형환 계산과 경로 찾기의 동치는 B. Wesolowski, *The supersingular isogeny path and endomorphism ring problems are equivalent*, FOCS 2021. 서명은 L. De Feo, D. Kohel, A. Leroux, C. Petit, B. Wesolowski, *SQISign*, ASIACRYPT 2020.

# 연관 문서

## 선수지식

- [초특이 동종사상 그래프](supersingular-isogeny-graphs.md)
- [사원수 대수](quaternion-algebras.md)
- [Brauer 군](brauer-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #cryptography #algorithms
