# Kaczmarz 방법

# 개요

**Kaczmarz 방법(Kaczmarz method)** 은 연립일차방정식의 식을 하나씩 골라, 현재 점을 그 식을 만족하는 가장 가까운 점으로 옮기는 일을 되풀이해 해를 찾는 반복이다. 단층촬영처럼 식이 수백만 개이고 식 하나에 미지수가 몇 개만 들어 있는 계에서는 [Gauss 소거법](gaussian-elimination.md)이 행렬 전체를 바꿔 쓰느라 저장량과 계산량이 감당되지 않는다. Kaczmarz 방법은 한 걸음에 행 하나만 읽고 벡터 하나만 더하므로, 행렬을 바꾸지 않고 식을 차례로 훑으며 해에 다가간다.

# 직관

두 식 $x=1$ 과 $x+y=2$ 의 해는 $(1,1)$ 이다. 평면에서 두 식은 각각 직선이고, 해는 두 직선의 교점이다. $(0,0)$ 에서 시작해 첫 직선 $x=1$ 의 가장 가까운 점으로 옮기면 $(1,0)$ 이다.

$(1,0)$ 은 둘째 식에서 $x+y=1$ 이라 $1$ 이 모자란다. 직선 $x+y=2$ 에 수직인 방향 $(1,1)$ 로 옮겨야 가장 가까운 점에 닿고, 모자란 양 $1$ 을 $(1,1)$ 의 길이의 제곱 $2$ 로 나눈 만큼 옮기면 $(1.5,\thinspace 0.5)$ 다. 다시 첫 식으로 옮기면 $(1,\thinspace 0.5)$ , 둘째 식으로 $(1.25,\thinspace 0.75)$ 다.

첫 식 위의 점이 $(1,0)$ , $(1,\thinspace 0.5)$ , $(1,\thinspace 0.75),\dots$ 로 해까지의 거리가 한 바퀴마다 절반이 된다. 두 직선이 $45^\circ$ 로 만나므로 [교대 사영](alternating-projections.md)의 비율 $\cos^245^\circ=1/2$ 이 그대로 나타난다. 식이 여럿이면 직선 대신 초평면으로 차례로 옮기고, 이 반복을 Kaczmarz 방법이라 부른다.

# 정의

$A\in\mathbb R^{m\times n}$ 의 행을 $a_1^\top,\dots,a_m^\top$ 이라 하고 $Ax=b$ 를 푼다. 식 $i$ 의 해집합은 초평면 $H_i=\lbrace x:\langle a_i,x\rangle=b_i\rbrace$ 이고, 그 위로의 사영은 다음이다.

$$
P_ix=x+\frac{b_i-\langle a_i,x\rangle}{\Vert a_i\Vert^2}\thinspace a_i
$$

**Kaczmarz 방법** 은 $x_{k+1}=P_{i_k}x_k$ 를 되풀이하는 반복이다. 순환 판본은 $i_k=(k\bmod m)+1$ 로 행을 차례로 쓴다. **무작위 Kaczmarz 방법(randomized Kaczmarz method)** 은 매 걸음 $i_k=i$ 를 확률 $\Vert a_i\Vert^2/\Vert A\Vert\_F^2$ 로 독립적으로 고른다. $\Vert A\Vert\_F^2=\sum_i\Vert a_i\Vert^2$ 는 성분 제곱의 합이다. 직관 절은 $a_1=(1,0)$ , $b_1=1$ , $a_2=(1,1)$ , $b_2=2$ 의 순환 판본이다.

# 성질

## 일관된 계에서의 수렴

정리. $Ax=b$ 에 해가 있으면 순환 Kaczmarz 방법은 해집합 위에서 $x_0$ 에 가장 가까운 점으로 수렴한다[^1].

