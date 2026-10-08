# 미국형 옵션

# 개요

미국형 옵션은 보유자가 만기까지 아무 때나 한 번 행사할 수 있는 계약이다. 가격은 위험중립 측도 아래에서 할인된 보수의 기댓값을 정지시각 전체에서 최대화한 값이고, 행사하는 주가의 범위와 가격함수를 함께 결정해야 하므로 경계가 미지인 편미분방정식 문제가 된다.

# 직관

유럽형 옵션은 만기 $T$ 에만 행사하므로 가격이 만기 보수의 위험중립 기댓값을 할인한 값 하나로 정해진다. 미국형 옵션은 행사 시각도 보유자가 고른다. 그 시각을 미리 한 값으로 못 박을 수는 없다. 주가가 떨어진 뒤에 행사할지 더 기다릴지는 그때까지의 주가를 보고 정하는 것이므로, 고를 대상은 시각이 아니라 정지시각이다.

행사가 $K=100$ 인 풋을 두 기간 이항모형에서 계산한다. $S_0=100$ 이고 한 기간에 주가가 $1.2$ 배 또는 $0.8$ 배가 되며 무위험 수익률이 기간당 $1.05$ 이면 위험중립 확률은 $q=(1.05-0.8)/(1.2-0.8)=0.625$ 다. 만기 주가는 $144$, $96$, $64$ 이고 보수는 $0$, $4$, $36$ 이다. 한 기간 뒤 $S=120$ 인 노드에서 보유 가치는 $(0.625\cdot 0+0.375\cdot 4)/1.05=1.43$ 이고 즉시 행사값은 $0$ 이므로 보유한다. $S=80$ 인 노드에서 보유 가치는 $(0.625\cdot 4+0.375\cdot 36)/1.05=15.24$ 인데 즉시 행사값이 $20$ 이므로 행사한다. 이 값을 써서 출발 노드의 가치는 $(0.625\cdot 1.43+0.375\cdot 20)/1.05=7.99$ 다. 같은 격자에서 유럽형 풋은 $6.29$ 이고, 차이는 $S=80$ 에서 앞당겨 행사한 몫이다.

노드마다 즉시 행사값과 보유 가치를 비교한 결과는 주가로 갈린다. 한 기간 뒤 두 노드 가운데 주가가 낮은 쪽에서만 행사하므로, 그 시각에 행사하는 주가에 상한이 있다. 격자를 촘촘하게 하고 연속시간으로 가면 이 상한은 시각마다 다른 값이 되어 미지의 곡선 $b(t)$ 가 된다. 가격함수를 구하려면 그 곡선을 함께 구해야 하고, 곡선을 구하려면 가격함수가 필요하다.

# 정의

## 미국형 옵션의 가격

주가가 위험중립 측도 $\mathbb Q$ 아래에서 $dS_t=rS_t\thinspace dt+\sigma S_t\thinspace dW_t$ 를 따르고 보수함수가 $h$ 라 하자. $\mathcal T_{t,T}$ 를 $\lbrack t,T\rbrack$ 에 값을 갖는 정지시각 전체라 하면 **미국형 옵션**의 가격은 다음이다.

$$V(t,s)=\sup_{\tau\in\mathcal T_{t,T}}\mathbb E^{\mathbb Q}\lbrack e^{-r(\tau-t)}h(S_\tau)\mid S_t=s\rbrack$$

$\mathbb Q$ 는 할인된 주가를 martingale 로 만드는 측도이고 [Girsanov 정리](girsanov.md)로 실세계 측도에서 옮겨 얻는다. 풋은 $h(s)=(K-s)^+$, 콜은 $h(s)=(s-K)^+$ 다.

## 계속 영역과 정지 영역

$$\mathcal C=\lbrace (t,s):V(t,s)\gt h(s)\rbrace,\qquad \mathcal S=\lbrace (t,s):V(t,s)=h(s)\rbrace$$

