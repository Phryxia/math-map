# 산술-기하 평균 부등식

# 개요

**산술-기하 평균 부등식(arithmetic mean–geometric mean inequality, AM–GM inequality)** 은 양수 몇 개를 더해 개수로 나눈 값이 그 수들을 곱해 거듭제곱근을 취한 값보다 작지 않다는 부등식이다. 길이 $40$ m 의 울타리로 직사각형 밭을 둘러칠 때 가로와 세로의 합은 $20$ m 로 정해져 있고, 넓이는 두 변의 곱이다. 어느 직사각형의 넓이가 가장 큰지가 물음이다.

이 부등식은 두 변의 합이 정해지면 곱이 $(20/2)^2=100$ 을 넘지 못하고 두 변이 같을 때만 $100$ 이 된다고 답한다. 그래서 가로와 세로가 $10$ m 인 정사각형 밭이 가장 넓다.

# 직관

가로를 $x$ m 로 두면 세로는 $20-x$ m 이고 넓이는 $x(20-x)$ 다. 몇 값을 넣으면 다음과 같다.

| 가로 | 세로 | 넓이 |
| ---- | ---- | ---- |
| 5    | 15   | 75   |
| 8    | 12   | 96   |
| 10   | 10   | 100  |
| 12   | 8    | 96   |

넓이는 가로가 $10$ 일 때 가장 크고, $10$ 에서 같은 만큼 벗어난 $8$ 과 $12$ 에서 같다. 그래서 가로를 $10+d$, 세로를 $10-d$ 로 쓴다. 넓이는 다음과 같다.

$$
(10+d)(10-d)=100-d^2
$$

$d^2$ 은 음수가 아니므로 넓이는 $100$ 이하이고, $d=0$ 일 때만 $100$ 이다. $10$ 은 두 변의 합을 $2$ 로 나눈 값이고 $\sqrt{100}=10$ 은 넓이의 제곱근이다. 두 변이 얼마이든 합의 절반이 넓이의 제곱근 이상이다.

# 정의

음이 아닌 실수 $x_1,\dots,x_n$ 에 대해

$$
A=\frac{x_1+x_2+\cdots+x_n}{n},\qquad G=\sqrt[n]{x_1x_2\cdots x_n}
$$

으로 둔다. $A$ 를 **산술평균(arithmetic mean)**, $G$ 를 **기하평균(geometric mean)** 이라 한다. 직관 절의 가로 $8$, 세로 $12$ 에서 $A=10$ 이고 $G=\sqrt{96}\approx 9.80$ 이다.

**산술-기하 평균 부등식** 은 $G\le A$ 이고, 등호가 $x_1=x_2=\cdots=x_n$ 일 때만 성립한다는 진술이다. 직관 절의 표는 $n=2$ 인 경우이고, 등호는 가로와 세로가 같은 정사각형에서 성립한다.

음이 아닌 가중치 $\lambda_1,\dots,\lambda_n$ 이 $\lambda_1+\cdots+\lambda_n=1$ 을 만족할 때 다음을 **가중 산술-기하 평균 부등식(weighted AM–GM inequality)** 이라 한다.

$$
x_1^{\lambda_1}x_2^{\lambda_2}\cdots x_n^{\lambda_n}\le\lambda_1x_1+\lambda_2x_2+\cdots+\lambda_nx_n
$$

모든 가중치가 $1/n$ 이면 위의 $G\le A$ 다.

# 성질

## 두 수의 경우

$a,b\ge 0$ 이면 $(\sqrt a-\sqrt b)^2\ge 0$ 이다. 전개하면 $a+b-2\sqrt{ab}\ge 0$ 이고, 정리하면 $\sqrt{ab}\le(a+b)/2$ 다. 등호는 $\sqrt a=\sqrt b$, 곧 $a=b$ 일 때만 성립한다. 직관 절의 $100-d^2\le 100$ 은 $a=10+d$, $b=10-d$ 인 경우다.

## Cauchy 의 귀납 증명

Cauchy 는 [수학적 귀납법](mathematical-induction.md)을 두 방향으로 써서 $n$ 개의 경우를 증명했다[^1].

개수를 두 배로 늘리는 단계는 두 수의 경우를 두 번 쓴다. 네 수 $a,b,c,d$ 에서 다음이 성립한다.

$$
\sqrt[4]{abcd}=\sqrt{\sqrt{ab}\thinspace\sqrt{cd}}\le\frac{\sqrt{ab}+\sqrt{cd}}{2}\le\frac{1}{2}\Big(\frac{a+b}{2}+\frac{c+d}{2}\Big)
$$

같은 방법으로 $n=2^k$ 인 모든 경우가 증명된다.

