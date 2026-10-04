# 대칭함수

# 개요

대칭함수는 변수를 서로 맞바꾸어도 변하지 않는 다항식이다. 다항식의 근은 순서가 정해져 있지 않으므로 근에 대한 식 가운데 뜻이 있는 것은 대칭식이고, 그런 식은 모두 계수의 다항식으로 적힌다. 대칭함수들이 이루는 환의 기저는 [분할](partitions.md)로 색인되고, 그 기저 사이의 변환 계수에 대칭군과 일반선형군의 표현론이 들어 있다.

# 직관

$x^3-2x^2+5x-1$ 의 세 근을 $\alpha,\beta,\gamma$ 라 하고 $\alpha^2+\beta^2+\gamma^2$ 를 구한다. 근을 구하려면 삼차방정식을 풀어야 하지만, 계수가 이미 근에 대한 정보를 준다.

$$
\alpha+\beta+\gamma=2,\qquad \alpha\beta+\beta\gamma+\gamma\alpha=5,\qquad \alpha\beta\gamma=1
$$

$(\alpha+\beta+\gamma)^2$ 을 펼치면 $\alpha^2+\beta^2+\gamma^2$ 에 $2(\alpha\beta+\beta\gamma+\gamma\alpha)$ 가 더해진 것이므로

$$
\alpha^2+\beta^2+\gamma^2=2^2-2\cdot 5=-6
$$

이고 근을 하나도 구하지 않았다.

이 계산이 된 것은 $\alpha^2+\beta^2+\gamma^2$ 이 세 근의 순서를 바꾸어도 변하지 않기 때문이다. 계수가 주는 세 식도 같은 성질을 갖는다. 순서를 바꾸어도 변하지 않는 식은 전부 이 세 식의 다항식으로 적힌다는 것이 아래의 기본정리이고, 그래서 근의 대칭식은 근을 구하지 않고 계수에서 계산된다.

변하지 않는 식들을 다 적으려면 어떤 지수 조합이 가능한지 세야 한다. 세 변수의 차수 $3$ 짜리 조합은 $x^3$ 류, $x^2y$ 류, $xyz$ 류 셋이고 이는 $3$ 을 $3$, $2+1$, $1+1+1$ 로 쪼개는 방법이다. 차수 $d$ 의 대칭식의 기저가 $d$ 의 분할로 색인된다.

# 정의

$\Lambda\_n=\mathbb Z\lbrack x\_1,\dots,x\_n\rbrack^{S\_n}$ 을 변수 치환으로 불변인 정수계수 다항식들의 환이라 하자. 분할 $\lambda=(\lambda\_1\ge\cdots\ge\lambda\_k\gt 0)$ 과 $r\ge 1$ 에 대해 네 가지 대칭함수를 둔다.

| 이름 | 정의 |
| --- | --- |
| 단항식 대칭함수 $m\_\lambda$ | $x\_1^{\lambda\_1}\cdots x\_k^{\lambda\_k}$ 의 서로 다른 치환상을 모두 더한 것 |
| 기본 대칭함수 $e\_r$ | $\sum\_{i\_1\lt\cdots\lt i\_r}x\_{i\_1}\cdots x\_{i\_r}$ |
| 완전 동차 대칭함수 $h\_r$ | $\sum\_{i\_1\le\cdots\le i\_r}x\_{i\_1}\cdots x\_{i\_r}$ |
| 거듭제곱합 $p\_r$ | $x\_1^r+\cdots+x\_n^r$ |

$e\_\lambda=e\_{\lambda\_1}\cdots e\_{\lambda\_k}$ 로 두고 $h\_\lambda$ , $p\_\lambda$ 도 같은 방식으로 둔다.

변수 개수를 늘리는 사상 $\Lambda\_{n+1}\to\Lambda\_n$ 을 $x\_{n+1}=0$ 대입으로 주면 역극한이 생긴다. 이 역극한을 **대칭함수환** $\Lambda$ 라 하고, 그 원소를 대칭함수라 한다. $\Lambda$ 에서는 $e\_r$ 과 $h\_r$ 이 모든 $r$ 에서 정의된다.

# 성질

## 대칭다항식의 기본정리

*정리.* $\Lambda\_n=\mathbb Z\lbrack e\_1,\dots,e\_n\rbrack$ 이고 $e\_1,\dots,e\_n$ 은 대수적으로 독립이다[^1].

