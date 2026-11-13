# 볼록 다면체

# 개요

**볼록 다면체(convex polytope)** 는 유한 개의 점을 모두 포함하는 가장 작은 볼록집합이다. 일차 부등식 $x\ge0$, $y\ge0$, $x+y\le1$ 을 만족하는 점에서 $x+2y$ 를 가장 크게 하는 문제는 세 부등식이 자르는 삼각형 위의 문제이고, 답은 꼭짓점 $(0,1)$ 에서 나온다. 부등식으로 주어진 영역의 꼭짓점을 찾고 그 수를 세려면 이 영역이 몇 개 점의 볼록 껍질이기도 하다는 사실이 필요하다.

볼록 다면체는 꼭짓점의 목록과 부등식의 목록 두 가지로 적히고, 두 적는 법이 같은 대상을 준다는 정리와 꼭짓점·모서리·면의 수 사이의 관계식으로 이 문제를 다룬다.

# 직관

삼각형 $x\ge0$, $y\ge0$, $x+y\le1$ 의 꼭짓점은 세 부등식 가운데 둘을 등식으로 바꾸어 푼 점이다. $x=0,y=0$ 에서 $(0,0)$, $y=0,x+y=1$ 에서 $(1,0)$, $x=0,x+y=1$ 에서 $(0,1)$ 이 나온다. 거꾸로 이 세 점의 볼록 껍질을 구하면 세 변을 포함하는 직선 셋이 정하는 반평면의 교집합이고, 처음의 세 부등식으로 돌아온다.

공간에서는 정육면체 $\vert x\vert\le1$, $\vert y\vert\le1$, $\vert z\vert\le1$ 이 부등식 여섯 개로 적히고, 꼭짓점 $(\pm1,\pm1,\pm1)$ 여덟 개의 볼록 껍질이다. 부등식 여섯 개가 정육면체의 면 여섯 개다. 모서리는 등식으로 바꾼 부등식이 둘인 곳이고 열두 개다.

정팔면체 $\vert x\vert+\vert y\vert+\vert z\vert\le1$ 은 부등식 $\pm x\pm y\pm z\le1$ 여덟 개로 적히고, 꼭짓점 $(\pm1,0,0)$, $(0,\pm1,0)$, $(0,0,\pm1)$ 여섯 개의 볼록 껍질이다. 정육면체는 꼭짓점 $8$, 모서리 $12$, 면 $6$ 이고 정팔면체는 $6$, $12$, $8$ 이다. 어느 쪽도 꼭짓점 수에서 모서리 수를 빼고 면 수를 더하면 $2$ 다.

# 정의

## 두 가지 기술

$\mathbb R^d$ 의 유한 집합 $\lbrace v\_1,\dots,v\_n\rbrace$ 의 볼록 껍질, 곧 계수가 음이 아니고 합이 $1$ 인 일차결합 전체를 **V 다면체(V-polytope)** 라 한다.

$$
\mathrm{conv}\lbrace v\_1,\dots,v\_n\rbrace=\Bigl\lbrace\sum\_i\lambda\_iv\_i:\ \lambda\_i\ge0,\ \sum\_i\lambda\_i=1\Bigr\rbrace
$$

유한 개의 닫힌 반공간 $\lbrace x:a\_j\cdot x\le b\_j\rbrace$ 의 교집합이 유계일 때 이것을 **H 다면체(H-polytope)** 라 한다. 직관 절의 정육면체는 꼭짓점 여덟 개의 V 다면체이고 반공간 여섯 개의 H 다면체다.

## 면

다면체 $P$ 의 모든 점이 $a\cdot x\le b$ 를 만족할 때 $P\cap\lbrace x:a\cdot x=b\rbrace$ 를 $P$ 의 **면(face)** 이라 한다. 면의 차원이 $0$ 이면 꼭짓점, $1$ 이면 모서리, $\dim P-1$ 이면 **극대면(facet)** 이라 한다. $d$ 차원 다면체의 $i$ 차원 면의 수를 $f\_i$ 로 쓰고 $(f\_0,\dots,f\_{d-1})$ 을 **f 벡터(f-vector)** 라 한다.

