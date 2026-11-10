# Kruskal–Katona 정리

# 개요

**Kruskal–Katona 정리(Kruskal–Katona theorem)** 는 크기 $k$ 인 집합을 $m$ 개 고를 때, 그 집합들에 포함되는 크기 $k-1$ 인 집합이 적어도 몇 개인지 정하는 정리다. 점을 이어 삼각형 다섯 개를 만들려면 변이 적어도 몇 개 필요한가를 묻는 문제가 이 꼴이다. 삼각형은 꼭짓점 세 개의 집합이고, 변은 그 안에 든 두 꼭짓점의 집합이다.

이 정리는 $m$ 을 이항계수의 합으로 펼친 식 하나로 최솟값을 주고, 크기 $k$ 인 집합을 정해진 순서로 앞에서부터 $m$ 개 고르면 그 최솟값이 나온다는 것을 보인다.

# 직관

꼭짓점 넷 $1,2,3,4$ 를 모두 이으면 변이 $6$ 개이고 삼각형 $123,124,134,234$ 네 개가 생긴다. 변 $5$ 개 이하로는 삼각형 넷을 만들 수 없고, 이것이 아래 정리의 한 경우다.

삼각형을 하나 더 만든다. 꼭짓점 $1,2,3,4$ 위의 삼각형은 이미 넷 모두 썼으므로 새 꼭짓점 $5$ 가 필요하다. $5$ 를 포함하는 삼각형 $125$ 는 새 변 $15,25$ 를 쓰고 변 $12$ 는 이미 있다. 그래서 삼각형 다섯 개에는 변이 $6+2=8$ 개 필요하다.

이 셈에서 $5=\binom43+\binom22$ 이다. 앞 항 $\binom43$ 은 꼭짓점 넷을 다 이은 부분이고 변 $\binom42=6$ 개를 쓴다. 뒤 항 $\binom22$ 는 새 꼭짓점이 기존 꼭짓점 둘과 만드는 삼각형 하나이고 새 변 $\binom21=2$ 개를 쓴다. 각 항의 아래 숫자를 하나씩 줄이면 필요한 변의 수가 나온다.

# 정의

## 그림자

크기 $k$ 인 집합들의 족 $\mathcal A$ 에서, $\mathcal A$ 의 어떤 원소에 포함되는 크기 $k-1$ 인 집합 전체를 $\mathcal A$ 의 **그림자(shadow)** $\partial\mathcal A$ 라 한다.

$$
\partial\mathcal A=\Bigl\lbrace B:\ \vert B\vert=k-1,\ B\subset A\ \text{for some}\ A\in\mathcal A\Bigr\rbrace
$$

직관 절의 $\mathcal A=\lbrace 123,124,134,234,125\rbrace$ 에서 $\partial\mathcal A=\lbrace 12,13,23,14,24,34,15,25\rbrace$ 이고 $\vert\partial\mathcal A\vert=8$ 이다.

## 이항 전개

양의 정수 $m$ 과 $k$ 에 대해 다음을 만족하는 정수 $a\_k\gt a\_{k-1}\gt\cdots\gt a\_s\ge s\ge1$ 이 하나뿐이다.

$$
m=\binom{a_k}{k}+\binom{a_{k-1}}{k-1}+\cdots+\binom{a_s}{s}
$$

이것을 $m$ 의 **$k$-이항 전개($k$-binomial representation)** 라 한다. $a\_k$ 는 $\binom{a_k}k\le m$ 인 가장 큰 정수이고, 남은 $m-\binom{a_k}k$ 를 $k-1$ 에 대해 같은 방법으로 펼친다. $k=3$, $m=5$ 이면 $\binom43=4\le5\lt\binom53=10$ 이므로 $a\_3=4$ 이고, 남은 $1=\binom22$ 에서 $a\_2=2$ 다.

전개에서 다음 값을 정의한다.

$$
\partial\_k(m)=\binom{a_k}{k-1}+\binom{a_{k-1}}{k-2}+\cdots+\binom{a_s}{s-1}
$$

$\partial\_3(5)=\binom42+\binom21=8$ 이다.

## 쌍대사전식 순서

크기가 같은 두 유한 자연수 집합 $A\ne B$ 에서 대칭차 $A\triangle B$ 의 가장 큰 원소가 $B$ 에 있으면 $A$ 가 $B$ 보다 앞이라고 한다. 이 순서를 **쌍대사전식 순서(colexicographic order)** 라 한다. 크기 $3$ 인 집합은 다음 순서다.

$$
123,\ 124,\ 134,\ 234,\ 125,\ 135,\ 235,\ 145,\ 245,\ 345,\ 126,\ \dots
$$

앞의 $\binom a3$ 개는 $\lbrace 1,\dots,a\rbrace$ 의 크기 $3$ 인 부분집합 전체다. 직관 절의 다섯 삼각형이 이 순서의 처음 다섯 개다.

# 성질

## 정리

정리. 크기 $k$ 인 집합 $m$ 개의 족 $\mathcal A$ 에서 다음이 성립한다[^1][^2].

$$
\vert\partial\mathcal A\vert\ge\partial\_k(m)
$$

쌍대사전식 순서의 처음 $m$ 개에서 등호가 성립한다.

등호 쪽은 직접 센다. 처음 $\binom{a_k}k$ 개는 $\lbrace 1,\dots,a\_k\rbrace$ 의 $k$ 부분집합 전체이고 그림자가 $\binom{a_k}{k-1}$ 개다. 그다음 $\binom{a_{k-1}}{k-1}$ 개는 원소 $a\_k+1$ 에 $\lbrace 1,\dots,a\_{k-1}\rbrace$ 의 $(k-1)$ 부분집합을 붙인 것이고, 새 그림자는 $a\_k+1$ 을 포함하는 $\binom{a_{k-1}}{k-2}$ 개다. 이것을 끝까지 되풀이하면 $\partial\_k(m)$ 이 나온다.

증명의 요지. 원소 $i\lt j$ 에 대해 $\mathcal A$ 의 원소에서 $j$ 를 $i$ 로 바꾼 집합이 $\mathcal A$ 에 없으면 바꾸는 조작을 **압축(compression)** 이라 한다. 압축은 $\vert\mathcal A\vert$ 를 그대로 두고 그림자를 늘리지 않는다. 더 압축되지 않는 족에서 가장 큰 원소 $n$ 을 포함하는 집합과 포함하지 않는 집합으로 나누면, 두 부분의 그림자 사이의 포함관계가 생겨 $n$ 과 $k$ 에 대한 귀납법이 돌아간다[^3].

## Lovász 꼴

$m=\binom xk$ 인 실수 $x\ge k$ 를 잡으면 다음이 성립한다. $\binom xk=x(x-1)\cdots(x-k+1)/k!$ 이다.

$$
\vert\partial\mathcal A\vert\ge\binom{x}{k-1}
$$

이 꼴은 이항 전개를 쓰지 않아 계산에 쓰기 쉽고, $m$ 이 $\binom ak$ 꼴일 때 정리와 같다. $m=5$, $k=3$ 이면 $x\approx4.21$ 이고 하한이 $6.76$ 이라 그림자는 $7$ 이상이다. 정리의 $8$ 보다 약하다.

## 단체 복합체의 면의 수

유한집합들의 족이 부분집합을 취하는 것에 닫혀 있으면 **추상 단체 복합체(abstract simplicial complex)** 라 하고, 그 원소를 면(face)이라 한다. 크기 $k$ 인 면의 수를 $f\_k$ 로 쓴다.

정리. $f\_1,f\_2,\dots$ 가 어떤 추상 단체 복합체의 면의 수인 것은 모든 $k\ge2$ 에서 $f\_{k-1}\ge\partial\_k(f\_k)$ 인 것과 동치다[^2].

크기 $k$ 인 면들의 그림자는 모두 면이므로 조건이 필요하다. 각 크기에서 쌍대사전식 순서의 처음 $f\_k$ 개를 고른 족이 복합체가 되므로 조건이 충분하다. 직관 절에서 $f\_3=5$ 이면 $f\_2\ge8$ 이어야 하고, $f\_2=8$ 인 복합체가 있다.

# 활용

- [Sperner 정리](sperner-theorem.md). 그림자의 크기에서 $\vert\partial\mathcal A\vert/\binom n{k-1}\ge\vert\mathcal A\vert/\binom nk$ 가 나오고, 이 부등식을 층마다 이어 붙이면 LYM 부등식(Lubell–Yamamoto–Meshalkin inequality)이 증명된다.
- [Erdős–Ko–Rado 정리](erdos-ko-rado.md). 서로 만나는 $k$ 집합족의 여집합족에 이 정리를 적용하면 족의 크기가 $\binom{n-1}{k-1}$ 이하라는 것이 증명된다[^4].
- 가환대수. [Macaulay 정리](macaulay-theorem.md)는 다항식환을 동차 이데알로 나눈 환의 Hilbert 함수(Hilbert function)가 만족하는 부등식을 같은 이항 전개로 적는다. 이 정리는 그 가운데 제곱 인수가 없는 단항식의 경우에 해당한다.

[^1]: J. B. Kruskal, "The number of simplices in a complex", in *Mathematical Optimization Techniques*, University of California Press, 1963, 251–278.
[^2]: G. O. H. Katona, "A theorem of finite sets", in *Theory of Graphs*, Akadémiai Kiadó, 1968, 187–207.
[^3]: P. Frankl, "A new short proof for the Kruskal–Katona theorem", *Discrete Mathematics* 48 (1984), 327–329.
[^4]: D. E. Daykin, "Erdős–Ko–Rado from Kruskal–Katona", *Journal of Combinatorial Theory, Series A* 17 (1974), 254–255.

# 연관 문서

## 선수지식

- [Sperner 정리](sperner-theorem.md)

## 더 알아보기

- [Harper 정리](harper-theorem.md)
- [Macaulay 정리](macaulay-theorem.md)

#combinatorics #order_theory
