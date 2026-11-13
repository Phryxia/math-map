# Schur–Horn 정리

# 개요

**Schur–Horn 정리(Schur–Horn theorem)** 는 고윳값이 정해진 실대칭 행렬의 대각 성분으로 나올 수 있는 벡터가, 고윳값의 벡터에 다수화되는 벡터와 정확히 같다는 정리다. 고윳값이 $3$ 과 $1$ 인 $2\times 2$ 실대칭 행렬은 기저를 돌릴 때마다 대각 성분이 바뀌는데, 대각 성분 $(d_1,d_2)$ 로 어떤 값이 나올 수 있는지 묻는다. 답은 고윳값 벡터의 성분을 재배열한 점들의 볼록 껍질이다.

# 직관

$R_\theta$ 를 각 $\theta$ 만큼의 회전행렬이라 하고 $A=R_\theta\thinspace\mathrm{diag}(3,1)R_\theta^T$ 를 계산하면 대각 성분은 다음과 같다.

$$
d_1=3\cos^2\theta+\sin^2\theta=1+2\cos^2\theta,\qquad d_2=1+2\sin^2\theta
$$

$\theta$ 가 $0$ 에서 $\pi/2$ 까지 움직이면 $(d_1,d_2)$ 는 $(3,1)$ 에서 $(1,3)$ 까지 선분 위를 지나간다. 합은 언제나 $4$ 이고 $d_1$ 은 $1$ 과 $3$ 사이의 모든 값을 갖는다. 이 선분은 $(3,1)$ 과 그 재배열 $(1,3)$ 의 볼록 껍질이다.

고윳값이 $3,2,1$ 인 $3\times 3$ 실대칭 행렬로 바꾸면 대각 성분은 합이 $6$ 인 평면 위에 놓인다. 나올 수 있는 대각 성분 전체는 $(3,2,1)$ 의 재배열 여섯 개를 꼭짓점으로 하는 육각형이다. 가운데 점 $(2,2,2)$ 도 나오고, $(3,3,0)$ 은 나오지 않는다.

# 정의

## 순열 다면체

$\lambda\in\mathbb R^n$ 에 대해, $\lambda$ 의 성분을 재배열한 벡터 $n!$ 개의 볼록 껍질을 **순열 다면체(permutohedron)** $\Pi(\lambda)$ 라 한다. 직관 절의 선분은 $\Pi(3,1)$ 이고 육각형은 $\Pi(3,2,1)$ 이다.

[다수화](majorization.md) 문서의 Rado 의 결과에 따라 $\Pi(\lambda)=\lbrace d:d\prec\lambda\rbrace$ 이다.

## 정리

실수 $\lambda_1,\dots,\lambda_n$ 과 $d\in\mathbb R^n$ 에 대해 다음은 동치다.

1. 고윳값이 $\lambda_1,\dots,\lambda_n$ 이고 대각 성분이 $d_1,\dots,d_n$ 인 실대칭 행렬이 존재한다.
2. $d\prec\lambda$.

1 에서 2 는 I. Schur 가 1923 년에[^1], 2 에서 1 은 A. Horn 이 1954 년에 증명했다[^2]. 직관 절의 $(3,3,0)$ 은 첫 성분 $3$ 까지는 $(3,2,1)$ 과 같지만 앞 두 성분의 합이 $6\gt 5$ 여서 $(3,2,1)$ 에 다수화되지 않는다.

# 성질

## Schur 의 방향

[스펙트럼 정리](spectral-theorem.md)로 $A=U\mathrm{diag}(\lambda)U^T$, $U$ 는 직교행렬로 쓴다. 대각 성분은 다음과 같다.

$$
a_{ii}=\sum_ju_{ij}^2\lambda_j
$$

$U$ 의 행과 열이 단위벡터이므로 $b_{ij}=u_{ij}^2$ 은 이중 확률 행렬이고 $d=B\lambda$ 다. Hardy–Littlewood–Pólya 정리(Hardy–Littlewood–Pólya theorem)에 따라 $d\prec\lambda$ 이다. 이런 꼴의 이중 확률 행렬을 **직교 확률 행렬(orthostochastic matrix)** 이라 한다. 직관 절의 $2\times 2$ 경우는 $B$ 의 성분이 $\cos^2\theta$ 와 $\sin^2\theta$ 다.

## Horn 의 방향

