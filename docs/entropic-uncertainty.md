# 엔트로피 불확정성 관계

# 개요

**엔트로피 불확정성 관계(entropic uncertainty relation)** 는 한 양자 상태를 두 기저로 측정할 때 두 결과를 함께 예측할 수는 없다는 것을 엔트로피의 합의 하한으로 적은 부등식이다. 큐비트 $\vert 0\rangle$ 을 기저 $\lbrace\vert 0\rangle,\vert 1\rangle\rbrace$ 로 재면 결과가 확정이지만, 기저 $\lbrace\vert +\rangle,\vert -\rangle\rbrace$ 로 재면 두 결과가 반반으로 나온다. 어떤 상태를 고르든 한쪽 결과를 확정에 가깝게 만들면 다른 쪽 결과가 흩어진다.

이 관계는 두 기저의 벡터끼리 겹침이 가장 큰 값 $c$ 하나로 두 엔트로피의 합의 하한 $-2\log_2c$ 를 준다.

# 직관

큐비트 상태를 [밀도 행렬](density-matrix.md)의 Bloch 공의 점 $(x,y,z)$ 로 적는다. 기저 $Z=\lbrace\vert 0\rangle,\vert 1\rangle\rbrace$ 로 재면 두 결과가 확률 $\tfrac12(1\pm z)$ 로, 기저 $X=\lbrace\vert +\rangle,\vert -\rangle\rbrace$ 로 재면 확률 $\tfrac12(1\pm x)$ 로 나온다. 상태가 공 안에 있으므로 $x^2+z^2\le 1$ 이고, $z=\pm1$ 이면 $x=0$ 이다. 한 결과를 확정하면 다른 결과는 반반이다.

두 결과가 얼마나 흩어졌는지를 [Shannon 엔트로피](entropy.md)로 잰다. 엔트로피는 결과에 붙은 이름이나 값을 쓰지 않고 확률만 쓰므로, 결과가 "$\vert +\rangle$" 와 "$\vert -\rangle$" 같은 이름뿐인 측정에도 쓸 수 있다. 두 엔트로피의 합은 이진 엔트로피 $h$ 로 다음과 같다.

$$
H(Z)+H(X)=h\bigl(\tfrac12(1+z)\bigr)+h\bigl(\tfrac12(1+x)\bigr)
$$

$\vert 0\rangle$ 에서는 $0+1=1$ 비트다. $x=z=\tfrac1{\sqrt2}$ 인 상태에서는 두 확률이 모두 $0.854$ 이고 $h(0.854)\approx0.60$ 이라 합이 $1.20$ 비트다. 원 $x^2+z^2=1$ 위를 한 바퀴 돌면 합은 네 축 위의 점에서 가장 작은 값 $1$ 비트가 된다. 성질 절의 Maassen–Uffink 부등식이 이 하한을 모든 상태와 모든 기저 쌍에서 준다.

# 정의

## 두 기저의 측정

$\mathbb C^d$ 의 정규직교 기저 $A=\lbrace a\_1,\dots,a\_d\rbrace$ 와 $B=\lbrace b\_1,\dots,b\_d\rbrace$, 밀도 행렬 $\rho$ 에 대해 $p\_i=\langle a\_i,\rho a\_i\rangle$ 와 $q\_j=\langle b\_j,\rho b\_j\rangle$ 는 두 측정의 결과 분포다. 그 Shannon 엔트로피를 $H(A)$ 와 $H(B)$ 로 적는다. 직관 절의 $Z,X$ 에서 $\vert 0\rangle$ 이면 $p=(1,0)$, $q=(\tfrac12,\tfrac12)$ 다.

## 최대 겹침

두 기저의 **최대 겹침(maximal overlap)** 을 다음 값으로 정한다.

$$
c=\max_{i,j}\vert\langle a_i,b_j\rangle\vert
$$

$\sum\_j\vert\langle a\_i,b\_j\rangle\vert^2=1$ 이므로 $\tfrac1{\sqrt d}\le c\le 1$ 이다. $c=1$ 이면 두 기저가 벡터 하나를 공유하고, $c=\tfrac1{\sqrt d}$ 이면 두 기저가 [상호 편향 없는 기저](mutually-unbiased-bases.md)다. 직관 절의 $Z,X$ 는 $c=\tfrac1{\sqrt2}$ 다.

## Rényi 엔트로피

$\alpha\gt 0$, $\alpha\ne1$ 일 때 분포 $p$ 의 **Rényi 엔트로피(Rényi entropy)** 를 다음으로 정한다.

$$
H_\alpha(p)=\frac1{1-\alpha}\log_2\sum_ip_i^\alpha
$$

$\alpha\to1$ 이면 Shannon 엔트로피로 수렴하고, $\alpha=2$ 이면 $H\_2(p)=-\log\_2\sum\_ip\_i^2$ 다. $p=(\tfrac12,\tfrac12)$ 이면 모든 $\alpha$ 에서 $H\_\alpha(p)=1$ 이다.

# 성질

## Maassen–Uffink 부등식

정리. 모든 밀도 행렬 $\rho$ 에서 다음이 성립한다[^1].

$$
H(A)+H(B)\ge-2\log_2c
$$

증명의 요지. 순수 상태 $\psi$ 에서 $x\_i=\langle a\_i,\psi\rangle$, $y\_j=\langle b\_j,\psi\rangle$ 로 두면 $y=Ux$ 이고 $U\_{ji}=\langle b\_j,a\_i\rangle$ 는 유니터리 행렬이다. $U$ 는 $\ell^2\to\ell^2$ 노름이 $1$ 이고, $\vert y\_j\vert\le c\sum\_i\vert x\_i\vert$ 라 $\ell^1\to\ell^\infty$ 노름이 $c$ 이하다. [Riesz–Thorin 정리](riesz-thorin.md)로 두 끝을 보간하면 $1\le r\le2$ 와 켤레지수 $r'$ 에서 다음이 나온다.

