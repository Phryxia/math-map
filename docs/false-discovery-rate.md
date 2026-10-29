# 거짓 발견률

# 개요

**거짓 발견률(false discovery rate, FDR)** 은 여러 가설을 함께 검정할 때, 기각한 가설 가운데 사실은 참인 귀무가설이 차지하는 비율의 기댓값이다. 유전자 $1000$ 개를 하나씩 수준 $0.05$ 로 검정하면 효과가 없는 유전자만으로도 $50$ 개쯤이 잘못 기각되고, 하나라도 잘못 기각할 확률을 $0.05$ 로 묶으면 가설마다 기준이 $0.00005$ 가 되어 거의 아무것도 기각되지 않는다. 거짓 발견률은 기각한 것 가운데 잘못된 것의 비율만 $\alpha$ 이하로 묶고, p-값을 작은 순서로 늘어놓아 순위에 비례하는 기준과 비교하는 Benjamini–Hochberg 절차(Benjamini–Hochberg procedure)로 그 기준을 지킨다.

# 직관

거짓 발견률은 여러 가설을 함께 검정할 때, 기각한 가설 가운데 실제로는 참인 귀무가설이 차지하는 비율의 기댓값이다. 이 값을 $\alpha$ 이하로 묶는 대표 절차가 Benjamini–Hochberg 절차다.

[가설검정](hypothesis-testing.md)을 가설마다 수준 $\alpha$ 로 하면 가설이 많을수록 잘못된 기각이 늘어난다. 하나라도 잘못 기각할 확률을 묶는 Bonferroni 보정은 가설이 많으면 거의 아무것도 기각하지 못한다. 거짓 발견률은 그 사이의 기준이다.

가설 $10$ 개를 검정해 p-값을 작은 순서로 늘어놓았다.

$$
0.001,\ 0.008,\ 0.039,\ 0.041,\ 0.042,\ 0.060,\ 0.074,\ 0.205,\ 0.212,\ 0.216
$$

가설마다 $0.05$ 로 검정하면 다섯 개를 기각한다. 그런데 열 개가 모두 참인 귀무가설이어도 p-값이 $0.05$ 아래로 떨어지는 것이 평균 $0.5$ 개 나온다. 하나라도 잘못 기각할 확률을 $0.05$ 이하로 하려면 Bonferroni 보정대로 $0.05/10=0.005$ 를 문턱으로 쓰고, 그러면 첫째 하나만 기각한다.

두 문턱 사이의 방법은 p-값의 순위를 쓴다. 귀무가설이 모두 참이면 p-값은 [균등분포](uniform-distribution.md)를 따르므로 $k$ 번째로 작은 p-값은 대략 $k/10$ 근처에 있다. 그래서 $k$ 번째 p-값을 문턱 $0.05\cdot k/10$ 과 견준다. 문턱은 $0.005,0.010,0.015,\dots$ 이고, 첫째와 둘째는 문턱 아래, 셋째부터는 문턱 위다. 그 아래에 있는 마지막 순위까지인 두 개를 기각한다.

# 정의

가설 $H_1,\dots,H_m$ 가운데 참인 귀무가설이 $m_0$ 개이고, 어떤 절차가 $R$ 개를 기각했으며 그 가운데 참인 귀무가설이 $V$ 개라 한다.

$$
\mathrm{FDR}=E\Bigl\lbrack\frac{V}{\max(R,1)}\Bigr\rbrack
$$

를 **거짓 발견률** 이라 한다. $\mathrm{FWER}=P(V\ge 1)$ 을 **가족별 오류율(family-wise error rate, FWER)** 이라 한다.

**Benjamini–Hochberg 절차** 는 p-값을 $p_{(1)}\le\cdots\le p_{(m)}$ 으로 정렬하고

$$
\hat k=\max\Bigl\lbrace k:p_{(k)}\le\frac{k\alpha}{m}\Bigr\rbrace
$$

로 두어 $p_{(1)},\dots,p_{(\hat k)}$ 에 해당하는 가설을 기각한다. 그런 $k$ 가 없으면 아무것도 기각하지 않는다.

# 성질

## 두 오류율의 비교

