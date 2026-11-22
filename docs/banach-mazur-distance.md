# Banach–Mazur 거리

# 개요

**Banach–Mazur 거리(Banach–Mazur distance)** 는 차원이 같은 두 노름 공간이 선형 변환으로 바꿔 보았을 때 얼마나 다른지를 재는 수다. 평면에서 최대 노름의 단위구는 정사각형이고 Euclid 노름의 단위구는 원판이다. 정사각형을 어떻게 늘이고 돌려도 원판과 같아지지 않고, 원판을 안에 담으면서 반지름 $c$ 의 원판 안에 들어가게 하려면 $c$ 가 $\sqrt 2$ 이상이어야 한다.

두 단위구 사이에 끼울 수 있는 가장 작은 배율 $c$ 가 두 공간의 거리다. 이 거리로 유한 차원 노름 공간들을 모아 그 지름과 Euclid 공간까지의 거리를 비교한다.

# 직관

평면 $\mathbb R^2$ 에 두 노름 $\Vert x\Vert\_\infty=\max(\vert x_1\vert,\vert x_2\vert)$ 와 $\vert x\vert=\sqrt{x_1^2+x_2^2}$ 를 준다. 단위구는 꼭짓점이 $(\pm 1,\pm 1)$ 인 정사각형 $Q$ 와 단위 원판 $D$ 다. $Q$ 에 선형 변환 $T$ 를 가해 평행사변형 $T(Q)$ 를 만들고, $D\subseteq T(Q)\subseteq cD$ 가 되는 가장 작은 $c$ 를 찾는다.

$T$ 가 항등이면 $D$ 는 $Q$ 안에 있고, $Q$ 의 꼭짓점은 원점에서 $\sqrt 2$ 떨어져 있으므로 $c=\sqrt 2$ 다.

다른 $T$ 로도 이보다 작게 할 수 없다. 평행사변형이 단위 원판을 담으면 두 쌍의 마주 보는 변 사이의 거리가 모두 $2$ 이상이다. 한 변의 길이는 다른 쌍의 변 사이의 거리 이상이므로 $2$ 이상이고, 넓이는 그 변의 길이와 그 변의 쌍 사이의 거리를 곱한 값이라 $4$ 이상이다. 반지름 $c$ 인 원판 안의 평행사변형은 두 대각선의 길이가 $2c$ 이하이므로 넓이가 $2c^2$ 이하다.

그래서 $4\le 2c^2$ 이고 $c\ge\sqrt 2$ 다. 정사각형과 원판의 거리는 $\sqrt 2$ 다.

꼭짓점이 $(\pm 1,0)$, $(0,\pm 1)$ 인 마름모, 곧 노름 $\vert x_1\vert+\vert x_2\vert$ 의 단위구는 $Q$ 를 $45°$ 돌리고 $1/\sqrt 2$ 배로 줄인 것과 같다. 그래서 이 두 노름의 거리는 $1$ 이다.

# 정의

차원이 같은 노름 공간 $X$, $Y$ 의 **Banach–Mazur 거리** 는 다음이다.

$$
d(X,Y)=\inf\left\lbrace\Vert T\Vert\thinspace\Vert T^{-1}\Vert : T:X\to Y\text{ 는 선형 동형사상}\right\rbrace
$$

$\Vert T\Vert$ 는 $T$ 의 작용소 노름이다. 단위구 $B\_X$, $B\_Y$ 로는 $B\_Y\subseteq T(B\_X)\subseteq cB\_Y$ 인 선형 동형사상 $T$ 가 있는 $c$ 의 하한이다. $\ell\_p^n$ 은 $\mathbb R^n$ 에 노름 $(\sum_i\vert x_i\vert^p)^{1/p}$ 를 준 공간이고 $\ell\_\infty^n$ 은 최대 노름이다. 직관 절의 계산은 $d(\ell\_\infty^2,\ell\_2^2)=\sqrt 2$, $d(\ell\_\infty^2,\ell\_1^2)=1$ 이다.

# 성질

## 거리의 성질

- $d(X,Y)\ge 1$ 이고 $d(X,Y)=d(Y,X)$ 다.
- $d(X,Z)\le d(X,Y)\thinspace d(Y,Z)$ 다. 두 동형사상을 합성하면 작용소 노름이 곱보다 크지 않다.
- 유한 차원에서 노름이 유계인 선형 사상들의 집합은 콤팩트하므로 하한은 달성된다. 그래서 $d(X,Y)=1$ 인 것은 $X$ 와 $Y$ 가 등거리 동형인 것과 동치다.

