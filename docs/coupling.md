# 결합

# 개요

**결합(coupling)** 은 따로 주어진 두 확률변수를 같은 실험에서 함께 뽑히도록 짝짓는 방법이다. 앞면 확률이 $0.5$ 인 동전과 $0.6$ 인 동전 중 어느 쪽이 앞면을 더 많이 내는지 비교하려면, 두 동전을 따로 던진 결과로는 매번 비교가 흔들린다. 같은 균등난수 $U$ 를 하나 뽑아 $U\lt 0.5$ 이면 첫 동전이, $U\lt 0.6$ 이면 둘째 동전이 앞면이라고 정하면 첫 동전이 앞면일 때 둘째도 항상 앞면이다. 결합은 이렇게 두 분포를 한 공간에 놓아 값끼리 직접 비교해서 분포 사이의 부등식을 증명한다.

# 직관

앞면 확률이 $0.5$ 인 동전과 $0.51$ 인 동전의 분포를 비교한다. 두 분포의 [전변동거리](total-variation-distance.md)는 $0.01$ 이다.

두 동전을 따로 던지면 결과가 다를 확률이 $0.5\cdot0.49+0.5\cdot0.51=0.5$ 다. 거리가 $0.01$ 인 두 분포에서 뽑은 값이 절반의 확률로 어긋난다.

같은 난수를 쓰면 다르다. $U$ 를 $(0,1)$ 의 [균등분포](uniform-distribution.md)라 하고 다음으로 둔다.

$$
X=\mathbf 1\lbrace U\lt 0.5\rbrace,\qquad Y=\mathbf 1\lbrace U\lt 0.51\rbrace
$$

$X$ 는 첫째 분포, $Y$ 는 둘째 분포를 따른다. 두 값이 다른 것은 $U\in\lbrack 0.5,0.51)$ 일 때뿐이므로 $P(X\ne Y)=0.01$ 이고 전변동거리와 같다.

주변분포를 바꾸지 않고 두 변수를 같은 공간에 놓는 방법은 여럿이다. 그 가운데 두 값이 다를 확률이 가장 작은 것을 고르면 그 확률이 전변동거리와 같다.

# 정의

## 결합

확률공간 위의 쌍 $(X,Y)$ 가 두 분포 $\mu,\nu$ 의 **결합** 이라는 것은 $X$ 의 분포가 $\mu$ 이고 $Y$ 의 분포가 $\nu$ 라는 뜻이다. 쌍의 분포 $\pi$ 를 결합측도(coupling measure)라 하고, 가측집합 $A,B$ 에 대해 다음을 만족한다.

$$
\pi(A\times\Omega)=\mu(A),\qquad \pi(\Omega\times B)=\nu(B)
$$

$\pi=\mu\otimes\nu$ 를 독립 결합(independent coupling)이라 하고 항상 존재한다. 직관 절에서 두 동전을 따로 던진 것이 독립 결합이고, 같은 $U$ 로 정한 $(X,Y)$ 도 결합이다.

## 최적 결합

$P(X\ne Y)$ 를 최소로 하는 결합을 **최적 결합(optimal coupling)** 이라 한다. 직관 절의 동전에서 독립 결합은 $P(X\ne Y)=0.5$ 이고 같은 $U$ 로 정한 결합은 $0.01$ 이며, 아래 결합 부등식에 따라 뒤의 것이 최적 결합이다. 비용함수를 $c(x,y)=\mathbf 1\lbrace x\ne y\rbrace$ 로 둔 [최적 수송](optimal-transport.md) 문제의 해다.

# 성질

## 결합 부등식

모든 결합 $(X,Y)$ 에서 $d\_{\mathrm{TV}}(\mu,\nu)\le P(X\ne Y)$ 이고, 등호를 주는 결합이 존재한다. 이것을 결합 부등식(coupling inequality)이라 한다.

부등식은 임의의 사건 $A$ 에서 $\mu(A)-\nu(A)=P(X\in A)-P(Y\in A)\le P(X\ne Y)$ 임을 보면 된다. $X\in A$ 이고 $Y\notin A$ 이면 두 값이 다르기 때문이다.

등호는 겹치는 부분을 공유하는 결합이 준다. 측도 $\mu\wedge\nu$ 를 확률 $1-d\_{\mathrm{TV}}$ 로 뽑아 $X=Y$ 로 두고, 남은 질량은 $(\mu-\mu\wedge\nu)$ 와 $(\nu-\mu\wedge\nu)$ 를 정규화해 독립으로 뽑는다. 두 값이 다른 것은 두 번째 경우뿐이므로 불일치 확률이 $d\_{\mathrm{TV}}$ 다.

## 연쇄의 수렴 추정

[Markov 연쇄](markov-chains.md)의 두 복사본 $X_t,Y_t$ 를 같은 전이핵으로 움직이되 서로 붙여 간다. 만나는 시각을 $\tau=\min\lbrace t:X_t=Y_t\rbrace$ 라 하고 만난 뒤에는 함께 움직이게 하면 $t\ge\tau$ 에서 두 값이 같다. 결합 부등식에서 다음이 나온다.

$$
d\_{\mathrm{TV}}(\mu P^t,\nu P^t)\le P(\tau\gt t)
$$

연쇄의 수렴 속도의 상한이 만남 시각의 꼬리 확률로 주어진다.

## 확률적 지배

Strassen 정리(Strassen's theorem)는 다음이다. [실수](real-numbers.md) 위의 분포 $\mu,\nu$ 에서 모든 $t$ 에 대해 $\mu(\lbrack t,\infty))\le\nu(\lbrack t,\infty))$ 인 것과, $X\le Y$ 를 항상 만족하는 결합이 존재하는 것이 동치다.

필요조건은 $X\le Y$ 에서 바로 나온다. 충분조건은 분위수 결합(quantile coupling)으로 보인다. 앞의 조건을 만족하면 $\nu$ 가 $\mu$ 를 확률적으로 지배한다(stochastic dominance)고 한다. $U$ 를 균등분포라 하고 $X=F_\mu^{-1}(U)$, $Y=F_\nu^{-1}(U)$ 로 두면 꼬리 조건이 $F_\mu^{-1}\le F_\nu^{-1}$ 을 주므로 $X\le Y$ 다.

# 활용

- 결합 부등식으로 [Markov 연쇄의 혼합시간](mixing-time.md)의 상한을 얻는다. [경로 결합](path-coupling.md)은 인접한 두 상태에서 출발한 연쇄만 다뤄 전체 상한을 얻는다.
- 단조성 증명. 확률적 지배의 결합 표현으로 매개변수를 키우면 분포가 커진다는 진술을 표본 수준의 부등식으로 바꾼다.
- 최적 수송. 결합은 수송 계획이고 전변동거리는 비용이 불일치 지시함수인 경우다. 비용을 거리로 바꾸면 Wasserstein 거리가 된다.
- 난수 생성. 같은 난수원으로 두 분포를 동시에 뽑으면 두 모형의 차이를 한 번의 시행에서 비교한다.

# 연관 문서

## 선수지식

- [전변동거리](total-variation-distance.md)

## 더 알아보기

- [Skorokhod 표현정리](skorokhod-representation.md)
- [Markov 연쇄의 혼합시간](mixing-time.md)

#probability #measure_theory #statistics
