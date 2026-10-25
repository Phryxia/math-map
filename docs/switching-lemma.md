# Håstad 스위칭 보조정리

# 개요

**Håstad 스위칭 보조정리(Håstad's switching lemma)** 는 폭이 작은 DNF(disjunctive normal form) 논리식의 변수를 무작위로 대부분 고정하면, 남은 함수가 높은 확률로 깊이가 작은 결정 나무로 계산된다는 정리다. J. Håstad 가 1986 년에 증명했다[^1].

깊이가 작은 결정 나무는 폭이 작은 CNF(conjunctive normal form) 로도 쓰인다. 그래서 이 정리는 OR 의 AND 를 AND 의 OR 로 바꾸어 [불 회로](boolean-circuits.md)의 이웃한 두 층을 한 층으로 합친다. 층을 하나씩 없애는 이 논증으로 상수 깊이 회로가 홀짝 함수를 계산하지 못한다는 하한이 증명된다.

# 직관

홀짝 함수 $x_1\oplus\cdots\oplus x_n$ 이 깊이가 상수인 작은 회로로 계산되지 않음을 보이려 한다. 불 회로의 세기 논증은 큰 회로가 있어야 하는 함수가 있다는 것만 보이고 그 함수가 홀짝인지는 말하지 않는다. 그래서 작은 상수 깊이 회로가 계산하는 함수에는 있고 홀짝 함수에는 없는 성질을 하나 찾아야 한다.

변수 몇 개를 $0$ 이나 $1$ 로 고정해 본다. 홀짝 함수는 무엇을 고정해도 남은 변수의 홀짝이나 그 부정이 되므로, 남은 변수를 모두 물어보아야 값이 정해진다. 반면 $(x_1\wedge x_2\wedge x_3)\vee(x_4\wedge x_5\wedge x_6)\vee\cdots$ 처럼 세 변수의 AND 를 OR 로 묶은 식에서 변수마다 확률 $0.45$ 로 $0$, $0.45$ 로 $1$ 을 넣고 $0.1$ 로 그대로 둔다. 한 묶음에 $0$ 이 하나도 들어가지 않을 확률은 $0.55^3\approx 0.17$ 이므로 묶음 대부분이 $0$ 이 되어 사라진다. 살아남은 묶음도 변수가 거의 다 고정되어 있어서, 남은 함수는 변수 몇 개만 물어보면 값이 정해진다.

변수 몇 개만 물어보는 절차는 OR 의 AND 로도, AND 의 OR 로도 쓸 수 있다. 회로의 맨 아래 두 층이 AND 와 OR 이면 무작위 고정 뒤에 그 두 층을 바꾸어 쓰고, 바뀐 OR 층을 바로 위의 OR 층과 합친다. 고정을 거듭할 때마다 깊이가 하나씩 준다. 홀짝 함수는 고정 뒤에도 남은 변수를 모두 물어야 하므로, 변수가 충분히 남는 한 회로가 이 과정을 버티지 못한다.

# 정의

## 제한

변수 $x_1,\dots,x_n$ 의 **제한(restriction)** 은 함수 $\rho:\lbrace 1,\dots,n\rbrace\to\lbrace 0,1,\ast\rbrace$ 다. $\rho(i)=\ast$ 인 변수는 자유 변수로 남고, 나머지는 $\rho(i)$ 로 고정된다. $f$ 에 $\rho$ 를 적용해 얻는 자유 변수의 함수를 $f_\rho$ 로 쓴다.

$0\lt p\lt 1$ 일 때 **$p$-무작위 제한(p-random restriction)** 은 좌표마다 독립으로 확률 $p$ 로 $\ast$, 확률 $(1-p)/2$ 로 $0$, 확률 $(1-p)/2$ 로 $1$ 을 고르는 [유한 확률 공간](probability.md) 위의 제한이다.

## 폭과 결정 나무 깊이

- 리터럴(literal)은 변수 $x_i$ 나 그 부정 $\neg x_i$ 다. 리터럴의 AND 를 항(term), 리터럴의 OR 를 절(clause)이라 한다.
- DNF 는 항들의 OR 이고 CNF 는 절들의 AND 다. 항이나 절에 든 리터럴 수의 최대를 **폭(width)** 이라 한다.
- **결정 나무(decision tree)** 는 내부 정점마다 변수 하나를 묻고 답 $0,1$ 에 따라 두 자식으로 갈라지며 잎에 출력값을 적은 이진 나무다. $f$ 를 계산하는 결정 나무의 깊이의 최솟값을 $D(f)$ 로 쓴다.

$D(f)\le t$ 이면 $f$ 는 폭 $t$ 이하의 DNF 로도 CNF 로도 쓰인다. 출력이 $1$ 인 잎마다 그 경로의 답을 AND 로 묶어 OR 하면 DNF 이고, 출력이 $0$ 인 잎마다 경로의 답을 부정해 OR 로 묶고 AND 하면 CNF 다.

## 상수 깊이 회로

$\mathrm{AC}^0$(alternating circuit)은 AND 와 OR 게이트의 들어오는 변 수에 제한이 없고, 깊이가 상수이며 크기가 다항인 회로 족이 계산하는 함수의 부류다. NOT 은 입력에만 붙인다고 해도 크기가 두 배 이하로 는다. 층마다 AND 와 OR 가 번갈아 오도록 정리할 수 있다.

# 성질

## 스위칭 보조정리

정리(Håstad). $f$ 가 폭 $w$ 이하의 DNF 이고 $\rho$ 가 $p$-무작위 제한이면 모든 $t\ge 0$ 에 대해 다음이 성립한다[^1][^2].

$$
\Pr\lbrack D(f_\rho)\gt t\rbrack\le(5pw)^t
$$

$f$ 를 CNF 로 바꾸어도 같은 부등식이 성립한다. $\neg f$ 가 폭 $w$ 의 DNF 이고 $D(\neg f)=D(f)$ 이기 때문이다. 상한은 항의 개수에 의존하지 않는다.

증명의 요지. $f_\rho$ 의 표준 결정 나무를 다음처럼 만든다. $\rho$ 아래에서 거짓이 되지 않은 첫 항을 골라 그 항의 자유 변수를 모두 묻는다. 답이 그 항을 참으로 만들면 $1$ 을 출력하고, 아니면 답까지 고정한 상태에서 거짓이 되지 않은 다음 항으로 간다. 그런 항이 없으면 $0$ 을 출력한다. 이 나무의 깊이가 $t$ 를 넘는 제한 $\rho$ 를 나쁜 제한이라 한다.

A. Razborov 의 부호화 논증은 나쁜 제한 $\rho$ 를 자유 변수가 $t$ 개 적은 제한 $\rho'$ 와 길이 $O(t\log w)$ 비트의 보조 정보로 단사적으로 보낸다[^3]. $\rho'$ 는 깊은 경로에서 차례로 만난 항들을 참으로 만드는 값을 그 항의 자유 변수에 넣은 것이고, 보조 정보는 각 항 안에서 어느 변수를 고정했는지와 경로의 실제 답이다. 좌표 $t$ 개를 $\ast$ 에서 고정값으로 바꾸면 확률이 $\big((1-p)/(2p)\big)^t$ 배가 되므로, 나쁜 제한의 확률은 $\big(2p/(1-p)\big)^t$ 에 보조 정보의 가짓수 $(O(w))^t$ 를 곱한 값 이하다. 상수를 다듬으면 $(5pw)^t$ 가 나온다.

## 홀짝 함수의 하한

정리(Håstad). 깊이 $d$ 의 회로가 $n$ 비트 홀짝 함수를 계산하면 그 크기는 $2^{\Omega(n^{1/(d-1)})}$ 이상이다[^1]. 따라서 홀짝 함수는 $\mathrm{AC}^0$ 에 들지 않는다.

$\mathrm{AC}^0$ 에 들지 않는다는 것은 M. Furst, J. Saxe, M. Sipser[^4] 와 M. Ajtai[^5] 가 먼저 각자 증명했고, 스위칭 보조정리로 크기의 지수 하한이 증명되었다.

증명의 요지. 크기 $S$ 의 회로에서 $w=\log_2 S$ 로 둔다. 먼저 $p=1/2$ 의 무작위 제한을 주면 폭이 $w$ 를 넘는 맨 아래 게이트는 높은 확률로 상수가 되어, 맨 아래 폭이 $w$ 이하가 된다. 다음부터 $p=1/(10w)$ 의 무작위 제한을 거듭 준다. 한 번마다 맨 아래에서 둘째 층의 게이트 각각이 스위칭 보조정리로 확률 $1-2^{-w}=1-1/S$ 이상에서 깊이 $w$ 이하의 결정 나무가 되고, 게이트가 $S$ 개 이하이므로 합집합 상한으로 그 층 전부가 동시에 바뀔 확률이 양수다. 바뀐 층을 위층과 합치면 깊이가 하나 준다. $d-2$ 번 뒤에 회로는 깊이 $w$ 의 결정 나무가 되고, 자유 변수는 기댓값으로 $n\cdot\frac12\cdot(10w)^{-(d-2)}$ 개 남는다. 홀짝 함수의 제한은 남은 자유 변수의 홀짝이나 그 부정이므로 결정 나무 깊이가 자유 변수의 수와 같다. 따라서 $n(10w)^{-(d-2)}/2\le w$ 이고 $w\ge\Omega(n^{1/(d-1)})$ 이다.

## Fourier 집중

정리(Linial–Mansour–Nisan). 깊이 $d$, 크기 $s$ 의 회로가 계산하는 함수 $f:\lbrace 0,1\rbrace^n\to\lbrace -1,1\rbrace$ 의 Fourier 무게는 차수 $(\log s)^{O(d)}$ 이하의 계수에 거의 모두 모인다[^6].

증명의 요지. 깊이 $t$ 의 결정 나무가 계산하는 함수는 Fourier 차수가 $t$ 이하다. 무작위 제한 뒤 회로가 높은 확률로 얕은 결정 나무가 되므로 $f_\rho$ 의 높은 차수 무게가 작고, 무작위 제한 아래 높은 차수 계수의 제곱합의 기댓값을 원래 $f$ 의 계수로 나타내어 상한을 얻는다.

# 활용

- [NC 계층](nc-hierarchy.md)의 분리 $\mathrm{AC}^0\ne\mathrm{NC}^1$. 홀짝 함수가 $\mathrm{NC}^1$ 에 들고 $\mathrm{AC}^0$ 에는 들지 않는다는 것이 홀짝 하한에서 나온다.
- [부울 함수의 Fourier 해석](boolean-fourier.md). Linial–Mansour–Nisan 정리로부터 $\mathrm{AC}^0$ 함수가 준다항 시간에 균등 분포 아래 학습된다는 것이 유도된다.
- [자연 증명](natural-proofs.md). 홀짝 하한의 성질 "무작위 제한 뒤에도 상수가 되지 않는다" 는 구성적이고 넓은 성질이어서 자연 증명의 예가 된다.
- [다항 계층](polynomial-hierarchy.md)의 신탁 분리. Furst–Saxe–Sipser 는 홀짝 함수의 상수 깊이 회로 하한이 지수 꼴이면 PSPACE(polynomial space)와 다항 계층을 분리하는 신탁(oracle)이 존재함을 보였고[^4], 홀짝 하한이 그 조건을 채운다.

[^1]: J. Håstad, "Almost optimal lower bounds for small depth circuits", Proceedings of the 18th ACM Symposium on Theory of Computing (1986), 6–20.
[^2]: R. O'Donnell, *Analysis of Boolean Functions*, Cambridge University Press (2014), 4.4 절. 상수 $5$ 의 꼴.
[^3]: A. A. Razborov, "Bounded arithmetic and lower bounds in Boolean complexity", in *Feasible Mathematics II*, Birkhäuser (1995), 344–386.
[^4]: M. Furst, J. B. Saxe, M. Sipser, "Parity, circuits, and the polynomial-time hierarchy", Mathematical Systems Theory 17 (1984), 13–27.
[^5]: M. Ajtai, "Σ¹₁-formulae on finite structures", Annals of Pure and Applied Logic 24 (1983), 1–48.
[^6]: N. Linial, Y. Mansour, N. Nisan, "Constant depth circuits, Fourier transform, and learnability", Journal of the ACM 40(3) (1993), 607–620.

# 연관 문서

## 선수지식

- [불 회로](boolean-circuits.md)
- [유한 확률 공간](probability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #probability #combinatorics
