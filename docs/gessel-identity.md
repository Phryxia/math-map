# Gessel 항등식

# 개요

**Gessel 항등식(Gessel's identity)** 은 긴 오름차순이 들어 있지 않은 순열의 수를 행렬식 하나로 적는 공식이다. 카드 $n$ 장을 늘어놓는 순서 가운데, 순서를 지키며 고른 오름차순 카드가 $k$ 장을 넘지 않는 것은 몇 가지인지 묻는다. Gessel 항등식은 그 수들을 모은 생성함수가 변형 Bessel 함수로 채운 $k\times k$ 행렬의 행렬식과 같다고 적어, 순열을 하나씩 세는 대신 행렬식을 계산하게 한다.

# 직관

카드 $1,2,3$ 의 순서 여섯 가지 가운데 오름차순으로 세 장을 고를 수 있는 것은 $123$ 하나다. 그래서 가장 긴 증가 부분수열이 $2$ 이하인 순서는 $5$ 가지다. 카드가 $1,2,3,4$ 장일 때 같은 수는 $1,2,5,14$ 로 [Catalan 수](catalan-numbers.md)이고, 가장 긴 증가 부분수열이 $1$ 이하인 순서는 내림차순 하나뿐이다.

$k$ 가 $3$ 이상이면 이런 닫힌 꼴이 없다. 대신 [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)이 순열을 같은 모양의 표준 Young 대각표 쌍으로 보내고, 가장 긴 증가 부분수열의 길이가 모양의 첫 행 길이가 된다. 그러면 셀 것은 첫 행이 $k$ 이하인 모양마다 대각표 수의 제곱을 더한 값이다.

모양 $\lambda$ 의 대각표 수 $f^\lambda$ 는 행렬식으로 적힌다. 제곱한 행렬식을 모양에 대해 더하는 일은 [Cauchy–Binet 공식](cauchy-binet-formula.md)이 행렬 곱의 행렬식 하나로 바꾼다. 곱한 행렬의 성분이 변형 Bessel 함수의 급수가 된다.

# 정의

## 진술

$u_k(n)$ 을 가장 긴 증가 부분수열의 길이가 $k$ 이하인 $S_n$ 의 순열의 수라 하자. 그러면 다음이 성립한다.

$$
\sum_{n\ge 0}u_k(n)\frac{x^{2n}}{(n!)^2}=\det\bigl\lbrack I_{i-j}(2x)\bigr\rbrack_{i,j=1}^{k}
$$

$I_m$ 은 다음 급수로 정의되는 정수 차수의 [변형 Bessel 함수](bessel-functions.md)이고, $I_{-m}=I_m$ 이다.

$$
I_m(2x)=\sum_{r\ge 0}\frac{x^{2r+m}}{r!\thinspace(r+m)!}\qquad(m\ge 0)
$$

오른쪽 행렬은 $(i,j)$ 성분이 $i-j$ 에만 의존하므로 [Toeplitz 행렬](toeplitz-matrices.md)이다. 그 기호는 $e^{2x\cos\phi}$ 이고, $I_m(2x)$ 가 이 함수의 $m$ 번째 Fourier 계수다.

## 작은 경우의 확인

$k=1$ 이면 오른쪽은 $I_0(2x)=\sum_r x^{2r}/(r!)^2$ 이고, $u_1(n)=1$ 과 맞는다.

$k=2$ 이면 오른쪽은 $I_0(2x)^2-I_1(2x)^2$ 이다. 두 급수의 앞부분은 다음과 같다.

$$
I_0(2x)=1+x^2+\frac{x^4}{4}+\frac{x^6}{36}+\cdots,\qquad I_1(2x)=x+\frac{x^3}{2}+\frac{x^5}{12}+\cdots
$$

이것을 넣어 $x^6$ 의 계수를 구하면 다음과 같다.

$$
\Bigl(\frac{2}{36}+\frac{2}{4}\Bigr)-\Bigl(\frac{2}{12}+\frac14\Bigr)=\frac{5}{36}=\frac{u_2(3)}{(3!)^2}
$$

직관 절의 $5$ 가 나온다.

# 성질

## 증명의 요지

Schensted 정리(Schensted's theorem)에 따라 $\sigma$ 를 Robinson–Schensted–Knuth 대응으로 보낸 모양 $\lambda$ 의 첫 열 길이가 가장 긴 감소 부분수열의 길이다. 순열을 뒤집으면 증가와 감소가 바뀌므로 $u_k(n)$ 은 행이 $k$ 개 이하인 $\lambda\vdash n$ 에 대한 $(f^\lambda)^2$ 의 합이다.

행이 $k$ 개 이하인 $\lambda$ 에 대해 Aitken 공식(Aitken's formula)이 다음을 준다.[^1] 행이 모자라면 $\lambda_i=0$ 으로 채운다.

$$
f^\lambda=n!\thinspace\det\Bigl\lbrack\frac{1}{(\lambda_i-i+j)!}\Bigr\rbrack_{i,j=1}^{k}
$$

$\mu_i=\lambda_i+k-i$ 로 두면 $\mu_1\gt\mu_2\gt\cdots\gt\mu_k\ge 0$ 이고, 행이 $k$ 개 이하인 $\lambda$ 와 음이 아닌 정수의 $k$ 원소 부분집합이 일대일로 대응한다. 행이 $j$, 열이 음이 아닌 정수 $m$ 인 행렬 $A$ 를 $A_{jm}=x^{m-k+j}/(m-k+j)!$ 로 둔다. 지수가 음수인 성분은 $0$ 이다. 그러면 $\lambda$ 에 대응하는 $k$ 개 열로 이룬 소행렬의 행렬식이 $x^nf^\lambda/n!$ 이다.

Cauchy–Binet 공식으로 소행렬식의 제곱을 모든 $k$ 원소 부분집합에 대해 더한 값은 $\det(AA^{\mathsf T})$ 다. $r=m-k+j$ 로 바꾸면 $AA^{\mathsf T}$ 의 성분이 다음과 같으므로 $\det(AA^{\mathsf T})$ 가 항등식의 오른쪽이다.[^2]

$$
(AA^{\mathsf T})\_{jj'}=\sum_{r\ge 0}\frac{x^{2r+j'-j}}{r!\thinspace(r+j'-j)!}=I_{j'-j}(2x)
$$

## 확률로 쓴 꼴

카드 수를 평균이 $\theta^2$ 인 [Poisson 분포](poisson-distribution.md)에서 뽑은 $N$ 으로 두면, $N=n$ 일 확률 $e^{-\theta^2}\theta^{2n}/n!$ 과 균등한 순열에서의 확률 $u_k(n)/n!$ 을 곱해 더한 것이 왼쪽이다. 따라서 다음이 성립한다.

$$
P(\ell_N\le k)=e^{-\theta^2}\det\bigl\lbrack I_{i-j}(2\theta)\bigr\rbrack_{i,j=1}^{k}
$$

## P 재귀성

$k$ 를 고정하면 $u_k(n)$ 은 $n$ 에 대한 다항식 계수를 갖는 선형 점화식을 만족한다. 이런 수열을 **P 재귀적(P-recursive)** 이라 한다. Gessel 이 이 항등식을 세운 목적이 이것이다. 행렬식의 성분이 모두 다항식 계수 선형 미분방정식의 해이므로 행렬식도 그런 미분방정식을 만족하고, 그 계수를 비교하면 점화식이 나온다.[^2]

# 활용

- [Baik–Deift–Johansson 정리](baik-deift-johansson.md). 확률로 쓴 꼴의 Toeplitz 행렬식을 $k=2\theta+x\theta^{1/3}$ 에서 점근 계산해 가장 긴 증가 부분수열의 요동이 [Tracy–Widom 분포](tracy-widom.md)를 따름을 보인다.
- 패턴 회피 순열의 셈. 가장 긴 증가 부분수열이 $k$ 이하인 것은 $12\cdots(k+1)$ 꼴의 패턴을 피하는 것과 같다. $u_3(n)$ 의 점화식과 값이 이 항등식에서 계산된다.

[^1]: R. P. Stanley, *Enumerative Combinatorics*, Vol. 2, Cambridge University Press (1999), 7.16 절. Jacobi–Trudi 항등식을 지수 특수화해 얻는, 모양 λ 의 표준 Young 표 개수의 행렬식 공식.
[^2]: I. M. Gessel, Symmetric functions and P-recursiveness, *J. Combin. Theory Ser. A* **53** (1990), 257–285.

# 연관 문서

## 선수지식

- [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)
- [Cauchy–Binet 공식](cauchy-binet-formula.md)

## 더 알아보기

- [Baik–Deift–Johansson 정리](baik-deift-johansson.md)

#combinatorics #probability #analysis #theorem
