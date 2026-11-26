# Routh–Hurwitz 판정법

# 개요

**Routh–Hurwitz 판정법(Routh–Hurwitz stability criterion)** 은 실계수 다항식의 근이 모두 복소평면의 왼쪽 반평면에 있는지를 근을 구하지 않고 계수의 사칙연산만으로 판정하는 방법이다. 되먹임 고리의 특성방정식이 이득 $k$ 를 계수에 담은 [삼차방정식](cubic-equation.md)이면, 어떤 $k$ 에서 실부가 양수인 근이 생기는지 알려고 $k$ 마다 방정식을 풀거나 그림을 그려야 한다.

Routh–Hurwitz 판정법은 계수로 만든 표의 첫 열의 부호만 보고, 첫 열이 $k$ 의 일차식으로 나오므로 안정한 $k$ 의 범위가 부등식 두 개로 나온다.

# 직관

근이 모두 왼쪽 반평면에 있으면 다항식은 $s+r$ 과 $s^2+bs+c$ 꼴($r,b,c\gt 0$) 인수의 곱이라 계수가 모두 양수다. 그러나 거꾸로는 성립하지 않는다. [Nyquist 판정법](nyquist-criterion.md) 문서의 특성다항식 $(s+1)^3+k$ 는 $k=27$ 에서 계수가 $1,3,3,28$ 로 모두 양수인데 근 $0.5\pm 2.6i$ 가 오른쪽 반평면에 있다.

계수를 두 줄로 번갈아 적고, 아래 줄을 만들 때마다 바로 위 두 줄로 $2\times 2$ 행렬식을 계산한다.

| 차수 | 첫째 칸 | 둘째 칸 |
| --- | --- | --- |
| 3 | 1 | 3 |
| 2 | 3 | 1+k |
| 1 | (8−k)/3 | 0 |
| 0 | 1+k | |

셋째 줄의 첫째 칸은 $(3\cdot 3-1\cdot(1+k))/3$ 이다. 첫째 칸이 모두 양수인 것은 $-1\lt k\lt 8$ 이다. $k=27$ 이면 첫째 칸이 $1,3,-19/3,28$ 이라 부호가 두 번 바뀌고, 오른쪽 반평면의 근도 두 개다.

# 정의

## Hurwitz 안정

실계수 다항식의 근이 모두 실부가 음수이면 **Hurwitz 안정(Hurwitz stable)** 이라 한다. 선형 [상미분방정식](ordinary-differential-equations.md) $\dot x=Ax$ 의 해가 모두 $0$ 으로 가는 것은 $A$ 의 특성다항식이 Hurwitz 안정인 것이다.

## Routh 표

다항식을 다음처럼 쓴다.

$$
p(s)=a\_0s^n+a\_1s^{n-1}+\dots+a\_n,\qquad a\_0\gt 0
$$

첫 두 줄을 $(a\_0,a\_2,a\_4,\dots)$ 와 $(a\_1,a\_3,a\_5,\dots)$ 로 두고, 위의 두 줄 $(r\_1,r\_2,\dots)$ 와 $(t\_1,t\_2,\dots)$ 에서 다음 줄을 다음 식으로 만든다.

$$
\Bigl(\frac{t\_1r\_2-r\_1t\_2}{t\_1},\thinspace\frac{t\_1r\_3-r\_1t\_3}{t\_1},\thinspace\dots\Bigr)
$$

줄이 $n+1$ 개가 될 때까지 되풀이한 표를 **Routh 표(Routh array)** 라 한다. 직관 절의 표가 $n=3$ 인 경우다.

## Hurwitz 행렬

$n\times n$ 행렬 $H$ 의 $(i,j)$ 성분을 $a\_{2j-i}$ 로 두고, 첨자가 $0$ 부터 $n$ 사이가 아니면 $0$ 으로 둔 것을 **Hurwitz 행렬(Hurwitz matrix)** 이라 한다. 왼쪽 위 $k\times k$ 소행렬식 $\Delta\_k$ 를 Hurwitz 행렬식이라 한다. 직관 절의 다항식에서 다음이 나온다.

$$
\Delta\_1=3,\qquad\Delta\_2=\det\begin{pmatrix}3&1+k\cr 1&3\end{pmatrix}=8-k,\qquad\Delta\_3=(1+k)(8-k)
$$

