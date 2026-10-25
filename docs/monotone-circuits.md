# 단조 회로

# 개요

**단조 회로(monotone circuit)** 는 NOT 게이트 없이 AND 와 OR 게이트만으로 된 [불 회로](boolean-circuits.md)다. 단조 회로는 단조 불 함수, 곧 입력의 비트를 $0$ 에서 $1$ 로 바꾸어도 값이 $1$ 에서 $0$ 으로 내려가지 않는 함수를 계산한다.

A. A. Razborov 는 1985 년에 그래프에 서로 모두 이웃한 꼭짓점 $k$ 개, 곧 크기 $k$ 의 클리크(clique)가 있는지 판정하는 함수가 다항 크기의 단조 회로로 계산되지 않음을 증명했다[^1]. 증명의 근사 단계에 [해바라기 보조정리](sunflower-lemma.md)를 쓴다.

# 직관

꼭짓점이 $n$ 개인 그래프를 간선마다 비트 하나, 모두 $\binom n2$ 비트로 입력받는다. 크기 $k$ 의 클리크가 있으면 $1$ 을 내는 함수는 간선을 더해도 클리크가 사라지지 않으므로 단조다. 꼭짓점 $k$ 개를 고를 때마다 그 사이의 간선 $\binom k2$ 개를 AND 로 묶고, 그것들을 모두 OR 로 묶으면 이 함수를 계산하는 단조 회로가 된다. 크기는 $\binom nk\binom k2$ 정도다.

이보다 훨씬 작은 단조 회로가 없음을 보이려면 회로의 게이트마다 그 게이트가 계산하는 함수를 단순한 함수로 바꾸어 쓴다. 단순한 함수는 "꼭짓점 집합 $X_1,\dots,X_m$ 가운데 하나가 클리크다" 꼴이고, $X_i$ 의 크기와 개수 $m$ 을 작게 묶는다. OR 게이트에서 두 목록을 합치면 $m$ 이 커지므로, 해바라기를 이루는 집합 여러 개를 그 공통 부분 하나로 바꾸어 목록을 줄인다. 바꿀 때마다 틀리는 입력이 조금씩 생긴다. 회로가 작으면 틀리는 입력이 적게 쌓이지만, 끝에 남은 단순한 함수는 클리크 함수와 많은 입력에서 달라야 하므로 게이트가 많아야 한다.

# 정의

$x,y\in\lbrace 0,1\rbrace^n$ 에서 모든 $i$ 에 대해 $x_i\le y_i$ 이면 $x\le y$ 로 쓴다. 불 함수 $f$ 가 **단조(monotone)** 라는 것은 $x\le y$ 이면 $f(x)\le f(y)$ 인 것이다.

단조 회로는 입력 변수와 상수 $0,1$ 과 AND, OR 게이트로 된 불 회로다. 단조 회로가 계산하는 함수는 단조이고, 거꾸로 모든 단조 함수는 단조 회로로 계산된다. $f(a)=1$ 인 극소 입력 $a$ 마다 $a_i=1$ 인 변수의 AND 를 만들어 OR 로 묶으면 된다.

$\mathrm{CLIQUE}\_{n,k}$ 는 꼭짓점이 $n$ 개인 그래프의 간선 비트 $\binom n2$ 개를 입력받아, 크기 $k$ 의 클리크가 있으면 $1$ 을 내는 함수다.

# 성질

## Razborov 정리

정리(Razborov). $k=\lfloor\log_2 n\rfloor$ 이면 $\mathrm{CLIQUE}\_{n,k}$ 를 계산하는 단조 회로의 크기는 $n^{\Omega(\log n)}$ 이상이다[^1]. N. Alon 과 R. Boppana 는 $k$ 가 $n^{2/3}$ 정도일 때 하한을 $2^{\Omega((n/\log n)^{1/3})}$ 로 올렸다[^2].

증명의 요지. 근사법(method of approximations)이다.

