# 확률변수와 기댓값

# 개요

확률변수는 표본공간 위의 가측함수다. "우연히 결정되는 수"라는 직관을 측도론의 언어로 옮기면, 확률측도를 가진 공간에서 실수로 가는 가측함수가 된다. 이렇게 정의하면 확률변수의 분포는 [상측도](pushforward-measure.md)로, 기댓값은 [Lebesgue 적분](lebesgue-integral.md)으로 곧바로 주어지고, 적분론의 정리들(선형성, 수렴 정리)이 그대로 확률론의 정리가 된다. 이산과 연속을 한 틀에서 다룰 수 있다는 점도 이 정의의 실질적 이득이다. 큰 수의 법칙과 중심극한정리를 포함한 이후의 모든 극한정리는 이 언어 위에서 진술된다.

# 직관

주사위를 두 번 굴리는 실험을 생각하자. 표본공간은 36개의 순서쌍이고, "눈의 합"은 각 순서쌍에 7, 9, 12 같은 수를 대응시키는 함수다. 실험 결과가 어느 순서쌍인지는 확률로만 말할 수 있지만, 함수 자체는 우연과 무관하게 확정되어 있다. 우연은 정의역 쪽에 있고 함수는 결정론적이라는 이 분업이 확률변수 정의의 핵심이다.

관심사가 "합이 7 이하일 확률"처럼 값에 관한 것이라면, 표본공간의 36개 점은 더 이상 필요하지 않다. 함수가 확률을 값 공간으로 밀어 보낸 결과, 즉 분포만 알면 된다.

기댓값은 분포의 무게중심이다. 질량 $P_X$ 를 실직선에 얹어 놓았을 때 균형을 이루는 점이며, 분산은 그 질량이 무게중심에서 얼마나 퍼져 있는지를 재는 2차 모멘트다.

# 정의

확률공간을 $(\Omega,\mathcal F,P)$ 라 하자. 여기서 $\mathcal F$ 는 $\Omega$ 위의 시그마 대수이고 $P$ 는 $P(\Omega)=1$ 인 측도다. 실직선 $\mathbb R$ 에는 Borel 시그마 대수 $\mathcal B$ 를 준다.

확률변수란 가측함수 $X:\Omega\to\mathbb R$ , 즉 모든 Borel 집합 $B$ 에 대해 $X$ 의 역상이 $\mathcal F$ 에 속하는 함수다.

$$
X^{-1}(B)=\lbrace\omega\in\Omega: X(\omega)\in B\rbrace\in\mathcal F\qquad(\forall B\in\mathcal B)
$$

$X$ 의 분포(law)는 $P$ 를 $X$ 로 밀어 보낸 상측도다.

$$
P_X(B)=P\negthinspace\left(X^{-1}(B)\right),\qquad B\in\mathcal B
$$

누적분포함수는 다음으로 정의하며, 우연속이고 단조증가하며 양 끝에서 0과 1로 가는 함수다.

$$
F_X(t)=P_X\big((-\infty,t]\big)=P(X\le t)
$$

## 기댓값

$X$ 가 음이 아니거나 적분 가능할 때 기댓값은 $P$ 에 대한 Lebesgue 적분이다[^2]. 상측도의 적분 변환 공식을 쓰면 분포만으로도 계산된다.

$$
\mathbb E[X]=\int_\Omega X\thinspace dP=\int_{\mathbb R} t\thinspace dP_X(t)
$$

적분 가능하다는 것은 $X$ 의 절댓값의 기댓값이 유한하다는 뜻이다. 더 일반적으로 Borel 함수 $g$ 에 대해 다음이 성립한다.

$$
\mathbb E[g(X)]=\int_{\mathbb R} g(t)\thinspace dP_X(t)
$$

이산형이면 $P_X$ 가 가산개의 점에 질량을 주므로 적분은 합이 되고, $P_X$ 가 Lebesgue 측도에 대해 절대연속이면 [Radon–Nikodym 정리](radon-nikodym.md)가 주는 밀도 $f$ 로 적분이 된다.

