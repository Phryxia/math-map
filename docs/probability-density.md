# 확률밀도

# 개요

확률밀도는 분포를 적분으로 쓰는 함수다. 확률변수 $X$ 의 분포가 밀도 $\rho$ 를 가지면 임의의 Borel 집합의 확률이 그 집합 위의 적분 $\int\_B\rho(x)\thinspace dx$ 로 나오고, 기댓값도 적분으로 계산된다. 모든 분포가 밀도를 갖지는 않으며, 밀도가 있을 조건은 분포가 Lebesgue 측도에 절대연속이라는 것이다.

# 직관

$\lbrack 0,1\rbrack$ 에서 고르게 뽑은 수 $U$ 의 제곱 $X=U^2$ 의 평균을 구한다. 주사위라면 값마다 확률을 곱해 더하면 된다. $X$ 는 어느 값을 가질 확률도 $0$ 이라 곱해 더할 것이 없다. 대신 $X$ 가 구간에 들어갈 확률은 구할 수 있다. $X\le t$ 는 $U\le\sqrt t$ 와 같은 사건이므로 그 확률은 $\sqrt t$ 이고, $X$ 가 $\lbrack t,t+h\rbrack$ 에 들어갈 확률은 다음이다.

$$
P(t\le X\le t+h)=\sqrt{t+h}-\sqrt t
$$

$\lbrack 0,1\rbrack$ 을 길이 $h$ 의 조각으로 자르고, 조각마다 그 조각의 확률에 대표값 $t$ 를 곱해 더하면 평균의 근삿값이 나온다. 조각의 확률은 $h$ 가 작아질 때 $0$ 으로 가지만, $h$ 로 나눈 비율은 $\sqrt t$ 의 도함수 $1/(2\sqrt t)$ 로 간다. 그러면 더한 값은 $t$ 에 이 비율과 $h$ 를 곱한 것들의 합이고, $h\to0$ 에서 적분이 된다.

$$
\int\_0^1 t\cdot\frac{1}{2\sqrt t}\thinspace dt=\int\_0^1\frac{\sqrt t}{2}\thinspace dt=\frac13
$$

$U$ 쪽에서 직접 계산한 $\int\_0^1u^2\thinspace du=1/3$ 과 같다. 구간의 확률을 구간의 길이로 나눈 비율의 극한 $1/(2\sqrt t)$ 가 확률밀도다.

# 정의

확률변수 $X$ 의 **확률밀도**는 $X$ 의 분포를 Lebesgue 측도로 적분해 쓴 함수다. 분포를 $P\_X$ , $\mathbb R^n$ 의 Lebesgue 측도를 $\lambda$ 라 할 때, 다음을 모든 Borel 집합 $B$ 에서 만족하는 비음 가측함수 $\rho$ 가 밀도다.

$$
P\_X(B)=P(X\in B)=\int\_B\rho(x)\thinspace d\lambda(x)
$$

$B=\mathbb R^n$ 을 넣으면 $\int\rho\thinspace d\lambda=1$ 이다.

## 기준측도

밀도는 기준측도를 정한 뒤에 정해진다. 일반적으로 $\sigma$ 유한 측도 $\mu$ 에 대해 $P\_X\ll\mu$ 이면 $\rho=dP\_X/d\mu$ 가 $\mu$ 에 대한 밀도이고, 이것이 [Radon–Nikodym 도함수](radon-nikodym.md)다. $\mu$ 가 Lebesgue 측도면 확률밀도함수, 셈측도면 확률질량함수다.

| 기준측도 $\mu$ | $dP\_X/d\mu$ | 분포의 종류 |
| --- | --- | --- |
| Lebesgue 측도 | 확률밀도함수 | 연속분포 |
| 셈측도 | 확률질량함수 $P(X=x)$ | 이산분포 |
| 다른 확률측도 $Q$ | 우도비 | [측도변환](change-of-measure.md) |

## 누적분포함수와의 관계

$\mathbb R$ 에서는 $F\_X(t)=P(X\le t)$ 와 밀도가 다음 관계에 있다.

$$
F\_X(t)=\int\_{-\infty}^t\rho(x)\thinspace dx
$$

$F\_X$ 가 절대연속이면 거의 모든 점에서 미분가능하고 $\rho=F\_X'$ 가 밀도다. $\rho$ 가 연속인 점에서는 $F\_X$ 가 그 점에서 미분가능하고 도함수가 $\rho$ 와 같다.[^2]

## 결합밀도와 조건부밀도

$(X,Y)$ 가 $\mathbb R^m\times\mathbb R^n$ 에서 결합밀도 $\rho(x,y)$ 를 가지면 $X$ 의 주변밀도와 $Y=y$ 가 주어진 $X$ 의 조건부밀도는 다음이다.

$$
\rho\_X(x)=\int\rho(x,y)\thinspace dy,\qquad \rho(x\mid y)=\frac{\rho(x,y)}{\rho\_Y(y)}
$$

조건부밀도는 $\rho\_Y(y)\gt 0$ 인 $y$ 에서만 정의된다. 주변밀도의 적분 순서를 바꿀 수 있는 근거가 [Fubini–Tonelli 정리](fubini-tonelli.md)다.

# 성질

## 존재와 유일성

$P\_X\ll\lambda$ 일 때, 곧 $\lambda(B)=0$ 이면 $P\_X(B)=0$ 일 때에만 밀도가 존재한다. 이것이 [Radon–Nikodym 정리](radon-nikodym.md)의 결론이고, 밀도는 $\lambda$ 에 대해 거의 어디서나 유일하다.

