# 완전 무작위 측도

# 개요

**완전 무작위 측도(completely random measure)** 는 겹치지 않는 영역에 주는 값들이 서로 독립인 무작위 측도다. 숲을 구역으로 나누어 구역마다 나무의 양을 잴 때, 한 구역의 양이 다른 구역의 양에 영향을 주지 않고 나무 하나하나는 한 점에 무게가 몰린 원자로 보면 이 꼴이다.

이런 측도는 (위치, 무게) 쌍을 [Poisson 과정](poisson-process.md)의 점으로 뽑아 원자들을 더한 것으로 적힌다. 원자가 셀 수 없이 많아도 무게의 합이 유한하게 만들 수 있고, 그 합으로 나누면 Dirichlet 과정 같은 무작위 확률분포가 나온다.

# 직관

양수 축 위에서 무게를 Poisson 과정의 점으로 뽑는다. 무게가 $w$ 근처인 점이 평균 $\alpha w^{-1}e^{-w}\thinspace dw$ 개 나오게 한다. 무게가 $\varepsilon$ 보다 큰 점의 평균 개수는

$$
\alpha\int_\varepsilon^\infty w^{-1}e^{-w}\thinspace dw
$$

이고 $\varepsilon\to0$ 에서 $\alpha\log(1/\varepsilon)$ 처럼 커지므로 점은 무한히 많다. 무게가 $1$ 보다 큰 점은 평균 $0.219\alpha$ 개뿐이고 나머지는 작은 무게다.

무게를 모두 더한 값의 평균은 무게를 곱해 적분한 $\alpha\int_0^\infty e^{-w}\thinspace dw=\alpha$ 다. 점은 무한히 많지만 합은 유한하다. 점마다 위치를 기준 분포 $H$ 에서 따로 뽑아 그 위치에 무게만큼의 원자를 두면, 구역 $A$ 에 놓인 원자들의 무게 합 $\mu(A)$ 가 정해진다. 겹치지 않는 구역에 떨어진 점들은 Poisson 과정의 성질로 서로 독립이므로 $\mu(A_1),\dots,\mu(A_n)$ 이 독립이다.

# 정의

## 완전 무작위 측도

가측공간 $(\Omega,\mathcal F)$ 위의 무작위 측도 $\mu$ 가, 서로소인 가측집합 $A_1,\dots,A_n$ 마다 $\mu(A_1),\dots,\mu(A_n)$ 이 독립이면 $\mu$ 를 **완전 무작위 측도(completely random measure)** 라 한다.

## Lévy 측도와 표현

$\Omega\times(0,\infty)$ 위의 측도 $\nu$ 를 평균 측도로 하는 Poisson 점과정의 점 $(X_i,w_i)$ 로

$$
\mu=\sum_i w_i\delta_{X_i}
$$

를 만들면 $\mu$ 는 완전 무작위 측도다. 모든 가측집합 $A$ 에서 $\mu(A)\lt\infty$ 가 거의 확실하려면 $\int_A\int_0^\infty\min(1,w)\thinspace\nu(dx,dw)\lt\infty$ 이면 된다. $\nu$ 를 $\mu$ 의 **Lévy 측도(Lévy measure)** 라 한다. 직관 절의 예는 $\nu(dx,dw)=\alpha H(dx)\thinspace w^{-1}e^{-w}\thinspace dw$ 다.

Kingman 은 완전 무작위 측도가 모두 결정적인 측도, 위치가 고정된 원자들에 독립인 무게를 준 것, 위의 Poisson 꼴 측도의 셋을 독립으로 더한 것임을 증명했다[^1].

## 세 가지 예

- **감마 과정(gamma process)** 은 $\nu=\alpha H(dx)\thinspace w^{-1}e^{-w}\thinspace dw$ 인 것이다. $\mu(A)$ 는 모양 모수 $\alpha H(A)$ 의 [감마분포](gamma-distribution.md)를 따른다.
- **베타 과정(beta process)** 은 $c\gt0$ 과 측도 $B_0$ 에 대해 $\nu=cB_0(dx)\thinspace w^{-1}(1-w)^{c-1}\thinspace dw$ 를 $(0,1)$ 위에서 준 것이다. 원자의 무게가 모두 $1$ 보다 작다.
- **안정 과정(stable process)** 은 $0\lt\sigma\lt1$ 에 대해 $\nu=H(dx)\thinspace\frac{\sigma}{\Gamma(1-\sigma)}w^{-1-\sigma}\thinspace dw$ 인 것이다.

