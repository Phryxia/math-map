# 곱셈적 종수

# 개요

종수는 방향 코보디즘 환에 유리수를 텐서한 것에서 $\mathbb Q$ 로 가는 환 준동형이다. 한 변수 멱급수 하나가 그런 준동형 하나를 정하고, 그 대응이 특성류의 다항식을 만든다.

$L$ 종수가 부호수를 주고, $\hat A$ 종수가 Dirac 작용소의 지표를 주고, Todd 종수가 Riemann–Roch 공식의 우변을 준다. 세 공식의 유리계수가 각각의 멱급수에서 나온다.

# 직관

[Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)는 $4$ 차원에서 부호수를 $p_1/3$ 으로, $8$ 차원에서 $(7p_2-p_1^2)/45$ 로 적는다. 분모 $3$ 과 $45$, 분자의 $7$ 이 어디서 오는지 묻는다.

부호수는 곱다양체에서 $\mathrm{sign}(M\times N)=\mathrm{sign}(M)\thinspace\mathrm{sign}(N)$ 을 만족하고 전 [Pontryagin 류](pontryagin-classes.md)도 곱다양체에서 곱이 된다. 그래서 찾는 다항식의 열 $K_1, K_2, \dots$ 는 전 류의 곱에 대해 곱이 되어야 한다. Pontryagin 근 $y_1,\dots,y_m$ 으로 적으면 이 조건을 만족하는 것은 근마다 같은 멱급수 $Q$ 를 넣고 전부 곱한 $\prod_j Q(y_j)$ 뿐이다.

남은 자유도는 $Q$ 의 계수뿐이고, $\mathbb{CP}^{2i}$ 의 부호수가 모두 $1$ 이라는 조건이 그 계수를 전부 정한다. 나오는 답이 $Q(y)=\sqrt y/\tanh\sqrt y = 1 + y/3 - y^2/45 + \dots$ 이고, 이 급수의 $y$ 차 항이 $p_1/3$ 을 주고 $y^2$ 차 항이 $(7p_2-p_1^2)/45$ 를 준다.

# 정의

## 곱셈적 열

상수항이 $1$ 인 멱급수 $Q(y) = 1 + a_1 y + a_2 y^2 + \dots \in \mathbb Q\lbrack\lbrack y\rbrack\rbrack$ 를 잡는다. 실 벡터다발의 Pontryagin 근을 $y_1,\dots,y_m$ 이라 하고

$$
K(p) \thinspace=\thinspace \prod_{j=1}^m Q(y_j)
$$

를 전개하면 차수 $4i$ 성분이 $p_1,\dots,p_i$ 의 유리계수 다항식 $K_i$ 가 된다. 이 열 $\lbrace K_i\rbrace$ 를 $Q$ 의 **곱셈적 열**이라 한다.[^1]

처음 두 항은 계수로 다음과 같이 적힌다.

$$
K_1 = a_1 p_1, \qquad K_2 = a_2(p_1^2-2p_2) + a_1^2 p_2
$$

## 종수

$4n$ 차원 닫힌 방향 다양체 $M$ 에 대해

$$
\varphi(M) \thinspace=\thinspace \langle K_n(p_1(M),\dots,p_n(M)), \lbrack M\rbrack\rangle \thinspace\in\thinspace \mathbb Q
$$

로 두고, 차원이 $4$ 의 배수가 아니면 $\varphi(M)=0$ 으로 둔다. 이 $\varphi$ 를 $Q$ 의 **종수**라 한다.

## 세 종수

| 이름 | $Q(y)$ | 처음 항 | 차수 $4$ 성분 |
| --- | --- | --- | --- |
| $L$ | $\sqrt y/\tanh\sqrt y$ | $1 + y/3 - y^2/45$ | $p_1/3$ |
| $\hat A$ | $(\sqrt y/2)/\sinh(\sqrt y/2)$ | $1 - y/24 + 7y^2/5760$ | $-p_1/24$ |

차수 $8$ 성분은 위 $K_2$ 공식에서 $L_2 = (7p_2-p_1^2)/45$ 와 $\hat A_2 = (7p_1^2-4p_2)/5760$ 이다.