개수를 줄이는 단계는 평균을 채워 넣는다. $n\lt 2^k=m$ 이고 $x_1,\dots,x_n$ 의 산술평균이 $A$ 이면, 이 수들에 $A$ 를 $m-n$ 개 더 붙인 $m$ 개의 산술평균도 $A$ 다. $m$ 개에 대한 부등식으로 $x_1\cdots x_n\thinspace A^{m-n}\le A^m$ 이고, 양변을 $A^{m-n}$ 으로 나누면 $x_1\cdots x_n\le A^n$ 이다.

## 로그의 오목성에 의한 증명

모든 $x_i$ 가 양수라 하자. $\log$ 는 오목함수이므로 [Jensen 부등식](jensen-inequality.md)의 유한 꼴에서 다음이 나온다.

$$
\lambda_1\log x_1+\cdots+\lambda_n\log x_n\le\log(\lambda_1x_1+\cdots+\lambda_nx_n)
$$

좌변은 $\log\bigl(x_1^{\lambda_1}\cdots x_n^{\lambda_n}\bigr)$ 이고 [지수함수](exponential-function.md)는 증가하므로, 양변에 지수를 취하면 가중 산술-기하 평균 부등식이다. $x_i$ 가운데 $0$ 이 있으면 좌변이 $0$ 이라 부등식은 바로 성립한다.

$\log$ 는 [볼록성](convexity.md)의 뜻에서 엄밀히 오목하므로, 양의 가중치를 받은 $x_i$ 가 모두 같을 때만 등호가 성립한다.

## 평균들의 순서

양수 $x_1,\dots,x_n$ 에 대해 **조화평균(harmonic mean)** $H$ 와 **제곱평균(quadratic mean)** $Q$ 를 다음으로 둔다.

$$
H=\frac{n}{1/x_1+\cdots+1/x_n},\qquad Q=\sqrt{\frac{x_1^2+\cdots+x_n^2}{n}}
$$

네 평균은 다음 순서를 만족한다.

$$
\min_i x_i\le H\le G\le A\le Q\le\max_i x_i
$$

$H\le G$ 는 $1/x_1,\dots,1/x_n$ 에 산술-기하 평균 부등식을 쓰고 역수를 취해 얻는다. $A\le Q$ 는 $(1,\dots,1)$ 과 $(x_1,\dots,x_n)$ 에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓴 결과다. 직관 절의 $8$ 과 $12$ 에서 $H=9.6$, $G\approx 9.80$, $A=10$, $Q=\sqrt{104}\approx 10.20$ 이다.

## 곱에 대한 Young 부등식

$p,q\gt 1$ 이 $1/p+1/q=1$ 을 만족하고 $a,b\ge 0$ 이라 하자. 가중 산술-기하 평균 부등식에 $x_1=a^p$, $x_2=b^q$, $\lambda_1=1/p$, $\lambda_2=1/q$ 를 넣으면 다음이 나온다.

$$
ab\le\frac{a^p}{p}+\frac{b^q}{q}
$$

이것을 **곱에 대한 Young 부등식(Young's inequality for products)** 이라 한다. 등호는 $a^p=b^q$ 일 때만 성립한다. $p=q=2$ 이면 $ab\le(a^2+b^2)/2$ 로, 두 수 $a^2$, $b^2$ 의 산술-기하 평균 부등식이다.

# 활용

- 합이 정해진 양들의 곱의 최댓값. 겉넓이나 모서리 길이의 합이 정해진 상자의 부피 문제는 직관 절과 같은 방법으로 풀린다. [Lagrange 승수법](lagrange-multipliers.md)은 합 조건 아래에서 로그의 합을 최대화해 같은 부등식을 다시 얻는다.
- [Hölder 부등식](holder-inequality.md)의 증명은 곱에 대한 Young 부등식을 각 점에서 쓰고 적분한다.
- [산술기하 평균](arithmetic-geometric-mean.md)의 반복에서 산술평균 수열이 감소하고 기하평균 수열이 증가한다는 것은 두 수의 경우에서 나온다.
- [Brunn–Minkowski 부등식](brunn-minkowski.md)의 상자 경우는 변의 길이 비율에 산술-기하 평균 부등식을 써서 증명된다.
- [van der Waerden 부등식](van-der-waerden-inequality.md)의 증명은 가중 산술-기하 평균 부등식으로 다항식의 각 인수를 누른다.

[^1]: A.-L. Cauchy, *Cours d'analyse de l'École royale polytechnique*, 1821, Note II.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)

## 더 알아보기

- [Muirhead 부등식](muirhead-inequality.md)
- [Carleman 부등식](carleman-inequality.md)

#analysis #optimization
