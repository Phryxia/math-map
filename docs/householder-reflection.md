# Householder 반사

# 개요

**Householder 반사(Householder reflection)** 는 원점을 지나는 초평면에 대해 벡터를 거울처럼 뒤집는 [선형사상](linear-maps.md)이고, 주어진 벡터를 좌표축 위로 보내도록 그 초평면을 고를 수 있다. 행렬 $\begin{pmatrix}3&0\cr 4&5\end{pmatrix}$ 을 길이를 보존하는 변환만으로 위삼각행렬로 바꾸려면 첫 열 $(3,4)$ 를 $x$ 축 위의 $(\pm 5,0)$ 으로 보내는 변환이 필요하다. Householder 반사는 그런 변환을 벡터 하나로 적고, 열마다 한 번씩 써서 반올림 오차를 키우지 않고 QR 분해를 만든다.

# 직관

$x=(3,4)$ 를 같은 길이의 $(-5,0)$ 으로 보내는 반사를 찾는다. 두 벡터의 차 $v=x-(-5,0)=(8,4)$ 에 수직인 직선이 거울이다. 반사는 $x$ 에서 $v$ 방향 성분을 두 번 빼는 것이다.

$$
Hx=x-2\frac{v^{\mathsf T}x}{v^{\mathsf T}v}v=(3,4)-2\cdot\frac{40}{80}(8,4)=(-5,0)
$$

같은 반사를 [행렬 분해](matrix-factorizations.md)의 예 $A=\begin{pmatrix}3&0\cr 4&5\end{pmatrix}$ 의 둘째 열 $(0,5)$ 에도 쓰면 $v^{\mathsf T}(0,5)=20$ 이므로 $(0,5)-2\cdot\frac{20}{80}(8,4)=(-4,3)$ 이다. 그래서 $HA=\begin{pmatrix}-5&-4\cr 0&3\end{pmatrix}$ 은 위삼각행렬이다. 그 문서의 Gram–Schmidt 직교화가 준 $R=\begin{pmatrix}5&4\cr 0&3\end{pmatrix}$ 과 첫 행의 부호만 다르다.

$(5,0)$ 으로 보내는 반사도 있다. 그때 $v=(3,4)-(5,0)=(-2,4)$ 이고, $x$ 의 첫 성분 $3$ 에서 비슷한 크기의 $5$ 를 빼므로 $x$ 가 $x$ 축에 가까울수록 자릿수가 사라진다. $(-5,0)$ 쪽은 $3+5$ 를 더하므로 이 문제가 없다.

# 정의

$v\in\mathbb R^n$, $v\ne 0$ 에 대해 다음 행렬을 Householder 반사라 한다.

$$
H=I-2\frac{vv^{\mathsf T}}{v^{\mathsf T}v}
$$

$v$ 를 **Householder 벡터(Householder vector)** 라 한다. $Hv=-v$ 이고 $v$ 에 수직인 $w$ 에서 $Hw=w$ 이므로, $H$ 는 $v$ 에 수직인 초평면에 대한 반사다. 직관 절의 $v=(8,4)$ 에서는 다음과 같다.

$$
H=\begin{pmatrix}-3/5&-4/5\cr -4/5&3/5\end{pmatrix}
$$

복소벡터에서는 전치를 켤레전치로 바꾼다.

$x\ne 0$ 을 $e_1$ 방향으로 보내려면

$$
v=x+\mathrm{sign}(x_1)\Vert x\Vert e_1
$$

로 잡는다. 그러면 $Hx=-\mathrm{sign}(x_1)\Vert x\Vert e_1$ 이고, 덧셈에서 같은 부호끼리 더하므로 자릿수 손실이 없다. 직관 절의 $v=(3,4)+5(1,0)=(8,4)$ 가 이 선택이다.

# 성질

## 대칭이며 직교

