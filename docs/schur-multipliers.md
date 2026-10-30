# Schur 곱셈자

# 개요

**Schur 곱셈자(Schur multiplier)** 는 군의 원소를 [행렬](matrices.md)로 보낼 때 곱셈이 상수배만큼 어긋나는 것을 허용하면, 그 어긋남을 상수 조정으로 없앨 수 있는지를 재는 군이다. 원소끼리 교환하는 군 $\mathbb Z/2\times\mathbb Z/2$ 의 두 생성원을 $X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 과 $Z=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}$ 로 보내면 $XZ=-ZX$ 여서 곱셈이 부호만큼 어긋난다. $X$ 와 $Z$ 에 어떤 상수를 곱해도 이 부호는 없어지지 않는다. Schur 는 1904 년에 이런 어긋남을 모은 군 $M(G)$ 를 정의하고, 군을 $M(G)$ 만큼 키운 확대에서는 어긋남이 사라짐을 보였다.

# 직관

$\mathbb Z/2\times\mathbb Z/2$ 의 원소를 $e,a,b,ab$ 라 하자. $a$ 에 $X$, $b$ 에 $Z$, $ab$ 에 $XZ$ 를 대응시킨다.

$$
X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix},\qquad Z=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}
$$

$X^2=Z^2=I$ 이지만 $XZ=-ZX$ 다. 군에서는 $ba=ab$ 인데 행렬에서는 $ZX=-XZ$ 여서, $b$ 와 $a$ 에 대응한 행렬의 곱이 $ba$ 에 대응한 행렬과 부호만큼 어긋난다.

각 행렬에 $0$ 이 아닌 상수를 곱해 어긋남을 없앨 수 있는지 묻는다. $\lambda X$ 와 $\mu Z$ 로 바꿔도 $(\lambda X)(\mu Z)=-(\mu Z)(\lambda X)$ 이므로 두 행렬은 끝내 교환하지 않는다. 이 어긋남은 상수 조정으로 없앨 수 없다. 군을 키우면 없어진다. $X$ 와 $Z$ 가 곱으로 생성하는 행렬 $\pm I,\pm X,\pm Z,\pm XZ$ 여덟 개는 그 자체로 군이고, 그 안에서는 행렬의 곱이 군의 곱이다. 이렇게 원래 군을 몫으로 갖도록 키운 군이 [중심확대](group-extensions.md)이고, 상수 조정으로 없앨 수 없는 어긋남을 모은 군이 Schur 곱셈자다.

# 정의

## 사영표현

[벡터 공간](vector-spaces.md) $V$ 의 가역 선형사상의 군 $\mathrm{GL}(V)$ 에서 $0$ 이 아닌 상수배 차이를 같게 본 몫군을 $\mathrm{PGL}(V)$ 라 한다. 군 준동형 $\bar\rho:G\to\mathrm{PGL}(V)$ 를 **사영표현(projective representation)** 이라 한다. 각 $g$ 마다 대표원 $\rho(g)\in\mathrm{GL}(V)$ 를 고르면 다음 식으로 함수 $c:G\times G\to\mathbb C^\times$ 가 정해진다.

$$
\rho(a)\rho(b)=c(a,b)\thinspace\rho(ab)
$$

직관 절의 $X$, $Z$, $XZ$ 는 $\mathbb Z/2\times\mathbb Z/2$ 의 사영표현이고, $c(b,a)=-1$ 이다.

## Schur 곱셈자

유한군 $G$ 에 대해 군

$$
M(G)=H^2(G,\mathbb C^\times)
$$

를 $G$ 의 **Schur 곱셈자(Schur multiplier)** 라 한다. $M(\mathbb Z/2\times\mathbb Z/2)=\mathbb Z/2$ 이고, 그 영이 아닌 원소가 직관 절의 부호 어긋남이다.

## 보편 중심확대

$1\to A\to E\xrightarrow{\pi}G\to1$ 에서 $A$ 가 $E$ 의 중심에 들어 있으면 **중심확대(central extension)** 라 한다. $G=[G,G]$ 인 군을 **완전군(perfect group)** 이라 한다. 완전군 $G$ 의 중심확대 $\tilde G\to G$ 가, $G$ 의 모든 중심확대 $E\to G$ 에 대해 $G$ 위에서 맞는 준동형 $\tilde G\to E$ 를 하나씩만 가지면 **보편 중심확대(universal central extension)** 라 한다.

교대군 $A_5$ 는 완전군이고, 위수 $120$ 인 $\mathrm{SL}\_2(\mathbb F_5)$ 에서 중심 $\lbrace\pm I\rbrace$ 로 나누는 사상이 $A_5$ 의 보편 중심확대다.

# 성질

## 2-코사이클 조건

결합법칙을 두 방식으로 전개하면 사영표현의 $c$ 가 다음을 만족한다.

$$
c(a,b)c(ab,d)=c(b,d)c(a,bd)
$$

대표원을 $\rho'(g)=\lambda(g)\rho(g)$ 로 다시 고르면 $c$ 는 $c(a,b)\lambda(a)\lambda(b)/\lambda(ab)$ 로 바뀐다. 그래서 사영표현마다 $M(G)=H^2(G,\mathbb C^\times)$ 의 원소 $\lbrack c\rbrack$ 가 정해지고, $\lbrack c\rbrack=0$ 인 것과 대표원을 다시 골라 $c\equiv1$ 로 만들 수 있는 것, 곧 $\bar\rho$ 가 $\mathrm{GL}(V)$ 로 가는 보통 표현에서 오는 것이 동치다.

## 곱셈자의 유한성

유한군 $G$ 의 $M(G)$ 는 유한 아벨군이고 지수가 $|G|$ 를 나누며, $M(G)\cong H_2(G,\mathbb Z)$ 다. 중심확대 $1\to A\to E\to G\to1$ 하나마다 $H^2(G,A)$ 의 원소가 하나 대응하고, 반대로 $H^2(G,A)$ 의 원소마다 중심확대가 하나 나온다.

## Schur 정리

> **정리 (Schur).** 완전군 $G$ 에는 보편 중심확대 $\tilde G$ 가 동형을 빼고 하나 존재하고, 그 핵이 $M(G)$ 이며 $\tilde G$ 도 완전군이다. 이때 $G$ 의 모든 기약 사영표현이 $\tilde G$ 의 기약 보통 표현에서 정확히 한 번씩 나온다.

사영표현이 언제나 $\tilde G$ 의 보통 표현에서 내려오므로 $\tilde G$ 의 [지표표](character-table.md) 한 장이 $G$ 의 사영표현 전체를 담는다.

$G$ 가 완전하지 않으면 보편 확대가 없다. 아벨 몫이 있으면 그 몫을 통해 서로 다른 사상이 여러 개 만들어지기 때문이다. 곱셈자를 실현하는 표현군(representation group, Schur 덮개)은 존재하지만 유일하지 않다.

## Pauli 행렬의 확대

직관 절의 위수 8 군 $\lbrace\pm I,\pm X,\pm Z,\pm XZ\rbrace$ 는 $X^2=Z^2=I$, $(XZ)^2=-I$ 이므로 이면체군 $D_4$ 다. 이 확대로 $(\mathbb Z/2)^2$ 이 2 차원 기약 사영표현을 갖는다. 아벨군의 보통 기약표현은 전부 1 차원이므로 사영표현에서만 생기는 일이다. 양자정보의 Pauli 군이 이것이다.

## 회전군

스핀 $1/2$ 은 $\mathrm{SO}(3)$ 의 사영표현이고 이중덮개 $\mathrm{SU}(2)$ 에서 보통 표현이 된다. 전자가 $360^\circ$ 회전에서 부호를 바꾸는 것이 $\mathrm{SO}(3)$ 의 사영표현의 부호 어긋남이다.

## Hopf 공식

$\mathbb C^\times$ 가 나눌 수 있는 군이라 계수 정리의 확장항이 사라지므로 $H^2(G,\mathbb C^\times)$ 과 $H_2(G,\mathbb Z)$ 가 같다. $G=F/R$ 을 자유군의 몫으로 쓰면 다음이 성립한다.

$$
M(G)\cong\frac{R\cap\lbrack F,F\rbrack}{\lbrack F,R\rbrack}
$$

표시만 있으면 계산되는 유한 절차이고 컴퓨터 대수 시스템이 이 공식을 쓴다.

## 계산 예

| G | M(G) |
|---|---|
| 유한 순환군 | 자명 |
| $(\mathbb Z/n)^k$ | $(\mathbb Z/n)^{k(k-1)/2}$ |
| $n\ge5$ 이고 $n\neq6,7$ 인 $A_n$ | $\mathbb Z/2$ |
| $A_6,A_7$ | $\mathbb Z/6$ |
| 대부분의 $\mathrm{PSL}\_2(q)$ | $\mathbb Z/2$ |
| $M_{11},M_{23},M_{24}$ | 자명 |
| $M_{12},M_{22}$ | 각각 $\mathbb Z/2$ 와 $\mathbb Z/{12}$ |
| 괴물군 $\mathbb M$ | 자명 |

