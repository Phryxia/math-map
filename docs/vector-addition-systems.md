# 벡터 덧셈 계

# 개요

**벡터 덧셈 계(vector addition system, VAS)** 는 자연수를 성분으로 하는 벡터에 정해진 정수 벡터를 하나씩 더해 가되, 성분이 음수가 되는 덧셈은 하지 못하게 하는 계산 모형이다. 창고에 부품 $A$ 가 한 개 있고, $A$ 하나를 $B$ 두 개로 바꾸는 공정과 $B$ 하나를 $A$ 하나로 되바꾸는 공정이 있다. 이 두 공정만으로 창고를 $A$ 두 개, $B$ 없음의 상태로 만들 수 있는지, $B$ 를 다섯 개 이상 쌓을 수 있는지가 이 모형의 물음이다. 상태가 무한히 많아도 이런 물음은 알고리즘으로 판정되고, 벡터 덧셈 계는 그 판정 방법을 준다.

# 직관

창고의 상태를 부품 수의 쌍 $(A,B)$ 로 적는다. 첫 공정은 $A$ 를 하나 쓰고 $B$ 를 둘 만들므로 상태에 $(-1,2)$ 를 더하고, 둘째 공정은 $(1,-1)$ 을 더한다. 부품이 모자라면 공정을 돌리지 못하므로, 더한 결과에 음수 성분이 생기는 덧셈은 하지 않는다.

$(1,0)$ 에서 첫 공정, 둘째 공정, 둘째 공정을 차례로 돌리면 다음과 같다.

$$
(1,0)\to(0,2)\to(1,1)\to(2,0)
$$

그래서 $(2,0)$ 에 도달한다. 도달하지 못한다는 답을 내려면 모든 공정 순서를 확인해야 하는데, 상태가 무한히 많으므로 하나씩 찾아서는 끝나지 않는다.

위 계산에서 $(1,0)$ 에서 $(1,1)$ 로 가는 데 쓴 두 공정을 $(1,1)$ 에서 다시 돌리면 $(1,2)$ 가 된다. 부품이 더 많은 상태에서는 같은 공정이 언제나 돌아가므로, 이 두 공정을 되풀이하면 $B$ 는 얼마든지 쌓인다. $B$ 를 다섯 개 이상 쌓을 수 있는지는 이렇게 "늘어나는 성분은 무한으로 둔다" 는 계산으로 판정된다. [레지스터 기계](register-machines.md)에서 칸이 $0$ 인지 확인하는 명령을 뺀 것이 이 모형이고, 그 확인이 없어서 이런 판정이 가능하다.

# 정의

## 벡터 덧셈 계와 도달

$d$ 차원 **벡터 덧셈 계** 는 정수 벡터의 유한 집합 $V\subset\mathbb Z^d$ 다. 그 **구성(configuration)** 은 $\mathbb N^d$ 의 원소다. 구성 $x$ 와 $v\in V$ 에 대해 $x+v\in\mathbb N^d$ 이면 $x\to x+v$ 로 적고, 이 화살표를 유한 번 이은 것을 $x\to^\ast y$ 로 적는다.

직관 절의 창고는 $V=\lbrace(-1,2),(1,-1)\rbrace$ 인 2 차원 벡터 덧셈 계이고, $(1,0)\to^\ast(2,0)$ 이다. $(0,0)$ 에서는 두 벡터 모두 음수 성분을 만드므로 아무 화살표도 나가지 않는다.

## 도달 가능성과 덮개 가능성

두 문제를 정의한다. 입력은 $V$ 와 구성 $x,y$ 다.

- **도달 가능성 문제(reachability problem)** 는 $x\to^\ast y$ 인지 묻는다.
- **덮개 가능성 문제(coverability problem)** 는 $y\le z$ 이고 $x\to^\ast z$ 인 $z$ 가 있는지 묻는다. 부등호는 성분마다의 비교다.

창고에서 $(1,0)$ 으로부터 $(0,5)$ 의 덮개 가능성은 " $B$ 를 다섯 개 이상 쌓을 수 있는가" 이고, $(1,0)\to^\ast(0,5)$ 이므로 답은 예다. 도달 가능성을 풀면 덮개 가능성도 풀리지만 거꾸로는 아니다.

## Petri 그물

**Petri 그물(Petri net)** 은 자리(place)의 유한 집합 $P$ 와 전이(transition)의 유한 집합 $T$, 그리고 각 전이 $t$ 의 입력 벡터 $\mathrm{pre}(t)\in\mathbb N^P$ 와 출력 벡터 $\mathrm{post}(t)\in\mathbb N^P$ 로 이루어진다. 표시(marking) $m\in\mathbb N^P$ 에서 $m\ge\mathrm{pre}(t)$ 이면 $t$ 가 발화(fire)할 수 있고, 발화한 뒤의 표시는 다음이다.

