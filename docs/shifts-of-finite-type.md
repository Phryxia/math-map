# 유한형 이동

# 개요

**유한형 이동(shift of finite type)** 은 유한 알파벳 위의 양방향 무한 수열 가운데, 금지된 유한 개의 낱말을 하나도 담지 않는 수열 전체에 한 칸 이동을 준 동역학계(dynamical system)다. $0$ 과 $1$ 로 된 신호에서 $1$ 이 연달아 두 번 나오면 안 되는 채널이 있을 때, 길이 $n$ 의 허용 문자열이 몇 개인지와 한 글자당 실어 보낼 수 있는 정보가 얼마인지가 문제다. 유한형 이동은 금지 낱말을 전이 [행렬](matrices.md)로 바꾸고, 허용 문자열의 수가 늘어나는 비율을 그 행렬의 가장 큰 고윳값으로 계산한다.

# 직관

$0$ 과 $1$ 로 된 문자열 가운데 $1$ 이 연달아 두 번 나오지 않는 것만 쓸 수 있다고 하자. 길이 $n$ 인 그런 문자열의 수를 $a\_n$ 이라 하면 $a\_1=2$, $a\_2=3$ 이다. 길이 $n$ 인 문자열은 마지막 글자가 $0$ 이면 앞의 $n-1$ 글자가 아무 허용 문자열이고, $1$ 이면 그 앞 글자가 $0$ 이어야 해서 앞의 $n-2$ 글자가 아무 허용 문자열이다. 그래서 $a\_n=a\_{n-1}+a\_{n-2}$ 이고 $a\_n$ 은 Fibonacci 수다.

[Fibonacci 수](fibonacci-numbers.md)는 황금비 $\varphi=(1+\sqrt 5)/2$ 의 거듭제곱처럼 자라므로, 길이 $n$ 의 허용 문자열은 대략 $\varphi^n$ 개다. 한 글자당 실어 보낼 수 있는 정보는 $\log\_2\varphi\approx 0.694$ 비트이고, 제한이 없을 때의 $1$ 비트보다 적다.

같은 계산을 행렬로 쓴다. 바로 앞 글자에서 다음 글자로 갈 수 있으면 $1$, 없으면 $0$ 을 적은 행렬은 $A=\begin{pmatrix}1&1\cr 1&0\end{pmatrix}$ 이고, 길이 $n$ 인 허용 문자열의 수는 $A^{n-1}$ 의 성분의 합이다. $A$ 의 가장 큰 고윳값이 $\varphi$ 다. 금지 목록이 무엇이든 이렇게 행렬을 만들면 허용 문자열이 늘어나는 비율은 그 행렬의 가장 큰 고윳값이다.

# 정의

## 이동 사상

유한 알파벳 $\mathcal A$ 에 대해 $\mathcal A^{\mathbb Z}$ 에 곱위상을 준다. **이동 사상(shift map)** $\sigma$ 는 $\sigma(x)\_i=x\_{i+1}$ 로 정의되는 사상이다. 직관 절의 알파벳은 $\mathcal A=\lbrace 0,1\rbrace$ 이고, $\sigma$ 는 수열의 모든 글자를 한 칸씩 왼쪽으로 옮긴다.

## 부분 이동과 유한형 이동

유한 낱말의 집합 $\mathcal F$ 에 대해 $X\_{\mathcal F}$ 는 $\mathcal F$ 의 낱말이 어느 자리에도 연속해 나타나지 않는 $x\in\mathcal A^{\mathbb Z}$ 전체다. 낱말의 집합 $\mathcal F$ 를 무한 집합까지 허용해 이 꼴로 얻는 집합을 **부분 이동(subshift)** 이라 하고, $\mathcal F$ 를 유한 집합으로 잡을 수 있는 것을 **유한형 이동** 이라 한다. 부분 이동은 기호 동역학(symbolic dynamics)이 다루는 대상이다.[^1] 직관 절의 수열 전체는 $\mathcal F=\lbrace 11\rbrace$ 인 유한형 이동 $X\_{\lbrace 11\rbrace}$ 이다.

성분이 $0$ 과 $1$ 인 정사각행렬 $A$ 에 대해, 모든 $i$ 에서 $A\_{x\_ix\_{i+1}}=1$ 인 수열 전체를 $X\_A$ 로 적는다. $X\_A$ 는 $A\_{ab}=0$ 인 낱말 $ab$ 를 금지 목록으로 하는 유한형 이동이다. 직관 절의 행렬 $A=\begin{pmatrix}1&1\cr 1&0\end{pmatrix}$ 에서는 $A\_{11}=0$ 만 금지하므로 $X\_A=X\_{\lbrace 11\rbrace}$ 이다.

## 위상 엔트로피

부분 이동 $X$ 에 나타나는 길이 $n$ 인 낱말의 집합을 $B\_n(X)$ 라 할 때

$$
h(X)=\lim\_{n\to\infty}\frac{1}{n}\log\lvert B\_n(X)\rvert
$$

를 $X$ 의 **위상 엔트로피(topological entropy)** 라 한다. $X\_{\lbrace 11\rbrace}$ 에서 $\lvert B\_n\rvert$ 는 직관 절의 $a\_n$ 이고 대략 $\varphi^n$ 이므로 $h=\log\varphi$ 다.

# 성질

## 기본 성질

