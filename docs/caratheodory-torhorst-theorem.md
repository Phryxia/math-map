# Carathéodory–Torhorst 정리

# 개요

**Carathéodory–Torhorst 정리(Carathéodory–Torhorst theorem)** 는 원판을 유계 영역으로 보내는 Riemann 사상이 원판의 경계까지 연속으로 늘어나는 것이 언제인지를 정하는 정리다. 정사각형에서 세로 선분들을 빗살처럼 잘라 낸 영역에서는, 원판의 경계점 하나로 다가가는 경로들의 상이 빗살 사이를 오가며 한 점으로 모이지 않는다. 원판에서 푼 경계값 문제를 이런 영역으로 옮기려면 경계에서 사상이 어떻게 되는지 알아야 한다.

이 정리는 영역의 경계가 국소 연결이면 사상이 경계까지 연속이고, 경계가 Jordan 곡선이면 경계끼리의 위상동형이 된다고 답한다.

# 직관

$f:\mathbb D\to\Omega$ 를 [Riemann 사상정리](riemann-mapping-theorem.md)의 사상이라 하자. 경계점 $\zeta$ 에서 $f$ 가 연속으로 늘어나려면, $\zeta$ 둘레의 작은 반원 $\mathbb D\cap\lbrace\vert z-\zeta\vert=r\rbrace$ 이 잘라 내는 $\zeta$ 쪽 조각의 상이 작아야 한다.

반원의 상은 $\Omega$ 를 가로지르는 곡선이다. $\Omega$ 의 넓이가 $A$ 로 유한하므로 반원의 상이 모두 길 수는 없다. 반지름 $r$ 인 반원의 상의 길이를 $\ell(r)$ 이라 하면 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 다음이 나온다.

$$\int_\delta^{\sqrt\delta}\frac{\ell(r)^2}{r}\thinspace dr\le\pi A$$

왼쪽의 $dr/r$ 을 적분한 값은 $\tfrac12\log(1/\delta)$ 이므로, $(\delta,\sqrt\delta)$ 안의 어떤 $r$ 에서 $\ell(r)^2\le 2\pi A/\log(1/\delta)$ 다. $\delta\to 0$ 이면 그 반원의 상의 길이가 $0$ 으로 간다.

길이가 짧은 곡선은 양 끝이 가깝고, 두 끝은 $\Omega$ 의 경계 위에 있다. 경계가 국소 연결이면 가까운 두 경계점을 경계 안의 작은 연결 집합으로 이을 수 있고, 짧은 곡선과 그 연결 집합이 둘러싼 작은 조각이 $\zeta$ 쪽 조각의 상이다. 빗살 영역에서는 빗살 뿌리 근처의 두 경계점을 경계 안에서 잇는 연결 집합이 빗살 하나를 통째로 지나야 하므로 작게 잡을 수 없다.

# 정의

**Carathéodory–Torhorst 정리** 는 다음이다. $\Omega\subsetneq\mathbb C$ 가 유계 단순연결 영역이고 $f:\mathbb D\to\Omega$ 가 전단사 [등각사상](conformal-mapping.md)이면, $f$ 가 $\overline{\mathbb D}$ 에서 연속인 함수로 늘어날 필요충분조건은 $\partial\Omega$ 가 [국소 연결](connectedness.md)인 것이다[^1].