$$
m-\mathrm{pre}(t)+\mathrm{post}(t)
$$

창고를 Petri 그물로 쓰면 자리가 $A,B$ 이고 전이가 둘이다. 첫 전이는 $\mathrm{pre}=(1,0)$, $\mathrm{post}=(0,2)$, 둘째 전이는 $\mathrm{pre}=(0,1)$, $\mathrm{post}=(1,0)$ 이다. 전이 $t$ 마다 벡터 $\mathrm{post}(t)-\mathrm{pre}(t)$ 를 두면 같은 차원의 벡터 덧셈 계가 나온다.

# 성질

## Petri 그물과의 동치

Petri 그물의 발화 조건 $m\ge\mathrm{pre}(t)$ 는 벡터 덧셈 계의 조건 $m+\mathrm{post}(t)-\mathrm{pre}(t)\ge 0$ 보다 강하다. 두 조건은 한 전이가 같은 자리를 쓰고 다시 채울 때만 다르다. 그런 전이를 "입력을 가져가 새 자리에 맡기는 전이" 와 "맡긴 것을 출력으로 내는 전이" 로 쪼개면 두 모형의 도달 관계가 서로 옮겨진다. 그래서 두 모형의 판정 문제는 같은 문제로 다뤄진다.

## 단조성

정리. $x\to^\ast y$ 이면 모든 $z\in\mathbb N^d$ 에 대해 $x+z\to^\ast y+z$ 다.

증명의 요지. $x$ 에서 $y$ 로 가는 각 중간 구성에 $z$ 를 더해도 성분은 음수가 되지 않으므로 같은 벡터 순서가 그대로 쓰인다.

직관 절에서 $(1,0)\to^\ast(1,1)$ 이므로 단조성으로 $(1,1)\to^\ast(1,2)$, $(1,2)\to^\ast(1,3)$ 이 이어진다. 레지스터 기계의 영 검사(zero test)는 칸이 클 때와 $0$ 일 때 다른 명령으로 가므로 단조성이 깨진다.

## Dickson 보조정리

