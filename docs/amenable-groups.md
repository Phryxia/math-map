# 순종군

# 개요

**순종군(amenable group)** 은 함수의 평균을 군의 작용에 불변으로 정할 수 있는 군이다. 유한군에서는 값을 모두 더해 원소 수로 나누면 되고, 정수의 덧셈군 $\mathbb Z$ 에서는 $-n$ 부터 $n$ 까지의 평균을 내면 한 칸 옮겨도 평균이 거의 변하지 않는다. 계수 2 인 자유군에서는 이런 평균이 존재하지 않고, 이 차이로 [Banach–Tarski 분해](banach-tarski.md)처럼 공을 쪼개 두 개로 만드는 역설이 어느 군에서 생기는지 판정한다.

# 직관

유한군 $G$ 에서 함수 $f\colon G\to\mathbb R$ 의 평균은 값을 모두 더해 원소 수로 나눈 것이다. $f$ 의 자리를 군의 원소만큼 옮겨도 같은 값들을 순서만 바꿔 더하므로 평균이 변하지 않는다.

$\mathbb Z$ 에서는 원소가 무한히 많아 이 계산이 되지 않는다. 대신 $F\_N=\lbrace -N,\dots,N\rbrace$ 에서 평균을 내고 $N$ 을 키운다. $f$ 를 $1$ 만큼 옮기면 $F\_N$ 위의 합에서 양 끝의 항 하나씩만 달라지고, 그 차이를 $2N+1$ 로 나눈 값이 $0$ 으로 간다. 한 칸 옮겼을 때 달라지는 부분이 전체에 비해 작은 유한 집합의 열이 있으면 이 계산이 된다.

# 정의

## 평균

**평균(mean)** 은 $G$ 위의 유계 실함수 공간 $\ell^\infty(G)$ 에서 $\mathbb R$ 로 가는 선형범함수 $m$ 가운데 $m(\mathbf 1)=1$ 이고 $f\ge 0$ 일 때 $m(f)\ge 0$ 인 것이다.

유한군 $G$ 에서 값을 모두 더해 원소 수로 나눈 $m(f)=\frac{1}{\lvert G\rvert}\sum\_{x\in G}f(x)$ 가 평균이다. 원소 $x\_0$ 하나를 골라 $m(f)=f(x\_0)$ 로 두어도 평균이다.

## 불변 평균

$g\in G$ 에 대해 $(g\cdot f)(x)=f(g^{-1}x)$ 로 둔다. **왼쪽 불변 평균(left-invariant mean)** 은 모든 $g$ 와 $f$ 에서 $m(g\cdot f)=m(f)$ 인 평균 $m$ 이다. 왼쪽 불변 평균을 갖는 군이 **순종군** 이다.

유한군에서 $g\cdot f$ 의 값들은 $f$ 의 값들을 순서만 바꾼 것이므로 위의 원소 수로 나눈 평균은 왼쪽 불변이고, 유한군은 순종군이다. 한 점에서의 값 $m(f)=f(x\_0)$ 은 $(g\cdot f)(x\_0)=f(g^{-1}x\_0)$ 가 $f(x\_0)$ 와 다를 수 있으므로, $G$ 가 원소 둘 이상이면 왼쪽 불변이 아니다.

## Følner 열

**Følner 열(Følner sequence)** 은 $G$ 의 유한 부분집합의 열 $\lbrace F\_n\rbrace$ 가운데 모든 $g\in G$ 에서 다음을 만족하는 것이다.

$$\lim\_{n\to\infty}\frac{\lvert gF\_n\thinspace\triangle\thinspace F\_n\rvert}{\lvert F\_n\rvert}=0$$

$gF\_n$ 은 $F\_n$ 의 원소마다 왼쪽에 $g$ 를 곱한 집합이고, $\triangle$ 는 대칭차(symmetric difference)다.

덧셈군 $\mathbb Z$ 에서 $F\_n=\lbrace -n,\dots,n\rbrace$ 이 Følner 열이다. $g=1$ 이면 $gF\_n=\lbrace -n+1,\dots,n+1\rbrace$ 이고 대칭차는 $\lbrace -n,n+1\rbrace$ 이므로 비는 $2/(2n+1)$ 이다. $g=k$ 이면 비가 $2\lvert k\rvert/(2n+1)$ 이고 $0$ 으로 간다. 유한군에서는 모든 $n$ 에서 $F\_n=G$ 로 둔 열이 Følner 열이다. $gG=G$ 이므로 대칭차가 공집합이다.

# 성질

## 평균과 유한가법 측도

