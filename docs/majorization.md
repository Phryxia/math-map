# 다수화

# 개요

**다수화(majorization)** 는 합이 같은 두 실수 벡터 가운데 어느 쪽이 더 고르게 나뉘어 있는지 비교하는 순서다. 사탕 $6$ 개를 세 사람에게 $(4,1,1)$ 로 나눈 것과 $(3,2,1)$ 로 나눈 것과 $(2,2,2)$ 로 나눈 것 가운데 어느 것이 더 치우쳤는지 묻는다. 다수화는 큰 몫부터 차례로 더한 부분합을 비교해 이 물음에 답하고, 그 답이 많이 가진 사람에게서 적게 가진 사람에게 옮기는 일과 모든 볼록함수의 합에서 같다는 것을 보인다.

# 직관

$(4,1,1)$ 에서 $4$ 를 가진 사람이 $1$ 을 가진 사람에게 사탕 하나를 주면 $(3,2,1)$ 이 되고, 다시 $3$ 을 가진 사람이 $1$ 을 가진 사람에게 하나를 주면 $(2,2,2)$ 가 된다. 옮길 때마다 받는 사람은 주는 사람보다 적게 가졌고, 옮긴 뒤에도 순서가 뒤집히지 않는다.

몫을 큰 것부터 늘어놓고 앞에서부터 더한 부분합은 다음과 같다.

| 나눔        | 첫 몫 | 앞 두 몫의 합 | 세 몫의 합 |
| ----------- | ----- | ------------- | ---------- |
| $(4,1,1)$   | $4$   | $5$           | $6$        |
| $(3,2,1)$   | $3$   | $5$           | $6$        |
| $(2,2,2)$   | $2$   | $4$           | $6$        |

옮길 때마다 부분합이 줄거나 그대로다. 몫의 제곱의 합도 $18$, $14$, $12$ 로 준다.

$(3,3,0)$ 과 $(4,1,1)$ 은 부분합이 $(3,6,6)$ 과 $(4,5,6)$ 이라 첫 칸은 $(4,1,1)$ 이, 둘째 칸은 $(3,3,0)$ 이 크다. 어느 쪽에서 옮겨도 다른 쪽이 되지 않고, 이 두 나눔은 비교되지 않는다.

# 정의

## 다수화

$x\in\mathbb R^n$ 의 성분을 큰 것부터 늘어놓은 벡터를 $x^\downarrow$ 라 한다. 다음이 성립하면 $x$ 가 $y$ 에 다수화된다고 하고 $x\prec y$ 로 쓴다.

$$
\sum_{i=1}^kx^\downarrow_i\le\sum_{i=1}^ky^\downarrow_i\quad(k=1,\dots,n-1),\qquad\sum_{i=1}^nx_i=\sum_{i=1}^ny_i
$$

직관 절의 표에서 $(2,2,2)\prec(3,2,1)\prec(4,1,1)$ 이다. 합이 $s$ 인 벡터 $y$ 는 언제나 $(s/n,\dots,s/n)\prec y$ 를 만족한다.

## 옮기기

**T-변환(T-transform)** 은 두 좌표 $i,j$ 와 $0\le\lambda\le 1$ 에 대해 다음 행렬이다.

$$
T=\lambda I+(1-\lambda)Q_{ij}
$$

$Q_{ij}$ 는 $i$ 와 $j$ 좌표를 맞바꾸는 순열행렬이다. $Ty$ 는 $y_i$ 와 $y_j$ 를 $\lambda y_i+(1-\lambda)y_j$ 와 $(1-\lambda)y_i+\lambda y_j$ 로 바꾸고 나머지 좌표는 그대로 둔다. 직관 절에서 $(4,1,1)$ 을 $(3,2,1)$ 로 바꾼 것은 $i=1$, $j=2$, $\lambda=2/3$ 인 T-변환이다.

## Schur 볼록 함수

$x\prec y$ 이면 $f(x)\le f(y)$ 인 함수 $f:\mathbb R^n\to\mathbb R$ 를 **Schur 볼록 함수(Schur-convex function)** 라 한다. $-f$ 가 Schur 볼록이면 $f$ 를 Schur 오목 함수라 한다. 직관 절의 제곱의 합 $\sum_ix_i^2$ 은 Schur 볼록 함수다.

# 성질

## Hardy–Littlewood–Pólya 정리

$x,y\in\mathbb R^n$ 에 대해 다음은 동치다[^1]. 이것을 Hardy–Littlewood–Pólya 정리(Hardy–Littlewood–Pólya theorem)라 한다.

1. $x\prec y$.
2. $x$ 는 $y$ 에 T-변환을 유한 번 적용해 얻어진다.
3. 어떤 이중 확률 행렬 $B$ 에 대해 $x=By$ 이다.
4. 모든 볼록함수 $\varphi:\mathbb R\to\mathbb R$ 에 대해 $\sum_i\varphi(x_i)\le\sum_i\varphi(y_i)$ 이다.

