# 0 차원 아이디얼

# 개요

**0 차원 아이디얼(zero-dimensional ideal)** 은 공통 해가 유한 개뿐인 다항식 방정식계가 생성하는 아이디얼이다. 연립방정식 $xy=1$, $y^2=1$ 의 해는 $(1,1)$ 과 $(-1,-1)$ 두 개이고, 해를 구하려면 보통 한 변수를 소거한 일변수 방정식을 풀고 다른 변수로 되돌아간다. 0 차원 아이디얼에서는 방정식으로 나눈 나머지의 공간이 유한 차원이 되어, 그 공간에서 변수를 곱하는 행렬의 고윳값이 해의 좌표가 된다.

# 직관

$S=\mathbb C\lbrack x,y\rbrack$ 에서 $I=(xy-1,\thinspace y^2-1)$ 이라 한다. [Gröbner 기저](groebner-bases.md) 문서에서 구한 축소 Gröbner 기저는 $\lbrace x-y,\thinspace y^2-1\rbrace$ 이고, 선두항 $x$ 와 $y^2$ 로 나누어떨어지지 않는 단항식은 $1$ 과 $y$ 뿐이다. 그래서 모든 다항식의 나머지는 $a+by$ 꼴이고 $S/I$ 는 $1,y$ 를 기저로 하는 $2$ 차원 벡터 공간이다.

이 공간에서 $y$ 를 곱하는 일을 행렬로 적는다. $y\cdot1=y$ 이고 $y\cdot y=y^2$ 의 나머지는 $1$ 이다. $x$ 를 곱하는 일은 $x$ 의 나머지가 $y$ 이므로 같은 행렬이다.

$$
M\_y=M\_x=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}
$$

이 행렬의 고윳값은 $1$ 과 $-1$ 이고, 고유벡터 $(1,1)$ 과 $(1,-1)$ 에서 $M\_x$ 와 $M\_y$ 가 같은 값을 준다. 두 고유벡터에서 읽은 $(x,y)=(1,1)$, $(-1,-1)$ 이 방정식계의 해다. 해의 개수 $2$ 는 $S/I$ 의 차원과 같다.

# 정의

$k$ 를 체, $\bar k$ 를 그 대수적 폐포, $S=k\lbrack x\_1,\dots,x\_n\rbrack$ 이라 한다.

## 0 차원 아이디얼

아이디얼 $I\subseteq S$ 의 $\bar k^n$ 안의 해집합 $V(I)$ 가 유한하면 $I$ 를 0 차원 아이디얼이라 한다. 직관 절의 $I$ 는 해가 두 개이므로 0 차원이다. $(x-y)$ 는 해가 직선 하나를 이루므로 0 차원이 아니다.

## 곱셈 행렬

$I$ 가 0 차원이면 $S/I$ 는 유한 차원 $k$ 벡터 공간이다. $f\in S$ 에 대해 $S/I$ 위의 일차사상 $g\mapsto fg$ 를 $f$ 의 **곱셈 행렬(multiplication matrix)** $M\_f$ 라 한다. 직관 절의 $M\_y$ 가 그 예다.

## 중복도

해 $p\in V(I)$ 에서 $S/I$ 를 $p$ 에서 [국소화](localization-rings.md)한 환의 차원을 $p$ 의 **중복도(multiplicity)** 라 한다. $I=(x^2,y)$ 이면 해는 원점 하나이고 $S/I$ 의 기저가 $1,x$ 이므로 원점의 중복도는 $2$ 다.

# 성질

## 유한성 판정

정리. 다음은 동치다[^1].

- $I$ 가 0 차원이다.
- $S/I$ 가 유한 차원 $k$ 벡터 공간이다.
- 어느 단항식 순서의 Gröbner 기저에서든 각 변수 $x\_i$ 마다 그 거듭제곱 하나가 어떤 원소의 선두항이다.

