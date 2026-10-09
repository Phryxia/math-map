# Kolmogorov 확장정리

# 개요

Kolmogorov 확장정리는 유한개의 시점에서의 분포만 지정해 확률과정을 만드는 정리다. 지정한 유한차원 분포들이 서로 모순되지 않으면, 그것들을 모두 유한차원 분포로 갖는 측도가 경로 공간 위에 존재하고 하나뿐이다. Brown 운동과 Gauss 과정의 존재가 이 정리로 나온다.

# 직관

Brown 운동을 만들려 한다. 가진 것은 시점마다의 분포다. $B\_t$ 는 평균 $0$, 분산 $t$ 인 정규분포이고, 두 시점 $s\lt t$ 에서 $(B\_s,B\_t)$ 는 공분산이 $\min(s,t)$ 인 이변량 정규분포다. 유한개의 시점을 아무렇게나 골라도 분포를 적을 수 있다.

적어 놓은 분포들은 서로 맞아야 한다. 세 시점 $(t\_1,t\_2,t\_3)$ 의 분포에서 셋째 좌표를 적분해 없애면 $(t\_1,t\_2)$ 의 분포가 나와야 하고, 시점의 순서를 바꾸면 분포도 같이 바뀌어야 한다. Brown 운동의 분포족은 이 두 조건을 만족한다.

문제는 이 분포들을 담는 확률공간이 하나 있는지다. 시점이 유한하면 $\mathbb R^n$ 위의 측도로 끝나지만, 시점이 $\lbrack 0,\infty)$ 전체이면 표본점은 함수 $\omega:\lbrack 0,\infty)\to\mathbb R$ 이고 표본공간은 함수들의 집합 $\mathbb R^{\lbrack 0,\infty)}$ 다. 이 집합 위에 유한차원 분포들과 맞아떨어지는 측도를 세우는 것이 남은 일이다.

좌표 유한개만 보는 집합, 곧 $\lbrace \omega:(\omega(t\_1),\dots,\omega(t\_n))\in A\rbrace$ 꼴의 집합에는 지정한 분포가 값을 준다. 이런 집합들이 대수를 이루고 그 위의 집합함수가 전측도이므로, [Carathéodory 확장정리](caratheodory-extension.md)가 측도를 준다. 정합성 조건은 이 집합함수가 잘 정의되게 하는 조건이다.

# 정의

$T$ 를 첨자 집합이라 한다. $T$ 의 유한 부분집합 $F=\lbrace t\_1,\dots,t\_n\rbrace$ 마다 $\mathbb R^F$ 위의 확률측도 $\mu\_F$ 가 주어졌다고 한다. 이 족 $\lbrace \mu\_F\rbrace$ 가 다음을 만족하면 **정합적**이다.

$$
F\subseteq G \implies \mu\_G\circ\pi\_{G,F}^{-1}=\mu\_F
$$

여기서 $\pi\_{G,F}:\mathbb R^G\to\mathbb R^F$ 는 $F$ 의 좌표만 남기는 사영이다. 곧 큰 쪽의 분포를 작은 쪽으로 밀면 작은 쪽의 분포와 같다.

곱공간 $\mathbb R^T$ 위의 **통조림 집합**은 유한개의 좌표로만 조건을 주는 집합이다.

$$
C=\lbrace \omega\in\mathbb R^T:(\omega(t\_1),\dots,\omega(t\_n))\in A\rbrace,\qquad A\in\mathcal B(\mathbb R^n)
$$

통조림 집합 전체가 생성하는 $\sigma$ 대수를 $\mathcal B(\mathbb R^T)$ 라 쓴다. 이것은 각 좌표사상 $\omega\mapsto\omega(t)$ 를 모두 가측으로 만드는 가장 작은 $\sigma$ 대수다.

# 성질

## 정리

**정리(Kolmogorov).** $\lbrace \mu\_F\rbrace$ 가 정합적이면 $(\mathbb R^T,\mathcal B(\mathbb R^T))$ 위의 확률측도 $\mu$ 가 유일하게 존재해 모든 유한 $F$ 에 대해 $\mu\circ\pi\_F^{-1}=\mu\_F$ 다.[^1]

증명의 요지. 통조림 집합들은 대수를 이룬다. 두 통조림 집합의 좌표를 합쳐 공통의 유한 집합에서 보면 유한 곱공간의 Borel 집합들이고, 그 모임이 유한 합집합과 차집합에 닫혀 있다. 이 대수 위에 $\mu\_0(C)=\mu\_F(A)$ 로 정의하면 정합성 때문에 $C$ 를 적는 유한 집합을 어떻게 택해도 값이 같아 잘 정의된다.