# 성질

## Routh–Hurwitz 판정법

$a\_0\gt 0$ 일 때 다음 셋은 동치다[^1][^2].

- $p$ 가 Hurwitz 안정이다.
- Routh 표의 첫째 칸이 모두 양수다.
- Hurwitz 행렬식 $\Delta\_1,\dots,\Delta\_n$ 이 모두 양수다.

첫째 칸에 $0$ 이 없으면 첫째 칸의 부호가 바뀌는 횟수가 오른쪽 반평면의 근의 개수다. Routh 표의 첫째 칸은 위에서부터 $a\_0,\Delta\_1,\Delta\_2/\Delta\_1,\dots,\Delta\_n/\Delta\_{n-1}$ 이므로 둘째와 셋째 조건이 같다.

증명의 요지. $a\_1,a\_3,\dots$ 이 붙은 항의 합을 $g(s)$ 라 하자. $a\_1\gt 0$ 일 때 $p$ 에서 $(a\_0/a\_1)\thinspace s\thinspace g(s)$ 를 빼면 차수가 $n-1$ 인 다항식 $p\_1$ 이 나오고, Routh 표에서 $p\_1$ 의 표는 $p$ 의 표에서 첫 줄을 뺀 것이다. $p$ 가 Hurwitz 안정인 것은 $p\_1$ 이 Hurwitz 안정인 것과 동치다[^3]. 이것은 허수축 위에서 $p(i\omega)$ 의 편각이 $\omega$ 가 $-\infty$ 에서 $\infty$ 로 가는 동안 $n\pi$ 만큼 늘어나는 것을 [Sturm 정리](sturm-theorem.md)의 부호 변화로 세는 것과 같다.

## 2차와 3차

$n=2$ 이면 계수가 모두 양수인 것만으로 충분하다. $n=3$ 이면 $a\_0,a\_1,a\_2,a\_3\gt 0$ 에 $a\_1a\_2\gt a\_0a\_3$ 이 더해진다. 직관 절의 조건 $9\gt 1+k$ 가 이것이다.

## Liénard–Chipart 판정법

계수가 모두 양수이면 Hurwitz 행렬식의 절반만 보아도 된다. $a\_i\gt 0$ 이고 $\Delta\_{n-1},\Delta\_{n-3},\dots$ 가 양수이면 Hurwitz 안정이다. 이것을 Liénard–Chipart 판정법(Liénard–Chipart criterion)이라 한다[^3].

# 활용

- 이득의 안정 범위. 특성다항식의 계수가 이득의 일차식이면 Routh 표의 첫째 칸이 이득의 유리함수가 되어, 안정한 이득의 범위가 부등식으로 나온다. Nyquist 판정법의 선도에서 읽은 경계 $k=8$ 과 같은 값이 나온다.
- 평형점의 선형화. 비선형 계의 평형점에서 Jacobi 행렬의 특성다항식이 Hurwitz 안정이면 [Lyapunov 안정성](lyapunov-stability.md)의 선형화 정리로 평형점이 점근 안정이다. 화학 반응과 생태 모형에서 매개변수 범위를 정할 때 쓴다.
- 이산시간 계. 단위원 안에 근이 있는지는 $z=(1+s)/(1-s)$ 로 바꾼 다항식에 이 판정법을 쓰거나, 같은 꼴의 [Jury 판정법](jury-criterion.md)을 쓴다.

[^1]: E. J. Routh, *A Treatise on the Stability of a Given State of Motion*, Macmillan, 1877.
[^2]: A. Hurwitz, "Über die Bedingungen, unter welchen eine Gleichung nur Wurzeln mit negativen reellen Theilen besitzt", *Mathematische Annalen* 46 (1895), 273–284.
[^3]: F. R. Gantmacher, *The Theory of Matrices*, Vol. 2, Chelsea, 1959, 15 장.

# 연관 문서

## 선수지식

- [Sturm 정리](sturm-theorem.md)
- [Nyquist 판정법](nyquist-criterion.md)

## 더 알아보기

- [Jury 판정법](jury-criterion.md)
- [Hermite–Biehler 정리](hermite-biehler-theorem.md)
- [Kharitonov 정리](kharitonov-theorem.md)

#complex_analysis #optimization #algebra
