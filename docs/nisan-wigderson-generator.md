# Nisan–Wigderson 생성기

# 개요

**Nisan–Wigderson 생성기(Nisan–Wigderson generator)** 는 짧은 무작위 비트열을 길게 늘려, 크기가 정해진 회로가 진짜 무작위 비트열과 구별하지 못하는 비트열을 만드는 구성이다. 동전 $100$ 개를 던져 답을 내는 알고리즘을 동전 없이 돌리려면 $2^{100}$ 가지 비트열을 모두 넣어 보고 다수결을 내야 하고, 이 수는 너무 크다. 이 생성기는 회로로 계산하기 어려운 함수 하나를 서로 조금씩만 겹치는 비트 묶음들에 적용해 짧은 씨에서 긴 비트열을 만든다. 씨의 길이가 입력 길이의 로그 정도이므로 씨를 전부 넣어 보는 비용이 다항식이 된다.

# 직관

Nisan–Wigderson 생성기는 회로로 계산하기 어려운 함수 하나와 조합적 설계로부터, 짧은 씨를 길게 늘려 크기가 제한된 회로가 균등 난수와 구별하지 못하는 비트열을 만드는 구성이다. N. Nisan 과 A. Wigderson 이 1994 년에 발표했다[^1].

[유사난수 생성기](pseudorandom-generators.md)는 일방향 함수를 가정하고 다항시간 구별자를 속인다. 이 생성기는 구별자의 회로 크기를 미리 정하고, 생성기 자신이 구별자보다 오래 도는 것을 허락한다. 그래서 가정이 일방향 함수에서 [불 회로](boolean-circuits.md)의 하한으로 약해지고, 씨의 길이를 $O(\log n)$ 으로 줄일 수 있다. 씨를 모두 돌려 보면 [무작위 복잡도 부류](randomized-complexity-classes.md)의 BPP(bounded-error probabilistic polynomial time) 알고리즘이 결정적 알고리즘으로 바뀐다.

BPP 알고리즘은 입력 길이 $n$ 에서 무작위 비트 $m=n^c$ 개를 쓴다. 이 알고리즘을 결정적으로 돌리려면 $2^m$ 개의 비트열을 모두 시험해 다수결을 내야 한다. 비트열을 모두 시험하지 않으려면, 길이 $\ell=O(\log n)$ 의 씨 $z$ 에서 만든 $m$ 비트 $G(z)$ 가 이 알고리즘에게 균등 난수와 같은 답을 주어야 한다. 그러면 씨 $2^\ell=n^{O(1)}$ 개를 모두 시험하는 것으로 충분하다.

$G(z)$ 의 비트를 어려운 함수 $f$ 의 값으로 만든다. $f$ 가 $n$ 비트 입력에서 작은 회로로 예측되지 않는 함수라 하자. 씨 $z$ 의 서로 다른 부분 $n$ 비트에 $f$ 를 적용해 $f(z\vert\_{S_1}),\dots,f(z\vert\_{S_m})$ 을 출력한다. 부분들이 겹치지 않으면 $\ell=mn$ 이 되어 씨가 짧아지지 않는다. 그래서 부분들이 조금씩만 겹치게 고른다. 두 부분이 $\log m$ 비트 이하로 겹치면, 한 출력 비트를 고정했을 때 다른 출력 비트는 $\log m$ 비트의 함수여서 작은 표로 계산된다. 이것이 증명에서 앞 비트들로 뒤 비트를 예측하는 회로를 작게 유지한다.

# 정의

## 조합적 설계

$\lbrack\ell\rbrack=\lbrace 1,\dots,\ell\rbrace$ 의 부분집합 $S_1,\dots,S_m$ 이 모두 크기 $n$ 이고 서로 다른 둘의 교집합이 $a$ 이하이면 **$(\ell,n,a)$-설계(design)** 라 한다. 상수 $\delta\gt 0$ 에 대해 $\ell=O(n)$, $a=\log m$, $m=2^{\delta n}$ 인 설계가 있고, 탐욕적으로 시간 $2^{O(\ell)}$ 에 만들어진다[^1].

## 생성기

$f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 와 설계 $S_1,\dots,S_m$ 에 대해

$$
G(z)=f(z\vert\_{S_1})\thinspace f(z\vert\_{S_2})\cdots f(z\vert\_{S_m}),\qquad z\in\lbrace 0,1\rbrace^\ell
$$

로 둔다. $z\vert\_{S}$ 는 $z$ 에서 $S$ 의 좌표만 순서대로 뽑은 $n$ 비트다.

## 평균 경우의 어려움

$f$ 가 크기 $s$ 에 대해 **$\varepsilon$-어렵다** 는 것은 크기 $s$ 이하의 모든 회로 $C$ 가 $\Pr_x\lbrack C(x)=f(x)\rbrack\le 1/2+\varepsilon$ 을 만족한다는 것이다. $x$ 는 $\lbrace 0,1\rbrace^n$ 에서 균등하게 고른다.