정리. $\mathbb N^d$ 의 무한 수열 $x\_1,x\_2,\dots$ 에는 $i\lt j$ 이고 $x\_i\le x\_j$ 인 쌍이 있다. 이것이 **Dickson 보조정리(Dickson's lemma)** 이고, 성분마다 비교하는 $\mathbb N^d$ 가 [정렬 준순서](well-quasi-orders.md)라는 진술이다.

증명의 요지. 첫 성분이 줄지 않는 무한 부분수열을 고른다. 자연수의 무한 수열은 그런 부분수열을 가진다. 그 안에서 둘째 성분이 줄지 않는 무한 부분수열을 다시 고르고, 이를 $d$ 번 하면 모든 성분이 줄지 않는 무한 부분수열이 남는다.

## Karp–Miller 나무

**Karp–Miller 나무(Karp–Miller tree)** 는 성분에 $\omega$ 를 허용한 구성을 마디로 하는 나무다. $\omega$ 는 모든 자연수보다 크고 $\omega\pm n=\omega$ 다.

뿌리는 시작 구성 $x$ 이고, 마디 $u$ 에서 $u+v\ge 0$ 인 $v\in V$ 마다 자식을 둔다. 자식 $w=u+v$ 의 조상 가운데 $w$ 이하인 마디 $u'$ 가 있으면, $u'$ 보다 큰 $w$ 의 성분을 모두 $\omega$ 로 바꾼다. 조상 가운데 $w$ 와 같은 마디가 있으면 $w$ 를 잎으로 두고 더 펼치지 않는다. Karp 와 Miller 가 1969 년에 도입했다[^1].

창고에서 뿌리 $(1,0)$ 의 자식은 $(0,2)$ 이고, 그 자식 $(1,1)$ 은 조상 $(1,0)$ 보다 둘째 성분이 크므로 $(1,\omega)$ 가 된다. 단조성으로 $(1,1)$ 에서 같은 두 단계를 되풀이할 수 있으므로 $\omega$ 는 "얼마든지 크게 만들 수 있다" 는 뜻이다.

정리. Karp–Miller 나무는 유한하고, $y$ 가 $x$ 에서 덮개 가능한 것은 나무의 어느 마디가 $y$ 이상인 것과 동치다[^1].

증명의 요지. 나무가 무한이면 각 마디의 자식이 $\lvert V\rvert$ 개 이하이므로 [König 보조정리](konig-lemma.md)로 무한 가지가 있다. 그 가지에 Dickson 보조정리를 쓰면 $u'\le w$ 인 조상과 자손이 끝없이 나오고, 같지 않으면 $\omega$ 성분이 하나 늘어난다. $\omega$ 성분은 $d$ 개를 넘지 못하므로 결국 같은 마디가 되풀이되어 잎이 된다. 동치는 $\omega$ 를 만든 되풀이를 단조성으로 원하는 횟수만큼 돌려 증명된다.

같은 나무에 $\omega$ 가 없으면 도달 집합이 유한하므로, 도달 집합의 유한성도 판정된다.

## 판정의 복잡도

- 덮개 가능성은 [공간 복잡도](space-complexity.md)의 클래스 EXPSPACE(exponential space)에 대해 완전하다. 하한은 Lipton 이 1976 년에, 상한은 Rackoff 가 1978 년에 증명했다[^2]. Karp–Miller 나무는 이보다 훨씬 클 수 있다.
- 도달 가능성은 판정 가능하다. Mayr 가 1981 년에, Kosaraju 가 1982 년에 증명했고, Leroux 는 도달하지 못할 때마다 그것을 확인하는 반선형 불변 집합이 있음을 보였다[^3].
- 도달 가능성의 복잡도는 [Ackermann 함수](recursive-functions.md)의 증가에 맞먹는다. 상한은 Leroux 와 Schmitz 가 2019 년에, 하한은 Czerwiński 와 Orlikowski, Leroux 가 2021 년에 따로 증명했다[^4].

## 영 검사와 결정 불가능성

레지스터 기계에서 칸이 $0$ 인지에 따라 갈라지는 명령을 칸 두 개에 허용하면 Minsky 정리(Minsky's theorem)로 [정지 문제](halting-problem.md)를 흉내 내므로 도달 가능성이 결정 불가능하다. 영 검사가 없는 레지스터 기계는 명령 번호를 상태로 둔 벡터 덧셈 계, 곧 상태가 있는 벡터 덧셈 계(vector addition system with states, VASS)와 같다. Hopcroft 와 Pansiot 는 $d$ 차원 VASS 가 $d+3$ 차원 벡터 덧셈 계로 옮겨짐을 보였다[^5].

## 반선형성

$b\in\mathbb N^d$ 와 유한 집합 $\lbrace p\_1,\dots,p\_r\rbrace\subset\mathbb N^d$ 에 대해 다음 꼴의 집합을 선형 집합(linear set)이라 한다.

$$
\lbrace b+n\_1p\_1+\dots+n\_rp\_r : n\_1,\dots,n\_r\in\mathbb N\rbrace
$$

선형 집합의 유한 합집합을 **반선형 집합(semilinear set)** 이라 한다. Hopcroft 와 Pansiot 는 5 차원 이하 벡터 덧셈 계의 도달 집합이 반선형이고, 6 차원에서는 반선형이 아닌 도달 집합이 있음을 보였다[^5].

창고는 2 차원이므로 $(1,0)$ 에서의 도달 집합은 반선형이다.

# 활용

- 동시성 프로그램의 검증. 같은 코드를 실행하는 스레드 수를 각 프로그램 위치마다 세면 프로그램이 Petri 그물이 되고, 오류 위치에 스레드가 하나라도 오는지가 덮개 가능성 문제다.
- 화학 반응망. 분자 종마다 개수를 성분으로 두면 반응식 하나가 벡터 하나이고, 어떤 분자 조성에 이를 수 있는지가 도달 가능성 문제다.
- 업무 흐름 모형. 작업 단계와 자원을 자리로 둔 Petri 그물에서, 흐름이 끝 상태에 반드시 이를 수 있는지를 도달 가능성으로 확인한다.

[^1]: R. M. Karp, R. E. Miller, "Parallel program schemata", Journal of Computer and System Sciences 3 (1969), 147–195.
[^2]: C. Rackoff, "The covering and boundedness problems for vector addition systems", Theoretical Computer Science 6 (1978), 223–231.
[^3]: J. Leroux, "Vector addition system reachability problem: a short self-contained proof", ACM Symposium on Principles of Programming Languages (POPL) 2011.
[^4]: W. Czerwiński, Ł. Orlikowski, "Reachability in vector addition systems is Ackermann-complete", IEEE Symposium on Foundations of Computer Science (FOCS) 2021; J. Leroux, "The reachability problem for Petri nets is not primitive recursive", FOCS 2021.
[^5]: J. Hopcroft, J.-J. Pansiot, "On the reachability problem for 5-dimensional vector addition systems", Theoretical Computer Science 8 (1979), 135–159.

# 연관 문서

## 선수지식

- [레지스터 기계](register-machines.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #algorithms #order_theory
