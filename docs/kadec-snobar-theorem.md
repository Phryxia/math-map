# Kadec–Snobar 정리

# 개요

**Kadec–Snobar 정리(Kadec–Snobar theorem)** 는 [Banach 공간](banach-spaces.md)의 $n$ 차원 부분공간마다 그 위로 가는 사영 가운데 노름이 $\sqrt n$ 이하인 것이 있다는 정리다. 최대 노름을 준 $\mathbb R^3$ 에서 좌표의 합이 $0$ 인 평면으로 점을 옮기면, 직교 사영은 길이 $1$ 인 점 $(1,-1,-1)$ 을 길이 $4/3$ 인 점으로 보내 길이를 늘린다. 이 정리는 차원이 $n$ 이면 어떤 공간 안의 어떤 부분공간이든 길이를 $\sqrt n$ 배보다 더 늘리지 않는 사영을 고를 수 있다고 답한다.

# 직관

[Hilbert 공간](hilbert-spaces.md)에서는 부분공간으로의 직교 사영이 길이를 늘리지 않는다. $\mathbb R^3$ 에 최대 노름 $\Vert x\Vert\_\infty=\max\_i\vert x\_i\vert$ 를 준 공간 $\ell\_\infty^3$ 과 평면 $E=\lbrace x:x\_1+x\_2+x\_3=0\rbrace$ 에서 같은 일을 해 본다. 직교 사영은 각 좌표에서 평균 $m=(x\_1+x\_2+x\_3)/3$ 을 빼는 사상 $Px=x-m(1,1,1)$ 이다.

$x=(1,-1,-1)$ 이면 $\Vert x\Vert\_\infty=1$ 이고 $m=-1/3$ 이므로 $Px=(4/3,-2/3,-2/3)$ 이다. 길이가 $4/3$ 배로 늘었다. $P$ 의 행렬은 대각 성분 $2/3$, 나머지 성분 $-1/3$ 이고, 최대 노름에 대한 작용소 노름은 행마다 성분의 절댓값을 더한 값의 최댓값 $2/3+1/3+1/3=4/3$ 이다.

다른 사영을 골라도 $4/3$ 보다 작아지지 않는다. 좌표의 순서를 바꾸는 사상 여섯 개는 최대 노름과 평면 $E$ 를 보존하므로, 아무 사영 $Q$ 를 이 여섯 사상으로 켤레한 것들의 평균을 내면 노름이 $\Vert Q\Vert$ 이하인 사영이 나온다. 그 평균은 좌표의 순서를 바꾸는 사상과 교환하므로 $P$ 이고, 그래서 $\Vert Q\Vert\ge 4/3$ 이다.

# 정의

## 사영과 사영 상수

노름 공간 $X$ 의 부분공간 $E$ 에 대해 $P^2=P$ 이고 상이 $E$ 인 유계 선형사상 $P:X\to X$ 를 $E$ 위로의 **사영(projection)** 이라 한다. $E$ 의 **상대 사영 상수(relative projection constant)** 는 다음이다.

$$
\lambda(E,X)=\inf\lbrace\Vert P\Vert : P \text{ 는 } E \text{ 위로의 사영}\rbrace
$$

$E$ 를 등거리로 담는 모든 Banach 공간 $X$ 에 걸친 상한 $\lambda(E)=\sup\_X\lambda(E,X)$ 를 $E$ 의 **사영 상수(projection constant)** 라 한다. 직관 절에서 $\lambda(E,\ell\_\infty^3)=4/3$ 이다.

# 성질

## 최대 노름 공간에서의 값

$E$ 를 $\ell\_\infty^N$ 이나 $\ell\_\infty$ 에 등거리로 넣은 상을 $j(E)$ 라 하면 $\lambda(E)=\lambda(j(E),\ell\_\infty)$ 다. $E\subseteq X$ 이면 $j$ 의 좌표 범함수마다 [Hahn–Banach 정리](hahn-banach-theorem.md)로 노름을 지키며 $X$ 로 넓혀 $\Vert J\Vert=1$ 인 $J:X\to\ell\_\infty$ 를 얻는다. $\ell\_\infty$ 에서 $j(E)$ 위로의 사영 $Q$ 에 대해 $j^{-1}QJ$ 는 $X$ 에서 $E$ 위로의 사영이고 노름이 $\Vert Q\Vert$ 이하다.

직관 절의 $E$ 는 $\ell\_\infty^3$ 안에 있으므로 $\lambda(E)=4/3$ 이다.

## Kadec–Snobar 정리

