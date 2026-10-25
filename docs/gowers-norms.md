# Gowers 균등 노름

# 개요

**Gowers 균등 노름(Gowers uniformity norm)** 은 유한 Abel 군 위의 복소함수에 대해, 함수의 값을 $k$ 차원 평행체의 꼭짓점 $2^k$ 개에서 곱해 평균한 양으로 정의한 노름 $\Vert f\Vert\_{U^k}$ 다. W. T. Gowers 가 길이 $4$ 이상의 등차수열에 대한 [Szemerédi 정리](szemeredi-theorem.md)의 정량적 증명에 도입했다[^1][^2].

[등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)의 증명은 길이 $3$ 의 등차수열 개수를 Fourier 계수로 제어한다. 길이 $k$ 의 등차수열 개수를 같은 방식으로 제어하는 양이 $U^{k-1}$ 노름이고, $U^2$ 노름은 Fourier 계수의 $4$ 제곱합의 네제곱근이다.

# 직관

길이 $4$ 에서 Roth 의 논법을 그대로 쓰려 한다. $N$ 이 소수일 때 $f(x)=e^{2\pi ix^2/N}$ 의 Fourier 계수는 [Gauss 합](gauss-sums.md)이어서 $r$ 마다 절댓값이 $N^{1/2}$ 이고, 크기 $N$ 에 비해 작다. 그런데 모든 $x,d$ 에서

$$
x^2-3(x+d)^2+3(x+2d)^2-(x+3d)^2=0
$$

이므로 $f(x)\thinspace\overline{f(x+d)}^{\thinspace 3}f(x+2d)^3\thinspace\overline{f(x+3d)}=1$ 이다. Fourier 계수가 모두 작은 함수들이 길이 $4$ 의 등차수열 위에서 곱의 평균 $1$ 을 낸다. 길이 $4$ 의 등차수열 개수는 Fourier 계수로 제어되지 않는다.

이 예에서 $f$ 가 길이 $3$ 의 경우와 다른 점은 위상이 일차식이 아니라 이차식이라는 것이다. 위상 $\phi(x)$ 에서 $\phi(x+h)-\phi(x)$ 를 취하면 차수가 하나 내려가고, 이차식은 이 차분을 두 번 하면 상수가 된다. 그래서 $f(x+h)\overline{f(x)}$ 를 $h_1,h_2,h_3$ 에 대해 세 번 취해 평균하면 이차 위상인 $f$ 에서 값이 $1$ 이다. 이렇게 차분을 $k$ 번 취해 평균한 양이 $U^k$ 노름이다.

# 정의

$G$ 를 유한 Abel 군, $\mathbb E\_{x\in G}$ 를 $G$ 위의 평균이라 하자. $f:G\to\mathbb C$ 와 $h\in G$ 에 대해 곱 차분(multiplicative derivative)을

$$
\Delta_hf(x)=f(x+h)\thinspace\overline{f(x)}
$$

로 둔다. $k\ge 1$ 에 대해

$$
\Vert f\Vert\_{U^k}^{2^k}=\mathbb E\_{x,h_1,\dots,h_k\in G}\thinspace\Delta_{h_1}\cdots\Delta_{h_k}f(x)
$$

이고, 풀어 쓰면

$$
\Vert f\Vert\_{U^k}^{2^k}=\mathbb E\_{x,h_1,\dots,h_k}\prod_{\omega\in\lbrace 0,1\rbrace^k}\mathcal C^{\lvert\omega\rvert}f(x+\omega_1h_1+\dots+\omega_kh_k)
$$

이다. $\mathcal C$ 는 복소켤레이고 $\lvert\omega\rvert=\omega_1+\dots+\omega_k$ 다. 오른쪽은 음이 아닌 실수다.

$U^1$ 의 경우는 $\Vert f\Vert\_{U^1}=\lvert\mathbb E\_xf(x)\rvert$ 이다. $G=\mathbb Z/N$ 에서 Fourier 계수를 $\widehat f(r)=\mathbb E\_xf(x)\thinspace e^{-2\pi irx/N}$ 으로 두면

$$
\Vert f\Vert\_{U^2}^4=\sum_{r\in\mathbb Z/N}\lvert\widehat f(r)\rvert^4
$$

이다.

# 성질

## 노름과 단조성

정리. $k\ge 2$ 이면 $\Vert\cdot\Vert\_{U^k}$ 는 노름이고, $\Vert f\Vert\_{U^1}$ 은 반노름이다. 모든 $f$ 에 대해

$$
\Vert f\Vert\_{U^1}\le\Vert f\Vert\_{U^2}\le\Vert f\Vert\_{U^3}\le\cdots
$$

이다[^2].

증명의 요지. 평행체의 꼭짓점 $2^k$ 개에 서로 다른 함수 $f_\omega$ 를 놓은 Gowers 내적을 정의한다. 이 내적에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 좌표마다 한 번씩 $k$ 번 쓰면 Gowers–Cauchy–Schwarz 부등식(Gowers–Cauchy–Schwarz inequality) $\lvert\langle f_\omega\rangle\rvert\le\prod_\omega\Vert f_\omega\Vert\_{U^k}$ 이 나온다. 삼각부등식은 이 부등식에서, 단조성은 $\Vert f\Vert\_{U^{k+1}}^{2^{k+1}}=\mathbb E\_h\Vert\Delta_hf\Vert\_{U^k}^{2^k}$ 와 $U^1$ 의 경우에서 유도된다.

## 일반화 von Neumann 정리

정리. $N$ 이 $k$ 보다 큰 소수이고 $f_0,\dots,f_{k-1}:\mathbb Z/N\to\mathbb C$ 가 $\lvert f_j\rvert\le 1$ 을 만족하면

