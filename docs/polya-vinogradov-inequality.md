# Pólya–Vinogradov 부등식

# 개요

**Pólya–Vinogradov 부등식(Pólya–Vinogradov inequality)** 은 곱셈 지표의 값을 연속한 정수 구간에서 더한 합이 구간의 길이와 상관없이 $\sqrt p\log p$ 정도로 작다는 부등식이다. $1$ 부터 $N$ 까지의 정수 가운데 법 $23$ 의 제곱잉여(quadratic residue)가 몇 개인지 세면, $N$ 이 $1$ 부터 $22$ 까지 움직이는 동안 그 수와 $N/2$ 의 차가 $5/2$ 를 넘지 않는다. 이 부등식은 제곱잉여에서 $+1$, 제곱비잉여에서 $-1$ 인 함수의 구간 합을 [Gauss 합](gauss-sums.md)과 등비급수로 눌러, 큰 소수에서도 그 차가 $\sqrt p\log p$ 보다 작다는 것을 보인다.

# 직관

$23$ 으로 나눈 나머지로 계산하면 $1^2,2^2,\dots,11^2$ 은 $1,4,9,16,2,13,3,18,12,8,6$ 이다. 이 열한 수가 법 $23$ 의 제곱잉여이고, $1$ 부터 $22$ 까지의 나머지 열한 수가 제곱비잉여다. 제곱잉여에서 $+1$, 제곱비잉여에서 $-1$ 인 함수를 $\chi(n)$ 이라 하고 $S(N)=\chi(1)+\cdots+\chi(N)$ 으로 둔다. $1$ 부터 $N$ 까지 제곱잉여의 수는 $(N+S(N))/2$ 다.

$N=1,2,\dots,22$ 에서 $S(N)$ 은 다음과 같다.

$$
1,2,3,4,3,4,3,4,5,4,3,4,5,4,3,4,3,4,3,2,1,0
$$

$S(N)$ 은 $5$ 를 넘지 않는다. $\chi(n)$ 을 하나씩 더하면 $N$ 이 커질수록 합이 커질 수도 있지만, $+1$ 과 $-1$ 이 고르게 섞여 서로 지운다. $p=10007$ 에서도 $S(N)$ 의 절댓값은 $N$ 이 $10006$ 까지 가는 동안 $130$ 을 넘지 않고, $\sqrt{10007}$ 은 약 $100$ 이다.

합이 작게 머무는 까닭은 $\chi$ 를 파동의 합으로 쓰면 드러난다. $e(x)=e^{2\pi ix}$ 라 할 때 파동 $n\mapsto e(an/p)$ 의 구간 합은 등비급수이므로 구간이 아무리 길어도 $a/p$ 만으로 정해지는 상수 이하다. $\chi$ 는 이런 파동 $p-1$ 개를 계수의 크기가 $1/\sqrt p$ 로 같게 섞은 것이고, 상수들을 더하면 $\sqrt p\log p$ 정도가 나온다.

# 정의

$p$ 는 소수이고 $\chi$ 는 법 $p$ 의 주지표(principal character)가 아닌 Dirichlet 지표(Dirichlet character)다. 직관 절의 $\chi$ 는 Legendre 기호 $\left(\frac n{23}\right)$ 이다([이차 상호법칙](quadratic-reciprocity.md)). 정수 $M$ 과 양의 정수 $N$ 에 대해 다음을 지표합(character sum)이라 한다.

$$
S\_\chi(M,N)=\sum\_{n=M+1}^{M+N}\chi(n)
$$

직관 절의 $S(N)$ 은 $S\_\chi(0,N)$ 이다. $\chi$ 는 주기 $p$ 이고 한 주기의 합은 $0$ 이므로, $S\_\chi(M,N)$ 은 $N$ 을 $p$ 로 나눈 나머지 길이의 구간 합과 같다.

$\chi$ 의 Gauss 합은 $g(\chi)=\sum\_{a=1}^{p-1}\chi(a)e(a/p)$ 다.

# 성질

## Pólya–Vinogradov 부등식

$\chi$ 가 법 $p$ 의 주지표가 아닌 지표이면 모든 $M,N$ 에 대해 다음이 성립한다[^1].

$$
\vert S\_\chi(M,N)\vert\le\sqrt p\thinspace(1+\log p)
$$

$p=23$ 이면 우변은 약 $19.8$ 이고, 직관 절의 최댓값 $5$ 가 그 아래에 있다. $N\le\sqrt p\thinspace(1+\log p)$ 이면 자명한 상한 $N$ 보다 나을 것이 없으므로, 이 부등식은 $\sqrt p\log p$ 보다 긴 구간에서 쓴다.

증명의 요지. $p\nmid n$ 이면 $a=bn^{-1}$ 로 바꿔 세어 다음을 얻는다. $p\mid n$ 이면 양변이 $0$ 이다.

$$
\chi(n)\thinspace g(\bar\chi)=\sum\_{a=1}^{p-1}\bar\chi(a)\thinspace e(an/p)
$$

