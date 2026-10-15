# Mandelbrot 집합

# 개요

Mandelbrot 집합은 $f_c(z)=z^2+c$ 의 임계점 궤도가 유계인 매개변수 $c$ 전체다. 매개변수 하나마다 [Julia 집합](julia-set.md)이 하나 있고, 그 Julia 집합이 연결인지 흩어지는지가 이 집합에 속하는지로 갈린다.

내부의 성분 가운데 유인 주기를 갖는 것을 쌍곡 성분이라 하고, 성분마다 그 주기와 [Fatou 성분](fatou-components.md)의 구조가 정해진다.

# 직관

$c$ 를 바꾸며 $f_c$ 의 Julia 집합을 보면 두 모양이 나온다. 하나로 이어진 집합과 Cantor 집합처럼 흩어진 먼지다. 어느 쪽인지 알려면 Julia 집합 전체를 조사해야 할 것 같지만, 임계점 $z=0$ 의 궤도 하나만 보면 된다. 궤도가 유계이면 Julia 집합이 연결이고 무계이면 흩어진다.

궤도는 직접 계산된다. $c=0$ 에서 궤도는 $0,0,0,\dots$ 이고 유계다. $c=1$ 에서는 $0,1,2,5,26,\dots$ 으로 커져 무계다. $c=-1$ 에서는 $0,-1,0,-1,\dots$ 으로 주기 $2$ 를 돌아 유계다. 유계인 $c$ 를 복소평면에 모은 집합이 Mandelbrot 집합이다.

# 정의

## Mandelbrot 집합

$f_c(z)=z^2+c$ 에 대해 다음으로 둔다.

$$
M=\lbrace c\in\mathbb C:\sup_n\vert f_c^n(0)\vert\lt\infty\rbrace
$$

$f_c^n$ 은 $n$ 번 합성이다. 어떤 $n$ 에서 $\vert f_c^n(0)\vert\gt 2$ 이면 궤도가 발산하므로, $M$ 은 모든 $n$ 에서 $\vert f_c^n(0)\vert\le 2$ 인 $c$ 의 집합과 같다.

## 쌍곡 성분

$M$ 의 내부 성분 $W$ 가 **쌍곡 성분**이라는 것은 $W$ 의 모든 $c$ 에서 $f_c$ 가 유인 주기 궤도를 갖는다는 뜻이다. 주기는 $W$ 에서 일정하고 그 값을 $W$ 의 주기라 한다.

주기 $p$ 궤도의 **승수**는 $\lambda(c)=(f_c^p)'$ 를 궤도의 한 점에서 평가한 값이다. 승수가 $W$ 를 단위원판으로 보내는 사상이 된다.

# 성질

## 유계성과 연결성

> **정리.** $M$ 은 $\lbrace\vert c\vert\le 2\rbrace$ 에 들어가는 콤팩트 집합이다.

$\vert c\vert\gt 2$ 이면 $\vert f_c(0)\vert=\vert c\vert\gt 2$ 이고, $\vert z\vert\ge\vert c\vert\gt 2$ 에서 $\vert f_c(z)\vert\ge\vert z\vert^2-\vert c\vert\ge\vert z\vert(\vert z\vert-1)\gt\vert z\vert$ 이므로 궤도가 단조 증가해 발산한다. 조건이 닫힌 조건이므로 $M$ 은 닫혀 있고 유계다.

> **정리 (Douady–Hubbard).** $M$ 은 연결이다.[^1]

증명은 여집합을 균일화하는 것이다. $c\notin M$ 일 때 $\Phi(c)=\lim_n\bigl(f_c^n(0)\bigr)^{1/2^n}$ 이 잘 정의되고, $\Phi$ 가 $\hat{\mathbb C}\setminus M$ 을 $\lbrace\vert w\vert\gt 1\rbrace$ 로 등각동형으로 보낸다. 여집합이 단순연결이므로 $M$ 은 연결이다.

## 연결성 이분법

> **정리.** $c\in M$ 인 것과 $f_c$ 의 Julia 집합이 연결인 것은 동치다. $c\notin M$ 이면 Julia 집합은 Cantor 집합이다.

증명의 요지는 충만 Julia 집합을 원판의 원상으로 쌓아 가는 것이다. $f_c^{-1}$ 로 큰 원판을 당기면 원판의 열이 나오고, 임계점이 그 열 안에 머물면 각 단계가 연결로 유지된다. 임계점이 빠져나가면 원상이 두 조각으로 갈라지고 반복해서 Cantor 집합이 된다.

## 쌍곡 성분의 구조

> **정리.** 주기 $p$ 쌍곡 성분 $W$ 에서 승수 사상 $\lambda:W\to\mathbb D$ 는 등각동형이다.

$\lambda^{-1}(0)$ 에 해당하는 $c$ 가 성분의 중심이고 그곳에서 임계점이 주기 궤도에 들어간다. 주기 $1$ 성분은 $\vert 1-\sqrt{1-4c}\vert\lt 1$ 로 적히는 심장꼴이고 주기 $2$ 성분은 $\vert c+1\vert\lt 1/4$ 인 원판이다.

쌍곡 성분 안에서 두 사상의 Julia 집합은 [준등각 사상](quasiconformal-maps.md)으로 서로 옮겨지므로 위상형이 같다. 성분의 경계를 넘을 때 유인 궤도의 승수가 단위원에 닿아 주기가 바뀐다.

## 알려진 열린 문제

$M$ 이 국소연결인지는 알려져 있지 않다.[^2] 국소연결이면 $M$ 의 모든 내부 성분이 쌍곡 성분이라는 진술이 따라오고, $\Phi$ 의 역사상이 경계까지 연속으로 확장되어 $M$ 의 조합적 기술이 완성된다.

# 활용

## 매개변수 공간의 분류

이차 다항식 전체는 아핀 켤레로 $f_c$ 족으로 줄어들고, $M$ 이 그 족의 동역학을 매개변수 쪽에서 적는다. $c$ 가 쌍곡 성분 안이면 유인 주기와 그 주기, $c$ 가 경계이면 포물선 또는 Siegel 유형이 대응한다.

## Julia 집합의 차원

$\partial M$ 의 Hausdorff 차원은 $2$ 다.[^3] 같은 논문이 대응하는 Julia 집합의 [Hausdorff 차원](hausdorff-dimension.md)이 $2$ 인 $c$ 가 $\partial M$ 에서 조밀하다는 것도 보인다. 매개변수 공간의 복잡도와 동역학 공간의 복잡도를 잇는 결과다.

## 작은 사본

$M$ 안에는 $M$ 과 준등각으로 닮은 작은 집합이 조밀하게 들어 있다. 고차 다항식의 반복을 이차식의 반복으로 재는 되풀이 재규격화가 그 사본을 만들고, 다른 다항식 족의 매개변수 공간에서도 같은 모양이 나타난다.

[^1]: A. Douady and J. H. Hubbard, "Étude dynamique des polynômes complexes", Publications Mathématiques d'Orsay (1984–85), I 부 — 균일화 $\Phi$ 와 연결성.

[^2]: J. Milnor, *Dynamics in One Complex Variable*, 3rd ed. (2006) — 국소연결 추측을 미해결로 명시하고 쌍곡성 조밀 추측과의 관계를 적는다. 추측은 Douady 와 Hubbard 의 위 논문에서 제기되었다.

[^3]: M. Shishikura, "The Hausdorff dimension of the boundary of the Mandelbrot set and Julia sets", *Annals of Mathematics* 147 (1998), 225–267.

# 연관 문서

## 선수지식

- [Fatou 성분의 분류](fatou-components.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #topology