증명의 요지. 해집합의 $x\_i$ 좌표가 유한 개 $a\_1,\dots,a\_m$ 이면 $\prod\_j(x\_i-a\_j)$ 가 $V(I)$ 에서 $0$ 이므로, [Hilbert 영점 정리](hilbert-nullstellensatz.md)로 그 거듭제곱이 $I$ 에 들어간다. 그러면 선두항 아이디얼이 $x\_i$ 의 거듭제곱을 포함하고, 그 거듭제곱으로 나누어떨어지지 않는 단항식은 유한 개다. 거꾸로 $S/I$ 가 유한 차원이면 $1,x\_i,x\_i^2,\dots$ 의 일차 관계가 $x\_i$ 만의 다항식을 $I$ 에 주어 좌표가 유한 개로 정해진다.

## 해의 개수

정리. $I$ 가 0 차원이면 해를 중복도와 함께 센 수가 $\dim\_kS/I$ 다. $I$ 가 근기 아이디얼이면 해의 개수가 $\dim\_kS/I$ 다[^1].

$S/I$ 가 해마다 국소화한 환들의 곱으로 갈라진다는 데서 나온다. 이 분해는 [중국인의 나머지 정리](chinese-remainder-theorem.md)를 아이디얼에 쓴 것이다. $(x^2,y)$ 에서는 $\dim S/I=2$ 이고 해는 하나이지만 중복도가 $2$ 다.

## Stickelberger 정리

정리. $I$ 가 0 차원이면 곱셈 행렬 $M\_f$ 의 [고윳값](eigenvalues.md)은 해 $p\in V(I)$ 에서의 값 $f(p)$ 이고, 고윳값 $\lambda$ 의 대수적 중복도는 $f(p)=\lambda$ 인 해 $p$ 의 중복도를 더한 값이다[^2].

증명의 요지. 해마다 갈라진 국소환 위에서 $f-f(p)$ 는 멱영이므로 그 조각에서 $M\_f$ 의 고윳값은 $f(p)$ 하나다. $f=x\_i$ 로 두면 고윳값이 해의 $i$ 번째 좌표이고, 행렬들이 서로 가환이므로 공통 고유벡터에서 좌표를 짝지어 해를 읽는다. 직관 절의 계산이 이것이다.

## 모양 보조정리

정리. $k$ 가 대수적으로 닫혀 있고 $I$ 가 근기 0 차원 아이디얼이며 해의 $x\_n$ 좌표가 모두 다르면, 사전식 순서 $x\_1\gt\cdots\gt x\_n$ 의 축소 Gröbner 기저는 다음 꼴이다. 이것을 **모양 보조정리(shape lemma)** 라 한다[^1].

$$
\lbrace x\_1-g\_1(x\_n),\thinspace \dots,\thinspace x\_{n-1}-g\_{n-1}(x\_n),\thinspace g\_n(x\_n)\rbrace
$$

$g\_n$ 의 차수는 해의 개수다. 직관 절의 기저 $\lbrace x-y,\thinspace y^2-1\rbrace$ 이 $g\_1=y$, $g\_2=y^2-1$ 인 경우다.

# 활용

- 연립 다항식의 수치 풀이. 곱셈 행렬을 만든 뒤 고윳값 문제를 풀어 모든 해를 한 번에 구한다. 소거로 얻은 고차 일변수 다항식의 근을 구하는 것보다 수치적으로 안정하다[^2].
- Bézout 정리. [교차 이론](intersection-theory.md)에서 평면 곡선 두 개의 교점을 중복도와 함께 센 수가 $\dim S/I$ 로 계산되고, 차수의 곱과 같다.

[^1]: D. Cox, J. Little, D. O'Shea, *Ideals, Varieties, and Algorithms*, 4판, Undergraduate Texts in Mathematics, Springer, 2015, 5 장 3 절. 모양 보조정리는 D. Cox, J. Little, D. O'Shea, *Using Algebraic Geometry*, 2판, Graduate Texts in Mathematics 185, Springer, 2005, 2 장.
[^2]: D. Cox, J. Little, D. O'Shea, *Using Algebraic Geometry*, 2판, Graduate Texts in Mathematics 185, Springer, 2005, 2 장 4 절.

# 연관 문서

## 선수지식

- [Gröbner 기저](groebner-bases.md)
- [Hilbert 영점 정리](hilbert-nullstellensatz.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #algorithms #linear_algebra
