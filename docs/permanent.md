# 영구식

# 개요

**영구식(permanent)** 은 $n\times n$ 행렬 $A=(a_{ij})$ 에 대해 $\mathrm{perm}\thinspace A=\sum_{\sigma\in S_n}\prod_{i=1}^na_{i\sigma(i)}$ 로 정의되는 값이다. [행렬식](determinants.md)의 전개에서 순열의 부호를 모두 $+1$ 로 바꾼 것이다. 성분이 $0$ 과 $1$ 인 행렬에서는 그 행렬을 인접 행렬로 하는 이분 그래프의 완전 [매칭](matchings.md)의 수와 같다.

행렬식은 소거법으로 $O(n^3)$ 번의 연산에 계산되지만, 영구식은 성분이 $0$ 과 $1$ 인 행렬에서도 계산이 #P(sharp P)-완전이다. L. G. Valiant 가 1979 년에 증명했다[^1].

# 직관

이분 그래프에서 왼쪽 꼭짓점 $a_1,\dots,a_n$ 과 오른쪽 꼭짓점 $b_1,\dots,b_n$ 을 짝짓는 완전 매칭의 수를 세려 한다. $a_i$ 와 $b_j$ 가 이어져 있으면 $1$, 아니면 $0$ 인 행렬 $A$ 를 두면, 완전 매칭 하나는 $a_i$ 를 $b_{\sigma(i)}$ 에 짝짓는 순열 $\sigma$ 이고 $\prod_ia_{i\sigma(i)}=1$ 인 것과 같다. 그래서 매칭의 수는 이 곱들을 모든 순열에 대해 더한 값이다.

행렬식도 같은 곱들을 더하지만 순열의 부호를 붙인다. 모든 성분이 $1$ 인 $2\times 2$ 행렬은 완전 매칭이 $2$ 개인데 행렬식은 $1-1=0$ 이다. 부호가 없으면 행 하나에 다른 행의 배수를 더해도 값이 보존되지 않으므로 소거법을 쓸 수 없고, $n!$ 개의 항을 줄이는 방법이 따로 필요하다.

# 정의

## 영구식

체 또는 가환환 위의 $n\times n$ 행렬 $A=(a_{ij})$ 에 대해

$$
\mathrm{perm}\thinspace A=\sum_{\sigma\in S_n}\prod_{i=1}^{n}a_{i\sigma(i)}
$$

이다. $S_n$ 은 $\lbrace 1,\dots,n\rbrace$ 의 순열 전체다.

## 해의 수를 세는 부류

**#P(sharp P)** 는 다항시간 검증기 $V$ 와 다항식 $q$ 에 대해 $f(x)=\big\lvert\lbrace y:\lvert y\rvert\le q(\lvert x\rvert),\ V(x,y)=1\rbrace\big\rvert$ 꼴로 쓰이는 함수 $f$ 의 부류다. NP(nondeterministic polynomial time) 의 언어가 증거의 존재를 묻는다면 #P 의 함수는 증거의 수를 센다. 모든 #P 함수가 다항시간 환원으로 $f$ 의 계산에 귀착되고 $f$ 자신이 #P 에 들면 $f$ 를 #P-완전이라 한다.

# 성질

## 기본 성질

- 행이나 열을 서로 바꾸어도 값이 같고, 전치해도 같다.
- 각 행에 대해 일차다. 한 행을 $c$ 배 하면 값이 $c$ 배가 된다.
- 첫 행을 따라 부호 없는 여인수 전개 $\mathrm{perm}\thinspace A=\sum_ja_{1j}\thinspace\mathrm{perm}\thinspace A^{(1j)}$ 가 성립한다. $A^{(1j)}$ 는 $1$ 행과 $j$ 열을 지운 행렬이다.
- 곱셈적이지 않다. 일반적으로 $\mathrm{perm}(AB)\ne\mathrm{perm}\thinspace A\cdot\mathrm{perm}\thinspace B$ 다.

## Ryser 공식

정리. 다음이 성립한다[^2].

$$
\mathrm{perm}\thinspace A=(-1)^n\sum_{S\subseteq\lbrace 1,\dots,n\rbrace}(-1)^{\lvert S\rvert}\prod_{i=1}^{n}\sum_{j\in S}a_{ij}
$$

증명의 요지. $\prod_i\sum_{j\in S}a_{ij}$ 를 전개하면 각 행에서 $S$ 안의 열을 하나씩 고른 함수 $\lbrace 1,\dots,n\rbrace\to S$ 마다 항이 하나다. [포함배제 원리](inclusion-exclusion.md)로 상이 $\lbrace 1,\dots,n\rbrace$ 전체인 함수, 곧 순열의 항만 남긴다. $S$ 를 Gray 부호(Gray code) 순서로 돌면 안쪽 합을 한 열씩 고쳐 $O(2^nn)$ 번의 연산에 계산된다.

