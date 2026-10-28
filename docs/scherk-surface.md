# Scherk 곡면

# 개요

**Scherk 곡면(Scherk surface)** 은 그래프 $z=\log\cos y-\log\cos x$ 로 주어지는 [극소곡면](minimal-surfaces.md)이다. 넓이를 국소적으로 최소로 하는 곡면의 방정식은 비선형이어서 해를 식으로 적기 어렵지만, 높이를 $f(x)+g(y)$ 꼴로 두면 방정식이 $x$ 와 $y$ 에 대한 [상미분방정식](ordinary-differential-equations.md) 둘로 갈라진다. 그 해가 이 곡면이고, 정사각형 위의 조각을 이어 붙이면 두 방향으로 주기적인 극소곡면이 된다.

# 직관

1834 년 Scherk 가 극소곡면 방정식을 변수분리로 풀어 얻었다.

정사각형 $\lvert x\rvert,\lvert y\rvert\lt\pi/2$ 위의 그래프는 네 변에서 높이가 번갈아 $+\infty$ 와 $-\infty$ 로 간다. 이 조각을 수직선을 따라 이어 붙이면 두 방향으로 주기적인 완비 내장 극소곡면이 되고, 그 단위법벡터 사상은 구면의 점 $4$ 개를 피한다.

극소곡면 방정식 $(1+u\_y^2)u\_{xx}-2u\_xu\_yu\_{xy}+(1+u\_x^2)u\_{yy}=0$ 의 해를 $u(x,y)=f(x)+g(y)$ 꼴에서 찾는다. 그러면 $u\_{xy}=0$ 이고 방정식은

$$
\frac{f''}{1+f'^2}=-\frac{g''}{1+g'^2}
$$

이 된다. 왼쪽은 $x$ 만의 함수, 오른쪽은 $y$ 만의 함수이므로 둘 다 상수 $c$ 다.

$c=0$ 이면 $f$ 와 $g$ 가 일차함수이고 그래프는 평면이다. $c=1$ 이면 $f''=1+f'^2$ 에서 $f'=\tan x$, $f=-\log\cos x$ 이고, $g''=-(1+g'^2)$ 에서 $g=\log\cos y$ 다. 둘을 더한 $u=\log\cos y-\log\cos x$ 가 Scherk 곡면이다.

# 정의

$\cos x\cos y\gt 0$ 인 열린 정사각형들 위에서

$$
u(x,y)=\log\frac{\cos y}{\cos x}
$$

로 정한 그래프를 **Scherk 곡면** 이라 한다. 같은 곡면은 음함수 $e^z\cos x=\cos y$ 의 영점 집합으로도 쓴다. 이 식은 $\cos x\cos y\lt 0$ 인 정사각형 위에서는 해가 없다. 정사각형의 꼭짓점을 지나는 수직선 위에서도 식이 성립하고, 영점 집합 전체가 하나의 매끄러운 곡면이다.

# 성질

## 정사각형 위의 그래프

$Q=\lbrace\lvert x\rvert,\lvert y\rvert\lt\pi/2\rbrace$ 에서 $x\to\pm\pi/2$ 이면 $u\to+\infty$ 이고 $y\to\pm\pi/2$ 이면 $u\to-\infty$ 다. 일차함수가 아닌 극소곡면 방정식의 해가 정사각형 위에 존재하므로, 극소곡면의 Bernstein 정리에서 정의역이 평면 전체라는 가정을 뺄 수 없다.

## 이중 주기성

$e^z\cos x=\cos y$ 는 $x$ 와 $y$ 를 각각 $2\pi$ 만큼 옮겨도 변하지 않으므로 곡면은 두 수평 방향으로 주기적이다. 정사각형 조각들은 꼭짓점을 지나는 수직선에서 만나고, 곡면은 그 직선들을 포함한다. 곡면 전체는 자기교차가 없는 완비 극소곡면이다.

## 단위법벡터 사상

그래프의 위쪽 단위법벡터는 $(-u\_x,-u\_y,1)/\sqrt{1+\vert\nabla u\vert^2}$ 이고, $u\_x=\tan x$, $u\_y=-\tan y$ 는 정사각형 안에서 모든 실수값을 독립적으로 취한다. 그래서 위쪽 반구의 모든 점이 상에 들어가고, 이웃 조각에서 아래쪽 반구가 덮인다. 적도 위에서는 수직선 위의 법벡터만 나오므로, 상이 피하는 점은 적도의 네 점 $(\pm1,0,0)$, $(0,\pm1,0)$ 이다[^1]. [Weierstrass–Enneper 표현](weierstrass-enneper.md)의 Fujimoto 정리가 상한을 $4$ 로 두는데, Scherk 곡면이 그 값에 닿는다.

# 활용

- **경계값이 무한인 [Dirichlet 문제](dirichlet-problem.md).** 볼록 다각형의 변에 $+\infty$ 와 $-\infty$ 를 주는 극소곡면 방정식의 해의 존재를 Jenkins 와 Serrin 이 판정했고, Scherk 곡면이 가장 간단한 예다[^2].
- **주기적 극소곡면의 구성.** 수직선을 포함하는 조각을 그 직선 둘레로 회전 대칭시켜 늘리는 Schwarz 반사 원리로 주기적 극소곡면을 만든다. Scherk 곡면의 이중 주기성이 이 방법으로 나온다.

[^1]: R. Osserman, *A Survey of Minimal Surfaces*, Dover, 1986, §10. Scherk 곡면의 단위법벡터 사상이 피하는 네 점.
[^2]: H. Jenkins, J. Serrin, "Variational problems of minimal surface type II. Boundary value problems for the minimal surface equation", *Archive for Rational Mechanics and Analysis* 21 (1966), 321–342.

# 연관 문서

## 선수지식

- [Weierstrass–Enneper 표현](weierstrass-enneper.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis
