# Λ-합류

# 개요

**Λ-합류(Λ-coalescent)** 는 계보를 거슬러 올라갈 때 둘씩만이 아니라 여럿이 한꺼번에 합쳐질 수 있게 한 합류 과정이다. 한 개체가 다음 세대의 상당 부분을 낳는 생물, 예를 들어 알을 수백만 개 낳고 그 가운데 몇 개체의 자손이 집단을 채우는 물고기에서는 표본 셋의 계보가 한 세대에 동시에 만나는 일이 흔하다. [Kingman 합류](kingman-coalescent.md)는 이런 동시 합류를 허용하지 않고, Λ-합류는 $[0,1]$ 위의 측도 하나로 몇 개가 함께 합쳐지는지의 세기를 정해 이 계보를 적는다.

# 직관

블록이 $3$ 개인 상태에서 Kingman 합류는 세 쌍이 각각 세기 $1$ 로 합쳐지고 셋이 함께 합쳐지는 일은 없다. 여럿이 함께 합쳐지게 하려면 세기를 다음과 같이 정한다. 비율 $x\in(0,1]$ 을 뽑고 블록마다 서로 독립으로 확률 $x$ 의 동전을 던져, 앞면이 나온 블록을 모두 하나로 합친다.

$x$ 를 고르게 뽑는 경우를 보자. 특정한 두 블록만 앞면이고 셋째가 뒷면일 확률은 $x^2(1-x)$ 이고, 세 블록이 모두 앞면일 확률은 $x^3$ 이다. 이 사건이 세기 $x^{-2}dx$ 로 일어나게 하면 특정한 쌍의 합류 세기는 $\int_0^1(1-x)dx=1/2$ 이고, 셋의 동시 합류 세기는 $\int_0^1x\thinspace dx=1/2$ 이다.

블록이 둘뿐이면 두 블록이 합쳐지는 세기는 $\int_0^1dx=1$ 이고, 셋일 때의 쌍 세기 $1/2$ 과 동시 합류 세기 $1/2$ 의 합과 같다. 셋째 블록을 무시하고 두 블록만 보아도 같은 과정이 되므로, 표본의 크기를 늘려도 앞의 표본이 보는 계보가 바뀌지 않는다.

# 정의

## 교환가능한 합류 과정

자연수 집합의 분할을 상태로 하고 블록이 합쳐지기만 하는 Markov 과정 $(\Pi_t)\_{t\ge 0}$ 가 있어, 모든 $n$ 에서 $\lbrace 1,\dots,n\rbrace$ 으로의 제한이 [Markov 연쇄](markov-chains.md)이고 번호를 바꾸어도 분포가 같으면 이것을 **교환가능한 합류 과정(exchangeable coalescent)** 이라 한다. 각 시각의 $\Pi_t$ 는 [Kingman 표현정리](kingman-representation-theorem.md)의 교환가능한 무작위 분할이다.

## Λ-합류

$\Lambda$ 를 $[0,1]$ 위의 유한 측도라 하자. 블록이 $b$ 개일 때 그 가운데 특정한 $k$ 개가 하나로 합쳐지는 세기를 다음과 같이 둔 교환가능한 합류 과정을 Λ-합류라 한다.

$$
\lambda\_{b,k}=\int_0^1x^{k-2}(1-x)^{b-k}\thinspace\Lambda(dx),\qquad 2\le k\le b
$$

$\Lambda$ 가 $0$ 에 놓인 단위 점질량이면 $\lambda\_{b,2}=1$ 이고 $k\ge 3$ 이면 $\lambda\_{b,k}=0$ 이므로 Kingman 합류다. $\Lambda$ 가 $[0,1]$ 의 균등분포이면 직관 절의 과정이고, 이것을 **Bolthausen–Sznitman 합류(Bolthausen–Sznitman coalescent)** 라 한다. 이때 $\lambda\_{3,2}=\lambda\_{3,3}=1/2$ 이다.

# 성질

## Pitman 정리

**정리.** 세기 $(\lambda\_{b,k})$ 가 블록 수 $b$ 와 합쳐지는 수 $k$ 에만 따르는 합류 과정이 표본 크기와 일관되는 것은 다음 관계와 동치이다.

$$
\lambda\_{b,k}=\lambda\_{b+1,k}+\lambda\_{b+1,k+1}
$$