$$
\Vert y\Vert_{r'}\le c^{(2-r)/r}\Vert x\Vert_r
$$

$\vert x\_i\vert^2=p\_i$, $\vert y\_j\vert^2=q\_j$ 이므로 양변의 로그를 Rényi 엔트로피로 적으면 $H\_{r/2}(p)+H\_{r'/2}(q)\ge-2\log\_2c$ 다. $r\to2$ 에서 두 Rényi 엔트로피가 Shannon 엔트로피로 수렴한다. 혼합 상태는 순수 상태의 확률 섞음이고, Shannon 엔트로피가 오목하므로 같은 하한을 만족한다.

## 등호

$c=\tfrac1{\sqrt d}$ 이면 하한은 $\log\_2d$ 다. $\rho$ 가 $A$ 의 기저 벡터이면 $H(A)=0$ 이고 $B$ 의 결과가 고르게 나와 $H(B)=\log\_2d$ 이므로 등호다. 직관 절에서 합이 $1$ 비트인 네 점이 이 경우다.

Deutsch 가 처음 얻은 하한은 $-2\log\_2\tfrac{1+c}2$ 였다[^2]. $c=\tfrac1{\sqrt2}$ 에서 이 값은 $0.46$ 비트이고, 상호 편향 없는 기저에서 등호에 이르지 못한다.

## 여러 기저의 합

정리. $d+1$ 개의 상호 편향 없는 기저 $B\_1,\dots,B\_{d+1}$ 에 대해 다음이 성립한다[^3].

$$
\sum_{k=1}^{d+1}H(B_k)\ge(d+1)\log_2\frac{d+1}2
$$

증명의 요지. $q\_{kj}$ 를 기저 $B\_k$ 의 결과 분포라 하면 완전한 모임에서 $\sum\_k\sum\_jq\_{kj}^2=1+\mathrm{tr}\thinspace\rho^2\le2$ 다. $H(B\_k)\ge H\_2(B\_k)$ 이고 $-\log\_2$ 가 볼록하므로 [Jensen 부등식](jensen-inequality.md)으로 합을 평균의 로그로 바꾸면 하한이 나온다. 큐비트에서 하한은 $3\log\_2\tfrac32\approx1.75$ 비트이고, $\vert 0\rangle$ 은 $0+1+1=2$ 비트다.

## 양자 기억 아래의 부등식

측정할 계 $Q$ 가 다른 계 $E$ 와 얽혀 있고 $E$ 를 가진 사람이 결과를 맞히려 하면, 조건부 엔트로피로 적은 다음 부등식이 성립한다[^4].

$$
H(A\vert E)+H(B\vert E)\ge-2\log_2c+S(Q\vert E)
$$

마지막 항은 [양자 상대 엔트로피](quantum-relative-entropy.md) 문서에서 정의되는 측정 전 상태의 양자 조건부 엔트로피이고 음수일 수 있다. $Q$ 와 $E$ 가 Bell 쌍 $\vert\Phi^+\rangle$ 를 이루면 그 값이 $-1$ 이라 $Z,X$ 의 하한이 $0$ 이다. 실제로 $Q$ 에 쓴 기저를 알려 주면 $E$ 를 같은 기저로 재어 결과를 맞힌다.

# 활용

- [양자 키 분배](quantum-key-distribution.md). 같은 논문의 다른 꼴 $H(X\vert E)+H(Z\vert R)\ge 1$ 에서 받는 사람 $R$ 의 불확실성 $H(Z\vert R)$ 는 오류율 $e$ 로 $h(e)$ 이하다. 그래서 엿듣는 사람의 불확실성이 $1-h(e)$ 이상이고, 이것이 키 비율의 하한이다[^4].
- 연속 변수. [불확정성 원리](uncertainty-principle.md)의 [Fourier 변환](fourier-transform.md) 쌍에서 $\vert f\vert^2$ 와 $\vert\hat f\vert^2$ 의 미분 엔트로피의 합이 $\ln\tfrac e2$ nat 이상이라는 Hirschman–Beckner 부등식(Hirschman–Beckner inequality)이 같은 꼴이다[^5]. 이 부등식에서 Heisenberg 부등식이 유도된다.

[^1]: H. Maassen, J. B. M. Uffink, "Generalized entropic uncertainty relations", *Physical Review Letters* 60 (1988), 1103–1106.
[^2]: D. Deutsch, "Uncertainty in quantum measurements", *Physical Review Letters* 50 (1983), 631–633.
[^3]: I. D. Ivanovic, "An inequality for the sum of entropies of unbiased quantum measurements", *Journal of Physics A* 25 (1992), L363–L364.
[^4]: M. Berta, M. Christandl, R. Colbeck, J. M. Renes, R. Renner, "The uncertainty principle in the presence of quantum memory", *Nature Physics* 6 (2010), 659–662.
[^5]: I. Białynicki-Birula, J. Mycielski, "Uncertainty relations for information entropy in wave mechanics", *Communications in Mathematical Physics* 44 (1975), 129–132.

# 연관 문서

## 선수지식

- [Shannon 엔트로피](entropy.md)
- [Riesz–Thorin 정리](riesz-thorin.md)
- [상호 편향 없는 기저](mutually-unbiased-bases.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #information_theory #linear_algebra #analysis