아벨군 $A$ 에 대해 $M(A)\cong\Lambda^2A$ 이고, 순환군은 외적의 2 차 부분이 0 이라 곱셈자가 자명하다. 생성원이 둘 이상이면 곱셈자가 나타나고 $(\mathbb Z/2)^2$ 이 가장 작은 경우다.

교대군의 이중덮개 $2.A_n$ 은 스핀 표현에서 나오고, $n=6,7$ 에서만 삼중덮개가 추가된다. 이 예외는 $A_6\cong\mathrm{PSL}\_2(9)$ 와 $A_7$ 의 우연한 동형과 얽혀 있고, 산재군 $M_{22}$ 의 곱셈자 $\mathbb Z/{12}$ 도 비슷하다.

괴물군의 곱셈자는 자명하다. 중심확대가 없으므로 $V^\natural$ 위의 작용이 사영적이지 않은 진짜 작용이 되고, [괴물 달빛](monstrous-moonshine.md)이 이 사실을 쓴다.

## ATLAS 표기

유한군 ATLAS 는 확대를 점으로 적는다. $2.A_n$ 은 $A_n$ 의 이중 중심확대, $A_n.2=S_n$ 은 위로의 확대, $2.A_n.2$ 는 둘 다이다. [Umbral moonshine](umbral-moonshine.md)에서 근계 $A_2^{12}$ 에 붙는 군 $2.M_{12}$ 의 $2$ 가 $M(M_{12})=\mathbb Z/2$ 를 실현한 것이다.

산재군의 곱셈자 표에는 $6.\mathrm{Suz}$ , $12.M_{22}$ , $3.J_3$ 같은 큰 덮개가 있고, 격자나 부호 위의 작용을 구성할 때 이 형태가 쓰인다. [Leech 격자](leech-lattice.md) 위의 작용에 $6.\mathrm{Suz}$ 가 나타난다.

# 활용

## 스핀과 대칭의 표현

양자 상태가 [Hilbert 공간](hilbert-spaces.md)의 직선이므로 대칭군은 $\mathrm{PU}(\mathcal H)$ 에 작용하고, 그것을 $\mathrm{U}(\mathcal H)$ 로 들어올릴 때 곱셈자가 걸린다.

- 회전군 $\mathrm{SO}(3)$ 의 곱셈자가 $\mathbb Z/2$ 라 반정수 스핀이 존재한다. 들어올린 군이 $\mathrm{SU}(2)$ 다.
- Galilei 군에서는 질량이 곱셈자의 매개변수로 나타난다. 비상대론적 양자역학에서 질량이 중심전하로 등장하는 이유다.
- 결정의 공간군에서는 곱셈자가 작은 표현의 분류에 들어가고, 고체물리의 밴드 구조 계산에 쓰인다.

## 유한 단순군의 덮개

[유한 단순군 분류](finite-simple-groups.md)를 쓰려면 덮개와 확대까지 포함한 자료가 필요하다. 각 단순군 $S$ 의 $M(S)$ 를 알아야 $S$ 를 부분몫으로 갖는 군들을 조직할 수 있고 분류의 귀납 단계가 돌아간다. ATLAS 가 모든 산재군의 곱셈자와 덮개를 표로 싣는다.

## 대수적 K 이론과의 연결

$\mathrm{SL}\_n(R)$ 의 보편 중심확대는 Steinberg 군 $\mathrm{St}\_n(R)$ 이고, 그 핵이 $K_2(R)$ 다.

$$
1\to K_2(R)\to\mathrm{St}(R)\to E(R)\to1
$$

$K_2$ 는 기본행렬군의 Schur 곱셈자다. Milnor 가 [대수적 K 이론](algebraic-k-theory.md)의 $K_2$ 를 이렇게 정의했고, 체 $F$ 에 대한 $K_2(F)$ 가 Hilbert 기호와 이차형식, [유체론](class-field-theory.md)의 국소 상호법칙과 연결된다.[^1]

[^1]: 고전적 원논문은 I. Schur (1904, 1907) 이고, 현대적 서술은 G. Karpilovsky, *The Schur Multiplier* (1987). ATLAS 의 곱셈자 표는 J. Conway 외, *Atlas of Finite Groups* (1985) 서문. Hopf 공식과 군 호몰로지는 K. Brown, *Cohomology of Groups* (1982) 2 장과 5 장. $K_2$ 와 Steinberg 군은 J. Milnor, *Introduction to Algebraic K-Theory* (1971).

# 연관 문서

## 선수지식

- [군 확대](group-extensions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #algebra #construction
