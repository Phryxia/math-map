# Hessian 행렬

# 개요

**Hessian 행렬(Hessian matrix)** 은 다변수 함수의 이계 편미분을 모은 정사각행렬이다. 함수 $f(x,y)=x^2-y^2$ 은 원점에서 기울기가 $0$ 이지만, $x$ 방향으로는 위로 굽고 $y$ 방향으로는 아래로 굽어 극소도 극대도 아니다. Hessian 행렬은 방향마다 굽는 정도를 한 행렬에 모아, 그 고윳값의 부호로 기울기가 $0$ 인 점이 극소인지 극대인지 안장점인지를 판정한다.

# 직관

Hessian 행렬은 다변수 실함수의 이계 편미분을 모은 정사각행렬이다. $f:\mathbb R^n\to\mathbb R$ 이 두 번 미분가능하면 점 $a$ 에서

$$
H_f(a)=\Bigl(\frac{\partial^2 f}{\partial x_i\partial x_j}(a)\Bigr)\_{i,j=1}^n
$$

이다. 일계 [미분](derivative.md)이 $f$ 를 일차함수로 근사하듯 Hessian 은 그 다음 항, 곧 이차 근사를 준다. Hessian 의 대각합이 [Laplace 연산자](laplace-operator.md)다. 임계점이 극소인지 극대인지 안장점인지를 Hessian 의 고윳값 부호로 판정하고, 그 근거가 [스펙트럼 정리](spectral-theorem.md)다.

$f(x,y)=x^2-y^2$ 의 원점에서 두 편미분 $2x$ 와 $-2y$ 가 모두 $0$ 이다. 원점은 임계점이지만 $x$ 축을 따라가면 $f=x^2$ 이 원점에서 가장 작고, $y$ 축을 따라가면 $f=-y^2$ 이 원점에서 가장 크다. 일계 미분만으로는 이 차이가 보이지 않는다.

방향마다 이차 변화율을 재면 차이가 보인다. 단위벡터 $v=(v_1,v_2)$ 방향으로 $g(t)=f(tv)=t^2(v_1^2-v_2^2)$ 이므로 $g''(0)=2v_1^2-2v_2^2$ 다. 이 값은 행렬 $\begin{pmatrix}2&0\cr 0&-2\end{pmatrix}$ 로 만든 이차형식 $v^\top Hv$ 이고, 그 행렬이 원점의 Hessian 이다.

$v^\top Hv$ 가 모든 방향에서 양수면 어느 쪽으로 가도 $f$ 가 커지므로 극소다. 이 예에서는 $v=(1,0)$ 에서 $2$, $v=(0,1)$ 에서 $-2$ 여서 부호가 섞이고, 원점은 안장점이다. 대각행렬이라 부호를 대각성분에서 읽었고, 대각이 아닌 대칭행렬은 직교좌표를 돌려 대각으로 만든 뒤 같은 방법으로 읽는다.

# 정의

## Hessian 행렬

열린집합 $U\subseteq\mathbb R^n$ 에서 $f:U\to\mathbb R$ 의 이계 편미분이 모두 존재하면 $(i,j)$ 성분이 $\partial_i\partial_j f(a)$ 인 $n\times n$ 행렬 $H_f(a)$ 를 $a$ 에서의 **Hessian 행렬** 이라 한다. 기울기 벡터 $\nabla f$ 의 Jacobi 행렬이 $H_f$ 다.

## 임계점의 분류

$\nabla f(a)=0$ 인 점 $a$ 를 **임계점(critical point)** 이라 한다. $H_f(a)$ 가 가역이면 $a$ 를 **비퇴화 임계점(nondegenerate critical point)** 이라 하고, $H_f(a)$ 의 음의 고윳값 개수를 $a$ 의 **지표(index)** 라 한다.

# 성질

## 대칭성

