# Cauchy 끼움 정리

# 개요

**Cauchy 끼움 정리(Cauchy interlacing theorem)** 는 대칭행렬에서 같은 번호의 행과 열을 하나씩 지우면, 남은 행렬의 고윳값이 원래 행렬의 이웃한 두 고윳값 사이에 하나씩 놓인다는 정리다. 정점 세 개를 한 줄로 이은 그래프의 인접행렬은 고윳값이 $\sqrt2,0,-\sqrt2$ 이고, 끝 정점 하나를 지운 그래프의 인접행렬은 고윳값이 $1,-1$ 이다. 그래프에서 정점을 지울 때마다 새로 고윳값을 계산하지 않고도, 이 정리로 남은 그래프의 고윳값이 어느 구간에 있는지 알 수 있다.

# 직관

다음 $A$ 는 정점 $1,2,3$ 을 한 줄로 이은 그래프의 인접행렬이다.

$$
A=\begin{pmatrix}0&1&0\cr 1&0&1\cr 0&1&0\end{pmatrix}
$$

$A(1,\sqrt2,1)=\sqrt2(1,\sqrt2,1)$, $A(1,0,-1)=0$, $A(1,-\sqrt2,1)=-\sqrt2(1,-\sqrt2,1)$ 이므로 [고윳값](eigenvalues.md)은 $\sqrt2,0,-\sqrt2$ 다. 셋째 행과 셋째 열을 지운 $B=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 은 정점 $3$ 을 지운 그래프의 인접행렬이고 고윳값은 $1,-1$ 이다. 두 목록을 크기순으로 섞으면 $\sqrt2\ge 1\ge 0\ge -1\ge-\sqrt2$ 다.

이 순서가 왜 나오는지는 [Rayleigh 몫](rayleigh-quotient.md) $R_A(x)=x^{\mathsf T}Ax/x^{\mathsf T}x$ 로 본다. $y\in\mathbb R^2$ 에 $0$ 을 붙인 $x=(y_1,y_2,0)$ 에서 $x^{\mathsf T}Ax=y^{\mathsf T}By$ 이므로 $R_B(y)=R_A(x)$ 다.

$B$ 의 가장 큰 고윳값은 $R_B$ 의 최댓값이고, 이것은 셋째 좌표가 $0$ 인 벡터로만 잰 $R_A$ 의 최댓값이다. 더 적은 벡터에서 잰 최댓값이므로 $A$ 의 가장 큰 고윳값 $\sqrt2$ 이하다. 같은 논법으로 $B$ 의 가장 작은 고윳값 $-1$ 은 $-\sqrt2$ 이상이다.

$B$ 의 가장 큰 고윳값이 $A$ 의 둘째 고윳값 $0$ 아래로 내려가지 않는 것은 최댓값만으로는 나오지 않는다. 둘째 고윳값을 Rayleigh 몫의 최대최소로 쓰는 Courant–Fischer 정리(Courant–Fischer theorem)가 필요하고, 그 정리를 쓰면 행렬의 크기와 무관하게 같은 순서가 성립한다.

# 정의

## 주부분행렬

$n\times n$ 행렬 $A$ 와 첨자 집합 $I\subseteq\lbrace 1,\dots,n\rbrace$ 에 대해, $A$ 에서 $I$ 에 속하는 행과 열만 남긴 $\vert I\vert\times\vert I\vert$ 행렬을 $A$ 의 **주부분행렬(principal submatrix)** 이라 한다. 그래프의 인접행렬에서 $I$ 에 대한 주부분행렬은 $I$ 의 정점으로 유도된 부분 그래프의 인접행렬이다. 직관 절의 $B$ 는 $I=\lbrace 1,2\rbrace$ 에 대한 주부분행렬이다. $I=\lbrace 1,3\rbrace$ 이면 정점 $1$ 과 $3$ 사이에 간선이 없으므로 주부분행렬은 $2\times 2$ 영행렬이다.

