# Nash 매장 정리

# 개요

**Nash 매장 정리(Nash embedding theorem)** 는 길이와 각을 재는 규칙이 주어진 모든 다양체가, 충분히 큰 유클리드 공간 안에 그 규칙을 바꾸지 않고 놓인다는 정리다. 정사각형의 마주 보는 변을 붙인 평평한 원환면은 도넛 모양으로 $\mathbb R^3$ 에 놓으면 바깥 둘레가 안쪽 둘레보다 길어져 원래의 길이를 지키지 못한다. 이 정리는 그런 도형도 차원을 늘린 유클리드 공간에서는 길이를 지키며 놓인다는 것을 보이므로, 추상적으로 정의한 [Riemann 계량](riemannian-metrics.md)을 언제나 유클리드 공간 안의 곡면에서 잰 길이로 볼 수 있다.

# 직관

정사각형 $\lbrack 0,2\pi\rbrack^2$ 에서 마주 보는 변을 붙이고 길이를 $dx^2+dy^2$ 로 잰다. 이것을 평평한 원환면이라 한다. $y$ 를 고정한 고리는 어느 $y$ 에서나 길이가 $2\pi$ 이다.

도넛 모양으로 $\mathbb R^3$ 에 놓는 사상은 다음과 같다.

$$
(x,y)\mapsto\bigl((2+\cos y)\cos x,\quad (2+\cos y)\sin x,\quad \sin y\bigr)
$$

$y$ 를 고정한 고리는 반지름 $2+\cos y$ 인 원이 되어 길이가 $2\pi$ 에서 $6\pi$ 사이로 바뀐다. 이 사상은 원환면을 겹침 없이 놓지만 길이를 지키지 않는다.

차원을 하나 늘리면 길이를 지키는 사상이 있다.

$$
f(x,y)=(\cos x,\quad \sin x,\quad \cos y,\quad \sin y)
$$

$\partial_xf=(-\sin x,\cos x,0,0)$ 과 $\partial_yf=(0,0,-\sin y,\cos y)$ 는 길이가 $1$ 이고 서로 수직이다. 따라서 $f$ 가 재는 길이는 $dx^2+dy^2$ 와 같다. Nash 매장 정리는 이런 사상이 어느 계량에나 있다는 진술이다.

# 정의

$(M,g)$ 를 $n$ 차원 Riemann 다양체라 한다. 매끄러운 사상 $f:M\to\mathbb R^N$ 이 모든 점 $p$ 와 접벡터 $u,v\in T_pM$ 에서 다음을 만족하면 $f$ 를 **등거리 사상(isometric map)** 이라 한다.

$$
\langle df_p(u),df_p(v)\rangle=g_p(u,v)
$$

등거리 사상이 [Whitney 매장 정리](whitney-embedding.md)의 뜻의 매장이면 **등거리 매장(isometric embedding)** 이라 한다. 직관 절의 $f$ 는 평평한 원환면의 $\mathbb R^4$ 로의 등거리 매장이고, 도넛 사상은 매장이지만 등거리가 아니다.

국소좌표 $x^1,\dots,x^n$ 에서 $f=(f^1,\dots,f^N)$ 으로 쓰면 등거리 조건은 다음 편미분방정식계다.

$$
\sum_{k=1}^{N}\frac{\partial f^k}{\partial x^i}\frac{\partial f^k}{\partial x^j}=g_{ij},\qquad 1\le i\le j\le n
$$

방정식은 $n(n+1)/2$ 개이고 미지함수는 $N$ 개다. 평평한 원환면에서 $n=2$ 이므로 방정식이 셋이고, 직관 절의 $f$ 는 $N=4$ 개의 미지함수로 세 방정식 $\vert\partial_xf\vert^2=1$, $\vert\partial_yf\vert^2=1$, $\langle\partial_xf,\partial_yf\rangle=0$ 을 푼다.

모든 접벡터 $u$ 에서 $\vert df(u)\vert\lt\vert u\vert_g$ 인 매장을 **짧은 매장(short embedding)** 이라 한다. 도넛 사상에 $1/4$ 을 곱하면 고리의 길이가 $2\pi(2+\cos y)/4\lt 2\pi$ 이고 $y$ 방향의 길이도 $1/4$ 배이므로 짧은 매장이다.

# 성질

## 매끄러운 등거리 매장

$n$ 차원 콤팩트 Riemann 다양체는 $N=n(3n+11)/2$ 일 때 $\mathbb R^N$ 으로의 매끄러운 등거리 매장을 갖는다. Nash 가 1956 년에 증명했고, 콤팩트가 아닌 다양체에서도 차원을 더 키우면 성립한다.[^1] Günther 는 차원을 다음으로 줄였다.[^2]

