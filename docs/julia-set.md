# Julia 집합

# 개요

**Julia 집합(Julia set)** 은 유리함수를 되풀이해 합성할 때 초기값을 조금만 바꿔도 궤도의 행방이 달라지는 점들의 집합이다. $f(z)=z^2$ 를 반복하면 $\lvert z_0\rvert\lt 1$ 인 점은 $0$ 으로, $\lvert z_0\rvert\gt 1$ 인 점은 무한으로 가지만, 단위원 위에서는 초기값을 아주 조금 바꾸어도 궤도가 한 점에 머물기도 하고 원 위를 조밀하게 돌기도 한다. Julia 집합은 이렇게 궤도의 행방이 갈리는 점을 모은 것이고, 반복 $f^n$ 의 모임이 정규족이 아닌 점으로 정의된다.

# 직관

$f(z)=z^2$ 를 반복한다. $z\_0$ 에서 시작해 $z\_1=z\_0^2$, $z\_2=z\_1^2$ 을 차례로 만든다. $\lvert z\_0\rvert\lt 1$ 이면 $\lvert z\_n\rvert=\lvert z\_0\rvert^{2^n}$ 이 $0$ 으로 가고, $\lvert z\_0\rvert\gt 1$ 이면 무한으로 간다. $\lvert z\_0\rvert=1$ 인 점은 어디로 가는가.

단위원 위의 점을 $z\_0=e^{2\pi i\theta}$ 로 쓰면 $z\_n=e^{2\pi i\thinspace 2^n\theta}$ 이므로 궤도가 원 위에 남는다. $\theta$ 를 이진법으로 적어 유한하게 끝나면 몇 번 뒤에 $2^n\theta$ 가 정수가 되어 궤도가 $1$ 에 머문다. $\theta$ 의 이진 전개에 $0$ 과 $1$ 의 모든 유한 배열이 나타나면 궤도가 원 위를 조밀하게 돈다. 두 경우의 $\theta$ 는 얼마든지 가깝게 고를 수 있으므로, 원 위에서는 초기값을 아주 조금 바꾸어도 궤도의 행방이 바뀐다.

원 안과 밖에서는 그렇지 않다. $\lvert z\_0\rvert\lt 1$ 인 점을 하나 잡고 그 점의 작은 원판을 보면, 원판의 모든 점이 $0$ 으로 간다. 원 밖에서도 작은 원판의 모든 점이 무한으로 간다. 행방이 갈리는 자리는 단위원뿐이다.

이 갈림을 함수열 $f, f^2, f^3, \dots$ 의 수렴으로 적는다. $\lvert z\rvert\lt 1$ 에서는 모든 $f^n$ 이 $1$ 로 유계이므로 [Montel 정리](montel-theorem.md)에 따라 어떤 부분열이든 다시 균등수렴하는 부분열을 갖는다. 단위원 위의 점은 아무리 작은 근방을 잡아도 그 안의 원 안쪽 점에서 $f^n\to 0$, 바깥쪽 점에서 $f^n\to\infty$ 이므로, 어느 부분열의 극한도 그 근방에서 연속함수가 되지 못한다. 수렴하는 부분열이 언제나 있는 점 전체를 Fatou 집합, 그 여집합을 Julia 집합이라 한다.

# 정의

## Fatou 집합과 Julia 집합

Riemann 구면(Riemann sphere) $\hat{\mathbb C}=\mathbb C\cup\lbrace\infty\rbrace$ 위의 차수 $d\ge 2$ 유리함수 $f$ 에 대해 $f^n$ 을 $n$ 번 합성으로 쓴다. 점 $z$ 의 어떤 근방에서 함수족 $\lbrace f^n\rbrace\_{n\ge 1}$ 이 정규족(normal family)이면 $z$ 는 **Fatou 집합(Fatou set)** $F(f)$ 에 속한다. 여기서 정규족은 족의 임의의 수열이 구면 거리로 국소 균등수렴하는 부분열을 갖는 족이다. Montel 정리의 정의와 달리 극한이 상수 $\infty$ 여도 된다. 그 여집합

$$
J(f)=\hat{\mathbb C}\setminus F(f)
$$

이 $f$ 의 **Julia 집합**이다.

$f(z)=z^2$ 이면 $\lvert z\rvert\lt 1$ 에서 $f^n\to 0$, $\lvert z\rvert\gt 1$ 과 $\infty$ 의 근방에서 $f^n\to\infty$ 로 국소 균등수렴하므로 두 영역이 $F(f)$ 에 속한다. 단위원 위의 점은 직관 절의 논증대로 정규성이 없으므로 $J(z^2)=\lbrace\lvert z\rvert=1\rbrace$ 이다.

## 채워진 Julia 집합

$f$ 가 다항식이면 궤도 $z, f(z), f^2(z), \dots$ 가 유계인 점 전체를 **채워진 Julia 집합(filled Julia set)** $K(f)$ 라 한다.

$f(z)=z^2$ 이면 $K(f)$ 는 닫힌 단위원판 $\lbrace\lvert z\rvert\le 1\rbrace$ 이다. $f(z)=z^2-2$ 이면 $K(f)$ 는 구간 $\lbrack -2,2\rbrack$ 이다. $z\in\lbrack -2,2\rbrack$ 를 $z=2\cos t$ 로 쓰면 $f(z)=2\cos 2t$ 이므로 궤도가 구간에 남는다.

## 주기점과 승수

$f^p(z)=z$ 인 가장 작은 $p\ge 1$ 이 있으면 $z$ 를 주기 $p$ 의 **주기점(periodic point)** 이라 하고, $\lambda=(f^p)'(z)$ 를 그 **승수(multiplier)** 라 한다. $\lvert\lambda\rvert\gt 1$ 이면 **반발 주기점(repelling periodic point)**, $\lvert\lambda\rvert\lt 1$ 이면 **끌어당기는 주기점(attracting periodic point)** 이다.

