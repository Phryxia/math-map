# 수열의 극한

# 개요

**수열의 극한(limit of a sequence)** 은 수열의 항이 뒤로 갈수록 한 값에 원하는 만큼 가까워질 때의 그 값이다. $1/2,2/3,3/4,4/5,\dots$ 은 $1$ 에 다가가지만 어느 항도 $1$ 이 아니므로, "결국 $1$ 이 된다" 고 쓸 수 없다. 대신 "$1$ 과의 차이를 $0.01$ 보다 작게 하려면 $100$ 번째 항부터 보면 된다" 처럼 오차마다 그 뒤의 항이 모두 그 오차 안에 드는 자리를 댈 수 있다. 수열의 극한은 이 진술을 모든 오차에 대해 요구하는 것으로 정의한다.

# 직관

$a_n=n/(n+1)$ 은 $1/2,2/3,3/4,\dots$ 이다. $1-a_n=1/(n+1)$ 이므로 $1$ 과의 차이는 $n=99$ 에서 $0.01$, $n=999$ 에서 $0.001$ 이고, 그 뒤로는 더 작다. 어느 항도 $1$ 은 아니지만, 차이를 얼마로 정하든 그보다 작아지는 자리가 있다.

오차 $0.01$ 을 정하면 $n\ge 100$ 인 모든 항이 $1$ 과 $0.01$ 보다 덜 차이 난다. 오차를 $\varepsilon$ 으로 바꾸면 $1/(n+1)\lt\varepsilon$ 인 $n$, 곧 $n\gt 1/\varepsilon-1$ 부터 보면 된다. 오차가 먼저 주어지고, 자리는 그 오차를 보고 정한다.

같은 수열의 앞의 백 항을 모두 $0$ 으로 바꿔도 $100$ 번째 이후의 항은 그대로이므로 이 계산은 바뀌지 않는다. 극한은 수열의 뒤쪽 항만으로 정해진다.

# 정의

## 수렴

[실수](real-numbers.md) 수열은 자연수를 정의역으로 하는 [함수](functions.md)이고 $n$ 번째 값을 $a_n$ 으로 쓴다. 실수 $L$ 에 대해 다음이 성립하면 수열이 $L$ 로 **수렴(converge)** 한다고 한다.

$$
\forall\varepsilon\gt 0\thickspace\exists N\in\mathbb N\thickspace\forall n\ge N:\ \lvert a_n-L\rvert\lt\varepsilon
$$

$$
\lim_{n\to\infty}a_n=L
$$

식의 $\forall$ 와 $\exists$ 는 [증명](proofs.md)에서 다루는 한정기호(quantifier)이고, $N$ 은 $\varepsilon$ 을 본 뒤에 정한다. 직관 절의 $a_n=n/(n+1)$ 은 $L=1$ 이고, $\varepsilon$ 마다 $N\gt 1/\varepsilon-1$ 인 자연수 $N$ 을 고르면 식이 성립한다.

수렴하지 않으면 **발산(diverge)** 한다고 하고, 그중 모든 $M$ 에 대해 어떤 $N$ 이후 $a_n \gt M$ 이 되는 경우를 $+\infty$ 로 발산한다고 한다. $a_n=(-1)^n$ 은 발산하고, $a_n=n$ 은 $+\infty$ 로 발산한다.

## 상극한과 하극한

수렴하지 않는 수열에도 뒤쪽 항의 크기를 재는 두 값이 정의된다. 왼쪽이 **상극한(limit superior)**, 오른쪽이 **하극한(limit inferior)** 이다.

$$
\limsup_{n\to\infty}a_n=\lim_{N\to\infty}\ \sup_{n\ge N}a_n,\qquad \liminf_{n\to\infty}a_n=\lim_{N\to\infty}\ \inf_{n\ge N}a_n
$$

$a_n=(-1)^n$ 이면 모든 $N$ 에서 $\sup_{n\ge N}a_n=1$, $\inf_{n\ge N}a_n=-1$ 이므로 상극한은 $1$, 하극한은 $-1$ 이다.

# 성질

## 상극한과 하극한의 성질

유계 수열에서는 둘 다 존재하고, 둘이 같을 때가 정확히 수렴할 때다. 존재 여부를 미리 따지지 않고 논증할 수 있어 부등식 증명에 쓰인다.

## 기본 성질

- 유일성. 극한이 둘이면 오차를 두 값 거리의 $1/3$ 로 잡고 삼각부등식을 쓰면 모순이 나온다.

