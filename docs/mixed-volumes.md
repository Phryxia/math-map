# 혼합부피

# 개요

**혼합부피(mixed volume)** 는 볼록체 여러 개를 더해 부풀린 도형의 부피를 계수별로 나눠 얻는 양이다. 한 변이 $a$ 인 정사각형을 한 변이 $b$ 인 정사각형으로 $t$ 만큼 부풀리면 넓이가 $a^2+2ab\thinspace t+b^2t^2$ 이고, 가운데 계수 $2ab$ 는 어느 한 정사각형만의 양이 아니다. 혼합부피는 이런 계수에 이름을 붙여, 부피와 겉넓이 같은 양을 한 다항식의 계수로 다루고 그 사이의 부등식을 증명한다.

# 직관

두 집합 $K$, $L$ 과 $t\ge 0$ 에 대해 $K+tL=\lbrace x+ty:x\in K,\thinspace y\in L\rbrace$ 를 $K$ 를 $L$ 로 $t$ 만큼 부풀린 집합이라 한다. 한 변이 $a$ 인 정사각형 $K$ 를 한 변이 $b$ 인 정사각형 $L$ 로 부풀린다. $K+tL$ 은 한 변이 $a+tb$ 인 정사각형이므로 면적은

$$
(a+tb)^2 = a^2 + 2ab\thinspace t + b^2t^2
$$

이고 $t$ 의 2차 다항식이다. 양 끝 계수는 $K$ 의 면적과 $L$ 의 면적이다. 가운데 계수 $2ab$ 는 $K$ 만의 양도 $L$ 만의 양도 아니고 두 변의 길이를 하나씩 곱한 것이다.

$L$ 을 단위원판 $B$ 로 바꾸어도 다항식이다. $K+tB$ 는 정사각형에 폭 $t$ 의 띠 넷과 반지름 $t$ 의 사분원 넷을 붙인 집합이므로 면적이 $a^2+4a\thinspace t+\pi t^2$ 다. 가운데 계수 $4a$ 가 $K$ 의 둘레이고, 마지막 계수 $\pi$ 가 원판의 면적이다. 부풀리는 집합을 바꾸면 가운데 계수만 바뀐다.

가운데 계수가 두 볼록체에 어떻게 의존하는지 보려면 $K$ 를 한 변 $a$ 인 정사각형, $L$ 을 가로 $b_1$ 세로 $b_2$ 인 직사각형으로 둔다. $K+tL$ 은 가로 $a+tb_1$ 세로 $a+tb_2$ 인 직사각형이고 면적은 다음과 같다.

$$
a^2+a(b_1+b_2)t+b_1b_2t^2
$$

가운데 계수가 $K$ 와 $L$ 둘에 각각 1차로 의존하고 두 집합을 바꾸면 같은 값이 나온다.

그래서 가운데 계수를 $K$ 와 $L$ 의 함수로 떼어 쓸 수 있고, 이것을 $2V(K,L)$ 로 적는다. $n$ 차원에서는 부피가 $n$ 차 다항식이므로 계수마다 $K$ 와 $L$ 을 몇 번씩 쓰는지가 달라지고, 계수는 $n$ 개의 볼록체 자리를 받는 함수가 된다.

# 정의

$\mathcal K^n$ 을 $\mathbb R^n$ 의 콤팩트 볼록집합 전체라 한다.

Minkowski 정리. $K_1,\dots,K_m\in\mathcal K^n$ 에 대해 $t_i\ge 0$ 의 함수

$$
\mathrm{vol}(t_1K_1+\dots+t_mK_m) = \sum\_{i_1,\dots,i_n=1}^m V(K\_{i_1},\dots,K\_{i_n})\thinspace t\_{i_1}\cdots t\_{i_n}
$$

으로 적히는 계수 $V(K\_{i_1},\dots,K\_{i_n})$ 이 유일하게 존재하고, 첨자의 순서에 의존하지 않는다.[^1]

$K+L$ 을 Minkowski 합(Minkowski sum)이라 한다. $V(K_1,\dots,K_n)$ 을 **혼합부피** 라 한다. 같은 볼록체를 반복할 때는 거듭제곱 표기로 $V(K^j,L^{n-j})$ 처럼 쓴다.

직관 절의 평면 예에서 다음이 성립한다.

$$
\mathrm{vol}(K+tL)=V(K,K)+2V(K,L)t+V(L,L)t^2
$$

$K$ 가 한 변 $a$ 인 정사각형, $L$ 이 가로 $b_1$ 세로 $b_2$ 인 직사각형이면 $V(K,K)=a^2$, $V(K,L)=a(b_1+b_2)/2$, $V(L,L)=b_1b_2$ 다.

# 성질

## 특수한 값

- $V(K,\dots,K)=\mathrm{vol}(K)$ 다.
- $B$ 를 단위공이라 하면 $V(K^{n-1},B)=\mathrm{vol}\_{n-1}(\partial K)/n$ 으로 겉면적이 나온다. 직관 절의 정사각형에서 $2V(K,B)=4a$ 는 둘레다.
- $V(K,B^{n-1})$ 은 $K$ 의 평균 폭에 비례한다.

## Steiner 공식

Steiner 공식(Steiner formula). 
$K$ 를 반지름 $r$ 만큼 부풀린 집합의 부피는

$$
\mathrm{vol}(K+rB) = \sum\_{j=0}^n \binom{n}{j} V(K^{n-j},B^j)\thinspace r^j
$$

