# Clarke 준미분

# 개요

**Clarke 준미분(Clarke subdifferential)** 은 꺾인 점이 있는 함수에서 그 점의 기울기 후보를 모은 집합이다. $f(x)=-\vert x\vert$ 는 $0$ 의 왼쪽에서 기울기가 $1$, 오른쪽에서 $-1$ 이고 $0$ 에서 꺾여 미분계수가 없다. Clarke 준미분은 꺾인 점 가까이의 기울기들을 모아 그 사이를 채운 구간 $\lbrack -1,1\rbrack$ 을 기울기 대신 쓰고, 극소점이나 극대점에서 이 집합이 $0$ 을 포함한다는 조건으로 최적화 문제의 후보점을 찾는다.

# 직관

Clarke 준미분은 볼록하지 않은 Lipschitz 함수에서 [부분미분](subdifferential.md)을 대신하는 집합이다. 미분가능한 점들의 기울기가 한 점으로 모일 때의 극한을 모아 볼록껍질을 취한 것이고, 그런 점이 거의 어디서나 있다는 것이 [Rademacher 정리](rademacher-theorem.md)다.

국소 극소점과 국소 극대점에서 모두 $0$ 을 포함하므로 최적성의 필요조건만 준다. 볼록 함수에서는 부분미분과 일치한다.

부분미분의 정의 부등식 $f(z)\ge f(x)+\langle p,\thinspace z-x\rangle$ 는 한 점의 접선이 함수 전체의 하한이라는 볼록 함수의 성질을 옮긴 것이다. 볼록하지 않은 함수에 이 부등식을 그대로 쓴다. $f(x)=-\vert x\vert$ 는 상수 $1$ 의 Lipschitz 함수이고 $x=0$ 에서 꺾인다.

$x=0$ 에서 정의 부등식은 모든 $z$ 에서 $-\vert z\vert\ge pz$ 다. $z\gt 0$ 에서 이 부등식은 $-z\ge pz$ 이므로 $p\le -1$ 이고, $z\lt 0$ 에서는 $z\ge pz$ 의 양변을 음수로 나눠 $p\ge 1$ 이다. 두 조건을 함께 만족하는 $p$ 가 없으므로 모은 집합은 공집합이고, 기울기에 대해 아무것도 알려주지 않는다.

$f$ 는 $x\ne 0$ 에서 미분가능하고 기울기가 $-\mathrm{sign}(x)$ 다. 그러면 $0$ 으로 가는 점열의 기울기를 보는 길이 남는다. $x_k\to 0$ 이면서 $x_k\gt 0$ 이면 $\nabla f(x_k)=-1$ 이고 $x_k\lt 0$ 이면 $\nabla f(x_k)=+1$ 이므로, 극한으로 얻는 값은 $-1$ 과 $+1$ 둘이다.

$x=0$ 은 $f$ 의 극대점인데 $\lbrace -1,1\rbrace$ 은 $0$ 을 포함하지 않는다. 두 기울기를 잇는 선분을 전부 넣으면 $\lbrack -1,1\rbrack$ 이 되고 $0$ 이 들어온다. 꺾인 자리에서 극값을 $0$ 으로 가려내려면 극한으로 얻은 기울기의 볼록껍질을 취해야 하고, 그렇게 만든 집합을 Clarke 준미분이라 한다.

# 정의

## Clarke 준미분

$U\subseteq\mathbb{R}^n$ 이 열린집합이고 $f:U\to\mathbb{R}$ 가 국소 Lipschitz 일 때, $f$ 가 미분가능한 점의 집합을 $D$ 라 하고 $x\in U$ 에서의 **Clarke 준미분**을 다음으로 정의한다.

$$
\partial_C f(x)=\mathrm{conv}\lbrace p\in\mathbb{R}^n:p=\lim_{k\to\infty}\nabla f(x_k),\thinspace x_k\to x,\thinspace x_k\in D\rbrace
$$

$\mathrm{conv}$ 는 볼록껍질이다. Rademacher 정리로 $U\setminus D$ 가 Lebesgue 영집합이므로 $x$ 로 가는 $D$ 의 점열이 있고, Lipschitz 조건이 기울기를 유계로 묶으므로 수렴하는 부분열이 있다. 원소 $p$ 를 **일반화 기울기**(generalized gradient)라 한다.

## 일반화 방향도함수

$d\in\mathbb{R}^n$ 방향의 **일반화 방향도함수**는 다음 상극한이다.

$$
f^\circ(x;d)=\limsup_{y\to x,\thinspace t\to 0^+}\frac{f(y+td)-f(y)}{t}
$$

차분몫을 $x$ 에서만 재지 않고 $x$ 근방의 모든 $y$ 에서 재어 가장 큰 값을 취한다. 국소 Lipschitz 상수를 $L$ 이라 하면 차분몫의 절댓값이 $L\Vert d\Vert$ 이하이므로 이 상극한은 항상 유한하다.

# 성질

## 존재와 모양

정리. $f$ 가 $x$ 근방에서 상수 $L$ 의 Lipschitz 조건을 만족하면 $\partial_C f(x)$ 는 공집합이 아닌 볼록 콤팩트 집합이고 모든 원소가 $\Vert p\Vert\le L$ 을 만족한다[^1].

증명의 요지. 공집합이 아닌 것과 유계인 것은 위 정의의 점열 논증이다. 볼록껍질을 취했으므로 볼록하고, 닫힌 것은 유계인 집합의 볼록껍질이 닫힌다는 사실에서 나온다.

## 지지함수 표현

정리. 모든 $d$ 에서 다음이 성립한다[^1].

$$
f^\circ(x;d)=\max_{p\in\partial_C f(x)}\langle p,\thinspace d\rangle
$$