$\mathcal C$ 를 계속 영역, $\mathcal S$ 를 정지 영역이라 한다. 풋에서는 $\mathcal S=\lbrace (t,s):s\le b(t)\rbrace$ 꼴이고 이 $b$ 를 **행사 경계**라 한다. 최적 정지시각은 $\tau^\ast=\inf\lbrace u\ge t:S_u\le b(u)\rbrace\wedge T$ 다.

## 변분 부등식

Black–Scholes 작용소를 다음으로 둔다.

$$\mathcal LV=\partial_tV+rs\thinspace\partial_sV+\frac{\sigma^2s^2}{2}\partial_s^2V-rV$$

가격함수는 $\lbrack 0,T)\times(0,\infty)$ 에서 다음 **변분 부등식**의 해다[^2].

$$\max\lbrace \mathcal LV,\thinspace h-V\rbrace=0,\qquad V(T,\cdot)=h$$

이 식은 $\mathcal LV\le 0$ 과 $V\ge h$ 가 어디서나 성립하고 각 점에서 둘 가운데 하나가 등호라는 뜻이다. 계속 영역에서 $\mathcal LV=0$ 이고 정지 영역에서 $V=h$ 다.

## 평활 맞춤

행사 경계에서 다음 두 식이 성립하고, 이것이 $b$ 를 결정한다.

$$V(t,b(t))=h(b(t)),\qquad \partial_sV(t,b(t))=h'(b(t))$$

값만 맞추는 조건은 $b$ 를 하나로 정하지 못하고, 1 차 도함수까지 맞추는 조건이 더 붙어야 정해진다.

# 성질

## 콜의 조기 행사

배당이 없고 $r\ge 0$ 이면 미국형 콜의 가격이 같은 조건의 유럽형 콜과 같다[^3]. 즉 $\tau^\ast=T$ 이고 정지 영역이 비어 있다.

증명의 요지. $x\mapsto(x-c)^+$ 가 볼록이고 원점에서 값이 $0$ 이므로 $t\le T$ 와 $r\ge 0$ 에서 $e^{-rt}(S_t-K)^+\le(e^{-rt}S_t-e^{-rT}K)^+$ 가 성립한다. $e^{-rt}S_t$ 가 $\mathbb Q$-martingale 이므로 조건부 Jensen 부등식으로 다음이 나온다.

$$(e^{-r\tau}S_\tau-e^{-rT}K)^+\le\mathbb E^{\mathbb Q}\lbrack (e^{-rT}S_T-e^{-rT}K)^+\mid\mathcal F_\tau\rbrack$$

양변의 기댓값을 취하면 모든 정지시각 $\tau$ 에서 $\mathbb E^{\mathbb Q}\lbrack e^{-r\tau}(S_\tau-K)^+\rbrack\le\mathbb E^{\mathbb Q}\lbrack e^{-rT}(S_T-K)^+\rbrack$ 이다.

## 영구 풋

$T=\infty$ 이고 $h(s)=(K-s)^+$ 이면 가격과 행사 경계가 닫힌 식으로 나온다[^3]. $\gamma=2r/\sigma^2$ 로 두면 다음이다.

$$b=\frac{\gamma}{\gamma+1}K,\qquad V(s)=\begin{cases}K-s & s\le b\cr \dfrac{K}{\gamma+1}\Bigl(\dfrac{s}{b}\Bigr)^{-\gamma} & s\gt b\end{cases}$$

증명의 요지. 시간에 의존하지 않으므로 계속 영역에서 $\mathcal LV=0$ 이 상미분방정식 $\sigma^2s^2V''/2+rsV'-rV=0$ 이 된다. $V=s^\alpha$ 를 넣으면 $\alpha=1$ 과 $\alpha=-\gamma$ 가 나오고, $s\to\infty$ 에서 $V\to 0$ 이므로 $V=As^{-\gamma}$ 다. 여기에 평활 맞춤 두 식 $Ab^{-\gamma}=K-b$ 와 $-\gamma Ab^{-\gamma-1}=-1$ 을 적용하면 $\gamma(K-b)=b$ 에서 $b$ 가 나오고 $A=Kb^\gamma/(\gamma+1)$ 이다.

