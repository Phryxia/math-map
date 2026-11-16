# Sparre Andersen 정리

# 개요

**Sparre Andersen 정리(Sparre Andersen theorem)** 는 걸음의 분포가 $0$ 에 대해 대칭이고 연속이면, 무작위 걷기가 처음 $n$ 걸음 동안 줄곧 양수에 머물 확률이 걸음의 분포와 상관없이 $\binom{2n}{n}4^{-n}$ 이라는 정리다. 매일의 가격 변동이 $-1$ 과 $1$ 사이에서 고르게 나오는 경우와 정규분포를 따르는 경우 모두, 이틀 연속 누적 변동이 양수일 확률은 동전 던지기와 같은 $3/8$ 이다.

이 정리는 [아크사인 법칙](arcsine-law.md)이 동전 던지기에서 구한 양의 시간 분포를, 대칭이고 연속인 모든 걸음 분포로 그대로 옮긴다.

# 직관

첫날 변동 $X\_1$ 과 둘째 날 변동 $X\_2$ 가 독립이고 $\lbrack -1,1\rbrack$ 에서 고르게 나온다고 하자. $X\_1\gt 0$ 일 확률은 $1/2$ 이다. $X\_1=x\gt 0$ 이면 $X\_1+X\_2\gt 0$ 일 확률은 $X\_2\gt -x$ 일 확률 $(1+x)/2$ 다.

$x$ 를 $(0,1)$ 에서 평균 내면 $3/4$ 이므로 두 누적 변동이 모두 양수일 확률은 $1/2\cdot 3/4=3/8$ 이다.

걸음이 표준정규분포이면 $(X\_1, X\_1+X\_2)$ 는 상관계수가 $1/\sqrt2$ 인 이변량 정규분포다. 두 좌표가 모두 양수일 확률은 $1/4+\arcsin(1/\sqrt2)/2\pi=1/4+1/8=3/8$ 이다.

$\pm 1$ 걸음의 [무작위 걷기](random-walks.md)에서는 길이 $4$ 경로가 줄곧 위에 있을 확률이 $3/8$ 이었다. 연속 분포의 걷기는 $2$ 걸음에서 같은 $3/8$ 이 나오고, 이 일치가 모든 $n$ 에서 성립한다는 것이 이 정리다.

# 정의

$X\_1,X\_2,\dots$ 가 독립이고 같은 분포를 따르며, 그 분포가 연속이고 $0$ 에 대해 대칭이라 하자. $S\_0=0$, $S\_k=X\_1+\dots+X\_k$ 로 정한 수열이 걷기다. 직관 절의 균등분포와 정규분포가 이 조건을 만족한다.

$u\_{2n}=\binom{2n}{n}4^{-n}$ 은 아크사인 법칙 문서의 값이다. $u\_2=1/2$, $u\_4=3/8$, $u\_6=5/16$ 이다.

$n$ 걸음 가운데 $S\_k\gt 0$ 인 $k\in\lbrace 1,\dots,n\rbrace$ 의 개수를 **양수 횟수(number of positive partial sums)** $N\_n$ 이라 한다.

# 성질

## Sparre Andersen 의 생성함수 항등식

걸음의 분포가 독립이고 같기만 하면 다음이 성립한다.[^1]

$$
\sum\_{n\ge 0}s^n\Pr\lbrack S\_1\gt 0,\dots,S\_n\gt 0\rbrack=\exp\Bigl(\sum\_{n\ge 1}\frac{s^n}{n}\Pr\lbrack S\_n\gt 0\rbrack\Bigr)
$$

좌변은 걷기가 양수에 머무는 확률들의 [생성함수](generating-functions.md)이고, 우변은 각 시각에 양수일 확률만으로 정해진다. 증명은 걸음의 순서를 순환 이동한 $n$ 개의 수열을 함께 세는 조합적 보조정리를 쓴다.[^1]

## 분포에 의존하지 않는 생존 확률

대칭이고 연속인 걸음이면 다음이 성립한다.

$$
\Pr\lbrack S\_1\gt 0,\dots,S\_n\gt 0\rbrack=u\_{2n}=\binom{2n}{n}4^{-n}
$$

증명의 요지. 대칭이고 연속이면 $\Pr\lbrack S\_n\gt 0\rbrack=1/2$ 이다. 항등식의 우변은 $\exp(-\tfrac12\log(1-s))=(1-s)^{-1/2}$ 이고, 이것을 이항급수로 펼친 $s^n$ 의 계수가 $u\_{2n}$ 이다. $n$ 이 크면 Stirling 공식(Stirling's formula)으로 $u\_{2n}\approx 1/\sqrt{\pi n}$ 이다.

## 양수 횟수의 분포

같은 조건에서 $k=0,\dots,n$ 에 대해 다음이 성립한다.[^1]

$$
\Pr\lbrack N\_n=k\rbrack=u\_{2k}\thinspace u\_{2n-2k}
$$

이 값은 아크사인 법칙 문서의 이산 아크사인 분포와 같다. $n\to\infty$ 이면 $N\_n/n$ 의 분포가 아크사인 분포로 수렴한다. 직관 절의 $n=2$ 에서 $N\_2=2$ 일 확률은 $u\_4u\_0=3/8$, $N\_2=1$ 일 확률은 $u\_2u\_2=1/4$ 이다.

## 동치 원리

걸음이 독립이고 같은 분포를 따르면, 분포가 대칭이 아니어도 $N\_n$ 은 $S\_0,\dots,S\_n$ 가운데 최댓값이 처음 나오는 시각과 같은 분포를 따른다. 이것을 Sparre Andersen 의 동치 원리(equivalence principle)라 한다.[^1] 양수 횟수는 경로 전체를 보아야 정해지고 최댓값의 시각은 한 시각으로 정해지지만, 두 값의 분포가 같다.

# 활용

- 기록 통계. 시간을 거꾸로 하면 $S\_n$ 이 $S\_0,\dots,S\_n$ 의 유일한 최댓값일 확률이 $\Pr\lbrack S\_1\gt 0,\dots,S\_n\gt 0\rbrack=u\_{2n}$ 이다. $n$ 걸음 동안 나오는 새 기록 수의 기댓값은 $\sum\_{k=0}^{n}u\_{2k}$ 이고 대략 $2\sqrt{n/\pi}$ 다.
- 지속 확률(persistence probability). 통계물리에서 대칭 잡음으로 움직이는 입자가 원점의 한쪽에 머무는 확률이 $n^{-1/2}$ 꼴로 줄어든다는 것을 잡음의 분포 없이 얻는다.
- 분포 무관 검정. 대칭이고 연속인 영가설 아래에서 누적합이 양수인 횟수의 분포가 정확히 알려져 있으므로, 그 횟수를 검정 통계량으로 쓸 수 있다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., Wiley, 1971, 12 장 7 절; E. Sparre Andersen, "On the fluctuations of sums of random variables", *Mathematica Scandinavica* 1 (1953), 263–285, 2 (1954), 195–223.

# 연관 문서

## 선수지식

- [아크사인 법칙](arcsine-law.md)
- [무작위 걷기](random-walks.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #statistics
