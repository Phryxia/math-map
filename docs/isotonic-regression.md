# 등위 회귀

# 개요

**등위 회귀(isotonic regression)** 는 자료에 가장 가까운 증가하는 수열을 찾는 회귀다. 약의 용량을 다섯 단계로 늘리며 반응을 쟀더니 $1,4,2,3,0$ 이 나왔다면, 반응이 용량과 함께 늘어난다는 가정과 자료가 어긋난다. 등위 회귀는 순서를 어기는 이웃한 값들을 묶어 평균으로 바꾸기를 되풀이하고, 이 자료에서는 $1,2.25,2.25,2.25,2.25$ 를 내놓는다.

# 직관

$y=(1,4,2,3,0)$ 에 대해 $z_1\le z_2\le z_3\le z_4\le z_5$ 인 $z$ 가운데 $\sum(y_i-z_i)^2$ 이 가장 작은 것을 찾는다. 왼쪽부터 읽으며 값 하나를 한 묶음으로 둔다. $1$ 다음 $4$ 는 순서가 맞다. $4$ 다음 $2$ 는 순서를 어기므로 두 값을 묶어 평균 $3$ 으로 바꾼다. 두 값을 같은 수 $c$ 로 바꿀 때 $(4-c)^2+(2-c)^2$ 은 $c$ 가 평균일 때 가장 작다.

다음 값 $3$ 은 앞 묶음의 값 $3$ 보다 작지 않으므로 새 묶음이다. 마지막 $0$ 은 $3$ 보다 작아 $3$ 과 묶여 $1.5$ 가 되고, 이 값이 앞 묶음의 $3$ 보다 작으므로 다시 묶는다. 네 값 $4,2,3,0$ 의 평균은 $2.25$ 이고 맨 앞의 $1$ 보다 크므로 묶기가 끝난다. 결과는 $(1,2.25,2.25,2.25,2.25)$ 다.

이 결과가 실제로 가장 작은 제곱합을 주는지는 차 $y_i-z_i=(0,1.75,-0.25,0.75,-2.25)$ 의 앞부분 합으로 확인한다. 그 합은 $0,1.75,1.5,2.25,0$ 으로 음수가 없고, 값이 올라가는 자리 $z_1\lt z_2$ 에서 $0$ 이다. 이 묶기 절차를 이웃 위반 묶기 알고리즘(pool adjacent violators algorithm)이라 부른다.

# 정의

## 등위 회귀

자료 $y\in\mathbb R^n$ 과 양의 가중치 $w_1,\dots,w_n$ 에 대해

$$
\min_{z\in\mathbb R^n}\quad\sum_{i=1}^n w_i(y_i-z_i)^2\qquad\text{subject to}\qquad z_1\le z_2\le\cdots\le z_n
$$

의 해를 $y$ 의 등위 회귀라 한다. 제약 $z_i\le z_{i+1}$ 은 일차 부등식이고 목적함수는 볼록 이차식이므로 이것은 [이차 계획법](quadratic-programming.md)의 문제다. 가능한 $z$ 의 집합 $K$ 는 닫힌 볼록뿔이므로, 해는 가중 내적 $\langle a,b\rangle\_w=\sum w_ia_ib_i$ 에서 $y$ 를 $K$ 로 사영한 점이고 하나뿐이다. 제약이 없으면 해는 $y$ 자신이고, [선형회귀](linear-regression.md)가 부분공간으로의 사영인 데 비해 이 문제는 뿔로의 사영이다.

## 묶음 평균

연속한 첨자 $s\le t$ 에 대해 $\mathrm{Av}(s,t)=\sum\_{i=s}^tw_iy_i/\sum\_{i=s}^tw_i$ 를 그 구간의 가중 평균이라 한다. 직관 절에서 $\mathrm{Av}(2,5)=9/4$ 다.

## 이웃 위반 묶기 알고리즘

**이웃 위반 묶기 알고리즘(pool adjacent violators algorithm)** 은 직관 절의 절차다. 묶음마다 가중치의 합과 가중 평균을 들고 있다가, 새 묶음의 평균이 바로 앞 묶음의 평균보다 작으면 둘을 합치고, 합친 묶음을 그 앞과 다시 비교한다.

```javascript
function isotonic(y, w) {
  const blocks = []; // 각 묶음: { value, weight, count }
  for (let i = 0; i < y.length; i++) {
    blocks.push({ value: y[i], weight: w[i], count: 1 });
    while (blocks.length > 1 &&
           blocks[blocks.length - 2].value > blocks[blocks.length - 1].value) {
      const b = blocks.pop(), a = blocks.pop();
      const weight = a.weight + b.weight;
      blocks.push({
        value: (a.value * a.weight + b.value * b.weight) / weight,
        weight,
        count: a.count + b.count,
      });
    }
  }
  return blocks.flatMap((b) => Array(b.count).fill(b.value));
}
```

# 성질

## 최적성 조건

정리. 증가하는 $z$ 가 등위 회귀의 해인 것은 다음 두 조건과 동치다. 앞부분 합 $S_k=\sum\_{i\le k}w_i(y_i-z_i)$ 가 모든 $k$ 에서 $0$ 이상이고 $S_n=0$ 이며, $z_k\lt z\_{k+1}$ 인 모든 $k$ 에서 $S_k=0$ 이다.[^1]