복소 다발에는 Chern 근 $x_j$ 로 같은 구성을 하고, $Q(x) = x/(1-e^{-x})$ 가 주는 열을 **Todd 류** $\mathrm{Td}$ 라 한다. 처음 항이 $\mathrm{Td}\_1 = c_1/2$ 다.

# 성질

## 멱급수와 종수의 대응

**정리(Hirzebruch).** $Q\mapsto\varphi$ 가 상수항 $1$ 인 $\mathbb Q$ 계수 멱급수 전체와 환 준동형 $\Omega^{SO}\_\ast\otimes\mathbb Q\to\mathbb Q$ 전체 사이의 전단사다.[^1]

$\Omega^{SO}\_\ast\otimes\mathbb Q$ 가 $\lbrack\mathbb{CP}^{2i}\rbrack$ 들의 다항식환이므로 환 준동형은 값의 열 $\varphi(\mathbb{CP}^{2i})$ 로 자유롭게 정해진다. 한편 $p(T\mathbb{CP}^{2i}) = (1+a^2)^{2i+1}$ 에서 $\varphi(\mathbb{CP}^{2i})$ 를 $a_1,\dots,a_i$ 로 쓰면 $a_i$ 의 계수가 $0$ 이 아닌 삼각 관계가 나와, 값의 열과 계수의 열이 서로를 결정한다. ∎

## 곱과 경계

$\varphi(M\times N)=\varphi(M)\thinspace\varphi(N)$ 이고 $\varphi(M\sqcup N)=\varphi(M)+\varphi(N)$ 이다. $M$ 이 콤팩트 다양체의 경계이면 $\varphi(M)=0$ 이다.

경계 조건은 Pontryagin 수가 [코보디즘](cobordism.md) 불변량이라는 것과 같다.[^2] 그러므로 종수는 코보디즘류만 보고 값을 정한다.

## 정수성

$L$ 종수는 닫힌 방향 다양체에서 항상 정수이고 그 값이 부호수다. $\hat A$ 종수는 닫힌 스핀 다양체에서 정수이고 그 값이 [Dirac 작용소](dirac-operator.md)의 지표다.

**정리.** 닫힌 스핀 $4$ 차원 다양체의 부호수는 $16$ 으로 나뉜다.

$4$ 차원에서 $\hat A_1 = -p_1/24$ 이고 $L_1 = p_1/3$ 이므로 $\hat A(M) = -\mathrm{sign}(M)/8$ 이다. 스핀 다양체에서 Dirac 작용소가 사원수 구조를 가져 지표가 짝수이므로 $\mathrm{sign}(M)$ 이 $16$ 의 배수다. ∎

정수성은 멱급수의 계수만 보고는 드러나지 않는다. 좌변이 정수라는 해석적 사실에서 나온다.

# 활용

- [지표 정리](index-theorem.md)의 우변이 종수다. 타원 작용소마다 짝지어지는 종수가 다르고, 부호수 작용소에 $L$, Dirac 작용소에 $\hat A$, Dolbeault 작용소에 Todd 류가 붙는다.
- Hirzebruch–Riemann–Roch 공식이 [층](sheaves.md) 코호몰로지의 교대합을 $\mathrm{ch}(E)\thinspace\mathrm{Td}(TM)$ 의 적분으로 적는다. 곡선에서 이 공식이 $\deg D+1-g$ 를 준다.
- 양의 스칼라 곡률의 장애. 스핀 다양체에서 $\hat A$ 종수가 $0$ 이 아니면 스칼라 곡률이 양인 계량이 없다.
- [이색 구면](exotic-spheres.md)의 불변량. $L$ 종수의 분모에 나오는 소수가 $7$ 차원 호모토피 구면을 가르는 법이 된다.

[^1]: F. Hirzebruch, *Topological Methods in Algebraic Geometry*, 3rd edition, Springer (1966), §1. 곱셈적 열의 정의, 멱급수와 종수의 전단사, $L$ 과 $\hat A$ 와 Todd 류의 급수가 이 절에 있다.

[^2]: J. W. Milnor and J. D. Stasheff, *Characteristic Classes*, Annals of Mathematics Studies 76, Princeton University Press (1974), §19. 방향 코보디즘 환의 유리 구조와 종수의 계산이 이 절의 내용이다.

# 연관 문서

## 선수지식

- [코보디즘](cobordism.md)
- [Pontryagin 류](pontryagin-classes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