$V/\max(R,1)\le\mathbf 1\lbrace V\ge 1\rbrace$ 이므로 $\mathrm{FDR}\le\mathrm{FWER}$ 다. 귀무가설이 모두 참이면 $V=R$ 이고 두 값이 같다. 그러므로 거짓 발견률을 $\alpha$ 이하로 하는 절차는 모든 귀무가설이 참일 때 하나라도 잘못 기각할 확률을 $\alpha$ 이하로 한다.

Bonferroni 보정은 각 가설을 $\alpha/m$ 으로 검정한다. 합집합의 확률을 확률의 합으로 누르는 [포함배제 원리](inclusion-exclusion.md)의 Bonferroni 부등식으로 $\mathrm{FWER}\le m_0\alpha/m\le\alpha$ 다.

## Benjamini–Hochberg 정리

**정리 (Benjamini–Hochberg).** p-값들이 독립이고 참인 귀무가설의 p-값이 균등분포를 따르면, Benjamini–Hochberg 절차의 거짓 발견률은 $m_0\alpha/m$ 과 같다.[^1]

증명의 요지. 참인 귀무가설 $i$ 하나를 고정한다. $p_i$ 를 $0$ 으로 바꾼 채 같은 절차를 돌렸을 때의 기각 수를 $R^{(i)}$ 라 하면, $p_i\le k\alpha/m$ 일 때 $R=k$ 인 것과 $R^{(i)}=k$ 인 것이 같다. $R^{(i)}$ 는 $p_i$ 와 독립이므로

$$
E\Bigl\lbrack\frac{\mathbf 1\lbrace i\text{ 기각}\rbrace}{\max(R,1)}\Bigr\rbrack=\sum_{k=1}^m\frac1k P\Bigl(p_i\le\frac{k\alpha}{m}\Bigr)P(R^{(i)}=k)=\frac{\alpha}{m}\sum_{k=1}^mP(R^{(i)}=k)=\frac\alpha m
$$

이다. 참인 귀무가설 $m_0$ 개에 대해 더하면 $m_0\alpha/m$ 이다. $\square$

## 의존하는 p-값

p-값들이 양의 회귀 의존(positive regression dependency on a subset, PRDS)을 만족하면 Benjamini–Hochberg 절차의 거짓 발견률은 여전히 $m_0\alpha/m$ 이하다. 의존 구조를 전혀 모르면 $\alpha$ 를 $\alpha/\sum_{j=1}^m j^{-1}$ 로 바꾸어 같은 절차를 쓴다. 이 절차를 Benjamini–Yekutieli 절차(Benjamini–Yekutieli procedure)라 한다.[^2] $\sum_{j\le m}j^{-1}$ 은 대략 $\log m$ 이다.

# 활용

- **유전체 자료.** 유전자 수천 개의 발현 차이를 동시에 검정할 때, 가족별 오류율을 묶으면 문턱이 너무 작아진다. 거짓 발견률을 묶으면 기각한 유전자 목록 가운데 잘못 든 것의 비율을 $\alpha$ 이하로 두면서 더 많이 기각한다.
- **e-값의 다중검정.** [e-값](e-values.md)으로 같은 순위 비교를 하는 e-BH(e-Benjamini–Hochberg) 절차는 의존 구조와 상관없이 거짓 발견률을 $\alpha$ 이하로 한다.
- **신뢰구간의 선택.** 기각한 가설에 대해서만 [신뢰구간](confidence-intervals.md)을 보고하면 선택된 구간들의 평균 피복률이 떨어진다. 거짓 발견률과 같은 꼴로 정의한 거짓 피복률(false coverage rate)을 각 구간의 수준을 $1-\hat k\alpha/m$ 으로 넓혀 묶는다.

[^1]: Yoav Benjamini, Yosef Hochberg, "Controlling the false discovery rate: a practical and powerful approach to multiple testing", *Journal of the Royal Statistical Society Series B* 57 (1995), 289–300.
[^2]: Yoav Benjamini, Daniel Yekutieli, "The control of the false discovery rate in multiple testing under dependency", *Annals of Statistics* 29 (2001), 1165–1188.

# 연관 문서

## 선수지식

- [가설검정](hypothesis-testing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
