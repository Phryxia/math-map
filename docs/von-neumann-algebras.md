# von Neumann 대수

# 개요

**von Neumann 대수(von Neumann algebra)** 는 [Hilbert 공간](hilbert-spaces.md) $H$ 의 [유계 작용소](bounded-operators.md) 대수 $B(H)$ 의 부분대수 가운데 항등원을 포함하고 수반작용소에 닫히고 약작용소 위상(weak operator topology)에서 닫힌 것이다.

이 조건은 자기 교환자를 두 번 취해 제자리로 돌아온다는 대수적 조건과 같다. 이중교환자 정리가 그 동치를 준다.

# 직관

자기수반 작용소 하나는 [스펙트럼 정리](spectral-theorem.md)로 다룬다. 사영측도 $E$ 가 있어 $A=\int\lambda\thinspace dE(\lambda)$ 이고, $A$ 의 함수는 사영 $E(S)$ 들의 적분으로 적힌다. 작용소 하나를 아는 것은 사영 한 묶음을 아는 것이다.

작용소 둘을 함께 다루면 이 방법이 멈춘다. $A$ 와 $B$ 가 교환하면 두 사영측도가 교환하고 공통 사영으로 둘을 동시에 분해한다. 교환하지 않으면 $A$ 의 사영과 $B$ 의 사영이 서로 섞여서 어느 한쪽의 사영측도로는 다른 쪽을 적을 수 없다. $2\times 2$ 행렬 $A=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}$ 과 $B=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 이 그 예이고, $A$ 의 고유사영 둘은 $B$ 를 대각화하지 못한다.

사영측도 하나로 안 되므로 작용소들이 생성하는 대수 전체를 대상으로 바꾼다. $A$ 와 $B$ 에서 곱과 합과 수반으로 만들 수 있는 모든 작용소를 모으고 극한까지 닫는다. 위의 $2\times 2$ 예에서는 그 결과가 $B(\mathbb C^2)$ 전체이고, 사영은 모든 1차원 부분공간의 사영이다. 작용소 각각의 스펙트럼 대신 이 대수에 들어 있는 사영 전체가 자료가 된다.

어떤 극한으로 닫는지가 남는다. 노름으로 닫으면 사영이 모자란다. 약작용소 위상, 곧 각 벡터쌍 $(x,y)$ 에 대한 $\langle T\_nx,y\rangle$ 의 수렴으로 닫으면 사영들의 상한과 하한이 다시 대수에 들어와 사영 전체가 완비격자를 이룬다. 그 격자가 대수의 구조를 결정한다.

# 정의

$S\subseteq B(H)$ 의 **교환자(commutant)** 는 $S$ 의 모든 원소와 교환하는 유계 작용소 전체다.

$$
S'=\lbrace T\in B(H)\mid TS=ST \thinspace\text{ for all } S\in S\rbrace
$$

$\mathcal M\subseteq B(H)$ 가 $\mathcal M=\mathcal M''$ 을 만족하면 $\mathcal M$ 을 von Neumann 대수라 한다. 교환자는 항상 약작용소 위상에서 닫힌 대수이므로 이 조건은 $\mathcal M$ 이 닫혀 있음을 담는다.

## 인자

$\mathcal M$ 의 중심이 스칼라뿐이면, 곧 $\mathcal M\cap\mathcal M'=\mathbb C I$ 이면 $\mathcal M$ 을 **인자(factor)** 라 한다. 중심이 더 크면 중심 위의 적분으로 인자들의 직적분으로 분해되므로 인자가 기본 단위다.

## 사영의 비교

사영 $p,q\in\mathcal M$ 에 대해 $v^\ast v=p$, $vv^\ast=q$ 인 $v\in\mathcal M$ 이 있으면 $p\sim q$ 로 쓴다. 인자에서는 임의의 두 사영이 $p\sim q$ 이거나 한쪽이 다른 쪽의 부분사영과 동치다. 이 순서가 인자의 분류를 준다.

# 성질

## 이중교환자 정리

