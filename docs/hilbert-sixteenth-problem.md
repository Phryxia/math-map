# Hilbert 의 16 번째 문제

# 개요

**Hilbert 의 16 번째 문제(Hilbert's sixteenth problem)** 는 Hilbert 가 1900 년에 제시한 23 개 문제 가운데 하나로, 실대수곡선의 위상을 묻는 첫째 부분과 평면 다항식 벡터장의 극한 순환 개수를 묻는 둘째 부분으로 이루어진다. 이 문서는 둘째 부분을 다룬다. 차수가 $n$ 이하인 다항식 벡터장의 극한 순환 개수에 $n$ 에만 의존하는 상한이 있는지, 있다면 얼마인지를 묻는다.

# 직관

[Liénard 정리](lienard-theorem.md)에 따르면 van der Pol 방정식 $x''-\mu(1-x^2)x'+x=0$ 의 평면계는 극한 순환이 정확히 하나다. 이 평면계의 우변은 $x,y$ 의 3 차 다항식이다. 차수를 높이면 극한 순환을 몇 개까지 만들 수 있는지 알고 싶다.

극좌표에서 $r'=r\thinspace g(r^2)$, $\theta'=1$ 인 계를 잡는다. 직교좌표로는

$$
x'=x\thinspace g(x^2+y^2)-y,\qquad y'=y\thinspace g(x^2+y^2)+x
$$

이다. $g(s)=(s-1)(s-4)$ 로 두면 우변은 5 차 다항식이다. $r=1$ 과 $r=2$ 에서 $r'=0$ 이므로 두 원은 닫힌 궤도다. $0\lt r\lt 1$ 에서 $r'\gt 0$, $1\lt r\lt 2$ 에서 $r'\lt 0$, $r\gt 2$ 에서 $r'\gt 0$ 이므로 원 $r=1$ 근처의 해는 그 원으로 다가가고 원 $r=2$ 근처의 해는 그 원에서 멀어진다. 두 원은 둘 다 이웃한 닫힌 궤도가 없는 극한 순환이다.

같은 방법으로 $g(s)=(s-1)(s-4)\cdots(s-k^2)$ 이면 차수 $2k+1$ 의 벡터장이 극한 순환 $k$ 개를 갖는다. 개수를 늘리려면 차수를 높여야 했다. 차수를 고정하고 계수를 어떻게 골라도 극한 순환의 개수가 어떤 수를 넘지 못하는지가 이 문제의 물음이다.

# 정의

## 극한 순환

평면 벡터장 $x'=P(x,y)$, $y'=Q(x,y)$ 의 닫힌 궤도 $\gamma$ 가 어떤 근방 안에서 유일한 닫힌 궤도이면 $\gamma$ 를 **극한 순환(limit cycle)** 이라 한다. 해석적 벡터장의 닫힌 궤도는 고립되어 있거나 닫힌 궤도로 채워진 고리 영역에 들어 있고, 고립된 닫힌 궤도 근처의 해는 시간이 앞이나 뒤로 갈 때 그 궤도로 다가간다. 시간이 앞으로 갈 때 다가가는 쪽의 극한 순환은 [Poincaré–Bendixson 정리](poincare-bendixson.md)의 정의대로 이웃한 해의 ω-극한집합이다.

## Hilbert 수

$P,Q$ 가 차수 $n$ 이하의 실계수 다항식인 벡터장 전체에서 극한 순환 개수의 상한

$$
H(n)=\sup_{\deg P,\thinspace\deg Q\le n}\char35{}\lbrace\text{극한 순환}\rbrace
$$

를 **Hilbert 수(Hilbert number)** 라 한다. 상한이 없으면 $H(n)=\infty$ 다. 16 번째 문제의 둘째 부분은 $H(n)$ 이 유한한지와 그 값을 묻는다.

## 첫째 부분

첫째 부분은 차수 $n$ 의 비특이 실사영 평면곡선이 이루는 고리(oval)들의 상호 배치를 묻는다. 연결성분의 개수는 Harnack 곡선 정리(Harnack's curve theorem)로 $\frac{(n-1)(n-2)}2+1$ 이하다[^1].

# 성질

## 일차 벡터장

$H(1)=0$ 이다. $P,Q$ 가 일차이고 상수항이 없으면 계는 선형이고, $\gamma$ 가 닫힌 궤도이면 모든 $c\gt 0$ 에 대해 $c\gamma$ 도 닫힌 궤도다. 닫힌 궤도가 고립되지 않으므로 극한 순환이 없다. 상수항이 있어도 평형점이 있으면 평행이동으로 선형계가 된다. 평형점이 없으면 닫힌 궤도도 없다. 평면의 닫힌 궤도는 안쪽에 평형점을 둔다.

## 아래로부터의 값

직관 절의 구성으로 홀수 $n$ 에서 $H(n)\ge (n-1)/2$ 다. 이 하한은 훨씬 크게 올라간다. 이차 벡터장에서 극한 순환 4 개를 갖는 예가 1979 년과 1980 년에 만들어져 $H(2)\ge 4$ 다[^2]. 일반 $n$ 에서는 어떤 상수 $c\gt 0$ 에 대해 충분히 큰 $n$ 에서 $H(n)\ge c\thinspace n^2\log n$ 이다[^3].

## 개별 유한성 정리

차수를 고정하지 않고 벡터장 하나만 보면 극한 순환은 유한 개다. 이것을 **개별 유한성 정리(individual finiteness theorem)** 라 한다. Dulac 이 1923 년에 증명을 발표했으나 빈틈이 발견되었고, Ilyashenko(1991)와 Écalle(1992)이 각각 독립적으로 증명을 완성했다[^2].

증명의 요지. 극한 순환이 무한히 많으면 그것들은 평형점과 그 사이를 잇는 궤도로 이루어진 다각 순환(polycycle)에 쌓인다. 다각 순환 근처의 Poincaré 첫 귀환 사상은 해석적이지 않아서, 고정점이 쌓이지 않는다는 것을 보이려면 그 사상의 점근 전개를 따로 다뤄야 한다. 두 증명은 이 점근 전개가 사상을 하나로 정한다는 것(준해석성, quasianalyticity)을 서로 다른 방법으로 보인다. 그러면 고정점이 쌓일 때 사상이 항등사상이 되어 극한 순환이 고립되지 않는다.

## 알려진 열린 문제

$H(2)$ 가 유한한지는 알려져 있지 않다[^2]. Smale 은 1998 년에 21 세기의 수학 문제 목록에서 이 문제를 13 번째로 들었다[^4].

# 활용

- [Hopf 분기](hopf-bifurcation.md)는 평형점에서 극한 순환을 하나씩 만든다. 이차 벡터장의 초점 하나에서 분기로 생기는 극한 순환은 많아야 3 개라는 것이 Bautin 정리(Bautin's theorem)다[^2]. $H(2)\ge 4$ 의 예는 한 초점을 도는 극한 순환 3 개와 다른 초점을 도는 극한 순환 1 개를 갖는다.
- Liénard 정리의 조건 밖에서 다항식 Liénard 방정식의 극한 순환 개수를 묻는 것은 이 문제를 Liénard 방정식으로 좁힌 판이다. $g(x)=x$ 이고 $F$ 가 3 차 다항식이면 극한 순환은 많아야 하나다[^2].
- Hamilton 벡터장(Hamiltonian vector field)을 작게 섭동했을 때 닫힌 궤도 족에서 갈라져 나오는 극한 순환의 개수는 Abel 적분(Abelian integral)의 영점 개수로 정해지고, 이 영점 개수의 상한을 묻는 것이 [약한 Hilbert 16 번째 문제](weak-hilbert-sixteenth-problem.md)다. 이 영점 개수가 차수에만 의존하는 상한을 갖는다는 것은 Varchenko 와 Khovanskii 가 1984 년에 증명했다[^2].

[^1]: A. Harnack, "Über die Vieltheiligkeit der ebenen algebraischen Curven", Math. Ann. 10 (1876), 189–198.
[^2]: Yu. Ilyashenko, "Centennial history of Hilbert's 16th problem", Bull. Amer. Math. Soc. 39 (2002), 301–354.
[^3]: C. J. Christopher, N. G. Lloyd, "Polynomial systems: a lower bound for the Hilbert numbers", Proc. R. Soc. Lond. A 450 (1995), 219–224.
[^4]: S. Smale, "Mathematical problems for the next century", Math. Intelligencer 20 (1998), no. 2, 7–15.

# 연관 문서

## 선수지식

- [Liénard 정리](lienard-theorem.md)

## 더 알아보기

- [약한 Hilbert 16 번째 문제](weak-hilbert-sixteenth-problem.md)

#analysis #topology
