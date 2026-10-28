# 합-곱 문제

# 개요

**합-곱 문제(sum-product problem)** 는 수의 유한집합에서 두 수의 합과 두 수의 곱을 모두 모았을 때, 두 모임이 함께 작을 수 없다는 것을 수량으로 묻는 문제다. $\lbrace 1,\dots,n\rbrace$ 에서는 합이 $2n-1$ 가지뿐이지만 곱은 거의 $n^2$ 가지이고, $\lbrace 2,4,\dots,2^n\rbrace$ 에서는 곱이 $2n-1$ 가지뿐이지만 합은 $n(n+1)/2$ 가지다. 이 문제에서는 합과 곱의 개수 가운데 큰 쪽이 $\lvert A\rvert^{1+c}$ 이상임을 보이고, 그 지수를 점과 직선의 만남을 세는 [Szemerédi–Trotter 정리](szemeredi-trotter.md)로 키운다.

# 직관

합-곱 문제는 실수의 유한집합 $A$ 에 대해 합집합 $A+A$ 와 곱집합 $A\cdot A$ 가 동시에 작을 수 없다는 것을 정량적으로 묻는 문제다. P. Erdős 와 E. Szemerédi 는 $\max(\lvert A+A\rvert,\lvert A\cdot A\rvert)\ge\lvert A\rvert^{1+c}$ 를 증명하고, 지수를 $2-\varepsilon$ 까지 올릴 수 있다고 추측했다[^1].

G. Elekes 는 이 문제를 점과 직선의 접촉 문제로 옮겨 Szemerédi–Trotter 정리로 지수 $5/4$ 를 얻었다[^2]. 그 뒤의 개선도 평면의 기하를 쓴다.

$A=\lbrace 1,\dots,n\rbrace$ 이면 두 수의 합은 $2$ 부터 $2n$ 까지 $2n-1$ 가지뿐이다. 두 수의 곱은 곱셈표에 나오는 수의 개수이고 $n^{2-o(1)}$ 가지다. $A=\lbrace 2,4,\dots,2^n\rbrace$ 이면 반대로 곱은 $2^2$ 부터 $2^{2n}$ 까지 $2n-1$ 가지뿐이고, 두 수의 합은 이진법 자리 두 개로 정해져 $n(n+1)/2$ 가지다.

합이 적은 집합은 등차수열에 가깝고 곱이 적은 집합은 등비수열에 가깝다. 한 집합이 둘 다에 가까울 수는 없어 보이고, 이것을 셀 수 있는 부등식으로 만드는 것이 이 문제다. Elekes 는 $A+A$ 와 $A\cdot A$ 를 두 좌표로 하는 격자 모양의 점집합을 만들고, 그 점을 많이 지나는 직선을 $A$ 로 직접 만들었다.

# 정의

$A\subseteq\mathbb R$ 이 유한집합일 때

$$
A+A=\lbrace a+b : a,b\in A\rbrace,\qquad A\cdot A=\lbrace ab : a,b\in A\rbrace
$$

이다. **Erdős–Szemerédi 추측(Erdős–Szemerédi conjecture)** 은 모든 $\varepsilon\gt 0$ 에 대해 $c_\varepsilon\gt 0$ 이 존재해

$$
\max(\lvert A+A\rvert,\lvert A\cdot A\rvert)\ge c_\varepsilon\lvert A\rvert^{2-\varepsilon}
$$

라는 진술이다[^1].

# 성질

## Elekes 의 부등식

정리(Elekes). 실수의 유한집합 $A$ 에 대해 $\lvert A+A\rvert\lvert A\cdot A\rvert\ge c\lvert A\rvert^{5/2}$ 이다. 따라서 $\max(\lvert A+A\rvert,\lvert A\cdot A\rvert)\ge c\lvert A\rvert^{5/4}$ 이다[^2].

증명의 요지. $\lvert A\rvert=n$ 이라 하고 $0\notin A$ 로 둔다. 점집합 $P=(A+A)\times(A\cdot A)$ 와 직선 $\ell_{a,b}:y=a(x-b)$ ($a,b\in A$) $n^2$ 개를 잡는다. $c\in A$ 마다 점 $(c+b,\thinspace ac)$ 가 $P$ 에 들고 $\ell_{a,b}$ 위에 있으므로 직선 하나가 $P$ 의 점 $n$ 개를 지나고, 접촉수는 $n^3$ 이상이다. Szemerédi–Trotter 정리에서 접촉수는 $C(\lvert P\rvert^{2/3}n^{4/3}+\lvert P\rvert+n^2)$ 이하이므로 $\lvert P\rvert\ge cn^{5/2}$ 이다.

