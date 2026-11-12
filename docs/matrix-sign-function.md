# 행렬 부호 함수

# 개요

**행렬 부호 함수(matrix sign function)** 는 정사각행렬의 고윳값 가운데 실수부가 양수인 것은 $1$ 로, 음수인 것은 $-1$ 로 바꾸고 고유벡터는 그대로 둔 [행렬](matrices.md)을 주는 함수다. 행렬의 고윳값이 왼쪽 반평면과 오른쪽 반평면에 나뉘어 있을 때, 왼쪽 고윳값들의 고유벡터가 생성하는 공간을 고유벡터를 하나씩 구하지 않고 얻고 싶은 경우가 있다. 부호 함수 $S$ 를 알면 $(I-S)/2$ 가 그 공간으로 가는 사영이고, $S$ 는 수 $x$ 를 $(x+1/x)/2$ 로 바꾸는 반복을 행렬에 그대로 써서 계산한다.

# 직관

수 $x\ne 0$ 에서 $x\mapsto(x+1/x)/2$ 를 되풀이하면 $x\gt 0$ 일 때 $1$ 로, $x\lt 0$ 일 때 $-1$ 로 간다. $3$ 에서 시작하면 다음이 나온다.

$$
3,\quad 1.6667,\quad 1.1333,\quad 1.00784,\quad 1.0000305
$$

이 반복은 $x^2-1=0$ 에 대한 [Newton 법](newton-method.md)이라, $1$ 근처에서 맞는 자릿수가 걸음마다 두 배가 된다.

[대수 Riccati 방정식](algebraic-riccati-equation.md) 문서의 행렬 $H$ 에 같은 반복을 쓴다. $H$ 는 고윳값이 $\pm\sqrt2$ 이고 $H^2=2I$ 다.

$$
H=\begin{pmatrix}1&-1\cr -1&-1\end{pmatrix}
$$

$X_0=H$ 로 두면 $X_k=c_kH$ 꼴이 유지되고, $H^{-1}=H/2$ 이므로 $c\_{k+1}=\bigl(c_k+1/(2c_k)\bigr)/2$ 다. $c_k$ 는 $1,\ 0.75,\ 0.70833,\ 0.707108$ 로 $1/\sqrt2$ 에 간다. 극한 $S=H/\sqrt2$ 는 $S^2=I$ 이고, 고윳값 $\sqrt2$ 의 고유벡터에서는 $1$ 배, $-\sqrt2$ 의 고유벡터에서는 $-1$ 배다. $(I-S)/2$ 의 첫 열은 $(0.1464,\thinspace 0.3536)$ 이고, 둘째 성분을 첫째 성분으로 나누면 대수 Riccati 방정식의 안정화 해 $1+\sqrt2\approx 2.4142$ 가 나온다.

# 정의

$A$ 는 허수축 위에 [고윳값](eigenvalues.md)이 없는 $n\times n$ 복소행렬이다. [Jordan 표준형](jordan-canonical-form.md)으로 다음과 같이 쓴다.

$$
A=Z\begin{pmatrix}J\_-&0\cr 0&J\_+\end{pmatrix}Z^{-1}
$$

여기서 $J\_-$ 는 실수부가 음수인 고윳값의 Jordan 블록들이고 $J\_+$ 는 실수부가 양수인 것들이다. 이때 다음 행렬을 $A$ 의 **부호 함수** 라 한다.[^1]

$$
\mathrm{sign}(A)=Z\begin{pmatrix}-I&0\cr 0&I\end{pmatrix}Z^{-1}
$$

$A$ 가 대각화가능하면 고유벡터 기저에서 고윳값 $\lambda$ 를 $\mathrm{Re}\thinspace\lambda$ 의 부호로 바꾼 것이다. 직관 절의 $H$ 에서는 $\mathrm{sign}(H)=H/\sqrt2$ 다.

# 성질

## 대수적 성질

$S=\mathrm{sign}(A)$ 로 쓰면 다음이 성립한다.[^1]