$H^{\mathsf T}=H$ 이고 $H^2=I$ 이므로 $H$ 는 대칭인 직교행렬이다. 고윳값은 $v$ 방향의 $-1$ 하나와 그 수직 초평면의 $1$ 이 $n-1$ 개이고, $\det H=-1$ 이다. 직관 절의 $H$ 는 대각합이 $0$, 행렬식이 $-9/25-16/25=-1$ 이다. $H$ 를 벡터에 곱하는 데는 행렬을 만들지 않고 $v$ 와의 내적 하나와 벡터 덧셈 하나면 되므로 연산이 $O(n)$ 번이다.

## Householder QR 분해

$m\times n$ 행렬 $A$ ($m\ge n$) 에서 $k$ 번째 단계는 $k$ 번째 열의 대각 아래 부분을 $0$ 으로 만드는 반사 $H_k$ 를, 앞의 $k-1$ 좌표를 건드리지 않게 골라 왼쪽에 곱한다. $n$ 단계 뒤 $H_n\cdots H_1A=R$ 이 위삼각이고 $Q=H_1\cdots H_n$ 이다[^1]. 연산량은 약 $2mn^2-\frac23n^3$ 번이다. $Q$ 를 행렬로 만들지 않고 벡터 $v_k$ 들로 저장한다.

## 안정성

Householder QR 분해는 후방 안정(backward stable)이다. 계산한 $\hat Q$, $\hat R$ 은 $\Vert\delta A\Vert\le c\thinspace u\Vert A\Vert$ 인 $A+\delta A$ 의 정확한 QR 분해이고, $u$ 는 기계 정밀도다[^1]. 계산한 $\hat Q$ 의 열들은 $A$ 의 조건수와 무관하게 기계 정밀도 규모로 직교한다. 고전 Gram–Schmidt 직교화는 직교성의 손실이 조건수의 제곱 규모까지 커질 수 있다.

## Givens 회전과의 비교

평면 하나에서만 회전하는 [Givens 회전](givens-rotation.md)은 성분 하나를 $0$ 으로 만들고, Householder 반사는 한 번에 열의 대각 아래 전체를 $0$ 으로 만든다. 조밀한 행렬에서는 반사가 연산이 적고, $0$ 으로 만들 성분이 몇 개뿐인 희소 행렬이나 Hessenberg 행렬에서는 회전이 적다.

# 활용

- [QR 알고리즘](qr-algorithm.md)의 Hessenberg 축소. $k$ 번째 열의 $(k+2)$ 행부터 아래를 반사로 $0$ 으로 만들고, 같은 반사를 오른쪽에서도 곱해 닮음을 유지한다. $n-2$ 번이면 위 Hessenberg 꼴이 된다. 대칭행렬에서는 삼중대각 꼴이다.
- 최소제곱 문제. $\Vert Ax-b\Vert$ 를 최소화하는 $x$ 는 $Q^{\mathsf T}b$ 를 반사들로 계산하고 $Rx=(Q^{\mathsf T}b)\_{1:n}$ 을 푼 것이다. 정규방정식 $A^{\mathsf T}Ax=A^{\mathsf T}b$ 와 달리 조건수가 제곱되지 않는다.
- [특이값 분해](singular-value-decomposition.md)의 계산. 왼쪽과 오른쪽에서 반사를 번갈아 곱하는 [Golub–Kahan 이중대각화](golub-kahan-bidiagonalization.md)로 행렬을 이중대각 꼴로 바꾼 뒤 특이값을 구한다.

[^1]: Lloyd N. Trefethen, David Bau III, *Numerical Linear Algebra*, SIAM, 1997, 10 강, 16 강, 26 강. Householder 삼각화, 연산량, 후방 안정성, Hessenberg 축소가 있다.

# 연관 문서

## 선수지식

- [행렬 분해](matrix-factorizations.md)

## 더 알아보기

- [Golub–Kahan 이중대각화](golub-kahan-bidiagonalization.md)

#linear_algebra #algorithms #computation
