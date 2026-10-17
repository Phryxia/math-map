# 정보 병목

# 개요

**정보 병목(information bottleneck)** 은 입력 $X$ 를 압축한 $T$ 가운데 목표 $Y$ 에 대한 정보를 가장 많이 남기는 것을 찾는 문제다.

$$
\min_{p(t\mid x)}\thinspace I(X;T)-\beta\thinspace I(T;Y)
$$

$I$ 는 상호정보량이고 $\beta\gt 0$ 이 압축과 예측의 교환비다. [율왜곡 이론](rate-distortion-theory.md)과 형태가 같지만 왜곡 측도가 미리 주어지지 않고 목표 변수 $Y$ 에 대한 예측 손실로 정해진다.

# 직관

손글씨 이미지로 숫자를 맞힌다. 이미지는 픽셀 $784$ 개이고 표본은 수천 장이라 픽셀을 그대로 쓰면 변수가 표본보다 많다. 픽셀 수를 줄여야 한다.

[주성분 분석](principal-component-analysis.md)은 분산이 큰 방향을 남긴다. 그런데 종이의 밝기가 장마다 다르면 그 방향의 분산이 가장 크고, 밝기는 숫자가 무엇인지와 무관하다. 분산은 라벨을 보지 않으므로 숫자를 맞히는 데 도움이 되지 않는 방향을 남길 수 있다.

라벨을 보고 고르려면 줄인 변수 $T$ 가 라벨 $Y$ 에 대해 갖는 정보 $I(T;Y)$ 를 크게 하면 된다. 그런데 $T=X$ 로 두면 $I(T;Y)=I(X;Y)$ 로 최대가 되고 픽셀이 하나도 줄지 않는다. 이 기준만으로는 아무것도 버리지 않는 답이 이긴다.

$T$ 를 크게 만드는 데 값을 매겨야 한다. $T$ 가 $X$ 에 대해 갖는 정보 $I(X;T)$ 가 $T$ 를 적어 두는 데 드는 비트 수이므로 그것을 비용으로 빼면, 비트당 라벨 정보를 가장 많이 사는 $T$ 가 답이 된다. $\beta$ 를 키우면 라벨 정보를 더 사고 비트를 더 쓴다.

# 정의

## 병목 변수

$X$ 와 $Y$ 의 결합분포 $p(x,y)$ 가 주어진다. 병목 변수 $T$ 는 조건부 분포 $p(t\mid x)$ 로 만들고, $Y\to X\to T$ 가 마르코프 사슬을 이룬다. $T$ 는 $X$ 만 보고 만들므로 $Y$ 를 직접 보지 못한다.

## 정보 병목 곡선

압축량을 $R=I(X;T)$, 남은 예측 정보를 $I\_Y=I(T;Y)$ 라 하면 곡선은 다음과 같다.

$$
I\_Y^{\max}(R)=\max_{p(t\mid x)\thinspace:\thinspace I(X;T)\le R}I(T;Y)
$$

이 곡선 위의 점을 라그랑주 형태 $I(X;T)-\beta I(T;Y)$ 의 최소로 얻고, 곡선의 기울기가 $1/\beta$ 다. $\beta\le 1$ 에서는 $T$ 가 상수인 해가 최소를 준다.

# 성질

## 자기모순 방정식

라그랑주 함수의 정류점은 다음 세 식을 함께 만족한다.[^1]

$$
p(t\mid x)=\frac{p(t)}{Z(x,\beta)}\exp\lbrack-\beta\thinspace\mathrm{KL}(p(y\mid x)\Vert p(y\mid t))\rbrack
$$

$$
p(t)=\sum_x p(x)\thinspace p(t\mid x),\qquad p(y\mid t)=\frac{1}{p(t)}\sum_x p(x,y)\thinspace p(t\mid x)
$$

