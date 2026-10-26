# McMullen 분해

# 개요

**McMullen 분해(McMullen decomposition)** 는 볼록체 위의 평행이동 불변 연속 평가의 공간이 동차차수 $0$ 부터 $n$ 까지의 부분공간의 직합이라는 정리다. 볼록체에 부피, 겉넓이, 평균 폭처럼 수를 하나 주되 두 볼록체의 합집합과 교집합에서 포함배제가 성립하는 방법을 모두 찾으려 하면, 회전에 따라 값이 바뀌는 것까지 포함해 그런 방법이 무한히 많다. 이 정리는 볼록체를 $t$ 배로 늘릴 때 값이 $t$ 의 몇 제곱으로 변하는지에 따라 그런 방법들을 차수별로 나눠 다룬다.

# 직관

평면 볼록체 $K$ 에 수평 방향의 폭 $w(K)$ 를 대응시킨다. $K$ 를 평행이동해도 폭은 그대로이고, Hausdorff 거리로 가까운 볼록체의 폭은 가깝다. $K\cup L$ 이 볼록이면 수평축으로의 정사영이 구간이고 구간의 길이가 가법적이므로

$$
w(K\cup L)+w(K\cap L)=w(K)+w(L)
$$

이 성립해 $w$ 는 평가다. 그런데 $K$ 를 $90^\circ$ 회전하면 폭이 세로 방향의 폭으로 바뀌므로 회전 불변이 아니다. Hadwiger 정리는 회전 불변인 평가만 거두므로 $w$ 를 내재부피의 선형결합으로 적을 수 없다.

방향을 고정하는 대신 두 방향을 섞어도 평가가 나온다. 방향 $u$ 의 폭을 $w_u$ 라 하면 $\sum_i c_iw\_{u_i}$ 도 평행이동 불변 연속 평가이고, 방향을 연속으로 섞어 측도로 적어도 그렇다. 이런 평가가 이미 무한히 많으므로 유한개의 양으로 적는 결론은 나오지 않는다.

남는 성질은 차수다. $w(tK)=t\thinspace w(K)$ 이고 면적은 $t^2$ 배, 상수함수는 $t^0$ 배가 된다. 평가를 $t$ 배 팽창에 대한 반응으로 가른다는 것이 McMullen 분해다.

# 정의

$\mathcal K^n$ 을 $\mathbb R^n$ 의 콤팩트 볼록집합 전체라 한다. $\varphi:\mathcal K^n\to\mathbb R$ 이 평가이고 Hausdorff 거리에 연속이며 모든 $v\in\mathbb R^n$ 에서 $\varphi(K+v)=\varphi(K)$ 이면 **평행이동 불변 연속 평가**라 하고, 그 전체를 $\mathrm{Val}(\mathbb R^n)$ 이라 쓴다. 상한노름으로 [Banach 공간](banach-spaces.md)이다.

$\varphi$ 가 **$j$ 차 동차**라는 것은 모든 $t\gt 0$ 과 $K\in\mathcal K^n$ 에서

$$
\varphi(tK)=t^j\varphi(K)
$$

인 것이다. $j$ 차 동차인 것들의 부분공간을 $\mathrm{Val}\_j(\mathbb R^n)$ 이라 쓴다.

# 성질

## McMullen 정리

**정리**(McMullen).

$$
\mathrm{Val}(\mathbb R^n) = \bigoplus\_{j=0}^{n}\mathrm{Val}\_j(\mathbb R^n)
$$

이다.[^1]

증명의 요지는 고정된 $K_1,\dots,K_m$ 에 대해 $(t_1,\dots,t_m)\mapsto\varphi(t_1K_1+\dots+t_mK_m)$ 이 차수 $n$ 이하의 다항식임을 보이는 것이다. 평가의 가법성으로 다면체에서 이 성질을 귀납으로 확인하고 연속성으로 일반 볼록체에 옮긴다. 그러면 $\varphi(tK)$ 가 $t$ 의 $n$ 차 이하 다항식이고, 그 계수를 뽑는 사상이 $\varphi$ 의 $j$ 차 성분을 준다. ∎

