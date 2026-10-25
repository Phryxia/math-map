# Szemerédi 정리

# 개요

**Szemerédi 정리(Szemerédi's theorem)** 는 양의 정수의 부분집합 $A$ 가 양의 상밀도

$$
\limsup_{N\to\infty}\frac{\lvert A\cap\lbrace 1,\dots,N\rbrace\rvert}{N}\gt 0
$$

을 가지면 $A$ 가 모든 길이의 등차수열을 포함한다는 정리다. E. Szemerédi 가 1975 년에 증명했다[^1]. 길이 $3$ 의 경우는 K. F. Roth 가 1953 년에 먼저 증명했다[^2].

[van der Waerden 정리](van-der-waerden-theorem.md)가 색칠의 한 색에 등차수열이 있다고 말한다면, 이 정리는 그 색이 어느 색인지까지 정한다. 상밀도가 양수인 색이 적어도 하나 있으므로 van der Waerden 정리가 따름정리다.

# 직관

짝수 전체는 정수의 절반이고 등차수열 $2,4,6,\dots$ 을 통째로 포함한다. 집합이 크면 등차수열이 생기기 쉬우니, 세 수짜리 등차수열을 피하면서 얼마나 큰 집합을 만들 수 있는지 묻는다.

$3$ 진법으로 쓸 때 자리마다 $0$ 이나 $1$ 만 쓰는 수의 집합 $\lbrace 0,1,3,4,9,10,12,13,\dots\rbrace$ 는 세 수짜리 등차수열이 없다. $x+z=2y$ 이면 $2y$ 는 자리마다 $0$ 이나 $2$ 이고, $x+z$ 는 자리마다 받아올림 없이 $0,1,2$ 이므로 자리마다 $x_i+z_i=2y_i$ 이고 $x_i=y_i=z_i$ 가 된다. 이 집합은 $3^m$ 미만에서 원소가 $2^m$ 개뿐이라 밀도가 $0$ 으로 간다. 세 수짜리 등차수열을 피하는 집합은 언제나 이처럼 밀도가 $0$ 으로 가야 한다는 것이 길이 $3$ 의 [Roth 정리](roth-theorem-arithmetic-progressions.md)이고, 모든 길이로 넓힌 것이 이 정리다.

# 정의

$r_k(N)$ 을 $\lbrace 1,\dots,N\rbrace$ 의 부분집합 가운데 길이 $k$ 인 등차수열을 포함하지 않는 것의 최대 크기라 한다. 이 정리의 유한판은 모든 $k\ge 3$ 에서

$$
r_k(N)=o(N)
$$

이라는 진술이고, 상밀도판과 동치다. $\delta\gt 0$ 과 $k$ 를 고정하면 $N$ 이 충분히 클 때 $\lbrace 1,\dots,N\rbrace$ 의 원소 $\delta N$ 개 이상인 모든 부분집합이 길이 $k$ 인 등차수열을 포함한다는 뜻이다.

# 성질

## 네 가지 증명

- Szemerédi 의 조합적 증명. van der Waerden 정리와 [Szemerédi 정규성 보조정리](szemeredi-regularity-lemma.md)의 원형을 써서 밀도가 늘어나는 부분 구조로 옮겨 간다[^1].
- Furstenberg 의 에르고딕 증명. 측도 보존 변환 $T$ 와 측도가 양수인 집합 $E$ 에 대해 $\mu(E\cap T^{-n}E\cap\cdots\cap T^{-(k-1)n}E)\gt 0$ 인 $n\ge 1$ 이 존재한다는 [다중 되돌이 정리](furstenberg-multiple-recurrence.md)로 바꾸어 증명한다[^3].
- Gowers 의 해석적 증명. Roth 의 Fourier 해석을 [Gowers 균등 노름](gowers-norms.md)으로 넓혀 처음으로 $r_k(N)$ 에 대한 정량적 상한을 얻었다[^4].
- 초그래프 제거 보조정리(hypergraph removal lemma)에 의한 증명. 삼각형 제거 보조정리로 Roth 정리를 증명하는 방법을 $k$ 균등 초그래프로 넓힌다[^5].

## 길이 3 의 상한과 하한

F. A. Behrend 는 고차원 구면 위의 격자점을 정수로 옮겨

$$
r_3(N)\ge N\exp\big(-c\sqrt{\log N}\big)
$$

인 집합을 구성했다[^6]. 직관 절의 $3$ 진법 집합보다 훨씬 크고, $r_3(N)\le N^{1-\varepsilon}$ 꼴의 상한은 성립하지 않는다. Z. Kelley 와 R. Meka 는 상한

$$
r_3(N)\le N\exp\big(-c(\log N)^{1/12}\big)
$$

을 증명했다[^7]. 상한과 하한이 모두 $N\exp(-c(\log N)^{\beta})$ 꼴이 되었다.

# 활용

- 소수 안의 등차수열([Green–Tao 정리](green-tao-theorem.md)). B. Green 과 T. Tao 는 소수 집합이 밀도 $0$ 이지만 모든 길이의 등차수열을 포함한다는 것을, 이 정리를 소수를 감싸는 의사무작위 집합 안의 상대적 판본으로 옮겨 증명했다[^8].
- [Hales–Jewett 정리](hales-jewett-theorem.md)의 밀도판. Furstenberg 와 Katznelson 의 밀도 Hales–Jewett 정리는 이 정리를 따름정리로 준다.
- 정규성 방법. 이 정리의 증명에서 나온 정규성 보조정리가 그래프 이론과 성질 검사에서 따로 쓰인다.

[^1]: E. Szemerédi, "On sets of integers containing no k elements in arithmetic progression", Acta Arithmetica 27 (1975), 199–245.
[^2]: K. F. Roth, "On certain sets of integers", Journal of the London Mathematical Society 28 (1953), 104–109.
[^3]: H. Furstenberg, "Ergodic behavior of diagonal measures and a theorem of Szemerédi on arithmetic progressions", Journal d'Analyse Mathématique 31 (1977), 204–256.
[^4]: W. T. Gowers, "A new proof of Szemerédi's theorem", Geometric and Functional Analysis 11 (2001), 465–588.
[^5]: W. T. Gowers, "Hypergraph regularity and the multidimensional Szemerédi theorem", Annals of Mathematics 166 (2007), 897–946.
[^6]: F. A. Behrend, "On sets of integers which contain no three terms in arithmetical progression", Proceedings of the National Academy of Sciences 32 (1946), 331–332.
[^7]: Z. Kelley, R. Meka, "Strong bounds for 3-progressions", 64th IEEE Symposium on Foundations of Computer Science (2023).
[^8]: B. Green, T. Tao, "The primes contain arbitrarily long arithmetic progressions", Annals of Mathematics 167 (2008), 481–547.

# 연관 문서

## 선수지식

- [van der Waerden 정리](van-der-waerden-theorem.md)
- [Szemerédi 정규성 보조정리](szemeredi-regularity-lemma.md)

## 더 알아보기

- [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)
- [Furstenberg 다중 되돌이 정리](furstenberg-multiple-recurrence.md)

#combinatorics #number_theory
