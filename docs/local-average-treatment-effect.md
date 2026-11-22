# 국소 평균 처리 효과

# 개요

**국소 평균 처리 효과(local average treatment effect, LATE)** 는 권유를 받느냐에 따라 치료를 받기도 하고 안 받기도 하는 사람들만의 평균 치료 효과다. 비타민을 먹으라는 문자를 동전 던지기로 보냈더니, 문자와 상관없이 늘 먹는 사람, 늘 안 먹는 사람, 문자를 받아야 먹는 사람이 섞여 있다고 하자. 효과가 사람마다 다르면 [도구변수](instrumental-variables.md)의 Wald 추정량은 전체 평균 효과가 아니다.

문자가 복용을 줄이는 사람이 없다고 가정하면, Wald 추정량은 문자를 받아야 먹는 사람들의 평균 효과와 정확히 같다. 이 사람들이 누구인지는 하나하나 가릴 수 없지만, 그들의 비율과 평균은 자료에서 구해진다.

# 직관

사람을 세 부류로 나눈다. 늘 먹는 사람이 20%, 늘 안 먹는 사람이 50%, 문자를 받아야 먹는 사람이 30% 다. 비타민을 먹지 않을 때의 건강 점수는 차례로 $6$, $4$, $5$ 이고, 먹으면 늘 먹는 사람은 $1$, 문자를 받아야 먹는 사람은 $3$ 오른다.

문자를 받은 집단에서는 늘 먹는 사람과 문자를 받아야 먹는 사람이 먹으므로 복용률이 $0.5$ 다. 받지 못한 집단에서는 늘 먹는 사람만 먹어 $0.2$ 다. 두 집단의 차 $0.3$ 이 문자를 받아야 먹는 사람의 비율이다.

평균 점수는 문자를 받은 집단이 $0.2\cdot 7+0.5\cdot 4+0.3\cdot 8=5.8$, 받지 못한 집단이 $0.2\cdot 7+0.5\cdot 4+0.3\cdot 5=4.9$ 다. 늘 먹는 사람과 늘 안 먹는 사람은 두 집단에서 점수가 같아 차에 기여하지 않는다. 차 $0.9$ 는 전부 문자를 받아야 먹는 사람의 $0.3\cdot 3$ 이다.

Wald 추정량은 $0.9/0.3=3$ 이고, 문자를 받아야 먹는 사람의 효과 $3$ 이다. 전체 평균 효과 $0.2\cdot 1+0.3\cdot 3=1.1$ 과는 다르다. 늘 안 먹는 사람의 효과는 자료 어디에도 나타나지 않으므로 $0$ 으로 두었다.

# 정의

이진 도구변수 $Z$ 와 이진 치료 $T$ 에서, $T(z)$ 를 $Z=z$ 일 때 받을 치료, $Y(t)$ 를 치료가 $t$ 일 때의 결과라 한다. 이것을 **잠재 결과(potential outcome)** 라 한다. 관측되는 것은 $T=T(Z)$ 와 $Y=Y(T)$ 뿐이다. 결과가 $Z$ 를 거치지 않고 $T$ 만으로 정해지는 것이 도구변수 문서의 배제 제약이다.

$(T(0),T(1))$ 에 따라 사람을 네 부류로 나눈다. 표의 칸은 각 경우의 $T(0)$ 과 $T(1)$ 이다.

| 부류 | 권유가 없을 때 | 권유가 있을 때 |
| --- | --- | --- |
| 늘 받는 사람(always-taker) | $1$ | $1$ |
| 늘 안 받는 사람(never-taker) | $0$ | $0$ |
| **순응자(complier)** | $0$ | $1$ |
| 거스르는 사람(defier) | $1$ | $0$ |

직관 절의 문자를 받아야 먹는 사람이 순응자다. $T(1)\ge T(0)$ 이 모든 사람에게 성립하는 것, 곧 거스르는 사람이 없는 것을 **단조성(monotonicity)** 이라 한다.

순응자의 평균 효과를 **국소 평균 처리 효과** 라 한다.

$$
\mathrm{LATE}=E\lbrack Y(1)-Y(0)\mid T(1)\gt T(0)\rbrack
$$

직관 절에서 $\mathrm{LATE}=3$ 이다.

# 성질

## Imbens–Angrist 정리

