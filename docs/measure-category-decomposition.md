# 측도-범주 분해

# 개요

**측도-범주 분해(measure-category decomposition)** 는 수직선을 길이가 $0$ 인 집합과, 위상적으로 거의 비어 있는 집합 두 조각으로 나누는 분해다. 유리수 $q_n$ 마다 길이 $\varepsilon/2^n$ 인 구간을 씌우면 그 합집합은 길이가 $\varepsilon$ 이하로 작지만 수직선 위에 조밀하게 퍼져 있다. $\varepsilon$ 을 $1,1/2,1/3,\dots$ 으로 줄인 합집합들의 공통부분은 길이가 $0$ 이지만 위상으로는 큰 집합이 되고, 그 나머지는 길이로는 크지만 위상으로는 작다. 측도-범주 분해는 이 구성으로 "작은 집합" 의 두 기준인 측도와 범주가 서로 전혀 다름을 보인다.

# 직관

[측도](measure.md)가 $0$ 인 집합과 [Baire 범주](baire-category.md)의 뜻에서 제1 범주인 집합은 둘 다 작다고 불린다. 둘이 같은 것을 가리키는지 묻는다.

유리수 전체 $\lbrace q_1,q_2,\dots\rbrace$ 를 본다. 이 집합은 측도가 $0$ 이다. 한 점짜리 집합은 닫혀 있고 열린구간을 포함하지 않으므로, 그런 집합을 셀 수 있게 모은 유리수 집합은 제1 범주이기도 하다. 두 뜻이 여기서는 갈리지 않는다.

$q_n$ 을 길이 $2^{-n-k}$ 인 열린구간으로 덮어 모은 집합 $G_k$ 를 본다. 이 집합은 열린 조밀집합이고 측도가 $2^{-k+1}$ 이하다. $k$ 를 키워 모두 교차하면 측도가 $0$ 인 집합이 남는데, 이 집합은 조밀 열린집합의 가산 교집합이라 Baire 범주 정리의 뜻에서 크다. 여집합은 측도가 직선 전체와 같으면서 제1 범주다.

직선이 측도가 $0$ 인 교집합과 제1 범주인 여집합으로 나뉜다. 덮는 구간의 길이만 조절했으므로 다른 가정이 들어가지 않는다.

# 정의

집합 $E\subseteq\mathbb R$ 가 **조밀한 곳 없는 집합(nowhere dense set)** 이라 함은 $E$ 의 닫힘(closure)이 열린구간을 포함하지 않는 것이다. 조밀한 곳 없는 집합의 가산 합집합에 포함되는 집합을 **제1 범주 집합(meager set, set of first category)** 이라 한다. 한 점, 정수 집합 $\mathbb Z$, 직관 절의 $\mathbb R\setminus G\_k$ 가 조밀한 곳 없는 집합이고, 유리수 집합은 제1 범주 집합이다.

$\mathcal N$ 을 $\mathbb R$ 의 Lebesgue 영집합(null set) 전체, $\mathcal M$ 을 제1 범주 집합 전체라 한다. 둘 다 부분집합과 가산 합집합에 닫혀 있고, 이런 집합족을 **σ 아이디얼(σ-ideal)** 이라 한다. 유리수 집합은 $\mathcal N\cap\mathcal M$ 에 든다.

**측도-범주 분해** 는 $\mathbb R=A\sqcup B$ 이고 $A\in\mathcal N$, $B\in\mathcal M$ 인 분해다. 직관 절의 교집합과 그 여집합이 그 예다.

# 성질

## 분해 정리

측도-범주 분해는 존재한다.[^1]

증명은 구성이다. 유리수를 $q_1,q_2,\dots$ 로 세우고 $k\ge1$ 마다

$$
G_k=\bigcup_{n\ge1}\left(q_n-2^{-n-k},\thinspace q_n+2^{-n-k}\right)
$$

로 둔다. $G_k$ 는 유리수를 포함하는 열린집합이라 조밀하고 측도는 $2^{-k+1}$ 이하다. $A=\bigcap_{k\ge1}G_k$ 로 두면 $A$ 의 측도가 모든 $2^{-k+1}$ 이하이므로 $0$ 이다.

$B=\mathbb R\setminus A=\bigcup_k(\mathbb R\setminus G_k)$ 이고 각 $\mathbb R\setminus G_k$ 는 조밀한 열린집합의 여집합이라 닫혀 있으며 내부가 없다. 따라서 $B$ 는 제1 범주다.

## 두 아이디얼의 비교

분해에서 $A$ 는 측도가 $0$ 이면서 제1 범주가 아니고, $B$ 는 제1 범주이면서 측도가 $0$ 이 아니다. 따라서 $\mathcal N\not\subseteq\mathcal M$ 이고 $\mathcal M\not\subseteq\mathcal N$ 이다.

$\mathcal N\cup\mathcal M$ 이 $\mathbb R$ 의 모든 부분집합을 포함하지는 않는다. 구간 $\lbrack 0,1\rbrack$ 은 측도가 $1$ 이고 Baire 범주 정리로 제1 범주가 아니다. $\mathcal N\cap\mathcal M$ 에 드는 집합은 양쪽 뜻으로 모두 작고, 유리수 집합이 그 예다.

## 쌍대성과 구조

[연속체 가설](continuum-hypothesis.md) 아래에서는 $\mathbb R$ 의 대합(involution) $f$ 가 있어 $E\in\mathcal N$ 인 것과 $f(E)\in\mathcal M$ 인 것이 동치다. 이것이 [Erdős–Sierpiński 쌍대성](erdos-sierpinski-duality.md)이다. 두 아이디얼의 [기수 불변량](cardinal-characteristics.md)은 ZFC(Zermelo–Fraenkel set theory with choice) 에서 서로 다를 수 있으므로, 이런 대합의 존재는 연속체 가설 없이 증명되지 않는다.

[Luzin 집합과 Sierpiński 집합](luzin-sierpinski-sets.md)에서 Luzin 집합은 모든 제1 범주 집합과 셀 수 있게 만나는 비가산 집합이고, Sierpiński 집합은 모든 영집합과 셀 수 있게 만나는 비가산 집합이다. 연속체 가설 아래 두 집합이 존재하고, 위의 대합이 Luzin 집합을 Sierpiński 집합으로 옮긴다.

# 활용

- 정규수(normal number). 거의 모든 [실수](real-numbers.md)는 정규수이지만 정규수 전체는 제1 범주다. 측도의 뜻에서 전형적인 것과 범주의 뜻에서 전형적인 것이 반대로 간다.
- 존재 증명의 선택. Baire 범주 정리로 얻는 대상과 측도가 양수인 집합에서 얻는 대상이 다를 수 있으므로, 어느 뜻의 "거의 모든" 인지 밝혀야 한다. 어디서도 미분 가능하지 않은 연속함수의 존재는 두 방법 모두로 증명된다.
- 확률과 위상의 비교. 확률 $1$ 로 일어나는 사건과 범주의 뜻에서 전형적인 사건이 어긋날 수 있으므로, 무작위 대상의 성질을 위상적 전형성으로 바꿔 말할 수 없다.

[^1]: J. C. Oxtoby, *Measure and Category*, 2판, Springer Graduate Texts in Mathematics 2 (1980), 1 장과 16 장. 분해 정리와 두 아이디얼의 비교가 여기 있다.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Baire 범주 정리](baire-category.md)

## 더 알아보기

- [Erdős–Sierpiński 쌍대성](erdos-sierpinski-duality.md)

#measure_theory #set_theory #topology
