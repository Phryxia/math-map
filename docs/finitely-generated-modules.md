# PID 위의 유한생성 가군

# 개요

주아이디얼정역 위의 유한생성 [가군](modules.md)은 순환가군의 직합으로 유일하게 분해된다. 이 구조정리 하나가 두 고전 정리를 특수한 경우로 포함한다. $R=\mathbb Z$ 이면 유한생성 아벨군의 구조정리이고, $R=k[x]$ 이면 [선형사상](linear-maps.md)의 Jordan 표준형과 유리 표준형이다.

정리가 성립하는 근거는 [유일분해정역](unique-factorization-domains.md) 사슬의 **PID**(principal ideal domain) 칸이다. 모든 아이디얼이 한 원소로 생성되므로 관계 행렬을 대각화할 수 있고, 그 대각 성분이 분해의 불변량이 된다.

# 직관

유한생성 가군은 생성원 $m$ 개와 그들 사이의 관계로 기술된다. 관계를 행렬 $A$ 로 적으면 가군은 $R^m/\mathrm{im}\thinspace A$ 다. 생성원과 관계를 각각 기저변환하는 것이 $A$ 에 가역행렬을 좌우에서 곱하는 것이고, PID 에서는 이 연산으로 $A$ 를 대각형으로 만들 수 있다. 대각 성분이 남는 자료의 전부다.

$\mathbb Z$ 에서 이 절차는 정수행렬의 기약 대각화다. 아래 관계가 정의하는 아벨군은 $\mathbb Z/2 \oplus \mathbb Z/6$ 이다.

$$
\begin{pmatrix}2&0\cr 0&6\end{pmatrix}
$$

# 정의

$R$ 를 PID 라 하자. $R$ 가군 $M$ 이 **유한생성**이라는 것은 유한 개의 원소 $m_1,\dots,m_n$ 이 있어 모든 원소가 $\sum r_i m_i$ 꼴로 쓰인다는 뜻이다.

$M$ 의 **비틀림 부분가군**은 어떤 $0$ 이 아닌 $r$ 에 대해 $rm=0$ 인 원소 전체다.

$$
M_{\mathrm{tors}}=\lbrace m\in M\ :\ \exists\thinspace r\in R\setminus\lbrace 0\rbrace,\ rm=0\rbrace
$$

$M_{\mathrm{tors}}=0$ 인 가군을 **비틀림 없는**(torsion-free) 가군이라 한다.

# 성질

## 구조정리

PID $R$ 위의 유한생성 가군 $M$ 은 다음 두 꼴로 분해되고, 각 분해는 유일하다[^1].

$$
M \cong R^{r} \oplus R/(d_1) \oplus \cdots \oplus R/(d_k),\qquad d_1 \mid d_2 \mid \cdots \mid d_k
$$

$$
M \cong R^{r} \oplus \bigoplus_{j} R/(p_j^{e_j}),\qquad p_j \text{ 소원}
$$

첫째를 **불변인자 분해**, 둘째를 **초등인자 분해**라 한다. $r$ 를 $M$ 의 계수(rank)라 하고, $d_i$ 를 불변인자, $p_j^{e_j}$ 를 초등인자라 한다. 두 분해는 중국인의 나머지 정리로 서로 옮겨진다.

## 증명의 요지

세 단계로 나뉜다.

PID 위의 자유가군의 부분가군은 자유이고 계수가 늘지 않는다. 생성원 개수에 대한 귀납으로 보이며, 이 단계에서 부분가군의 좌표들이 이루는 아이디얼이 주아이디얼이라는 사실을 쓴다.

$M$ 이 $n$ 개로 생성되면 전사사상 $R^n \to M$ 이 있고, 그 핵 $K$ 는 위 사실로 자유이므로 $M \cong R^n/K$ 다. 포함 $K \hookrightarrow R^n$ 을 행렬로 적는다.

행렬을 Smith 표준형으로 만든다. 두 기저를 모두 바꾸어 $\mathrm{diag}(d_1,\dots,d_k,0,\dots,0)$ 이고 $d_1\mid\cdots\mid d_k$ 인 꼴로 옮길 수 있다. 이 대각 성분이 불변인자다.

## 유일성

불변인자는 $M$ 의 동형류가 결정한다. $d_1\cdots d_i$ 가 관계 행렬의 $i$ 차 [소행렬식](determinants.md)들의 최대공약수와 단위원 배수를 무시하고 일치하므로, 기저변환으로 바뀌지 않는다.

## PID 조건의 필요성

정리는 PID 밖에서 깨진다. $\mathbb Z[\sqrt{-5}]$ 에서 [아이디얼](ideals-quotient-rings.md) $(2,1+\sqrt{-5})$ 는 유한생성 비틀림 없는 가군이지만 자유가 아니다. 주아이디얼이 아니어서 생성원 하나로 줄지 않는다.

# 활용

## 유한생성 아벨군

$R=\mathbb Z$ 에서 정리는 유한생성 아벨군이 $\mathbb Z^{r}\oplus\mathbb Z/d_1\oplus\cdots\oplus\mathbb Z/d_k$ 와 동형이라는 진술이 된다. 유한 아벨군은 $r=0$ 인 경우이고, 초등인자 분해가 소수 거듭제곱 위수의 순환군으로의 분해다.

## 표준형

$R=k[x]$ 에서 벡터 공간 $V$ 와 선형사상 $T$ 의 쌍은 $k[x]$ 가군이 된다. $x$ 의 작용을 $T$ 로 주면 되고, $V$ 가 유한차원이면 이 가군은 유한생성 비틀림 가군이다. 불변인자 분해가 유리 표준형을, $k$ 가 대수적으로 닫혀 있을 때 초등인자 분해가 Jordan 표준형을 준다. 초등인자 $(x-\lambda)^{e}$ 가 고윳값 $\lambda$ 의 크기 $e$ 인 Jordan 블록이다.

## 위상수학의 호몰로지

유한 복합체의 호몰로지군은 유한생성 아벨군이므로 계수와 비틀림 부분으로 갈린다. 계수가 Betti 수이고 비틀림 부분의 불변인자가 비틀림 계수다. 이 분해가 있어 호몰로지를 유한한 정수 자료로 적을 수 있다.

[^1]: D. Dummit and R. Foote, *Abstract Algebra*, 3rd ed., Section 12.1, Theorem 5. PID 위 유한생성 가군의 불변인자 분해와 그 유일성.

# 연관 문서

## 선수지식

- [가군](modules.md)
- [유일분해정역](unique-factorization-domains.md)

## 더 알아보기

- [Jordan 표준형](jordan-canonical-form.md)

#ring_theory #algebra #linear_algebra
