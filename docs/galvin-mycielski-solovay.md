# Galvin–Mycielski–Solovay 정리

# 개요

Galvin–Mycielski–Solovay 정리는 [강 측도 영집합](strong-measure-zero.md)을 덧셈과 [Baire 범주](baire-category.md)로 특징짓는다. $X\subseteq\mathbb R$ 이 강 측도 영집합인 것은 모든 제1범주 집합 $M$ 에 대해 $X+M$ 이 직선 전체가 되지 않는 것과 같다.

강 측도 영집합의 정의는 구간의 길이를 쓰고 이 특징은 쓰지 않는다. 그래서 거리가 없는 위상군에서도 오른쪽 조건은 그대로 뜻을 가진다.

# 직관

강 측도 영집합인지 보려면 양수열마다 그 길이에 맞는 덮개를 만들어야 한다. 가산 집합 $X=\lbrace x\_1,x\_2,\dots\rbrace$ 는 점마다 구간 하나를 주면 되고, 같은 결론이 길이를 쓰지 않고도 나온다. 제1범주 집합 $M$ 을 아무거나 잡으면

$$
X+M=\bigcup\_{n\ge1}(x\_n+M)
$$

이고 평행이동이 제1범주를 보존하므로 오른쪽은 제1범주 집합의 가산 합집합이다. [Baire 범주 정리](baire-category.md)로 $\mathbb R$ 는 제1범주가 아니므로 $X+M\neq\mathbb R$ 이다.

Cantor 집합 $C$ 에서는 같은 덧셈이 직선을 채운다. $M=C+\mathbb Z$ 는 조밀하지 않은 닫힌 집합을 가산 개 합친 것이라 제1범주다. $x\in\lbrack 0,2\rbrack$ 에 대해 $x/2$ 의 삼진 전개에서 자리값 $0,1,2$ 를 각각 $(0,0),(0,2),(2,2)$ 로 가르면 $u,v\in C$ 와 $u+v=x$ 를 얻으므로 $C+C=\lbrack 0,2\rbrack$ 이고, 따라서 $C+M=\lbrack 0,2\rbrack+\mathbb Z=\mathbb R$ 이다. Cantor 집합이 강 측도 영집합이 아니라는 것이 길이 대신 덧셈으로 판정된다.

# 정의

두 집합 $A,B\subseteq\mathbb R$ 의 **합집합**은

$$
A+B=\lbrace a+b : a\in A,\thinspace b\in B\rbrace
$$

이다. $M\subseteq\mathbb R$ 이 **제1범주 집합**이라 함은 조밀하지 않은 닫힌 집합 가산 개의 합집합에 포함되는 것이다.

**Galvin–Mycielski–Solovay 정리.** $X\subseteq\mathbb R$ 에 대해 다음 둘이 동치다.[^1]

- $X$ 가 강 측도 영집합이다.
- 모든 제1범주 집합 $M$ 에 대해 $X+M\neq\mathbb R$ 이다.

# 성질

## 덮개의 구성

둘째 조건에서 첫째를 얻는 데는 주기적인 닫힌 집합만 쓴다. 덧셈 조건이 주는 한 점에서 지정된 길이의 덮개를 읽어낸다. $0\lt \eta\lt 1$ 에 대해

$$
F(\eta)=\bigcup\_{j\in\mathbb Z}\lbrack j,\thinspace j+\eta\rbrack
$$

는 닫혀 있고 조밀하지 않으므로 제1범주다. 여집합은 길이 $1-\eta$ 인 열린구간을 간격 $1$ 로 늘어놓은 것이다.

