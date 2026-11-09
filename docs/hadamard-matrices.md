# Hadamard 행렬

# 개요

**Hadamard 행렬(Hadamard matrix)** 은 성분이 모두 $1$ 또는 $-1$ 이고 서로 다른 두 행이 직교하는 정사각[행렬](matrices.md)이다. 양팔 저울로 물건 네 개의 무게를 잴 때, 하나씩 따로 재는 대신 매번 네 개를 모두 두 접시에 나누어 올리고 네 번 재면 각 무게의 오차 분산이 $1/4$ 로 준다. 어느 물건을 어느 접시에 올릴지를 $\pm 1$ 로 적은 표가 Hadamard 행렬이고, 행이 직교하므로 네 측정값에서 각 무게를 더하기와 빼기만으로 계산한다.

# 직관

무게 $w_1,\dots,w_4$ 를 양팔 저울로 잰다. 측정 하나는 왼쪽 접시의 무게에서 오른쪽 접시의 무게를 뺀 값이고, 매번 서로 독립인 오차가 분산 $\sigma^2$ 로 붙는다. 하나씩 따로 재면 측정 네 번에 각 무게의 분산이 $\sigma^2$ 이다.

대신 다음 표대로 네 번 잰다. $1$ 은 왼쪽 접시, $-1$ 은 오른쪽 접시다.

$$
H=\begin{pmatrix}1&1&1&1\cr 1&-1&1&-1\cr 1&1&-1&-1\cr 1&-1&-1&1\end{pmatrix}
$$

측정값은 $y=Hw+e$ 다. 서로 다른 두 행의 성분별 곱을 더하면 $0$ 이므로 $H^{\mathsf T}H=4I$ 이고, $\hat w=\frac14H^{\mathsf T}y$ 로 두면 $\hat w=w+\frac14H^{\mathsf T}e$ 다. $\hat w_1$ 의 오차는 $\frac14(e_1+e_2+e_3+e_4)$ 이고 분산이 $4\sigma^2/16=\sigma^2/4$ 다. 다른 무게도 같다.

이 계산에 쓴 것은 성분이 $\pm 1$ 이라는 것과 행이 서로 직교한다는 것 둘뿐이다. 두 조건을 만족하는 행렬이 Hadamard 행렬이다.

# 정의

성분이 $\pm 1$ 인 $n\times n$ 행렬 $H$ 가

$$
HH^{\mathsf T}=nI
$$

를 만족하면 $H$ 를 차수 $n$ 의 **Hadamard 행렬** 이라 한다. 직관 절의 $H$ 는 차수 $4$ 다.

$H$ 의 행이나 열을 바꾸어 놓거나 행이나 열에 $-1$ 을 곱해도 Hadamard 행렬이다. 이렇게 첫 행과 첫 열을 모두 $1$ 로 만든 꼴을 정규화된(normalized) Hadamard 행렬이라 한다. 직관 절의 $H$ 는 정규화되어 있다.

# 성질

## 차수의 조건

차수 $n$ 의 Hadamard 행렬이 있으면 $n=1$, $n=2$ 이거나 $n$ 이 $4$ 의 배수다.

증명의 요지. $n\ge 3$ 이고 정규화되어 있다고 하자. 둘째 행과 셋째 행의 부호 쌍이 $(+,+)$, $(+,-)$, $(-,+)$, $(-,-)$ 인 열의 수를 $a,b,c,d$ 라 하면 $a+b+c+d=n$ 이다. 첫 행이 모두 $1$ 이므로 첫 행과 둘째 행의 직교에서 $a+b=c+d$, 첫 행과 셋째 행에서 $a+c=b+d$, 둘째와 셋째 행에서 $a+d=b+c$ 다. 네 식을 풀면 $a=b=c=d=n/4$ 다.

## Hadamard 부등식

성분의 절댓값이 $1$ 이하인 $n\times n$ 실행렬 $M$ 은

$$
\vert\det M\vert\le n^{n/2}
$$

를 만족하고, 등호는 $M$ 이 Hadamard 행렬일 때만 성립한다[^1].

증명의 요지. 행을 $m_1,\dots,m_n$ 이라 하자. 행에 Gram–Schmidt 과정(Gram–Schmidt process)을 쓰면 [행렬식](determinants.md)의 절댓값은 각 행에서 앞 행들의 성분을 뺀 나머지 길이의 곱이고, 그 길이는 $\Vert m_i\Vert$ 이하다. 그래서 $\vert\det M\vert\le\prod_i\Vert m_i\Vert$ 다. $\Vert m_i\Vert\le\sqrt n$ 이므로 상한이 나온다.

등호에는 행이 서로 직교하고 모든 성분의 절댓값이 $1$ 이어야 한다. 직관 절의 $H$ 는 $\vert\det H\vert=16=4^{4/2}$ 이다.

## Sylvester 구성

$H$ 와 $K$ 가 Hadamard 행렬이면 [Kronecker 곱](kronecker-product.md) $H\otimes K$ 도 Hadamard 행렬이다. $H$, $K$ 의 차수를 $n$, $m$ 이라 하면 곱셈 규칙으로 $(H\otimes K)(H\otimes K)^{\mathsf T}=HH^{\mathsf T}\otimes KK^{\mathsf T}=nI\otimes mI=nmI$ 다. $H_2=\begin{pmatrix}1&1\cr 1&-1\end{pmatrix}$ 의 거듭제곱 $H_2\otimes\cdots\otimes H_2$ 가 모든 차수 $2^k$ 를 준다. 직관 절의 $H$ 는 $H_2\otimes H_2$ 다.