이다. 정의의 식에 $m=2$, $K_1=K$, $K_2=B$ 를 넣고 순서에 의존하지 않는 성질로 같은 항을 모은 것이다. 계수 $V(K^{n-j},B^j)$ 를 quermassintegral 이라 하고, 적절히 정규화한 것이 [내재부피](intrinsic-volumes.md)다. $j=1$ 항이 겉면적을 주므로, 부풀린 부피를 $r=0$ 에서 미분하면 겉면적이 나온다.

## 단조성과 평행이동 불변성

혼합부피는 각 자리에서 평행이동에 불변이고, 포함관계에 단조이며, 음이 아니다. $K_1\subseteq K_1'$ 이면 $V(K_1,K_2,\dots,K_n)\le V(K_1',K_2,\dots,K_n)$ 이다.

각 자리에서 Minkowski 합에 대해 가법적이기도 하다.

$$
V(K+K',K_2,\dots,K_n)=V(K,K_2,\dots,K_n)+V(K',K_2,\dots,K_n)
$$

정의의 다항식에서 $t_1$ 의 1차 계수를 비교하면 나온다.

## Alexandrov–Fenchel 부등식

[Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md). $K,L,C_3,\dots,C_n\in\mathcal K^n$ 에 대해

$$
V(K,L,C_3,\dots,C_n)^2 \thinspace\ge\thinspace V(K,K,C_3,\dots,C_n)\thinspace V(L,L,C_3,\dots,C_n)
$$

이다.[^1]

$C_3,\dots,C_n$ 을 고정하고 $(K,L)\mapsto V(K,L,C_3,\dots,C_n)$ 을 쌍선형형식으로 보면, 이 부등식은 그 형식의 부호수(signature)가 $(1,\ast)$ 라는 진술이다. 곧 $V(K,K,C\_\bullet)\gt 0$ 인 방향 하나를 뺀 나머지에서 형식이 준음정부호다. 증명은 $C_i$ 가 모두 매끄러운 경우에 [혼합 판별식](mixed-discriminants.md)의 [고윳값](eigenvalues.md) 계산으로 하고, 일반 경우는 근사로 간다.

## Brunn–Minkowski 와의 관계

$n=2$ 에서 Alexandrov–Fenchel 부등식은 $V(K,L)^2\ge\mathrm{vol}(K)\mathrm{vol}(L)$ 이다. 이것과 $\mathrm{vol}(K+L)$ 의 전개를 합치면

$$
\mathrm{vol}(K+L)\ge\mathrm{vol}(K)+2\sqrt{\mathrm{vol}(K)\mathrm{vol}(L)}+\mathrm{vol}(L)=\left(\sqrt{\mathrm{vol}(K)}+\sqrt{\mathrm{vol}(L)}\right)^2
$$

이고, 양변의 제곱근을 취한 것이 평면의 [Brunn–Minkowski 부등식](brunn-minkowski.md)이다. 일반 $n$ 에서도 아래의 Minkowski 1차 부등식을 반복 적용해 같은 결론에 이른다.

## Minkowski 1차 부등식

Minkowski 1차 부등식(Minkowski's first inequality). $K,L\in\mathcal K^n$ 에 대해

$$
V(K,L^{n-1})^n \thinspace\ge\thinspace \mathrm{vol}(K)\thinspace\mathrm{vol}(L)^{n-1}
$$

이다.

Alexandrov–Fenchel 부등식에서 $C_3=\dots=C_n=L$ 로 두면 $V(K,L^{n-1})^2\ge V(K^2,L^{n-2})V(L^n)$ 이고, 첫 항에 같은 치환을 되풀이하면 지수가 $2,4,\dots$ 로 올라가 위 식이 된다.

$L=B$ 로 두면 좌변이 겉면적의 $n$ 제곱에 비례하고 우변이 부피에 비례하므로 [등주부등식](isoperimetric-inequality.md)이 나온다.

# 활용

- 등주부등식. $L=B$ 로 둔 Minkowski 1차 부등식이 겉면적과 부피 사이의 등주부등식이다. 등호는 $K$ 가 공일 때만 성립하고, 그 판정이 Alexandrov–Fenchel 부등식의 등호 조건에서 나온다.
- 영구식의 하한. $n\times n$ 이중확률행렬(doubly stochastic matrix)의 [영구식](permanent.md)이 $n!/n^n$ 이상이라는 [van der Waerden 부등식](van-der-waerden-inequality.md)의 증명이 Alexandrov–Fenchel 부등식을 쓴다. [행렬](matrices.md)의 열을 좌표평행육면체로 보면 영구식이 혼합부피의 상수배이고, 부등식이 그 혼합부피의 기하평균 하한을 준다.
- [Ehrhart 다항식](ehrhart-polynomial.md). 격자 다면체 $P$ 와 양의 정수 $t$ 에 대해 $tP$ 의 격자점 개수는 $t$ 의 다항식이고, 최고차 계수가 $P$ 의 부피, 그다음 계수가 각 면의 넓이를 그 면의 격자로 정규화해 더한 값의 절반이다. Steiner 공식처럼 확대 배율에 대한 다항식이지만 나머지 계수는 Steiner 공식의 계수와 다르다.
- 내재부피. $\mathcal K^n$ 에서 강체운동 불변이고 연속이며 가법적인 함수(평가)는 내재부피들의 선형결합이다. 이것이 Hadwiger 정리(Hadwiger theorem)이고, 적분기하의 운동학 공식을 이 분해로 증명한다.

[^1]: Rolf Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, 2nd ed., Cambridge University Press, 2014, ch. 5 and ch. 7.

# 연관 문서

## 선수지식

- [Brunn–Minkowski 부등식](brunn-minkowski.md)

## 더 알아보기

- [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)
- [내재부피](intrinsic-volumes.md)
- [Ehrhart 다항식](ehrhart-polynomial.md)

#analysis #combinatorics #measure_theory