- $S^2=I$ 이고 $SA=AS$ 다.
- $P\_-=(I-S)/2$ 와 $P\_+=(I+S)/2$ 는 사영이고 $P\_-+P\_+=I$ 다. $P\_-$ 의 치역은 실수부가 음수인 고윳값의 일반화 고유공간들의 합이고, $P\_+$ 의 치역은 양수인 것들의 합이다.
- $S=A(A^2)^{-1/2}$ 이다. 여기서 $(A^2)^{-1/2}$ 는 고윳값의 실수부가 양수인 $A^2$ 의 역제곱근이다.

## Newton 반복

$X_0=A$ 에서 다음을 되풀이하면 $X_k$ 가 $\mathrm{sign}(A)$ 로 이차 수렴한다.[^1]

$$
X\_{k+1}=\frac12\bigl(X_k+X_k^{-1}\bigr)
$$

$X_k$ 는 $A$ 의 유리함수라 $A$ 와 같은 Jordan 기저에서 블록 위삼각이고, 고윳값마다 직관 절의 수 반복이 일어난다. 실수부가 양수인 $\lambda$ 에서 시작한 수 반복은 $1$ 로, 음수인 것은 $-1$ 로 간다. 수렴이 느린 첫 걸음을 줄이려면 $X_k$ 에 $\vert\det X_k\vert^{-1/n}$ 을 곱해 고윳값의 크기를 $1$ 근처로 모은 뒤 반복한다.

## Sylvester 방정식의 해

$A$ 와 $B$ 의 고윳값의 실수부가 모두 양수이고 $X$ 가 $AX+XB=C$ 의 해이면, 다음이 성립한다.[^2]

$$
\mathrm{sign}\begin{pmatrix}A&-C\cr 0&-B\end{pmatrix}=\begin{pmatrix}I&-2X\cr 0&-I\end{pmatrix}
$$

$T=\begin{pmatrix}I&X\cr 0&I\end{pmatrix}$ 로 닮음 변환하면 왼쪽 행렬이 블록 대각 꼴 $\mathrm{diag}(A,-B)$ 가 되고, 그 부호 함수는 $\mathrm{diag}(I,-I)$ 다. $T$ 로 되돌리면 오른쪽 위 블록이 $-2X$ 다. [Sylvester 방정식](sylvester-equation.md) 문서의 블록 떼어 내기 계산이 이 닮음 변환이다.

# 활용

- 대수 Riccati 방정식. Hamilton 행렬 $H$ 의 $P\_-=(I-\mathrm{sign}(H))/2$ 의 열공간이 안정화 해의 불변 부분공간이다. 열공간의 기저를 위아래 $n$ 행씩 $U_1$, $U_2$ 로 나누어 $X=U_2U_1^{-1}$ 을 얻는다.[^2]
- 스펙트럼 분할. 고윳값을 직선 $\mathrm{Re}\thinspace\lambda=c$ 의 양쪽으로 나누는 불변 부분공간을 $\mathrm{sign}(A-cI)$ 로 얻고, 이것을 되풀이해 고윳값 문제를 작은 문제로 쪼갠다.
- 행렬 곱셈과 역행렬만 쓰므로, 같은 크기의 [Schur 분해](schur-decomposition.md)보다 병렬 계산에 맞는다.

[^1]: N. J. Higham, *Functions of Matrices: Theory and Computation*, SIAM (2008), 5 장. 정의, 성질, Newton 반복과 행렬식 척도 조정.
[^2]: J. D. Roberts, "Linear model reduction and solution of the algebraic Riccati equation by use of the sign function", *International Journal of Control* 32 (1980), 677–687. 1971 년 Cambridge 대학 보고서의 재수록이다.

# 연관 문서

## 선수지식

- [Sylvester 방정식](sylvester-equation.md)
- [Newton 법](newton-method.md)

## 더 알아보기

- [행렬 제곱근](matrix-square-root.md)

#linear_algebra #algorithms #analysis
