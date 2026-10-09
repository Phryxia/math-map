# 압축 센싱

# 개요

압축 센싱은 측정 개수가 미지수 개수보다 적은 선형계에서 희소한 해를 복원하는 방법이다. 해가 무한히 많은 계에서 $0$ 이 아닌 성분의 개수를 최소화하는 문제는 계산이 어렵고, 그 자리에 $\ell\_1$ 노름 최소화를 놓으면 볼록 문제가 된다. 측정 행렬이 제한 등거리 성질을 만족하면 두 문제의 해가 일치하므로, 볼록 문제를 풀어 희소해를 얻는다.

# 직관

미지수가 둘이고 측정이 하나인 계 $x\_1+2x\_2=2$ 를 본다. 해는 직선 전체이므로 하나를 고르는 기준이 필요하다. 길이가 가장 짧은 해를 고르면 원점에서 직선에 내린 수선의 발 $(2/5,4/5)$ 이고 두 성분이 모두 $0$ 이 아니다.

복원하려는 $x$ 가 성분 하나만 $0$ 이 아닌 벡터라는 것을 알고 있다면 이 답은 틀렸다. 직선 위에서 성분 하나가 $0$ 인 점은 $(2,0)$ 과 $(0,1)$ 둘인데 길이를 재는 기준은 둘 중 어느 것도 고르지 않는다. 길이가 같은 점을 모은 원이 매끄러워서 직선과 처음 닿는 자리가 좌표축을 비껴가기 때문이다.

처음 닿는 자리를 좌표축으로 끌어오려면 닿는 집합의 모서리를 좌표축에 놓아야 한다. $\vert x\_1\vert+\vert x\_2\vert$ 가 일정한 점을 모으면 꼭짓점이 좌표축에 있는 정사각형이고, 이것을 원점에서 키우면 꼭짓점이 직선에 먼저 닿는다. 직선 위에서 이 값을 재면 $(2,0)$ 에서 $2$, $(0,1)$ 에서 $1$ 이므로 최소는 $(0,1)$ 이고 성분 하나가 $0$ 인 해가 나온다.

차원이 커져도 같은 일이 일어난다. 성분의 절댓값을 더한 값이 일정한 집합은 꼭짓점이 좌표축 위에 있고 그 꼭짓점이 성분 하나만 $0$ 이 아닌 벡터다. 그러면 남는 물음은 이 최소화의 답이 복원하려는 희소 벡터와 언제 같은지다.

# 정의

압축 센싱은 $m\lt n$ 인 측정 $b=Ax$ 에서 희소한 $x$ 를 복원하는 문제다. $A$ 는 $m\times n$ 측정 행렬이고, $x\in\mathbb R^n$ 의 $0$ 이 아닌 성분이 $k$ 개 이하일 때 $x$ 를 $k$-희소라 한다.

## 두 최소화 문제

성분의 개수를 세는 문제와 그 볼록 완화는 각각

$$\min\_{x}\thinspace\Vert x\Vert\_0\quad\text{subject to}\quad Ax=b,$$

$$\min\_{x}\thinspace\Vert x\Vert\_1\quad\text{subject to}\quad Ax=b$$

다. $\Vert x\Vert\_0$ 은 $0$ 이 아닌 성분의 개수이고 $\Vert x\Vert\_1=\sum\_{i}\vert x\_i\vert$ 다. 앞의 문제는 [NP](np-completeness.md)(nondeterministic polynomial time)-난해이고,[^1] 뒤의 문제는 $\ell\_1$ 노름이 [볼록](convexity.md)이므로 볼록 문제이며 기저 추구라 부른다.

측정에 잡음이 섞이면 등식 제약을 벌점으로 바꾼다. $\lambda\gt 0$ 에서

$$\min\_{x}\thinspace\tfrac12\Vert Ax-b\Vert\_2^2+\lambda\Vert x\Vert\_1$$

의 해를 **LASSO**(least absolute shrinkage and selection operator) 추정량이라 한다. 이것은 [선형회귀](linear-regression.md)의 제곱오차에 $\ell\_1$ 벌점을 더한 것이다.

## 제한 등거리 성질

$A$ 가 차수 $k$ 에서 상수 $\delta\_k$ 의 **제한 등거리 성질**(restricted isometry property, RIP)을 만족한다는 것은 모든 $k$-희소 $x$ 에서

