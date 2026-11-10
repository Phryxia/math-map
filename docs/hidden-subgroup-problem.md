# 숨은 부분군 문제

# 개요

**숨은 부분군 문제(hidden subgroup problem)** 는 군 위의 함수가 어떤 부분군의 잉여류마다 같은 값을 낼 때, 함수값을 묻는 것만으로 그 부분군을 찾는 문제다. $0,1,\dots,5$ 에 $f(x)=x\bmod 3$ 을 주면 값이 $0,1,2,0,1,2$ 로 되풀이되고, $f(x)=f(x+3)$ 이라는 규칙 뒤에 덧셈군 $\mathbb Z/6\mathbb Z$ 의 부분군 $\lbrace 0,3\rbrace$ 이 숨어 있다. 군이 아벨군이면 잉여류 하나를 양자 상태로 만든 뒤 그 군 위의 [이산 Fourier 변환](fourier.md)을 걸어 측정하는 일을 몇 번 되풀이해 부분군을 얻는다.

# 직관

$G=\mathbb Z/6\mathbb Z$, $f(x)=x\bmod 3$ 에서 부분군 $H=\lbrace 0,3\rbrace$ 을 찾는다. 함수값을 하나씩 물으면 같은 값이 두 번 나올 때까지 기다려야 하고, 군이 커지면 그 횟수도 커진다.

[Simon 알고리즘](simon-algorithm.md)과 같은 회로를 쓴다. 여섯 원소를 같은 진폭으로 겹쳐 놓고 $f$ 를 한 번 계산해 $\tfrac1{\sqrt 6}\sum_x\vert x\rangle\vert f(x)\rangle$ 을 만든다. 둘째 레지스터를 측정해 $1$ 이 나오면 첫 레지스터에는 $\tfrac1{\sqrt 2}(\vert 1\rangle+\vert 4\rangle)$ 이 남는다. 여기에 길이 $6$ 의 양자 Fourier 변환 $\vert x\rangle\mapsto\tfrac1{\sqrt 6}\sum_y e^{2\pi ixy/6}\vert y\rangle$ 을 걸면 $y$ 의 진폭은

$$
\frac1{\sqrt{12}}\thinspace e^{2\pi iy/6}\big(1+e^{2\pi i\cdot 3y/6}\big)=\frac1{\sqrt{12}}\thinspace e^{2\pi iy/6}\big(1+(-1)^y\big)
$$

이다. 홀수 $y$ 는 지워지고 $y=0,2,4$ 가 각각 확률 $1/3$ 로 나온다.

나오는 $y$ 는 모두 $3y\equiv 0\pmod 6$ 을 만족한다. $y=2$ 가 나오면 $hy\equiv 0\pmod 6$ 인 $h$ 를 모으면 $\lbrace 0,3\rbrace$ 이고, 이것이 $H$ 다. $y=0$ 이 나오면 정보가 없으므로 한 번 더 돌린다.

# 정의

## 숨은 부분군 문제

유한 [군](groups.md) $G$ 와 집합 $S$, 함수 $f:G\to S$ 가 있고, 부분군 $H\le G$ 에 대해

