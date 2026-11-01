# Mandelbrot 집합

# 개요

**Mandelbrot 집합(Mandelbrot set)** 은 $z\mapsto z^2+c$ 를 $0$ 에서부터 되풀이할 때 값이 한없이 커지지 않는 [복소수](complex-numbers.md) $c$ 전체다. $c=-1$ 이면 $0,-1,0,-1,\dots$ 로 맴돌고, $c=1$ 이면 $0,1,2,5,26,\dots$ 으로 한없이 커진다. $c$ 를 조금씩 바꾸면 이 두 행동이 어디서 갈리는지 정해야 하고, 그 경계는 매끄러운 곡선이 아니다. Mandelbrot 집합은 궤도가 유계인 $c$ 를 모은 집합이고, $c$ 가 이 집합에 드는지가 그 $c$ 의 [Julia 집합](julia-set.md)이 한 덩어리인지를 정한다.

# 직관

$f_c(z)=z^2+c$ 를 $0$ 에서부터 되풀이한다. $c=0$ 에서 궤도는 $0,0,0,\dots$ 이고 유계다. $c=1$ 에서는 $0,1,2,5,26,\dots$ 으로 커져 무계다. $c=-1$ 에서는 $0,-1,0,-1,\dots$ 으로 주기 $2$ 를 돌아 유계다. $c=i$ 에서는 $0,i,-1+i,-i,-1+i,\dots$ 로 $-1+i$ 와 $-i$ 를 번갈아 돌아 유계다.

$c$ 를 바꾸며 $f_c$ 의 Julia 집합을 보면 두 모양이 나온다. 하나로 이어진 집합과 [Cantor 집합](cantor-set.md)처럼 흩어진 먼지다. 어느 쪽인지 알려면 Julia 집합 전체를 조사해야 할 것 같지만, 미분이 $0$ 이 되는 점 $z=0$ 의 궤도 하나만 보면 된다. 궤도가 유계이면 Julia 집합이 연결이고 무계이면 흩어진다. 그래서 위의 $c=0,-1,i$ 에서는 Julia 집합이 연결이고 $c=1$ 에서는 흩어진다. 궤도가 유계인 $c$ 를 복소평면에 모은 집합이 Mandelbrot 집합이다.

# 정의

## Mandelbrot 집합

$f_c(z)=z^2+c$ 의 $n$ 번 합성을 $f_c^n$ 으로 쓴다. $z=0$ 은 $f_c'(z)=2z$ 가 $0$ 이 되는 유일한 유한 **임계점(critical point)** 이다.

$$
M=\lbrace c\in\mathbb C:\sup_n\vert f_c^n(0)\vert\lt\infty\rbrace
$$

이 **Mandelbrot 집합** 이다. $c=-1$ 은 궤도가 $0,-1$ 을 돌므로 $M$ 에 속한다. $c=1$ 은 $f_1^3(0)=5$ 에서 이미 $2$ 를 넘고 그 뒤로 커지기만 하므로 $M$ 에 속하지 않는다.

## 쌍곡 성분

$M$ 의 내부의 연결 성분 $W$ 가 **쌍곡 성분(hyperbolic component)** 이라는 것은 $W$ 의 모든 $c$ 에서 $f_c$ 가 끌어당기는 주기 궤도를 갖는다는 뜻이다. 주기는 $W$ 에서 일정하고 그 값을 $W$ 의 주기라 한다. 주기 $p$ 궤도의 **승수(multiplier)** 는 $\lambda(c)=(f_c^p)'$ 를 궤도의 한 점에서 계산한 값이다.

$c=0$ 이면 $0$ 이 고정점이고 승수가 $f_0'(0)=0$ 이므로 $c=0$ 은 주기 $1$ 쌍곡 성분에 속한다. $c=-1$ 이면 주기 $2$ 궤도 $0,-1$ 의 승수가 $f_{-1}'(0)f_{-1}'(-1)=0\cdot(-2)=0$ 이므로 $c=-1$ 은 주기 $2$ 쌍곡 성분에 속한다. $c=i$ 의 주기 $2$ 궤도 $-1+i,-i$ 의 승수는 $2(-1+i)\cdot 2(-i)=4+4i$ 로 절댓값이 $1$ 보다 크므로 끌어당기지 않고, $c=i$ 는 쌍곡 성분에 들지 않는다.

# 성질

## 유계성과 탈출 판정

$M$ 은 $\lbrace\vert c\vert\le 2\rbrace$ 에 들어가는 콤팩트 집합이고, $M$ 은 모든 $n$ 에서 $\vert f_c^n(0)\vert\le 2$ 인 $c$ 의 집합과 같다.

$\vert z\vert\gt 2$ 이고 $\vert z\vert\ge\vert c\vert$ 이면 $\vert f_c(z)\vert\ge\vert z\vert^2-\vert c\vert\ge\vert z\vert(\vert z\vert-1)$ 이고 $\vert z\vert-1\gt 1$ 이므로 궤도가 일정한 배율 이상으로 커져 발산한다. $\vert c\vert\gt 2$ 이면 $f_c(0)=c$ 에서 이 조건이 성립한다. $\vert c\vert\le 2$ 이고 어떤 $n$ 에서 $\vert f_c^n(0)\vert\gt 2$ 여도 이 조건이 성립한다. $M$ 은 닫힌 집합 $\lbrace c:\vert f_c^n(0)\vert\le 2\rbrace$ 들의 교집합이므로 닫혀 있다.

