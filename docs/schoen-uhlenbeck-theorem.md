# Schoen–Uhlenbeck 정칙성 정리

# 개요

**Schoen–Uhlenbeck 정칙성 정리(Schoen–Uhlenbeck regularity theorem)** 는 에너지가 가장 작은 조화사상이 불연속일 수 있는 점의 집합이 얼마나 작은지를 정하는 정리다. 공 모양 그릇에 담긴 액정의 분자 방향을 벽에서 모두 바깥을 향하게 고정하면, 그릇 안 어딘가에서 방향이 정해지지 않는 점이 생긴다. 그런 점이 몇 개나, 어떤 모양으로 생길 수 있는지가 이 정리의 물음이다.

이 정리는 작은 공 위의 에너지를 반지름으로 나눈 값이 반지름에 대해 단조라는 사실로 불연속점을 가려내고, 3차원에서는 그런 점이 고립되어 있음을 보인다.

# 직관

액정의 방향장을 단위공 $B\subset\mathbb R^3$ 에서 구면 $S^2$ 로 가는 사상 $u$ 로 적고, 경계에서는 $u(x)=x$ 로 고정한다. 에너지 $\int_B\vert\nabla u\vert^2dx$ 가 가장 작은 $u$ 가 평형 상태다. 이 경계값을 갖는 연속 사상은 없다. 있다면 구면의 항등사상을 공 안에서 한 점으로 줄이는 연속 변형이 생기는데, 항등사상의 [Brouwer 차수](brouwer-degree.md)는 $1$ 이고 상수 사상의 차수는 $0$ 이다.

후보는 $u(x)=x/\vert x\vert$ 다. 원점에서만 정의되지 않고, $\vert\nabla u\vert^2=2/\vert x\vert^2$ 이므로 에너지는 $\int_0^1 (2/r^2)4\pi r^2dr=8\pi$ 로 유한하다. Brezis, Coron, Lieb 는 이 사상이 같은 경계값을 갖는 사상 가운데 에너지가 가장 작다는 것을 증명했다[^2]. 그러므로 최소점에도 불연속점이 있다.

원점 둘레 반지름 $r$ 인 공의 에너지는 $8\pi r$ 이고, 이것을 $r$ 로 나누면 $8\pi$ 로 일정하다. 원점 근처에서 매끄러운 사상이면 이 값은 $r\to 0$ 에서 $0$ 으로 간다. 이 값이 $0$ 으로 가지 않는 점이 불연속점이다.

# 정의

$\Omega\subset\mathbb R^n$ 은 유계 열린집합이고 $N$ 은 $\mathbb R^k$ 에 놓인 콤팩트 매끄러운 다양체다. $H^1(\Omega,N)$ 은 [Sobolev 공간](sobolev-spaces.md) $H^1(\Omega,\mathbb R^k)$ 의 원소 가운데 거의 모든 점에서 값이 $N$ 에 있는 것들의 집합이다. Dirichlet 에너지는 $E(u)=\int_\Omega\vert\nabla u\vert^2dx$ 다.

$u\in H^1(\Omega,N)$ 이 **에너지 최소 사상(energy minimizing map)** 이라는 것은, 모든 공 $B\subset\subset\Omega$ 와 $B$ 밖에서 $u$ 와 같은 모든 $v\in H^1(\Omega,N)$ 에 대해 $E(u)\le E(v)$ 인 것이다. 직관 절의 $x/\vert x\vert$ 가 그 예다. 에너지 최소 사상은 [Hélein 정칙성 정리](helein-regularity-theorem.md)의 약한 조화사상이다.

$u$ 의 **특이점 집합(singular set)** $\mathrm{sing}\thinspace u$ 는 근방에서 $u$ 가 매끄러운 점이 아닌 점 전체다. $x/\vert x\vert$ 의 특이점 집합은 원점 하나다.

# 성질

## 단조 공식

에너지 최소 사상 $u$ 와 점 $a\in\Omega$ 에 대해 다음 값은 $r$ 에 대해 증가한다[^1].

