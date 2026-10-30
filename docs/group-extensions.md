# 군 확대

# 개요

**군 확대(group extension)** 는 짧은 완전열 $1\to N\to E\to Q\to1$ 이고, 이때 $E$ 를 $N$ 에 의한 $Q$ 의 확대라 한다. 위수 $2$ 인 군 두 개를 조각으로 쓰면 $\mathbb Z/4$ 와 $\mathbb Z/2\times\mathbb Z/2$ 라는 서로 다른 군이 나온다. 조각만으로는 군이 정해지지 않으므로, 조각을 붙이는 방식을 따로 분류해야 한다. $N$ 이 가환이면 붙이는 방식이 코호몰로지군 $H^2(Q,N)$ 의 원소로 분류된다.

# 직관

위수 $4$ 인 군 $\mathbb Z/4$ 와 $\mathbb Z/2\times\mathbb Z/2$ 는 둘 다 원소가 둘인 정규부분군 $A$ 를 갖고, $A$ 로 나눈 몫도 원소가 둘이다. 원소가 둘인 군 위에 원소가 둘인 군을 쌓았다는 점은 같지만 두 군은 동형이 아니다. $\mathbb Z/4$ 에는 위수가 $4$ 인 원소 $1$ 이 있고 $\mathbb Z/2\times\mathbb Z/2$ 에는 없다.

차이를 계산으로 본다. $\mathbb Z/4$ 에서 $A=\lbrace 0,2\rbrace$ 로 두고, 몫의 두 원소 $0,1$ 마다 대표원 $s(0)=0$, $s(1)=1$ 을 고른다. $s(1)+s(1)=2$ 인데 $s(1+1)=s(0)=0$ 이므로 두 값이 $2\in A$ 만큼 어긋난다. 대표원을 $s(1)=3$ 으로 바꿔도 $3+3=2$ 여서 어긋남이 남는다. $\mathbb Z/2\times\mathbb Z/2$ 에서 $A=\lbrace(0,0),(1,0)\rbrace$ 로 두고 $s(1)=(0,1)$ 을 고르면 $s(1)+s(1)=(0,0)$ 이어서 어긋남이 없다.

아래의 군 $A$ 와 위의 몫이 같아도, 대표원끼리 더할 때 $A$ 에 남는 어긋남이 두 군을 가른다. [유한 단순군 분류](finite-simple-groups.md)가 조각이 될 수 있는 단순군을 모두 적으므로, 유한군을 아는 데 남는 일은 조각을 붙이는 방식을 아는 것이다. 정규부분군과 몫으로 전체 군을 짓는 것을 확대, 대표원의 어긋남을 적은 함수를 인자집합이라 한다.

# 정의

## 확대

군 $N,Q$ 에 대한 **확대(extension)** 는 짧은 완전열 $1\to N\xrightarrow{\iota}G\xrightarrow{\pi}Q\to1$ 이다. 곧 $\iota$ 는 단사, $\pi$ 는 전사이고 $\iota(N)=\ker\pi$ 다. 두 확대 $G$, $G'$ 가 **동치(equivalent)** 라는 것은 $N$ 과 $Q$ 위에서 항등인 동형 $G\to G'$ 가 있다는 뜻이다.

- $\pi\circ s$ 가 항등인 준동형 $s:Q\to G$ 가 있으면 **분할 확대(split extension)** 라 한다.
- $\iota(N)$ 이 $G$ 의 중심에 들어 있으면 **중심확대(central extension)** 라 한다.

직관 절의 두 군은 $N=Q=\mathbb Z/2$ 인 확대다. $\mathbb Z/2\times\mathbb Z/2$ 는 $s(1)=(0,1)$ 이 준동형이어서 분할 확대이고, $\mathbb Z/4$ 는 어느 대표원도 준동형이 아니어서 분할 확대가 아니다. 두 군 모두 가환이므로 중심확대다.

## 합성열

부분정규열 $1=G_0\triangleleft G_1\triangleleft\cdots\triangleleft G_k=G$ 에서 모든 몫 $G_{i+1}/G_i$ 가 단순군이면 **합성열(composition series)** 이고, 그 몫들을 **합성인자(composition factor)** 라 한다. $1\triangleleft\lbrace 0,2\rbrace\triangleleft\mathbb Z/4$ 는 합성열이고 합성인자는 $\mathbb Z/2$, $\mathbb Z/2$ 다. $\mathbb Z/2\times\mathbb Z/2$ 의 합성인자도 $\mathbb Z/2$, $\mathbb Z/2$ 다.

## 인자집합

확대 $1\to A\to G\to Q\to1$ 에서 $A$ 가 가환이라 하자. 각 $q\in Q$ 마다 대표원 $s(q)\in G$ 를 고르면 다음 식으로 함수 $f:Q\times Q\to A$ 가 정해진다.

$$
s(q_1)s(q_2)=f(q_1,q_2)\thinspace s(q_1q_2),\qquad f(q_1,q_2)\in A
$$

이 $f$ 를 **인자집합(factor set)** 또는 2-코사이클(2-cocycle)이라 한다. 직관 절의 $\mathbb Z/4$ 에서 $f(1,1)=2$ 이고 나머지 값은 $0$ 이다.

## 군 코호몰로지의 낮은 차수

$Q$ [가군](modules.md) $A$ (곧 $Q$ 가 작용하는 가환군)에 대해

$$
C^n(Q,A)=\lbrace f:Q^n\to A\rbrace,\qquad
(\delta f)(q_1,\dots,q_{n+1})=q_1\negthinspace\cdot\negthinspace f(q_2,\dots)+\sum(-1)^if(\dots)+(-1)^{n+1}f(\dots)
$$

로 사슬복합체를 만들고 $H^n(Q,A)=\ker\delta^n/\mathrm{im}\delta^{n-1}$ 을 [군 코호몰로지](group-cohomology.md)라 한다. [호몰로지](homology.md)의 사슬복합체와 같은 꼴이다.

# 성질

## 분할 확대와 중심확대

분할 확대에서는 $Q$ 가 $s$ 를 통해 $N$ 에 켤레로 작용하고 $G\cong N\rtimes Q$ 다. 중심확대에서는 $N$ 이 중심에 들어 있으므로 가환이고, $Q$ 의 $N$ 위 작용이 자명하다.

## 코사이클 조건

$G$ 의 결합법칙을 세 원소에 적용하면 인자집합 $f$ 가 다음을 만족한다.

$$
f(q_1,q_2)+f(q_1q_2,q_3)=q_1\negthinspace\cdot\negthinspace f(q_2,q_3)+f(q_1,q_2q_3)
$$

대표원을 다르게 고르면 $f$ 가 2-코바운더리만큼 바뀌므로 $f$ 가 정하는 것은 $H^2(Q,A)$ 의 원소다. 영원소가 분할 확대, 곧 반직접곱 $G=A\rtimes Q$ 다.

## 낮은 차수의 뜻

| 차수 | 뜻 |
|---|---|
| $H^0(Q,A)$ | $A^Q$ 곧 불변원소 |
| $H^1(Q,A)$ | 꼬인 준동형 / 주 꼬인 준동형. 분할 확대에서 보충군의 켤레류 |
| $H^2(Q,A)$ | $A$ 에 의한 $Q$ 의 확대의 동치류 |
| $H^3(Q,A)$ | 비가환 핵을 갖는 확대의 장애 |

## Jordan–Hölder 정리

> **정리.** 유한군의 두 합성열은 동형이고, 합성인자는 순서를 빼면 유일하게 정해진다.

증명은 Zassenhaus 의 **나비 보조정리(butterfly lemma)** 에서 시작한다. 두 부분군 쌍 $(A\triangleleft A^\ast)$ 와 $(B\triangleleft B^\ast)$ 에 대해 다음이 성립한다.

$$
\frac{A(A^\ast\cap B^\ast)}{A(A^\ast\cap B)}\ \cong\ \frac{B(A^\ast\cap B^\ast)}{B(A\cap B^\ast)}
$$

이 보조정리로 임의의 두 부분정규열이 동형인 세분을 갖는다는 Schreier 세분 정리를 얻고, 합성열은 더 세분할 수 없으므로 두 합성열이 동형이다.

## 확대 분류 정리

> $Q$ 가군 $A$ 에 대해, $A$ 를 핵으로 갖고 $Q$ 를 몫으로 갖는 확대의 동치류 집합과 $H^2(Q,A)$ 사이에 자연스러운 전단사가 있다. 영원소가 반직접곱에 대응한다.

전단사는 인자집합으로 준다. 확대에서 대표원을 골라 $f$ 를 만들면 $H^2$ 의 원소가 나오고, 거꾸로 코사이클 $f$ 에서 집합 $A\times Q$ 에 $(a_1,q_1)(a_2,q_2)=(a_1+q_1\negthinspace\cdot\negthinspace a_2+f(q_1,q_2),\thinspace q_1q_2)$ 로 곱을 주면 확대가 나온다. 코사이클 조건이 이 곱의 결합법칙과 같다.

$A$ 가 비가환이면 $Q$ 가 $A$ 가 아니라 $\mathrm{Out}(A)$ 에 작용하고, 확대의 존재가 $H^3$ 의 장애로 통제된다.

