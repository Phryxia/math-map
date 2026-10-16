# Cauchy–Schwarz 부등식

# 개요

Cauchy–Schwarz 부등식(Cauchy–Schwarz inequality)은 [내적 공간](inner-product-spaces.md)의 두 벡터 $u,v$ 에 대해 내적의 절댓값이 노름의 곱을 넘지 않는다는 정리다.

$$
\lvert\langle u,v\rangle\rvert\le\lVert u\rVert\thinspace\lVert v\rVert
$$

등호는 $u$ 와 $v$ 가 선형종속일 때만 성립한다.

# 직관

평면에서 두 벡터의 점곱은 $\lVert u\rVert\lVert v\rVert\cos\theta$ 이므로 점곱을 노름의 곱으로 나누면 $-1$ 과 $1$ 사이의 값이 나온다. 내적 공간에는 각도가 따로 정의되어 있지 않으므로, 각도를 이 비로 정의하려면 비가 그 범위에 들어간다는 것을 내적의 공리만으로 확인해야 한다.

확인에 쓰는 것은 양의 정부호성 하나다. 실수 $t$ 마다 $\lVert u-tv\rVert^2\ge 0$ 이고, 좌변을 내적의 선형성으로 펼치면 $t$ 의 이차식 $\lVert v\rVert^2t^2-2\langle u,v\rangle t+\lVert u\rVert^2$ 이 된다. 이차식이 모든 실수에서 음이 아니므로 판별식이 $0$ 이하이고, 그것을 정리하면 $\langle u,v\rangle^2\le\lVert u\rVert^2\lVert v\rVert^2$ 이다. $t$ 는 $v$ 방향으로 $u$ 를 얼마나 덜어낼지를 정하는 값이고, 가장 많이 덜어낸 자리에서 남는 길이가 부등식의 여유다.

# 정의

내적 공간 $V$ 의 임의의 $u,v$ 에 대해 다음이 성립한다.

$$
\lvert\langle u,v\rangle\rvert\le\lVert u\rVert\thinspace\lVert v\rVert
$$

$v\ne 0$ 일 때 등호가 성립하는 것은 $u=\lambda v$ 인 스칼라 $\lambda$ 가 존재하는 것과 동치다.

# 성질

## 사영에 의한 증명

$v\ne 0$ 이라 하고 $\lambda=\langle u,v\rangle/\lVert v\rVert^2$ 로 두면 $w=u-\lambda v$ 는 $v$ 와 직교한다. 노름의 정의와 직교성에서 다음을 얻는다.

$$
\lVert u\rVert^2=\lVert w\rVert^2+\lvert\lambda\rvert^2\lVert v\rVert^2
=\lVert w\rVert^2+\frac{\lvert\langle u,v\rangle\rvert^2}{\lVert v\rVert^2}
$$

$\lVert w\rVert^2\ge 0$ 이므로 부등식이 나오고, 등호는 $w=0$, 곧 $u=\lambda v$ 일 때만 성립한다. 이 등식은 복소 내적에서도 그대로 쓰이므로 켤레대칭성을 따로 다루지 않아도 된다.

## 삼각부등식

노름이 거리의 공리를 만족하는 것이 이 부등식에서 유도된다. 두 벡터의 합의 노름을 펼치면 교차항에 실수부가 나오고, 그 실수부가 절댓값을 넘지 않으므로 부등식을 적용할 수 있다.

$$
\lVert u+v\rVert^2=\lVert u\rVert^2+2\thinspace\mathrm{Re}\langle u,v\rangle+\lVert v\rVert^2
\le(\lVert u\rVert+\lVert v\rVert)^2
$$

## 특수 사례

| 내적 | 부등식 |
| --- | --- |
| 실수 $n$ 짝의 점곱 | $\left(\sum\_i a_ib_i\right)^2\le\sum\_i a_i^2\sum\_i b_i^2$ |
| 적분 내적 | $\left(\int\_a^b fg\right)^2\le\int\_a^b f^2\int\_a^b g^2$ |
| 대각합 내적 | $\lvert\mathrm{tr}(A^\ast B)\rvert^2\le\mathrm{tr}(A^\ast A)\thinspace\mathrm{tr}(B^\ast B)$ |

지수 $p=q=2$ 인 Hölder 부등식(Hölder's inequality)이 첫 두 줄과 같은 식을 준다. Hölder 부등식은 측도공간의 적분으로 진술되고 켤레지수 조건 $1/p+1/q=1$ 을 쓰므로, 내적이 없는 공간에서도 성립하는 더 넓은 정리다.

## 반정부호 내적에서의 성립

양의 정부호성 대신 $\langle v,v\rangle\ge 0$ 만 가정해도 부등식은 성립한다. 위 사영 증명이 $\lVert v\rVert=0$ 인 경우를 따로 다루면 되기 때문이다. 이때 등호 조건은 선형종속성과 동치가 아니다.

# 활용

- [내적 공간](inner-product-spaces.md)에서 두 벡터가 이루는 각을 $\cos\theta=\langle u,v\rangle/(\lVert u\rVert\lVert v\rVert)$ 로 정의하는 근거다. 우변이 $-1$ 과 $1$ 사이에 있다는 것이 이 부등식이다.
- [Hilbert 공간](hilbert-spaces.md)에서 내적이 두 변수에 대해 연속임을 보이는 데 쓴다. 한 변수를 고정한 내적이 유계 선형범함수라는 사실이 Riesz 표현정리(Riesz representation theorem)의 출발점이다.
- 확률변수의 공분산을 내적으로 보면 상관계수가 $-1$ 과 $1$ 사이에 있다는 것이 이 부등식이다. 분산이 유한한 두 [확률변수](random-variables.md)의 곱의 기댓값이 유한하다는 것도 같은 식에서 나온다.
- [행렬 분해](matrix-factorizations.md)가 주는 조건수를 비롯해, 수치해석의 오차 상한에서 잔차와 오차를 잇는 데 쓴다.

# 연관 문서

## 선수지식

- [내적 공간](inner-product-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #functional_analysis #probability
