# Erdős–Sierpiński 쌍대성

# 개요

Erdős–Sierpiński 쌍대성은 [연속체 가설](continuum-hypothesis.md) 아래에서 실직선의 영집합과 제1범주 집합을 서로 맞바꾸는 전단사가 있다는 정리다. 그 전단사는 자기 자신의 역함수로 잡을 수 있다.

따라서 영집합과 제1범주 집합만으로 쓴 진술은 두 낱말을 맞바꿔도 성립한다. 이 원리가 [기수 불변량](cardinal-characteristics.md)의 두 아이디얼이 같은 모양으로 놓이는 이유를 설명한다.

# 직관

실직선의 부분집합 가운데 크기가 없다고 할 만한 것이 두 갈래다. 길이의 합을 얼마든지 작게 하여 덮을 수 있는 영집합이 하나이고, 어디에도 빽빽하지 않은 집합을 셀 수 있는 개수만큼 모은 제1범주 집합이 다른 하나다. 두 갈래를 두고 물을 수 있는 것이 같은 모양이므로 답도 같은지 본다.

유리수를 $q\_1, q\_2, \dots$ 로 줄 세우고 $q\_n$ 을 길이 $2^{-n}/k$ 인 구간으로 덮어 그 합집합을 $U\_k$ 라 한다. $A = \bigcap\_k U\_k$ 는 측도가 $0$ 이고, 여집합 $B$ 는 빽빽한 열린집합 $U\_k$ 의 여집합을 모은 것이라 제1범주다. 실직선이 영집합 하나와 제1범주 집합 하나로 갈린다.

두 갈래가 실직선을 반씩 가르므로 한쪽을 다른 쪽으로 옮기는 함수를 찾는다. $A$ 를 $B$ 로, $B$ 를 $A$ 로 보내는 전단사가 있으면 영집합에 대한 물음이 제1범주 집합에 대한 물음으로 바뀐다. 연속체 가설을 쓰면 두 갈래를 각각 $\aleph\_1$ 개 조각으로 줄 세우고 조각끼리 맞춰 그런 전단사를 만든다.

# 정의

## 두 아이디얼

Lebesgue 측도가 $0$ 인 집합의 족을 $\mathcal N$, 어디에서도 빽빽하지 않은 집합을 셀 수 있는 개수만큼 합친 집합, 곧 제1범주 집합의 족을 $\mathcal M$ 이라 한다. 둘 다 $\sigma$ 아이디얼이고 실직선 자신을 담지 않는다.[^1]

## 쌍대 사상

전단사 $f:\mathbb R\to\mathbb R$ 이 **쌍대 사상**이라 함은 모든 $A\subseteq\mathbb R$ 에 대해 $A\in\mathcal N$ 과 $f(A)\in\mathcal M$ 이 동치이고 $A\in\mathcal M$ 과 $f(A)\in\mathcal N$ 이 동치인 것이다.

# 성질

## 쌍대성 정리

**정리**(Erdős–Sierpiński)**.** 연속체 가설 아래에서 $f=f^{-1}$ 인 쌍대 사상 $f$ 가 존재한다.

증명의 요지는 두 아이디얼의 구조가 연속체 가설 아래에서 같다는 것이다. 직관 절의 분해 $\mathbb R=A\sqcup B$ 를 초한귀납으로 되풀이하면 $\mathcal N$ 의 기저와 $\mathcal M$ 의 기저를 각각 길이 $\omega\_1$ 인 증가열로 줄 세울 수 있고, 두 열의 연속한 항의 차를 크기 $\aleph\_1$ 인 조각으로 맞춰 대응시킨다. 조각마다 전단사를 잡고 대칭이 되도록 합치면 대합이 나온다. ∎

## 쌍대성 원리

**따름정리.** $\mathcal N$ 과 $\mathcal M$ 만으로 쓴 진술 $P$ 가 연속체 가설 아래에서 참이면, 두 족을 맞바꾼 진술도 연속체 가설 아래에서 참이다.

$f$ 로 옮기면 $P$ 의 증인이 맞바꾼 진술의 증인이 된다.

## 쌍대가 아닌 두 부등식

Cichoń 도표의 부등식 $\mathrm{add}(\mathcal N)\le\mathrm{add}(\mathcal M)$ 와 $\mathrm{cof}(\mathcal M)\le\mathrm{cof}(\mathcal N)$ 은 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)에서 증명되고 맞바꾼 진술은 ZFC 에서 증명되지 않는다. 쌍대성 원리가 연속체 가설을 가정하므로 충돌은 없다. 연속체 가설 아래에서는 여덟 불변량이 모두 $\aleph\_1$ 이고 부등식이 등식이 된다.

## Luzin 집합과 Sierpiński 집합

크기가 비가산이고 모든 제1범주 집합과의 교집합이 가산인 집합이 [Luzin 집합](luzin-sierpinski-sets.md)이고, 모든 영집합과의 교집합이 가산인 집합이 Sierpiński 집합이다. 연속체 가설 아래에서 둘 다 존재하고 쌍대 사상이 한쪽을 다른 쪽으로 보낸다.

# 활용

- 측도에서 증명한 명제를 [Baire 범주](baire-category.md) 쪽으로 옮긴다. 옮긴 진술이 연속체 가설에 기대는지 원래 증명이 ZFC 에서 되는지 구별해야 한다.
- 기수 불변량의 도표에서 $\mathcal N$ 쪽과 $\mathcal M$ 쪽이 대칭인 자리에 놓이는 것과, 그 대칭이 ZFC 에서 깨지는 두 자리를 함께 설명한다.
- 반례를 옮긴다. 제1범주이면서 측도가 양인 집합의 구성을 쌍대 사상으로 보내면 영집합이면서 제2범주인 집합이 나온다.

[^1]: John C. Oxtoby, *Measure and Category*, Springer Graduate Texts in Mathematics 2 (1980), 19장. 쌍대성 정리의 증명과 Luzin 집합, Sierpiński 집합의 구성이 이 장에 있다.

# 연관 문서

## 선수지식

- [기수 불변량](cardinal-characteristics.md)

## 더 알아보기

- [Luzin 집합과 Sierpiński 집합](luzin-sierpinski-sets.md)

#set_theory #measure_theory #logic
