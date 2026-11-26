# 쌍원판의 Pick 보간

# 개요

**쌍원판의 Pick 보간(Pick interpolation on the bidisk)** 은 두 복소 변수의 정칙함수 가운데 쌍원판 전체에서 절댓값이 $1$ 이하이고 몇 점에서 정해진 값을 갖는 것이 있는지 묻는 문제다. 원점에서 $0$ 이고 점 $(1/2,1/4)$ 에서 $w$ 인 함수를 찾으면, 한 변수의 Pick 행렬 하나로는 $w$ 가 어디까지 허용되는지 가를 수 없다.

Agler 정리는 Pick 행렬을 변수마다 하나씩 두 조각으로 나눌 수 있는지로 답을 가른다. 이 예에서는 $\vert w\vert\le 1/2$ 일 때 나눌 수 있고 그때 해가 있다.

# 직관

두 좌표의 절댓값이 모두 $1$ 보다 작은 점 $(z\_1,z\_2)$ 의 집합을 쌍원판 $\mathbb D^2$ 이라 한다. $\mathbb D^2$ 에서 $\vert f\vert\le 1$ 이고 $f(0,0)=0$, $f(1/2,1/4)=w$ 인 정칙함수 $f$ 를 찾는다. $f=z\_1$ 이면 $w=1/2$, $f=z\_2$ 이면 $w=1/4$ 이다.

$\vert w\vert$ 는 $1/2$ 을 넘을 수 없다. 원판에서 쌍원판으로 가는 $\lambda\mapsto(\lambda,\lambda/2)$ 를 $f$ 에 넣은 $g(\lambda)=f(\lambda,\lambda/2)$ 는 원판에서 $\vert g\vert\le 1$, $g(0)=0$ 이므로 [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)에서 $\vert g(1/2)\vert\le 1/2$ 이다. $g(1/2)=f(1/2,1/4)=w$ 이다.

한 변수의 [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)에서는 행렬 $\lbrack(1-w\_i\bar w\_j)/(1-z\_i\bar z\_j)\rbrack$ 하나가 양의 준정부호인지로 이것을 판정했다. 두 변수에서는 분모가 좌표마다 하나씩 둘이다. 그래서 분모를 곱해 올린 꼴로 왼쪽 행렬을 두 좌표의 몫으로 나눈다.

$$
\begin{pmatrix}1&1\cr 1&1-\vert w\vert^2\end{pmatrix}=s\begin{pmatrix}1&1\cr 1&\frac34\end{pmatrix}+(1-s)\begin{pmatrix}1&1\cr 1&\frac{15}{16}\end{pmatrix}
$$

$\frac34=1-\vert 1/2\vert^2$ 은 첫 좌표의 몫, $\frac{15}{16}=1-\vert 1/4\vert^2$ 은 둘째 좌표의 몫이다. $s=1$ 이면 $\vert w\vert=1/2$ 이고 $s=0$ 이면 $\vert w\vert=1/4$ 이며, $s$ 가 그 사이를 움직이면 $\vert w\vert^2=s/4+(1-s)/16$ 이 $1/16$ 과 $1/4$ 사이를 모두 지난다.

# 정의

## Schur 류

쌍원판 $\mathbb D^2$ 에서 정칙이고 $\sup\vert f\vert\le 1$ 인 함수 전체를 쌍원판의 **Schur 류(Schur class)** 라 한다. 직관 절의 $z\_1$, $z\_2$, $(z\_1+z\_2)/2$ 가 Schur 류에 든다.

## 보간 문제

$\mathbb D^2$ 의 서로 다른 점 $\lambda\_i=(\alpha\_i,\beta\_i)$ 와 원판의 값 $w\_i$ 가 $i=1,\dots,n$ 에 대해 주어졌을 때, $f(\lambda\_i)=w\_i$ 인 Schur 류의 $f$ 를 찾는 문제가 쌍원판의 Pick 보간이다. 직관 절은 $\lambda\_1=(0,0)$, $\lambda\_2=(1/2,1/4)$, $w\_1=0$, $w\_2=w$ 인 경우다.

## Agler 분해

