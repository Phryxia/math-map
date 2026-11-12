# Crank–Nicolson 방법

# 개요

**Crank–Nicolson 방법(Crank–Nicolson method)** 은 열이 퍼지는 방정식을 시간 간격마다 풀 때, 지금 시각과 다음 시각에서 잰 공간 변화율을 반씩 섞어 한 걸음 가는 계산법이다. 막대 $\lbrack 0,1\rbrack$ 의 온도를 격자 간격 $0.1$ 로 계산하면, 지금 시각의 변화율만 쓰는 방법은 시간 간격이 $0.005$ 를 넘는 순간 숫자가 튀고, 다음 시각의 변화율만 쓰는 방법은 튀지 않지만 시간 간격에 비례하는 오차를 낸다. 두 변화율의 평균으로 가면 시간 간격 $0.01$ 에서도 숫자가 튀지 않고 시간 방향의 오차가 간격의 제곱으로 줄어든다. 한 걸음마다 세 대각에만 성분이 있는 연립방정식 하나를 푼다.

# 직관

[Lax 동치 정리](lax-equivalence-theorem.md) 문서의 [열방정식](heat-equation.md) $u_t=u\_{xx}$ 를 같은 격자 $h=0.1$ 에서 푼다. 처음 온도가 $\sin(\pi x)$ 이면 참해는 $e^{-\pi^2t}\sin(\pi x)$ 이고, $t=0.1$ 에서 진폭이 $e^{-0.1\pi^2}\approx 0.3727$ 이다. 시간 간격을 $k=0.01$ 로 잡으면 $r=k/h^2=1$ 이다. 앞 Euler 차분은 $r\le 1/2$ 일 때만 안정하므로 이 간격에서는 격자 간격마다 부호가 바뀌는 진동이 걸음마다 $-3$ 배가 된다.

뒤 Euler 차분은 증폭 인자가 $1/(1+4r\sin^2(\theta/2))$ 라 튀지 않는다. 열 걸음 뒤 진폭은 $0.3930$ 이다. 공간만 이산화하고 시간은 정확히 푼 값이 $0.3757$ 이므로, 차이 $0.017$ 이 시간 이산화의 오차다. 뒤 Euler 차분은 걸음마다 끝점의 변화율을 쓰므로, 한 걸음 동안 변화율이 줄어드는 만큼 진폭을 덜 줄인다.

앞 차분은 변화율을 걸음의 시작에서, 뒤 차분은 끝에서 재어 오차의 방향이 반대다. 그래서 두 변화율을 반씩 섞는다. 그러면 열 걸음 뒤 진폭이 $0.3754$ 이고, 시간 이산화의 오차가 $0.0003$ 으로 줄어든다.

# 정의

## 갱신식

격자점 $x_j=jh$, 시각 $t_n=nk$ 에서 $u^n_j$ 로 근사하고 $r=k/h^2$ 로 둔다. 공간 이계 차분을 $\delta^2u_j=u\_{j-1}-2u_j+u\_{j+1}$ 로 쓰면 다음 갱신식이 **Crank–Nicolson 방법** 이다.[^1]

$$
u^{n+1}\_j-u^n_j=\frac r2\bigl(\delta^2u^{n+1}\_j+\delta^2u^n_j\bigr)
$$

미지수를 모은 벡터 $U^n$ 과 공간 이계 차분 [행렬](matrices.md) $A_h$ 로 쓰면 다음과 같다.

$$
\Bigl(I-\frac k2A_h\Bigr)U^{n+1}=\Bigl(I+\frac k2A_h\Bigr)U^n
$$

왼쪽 행렬은 [삼중대각계](tridiagonal-systems.md)이고 대각 우세라, 한 걸음마다 미지수 개수에 비례하는 연산으로 푼다.

## 사다리꼴 규칙과의 관계

공간만 이산화한 연립 [상미분방정식](ordinary-differential-equations.md) $U'=A_hU$ 에 [선형 다단계 방법](linear-multistep-methods.md)의 사다리꼴 규칙을 쓴 것이 위 갱신식이다. 이렇게 공간을 먼저 이산화하고 시간 방향은 상미분방정식의 방법으로 푸는 방식을 선의 방법(method of lines)이라 한다.

# 성질

## 증폭 인자와 무조건 안정성

$u^n_j=g^ne^{ij\theta}$ 를 넣으면 증폭 인자가 다음과 같다.

$$
g(\theta)=\frac{1-2r\sin^2(\theta/2)}{1+2r\sin^2(\theta/2)}
$$