## 끼움

실대칭행렬의 고윳값은 중복도까지 세어 큰 것부터 $\lambda_1\ge\lambda_2\ge\dots\ge\lambda_n$ 으로 적는다. 수열 $\mu_1\ge\dots\ge\mu_{n-1}$ 이 $\lambda_1\ge\dots\ge\lambda_n$ 과

$$
\lambda_1\ge\mu_1\ge\lambda_2\ge\mu_2\ge\dots\ge\mu_{n-1}\ge\lambda_n
$$

을 만족하면 $\mu$ 가 $\lambda$ 에 **끼운다(interlace)** 고 한다. 직관 절의 $1,-1$ 은 $\sqrt2,0,-\sqrt2$ 에 끼운다. $I=\lbrace 1,3\rbrace$ 의 영행렬 고윳값 $0,0$ 도 $\sqrt2\ge 0\ge 0\ge 0\ge-\sqrt2$ 이므로 끼운다.

# 성질

## Cauchy 끼움 정리

$A$ 가 $n\times n$ 실대칭행렬이고 $B$ 가 $A$ 의 $(n-1)\times(n-1)$ 주부분행렬이면 $B$ 의 고윳값 $\mu_1\ge\dots\ge\mu_{n-1}$ 은 $A$ 의 고윳값에 끼운다[^1]. 복소 Hermite 행렬에서도 같다.

증명의 요지. $B$ 가 $i$ 번째 행과 열을 지운 것이라 하고 $H=\lbrace x: x_i=0\rbrace$ 로 둔다. 직관 절처럼 $H$ 위에서 $R_A$ 는 $R_B$ 와 같다.

Courant–Fischer 정리는 $\lambda_k=\max_{\dim V=k}\min_{x\in V\setminus\lbrace 0\rbrace}R_A(x)$ 이고, $\mu_k$ 는 같은 식에서 $V$ 를 $H$ 의 부분공간으로 제한한 것이다. 후보가 줄어든 최댓값이므로 $\mu_k\le\lambda_k$ 다. 최소최대 꼴 $\mu_k=\min_{W\subseteq H,\ \dim W=n-k}\max_{x\in W\setminus\lbrace 0\rbrace}R_A(x)$ 도 $W$ 를 $\mathbb R^n$ 의 $(n-k)$ 차원 부분공간 전체로 넓히면 $\lambda_{k+1}$ 이 되므로 $\mu_k\ge\lambda_{k+1}$ 이다.

## 여러 행을 지운 경우

$B$ 가 $A$ 의 $m\times m$ 주부분행렬이면, $1\le k\le m$ 에서 다음이 성립한다.

$$
\lambda_k\ge\mu_k\ge\lambda_{k+n-m}
$$

한 행씩 지우며 위 정리를 $n-m$ 번 쓰면 나온다. 직관 절의 $A$ 에서 $I=\lbrace 2\rbrace$ 를 남기면 $B=(0)$ 이고, $n-m=2$ 이므로 $\sqrt2\ge 0\ge-\sqrt2$ 다.

## Poincaré 분리 정리

$P$ 가 $n\times m$ 행렬이고 $P^{\mathsf T}P=I_m$ 이면 $B=P^{\mathsf T}AP$ 의 고윳값도 위와 같은 부등식 $\lambda_k\ge\mu_k\ge\lambda_{k+n-m}$ 을 만족한다. 이것이 **Poincaré 분리 정리(Poincaré separation theorem)** 다[^1]. 주부분행렬은 $P$ 의 열을 표준기저 벡터 $m$ 개로 고른 경우다. 증명은 위와 같고, $H$ 대신 $P$ 의 열공간을 쓴다.

## 역의 성립

$\lambda_1\ge\dots\ge\lambda_n$ 과 이에 끼우는 $\mu_1\ge\dots\ge\mu_{n-1}$ 이 주어지면, 고윳값이 $\lambda$ 이고 마지막 행과 열을 지운 주부분행렬의 고윳값이 $\mu$ 인 실대칭행렬이 존재한다[^1].

