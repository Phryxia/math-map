# 실수

# 개요

**실수(real number)** 는 수직선 위의 점 하나하나에 대응하는 수다. 넓이가 $2$ 인 정사각형의 한 변의 길이는 제곱해서 $2$ 가 되는 수인데, 분수 가운데에는 그런 수가 없다. 실수는 분수 전체에 이런 수를 더한 체계이고, "위로 유계인 [집합](sets.md)은 가장 작은 상계를 갖는다" 는 공리 하나로 더할 수를 정한다.

# 직관

제곱이 $2$ 보다 작은 분수를 모두 모은 집합 $A$ 를 본다. $1.5^2=2.25$ 이므로 $1.5$ 는 $A$ 의 어느 원소보다 크다. $1.42$, $1.415$, $1.4143$ 도 그렇다. $A$ 의 모든 원소보다 큰 분수를 점점 작게 고를 수 있다.

그중 가장 작은 분수는 없다. 분수 $p\gt 0$ 이 $p^2\gt 2$ 이면 $q=p-(p^2-2)/(2p)$ 는 $p$ 보다 작고 $q^2=2+\left((p^2-2)/(2p)\right)^2\gt 2$ 이므로 $q$ 도 $A$ 의 모든 원소보다 크다. $p^2=2$ 인 분수는 없으니 이 경우만 남는다.

$A$ 를 위에서 누르는 분수들이 한 점으로 모이는데 그 점이 분수에 없다. 그러면 그 점을 수로 정한다. 집합 $A$ 자체를 그 수의 이름으로 쓰면, 수 하나가 "그보다 작은 분수 전체의 집합" 하나에 대응한다.

# 정의

## 상계와 상한

순서가 있는 집합의 부분집합 $S$ 와 원소 $b$ 가 모든 $s\in S$ 에 대해 $s\le b$ 를 만족하면 $b$ 를 $S$ 의 **상계(upper bound)** 라 한다. 상계가 있는 집합을 위로 유계라 한다. 상계 가운데 가장 작은 것을 **상한(supremum, least upper bound)** 이라 하고 $\sup S$ 로 쓴다. 하계와 하한 $\inf S$ 는 부등호를 뒤집어 정의한다.

## 실수의 공리

**순서체(ordered field)** 는 사칙연산이 정의된 [체](fields.md) $F$ 에 전순서 $\le$ 가 있어 다음을 만족하는 것이다.

$$
x\le y\implies x+z\le y+z,\qquad 0\le x,\ 0\le y\implies 0\le xy
$$

분수 전체의 집합인 유리수(rational number) $\mathbb Q$ 는 순서체다. 순서체 $F$ 의 공집합 아닌 부분집합이 위로 유계이면 항상 $F$ 안에 상한을 가질 때, $F$ 가 **상한 공리(least upper bound property)** 를 만족한다고 한다. **실수체** $\mathbb R$ 는 상한 공리를 만족하는 순서체다. 직관 절의 $A$ 는 $\mathbb Q$ 안에 상한이 없으므로 $\mathbb Q$ 는 상한 공리를 만족하지 않는다.

## Dedekind 절단

$\mathbb Q$ 의 부분집합 $\alpha$ 가 다음 셋을 만족하면 **Dedekind 절단(Dedekind cut)** 이라 한다.

1. $\alpha$ 는 공집합이 아니고 $\mathbb Q$ 전체도 아니다.
2. $p\in\alpha$ 이고 $q\lt p$ 이면 $q\in\alpha$ 다.
3. $\alpha$ 에 최대원이 없다.

절단 전체의 집합을 $\mathbb R$ 로 둔다. 분수 $r$ 은 절단 $\lbrace q\in\mathbb Q: q\lt r\rbrace$ 와 같게 보고, 직관 절의 $\lbrace q: q\lt 0\rbrace\cup A$ 는 분수에 대응하지 않는 절단이다. 순서는 포함관계 $\alpha\le\beta\iff\alpha\subseteq\beta$ 로, 덧셈은 $\alpha+\beta=\lbrace a+b: a\in\alpha,\ b\in\beta\rbrace$ 로 정의한다. 곱셈은 양의 절단에 대해 $\lbrace q\le 0\rbrace\cup\lbrace ab: a\in\alpha,\ b\in\beta,\ a,b\gt 0\rbrace$ 로 정의하고 부호로 나머지를 정한다.[^1]

**정리.** 절단 전체 $\mathbb R$ 는 순서체이고 상한 공리를 만족한다.

증명의 요지. 위로 유계인 절단의 모임 $\mathcal S$ 의 합집합 $\gamma=\bigcup\mathcal S$ 가 다시 절단이고, 포함관계로 잰 가장 작은 상계다. 체의 공리는 분수의 연산에서 하나씩 확인한다.

# 성질

## 유일성

**정리.** 상한 공리를 만족하는 두 순서체 사이에는 사칙연산과 순서를 보존하는 전단사가 정확히 하나 있다.[^2]

증명의 요지. 두 체 모두 $1$ 을 거듭 더해 정수와 분수를 갖고, 분수끼리는 같은 것끼리 대응시킨다. 나머지 원소 $x$ 는 $\sup\lbrace q\in\mathbb Q: q\lt x\rbrace$ 이므로 상대편에서 같은 분수 집합의 상한으로 보낸다. 그래서 Dedekind 절단 말고 다른 구성으로 만든 실수도 같은 체계다.

