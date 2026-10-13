# Sidorenko 추측

# 개요

Sidorenko 추측은 이분그래프 $H$ 와 그래폰 $W$ 에 대해

$$
t(H,W)\ge\left(\int\_{\lbrack 0,1\rbrack^2}W\right)^{\vert E(H)\vert}
$$

가 성립한다는 진술이다. 간선 밀도를 고정했을 때 무작위 그래프가 $H$ 의 사본을 가장 적게 담는다는 뜻이고, $H$ 가 홀수 사이클을 담으면 거짓이 된다. 나무, 짝수 사이클, 완전이분그래프를 비롯한 여러 $H$ 에서 증명되었다.

# 직관

간선 밀도가 $p$ 인 그래프에 고정 그래프 $H$ 의 사본이 몇 개 있는지 세려고 한다. 간선이 확률 $p$ 로 독립으로 놓인 그래프라면 $H$ 의 간선 $\vert E(H)\vert$ 개가 모두 놓일 확률이 $p^{\vert E(H)\vert}$ 이므로 준동형 밀도가 그 값이다. 밀도 $p$ 인 다른 그래프에서 이 값보다 적게 담을 수 있는지 묻는다.

$H$ 가 삼각형이면 적게 담을 수 있다. 양쪽이 각각 절반인 완전이분그래프는 $p=1/2$ 인데 삼각형 밀도가 $0$ 이고 $p^3=1/8$ 보다 작다. 홀수 사이클은 어느 것이나 이분그래프에서 밀도가 $0$ 이므로 같은 반례가 된다.

$H$ 가 간선 두 개를 이어 붙인 경로이면 적게 담을 수 없다. $W$ 의 점 $x$ 마다 $d(x)=\int W(x,y)\thinspace dy$ 로 두면 경로의 밀도가 $\int d(x)^2dx$ 이고 간선 밀도가 $\int d(x)dx=p$ 다. Cauchy–Schwarz 부등식이 $\int d^2\ge\left(\int d\right)^2=p^2$ 를 주므로 경로의 밀도는 $p^2$ 이상이다.

같은 계산이 어느 이분그래프 $H$ 에서나 되는지가 추측의 내용이다. 홀수 사이클이 없다는 조건은 반례를 막는 데 필요하고, 그것으로 충분한지는 $H$ 마다 따로 묻는다.

# 정의

## Sidorenko 성질

유한 단순그래프 $H$ 가 **Sidorenko 성질**을 갖는다는 것은 모든 [그래폰](graphons.md) $W$ 에 대해

$$
t(H,W)\ge t(K\_2,W)^{\vert E(H)\vert}
$$

인 것이다. 여기서 $t(H,W)$ 는 $H$ 의 준동형 밀도이고 $t(K\_2,W)=\int\_{\lbrack 0,1\rbrack^2}W(x,y)\thinspace dx\thinspace dy$ 는 간선 밀도다.

## Sidorenko 추측

**추측.** 모든 이분그래프는 Sidorenko 성질을 갖는다.

## 차수함수

그래폰 $W$ 의 **차수함수**는

$$
d\_W(x)=\int\_0^1W(x,y)\thinspace dy
$$

다. $\int\_0^1d\_W=t(K\_2,W)$ 다.

# 성질

## 이분성

**정리.** 홀수 사이클을 담는 $H$ 는 Sidorenko 성질을 갖지 않는다.

증명의 요지. $W$ 를 $\lbrack 0,1/2\rbrack\times\lbrack 1/2,1\rbrack$ 과 그 대칭 위치에서 $1$, 나머지에서 $0$ 인 그래폰으로 잡는다. 이 $W$ 는 이분그래프의 극한이므로 홀수 사이클의 밀도가 $0$ 이고, $H$ 가 홀수 사이클을 담으면 $t(H,W)=0$ 이다. 간선 밀도는 $1/2$ 이므로 우변이 양수이고 부등식이 깨진다.

## 나무

**정리.** 모든 나무는 Sidorenko 성질을 갖는다.

증명의 요지. 별 $K\_{1,m}$ 에서는 $t(K\_{1,m},W)=\int\_0^1d\_W(x)^m\thinspace dx$ 이고 $x\mapsto x^m$ 이 볼록이므로 Jensen 부등식이 이 값을 $\left(\int\_0^1d\_W\right)^m=t(K\_2,W)^m$ 이상으로 누른다. 일반 나무는 뿌리를 정해 잎 쪽 간선부터 차례로 적분하고 단계마다 같은 볼록성을 쓴다. 단계마다 간선 하나가 인자 $t(K\_2,W)$ 하나를 내놓는다.

## 짝수 사이클

**정리.** 모든 $k\ge 1$ 에 대해 $C\_{2k}$ 는 Sidorenko 성질을 갖는다.

증명의 요지. $W$ 를 $L^2\lbrack 0,1\rbrack$ 위의 적분 연산자 $T\_Wf(x)=\int W(x,y)f(y)\thinspace dy$ 로 본다. 이 연산자가 자기수반 Hilbert–Schmidt 이므로 고윳값 $\lambda\_1,\lambda\_2,\dots$ 과 정규직교 고유함수 $f\_1,f\_2,\dots$ 를 갖고

$$
t(C\_{2k},W)=\sum\_i\lambda\_i^{2k}
$$

