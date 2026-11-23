# 결합 수치 범위

# 개요

**결합 수치 범위(joint numerical range)** 는 에르미트 행렬 여러 개 $A\_1,\dots,A\_k$ 에 같은 단위벡터 $x$ 를 넣어 얻는 값 $(x^{\ast}A\_1x,\dots,x^{\ast}A\_kx)$ 를 모두 모은 $\mathbb R^k$ 의 집합이다. 양자 상태 하나에서 세 방향의 스핀을 함께 재면 세 기댓값이 한 점을 이루는데, 상태를 바꾸어 가며 그 점이 어디까지 갈 수 있는지 알고 싶다.

결합 수치 범위가 그 영역이고, 행렬이 둘이면 [수치 범위](numerical-range.md) 하나로 바뀌어 볼록이지만 셋 이상이면 볼록이 아닐 수 있다.

# 직관

다음 세 $2\times 2$ 행렬은 큐비트의 세 방향 스핀을 잰다.

$$
X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix},\qquad Y=\begin{pmatrix}0&-i\cr i&0\end{pmatrix},\qquad Z=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}
$$

단위벡터 $x=(a,b)$ 를 넣으면 $x^{\ast}Zx=\vert a\vert^2-\vert b\vert^2$ 이고, $x^{\ast}Xx$ 와 $x^{\ast}Yx$ 는 $2\bar ab$ 의 실수부와 허수부다. 세 값을 제곱해 더하면 다음과 같다.

$$
(\vert a\vert^2-\vert b\vert^2)^2+4\vert a\vert^2\vert b\vert^2=(\vert a\vert^2+\vert b\vert^2)^2=1
$$

그래서 점은 언제나 단위구면 위에 있다. $x=(1,0)$ 은 북극 $(0,0,1)$ 을, $x=(0,1)$ 은 남극 $(0,0,-1)$ 을 준다. 두 점의 중점인 원점은 구면 위에 없으므로 이 집합은 볼록이 아니다.

두 상태를 반반의 확률로 섞으면 기댓값은 두 점의 중점이 된다. 섞은 상태까지 넣으면 구면 안쪽의 공 전체가 나온다.

# 정의

$A\_1,\dots,A\_k$ 는 $n\times n$ 에르미트 행렬이다. 다음 집합을 **결합 수치 범위** 라 한다.

$$
W(A\_1,\dots,A\_k)=\bigl\lbrace(x^{\ast}A\_1x,\dots,x^{\ast}A\_kx):x\in\mathbb C^n,\thinspace\Vert x\Vert=1\bigr\rbrace\subset\mathbb R^k
$$

에르미트 행렬에서 $x^{\ast}A\_jx$ 는 실수이므로 이 집합은 $\mathbb R^k$ 에 놓인다. 직관 절에서 $W(X,Y,Z)$ 는 단위구면이다.

# 성질

## 두 행렬

$k=2$ 이면 점 $(x^{\ast}A\_1x,x^{\ast}A\_2x)$ 를 복소수 $x^{\ast}(A\_1+iA\_2)x$ 로 보면 $W(A\_1,A\_2)$ 는 $A\_1+iA\_2$ 의 수치 범위다. 그러므로 Toeplitz–Hausdorff 정리에 따라 볼록이다.

## 세 행렬

$n\ge 3$ 이면 세 에르미트 행렬의 결합 수치 범위는 볼록이다[^1]. $n=2$ 에서는 직관 절의 $W(X,Y,Z)$ 처럼 볼록이 아닐 수 있다. 행렬이 넷 이상이면 $n$ 이 커도 볼록이 아닐 수 있다.

## 볼록 껍질과 밀도 행렬

$W(A\_1,\dots,A\_k)$ 의 볼록 껍질은 다음 집합이다.

$$
\bigl\lbrace(\mathrm{tr}\thinspace\rho A\_1,\dots,\mathrm{tr}\thinspace\rho A\_k):\rho\text{ 는 밀도 행렬}\bigr\rbrace
$$

[밀도 행렬](density-matrix.md)은 단위벡터 $x$ 의 $xx^{\ast}$ 들의 볼록 결합이고 $\mathrm{tr}(xx^{\ast}A)=x^{\ast}Ax$ 이기 때문이다. 직관 절에서 이 집합은 단위공이다.

## 받침 함수와 최소 고윳값

실수 $c\_1,\dots,c\_k$ 에 대해 다음이 성립한다.

$$
\lambda\_{\min}\Bigl(\sum\_jc\_jA\_j\Bigr)=\min\_{w\in W}\sum\_jc\_jw\_j
$$

좌변은 [Rayleigh 몫](rayleigh-quotient.md)의 최솟값 $\min\_{\Vert x\Vert=1}x^{\ast}(\sum\_jc\_jA\_j)x$ 이고, 그 안의 값이 $\sum\_jc\_j\thinspace x^{\ast}A\_jx$ 이기 때문이다. 그래서 행렬들의 모든 일차결합의 최소 고윳값을 알면 볼록 껍질이 정해진다.

# 활용

- 양자 상태의 기댓값 영역. 관측량 $A\_1,\dots,A\_k$ 의 기댓값으로 나올 수 있는 점 전체가 볼록 껍질 절의 집합이다. 해밀토니언이 $\sum\_jc\_jA\_j$ 꼴인 계의 바닥 상태 에너지는 받침 함수 절에 따라 이 영역의 받침 함수다.
- 이차형식과 S 보조정리. 실대칭행렬 두 개의 $\lbrace(x^{\mathsf T}Ax,x^{\mathsf T}Bx):x\in\mathbb R^n\rbrace$ 가 볼록이라는 Dines 정리(Dines' theorem)는 두 행렬 절의 실수판이다[^2]. 이것으로 이차 부등식 하나가 다른 이차 부등식을 함의하는 조건을 [반정부호 계획법](semidefinite-programming.md)의 조건으로 바꾸는 S 보조정리(S-lemma)가 증명된다.

[^1]: Y. H. Au-Yeung, Y. T. Poon, "A remark on the convexity and positive definiteness concerning Hermitian matrices", *Southeast Asian Bulletin of Mathematics* 3 (1979), 85–92.
[^2]: L. L. Dines, "On the mapping of quadratic forms", *Bulletin of the American Mathematical Society* 47 (1941), 494–498.

# 연관 문서

## 선수지식

- [수치 범위](numerical-range.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #functional_analysis #optimization
