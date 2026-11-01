# 필터와 그물

# 개요

**그물(net)** 과 **필터(filter)** 는 수열로는 수렴을 다룰 수 없는 공간에서 수열 대신 쓰는 수렴의 도구다. 거리공간에서는 점 $x$ 가 집합 $A$ 의 폐포에 드는 것과 $A$ 의 점으로 된 수열이 $x$ 로 수렴하는 것이 같다. 일반 [위상 공간](topology.md)에서는 폐포에 드는 점인데도 그 점으로 수렴하는 수열이 없는 경우가 있어, 수열로는 폐포와 연속성을 판정할 수 없다. 그물은 수열의 번호를 자연수보다 큰 순서 집합으로 바꾸고 필터는 수렴을 집합족으로 적어, 일반 위상 공간에서도 수렴으로 폐포, 연속성, [콤팩트성](compactness.md)을 판정한다.

# 직관

거리공간에서는 닫힌집합을 수열로 판정한다. $A$ 가 닫혀 있는 것과 $A$ 의 점으로 된 수렴하는 수열의 극한이 모두 $A$ 에 드는 것이 동치다. 일반 위상 공간에서도 수열로 판정되는지 묻는다.

$X=\mathbb R$ 에 공집합과 여집합이 셀 수 있는 집합들을 열린집합으로 주자. 수열 $x_1,x_2,\dots$ 가 $x$ 로 수렴한다고 하자. 항 가운데 $x$ 와 다른 것들을 모은 집합은 셀 수 있으므로 그 여집합 $U$ 는 열린집합이고 $x$ 를 담는다. 수렴의 정의로 어떤 $N$ 뒤의 항이 모두 $U$ 에 들고, $U$ 에 든 항은 $x$ 와 같다. 이 위상에서 수렴하는 수열은 어느 항 뒤로 한 값을 되풀이하는 것뿐이다.

$A=\lbrack 0,1\rbrack$ 을 보면 $A$ 의 점으로 된 수렴 수열의 극한이 전부 $A$ 안에 있다. 그런데 $A$ 는 닫힌집합이 아니다. $A$ 가 닫혀 있으려면 여집합이 열려야 하고 그러려면 $A$ 가 셀 수 있어야 한다. 점 $2$ 를 담은 열린집합은 여집합이 셀 수 있으므로 셀 수 없는 집합 $A$ 와 반드시 만나고, 따라서 $2$ 는 $A$ 의 폐포에 든다. 수열로는 $2$ 를 찾을 수 없다.

수열의 첨자는 $1,2,3,\dots$ 으로만 늘어 셀 수 있는 만큼의 근방밖에 지나가지 않는다. 첨자를 $2$ 의 근방 전체로 바꾸고 포함 관계를 거꾸로 세워 큰 근방을 작은 첨자로 삼는다. 근방 $U$ 마다 $U\cap A$ 의 점 하나를 $x_U$ 로 고르면, 근방 $V$ 를 하나 주었을 때 $U\subseteq V$ 인 첨자부터는 $x_U\in V$ 이므로 이 모임이 $2$ 로 수렴한다. 첨자집합을 이렇게 바꾼 것을 그물이라 하고, 항을 고르는 대신 근방들의 모임만 남긴 것을 필터라 한다.

# 정의

## 유향집합과 그물

[부분순서](partial-orders.md) 집합 $(D,\le)$ 가운데 임의의 $a,b\in D$ 에 대해 $a\le c$ 이고 $b\le c$ 인 $c\in D$ 가 있는 것을 **유향집합(directed set)** 이라 한다. 전순서일 필요는 없다. 위상 공간 $X$ 의 **그물** 은 유향집합 $D$ 에서 $X$ 로 가는 함수이고 $(x_d)\_{d\in D}$ 로 쓴다.

그물 $(x_d)$ 가 $x$ 로 **수렴(converge)** 한다는 것은 $x$ 의 모든 근방 $U$ 에 대해 $d_0\in D$ 가 있어 $d\ge d_0$ 인 모든 $d$ 에서 $x_d\in U$ 라는 뜻이고 $x_d\to x$ 로 쓴다. $x$ 의 모든 근방 $U$ 와 모든 $d_0$ 에 대해 $d\ge d_0$ 이면서 $x_d\in U$ 인 $d$ 가 있으면 $x$ 를 그물 $(x_d)$ 의 **집적점(cluster point)** 이라 한다.

- $(\mathbb N,\le)$ 은 유향집합이고, 이 첨자의 그물은 수열이며 수렴도 수열의 수렴이다.
- 직관에서 점 $2$ 의 근방 전체 $\mathcal N_2$ 에 $U\le V\iff V\subseteq U$ 를 주면 유향집합이다. 두 근방 $U,V$ 에 대해 $U\cap V$ 가 둘보다 크다. 그물 $(x_U)\_{U\in\mathcal N_2}$ 는 $2$ 로 수렴한다.
- 수열 $(-1)^n$ 은 수렴하지 않고 $1$ 과 $-1$ 이 집적점이다.

## 부분그물