$f(z)=z^2$ 의 고정점은 $0$, $1$, $\infty$ 다. $f'(1)=2$ 이므로 $1$ 은 반발 고정점이고 $J(f)$ 위에 있다. $f'(0)=0$ 이므로 $0$ 은 끌어당기는 고정점이고 $F(f)$ 에 속한다. 단위원 위의 점 $e^{2\pi i/3}$ 는 $f^2(z)=z^4$ 로 돌아오는 주기 $2$ 의 점이고, 승수는 $(f^2)'(z)=4z^3=4$ 이므로 반발한다.

# 성질

## 불변성

$$
f^{-1}(J(f))=J(f)=f(J(f))
$$

증명의 요지. $f$ 는 연속인 열린 사상이므로, $z$ 의 근방에서 $\lbrace f^n\rbrace$ 이 정규족인 것과 $f(z)$ 의 근방에서 정규족인 것이 같다. 그러므로 $F(f)$ 가 완전 불변이고, 여집합 $J(f)$ 도 그렇다.

## 공집합이 아님과 완전성

$F(f)$ 는 정의에 따라 열린 집합이므로 $J(f)$ 는 닫힌 집합이다. $d\ge 2$ 이면 $J(f)$ 는 공집합이 아니고 고립점이 없는 **완전집합(perfect set)** 이다.[^1]

증명의 요지(공집합이 아님). $J(f)$ 가 공집합이면 $\lbrace f^n\rbrace$ 이 구면 전체에서 정규족이므로 어떤 부분열 $f^{n\_k}$ 가 구면 전체에서 균등수렴한다. 구면 전체에서의 균등극한은 유리함수이고, 균등수렴하는 유리함수열의 차수는 결국 극한의 차수와 같다. 그런데 $f^{n\_k}$ 의 차수는 $d^{n\_k}\to\infty$ 이므로 모순이다.

$J(f)$ 가 내점을 가지면 $J(f)=\hat{\mathbb C}$ 다. 이 경우는 실제로 일어나며, Lattès 사상(Lattès map)이 그 예다.[^1]

## 근방의 상

$z\in J(f)$ 의 임의의 근방 $U$ 에 대해 $\bigcup\_{n\ge 1}f^n(U)$ 는 $\hat{\mathbb C}$ 에서 최대 두 점을 뺀 집합을 덮는다.

증명의 요지. 세 점 $a,b,c$ 를 모두 빠뜨렸다고 하면 모든 $f^n$ 이 $U$ 에서 $\hat{\mathbb C}\setminus\lbrace a,b,c\rbrace$ 로 가는 함수다. Montel 정리의 세 점 판에 따라 그런 족은 정규족이므로 $z\in F(f)$ 이고, 가정과 어긋난다.

## 반발 주기점의 조밀성

$J(f)$ 는 반발 주기점 전체의 폐포다.[^1] 끌어당기는 주기점은 그 근방 전체가 한 궤도로 모이므로 $F(f)$ 에 속한다.

$z^2$ 의 경우 반발 주기점은 $e^{2\pi i k/(2^p-1)}$ 꼴의 점들이고, 이들은 단위원에서 조밀하다.

## 다항식의 Julia 집합

$f$ 가 다항식이면 $\infty$ 는 끌어당기는 고정점이고 그 근방의 점은 무한으로 간다. 그러므로 $K(f)$ 는 콤팩트하고 $J(f)=\partial K(f)$ 다.

| f | J(f) |
| --- | --- |
| $z^2$ | 단위원 |
| $z^2-2$ | 구간 $\lbrack -2,2\rbrack$ |
| $z^2+c$, $\lvert c\rvert\gt 2$ | [Cantor 집합](cantor-set.md)과 위상동형 |

$z^2-2$ 는 $z=w+w^{-1}$ 로 바꾸면 $w\mapsto w^2$ 가 되고, 단위원이 구간 $\lbrack -2,2\rbrack$ 으로 옮겨진다. $\lvert c\rvert\gt 2$ 이면 임계점 $0$ 의 궤도가 무한으로 가고, $J(z^2+c)$ 는 완전불연속(totally disconnected)이다.[^1]

# 활용

- 반복 함수의 정규성 판정. [Montel 정리](montel-theorem.md)의 세 점 판이 근방의 상 성질의 증명에 쓰이고, 그 성질에서 반발 주기점의 조밀성이 나온다.
- Newton 법의 수렴 영역. [Newton 법](newton-method.md)의 초깃값 민감성 절이 $z^3-1$ 에서 세 근의 유인 영역 경계를 든다. 그 경계가 Newton 사상 $z-f(z)/f'(z)$ 의 Julia 집합이고, 유인 영역은 Fatou 집합의 성분이다.
- 매개변수 공간. $f\_c(z)=z^2+c$ 에서 $J(f\_c)$ 가 연결인 $c$ 전체가 [Mandelbrot 집합](mandelbrot-set.md)이고, 그 판정은 임계점 $0$ 의 궤도가 유계인지로 환원된다.

[^1]: J. Milnor, *Dynamics in One Complex Variable*, 3rd ed. (2006), 4장, 7장, 14장. 근방의 상 성질과 반발 주기점의 조밀성은 A. F. Beardon, *Iteration of Rational Functions* (1991) 의 4장과 6장에 있다.

# 연관 문서

## 선수지식

- [Montel 정리](montel-theorem.md)

## 더 알아보기

- [Fatou 성분의 분류](fatou-components.md)

#complex_analysis #analysis #topology