$$
\mathbb E[g(X)]=\sum_k g(x_k)\thinspace p_k
\qquad\text{또는}\qquad
\mathbb E[g(X)]=\int_{\mathbb R} g(t)f(t)\thinspace dt
$$

## 분산

2차 모멘트가 유한할 때 분산과 표준편차를 다음으로 정의한다.

$$
\mathrm{Var}(X)=\mathbb E\negthinspace\left[(X-\mathbb E X)^2\right]=\mathbb E[X^2]-(\mathbb E X)^2,
\qquad \sigma_X=\sqrt{\mathrm{Var}(X)}
$$

## 독립

확률변수들 $X_1,\dots,X_n$ 이 독립이라는 것은 생성하는 시그마 대수들이 독립이라는 뜻이며, 누적분포함수의 곱 형태로 쓸 수 있다.

$$
P(X_1\le t_1,\dots,X_n\le t_n)=\prod_{i=1}^n P(X_i\le t_i)\qquad(\forall t_1,\dots,t_n\in\mathbb R)
$$

# 성질

## 기댓값의 선형성

적분 가능한 $X$ , $Y$ 와 실수 $a$ , $b$ 에 대해 다음이 성립한다.

$$
\mathbb E[aX+bY]=a\thinspace\mathbb E[X]+b\thinspace\mathbb E[Y]
$$

증명은 Lebesgue 적분의 표준적인 단계 논법을 따른다[^1]. 지시함수에서는 측도의 가법성이 곧 등식이고, 음이 아닌 단순함수에서는 유한합이므로 직접 확인되며, 음이 아닌 가측함수에서는 단순함수의 증가열을 잡아 [단조 수렴 정리](monotone-convergence.md)로 극한을 교환한다. 일반 적분 가능 함수는 양의 부분과 음의 부분으로 나누어 적용한다. 독립성은 전혀 쓰이지 않는다는 점이 중요하다.

## 곱과 분산의 가법성

$X$ 와 $Y$ 가 독립이고 둘 다 적분 가능하면 곱도 적분 가능하고 다음이 성립한다. 역은 성립하지 않는다.

$$
\mathbb E[XY]=\mathbb E[X]\thinspace\mathbb E[Y]
$$

