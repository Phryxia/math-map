# 군의 표현과 지표

# 개요

표현론은 [군](groups.md)을 행렬의 군으로 실현해 선형대수로 분석하는 이론이다. [군 작용](group-actions.md)이 집합 위의 대칭이라면 표현은 벡터 공간 위의 선형 대칭이고, [고윳값](eigenvalues.md)과 대각화를 쓸 수 있다.

유한군을 표수 $0$ 인 체 위에서 보면 모든 표현이 기약표현의 직합으로 쪼개지고(Maschke), 기약표현 사이의 사상은 스칼라뿐이며(Schur), 각 표현은 대각합만 기록한 지표로 결정된다. 유한군의 표현론은 유한 크기의 표 하나, 곧 지표표로 압축된다.

# 직관

군 원소를 가역행렬로 보내되 곱을 곱으로 보내면 군의 관계식이 행렬 항등식이 된다. $S_3$ 를 정삼각형의 대칭으로 보면 각 원소가 평면의 직교행렬이 되고, 꼭짓점의 치환이 회전과 반사로 번역된다.

표현의 분석은 기약표현으로의 분해다. 유한군을 복소수 위에서 다루면 분해가 항상 가능하고 중복도가 유일하며, 중복도는 지표의 내적이라는 유한 합으로 계산된다. 기저를 바꾸면 행렬은 바뀌어도 대각합은 바뀌지 않고 켤레인 원소는 같은 대각합을 주므로, 지표는 켤레류 위의 함수이면서 표현의 동형류를 결정한다.

# 정의

## 표현

체 $k$ 위 벡터 공간 $V$ 와 군 준동형

$$
\rho : G \to \mathrm{GL}(V)
$$

의 쌍이 $G$ 의 **표현**이다. $\dim V$ 가 표현의 차수다. 아래에서 $G$ 는 유한군, $k=\mathbb C$ 로 둔다.

동치인 서술은 $V$ 가 군환 $k[G]$ 위의 [가군](modules.md)이라는 것이다. 표현론의 정리들은 군환 위 가군론의 정리로 번역된다.

기본 예는 다음과 같다.

- 자명표현: $V=k$ , 모든 $g$ 가 항등사상.
- 순열표현: $G$ 가 유한집합 $X$ 에 작용할 때 $V=k^X$ 에 좌표 치환으로 작용.
- 정규표현: $X=G$ 에 왼쪽 곱으로 작용시킨 순열표현. 차수는 $|G|$ 다.
- 1차원 표현: 준동형 $G \to k^{\times}$ 다. 아벨군에서는 이것이 전부다.

## 부분표현과 기약표현

부분공간 $W \subseteq V$ 가 모든 $g$ 에 대해 $\rho(g)W \subseteq W$ 를 만족하면 **부분표현**이다. $V \neq 0$ 이고 부분표현이 $0$ 과 $V$ 뿐이면 $V$ 는 **기약**이다.

두 표현 $(\rho, V)$ 와 $(\sigma, W)$ 사이의 **얽힘사상**은

$$
f \circ \rho(g) = \sigma(g) \circ f \quad (\forall g \in G)
$$

를 만족하는 선형사상 $f : V \to W$ 다. 그 전체를 $\mathrm{Hom}_G(V, W)$ 로 쓴다.

## 지표

표현 $(\rho, V)$ 의 **지표**는

$$
\chi_V(g) = \mathrm{tr} \rho(g)
$$

로 정의되는 함수 $\chi_V : G \to \mathbb C$ 다.

- $\chi_V(1) = \dim V$ 다.
- $\chi_V(hgh^{-1}) = \chi_V(g)$ 이므로 지표는 켤레류 함수다.
- $\chi_{V \oplus W} = \chi_V + \chi_W$ 와 $\chi_{V \otimes W} = \chi_V \cdot \chi_W$ 가 성립한다. 두 번째는 [텐서곱](tensor-products.md)의 성질이다.
- $\rho(g)$ 는 $g^{\lvert G \rvert} = 1$ 때문에 대각화 가능하고 고윳값이 1의 거듭제곱근이므로 $\chi_V(g^{-1}) = \overline{\chi_V(g)}$ 다.

류함수 공간의 내적은 다음과 같다.

$$
\langle \chi, \psi \rangle = \frac{1}{|G|} \sum_{g \in G} \chi(g) \overline{\psi(g)}
$$

# 성질

## Maschke 정리

**정리.** $G$ 가 유한군이고 $\mathrm{char} k$ 가 $\lvert G \rvert$ 를 나누지 않으면, $G$ 의 모든 유한차원 표현은 기약표현의 직합이다.[^2]

*증명 스케치.* 부분표현 $W \subseteq V$ 를 잡고 임의의 사영 $\pi : V \to W$ 를 평균 낸다.

$$
\pi_0 = \frac{1}{|G|} \sum_{g \in G} \rho(g)\thinspace \pi\thinspace \rho(g)^{-1}
$$

