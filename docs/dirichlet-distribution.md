# Dirichlet 분포

# 개요

**Dirichlet 분포(Dirichlet distribution)** 는 합이 $1$ 인 음이 아닌 벡터, 곧 확률 벡터 위의 확률분포다. 주사위의 여섯 면이 나올 확률을 모를 때 몇 번 던져 본 결과로 그 확률에 대한 판단을 고치려면, 확률 벡터 위에 분포가 있어야 한다. 밀도가 $\prod_jx_j^{\alpha_j-1}$ 에 비례하는 Dirichlet 분포를 사전분포로 두면 면 $j$ 가 $n_j$ 번 나온 뒤의 사후분포는 매개변수에 $n_j$ 를 더한 Dirichlet 분포이므로, [Bayes 추론](bayesian-inference.md)의 계산이 덧셈으로 끝난다.

# 직관

매개변수 $\alpha=(\alpha_1,\dots,\alpha_m)$ 에 대해 밀도가 $\prod_jx_j^{\alpha_j-1}$ 에 비례한다. $m=2$ 이면 Beta 분포다.

범주 $m$ 개의 확률을 모를 때 Bayes 추론에서 그 확률 벡터의 사전분포로 쓴다. 다항분포 가능도에 대한 켤레사전분포여서 관측한 횟수를 매개변수에 더하는 것으로 사후분포가 나온다.

주사위의 여섯 면이 나올 확률 $p=(p_1,\dots,p_6)$ 을 모른다. $p$ 가 가능한 확률 벡터 전체에서 고르게 퍼져 있다고 두고, 주사위를 던져 면 $j$ 가 $n_j$ 번 나왔다. 관측의 확률은 $\prod_jp_j^{n_j}$ 이므로 사후분포의 밀도는 이것에 비례한다.

사전분포의 밀도를 처음부터 $\prod_jp_j^{\alpha_j-1}$ 꼴로 잡으면 사후분포의 밀도는 $\prod_jp_j^{\alpha_j+n_j-1}$ 이다. 같은 꼴에서 지수만 $n_j$ 씩 늘어난다. 고르게 퍼진 분포는 모든 $\alpha_j=1$ 인 경우다. 이 꼴의 분포가 Dirichlet 분포다.

# 정의

$\Delta_m=\lbrace x\in\mathbb R^m:x_j\ge 0,\thinspace\sum_jx_j=1\rbrace$ 이라 한다. $\alpha_j\gt 0$ 이고 $\alpha_0=\sum_j\alpha_j$ 일 때 $\mathrm{Dir}(\alpha)$ 는 $(x_1,\dots,x_{m-1})$ 의 밀도가

$$
f(x)=\frac{\Gamma(\alpha_0)}{\prod_{j=1}^m\Gamma(\alpha_j)}\prod_{j=1}^mx_j^{\alpha_j-1}\qquad(x\in\Delta_m,\ x_m=1-x_1-\cdots-x_{m-1})
$$

인 분포다. $\Gamma$ 는 [감마 함수](gamma-function.md)이고, 앞의 상수는 베타 함수의 $m$ 변수 판이다.

# 성질

## 감마 표현

**명제.** $Y_1,\dots,Y_m$ 이 독립이고 $Y_j$ 가 형태 모수 $\alpha_j$, 척도 $1$ 인 [감마분포](gamma-distribution.md)(gamma distribution)를 따르면 $X=(Y_1,\dots,Y_m)/\sum_jY_j$ 는 $\mathrm{Dir}(\alpha)$ 를 따르고 $\sum_jY_j$ 와 독립이다.

$(Y_1,\dots,Y_m)$ 의 결합밀도 $\prod_jy_j^{\alpha_j-1}e^{-y_j}/\Gamma(\alpha_j)$ 에서 $t=\sum_jy_j$, $x_j=y_j/t$ 로 변수를 바꾸면 야코비안(Jacobian)이 $t^{m-1}$ 이고, 밀도가 $t^{\alpha_0-1}e^{-t}$ 와 $\prod_jx_j^{\alpha_j-1}$ 의 곱으로 갈라진다. $\square$

이 표현이 Dirichlet 분포의 표본을 뽑는 표준 방법이다.

## 적률과 주변분포

$X\sim\mathrm{Dir}(\alpha)$ 이면

$$
E\lbrack X_j\rbrack=\frac{\alpha_j}{\alpha_0},\qquad\mathrm{Var}(X_j)=\frac{\alpha_j(\alpha_0-\alpha_j)}{\alpha_0^2(\alpha_0+1)}
$$

이다. 좌표 몇 개를 더해 합치면 다시 Dirichlet 분포이고, 매개변수도 그 좌표끼리 더한다. 특히 $X_j\sim\mathrm{Beta}(\alpha_j,\alpha_0-\alpha_j)$ 다. $\alpha_0$ 가 클수록 분산이 작아 평균 근처에 모인다.

## 켤레성과 예측

$p\sim\mathrm{Dir}(\alpha)$ 이고 $p$ 가 주어지면 관측이 독립으로 범주 $j$ 를 확률 $p_j$ 로 내놓을 때, $n$ 번 가운데 범주 $j$ 가 $n_j$ 번 나왔으면 사후분포는 $\mathrm{Dir}(\alpha_1+n_1,\dots,\alpha_m+n_m)$ 이다. 다음 관측이 범주 $j$ 일 확률은 사후평균

$$
\frac{n_j+\alpha_j}{n+\alpha_0}
$$

이다. 모든 $\alpha_j=1$ 이면 [Laplace 계승 규칙](rule-of-succession.md)이다. 처음에 색 $j$ 의 공을 $\alpha_j$ 개 넣고, 공을 하나 뽑을 때마다 같은 색 공을 하나 더 넣는 Pólya 항아리(Pólya urn)에서 다음 공의 색의 확률이 이것과 같다.

# 활용

- **주제 모형.** 잠재 Dirichlet 할당(latent Dirichlet allocation, LDA)은 문서마다 주제 비율을, 주제마다 단어 비율을 Dirichlet 분포에서 뽑는 생성 모형이다. $\alpha_j\lt 1$ 이면 밀도가 단체의 꼭짓점 쪽에 몰려 문서마다 주제가 몇 개로 좁혀진다.
- **보편 포트폴리오.** [보편 포트폴리오](universal-portfolio.md)는 고정 비율 포트폴리오들을 단체 위의 분포로 평균한다. [균등분포](uniform-distribution.md) 대신 모든 $\alpha_j=1/2$ 인 Dirichlet 분포로 평균하면 후회가 줄어든다.
- **Dirichlet 과정.** 범주 수를 정하지 않는 비모수 Bayes 추론에서는 Dirichlet 과정(Dirichlet process)을 쓴다. 공간의 어떤 유한 분할에 대해서도 각 칸의 확률 벡터가 Dirichlet 분포를 따르는 무작위 측도다.[^1]

[^1]: Thomas S. Ferguson, "A Bayesian analysis of some nonparametric problems", *Annals of Statistics* 1 (1973), 209–230.

# 연관 문서

## 선수지식

- [Bayes 추론](bayesian-inference.md)
- [감마 함수](gamma-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning
