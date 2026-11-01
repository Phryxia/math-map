# 가측함수

# 개요

**가측함수(measurable function)** 는 함숫값이 어떤 수보다 큰 점들을 모은 집합마다 길이나 확률이 정해지는 함수다. $[0,1/2)$ 에서 $1$, $[1/2,1]$ 에서 $3$ 인 함수의 그래프 아래 넓이는 값이 $1$ 인 점들의 집합의 길이 $1/2$ 와 값이 $3$ 인 점들의 집합의 길이 $1/2$ 로 $1\cdot\frac12+3\cdot\frac12=2$ 가 되는데, 값으로 가른 집합에 길이가 없으면 이 계산을 시작할 수 없다. 가측함수는 모든 $c$ 에 대해 집합 $\lbrace x: f(x)\gt c\rbrace$ 가 [측도](measure.md)를 갖도록 요구해 이 계산을 언제나 할 수 있게 한다.

# 직관

$[0,1]$ 에서 $f$ 가 $[0,1/2)$ 에서 $1$ 이고 $[1/2,1]$ 에서 $3$ 이라 하자. [Lebesgue 적분](lebesgue-integral.md)처럼 그래프 아래 넓이를 함숫값으로 갈라 구하면, 값이 $1$ 인 점의 집합은 길이가 $1/2$ 이고 값이 $3$ 인 점의 집합도 길이가 $1/2$ 이므로 넓이는 $1\cdot\frac12+3\cdot\frac12=2$ 다. 같은 계산을 아무 함수에나 하려면 값이 $c$ 보다 큰 점을 모은 집합 $\lbrace x: f(x)\gt c\rbrace$ 의 길이가 $c$ 마다 정해져 있어야 한다.

[길이를 줄 수 없는 집합](vitali-set.md) $V$ 위에서 $1$ 이고 밖에서 $0$ 인 함수를 잡으면 $\lbrace f\gt 1/2\rbrace$ 가 $V$ 여서 곱할 길이가 없으므로, 모든 $c$ 에 대해 $\lbrace f\gt c\rbrace$ 의 길이가 정해진 함수만 다룬다. 확인할 것은 $\lbrace f\gt c\rbrace$ 뿐이다. $\lbrace f\ge c\rbrace$ 는 $\lbrace f\gt c-1/n\rbrace$ 들의 교집합이고 $\lbrace a\lt f\le b\rbrace$ 는 차집합이라, 길이를 재는 집합족이 셀 수 있는 교집합과 차집합에 닫혀 있으면 함께 따라온다. 조건은 어느 집합에서 길이를 정했는지에 달려서, $X=\lbrace 0,1\rbrace$ 에서 $\varnothing$ 과 $X$ 에만 길이를 주었다면 두 점을 다른 값으로 보내는 함수는 $\lbrace f\gt c\rbrace$ 가 한 점짜리 집합이 되어 조건을 어긴다.

# 정의

## 가측함수

가측 공간(measurable space) $(X, \Sigma)$ 와 $(Y, \mathcal T)$ 에 대해 함수 $f : X \to Y$ 가 **가측(measurable)** 이라는 것은 다음이다.

$$
B\in\mathcal T\quad\Longrightarrow\quad f^{-1}(B)\in\Sigma
$$

[실수](real-numbers.md)값 함수에서는 $Y$ 의 $\sigma$ -대수로 열린집합들이 생성하는 Borel $\sigma$ -대수(Borel σ-algebra)를 쓰고 $\Sigma$ 가측 또는 Borel 가측이라 한다. 음이 아닌 확장실수값 함수도 $\lbrace+\infty\rbrace$ 를 Borel 집합에 포함시켜 같게 정의한다.

$X=\mathbb R$ 이고 $\Sigma$ 가 Lebesgue 가측집합이면 Lebesgue 가측함수, $\Sigma$ 가 Borel 집합이면 Borel 가측함수다. 전자가 더 넓고, 두 개념을 섞으면 Lebesgue 가측함수의 합성이 Lebesgue 가측이 아닐 수 있다.

## 생성 판정법

실수값 함수에서는 모든 $a \in \mathbb R$ 에 대해 다음만 확인하면 충분하다.

$$
\lbrace x\in X: f(x)\gt a\rbrace\in\Sigma
$$

역상은 여집합과 가산 합집합을 보존하므로 $\lbrace B : f^{-1}(B) \in \Sigma\rbrace$ 가 $\sigma$ -대수를 이루고, 반직선들이 Borel $\sigma$ -대수를 생성한다. $\gt $ 대신 $\ge$ , $\lt $ , $\le$ 중 어느 것을 써도 같다.

