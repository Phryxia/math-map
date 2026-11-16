# 쌍곡평면

# 개요

**쌍곡평면(hyperbolic plane)** 은 위쪽 반평면에서 점의 높이가 낮을수록 길이를 크게 재는 기하다. 높이 $1$ 인 두 점 $-1+i$ 와 $1+i$ 를 잇는 가로 선분은 이 길이로 $2$ 인데, 위로 휘어 올라간 원호를 따라가면 약 $1.763$ 으로 더 짧다. 두 점 사이의 가장 짧은 길이 실수축에 수직으로 서는 반원이라는 것과 이 기하의 대칭이 실계수 [Möbius 변환](mobius-transformations.md)이라는 것을 쓰면 거리, 각, 넓이가 계산된다.

# 직관

위쪽 반평면 $\lbrace x+iy:y\gt 0\rbrace$ 에서 곡선의 길이를 보통 길이 요소 $\vert dz\vert$ 대신 $\vert dz\vert/y$ 를 더해 잰다. 높이 $1$ 에서는 보통 길이와 같고, 높이 $1/2$ 에서는 두 배로 잰다.

$i$ 에서 $2i$ 까지 허수축을 따라가면 길이는 다음이다.

$$
\int\_1^2\frac{dy}{y}=\ln 2
$$

$i$ 에서 $\varepsilon i$ 까지는 $\ln(1/\varepsilon)$ 이므로, 실수축에 다가갈수록 길이가 한없이 커진다. 실수축은 이 기하에서 무한히 먼 곳이다.

$-1+i$ 에서 $1+i$ 까지 가로 선분은 높이가 $1$ 이라 길이가 $2$ 다. 같은 두 점을 원점이 중심이고 반지름이 $\sqrt 2$ 인 원호로 이으면, 원호는 높이가 $1$ 보다 높은 곳을 지나므로 더 짧다. 각 $\theta$ 로 매개화하면 $\vert dz\vert=\sqrt2\thinspace d\theta$, $y=\sqrt2\sin\theta$ 이고 길이는 다음이다.

$$
\int\_{\pi/4}^{3\pi/4}\frac{d\theta}{\sin\theta}=2\ln(1+\sqrt2)\approx 1.763
$$

# 정의

## 상반평면 모형

상반평면 $\mathbb H=\lbrace z\in\mathbb C:\mathrm{Im}\thinspace z\gt 0\rbrace$ 에 다음 [Riemann 계량](riemannian-metrics.md)을 준 것을 쌍곡평면이라 한다.

$$
ds=\frac{\vert dz\vert}{\mathrm{Im}\thinspace z},\qquad ds^2=\frac{dx^2+dy^2}{y^2}
$$

두 점 $z,w\in\mathbb H$ 의 **쌍곡 거리(hyperbolic distance)** $d(z,w)$ 는 $z$ 와 $w$ 를 잇는 매끄러운 곡선의 길이의 하한이다. 직관 절의 계산으로 $d(i,2i)\le\ln 2$, $d(-1+i,1+i)\le 1.763$ 이다.

## 측지선

실수축 위에 중심을 둔 반원과 세로 반직선을 **쌍곡 측지선(hyperbolic geodesic)** 이라 한다. 둘 다 실수축과 직각으로 만난다. 직관 절의 반지름 $\sqrt2$ 인 원호와 허수축이 그 예다.

## 원판 모형

Cayley 변환 $w=(z-i)/(z+i)$ 로 $\mathbb H$ 를 단위원판 $\mathbb D$ 로 옮기면 계량은 다음이 된다. 이것을 **Poincaré 원판 모형(Poincaré disk model)** 이라 한다.

$$
ds=\frac{2\vert dw\vert}{1-\vert w\vert^2}
$$

$i$ 는 원점으로, 허수축은 지름 $(-1,1)$ 로 간다. 원판 모형의 측지선은 지름과, 단위원에 직각으로 만나는 원호다.

# 성질

## 등거리변환

$a,b,c,d$ 가 실수이고 $ad-bc=1$ 인 Möbius 변환 $T(z)=(az+b)/(cz+d)$ 는 $\mathbb H$ 의 등거리변환이다. 다음 두 등식에서 $\vert dT\vert/\mathrm{Im}\thinspace T=\vert dz\vert/\mathrm{Im}\thinspace z$ 가 나온다.

$$
T'(z)=\frac{1}{(cz+d)^2},\qquad \mathrm{Im}\thinspace T(z)=\frac{\mathrm{Im}\thinspace z}{\vert cz+d\vert^2}
$$

방향을 보존하는 $\mathbb H$ 의 등거리변환은 이것뿐이고, 등거리변환군은 $\mathrm{PSL}\_2(\mathbb R)$ 와 동형이다. 이 군은 $\mathbb H$ 의 아무 점을 아무 점으로 보내고, 한 점에서의 방향도 아무 방향으로 돌린다. $z\mapsto 2z$ 는 $i$ 를 $2i$ 로, $z\mapsto z+2$ 는 $-1+i$ 를 $1+i$ 로 보낸다.

## 측지선의 최단성

두 점 사이의 쌍곡 거리는 두 점을 지나는 쌍곡 측지선의 호의 길이와 같고, 그 호가 유일한 최단 곡선이다.

증명의 요지. 허수축 위의 두 점 $i$, $ki$ 를 잇는 곡선의 길이는 $\int\vert dz\vert/y\ge\int\vert dy\vert/y\ge\ln k$ 이고, 등호는 곡선이 허수축을 따라갈 때만이다. 실계수 Möbius 변환은 실수축을 보존하고 각을 보존하므로 세로 반직선을 실수축에 직각인 반원이나 반직선으로 옮긴다. 아무 두 점은 등거리변환으로 허수축 위에 옮길 수 있으므로 일반의 경우가 나온다.

## 거리 공식

두 점 $z,w\in\mathbb H$ 의 쌍곡 거리는 다음이다. [쌍곡함수](hyperbolic-functions.md) $\cosh$ 를 쓴다.

$$
\cosh d(z,w)=1+\frac{\vert z-w\vert^2}{2\thinspace\mathrm{Im}\thinspace z\thinspace\mathrm{Im}\thinspace w}
$$

오른쪽은 등거리변환으로 바뀌지 않으므로 허수축 위의 $i$, $ki$ 에서 확인하면 된다. 그때 오른쪽은 $1+(k-1)^2/(2k)=(k+1/k)/2=\cosh\ln k$ 다. 직관 절의 두 점은 오른쪽이 각각 $5/4$ 와 $3$ 이고, $\cosh\ln 2=5/4$, $\cosh(2\ln(1+\sqrt2))=3$ 이므로 직관 절의 두 길이가 거리다.

## 평행선 공준의 실패

측지선 $\ell$ 과 $\ell$ 위에 없는 점 $p$ 가 있으면 $p$ 를 지나고 $\ell$ 과 만나지 않는 측지선이 무한히 많다. 허수축과 점 $1+i$ 에서, 중심이 $1$ 보다 큰 실수 $c$ 이고 $1+i$ 를 지나는 반원은 반지름이 $\sqrt{(c-1)^2+1}\lt c$ 여서 허수축과 만나지 않는다.

## 곡률과 삼각형의 넓이

쌍곡평면의 Gauss 곡률은 모든 점에서 $-1$ 이다. 넓이 요소는 $dx\thinspace dy/y^2$ 이고, 세 측지선으로 둘러싼 삼각형의 내각이 $\alpha,\beta,\gamma$ 이면 넓이는 다음이다.

$$
\mathrm{Area}=\pi-(\alpha+\beta+\gamma)
$$

[Gauss–Bonnet 정리](gauss-bonnet.md)에 곡률 $-1$ 을 넣으면 나온다. 내각의 합은 $\pi$ 보다 작고, 넓이는 $\pi$ 를 넘지 못한다. 세 꼭짓점이 모두 실수축 위에 있는 삼각형은 내각이 모두 $0$ 이고 넓이가 $\pi$ 다.

# 활용

- [Schwarz–Pick 보조정리](schwarz-pick-lemma.md): 원판의 정칙 자기사상은 원판 모형의 쌍곡 거리를 늘리지 않고, 거리를 보존하는 것은 원판 모형의 등거리변환뿐이다.
- [모듈러 형식](modular-forms.md): $\mathrm{SL}\_2(\mathbb Z)$ 가 쌍곡평면에 등거리변환으로 작용하고, 그 기본 영역은 넓이 $\pi/3$ 인 삼각형이다.
- [Maass 형식](maass-forms.md): 쌍곡평면의 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md) $y^2(\partial\_x^2+\partial\_y^2)$ 의 고유함수로 정의된다.
- [Teichmüller 공간](teichmuller-space.md): 종수 $2$ 이상의 닫힌 곡면은 쌍곡평면을 $\mathrm{PSL}\_2(\mathbb R)$ 의 이산 부분군으로 나눈 것으로 얻는다. 곡면의 넓이는 Gauss–Bonnet 정리로 $4\pi(g-1)$ 이다.
- [쌍곡군](hyperbolic-groups.md): 쌍곡평면의 측지 삼각형이 가늘다는 성질을 군의 Cayley 그래프로 옮긴 것이 쌍곡군의 정의다.

# 연관 문서

## 선수지식

- [Möbius 변환](mobius-transformations.md)
- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #complex_analysis #group_theory