# 성질

## Laplace 범함수

$f\ge0$ 이 가측함수이면 Poisson 꼴 완전 무작위 측도에 대해

$$
E\Bigl\lbrack e^{-\int f\thinspace d\mu}\Bigr\rbrack=\exp\Bigl(-\int\int\bigl(1-e^{-wf(x)}\bigr)\nu(dx,dw)\Bigr)
$$

이다. Poisson 점과정의 Campbell 정리(Campbell's theorem)에서 바로 나온다. $f=t\mathbf 1_A$ 로 두면 $\mu(A)$ 의 [Laplace 변환](laplace-transform.md)이 나오고, 감마 과정에서는 $(1+t)^{-\alpha H(A)}$ 다.

## 실수선 위의 증가 Lévy 과정

$\Omega=(0,\infty)$ 이고 $\nu(dx,dw)=dx\thinspace\rho(dw)$ 꼴이면 $S_t=\mu((0,t\rbrack)$ 는 증분이 독립이고 정상인 증가 과정, 곧 증가하는 [Lévy 과정](levy-processes.md)(종속자, subordinator)이다. $\rho$ 가 그 Lévy 측도다. 거꾸로 종속자의 뜀들을 원자로 두면 완전 무작위 측도가 된다.

## 정규화와 무작위 확률분포

- 감마 과정을 전체 질량으로 나눈 $\mu/\mu(\Omega)$ 는 [Dirichlet 과정](dirichlet-process.md) $\mathrm{DP}(\alpha,H)$ 를 따른다[^2]. 유한 분할 $A_1,\dots,A_n$ 에서 $\mu(A_i)$ 는 독립인 감마 확률변수이고, 독립인 감마 확률변수를 합으로 나눈 벡터는 [Dirichlet 분포](dirichlet-distribution.md)를 따른다.
- 안정 과정을 전체 질량으로 나누면 무게의 분포가 [Pitman–Yor 과정](pitman-yor-process.md)의 $\mathrm{PD}(\sigma,0)$ 이다.
- 베타 과정 $B$ 를 뽑고, 대상마다 $B$ 의 원자 $k$ 를 확률 $w_k$ 로 독립으로 갖게 하면, $c=1$ 일 때 대상과 원자의 0-1 행렬이 [Indian 뷔페 과정](indian-buffet-process.md)을 따른다[^3].

# 활용

- 베이즈 비모수 사전분포. 정규화한 완전 무작위 측도는 군집 모형의 사전분포가 되고, 정규화하지 않은 것은 특징 모형의 사전분포가 된다.
- 생존 분석. Hjort 는 누적 위험 함수의 사전분포로 베타 과정을 도입했고, 중도 절단 자료에서 사후분포가 다시 베타 과정이다[^4].
- 생태학의 종 풍부도. 종마다의 개체 수를 원자의 무게로 두어 표본에서 아직 보지 못한 종의 수를 추정한다.

[^1]: J. F. C. Kingman, "Completely random measures", *Pacific Journal of Mathematics* 21 (1967), 59–78.
[^2]: T. S. Ferguson, "A Bayesian analysis of some nonparametric problems", *Annals of Statistics* 1 (1973), 209–230.
[^3]: R. Thibaux, M. I. Jordan, "Hierarchical beta processes and the Indian buffet process", AISTATS 2007.
[^4]: N. L. Hjort, "Nonparametric Bayes estimators based on beta processes in models for life history data", *Annals of Statistics* 18 (1990), 1259–1294.

# 연관 문서

## 선수지식

- [Poisson 과정](poisson-process.md)
- [Lévy 과정](levy-processes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #measure_theory