$\mathrm{Val}\_j$ 가 $j\gt n$ 에서 $0$ 인 것은 $n$ 차원에서 $n$ 차보다 높은 차수의 동차 평가가 없다는 것이고, 위 다항식의 차수 상한에서 따라온다.

## 양 끝의 차수

$\mathrm{Val}\_0(\mathbb R^n)$ 은 상수함수 전체이고 1차원이다. 평가의 정의에서 $\varphi$ 가 $0$ 차 동차이면 한 점에서의 값으로 정해진다.

$\mathrm{Val}\_n(\mathbb R^n)$ 은 부피의 상수배 전체이고 1차원이다. 이것이 [내재부피](intrinsic-volumes.md)에 대한 Hadwiger 정리의 증명에 쓰이는 보조정리이고, 회전 불변을 가정하지 않아도 성립한다.

중간 차수 $1\le j\le n-1$ 에서 $\mathrm{Val}\_j(\mathbb R^n)$ 은 무한차원이다. 방향 측도로 만든 폭의 혼합이 $j=1$ 의 예다.

## 짝수 부분과 홀수 부분

$\varphi$ 가 $\varphi(-K)=\varphi(K)$ 를 만족하면 짝수, $\varphi(-K)=-\varphi(K)$ 면 홀수라 한다. $\varphi\mapsto(\varphi+\check\varphi)/2$ 와 $(\varphi-\check\varphi)/2$ 가 사영이므로 각 $\mathrm{Val}\_j$ 가 짝수 부분과 홀수 부분의 직합이다. 여기서 $\check\varphi(K)=\varphi(-K)$ 다.

## Alesker 조밀성 정리

**정리**(Alesker). $\mathrm{GL}(n,\mathbb R)$ 의 자연한 작용 아래 $\mathrm{Val}\_j^{\pm}(\mathbb R^n)$ 은 기약이다. 따라서 $K\mapsto\mathrm{vol}(K+A_1,\dots)$ 꼴의 혼합부피에서 얻는 평가들의 $\mathrm{GL}(n,\mathbb R)$ 변환의 선형결합이 $\mathrm{Val}(\mathbb R^n)$ 에서 조밀하다.[^2]

Hadwiger 정리는 회전 불변 조건으로 각 $\mathrm{Val}\_j$ 에서 1차원만 남긴 결과이고, 이 정리는 조건을 빼면 무한차원 공간이 기약 표현으로 쪼개짐을 말한다. [혼합부피](mixed-volumes.md)가 그 표현의 생성원이 된다.

# 활용

- **적분기하의 공식 유도.** 운동학 공식의 양변이 연속 평가이므로 차수별로 비교해 상수를 결정한다. 회전 불변이 없는 경우에도 차수별 분해가 남아 비교가 가능하다.
- **Hermitian 적분기하.** $\mathbb C^n$ 에서 유니터리군 불변 평가의 공간은 유한차원이고 그 차원이 $\binom{n+2}{2}$ 꼴로 계산된다. 분해의 각 차수에서 유니터리 불변 성분을 세는 것이 그 계산이다.
- **값매김의 대수 구조.** 매끄러운 평가에 Alesker 곱을 주면 등급대수가 되고, 그 구조가 다양체 위의 특성류와 대응한다. 등급은 McMullen 분해의 차수다.
- **볼록체의 부등식.** Alexandrov–Fenchel 부등식을 평가로 적으면 특정 차수 성분 사이의 부등식이 된다. 차수를 고정하면 변수의 개수가 줄어 부등식의 등호 조건을 다루기 쉬워진다.

[^1]: Peter McMullen, "Valuations and Euler-type relations on certain classes of convex polytopes", *Proceedings of the London Mathematical Society* 35 (1977), 113–135.
[^2]: Semyon Alesker, "Description of translation invariant valuations on convex sets with solution of P. McMullen's conjecture", *Geometric and Functional Analysis* 11 (2001), 244–272.

# 연관 문서

## 선수지식

- [내재부피](intrinsic-volumes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #measure_theory #combinatorics
