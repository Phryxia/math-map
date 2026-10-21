# 감김수

# 개요

**감김수(winding number)** 는 평면의 닫힌 경로가 한 점 둘레를 시계 반대 방향으로 몇 바퀴 도는지를 센 정수다. 경로를 따라 그 점을 바라보는 방향의 각을 연속으로 따라가 전체 변화량을 $2\pi$ 로 나눈 값이고, 경로가 조각마다 매끄러우면 복소적분 $\frac1{2\pi i}\oint dz/(z-a)$ 와 같다. 점을 뺀 평면의 [기본군](fundamental-group.md)이 정수군과 동형이라는 것을 이 정수가 나타내고, 복소해석의 Cauchy 적분 공식과 [유수 정리](residue-theorem.md)는 감김수를 곱한 꼴로 쓰인다.

# 직관

경로 $\gamma(t)=e^{2it}$, $0\le t\le 2\pi$ 는 단위원을 두 번 돈다. 이 경로가 원점 둘레를 몇 바퀴 도는지 숫자로 정하고 싶다. 점 $\gamma(t)$ 의 각을 $\theta(t)$ 라 하면 처음과 끝의 각의 차이를 $2\pi$ 로 나누면 된다.

각을 $[0,2\pi)$ 에서 고르면 이 계산이 되지 않는다. $t$ 가 $\pi$ 를 지날 때 점은 $1$ 로 돌아오고 각은 $2\pi$ 직전에서 $0$ 으로 뛴다. 끝에서도 각은 $0$ 이므로 차이는 $0$ 이다.

각이 뛰는 것이 문제였으므로, 범위를 정하지 않고 $t$ 에 대해 연속이 되도록 각을 고른다. $\theta(t)=2t$ 로 잡으면 $e^{i\theta(t)}=\gamma(t)$ 이고 $\theta$ 는 연속이다. 차이는 $\theta(2\pi)-\theta(0)=4\pi$ 이고, $2\pi$ 로 나누면 $2$ 다. 연속인 각은 처음 값을 정하면 하나로 정해지고, 처음 값을 $2\pi$ 의 정수배만큼 바꿔도 차이는 그대로다. 이 차이를 $2\pi$ 로 나눈 정수가 감김수다.

# 정의

$a\in\mathbb C$ 이고 $\gamma:[0,1]\to\mathbb C\setminus\lbrace a\rbrace$ 가 연속이며 $\gamma(0)=\gamma(1)$ 이다. 연속함수 $\theta:[0,1]\to\mathbb R$ 가

$$
\gamma(t)-a=\vert\gamma(t)-a\vert\thinspace e^{i\theta(t)}
$$

를 만족하면, $\gamma$ 의 $a$ 둘레의 **감김수** 는

$$
n(\gamma,a)=\frac{\theta(1)-\theta(0)}{2\pi}
$$

이다. $\theta$ 는 [덮개공간](covering-spaces.md) $\mathbb R\to S^1$, $s\mapsto e^{is}$ 을 따라 경로를 올린 것이므로 존재하고, 두 올림은 $2\pi$ 의 정수배만큼 차이 나므로 $n(\gamma,a)$ 는 $\theta$ 의 선택과 상관없다. $\gamma(0)=\gamma(1)$ 이므로 $n(\gamma,a)$ 는 정수다.

$\gamma$ 가 조각마다 연속미분가능하면

$$
n(\gamma,a)=\frac1{2\pi i}\oint_\gamma\frac{dz}{z-a}
$$

이다. $\gamma(t)-a=r(t)e^{i\theta(t)}$ 로 쓰면 $\gamma'(t)/(\gamma(t)-a)=r'(t)/r(t)+i\theta'(t)$ 이고, $r(1)=r(0)$ 이므로 첫 항의 적분은 $0$ 이다.[^1]

# 성질

## 호모토피 불변성