## Valiant 정리

정리. 성분이 $0$ 과 $1$ 인 행렬의 영구식 계산은 #P-완전이다[^1].

증명의 요지. 논리식의 충족 할당의 수를 세는 #P-완전 문제에서, 각 할당이 일정한 가중치의 순환 덮개들에 대응하도록 변수와 절마다 작은 행렬 조각을 붙인 유향 그래프를 만든다. 순환 덮개의 가중치 합이 인접 행렬의 영구식이다. 음수 가중치는 큰 법으로 줄이고, 가중치를 $0$ 과 $1$ 로 바꾸는 조각을 더한다.

이분 그래프의 완전 매칭이 있는지는 다항시간에 판정되지만 그 수를 세는 것은 #P-완전이다. 판정이 다항시간인 문제의 세기가 #P-완전인 예다.

## 하한과 상한

- van der Waerden 부등식. 성분이 음이 아니고 행과 열의 합이 모두 $1$ 인 행렬은 $\mathrm{perm}\thinspace A\ge n!/n^n$ 을 만족하고, 등호는 모든 성분이 $1/n$ 일 때뿐이다. G. P. Egorychev 와 D. I. Falikman 이 1981 년에 각각 증명했다[^3].
- Brègman 부등식. 성분이 $0$ 과 $1$ 이고 $i$ 행의 합이 $r_i$ 인 행렬은 $\mathrm{perm}\thinspace A\le\prod_i(r_i!)^{1/r_i}$ 를 만족한다. L. M. Brègman 이 1973 년에 증명했다[^4].

## 근사

M. Jerrum, A. Sinclair, E. Vigoda 는 성분이 음이 아닌 행렬의 영구식을 임의의 $\varepsilon\gt 0$ 에 대해 $1\pm\varepsilon$ 배 안에서 $n$ 과 $1/\varepsilon$ 의 다항시간에 추정하는 무작위 알고리즘을 주었다[^5]. 완전 매칭 위의 [Markov 연쇄](markov-chains.md)를 섞는 방법을 쓴다.

# 활용

- 완전 매칭의 수. 이분 그래프의 완전 매칭 수가 영구식이다. 평면 그래프에서는 P. W. Kasteleyn 의 방법으로 부호를 맞춘 행렬의 행렬식에서 매칭 수가 나와 다항시간에 센다.
- [다항 계층](polynomial-hierarchy.md). Toda 정리에 따라 영구식을 신탁으로 쓰는 다항시간 기계가 다항 계층 전체를 판정한다.
- 대수적 복잡도. 영구식을 행렬식의 꼴로 바꾸는 데 필요한 행렬 크기의 하한이 Valiant 가 정의한 대수적 부류 VP 와 VNP(Valiant classes)의 분리 문제다. 영구식은 VNP-완전이고 행렬식은 VP 에 든다[^6].
- 보손 표본추출(boson sampling). 같은 보손 $n$ 개가 선형 광학 회로를 지나 나오는 확률이 회로 행렬의 부분행렬의 영구식의 절댓값 제곱이다.

[^1]: L. G. Valiant, "The complexity of computing the permanent", Theoretical Computer Science 8(2) (1979), 189–201.
[^2]: H. J. Ryser, *Combinatorial Mathematics*, Carus Mathematical Monographs 14, Mathematical Association of America, 1963.
[^3]: G. P. Egorychev, "The solution of van der Waerden's problem for permanents", Advances in Mathematics 42 (1981), 299–305. D. I. Falikman, "Proof of the van der Waerden conjecture regarding the permanent of a doubly stochastic matrix", Mathematical Notes 29 (1981), 475–479.
[^4]: L. M. Brègman, "Some properties of nonnegative matrices and their permanents", Soviet Mathematics Doklady 14 (1973), 945–949.
[^5]: M. Jerrum, A. Sinclair, E. Vigoda, "A polynomial-time approximation algorithm for the permanent of a matrix with nonnegative entries", Journal of the ACM 51(4) (2004), 671–697.
[^6]: L. G. Valiant, "Completeness classes in algebra", Proceedings of the 11th ACM Symposium on Theory of Computing (1979), 249–261.

# 연관 문서

## 선수지식

- [행렬식](determinants.md)
- [매칭](matchings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #complexity #linear_algebra
