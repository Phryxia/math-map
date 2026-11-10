# Peano 존재정리

# 개요

**Peano 존재정리(Peano existence theorem)** 는 초깃값 문제 $x'=f(t,x)$ , $x(t_0)=x_0$ 에서 $f$ 가 연속이기만 하면 해가 하나 이상 존재한다는 정리다. $x'=3x^{2/3}$ , $x(0)=0$ 에는 $x\equiv 0$ 과 $x=t^3$ 두 해가 있고, 반복으로 해를 찾는 방법은 $0$ 에 멈춰 $t^3$ 을 찾지 못한다. 이 정리는 반복 대신 Euler 꺾은선(Euler polygon) 근사해들을 그리고, 그 가운데 수렴하는 부분열의 극한으로 해를 얻는다.

# 직관

[상미분방정식](ordinary-differential-equations.md)의 초깃값 문제 $x'=3x^{2/3}$ , $x(0)=0$ 을 Picard 반복으로 풀어 본다. 반복은 $x_0(t)\equiv 0$ 에서 시작해 $x_{k+1}(t)=\int_0^t 3x_k(s)^{2/3}\thinspace ds$ 를 계산하는데, $x_0\equiv 0$ 을 넣으면 $x_1\equiv 0$ 이 나와 반복이 $0$ 에 멈춘다. 그런데 $x(t)=t^3$ 도 이 문제의 해다.

$x\mapsto 3x^{2/3}$ 의 기울기가 원점에서 무한대여서 $f$ 가 [Lipschitz 사상](lipschitz-maps.md)이 아니다. Lipschitz 상수 $K$ 가 없으면 구간을 $1/K$ 보다 짧게 잡아 적분 연산자를 축약사상으로 만들 수 없고, [축약사상 고정점 정리](banach-fixed-point.md)를 쓸 수 없다.

축약사상이 아니면 수렴하는 반복 대신 수렴하는 부분열을 찾는다. 시간축을 폭 $h$ 로 나누고 각 칸에서 기울기를 상수로 고정한 Euler 꺾은선 $x_h$ 를 그리면, 꺾은선의 기울기는 어디서나 $\max\vert f\vert$ 이하다. 그러므로 $h$ 를 바꿔 얻은 꺾은선들은 모두 같은 상수로 Lipschitz 이고 같은 유계 영역에 들어간다.

이 두 성질이 [Arzelà–Ascoli 정리](arzela-ascoli.md)의 가정이고, 정리는 균등수렴하는 부분열이 존재한다고 말한다. 그 극한이 해다.

# 정의

## 초깃값 문제

$D\subseteq\mathbb R\times\mathbb R^n$ 위에서 정의된 $f$ 와 점 $(t_0,x_0)\in D$ 에 대해, 구간 $I\ni t_0$ 에서 미분가능한 $x:I\to\mathbb R^n$ 이 다음을 만족하면 **초깃값 문제의 해(solution of the initial value problem)** 다.

$$
x'(t)=f(t,x(t))\thickspace (t\in I),\qquad x(t_0)=x_0
$$

$x'=3x^{2/3}$, $x(0)=0$ 에서 $x(t)=t^3$ 은 $x'=3t^2=3(t^3)^{2/3}$ 이므로 $I=\mathbb R$ 위의 해이고, $x\equiv 0$ 도 해다.

## Peano 존재정리

$R=\lbrace (t,x):\vert t-t_0\vert\le a,\thickspace \Vert x-x_0\Vert\le b\rbrace$ 에서 $f$ 가 연속이고 $M=\max_R\Vert f\Vert$ 라 하자. $\varepsilon=\min(a,b/M)$ 로 두면 구간 $\lbrack t_0-\varepsilon,\thickspace t_0+\varepsilon\rbrack$ 에서 초깃값 문제의 해가 적어도 하나 존재한다.[^1]

$f(t,x)=3x^{2/3}$, $(t_0,x_0)=(0,0)$, $a=b=1$ 이면 $M=3$ 이고 $\varepsilon=\min(1,1/3)=1/3$ 이다. 정리는 $\lbrack -1/3,1/3\rbrack$ 에서 해가 있다고 말하고, 위의 두 해가 그 예다. 정리는 존재만 주장하고 유일성은 주장하지 않는다.

# 성질

## 적분방정식 꼴

$f$ 가 연속이면 초깃값 문제의 해를 찾는 것은 적분방정식 $x(t)=x_0+\int_{t_0}^t f(s,x(s))\thinspace ds$ 를 만족하는 [연속함수](continuity.md) $x$ 를 찾는 것과 동치다. 한쪽은 적분하고 다른 쪽은 [미적분학의 기본 정리](fundamental-calculus.md)로 미분한다.

## Euler 꺾은선의 수렴

증명의 요지는 세 단계다.

