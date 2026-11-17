# Lincoln–Petersen 추정량

# 개요

**Lincoln–Petersen 추정량(Lincoln–Petersen estimator)** 은 한 번 잡아 표시해 놓아준 개체가 두 번째 표본에서 차지하는 비율로 집단 전체의 크기를 어림하는 방법이다. 연못의 물고기를 모두 셀 수는 없지만, 50 마리를 잡아 지느러미에 표시하고 놓아준 뒤 다시 40 마리를 잡아 표시된 것을 세는 일은 할 수 있다.

이 추정량은 두 번째 표본에서 표시된 비율이 연못 전체에서 표시된 비율과 같다고 놓고 전체 수를 푼다. 같은 원리로 조사에서 빠진 사람 수나 프로그램의 남은 오류 수도 어림한다.

# 직관

연못에서 물고기 $50$ 마리를 잡아 표시하고 놓아준다. 며칠 뒤 $40$ 마리를 잡았더니 그 가운데 $10$ 마리에 표시가 있다. 두 번째 표본에서 표시된 비율은 $10/40=1/4$ 이다.

물고기가 고르게 섞였다면 연못 전체에서도 표시된 비율이 $1/4$ 에 가깝다. 표시된 물고기는 $50$ 마리이므로 연못의 물고기 수 $N$ 은 $50/N=1/4$ 에서 $N=200$ 정도다.

# 정의

첫 번째 표본에서 $M$ 개체를 표시해 놓아주고, 두 번째 표본으로 $C$ 개체를 잡아 그 가운데 표시된 것이 $R$ 개체이면

$$
\hat N=\frac{MC}{R}
$$

를 **Lincoln–Petersen 추정량** 이라 한다. 직관 절에서 $M=50$, $C=40$, $R=10$ 이므로 $\hat N=200$ 이다.

이 추정량은 다음을 가정한다.

- 두 표본 사이에 개체가 들고 나지 않는다(닫힌 집단).
- 두 번째 표본에서 모든 개체가 같은 확률로 잡힌다.
- 표시가 지워지지 않는다.

# 성질

## 초기하분포와 최대가능도

가정 아래 $R$ 은 $N$ 개 가운데 표시된 $M$ 개가 있을 때 $C$ 개를 비복원으로 뽑은 표시된 수이므로 [초기하분포](hypergeometric-distribution.md)를 따른다.

$$
P(R=r\mid N)=\frac{\binom Mr\binom{N-M}{C-r}}{\binom NC}
$$

이 가능도를 $L(N)$ 이라 하면 이웃한 두 값의 비는

$$
\frac{L(N)}{L(N-1)}=\frac{(N-M)(N-C)}{N(N-M-C+r)}
$$

이고, 이 비가 $1$ 이상인 것은 $N\le MC/r$ 과 동치다. 그러므로 정수 $N$ 위의 [최대가능도 추정](maximum-likelihood.md)은 $\lfloor MC/r\rfloor$ 다.

## Chapman 추정량

$R=0$ 일 확률이 양수이므로 $\hat N=MC/R$ 의 기댓값은 무한대다. Chapman 은 다음 추정량을 제안했고, $M+C\ge N$ 이면 이것이 $N$ 의 불편추정량임을 증명했다[^1].

$$
\hat N_{\mathrm C}=\frac{(M+1)(C+1)}{R+1}-1
$$

직관 절의 값을 넣으면 $\hat N\_{\mathrm C}=51\cdot41/11-1\approx189.1$ 이다.

## 잡히는 확률의 차이

잘 잡히는 개체가 두 표본에 모두 들기 쉬우면 $R$ 이 커지고 $\hat N$ 이 실제보다 작아진다. 개체마다 잡히는 확률이 다를 때의 하한은 한 번 잡힌 개체와 두 번 잡힌 개체의 수로 낸 [Chao1 추정량](chao1-estimator.md)이 준다.

# 활용

- 동물 집단의 크기. 물고기, 새, 곤충의 개체 수를 표시와 재포획으로 어림한다.
- 인구 조사의 누락. 인구 조사와 사후 표본 조사를 두 표본으로 두고, 두 조사에 모두 잡힌 사람 수로 조사에서 빠진 사람 수를 어림한다.
- 소프트웨어의 남은 오류. 두 검토자가 따로 찾은 오류 수와 둘 다 찾은 오류 수로 전체 오류 수를 어림한다.
- 역학의 다중 출처 집계. 병원 기록과 검사 기록처럼 두 명단에 모두 오른 환자 수로 실제 환자 수를 어림한다.

[^1]: D. G. Chapman, "Some properties of the hypergeometric distribution with applications to zoological sample censuses", *University of California Publications in Statistics* 1 (1951), 131–160.

# 연관 문서

## 선수지식

- [초기하분포](hypergeometric-distribution.md)
- [최대가능도 추정](maximum-likelihood.md)

## 더 알아보기

- [Schnabel 추정량](schnabel-estimator.md)

#statistics #probability
