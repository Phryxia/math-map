# Dynkin 계

# 개요

Dynkin 의 $\pi\text{-}\lambda$ 정리는 쉬운 집합들에서 확인한 성질을 그들이 생성하는 $\sigma$ 대수 전체로 넓히는 정리다. 교집합에 닫힌 모임에서 성질이 성립하고 그 성질을 가진 집합들이 여집합과 증가 합집합에 닫혀 있으면, 생성된 $\sigma$ 대수의 모든 집합에서 성립한다. 두 측도의 일치와 확률변수의 독립을 판정하는 데 쓴다.

# 직관

$\mathbb R$ 의 두 확률측도가 모든 반직선 $(-\infty,x\rbrack$ 에서 같은 값을 갖는다고 한다. 두 분포함수가 같은 경우다. 모든 Borel 집합에서도 같은지 보려면 반직선에서 여집합과 가산 합집합을 거쳐 올라가야 한다. 두 측도가 일치하는 집합들의 모임 $\mathcal D$ 에서 여집합은 $\mu(E^c)=1-\mu(E)$ 로, 서로소 가산 합집합은 가법성으로 넘어간다. 막히는 것은 서로소가 아닌 합집합이다. $\mu(E\cup F)=\mu(E)+\mu(F)-\mu(E\cap F)$ 이므로 $E\cap F$ 에서의 일치가 먼저 있어야 하는데 $\mathcal D$ 가 교집합에 닫혀 있다는 보장이 없다.

교집합이 막았으니 교집합은 출발 모임에서 받는다. 반직선들의 모임은 교집합에 닫혀 있다. 이 정리는 그것으로 충분하다고 말한다. 교집합에 닫힌 모임을 품고 여집합과 증가 합집합에 닫힌 모임은 그 모임이 생성하는 $\sigma$ 대수를 전부 품는다.

# 정의

$X$ 의 부분집합들의 모임 $\mathcal P$ 가 유한 교집합에 닫혀 있으면 **$\pi$ 계**다.

모임 $\mathcal L$ 이 다음 셋을 만족하면 **$\lambda$ 계**다. Dynkin 계라고도 한다.

- $X\in\mathcal L$
- $A,B\in\mathcal L$ 이고 $A\subseteq B$ 이면 $B\setminus A\in\mathcal L$
- $A\_1\subseteq A\_2\subseteq\cdots$ 가 모두 $\mathcal L$ 에 들면 $\bigcup\_n A\_n\in\mathcal L$

$\sigma$ 대수는 $\pi$ 계이면서 $\lambda$ 계다. 역도 성립한다. $\pi$ 계이면서 $\lambda$ 계인 모임은 $\sigma$ 대수다. 유한 교집합과 차집합에서 유한 합집합이 나오고, 증가 합집합 조건이 가산 합집합을 준다.

# 성질

## 정리

**정리(Dynkin).** $\mathcal P$ 가 $\pi$ 계이고 $\mathcal L$ 이 $\mathcal P$ 를 품는 $\lambda$ 계이면 $\sigma(\mathcal P)\subseteq\mathcal L$ 이다.[^1]

증명의 요지. $\mathcal P$ 를 품는 가장 작은 $\lambda$ 계를 $\mathcal D$ 라 한다. $\mathcal D$ 가 $\pi$ 계임을 보이면 위의 역에 따라 $\mathcal D$ 가 $\sigma$ 대수이므로 $\sigma(\mathcal P)\subseteq\mathcal D\subseteq\mathcal L$ 이 된다.

$\pi$ 계임을 두 단계로 얻는다. $A\in\mathcal P$ 에 대해 $\mathcal D\_A=\lbrace B\in\mathcal D:A\cap B\in\mathcal D\rbrace$ 라 두면 $\mathcal D\_A$ 가 $\lambda$ 계이고, $\mathcal P$ 가 $\pi$ 계이므로 $\mathcal P\subseteq\mathcal D\_A$ 다. $\mathcal D$ 의 최소성에서 $\mathcal D\_A=\mathcal D$ 다. 다음으로 $B\in\mathcal D$ 를 고정하고 $\mathcal D\_B$ 를 같은 꼴로 두면, 앞 단계가 $\mathcal P\subseteq\mathcal D\_B$ 를 주므로 다시 $\mathcal D\_B=\mathcal D$ 다. 곧 $\mathcal D$ 의 두 원소의 교집합이 $\mathcal D$ 에 든다.

## 측도의 일치

**따름정리.** $\mu,\nu$ 가 $\sigma(\mathcal P)$ 위의 측도이고 $\mathcal P$ 가 $\pi$ 계일 때, $\mathcal P$ 에서 두 측도가 일치하고 $X$ 를 $\mathcal P$ 의 원소들의 증가열로 덮으면서 그 위에서 측도가 유한하면 $\mu=\nu$ 다.

증명의 요지. $\mu(X)=\nu(X)\lt\infty$ 인 경우에 $\mathcal D=\lbrace E:\mu(E)=\nu(E)\rbrace$ 가 $\lambda$ 계임을 확인한다. 차집합 조건은 유한성에서 $\mu(B\setminus A)=\mu(B)-\mu(A)$ 가 성립하기 때문이고, 증가 합집합 조건은 측도의 연속성이다. 정리를 적용하면 $\sigma(\mathcal P)\subseteq\mathcal D$ 다. 일반 경우는 덮는 증가열의 각 조각에서 이 논법을 쓰고 극한을 보낸다.

유한성 조건이 필요하다. 차집합에서 측도를 빼는 계산이 $\infty-\infty$ 가 되면 $\mathcal D$ 가 $\lambda$ 계가 아니다.

## 독립성 판정

**따름정리.** $\mathcal P\_1,\mathcal P\_2$ 가 $\pi$ 계이고 $A\in\mathcal P\_1$, $B\in\mathcal P\_2$ 마다 $P(A\cap B)=P(A)P(B)$ 이면 $\sigma(\mathcal P\_1)$ 과 $\sigma(\mathcal P\_2)$ 가 독립이다.

증명의 요지. $B$ 를 고정하고 $\mathcal D=\lbrace E:P(E\cap B)=P(E)P(B)\rbrace$ 가 $\lambda$ 계임을 확인한 뒤 정리를 적용해 $\sigma(\mathcal P\_1)\subseteq\mathcal D$ 를 얻는다. 그 결과를 쓰고 $\mathcal P\_2$ 쪽에 같은 논법을 되풀이한다.

두 확률변수가 독립인지 분포함수만으로 판정할 수 있는 근거가 이것이다. $\lbrace X\le x\rbrace$ 꼴의 집합들이 $\pi$ 계이고 $\sigma(X)$ 를 생성한다.

## 단조류 정리와의 관계

대수를 품는 모임이 증가 합집합과 감소 교집합에 닫혀 있으면 생성된 $\sigma$ 대수를 품는다는 것이 단조류 정리다. 출발 모임이 대수여야 하는 대신 여집합 조건이 필요 없다. $\pi$ 계는 대수보다 약한 조건이라 구간이나 직사각형처럼 합집합에 닫히지 않은 모임에 바로 쓸 수 있다.

# 활용

## 측도의 유일성

[Carathéodory 확장정리](caratheodory-extension.md)의 유일성이 이 정리로 증명된다. 대수 위의 전측도를 확장한 두 측도가 일치하는 집합들이 $\lambda$ 계이고 그 대수가 $\pi$ 계이기 때문이다. [곱측도](product-measure.md)의 유일성과 [Kolmogorov 확장정리](kolmogorov-extension.md)의 유일성도 같은 논법이다.

## 분포함수와 분포의 대응

[확률변수](random-variables.md)의 분포가 분포함수로 결정된다. 반직선들이 $\pi$ 계이고 Borel $\sigma$ 대수를 생성하므로, 두 분포가 모든 반직선에서 같으면 모든 Borel 집합에서 같다.

## 가측성 논증의 표준 수법

어떤 성질이 모든 가측집합에서 성립함을 보일 때, 그 성질을 가진 집합들이 $\lambda$ 계임을 확인하고 쉬운 생성원에서만 성질을 직접 검사한다. [Fubini–Tonelli 정리](fubini-tonelli.md)에서 단면의 가측성을 보이는 단계와 [조건부 기댓값](conditional-expectation.md)의 성질을 지시함수에서 일반 함수로 넓히는 단계가 이 꼴이다.

[^1]: Rick Durrett, *Probability: Theory and Examples*, 5th ed., Cambridge University Press, 2019, A.1절 ($\pi$ 계와 $\lambda$ 계, Dynkin 정리와 측도의 일치, 독립성 판정).

# 연관 문서

## 선수지식

- [측도](measure.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #probability #set_theory