## 행사 경계

풋의 행사 경계 $b$ 는 증가함수이고 $b(T^-)=K$ 다. 유한 만기에서 $b$ 는 비선형 Volterra 적분방정식을 만족하고, 그 방정식은 정지 영역에서 $V=h$ 를 [Itô 공식](ito-calculus.md)에 넣어 얻는다[^4].

## Stefan 문제

미지 경계를 편미분방정식의 해와 함께 구하고 경계에서 값과 1 차 도함수를 맞추는 구조는 얼음과 물의 경계를 미지로 두는 Stefan 문제와 같다. 두 문제에서 경계 조건의 형태가 일치하므로 자유경계 문제의 정칙성 이론을 그대로 쓴다.

# 활용

- **조기 행사 프리미엄.** 미국형 풋 가격은 유럽형 풋 가격과 조기 행사 프리미엄의 합으로 쪼개지고, 그 프리미엄이 정지 영역 위에서 $-\mathcal Lh$ 를 적분한 값이다. 정의 절의 변분 부등식에서 두 영역의 식을 이어 붙이면 이 분해가 나온다.
- **격자 수치해.** 직관 절의 역방향 귀납을 $n$ 기간 격자에 적용한다. 격자 간격을 $0$ 으로 보내면 값이 변분 부등식의 해로 수렴한다.
- **실물 옵션.** 투자 비용 $I$ 를 치르고 가치 $S$ 인 사업을 얻는 결정은 보수 $(S-I)^+$ 인 영구 콜의 행사 문제다. 투자 시점의 문턱이 행사 경계의 값이다.
- **최적 정지의 연속시간 판.** [최적 정지](optimal-stopping.md)의 Snell 포락이 이산시간에서 $V$ 를 주고, 그 포락을 연속시간으로 옮긴 것이 변분 부등식이다.

```javascript
// n 기간 이항 격자의 미국형 옵션 가격. payoff 는 보수함수 h.
function americanBinomial(S0, u, d, R, n, payoff) {
  const q = (R - d) / (u - d);
  let V = [];
  for (let i = 0; i <= n; i++) V.push(payoff(S0 * Math.pow(u, i) * Math.pow(d, n - i)));
  for (let t = n - 1; t >= 0; t--) {
    const next = [];
    for (let i = 0; i <= t; i++) {
      const hold = (q * V[i + 1] + (1 - q) * V[i]) / R;
      const exercise = payoff(S0 * Math.pow(u, i) * Math.pow(d, t - i));
      next.push(Math.max(hold, exercise));
    }
    V = next;
  }
  return V[0];
}
```

[^1]: J. C. Cox, S. A. Ross, M. Rubinstein, *Option pricing: a simplified approach*, Journal of Financial Economics **7** (1979), 229–263. 이항 격자의 역방향 귀납과 연속시간 극한을 다룬다.
[^2]: P. Jaillet, D. Lamberton, B. Lapeyre, *Variational inequalities and the pricing of American options*, Acta Applicandae Mathematicae **21** (1990), 263–289.
[^3]: R. C. Merton, *Theory of rational option pricing*, Bell Journal of Economics and Management Science **4** (1973), 141–183. 배당 없는 콜의 조기 행사가 최적이 아니라는 명제와 영구 풋의 닫힌 식이 있다.
[^4]: I. J. Kim, *The analytic valuation of American options*, Review of Financial Studies **3** (1990), 547–572.

# 연관 문서

## 선수지식

- [Black–Scholes 방정식](black-scholes-equation.md)
- [최적 정지](optimal-stopping.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #optimization