$f$ 가 $C^2$ 이면 $\partial_i\partial_j f=\partial_j\partial_i f$ 이므로 $H_f$ 는 대칭행렬이다. 이것이 Schwarz 정리(Schwarz's theorem, Clairaut 정리)다. 증명의 요지는 직사각형의 네 꼭짓점에서 만든 이차 차분 $f(a+se_i+te_j)-f(a+se_i)-f(a+te_j)+f(a)$ 를 $i$ 방향과 $j$ 방향의 평균값 정리로 두 번 계산해 같은 극한을 얻는 것이다. 이계 편미분이 연속이 아니면 성립하지 않을 수 있다.

## 이차 Taylor 전개

$f$ 가 $a$ 근방에서 $C^2$ 이면

$$
f(a+h)=f(a)+\nabla f(a)^\top h+\frac12 h^\top H_f(a)h+o(\lVert h\rVert^2)
$$

이다. $h$ 방향의 선분 위에서 일변수 Taylor 전개를 하고 $\frac{d^2}{dt^2}f(a+th)=h^\top H_f(a+th)h$ 를 쓰면 나온다.

## 이계 판정법

$a$ 가 임계점이고 $f$ 가 $C^2$ 이면 다음이 성립한다.

| Hessian 의 고윳값 | 결론 |
| --- | --- |
| 모두 양수 | 극소 |
| 모두 음수 | 극대 |
| 양수와 음수가 섞임 | 안장점 |
| $0$ 이 있고 나머지 부호가 같음 | 판정 불가 |

대칭행렬이므로 스펙트럼 정리로 직교행렬 $Q$ 를 잡아 $H=Q\Lambda Q^\top$ 로 대각화하면 $h^\top Hh=\sum_i\lambda_i(Q^\top h)\_i^2$ 이다. 고윳값이 모두 $\lambda_{\min}\gt 0$ 이상이면 $h^\top Hh\ge\lambda_{\min}\lVert h\rVert^2$ 이 Taylor 전개의 나머지 $o(\lVert h\rVert^2)$ 를 이기므로 $f(a+h)\gt f(a)$ 다. 판정 불가의 예로 $x^4$ 와 $-x^4$ 와 $x^3$ 은 원점에서 Hessian 이 모두 $0$ 이지만 각각 극소, 극대, 둘 다 아님이다.

## 볼록성

볼록 열린집합 위의 $C^2$ 함수 $f$ 가 [볼록](convexity.md)인 것은 모든 점에서 $H_f$ 가 양의 준정부호인 것과 동치다. 모든 점에서 양의 정부호이면 순볼록이다. 역은 성립하지 않는다. $x^4$ 는 순볼록이지만 원점에서 Hessian 이 $0$ 이다.

## 좌표변환

$a$ 가 임계점이면 $f\circ\varphi$ 의 $\varphi^{-1}(a)$ 에서의 Hessian 은 $D\varphi^\top H_f(a)D\varphi$ 다. 일계항이 $0$ 이어서 연쇄법칙의 이계항만 남는다. 임계점이 아닌 점에서는 $\nabla f$ 와 $\varphi$ 의 이계 미분의 곱이 더해져 이 꼴이 깨진다. 그래서 다양체 위에서는 임계점의 Hessian 만 좌표와 무관하게 정의되고, 지표도 좌표와 무관하다.

# 활용

- [Newton 법](newton-method.md)은 최적화에서 $x_{k+1}=x_k-H_f(x_k)^{-1}\nabla f(x_k)$ 로 이차 근사의 최소점으로 옮기고, Hessian 이 양의 정부호인 극소점 근방에서 이차 수렴한다. [준Newton 법](quasi-newton-methods.md)은 Hessian 을 기울기의 차로 근사한다.
- [경사하강법](gradient-descent.md)의 수렴률은 Hessian 의 고윳값 범위로 정해진다. 최대 고윳값이 $L$, 최소 고윳값이 $\mu$ 이면 조건수 $L/\mu$ 가 반복 횟수를 정한다.
- [Fisher 정보](fisher-information.md)는 로그가능도의 Hessian 에 음의 부호를 붙인 것의 기댓값과 같다.
- [Laplace 방법](laplace-method.md)은 $\int e^{-nf}$ 를 최소점에서의 Hessian 행렬식으로 근사한다.
- [Morse 이론](morse-theory.md)은 비퇴화 임계점만 갖는 함수의 임계점과 지표로 다양체의 위상을 계산한다.

# 연관 문서

## 선수지식

- [미분](derivative.md)
- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

- [Laplace 연산자](laplace-operator.md)

#analysis #optimization #linear_algebra