$$
\Theta(a,r)=r^{2-n}\int_{B_r(a)}\vert\nabla u\vert^2dx
$$

증명의 요지. $u(a+\lambda(x-a))$ 꼴의 정의역 변형을 비교 사상으로 쓰면 다음이 나온다.

$$
\frac{d}{dr}\Theta(a,r)=2r^{2-n}\int_{\partial B_r(a)}\Bigl\vert\frac{\partial u}{\partial r}\Bigr\vert^2
$$

등호는 $u$ 가 반지름 방향으로 상수일 때, 곧 $u(a+x)$ 가 $x/\vert x\vert$ 만의 함수일 때 성립한다. 직관 절의 $x/\vert x\vert$ 는 $n=3$ 에서 $\Theta=8\pi$ 로 일정하다.

## ε 정칙성

$n$ 과 $N$ 에만 의존하는 $\varepsilon\gt 0$ 이 있어서, $\Theta(a,r)\lt\varepsilon$ 이면 $u$ 는 $B_{r/2}(a)$ 에서 매끄럽다[^1]. 그러므로 특이점 집합은 $\lim_{r\to 0}\Theta(a,r)\ge\varepsilon$ 인 점들이고 닫힌집합이다.

## 특이점 집합의 차원

에너지 최소 사상의 특이점 집합의 [Hausdorff 차원](hausdorff-dimension.md)은 $n-3$ 이하이고, $n=3$ 이면 특이점은 고립되어 있다[^1]. $x/\vert x\vert$ 는 $n=3$ 에서 이 상한이 정확함을 보인다.

증명의 요지. 특이점 $a$ 에서 $u(a+rx)$ 를 $r\to 0$ 으로 확대한 극한을 접사상(tangent map)이라 한다. 단조 공식의 등호 조건으로 접사상은 반지름 방향으로 상수인 에너지 최소 사상이다. 평면에서 반지름 방향으로 상수인 사상은 상수가 아니면 원점 근처의 에너지가 $\log(1/r)$ 꼴로 발산하므로, 에너지가 유한한 접사상은 상수이고 원점이 특이점이 될 수 없다. Federer 의 차원 축소(dimension reduction)로 이 사실을 높은 차원의 특이점 집합으로 옮긴다.

## 최소성 조건

최소성 없이 약한 조화사상이기만 하면 이 결론은 성립하지 않는다. Rivière 는 3차원 공에서 $S^2$ 로 가는 약한 조화사상 가운데 모든 점에서 불연속인 것을 만들었다[^3].

# 활용

- 액정의 결함. 네마틱 액정의 단순화한 Oseen–Frank 에너지(Oseen–Frank energy)의 평형 상태는 $S^2$ 로 가는 에너지 최소 사상이고, 3차원에서 결함이 점으로만 생긴다는 것을 이 정리가 준다. 점 결함의 모양은 $\pm x/\vert x\vert$ 를 회전한 것뿐임이 Brezis, Coron, Lieb 의 분류다[^2].
- 조화사상의 존재 이론. [변분법의 직접법](direct-method.md)으로 얻는 최소점은 $H^1$ 사상일 뿐이고, 이 정리가 최소점이 특이점 집합 밖에서 매끄러운 조화사상임을 준다.
- 다른 변분 문제. 단조 공식, ε 정칙성, 접대상의 분류, 차원 축소로 이어지는 같은 순서가 최소 곡면과 Yang–Mills 장의 부분 정칙성 증명에서 쓰인다.

[^1]: R. Schoen, K. Uhlenbeck, "A regularity theory for harmonic maps", *Journal of Differential Geometry* **17** (1982), 307–335.

[^2]: H. Brezis, J.-M. Coron, E. H. Lieb, "Harmonic maps with defects", *Communications in Mathematical Physics* **107** (1986), 649–705.

[^3]: T. Rivière, "Everywhere discontinuous harmonic maps into spheres", *Acta Mathematica* **175** (1995), 197–226.

# 연관 문서

## 선수지식

- [Hélein 정칙성 정리](helein-regularity-theorem.md)
- [변분법의 직접법](direct-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
