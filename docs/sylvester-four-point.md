# Sylvester 네 점 문제

# 개요

**Sylvester 네 점 문제(Sylvester's four-point problem)** 는 평면 영역 $R$ 에서 균등하게 뽑은 네 점이 볼록 사각형의 꼭짓점을 이룰 확률 $q(R)$ 을 묻는 문제다. 1864 년 Sylvester 가 낸 문제이고, 볼록 영역에서는 삼각형이 확률을 가장 작게, 타원이 가장 크게 한다(Blaschke).

볼록 위치에 있는 네 점은 두 대각선이 교차하는 사각형을 이루므로, 이 확률의 하한은 [완전그래프의 교차수](complete-graph-crossing-number.md)를 직선으로 그릴 때의 점근 상수와 같다(Scheinerman–Wilf).

# 직관

삼각형 영역에서 네 점을 뽑는다. 네 점이 볼록 위치가 아닌 것은 한 점이 나머지 세 점이 만드는 삼각형 안에 들어가는 경우다. 앞의 세 점을 뽑았을 때 넷째 점이 그 삼각형 안에 들어갈 확률은 삼각형의 넓이를 $R$ 의 넓이로 나눈 값이다.

어느 점이 안쪽 점이 될지는 넷 가운데 하나이고 두 점이 동시에 안쪽일 수는 없으므로, 볼록 위치가 아닐 확률은 그 비의 기댓값의 $4$ 배다. 삼각형 영역에서 세 점이 만드는 삼각형의 넓이는 평균이 전체 넓이의 $1/12$ 이므로 볼록 위치가 아닐 확률이 $4/12=1/3$ 이고, 볼록 위치일 확률은 $2/3$ 이다.

# 정의

$R\subset\mathbb R^2$ 를 넓이가 유한하고 양인 열린집합이라 하고, $R$ 에서 균등분포를 따르는 독립 [확률변수](random-variables.md) $X\_1,\dots,X\_4$ 를 뽑는다. 네 점이 볼록 위치에 있을 확률

$$
q(R)=\mathbb P\bigl(X\_1,\dots,X\_4\text{ 가 볼록 사각형의 꼭짓점}\bigr)
$$

을 $R$ 의 **Sylvester 확률** 이라 한다. 직관 절의 논증으로

$$
q(R)=1-\frac{4\thinspace\mathbb E\lbrack\mathrm{area}(X\_1X\_2X\_3)\rbrack}{\mathrm{area}(R)}
$$

이다.

# 성질

## 볼록 영역의 극값

**정리(Blaschke, 1917).** $R$ 이 볼록 영역이면

$$
\frac23\le q(R)\le 1-\frac{35}{12\pi^2}
$$

이고, 왼쪽 등호는 삼각형에서, 오른쪽 등호는 타원에서 성립한다[^1].

오른쪽 값은 원판에서 세 점이 만드는 삼각형의 평균 넓이가 원판 넓이의 $35/(48\pi^2)$ 이라는 계산에서 나오고, 약 $0.7045$ 다. $q(R)$ 은 아핀 변환으로 바뀌지 않으므로 모든 삼각형이 같은 값을, 모든 타원이 같은 값을 갖는다.

## 직선 교차수와의 관계

평면의 점 $n$ 개를 꼭짓점으로 하고 모든 쌍을 선분으로 이은 $K\_n$ 의 그림에서, 교차는 볼록 위치에 있는 네 점마다 정확히 하나 생긴다. 볼록 사각형은 두 대각선이 한 번 교차하고, 한 점이 삼각형 안에 있는 네 점은 교차를 만들지 않기 때문이다. 그러므로 $K\_n$ 의 직선 교차수 $\overline{\mathrm{cr}}(K\_n)$ 은 $n$ 개의 점 가운데 볼록 위치인 네 점 묶음의 최소 개수다.

**정리(Scheinerman–Wilf, 1994).** 극한 $\nu^\ast=\lim\_{n\to\infty}\overline{\mathrm{cr}}(K\_n)/\binom n4$ 가 존재하고, 넓이가 유한한 모든 열린집합 $R$ 에 대한 $q(R)$ 의 하한과 같다[^2].

점 $n$ 개를 고르는 문제와 영역 $R$ 을 고르는 문제가 서로를 근사한다. 점집합이 주어지면 각 점을 작은 원판으로 부풀린 영역을, 영역이 주어지면 그 안에서 뽑은 점 $n$ 개를 쓴다. 볼록 영역의 최솟값은 $2/3$ 이지만, 볼록이 아닌 영역에서는 $q(R)$ 이 훨씬 작아질 수 있고 $\nu^\ast$ 는 $3/8$ 과 $0.381$ 사이에 있다[^3].

# 활용

- **교차수의 하한.** $\nu^\ast\ge 3/8$ 은 점집합의 $k$ 변($k$-edge), 곧 한쪽에 정확히 $k$ 개의 점을 두는 직선의 개수에 대한 하한에서 나왔다. 교차수 문제가 이산 기하의 점 배치 문제로 바뀐다.
- **기하 확률.** 무작위 삼각형의 평균 넓이와 같은 적분을 계산하는 문제의 본보기이고, 고차원에서는 무작위 단체의 부피의 적률을 묻는 문제로 이어진다.

[^1]: W. Blaschke, "Über affine Geometrie XI: Lösung des Vierpunktproblems von Sylvester aus der Theorie der geometrischen Wahrscheinlichkeiten", *Berichte über die Verhandlungen der Königlich Sächsischen Gesellschaft der Wissenschaften zu Leipzig* 69 (1917), 436–453.
[^2]: E. R. Scheinerman, H. S. Wilf, "The rectilinear crossing number of a complete graph and Sylvester's four point problem of geometric probability", *American Mathematical Monthly* 101 (1994), 939–943.
[^3]: M. Schaefer, "The graph crossing number and its variants: a survey", *Electronic Journal of Combinatorics*, Dynamic Survey 21, §5. 직선 교차수의 점근 상수에 대한 하한과 상한.

# 연관 문서

## 선수지식

- [완전그래프의 교차수](complete-graph-crossing-number.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #combinatorics #probability