일반적으로 $\mathcal T$ 가 집합족 $\mathcal E$ 로 생성되면 $\mathcal E$ 의 원소에 대해서만 역상을 확인하면 된다.

[연속함수](continuity.md)는 Borel $\sigma$ -대수에 대해 가측이다. $\lbrace f\gt a\rbrace$ 가 열린집합이고 열린집합이 Borel $\sigma$ -대수에 속하므로 판정법이 통과한다. 모든 부분집합을 $\Sigma$ 로 삼으면 어떤 함수든 가측이다.

직관 절의 계단함수는 $\lbrace f\gt a\rbrace$ 가 $a\lt 1$ 이면 $\lbrack 0,1\rbrack$, $1\le a\lt 3$ 이면 $\lbrack 1/2,1\rbrack$, $a\ge 3$ 이면 $\varnothing$ 이고 셋 다 Borel 집합이므로 Borel 가측이다. Vitali 집합 $V$ 의 지시함수는 $\lbrace f\gt 1/2\rbrace=V$ 가 Lebesgue 가측이 아니므로 Lebesgue 가측이 아니다. $X=\lbrace 0,1\rbrace$, $\Sigma=\lbrace\varnothing,X\rbrace$ 에서 $f(0)=0$, $f(1)=1$ 이면 $\lbrace f\gt 1/2\rbrace=\lbrace 1\rbrace\notin\Sigma$ 이므로 가측이 아니다.

## 단순함수 근사

값이 유한 개인 가측함수를 단순함수(simple function)라 한다. 음이 아닌 가측함수 $f$ 에 대해 단순함수의 증가열 $s_n \uparrow f$ 가 존재한다. $s_n=\min\bigl(n,\thinspace 2^{-n}\lfloor 2^nf\rfloor\bigr)$ 로 두면 된다. 직관 절의 계단함수는 이미 단순함수이고 $n\ge 3$ 에서 $s_n=f$ 다.

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

측도 $0$ 인 집합 위에서 함수를 바꿔도 적분값은 같다. 측도 $0$ 집합의 모든 부분집합이 가측인 측도 공간을 완비(complete)라 하고, 완비 공간에서는 가측함수를 영집합 위에서 바꿔도 가측이다. Lebesgue 측도는 완비이고, Lebesgue 측도를 Borel 집합으로 제한한 측도는 완비가 아니다.

# 활용

## 확률변수

확률공간에서 가측함수가 [확률변수](random-variables.md)다. $X^{-1}(B)$ 가 사건이므로 $P(X \in B) = P(X^{-1}(B))$ 가 정해지고, $B$ 마다 이 값을 주는 측도가 [상측도](pushforward-measure.md), 곧 분포다. 분포만 있으면 원래 확률공간 없이 계산할 수 있다.

$\sigma(X) = \lbrace X^{-1}(B) : B \text{ Borel}\rbrace$ 은 $X$ 를 가측으로 만드는 가장 작은 $\sigma$ -대수다. Doob–Dynkin 보조정리(Doob–Dynkin lemma)에 따라 $Y$ 가 $\sigma(X)$ 가측인 것과 $Y = g(X)$ 인 Borel 함수 $g$ 가 있는 것이 동치이므로, $\sigma(X)$ 는 $X$ 의 값으로 알 수 있는 정보의 모임이다.

## 적분의 전제

Lebesgue 적분은 단순함수 근사로 정의하므로 피적분함수가 가측이어야 한다. 가측성은 보통 생성 판정법과 극한 닫힘성으로 확인한다.

## 정보로서의 σ 대수

$\sigma$ -대수가 클수록 답할 수 있는 사건이 많다. [조건부 기댓값](conditional-expectation.md)은 큰 $\sigma$ -대수에서 가측인 함수를 작은 $\sigma$ -대수에서 가측인 함수로 가장 가깝게 근사한 것이다. [Martingale](martingales.md)은 시간에 따라 커지는 $\sigma$ -대수의 열로 정의한다.[^1]

[^1]: Terence Tao, *245A Notes 3: Integration on abstract measure spaces and the convergence theorems*, §4 정의 8, 연습문제 28, 참고 8. 가측함수의 정의, 생성 판정법, 연산과 극한에 대한 닫힘성. https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/

# 연관 문서

## 선수지식

- [측도](measure.md)

## 더 알아보기

- [Lebesgue 적분](lebesgue-integral.md)
- [상측도](pushforward-measure.md)
- [Egorov 정리](egorov-theorem.md)

#measure_theory #analysis #probability