$$
\lvert L-M\rvert\le\lvert L-a_n\rvert+\lvert a_n-M\rvert\lt\tfrac23\lvert L-M\rvert
$$

- 유계성. 수렴 수열은 유계다. 극한에서 거리 1 이내인 꼬리와 앞의 유한 개 항을 각각 제한한다.
- 대수. 수렴하는 두 수열의 합, 차, 곱은 각각의 극한의 합, 차, 곱으로 수렴하고, 분모의 극한이 0 이 아니면 몫도 수렴한다.
- 조임 정리(squeeze theorem). $a_n \le b_n \le c_n$ 이고 양끝이 같은 값으로 수렴하면 가운데도 그 값으로 수렴한다.
- 순서 보존. $a_n \le b_n$ 이면 극한도 $\le$ 다. 강한 부등식은 극한에서 약해진다. $1/n \gt 0$ 이지만 극한은 0 이다.

## 완비성에 기대는 정리

단조 증가하면서 위로 유계인 실수 수열은 수렴한다. 이 명제는 실수의 [완비성](completeness.md), 곧 상한 공리(least upper bound axiom)와 동치이고 유리수 안에서는 거짓이다. $\sqrt2$ 로 다가가는 유리수 단조 수열은 유리수 안에 극한을 갖지 않는다.

- [Bolzano–Weierstrass 정리](bolzano-weierstrass.md). 유계 수열은 수렴하는 부분수열을 갖는다. 구간을 반씩 쪼개며 항이 무한히 많은 쪽을 택한다.
- Cauchy 판정(Cauchy criterion). 충분히 뒤의 임의의 두 항이 서로 가까워지는 수열을 Cauchy 수열(Cauchy sequence)이라 하고, 실수 수열은 Cauchy 수열인 것과 수렴하는 것이 동치다. 이 동치로 극한값을 모르는 채로 수렴을 증명한다.

## 차분이 0 으로 가는 발산 수열

항 사이의 차가 0 으로 가도 수렴하지 않는다. $a_n = \sqrt n$ 은 $a_{n+1} - a_n \to 0$ 이지만 발산하고, 조화급수(harmonic series)의 부분합도 마찬가지다. Cauchy 조건은 이웃한 두 항이 아니라 충분히 뒤의 임의의 두 항이 가까워질 것을 요구한다.

# 활용

- 해석학의 정의. 연속성은 수렴하는 입력 수열을 수렴하는 출력 수열로 보내는 성질과 동치이고, 미분은 차분몫 수열의 극한, 적분은 근사합의 극한, 무한급수의 합은 부분합 수열의 극한이다.
- 알고리즘의 수렴. [Newton 법](newton-method.md)의 이차 수렴, [경사하강법](gradient-descent.md)의 선형 수렴, Monte Carlo 추정(Monte Carlo estimation)의 $1/\sqrt n$ 오차가 수렴 속도에 대한 진술이다. 확률에서는 거의 확실한 수렴(almost sure convergence), 확률 수렴(convergence in probability), 분포 수렴(convergence in distribution)이 구별된다.
- 일반화. 거리만 있으면 같은 정의를 쓰므로 [거리 공간](metric-spaces.md)에서 그대로 반복되고, 근방만 있는 위상공간에서는 수열 대신 [그물](filters-and-nets.md)(net)을 쓴다. 함수열에서는 각 점의 수렴과 전체의 고른 수렴이 갈라지며 그 차이가 [균등수렴](uniform-convergence.md)의 주제다.[^1]

[^1]: Jiří Lebl, *Basic Analysis*, §2.1 (수열의 극한 정의와 단조 수렴 정리). https://www.jirka.org/ra/html/sec_seqsandlims.html

# 연관 문서

## 선수지식

- [함수](functions.md)
- [실수](real-numbers.md)
- [해석학 개관](analysis-overview.md)

## 더 알아보기

### 수렴을 다루는 틀

- [거리 공간](metric-spaces.md)
- [Bolzano–Weierstrass 정리](bolzano-weierstrass.md)
- [균등수렴](uniform-convergence.md)
- [비표준 해석학](nonstandard-analysis.md)

### 급수와 응용

- [기하급수](geometric-series.md)
- [급수의 수렴판정](series-convergence.md)
- [생성함수](generating-functions.md)
- [큰 수의 법칙](law-of-large-numbers.md)
- [Fekete 보조정리](fekete-lemma.md)

#analysis #topology #algorithms
