# Hirsch 추측

# 개요

**Hirsch 추측(Hirsch conjecture)** 은 극대면이 $n$ 개인 $d$ 차원 볼록 다면체에서 아무 두 꼭짓점이 모서리 $n-d$ 개 이하로 이어진다는 추측이다. [단체법](simplex-method.md)은 꼭짓점에서 모서리를 따라 이웃 꼭짓점으로 옮겨 가며 최적 꼭짓점을 찾으므로, 시작 꼭짓점과 최적 꼭짓점 사이가 멀면 어떤 피벗 규칙으로도 그만큼 걸린다. 이 추측은 그 거리의 상한을 극대면의 수와 차원만으로 정하려는 것이고, 1957 년에 제기되어 2010 년에 Santos 가 반례를 구성했다.

# 직관

정육면체 $\vert x\vert,\vert y\vert,\vert z\vert\le1$ 에서 꼭짓점 $(-1,-1,-1)$ 에서 $(1,1,1)$ 로 모서리를 따라 간다. 모서리는 좌표 하나의 부호만 바꾸므로 세 좌표를 다 바꾸려면 모서리 세 개가 필요하고, $(1,-1,-1)$, $(1,1,-1)$ 을 거치면 세 번에 닿는다.

극대면으로 세면 같은 수가 나온다. 출발점은 극대면 $x=-1$, $y=-1$, $z=-1$ 위에 있고 도착점은 $x=1$, $y=1$, $z=1$ 위에 있다. 모서리 하나를 지나면 극대면 하나를 떠나고 하나에 들어가므로, 도착점의 극대면 셋에 모두 들어가려면 세 걸음이 필요하다.

정육면체는 극대면이 $n=6$ 개이고 차원이 $d=3$ 이며, 가장 먼 두 꼭짓점의 거리가 $3=n-d$ 다. 떠난 극대면에 다시 들어가지 않고 도착점의 극대면에만 들어가는 길이 언제나 있다면 걸음 수는 $n-d$ 를 넘지 않는다. Hirsch 추측은 이 수가 언제나 상한이라는 것이다.

# 정의

[볼록 다면체](convex-polytopes.md) $P$ 의 그래프는 꼭짓점을 정점으로, 모서리를 간선으로 하는 그래프다. 두 꼭짓점 사이의 거리는 둘을 잇는 모서리 경로의 최소 길이다.

## 다면체의 지름

$P$ 의 **지름(diameter)** $\delta(P)$ 는 두 꼭짓점 사이 거리의 최댓값이다. 직관 절의 정육면체는 $\delta=3$ 이다. 꼭짓점이 $n$ 개인 다각형은 $d=2$ 이고 극대면도 $n$ 개이며, $\delta=\lfloor n/2\rfloor$ 이다.

## Hirsch 함수

$H(n,d)$ 는 극대면이 $n$ 개인 $d$ 차원 볼록 다면체의 지름의 최댓값이다. **Hirsch 추측** 은 모든 $n\gt d\ge2$ 에서 $H(n,d)\le n-d$ 라는 진술이다. 다각형에서는 $\lfloor n/2\rfloor\le n-2$ 이므로 성립하고, $d$ 차원 입방체는 $n=2d$, $\delta=d$ 로 등호를 이룬다.

# 성질

## 단순 다면체로의 환원

$H(n,d)$ 는 단순 다면체, 곧 모든 꼭짓점에 모서리가 $d$ 개씩 모이는 다면체에서 최대가 된다. 극대면의 부등식을 조금씩 옮기면 꼭짓점 하나가 여러 꼭짓점으로 갈라지고 거리는 줄지 않기 때문이다[^1]. 단순 다면체의 정의는 [Balinski 정리](balinski-theorem.md)의 등호 절에 있다.

## d 걸음 추측과의 동치

Klee 와 Walkup 은 다음 둘이 동치임을 보였다[^1].

- 모든 $n,d$ 에서 $H(n,d)\le n-d$ 다.
- 모든 $d$ 에서 $H(2d,d)\le d$ 다.

둘째를 **d 걸음 추측(d-step conjecture)** 이라 한다.

