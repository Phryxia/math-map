# Julia–Carathéodory 정리

# 개요

**Julia–Carathéodory 정리(Julia–Carathéodory theorem)** 는 원판을 원판 안으로 보내는 정칙함수가 경계의 한 점에서 미분계수를 갖는지를, 그 점으로 다가갈 때 경계까지의 거리가 줄어드는 비율 하나로 판정하는 정리다. $f(z)=(1+z)/2$ 와 $f(z)=1-\sqrt{1-z}$ 는 둘 다 $z\to 1$ 일 때 $f(z)\to 1$ 이지만, 앞의 것은 $1$ 에서 미분계수 $1/2$ 를 갖고 뒤의 것은 미분계수가 무한대로 간다. 이 정리는 그 차이가 비율 $(1-\vert f(z)\vert)/(1-\vert z\vert)$ 의 하극한이 유한한지로 정해진다는 것을 보인다.

# 직관

$f(z)=(1+z)/2$ 에서 $z=x$ 를 실수축을 따라 $1$ 로 보내면 다음과 같다.

$$
\frac{1-f(x)}{1-x}=\frac{1-(1+x)/2}{1-x}=\frac12
$$

$f(z)=1-\sqrt{1-z}$ 는 원판을 원판 안으로 보내고, 같은 비율은 $\sqrt{1-x}/(1-x)=1/\sqrt{1-x}$ 로 무한대로 간다. 두 함수의 $1$ 에서의 차분몫 $(f(x)-1)/(x-1)$ 도 각각 $1/2$ 과 무한대로 간다.

경계까지의 거리 $1-\vert z\vert$ 는 원판 안에서만 정의되는 양이고, 차분몫은 경계의 점을 쓰는 양이다. [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)가 원판 안의 거리를 묶으므로 앞의 양을 다루기 쉽고, 정리는 앞의 양이 유한하면 뒤의 양도 수렴한다는 것이다.

# 정의

$f:\mathbb D\to\mathbb D$ 가 정칙이고 $\sigma$ 가 단위원 위의 점일 때 다음 값을 $f$ 의 $\sigma$ 에서의 **경계 팽창 계수(boundary dilation coefficient)** 라 한다.

$$
\alpha=\liminf_{z\to\sigma}\frac{1-\vert f(z)\vert}{1-\vert z\vert}
$$

$z$ 가 $\sigma$ 를 꼭짓점으로 하는 원판 안의 부채꼴, 곧 $\vert z-\sigma\vert\le C(1-\vert z\vert)$ 인 영역 안에서 $\sigma$ 로 다가가는 것을 **비접선 방향(nontangential)** 으로 다가간다고 한다. 비접선 방향의 극한 $\lim(f(z)-\omega)/(z-\sigma)$ 가 있으면 이것을 **각 도함수(angular derivative)** 라 한다. 직관 절의 $(1+z)/2$ 는 $\sigma=1$ 에서 $\alpha=1/2$ 이고 $1-\sqrt{1-z}$ 는 $\alpha=\infty$ 다.

# 성질

## Julia 보조정리

$\alpha\lt\infty$ 이면 단위원 위의 점 $\omega$ 가 있어 모든 $z\in\mathbb D$ 에서 다음이 성립한다.[^1]

$$
\frac{\vert\omega-f(z)\vert^2}{1-\vert f(z)\vert^2}\le\alpha\thinspace\frac{\vert\sigma-z\vert^2}{1-\vert z\vert^2}
$$

이것이 Julia 보조정리(Julia's lemma)다. $\alpha$ 를 주는 점열 $z_n\to\sigma$ 를 잡고 $f(z_n)$ 의 극한점을 $\omega$ 로 둔다. Schwarz–Pick 보조정리의 의사쌍곡 거리 부등식 $\rho(f(z),f(z_n))\le\rho(z,z_n)$ 을 $1-\rho^2$ 의 꼴로 바꾸고 $n\to\infty$ 로 보내면 이 부등식이 나온다. 좌변과 우변은 $\omega$ 와 $\sigma$ 에서의 horodisk 를 정하는 식이므로, $f$ 는 $\sigma$ 에서의 horodisk 를 $\omega$ 에서의 horodisk 안으로 보낸다.

## Julia–Carathéodory 정리

$\alpha\lt\infty$ 이면 $z$ 가 비접선 방향으로 $\sigma$ 에 다가갈 때 다음이 성립한다.[^2]

$$
f(z)\to\omega,\qquad\frac{f(z)-\omega}{z-\sigma}\to\alpha\thinspace\omega\bar\sigma,\qquad f'(z)\to\alpha\thinspace\omega\bar\sigma
$$

거꾸로 비접선 방향의 각 도함수가 유한하게 존재하고 $\vert\omega\vert=1$ 이면 $\alpha$ 는 유한하고 각 도함수의 절댓값과 같다. 직관 절의 $(1+z)/2$ 에서 $\omega=\sigma=1$ 이고 각 도함수는 $\alpha=1/2$ 이다.

## 하극한의 범위

$\alpha$ 는 언제나 $0$ 보다 크다. Schwarz–Pick 보조정리에서 $1-\vert f(z)\vert\ge c(1-\vert z\vert)$ 꼴의 하계가 $c=(1-\vert f(0)\vert)/(1+\vert f(0)\vert)$ 로 나온다. 그래서 각 도함수가 있으면 그 절댓값은 $c$ 이상이다.

# 활용

- [Denjoy–Wolff 정리](denjoy-wolff-theorem.md). 경계에 있는 Denjoy–Wolff 점에서 $\omega=\sigma$ 이고 $\alpha\le 1$ 이며, Julia 보조정리가 그 점의 horodisk 들이 $f$ 로 줄어드는 비율을 준다.
- 연산자 이론. 원판의 자기사상 $\varphi$ 에 대해 $f\mapsto f\circ\varphi$ 로 정의한 [Hardy 공간](hardy-spaces.md) $H^2$ 위의 합성 연산자가 콤팩트이려면, $\varphi$ 가 단위원의 어느 점에서도 유한한 각 도함수를 갖지 않아야 한다.

[^1]: G. Julia, "Extension nouvelle d'un lemme de Schwarz", Acta Mathematica 42 (1920).
[^2]: C. Carathéodory, "Über die Winkelderivierten von beschränkten analytischen Funktionen", Sitzungsberichte der Preussischen Akademie der Wissenschaften (1929).

# 연관 문서

## 선수지식

- [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis
