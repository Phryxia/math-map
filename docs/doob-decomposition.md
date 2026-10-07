# Doob 분해

# 개요

Doob 분해는 적분 가능한 adapted 과정을 martingale 과 예측 가능 과정의 합으로 쪼갠 것이다.

$$X_n \thickspace=\thickspace X_0 + M_n + A_n$$

$(M_n)$ 은 martingale 이고 $(A_n)$ 은 예측 가능하며 $M_0=A_0=0$ 이다. 이 분해는 유일하고, $(A_n)$ 의 증감은 원래 과정이 submartingale 인지 supermartingale 인지와 같다. martingale 에만 쓸 수 있는 도구를 martingale 이 아닌 과정에 적용할 때 $(M_n)$ 쪽을 떼어 쓴다.

martingale $(M_n)$ 자체에 이 분해를 쓰면 $(M_n^2)$ 의 예측 가능 부분으로 **예측 가능 2차 변동** $\langle M\rangle_n$ 이 나온다. $L^2$ 수렴 판정과 [확률근사](stochastic-approximation.md)의 수렴 증명이 이 양을 쓴다.

# 직관

공정한 동전을 던져 매 판 $1$ 원을 따거나 잃는 걷기 $S_n$ 은 [martingale](martingales.md) 이어서 선택적 정지 정리와 수렴 정리를 쓸 수 있다. 제곱 $S_n^2$ 의 다음 시각 예측값은 현재 값과 같지 않으므로 같은 정리를 쓸 수 없다.

얼마나 다른지 계산한다. $S_{n+1}=S_n+\xi_{n+1}$ 이고 $\xi_{n+1}$ 은 $\pm 1$ 을 반씩 취하며 과거와 독립이다. 제곱을 전개하면 교차항의 조건부 기댓값이 $0$ 이고 $\xi_{n+1}^2=1$ 이므로 다음을 얻는다.

$$\mathbb E\lbrack S_{n+1}^2\mid\mathcal F_n\rbrack \thickspace=\thickspace S_n^2 + 1$$

한 걸음마다 $1$ 씩 붙는다. 붙는 양이 시각만으로 정해지므로 $n$ 걸음 뒤에 붙은 양은 $n$ 이고, 시각 $n$ 에 서 있는 사람이 이미 안다. 그만큼 빼서 $M_n=S_n^2-n$ 을 놓으면 위 식에서 $\mathbb E\lbrack M_{n+1}\mid\mathcal F_n\rbrack=S_n^2+1-(n+1)=M_n$ 이므로 $(M_n)$ 은 martingale 이다.

같은 계산을 임의의 과정 $(X_n)$ 에 한다. 한 걸음에 붙는 양은 $\mathbb E\lbrack X_{n+1}\mid\mathcal F_n\rbrack-X_n$ 이고 이 값은 $\mathcal F_n$ 가측이다. 걸음마다 이 양을 더해 누적한 것을 $X_n$ 에서 빼면 남는 과정은 martingale 이다. 뺀 쪽을 예측 가능 부분, 남은 쪽을 martingale 부분이라 한다.

# 정의

## Doob 분해

filtration $(\mathcal F_n)$ 에 adapted 이고 모든 $n$ 에서 $\mathbb E\lvert X_n\rvert\lt\infty$ 인 과정 $(X_n)\_{n\ge 0}$ 의 **Doob 분해**는 다음 두 과정으로 주어진다.

$$A_n \thickspace=\thickspace \sum_{k=1}^{n} \bigl( \mathbb E\lbrack X_k\mid\mathcal F_{k-1}\rbrack - X_{k-1} \bigr), \qquad M_n \thickspace=\thickspace X_n - X_0 - A_n$$

$A_0=M_0=0$ 이고 $X_n=X_0+M_n+A_n$ 이다. $A_n$ 은 $\mathcal F_{n-1}$ 가측이므로 $(A_n)$ 은 **예측 가능**하고, $\mathbb E\lbrack M_n-M_{n-1}\mid\mathcal F_{n-1}\rbrack=0$ 이므로 $(M_n)$ 은 martingale 이다. $(A_n)$ 을 원래 과정의 **보정항**, $(M_n)$ 을 **martingale 부분**이라 한다.

## 예측 가능 2차 변동

martingale $(M_n)$ 에 대해 $(M_n^2)$ 은 조건부 Jensen 부등식으로 submartingale 이다. 그 Doob 분해의 예측 가능 부분을 $\langle M\rangle_n$ 으로 쓰고 **예측 가능 2차 변동**이라 한다.

