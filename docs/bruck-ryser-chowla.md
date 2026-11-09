# Bruck–Ryser–Chowla 정리

# 개요

**Bruck–Ryser–Chowla 정리(Bruck–Ryser–Chowla theorem)** 는 대칭 설계가 존재하려면 그 매개변수가 만족해야 하는 정수론적 조건을 주는 정리다. 원소 $22$ 개와 블록 $22$ 개로, 블록마다 원소가 $7$ 개이고 어느 두 원소도 정확히 두 블록에 함께 들어 있는 배치를 만들려고 하면, 원소와 블록의 쌍을 세는 조건은 통과하지만 실제로 만들 수는 없다. 이 정리는 결합행렬의 행렬식이 정수의 제곱이어야 한다는 것과 [이차형식](quadratic-forms.md)의 계산으로 그런 매개변수를 걸러 낸다.

# 직관

[조합적 설계](block-designs.md) 문서의 대칭 설계에서 매개변수 $(v,k,\lambda)=(22,7,2)$ 는 $k(k-1)=42=\lambda(v-1)$ 을 만족한다. 원소를 행, 블록을 열로 두고 원소가 블록에 들어 있으면 $1$, 아니면 $0$ 인 $22\times 22$ 결합행렬 $N$ 을 만든다고 하자. $NN^{\mathsf T}$ 의 $(x,y)$ 성분은 $x$ 와 $y$ 를 함께 담은 블록 수이므로 대각에서 $7$, 나머지에서 $2$ 다. $J$ 를 성분이 모두 $1$ 인 [행렬](matrices.md)이라 하면

$$
NN^{\mathsf T}=5I+2J
$$

이다.

이 행렬의 [행렬식](determinants.md)을 구한다. 성분이 모두 $1$ 인 벡터에서 $5I+2J$ 의 값은 $5+2\cdot 22=49$ 배이고, 성분의 합이 $0$ 인 벡터 $21$ 차원에서는 $5$ 배다. 따라서 $\det(NN^{\mathsf T})=49\cdot 5^{21}$ 이다.

한편 $\det(NN^{\mathsf T})=(\det N)^2$ 이고 $\det N$ 은 정수다. $49\cdot 5^{21}$ 은 $5$ 의 지수가 홀수라 정수의 제곱이 아니므로 그런 $N$ 은 없다.

# 정의

원소 $v$ 개, 블록 $v$ 개로, 블록마다 원소가 $k$ 개이고 서로 다른 두 원소를 함께 담은 블록이 정확히 $\lambda$ 개인 설계를 대칭 $(v,k,\lambda)$ 설계라 한다. $0\lt\lambda\lt k\lt v-1$ 로 둔다.

$n=k-\lambda$ 를 설계의 **차수(order)** 라 한다. 직관 절의 매개변수는 차수 $5$ 다. 차수 $n$ 인 [유한 사영평면](finite-projective-planes.md)은 대칭 $(n^2+n+1,n+1,1)$ 설계이고 차수가 $n$ 이다.

# 성질

## 정리의 진술

대칭 $(v,k,\lambda)$ 설계가 있으면 다음이 성립한다[^1].

- $v$ 가 짝수이면 $k-\lambda$ 는 정수의 제곱이다.
- $v$ 가 홀수이면 방정식
  $$
  x^2=(k-\lambda)y^2+(-1)^{(v-1)/2}\lambda z^2
  $$
  이 모두 $0$ 은 아닌 정수해 $(x,y,z)$ 를 갖는다.

## 짝수 경우의 증명

결합행렬은 $NN^{\mathsf T}=(k-\lambda)I+\lambda J$ 를 만족한다. 직관 절과 같이 [고윳값](eigenvalues.md)은 $k-\lambda+\lambda v$ 가 한 번, $k-\lambda$ 가 $v-1$ 번이다. 매개변수의 관계 $\lambda(v-1)=k(k-1)$ 에서 $k-\lambda+\lambda v=k^2$ 이므로

$$
(\det N)^2=k^2(k-\lambda)^{v-1}
$$

이다. $v-1$ 이 홀수이므로 $k-\lambda$ 가 제곱수여야 한다.

