# 자본자산 가격결정 모형

# 개요

**자본자산 가격결정 모형(capital asset pricing model, CAPM)** 은 투자자 모두가 같은 기대와 같은 기준으로 자산을 고를 때 각 자산의 기대수익이 얼마여야 하는지를 정하는 모형이다. 변동이 큰 주식이 늘 더 큰 수익을 약속해야 하는 것은 아니다. 다른 자산과 함께 섞어 들면 그 변동의 일부가 상쇄된다. 이 모형은 한 자산이 시장 전체와 함께 움직이는 정도를 수 하나로 재고, 기대 초과수익이 그 수에 비례한다는 식을 준다.

# 직관

[평균-분산 포트폴리오](mean-variance-portfolio.md) 문서의 두 주식을 다시 쓴다. 분산은 $0.04$ 와 $0.09$ 이고 서로 독립이며, 기대수익률을 $0.08$ 과 $0.11$, 무위험 이자율을 $0.02$ 로 둔다. 접점 포트폴리오의 방향은 다음과 같다.

$$
\Sigma^{-1}(\mu-r_f\mathbf 1)=\Bigl(25\cdot 0.06,\thinspace\frac{100}9\cdot 0.09\Bigr)=(1.5,1)
$$

그러므로 비중은 $(0.6,0.4)$ 다.

모든 투자자가 이 배분을 든다면 시장 전체의 비중도 $(0.6,0.4)$ 다. 시장의 기대수익률은 $0.092$ 이고 분산은 $0.36\cdot 0.04+0.16\cdot 0.09=0.0288$ 이다. 주식 1 의 수익률과 시장 수익률의 공분산은 $0.6\cdot 0.04=0.024$ 이고, 이것을 시장 분산으로 나누면 $0.83$ 이다. 주식 1 의 초과 기대수익 $0.06$ 은 시장의 초과 기대수익 $0.072$ 의 정확히 $0.83$ 배다.

주식 2 도 같은 계산으로 공분산 $0.036$, 비 $1.25$ 이고 초과 기대수익 $0.09=1.25\times 0.072$ 다. 두 주식의 기대수익은 자기 분산이 아니라 시장과의 공분산에 비례한다.

# 정의

## 시장 포트폴리오와 베타

위험 자산 $n$ 개의 수익률 $R_1,\dots,R_n$ 과 무위험 이자율 $r_f$ 가 있다. 시장에 있는 각 자산의 가치 비중으로 만든 포트폴리오를 **시장 포트폴리오(market portfolio)** 라 하고 그 수익률을 $R_m$ 으로 쓴다. 자산 $i$ 의 **베타(beta)** 는

$$
\beta_i=\frac{\mathrm{Cov}(R_i,R_m)}{\mathrm{Var}(R_m)}
$$

다. 직관 절에서 $\beta_1\approx 0.83$, $\beta_2=1.25$ 다.

## 모형

모든 투자자가 같은 $\mu$ 와 $\Sigma$ 를 알고 평균-분산 기준으로 배분하며 $r_f$ 로 자유롭게 빌리고 빌려준다고 가정한다. 이때 다음 식을 **자본자산 가격결정 모형** 이라 하고, $(\beta_i,E\lbrack R_i\rbrack)$ 평면에서 이 식이 그리는 직선을 **증권시장선(security market line)** 이라 한다.[^1]

$$
E\lbrack R_i\rbrack-r_f=\beta_i\bigl(E\lbrack R_m\rbrack-r_f\bigr)
$$

# 성질

## 접점 조건으로부터의 유도

가정 아래 모든 투자자의 위험 자산 부분은 같은 접점 포트폴리오이고, 시장은 그것을 모두 더한 것이므로 시장 비중 $w_m$ 이 접점 포트폴리오다. 접점 조건에 따라 어떤 $\kappa\gt 0$ 이 있어 $\Sigma w_m=\kappa(\mu-r_f\mathbf 1)$ 이다. $(\Sigma w_m)\_i$ 는 $\mathrm{Cov}(R_i,R_m)$ 이므로 각 자산의 초과 기대수익이 시장과의 공분산에 비례한다. 양변에 $w_m^{\mathsf T}$ 를 곱하면 $\kappa=\mathrm{Var}(R_m)/(E\lbrack R_m\rbrack-r_f)$ 이고, 이것을 넣으면 위 식이 나온다.

## 체계적 위험과 고유 위험

$R_i-r_f=\beta_i(R_m-r_f)+\varepsilon_i$ 로 두면 $\mathrm{Cov}(\varepsilon_i,R_m)=0$ 이고 $E\lbrack\varepsilon_i\rbrack=0$ 이다. 따라서

$$
\mathrm{Var}(R_i)=\beta_i^2\mathrm{Var}(R_m)+\mathrm{Var}(\varepsilon_i)
$$

로 나뉜다. 첫 항을 **체계적 위험(systematic risk)**, 둘째 항을 **고유 위험(idiosyncratic risk)** 이라 한다. 모형에서 기대수익은 $\beta_i$ 로만 정해지므로 고유 위험에는 추가 수익이 붙지 않는다. 직관 절의 주식 1 은 분산 $0.04$ 가운데 $0.83^2\cdot 0.0288=0.02$ 가 체계적 위험이다.

## 회귀 기울기

$\beta_i$ 는 $R_i-r_f$ 를 $R_m-r_f$ 에 [선형회귀](linear-regression.md)한 기울기의 모집단 값이다. 그래서 관측된 수익률 자료에서 최소제곱으로 $\beta_i$ 를 추정하고, 절편이 $0$ 인지로 모형을 검정한다.

# 활용

- 자본 비용. 기업이 투자안을 평가할 때 그 투자안의 베타로 주주가 요구하는 수익률 $r_f+\beta(E\lbrack R_m\rbrack-r_f)$ 를 정하고 이것을 할인율로 쓴다.
- 운용 성과 평가. 펀드 수익률을 시장 수익률에 회귀한 절편을 Jensen 알파(Jensen's alpha)라 하고, 베타로 설명되지 않는 초과수익의 크기로 쓴다.
- 다요인 모형. 시장 하나 대신 기업 규모나 장부가 대비 시가 같은 요인 여럿에 회귀하는 Fama–French 모형(Fama–French model)이 같은 회귀 구조를 쓴다.

[^1]: William F. Sharpe, "Capital asset prices: A theory of market equilibrium under conditions of risk", *Journal of Finance* 19 (1964), 425–442.

# 연관 문서

## 선수지식

- [평균-분산 포트폴리오](mean-variance-portfolio.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #optimization #probability