$\pi_0$ 은 $W$ 위에서 항등이고 상이 $W$ 이며 모든 $\rho(h)$ 와 교환한다. 따라서 $\ker \pi_0$ 이 부분표현이 되어 $V = W \oplus \ker \pi_0$ 이고, 차원에 대한 귀납으로 완전 분해를 얻는다. ∎

$\mathrm{char} k$ 가 $\lvert G \rvert$ 를 나누는 modular 상황에서는 $1/\lvert G \rvert$ 를 쓸 수 없어 정리가 실패한다. $\mathbb Z/p$ 의 $\mathbb F_p$ 위 2차원 표현 중 분해되지 않는 것이 있다.

## Schur 보조정리

**보조정리.** $V$ 와 $W$ 가 기약표현이면

$$
\mathrm{Hom}_G(V, W) = \begin{cases} 0 & (V \not\cong W) \cr \mathbb{C}\cdot \mathrm{id} & (V \cong W) \end{cases}
$$

이다.

*증명 스케치.* $f \neq 0$ 이면 $\ker f$ 와 $\mathrm{im} f$ 가 부분표현이므로 기약성에 의해 $f$ 는 동형이다. $V = W$ 인 경우 $\mathbb C$ 가 대수적으로 닫혀 있어 $f$ 는 고윳값 $\lambda$ 를 가지고, $f - \lambda \cdot \mathrm{id}$ 도 얽힘사상이면서 가역이 아니므로 $0$ 이다. ∎

기약표현 위에서 $G$ 와 교환하는 연산자는 스칼라뿐이고, 아래 직교관계와 물리의 선택 규칙이 여기서 따라온다.

## 직교관계

**정리 (제1 직교관계).** 기약표현의 지표들은 류함수 공간의 정규직교 기저를 이룬다.

$$
\langle \chi_i, \chi_j \rangle = \delta_{ij}
$$

*증명 스케치.* $\mathrm{Hom}(V, W)$ 에 $g \cdot f = \sigma(g) f \rho(g)^{-1}$ 로 표현 구조를 주면 지표는 $\chi_W \overline{\chi_V}$ 이고 불변원소의 공간은 $\mathrm{Hom}_G(V, W)$ 다. 평균 연산자

$$
P = \frac{1}{|G|}\sum_{g} \rho(g)
$$

는 불변부분공간 위로의 사영이므로 $\mathrm{tr} P$ 가 그 차원과 같다. 두 계산에서 $\langle \chi_W, \chi_V \rangle = \dim \mathrm{Hom}_G(V, W)$ 이고, Schur 보조정리가 우변을 $0$ 또는 $1$ 로 만든다. ∎

따름정리는 다음과 같다.

- 기약 분해 $V \cong \bigoplus V_i^{\oplus m_i}$ 에서 중복도는 $m_i = \langle \chi_V, \chi_i \rangle$ 다.
- $V$ 가 기약일 필요충분조건은 $\langle \chi_V, \chi_V \rangle = 1$ 이다.
- 지표가 같으면 표현이 동형이다.
- 류함수 공간의 차원이 켤레류 수이므로 기약표현의 개수는 켤레류의 개수와 같다.

**제2 직교관계.** 켤레류 대표 $g$ 와 $h$ 에 대해 지표표의 열도 직교한다.

$$
\sum_{i} \chi_i(g) \overline{\chi_i(h)} = \begin{cases} |C_G(g)| & (g \sim h) \cr 0 & (\text{그 외}) \end{cases}
$$

## 정규표현의 분해

정규표현의 지표는 $\chi_{\mathrm{reg}}(1) = \lvert G \rvert$ 이고 $g \neq 1$ 에서 $0$ 이다. 따라서

$$
\langle \chi_{\mathrm{reg}}, \chi_i \rangle = \frac{1}{|G|}\thinspace |G| \cdot \overline{\chi_i(1)} = \dim V_i
$$

이고, 정규표현은 각 기약표현을 그 차수만큼 포함한다.

$$
\mathbb{C}[G] \thickspace\cong\thickspace \bigoplus_i V_i^{\oplus \dim V_i}, \qquad \sum_i (\dim V_i)^2 = |G|
$$

차수 공식은 기약표현의 차수를 제약한다. 각 차수가 $|G|$ 를 나눈다는 정리를 더하면 후보가 거의 남지 않는다.

## $S_3$ 의 지표표

$S_3$ 의 켤레류는 항등원, 호환 3개, 3-순환 2개로 셋이다. 기약표현도 셋이고, 차수 공식 $1+1+4=6$ 이 유일한 해다.

| 기약표현 | $e$ (1개) | 호환 (3개) | 3-순환 (2개) |
| --- | --- | --- | --- |
| 자명 $1$ | 1 | 1 | 1 |
| 부호 $\mathrm{sgn}$ | 1 | -1 | 1 |
| 표준 $V$ (2차) | 2 | 0 | -1 |

이 표로 지표 내적을 계산하면 두 표현이 다음과 같이 분해된다.

