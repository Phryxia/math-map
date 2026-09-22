# 가측함수

# 개요

가측함수는 함숫값의 범위로 정한 집합 $\lbrace x: f(x)\gt c\rbrace$ 가 모든 $c$ 에 대해 가측집합인 함수다. [Lebesgue 적분](lebesgue-integral.md)은 이 집합의 [측도](measure.md)에 함숫값을 곱해 더하므로, 이 집합에 측도가 없으면 적분도 없다.

확률에서는 확률변수가 가측함수다. $X$ 가 $3$ 보다 클 확률은 집합 $\lbrace X\gt 3\rbrace$ 의 확률이고, 그 집합이 사건이어야 확률이 정해진다. 확률변수의 [분포](pushforward-measure.md)도 이런 집합의 확률로 정한다.

# 직관

## 적분이 안 되는 함수

함수 $f$ 를 $[0,1]$ 에서 Lebesgue 적분하려면 값이 $c$ 보다 큰 점의 집합 $\lbrace x: f(x)\gt c\rbrace$ 의 측도를 잰다. 잴 수 없는 집합 $V$ 위에서 $1$ , 밖에서 $0$ 인 함수를 잡으면 $\lbrace f\gt 1/2\rbrace=V$ 라 측도가 없고 적분값도 정할 수 없다. 함수에 요구할 조건은 이런 집합이 전부 가측집합이라는 것이다. 이 조건이 가측성이다.

## 확인해야 하는 집합

실수값 함수는 모든 $c$ 에 대해 $\lbrace f\gt c\rbrace$ 만 가측이면 된다. $\lbrace f\ge c\rbrace$ 는 $\lbrace f\gt c-1/n\rbrace$ 들의 교집합이고 $\lbrace a\lt f\le b\rbrace$ 는 차집합이라 $\sigma$ 대수의 연산으로 따라온다. 열린집합은 이런 구간의 셀 수 있는 합집합이므로 열린집합의 역상까지 가측이다. [연속함수](continuity.md)는 열린집합의 역상이 열린집합이고 열린집합은 가측집합이니 가측함수다.

## $\sigma$ 대수에 따라 달라지는 가측성

같은 함수가 어떤 $\sigma$ 대수에서는 가측이고 다른 데서는 아니다. $X = \lbrace 0,1\rbrace$ 에서 $\Sigma = \lbrace\varnothing, X\rbrace$ 면 실수값 가측함수는 상수함수뿐이다. 두 점을 다른 값으로 보내면 $\lbrace f\gt c\rbrace$ 가 한 점짜리 집합이 되어 $\Sigma$ 에 없다. $\Sigma$ 를 모든 부분집합으로 넓히면 모든 함수가 가측이다.

# 정의

## 가측함수

가측 공간 $(X, \Sigma)$ 와 $(Y, \mathcal T)$ 에 대해 함수 $f : X \to Y$ 가 가측이라는 것은 다음이다.

$$
B\in\mathcal T\quad\Longrightarrow\quad f^{-1}(B)\in\Sigma
$$

실수값 함수에서는 $Y$ 의 $\sigma$ -대수로 열린집합들이 생성하는 Borel $\sigma$ -대수를 쓰고 $\Sigma$ 가측 또는 Borel 가측이라 한다. 음이 아닌 확장실수값 함수도 $\lbrace+\infty\rbrace$ 를 Borel 집합에 포함시켜 같게 정의한다.

$X=\mathbb R$ 이고 $\Sigma$ 가 Lebesgue 가측집합이면 Lebesgue 가측함수, $\Sigma$ 가 Borel 집합이면 Borel 가측함수다. 전자가 더 넓고, 두 개념을 섞으면 Lebesgue 가측함수의 합성이 Lebesgue 가측이 아닐 수 있다.

## 생성 판정법

실수값 함수에서는 모든 $a \in \mathbb R$ 에 대해 다음만 확인하면 충분하다.

$$
\lbrace x\in X: f(x)\gt a\rbrace\in\Sigma
$$

역상은 여집합과 가산 합집합을 보존하므로 $\lbrace B : f^{-1}(B) \in \Sigma\rbrace$ 가 $\sigma$ -대수를 이루고, 반직선들이 Borel $\sigma$ -대수를 생성한다. $\gt $ 대신 $\ge$ , $\lt $ , $\le$ 중 어느 것을 써도 같다.

일반적으로 $\mathcal T$ 가 집합족 $\mathcal E$ 로 생성되면 $\mathcal E$ 의 원소에 대해서만 역상을 확인하면 된다.

## 단순함수 근사

음이 아닌 가측함수 $f$ 에 대해 단순함수의 증가열 $s_n \uparrow f$ 가 존재한다. 치역을 $2^n$ 등분해 잘라 내린다.

