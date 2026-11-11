# Stanley–Reisner 환

# 개요

**Stanley–Reisner 환(Stanley–Reisner ring)** 은 단체 복합체의 꼭짓점마다 변수를 하나 두고, 면이 아닌 꼭짓점 집합의 곱을 $0$ 으로 둔 다항식환의 몫환이다. 삼각형의 세 변만 있고 내부가 없는 도형은 꼭짓점 $x,y,z$ 셋이 한 면을 이루지 않으므로 $k\lbrack x,y,z\rbrack/(xyz)$ 가 된다. 이 도형의 면의 수에 어떤 제약이 있는지 묻는 문제가 이 환의 문제가 된다.

이 환의 [Hilbert 함수](hilbert-functions.md)는 면의 수로 정해지므로, 환에 대한 [Macaulay 정리](macaulay-theorem.md)가 면의 수에 대한 부등식이 된다.

# 직관

삼각형의 테두리를 꼭짓점 $1,2,3$ 과 변 $12,13,23$ 으로 적는다. 꼭짓점마다 변수 $x,y,z$ 를 두고, 단항식이 쓰는 변수의 집합이 면이면 그 단항식을 남긴다. 2 차 단항식 $x^2,y^2,z^2,xy,xz,yz$ 는 쓰는 꼭짓점이 하나나 둘이므로 여섯 모두 남는다.

3 차 단항식 열 개 가운데 $xyz$ 만 세 꼭짓점을 모두 쓰고, $123$ 은 면이 아니므로 $xyz$ 가 빠져 아홉이 남는다. 일반적으로 $d\ge1$ 차에서 남는 단항식은 $3d$ 개다.

이 수를 면별로 나누어 센다. 쓰는 꼭짓점이 정확히 면 $F$ 인 $d$ 차 단항식은, $F$ 의 꼭짓점마다 지수를 $1$ 이상 주어 합이 $d$ 가 되게 하는 방법의 수다. 꼭짓점 하나짜리 면 셋은 각각 $1$ 개, 변 셋은 각각 $d-1$ 개를 주므로 $3+3(d-1)=3d$ 다.

# 정의

## 단체 복합체와 면의 수

유한집합 $V$ 의 부분집합들의 족 $\Delta$ 가 부분집합을 취하는 것에 닫혀 있으면 $\Delta$ 를 $V$ 위의 단체 복합체라 하고, $\Delta$ 의 원소를 면이라 한다. 크기 $i$ 인 면의 수를 $f\_i$ 로 쓰고 $f\_0=1$ 은 공집합이다. 가장 큰 면의 크기를 $D$ 로 쓴다. 이 정의와 기호는 [Kruskal–Katona 정리](kruskal-katona-theorem.md)의 것과 같다.

직관 절의 삼각형 테두리에서 $f\_0=1$, $f\_1=3$, $f\_2=3$, $D=2$ 다.

## Stanley–Reisner 환

$V=\lbrace 1,\dots,n\rbrace$ 위의 단체 복합체 $\Delta$ 와 체 $k$ 에 대해, 면이 아닌 집합 $G$ 마다 단항식 $x\_G=\prod\_{i\in G}x\_i$ 를 모아 생성한 아이디얼을 $I\_\Delta$ 로 쓴다. 다음 몫환을 $\Delta$ 의 **Stanley–Reisner 환** 이라 한다.

$$
k\lbrack\Delta\rbrack=k\lbrack x\_1,\dots,x\_n\rbrack/I\_\Delta
$$

$I\_\Delta$ 는 제곱 인수 없는 단항식으로 생성되고, 제곱 인수 없는 단항식으로 생성되는 아이디얼은 모두 이렇게 단체 복합체 하나에서 나온다. 삼각형 테두리에서는 면이 아닌 집합이 $123$ 하나이므로 $I\_\Delta=(xyz)$ 다.

## h 벡터

$k\lbrack\Delta\rbrack$ 의 차수별 차원을 모은 급수를 다음 꼴로 적는다.

$$
\sum\_{d\ge0}\dim\_k k\lbrack\Delta\rbrack\_d\thinspace t^d=\sum\_{i=0}^{D}\frac{f\_i\thinspace t^i}{(1-t)^i}=\frac{h\_0+h\_1t+\cdots+h\_Dt^D}{(1-t)^D}
$$

첫 등호는 직관 절의 면별 셈이다. 둘째 등호로 정해지는 $(h\_0,\dots,h\_D)$ 를 $\Delta$ 의 **h 벡터(h-vector)** 라 한다.

삼각형 테두리에서 급수는 다음과 같으므로 h 벡터는 $(1,1,1)$ 이다.

$$
1+\frac{3t}{(1-t)^2}=\frac{1+t+t^2}{(1-t)^2}
$$

## Cohen–Macaulay 복합체

$k\lbrack\Delta\rbrack$ 가 변수들이 생성하는 아이디얼에 대해 깊이와 [Krull 차원](krull-dimension.md)이 같은 환일 때 $\Delta$ 를 $k$ 위의 **Cohen–Macaulay 복합체(Cohen–Macaulay complex)** 라 한다. 정의는 [Cohen–Macaulay 환](cohen-macaulay-rings.md)의 것을 차수 붙은 환으로 옮긴 것이다. $k\lbrack\Delta\rbrack$ 의 Krull 차원은 $D$ 다.

삼각형 테두리에서 $\theta\_1=x-y$, $\theta\_2=y-z$ 로 나누면 $x=y=z$ 가 되어 $k\lbrack x\rbrack/(x^3)$ 이 남는다. 이 몫이 유한 차원이므로 $\theta\_1,\theta\_2$ 가 차원만큼의 일차식이다.

