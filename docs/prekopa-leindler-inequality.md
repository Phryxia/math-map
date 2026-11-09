# Prékopa–Leindler 부등식

# 개요

**Prékopa–Leindler 부등식(Prékopa–Leindler inequality)** 은 [Brunn–Minkowski 부등식](brunn-minkowski.md)을 집합 대신 음이 아닌 함수에 대해 쓴 적분 부등식이다. 두 구간 $\lbrack 0,1\rbrack$ 과 $\lbrack 0,3\rbrack$ 의 점을 하나씩 골라 중점을 모으면 길이가 $2$ 인 구간이 되는데, 구간 대신 종 모양 밀도 두 개를 놓으면 "중점의 집합" 이 무엇인지부터 정해야 한다. 이 부등식은 중점에서의 함숫값을 두 함숫값의 기하평균 이상으로 두는 조건으로 그 비교를 적분의 부등식으로 바꾸고, 로그오목 분포의 주변분포가 다시 로그오목이라는 것을 준다.

# 직관

$A=\lbrack 0,1\rbrack$, $B=\lbrack 0,3\rbrack$ 에서 $a\in A$, $b\in B$ 의 중점 $(a+b)/2$ 를 전부 모으면 $\lbrack 0,2\rbrack$ 이다. 길이 $2$ 는 두 길이의 기하평균 $\sqrt{1\cdot 3}\approx 1.732$ 이상이다. 이것이 Brunn–Minkowski 부등식의 곱 꼴 $\vert\frac12A+\frac12B\vert\ge\vert A\vert^{1/2}\vert B\vert^{1/2}$ 이다.

집합을 함수로 바꾼다. $f=1_A$, $g=1_B$ 이면 "$a\in A$, $b\in B$ 이면 중점이 $C$ 에 든다" 는 $h=1_C$ 가 $h((x+y)/2)\ge\sqrt{f(x)g(y)}$ 를 만족한다는 것과 같다. 이 조건은 지시함수가 아닌 함수에도 뜻이 있다.

$f(x)=e^{-x^2}$, $g(y)=e^{-(y-2)^2}$ 이면 $z=(x+y)/2$ 를 고정하고 $x=z-t$, $y=z+t$ 로 둘 때 $x^2+(y-2)^2=(z-t)^2+(z+t-2)^2$ 가 $t=1$ 에서 최소 $2(z-1)^2$ 이다. 그래서 조건을 만족하는 가장 작은 $h$ 는 $h(z)=e^{-(z-1)^2}$ 이다.

세 함수의 적분은 모두 $\sqrt\pi$ 이고 $\int h=\sqrt{\int f\int g}$ 로 등호가 성립한다. 구간에서의 부등식이 함수에서도 성립하고, 평행이동한 Gauss 함수가 등호를 준다.

# 정의

## 기하평균 조건

$0\lt\lambda\lt 1$ 이고 $f,g,h\colon\mathbb R^n\to\lbrack 0,\infty)$ 가 가측일 때, 모든 $x,y\in\mathbb R^n$ 에서

$$
h(\lambda x+(1-\lambda)y)\ge f(x)^{\lambda}g(y)^{1-\lambda}
$$

이면 세 함수가 $\lambda$ 에 대한 Prékopa–Leindler 조건을 만족한다고 한다. 직관 절의 세 함수는 $\lambda=1/2$ 에서 이 조건을 등호로 만족한다.

## 로그오목 함수

$\varphi\colon\mathbb R^n\to\lbrack 0,\infty)$ 가 모든 $x,y$ 와 $0\lt\lambda\lt 1$ 에서 $\varphi(\lambda x+(1-\lambda)y)\ge\varphi(x)^\lambda\varphi(y)^{1-\lambda}$ 이면 **로그오목(log-concave)** 이라 한다. $\varphi=e^{-V}$ 이고 $V$ 가 [볼록](convexity.md) 함수인 것과 같다. 직관 절의 $e^{-x^2}$, 볼록집합의 지시함수, 정규분포의 밀도가 로그오목이다. 로그오목 함수 $\varphi$ 는 $f=g=h=\varphi$ 로 조건을 만족한다.

