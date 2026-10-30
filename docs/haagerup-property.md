# Haagerup 성질

# 개요

**Haagerup 성질(Haagerup property)** 은 군의 원소들을 [Hilbert 공간](hilbert-spaces.md)의 거리를 보존하는 변환으로 나타낼 때, 군에서 멀리 떨어진 원소일수록 점을 멀리 옮기게 할 수 있는 성질이다. 정수 $n$ 을 직선의 평행이동 $x\mapsto x+n$ 으로 보내면 $\vert n\vert$ 이 클수록 원점이 멀리 옮겨지고, 이에 맞춰 함수 $e^{-t\vert n\vert}$ 는 $n$ 이 멀어지면 $0$ 으로 가고 $t\to 0$ 이면 모든 $n$ 에서 $1$ 로 간다. Haagerup 성질은 이런 양의 정부호 함수들로 상수함수 $1$ 을 근사할 수 있는지로 군을 가른다.

# 직관

$\mathbb Z$ 위의 함수 $\varphi\_t(n)=e^{-t\vert n\vert}$ $(t\gt 0)$ 를 본다. $\vert n\vert\to\infty$ 에서 $\varphi\_t(n)\to 0$ 이고, $t\to 0$ 이면 모든 $n$ 에서 $\varphi\_t(n)\to 1$ 이다. 이 함수를 계수로 하는 [Fourier 급수](fourier-series.md)를 계산하면

$$
\sum\_{n\in\mathbb Z}e^{-t\vert n\vert}e^{in\theta}=\frac{1-e^{-2t}}{1-2e^{-t}\cos\theta+e^{-2t}}
$$

이고, 분모가 $(1-e^{-t})^2+2e^{-t}(1-\cos\theta)\gt 0$ 이므로 우변은 양수다. 양수인 함수의 Fourier 계수이므로 $\varphi\_t$ 는 양의 정부호다.

$\varphi\_t$ 가 $e^{-t\psi}$ 꼴이고 $\psi(n)=\vert n\vert$ 가 $n\to\infty$ 에서 무한대로 간다는 것이 이 계산의 요점이다. 자유군에서는 단어 길이 $\vert g\vert$ 가 같은 역할을 한다. 원소가 멀어질수록 $0$ 으로 가는 양의 정부호 함수로 $1$ 을 근사할 수 있는 군을 Haagerup 성질을 갖는다고 한다.

# 정의

$G$ 는 셀 수 있는 이산군이다. $g\to\infty$ 는 $g$ 가 모든 유한 부분집합을 결국 벗어나는 것을 뜻한다. $\mathbb Z$ 에서는 $\vert n\vert\to\infty$ 와 같다.

## 양의 정부호 함수

**양의 정부호(positive definite)** 함수는 모든 유한 개의 $g\_1,\dots,g\_m\in G$ 와 $c\_1,\dots,c\_m\in\mathbb C$ 에 대해 다음을 만족하는 함수 $\varphi\colon G\to\mathbb C$ 다.

$$
\sum\_{i,j}c\_i\overline{c\_j}\thinspace\varphi(g\_j^{-1}g\_i)\ge 0
$$

상수함수 $\varphi=1$ 은 합이 $\vert\sum c\_i\vert^2\ge 0$ 이므로 양의 정부호다. 직관 절의 $\varphi\_t(n)=e^{-t\vert n\vert}$ 도 양의 정부호다.

## 조건부 음의 정부호 함수

**조건부 음의 정부호(conditionally negative definite)** 함수는 $\psi(e)=0$, $\psi(g^{-1})=\psi(g)$ 이고 $\sum c\_i=0$ 인 모든 [실수](real-numbers.md) $c\_i$ 에 대해 $\sum\_{i,j}c\_ic\_j\psi(g\_j^{-1}g\_i)\le 0$ 인 함수 $\psi\colon G\to\mathbb R$ 다.

$\mathbb Z$ 에서 $\psi(n)=n^2$ 이 그 예다. $g\_j^{-1}g\_i=n\_i-n\_j$ 이므로 합을 전개하면 $\sum c\_i=0$ 에서 $\sum\_{i,j}c\_ic\_j(n\_i-n\_j)^2=-2\left(\sum c\_in\_i\right)^2\le 0$ 이다.

## 고유 아핀 등거리 작용

실 Hilbert 공간 $\mathcal H$ 위의 아핀 등거리 작용 $\alpha$ 가 **고유(proper)** 하다는 것은 모든 $v\in\mathcal H$ 에 대해 $g\to\infty$ 에서 $\Vert\alpha\_g(v)\Vert\to\infty$ 인 것이다.

