# Gillespie 알고리즘

# 개요

**Gillespie 알고리즘(Gillespie algorithm)** 은 [연속시간 Markov 연쇄](continuous-time-markov-chains.md)의 경로를 사건 하나씩 정확하게 뽑는 절차다. 세포 안에서 어떤 분자가 시간당 평균 $10$ 개씩 만들어지고, 있는 분자는 하나마다 시간당 $1$ 의 빈도로 분해된다. 분자 수는 $1$ 씩 오르내리는데, 그 수가 언제 어떻게 바뀌는지를 컴퓨터로 재현하는 것이 이런 문제다.

Gillespie 알고리즘은 다음 사건까지의 시간을 지수분포에서 뽑고, 어느 사건이 일어날지를 빈도에 비례해 고르는 것을 되풀이해 이 경로를 만든다.

# 직관

분자 수를 $n$ 이라 하면 지금 이 순간 분자가 생기는 빈도는 $10$, 사라지는 빈도는 $n$ 이다. 시간을 길이 $h$ 의 조각으로 잘라 조각마다 확률 $10h$ 로 하나를 더하고 확률 $nh$ 로 하나를 빼면 경로가 나온다.

$h=0.1$ 이고 $n=10$ 이면 두 확률이 모두 $1$ 이 되어, 한 조각 안에서 두 사건이 함께 일어나는 경우를 버리게 된다. $h=0.001$ 로 줄이면 사건이 일어날 확률이 조각마다 $0.02$ 이므로 조각의 98% 에서 아무 일도 일어나지 않는다. 조각을 줄일수록 오차는 줄지만 헛도는 조각이 늘어난다.

헛도는 조각을 하나씩 확인하지 않고, 다음 사건이 일어나는 시각을 바로 뽑는다. 생성까지의 시간과 분해까지의 시간은 각각 [지수분포](exponential-distribution.md)를 따르고, 둘 가운데 먼저 오는 것의 시간은 빈도의 합 $10+n$ 을 세기로 하는 지수분포를 따른다. 그 사건이 생성일 확률은 $10/(10+n)$ 이다.

$n=0$ 에서 출발한다. 빈도의 합은 $10$ 이고, $[0,1]$ 의 균등 난수 $u_1=0.5$ 에서 대기시간 $-\ln u_1/10=0.0693$ 을 얻는다. 분해 빈도가 $0$ 이므로 사건은 생성이고 $n=1$ 이 된다.

다음 단계의 빈도 합은 $11$ 이고, $u_1=0.3$ 에서 대기시간 $0.1095$ 를 얻는다. 둘째 난수 $u_2=0.95$ 에 $11$ 을 곱한 $10.45$ 가 생성 몫 $10$ 을 넘으므로 사건은 분해이고, 시각 $0.1788$ 에 $n=0$ 으로 돌아간다.

# 정의

## 반응망

화학종 $d$ 개의 분자 수를 벡터 $x\in\mathbb Z_{\ge 0}^d$ 로 적는다. **반응(reaction)** $r$ 은 일어날 때 $x$ 에 더해지는 변화 벡터 $\nu_r$ 과, 상태 $x$ 에서 그 반응이 일어나는 빈도인 **성향 함수(propensity function)** $a_r(x)\ge 0$ 의 쌍이다. 질량작용 법칙(law of mass action)을 따르면 성향은 다음 꼴이다.

| 반응 꼴        | 성향                   |
| -------------- | ---------------------- |
| 무에서 생성    | $c$                    |
| A 하나가 반응  | $c\thinspace x_A$      |
| A 와 B 가 반응 | $c\thinspace x_Ax_B$   |
| A 두 개가 반응 | $c\thinspace x_A(x_A-1)/2$ |

직관 절의 예는 화학종 하나와 반응 둘이다. 생성은 $\nu_1=+1$, $a_1(n)=10$ 이고 분해는 $\nu_2=-1$, $a_2(n)=n$ 이다.

## 반응망의 연속시간 Markov 연쇄

반응망이 정하는 연쇄는 상태 $x$ 에서 $x+\nu_r$ 로 전이율 $a_r(x)$ 로 뛰는 연속시간 Markov 연쇄다. 이 연쇄의 Kolmogorov 앞 방정식을 **화학 마스터 방정식(chemical master equation)** 이라 한다.

$$
\frac{d}{dt}p(x,t)=\sum_r\Bigl(a_r(x-\nu_r)\thinspace p(x-\nu_r,t)-a_r(x)\thinspace p(x,t)\Bigr)
$$

직관 절의 예에서 이 연쇄는 출생률 $10$, 사망률 $n$ 인 [출생사망 과정](birth-death-process.md)이다.

## 직접 방법

다음 절차를 **Gillespie 알고리즘** 또는 **직접 방법(direct method)** 이라 한다[^1]. 상태 $x$ 에서 성향의 합을 $a_0(x)=\sum_r a_r(x)$ 로 둔다.

1. $[0,1]$ 의 균등 난수 $u_1,u_2$ 를 독립으로 뽑는다.
2. 대기시간 $\tau=-\ln u_1/a_0(x)$ 를 시각에 더한다.
3. 누적합 $a_1+\cdots+a_r$ 이 처음으로 $u_2a_0$ 이상이 되는 $r$ 을 고른다.
4. $x$ 에 $\nu_r$ 을 더하고 1 로 돌아간다.