## 연결성

$M$ 은 연결이다. 이것이 **Douady–Hubbard 연결성 정리(Douady–Hubbard connectedness theorem)** 다.[^1]

증명의 요지. $c\notin M$ 일 때 $\Phi(c)=\lim_n\bigl(f_c^n(0)\bigr)^{1/2^n}$ 이 잘 정의되고, $\Phi$ 가 $\hat{\mathbb C}\setminus M$ 을 $\lbrace\vert w\vert\gt 1\rbrace\cup\lbrace\infty\rbrace$ 로 등각동형으로 보낸다. 여집합이 단순연결이므로 $M$ 은 연결이다.

## 연결성 이분법

$c\in M$ 인 것과 $f_c$ 의 Julia 집합이 연결인 것은 동치다. $c\notin M$ 이면 Julia 집합은 Cantor 집합과 위상동형이다.

증명의 요지. 큰 원판을 $f_c^{-1}$ 로 거듭 당겨 [채워진 Julia 집합](julia-set.md)을 원상의 교집합으로 얻는다. 임계점의 궤도가 원판 안에 머물면 각 단계의 원상이 연결이다. 임계점이 빠져나가면 원상이 두 조각으로 갈라지고, 이를 반복해 Cantor 집합이 된다.

## 쌍곡 성분의 구조

주기 $p$ 쌍곡 성분 $W$ 에서 승수 사상 $\lambda:W\to\mathbb D$ 는 단위원판 $\mathbb D$ 로 가는 등각동형이다.[^1] $\lambda^{-1}(0)$ 인 $c$ 가 성분의 중심이고, 그곳에서 임계점이 주기 궤도에 들어간다. 정의 절의 $c=0$ 과 $c=-1$ 이 각각 주기 $1$ 성분과 주기 $2$ 성분의 중심이다.

주기 $1$ 성분은 고정점 $(1-\sqrt{1-4c})/2$ 의 승수 $1-\sqrt{1-4c}$ 로 $\vert 1-\sqrt{1-4c}\vert\lt 1$ 이라 적히는 심장꼴(cardioid)이다. 주기 $2$ 성분은 $\vert c+1\vert\lt 1/4$ 인 원판이다.

쌍곡 성분 안의 두 매개변수의 Julia 집합은 [준등각 사상](quasiconformal-maps.md)으로 서로 옮겨지므로 위상형이 같다. 쌍곡 성분의 경계 위 $c$ 에서는 승수의 절댓값이 $1$ 이다.

## 알려진 열린 문제

$M$ 이 국소연결(locally connected)인지는 알려져 있지 않다.[^2] 국소연결이면 $M$ 의 모든 내부 성분이 쌍곡 성분이라는 진술이 따라오고, $\Phi$ 의 역사상이 경계까지 연속으로 확장된다.

# 활용

- 이차 다항식의 분류. 이차 다항식 전체는 아핀 켤레로 $f_c$ 족으로 줄어들고, $c$ 가 $M$ 의 어디에 있는지로 $f_c$ 의 동역학을 나눈다. 쌍곡 성분 안의 $c$ 에서는 끌어당기는 주기 궤도가 하나 있고 임계점의 궤도가 그리로 끌려간다.
- Julia 집합의 차원. $\partial M$ 의 Hausdorff 차원은 $2$ 다.[^3] 같은 논문이 대응하는 Julia 집합의 [Hausdorff 차원](hausdorff-dimension.md)이 $2$ 인 $c$ 가 $\partial M$ 에서 조밀하다는 것도 보인다.
- 작은 사본. $f_c$ 의 높은 반복 $f_c^p$ 를 작은 원판에서 이차 다항식처럼 보는 재규격화(renormalization)가 $M$ 과 위상동형인 작은 집합을 $M$ 안에 만든다.[^4] 이런 사본은 $\partial M$ 의 모든 점 근처에 나타나고, 다른 다항식 족의 매개변수 공간에서도 나타난다.

[^1]: A. Douady and J. H. Hubbard, "Étude dynamique des polynômes complexes", Publications Mathématiques d'Orsay (1984–85), I 부 — 균일화 $\Phi$ 와 연결성, 승수 사상.

[^2]: J. Milnor, *Dynamics in One Complex Variable*, 3rd ed. (2006) — 국소연결 추측을 미해결로 명시하고 쌍곡성 조밀 추측과의 관계를 적는다. 추측은 Douady 와 Hubbard 의 위 논문에서 제기되었다.

[^3]: M. Shishikura, "The Hausdorff dimension of the boundary of the Mandelbrot set and Julia sets", *Annals of Mathematics* 147 (1998), 225–267.

[^4]: A. Douady and J. H. Hubbard, "On the dynamics of polynomial-like mappings", *Annales scientifiques de l'École Normale Supérieure* 18 (1985), 287–343.

# 연관 문서

## 선수지식

- [Fatou 성분의 분류](fatou-components.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #topology