# 성질

## Prékopa–Leindler 부등식

세 함수가 $\lambda$ 에 대한 Prékopa–Leindler 조건을 만족하면

$$
\int_{\mathbb R^n}h\ge\left(\int_{\mathbb R^n}f\right)^{\lambda}\left(\int_{\mathbb R^n}g\right)^{1-\lambda}
$$

이다[^1][^2].

## 1 차원의 증명

$f$, $g$ 의 최댓값이 $1$ 이라 해도 된다. $f$ 를 $af$, $g$ 를 $bg$, $h$ 를 $a^\lambda b^{1-\lambda}h$ 로 바꾸면 조건과 결론이 함께 바뀌기 때문이다. $0\lt t\lt 1$ 에서 수준집합 $\lbrace f\ge t\rbrace$, $\lbrace g\ge t\rbrace$ 는 비어 있지 않고, 조건에 따라

$$
\lbrace h\ge t\rbrace\supseteq\lambda\lbrace f\ge t\rbrace+(1-\lambda)\lbrace g\ge t\rbrace
$$

다. 직선에서 비어 있지 않은 두 집합의 Minkowski 합의 길이는 두 길이의 합 이상이므로 $\vert\lbrace h\ge t\rbrace\vert\ge\lambda\vert\lbrace f\ge t\rbrace\vert+(1-\lambda)\vert\lbrace g\ge t\rbrace\vert$ 다. $t$ 에 대해 $0$ 부터 $1$ 까지 적분하면 $\int h\ge\lambda\int f+(1-\lambda)\int g$ 이고, 산술평균은 기하평균 이상이므로 결론이 나온다.

## 차원에 대한 귀납

$\mathbb R^{n}=\mathbb R^{n-1}\times\mathbb R$ 로 쓰고 마지막 좌표 $s$ 를 고정한 함수 $f_s=f(\cdot,s)$ 를 둔다. $s=\lambda s_1+(1-\lambda)s_2$ 이면 $h_s$, $f_{s_1}$, $g_{s_2}$ 가 $\mathbb R^{n-1}$ 에서 조건을 만족하므로 귀납 가정에서 $F(s)=\int f_s$ 등이 $\mathbb R$ 에서 조건을 만족한다. 1 차원 경우를 $F$, $G$, $H$ 에 쓰고 [Fubini–Tonelli 정리](fubini-tonelli.md)로 다시 합치면 $n$ 차원 경우가 된다.

## Brunn–Minkowski 부등식의 유도

콤팩트집합 $A,B\subseteq\mathbb R^n$ 에서 $f=1_A$, $g=1_B$, $h=1_{\lambda A+(1-\lambda)B}$ 로 두면 조건이 성립하고

$$
\vert\lambda A+(1-\lambda)B\vert\ge\vert A\vert^{\lambda}\vert B\vert^{1-\lambda}
$$

이다. $A$, $B$ 를 부피 $1$ 로 정규화한 뒤 이 꼴을 쓰면 $\vert A+B\vert^{1/n}\ge\vert A\vert^{1/n}+\vert B\vert^{1/n}$ 이 나온다.

## Prékopa 정리

$F\colon\mathbb R^{m}\times\mathbb R^{n}\to\lbrack 0,\infty)$ 가 로그오목이면 $x\mapsto\int_{\mathbb R^n}F(x,y)\thinspace dy$ 도 로그오목이다[^1]. $x=\lambda x_1+(1-\lambda)x_2$ 에서 $h=F(x,\cdot)$, $f=F(x_1,\cdot)$, $g=F(x_2,\cdot)$ 가 조건을 만족하기 때문이다. 결과는 다음과 같다.