$\mathcal A\subseteq B(H)$ 가 항등원을 포함하는 수반 닫힌 부분대수이면 $\mathcal A''$ 은 $\mathcal A$ 의 약작용소 폐포와 같다[^1].

증명의 요지는 한 벡터에서 시작한다. $T\in\mathcal A''$ 과 $x\in H$ 에 대해 $\overline{\mathcal A x}$ 로의 사영 $p$ 는 $\mathcal A$ 와 교환하므로 $p\in\mathcal A'$ 이고, 따라서 $Tp=pT$ 다. $x\in\overline{\mathcal A x}$ 이므로 $Tx\in\overline{\mathcal A x}$ 이고 $\mathcal A$ 의 원소로 $Tx$ 를 근사한다. 유한 개 벡터로 같은 논증을 하려면 $H$ 를 유한 직합으로 바꿔 행렬 대수에서 반복한다.

## 형 분류

인자는 사영의 동치류가 이루는 순서로 세 가지로 갈린다[^2].

| 형 | 최소 사영 | 추적 | 보기 |
| --- | --- | --- | --- |
| I | 존재 | 사영의 계수 | $B(H)$ |
| II | 없음 | 유한값 추적이 존재 | 초유한 인자 |
| III | 없음 | 없음 | 자유군 작용의 교차곱 |

I 형은 $B(H)$ 와 동형이고 유한차원에서는 행렬 대수다. II$\_1$ 형 인자에는 $\tau(I)=1$ 로 정규화한 추적(trace)이 유일하게 존재하고 사영의 추적값이 구간 $\lbrack 0,1\rbrack$ 을 전부 채운다. 사영의 크기가 연속적으로 변하는 것이 II 형의 특징이다. III 형에는 유한값 추적이 없고 0 이 아닌 사영이 모두 서로 동치다.

## 교차곱 구성

군 $G$ 가 측도공간 $(X,\mu)$ 에 측도를 보존하며 작용하면 $L^\infty(X)$ 와 $G$ 의 교차곱이 von Neumann 대수가 된다. 작용이 에르고딕하고 자유이면 인자가 나오고, 작용이 유한 측도를 보존하면 II$\_1$ 형, 측도류만 보존하면 III 형이다. 이 구성이 세 형의 보기를 모두 만든다.

# 활용

- 양자역학의 관측가능량. 한 물리계의 관측가능량 전체를 von Neumann 대수로 놓고 상태를 그 위의 양의 선형범함수로 본다. 교환자는 그 계와 독립적으로 측정되는 양의 대수다.
- 군의 측도론적 동역학. 작용이 서로 켤레인지를 교차곱 대수의 동형으로 바꿔 묻는다. 측도 보존 작용의 불변량이 대수의 불변량이 된다.
- [부분인자](subfactors.md)의 지표. 인자 $\mathcal N\subseteq\mathcal M$ 의 상대적 크기를 재는 지표는 $\lbrace 4\cos^2(\pi/n)\rbrace$ 과 $\lbrack 4,\infty\rbrack$ 에만 값을 가진다. 이 값의 제한에서 나온 대수적 자료가 [Temperley–Lieb 대수](temperley-lieb-algebras.md)와 매듭 불변량으로 이어진다.
- [정점작용소대수](vertex-operator-algebras.md)와 공형장론의 작용소 대수적 정식화. 시공간 영역마다 대수를 배정하고 영역의 포함을 대수의 포함으로 옮긴다.

[^1]: J. Dixmier, *von Neumann Algebras*, North-Holland (1981), 1장. 이중교환자 정리와 약작용소 위상의 비교가 여기 있다.
[^2]: V. Jones, *von Neumann Algebras*, 강의노트 (2015), 3–5장. 형 분류와 II$\_1$ 형의 추적, 부분인자 지표의 값 제한을 다룬다. 부분인자 지표의 값 제한은 V. Jones, *Index for subfactors*, Invent. Math. **72** (1983), 1–25.

# 연관 문서

## 선수지식

- [유계 작용소](bounded-operators.md)

## 더 알아보기

- [부분인자](subfactors.md)

#functional_analysis #analysis #measure_theory #group_theory
