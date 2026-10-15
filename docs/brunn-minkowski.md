# Brunn–Minkowski 부등식

# 개요

Brunn–Minkowski 부등식은 두 집합의 Minkowski 합의 부피에 하한을 준다. 부피의 $n$ 제곱근이 합에 대해 초가법적이라는 진술이고, 등호는 두 볼록체가 닮았을 때 성립한다. 고차원 등주부등식이 이 부등식의 귀결이다.

# 직관

평면에서 가늘고 긴 직사각형 $A=\lbrack 0,1\rbrack\times\lbrack 0,\varepsilon\rbrack$ 과 그것을 $90$ 도 돌린 $B=\lbrack 0,\varepsilon\rbrack\times\lbrack 0,1\rbrack$ 을 더한다. Minkowski 합 $A+B$ 는 한 변이 $1+\varepsilon$ 인 정사각형이므로 면적이 $(1+\varepsilon)^2$ 이고, $\varepsilon$ 이 작으면 $\vert A\vert=\vert B\vert=\varepsilon$ 보다 훨씬 크다. 두 직사각형이 같은 방향이면 다르다. $B'=\lbrack 0,t\rbrack\times\lbrack 0,t\varepsilon\rbrack$ 과 더하면 $A+B'$ 이 $\lbrack 0,1+t\rbrack\times\lbrack 0,(1+t)\varepsilon\rbrack$ 이고 면적이 $(1+t)^2\varepsilon$ 다. 방향이 어긋날수록 합이 커지므로 하한은 닮은 경우에서 나온다.

닮은 경우의 값을 보면 어떤 양이 더해지는지 나온다. 면적은 길이의 $2$ 차 동차량이라 $\vert A+tA\vert=(1+t)^2\vert A\vert$ 이고, 제곱근을 취하면 $\vert A+tA\vert^{1/2}=(1+t)\vert A\vert^{1/2}$ 로 $t$ 의 1차식이 된다.

$$
\vert A+B'\vert^{1/2}=(1+t)\sqrt\varepsilon=\vert A\vert^{1/2}+\vert B'\vert^{1/2}
$$

$n$ 차원에서는 $n$ 제곱근이 같은 일을 한다. 닮은 두 집합에서 $n$ 제곱근이 정확히 더해지고 방향이 어긋나면 더 커지므로, 부등식은 $n$ 제곱근 층위에서 적힌다.

# 정의

$A,B\subseteq\mathbb R^n$ 의 **Minkowski 합**은 다음이다.

$$
A+B=\lbrace a+b:a\in A,\thinspace b\in B\rbrace
$$

$A,B$ 와 $A+B$ 가 Lebesgue 가측이고 $A,B$ 가 공집합이 아니면 다음이 성립한다. $\vert\cdot\vert$ 은 Lebesgue 측도다.

$$
\vert A+B\vert^{1/n}\ge\vert A\vert^{1/n}+\vert B\vert^{1/n}
$$

콤팩트집합에서는 $A+B$ 가 콤팩트이므로 가측성 가정이 필요 없다. 일반 가측집합의 $A+B$ 는 가측이 아닐 수 있다.

## 곱 형태

$\lambda\in(0,1)$ 에 대해 다음을 곱 형태 또는 차원에 의존하지 않는 형태라 한다.

$$
\vert\lambda A+(1-\lambda)B\vert\ge\vert A\vert^{\lambda}\vert B\vert^{1-\lambda}
$$

# 성질

## 두 형태의 동등성

두 형태는 서로를 함의한다.

증명의 요지. 덧셈 형태에서 곱 형태로는 $\lambda A$ 와 $(1-\lambda)B$ 에 적용해 $\vert\lambda A+(1-\lambda)B\vert^{1/n}\ge\lambda\vert A\vert^{1/n}+(1-\lambda)\vert B\vert^{1/n}$ 을 얻고, 우변에 산술-기하 평균 부등식을 쓴다. 반대 방향은 $A'=A/\vert A\vert^{1/n}$ , $B'=B/\vert B\vert^{1/n}$ 으로 부피를 $1$ 로 맞추고 $\lambda=\vert A\vert^{1/n}/(\vert A\vert^{1/n}+\vert B\vert^{1/n})$ 을 넣는다.

## 상자 분해 증명

증명의 요지. 먼저 $A,B$ 가 좌표축에 평행한 상자인 경우를 본다. 변의 길이를 $a\_i,b\_i$ 라 하면 $A+B$ 가 변의 길이 $a\_i+b\_i$ 인 상자이므로, 보일 것은 다음 부등식이다.

$$
\prod\_i(a\_i+b\_i)^{1/n}\ge\prod\_i a\_i^{1/n}+\prod\_i b\_i^{1/n}
$$

