# Manski 경계

# 개요

**Manski 경계(Manski bounds)** 는 교란 요인을 모르는 관찰 자료에서 치료 효과를 한 값으로 정하는 대신, 자료와 어긋나지 않는 효과의 범위를 구한 것이다. 비타민을 먹은 사람 가운데 80% 가 건강하고 먹지 않은 사람 가운데 50% 가 건강하다고 하자. 먹은 사람이 원래 건강에 신경 쓰는 사람이었을 수 있으므로 차 $0.3$ 을 효과로 읽을 수 없다.

먹지 않은 사람이 먹었다면 어땠을지를 가장 나쁘게, 가장 좋게 채워 넣으면 효과가 들어갈 구간이 나온다. 가정을 하나씩 더할 때마다 구간이 좁아지고, 어떤 가정이 얼마나 좁히는지가 드러난다.

# 직관

전체의 40% 가 비타민을 먹었다. 건강하면 $Y=1$, 아니면 $Y=0$ 이다. 모두가 먹었을 때의 건강한 비율을 구하려 한다.

먹은 40% 는 실제로 먹었고 그 가운데 80% 가 건강하므로, 전체의 $0.4\cdot 0.8=0.32$ 는 먹었을 때 건강한 사람으로 확인된다. 먹지 않은 60% 가 먹었다면 어땠을지는 자료에 없다. 그들이 모두 건강하지 않았을 경우와 모두 건강했을 경우를 넣으면, 모두가 먹었을 때의 건강한 비율은 $0.32$ 에서 $0.32+0.6=0.92$ 사이다.

아무도 먹지 않았을 때도 같다. 먹지 않은 사람에게서 $0.6\cdot 0.5=0.30$ 이 확인되고, 먹은 40% 를 비워 두어 $0.30$ 에서 $0.70$ 사이다. 효과는 두 비율의 차이므로 다음 구간에 든다.

$$
\lbrack 0.32-0.70,\thinspace 0.92-0.30\rbrack=\lbrack -0.38,\thinspace 0.62\rbrack
$$

구간이 $0$ 을 담으므로 자료만으로는 비타민이 건강을 높이는지 낮추는지 정해지지 않는다.

# 정의

이진 치료 $T$ 와 $0$ 과 $1$ 사이의 값을 갖는 결과에서 $Y(t)$ 를 치료가 $t$ 일 때의 잠재 결과라 한다. [국소 평균 처리 효과](local-average-treatment-effect.md) 문서의 잠재 결과와 같다. 관측되는 것은 $T$ 와 $Y=Y(T)$ 다. 평균 처리 효과(average treatment effect)는 다음이다.

$$
\mathrm{ATE}=E\lbrack Y(1)\rbrack-E\lbrack Y(0)\rbrack
$$

$p=P(T=1)$ 이라 하자. 치료를 받지 않은 사람의 $Y(1)$ 을 $0$ 과 $1$ 로 채운 다음 구간을 $E\lbrack Y(1)\rbrack$ 의 **Manski 경계** 라 한다.

$$
\lbrack E\lbrack YT\rbrack,\thinspace E\lbrack YT\rbrack+(1-p)\rbrack
$$

$E\lbrack Y(0)\rbrack$ 의 경계는 같은 방법으로 $\lbrack E\lbrack Y(1-T)\rbrack,\thinspace E\lbrack Y(1-T)\rbrack+p\rbrack$ 이고, 평균 처리 효과의 경계는 위 끝에서 아래 끝을 뺀 구간이다. 직관 절에서 $p=0.4$, $E\lbrack YT\rbrack=0.32$, $E\lbrack Y(1-T)\rbrack=0.30$ 이다.

# 성질

## 폭이 1 인 구간

가정 없는 경계의 폭은 $E\lbrack Y(1)\rbrack$ 쪽이 $1-p$, $E\lbrack Y(0)\rbrack$ 쪽이 $p$ 이므로 평균 처리 효과의 경계는 폭이 언제나 $1$ 이다[^1]. 효과가 가질 수 있는 값의 범위 $\lbrack -1,1\rbrack$ 의 절반이고, 반드시 $0$ 을 담는다. 경계의 두 끝은 실제로 자료와 맞는 잠재 결과의 분포로 얻어지므로, 가정 없이 더 좁힐 수 없다.

## 단조성 가정

치료가 결과를 낮추지 않는다는 **단조 치료 반응(monotone treatment response)** 가정 $Y(1)\ge Y(0)$ 을 더하면 아래 끝이 $0$ 으로 올라간다. 치료를 받은 사람이 받지 않은 사람보다 두 잠재 결과의 평균이 낮지 않다는 **단조 치료 선택(monotone treatment selection)** 가정을 더하면, $E\lbrack Y(1)\rbrack\le E\lbrack Y\mid T=1\rbrack$ 이고 $E\lbrack Y(0)\rbrack\ge E\lbrack Y\mid T=0\rbrack$ 이어서 위 끝이 단순 비교의 차로 내려온다[^2].

직관 절에 두 가정을 함께 두면 효과는 $\lbrack 0,\thinspace 0.3\rbrack$ 에 든다. 단순 비교의 차 $0.3$ 은 효과의 위 끝이 된다.

## 도구변수가 있는 경계

[도구변수](instrumental-variables.md) $Z$ 가 잠재 결과와 평균으로 무관하면, $Z=z$ 인 사람들에게서 구한 $E\lbrack Y(1)\rbrack$ 의 경계가 모든 $z$ 에서 성립한다. 그래서 아래 끝의 최댓값과 위 끝의 최솟값 사이로 좁혀진다[^1]. $Z$ 가 잠재 결과 전체와 독립이고 모든 변수가 이진이면, Balke 와 Pearl 은 관측 분포와 맞는 잠재 결과 분포 위의 선형계획으로 가장 좁은 경계를 구했다[^3].

# 활용

- 결측 자료. 설문에 답하지 않은 사람의 응답을 $0$ 과 $1$ 로 채운 경계는 같은 셈이다. 무응답 비율이 경계의 폭이다.
- 정책 평가. 한 가정에 기대어 효과를 한 값으로 내는 대신, 가정마다 경계를 내어 어느 가정이 결론을 바꾸는지 보인다. Manski 와 Pepper 는 교육 연수가 임금에 주는 효과에 단조성 가정을 두어 경계를 구했다[^2].
- 순응하지 않는 실험. 배정을 도구변수로 둔 Balke–Pearl 경계는 국소 평균 처리 효과 대신 전체 평균 처리 효과의 범위를 준다.

[^1]: C. F. Manski, "Nonparametric bounds on treatment effects", *American Economic Review* 80 (1990), 319–323.
[^2]: C. F. Manski, J. V. Pepper, "Monotone instrumental variables: with an application to the returns to schooling", *Econometrica* 68 (2000), 997–1010.
[^3]: A. Balke, J. Pearl, "Bounds on treatment effects from studies with imperfect compliance", *Journal of the American Statistical Association* 92 (1997), 1171–1176.

# 연관 문서

## 선수지식

- [도구변수](instrumental-variables.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #optimization