$n$ 차원 노름 공간 $E$ 는 $\lambda(E)\le\sqrt n$ 을 만족한다. M. I. Kadec 과 M. G. Snobar 가 증명했다[^1].

증명의 요지. $E$ 에 내적을 골라 단위구 $B\_E$ 의 [John 타원체](john-ellipsoid.md)가 Euclid 단위공 $B$ 가 되게 하면 $B\subseteq B\_E$ 이므로 $\Vert y\Vert\_E\le\lvert y\rvert$ 이다. John 정리의 접점 $u\_i$ 와 양수 $c\_i$ 는 $\sum\_ic\_iu\_iu\_i^{\mathsf T}=I$, $\sum\_ic\_i=n$ 을 만족한다. $u\_i$ 에서 $B$ 의 접평면이 $B\_E$ 의 받침 평면이므로 범함수 $x\mapsto\langle x,u\_i\rangle$ 은 $E$ 위에서 노름이 $1$ 이고, Hahn–Banach 정리로 노름 $1$ 인 $f\_i:X\to\mathbb R$ 로 넓힌다. 이제 다음 사상을 둔다.

$$
Px=\sum_ic_i\thinspace f_i(x)\thinspace u_i
$$

$x\in E$ 이면 $Px=\sum\_ic\_i\langle x,u\_i\rangle u\_i=x$ 다. $\lvert z\rvert\le 1$ 인 $z$ 에 대해 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 다음이 성립한다.

$$
\langle Px,z\rangle\le\Bigl(\sum_ic_if_i(x)^2\Bigr)^{1/2}\Bigl(\sum_ic_i\langle u_i,z\rangle^2\Bigr)^{1/2}\le\sqrt n\thinspace\Vert x\Vert
$$

따라서 $\Vert Px\Vert\_E\le\lvert Px\rvert\le\sqrt n\thinspace\Vert x\Vert$ 다.

직관 절의 평면에서는 $n=2$ 이고 $4/3\le\sqrt 2\approx 1.414$ 다.

## 상수의 크기

Euclid 공간 $\ell\_2^n$ 의 사영 상수는 $n$ 이 커질 때 $\sqrt{2n/\pi}$ 에 가까워진다[^2]. 그래서 $\sqrt n$ 은 상수배를 빼면 더 줄일 수 없다. H. König 와 D. R. Lewis 는 $n\ge 2$ 이면 $\lambda(E)\lt\sqrt n$ 으로 부등호가 엄격함을 증명했다[^3].

## Banach–Mazur 거리와의 관계

$n$ 차원 공간 $E$, $F$ 에 대해 $\lambda(E)\le d(E,F)\thinspace\lambda(F)$ 이다. [Banach–Mazur 거리](banach-mazur-distance.md)의 부등식 $d(E,\ell\_2^n)\le\sqrt n$ 을 여기에 넣으면 $\lambda(E)\le\sqrt n\thinspace\lambda(\ell\_2^n)$ 이고, 이 값은 $n$ 규모다. 위 증명은 John 정리의 접점을 직접 써서 $\sqrt n$ 을 얻는다.

# 활용

- 유한 차원 부분공간의 여공간. Banach 공간의 유한 차원 부분공간 $E$ 에는 닫힌 부분공간 $F$ 가 있어 $X=E\oplus F$ 이다. $F=\ker P$ 로 두면 되고, Kadec–Snobar 정리는 그 분해의 사영 노름을 $\sqrt{\dim E}$ 이하로 맞춘다.
- 작용소의 확장. $n$ 차원 부분공간 $E\subseteq X$ 에서 Banach 공간 $Y$ 로 가는 선형사상 $T$ 는 $TP$ 로 $X$ 전체로 넓혀지고 노름이 $\sqrt n\thinspace\Vert T\Vert$ 이하다.
- 근사 이론의 최소 사영. 함수 공간에서 차원 $n$ 인 근사 공간 위로의 사영은 근사 연산자이고, 그 노름은 최선 근사와의 오차 비를 정한다. 이 정리는 노름이 $\sqrt n$ 이하인 근사 연산자가 늘 있음을 보장한다.

[^1]: M. I. Kadec, M. G. Snobar, "Some functionals over a compact Minkowski space", Mathematical Notes 10 (1971), 694–696.
[^2]: N. Tomczak-Jaegermann, *Banach–Mazur Distances and Finite-Dimensional Operator Ideals*, Longman (1989).
[^3]: H. König, D. R. Lewis, "A strict inequality for projection constants", Journal of Functional Analysis 74 (1987), 328–332.

# 연관 문서

## 선수지식

- [Banach–Mazur 거리](banach-mazur-distance.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #optimization