정육면체의 f 벡터는 $(8,12,6)$ 이다. 면 $z=1$ 은 부등식 $z\le1$ 을 등식으로 바꾼 것이고, 꼭짓점 $(1,1,1)$ 은 $x+y+z\le3$ 을 등식으로 바꾼 것이다.

## 단체 다면체와 쌍대

모든 극대면이 단체, 곧 꼭짓점이 차원보다 하나 많은 다면체이면 **단체 다면체(simplicial polytope)** 라 한다. 정팔면체의 극대면은 삼각형이므로 단체 다면체이고, 정육면체의 극대면은 사각형이므로 아니다.

원점을 내부에 둔 다면체 $P$ 의 **쌍대 다면체(polar polytope)** 는 다음 집합이다.

$$
P^\circ=\lbrace y:\ x\cdot y\le1\ \text{for all}\ x\in P\rbrace
$$

정육면체의 쌍대는 정팔면체다. $P^\circ$ 는 꼭짓점마다 부등식 $v\cdot y\le1$ 을 세운 H 다면체이므로, 정육면체의 꼭짓점 $(\pm1,\pm1,\pm1)$ 이 정팔면체의 부등식 $\pm y\_1\pm y\_2\pm y\_3\le1$ 이 된다. $P$ 의 $i$ 차원 면은 $P^\circ$ 의 $(d-1-i)$ 차원 면에 하나씩 대응한다.

# 성질

## Minkowski–Weyl 정리

정리. $\mathbb R^d$ 의 부분집합이 V 다면체인 것과 H 다면체인 것은 동치다. 이것을 **Minkowski–Weyl 정리(Minkowski–Weyl theorem)** 라 한다[^1].

증명의 요지. H 다면체는 유계이므로 꼭짓점의 볼록 껍질이고, 꼭짓점은 일차독립인 부등식 $d$ 개를 등식으로 바꾼 연립방정식의 해라서 유한 개다. 거꾸로 V 다면체는 $(x,\lambda)$ 공간의 H 다면체를 $x$ 로 사영한 것이고, 부등식계에서 변수를 하나씩 소거하는 [Fourier–Motzkin 소거법](fourier-motzkin-elimination.md)이 사영을 다시 부등식으로 적는다. 소거가 맞다는 것은 [Farkas 보조정리](farkas-lemma.md)와 같은 계산이다.

## 꼭짓점과 선형계획

$P=\mathrm{conv}\lbrace v\_i\rbrace$ 의 점 $\sum\lambda\_iv\_i$ 에서 $c\cdot\sum\lambda\_iv\_i\le\max\_ic\cdot v\_i$ 이므로, 다면체 위에서 일차식 $c\cdot x$ 의 최댓값은 어떤 꼭짓점에서 나온다. 개요의 문제에서 $x+2y$ 는 꼭짓점 $(0,0)$, $(1,0)$, $(0,1)$ 에서 $0,1,2$ 이므로 최댓값 $2$ 가 $(0,1)$ 에서 나온다.

## Euler–Poincaré 관계식

정리. $d$ 차원 볼록 다면체의 f 벡터는 다음을 만족한다[^1].

$$
f\_0-f\_1+f\_2-\cdots+(-1)^{d-1}f\_{d-1}=1-(-1)^d
$$

$d=3$ 이면 $f\_0-f\_1+f\_2=2$ 이고 직관 절의 두 계산이 이것이다. 다면체의 경계는 $(d-1)$ 차원 구면이고, 면들로 나눈 구면의 [Euler 지표](euler-characteristic.md)가 왼쪽 식이다.

## 3 차원의 상한

$3$ 차원 다면체의 꼭짓점이 $n$ 개이면 $f\_1\le3n-6$, $f\_2\le2n-4$ 이고, 단체 다면체에서 등호가 성립한다.