증명의 요지. 1 에서 2 는 귀납법이다. $x\prec y$ 이고 $x^\downarrow\ne y^\downarrow$ 이면, $y$ 의 두 좌표 사이에서 옮겨 $x\prec y^\prime\prec y$ 이고 $x$ 와 같은 좌표가 하나 더 많은 $y^\prime$ 을 만드는 T-변환이 존재한다. T-변환은 이중 확률 행렬이고 이중 확률 행렬의 곱도 이중 확률 행렬이므로 2 에서 3 이 나온다.

3 에서 4 는 $x_i=\sum_jb_{ij}y_j$ 가 $y_j$ 들의 볼록 결합이므로 [Jensen 부등식](jensen-inequality.md)에서 $\varphi(x_i)\le\sum_jb_{ij}\varphi(y_j)$ 이고, $i$ 에 대해 더하면 열의 합이 $1$ 이어서 나온다. 4 에서 1 은 $\varphi(t)=\max(t-a,0)$ 에 $a=y^\downarrow_k$ 를 넣으면 다음이 되어 나온다. 합의 등식은 $\varphi(t)=t$ 와 $\varphi(t)=-t$ 에서 나온다.

$$
\sum_{i\le k}x^\downarrow_i-ka\le\sum_i\varphi(x_i)\le\sum_i\varphi(y_i)=\sum_{i\le k}y^\downarrow_i-ka
$$

## 순열의 볼록 결합

$x\prec y$ 는 $x$ 가 $y$ 의 성분을 재배열한 벡터 $n!$ 개의 볼록 결합이라는 것과 동치다. R. Rado 가 1952 년에 증명했다[^2]. 3 의 $B$ 를 [Birkhoff–von Neumann 정리](birkhoff-von-neumann-theorem.md)로 $\sum_\sigma\lambda_\sigma P_\sigma$ 로 쓰면 $x=\sum_\sigma\lambda_\sigma P_\sigma y$ 이고, $P_\sigma y$ 는 $y$ 의 재배열이다.

## Schur–Ostrowski 판정법

대칭이고 미분가능한 함수 $f$ 가 Schur 볼록인 것은 모든 $x$ 와 $i,j$ 에서 다음이 성립하는 것과 동치다[^3]. 이것을 Schur–Ostrowski 판정법(Schur–Ostrowski criterion)이라 한다.

$$
(x_i-x_j)\Big(\frac{\partial f}{\partial x_i}-\frac{\partial f}{\partial x_j}\Big)\ge 0
$$

$f=\sum_kx_k^2$ 에서 좌변은 $2(x_i-x_j)^2\ge 0$ 이다.

## Schur 정리

Hermite 행렬의 대각 성분의 벡터 $d$ 는 고윳값의 벡터 $\lambda$ 에 다수화된다. 이것을 Schur 정리(Schur's theorem)라 한다[^3]. [스펙트럼 정리](spectral-theorem.md)로 $A=U\mathrm{diag}(\lambda)U^\ast$ 라 하면 $a_{ii}=\sum_j\vert u_{ij}\vert^2\lambda_j$ 이다. $U$ 가 유니터리이므로 $b_{ij}=\vert u_{ij}\vert^2$ 은 이중 확률 행렬이고, $d=B\lambda$ 이다. 역으로 $d\prec\lambda$ 이면 대각 성분이 $d$ 이고 고윳값이 $\lambda$ 인 실대칭 행렬이 존재한다(Horn)[^3].

# 활용

- [Shannon 엔트로피](entropy.md). $-\sum_ip_i\log p_i$ 는 Schur 오목 함수이므로 확률벡터 가운데 균등분포 $(1/n,\dots,1/n)$ 에서 가장 크다. 균등분포는 모든 확률벡터에 다수화된다.
- [양자 얽힘](quantum-entanglement.md). 순수 상태 사이의 국소 조작 변환이 가능한지는 Schmidt 계수의 제곱이 이루는 확률벡터 사이의 다수화로 판정된다(Nielsen 정리).
- 부등식의 증명. 4 에 특정한 볼록함수를 넣으면 Karamata 부등식(Karamata's inequality)이 되고, 성분이 양수인 $x$ 와 평균 $\bar x$ 에 대해 $(\bar x,\dots,\bar x)\prec x$ 에 $\varphi=-\log$ 를 넣으면 산술-기하 평균 부등식이 나온다.
- 고윳값 부등식. Schur 정리와 그 일반화가 행렬의 대각 성분, 특이값, 고윳값 사이의 부등식을 다수화로 적는다[^3].

[^1]: G. H. Hardy, J. E. Littlewood, G. Pólya, *Inequalities*, Cambridge University Press, 1934, §2.18–2.20.
[^2]: R. Rado, "An inequality", Journal of the London Mathematical Society 27 (1952), 1–6.
[^3]: A. W. Marshall, I. Olkin, B. C. Arnold, *Inequalities: Theory of Majorization and Its Applications*, 2nd ed., Springer, 2011.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [Birkhoff–von Neumann 정리](birkhoff-von-neumann-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #linear_algebra #optimization