다. $c\_i=\langle f\_i,1\rangle^2$ 으로 두면 $\sum\_ic\_i\le 1$ 이고 $\sum\_ic\_i\lambda\_i=t(K\_2,W)$ 다. $x\mapsto x^{2k}$ 가 볼록이므로 Jensen 부등식이

$$
\sum\_i\lambda\_i^{2k}\ge\sum\_ic\_i\lambda\_i^{2k}\ge\left(\sum\_ic\_i\lambda\_i\right)^{2k}=t(K\_2,W)^{2k}
$$

를 준다. 홀수 사이클에서 이 논법이 막히는 것은 $x\mapsto x^{2k+1}$ 이 볼록하지 않아 음의 고윳값이 합을 깎는 것이다.

## 완전이분그래프

**정리.** 모든 $m,n\ge 1$ 에 대해 $K\_{m,n}$ 은 Sidorenko 성질을 갖는다.

증명의 요지. 한쪽 정점 $n$ 개에 대한 적분이

$$
t(K\_{m,n},W)=\int\_{\lbrack 0,1\rbrack^m}\left(\int\_0^1\prod\_{j=1}^mW(x\_j,y)\thinspace dy\right)^n\prod\_jdx\_j
$$

다. 안쪽 적분을 $g(x\_1,\dots,x\_m)$ 이라 하면 $x\mapsto x^n$ 의 볼록성이 $\int g^n\ge\left(\int g\right)^n$ 을 주고, $\int g=t(K\_{m,1},W)$ 다. $K\_{m,1}$ 은 별이므로 위 정리가 $t(K\_{m,1},W)\ge t(K\_2,W)^m$ 을 준다.

## 지배 정점을 갖는 이분그래프

**정리.** 이분그래프 $H$ 의 한쪽 부분에 다른 쪽 전체와 인접한 정점이 있으면 $H$ 는 Sidorenko 성질을 갖는다[^1].

증명의 요지. 그 정점을 적분의 바깥에 두면 나머지 정점들이 그 정점의 이웃 분포에 대해 조건부로 놓이고, 조건부 측도에 대해 $H$ 에서 그 정점을 뺀 그래프의 밀도를 재는 꼴이 된다. 조건부 밀도에 Jensen 부등식과 귀납법을 적용한다.

## 등식의 경우

**정리.** $m\ge 2$ 인 별 $K\_{1,m}$ 에서 $t(K\_{1,m},W)=t(K\_2,W)^m$ 인 것은 $d\_W$ 가 거의 모든 곳에서 상수인 것과 같다. $C\_{2k}$ 에서 $t(C\_{2k},W)=t(K\_2,W)^{2k}$ 인 것은 $W$ 가 거의 모든 곳에서 상수인 것과 같다.

증명의 요지. 별에서는 $x\mapsto x^m$ 에 대한 Jensen 부등식의 등식 조건이 $d\_W$ 의 상수성이다. 짝수 사이클에서는 $\sum\_i\lambda\_i^{2k}\ge\sum\_ic\_i\lambda\_i^{2k}$ 의 등식이 $c\_i\lt 1$ 인 모든 $i$ 에서 $\lambda\_i=0$ 을 요구하고, 둘째 부등식의 등식이 남은 고윳값을 하나로 묶는다. 그러면 $T\_W$ 가 상수함수 방향의 계수 하나뿐인 핵이 되어 $W$ 가 상수다.

# 활용

- **극단 그래프 이론.** 금지 부분그래프 문제의 하한에서 무작위 그래프가 최적임을 확인하는 데 쓴다. $H$ 가 Sidorenko 성질을 가지면 간선 밀도 $p$ 아래에서 $H$ 의 사본 수를 $p^{\vert E(H)\vert}$ 보다 줄일 수 없고, 사본 수를 줄이는 구성을 찾는 시도가 막힌다.
- **준무작위성.** 짝수 사이클의 등식 조건이 밀도 하나로 상수 그래폰을 가려낸다. $C\_4$ 의 밀도가 $t(K\_2,W)^4$ 에 가까운 것으로 [그래폰](graphons.md)이 상수에 가까운지 판정하는 것이 이 부등식의 정량적 꼴이다.
- **공통 그래프.** $H$ 가 Sidorenko 성질을 가지면 모든 $W$ 에 대해 $t(H,W)+t(H,1-W)\ge 2^{1-\vert E(H)\vert}$ 가 성립한다. 두 색으로 칠한 그래프에서 단색 $H$ 의 사본 수를 무작위 색칠보다 줄일 수 없다는 뜻이고, [Ramsey 이론](ramsey-theory.md)의 사본 수 하한 가운데 밀도로 적히는 부분이 여기 해당한다.
- **정규성 보조정리.** [Szemerédi 정규성 보조정리](szemeredi-regularity-lemma.md)의 셈 보조정리는 정규 쌍에서 밀도의 곱으로 사본 수를 세는데, Sidorenko 성질은 정규성 없이 전체 밀도만으로 같은 방향의 하한을 준다.

[^1]: D. Conlon, J. Fox, B. Sudakov, "An approximate version of Sidorenko's conjecture", Geom. Funct. Anal. 20 (2010), 1354–1366.

# 연관 문서

## 선수지식

- [그래폰](graphons.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #analysis
