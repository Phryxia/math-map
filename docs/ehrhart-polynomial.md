# Ehrhart 다항식

# 개요

**Ehrhart 다항식(Ehrhart polynomial)** 은 격자 다면체를 정수배로 팽창했을 때 그 안의 격자점 개수를 팽창 인자의 다항식으로 적은 것이다. 최고차 계수가 다면체의 부피이고 상수항이 $1$ 이므로, 격자점을 세는 조합 문제와 부피를 재는 기하 문제가 한 다항식의 계수로 묶인다. 평면에서는 Pick 정리가 이 다항식의 계수를 모두 정한다.

# 직관

단위정사각형 $P=\lbrack 0,1\rbrack^2$ 를 $t$ 배 팽창한 $tP=\lbrack 0,t\rbrack^2$ 안의 격자점을 센다. 각 좌표가 $0$ 부터 $t$ 까지이므로 개수는 $(t+1)^2=t^2+2t+1$ 이다. 면적 $t^2$ 보다 $2t+1$ 만큼 많고, 이 차이는 경계에 놓인 점에서 온다.

꼭짓점이 $(0,0)$, $(1,0)$, $(0,1)$ 인 삼각형 $Q$ 로 같은 셈을 한다. $tQ$ 는 $x,y\ge 0$, $x+y\le t$ 인 점들이므로 격자점 개수는 $\binom{t+2}{2}=\tfrac12t^2+\tfrac32t+1$ 이다. 최고차 계수 $\tfrac12$ 가 $Q$ 의 면적이고 상수항은 다시 $1$ 이다.

두 경우 모두 격자점 개수가 $t$ 의 2차 다항식이고, 최고차 계수는 면적, 상수항은 $1$ 이다. 가운데 계수는 정사각형에서 $2$, 삼각형에서 $\tfrac32$ 이고 각각 경계 위 격자점 개수 $4$ 와 $3$ 의 절반이다.

$t$ 를 키우면 격자점 개수를 $t^2$ 으로 나눈 값이 면적으로 간다. 이것은 [Riemann 적분](riemann-integral.md)의 근사와 같은 이야기다. Ehrhart 다항식은 그 근사의 오차가 $t$ 의 다항식이고 계수가 다면체의 기하량이라는 것까지 말한다.

# 정의

$P\subset\mathbb R^n$ 을 꼭짓점이 모두 $\mathbb Z^n$ 에 속하는 콤팩트 볼록 다면체라 하고 **격자 다면체**라 부른다. 양의 정수 $t$ 에 대해

$$
L_P(t) = \char35{}\lbrace tP\cap\mathbb Z^n\rbrace
$$

를 $P$ 의 격자점 셈 함수라 한다. $tP=\lbrace tx: x\in P\rbrace$ 다.

**정리**(Ehrhart). $P$ 가 $d$ 차원 격자 다면체이면 $L_P$ 는 $t$ 의 $d$ 차 유리계수 다항식과 모든 양의 정수에서 일치한다.[^1] 이 다항식을 $P$ 의 **Ehrhart 다항식**이라 한다.

## 계수

$d=n$ 인 경우 다음이 성립한다.

- $t^n$ 의 계수는 $\mathrm{vol}(P)$ 다.
- $t^{n-1}$ 의 계수는 $\partial P$ 의 각 면을 그 면이 놓인 격자 초평면으로 정규화해 잰 부피의 합의 절반이다.
- 상수항은 $1$ 이다. 이것은 $P$ 의 [Euler 지표](euler-characteristic.md)다.

최고차와 그 다음 계수의 기하적 의미는 Steiner 공식이 부풀린 부피의 계수에 부피와 겉면적을 주는 것과 같은 구조다([혼합부피](mixed-volumes.md)). 중간 계수들은 일반적으로 부피나 겉면적 같은 단일한 기하량으로 적히지 않는다.

## Ehrhart 급수

$$
\mathrm{Ehr}\_P(z) = \sum\_{t\ge 0} L_P(t)\thinspace z^t = \frac{h^\ast(z)}{(1-z)^{n+1}}
$$

로 적을 때의 분자 $h^\ast(z)=h^\ast_0+h^\ast_1z+\dots+h^\ast_nz^n$ 을 $h^\ast$ 다항식이라 한다. $L_P$ 가 $n$ 차 다항식인 것과 이 [생성함수](generating-functions.md)가 위 꼴로 적히는 것이 같은 진술이다.

# 성질

## 상반성

**정리**(Ehrhart–Macdonald). $P$ 의 내부를 $P^\circ$ 라 하면 모든 양의 정수 $t$ 에서