유향집합 $E$ 에서 $D$ 로 가는 함수 $h$ 가 단조이고 치역이 $D$ 에서 공종(cofinal)이면, 곧 모든 $d\in D$ 에 대해 $h(e)\ge d$ 인 $e\in E$ 가 있으면 $(x\_{h(e)})\_{e\in E}$ 를 $(x_d)$ 의 **부분그물(subnet)** 이라 한다.

- $h(n)=2n$ 으로 얻은 $((-1)^{2n})$ 은 $(-1)^n$ 의 부분그물이고 $1$ 로 수렴한다. 부분수열은 부분그물이다.

## 필터

$X$ 위의 **필터** 는 공집합이 아닌 $\mathcal F\subseteq\mathcal P(X)$ 로서 다음 세 조건을 만족하는 것이다.

- $\varnothing\notin\mathcal F$
- $A,B\in\mathcal F$ 이면 $A\cap B\in\mathcal F$
- $A\in\mathcal F$ 이고 $A\subseteq B\subseteq X$ 이면 $B\in\mathcal F$

공집합을 담지 않고 두 원소의 교집합이 어떤 원소를 포함하는 집합족 $\mathcal B$ 에 대해, $\mathcal B$ 의 원소를 포함하는 집합 전체는 필터이고 $\mathcal B$ 를 그 필터의 **필터 기저(filter base)** 라 한다. 필터 $\mathcal F$ 가 $x$ 의 근방을 전부 담으면 $\mathcal F$ 가 $x$ 로 **수렴** 한다고 한다.

- 점 $x$ 의 근방 전체 $\mathcal N_x$ 는 필터이고 $x$ 로 수렴한다. 이것을 근방필터(neighborhood filter)라 한다. 직관에서 $A$ 와의 교집합 $\lbrace U\cap A:U\in\mathcal N_2\rbrace$ 는 공집합을 담지 않으므로 $A$ 위의 필터 기저다.
- $\mathbb N$ 에서 여집합이 유한한 집합 전체는 필터이고 Fréchet 필터(Fréchet filter)라 한다.

## 초필터

포함 관계에서 극대인 필터를 **초필터(ultrafilter)** 라 한다. 한 점 $x$ 에 대해 $\mathcal F_x=\lbrace A\subseteq X:x\in A\rbrace$ 는 초필터이고 **주 초필터(principal ultrafilter)** 라 한다.

- $\mathcal F_x$ 를 포함하는 필터는 $\lbrace x\rbrace$ 를 담으므로 $x$ 를 담지 않는 집합을 담을 수 없다. 따라서 $\mathcal F_x$ 는 극대다.
- Fréchet 필터는 초필터가 아니다. 짝수 집합도 홀수 집합도 담지 않으므로, 짝수 집합을 더해 더 큰 필터를 만들 수 있다.

# 성질

## 초필터의 판정

$\mathcal F$ 가 초필터인 것과 모든 $A\subseteq X$ 에 대해 $A\in\mathcal F$ 이거나 $X\setminus A\in\mathcal F$ 인 것이 동치다. $A$ 와 $X\setminus A$ 가 모두 $\mathcal F$ 에 들지 않으면 $A$ 와 $\mathcal F$ 의 원소들의 교집합으로 더 큰 필터를 만들 수 있고, 거꾸로 이 조건을 만족하는 필터에는 더할 집합이 없다. 주 초필터가 아닌 초필터는 유한집합을 하나도 담지 않는다. 유한집합 $F$ 를 담으면 $F$ 의 점 가운데 하나 $x$ 에 대해 $\lbrace x\rbrace$ 를 담게 되어 주 초필터가 된다.

## 그물과 필터의 대응

그물 $(x_d)\_{d\in D}$ 에서 꼬리 $T\_{d_0}=\lbrace x_d:d\ge d_0\rbrace$ 들은 필터 기저이므로 필터 $\mathcal F$ 를 생성한다. 필터 $\mathcal F$ 에서 $D=\lbrace (x,A):A\in\mathcal F,\thinspace x\in A\rbrace$ 에 $(x,A)\le(y,B)\iff B\subseteq A$ 를 주면 유향집합이고 $(x,A)\mapsto x$ 가 그물이다.

두 구성 모두 수렴을 보존한다. 곧 $(x_d)\to x$ 와 생성된 필터가 $x$ 로 수렴하는 것이 동치이고, $\mathcal F\to x$ 와 대응하는 그물이 $x$ 로 수렴하는 것이 동치다. 부분그물에는 더 큰 필터가 대응하고, 초필터에는 보편 그물(universal net), 곧 모든 $A\subseteq X$ 에 대해 꼬리가 $A$ 나 $X\setminus A$ 에 드는 그물이 대응한다.

## 폐포

$A\subseteq X$ 와 $x\in X$ 에 대해 $x\in\overline A$ 와 $A$ 의 점들로 된 그물이 $x$ 로 수렴하는 것이 동치다.

