# Paley–Zygmund 부등식

# 개요

**Paley–Zygmund 부등식(Paley–Zygmund inequality)** 은 음이 아닌 [확률변수](random-variables.md)가 평균의 일정 비율보다 클 확률을 아래에서 누르는 부등식이다. 정점 네 개의 여섯 쌍을 동전을 던져 이을지 정할 때, 삼각형이 하나라도 생길 확률이 얼마 이상인지 묻는다고 하자. 평균에서 벗어날 확률의 상한은 이 물음에 하한을 주지 못한다. 이 부등식은 삼각형 수의 평균과 제곱의 평균만으로 그 확률이 $2/7$ 이상임을 보인다.

# 직관

정점 $1,2,3,4$ 의 여섯 쌍을 각각 확률 $1/2$ 로 독립으로 잇고, 생긴 삼각형의 수를 $X$ 라 한다. 삼각형이 될 수 있는 세 점의 묶음은 네 개이고 각각 세 쌍이 모두 이어질 확률이 $1/8$ 이므로 $E\lbrack X\rbrack=4/8=1/2$ 다.

$X^2$ 은 삼각형 두 개를 순서대로 고르는 방법마다 둘 다 생기면 $1$ 을 세는 합이다. 같은 삼각형을 두 번 고르면 확률 $1/8$ 이고 그런 경우가 네 가지다. 서로 다른 두 삼각형은 언제나 쌍 하나를 공유해 다섯 쌍이 이어져야 하므로 확률 $1/32$ 이고 그런 경우가 열두 가지다. 따라서 $E\lbrack X^2\rbrack=1/2+3/8=7/8$ 이고 분산은 $7/8-1/4=5/8$ 이다.