평균 $m$ 에서 $\mu(A)=m(\mathbf 1\_A)$ 로 두면 $\mu$ 는 $G$ 의 멱집합 위의 유한가법 확률측도(finitely additive probability measure)다. $m$ 이 왼쪽 불변이면 $\mu$ 도 왼쪽 평행이동에 불변이다. 거꾸로 이런 $\mu$ 가 주어지면 유계함수를 $\mu$ 로 적분한 값이 평균이다.

## 두 정의의 동치

**정리 (Følner).** 셀 수 있는 이산군 $G$ 에 대해 $G$ 가 순종인 것과 $G$ 에 Følner 열이 있는 것이 동치다.[^1]

Følner 열에서 평균을 만드는 쪽은 $m\_n(f)$ 를 $F\_n$ 위의 평균으로 두고 부분극한을 잡는다. 평균 전체의 집합이 $\ell^\infty(G)^\ast$ 안에서 약별 위상(weak-star topology)에 대해 콤팩트하므로 부분극한이 있고, Følner 조건이 그 극한의 불변성을 준다. 부분극한을 고르는 데 선택 원리를 쓰므로 얻은 평균은 명시적이지 않다.

## 순종인 군

**정리.** 유한군과 아벨군은 순종이다.[^1]

유한군에서는 균등분포가 불변 평균이다. 아벨군에서는 평균들의 집합이 볼록 콤팩트이고 작용이 가환인 아핀 사상족이므로 Markov–[Kakutani 고정점 정리](kakutani-fixed-point.md)가 불변인 평균을 준다.

**정리.** 순종군의 부분군, 몫군, 순종군에 의한 확대, 순종 부분군들의 직극한은 모두 순종이다.[^1]

[가해군](solvable-groups.md)은 아벨군의 확대를 되풀이한 것이므로 이 닫힘 성질에서 순종이다.

## 자유군

**정리.** 계수 2 인 자유군 $F\_2$ 는 순종이 아니다.

$F\_2$ 를 첫 글자로 가른 조각들로 $F\_2=S(a)\cup aS(a^{-1})=S(b)\cup bS(b^{-1})$ 가 성립한다. 불변 평균 $m$ 이 있으면 $\mu=m$ 이 주는 유한가법 확률측도에서 $1=\mu(S(a))+\mu(S(a^{-1}))$ 와 $1=\mu(S(b))+\mu(S(b^{-1}))$ 가 나오고, 네 조각이 서로소이므로 합이 $1$ 을 넘지 못한다는 것과 어긋난다.

## 역설적 분해와의 동치

**정리 (Tarski).** 군 $G$ 가 순종인 것과 $G$ 가 왼쪽 곱셈 작용에 대해 $G$-역설적이 아닌 것이 동치다.[^1]

한 방향은 위 자유군 논증과 같다. 역설적 분해가 있으면 불변 유한가법 측도에서 $1=2$ 가 나온다. 다른 방향은 순종이 아닌 군에서 역설적 분해를 구성하는 것이고, Hall 결혼 정리(Hall's marriage theorem)를 쓴다.

## von Neumann 문제

순종이 아닌 군이 $F\_2$ 를 부분군으로 갖는지를 von Neumann 이 물었고, Ol'shanskii 가 그렇지 않은 군을 구성했다.[^2] Tarski 괴물군(Tarski monster group)이 그 예이며, 모든 진부분군이 소수 위수 순환군이므로 $F\_2$ 를 담지 않는다.

# 활용

- Banach–Tarski 분해가 차원에 따라 갈리는 이유다. 직선과 평면의 운동군은 가해군이라 순종이고, $\mathrm{SO}(3)$ 은 자유 부분군을 가져 순종이 아니다.
- [측도](measure.md)를 멱집합 전체로 넓히는 문제에서 유한가법까지 약하게 하면 순종군이 작용하는 경우에 답이 있다. 평면 위의 Banach 측도가 그 예다.
- [군 작용](group-actions.md)의 평균화 논증이 쓰이는 범위를 정한다. 유한군에서 표현의 불변 내적을 만드는 평균화가 순종군까지 확장된다.

[^1]: S. Wagon, *The Banach–Tarski Paradox*, Cambridge University Press, 1985. 10장과 12장.

[^2]: A. Yu. Ol'shanskii, *On the question of the existence of an invariant mean on a group*, Uspekhi Mat. Nauk 35 (1980), 199–200.

# 연관 문서

## 선수지식

- [군 작용](group-actions.md)
- [측도](measure.md)

## 더 알아보기

- [Haagerup 성질](haagerup-property.md)

#group_theory #measure_theory #algebra #functional_analysis
