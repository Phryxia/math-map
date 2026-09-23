# Sperner 보조정리

# 개요

Sperner 보조정리는 삼각형을 잘게 쪼개고 꼭짓점마다 세 이름 가운데 하나를 규칙대로 붙이면 세 이름이 모두 나타나는 작은 삼각형이 홀수 개 있다고 말한다. 규칙은 큰 삼각형의 세 꼭짓점이 서로 다른 이름을 갖고, 변 위의 점은 그 변의 두 끝이 가진 이름 가운데 하나를 갖는다는 것뿐이다. [Brouwer 고정점 정리](brouwer-fixed-point.md)의 조합적 증명이 이 보조정리에서 나오고, 증명이 유한한 절차라 고정점을 찾는 알고리즘이 된다. 이름이 같은 Sperner 정리(포함관계가 없는 부분집합족의 최대 크기)와는 다른 결과다.

# 직관

삼각형을 작은 삼각형들로 쪼개고 각 꼭짓점에 $0$, $1$, $2$ 를 붙인다. 큰 삼각형의 세 꼭짓점에는 $0,1,2$ 를 하나씩 주고, $0$ 과 $1$ 을 잇는 변 위의 점에는 $0$ 이나 $1$ 만 준다. 다른 두 변도 같다. 안쪽 점에는 아무 이름이나 준다. 세 이름을 모두 가진 작은 삼각형을 찾는다.

작은 삼각형 하나하나를 방으로 보고, 변 가운데 이름이 $\lbrace 0,1\rbrace$ 인 것을 문으로 본다. 방에 문이 몇 개인지 세면 세 가지뿐이다. 이름이 $0,1,2$ 인 방은 문이 하나, 이름이 $0,0,1$ 이나 $0,1,1$ 인 방은 문이 둘, 나머지 방은 문이 없다.

바깥에서 방으로 들어가는 문은 큰 삼각형의 $0$–$1$ 변 위에만 있다. 그 변 위에서 이름은 $0$ 으로 시작해 $1$ 로 끝나므로 $0$ 에서 $1$ 로 바뀌는 자리가 홀수 개다. 곧 바깥 문의 개수가 홀수다.

문 하나를 골라 들어가서, 방에 다른 문이 있으면 그리로 나가기를 되풀이한다. 문이 하나뿐인 방에 닿으면 멈추고, 그 방이 세 이름을 모두 가진 방이다. 같은 방을 두 번 지날 수 없으므로 이 걸음은 반드시 멈춘다. 바깥 문이 홀수 개이므로 그렇게 끝나는 걸음이 홀수 개 있다.

# 정의

## 단체와 세분

$\mathbb R^n$ 의 아핀 독립인 점 $v_0,\dots,v_n$ 이 만드는 볼록포를 $n$ **단체**라 하고 $\lbrack v_0,\dots,v_n\rbrack$ 으로 쓴다. 꼭짓점의 부분집합이 만드는 단체를 면이라 한다. 단체 $\Delta$ 의 **삼각분할**은 $\Delta$ 를 덮는 유한 개의 $n$ 단체 모임으로, 두 조각이 만나면 그 교집합이 양쪽의 공통 면인 것이다.

## Sperner 이름표

$\Delta=\lbrack v_0,\dots,v_n\rbrack$ 의 삼각분할 $T$ 에 대해 꼭짓점 전체에서 $\lbrace 0,1,\dots,n\rbrace$ 으로 가는 함수 $\ell$ 이 **Sperner 이름표**라는 것은, 각 꼭짓점 $x$ 가 놓인 최소 면 $\lbrack v_{i_0},\dots,v_{i_k}\rbrack$ 에 대해 $\ell(x)\in\lbrace i_0,\dots,i_k\rbrace$ 인 것이다. 이 조건은 $\ell(v_i)=i$ 와 각 면 위의 점이 그 면의 꼭짓점 번호만 받는다는 것을 함께 말한다.

$T$ 의 $n$ 단체 가운데 꼭짓점의 이름이 $0,1,\dots,n$ 전부인 것을 **완전 단체**라 한다.

## 보조정리의 진술

> **보조정리 (Sperner, 1928).** Sperner 이름표를 가진 삼각분할에는 완전 단체가 홀수 개 있다. 특히 하나 이상 있다.

# 성질

## 문 세기 증명

$n$ 단체 $\sigma\in T$ 마다 $\lbrace 0,1,\dots,n-1\rbrace$ 을 이름으로 갖는 $(n-1)$ 면의 개수를 $d(\sigma)$ 라 한다. $\sigma$ 의 이름 다중집합을 보면 $d(\sigma)$ 는 세 값만 갖는다. $\sigma$ 가 완전 단체이면 $d(\sigma)=1$ 이고, $0,\dots,n-1$ 을 전부 갖되 하나가 두 번 나오면 $d(\sigma)=2$ 이며, 그 밖에는 $d(\sigma)=0$ 이다.