극대면은 모서리를 셋 이상 갖고 모서리는 극대면 둘에 속하므로 $2f\_1\ge3f\_2$ 다. 이것을 $n-f\_1+f\_2=2$ 에 넣으면 $2\le n-f\_1/3$ 이 되어 $f\_1\le3n-6$ 이 나오고, $f\_2=2-n+f\_1\le2n-4$ 다. 정팔면체는 $n=6$ 에서 $f\_1=12$, $f\_2=8$ 로 두 등호가 성립한다.

## Dehn–Sommerville 관계식

$d$ 차원 단체 다면체의 **h 벡터(h-vector)** $(h\_0,\dots,h\_d)$ 는 $f\_{-1}=1$ 로 두고 다음 식으로 정한다.

$$
\sum\_{i=0}^{d}h\_it^i=\sum\_{i=0}^{d}f\_{i-1}\thinspace t^i(1-t)^{d-i}
$$

정리. 단체 다면체의 h 벡터는 $h\_i=h\_{d-i}$ 를 만족한다. 이것을 **Dehn–Sommerville 관계식(Dehn–Sommerville equations)** 이라 한다[^1].

정팔면체에서는 다음이 나오므로 h 벡터는 $(1,3,3,1)$ 이다.

$$
(1-t)^3+6t(1-t)^2+12t^2(1-t)+8t^3=1+3t+3t^2+t^3
$$

$i=0$ 의 식 $h\_0=h\_d$ 는 Euler–Poincaré 관계식과 같다.

## 상계 정리

곡선 $t\mapsto(t,t^2,\dots,t^d)$ 위의 점 $n$ 개의 볼록 껍질을 [순환 다면체](cyclic-polytopes.md) $C(n,d)$ 라 한다.

정리. 꼭짓점이 $n$ 개인 $d$ 차원 볼록 다면체의 $f\_i$ 는 모든 $i$ 에서 $C(n,d)$ 의 $f\_i$ 이하다. 이것을 **상계 정리(upper bound theorem)** 라 하고, McMullen 이 증명했다[^2].

$d=4$ 이면 $C(n,4)$ 는 모든 꼭짓점 쌍이 모서리로 이어져 $f\_1=\binom n2$ 다. $3$ 차원에서는 모서리가 $3n-6$ 개 이하였으므로, 차원이 하나 늘면 모서리 수의 상한이 $n$ 의 일차식에서 이차식으로 바뀐다.

# 활용

- [선형계획법](linear-programming.md). 허용 영역이 H 다면체이고, 최적해가 꼭짓점에 있다는 성질로 꼭짓점만 조사하면 된다. [단체법](simplex-method.md)은 모서리를 따라 이웃 꼭짓점으로 옮긴다.
- 조합 최적화의 다면체. [매칭 다면체](matching-polytope.md)와 [안정집합 다면체](stable-set-polytope.md)는 조합적 대상의 지시 벡터들의 V 다면체이고, 그 H 기술을 찾으면 조합 문제가 선형계획이 된다.
- [Stanley–Reisner 환](stanley-reisner-rings.md). 단체 다면체의 경계 복합체의 h 벡터가 이 문서의 h 벡터이고, Stanley 는 이 환으로 구면 삼각분할의 상계 정리를 증명했다.
- [Ehrhart 다항식](ehrhart-polynomial.md). 꼭짓점이 정수점인 다면체를 $t$ 배 늘렸을 때 안에 든 정수점의 수가 $t$ 의 다항식이다.

[^1]: B. Grünbaum, *Convex Polytopes*, 2nd ed., Graduate Texts in Mathematics 221, Springer, 2003, 3 장, 8 장, 9 장.
[^2]: P. McMullen, "The maximum numbers of faces of a convex polytope", *Mathematika* 17 (1970), 179–184.

# 연관 문서

## 선수지식

- [Farkas 보조정리](farkas-lemma.md)
- [Euler 지표](euler-characteristic.md)

## 더 알아보기

- [Balinski 정리](balinski-theorem.md)
- [Steinitz 정리](steinitz-theorem.md)
- [순환 다면체](cyclic-polytopes.md)
- [Birkhoff–von Neumann 정리](birkhoff-von-neumann-theorem.md)
- [순서 다면체](order-polytope.md)

#optimization #combinatorics #topology
