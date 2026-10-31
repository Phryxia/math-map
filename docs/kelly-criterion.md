# Kelly 기준

# 개요

**Kelly 기준(Kelly criterion)** 은 유리한 내기를 되풀이할 때 가진 돈 가운데 얼마를 걸지 정하는 규칙이다. 앞면 확률이 $0.6$ 인 동전에 건 돈만큼 따거나 잃는 내기에서 매번 가진 돈 전부를 걸면 한 번만 져도 돈이 $0$ 이 된다. 너무 적게 걸면 돈이 느리게 불어난다. Kelly 기준은 가진 돈의 로그의 기댓값을 가장 크게 하는 비율, 이 예에서는 $0.2$ 를 걸어 오래 되풀이할 때 돈이 가장 빨리 불어나게 한다.

# 직관

앞면이 나올 확률이 $0.6$ 인 동전이 있고, 건 돈만큼을 따거나 잃는 내기를 한다. 매번 가진 돈의 비율 $f$ 를 앞면에 건다. 앞면이면 돈이 $1+f$ 배, 뒷면이면 $1-f$ 배가 된다.

한 번의 기댓값은 $0.6(1+f)+0.4(1-f)=1+0.2f$ 이므로 $f=1$ 로 전부 걸 때 가장 크다. 그러나 전부 걸면 뒷면이 한 번만 나와도 돈이 $0$ 이 되고, $n$ 번 안에 그럴 확률은 $1-0.6^n$ 이다. 기댓값이 큰 것은 아주 드물게 오는 연속 앞면 덕분이고, 거의 모든 경우에 돈이 사라진다.

$n$ 번 뒤에 앞면은 대략 $0.6n$ 번, 뒷면은 $0.4n$ 번 나오므로 돈은 대략

$$
(1+f)^{0.6n}(1-f)^{0.4n}=\exp\bigl(n\thinspace g(f)\bigr),\qquad g(f)=0.6\log(1+f)+0.4\log(1-f)
$$

이다. 거의 모든 경우에 돈이 불어나는 속도를 정하는 것이 $g(f)$ 이고, $g'(f)=0.6/(1+f)-0.4/(1-f)=0$ 에서 $f=0.2$ 가 나온다. 이때 $g(0.2)=0.6\log 1.2+0.4\log 0.8\approx 0.020$ 이므로 돈은 한 번에 약 2% 씩 불어난다.

# 정의

## 성장률

결과 $i=1,\dots,m$ 이 확률 $p_i$ 로 나오고, 결과 $i$ 에 $1$ 을 걸면 $i$ 가 나올 때 $o_i$ 를 받는 내기를 생각한다. $o_i$ 를 **배당(odds)** 이라 한다. 가진 돈을 비율 $b=(b_1,\dots,b_m)$, $\sum_ib_i=1$ 로 나누어 걸면 결과가 $X$ 일 때 돈이 $b_Xo_X$ 배가 된다.

$$
W(b,p)=E\lbrack\log(b_Xo_X)\rbrack=\sum_{i=1}^mp_i\log(b_io_i)
$$

를 **성장률(growth rate)** 이라 한다.

직관 절의 동전 내기는 $m=2$, $p=(0.6,0.4)$, $o=(2,2)$ 인 경우다. 앞면에 비율 $f$ 를 거는 것은 $b=\bigl((1+f)/2,(1-f)/2\bigr)$ 로 나누어 거는 것과 같고, 앞면이면 $b_1o_1=1+f$, 뒷면이면 $b_2o_2=1-f$ 배다. 그래서 $W(b,p)=g(f)$ 이다.

## Kelly 기준과 최적 성장률

$W(b,p)$ 를 최대로 하는 $b^\ast$ 를 **Kelly 기준** 이라 하고, 그때의 값 $W^\ast(p)$ 를 **최적 성장률(optimal growth rate)** 이라 한다. 동전 내기에서는 $f=0.2$, 곧 $b^\ast=(0.6,0.4)$ 이고 $W^\ast(p)=g(0.2)\approx 0.020$ 이다.

# 성질

## 돈의 증가 속도

같은 내기를 독립으로 $n$ 번 하면 돈은 $S_n=\prod_{k=1}^n b_{X_k}o_{X_k}$ 이고, [큰 수의 법칙](law-of-large-numbers.md)으로 거의 확실하게 $\frac1n\log S_n\to W(b,p)$ 다. 따라서 Kelly 기준으로 거는 돈은 다른 고정 비율로 거는 돈보다 지수적으로 빠르게 불어난다.

## 비례 내기

Kelly 기준은 $b^\ast=p$ 이고

$$
W^\ast(p)=\sum_ip_i\log o_i-H(p)
$$

이다. 여기서 $H(p)$ 는 $p$ 의 [Shannon 엔트로피](entropy.md)다.[^2]

증명의 요지. $W(b,p)=\sum_ip_i\log o_i+\sum_ip_i\log p_i-\sum_ip_i\log(p_i/b_i)=\sum_ip_i\log o_i-H(p)-D(p\Vert b)$ 이다. $D(p\Vert b)$ 는 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)이므로 $D(p\Vert b)\ge 0$ 이고 등호는 $b=p$ 일 때뿐이다. $\square$

각 결과에 그 확률만큼 거는 이 규칙을 **비례 내기(proportional betting)** 라 한다. 배당 $o_i$ 는 최적 비율에 영향을 주지 않고 성장률에만 들어간다.

## 믿음이 틀린 경우

배당이 어떤 분포 $r$ 에 대해 공정하여 $o_i=1/r_i$ 이면 $W^\ast(p)=D(p\Vert r)$ 다. 참인 분포가 $p$ 인데 분포 $q$ 를 믿고 $b=q$ 로 걸면 성장률은

$$
W(q,p)=D(p\Vert r)-D(p\Vert q)
$$

이다. 배당을 정한 쪽보다 참인 분포에 더 가까운 쪽이 돈을 불린다. 앞면 확률 $0.6$ 인 동전 내기는 $r=(0.5,0.5)$ 인 경우다.

## 다른 전략과의 비교

임의의 $b$ 에 대해 $E\lbrack b_Xo_X/(b^\ast_Xo_X)\rbrack\le 1$ 이다. 그러므로 매번 과거만 보고 비율을 정하는 어떤 전략의 돈 $S_n$ 에 대해서도 $S_n/S^\ast_n$ 은 음이 아닌 supermartingale 이고, 거의 확실하게 $\limsup_n\frac1n\log(S_n/S_n^\ast)\le 0$ 이다.[^3]

$b^\ast=p$ 이므로 기댓값은 $\sum_ip_i\cdot b_io_i/(p_io_i)=\sum_ib_i=1$ 이다. 뒤의 진술은 supermartingale 수렴 정리에서 나온다. $\square$

## 곁정보

내기 전에 $X$ 와 상관된 $Y$ 를 보고 $b=p(\cdot\mid Y)$ 로 걸면 최적 성장률이 $X$ 와 $Y$ 의 상호정보량(mutual information) $I(X;Y)$ 만큼 늘어난다.[^2] J. L. Kelly 는 1956 년에 통신 선로의 정보 전송률을 내기의 성장률로 해석하며 이 기준을 제안했다.[^1] 잡음 있는 선로로 결과를 미리 받는 도박사의 성장률 증가분이 그 선로의 정보 전송률과 같다.

## 지나친 내기

동전 내기의 $g(f)=0.6\log(1+f)+0.4\log(1-f)$ 는 $f=0.2$ 에서 최대이고 그보다 큰 $f$ 에서 줄어든다. $g$ 를 $f=0$ 근처에서 이차식으로 근사하면 $g(f)\approx 0.2f-f^2/2$ 이고, 이 근사에서 $g(f)\lt 0$ 이 되는 것은 $f\gt 0.4$ 일 때다. 이점이 작은 내기에서는 Kelly 비율의 두 배 이상을 걸면 돈이 거의 확실하게 줄어든다. 그래서 실제로는 Kelly 비율의 일부만 거는 분수 Kelly(fractional Kelly)를 쓰기도 한다.

# 활용

- **e-값과 내기 검정.** 귀무가설 아래에서 공정한 배당으로 내기를 하면 돈의 기댓값이 $1$ 이므로 돈이 [e-값](e-values.md)이다. 대립가설에서 돈의 로그 성장률을 최대로 하는 e-변수가 Kelly 기준의 가능도비이고, 그 성장률이 KL divergence 다.
- **포트폴리오 선택.** 자산 수익률이 매 기간 독립으로 같은 분포를 따를 때, 로그 수익의 기댓값을 최대로 하는 포트폴리오가 Kelly 기준의 일반화다. Cover 의 [보편 포트폴리오](universal-portfolio.md)는 분포를 모르고도 사후에 본 최선의 고정 포트폴리오와 같은 지수 성장률을 얻는다.[^4]
- **자료 압축과의 대응.** 공정 배당 $o_i=m$ 에서 $W^\ast(p)=\log m-H(p)$ 이다. 성장률과 엔트로피의 합이 $\log m$ 으로 일정하므로, 결과를 잘 예측하는 분포가 짧은 부호도 준다.

[^1]: J. L. Kelly Jr., "A new interpretation of information rate", *Bell System Technical Journal* 35 (1956), 917–926.
[^2]: Thomas M. Cover, Joy A. Thomas, *Elements of Information Theory*, 2nd ed., Wiley, 2006, 6 장.
[^3]: Leo Breiman, "Optimal gambling systems for favorable games", *Proceedings of the Fourth Berkeley Symposium on Mathematical Statistics and Probability* 1 (1961), 65–78.
[^4]: Thomas M. Cover, "Universal portfolios", *Mathematical Finance* 1 (1991), 1–29.

# 연관 문서

## 선수지식

- [KL divergence](kl-divergence.md)

## 더 알아보기

- [보편 포트폴리오](universal-portfolio.md)

#information_theory #probability #statistics
