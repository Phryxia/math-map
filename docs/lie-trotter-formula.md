# Lie–Trotter 곱 공식

# 개요

**Lie–Trotter 곱 공식(Lie–Trotter product formula)** 은 두 작용 $A$, $B$ 를 함께 한 결과 $e^{A+B}$ 를, 각각을 짧게 번갈아 하는 $\big(e^{A/n}e^{B/n}\big)^n$ 의 극한으로 얻는 공식이다. 행렬에서는 $AB\ne BA$ 이면 $e^{A+B}$ 와 $e^Ae^B$ 가 다르므로, 물이 흐르면서 동시에 퍼지는 것처럼 두 효과가 함께 일어나는 계를 한 효과씩 차례로 계산하면 답이 틀린다. 이 공식은 시간을 $n$ 토막으로 잘라 토막마다 두 효과를 차례로 적용하면 그 오차가 $1/n$ 에 비례해 줄어든다는 것을 보장한다.

# 직관

두 행렬을 잡는다.

$$
A=\begin{pmatrix}0&1\cr 0&0\end{pmatrix},\qquad B=\begin{pmatrix}0&0\cr 1&0\end{pmatrix}
$$

$A^2=B^2=0$ 이므로 $e^A=I+A$, $e^B=I+B$ 이고, $A+B$ 의 제곱은 $I$ 이므로 $e^{A+B}$ 의 급수가 $\cosh$ 와 $\sinh$ 로 모인다.

$$
e^Ae^B=\begin{pmatrix}2&1\cr 1&1\end{pmatrix},\qquad e^{A+B}=\begin{pmatrix}\cosh1&\sinh1\cr \sinh1&\cosh1\end{pmatrix}\approx\begin{pmatrix}1.5431&1.1752\cr 1.1752&1.5431\end{pmatrix}
$$

둘이 다르다. 이번에는 $A/n$ 과 $B/n$ 을 번갈아 $n$ 번 적용한다. 한 번 번갈아 적용하는 행렬은 다음과 같다.

$$
e^{A/n}e^{B/n}=\begin{pmatrix}1+1/n^2&1/n\cr 1/n&1\end{pmatrix}
$$

이것을 $n$ 제곱한 값은 다음과 같다.

| n     | 왼쪽 위 | 오른쪽 위 | 오른쪽 아래 |
| ----- | ------- | --------- | ----------- |
| 1     | 2.0000  | 1.0000    | 1.0000      |
| 2     | 1.8125  | 1.1250    | 1.2500      |
| 10    | 1.6012  | 1.1731    | 1.4839      |
| 100   | 1.5490  | 1.1752    | 1.5372      |

$n$ 이 커지면 $e^{A+B}$ 에 다가가고, 대각 성분의 오차가 $n=10$ 에서 약 $0.06$, $n=100$ 에서 약 $0.006$ 으로 $1/n$ 에 비례해 준다.

# 정의

## 교환자

정사각행렬 $A$, $B$ 의 **교환자(commutator)** 는 $\lbrack A,B\rbrack=AB-BA$ 다. 직관 절의 두 행렬에서 다음이 나온다.

$$
\lbrack A,B\rbrack=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}
$$

교환자가 $0$ 이면 $e^{A+B}=e^Ae^B$ 이다.

## 곱 근사

$n$ 이 양의 정수일 때 $\big(e^{tA/n}e^{tB/n}\big)^n$ 을 시간 $t$ 의 **Lie–Trotter 근사**, $\big(e^{tA/2n}e^{tB/n}e^{tA/2n}\big)^n$ 을 **Strang 분할(Strang splitting)** 이라 한다. 직관 절의 표는 $t=1$ 인 Lie–Trotter 근사다.

# 성질

## 행렬의 곱 공식

정리. 정사각행렬 $A$, $B$ 에 대해 다음이 성립한다.

$$
e^{A+B}=\lim\_{n\to\infty}\big(e^{A/n}e^{B/n}\big)^n
$$