분자의 절댓값이 분모보다 크지 않으므로 모든 $r\gt 0$ 과 모든 $\theta$ 에서 $\vert g(\theta)\vert\le 1$ 이다. 그래서 $\ell^2$ 노름에서 $r$ 에 상관없이 안정하고, Lax 동치 정리에 따라 $h$, $k\to 0$ 이면 수렴한다. 직관 절의 $\theta=\pi h$ 에서 $g\approx 0.90668$ 이고, 공간 이산화의 정확한 시간 인자 $e^{-4r\sin^2(\theta/2)}\approx 0.90675$ 와 소수 넷째 자리까지 같다.

## 정확도

갱신식에 매끄러운 참해를 넣고 $t\_{n+1/2}=t_n+k/2$ 에서 Taylor 전개하면, 가운데 시각을 중심으로 전개한 시간 간격의 홀수 거듭제곱 항이 상쇄되어, 한 걸음의 국소 오차를 $k$ 로 나눈 값이 $O(k^2+h^2)$ 이다.[^1] 같은 계산에서 앞 Euler 차분과 뒤 Euler 차분은 $O(k+h^2)$ 이다.

## 큰 r 에서의 진동

$\theta=\pi$ 의 진동은 참해에서 걸음마다 $e^{-k\pi^2/h^2}$ 배로 거의 즉시 사라지는데, Crank–Nicolson 방법에서는 다음 배가 된다.

$$
g(\pi)=\frac{1-2r}{1+2r}
$$

$r\to\infty$ 이면 $g(\pi)\to -1$ 이다. $h=0.1$, $k=0.1$ 이면 $r=10$ 이고 $g(\pi)=-19/21\approx -0.905$ 라, 격자 간격마다 부호가 바뀌는 성분이 걸음마다 부호를 바꾸며 천천히 줄어든다. 처음 온도에 꺾인 점이나 불연속이 있으면 이 성분이 크게 들어 있어 해에 진동이 남는다. 처음 몇 걸음을 뒤 Euler 차분으로 가면 이 성분이 빨리 사라진다.[^2]

## 최대값 원리

최대 노름에서 $r\le 1$ 이면, 새 값이 옛 값들과 이웃한 새 값들의 음이 아닌 가중평균이 되어 이산 [최대값 원리](maximum-principle.md)가 성립한다. 이때 오른쪽 변의 $u^n_j$ 계수 $1-r$ 이 음이 아니어야 한다. $r\gt 1$ 이면 $\ell^2$ 에서는 안정하지만 처음 온도가 $0$ 과 $1$ 사이여도 중간 값이 그 범위를 벗어날 수 있다.

# 활용

- [Black–Scholes 방정식](black-scholes-equation.md)의 수치 풀이. 변수를 바꾸면 열방정식이 되고, Crank–Nicolson 방법으로 시간 방향을 푼다. 행사가격에서 꺾인 만기 수익 때문에 처음 몇 걸음을 뒤 Euler 차분으로 가는 방식을 함께 쓴다.
- Schrödinger 방정식(Schrödinger equation) $i\psi_t=H\psi$. 같은 꼴의 다음 갱신식에서 한 걸음 행렬이 $H$ 가 에르미트일 때 유니터리라, 확률의 합이 걸음마다 그대로 남는다.

  $$
  \Bigl(I+\frac{ik}2H\Bigr)\psi^{n+1}=\Bigl(I-\frac{ik}2H\Bigr)\psi^n
  $$
- 2 차원과 3 차원 열방정식. 왼쪽 행렬이 더는 삼중대각이 아니라 방향마다 반 걸음씩 나눠 푸는 교대 방향 음함수 방법(alternating direction implicit method)을 쓴다.

[^1]: J. Crank, P. Nicolson, "A practical method for numerical evaluation of solutions of partial differential equations of the heat-conduction type", *Mathematical Proceedings of the Cambridge Philosophical Society* 43 (1947), 50–67. 증폭 인자, 국소 오차, 최대값 원리의 조건은 K. W. Morton, D. F. Mayers, *Numerical Solution of Partial Differential Equations*, 2nd ed., Cambridge University Press (2005), 2 장.
[^2]: R. Rannacher, "Finite element solution of diffusion problems with irregular data", *Numerische Mathematik* 43 (1984), 309–327.

# 연관 문서

## 선수지식

- [Lax 동치 정리](lax-equivalence-theorem.md)
- [선형 다단계 방법](linear-multistep-methods.md)

## 더 알아보기

- [교대 방향 음함수 방법](alternating-direction-implicit-method.md)

#functional_analysis #analysis #algorithms
