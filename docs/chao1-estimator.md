# Chao1 추정량

# 개요

**Chao1 추정량(Chao1 estimator)** 은 표본에서 한 번 나온 종류와 두 번 나온 종류의 수로, 모집단에 종류가 모두 몇 개 있는지 아래쪽으로 어림하는 방법이다. 물고기 여덟 마리를 잡아 종 다섯을 보았다면, 강에 사는 종이 다섯보다 많다는 것은 알지만 몇 종을 더 기대해야 하는지는 표본의 종 수만으로 알 수 없다.

[Good–Turing 추정량](good-turing-estimator.md)이 한 번 나온 종류의 수로 보지 못한 종류의 확률을 정하듯, Chao1 은 한 번 나온 종류와 두 번 나온 종류의 비로 보지 못한 종류의 개수를 정한다.

# 직관

물고기 여덟 마리의 종이 $a,a,a,b,b,c,d,e$ 다. 본 종은 다섯이고, 한 번만 잡힌 종이 $c,d,e$ 셋, 두 번 잡힌 종이 $b$ 하나다.

한 번만 잡힌 종이 많다는 것은 겨우 잡힌 드문 종이 많다는 것이고, 그런 종이 많으면 아예 잡히지 않은 종도 많을 것이다. 두 번 잡힌 종이 많으면 드문 종도 대부분 한 번 이상 잡혔다는 뜻이다. 그래서 보지 못한 종의 수를 한 번 잡힌 종의 수의 제곱을 두 번 잡힌 종의 수의 두 배로 나눈 값으로 어림한다. 여기서는 $3^2/(2\cdot1)=4.5$ 이고, 강의 종 수를 $5+4.5=9.5$ 이상으로 본다.

# 정의

표본에서 본 종류의 수를 $S\_{\mathrm{obs}}$, 정확히 $k$ 번 나온 종류의 수를 $f_k$ 라 한다. $f_2\gt0$ 이면 **Chao1 추정량(Chao1 estimator)** 은

$$
\hat S_{\mathrm{Chao1}}=S_{\mathrm{obs}}+\frac{f_1^2}{2f_2}
$$

이다[^1]. $f_2=0$ 이면 표본 크기를 $N$ 이라 할 때 치우침을 고친 다음 꼴을 쓴다.

$$
\hat S_{\mathrm{Chao1}}=S_{\mathrm{obs}}+\frac{N-1}{N}\cdot\frac{f_1(f_1-1)}{2(f_2+1)}
$$

직관 절에서 $S\_{\mathrm{obs}}=5$, $f_1=3$, $f_2=1$ 이므로 $\hat S\_{\mathrm{Chao1}}=9.5$ 다.

# 성질

## 하한의 증명

종류 $s$ 가 표본에 나오는 횟수가 평균 $\lambda_s$ 인 [Poisson 분포](poisson-distribution.md)를 따른다고 둔다. 정확히 $k$ 번 나온 종류 수의 기댓값은

$$
E\lbrack f_k\rbrack=\sum_s e^{-\lambda_s}\frac{\lambda_s^k}{k!}
$$

이다. 벡터 $\bigl(e^{-\lambda_s/2}\bigr)\_s$ 와 $\bigl(e^{-\lambda_s/2}\lambda_s\bigr)\_s$ 에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓰면

$$
\Bigl(\sum_s e^{-\lambda_s}\lambda_s\Bigr)^2\le\Bigl(\sum_s e^{-\lambda_s}\Bigr)\Bigl(\sum_s e^{-\lambda_s}\lambda_s^2\Bigr)
$$

이고, 이것은 $E\lbrack f_1\rbrack^2\le E\lbrack f_0\rbrack\cdot 2E\lbrack f_2\rbrack$ 다. 그러므로 보지 못한 종류 수의 기댓값 $E\lbrack f_0\rbrack$ 은 $E\lbrack f_1\rbrack^2/(2E\lbrack f_2\rbrack)$ 이상이다. 등호는 모든 $\lambda_s$ 가 같을 때 성립한다.

## 하한의 의미

종류마다 잡힐 확률이 다를수록 부등식이 느슨해지고 추정량이 실제 종 수보다 작아진다. 아주 드문 종이 많은 모집단에서는 $f_1$, $f_2$ 가 그 종들에 대해 거의 알려 주지 않으므로, 표본만으로 정할 수 있는 것은 하한이다.

## 분산

Chao 는 $f_2\gt0$ 일 때 분산의 추정으로 다음을 주었다[^2].

$$
\widehat{\mathrm{Var}}=f_2\Bigl(\frac12\Bigl(\frac{f_1}{f_2}\Bigr)^2+\Bigl(\frac{f_1}{f_2}\Bigr)^3+\frac14\Bigl(\frac{f_1}{f_2}\Bigr)^4\Bigr)
$$

# 활용

- 생태학의 종 풍부도. 조사 지역마다 관찰한 종 목록으로 실제 종 수의 하한을 내고 지역끼리 견준다.
- 미생물 군집. 유전자 서열 조각을 종류로 두고 시료 속 미생물의 종류 수를 어림한다.
- 어휘 크기. 한 작가의 글에서 한 번, 두 번 쓴 낱말의 수로 그 작가가 아는 낱말 수의 하한을 어림한다.
- 포획 재포획. 같은 개체를 여러 번 잡는 조사에서 한 번, 두 번 잡힌 개체 수로 전체 개체 수를 어림한다.

[^1]: A. Chao, "Nonparametric estimation of the number of classes in a population", *Scandinavian Journal of Statistics* 11 (1984), 265–270.
[^2]: A. Chao, "Estimating the population size for capture–recapture data with unequal catchability", *Biometrics* 43 (1987), 783–791.

# 연관 문서

## 선수지식

- [Good–Turing 추정량](good-turing-estimator.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