- 폭 $h$ 의 분할에서 $x_h(t_0)=x_0$ 으로 두고 각 칸에서 기울기를 직전 절점의 값 $f(t_j,x_h(t_j))$ 로 고정해 꺾은선 $x_h$ 를 만든다. 기울기가 $M$ 이하이므로 $\Vert x_h(t)-x_h(s)\Vert\le M\vert t-s\vert$ 이고, 따라서 $\lbrace x_h\rbrace$ 는 동등연속(equicontinuous)이고 $\Vert x_h-x_0\Vert\le b$ 로 균등유계(uniformly bounded)다.
- Arzelà–Ascoli 정리로 [균등수렴](uniform-convergence.md)하는 부분열 $x_{h_k}\to x$ 를 얻는다.
- $f$ 는 콤팩트집합 $R$ 위에서 [균등연속](uniform-continuity.md)이므로 $f(s,x_{h_k}(s))$ 가 $f(s,x(s))$ 로 균등수렴한다. 꺾은선이 만족하는 적분 항등식에서 극한을 취하면 $x$ 가 적분방정식을 만족한다.

세 번째 단계가 균등수렴을 요구하므로 점별수렴만으로는 증명이 끝나지 않는다.

## 유일성의 실패

$x'=3x^{2/3}$ , $x(0)=0$ 의 해는 $c\ge 0$ 마다 다음과 같이 하나씩 있다.

$$
x_c(t)=\begin{cases}0 & (t\le c)\cr (t-c)^3 & (t\gt c)\end{cases}
$$

$x_c$ 는 $t=c$ 에서 도함수가 $0$ 으로 이어지므로 모든 점에서 방정식을 만족한다. 해집합은 연속체만큼 크다.

## Osgood 조건

Osgood 조건(Osgood condition)은 다음이다. $\Vert f(t,x)-f(t,y)\Vert\le\omega(\Vert x-y\Vert)$ 인 증가함수 $\omega$ 가 $\omega(0)=0$ 과 $\int_0^1 du/\omega(u)=\infty$ 를 만족하면 해가 유일하다.[^2] Lipschitz 조건은 $\omega(u)=Ku$ 인 경우이고, 위 예의 $\omega(u)=3u^{2/3}$ 은 $\int_0^1 u^{-2/3}du=3$ 이 유한해서 조건을 벗어난다. $0\lt u\lt 1/e$ 에서 $\omega(u)=u\log(1/u)$ 는 Lipschitz 꼴이 아니지만 $\int du/(u\log(1/u))$ 가 발산하므로 유일성을 준다.

증명은 두 해의 차이에 [Bihari 부등식](bihari-inequality.md)을 쓰는 것이다.

## 해의 연장

국소해를 끝점에서 다시 정리에 넣으면 구간을 넓힐 수 있고, 더 넓힐 수 없을 때까지 되풀이하면 최대 해(maximal solution)를 얻는다. 최대 해의 정의구간이 유계면 해는 $D$ 의 임의의 콤팩트 부분집합을 벗어난다. $x'=x^2$ , $x(0)=1$ 의 해 $x(t)=1/(1-t)$ 가 $t\to 1^-$ 에서 발산하는 것이 그 경우다.

## 무한차원에서의 실패

$\mathbb R^n$ 을 일반적인 Banach 공간으로 바꾸면 정리가 거짓이 된다. Dieudonné 는 수열공간 $c_0$ 에서 연속인 $f$ 로 해가 존재하지 않는 초깃값 문제를 만들었다.[^3] 증명이 닫힌 유계집합의 [콤팩트성](compactness.md)을 쓰는데 무한차원에서는 그것이 성립하지 않는다. Picard–Lindelöf 정리는 축약사상만 쓰므로 [Banach 공간](banach-spaces.md)에서도 그대로 성립한다.

# 활용

- [벡터장](vector-fields.md)이 연속이기만 한 제어 문제와 미분포함(differential inclusion)에서 궤적의 존재를 이 정리로 얻는다. Lipschitz 조건은 되먹임이 불연속이면 깨진다.
- 상미분방정식의 수치해석에서 Euler 법의 수렴 증명이 이 정리의 증명과 같은 구조다. 꺾은선 열의 동등연속성과 Arzelà–Ascoli 정리를 쓴다.
- 편미분방정식의 약해(weak solution)를 구성할 때 근사해 열의 콤팩트성에서 극한을 꺼내는 논법이 같은 형태로 반복된다.

[^1]: Philip Hartman, *Ordinary Differential Equations*, 2nd ed., Chapter II §2. Peano 의 존재정리와 Euler 꺾은선을 쓰는 증명.

[^2]: Philip Hartman, *Ordinary Differential Equations*, 2nd ed., Chapter III §6. Osgood 의 유일성 판정.

[^3]: Jean Dieudonné, Deux exemples singuliers d'équations différentielles, *Acta Scientiarum Mathematicarum (Szeged)* 12 (1950), 38–40. $c_0$ 에서 연속인 우변으로 해가 없는 초깃값 문제.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)
- [Arzelà–Ascoli 정리](arzela-ascoli.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #topology #functional_analysis #theorem