$\sum_{\sigma}d(\sigma)$ 를 면 쪽에서 센다. 내부의 $(n-1)$ 면은 두 단체에 공유되어 2 를 보태고, 경계의 것은 1 을 보탠다. 따라서

$$
\sum_{\sigma\in T}d(\sigma)\equiv\char35{}\lbrace \text{경계의 } \lbrace 0,\dots,n-1\rbrace \text{ 면}\rbrace \pmod 2
$$

이다. 경계에서 그런 면은 $\lbrack v_0,\dots,v_{n-1}\rbrack$ 위에만 있으므로 우변은 그 면에 대한 $n-1$ 차원 문제의 완전 단체 개수다. 차원에 대한 귀납으로 그 값이 홀수이고, 좌변에서 $d(\sigma)=2$ 인 항이 짝수를 보태므로 완전 단체의 개수가 홀수다. $n=0$ 에서는 한 점에 이름 $0$ 이 붙어 개수가 1 이다.

## Brouwer 정리의 증명

$\Delta$ 를 $n$ 단체, $f\colon\Delta\to\Delta$ 를 연속이라 하고 점을 무게중심좌표 $x=(x_0,\dots,x_n)$ 으로 쓴다. 꼭짓점 $x$ 에

$$
\ell(x)=\min\lbrace i : f(x)\_i\lt x_i\rbrace
$$

를 이름으로 준다. $\sum_i x_i=\sum_i f(x)\_i=1$ 이므로 $x\ne f(x)$ 이면 $f(x)\_i\lt x_i$ 인 $i$ 가 있어 이름이 정해지고, $x_i=0$ 인 자리는 $f(x)\_i\lt x_i$ 를 만족할 수 없으므로 이 이름표가 Sperner 조건을 만족한다.

세분을 가늘게 한 삼각분할의 열을 잡으면 완전 단체가 매번 있다. 그 꼭짓점들은 콤팩트성으로 수렴하는 부분열을 갖고, 지름이 0 으로 가므로 극한이 한 점 $x^\ast$ 다. 각 $i$ 에 대해 이름이 $i$ 인 꼭짓점의 열이 $x^\ast$ 로 가므로 연속성에서 $f(x^\ast)\_i\le x^\ast_i$ 가 모든 $i$ 에서 성립한다. 합이 양쪽 모두 1 이므로 등호가 되고 $f(x^\ast)=x^\ast$ 다.

## 알고리즘

문 세기 증명의 걸음은 그대로 절차가 된다. 경계의 문 하나에서 출발해 이웃 단체로 옮기기를 되풀이하면 완전 단체에 닿는다. 세분의 눈금을 $\varepsilon$ 으로 잡으면 고정점을 $\varepsilon$ 오차로 주는 점이 나온다.

```javascript
function sperner(triangulation, label) {
  let simplex = boundaryDoor(triangulation, label)  // 0..n-1 이름을 가진 경계 면
  const seen = new Set()
  while (true) {
    seen.add(simplex.id)
    if (isComplete(simplex, label)) return simplex
    const next = otherDoor(simplex, label)          // 문이 둘인 방의 반대쪽 문
    simplex = neighborAcross(triangulation, simplex, next)
  }
}
```

걸음의 길이는 최악의 경우 단체 개수에 비례하고, 그 개수가 차원에 대해 지수로 늘어난다. 이 절차를 일반화한 것이 고정점 계산의 복잡도류 $\mathsf{PPAD}$ 의 정의에 쓰이는 문제이며, 근사 Nash 균형을 찾는 문제가 그 류에서 완전이다.

# 활용

- **공정한 분배.** 케이크를 $n$ 명이 시기하지 않게 자르는 문제에서, 자르는 위치를 단체의 점으로 두고 각자가 고르는 조각의 번호를 이름으로 주면 완전 단체가 선망 없는 분배를 준다. 이 논법을 Sperner 이름표의 변형인 Stromquist 의 구성이라 한다.
- **[Brouwer 고정점 정리](brouwer-fixed-point.md)의 구성적 증명.** 귀류법 대신 유한한 걸음으로 고정점 근사를 얻는다.
- **KKM(Knaster–Kuratowski–Mazurkiewicz) 정리.** 단체를 닫힌집합 $n+1$ 개로 덮되 각 면이 대응하는 집합들의 합집합에 들어가면 모든 집합의 교집합이 비어 있지 않다. 이 정리와 Sperner 보조정리와 Brouwer 정리는 서로를 짧게 함의한다.

# 연관 문서

## 선수지식

- [Brouwer 고정점 정리](brouwer-fixed-point.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #topology #algorithms #theorem
