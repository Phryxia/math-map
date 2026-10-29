# Impagliazzo 하드코어 보조정리

# 개요

**Impagliazzo 하드코어 보조정리(Impagliazzo's hard-core lemma)** 는 계산하기 조금 어려운 함수의 어려움이 입력의 일부에 모여 있다는 정리다. 작은 회로가 입력의 10% 에서 틀리는 함수 $f$ 가 있으면, 입력의 10% 정도 크기인 집합이 있어 그 위에서는 작은 회로가 $f$ 의 값을 동전 던지기보다 거의 낫게 맞히지 못한다. 어려움이 모인 이 집합을 여러 번 겹쳐 쓰면 조금 어려운 함수에서 거의 완전히 어려운 함수가 만들어진다.

# 직관

Impagliazzo 하드코어 보조정리는 작은 회로가 입력의 $\delta$ 비율 이상에서 틀리는 함수 $f$ 에는, 크기가 입력의 $\delta$ 비율 정도인 입력 집합이 있어서 그 위에서는 작은 회로가 $f$ 의 값을 동전 던지기보다 거의 낫게 맞히지 못한다는 정리다. R. Impagliazzo 가 1995 년에 증명했다[^1].

조금 어려운 함수의 어려움이 한 집합에 모여 있다는 진술이고, 그 집합 위의 어려움을 여러 번 겹쳐 쓰면 거의 완전히 어려운 함수가 만들어진다. 아래의 증명은 N. Nisan 의 것이고 [Yao 최소최대 원리](yao-minimax-principle.md)와 같은 von Neumann 최소최대 정리를 쓴다.

함수 $f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 를 크기 $s$ 의 [불 회로](boolean-circuits.md)로 계산하려 하는데, 어떤 회로도 입력의 10% 이상에서 틀린다고 둔다. 두 가지 경우를 생각할 수 있다. 입력마다 조금씩 어려워서 어느 입력에서나 회로가 90% 정도로 맞을 수도 있고, 입력의 10% 정도에서는 회로가 동전 던지기처럼 맞히고 나머지에서는 쉽게 맞힐 수도 있다.

보조정리에 따르면 둘째 그림이 언제나 성립한다. 회로의 크기를 조금 줄이면, 입력의 10% 정도를 모은 집합 $H$ 가 있어서 그 위에서 고르게 뽑은 입력에 대해 어떤 작은 회로도 맞힐 확률이 $1/2+\varepsilon$ 이하다. 반대로 그런 $H$ 가 없으면, 입력 집합마다 잘 맞히는 작은 회로들을 섞고 다수결을 내어 $f$ 를 90% 넘게 맞히는 회로를 만들 수 있다.

# 정의

- 함수 $f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 가 크기 $s$ 에 대해 **$\delta$-어렵다($\delta$-hard)** 는 것은 크기 $s$ 이하의 모든 회로 $C$ 가 $\Pr_x\lbrack C(x)\ne f(x)\rbrack\ge\delta$ 를 만족하는 것이다. $x$ 는 고르게 뽑는다.
- $\lbrace 0,1\rbrace^n$ 위의 확률분포 $\mu$ 가 **$\delta$-조밀($\delta$-dense)** 하다는 것은 모든 $x$ 에서 $\mu(x)\le 1/(\delta 2^n)$ 인 것이다. 크기 $\delta 2^n$ 이상인 집합 위의 [균등분포](uniform-distribution.md)가 그 예다.

# 성질

## 하드코어 분포

정리. $f$ 가 크기 $s$ 에 대해 $\delta$-어렵고 $\varepsilon\gt 0$ 이면, $\delta$-조밀한 분포 $\mu$ 가 있어서 크기 $s'=c\thinspace\varepsilon^2 s/n$ 이하의 모든 회로 $C$ 가 다음을 만족한다. $c$ 는 절대 상수다[^2].

$$
\Pr_{x\sim\mu}\lbrack C(x)=f(x)\rbrack\le\frac12+\varepsilon
$$

증명의 요지. 크기 $s'$ 의 회로를 고르는 쪽과 $\delta$-조밀한 분포를 고르는 쪽의 영합 게임을 두고, 이득을 $\Pr_{x\sim\mu}\lbrack C(x)=f(x)\rbrack$ 로 한다. 결론이 거짓이면 모든 $\delta$-조밀한 $\mu$ 에 대해 이득이 $1/2+\varepsilon$ 을 넘는 회로가 있고, 최소최대 정리로 회로 위의 분포 $D$ 하나가 모든 $\delta$-조밀한 $\mu$ 에서 기대 이득 $1/2+\varepsilon$ 을 넘긴다.

$D$ 에서 뽑은 회로가 $f(x)$ 를 맞힐 확률이 $1/2+\varepsilon/2$ 이하인 $x$ 의 집합을 $B$ 라 한다. $\lvert B\rvert\ge\delta 2^n$ 이면 $B$ 위의 균등분포가 $\delta$-조밀하면서 기대 이득이 $1/2+\varepsilon/2$ 이하이므로 모순이고, 따라서 $\lvert B\rvert\lt\delta 2^n$ 이다. $D$ 에서 회로 $t=O(n/\varepsilon^2)$ 개를 독립으로 뽑아 다수결을 내면, $B$ 밖의 각 $x$ 에서 다수결이 틀릴 확률이 [집중부등식](concentration-inequalities.md)의 Hoeffding 부등식으로 $2^{-n}$ 미만이다. 합집합 상한으로 $B$ 밖의 모든 $x$ 에서 맞는 회로 $t$ 개가 있고, 그 다수결 회로는 크기 $t s'+O(t)\le s$ 이면서 입력의 $1-\delta$ 비율을 넘게 맞힌다. $f$ 가 $\delta$-어렵다는 가정과 모순이다.

## 하드코어 집합

Impagliazzo 의 원래 진술은 분포 대신 집합이다. 크기 $\delta 2^n$ 이상인 집합 $H$ 가 있어서, 크기 $s\cdot(\varepsilon\delta)^{O(1)}$ 이하의 회로가 $H$ 위의 균등분포에서 $f$ 를 맞힐 확률이 $1/2+\varepsilon$ 이하다[^1]. 하드코어 분포에서 각 $x$ 를 확률 $\delta 2^n\mu(x)$ 로 고르는 무작위 집합이 이 조건을 만족할 확률이 양수임이 합집합 상한으로 증명된다.

## Yao XOR 보조정리

정리(Yao XOR 보조정리, Yao's XOR lemma). XOR(exclusive or)은 배타적 논리합이다. $f$ 가 크기 $s$ 에 대해 $\delta$-어려우면 $f^{\oplus k}(x_1,\dots,x_k)=f(x_1)\oplus\cdots\oplus f(x_k)$ 는 크기 $s\cdot\mathrm{poly}(\varepsilon,\delta)$ 이하의 회로가 확률 $1/2+(1-\delta)^k+\varepsilon$ 넘게 맞히지 못한다.

증명의 요지. 하드코어 집합 $H$ 위에서 $f$ 는 동전 던지기와 구별되지 않는다. $x_1,\dots,x_k$ 가운데 하나라도 $H$ 에 들면 그 좌표의 $f$ 값이 XOR 전체를 동전 던지기처럼 만든다. 모두 $H$ 밖에 있을 확률은 $(1-\delta)^k$ 정도다.

# 활용

- 탈무작위화. [Nisan–Wigderson 생성기](nisan-wigderson-generator.md)는 거의 완전히 어려운 함수를 요구한다. R. Impagliazzo 와 A. Wigderson 은 최악의 경우 어려운 함수에서 XOR 보조정리를 써서 그런 함수를 만들고 $\mathrm P=\mathrm{BPP}$ 의 조건을 얻었다. BPP(bounded-error probabilistic polynomial time)는 양쪽 오류가 유계인 무작위 다항시간 부류다.
- 학습 이론의 boosting. 약한 학습기를 여러 분포 위에서 돌려 다수결로 묶는 boosting 은 증명의 다수결 단계와 같은 꼴이다. A. Klivans 와 R. Servedio 는 boosting 알고리즘이 갱신하는 분포가 하드코어 분포가 된다는 것을 보여 하드코어 보조정리를 다시 증명했다[^3].

[^1]: R. Impagliazzo, "Hard-core distributions for somewhat hard problems", Proceedings of the 36th IEEE Symposium on Foundations of Computer Science (1995), 538–545.
[^2]: S. Arora, B. Barak, *Computational Complexity: A Modern Approach*, Cambridge University Press (2009), 19.1 절. Nisan 의 최소최대 증명.
[^3]: A. R. Klivans, R. A. Servedio, "Boosting and hard-core sets", Machine Learning 53 (2003), 217–238.

# 연관 문서

## 선수지식

- [Yao 최소최대 원리](yao-minimax-principle.md)
- [불 회로](boolean-circuits.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #probability #machine_learning