$x\in\overline A$ 이면 $x$ 의 모든 근방이 $A$ 와 만난다. 근방 전체 $\mathcal N_x$ 에 포함의 역순을 주면 유향집합이고, 근방 $U$ 마다 $U\cap A$ 에서 점 $x_U$ 를 고르면 $x_U\to x$ 다. 거꾸로 $A$ 의 그물이 $x$ 로 수렴하면 $x$ 의 모든 근방이 그 그물의 꼬리를 담으므로 $A$ 와 만난다.

따름정리로, $A$ 가 닫힌집합인 것과 $A$ 의 점들로 된 그물의 극한이 모두 $A$ 에 드는 것이 동치다.

## 연속성

$f:X\to Y$ 가 $x$ 에서 연속인 것과 $x_d\to x$ 인 모든 그물에 대해 $f(x_d)\to f(x)$ 인 것이 동치다.

연속이면 $f(x)$ 의 근방 $V$ 의 원상이 $x$ 의 근방이므로 꼬리가 그 안에 든다. 거꾸로 $f$ 가 $x$ 에서 연속이 아니면 $f^{-1}(V)$ 가 근방이 아닌 $V$ 가 있고, 근방 $U$ 마다 $U\setminus f^{-1}(V)$ 의 점을 골라 $x$ 로 수렴하면서 상이 $V$ 에 들지 않는 그물을 얻는다.

## Hausdorff 성질

$X$ 가 Hausdorff 인 것과 $X$ 의 모든 그물의 극한이 하나뿐인 것이 동치다.

Hausdorff 이면 서로 떨어진 두 근방이 꼬리를 모두 담을 수 없다. 거꾸로 $x\ne y$ 를 분리하는 근방 쌍이 없으면 $\mathcal N_x$ 와 $\mathcal N_y$ 의 쌍을 첨자로 하는 그물이 $x$ 와 $y$ 로 함께 수렴한다.

## 콤팩트성

다음 셋이 동치다.

- $X$ 가 콤팩트다
- $X$ 의 모든 그물에 수렴하는 부분그물이 있다
- $X$ 의 모든 초필터가 수렴한다

초필터 판본으로 [Tychonoff 정리](tychonoff-theorem.md)의 증명이 짧아진다. 곱공간 $\prod_i X_i$ 의 초필터 $\mathcal F$ 에서 각 좌표로의 사영이 $X_i$ 위의 초필터이므로 어떤 $x_i$ 로 수렴하고, 곱위상의 기저가 유한 개 좌표만 제약하므로 $\mathcal F$ 가 $(x_i)$ 로 수렴한다.

## 초필터 보조정리

$X$ 위의 모든 필터는 어떤 초필터에 포함된다. 이것이 초필터 보조정리(ultrafilter lemma)다.

주어진 필터를 포함하는 필터들의 모임에 포함 관계를 주면 사슬의 합집합이 다시 필터이므로 Zorn 보조정리(Zorn's lemma)로 극대원이 있다. 이 명제는 [선택공리](axiom-of-choice.md)에서 따라 나오지만 선택공리와 동치는 아니다.[^1] Fréchet 필터를 포함하는 초필터는 주 초필터가 아니므로, 주가 아닌 초필터의 존재도 이 보조정리로 얻는다.

# 활용

- Tychonoff 정리의 증명에서 초필터의 수렴을 쓴다. [분리공리](separation-axioms.md)를 다룰 때도 극대 필터로 같은 논증을 쓴다.
- 구조들의 곱을 초필터로 나눈 [초곱](ultraproducts.md)은 1차 논리의 문장을 보존한다. 주 초필터로 나누면 한 성분의 구조가 그대로 나오므로 주가 아닌 초필터를 쓴다.
- $\mathbb N$ 위의 주가 아닌 초필터로 [실수](real-numbers.md)열을 나눈 체는 무한소를 갖는 순서체이고, [비표준 해석학](nonstandard-analysis.md)이 이 체를 쓴다.
- 분할을 세분 관계로 순서 지은 유향집합에서 Riemann 합은 그물이고, [Riemann 적분](riemann-integral.md)이 그 극한이다. 분할들은 세분 관계로 전순서가 아니므로 수열이 아니라 그물로 적는다.
- 이산공간 $X$ 위의 초필터 전체에 위상을 주면 $X$ 의 [Stone–Čech 콤팩트화](stone-cech-compactification.md)가 된다. 주 초필터가 $X$ 의 점에, 나머지가 새로 붙는 점에 대응한다.
- 수열만으로 폐포가 판정되는 공간을 수열 공간(sequential space)이라 한다. 각 점이 셀 수 있는 근방 기저를 갖는 제1 가산 공간(first-countable space)은 수열 공간이고, 거리공간이 그 예다.

[^1]: J. D. Halpern, "The independence of the axiom of choice from the Boolean prime ideal theorem", Fundamenta Mathematicae 55 (1964), https://doi.org/10.4064/fm-55-1-57-66

# 연관 문서

## 선수지식

- [위상 공간](topology.md)
- [부분순서](partial-orders.md)

## 더 알아보기

- [초곱](ultraproducts.md)

#topology #set_theory #order_theory #logic
