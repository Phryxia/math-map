# Lobachevsky 함수

# 개요

**Lobachevsky 함수(Lobachevsky function)** 는 쌍곡 3 차원 공간의 사면체 부피를 적는 함수다. 그 부피는 초등함수로 쓰이지 않고, Euclid 공간의 밑면 곱하기 높이에 해당하는 자리를 이 함수가 대신한다. 꼭짓점 넷이 모두 무한원에 있는 이상 정사면체의 부피는 $3\Lambda(\pi/3)=1.0149\ldots$ 다.

# 직관

쌍곡 3 차원 공간의 상반공간 모형(upper half-space model)은 $x_3\gt 0$ 인 점들의 집합이고, 부피는 $dV=dx_1dx_2dx_3/x_3^3$ 로 잰다. 꼭짓점이 모두 무한원에 있는 사면체의 부피를 이 식으로 적분하면, $x_3$ 에 대한 적분을 먼저 하고 남은 밑면의 적분에서 각도 $t$ 에 대한 $\log\sin t$ 꼴의 적분이 나온다. 이 적분은 초등함수로 계산되지 않는다.

$\log\vert 2\sin t\vert$ 는 $t=0$ 에서 $-\infty$ 로 가지만 $\log t$ 만큼 느리게 가므로 $0$ 부터 적분할 수 있다. [Fourier 급수](fourier-series.md) $\log\vert 2\sin t\vert=-\sum_{n\ge 1}\cos(2nt)/n$ 을 $0$ 부터 $\theta$ 까지 항별로 적분하면 다음이 나온다.

$$
-\int_0^\theta\log\vert 2\sin t\vert\thinspace dt=\frac12\sum_{n=1}^{\infty}\frac{\sin2n\theta}{n^2}
$$

계수가 $1/n^2$ 로 줄어 이 급수로 값을 계산한다. $\theta=\pi/3$ 이면 값은 $0.3383\ldots$ 이고, 마주 보는 모서리의 각이 모두 $\pi/3$ 이고 꼭짓점이 모두 무한원에 있는 사면체의 부피가 이 값의 세 배 $1.0149\ldots$ 다.

# 정의

## Lobachevsky 함수

**Lobachevsky 함수** 는 다음 함수다.

$$
\Lambda(\theta)=-\int_0^\theta\log\vert 2\sin t\vert\thinspace dt
$$

피적분함수는 $t$ 가 $\pi$ 의 배수일 때 $-\infty$ 로 발산하지만 로그 특이점이라 적분은 수렴한다. 직관 절의 급수가 $\Lambda(\theta)=\tfrac12\sum_{n\ge1}\sin(2n\theta)/n^2$ 이다. $\theta=\pi/2$ 이면 모든 항의 $\sin n\pi$ 가 $0$ 이므로 $\Lambda(\pi/2)=0$ 이고, $\Lambda(\pi/3)=0.3383139\ldots$, $\Lambda(\pi/6)=0.5074708\ldots$ 이다.

## 이상 사면체

**이상 사면체(ideal tetrahedron)** 는 상반공간 모형에서 꼭짓점 넷이 모두 무한원, 곧 경계 평면 $x_3=0$ 위나 $\infty$ 에 있는 측지 사면체다. 마주 보는 두 모서리에서 두 면이 이루는 이면각(dihedral angle)은 같고, 세 쌍의 이면각 $\alpha,\beta,\gamma$ 는 $\alpha+\beta+\gamma=\pi$ 를 만족하며, 모양은 이 세 각으로 결정된다[^1].

$\alpha=\beta=\gamma=\pi/3$ 인 이상 사면체를 **이상 정사면체(regular ideal tetrahedron)** 라 한다. 직관 절의 부피 $1.0149\ldots$ 인 사면체가 이것이다.

# 성질

## 기본 성질

- 홀함수이고 주기가 $\pi$ 다. 곧 $\Lambda(-\theta)=-\Lambda(\theta)$ 이고 $\Lambda(\theta+\pi)=\Lambda(\theta)$ 다.
- $\pi/2$ 의 배수에서 $0$ 이다. 곧 $\Lambda(0)=\Lambda(\pi/2)=\Lambda(\pi)=0$ 이다.
- $\theta=\pi/6$ 에서 최대 $0.5074708\ldots$ 이고 $\theta=5\pi/6$ 에서 최소다. 두 점에서 $\Lambda'(\theta)=-\log\vert 2\sin\theta\vert=0$ 이다.
- 배각 공식(duplication formula) $\Lambda(2\theta)=2\Lambda(\theta)+2\Lambda\big(\theta+\tfrac\pi2\big)$ 가 성립한다. 부피 사이의 여러 항등식이 이 공식에서 유도된다.

## 이중로그

$\Lambda$ 는 이중로그(dilogarithm) $\mathrm{Li}\_2(z)=\sum_{n\ge 1}z^n/n^2$ 의 허수부로 쓰인다[^2].

$$
\Lambda(\theta)=\tfrac12\mathrm{Im}\thinspace\mathrm{Li}\_2(e^{2i\theta})
$$

$\mathrm{Li}\_2(e^{2i\theta})$ 의 허수부가 $\sum\sin(2n\theta)/n^2$ 이므로 직관 절의 급수와 같다. 쌍곡 부피가 이중로그의 값으로 표현되는 현상([Bloch 군](bloch-group.md), Borel 조절자(Borel regulator))에서 $\Lambda$ 가 가장 단순한 경우다.

## 이상 사면체의 부피