유일성은 다음에서 나온다. $\rho\_1,\rho\_2$ 가 둘 다 밀도면 $\int\_B(\rho\_1-\rho\_2)\thinspace d\lambda=0$ 이 모든 $B$ 에서 성립하므로 $B=\lbrace\rho\_1\gt \rho\_2\rbrace$ 와 그 여집합에 적용해 $\rho\_1=\rho\_2$ 가 거의 어디서나 성립한다. 따라서 한 점에서 밀도의 값을 바꿔도 같은 분포를 준다.

## 기댓값

$g$ 가 가측이고 $\int\vert g\vert\rho\thinspace d\lambda\lt \infty$ 이면 다음이 성립한다.

$$
\mathbb E\lbrack g(X)\rbrack=\int g(x)\rho(x)\thinspace d\lambda(x)
$$

좌변은 $\Omega$ 위의 적분이고 우변은 $\mathbb R^n$ 위의 적분이다. 두 값이 같은 것은 [상측도](pushforward-measure.md)의 적분 공식에 $dP\_X=\rho\thinspace d\lambda$ 를 넣은 결과다.

## 변수변환

$g:\mathbb R^n\to\mathbb R^n$ 가 미분동형사상이고 $X$ 가 밀도 $\rho\_X$ 를 가지면 $Y=g(X)$ 의 밀도는 다음이다.

$$
\rho\_Y(y)=\rho\_X\big(g^{-1}(y)\big)\left\vert\det Dg^{-1}(y)\right\vert
$$

증명의 요지. $P(Y\in B)=P(X\in g^{-1}(B))$ 를 $\rho\_X$ 의 적분으로 쓰고 치환적분 공식을 적용하면 Jacobian 행렬식의 절댓값이 인자로 나온다.[^3]

$n=1$ 이고 $g$ 가 단조증가일 때는 $\rho\_Y(y)=\rho\_X(g^{-1}(y))/g'(g^{-1}(y))$ 다. 직관 절의 $X=U^2$ 가 이 경우이고 $g^{-1}(t)=\sqrt t$ , $g'(u)=2u$ 를 넣으면 $\rho\_X(t)=1/(2\sqrt t)$ 가 나온다.

## 밀도가 없는 분포

밀도가 없는 분포가 셋 있다.

- 이산분포. $P(X=0)=1$ 이면 $\lambda(\lbrace 0\rbrace)=0$ 인데 $P\_X(\lbrace 0\rbrace)=1$ 이므로 절대연속이 아니다.
- 혼합분포. 확률 $1/2$ 로 $0$ 을 주고 $1/2$ 로 $\lbrack 0,1\rbrack$ 에서 고르게 뽑는 $X$ 는 점 $0$ 에 양의 질량이 있어 밀도가 없다. 이 분포의 기댓값은 [Riemann–Stieltjes 적분](riemann-stieltjes-integral.md)으로 쓴다.
- 특이연속분포. Cantor 분포는 $F\_X$ 가 연속이지만 $\lambda$ 측도 $0$ 인 [Cantor 집합](cantor-set.md)에 모든 질량이 있어 절대연속이 아니다. 누적분포함수가 연속이어도 밀도가 있다고 할 수 없다.

Lebesgue 분해정리로 $\mathbb R$ 의 모든 분포가 이산, 절대연속, 특이연속 세 부분의 합으로 유일하게 갈라진다.[^1]

## 저차원 집합에 실린 분포

$X$ 가 $\mathbb R^n$ 의 $\lambda$ 측도 $0$ 인 집합에 값을 가지면 $\mathbb R^n$ 의 Lebesgue 측도에 대한 밀도가 없다. 구면 위에 고르게 퍼진 분포와, $Y=X$ 인 쌍 $(X,Y)$ 의 평면 위 분포가 그 예다. 이때 밀도를 쓰려면 기준측도를 그 집합 위의 측도로 바꾼다.

# 활용

- **[최대가능도 추정](maximum-likelihood.md).** 관측 $x\_1,\dots,x\_n$ 의 결합밀도를 모수 $\theta$ 의 함수로 본 것이 가능도이고, 이를 최대화해 $\theta$ 를 고른다. 독립일 때 결합밀도가 곱이 되어 로그가능도가 합이 된다.
- **[지수족](exponential-families.md).** 밀도를 $h(x)\exp(\langle\theta,T(x)\rangle-A(\theta))$ 꼴로 적은 분포족이다. 기준측도를 바꾸면 $h$ 가 달라지므로 이 표현은 기준측도에 의존한다.
- **[KL divergence](kl-divergence.md)(Kullback–Leibler divergence).** 두 분포가 공통 기준측도에 대해 밀도 $p,q$ 를 가지면 $\int p\log(p/q)\thinspace d\mu$ 가 KL divergence 이고, 기준측도의 선택과 무관하다.
- **[Shannon 엔트로피](entropy.md).** 이산분포의 질량함수로 쓴 엔트로피를 밀도로 바꿔 쓴 것이 미분 엔트로피 $-\int\rho\log\rho\thinspace d\lambda$ 다. 변수변환에서 Jacobian 항만큼 달라지므로 이산 엔트로피와 달리 좌표에 의존한다.
- **[측도변환](change-of-measure.md).** 기준측도를 다른 확률측도로 잡으면 밀도가 우도비이고, 중요도 표본추출과 우도비 검정이 이를 쓴다.

[^1]: Walter Rudin, *Real and Complex Analysis*, 3rd ed., McGraw–Hill, 1987, Chapter 6. Lebesgue 분해정리와 Radon–Nikodym 정리.
[^2]: Rick Durrett, *Probability: Theory and Examples*, 5th ed., Cambridge University Press, 2019, Section 1.6.
[^3]: Gerald Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed., Wiley, 1999, Section 2.7. 변수변환 공식.

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [Radon–Nikodym 정리](radon-nikodym.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #statistics