$$\langle M\rangle_n \thickspace=\thickspace \sum_{k=1}^{n} \mathbb E\lbrack (M_k-M_{k-1})^2\mid\mathcal F_{k-1}\rbrack$$

증분의 조건부 분산을 누적한 것이다. 동전 걷기 $S_n$ 에서는 $\langle S\rangle_n=n$ 이다.

# 성질

## 분해의 유일성

$X_n=X_0+M_n+A_n$ 에서 $(M_n)$ 이 martingale, $(A_n)$ 이 예측 가능, $M_0=A_0=0$ 인 분해는 유일하다.

증명의 요지. 두 분해가 있으면 $N_n=M_n-M_n'=A_n'-A_n$ 은 martingale 이면서 예측 가능하고 $N_0=0$ 이다. 예측 가능성에서 $N_n$ 은 $\mathcal F_{n-1}$ 가측이므로 $N_n=\mathbb E\lbrack N_n\mid\mathcal F_{n-1}\rbrack=N_{n-1}$ 이고, 귀납으로 모든 $n$ 에서 $N_n=0$ 이다.

## 보정항의 증감

$(X_n)$ 이 submartingale 인 것과 $(A_n)$ 이 증가하는 것이 동치다. supermartingale 이면 감소하고, martingale 이면 $A_n\equiv 0$ 이다.

증분 $A_n-A_{n-1}=\mathbb E\lbrack X_n\mid\mathcal F_{n-1}\rbrack-X_{n-1}$ 의 부호가 submartingale 조건과 같은 식이므로 세 경우가 바로 따라온다. submartingale 은 martingale 과 증가과정의 합이고, 그 증가과정의 극한 $A_\infty$ 가 적분 가능한지가 수렴 판정의 조건이다.

## $L^2$ 수렴 판정

$M_0=0$ 인 martingale 에 대해 $\mathbb E\lbrack M_n^2\rbrack=\mathbb E\lbrack\langle M\rangle_n\rbrack$ 이다. $\mathbb E\lbrack\langle M\rangle_\infty\rbrack\lt\infty$ 이면 $(M_n)$ 은 거의 확실하게 그리고 $L^2$ 에서 수렴한다.

등식은 $M_n^2-\langle M\rangle_n$ 이 martingale 이고 시각 $0$ 에서 $0$ 이라는 것이다. 단조수렴정리로 $\mathbb E\lbrack M_n^2\rbrack$ 이 $\mathbb E\lbrack\langle M\rangle_\infty\rbrack$ 으로 유계이므로 $L^2$ 유계 martingale 의 수렴 정리를 적용한다.

## 멈춘 과정의 분해

정지시간 $\tau$ 에 대해 멈춘 과정 $(X_{n\wedge\tau})$ 의 Doob 분해는 $M_{n\wedge\tau}$ 와 $A_{n\wedge\tau}$ 다. $\mathbf 1\_{\lbrace k\le\tau\rbrace}$ 가 예측 가능하므로 $M_{n\wedge\tau}$ 는 martingale 변환이고, $A_{n\wedge\tau}$ 도 예측 가능성을 유지한다. 유일성에서 이 분해가 그 분해다.

# 활용

- **최적 정지의 정지 규칙.** [최적 정지](optimal-stopping.md)의 Snell 포락 $(V_n)$ 은 supermartingale 이므로 그 보정항 $(A_n)$ 이 감소한다. $A_n$ 이 처음으로 감소하기 직전 시각이 최적 정지시간이고, 그때까지 멈춘 과정이 martingale 이라는 것이 그 문서의 최적성 증명이 쓰는 사실이다.
- **확률근사의 수렴.** [확률근사](stochastic-approximation.md)의 수렴 증명은 오차 제곱을 supermartingale 로 만들고 그 보정항의 합이 유한함을 보인다. Robbins–Monro 걸음폭 조건 $\sum\alpha_n^2\lt\infty$ 가 예측 가능 2차 변동의 유한성으로 들어간다.
- **집중부등식.** [집중부등식](concentration-inequalities.md)의 Azuma–Hoeffding 은 martingale 증분에 대한 것이므로, submartingale 꼴의 양에는 Doob 분해로 martingale 부분을 떼어 적용한다.
- **연속시간 확장.** [Brown 운동](brownian-motion.md)의 $B_t^2-t$ 가 martingale 이라는 것은 $\langle B\rangle_t=t$ 를 뜻한다. 우연속 supermartingale 을 martingale 과 증가과정으로 쪼개는 Doob–Meyer 분해가 이 절의 이산 분해에 대응하고, 확률적분의 2차 변동이 그 증가과정이다.

# 연관 문서

## 선수지식

- [Martingale](martingales.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #optimization
