# Burgess 한계

# 개요

**Burgess 한계(Burgess bound)** 는 곱셈 지표의 값을 길이가 $p^{1/4}$ 보다 조금 긴 정수 구간에서 더한 합이 구간의 길이보다 작은 차수라는 부등식이다. 소수 $p=1000003$ 에서 길이 $1000$ 인 구간마다 제곱잉여(quadratic residue)에서 $+1$, 제곱비잉여에서 $-1$ 을 더하면, 시작점을 $100$ 곳 넘게 바꿔 보아도 합의 절댓값이 $64$ 를 넘지 않는다. 그런데 [Pólya–Vinogradov 부등식](polya-vinogradov-inequality.md)이 주는 상한은 약 $14800$ 이어서 구간 길이 $1000$ 보다 크다. Burgess 한계는 구간을 조금씩 밀어 만든 합들을 모아 높은 거듭제곱의 평균을 [Weil 지표합 한계](weil-character-sum-bound.md)로 누르고, 이런 짧은 구간에서도 합이 작다는 것을 보인다.

# 직관

Pólya–Vinogradov 부등식은 구간 합을 길이와 상관없이 $\sqrt p\log p$ 로 누른다. 구간 길이 $N$ 이 $\sqrt p$ 보다 짧으면 이 상한은 $N$ 보다 크고, $\chi(n)$ 을 $N$ 개 더한 합의 절댓값이 $N$ 이하라는 자명한 사실보다 나을 것이 없다.

길이 $N$ 인 구간을 $ab$ 만큼 밀면 양 끝에서 $ab$ 개씩 항이 바뀐다. $a\le A$, $b\le B$ 이고 $AB$ 가 $N$ 보다 훨씬 작으면 민 합은 원래 합과 거의 같다. 그래서 원래 합은 $a,b$ 를 바꿔 가며 민 합 $AB$ 개의 평균과 거의 같다.

$\chi$ 는 곱셈적이므로 $\chi(n+ab)=\chi(a)\chi(\bar an+b)$ 다. $\bar a$ 는 법 $p$ 에서 $a$ 의 역원이다. 평균은 $x=\bar an$ 마다 짧은 합 $\sum\_{b=1}^{B}\chi(x+b)$ 를 모은 것이 된다. 이 짧은 합은 $x$ 를 법 $p$ 의 모든 나머지로 움직여 높은 거듭제곱으로 평균을 내면 Weil 지표합 한계로 작게 눌린다.

# 정의

$p$ 는 소수이고 $\chi$ 는 법 $p$ 의 주지표(principal character)가 아닌 Dirichlet 지표(Dirichlet character)다. 정수 $M$ 과 양의 정수 $N$ 에 대해 지표합을 다음과 같이 둔다.

$$
S\_\chi(M,N)=\sum\_{n=M+1}^{M+N}\chi(n)
$$

$\vert S\_\chi(M,N)\vert\le N$ 을 자명한 상한(trivial bound)이라 한다. 개요의 합은 $\chi=\left(\frac{\cdot}{1000003}\right)$, $N=1000$ 인 $S\_\chi(M,N)$ 이다.

# 성질

## Burgess 한계

양의 정수 $r$ 마다 $r$ 에만 의존하는 상수 $C\_r$ 가 존재해서 모든 $p,\chi,M,N$ 에 대해 다음이 성립한다[^2].

$$
\vert S\_\chi(M,N)\vert\le C\_r\thinspace N^{1-1/r}\thinspace p^{(r+1)/(4r^2)}\log p
$$

우변이 $N$ 보다 작은 차수가 되는 것은 $N$ 이 $p^{(r+1)/(4r)}$ 보다 큰 차수일 때다. $r=1$ 이면 이 지수는 $1/2$ 이고 Pólya–Vinogradov 부등식과 같은 범위다. $r$ 이 커지면 지수가 $1/4$ 로 내려가므로, 임의의 $\varepsilon\gt 0$ 에 대해 $N\ge p^{1/4+\varepsilon}$ 이면 $S\_\chi(M,N)$ 은 $N$ 보다 작은 차수다.

## 짧은 합의 거듭제곱 평균

증명의 핵심은 다음 부등식이다[^2].

$$
\sum\_{x=0}^{p-1}\left\vert\sum\_{b=1}^{B}\chi(x+b)\right\vert^{2r}\le(2r)^rB^rp+2r\thinspace B^{2r}\sqrt p
$$

$2r$ 제곱을 풀면 $b\_1,\dots,b\_{2r}$ 마다 다음 유리함수 $f$ 를 $\chi$ 에 넣은 $x$ 에 대한 합이 나온다.

