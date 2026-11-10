# Specht 가군

# 개요

**Specht 가군(Specht module)** 은 대칭군 $S_n$ 의 기약표현을 $n$ 의 분할마다 하나씩, 변수를 맞바꾸는 다항식의 공간으로 만든 것이다. $S_3$ 이 세 변수 $x_1,x_2,x_3$ 의 번호를 바꾸면 다항식 $x_1-x_2$ 는 $x_2-x_1$, $x_1-x_3$, $x_2-x_3$ 같은 차들로 옮겨 가고, 이 차들을 더하고 상수배한 다항식 전체는 2 차원 공간이다. 이 공간이 $S_3$ 의 2 차 기약표현이다. Young 도형의 열마다 그 열에 놓인 번호의 차를 곱한 다항식을 쓰면 같은 방법으로 $S_n$ 의 기약표현이 전부 나온다.

# 직관

[군의 표현](group-representations.md) 문서에서 $S_3$ 의 기약표현은 자명표현, 부호표현, 2 차 표현의 셋이다. 이 셋을 다항식 하나씩으로 만든다. $\sigma\in S_3$ 은 다항식의 변수 $x_a$ 를 $x_{\sigma(a)}$ 로 바꾸어 작용한다.

- 상수 $1$ 은 어느 $\sigma$ 로도 바뀌지 않는다. 자명표현이다.
- $(x_1-x_2)(x_1-x_3)(x_2-x_3)$ 은 호환 하나로 부호가 바뀐다. 부호표현이다.
- $x_1-x_2$ 는 $\pm(x_a-x_b)$ 꼴로 옮겨 가고, $x_2-x_3=(x_1-x_3)-(x_1-x_2)$ 이므로 이들이 펼치는 공간의 기저는 $x_1-x_2$, $x_1-x_3$ 이다. 2 차 표현이다.

세 다항식은 칸 셋으로 된 Young 도형 세 개에서 나온다. 한 행 세 칸 $(3)$ 은 열마다 칸이 하나라서 곱할 차가 없어 $1$ 이다.

한 열 세 칸 $(1,1,1)$ 은 그 열의 세 번호에서 차 셋을 곱한다. $(2,1)$ 은 첫 열에 번호 두 개가 놓여 차 하나가 나온다. $S_4$ 에서는 칸 넷으로 된 도형이 다섯이고, 같은 규칙으로 기약표현 다섯이 나온다.

# 정의

## Specht 다항식

$\lambda\vdash n$ 의 Young 도형의 칸에 $1,\dots,n$ 을 한 번씩, 크기 순서 조건 없이 채운 것을 모양 $\lambda$ 의 Young 대각표(Young tableau)라 한다. 대각표 $T$ 의 **Specht 다항식(Specht polynomial)** 은 열마다 그 열의 번호에서 위의 것 $a$ 와 아래의 것 $b$ 를 골라 만든 차 $x_a-x_b$ 를 모두 곱한 것이다.

$$
\Delta_T=\prod_{\text{열 }C}\ \prod_{\substack{a,b\in C\cr a\text{ 가 }b\text{ 위}}}(x_a-x_b)
$$

첫 행이 $1,2$ 이고 둘째 행이 $3$ 인 대각표에서 첫 열은 $1,3$ 이므로 $\Delta_T=x_1-x_3$ 이다. 첫 행이 $2,3$ 이고 둘째 행이 $1$ 이면 $\Delta_T=x_2-x_1$ 이다.

## Specht 가군

$S_n$ 은 다항식환 $\mathbb C\lbrack x_1,\dots,x_n\rbrack$ 에 $x_a\mapsto x_{\sigma(a)}$ 인 치환으로 작용한다. 이 작용은 $\Delta_T$ 를 $\Delta_{\sigma T}$ 로 보낸다. $\sigma T$ 는 $T$ 의 각 번호 $a$ 를 $\sigma(a)$ 로 바꾼 대각표다.

모양 $\lambda$ 의 대각표 전체의 Specht 다항식이 펼치는 부분공간을 $S^\lambda$ 로 쓰고 **Specht 가군** 이라 한다[^1]. $S^\lambda$ 는 $S_n$ 의 작용에 닫혀 있으므로 $S_n$ 의 표현이다. 직관 절의 세 공간이 $S^{(3)}$, $S^{(2,1)}$, $S^{(1,1,1)}$ 이다.

# 성질

## 기약표현의 분류

$\lambda$ 가 $n$ 의 분할 전체를 지날 때 $S^\lambda$ 는 서로 동형이 아닌 기약표현이고, $S_n$ 의 복소 기약표현은 이것이 전부다[^2]. 증명의 요지. James 의 부분가군 정리(submodule theorem)로 $S^\lambda$ 의 부분표현은 $0$ 이나 $S^\lambda$ 이고, 지배순서(dominance order)를 써서 $\lambda\ne\mu$ 이면 $S^\lambda\not\cong S^\mu$ 임을 보인다. 기약표현의 수는 [켤레류](conjugacy-classes.md)의 수이고 $S_n$ 의 켤레류는 순환 꼴, 곧 분할과 대응하므로 빠진 기약표현이 없다.

## 표준 기저와 차원