## 홀수 경우의 증명

$NN^{\mathsf T}=(k-\lambda)I+\lambda J$ 는 유리수 계수의 이차형식

$$
y_1^2+\cdots+y_v^2,\qquad (k-\lambda)(x_1^2+\cdots+x_v^2)+\lambda(x_1+\cdots+x_v)^2
$$

이 $y=N^{\mathsf T}x$ 로 같아진다는 뜻이다[^1]. [Lagrange 네 제곱수 정리](four-squares-theorem.md)로 $k-\lambda=a_1^2+a_2^2+a_3^2+a_4^2$ 로 쓰고, Euler 의 네 제곱수 항등식으로 변수 네 개씩 $(k-\lambda)(x_1^2+\cdots+x_4^2)$ 를 $w_1^2+\cdots+w_4^2$ 로 바꾼다. 그 뒤 $y_i$ 를 $w_i$ 나 $-w_i$ 와 같아지도록 유리수 범위에서 차례로 고르면, 남은 변수 하나에 대한 식에서 위의 방정식이 나온다.

## 사영평면

차수 $n$ 의 사영평면은 $v=n^2+n+1$ 이 홀수이고 $(v-1)/2=n(n+1)/2$ 다. $n\equiv 1,2\pmod 4$ 이면 이 값이 홀수여서 방정식이 $x^2+z^2=ny^2$ 이다. 이 식에 $y\ne 0$ 인 정수해가 있는 것은 $n$ 이 두 정수의 제곱의 합인 것과 동치이므로[^1], $n\equiv 1,2\pmod 4$ 인 차수 $n$ 의 사영평면이 있으면 $n$ 은 두 제곱수의 합이다. $n=6$ 은 $6\equiv 2$ 이고 두 제곱수의 합이 아니므로 차수 $6$ 의 사영평면은 없다. $n=10=1+9$ 는 이 조건을 통과하지만 계산기 탐색으로 없음이 증명되었다[^2].

## 홀수 경우의 예

대칭 $(29,8,2)$ 설계는 $k(k-1)=56=\lambda(v-1)$ 을 만족한다. $(v-1)/2=14$ 가 짝수이므로 방정식은 $x^2=6y^2+2z^2$ 이다.

공약수가 없는 해가 있다고 하자. 법 $3$ 으로 $x^2\equiv 2z^2$ 이고 제곱수의 나머지는 $0,1$ 뿐이므로 $3\mid x$, $3\mid z$ 다. 그러면 $9\mid 6y^2$ 이어서 $3\mid y$ 가 되어 모순이다. 따라서 대칭 $(29,8,2)$ 설계는 없다.

# 활용

- 사영평면의 차수. 차수 $6,14,21,22$ 의 사영평면이 이 정리로 배제된다. 유한 사영평면 문서의 존재하지 않는 차수 절이 이 결과다.
- Hadamard 설계. 차수 $4t$ 의 [Hadamard 행렬](hadamard-matrices.md)은 대칭 $(4t-1,2t-1,t-1)$ 설계와 대응한다. $v=4t-1$ 이 홀수이고 방정식이 $x^2=ty^2+(-1)^{2t-1}(t-1)z^2$, 곧 $x^2+(t-1)z^2=ty^2$ 이어서 $(x,y,z)=(1,1,1)$ 이 언제나 해이므로 이 정리는 Hadamard 행렬의 차수를 제한하지 않는다.
- [차분집합](difference-sets.md). $(v,k,\lambda)$ 차분집합의 평행이동이 대칭 설계를 이루므로, 이 정리를 통과하지 못하는 매개변수의 차분집합은 없다.

[^1]: J. H. van Lint, R. M. Wilson, *A Course in Combinatorics*, 2nd ed., Cambridge University Press, 2001. 19 장.
[^2]: C. W. H. Lam, L. Thiel, S. Swiercz, "The nonexistence of finite projective planes of order 10", *Canadian Journal of Mathematics* 41 (1989), 1117–1123.

# 연관 문서

## 선수지식

- [조합적 설계](block-designs.md)
- [Lagrange 네 제곱수 정리](four-squares-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory #linear_algebra
