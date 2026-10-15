# 내재부피

# 개요

내재부피는 볼록체마다 차원 수만큼 정의되는 기하량의 족이다. 부피, 겉면적의 절반, 평균 폭의 상수배, Euler 지표가 모두 내재부피의 하나다. 주변 공간의 차원에 의존하지 않는 정규화를 쓰므로 [혼합부피](mixed-volumes.md)의 quermassintegral 과 상수배만큼 다르다. Hadwiger 정리가 이 족이 볼록체 위의 가법적 함수 전체를 생성한다는 것을 말한다.

# 직관

평면 볼록체의 둘레를 재는 방법이 둘이다. 경계를 따라 길이를 재는 방법과, 모든 방향으로 투영한 그림자의 길이를 평균하는 방법이다.

한 변이 $a$ 인 정사각형을 방향 $\theta$ 의 직선에 투영하면 그림자 길이가 $a(\vert\cos\theta\vert+\vert\sin\theta\vert)$ 다. $\theta$ 를 $\lbrack 0,2\pi)$ 에서 균등하게 평균하면

$$
\frac{1}{2\pi}\int_0^{2\pi} a(\vert\cos\theta\vert+\vert\sin\theta\vert)\thinspace d\theta = \frac{4a}{\pi}
$$

이고, 여기에 $\pi$ 를 곱하면 둘레 $4a$ 다. 반지름 $1$ 인 원판은 어느 방향으로 투영해도 길이가 $2$ 이므로 평균이 $2$ 이고, $\pi$ 를 곱하면 둘레 $2\pi$ 다.

투영으로 재는 방법은 볼록체가 어느 공간에 놓였는지에 영향받지 않는다. 평면의 정사각형을 3차원 공간의 평면 위에 놓아도 직선에 투영한 그림자의 길이는 그대로이고, 평균을 낼 방향의 집합만 원에서 구면으로 바뀐다. 반면 경계를 따라 재는 방법은 그렇지 않다. 같은 정사각형의 3차원에서의 겉면적은 $2a^2$ 이고 둘레와 무관하다.

평면에 놓인 집합을 1차원 부분공간에 투영한 길이의 평균이 둘레를 주었으므로, $n$ 차원에서 $j$ 차원 부분공간에 투영한 $j$ 차원 부피의 평균을 재면 $j=0,1,\dots,n$ 마다 양이 하나씩 나온다. 이 $n+1$ 개의 양을 주변 차원이 사라지도록 정규화한 것이 내재부피다.

# 정의

$\mathcal K^n$ 을 $\mathbb R^n$ 의 콤팩트 볼록집합 전체라 한다. $K\in\mathcal K^n$ 의 **내재부피** $V_0(K),\dots,V_n(K)$ 는 Steiner 공식

$$
\mathrm{vol}(K+rB) = \sum\_{j=0}^n V_j(K)\thinspace \kappa\_{n-j}\thinspace r^{n-j}
$$

의 계수로 정의한다. $B$ 는 단위공이고 $\kappa_m=\pi^{m/2}/\Gamma(m/2+1)$ 은 $m$ 차원 단위공의 부피다.

- $V_n(K)=\mathrm{vol}(K)$ 다.
- $V\_{n-1}(K)$ 는 $K$ 가 $n$ 차원일 때 겉면적의 절반이다.
- $V_1(K)$ 는 평균 폭의 상수배다.
- $V_0(K)=1$ 이고 이것이 $K$ 의 [Euler 지표](euler-characteristic.md)다.

이 정규화는 $K$ 를 $\mathbb R^n\subset\mathbb R^{n+m}$ 으로 보아도 $V_j(K)$ 가 바뀌지 않도록 한 것이다. 같은 계수를 $\kappa$ 로 나누지 않고 쓴 것이 quermassintegral $W_j$ 이고, $W_j$ 는 주변 차원에 따라 값이 달라진다.

## 평가

함수 $\varphi:\mathcal K^n\to\mathbb R$ 이 $K\cup L\in\mathcal K^n$ 일 때마다

$$
\varphi(K\cup L)+\varphi(K\cap L)=\varphi(K)+\varphi(L)
$$

를 만족하면 **평가**라 한다. 내재부피는 모두 평가이고, Hausdorff 거리에 연속이며, 강체운동에 불변이다.

# 성질