이것을 $n=M+1,\dots,M+N$ 에서 더하고 합의 순서를 바꾼다.

$$
S\_\chi(M,N)=\frac{1}{g(\bar\chi)}\sum\_{a=1}^{p-1}\bar\chi(a)\sum\_{n=M+1}^{M+N}e(an/p)
$$

$\vert g(\bar\chi)\vert=\sqrt p$ 이다. 안쪽 등비급수의 절댓값은 $\vert\sin(\pi Na/p)/\sin(\pi a/p)\vert$ 이므로 $1/(2\Vert a/p\Vert)$ 이하다. $\Vert x\Vert$ 는 $x$ 와 가장 가까운 정수 사이의 거리이고, $0\le x\le 1/2$ 에서 $\sin\pi x\ge 2x$ 를 썼다. $a$ 와 $p-a$ 가 같은 값을 주므로 다음이 나온다.

$$
\vert S\_\chi(M,N)\vert\le\frac{1}{\sqrt p}\sum\_{a=1}^{p-1}\frac{1}{2\Vert a/p\Vert}\le\frac{1}{\sqrt p}\sum\_{1\le a\le p/2}\frac pa\le\sqrt p\thinspace(1+\log p)
$$

## 합성수 법

법 $q$ 의 주지표가 아닌 지표 $\chi$ 에 대해서도 $\vert S\_\chi(M,N)\vert$ 는 $\sqrt q\log q$ 의 상수배 이하다[^1]. $\chi$ 가 원시 지표(primitive character)이면 $\chi(n)g(\bar\chi)$ 의 전개식과 $\vert g(\bar\chi)\vert=\sqrt q$ 가 그대로 성립해 위 증명이 된다. 원시 지표가 아니면 $\chi$ 를 유도하는 원시 지표로 바꾸고, $q$ 의 소인수로 나누어지는 $n$ 을 Möbius 반전으로 빼서 같은 꼴의 상한을 얻는다.

## 최적성

$\max\_N\vert S\_\chi(0,N)\vert$ 가 $\sqrt q\log\log q$ 의 상수배 이상인 이차 지표가 무한히 많이 존재한다(Paley)[^2]. 그래서 상한을 $\sqrt q$ 의 상수배로 줄일 수는 없다.

일반화된 [Riemann 가설](riemann-hypothesis.md)(generalized Riemann hypothesis)을 가정하면 모든 주지표가 아닌 지표에서 $\vert S\_\chi(M,N)\vert$ 가 $\sqrt q\log\log q$ 의 상수배 이하다(Montgomery–Vaughan)[^3]. 이 가정 아래에서는 Paley 의 하한과 상수배까지 맞는다.

# 활용

- 가장 작은 제곱비잉여. $1$ 부터 $N$ 까지가 모두 법 $p$ 의 제곱잉여이면 $S\_\chi(0,N)=N$ 이므로, 가장 작은 제곱비잉여는 $\sqrt p\thinspace(1+\log p)+1$ 이하다. Vinogradov 는 $\chi$ 의 곱셈적 성질을 함께 써서, 임의의 $\varepsilon\gt 0$ 과 충분히 큰 $p$ 에 대해 가장 작은 제곱비잉여가 $p^{1/(2\sqrt e)+\varepsilon}$ 이하임을 보였다.
- 구간 안의 제곱잉여 수. $p$ 의 배수가 없는 길이 $N$ 인 구간에 든 제곱잉여는 $(N+S\_\chi(M,N))/2$ 개이므로, 그 수와 $N/2$ 의 차가 $\sqrt p\thinspace(1+\log p)/2$ 이하다.
- [Dirichlet L 함수](dirichlet-l-functions.md)의 값. 부분합의 상한을 Abel 합으로 옮기면 다음이 나오므로, $x$ 를 $\sqrt q\log q$ 보다 크게 잡으면 $L(1,\chi)$ 를 짧은 유한합으로 계산할 수 있다.

$$
L(1,\chi)=\sum\_{n\le x}\frac{\chi(n)}{n}+O\left(\frac{\sqrt q\log q}{x}\right)
$$

- 짧은 구간의 지표합. Burgess 한계(Burgess bound)는 $p^{1/4+\varepsilon}$ 보다 긴 구간에서 자명하지 않은 상한을 준다. 증명에 [Weil 지표합 한계](weil-character-sum-bound.md)를 쓴다. Pólya–Vinogradov 부등식은 $p^{1/2}$ 보다 짧은 구간에서 자명한 상한보다 나을 것이 없다.

[^1]: H. Davenport, *Multiplicative Number Theory*, 3rd ed., Graduate Texts in Mathematics 74, Springer, 2000, Chapter 23.
[^2]: R. E. A. C. Paley, "A theorem on characters", *Journal of the London Mathematical Society* 7 (1932), 28–32.
[^3]: H. L. Montgomery, R. C. Vaughan, "Exponential sums with multiplicative coefficients", *Inventiones Mathematicae* 43 (1977), 69–82.

# 연관 문서

## 선수지식

- [Gauss 합](gauss-sums.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #combinatorics
