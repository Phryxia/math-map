# 혼합부피

# 개요

혼합부피는 볼록체 여러 개의 Minkowski 합의 부피를 계수별로 분해해 얻는 양이다. 볼록체 $K_1,\dots,K_m$ 과 음이 아닌 $t_1,\dots,t_m$ 에 대해 $\mathrm{vol}(t_1K_1+\dots+t_mK_m)$ 이 $t_i$ 들의 $n$ 차 동차다항식이고, 그 계수가 혼합부피다. 부피, 겉면적, 평균 폭이 모두 특수한 혼합부피이고, 이들 사이의 부등식 체계의 가장 강한 형태가 Alexandrov–Fenchel 부등식이다. [Brunn–Minkowski 부등식](brunn-minkowski.md)이 그 특수 경우다.

# 직관

한 변이 $a$ 인 정사각형 $K$ 를 한 변이 $b$ 인 정사각형 $L$ 로 부풀린다. $K+tL$ 은 한 변이 $a+tb$ 인 정사각형이므로 면적은

$$
(a+tb)^2 = a^2 + 2ab\thinspace t + b^2t^2
$$

이고 $t$ 의 2차 다항식이다. 양 끝 계수는 $K$ 의 면적과 $L$ 의 면적이다. 가운데 계수 $2ab$ 는 $K$ 만의 양도 $L$ 만의 양도 아니고 두 변의 길이를 하나씩 곱한 것이다.

$L$ 을 단위원판 $B$ 로 바꾸어도 다항식이다. $K+tB$ 는 정사각형에 폭 $t$ 의 띠 넷과 반지름 $t$ 의 사분원 넷을 붙인 집합이므로 면적이 $a^2+4a\thinspace t+\pi t^2$ 다. 가운데 계수 $4a$ 가 $K$ 의 둘레이고, 마지막 계수 $\pi$ 가 원판의 면적이다. 부풀리는 집합을 바꾸면 가운데 계수만 바뀐다.

가운데 계수가 두 볼록체에 어떻게 의존하는지 보려면 $K$ 를 한 변 $a$ 인 정사각형, $L$ 을 가로 $b_1$ 세로 $b_2$ 인 직사각형으로 둔다. $K+tL$ 은 가로 $a+tb_1$ 세로 $a+tb_2$ 인 직사각형이고 면적은 $a^2+a(b_1+b_2)t+b_1b_2t^2$ 다. 가운데 계수가 $K$ 와 $L$ 둘에 각각 1차로 의존하고 두 집합을 바꾸면 같은 값이 나온다.

그래서 가운데 계수를 $K$ 와 $L$ 의 함수로 떼어 쓸 수 있고, 이것을 $2V(K,L)$ 로 적는다. $n$ 차원에서는 부피가 $n$ 차 다항식이므로 계수마다 $K$ 와 $L$ 을 몇 번씩 쓰는지가 달라지고, 계수는 $n$ 개의 볼록체 자리를 받는 함수가 된다.

# 정의

$\mathcal K^n$ 을 $\mathbb R^n$ 의 콤팩트 볼록집합 전체라 한다.

**정리**(Minkowski). $K_1,\dots,K_m\in\mathcal K^n$ 에 대해 $t_i\ge 0$ 의 함수

$$
\mathrm{vol}(t_1K_1+\dots+t_mK_m) = \sum\_{i_1,\dots,i_n=1}^m V(K\_{i_1},\dots,K\_{i_n})\thinspace t\_{i_1}\cdots t\_{i_n}
$$

으로 적히는 계수 $V(K\_{i_1},\dots,K\_{i_n})$ 이 유일하게 존재하고, 첨자의 순서에 의존하지 않는다.[^1]

$V(K_1,\dots,K_n)$ 을 **혼합부피**라 한다. 같은 볼록체를 반복할 때는 거듭제곱 표기로 $V(K^j,L^{n-j})$ 처럼 쓴다.

## 특수한 값

- $V(K,\dots,K)=\mathrm{vol}(K)$ 다.
- $B$ 를 단위공이라 하면 $V(K^{n-1},B)=\mathrm{vol}\_{n-1}(\partial K)/n$ 으로 겉면적이 나온다.
- $V(K,B^{n-1})$ 은 $K$ 의 평균 폭에 비례한다.

## Steiner 공식

$K$ 를 반지름 $r$ 만큼 부풀린 집합의 부피는

$$
\mathrm{vol}(K+rB) = \sum\_{j=0}^n \binom{n}{j} V(K^{n-j},B^j)\thinspace r^j
$$

이다. 정의의 식에 $m=2$, $K_1=K$, $K_2=B$ 를 넣고 순서에 의존하지 않는 성질로 같은 항을 모은 것이다. 계수 $V(K^{n-j},B^j)$ 를 quermassintegral 이라 하고, 적절히 정규화한 것이 내재부피다. $j=1$ 항이 겉면적을 주므로, 부풀린 부피를 $r=0$ 에서 미분하면 겉면적이 나온다.

# 성질

## 단조성과 평행이동 불변성

