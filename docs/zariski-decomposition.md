# Zariski 분해

# 개요

**Zariski 분해(Zariski decomposition)** 는 곡면 위의 유효 인자를 단면에 실제로 쓰이는 nef 부분과 모든 단면에 들어 있는 고정 부분으로 나누는 분해다. 사영평면을 한 점에서 부풀린 곡면에서 $D=H+2E$ 의 배수 $mD$ 에 단면이 얼마나 있는지 물으면, 계수만 보아서는 $E$ 가 몇 번 들어가는지 알 수 없다.

Zariski 분해는 $D$ 를 $H$ 와 $2E$ 로 나누고, $mD$ 의 단면이 모두 $mH$ 의 단면에 $2mE$ 를 더한 것임을 보인다.

# 직관

사영평면을 점 $p$ 에서 [부풀림](blow-ups.md)한 곡면 $X$ 에서 $H$ 는 직선의 류, $E$ 는 예외 곡선이고 $H^2=1$, $E^2=-1$, $H\cdot E=0$ 이다. $D=H+2E$ 라 한다.

$D\cdot E=-2$ 로 음이다. $mD$ 의 단면 $s$ 의 영점 인자를 $Z$ 라 하면 $Z$ 는 $mD$ 와 류가 같은 유효 인자이고, $Z\cdot E=-2m\lt 0$ 이다. 서로 다른 기약 곡선은 음으로 만나지 않으므로 $Z$ 는 $E$ 를 성분으로 갖는다. $Z-E$ 를 다시 보면 $(mD-E)\cdot E=-2m+1$ 이고, 이 값이 음인 동안 같은 논법이 이어진다.

$mD-kE=mH+(2m-k)E$ 와 $E$ 의 교차수는 $-(2m-k)$ 이므로 $k=2m$ 에서 처음 $0$ 이 된다. 그래서 $mD$ 의 모든 단면은 영점 인자에 $E$ 를 $2m$ 번 성분으로 갖고, 그 나머지는 $mH$ 의 단면, 곧 평면의 $m$ 차 곡선이다. $mD$ 의 단면 공간의 차원은 $(m+1)(m+2)/2$ 다.

이 과정은 $D$ 를 $P=H$ 와 $N=2E$ 로 나눈다. $P$ 는 모든 곡선과 음이 아니게 만나고, $N$ 의 성분 $E$ 와는 $0$ 으로 만난다.

# 정의

$X$ 를 매끄러운 사영 곡면, $D$ 를 유리계수 유효 인자라 한다. 다음을 만족하는 $D=P+N$ 을 $D$ 의 **Zariski 분해** 라 한다.

- $P$ 는 nef 다. 곧 모든 기약 곡선 $C$ 에 대해 $P\cdot C\ge 0$ 이다.
- $N=\sum_ia_iN_i$ 는 $a_i\gt 0$ 인 유효 인자이고, 성분들의 교차행렬 $(N_i\cdot N_j)$ 은 음정부호다.
- 모든 $i$ 에 대해 $P\cdot N_i=0$ 이다.

$P$ 를 **양의 부분(positive part)**, $N$ 을 **음의 부분(negative part)** 이라 한다. 직관 절에서 $P=H$, $N=2E$ 이고, 교차행렬은 $(E^2)=(-1)$ 이라 음정부호다.

nef 와 nef 원뿔은 [풍부한 선다발의 수치 판정법](ampleness-criteria.md)의 정의를 따른다. $D$ 가 이미 nef 이면 $P=D$, $N=0$ 이다.

# 성질

## 존재와 유일성

정리(Zariski). 매끄러운 사영 곡면 위의 모든 유리계수 유효 인자는 Zariski 분해를 갖고, 그 분해는 하나뿐이다[^1].

증명의 요지. $D\cdot C\lt 0$ 인 곡선들을 모아 그 교차행렬이 음정부호임을 보이고, $P\cdot N_i=0$ 인 연립 일차방정식을 풀어 $N$ 의 계수를 정한다. 계수가 양이 아니거나 새 곡선과 음으로 만나면 곡선을 더해 되풀이한다. 음정부호성은 [Hodge 지표 정리](hodge-index-theorem.md)에서 나오고, 곡선의 개수는 Picard 수로 묶여 과정이 끝난다. 유일성은 $P$ 가 $D$ 이하의 nef 인자 가운데 가장 큰 것이라는 성질에서 나온다.

## 단면의 개수

$mD$ 가 정수계수이면 다음이 성립한다.

$$
H^0(X,\mathcal O_X(mD))\cong H^0(X,\mathcal O_X(\lfloor mP\rfloor))
$$

곧 $mD$ 의 단면은 모두 $mN$ 을 고정 성분으로 갖는다[^1]. 직관 절의 계산이 이 동형의 $m$ 마다의 판본이다.

## 부피

선다발 $D$ 의 **부피(volume)** 는 $h^0(mD)$ 가 자라는 속도다.

$$
\mathrm{vol}(D)=\lim_{m\to\infty}\frac{h^0(X,mD)}{m^2/2}
$$

Zariski 분해가 있으면 $\mathrm{vol}(D)=P^2$ 이다. 직관 절에서 $h^0(mD)=(m+1)(m+2)/2$ 이므로 부피는 $1=H^2$ 이고, 계수만 넣은 $D^2=1-4=-3$ 과 다르다.

## 단면환의 유한 생성

정리(Zariski). 곡면 위의 유효 인자 $D$ 의 단면환 $\bigoplus_mH^0(X,mD)$ 는 $P$ 가 반풍부(semiample)이면 유한 생성이다[^1]. 단면환이 유한 생성이 아닌 곡면 위의 유효 인자가 있고, Zariski 가 그 예를 들었다.

# 활용

- 극소 모형의 곡면 판본. [극소 모형 프로그램](minimal-model-program.md)에서 곡면의 표준인자 $K$ 가 유효이면 Zariski 분해의 $P$ 가 극소 모형의 표준인자를 당긴 것이고, $N$ 은 수축되는 (−1) 곡선들의 결합이다.
- [K-안정성](k-stability.md)의 부피 적분. Fujita–Li 판정법의 $\int_0^\infty\mathrm{vol}(-K-tE)\thinspace dt$ 는 $-K-tE$ 가 nef 가 아닌 구간에서 Zariski 분해의 $P^2$ 로 계산한다.
- 다중종수의 점근. 일반형 곡면에서 $P_m=h^0(mK)$ 의 주항 $m^2P^2/2$ 가 극소 모형의 $K^2$ 로 정해진다. 이것은 [Kodaira 차원](kodaira-dimension.md)이 $2$ 인 곡면의 다중종수 계산이다.
- 고차원의 실패. 삼차원 이상에서는 같은 성질을 갖는 분해가 유리계수로 존재하지 않는 인자가 있다. 극소 모형 프로그램은 삼차원 이상에서 수축과 꽃잎 변환을 쓴다.

[^1]: O. Zariski, "The theorem of Riemann–Roch for high multiples of an effective divisor on an algebraic surface", *Annals of Mathematics* 76 (1962), 560–615.

# 연관 문서

## 선수지식

- [풍부한 선다발의 수치 판정법](ampleness-criteria.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis
