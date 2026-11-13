# Takagi 분해

# 개요

**Takagi 분해(Takagi factorization)** 는 복소 대칭행렬 $A$ 를 유니터리 행렬 $U$ 와 음 아닌 대각행렬 $\Sigma$ 로 $A=U\Sigma U^{\mathsf T}$ 꼴로 쓰는 분해다. 행렬 $\begin{pmatrix}1&i\cr i&-1\end{pmatrix}$ 은 대칭이지만 제곱하면 영행렬이어서 고윳값이 $0$ 뿐이고, 고윳값으로 대각화할 수 없다. Takagi 분해는 전치 $U^{\mathsf T}$ 를 켤레전치 대신 쓰는 분해로, 이런 행렬도 $2uu^{\mathsf T}$ 처럼 단위벡터의 바깥곱으로 적는다.

# 직관

$A=\begin{pmatrix}1&i\cr i&-1\end{pmatrix}$ 은 $A^{\mathsf T}=A$ 이고 $A^2=0$ 이다. 고윳값이 $0$ 뿐인데 $A\ne 0$ 이므로 $A=V\Lambda V^{-1}$ 꼴의 대각화는 없다. 실대칭행렬이면 [스펙트럼 정리](spectral-theorem.md)가 직교행렬로 대각화해 주지만, 복소 대칭행렬에는 이 정리가 통하지 않는다.

$u=\tfrac1{\sqrt 2}(1,i)^{\mathsf T}$ 로 두고 $uu^{\mathsf T}$ 를 계산하면 $\tfrac12\begin{pmatrix}1&i\cr i&-1\end{pmatrix}$ 이다. 그래서 $A=2uu^{\mathsf T}$ 다. $u$ 와 직교하는 단위벡터를 $u'=\tfrac1{\sqrt 2}(1,-i)^{\mathsf T}$ 로 두고 $U=(u\ u')$ 라 하면 $U$ 는 유니터리이고 $A=U\thinspace\mathrm{diag}(2,0)\thinspace U^{\mathsf T}$ 다.

대각 성분 $2$ 와 $0$ 은 $A$ 의 [특이값](singular-value-decomposition.md)이다. $AA^\ast$ 를 계산하면 고윳값이 $4$ 와 $0$ 이다. 켤레전치 대신 전치로 감싸면 고윳값 대신 특이값이 대각에 놓인다.

# 정의

## Takagi 분해

$n\times n$ 복소 행렬 $A$ 가 $A^{\mathsf T}=A$ 이면 유니터리 $U$ 와 대각 성분이 음 아닌 실수인 대각행렬 $\Sigma$ 가 있어서

$$
A=U\Sigma U^{\mathsf T}
$$

이다[^1]. 이 식을 $A$ 의 **Takagi 분해** 라 하고, $\Sigma$ 의 대각 성분을 Takagi 값이라 한다. 직관 절의 $A$ 는 $\Sigma=\mathrm{diag}(2,0)$ 이다. L. Autonne 이 1915 년에, T. Takagi 가 1925 년에 따로 증명했다.

실대칭행렬 $\mathrm{diag}(1,-1)$ 에서는 $U=\mathrm{diag}(1,i)$ 로 두면 $U\thinspace\mathrm{diag}(1,1)\thinspace U^{\mathsf T}=\mathrm{diag}(1,-1)$ 이다. 고윳값 $-1$ 의 부호가 $U$ 의 열에 $i$ 를 곱하는 것으로 옮겨 간다.

# 성질

## Takagi 값과 특이값

Takagi 값은 $A$ 의 특이값이다. $A=U\Sigma U^{\mathsf T}$ 이면 $A^\ast=\bar U\Sigma U^\ast$ 이고 $U^{\mathsf T}\bar U=I$ 이므로, $AA^\ast=U\Sigma^2U^\ast$ 이다. 그래서 $\Sigma$ 는 순서를 빼고 하나로 정해진다.

## 존재의 증명

증명의 요지. $A$ 의 특이값이 서로 다르다고 하자. 특이값 분해 $A=W\Sigma V^\ast$ 를 전치하면 $A=A^{\mathsf T}=\bar V\Sigma W^{\mathsf T}$ 도 특이값 분해다. 특이값이 서로 다르면 특이벡터는 위상을 빼고 정해지므로 $\bar v\_j=e^{i\theta\_j}w\_j$ 인 실수 $\theta\_j$ 가 있다.

그러면 다음이 나온다.

$$
A=\sum\_j\sigma\_jw\_jv\_j^\ast=\sum\_j\sigma\_je^{i\theta\_j}w\_jw\_j^{\mathsf T}
$$

$u\_j=e^{i\theta\_j/2}w\_j$ 로 두면 $A=\sum\_j\sigma\_ju\_ju\_j^{\mathsf T}$ 다.

특이값이 겹치는 경우에는 같은 특이값의 특이벡터 공간에서 대칭 유니터리 행렬의 제곱근을 써서 같은 결론을 얻는다[^1].

## 실대칭행렬

$A$ 가 실대칭이고 고윳값 분해가 $A=O\Lambda O^{\mathsf T}$ 이면, $\lambda\_j\lt 0$ 인 열마다 $O$ 의 열에 $i$ 를 곱한 $U$ 로 $A=U\vert\Lambda\vert U^{\mathsf T}$ 다. 이것이 실대칭행렬의 Takagi 분해다.

# 활용

- [Gauss 보손 표본추출](gaussian-boson-sampling.md). 압착 진공과 광학 회로로 만드는 행렬 $B=U\thinspace\mathrm{diag}(t\_j)\thinspace U^{\mathsf T}$ 가 Takagi 분해의 꼴이다. 그래프의 인접 행렬을 Takagi 분해하면 실험에 쓸 압착 매개변수와 회로가 나온다.
- 복소 대칭행렬의 수치 계산. 전자기 산란과 감쇠가 있는 진동 문제의 행렬은 에르미트가 아닌 복소 대칭행렬이고, 고윳값 대신 Takagi 분해를 계산한다.
- 이차형식의 표준형. $x\mapsto x^{\mathsf T}Ax$ 는 변수를 $x=\bar Uy$ 로 바꾸면 $\sum\_j\sigma\_jy\_j^2$ 이 된다. 복소 대칭 이차형식의 계수는 Takagi 값이다.

[^1]: R. A. Horn, C. R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press (2013), Section 4.4.

# 연관 문서

## 선수지식

- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #computation
