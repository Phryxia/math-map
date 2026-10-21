# 행렬 완성

# 개요

**행렬 완성(matrix completion)** 은 일부 성분만 관측된 행렬에서 계수가 낮다는 가정으로 관측되지 않은 성분을 복원하는 문제다. 계수는 볼록함수가 아니므로 계수 최소화는 볼록 최적화로 풀 수 없다. [압축 센싱](compressed-sensing.md)이 $0$ 이 아닌 성분의 개수를 $\ell\_1$ 노름으로 바꾸듯, 행렬 완성은 계수를 [특이값 분해](singular-value-decomposition.md)의 특이값의 합인 핵노름으로 바꾼다. 행렬이 특정 성분에 몰려 있지 않고 무작위로 고른 관측이 충분하면 핵노름 최소화의 해가 원래 행렬과 일치한다.

# 직관

$2\times 2$ 행렬에서 세 성분이 $1,2,3$ 이고 오른쪽 아래가 비어 있다.

$$
\begin{pmatrix}1&2\cr 3&?\end{pmatrix}
$$

계수가 $1$ 이면 두 행이 비례하므로 둘째 행은 첫 행의 $3$ 배이고 빈칸은 $6$ 이다. 계수 $r$ 인 $n\times n$ 행렬은 $n\times r$ 행렬 둘의 곱으로 쓰이므로 정하는 데 필요한 수가 $2nr$ 개 정도이고, $r$ 이 작으면 $n^2$ 개 성분 가운데 일부만 보아도 나머지가 정해질 수 있다.

관측 위치가 나쁘면 정해지지 않는다. 왼쪽 위 성분만 $1$ 이고 나머지가 $0$ 인 행렬도 계수가 $1$ 인데, 왼쪽 위를 관측하지 못하면 영행렬과 구별할 수 없다. 정보가 성분 몇 개에 몰린 행렬은 관측에서 빠지기 쉬우므로, 복원이 되려면 행렬의 정보가 모든 행과 열에 퍼져 있어야 한다.

정해진다 해도 계산이 남는다. 계수는 $0$ 이 아닌 특이값의 개수이므로 압축 센싱의 $0$ 이 아닌 성분의 개수와 같은 꼴이다. 압축 센싱에서 개수를 절댓값의 합으로 바꿨듯 여기서는 특이값의 합을 최소화한다.

# 정의

## 관측 사상

$M\in\mathbb R^{n_1\times n_2}$ 의 성분 가운데 위치 집합 $\Omega\subset\lbrace 1,\dots,n_1\rbrace\times\lbrace 1,\dots,n_2\rbrace$ 의 것만 관측한다. 관측 사상 $P_\Omega$ 는 $(i,j)\in\Omega$ 이면 $(P_\Omega X)\_{ij}=X_{ij}$, 아니면 $0$ 으로 두는 사상이다.

## 핵노름 최소화

$X$ 의 특이값을 $\sigma_1(X)\ge\sigma_2(X)\ge\cdots$ 이라 할 때 **핵노름(nuclear norm)** 은

$$
\Vert X\Vert_\ast=\sum_i\sigma_i(X)
$$

이다. 계수 최소화 문제와 그 볼록 완화는 다음과 같다.

$$
\min_X\ \mathrm{rank}\thinspace X\quad\text{s.t.}\quad P_\Omega(X)=P_\Omega(M),\qquad\qquad \min_X\ \Vert X\Vert_\ast\quad\text{s.t.}\quad P_\Omega(X)=P_\Omega(M)
$$

## 비간섭 조건

$M=U\Sigma V^{\mathsf T}$ 를 계수 $r$ 인 특이값 분해라 하자. $U\in\mathbb R^{n_1\times r}$ 의 열이 정규직교일 때

$$
\mu(U)=\frac{n_1}{r}\max_{1\le i\le n_1}\Vert U^{\mathsf T}e_i\Vert_2^2
$$

을 열공간의 **coherence** 라 한다. $1\le\mu(U)\le n_1/r$ 이고, 열공간이 표준기저 방향 하나에 몰리면 $n_1/r$, 고르게 퍼지면 $1$ 에 가깝다. $\mu(U),\mu(V)\le\mu_0$ 일 때 $M$ 이 **비간섭(incoherent)** 이라 한다. 직관 절의 왼쪽 위 성분만 $1$ 인 행렬은 $\mu=n$ 으로 가장 나쁜 경우다.

# 성질

## 계수의 볼록 포락

연산자 노름이 $1$ 이하인 행렬의 집합에서 계수 함수의 볼록 포락, 곧 계수 이하인 볼록함수 가운데 가장 큰 것은 핵노름이다[^1]. 대각행렬에 제한하면 이것은 $\Vert x\Vert_\infty\le 1$ 에서 $0$ 이 아닌 성분의 개수의 볼록 포락이 $\Vert x\Vert_1$ 이라는 사실이고, 특이값 분해로 일반 행렬에 옮긴다.

## 쌍대 노름과 반정부호 표현

핵노름의 쌍대 노름은 연산자 노름이다.

