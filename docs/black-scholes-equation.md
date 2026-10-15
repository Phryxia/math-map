# Black–Scholes 방정식

# 개요

Black–Scholes 방정식은 만기 보수가 기초자산 가격만으로 정해지는 파생상품의 가격이 만족하는 2 차 포물형 편미분방정식이다. 기초자산과 무위험자산으로 보수를 복제할 수 있다는 가정에서 나오고, 기초자산의 추세가 식에 남지 않아 가격이 변동성과 무위험 수익률만으로 정해진다.

# 직관

만기 $T$ 에 $h(S_T)$ 를 지급하는 계약의 현재 가격을 구하려 한다. 보수의 기댓값을 할인한 $e^{-rT}\mathbb E\lbrack h(S_T)\rbrack$ 을 쓰면 주가의 추세 $\mu$ 가 값에 들어간다. 같은 계약에 투자자마다 다른 값을 매기게 되므로 이 길로는 가격이 하나로 정해지지 않는다.

가격을 $V(t,S_t)$ 라 두고 주식을 $\Delta$ 주 보유하는 포트폴리오 $\Pi=V-\Delta S$ 를 본다. $dS_t=\mu S_t\thinspace dt+\sigma S_t\thinspace dW_t$ 에 [Itô 공식](ito-calculus.md)을 적용하면 다음이 나온다.

$$dV=\Bigl(\partial_tV+\mu S\thinspace\partial_SV+\frac{\sigma^2S^2}{2}\partial_S^2V\Bigr)dt+\sigma S\thinspace\partial_SV\thinspace dW$$

$d\Pi=dV-\Delta\thinspace dS$ 에서 $dW$ 의 계수는 $\sigma S(\partial_SV-\Delta)$ 다. $\Delta=\partial_SV$ 로 잡으면 이 항이 사라지고 $\Pi$ 가 한 순간 무위험이 된다. 무위험 포트폴리오의 수익은 무위험 수익률과 같아야 하므로 $d\Pi=r\Pi\thinspace dt$ 이고, 양변을 맞추면 $\mu$ 가 들어간 두 항이 서로 지워져 $\mu$ 없는 방정식이 남는다.

# 정의

## Black–Scholes 방정식

$r$ 을 무위험 수익률, $\sigma$ 를 변동성이라 하자. 보수 $h$ 를 만기에 지급하는 계약의 가격 $V$ 는 $\lbrack 0,T)\times(0,\infty)$ 에서 다음을 만족한다[^1].

$$\partial_tV+rs\thinspace\partial_sV+\frac{\sigma^2s^2}{2}\partial_s^2V-rV=0,\qquad V(T,s)=h(s)$$

좌변을 **Black–Scholes 작용소**라 하고 $\mathcal LV$ 로 적는다. 방정식은 시간을 거꾸로 보면 확산 방정식이고, 만기 조건에서 출발해 $t$ 를 줄이며 푼다.

## 유럽형 콜의 닫힌 해

$h(s)=(s-K)^+$ 이면 해가 다음이다. $\Phi$ 는 표준정규분포의 누적분포함수다.

$$V(t,s)=s\thinspace\Phi(d_+)-Ke^{-r(T-t)}\Phi(d_-)$$

$$d_\pm=\frac{\log(s/K)+(r\pm\sigma^2/2)(T-t)}{\sigma\sqrt{T-t}}$$

## 위험중립 표현

$\mathbb Q$ 를 할인된 주가를 martingale 로 만드는 측도라 하면 [Feynman–Kac 공식](feynman-kac.md)이 해를 기댓값으로 준다.

$$V(t,s)=e^{-r(T-t)}\thinspace\mathbb E^{\mathbb Q}\lbrack h(S_T)\mid S_t=s\rbrack$$

$\mathbb Q$ 아래에서 주가의 표류가 $\mu$ 에서 $r$ 로 바뀌고, 그 변환이 [Girsanov 정리](girsanov.md)다.

# 성질

## 추세의 소거

$\mu$ 는 방정식에 나타나지 않는다. 직관 절의 복제에서 $dW$ 항을 지우는 선택 $\Delta=\partial_sV$ 가 $\mu\partial_sV$ 항까지 함께 지우기 때문이다. 같은 주가 과정에 추세만 다르게 잡아도 옵션 가격은 변하지 않는다.

## 열방정식으로의 변환

$\tau=T-t$ 와 $x=\log s+(r-\sigma^2/2)\tau$ 로 두고 $u(\tau,x)=e^{r\tau}V(t,s)$ 라 하면 다음이 된다.

$$\partial_\tau u=\frac{\sigma^2}{2}\thinspace\partial_x^2u,\qquad u(0,x)=h(e^x)$$

상수계수 열방정식이므로 해가 Gauss 핵과 초기값의 합성곱으로 유일하게 정해지고, $h$ 가 연속이고 다항식 증가이면 해가 $\tau\gt 0$ 에서 매끄럽다. 콜의 닫힌 해도 이 합성곱을 계산한 결과다.

## 그릭스

$\Delta=\partial_sV$, $\Gamma=\partial_s^2V$, $\Theta=\partial_tV$ 로 적으면 방정식은 다음과 같다.

$$\Theta+rs\Delta+\frac{\sigma^2s^2}{2}\Gamma=rV$$

$\Delta$ 는 복제에 필요한 주식 수이고 $\Gamma$ 는 주가가 움직일 때 그 수를 얼마나 고쳐야 하는지를 준다. 콜에서는 $\Delta=\Phi(d_+)$ 이고 $\Gamma\gt 0$ 이다.

## 콜과 풋의 관계

같은 $K$ 와 $T$ 의 유럽형 콜 $C$ 와 풋 $P$ 는 다음을 만족한다.

$$C(t,s)-P(t,s)=s-Ke^{-r(T-t)}$$

증명의 요지. 방정식이 선형이므로 $C-P$ 는 보수 $(s-K)^+-(K-s)^+=s-K$ 에 대응하는 해다. $s$ 와 $e^{-r(T-t)}$ 가 각각 방정식을 만족하므로 그 조합이 만기 조건을 맞춘다.

# 활용

- **내재 변동성.** 시장에서 관측한 옵션 가격에 콜의 닫힌 해를 맞추어 $\sigma$ 를 역산한다. $\partial_\sigma V\gt 0$ 이므로 값이 하나로 정해지고, 행사가와 만기마다 다른 값이 나오는 양상을 변동성 곡면이라 한다.
- **복제 전략.** $\Delta=\partial_sV$ 주를 보유하고 나머지를 무위험자산에 두는 전략이 만기 보수를 복제한다. 그릭스 절의 $\Gamma$ 가 재조정의 빈도를 정한다.
- **미국형 옵션.** [미국형 옵션](american-options.md)의 변분 부등식에 나오는 작용소가 이 방정식의 좌변이다. 조기 행사가 없는 영역에서 $\mathcal LV=0$ 이 성립한다.
- **수치해.** 열방정식 꼴로 바꾼 뒤 유한차분으로 푼다. 변환이 계수를 상수로 만들어 안정성 조건이 간단해진다.

[^1]: F. Black, M. Scholes, *The pricing of options and corporate liabilities*, Journal of Political Economy **81** (1973), 637–654.
[^2]: R. C. Merton, *Theory of rational option pricing*, Bell Journal of Economics and Management Science **4** (1973), 141–183. 복제 논법을 연속시간에서 정리하고 배당과 영구 옵션을 다룬다.

# 연관 문서

## 선수지식

- [Feynman–Kac 공식](feynman-kac.md)

## 더 알아보기

- [미국형 옵션](american-options.md)

#probability #analysis
