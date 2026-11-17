# 1/3–2/3 추측

# 개요

**1/3–2/3 추측(1/3–2/3 conjecture)** 은 전순서가 아닌 유한 부분순서에는 비교했을 때 어느 쪽이 클지 가장 고르게 갈리는 쌍이 있어, 그 확률이 $1/3$ 과 $2/3$ 사이라는 추측이다. 일부 쌍의 크기만 알려진 원소들을 마저 정렬할 때, 다음에 어느 두 원소를 비교하면 남은 가능성을 가장 많이 줄이는지 묻는다.

남은 가능성은 알려진 관계를 지키는 전순서들이다. 추측은 늘 그 가운데 적어도 $1/3$ 을 지우는 비교가 있다는 것이고, 그런 비교를 되풀이하면 가능성의 수의 로그에 비례하는 횟수로 정렬이 끝난다.

# 직관

세 원소 $a,b,c$ 에서 $a\lt b$ 만 알고 $c$ 는 아무것과도 비교하지 않았다. 이 관계를 지키는 전순서는 다음 셋이다.

$$
c\lt a\lt b,\qquad a\lt c\lt b,\qquad a\lt b\lt c
$$

$a$ 와 $c$ 를 비교하면 $a\lt c$ 인 경우가 둘, $c\lt a$ 인 경우가 하나다. 셋이 똑같이 그럴듯하면 $a\lt c$ 일 확률은 $2/3$ 이고, 어느 결과가 나와도 가능성이 적어도 $1/3$ 은 지워진다. $b$ 와 $c$ 를 비교해도 확률이 $1/3$ 과 $2/3$ 으로 갈린다.

이 예에서 더 고르게 갈리는 비교는 없다. 비교할 수 있는 쌍은 $\lbrace a,c\rbrace$ 와 $\lbrace b,c\rbrace$ 뿐이고 둘 다 $1/3$ 대 $2/3$ 이다. 추측의 상수 $1/3$ 은 이 예 때문에 더 키울 수 없다.

# 정의

## 균형 쌍

유한 [부분순서](partial-orders.md) $P$ 의 선형 확장 전체에서 하나를 고르게 뽑을 때, 그 선형 확장에서 $x$ 가 $y$ 보다 앞에 올 확률을 $\Pr(x\lt y)$ 로 쓴다. 선형 확장의 수를 $e(P)$ 로 쓴다. 직관 절의 $P$ 는 $e(P)=3$, $\Pr(a\lt c)=2/3$, $\Pr(b\lt c)=1/3$ 이다.

$0\lt\delta\le 1/2$ 에 대해 비교 불가능한 두 원소 $x,y$ 가 $\delta\le\Pr(x\lt y)\le 1-\delta$ 를 만족하면 $\lbrace x,y\rbrace$ 를 $\delta$ **균형 쌍(balanced pair)** 이라 한다.

## 추측

**1/3–2/3 추측** 은 전순서가 아닌 모든 유한 부분순서에 $1/3$ 균형 쌍이 있다는 진술이다. S. S. Kislitsyn 이 1968 년에 제기했고, M. Fredman 과 N. Linial 이 독립으로 다시 제기했다[^1].

# 성질

## Kahn–Saks 경계

J. Kahn 과 M. Saks 는 전순서가 아닌 모든 유한 부분순서에 $3/11$ 균형 쌍이 있음을 증명했다[^2]. G. Brightwell, S. Felsner, W. T. Trotter 는 이 상수를 $(5-\sqrt5)/10\approx 0.276$ 으로 올렸다[^3].

증명의 요지. 원소 $x,y$ 를 고정하고, 선형 확장에서 $y$ 의 위치와 $x$ 의 위치의 차가 $k$ 인 것의 수를 $N_k$ 라 한다. R. P. Stanley 는 [순서 다면체](order-polytope.md)의 혼합 부피에 [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)을 써서 이런 수의 열이 로그 오목(log-concave), 곧 $N_k^2\ge N_{k-1}N_{k+1}$ 임을 보였다. Kahn 과 Saks 는 위치의 평균 차가 가장 작은 쌍을 골라, 로그 오목성으로 $\Pr(x\lt y)$ 가 $3/11$ 과 $8/11$ 사이임을 보였다.

## 폭이 2 인 경우

반사슬의 크기가 $2$ 이하인 부분순서에서는 추측이 성립한다. Linial 이 증명했다[^1]. 직관 절의 예는 반사슬 $\lbrace a,c\rbrace$ 의 크기가 $2$ 인 경우이고, 이 경우의 상수 $1/3$ 이 등호로 나타난다.

# 활용

- 부분 정보로 하는 정렬. 일부 비교 결과를 아는 원소들을 정렬하려면 [비교 정렬](comparison-sorting.md)의 하한 논법으로 비교가 적어도 $\log_2 e(P)$ 번 필요하다. $\delta$ 균형 쌍을 골라 비교하기를 되풀이하면 비교마다 $e(P)$ 가 $1-\delta$ 배 이하로 줄어, $\log e(P)/\log\bigl(1/(1-\delta)\bigr)$ 번 안에 끝난다. Kahn–Saks 경계로는 $\log_2 e(P)$ 의 약 $2.18$ 배다.
- 정렬된 두 목록의 병합. 두 사슬을 합친 부분순서는 폭이 $2$ 이므로 균형 쌍의 비교를 되풀이하면 병합에 드는 비교 횟수가 정보 하한 $\log_2 e(P)$ 의 상수배 안에 든다[^1].
- 상관 부등식. $\Pr(x\lt y)$ 같은 무작위 선형 확장의 확률 사이의 관계는 [XYZ 부등식](xyz-inequality.md)도 다룬다.

[^1]: N. Linial, "The information-theoretic bound is good for merging", SIAM Journal on Computing 13 (1984), 795–801.
[^2]: J. Kahn, M. Saks, "Balancing poset extensions", Order 1 (1984), 113–126.
[^3]: G. Brightwell, S. Felsner, W. T. Trotter, "Balancing pairs and the cross product conjecture", Order 12 (1995), 327–349.

# 연관 문서

## 선수지식

- [부분순서](partial-orders.md)

## 더 알아보기

아직 연결한 문서가 없다.

#order_theory #combinatorics #probability