## Schur–Zassenhaus 정리

> $|N|$ 과 $|G/N|$ 이 서로소이면 확대 $1\to N\to G\to Q\to1$ 은 분할되고, 모든 보충군이 서로 켤레다.

위수가 서로소인 부분은 붙이는 방법이 하나다. $N$ 이 가환이면 $H^2(Q,N)$ 이 $|Q|$ 와 $|N|$ 양쪽으로 죽으므로 서로소일 때 $0$ 이 된다. 비가환인 경우의 증명은 Feit–Thompson 정리를 쓴다.

확대 문제가 어려운 곳은 $|N|$ 과 $|Q|$ 가 소인수를 공유하는 경우, 특히 $p$ 군이다. 위수 $2^n$ 인 군의 개수가 폭발하는 것도 여기서다.

## Schur 곱셈자와 완전 중심확대

$Q$ 가 완전군, 곧 $Q=[Q,Q]$ 이면 가장 큰 중심확대가 유일하게 존재한다. 그 핵 $H_2(Q,\mathbb Z)$ 가 [Schur 곱셈자](schur-multipliers.md)이고 대응하는 확대 $\tilde Q$ 가 **보편 중심확대**다.

$$
1\to H_2(Q,\mathbb Z)\to\tilde Q\to Q\to1
$$

$n\ge8$ 인 $A_n$ 의 Schur 곱셈자는 $\mathbb Z/2$ 이고 그 이중덮개가 $2.A_n$ 이다. 산재군에도 같은 표기를 쓰며 $2.\mathrm{Co}\_1$ , $6.\mathrm{Suz}$ , $3.\mathrm{Fi}\_{24}'$ 에서 앞의 숫자가 Schur 곱셈자의 위수다.

[괴물군](monstrous-moonshine.md)의 Schur 곱셈자는 자명하고 $\mathbb M$ 자신이 보편 중심확대다. 아기 괴물의 이중덮개 $2.\mathrm{B}$ 가 $\mathbb M$ 의 중심화군으로 나타나므로 중심확대가 산재군을 서로 잇는다.

# 활용

## 분류의 두 번째 단계

유한군을 전부 나열하려면 단순군 목록 위에 확대를 반복해 쌓아야 한다. 위수가 작은 경우는 계산 대수 시스템이 데이터베이스로 갖고 있고, 위수 $2^{10}=1024$ 인 군만 49487365422 개다. 대부분이 $p$ 군이고 확대 문제가 여기서 커진다.

연구는 모든 군의 나열 대신 주어진 성질을 만족하는 군의 구조 정리를 목표로 한다.

## 사영표현과 중심확대

양자역학에서 대칭군 $Q$ 는 [Hilbert 공간](hilbert-spaces.md)의 사영공간에 작용하므로 표현이 위상 인자만큼 어긋날 수 있다.

$$
\rho(q_1)\rho(q_2)=c(q_1,q_2)\thinspace\rho(q_1q_2),\qquad |c|=1
$$

$c$ 가 $H^2(Q,\mathrm U(1))$ 의 2-코사이클이다. 사영표현은 중심확대의 표현과 같고, $\mathrm{SO}(3)$ 의 사영표현이 [Lie 군](lie-groups.md) $\mathrm{SU}(2)$ 의 표현이 되며 반정수 스핀이 $H^2$ 의 비자명 원소에서 나온다.

[Lie 대수](lie-algebras.md)의 [Virasoro 대수](virasoro-algebra.md)는 원 위의 벡터장 대수의 중심확대이고 중심전하 $c$ 가 그 확대를 지정한다. [Lie 대수 코호몰로지](lie-algebra-cohomology.md) $H^2(\mathfrak g,\mathbb C)$ 가 1 차원이라 확대가 한 매개변수 족을 이룬다.

## Galois 이론의 매장 문제

[Galois 이론](galois-theory.md)에서 군 $Q$ 를 Galois 군으로 갖는 확대를 $G$ 를 Galois 군으로 갖는 더 큰 확대 안에 넣을 수 있는지를 묻는 것이 매장 문제다. 장애가 [Galois 코호몰로지](galois-cohomology.md)의 원소로 표현되고, 역 Galois 문제의 접근법 가운데 하나다.

# 연관 문서

## 선수지식

- [유한 단순군 분류](finite-simple-groups.md)

## 더 알아보기

- [군 코호몰로지](group-cohomology.md)
- [Schur 곱셈자](schur-multipliers.md)
- [Galois 표현의 변형환](deformation-rings.md)

#group_theory #algebra