$T$ 가 모양 $\lambda$ 의 표준 Young 대각표 전체를 지날 때 $\Delta_T$ 는 $S^\lambda$ 의 기저다. 따라서 $\dim S^\lambda=f^\lambda$ 이고, $f^\lambda$ 는 [갈고리 길이 공식](hook-length-formula.md)으로 계산된다. $\lambda=(2,1)$ 의 표준 대각표 둘에서 $x_1-x_3$ 과 $x_1-x_2$ 가 나오고, 직관 절의 기저와 같다. $S_4$ 의 기약표현 다섯의 차원은 $1,3,2,3,1$ 이고 제곱합이 $24$ 다.

## 분기 규칙

$S^\lambda$ 를 $n$ 을 고정하는 부분군 $S_{n-1}$ 로 제한하면, $\lambda$ 의 모서리 칸 $c$ 하나를 지운 모양들의 Specht 가군의 직합이 된다. 이것을 분기 규칙(branching rule)이라 한다.

$$
S^\lambda\big\vert\_{S_{n-1}}\cong\bigoplus_{c\ \text{모서리}}S^{\lambda-c}
$$

$S^{(2,1)}$ 를 $1,2$ 를 맞바꾸는 $S_2$ 로 제한하면 $(x_1-x_3)+(x_2-x_3)$ 은 고정되고 $x_1-x_2$ 는 부호가 바뀐다. 두 모서리를 지운 $(2)$ 와 $(1,1)$ 의 자명표현과 부호표현이다. 차원을 세면 갈고리 길이 공식 문서의 모서리 점화식이 나온다.

## 켤레 분할과 부호

$\lambda'$ 을 $\lambda$ 의 켤레 분할이라 하면 $S^{\lambda'}\cong S^\lambda\otimes\mathrm{sgn}$ 이다. $(3)$ 과 $(1,1,1)$ 이 자명표현과 부호표현으로 짝을 이루고, $(2,1)$ 은 자기 자신과 짝이다.

## Frobenius 지표 공식

$S^\lambda$ 의 지표를 $\chi^\lambda$ 라 하고, 순환 꼴이 $\mu$ 인 원소에서의 값을 $\chi^\lambda(\mu)$ 로 쓴다. 멱합 대칭함수 $p_\mu$ 를 [Schur 다항식](schur-polynomials.md)으로 전개한 계수가 지표의 값이다. 이것이 Frobenius 지표 공식(Frobenius character formula)이다.

$$
p_\mu=\sum_{\lambda\vdash n}\chi^\lambda(\mu)\thinspace s_\lambda
$$

$n=3$ 이면 다음과 같다.

$$
\begin{aligned}
p_{(1,1,1)}&=s_{(3)}+2s_{(2,1)}+s_{(1,1,1)}\cr
p_{(2,1)}&=s_{(3)}-s_{(1,1,1)}\cr
p_{(3)}&=s_{(3)}-s_{(2,1)}+s_{(1,1,1)}
\end{aligned}
$$

계수를 읽으면 $\chi^{(2,1)}$ 의 값은 항등원, 호환, 3-순환에서 $2,0,-1$ 이다.

# 활용

- [지표표](character-table.md). $S_n$ 의 지표표의 행은 $\chi^\lambda$ 이고, 열은 순환 꼴 $\mu$ 다. Frobenius 지표 공식으로 각 칸이 계산된다.
- [Schur–Weyl 쌍대성](schur-weyl-duality.md). $(\mathbb C^m)^{\otimes n}$ 에서 $S_n$ 쪽의 기약 성분이 $S^\lambda$ 이고, 그 짝이 $\mathrm{GL}\_m$ 의 기약표현이다.
- [세포대수](cellular-algebras.md). 군환 $\mathbb Z\lbrack S_n\rbrack$ 의 세포 가군이 정수 위의 Specht 가군이다.
- 양의 표수의 표현. 표수 $p$ 의 체 위에서는 $S^\lambda$ 가 기약이 아닐 수 있다. 표수 $3$ 에서 $S^{(2,1)}$ 의 원소 $(x_1-x_3)+(x_2-x_3)=x_1+x_2-2x_3$ 은 $x_1+x_2+x_3$ 과 같아 $S_3$ 이 고정하므로 자명표현을 부분표현으로 가진다. James 는 같은 행이 $p$ 개 이상 반복되지 않는 분할 $\lambda$ 마다 $S^\lambda$ 의 몫으로 기약표현 하나를 만들었고, 표수 $p$ 의 기약표현은 이것이 전부다[^2].

[^1]: W. Specht, Die irreduziblen Darstellungen der symmetrischen Gruppe, *Math. Z.* **39** (1935), 696–711.
[^2]: G. D. James, *The Representation Theory of the Symmetric Groups*, Lecture Notes in Math. 682, Springer (1978). B. Sagan, *The Symmetric Group*, 2nd ed., Springer (2001), 2 장.

# 연관 문서

## 선수지식

- [대칭군](symmetric-groups.md)
- [군의 표현](group-representations.md)
- [갈고리 길이 공식](hook-length-formula.md)

## 더 알아보기

- [Murnaghan–Nakayama 규칙](murnaghan-nakayama-rule.md)

#group_theory #combinatorics #algebra
