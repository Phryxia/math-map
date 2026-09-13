# 동치관계와 동치류

동치관계는 어떤 차이를 무시할 것인지 정하고, 구별하지 않을 대상들을 같은 부류로 묶는다.

## 정의

A를 집합, R을 A 위의 이항관계라 하자. 이항관계는 A의 원소 두 개를 순서 있게 고른 쌍들의 집합이다. x, y가 R로 관계됨을 다음처럼 쓴다.

$$
x\mathrel{R}y\iff(x,y)\in R
$$

A의 임의의 원소 x, y, z에 대해 다음 세 조건을 만족하면 R은 동치관계다.

$$
\begin{aligned}
&x\mathrel{R}x &&\text{반사성}\\
&x\mathrel{R}y\Rightarrow y\mathrel{R}x &&\text{대칭성}\\
&(x\mathrel{R}y\text{ and }y\mathrel{R}z)\Rightarrow x\mathrel{R}z &&\text{추이성}
\end{aligned}
$$

x의 동치류는 x와 관계된 모든 원소의 집합이다. 몫집합은 서로 다른 동치류들을 원소로 갖는다.

$$
[x]=\{y\in A:x\mathrel{R}y\},\qquad A/R=\{[x]:x\in A\}
$$

## 성질

두 동치류는 같거나 서로소다. 실제로 공통 원소가 있으면 대칭성과 추이성으로 어느 한쪽의 원소가 다른 쪽에도 들어간다. 반사성 때문에 모든 원소는 자기 동치류에 속한다. 따라서 동치류들은 A의 분할을 이루다.

예를 들어 정수를 3으로 나눈 나머지가 같을 때 동치라고 하자. 동치류는 나머지 0, 1, 2에 해당하는 세 개다. 무한히 많은 정수가 세 개의 부류로 정리된다.

동치류 위에 계산을 정의하려면 대표원을 바꿔도 결과의 동치류가 같아야 한다. 나머지에 따른 정수 덧셈은 이 조건을 만족한다. 반면 대표원 자체의 절댓값을 동치류의 값으로 삼으면 0과 3에서 값이 달라 잘 정의되지 않는다.

## 활용

분수의 서로 다른 표기, 같은 구조를 갖는 그래프, 나머지 계산, 상태 축약을 다룬다. 어떤 정보를 버려도 후속 계산이 유지되는지 확인하는 기준이 된다.

서로 비슷하다는 말만으로는 동치관계가 되지 않는다. 실수 두 개의 거리가 1보다 작다는 관계는 반사적이고 대칭적이지만 추이적이지 않다. 0, 0.75, 1.5를 차례로 비교하면 드러난다.

## 기타 참고 문헌

- [Jiří Lebl, Basic set theory](https://www.jirka.org/ra/html/sec_basicset.html): Relations and equivalence classes 절의 동치관계와 동치류.
- 동치관계와 분할의 대응 증명: 위 논증으로 동치류가 분할을 만들고, 반대로 같은 분할 조각에 속한다는 관계는 세 공리를 만족한다.

# 연관 문서

## 선수지식

- [집합](sets.md)
- [명제와 증명](proofs.md)

## 더 알아보기

- [수학적 구조주의](mathematical-structuralism.md)
- [부분순서](partial-orders.md)
- [그래프 동형](graph-isomorphism.md)
- [군 작용](group-actions.md)
- [정수의 합동과 나머지 연산](modular-arithmetic.md)
- [서로소 집합 자료구조](union-find.md)
- [유한 오토마타와 정규언어](finite-automata.md)