해집합과 각 $H_i$ 가 아핀 부분공간이므로, 해 하나를 원점으로 옮기면 부분공간들로의 정사영을 차례로 곱하는 반복이다. 교대 사영 문서의 von Neumann 정리를 부분공간 $m$ 개로 넓힌 Halperin 정리(Halperin's theorem)가 이 극한을 준다.

## 무작위 판본의 수렴률

정리. $A$ 의 열이 일차독립이고 $Ax^\star=b$ 이면 무작위 Kaczmarz 방법은 다음을 만족한다[^2].

$$
E\Vert x_k-x^\star\Vert^2\le\Bigl(1-\frac{\sigma_{\min}(A)^2}{\Vert A\Vert\_F^2}\Bigr)^k\Vert x_0-x^\star\Vert^2
$$

$\sigma_{\min}(A)$ 는 $A$ 의 가장 작은 [특이값](singular-value-decomposition.md)이다.

증명의 요지. $e_k=x_k-x^\star$ 로 두면 $x^\star\in H_i$ 이므로 $e_{k+1}$ 은 $e_k$ 를 $a_i$ 에 수직인 부분공간으로 정사영한 것이고, $\Vert e_{k+1}\Vert^2=\Vert e_k\Vert^2-\langle a_i,e_k\rangle^2/\Vert a_i\Vert^2$ 다. $i$ 에 대한 기댓값을 취하면 뺄 양의 평균이 $\Vert Ae_k\Vert^2/\Vert A\Vert\_F^2$ 이고, 이것은 $\sigma_{\min}(A)^2\Vert e_k\Vert^2/\Vert A\Vert\_F^2$ 이상이다.

비율은 행의 순서와 무관하다. 순환 판본은 행의 순서가 나쁘면 이웃한 초평면이 거의 평행해 느려질 수 있는데, 무작위로 고르면 이 의존이 사라진다.

## 해가 없는 계

$Ax=b$ 에 해가 없으면 반복은 한 점으로 수렴하지 않는다. 무작위 판본은 최소제곱해 $x_{\mathrm{LS}}$ 주위에서 반지름이 잔차 $\max_i\vert(Ax\_{\mathrm{LS}}-b)\_i\vert/\Vert a_i\Vert$ 에 비례하는 영역까지 같은 비율로 다가간 뒤 그 안에서 머문다[^3].

## 확률적 경사하강법과의 관계

$f(x)=\frac12\sum_i(\langle a_i,x\rangle-b_i)^2$ 에서 항 $i$ 의 기울기는 $(\langle a_i,x\rangle-b_i)a_i$ 다. 항 하나를 골라 보폭 $1/\Vert a_i\Vert^2$ 로 [확률적 경사하강법](stochastic-gradient-descent.md)의 걸음을 밟으면 $P_ix$ 와 같다. 그래서 Kaczmarz 방법은 보폭을 행의 크기에 맞춘 확률적 경사하강법이다.

# 활용

- 단층촬영의 영상 복원. X선 하나가 지나간 픽셀들의 감쇠 합이 측정값 하나이므로 행마다 $0$ 아닌 성분이 몇 개뿐이다. 이 계를 Kaczmarz 방법으로 푸는 것을 대수적 재구성 기법(algebraic reconstruction technique)이라 부르고, 초기 CT(computed tomography) 장치의 복원에 쓰였다[^4].
- 큰 희소 연립방정식. 행렬을 바꾸지 않고 행을 하나씩 읽으므로, 행렬이 너무 커서 메모리에 다 올릴 수 없거나 행이 차례로 들어오는 경우에 쓴다.
- 볼록 실현가능성 문제. 등식 대신 부등식 $\langle a_i,x\rangle\le b_i$ 이면 어긴 식에만 사영한다. 반공간으로 차례로 사영하는 이 방법을 이완법(relaxation method)이라 하고, [퍼셉트론](perceptron.md)의 갱신이 같은 꼴이다.

[^1]: I. Halperin, *The product of projection operators*, Acta Scientiarum Mathematicarum (Szeged) 23, 1962, 96–99. 원래의 방법은 S. Kaczmarz, *Angenäherte Auflösung von Systemen linearer Gleichungen*, Bulletin International de l'Académie Polonaise des Sciences et des Lettres A 35, 1937, 355–357.
[^2]: T. Strohmer and R. Vershynin, *A randomized Kaczmarz algorithm with exponential convergence*, Journal of Fourier Analysis and Applications 15, 2009, 262–278.
[^3]: D. Needell, *Randomized Kaczmarz solver for noisy linear systems*, BIT Numerical Mathematics 50, 2010, 395–403.
[^4]: R. Gordon, R. Bender and G. T. Herman, *Algebraic reconstruction techniques (ART) for three-dimensional electron microscopy and X-ray photography*, Journal of Theoretical Biology 29, 1970, 471–481.

# 연관 문서

## 선수지식

- [교대 사영](alternating-projections.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #optimization #signal_processing