[집중부등식](concentration-inequalities.md)의 Chebyshev 부등식(Chebyshev's inequality)으로 $X=0$ 일 확률을 누르면 다음이 나온다.

$$
P(X=0)\le P\bigl(\vert X-E\lbrack X\rbrack\vert\ge E\lbrack X\rbrack\bigr)\le\frac{5/8}{1/4}=\frac52
$$

오른쪽이 $1$ 보다 크므로 삼각형이 생길 확률에 대해 아무것도 나오지 않는다.

Chebyshev 부등식은 평균보다 큰 쪽과 작은 쪽으로 벗어나는 것을 함께 세서 막혔다. $X=0$ 을 막는 데는 작은 쪽만 보면 되므로, $X$ 의 평균을 $X\gt 0$ 인 경우에서만 계산한다. $X=0$ 인 경우는 평균에 아무것도 더하지 않으므로 $E\lbrack X\rbrack=E\lbrack X\mathbf 1\_{\lbrace X\gt 0\rbrace}\rbrack$ 이고, [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 이 곱에 쓰면 다음이 된다.

$$
E\lbrack X\rbrack\le\sqrt{E\lbrack X^2\rbrack}\thinspace\sqrt{P(X\gt 0)}
$$

양변을 제곱해 정리하면 다음이 나온다.

$$
P(X\gt 0)\ge\frac{E\lbrack X\rbrack^2}{E\lbrack X^2\rbrack}=\frac{1/4}{7/8}=\frac27
$$

실제 확률은 삼각형이 없는 그래프를 세어 얻는다. 쌍이 $0,1,2$ 개인 그래프 $1+6+15$ 개, 세 쌍짜리 $20$ 개 가운데 삼각형 넷을 뺀 $16$ 개, 네 쌍짜리 가운데 사각형 $3$ 개가 삼각형이 없으므로 $41$ 개다. 삼각형이 생길 확률은 $1-41/64=23/64\approx 0.36$ 이고 하한 $2/7\approx 0.29$ 보다 크다.

# 정의

$X$ 가 음이 아니고 $E\lbrack X^2\rbrack\lt\infty$ 인 확률변수이고 $0\le\theta\le 1$ 이면 다음이 성립한다[^1].

$$
P\bigl(X\gt\theta\thinspace E\lbrack X\rbrack\bigr)\ge(1-\theta)^2\thinspace\frac{E\lbrack X\rbrack^2}{E\lbrack X^2\rbrack}
$$

이 부등식을 Paley–Zygmund 부등식이라 한다. 직관 절의 삼각형 수에서 $\theta=1/2$ 로 두면 $P(X\gt 1/4)\ge(1/4)(2/7)=1/14$ 이다. $X$ 는 정수이므로 이것은 삼각형이 하나 이상 생길 확률이 $1/14$ 이상이라는 뜻이고, $\theta=0$ 의 $2/7$ 보다 약하다.

$\theta=0$ 인 경우는 다음 꼴이다.

$$
P(X\gt 0)\ge\frac{E\lbrack X\rbrack^2}{E\lbrack X^2\rbrack}
$$

음이 아닌 정수값 확률변수에 이 꼴을 써서 $X\ge 1$ 일 확률을 아래에서 누르는 논법을 **2차 적률법(second moment method)** 이라 한다.

# 성질

## 증명의 요지

$\mu=E\lbrack X\rbrack$ 로 두고 $X$ 를 $X\le\theta\mu$ 인 부분과 $X\gt\theta\mu$ 인 부분으로 나눈다. 앞부분의 평균은 $\theta\mu$ 이하이고, 뒷부분에는 Cauchy–Schwarz 부등식을 쓴다.

$$
\begin{aligned}
\mu&=E\lbrack X\mathbf 1\_{\lbrace X\le\theta\mu\rbrace}\rbrack+E\lbrack X\mathbf 1\_{\lbrace X\gt\theta\mu\rbrace}\rbrack\cr
&\le\theta\mu+\sqrt{E\lbrack X^2\rbrack\thinspace P(X\gt\theta\mu)}
\end{aligned}
$$

$\theta\mu$ 를 왼쪽으로 옮기고 제곱하면 정의 절의 부등식이 나온다.

## 등호 조건

$\theta=0$ 에서 등호는 $X$ 가 $X\gt 0$ 인 곳에서 상수일 때 성립한다. $X=c\mathbf 1_A$ 이고 $c\gt 0$ 이면 다음이 성립한다.

$$
\frac{E\lbrack X\rbrack^2}{E\lbrack X^2\rbrack}=\frac{c^2P(A)^2}{c^2P(A)}=P(A)=P(X\gt 0)
$$

Cauchy–Schwarz 부등식의 등호 조건이 $X$ 와 $\mathbf 1\_{\lbrace X\gt 0\rbrace}$ 의 비례이므로 등호는 이때뿐이다.

## 분산을 쓰는 판본

$\sigma^2=\mathrm{Var}(X)$ 로 두면 다음이 성립한다.

$$
P\bigl(X\gt\theta\mu\bigr)\ge\frac{(1-\theta)^2\mu^2}{(1-\theta)^2\mu^2+\sigma^2}
$$

$E\lbrack X^2\rbrack=\mu^2+\sigma^2$ 이므로 $\theta\gt 0$ 에서 이 판본이 정의 절의 부등식보다 강하고 $\theta=0$ 에서 둘이 같다. 증명은 [Cantelli 부등식](cantelli-inequality.md) $P(\mu-X\ge t)\le\sigma^2/(\sigma^2+t^2)$ 에 $t=(1-\theta)\mu$ 를 넣는 것이다. Cantelli 부등식은 $u\ge 0$ 에 대해 $P(\mu-X\ge t)\le E\lbrack(\mu-X+u)^2\rbrack/(t+u)^2$ 인 Markov 부등식(Markov's inequality)에 $u=\sigma^2/t$ 를 넣어 얻는다.

## 높은 적률 판본

$p\gt 1$ 이고 $E\lbrack X^p\rbrack\lt\infty$ 이면 Cauchy–Schwarz 부등식 대신 지수 $p$ 와 $p/(p-1)$ 의 [Hölder 부등식](holder-inequality.md)을 써서 다음을 얻는다.

$$
P\bigl(X\gt\theta\mu\bigr)\ge\left(\frac{(1-\theta)^p\mu^p}{E\lbrack X^p\rbrack}\right)^{1/(p-1)}
$$

$p=2$ 이면 정의 절의 부등식이다.

# 활용

- [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)의 부분그래프 문턱. 그래프 $H$ 의 사본 수 $X$ 에 대해 $E\lbrack X^2\rbrack/E\lbrack X\rbrack^2\to 1$ 이면 $P(X\gt 0)\to 1$ 이다. 문턱의 상수배 자리처럼 이 비가 상수 $C$ 이하로만 머물러도 $P(X\gt 0)\ge 1/C$ 이 남는다.
- [Khintchine 부등식](khintchine-inequality.md)의 무작위 부호 합 $S=\sum a_i\varepsilon_i$ 에서 $\sigma^2=\sum a_i^2$ 이면 $E\lbrack S^4\rbrack\le 3\sigma^4$ 이다. $X=S^2$, $\theta=1/4$ 로 두면 $P(\vert S\vert\gt\sigma/2)\ge(9/16)/3=3/16$ 이 나와, 합이 계수의 크기에 비해 작게 몰리지 않는다.
- [분지과정](branching-processes.md)의 생존 확률. 자손 수의 평균이 $m\gt 1$ 이고 분산이 $s^2$ 이면 $n$ 세대 개체 수 $Z_n$ 에 대해 $E\lbrack Z_n^2\rbrack/E\lbrack Z_n\rbrack^2\to 1+s^2/(m(m-1))$ 이다. 따라서 생존 확률은 $m(m-1)/(m(m-1)+s^2)$ 이상이다. 자손이 $0,1,2$ 명일 확률이 $1/4,1/4,1/2$ 이면 이 하한은 $0.3125$ 이고 실제 생존 확률은 $1/2$ 이다.

[^1]: R. E. A. C. Paley, A. Zygmund, "A note on analytic functions in the unit circle", Proceedings of the Cambridge Philosophical Society 28 (1932), 266–272.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)
- [Cauchy–Schwarz 부등식](cauchy-schwarz.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #analysis