이 관계를 만족하는 세기는 모두 $[0,1]$ 위의 유한 측도 $\Lambda$ 하나로 Λ-합류의 식처럼 쓰인다[^1]. 직관 절의 $1=1/2+1/2$ 이 $b=2$, $k=2$ 의 경우다. 관계식은 $b+1$ 개의 블록에서 한 블록을 무시하면 그 블록이 합류에 끼었는지에 따라 두 경우로 나뉜다는 것이다.

## 물감 상자 구성

$\Lambda$ 에 $0$ 의 점질량이 없으면 Λ-합류는 다음과 같이 만들어진다. $(0,1]\times[0,\infty)$ 위에서 세기가 $x^{-2}\Lambda(dx)\thinspace dt$ 인 [Poisson 과정](poisson-process.md)의 점 $(x,t)$ 마다, 시각 $t$ 에 블록마다 확률 $x$ 의 동전을 던져 앞면인 블록을 합친다. 합쳐지는 블록의 집합은 비율 $x$ 하나인 물감 상자 분할로 고른 것이다. $0$ 의 점질량은 Kingman 합류의 쌍 합류를 더한다.

Schweinsberg 는 여러 무리가 동시에 따로 합쳐질 수 있게, 비율 하나 대신 Kingman 단체의 수열을 쓰는 Ξ-합류(Ξ-coalescent)로 교환가능한 합류 과정 전부를 분류했다[^2].

## 무한에서 내려오기

$\Pi_0$ 이 모든 블록이 한 원소인 분할일 때, 양의 시각마다 블록이 거의 확실하게 유한 개이면 Λ-합류가 **무한에서 내려온다(comes down from infinity)** 고 한다. 블록이 $b$ 개일 때 블록 수가 줄어드는 평균 속도는 다음과 같다.

$$
\gamma_b=\sum_{k=2}^b(k-1)\binom bk\lambda\_{b,k}
$$

Schweinsberg 는 $\Lambda$ 에 $0$ 의 점질량이 없을 때 $\sum_b1/\gamma_b\lt\infty$ 가 무한에서 내려오는 것과 동치임을 보였다[^2]. Kingman 합류는 $\gamma_b=\binom b2$ 이므로 내려온다. Bolthausen–Sznitman 합류는 $\lambda\_{b,k}=(k-2)!(b-k)!/(b-1)!$ 에서 $\gamma_b=b\sum_{k=2}^b1/k$ 이고, 이것이 $b\log b$ 정도로 자라 $\sum_b1/\gamma_b$ 가 발산하므로 내려오지 않는다. $b=3$ 이면 $\gamma_3=5/2$ 다.

# 활용

- 치우친 자손 분포. 한 개체가 다음 세대의 상당 비율을 낳는 사건이 있는 집단 모형에서 계보의 극한은 Kingman 합류가 아니라 Λ-합류다. Schweinsberg 는 자손 수의 꼬리가 지수 $\alpha\in(1,2)$ 인 거듭제곱 꼴이면 $\Lambda$ 가 [베타분포](beta-distribution.md) $\mathrm{Beta}(2-\alpha,\alpha)$ 인 합류가 나온다는 것을 보였다[^2].
- 선택과 진행파. 강한 선택이 걸린 집단과 가지치기 무작위 걸음의 계보는 Bolthausen–Sznitman 합류로 근사된다. Bolthausen 과 Sznitman 은 이 합류를 스핀 유리 모형의 Ruelle 계단식 구조를 기술하려고 도입했다[^3].
- 유전 자료의 분석. 표본의 유형별 개수 분포가 [Ewens 표본 공식](ewens-sampling-formula.md)에서 벗어나는 정도로, 계보가 Kingman 합류인지 Λ-합류인지를 검정한다.

[^1]: J. Pitman, "Coalescents with multiple collisions", Annals of Probability 27 (1999), 1870–1902.
[^2]: J. Schweinsberg, "Coalescents with simultaneous multiple collisions", Electronic Journal of Probability 5 (2000), paper 12. J. Schweinsberg, "A necessary and sufficient condition for the Λ-coalescent to come down from infinity", Electronic Communications in Probability 5 (2000), 1–11. J. Schweinsberg, "Coalescent processes obtained from supercritical Galton–Watson processes", Stochastic Processes and their Applications 106 (2003), 107–139.
[^3]: E. Bolthausen, A.-S. Sznitman, "On Ruelle's probability cascades and an abstract cavity method", Communications in Mathematical Physics 197 (1998), 247–276.

# 연관 문서

## 선수지식

- [Kingman 합류](kingman-coalescent.md)
- [Kingman 표현정리](kingman-representation-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #statistics