혼합부피는 각 자리에서 평행이동에 불변이고, 포함관계에 단조이며, 음이 아니다. $K_1\subseteq K_1'$ 이면 $V(K_1,K_2,\dots,K_n)\le V(K_1',K_2,\dots,K_n)$ 이다.

각 자리에서 Minkowski 합에 대해 가법적이기도 하다. $V(K+K',K_2,\dots,K_n)=V(K,K_2,\dots,K_n)+V(K',K_2,\dots,K_n)$ 이다. 정의의 다항식에서 $t_1$ 의 1차 계수를 비교하면 나온다.

## Alexandrov–Fenchel 부등식

**정리.** $K,L,C_3,\dots,C_n\in\mathcal K^n$ 에 대해

$$
V(K,L,C_3,\dots,C_n)^2 \thinspace\ge\thinspace V(K,K,C_3,\dots,C_n)\thinspace V(L,L,C_3,\dots,C_n)
$$

이다.[^1]

$C_3,\dots,C_n$ 을 고정하고 $(K,L)\mapsto V(K,L,C_3,\dots,C_n)$ 을 쌍선형형식으로 보면, 이 부등식은 그 형식의 부호수가 $(1,\ast)$ 라는 진술이다. 곧 $V(K,K,C\_\bullet)\gt 0$ 인 방향 하나를 뺀 나머지에서 형식이 준음정부호다. 증명은 $C_i$ 가 모두 매끄러운 경우에 혼합판별식의 고윳값 계산으로 하고, 일반 경우는 근사로 간다.

## Brunn–Minkowski 와의 관계

$n=2$ 에서 Alexandrov–Fenchel 부등식은 $V(K,L)^2\ge\mathrm{vol}(K)\mathrm{vol}(L)$ 이다. 이것과 $\mathrm{vol}(K+L)=\mathrm{vol}(K)+2V(K,L)+\mathrm{vol}(L)$ 을 합치면

$$
\mathrm{vol}(K+L)\ \ge\ \mathrm{vol}(K)+2\sqrt{\mathrm{vol}(K)\mathrm{vol}(L)}+\mathrm{vol}(L)=\left(\sqrt{\mathrm{vol}(K)}+\sqrt{\mathrm{vol}(L)}\right)^2
$$

이고, 양변의 제곱근을 취한 것이 평면의 Brunn–Minkowski 부등식이다. 일반 $n$ 에서도 아래의 Minkowski 1차 부등식을 반복 적용해 같은 결론에 이른다.

## Minkowski 1차 부등식

**정리.** $K,L\in\mathcal K^n$ 에 대해

$$
V(K,L^{n-1})^n \thinspace\ge\thinspace \mathrm{vol}(K)\thinspace\mathrm{vol}(L)^{n-1}
$$

이다.

Alexandrov–Fenchel 부등식에서 $C_3=\dots=C_n=L$ 로 두면 $V(K,L^{n-1})^2\ge V(K^2,L^{n-2})V(L^n)$ 이고, 첫 항에 같은 치환을 되풀이하면 지수가 $2,4,\dots$ 로 올라가 위 식이 된다. ∎

$L=B$ 로 두면 좌변이 겉면적의 $n$ 제곱에 비례하고 우변이 부피에 비례하므로 등주부등식이 나온다.

# 활용

- **[등주부등식](isoperimetric-inequality.md).** $L=B$ 로 둔 Minkowski 1차 부등식이 겉면적과 부피 사이의 등주부등식이다. 등호는 $K$ 가 공일 때만 성립하고, 그 판정이 Alexandrov–Fenchel 부등식의 등호 조건에서 나온다.
- **영구치의 하한.** $n\times n$ 이중확률행렬의 영구치가 $n!/n^n$ 이상이라는 van der Waerden 추측의 증명이 Alexandrov–Fenchel 부등식을 쓴다. 행렬의 열을 좌표평행육면체로 보면 영구치가 혼합부피의 상수배이고, 부등식이 그 혼합부피의 기하평균 하한을 준다.
- **[Ehrhart 다항식](ehrhart-polynomial.md).** 격자 다면체 $P$ 와 양의 정수 $t$ 에 대해 $tP$ 의 격자점 개수는 $t$ 의 다항식이고, 그 최고차 두 계수가 $P$ 의 부피와 겉면적의 절반이다. Steiner 공식의 계수들이 이 다항식의 계수를 기술한다.
- **[내재부피](intrinsic-volumes.md).** $\mathcal K^n$ 에서 강체운동 불변이고 연속이며 가법적인 함수(평가)는 내재부피들의 선형결합이다. 이것이 Hadwiger 정리이고, 적분기하의 운동학 공식을 이 분해로 증명한다.

[^1]: Rolf Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, 2nd ed., Cambridge University Press, 2014, ch. 5 and ch. 7.

# 연관 문서

## 선수지식

- [Brunn–Minkowski 부등식](brunn-minkowski.md)

## 더 알아보기

- [내재부피](intrinsic-volumes.md)
- [Ehrhart 다항식](ehrhart-polynomial.md)

#analysis #combinatorics #measure_theory