| 표현 | 차수 | 분해 |
| --- | --- | --- |
| 순열표현 $\mathbb C^3$ | 3 | $1\oplus V$ |
| 정규표현 $\mathbb C[S_3]$ | 6 | $1\oplus\mathrm{sgn}\oplus V^{\oplus2}$ |

정규표현에서 각 기약표현이 자기 차수만큼 나타나므로 $1+1+2\cdot2=6$ 이다.

# 활용

## 분해 계산

지표만 있으면 분해는 산술이다. 다음은 $S_3$ 의 순열표현과 정규표현을 분해한다.

```python
from fractions import Fraction

sizes = {"e": 1, "t": 3, "c": 2}          # 켤레류 크기: 항등, 호환, 3-순환
irr = {"triv": {"e": 1, "t": 1, "c": 1},
       "sign": {"e": 1, "t": -1, "c": 1},
       "std":  {"e": 2, "t": 0, "c": -1}}
order = sum(sizes.values())

def ip(a, b):                              # 지표 내적 (실수 지표라 켤레는 생략)
    return Fraction(sum(sizes[k] * a[k] * b[k] for k in sizes), order)

perm = {"e": 3, "t": 1, "c": 0}            # 3점 위의 순열표현
reg = {"e": 6, "t": 0, "c": 0}             # 정규표현

print({n: ip(perm, chi) for n, chi in irr.items()})
# {'triv': 1, 'sign': 0, 'std': 1}  ->  C^3 = 자명 (+) 표준

print({n: ip(reg, chi) for n, chi in irr.items()})
# {'triv': 1, 'sign': 1, 'std': 2}  ->  차수 공식 1 + 1 + 2*2 = 6

print(ip(irr["std"], irr["std"]))          # 1 이므로 표준표현은 기약
```

순열표현의 지표는 고정점 개수이므로

$$
\langle \chi_X, 1 \rangle = \frac{1}{|G|}\sum_{g} |X^g|
$$

이고 우변은 궤도의 개수다. Burnside 세기 보조정리가 지표의 언어로 쓰인 것이다.

## 대칭성이 있는 문제

- 분자의 진동 모드는 대칭군의 표현이고, 기약 성분으로 분해하면 어떤 모드가 적외선이나 Raman에서 관측되는지가 결정된다. 선택 규칙은 Schur 보조정리의 귀결이다.
- 대칭 연산과 교환하는 Hamiltonian은 각 기약 성분 위에서 스칼라로 작용하므로, 결정의 대칭군 표현이 에너지 준위의 겹침을 설명한다.
- 자기동형군이 큰 그래프는 인접행렬을 기약 성분별로 블록화할 수 있어 [그래프 Laplacian](graph-laplacian.md)의 스펙트럼 계산이 쉬워진다. 대칭행렬의 블록 대각화는 [스펙트럼 정리](spectral-theorem.md)와 같은 그림이다.

## 군 위의 Fourier 해석

$G$ 가 유한 아벨군이면 모든 기약표현이 1차원이고 지표들은 준동형 $G \to \mathbb C^{\times}$ 다. 이들이 $\mathbb C[G]$ 의 정규직교 기저이므로 임의의 함수가

$$
f(g) = \sum_{\chi} \hat{f}(\chi)\thinspace \chi(g), \qquad \hat{f}(\chi) = \frac{1}{|G|}\sum_{g} f(g) \overline{\chi(g)}
$$

로 전개된다. $G=\mathbb Z/n$ 이면 지표가 $\chi_k(j) = e^{2\pi i jk/n}$ 이고 위 식이 [이산 Fourier 변환](fourier.md)이다. 비아벨군으로 확장하면 행렬 값을 갖는 Fourier 변환이 된다.[^1]

## 군의 구조 판정

- 기약표현의 차수는 $|G|$ 를 나눈다. [Sylow 정리](sylow-theorems.md)의 세기와 결합하면 작은 위수 군의 단순성 판정이 강해진다.
- 두 소수만으로 이루어진 위수의 군은 가해군이라는 Burnside 의 $p^aq^b$ 정리는 지표 이론으로 증명된다.
- 기약 지표 하나를 고정해 $\chi(g)=\chi(1)$ 인 원소를 모으면 그 표현의 핵이고, 이런 핵들의 교집합으로 모든 정규부분군을 얻는다. 지표표만으로 단순군 여부를 판정할 수 있다.

[^1]: Wikipedia, Character theory, https://en.wikipedia.org/wiki/Character_theory
[^2]: Wikipedia, Maschke's theorem, https://en.wikipedia.org/wiki/Maschke%27s_theorem

# 연관 문서

## 선수지식

- [군 작용](group-actions.md)
- [고윳값과 고유벡터](eigenvalues.md)

## 더 알아보기

- [Dirichlet 지표와 L 함수](dirichlet-l-functions.md)
- [Langlands 강령](langlands-program.md)
- [유한 단순군 분류](finite-simple-groups.md)
- [구면조화함수와 SO(3) 의 표현](spherical-harmonics.md)
- [Schur–Weyl 쌍대성](schur-weyl-duality.md)

#group_theory #linear_algebra