$\mathbb Z$ 가 $\mathbb R$ 위에 평행이동 $\alpha\_n(x)=x+n$ 으로 작용하면 $\vert x+n\vert\to\infty$ 이므로 고유하다. 유한군의 작용은 $g\to\infty$ 인 열이 없으므로 조건이 저절로 성립한다.

## Haagerup 성질

$G$ 가 **Haagerup 성질** 을 갖는다는 것은 $\varphi\_n(e)=1$ 이고 $g\to\infty$ 에서 $\varphi\_n(g)\to 0$ 인 양의 정부호 함수열 $\varphi\_n$ 이 모든 $g$ 에서 $1$ 로 수렴하는 것이다[^1].

$\mathbb Z$ 에서는 직관 절의 함수에서 $t=1/n$ 으로 둔 $\varphi\_n(k)=e^{-\vert k\vert/n}$ 이 이 조건을 만족한다. 유한군에서는 모든 $n$ 에서 $\varphi\_n=1$ 로 두면 된다.

# 성질

## 세 조건의 동치

**정리.** 셀 수 있는 이산군 $G$ 에 대해 다음 셋이 동치다[^1].

1. $G$ 가 Haagerup 성질을 갖는다.
2. $g\to\infty$ 에서 무한대로 가는 조건부 음의 정부호 함수 $\psi$ 가 있다.
3. 실 Hilbert 공간 위의 고유 아핀 등거리 작용이 있다.

3 의 꼴을 보고 Gromov 는 이 성질을 a-T-순종성(a-T-amenability)이라 불렀다.

2 에서 1 은 Schoenberg 정리(Schoenberg's theorem)로 $e^{-t\psi}$ 가 양의 정부호인 것에서 나온다. $t\to 0$ 으로 보내면 1 의 함수열이 된다. 3 에서 2 는 $\psi(g)=\Vert\alpha\_g(0)\Vert^2$ 로 둔다. 2 에서 3 은 $\psi$ 로 Hilbert 공간을 만드는 GNS 구성(Gelfand–Naimark–Segal construction)의 아핀판으로 얻는다.

## 이 성질을 갖는 군

- [순종군](amenable-groups.md)은 Haagerup 성질을 갖는다[^2].
- 유한생성 자유군은 단어 길이가 조건부 음의 정부호여서 이 성질을 갖는다[^3]. 나무에 고유하게 작용하는 군, 예를 들어 $\mathrm{SL}\_2(\mathbb Z)$ 도 같다.
- [Coxeter 군](coxeter-groups.md)은 이 성질을 갖는다[^1].

## Kazhdan 성질 (T) 와의 관계

$G$ 가 Kazhdan 성질 (T)(Kazhdan's property (T)) 를 가지면 Hilbert 공간 위의 모든 아핀 등거리 작용이 고정점을 갖는다(Delorme–Guichardet 정리)[^1]. 고정점이 있는 작용은 궤도가 유계이므로 고유하지 않다. 그래서 두 성질을 함께 갖는 이산군은 유한군뿐이다. $n\ge 3$ 이면 $\mathrm{SL}\_n(\mathbb Z)$ 가 성질 (T) 를 가지므로 Haagerup 성질을 갖지 않는다.

# 활용

- [Baum–Connes 추측](baum-connes-conjecture.md)은 Haagerup 성질을 갖는 군에서 계수가 있는 판까지 성립한다(Higson–Kasparov). 증명은 고유 아핀 등거리 작용을 써서 Dirac–쌍대 Dirac 원소를 만든다.
- Haagerup 은 자유군의 축소 군 [C 스타 대수](c-star-algebras.md)가 핵형이 아니면서 거리 근사 성질(metric approximation property)을 갖는다는 것을 이 성질의 함수열로 증명했다[^3].

[^1]: P.-A. Cherix, M. Cowling, P. Jolissaint, P. Julg, A. Valette, *Groups with the Haagerup Property*, Progress in Mathematics 197, Birkhäuser (2001).
[^2]: M. E. B. Bekka, P.-A. Cherix, A. Valette, Proper affine isometric actions of amenable groups, in *Novikov Conjectures, Index Theorems and Rigidity, Vol. 2*, London Math. Soc. Lecture Note Ser. 227, Cambridge Univ. Press (1995), 1–4.
[^3]: U. Haagerup, An example of a nonnuclear C\*-algebra which has the metric approximation property, *Invent. Math.* 50 (1979), 279–293.

# 연관 문서

## 선수지식

- [순종군](amenable-groups.md)
- [Hilbert 공간](hilbert-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #functional_analysis