$$
f(g)=f(g')\iff gH=g'H
$$

가 성립한다고 하자. 이때 $f$ 가 $H$ 를 **숨긴다(hides)** 고 한다. $f$ 에 질의만 할 수 있을 때 $H$ 의 생성원을 구하는 문제가 숨은 부분군 문제다. 질의는 $\vert g\rangle\vert b\rangle\mapsto\vert g\rangle\vert b\oplus f(g)\rangle$ 를 한 번 거는 것이고, 효율은 $\log\vert G\vert$ 의 다항식으로 잰다. 직관 절의 $f(x)=x\bmod 3$ 은 $\mathbb Z/6\mathbb Z$ 에서 $H=\lbrace 0,3\rbrace$ 을 숨긴다.

## 잉여류 상태

$\tfrac1{\sqrt{\vert G\vert}}\sum_g\vert g\rangle\vert f(g)\rangle$ 의 둘째 레지스터를 측정하면 첫 레지스터에 남는

$$
\vert gH\rangle=\frac1{\sqrt{\vert H\vert}}\sum_{h\in H}\vert gh\rangle
$$

를 **잉여류 상태(coset state)** 라 한다. $g$ 는 균등하게 나온다. 직관 절의 $\tfrac1{\sqrt 2}(\vert 1\rangle+\vert 4\rangle)$ 은 $\vert 1+H\rangle$ 이다.

## 지표와 Fourier 표본추출

$G$ 가 유한 아벨군일 때 준동형 $\chi:G\to\mathbb C^\times$ 를 **지표(character)** 라 하고, 지표 전체를 $\hat G$ 로 쓴다. 아벨군에서는 $\vert\hat G\vert=\vert G\vert$ 이고, $G$ 위의 양자 Fourier 변환은

$$
\vert g\rangle\mapsto\frac1{\sqrt{\vert G\vert}}\sum_{\chi\in\hat G}\chi(g)\vert\chi\rangle
$$

다. $H$ 위에서 값이 모두 $1$ 인 지표의 집합 $H^\perp=\lbrace\chi\in\hat G:\chi(h)=1\text{ for all }h\in H\rbrace$ 를 $H$ 의 **소멸자(annihilator)** 라 한다. 잉여류 상태에 Fourier 변환을 걸고 측정하는 절차를 **Fourier 표본추출(Fourier sampling)** 이라 한다.

$\mathbb Z/6\mathbb Z$ 의 지표는 $\chi_y(x)=e^{2\pi ixy/6}$ 이고, $H=\lbrace 0,3\rbrace$ 이면 $H^\perp=\lbrace\chi_0,\chi_2,\chi_4\rbrace$ 다. 직관 절에서 나온 $y=0,2,4$ 가 이것이다.

# 성질

## 아벨군의 경우

$G$ 가 유한 아벨군이면 Fourier 표본추출의 결과는 $H^\perp$ 에서 균등하다. $\vert gH\rangle$ 을 변환한 상태에서 $\chi$ 의 진폭은 $\chi(g)\sqrt{\vert H\vert/\vert G\vert}$ 에 $\tfrac1{\vert H\vert}\sum_{h\in H}\chi(h)$ 를 곱한 것이고, 이 평균은 $\chi\in H^\perp$ 이면 $1$, 아니면 $0$ 이다. 측정값들이 생성하는 부분군 $K$ 가 $H^\perp$ 보다 작으면 다음 측정값이 $K$ 에 들 확률은 $1/2$ 이하다. $H^\perp$ 의 진부분군 사슬은 길이가 $\log_2\vert G\vert$ 이하이므로 $O(\log\vert G\vert)$ 번 되풀이하면 높은 확률로 $H^\perp$ 의 생성원이 나오고, $H=\bigcap_{\chi\in H^\perp}\ker\chi$ 를 고전적으로 계산한다[^1]. 유한 아벨군의 양자 Fourier 변환은 $\log\vert G\vert$ 의 다항 크기 회로로 구현되므로 전체가 다항 시간이다.

## 특수한 경우

| 문제 | 군 | 숨은 부분군 |
| --- | --- | --- |
| Simon 문제 | $(\mathbb Z/2\mathbb Z)^n$ | $\lbrace 0,s\rbrace$ |
| 위수 찾기 | $\mathbb Z$ | $r\mathbb Z$ |
| 이산로그 | $(\mathbb Z/r\mathbb Z)^2$ | $\lbrace(ks,k)\rbrace$ |
| 그래프 동형 | $S_{2n}$ | 두 그래프의 합의 자기동형군 |
| 이면체군 문제 | $D_N$ | 반사 하나가 생성하는 부분군 |

위수 찾기와 이산로그는 [Shor 알고리즘](shor-algorithm.md)이 푼다. 위수 찾기의 군 $\mathbb Z$ 는 무한군이어서 $\mathbb Z/Q\mathbb Z$ 로 잘라 근사하고, 그 오차를 연분수로 처리한다. 실수 $\mathbb R$ 처럼 연속인 군에서 주기를 찾는 방법으로 [Pell 방정식](pell-equation.md)의 기본해와 수체의 단원군 조정자도 다항 시간에 구한다[^2].

## 비아벨군의 경우

비아벨군에서 Fourier 변환은 [군 표현](group-representations.md)의 기약표현과 그 행렬 성분으로 정의된다. 질의 수만 보면 어느 유한군에서나 $\log\vert G\vert$ 의 다항식 번의 질의로 $H$ 를 정할 수 있다[^3]. 그 질의 결과에서 $H$ 를 다항 시간에 계산하는 방법은 군마다 따로 찾아야 한다.

- 이면체군 $D_N$. Kuperberg 의 알고리즘이 시간 $2^{O(\sqrt{\log N})}$ 에 푼다[^4]. Regev 는 격자의 유일 최단벡터 문제(unique shortest vector problem)를 잉여류 상태를 쓰는 이면체군 문제로 환원했다[^5].
- 대칭군 $S_n$. [그래프 동형 문제](graph-isomorphism.md)는 $S_{2n}$ 의 숨은 부분군 문제로 적힌다. 연결된 두 그래프 $X,Y$ 의 정점을 $2n$ 개로 모은 합 $X\sqcup Y$ 에 순열 $\pi$ 를 적용한 그래프를 $f(\pi)$ 로 두면, $f$ 가 숨기는 부분군은 $X\sqcup Y$ 의 자기동형군이고, $X\cong Y$ 일 때만 두 부분을 맞바꾸는 원소가 들어 있다. 잉여류 상태를 하나씩 따로 측정하는 방법으로는 이 부분군을 구별하지 못하고, $\Omega(n\log n)$ 개의 잉여류 상태를 함께 측정해야 한다[^6].

# 활용

- 소인수분해와 이산로그. [이산로그](discrete-logarithm.md)와 소인수분해가 아벨 숨은 부분군 문제이므로 RSA(Rivest–Shamir–Adleman)와 타원곡선 암호가 [양자 회로](quantum-circuits.md)에 대해 안전하지 않다.
- 양자 내성 암호의 근거. [양자 내성 암호](post-quantum-cryptography.md)의 격자 기반 체계는 [최단벡터 문제](shortest-vector-problem.md)를 쓰고, 이 문제가 환원되는 이면체군 문제에 다항 시간 양자 알고리즘이 알려져 있지 않다는 것을 근거로 든다[^5].
- 수체의 불변량. [대수적 수체](algebraic-number-fields.md)의 단원군과 류군을 실수와 정수 격자가 섞인 아벨군 위의 숨은 부분군 문제로 놓고 양자 다항 시간에 계산한다.

[^1]: A. Yu. Kitaev, Quantum measurements and the Abelian stabilizer problem, arXiv:quant-ph/9511026 (1995). R. Jozsa, Quantum factoring, discrete logarithms, and the hidden subgroup problem, *Computing in Science & Engineering* 3 (2001), 34–43.
[^2]: S. Hallgren, Polynomial-time quantum algorithms for Pell's equation and the principal ideal problem, *Journal of the ACM* 54 (2007), 1–19.
[^3]: M. Ettinger, P. Høyer, E. Knill, The quantum query complexity of the hidden subgroup problem is polynomial, *Information Processing Letters* 91 (2004), 43–48.
[^4]: G. Kuperberg, A subexponential-time quantum algorithm for the dihedral hidden subgroup problem, *SIAM Journal on Computing* 35 (2005), 170–188.
[^5]: O. Regev, Quantum computation and lattice problems, *SIAM Journal on Computing* 33 (2004), 738–760.
[^6]: S. Hallgren, C. Moore, M. Rötteler, A. Russell, P. Sen, Limitations of quantum coset states for graph isomorphism, *Journal of the ACM* 57 (2010), 34.

# 연관 문서

## 선수지식

- [Simon 알고리즘](simon-algorithm.md)
- [Shor 알고리즘](shor-algorithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #group_theory #complexity #cryptography