늘어난 $f$ 가 $\partial\mathbb D$ 에서 단사일 필요충분조건은 $\partial\Omega$ 가 [Jordan 곡선](jordan-curve-theorem.md)인 것이다. 이때 $f$ 는 $\overline{\mathbb D}$ 에서 $\overline\Omega$ 로 가는 위상동형이고, 이 경우를 Carathéodory 정리(Carathéodory's theorem)라 부른다.

세 영역으로 보면 다음과 같다.

| 영역 | 경계 | 경계까지의 연장 |
| --- | --- | --- |
| 정사각형 | Jordan 곡선 | 위상동형 |
| 원판에서 반지름 하나를 뺀 영역 | 국소 연결, Jordan 곡선이 아님 | 연속, 반지름 위의 점마다 원상이 둘 |
| 빗살 영역 | 국소 연결이 아님 | 연속이 아님 |

빗살 영역은 $(0,1)^2$ 에서 선분 $\lbrace 1/n\rbrace\times(0,1/2\rbrack$ ($n\ge 2$) 을 모두 뺀 것이다. 경계는 선분 $\lbrace 0\rbrace\times\lbrack 0,1/2\rbrack$ 위의 점에서 국소 연결이 아니다.

# 성질

## 길이와 넓이의 보조정리

직관 절의 부등식을 정리로 쓰면 다음이다. $f$ 가 $\mathbb D$ 에서 단사 정칙이고 $f(\mathbb D)$ 의 넓이가 $A\lt\infty$ 이면, $\zeta\in\partial\mathbb D$ 와 $0\lt\delta\lt 1$ 에 대해 다음을 만족하는 $r\in(\delta,\sqrt\delta)$ 가 있다. 이것을 Wolff 보조정리(Wolff's lemma), 또는 Courant–Lebesgue 보조정리라 한다[^1].

$$\ell(r)\le\sqrt{\frac{2\pi A}{\log(1/\delta)}}$$

증명의 요지. $\ell(r)=\int\vert f'(\zeta+re^{it})\vert r\thinspace dt$ 에 Cauchy–Schwarz 를 쓰면 $\ell(r)^2\le\pi r\int\vert f'\vert^2r\thinspace dt$ 이고, $r$ 에 대해 $dr/r$ 로 적분하면 오른쪽은 $\pi$ 곱하기 넓이 이하다.

## Prime end

경계가 국소 연결이 아닌 영역에서도 경계를 바꿔 쓰면 대응이 생긴다. $\Omega$ 를 가로질러 경계의 두 점을 잇는 곡선을 crosscut 이라 한다. 지름이 $0$ 으로 가며 서로를 차례로 떼어 내는 crosscut 의 열을 모아 동치류로 나눈 것을 **prime end** 라 한다. Carathéodory 의 prime end 정리(prime end theorem)는 $f$ 가 $\partial\mathbb D$ 의 점과 $\Omega$ 의 prime end 사이의 전단사를 준다는 것이다[^1].

빗살 영역에서 선분 $\lbrace 0\rbrace\times\lbrack 0,1/2\rbrack$ 전체가 prime end 하나에 대응한다. 원판의 경계점 하나가 그 선분 전체로 퍼지므로 $f$ 가 그 점에서 연속이 아니다.

# 활용

- Dirichlet 문제의 이전. Jordan 영역의 [Dirichlet 문제](dirichlet-problem.md)는 $f$ 가 경계끼리의 위상동형이므로 원판의 Poisson 적분으로 풀린다.
- [조화 측도](harmonic-measure.md). Jordan 영역의 조화 측도는 원판 경계의 길이 측도를 $f$ 로 옮긴 것이고, 이 기술은 경계까지의 연장이 있어야 쓸 수 있다.
- 복소 동역학. 다항식의 [Julia 집합](julia-set.md)이 국소 연결이면 바깥 영역의 Riemann 사상이 경계까지 연속이라 바깥 반직선이 모두 Julia 집합의 점에 닿는다. [Mandelbrot 집합](mandelbrot-set.md)의 국소 연결성 추측(Mandelbrot locally connected conjecture, MLC)이 이 꼴의 물음이다.
- [Schwarz–Christoffel 공식](schwarz-christoffel-formula.md). 다각형의 경계는 Jordan 곡선이므로 사상이 꼭짓점까지 늘어나고, 원상 꼭짓점 $x\_k$ 가 정의된다.

[^1]: C. Pommerenke, *Boundary Behaviour of Conformal Maps*, Springer, 1992, 2장.

# 연관 문서

## 선수지식

- [Riemann 사상정리](riemann-mapping-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #topology #analysis
