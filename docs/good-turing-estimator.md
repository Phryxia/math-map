# Good–Turing 추정량

# 개요

**Good–Turing 추정량(Good–Turing estimator)** 은 표본에서 정확히 한 번 나온 종류의 수로, 아직 한 번도 나오지 않은 종류들이 차지하는 확률을 추정하는 방법이다. 강에서 물고기 여덟 마리를 잡아 종을 적었을 때, 다음에 잡을 물고기가 처음 보는 종일 확률은 얼마인가. 본 적 없는 종은 셀 수 없으므로 빈도로는 $0$ 이고, 종이 모두 몇 개인지도 모른다.

이 추정량은 그 확률을 "한 번만 잡힌 종의 마릿수 ÷ 전체 마릿수" 로 준다. 같은 생각으로 $r$ 번 나온 종류의 확률도 $r+1$ 번 나온 종류의 수로 고친다.

# 직관

물고기 여덟 마리의 종이 $a,a,a,b,b,c,d,e$ 다. 한 번만 잡힌 종은 $c,d,e$ 셋이다.

잡은 여덟 마리 가운데 하나를 골라 강에 놓아 주었다가 마지막에 다시 잡았다고 해 본다. 나머지 일곱 마리를 본 뒤 그 한 마리가 처음 보는 종이 되는 것은, 그 물고기가 원래 표본에서 한 번만 잡힌 종일 때뿐이다. 여덟 마리 가운데 그런 물고기는 $c,d,e$ 의 셋이므로 "마지막 한 마리가 새 종" 인 비율은 $3/8$ 이다.

그래서 다음 물고기가 새 종일 확률을 $3/8$ 로 추정한다. 같은 방법으로, 두 번 잡힌 종 $b$ 의 한 마리를 놓아 주면 남은 표본에서 $b$ 는 한 번 나온 종이 된다. 한 번 나온 종의 확률은 두 번 나온 종의 수로 추정된다.

# 정의

표본 크기를 $N$, 표본에 정확히 $r$ 번 나온 종류의 수를 $n_r$ 라 한다. 직관 절에서 $N=8$, $n_1=3$, $n_2=1$, $n_3=1$ 이다.

- 표본에 나오지 않은 종류의 확률의 합 $M_0$ 을 **놓친 질량(missing mass)** 이라 한다. Good–Turing 추정은 다음과 같다.

  $$
  \hat M_0=\frac{n_1}{N}
  $$

- 표본에 $r\ge1$ 번 나온 종류 하나의 확률은 고친 셈 $r^\ast$ 를 써서 $r^\ast/N$ 으로 추정한다[^1].

  $$
  r^\ast=(r+1)\frac{n_{r+1}}{n_r}
  $$

직관 절에서 $\hat M_0=3/8$ 이다. 한 번 나온 종 하나의 확률은 $r^\ast=2\cdot\frac13$ 에서 $1/12$ 이고, 두 번 나온 $b$ 는 $r^\ast=3\cdot\frac11$ 에서 $3/8$ 이다.

# 성질

## 놓친 질량의 치우침

종류 $s$ 의 확률을 $p_s$ 라 한다. 종류 $s$ 는 확률 $(1-p_s)^N$ 으로 표본에 없고, 확률 $Np_s(1-p_s)^{N-1}$ 로 정확히 한 번 나오므로

$$
E\lbrack M_0\rbrack=\sum_s p_s(1-p_s)^N,\qquad E\Bigl\lbrack\frac{n_1}{N}\Bigr\rbrack=\sum_s p_s(1-p_s)^{N-1}
$$

이다. 두 값의 차는 $\sum_s p_s^2(1-p_s)^{N-1}$ 이다. $p(1-p)^{N-1}$ 은 $p=1/N$ 에서 가장 크고 그 값이 $1/N$ 이하이므로

$$
0\le E\Bigl\lbrack\frac{n_1}{N}\Bigr\rbrack-E\lbrack M_0\rbrack\le\frac1N
$$

이다. 종류가 몇 개이든, 확률이 어떻게 생겼든 성립한다.

## 집중

McAllester 와 Schapire 는 확률 $1-\delta$ 이상으로 $\vert M_0-n_1/N\vert$ 가 $O\bigl(\sqrt{\log(1/\delta)/N}\bigr)$ 이하임을 증명했다[^2]. $M_0$ 은 표본마다 달라지는 확률변수이므로, 기댓값의 차만이 아니라 한 표본에서의 오차도 작다.

## 큰 r 에서의 문제

$r$ 가 크면 $n_r$ 가 작고 들쭉날쭉해서 $r^\ast$ 가 불안정하다. 직관 절에서 세 번 나온 $a$ 는 $n_4=0$ 이므로 $r^\ast=0$ 이 되어 확률 $0$ 을 받는다. 그래서 $\log n_r$ 을 $\log r$ 의 직선으로 맞춘 매끄러운 값을 $n_r$ 대신 쓰고, $r$ 가 크면 빈도 $r/N$ 을 그대로 쓴다. 이렇게 고친 것을 단순 Good–Turing(simple Good–Turing) 추정이라 한다[^3].

## Laplace 계승 규칙과의 차이

[Laplace 계승 규칙](rule-of-succession.md)의 가산 평활은 종류가 모두 $m$ 개라는 것을 알아야 보지 못한 종류에 확률 $\lambda/(N+m\lambda)$ 씩을 준다. Good–Turing 추정은 $m$ 을 쓰지 않고 표본의 $n_1$ 만으로 놓친 질량 전체를 정한다.

# 활용

- 암호 해독. Turing 은 제2차 세계대전 중 Enigma 의 설정 표에서 아직 나오지 않은 항목의 확률을 이 방법으로 추정했고, Good 이 1953 년에 발표했다[^1].
- [n-gram 언어 모형](n-gram-language-models.md). 말뭉치에 없는 낱말 쌍의 몫을 정하는 Katz 후퇴 평활(Katz back-off)이 Good–Turing 고친 셈을 쓴다.
- 생태학과 유전체학. 표본에서 보지 못한 종이나 변이의 비율, 표본을 늘렸을 때 새로 보게 될 종의 수를 추정한다. 종의 총수의 하한은 [Chao1 추정량](chao1-estimator.md)으로 어림한다.
- 데이터 압축. 처음 보는 기호에 줄 확률을 정하는 이스케이프 확률의 추정에 쓴다.

[^1]: I. J. Good, "The population frequencies of species and the estimation of population parameters", *Biometrika* 40 (1953), 237–264.
[^2]: D. McAllester, R. E. Schapire, "On the convergence rate of Good–Turing estimators", COLT 2000, 1–6.
[^3]: W. A. Gale, G. Sampson, "Good–Turing frequency estimation without tears", *Journal of Quantitative Linguistics* 2 (1995), 217–237.

# 연관 문서

## 선수지식

- [Laplace 계승 규칙](rule-of-succession.md)

## 더 알아보기

- [Chao1 추정량](chao1-estimator.md)

#statistics #probability #information_theory