따라서 공분산을 $\mathrm{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\thinspace\mathbb E[Y]$ 로 두면 독립인 경우 $0$ 이고, 일반적으로 다음이 성립한다.

$$
\mathrm{Var}\negthinspace\left(\sum_{i=1}^n X_i\right)=\sum_{i=1}^n\mathrm{Var}(X_i)+2\sum_{i<j}\mathrm{Cov}(X_i,X_j)
$$

특히 쌍마다 상관이 없으면(독립보다 약한 조건) 분산은 가법적이다. 공분산이 $0$ 이어도 독립은 아니다. $X$ 가 $-1$ , $0$ , $1$ 을 각각 $1/4$ , $1/2$ , $1/4$ 의 확률로 가지고 $Y$ 를 $X$ 의 제곱으로 두면 $X$ 의 분포가 대칭이므로 다음과 같다.

$$
\mathrm{Cov}(X,Y)=\mathbb E[X^3]-\mathbb E[X]\thinspace\mathbb E[X^2]=0-0\cdot\tfrac12=0
$$

그러나 $Y$ 는 $X$ 로 완전히 결정되므로 두 변수는 독립이 아니다.

## Markov와 Chebyshev 부등식

음이 아닌 확률변수 $Z$ 와 $a>0$ 에 대해, 지시함수 부등식 $a\cdot\mathbf 1\lbrace Z\ge a\rbrace\le Z$ 의 양변에 기댓값을 취하면 Markov 부등식을 얻는다. $Z$ 를 $(X-\mathbb E X)^2$ 으로 잡으면 Chebyshev 부등식이 나온다.

$$
P(Z\ge a)\le \frac{\mathbb E[Z]}{a},
\qquad
P\big(|X-\mathbb E X|\ge \varepsilon\big)\le\frac{\mathrm{Var}(X)}{\varepsilon^2}
$$

## Jensen 부등식

$\varphi$ 가 볼록함수이고 $X$ 와 $\varphi(X)$ 가 적분 가능하면 다음이 성립한다. 증명 개요: $\mathbb E X$ 에서의 지지 직선 $\varphi(t)\ge\varphi(\mathbb E X)+c(t-\mathbb E X)$ 를 잡고 $t=X$ 를 대입한 뒤 기댓값을 취한다. [볼록성](convexity.md)의 지지 직선 존재가 핵심이다.

$$
\varphi\big(\mathbb E[X]\big)\le\mathbb E\big[\varphi(X)\big]
$$

## 존재하지 않는 기댓값

기댓값이 언제나 존재하는 것은 아니다. 다음 밀도를 갖는 분포는 기댓값이 무한이다.

$$
f(t)=t^{-2}\ (t\ge 1),\qquad \mathbb E[X]=\int_1^\infty t\cdot t^{-2}\thinspace dt=\infty
$$

Cauchy 분포는 양의 부분과 음의 부분의 적분이 모두 무한해서 기댓값이 아예 정의되지 않는다. 극한정리의 가정에서 적분 가능성을 요구하는 이유다.

# 활용

## 표준 예시

베르누이 시행에서 $X$ 가 $1$ 을 확률 $p$ 로, $0$ 을 확률 $1-p$ 로 가지면 다음이 성립한다.

$$
\mathbb E[X]=p,\qquad \mathrm{Var}(X)=p(1-p)
$$

독립인 베르누이 n개의 합인 이항분포는 선형성과 분산의 가법성으로 즉시 계산된다.

$$
\mathbb E\negthinspace\left[\sum_{i=1}^n X_i\right]=np,\qquad
\mathrm{Var}\negthinspace\left(\sum_{i=1}^n X_i\right)=np(1-p)
$$

지시함수로 쪼개는 기법은 조합론적 계산에서 강력하다. 예를 들어 n명의 사람에게 모자를 무작위로 되돌려 줄 때 자기 모자를 받는 사람 수의 기댓값은, 사람 i가 자기 모자를 받는 사건의 지시함수 합으로 보고 선형성을 쓰면 곧바로 1이다. 이때 지시함수들은 독립이 아니지만 선형성은 독립성을 요구하지 않는다.

## 다른 문서와의 연결

조건부확률을 확률변수 층위로 올리면 조건부기댓값이 되고, 여기서 [Bayes 정리](bayes.md)의 측도론적 형태가 나온다. 이산 확률변수의 분포에 −log p를 기댓값으로 취한 양이 [Shannon entropy](entropy.md)다. 확률변수열의 기댓값 극한 교환에는 [지배 수렴 정리](dominated-convergence.md)가 기본 도구로 쓰인다.

[^1]: Marco Taboga, "Expected value and the Lebesgue integral", StatLect. https://www.statlect.com/fundamentals-of-probability/expected-value-and-Lebesgue-integral
[^2]: Terence Tao, "275A, Notes 1: Integration and expectation". https://terrytao.wordpress.com/2015/10/03/275a-notes-1-integration-and-expectation/

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)
- [상측도와 확률분포](pushforward-measure.md)
- [Lebesgue 적분](lebesgue-integral.md)

## 더 알아보기

### 극한 정리와 부등식

- [큰 수의 법칙](law-of-large-numbers.md)
- [집중부등식](concentration-inequalities.md)
- [특성함수와 Lévy 연속성 정리](characteristic-functions.md)

### 조건부 구조와 확률과정

- [조건부 기댓값](conditional-expectation.md)
- [Markov 연쇄](markov-chains.md)
- [결정점과정](determinantal-point-process.md)

### 정보와 통계

- [KL divergence와 상호정보량](kl-divergence.md)
- [최대가능도 추정](maximum-likelihood.md)
- [Bayes 추론과 사후분포](bayesian-inference.md)
- [가설검정과 p-값](hypothesis-testing.md)
- [주성분 분석](principal-component-analysis.md)

#probability
