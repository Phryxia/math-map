# Roth 불일치도 하한

# 개요

**Roth 불일치도 하한(Roth's discrepancy lower bound)** 은 정사각형 안에 점 $N$ 개를 어떻게 놓아도, 원점에 붙은 직사각형에 든 점의 비율과 넓이의 차가 평균적으로 $\sqrt{\log N}/N$ 의 상수배보다 작아질 수 없다는 정리다. 직선 위에서는 점 $N$ 개를 $1/(2N),3/(2N),\dots$ 에 놓으면 구간마다 비율과 길이의 차가 $1/(2N)$ 이하이고, 적분 오차도 $1/N$ 의 차수로 준다. 정사각형에 점을 놓을 때도 이렇게 $1/N$ 까지 줄일 수 있는지가 [Koksma–Hlawka 부등식](koksma-hlawka-inequality.md)으로 하는 적분에서 정해야 할 물음이다. 이 정리는 로그 인수가 피할 수 없다는 답을 준다.

# 직관

$4\times 4$ 격자의 칸 가운데에 점 $16$ 개를 놓는다. 가로 $\lbrack 0,1)$, 세로 $\lbrack 0,1/8)$ 인 직사각형은 넓이가 $1/8$ 이라 점 $2$ 개가 들어야 하지만, 칸 가운데의 세로 좌표가 $1/8$ 이라 하나도 들지 않는다. 비율과 넓이의 차가 $1/8$ 로, 점 하나가 맡은 칸의 넓이 $1/16$ 보다 크다.

격자는 가로 좌표가 네 가지뿐이라 가늘고 긴 직사각형에서 틀린다. [Sobol 수열](sobol-sequences.md)의 점은 넓이 $1/N$ 인 여러 모양의 칸에 하나씩 들어 이 문제를 줄이지만, 칸 모양이 $\log\_2N+1$ 가지라 모양마다 남는 작은 차가 쌓인다. Roth 는 모양마다 하나씩 시험 함수를 만들고 그 함수들이 서로 직교한다는 것을 써서, 모양마다의 차가 서로 지워지지 않고 제곱으로 쌓인다는 것을 보였다.

# 정의

$\lbrack 0,1)^2$ 의 점 $p\_1,\dots,p\_N$ 과 $x\in\lbrack 0,1\rbrack^2$ 에 대해 원점에 붙은 직사각형 $\lbrack 0,x)=\lbrack 0,x\_1)\times\lbrack 0,x\_2)$ 에 든 점의 수를 $A(x)$ 라 한다. **불일치 함수(discrepancy function)** 는 다음이다.

$$
D(x)=A(x)-Nx\_1x\_2
$$

Koksma–Hlawka 부등식 문서의 별 불일치도는 $D\_N^\ast=\sup\_x\vert D(x)\vert/N$ 이다. 제곱 평균으로 잰 값을 **L² 불일치도(L² discrepancy)** 라 한다.

$$
\Vert D\Vert\_2=\left(\int\_{\lbrack 0,1\rbrack^2}D(x)^2\thinspace dx\right)^{1/2}
$$

직관 절의 격자에서 $x=(1,1/8)$ 이면 $A=0$ 이고 $D=-2$ 다.

# 성질

## Roth 정리

$\lbrack 0,1)^2$ 의 어떤 점 $N$ 개에 대해서도 다음이 성립한다. $c\gt 0$ 은 $N$ 과 점에 달리지 않는 상수다[^1].

$$
\Vert D\Vert\_2\ge c\sqrt{\log N}
$$

$\vert D\vert$ 의 최댓값은 제곱 평균 이상이므로 $D\_N^\ast\ge c\sqrt{\log N}/N$ 이다. $\lbrack 0,1)^d$ 에서는 같은 방법으로 $\Vert D\Vert\_2\ge c\_d(\log N)^{(d-1)/2}$ 이다.

## Roth 정리의 증명

$2N\le 2^n\lt 4N$ 인 $n$ 을 잡는다. $j=0,1,\dots,n$ 마다 정사각형을 가로 $2^{-j}$, 세로 $2^{-(n-j)}$ 인 직사각형 $2^n$ 개로 나눈다. 직사각형 $R$ 을 네 등분해 왼쪽 아래와 오른쪽 위에서 $1$, 나머지에서 $-1$ 인 함수를 $r\_R$ 이라 한다.

점이 하나도 들지 않은 $R$ 위에서 $A$ 는 가로 좌표만의 함수와 세로 좌표만의 함수의 합이고, 이런 함수는 $r\_R$ 과 직교한다. 그래서 $R$ 의 가로 길이를 $a$, 세로 길이를 $b$ 라 하면 다음이 나온다.

$$
\int\_RD\thinspace r\_R=-N\int\_Rx\_1x\_2\thinspace r\_R=-N\frac{a^2}{4}\cdot\frac{b^2}{4}=-\frac{N\vert R\vert^2}{16}
$$

$j$ 마다 점이 든 직사각형은 $N$ 개 이하이므로 빈 직사각형이 $2^{n-1}$ 개 이상이다. 빈 $R$ 에 대해 $-r\_R$ 을 더한 함수를 $f\_j$ 라 하면 $\int Df\_j\ge 2^{n-1}N2^{-2n}/16\ge 1/128$ 이다. $j$ 가 다른 $r\_R$ 들은 가로 방향의 나눔 단계가 달라 서로 직교하므로, $F=\sum\_jf\_j$ 는 $\Vert F\Vert\_2^2\le n+1$ 이다. [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 다음이 나온다.

$$
\Vert D\Vert\_2\ge\frac{\int DF}{\Vert F\Vert\_2}\ge\frac{(n+1)/128}{\sqrt{n+1}}=\frac{\sqrt{n+1}}{128}
$$

$r\_R$ 는 [웨이블릿 변환](wavelet-transform.md) 문서의 Haar 웨이블릿을 두 좌표에서 곱한 것이다.

## 하한의 정확성

$d=2$ 의 L² 하한 $\sqrt{\log N}$ 은 차수가 정확하다. Davenport 는 $\Vert D\Vert\_2$ 가 $\sqrt{\log N}$ 의 상수배 이하인 점 $N$ 개를 만들었다[^2].

최댓값으로 재면 하한이 더 크다. $d=2$ 의 어떤 점 $N$ 개에서도 $D\_N^\ast\ge c\log N/N$ 이고, 이것은 Schmidt 정리(Schmidt's theorem)다[^3]. Sobol 수열의 그물이 이 차수에 닿으므로 이것도 정확하다.

## 수열과 점 집합

$\lbrack 0,1)$ 의 수열 $x\_1,x\_2,\dots$ 의 처음 $M$ 항의 별 불일치도를 $M\le N$ 에서 모두 보면, 정사각형의 점 $(x\_n,n/N)$, $n=1,\dots,N$ 의 별 불일치도를 위아래로 누를 수 있다. 그래서 Schmidt 정리에서 어떤 수열도 무한히 많은 $N$ 에서 $D\_N^\ast\ge c\log N/N$ 이라는 것이 나온다[^3]. van der Corput 수열이 이 차수를 가지므로 수열로는 $\log N/N$ 보다 줄일 수 없다.

# 활용

- 준몬테카를로 적분의 한계. Koksma–Hlawka 부등식의 오차 상한에서 로그 인수를 없앨 수 있는 점 배치는 없다. 점을 고르게 놓는 방법의 좋고 나쁨은 이 하한과의 차이로 비교한다.
- 수열의 등분포 속도. [등분포](equidistribution.md)인 수열의 불일치도가 $1/N$ 보다 느리게 줄 수밖에 없다는 것을 보인다.
- 조화해석의 방법. 직교하는 시험 함수를 모양마다 하나씩 세워 차를 제곱으로 쌓는 Roth 의 논법은, 고차원에서 하한의 지수를 키우는 작은 공 부등식(small ball inequality)의 연구로 이어졌다[^4].

[^1]: K. F. Roth, "On irregularities of distribution", Mathematika 1 (1954), 73–79.

[^2]: H. Davenport, "Note on irregularities of distribution", Mathematika 3 (1956), 131–135.

[^3]: W. M. Schmidt, "Irregularities of distribution VII", Acta Arithmetica 21 (1972), 45–50.

[^4]: D. Bilyk, M. Lacey, A. Vagharshakyan, "On the small ball inequality in all dimensions", Journal of Functional Analysis 254 (2008), 2470–2502.

# 연관 문서

## 선수지식

- [Koksma–Hlawka 부등식](koksma-hlawka-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #combinatorics