## Archimedes 성질

**정리.** 모든 실수 $x$ 에 대해 $n\gt x$ 인 자연수 $n$ 이 있다. 이것을 **Archimedes 성질(Archimedean property)** 이라 한다.

증명의 요지. 자연수 전체가 위로 유계라고 하면 상한 $s$ 가 있다. $s-1$ 은 상계가 아니므로 $n\gt s-1$ 인 자연수 $n$ 이 있고, $n+1\gt s$ 가 모순이다.

따름정리로 두 실수 $a\lt b$ 사이에는 분수가 있다. $n(b-a)\gt 1$ 인 $n$ 을 잡으면 $na$ 와 $nb$ 사이에 정수 $m$ 이 있고 $a\lt m/n\lt b$ 다. 분수가 실수 안에서 **조밀(dense)** 하다고 한다.

## 제곱근의 존재

**정리.** 양의 실수 $a$ 에 대해 $x^2=a$ 인 양의 실수 $x$ 가 하나 있다.

증명의 요지. $a=2$ 일 때 직관 절의 $A$ 의 상한을 $x$ 로 둔다. $x^2\lt 2$ 이면 작은 $h\gt 0$ 에 대해 $(x+h)^2\lt 2$ 라서 $x$ 가 상계가 아니고, $x^2\gt 2$ 이면 직관 절의 $q$ 처럼 $x$ 보다 작은 상계가 있다. 남는 것은 $x^2=2$ 다.

## 상한 공리와 동치인 명제

순서체 $F$ 에서 다음은 상한 공리와 동치다. 단, 둘째와 셋째는 $F$ 가 Archimedes 성질을 만족한다는 조건 아래에서 동치다.[^3]

- 위로 유계인 단조 증가 수열은 수렴한다. 수렴의 정의는 [수열의 극한](limits.md)이다.
- 닫힌구간의 감소열 $\lbrack a_1,b_1\rbrack\supseteq\lbrack a_2,b_2\rbrack\supseteq\cdots$ 의 교집합이 공집합이 아니다. 이것을 **구간축소 정리(nested interval theorem)** 라 한다.
- 모든 **Cauchy 수열(Cauchy sequence)**, 곧 충분히 뒤의 임의의 두 항이 원하는 만큼 가까운 수열이 수렴한다.

셋째 명제를 [거리 공간](metric-spaces.md)으로 옮긴 것이 [완비성](completeness.md)이다.

## 비가산성

$\mathbb R$ 는 셀 수 없다. 실수 $x_1,x_2,\dots$ 의 목록이 주어지면 $x_1$ 을 피하는 닫힌구간, 그 안에서 $x_2$ 를 피하는 닫힌구간을 차례로 잡고, 구간축소 정리로 모든 구간에 속하는 실수를 얻는다. 그 실수는 목록에 없다. 분수 전체는 셀 수 있으므로 분수에 대응하지 않는 실수가 대부분이다. 두 무한집합의 크기 비교는 [기수](cardinality.md)에서 다룬다.

# 활용

- [수열의 극한](limits.md)의 단조수렴 정리, [Bolzano–Weierstrass 정리](bolzano-weierstrass.md), [중간값 정리](intermediate-value-theorem.md)는 상한 공리로 증명된다. 중간값 정리는 $f(x)\lt 0$ 인 점 전체의 상한에서 $f$ 가 $0$ 임을 보인다.
- [복소수](complex-numbers.md)는 실수의 순서쌍으로 정의된다.
- [완비성](completeness.md)의 완비화는 분수의 Cauchy 수열로 실수를 만드는 구성을 거리 공간 전체로 옮긴 것이다. 분수에 절댓값 대신 $p$ 진 절댓값을 쓰고 같은 구성을 하면 [p 진수](p-adic-numbers.md)가 나온다.
- [실닫힌체](real-closed-fields.md)는 실수에서 상한 공리 대신 다항식의 근에 관한 성질만 남긴 순서체다.
- [비표준 해석학](nonstandard-analysis.md)의 초실수체는 Archimedes 성질을 만족하지 않는 순서체이고, 무한소를 원소로 갖는다.

[^1]: Walter Rudin, *Principles of Mathematical Analysis*, 3rd ed., Chapter 1, Appendix (Dedekind 절단으로 실수체를 구성하고 상한 공리를 증명한다).
[^2]: Michael Spivak, *Calculus*, 4th ed., Chapter 30 (상한 공리를 만족하는 순서체의 유일성).
[^3]: James Propp, "Real Analysis in Reverse", *The American Mathematical Monthly* 120(5), 2013, pp. 392–408 (순서체에서 상한 공리와 동치인 명제들과 Archimedes 성질이 필요한 경우).

# 연관 문서

## 선수지식

- [집합](sets.md)
- [해석학 개관](analysis-overview.md)

## 더 알아보기

- [수열의 극한](limits.md)
- [복소수](complex-numbers.md)
- [무리수](irrational-numbers.md)

#analysis #foundations #order_theory