## Paley 구성

$q$ 가 $4$ 로 나눈 나머지가 $3$ 인 소수의 거듭제곱이라 하자. [유한체](finite-fields.md) $\mathbb F_q$ 의 원소 $a$ 에 대해 $\chi(a)$ 를 $a$ 가 $0$ 이 아닌 제곱수이면 $1$, 제곱수가 아니면 $-1$, $a=0$ 이면 $0$ 으로 둔다. 원소를 $a_1,\dots,a_q$ 로 번호를 매기고 $Q\_{ij}=\chi(a_i-a_j)$ 로 두면

$$
H=I+\begin{pmatrix}0&\mathbf 1^{\mathsf T}\cr -\mathbf 1&Q\end{pmatrix}
$$

는 차수 $q+1$ 의 Hadamard 행렬이다[^2]. $\chi(-1)=-1$ 이라 $Q$ 는 반대칭이고, $QQ^{\mathsf T}=qI-J$, $Q\mathbf 1=0$ 인 것에서 확인된다. $J$ 는 성분이 모두 $1$ 인 행렬이다. $q=3$ 이면 차수 $4$, $q=11$ 이면 차수 $12$ 가 나온다.

$12$ 는 $2$ 의 거듭제곱이 아니어서 Sylvester 구성으로는 얻지 못한다. $q\equiv 1\pmod 4$ 이면 같은 $Q$ 로 [회의 행렬](conference-matrices.md)을 만들어 차수 $2(q+1)$ 을 얻는다.

## 조합적 설계와의 대응

차수 $n=4t$ 의 정규화된 Hadamard 행렬에서 첫 행과 첫 열을 지우고, 남은 각 행에서 $1$ 이 놓인 열 번호를 모아 블록으로 삼는다. 이 블록들은 점 $4t-1$ 개 위에서 블록의 크기가 $2t-1$ 이고 어느 두 점도 정확히 $t-1$ 개의 블록에 함께 들어가는 [조합적 설계](block-designs.md)다[^1]. 차수 $8$ 이면 $t=2$ 이고, 점 $7$ 개, 블록 크기 $3$, 두 점이 한 블록에만 함께 들어가는 Fano 평면이 나온다. 이 대응은 거꾸로도 성립한다.

## Hadamard 추측

$4$ 의 배수인 모든 $n$ 에 대해 차수 $n$ 의 Hadamard 행렬이 있다는 진술을 **Hadamard 추측(Hadamard conjecture)** 이라 한다. 2005 년에 차수 $428$ 이 구성되었고, 그 결과 존재가 알려지지 않은 가장 작은 차수는 $668$ 이다[^3].

# 활용

- 무게 측정 설계(weighing design). 직관 절의 계산이 일반 $n$ 에서도 성립해, 차수 $n$ 의 Hadamard 행렬로 물건 $n$ 개를 $n$ 번 재면 각 무게의 분산이 $\sigma^2/n$ 이다. 성분이 $\pm 1$ 인 측정 행렬 가운데 이 분산이 가장 작다[^4].
- Walsh–Hadamard 변환(Walsh–Hadamard transform). 길이 $2^k$ 인 벡터에 $H_2\otimes\cdots\otimes H_2$ 를 곱하는 변환이다. Kronecker 곱의 인수마다 한 번씩 적용하면 $O(k2^k)$ 번의 덧셈과 뺄셈으로 계산된다. [양자 회로](quantum-circuits.md)에서 큐비트마다 Hadamard 게이트를 건 것이 이 변환을 $2^{-k/2}$ 배 한 것이다.
- [오류 정정 부호](error-correcting-codes.md). 차수 $n$ 의 Hadamard 행렬의 행과 그 부호를 바꾼 행 $2n$ 개를 부호어로 쓰면, 두 부호어는 $n/2$ 자리 이상에서 다르다. 이것이 Hadamard 부호(Hadamard code)다. 차수 $2^m$ 의 Sylvester 행렬에서 얻은 Hadamard 부호가 [Reed–Muller 부호](reed-muller-codes.md) $\mathrm{RM}(1,m)$ 이다.

[^1]: J. H. van Lint, R. M. Wilson, *A Course in Combinatorics*, 2nd ed., Cambridge University Press, 2001. 18 장.
[^2]: R. E. A. C. Paley, "On orthogonal matrices", *Journal of Mathematics and Physics* 12 (1933), 311–320.
[^3]: H. Kharaghani, B. Tayfeh-Rezaie, "A Hadamard matrix of order 428", *Journal of Combinatorial Designs* 13 (2005), 435–440.
[^4]: H. Hotelling, "Some improvements in weighing and other experimental techniques", *Annals of Mathematical Statistics* 15 (1944), 297–306.

# 연관 문서

## 선수지식

- [Kronecker 곱](kronecker-product.md)
- [조합적 설계](block-designs.md)

## 더 알아보기

- [회의 행렬](conference-matrices.md)
- [Reed–Muller 부호](reed-muller-codes.md)

#combinatorics #linear_algebra #statistics #computation
