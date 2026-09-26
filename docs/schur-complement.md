# Schur 보수

# 개요

블록으로 나뉜 선형계에서 한 블록의 미지수를 먼저 소거하면 남은 미지수만의 더 작은 계가 나온다. 그 계의 행렬이 Schur 보수다.

소거는 [행렬 분해](matrix-factorizations.md)의 한 단계이고, [행렬식](determinants.md), 가역성, 양의 정부호성이 원래 행렬과 Schur 보수 사이에서 곱이나 합으로 갈라진다.

# 직관

미지수를 두 덩이로 나눈 선형계를 푼다.

$$
\begin{pmatrix}A&B\cr C&D\end{pmatrix}\begin{pmatrix}x\cr y\end{pmatrix}=\begin{pmatrix}f\cr g\end{pmatrix}
$$

$A$ 가 가역이면 첫 줄에서 $x=A^{-1}(f-By)$ 가 나온다. 이것을 둘째 줄 $Cx+Dy=g$ 에 넣으면

$$
(D-CA^{-1}B)\thinspace y=g-CA^{-1}f
$$

가 된다. $x$ 가 사라지고 $y$ 만의 계가 남았다. 미지수를 지운 대가로 계수 행렬이 $D$ 에서 $D-CA^{-1}B$ 로 바뀌었다.

블록이 $1\times1$ 이면 이 계산은 Gauss 소거의 한 단계다. $a$ 로 첫 행을 나눠 첫 열을 지우면 남은 부분이 $D-cb/a$ 이고, 위 식에서 $A=a$, $B=b$, $C=c$ 인 경우다. 블록으로 묶어도 소거의 형태가 그대로 유지된다.

# 정의

$M$ 을 블록으로 나눈다.

$$
M=\begin{pmatrix}A&B\cr C&D\end{pmatrix}
$$

$A$ 가 가역일 때 $M/A=D-CA^{-1}B$ 를 $A$ 에 대한 $M$ 의 **Schur 보수**라 한다. $D$ 가 가역이면 $M/D=A-BD^{-1}C$ 로 같은 정의를 반대쪽에 쓴다.

직관 절의 소거를 행렬로 적으면 블록 분해가 된다.

$$
M=\begin{pmatrix}I&0\cr CA^{-1}&I\end{pmatrix}\begin{pmatrix}A&0\cr 0&M/A\end{pmatrix}\begin{pmatrix}I&A^{-1}B\cr 0&I\end{pmatrix}
$$

양 끝의 두 행렬은 대각 성분이 모두 $1$ 인 삼각행렬이다.

# 성질

## 행렬식

블록 분해에서 양 끝의 행렬식이 $1$ 이므로

$$
\det M=\det A\cdot\det(M/A)
$$

이다. $2\times2$ 행렬에서 $ad-bc=a(d-cb/a)$ 인 것이 이 공식의 가장 작은 경우다.

## 가역성과 역행렬

$A$ 가 가역일 때 $M$ 이 가역인 것과 $M/A$ 가 가역인 것이 같다. 이때 역행렬의 블록이 Schur 보수로 적힌다.

$$
M^{-1}=\begin{pmatrix}A^{-1}+A^{-1}B(M/A)^{-1}CA^{-1}&-A^{-1}B(M/A)^{-1}\cr -(M/A)^{-1}CA^{-1}&(M/A)^{-1}\end{pmatrix}
$$

오른쪽 아래 블록이 $M/A$ 의 역행렬이다. 전체를 뒤집지 않고 한 블록만 필요할 때 이 식을 쓴다.

## 양의 정부호성

$M$ 이 대칭이고 $A$ 가 가역이면, $M\succ0$ 인 것과 $A\succ0$ 이면서 $M/A\succ0$ 인 것이 같다.[^1]

증명은 블록 분해다. 대칭인 경우 $C=B^{\mathsf T}$ 이므로 분해가 $M=L\thinspace\mathrm{diag}(A,M/A)\thinspace L^{\mathsf T}$ 꼴이 되고, 합동변환이 부호를 보존한다. 같은 논증으로 양수, 음수, $0$ 인 고윳값의 개수가 $A$ 와 $M/A$ 의 것을 더한 값과 같다.[^1]

# 활용

- **블록 소거와 Cholesky 분해.** 소거를 반복하면 매번 남는 행렬이 앞 단계 Schur 보수의 Schur 보수다. 대칭 양의 정부호 행렬에서 이 반복이 끝까지 진행되고 그 결과가 Cholesky 분해다. 분해 도중 나타나는 추축이 모두 양수인 것이 위의 성질에서 나온다.
- **조건부 공분산.** 다변량 정규분포에서 확률벡터를 두 덩이로 나누고 뒤쪽을 조건으로 줄 때, 앞쪽의 조건부 공분산행렬이 공분산행렬의 Schur 보수다. 조건을 더 주면 공분산이 줄어드는 것이 $M/A\preceq D$ 에 해당한다.
- **선형행렬부등식.** $A\succ0$ 일 때 $M\succ0$ 과 $D-CA^{-1}B\succ0$ 이 같으므로, 역행렬이 들어간 부등식을 블록 행렬의 부등식으로 바꿀 수 있다. [반정부호 계획](semidefinite-programming.md)에서 제약을 표준 꼴로 옮길 때 이 치환을 쓴다.
- **경계 미지수만 남긴 계.** 격자를 영역으로 나누고 내부 미지수를 소거하면 경계 미지수만의 계가 남는다. 그 계수 행렬이 Schur 보수이고, [영역 분할법](domain-decomposition.md)이 이 행렬을 직접 만들지 않고 행렬-벡터 곱만으로 다룬다.

[^1]: F. Zhang 엮음, *The Schur Complement and Its Applications* (2005), 1장과 4장. 양의 정부호성 판정과 Haynsworth 의 관성 가법성. 역행렬의 블록 공식은 R. A. Horn, C. R. Johnson, *Matrix Analysis*, 2판 (2013), 0.7.3.

# 연관 문서

## 선수지식

- [행렬 분해](matrix-factorizations.md)

## 더 알아보기

- [영역 분할법](domain-decomposition.md)

#linear_algebra #algorithms #optimization
