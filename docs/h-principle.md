# h 원리

# 개요

**h 원리(h-principle)** 는 도함수에 조건을 건 방정식의 해를 찾는 문제가, 도함수 자리에 아무 함수나 넣어도 되는 느슨한 문제로 바뀐다는 성질이다. 평면에서 멈추지 않고 그리는 닫힌 곡선을 찾을 때, 속도 대신 아무 곳에서도 $0$ 이 아닌 방향을 곡선과 따로 정해 주는 일은 쉽다. h 원리가 성립하는 문제에서는 이렇게 따로 정한 방향을 연속으로 바꿔 실제 곡선의 속도로 만들 수 있으므로, 해의 존재와 분류가 연속 사상의 호모토피 문제로 바뀐다.

# 직관

평면에서 $(0,0)$ 을 출발해 시간 $1$ 뒤에 $(1,0)$ 에 닿되 속력이 늘 정확히 $2$ 인 곡선을 찾는다. 곧은 선분은 속력이 $1$ 이라 조건을 만족하지 않는다. 그런데 속도 $(1,\sqrt3)$ 과 $(1,-\sqrt3)$ 은 길이가 $2$ 이고 평균이 $(1,0)$ 이다. 시간 $1/(2k)$ 씩 두 속도를 번갈아 쓰면 곡선은 톱니 모양으로 오르내리며 $(1,0)$ 에 닿는다.

톱니의 높이는 $\sqrt3/(2k)$ 이므로 $k$ 를 키우면 곡선이 선분에 균등하게 가까워진다. 속도는 선분의 속도 $(1,0)$ 에 가까워지지 않지만, 원하는 평균 $(1,0)$ 이 허용된 속도들의 집합인 반지름 $2$ 의 원의 볼록껍질 안에 있으므로 빠른 진동으로 평균을 맞출 수 있다. 꺾인 점은 모서리를 둥글게 깎아 없앤다.

닫힌 곡선도 같다. 속도가 $0$ 이 아니어야 한다는 조건에서 허용된 속도는 $\mathbb R^2\setminus\lbrace 0\rbrace$ 이고, 닫힌 곡선이 되려면 속도의 평균이 $0$ 이어야 한다. $0$ 은 $\mathbb R^2\setminus\lbrace 0\rbrace$ 의 볼록껍질 안에 있으므로, 아무 곳에서도 $0$ 이 아닌 방향의 고리가 주어지면 그 방향 둘레로 빠르게 흔들어 실제 닫힌 곡선을 만들 수 있다.

# 정의

## 미분 관계

$m$ 차원 다양체 $M$ 에서 $n$ 차원 다양체 $N$ 으로 가는 사상 $f$ 에 대해, 점 $x$ 와 값 $y=f(x)$ 와 일차 도함수 자리의 선형사상 $L:T_xM\to T_yN$ 의 세 짝 $(x,y,L)$ 전체를 1 차 제트 공간(1-jet space) $J^1(M,N)$ 이라 한다. 그 부분집합 $\mathcal R$ 을 **미분 관계(differential relation)** 라 하고, 모든 $x$ 에서 $(x,f(x),df_x)\in\mathcal R$ 인 $f$ 를 $\mathcal R$ 의 **해(solution)** 라 한다.

직관 절의 닫힌 곡선은 $M=S^1$, $N=\mathbb R^2$ 이고 $\mathcal R=\lbrace(t,y,v):v\ne 0\rbrace$ 이다. 이 관계의 해가 [Whitney–Graustein 정리](whitney-graustein-theorem.md)의 정칙 닫힌 곡선이다.

## 형식적 해

사상 $f_0:M\to N$ 과 각 $x$ 의 선형사상 $F_x:T_xM\to T_{f_0(x)}N$ 의 연속인 짝 $(f_0,F)$ 가 모든 $x$ 에서 $(x,f_0(x),F_x)\in\mathcal R$ 을 만족하면 **형식적 해(formal solution)** 라 한다. $F$ 가 $df_0$ 일 필요는 없다. 닫힌 곡선의 경우 $f_0$ 를 아무 고리로, $F$ 를 아무 곳에서도 $0$ 이 아닌 벡터의 고리로 잡으면 형식적 해다.

실제 해 $f$ 는 $(f,df)$ 가 형식적 해이므로 형식적 해의 특수한 경우다.

## h 원리

모든 형식적 해가 형식적 해를 지나는 호모토피로 실제 해와 이어지면 $\mathcal R$ 이 **h 원리를 만족한다** 고 한다. 그 호모토피 동안 $f_0$ 이 처음의 사상에 균등하게 가까이 머물게 할 수 있으면 $C^0$ 조밀 h 원리(C⁰-dense h-principle), 매개변수가 붙은 형식적 해의 족에도 같은 것이 성립하면 매개변수 h 원리(parametric h-principle)라 한다.

매개변수 h 원리는 실제 해의 공간에서 형식적 해의 공간으로 가는 포함이 약한 호모토피 동치라는 것과 같다. 이때 실제 해의 호모토피류는 형식적 해의 호모토피류와 일대일로 대응한다.

# 성질

## Whitney–Graustein 정리

