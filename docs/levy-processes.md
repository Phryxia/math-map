# Lévy 과정

# 개요

**Lévy 과정(Lévy process)** 은 시간 구간마다 생기는 변화가 서로 독립이고, 그 분포가 구간의 길이에만 달린 연속 시간 확률과정이다. 보험회사의 잔고는 보험료가 꾸준히 들어오면서 작은 변동이 섞이고, 가끔 사고가 나면 보험금만큼 한 번에 떨어진다. Lévy 과정은 이런 움직임을 일정한 흐름, Brown 운동의 연속 변동, 크기가 무작위인 도약의 세 부분으로 나누어 적고, 과정 전체를 이 세 부분을 정하는 값들로 기술한다.

# 직관

잔고의 변화 $X\_t$ 를 세 부분의 합으로 놓는다. 시간당 $b$ 씩 들어오는 보험료 $bt$, 작은 변동 $\sigma B\_t$, 그리고 시간당 평균 $\lambda$ 번 일어나는 사고마다 크기 $Y\_i$ 만큼 떨어지는 부분이다. 사고 횟수 $N\_t$ 는 [Poisson 과정](poisson-process.md)이고 $Y\_i$ 는 서로 독립이며 분포가 같다.

$$
X\_t=bt+\sigma B\_t-\sum\_{i=1}^{N\_t}Y\_i
$$

세 부분이 독립이므로 [특성함수](characteristic-functions.md) $E\lbrack e^{iuX\_t}\rbrack$ 는 각 부분의 특성함수의 곱이다. 흐름은 $e^{iubt}$, Brown 운동은 $e^{-t\sigma^2u^2/2}$ 를 준다. 도약 부분은 $N\_t=k$ 로 나누어 더하면 $e^{\lambda t(\phi(-u)-1)}$ 이고, $\phi$ 는 $Y\_1$ 의 특성함수다.

세 값 모두 $e^{t\psi(u)}$ 꼴이고 지수의 $\psi$ 가 $t$ 에 달리지 않는다. 그래서 과정 전체가 함수 $\psi$ 하나로 정해진다.

$$
\psi(u)=iub-\frac{\sigma^2u^2}2+\lambda\big(\phi(-u)-1\big)
$$

# 정의

## Lévy 과정

실수값 확률과정 $(X\_t)\_{t\ge0}$ 가 다음을 만족하면 Lévy 과정이라 한다.

1. $X\_0=0$ 이다.
2. $0\le t\_0\lt t\_1\lt\dots\lt t\_n$ 이면 증분 $X\_{t\_1}-X\_{t\_0},\dots,X\_{t\_n}-X\_{t\_{n-1}}$ 이 서로 독립이다.
3. $X\_{t+s}-X\_s$ 의 분포가 $s$ 에 달리지 않는다.
4. 모든 $\varepsilon\gt0$ 에서 $t\to0$ 이면 $P(\lvert X\_t\rvert\gt\varepsilon)\to0$ 이다.

[Brown 운동](brownian-motion.md), Poisson 과정, 직관 절의 잔고가 Lévy 과정이다.

## Lévy 측도

$\mathbb R\setminus\lbrace 0\rbrace$ 위의 측도 $\nu$ 가 $\int\min(1,x^2)\thinspace\nu(dx)\lt\infty$ 를 만족하면 **Lévy 측도(Lévy measure)** 라 한다. $\nu(A)$ 는 크기가 $A$ 에 드는 도약이 단위 시간에 일어나는 평균 횟수다. 직관 절에서 $\nu$ 는 $-Y\_1$ 의 분포에 $\lambda$ 를 곱한 측도다.

# 성질

## Lévy–Khintchine 공식

정리. Lévy 과정에는 실수 $b$, $\sigma\ge0$, Lévy 측도 $\nu$ 가 유일하게 있어 $E\lbrack e^{iuX\_t}\rbrack=e^{t\psi(u)}$ 이고, $\psi$ 는 다음과 같다. 거꾸로 이런 세 값마다 Lévy 과정이 있다. 이것을 Lévy–Khintchine 공식(Lévy–Khintchine formula)이라 한다[^1].