양변을 좌변으로 나누면 $t\_i=a\_i/(a\_i+b\_i)$ 에 대한 $\prod t\_i^{1/n}+\prod(1-t\_i)^{1/n}\le1$ 이고, 이것이 산술-기하 평균 부등식이다.

상자의 유한 합집합으로는 귀납법으로 올린다. 두 집합의 상자 개수의 합에 대한 귀납이고, 한 좌표의 초평면으로 $A$ 를 갈라 양쪽의 부피 비를 $B$ 쪽에도 같게 맞춘 뒤 각 반쪽에 귀납 가정을 적용한다. 일반 콤팩트집합은 상자의 유한 합집합으로 밖에서 근사한다.[^1]

## 등호 조건

$A,B$ 가 볼록체일 때 등호는 $B$ 가 $A$ 의 평행이동과 양의 상수배일 때, 곧 두 집합이 닮았을 때에만 성립한다. 볼록이 아니면 등호가 성립하지 않을 수 있고, 한쪽이 한 점이면 양변이 같다.

## 등주부등식의 유도

$A$ 가 콤팩트이고 $B=\varepsilon B\_1$ 이 반지름 $\varepsilon$ 인 공이면 $A+\varepsilon B\_1$ 이 $A$ 의 $\varepsilon$ 근방이다. 부등식을 적용하고 $\varepsilon\to0$ 의 극한을 취한다.

$$
\vert A+\varepsilon B\_1\vert\ge\big(\vert A\vert^{1/n}+\varepsilon\omega\_n^{1/n}\big)^n\ge\vert A\vert+n\varepsilon\vert A\vert^{(n-1)/n}\omega\_n^{1/n}
$$

좌변에서 $\vert A\vert$ 를 빼고 $\varepsilon$ 으로 나눈 극한이 표면적이므로, 표면적과 부피 사이에 [등주부등식](isoperimetric-inequality.md)의 고차원 형태가 나온다. 여기서 $\omega\_n$ 은 단위공의 부피다.

## Prékopa–Leindler 부등식

함수 판으로 일반화된다. $\lambda\in(0,1)$ 이고 비음 가측함수 $f,g,h$ 가 모든 $x,y$ 에서 $h(\lambda x+(1-\lambda)y)\ge f(x)^{\lambda}g(y)^{1-\lambda}$ 를 만족하면 다음이 성립한다.

$$
\int h\ge\left(\int f\right)^{\lambda}\left(\int g\right)^{1-\lambda}
$$

$f,g,h$ 를 $A,B,\lambda A+(1-\lambda)B$ 의 지시함수로 두면 곱 형태가 나온다. 이 부등식에서 로그오목 측도가 Minkowski 합에 대해 같은 성질을 갖는 것이 따라온다.[^2]

## 가법적 조합론과의 대비

$\mathbb Z$ 의 유한집합에서는 $\vert A+B\vert\ge\vert A\vert+\vert B\vert-1$ 이고 등호는 두 집합이 같은 공차의 등차수열일 때 성립한다. 부피 대신 개수를 재므로 $n$ 제곱근이 없고, 닮음 대신 등차수열이 등호를 준다.

# 활용

- **[등주부등식](isoperimetric-inequality.md).** 고차원 등주부등식의 표준 증명이 위의 극한 논증이다. 변분법으로 극값 곡선을 찾는 방법과 달리 볼록성 가정 없이 콤팩트집합에서 성립한다.
- **[집중부등식](concentration-inequalities.md).** 측도의 집중 현상을 등주부등식에서 얻는 경로가 이 부등식을 거친다. 구면과 Gauss 측도에서 근방의 측도가 빠르게 $1$ 로 가는 것이 같은 틀의 결과다.
- **[볼록성](convexity.md).** 볼록체의 혼합부피에 대한 Alexandrov–Fenchel 부등식의 가장 간단한 경우가 Brunn–Minkowski 부등식이다. 혼합부피 전개의 계수들이 만족하는 부등식 체계의 출발 항이다.
- **로그오목 분포.** Prékopa–Leindler 부등식에서 로그오목 밀도의 주변분포가 다시 로그오목이고 합성곱이 로그오목인 것이 따라온다. 표본추출과 변분추론의 수렴 논증이 이 성질을 쓴다.

[^1]: Rolf Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, 2nd ed., Cambridge University Press, 2014, Chapter 7. 상자 분해 증명, 등호 조건, 혼합부피와의 관계.
[^2]: Richard Gardner, "The Brunn–Minkowski inequality", *Bulletin of the American Mathematical Society* 39 (2002), 355–405. 여러 증명과 Prékopa–Leindler 부등식의 위치.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [볼록성](convexity.md)

## 더 알아보기

- [등주부등식](isoperimetric-inequality.md)

#analysis #measure_theory #combinatorics
