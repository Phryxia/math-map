# 등차수열의 Roth 정리

# 개요

**등차수열의 Roth 정리(Roth's theorem on arithmetic progressions)** 는 양의 정수의 부분집합이 양의 상밀도를 가지면 길이 $3$ 의 등차수열을 포함한다는 정리다. K. F. Roth 가 1953 년에 증명했다[^1]. [Szemerédi 정리](szemeredi-theorem.md)의 길이 $3$ 인 경우이고, 모든 길이의 경우보다 22 년 먼저 증명되었다.

Roth 의 증명은 [이산 Fourier 변환](fourier.md)으로 등차수열의 개수를 세고, 개수가 모자라면 집합이 더 짧은 등차수열 위에 몰려 있다는 것을 보인다. 이 밀도 증가 논법(density increment argument)을 다듬어 길이 $3$ 에 대한 이후의 상한들이 증명되었다.

# 직관

$\mathbb Z/N$ 에서 원소를 하나씩 확률 $\alpha$ 로 골라 집합 $A$ 를 만든다. $x$, $x+d$, $x+2d$ 가 모두 $A$ 에 들어갈 확률은 $\alpha^3$ 이고 $(x,d)$ 의 쌍은 $N^2$ 개이므로 등차수열은 대략 $\alpha^3N^2$ 개 생긴다. 집합을 아무렇게나 만들면 등차수열은 많다. 등차수열을 피하려면 $A$ 가 이 무작위 집합과 다르게 생겨야 한다.

무작위 집합과의 차이는 파동 $x\mapsto e^{2\pi irx/N}$ 과 $A$ 가 얼마나 겹치는지로 잰다. $A$ 의 원소에서 파동의 값을 더한 것이 $A$ 의 Fourier 계수다. 등차수열의 개수를 Fourier 계수로 쓰면 $r=0$ 의 항이 정확히 $\alpha^3N^2$ 이고, 나머지 항은 $0$ 이 아닌 $r$ 에서 가장 큰 계수로 묶인다. 그래서 모든 계수가 작으면 등차수열이 $\alpha^3N^2$ 에 가깝게 있다.

어떤 $r$ 에서 계수가 크면 $A$ 는 그 파동이 큰 쪽에 몰려 있다. 파동이 거의 변하지 않는 짧은 등차수열들로 전체를 자르면, 그 가운데 하나에서 $A$ 의 비율이 $\alpha$ 보다 $\alpha^2$ 의 상수배만큼 크다. 그 등차수열을 새 전체로 보고 같은 일을 되풀이한다. 비율은 $1$ 을 넘을 수 없으므로 되풀이는 유한 번에 끝나고, 끝나는 것은 계수가 모두 작아 등차수열이 나올 때다.

# 정의

$r_3(N)$ 은 $\lbrace 1,\dots,N\rbrace$ 의 부분집합 가운데 길이 $3$ 의 등차수열을 포함하지 않는 것의 최대 크기다. 등차수열은 $d\ne 0$ 인 $x$, $x+d$, $x+2d$ 를 말하고, $d=0$ 인 것은 **자명한 등차수열(trivial progression)** 이라 부른다. 정리의 유한판은

$$
r_3(N)=o(N)
$$

이고 상밀도판과 동치다.

$N$ 이 홀수일 때 $A\subseteq\mathbb Z/N$ 의 지시함수를 $1_A$ 라 하고, 그 Fourier 계수를

$$
\widehat{1_A}(r)=\sum_{x\in\mathbb Z/N}1_A(x)\thinspace e^{-2\pi irx/N},\qquad r\in\mathbb Z/N
$$

로 둔다. $\widehat{1_A}(0)=\lvert A\rvert$ 이다. $A$ 의 밀도는 $\alpha=\lvert A\rvert/N$ 이다. $A$ 에 든 등차수열의 개수를

$$
\Lambda(A)=\char35{}\lbrace (x,d)\in(\mathbb Z/N)^2 : x,\thinspace x+d,\thinspace x+2d\in A\rbrace
$$

로 쓴다. 자명한 등차수열 $\lvert A\rvert$ 개가 들어 있다.

# 성질

## 세는 공식

$$
\Lambda(A)=\frac1N\sum_{r\in\mathbb Z/N}\widehat{1_A}(r)^2\thinspace\widehat{1_A}(-2r)
$$

증명의 요지. $(x,d)$ 대신 $x+z=2y$ 인 $(x,y,z)$ 를 센다. $N$ 이 홀수이므로 둘은 일대일로 대응한다. 조건 $x-2y+z=0$ 을 $\frac1N\sum_r e^{2\pi ir(x-2y+z)/N}$ 으로 바꾸고 $x,y,z$ 에 대해 먼저 더하면 오른쪽이 나온다.

## Fourier 이분법

정리. $N$ 이 홀수이고 $N\ge 2\alpha^{-2}$ 이며 $A\subseteq\mathbb Z/N$ 이 자명하지 않은 등차수열을 포함하지 않으면

$$
\max_{r\ne 0}\thinspace\lvert\widehat{1_A}(r)\rvert\ge\frac{\alpha^2N}{2}
$$

이다.

증명의 요지. 세는 공식에서 $r=0$ 의 항은 $\alpha^3N^2$ 이다. $N$ 이 홀수이므로 $r\mapsto -2r$ 은 $0$ 이 아닌 원소의 전단사이고, Parseval 등식 $\sum_r\lvert\widehat{1_A}(r)\rvert^2=N\lvert A\rvert$ 에서 나머지 항의 절댓값은 $\alpha N\max_{r\ne 0}\lvert\widehat{1_A}(r)\rvert$ 이하다. 가정에서 $\Lambda(A)=\alpha N$ 이므로 $\alpha^3N^2-\alpha N\le\alpha N\max_{r\ne 0}\lvert\widehat{1_A}(r)\rvert$ 이다.

## 밀도 증가

보조정리. $A\subseteq\lbrace 1,\dots,N\rbrace$ 의 밀도가 $\alpha$ 이고 $A$ 가 길이 $3$ 의 등차수열을 포함하지 않으며 $N\ge C\alpha^{-12}$ 이면, 길이가 $N^{1/3}$ 이상인 등차수열 $P\subseteq\lbrace 1,\dots,N\rbrace$ 가 존재해

$$
\frac{\lvert A\cap P\rvert}{\lvert P\rvert}\ge\alpha+c\alpha^2
$$

이다. $c,C$ 는 절대상수다.

증명의 요지. 감기는 등차수열이 생기지 않도록 $A$ 를 $\mathbb Z/N'$ ($N'$ 은 $2N$ 보다 큰 소수) 안에 놓고, 균형 함수(balanced function) $f=1_A-\alpha 1_{\lbrace 1,\dots,N\rbrace}$ 를 쓴다. 세는 공식에 $1_A=\alpha 1_{\lbrace 1,\dots,N\rbrace}+f$ 를 넣어 전개하면, 등차수열이 없을 때 Fourier 이분법과 같은 계산으로 $\lvert\widehat f(r)\rvert\ge c_1\alpha^2N$ 인 $r$ 이 존재한다. Dirichlet 근사 정리(Dirichlet's approximation theorem)로 $\lvert rq/N'-m\rvert\le N'^{-1/2}$ 인 정수 $m$ 과 $1\le q\le N'^{1/2}$ 을 고르면, 공차 $q$ 이고 길이 $L$ 인 등차수열 위에서 $e^{2\pi irx/N'}$ 의 값은 $2\pi LN'^{-1/2}$ 이하로 변한다. 길이 $L=c_2\alpha^2\sqrt N$ 인 이런 등차수열 $P$ 들로 $\lbrace 1,\dots,N\rbrace$ 를 거의 다 나누면 $\sum_P\lvert\sum_{x\in P}f(x)\rvert\ge c_3\alpha^2N$ 이다. $\sum_P\sum_{x\in P}f(x)$ 는 $0$ 에 가까우므로 $\sum_{x\in P}f(x)\ge c\alpha^2\lvert P\rvert$ 인 $P$ 가 하나 있다.

## 정량적 Roth 정리

정리(Roth). $r_3(N)\le CN/\log\log N$ 이다[^1].

증명의 요지. 등차수열이 없는 $A$ 에 밀도 증가를 되풀이한다. $i$ 번째 단계의 길이 $N_i$ 와 밀도 $\alpha_i$ 는 $N_{i+1}\ge N_i^{1/3}$, $\alpha_{i+1}\ge\alpha_i+c\alpha_i^2$ 를 만족한다. 밀도가 $\alpha$ 에서 $2\alpha$ 가 되는 데 $1/(c\alpha)$ 단계 이하가 걸리고, $2\alpha$ 에서 $4\alpha$ 는 그 절반이다. 밀도가 $1$ 을 넘을 수 없으므로 $2/(c\alpha)$ 단계 안에 조건 $N_i\ge C\alpha^{-12}$ 가 깨지고, $N^{3^{-2/(c\alpha)}}\lt C\alpha^{-12}$ 를 풀면 $\alpha\le C'/\log\log N$ 이다.

## F₃ⁿ 에서의 판본

$\mathbb F\_3^n$ 에서 $x+y+z=0$ 은 $x,y,z$ 가 등차수열을 이루는 것과 동치다. 이 조건을 피하는 집합이 [캡 집합](cap-sets.md)이다.

정리(Meshulam). 캡 집합 $A\subseteq\mathbb F\_3^n$ 에 대해 $\lvert A\rvert\le C3^n/n$ 이다[^2].

증명의 요지. $\omega=e^{2\pi i/3}$ 이라 두고 Fourier 계수를 $\widehat{1_A}(r)=\sum_x 1_A(x)\thinspace\omega^{-r\cdot x}$ 로 정하면 세는 공식은 $\Lambda(A)=3^{-n}\sum_r\widehat{1_A}(r)^3$ 이 된다. 정수의 경우와 같은 계산으로 $\alpha^23^n\ge 2$ 일 때 $\lvert\widehat{1_A}(r)\rvert\ge\alpha^23^n/2$ 인 $r\ne 0$ 이 있다. 초평면 $H_j=\lbrace x : r\cdot x=j\rbrace$ ($j\in\mathbb F\_3$) 위의 밀도를 $\alpha+a_j$ 로 쓰면 $\sum_j a_j=0$ 이고 $\lvert\sum_j a_j\omega^{-j}\rvert\ge 3\alpha^2/2$ 이다. 그래서 $a_j\ge\alpha^2/4$ 인 $j$ 가 있고, $A\cap H_j$ 를 평행이동하면 $\mathbb F\_3^{n-1}$ 의 캡 집합으로 밀도가 $\alpha+\alpha^2/4$ 이상이다. 정수의 경우에는 길이가 세제곱근으로 줄었지만 여기서는 차원이 $1$ 씩만 줄므로, $8/\alpha$ 단계를 버틸 차원이 있으면 모순이고 $\alpha\le C/n$ 이 나온다.

## Behrend 구성

정리(Behrend). $r_3(N)\ge N\exp\big(-c\sqrt{\log N}\big)$ 이다[^3].

증명의 요지. 정수 $d,n$ 을 정하고 $x\in\lbrace 0,\dots,d-1\rbrace^n$ 을 정수 $\phi(x)=\sum_{i=1}^n x_i(2d)^{i-1}$ 로 보낸다. 자리마다 $x_i+z_i\lt 2d$ 이므로 $\phi(x)+\phi(z)=2\phi(y)$ 이면 받아올림이 없어 $x+z=2y$ 다. 구면 $S_s=\lbrace x : x_1^2+\dots+x_n^2=s\rbrace$ 위의 서로 다른 두 점의 중점은 구면 안쪽에 있으므로, $\phi(S_s)$ 는 자명하지 않은 등차수열을 포함하지 않는다. $s$ 가 가질 수 있는 값은 $nd^2$ 개 이하이므로 어떤 $s$ 에서 $\lvert S_s\rvert\ge d^{n-2}/n$ 이다. $N=(2d)^n$ 으로 두고 $n$ 을 $\sqrt{\log N}$ 의 상수배로 잡으면 결론이 나온다.

정수에서는 등차수열 없는 집합이 $N^{1-\varepsilon}$ 보다 클 수 있다. $\mathbb F\_3^n$ 에서는 캡 집합 문서의 Ellenberg–Gijswijt 상한으로 $2.756^n$ 이하이므로, 두 환경의 답은 이 자리에서 갈린다.

## 상한의 변천

| 연도 | 상한 | 증명한 사람 |
| ---- | ---- | ----------- |
| 1953 | $N/\log\log N$ | Roth[^1] |
| 1987, 1990 | $N/(\log N)^c$ | Heath-Brown[^4], Szemerédi[^5] |
| 1999 | $N(\log\log N/\log N)^{1/2}$ | Bourgain[^6] |
| 2011 | $N(\log\log N)^6/\log N$ | Sanders[^7] |
| 2020 | $N/(\log N)^{1+c}$ | Bloom, Sisask[^8] |
| 2023 | $N\exp\big(-c(\log N)^{1/12}\big)$ | Kelley, Meka[^9] |

상수 $C$ 는 생략했다. Kelley–Meka 상한은 Behrend 하한과 같은 $N\exp(-c(\log N)^{\beta})$ 꼴이고, Bloom 과 Sisask 가 지수 $\beta$ 를 $1/9$ 로 올렸다[^10]. Bourgain 부터의 개선은 등차수열 대신 Bohr 집합(Bohr set) 위에서 밀도를 올린다.

# 활용

- [Szemerédi 정리](szemeredi-theorem.md)의 Gowers 증명은 이 문서의 Fourier 이분법을 길이 $k$ 로 넓힌다. 길이 $4$ 이상에서는 Fourier 계수가 작아도 등차수열 개수가 무작위와 다를 수 있어 Gowers 균등 노름(Gowers uniformity norm)이 Fourier 계수의 자리에 들어간다.
- [Szemerédi 정규성 보조정리](szemeredi-regularity-lemma.md)의 삼각형 제거 보조정리는 이 정리의 다른 증명을 준다. 거꾸로 Behrend 구성은 간선마다 삼각형 하나에만 들어가는 그래프(Ruzsa–Szemerédi 그래프)를 만들어, 제거 보조정리의 상수가 $\varepsilon$ 의 다항식이 될 수 없음을 보인다.
- 소수 안의 등차수열. B. Green 은 소수 집합의 밀도 양수 부분집합이 길이 $3$ 의 등차수열을 포함한다는 것을 이 문서의 밀도 증가 논법을 소수 위의 가중으로 옮겨 증명했다[^11].
- [캡 집합](cap-sets.md)은 이 정리의 $\mathbb F\_3^n$ 판본이고, Meshulam 의 $C3^n/n$ 이 다항식 방법 이전의 가장 좋은 상한이었다.

[^1]: K. F. Roth, "On certain sets of integers", Journal of the London Mathematical Society 28 (1953), 104–109.
[^2]: R. Meshulam, "On subsets of finite abelian groups with no 3-term arithmetic progressions", Journal of Combinatorial Theory, Series A 71 (1995), 168–172.
[^3]: F. A. Behrend, "On sets of integers which contain no three terms in arithmetical progression", Proceedings of the National Academy of Sciences 32 (1946), 331–332.
[^4]: D. R. Heath-Brown, "Integer sets containing no arithmetic progressions", Journal of the London Mathematical Society 35 (1987), 385–394.
[^5]: E. Szemerédi, "Integer sets containing no arithmetic progressions", Acta Mathematica Hungarica 56 (1990), 155–158.
[^6]: J. Bourgain, "On triples in arithmetic progression", Geometric and Functional Analysis 9 (1999), 968–984.
[^7]: T. Sanders, "On Roth's theorem on progressions", Annals of Mathematics 174 (2011), 619–636.
[^8]: T. F. Bloom, O. Sisask, "Breaking the logarithmic barrier in Roth's theorem on arithmetic progressions", 2020 년 프리프린트.
[^9]: Z. Kelley, R. Meka, "Strong bounds for 3-progressions", 64th IEEE Symposium on Foundations of Computer Science (2023).
[^10]: T. F. Bloom, O. Sisask, "The Kelley–Meka bounds for sets free of three-term arithmetic progressions", Essential Number Theory 2 (2023).
[^11]: B. Green, "Roth's theorem in the primes", Annals of Mathematics 161 (2005), 1609–1636.

# 연관 문서

## 선수지식

- [이산 Fourier 변환](fourier.md)
- [Szemerédi 정리](szemeredi-theorem.md)

## 더 알아보기

- [캡 집합](cap-sets.md)

#combinatorics #number_theory #analysis