그래서 $\log d$ 는 $n$ 차원 노름 공간의 등거리 동형류 위의 거리이고, 이 거리 공간을 **Banach–Mazur 콤팩트 공간(Banach–Mazur compactum)** 이라 한다.

## Euclid 공간까지의 거리

모든 $n$ 차원 노름 공간 $X$ 는 $d(X,\ell\_2^n)\le\sqrt n$ 이다.

증명의 요지. $B\_X$ 에 담긴 부피가 가장 큰 타원체는 [John 타원체](john-ellipsoid.md)이고, 대칭 John 정리에 따르면 그 타원체를 $\sqrt n$ 배 한 것이 $B\_X$ 를 담는다. 타원체를 단위공으로 보내는 선형 사상이 $T$ 다. ∎

삼각부등식과 합치면 모든 $n$ 차원 노름 공간 $X$, $Y$ 에서 $d(X,Y)\le n$ 이다.

## 정육면체

$d(\ell\_\infty^n,\ell\_2^n)=\sqrt n$ 이다.

증명의 요지. 항등사상이 $\sqrt n$ 을 준다. 거꾸로 $B\subseteq T(\lbrack -1,1\rbrack^n)\subseteq cB$ 라 하자. $T(\lbrack -1,1\rbrack^n)$ 은 $v_i=Te_i$ 로 펼친 평행체이고, $(v_i)$ 의 쌍대 기저 $(w_i)$ 로 $\lbrace x:\vert\langle w_i,x\rangle\vert\le 1\rbrace$ 이다. 단위공을 담으므로 $\vert w_i\vert\le 1$ 이고, Hadamard 부등식(Hadamard's inequality)으로 $\vert\det(w_1,\dots,w_n)\vert\le 1$ 이므로 $\vert\det(v_1,\dots,v_n)\vert\ge 1$ 이다. 꼭짓점 $\sum_i\pm v_i$ 의 길이의 제곱을 부호에 대해 평균하면 $\sum_i\vert v_i\vert^2$ 이므로 이 값은 $c^2$ 이하다.

Hadamard 부등식과 [산술-기하 평균 부등식](am-gm-inequality.md)에서 다음이 나온다.

$$
\vert\det(v_1,\dots,v_n)\vert\le\prod_i\vert v_i\vert\le\left(\frac{1}{n}\sum_i\vert v_i\vert^2\right)^{n/2}\le\left(\frac{c^2}{n}\right)^{n/2}
$$

두 부등식을 합치면 $1\le(c^2/n)^{n/2}$ 이고 $c\ge\sqrt n$ 이다. ∎

직관 절의 넓이 비교가 $n=2$ 의 경우다. 쌍대성으로 $d(\ell\_1^n,\ell\_2^n)=\sqrt n$ 이다.

## Gluskin 정리

$n$ 차원 노름 공간 전체에서 $d$ 의 최댓값은 $n$ 이하이고, Gluskin 은 상수 $c\gt 0$ 에 대해 $d(X,Y)\ge cn$ 인 $n$ 차원 공간 $X$, $Y$ 가 있음을 보였다[^1]. $X$, $Y$ 는 무작위로 고른 점들의 볼록 껍질을 단위구로 하는 공간이다. 그래서 Banach–Mazur 콤팩트 공간의 지름은 $n$ 의 상수배와 같은 크기다.

# 활용

- [Dvoretzky 정리](dvoretzky-theorem.md). 차원이 큰 노름 공간에는 Euclid 공간과의 Banach–Mazur 거리가 $1+\varepsilon$ 이하인 부분공간이 차원 $c(\varepsilon)\log n$ 이상으로 존재한다.
- 사영 상수. Banach 공간의 $n$ 차원 부분공간은 노름이 $\sqrt n$ 이하인 사영의 상이다([Kadec–Snobar 정리](kadec-snobar-theorem.md)). 증명에 Euclid 공간까지의 거리 $\sqrt n$ 을 쓴다.
- 유한 차원 [Banach 공간](banach-spaces.md)의 국소 이론. 무한 차원 공간의 성질을 유한 차원 부분공간들이 $\ell\_p^n$ 과 얼마나 가까운지로 나타낸다.

[^1]: E. D. Gluskin, "The diameter of the Minkowski compactum is roughly equal to n", *Functional Analysis and Its Applications* **15** (1981), 57–58.

# 연관 문서

## 선수지식

- [Banach 공간](banach-spaces.md)
- [John 타원체](john-ellipsoid.md)

## 더 알아보기

- [Dvoretzky 정리](dvoretzky-theorem.md)
- [Kadec–Snobar 정리](kadec-snobar-theorem.md)
- [Gurarii–Kadec–Macaev 정리](gurarii-kadec-macaev-theorem.md)

#functional_analysis #analysis #optimization
