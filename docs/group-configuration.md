# 군 배치 정리

# 개요

**군 배치 정리(group configuration theorem)** 는 원소들 사이에 '둘을 알면 셋째가 정해진다' 는 관계만 주어졌을 때 그 뒤의 군 곱셈을 되찾는 정리다. 군의 원소 $g,h,x$ 로 $g,h,gh,x,hx,ghx$ 여섯 개를 만들면, $\lbrace g,h,gh\rbrace$ 처럼 둘이 셋째를 정하는 세 원소 묶음이 정확히 네 개 생긴다. 군 배치 정리는 곱셈 없이 이 결정 관계만 같은 여섯 점이 주어지면 거기서 정의 가능한 군을 만들고, 이것으로 기하적 조건에서 군을 얻는다.

# 직관

군 $G$ 를 하나 두고, 그 안에서 서로 독립인 원소 $g,h,x$ 를 잡는다. 여섯 원소를 만든다.

$$g,\quad h,\quad gh,\quad x,\quad hx,\quad ghx$$

어느 세 원소가 서로를 결정하는지 센다. $\lbrace g,h,gh\rbrace$ 에서는 둘을 알면 셋째가 나온다. $\lbrace h,x,hx\rbrace$ 도 그렇다. $ghx=g\cdot(hx)$ 이므로 $\lbrace g,hx,ghx\rbrace$ 도, $ghx=(gh)\cdot x$ 이므로 $\lbrace gh,x,ghx\rbrace$ 도 그렇다. 이런 삼중집합이 정확히 넷이고, 나머지 세 원소 집합에서는 두 원소가 셋째를 결정하지 못한다. 여섯 원소 전체는 $g,h,x$ 로 결정되므로 차원이 $3$ 이다.

이 여섯 점에서 곱셈을 지우면 남는 것은 "차원 $1$ 인 점 여섯 개, 두 원소가 셋째를 결정하는 삼중집합 네 개, 전체 차원 $3$" 이라는 조건뿐이다. 군 배치 정리는 이 조건만 가진 여섯 점에서 곱셈을 되찾는다.

# 정의

## 군 배치

[안정 이론](stable-theories.md)의 모형 안의 여섯 원소 $a_1,a_2,a_3,b_1,b_2,b_3$ 이 다음 셋을 만족하면 **군 배치(group configuration)** 라 한다. 차원은 Morley 위수(Morley rank)이고 독립은 갈래짓기 독립(forking independence)이다.

- 여섯 원소 각각의 위수가 $1$ 이고 여섯 원소 전체의 위수가 $3$ 이다.
- 다음 네 삼중집합의 위수가 각각 $2$ 다.

  | 삼중집합 | 직관 절의 원소 |
  | --- | --- |
  | $\lbrace a_1,a_2,a_3\rbrace$ | $g,h,gh$ |
  | $\lbrace a_2,b_1,b_2\rbrace$ | $h,x,hx$ |
  | $\lbrace a_1,b_2,b_3\rbrace$ | $g,hx,ghx$ |
  | $\lbrace a_3,b_1,b_3\rbrace$ | $gh,x,ghx$ |

- 그 밖의 세 원소 부분집합은 위수가 $3$ 이다.

여섯 원소 각각이 위 네 삼중집합 가운데 정확히 둘에 든다. 점 여섯 개와 삼중집합 네 개가 이루는 조합 구조는 사면체의 변과 면의 구조와 같다.

복소수의 덧셈군 $(\mathbb C,+)$ 에서 서로 독립인 일반 원소 $g,h,x$ 를 잡으면 $g,h,g+h,x,h+x,g+h+x$ 가 군 배치다. $\lbrace g,h,g+h\rbrace$ 는 두 원소가 셋째를 정하므로 위수가 $2$ 이고, $\lbrace g,h,x\rbrace$ 는 위수가 $3$ 이다.

## 배치의 동치

두 군 배치가 **동치(equivalent)** 라는 것은 대응하는 원소끼리 서로의 대수적 폐포에 드는 것이다. 앞의 배치의 원소를 모두 두 배 한 $2g,2h,2g+2h,2x,2h+2x,2g+2h+2x$ 도 군 배치이고, $g$ 와 $2g$ 가 서로를 정하므로 두 배치는 동치다. 정리가 주는 결론은 배치 자체의 상등이 아니라 이 동치다.