## Solymosi 의 부등식

정리(Solymosi). 양의 실수의 유한집합 $A$ 에 대해 $\lvert A\rvert\ge 2$ 이면 $\lvert A\cdot A\rvert\lvert A+A\rvert^2\ge c\lvert A\rvert^4/\log\lvert A\rvert$ 이고, 따라서

$$
\max(\lvert A+A\rvert,\lvert A\cdot A\rvert)\ge\frac{c\lvert A\rvert^{4/3}}{(\log\lvert A\rvert)^{1/3}}
$$

이다[^3].

증명의 요지. 곱셈 에너지 $\char35{}\lbrace (a,b,c,d)\in A^4 : ab=cd\rbrace$ 를 기울기 $\lambda$ 의 직선 $y=\lambda x$ 위에 있는 $A\times A$ 의 점들로 나눠 센다. 이웃한 두 기울기의 직선 위의 점 $u$, $v$ 를 더한 $u+v$ 는 $(A+A)\times(A+A)$ 의 점이고, 두 직선 사이의 부채꼴에 들어가 서로 다른 부채꼴의 합이 겹치지 않는다. 그래서 곱셈 에너지가 로그 인자를 빼면 $\lvert A+A\rvert^2$ 이하이고, [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 곱셈 에너지가 $\lvert A\rvert^4/\lvert A\cdot A\rvert$ 이상이므로 두 부등식을 합치면 결론이 나온다.

## 이후의 지수

S. V. Konyagin 과 I. D. Shkredov 는 실수에서 지수 $4/3$ 을 넘는 하한을 증명했다[^4].

## 유한체에서의 판본

정리(Bourgain–Katz–Tao). $\delta\gt 0$ 에 대해 $\varepsilon\gt 0$ 이 존재해, 소수 $p$ 와 $p^\delta\lt\lvert A\rvert\lt p^{1-\delta}$ 인 $A\subseteq\mathbb F\_p$ 에 대해 $\max(\lvert A+A\rvert,\lvert A\cdot A\rvert)\ge\lvert A\rvert^{1+\varepsilon}$ 이다[^5].

$A$ 가 부분체이면 합과 곱이 모두 닫혀 있으므로 이런 크기 조건이 필요하다. $\mathbb F\_p$ 에는 진부분체가 없어 크기 조건만으로 충분하다.

# 활용

- 지수합. Bourgain, Glibichuk, Konyagin 은 유한체 판본으로 크기가 $p^\delta$ 인 곱셈 부분군 위의 지수합에 대한 비자명한 상한을 얻었다.
- 무작위성 추출. 유한체 판본에서 독립 원천 여러 개를 섞는 [무작위성 추출기](randomness-extractors.md)가 나왔다.
- Expander 그래프. H. Helfgott 는 유한체 판본으로 $\mathrm{SL}\_2(\mathbb F\_p)$ 의 생성집합을 거듭 곱하면 빠르게 커진다는 것을 증명했다. J. Bourgain 과 A. Gamburd 는 이것으로 $\mathrm{SL}\_2(\mathbb F\_p)$ 의 Cayley 그래프가 [Expander 그래프](expander-graphs.md)임을 증명했다.

[^1]: P. Erdős, E. Szemerédi, "On sums and products of integers", Studies in Pure Mathematics, Birkhäuser (1983), 213–218.
[^2]: G. Elekes, "On the number of sums and products", Acta Arithmetica 81 (1997), 365–367.
[^3]: J. Solymosi, "Bounding multiplicative energy by the sumset", Advances in Mathematics 222 (2009), 402–408.
[^4]: S. V. Konyagin, I. D. Shkredov, "On sum sets of sets having small product set", Proceedings of the Steklov Institute of Mathematics 290 (2015), 288–299.
[^5]: J. Bourgain, N. Katz, T. Tao, "A sum-product estimate in finite fields, and applications", Geometric and Functional Analysis 14 (2004), 27–57.

# 연관 문서

## 선수지식

- [Szemerédi–Trotter 정리](szemeredi-trotter.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory
