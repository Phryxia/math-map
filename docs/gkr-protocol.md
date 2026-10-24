# Goldwasser–Kalai–Rothblum 프로토콜

# 개요

**Goldwasser–Kalai–Rothblum 프로토콜(Goldwasser–Kalai–Rothblum protocol, GKR protocol)** 은 층으로 나뉜 산술회로의 출력이 맞는지를, 회로를 다시 계산하지 않고 회로의 층마다 [대화형 증명](interactive-proofs.md)의 합 검사 프로토콜을 한 번씩 돌려 확인하는 대화형 증명이다. S. Goldwasser, Y. T. Kalai, G. N. Rothblum 이 2008 년에 발표했다[^1].

크기 $S$, 깊이 $d$ 인 회로에 대해 검증자의 시간은 입력 길이 $n$ 과 $d\log S$ 의 다항식이고, 증명자의 시간은 $S$ 의 다항식이다. 약한 기기가 강한 서버에 계산을 맡기고 결과를 확인하는 계산 위임(delegation of computation)이 이 프로토콜의 쓰임이다.

# 직관

서버가 크기 $S$ 인 회로를 계산해 출력을 보냈다. 검증자가 출력이 맞는지 보려면 회로를 다시 계산해야 하고, 그러면 맡긴 의미가 없다. 서버에게 모든 게이트의 값을 보내게 해도 검증자는 게이트 $S$ 개를 하나씩 확인해야 한다.

출력층의 게이트 값은 바로 아래층의 게이트 값으로 정해진다. 그래서 "출력층의 값이 이렇다" 는 주장을 "아래층의 값이 이렇다" 는 주장으로 바꿀 수 있으면, 층마다 한 번씩 바꿔 입력층까지 내려간다. 입력층의 값은 검증자가 가진 입력이므로 마지막 주장은 검증자가 직접 확인한다.

층 하나의 게이트가 $S$ 개이면 주장도 $S$ 개다. 이것을 주장 하나로 줄이기 위해 층의 게이트 값을 다항식으로 늘린다. 게이트 번호를 $s$ 비트로 쓰고, 게이트 값을 $\lbrace 0,1\rbrace^s$ 위의 함수로 보아 각 변수에 대해 일차인 다항식으로 늘린다. 서로 다른 두 게이트 값 목록은 늘린 다항식이 거의 모든 점에서 다르므로, 무작위 점 하나에서의 값 하나를 확인하면 목록 전체가 맞는지 높은 확률로 가려진다.

# 정의

## 다중선형 확장

$f\colon\lbrace 0,1\rbrace^s\to\mathbb F$ 에 대해, 각 변수에 대해 차수가 $1$ 이하이고 $\lbrace 0,1\rbrace^s$ 위에서 $f$ 와 같은 다항식이 하나뿐이다. 이것을 $f$ 의 **다중선형 확장(multilinear extension)** 이라 하고 $\tilde f$ 로 쓴다.

$$
\tilde f(z)=\sum_{w\in\lbrace 0,1\rbrace^s}f(w)\prod_{j=1}^{s}\big(z_jw_j+(1-z_j)(1-w_j)\big)
$$

곱 인자는 $z=w$ 이면 $1$, $z$ 가 $w$ 가 아닌 $\lbrace 0,1\rbrace^s$ 의 점이면 $0$ 이다. $f$ 의 값 $2^s$ 개가 주어지면 한 점에서의 $\tilde f$ 는 $O(2^s)$ 번의 체 연산으로 계산된다.

## 층으로 나뉜 산술회로

유한체 $\mathbb F$ 위의 회로가 층 $0$(출력)부터 층 $d$(입력)까지로 나뉘고, 층 $i$ 의 게이트는 덧셈이나 곱셈이며 입력 둘을 층 $i+1$ 에서 받는다. 층 $i$ 의 게이트 수를 $S_i=2^{s_i}$ 로 두고, 게이트 값을 $W_i\colon\lbrace 0,1\rbrace^{s_i}\to\mathbb F$ 로 쓴다.

**배선 술어(wiring predicate)** $\mathrm{add}\_i(a,b,c)$ 는 층 $i$ 의 게이트 $a$ 가 덧셈 게이트이고 입력이 층 $i+1$ 의 게이트 $b$, $c$ 이면 $1$, 아니면 $0$ 이다. $\mathrm{mult}\_i$ 도 곱셈 게이트에 대해 같게 정한다. 그러면 모든 $z\in\mathbb F^{s_i}$ 에 대해 다음이 성립한다.

$$
\tilde W_i(z)=\sum_{b,c\in\lbrace 0,1\rbrace^{s_{i+1}}}\Big(\widetilde{\mathrm{add}}\_i(z,b,c)\big(\tilde W_{i+1}(b)+\tilde W_{i+1}(c)\big)+\widetilde{\mathrm{mult}}\_i(z,b,c)\thinspace\tilde W_{i+1}(b)\tilde W_{i+1}(c)\Big)
$$

오른쪽은 $z$ 에 대해 다중선형이고 $z\in\lbrace 0,1\rbrace^{s_i}$ 에서 $W_i(z)$ 와 같으므로, 다중선형 확장의 유일성으로 등식이 나온다.

## 프로토콜

1. 증명자가 출력 $W_0$ 을 보낸다. 검증자는 $r_0\in\mathbb F^{s_0}$ 을 무작위로 골라 $m_0=\tilde W_0(r_0)$ 을 직접 계산한다.
2. 층 $i=0,1,\dots,d-1$ 마다 주장 $\tilde W_i(r_i)=m_i$ 를 위 등식의 오른쪽에 대한 합 검사 프로토콜로 확인한다. 변수는 $2s_{i+1}$ 개이고 각 변수의 차수는 $2$ 이하다. 합 검사가 끝나면 검증자는 무작위 점 $b^\ast$, $c^\ast$ 에서 $\tilde W_{i+1}(b^\ast)$ 와 $\tilde W_{i+1}(c^\ast)$ 의 값이 필요하다.
3. 두 점의 주장을 하나로 줄인다. $\ell(0)=b^\ast$, $\ell(1)=c^\ast$ 인 직선 $\ell\colon\mathbb F\to\mathbb F^{s_{i+1}}$ 을 두면 증명자는 차수 $s_{i+1}$ 이하의 일변수 다항식 $q=\tilde W_{i+1}\circ\ell$ 을 보낸다. 검증자는 $q(0)$, $q(1)$ 로 합 검사의 마지막 단계를 확인하고, 무작위 $t\in\mathbb F$ 를 골라 $r_{i+1}=\ell(t)$, $m_{i+1}=q(t)$ 로 둔다.
4. 층 $d$ 에서 $\tilde W_d(r_d)$ 를 입력으로 직접 계산해 $m_d$ 와 비교한다.

```typescript
// 검증자 쪽 절차. sumCheck 는 합 검사 프로토콜을 돌리고 마지막 무작위 점 (b, c) 와 그 점에서 요구되는 값의 검사식을 돌려준다.
function verifyGKR(circuit: Circuit, input: Field[], prover: Prover): boolean {
  const outputs = prover.sendOutputs();
  let r = randomPoint(circuit.bits(0));
  let m = multilinearEval(outputs, r);
  for (let i = 0; i < circuit.depth; i++) {
    const { b, c, finalCheck } = sumCheck(prover, circuit, i, r, m);
    const q = prover.sendLineRestriction(i + 1, b, c); // q(t) 는 층 i+1 의 다중선형 확장을 직선 line(b, c) 위에서 본 값
    if (!finalCheck(q.eval(0), q.eval(1))) return false;
    const t = randomField();
    r = line(b, c, t);
    m = q.eval(t);
  }
  return multilinearEval(input, r) === m;
}
```

# 성질

## 건전성

정리. 출력이 틀렸으면 검증자가 받아들일 확률은 $O(d\log S/\lvert\mathbb F\rvert)$ 이하다[^1].

증명의 요지. 틀린 주장이 다음 층의 맞는 주장으로 바뀌려면 어느 단계에서 증명자가 보낸 일변수 다항식이 참 다항식과 다르면서 검증자의 무작위 점에서 같아야 한다. [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)에 따라 합 검사의 각 단계에서 그 확률은 $2/\lvert\mathbb F\rvert$ 이하이고, 직선 단계에서는 $s_{i+1}/\lvert\mathbb F\rvert$ 이하다. 단계 수가 층마다 $O(s_{i+1})$ 이므로 합하면 위 상한이다.

## 비용

- 라운드 수는 $O(d\log S)$ 다.
- 검증자의 시간은 $O(n+d\log S)$ 번의 체 연산에 더해 $\widetilde{\mathrm{add}}\_i$ 와 $\widetilde{\mathrm{mult}}\_i$ 를 한 점에서 계산하는 시간이다. 회로가 로그 공간 균일(log-space uniform)이면 이 값을 $\mathrm{polylog}(S)$ 시간에 계산할 수 있다[^1].
- 증명자의 시간은 처음 증명에서 $S$ 의 다항식이었고, Cormode, Mitzenmacher, Thaler 가 $O(S\log S)$ 로 줄였다[^2].

## 깊이와 검증 시간

검증자의 시간이 $d$ 에 비례하므로 깊이가 작은 회로에서만 검증이 회로 계산보다 빠르다. 로그 공간 균일한 깊이 $\mathrm{polylog}(n)$ 회로로 계산되는 문제, 곧 균일한 $\mathrm{NC}$(Nick's class)에서 검증자의 시간은 $n\cdot\mathrm{polylog}(n)$ 이다[^1].

# 활용

- 계산 위임. Shamir 정리(Shamir's theorem)의 프로토콜에서는 정직한 증명자도 지수 시간이 들지만, 이 프로토콜의 정직한 증명자는 $S$ 의 다항식 시간에 끝난다. 그래서 서버가 실제로 증명자 역할을 할 수 있다.
- 검증자의 무작위 질문을 해시 함수의 출력으로 바꾸는 [Fiat–Shamir 변환](fiat-shamir.md)을 적용하면 비대화형 논증이 된다. 다항식 약속과 결합한 영지식 논증들이 이 프로토콜을 층별 검사에 쓴다[^3].
- 행렬곱, 원소 개수 세기처럼 회로가 규칙적인 문제에서는 배선 술어의 다중선형 확장이 닫힌 식을 가져 검증자와 증명자 모두 빨라진다[^2].

[^1]: S. Goldwasser, Y. T. Kalai, G. N. Rothblum, "Delegating computation: interactive proofs for muggles", Journal of the ACM 62 (2015), Article 27. 학회판은 STOC 2008.
[^2]: G. Cormode, M. Mitzenmacher, J. Thaler, "Practical verified computation with streaming interactive proofs", ITCS 2012, 90–112.
[^3]: J. Thaler, *Proofs, Arguments, and Zero-Knowledge*, Foundations and Trends in Privacy and Security 4 (2022), 4 장.

# 연관 문서

## 선수지식

- [대화형 증명](interactive-proofs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #algorithms #cryptography