두 $n\times n$ 행렬 $X$, $Y$ 의 성분끼리의 곱 $\lbrack X\_{ij}Y\_{ij}\rbrack$ 를 $X\circ Y$ 로 쓴다. 보간 자료의 **Agler 분해(Agler decomposition)** 는 다음을 만족하는 양의 준정부호 행렬 $\Gamma\_1$, $\Gamma\_2$ 다.

$$
\lbrack 1-w\_i\bar w\_j\rbrack=\lbrack 1-\alpha\_i\bar\alpha\_j\rbrack\circ\Gamma\_1+\lbrack 1-\beta\_i\bar\beta\_j\rbrack\circ\Gamma\_2
$$

직관 절의 등식은 $\Gamma\_1=sJ$, $\Gamma\_2=(1-s)J$ 인 Agler 분해다. $J$ 는 성분이 모두 $1$ 인 $2\times 2$ 행렬이고 $0\le s\le 1$ 이면 양의 준정부호다.

# 성질

## Agler 정리

**정리(Agler).** 쌍원판의 Pick 보간 문제에 해가 있을 필요충분조건은 자료가 Agler 분해를 갖는 것이다[^1][^2].

직관 절에서 $\vert w\vert^2\lt 1/16$ 이면 $\Gamma\_1=sJ$ 대신 $(2,2)$ 성분에 양수를 더한 $\Gamma\_1$ 을 잡아 분해를 만든다. 거꾸로 분해가 있으면 $\vert w\vert^2\le 1/4$ 이다. $\Gamma\_k$ 의 성분을 $a\_k$, $b\_k$, $c\_k$ 로 쓰면 $(1,1)$ 과 $(1,2)$ 성분에서 $a\_1+a\_2=1$, $b\_1+b\_2=1$ 이고, 양의 준정부호에서 $c\_k\ge\vert b\_k\vert^2/a\_k$ 다. $(2,2)$ 성분에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓰면 다음이 나온다.

$$
1-\vert w\vert^2=\tfrac34c\_1+\tfrac{15}{16}c\_2\ge\tfrac34\Bigl(\frac{\vert b\_1\vert^2}{a\_1}+\frac{\vert b\_2\vert^2}{a\_2}\Bigr)\ge\tfrac34\cdot\frac{(\vert b\_1\vert+\vert b\_2\vert)^2}{a\_1+a\_2}\ge\tfrac34
$$

결론 $\vert w\vert\le 1/2$ 은 직관 절의 Schwarz–Pick 판정과 같다.

## 숨은 등거리로 하는 충분성의 증명

충분성은 숨은 등거리(lurking isometry) 논법으로 증명한다.

$\Gamma\_1$, $\Gamma\_2$ 를 Gram 행렬로 쓴다. $(\Gamma\_1)\_{ij}=\langle u\_j,u\_i\rangle$, $(\Gamma\_2)\_{ij}=\langle v\_j,v\_i\rangle$ 인 벡터를 잡고 $x\_j=u\_j\oplus v\_j$, $E\_\lambda=\alpha P\_1+\beta P\_2$ 로 둔다. $P\_1$, $P\_2$ 는 두 성분으로의 사영이다. Agler 분해를 옮겨 적으면 다음이 된다.

$$
1+\langle E\_{\lambda\_j}x\_j,E\_{\lambda\_i}x\_i\rangle=w\_i\bar w\_j+\langle x\_j,x\_i\rangle
$$

그래서 $(1,E\_{\lambda\_j}x\_j)\mapsto(w\_j,x\_j)$ 는 내적을 보존하고, 다음 꼴의 유니터리 $U$ 로 늘릴 수 있다.

$$
U=\begin{pmatrix}A&B\cr C&D\end{pmatrix}
$$

이 $U$ 로 다음 함수를 만든다.

$$
f(z)=A+BE\_z(I-DE\_z)^{-1}C
$$

$U$ 의 둘째 행에서 $x\_j=(I-DE\_{\lambda\_j})^{-1}C$ 이고 첫째 행에서 $f(\lambda\_j)=w\_j$ 다. $U$ 가 유니터리이고 $\Vert E\_z\Vert\lt 1$ 이므로 $1-\vert f(z)\vert^2\ge 0$ 이 같은 계산으로 나온다. 이 꼴의 $f$ 를 **전달함수 실현(transfer function realization)** 이라 한다.