정리(Lobachevsky, Milnor). 이면각이 $\alpha,\beta,\gamma$ 인 이상 사면체의 부피는 다음이다[^1].

$$
\mathrm{Vol}=\Lambda(\alpha)+\Lambda(\beta)+\Lambda(\gamma)
$$

$\alpha+\beta+\gamma=\pi$ 라는 제약 아래 이 합은 $\alpha=\beta=\gamma=\pi/3$ 인 이상 정사면체에서 최대 $3\Lambda(\pi/3)=1.0149416\ldots$ 이고, 쌍곡 3 차원 공간의 어떤 사면체도 이보다 부피가 크지 않다.

꼭짓점이 유한한 일반 사면체에서도 여섯 개의 이면각으로 쓰이는 공식이 있지만 훨씬 복잡하다. 3 차원 다양체의 부피는 다양체를 이상 사면체로 분할해 이 공식으로 계산한다.

## 8 자매듭

8 자매듭(figure-eight knot) $4_1$ 의 여공간 $S^3\setminus4_1$ 은 이상 정사면체 두 개를 붙여 만들어진다. Thurston 이 이 분할로 부피를 계산했다[^1].

$$
\mathrm{Vol}(S^3\setminus4_1)=6\thinspace\Lambda(\pi/3)=2.0298832128\ldots
$$

이 수가 쌍곡 매듭 여공간 가운데 가장 작은 부피다.

## 부피 스펙트럼

[쌍곡 3 다양체](hyperbolic-3-manifolds.md)의 부피 전체가 이루는 집합은 [실수](real-numbers.md)의 정렬집합(well-ordered set)이고 순서형(order type)이 $\omega^\omega$ 이며, 각 부피를 갖는 다양체는 유한개다(Jørgensen–Thurston)[^2]. 그래서 부피로 다양체를 분류할 때 같은 부피를 갖는 후보가 유한개로 줄어든다.

첨점(cusp)이 있는 것 가운데 최소가 8 자매듭 여공간과 그 자매 다양체의 $2.0298\ldots$ 이고, 닫힌 것 가운데 최소가 Weeks 다양체(Weeks manifold)의 $0.9427\ldots$ 다.

## Chern–Simons 불변량과 조절자

부피와 Chern–Simons 불변량(Chern–Simons invariant)을 묶은 [복소수](complex-numbers.md) $\mathrm{CS}+i\thinspace\mathrm{Vol}/2\pi$ 는 Bloch 군의 원소로 표현되고, 이 원소에 [대수적 K 이론](algebraic-k-theory.md)의 조절자를 적용한 값이 부피다.

# 활용

## 볼륨 추측

1 의 $N$ 제곱근 $\zeta=e^{2\pi i/N}$ 에 대해 $\vert 1-e^{i\theta}\vert=2\vert\sin(\theta/2)\vert$ 이므로 $\log\prod_{j=1}^{k}\vert 1-\zeta^j\vert=\sum_{j=1}^{k}\log(2\sin(\pi j/N))$ 이다. 이것은 $\log(2\sin t)$ 의 Riemann 합이고, $k/N$ 을 고정하고 $N\to\infty$ 로 보내면 극한은 다음이다.

$$
\frac1N\sum_{j=1}^{k}\log\Big(2\sin\frac{\pi j}N\Big)\thinspace\longrightarrow\thinspace\frac1\pi\int_0^{\pi k/N}\log(2\sin t)\thinspace dt=-\frac1\pi\Lambda\Big(\frac{\pi k}N\Big)
$$

색 Jones 다항식(colored Jones polynomial)의 항이 이런 곱이므로, 합의 최대항을 찾는 문제가 $\Lambda$ 의 최대화 문제가 된다. [볼륨 추측](volume-conjecture.md)은 8 자매듭에서 이 계산이 $6\Lambda(\pi/3)$ 을 색 Jones 다항식의 증가율로 내놓는다는 것에서 출발했다.

## 3 다양체 불변량의 계산

- 부피 계산. 3 다양체를 이상 사면체로 분할하고 각 사면체의 각을 붙임 방정식(gluing equation)으로 푼 뒤 $\Lambda$ 를 더한다. SnapPy 같은 프로그램이 이 계산을 한다.
- 위상 불변량. Mostow 강직성(Mostow rigidity)에 따라 부피는 위상 불변량이므로, 두 다양체의 부피가 다르면 위상동형이 아니다.
- 양자 위상수학. 조합적 합의 점근에서 $\Lambda$ 가 나타나는 현상이 볼륨 추측, 양자 이중로그(quantum dilogarithm), [Resurgence 이론](resurgence.md)에서 쓰인다.

[^1]: 이상 사면체의 부피 공식과 8 자매듭의 분할은 W. Thurston, *The Geometry and Topology of Three-Manifolds* (강의록, 1978), 특히 4 장과 7 장. $\Lambda$ 의 성질에 대한 표준 참고문헌은 J. Milnor, *Hyperbolic geometry: the first 150 years*, Bull. AMS 6 (1982).
[^2]: 이중로그 및 Bloch 군과의 관계는 D. Zagier, *The dilogarithm function*, in *Frontiers in Number Theory, Physics and Geometry II* (2007). 부피 스펙트럼의 정렬성은 Jørgensen–Thurston 의 결과다.

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)

## 더 알아보기

- [쌍곡 3 다양체](hyperbolic-3-manifolds.md)
- [볼륨 추측](volume-conjecture.md)

#analysis #differential_geometry #topology #computation