평면의 정칙 닫힌 곡선의 관계에서 형식적 해 $(f_0,F)$ 의 호모토피류는 $F:S^1\to\mathbb R^2\setminus\lbrace 0\rbrace$ 의 호모토피류, 곧 [감김수](winding-number.md) 하나로 정해진다. Whitney–Graustein 정리는 실제 해의 정칙 호모토피류도 같은 정수로 분류된다는 것이므로, 이 관계의 h 원리의 진술이다.

## Smale–Hirsch 정리

$m\lt n$ 이면 몰입(immersion) $M\to N$, 곧 $df_x$ 가 모든 점에서 단사인 사상의 관계는 매개변수 h 원리를 만족한다. 이것을 Smale–Hirsch 정리(Smale–Hirsch theorem)라 한다[^1][^2]. 몰입의 정칙 호모토피류는 $TM$ 에서 $TN$ 으로 가는 올마다 단사인 다발 사상의 호모토피류와 대응한다.

$M=S^2$, $N=\mathbb R^3$ 이면 그 호모토피류가 $\pi_2(\mathrm{SO}(3))=0$ 으로 정해지므로 몰입이 정칙 호모토피류 하나뿐이다. 표준 구면과 그 안팎을 뒤집은 구면도 몰입을 유지하는 변형으로 이어지고, 이것이 Smale 의 구면 뒤집기(sphere eversion)다[^1].

## 볼록 적분

$J^1(M,N)$ 에서 $x$, $y$ 와 $L$ 을 $T_xM$ 의 한 초평면 위에서 고정하고, 나머지 한 방향의 값 $L(v)\in T_yN$ 만 움직여 얻는 부분집합을 주 부분공간(principal subspace)이라 한다. 열린 관계 $\mathcal R$ 이 모든 주 부분공간 $P$ 에서 $\mathcal R\cap P$ 의 각 연결성분의 볼록껍질이 $P$ 전체이면 $\mathcal R$ 을 **넉넉하다(ample)** 고 한다.

M. Gromov 의 정리. 열린 넉넉한 관계는 $C^0$ 조밀 매개변수 h 원리를 만족한다[^3]. 증명은 직관 절의 톱니처럼 형식적 해의 한 방향씩 빠르게 진동하는 곡선을 적분해 도함수를 맞추는 것이고, 이 방법을 볼록 적분(convex integration)이라 한다.

$m=1$ 이면 주 부분공간은 $T_yN$ 전체다. 곡선의 정칙 관계 $\lbrace v\ne 0\rbrace$ 은 $n\ge 2$ 에서 $\mathbb R^n\setminus\lbrace 0\rbrace$ 이 연결이고 볼록껍질이 전체라서 넉넉하다. $n=1$ 이면 $\mathbb R\setminus\lbrace 0\rbrace$ 의 두 성분이 각각 반직선을 볼록껍질로 가지므로 넉넉하지 않고, 실제로 원에서 직선으로 가는 사상은 최댓값에서 도함수가 $0$ 이라 정칙 해가 없다.

## 등거리 매장

$C^1$ 등거리 매장의 관계 $L^\ast\langle\cdot,\cdot\rangle=g$ 는 열린 관계가 아니지만, [Nash 매장 정리](nash-embedding-theorem.md)의 Nash–Kuiper 정리가 짧은 매장마다 그에 가까운 $C^1$ 등거리 매장을 준다. 증명에서 주름을 넣어 한 방향의 길이를 늘리는 단계가 직관 절의 톱니와 같은 계산이다. 이 관계는 $C^2$ 해에 대해서는 h 원리를 만족하지 않는다. 평평한 원환면은 $\mathbb R^3$ 에 $C^1$ 등거리 매장되지만 $C^2$ 등거리 매장되지 않는다.

# 활용

- 구면 뒤집기. Smale–Hirsch 정리가 존재를 주고, 뒤집는 변형을 구체적으로 그린 구성이 뒤따랐다.
- 유체의 약해. C. De Lellis 와 L. Székelyhidi 는 볼록 적분으로 비압축성 Euler 방정식의 연속 약해 가운데 에너지가 줄어드는 것을 만들었다[^4]. P. Isett 는 이 방법으로 공간 Hölder 지수가 $1/3$ 보다 작은 약해 가운데 에너지가 보존되지 않는 것이 있음을 보였다[^5].
- Whitney–Graustein 정리의 증명. 단위 접선의 호모토피에서 평균을 빼고 적분하는 단계가 1 차원 볼록 적분이다.

[^1]: S. Smale, "A classification of immersions of the two-sphere", *Transactions of the American Mathematical Society* 90 (1959), 281–290.
[^2]: M. W. Hirsch, "Immersions of manifolds", *Transactions of the American Mathematical Society* 93 (1959), 242–276.
[^3]: M. Gromov, *Partial Differential Relations*, Springer (1986). Y. Eliashberg, N. Mishachev, *Introduction to the h-Principle*, American Mathematical Society (2002).
[^4]: C. De Lellis, L. Székelyhidi, "Dissipative continuous Euler flows", *Inventiones Mathematicae* 193 (2013), 377–407.
[^5]: P. Isett, "A proof of Onsager's conjecture", *Annals of Mathematics* 188 (2018), 871–963.

# 연관 문서

## 선수지식

- [Whitney–Graustein 정리](whitney-graustein-theorem.md)
- [Nash 매장 정리](nash-embedding-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #topology #analysis