- 근사자. 크기 $\ell$ 이하의 꼭짓점 집합 $X_1,\dots,X_m$ ($m\le M$)에 대해 "$X_i$ 가운데 하나가 클리크다" 를 근사자라 한다.
- 시험 입력. 양성 입력은 꼭짓점 $k$ 개 위의 클리크 하나만 간선으로 가진 그래프다. 음성 입력은 꼭짓점을 $k-1$ 가지 색으로 칠하고 색이 다른 두 꼭짓점을 모두 이은 그래프이고, 크기 $k$ 의 클리크가 없다.
- OR 게이트. 두 근사자의 목록을 합친다. AND 게이트. $X_i\cup Y_j$ 꼴의 집합을 모두 모으고 크기가 $\ell$ 을 넘는 것을 버린다. 어느 쪽이든 목록이 $M$ 개를 넘으면, [해바라기 보조정리](sunflower-lemma.md)로 꽃잎 $p$ 개의 해바라기를 찾아 그 집합들을 핵 하나로 바꾸는 일을 목록이 $M$ 개 이하가 될 때까지 되풀이한다.
- 오차. 핵으로 바꾸는 단계는 양성 입력에서 틀리지 않고, 음성 입력에서는 무작위 색칠 아래 확률이 작은 사건에서만 틀린다. AND 의 근사는 음성 입력에서 틀리지 않고, 양성 입력에서는 크기 $\ell$ 을 넘는 집합을 버린 경우에만 틀린다.
- 결론. 출력의 근사자는 비어 있거나(그러면 모든 양성 입력에서 틀린다) 집합을 하나 이상 가진다(그러면 음성 입력의 큰 비율에서 틀린다). 게이트 하나가 만드는 오차의 비율이 작으므로 게이트 수가 커야 한다. $\ell$ 과 $p$ 와 $M$ 을 $\log n$ 의 함수로 맞추면 $n^{\Omega(\log n)}$ 이 나온다.

## 단조 크기와 일반 크기의 간격

Razborov 는 같은 방법으로 이분그래프의 완전 [매칭](matchings.md) 판정이 크기 $n^{\Omega(\log n)}$ 의 단조 회로를 요구함을 증명했다[^3]. 완전 매칭은 다항시간에 판정되어 다항 크기 회로가 있으므로, 단조 회로가 일반 회로보다 초다항 배 클 수 있다. É. Tardos 는 다항시간에 계산되는 단조 함수 가운데 단조 회로 크기가 지수인 것이 있음을 보였다[^4].

## 단조 회로의 깊이

Karchmer–Wigderson 정리(Karchmer–Wigderson theorem)는 단조 함수 $f$ 의 단조 회로 최소 깊이가, $f(x)=1$ 인 $x$ 와 $f(y)=0$ 인 $y$ 를 나눠 받은 두 사람이 $x_i=1$, $y_i=0$ 인 좌표 $i$ 를 찾는 [통신 복잡도](communication-complexity.md)와 같다는 정리다. 이로부터 그래프의 두 꼭짓점이 경로로 이어지는지 판정하는 단조 회로의 깊이가 $\Omega(\log^2 n)$ 임이 증명되었다[^5].

# 활용

- [자연 증명](natural-proofs.md). Razborov 의 단조 하한은 Razborov–Rudich 가 든 자연 증명의 예다.
- [P 대 NP 문제](p-np.md). 클리크 판정은 NP(nondeterministic polynomial time)-완전이므로 일반 회로에 대해 같은 하한이 증명되면 $\mathrm{NP}\not\subseteq\mathrm{P/poly}$ 이다. 근사법은 다항 크기 일반 회로가 있는 완전 매칭에도 초다항 하한을 내므로, 이 방법만으로는 일반 회로의 하한이 나오지 않는다.

[^1]: A. A. Razborov, "Lower bounds for the monotone complexity of some Boolean functions", Soviet Mathematics Doklady 31 (1985), 354–357.
[^2]: N. Alon, R. B. Boppana, "The monotone circuit complexity of Boolean functions", Combinatorica 7(1) (1987), 1–22.
[^3]: A. A. Razborov, "Lower bounds on monotone complexity of the logical permanent", Mathematical Notes of the Academy of Sciences of the USSR 37 (1985), 485–493.
[^4]: É. Tardos, "The gap between monotone and non-monotone circuit complexity is exponential", Combinatorica 8(1) (1988), 141–142.
[^5]: M. Karchmer, A. Wigderson, "Monotone circuits for connectivity require super-logarithmic depth", SIAM Journal on Discrete Mathematics 3 (1990), 255–265.

# 연관 문서

## 선수지식

- [불 회로](boolean-circuits.md)
- [해바라기 보조정리](sunflower-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #combinatorics #graph_theory
