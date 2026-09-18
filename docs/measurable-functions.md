# 가측함수

# 개요

[측도](measure.md)는 어떤 집합의 크기를 잴 수 있는지를 정한다. 실제로 묻는 질문은 함수에 대한 것이다. 관측값이 $3$ 보다 클 확률, 함수의 적분 같은 양이다.

두 질문 모두 $\lbrace x:f(x)\gt 3\rbrace$ 같은 집합의 크기로 환원된다. 함수에 요구할 조건은 값 쪽에서 뽑은 집합의 역상이 잴 수 있는 집합이라는 것 하나다. 이것이 가측성이고, [Lebesgue 적분](lebesgue-integral.md)과 [확률분포](pushforward-measure.md)가 이 조건 위에서 정의된다.

정의의 모양은 연속함수와 같다. 위상에서 열린집합의 역상이 열린집합이듯 여기서는 가측집합의 역상이 가측집합이다.

# 직관

## 역상으로 정해지는 가측성

측도 공간은 잴 수 있는 집합의 목록을 들고 있다. $f$ 에 대한 질문은 값의 범위에 대한 것이므로 정의역으로 되돌려야 하고, $f$ 가 가측이라는 것은 되돌린 결과가 항상 목록 안에 있다는 보장이다.

확률에서 $\sigma$ -대수는 관측 가능한 사건들이고 가측함수는 그 관측만으로 값이 결정되는 양이다. 시간이 지나며 정보가 쌓이는 상황을 $\sigma$ -대수의 증가열로 모형화하면 [조건부 기댓값](conditional-expectation.md)과 [마팅게일](martingales.md)의 언어가 된다.

## $\sigma$ -대수에 대한 상대성

같은 함수가 어떤 $\sigma$ -대수에서는 가측이고 다른 데서는 아니다. $X = \lbrace 0,1\rbrace$ 에서 $\Sigma = \lbrace\emptyset, X\rbrace$ 면 실수값 가측함수는 상수함수뿐이다. 두 점을 다른 값으로 보내면 반직선의 역상이 한 점짜리 집합이 되어 $\Sigma$ 에 없다. $\Sigma$ 를 모든 부분집합으로 넓히면 모든 함수가 가측이다. 가측성은 어떤 $\sigma$ -대수에 대한 것인지를 함께 말해야 한다.

## 비가측 함수의 희소성

비가측 함수를 만들려면 [선택공리](axiom-of-choice.md)가 필요하다. 연속함수, 단조함수, 계단함수와 이들의 합, 곱, 합성, 점별 극한은 모두 가측이다. 그럼에도 조건을 명시하는 것은 가측성이 깨지는 경계가 Banach–Tarski 같은 병리적 현상이 있는 자리이기 때문이다.

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

각 단계의 값 $k/2^n$ 에 대응하는 집합이 $f^{-1}([k/2^n, (k+1)/2^n))$ 이고 가측성이 이것을 $\Sigma$ 에 넣는다. Lebesgue 적분의 정의가 이 근사 위에 놓이므로 가측성이 적분의 최소 조건이다.

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

연속성과 다른 지점이 여기다. 연속함수의 점별 극한은 연속이 아닐 수 있지만 가측함수의 점별 극한은 항상 가측이다. Riemann 적분 가능한 함수열의 극한이 적분 가능하지 않던 문제가 해소되고 수렴 정리들이 성립한다.

## 합성

$f : X \to Y$ 와 $g : Y \to Z$ 가 가측이면 다음에 가측성을 두 번 적용해 $g \circ f$ 가 가측임을 얻는다.

$$
(g\circ f)^{-1}(C)=f^{-1}\bigl(g^{-1}(C)\bigr)
$$

순서에 조건이 붙는다. 가측함수 뒤에 Borel 가측함수를 합성하는 $g \circ f$ 는 안전하지만 Lebesgue 가측함수를 바깥에 두면 깨질 수 있다. Lebesgue $\sigma$ -대수가 Borel 보다 크므로 $g^{-1}(C)$ 가 Borel 이 아닐 수 있고 $f^{-1}$ 를 적용할 보장이 사라진다.

## 거의 어디서나와 완비성

측도 $0$ 인 집합 위에서 함수를 바꾸면 적분값이 달라지지 않는다. 측도 공간이 완비이면, 곧 측도 $0$ 집합의 모든 부분집합이 가측이면 가측함수를 영집합 위에서 바꿔도 가측성이 유지된다. Lebesgue 측도는 완비이고 Borel 측도는 아니라는 것이 두 $\sigma$ -대수를 구분하는 실질적 차이다.

# 활용

## 확률변수

확률공간에서 가측함수가 [확률변수](random-variables.md)다. 가측성이 $P(X \in B) = P(X^{-1}(B))$ 를 정의하고, 이 대응이 $\mathbb R$ 위에 만든 측도가 [상측도](pushforward-measure.md), 곧 분포다. 분포만 알면 원래 확률공간을 잊어도 된다.

$\sigma(X) = \lbrace X^{-1}(B) : B \text{ Borel}\rbrace$ 은 $X$ 를 가측으로 만드는 가장 작은 $\sigma$ -대수이고 $X$ 가 담은 정보에 해당한다. $Y$ 가 $\sigma(X)$ 가측인 것과 $Y = g(X)$ 인 Borel 함수 $g$ 가 존재하는 것이 동치라는 Doob–Dynkin 보조정리가 이 해석을 정당화한다.

## 적분의 전제

Lebesgue 적분의 정의는 단순함수 근사에 기대므로 가측성 없이 시작할 수 없다. 실제 증명에서 가측성 확인은 생성 판정법과 극한 닫힘성을 쓰는 짧은 논증으로 끝난다.

## 정보로서의 $\sigma$ -대수

큰 $\sigma$ -대수는 많은 질문에 답할 수 있는 상태이고 작은 $\sigma$ -대수는 덜 아는 상태다. [조건부 기댓값](conditional-expectation.md)은 큰 $\sigma$ -대수에서 정의된 가측함수를 작은 $\sigma$ -대수에서 가측인 함수로 가장 잘 근사한 것이며, 확률과정 이론이 이 문법 위에서 서술된다.[^1]

[^1]: Terence Tao, *245A Notes 3: Integration on abstract measure spaces and the convergence theorems*, §4 정의 8, 연습문제 28, 참고 8. 가측함수의 정의, 생성 판정법, 연산과 극한에 대한 닫힘성. https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/

# 연관 문서

## 선수지식

- [측도](measure.md)

## 더 알아보기

- [Lebesgue 적분](lebesgue-integral.md)
- [상측도와 확률분포](pushforward-measure.md)

#measure_theory #analysis #probability