*증명의 요지.* 단항식을 사전식으로 정렬한다. 대칭다항식 $f$ 의 최고차 단항식이 $x\_1^{a\_1}\cdots x\_n^{a\_n}$ 이면 대칭성에서 $a\_1\ge\cdots\ge a\_n$ 이고, $e\_1^{a\_1-a\_2}e\_2^{a\_2-a\_3}\cdots e\_n^{a\_n}$ 의 최고차 단항식이 같다. 차를 취하면 최고차가 내려가므로 유한 번에 끝난다. 독립성은 그 대응이 지수 벡터 사이의 일대일 대응이라는 데서 나온다.

따라서 근의 대칭식은 계수의 다항식이다. $\prod\_i(x-\alpha\_i)$ 의 계수가 부호를 빼고 $e\_r(\alpha)$ 이기 때문이다.

## Newton 항등식

$p\_k$ 와 $e\_r$ 사이에 다음 관계가 있다.

$$
p\_k=e\_1p\_{k-1}-e\_2p\_{k-2}+\cdots+(-1)^{k-2}e\_{k-1}p\_1+(-1)^{k-1}ke\_k
$$

$k=1,2,3$ 에서 $p\_1=e\_1$ , $p\_2=e\_1^2-2e\_2$ , $p\_3=e\_1^3-3e\_1e\_2+3e\_3$ 이다. 직관 절의 계산이 $k=2$ 의 경우다. 항등식은 $p\_\lambda$ 를 $e\_\lambda$ 로 바꾸는 재귀를 주지만, 역방향에는 $k$ 로 나누는 단계가 들어가므로 $p\_\lambda$ 가 $\Lambda$ 의 기저가 되는 것은 계수를 유리수로 넓힌 뒤다.

## 기본과 완전 동차의 쌍대성

생성함수로 쓰면 두 족이 서로 역이다.

$$
\sum\_{r\ge 0}e\_rt^r=\prod\_i(1+x\_it),\qquad \sum\_{r\ge 0}h\_rt^r=\prod\_i(1-x\_it)^{-1}
$$

두 곱의 적이 $1$ 이므로 $\sum\_{r=0}^k(-1)^re\_rh\_{k-r}=0$ 이 $k\ge 1$ 에서 성립한다. 이 관계로 $e$ 와 $h$ 가 서로를 생성하고, $\Lambda=\mathbb Z\lbrack h\_1,h\_2,\dots\rbrack$ 도 성립한다.

## 기저와 Hall 내적

$\lbrace m\_\lambda\rbrace$ , $\lbrace e\_\lambda\rbrace$ , $\lbrace h\_\lambda\rbrace$ 가 $\Lambda$ 의 $\mathbb Z$ 기저이고 $\lbrace p\_\lambda\rbrace$ 가 $\Lambda\otimes\mathbb Q$ 의 기저다. $\langle h\_\lambda,m\_\mu\rangle=\delta\_{\lambda\mu}$ 로 정하면 내적이 하나 정해지고, 이 내적에서 정규직교기저가 [Schur 다항식](schur-polynomials.md) $s\_\lambda$ 다[^1]. 기저 변환 계수가 조합론적 의미를 갖는다. $h\_\mu$ 를 $s\_\lambda$ 로 적은 계수가 Kostka 수이고, $p\_\mu$ 를 $s\_\lambda$ 로 적은 계수가 대칭군의 지표값이다.

# 활용

- Schur 다항식의 정의와 Littlewood–Richardson 규칙. 대칭함수환이 기저를 갖는 환이라는 사실이 두 Schur 함수의 곱을 다시 Schur 함수의 정수계수 결합으로 적게 한다.
- [Galois 이론](galois-theory.md)의 판별식과 종결식. 근의 차의 제곱의 곱이 대칭식이므로 기본정리에 의해 계수의 다항식이고, 그 값으로 근의 중복과 기약성을 판정한다.
- [고윳값](eigenvalues.md)의 특성다항식 계수. $n\times n$ 행렬의 특성다항식 계수가 고윳값의 기본 대칭함수이고, $e\_1$ 이 대각합, $e\_n$ 이 행렬식이다. 거듭제곱합 $p\_k$ 는 $\mathrm{tr}(A^k)$ 이므로 Newton 항등식이 대각합에서 특성다항식을 계산하는 절차를 준다.
- [Pólya 세기 정리](polya-enumeration.md)의 순환 지표. 순환 지표가 거듭제곱합 기저의 원소들의 결합이고, 가중치를 대입하는 단계가 기저 변환이다.

[^1]: I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed., Oxford University Press, 1995, 1 장. 기본정리, Newton 항등식, 네 기저와 Hall 내적을 차례로 다룬다.

# 연관 문서

## 선수지식

- [분할](partitions.md)
- [다항식환](polynomial-rings.md)

## 더 알아보기

- [Schur 다항식](schur-polynomials.md)

#combinatorics #algebra #group_theory
