# Krawtchouk 다항식

# 개요

**Krawtchouk 다항식(Krawtchouk polynomial)** 은 길이 $n$ 인 이진 문자열 $x$ 와 무게가 $k$ 인 문자열 $z$ 의 내적의 부호 $(-1)^{x\cdot z}$ 를 모든 $z$ 에 대해 더한 값을 $x$ 의 무게의 다항식으로 쓴 것이다. 길이 $4$ 에서 $x=1100$ 이면 무게 $1$ 인 $z$ 네 개에서 부호가 $-1,-1,1,1$ 이라 합이 $0$ 이고, 이 값은 $x$ 의 무게 $2$ 로만 정해진다. 부호어의 무게 분포를 다루는 계산에서 이 합이 거듭 나오므로, 그 값을 표와 생성함수와 직교 관계로 정리해 둔다.

# 직관

$x$ 의 무게가 $i$ 이고 $z$ 의 무게가 $k$ 일 때, $z$ 의 $1$ 가운데 $x$ 의 $1$ 과 겹치는 것이 $j$ 개이면 $x\cdot z$ 는 $j$ 의 홀짝과 같다. 그런 $z$ 는 $x$ 의 $1$ 자리 $i$ 개에서 $j$ 개, $0$ 자리 $n-i$ 개에서 $k-j$ 개를 고른 수만큼 있다. 따라서 합은 $x$ 의 자리 배치와 관계없이

$$
K_k(i)=\sum\_{j=0}^{k}(-1)^j\binom{i}{j}\binom{n-i}{k-j}
$$

이다. $n=4$ 에서 표는 다음과 같다.

| k     | i = 0 | i = 1 | i = 2 | i = 3 | i = 4 |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 0     | 1   | 1   | 1   | 1   | 1   |
| 1     | 4   | 2   | 0   | −2  | −4  |
| 2     | 6   | 0   | −2  | 0   | 6   |
| 3     | 4   | −2  | 0   | 2   | −4  |
| 4     | 1   | −1  | 1   | −1  | 1   |

첫째 행과 둘째 행에 각 열의 문자열 수 $\binom 4i=1,4,6,4,1$ 을 곱해 더하면 $4+8+0-8-4=0$ 이다. 둘째 행과 셋째 행도 $24+0+0+0-24=0$ 이다. 서로 다른 두 행은 이 가중치로 직교한다.

# 정의

음이 아닌 정수 $n$ 과 $0\le k\le n$ 에 대해

$$
K_k(x)=\sum\_{j=0}^{k}(-1)^j\binom{x}{j}\binom{n-x}{k-j}
$$

를 **Krawtchouk 다항식** 이라 한다[^1]. $\binom xj=x(x-1)\cdots(x-j+1)/j!$ 이므로 $K_k$ 는 $x$ 의 $k$ 차 다항식이고 최고차 계수는 $(-2)^k/k!$ 다. 직관 절의 표는 $n=4$ 에서 $x=0,\dots,4$ 의 값이다. $K_0=1$, $K_1(x)=n-2x$ 다.

# 성질

## 생성함수

$$
\sum\_{k=0}^{n}K_k(i)z^k=(1-z)^i(1+z)^{n-i}
$$

이다[^1]. 무게 $i$ 인 $x$ 에 대해 $\sum_z(-1)^{x\cdot z}z^{\mathrm{wt}(z)}$ 를 좌표별로 나누면 $x_j=1$ 인 좌표마다 $1-z$, $x_j=0$ 인 좌표마다 $1+z$ 가 곱해진다. 이 [생성함수](generating-functions.md)에서 $i=2$, $n=4$ 이면 $(1-z)^2(1+z)^2=1-2z^2+z^4$ 이고, 표의 $i=2$ 열 $1,0,-2,0,1$ 과 같다.

## 직교 관계

$$
\sum\_{i=0}^{n}\binom ni K_k(i)K_l(i)=2^n\binom nk\delta\_{kl}
$$