$\sigma$ 는 $\mathcal A^{\mathbb Z}$ 의 위상동형사상이다. $X\_{\mathcal F}$ 는 닫혀 있고 $\sigma(X\_{\mathcal F})=X\_{\mathcal F}$ 다. 모든 유한형 이동은 글자를 길이 $k$ 인 낱말로 바꿔 쓰면 어떤 $X\_A$ 와 같아진다. 위상 엔트로피의 극한은 $\log\lvert B\_n\rvert$ 의 부분가법성과 [Fekete 보조정리](fekete-lemma.md)로 존재한다.

## 엔트로피 공식


비어 있지 않은 $X\_A$ 에 대해 $h(X\_A)=\log\lambda\_A$ 다. 여기서 $\lambda\_A$ 는 $A$ 의 스펙트럼 반지름이다.

증명의 요지. $\lvert B\_n(X\_A)\rvert$ 는 $A^{n-1}$ 의 성분의 합과 같다(허용 낱말이 모두 무한 수열로 늘어나도록 $A$ 의 쓰이지 않는 행과 열을 지운 뒤). 성분의 합은 행렬의 노름이므로 $\lvert B\_n\rvert^{1/n}\to\lambda\_A$ 다. $A$ 가 기약이면 [Perron–Frobenius 정리](perron-frobenius.md)로 $\lambda\_A$ 는 양의 고유벡터를 갖는 고윳값이고, $\lvert B\_n\rvert$ 는 $\lambda\_A^n$ 의 상수배 범위 안에 있다. ∎

## 주기점과 zeta 함수

$\sigma^n(x)=x$ 인 $x\in X\_A$ 의 수는 $\mathrm{tr}(A^n)$ 이다. 주기 $n$ 인 수열은 길이 $n$ 인 닫힌 경로를 되풀이한 것이고, 닫힌 경로의 수가 대각합이다. 따라서

$$
\zeta(t)=\exp\left(\sum\_{n\ge 1}\frac{\mathrm{tr}(A^n)}{n}t^n\right)=\frac{1}{\det(I-tA)}
$$

이고, 이 함수를 $X\_A$ 의 Bowen–Lanford zeta 함수(Bowen–Lanford zeta function)라 한다.

## Curtis–Hedlund–Lyndon 정리

부분 이동 사이의 사상 $\phi:X\to Y$ 가 연속이고 $\phi\circ\sigma=\sigma\circ\phi$ 인 것은, 어떤 $m$ 과 함수 $\Phi:\mathcal A^{2m+1}\to\mathcal A'$ 에 대해 $\phi(x)\_i=\Phi(x\_{i-m},\dots,x\_{i+m})$ 인 것과 동치다.

이런 $\phi$ 를 미끄럼 블록 부호(sliding block code)라 한다. $X$ 의 콤팩트성으로 연속 사상이 고른 연속이 되어 $\phi(x)\_0$ 이 $x$ 의 유한 구간으로 정해진다. 위상 엔트로피는 일대일 대응인 미끄럼 블록 부호, 곧 위상 공액(topological conjugacy)으로 보존된다.

## 2차원의 공허 문제

공허 문제(emptiness problem)는 유한형 이동이 비어 있는지 판정하는 문제다. 1차원 유한형 이동 $X\_A$ 가 비어 있는지는 $A$ 의 그래프에 순환이 있는지로 판정된다. $\mathbb Z^2$ 위의 유한형 이동, 곧 가로와 세로 이웃에 금지 목록을 둔 것에서는 이 판정이 결정 불가능하다. 색이 같아야 하는 변을 금지 목록으로 적으면 [Wang 타일](wang-tiles.md)의 타일링 전체가 $\mathbb Z^2$ 위의 유한형 이동이 되므로, Wang 타일 집합이 평면을 덮는지 판정할 수 없다는 Berger 정리(Berger's theorem)가 그대로 적용된다.

# 활용

- 제한 부호화(constrained coding). 자기 기록 장치는 $1$ 사이의 $0$ 의 개수를 제한한 런 길이 제한(run-length-limited) 부호를 쓴다. 허용 수열이 유한형 이동이고, Shannon 의 용량은 그 위상 엔트로피다. Adler, Coppersmith, Hassner 는 상태 분할(state splitting)로 엔트로피 이하의 모든 유리수 부호율 $p/q$ 를 내는 유한 상태 부호기를 구성했다[^2].
- [Kolmogorov–Sinai 엔트로피](kolmogorov-sinai-entropy.md). 불변 확률측도의 측도 엔트로피는 위상 엔트로피 이하이고, 기약인 $X\_A$ 에서는 등호를 이루는 측도가 하나뿐이다. 이 측도를 Parry 측도라 하고, Perron–Frobenius 고유벡터로 정의되는 Markov 측도다.
- 쌍곡 동역학. 토러스의 쌍곡 자기동형사상은 Markov 분할(Markov partition)로 점을 기호열로 부호화해 유한형 이동의 상(image)으로 나타난다.

[^1]: D. Lind, B. Marcus, *An Introduction to Symbolic Dynamics and Coding*, Cambridge University Press (1995).
[^2]: R. L. Adler, D. Coppersmith, M. Hassner, Algorithms for sliding block codes, *IEEE Transactions on Information Theory* **29** (1983), 5–22.

# 연관 문서

## 선수지식

- [Perron–Frobenius 정리](perron-frobenius.md)
- [Shannon 엔트로피](entropy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #combinatorics #linear_algebra
