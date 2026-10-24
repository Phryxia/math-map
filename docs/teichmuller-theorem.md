# Teichmüller 정리

# 개요

**Teichmüller 정리(Teichmüller's theorem)** 는 종수 $g\ge 2$ 인 두 표시된 [Riemann 곡면](riemann-surfaces.md) 사이에서 표시를 지키는 [준등각 사상](quasiconformal-maps.md) 가운데 팽창률이 가장 작은 것이 하나 존재하고, 그 Beltrami 계수가 정칙 이차미분으로 주어진다는 정리다. Teichmüller 가 1939 년에 진술했고 Ahlfors 와 Bers 가 증명을 완성했다.[^1]

[Teichmüller 공간](teichmuller-space.md)의 Teichmüller 거리는 팽창률의 하한으로 정의된다. 이 정리로 하한이 달성되고, 그 결과 Teichmüller 공간이 정칙 이차미분 공간의 열린 단위공과 위상동형이다.

# 직관

정사각형 $\lbrack 0,1\rbrack^2$ 을 직사각형 $\lbrack 0,2\rbrack\times\lbrack 0,1\rbrack$ 로 꼭짓점을 꼭짓점으로 보내는 준등각 사상 가운데 팽창률이 가장 작은 것을 찾는다. $f(x+iy)=2x+iy$ 는 팽창률이 $2$ 다. 가로 선분 하나는 길이가 $1$ 이고, 그 상은 직사각형의 왼쪽 변과 오른쪽 변을 잇는 곡선이라 길이가 $2$ 이상이다. 모든 가로 선분에서 이것을 더하고 넓이와 비교하면 팽창률이 $2$ 보다 작은 사상이 없고, $2$ 를 실현하는 것은 가로로 두 배 늘이는 사상뿐이다.

곡면 전체는 직사각형 하나가 아니다. 그래서 곡면을 작은 직사각형 조각으로 덮고, 이웃한 조각끼리 평행이동이나 반 바퀴 회전으로 붙도록 좌표를 고른다. 이런 좌표에서는 모든 조각을 가로로 $K$ 배 늘이는 사상이 붙인 자리에서 어긋나지 않는다. 그 좌표를 주는 자료가 정칙 이차미분이고, 가장 좋은 사상은 어떤 이차미분의 좌표에서 가로로 늘이는 사상이다.

# 정의

## 정칙 이차미분

Riemann 곡면 $X$ 위의 **정칙 이차미분(holomorphic quadratic differential)** $q$ 는 국소좌표 $z$ 마다 정칙함수 $\varphi(z)$ 를 주어 $q=\varphi(z)\thinspace dz^2$ 로 쓰는 것이다. 좌표를 $w$ 로 바꾸면 $\varphi(z)=\psi(w)(dw/dz)^2$ 이 성립한다. 그 공간을 $Q(X)$ 로 쓰고 노름을 $\Vert q\Vert=\int_X\vert\varphi\vert\thinspace dx\thinspace dy$ 로 준다. [Riemann–Roch 정리](riemann-roch.md)로 $g\ge 2$ 이면 $\dim_{\mathbb C}Q(X)=3g-3$ 이다.

$q$ 가 $0$ 이 아닌 점 근처에서 $\zeta=\int\sqrt{\varphi(z)}\thinspace dz$ 로 두면 $q=d\zeta^2$ 이다. 이 $\zeta$ 를 **자연좌표(natural coordinate)** 라 한다. 두 자연좌표는 $\zeta\mapsto\pm\zeta+c$ 로 바뀐다.

## Teichmüller 사상

$q\ne 0$ 이고 $K\gt 1$ 이라 한다. 각 자연좌표 $\zeta=\xi+i\eta$ 에서 $\xi+i\eta\mapsto K\xi+i\eta$ 로 늘이면, 좌표 바꿈 $\zeta\mapsto\pm\zeta+c$ 와 교환하므로 $X$ 위에 새 복소구조 $Y$ 가 정의된다. 항등사상 $X\to Y$ 를 $q$ 와 $K$ 의 **Teichmüller 사상(Teichmüller map)** 이라 한다. Beltrami 계수는

$$
\mu=k\frac{\bar q}{\vert q\vert},\qquad k=\frac{K-1}{K+1}
$$

이다. 자연좌표에서 $K\xi+i\eta=\frac{K+1}{2}\zeta+\frac{K-1}{2}\bar\zeta$ 이므로 $\mu=k$ 이고, $z$ 좌표로 옮기면 $\bar\varphi/\vert\varphi\vert$ 가 곱해진다.

# 성질

## Grötzsch 정리

> **정리 (Grötzsch 1928).** $0\lt a\le b$ 이고 $f$ 가 $\lbrack 0,a\rbrack\times\lbrack 0,1\rbrack$ 을 $\lbrack 0,b\rbrack\times\lbrack 0,1\rbrack$ 로 꼭짓점을 꼭짓점으로 보내는 $K$ 준등각 사상이면 $K\ge b/a$ 이고, 등호는 $f(x+iy)=(b/a)x+iy$ 일 때만 성립한다.

증명의 요지. 높이 $y$ 의 가로 선분의 상은 두 세로 변을 잇는 곡선이므로 $b\le\int_0^a\vert f_x\vert\thinspace dx$ 다. $y$ 로 적분하고 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)과 $(\vert f_z\vert+\vert f_{\bar z}\vert)^2\le K J_f$ 를 쓰면