$$(1-\delta\_k)\Vert x\Vert\_2^2\le\Vert Ax\Vert\_2^2\le(1+\delta\_k)\Vert x\Vert\_2^2$$

이 성립한다는 것이다. 희소 벡터로 제한하면 $A$ 가 길이를 거의 보존한다는 뜻이다.

# 성질

## 희소해의 유일성

$A$ 의 열 가운데 임의의 $2k$ 개가 선형독립이면 $k$-희소해는 많아도 하나다. 두 $k$-희소해 $x$ 와 $x'$ 이 있으면 $x-x'$ 이 $2k$-희소이면서 $A(x-x')=0$ 이고, $2k$ 열의 선형독립성이 이것을 $x=x'$ 으로 만든다.

## $\ell\_0$ 과 $\ell\_1$ 의 일치

$\delta\_{2k}\lt\sqrt 2-1$ 이면 $k$-희소해가 있을 때 기저 추구의 해가 그것과 같다.[^2]

증명의 요지. 기저 추구의 해를 $x+h$ 라 하면 $Ah=0$ 이고 $\Vert x+h\Vert\_1\le\Vert x\Vert\_1$ 이다. $x$ 의 지지집합 $T$ 와 그 밖에서 $\ell\_1$ 노름을 나누면 $\Vert h\_{T^c}\Vert\_1\le\Vert h\_T\Vert\_1$ 이 나온다. 한편 $h\_{T^c}$ 를 크기 $k$ 의 조각으로 잘라 제한 등거리 성질을 쓰면 $\Vert h\_T\Vert\_2$ 가 $\Vert h\_{T^c}\Vert\_1$ 의 상수배 이하로 묶이고, 두 부등식을 합치면 $\delta\_{2k}$ 가 위 문턱보다 작을 때 $h=0$ 이 된다.

## 무작위 행렬의 제한 등거리 성질

성분이 독립인 평균 $0$ 분산 $1/m$ 의 Gauss 분포를 따르는 $m\times n$ 행렬은

$$m\ge C\thinspace\delta^{-2}k\log(n/k)$$

이면 $1-e^{-cm}$ 이상의 확률로 $\delta\_{2k}\le\delta$ 를 만족한다.[^3] $C$ 와 $c$ 는 보편상수다. 미지수 $n$ 개에 측정은 $k\log(n/k)$ 규모로 충분하다는 뜻이다. 주어진 행렬이 제한 등거리 성질을 만족하는지 확인하는 것은 차수 $k$ 의 모든 열 부분집합을 보아야 하므로 무작위 구성이 쓰인다.

## 연성 문턱

벌점 $\lambda\Vert x\Vert\_1$ 의 근접 연산자는 성분마다 적용되는 연성 문턱

$$S\_\lambda(u)=\mathrm{sign}(u)\max(\vert u\vert-\lambda,0)$$

다. $\vert u\vert\le\lambda$ 인 성분을 정확히 $0$ 으로 보내므로 [근접 경사법](proximal-gradient-method.md)의 반복이 희소한 반복점을 낸다.

# 활용

- LASSO 회귀: 설명변수가 표본보다 많은 자료에서 계수를 추정하면서 $0$ 이 아닌 계수의 집합을 함께 고른다. 벌점 $\lambda$ 가 고르는 변수의 개수를 조절한다.
- [근접 경사법](proximal-gradient-method.md): 연성 문턱을 근접 단계로 쓰는 반복이 기저 추구와 LASSO 의 표준 알고리즘이다.
- 자기공명영상(magnetic resonance imaging, MRI): 영상이 웨이블릿 기저에서 희소하다는 것을 써서 측정 횟수를 줄인다.
- 행렬 완성: 벡터의 희소성 자리에 특잇값의 희소성을 놓고 $\ell\_1$ 노름 자리에 핵노름을 놓으면 같은 구조의 볼록 문제가 된다.

[^1]: Natarajan, *Sparse approximate solutions to linear systems*, SIAM Journal on Computing 24 (1995), 227–234.
[^2]: Candès, *The restricted isometry property and its implications for compressed sensing*, Comptes Rendus Mathematique 346 (2008), 589–592.
[^3]: Baraniuk, Davenport, DeVore, Wakin, *A simple proof of the restricted isometry property for random matrices*, Constructive Approximation 28 (2008), 253–263.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [선형회귀](linear-regression.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #statistics #linear_algebra #machine_learning