각 단계의 값 $k/2^n$ 에 대응하는 집합 $f^{-1}([k/2^n, (k+1)/2^n))$ 이 가측성에 따라 $\Sigma$ 에 있다. Lebesgue 적분은 이 근사로 정의한다.

# 성질

## 연산에 대한 닫힘

$f$ 와 $g$ 가 실수값 가측함수면 $f + g$ , $fg$ , $cf$ , $\max(f,g)$ , $\min(f,g)$ , $\lvert f \rvert$ , $f^+$ , $f^-$ 가 모두 가측이다. 합의 가측성은 다음에서 나온다.

$$
\lbrace f+g\gt a\rbrace=\bigcup_{q\in\mathbb{Q}}\bigl(\lbrace f\gt q\rbrace\cap\lbrace g\gt a-q\rbrace\bigr)
$$

유리수에 대한 가산 합집합이므로 $\sigma$ -대수의 가산 연산으로 충분하다.

## 극한에 대한 닫힘

가측함수열 $f_n$ 에 대해 $\sup f_n$ , $\inf f_n$ , $\limsup f_n$ , $\liminf f_n$ 이 모두 가측이다.

$$
\Bigl\lbrace\sup_n f_n\gt a\Bigr\rbrace=\bigcup_n\lbrace f_n\gt a\rbrace
$$

에서 나머지가 따라오고, 점별 극한이 존재하면 그 극한도 가측이다.

연속함수의 점별 극한은 연속이 아닐 수 있지만 가측함수의 점별 극한은 항상 가측이다. [Riemann 적분](riemann-integral.md) 가능한 함수열의 극한은 Riemann 적분이 안 될 수 있었는데, 가측함수열의 극한은 다시 적분할 수 있다.

## 합성

$f : X \to Y$ 와 $g : Y \to Z$ 가 가측이면 다음에 가측성을 두 번 적용해 $g \circ f$ 가 가측임을 얻는다.

$$
(g\circ f)^{-1}(C)=f^{-1}\bigl(g^{-1}(C)\bigr)
$$

가측함수 $f$ 뒤에 Borel 가측함수 $g$ 를 합성한 $g \circ f$ 는 가측이다. $g$ 가 Lebesgue 가측이기만 하면 $g^{-1}(C)$ 가 Borel 집합이 아닐 수 있고, 그러면 $f^{-1}(g^{-1}(C))$ 가 가측이라는 보장이 없다.

## 거의 어디서나와 완비성

측도 $0$ 인 집합 위에서 함수를 바꿔도 적분값은 같다. 측도 $0$ 집합의 모든 부분집합이 가측인 측도 공간을 완비라 하고, 완비 공간에서는 가측함수를 영집합 위에서 바꿔도 가측이다. Lebesgue 측도는 완비이고 Borel 측도는 완비가 아니다.

# 활용

## 확률변수

확률공간에서 가측함수가 [확률변수](random-variables.md)다. $X^{-1}(B)$ 가 사건이므로 $P(X \in B) = P(X^{-1}(B))$ 가 정해지고, 이 값을 $B$ 에 배정한 측도가 [상측도](pushforward-measure.md), 곧 분포다. 분포만 있으면 원래 확률공간 없이 계산할 수 있다.

$\sigma(X) = \lbrace X^{-1}(B) : B \text{ Borel}\rbrace$ 은 $X$ 를 가측으로 만드는 가장 작은 $\sigma$ -대수다. Doob–Dynkin 보조정리에 따라 $Y$ 가 $\sigma(X)$ 가측인 것과 $Y = g(X)$ 인 Borel 함수 $g$ 가 있는 것이 동치이므로, $\sigma(X)$ 는 $X$ 의 값으로 알 수 있는 정보의 모임이다.

## 적분의 전제

Lebesgue 적분은 단순함수 근사로 정의하므로 피적분함수가 가측이어야 한다. 가측성은 보통 생성 판정법과 극한 닫힘성으로 확인한다.

## 정보로서의 $\sigma$ -대수

$\sigma$ -대수가 클수록 답할 수 있는 사건이 많다. [조건부 기댓값](conditional-expectation.md)은 큰 $\sigma$ -대수에서 가측인 함수를 작은 $\sigma$ -대수에서 가측인 함수로 가장 가깝게 근사한 것이다. [마팅게일](martingales.md)은 시간에 따라 커지는 $\sigma$ -대수의 열로 정의한다.[^1]

[^1]: Terence Tao, *245A Notes 3: Integration on abstract measure spaces and the convergence theorems*, §4 정의 8, 연습문제 28, 참고 8. 가측함수의 정의, 생성 판정법, 연산과 극한에 대한 닫힘성. https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/

# 연관 문서

## 선수지식

- [측도](measure.md)

## 더 알아보기

- [Lebesgue 적분](lebesgue-integral.md)
- [상측도](pushforward-measure.md)

#measure_theory #analysis #probability