$$
L_P(-t) = (-1)^n L\_{P^\circ}(t)
$$

이다.[^1] 여기서 $L\_{P^\circ}(t)=\char35{}\lbrace tP^\circ\cap\mathbb Z^n\rbrace$ 다.

왼쪽은 다항식 $L_P$ 에 음의 정수를 대입한 값이고 오른쪽은 내부 격자점의 개수다. 단위정사각형에서 $L_P(t)=(t+1)^2$ 이므로 $L_P(-t)=(t-1)^2$ 이고, $tP$ 의 내부 격자점은 각 좌표가 $1$ 부터 $t-1$ 까지이므로 개수가 $(t-1)^2$ 다.

## Pick 정리

$n=2$ 이고 $P$ 가 격자 다각형이면 내부 격자점 개수 $I$ 와 경계 격자점 개수 $B$ 에 대해

$$
\mathrm{vol}(P) = I + \tfrac{B}{2} - 1
$$

이다.

계수 공식에서 $L_P(t)=\mathrm{vol}(P)t^2+\tfrac{B}{2}t+1$ 이다. $t=1$ 을 넣으면 $L_P(1)=I+B$ 이므로 $I+B=\mathrm{vol}(P)+\tfrac{B}{2}+1$ 이고 정리가 나온다. ∎

## h* 다항식의 비음성

**정리**(Stanley). $h^\ast$ 다항식의 계수는 모두 음이 아닌 정수다.[^2]

증명의 요지는 $P$ 위의 뿔 $\mathrm{cone}(P)=\lbrace (t x,t): x\in P,\thinspace t\ge 0\rbrace$ 의 격자점이 생성하는 반군환을 보는 것이다. 이 환은 등급환이고 그 Hilbert 급수가 $\mathrm{Ehr}\_P(z)$ 이며, Cohen–Macaulay 성질에서 분자 계수의 비음성이 따라온다. $L_P$ 의 계수 자체는 음수가 될 수 있으므로 비음성 진술은 $h^\ast$ 쪽에서만 성립한다.

## 유리 다면체와 준다항식

꼭짓점이 유리점이지만 격자점이 아니면 $L_P$ 는 다항식이 아니고 준다항식이다. 곧 어떤 양의 정수 $q$ 가 있어 $t$ 의 $q$ 를 법으로 한 잉여류마다 다른 다항식이 되고, 그 최소의 $q$ 는 꼭짓점 좌표의 분모들의 최소공배수를 나눈다. 꼭짓점이 $(0,0)$ 과 $(\tfrac12,0)$ 과 $(0,\tfrac12)$ 인 삼각형이 $t$ 의 홀짝에 따라 다른 식을 준다.

# 활용

- **부피 계산.** 다면체가 부등식으로만 주어졌을 때 적분 대신 $L_P(t)$ 를 $n+1$ 개의 $t$ 에서 세고 보간해 최고차 계수로 부피를 얻는다. 격자점 세기를 생성함수로 바꾸는 [Barvinok 알고리즘](barvinok-algorithm.md)이 고정 차원에서 다항시간이다.
- **정수계획법의 해의 개수.** 연립 부등식의 정수해 개수가 그 부등식이 정의하는 다면체의 격자점 개수다. $t$ 에 의존하는 우변을 가진 계열에서 해의 개수가 $t$ 의 준다항식이 된다.
- **분할수와 Z-다면체.** $x_1+2x_2+\dots+kx_k=t$ 의 음이 아닌 정수해 개수가 어떤 유리 다면체의 격자점 셈 함수다. 그 준다항식이 분할수의 표현을 준다.
- **등급환의 Hilbert 급수.** 격자 다면체의 뿔에서 만든 반군환의 Hilbert 급수가 Ehrhart 급수이므로, 환의 차원과 중복도가 각각 $n+1$ 과 부피의 정규화에 대응한다. 토릭 다양체의 교차수 계산이 이 대응을 쓴다.

[^1]: Matthias Beck and Sinai Robins, *Computing the Continuous Discretely*, 2nd ed., Springer, 2015, ch. 3 and ch. 4.
[^2]: Richard P. Stanley, "Decompositions of rational convex polytopes", *Annals of Discrete Mathematics* 6 (1980), 333–342.

# 연관 문서

## 선수지식

- [생성함수](generating-functions.md)
- [혼합부피](mixed-volumes.md)

## 더 알아보기

- [Barvinok 알고리즘](barvinok-algorithm.md)

#combinatorics #analysis #algebra