$Z$ 가 $(T(0),T(1),Y(0),Y(1))$ 과 독립이고, 단조성이 성립하고, 순응자의 비율이 $0$ 보다 크면 Wald 추정량은 국소 평균 처리 효과와 같다[^1].

$$
\frac{E\lbrack Y\mid Z=1\rbrack-E\lbrack Y\mid Z=0\rbrack}{E\lbrack T\mid Z=1\rbrack-E\lbrack T\mid Z=0\rbrack}=E\lbrack Y(1)-Y(0)\mid T(1)\gt T(0)\rbrack
$$

$Y(T(z))=Y(0)+T(z)\thinspace(Y(1)-Y(0))$ 이다. 독립성으로 $E\lbrack Y\mid Z=z\rbrack=E\lbrack Y(T(z))\rbrack$ 이므로 분자는 다음과 같다.

$$
E\lbrack (T(1)-T(0))(Y(1)-Y(0))\rbrack
$$

단조성이 있으면 $T(1)-T(0)$ 은 순응자에서 $1$, 나머지에서 $0$ 이다. 그래서 분자는 순응자의 비율과 순응자의 평균 효과의 곱이고, 분모 $E\lbrack T(1)-T(0)\rbrack$ 은 순응자의 비율이다.

## 거스르는 사람이 있는 경우

거스르는 사람이 있으면 분자는 순응자의 몫에서 거스르는 사람의 몫을 뺀 것이 된다. 직관 절에서 늘 안 먹는 사람을 40% 로 줄이고, 문자를 받으면 오히려 안 먹는 거스르는 사람 10% 를 두어 그들의 효과를 $1$ 이라 하자. 복용률은 $0.5$ 와 $0.3$ 으로 차가 $0.2$ 이고, 점수 차는 $0.3\cdot 3-0.1\cdot 1=0.8$ 이다. Wald 추정량 $4$ 는 어느 부류의 효과도 아니다.

## 순응자의 평균 결과

순응자는 한 사람씩 가려지지 않지만, 순응자의 잠재 결과의 평균은 자료에서 구해진다[^2].

$$
E\lbrack Y(1)\mid T(1)\gt T(0)\rbrack=\frac{E\lbrack YT\mid Z=1\rbrack-E\lbrack YT\mid Z=0\rbrack}{E\lbrack T\mid Z=1\rbrack-E\lbrack T\mid Z=0\rbrack}
$$

$Z=1$ 집단의 복용자는 늘 먹는 사람과 순응자이고 $Z=0$ 집단의 복용자는 늘 먹는 사람뿐이므로, 차에는 순응자의 $Y(1)$ 만 남는다. 직관 절에서는 $(0.2\cdot 7+0.3\cdot 8-0.2\cdot 7)/0.3=8$ 이고, 순응자의 $5+3$ 과 같다. $Y(0)$ 의 평균은 $T$ 대신 $1-T$ 를 쓰고 두 집단의 순서를 바꾸면 같은 꼴로 $5$ 가 나온다.

# 활용

- 순응하지 않는 무작위 실험. 배정 효과(intention-to-treat)를 순응률로 나눈 값이 배정에 따라 실제로 치료를 받은 사람들의 효과다. 배정과 상관없이 치료를 받거나 거부하는 사람의 효과는 이 실험으로는 알 수 없다.
- 징병 추첨. Angrist 는 베트남 전쟁 징병 추첨 번호를 도구변수로 군 복무가 이후 소득에 준 효과를 추정했다. 그 값은 추첨 번호 때문에 입대한 사람의 효과다[^3].
- 도구변수의 선택. 같은 치료에 도구변수를 둘 쓰면 순응자가 다르므로 두 Wald 추정량이 달라도 모형이 틀린 것은 아니다. 출생 분기를 도구변수로 쓴 교육 연구의 값은 출생 분기 때문에 학교를 더 다닌 사람의 효과다.

[^1]: G. W. Imbens, J. D. Angrist, "Identification and estimation of local average treatment effects", *Econometrica* 62 (1994), 467–475.
[^2]: G. W. Imbens, D. B. Rubin, "Estimating outcome distributions for compliers in instrumental variables models", *Review of Economic Studies* 64 (1997), 555–574.
[^3]: J. D. Angrist, "Lifetime earnings and the Vietnam era draft lottery: evidence from Social Security administrative records", *American Economic Review* 80 (1990), 313–336.

# 연관 문서

## 선수지식

- [도구변수](instrumental-variables.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