증명의 요지. $\mu$ 가 서로 다르고 $\lambda$ 와 겹치지 않는 경우를 본다. $A=\begin{pmatrix}D&y\cr y^{\mathsf T}&a\end{pmatrix}$, $D=\mathrm{diag}(\mu_1,\dots,\mu_{n-1})$ 로 놓으면

$$
\det(tI-A)=(t-a)\prod_j(t-\mu_j)-\sum_jy_j^2\prod_{l\ne j}(t-\mu_l)
$$

이다. $a=\sum_i\lambda_i-\sum_j\mu_j$ 로 두고, $t=\mu_j$ 에서 이 식이 $\prod_i(\mu_j-\lambda_i)$ 와 같도록 $y_j^2=-\prod_i(\mu_j-\lambda_i)/\prod_{l\ne j}(\mu_j-\mu_l)$ 로 둔다. 끼움 조건에서 분자와 분모의 부호가 반대라 $y_j^2\gt 0$ 이다.

두 다항식은 $t^n$ 과 $t^{n-1}$ 의 계수가 같고 $n-1$ 개 점 $\mu_j$ 에서 값이 같으므로 일치한다. 겹치는 경우는 극한으로 얻는다.

# 활용

- [민감도 정리](sensitivity-theorem.md). Huang 의 보조정리에서 $2^n\times 2^n$ 부호 행렬 $A_n$ 은 고윳값 $\sqrt n$ 과 $-\sqrt n$ 이 각각 $2^{n-1}$ 개다. 정점 $2^{n-1}+1$ 개의 주부분행렬은 $m=2^{n-1}+1$ 이므로 $\mu_1\ge\lambda_{1+2^n-m}=\lambda_{2^{n-1}}=\sqrt n$ 이다.
- [독립집합 문제](independent-set.md)의 고윳값 상한. 그래프에 크기 $\alpha$ 인 독립집합이 있으면 그 정점의 주부분행렬은 $\alpha\times\alpha$ 영행렬이다. 여러 행을 지운 경우의 부등식에서 $\lambda_\alpha\ge 0\ge\lambda_{n-\alpha+1}$ 이므로, $\alpha$ 는 인접행렬의 음이 아닌 고윳값의 개수와 양이 아닌 고윳값의 개수 둘 다를 넘지 않는다. 이것이 Cvetković 상한(Cvetković bound)이다[^2]. 직관 절의 그래프에서 두 개수가 모두 $2$ 이고 독립집합 $\lbrace 1,3\rbrace$ 의 크기도 $2$ 다.
- [그래프 Laplacian](graph-laplacian.md). 정점 하나를 지운 Laplacian 은 원래 Laplacian 의 주부분행렬이므로 고윳값이 원래 고윳값에 끼운다. Kirchhoff 의 행렬-트리 정리(matrix-tree theorem)는 이 주부분행렬의 행렬식으로 신장트리(spanning tree)의 개수를 센다.
- 삼중대각 대칭행렬의 고윳값 계산. 앞의 $k\times k$ 주부분행렬들의 특성다항식은 차례로 서로의 근에 끼우므로 Sturm 열(Sturm sequence)을 이룬다. 부호가 바뀌는 횟수로 주어진 값보다 큰 고윳값의 개수를 세고, 이분법으로 고윳값을 찾는다.

[^1]: Roger A. Horn, Charles R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press, 2013, 4.3 절. 끼움 정리, 역의 성립, Poincaré 분리 정리가 있다.
[^2]: Andries E. Brouwer, Willem H. Haemers, *Spectra of Graphs*, Springer, 2012, 3 장.

# 연관 문서

## 선수지식

- [Rayleigh 몫](rayleigh-quotient.md)

## 더 알아보기

- [민감도 정리](sensitivity-theorem.md)

#linear_algebra #graph_theory #combinatorics