# 성질

## Nisan–Wigderson 정리

정리. $f$ 가 크기 $s$ 에 대해 $\varepsilon/m$-어렵고 $S_1,\dots,S_m$ 이 $(\ell,n,\log m)$-설계이면, 크기 $s-O(m^2)$ 이하의 모든 회로 $D$ 가

$$
\big\lvert\Pr_z\lbrack D(G(z))=1\rbrack-\Pr_r\lbrack D(r)=1\rbrack\big\rvert\le\varepsilon
$$

를 만족한다[^1].

증명의 요지. 어떤 $D$ 가 차이 $\varepsilon$ 을 넘게 구별한다고 하자. 처음 $i$ 비트는 $G(z)$ 에서, 나머지는 균등 난수에서 가져온 혼합 분포들을 사이에 놓으면, 이웃한 두 혼합의 차이가 $\varepsilon/m$ 을 넘는 $i$ 가 있다. 이로부터 앞 $i-1$ 비트를 보고 $i$ 번째 비트 $f(z\vert\_{S_i})$ 를 $1/2+\varepsilon/m$ 넘는 확률로 맞히는 회로가 나온다(A. C. Yao 의 다음 비트 예측). $S_i$ 밖의 좌표를 평균보다 나쁘지 않은 값으로 고정하면, $j\lt i$ 인 각 $f(z\vert\_{S_j})$ 는 $S_i\cap S_j$ 의 $\log m$ 비트 이하의 함수가 되어 크기 $O(m)$ 의 표로 계산된다. 이 표 $i-1$ 개를 붙이면 $f$ 를 예측하는 크기 $\lvert D\rvert+O(m^2)$ 의 회로가 되어 가정에 어긋난다.

## 회로 하한에서 탈무작위화로

따름정리. 시간 $2^{O(n)}$ 에 계산되는 함수 $f$ 가 크기 $2^{\delta n}$ 의 회로에 대해 $2^{-\delta n}$-어려운 상수 $\delta\gt 0$ 이 있으면 $\mathrm{BPP}=\mathrm P$ 다[^1].

증명의 요지. 입력 길이 $N$ 의 BPP 알고리즘은 크기 $N^c$ 의 회로로 쓰이고, 무작위 비트를 $N^c$ 개 쓴다. $n=O(\log N)$ 으로 잡아 $m=N^c$ 이 되게 하면 씨 길이가 $\ell=O(\log N)$ 이고 $G$ 는 시간 $N^{O(1)}$ 에 계산된다. 씨를 모두 돌려 다수결을 내면 결정적 다항시간 알고리즘이다.

R. Impagliazzo 와 A. Wigderson 은 평균 경우의 어려움을 최악 경우의 어려움으로 바꾸어, 지수 시간 부류 E 의 어떤 함수가 크기 $2^{\delta n}$ 의 회로로 계산되지 않으면 $\mathrm{BPP}=\mathrm P$ 라는 것을 증명했다[^2]. 최악 경우의 함수를 오류정정부호로 부호화해 평균 경우로 어렵게 만드는 단계가 그 증명에 들어간다.

# 활용

- [무작위 복잡도 부류](randomized-complexity-classes.md)의 BPP 와 $\mathrm P$ 의 관계. 회로 하한이 증명되면 이 생성기로 BPP 가 $\mathrm P$ 로 내려온다. 반대 방향으로 V. Kabanets 와 R. Impagliazzo 는 다항식 항등 판정의 탈무작위화가 회로 하한을 함의한다는 것을 보였다[^3].
- [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)의 무작위 다항식 항등 판정이 탈무작위화의 대표적 대상이다.
- [유사난수 생성기](pseudorandom-generators.md)와의 차이. 암호의 생성기는 자신보다 오래 도는 다항시간 구별자까지 속여야 하고 일방향 함수를 가정한다. 이 생성기는 구별자보다 오래 돌 수 있으므로 일방향 함수 없이 회로 하한만 가정한다.

[^1]: N. Nisan, A. Wigderson, "Hardness vs randomness", Journal of Computer and System Sciences 49 (1994), 149–167.
[^2]: R. Impagliazzo, A. Wigderson, "P = BPP if E requires exponential circuits: derandomizing the XOR lemma", Proceedings of the 29th ACM Symposium on Theory of Computing (1997), 220–229.
[^3]: V. Kabanets, R. Impagliazzo, "Derandomizing polynomial identity tests means proving circuit lower bounds", Computational Complexity 13 (2004), 1–46.

# 연관 문서

## 선수지식

- [유사난수 생성기](pseudorandom-generators.md)
- [불 회로](boolean-circuits.md)
- [무작위 복잡도 부류](randomized-complexity-classes.md)

## 더 알아보기

- [쉬운 증거 보조정리](easy-witness-lemma.md)

#complexity #computation #cryptography