증명의 요지. $X\_n=e^{A/n}e^{B/n}$, $Y\_n=e^{(A+B)/n}$ 으로 두면 급수를 비교해 $X\_n-Y\_n=\frac1{2n^2}\lbrack A,B\rbrack+O(n^{-3})$ 이다. 다음 항등식에서 각 항의 노름이 $e^{\Vert A\Vert+\Vert B\Vert}\Vert X\_n-Y\_n\Vert$ 이하이므로 차이가 $O(1/n)$ 이다.

$$
X\_n^n-Y\_n^n=\sum\_{k=0}^{n-1}X\_n^{k}(X\_n-Y\_n)Y\_n^{n-1-k}
$$

오차의 첫 항은 $\frac1{2n}\lbrack A,B\rbrack$ 에서 나온다. 직관 절에서 $n=10$ 의 대각 성분 오차 $+0.058$, $-0.059$ 가 $\lbrack A,B\rbrack/20$ 의 대각 성분 $\pm0.05$ 와 부호와 크기가 맞는다.

## Strang 분할의 2 차 정확도

Strang 분할은 대칭으로 쪼갠 덕에 $1/n^2$ 항의 교환자가 상쇄되어 오차가 $O(1/n^2)$ 다. 직관 절의 행렬에서 $n=10$ 인 Strang 분할의 왼쪽 위 성분은 $1.5426$ 으로 오차가 $0.0005$ 다.

## 작용소의 곱 공식

정리. [Banach 공간](banach-spaces.md)에서 $A$, $B$ 가 축약 [강연속 반군](c0-semigroups.md)의 생성원이고 $A+B$ 의 폐포가 축약 반군의 생성원이면, 모든 $x$ 와 $t\ge0$ 에서 다음이 성립한다. 이것을 Trotter 곱 공식(Trotter product formula)이라 한다[^1].

$$
e^{t\overline{(A+B)}}x=\lim\_{n\to\infty}\big(e^{tA/n}e^{tB/n}\big)^nx
$$

$A$, $B$ 가 비유계이면 위의 급수 비교를 쓸 수 없다. 증명은 Chernoff 의 정리로 $F(t)=e^{tA}e^{tB}$ 의 $t=0$ 에서의 미분이 $A+B$ 라는 것만 써서 극한을 얻는다[^2].

# 활용

- 편미분방정식의 분할 해법. Schrödinger 방정식 $iu\_t=-\Delta u+Vu$ 를 [Fourier 변환](fourier-transform.md)으로 푸는 $-\Delta$ 부분과 곱셈으로 푸는 $V$ 부분으로 나누어 번갈아 적용한다. 이것을 분할 단계 Fourier 방법(split-step Fourier method)이라 한다.
- 양자 시뮬레이션. Hamilton 작용소 $H=\sum\_jH\_j$ 의 시간 발전 $e^{-itH}$ 를 각 $H\_j$ 의 발전을 짧게 번갈아 적용하는 회로로 근사한다[^3].
- [Feynman–Kac 공식](feynman-kac.md). 열 반군 $e^{t\Delta/2}$ 와 곱셈 반군 $e^{-tV}$ 의 곱 공식에서 Schrödinger 반군 $e^{t(\Delta/2-V)}$ 를 [Brown 운동](brownian-motion.md) 경로의 적분으로 쓰는 공식이 나온다.

[^1]: H. F. Trotter, "On the product of semi-groups of operators", *Proceedings of the American Mathematical Society* 10 (1959), 545–551.
[^2]: K.-J. Engel, R. Nagel, *One-Parameter Semigroups for Linear Evolution Equations*, Graduate Texts in Mathematics 194, Springer, 2000, 3 장.
[^3]: S. Lloyd, "Universal quantum simulators", *Science* 273 (1996), 1073–1078.

# 연관 문서

## 선수지식

- [Lie 군](lie-groups.md)
- [강연속 반군](c0-semigroups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #linear_algebra #computation