$X\subseteq\lbrack 0,L\rbrack$ 이라 하고 양수열 $(\varepsilon\_n)$ 이 주어졌다고 하자. $N=\lceil L\rceil+1$ 로 두고 $\varepsilon=\min(\varepsilon\_1,\dots,\varepsilon\_N)$ 이 $1$ 보다 작다고 해도 된다. $\eta=1-\varepsilon$ 에 대해 $X+F(\eta)\neq\mathbb R$ 이므로 $y\notin X+F(\eta)$ 인 $y$ 가 있고, 이는 $y-X$ 가 $F(\eta)$ 의 여집합에 들어간다는 뜻이다. $y-X$ 는 길이 $L$ 인 구간 안에 있으므로 그 여집합의 열린구간 가운데 $N$ 개 이하와 만나고, 따라서 $X$ 는 길이 $\varepsilon$ 인 구간 $N$ 개로 덮인다. 이 구간들을 $I\_1,\dots,I\_N$ 으로 쓰고 나머지 $I\_n$ 은 한 점으로 두면 $(\varepsilon\_n)$ 에 맞는 덮개다. 유계가 아닌 $X$ 는 $X\cap\lbrack m,m+1\rbrack$ 마다 같은 논법을 쓰고 강 측도 영집합이 가산 합집합에 닫혀 있음을 쓴다. ∎

## 평행이동의 존재

첫째 조건에서 둘째를 얻는 쪽이 Galvin, Mycielski, Solovay 가 보인 부분이다. 제1범주 집합을 $M\subseteq\bigcup\_{k\ge1}F\_k$ 로 쓰면 각 $F\_k$ 는 조밀하지 않으므로 어떤 길이 $\varepsilon\_k$ 의 열린구간과 만나지 않는다. 이 길이들을 양수열로 삼아 $X$ 의 덮개 $(I\_k)$ 를 얻으면, 구간 $I\_k$ 하나는 평행이동으로 $F\_k$ 의 틈에 넣을 수 있다. 하나의 $y$ 로 모든 $k$ 를 동시에 처리하려면 덮개의 구간을 단계마다 좁혀 가며 $y$ 를 고르는 구성이 필요하고, 이때 양수열을 색인 쌍으로 늘려 쓴다.[^2] 얻은 $y$ 는 $(y-X)\cap M=\varnothing$ 을 만족하므로 $y\notin X+M$ 이다. ∎

## 가산 합집합

둘째 조건만 보면 집합 둘을 합쳤을 때 $(X\_1\cup X\_2)+M=(X\_1+M)\cup(X\_2+M)$ 이 직선을 채우지 않는다는 보장이 없다. 정리로 첫째 조건으로 옮기면 강 측도 영집합의 가산 합집합이 강 측도 영집합이므로 둘째 조건도 가산 합집합에 닫힌다.

## 측도 영집합과의 차이

측도가 $0$ 인 집합에는 같은 특징이 없다. $\lbrack 0,1\rbrack$ 안의 Cantor 집합은 측도가 $0$ 이면서 위에서 본 제1범주 집합 $C+\mathbb Z$ 와의 합이 직선 전체다. 덧셈으로 적은 조건은 측도 영집합의 아이디얼보다 작은 아이디얼을 가른다.

# 활용

- [Borel 추측](borel-conjecture.md)을 덧셈으로 적는다. 모든 강 측도 영집합이 가산이라는 명제가 모든 제1범주 집합 $M$ 에 대해 $X+M\neq\mathbb R$ 인 $X$ 는 가산이라는 명제와 같아진다.
- 국소콤팩트 [위상군](topological-groups.md)에서 강 측도 영집합을 정의한다. 둘째 조건은 길이를 쓰지 않고 군 연산과 위상만으로 적힌다.
- 강 측도 영집합들이 이루는 $\sigma$ 아이디얼의 [기수 불변량](cardinal-characteristics.md)을 제1범주 아이디얼 쪽 양으로 바꾸어 계산한다.

[^1]: F. Galvin, J. Mycielski, R. Solovay, "Strong measure zero sets", *Notices of the American Mathematical Society* 26 (1979), A-280. 정리의 진술과 증명이 실린 발표 요지다.

[^2]: Tomek Bartoszyński, Haim Judah, *Set Theory: On the Structure of the Real Line*, A K Peters (1995), 8 장. 두 방향의 증명을 모두 적고 구성의 세부를 다룬다.

# 연관 문서

## 선수지식

- [강 측도 영집합](strong-measure-zero.md)
- [Baire 범주 정리](baire-category.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #set_theory #logic