$Z(x,\beta)$ 는 정규화 상수다. 세 식을 번갈아 대입하는 반복이 [율왜곡 이론](rate-distortion-theory.md)의 Blahut–Arimoto 반복과 같은 꼴이고, 왜곡이 $d(x,t)=\mathrm{KL}(p(y\mid x)\Vert p(y\mid t))$ 로 읽힌다. 율왜곡 쪽과 달리 이 왜곡은 $p(y\mid t)$ 를 통해 해에 의존하므로 반복마다 바뀐다.

```javascript
function informationBottleneck(pxy, beta, cards, iters) {
  let pt_x = randomConditional(cards.x, cards.t)
  for (let s = 0; s < iters; s++) {
    const pt = marginalT(pxy, pt_x)
    const py_t = posteriorY(pxy, pt_x, pt)
    pt_x = pt_x.map((row, i) =>
      row.map((v, j) => pt[j] * Math.exp(-beta * klRow(pxy, i, py_t, j)))
    ).map((row) => normalize(row))
  }
  return pt_x
}
```

## 상한

데이터 처리 부등식으로 $I(T;Y)\le I(X;Y)$ 이고 $I(T;Y)\le I(X;T)$ 다. 앞의 것은 $T$ 가 $X$ 를 거쳐 만들어진다는 데서, 뒤의 것은 $T$ 가 담은 비트가 라벨 정보의 상한이라는 데서 나온다. 그래서 곡선은 직선 $I\_Y=R$ 아래와 수평선 $I\_Y=I(X;Y)$ 아래에 있다.

## 충분통계와의 관계

$I(T;Y)=I(X;Y)$ 를 만족하는 $T$ 가 $Y$ 에 대한 충분통계다. 그런 $T$ 가운데 $I(X;T)$ 가 가장 작은 것이 최소 충분통계이고, 곡선이 수평선에 닿는 가장 왼쪽 점이 그 값이다. $\beta\to\infty$ 의 해가 이 점으로 간다.

## 이산 해의 구조

$X$ 와 $T$ 가 유한이면 자기모순 방정식의 해는 $\beta$ 가 커질 때 분기한다. 작은 $\beta$ 에서 $T$ 의 값 하나에 모든 $x$ 가 모이고, $\beta$ 가 임계값을 넘을 때마다 묶음이 갈라진다. 갈라지는 지점은 $p(y\mid x)$ 가 서로 가까운 $x$ 끼리 마지막까지 한 묶음에 남는 순서로 정해진다.

# 활용

- 특징 선택에서 후보 변수 묶음의 평가 기준으로 쓴다. 상관계수와 달리 비선형 의존을 잡고, 묶음 전체의 정보를 한 번에 재므로 중복된 변수를 같이 넣는 것을 벌한다.
- 군집화에서 $T$ 를 묶음 번호로 두면 분포가 비슷한 원소끼리 모인다. 문서를 단어 분포로 나타내고 $Y$ 를 단어로 두는 분포 군집화가 이 형태다.
- 심층망의 층 출력을 $T$ 로 보고 평면 $(I(X;T),I(T;Y))$ 에 층마다 점을 찍는 분석에 쓴다. 고차원 연속 변수의 [상호정보량 추정](mutual-information-estimation.md)이 어려워 추정량의 선택이 결과를 바꾼다.
- 변분 정보 병목(variational information bottleneck)은 $I(X;T)$ 를 KL(Kullback–Leibler) 항으로 위에서 잡고 $I(T;Y)$ 를 복호기의 로그가능도로 아래에서 잡아 경사하강법으로 푼다. 그 하한의 꼴이 [변분 오토인코더](variational-autoencoder.md)의 ELBO(evidence lower bound)와 같고 재구성 항의 목표가 $X$ 대신 $Y$ 다.

[^1]: N. Tishby, F. C. Pereira, W. Bialek, "The information bottleneck method", *Proc. 37th Allerton Conf. on Communication, Control and Computing*, 1999, 368–377 쪽.

# 연관 문서

## 선수지식

- [율왜곡 이론](rate-distortion-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #machine_learning #probability