## Hadwiger 정리

**정리**(Hadwiger). $\varphi:\mathcal K^n\to\mathbb R$ 이 연속인 평가이고 강체운동에 불변이면, 상수 $c_0,\dots,c_n$ 이 유일하게 존재해

$$
\varphi = \sum\_{j=0}^n c_j V_j
$$

이다.[^1]

증명의 요지는 $\varphi$ 를 단순 평가와 나머지로 나누는 귀납이다. 차원이 $n$ 보다 낮은 볼록체에서 $0$ 인 연속 불변 평가는 부피의 상수배뿐임을 보이고, 일반 $\varphi$ 에서 그 부분을 뺀 것이 $n-1$ 차원에 제한되어 귀납 가정을 쓴다.

유한한 개수의 양으로 연속 불변 평가 전체가 적히므로, 볼록체에 대한 적분기하 공식은 양변을 내재부피로 전개해 계수를 비교하는 것으로 증명된다.

## Kubota 공식

$G(n,j)$ 를 $\mathbb R^n$ 의 $j$ 차원 부분공간 전체의 Grassmann 다양체, $\nu$ 를 그 위의 회전불변 확률측도, $K\vert E$ 를 $K$ 의 $E$ 위 정사영이라 하면

$$
V_j(K) = \binom{n}{j}\frac{\kappa_n}{\kappa_j\thinspace\kappa\_{n-j}}\int\_{G(n,j)}\mathrm{vol}\_j(K\vert E)\thinspace d\nu(E)
$$

다.[^1] $j=1$ 과 $n=2$ 에서 둘레가 투영 길이의 평균에 $\pi$ 를 곱한 것이라는 Cauchy 공식이 되고, $j=n-1$ 에서 겉면적이 그림자 면적의 평균에 비례한다는 Cauchy 공식이 된다.

## 운동학 공식

$K,L\in\mathcal K^n$ 과 강체운동군의 Haar 측도 $\mu$ 에 대해 다음 등식이 성립하고 상수는 $n,j,k$ 로만 정해진다.[^1]

$$
\int V_j(K\cap gL)\thinspace d\mu(g) = \sum\_{k=j}^{n} c\_{n,j,k}\thinspace V_k(K)\thinspace V\_{n+j-k}(L)
$$

좌변을 $K$ 의 함수로 보면 연속 불변 평가이므로 Hadwiger 정리로 내재부피의 선형결합이 되고, $K$ 를 공으로 두어 상수를 결정한다.

$j=0$ 인 경우는 $L$ 을 무작위로 놓았을 때 $K$ 와 만날 확률을 두 집합의 내재부피로 적는 식이다. Buffon 의 바늘 문제가 $n=2$, $L$ 이 선분인 경우다.

# 활용

- **적분기하의 공식.** Crofton 공식(아핀 부분공간과의 교차의 측도가 내재부피를 준다)과 Cauchy 투영 공식이 Kubota 공식의 특수 경우다. 입체계측학에서 단면의 측정값으로 3차원 양을 추정할 때 이 공식들을 쓴다.
- **볼록체의 부등식.** Alexandrov–Fenchel 부등식을 quermassintegral 로 적으면 내재부피 사이의 부등식 $V_j(K)^2\ge V\_{j-1}(K)V\_{j+1}(K)$ 꼴이 되고, $j=n-1$ 경우가 등주부등식이다.
- **[McMullen 분해](mcmullen-decomposition.md).** 평행이동 불변만 요구하고 회전 불변을 빼면 평가의 공간이 무한차원이 되고, 그 차수별 분해가 McMullen 분해다. 회전 불변을 더하면 Hadwiger 정리로 차원이 $n+1$ 로 떨어진다.
- **격자점 셈.** 격자 다면체의 [Ehrhart 다항식](ehrhart-polynomial.md)의 최고차 두 계수가 $V_n$ 과 정규화된 $V\_{n-1}$ 이다. 상수항이 $V_0=1$ 인 것도 같은 대응이다.

[^1]: Rolf Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, 2nd ed., Cambridge University Press, 2014, ch. 4 and ch. 6.

# 연관 문서

## 선수지식

- [혼합부피](mixed-volumes.md)

## 더 알아보기

- [McMullen 분해](mcmullen-decomposition.md)

#analysis #measure_theory #combinatorics