모든 $t\ge 0$ 에서 다음이 성립하므로 $\tau$ 는 $\mathrm{Exp}(a_0)$ 를 따른다.

$$
\Pr(-\ln u_1/a_0\gt t)=\Pr(u_1\lt e^{-a_0t})=e^{-a_0t}
$$

직관 절의 계산은 이 절차를 두 번 돌린 것이다.

```javascript
function gillespie(x, reactions, tEnd, rand) {
  let t = 0;
  const path = [[t, x.slice()]];
  while (true) {
    const a = reactions.map((r) => r.propensity(x));
    const a0 = a.reduce((s, v) => s + v, 0);
    if (a0 === 0) break; // 더 일어날 반응이 없다
    t += -Math.log(rand()) / a0;
    if (t > tEnd) break;
    let target = rand() * a0;
    let r = 0;
    while (target > a[r]) target -= a[r++];
    reactions[r].change.forEach((d, i) => (x[i] += d));
    path.push([t, x.slice()]);
  }
  return path;
}
```

# 성질

## 정확성

정리. 직접 방법이 내놓는 경로는 반응망의 연속시간 Markov 연쇄와 같은 분포를 따른다[^1].

증명의 요지. 반응 $r$ 까지의 시간을 독립인 $\mathrm{Exp}(a_r(x))$ 로 두면, 그 최솟값은 $\mathrm{Exp}(a_0)$ 를 따르고 최솟값이 반응 $r$ 의 것일 확률은 $a_r/a_0$ 다. 이것은 연쇄의 체류 시간과 점프 연쇄의 분포와 같다.

## 한 단계의 비용

시간 $[0,T]$ 동안의 단계 수는 평균 $\int_0^T a_0(x_t)\thinspace dt$ 다. 분자 수가 많으면 $a_0$ 가 커서 단계 수가 많아진다. 직관 절의 예에서 분자 수가 $10$ 근처에 머물면 $a_0\approx 20$ 이므로 시간 $1$ 당 약 $20$ 단계다.

반응이 $R$ 개이면 직접 방법의 한 단계는 성향 $R$ 개를 다시 계산하고 누적합을 훑으므로 $O(R)$ 이다. **다음 반응 방법(next reaction method)** 은 반응마다 다음 발생 시각을 [이진 힙](binary-heaps.md)에 두고, 한 반응이 일어날 때 성향이 바뀐 반응의 시각만 고쳐 한 단계를 $O(\log R)$ 로 줄인다[^2].

## 정상분포와 요동

직관 절의 연쇄는 출생률 $10$, 사망률 $n$ 인 출생사망 과정이므로 정상분포는 평균 $10$ 의 [Poisson 분포](poisson-distribution.md)다. 평균은 [상미분방정식](ordinary-differential-equations.md) $x'=10-x$ 의 평형점 $10$ 과 같고, 표준편차는 $\sqrt{10}\approx 3.16$ 이다. 분자 수가 적으면 평균 둘레의 요동이 평균의 30% 정도이고, 미분방정식은 이 요동을 나타내지 않는다.

## 큰 수의 극한

부피 $V$ 를 키우면서 생성 빈도를 $V$ 에 비례하게 두면, 농도 $x/V$ 의 경로가 유한 시간 구간에서 확률적으로 상미분방정식의 해에 수렴한다. 이것을 **Kurtz 정리(Kurtz's theorem)** 라 한다[^3]. 요동의 크기는 $1/\sqrt V$ 에 비례한다.

## 타우 도약

**타우 도약(tau-leaping)** 은 길이 $\tau$ 동안 성향이 거의 바뀌지 않는다고 놓고, 반응 $r$ 을 평균 $a_r(x)\tau$ 의 Poisson 분포에서 뽑은 횟수만큼 한꺼번에 일으킨다[^4]. 사건 하나씩 뽑지 않으므로 빠르지만, $\tau$ 동안 성향이 변하는 만큼 오차가 생기고 분자 수가 음수가 될 수 있다.

# 활용

- 유전자 발현의 확률적 요동. mRNA 와 단백질이 몇 개에서 수십 개인 세포에서 개수 분포와 발현 폭발(transcriptional bursting)을 직접 방법으로 표본한다.
- 감염병 모형. [SIR 모형](sir-model.md)(susceptible–infected–recovered)을 감염 빈도 $\beta SI/N$, 회복 빈도 $\gamma I$ 의 반응망으로 두면, 직접 방법이 집단이 작을 때의 조기 소멸을 재현한다.
- [대기행렬](queues.md)의 시뮬레이션. 도착과 서비스 완료를 두 반응으로 둔 사건 기반 시뮬레이션이 같은 절차다.

[^1]: D. T. Gillespie, "Exact stochastic simulation of coupled chemical reactions", *The Journal of Physical Chemistry* 81 (1977), 2340–2361.
[^2]: M. A. Gibson, J. Bruck, "Efficient exact stochastic simulation of chemical systems with many species and many channels", *The Journal of Physical Chemistry A* 104 (2000), 1876–1889.
[^3]: T. G. Kurtz, "Solutions of ordinary differential equations as limits of pure jump Markov processes", *Journal of Applied Probability* 7 (1970), 49–58.
[^4]: D. T. Gillespie, "Approximate accelerated stochastic simulation of chemically reacting systems", *The Journal of Chemical Physics* 115 (2001), 1716–1733.

# 연관 문서

## 선수지식

- [연속시간 Markov 연쇄](continuous-time-markov-chains.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #computation #algorithms