$$
N=\max\Bigl\lbrace\frac{n(n+5)}{2},\thinspace\frac{n(n+3)}{2}+5\Bigr\rbrace
$$

증명의 요지. Whitney 매장 정리로 얻은 매장을 줄여 짧은 매장을 만들고, 모자란 계량 $g-f^\ast\langle\cdot,\cdot\rangle$ 을 작은 조각들의 합으로 나누어 하나씩 보탠다. 조각마다 등거리 조건의 선형화를 풀어야 하는데, 그 해가 $g$ 보다 미분을 덜 갖는다. Nash 는 매 단계에서 함수를 매끄럽게 다듬는 연산자를 끼워 이 손실을 메우는 반복을 썼고, 이 방법을 일반화한 것이 Nash–Moser 음함수 정리(Nash–Moser implicit function theorem)다.

## C¹ 등거리 매장

$N\ge n+1$ 이고 $(M,g)$ 가 $\mathbb R^N$ 으로의 짧은 매장을 가지면, 그 매장에 균등하게 가까운 $C^1$ 등거리 매장이 있다. $N\ge n+2$ 인 경우를 Nash 가 1954 년에, $N=n+1$ 인 경우를 Kuiper 가 1955 년에 증명했다. 이것을 Nash–Kuiper 정리(Nash–Kuiper theorem)라 한다.[^3]

증명의 요지. 짧은 매장에 진폭이 작고 진동이 빠른 주름(corrugation)을 넣으면 주름 방향의 길이가 늘어난다. 주름의 진폭으로 늘어나는 양을 맞추면 모자란 계량의 한 조각이 채워진다. 주름을 점점 작고 빠르게 겹쳐 넣으면 일차 도함수는 균등수렴하지만 이차 도함수는 발산하므로, 극한은 $C^1$ 이고 $C^2$ 가 아니다.

직관 절의 짧은 매장에 이 정리를 적용하면 평평한 원환면의 $\mathbb R^3$ 으로의 $C^1$ 등거리 매장이 있다.

## 매끄러운 경우와 C¹ 경우의 차이

평평한 원환면은 $\mathbb R^3$ 으로의 $C^2$ 등거리 매장을 갖지 않는다. $\mathbb R^3$ 안의 콤팩트 곡면에서 원점으로부터 가장 먼 점의 거리를 $R$ 이라 하면 그 점의 Gauss 곡률은 $1/R^2$ 이상이다. [곡률](curvature.md)의 Theorema Egregium 에 따라 $C^2$ 등거리 매장은 Gauss 곡률을 보존하는데, 평평한 원환면의 Gauss 곡률은 어디서나 $0$ 이다.

Gauss 곡률은 이차 도함수로 정의되므로 $C^1$ 매장에는 이 논증이 적용되지 않는다. 그래서 $N=n+1$ 에서 $C^1$ 등거리 매장은 있고 $C^2$ 등거리 매장은 없는 계량이 존재한다.

# 활용

- [Riemann 계량](riemannian-metrics.md)의 정의. 계량을 다양체 위의 내적의 모임으로 추상적으로 정의해도, 매끄러운 정리에 따라 그것은 유클리드 공간 안의 부분다양체가 물려받은 계량과 같다. 내재적으로 정의한 Riemann 기하가 유클리드 공간의 부분다양체의 기하보다 넓지 않다.
- 주름을 겹쳐 넣는 Nash–Kuiper 의 구성은 Gromov 가 볼록 적분(convex integration)과 h 원리(h-principle)로 일반화했다. De Lellis 와 Székelyhidi 는 같은 방법으로 에너지가 보존되지 않는 비압축성 Euler 방정식의 연속 약해를 만들었다.[^4]

[^1]: J. Nash, "The imbedding problem for Riemannian manifolds", *Annals of Mathematics* **63** (1956), 20–63.

[^2]: M. Günther, "Zum Einbettungssatz von J. Nash", *Mathematische Nachrichten* **144** (1989), 165–187.

[^3]: J. Nash, "C¹ isometric imbeddings", *Annals of Mathematics* **60** (1954), 383–396. N. H. Kuiper, "On C¹-isometric imbeddings I, II", *Indagationes Mathematicae* **17** (1955), 545–556, 683–689.

[^4]: M. Gromov, *Partial Differential Relations*, Springer, 1986. C. De Lellis, L. Székelyhidi Jr., "The h-principle and the equations of fluid dynamics", *Bulletin of the American Mathematical Society* **49** (2012), 347–375.

# 연관 문서

## 선수지식

- [Whitney 매장 정리](whitney-embedding.md)
- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #topology