$$
\Vert X\Vert_\ast=\max\lbrace\langle X,Y\rangle:\Vert Y\Vert_{\mathrm{op}}\le 1\rbrace
$$

또 $\Vert X\Vert_\ast\le t$ 는 다음을 만족하는 대칭행렬 $W_1,W_2$ 가 존재하는 것과 동치다.

$$
\begin{pmatrix}W_1&X\cr X^{\mathsf T}&W_2\end{pmatrix}\succeq 0,\qquad \mathrm{tr}\thinspace W_1+\mathrm{tr}\thinspace W_2\le 2t
$$

따라서 핵노름 최소화는 [반정부호 계획법](semidefinite-programming.md)의 문제다.

## 정확 복원 정리

$n=\max(n_1,n_2)$ 로 두고 $\Omega$ 를 크기 $m$ 인 위치 집합 가운데 균등하게 무작위로 고른다. $M$ 이 계수 $r$ 이고 coherence 가 $\mu_0$ 이하이며

$$
m\ge C\mu_0\thinspace rn\log^2 n
$$

이면, 확률 $1-n^{-c}$ 이상으로 핵노름 최소화의 해가 유일하고 $M$ 과 같다[^2][^3]. $C,c$ 는 보편상수다(Recht 의 정리는 $\mu_0$ 외에 특이벡터의 결합 coherence 조건(joint coherence)을 하나 더 쓴다).

관측 수의 하한도 있다. 행이나 열 하나가 통째로 관측되지 않으면 그 행이나 열은 정해지지 않으므로 $m$ 은 적어도 $n\log n$ 규모여야 하고, 계수 $r$ 에서는 $\mu_0 rn\log n$ 규모가 필요하다[^4]. 위 상계는 이 하한과 $\log n$ 배 차이다.

증명의 요지는 쌍대 증명서(dual certificate)를 만드는 것이다. $M$ 이 유일한 최소해가 되려면 $M$ 의 특이벡터로 만든 $UV^{\mathsf T}$ 에 가깝고 $\Omega$ 에만 받침을 갖는 행렬 $Y$ 가 있어야 한다. 무작위 $\Omega$ 를 여러 조각으로 나눠 조각마다 오차를 줄이는 반복으로 $Y$ 를 만들고, 각 단계의 오차를 행렬 Bernstein 부등식(matrix Bernstein inequality)으로 누른다.

## 특이값 문턱

$\lambda\Vert X\Vert_\ast$ 의 근접 연산자는 특이값에 연성 문턱을 적용하는 것이다. $Y=U\mathrm{diag}(\sigma_i)V^{\mathsf T}$ 이면

$$
\mathcal D_\lambda(Y)=U\thinspace\mathrm{diag}\bigl(\max(\sigma_i-\lambda,0)\bigr)\thinspace V^{\mathsf T}
$$

다. 압축 센싱의 연성 문턱이 성분을 $0$ 으로 보내듯 $\mathcal D_\lambda$ 는 작은 특이값을 $0$ 으로 보내 계수를 낮춘다. 관측 성분을 맞추는 경사 단계와 $\mathcal D_\lambda$ 를 번갈아 쓰는 [근접 경사법](proximal-gradient-method.md)이 특이값 문턱 알고리즘(singular value thresholding)이다[^5].

# 활용

- 추천 시스템. 사용자와 상품의 평점 행렬은 대부분 비어 있고, 취향을 정하는 요인이 몇 개뿐이라는 가정이 저계수 가정이다. 2006년 Netflix 경진대회의 자료가 이 꼴이었다.
- 센서 위치 추정. 점 사이의 거리 일부만 측정되었을 때, 거리 제곱 행렬은 $d$ 차원 점에서 계수가 $d+2$ 이하이므로 비어 있는 거리를 행렬 완성으로 채운다.
- 강건 주성분 분석(robust principal component analysis). 관측 행렬을 저계수 행렬과 희소 행렬의 합으로 나누는 문제로, 핵노름과 $\ell\_1$ 노름의 합을 최소화한다. [주성분 분석](principal-component-analysis.md)이 큰 이상치 몇 개에 흔들리는 것을 막는다.

[^1]: M. Fazel, *Matrix Rank Minimization with Applications*, 박사학위 논문, Stanford University, 2002.
[^2]: E. J. Candès, B. Recht, Exact matrix completion via convex optimization, *Foundations of Computational Mathematics* 9 (2009), 717–772.
[^3]: B. Recht, A simpler approach to matrix completion, *Journal of Machine Learning Research* 12 (2011), 3413–3430.
[^4]: E. J. Candès, T. Tao, The power of convex relaxation: near-optimal matrix completion, *IEEE Transactions on Information Theory* 56 (2010), 2053–2080.
[^5]: J.-F. Cai, E. J. Candès, Z. Shen, A singular value thresholding algorithm for matrix completion, *SIAM Journal on Optimization* 20 (2010), 1956–1982.

# 연관 문서

## 선수지식

- [압축 센싱](compressed-sensing.md)
- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra #machine_learning #statistics