$$
\begin{aligned}
\psi(u)={}&iub-\frac{\sigma^2u^2}2\cr
&+\int\big(e^{iux}-1-iux\thinspace\mathbf 1\_{\lvert x\rvert\lt1}\big)\thinspace\nu(dx)
\end{aligned}
$$

적분 안의 $-iux\thinspace\mathbf 1\_{\lvert x\rvert\lt1}$ 은 작은 도약이 무한히 많을 때 적분이 수렴하게 하는 보정이다. $\nu$ 가 유한 측도이면 이 보정을 $b$ 에 흡수할 수 있고, 직관 절의 $\psi$ 가 나온다.

## Lévy–Itô 분해

정리. 모든 Lévy 과정은 일정한 흐름, Brown 운동, 크기가 $1$ 이상인 도약의 복합 Poisson 과정, 크기가 $1$ 미만인 도약을 보정해 더한 마팅게일의 독립인 합이다. 이것을 Lévy–Itô 분해(Lévy–Itô decomposition)라 한다[^1].

크기가 $1$ 미만인 도약은 $\nu$ 가 원점 근처에서 무한하면 유한 시간에 무한히 많이 일어날 수 있다. 조건 $\int\min(1,x^2)\thinspace\nu(dx)\lt\infty$ 가 그 합이 보정 뒤에 수렴하게 한다.

## 생성원

Lévy 과정은 [Feller 과정](feller-processes.md)이고, 매끄럽고 콤팩트 지지인 $f$ 에서 생성원은 다음과 같다[^1].

$$
\begin{aligned}
Af(x)={}&bf'(x)+\frac{\sigma^2}2f''(x)\cr
&+\int\big(f(x+y)-f(x)-yf'(x)\thinspace\mathbf 1\_{\lvert y\rvert\lt1}\big)\thinspace\nu(dy)
\end{aligned}
$$

Poisson 과정은 $b=\sigma=0$, $\nu=\lambda\delta\_1$ 이다. 도약 크기 $1$ 은 $\lvert y\rvert\lt1$ 에 들지 않아 보정 항이 없으므로 $Af(x)=\lambda\big(f(x+1)-f(x)\big)$ 이고, Feller 과정 문서의 생성원과 같다.

## 무한 분해 가능 분포

$X\_1$ 의 분포는 모든 $n$ 에서 독립이고 분포가 같은 $n$ 개의 합 $\sum\_{k=1}^n\big(X\_{k/n}-X\_{(k-1)/n}\big)$ 의 분포다. 이런 분포를 무한 분해 가능 분포(infinitely divisible distribution)라 하고, 무한 분해 가능 분포마다 $X\_1$ 이 그 분포인 Lévy 과정이 하나 있다[^1].

# 활용

- 보험 수학의 파산 확률. 직관 절의 잔고가 언젠가 $0$ 아래로 내려갈 확률을 [Cramér–Lundberg 모형](cramer-lundberg-model.md)으로 계산한다.
- [안정 분포](stable-distributions.md). $b=\sigma=0$ 이고 $\nu(dx)=c\lvert x\rvert^{-1-\alpha}dx$, $0\lt\alpha\lt2$ 인 대칭 과정은 $X\_t$ 와 $t^{1/\alpha}X\_1$ 의 분포가 같다. 분산이 무한한 극한정리의 극한이 이 분포다.
- 금융 모형. [기하 Brown 운동](geometric-brownian-motion.md)의 Brown 운동 자리에 도약이 있는 Lévy 과정을 넣어 가격의 급락을 반영한다.

[^1]: K. Sato, *Lévy Processes and Infinitely Divisible Distributions*, Cambridge University Press, 1999, 2 장과 4 장.

# 연관 문서

## 선수지식

- [Feller 과정](feller-processes.md)
- [Poisson 과정](poisson-process.md)

## 더 알아보기

- [Cramér–Lundberg 모형](cramer-lundberg-model.md)
- [자기유사 과정](self-similar-processes.md)

#probability #analysis