증명의 요지. 제약 $z_k-z\_{k+1}\le 0$ 에 승수 $\lambda_k\ge 0$ 을 두고 KKT 조건(Karush–Kuhn–Tucker conditions)을 쓴다. $z_i$ 에 대한 정상 조건은 $-2w_i(y_i-z_i)+\lambda_i-\lambda\_{i-1}=0$ ($\lambda_0=\lambda_n=0$) 이므로 $\lambda_k=2S_k$ 다. 승수가 $0$ 이상인 것이 $S_k\ge 0$ 이고, 상보 여유 조건 $\lambda_k(z_k-z\_{k+1})=0$ 이 둘째 조건이다. 문제가 볼록이고 제약이 일차식이므로 KKT 조건은 최적성과 동치다.

두 조건에서 해는 구간마다 상수이고, 상수인 구간 $\lbrack s,t\rbrack$ 의 양 끝에서 $S\_{s-1}=S_t=0$ 이므로 그 값은 $\mathrm{Av}(s,t)$ 다.

## 알고리즘의 정확성과 비용

정리. 이웃 위반 묶기 알고리즘은 등위 회귀의 해를 내놓고, 비교와 합치기의 횟수는 $O(n)$ 이다.[^2]

증명의 요지. 끝난 뒤 묶음의 평균은 증가하고 각 묶음의 값은 그 구간의 평균이다. 한 묶음 안의 앞부분 합이 $0$ 이상인 것은 귀납으로 보인다. 합쳐지는 두 묶음은 앞 묶음의 평균이 더 커서 합쳐졌으므로, 합친 묶음의 앞부분은 평균보다 큰 값으로 시작한다. 합치기는 한 번마다 묶음 수를 하나 줄이므로 전체에서 $n-1$ 번을 넘지 않는다.

## 최소–최대 공식

정리. 해의 각 성분은 다음과 같다.

$$
z_i=\max_{s\le i}\thinspace\min_{t\ge i}\thinspace\mathrm{Av}(s,t)=\min_{t\ge i}\thinspace\max_{s\le i}\thinspace\mathrm{Av}(s,t)
$$

직관 절에서 $i=5$ 이면 $\mathrm{Av}(s,5)$ 는 $s=5,4,3,2,1$ 에서 $0,1.5,5/3,2.25,2$ 이고 최대가 $2.25$ 다. $i=1$ 이면 $\mathrm{Av}(1,t)$ 는 $t=1,\dots,5$ 에서 $1,2.5,7/3,2.5,2$ 이고 최소가 $1$ 이다.

## 가장 큰 볼록 하계

점 $P_k=(\sum\_{i\le k}w_i,\thinspace\sum\_{i\le k}w_iy_i)$ 를 $k=0,\dots,n$ 에서 찍은 꺾은선을 누적합 도표(cumulative sum diagram)라 한다. 이 꺾은선 아래에 놓이는 볼록 함수 가운데 가장 큰 것을 가장 큰 볼록 하계(greatest convex minorant)라 하면, $z_i$ 는 구간 $(\sum\_{j\lt i}w_j,\thinspace\sum\_{j\le i}w_j)$ 에서 이 하계의 기울기다.[^1]

직관 절의 점은 $(0,0),(1,1),(2,5),(3,7),(4,10),(5,10)$ 이다. 하계는 $(0,0)$ 에서 $(1,1)$ 까지 기울기 $1$, $(1,1)$ 에서 $(5,10)$ 까지 기울기 $9/4$ 인 두 선분이고, 가운데 세 점은 그 선분보다 위에 있다.

# 활용

- 분류기 점수의 보정. 분류기가 내놓은 점수 순서대로 정답 여부 $0$, $1$ 을 늘어놓고 등위 회귀를 하면, 점수가 클수록 확률이 작아지지 않는 확률 추정값이 나온다.[^3]
- [Grenander 추정량](grenander-estimator.md). 증가하지 않는 확률밀도의 [최대가능도 추정](maximum-likelihood.md)은 경험분포함수의 가장 작은 오목 상계의 기울기다. 누적합 도표의 볼록 하계를 오목 상계로 바꾼 것이다.[^4] [Glivenko–Cantelli 정리](glivenko-cantelli.md)로 경험분포함수가 고르게 수렴하므로 이 추정량은 일치추정량이다.
- 사영 알고리즘. 가능한 집합이 반공간 $\lbrace z_i\le z\_{i+1}\rbrace$ 들의 교집합이므로 [Dykstra 알고리즘](dykstra-algorithm.md)으로도 풀린다. 이웃 위반 묶기 알고리즘은 이 구조를 써서 한 번 훑기로 끝낸다.
- 순서 제약 추론. 부분순서를 따르는 모수들의 최소제곱 추정이 같은 꼴이고, 제약 아래 가능도비 검정의 귀무분포가 카이제곱 분포들의 혼합으로 나온다.[^1]

[^1]: R. E. Barlow, D. J. Bartholomew, J. M. Bremner, H. D. Brunk, *Statistical Inference under Order Restrictions*, Wiley, 1972, 1–3 장.
[^2]: M. Ayer, H. D. Brunk, G. M. Ewing, W. T. Reid, E. Silverman, "An empirical distribution function for sampling with incomplete information", *Annals of Mathematical Statistics* **26** (1955), 641–647.
[^3]: B. Zadrozny, C. Elkan, "Transforming classifier scores into accurate multiclass probability estimates", *Proceedings of the 8th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 2002, 694–699.
[^4]: Ulf Grenander, "On the theory of mortality measurement. Part II", *Skandinavisk Aktuarietidskrift* **39** (1956), 125–153.

# 연관 문서

## 선수지식

- [선형회귀](linear-regression.md)
- [이차 계획법](quadratic-programming.md)

## 더 알아보기

- [Grenander 추정량](grenander-estimator.md)

#statistics #optimization #algorithms
