# Ekeland 변분 원리

# 개요

**Ekeland 변분 원리(Ekeland's variational principle)** 는 최솟값이 없는 함수에서도, 하한에 가까운 값을 가지면서 주변에서 값이 정해진 기울기보다 빨리 떨어지지 않는 점이 있다는 정리다. $f(x)=e^{-x}$ 는 $x$ 가 커질수록 $0$ 에 다가가지만 $0$ 이 되는 점은 없어, "최솟점에서 미분이 $0$" 이라는 계산을 시작할 수 없다. 이 원리는 최솟점 대신 $e^{-x}\le 0.01$ 인 점처럼 거의 최소이고 거의 평평한 점을, [완비성](completeness.md)만으로 찾아 준다.

# 직관

$f(x)=e^{-x}$ 의 하한은 $0$ 이다. 최솟점이 없으므로 미분이 $0$ 인 점도 없다. 최솟점이 있었다면 그 점에서 $f$ 는 어느 방향으로도 떨어지지 않는다.

최솟점 대신 "어느 방향으로도 기울기 $0.01$ 보다 빨리 떨어지지 않는 점" 을 찾는다. $f$ 는 볼록하므로 $f(x)\ge f(\bar x)-e^{-\bar x}\vert x-\bar x\vert$ 이고, $e^{-\bar x}\le 0.01$ 이면 다음이 모든 $x$ 에서 성립한다.

$$
f(x)\ge f(\bar x)-0.01\thinspace\vert x-\bar x\vert
$$

$\bar x=\ln 100\approx 4.61$ 이 그런 점이고, $f(\bar x)=0.01$ 로 하한보다 $0.01$ 만큼 크다. 이 점은 거의 최소이고, $\bar x$ 를 꼭짓점으로 기울기 $0.01$ 인 뾰족한 원뿔을 거꾸로 세우면 $f$ 의 그래프가 그 원뿔 위에 있다.

$e^{-x}$ 는 미분할 수 있고 볼록해서 이 점을 직접 계산했다. Ekeland 변분 원리는 미분도 볼록성도 없이, 완비 거리 공간 위의 함수에서 같은 점이 있음을 보인다.

# 정의

함수 $f:X\to(-\infty,\infty\rbrack$ 가 점 $x$ 에서 **하반연속(lower semicontinuous)** 이라는 것은 $x_n\to x$ 이면 $f(x)\le\liminf f(x_n)$ 이라는 것이다. 모든 점에서 하반연속이면 하반연속 함수라 한다. 연속함수는 하반연속이고, $x\le 0$ 에서 $0$, $x\gt 0$ 에서 $1$ 인 함수도 하반연속이다.

Ekeland 변분 원리는 다음 진술이다.[^1] $(X,d)$ 가 완비 거리 공간이고 $f$ 가 아래로 유계인 하반연속 함수이며 어느 점에서 유한하다고 하자. $\varepsilon\gt 0$, $\lambda\gt 0$ 과 $f(x_0)\le\inf f+\varepsilon$ 인 점 $x_0$ 에 대해, 다음 세 조건을 만족하는 $\bar x$ 가 있다.

$$
f(\bar x)\le f(x_0),\qquad d(\bar x,x_0)\le\lambda,\qquad f(x)\gt f(\bar x)-\frac{\varepsilon}{\lambda}\thinspace d(x,\bar x)\quad(x\ne\bar x)
$$

직관 절은 $X=\mathbb R$, $\varepsilon=0.01$, $\lambda=1$ 에서 $x_0=\bar x=\ln 100$ 으로 둔 경우다. 셋째 조건이 원뿔 위에 그래프가 있다는 조건이다.

# 성질

## 존재 증명

$\delta=\varepsilon/\lambda$ 로 두고 $X$ 위의 순서를 $y\preceq x$ 이면 $f(y)+\delta\thinspace d(x,y)\le f(x)$ 로 정한다. $S(x)=\lbrace y:y\preceq x\rbrace$ 는 $f$ 가 하반연속이므로 닫힌집합이다.

$x_0$ 에서 시작해 $x_{n+1}\in S(x_n)$ 을 $S(x_n)$ 위의 하한에 $2^{-n}$ 이내로 가깝게 고른다. 그러면 $S(x_{n+1})$ 의 지름이 $2^{-n+1}/\delta$ 이하가 되어 $0$ 으로 가고, 닫힌집합 $S(x_n)$ 이 줄어든다. 완비성으로 교집합이 한 점 $\bar x$ 이고, $S(\bar x)=\lbrace\bar x\rbrace$ 가 셋째 조건이다.

## 기울기가 작은 점

$X$ 가 [Banach 공간](banach-spaces.md)이고 $f$ 가 Gâteaux 미분 가능하면 $\lambda=\sqrt\varepsilon$ 으로 두어 다음을 만족하는 점을 얻는다.

$$
f(\bar x)\le\inf f+\varepsilon,\qquad \Vert Df(\bar x)\Vert\le\sqrt\varepsilon
$$

셋째 조건에 $x=\bar x+th$ 를 넣고 $t\to 0^+$ 로 보내면 $Df(\bar x)h\ge -\sqrt\varepsilon\thinspace\Vert h\Vert$ 이 나온다. $\varepsilon=1/n^2$ 으로 두면 $f(x_n)\to\inf f$ 이고 $Df(x_n)\to 0$ 인 열이 생긴다. 이런 열을 최소화 Palais–Smale 열(Palais–Smale sequence)이라 한다.

## Caristi 고정점 정리

$X$ 가 완비 거리 공간이고 $\varphi$ 가 아래로 유계인 하반연속 함수일 때, 사상 $T:X\to X$ 가 모든 $x$ 에서 $d(x,Tx)\le\varphi(x)-\varphi(Tx)$ 를 만족하면 $T$ 는 고정점을 갖는다.[^2] 이것을 Caristi 고정점 정리(Caristi fixed point theorem)라 한다. $T$ 는 연속일 필요가 없다.

증명의 요지. $\varphi$ 에 $\varepsilon=\lambda=1$ 로 Ekeland 변분 원리를 적용해 $\bar x$ 를 얻는다. $T\bar x\ne\bar x$ 이면 셋째 조건에서 $\varphi(T\bar x)\gt\varphi(\bar x)-d(T\bar x,\bar x)$ 이고, 가정에서 $\varphi(T\bar x)\le\varphi(\bar x)-d(\bar x,T\bar x)$ 이므로 모순이다.

## 축약사상 고정점 정리

$T$ 가 비율 $k\lt 1$ 의 축약사상이면 $\varphi(x)=d(x,Tx)/(1-k)$ 가 Caristi 정리의 조건을 만족한다. 확인할 부등식은 다음과 같고, 이것은 $d(Tx,T^2x)\le k\thinspace d(x,Tx)$ 와 같다.

$$
(1-k)\thinspace d(x,Tx)\le d(x,Tx)-d(Tx,T^2x)
$$

그래서 [축약사상 고정점 정리](banach-fixed-point.md)의 존재 부분이 Ekeland 변분 원리에서 나온다.

## 완비성의 판정

거리 공간 $X$ 위의 모든 하반연속 함수에서 Ekeland 변분 원리가 성립하면 $X$ 는 완비다.[^3] 완비가 아니면 수렴하지 않는 Cauchy 수열 $(x_n)$ 을 잡고, 함수 $f(x)=2\lim_n d(x,x_n)$ 을 쓴다. 이 함수의 하한은 $0$ 이지만 $\varepsilon=\lambda=1$ 에서 셋째 조건을 만족하는 점이 없다.

셋째 조건에 $x=x_m$ 을 넣고 $m\to\infty$ 로 보내면 $\lim_n d(\bar x,x_n)\le 0$ 이 나와 $(x_n)$ 이 $\bar x$ 로 수렴하게 된다. 따라서 이 원리는 완비성과 동치다.

# 활용

- [변분법](calculus-of-variations.md). 범함수가 아래로 유계이지만 최솟점의 존재를 바로 알 수 없을 때, 기울기가 작은 점 절의 Palais–Smale 열을 먼저 만들고 Palais–Smale 조건(Palais–Smale condition)으로 그 열의 수렴을 보여 최솟점을 얻는다.
- Bishop–Phelps 정리(Bishop–Phelps theorem). Banach 공간의 닫힌 볼록 집합에서 지지 범함수를 갖는 경계점이 경계에서 조밀하다는 정리이고, 존재 증명 절의 순서 $\preceq$ 가 이 증명에서 처음 쓰였다.[^4]
- [볼록 켤레](convex-conjugate.md). 하반연속 볼록함수의 [부분미분](subdifferential.md)이 공집합이 아닌 점이 정의역에서 조밀하다는 Brøndsted–Rockafellar 정리가 이 원리의 볼록 판본이다.
- 최적 제어. 최적 제어가 존재하지 않는 문제에서 $\varepsilon$-최적 제어가 [Pontryagin 최대 원리](pontryagin-maximum-principle.md)의 근사 판본을 만족함을 보이는 데 쓴다.[^1]

[^1]: I. Ekeland, "On the variational principle", *Journal of Mathematical Analysis and Applications* 47, 1974, pp. 324–353.
[^2]: J. Caristi, "Fixed point theorems for mappings satisfying inwardness conditions", *Transactions of the American Mathematical Society* 215, 1976, pp. 241–251.
[^3]: F. Sullivan, "A characterization of complete metric spaces", *Proceedings of the American Mathematical Society* 83, 1981, pp. 345–346.
[^4]: E. Bishop, R. R. Phelps, "A proof that every Banach space is subreflexive", *Bulletin of the American Mathematical Society* 67, 1961, pp. 97–98.

# 연관 문서

## 선수지식

- [축약사상 고정점 정리](banach-fixed-point.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization #functional_analysis