$k\lbrack x,y,z\rbrack/(xyz)$ 의 영인자는 $x$, $y$, $z$ 가운데 하나의 배수이고 $x-y$ 는 어느 것도 아니므로 영인자가 아니다. 같은 이유로 $y-z$ 도 $k\lbrack x,z\rbrack/(x^2z)$ 의 영인자가 아니므로 깊이가 $2$ 다. 그래서 삼각형 테두리는 Cohen–Macaulay 복합체다.

# 성질

## Stanley 정리

정리. $\Delta$ 가 Cohen–Macaulay 복합체이면 h 벡터는 Macaulay 정리의 조건을 만족한다. 곧 $h\_0=1$ 이고 $i\ge1$ 에서 $h\_{i+1}\le h\_i^{\langle i\rangle}$ 이다. 거꾸로 이 조건을 만족하는 정수열은 모두 어떤 Cohen–Macaulay 복합체의 h 벡터다[^1].

증명의 요지. $k$ 가 무한체이면 차원 $D$ 만큼의 일차식 $\theta\_1,\dots,\theta\_D$ 로 $k\lbrack\Delta\rbrack/(\theta)$ 를 유한 차원으로 만들 수 있다. Cohen–Macaulay 이면 이들이 차례로 영인자가 아니어서, 하나로 나눌 때마다 급수에 $1-t$ 가 곱해진다. 그래서 $k\lbrack\Delta\rbrack/(\theta)$ 의 Hilbert 함수가 h 벡터이고, Macaulay 정리가 적용된다.

삼각형 테두리에서 $k\lbrack x\rbrack/(x^3)$ 의 Hilbert 함수 $1,1,1$ 이 h 벡터와 같다.

## Cohen–Macaulay 가 아닌 예

꼭짓점 $1,2,3,4$ 와 변 $12,34$ 만 있는 복합체는 $f\_0=1$, $f\_1=4$, $f\_2=2$, $D=2$ 다. 정의의 식에서 h 벡터는 다음과 같다.

$$
h\_0=1,\qquad h\_1=f\_1-2=2,\qquad h\_2=f\_2-f\_1+1=-1
$$

Hilbert 함수는 음수가 될 수 없으므로 이 h 벡터는 Stanley 정리의 결론을 어기고, 이 복합체는 Cohen–Macaulay 가 아니다.

## Reisner 판정법

면 $F$ 의 **링크(link)** 는 $F$ 와 만나지 않고 $F$ 와 합쳐서 면이 되는 면들의 족 $\mathrm{lk}\thinspace F$ 다.

정리. $\Delta$ 가 $k$ 위의 Cohen–Macaulay 복합체인 것은, 공집합을 포함한 모든 면 $F$ 와 $\mathrm{lk}\thinspace F$ 의 차원(가장 큰 면의 크기에서 $1$ 을 뺀 수)보다 작은 모든 $i$ 에 대해 $\mathrm{lk}\thinspace F$ 의 $k$ 계수 축약 [호몰로지](homology.md) $\tilde H\_i$ 가 $0$ 인 것과 동치다. 이것을 **Reisner 판정법(Reisner's criterion)** 이라 한다[^2].

두 변 $12,34$ 의 복합체는 $F=\varnothing$ 의 링크가 자기 자신이고, 연결되어 있지 않아 $\tilde H\_0\ne0$ 이다. 삼각형 테두리는 연결되어 있고 꼭짓점의 링크는 점 둘이라 조건이 걸리는 차수가 없으므로 판정법을 통과한다. 구면을 삼각분할한 복합체는 모든 링크의 축약 호몰로지가 가장 높은 차수에만 있으므로 판정법을 통과해 Cohen–Macaulay 다.

# 활용

- 상계 정리(upper bound theorem). 꼭짓점이 $n$ 개인 $(D-1)$ 차원 구면의 삼각분할에서 각 크기의 면의 수가 같은 꼭짓점 수의 [순환 다면체](cyclic-polytopes.md)의 것 이하라는 정리다. Stanley 는 Reisner 판정법으로 구면이 Cohen–Macaulay 임을 쓰고, $k\lbrack\Delta\rbrack/(\theta)$ 가 1 차 원소 $n-D$ 개로 생성되므로 $h\_i$ 가 $n-D$ 변수 $i$ 차 단항식 수 이하라는 부등식에서 이것을 증명했다[^3].
- 단체 다면체의 g 정리. Macaulay 정리 문서에 적은 g 벡터의 조건은 단체 다면체의 경계 복합체의 h 벡터에 대한 조건이고, 필요성 증명은 이 환의 몫에서 강한 Lefschetz 성질을 쓴다.
- 제곱 인수 없는 단항식 아이디얼의 계산. Hochster 공식(Hochster's formula)은 $I\_\Delta$ 의 자유 분해의 Betti 수를 $\Delta$ 의 부분복합체의 축약 호몰로지로 적는다[^4].

[^1]: R. P. Stanley, "Cohen–Macaulay complexes", in *Higher Combinatorics*, Reidel, 1977, 51–62.
[^2]: G. A. Reisner, "Cohen–Macaulay quotients of polynomial rings", *Advances in Mathematics* 21 (1976), 30–49.
[^3]: R. P. Stanley, "The upper bound conjecture and Cohen–Macaulay rings", *Studies in Applied Mathematics* 54 (1975), 135–142.
[^4]: M. Hochster, "Cohen–Macaulay rings, combinatorics, and simplicial complexes", in *Ring Theory II*, Marcel Dekker, 1977, 171–223.

# 연관 문서

## 선수지식

- [Macaulay 정리](macaulay-theorem.md)
- [Cohen–Macaulay 환](cohen-macaulay-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #ring_theory #algebra #algebraic_topology
