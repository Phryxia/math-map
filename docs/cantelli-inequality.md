# Cantelli 부등식

# 개요

**Cantelli 부등식(Cantelli's inequality)** 은 확률변수가 평균보다 한쪽으로만 일정량 이상 벗어날 확률을 평균과 분산만으로 누르는 부등식이다. 시험 점수의 평균이 $70$ 점이고 표준편차가 $10$ 점일 때 $90$ 점 이상을 받은 학생의 비율이 얼마 이하인지 묻는다고 하자. 높은 쪽 꼬리만 물었는데 양쪽 꼬리를 함께 세면 상한이 필요 이상으로 커진다. 이 부등식은 평균을 옮겨 놓고 제곱하는 방법으로 한쪽 꼬리만의 상한 $1/5$ 을 준다.

# 직관

점수를 [확률변수](random-variables.md) $X$ 로 두면 $E\lbrack X\rbrack=70$, $\mathrm{Var}(X)=100$ 이다. [집중부등식](concentration-inequalities.md)의 Chebyshev 부등식(Chebyshev's inequality)은 $(X-70)^2$ 에 Markov 부등식(Markov's inequality)을 적용해 다음을 준다.

$$
P(X\ge 90)\le P\bigl((X-70)^2\ge 400\bigr)\le\frac{100}{400}=\frac14
$$

첫 부등호에서 $X\le 50$ 인 경우까지 함께 세었다. 낮은 쪽은 묻지 않았으므로 이 상한에는 쓸데없는 몫이 들어 있다.

낮은 쪽 꼬리를 세지 않으려면 제곱하기 전에 $X-70$ 에 양수 $u$ 를 더한다. $X\ge 90$ 이면 $X-70+u\ge 20+u$ 이므로 다음이 성립한다.

$$
P(X\ge 90)\le\frac{E\lbrack(X-70+u)^2\rbrack}{(20+u)^2}=\frac{100+u^2}{(20+u)^2}
$$

$u=0$ 이면 Chebyshev 부등식의 $1/4$ 이다. $u=5$ 로 두면 $125/625=1/5$ 로 줄어든다.

$1/5$ 보다 더 줄일 수는 없다. 학생의 $1/5$ 이 $90$ 점이고 $4/5$ 가 $65$ 점이면 평균은 $18+52=70$ 이고 분산은 $0.2\cdot 400+0.8\cdot 25=100$ 이므로, 평균과 분산이 같은데 $90$ 점 이상의 비율이 정확히 $1/5$ 이다.

# 정의

$X$ 의 평균이 $\mu$ 이고 분산이 $\sigma^2\lt\infty$ 이면 모든 $t\gt 0$ 에 대해 다음이 성립한다.

$$
P(X-\mu\ge t)\le\frac{\sigma^2}{\sigma^2+t^2}
$$

이것을 Cantelli 부등식 또는 한쪽 Chebyshev 부등식(one-sided Chebyshev inequality)이라 한다. 직관 절의 점수에서 $\sigma^2=100$, $t=20$ 이면 오른쪽은 $100/500=1/5$ 이다. $-X$ 에 적용하면 낮은 쪽 꼬리 $P(X-\mu\le -t)$ 에도 같은 상한이 나온다.

# 성질

## 증명의 요지

$u\ge 0$ 이면 $X-\mu\ge t$ 일 때 $X-\mu+u\ge t+u\gt 0$ 이므로 Markov 부등식에서 다음을 얻는다.

$$
P(X-\mu\ge t)\le\frac{E\lbrack(X-\mu+u)^2\rbrack}{(t+u)^2}=\frac{\sigma^2+u^2}{(t+u)^2}
$$

오른쪽은 $u=\sigma^2/t$ 에서 가장 작고, 그 값이 $\sigma^2/(\sigma^2+t^2)$ 이다. 직관 절의 $u=5$ 가 $100/20$ 이다.

## 등호 조건

상한은 두 점 분포에서 등호가 된다. $X$ 가 확률 $\sigma^2/(\sigma^2+t^2)$ 으로 $\mu+t$ 이고 나머지 확률로 $\mu-\sigma^2/t$ 이면 평균이 $\mu$, 분산이 $\sigma^2$ 이고 $P(X-\mu\ge t)$ 가 상한과 같다. 직관 절의 $90$ 점과 $65$ 점 분포가 $t=20$, $\sigma^2/t=5$ 인 경우다.

## Chebyshev 부등식과의 비교

$t\gt 0$ 이면 $\sigma^2/(\sigma^2+t^2)\lt\sigma^2/t^2$ 이므로 한쪽 꼬리에서는 Cantelli 부등식이 Chebyshev 부등식보다 언제나 강하다. 두 꼬리를 더하면 $2\sigma^2/(\sigma^2+t^2)$ 이고, 이것은 $t\gt\sigma$ 일 때 Chebyshev 의 $\sigma^2/t^2$ 보다 크다. 양쪽 꼬리를 함께 물을 때는 Chebyshev 부등식이 낫다.

## 평균과 중앙값

$X$ 의 중앙값 $m$ 은 평균에서 표준편차 이상 떨어지지 않는다.

$$
\vert\mu-m\vert\le\sigma
$$

$m\gt\mu+\sigma$ 라 하고 $t=m-\mu$ 로 두면 Cantelli 부등식에서 $P(X\ge m)\le\sigma^2/(\sigma^2+t^2)\lt 1/2$ 이다. 중앙값의 정의에서 $P(X\ge m)\ge 1/2$ 이므로 모순이고, 반대쪽은 $-X$ 에 같은 논증을 쓴다.

# 활용

- [Paley–Zygmund 부등식](paley-zygmund-inequality.md)의 분산 판본. 음이 아닌 $X$ 의 낮은 쪽 꼬리에 Cantelli 부등식을 쓰면 $X$ 가 평균의 일정 비율보다 클 확률의 하한이 나온다.
- 위험 관리의 한쪽 상한. 손실의 평균과 분산만 알 때 손실이 평균보다 $t$ 이상 클 확률을 분포 가정 없이 $\sigma^2/(\sigma^2+t^2)$ 이하로 둔다. 확률을 $\alpha$ 이하로 하려면 $t=\sigma\sqrt{(1-\alpha)/\alpha}$ 를 쓰면 된다.
- 분포에 무관한 한쪽 신뢰 상한. 평균과 분산을 아는 측정값이 평균보다 $3\sigma$ 이상 클 확률은 어떤 분포에서든 $1/10$ 이하다.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