$$
\left\lvert\mathbb E\_{x,d\in\mathbb Z/N}\prod_{j=0}^{k-1}f_j(x+jd)\right\rvert\le\min_j\Vert f_j\Vert\_{U^{k-1}}
$$

이다[^2].

증명의 요지. $k-1$ 번 Cauchy–Schwarz 부등식을 쓴다. 한 번마다 변수를 바꿔 함수 하나를 평균 밖으로 빼고 남은 함수들에 차분을 하나씩 붙인다. $N$ 이 $k$ 보다 큰 소수라서 변수 바꿈 $d\mapsto jd$ 가 전단사다.

$k=3$ 이면 오른쪽이 $\Vert f\Vert\_{U^2}\le\max_r\lvert\widehat f(r)\rvert^{1/2}$ 이므로 Roth 의 Fourier 이분법이 된다. $A\subseteq\mathbb Z/N$ 의 밀도를 $\alpha$, 균형 함수(balanced function)를 $f=1_A-\alpha$ 로 두면, $\Vert f\Vert\_{U^{k-1}}$ 이 작을 때 길이 $k$ 의 등차수열 개수가 $\alpha^kN^2$ 에 가깝다.

## 역정리

$U^2$ 의 경우. $\lvert f\rvert\le 1$ 이면 $\Vert f\Vert\_{U^2}^4\le\max_r\lvert\widehat f(r)\rvert^2\sum_r\lvert\widehat f(r)\rvert^2\le\max_r\lvert\widehat f(r)\rvert^2$ 이다. 그래서 $\Vert f\Vert\_{U^2}\ge\delta$ 이면 $\lvert\widehat f(r)\rvert\ge\delta^2$ 인 $r$ 이 있고, $f$ 는 일차 위상 $e^{2\pi irx/N}$ 과 상관한다.

$U^3$ 의 경우. 직관 절의 이차 위상은 $U^3$ 노름이 $1$ 이다. B. Green 과 T. Tao 는 $\Vert f\Vert\_{U^3}\ge\delta$ 이면 $f$ 가 이차 위상이나 그것을 국소적으로 이어 붙인 2단 멱영열(2-step nilsequence)과 $c(\delta)$ 이상 상관함을 증명했다[^3].

일반의 경우. B. Green, T. Tao, T. Ziegler 는 $\Vert f\Vert\_{U^{s+1}\lbrack N\rbrack}\ge\delta$ 이면 $f$ 가 $s$ 단 멱영열(s-step nilsequence)과 상관함을 증명했다[^4]. 이차식보다 높은 차수에서는 다항식 위상만으로는 모자라고 멱영열이 있어야 한다.

## Szemerédi 정리의 정량적 상한

정리(Gowers). $k\ge 4$ 에 대해 $r_k(N)\le N(\log\log N)^{-c_k}$ 이고 $c_k=2^{-2^{k+9}}$ 로 잡을 수 있다[^2].

증명의 요지. 등차수열이 없는 집합의 균형 함수는 일반화 von Neumann 정리에서 $U^{k-1}$ 노름이 크다. Gowers 는 이것에서 $A$ 의 밀도가 $\alpha+c(\alpha)$ 이상인 긴 등차수열을 찾는 밀도 증가를 증명했다. 그 단계에 쓰는 것은 완전한 역정리가 아니라 국소 다항 위상과의 상관이고, [Freiman 정리](freiman-theorem.md)와 [Balog–Szemerédi–Gowers 정리](balog-szemeredi-gowers.md)가 들어간다.

# 활용

- Szemerédi 정리의 해석적 증명. 위 정량적 상한이 그 내용이다.
- 소수 안의 등차수열. Green 과 Tao 는 소수를 감싸는 의사무작위 가중을 만들고, 그 가중에 대한 상대적 Szemerédi 정리를 $U^{k-1}$ 노름으로 증명했다[^5]. 소수 위의 선형 방정식계의 해를 세는 Green–Tao 의 후속 결과는 $U^{s+1}$ 역정리를 쓴다[^6].
- 유한체 위의 다항식 검사. $\mathbb F\_2^n$ 에서 $\Vert(-1)^P\Vert\_{U^{d+1}}=1$ 인 것은 $P$ 가 차수 $d$ 이하의 다항식인 것과 동치다. 차수 $d$ 이하 다항식인지를 점 $2^{d+1}$ 개의 평행체 하나로 검사하는 방법이 이 동치에서 나오고, [부울 함수의 Fourier 해석](boolean-fourier.md)의 선형성 검사(Blum–Luby–Rubinfeld test)는 $d=1$ 에서 꼭짓점 하나를 원점에 고정한 꼴이다.

[^1]: W. T. Gowers, "A new proof of Szemerédi's theorem for arithmetic progressions of length four", Geometric and Functional Analysis 8 (1998), 529–551.
[^2]: W. T. Gowers, "A new proof of Szemerédi's theorem", Geometric and Functional Analysis 11 (2001), 465–588.
[^3]: B. Green, T. Tao, "An inverse theorem for the Gowers U3(G) norm", Proceedings of the Edinburgh Mathematical Society 51 (2008), 73–153.
[^4]: B. Green, T. Tao, T. Ziegler, "An inverse theorem for the Gowers U^{s+1}[N]-norm", Annals of Mathematics 176 (2012), 1231–1372.
[^5]: B. Green, T. Tao, "The primes contain arbitrarily long arithmetic progressions", Annals of Mathematics 167 (2008), 481–547.
[^6]: B. Green, T. Tao, "Linear equations in primes", Annals of Mathematics 171 (2010), 1753–1850.

# 연관 문서

## 선수지식

- [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #analysis #number_theory