- 로그오목 밀도의 주변분포의 밀도는 로그오목이다. 볼록체 위 균등분포의 한 좌표의 분포가 그 예다.
- 로그오목 함수 둘의 [합성곱](convolution.md) $\int\varphi(x-y)\psi(y)\thinspace dy$ 는 로그오목이다. $(x,y)\mapsto\varphi(x-y)\psi(y)$ 가 로그오목이기 때문이다.
- 로그오목 측도 $\mu$ 는 $\mu(\lambda A+(1-\lambda)B)\ge\mu(A)^\lambda\mu(B)^{1-\lambda}$ 를 만족한다. 이것은 Borell 의 정리(Borell's theorem)다.

## Gauss 측도의 집중

$\gamma$ 를 $\mathbb R^n$ 의 표준 [정규분포](normal-distribution.md)라 하고 $\phi$ 를 그 밀도라 하자. 닫힌 집합 $A$ 에 대해

$$
\gamma(A)\int e^{d(x,A)^2/4}\thinspace d\gamma(x)\le 1
$$

이다[^3]. $f=e^{d(\cdot,A)^2/4}\phi$, $g=1_A\phi$, $h=\phi$, $\lambda=1/2$ 로 둔다. $y\in A$ 이면 $d(x,A)\le\vert x-y\vert$ 이고 $\frac12\vert x\vert^2+\frac12\vert y\vert^2=\vert\frac{x+y}2\vert^2+\frac14\vert x-y\vert^2$ 이므로 조건이 성립하고, $\int h=1$ 이다. Markov 부등식(Markov's inequality)을 쓰면 $\gamma(d(x,A)\gt r)\le e^{-r^2/4}/\gamma(A)$ 가 나온다. 지수의 상수 $1/4$ 은 [Gauss 등주부등식](gaussian-isoperimetric-inequality.md)이 주는 $1/2$ 보다 약하지만, 증명이 이 부등식 하나로 끝난다.

## Brascamp–Lieb 부등식

함수 여러 개의 선형 사영의 곱을 적분하는 Brascamp–Lieb 부등식(Brascamp–Lieb inequality)과 그 역꼴은 이 부등식과 같은 모양의 조건으로 쓰이고, Prékopa–Leindler 부등식은 그 역꼴의 특수한 경우다[^2].

# 활용

- 확률분포의 표본추출. 로그오목 분포의 주변분포가 로그오목이므로, 로그오목 분포에서 [Langevin 동역학](langevin-dynamics.md)이 수렴한다는 보장을 좌표 일부를 적분한 분포에도 쓸 수 있다.
- 볼록기하. 볼록체 $K$ 의 단면 부피 $s\mapsto\vert K\cap\lbrace x_n=s\rbrace\vert$ 는 Brunn 정리(Brunn's theorem)에 따라 $1/(n-1)$ 제곱이 오목하다. 볼록체 대신 로그오목 밀도의 단면 적분에서는 Prékopa 정리가 로그오목성을 준다.
- [집중부등식](concentration-inequalities.md). Gauss 측도의 집중을 위 계산으로 얻고, 로그오목 밀도 $e^{-V}$ 에서 $V$ 가 강볼록이면 같은 계산이 같은 꼴의 집중을 준다.

[^1]: A. Prékopa, "On logarithmic concave measures and functions", *Acta Scientiarum Mathematicarum (Szeged)* 34 (1973), 335–343. L. Leindler, "On a certain converse of Hölder's inequality II", *Acta Scientiarum Mathematicarum (Szeged)* 33 (1972), 217–223.

[^2]: Richard Gardner, "The Brunn–Minkowski inequality", *Bulletin of the American Mathematical Society* 39 (2002), 355–405. Prékopa–Leindler 부등식, Borell 의 정리, Brascamp–Lieb 부등식과의 관계가 있다.

[^3]: B. Maurey, "Some deviation inequalities", *Geometric and Functional Analysis* 1 (1991), 188–197.

# 연관 문서

## 선수지식

- [Brunn–Minkowski 부등식](brunn-minkowski.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #probability #measure_theory