## 필요성과 Andô 정리

필요성은 Schur 류의 모든 $f$ 가 다음 꼴의 분해를 갖는다는 정리에서 나온다[^1].

$$
1-f(z)\overline{f(\zeta)}=(1-z\_1\bar\zeta\_1)K\_1(z,\zeta)+(1-z\_2\bar\zeta\_2)K\_2(z,\zeta)
$$

여기서 $K\_1$, $K\_2$ 는 쌍원판 위의 양의 준정부호 핵이다. 점 $\lambda\_i$ 에서 $K\_1$, $K\_2$ 의 값을 모으면 $\Gamma\_1$, $\Gamma\_2$ 다. 이 분해의 존재는 [von Neumann 부등식](von-neumann-inequality.md)의 Andô 정리(Andô's theorem), 곧 서로 교환하는 축약 두 개 $T\_1$, $T\_2$ 에 $\Vert f(T\_1,T\_2)\Vert\le\sup\vert f\vert$ 가 성립한다는 것과 볼록 원뿔의 분리로 증명한다.

## 두 점 문제

$d(a,b)=\vert a-b\vert/\vert 1-\bar ab\vert$ 로 쓴다. 두 점의 문제는 다음일 때 해가 있다.

$$
d(w\_1,w\_2)\le\max\lbrace d(\alpha\_1,\alpha\_2),\thinspace d(\beta\_1,\beta\_2)\rbrace
$$

필요성은 직관 절처럼 두 점을 지나는 원판의 사상을 넣어 Schwarz–Pick 보조정리를 쓰는 것이고, 충분성은 큰 쪽 좌표 하나만의 함수로 한 변수 문제를 푸는 것이다. 직관 절에서는 $d(0,1/2)=1/2$, $d(0,1/4)=1/4$ 이다.

## 세 변수 이상

$\mathbb D^3$ 에서는 같은 꼴로 핵 셋을 둔 분해가 해의 존재를 보장한다. 그러나 서로 교환하는 축약 셋에서 von Neumann 부등식이 깨지므로, $\mathbb D^3$ 에서 절댓값이 $1$ 이하인 다항식 가운데 이 분해를 갖지 않는 것이 있다[^3]. 그래서 $\mathbb D^3$ 에서 이 조건은 충분조건이지만 필요조건은 아니다.

# 활용

- 다차원 시스템. 전달함수 실현의 $E\_z=z\_1P\_1+z\_2P\_2$ 는 두 변수 이산 시스템(Givone–Roesser 모형)의 상태 갱신이고, Agler 정리는 그 시스템의 전달함수가 쌍원판의 Schur 류에 드는 조건을 준다.
- 구조 불확실성. 블록 대각 $E\_z$ 를 되먹임으로 넣는 꼴은 [구조 특이값](structured-singular-value.md)이 다루는 선형 분수 변환과 같다.
- 해의 유일성. Agler 와 McCarthy 는 해가 하나뿐인 문제에서 해가 유일하게 정해지는 집합이 구별된 다양체(distinguished variety), 곧 경계 원환면 $\lbrace\vert z\_1\vert=\vert z\_2\vert=1\rbrace$ 으로만 쌍원판을 나가는 대수 곡선을 포함한다는 것을 이 분해로 보였다[^4].

[^1]: J. Agler, "Some interpolation theorems of Nevanlinna–Pick type", preprint, 1988.
[^2]: J. Agler, J. E. McCarthy, "Nevanlinna–Pick interpolation on the bidisk", Journal für die reine und angewandte Mathematik 506 (1999), 191–204.
[^3]: J. Agler, J. E. McCarthy, Pick Interpolation and Hilbert Function Spaces, American Mathematical Society, 2002, 11 장.
[^4]: J. Agler, J. E. McCarthy, "Distinguished varieties", Acta Mathematica 194 (2005), 133–153.

# 연관 문서

## 선수지식

- [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)
- [von Neumann 부등식](von-neumann-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #complex_analysis #linear_algebra