증명의 요지. $d\mapsto f^\circ(x;d)$ 는 양으로 동차이고 볼록이므로 어떤 볼록 콤팩트 집합의 지지함수이고, 그 집합이 $\partial_C f(x)$ 와 같음을 평균값 정리로 확인한다. 이 표현을 정의로 삼으면 Clarke 준미분을 미분가능한 점을 거치지 않고 세울 수 있어, [Banach 공간](banach-spaces.md)으로 옮길 때 쓰는 쪽은 이 표현이다.

## 볼록 함수와의 일치

정리. $f$ 가 볼록이면 $\partial_C f(x)=\partial f(x)$ 다.

증명의 요지. 볼록 함수의 기울기는 미분가능한 점에서 단조이고 부분미분이 닫힌 집합값 사상이므로 기울기의 극한이 $\partial f(x)$ 에 들어간다. 거꾸로 $f^\circ(x;d)$ 가 볼록 함수의 방향도함수 $f'(x;d)$ 와 같으므로 지지함수가 같고, 따라서 두 볼록 콤팩트 집합이 같다.

## 극값의 필요조건

정리. $x$ 가 $f$ 의 국소 극소점이거나 국소 극대점이면 $0\in\partial_C f(x)$ 다.

증명의 요지. 국소 극소점이면 모든 $d$ 에서 $f^\circ(x;d)\ge 0$ 이고 지지함수 표현으로 $0$ 이 집합에 들어간다. 극대점은 $-f$ 에 같은 논증을 쓰고 $\partial_C(-f)(x)=-\partial_C f(x)$ 를 쓴다. 조건을 만족하는 점을 **Clarke 임계점**이라 한다. 볼록 경우의 최적성 조건과 달리 이 조건은 충분조건이 아니다. $f(x)=-\vert x\vert$ 는 $x=0$ 에서 $0\in\lbrack -1,1\rbrack$ 이지만 그 점이 극대점이다.

## 평균값 정리

정리. $f$ 가 $x$ 와 $y$ 를 잇는 선분의 근방에서 국소 Lipschitz 이면, 그 선분 위의 어떤 점 $z$ 와 어떤 $p\in\partial_C f(z)$ 가 있어 $f(y)-f(x)=\langle p,\thinspace y-x\rangle$ 다[^2].

증명의 요지. $g(t)=f(x+t(y-x))$ 에 한 변수 평균값 정리를 쓰고, $g$ 의 Clarke 준미분이 $\langle\partial_C f(x+t(y-x)),\thinspace y-x\rangle$ 에 들어감을 확인한다. 준미분이 선분 위에서 전부 $0$ 이면 $f$ 가 그 선분에서 상수라는 따름정리가 나온다.

## 연산 규칙

정리. $\partial_C(f+g)(x)\subseteq\partial_C f(x)+\partial_C g(x)$ 이고, $f\_1,\dots,f\_m$ 이 국소 Lipschitz 일 때 $F=\max\_i f\_i$ 의 준미분은 $x$ 에서 최대를 주는 지표 $i$ 들의 $\partial_C f\_i(x)$ 의 볼록껍질에 들어간다[^1].

증명의 요지. 둘 다 지지함수 표현으로 옮기면 상극한이 합에 대해 가지는 부등식과 최대에 대해 가지는 부등식이 된다. 볼록 경우의 합 규칙과 달리 등호에는 각 함수가 정칙, 곧 $f^\circ(x;d)$ 가 보통의 단측 방향도함수와 같다는 조건이 필요하다. 볼록 함수와 매끄러운 함수는 정칙이지만 $-\vert x\vert$ 는 $x=0$ 에서 정칙이 아니다.

# 활용

- 비평활 최적화의 정지 조건. $0\in\partial_C f(x)$ 를 수치적으로 쓰려면 한 점의 일반화 기울기 하나만으로는 부족하므로, 묶음 방법은 지난 걸음에서 얻은 기울기들을 모아 준미분을 다면체로 근사한다.
- 최대 함수의 최소화. 유한 개 매끄러운 함수의 최대는 최대를 주는 지표가 둘 이상인 점에서 꺾이고, 그 점의 준미분이 활성 지표의 기울기들의 볼록껍질이다. 민맥스 문제의 최적성 조건을 이 꼴로 쓴다.
- 불연속 벡터장의 미분방정식. 오른쪽이 불연속인 $\dot x=F(x)$ 에서 해를 정의할 때 $F$ 를 근방의 값들의 볼록껍질로 바꾸는 Filippov 의 구성이 같은 꼴이다.
- [역함수 정리](inverse-function-theorem.md). $f:\mathbb{R}^n\to\mathbb{R}^n$ 이 국소 Lipschitz 이고 $\partial_C f(x)$ 의 모든 [행렬](matrices.md)이 가역이면 $f$ 가 $x$ 근방에서 Lipschitz 역사상을 갖는다[^1].
- ReLU(rectified linear unit) 신경망의 자동미분. 활성함수 $\max(0,t)$ 가 $t=0$ 에서 꺾이고 망 전체가 국소 Lipschitz 이므로, 역전파가 그 점에서 돌려주는 값은 기울기가 아니라 준미분의 원소 하나다.

[^1]: F. H. Clarke, *Optimization and Nonsmooth Analysis*, Wiley, 1983, 2.1 절과 2.3 절, 7.1 절.
[^2]: G. Lebourg, *Valeur moyenne pour gradient généralisé*, Comptes Rendus de l'Académie des Sciences Paris 281, 1975, 795–797.

# 연관 문서

## 선수지식

- [Rademacher 정리](rademacher-theorem.md)
- [부분미분](subdifferential.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #machine_learning