증명의 요지. $n$ 에 대한 귀납법이다. $d\prec\lambda$ 이고 $\lambda_1\ge\dots\ge\lambda_n$ 이면 $\lambda_k\ge d_n\ge\lambda_{k+1}$ 인 $k$ 를 잡는다. $\mathrm{diag}(\lambda_k,\lambda_{k+1})$ 을 직관 절처럼 돌려 한 대각 성분을 $d_n$ 으로 만들면, 남은 대각 성분과 나머지 고윳값으로 된 $n-1$ 개의 벡터가 $(d_1,\dots,d_{n-1})$ 을 다수화한다. 귀납 가정으로 그 크기 $n-1$ 의 행렬을 만들고 두 회전을 합친다[^2][^3].

모든 이중 확률 행렬이 직교 확률 행렬은 아니다. 그래도 $d\prec\lambda$ 이면 $d=B\lambda$ 인 직교 확률 행렬 $B$ 가 존재한다는 것이 이 방향의 내용이다.

## Ky Fan 최대 원리

실대칭 행렬 $A$ 의 고윳값을 $\lambda_1\ge\dots\ge\lambda_n$ 이라 하면 $1\le k\le n$ 에 대해 다음이 성립한다[^4]. 이것을 Ky Fan 최대 원리(Ky Fan maximum principle)라 한다.

$$
\sum_{i=1}^k\lambda_i=\max\Big\lbrace\sum_{i=1}^k\langle Av_i,v_i\rangle:v_1,\dots,v_k\text{ 는 정규직교}\Big\rbrace
$$

$v_1,\dots,v_k$ 를 정규직교기저로 늘리면 $\langle Av_i,v_i\rangle$ 은 그 기저에서 $A$ 의 대각 성분이므로, Schur 의 방향에 따라 큰 것 $k$ 개의 합이 $\sum_{i\le k}\lambda_i$ 이하다. 고유벡터를 고르면 등호다. $k=1$ 이면 [Rayleigh 몫](rayleigh-quotient.md)의 최댓값이 가장 큰 고윳값이라는 것이다.

## 볼록성 정리

Schur–Horn 정리는 대각 성분을 내는 사상이 고윳값이 $\lambda$ 인 행렬 전체를 $\Pi(\lambda)$ 위로 보낸다는 것이다. B. Kostant 는 이것을 콤팩트 [Lie 군](lie-groups.md)의 수반 궤도로 넓혔고[^5], M. Atiyah 와 V. Guillemin, S. Sternberg 는 원환 작용의 [모멘트 사상](moment-map.md)의 상이 볼록 다면체라는 정리로 넓혔다. Schur–Horn 정리는 유니터리 군의 수반 궤도에 대각행렬의 원환이 작용하는 경우다.

# 활용

- 고윳값 부등식. Ky Fan 최대 원리에서 $A+B$ 의 큰 고윳값 $k$ 개의 합이 $A$ 의 것과 $B$ 의 것의 합 이하라는 부등식이 나온다. 좌변의 최댓값을 주는 $v_i$ 에서 $A$ 와 $B$ 를 따로 누르면 된다.
- [밀도 행렬](density-matrix.md). 어떤 정규직교기저로 측정한 결과의 확률벡터는 밀도 행렬의 그 기저에서의 대각 성분이고, 고윳값에 다수화된다. [Shannon 엔트로피](entropy.md)가 Schur 오목이므로 측정 결과의 엔트로피는 von Neumann 엔트로피 이상이다.
- 길이가 정해진 틀. 대각 성분이 $d$ 인 양의 준정부호 행렬이 존재하는 것으로부터, 정해진 길이의 벡터들로 정해진 연산자를 $\sum_iv_iv_i^T$ 꼴로 쓰는 문제가 다수화로 판정된다[^3].

[^1]: I. Schur, "Über eine Klasse von Mittelbildungen mit Anwendungen auf die Determinantentheorie", Sitzungsberichte der Berliner Mathematischen Gesellschaft 22 (1923), 9–20.
[^2]: A. Horn, "Doubly stochastic matrices and the diagonal of a rotation matrix", American Journal of Mathematics 76 (1954), 620–630.
[^3]: A. W. Marshall, I. Olkin, B. C. Arnold, *Inequalities: Theory of Majorization and Its Applications*, 2nd ed., Springer, 2011, Chapter 9.
[^4]: K. Fan, "On a theorem of Weyl concerning eigenvalues of linear transformations I", Proceedings of the National Academy of Sciences 35 (1949), 652–655.
[^5]: B. Kostant, "On convexity, the Weyl group and the Iwasawa decomposition", Annales scientifiques de l'École Normale Supérieure 6 (1973), 413–455.

# 연관 문서

## 선수지식

- [다수화](majorization.md)
- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #linear_algebra #theorem