$\mathbb C\setminus\lbrace a\rbrace$ 안에서 닫힌 경로 $\gamma_0$ 을 $\gamma_1$ 로 연속 변형할 수 있으면 $n(\gamma_0,a)=n(\gamma_1,a)$ 이다. 감김수는 연속으로 변하는 정수이므로 상수다. 기준점을 고정한 고리에 감김수를 대응시키는 사상은 동형 $\pi_1(\mathbb C\setminus\lbrace a\rbrace)\cong\mathbb Z$ 이다.[^2]

## 점에 대한 의존

$\gamma$ 를 고정하면 $a\mapsto n(\gamma,a)$ 는 $\mathbb C\setminus\gamma(\lbrack 0,1\rbrack)$ 위에서 연속이고 정수값이므로 각 연결 성분에서 상수다. $\vert a\vert$ 가 충분히 크면 $\gamma$ 가 $a$ 에서 시작하는 반직선 하나와 만나지 않으므로 각이 한 바퀴를 돌지 못해 $n(\gamma,a)=0$ 이다. 따라서 유계가 아닌 성분에서 감김수는 $0$ 이다. 경로가 [Jordan 곡선](jordan-curve-theorem.md)이면 유계인 성분은 하나이고 거기서 감김수는 $\pm 1$ 이다.

## 경로의 합

같은 점에서 시작하고 끝나는 두 닫힌 경로를 이어 붙인 경로의 감김수는 두 감김수의 합이고, 경로를 거꾸로 돌면 감김수의 부호가 바뀐다.

## 편각 원리

**정리(편각 원리, argument principle).** $f$ 가 단순연결 영역 $D$ 에서 극을 빼고 [정칙함수](holomorphic-functions.md)이고, 영점과 극이 유한 개이며, $\gamma$ 가 $D$ 안의 닫힌 경로이고 그 위에 영점과 극이 없으면

$$
n(f\circ\gamma,0)=\frac1{2\pi i}\oint_\gamma\frac{f'(z)}{f(z)}\thinspace dz=\sum_{f(z_k)=0}n(\gamma,z_k)-\sum_{f\text{ 의 극 }p_j}n(\gamma,p_j)
$$

이다. 영점과 극은 중복도만큼 센다.[^1] $\gamma$ 가 시계 반대 방향의 원이면 우변은 원 안의 영점 개수에서 극 개수를 뺀 값이다.

# 활용

- **대수학의 기본 정리.** 차수 $d\ge 1$ 인 복소 다항식 $p$ 와 큰 원 $\gamma$ 에서 $p\circ\gamma$ 는 $z^d$ 의 상과 호모토피이므로 원점 둘레의 감김수가 $d$ 다. $p$ 가 영점을 갖지 않으면 원의 반지름을 $0$ 으로 줄이는 변형으로 감김수가 $0$ 이 되어 모순이다.
- **Cauchy 적분 공식.** $f$ 가 단순연결 영역에서 정칙이고 $\gamma$ 가 그 안의 닫힌 경로이면 $n(\gamma,a)f(a)=\frac1{2\pi i}\oint_\gamma f(z)/(z-a)\thinspace dz$ 이다. 유수 정리도 각 극의 유수에 감김수를 곱해 더한 꼴이다.
- **벡터장의 지표.** [Poincaré–Hopf 정리](poincare-hopf.md)의 고립된 영점의 지표는, 영점을 둘러싼 작은 원 위에서 벡터장의 값이 원점 둘레를 도는 감김수다.
- **구멍 있는 영역.** [Green 정리](greens-theorem.md)의 가정이 원점을 뺀 평면에서 성립하지 않는 예 $(-y\thinspace dx+x\thinspace dy)/(x^2+y^2)$ 의 단위원 선적분 $2\pi$ 는 $2\pi\thinspace n(\gamma,0)$ 이다.

[^1]: L. V. Ahlfors, *Complex Analysis*, 3rd ed., McGraw-Hill, 1979, 4 장 2 절(감김수), 4 장 5 절(편각 원리).
[^2]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 1 장 1 절 Theorem 1.7.

# 연관 문서

## 선수지식

- [덮개공간](covering-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #complex_analysis