# 성질

## 군의 해석

유한 Morley 위수 이론의 모형에 군 배치가 있으면 위수 $1$ 인 정의 가능한 군 $G$ 가 해석 가능하고, 그 배치는 $G$ 의 원소 $g,h,x$ 로 직관 절처럼 만든 배치와 동치다. Zilber 가 강최소 집합에서 이 배치를 썼고, Hrushovski 가 안정 이론으로 넓혔다.[^1]

증명의 요지. 배치의 조건에서 $b_1$ 을 $b_2$ 로 옮기는 정의 가능 함수가 하나 있고, 그 함수는 $a_2$ 로 매개화된 족에 든다. 이 함수들을 정의역의 여차원 $1$ 이하 차이를 무시하는 관계로 묶어 싹(germ)을 얻는다. 네 삼중집합의 위수 조건에서 싹 두 개의 합성이 다시 같은 족의 싹이 된다. 합성은 결합적이고 항등 싹과 역 싹이 있으므로 싹 전체가 군을 이루며, 싹을 매개변수로 쓰면 이 군이 정의 가능하다.

안정 이론 전체에서는 결론이 타입으로 정의 가능한(type-definable) 군으로 약해진다.[^1]

## 얻은 군의 아벨성

강최소 군(strongly minimal group)은 아벨이다.[^2]

증명은 원소 $a$ 의 중심화군 $C(a)$ 가 무한임을 보이는 데 든다.[^2] 강최소 군에서 정의 가능한 부분군은 유한이거나 여유한이다. 여유한 진부분군이 있으면 다른 잉여류 하나가 유한한 여집합 안에 들어가야 하는데 잉여류는 무한하므로 모순이다. 따라서 $C(a)$ 가 무한하면 $C(a)=G$ 다.

Zilber 삼분법이 군 배치 정리로 얻는 군은 강최소이므로 이 정리에서 아벨이다. 그 위의 정의 가능 자기준동형 환이 나눗셈환이 되는 것은 아벨성을 쓴 다음 단계다.

## 체 배치

군 배치에 곱셈 구조를 더한 배치를 **체 배치**라 하고, 그것이 있으면 정의 가능한 체가 해석된다. Zariski 기하가 국소 모듈러가 아닐 때 대수적으로 닫힌 체가 나오는 것이 이 판본이다.[^3]

# 활용

- 국소 모듈러 기하의 분류. [Zilber 삼분법](zilber-trichotomy.md)의 국소 모듈러 정리는 차원 $1$ 짜리 부분들의 $1$ 차원 족에서 군 배치를 찾고, 이 정리로 강최소 아벨군을 얻어 기하를 벡터공간의 부분공간 기하와 견준다.
- 함수체 위의 Mordell–Lang. [Mordell–Lang 추측](mordell-lang.md)의 함수체 판본은 미분 닫힌 체 안에서 아벨 다양체의 부분군을 분석하며, 삼분법을 쓰는 자리마다 군의 해석이 이 정리에서 온다.
- 미분 닫힌 체의 강최소 집합. [미분적으로 닫힌 체](differentially-closed-fields.md)에서 강최소 집합이 국소 모듈러인지 판정할 때 배치의 존재를 확인한다.

[^1]: A. Pillay, *Geometric Stability Theory* (1996), 5장. 유한 Morley 위수에서의 진술과 germ 을 합성해 군을 세우는 증명. 안정 이론 일반에서 타입으로 정의 가능한 군을 얻는 판본은 E. Hrushovski, *Contributions to Stable Model Theory* (박사학위논문, 1986).

[^2]: J. Reineke, Minimale Gruppen, *Zeitschrift für mathematische Logik und Grundlagen der Mathematik* 21 (1975), 357–359.

[^3]: E. Hrushovski and B. Zilber, Zariski geometries, *Journal of the American Mathematical Society* 9 (1996), 1–56.

# 연관 문서

## 선수지식

- [Zilber 삼분법](zilber-trichotomy.md)

## 더 알아보기

- [강최소 군](strongly-minimal-groups.md)

#logic #foundations #algebra #group_theory