$$
f(x)=\frac{(x+b\_1)\cdots(x+b\_r)}{(x+b\_{r+1})\cdots(x+b\_{2r})}
$$

 $\chi$ 의 위수를 $d$ 라 할 때 $f$ 가 어떤 유리함수의 $d$ 제곱이면 그 합은 $p$ 이하이고, 그런 $(b\_1,\dots,b\_{2r})$ 는 $(2r)^rB^r$ 개 이하다. 나머지 경우는 Weil 지표합 한계로 각 합이 $2r\sqrt p$ 이하다.

## Burgess 한계의 증명

$a\le A$, $b\le B$ 에 대해 $S\_\chi(M,N)$ 과 $ab$ 만큼 민 합 $S\_\chi(M+ab,N)$ 의 차의 절댓값 가운데 가장 큰 것을 $E$ 라 한다. 평균을 내고 $\chi(n+ab)=\chi(a)\chi(\bar an+b)$ 를 쓰면 다음이 나온다.

$$
\vert S\_\chi(M,N)\vert\le\frac{1}{AB}\sum\_{x=0}^{p-1}\nu(x)\left\vert\sum\_{b=1}^{B}\chi(x+b)\right\vert+E
$$

$\nu(x)$ 는 $\bar an\equiv x\pmod p$ 인 쌍 $(a,n)$ 의 수다. $\sum\_x\nu(x)=AN$ 이고, $AN\le p$ 이면 $\sum\_x\nu(x)^2$ 는 $AN\log p$ 의 상수배 이하다. 지수 $1-1/r$, $1/(2r)$, $1/(2r)$ 로 [Hölder 부등식](holder-inequality.md)을 쓰면 다음이 나온다.

$$
\sum\_x\nu(x)\left\vert\sum\_b\chi(x+b)\right\vert\le\Big(\sum\_x\nu(x)\Big)^{1-\frac1r}\Big(\sum\_x\nu(x)^2\Big)^{\frac1{2r}}\Big(\sum\_x\left\vert\sum\_b\chi(x+b)\right\vert^{2r}\Big)^{\frac1{2r}}
$$

$B=p^{1/(2r)}$ 로 잡으면 거듭제곱 평균의 두 항이 같은 차수가 된다. $A$ 를 $Np^{-1/(2r)}$ 의 작은 상수배로 잡으면 첫 항이 $N^{1-1/r}p^{(r+1)/(4r^2)}$ 의 차수다.

$E$ 는 길이가 $ab\le AB$ 인 두 구간의 지표합이다. $AB$ 가 $N$ 의 작은 상수배이므로, $N$ 에 대한 귀납법으로 이 두 합에 같은 꼴의 상한을 쓰고 상수 $C\_r$ 를 맞추면 정리가 나온다[^2].

# 활용

- 가장 작은 제곱비잉여. 길이 $N$ 의 구간 $\lbrack 1,N\rbrack$ 이 모두 제곱잉여이면 $S\_\chi(0,N)=N$ 이므로, Burgess 한계에서 가장 작은 제곱비잉여는 임의의 $\varepsilon\gt 0$ 과 충분히 큰 $p$ 에 대해 $p^{1/4+\varepsilon}$ 이하다. 곱셈적 성질을 쓰는 Vinogradov 의 방법을 더하면 지수가 $1/(4\sqrt e)+\varepsilon$ 이 된다[^2].
- 짧은 구간의 [원시근](primitive-roots.md). 충분히 큰 $p$ 에서 길이 $p^{1/4+\varepsilon}$ 인 구간마다 법 $p$ 의 원시근이 있다. 원시근의 지시함수를 지표들의 합으로 쓰고 각 지표의 구간 합에 Burgess 한계를 쓴다.
- [Dirichlet L 함수](dirichlet-l-functions.md)의 부분합. 같은 방법을 $L(s,\chi)$ 의 부분합에 쓰면 임계선 위에서 $L(1/2+it,\chi)$ 가 $q^{3/16+\varepsilon}$ 이하라는 Burgess 의 아볼록 상한(subconvexity bound)이 나온다[^1]. 함수방정식과 [Phragmén–Lindelöf 원리](phragmen-lindelof.md)만으로 얻는 지수는 $1/4$ 이다.

[^1]: D. A. Burgess, "On character sums and L-series. II", *Proceedings of the London Mathematical Society* (3) 13 (1963), 524–536.
[^2]: H. Iwaniec, E. Kowalski, *Analytic Number Theory*, Colloquium Publications 53, American Mathematical Society, 2004, §12.4.

# 연관 문서

## 선수지식

- [Pólya–Vinogradov 부등식](polya-vinogradov-inequality.md)
- [Weil 지표합 한계](weil-character-sum-bound.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #combinatorics