$\mu\_0$ 가 전측도임을 보이는 데 유한차원 측도의 정칙성을 쓴다. 대수 안에서 $C\_n\downarrow\varnothing$ 이고 $\mu\_0(C\_n)\ge\varepsilon$ 이라 가정하면, 각 $C\_n$ 안에 측도가 $\varepsilon/2$ 이상인 콤팩트 통조림 집합 $K\_n$ 을 잡을 수 있다. $\mathbb R^{t}$ 들의 곱에서 Tychonoff 정리로 $\bigcap K\_n\ne\varnothing$ 이므로 $\bigcap C\_n\ne\varnothing$ 이고 가정에 어긋난다. 따라서 $\mu\_0$ 는 대수 위에서 가산 가법적이다.

Carathéodory 확장이 $\mathcal B(\mathbb R^T)$ 위의 측도를 주고, 유일성은 통조림 집합이 $\pi$ 계이므로 Dynkin 의 $\pi\text{-}\lambda$ 정리에서 나온다.

## 무한 곱측도

$\mu\_F$ 를 주어진 측도들의 곱으로 택하면 정합성이 자동으로 성립한다. 이 경우의 결론이 임의 개의 확률측도의 무한 곱측도가 존재한다는 것이고, [곱측도](product-measure.md)의 무한 곱이 특수한 경우다. 독립인 확률변수열을 아무 분포로나 만들 수 있는 근거가 이것이다.

## 연속 판본

$\mathcal B(\mathbb R^T)$ 는 통조림 집합이 생성하므로, 그 안의 집합은 셀 수 있는 좌표로만 조건을 준다. $T$ 가 비가산이면 연속함수 전체의 집합은 이 $\sigma$ 대수에 들지 않는다. 경로의 연속성은 비가산 개의 좌표를 한꺼번에 보는 조건이기 때문이다.

따라서 이 정리는 연속 판본의 존재를 주지 못한다. 유한차원 분포에 증분의 적률 조건을 더해 연속 판본을 얻는 것이 Kolmogorov–Chentsov 판정이고, [Brown 운동](brownian-motion.md)의 구성이 그 두 단계를 밟는다.

## Ionescu–Tulcea 정리와의 대비

정합적인 족 대신 초기분포와 전이핵의 열이 주어진 경우에도 곱공간 위의 측도가 존재한다. 이것이 Ionescu–Tulcea 정리이고, 상태공간이 거리공간일 필요 없이 가측공간이면 된다. Kolmogorov 쪽은 유한차원 측도의 정칙성을 쓰므로 상태공간에 위상 조건이 필요하고, Polish 공간에서 성립한다.

# 활용

## Brown 운동의 존재

공분산 $\min(s,t)$ 로 유한차원 정규분포를 지정하면 정합적이고, 정리가 $\mathbb R^{\lbrack 0,\infty)}$ 위의 측도를 준다. 그 뒤 Kolmogorov–Chentsov 판정으로 연속 판본을 고르면 Brown 운동이 된다. 급수로 직접 구성하는 Lévy–Ciesielski 방법은 이 정리를 쓰지 않고 연속성까지 한 번에 얻는다.

## Gauss 과정

평균함수 $m$ 과 대칭 양의 준정부호 핵 $k$ 를 지정하면 각 유한 집합에서 다변량 정규분포가 정해지고, 주변분포가 다시 정규분포이므로 정합적이다. 정리에 따라 그 평균과 공분산을 갖는 [Gauss 과정](gaussian-processes.md)이 존재한다.

## Markov 연쇄의 무한 경로

초기분포와 전이행렬에서 유한 시점의 결합분포를 곱으로 적으면 정합적이다. [Markov 연쇄](markov-chains.md)의 경로 공간 위의 측도가 이렇게 세워지고, 꼬리사건의 확률을 말할 수 있게 된다. 이 경우는 Ionescu–Tulcea 정리로도 얻는다.

## 무한 교환가능열

de Finetti 정리는 교환가능한 무한열을 다루므로 그 열이 사는 확률공간이 먼저 있어야 한다. 교환가능성에서 오는 유한차원 분포족이 정합적이므로 이 정리가 그 공간을 준다.

[^1]: Rick Durrett, *Probability: Theory and Examples*, 5th ed., Cambridge University Press, 2019, 2.1절과 A.3절 (정합성 조건, 통조림 집합의 대수, Kolmogorov 확장정리의 증명).

# 연관 문서

## 선수지식

- [곱측도](product-measure.md)
- [확률변수](random-variables.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #analysis
