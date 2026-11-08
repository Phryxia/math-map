# Dykstra 알고리즘

# 개요

**Dykstra 알고리즘(Dykstra's algorithm)** 은 두 볼록집합으로의 사영만 써서, 주어진 점에서 두 집합의 교집합까지 가장 가까운 점을 찾는 반복이다. 반평면 $x_1+x_2\le 0$ 과 $x_2\le 0$ 의 교집합에서 점 $(1,3)$ 에 가장 가까운 점은 원점인데, [교대 사영](alternating-projections.md)은 두 번의 사영 뒤 교집합의 다른 점 $(-1,0)$ 에서 멈춘다. Dykstra 알고리즘은 각 사영이 잘라 낸 양을 기억했다가 다음 사영 전에 되더해, 교대 사영과 같은 사영 연산만으로 가장 가까운 점에 다가간다.

# 직관

$C=\lbrace x_1+x_2\le 0\rbrace$ , $D=\lbrace x_2\le 0\rbrace$ 이고 시작점은 $x_0=(1,3)$ 이다. 교집합의 점 가운데 원점까지의 거리 제곱은 $1+9=10$ 이고, $(-1,0)$ 까지는 $4+9=13$ 이므로 원점이 더 가깝다. 교대 사영은 $C$ 로 $(-1,1)$ , $D$ 로 $(-1,0)$ 을 주고, $(-1,0)$ 이 두 집합에 모두 있어 거기서 멈춘다.

$C$ 로 사영할 때 $(1,3)$ 에서 $(2,2)$ 만큼을 잘라 냈고, $D$ 로 사영할 때 $(-1,1)$ 에서 $(0,1)$ 만큼을 잘라 냈다. 잘라 낸 양을 각 집합의 몫으로 기억해 두고, 다음에 같은 집합으로 사영하기 전에 그 몫을 현재 점에 다시 더한다. $C$ 차례에는 $(-1,0)+(2,2)=(1,2)$ 를 사영해 $(-0.5,\thinspace 0.5)$ 를 얻고, 이번에 잘라 낸 $(1.5,\thinspace 1.5)$ 를 새 몫으로 둔다. $D$ 차례에는 $(-0.5,\thinspace 0.5)+(0,1)=(-0.5,\thinspace 1.5)$ 를 사영해 $(-0.5,\thinspace 0)$ 을 얻는다.

같은 계산을 이어 가면 $D$ 쪽 점이 $(-1,0)$ , $(-0.5,\thinspace 0)$ , $(-0.25,\thinspace 0),\dots$ 로 원점에 다가간다. 몫을 되더하는 이 반복을 Dykstra 알고리즘이라 부른다.

# 정의

$H$ 가 [Hilbert 공간](hilbert-spaces.md)이고 $C$ , $D$ 가 교집합이 공집합이 아닌 닫힌 볼록집합이라 하자. 시작점 $x_0$ 과 $p_0=q_0=0$ 에서 **Dykstra 알고리즘** 은 다음을 되풀이한다.

$$
\begin{aligned}
y_k&=P_C(x_k+p_k), & p_{k+1}&=x_k+p_k-y_k\cr
x_{k+1}&=P_D(y_k+q_k), & q_{k+1}&=y_k+q_k-x_{k+1}
\end{aligned}
$$

$p_k$ 와 $q_k$ 가 직관 절의 몫이다. 직관 절에서 $y_0=(-1,1)$ , $p_1=(2,2)$ , $x_1=(-1,0)$ , $q_1=(0,1)$ , $y_1=(-0.5,\thinspace 0.5)$ , $x_2=(-0.5,\thinspace 0)$ 이다. 몫을 빼면, 곧 $p_k=q_k=0$ 으로 고정하면 교대 사영이다.

# 성질

## 수렴

정리. $x_k$ 와 $y_k$ 는 노름으로 $P_{C\cap D}\thinspace x_0$ 에 수렴한다[^1].

교대 사영은 볼록집합에서 교집합의 어떤 점으로 갈지 정해지지 않고, 무한차원에서는 노름으로 수렴하지 않는 예도 있다. Dykstra 알고리즘은 두 결함이 없다.

## 몫의 뜻

최근접점 정리에서 $y=P_C(z)$ 이면 $z-y$ 는 $C$ 의 $y$ 에서의 법선 방향이고, 몫 $p_{k+1}$ 은 그런 법선 벡터다. 정의의 두 식을 더하면 모든 $k$ 에서 $p_{k+1}+q_{k+1}=x_0-x_{k+1}$ 이다. 가장 가까운 점 $x^\star$ 의 최적성 조건은 $x_0-x^\star$ 가 $C$ 의 법선 벡터와 $D$ 의 법선 벡터의 합이라는 것이므로, 두 몫은 이 분해를 반복마다 근사한다.

## 부분공간에서의 일치

$C$ 와 $D$ 가 닫힌 부분공간이면 $P_C$ 가 선형이고 몫 $p_k$ 가 $C$ 에 수직이라 $P_C(x_k+p_k)=P_Cx_k$ 다. 몫이 결과를 바꾸지 않으므로 Dykstra 알고리즘은 교대 사영과 같고, 교대 사영 문서의 von Neumann 정리가 이 경우의 수렴이다.

# 활용

- 가장 가까운 상관행렬. 대칭행렬에 가장 가까운, 반정부호이고 대각 성분이 $1$ 인 행렬을 반정부호 원뿔과 대각이 $1$ 인 아핀집합으로의 사영으로 구한다. 가장 가까운 점이 필요하므로 교대 사영 대신 Dykstra 알고리즘을 쓴다[^2].
- [등위 회귀](isotonic-regression.md). 단조 증가하는 수열 가운데 자료에 가장 가까운 것을 찾는 문제는 부등식 $z_i\le z_{i+1}$ 하나하나가 정하는 반공간들의 교집합으로의 사영이다. 반공간 하나로의 사영은 두 성분을 평균하는 것이라, Dykstra 알고리즘의 각 걸음이 간단하다.
- 집합이 여럿이면 몫을 집합마다 하나씩 두고 차례로 사영한다. 수렴 정리는 유한 개의 닫힌 볼록집합에서 그대로 성립한다[^1].

[^1]: J. P. Boyle and R. L. Dykstra, *A method for finding projections onto the intersection of convex sets in Hilbert spaces*, Advances in Order Restricted Statistical Inference, Lecture Notes in Statistics 37, Springer, 1986, 28–47.
[^2]: N. J. Higham, *Computing the nearest correlation matrix—a problem from finance*, IMA Journal of Numerical Analysis 22, 2002, 329–343.

# 연관 문서

## 선수지식

- [교대 사영](alternating-projections.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #optimization #statistics