단순 다면체에서 극대면이 $2d$ 보다 적으면 각각 극대면 $d$ 개 위에 있는 두 꼭짓점이 극대면 하나를 공유하므로, 그 극대면으로 내려가 차원을 줄인다. 극대면이 $2d$ 보다 많으면 쐐기(wedge)를 세워 차원과 극대면을 하나씩 늘린다. 어느 쪽도 $n-d$ 를 바꾸지 않으므로 $n=2d$ 로 맞출 수 있다.

같은 논문은 $d\le5$ 에서 d 걸음 추측을 증명했다.

## 성립하는 경우

- $d\le3$ 이면 $H(n,d)\le n-d$ 다[^2].
- 꼭짓점의 좌표가 모두 $0$ 이나 $1$ 인 다면체에서는 Hirsch 추측이 성립하고 지름이 $d$ 이하다. 두 꼭짓점의 좌표가 같은 자리가 있으면 그 좌표를 고정한 면으로 내려가 차원에 대한 귀납을 쓴다[^3].

## Santos 의 반례

Santos 는 극대면이 $86$ 개인 $43$ 차원 다면체의 지름이 $44$ 이상임을 보였다[^4]. 지름이 $n-d=43$ 을 넘으므로 Hirsch 추측이 틀렸다. 구성의 요지는 두 극대면을 마주 보게 두고 모든 꼭짓점이 둘 가운데 하나에 놓이는 5 차원 다면체(prismatoid)에서, 두 극대면 사이를 지나는 데 $6$ 걸음이 드는 것을 찾고 이것을 차원을 올리며 키우는 것이다. 이후 Matschke, Santos, Weibel 이 극대면이 $40$ 개이고 지름이 $21$ 이상인 $20$ 차원 반례를 구성했다[^5].

## 지름의 상한

- Kalai 와 Kleitman 은 $H(n,d)\le n^{\log\_2d+2}$ 를 보였다[^6]. $d$ 에 대한 지수가 아니라 $\log d$ 에 대한 지수다.
- $d$ 를 고정하면 $H(n,d)\le2^{d-3}n$ 으로 $n$ 의 일차식이다[^7].
- $H(n,d)$ 가 $n$ 과 $d$ 의 다항식으로 눌리는지, 곧 다항식 Hirsch 추측(polynomial Hirsch conjecture)은 열린 문제다[^4].

# 활용

- 단체법. 피벗 하나가 모서리 하나를 지나므로, 시작 꼭짓점에서 최적 꼭짓점까지의 거리가 피벗 횟수의 하한이다. 다항식 Hirsch 추측이 틀리면 어떤 피벗 규칙도 다항 시간이 될 수 없다.
- 볼록 다면체의 조합론. 지름의 상한은 다면체 그래프의 연결 구조를 다루는 Balinski 정리와 함께 다면체 그래프가 될 수 있는 그래프를 제한한다.

[^1]: V. Klee, D. W. Walkup, "The d-step conjecture for polyhedra of dimension d<6", *Acta Mathematica* 117 (1967), 53–78.
[^2]: V. Klee, "Diameters of polyhedral graphs", *Canadian Journal of Mathematics* 16 (1964), 602–614.
[^3]: D. Naddef, "The Hirsch conjecture is true for (0,1)-polytopes", *Mathematical Programming* 45 (1989), 109–110.
[^4]: F. Santos, "A counterexample to the Hirsch conjecture", *Annals of Mathematics* 176 (2012), 383–412.
[^5]: B. Matschke, F. Santos, C. Weibel, "The width of five-dimensional prismatoids", *Proceedings of the London Mathematical Society* 110 (2015), 647–672.
[^6]: G. Kalai, D. J. Kleitman, "A quasi-polynomial bound for the diameter of graphs of polyhedra", *Bulletin of the American Mathematical Society* 26 (1992), 315–316.
[^7]: D. G. Larman, "Paths on polytopes", *Proceedings of the London Mathematical Society* 20 (1970), 161–178.

# 연관 문서

## 선수지식

- [단체법](simplex-method.md)
- [Balinski 정리](balinski-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #combinatorics #graph_theory