이다[^1]. 좌변은 $\sum_x\sum\_{\mathrm{wt}(z)=k}\sum\_{\mathrm{wt}(w)=l}(-1)^{x\cdot(z+w)}$ 이고, $x$ 에 대한 합은 $z=w$ 일 때 $2^n$, 아니면 $0$ 이다. 따라서 $K_0,\dots,K_n$ 은 [이항분포](binomial-distribution.md)의 가중치 $\binom ni$ 에 대한 [직교다항식](orthogonal-polynomials.md)이다. 직관 절의 둘째 행 자신과의 합은 $16+16+0+16+16=64=2^4\binom41$ 이다.

## 대칭성과 역관계

$$
\binom ni K_k(i)=\binom nk K_i(k),\qquad \sum\_{k=0}^{n}K_k(i)K_j(k)=2^n\delta\_{ij}
$$

이다[^1]. 앞의 식은 무게 $i$ 인 $x$ 와 무게 $k$ 인 $z$ 의 쌍 전체에서 $(-1)^{x\cdot z}$ 를 더한 값을 $x$ 를 먼저 고정하거나 $z$ 를 먼저 고정해 센 것이다. 직관 절의 표에서 $\binom41K_3(1)=-8=\binom43K_1(3)$ 이다.

## 삼항 점화식

$$
(k+1)K\_{k+1}(x)=(n-2x)K_k(x)-(n-k+1)K\_{k-1}(x)
$$

이다[^1]. 생성함수 $G(z)=(1-z)^x(1+z)^{n-x}$ 가 $(1-z^2)G'(z)=\bigl((n-2x)-nz\bigr)G(z)$ 를 만족하는 데서 $z^k$ 의 계수를 비교해 얻는다. 직관 절의 $n=4$, $x=1$, $k=1$ 에서 $2K_2(1)=2\cdot 2-4\cdot 1$ 이므로 $K_2(1)=0$ 이다.

## 초입방체의 고윳값

길이 $n$ 의 이진 문자열을 정점으로 두고 한 비트만 다른 둘을 이은 초입방체 그래프(hypercube graph)에서, 거리가 정확히 $k$ 인 쌍에서 $1$ 인 [행렬](matrices.md) $A_k$ 는 벡터 $((-1)^{x\cdot u})\_x$ 를 고유벡터로 갖고 그 [고윳값](eigenvalues.md)은 $K_k(\mathrm{wt}(u))$ 다. 특히 인접행렬 $A_1$ 의 고윳값은 $n-2i$ 이고 중복도는 $\binom ni$ 다. 초입방체는 [거리 정칙 그래프](distance-regular-graphs.md)이고, Krawtchouk 다항식은 그 거리 행렬의 점화식에서 나오는 다항식이다.

## 근

$K_k$ 의 근은 모두 [실수](real-numbers.md)이고 서로 다르며 구간 $(0,n)$ 안에 있다. 직교다항식의 근의 일반 성질이다. 가장 작은 근은 $n/2-\sqrt{k(n-k)}$ 에 가깝고, 이 위치가 부호율의 점근 상한에 쓰인다[^2].

# 활용

- [Delsarte 선형계획 상한](delsarte-lp-bound.md). 부호의 거리 분포 $A_i$ 가 만족해야 하는 부등식이 $\sum_iA_iK_k(i)\ge 0$ 이고, 쌍대 문제는 $K_k$ 들의 일차결합으로 적힌다.
- [MacWilliams 항등식](macwilliams-identity.md). 쌍대 부호의 무게 분포가 $B_k=\frac{1}{\lvert C\rvert}\sum_iA_iK_k(i)$ 이다.
- 확률. 이항분포 $\mathrm{Bin}(n,\frac12)$ 의 [함수](functions.md)를 이 다항식들로 전개하면, 초입방체 위의 무작위 걸음과 [부울 함수의 Fourier 해석](boolean-fourier.md)의 대칭 함수 계산이 계수의 계산이 된다.

[^1]: F. J. MacWilliams, N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland, 1977. 5 장 7 절.
[^2]: R. J. McEliece, E. R. Rodemich, H. Rumsey, L. R. Welch, "New upper bounds on the rate of a code via the Delsarte–MacWilliams inequalities", *IEEE Transactions on Information Theory* 23 (1977), 157–166.

# 연관 문서

## 선수지식

- [직교다항식](orthogonal-polynomials.md)
- [부울 함수의 Fourier 해석](boolean-fourier.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #information_theory #analysis