$$
b^2\le a\iint(\vert f_z\vert+\vert f_{\bar z}\vert)^2\thinspace dx\thinspace dy\le aK\iint J_f\thinspace dx\thinspace dy=aKb
$$

이다. $J_f$ 는 Jacobi 행렬식이고 그 적분은 상의 넓이 $b$ 다.

## 존재 정리

> **정리 (Teichmüller 존재 정리).** $g\ge 2$ 이고 $X,Y$ 가 종수 $g$ 의 표시된 Riemann 곡면이면, 표시를 지키는 준등각 사상 가운데 팽창률이 최소인 $f\colon X\to Y$ 가 존재한다. $f$ 는 등각사상이거나, $\Vert q\Vert=1$ 인 $q\in Q(X)$ 와 $K\gt 1$ 의 Teichmüller 사상이다.

최소 사상의 존재는 $K$ 준등각 사상족의 콤팩트성에서 나온다. 최소 사상이 Teichmüller 사상이라는 것은 Bers 의 논법으로 보인다. 아래 좌표 절의 사상 $\Phi$ 가 유일성 정리로 단사이고, 연속이며 고유(proper)하므로 영역 불변성(invariance of domain)으로 전사다. 따라서 모든 $Y$ 가 어떤 Teichmüller 사상의 상이다.

## 유일성 정리

> **정리 (Teichmüller 유일성 정리).** 위 정리의 최소 사상은 표시의 호모토피류 안에서 유일하다.

증명의 요지는 Grötzsch 정리를 곡면 위에서 반복하는 것이다. $q$ 의 수평 궤적, 곧 $\mathrm{Im}\thinspace\zeta$ 가 일정한 곡선의 길이를 두 사상의 상에서 비교하고 $\Vert q\Vert$ 로 적분해 같은 Cauchy–Schwarz 부등식을 얻는다. 등호 조건이 사상을 하나로 정한다.

## Teichmüller 공간의 좌표

$Q(X)$ 의 열린 단위공 $B$ 의 원소 $q\ne 0$ 에 대해, Beltrami 계수가 $\Vert q\Vert\thinspace\bar q/\vert q\vert$ 인 Teichmüller 사상의 상을 $\Phi(q)$ 로 두고 $\Phi(0)=X$ 로 둔다. 두 정리로 $\Phi\colon B\to\mathcal T_g$ 가 위상동형사상이다. 따라서 $\mathcal T_g$ 는 $\mathbb R^{6g-6}$ 과 위상동형이다. Teichmüller 거리는

$$
d(X,\Phi(q))=\frac12\log\frac{1+\Vert q\Vert}{1-\Vert q\Vert}
$$

이고, $\Vert q\Vert=1$ 인 $q$ 에 대해 $t\mapsto\Phi(\tanh(t)\thinspace q)$ 는 호의 길이로 매개화된 측지선이다. 두 점은 측지선 하나로만 이어진다.

# 활용

## Teichmüller 거리의 계산

[준등각 사상](quasiconformal-maps.md)의 팽창률로 정의한 Teichmüller 거리가 실제로 달성되는 값이 되고, 측지선이 이차미분 하나로 정해진다. [곡선의 모듈라이 공간](moduli-of-curves.md)의 차원 $3g-3$ 은 $Q(X)$ 의 복소차원으로 나타난다.

## 사상류군의 분류

Bers 는 사상류 $\phi$ 에 대해 $\inf_X d(X,\phi X)$ 를 보고 Nielsen–Thurston 분류를 증명했다.[^2] 하한이 $0$ 으로 달성되면 $\phi$ 는 유한위수다. 하한이 양수로 달성되면 $\phi$ 가 어떤 Teichmüller 측지선을 보존하는 유사 Anosov 사상이고, 그 측지선의 이차미분의 수평·수직 엽층이 $\phi$ 가 늘이는 방향과 줄이는 방향이다. 하한이 달성되지 않으면 $\phi$ 는 곡선족을 보존하는 가약 사상이다.

## 평평한 곡면

자연좌표를 붙이는 규칙이 $\zeta\mapsto\pm\zeta+c$ 이므로 $q$ 는 $X$ 의 영점 밖에 평평한 계량 $\vert q\vert$ 를 준다. 이 계량에서 $q$ 의 영점은 원뿔각이 $\pi$ 의 정수배인 점이다. Teichmüller 측지선은 이 평평한 곡면을 가로로 $e^t$ 배, 세로로 $e^{-t}$ 배 하는 변형과 같다.

[^1]: O. Teichmüller, "Extremale quasikonforme Abbildungen und quadratische Differentiale", *Abhandlungen der Preußischen Akademie der Wissenschaften, Math.-naturw. Klasse* 1939, Nr. 22 (1940). L. V. Ahlfors, "On quasiconformal mappings", *Journal d'Analyse Mathématique* 3 (1954), 1–58. 교과서 서술은 Y. Imayoshi, M. Taniguchi, *An Introduction to Teichmüller Spaces*, Springer (1992).

[^2]: L. Bers, "An extremal problem for quasiconformal mappings and a theorem by Thurston", *Acta Mathematica* 141 (1978), 73–98.

# 연관 문서

## 선수지식

- [준등각 사상](quasiconformal-maps.md)
- [Teichmüller 공간](teichmuller-space.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #topology #differential_geometry #theorem
